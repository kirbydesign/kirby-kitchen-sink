import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { KirbyModule } from '@kirbydesign/designsystem';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { TransactionItemComponent } from '../transaction-item/transaction-item.component';
import { TransactionItemModule } from '../transaction-item/transaction-item.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    KirbyModule,
    HomePageRoutingModule,
    TransactionItemModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
