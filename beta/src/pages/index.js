import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import CodeBlock from '@theme/CodeBlock';
import GitHubButton from 'react-github-btn';
import classNames from 'classnames';

import styles from './index.module.css';

function HeroHeader() {
  return (
    <header className={styles.Hero}>
      <GitHubButton
        href="https://github.com/HyunseungLee-Travis/Coding-Insight"
        data-icon="octicon-star"
        data-size="large"
        data-show-count="true"
        aria-label="Star HyunseungLee-Travis/Coding-Insight on GitHub"
      >
        Star
      </GitHubButton>

      <div className={styles.HeroContainer}>
        <h1 className={styles.HeroTitle}>Coding-Insight</h1>
        <p className={styles.HeroSubTitle}>Learn, Practice, Build and Deploy</p>

        <div className={styles.HeroButtons}>
          <a
            className={classNames('button', ' button--lg', styles.HeroButton)}
            href="/docs/getting-started/"
          >
            시작하기
          </a>
          <a
            className={classNames('button', styles.blackText)}
            href="/docs/getting-started/"
          >
            어디서 시작할까요 ›
          </a>
        </div>
      </div>
    </header>
  );
}

function Entry() {
  return (
    <main>
      <div className={styles.Entry}>
        <img
          alt="Entry"
          src="https://playentry.org/img/defaultOgImage.png"
          width="300px"
          className={styles.EntryImage}
        />

        <div>
          <h2>블록코딩을 넘어서 텍스트 코딩으로!</h2>
          <p>
            블록코딩을 넘어서 파이썬으로! 엔트리라고 들어보신적 있으신가요?
            엔트리는 블록코딩의 한 종류입니다.
          </p>

          <p>
            블록코딩이란 처음으로 코딩을 배우고 있는 학생들을 위해서 블록
            형식으로 구성된 코딩 종류를 뜻합니다.
          </p>

          <p>
            사실 블록코딩으로는 직업을 가질 수 없고 이로 만들 수 있는 것은
            없습니다.
          </p>
        </div>
      </div>
    </main>
  );
}

function IntroVideo() {
  return (
    <div className={styles.IntroVideoWrapper}>
      <h1>인트로 비디오</h1>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/ya7Ud1tTpag"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className={styles.IntroVideo}
      />
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />"
    >
      <HeroHeader />
      <Entry />
      <IntroVideo />
    </Layout>
  );
}
