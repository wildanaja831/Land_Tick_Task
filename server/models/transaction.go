package models

type Transaction struct {
	ID       int                       `json:"id"`
	UserID   int                       `json:"-" form:"user_id"`
	User     UserTransactionResponse   `json:"user" gorm:"foreignKey:UserID"`
	TicketID int                       `json:"-" form:"ticket_id"`
	Ticket   TicketTransactionResponse `json:"ticket" gorm:"foreignKey:TicketID"`
	Status   string                    `json:"Status" form:"status" gorm:"default:'Pending'"`
}
