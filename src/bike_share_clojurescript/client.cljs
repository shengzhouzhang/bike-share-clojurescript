(ns bike-share-clojurescript.client
  (:require [reagent.core :as reagent]
            [bike-share-clojurescript.components.App :refer (app)]))

(reagent/render [app] (js/document.querySelector "#app-container"))
