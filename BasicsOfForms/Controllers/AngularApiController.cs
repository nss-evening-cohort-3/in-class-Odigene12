﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace BasicsOfForms.Controllers
{
    public class AngularApiController : ApiController
    {
        public void Post([FromBody] dynamic data)
        {
            var code = "yay";
        }
    }
}
