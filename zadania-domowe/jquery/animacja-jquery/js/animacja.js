$(document).ready(function () {
            $('#klikam').click(function() {
                $('#square').animate({
                        left: '100px',
                        width: '100px',
                        height: '100px'
                    }, 3000,
                    function() {
                        $('#square').animate({
                                backgroundColor: 'blue',
                            }, 5000,
                            function tekst() {
                                $('.text').show('slow');
                            });
                    });
            });
        });





