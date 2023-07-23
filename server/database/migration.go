package database

import (
	"Task-Landtick-Golang/models"
	"Task-Landtick-Golang/pkg/mysql"
	"fmt"
)

func RunMigration() {
	err := mysql.DB.AutoMigrate(
		&models.User{},
		&models.Station{},
		&models.Ticket{},
		&models.Transaction{},
	)

	if err != nil {
		fmt.Println(err)
		panic("Migration Failed!!")
	}

	fmt.Println("Migration Succes!!")
}
