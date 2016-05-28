(defproject bike-share "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url  "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.8.51"]
                 [reagent "0.6.0-alpha"]
                 [re-frame "0.7.0"]
                 [bidi "2.0.9"]
                 [kibu/pushy "0.3.6"]
                 [cljs-ajax "0.5.5"]]

  :plugins [[lein-cljsbuild "1.1.3"]
            [lein-less "1.7.3"]]

  :clean-targets ^{:protect false} ["resources"]

  :less {:source-paths ["src-styles"]
         :target-path  "resources/compiled/css"}

  :cljsbuild {
              :builds [{:id           "server"
                        :source-paths ["src-shared" "src-server"]
                        :compiler     {
                                       :main          bike-share.server
                                       :output-to     "resources/compiled/js/server-side/server.js"
                                       :output-dir    "resources/compiled/js/server-side"
                                       :target        :nodejs
                                       :optimizations :none
                                       :source-map    true}}
                       {:id           "client"
                        :source-paths ["src-shared" "src-client"]
                        :compiler     {
                                       :output-to     "resources/compiled/js/client-side/client.js"
                                       :output-dir    "resources/compiled/js/client-side"
                                       :optimizations :none
                                       :source-map    true}}]}

  :hooks [leiningen.cljsbuild])
