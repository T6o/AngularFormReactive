import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-first-form',
  templateUrl: './first-form.component.html',
  styleUrls: ['./first-form.component.css'],
})
export class FirstFormComponent implements OnInit {
  @Input() formGroupName: string;
  @Input() formName: string;
  form: FormGroup;

  constructor(private rootFormGroup: FormGroupDirective) {}

  ngOnInit() {
    this.form = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;

    this.form.get('nome').valueChanges.subscribe((nome) => {
      console.log('Nome Cambiato ' + nome);
    });
  }
}
