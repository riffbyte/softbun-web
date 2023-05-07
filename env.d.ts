import type { ContentfulEnv } from '@/lib/contentful/types';

declare global {
    export namespace NodeJS {
        export interface ProcessEnv extends ContentfulEnv {}
    }
}
