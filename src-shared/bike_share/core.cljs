(ns bike-share.core
  (:require [reagent.core :refer [atom]]))

(def current-page (atom nil))

(defn navigation []
  [:div [:a {:href "/"} "Home Page"]
   [:span {:style {:padding "5px"}}]
   [:a {:href "/page-one"} "Page One"]
   [:span {:style {:padding "5px"}}]])

(defn home-page []
  [:div [navigation] [:h1 "Home Page"]])

(defn page-one []
  [:div [navigation] [:h1 "Page One"]])

(defn app-view []
  [:div [@current-page]])

(defmulti set-page! :handler)

(defmethod set-page! :home-page [_]
  (reset! current-page home-page))

(defmethod set-page! :page-one [_]
  (reset! current-page page-one))
