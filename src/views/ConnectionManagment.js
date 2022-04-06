
import React, { useState, useEffect } from "react";
//import ReactTable from "react-table";
import { useLocalStorage } from "../filter_config";
import Connections from "../components/connections";
import ConnectWith from "../components/connectwith";
const axios = require('axios');


function ConnectionManagment() {

    const [list, setList] = useState([]);
    const [url, setUrl] = useState("");
    const [update, setUpdate] = useState(false);
    //const [filter, setFilter] = useState("all");
    const [filter, setFilter] = useLocalStorage("filter", "");
    

    
    useEffect(async () => {
        
        if(filter==="all"){
      
            await axios.get('http://localhost:8000/myapi/connections')
            .then(res => setList(res.data.connections))
        }

        if(filter==="pendinng"){
            await axios.get('http://localhost:8000/myapi/connections/pending')
            .then(res => setList(res.data.connections_pending))
        }

        if(filter==="active"){
            await axios.get('http://localhost:8000/myapi/connections/active')
            .then(res => setList(res.data.connections_active))
        } 
        
    }, [update, setFilter])


      function getallconn() {
    
             setFilter("all");
          // setUpdate(!update)
       
    }

      function getpendingconn() {
      
             setFilter("pendinng");
          //  setUpdate(!update)
         
    }

     function getactiveconn() {
        
             setFilter("active");
            //setUpdate(!update)
    
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
            .then(setUpdate(!update));

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

    async function sendmessage(id) {
        try {
            await axios.post('http://localhost:8000/myapi/connections/send-message', { msg: "88" }, { conn_id: id })

        } catch (error) {
            console.error(error);
        }
    }

    

     function handleInputChange (url) {
        setUrl(url);
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
            sendmessage={sendmessage}
            />
            <span>
                
            </span>

            <ConnectWith handleInputChange={handleInputChange}
            receiveandaccept={receiveandaccept}
            />

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