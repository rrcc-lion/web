dojo.connect(window, "onload", function(){
	require([
		// Load Modules
		"dojox/charting/Chart",
		"dojox/charting/themes/Charged"
	], function(Chart, theme, PiePlot){
		// Create the chart within it's "holding" node
		var pieChart = new Chart("chartNode");
		
		// Set the theme
		pieChart.setTheme(theme)
		
		// Add the only/default plot
		pieChart.addPlot("default", {
			type: PiePlot, // our plot2d/Pie module reference as type value
			radius: 100,
			fontColor: "black",
			labels: true, // display or hide those % label coming...
			labelStyle: "default", //nide this will come lines... default/columns
			labelOffset: 20
		});
		
		var testChartData = [10,10,20];
		// Add the series of data
		pieChart.addSeries("Status",testChartData);
		
		// Render the cart!
		pieChart.render();
		
	});
});
