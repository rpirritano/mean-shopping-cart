import { Injectable } from '@angular/core';

import { Product } from '../entities/product.entity';

@Injectable()
export class ProductService {

    private products: Product[];

    constructor() {
        this.products = [
            { id: 'p01', name: 'watch', price: 75, photo: 'iwatch.png', category: 'Jewlery' },
            { id: 'p02', name: 'Television', price: 2000, photo: 'tv.jpg', category: 'Electronics' },
            { id: 'p03', name: 'Computer', price: 3000, photo: 'mac.png', category: 'Electronics' },
            { id: 'p04', name: 'Couch', price: 500, photo: 'couch.png', category: 'Furntature' },
            { id: 'p05', name: 'Bedding', price: 350, photo: 'bedding.jpg', category: 'Home Decore' },
            { id: 'p06', name: 'Blender', price: 30, photo: 'blender.png', category: 'Kitchenware' }
        ];
    }

    findAll(): Product[] {
        return this.products;
    }

    find(id: string): Product {
        return this.products[this.getSelectedIndex(id)];
    }

    private getSelectedIndex(id: string) {
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].id == id) {
                return i;
            }
        }
        return -1;
    }

}
