Blog.Router.reopen({
	rootURL: '/',
	location: 'history'
});

Blog.EntriesRoute = Ember.Route.extend({
	activate: function() {
		window.scrollTo(0,0);
	}
});

Blog.Router.map(function() {
	this.resource('entries', function() {
		this.resource('entry', function() {
			this.route('show');
		});
	});
});

Blog.Router.map(function() {
	this.resource('comments', function() {
		this.route('index');
	});
});
