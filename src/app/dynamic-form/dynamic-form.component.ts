import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  @Input() config: any = {};
  form!: FormGroup;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    let group: { [key: string]: FormControl } = {};
    if (this.config.fields) {
      this.config.fields.forEach((field: any) => {
        group[field.name] = new FormControl('');
      });
      this.form = new FormGroup(group);
    }
  }

  onSubmit() {
    if (this.config.endpoint) {
      this.http.post(this.config.endpoint, this.form.value).subscribe(response => {
        console.log('Formulário enviado com sucesso!', response);
      }, error => {
        console.error('Erro ao enviar o formulário', error);
      });
    }
  }
}
