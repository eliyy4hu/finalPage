import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Person} from '../header/header.component';

@Component({
  selector: 'app-my-server',
  templateUrl: './my-server.component.html',
  styleUrls: ['./my-server.component.css']
})
export class MyServerComponent implements OnInit {

  constructor(private readonly http: HttpClient) {
  }


  ngOnInit() {
    this.http.get<Person[]>('localhost:5000/users').subscribe(function (rensponse) {

    })

  }

}
