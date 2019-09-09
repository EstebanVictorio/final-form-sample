import React, {useContext} from 'react'
import SampleForm from './sample-form'
import ErrorBoundary from './error-boundary'
import styles from './index.scss'
const Home = ({business, currentUser, setCurrentUser, setLocale, t}) => {
  const handleLocaleChange = (e) => setLocale(e.target.value)
  return (
    <ErrorBoundary>
    <select className={styles.localeSelector} onChange={handleLocaleChange}>
      <option value="en-US">English 🇺🇸</option>
      <option value="es-MX">Spanish 🇲🇽</option>
    </select>
    <SampleForm
      t={t}
      business={business}
      currentUser={currentUser}
      setCurrentUser={setCurrentUser}
    />
    </ErrorBoundary>
  )
}


export default Home