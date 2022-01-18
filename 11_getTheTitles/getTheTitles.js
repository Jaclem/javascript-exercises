const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]

const getTheTitles = function() {
    let allTitles = [];
    
    books.filter(book => {
        let titles = book.title;
        allTitles.push(titles);
        
    });
    return allTitles;
};

getTheTitles(books)

// Do not edit below this line
module.exports = getTheTitles;
