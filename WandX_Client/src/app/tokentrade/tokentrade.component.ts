import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

import { Createtoken } from '../createtoken';
import { Tokentrade } from '../tokentrade';
import { FormControl } from '@angular/forms';
import { CreatetokenService } from '../createtoken.service';

@Component({
  selector: 'app-tokentrade',
  templateUrl: './tokentrade.component.html',
  providers: [CreatetokenService],
  styleUrls: ['./tokentrade.component.scss']
})
export class TokentradeComponent implements OnInit {

  tokens: Createtoken[];

	model = new Tokentrade('','','','','','','','');

  // model = new Tokentrade(this.tokens[0],'','','','','','','');

	submitted = false;

	onSubmit() { this.submitted = true;}

	// TODO: Remove this when we're done
  	get diagnostic() { return JSON.stringify(this.model); }

 //  	newTokentrade(){
 //  		this.model = (42,'','');
 //  	}

	omit_special_char(event){
  		var k;
  		k = event.charCode;  //         k = event.keyCode;  (Both can be used)
  		return((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57));
      // return k.replace((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57),' ');
  	}

  today: number = Date.now();

  constructor(private createtokenService: CreatetokenService) { }


  ngOnInit() {
    this.getTokens();
  }

  getTokens(): void{
    this.createtokenService.getTokens()
      .subscribe(tokens=>this.tokens=tokens);
  }

}


// export class CreatetokenComponent implements OnInit {

//   tokens: Createtoken[];

//   constructor(private createtokenService: CreatetokenService) { }

//   model = new Tokentrade('','','','','','','','');

  
//   ngOnInit() {
//     this.getTokens();
//   }

//   getTokens(): void{
//     this.createtokenService.getTokens()
//       .subscribe(tokens=>this.tokens=tokens);
//   }
// }