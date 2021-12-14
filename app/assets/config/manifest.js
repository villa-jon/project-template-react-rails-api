require 'sprockets/rails/task'
Sprockets::Rails::Task.new(Rails.application) do |t|
  t.environment = lambda { Rails.application.assets }
  t.assets = %w( application.js application.css )
  t.keep = 5
end

//= link_tree ../images
//= link_directory ../javascripts .js
//= link_directory ../stylesheets .css