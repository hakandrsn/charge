import React, { useContext, useEffect, useState } from 'react'
import ax from "../ax"
import history from '../history'
import LoginLayout from './layouts/LoginLayout'
import HomeLayout from './layouts/HomeLayout'
import { useAuth } from '../context/AuthContext'

const App = () => {
    const { user } = useAuth()
    const username = localStorage.getItem("username")
    const admin = localStorage.getItem("admin")
    const site = localStorage.getItem("site")

    console.log()
    if (username,admin,site) {
            history.push("/")
            return <HomeLayout />
    } else {
        history.push("/login")
        return <LoginLayout />

    }
}

export default App