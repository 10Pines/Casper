Handlebars.registerHelper('randomColorHelper', function(colors) {
  return colors[Math.floor(Math.random()*colors.length)];
});
