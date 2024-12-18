let book = {
  title: "JavaScript Basics",
  author: "John Doe",
  pages: 250,
  available: true,
};
for(let key in book){
    console.log(`key: ${key} , value: ${book[key]}`)
}