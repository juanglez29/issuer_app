import React, {useState, useEffect} from "react";
import { Button, Form, ProgressBar} from "react-bootstrap";
import {FcApproval, FcHighPriority, FcInfo} from "react-icons/fc"
import {Link, useLocation} from "react-router-dom"
import axios from "axios";

function Check() {

    const location= useLocation();
    const {presid, connid} = location.state;
    const [listatt, setListatt] = useState({});

    

    useEffect(async () => {
        await axios.post('http://localhost:8021/myapi/proof', {presid: presid})
        .then(res=> setListatt(res.data))
    }, [])



    const list = Object.entries(listatt).map( ([key, value]) => {

                return <div style={{ marginTop: "2%", marginBottom: "3%"}}>
            <h5><FcInfo/> {key}</h5><p style={{ marginLeft: "2%"}}>{value} </p>
               </div>
            }
      
    );

    const age = Object.entries(listatt).map( ([key, value]) => {
        var currentdate = new Date();

        if (key === "birthday") {
            var date2 = new Date(value);
            if ((currentdate.getTime() - date2.getTime()) / 31540000000 <= 18) {
                return <div style={{ marginTop: "2%", marginBottom: "4%" }}>
                    <p>This person is under 18 <FcHighPriority/></p>
                    <button style={{marginTop: "2%"}}><Link to='/' style={{color:'black', textDecoration: 'none'}} state={{connid2: connid }}>Home</Link></button>
                </div>
            }
            else{
                return <div style={{ marginTop: "2%", marginBottom: "4%" }}>
               <p>This person is over 18 <FcApproval/></p>
               <button style={{marginTop: "2%"}}><Link to='/Issue' style={{color:'black', textDecoration: 'none'}} state={{connid2: connid }}>Next</Link></button>
               </div>
              }
        }

});
   

    
    return  (
  
        <div>
             <ProgressBar style={{ marginTop: "1.5%", marginBottom: "4%"}} animated now={56} label={"verify identity: Step 4"}/> 
            <div style={{ marginTop: "2%" }}>{list}</div>
            <div>{age}</div>

        </div>     
    )
       
}

export default Check;


