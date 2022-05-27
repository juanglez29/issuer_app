import React from "react"
import {Link} from "react-router-dom"
import {Table} from "react-bootstrap"
import {Button} from "react-bootstrap"

 
function Connections(props) {

    //const[details, setDetails]= useState(false);
  
    const connectionslist = props.list.map(connections => {
        return <tr key={connections.connection_id}>
            <td  style={{textAlign: "center", width: "26%"}}> {connections.connection_id}</td>
            <td> {connections.state}</td>
            <td> {connections.alias}</td>
            <td> {connections.their_label}</td>
            <td> {connections.their_role}</td>
            <td style={{textAlign: "center"}}>
                
                
                {connections.connection_id===null ? null: <Button variant="danger" style={{ width: "40%", height: "3%", textAlign: "center", padding:0, marginRight: "3%"}} onClick={(e) => props.removeconnection(connections.connection_id, e)}> remove connection</Button>}
                {(connections.state ===  "active") || (connections.state === "response") ? <Button variant="secondary" style={{ width: "40%", height: "3%", textAlign: "center", padding:0}}><Link to='/Proof' style={{color:'white', textDecoration: 'none', padding:0}} state={{connid: connections.connection_id}}>Issue credential</Link></Button> : null} 
                {connections.rfc23_state === "request-received" ? <Button variant="success" style={{width: "40%", height: "3%", textAlign: "center", padding:0}} onClick={(e) => props.acceptconnection(connections.connection_id, e)}>accept connection</Button> : null} 
            </td>

        </tr>

    });
     

    return ( 

        <div style={{marginTop: "2%"}}>
 
            <div>
            <p>Show mode:  <select style ={{marginLeft: "2%"}} defaultValue={props.filter}>
                <option value="all" onClick={() => props.getallconn()}>All</option>
                <option value="pendinng" onClick={() => props.getpendingconn()}>Pending</option> 
                <option value="active" onClick={() => props.getactiveconn()}>Active</option>
            </select> </p>
            </div>
            
            <Table style={{ marginTop: "2%", marginBottom: "4%"}} striped bordered hover responsive>
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
                <tbody  style={{overflowY: "scroll"}}>{connectionslist}</tbody>

            </Table>

        </div>

    )


}
export default Connections;