import { Menu } from "antd";
import { Link } from "react-router-dom";
import styles from '../layout/main-layout.module.css'

const items = [
  {
    label: <Link to="/">صفحه اصلی</Link>,
    key: 1,
  },
  {
    label: <Link to="/about">درباره ما</Link>,
    key: 2,
  }
];

const MainNav = ({direction, theme}) => {

  return (
    <Menu
      className={styles.mainMenu}
      theme={theme}
      mode={direction}
      defaultSelectedKeys={['1']}
      items={items}
    />
  );
}

export default MainNav;