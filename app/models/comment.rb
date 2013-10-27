class Comment < ActiveRecord::Base
  attr_accessible :body, :name, :entry_id

  belongs_to :entry

  validates_presence_of :body
end
