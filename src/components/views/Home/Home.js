import data from "../../../data/db.json";

import "./Home.scss";

const Home = () => {
  const DB = data.home[0];
  return (
    <section id='start' className='pageSection'>
      <section className='pageContent container homeContent'>
        <main>
          <h1>{DB.name}</h1>
          <h4>{DB.job}</h4>
        </main>
      </section>
      <a href='#about' className='btnNext far fa-arrow-alt-circle-down' />
    </section>
  );
};

export default Home;
