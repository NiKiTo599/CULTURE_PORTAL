import React from 'react';
import { Language } from 'gatsby-plugin-i18next';

import headerStyle from './styles/header.module.css';

const Switcher = ({ changeLng, lng, availableLngs }) => (
    <select  className={ headerStyle.lang_select } onChange={e => changeLng(e.target.value)}>
      {availableLngs.map(value => (
        <option key={value} selected={lng === value}>
          {value}
        </option>
      ))}
      ;
    </select>
  );
  
  export default props => (
    <Language>{lngProps => <Switcher {...props} {...lngProps} />}</Language>
  );
  