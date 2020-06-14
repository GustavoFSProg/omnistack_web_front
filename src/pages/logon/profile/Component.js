import React, { useEffect, useState } from 'react'
// eslint-disable-next-line import/no-unresolved
import { FiPower, FiTrash2 } from 'react-icons/fi'
// eslint-disable-next-line import/no-unresolved
import { Link, useHistory } from 'react-router-dom'
import logoImage from '../../../assets/logo.svg'
import '../profile/style.css'
import api from '../../../services/api'
import '../../logon/global.css'

export default (props) => {
  const history = useHistory()

  const ongName = localStorage.getItem('ongName')
  const { incidents } = props
  const ongId = localStorage.getItem('ongId')

  // //  --------------------alteraçções--------------

  async function handleDeleteIncident(id) {
    try {
      await api.delete('/incidents/' + id, {
        headers: {
          authorization: ongId,
        },
      })
      history.push('/profile')
      alert('Incident deletado com sucesso!')
    } catch (error) {
      alert('ERRO do Front!')
    }
  }

  async function handleLogout() {
    localStorage.clear()

    history.push('/')
  }
  async function Redirect() {
    history.push('/incidents')
  }
  // //  --------------------alteraçções--------------

  return (
    <div className="profile-container">
      <header>
        <img src={logoImage} alt="Be the Hero" />
        <span>{`Ben Vinda,${ongName}!`}</span>
        <Link type="button" className="button" onClick={Redirect}>
          Cadastrar novo Caso
        </Link>
        <button type="button" onClick={handleLogout}>
          <FiPower size={18} color="#E02041" />
        </button>
      </header>

      <h1>Casos Cadastrados</h1>
      <ul>
        {incidents.map((incident) => (
          <li key={incident.id}>
            <strong>CASO:</strong>
            <p>{incident.title}</p>
            <strong>Descrição</strong>
            <p>{incident.description}</p>
            <strong>Valor:</strong>
            <p>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(incident.value)}
            </p>

            <button
              type="button"
              onClick={() => handleDeleteIncident(incident.id)}
            >
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
