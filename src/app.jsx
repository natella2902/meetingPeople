import React from 'react'
import NavBar from './components/ui/navBar'
import { Route, Switch } from 'react-router-dom'
import Login from './layouts/login'
import Users from './layouts/users'
import Main from './layouts/main'

const App = () => {
    return (
        <>
            <NavBar />
            <Switch>
                <Route path={'/login/:type?'} component={Login} />
                <Route path={'/users/:userId?'} exact component={Users} />
                <Route path={'/'} exact component={Main} />
            </Switch>
        </>
    )
}

export default App
