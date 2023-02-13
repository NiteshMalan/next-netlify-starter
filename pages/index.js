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
        <Header title="Welcome to Paraphrase Check!!" />
        <p className="description">
          Submitted your abstracts now <code>pages/index.js</code>
        </p>
<form>
  <p>
    <label>Abstract 1: <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Abstract 2: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
      </main>

      <Footer />
    </div>
  )
}
