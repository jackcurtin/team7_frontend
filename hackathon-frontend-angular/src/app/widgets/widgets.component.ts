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
  diversityPercent: number;

  constructor(private http: HttpClient, private widgetsService: WidgetsService) { }

  ngOnInit(): void {
    this.http.get<Resource>('http://localhost:9092/api/resources')
      .subscribe(response => {
        this.allResources = [];
        this.responseHold = response;
        this.responseHold.forEach(resource => {
          this.allResources.push(resource);
        });
        this.roleRatio = this.widgetsService.getRoleRatio(this.allResources);
        this.diversityPercent = Math.floor(this.widgetsService.getDiversity(this.allResources) * 100);
      });
  }
}
