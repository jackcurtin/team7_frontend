import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

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
  poc = false;

  returnedResources: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  inputFormFields(role, exp, loc, gender, contr, poc): void {
    this.http.get<Resource>('http://localhost:9092/api/resources')
      .subscribe(response => {
        this.returnedResources = response;
        this.returnedResources.forEach(resource => {
          console.log(resource);
        });
      });
    // console.log(`submitted ${role} ${exp} ${loc}
    // ${gender} ${contr} ${poc}`);
  }
}

export interface Resource{
  name;
  startDate;
  role;
  roleLevel;
  vendor;
  product;
  productStartDate;
  productEndDate;
  resourceProductStartDate;
  productBuildLocation;
  anchor;
  workIntakeScoping;
  interviewer;
  securityMaven;
  accessibility;
  devSecOps;
  educationTrack;
  location;
  gender;
  availableForOtherAreas;
  skill1;
  skill2;
  skill3;
  skill4;
  skill5;
  contractor;
  personOfColor;
  resourceProductEndDate;
}
