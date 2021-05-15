import Head from 'next/head';
import styles from './index.module.scss';
import Terminal from '../components/Terminal';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sammiepls</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <header className={styles.header}>
          <h1 className={styles.title}>Sammiepls</h1>
          <img
            src="/logo-white.svg"
            alt="Sammiepls Logo"
            className={styles.logo}
          />
          <p>
            I’m Sammie, a web designer turned <br />
            developer from Kuala Lumpur, Malaysia.
          </p>
        </header>

        <section className={styles.about}>
          <h2>Hi how are you?</h2>
          <p>
            Originally working in print design, but realized all the exciting
            stuff was in digital. After making the switch to web design, fell in
            love with making designs come to life with code. Now a web developer
            on a life-long journey of learning.
          </p>
          <address>
            <ul>
              <li>
                <a href="tel:0122372518">
                  <img src="/icon-phone-white.svg" alt="Phone" />
                  +(6) 012-237 2518
                </a>
              </li>
              <li>
                <a href="mailto:samantha.lhe@gmail.com">
                  <img src="/icon-email-white.svg" alt="Email" />
                  samantha.lhe@gmail.com
                </a>
              </li>
              <li>
                <a target="_blank" href="https://github.com/sammiepls">
                  <img src="/icon-github-white.svg" alt="Github" />
                  Github
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/samantha-lau-huai-ee/"
                >
                  <img src="/icon-linkedin-white.svg" alt="LinkedIn" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </address>
          <img src="/avatar.jpg" alt="Sammie" className={styles.avatar} />
        </section>

        <Terminal />
      </main>

      <footer></footer>
    </div>
  );
}
