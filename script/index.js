
function toggleSearch() {
    var searchBar = document.getElementById('searchBar');
    searchBar.style.display = (searchBar.style.display === 'none' || searchBar.style.display === '') ? 'block' : 'none';
}
    // Get the object element
    var dynamicObject = document.getElementById("dynamicObject");

    // Add an event listener to adjust the height when the content is loaded
    dynamicObject.addEventListener("load", function() {
      // Set the height of the object element based on the content height
      dynamicObject.style.height = dynamicObject.contentDocument.body.scrollHeight + "px";
    });