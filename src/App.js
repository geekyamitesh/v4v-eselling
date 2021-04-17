import React from "react";
import HomePage from "./pages/home/homepage.component";
import { Switch, Route, Redirect } from "react-router-dom";
import ShopPage from "./pages/shop/shop.componnet";
import Header from "./components/header/header.component";
import SignInSignUpage from "./pages/SignIn-and-SignUp/SignIn-and-SignUp";
import { auth, createUserProfileDocument } from "./firebase/firebase.util";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import { GlobalStyle } from "./global.styles";
import CheckoutPage from "./pages/checkout/checkout.component";
class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInSignUpage />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
