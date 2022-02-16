import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    // eslint-disable-next-line class-methods-use-this
    render() {
        return (
            <Html>
                <Head />
                <body className="dark">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
