import React, { useState } from 'react'
import './style.css'
import logoImage from '../../../assets/logo.svg'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import api from '../../../services/api'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [city, setCity] = useState('')
  const [uf, setUf] = useState('')

  const history = useHistory()

  async function handleRegister(e) {
    e.preventDefault()

    const data = { name, email, whatsapp, city, uf }

    try {
      const res = await api.post('/ongs', data)
      console.log(data)
      history.push('/')
      alert(`Seu ID de acesso! ${res.id}`)
    } catch (error) {
      alert('Erro no cadastro!!')
    }
  }
  
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImage} alt="logo" />

          <h1>Cadastro</h1>
          <p>Faça seu Cadastro e se comunique conosco e dados da sua ONG</p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} /> Não tenho cadastro
          </Link>
        </section>

        <form onSubmit={handleRegister}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nome da ONG"
          ></input>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
          ></input>
          <input
            placeholder="Whatsapp"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
          ></input>

          <div className="input-group">
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Cidade"
            ></input>
            <input
              type="text"
              value={uf}
              onChange={(e) => setUf(e.target.value)}
              placeholder="UF"
              style={{ width: 80 }}
            ></input>
          </div>

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  )
}
