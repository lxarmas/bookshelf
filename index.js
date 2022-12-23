
 import {bookData} from './book-data.js';
 

 const myBookshelf = document.body.querySelector('.bookshelf');// dom element for Bookshelf

 const myBook      = document.body.querySelector('.book');// dom element for book

//  const myContainer  = document.body.querySelector('.container');// dom element for book
 

const mySpineTitle = document.body.querySelector('.spine-title');
 
const mySpineAuhtor = document.body.querySelector('.spine-author');// dom element for book

const container = document.querySelector('.container');
 
class Book {
    constructor(author,language,subject,title){
  
      this.author = author;
      this.language = language;
      this.subject = subject;
      this.title = title;
    }
    render(){
        const bookshelf = document.createElement('div');
        
        bookshelf.classList.add('bookshelf');
        
        container.appendChild(bookshelf);
        
        const book = document.createElement('div');
        
        book.classList.add('book');
        
        bookshelf.appendChild(book);
        
        
        const sideSpine = document.createElement('div');
        
        sideSpine.classList.add('side spine');
        
        book.appendChild(sideSpine);
        
        const spineTitle = document.createElement('span')
        
        spineTitle.classList.add('spine-title');
        
        sideSpine.appendChild(spineTitle);

        spineTitle.innerHTML = this.title
        
        const spineAuthor = document.createElement('span');
        
        spineAuthor.classList.add('spine-author');
        
        sideSpine.appendChild(spineAuthor);
        
        const sideTop = document.createElement('div');
        
        sideTop.classList.add('side top');
        
        bookshelf.appendChild(sideTop);
        
        const sideCover= document.createElement('div');
        
        sideTop.classList.add('side cover');
        
        bookshelf.appendChild(sideCover);

    }
}
  
  class Bookshelf{
  
    constructor(){
        this.bookList = [];  
    }
    
      
     getBooks(){
        
        console.log("getBooks",bookData)
        
        
        for(let i=0; i < bookData.length -1;i++ ){
        
        
            const bookAdd = bookData[i];


            this.bookList.push(bookAdd);
        
        }
        console.log(this.bookList);
    
    return this.bookList
    
    }

}  

const bookShelf = new Bookshelf("newBookShelf");



console.log(bookShelf.getBooks())




