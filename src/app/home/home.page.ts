import { Component, OnInit } from '@angular/core';
import { ListSwipeAction, ToastConfig, ToastController } from '@kirbydesign/designsystem';

import transactionsData from './transactions.json';

@Component({
  // tslint:disable-next-line
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit {
  transactions: Transaction[];

  constructor(private toastController: ToastController) {}

  ngOnInit(): void {
    this.transactions = transactionsData.transactions;
  }

  getSectionName(transaction: Transaction): string {
    return transaction.date.utc;
  }
  
  swipeActions: ListSwipeAction[] = [
    {
      position: 'left',
      title: 'Archive',
      type: 'warning',
      onSelected: (item) => console.log(item),
    },
    {
      position: 'left',
      title: 'Flag',
      icon: 'flag',
      type: 'success',
      onSelected: (item) => console.log(item),
    },
    {
      position: 'right',
      title: 'Delete',
      icon: 'trash',
      type: 'danger',
      onSelected: (item) => console.log(item),
    },
  ];

  onCogSelect() {
    const config: ToastConfig = {
      message: 'Your toast message',
      messageType: 'success',
      durationInMs: 2000,
    };
    this.toastController.showToast(config);
  }

  onBtnSelect() {
    const config: ToastConfig = {
      message: 'Your toast message',
      messageType: 'warning',
      durationInMs: 2000,
    };
    this.toastController.showToast(config);
  };
}

interface Transaction {
  id: string;
  text: string;
  amount: {
    amount: number;
    currencyCode: string;
  };
  iconName: string;
  date: {
    epoch: number;
    utc: string;
  }
  category: {
    id: string;
  }
  balance: {
    amount: number;
  }
  balanced: boolean;
}