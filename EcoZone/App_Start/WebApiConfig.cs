﻿using System.Web.Http;

namespace EcoZone
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                "DefaultApi",
                "{controller}/{id}",
                new {id = RouteParameter.Optional}
            );
        }
    }
}