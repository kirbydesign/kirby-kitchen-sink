import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KirbyModule } from '@kirbydesign/designsystem';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { TransactionItemModule } from './transaction-item/transaction-item.module';


@NgModule({
  imports: [
    CommonModule,
    KirbyModule,
    HomePageRoutingModule,
    TransactionItemModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
