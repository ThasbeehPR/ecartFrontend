import { Component, OnInit } from '@angular/core';
import { ApiService } from '../products/services/api.service';
import { count } from 'rxjs';

@Component({
  selector: 'app-headeer',
  templateUrl: './headeer.component.html',
  styleUrls: ['./headeer.component.css']
})
export class HeadeerComponent implements OnInit{

  totalItemCount:number=0
  constructor(private api:ApiService){


  }

  ngOnInit(): void {
    this.api.cartItemsCount.subscribe(
      (count:any)=>{
        this.totalItemCount=count
      }
    )
  }


  search(event:any){
    //assign value to behaivour subject
    this.api.searchTearm.next(event.target.value)
  }


}
