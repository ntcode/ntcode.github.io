var main = function() {
    /*dropping the menu bar*/
    $('.dropdown-toggle').click(function() {
      $('.dropdown-menu').toggle(); 
});
    /*clicking forward arrow moves forward to next picture-slide & next-dot, then starts back at first slide & dot*/
    $('.arrow-next').click(function() {
      var currentSlide = $('.active-slide');
      var nextSlide = currentSlide.next();
      var currentBox = $('.active-box');
      var nextBox = currentBox.next();
      
      if(nextSlide.length == 0) {
        nextSlide = $('.slide').first();
}
      if(nextBox.length == 0) {
        nextBox = $('.box').first();
}
      currentSlide.fadeOut(600).removeClass('active-slide');
      nextSlide.fadeIn(600).addClass('active-slide');
      currentBox.removeClass('active-box');
      nextBox.addClass('active-box');
});
    /*clicking back arrow moves back to previous picture-slide & previous-dox*/
    $('.arrow-prev').click(function() {
      var currentSlide = $('.active-slide');
      var prevSlide = currentSlide.prev();
      var currentBox = $('.active-box');
      var prevBox = currentBox.prev();
      
      if(prevSlide.length == 0) {
        prevSlide = $('.slide').last();
}
      if(prevBox.length == 0) {
        prevBox = $('.box').last();
}
      currentSlide.fadeOut(600).removeClass('active-slide');
      prevSlide.fadeIn(600).addClass('active-slide');
      currentBox.removeClass('active-box');
      prevBox.addClass('active-box');
});
}
$(document).ready(main); 
