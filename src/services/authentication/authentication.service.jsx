import React from 'react';
import * as firebase from 'firebase';

export const LoginRequest = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password);
