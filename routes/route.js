const express = require('express');
const router = express.Router();


const Createtoken = require('../models/createtokens');
const Tokentrade = require('../models/tokentrade');

//Create Token CRUD Opearations
//retrieving data
router.get('/createtokens',(req, res, next)=>{
	// res.send('Retrieving the tokens list');
	Createtoken.find(function(err,createtokens){
		res.json(createtokens);
	})
});

//add createtoken
router.post('/createtoken',(req, res, next)=>{
	//logic for creating a token
	let newCreatetoken = new Createtoken({
		tokenname: req.body.tokenname
		// tokensymbol: req.body.tokensymbol,
		// decimals: req.body.decimals,
		// totalsupply: req.body.totalsupply,
		// tokenadvisorvesting: req.body.tokenadvisorvesting,
		// tokenteamvesting: req.body.tokenteamvesting
	});

	newCreatetoken.save((err,createtoken)=>{
		if(err)
		{
			res.json({msg: 'Failed to create new token'});
		}
		else{
			res.json({msg: 'New token added successfully'});
		}
	});
});

//delete createtoken
router.delete('/createtoken/:id',(req, res, next)=>{
	//logic for deleting a token
	Createtoken.remove({_id: req.params.id},function(err,result){
		if(err){
			res.json(err);
		}
		else{
			res.json(result);
		}
	});
});


//Token Trade CRUD Opearations

router.get('/tokentrades',(req, res, next)=>{
	// res.send('Retrieving the contact list');
	Tokentrade.find(function(err,tokentrade){
		res.json(tokentrade);
	})
});

//add Token Trade
router.post('/tokentrade',(req, res, next)=>{
	//logic for creating a token
	let newTokentrade = new Tokentrade({
		tokenname: req.body.tokenname,
		contractaddress: req.body.contractaddress,
		tokenvalue: req.body.tokenvalue
	});

	newTokentrade.save((err,tokentrade)=>{
		if(err)
		{
			res.json({msg: 'Failed to create new token'});
		}
		else{
			res.json({msg: 'New token added successfully'});
		}
	});
});

//delete token trade
router.delete('/tokentrade/:id',(req, res, next)=>{
	//logic for deleting a token
	Tokentrade.remove({_id: req.params.id},function(err,result){
		if(err){
			res.json(err);
		}
		else{
			res.json(result);
		}
	});
});



module.exports = router;