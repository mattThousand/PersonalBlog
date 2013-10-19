Blog.Entry = DS.Model.extend({
	comments: DS.hasMany('comment')
});