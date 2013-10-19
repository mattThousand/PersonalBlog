class Comment < ActiveRecord::Base
  attr_accessible :body, :first_name, :last_name

  belongs_to :entry

  validates_presence_of :first_name,
  	:body
end
