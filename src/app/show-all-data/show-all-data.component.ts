import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../services/get-data.service';

@Component({
  selector: 'app-show-all-data',
  templateUrl: './show-all-data.component.html',
  styleUrls: ['./show-all-data.component.scss']
})
export class ShowAllDataComponent implements OnInit {
allData = []
  constructor(public getDataService:GetDataService) { }

  ngOnInit(): void {
    this.getDataService.getAllData().subscribe(res=>{
      this.allData = res
      console.log("allData",this.allData)
    })
  }

}
