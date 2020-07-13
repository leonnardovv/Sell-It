import { useContext } from "react";
import AuthContext from "./context";
import authStorage from "./storage";
import jwtDecode from "jwt-decode";

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logIn = (authToken) => {
    const user = jwtDecode(authToken); //decode the token to get the User Object
    setUser(user); //set the current user
    authStorage.storeToken(authToken); //store token
  };

  const logOut = () => {
    setUser(null);
    authStorage.removeToken();
  };

  return { user, logIn, logOut };
};
