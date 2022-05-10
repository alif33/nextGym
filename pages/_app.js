import { createWrapper } from 'next-redux-wrapper';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from '../store';
import "../styles/css/bootstrap-extended.css";
import "../styles/css/bootstrap.css";
import "../styles/css/colors.css";
import "../styles/css/components.css";
import "../styles/css/core/menu/menu-types/vertical-menu.css";
import "../styles/css/pages/authentication.css";
import "../styles/css/pages/page-pricing.css";
import { css } from "@emotion/react";


// import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}


const makestore = () => store;
const wrapper = createWrapper(makestore);
export default wrapper.withRedux(MyApp);
