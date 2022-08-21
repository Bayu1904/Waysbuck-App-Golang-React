package models

type Transaction struct {
	ID     int64  `json:"id"`
	UserID int    `json:"user_id"`
	User   User   `json:"user"`
	Status string `json:"status"`
	Total  int    `json:"total"`
	Carts  []Cart `json:"carts"`
}
