import type { Document } from '@contentful/rich-text-types';

export interface Tag {
    id: string;
    name: string;
}

export interface Entry {
    sys: {
        id: string;
    };
    contentfulMetadata: {
        tags: Tag[];
    };
}

export interface EntryCollection<T extends Entry> {
    total: number;
    items: T[];
}

export interface Asset extends Entry {
    title: string;
    description: string;
    contentType: string;
    fileName: string;
    size: number;
    url: string;
    width: number;
    height: number;
}

export interface EntryWithBody extends Entry {
    body: {
        json: Document;
        links: {
            entries: {
                block: Entry[];
                inline: Entry[];
            };
            assets: {
                block: Asset[];
            };
        };
    };
}
