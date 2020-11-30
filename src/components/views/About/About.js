import data from "../../../data/db.json";

import "./About.scss";

const About = () => {
  const DB = data.about;

  const aboutSections = DB.map((item, index) => (
    <section key={index} className='aboutSection'>
      <span className='icoWrapper'>
        <i className={item.icon} />
      </span>
      <p>{item.text}</p>
    </section>
  ));
  return (
    <section id='about' className='pageSection'>
      <section className='pageContent container aboutContent'>
        <main>{aboutSections}</main>
      </section>
    </section>
  );
};

export default About;
