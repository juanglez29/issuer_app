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
    const [all, setAll] = useState(true);
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
                .then(setAll(false))

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

    function handleOnclick() {
        setAll(true);
    }



    return (

        <div>

            <div style={{ margin: "3%" }}>

                <h2 style={{ marginBottom: "2%" }}>DIDs</h2>

                <Dids
                    getalldids={getalldids}
                    getmypublicdid={getmypublicdid}
                    getdid={getdid}
                    handleInputChange={handleInputChange}
                    didlist={didlist}
                    publicdid={publicdid}
                    publicc={publicc}

                />
            </div>

            <div style={{ margin: "3%" }}>

                <h2 style={{ marginBottom: "2%" }}>schemas</h2>

                <Credentials
                    getschema={getschema}
                    handleInputChangeschema={handleInputChangeschema}
                    handleOnclick={handleOnclick}
                    myschemas={myschemas}
                    schema={schema}
                    all={all}

                />

            </div>

        </div>

    )
}

export default WalletManagment;