import React from 'react';
import Button from '../components/common/button';
import MainVisual from '../components/common/main-visual';
import bnr from '../assets/images/home/bnr.png';

const Home: React.FC = () => (
  <main className="l-main">
    <MainVisual page="ホームページ" lead="ここがトップページです。" />
    <div className="u-inner">
      <p>この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れ</p>
      <Button className="home__button">テストボタン</Button>
      <div className="home__banner">
        <a href='#'>
          <img src={bnr} alt="" />
        </a>
      </div>
    </div>
  </main>
);

export default Home;