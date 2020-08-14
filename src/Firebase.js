import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'

const config = {
  apiKey: 'AIzaSyCzLnwq0jQ_WbsviOrtu12TZwgDrigrHI0',
  authDomain: 'archivos-b0b9f.firebaseapp.com',
  databaseURL: 'https://archivos-b0b9f.firebaseio.com',
  projectId: 'archivos-b0b9f',
  storageBucket: 'archivos-b0b9f.appspot.com',
  messagingSenderId: '199484465454',
  appId: '1:199484465454:web:ea89ad7c7af536c5fb9abf',
  measurementId: 'G-4WNHLET6KE'
}
firebase.initializeApp(config)
firebase.firestore()
export default firebase
