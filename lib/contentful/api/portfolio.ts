import { gql } from '@apollo/client';

import type { Asset, EntryCollection, EntryWithBody } from '../types';

import { BaseApi } from './base';

export interface PortfolioItem extends EntryWithBody {
    title: string;
    slug: string;
    description: string;
    coverImage: Asset;
}

interface PortfolioItemsData {
    portfolioItemCollection: EntryCollection<PortfolioItem>;
}

interface GetPortfolioItemsOptions {
    featured?: boolean;
}

export class PortfolioApi extends BaseApi {
    protected ENTRY_BODY_FIELDS_FRAGMENT = gql`
        fragment EntryBodyFields on PortfolioItem {
            body {
                json
                links {
                    entries {
                        inline {
                            sys {
                                id
                            }
                            __typename
                        }
                        block {
                            sys {
                                id
                            }
                            __typename
                        }
                    }
                    assets {
                        block {
                            ...AssetFields
                        }
                    }
                }
            }
        }
    `;

    async getPortfolioItems({ featured }: GetPortfolioItemsOptions = {}) {
        const whereClause = featured ? '{ featured: true }' : '{ featured_not: true }';

        const { data } = await this.client.query<PortfolioItemsData>({
            query: gql`
                query PortfolioItems {
                    portfolioItemCollection(limit: 10, where: ${whereClause}) {
                        total
                        items {
                            ...CoreEntryFields
                            title
                            slug
                            description
                            coverImage {
                                ...AssetFields
                            }
                        }
                    }
                }
                ${this.CORE_ENTRY_FIELDS_FRAGMENT}
                ${this.ASSET_FIELDS_FRAGMENT}
            `,
        });

        return data.portfolioItemCollection;
    }
}
