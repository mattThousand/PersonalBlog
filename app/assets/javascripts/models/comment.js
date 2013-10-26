Blog.Comment = DS.Model.extend({
	entry: DS.belongsTo('entry'),
  body: DS.attr('string'),
  first_name: DS.attr('string'),
  last_name: DS.attr('string')
});
