import React, { useState } from 'react'
import Modal from 'react-modal'
import '../css/SignupModal.css'
import Axios from 'axios'


Modal.setAppElement('#root')

function SignupModal({ showSignupModal, setShowLoginModal, setShowSignupModal, username, password, setUsername, setPassword}) {

    const [signupStatus, setSignupStatus] = useState("")

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

    const signUp = () => {
        Axios.post("http://localhost:3001/signup", {
            username: username,
            password: password
        }).then((response) => {
            console.log(response)
            setSignupStatus(response.data.message)
        })
    }

    return (
        <Modal
                isOpen = {showSignupModal}
                shouldCloseOnOverlayClick = {false}
                style = {customStyles}>
            <h1 id = "signupSign">Sign Up</h1>
            <input
                id = "input3" 
                type = "text"
                placeholder = "Username..."
                value = {username}
                onChange = {(event) => {
                    setUsername(event.target.value)
                }} 
            />
            <input
                id = "input4" 
                type = "password"
                placeholder = "Password..."
                value = {password}
                onChange = {(event) => {
                    setPassword(event.target.value)
                }}
            />
            <button id = "button5" onClick = {() => {signUp()}}>Sign Up</button>
            <button id = "button6" onClick = {() => {
                    setShowSignupModal(false)
                    setShowLoginModal(true)
                    setSignupStatus("")
                    }}> Go To Login
            </button>
            <button id = "button7" onClick = {() => {setShowSignupModal(false)}}>Continue without Logging in [Limited Functionality]</button>
            <div className = "signupCenterer">
                <h2 className = "signupStatus">{signupStatus}</h2>
            </div> 
        </Modal>
    )
}

export default SignupModal