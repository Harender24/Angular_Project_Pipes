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
  inputMiles: number;
  onChange(value: string) {
    this.inputValue = value;
  }
  onChangeDate(value: any) {
    this.inputDate = value;
  }
  onChangeCurrency(value: string) {
    this.inputCurrency = value;
  }
  onChangeMiles(value: number) {
    this.inputMiles = value;
  }
}
