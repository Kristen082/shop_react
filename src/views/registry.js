import React, { Component } from 'react'
import {registry} from '../api/user'

export default class Registry extends Component {
    state={
        username:'',
        password:'',
        // nickname:''
    }
    render() {
        let {username,password}=this.state
        return (
            <div>
                <h1>电商注册页面</h1>
                <div>
                    <span>姓名:</span>
                    <input type="text" value={username} onChange={this.change.bind(this)} name="username"/>
                </div>
                <div>
                    <span>密码:</span>
                    <input type="text" value={password} onChange={this.change.bind(this)} name="password"/>
                </div>
                <button onClick={this.btn}>注册</button>
            </div>
        )
    }
    change=(e)=>{
        console.log(this)
        let name=e.target.name;
        this.setState({
            [name]:e.target.value
        })
    }
    btn=()=>{
        registry(this.state).then(res=>{
            // console.log(res,this.props.history)
            if(res.data.code){
                this.props.history.push('/login')
            }
        })
    }
}
