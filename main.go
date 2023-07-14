package main

import (
	"Task-Landtick-Golang/database"
	"Task-Landtick-Golang/pkg/mysql"
	"Task-Landtick-Golang/routes"

	"github.com/labstack/echo/v4"
)

func main() {
	e := echo.New()

	mysql.DatabaseInit()
	database.RunMigration()

	routes.RouteInit(e.Group("/api/v1"))

	e.Logger.Fatal(e.Start("localhost:5000"))
}
