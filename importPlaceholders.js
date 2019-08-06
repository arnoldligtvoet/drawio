/**
 * load PlaceHolders in Draw.io
 */
Draw.loadPlugin(function(ui) {
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
