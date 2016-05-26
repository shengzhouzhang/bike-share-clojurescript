(ns bike_share_clojurescript.components.Header
  (:require [reagent.core :as reagent]))

(defn header [title]
  [:div {:class "header"}
    [:h2 {:class "title"} title]
  ]
)
