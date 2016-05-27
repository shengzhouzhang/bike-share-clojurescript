(ns bike-share-clojurescript.components.Header
  (:require [reagent.core :as reagent]))

(defn header [title]
  [:div [:h2 {:class "title"} title]])
