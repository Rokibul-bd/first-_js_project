/* 
Dom selection
EventListener
basic validation
append
*/
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const year = document.querySelector('#year');
const btn = document.querySelector('.btn');
const bookList = document.querySelector('#book-list')
btn.addEventListener('click', function(e){
    e.preventDefault();
    if(title.value == "" && author.value == "" && year.value == ""){
        alert("Please fil the gap");
    }
    else{
        const newRow = document.createElement('tr');
        // create title
        const newTitle = document.createElement('th'); 
        newTitle.innerHTML = title.value;
        newRow.appendChild(newTitle);
        // create author
        const newAuthor = document.createElement('th');
        newAuthor.innerHTML = author.value;
        newRow.appendChild(newAuthor);
        // create year
        const newYear = document.createElement('th');
        newYear.innerHTML = year.value;
        newRow.appendChild(newYear);
        bookList.appendChild(newRow);

    }
    
});
