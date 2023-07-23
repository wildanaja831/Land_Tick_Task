package ticketsdto

import "Task-Landtick-Golang/models"

type CreateTicketRequest struct {
	NameTrain            string `json:"name_train"`
	TypeTrain            string `json:"type_train"`
	StartDate            string `json:"start_date"`
	StartStationID       string `json:"start_station_id"`
	StartTime            string `json:"start_time"`
	DestinationStationID string `json:"destination_station_id" `
	ArrivalTime          string `json:"arrival_time"`
	Price                string `json:"price"`
	Qty                  string `json:"qty"`
}

type CreateTicketResponse struct {
	NameTrain            string `json:"name_train"`
	TypeTrain            string `json:"type_train"`
	StartDate            string `json:"start_date"`
	StartStationID       int    `json:"start_station_id"`
	StartTime            string `json:"start_time"`
	DestinationStationID int    `json:"destination_station_id" `
	ArrivalTime          string `json:"arrival_time"`
	Price                int    `json:"price"`
	Qty                  int    `json:"qty"`
}

type AllTicketResponse struct {
	ID                 int            `json:"id"`
	NameTrain          string         `json:"name_train"`
	TypeTrain          string         `json:"type_train"`
	StartDate          string         `json:"start_date"`
	StartStation       models.Station `json:"start_station"`
	StartTime          string         `json:"start_time"`
	DestinationStation models.Station `json:"destination_station"`
	ArrivalTime        string         `json:"arrival_time"`
	Price              int            `json:"price"`
}
