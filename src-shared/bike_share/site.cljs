(ns bike-share.site
  (:require [bike-share.views :refer [app-view]]
            [bike-share.handlers :refer [register-handlers!]]
            [bike-share.subs :refer [register-subs!]]
            [re-frame.core :as re-frame]))

(enable-console-print!)

(defn template [{:keys [body]}]
  [:html
   [:head
    [:meta {:charset "utf-8"}]
    [:meta {:name    "viewport"
            :content "width=device-width, initial-scale=1.0"}]
    [:link {:href "css/styles.css" :rel "stylesheet" :type "text/css"}]]
   [:body
    [:div#app [body]]
    [:script {:type "text/javascript" :src "/js/goog/base.js"}]
    [:script {:type "text/javascript" :src "/js/client.js"}]
    [:script {:type                    "text/javascript"
              :dangerouslySetInnerHTML {:__html "goog.require('bike_share.client');"}}]]])

(defn initialise-app! []
  (register-handlers!)
  (register-subs!)
  (re-frame/dispatch-sync [:initialise-db]))
