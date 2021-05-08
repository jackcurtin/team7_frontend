import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Resource} from '../resource';
import {WidgetsService} from './widgets.service';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit {
  responseHold: any;
  allResources: any;
  roleRatio: string;

  constructor(private http: HttpClient, private widgetsService: WidgetsService) { }

  ngOnInit(): void {
    this.http.get<Resource>('http://localhost:9092/api/resources')
      .subscribe(response => {
        this.allResources = [];
        this.responseHold = response;
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

    this.allResources.forEach(resource => {
      if (resource.role === 'Engr'){
        engineers++;
      } else if (resource.role === 'UX'){
        uX++;
      } else if (resource.role === 'PM'){
        pM++;
      }
    });
    let gcd = this.widgetsService.gcd_more_than_two_numbers([engineers, uX, pM]);
    console.log(gcd);
    this.roleRatio = `${engineers / gcd} : ${uX / gcd} : ${pM / gcd}`;
  }

}
