import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-charlie',
  templateUrl: './charlie.component.html',
  styleUrls: ['./charlie.component.css']
})
export class CharlieComponent implements OnInit {

  asdf:any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService:HttpService,
    private _http:HttpClient
  ) { }
  ngOnInit() {
    this.asdf = {};
    this.grabData()
  }
  grabData():void{
    var self = this;
    let observable = this._http.get('http://api.openweathermap.org/data/2.5/weather?id=4462896&APPID=07db1b6ccfad430611ab78e6358096ae')
    observable.subscribe(function(data){
      self.asdf = data;
      self.asdf.main.temp = Math.trunc((self.asdf.main.temp - 273.15) * (9/5) + 32)
      self.asdf.main.temp_min = Math.trunc((self.asdf.main.temp_min - 273.15) * (9/5) + 32)
      self.asdf.main.temp_max = Math.trunc((self.asdf.main.temp_max - 273.15) * (9/5) + 32)
    })
  }
}
