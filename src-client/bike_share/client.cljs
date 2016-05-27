(ns bike-share.client
  (:require [reagent.core :as reagent]
            [secretary.core :as secretary]
            [pushy.core :as pushy]
            [bike-share.core :as core])
  (:import goog.History))

(enable-console-print!)

(reagent/render-component [core/app-view] (.getElementById js/document "app"))

(pushy/push-state! secretary/dispatch!
                   (fn [x] (when (secretary/locate-route x) x)))
