import React, { Component } from 'react'
import {placeInfo,reviews,detailInfo,news}from '../data';

const InfoContext=React.createContext();
class InfoProvider extends Component {
    // state={
    //     info:placeInfo,
    //     reviews:reviews,
    //     detailInfo:detailInfo,
    //     news:news
    // }
    render() {
        return (
            <InfoContext.Provider value="hello i am data"
            // {
            //     // {
            //     //     info:this.state.info,
            //     //     reviews:this.state.reviews,
            //     //     detailInfo:this.state.detailInfo,
            //     //     news:this.state.news
            //     // }
            //     "hello i am data"
            // }
            >

                {this.props.children}
            </InfoContext.Provider>
        )
    }
}
const InfoConsumer=InfoContext.Consumer;

export {InfoProvider,InfoConsumer};
 
