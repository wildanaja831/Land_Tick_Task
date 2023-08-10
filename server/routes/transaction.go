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
	userRepository := repositories.RepositoryUser(mysql.DB)
	h := handlers.HandlerTransaction(transactionRespository, userRepository)

	e.GET("/transactions", h.FindTransaction)
	e.GET("/mytransaction", middleware.Auth(h.GetMyTransaction))
	e.GET("/transaction/:id", h.GetTransaction)
	e.GET("/getpayment/:id", h.GetPayment)
	e.POST("/notification", h.Notification)
	e.DELETE("/transaction/:id", h.DeleteTransaction)
	e.POST("/transaction", middleware.Auth(h.CreateTransaction))
}
