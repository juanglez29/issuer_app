import React, {useState, useEffect} from "react";
const axios = require('axios');

function Issue() {

    const [attr, setAttr] = useState([]);
    const boddy= [];
    //const [boddy, setBoddy] = useState([]);

    useEffect(async () => {

        await axios.post('http://localhost:8021/myapi/wallet/credentials/schemas', { schema: 'VZ8cGrF4UX4wcTjq8dB696:2:test:1.8' })
        .then(res => setAttr(res.data.schema.attrNames))
        
    }, [])

    function handleInputChange(att, event) {
        boddy.push({"name": `${att}`, "value":`${event.target.value}`})
       
    }
    

   async function issuecred(event){
    try {
        event.preventDefault();
        await axios.post('http://localhost:8021/myapi/issue/send-offer/covid', {"schema_name": "test",
        "connectionID": "7e92c474-b4bb-4d98-9f28-60971339fa65",
        "attributes": boddy
    })

    } catch (error) {
        console.error(error);
    }
   }


    const atrib = attr.map((att) => {
        
        return <div>
        <p>{att}</p>
        <input placeholder="introduce field" style={{ width: 330, height: 30 }} type="text" onChange={ (e)=>handleInputChange(att, e)} />
        </div>
        
    }) 


    return(
        <form onSubmit={issuecred}>
         {atrib}
        <button type="submit">Submit</button>
    </form>

        
       
   )
}

export default Issue;