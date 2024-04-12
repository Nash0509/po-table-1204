import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'po';

  scno : number = 1;
  quantity : number = 0;
  totalAll : number = 0;
  empty : boolean = false;
  
  constructor() {

  }

  po = [
    {
      iam : this.scno,
      quantity : 0,
      unitRate : 0,
      total : 0
    }  
  ];

  handleAddRow() {

     this.po.push({
      iam : this.scno,
      quantity : 0,
      unitRate : 0,
      total : 0
     })
     console.log(this.po);
  }

  handleQtyChange(value : string,index : number) {

    
     let numConvted = parseInt(value);

     //update quantity

     this.po[index].quantity = numConvted;
    if(Number.isNaN(this.po[index].quantity)) {
      this.po[index].quantity = 0;
    }

     //update the total

     this.po[index].total = this.po[index].quantity * this.po[index].unitRate;
     console.log(this.po[index]);

     //changing the total quantity
     
     this.quantity = 0;
     this.po.map((one) => {
      this.quantity = this.quantity + one.quantity;
     })
     if(Number.isNaN(this.quantity)) {
      this.quantity = 0;
     }

     //changing the total money
 
     this.totalAll = 0;
     this.po.map((one) => {
      this.totalAll = this.totalAll + one.total;
     })
     if(Number.isNaN(this.totalAll)) {
      this.totalAll = 0;
    }

  }

  handleRateChange(value : string,index : number) {

    //update rate

    this.po[index].unitRate = parseInt(value);
    if(Number.isNaN(this.po[index].unitRate)) {
      this.po[index].unitRate = 0;
    }

    //update the total;

    this.po[index].total = this.po[index].quantity * this.po[index].unitRate;
    console.log(this.po[index]);    

    //changing the total money
 
    this.totalAll = 0;
    this.po.map((one) => {
     this.totalAll = this.totalAll + one.total;
    })
    if(Number.isNaN(this.totalAll)) {
      this.totalAll = 0;
    }

  }

  handleDelete(index: number) {
   
    this.po.splice(index, 1);

     //changing the total quantity

      this.quantity = 0;
      this.po.map((one) => {
       this.quantity = this.quantity + one.quantity;
      })

     //changing the total money
 
     this.totalAll = 0;
     this.po.map((one) => {
      this.totalAll = this.totalAll + one.total;
     })
     if(Number.isNaN(this.totalAll)) {
      this.totalAll = 0;
    }

  }



}
