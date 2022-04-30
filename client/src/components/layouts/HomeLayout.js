import React, { useEffect,useState } from 'react'
import { Route, Router, Switch,useHistory, useLocation  } from "react-router-dom"
import history from '../../history'
import Users from '../users/Users'
import UsersDetail from '../users/UsersDetail'
import UserBalance from '../users/UserBalance'

import Devices from '../devices/Devices'
import DevicesDetail from '../devices/DevicesDetail'

import HomePage from '../home/HomePage'
import Header from '../Header'
import ResetPassword from '../settings/ResetPassword'
import Profil from '../settings/Profil'

const HomeLayout = () => {

    useEffect(()=>{
        
    })

    return (
        <div className='container'>
            <Router history={history}>
                <Header />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/users" component={Users} />
                    <Route exact path="/user/:site" component={UsersDetail} />
                    <Route exact path="/user/:site/:id" component={UserBalance} />
                    <Route exact path="/devices" component={Devices} />
                    <Route exact path="/device/:site" component={DevicesDetail} />
                    <Route exact path="/reset/:id" component={ResetPassword} />
                    <Route exact path="/profil/:id" component={Profil} />
                </Switch>
            </Router>
        </div>
    )
}

export default HomeLayout