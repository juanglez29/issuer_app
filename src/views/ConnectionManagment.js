
import React, { useState, useEffect } from "react";
//import ReactTable from "react-table";
import { useLocalStorage } from "../filter_config";
import Connections from "../components/connections";
const axios = require('axios');


function ConnectionManagment() {

    const [list, setList] = useState([]);
    const [url, setUrl] = useState("");
    const [update, setUpdate] = useState(false);
    const [filter, setFilter] = useLocalStorage("filter", "");
    

    
    useEffect(async () => {
        if(filter==="active"){
       await axios.get('http://localhost:8000/myapi/connections/active')
            .then(res => setList(res.data.connections_active))
           
        }

       /*  if(filter==="pendinng"){
            await axios.get('http://localhost:8000/myapi/connections/pending')
            .then(res => setList(res.data.connections_pending))
        } */

        else{
            await axios.get('http://localhost:8000/myapi/connections')
            .then(res => setList(res.data.connections))
        }
        
    }, [update])


    async function getallconn() {
        try {
            await axios.get('http://localhost:8000/myapi/connections')
            .then(setFilter("all"))
            .then(setUpdate(!update))
            
        } catch (error) {
            console.error(error);
        }
    }

    async function getpendingconn() {
        try {
            await axios.get('http://localhost:8000/myapi/connections/pending')
            .then(setFilter("pendinng"))
            .then(setUpdate(!update))
        } catch (error) {
            console.error(error);
        }
    }

    async function getactiveconn() {
        try {
            await axios.get('http://localhost:8000/myapi/connections/active')
            .then(setFilter("active"))
            .then(setUpdate(!update))
        } catch (error) {
            console.error(error);
        }
    }

    async function receiveandaccept(event) {
        try {
            event.preventDefault();
            await axios.post('http://localhost:8000/myapi/connections/accept-invitation', { invitation_url: url })
            .then(setUpdate(!update));

        } catch (error) {
            console.error(error);
        }
    }

    async function acceptconnection(id) {
        try {
            await axios.post('http://localhost:8000/myapi/connections/accept-connection', { conn_id: id })

        } catch (error) {
            console.error(error);
        }
    }

    async function removeconnection(id) {
        
        try {
            await axios.post('http://localhost:8000/myapi/connections/remove-connection', { conn_id: id })
            .then(setUpdate(!update));
                
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

    

    const handleInputChange = (event) => {
        setUrl(event.target.value);
    }

    const handleSelectionChange = (event) => {
        setFilter(event.target.value);
    }


    return (

        <div>

            <Connections removeconnection={removeconnection} 
            acceptconnection={acceptconnection}
            getallconn={getallconn}
            getpendingconn={getpendingconn}
            getactiveconn={getactiveconn}
            list={list}
            filter={filter}
            handleSelectionChange={handleSelectionChange}
            
            />



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