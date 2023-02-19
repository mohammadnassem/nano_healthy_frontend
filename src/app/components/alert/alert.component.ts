import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  private subscription?: Subscription;
  message: any;

  constructor(private alertService: AlertService) { }

  ngOnInit() {
    this.subscription = this.alertService.getAlert()
      .subscribe(message => {
        switch (message && message.type) {
          case 'success':
            message.cssClass = 'p-4 mb-4 mx-auto absolute top-0 w-full  text-center text-sm text-blue-800 rounded-lg bg-green-500 dark:bg-gray-800 dark:text-blue-400" role="alert"';
            break;
          case 'error':
            message.cssClass = 'p-4 mb-4 mx-auto absolute top-0 w-full  text-center text-sm text-blue-800 rounded-lg bg-red-500 dark:bg-gray-800 dark:text-blue-400" role="alert"';
            break;
        }

        this.message = message;
      });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

}
