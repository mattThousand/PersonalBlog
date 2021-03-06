Blog::Application.routes.draw do
  
  root to: 'ember#index'

  class FormatTest
    attr_accessor :mime_type

    def initialize(format)
      @mime_type = Mime::Type.lookup_by_extension(format)
    end

    def matches?(request)
      request.format == mime_type
    end
  end

  resources :entries, only: [:index, :show],
    constraints: FormatTest.new(:json)

  resources :comments, only: [:index, :create],
    constraints: FormatTest.new(:json)

  get '*foo', to: 'ember#index', constraints: FormatTest.new(:html)
  get '/', to: 'ember#index', constraints: FormatTest.new(:html),
    constraints: lambda { |request|
      path = request.env["REQUEST_PATH"]
      path != "/qunit" && FormatTest.new(:html).matches?(request)
    }

end
