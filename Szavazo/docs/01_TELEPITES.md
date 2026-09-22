# Telepítés

## 1. MariaDB

Telepíts MariaDB Servert.

A szerver alapértelmezett portja:

```text
3306
```

Jegyezd meg a telepítéskor beállított `root` jelszót.

Az adatbázis kezeléséhez használhatsz például HeidiSQL-t.

---

## 2. Visual Studio 2022

Nyisd meg a Visual Studio Installert.

A Visual Studio 2022 mellett:

```text
Modify
```

Majd jelöld be:

```text
ASP.NET and web development
```

A projekt .NET 8-at használ.

Szükséges:

```text
.NET 8 SDK
```

---

## 3. Backend NuGet csomag

A szükséges csomag:

```text
MySqlConnector 2.6.2
```

A projektfájl már tartalmazza, ezért Visual Studio automatikusan letölti.

Projektfájl:

```text
backend/IskolaiEszkoz.API/IskolaiEszkoz.API.csproj
```

Részlet:

```xml
<ItemGroup>
  <PackageReference Include="MySqlConnector" Version="2.6.2" />
</ItemGroup>
```

Ha Visual Studio nem tölti le automatikusan:

```text
Solution Explorer
→ jobb kattintás a Solutionre
→ Restore NuGet Packages
```

---

## 4. Visual Studio Code

A frontendhez ajánlott.

Bővítmény:

```text
Live Server
```

Telepítés:

```text
Extensions
→ Live Server
→ Install
```

---

## 5. Bootstrap

A frontend CDN-ről tölti a Bootstrapet és a Bootstrap Icons fájlokat.

Nincs szükség:

```text
npm
Node.js
npm install
```

Viszont az oldal teljes Bootstrap-megjelenéséhez internetkapcsolat szükséges.
