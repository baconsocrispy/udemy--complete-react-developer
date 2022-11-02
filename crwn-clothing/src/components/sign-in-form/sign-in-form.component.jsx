import { useState } from 'react';
import FormInput from "../form-input/form-input.component";
import Button from '../button/button.component';
import { 
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword
} from '../../utils/firebase/firebase.utils';

import './sign-in-form.styles.scss';

const defaultFormFields = {
  email: '',
  password: ''
}

const SignInForm = () => {
  const [ formFields, setFormFields ] = useState(defaultFormFields)
  const { email, password } = formFields

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value })
  }

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { user } = await signInAuthUserWithEmailAndPassword(email, password);
      console.log(user);
      resetFormFields();
    } catch (error) {
      switch(error.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email');
          break
        case 'auth/user-not-found':
          alert('no user associated with this email');
          break
        default:
          console.log(error)
      }
    }
  }

  return (
   
    <div className='sign-in-container'>
      <h2>Already have an account?</h2>
      <span></span>
      <form onSubmit={ handleSubmit }>
        <FormInput 
          label='Email'
          required
          onChange={ changeHandler }
          type='email'
          name='email'
          value={ email }
        />
        <FormInput 
          label='Password'
          required
          onChange={ changeHandler }
          type='password'
          name='password'
          value={ password }
        />

        <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
          <Button 
            type='button' 
            buttonType='google' 
            onClick={ signInWithGoogle }
          >
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  )
}

export default SignInForm;