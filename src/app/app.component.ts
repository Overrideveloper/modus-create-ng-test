import { Component, Inject } from "@angular/core";
import { ProductService } from "./shared/services/product.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [],
})
export class AppComponent {
  constructor(@Inject(ProductService) private productService: ProductService) {
    this.productService.getFirstFiveProductsInStore().subscribe(
      res => console.log(res[0]),
    );
  }
}
