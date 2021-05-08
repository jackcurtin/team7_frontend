import { Component, OnInit } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  role: string;
  experience: string;
  location: string;
  gender: string;
  contractor: string;
  poc: boolean;

  constructor(private http: HttpClientModule) { }

  ngOnInit(): void {
  }

  inputFormFields(role, exp, loc, gender, contr, poc): void {
    console.log(`submitted ${role} ${exp} ${loc}
    ${gender} ${contr} ${poc}`);
  }

}
