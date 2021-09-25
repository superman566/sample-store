import {lazy, useEffect, Suspense} from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Header from './components/header/header.component';

import {selectCurrentUser} from "./redux/user/user.selectors";
import {checkUserSession} from "./redux/user/user.actions";

import { GlobalStyles } from './global.styles';
import Spinner from "./components/spinner/spinner.component";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";

const HomePage = lazy(()=> import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const SignInAndSignUpPage =lazy(()=> import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'));
const CheckoutPage = lazy(()=> import('./pages/checkout/checkout.component'));

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(checkUserSession())
  },[dispatch]);

  return (
    <div>
      <GlobalStyles />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/signin' render={()=>
              currentUser? (
                <Redirect to={'/'} />
              ) : (
                <SignInAndSignUpPage />
              )}
            />
            <Route exact path='/checkout' component={ CheckoutPage } />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
}

export default App;
