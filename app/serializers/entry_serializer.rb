class EntrySerializer < ActiveModel::Serializer

  embed :ids, include: true
  attributes :id,
  	:title,
  	:body,
    :created_at

  has_many :comments, key: :comments, root: :comments

  def created_at
    object.created_at.strftime('%d %B, %Y')
  end
end
