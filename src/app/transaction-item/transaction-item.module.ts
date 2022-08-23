import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { KirbyModule } from '@kirbydesign/designsystem';

import { TransactionItemComponent } from './transaction-item.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    KirbyModule,
  ],
  declarations: [TransactionItemComponent],
  exports: [
    TransactionItemComponent,
  ]
})
export class TransactionItemModule {}
