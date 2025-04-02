package bac

type Subject struct {
	Id         string `json:"id"`
	Title      string `json:"title"`
	Created_at string `json:"created_at"`
	User_ID    int    `json:"user_id"`
}
