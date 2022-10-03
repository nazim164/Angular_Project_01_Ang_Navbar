import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  position: number;
  surname: string;
  email: string;
  Contact: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Nazim', surname: 'Shaikh', email: 'nazim164@gmail.com', Contact: 1234567896 },
  { position: 2, name: 'Nadeem', surname: 'Shaikh', email: 'nadeem164@gmail.com', Contact: 7485965841 },
  { position: 3, name: 'Ashfaque', surname: 'Khan', email: 'ashfaque164@gmail.com', Contact: 8574962574 },
  { position: 4, name: 'Anshul', surname: 'Wagh', email: 'waghanshul123@gmail.com', Contact: 8877449955 },
  { position: 5, name: 'Sohail', surname: 'Khan', email: 'khansohail@gmail.com', Contact: 1568748525 },
  { position: 6, name: 'Aniket', surname: 'Gujjar', email: 'aniket7162@gmail.com', Contact: 9518967538 },
  { position: 7, name: 'Umair', surname: 'Ali', email: 'aliumair@gmai.com', Contact: 7387896421 },
  { position: 8, name: 'Junaid', surname: 'Ali', email: 'junaidali@gmail.com', Contact: 9764088550 },

];
@Component({
  selector: 'app-ta-ble',
  templateUrl: './ta-ble.component.html',
  styleUrls: ['./ta-ble.component.css']
})
export class TaBLEComponent implements OnInit {
  displayedColumns: string[] = ['demo-position', 'demo-name', 'demo-weight', 'demo-symbol'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
