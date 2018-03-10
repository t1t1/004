import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCLYHxapi4_N4PT6rsYmZ-wt26jW9GI6BI",
  databaseURL: "https://build004-75d31.firebaseio.com"
};
firebase.initializeApp(config);

const rootRef = firebase.database().ref();
export const tasksRef = rootRef.child('tasks');
export const timeRef = firebase.database.ServerValue.TIMESTAMP;
