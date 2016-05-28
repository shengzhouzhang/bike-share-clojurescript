(ns bike-share.client
  (:require [reagent.core :as reagent]
            [bidi.bidi :as bidi]
            [pushy.core :as pushy]
            [bike-share.core :as core]
            [bike-share.routes :as routes])
  (:import goog.History))

(enable-console-print!)

(pushy/start! (pushy/pushy core/set-page! (partial bidi/match-route routes/app-routes)))
(reagent/render-component [core/app-view] (.getElementById js/document "app"))

