/* jshint node: true */
"use strict";

module.exports = {
  name: "ember-quill",
  options: {
    nodeAssets: {
      quill: {
        import: [
          "dist/quill.js",
          "dist/quill.snow.css"
        ]
      }
    }
  },
  isDevelopingAddon: function() {
    return true;
  }
};
