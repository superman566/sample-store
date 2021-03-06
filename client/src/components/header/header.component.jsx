import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

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
import {signOutStart} from "../../redux/user/user.actions";

const Header = ({ currentUser, hidden, signOutStart}) => (
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
          <OptionLink as='div' onClick={()=> signOutStart()}>
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

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
