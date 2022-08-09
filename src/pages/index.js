import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import classNames from 'classnames';
import styles from './index.module.scss';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import Translate, {translate} from '@docusaurus/Translate';

function Cards() {
  const cards = [
    {
      imageUrl: 'img/svg/open_source_-1-qxw.svg',
      linkText: translate({
        message: '깃허브',
        description: 'Card',
      }),
      link: 'https://github.com/HyunseungLee-Travis/Coding-Insight',
      description: translate({
        message:
          '모든 소스를 다 깃허브에서 확인인 할 수 있고 여러분도 기여할 수 있는 프로젝트입니다.',
        description: 'Card',
      }),
    },
    {
      imageUrl: 'img/svg/awards_fieb.svg',
      linkText: 'YSC',
      link: 'https://www.scienceall.com/science-circles-info-2022/',
      description: translate({
        message: 'YSC에서 운영한 대회에 참가하여 상을 받은 작품',
        description: 'Card',
      }),
    },
    {
      imageUrl: 'img/svg/around_the_world_re_rb1p.svg',
      linkText: translate({
        message: '한국어와 영어',
        description: 'Card',
      }),
      description: translate({
        message:
          '웹사이트는 직접 번역된 한국어와 영어로 만들었습니다. 자연스럽지 않은 공식 해외 사이트와는 다릅니다.',
        description: 'Card',
      }),
      nobutton: true,
    },
    {
      imageUrl: 'img/svg/progressive_app_m-9-ms.svg',
      linkText: 'PWA',
      description: translate({
        message: '웹사이트를 모바일에서 접근할 수 있도록 설계하였습니다 (PWA).',
        description: 'Card',
      }),
      nobutton: true,
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
            <img src={card.imageUrl} alt={card.description} />
          </div>
        </div>
      ))}
    </section>
  );
}

function HeroHeader({title, tagline}) {
  return (
    <header
      style={{backgroundColor: 'var(--back)'}}
      className={styles.heroHeader}>
      <div className={styles.hero}>
        <img
          className={styles.heroImg}
          src="img/favicon.png"
          alt="Coding Insight"
        />
      </div>
      <div className={styles.heroTwo}>
        <h1 className={styles.Title}>{title}</h1>
        <p className={styles.TagLine}>{tagline}</p>
      </div>
      <div className={styles.Code}>
        <div>
          <Tabs>
            <TabItem value="Python" label="Python" default>
              <CodeBlock language="python">
                import requests{'\n'}
                url = "https://coding-insight.com"{'\n'}
                requests.get(url)
              </CodeBlock>
            </TabItem>
            <TabItem value="Rust" label="Rust">
              <CodeBlock language="rust">
                fn main() &#123;{'\n'}
                &nbsp;&nbsp;println!("Hello, world!");
                {'\n'}&#125;
              </CodeBlock>
            </TabItem>
          </Tabs>
        </div>
        <Link
          className={classNames('button button--secondary button--lg')}
          to="/docs/python/start/python">
          <Translate>시작하기</Translate>
        </Link>
      </div>
    </header>
  );
}
export default function Home() {
  const {
    siteConfig: {title, tagline},
  } = useDocusaurusContext();

  return (
    <Layout title={title} description={tagline}>
      <HeroHeader title={title} tagline={tagline} />
      <Cards />
    </Layout>
  );
}
