import Card from './card/Card'
import './App.css'

import NavBar from './NavBar'

function App() {
    let lang = ['JavaScript', 'Php', 'Ruby', 'C++', 'Python', 'Java', 'C#']
    

    return (
        <>
            <NavBar  />
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
