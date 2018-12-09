import {Component, Input, OnInit} from '@angular/core';

export class AnyBankForm {

  constructor(public email: string) {
  }

  public ValidateEmail() {
    if (this.email === 'abc') {
      this.email = '';
    }
  }
}

@Component({
  selector: 'app-any-bank',
  templateUrl: './any-bank.component.html',
  styleUrls: ['./any-bank.component.css']
})
export class AnyBankComponent implements OnInit {
  @Input() public form: AnyBankForm;

  constructor() {
    this.form = new AnyBankForm('');
  }

  ngOnInit() {
  }

}


