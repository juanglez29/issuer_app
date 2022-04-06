import React from "react";


function ConnectWith(props) {

   
         function handleInputChange2(event) {
           props.handleInputChange(event.target.value);
        }


    return(
       
        <>
      
      <h6>Connect with a new agent</h6>

<form onSubmit={props.receiveandaccept}>
<input placeholder="introduce url invitation" style={{ width: 330, height: 30 }} type= "text" onChange={handleInputChange2}/>
<button type="submit">Send</button>
</form>
        </>
    )
}

export default ConnectWith;
