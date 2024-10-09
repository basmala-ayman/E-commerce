import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Service/product.service';
import { Product } from '../../interfaces/product';
import { CartService } from '../../Service/cart.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-all-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.scss',
})
export class AllProductsComponent implements OnInit {
  allProducts: Product[] = [];
  ngOnInit() {
    this.allProducts = ProductService.getProducts();
  }

  calcDiscount(price: number, discount: number): number {
    return price - price * (discount / 100);
  }

  constructor(private cartService: CartService) {}

  addOne(product: Product): void {
    this.cartService.addToCart(product);
  }
}
