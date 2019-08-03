import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import { Head } from 'gatsby-plugin-i18next';

import Header from './header';
import Footer from './footer';
import layoutStyles from './styles/layout.module.css';

const Layout = ({ children, data, t }) => (
  <div className={layoutStyles.wrapper}>
    <Head hreflang>
      <title>{t('Directors')}</title>
      <meta name="description" content="Sample" />
      <meta name="keywords" content="gatsby, react, wapps, i18next" />
    </Head>
    <div className={layoutStyles.content}>
      <Header siteTitle={t('Directors')} linkCatalog={t('Catalog')} linkHome={t('Home')}/>
      {children}
    </div>
    <Footer create={t('Created')} />
   
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default translate()(Layout);
