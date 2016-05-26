(ns bike_share_clojurescript.repositories.request
  (:require [ajax.core :refer [GET]]
            [cognitect.transit :as transit]))

(defn fetchStationsHandler [response]
  (get response "data")
)


(defn fetchStations []
  (GET "http://localhost:8000/data.json"
    {
      :handler fetchStationsHandler
      :response-format :json
    }
  )
)
