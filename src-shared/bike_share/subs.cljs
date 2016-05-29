(ns bike-share.subs
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [re-frame.core :refer [register-sub]]
            [re-frame.core :as re-frame]))

(defn initialised? [db]
  (and (not (empty? db))
       (:active-panel db)))

(defn register-subs! []

  (re-frame/register-sub
    :initialised?
    (fn [db _]
      (reaction (initialised? @db))))

  (re-frame/register-sub
    :active-panel
    (fn [db _]
      (reaction (:active-panel @db))))

  )
