package transactionsdto

import "Task-Landtick-Golang/models"

type CreateTransactionRequest struct {
	UserID   int    `json:"user_id" form:"user_id" validate:"required"`
	TicketID int    `json:"ticket_id" form:"ticket_id" validate:"required"`
	Image    string `json:"image" form:"image" validate:"required"`
}

type CreateTransactionResponse struct {
	User   models.UserTransactionResponse   `json:"user"`
	Ticket models.TicketTransactionResponse `json:"ticket"`
	Image  string                           `json:"image"`
}
