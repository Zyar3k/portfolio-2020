import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <nav>
      <a href='#start'>
        <i className='far fa-star' />
      </a>
      <a href='#about'>
        <i className='far fa-address-card'></i>
      </a>
      <a href='#skills'>
        <i className='fas fa-star-half-alt'></i>
      </a>
      <a href='#portfolio'>
        <i className='fas fa-briefcase'></i>
      </a>
      <a href='#contact'>
        <i className='fas fa-envelope'></i>
      </a>
    </nav>
  );
};

export default Sidebar;
