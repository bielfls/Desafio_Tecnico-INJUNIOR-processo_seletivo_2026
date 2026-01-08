function countBooksInCategory(booksByCategory){
    result = {};
    booksByCategory.forEach(element => {
        result[element.category] = element.books.length
    });
    return result;
}