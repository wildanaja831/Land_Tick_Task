package stationdto

type CreateStation struct {
	Name string `json:"name" form:"name" validator:"required"`
}

type StationResponse struct {
	ID   int    `json:"id"`
	Name string `json:"name"`
}
