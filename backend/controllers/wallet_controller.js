const axios = require('axios');


exports.getdids = async (req, res, next) => {
  try {
    const resp = await axios.get("http://localhost:8020/api/wallet/dids");
    res.send(resp.data);

  } catch (error) {
    console.error(error);
  }
};

exports.getdid= async (req, res, next) => {
    try {
      const did = req.body.did;
      console.log(did);
      const resp = await axios.get(`http://localhost:8020/api/wallet/dids/${did}`);
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
  