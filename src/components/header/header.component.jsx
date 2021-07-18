import './header.styles.scss';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

const Header = ({ currentUser, hidden}) => (
  <div className={'header'}>
    <Link to={'/'} className={'logo-container'}>
      <Logo />
    </Link>
    <div className={'options'}>
      <Link
        className={'option'}
        to={'/shop'}
      >
        SHOP
      </Link>
      <Link
        className={'option'}
        to={'/contact'}
      >
        CONTACT
      </Link>
      {
        currentUser ?
          <div
            className={'option'}
            onClick={()=> auth.signOut()}
          >
          Sign Out
          </div> :
          <Link
            className={'option'}
            to={'/signin'}
          >
            Sign In
          </Link>
      }
      <CartIcon />
    </div>
    {
      hidden ?
        null:
        (<CartDropdown />)
    }
  </div>
);

const mapStateToProps = ({user: { currentUser }, cart: { hidden }}) => ({
  currentUser,
  hidden
})

export default connect(mapStateToProps)(Header);
