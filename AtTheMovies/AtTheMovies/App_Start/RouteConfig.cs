﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace AtTheMovies
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(name: "Test", url: "test/{name}/{*info}", 
                defaults: new
            {
                controller="Company", action="Info" 
            });
            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new 
                { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );

        }
    }
}
