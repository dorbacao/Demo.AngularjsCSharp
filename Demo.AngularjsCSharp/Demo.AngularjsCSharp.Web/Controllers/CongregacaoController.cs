using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Demo.AngularjsCSharp.Web.Controllers
{
    public class CongregacaoController : Controller
    {
        public ActionResult Lista()
        {
            return PartialView();
        }

        public ActionResult Detalhe()
        {
            return PartialView();
        }
    }
}
