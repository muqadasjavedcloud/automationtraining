const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    pageLoadTimeout:30000,
    defaultCommandTimeout:30000, // time out we add by ourself
    experimentalOriginDependencies:true, // we are adding it for visiting different link 
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
