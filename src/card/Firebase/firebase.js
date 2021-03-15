import firebase from 'firebase/app'

const app = firebase.initializeApp({
    apiKey: 'AIzaSyCXNBujv2VKrW_Gq-qe8nqWYaeFxIawZnU',
    authDomain: 'new-app-bf143.firebaseapp.com',
    projectId: 'new-app-bf143',
    storageBucket: 'new-app-bf143.appspot.com',
    messagingSenderId: '746211857439',
    appId: '1:746211857439:web:bf3155b28ed45c6cdb712a',
})

export const auth = app.auth()
export default app
