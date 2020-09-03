let section = document.querySelectorAll('.section');

function isVisible(section) {
  let elementBox = section.getBoundingClientRect();
  let distanceFromTop = -100;
  if (elementBox.top - window.innerHeight < distanceFromTop || (window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    return true;
  } else {
    return false;
  }
}

function scanDocument() {
  let sectionList = document.querySelectorAll('.hidden');
  sectionList.forEach(function(section) {
    if (isVisible(section)) {
      section.classList.remove('hidden');
      section.querySelector('.inner').classList.add('slide');
    }
  });
}


window.addEventListener("scroll", throttle(scanDocument, 50));

function throttle(fn, wait) {
  var time = Date.now();
  return function() {
    if ((time + wait - Date.now()) < 0) {
      fn();
      time = Date.now();
    }
  }
}