import React, { Component } from 'react'
import {InfoConsumer} from '../context';

 class Home extends Component {
    render() {
        return (
            <div>
               <InfoConsumer>
                   {data=>{
                       return <h2>{data}</h2>
                   }}
               </InfoConsumer>
            </div>
        )
    }
}
export default Home;
