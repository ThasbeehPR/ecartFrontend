import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { count } from 'rxjs';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  

  allproducts:any=[]
  searchkey:string=''
    constructor(private api:ApiService){

    }

    ngOnInit():void{
      //make api call to get all-products
      this.api.getAllProducts().subscribe(
        (result:any)=>{
          console.log(result);
          this.allproducts=result
          
        },
        (result:any)=>{
          console.log(result.error); 
        }
      )

        //get behaviour subject from api service
        this.api.searchTearm.subscribe((result:any)=>{
          console.log(result);
          this.searchkey = result
          
        })


    }

    //add to cart(product)
    addtoCart(product:any){
      //add quantity key to product object
      Object.assign(product,{quantity:1})
      console.log(product);

      //call api
      this.api.addToCart(product)
      .subscribe(
      (result:any)=>{
        //call method to get cart count
        this.api.cartCount()
        alert(result)
      },
      (result:any)=>{
        alert(result.error)
      }
      
      )
      
    }


}
