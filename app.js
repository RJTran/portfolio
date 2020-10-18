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

$('#cres').on('click', () => {
  if(!$('#tab1').hasClass('animateAppear')) {
    $('#aqi, #cpp').parent().removeClass('tab-active');
    $('#cres').parent().addClass('tab-active');
    $('#tab2, #tab3').removeClass('animateAppear').addClass('animateDisappear tab-hidden');
    $('#tab1').removeClass('animateDisappear').addClass('animateAppear');
  }
});
$('#aqi').on('click', () => {
  if(!$('#tab2').hasClass('animateAppear')) {
    $('#cres, #cpp').parent().removeClass('tab-active');
    $('#aqi').parent().addClass('tab-active');
    $('#tab1, #tab3').removeClass('animateAppear').addClass('animateDisappear tab-hidden');
    $('#tab2').removeClass('animateDisappear').addClass('animateAppear');
  }
});
$('#cpp').on('click', () => {
  if(!$('#tab3').hasClass('animateAppear')) {
    $('#cres, #aqi').parent().removeClass('tab-active');
    $('#cpp').parent().addClass('tab-active');
    $('#tab1, #tab2').removeClass('animateAppear').addClass('animateDisappear tab-hidden');
    $('#tab3').removeClass('animateDisappear').addClass('animateAppear');
  }
});

  // $('#home').on('click', function() {
  //   $('.container').hide();
  //   $('.container.home').css('display', 'flex');
  //   $('.nav').find('.active-link').removeClass('active-link');
  //   $('#home').addClass('active-link');
  // });
  // $('#faq').on('click', function() {
  //   $('.container').hide();
  //   $('.container.faq').css('display', 'block');
  //   $('.content').css('display', 'flex');
  //   $('.nav').find('.active-link').removeClass('active-link');
  //   $('#faq').addClass('active-link');
  // });
  // $('#myAccount').on('click', function() {
  //   $('.container').hide();
  //   $('.container.myAccount').css('display', 'flex');
  //   $('.nav').find('.active-link').removeClass('active-link');
  //   $('#myAccount').addClass('active-link');
  // });