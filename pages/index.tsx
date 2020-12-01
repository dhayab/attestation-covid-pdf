import { GetStaticProps } from 'next';
import Head from 'next/head';

import { markdownToHtml } from '../utils/markdownToHtml';

type Home = {
  title: string,
  content: string,
};

export const getStaticProps: GetStaticProps = async () => {
  const content = markdownToHtml('README.md');

  return {
    props: {
      title: `API de génération de l'attestation COVID-19`,
      content,
    } as Home,
  };
};

export default function Home({ title, content }: Home) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="content markdown-body" dangerouslySetInnerHTML={{ __html: content }}></div>
    </div>
  )
}
