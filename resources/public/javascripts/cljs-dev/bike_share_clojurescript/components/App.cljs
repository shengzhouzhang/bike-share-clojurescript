(ns bike_share_clojurescript.components.App
  (:require [reagent.core :as reagent]
            [bike_share_clojurescript.components.Header :refer (header)]))

(defonce app-props
  (reagent/atom {:title "bike share"}))

(defn app []
  [:div {:class "container"}
   [header (:title @app-props)]])
