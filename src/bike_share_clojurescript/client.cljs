(ns bike_share_clojurescript.client
  (:require [reagent.core :as reagent]
            [bike_share_clojurescript.components.App :refer (app)]))

(reagent/render [app] (js/document.querySelector "#app-container"))
