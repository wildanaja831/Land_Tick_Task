package models

import "time"

type Ticket struct {
	ID                   int                `json:"id"`
	NameTrain            string             `json:"name_train" gorm:"type: varchar(255)"`
	TypeTrain            string             `json:"type_train" gorm:"type: varchar(255)"`
	StartDate            string             `json:"start_date" gorm:"type: varchar(255)"`
	StartStationID       int                `json:"start_station_id"`
	StartStation         Station            `json:"start_station" gorm:"foreignKey:StartStationID"`
	StartTime            string             `json:"start_time" gorm:"type: varchar(255)"`
	DestinationStationID int                `json:"destination_station_id"`
	DestinationStation   Station            `json:"destination_station" gorm:"foreignKey:DestinationStationID"`
	ArrivalTime          string             `json:"arrival_time" gorm:"type: varchar(255)"`
	Price                int                `json:"price" gorm:"type : int"`
	Qty                  int                `json:"-" gorm:"type : int"`
	UserID               int                `json:"-" form:"user_id"`
	User                 UserTicketResponse `json:"user" gorm:"foreignKey:UserID"`
	CreatedAt            time.Time          `json:"-"`
	UpdateAt             time.Time          `json:"-"`
}

type TicketTransactionResponse struct {
	ID                   int     `json:"-"`
	NameTrain            string  `json:"name_train" gorm:"type: varchar(255)"`
	TypeTrain            string  `json:"type_train" gorm:"type: varchar(255)"`
	StartDate            string  `json:"start_date" gorm:"type: varchar(255)"`
	StartStationID       int     `json:"start_station_id"`
	StartStation         Station `json:"start_station" gorm:"foreignKey:StartStationID"`
	StartTime            string  `json:"start_time" gorm:"type: varchar(255)"`
	DestinationStationID int     `json:"destination_station_id"`
	DestinationStation   Station `json:"destination_station" gorm:"foreignKey:DestinationStationID"`
	ArrivalTime          string  `json:"arrival_time" gorm:"type: varchar(255)"`
	Price                int     `json:"price" gorm:"type : int"`
}

func (TicketTransactionResponse) TableName() string {
	return "tickets"
}
