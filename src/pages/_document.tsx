import Document, {Html, Head, Main, NextScript} from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="icon" href="/favicon.ico"/>
                    <title>XX科技</title>
                    <meta name="description" content="xx解决方案。"></meta>
                    <meta name="keywords" content="XX|XX科技|驾驶导航"></meta>
                </Head>
                <body>
                <link rel="stylesheet" type="text/css"/>
                <Main/>
                <NextScript/>
                </body>
            </Html>
    );
    }
}
export default MyDocument;
