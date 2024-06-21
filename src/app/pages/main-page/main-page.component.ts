import {Component, OnInit, signal} from '@angular/core';
import {ProductsServiceService} from "../../services/products-service.service";
import {IProducts} from "../../interfaces/products.interface";
import {MatDialog} from "@angular/material/dialog";
import {ModalComponent} from "../../components/modal/modal.component";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent implements OnInit {
  public products: IProducts[] = []

public product: any = undefined

  constructor( private productsService: ProductsServiceService, public dialog: MatDialog) {
  }

  fetchProductsData(){
    this.productsService.getAllProducts().subscribe( data => {
      this.products = data;
      console.log(this.products)
      }
    )
  }

  singleProductID(id: number){
    this.getSingleProductInfo(id)
    this.openDialog()
  }

  openDialog(): void {
    if(!this.product) return
    this.dialog.open(ModalComponent, {
      width: '400px',
      data: {
        product: this.product
      }
    })
  }

  ngOnInit(): void {
    this.fetchProductsData()
  }


  getSingleProductInfo(id: number){
    this.productsService.getSingleProduct(id).subscribe( data => {
      this.product = data
    })
  }
}
