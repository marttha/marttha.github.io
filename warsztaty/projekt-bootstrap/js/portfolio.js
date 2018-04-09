$("a[href^='#]").on('click', function(e){
    e.preventDefault();
    $('html, body').animate(
        {screenTop: $(this.hash).offset().top},600
                            ),
});