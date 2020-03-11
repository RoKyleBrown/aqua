@movies.each do |movie|
  json.set! movie.id do
    json.partial! 'movie', movie: movie
  end
end