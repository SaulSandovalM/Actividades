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


   // apiKey: "AIzaSyBcnCsZlT4TR8RYm21KM9t8TmEmN17S3jI",
   // authDomain: "actividades-a2936.firebaseapp.com",
   // projectId: "actividades-a2936",
   // storageBucket: "actividades-a2936.appspot.com",
   // messagingSenderId: "446841894263",
   // appId: "1:446841894263:web:696f4c23335f294ecb9d72",
   // measurementId: "G-3EQM3CQ5E6"
}
firebase.initializeApp(config)
firebase.firestore()
export default firebase
