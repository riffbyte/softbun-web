import type { CreateClientParams } from 'contentful';

const productionParams: CreateClientParams = {
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
};

const previewParams: CreateClientParams = {
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
    host: 'preview.contentful.com',
};

export function getClientParams(preview: boolean): CreateClientParams {
    if (preview === true) {
        return previewParams;
    }

    return productionParams;
}
