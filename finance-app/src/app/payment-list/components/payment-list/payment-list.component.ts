import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.scss'],
})
export class PaymentListComponent implements OnInit {

  paymentList: any[] = [
    { paymentName: 'name1', paymentAmount: 4.56, dueDate: new Date('03/01/2023') },
    { paymentName: 'name2', paymentAmount: 104.56, dueDate: new Date('03/02/2023') },
    { paymentName: 'name3', paymentAmount: 45.56, dueDate: new Date('03/03/2023') }
  ];

  constructor() { }

  ngOnInit() {}

}
