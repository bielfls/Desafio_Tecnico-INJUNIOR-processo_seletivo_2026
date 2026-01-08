function authors(booksByCategory){
    let array= [];
    booksByCategory.forEach(element => {
        element.books.forEach(book => {
            if(!(array.includes(book.author))){
                array.push(book.author);
            }
        })
    });
    return array;
}