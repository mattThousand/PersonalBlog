class CommentSerializer < ActiveModel::Serializer
  attributes :id,
    :name,
    :body,
    :entry_id 

end
