using Szavazok.API.Model;

namespace Szavazok.API.Service
{
    public interface ISzavazoService
    {
        Szavazo LekereseNevAlapjan(string kertNev);
        bool Szavazas(Szavazo eszkoz);
    }
}
