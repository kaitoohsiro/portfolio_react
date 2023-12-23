import { useState, useEffect } from 'react';
import {Header, TopContent, Content, Footer} from '../components/default/';
import { ContactForm } from '../components/parts';

function HomePage() {
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
        <Content menuTitle={"Works"} description={'今まで開発してきたプロダクトについてまとめました'} linkText={"/works"} />
        <Content menuTitle={"Blog"} description={'開発ノウハウ・技術のアウトプットなどを書いてます。'} linkText={"/blogs"} />
        <Content menuTitle={"About"} description={'私について'} linkText={"/about"} />
        <ContactForm />
        <Footer />
      {/* ここに他のコンポーネントやコンテンツを追加 */}
    </div>
  );
}

export default HomePage;
