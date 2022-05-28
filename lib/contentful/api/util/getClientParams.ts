interface ContentfulClientParams {
    space: string;
    accessToken: string;
}

const productionParams: ContentfulClientParams = {
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
};

const previewParams: ContentfulClientParams = {
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
};

function isPreviewEnvironment() {
    if (process.env.VERCEL_ENV === 'development' || process.env.VERCEL_ENV === 'preview') {
        return true;
    }

    return process.env.NODE_ENV !== 'production';
}

export function getClientParams(preview: boolean): ContentfulClientParams {
    if (preview === true || isPreviewEnvironment()) {
        return previewParams;
    }

    return productionParams;
}
