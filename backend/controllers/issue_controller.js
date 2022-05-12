const axios = require('axios');

 exports.issuecred = async (req, res, next) => {
 
  try {
      
    const cred = req.body; 
    await axios.post("http://localhost:8020/api/issue/send-offer/", cred);
   
  } catch (error) {
    console.error(error);
  }
};  

