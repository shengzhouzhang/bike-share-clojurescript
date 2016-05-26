(ns bike_share_clojurescript.components.Station
  (:require [reagent.core :as reagent]))

(defn station [name numberOfBikes numberOfEmptyDockers]
  ^{:key name}
  [:div {:class "station"}
    [:span {:class "name"} name]
    [:span {:class "number-of-bikes"} numberOfBikes]
    [:span {:class "number-of-dockers"} numberOfEmptyDockers]
  ]
)
