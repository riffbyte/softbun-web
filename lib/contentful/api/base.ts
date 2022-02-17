import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
import type { NormalizedCacheObject } from '@apollo/client';

import { getClientParams } from './util';

export class BaseApi {
    protected client: ApolloClient<NormalizedCacheObject>;

    constructor(preview = false) {
        const { space, accessToken } = getClientParams(preview);

        this.client = new ApolloClient({
            uri: `https://graphql.contentful.com/content/v1/spaces/${space}`,
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
            cache: new InMemoryCache(),
        });
    }

    // TODO: Figure out why fragments don't work as expected
    protected CORE_ENTRY_FIELDS = `
        sys {
            id
        }
        contentfulMetadata {
            tags {
                id
                name
            }
        }
    `;

    protected ASSET_FIELDS = `
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
    `;
}
