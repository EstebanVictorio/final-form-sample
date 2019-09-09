import React from 'react'


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {hasError: false, msg:'', error: null}
  }

  static getDerivedStateFromError() {

    return {hasError: true, error: 'Intentional Error getDerivedStateFromError'}
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    
    this.setState({hasError: true, error: 'Intentional Error componentDidCatch'})
    
  }


  render() {
    const { children } = this.props
    const { hasError, msg, error } = this.state
  
    if(hasError || error) {
      return (
        <div>
          <h2>Error:</h2>
          <pre>
            {msg}
          </pre>
        </div>
      )
    }

    return children
  }
}

export default ErrorBoundary