Blog.CommentSubmissionView = Ember.View.extend({

  click: function() {
    this.set('parentView.controller.controllers.entry.commentFormUntriggered', true);
  }

});
