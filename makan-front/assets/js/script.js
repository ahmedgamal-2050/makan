function toggleRadio(event)
{
    if(event.target.type === 'radio' && event.target.checked === true)
    {
        setTimeout(()=>{ event.target.checked = false; },0);
    }
}
document.addEventListener('mouseup', toggleRadio);

$(document).ready(function(){
    $('#hero_carousel').owlCarousel({
        items: 1,
        loop: true,
        rewind: true,
        dots: true,
        autoplay: true,
        nav: false,
        navText: ['<i class="fas fa-chevron-left" aria-hidden="true"></i>', '<i class="fas fa-chevron-right" aria-hidden="true"></i>'],
    })

    $('#city_carousel').owlCarousel({
        items: 3,
        loop: true,
        rewind: true,
        dots: true,
        autoplay: true,
        nav: true,
        margin: 16,
        navText: ['<i class="fas fa-chevron-left" aria-hidden="true"></i>', '<i class="fas fa-chevron-right" aria-hidden="true"></i>'],
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    })

    $('.farm-img-carousel').each(function () {
        $(this).owlCarousel({
            items: 1,
            loop: true,
            rewind: true,
            dots: true,
            autoplay: true,
            nav: true,
            navText: ['<i class="fas fa-chevron-left" aria-hidden="true"></i>', '<i class="fas fa-chevron-right" aria-hidden="true"></i>'],
        })
    })
});
$(".frm-select").select2()

$(".image-box").click(function(event) {
	var previewImg = $(this).children("img");

	$(this)
		.siblings()
		.children("input")
		.trigger("click");

	$(this)
		.siblings()
		.children("input")
		.change(function() {
			var reader = new FileReader();

			reader.onload = function(e) {
				var urll = e.target.result;
				$(previewImg).attr("src", urll);
				previewImg.parent().css("background", "transparent");
				previewImg.show();
                previewImg.siblings(".content-box").hide();
			};
			reader.readAsDataURL(this.files[0]);
		});
});


$("#activationCode").on("keyup", "input", function () {
  var $field = $(this);
  if ($field.val().length === 1) {
      $field.next().focus();
  }
});

