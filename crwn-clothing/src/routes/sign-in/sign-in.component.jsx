import { getRedirectResult } from 'firebase/auth';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';


import { 
  auth, 
  signInWithGooglePopup, 
  createUserDocumentFromAuth, 
  signInWithGoogleRedirect 
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={ logGoogleUser }>Sign in with Google Popup</button>
      <button onClick={ signInWithGoogleRedirect }>Sign in with Google Redirect</button>
      <SignUpForm />
    </div>
  )
}

export default SignIn;