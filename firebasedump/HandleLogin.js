
import { auth } from "../authentication/api";


export const handleLogin = (email, password, navigation, route ) => {

  const { provider, user } = route.params;
    
    auth.signInWithEmailAndPassword(email, password).then(userCredentials => {
      const successuser = userCredentials.user;

      alert("Successfully Logged in :)")
      console.log("Logged in with:", successuser.email);

      navigation.navigate("Screen4", { provider, user });

    })
      .catch(error => alert(error.message));
  }