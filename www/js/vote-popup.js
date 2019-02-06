
/*¯¯¯¯|¯¯¯¯¯|¯¯¯¯¯¯¯¯|¯¯¯|¯¯¯||¯¯¯|¯¯¯|¯¯¯¯¯¯¯¯|¯¯¯¯¯¯|¯¯¯¯*\
|###########################################|
|#_____________________..ButsagsCMS.._____________________#|
|#______.Copyright ©2000-2009 Chris Ingis. All Rights Reserved._____#|
|###########################################|
\*____|_____|________|___|___||___|___|________|______|____*/




	var voteNr = 1;
	var hiddenNodes = new Array();

  window.addEvent('load', function(){
      if(window.ie){
          $$('select').each(function(el){
              hiddenNodes.push(el);
              el.setStyle('visibility', 'hidden');
          });
      }

      var blackLayer = new Element('div', {
          'styles': {
              'position': 'absolute',
              'top': '0px',
              'left': '0px',	
              'width': window.getScrollWidth(),
              'height': window.getScrollHeight(),
              'background-color': '#000000',
              'opacity': 0.7,
              'z-index': 99998
          }
      }).injectInside(document.body);
      
      var voteContainer = new Element('div', {
          'styles': {
              'position': 'absolute',
              'top': ( window.getScrollTop() + ( window.getHeight() - voteImage.height ) / 2 ),
              'left': ( window.getScrollLeft() + ( window.getWidth() - voteImage.width ) / 2 ),
              'width': voteImage.width,
              'background-color': '#000000',
              'z-index': 99999
          }
      }).injectInside(document.body);
      
      var voteLink = new Element('a', {
          'href': voteLinks[voteNr - 1],
          'target': '_blank'
      }).injectInside(voteContainer);
      voteImage.setStyle('border', '1px solid #FFFFFF').injectInside(voteLink);

      var voteNumber = new Element('div', {
          'styles': {
              'position': 'absolute',
              'top': '0px',
              'right': '0px',
              'font-size': 14,
              'font-weight': 'bold',
              'color': '#FFFFFF',
              'padding': '5px'
          }
      }).setText('').injectInside(voteContainer);
      
      var voteAbort = new Element('div', {
          'styles': {
              'color': '#FFFFFF',
              'cursor': 'pointer',
              'text-align': 'center'
          }
      }).setText('Already Voted Today. Close Window [x]').injectInside(voteContainer);
      
      voteAbort.addEvent('click', function(){
					createCookie('butsags-CMS', 'butsags-CMS', '10');
          if(window.ie) hiddenNodes.each(function(el){ el.setStyle('visibility', ''); });
          blackLayer.remove();
          voteContainer.remove();
          window.removeEvents('scroll').removeEvents('resize');
          Garbage.trash([blackLayer, voteContainer]);
      });
      
      voteLink.addEvent('click', function(){
					createCookie('butsags-CMS', 'butsags-CMS', '720');
          voteNr++;
          (function(){
              if(voteNr > voteLinks.length){
                  if(window.ie) hiddenNodes.each(function(el){ el.setStyle('visibility', ''); });
                  blackLayer.remove();
                  voteContainer.remove();
                  window.removeEvents('scroll').removeEvents('resize');
                  Garbage.trash([blackLayer, voteContainer]);
              }else{
                  voteLink.href = voteLinks[voteNr - 1];
                  voteNumber.setText('Click here to vote');
              }
          }).delay(10);
      });
      
      window.addEvent('scroll', function(){
          voteContainer.setStyles({
              'top': ( window.getScrollTop() + ( window.getHeight() - voteImage.height ) / 2 ),
              'left': ( window.getScrollLeft() + ( window.getWidth() - voteImage.width ) / 2 )
          })
      });
      
      window.addEvent('resize', function(){
          blackLayer.setStyles({
              'width': window.getScrollWidth(),
              'height': window.getScrollHeight()
          });
          voteContainer.setStyles({
              'top': ( window.getScrollTop() + ( window.getHeight() - voteImage.height ) / 2 ),
              'left': ( window.getScrollLeft() + ( window.getWidth() - voteImage.width ) / 2 )
          })
      });
  });