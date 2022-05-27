import React, { useState, useEffect } from "react";
import Dids from "../components/dids";
import Credentials from "../components/credentials";
import { Button } from "react-bootstrap"

const axios = require('axios');


function WalletManagment() {

    const [didlist, setDidlist] = useState([]);
    const [publicdid, setPublicdid] = useState([]);
    const [publicc, setPublic] = useState(false);
    const [all, setAll] = useState(true);
    const [myschemas, setMychemas] = useState([]);
    const [news, setNew] = useState(false);

    useEffect(async () => {

        await axios.get('http://localhost:8021/myapi/wallet/dids')
            .then(res => setDidlist(res.data.DIDs))

        await axios.get('http://localhost:8021/myapi/wallet/credentials/schemas/created')
            .then(res => setMychemas(res.data.schemas))


    }, [news])


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

    async function publish(event) {
        try {
            event.preventDefault();
            await axios.post('http://localhost:8021/myapi/wallet/credentials/vaccination')
                .then(setNew(!news))

        } catch (error) {
            console.error(error);
        }
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
                    didlist={didlist}
                    publicdid={publicdid}
                    publicc={publicc}

                />
            </div>

            <div style={{ margin: "3%" }}>

                <h2 style={{ marginBottom: "2%" }}>schemas</h2>
                
                <Credentials
                    handleOnclick={handleOnclick}
                    publish={publish}
                    myschemas={myschemas}
                    news={news}

                />

            </div>

        </div>

    )
}

export default WalletManagment;