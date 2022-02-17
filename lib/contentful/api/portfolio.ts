import { gql } from '@apollo/client';
import type { Document } from '@contentful/rich-text-types';

import { BaseApi } from './base';

interface BlockAssetLink {
    sys: {
        id: string;
    };
    url: string;
    title: string;
    width: number;
    height: number;
    description: string;
}

interface Tag {
    id: string;
    name: string;
}

export interface PortfolioItem {
    sys: { id: string };
    contentfulMetadata: {
        tags: Tag[];
    };
    title: string;
    slug: string;
    description: string;
    coverImage: {
        url: string;
        width: number;
        height: number;
    };
    body: {
        json: Document;
        links: {
            assets: {
                block: BlockAssetLink[];
            };
        };
    };
}

interface PortfolioItemsData {
    portfolioItemCollection: {
        total: number;
        items: PortfolioItem[];
    };
}

export class PortfolioApi extends BaseApi {
    async getPortfolioItems() {
        const { data } = await this.client.query<PortfolioItemsData>({
            query: gql`
                query PortfolioItems {
                    portfolioItemCollection(limit: 10) {
                        total
                        items {
                            sys {
                                id
                            }
                            contentfulMetadata {
                                tags {
                                    id
                                    name
                                }
                            }
                            title
                            slug
                            description
                            coverImage {
                                url
                                width
                                height
                            }
                            body {
                                json
                                links {
                                    assets {
                                        block {
                                            sys {
                                                id
                                            }
                                            url
                                            title
                                            width
                                            height
                                            description
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            `,
        });

        return data.portfolioItemCollection;
    }
}
