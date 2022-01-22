import type { NextPage } from 'next';
import { Coffee } from 'react-feather';

import { Layout } from '@/components';

const Home: NextPage = () => {
    return (
        <Layout centered>
            <div className="text-center text-gray-900 dark:text-white">
                <Coffee
                    className="mx-auto mb-4 text-aquamarine-darker dark:text-aquamarine animate-pulse"
                    size={80}
                    strokeWidth="1px"
                />
                <h1 className="text-3xl font-bold">Soft Bun Dev</h1>
                <h2 className="text-xl mt-4">
                    Some cool stuff brewing
                    <span className="animated-ellipsis" />
                </h2>
            </div>
        </Layout>
    );
};

export default Home;
