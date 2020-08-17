import React, { useState, useEffect } from 'react'
import './Styles/App.css'

const Header = () => {
    return (
        <div className='Header'>
            <p className='Header__text'>THE RICK AND MORTY CHARACTER APP</p>
        </div>
    )
}

const ApiForm = () => {

    const [info, setInfo] = useState([])
    const [name, setName] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/' + name)
            .then(res => res.json())
            .then(data => {
              setInfo(data)
              setLoading(true)
            } )
    }, [ name ])

    const handleChange = (event) => {
        setName(event.target.value)
    }

    return (
        <div className='ApiForm__container'>
            <form className='ApiForm__form'>
                <p className='ApiForm__text'>Busca a un personaje:</p>
                <div className='ApiForm__text'>
                    <input placeholder='Introduce un ID' onChange={handleChange} value={name} className='ApiForm__input' type='text' autoFocus />
                </div>
                { !loading && <p>Loading...</p>}
                <ul className='list'>
                    <li>{ name && <img className='img' src={info.image} alt='Rick and Morty character' />}</li>
                    <br />
                    <li>{ name && 'Name:'} {info.name}</li>
                    <br />
                    <li>{ name && 'Status:'} {info.status}</li>
                    <br />
                    <li>{ name && 'Specie:'} {info.species}</li>
                </ul>
             </form>
        </div>
    )
}

const App = () => {
    return (
        <React.Fragment>
            <Header />
            <ApiForm />
        </React.Fragment>
    )
}

export default App
