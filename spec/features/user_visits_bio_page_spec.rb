require 'spec_helper'

feature "user visits bio page" do

  context "right panel", :js => true do

    before(:each) do
      visit root_path
    end

    it "user sees bio title" do
      within("#bio") do
        expect(page).to have_content("full-stack developer")
      end
    end

    it "user sees link to blog" do
      within("#blurb") do
        expect(page).to have_link("blog")
      end
    end

    it "user can click through to blog" do
      click_link("blog")

      expect(current_path).to eql("/")
    end

  end

  context "left panel" do

    before(:each) do
      visit root_path
    end

    it "contains a snazzy image" do
      within("#portrait-desktop") do
        expect(page).to have_selector("img.half")
      end
    end
  end

end
