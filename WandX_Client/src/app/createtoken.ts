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
	public tokenadvisoraddress: string,
	public tokenteamvesting: string,
	public tokenteamaddress: string,
	){ }
}
