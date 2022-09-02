///<reference types="cypress" />

const { defineConfig } = require("cypress");
module.exports = defineConfig({

  retries: {
    runMode: 2,
    openMode: 1,
  },

  e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
          
          },
       },

  projectId: "mthfgn",
  chromeWebSecurity:false,
  defaultCommandTimeout:6000,
  pageLoadTimeout:50000,
  execTimeout:6000,
  video:false,  
})



