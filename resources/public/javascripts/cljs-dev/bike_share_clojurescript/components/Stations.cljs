(ns bike_share_clojurescript.components.Stations
  (:require [reagent.core :as reagent]
            [bike_share_clojurescript.components.Station :refer (station)]))

(defn stations [items]
  [:div {:class "station-list"}
    (for [item items]
      (station
        (:name item)
        (:numberOfBikes item)
        (:numberOfEmptyDockers item)
      )
    )
  ]
)
