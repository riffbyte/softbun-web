import { gql } from '@apollo/client';

import type { Entry, EntryCollection, RichText } from '../types';

import { BaseApi } from './base';

export interface CareerItem extends Entry {
    position: string;
    company: string;
    companyUrl: string;
    startedAt: string;
    finishedAt: string;
    description: RichText;
}

interface CareerItemsData {
    careerItemCollection: EntryCollection<CareerItem>;
}

export class CareerApi extends BaseApi {
    async getCareerItems() {
        const { data } = await this.client.query<CareerItemsData>({
            query: gql`
                ${this.CORE_ENTRY_FIELDS_FRAGMENT}
                query CareerItems {
                    careerItemCollection(limit: 10, order: startedAt_DESC) {
                        total
                        items {
                            ...CoreEntryFields
                            position
                            company
                            companyUrl
                            startedAt
                            finishedAt
                            description {
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
                                }
                            }
                        }
                    }
                }
            `,
        });

        return data.careerItemCollection;
    }
}
