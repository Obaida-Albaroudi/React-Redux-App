import React from "react";
import styled from "styled-components";
import {Card, Image} from 'semantic-ui-react';

const StyleCard = styled.div`
width: 40%%; 
height: 90%; 
background: grey; 
color: black;
border: 3px solid blue; 
border-radius: 1%; 
text-align: left;
font-weight: 600; 
font-size: 1rem; 
margin-left: 1rem;
margin-top: 2rem;

`
const StyleAnswer = styled.p`
color: white;
font-size: 1rem; 
margin-top: 1rem;  
`


const Stocks = props =>{
    return (
        <StyleCard>

            <Card>

            <Card.Header>{props.stock.title}</Card.Header>
            <StyleAnswer>Company: Undisclosed </StyleAnswer> 
            <StyleAnswer>Job Posting: {props.stock.redirect_url} </StyleAnswer>
            <StyleAnswer>Max Salary: {props.stock.salary_max}</StyleAnswer>
            <StyleAnswer>Min Salary: {props.stock.salary_min}</StyleAnswer>
            <StyleAnswer>Location: {props.stock.location.area}</StyleAnswer>           
            <StyleAnswer>Description: {props.stock.description}</StyleAnswer>


            </Card>


        </StyleCard>
    )
}

export default Stocks;