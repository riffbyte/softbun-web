import type { Document } from '@contentful/rich-text-types';

export interface ContentfulEnv {
    readonly CONTENTFUL_SPACE_ID: string;
    readonly CONTENTFUL_ACCESS_TOKEN: string;
    readonly CONTENTFUL_PREVIEW_ACCESS_TOKEN: string;
}

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

export interface RichText {
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
}

export interface EntryWithBody extends Entry {
    body: RichText;
}
