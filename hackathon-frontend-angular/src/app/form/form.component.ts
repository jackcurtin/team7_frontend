import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Resource} from '../resource';

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
  filteredResources: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  inputFormFields(role, exp, loc, gender, contr, poc): void {
    this.http.get<Resource>('http://localhost:9092/api/resources')
      .subscribe(response => {
        this.filteredResources = [];
        this.returnedResources = response;
        this.returnedResources.forEach(resource => {
          if ((resource.role === role || !role)
            && (resource.roleLevel === exp || !exp)
          && (resource.location === loc || !loc)
            && (resource.gender === gender || !gender)
          && (resource.contractor === contr || !contr)
          && (resource.personOfColor === poc || !poc)) {
            // console.log(resource);
            this.filteredResources.push(resource);
          }
        });
      });
  }
}

// export interface Resource{
//   name;
//   startDate;
//   role;
//   roleLevel;
//   vendor;
//   product;
//   productStartDate;
//   productEndDate;
//   resourceProductStartDate;
//   productBuildLocation;
//   anchor;
//   workIntakeScoping;
//   interviewer;
//   securityMaven;
//   accessibility;
//   devSecOps;
//   educationTrack;
//   location;
//   gender;
//   availableForOtherAreas;
//   skill1;
//   skill2;
//   skill3;
//   skill4;
//   skill5;
//   contractor;
//   personOfColor;
//   resourceProductEndDate;
// }
