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

function isPreviewEnvironment() {
    if (process.env.VERCEL_ENV === 'development' || process.env.VERCEL_ENV === 'preview') {
        return true;
    }

    return process.env.NODE_ENV !== 'production';
}

export function getClientParams(preview: boolean): CreateClientParams {
    if (preview === true || isPreviewEnvironment()) {
        return previewParams;
    }

    return productionParams;
}
