import { Component, OnInit } from '@angular/core';

import { Createtoken } from '../createtoken';
import { CreatetokenService } from '../createtoken.service';


@Component({
  selector: 'app-createtoken',
  templateUrl: './createtoken.component.html',
  providers: [CreatetokenService],
  styleUrls: ['./createtoken.component.scss']
})
export class CreatetokenComponent implements OnInit {

  tokens: Createtoken[];
  editCreatetoken: Createtoken;

  constructor(private createtokenService: CreatetokenService) { }

  //Page loader activity
  showSpinner: boolean = true;

  ngOnInit() {
    this.getTokens();
  }

  getTokens(): void{
    this.createtokenService.getTokens()
      .subscribe(tokens=>this.tokens=tokens);
    //Show Spinner on loading
    this.createtokenService.getTokens()
      .subscribe(()=>this.showSpinner = false);
  }

  edit(token) {
    this.editCreatetoken = token;
  }

  // search(searchTerm: string) {
  //   this.editCreatetoken = undefined;
  //   if (searchTerm) {
  //     this.createtokenService.searchTokens(searchTerm)
  //       .subscribe(heroes => this.tokens = tokens);
  //   }
  // }

  //delete Token

  delete(token: Createtoken): void {
    this.tokens = this.tokens.filter(h => h !== token);
    this.createtokenService.deleteToken(token._id).subscribe();
    /*
    // oops ... subscribe() is missing so nothing happens
    this.heroesService.deleteHero(hero.id);
    */
  }

  //add(name: string)

  add(tokenname: string,): void {
    this.editCreatetoken = undefined;
    tokenname = tokenname.trim();
    if (!tokenname) { return; }

    // The server will generate the id for this new token
    const newToken: Createtoken = { tokenname } as Createtoken;
    this.createtokenService.addToken(newToken)
      .subscribe(token => this.tokens.push(token));
  }

  // Update Tokens
  update(){
    if (this.editCreatetoken) {
      this.createtokenService.updateToken(this.editCreatetoken)
        .subscribe(token => {
          // replace the token in the tokens list with update from server
          const ix = token ? this.tokens.findIndex(h => h._id === token._id) : -1;
          if (ix > -1) { this.tokens[ix] = token; }
        });
      this.editCreatetoken = undefined;
    }
  }

  model = new Createtoken('','','','', '','','','','');
  submitted = false;
  onSubmit() { this.submitted = true;}

  omit_special_char(event){
      var k;
      k = event.charCode;  //         k = event.keyCode;  (Both can be used)
      return((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57));
    }

  take_special_char(event){
      var l;
      l = event.charCode;  //         k = event.keyCode;  (Both can be used)
      return((l > 64 && l < 91) || (l > 96 && l < 123) || l == 8 || l == 32 || (l >= 48 && l <= 57) || l==46);
    }
  // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }


//Old Code for activity

	// model = new Createtoken(18, 'WandX', 'WAND', 10, 100, 90, 10);

	// submitted = false;

	// onSubmit() { this.submitted = true;}

	// // TODO: Remove this when we're done
 //  	get diagnostic() { return JSON.stringify(this.model); }

 //  	newCreatetoken(){
 //  		this.model = (42,'','','','','','');
 //  	}

  	// omit_special_char(event){
  	// 	var k;
  	// 	k = event.charCode;  //         k = event.keyCode;  (Both can be used)
  	// 	return((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57));
  	// }

    // take_special_char(event){
    //   var l;
    //   l = event.charCode;  //         k = event.keyCode;  (Both can be used)
    //   return((l > 64 && l < 91) || (l > 96 && l < 123) || l == 8 || l == 32 || (l >= 48 && l <= 57) || l==46);
    // }

 //  constructor() { }

 //  ngOnInit() {
 //  }
}