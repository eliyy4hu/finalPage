import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-admin-component',
  templateUrl: './admin-component.component.html',
  styleUrls: ['./admin-component.component.css']
})
export class AdminComponentComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    let url = 'http://localhost:3000/forms/admin';
    this.http.get(url).subscribe(response => this.func(response));
  }

  func(resp){
    console.log(resp)
  }

}
