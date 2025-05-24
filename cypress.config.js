const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    pageLoadTimeout:30000,
    defaultCommandTimeout:30000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
