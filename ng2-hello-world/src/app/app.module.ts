import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'
import 'rxjs/Rx';
//component
//import { HelloWorldComponent  } from './hello-world';
import { PageProductsComponent } from './page-products';
import { PageProductDetailComponent } from './page-product-detail';
import { ProductService } from './shared/services';
import { AppComponent } from './app.component';

//routing
import { appRoutes } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    //HelloWorldComponent
    PageProductsComponent,
    PageProductDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    {provide: ProductService, useClass: ProductService}
    //ProductService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
