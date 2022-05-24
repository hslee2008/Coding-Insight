import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';

import styles from './about.module.css';

export default function About() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <div className={styles.About}>
        <h1>About</h1>

        <p>
          저희에 대해 알아보고 싶으면{' '}
          <Link href="https://github.com/HyunseungLee-Travis/Coding-Insight">
            깃허브
          </Link>
          를 들어가 주세요.
        </p>

        <h2>개발자</h2>
        <ul>
          <li>
            <a href="https://github.com/HyunseungLee-Travis">Hyunseung Lee</a>
          </li>
          <li>
            <a href="https://github.com/GMTT902">GMTT902</a>
          </li>
          <li>
            <a href="https://github.com/kimgun1217">kimgun1217</a>
          </li>
        </ul>

        <h2>라이선스</h2>
        <pre>
          Copyright &lt;2022&gt; &lt;Coding-Insight&gt;
          <br />
          <br />
          Permission is hereby granted, free of charge, to any person obtaining
          a copy of this software and associated documentation files (the
          "Software"), to deal in the Software without restriction, including
          without limitation the rights to use, copy, modify, merge, publish,
          distribute, sublicense, and/or sell copies of the Software, and to
          permit persons to whom the Software is furnished to do so, subject to
          the following conditions:
          <br />
          <br />
          The above copyright notice and this permission notice shall be
          included in all copies or substantial portions of the Software.
          <br />
          <br />
          THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
          EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
          IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
          CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
          TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
          SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
        </pre>
      </div>
    </Layout>
  );
}
