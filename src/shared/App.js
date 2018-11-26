import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import { AppProvider, RelayProvider } from '../components/providers';
import Helmet from 'react-helmet';
import Header from '../components/common/header';
import Footer from '../components/common/footer';

const App = props => {
  const { children } = props;
  return (
    <AppProvider>
      <div id="mcont">
        <Helmet>
          <html lang="en" />
          <meta charSet="utf-8" />
          <meta name="application-name" content="modern relay poc" />
          <meta name="description" content="modern relay poc" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
          />
          <title>The Autoparts Shop</title>
        </Helmet>
        <div>
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    </AppProvider>
  );
};

export default createFragmentContainer(App, {
  store: graphql`
    fragment App_store on Store {
      idQuery
    }
  `,
});
