var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shop');

var products = [
  new Product({
      imagePath: 'http://www.legittees.com/wp-content/uploads/Neptune_Indigo_W_SS_crop-750x750.jpg',
      title: 'Womens Neptune T-Shirt',
      description: "Readymade you probably haven't heard of them distillery echo park. Health food truck chambray artisan kinfolk whatever mixtape. Gochujang kickstarter lyft pitchfork copper mug raw denim cray taiyaki etsy. Franzen shaman keytar, synth iPhone enamel. Selvage pop-up tumblr fashion axe, direct trade af drinking vinegar jianbing kombucha occupy cronut.",
      price: 25
    }),
    new Product({
        imagePath: 'http://www.legittees.com/wp-content/uploads/Y_SS_Smarty_Navy_Crop-750x750.jpg',
        title: 'Mens Over/Under T-Shirt',
        description: "Readymade you probably haven't heard of them distillery echo park. Health food truck chambray artisan kinfolk whatever mixtape. Gochujang kickstarter lyft pitchfork copper mug raw denim cray taiyaki etsy. Franzen shaman keytar, synth iPhone enamel. Selvage pop-up tumblr fashion axe, direct trade af drinking vinegar jianbing kombucha occupy cronut.",
        price: 20
      }),
      new Product({
          imagePath: 'http://www.legittees.com/wp-content/uploads/female_tank_pelican_red-750x750.png',
          title: 'Womens Soaring Totem Tank Top',
          description: "Readymade you probably haven't heard of them distillery echo park. Health food truck chambray artisan kinfolk whatever mixtape. Gochujang kickstarter lyft pitchfork copper mug raw denim cray taiyaki etsy. Franzen shaman keytar, synth iPhone enamel. Selvage pop-up tumblr fashion axe, direct trade af drinking vinegar jianbing kombucha occupy cronut.",
          price: 22
        }),
        new Product({
            imagePath: 'http://www.legittees.com/wp-content/uploads/Dolman02_Smarty_Black.png-750x750.jpg',
            title: 'Womens Smarty Pants Shirt',
            description: "Readymade you probably haven't heard of them distillery echo park. Health food truck chambray artisan kinfolk whatever mixtape. Gochujang kickstarter lyft pitchfork copper mug raw denim cray taiyaki etsy. Franzen shaman keytar, synth iPhone enamel. Selvage pop-up tumblr fashion axe, direct trade af drinking vinegar jianbing kombucha occupy cronut.",
            price: 25
          }),
          new Product({
              imagePath: 'http://www.legittees.com/wp-content/uploads/male_pelican_black-750x750.png',
              title: 'Mens Soaring Totem T-Shirt',
              description: "Readymade you probably haven't heard of them distillery echo park. Health food truck chambray artisan kinfolk whatever mixtape. Gochujang kickstarter lyft pitchfork copper mug raw denim cray taiyaki etsy. Franzen shaman keytar, synth iPhone enamel. Selvage pop-up tumblr fashion axe, direct trade af drinking vinegar jianbing kombucha occupy cronut.",
              price: 18.50
            }),
            new Product({
                imagePath: 'http://www.legittees.com/wp-content/uploads/female_tank_bike_coffee-1024x1024.png',
                title: 'Womens Cyclist Tank Top',
                description: "Readymade you probably haven't heard of them distillery echo park. Health food truck chambray artisan kinfolk whatever mixtape. Gochujang kickstarter lyft pitchfork copper mug raw denim cray taiyaki etsy. Franzen shaman keytar, synth iPhone enamel. Selvage pop-up tumblr fashion axe, direct trade af drinking vinegar jianbing kombucha occupy cronut.",
                price: 22.50
              })
];

var done = 0;

for (var i = 0; i < products.length; i++) {
  products[i].save(function(err, result) {
    done++;
    if (done === products.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}
