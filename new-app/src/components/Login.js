import React, { Component } from 'react'
import io from 'socket.io-client'
import Button from '@material-ui/core/Button';
const API_URL = 'http://127.0.0.1:8080'
const socket = io(API_URL)

export default class App extends Component {

  constructor() {
    super()
    this.state = {
      user: {},
      disabled: ''
    }
    this.popup = null  
  }

  componentDidMount() {
    socket.on('user', user => {
      this.popup.close()
      this.setState({user})
    })
  }

  checkPopup() {
    const check = setInterval(() => {
      const { popup } = this
      if (!popup || popup.closed || popup.closed === undefined) {
        clearInterval(check)
        this.setState({ disabled: ''})
      }
    }, 1000)
  }

  openPopup() {
    const url = `${API_URL}/twitter?socketId=${socket.id}`

    return window.open(url, '')
  }

  startAuth() {
    if (!this.state.disabled) {  
      this.popup = this.openPopup() 
      this.checkPopup()
      this.setState({disabled: 'disabled'})
    }
  }

  closeCard() {
    this.setState({user: {}})
  }

  render() {
    const { name, photo} = this.state.user
    const { disabled } = this.state
  
    return (
      <div className={'container'}>
        {/* If there is a user, show the user */}
        {/* Otherwise show the login button */}
        {name
          ? <div>              
              <img src={photo} alt={name} />
              <h4>{`@${name}`}</h4>
              <Button
                onClick={this.closeCard.bind(this)}
              >Logout</Button>
            </div>
          : <div>
              <Button 
                onClick={this.startAuth.bind(this)}
                mx="auto" variant="contained" color="primary"
              >
                First Aider Twitter login
              </Button>


            </div>
        }
      </div>
    )
  }
}