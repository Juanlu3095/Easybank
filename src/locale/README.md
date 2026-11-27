# Angular i18n Translation guide

This document is a guide to explain how to use the @angular/localize library:

## Instalation of the library

To add other languages you need first to install i18n package:

```bash
ng add @angular/localize
```

This package is an official library by Angular team, but you can use others from community like ngx-translate.

## Files

This folder has the following files with translations:

- messages.es.xlf -> For spanish translations

## How to point out text to translate

To create locale files, specific tags must be used to point out what to translate. For example to translate a text:

```html
<p i18n>
    Easybank - All rights reserved
</p>
```

This example only marks the text to translate, but it does not give an identificator, so Angular will create a random one. To avoid this:

```html
<p i18n="@@rights-footer">
    Easybank  - All rights reserved
</p>
```

As showed in the example, an "i18n" attribute must be used to translate text inside html tags. Also, html attributes can be translated:

```html
 <a href="tel:+34660524400" i18n-aria-label aria-label="Have a phone call with us">
    Tel: +34 660524400
</a>
```

To give an id for the i18n aria label attribute:

```html
<a href="tel:+34660524400" i18n-aria-label="@@phonecall-footer-aria-label" aria-label="Have a phone call with us">
    Tel: +34 660524400
</a>
```

You can also translate routes url in app.routes.ts using $localize:

```typescript
{
  path: $localize`:@@legalNotice-route:legal-notice`,
  loadComponent: () => import('./pages/legal-notice/legal-notice').then((m) => m.LegalNotice)
}
```

where "@@legalNotice" indicates the text id to translate and "legal-notice" is the actual url. You must do the same en app.routes.server.ts:

```typescript
{
  path: $localize`:@@legalNotice-route:legal-notice`,
  renderMode: RenderMode.Prerender
},
```

With this you can put the links in html like this:

```html
<a i18n i18n-routerLink routerLink="/legal-notice">
  Legal notice
</a>
```

And to put an id to that i18n tag:

```html
<a i18n i18n-routerLink="legal-notice-link" routerLink="/legal-notice">
  Legal notice
</a>
```

so .xlf file will have this id:

```xlf
<trans-unit id="legal-notice-link" datatype="html">
  .
  .
  .
</trans-unit>
```

The id identifier of the attribute must be the same or i18n will not detect it. For example in routerLink case,
must be i18n-routerLink and not i18n-routerlink. It is sensible to uppercase.
Id values cannot be repeated.

## How to create translation files

Now that we have completed the previous step, we can create the files. First you need to update angular.json:

```json
"projects": {
    "Easybank": {
      "i18n": {
        "sourceLocale": {
          "code": "en"
        },
        "locales": {
          "es": {
            "translation": "src/locale/messages.es.xlf",
            "subPath": "es"
          }
        }
      }
    }
}
```

where 'sourceLocale' is the default locale and locales are the the others languages in which we want to translate.
'translation' is the file used for translation and 'subPath' the path used for that locale in website.

```bash
ng extract-i18n --output-path src/locale
```

where "src/locale" is the folder where the files are saved and "source.xlf" will be the name of the generated file. \n
Also, the generated will be called messages.xlf by default, so for better understanding, it is wise to rename as 'messages.es.xlf'.
Remember that in development server ONLY ONE locale can be used at once according to Angular official docs. For using 2 or more, use `ng build` or Docker.
Don't forget that if you go to main domain, the web browser will redirect to the source locale used by us in it. If our browser has english as its default
language, it will open: http://mydomain.com/en.

When translating files, you need to add where <source> tag is in .xlf files the <target> element with the translated text:

```xlf
<trans-unit id="6510316136490176256" datatype="html">
  <source> Client area </source>
  <target> Área de cliente </target>
  <context-group purpose="location">
    <context context-type="sourcefile">src/app/components/footer/footer.html</context>
    <context context-type="linenumber">13</context>
  </context-group>
</trans-unit>
```

If two or more elements with an i18n attributes has the same id, all of them will be inside the same trans-unit tag element.

## How to serve web app in production or development

As mentioned before, when using the 'ng serve' command in local, you can only use one locale as stated in Angular documentation.
To serve the app in one language you must use:

```bash
ng serve --configuration=development,en
```

where in configuration is the environment to use. In this app we can use development/production and en/es. You can see this in angular.json file:

```json
"configurations": {
  "es":{
    "localize": ["es"]
  },
  "en":{
    "localize": ["en"]
  },
}
```

```json
"serve": {
  "serve": {
    "builder": "@angular/build:dev-server",
    "configurations": {
      "es": {
        "buildTarget": "Easybank:build:development,es"
      },
      "en": {
        "buildTarget": "Easybank:build:development,en"
      },
      "production": {
        "buildTarget": "Easybank:build:production"
      },
      "development": {
        "buildTarget": "Easybank:build:development"
      }
    },
  }
}
```

The serve configuration calls the build one in angular.json. You must update this file with this two extracts to make it work.

For more information visit Angular guide: <a href="https://angular.dev/guide/i18n">https://angular.dev/guide/i18n</a>

See also:

- https://phrase.com/blog/posts/angular-localization-i18n/
- https://medium.com/@yusufsarikaya023/quick-trip-how-to-localize-angular-router-with-different-language-d8b85b767802
- https://stackoverflow.com/questions/43904085/angular-routing-is-it-possible-to-use-different-path-strings-for-different-la (For routing)
- https://stackoverflow.com/questions/45722950/how-can-i-reuse-i18n-translation-keys-in-angular