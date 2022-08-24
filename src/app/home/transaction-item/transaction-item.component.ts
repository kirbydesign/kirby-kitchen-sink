import { Component, Input, OnInit } from '@angular/core';
import { Transaction } from '../../transaction';

@Component({
  selector: 'transaction-item',
  templateUrl: './transaction-item.component.html',
  styleUrls: ['./transaction-item.component.scss'],
})
export class TransactionItemComponent {

  @Input() transaction: Transaction;

}
