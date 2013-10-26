Blog.Entry = DS.Model.extend({
	title: DS.attr('string'),
	body: DS.attr('string'),
  created_at: DS.attr('string'),
	comments: DS.hasMany('comment')
});
