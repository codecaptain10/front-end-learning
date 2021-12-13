//Czym jest Webpack?

/*1. Module bundler 
Webpack przetwarza kod naszej aplikacji wyszukując zależności pomiędzy modułami.
Na podstawie stworzonego w ten sposób DEPENDENCY GRAPH tworzy bundle aplikacji.
*/
/*2. Webpack vs Gulp/Grunt
Podobnie jak Gulp czy Grunt umożliwia wykonywanie zautomatyzowanych zadań na plikach. 
Ostatecznie webpack inaczej interpretuje pliki. 
Traktuje każdy z nich jako MODUŁ (również pliki CSS, obrazy, fonty). 
W efekcie oferuje szerokie możliwości konfiguracji.
*/

/*3. Pierwsze użycie Webpacka 
 1) W katalogu głównym (01-firstProject):
 npm init 
 2)Instalacja Webpacka:
 npm install --save-dev webpack
 3) Stwórz plik konfiguracyjny webpacka
 01-firstProject/webpack.config.js
 4) Po pierwszej konfiguracji w plikach:
    - webpack.config.js 
        - entry
        - output
        - mode
    - package.json
      - scripts --> "build":""./node_modules/.bin/webpack""
    
      Następnie zdefiniowanie modułu search i wywołanie go w app.js
    Po uruchomieniu "npm run build" zostanie utworzony katalog dist
*/

/*4. Loadery 
1) Webpack akceptuje pliki JavaScript i JSON. 
Aby dodać więc inne pliki należy użyć loaderów, które przetwarzają typ plików.
Loadery przetwarzają pliki w taki sposób aby mogły być dodane do drzewa zależności.
Prykładem mogą być pliki CSS.
2) Loaderem do CSS jest CSS Loader.
Instalacja: npm install --save-dev css-loader
3) W pliku konfiguracyjnym webpacka, w sekcji module należy dodać informacje czy plik jest plikiem CSS.
Jeśli tak, loader zostanie uruchomiony.
4) Zaimplementuj pzykładowy plik CSS. W tym przypadku będzie to import app.css to app.js
5) Następnie uruchom 'npm run build'

*/

/*5. Pluginy 
1) Oczekujemy aby kod CSS został zapisany w oddzielnym pliku
2) Odpowiada za to Extract Text Plugin
Instalacja: npm install --save-dev extract-text-webpack-plugin
3) Po instalacji importujemy go w pliku konfiguracyjnym
4) Zmieniemy właściwości loader
5) Instalacja pakietu style-loader:
npm install --save-dev style-loader
6) W pliku konfiguracyjnym Webpack tworzymy nową sekcje plugin i jako parametr podajemy nazwę pliku w którym ma być zapisany kod css
7) Polecenie: npm run build
!!! Uwaga, plik Extraxt Text Plugin przedawniony !!! 
Dlatego ...
8) Rozwiązanie: https://github.com/webpack-contrib/mini-css-extract-plugin
*/

/*PODSUMOWANIE 
Entry - plik wejścia, od którego Webpack  zaczyna budować drzewo zależności
Output - plik w którym zostanie zapisany wygenerowany bundle
Loaders - przetwarzanie plików nie będącymi plikami JavaScript w taki sposób aby mogły zostać dodane do drzewa zależności, np pliki CSS
Plugins - wykonują operacje na całej kompilacji, np minifikacja plików CSS czy JavaScript

*/