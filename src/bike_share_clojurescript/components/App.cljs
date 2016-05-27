(ns bike-share-clojurescript.components.App
  (:require [reagent.core :as reagent]
            [bike-share-clojurescript.components.Header :refer (header)]))

(defonce app-props
  (reagent/atom {:title "bike share"}))

(defn app []
  [:div {:class "container"}
   [header (:title @app-props)]])
