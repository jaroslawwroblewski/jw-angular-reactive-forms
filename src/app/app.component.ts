import { Component, VERSION } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor(private formBuilder: FormBuilder) {}

  public whisktForm = this.formBuilder.group({
    name: [''],
    age: [''] // jak typowac?
  })
}
