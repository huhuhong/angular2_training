import { Routes } from '@angular/router';
import { PageProductsComponent } from './page-products';
import { PageProductDetailComponent } from './page-product-detail';

export const appRoutes: Routes =[
    {
        path: 'products',
        component: PageProductsComponent
    },
    {
        path: 'products/:id',
        component: PageProductDetailComponent
    },
    {
        path: '',
        redirectTo:'/products',
        pathMatch:'full'
    }
        
]