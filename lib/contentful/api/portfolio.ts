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

export class PortfolioApi extends BaseApi {
    // TODO: Debug this
    // protected ENTRY_BODY_FIELDS = gql`
    //     fragment EntryBodyFields on PortfolioItem {
    //         body {
    //             json
    //             links {
    //                 entries {
    //                     inline {
    //                         sys {
    //                             id
    //                         }
    //                         __typename
    //                     }
    //                     block {
    //                         sys {
    //                             id
    //                         }
    //                         __typename
    //                     }
    //                 }
    //                 assets {
    //                     block {
    //                         ${this.ASSET_FIELDS}
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // `;

    async getPortfolioItems() {
        const { data } = await this.client.query<PortfolioItemsData>({
            query: gql`
                query PortfolioItems {
                    portfolioItemCollection(limit: 10) {
                        total
                        items {
                            ${this.CORE_ENTRY_FIELDS}
                            title
                            slug
                            description
                            coverImage {
                                ${this.ASSET_FIELDS}
                            }
                        }
                    }
                }
            `,
        });

        return data.portfolioItemCollection;
    }
}
