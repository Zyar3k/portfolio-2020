import data from "../../../data/db.json";

import "./Contact.scss";

const Contact = () => {
  const DB = data.contact;

  const contactSections = DB.map((item, index) => (
    <section key={index} className='contactBox'>
      <div className='icoWrapper'>
        <i className={item.icon} />
      </div>
      <div className='contentWrapper'>
        <h2>{item.title}</h2>
        {item.img1 ? (
          <div className='imgWrapper'>
            <a href={item.cvPl} target='_blank' rel='noreferrer'>
              <img src={item.img1} alt='plFlag' />
            </a>
            <a href={item.cvEng} target='_blank' rel='noreferrer'>
              <img src={item.img2} alt='ukFlag' />
            </a>
          </div>
        ) : (
          <a href={item.link} target='_blank' rel='noreferrer'>
            <p>Sprawdź</p>
          </a>
        )}
      </div>
    </section>
  ));
  return (
    <section id='contact' className='pageSection'>
      <section className='pageContent container contactContent'>
        {contactSections}
      </section>
    </section>
  );
};
/*
 <i className='fab fa-linkedin' />


*/
export default Contact;
