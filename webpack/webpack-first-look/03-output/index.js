//Output
/*
1) Dobra praktyka: Podział aplikacji na katalog źródłowy i katalog z plikami produckyjnymi
2) Katalogi '/src' oraz '/dist'
Katalog '/src' to pliki źródłowe wykorzystywane podczas developmentu.
Katalog '/dist' zawiera zoptymalizowane pliki, gotowe do użycia.
Zawartość katalogu 'dist' jest generowana automatycznie przez narzędzie takie jak np. Webpack.
3) Głownym uzasadnieniem jest fakt, że aplikacje JavaScript powinny zostać zoptymalizowane przed publikacją. 
Ma to na celu zwiększenia wydajności czy dostosowanie do starszych przeglądarek.
4)  Podczas developmentu jest edytowany kod wyłącznie z katalogu źródłowego.
5) Rolą Webpacka jest automatyczne wygenerowanie produkcyjnej wersji aplikacji.
Za ustrukturyzowanie zawartości katalogu 'dist' odpowiada głownie właściwość 'output' pliku konfiguracyjnego.
*/

/*
Po podstawowej konfiguracji możemy uruchomić polecenie: npm run build --p
Flaga --p spowoduje, że bundle wygeneruje się w formie produkcyjnej.
Wersja produkcyjna nie jest do edytowania, tylko spakowana tak aby była lżejsza i mogła zostać użyta.
*/