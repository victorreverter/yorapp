$(document).ready(function(){
  $('#container-screen').css({
    'overflow-y': 'scroll'
  });
});

$('#contain-splash').delay(3000).fadeOut(500, function(){
    // $('#register-popup').animate({
    //     'transform':'translate(-50%,-50%)'
    // }, 2000);
    $('#register-popup').css({
      'display': '-webkit-box',
      'display': '-webkit-flex',
      'display': '-o-flex',
      'display': '-moz-flex',
      'display': 'flex',

      'animation':'popup 0.5s ease-in-out 1'
    });
});

$('#enter-button').on('click', function(){
  $('#register-popup').css({
    'animation':'flip-popup 0.5s ease-in-out infinite'
  });
  $('#register-popup').delay(1000).fadeOut(500, function(){
    $('#app-header').css({
      'display': '-webkit-box',
      'display': '-webkit-flex',
      'display': '-o-flex',
      'display': '-moz-flex',
      'display': 'flex',

      'animation':'header-down 0.5s ease-in-out 1',
      'top':'0'
    });
    $('#home').css({
      'display': '-webkit-box',
      'display': '-webkit-flex',
      'display': '-o-flex',
      'display': '-moz-flex',
      'display': 'flex',

      'animation':'home-up 0.6s ease-in-out 1',
      'top':'0'
    });
  });
});

$('#menu-icon').on('click', function(){
  $('#menu-window').css({
    'display':'block',
  });
  $('#menu-window').animate({
    'marginLeft':'0'
  });
});

$('#close-menu div').on('click', function(){
  $('#menu-window').css({
    'display':'none',
  });
  $('#menu-window').animate({
    'marginLeft':'-215px'
  });
});

$('#profile-icon').on('click', function(){
  $('#profile-window').css({
    'display':'block',
  });
  $('#profile-window').animate({
    'right':'0'
  });
  $('#container-screen').css({
    'overflow-y': 'hidden'
  });
});

$('#close-profile div').on('click', function(){
  $('#profile-window').css({
    'display':'none',
  });
   $('#profile-window').animate({
    'right':'-270px'
  });
  $('#container-screen').css({
    'overflow-y': 'scroll'
  });
});

$('#home-link').on('click', function(){
  $('#home').css({
    'display':'block',
    'left':'0',
    'top':'0'
  });
  $('#why, #what, #rest, #training, #nutrition, #diet-page, #vitamin-page, #fruit-page, #veggies-page, #meat-page, #fish-page, #carbs-page, #fats-page, #core-page, #speed-page, #legs-page, #strength-page, #arms-page, #six-pack-page, #mobility-page, #endurance-page').css('display','none');
});

$('#why-menu').on('click', function(){
  $('#home').animate({'left':'-100%'
  }, function(){
    $('#menu-window').animate({
      'marginLeft':'-215px'
    });
    $('#why').css('display','block');
  });
  $('#home, #what, #rest, #training, #nutrition, #diet-page, #vitamin-page, #fruit-page, #veggies-page, #meat-page, #fish-page, #carbs-page, #fats-page, #core-page, #speed-page, #legs-page, #strength-page, #arms-page, #six-pack-page, #mobility-page, #endurance-page').css('display','none');
});

$('#what-menu').on('click', function(){
  $('#home').animate({'left':'-100%'
  }, function(){
    $('#menu-window').animate({
      'marginLeft':'-215px'
    });
    $('#what').css('display','block');
  });
  $('#why, #home, #rest, #training, #nutrition, #diet-page, #vitamin-page, #fruit-page, #veggies-page, #meat-page, #fish-page, #carbs-page, #fats-page, #core-page, #speed-page, #legs-page, #strength-page, #arms-page, #six-pack-page, #mobility-page, #endurance-page').css('display','none');
});

$('#rest-menu').on('click', function(){
  $('#home').animate({'left':'-100%'
  }, function(){
    $('#menu-window').animate({
      'marginLeft':'-215px'
    });
    $('#rest').css('display','block');
  });
  $('#why, #what, #home, #training, #nutrition, #diet-page, #vitamin-page, #fruit-page, #veggies-page, #meat-page, #fish-page, #carbs-page, #fats-page, #core-page, #speed-page, #legs-page, #strength-page, #arms-page, #six-pack-page, #mobility-page, #endurance-page').css('display','none');
});

