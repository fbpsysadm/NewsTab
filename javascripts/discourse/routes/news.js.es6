import Route from "@ember/routing/route";
import { ajax } from "discourse/lib/ajax";

export default Route.extend({
  setupController(controller) {
    // Fake HTML content for demonstration
    controller.set("newsHtml", `
      <h2>Latest News</h2>
      <ul>
        <li><a href='https://news.example.com/1'>News Item 1</a></li>
        <li><a href='https://news.example.com/2'>News Item 2</a></li>
        <li><a href='https://news.example.com/3'>News Item 3</a></li>
      </ul>
    `);
  }
});