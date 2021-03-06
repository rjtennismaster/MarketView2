import React, { useState } from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Axios from 'axios'
import OtherUserModal from './OtherUserModal'




function Social({ username, setUsername, setPassword, 
                setShowWelcomeModal, setLoginStatus, xValues,
                yValues, showStockModal, setShowStockModal,
                fetchStock, setLoginStatus2 }) {

    const [searchedUsername, setSearchedUsername] = useState("")
    const [showOtherUserModal, setShowOtherUserModal] = useState(false)
    const [searchStatus, setSearchStatus] = useState("")

    const searchUser = () => {
        Axios.post("http://localhost:3001/searchUser", {
          searchedUsername: searchedUsername
        }).then((response) => {
          if (response.data.message) {
            //this is the error message
            setSearchStatus(response.data.message)
          } else {
            setShowOtherUserModal(true)
            setSearchStatus("")
          }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        searchUser()
    }
    
    return (
        <div>
            <Header 
            title = "Social" 
            username = {username} 
            setUsername = {setUsername}
            setPassword = {setPassword}
            setShowWelcomeModal = {setShowWelcomeModal}
            setLoginStatus = {setLoginStatus}
            setLoginStatus2 = {setLoginStatus2} 
            />
            <Navbar />
            <div className = {"searchContainer"}>
                    <form onSubmit = {handleSubmit}>
                        <div className = {"inputBox"}>
                        <input
                            type = "text"
                            value = {searchedUsername}
                            placeholder = "Search a Username"
                            onChange = {(event) => {
                                setSearchedUsername(event.target.value)
                            }}
                        />
                        <input type = "submit" className = {"submitButton"}/>
                        </div>
                    </form>
            </div>
            <h2 id = "loginStatus">{searchStatus}</h2>
            <OtherUserModal
                username = {username}
                searchedUsername = {searchedUsername}
                fetchStock = {fetchStock}
                xValues = {xValues}
                yValues = {yValues}
                showOtherUserModal = {showOtherUserModal}
                setShowOtherUserModal = {setShowOtherUserModal}
                showStockModal = {showStockModal}
                setShowStockModal = {setShowStockModal}
            />
        </div>
    )
}

export default Social