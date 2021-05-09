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
            this.filteredResources.push(resource);
            // this.filteredResources = this.filteredResources.sort((a, b) => {
            //   let da: any = new Date(a.productEndDate);
            //   let db: any = new Date(b.productEndDate);
            //   return da - db;
            // });
          }
        });
      });
  }
}
