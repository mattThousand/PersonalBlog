require 'spec_helper'

describe Entry do
  
  context "associations" do
    it { should have_many(:comments) }
  end

end
