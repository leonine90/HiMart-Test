$(document).ready(function(){

  //Basket Show and Hide
  $('.basket-counter').on('click',function(){
    $('.basket').toggleClass('basketShow');
    $('main section').toggleClass('moveAside');
  });
  $('.basket-icon').on('click',function(){
    $('.basket').toggleClass('basketShow');
    $('main section').toggleClass('moveAside');
  });

  //Payment Tab Section
  $('.payment-tab .payment-online').on('click',function(){
    $(this).addClass('active-tab');
    $('.payment-tab .payment-cash').removeClass('active-tab');
    $('.online-choice a').removeClass('inactiveLink');
  });
  $('.payment-tab .payment-cash').on('click',function(){
    $(this).addClass('active-tab');
    $('.payment-tab .payment-online').removeClass('active-tab');
    $('.online-choice a').addClass('inactiveLink');
  });

  if($('.payment-tab .payment-cash').hasClass('active-tab')){
    $('.online-choice a').addClass('inactiveLink');
  }
  if($('.payment-tab .payment-online').hasClass('active-tab')){
    $('.online-choice a').removeClass('inactiveLink');
  }

  //Address Section
  $('.fa-trash-o').on('click',function(){
    $(this).parent().removeClass('show');
  });
  $('.add-btn').on('click',function(){
    if($('.address-2').hasClass('show')){
      $('.address-3').addClass('show');
    }else{
      $('.address-2').addClass('show');
    }
  });


  window.onscroll = function(){
    scrollFunction();
  }

  function scrollFunction(){
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
          $('.basket').css('top','0');
      } else {
          $('.basket').css('top','60px');
      }
  }
});
