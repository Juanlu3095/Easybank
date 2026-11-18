import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home').then((m) => m.Home)
    },
    {
        path: $localize`:@@legalNotice-route:legal-notice`,
        loadComponent: () => import('./pages/legal-notice/legal-notice').then((m) => m.LegalNotice)
    },
    {
        path: $localize`:@@cookiePolicy-route:cookie-policy`,
        loadComponent: () => import('./pages/cookie-policy/cookie-policy').then((m) => m.CookiePolicy)
    },
    {
        path: $localize`:@@privacyPolicy-route:privacy-policy`,
        loadComponent: () => import('./pages/privacy-policy/privacy-policy').then((m) => m.PrivacyPolicy)
    },
    {
        path: $localize`:@@operationReceipt-route:dashboard/operation-receipt/:id`,
        loadComponent: () => import('./pages/dashboard/client/operation-receipt-pdf/operation-receipt-pdf').then((m) => m.OperationReceiptPdf)
    }
];
