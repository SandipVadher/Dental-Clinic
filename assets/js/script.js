$(document).ready(function () {
  var w = window.innerWidth;

  if (w > 767) {
    $("#menu-jk").scrollToFixed();
  } else {
    // $('#menu-jk').scrollToFixed();
  }
});

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    autoplay: true,
    dots: true,
    autoplayTimeout: 5000,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
});

$(document).ready(function () {
  $(".filter-button").click(function () {
    var value = $(this).attr("data-filter");

    if (value == "all") {
      //$('.filter').removeClass('hidden');
      $(".filter").show("1000");
    } else {
      //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
      //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
      $(".filter")
        .not("." + value)
        .hide("3000");
      $(".filter")
        .filter("." + value)
        .show("3000");
    }
  });

  if ($(".filter-button").removeClass("active")) {
    $(this).removeClass("active");
  }
  $(this).addClass("active");
});

const servArr = [
  "home-root-canal",
  "home-cosmetic-dentistry",
  "home-crown",
  "home-denture",
  "home-implants",
  "home-braces",
  "serv-root-canal",
  "serv-cosmetic-dentistry",
  "serv-crown",
  "serv-denture",
  "serv-implants",
  "serv-braces",
];

$(document).ready(function () {
  servArr.forEach((serv) => {
    console.log(serv);
    $(`#${serv}`).on("click", () => {
      window.location.href =
        window.location.href.slice(
          0,
          window.location.href.lastIndexOf("/") + 1
        ) +
        "i-service.html#" +
        serv.slice(serv.indexOf("-") + 1);
    });
  });
});
