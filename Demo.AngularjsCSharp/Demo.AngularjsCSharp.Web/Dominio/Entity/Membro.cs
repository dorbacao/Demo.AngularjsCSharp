using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Demo.AngularjsCSharp.Web.Dominio.Entity
{
    public class Membro
    {
        public Guid Id { get; set; }
        public string Nome { get; set; }
        public Congregacao CongregacaoPertencente { get; set; }
        public CargoMinisterial CargoMinisterial { get; set; }

    }
}