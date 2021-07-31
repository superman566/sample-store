import './header.styles.scss';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {selectCurrentUser} from "../../redux/user/user.selectors";
import {selectHidden} from "../../redux/cart/cart.selectors";
import {
  HeaderContainer,
  LogoContainer,
  OptionContainer,
  OptionLink
} from "./header.styles";

const Header = ({ currentUser, hidden}) => (
  <HeaderContainer>
    <LogoContainer to={'/'}>
      <Logo />
    </LogoContainer>
    <OptionContainer>
      <OptionLink to={'/shop'}>
        SHOP
      </OptionLink>
      <OptionLink to={'/contact'}>
        CONTACT
      </OptionLink>
      {
        currentUser ?
          <OptionLink as='div' onClick={()=> auth.signOut()}>
          Sign Out
          </OptionLink> :
          <OptionLink to={'/signin'}>
            Sign In
          </OptionLink>
      }
      <CartIcon />
    </OptionContainer>
    {
      hidden ?
        null:
        (<CartDropdown />)
    }
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectHidden
})

export default connect(mapStateToProps)(Header);
