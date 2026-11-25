import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { urlRoutes } from '../../app.routes';
import { isLocale } from '../../contracts/common/locale';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  // ViewChild necesita siempre #mobile_menu y no la id en el html para funcionar
  @ViewChild("mobile_menu") menu!: ElementRef<HTMLElement>;
  @ViewChild("side_menu") checkmenu!: ElementRef<HTMLInputElement>;
  private platformId = inject(PLATFORM_ID) // Allows to know if we are using browser or server

  constructor(){}

  public close_mobile_menu(){
    // https://stackoverflow.com/questions/45699783/how-to-programmatically-set-or-reset-checkbox
    // Uncheck the label, making scrolling available again
    this.checkmenu.nativeElement.checked = false
    // PROBLEM:
    // It checks the input but side menu cannot be open once a menu item is clicked
    // Checkbox can be checked, but side menu does not work
  }

  // MUST OBTAIN TRANSLATED URL FROM $localize
  // https://intlpull.com/es/blog/angular-i18n-complete-guide-2026#step-10-language-switcher
  public change_language(target_language: string){
    // Get actual locale from localStorage. Default is 'en'
    const locale = localStorage.getItem("locale") ?? '' // The locale in localStorage
    const actual_locale = isLocale(locale) ? locale : 'en'
    const actual_target_locale = isLocale(target_language) ? target_language : 'en'

    // Only do something when locale selected is different from the one in localStorage and is an allowed value
    if (actual_locale != actual_target_locale){
      // Must use isPlatformBrowser since we have SSR activated in this page
      if(isPlatformBrowser(this.platformId)){
        localStorage.setItem("locale", target_language)
        let currentPath
        // In development environment we can use only one locale according to angular docs. There is no localhost/en/
        if(environment.env == "development") {
          currentPath = window.location.pathname; // current path with no domain but has '/'
        } else {
          const fullPath = window.location.pathname;
          // If it is '', we are in home page. Add '/' because using split('/en/') deletes '/' from path. We need use both '/' in '/en/' because
          // this way there is no other way to mistake for other string
          currentPath = fullPath.split(`/${actual_locale}/`)[1] === "" ? '/' : '/' + fullPath.split(`/${actual_locale}/`)[1]
        }
        const path_in_Array = urlRoutes.find(urlRoute => urlRoute[actual_locale] === currentPath) // Finds route object by current path in browser
        if(path_in_Array != undefined) {
          const targetPath = path_in_Array[actual_target_locale]
          // Change path in browser
          window.location.href = `/${actual_target_locale}${targetPath}`;
        }
      }

    }

  }
}
