import React, { useState } from "react"

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

            <>


                <button onClick={() => props.getalldids()}>Show all ID's</button>

                <table >
                    <thead >
                        <tr >
                            <th> Did</th>
                            <th> Posture</th>
                        </tr>

                    </thead>
                    <tbody style={{ "maxHeight": "1", "overflowY": "scroll" }}>
                        <tr key={props.publicdid.did}>
                            <td> {props.publicdid.did}</td>
                            <td> {props.publicdid.posture}</td>
                        </tr>

                    </tbody>

                </table>



            </>

        )

    }

    else {
        return (

            <>



                <button onClick={() => props.getmypublicdid()}>Get my DID</button>
                <form onSubmit={props.getdid}>
                    <input placeholder="introduce DID" style={{ width: 330, height: 30 }} type="text" onChange={handleInputChange2} />
                    <button type="submit">Search by DID</button>
                </form>

                <table >
                    <thead >
                        <tr >
                            <th> Did</th>
                            <th> Posture</th>
                        </tr>

                    </thead>
                    <tbody style={{ "maxHeight": "1", "overflowY": "scroll" }}>{didslist}</tbody>

                </table>

            </>

        )
    }

}
export default Dids;