// side menu close start
$(".side-menu-close").on("click", function () {
  if (!$(".side-menu-close").hasClass("closed")) {
    $(".side-menu-close").addClass("closed");
  } else {
    $(".side-menu-close").removeClass("closed");
  }
});
// side menu close end
const $menu = $(".side-menu-wrap");
$(document).mouseup((e) => {
  if (
    !$menu.is(e.target) && // if the target of the click isn't the container...
    $menu.has(e.target).length === 0
  ) {
    $menu.removeClass("opened");
    $(".side-menu-close").removeClass("closed");
  }
});

// open side menu when clicked on menu button start
$(".side-menu-close").on("click", function () {
  if (!$(".side-menu-wrap").hasClass("opened")) {
    $(".side-menu-wrap").addClass("opened");
  } else {
    $(".side-menu-wrap").removeClass("opened");
  }
});

// close side menu when swiped start
var isDragging = false,
  initialOffset = 0,
  finalOffset = 0;
$(".side-menu-wrap")
  .mousedown(function (e) {
    isDragging = false;
    initialOffset = e.offsetX;
  })
  .mousemove(function () {
    isDragging = true;
  })
  .mouseup(function (e) {
    var wasDragging = isDragging;
    isDragging = false;
    finalOffset = e.offsetX;
    if (wasDragging) {
      if (initialOffset > finalOffset) {
        sideMenuCloseAction();
      }
    }
  });
// close side menu when swiped end

function sideMenuCloseAction() {
  $(".side-menu-wrap").addClass("open");
  $(".side-menu-wrap").removeClass("opened");
  $(".side-menu-close").removeClass("closed");
}
// close side menu when clicked on overlay end

// close side menu over 992px start
$(window).on("resize", function () {
  if ($(window).width() >= 992) {
    sideMenuCloseAction();
  }
});
// close side menu over 992px end

// Fancybox gallary
$('[data-fancybox="gallery"]').fancybox({
  buttons: ["zoom", "fullScreen", "share", "close"],
  loop: true,
  protect: true,
});

/*chat in mobile */
jQuery(document).ready(function () {
  $(".chat-list a").click(function () {
    $(".chatbox").addClass("showbox");
    return false;
  });

  $(".chat-icon").click(function () {
    $(".chatbox").removeClass("showbox");
  });
});

/*profile tabs */
const controls = document.querySelectorAll(".tab-profile");
const tabs = document.querySelectorAll(".tab");

// display none for 1-length tabs
for (let i = 1; i < tabs.length; i++) {
  tabs[i].style.display = "none";
}

// set value forl all tabs
for (let i = 0; i < tabs.length; i++) {
  tabs[i].setAttribute("value", i);
}

// add event listener for all controls
for (let i = 0; i < controls.length; i++) {
  controls[i].setAttribute("value", i);
  controls[i].addEventListener("click", displayTab);
}

// display tab function
function displayTab() {
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
    controls[i].removeAttribute("id");
  }
  tabs[this.value].style.display = "block";
  controls[this.value].setAttribute("id", "profile-selected");
}

function toggleRadio(event) {
  if (event.target.type === "radio" && event.target.checked === true) {
    setTimeout(() => {
      event.target.checked = false;
    }, 0);
  }
}
document.addEventListener("mouseup", toggleRadio);

$(document).ready(function () {
  $("#hero_carousel").owlCarousel({
    items: 1,
    loop: true,
    rewind: true,
    dots: true,
    autoplay: false,
    nav: false,
    navText: [
      '<i class="fas fa-chevron-left" aria-hidden="true"></i>',
      '<i class="fas fa-chevron-right" aria-hidden="true"></i>',
    ],
  });

  $("#city_carousel").owlCarousel({
    items: 3,
    loop: true,
    rewind: true,
    center: true,
    dots: true,
    autoplay: true,
    nav: true,
    margin: 10,
    navText: [
      '<i class="fas fa-chevron-left" aria-hidden="true"></i>',
      '<i class="fas fa-chevron-right" aria-hidden="true"></i>',
    ],
    responsive: {
      0: {
        items: 1.5,
      },
      767: {
        items: 2.5,
      },
      992: {
        items: 3.5,
      },
    },
  });

  $(".farm-img-carousel").each(function () {
    $(this).owlCarousel({
      items: 1,
      loop: true,
      rewind: true,
      dots: true,
      autoplay: true,
      nav: true,
      navText: [
        '<i class="fas fa-chevron-left" aria-hidden="true"></i>',
        '<i class="fas fa-chevron-right" aria-hidden="true"></i>',
      ],
    });
  });
});
$(".frm-select").select2();

$(".image-box").click(function (event) {
  var previewImg = $(this).children("img");

  $(this).siblings().children("input").trigger("click");

  $(this)
    .siblings()
    .children("input")
    .change(function () {
      var reader = new FileReader();

      reader.onload = function (e) {
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

/* intlTelInput */
const allTelInputs = document.querySelectorAll("[type='tel']");
allTelInputs.forEach((input) => {
  intlTelInput(input, {
    initialCountry: "sa",
    preferredCountries: ["sa"],
    separateDialCode: true,
  });
});
/*owner form-6 */
function RadioContent() {
  var verification = document.getElementById("verification");
  var NoVerification = document.getElementById("NoVerification");
  radioContentId.style.display = NoVerification.checked ? "block" : "none";
}
/*owner form-5 */
function RadioContentPrices() {
  var me = document.getElementById("me");
  var other = document.getElementById("other");
  optionOneId.style.display = me.checked ? "block" : "none";
  optionTwoId.style.display = other.checked ? "block" : "none";
}
/*read only radio buttons in profile page */
$(".my-account-page :radio:not(:checked)").attr("disabled", true);
