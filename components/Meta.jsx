import Head from 'next/head';
import { config, dom } from '@fortawesome/fontawesome-svg-core';

export default function Meta() {
  config.autoAddCss = false;

  return (
    <Head>
      <title>Ryan Mehri :: Software Engineer</title>
      <meta name="title" content="Ryan Mehri :: Software Engineer" />
      <meta name="description" content="Hey there! I'm Ryan, a computer science student interested in programming language theory, compilers, and developer tooling." />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.ryanmehri.dev" />
      <meta property="og:title" content="Ryan Mehri :: Software Engineer" />
      <meta property="og:description" content="Hey there! I'm Ryan, a computer science student interested in programming language theory, compilers, and developer tooling." />
      <meta property="og:image" content="/profile.jpg" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.ryanmehri.dev" />
      <meta property="twitter:title" content="Ryan Mehri :: Software Engineer" />
      <meta property="twitter:description" content="Hey there! I'm Ryan, a computer science student interested in programming language theory, compilers, and developer tooling." />
      <meta property="twitter:image" content="/profile.jpg" />

      <link rel="icon" href="/favicon.ico" />
      <style>{dom.css()}</style>
    </Head>
  );
}
