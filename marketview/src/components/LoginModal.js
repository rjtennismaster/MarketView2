import React from 'react'
import Modal from 'react-modal'
import '../css/LoginModal.css'
import Axios from 'axios'


Modal.setAppElement('#root')

function LoginModal({ username, password, setUsername, setPassword,
                      loginStatus, loginStatus2, setLoginStatus, showLoginModal, 
                      setShowLoginModal, setShowSignupModal }) {

    const customStyles = {
      content : {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        padding: '150px',
        border: '2px solid black',
        transform: 'translate(-50%, -50%)',
        background: '#FFD700'
      }
    }
    
    const logIn = () => {
        Axios.post("http://localhost:3001/login", {
          username: username,
          password: password
        }).then((response) => {
          if (response.data.message) {
            //this is the error message
            setLoginStatus(response.data.message)
          } else {
            setShowLoginModal(false)
            setLoginStatus("")
          }
        })
    }

    return (
        <Modal
                isOpen = {showLoginModal}
                shouldCloseOnOverlayClick = {false}
                style = {customStyles}>
            <h1 id = "loginSign">Log In</h1>
            <input
                id = "input1" 
                type = "text"
                value = {username}
                placeholder = "Username..."
                onChange = {(event) => {
                    setUsername(event.target.value)
                }} 
            />
            <input
                id = "input2" 
                type = "password"
                value = {password}
                placeholder = "Password..."
                onChange = {(event) => {
                    setPassword(event.target.value)
                }}
            />
            <button id = "button3" onClick = {() => {logIn()}}>Log In</button>
            <button id = "button4" onClick = {() => {
                    setShowLoginModal(false)
                    setShowSignupModal(true)
                    }}> Go To Signup
            </button>
            <button id = "button9" onClick = {() => {setShowLoginModal(false)}}>Continue without Logging in [Limited Functionality]</button>
            <h2 id = "loginStatus">{loginStatus}</h2> 
            <h2 id = "loginStatus2">{loginStatus2}</h2>
        </Modal>
    )
}

export default LoginModal