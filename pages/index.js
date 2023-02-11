import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to paraphrasecheck!" />
        <p className="description">
          Now Detecting Paraphrase Plag is Easy </code>
    
        </p>
    
    

      </main>

      <Footer />
    </div>
  )
}
