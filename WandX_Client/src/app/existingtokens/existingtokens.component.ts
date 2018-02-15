import { Component, OnInit } from '@angular/core';

import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

import { Createtoken } from '../createtoken';
import { CreatetokenService } from '../createtoken.service';

@Component({
  selector: 'app-existingtokens',
  templateUrl: './existingtokens.component.html',
  providers: [CreatetokenService],
  styleUrls: ['./existingtokens.component.scss']
})
export class ExistingtokensComponent implements OnInit {

  // constructor() { }

  // ngOnInit() {
  // }

  tokens: Createtoken[];

  constructor(private createtokenService: CreatetokenService) { }


  ngOnInit() {
    this.getTokens();
  }

  //Page loader activity
  showSpinner: boolean = true;

  getTokens(): void{
    this.createtokenService.getTokens()
      .subscribe(tokens=>this.tokens=tokens);
    //Show Spinner on loading
    this.createtokenService.getTokens()
      .subscribe(()=>this.showSpinner = false);
  }

  delete(token: Createtoken): void {
    this.tokens = this.tokens.filter(h => h !== token);
    this.createtokenService.deleteToken(token._id).subscribe();
    /*
    // oops ... subscribe() is missing so nothing happens
    this.heroesService.deleteHero(hero.id);
    */
  }
}
