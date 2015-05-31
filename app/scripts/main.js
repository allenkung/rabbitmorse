(function(){

  'use strict';

  console.log('---------> Rabbit Morse, ' + Date());

  var rabbitMorse = {
    a : '乎呼',
    b : '呼乎乎乎',
    c : '呼乎呼乎',
    d : '呼乎乎',
    e : '乎',
    f : '乎乎呼乎',
    g : '呼呼乎',
    h : '乎乎乎乎',
    i : '乎乎',
    j : '乎呼呼呼',
    k : '呼乎呼',
    l : '乎呼乎乎',
    m : '呼呼',
    n : '呼乎',
    o : '呼呼呼',
    p : '乎呼呼乎',
    q : '呼呼乎呼',
    r : '乎呼乎',
    s : '乎乎乎',
    t : '呼',
    u : '乎乎呼',
    v : '乎乎乎呼',
    w : '乎呼呼',
    x : '呼乎乎呼',
    y : '呼乎呼呼',
    z : '呼呼乎乎'
  };

  // console.log(rabbitMorse.a);

  $(document).ready(function(){

    $('#r2e').click(function(){
      var text = $('textarea').val();
      console.log(text);
      text = text.split('');
      console.log(text);

      $.each(text,function(key, value){
        console.log(key + ':' + value);
        text[key] = rabbitMorse[value];
      });

      console.log(text);

      $('textarea').val(text.join(' '));

    });
  });

})();
