import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  protected baseURL: string = "http://localhost:81/api"

  constructor(
    private http: HttpClient,
  ) {
  }

  private static getRequest(data) {

    let headers = {};

    return {
      params: data.params ? data.params : {},
      headers: Object.assign(headers, data.headers ? data.headers : {}),
    };
  }

  public get(url, data) {
    return new Observable((observer) => {
      const sub = this.http.get(
        this.baseURL + url,
        ApiService.getRequest(data)
      ).subscribe((r) => {

        observer.next(r);
        observer.complete();

      }, (e) => {
        observer.error(e);
        observer.complete();
      });

      return {
        unsubscribe() {
          sub.unsubscribe();
        }
      };
    })
  }

  public post(url, data) {
    console.log(this.baseURL + url);
    return new Observable((observer) => {

      const sub = this.http.post(
        this.baseURL + url,
        data.body ? data.body : {},
        ApiService.getRequest(data)
      ).subscribe((r) => {

        observer.next(r);
        observer.complete();

      }, (e) => {

        observer.error(e);

        observer.complete();

      });

      return {
        unsubscribe() {
          sub.unsubscribe();
        }
      };
    });
  }

  public put(url, data) {
    return new Observable((observer) => {

      const sub = this.http.put(
        this.baseURL + url,
        data.body ? data.body : {},

        ApiService.getRequest(data)
      ).subscribe((r) => {

        observer.next(r);
        observer.complete();

      }, (e) => {

        observer.error(e);

        observer.complete();

      });
      return {
        unsubscribe() {
          sub.unsubscribe();
        }
      };
    });
  }

  public delete(url, data) {
    return new Observable((observer) => {

      const sub = this.http.delete(
        this.baseURL + url,
        ApiService.getRequest(data)
      ).subscribe((r) => {
        observer.next(r);
        observer.complete();
      }, (e) => {

        observer.error(e);
        observer.complete();

      });

      return {
        unsubscribe() {
          sub.unsubscribe();
        }
      };
    });
  }
}
