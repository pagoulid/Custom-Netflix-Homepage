function createBox(cssClass,atop,aleft,aWidth, aHeight,btop,bleft,bWidth,bHeight,
    ftop,fleft,fWidth,fHeight,htop,hleft,hWidth,hHeight){/*a for section b for footer*/ 
      
    /*var markup = '<section id = "'+cssClass+'"></section>';*/
    /*$("body").append(markup);*/
    $('#'+cssClass).css({'position': 'absolute', display: 'block', top: atop, left: aleft, height: aHeight, width: aWidth});
    $('footer').css({'position': 'absolute', display: 'block', top: btop, left: bleft, height: bHeight, width: bWidth});
    $('#'+cssClass+'>div form').css({'position': 'absolute', display: 'block', top: ftop, left: fleft, height: fHeight, width: fWidth});
    $('#'+cssClass+'>div h3').css({'position': 'relative', display: 'block', top: htop, left: hleft, height: hHeight, width: hWidth});
  };