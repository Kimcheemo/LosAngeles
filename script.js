$(document).ready(function () {

  // NAVBAR NAVIGATION
  const $Page1 = $('#Page1');
  const $Page2 = $('#Page2');
  const $Page3 = $('#Page3');
  const $History = $Page1.find('.section1');
  const $Team = $Page1.find('.section2');
  const $History2 = $Page2.find('.section1');
  const $Team2 = $Page2.find('.section2');

  // For first page navbar
  $History.on('click', function (e) {
    e.preventDefault();
    var slideTo = $(this).data('bs-slide-to');
    $('#carouselLA').carousel(slideTo); // Trigger the carousel slide
  });

  $Team.on('click', function (e) {
    e.preventDefault();
    var slideTo = $(this).data('bs-slide-to');
    $('#carouselLA').carousel(slideTo);
  });

  // For second page navbar
  $History2.on('click', function (e) {
    e.preventDefault();
    var slideTo = $(this).data('bs-slide-to');
    $('#carouselLA').carousel(slideTo);
  });

  $Team2.on('click', function (e) {
    e.preventDefault();
    var slideTo = $(this).data('bs-slide-to');
    $('#carouselLA').carousel(slideTo);
  });


  // NESTED CAROUSEL
  const $myCarousel = $('#InnerCarousel');
  const $innerCarousel = $myCarousel.find('.inner');
  const $indicators = $myCarousel.find('.button-indicators button');
  let currentIndex = 0;

  function showSlide(index){
    // Calculate the translateX value
    const translateX = -index * 100 + '%';

    // Apply the transform style to slide the items
    $innerCarousel.css('transform', `translateX(${translateX})`);

    // Apply current page indicator
    $indicators.eq(currentIndex).removeClass('active-item');
    currentIndex = index;
    $indicators.eq(currentIndex).addClass('active-item');
  }

  // call function when clicked on
  $indicators.each(function (index) {
    $(this).on('click', function () {
      showSlide(index);
    });
  });




  // BACKGROUND CHANGE ON PAGE3
  const $myCarousel3 = $('#Page3');
  const $item = $myCarousel3.find('.nav-item');
  const $mountain1 = $('#mountain1');
  const $mountain2 = $('#mountain2');

  // if mountain1 tab is active apply 'full-image3' class
  // if mountain2 tab is active apply 'full-image4' class
  function setBackground(){
    if ($mountain1.hasClass('active')) {
      $myCarousel3.removeClass('full-image4');
      $myCarousel3.addClass('full-image3');
    }
    else if ($mountain2.hasClass('active')) {
      $myCarousel3.removeClass('full-image3');
      $myCarousel3.addClass('full-image4');
    }
  }

  $item.on('click', function () {
    setBackground();
  });



  // TABLE PADDING: NEW MONTH
  // Padding should only be added if it is a different month

  // Add padding to table1
  const $myTable1 = $('#Schedule1');
  let $previousMonth1 = null;

  // loop through each tr
  $myTable1.find('tr').each(function () {
    const $tr = $(this);
    const $tds = $(this).find('td');

    // select the first td in the tr
    const $tdText = $tds.eq(0).text();

    // splice text to get just the month
    let $letterIndex = $tdText.search(/[a-zA-Z]/);
    let $endIndex = $letterIndex + 3;
    let $month = $tdText.slice($letterIndex, $endIndex);

    // if both td do not match months, add padding
    if($previousMonth1 !== null && $previousMonth1 !== $month){

      // Add the 'new-month' class to all td elements in the row
      $tds.addClass('new-month');
    }

    // check for next pair of months
    $previousMonth1 = $month;
  });

  // Do same steps but for table2
  const $myTable2 = $('#Schedule2');
  let $previousMonth2 = null;

  $myTable2.find('tr').each(function () {
    const $tr = $(this);
    const $tds = $(this).find('td');
    const $tdText = $tds.eq(0).text();

    let $letterIndex = $tdText.search(/[a-zA-Z]/);
    let $endIndex = $letterIndex + 3;
    let $month = $tdText.slice($letterIndex, $endIndex);

    if($previousMonth2 !== null && $previousMonth2 !== $month){
      $tds.addClass('new-month');
    }

    $previousMonth2 = $month;
  });

});
