import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../services/get-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-data',
  templateUrl: './single-data.component.html',
  styleUrls: ['./single-data.component.scss']
})
export class SingleDataComponent implements OnInit {
data:any
id
  constructor(public getDataService:GetDataService,public route:ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get("id")
    console.log(this.id)
  }

  ngOnInit(): void {
    this.getDataService.getSingleData(this.id).subscribe(res=>{
      this.data = res
      console.log("Single Data",this.data)
    })

  }

}
