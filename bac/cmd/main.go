package main

import (
	ProjectInfoBez "github.com/DarkenHatake/ProjectInfoBez"
	"github.com/DarkenHatake/ProjectInfoBez/pkg/handler"
	"github.com/DarkenHatake/ProjectInfoBez/pkg/repository"
	"github.com/DarkenHatake/ProjectInfoBez/pkg/service"

	"log"
)

func main() {
	//оюъявление зависимостей в нужном порядке
	repos := repository.NewRepository()
	services := service.NewService(repos)
	handlers := handler.NewHandler(services)

	srv := new(ProjectInfoBez.Server)
	if err := srv.Run(":8000", handlers.InitRoutes()); err != nil {
		log.Fatalf("error occured while running http server: %s", err.Error())
	}
}
