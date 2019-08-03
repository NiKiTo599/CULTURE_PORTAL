import React from 'react';
import { graphql } from 'gatsby';
import { I18n } from 'react-i18next';
import { Link, withI18next } from 'gatsby-plugin-i18next';

import Layout from '../components/layout';
import Fullscreen from "./homePageComponents/fullscreen";
import DirectorOfDay from "./homePageComponents/directorOfDay";
import Team from "./homePageComponents/team";

const IndexPage = () => (
  <I18n>
    {t => (
      <Layout>
        <Fullscreen titleFullscreen={t('Theater Directors of Belarus')} web={t('Web catalog')}/>
        <DirectorOfDay titlePartOne={t('director')} titlePartTwo={t('day')} person={t('Ignat Buynitsky')} more={t('more')} about={t('about')} period={t('years of life')} work={t('work')}/>
        <Team number={t('team number')} Mikita={t('Mikita')} Katsiaryna={t('Katsiaryna')} Volha={t('Volha')} Yauheni={t('Yauheni')}/>
      </Layout>
    )}
  </I18n>
);

export default withI18next()(IndexPage);

export const query = graphql`
  query($lng: String!) {
    locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "messages" } }) {
      ...TranslationFragment
    }
  }
`;
