(ns bike-share.server
  (:require [cljs.nodejs :as nodejs]
            [bidi.bidi :as bidi]
            [bike-share.site :refer [initialise-app! template]]
            [bike-share.views :refer [app-view]]
            [bike-share.routes :as routes]
            [bike-share.handlers :refer [register-handlers!]]
            [bike-share.subs :refer [register-subs!]]
            [reagent.core :as reagent]))

(nodejs/enable-util-print!)

(defn render! [path]
  (initialise-app!)
  (routes/dispatch-url! path)
  (reagent/render-to-static-markup [template {:body app-view}]))

(defn handle-request [req res]
  (let [path (.-path req)]
    (if (bidi/match-route routes/app-routes path)
      (.send res (render! path))
      (.sendStatus res 404))))

(def express (nodejs/require "express"))
(def serve-static (nodejs/require "serve-static"))

(defn -main []
  (let [app (express)]
    (.use app "/api" (serve-static "data"))
    (.use app "/js" (serve-static "resources/compiled/js/client-side"))
    (.use app "/css" (serve-static "resources/compiled/css"))
    (.use app "/img" (serve-static "resources/img"))
    (.get app "/*" handle-request)
    (.listen app 3000 (fn []
                        (println "Server started on port 3000")))))

(set! *main-cli-fn* -main)
