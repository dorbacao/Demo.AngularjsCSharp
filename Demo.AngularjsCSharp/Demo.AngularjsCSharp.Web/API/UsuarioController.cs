using Demo.AngularjsCSharp.Web.Dominio.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Demo.AngularjsCSharp.Web.API
{
    
    public class UsuarioController : ApiController
    {
        public HttpResponseMessage PostUsuario(dynamic usuario)
        {
            if(usuario.login == "dorba" && usuario.senha == "123456")
                return Request.CreateResponse(HttpStatusCode.OK);
            else
                return Request.CreateResponse(HttpStatusCode.NotFound);
        }

        
    }
}
