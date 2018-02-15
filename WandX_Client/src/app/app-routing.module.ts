import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatetokenComponent } from './createtoken/createtoken.component'; 
import { TokentradeComponent } from './tokentrade/tokentrade.component';
import { ExistingtokensComponent } from './existingtokens/existingtokens.component'; 


const routes: Routes = [
{
	path:'createtoken',
	component: CreatetokenComponent
},

{
	path:'existingtokens',
	component: ExistingtokensComponent
},

{
	path:'tokentrade',
	component: TokentradeComponent
}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
