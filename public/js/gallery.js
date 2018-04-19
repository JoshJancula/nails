window.onload = function() {
   
    var images = [
        {
            link: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-0/c0.22.200.200/p200x200/64841_494947900561492_1067024016_n.jpg?_nc_cat=0&oh=effdf30c1f797ec6b02ae16d8d330078&oe=5B6EB64D"
        },

        {
            link: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-0/p200x200/30264997_1888688734520728_8346468770188886016_n.jpg?_nc_cat=0&oh=12c56d966440a76ac55ceedf678196c9&oe=5B7486BC"
        },
        {
            link: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-0/c21.0.200.200/p200x200/30724059_1897186143670987_3850785806927003648_n.jpg?_nc_cat=0&oh=63a7b96a654532c0ac6864dbcc8fe1f4&oe=5B685E01"
        },
        {
            link: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-0/p200x200/30411615_1888686067854328_2230324676557537280_n.jpg?_nc_cat=0&oh=b5566155a92f41a0c531b76400b6286e&oe=5B5BD53F"
        },
        {
            link: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-0/p200x200/30126916_1886561578066777_6489956104087273472_n.jpg?_nc_cat=0&oh=1b2eba348423d580055e96dc04023708&oe=5B5E6417"
        },
        {
            link: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-0/c0.41.200.200/p200x200/27331876_1813460558710213_1755448621756358961_n.jpg?_nc_cat=0&oh=1198ee4f76731dc4df4f1879b5cf37a9&oe=5B64863E"
        },
        {
            link: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-0/p200x200/25348389_1768591459863790_1139727755674970973_n.jpg?_nc_cat=0&oh=4f305f49dfaeacdb4c6f821fab9f0005&oe=5B4F251D"
        },
        {
            link: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-0/c78.0.200.200/p200x200/25498532_1770599702996299_1217033153219901058_n.jpg?_nc_cat=0&oh=c5ebc1d334a6925b9bcadba583094efb&oe=5B71E6EB"
        },
        {
            link: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-0/c32.0.200.200/p200x200/23032456_1718396481549955_1365706137426647534_n.jpg?_nc_cat=0&oh=aea2015c2c9855adda1f751ae5ff0aca&oe=5B5760AE"
        },
        {
            link: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-0/c33.0.200.200/p200x200/21432852_1668200043236266_4843243817861544948_n.jpg?_nc_cat=0&oh=c7326c02854f5373129b0e55f749303a&oe=5B52F917"
        },
        {
            link: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-0/c0.6.200.200/p200x200/21271279_1664018090321128_3795201186786658852_n.jpg?_nc_cat=0&oh=3f3d2edb0030aa74053877d02123cfce&oe=5B739F29"
        },
         {
            link: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-0/c33.0.200.200/p200x200/21192788_1664013490321588_6784479121471715645_n.jpg?_nc_cat=0&oh=3f81619c8b2140c353f22b920d6bdc86&oe=5B677FFE"
        },
         {
            link: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-0/c29.0.200.200/p200x200/20953409_1653177804738490_2972384483995722123_n.jpg?_nc_cat=0&oh=3fe4eeee340c18e99393ebfe08159a49&oe=5B577E8B"
        },
         {
            link: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-0/p200x200/20882226_1646993085356962_4542010553957801314_n.jpg?_nc_cat=0&oh=88a30c09b034e26cb8968f0c07bf6e6d&oe=5B5E891D"
        },
         {
            link: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-0/c33.0.200.200/p200x200/20728187_1643890659000538_5976211774768851271_n.jpg?_nc_cat=0&oh=182de6e3860286de32bbe14f5f517362&oe=5B596F77"
        },
         {
            link: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-0/p200x200/20374562_1629327830456821_3952293176957983420_n.jpg?_nc_cat=0&oh=69810bf15caaaa37bdefdf3510030e76&oe=5B58BA94"
        },
         {
            link: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-0/p200x200/19656926_1600543020001969_8740258100951246948_n.jpg?_nc_cat=0&oh=dd7b00c86a2e5c2af869e692ed8e8f89&oe=5B7344D6"
        },
         {
            link: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-0/p200x200/19430065_1593141000742171_1353071693425923506_n.jpg?_nc_cat=0&oh=4ec1baaf0e6fc0eecaa98beb85a008d4&oe=5B71C81E"
        },
         {
            link: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-0/p200x200/19114029_1576512525738352_1069635010822620707_n.jpg?_nc_cat=0&oh=148bf651a469457e2e720dc8899e39e5&oe=5B5D2720"
        },
       
         {
            link: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-0/p200x200/16807371_1441042525952020_242036999772388553_n.jpg?_nc_cat=0&oh=356ef8b949dc5780ebb583e9e151c2c8&oe=5B5E19F6"
        },
         {
            link: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-0/p200x200/16426100_1428930357163237_898919660350712183_n.jpg?_nc_cat=0&oh=99d4dfa7febabacf3a8b7c9c497f747f&oe=5B61600B"
        },
        {
            link: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-0/c78.0.200.200/p200x200/12651243_1106679332721676_1042738530333227908_n.jpg?_nc_cat=0&oh=9370bc9912de304fc3f64ac7b97b6f05&oe=5B50224C"
        },
         {
            link: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-0/c0.22.200.200/p200x200/12313733_1073462402710036_5717194834560215843_n.jpg?_nc_cat=0&oh=0b46dfc1d3854a134058aded1b8e5f8d&oe=5B5407E5"
        },
         {
            link: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-0/c0.10.200.200/p200x200/12004766_1035695659820044_5746426507761483841_n.jpg?_nc_cat=0&oh=94f44aae7c3bb9965d2e93d2eccecb05&oe=5B5A06D1"
        },
         {
            link: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-0/c0.34.200.200/p200x200/11855894_1009693655753578_3534054708383626_n.jpg?_nc_cat=0&oh=23f6da37241a14c7ab26eefd2c7a11c8&oe=5B6F17E8"
        },
         {
            link: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-0/c33.0.200.200/p200x200/10426555_898045376918407_3683959467070789307_n.jpg?_nc_cat=0&oh=7dbdd2c3f35011653fe28e6709f779a6&oe=5B6A039C"
        },
         {
            link: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-0/q82/c0.22.200.200/p200x200/10758_679033608819586_802751775_n.jpg?_nc_cat=0&oh=a1260e134da3426171eb5641543e6115&oe=5B5776F3"
        },
        


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