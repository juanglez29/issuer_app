import React from "react"
import { Table, Button } from "react-bootstrap"

function Dids(props) {


    function handleInputChange2(event) {
        props.handleInputChange(event.target.value);
    }

    const didslist = props.didlist.map(dids => {
        return <tr key={dids.did}>
            <td> {dids.did}</td>
            <td> {dids.posture}</td>
        </tr>

    });


    if (props.publicc == true) {

        return (

            <div>

                <Button variant="outline-info" onClick={() => props.getalldids()}>Show all ID's</Button>

                <Table style={{ marginTop: "4%", maxWidth: "55%" }} striped bordered hover responsive>
                    <thead >
                        <tr >
                            <th> Did</th>
                            <th> Posture</th>
                        </tr>

                    </thead>
                    <tbody style={{ overflowY: "scroll" }}>
                        <tr key={props.publicdid.did}>
                            <td> {props.publicdid.did}</td>
                            <td> {props.publicdid.posture}</td>
                        </tr>

                    </tbody>

                </Table>

            </div>

        )

    }

    else {
        return (

            <>

                <Button variant="info" onClick={() => props.getmypublicdid()}>Get my DID</Button>


                <form style={{ marginTop: "2%" }} onSubmit={props.getdid}>
                    <input placeholder="introduce DID" style={{ width: 330, height: 30 }} type="text" onChange={handleInputChange2} />
                    <Button variant="primary" size="sm" style={{ marginLeft: "1.6%" }} type="submit">Search by DID</Button>
                </form>

                <Table style={{ marginTop: "1%", maxWidth: "55%" }} striped bordered hover responsive>
                    <thead >
                        <tr >
                            <th> Did</th>
                            <th> Posture</th>
                        </tr>

                    </thead>
                    <tbody style={{ overflowY: "scroll" }}>{didslist}</tbody>

                </Table>

            </>

        )
    }

}
export default Dids;