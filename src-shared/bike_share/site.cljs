(ns bike-share.site
  (:require [reagent.core :as reagent]
            [bike-share.core :as core]
            [bike-share.routes :as routes]))

(enable-console-print!)

(defn template [{:keys [body]}]
  [:html
   [:head
    [:meta {:charset "utf-8"}]
    [:meta {:name    "viewport"
            :content "width=device-width, initial-scale=1.0"}]]
   [:body
    [:div#app [body]]
    [:script {:type "text/javascript" :src "/static/goog/base.js"}]
    [:script {:type "text/javascript" :src "/static/client.js"}]
    [:script {:type                    "text/javascript"
              :dangerouslySetInnerHTML {:__html "goog.require('bike_share.client');"}}]]])

(defn ^:export render-page [path]
  (reagent/render-to-static-markup
    (do
      [template {:body core/app-view}])))