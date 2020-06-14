import React, { useState } from 'react'
import './styles.css'
import './global.css'
import HeroesImage from '../../assets/heroes.png'
import logoImage from '../../assets/logo.svg'
import { FiLogIn } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'
import api from '../../services/api'

export default function Logon() {
  const [id, setId] = useState('')
  const history = useHistory()

  async function handleLogin(e) {
    e.preventDefault()

    try {
      const { data } = await api.post('session', { id })

      localStorage.setItem('ongId', id)
      localStorage.setItem('ongName', data)

      history.push('/profile')
    } catch (error) {
      alert('falha no Login')
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImage} alt="logo"></img>
        <form onSubmit={handleLogin}>
          <h1>Faça seu Logon - c924b380 </h1>
          <input
            value={id}
            onChange={(e) => setId(e.target.value)}
            type="text"
            placeholder="Sua ID"
          ></input>
          <button className="button" type="submit">
            Entrar
          </button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} /> Não tenho cadastro
          </Link>
        </form>{' '}
      </section>
      <img src={HeroesImage} alt="Heroes"></img>
    </div>
  )
}
