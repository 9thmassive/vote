import Card from './card/Card'
import './App.css'
import firebase from 'firebase'
import NavBar from './NavBar'

function App() {
    let lang = ['JavaScript', 'Php', 'Ruby', 'C++', 'Python', 'Java', 'C#']
    const handleLogin = () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        firebase
            .auth()
            .signInWithPopup(provider)
            .then((result) => {
                alert('Success')
            })
            .catch((error) => {
                alert(error.messages)
            })
    }

    return (
        <>
            <NavBar click={handleLogin} />
            <div className="App">
                <h1 className="vote">Vote your Language</h1>
                {lang.map((el) => (
                    <Card name={el} key={el} />
                ))}
            </div>
        </>
    )
}

export default App
