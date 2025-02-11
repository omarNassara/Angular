import { Component, OnInit } from '@angular/core';
import { MoviesService } from './../movies.service';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private _MoviesService: MoviesService) {}

  term: string = '';
  trendingMovies: any[] = [];
  trendingTv: any[] = [];

  ngOnInit() {
    this._MoviesService.getTrendine('movie').subscribe({
      next: (data) => this.trendingMovies = data.results.slice(0, 10)
    });

    this._MoviesService.getTrendine('tv').subscribe({
      next: (data) => this.trendingTv = data.results.slice(0, 10)
    });
  }
}
