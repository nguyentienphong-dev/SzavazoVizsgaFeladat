# Frontend felépítése

A frontend három fájlból áll:

```text
frontend/
├── index.html
├── style.css
└── script.js
```

# index.html

A felület.

Fő részei:

```text
Fejléc
Kezdőlap
Bemutatkozás
Eszközlista
Új eszköz
Módosítás
Törlés
Kapcsolat
Impresszum
Footer
```

Az eszközműveletek egyszerű blokkokban vannak egymás alatt.

---

# style.css

A saját megjelenés.

A Bootstrap mellett az oldal saját CSS osztályokat is használ.

A működéshez nem kell CSS frameworköt programozni, a Bootstrap osztályok a HTML-ben vannak.

---

# script.js

Az API címe:

```javascript
const API_URL = "http://localhost:5242/api/eszkozok";
```

Fő függvények:

```javascript
eszkozokLekerese()
eszkozLetrehozasa()
modositandoEszkozBetoltese()
eszkozModositasa()
eszkozTorlese()
eszkozokMegjelenitese()
kereses()
```

---

# Lekérdezés

```javascript
fetch(API_URL)
    .then(response => response.json())
    .then(adatok => {
        ...
    })
    .catch(error => {
        ...
    });
```

---

# Táblázat

Az adatokat:

```javascript
eszkozok.forEach(...)
```

járja végig.

Minden eszközből egy:

```html
<tr>
```

sor készül.

---

# Létrehozás

Az űrlap adataiból JavaScript objektum készül.

Majd:

```javascript
fetch(API_URL, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(ujEszkoz)
})
```

---

# Módosítás

Az eszköz ID alapján betöltődik az űrlapba.

Ezután:

```javascript
fetch(`${API_URL}/${id}`, {
    method: "PUT",
    ...
})
```

---

# Törlés

```javascript
fetch(`${API_URL}/${id}`, {
    method: "DELETE"
})
```

---

# Keresés

A keresés jelenleg frontend oldali.

A már lekért `aktualisEszkozok` tömböt szűri:

```javascript
filter()
```

név, gyártó és terem alapján.

Ehhez nem indul új backend kérés.
