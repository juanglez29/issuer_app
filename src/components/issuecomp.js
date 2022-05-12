import React from "react"
import { Table, Button, Form } from "react-bootstrap"

function Issuecomp(props) {

    function handleInputChange2(att, event) {
        props.handleInputChange(att, event.target.value)
    }

    function handleinputId2(event) {
        props.handleinputId(event.target.value)
    }

    function handleinputcomm2(event) {
        props.handleinputcomm(event.target.value)
    }

    function handleinputschema2(event) {
        props.handleinputschema(event.target.value)
    }

    /* function handleinputinit2(event) {
        props.handleinputinit(event.target.value)
    } */


    const atrib = props.attr.map((att) => {

        return <div>
            <p>{att}</p>
            <input placeholder="introduce field" style={{ width: 330, height: 30 }} type="text" onBlur={(e) => handleInputChange2(att, e)} />
        </div>

    })

    if (props.init == false) {
        return (
            <>
                <form onSubmit={props.issuecred}>
                    {atrib}
                    <button type="submit">Submit</button>
                </form>
            </>


        )
    }
    else {
        return (
            <>

                <Form style={{ marginTop: "2%", marginBottom: "4%" }} onSubmit={props.handlebool}>

                    <div>
                        <input placeholder="introduce schema id" style={{ width: 330, height: 30, marginBottom: "2%" }} type="text" onChange={handleinputschema2} />
                    </div>
                    
                    <div>
                        <input placeholder="introduce conn_id" style={{ width: 330, height: 30, marginBottom: "2%" }} type="text" onChange={handleinputId2} />
                    </div>
                  
                    <div>
                        <input placeholder="introduce comment" style={{ width: 330, height: 30 , marginBottom: "2%"}} type="text" onChange={handleinputcomm2} />
                    </div>

                
                    <button type="submit">Start issue</button>
                    
                </Form>

            </>
        )

    }

}
export default Issuecomp;
