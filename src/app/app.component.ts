import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  config: any = {};

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getFormFields().subscribe(data => {
      this.config = data;
    });
  }
}
