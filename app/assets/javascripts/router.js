Blog.Router.reopen({
	rootURL: '/',
	location: 'history'
});

Blog.BlogIndexRoute = Ember.Route.extend({
	activate: function() {
		window.scrollTo(0,0);
	}
});

Blog.Router.map(function() {
	this.resource('blog', function() {
		this.route('index');
	});
});

Blog.Router.map(function() {
	this.resource('comments', function() {
		this.route('index');
	});
});


