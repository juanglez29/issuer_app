import React, { useState, useEffect } from "react";
import Dids from "../components/dids";
const axios = require('axios');


function WalletManagment() {

    const [didlist, setDidlist] = useState([]);
    const [publicdid, setPublicdid] = useState([]);
    const [did, setDid] = useState("");
    const [publicc, setPublic] = useState(false);


    useEffect(async () => {

        await axios.get('http://localhost:8000/myapi/wallet/dids')
            .then(res => setDidlist(res.data.DIDs))


    }, [])


    async function getalldids() {
        try {
            await axios.get('http://localhost:8000/myapi/wallet/dids')
                .then(setPublic(false))

        } catch (error) {
            console.error(error);
        }
    }

    async function getmypublicdid() {
        try {
            await axios.get('http://localhost:8000/myapi/wallet/dids/public')
                .then(res => setPublicdid(res.data.DID))
                .then(setPublic(true))


        } catch (error) {
            console.error(error);
        }
    }

    async function getdid(event) {
        try {
            event.preventDefault();
            await axios.post('http://localhost:8000/myapi/wallet/dids/did', {did: did})
            .then(res=> setDidlist(res.data.DID))

        } catch (error) {
            console.error(error);
        }
    }


    function handleInputChange (did) {
        setDid(did);
    }


    return (


        <>

            <Dids
                getalldids={getalldids}
                getmypublicdid={getmypublicdid}
                getdid={getdid}
                didlist={didlist}
                publicdid={publicdid}
                publicc={publicc}
                handleInputChange={handleInputChange}
            />


        </>
    )
}

export default WalletManagment;