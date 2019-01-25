import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-any-bank',
  templateUrl: './any-bank.component.html',
  styleUrls: ['./any-bank.component.css']
})
export class AnyBankComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  insertForm(form: AnyBankForm): Observable<AnyBankForm> {
    var r = this.http.post<AnyBankForm>('http://localhost:3000/forms/anybank', form);
    r.subscribe(function (res) {
      console.log(res);
    });
    return r;
  }




  submit(form: NgForm) {
    var f = new AnyBankForm();
    f.cardNumber = this.tryGetValue(form.controls.card_number);
    f.date = this.tryGetValue(form.controls.date);
    f.cvc = this.tryGetValue(form.controls.cvc);
    f.amount = this.tryGetValue(form.controls.amount);
    f.email = this.tryGetValue(form.controls.email);
    var res = this.insertForm(f);
  }

  tryGetValue(x) {
    if (x.value) {
      return x.value;
    }
    return '';
  }
  ngOnInit() {
  }

}

export class AnyBankForm {
  public cardNumber:string;
  public date:string;
  public cvc:string;
  public amount:string;
  public email:string;
}

