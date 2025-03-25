package ProjectInfoBez

import "time"

type Subject_Task struct {
	Id          string    `json:"id"`
	Title       string    `json:"title"`
	Description string    `json:"description"`
	Created_At  string    `json:"created_At"`
	Deadline    time.Time `json:"deadline"`
	Is_done     bool      `json:"is_done"`
	Is_passed   bool      `json:"is_passed"`
}
