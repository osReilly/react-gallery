require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');
let imagesData = require('../data/imageData.json');
/*
  将突破信息转成图片URL路劲信息
 */
imagesData = (function ImageURL (data) {
  for (var i = data.length - 1; i >= 0; i--) {
    var singleImage =  data[i];
    singleImage.imgURL = require('../images/'+singleImage.fileName);
    data[i] = singleImage;
  };
  return data;
})(imagesData);

//imagesData = imgURL(imagesData);


class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
        <section className="img-sec">
        </section>
        <nav className="controller-nav">
        </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
