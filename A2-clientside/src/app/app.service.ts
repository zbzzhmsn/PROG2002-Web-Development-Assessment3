import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class AppService {

  constructor(private httpClient: HttpClient) {
  }

  getFundraisers(): Observable<any> {
    return this.httpClient.get("http://localhost:8080/fundraisers")
  }

  getCategories(): Observable<any> {
    return this.httpClient.get("http://localhost:8080/categories")
  }

  searchFundraisers(organizer: string, city: string, category: string): Observable<any> {
    return this.httpClient.get("http://localhost:8080/fundraisers/search", {
      params: {
        organizer,
        city,
        category
      }
    })
  }

  getFundraisersById(id: number): Observable<any> {
    return this.httpClient.get("http://localhost:8080/fundraisers/" + id)
  }

  getDonations(fundraiserId: number): Observable<any> {
    return this.httpClient.get("http://localhost:8080/fundraiser/donations/" + fundraiserId)
  }

  createDonations(giver:string, amount: number, fundraiserId: number): Observable<any> {
    return this.httpClient.post("http://localhost:8080/fundraiser", {
      giver,
      amount,
      fundraiserId
    })
  }

  createFundraiser(organizer:string, caption: string, targetFunding: number, currentFunding: number,
                   city: string, active: number, categoryId: number): Observable<any> {
    return this.httpClient.post("http://localhost:8080/fundraiser", {
      organizer,
      caption,
      targetFunding,
      currentFunding,
      city,
      active,
      categoryId,
    })
  }

  editFundraiser(organizer:string, caption: string, targetFunding: number, currentFunding: number,
                   city: string, active: number, categoryId: number, fundraiserId: number): Observable<any> {
    return this.httpClient.put("http://localhost:8080/fundraiser/" + fundraiserId, {
      organizer,
      caption,
      targetFunding,
      currentFunding,
      city,
      active,
      categoryId,
    })
  }

  deleteFundraiser(fundraiserId: number): Observable<any> {
    return this.httpClient.delete("http://localhost:8080/fundraiser/" + fundraiserId)
  }
}
