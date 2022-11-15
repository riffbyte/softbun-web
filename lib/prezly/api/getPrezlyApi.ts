import { getEnvVariables } from './lib/getEnvVariables';
import { PrezlyApi } from './PrezlyApi';

export function getPrezlyApi(): PrezlyApi {
    if (typeof window !== 'undefined') {
        throw new Error('"getPrezlyApi" should only be used on back-end side.');
    }

    const { PREZLY_ACCESS_TOKEN, PREZLY_NEWSROOM_UUID, PREZLY_THEME_UUID } = getEnvVariables();

    if (!PREZLY_ACCESS_TOKEN) {
        throw new Error('"PREZLY_ACCESS_TOKEN" is not set in env variables.');
    }

    if (!PREZLY_NEWSROOM_UUID) {
        throw new Error('"PREZLY_NEWSROOM_UUID" is not set in env variables.');
    }

    return new PrezlyApi(PREZLY_ACCESS_TOKEN, PREZLY_NEWSROOM_UUID, PREZLY_THEME_UUID);
}
