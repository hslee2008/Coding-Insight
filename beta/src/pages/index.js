import BrowserOnly from '@docusaurus/BrowserOnly';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import classNames from 'classnames';
import React from 'react';
import styles from './index.module.css';

function Cards() {
  const cards = [
    {
      imageUrl: 'img/svg/undraw_open_source_-1-qxw.svg',
      linkText: '깃허브',
      link: 'https://github.com/HyunseungLee-Travis/Coding-Insight',
      description:
        '모든 소스를 다 깃허브에서 확인인 할 수 있고 여러분도 기여할 수 있는 프로젝트입니다.',
    },
    {
      imageUrl: 'img/svg/undraw_awards_fieb.svg',
      linkText: 'YSC',
      link: 'https://www.scienceall.com/science-circles-info-2022/',
      description: 'YSC에서 운영한 대회에 참가하여 상을 받은 작품',
    },
    {
      imageUrl: 'img/svg/undraw_around_the_world_re_rb1p.svg',
      linkText: '한국어와 영어',
      description:
        '웹사이트는 직접 번역된 한국어와 영어로 만들었습니다. 자연스럽지 않은 공식 해외 사이트와는 다릅니다.',
      nobutton: true,
    },
    {
      imageUrl: 'img/svg/undraw_progressive_app_m-9-ms.svg',
      linkText: 'PWA',
      description: 'PWA 기술로 모든 기기에서도 접속이 간편하고 빠른 웹사이트',
      nobutton: true,
    },
    {
      imageUrl: 'img/svg/undraw_project_complete_lwss.svg',
      linkText: '스스로',
      description: '스스로 프로젝트를 만들고 배우는 웹사이트',
      nobutton: true,
    },
    {
      imageUrl: 'img/svg/only.svg',
      linkText: '어린이들도',
      description: '유일하게 어린이들도 이해할 수 있는 웹사이트',
      link: '/beta/about',
    },
  ];

  return (
    <section className={classNames(styles.cardContainer)}>
      {cards.map((card, index) => (
        <div className={classNames(styles.card, 'card')} key={index}>
          <div className={classNames(styles.cardSide, styles.cardLeading)}>
            <h2>{card.linkText}</h2>
            <p>{card.description}</p>
            <div className={classNames(styles.cardSpacer)}></div>
            {card.nobutton ? null : (
              <Link className={'button button--primary'} href={card.link}>
                {card.linkText}
              </Link>
            )}
          </div>
          <div className={classNames(styles.cardSide, styles.cardImage)}>
            <img src={card.imageUrl} />
          </div>
        </div>
      ))}
    </section>
  );
}

function HeroHeader({ title, tagline }) {
  return (
    <header className={styles.heroBanner}>
      <BrowserOnly>
        {() => {
          require('@lottiefiles/lottie-player');
          return (
            <Lottie-Player
              src="/beta/splash.json"
              background="transparent"
              speed="1"
              style={{ height: '30vh', margin: 'auto' }}
              autoplay
              loop
            />
          );
        }}
      </BrowserOnly>
      <h1 className={styles.Title}>{title}</h1>
      <p className={styles.TagLine}>{tagline}</p>
      <div className={styles.HeroContainer}>
        <div className={styles.container}>
          <div className="row">
            <div className="col col--4 col--offset-2">
              <Link
                className={classNames(
                  'button',
                  ' button--lg',
                  styles.HeroButton,
                )}
                to="/docs/python/start/python"
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
                <span>더 알아보기</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <HeroHeader title={siteConfig.title} tagline={siteConfig.tagline} />
      <Cards />

      <br />
      <br />
    </Layout>
  );
}
