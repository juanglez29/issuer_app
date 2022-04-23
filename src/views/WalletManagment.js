import React, { useState, useEffect } from "react";
import Dids from "../components/dids";
import Credentials from "../components/credentials";
import { NavLink, Routes, Route } from 'react-router-dom';

const axios = require('axios');


function WalletManagment() {

    const [didlist, setDidlist] = useState([]);
    const [publicdid, setPublicdid] = useState([]);
    const [did, setDid] = useState("");
    const [publicc, setPublic] = useState(false);

    const [myschemas, setMychemas] = useState([]);
    const [schema, setSchema] = useState([]);


    useEffect(async () => {

        await axios.get('http://localhost:8021/myapi/wallet/dids')
            .then(res => setDidlist(res.data.DIDs))

        await axios.get('http://localhost:8021/myapi/wallet/credentials/schemas/created')
            .then(res => setMychemas(res.data.schemas))



    }, [])


    async function getalldids() {
        try {
            await axios.get('http://localhost:8021/myapi/wallet/dids')
                .then(setPublic(false))

        } catch (error) {
            console.error(error);
        }
    }

    async function getmypublicdid() {
        try {
            await axios.get('http://localhost:8021/myapi/wallet/dids/public')
                .then(res => setPublicdid(res.data.DID))
                .then(setPublic(true))


        } catch (error) {
            console.error(error);
        }
    }

    async function getdid(event) {
        try {
            event.preventDefault();
            await axios.post('http://localhost:8021/myapi/wallet/dids/did', { did: did })
                .then(res => setDidlist(res.data.DID))

        } catch (error) {
            console.error(error);
        }
    }

    async function getschema(event) {
        try {
            event.preventDefault();
            await axios.post('http://localhost:8021/myapi/wallet/credentials/schemas', { schema: schema })
                .then(res => setSchema(res.data.schema))

        } catch (error) {
            console.error(error);
        }
    }




    function handleInputChange(did) {
        setDid(did);
    }

    function handleInputChangeschema(schemaid) {
        setSchema(schemaid);
    }


    return (


        <div style={{marginTop: "2%"}}>

           {/*  <NavLink to="/dids">Dids</NavLink>
            <Routes>
                <Route path="/dids" element={<Dids />} />

            </Routes> */}

            <Dids
                getalldids={getalldids}
                getmypublicdid={getmypublicdid}
                getdid={getdid}
                handleInputChange={handleInputChange}
                didlist={didlist}
                publicdid={publicdid}
                publicc={publicc}

            />

<div style={{marginTop: "5%"}}>
            <Credentials 
                getschema={getschema}
                handleInputChangeschema={handleInputChangeschema}
                myschemas={myschemas}
                schema={schema}

            />
            </div>

        </div>
    )
}

export default WalletManagment;