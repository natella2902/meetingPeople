import React from 'react'
import Main from './main'
import Login from './login'
import Users from './users'
import { Link, Switch, Route } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <ul className="nav">
                <li className="nav-item me-3 fs-3"><Link className="nav-link" to={'/'}>Main</Link></li>
                <li className="nav-item me-3 fs-3"><Link className="nav-link" to={'/login'}>Login</Link></li>
                <li className="nav-item me-3 fs-3"><Link className="nav-link" to={'/users'}>Users</Link></li>
            </ul>
            <Switch>
                <Route path={'/login'} component={ Login }/>
                <Route path={'/users/:userId?'} exact component={ Users }/>
                <Route path={'/'} exact component={ Main }/>
            </Switch>

        </>
    )
}

export default NavBar
