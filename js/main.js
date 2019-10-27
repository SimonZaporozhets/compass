$(document).ready(function(){
      // Слайдер
    $('.main-carousel').slick({
        dots: true,
        nextArrow: $('.right-arrow'),
        prevArrow: $('.left-arrow'),
        initialSlide: 1
    });
      // Плавная прокрутка
     
     $(".arrow").click(function() {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({
          scrollTop: destination
        }, 800);
        return false;
      });
     
    // Кнопка "наверх"
    
     var btn = $('.scrollTop');

      $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
          btn.addClass('show');
        } else {
          btn.removeClass('show');
        }
      });

      btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
      });
    
      // Popup-окно
    
    $('.popup-call').click(function (e) {
        e.preventDefault();
        var destinationPopup = $(this).attr("href");
        $(destinationPopup).addClass('show');
        $(destinationPopup + ' .popup-close').click(function  (e) {
            e.preventDefault();
          $(destinationPopup).removeClass('show');
          $("html").css('overflow', 'visible');
        });
        
        var btn = $('.scrollTop');
        btn.removeClass('show');
        $("html").css('overflow', 'hidden');
  });
//    menu-burger
     $('.burger-menu').click(function (e) {
        e.preventDefault();
        $('.nav-burger').toggleClass('show');
      });

      if (  $(window).width()  <  992) {
        $('.nav-burger li a').click(function(e) {
          $('.nav-burger').toggleClass('show');
        });
      };
    
//    submit form
    $("#btn").click(
		function(){
			sendAjaxForm('result_form', 'ajax_form', 'action_ajax_form.php');
			return false; 
		}
	);

});

//     function sendAjaxForm(result_form, ajax_form, url) {
//     $.ajax({
//         url:     url, //url страницы (action_ajax_form.php)
//         type:     "POST", //метод отправки
//         dataType: "html", //формат данных
//         data: $("#"+ajax_form).serialize(),  // Сеарилизуем объект
//         success: function(response) { //Данные отправлены успешно
//         	result = $.parseJSON(response);
//         	$('#result_form').html('Имя: '+result.name+'<br>Email: '+result.email+'<br>Телефон: '+result.phone);
//     	},
//     	error: function(response) { // Данные не отправлены
//             $('#result_form').html('Ошибка. Данные не отправлены.');
//     	}
//  	});
// }
