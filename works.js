var main = function() {
    /*dropping the menu bar*/
    $('.dropdown-toggle').click(function() {
      $('.dropdown-menu').toggle(); 
});
    /*clicking forward arrow moves forward to next picture-slide & next-dot, then starts back at first slide & dot*/
    $('.arrow-next').click(function() {
      var currentSlide = $('.active-slide');
      var nextSlide = currentSlide.next();
      var currentDot = $('.active-dot');
      var nextDot = currentDot.next();
      
      if(nextSlide.length == 0) {
        nextSlide = $('.slide').first();
}
      if(nextBox.length == 0) {
        nextDot = $('.dot').first();
}
      currentSlide.fadeOut(600).removeClass('active-slide');
      nextSlide.fadeIn(600).addClass('active-slide');
      currentDot.removeClass('active-dot');
      nextDot.addClass('active-dot');
});
    /*clicking back arrow moves back to previous picture-slide & previous-dot*/
    $('.arrow-prev').click(function() {
      var currentSlide = $('.active-slide');
      var prevSlide = currentSlide.prev();
      var currentDot = $('.active-dot');
      var prevDot = currentDot.prev();
      
      if(prevSlide.length == 0) {
        prevSlide = $('.slide').last();
}
      if(prevDot.length == 0) {
        prevDot = $('.dot').last();
}
      currentSlide.fadeOut(600).removeClass('active-slide');
      prevSlide.fadeIn(600).addClass('active-slide');
      currentDot.removeClass('active-dot');
      prevDot.addClass('active-dot');
});
}
$(document).ready(main); 
