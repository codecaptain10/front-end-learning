//Loaders
/*
1)Webpack traktuje wszystkie rodzaje plików jako moduł.
Sam w sobie rozumie jedynie JavaScript.
2) Zanim taki moduł trafi do drzewa zależnośći musi być przetransportowany/przetransformowany za pomocą loaderów.
3) Loadery transmitują pozostałe pliki w taki sposób, aby te mogły zostać dodane do drzewa zależności.
4) Łączenie loaderów (przykładowo):
  - sass-loader (kompiluje sass czy scss)
  - css-loader transformuje pliki CSS jako moduł JavaScript
  - html-loader dodaje kod CSS do plików HTML

5) Z kąd wiedzieć kiedy i jakiego loadera użyć ? Po prostu za każdym razem gdy importujemy jakiś plik, który nie jest natywnym plikiem JavaScript to sygnał aby wykorzystać loader.
Liste loaderów możemy znaleźć w oficjalnej dokumentacji Webpacka.
6) Istnieją 3 sposoby użycia loadera:
  1. Ustawienie pliku konfiguracyjnego
  webpack.config.js
  2. Wyrażenie import
  import Styles from 'style-loader!css-loader?modules!./style.css'
  3. Linia poleceń (CLI)
  webpack --module-bind jade-loader --module bind 'css=style-loader!css-loader'
  W większości przypadków wykorzystamy pierwszy sposób.


*/