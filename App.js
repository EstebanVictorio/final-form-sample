import React,{useState, useContext} from 'react'
import ReactDOM from 'react-dom'
import { IntlProvider } from 'react-intl'
import {BrowserRouter as Router} from 'react-router-dom'
import SettingsContext from './settings-context';
import Routes from './routes'
import { MESSAGES } from './constants'

const container = document.querySelector("#root")



const App = ({initial}) => {
  const [business, setBusiness] = useState(initial.business)
  const [currentUser, setCurrentUser] = useState(initial.currentUser)
  const [locale, setLocale] = useState("en-US")
  
  return (
    <SettingsContext.Provider
      value={
        {
          business,
          currentUser,
          setBusiness,
          setCurrentUser,
          setLocale
        }
      }>
      <IntlProvider locale={locale} messages={MESSAGES[locale]}>
        <Router>
            <Routes />
        </Router>
      </IntlProvider>
    </SettingsContext.Provider>
  )
}

if(container) {
    ReactDOM.render(
        <App initial={{
          currentUser: {firstName: 'Esteban', lastName:'Victorio'},
          business: {id:1}
        }}/>
    , container)
}