import React from 'react'
import NavBar from './components/ui/navBar'
import { Route, Switch } from 'react-router-dom'
import Login from './layouts/login'
import Main from './layouts/main'
import Users from './layouts/users'
import UserEdit from './components/userEdit'

const App = () => {
    return (
        <>
            <NavBar />
            <Switch>
                <Route path={'/users/:userId?/edit'} component={UserEdit} />
                <Route path={'/users/:userId?'} exact component={Users} />
                <Route path={'/login/:type?'} component={Login} />
                <Route path={'/'} exact component={Main} />
            </Switch>
        </>
    )
}

export default App
