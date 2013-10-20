Blog.Router.reopen({
	rootURL: '/',
	location: 'history'
});

Blog.Router.map(function() {
	this.resource('entries', function() {
		this.resource('entry', {path: ':entry_id'});
	});
});

Blog.Router.map(function() {
	this.resource('comments', function() {
		this.route('index');
	});
});


Blog.EntriesRoute = Ember.Route.extend({
	activate: function() {
		window.scrollTo(0,0);
	},
	model: function() {
		return this.get('store').findAll('entry');
	}
});



