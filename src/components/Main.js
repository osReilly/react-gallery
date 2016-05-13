require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

//let yeomanImage = require('../images/yeoman.png');
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
class ImgFigure extends React.Component {
  render () {
    return(
        <figure className="img-figure">
          <img src={this.props.data.imgURL} alt={this.props.data.title}/>
          <figcaption>
            <h2 className="img-title">{this.props.data.desc}</h2>
          </figcaption>
        </figure>
      );
  }
}

class AppComponent extends React.Component {
  render() {
    var controllerUtils= [],
        imgFigures =[];
        imagesData.forEach(function(value,index){
          imgFigures.push(<ImgFigure data={value}/>);
        });
    return (
      <section className="stage">
        <section className="img-sec">
          {imgFigures}
        </section>
        <nav className="controller-nav">
          {controllerUtils}
        </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {

    centerePos:{
      left:0,
      right:0

    },
    hPosRange:{
      leftX:[0,0],
      rightX:[0,0],
      y:[0,0]
    },
    vPosRange:{
      x:[0,0],
      topY:[0,0]
    }

};

export default AppComponent;
