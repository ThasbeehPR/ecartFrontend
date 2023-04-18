import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // BASE_URL = 'http://localhost:3000'
  
  //deployed node server -https://ecart-if5u.onrender.com/
  BASE_URL ='https://ecart-if5u.onrender.com'



  constructor(private http:HttpClient) { 
    this.cartCount()
  }

  //to hold search terms as behaviour
  searchTearm = new BehaviorSubject('')
  //to hold cart total count
  cartItemsCount = new BehaviorSubject('')

  
  //get all products api
  getAllProducts(){
    //call api
    return this.http.get(`${this.BASE_URL}/products/get-all-products`)
  }

  //View product deatail api
  viewProduct(id:any){
    //call api
    return this.http.get(`${this.BASE_URL}/products/${id}`)
  }

  ///products/add-to-wishlist           //this is the request that equalent postman request
  addtowishlist(product:any){
    const body={
      id:product.id,
      title:product.title,
      price:product.price,
      image:product.image
    }
    //api call
    return this.http.post(`${this.BASE_URL}/products/add-to-wishlist`,body)
    }
    
    //get all items from wishlist
    getWishlistItems(){
      //api call
      return this.http.get(`${this.BASE_URL}/wishlist/get-all-items`)
    }
    //removing an item from wishlist
    removeWishlistItem(id:any){
      //api call
      return this.http.delete(`${this.BASE_URL}/wishlist/remove-item/${id}`)
    }

    //add to cart
    addToCart(product:any){
      const body = {
        id:product.id,
        title:product.title,
        price:product.price,
        image:product.image,
        quantity:product.quantity
      }
      //api call
      return this.http.post(`${this.BASE_URL}/products/add-to-cart`,body)
    }


    //getcart
    getCart(){
      //api call
      return this.http.get(`${this.BASE_URL}/cart/get-all-items`)
    }

    //cartCount
    cartCount(){
      this.getCart().subscribe(
        (result:any)=>{
          this.cartItemsCount.next(result.length)
        }
      )
    }

    //remove cart item api
    removeCartItem(id:any){
      //api call
      return this.http.delete(`${this.BASE_URL}/cart/item/${id}`)
     
    }

    //increment cart item
    incrCartItem(id:any){
      return this.http.get(`${this.BASE_URL}/cart/increment-item/${id}`)

    }

    //decrement cart item
    deCartItem(id:any){
      return this.http.get(`${this.BASE_URL}/cart/decrement-item/${id}`)

    }


    //empty cart
    emptyCart(){
      return this.http.delete(`${this.BASE_URL}/cart/empty-cart`)

    }

}
