const axios = require('axios');

 exports.whconn = async (req, res, next) => {
  
     const event= req.body;
      switch(event.topic){
    case "bassicmessages":
    if(event.event_name==="message_received"){
        const x= res.json({});
        console.log(event.message);
    }
    else{
        console.log("msg received");
    }
break;
      }
     
   
  
};  