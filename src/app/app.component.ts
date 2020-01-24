import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = '';
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;

  onButtonClick() {
    console.log(`
      About to generate a password with the following:
      Include Letters ${this.includeLetters}
      Include Numbers ${this.includeNumbers}
      Include Symbols ${this.includeSymbols}
    `);
    console.log(this.includeLetters);
    this.password = 'MY PASSWORD';
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }
}
