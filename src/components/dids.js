import React from "react"
import { Table, Button } from "react-bootstrap"

function Dids(props) {


    const didslist = props.didlist.map(dids => {
        return <tr key={dids.did}>
            <td style={{textAlign: "center"}}> {dids.did}</td>
            <td style={{textAlign: "center"}}> {dids.posture}</td>
        </tr>

    });


    if (props.publicc == true) {

        return (

            <div>

                <Button variant="outline-info" onClick={() => props.getalldids()}>Show all ID's</Button>

                <Table variant="dark" style={{ marginTop: "2%", maxWidth: "55%" }} striped bordered hover responsive>
                    <thead >
                        <tr >
                            <th style={{textAlign: "center"}}> Did</th>
                            <th style={{textAlign: "center"}}> Status</th>
                        </tr>

                    </thead>
                    <tbody style={{ overflowY: "scroll" }}>
                        <tr key={props.publicdid.did}>
                            <td style={{textAlign: "center"}}> {props.publicdid.did}</td>
                            <td style={{textAlign: "center"}}> {props.publicdid.posture}</td>
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

                <Table variant="dark" style={{ marginTop: "2%", maxWidth: "55%" }} striped bordered hover responsive>
                    <thead >
                        <tr >
                            <th style={{textAlign: "center"}}> Did</th>
                            <th style={{textAlign: "center"}}> Status</th>
                        </tr>

                    </thead>
                    <tbody style={{ overflowY: "scroll" }}>{didslist}</tbody>

                </Table>

            </>

        )
    }

}
export default Dids;