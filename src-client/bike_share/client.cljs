(ns bike-share.client
  (:require [reagent.core :as reagent]
            [bidi.bidi :as bidi]
            [pushy.core :as pushy]
            [bike-share.routes :as routes]
            [bike-share.site :refer [initialise-app!]]
            [bike-share.views :refer [app-view]])
  (:import goog.History))

(enable-console-print!)

(defn render! []
  (initialise-app!)
  (pushy/start! (pushy/pushy routes/dispatch-route! (partial bidi/match-route routes/app-routes)))
  (reagent/render-component [app-view] (.getElementById js/document "app")))

(render!)




