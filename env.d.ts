import type { ContentfulEnv } from '@/lib/contentful/types';
import type { PrezlyEnv } from '@/lib/prezly/api/types';

declare global {
    export namespace NodeJS {
        export interface ProcessEnv extends ContentfulEnv, PrezlyEnv {}
    }
}
