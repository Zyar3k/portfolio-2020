import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <nav>
      <a href='#start'>
        <p>start</p>
        <i className='far fa-star' />
      </a>
      <a href='#about'>
        <p>about</p>
        <i className='far fa-address-card'></i>
      </a>
      <a href='#skills'>
        <p>skills</p>
        <i className='fas fa-star-half-alt'></i>
      </a>
      <a href='#portfolio'>
        <p>portfolio</p>
        <i className='fas fa-briefcase'></i>
      </a>
      <a href='#contact'>
        <p>contact</p>
        <i className='fas fa-envelope'></i>
      </a>
    </nav>
  );
};

export default Sidebar;
