﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BasicsOfForms.Controllers
{
    public class BasicController : Controller
    {
        // GET: Basic
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Index(FormCollection form)
        {
            var yaahhh = "yahhh";
            return View();
        }

        public ActionResult Razor()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Razor(FormCollection form)
        {
            var yaahhh = "yahhh";
            return View();
        }

        public ActionResult Angular()
        {
            return View();
        }
    }
}