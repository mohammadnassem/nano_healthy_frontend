import { Component } from '@angular/core';
import { About } from 'src/app/models/about';
import { SubscriptionService } from 'src/app/services/subscription.service';
import { Subscription } from '../../models/subscription';
import { subscribeOn } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  title = 'nano-health-suite';
  aboutSection?: About;
  serviceSection?: About;
  subscription: Subscription;
  subscriptonForm: FormGroup;



  constructor(private subscriptionService: SubscriptionService,private alertService: AlertService) {
    this.subscription = new Subscription();
    this.subscriptonForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    }
    );
    this.aboutSection =
    {
      type: "about",
      question: "WHO WE ARE",
      title: 'About the Nano Health',
      information: "Nano Health is devising solutions to equip better and innovative, unified healthcare that can help healthcare providers achieve better care by empowering people to make better decisions.",
      item: [
        {
          image: "Icon-Ins_claim.svg",
          title: '20 Million+',
          data: "  Insurance Claims Processesd",
        },
        {
          image: "Icon-client-and-patient-relation.svg",
          title: '5 Million+',
          data: "Client and Patient Relationships",
        },
        {
          image: "Icon-B_Clients.svg",
          title: '30000+',
          data: "Business Clients Worked With",
        }
        ,
        {
          image: "Icon-clients.svg",
          title: '100+',
          data: "Years of Collective Work Experience",
        }
      ]
    };
    this.serviceSection =
    {
      type: "service",
      question: "DIGITAL HEALTHCARE SOLUTIONS FOR",
      title: 'Healthcare Service Providers',
      information: "Remodeling the patient experience while encouraging efficiencies. Unifies integration and data control into a unique platform to connect data from diverse operations, applications and data sources across the entire care network.",
      item: [
        {
          image: "Icon-PBM.svg",
          title: 'NANO PBM',
          data: "Pharmacy Benefits Management",
        },
        {
          image: "Icon-DRG.svg",
          title: 'NANO DRG',
          data: "Diagnosis Related Group Assignment",
        },
        {
          image: "Icon-EMR-Hover.svg",
          title: 'NANO EMR',
          data: "Electronic Medical Records",
        }
        ,
        {
          image: "Icon-IDDK.svg",
          title: 'NANO IDDK',
          data: "International Drug Data Knowledge",
        }
        ,
        {
          image: "Icon-Medical Coding.svg",
          title: 'NANO MED',
          data: "Medical Coding Rules",
        }
      ]
    };
  }

  // convenience getter for easy access to form fields
  get getEmail() {
    return this.subscriptonForm.get('email');
  }


  onSubmit() {
    if (this.subscriptonForm.invalid) {
      return;
    }
    this.subscription.email = this.getEmail?.value;
    this.subscriptionService.addNewSubscription(this.subscription).subscribe(value => {
      this.alertService.success("Add success");

    },
      error => {
        this.alertService.error("Errorr");

      });
         // reset alerts on submit
         setTimeout(() => {
          this.alertService.clear();
        }, 1000);
  }

}
