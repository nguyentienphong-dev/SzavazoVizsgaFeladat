# Backend felépítése

A backend mappája:

```text
backend/IskolaiEszkoz.API
```

# Program.cs

Feladata:

- létrehozza az ASP.NET Core alkalmazást,
- bekapcsolja a controllereket,
- regisztrálja a service-t,
- engedélyezi a CORS-t,
- elindítja az API-t.

A kapcsolat:

```csharp
builder.Services.AddScoped<IEszkozService, MariaDbEszkozService>();
```

jelentése:

ha a controller `IEszkozService`-t kér, akkor a program egy `MariaDbEszkozService` példányt ad neki.

---

# Model/Eszkoz.cs

Az eszköz C# modellje.

Egy adatbázisrekord C# megfelelője.

Például:

```text
SQL                  C#
nev                  Nev
leltari_szam         LeltariSzam
beszerzesi_ar        BeszerzesiAr
```

Az API JSON formában ezt az objektumot küldi a frontendnek.

---

# Controllers/EszkozController.cs

Itt vannak az API végpontok.

Alapútvonal:

```csharp
[Route("api/eszkozok")]
```

Végpontok:

```text
GET     /api/eszkozok
POST    /api/eszkozok
PUT     /api/eszkozok/{id}
DELETE  /api/eszkozok/{id}
```

A controller nem ír közvetlenül SQL-t.

Meghívja a service megfelelő függvényét.

---

# Service/IEszkozService.cs

Az interface felsorolja, milyen műveleteket kell a service-nek megvalósítania:

```csharp
List<Eszkoz> OsszesLekerese();
int Letrehozas(Eszkoz eszkoz);
bool Modositas(int id, Eszkoz eszkoz);
bool Torles(int id);
```

---

# Service/MariaDbEszkozService.cs

Itt történik a tényleges MariaDB-kezelés.

Itt található:

```text
SELECT
INSERT
UPDATE
DELETE
```

és a:

```csharp
MySqlConnection
MySqlCommand
MySqlDataReader
```

használata.

---

# appsettings.json

Az adatbázis-kapcsolat.

```json
"ConnectionStrings": {
    "MariaDb": "Server=localhost;Port=3306;Database=iskolai_eszkozok;User ID=root;Password=;"
}
```

Ha jelszó van, itt kell megadni.

---

# launchSettings.json

A backend helyi címét állítja be.

```text
http://localhost:5242
```

---

# IskolaiEszkoz.API.csproj

A projekt beállításai.

Fontos:

```xml
<TargetFramework>net8.0</TargetFramework>
```

és:

```xml
<PackageReference Include="MySqlConnector" Version="2.6.2" />
```

---

# IskolaiEszkoz.API.http

Az API külön frontend nélkül is tesztelhető.

A fájlban van példa:

```text
GET
POST
PUT
DELETE
```

kérésre.
