import React from 'react';
import Button from '../components/common/button';
import MainVisual from '../components/common/main-visual';

const About: React.FC = () => (
  <main className="l-main">
    <MainVisual page="Aboutページ" lead="下層ページ" />
    <div className="u-inner">
      <p>この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れ</p>
      <Button className="about__button">テストボタン</Button>
    </div>
  </main>
);

export default About;