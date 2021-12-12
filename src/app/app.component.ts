import { Component, VERSION } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  myform: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myform = this.fb.group({
      firstForm: this.fb.group({
        nome: ['', Validators.required],
        cognome: ['', Validators.required],
        email: ['', Validators.required],
        eta: ['', Validators.required],
      }),
      secondForm: this.fb.group({
        strada: ['', Validators.required],
        numero: ['', Validators.required],
        codicePostale: ['', Validators.required],
      }),
    });
  }

  onSubmit() {
    console.log(this.myform);
    console.log(this.myform.get('firstForm.nome').value);
    alert('Ciao ' + this.myform.get('firstForm.nome').value);
  }
}
