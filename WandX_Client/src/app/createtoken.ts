// export interface Createtoken {
// 	_id?: any;
// 	tokenname: string;
// 	tokensymbol: string;
// 	decimals: string;
// 	totalsupply: string;
// 	tokenadvisorvesting: string;
// 	tokenteamvesting: string;
	// constructor(
	// 	public id: number,
	// 	public tokenname: string,
	// 	public tokensymbol: string,
	// 	public decimals: number,
	// 	public totalsupply: number,
	// 	public tokenadvisorvesting: number,
	// 	public tokenteamvesting: number
	// 	){ }
// }

export class Createtoken{
	constructor(
	public _id: any,
	public tokenname: string,
	public tokensymbol: string,
	public decimals: string,
	public totalsupply: string,
	public tokenadvisorvesting: string,
	public tokenteamvesting: string,
	){ }
}


export class Tokentrade {
	
	constructor(
		public tokenname: string,
		public contactaddress: string,
		public tokenvalue: string,
		public startdate: string,
		public starttime: string,
		public enddate: string,
		public endtime: string,
		public ethercap: string
		){ }
}

// export class Bonustrade {
// 	constructor(
// 		public id: 0,
// 		public name: '',
// 		public bonusvalues: Bonusvalues[],
// 		){ }
// }


// export class Bonusvalues {

// 	constructor(
// 		public bonuspercentage: string,
// 		public starttime: string,
// 		public startdate: string
// 		){ }
// }