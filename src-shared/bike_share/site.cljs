(ns bike-share.site
  (:require [reagent.core :as reagent]
            [secretary.core :as secretary]
            [bike-share.core :as core]))

(enable-console-print!)

(defn template [{:keys [body]}]
  [:html
   [:head
    [:meta {:charset "utf-8"}]
    [:meta {:name    "viewport"
            :content "width=device-width, initial-scale=1.0"}]]
   [:body
    [:div#app [body]]
    [:script {:type "text/javascript" :src "goog/base.js"}]
    [:script {:type "text/javascript" :src "client.js"}]
    [:script {:type "text/javascript"
              :dangerouslySetInnerHTML {:__html "goog.require('bike_share.client');"}}]]])

(defn ^:export render-page [path]
  (reagent/render-to-static-markup (do
                                     (secretary/dispatch! path)
                                     [template {:body core/app-view}])))