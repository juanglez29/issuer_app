import React, { useState, useEffect } from "react";
import {useLocation} from "react-router-dom";
import Proofcomp from "../components/proofcomp.js";
import { ProgressBar } from "react-bootstrap";
import io from 'socket.io-client';
const axios = require('axios');

function Proof() {

    const [msg, setmsg] = useState("");
    const socket= io("http://localhost:8021"); 
    const location= useLocation();
    const {connid} =location.state;
    const [attr, setAttr] = useState([]);
    const [boddy, setBoddy] = useState([]);
    const [schid, setSchid] = useState("");
    const [credid, setCredid] = useState("");
    const [prof, setProf] = useState("");
    const [step, setStep] = useState(1);
    const [prog, setProg]=useState(14);
    const [pred, setPred] = useState([]);
    const [label, setLabel] = useState("verify identity: Step 1");
    

    useEffect(async () => {
        if (step == 2) {
            await axios.post('http://localhost:8021/myapi/wallet/credentials/schemas', { schema: schid })
                .then(res => setAttr(res.data.schema.attrNames))
                
        }

    }, [step])

    useEffect(() => {

        socket.on('msg', msg => { 
        setmsg(msg)
      
   
      })}, [msg])
       

    function handleInputChange(att) {

        let b = boddy
        if (!(b.includes(att))) {
            b.push(att)
        }
        else {
            b.splice(b.indexOf(att), 1)
        }

        setBoddy(b)
    }

    function handleinputzkp(p) {

        let b = pred
        if (!(b.includes(p))) {
            b.push(p)
        }
        else {
            b.splice(b.indexOf(p), 1)
        }
        setPred(pred) 
    }

    function handleinputschid(schid) {
        setSchid(schid) 
    }
    function handleinputcredid(credid) {
        setCredid(credid)
    }

    function handlebool() {
        setStep(2);
        setProg(28);
        setLabel("verify identity: Step 2")
    }
  

    async function proofcred() {

        try {
           await axios.post('http://localhost:8021/myapi/proof/send-request', {
                comment: "This is a credential request",
                connectionID: connid,
                cred_def_id: credid,
                attributes: boddy,
                predicates: pred
              
            }).then(res=> setProf(res.data), setStep(3), setProg(42), setLabel("verify identity: Step 3"))
            
        } catch (error) {
            console.error(error);
        }
    } 



    return (
        <div>
           <ProgressBar style={{ marginTop: "1.5%", marginBottom: "4%"}} animated now={prog} label={label}/> 
            <Proofcomp
                handleInputChange={handleInputChange}
                handleinputcredid={handleinputcredid}
                handleinputschid={handleinputschid}
                handleinputzkp={handleinputzkp}
                proofcred={proofcred}
                handlebool={handlebool}
                attr={attr}
                step={step}
                prof={prof}
                connid={connid}
                pred={pred}
                msg={msg}
            
            />
        
        </div>
    )
}

export default Proof;