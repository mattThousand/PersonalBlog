Blog.Comment = DS.Model.extend({
	entry: DS.belongsTo('entry'),
  body: DS.attr('string'),
  name: DS.attr('string'),
  entry_id: DS.attr('number')
});
