package repositories

import (
	"Task-Landtick-Golang/models"

	"gorm.io/gorm"
)

type TransactionRepository interface {
	FindTransaction() ([]models.Transaction, error)
	GetTransaction(ID int) (models.Transaction, error)
	CreateTransaction(transactions models.Transaction) (models.Transaction, error)
}

func RepositoryTransaction(db *gorm.DB) *repository {
	return &repository{db}
}

func (r *repository) FindTransaction() ([]models.Transaction, error) {
	var transaction []models.Transaction
	err := r.db.Preload("User").Preload("Ticket").Preload("Ticket.StartStation").Preload("Ticket.DestinationStation").Find(&transaction).Error

	return transaction, err
}

func (r *repository) GetTransaction(ID int) (models.Transaction, error) {
	var transactions models.Transaction
	err := r.db.Preload("User").Preload("Ticket").Preload("Ticket.StartStation").Preload("Ticket.DestinationStation").First(&transactions, ID).Error

	return transactions, err
}

func (r *repository) CreateTransaction(transactions models.Transaction) (models.Transaction, error) {
	err := r.db.Create(&transactions).Where("user_id=? AND ticket_id=?", transactions.UserID, transactions.TicketID).Preload("User").Preload("Ticket").Preload("Ticket.StartStation").Preload("Ticket.DestinationStation").First(&transactions).Error

	return transactions, err
}
