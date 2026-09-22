# API végpontok

Alapcím:

```text
http://localhost:5242/api/eszkozok
```

# GET – összes eszköz

```http
GET /api/eszkozok
```

Válasz:

```json
[
  {
    "id": 1,
    "nev": "Tanári laptop",
    "leltariSzam": "IT-001",
    "kategoria": "Laptop",
    "gyarto": "Dell",
    "modell": "Latitude 5420",
    "terem": "A304",
    "allapot": "Jó",
    "hasznalatbanVan": true,
    "kolcsonozheto": true,
    "beszerzesiAr": 280000,
    "beszerzesDatuma": "2022-09-01T00:00:00"
  }
]
```

---

# POST – új eszköz

```http
POST /api/eszkozok
Content-Type: application/json
```

Body:

```json
{
  "nev": "Új laptop",
  "leltariSzam": "IT-999",
  "kategoria": "Laptop",
  "gyarto": "Lenovo",
  "modell": "ThinkPad E14",
  "terem": "A304",
  "allapot": "Jó",
  "hasznalatbanVan": true,
  "kolcsonozheto": true,
  "beszerzesiAr": 250000,
  "beszerzesDatuma": "2026-09-15"
}
```

Sikeres válasz:

```text
201 Created
```

A válaszban az új rekord ID-ja érkezik.

---

# PUT – módosítás

Példa:

```http
PUT /api/eszkozok/3
Content-Type: application/json
```

Body:

```json
{
  "nev": "Módosított laptop",
  "leltariSzam": "IT-003",
  "kategoria": "Laptop",
  "gyarto": "Lenovo",
  "modell": "ThinkPad E14",
  "terem": "A315",
  "allapot": "Jó",
  "hasznalatbanVan": true,
  "kolcsonozheto": false,
  "beszerzesiAr": 250000,
  "beszerzesDatuma": "2023-08-15"
}
```

Siker:

```text
204 No Content
```

Ha az ID nem létezik:

```text
404 Not Found
```

---

# DELETE – törlés

```http
DELETE /api/eszkozok/3
```

Siker:

```text
204 No Content
```

Ha az ID nem létezik:

```text
404 Not Found
```
