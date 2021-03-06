import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Logon from './pages/logon'
import Register from './pages/logon/register'
import Profile from './pages/logon/profile'
import NewIncident from './pages/NewIncident'

export default function Routes() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile} />
        <Route path="/incidents" component={NewIncident} />
      </Switch>
    </HashRouter>
  )
}
