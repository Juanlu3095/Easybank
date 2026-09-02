import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Apiresponse } from '../../contracts/common/apiresponse';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OperationReceiptService {
  private httpClient = inject(HttpClient);
  private apiEndpoint = environment.apiEndPoint;

  // https://stackoverflow.com/questions/50260391/open-pdf-from-bytes-array-in-angular-5
  public getOperationReceiptPdf(id: string){
    const httpOptions = {
      //'responseType'  : 'arraybuffer' as 'json'
       'responseType'  : 'blob' as 'json'        //This also worked
    };

    return this.httpClient.get<Apiresponse<string>>(`${this.apiEndpoint}/api/operationreceipt/${id}`);
  }
}
