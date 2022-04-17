const dotenv = require('dotenv');
dotenv.config({ path: '.env.local' });

const space = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN;

/** @type {import('graphql-config').IGraphQLConfig} */
module.exports = {
    schema: `https://graphql.contentful.com/content/v1/spaces/${space}?access_token=${accessToken}`,
    extensions: {
        /** @type {import('@graphql-codegen/cli').LoadCodegenConfigResult['config']} */
        codegen: {
            // documents: 'src/**/*.graphql',
            overwrite: true,
            generates: {
                'lib/contentful/api/util/graphql.ts': {
                    plugins: [{ typescript: { declarationKind: 'interface' } }],
                },
                'lib/contentful/api/util/introspection.json': {
                    plugins: ['fragment-matcher'],
                },
            },
        },
    },
};
