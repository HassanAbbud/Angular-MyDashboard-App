import { Component, OnDestroy, signal } from '@angular/core';
import { ProductCardComponent } from './ui/product-card/product-card.component';
import { Product } from '../../interfaces/product.interface';
import { CommonModule } from '@angular/common';
import { interval, take, tap } from 'rxjs';

@Component({
  selector: 'app-inputs-outputs',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './inputs-outputs.component.html',
})
export class InputsOutputsComponent implements OnDestroy{

  public products = signal<Product[]>([
    {
      id: 1,
      name: 'Product 1',
      quantity: 0,
    },
    {
      id: 2,
      name: 'Product 2',
      quantity: 0,
    },
  ]);

  private intervalSubscription = interval(1000)
    .pipe(
      tap(() => {
        this.products.update((myProducts) => [
        ...myProducts,
        {
          id: myProducts.length + 1,
          name: `Product ${myProducts.length + 1 }`,
          quantity: 0,
        }])
      }),
      take(5),
    )
    .subscribe((val) => console.log(val));

    ngOnDestroy(): void {
      this.intervalSubscription.unsubscribe();
    }

    public updateProduct(product: Product, quantity: number) {
      this.products.update((products) =>
        products.map((p) => (p.id === product.id ? { ...p, quantity } : p))
      );
    }
}
