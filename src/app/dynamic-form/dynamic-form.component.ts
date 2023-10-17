import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  @Input() fields: any[] = [];
  form!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    let group: { [key: string]: FormControl } = {};  // Especifique o tipo aqui
    this.fields.forEach(field => {
      group[field.name] = new FormControl('');
    });
    this.form = new FormGroup(group);
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
