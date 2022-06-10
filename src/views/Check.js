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

        var a= "";
        if(key=="photo_url"){
            a= "Photo"
            return <div style={{ marginTop: "2%", marginBottom: "3%"}}>
            <h5><FcInfo/> {a}</h5><p style={{ marginLeft: "2%"}}>{value} </p>
               </div>
            }
        
        if(key=="full_name"){
            a= "Full name"
            return <div style={{ marginTop: "2%", marginBottom: "3%"}}>
            <h5><FcInfo/> {a}</h5><p style={{ marginLeft: "2%"}}>{value} </p>
               </div>
            
            
        }
    
        if(key=="dni_number"){
            a= "Dni"
               return <div style={{ marginTop: "2%", marginBottom: "3%"}}>
            <h5><FcInfo/> {a}</h5><p style={{ marginLeft: "2%"}}>{value} </p>
               </div>
            
        }

        if(key=="address"){
            a= "Home adress"
            return <div style={{ marginTop: "2%", marginBottom: "3%"}}>
            <h5><FcInfo/> {a}</h5><p style={{ marginLeft: "2%"}}>{value} </p>
               </div>
            
        }  
    }      
                
      
    );

    const age = Object.entries(listatt).map( ([key, value]) => {
        var currentdate = new Date();

        if (key === "birthday") {
            var date2 = new Date(value);
            if ((currentdate.getTime() - date2.getTime()) / 31540000000 <= 18) {
                return <div style={{ marginTop: "2%", marginBottom: "4%" }}>
                    <div style={{height:"10%", width:"24%", backgroundColor: "#ffe2e2", borderRadius: "19%"}}>
                    <p style={{padding: "3%", fontSize:"150%"}}>This person is under 18 <FcHighPriority/></p>
                    </div>
                    <button style={{marginTop: "2%"}}><Link to='/' style={{color:'black', textDecoration: 'none'}} state={{connid2: connid }}>Home</Link></button>
                </div>
            }
            else{
                return <div style={{ marginTop: "2%", marginBottom: "4%" }}>
                    <div style={{height:"10%", width:"23%", backgroundColor: "#dce6cd", borderRadius: "19%"}}>
                    <p style={{padding: "3%", fontSize:"150%"}}>This person is over 18 <FcApproval/></p>
                    </div>
               
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


