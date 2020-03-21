import React from 'react';
import Layout from './components/layout';

export { default as Layout } from './components/layout';
export * from './components/blocks';
export { default as Logo } from './components/logo';

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);
