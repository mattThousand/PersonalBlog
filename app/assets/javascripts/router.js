Blog.Router.reopen({
	rootURL: '/',
	location: 'history'
});

Blog.Router.map(function() {
	this.resource('entries', function() {
		this.resource('entry', {path: ':entry_id'}, function(){
      this.resource('comments', function(){
      	this.route('new');
        this.resource('comment', {path: ':comment_id'}, function() {
          this.route('new');
        });
      });
    });
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

Blog.EntryRoute = Ember.Route.extend({
  model: function(params) {
    return this.get('store').find('entry', params.entry_id);
  }
});

Blog.CommentsRoute = Ember.Route.extend({
  model: function() {
    return this.modelFor('comments');
  }
});

Blog.CommentsNewRoute = Ember.Route.extend({
  model: function(){
    return this.get('store').createRecord('comment');
  },
  setupController: function(controller, model) {
    return this.controller.set('content', model);
  }
});

Blog.CommentRoute = Ember.Route.extend({
  model: function(params) {
    var comm = this.get('store').find('comment', params.comment_id);
    this.get('store').filter('comment', function(comment){
      return comment.get('entry_id') == comm.entry_id;
    });
  }
});
