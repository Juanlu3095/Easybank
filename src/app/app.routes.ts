import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home').then((m) => m.Home)
    },
    {
        path: 'dashboard/operation-receipt/:id',
        loadComponent: () => import('./pages/dashboard/client/operation-receipt-pdf/operation-receipt-pdf').then((m) => m.OperationReceiptPdf)
    }
];
