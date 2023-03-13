import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';

export default function About() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <div
        style={{
          padding: 20,
        }}>
        <h1>About</h1>

        <p>
          저희에 대해 알아보고 싶으면{' '}
          <Link href="https://github.com/hslee2008/Coding-Insight">깃허브</Link>
          를 방문해 주세요.
        </p>

        <h2>개발자</h2>
        <ul>
          <li>
            <a href="https://github.com/hslee2008">Hyunseung Lee</a>
          </li>
          <li>
            <a href="https://github.com/GMTT902">GMTT902</a>
          </li>
          <li>
            <a href="https://github.com/kimgun1217">kimgun1217</a>
          </li>
        </ul>
      </div>
    </Layout>
  );
}