$('#training-menu').on('click', function(){
  $('#home').animate({'left':'-100%'
  }, function(){
    $('#menu-window').animate({
      'marginLeft':'-215px'
    });
    $('#training').css('display','block');
  });
  $('#why, #what, #rest, #home, #nutrition, #diet-page, #vitamin-page, #fruit-page, #veggies-page, #meat-page, #fish-page, #carbs-page, #fats-page, #core-page, #speed-page, #legs-page, #strength-page, #arms-page, #six-pack-page, #mobility-page, #endurance-page').css('display','none');
});

$('#nutrition-menu').on('click', function(){
  $('#home').animate({'left':'-100%'
  }, function(){
    $('#menu-window').animate({
      'marginLeft':'-215px'
    });
    $('#nutrition').css('display','block');
  });
  $('#why, #what, #rest, #training, #home, #diet-page, #vitamin-page, #fruit-page, #veggies-page, #meat-page, #fish-page, #carbs-page, #fats-page, #core-page, #speed-page, #legs-page, #strength-page, #arms-page, #six-pack-page, #mobility-page, #endurance-page').css('display','none');
});

$('#diet').on('click', function(){
  $('#nutrition').fadeOut(100, function(){
    $('#diet-page').fadeIn(500);
  });
  $('#why, #what, #rest, #training, #nutrition, #home, #vitamin-page, #fruit-page, #veggies-page, #meat-page, #fish-page, #carbs-page, #fats-page, #core-page, #speed-page, #legs-page, #strength-page, #arms-page, #six-pack-page, #mobility-page, #endurance-page').css('display','none');
});

$('#vitamin').on('click', function(){
  $('#nutrition').fadeOut(100, function(){
    $('#vitamin-page').fadeIn(500);
  });
  $('#why, #what, #rest, #training, #nutrition, #diet-page, #home, #fruit-page, #veggies-page, #meat-page, #fish-page, #carbs-page, #fats-page, #core-page, #speed-page, #legs-page, #strength-page, #arms-page, #six-pack-page, #mobility-page, #endurance-page').css('display','none');
});

$('#fruit').on('click', function(){
  $('#nutrition').fadeOut(100, function(){
    $('#fruit-page').fadeIn(500);
  });
  $('#why, #what, #rest, #training, #nutrition, #diet-page, #vitamin-page, #home, #veggies-page, #meat-page, #fish-page, #carbs-page, #fats-page, #core-page, #speed-page, #legs-page, #strength-page, #arms-page, #six-pack-page, #mobility-page, #endurance-page').css('display','none');
});

$('#veggies').on('click', function(){
  $('#nutrition').fadeOut(100, function(){
    $('#veggies-page').fadeIn(500);
  });
  $('#why, #what, #rest, #training, #nutrition, #diet-page, #vitamin-page, #fruit-page, #home, #meat-page, #fish-page, #carbs-page, #fats-page, #core-page, #speed-page, #legs-page, #strength-page, #arms-page, #six-pack-page, #mobility-page, #endurance-page').css('display','none');
});

$('#meat').on('click', function(){
  $('#nutrition').fadeOut(100, function(){
    $('#meat-page').fadeIn(500);
  });
  $('#why, #what, #rest, #training, #nutrition, #diet-page, #vitamin-page, #fruit-page, #veggies-page, #home, #fish-page, #carbs-page, #fats-page, #core-page, #speed-page, #legs-page, #strength-page, #arms-page, #six-pack-page, #mobility-page, #endurance-page').css('display','none');
});

$('#fish').on('click', function(){
  $('#nutrition').fadeOut(100, function(){
    $('#fish-page').fadeIn(500);
  });
  $('#why, #what, #rest, #training, #nutrition, #diet-page, #vitamin-page, #fruit-page, #veggies-page, #meat-page, #home, #carbs-page, #fats-page, #core-page, #speed-page, #legs-page, #strength-page, #arms-page, #six-pack-page, #mobility-page, #endurance-page').css('display','none');
});

$('#carbs').on('click', function(){
  $('#nutrition').fadeOut(100, function(){
    $('#carbs-page').fadeIn(500);
  });
  $('#why, #what, #rest, #training, #nutrition, #diet-page, #vitamin-page, #fruit-page, #veggies-page, #meat-page, #fish-page, #home, #fats-page, #core-page, #speed-page, #legs-page, #strength-page, #arms-page, #six-pack-page, #mobility-page, #endurance-page').css('display','none');
});

