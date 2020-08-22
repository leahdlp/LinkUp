@subcategories.each do |subcategory|
    json.set! subcategory.id do 
        json.extract! subcategory, :id, :name, :category_id, :group_ids
    end
end