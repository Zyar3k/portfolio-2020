import data from "../../../data/db.json";

import "./Portfolio.scss";

const Portfolio = () => {
  const DB = data.portfolio;
  const portfolioElements = DB.map((card, index) => (
    <section key={index} className='projectBox'>
      <span className='boxLeft'>
        <a
          href={card.code}
          target='_blank'
          rel='noreferrer'
          className='linkWrapp git'
        >
          <i className='fab fa-github' />
          <p className='git'>kod</p>
        </a>
        <a
          href={card.demo}
          className='linkWrapp demo'
          target='_blank'
          rel='noreferrer'
        >
          <i className='fas fa-play-circle' />
          <p className='demo'>demo</p>
        </a>
      </span>
      <div className='projectTitle'>{card.name}</div>
      <img src={card.img} alt='' />
      <div className='desc'>
        <p>{card.desc1}</p>
        <p>{card.desc2}</p>
      </div>
    </section>
  ));
  return (
    <section id='portfolio' className='pageSection'>
      <section className='pageContent container portfolioContent'>
        {portfolioElements}
      </section>
    </section>
  );
};

export default Portfolio;
