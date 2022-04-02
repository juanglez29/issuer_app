const axios=require('axios');

exports.getconnections = async (req,res,next) => {
  try{
    const resp= await axios.get("http://localhost:8020/api/connections");
    res.send(resp.data);
  }catch(error){
      console.error(error);
  }
};
exports.createInvitation = async (req,res,next) => {
  try{
    const alias= req.body.alias; 
    const resp= await axios.post(`http://localhost:8020/api/connections/create-invitation?alias=${alias}`); 
     res.send(resp.data.invitation.invitation_url);
    
  }catch(error){
      console.error(error);
  }
};


exports.acceptInvitation = async (req,res,next) => {
  try{
    const invitation = req.body; //no sería req.body.invitaton_url?
     await axios.post("http://localhost:8020/api/connections/accept-invitation", invitation);
     
  }catch(error){
      console.error(error);
  }
};

exports.acceptConnection = async (req,res,next) => {
  try{
   let conn_id= "bd3b50d7-7a26-4d22-9e0c-285fd24d8483";
     await axios.post(`http://localhost:8020/api/connections/${conn_id}/accept-connection`);
     
  }catch(error){
      console.error(error);
  }
};

exports.removeConnection = async (req,res,next) => {
  try{
   const conn_id= req.body;
   console.log(conn_id)
     await axios.delete(`http://localhost:8020/api/connections/${conn_id}`);
     
  }catch(error){
      console.error(error);
  }
};


exports.sendMessage = async (req,res,next) => {
  try{
    const message = req.body;
    let conn_id= "cd044825-a1cb-4e9b-a1f2-4168ff9a8f33";
     await axios.post(`http://localhost:8020/api/connections/${conn_id}/send-message`, message);
     
  }catch(error){
      console.error(error);
  }
};


