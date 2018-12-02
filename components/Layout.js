import Link from 'next/link';
import Head from 'next/head';

const Layout = ({ children, title, description }) => (
  <div>
    <Head>
      <meta name="description" content={description} />
      <title>{title}</title>
    </Head>
    <div className="container">
      <nav>
        <Link href="/">
          <a>
            <span>Hacker Next</span>
          </a>
        </Link>
      </nav>
      {children}
    </div>
    <style jsx>{`
      .container {
        max-width: 800px;
        margin: 0 auto;
        background: #f6f6ef;
      }
      nav {
        background: #f60;
        padding: 1em;
      }
      nav > * {
        display: inline-block;
        color: black;
      }
      nav a {
        text-decoration: none;
      }
      nav .main-title {
        font-weight: bold;
      }
    `}</style>
    <style global jsx>{`
      body {
        background: #fff;
        font-family: Verdana, Geneva, sans-serif;
      }
    `}</style>
  </div>
);

export default Layout;
