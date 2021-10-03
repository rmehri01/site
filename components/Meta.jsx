import Head from 'next/head';
import { config, dom } from '@fortawesome/fontawesome-svg-core';

export default function Meta() {
  config.autoAddCss = false;

  return (
    <Head>
      <title>Ryan Mehri :: Software Engineer</title>
      <meta name="description" content="Hey there! I'm Ryan, a computer science student interested in programming language theory, compilers, and developer tooling." />
      <link rel="icon" href="/favicon.ico" />
      <style>{dom.css()}</style>
    </Head>
  );
}
