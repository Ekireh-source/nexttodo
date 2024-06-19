import '@styles/globals.css';

function MyApp({ Component, pageProps }) {
    // Use the custom layout if defined, otherwise use the default layout
    const getLayout = Component.getLayout || ((page) => page);

    return getLayout(<Component {...pageProps} />);
}

export default MyApp;