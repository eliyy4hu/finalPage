import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-inet-bank',
  templateUrl: './inet-bank.component.html',
  styleUrls: ['./inet-bank.component.css']
})
export class InetBankComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  insertForm(form: InetBankForm): Observable<Blob> {
    var query = '?';
    for (let k in form) {
      query += k + '=' + form[k] + '&';
    }
    query = query.substring(0, query.length - 1);



    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/pdf');
    let url = 'http://localhost:3000/forms/inetbank' + query;
    var r = this.http.get(url, {
      headers: headers,
      responseType: 'blob'
    });
    r.subscribe(response => InetBankComponent.downloadFile(response, 'application/pdf'));
    return r;


  }

  static downloadFile(data: any, mimeType: string) {
    const blob = new Blob([data], {type: mimeType});
    const url = window.URL.createObjectURL(blob);
    const pwa = window.open(url);
    if (!pwa || pwa.closed || typeof pwa.closed == 'undefined') {
      alert('Please disable your Pop-up blocker and try again.');
    }
  }


  ngOnInit() {
  }

  submit(form: NgForm) {
    var f = new InetBankForm();
    f.bik = this.tryGetValue(form.controls.bik);
    f.inn = this.tryGetValue(form.controls.inn);
    f.sum = this.tryGetValue(form.controls.sum);
    f.nds = this.tryGetValue(form.controls.nds);
    f.dest = this.tryGetValue(form.controls.dest);
    f.number = this.tryGetValue(form.controls.num);
    // console.log(f);

    this.insertForm(f);

  }

  tryGetValue(x) {
    if (x.value) {
      return x.value;
    }
    return '';
  }


}

export class InetBankForm {
  public constructor() {

  }

  public inn: string;
  public bik: string;
  public number: string;
  public dest: string;
  public nds: string;
  public sum: number;


}

