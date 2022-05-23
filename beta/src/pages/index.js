import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import BrowserOnly from '@docusaurus/BrowserOnly';
import useBaseUrl from '@docusaurus/useBaseUrl';
import classNames from 'classnames';

import styles from './index.module.css';

const features = [
  [
    {
      imageUrl: 'img/svg/undraw_open_source_-1-qxw.svg',
      label: 'Open Source',
      link: 'https://github.com/HyunseungLee-Travis/Coding-Insight',
      description:
        '모든 소스를 다 깃허브에서 확인인 할 수 있고 여러분도 기여할 수 있는 프로젝트입니다.',
    },
    {
      imageUrl: 'img/svg/undraw_awards_fieb.svg',
      label: 'YSC 상',
      link: 'https://www.scienceall.com/science-circles-info-2022/',
      description: 'YSC에서 운영한 대회에 참가하여 상을 받은 작품',
    },
    {
      imageUrl: 'img/svg/undraw_around_the_world_re_rb1p.svg',
      label: '2개의 언어',
      link: 'google.com',
      description:
        '웹사이트는 직접 번역된 한국어와 영어로 만들었습니다. 자연스럽지 않은 공식 해외 사이트와는 다릅니다.',
    },
  ],
  [
    {
      imageUrl: 'img/svg/undraw_progressive_app_m-9-ms.svg',
      label: 'PWA',
      description: 'PWA 기술로 모든 기기에서도 접속이 간편하고 빠른 웹사이트',
    },
    {
      imageUrl: 'img/svg/undraw_project_complete_lwss.svg',
      label: '프로젝트',
      description: '스스로 프로젝트를 만들고 배우는 웹사이트',
    },
    {
      imageUrl: 'img/svg/only.svg',
      label: '어린이',
      description: '유일하게 어린이를 위해 작성된 웹사이트',
    },
  ],
];

function Feature({ imageUrl, link, label, description }) {
  const imgUrl = useBaseUrl(imageUrl);

  return (
    <div className="col col--4 feature">
      <div className="card" style={{ margin: 10 }}>
        <div className="card__body">
          {imgUrl && (
            <div className="text--center">
              <img className={styles.featureImage} src={imgUrl} alt={label} />
            </div>
          )}
          <h3>{label}</h3>
          <p>{description}</p>
        </div>
        {link && (
          <div className="card__footer">
            <Link to={link}>
              <button className="button button--secondary button--block">
                See more
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

function HeroButton() {
  return (
    <div className={styles.HeroContainer}>
      <div className="container">
        <div className="row">
          <div className="col col--4 col--offset-2">
            <Link
              className={classNames('button', ' button--lg', styles.HeroButton)}
              to="/docs/python/"
            >
              <span>시작하기</span>
            </Link>
          </div>
          <div className="col col--4">
            <Link
              className={classNames(
                'button',
                ' button--lg',
                styles.GettingStarted,
              )}
              to="/docs/getting-started/"
            >
              <span>어디서 시작할까요</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroHeader() {
  return (
    <header className={styles.heroBanner}>
      <BrowserOnly>
        {() => {
          require('@lottiefiles/lottie-player');
          return (
            <Lottie-Player
              src="search-splash.json"
              background="transparent"
              speed="1"
              style={{ height: '30vh', margin: 'auto' }}
              autoplay
              loop
            />
          );
        }}
      </BrowserOnly>
      <HeroButton />
    </header>
  );
}

function Features() {
  return (
    features &&
    features.length && (
      <section className={styles.features}>
        <div className="container">
          {features.map((row, index) => {
            return (
              <div className="row" key={index}>
                {row.map((props, idx) => (
                  <Feature
                    key={idx}
                    {...props}
                    index={idx + row.length * index}
                  />
                ))}
              </div>
            );
          })}
        </div>
      </section>
    )
  );
}

function Entry() {
  return (
    <div className={styles.HeroContainer}>
      <div className="container">
        <div className="row">
          <div className={classNames('container', styles.blockCodingDiv)}>
            <h2>블록코딩을 넘어서 파이썬으로!</h2>
            <p>
              엔트리라고 들어보신적 있으신가요? 엔트리는 블록코딩의 한
              종류입니다.
            </p>
            <p>
              블록코딩이란 처음으로 코딩을 배우고 있는 학생들을 위해서 블록
              형식으로 구성된 코딩 종류를 뜻합니다.사이트에는 파이썬, C, C++,
              그리고 Rust 내용이 있습니다.
            </p>
            <p>
              사실 블록코딩으로는 직업을 가질 수 없고 이로 만들 수 있는 것은
              매우 재한적이기 때문에 텍스트 기반 프로그래밍 언어를 꼭 배워야
              합니다.사이트에는 파이썬, C, C++, 그리고 Rust 내용이 있습니다.
            </p>
            <p>저희 사이트에는 파이썬, C, C++, 그리고 Rust 내용이 있습니다.</p>
          </div>
        </div>
      </div>
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
      <Features />
      <Entry />
      <HeroButton />
    </Layout>
  );
}
