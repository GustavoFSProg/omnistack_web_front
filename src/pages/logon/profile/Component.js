import React from 'react'
import { Link, useHistory } from 'react-router-dom'
// eslint-disable-next-line import/no-unresolved
import { FiPower, FiTrash2 } from 'react-icons/fi'
// eslint-disable-next-line import/no-unresolved
import logoImage from '../../../assets/logo.svg'
import '../profile/style.css'
import api from '../../../services/api'
import '../../logon/global.css'

export default (props) => {
  const history = useHistory()

  const ongName = localStorage.getItem('ongName')
  const { incidents } = props
  const ongId = localStorage.getItem('ongId')

  function Redirect() {
    history.push('/incidents')
  }
  // //  --------------------alteraçções--------------

  async function handleDeleteIncident(id) {
    try {
      await api.delete('/incidents/' + id, {
        headers: {
          authorization: ongId,
        },
      })
      alert('Incident deletado com sucesso!')
      history.push('/profile')
    } catch (error) {
      alert('ERRO do Front!')
    }
  }

  async function handleLogout() {
    localStorage.clear()

    window.location('/')
  }

  // //  --------------------alteraçções--------------

  return (
    <div className="profile-container">
      <header>
        <img src={logoImage} alt="Be the Hero" />
        <span>{`Ben Vinda,${ongName}!`}</span>
        <button type="button" onClick={Redirect}>
          <Link type="button" className="button">
            Cadastrar novo Caso
          </Link>
        </button>
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
