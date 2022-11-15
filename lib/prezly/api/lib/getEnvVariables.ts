import type { PrezlyEnv } from '../types';

export function getEnvVariables(): PrezlyEnv {
    if (typeof window !== 'undefined') {
        throw new Error('"getEnvVariables" should only be used on back-end side.');
    }

    // Next statically processes the env variables, so we need to address each value explicitly
    return {
        PREZLY_ACCESS_TOKEN: process.env.PREZLY_ACCESS_TOKEN,
        PREZLY_NEWSROOM_UUID: process.env.PREZLY_NEWSROOM_UUID,
        PREZLY_MODE: process.env.PREZLY_MODE,
        ALGOLIA_API_KEY: process.env.ALGOLIA_API_KEY,
        ALGOLIA_APP_ID: process.env.ALGOLIA_APP_ID,
        ALGOLIA_INDEX: process.env.ALGOLIA_INDEX,
    };
}
