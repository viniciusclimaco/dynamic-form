import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  formFields = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getFormFields().subscribe(data => {
      this.formFields = data;
    });
  }
}
