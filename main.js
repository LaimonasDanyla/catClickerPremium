// Cat names:
var cats = {
  "catNames": [{
    "name": "Kitkat",
    "url": "https://pixabay.com/static/uploads/photo/2012/10/12/17/12/cat-61079_960_720.jpg"
  }, {
    "name": "Kit-teacup",
    "url":"https://pixabay.com/static/uploads/photo/2013/09/07/08/29/cat-179842_960_720.jpg"
  }, {
    "name": "Kittin around",
    "url": "https://pixabay.com/static/uploads/photo/2013/12/12/03/08/kitten-227009_960_720.jpg"
  }, {
    "name": "Kittles",
    "url": "https://pixabay.com/static/uploads/photo/2015/11/15/20/21/cat-1044750_960_720.jpg"
  }, {
    "name": "Kitty Kitty Bang Bang",
    "url": "https://pixabay.com/static/uploads/photo/2016/05/18/21/33/cat-1401637_960_720.jpg"
  }
]};


var objectList = cats.catNames;

var catContainerGenerator = function(i) {
  var catContainer, catNameDiv, catName, catImageContainer;

  catContainer = document.createElement("div");
  catContainer.id = "cat" + i;
  //catContainer.classList.add("catContainer");


  catNameDiv = document.createElement("div");
  catNameDiv.classList.add("col-md-4");
  catNameDiv.classList.add("catDiv");
  catName = document.createElement("h2");
  catImageContainer = document.createElement("div");
  catImageContainer.classList.add("col-md-8");
  catImageContainer.classList.add("catDiv");

  var objectListName = [];
  var objectListUrl = [];
  //for (var i = 1; i < objectList.length; i++) {
  objectListName = cats.catNames[i].name;
  objectListUrl = cats.catNames[i].url;
  catName.innerHTML = objectListName;
  catImageContainer.innerHTML = '<img src="' + objectListUrl + '">';
  //catImageContainer.innerHTML = '<img src="' + objectListUrl + '" ' + 'style="display: none"' + '>';


  catNameDiv.appendChild(catName);
  catContainer.appendChild(catNameDiv);
  catContainer.appendChild(catImageContainer);

  return catContainer;
}

var catNameLocation = document.getElementById('catNamePlace');
for (var i = 0; i < objectList.length; i++) {
  catNameLocation.appendChild(catContainerGenerator(i));
}
