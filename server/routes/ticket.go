package routes

import (
	"Task-Landtick-Golang/handlers"
	"Task-Landtick-Golang/pkg/middleware"
	"Task-Landtick-Golang/pkg/mysql"
	"Task-Landtick-Golang/repositories"

	"github.com/labstack/echo/v4"
)

func TicketsRoutes(e *echo.Group) {
	ticketsRespository := repositories.RepositoryTicket(mysql.DB)
	h := handlers.HandlerTicket(ticketsRespository)

	e.GET("/tickets", h.FindTicket)
	e.GET("/ticket", h.SearchTicket)
	e.GET("/ticket/:id", h.GetTicket)
	e.GET("/ticket/my-ticket", middleware.Auth(h.GetMyTicket))
	e.POST("/ticket", middleware.Auth(h.CreateTicket))
}
