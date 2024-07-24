import { Component, EventEmitter, input, output } from '@angular/core';
import { Product } from '../../../../interfaces/product.interface';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styles: ``
})
export class ProductCardComponent {
  // @Input()
  // public productId: Product = 0;
  public product = input.required<Product>();

  public onIncrementQuantity = output<number>();

  public incrementQuantity (){
    this.onIncrementQuantity.emit(this.product().quantity + 1);
  }
}
