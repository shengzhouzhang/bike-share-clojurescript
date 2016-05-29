(ns bike-share.handlers
  (:require [re-frame.core :as re-frame]))

(defn initialise-db [_ _]
  {:initialised? false
   :active-panel nil})

(defn set-active-panel
  [app-state [_ active-panel]]
  (assoc app-state :active-panel active-panel))

(defn register-handlers! []

  (re-frame/register-handler :initialise-db initialise-db)

  (re-frame/register-handler :set-active-panel set-active-panel)

  )