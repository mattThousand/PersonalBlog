Blog.CommentsController = Ember.ArrayController.extend({
  init: function(controller) {
    this._super();
  },

  itemController: ['comment']
});
