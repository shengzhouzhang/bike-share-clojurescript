(ns bike_share_clojurescript.App
  (:require [reagent.core :as reagent]
            [bike_share_clojurescript.components.Header :refer (header)]))

(defonce app-props
  (reagent/atom {:title "bike share"}))

(defn render []
  [:div {:class "container"}
   [header (:title @app-props)]])
