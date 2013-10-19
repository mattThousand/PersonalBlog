require 'spec_helper'

describe Comment do

  context "associations" do
    it { should belong_to(:entry) }
  end

  context "validations" do
    it { should validate_presence_of(:first_name) }
    it { should validate_presence_of(:body) }
  end
end
