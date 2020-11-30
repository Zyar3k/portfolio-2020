import data from "../../../data/db.json";

import "./Sidebar.scss";

const Sidebar = () => {
  const DB = data.sidebar[0];
  const navElements = DB.navLinks.map((item, index) => (
    <a key={index} href={item.link}>
      <p>{item.name}</p>
      <i className={item.icon} />
    </a>
  ));
  return <nav>{navElements}</nav>;
};

export default Sidebar;
