package handlers

import (
	resultdto "Task-Landtick-Golang/dto/result"
	ticketsdto "Task-Landtick-Golang/dto/tickets"
	"Task-Landtick-Golang/models"
	"Task-Landtick-Golang/repositories"
	"net/http"
	"strconv"

	"github.com/go-playground/validator/v10"
	"github.com/golang-jwt/jwt/v4"
	"github.com/labstack/echo/v4"
)

type handlerTicket struct {
	TicketRepositories repositories.TicketRepository
}

func HandlerTicket(TicketRepositories repositories.TicketRepository) *handlerTicket {
	return &handlerTicket{TicketRepositories}
}

func (h *handlerTicket) FindTicket(c echo.Context) error {
	tickets, err := h.TicketRepositories.FindTicket()
	if err != nil {
		return c.JSON(http.StatusBadRequest, resultdto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}

	return c.JSON(http.StatusOK, resultdto.SuccesResult{Status: "Success", Data: convertAllTicketResponse(tickets)})
}

func (h *handlerTicket) CreateTicket(c echo.Context) error {
	request := new(ticketsdto.CreateTicketRequest)
	if err := c.Bind(request); err != nil {
		return c.JSON(http.StatusBadRequest, resultdto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}

	validation := validator.New()
	err := validation.Struct(request)
	if err != nil {
		return c.JSON(http.StatusBadRequest, resultdto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}

	token := c.Get("userLogin").(jwt.MapClaims)["id"].(float64)

	ticketDatas := models.Ticket{
		NameTrain:            request.NameTrain,
		TypeTrain:            request.TypeTrain,
		StartDate:            request.StartDate,
		StartStationID:       request.StartStationID,
		StartTime:            request.StartTime,
		DestinationStationID: request.DestinationStationID,
		ArrivalTime:          request.ArrivalTime,
		Price:                request.Price,
		Qty:                  request.Qty,
		UserID:               int(token),
	}

	datas, err := h.TicketRepositories.CreateTicket(ticketDatas)
	if err != nil {
		c.JSON(http.StatusInternalServerError, resultdto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()})
	}

	return c.JSON(http.StatusOK, resultdto.SuccesResult{Status: "Success", Data: convertTicketCreate(datas)})
}

func (h *handlerTicket) SearchTicket(c echo.Context) error {
	date := c.QueryParam("date")
	startStation := c.QueryParam("startStation")
	endStation := c.QueryParam("destination")

	var startStationID int
	if startStation != "" {
		var err error
		startStationID, err = strconv.Atoi(startStation)
		if err != nil {
			return c.JSON(http.StatusBadRequest, resultdto.ErrorResult{Code: http.StatusBadRequest, Message: "Invalid Start Station ID!!"})
		}
	}

	var endStationID int
	if startStation != "" {
		var err error
		endStationID, err = strconv.Atoi(endStation)
		if err != nil {
			return c.JSON(http.StatusBadRequest, resultdto.ErrorResult{Code: http.StatusBadRequest, Message: "Invalid Destinantion Station ID!!"})
		}
	}

	data, err := h.TicketRepositories.SearchTicket(date, startStationID, endStationID)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, resultdto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()})
	}

	return c.JSON(http.StatusOK, resultdto.SuccesResult{Status: "Success", Data: data})
}

func (h *handlerTicket) GetTicket(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("id"))
	tickets, err := h.TicketRepositories.GetTicket(id)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, resultdto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()})
	}

	return c.JSON(http.StatusOK, resultdto.SuccesResult{Status: "Success", Data: user{Data: convertAllTicket(tickets)}})
}

func (h *handlerTicket) GetMyTicket(c echo.Context) error {
	claims := c.Get("userLogin")
	id := claims.(jwt.MapClaims)["id"].(float64)
	userID := int(id)

	ticket, err := h.TicketRepositories.GetMyTicket(userID)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, resultdto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()})
	}

	return c.JSON(http.StatusOK, resultdto.SuccesResult{Status: "Success", Data: ticket})
}

func convertTicketCreate(t models.Ticket) ticketsdto.CreateTicketResponse {
	return ticketsdto.CreateTicketResponse{
		NameTrain:            t.NameTrain,
		TypeTrain:            t.TypeTrain,
		StartDate:            t.StartDate,
		StartStationID:       t.StartStationID,
		StartTime:            t.StartTime,
		DestinationStationID: t.DestinationStationID,
		ArrivalTime:          t.ArrivalTime,
		Price:                t.Price,
		Qty:                  t.Qty,
	}
}

func convertAllTicket(t models.Ticket) ticketsdto.AllTicketResponse {
	return ticketsdto.AllTicketResponse{
		NameTrain:          t.NameTrain,
		TypeTrain:          t.TypeTrain,
		StartDate:          t.StartDate,
		StartStation:       t.StartStation,
		StartTime:          t.StartTime,
		DestinationStation: t.DestinationStation,
		ArrivalTime:        t.ArrivalTime,
		Price:              t.Price,
	}
}

func convertAllTicketResponse(tickets []models.Ticket) []ticketsdto.AllTicketResponse {
	var ticketsResponse []ticketsdto.AllTicketResponse

	for _, ticket := range tickets {
		ticketsResponse = append(ticketsResponse, convertAllTicket(ticket))
	}

	return ticketsResponse
}
