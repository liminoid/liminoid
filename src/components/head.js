import React from 'react';
import { Helmet } from 'react-helmet';

export default props => {
  const title = [props.title, 'Liminoid'].filter(Boolean).join(' | ');

  return (
    <Helmet
      htmlAttributes={{
        lang: 'en-us'
      }}
    >
      <title>{title}</title>
      <link rel="icon" href="images/favicon.gif" type="image/gif"></link>
      <meta
        name="description"
        content="Local-first interactive Python documents."
      />
      <link href="fonts/fonts.css" rel="stylesheet" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@liminoid_io" />
      <meta name="twitter:title" content={title} />
      <meta
        name="twitter:description"
        content="Local-first interactive Python documents."
      />
      <meta
        name="twitter:image"
        content="https://liminoid.io/images/logo.gif"
      />
      <meta name="twitter:image:alt" content="Liminoid animated logo" />
    </Helmet>
  );
};
