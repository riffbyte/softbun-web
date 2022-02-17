import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import type { Options } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import type { Document } from '@contentful/rich-text-types';
import Image from 'next/image';

function renderOptions(links: any): Options {
    // create an asset map
    const assetMap = new Map();
    // loop through the assets and add them to the map
    links.assets.block.forEach((asset: any) => {
        assetMap.set(asset.sys.id, asset);
    });

    return {
        renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: (node) => {
                // find the asset in the assetMap by ID
                const asset = assetMap.get(node.data.target.sys.id);

                // render the asset accordingly
                return (
                    <Image
                        src={asset.url}
                        alt={asset.title}
                        width={asset.width}
                        height={asset.height}
                    />
                );
            },
        },
    };
}

export function renderRichText({ json, links }: { json: Document; links: any }) {
    return documentToReactComponents(json, renderOptions(links));
}
