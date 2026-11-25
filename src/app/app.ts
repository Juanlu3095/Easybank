import { isPlatformBrowser } from '@angular/common';
import { Component, inject, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { allowed_locales, isLocale } from './contracts/common/locale';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  protected readonly title = signal('Easybank');
  private platformId = inject(PLATFORM_ID) // Allows to know if we are using browser or server

  // OnInit in AppComponent only loads once since this component is still on even when changing views
  // https://docs.angular.lat/guide/components/lifecycle
  ngOnInit(): void {
    this.loadLocale()
  }

  // Sets default locale if value is incorrect
  loadLocale(){
    if(isPlatformBrowser(this.platformId)){
      const locale = localStorage.getItem("locale")
      // If locale is null or has a value not allowed, locale is default language. In this case english
      if(locale == null || !isLocale(locale)) {
        localStorage.setItem("locale", "en")
      }
    }
  }
}
