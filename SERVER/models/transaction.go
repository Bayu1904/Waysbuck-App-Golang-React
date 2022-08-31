package models

type Transaction struct {
	ID     int    `json:"id" gorm:"primary_key:auto_increment"`
	UserID int    `json:"user_id"`
	User   User   `json:"user"`
	Status string `json:"status"`
	Total  int64  `json:"total"`
	Carts  []Cart `json:"carts"`
}
