import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-people',
  standalone: false,
  
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit{

  constructor(private _MoviesService:MoviesService){}
  term:string = '';
  trendingPeople:any[] = [];

  ngOnInit(): void {
    this._MoviesService.getTrendine('person').subscribe({
      next:(data)=> this.trendingPeople = data.results.filter((item:any)=> item.profile_path !== null)
    })
  }

}
