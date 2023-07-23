package routes

import (
	"Task-Landtick-Golang/handlers"
	"Task-Landtick-Golang/pkg/middleware"
	"Task-Landtick-Golang/pkg/mysql"
	"Task-Landtick-Golang/repositories"

	"github.com/labstack/echo/v4"
)

func StationRoutes(e *echo.Group) {
	stationRespository := repositories.RepositoryStation(mysql.DB)
	h := handlers.HandlerStations(stationRespository)

	e.GET("/stations", h.FindStation)
	e.POST("/station", middleware.Auth(h.CreateStation))
}
