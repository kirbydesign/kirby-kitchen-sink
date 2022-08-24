import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {KirbyModule} from '@kirbydesign/designsystem';

import {TransactionItemComponent} from './transaction-item.component';


@NgModule({
    imports: [
        CommonModule,
        KirbyModule,
    ],
    declarations: [TransactionItemComponent],
    exports: [
        TransactionItemComponent,
    ]
})
export class TransactionItemModule {
}
