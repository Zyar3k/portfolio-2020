import "./Contact.scss";

import uk from "../../../images/pin_uk.png";
import pl from "../../../images/pin_pl.png";

const Contact = () => {
  return (
    <section id='contact' className='pageSection'>
      <section className='pageContent container contactContent'>
        <section className='contactBox'>
          <i className='far fa-file-pdf' />
          <div className='contentWrapper'>
            <h2>curriculum vitae</h2>
            <div className='imgWrapper'>
              <img src={pl} alt='' />
              <img src={uk} alt='' />
            </div>
          </div>
        </section>
        <section className='contactBox'>
          <i className='fab fa-linkedin' />
          <div className='contentWrapper'>
            <h2>linkedin</h2>
            <a href='#'>Sprawdź</a>
          </div>
        </section>
        <section className='contactBox'>
          <i className='fab fa-github' />
          <div className='contentWrapper'>
            <h2>github</h2>
            <a href='#'>Sprawdź</a>
          </div>
        </section>
        <section className='contactBox'>
          <i className='fas fa-envelope' />
          <div className='contentWrapper'>
            <h2>a.zygan@gmail.com</h2>
            <a href='#'>Sprawdź</a>
          </div>
        </section>
      </section>
    </section>
  );
};
/*
 <i className='fab fa-linkedin' />


*/
export default Contact;
