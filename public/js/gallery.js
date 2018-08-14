window.onload = function() {
   
    var images = [
      {
          link: 'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-0/p200x200/36818845_2004929706229963_2502386085682741248_n.jpg?_nc_cat=0&oh=b7991a9d933405034c264178bfacac6a&oe=5BF765C8'
      }, 
      {
          link: 'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-0/p200x200/32359556_1925564744166460_29578099737755648_n.jpg?_nc_cat=0&oh=3870b5a5bd8c75c22f8f73b7a72cae48&oe=5BFE9E37'
      },
      {
          link: 'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-0/p200x200/30411615_1888686067854328_2230324676557537280_n.jpg?_nc_cat=0&oh=52f3601023d9109316a56af2fadfea45&oe=5BFA093F'
      },
      {
          link: 'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-0/p200x200/23561364_1730140533708883_3900128499216934581_n.jpg?_nc_cat=0&oh=8b6942c0bebb67461c79fe95d095a0c5&oe=5BFC59A5'
      },
      {
          link: 'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-0/p200x200/23519189_1734676416588628_7818889969883858061_n.jpg?_nc_cat=0&oh=0228f01e6654d836699eec3d152fc79c&oe=5BFCADDA'
      },
      {
          link: 'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-0/c0.22.200.200/p200x200/22449986_1704993986223538_4951017874224873050_n.jpg?_nc_cat=0&oh=1f0cf1d7fc3b3237a067d346fb35a853&oe=5BFDE478'
      },
      {
          link: 'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-0/c0.6.200.200/p200x200/21271279_1664018090321128_3795201186786658852_n.jpg?_nc_cat=0&oh=07d791f63d3ea605c1673d03f266ba12&oe=5C11D329'
      },
      {
          link: 'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-0/p200x200/19656926_1600543020001969_8740258100951246948_n.jpg?_nc_cat=0&oh=f9507f72a60979033ed39f331ebe3571&oe=5C1178D6'
      },
      {
          link: 'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-0/c52.0.200.200/p200x200/13892256_1234440053278936_9150595237064868996_n.jpg?_nc_cat=0&oh=2b56c9f548abca5b27540f2781338956&oe=5BFD7932'
      }
    ];


   
    const Div = $("<div>"); // new div
   $("#galleryArea").append(Div);
    images.forEach(function(result) {
        let pic = result.link;
        let newImage = $("<a class='card galleryCard'>").append(
            "<div class= 'dynamicImage'><img src=" + pic + " class='galleryImage'></div></a>"

        )
        Div.append(newImage);
    });



}



// this is copyrighted by josh jancula 2018 all rights reserved