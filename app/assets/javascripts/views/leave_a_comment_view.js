Blog.LeaveACommentView = Ember.View.extend({

  click: function() {
    this.get('controller').set('commentFormUntriggered', false);
  }

});
