///<reference types="cypress" />

const { defineConfig } = require("cypress");
const { isFileExist, findFiles } = require('cy-verify-downloads');


module.exports = defineConfig({

  retries: {
    runMode:0,
    openMode: 1,
  },

  e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
            on('task', { isFileExist, findFiles });          
          },
       },

  projectId: "mthfgn",
  chromeWebSecurity:false,
  defaultCommandTimeout:6000,
  pageLoadTimeout:50000,
  execTimeout:6000,
  video:false,  
})





