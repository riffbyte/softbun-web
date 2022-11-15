export interface AlgoliaSettings {
    readonly ALGOLIA_API_KEY: string;
    readonly ALGOLIA_APP_ID: string;
    readonly ALGOLIA_INDEX: string;
}

export interface PrezlyNewsroomEnv {
    readonly PREZLY_ACCESS_TOKEN: string;
    readonly PREZLY_NEWSROOM_UUID: string;
    readonly PREZLY_THEME_UUID?: string;
    readonly PREZLY_MODE?: 'preview';
}

export interface PrezlyEnv extends PrezlyNewsroomEnv, AlgoliaSettings {}
