let express = require('express');
let app = express();

app.use(express.static('node_modules'))
app.use(express.static('public'))

app.get('/dogs', function(req, res){
    res.send( 
               [{name: 'John', age: 10,img:"https://secure.img1-fg.wfcdn.com/im/69053266/resize-h600-w600%5Ecompr-r85/3610/36102096/Sitting+Shar+Pei+Puppy+Statue.jpg"},
               {name: 'Don', age: 6,img:"https://ip.index.hr/remote/indexnew.s3.index.hr/images2/francuski-buldog.jpg"},
               {name: 'Sprite', age: 14,img:"https://cf.ltkcdn.net/dogs/images/std/65409-250x331-Pitbull_with_pronged_collar.jpg" },
               {name: 'Boogiboo', age: "https://farm4.static.flickr.com/3212/3085997285_6db1a0bf68_b.jpg,img:"}]);

  });
  app.listen(8000);