export const fetchSubcategories = () => (
    $.ajax({
        url: `/api/subcategories`,
        method: 'GET',
    })
)

export const fetchSubcategory = subcategoryId => (
    $.ajax({
        url: `/api/subcategories/${subcategoryId}`,
        method: 'GET'
    })
)