# Easybank

Easybank is a web app for bank transactions and other payments. All operations are fictional.

## Installation

To download this project to your machine, use this commnad:

```bash
git clone https://github.com/Juanlu3095/Easybank.git
```

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

For using Angular SSR run:

```bash
pnpm run serve:ssr:Easybank
```

It will open a server in `http://localhost:4000/` by default.

## Docker

First, Docker Desktop must be on. Then, execute the next command in a terminal from the dockerfile's folder:

```bash
docker build -t image-name .
```

where "image-name" is the name of the image you select. "." refers to the actual folder, where the dockerfile is.

Now, you must create the container and add the image you just created:

```bash
docker run -d --name container-name -p 4200:80 image-name
```

where:

- container-name is the name you give to container
- -p 4200:80, 4200 is the port you open in your machine and 80 is the port exposed in dockerfile
- image-name is the image name from the image to use

To start container service:

```bash
docker start -a container-name
```

where container-name is the name of container to start.

To stop the service:

```bash
docker stop container-name
```

## Design

This application has two main components:

First, the landing page or homepage for SEO and advertisement.

Second, the actual aplication, a panel to manage your accounts and their operations. It separates admin and client roles.

To see the Figma design of the app click <a href="https://www.figma.com/design/WJEd6edg32H0JofGVIjEh6/EasyBank?m=auto&t=2iOICkdhrIIcktdc-1">here</a>.

## Translations

To add other languages you need to install i18n package:

```bash
ng add @angular/localize
```

In angular.json add the source locale (the default language) and other locales:

```json
{
    }
    "projects": {
        "Easybank": {
        "i18n": {
            "sourceLocale": "en-GB",
            "locales": {
                "es": {
                    "translation": "src/locale/messages.es.xlf",
                    "subPath": "es"
                }
            }
        },
        
    }
}
```
    
Now add the "i18n" in HTML tags to translate and then execute the next command to create the files:

```bash
ng extract-i18n --output-path src/locale --out-file source.xlf
```

where "src/locale" is the folder where the files are saved and "source.xlf" will be the name of the generated file. \n
Also, the generated will be called messages.xlf by default.
Remember that in development server ONLY ONE locale can be used at once according to Angular official docs. For using 2 or more, use `ng build` or Docker.

