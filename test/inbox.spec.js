"use strict";

var Inbox = require('../src/inbox');

describe("User", function () {
	beforeEach(function() {
		var window = {};
		window.window = {};
		window.window.BT_WorkerInitMessage = '{"110":{"4":{"36376563":{"1":{"3":{"6":0,"8":1,"9":1},"5":"2688f65b43","7":7,"8":"gmail_bigtop_web_150806.12_p1","9":7,"10":1,"11":"","13":"America/Sao_Paulo","14":0},"2":"randalmaia@gmail.com","3":100064029,"9":1,"11":3000,"12":"/u/0","14":"AKwhgQq6KWgTJpJ2C-fxpUdfF9f5HuotZA:1439310208833","16":1,"18":"","25":"https://inbox.google.com","30":[{"1":{"1":{"1":"initialSettingsQuery","2":0},"6":["S"],"23":["settings"],"27":{"2":2147483647}},"6":200},{"1":{"1":{"1":"initialClustersQuery","2":0},"6":["S","D"],"23":["clusters"],"27":{"2":2147483647}},"6":200},{"1":{"1":{"1":"inboxAndTasks","2":0},"6":["S","D"],"23":["gmail"],"27":{"2":200}},"3":"01440519808/9223372036854775807","4":"00000000000/0000000000000000000","6":50,"8":1},{"1":{"1":{"1":"initialContactsQuery","2":0},"6":["S","D"],"23":["contacts"],"27":{"2":5000}},"6":1000},{"1":{"1":{"1":"initialLocationAliasesQuery","2":0},"6":["S"],"23":["location_aliases"],"27":{"2":2147483647}},"6":200}],"31":"","33":{"1":[{"1":"58","2":3,"6":10000},{"1":"19","2":3,"6":150},{"1":"35","2":3,"6":60000},{"1":"17","2":0,"5":0},{"1":"36","2":0,"5":0},{"1":"18","2":0,"5":1},{"1":"33","2":3,"6":10},{"1":"15","2":0,"5":1},{"1":"34","2":3,"6":60000},{"1":"13","2":0,"5":1},{"1":"14","2":3,"6":10000},{"1":"11","2":0,"5":1},{"1":"37","2":0,"5":0},{"1":"38","2":3,"6":100},{"1":"12","2":0,"5":0},{"1":"21","2":3,"6":6},{"1":"20","2":3,"6":0},{"1":"45","2":0,"5":1},{"1":"46","2":0,"5":0},{"1":"24","2":0,"5":0},{"1":"27","2":0,"5":0},{"1":"2","2":2,"4":""},{"1":"1","2":0,"5":1},{"1":"30","2":0,"5":1},{"1":"7","2":0,"5":0},{"1":"5","2":0,"5":1},{"1":"9","2":0,"5":1},{"1":"53","2":2,"4":"America/Sao_Paulo"},{"1":"8","2":0,"5":1},{"1":"50","2":0,"5":1}]},"34":"28932b3a06b51b93"}}}}';
	});

	it("get user email", function () {
		var inbox = new Inbox();
		console.log('##' + inbox);
		console.log('####' + window.window.BT_WorkerInitMessage);
		var email = inbox.getEmail();
		expect(email).toBe('randalmaia@gmail.com');
	});
});