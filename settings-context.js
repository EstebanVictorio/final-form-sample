import React, {createContext} from 'react'


const SettingsContext = createContext({
  business:null,
  currentUser: null,
})

const {Provider, Consumer} = SettingsContext

export {
  Provider,
  Consumer
}

export default SettingsContext