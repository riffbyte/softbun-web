import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
import type { NormalizedCacheObject } from '@apollo/client';

import { getClientParams, possibleTypes } from './util';

export class BaseApi {
    protected client: ApolloClient<NormalizedCacheObject>;

    constructor(preview = false) {
        const { space, accessToken } = getClientParams(preview);

        this.client = new ApolloClient({
            uri: `https://graphql.contentful.com/content/v1/spaces/${space}`,
            ssrMode: true,
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
            cache: new InMemoryCache({ possibleTypes }),
        });
    }

    protected CORE_ENTRY_FIELDS_FRAGMENT = gql`
        fragment CoreEntryFields on Entry {
            sys {
                id
            }
            contentfulMetadata {
                tags {
                    id
                    name
                }
            }
        }
    `;

    protected ASSET_FIELDS_FRAGMENT = gql`
        fragment AssetFields on Asset {
            sys {
                id
            }
            url
            size
            fileName
            title
            width
            height
            description
            contentType
        }
    `;
}