$('#fats').on('click', function(){
  $('#nutrition').fadeOut(100, function(){
    $('#fats-page').fadeIn(500);
  });
  $('#why, #what, #rest, #training, #nutrition, #diet-page, #vitamin-page, #fruit-page, #veggies-page, #meat-page, #fish-page, #carbs-page, #home, #core-page, #speed-page, #legs-page, #strength-page, #arms-page, #six-pack-page, #mobility-page, #endurance-page').css('display','none');
});

$('#core').on('click', function(){
  $('#nutrition').fadeOut(100, function(){
    $('#core-page').fadeIn(500);
  });
  $('#why, #what, #rest, #training, #nutrition, #diet-page, #vitamin-page, #fruit-page, #veggies-page, #meat-page, #fish-page, #carbs-page, #fats-page, #home, #speed-page, #legs-page, #strength-page, #arms-page, #six-pack-page, #mobility-page, #endurance-page').css('display','none');
});

$('#speed').on('click', function(){
  $('#nutrition').fadeOut(100, function(){
    $('#speed-page').fadeIn(500);
  });
  $('#why, #what, #rest, #training, #nutrition, #diet-page, #vitamin-page, #fruit-page, #veggies-page, #meat-page, #fish-page, #carbs-page, #fats-page, #core-page, #home, #legs-page, #strength-page, #arms-page, #six-pack-page, #mobility-page, #endurance-page').css('display','none');
});

$('#legs').on('click', function(){
  $('#nutrition').fadeOut(100, function(){
    $('#legs-page').fadeIn(500);
  });
  $('#why, #what, #rest, #training, #nutrition, #diet-page, #vitamin-page, #fruit-page, #veggies-page, #meat-page, #fish-page, #carbs-page, #fats-page, #core-page, #speed-page, #home, #strength-page, #arms-page, #six-pack-page, #mobility-page, #endurance-page').css('display','none');
});

$('#strength').on('click', function(){
  $('#nutrition').fadeOut(100, function(){
    $('#strength-page').fadeIn(500);
  });
  $('#why, #what, #rest, #training, #nutrition, #diet-page, #vitamin-page, #fruit-page, #veggies-page, #meat-page, #fish-page, #carbs-page, #fats-page, #core-page, #speed-page, #legs-page, #home, #arms-page, #six-pack-page, #mobility-page, #endurance-page').css('display','none');
});

$('#arms').on('click', function(){
  $('#nutrition').fadeOut(100, function(){
    $('#arms-page').fadeIn(500);
  });
  $('#why, #what, #rest, #training, #nutrition, #diet-page, #vitamin-page, #fruit-page, #veggies-page, #meat-page, #fish-page, #carbs-page, #fats-page, #core-page, #speed-page, #legs-page, #strength-page, #home, #six-pack-page, #mobility-page, #endurance-page').css('display','none');
});

$('#six-pack').on('click', function(){
  $('#nutrition').fadeOut(100, function(){
    $('#six-pack-page').fadeIn(500);
  });
  $('#why, #what, #rest, #training, #nutrition, #diet-page, #vitamin-page, #fruit-page, #veggies-page, #meat-page, #fish-page, #carbs-page, #fats-page, #core-page, #speed-page, #legs-page, #strength-page, #arms-page, #home, #mobility-page, #endurance-page').css('display','none');
});

$('#mobility').on('click', function(){
  $('#nutrition').fadeOut(100, function(){
    $('#mobility-page').fadeIn(500);
  });
  $('#why, #what, #rest, #training, #nutrition, #diet-page, #vitamin-page, #fruit-page, #veggies-page, #meat-page, #fish-page, #carbs-page, #fats-page, #core-page, #speed-page, #legs-page, #strength-page, #arms-page, #six-pack-page, #home, #endurance-page').css('display','none');
});

$('#endurance').on('click', function(){
  $('#nutrition').fadeOut(100, function(){
    $('#endurance-page').fadeIn(500);
  });
  $('#why, #what, #rest, #training, #nutrition, #diet-page, #vitamin-page, #fruit-page, #veggies-page, #meat-page, #fish-page, #carbs-page, #fats-page, #core-page, #speed-page, #legs-page, #strength-page, #arms-page, #six-pack-page, #mobility-page, #home').css('display','none');
});
