(ns bike-share.server
  (:require [cljs.nodejs :as nodejs]
            [bike-share.site :as site]))

(nodejs/enable-util-print!)

(def express (nodejs/require "express"))
(def serve-static (nodejs/require "serve-static"))

(defn handle-request [req res]
  (.send res (site/render-page (.-path req))))

(defn -main []
  (let [app (express)]
    (.get app "/" handle-request)
    (.get app "/page-one" handle-request)
    (.use app (serve-static "data"))
    (.use app (serve-static "resources/public/js/client-side"))
    (.listen app 3000 (fn []
                        (println "Server started on port 3000")))))

(set! *main-cli-fn* -main)
