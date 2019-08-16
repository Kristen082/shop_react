import React, { Component } from 'react'
import {captcha,login} from '../api/user'

class Login extends Component {
    state={
        captcha:'',
        username:'',
        password:'',
        svg:''
    }
    render() {
        let {username,password,captcha,svg}=this.state;
        return (
            <div>
                <div>
                    <span>姓名:</span>
                    <input type="text" value={username} onChange={this.change.bind(this)} name="username"/>
                </div>
                <div>
                    <span>密码:</span>
                    <input type="text" value={password} onChange={this.change.bind(this)} name="password"/>
                </div>
                <div>
                    <span>验证码:</span>
                    <input type="text" value={captcha} onChange={this.change.bind(this)} name="captcha"/>
                </div>
                <div dangerouslySetInnerHTML={{ __html:  svg}}  />  
                <button onClick={this.btn}>登录</button>              
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
        login(this.state).then(res=>{
            if(res.data.code===1){
                localStorage.setItem('token',res.data.token)
                this.props.history.push('/city')
            }else{
                alert('信息错误请重新登录')
            }
            console.log(res)
        })
    }
    componentDidMount(){
        captcha().then(res=>{
            if(res.data.code===1){
                this.setState({

                    svg:res.data.data
                })
            }
        })
    }
}

export default Login
