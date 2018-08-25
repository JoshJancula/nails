window.onload = function() {
   
    var images = [
     {link: '../images/gallery7.jpg'},
     {link: '../images/gallery1.jpg'},
     {link: '../images/gallery3.jpg'},
     {link: '../images/gallery4.jpg'},
     {link: '../images/gallery5.jpg'},
     {link: '../images/gallery6.jpg'},
     {link: '../images/gallery2.jpg'},
     {link: '../images/gallery8.jpg'},
     {link: '../images/gallery9.jpg'}
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