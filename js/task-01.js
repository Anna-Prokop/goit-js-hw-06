const body = document.body;
const allItems = body.querySelectorAll(".item");
const numberOfCategories = () => {
    console.log(`Number of categories: ${allItems.length}`);
}; 
numberOfCategories();

for (let i = 0; i < allItems.length; i++) {
    const title = allItems[i].firstElementChild.textContent;
    const numberOfElementsInCategory = allItems[i].getElementsByTagName("li").length;
    console.log(`Category: ${title} Elements: ${numberOfElementsInCategory}`);
}