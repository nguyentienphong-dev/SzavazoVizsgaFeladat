# Hibakeresés

## Nem indul a backend

Ellenőrizd:

```text
Visual Studio 2022
.NET 8 SDK
ASP.NET and web development workload
```

Majd:

```text
Restore NuGet Packages
```

---

## MySqlConnector nem található

A NuGet csomag nem töltődött le.

Visual Studio:

```text
Solution
→ Restore NuGet Packages
```

vagy:

```bash
dotnet restore
```

---

## Access denied for user 'root'

Hibás MariaDB felhasználónév vagy jelszó.

Ellenőrizd:

```text
backend/IskolaiEszkoz.API/appsettings.json
```

Példa:

```text
User ID=root;
Password=1234;
```

---

## Unknown database 'iskolai_eszkozok'

Az SQL script még nem futott le.

Futtasd:

```text
database/01_iskolai_eszkozok.sql
```

---

## Unable to connect / Connection refused

Ellenőrizd:

```text
fut-e a MariaDB Server
port: 3306
Server=localhost
```

---

## A backend elindul, de a böngészőben nincs adat

Nyisd meg:

```text
http://localhost:5242/api/eszkozok
```

Ha hibát kapsz, először a backend vagy az adatbázis kapcsolatot javítsd.

Ne a frontendet hibakeresd addig, amíg ez az URL nem működik.

---

## Failed to fetch a frontendben

Ellenőrizd:

```text
1. fut-e a backend
2. backend portja 5242-e
3. script.js API_URL jó-e
4. F12 → Console
5. F12 → Network
```

Frontend:

```javascript
const API_URL = "http://localhost:5242/api/eszkozok";
```

---

## Más porton indul a backend

Nézd meg a Visual Studio konzolját:

```text
Now listening on: ...
```

Ha például:

```text
http://localhost:5010
```

akkor:

```javascript
const API_URL = "http://localhost:5010/api/eszkozok";
```

---

## A Bootstrap kinézet nem töltődik be

A frontend CDN-ről tölti a Bootstrapet.

Ellenőrizd az internetkapcsolatot.

Ha nincs internet, az oldal alap HTML-je működhet, de a Bootstrap megjelenés nem lesz teljes.

---

## A módosítás nem tölt be adatot

Ellenőrizd:

```text
1. létezik-e az ID
2. működik-e a GET /api/eszkozok
3. F12 → Console
```

---

## Törlés után vissza akarom állítani az adatokat

Futtasd újra:

```text
database/01_iskolai_eszkozok.sql
```

FIGYELEM:

Ez a teljes adatbázist visszaállítja az eredeti mintaállapotra, tehát minden közben létrehozott vagy módosított adat elvész.
