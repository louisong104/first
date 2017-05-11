// 1. It should link the checkbox to our script.
// 2. It should test if checkbox is toggled on or off.
// 3. If checked, it should test each article
  // 4. It should only show the article that is non-dairy...
  // 5. ...and hide the rest
// var dairyCheckbox = document.querySelector('.dairy-checkbox');
var dairyCheckbox = $('.dairy-checkbox');

var articles = $('article');


dairyCheckbox.change(function(){
 if (this.checked) {
  //  articles.each(function(){
  //  console.log($(this));
  articles.each(function(){
    if (!$(this).hasClass('non-dairy')) {
$(this).fadeOut();

  }
})
}else{
  articles.each(function(){
$(this).fadeIn();
})
}
});
var ingredientsCheckbox = $('.ingredientsCheckbox');

var sections = $('section');

ingredientsCheckbox.change(function(){
  if (this.checked) {
    sections.each(function(){
      if ($(this).hasClass('ingredients')) {
        $(this).fadeOut();

      }
    })
  }else{
    sections.each(function(){
      if ($(this).hasClass('ingredients')) {
        $(this).fadeIn()
  })
}
});

var stepsCheckbox = $('.stepsCheckbox');

stepsCheckbox.change(function(){
  if (this.checked) {
    sections.each(function(){
      if ($(this).hasClass('instructions')) {
        $(this).fadeOut();

      }
    })
  }else{
    sections.each(function(){
      if ($(this).hasClass('instructions')) {
        $(this).fadeIn();
  })
}
});

var infoCheckbox = $('.infoCheckbox');

infoCheckbox.change(function(){
  if (this.checked) {
    sections.each(function(){
      if ($(this).hasClass('info')) {
        $(this).fadeOut();

      }
    })
  }else{
    sections.each(function(){
      if ($(this).hasClass('info')) {
        $(this).fadeIn();
  })
}
});
