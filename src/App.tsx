import React from 'react'
import { Route, Switch } from 'react-router'
import { LayoutMain } from './shared/LayoutMain/LayoutMain'
import { Home } from './pages/Home/Home'
import { About } from './pages/About/About'
import { Services } from './pages/Services/Services'
import { Contact } from './pages/Contact/Contact'

import './styles/index.scss'

function App() {
    return (
        <div className="App">
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/about" component={About} exact />
                <Route path="/services" component={Services} exact />
                <Route path="/contact" component={Contact} exact />
            </Switch>
        </div>
    )
}

export default App
