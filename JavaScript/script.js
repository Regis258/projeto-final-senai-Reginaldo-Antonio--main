$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth: true,
        loop:true,
        onSliderLoaded: function(){
            $('#autoWidth').removeClass('cS-hidden');
        }
    })
});