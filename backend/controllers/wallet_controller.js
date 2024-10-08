const axios = require('axios');


exports.getdids = async (req, res, next) => {
  try {
    const resp = await axios.get("http://localhost:8020/api/wallet/dids");
    res.send(resp.data);

  } catch (error) {
    console.error(error);
  }
};


  exports.getpublicdid = async (req, res, next) => {
    try {
      const resp = await axios.get("http://localhost:8020/api/wallet/dids/public");
      res.send(resp.data);
  
    } catch (error) {
      console.error(error);
    }
  };

  
  exports.getschemas = async (req, res, next) => {
    try {
      const resp = await axios.get("http://localhost:8020/api/wallet/credentials/schemas/created");
      res.send(resp.data);
  
    } catch (error) {
      console.error(error);
    }
  };

  exports.getschema = async (req, res, next) => {
    try {
      const schemaID = req.body.schema;
      const resp = await axios.get(`http://localhost:8020/api/wallet/credentials/schemas/${schemaID}`);
      res.send(resp.data);
  
    } catch (error) {
      console.error(error);
    }
  };


  exports.publish = async (req, res, next) => {
    try {
     await axios.post("http://localhost:8020/api/wallet/credentials/vaccination");
  
    } catch (error) {
      console.error(error);
    }
  };