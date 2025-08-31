import { ajax } from "discourse/lib/ajax";

export default {
  name: "news-tab",
  initialize(container) {
    const application = container.lookup("controller:application");
    application.addTab("news", {
      title: "News",
      route: "newsTab",
      component: "news-tab"
    });
  }
};
