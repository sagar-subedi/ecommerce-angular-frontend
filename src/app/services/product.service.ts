import { Injectable } from '@angular/core';
import { Product } from '../components/product/product-detail/product.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProductById(productId: string): Observable<Product> {
    return of({
      id: 1,
      name: 'Apple',
      description: "Some random description",
      price: 200,
      imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-model-unselect-gallery-2-202309_GEO_US?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692925254305'
    })
  }

  constructor(private httpClient: HttpClient) {  }

  getAllProducts(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(
      environment.apiUrlBase+'product/getAll'
    );
  }
}
