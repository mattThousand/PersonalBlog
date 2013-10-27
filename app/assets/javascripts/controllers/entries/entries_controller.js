Blog.EntriesController = Ember.ArrayController.extend({
	
  needs: ['entry'],

	itemController: 'entry',

	init: function(controller) {
    this.set('commentFormUntriggered', true);
		this._super();
		Ember.run.once(this, 'checkEntries');
	},

	latestEntryId: function() {
		var max = this.get('max');
		this.transitionToRoute('entry', max);
	}.observes('max'),

	checkEntries: function() {
		var max = this.get('latestEntry');
		if (max != -Infinity) {
			this.set('max', max);
		}
		Ember.run.later(this, function() {
			this.checkEntries();
		}, 200);
	},

	latestEntry: function() {
		var entries, max;
		entries = this.get('content').filterProperty('id');
		max = Math.max.apply(null, entries.map(function(a){return a.id;}));
		return max;

	}.property('content.@each.id')

});
