import { RenderMode, ServerRoute } from '@angular/ssr';

// https://angular.dev/guide/routing/rendering-strategies
export const serverRoutes: ServerRoute[] = [

  {
    path: '',
    renderMode: RenderMode.Prerender
  },
  {
    path: $localize`:@@legalNotice-route:legal-notice`,
    renderMode: RenderMode.Prerender
  },
  {
    path: $localize`:@@cookiePolicy-route:cookie-policy`,
    renderMode: RenderMode.Prerender
  },
  {
    path: $localize`:@@privacyPolicy-route:privacy-policy`,
    renderMode: RenderMode.Prerender
  },
  {
    path: $localize`:@@operationReceipt-route:dashboard/operation-receipt/:id`,
    renderMode: RenderMode.Client
  }

];
