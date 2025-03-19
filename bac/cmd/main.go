package main

import (
	_ProjectInfoBez "github.com/DarkenHatake/-ProjectInfoBez"
	"log"
)

func main() {
	srv := new(_ProjectInfoBez.Server)
	srv.Run("8000")
	if err := srv.Run(":8000"); err != nil {
		log.Fatalf("error occured while running http server: %s", err.Error())
	}
}
