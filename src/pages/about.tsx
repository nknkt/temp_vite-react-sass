import React from 'react';
import Button from '../components/common/button';
import MainVisual from '../components/common/main-visual';

const About: React.FC = () => (
  <div className="p-about">
    <MainVisual page="Aboutページ" lead="下層ページ" />
    <div className="u-inner">
      <section className="p-about__section">
        <div className="p-about__content">
          <p>この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れ</p>
          <Button className="p-about__button">テストボタン</Button>
        </div>
      </section>
    </div>
  </div>
);

export default About;