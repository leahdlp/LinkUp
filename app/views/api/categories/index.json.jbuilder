@categories.each do |category|
    json.set! category.id do 
        json.extract! category, :id, :name, :subcategory_ids
    end
end



