import React, {useState, useEffect} from "react";
import QRCode  from "react-qr-code";
const axios = require('axios');
//const download = require('react-file-download')


function Invitations() {

    const [inv, setListinv] = useState("");
    const [alias, setAlias] = useState("");


        async function createinv(event) {

            try {
                event.preventDefault();
                await axios.post('http://localhost:8000/myapi/connections/create-invitation', {alias: alias})
                .then(res=> setListinv(res.data))
    
            } catch (error) {
                console.error(error);
            }
        }

        const handleInputChange = (event) => {
            setAlias(event.target.value);
        }
    return(
        //¿necesito hacer el QR de la invitacion entera , no solo la url ?
        <>
        <h2>Please, enter your ID below: </h2>
        <form onSubmit={createinv}>
        <input style={{width: 110, height: 30}} type= "text" onChange={handleInputChange}/>
        <button type="submit">Send</button>
        </form>

        
        <QRCode value = {inv} />
        <p>{inv}</p>
        </>
    )
}

export default Invitations;

