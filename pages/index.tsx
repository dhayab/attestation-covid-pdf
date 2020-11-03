import Head from 'next/head';

export default function Home() {
  const title = `API PDF pour l'attestation COVID-19`;
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <h1>{title}</h1>
    </div>
  )
}
