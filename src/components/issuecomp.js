import {React, useState} from "react"
import { Button, Form, DropdownButton, Dropdown } from "react-bootstrap"
import { Link } from "react-router-dom"

function Issuecomp(props) {
/* 
    const [selected, setSelected] = useState({});
    const handleSelect = (key, event) => {
    setSelected({ key, value: event.target.value });
  }; */

    function handleInputChange2(att, event) {
        props.handleInputChange(att, event.target.value)
    }

    function handleinputschema2(event) {
        props.handleinputschema(event)
    }


    const schids = props.schemas.map(schema => {
       
        return <Dropdown.Item eventKey={schema.id}>{schema.id}</Dropdown.Item>
   
    });

    const atrib = props.attr.map((att) => {

        var a= "";
        if(att=="agent"){
            a= "Agent"
        }
        if(att=="expiration"){
            a= "Expiration date (YYYY-MM-DD)"
        }
        if(att=="name_last_dosis"){
            a= "Vaccine name"
        }
        if(att=="n_dosis"){
            a= "Number of doses"
        }
        if(att=="date_last_dosis"){
            a= "Date of last dose (YYYY-MM-DD)"
        }
        if(att=="country_last_dosis"){
            a= "Country of last dose"
        }

        return <div style={{ marginBottom: "1%" }}>
            <p style={{width:"21%", display: 'inline-block'}}>{a}:</p> 
            <input placeholder={`type field`} style={{width: "18%", height: "5%", display: 'inline-block'}} type="text" onBlur={(e) => handleInputChange2(att, e)}/>
        </div>

    })

    if (props.step == 1) {
        return (
            <>

                <Form style={{ marginTop: "2%", marginBottom: "4%" }} onSubmit={props.handlebool}>

                <h4>Select the vaccination schema to be issued</h4>  
                <DropdownButton variant="secondary" style={{ marginTop: "2%", marginBottom: "3%"}} onSelect={handleinputschema2} itle="schema" id="dropdown-basic-button">
                {/* <DropdownButton variant="secondary" style={{ marginTop: "2%", marginBottom: "3%"}} onSelect={handleinputschema2, handleSelect} title={selected?.key || "schema"} id="dropdown-basic-button"> */}
                    {schids}
                </DropdownButton>

                    <button type="submit">Next</button>
                    
                </Form>

            </>
        )

    }

    if (props.step == 2) {
        return (
            <> 
               <form style={{ marginTop: "2%", marginBottom: "3%" }} onSubmit={props.issuecred}>
                <h4 style={{ marginBottom: "3%" }}>Fill in the fields of the vaccination form </h4>
                    {atrib}
                    <button type="submit">Next</button>
                </form> 
            </> 
        )
    }
    
    if (props.step == 3) {
        return (
            <>
               <p style={{ marginTop: "2%", marginBottom: "4%" }}>The credential offer has been sent succesfully</p>
               <button ><Link to='/' style={{color:'black', textDecoration: 'none'}}>Home</Link></button>
            </>


        )
    }
   

}
export default Issuecomp;
