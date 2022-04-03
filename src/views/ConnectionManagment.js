
import React, { useState, useEffect } from "react";
//import ReactTable from "react-table";
const axios = require('axios');


function ConnectionManagment() {

    const [list, setList] = useState([]);
    const [url, setUrl] = useState("");

    useEffect(() => {
        axios.get('http://localhost:8000/myapi/connections')
            .then(res => setList(res.data.connections))
    }, [])



    async function receiveandaccept(event) {
        try {
            event.preventDefault();
            await axios.post('http://localhost:8000/myapi/connections/accept-invitation', { invitation_url: url })
            .then(axios.get('http://localhost:8000/myapi/connections').then(res => setList(res.data.connections)))

        } catch (error) {
            console.error(error);
        }
    }

    async function acceptconnection(id) {
        try {
            await axios.post('http://localhost:8000/myapi/connections/accept-connection', { conn_id: id })
                .then(axios.get('http://localhost:8000/myapi/connections').then(res => setList(res.data.connections)))

        } catch (error) {
            console.error(error);
        }
    }

    async function removeconnection(id) {
        try {
            await axios.post('http://localhost:8000/myapi/connections/remove-connection', { conn_id: id })
                .then(axios.get('http://localhost:8000/myapi/connections').then(res => setList(res.data.connections)))

        } catch (error) {
            console.error(error);
        }
    }

    async function sendmessage() {
        try {
            await axios.post('http://localhost:8000/myapi/connections/send-message', { msg: "88" })

        } catch (error) {
            console.error(error);
        }
    }

    
    const connectionslist = list.map(connections => {
        return <tr key={connections.connection_id}>
            <td> {connections.connection_id}</td>
            <td> {connections.state}</td>
            <td> {connections.alias}</td>
            <td> {connections.their_label}</td>
            <td> {connections.their_role}</td>
            <td>
                {connections.rfc23_state == "request-received" ? <button style={{ width: 150, height: 30 }} onClick={() => acceptconnection(connections.connection_id)}>acceptconnection</button> : null}
                <button style={{ width: 150, height: 30 }} onClick={() => removeconnection(connections.connection_id)}>removeconnection</button>
            </td>

        </tr>

    });
    

    const handleInputChange = (event) => {
        setUrl(event.target.value);
    }

    return (

        <div>
            <table >
                <thead >
                    <tr >
                        <th> Connection_id</th>
                        <th> State</th>
                        <th> Alias</th>
                        <th> Their_label</th>
                        <th> Their_role</th>
                        <th> Actions </th>
                    </tr>

                </thead>
                <tbody style={{ "maxHeight": "1", "overflowY": "scroll" }}>{connectionslist}</tbody>

            </table>

          <h6>Connect with a new agent</h6>

            <form onSubmit={receiveandaccept}>
        <input slaceholder="introduce url invitation" style={{ width: 330, height: 30 }} type= "text" onChange={handleInputChange}/>
        <button type="submit">Send</button>
        </form>

            {/* <button style={{ width: 140, height: 30 }} onClick={sendmessage}>sendmessage</button> */}

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