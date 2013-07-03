using Demo.AngularjsCSharp.Web.Dominio.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Demo.AngularjsCSharp.Web.API
{
    public class CongregacaoController : ApiController
    {
        public IEnumerable<Congregacao> Get()
        {
            List<Congregacao> lista = new List<Congregacao>();

            lista.Add(new Congregacao() { Id = 1, Nome = "Exemplo 1" });
            lista.Add(new Congregacao() { Id = 2, Nome = "Exemplo 2" });
            lista.Add(new Congregacao() { Id = 3, Nome = "Exemplo 3" });
            lista.Add(new Congregacao() { Id = 4, Nome = "Exemplo 4" });

            return lista;
        }
    }
}
