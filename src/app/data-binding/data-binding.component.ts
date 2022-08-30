import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {
  title: string = "One way data binding";
  oneway:string = "one way";
  twoway: string = "two way";

  constructor() { }

  ngOnInit() {
  }

}
