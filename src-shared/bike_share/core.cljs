(ns bike-share.core
  (:require [reagent.core :refer [atom]]
            [secretary.core :as secretary :refer-macros [defroute]]))

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

(secretary/set-config! :prefix "/")

(defroute "/" []
          (.log js/console "home page")
          (reset! current-page home-page))

(defroute "/page-one" []
          (.log js/console "page-one")
          (reset! current-page page-one))

; the server side doesn't have history, so we want to make sure current-page is populated
(reset! current-page home-page)