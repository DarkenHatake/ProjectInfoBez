package main

import (
	ProjectInfoBez "github.com/DarkenHatake/ProjectInfoBez"
	"github.com/DarkenHatake/ProjectInfoBez/pkg/handler"
	"github.com/DarkenHatake/ProjectInfoBez/pkg/repository"
	"github.com/DarkenHatake/ProjectInfoBez/pkg/service"
	"github.com/spf13/viper"

	"log"
)

func main() {
	if err := initConfig(); err != nil {
		log.Fatalf("error initialization configs: %s", err.Error())
	}
	//оюъявление зависимостей в нужном порядке
	repos := repository.NewRepository()
	services := service.NewService(repos)
	handlers := handler.NewHandler(services)

	srv := new(ProjectInfoBez.Server)
	if err := srv.Run(viper.GetString("8000"), handlers.InitRoutes()); err != nil {
		log.Fatalf("error occured while running http server: %s", err.Error())
	}
}

func initConfig() error {
	viper.AddConfigPath("configs")
	viper.SetConfigName("config")
	return viper.ReadInConfig()
}
