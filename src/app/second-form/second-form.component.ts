import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-second-form',
  templateUrl: './second-form.component.html',
  styleUrls: ['./second-form.component.css'],
})
export class SecondFormComponent implements OnInit {
  @Input() formGroupName: string;
  form: FormGroup;

  constructor(private rootFormGroup: FormGroupDirective) {}

  ngOnInit() {
    console.log(this.formGroupName);
    this.form = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;
  }
}
