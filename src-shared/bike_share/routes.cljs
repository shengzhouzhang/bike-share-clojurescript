(ns bike-share.routes
  (:require [bidi.bidi :as bidi]
            [re-frame.core :as re-frame]))

(def app-routes
  ["/" {""      :home
        "about" :about}])

(def url-for (partial bidi/path-for app-routes))

(defn parse-url [url]
  (bidi/match-route app-routes url))

(defn dispatch-route! [matched-route]
  (let [panel-name (:handler matched-route)]
    (re-frame/dispatch [:set-active-panel panel-name])))

(defn dispatch-url! [url]
  (-> url parse-url dispatch-route!))