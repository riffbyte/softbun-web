const fetch = require('node-fetch');
const fs = require('fs');
const dotenv = require('dotenv');
dotenv.config({ path: '.env.local' });

const space = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN;

fetch(`https://graphql.contentful.com/content/v1/spaces/${space}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${accessToken}` },
    body: JSON.stringify({
        variables: {},
        query: `
      {
        __schema {
          types {
            kind
            name
            possibleTypes {
              name
            }
          }
        }
      }
    `,
    }),
})
    .then((result) => result.json())
    .then((result) => {
        const introspectionData = result.data.__schema.types
            // here we're filtering out any type information unrelated to unions or interfaces
            .filter((type) => type.possibleTypes !== null)
            .reduce(
                (map, type) => ({
                    ...map,
                    [type.name]: type.possibleTypes.map(({ name }) => name),
                }),
                {},
            );

        fs.writeFile(
            './lib/contentful/api/util/fragmentTypes.json',
            JSON.stringify(introspectionData),
            (err) => {
                if (err) {
                    console.error('Error writing fragmentTypes file', err);
                } else {
                    console.log('Fragment types successfully extracted!');
                }
            },
        );
    });
