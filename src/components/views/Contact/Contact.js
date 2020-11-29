import "./Contact.scss";

import uk from "../../../images/pin_uk.png";
import pl from "../../../images/pin_pl.png";

const Contact = () => {
  return (
    <section id='contact' className='pageSection'>
      <section className='pageContent container contactContent'>
        <section className='contactBox'>
          <div className='icoWrapper'>
            <i className='far fa-file-pdf' />
          </div>
          <div className='contentWrapper'>
            <h2>curriculum vitae</h2>
            <div className='imgWrapper'>
              <a
                href='https://drive.google.com/file/d/1d2C9pub8Kvj9UCHmJDoG0_JCUtyKupmu/view'
                target='_blank'
                rel='noreferrer'
              >
                <img src={pl} alt='plFlag' />
              </a>
              <a
                href='https://drive.google.com/open?id=1sixNne4mGrT94aVRdj6vGBRf9OMkvZHp'
                target='_blank'
                rel='noreferrer'
              >
                <img src={uk} alt='ukFlag' />
              </a>
            </div>
          </div>
        </section>
        <section className='contactBox'>
          <div className='icoWrapper'>
            <i className='fab fa-linkedin' />
          </div>
          <div className='contentWrapper'>
            <h2>linkedin</h2>
            <a
              href='https://www.linkedin.com/in/arkadiusz-zygan/'
              target='_blank'
              rel='noreferrer'
            >
              <p>Sprawdź</p>
            </a>
          </div>
        </section>
        <section className='contactBox'>
          <div className='icoWrapper'>
            <i className='fab fa-github' />
          </div>
          <div className='contentWrapper'>
            <h2>github</h2>
            <a
              href='https://github.com/Zyar3k'
              target='_blank'
              rel='noreferrer'
            >
              <p>Sprawdź</p>
            </a>
          </div>
        </section>
        <section className='contactBox'>
          <div className='icoWrapper'>
            <i className='fas fa-envelope' />
          </div>
          <div className='contentWrapper'>
            <h2>a.zygan@gmail.com</h2>
            <a href='mailto:a.zygan@gmail.com' target='_blank' rel='noreferrer'>
              <p>Sprawdź</p>
            </a>
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
