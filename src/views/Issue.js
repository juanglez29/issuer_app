import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import Issuecomp from "../components/issuecomp";
const axios = require('axios');

function Issue() {

    const [attr, setAttr] = useState([]);
    const [boddy, setBoddy] = useState([]);
    const [conn_id, setId] = useState("");
    const [sch, setSch] = useState("");
    const [schid, setSchid] = useState("");
    const [init, setInit] = useState(true);


    useEffect(async () => {
        if (init == false) {
            await axios.post('http://localhost:8021/myapi/wallet/credentials/schemas', { schema: schid })
                .then(res => setAttr(res.data.schema.attrNames))
        }
   /*      else{
            await axios.post('http://localhost:8021/myapi/wallet/credentials/schemas', { schema: 'VZ8cGrF4UX4wcTjq8dB696:2:test:1.05' })
            .then(res => setAttr(res.data.schema.attrNames))
        } */
    }, [init])

    function handleInputChange(att, event) {
        let b = boddy
        b.push({ name: `${att}`, value: `${event}` })
        setBoddy(b)
    }

    function handleinputId(id) {
        setId(id)
    }

    function handleinputschema(schem) {
        setSch(schem)
    }

    function handleinputinit(schid) {
        setSchid(schid)
    }

    function handlebool() {
        setInit(false);
    }

    async function issuecred(event) {

        try {

            event.preventDefault();
            await axios.post('http://localhost:8021/myapi/issue/send-offer/covid', {
                schema_name: sch,
                connectionID: conn_id,
                attributes: boddy
            })

        } catch (error) {
            console.error(error);
        }
    }


    

return(
    <div>
    <Issuecomp
    handleInputChange={handleInputChange}
    handleinputId={handleinputId}
    handleinputschema={handleinputschema}
    handleinputinit={handleinputinit}
    issuecred={issuecred}
    handlebool={handlebool}
    attr={attr}
    init={init}
    />

</div>
)
}

export default Issue;