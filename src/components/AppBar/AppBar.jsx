import css from './AppBar.module.css';
import clsx from 'clsx';
import Navigation from '../Navigation/Navigation';
import LogoPanel from '../LogoPanel/LogoPanel';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
      <div className={clsx('container', css.containerHeader)}>
        <LogoPanel />
        <div className={css.navContainer}>
          <Navigation />
          {!isLoggedIn && <AuthNav />}
          {isLoggedIn && <UserMenu />}
        </div>
      </div>
    </header>
  );
};

export default AppBar;
