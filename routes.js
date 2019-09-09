import React, {useContext} from 'react'
import {Switch,Route} from 'react-router-dom'
import SettingsContext from './settings-context'
import {IntlContext} from 'react-intl'

import Home from './Home'

const Routes = () => {
  const {business, currentUser, setBusiness, setCurrentUser, setLocale} = useContext(SettingsContext)
  const { formatMessage } = useContext(IntlContext)
  return (
    <Switch>
      <Route path="/" render={props => (
        <Home
          business={business}
          currentUser={currentUser}
          setBusiness={setBusiness}
          setCurrentUser={setCurrentUser}
          setLocale={setLocale}
          t={formatMessage}
        />
      )}/>
    </Switch>
  )
}

export default Routes