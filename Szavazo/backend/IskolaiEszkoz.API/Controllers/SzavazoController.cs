using Szavazok.API.Model;
using Szavazok.API.Service;
using Microsoft.AspNetCore.Mvc;

namespace Szavazok.API.Controllers
{
    [Route("api/szavazo")]
    [ApiController]
    public class SzavazoController : ControllerBase
    {
        private readonly ISzavazoService _szavazoSercive;

        public SzavazoController(ISzavazoService eszkozService)
        {
            _szavazoSercive = eszkozService;
        }

        // GET http://localhost:5242/api/szavazo
        [HttpGet("{ketNev}")]
        public ActionResult<Szavazo> LekereseNevAlapjan(string ketNev)
        {
            Szavazo szavazo = _szavazoSercive.LekereseNevAlapjan(ketNev);
            if (szavazo != null)
            {
                return Ok(szavazo);
            }
            else
            {
                return NotFound();
            }
        }

        // PUT http://localhost:5242/api/szavazo/1
        [HttpPut("{szavazo}")]
        public IActionResult Szavazas(Szavazo szavazo)
        {
            bool sikeres = _szavazoSercive.Szavazas(szavazo);

            if (!sikeres)
            {
                return NotFound();
            }

            return NoContent();
        }

    }
}
