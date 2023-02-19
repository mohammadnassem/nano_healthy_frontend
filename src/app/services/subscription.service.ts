import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Subscription } from '../models/subscription';
@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  constructor(private http: HttpClient) { }
  api = "http://127.0.0.1:8000/api/subscription";

  addNewSubscription(subscription: Subscription) {
    return this.http.post(this.api + "/addSubscription",subscription );
  }
}
