import React from 'react'
import NavBar from './components/navBar'
import { Route, Switch } from 'react-router-dom'
import Login from './components/login'
import Users from './components/users'
import Main from './components/main'

const App = () => {
    return (
        <>
            <NavBar/>
            <Switch>
                <Route path={'/login'} component={ Login }/>
                <Route path={'/users/:userId?'} exact component={ Users }/>
                <Route path={'/'} exact component={ Main }/>
            </Switch>
        </>
    )
}

export default App
