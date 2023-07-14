package repositories

import (
	models "Task-Landtick-Golang/models"

	"gorm.io/gorm"
)

type StationRepository interface {
	FindStation() ([]models.Station, error)
	CreateStation(station models.Station) (models.Station, error)
}

func RepositoryStation(db *gorm.DB) *repository {
	return &repository{db}
}

func (r *repository) FindStation() ([]models.Station, error) {
	var stations []models.Station
	err := r.db.Find(&stations).Error

	return stations, err
}

func (r *repository) CreateStation(station models.Station) (models.Station, error) {
	err := r.db.Create(&station).Error

	return station, err
}
