(ns bike-share.server
  (:require [cljs.nodejs :as nodejs]
            [bidi.bidi :as bidi]
            [bike-share.site :as site]
            [bike-share.core :as core]
            [bike-share.routes :as routes]))

(nodejs/enable-util-print!)

;the server side doesn't have history, so we want to make sure current-page is populated
(defn server-dispatch! [path]
  (core/set-page! (bidi/match-route routes/app-routes path)))

;TODO: should handle error pages
(defn handle-request [req res]
  (let [path (.-path req)]
    (if (bidi/match-route bike-share.routes/app-routes path)
      (do (server-dispatch! path)
          (.send res (site/render-page path)))
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
