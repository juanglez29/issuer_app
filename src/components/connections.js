
import React, { useState} from "react"

function Connections(props) {

    //const[details, setDetails]= useState(false);
  
    const connectionslist = props.list.map(connections => {
        return <tr key={connections.connection_id}>
            <td> {connections.connection_id}</td>
            <td> {connections.state}</td>
            <td> {connections.alias}</td>
            <td> {connections.their_label}</td>
            <td> {connections.their_role}</td>
            <td>
            {/* {connections.state == ("response" || "active" || "completed") ? <button style={{ width: 150, height: 30 }} onClick={() => props.sendmessage(connections.connection_id)}>sendmessage</button> : null}  */}
                 {connections.rfc23_state == "request-received" ? <button style={{ width: 150, height: 30 }} onClick={() => props.acceptconnection(connections.connection_id)}>acceptconnection</button> : null} 
                <button style={{ width: 150, height: 30 }} onClick={() => props.removeconnection(connections.connection_id)}>removeconnection</button>
                
            </td>

        </tr>

    });
    



    return (

        <>
 
            <p>Show mode:  <select defaultValue={props.filter}>
                <option value="all" onClick={() => props.getallconn()}>All</option>
                <option value="pendinng" onClick={() => props.getpendingconn()}>Pending</option> 
                <option value="active" onClick={() => props.getactiveconn()}>Active</option>
            </select> </p>
            
            

            <table >
                <thead >
                    <tr >
                        <th> Connection_id</th>
                        <th> State</th>
                        <th> Alias</th>
                        <th> Their_label</th>
                        <th> Their_role</th>
                        <th> Actions </th>
                    </tr>

                </thead>
                <tbody style={{ "maxHeight": "1", "overflowY": "scroll" }}>{connectionslist}</tbody>

            </table>

        </>

    )


}
export default Connections;