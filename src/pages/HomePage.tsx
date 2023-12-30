import { useState, useEffect } from 'react';
import {Header, TopContent, WorkContent, Footer, BlogContent, AboutContent} from '../components/default/';
import { ContactForm } from '../components/parts';
import Cyeld from '../assets/cyeld.jpg';
import PymHuck from '../assets/pymhuck.png';
import Agriart from '../assets/agriart.png';
import Village from '../assets/village.png';
import Iot from '../assets/iot.png';

function HomePage() {
  const imageData = [
    { 
      url: Cyeld,
      color: "purple",
      description: {
        subtitle: 'フレームワーク',
        title: 'Cyeld',
        text: 'ディープラーニングができるフレームワーク'
      }
    },
    { 
      url: PymHuck,
      color: "orange",
      description: {
        subtitle: 'webサービス',
        title: 'PYMHuck',
        text: 'ハッカソンを自由に開いて自由に発表できる'
      }
    },
    { 
      url: Agriart,
      color: "egreen",
      description: {
        subtitle: 'webサービス',
        title: '農業サービス',
        text: '農家向けBtoB\nサブスクサービス'
      }
    },
    { 
      url: Village,
      color: "green",
      description: {
        subtitle: 'スマホアプリ',
        title: 'Village',
        text: '野菜の売買ができるオンライン\n販売アプリ'
      }
    },
    { 
      url: Iot,
      color: "blue",
      description: {
        subtitle: 'IOTサービス',
        title: '農業用IOT機器',
        text: '農業をIOTでデータ化，外部制御\nでサポート'
      }
    },
  ];
  
  const [scrolled, setScrolled] = useState(false);
  console.log(scrolled)

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 740
    ? setScrolled(true)
    : setScrolled(false)

    console.log(window.scrollY)
  }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={"App"}>
        <Header scrolled={scrolled}/>
        <TopContent />
        <WorkContent imageData={imageData} menuTitle={"Work"} description={'今まで開発してきたプロダクトについてまとめました'} linkText={"/works"} />
        <BlogContent menuTitle={"Blog"} description={'今まで開発してきたプロダクトについてまとめました'} linkText={"/blogs"} />
        <AboutContent menuTitle={"About"} description={"私について"} linkText={''} />
        <ContactForm menuTitle={"Contact"} description={"お問い合わせ"} />
        <Footer />
    </div>
  );
}

export default HomePage;
