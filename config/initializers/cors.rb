Rails.application.config.middleware.insert_before 0, Rack::Cors do
	allow do
		origins "http://localhost:3000"
		resource "*", headers: :any, methods: [:get, :post, :put, :patch, :delete, :options, :head], credentials: true
	end
	
	#Update with domain name when pushed to a live environment
	# allow do
	#   origin "https://downthetu.be.herokuapp.com/"
	#   resource "*", headers: :any, methods: [:get, :post, :put, :patch, :delete, :options, :head], credentials: true
	# end
end