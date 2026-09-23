using Szavazok.API.Model;
using MySqlConnector;

namespace Szavazok.API.Service
{
    public class MariaDbSzavazoService : ISzavazoService
    {
        private readonly string _connectionString;

        public MariaDbSzavazoService(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("MariaDb");
        }

        public Szavazo LekereseNevAlapjan(string kertNev)
        {
            using MySqlConnection kapcsolat = new MySqlConnection(_connectionString);
            kapcsolat.Open();

            string sql = @"
                SELECT nev, osztaly, szavazott, kireSzavazott
                FROM szavazok;";

            using MySqlCommand parancs = new MySqlCommand(sql, kapcsolat);
            using MySqlDataReader olvaso = parancs.ExecuteReader();

            while (olvaso.Read())
            {
                if (olvaso["nev"].ToString() == kertNev)
                {
                    Szavazo eszkoz = new Szavazo
                    {
                        Nev = olvaso["nev"].ToString(),
                        Osztaly = olvaso["osztaly"].ToString(),
                        Szavazott = olvaso["szavazott"] == "1" ? true : false,
                        KireSzavazott = olvaso["kireSzavazott"].ToString()
                    };

                    return eszkoz;
                }
                
            }
            return null;

        }


        public bool Szavazas( Szavazo szavazo)
        {
            using MySqlConnection kapcsolat = new MySqlConnection(_connectionString);
            kapcsolat.Open();

            string sql = @"
                UPDATE eszkozok
                SET nev = @nev,
                    osztaly = @osztaly,
                    szavazott = @szavazott,
                    kireSzavazott = @kireSzavazott
                WHERE nev = @nev;";
            
            using MySqlCommand parancs = new MySqlCommand(sql, kapcsolat);

            parancs.Parameters.AddWithValue("@nev", szavazo.Nev);
            parancs.Parameters.AddWithValue("@osztaly", szavazo.Osztaly);
            parancs.Parameters.AddWithValue("@szavazott", szavazo.Szavazott);
            parancs.Parameters.AddWithValue("@kireSzavazott", szavazo.KireSzavazott);

            int modositottSorok = parancs.ExecuteNonQuery();

            return modositottSorok > 0;
        }

    }
}
