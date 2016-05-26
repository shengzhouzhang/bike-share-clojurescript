(ns bike_share_clojurescript.components.App
  (:require [reagent.core :as reagent]
            [bike_share_clojurescript.components.Header :refer (header)]
            [bike_share_clojurescript.components.Stations :refer (stations)]))

(defonce app-props
  (reagent/atom {
    :title "bike share"
    :stations [
      {:name "station 1" :numberOfBikes 1 :numberOfEmptyDockers 3}
      {:name "station 2" :numberOfBikes 2 :numberOfEmptyDockers 4}
      {:name "station 3" :numberOfBikes 4 :numberOfEmptyDockers 5}
    ]
  }))

(defn app []
  [:div {:class "app-container"}
   [header (:title @app-props)]
   [stations (:stations @app-props)]])
