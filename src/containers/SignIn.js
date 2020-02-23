import React from 'react'
import { StyledFirebaseAuth } from 'react-firebaseui'

import { getUiConfig } from '../firebase'
import { withFirebase } from '../components/FirebaseContext'
import Header from '../components/header'

const SignIn = ({ firebase }) => (
  <div>
    <Header siteTitle="Gatsby News" />
    <StyledFirebaseAuth
      uiConfig={getUiConfig(firebase)}
      firebaseAuth={firebase.auth()}
    />
  </div>
)

export default withFirebase(SignIn)
