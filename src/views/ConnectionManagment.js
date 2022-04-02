//import { response } from "express";
import React, { useState, useEffect } from "react";
const axios = require('axios');


function ConnectionManagment() {

    const [list, setList] = useState([]);
    
      useEffect(()=>{
         axios.get('http://localhost:8000/myapi/connections')
        .then(res=> setList(res.data.connections))
      }, [])



    async function receiveandaccept(event) {
        try {
            await axios.post('http://localhost:8000/myapi/connections/accept-invitation', { invitation_url: event.target.value})

        } catch (error) {
            console.error(error);
        } 
    }

    async function acceptconnection() {
        try {
            await axios.post('http://localhost:8000/myapi/connections/accept-connection')

        } catch (error) {
            console.error(error);
        }
    }

    async function removeconnection(id) {
        try {
            await axios.delete('http://localhost:8000/myapi/connections/remove-connection', {conn_id: id})
            
        } catch (error) {
            console.error(error);
        }
    }

    async function sendmessage() {
        try {
            await axios.post('http://localhost:8000/myapi/connections/send-message', {msg: "88"})

        } catch (error) {
            console.error(error);
        }
    }

    const connectionslist= list.map(connections => { 
        return<tr key= {connections.connection_id}> 
                <td> {connections.connection_id}</td>
                <td> {connections.state}</td>
                <td> {connections.alias}</td>
                <td> {connections.their_label}</td>
                <td> {connections.their_role}</td>
                </tr>
                
        });
 
    return (

        <div>
            <table>
                <thead>
                <tr > 
                <th> connection_id</th>
                <th> state</th>
                <th> alias</th>
                <th> their_label</th>
                <th> their_role</th>
                </tr>

           </thead>
           <tbody>{connectionslist}</tbody>  

           </table>
           <button style={{width: 150, height: 30}} onClick={removeconnection}>removeconnection</button>
            <input style={{width: 110, height: 30}} type= 'text' onChange={receiveandaccept}/>
            <button style={{width: 110, height: 30}} onClick={acceptconnection}>acceptconnection</button> 
            <button style={{width: 110, height: 30}} onClick={sendmessage}>sendmessage</button>
           

        </div>

    )

}

export default ConnectionManagment;



   /*  async function seeall() {
        try {
            await axios.get('http://localhost:8000/myapi/connections')
            .then(res=> setList(res.data.connections))

        } catch (error) {
            console.error(error);
        }
    } */