import React, { useState, useHistory } from 'react'
import '../NewIncident/style.css'
import logoImage from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import api, { getIncidentsByOngId } from '../../services/api'

const history = useHistory()

export default function NewIncident() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')

  const ong_id = localStorage.getItem('ongId')

  async function handleNewIncident(e) {
    e.preventDefault()

    const data = { title, description, value, ong_id }

    try {
      await api.post('/incidents', data)

      alert('Caso Cadastrado com sucesso!')

      history.push('/')
    } catch (error) {
      alert('Erro no cadastro!!')
    }
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImage} alt="logo" />

          <h1>Cadastrar novo Caso</h1>
          <p>Faça seu Cadastro e se comunique conosco e dados da sua ONG</p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} /> Voltar para Home
          </Link>
        </section>

        <form onSubmit={handleNewIncident}>
          <input
            type="text"
            placeholder="Titulo do caso"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          ></input>
          <textarea
            placeholder="Descrição "
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea>
          <input
            type="text"
            placeholder="Valor em reais:"
            onChange={(e) => setValue(e.target.value)}
            value={value}
          ></input>
          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  )
}
