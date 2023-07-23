package routes

import (
	"Task-Landtick-Golang/handlers"
	"Task-Landtick-Golang/pkg/middleware"
	"Task-Landtick-Golang/pkg/mysql"
	"Task-Landtick-Golang/repositories"

	"github.com/labstack/echo/v4"
)

func AuthRoutes(e *echo.Group) {
	authRespository := repositories.MakeRepository(mysql.DB)
	h := handlers.HandlerAuth(authRespository)

	e.GET("/check/auth", middleware.Auth(h.CheckAuth))
	e.POST("/login", h.Login)
	e.POST("/register", h.Register)
}
