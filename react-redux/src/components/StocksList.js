import React from "react";
import {connect} from "react-redux";
import Loader from 'react-loader-spinner';

import {Data} from "../actions";

import Stocks from "./Stocks.js";

const StocksList = props =>{
    console.log("props", props.st)
    return (
        <>
            <h1>Daily Time Series for global equity: </h1>
            <p>The most recent data point is the prices and volume information of the current trading day, updated realtime.</p>
            <button onClick={props.Data}>
            {props.st.isLoading ? (
                <Loader type="TailSpin" color="#00BFFF" height= {15} width={100} />
                ) : (
                'See Data'
                )}
            </button>
            {props.st.stock && props.st.stock.map(info => <Stocks stock={info} key={info.key}/>)}

        </>
    )
}

const mapStateToProps = state =>{
    return {
        st: state
    }
}

export default connect(mapStateToProps, {Data})(StocksList);