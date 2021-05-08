import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Resource} from '../resource';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit {
  responseHold: any;
  allResources: any;
  roleRatio: string;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    console.log('widgets firing');
    this.http.get<Resource>('http://localhost:9092/api/resources')
      .subscribe(response => {
        this.allResources = [];
        this.responseHold = response;
        console.log(this.responseHold);
        this.responseHold.forEach(resource => {
          this.allResources.push(resource);
        });
        this.getRoleRatio();
      });
  }

  getRoleRatio(): void{
    let engineers = 0;
    let uX = 0;
    let pM = 0;

    console.log(this.allResources);

    this.allResources.forEach(resource => {
      if (resource.role === 'Engr'){
        engineers++;
      } else if (resource.role === 'UX'){
        uX++;
      } else if (resource.role === 'PM'){
        pM++;
      }
      this.roleRatio = `${engineers} : ${uX} : ${pM}`;
    });
  }

}
