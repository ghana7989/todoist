import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
	apiKey: process.env.api_key,
	authDomain: 'todoist-8897f.firebaseapp.com',
	projectId: 'todoist-8897f',
	storageBucket: 'todoist-8897f.appspot.com',
	messagingSenderId: '152901288446',
	appId: process.env.appId,
}
const firebaseApp = firebase.initializeApp(firebaseConfig)
export {firebaseApp as firebase}
