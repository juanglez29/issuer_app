import React from "react";

function ConnectWith(props) {


  function handleInputChange2(event) {
    props.handleInputChange(event.target.value);
  }


  return (

    <>

      <h6 style={{ marginBottom: "1.6%" }}>Hook up with a new agent</h6>

      <form onSubmit={props.receiveandaccept}>
        <input placeholder="introduce url invitation" style={{ width: 330, height: 30 }} type="text" onChange={handleInputChange2} />
        <button type="submit"  style={{ marginLeft: "1%" }}>Send</button>
      </form>
    </>
  )  
}

export default ConnectWith;
