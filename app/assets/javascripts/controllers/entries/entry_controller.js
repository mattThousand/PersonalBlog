Blog.EntryController = Ember.ObjectController.extend({

  needs: ['commentsNew'],
  
	init: function(controller) {
    this.set('commentFormUntriggered', true);
		this._super();
	} 

});
