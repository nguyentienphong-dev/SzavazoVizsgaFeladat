# Indítás lépésről lépésre

# 1. MariaDB elindítása

Ellenőrizd, hogy fut a MariaDB Server.

Alapértelmezett:

```text
localhost
3306
```

---

# 2. Adatbázis létrehozása

Nyisd meg:

```text
database/01_iskolai_eszkozok.sql
```

Futtasd le a teljes fájlt MariaDB-ben.

A végén ennek kell létrejönnie:

```text
iskolai_eszkozok
└── eszkozok
```

Ellenőrzés:

```sql
USE iskolai_eszkozok;

SELECT * FROM eszkozok;
```

Ha megjelennek a mintaadatok, az adatbázis kész.

---

# 3. Backend kapcsolat beállítása

Nyisd meg:

```text
backend/IskolaiEszkoz.API/appsettings.json
```

Alapértelmezett:

```json
"MariaDb": "Server=localhost;Port=3306;Database=iskolai_eszkozok;User ID=root;Password=;"
```

Ha a MariaDB root jelszavad például:

```text
1234
```

akkor:

```json
"MariaDb": "Server=localhost;Port=3306;Database=iskolai_eszkozok;User ID=root;Password=1234;"
```

---

# 4. Backend megnyitása Visual Studio 2022-ben

A projekt gyökerében nyisd meg:

```text
IskolaiEszkozok.sln
```

Visual Studio betölti:

```text
IskolaiEszkoz.API
```

Várd meg a NuGet restore végét.

---

# 5. Backend indítása

A Visual Studio felső részén válaszd:

```text
http
```

profilt.

Indítás:

```text
Ctrl + F5
```

vagy a zöld Start gomb.

A konzolban ennek kell megjelennie:

```text
Now listening on: http://localhost:5242
```

---

# 6. Backend ellenőrzése

Böngésző:

```text
http://localhost:5242/api/eszkozok
```

Ha JSON jelenik meg, a backend működik.

Példa:

```json
[
  {
    "id": 1,
    "nev": "Tanári laptop"
  }
]
```

---

# 7. Frontend megnyitása

Visual Studio Code-ban nyisd meg a:

```text
frontend
```

mappát.

Nyisd meg:

```text
index.html
```

Majd:

```text
jobb kattintás
→ Open with Live Server
```

A cím általában:

```text
http://127.0.0.1:5500/index.html
```

---

# 8. Frontend ellenőrzése

Az oldal betöltéskor automatikusan lekéri az eszközöket.

Ha a lista megjelenik, működik:

```text
Frontend
→ backend
→ MariaDB
```

---

# 9. Létrehozás ellenőrzése

Az `Új eszköz felvétele` blokkban töltsd ki a mezőket.

Kattints:

```text
Eszköz mentése
```

Ezután az új rekordnak meg kell jelennie a listában.

MariaDB-ben ellenőrizhető:

```sql
SELECT * FROM eszkozok;
```

---

# 10. Módosítás ellenőrzése

A listában kattints:

```text
Szerkesztés
```

vagy írd be kézzel az ID-t a `Módosítás` blokkba.

Kattints:

```text
Adatok betöltése
```

Az űrlap kitöltődik.

Írj át egy mezőt.

Kattints:

```text
Módosítás mentése
```

---

# 11. Törlés ellenőrzése

A `Törlés` blokkban add meg egy rekord ID-ját.

Kattints:

```text
Törlés
```

A lista újratöltődik.

---

# 12. Leállítás

Frontend:

A Live Server a VS Code alsó sávjában leállítható.

Backend:

Visual Studio:

```text
Shift + F5
```

MariaDB:

Nem szükséges minden alkalommal leállítani.
