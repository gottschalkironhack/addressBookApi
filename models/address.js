const mongoose      = require("mongoose");
const Schema        = mongoose.Schema;

const addressSchema = new Schema({
  firstName:        { type: String, required: true  },
  lastName:         { type: String, required: true },
  phoneNr:          { type: String, required: true },
  address:          { type: String, required: true },
  addressLat:       { type: Number, required: true  },
  addressLng:       { type: Number, required: true  } 
});

const Address = mongoose.model("Address", addressSchema);
module.exports = Address;