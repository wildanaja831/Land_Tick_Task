package handlers

import (
	authdto "Task-Landtick-Golang/dto/auth"
	resultdto "Task-Landtick-Golang/dto/result"
	"Task-Landtick-Golang/models"
	"Task-Landtick-Golang/pkg/bcrypt"
	jwtToken "Task-Landtick-Golang/pkg/jwt"
	"Task-Landtick-Golang/repositories"
	"log"
	"net/http"
	"time"

	"github.com/go-playground/validator/v10"
	"github.com/golang-jwt/jwt/v4"
	"github.com/labstack/echo/v4"
)

type registery struct {
	Data interface{} `json:"user"`
}

type handlerAuth struct {
	AuthRepository repositories.AuthRepository
}

func HandlerAuth(AuthRepository repositories.AuthRepository) *handlerAuth {
	return &handlerAuth{AuthRepository}
}

func (h *handlerAuth) Register(c echo.Context) error {
	request := new(authdto.RegisterRequest)
	if err := c.Bind(request); err != nil {
		return c.JSON(http.StatusBadRequest, resultdto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}

	validation := validator.New()
	err := validation.Struct(request)
	if err != nil {
		return c.JSON(http.StatusBadRequest, resultdto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}

	password, err := bcrypt.HashingPassword(request.Password)
	if err != nil {
		return c.JSON(http.StatusBadRequest, resultdto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}

	register := models.User{
		Fullname: request.Fullname,
		Username: request.Username,
		Email:    request.Email,
		Password: password,
	}

	data, err := h.AuthRepository.Register(register)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, resultdto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()})
	}

	return c.JSON(http.StatusOK, resultdto.SuccesResult{Status: "Success", Data: registery{Data: convertRegisterResponse(data)}})
}

func (h *handlerAuth) Login(c echo.Context) error {
	request := new(authdto.LoginRequest)
	if err := c.Bind(request); err != nil {
		return c.JSON(http.StatusBadRequest, resultdto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}

	user := models.User{
		Username: request.Username,
		Password: request.Password,
	}

	user, err := h.AuthRepository.Login(user.Username)
	if err != nil {
		return c.JSON(http.StatusBadRequest, resultdto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}

	isValid := bcrypt.CheckPasswordHash(request.Password, user.Password)
	if !isValid {
		return c.JSON(http.StatusBadRequest, resultdto.ErrorResult{Code: http.StatusBadRequest, Message: "Wrong Password"})
	}

	claims := jwt.MapClaims{}
	claims["id"] = user.ID
	claims["exp"] = time.Now().Add(time.Hour * 2).Unix()

	token, errGenerateToken := jwtToken.GenerateToken(&claims)
	if errGenerateToken != nil {
		log.Println(errGenerateToken)
		return echo.NewHTTPError(http.StatusUnauthorized)
	}

	loginResponse := authdto.LoginResponse{
		Fullname: user.Fullname,
		Username: user.Username,
		Email:    user.Email,
		Token:    token,
	}

	return c.JSON(http.StatusOK, resultdto.SuccesResult{Status: "Success", Data: loginResponse})
}

func convertRegisterResponse(u models.User) authdto.RegisterRequest {
	return authdto.RegisterRequest{
		Fullname: u.Fullname,
		Username: u.Username,
		Email:    u.Email,
		Password: u.Password,
	}
}
