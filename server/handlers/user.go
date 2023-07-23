package handlers

import (
	resultdto "Task-Landtick-Golang/dto/result"
	usersdto "Task-Landtick-Golang/dto/users"
	models "Task-Landtick-Golang/models"
	"Task-Landtick-Golang/repositories"
	"net/http"
	"strconv"

	"github.com/labstack/echo/v4"
)

type user struct {
	Data interface{} `json:"users"`
}

type handler struct {
	UserRepository repositories.UserRepository
}

func HandlerUsers(UserRepository repositories.UserRepository) *handler {
	return &handler{UserRepository}
}

func (h *handler) FindUsers(c echo.Context) error {
	users, err := h.UserRepository.FindUsers()
	if err != nil {
		return c.JSON(http.StatusBadRequest, resultdto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}

	return c.JSON(http.StatusOK, resultdto.SuccesResult{Status: "Success", Data: user{Data: convertMultipleUserResponse(users)}})
}

func (h *handler) GetUserById(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("id"))
	users, err := h.UserRepository.GetUserById(id)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, resultdto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()})
	}

	return c.JSON(http.StatusOK, resultdto.SuccesResult{Status: "Success", Data: user{Data: convertResponse(users)}})
}

func convertResponse(u models.User) usersdto.UserResponse {
	return usersdto.UserResponse{
		ID:       u.ID,
		Fullname: u.Fullname,
		Username: u.Username,
		Email:    u.Email,
	}
}

func convertMultipleUserResponse(users []models.User) []usersdto.UserResponse {
	var userResponse []usersdto.UserResponse

	for _, user := range users {
		userResponse = append(userResponse, convertResponse(user))
	}

	return userResponse
}
