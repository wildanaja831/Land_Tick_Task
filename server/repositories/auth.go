package repositories

import (
	"Task-Landtick-Golang/models"
)

type AuthRepository interface {
	Login(username string) (models.User, error)
	Register(users models.User) (models.User, error)
	CheckAuth(ID int) (models.User, error)
}

func (r *repository) Login(username string) (models.User, error) {
	var user models.User
	err := r.db.First(&user, "username=?", username).Error

	return user, err
}

func (r *repository) Register(users models.User) (models.User, error) {
	err := r.db.Create(&users).Error

	return users, err
}

func (r *repository) CheckAuth(ID int) (models.User, error) {
	var users models.User
	err := r.db.First(&users, ID).Error

	return users, err
}
