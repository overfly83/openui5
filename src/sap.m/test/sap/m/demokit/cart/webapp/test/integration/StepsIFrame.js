sap.ui.define([
	"sap/ui/test/gherkin/StepDefinitions",
	"sap/ui/demo/cart/test/arrangement/iframe/Arrangement"
], function(StepDefinitions, Arrangement) {
	"use strict";
	Arrangement = new Arrangement();
	var Steps = StepDefinitions.extend("GherkinWithOPA5.Steps", {
		init: function() {
			this.register(/^I start my App with the hash "(.*)" (.*)/i,
				function(sHash, sStorage) {
					var bKeepStorage = sStorage.indexOf("keeping") >= 0;
					Arrangement.iStartMyApp(bKeepStorage, {
						hash: sHash
					});
				});
		}
	});

	return Steps;

});