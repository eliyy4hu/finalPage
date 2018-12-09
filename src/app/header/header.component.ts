import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public person: Person;

  constructor() {
    this.person = new Person();

  }

  ngOnInit() {
  }

}

export class Person {
  public name: string;
  public surname: string;
  public middleName: string;
  public phone: string;
  public site: string;
  public mail: string;


  constructor() {
    this.name = 'Василий';
    this.surname = '';
    this.middleName = 'Васильевич';
    this.phone = '55534575';
    this.site = 'helloworld.su';
    this.mail = 'helloworlddeveloper@gmail.com';


  }
}

