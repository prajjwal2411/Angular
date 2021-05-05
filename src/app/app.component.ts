import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent {
  title = 'Employee';

  ngOnInit(): void {};

  constructor() {};

  empName: String;
  empNum: Number;

  public listOfEmployees = [{id: 1,Name: "Prajjwal", Code: 234},{id: 2,Name: "Sam", Code: 123}]


  register(empName, empNum)
  {
    var something = 1;
    this.listOfEmployees.push({id: something++, Name:empName, Code:parseInt(empNum)});
    //console.log(this.listOfEmployees);
  }

  remove(index)
  {
    this.listOfEmployees.splice(index, 1);
  }

}