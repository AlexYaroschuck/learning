import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],


})
export class AppComponent implements OnInit {
  form: FormGroup;

  person = {
    fistName: 'Alex',
    lastName: 'Y',
    age: 21
  };

  public props = [];

  ngOnInit(): void {
    const formProps = {};

    for (const p of Object.keys(this.person)) {
      formProps[p] = new FormControl(this.person[p]);
      this.props.push(p);
    }

    this.form = new FormGroup(formProps);
  }
}
