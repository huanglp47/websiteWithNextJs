import "../assets/scss/index.scss";
import MainLayout from "src/layouts/MainLayouts";

function MyApp({ Component, pageProps }) {
  const SubLayout = Component.getLayout || ((page) => page);

  return (
    <MainLayout>
      {SubLayout(
      <Component {...pageProps} />)}
    </MainLayout>
  );
}

export default MyApp;
