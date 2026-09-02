import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'dashboard/operation-receipt/:id',
        loadComponent: () => import('./pages/dashboard/client/operation-receipt-pdf/operation-receipt-pdf').then((m) => m.OperationReceiptPdf),
    }
];
