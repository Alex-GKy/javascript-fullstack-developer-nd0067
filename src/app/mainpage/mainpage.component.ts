import {Component, OnInit} from '@angular/core';
import {DataService} from "../service/data.service";


@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  items: any[] = [];

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {

    this.dataService.getProducts().subscribe(data => {
      this.items = data;
    })
  }

}
