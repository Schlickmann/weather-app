/* eslint-disable import/extensions */
// eslint-disable-next-line import/no-extraneous-dependencies
import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import App from './app.js';

render(<App />, document.getElementById('app'));
