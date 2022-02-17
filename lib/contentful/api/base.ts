import { ApolloClient, InMemoryCache } from '@apollo/client';
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
}
