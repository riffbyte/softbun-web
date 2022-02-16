import { createClient } from 'contentful';
import type { ContentfulClientApi, EntryCollection } from 'contentful';

import { getClientParams } from './util';

export class BaseApi {
    protected client: ContentfulClientApi;

    constructor(preview = false) {
        const params = getClientParams(preview);
        this.client = createClient(params);
    }

    protected getEntry<T = any>(...args: Parameters<ContentfulClientApi['getEntry']>) {
        return this.client.getEntry<T>(...args);
    }

    protected getEntries<T = any>(...args: Parameters<ContentfulClientApi['getEntries']>) {
        return this.client.getEntries<T>(...args);
    }

    protected getItems<T = any>(entries: EntryCollection<T>): T[] {
        if (entries && entries.items && entries.items.length > 0) {
            return entries.items.map((item) => item.fields);
        }

        return [];
    }
}
