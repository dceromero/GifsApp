import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/search-response.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _tagsHistory: string[] = [];

  public gifList: Gif[] = [];

  private apiKey: string = 'rnIIGvU6sBqElw2c4jNdcnXtIhf565Qg';
  private serviceUrl: string = 'http://api.giphy.com/v1/gifs';

  constructor(private http: HttpClient) { 
    this.loadLocalStorage();
  }

  get tagsHistory(): string[] {
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string): void {
    tag = tag.toLowerCase();
    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter(x => x !== tag);
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0, 10);
    this.saveLocalStorage();
  }

  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }

  private loadLocalStorage():void{
    if(!localStorage.getItem('history')) return
    this._tagsHistory = JSON.parse(localStorage.getItem('history')!);
    this.searchTag(this._tagsHistory[0]);
  }

  async searchTag(tag: string): Promise<void> {
    if (tag.length === 0) return
    this.organizeHistory(tag);
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('q', tag)
      .set('limit', 10)

    this.http.get<SearchResponse>(`${this.serviceUrl}/search`, { params }).subscribe(
      (resp) => {
        this.gifList = resp.data;
      }
    );
  }

  deleteItemByIdx(idx: number) {
    this._tagsHistory.splice(idx, 1);
  }
}
