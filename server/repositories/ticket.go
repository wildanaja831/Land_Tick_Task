package repositories

import (
	"Task-Landtick-Golang/models"

	"gorm.io/gorm"
)

type TicketRepository interface {
	FindTicket() ([]models.Ticket, error)
	CreateTicket(tickets models.Ticket) (models.Ticket, error)
	SearchTicket(date string, startStationID, endStationID, qty int) ([]models.Ticket, error)
	GetTicket(ID int) (models.Ticket, error)
	GetMyTicket(ID int) ([]models.Ticket, error)
}

func RepositoryTicket(db *gorm.DB) *repository {
	return &repository{db}
}

func (r *repository) FindTicket() ([]models.Ticket, error) {
	var tickets []models.Ticket
	err := r.db.Preload("StartStation").Preload("DestinationStation").Preload("User").Find(&tickets).Error

	return tickets, err
}

func (r *repository) CreateTicket(tickets models.Ticket) (models.Ticket, error) {
	err := r.db.Create(&tickets).Error

	return tickets, err
}

func (r *repository) SearchTicket(date string, startStationsID, endStationID, qty int) ([]models.Ticket, error) {
	var tickets []models.Ticket
	err := r.db.Where("start_date=? AND start_station_id=? AND destination_station_id 6nhn=? AND qty >= ?", date, startStationsID, endStationID, qty).Preload("StartStation").Preload("DestinationStation").Preload("User").Find(&tickets).Error

	return tickets, err
}

func (r *repository) GetTicket(ID int) (models.Ticket, error) {
	var tickets models.Ticket
	err := r.db.Preload("StartStation").Preload("DestinationStation").First(&tickets, ID).Error

	return tickets, err
}

func (r *repository) GetMyTicket(ID int) ([]models.Ticket, error) {
	var tickets []models.Ticket
	err := r.db.Where("user_id=?", ID).Preload("StartStation").Preload("DestinationStation").Preload("User").Find(&tickets).Error

	return tickets, err
}
