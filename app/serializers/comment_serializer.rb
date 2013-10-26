class CommentSerializer < ActiveModel::Serializer
  attributes :id,
    :first_name,
    :last_name,
    :body,
    :entry_id 

end
