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
        content="Web assembly toolkit for building local-first analytics applications"
      />
      <link href="/liminal.css" rel="stylesheet" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@liminoid_io" />
      <meta name="twitter:title" content={title} />
      <meta
        name="twitter:description"
        content="Web assembly toolkit for building local-first analytics applications"
      />
      <meta
        name="twitter:image"
        content="https://liminoid.io/images/icon.png"
      />
      <meta name="twitter:image:alt" content="Liminoid logo" />
    </Helmet>
  );
};
