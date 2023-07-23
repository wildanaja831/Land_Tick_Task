package handlers

import (
	resultdto "Task-Landtick-Golang/dto/result"
	stationdto "Task-Landtick-Golang/dto/station"
	"Task-Landtick-Golang/models"
	"Task-Landtick-Golang/repositories"
	"net/http"

	"github.com/go-playground/validator/v10"
	"github.com/labstack/echo/v4"
)

type station struct {
	Data interface{} `json:"stations"`
}

type handlerStations struct {
	StationRepository repositories.StationRepository
}

func HandlerStations(StationRepository repositories.StationRepository) *handlerStations {
	return &handlerStations{StationRepository}
}

func (h *handlerStations) FindStation(c echo.Context) error {
	stations, err := h.StationRepository.FindStation()
	if err != nil {
		return c.JSON(http.StatusBadRequest, resultdto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}

	return c.JSON(http.StatusOK, resultdto.SuccesResult{Status: "Success", Data: station{Data: stations}})
}

func (h *handlerStations) CreateStation(c echo.Context) error {
	request := new(stationdto.CreateStation)
	if err := c.Bind(request); err != nil {
		return c.JSON(http.StatusBadRequest, resultdto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}

	validation := validator.New()
	err := validation.Struct(request)
	if err != nil {
		return c.JSON(http.StatusBadRequest, resultdto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}

	stations := models.Station{
		Name: request.Name,
	}

	data, err := h.StationRepository.CreateStation(stations)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, resultdto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()})
	}

	return c.JSON(http.StatusOK, resultdto.SuccesResult{Status: "Success", Data: station{Data: data}})
}
