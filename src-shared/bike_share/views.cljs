(ns bike-share.views
  (:require [reagent.core :refer [atom]]
            [bike-share.routes :as routes]
            [re-frame.core :as re-frame]))

(defn navigation []
  [:div [:a {:href (routes/url-for :home)} "Home Page"]
   [:span {:style {:padding "5px"}}]
   [:a {:href (routes/url-for :about)} "About"]
   [:span {:style {:padding "5px"}}]])

(defn home-panel []
  [:div [navigation] [:h1 "Home Page"]])

(defn about-panel []
  [:div [navigation] [:h1 "About Page"]])

(defmulti panels identity)
(defmethod panels :home [] [home-panel])
(defmethod panels :about [] [about-panel])

(defn main-panel []
  (let [active-panel (re-frame/subscribe [:active-panel])]
    (fn []
      (panels @active-panel))))

(defn app-view []
  (let [ready? (re-frame/subscribe [:initialised?])]
    (fn []
      (if @ready?
        [main-panel]
        [:div "Initialising ..."]))))

