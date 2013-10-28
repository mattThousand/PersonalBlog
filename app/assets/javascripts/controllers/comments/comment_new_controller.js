Blog.CommentsNewController = Ember.ObjectController.extend({
  
  needs: ['entry'],

  init: function(controller) {
    this._super();
  },

  actions: {
    save: function() {
      var _this, entry, entry_id;

      _this = this;
      entry = this.get('controllers.entry');
      entry_id = entry.get('model.id');
      
      this.content.set('entry_id', entry_id);

      return this.content.save().then(function() {
        return  _this.transitionToRoute('entry');
      });
    } 
  }
});
