package routes

import (
	"Task-Landtick-Golang/handlers"
	"Task-Landtick-Golang/pkg/mysql"
	"Task-Landtick-Golang/repositories"

	"github.com/labstack/echo/v4"
)

func UserRoutes(e *echo.Group) {
	userRespository := repositories.RepositoryUser(mysql.DB)
	h := handlers.HandlerUsers(userRespository)

	e.GET("/users", h.FindUsers)
	e.GET("/user/:id", h.GetUserById)
}
