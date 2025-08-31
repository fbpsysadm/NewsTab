import Component from "@ember/component";
import { ajax } from "discourse/lib/ajax";

export default Component.extend({
  newsHtml: null,
  didInsertElement() {
    this._super(...arguments);
    // ajax("https://example.com/news.html").then(html => {
    //   this.set("newsHtml", html);
    // });

    // Fake HTML content instead of loading from URL
    const fakeHtml = `
      <h2>Latest News</h2>
      <ul>
        <li><a href='https://news.example.com/1'>News Item 1</a></li>
        <li><a href='https://news.example.com/2'>News Item 2</a></li>
        <li><a href='https://news.example.com/3'>News Item 3</a></li>
      </ul>
    `;
    this.set("newsHtml", fakeHtml);
  }
});
