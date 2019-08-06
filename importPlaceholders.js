/**
 * load PlaceHolders in Draw.io
 */
Draw.loadPlugin(function(ui) {
   // Adds logo to footer
   ui.footerContainer.innerHTML = '<img width=50px height=17px align="right" style="margin-top:14px;margin-right:12px;" ' + 'src="http://download.esolia.net.s3.amazonaws.com/img/eSolia-Logo-Color.svg"/>';

	
  // Adds variables in labels (%today, %filename%)
  var superGetLabel = ui.editor.graph.getLabel;
	
	ui.editor.graph.getLabel = function(cell)
	{
		var result = superGetLabel.apply(this, arguments);
		
		if (result != null)
		{
			var today = new Date().toLocaleString();
			var file = ui.getCurrentFile();
			//var filename = (file != null && file.getTitle() != null) ? file.getTitle() : '';
      var filename = "Test met Pieter";
			
			result = result.replace('%today%', today).replace('%filename%', filename);
		}
		
		return result;
	};
});
