// Cat names and image links:
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

//move result to array.
var objectListName = [];
var objectListUrl = [];

//create needed elements for every cat
var catContainerGenerator = function(i) {
  var catContainer, catNameDiv, catName, catClickSum, catImageContainer;

  catContainer = document.createElement("div");
  catContainer.id = "cat" + i;

  catNameDiv = document.createElement("div");
  catNameDiv.classList.add("col-md-12");
  catNameDiv.classList.add("catDiv");
  catName = document.createElement("h2");
  catImageContainer = document.createElement("div");
  catImageContainer.classList.add("col-md-12");
  catImageContainer.classList.add("catDiv");

  catClickSum = document.createElement("div");
  catClickSum.classList.add("col-md-12");
  catClickSum.classList.add("clickSum");

  objectListName = cats.catNames[i].name;
  objectListUrl = cats.catNames[i].url;
  catName.innerHTML = objectListName;
  catImageContainer.innerHTML = '<img src="' + objectListUrl + '" class="img-responsive">';

  catNameDiv.appendChild(catName);
  catContainer.appendChild(catNameDiv);
  catContainer.appendChild(catImageContainer);
  catNameDiv.appendChild(catClickSum);

  var nums = [objectListName];

  // Let's loop over the numbers in our array
  for (var i = 0; i < nums.length; i++) {

      // This is the number we're on...
      var num = nums[i];

      //Set the click count and show the name for same cate, for every cat
      catClickSum.textContent = i++;

      // start counter from 1
      var counter = 1;

      // how to append clicks for same cat example was taken from:
      //https://discussions.udacity.com/t/closures-and-event-listeners-problem/166697/2

      catContainer.addEventListener("click", (function(numCopy) {
          return function() {
            catClickSum.innerHTML = numCopy + ' has got ' + '<span id="digit">' + counter + '</span>' + ' clicks!';

            //console log is needed to enable counting
            console.log(counter++);
            //show the name cna clicks after image or name is clicked
            if (counter > 0) {
              catClickSum.style.display= 'initial';
            }
          };
      })(num));
  };
  return catContainer;
}

// for every name in array attach cat container
var catNameLocation = document.getElementById('catNamePlace');
for (var i = 0; i < objectList.length; i++) {
  catNameLocation.appendChild(catContainerGenerator(i));
}
