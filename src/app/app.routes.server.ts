import { RenderMode, ServerRoute } from '@angular/ssr';

// https://angular.dev/guide/routing/rendering-strategies
export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'legal-notice',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'cookie-policy',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'privacy-policy',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'dashboard/operation-receipt/:id',
    renderMode: RenderMode.Client
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  },
];
