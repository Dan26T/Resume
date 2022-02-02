window.onload = function() {
  $(document).ready(function(){
    window.scrollBy(0, -1000)
  })
}

$(document).ready(function() {
    console.log($('header__link'))
    let openResume = $('.hello_btn').hasClass('active') && $('.resume').hasClass('active')
    let lockBody = $('body').hasClass('lock')
    let openMenu = $('.header_burger').hasClass('active')

  $('.header_burger').click(function(event){
    if(lockBody && !openMenu){
      $('.header_burger,.header__menu').toggleClass('active')
    }else if(!lockBody && openResume){
      $('body').toggleClass('lock')
      $('.header_burger,.header__menu').toggleClass('active')
    }else {
      $('body').toggleClass('lock')
      $('.header_burger,.header__menu').toggleClass('active')
    }
  });
  $('.hello_btn').click(function(event){
    if (!lockBody && openResume){
      let scroll = window.pageYOffset
      window.scrollBy(0, -scroll)
    }
    $('body').toggleClass('lock')
    $('.hello_btn,.resume').toggleClass('active')
    openMenu = !openMenu
    lockBody = !lockBody
  });
});
