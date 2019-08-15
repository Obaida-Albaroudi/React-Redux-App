import React from "react";

const Stocks = props =>{
    return (
        <div>

            <h3>{props.stock.title}</h3>
            <ul>
                <p>Company: Undisclosed </p> 
                <p>Job Posting: {props.stock.redirect_url} </p>
                <p>Max Salary: {props.stock.salary_max}</p>
                <p>Min Salary: {props.stock.salary_min}</p>
                <p>Location: {props.stock.location.area}</p>           
                <p>Description: {props.stock.description}</p>
            </ul>

        </div>
    )
}

export default Stocks;