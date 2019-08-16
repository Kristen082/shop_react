import React, { Component } from 'react'
import Item from '../components/cityitem'
import { city } from "../api/user";


export class City extends Component {
    state={
        ids:[]
    }
    render() {
        let {ids}=this.state;
        console.log(this.state)
        return (
            <div>
                <h1>城市列表</h1>
                <div className="id">
                <div>
                    {
                        // ids.map((item,index)=>{
                        //     <div>
                        //         {item}
                        //     </div>
                        // })
                    }
                </div>
                </div>
                <Item/>
            </div>
        )
    }
    componentDidMount(){
        city().then((res)=>{
            this.setState({ids:res.data.lists})
        })
    }
}

export default City
