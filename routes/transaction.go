package routes

import (
	"Task-Landtick-Golang/handlers"
	"Task-Landtick-Golang/pkg/middleware"
	"Task-Landtick-Golang/pkg/mysql"
	"Task-Landtick-Golang/repositories"

	"github.com/labstack/echo/v4"
)

func TransactionRoutes(e *echo.Group) {
	transactionRespository := repositories.RepositoryTransaction(mysql.DB)
	h := handlers.HandlerTransaction(transactionRespository)

	e.GET("/transactions", h.FindTransaction)
	e.GET("/transaction/:id", h.GetTransaction)
	e.POST("/transaction", middleware.UploadFile(h.CreateTransaction))
}
