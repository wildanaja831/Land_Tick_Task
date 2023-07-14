package handlers

import (
	resultdto "Task-Landtick-Golang/dto/result"
	transactionsdto "Task-Landtick-Golang/dto/transaction"
	"Task-Landtick-Golang/models"
	"Task-Landtick-Golang/repositories"
	"net/http"
	"strconv"

	"github.com/go-playground/validator/v10"
	"github.com/labstack/echo/v4"
)

type handlerTransaction struct {
	TransactionRepositories repositories.TransactionRepository
}

type dataTransaction struct {
	Data interface{} `json:"transaction"`
}

func HandlerTransaction(TransactionRepositories repositories.TransactionRepository) *handlerTransaction {
	return &handlerTransaction{TransactionRepositories}
}

func (h *handlerTransaction) FindTransaction(c echo.Context) error {
	transactions, err := h.TransactionRepositories.FindTransaction()
	if err != nil {
		return c.JSON(http.StatusInternalServerError, resultdto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()})
	}

	return c.JSON(http.StatusOK, resultdto.SuccesResult{Status: "Success", Data: transactions})
}

func (h *handlerTransaction) GetTransaction(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("id"))
	transaction, err := h.TransactionRepositories.GetTransaction(id)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, resultdto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()})
	}

	return c.JSON(http.StatusOK, resultdto.SuccesResult{Status: "Success", Data: transaction})
}

func (h *handlerTransaction) CreateTransaction(c echo.Context) error {
	request := new(transactionsdto.CreateTransactionRequest)
	if err := c.Bind(request); err != nil {
		return c.JSON(http.StatusBadRequest, resultdto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}

	userId, _ := strconv.Atoi(c.FormValue("user_id"))
	ticketId, _ := strconv.Atoi(c.FormValue("ticket_id"))
	image := c.Get("dataFile").(string)

	request.UserID = userId
	request.TicketID = ticketId
	request.Image = image

	validation := validator.New()
	err := validation.Struct(request)
	if err != nil {
		return c.JSON(http.StatusBadRequest, resultdto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}

	dataTrsansaction := models.Transaction{
		UserID:   request.UserID,
		TicketID: request.TicketID,
		Image:    request.Image,
	}

	datas, err := h.TransactionRepositories.CreateTransaction(dataTrsansaction)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, resultdto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()})
	}

	return c.JSON(http.StatusOK, resultdto.SuccesResult{Status: "Success", Data: dataTransaction{Data: convertTransactionResponse(datas)}})
}

func convertTransactionResponse(u models.Transaction) transactionsdto.CreateTransactionResponse {
	return transactionsdto.CreateTransactionResponse{
		User:   u.User,
		Ticket: u.Ticket,
		Image:  u.Image,
	}
}
