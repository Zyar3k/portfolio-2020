import "./Portfolio.scss";

import img1 from "../../../images/bcd.png";
import img2 from "../../../images/czatap_port.png";
import img3 from "../../../images/Numerologia.png";
import img4 from "../../../images/Picture_shop.png";

const Portfolio = () => {
  return (
    <section id='portfolio' className='pageSection'>
      <section className='pageContent container portfolioContent'>
        <section className='projectBox odd'>
          <span className='boxLeft'>
            <a
              href='https://github.com/Zyar3k/online_shop_bcd'
              target='_blank'
              rel='noreferrer'
              className='linkWrapp git'
            >
              <i className='fab fa-github' />
              <p className='git'>kod</p>
            </a>
            <a
              href='https://online-shop-bcd.herokuapp.com/'
              className='linkWrapp demo'
              target='_blank'
              rel='noreferrer'
            >
              <i className='fas fa-play-circle' />
              <p className='demo'>demo</p>
            </a>
          </span>
          <div className='projectTitle'>Betty Craft Designs</div>
          <img src={img1} alt='' />
          <div className='desc'>
            <p>
              indywidualny projekt na zakończenie bootcampu web developer plus.
            </p>
            <p>
              tech stack: mern - mongodb, express, react (redux, router),
              node.js | sass | cra - webpack | npm | yarn.
            </p>
          </div>
        </section>
        <section className='projectBox even'>
          <span className='boxLeft'>
            <a
              href='https://github.com/Zyar3k/your_chat_app/tree/master'
              className='linkWrapp git'
              target='_blank'
              rel='noreferrer'
            >
              <i className='fab fa-github' />
              <p className='git'>kod</p>
            </a>
            <a
              href='https://youthful-clarke-0b8301.netlify.app/'
              className='linkWrapp demo'
              target='_blank'
              rel='noreferrer'
            >
              <i className='fas fa-play-circle' />
              <p className='demo'>demo</p>
            </a>
          </span>
          <div className='projectTitle'>cz@-app</div>
          <img src={img2} alt='' />
          <div className='desc'>
            <p>aplikacja czatowa w czasie rzeczywistym</p>
            <p>
              tech stack: html | sass | rwd | react | express | node | socket.io
              | cra- webpack | git | yarn.
            </p>
          </div>
        </section>
        <section className='projectBox odd'>
          <span className='boxLeft'>
            <a
              href='https://github.com/Zyar3k/numerology_4.0.0'
              className='linkWrapp git'
              target='_blank'
              rel='noreferrer'
            >
              <i className='fab fa-github' />
              <p className='git'>kod</p>
            </a>
            <a
              href='https://numerologia.netlify.app/'
              className='linkWrapp demo'
              target='_blank'
              rel='noreferrer'
            >
              <i className='fas fa-play-circle' />
              <p className='demo'>demo</p>
            </a>
          </span>
          <div className='projectTitle'>NUMEROLOGIA</div>
          <img src={img3} alt='' />
          <div className='desc'>
            <p>
              aplikacja pozwalająca poznać swoje specjalne liczby i sprawdzić
              wibracje numerologiczne na dwoolny dzień/miesiąc
            </p>
            <p>tech stack: html | sass | rwd | javascript es5 | npm scripts.</p>
          </div>
        </section>
        <section className='projectBox even'>
          <span className='boxLeft'>
            <a
              href='https://github.com/Zyar3k/picture_shop'
              className='linkWrapp git'
              target='_blank'
              rel='noreferrer'
            >
              <i className='fab fa-github' />
              <p className='git'>kod</p>
            </a>
            <a
              href='https://picture-shop.netlify.app/'
              className='linkWrapp demo'
              target='_blank'
              rel='noreferrer'
            >
              <i className='fas fa-play-circle' />
              <p className='demo'>demo</p>
            </a>
          </span>
          <div className='projectTitle'>PICTURE SHOP</div>
          <img src={img4} alt='' />
          <div className='desc'>
            <p>
              strona z elementami portfolio fotografa. działający koszyk i
              zwalidowany formularz wiadomości.
            </p>
            <p>tech stack: html | sass | rwd | javascript es5 | npm scripts.</p>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Portfolio;
