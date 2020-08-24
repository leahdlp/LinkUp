@subcategories.each do |subcategory|
    json.set! subcategory.id do 
        json.partial! '/api/subcategories/subcat', subcategory: subcategory
    end
end