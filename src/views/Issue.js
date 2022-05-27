import React, { useState, useEffect } from "react";
import { Button, Form, ProgressBar } from "react-bootstrap";
import {useLocation} from "react-router-dom";
import Issuecomp from "../components/issuecomp";

const axios = require('axios');

function Issue() {

    const location= useLocation();
    const {connid2} = location.state;
     
    const [attr, setAttr] = useState([]);
    const [boddy, setBoddy] = useState([]);
    const [schid, setSch] = useState("");
    const [schname, setSchname] = useState("");
    const [step, setStep] = useState(1);
    const [schemas, setSchemas]= useState([]);
    const [prog, setProg]=useState(70)
    const [label, setLabel] = useState(" credential issuance: Step 5");


    useEffect(async () => {

        if(step == 1){        
            await axios.get('http://localhost:8021/myapi/wallet/credentials/schemas/created')
            .then(res => setSchemas(res.data.schemas))
            }

        if (step == 2) {
            await axios.post('http://localhost:8021/myapi/wallet/credentials/schemas', { schema: schid })
                .then((res) => {
                    setAttr(res.data.schema.attrNames)
                    setSchname(res.data.schema.name)})            
        }
  
    }, [step])



    function handleInputChange(att, event) {
        let b = boddy
        b.push({ name: `${att}`, value: `${event}` })
        setBoddy(b)
    }


    function handleinputschema(schem) {
        setSch(schem)
    }


    function handlebool() {
        setStep(2)
        setProg(84)
        setLabel("credential issuance: Step 6")

    }

    async function issuecred(event) {

        try {

            event.preventDefault();
            await axios.post('http://localhost:8021/myapi/issue/send-offer', {
                
                schema_name: schname,
                connectionID: connid2,
                comment: "This is a Covid-19 vaccination certificate",
                attributes: boddy
            }).then(setStep(3), setProg(100), setLabel(" credential issuance: issuance finished"))

        } catch (error) { 
            console.error(error);
        }
    }


return(

    <div>
    <ProgressBar style={{ marginTop: "1.5%", marginBottom: "4%"}} animated now={prog} label={label}/>
    <Issuecomp
    handleInputChange={handleInputChange}
    handleinputschema={handleinputschema}
    issuecred={issuecred}
    handlebool={handlebool}
    attr={attr}
    schemas={schemas}
    step={step}
    />

</div>

)
}

export default Issue;