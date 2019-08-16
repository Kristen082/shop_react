import React from 'react'
import {BrowserRouter,Switch,Redirect,Route} from 'react-router-dom'

import Loadable from 'react-loadable'

function Loading(){
    return <div>Loading</div>
}

let My=Loadable({
    loading:Loading,
    loader:()=>import('../views/my')
})
let Registry=Loadable({
    loading:Loading,
    loader:()=>import('../views/registry')
})
let Order=Loadable({
    loading:Loading,
    loader:()=>import('../views/order')
})
let Login=Loadable({
    loading:Loading,
    loader:()=>import('../views/login')
})
let Home=Loadable({
    loading:Loading,
    loader:()=>import('../views/home')
})
let City=Loadable({
    loading:Loading,
    loader:()=>import('../views/city')
})
// import Order from "../views/order"
// import city from "../views/city"
// import Login from "../views/login"

function Rootrouter(){
    return <BrowserRouter>
        <Switch>
            <Route path="/registry" component={Registry}/>
            <Route path="/my" component={My}/>
            <Route path="/login" component={Login}/>
            <Route path="/order" component={Order}/>
            <Route path="/city" component={City}/>
            <Route path="/home" component={Home}/>
            <Redirect to="/home" from="/" />
        </Switch>
    </BrowserRouter>
}
export default Rootrouter



