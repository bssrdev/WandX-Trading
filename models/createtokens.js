const mongoose = require('mongoose');

const CreatetokenSchema = mongoose.Schema({
	tokenname:{
		type: String,
		required: true
	},
	tokensymbol:{
		type: String,
		required: true
	},
	decimals:{
		type: String,
		required: true
	},
	totalsupply:{
		type: String,
		required: true
	},
	tokenadvisorvesting:{
		type: String,
		required: true
	},
	tokenadvisoraddress:{
		type: String,
		required: true
	},
	tokenteamvesting:{
		type: String,
		required: true
	},
	tokenteamaddress:{
		type: String,
		required: true
	}
});


const Createtoken = module.exports = mongoose.model('Createtoken',CreatetokenSchema);