package models

import "time"

type User struct {
	ID        int       `json:"id"`
	Fullname  string    `json:"fullname" gorm:"type: varchar(255)"`
	Username  string    `json:"username" gorm:"type: varchar(255)"`
	Email     string    `json:"email" gorm:"type: varchar(255)"`
	Password  string    `json:"password" gorm:"type: varchar(255)"`
	NomorHp   int       `json:"no_hp" gorm:"type: int"`
	CreatedAt time.Time `json:"-"`
	UpdateAt  time.Time `json:"-"`
}

type UserTicketResponse struct {
	ID       int    `json:"-"`
	Fullname string `json:"name"`
	NomorHp  int    `json:"no_hp"`
	Email    string `json:"email"`
}

type UserTransactionResponse struct {
	ID       int    `json:"-"`
	Fullname string `json:"name"`
	Email    string `json:"email"`
	NomorHp  int    `json:"no_hp"`
}

func (UserTicketResponse) TableName() string {
	return "users"
}

func (UserTransactionResponse) TableName() string {
	return "users"
}
