import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OperationReceiptService } from '../../../../services/api/operation-receipt.service';
import { Apiresponse } from '../../../../contracts/common/apiresponse';

@Component({
  selector: 'app-operation-receipt-pdf',
  imports: [],
  templateUrl: './operation-receipt-pdf.html',
  styleUrl: './operation-receipt-pdf.css',
})
export class OperationReceiptPdf implements OnInit{

  idOperation = "";
  @ViewChild('pdf') pdf!: ElementRef;

  constructor(
    private operationReceiptService: OperationReceiptService,
    private activatedRoute: ActivatedRoute,
  ){}

  ngOnInit(): void {
    this.idOperation = this.activatedRoute.snapshot.params['id'];
    this.getOperationReceiptWithPdf(this.idOperation);
  }

  // https://stackoverflow.com/questions/55904420/how-to-convert-string-base64-to-pdf-in-angular-7
  public getOperationReceiptWithPdf(idOperation: string){
    this.operationReceiptService.getOperationReceiptPdf(idOperation).subscribe({
      next: (response: Apiresponse<string>) => {
        const byteArray = new Uint8Array(atob(response.data).split('').map(char => char.charCodeAt(0)));
        const blob = new Blob([byteArray], {type: 'application/pdf'});
        // Here is your URL you can use
        const url = window.URL.createObjectURL(blob);

        // i.e. display the PDF content via iframe
        let pdfFrame = this.pdf.nativeElement;
        pdfFrame.src = url;
      },
      error: (error) => {
        console.error(error)
      }
    })
  }

}
