import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';


@Component({
  selector: 'app-new-header',
  templateUrl: './new-header.component.html',
  styleUrls: ['./new-header.component.css']
})


export class NewHeaderComponent implements OnInit {
  headerItem?: Item[];
  flag: boolean;
  constructor() {
    this.headerItem = [
      {
        image: "icon-phone-alt.svg",
        title: 'Call',
        data: "  +971 (04) 2896 454",
      },
      {
        image: "icon-envelope.svg",
        title: 'Connect with us',
        data: "sales@nanohealthsuite.com",
      },
      {
        image: "icon-clock.svg",
        title: 'Sat - Thu',
        data: "07:00 - 22:00",
      }
    ];


    this.flag = false;
  }
  ngOnInit(): void {

  }

  Menu() {
    this.flag = !this.flag;
    let list = document.querySelector('ul');
    if (this.flag) {
      list?.classList.add('top-[80px]');
      list?.classList.add('opacity-100');

    } else {
      list?.classList.remove('top-[80px]');
      list?.classList.remove('opacity-100');
    }
  }

}
