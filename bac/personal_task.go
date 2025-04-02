package bac

import "time"

type Personal_task struct {
	Id          string    `json:"id"`
	Title       string    `json:"title"`
	Description string    `json:"description"`
	Deadline    time.Time `json:"deadline"`
	Is_done     bool      `json:"is_done"`
	Is_passed   bool      `json:"is_passed"`
	Created_at  string    `json:"created_at"`
	User_ID     int       `json:"user_id"`
}
