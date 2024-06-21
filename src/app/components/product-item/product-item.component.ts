import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IProducts} from "../../interfaces/products.interface";
import {ProductsServiceService} from "../../services/products-service.service";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent implements OnInit{
  @Input()
  public product: IProducts | undefined = undefined

  @Output()
  public productID: EventEmitter<number> = new EventEmitter<number>()

  public cantidad: number = 0;

  constructor(private productsService: ProductsServiceService) {
  }

  selectSingleProduct(id: number): void {
  this.productID.emit(id)
  }

  increment(){
    this.cantidad++
    this.saveToLocalStorage()
  }

  decrement(){
    if(this.cantidad <=0 ) return
    this.cantidad--
    this.saveToLocalStorage()
  }


  saveToLocalStorage(): void {
    if(!this.product) return
    localStorage.setItem(`product-${this.product.id}-quantity`, this.cantidad.toString())
  }

  ngOnInit(): void {
    if(!this.product) return
    const savedQuantity = localStorage.getItem(`product-${this.product.id}-quantity`)
    if(savedQuantity) {
      this.cantidad = +savedQuantity
    }
  }
}
