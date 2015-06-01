(function(){

  'use strict';

  console.log('---------> Rabbit Morse, ' + Date());

  /* Define Rabbit emoji; */
  var dots = '🐰';
  var dashes = '🍌';
  var space = '\ \ ';

  var rabbitMorse = {
    a : dots + dashes,
    b : dashes + dots + dots + dots,
    c : dashes + dots + dashes + dots,
    d : dashes + dots + dots,
    e : dots,
    f : dots + dots + dashes + dots,
    g : dashes + dashes + dots,
    h : dots + dots + dots + dots,
    i : dots + dots,
    j : dots + dashes + dashes + dashes,
    k : dashes + dots + dashes,
    l : dots + dashes + dots + dots,
    m : dashes + dashes,
    n : dashes + dots,
    o : dashes + dashes + dashes,
    p : dots + dashes + dashes + dots,
    q : dashes + dashes + dots + dashes,
    r : dots + dashes + dots,
    s : dots + dots + dots,
    t : dashes,
    u : dots + dots + dashes,
    v : dots + dots + dots + dashes,
    w : dots + dashes + dashes,
    x : dashes + dots + dots + dashes,
    y : dashes + dots + dashes + dashes,
    z : dashes + dashes + dots + dots
  };

  $(document).ready(function(){

    $('#e2r').click(function(){
      if ( $('textarea').val() === '' ) {
        $('textarea').attr('placeholder','请输入英语 Please input English');
      } else {
        console.log('---> e2r');
        var text = $('textarea').val();
        console.log(text);
        text.toLowerCase();
        console.log(text); // 大写转小写
        text = text.split('');
        console.log(text);

        $.each(text,function(key, value){
          if (value !== ' ') { // 判断空格
            console.log(key + ':' + value);
            text[key] = rabbitMorse[value];
          } else {
            text[key] = space;
          }

        });
        console.log(text);
        $('textarea').val(text.join(''));

        $('h1.animated').addClass('bounce');
        $('h1.animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
          $('h1.animated').removeClass('bounce');
        });
      }

    });

    $('#r2e').click(function(){
      if ( $('textarea').val() === '' ) {
        $('textarea').attr('placeholder','请输入兔语 呼呼 呼呼呼');
      } else {
        console.log('---> r2e');
        var text = $('textarea').val();
        console.log(text);
        text = text.split(' ');
        console.log(text);

        var x;
        for (x in text) {
          var y;
          for (y in rabbitMorse) {
            if (text[x]==='') {
              text[x] = '\ ';
            } else if (rabbitMorse[y]===text[x]) {
              text[x] = y;
            }
          }
        }
        console.log(text);

        $('textarea').val(text.join(''));

        $('h1.animated').addClass('bounce');
        $('h1.animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
          $('h1.animated').removeClass('bounce');
        });
      }
    });

  });

})();
