import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

@Injectable({ providedIn: 'root' })
export class ProductService {
  private readonly apiUrl = environment.apiURL;

  constructor(@Inject(HttpClient) private readonly http: HttpClient) {}

  public getFirstFiveProductsInStore(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
