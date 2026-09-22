Az adatbázis tesztteléséhez tesztesetek

Másolja a lekérdezéseket a Lekérdezésbe

/*1.) minden*/
SELECT * FROM szavazok;

/*2.) minden név*/
SELECT nev FROM szavazok;

/*3.) minden szavazat opció*/
SELECT DISTINCT kireSzavazott FROM szavazok
WHERE kireSzavazott IS NOT NULL;

/*4.) minden osztaly*/
SELECT DISTINCT osztaly FROM szavazok;

/*5.) mindenki aki szavazott*/
SELECT nev FROM szavazok
WHERE szavazott = 1;

/*6.) mindenki aki nem szavazott*/
SELECT nev FROM szavazok
WHERE szavazott = 0;

/*7.) hányan szavaztak*/
SELECT COUNT(*) FROM szavazok
WHERE szavazott = 1;


/*8.) hányan nem szavaztak*/
SELECT COUNT(*) FROM szavazok
WHERE szavazott = 0;

/*9.) kire szavaztak a legtöbben*/
SELECT kireSzavazott, COUNT(kireSzavazott) FROM szavazok
GROUP BY kireSzavazott 
ORDER BY COUNT(kireSzavazott) DESC	
LIMIT 1