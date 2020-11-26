import "./Home.scss";

const Home = () => {
  return (
    <section id='start' className='pageSection'>
      <section className='pageContent container homeContent'>
        <main>
          <h1>ZYGAN AREK</h1>
          <h4>FRONTEND DEVELOPER</h4>
        </main>
      </section>
      <a href='#about' className='btnNext far fa-arrow-alt-circle-down' />
    </section>
  );
};

export default Home;
