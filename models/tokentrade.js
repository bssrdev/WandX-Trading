const mongoose = require('mongoose');

const TokentradeSchema = mongoose.Schema({
	tokenname:{
		type: String,
		required: true
	},
	contractaddress:{
		type: String,
		required: true
	},
	tokenvalue:{
		type: String,
		required: true
	}
});


const Tokentrade = module.exports = mongoose.model('Tokentrade',TokentradeSchema);