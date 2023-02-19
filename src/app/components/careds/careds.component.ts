import { Component, Input } from '@angular/core';
import { About } from 'src/app/models/about';
import { Item } from '../../models/item';

@Component({
  selector: 'app-careds',
  templateUrl: './careds.component.html',
  styleUrls: ['./careds.component.css']
})
export class CaredsComponent {
  @Input() about?: About;
}
