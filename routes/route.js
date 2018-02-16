const express = require('express');
const router = express.Router();

const fs = require('fs');
const solc = require('solc');

const Createtoken = require('../models/createtokens');
const Tokentrade = require('../models/tokentrade');

//Create Token CRUD Opearations
//retrieving data
router.get('/createtokens',(req, res, next)=>{
	// res.send('Retrieving the tokens list');
	Createtoken.find(function(err,createtokens){
		res.json(createtokens);
	});
});

// router.get('/index',(req, res, next)=>{
// 	// res.send('Retrieving the tokens list');
// 	res.render('createContract.ejs', {bytecode: bytecode, abi: abi, contract: result});
// });

//add createtoken
router.post('/createtoken',(req, res, next)=>{
	//logic for creating a token
	let newCreatetoken = new Createtoken({
		tokenname: req.body.tokenname,
		tokensymbol: req.body.tokensymbol,
		decimals: req.body.decimals,
		totalsupply: req.body.totalsupply,
		tokenadvisorvesting: req.body.tokenadvisorvesting,
		tokenteamvesting: req.body.tokenteamvesting
	});

	newCreatetoken.save((err,createtoken)=>{
		if(err)
		{
			res.json({msg: 'Failed to create new token'});
		}
		else{
			res.json({msg: 'New token added successfully'});
		}
		fs.readFile("./sampleContract.sol",'utf8',function(err,data){
			if(err){
				return console.log(err);
			}
			console.log(req.body);
			var tokenName = (req.body.tokenname).replace(/\s/g, "");
			var tokenSymbol = req.body.tokensymbol;
			var decimals = req.body.decimals;
			var totalSupply = req.body.totalsupply;
			var advisorVesting = req.body.advisorvesting;
			var teamVesting = req.body.teamvesting;

			var result = data.replace(/TOKEN_NAME/g, tokenName);
				result = result.replace(/TOKEN_SYMBOL/g,tokenSymbol);
				result = result.replace(/DECIMAL_PLACES/g,decimals);
				result = result.replace(/TOTAL_TOKEN_SUPPLY/g,totalSupply);
				result = result.replace(/TEAM_SHARE/g, teamVesting);
				result = result.replace(/ADVISOR_SHARE/g, advisorVesting);
			var dir = './tmp/';
			if(!fs.existsSync(dir)){
				fs.mkdirSync(dir);
			}

			dir = dir + tokenName + "/";
			if (!fs.existsSync(dir)){
				fs.mkdirSync(dir);
			}
			var contractFile = dir + tokenName + '.sol';
			fs.writeFile(contractFile, result, 'utf8', function (err){
				if (err){
					return console.log(err);
				}
				var output = solc.compile(result, 1);
				//console.log(output);
				var bytecode;
				var abi;
				var abiRaw;
				for (var contractName in output.contracts){
					console.log(contractName);
					if (contractName.indexOf("Crowdsale") !== -1){
						bytecode = output.contracts[contractName].bytecode;
						abiRaw = output.contracts[contractName].interface;
						abi = JSON.parse(abiRaw);
					}
				}
				if (bytecode == undefined)
          			res.send(output.errors);
      			var binaryFile = dir + tokenName + '.bin';
        		var abiFile = dir + tokenName + '.abi';
        		fs.writeFile(binaryFile, bytecode, 'utf8', function (err){
        			if (err)
        				return console.log(err);
        			fs.writeFile(abiFile, abiRaw, 'utf8', function (err){
        				if (err)
        					return console.log(err);
        				router.get('/index',(req, res, next)=>{
	// res.send('Retrieving the tokens list');
	res.render('createContract.ejs', {bytecode: bytecode, abi: abi, contract: result});
});
        				//res.render('createContract.ejs', {bytecode: bytecode, abi: abi, contract: result});
        			});
        		});
			});
			// for (var contractName in output.contracts){
			// 	console.log(contractName);
			// 	if (contractName.indexOf("Crowdsale") !== -1){
			// 		bytecode = output.contracts[contractName].bytecode;
			// 		abiRaw = output.contracts[contractName].interface;
			// 		abi = JSON.parse(abiRaw);
			// 	}
			// }
			// if (bytecode == undefined)
   //        		res.send(output.errors);
   //    		var binaryFile = dir + tokenName + '.bin';
   //      	var abiFile = dir + tokenName + '.abi';
   //      	fs.writeFile("binaryFile", bytecode, 'utf8', function (err){
   //      		if (err)
   //      			return console.log(err);
   //      		fs.writeFile(abiFile, abiRaw, 'utf8', function (err){
   //      			if (err)
   //      				return console.log(err);
   //      			res.render('createContract.ejs', {bytecode: bytecode, abi: abi, contract: result});
   //      		});
   //      	});
		});
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
	});
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