import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputValue: string = '';
  inputDate: any = '';
  inputCurrency: string = '';
  onChange(value: string) {
    this.inputValue = value;
  }
  onChangeDate(value: any) {
    this.inputDate = value;
  }
  onChangeCurrency(value: string) {
    this.inputCurrency = value;
  }
}
