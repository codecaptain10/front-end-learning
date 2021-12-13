//Entry points
/*
1)Webpack buduje bundle tworząc drzewo zależności.
Zaczyna budowanie właśnie od entry point.
2) Analizując jego zawartość, Webpack wyszukuje wszystkie miejsca w których importowane są moduły rekurencyjnie dodając je do drzewa zależności.
Następnie wykonuje zdefiniowane przez nas zadania by na końu wykonać konkretny bundle.
3) Sprawa jest prosta kiedy wykorzystujemy jeden entry point.
W praktyce nie jest to wystarczające i potrzeba ich kilka.
4) Jednym z możlwych scenariuszy jest rozdzielenie kodu naszej aplikacji od zewnętrznych zależności.
5) Kluczowym powodem jest tutaj wyykorzystanie pamięci podręcznej przeglądarki. 
Otóż w przypadku aktualizacji użytkownik będzie musiał pobrać wyłącznie kod naszej aplikacji, a zewnętrzne biblioteki nadal pozostaną w cash-u.
*/

//Przykład
/* 
1. Stwórz:
  - folder 'src' a w nim app.js 
  - package.json
  - webpack.config.js
2. Wypełnij pliki
3. Zmiana definicji entry point na obiekt
4. Zainstaluj pakiet loadash
5. Uruchom: npm run build
6. Webpack utworzył folder 'dist'
Przydatne: https://webpack.js.org/plugins/split-chunks-plugin/
*/