// Load dependecies
var assert = require('chai').assert,
    test = require('selenium-webdriver/testing'),
    webdriver = require('selenium-webdriver');

// Our test
test.describe('Test', function () {
    test.it('Title should be "Manju Paul"', function () {
// Set timeout to 10 seconds
        this.timeout(10000);

// Get driver from chrome ,firefox, edge or ie
// var driver = new webdriver.Builder().
// withCapabilities(webdriver.Capabilities.firefox()).
// build();
// var driver = new webdriver.Builder().
// withCapabilities(webdriver.Capabilities.edge()).
// build();
// var driver = new webdriver.Builder().
// withCapabilities(webdriver.Capabilities.ie()).
// build();
        var driver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();

// Go to URL
        driver.get('https://manjupaul.github.io/');

// Find title and assert
        driver.executeScript('return document.title').then(function(return_value) {
            assert.equal(return_value, 'Manju Paul | A colleciton of my notes')
        });

// Quit webdriver
        driver.quit();
    });
});