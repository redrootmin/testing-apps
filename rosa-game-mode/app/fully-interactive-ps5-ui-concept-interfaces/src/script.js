//-------------------------------------------------------the loading intro
const ps5_intro = document.getElementById("ps5_intro");
const controller_container = document.getElementById("controller_container");
const intro_info = document.getElementById("intro_info");
const playstation = document.getElementById("playstation");
const initial_logo = document.getElementById("initial_logo");
const ps5_ui = document.getElementById("ps5_ui");

ps5_intro.style.display = "flex";
initial_logo.style.display = "flex";
controller_container.style.display = "none";
intro_info.style.display = "none";

setTimeout(() => {
  ps5_intro.style.display = "grid";
  initial_logo.style.display = "none";
  controller_container.style.display = "flex";
  intro_info.style.display = "flex";
  controller_container.classList.add("opacity");
  intro_info.classList.add("opacity");

  setTimeout(() => {
    controller_container.classList.remove("opacity");
    intro_info.classList.remove("opacity");
  }, 2000);
}, 3000);

ps5_ui.style.display = "none";

setTimeout(() => {
  playstation.style.pointerEvents = "auto";
}, 3000);

$("#playstation").click(function () {
  $(".intro_info").addClass("intro_info_hide_anim");
  $(".controller_container").addClass("controller_container_hide_anim");

  setTimeout(() => {
    $(".intro_info").removeClass("intro_info_hide_anim");
    $(".controller_container").removeClass("controller_container_hide_anim");
    intro_info.style.visibility = "hidden";
    controller_container.style.visibility = "hidden";

    ps5_intro.style.display = "none";
    ps5_intro.style.visibility = "hidden";
    ps5_intro.style.width = "0";
    ps5_intro.style.height = "0";
    ps5_ui.style.display = "flex";

    $(".games_list").addClass("games_list_anim");
    $("#game_bg").addClass("game_bg_anim");
    $(".white_rect").addClass("white_rect_anim");
    $("#game_play_time").addClass("game_play_time_anim");
    $("#game_name").addClass("game_name_anim");
    $(".game_start_button").addClass("game_start_button_anim");
    $("#last_checkpoint_img").addClass("last_checkpoint_img_anim");
    $("#last_checkpoint_text").addClass("last_checkpoint_text_anim");
    $("#last_checkpoint_name").addClass("last_checkpoint_name_anim");
    $("#last_checkpoint_time").addClass("last_checkpoint_time_anim");
    $("#last_trophy_img").addClass("last_trophy_img_anim");
    $("#last_trophy_text").addClass("last_trophy_text_anim");
    $("#last_trophy_name").addClass("last_trophy_name_anim");
    $("#last_trophy_time").addClass("last_trophy_time_anim");
    $("#top_trophy_img").addClass("top_trophy_img_anim");
    $("#top_trophy_text").addClass("top_trophy_text_anim");
    $("#top_trophy_name").addClass("top_trophy_name_anim");
    $("#top_trophy_time").addClass("top_trophy_time_anim");
    $("#all_trophies_img").addClass("all_trophies_img_anim");
    $("#all_trophies_text").addClass("all_trophies_text_anim");
    $("#all_trophies_numbers").addClass("all_trophies_numbers_anim");
    $(".notification_text").addClass("notification_text_anim");

    setTimeout(() => {
      $(".games_list").removeClass("games_list_anim");
      $("#game_bg").removeClass("game_bg_anim");
      $(".white_rect").removeClass("white_rect_anim");
      $("#game_play_time").removeClass("game_play_time_anim");
      $("#game_name").removeClass("game_name_anim");
      $(".game_start_button").removeClass("game_start_button_anim");
      $("#last_checkpoint_img").removeClass("last_checkpoint_img_anim");
      $("#last_checkpoint_text").removeClass("last_checkpoint_text_anim");
      $("#last_checkpoint_name").removeClass("last_checkpoint_name_anim");
      $("#last_checkpoint_time").removeClass("last_checkpoint_time_anim");
      $("#last_trophy_img").removeClass("last_trophy_img_anim");
      $("#last_trophy_text").removeClass("last_trophy_text_anim");
      $("#last_trophy_name").removeClass("last_trophy_name_anim");
      $("#last_trophy_time").removeClass("last_trophy_time_anim");
      $("#top_trophy_img").removeClass("top_trophy_img_anim");
      $("#top_trophy_text").removeClass("top_trophy_text_anim");
      $("#top_trophy_name").removeClass("top_trophy_name_anim");
      $("#top_trophy_time").removeClass("top_trophy_time_anim");
      $("#all_trophies_img").removeClass("all_trophies_img_anim");
      $("#all_trophies_text").removeClass("all_trophies_text_anim");
      $("#all_trophies_numbers").removeClass("all_trophies_numbers_anim");
      $(".notification_text").removeClass("notification_text_anim");
    }, 600);
  }, 1000);
});

//-------------------------------------------------------the actual interface
//------------------show top tabs
const tab_indicator = document.querySelector(".tab_indicator");
const tab = document.querySelectorAll(".tab");
const top_bar = document.getElementById("top_bar");

function handleIndicator(el) {
  tab.forEach((item) => {
    item.classList.remove("active");
    item.removeAttribute("style");
  });

  tab_indicator.style.left = `${el.offsetLeft}px`;
  tab_indicator.style.backgroundColor = el.getAttribute("active-color");
  top_bar.style.color = el.getAttribute("active-color");

  el.classList.add("active");
  el.style.color = "#fff";
}

tab.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    handleIndicator(e.target);
  });
  if (item.classList.contains("active") && handleIndicator(item)) {
    item.classList.add(!"active");
  }
});

//------------------show real time
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  m = checkTime(m);
  document.getElementById("time").innerHTML = h + ":" + m;
  t = setTimeout(function () {
    startTime();
  }, 6000);
}
startTime();

//------------------switch tabs content
function switchTabs(bg_tab_name, fg_tab_name, element) {
  var i, tab_content;
  tab_content = document.getElementsByClassName("tab_content");
  for (i = 0; i < tab_content.length; i++) {
    tab_content[i].style.display = "none";
  }
  document.getElementById(bg_tab_name).style.display = "flex";
  document.getElementById(fg_tab_name).style.display = "flex";

  $(".games_list").addClass("games_list_anim");
  $("#game_bg").addClass("game_bg_anim");
  $(".white_rect").addClass("white_rect_anim");
  $("#game_play_time").addClass("game_play_time_anim");
  $("#game_name").addClass("game_name_anim");
  $(".game_start_button").addClass("game_start_button_anim");
  $("#last_checkpoint_img").addClass("last_checkpoint_img_anim");
  $("#last_checkpoint_text").addClass("last_checkpoint_text_anim");
  $("#last_checkpoint_name").addClass("last_checkpoint_name_anim");
  $("#last_checkpoint_time").addClass("last_checkpoint_time_anim");
  $("#last_trophy_img").addClass("last_trophy_img_anim");
  $("#last_trophy_text").addClass("last_trophy_text_anim");
  $("#last_trophy_name").addClass("last_trophy_name_anim");
  $("#last_trophy_time").addClass("last_trophy_time_anim");
  $("#top_trophy_img").addClass("top_trophy_img_anim");
  $("#top_trophy_text").addClass("top_trophy_text_anim");
  $("#top_trophy_name").addClass("top_trophy_name_anim");
  $("#top_trophy_time").addClass("top_trophy_time_anim");
  $("#all_trophies_img").addClass("all_trophies_img_anim");
  $("#all_trophies_text").addClass("all_trophies_text_anim");
  $("#all_trophies_numbers").addClass("all_trophies_numbers_anim");
  $(".notification_text").addClass("notification_text_anim");

  setTimeout(() => {
    $(".games_list").removeClass("games_list_anim");
    $("#game_bg").removeClass("game_bg_anim");
    $(".white_rect").removeClass("white_rect_anim");
    $("#game_play_time").removeClass("game_play_time_anim");
    $("#game_name").removeClass("game_name_anim");
    $(".game_start_button").removeClass("game_start_button_anim");
    $("#last_checkpoint_img").removeClass("last_checkpoint_img_anim");
    $("#last_checkpoint_text").removeClass("last_checkpoint_text_anim");
    $("#last_checkpoint_name").removeClass("last_checkpoint_name_anim");
    $("#last_checkpoint_time").removeClass("last_checkpoint_time_anim");
    $("#last_trophy_img").removeClass("last_trophy_img_anim");
    $("#last_trophy_text").removeClass("last_trophy_text_anim");
    $("#last_trophy_name").removeClass("last_trophy_name_anim");
    $("#last_trophy_time").removeClass("last_trophy_time_anim");
    $("#top_trophy_img").removeClass("top_trophy_img_anim");
    $("#top_trophy_text").removeClass("top_trophy_text_anim");
    $("#top_trophy_name").removeClass("top_trophy_name_anim");
    $("#top_trophy_time").removeClass("top_trophy_time_anim");
    $("#all_trophies_img").removeClass("all_trophies_img_anim");
    $("#all_trophies_text").removeClass("all_trophies_text_anim");
    $("#all_trophies_numbers").removeClass("all_trophies_numbers_anim");
    $(".notification_text").removeClass("notification_text_anim");
  }, 400);
}
document.getElementById("default").click();

//------------------custom background animation only for the last 3 tabs
var iconList = ["triangle", "square", "cross", "circle"],
  icons = document.getElementsByClassName("icon"),
  ready = 0,
  i,
  j;

function changeIcon(icon, iconParent) {
  var randomIcon =
      "#bg_" + iconList[Math.floor(Math.random() * iconList.length)],
    iconNum = parseInt(icon.id.substr(3));

  if (ready < iconNum) {
    ready = iconNum;
  }

  iconParent.classList.remove("icon_animate");
  icon.setAttribute("xlink:href", randomIcon);

  if (ready === 4) {
    setTimeout(function () {
      for (j = 0; j < icons.length; j++) {
        icons[j].classList.add("icon_animate");
      }
      ready = 0;
    }, 0);
  }
}

for (i = 0; i < icons.length; i++) {
  icons[i].addEventListener("animationend", function (e) {
    changeIcon(e.target.querySelector(".svg-icon"), e.target);
  });
}

//------------------custom PS5 icons (not to be confused with the bg icons from above)
var faL1 = {
  prefix: "fac",
  iconName: "l1",
  icon: [
    300,
    240,
    [],
    null,
    "M268,240H30A30,30,0,0,1,0,210H0C0,94,94,0,210,0h58a32,32,0,0,1,32,32V208A32,32,0,0,1,268,240ZM137.84,94.42H123.78v68.25H167.7V151.38H137.84Zm69.38-.09h-1.45L177.5,104.45v11l16.17-5v52.22h13.55Z"
  ]
};

var faR1 = {
  prefix: "fac",
  iconName: "r1",
  icon: [
    300,
    240,
    [],
    null,
    "M270,240H32A32,32,0,0,1,0,208V32A32,32,0,0,1,32,0H90C206,0,300,94,300,210h0A30,30,0,0,1,270,240ZM127.2,162.67h15.1V162l-14.77-27.89a20.73,20.73,0,0,0,9.17-7.43,21.06,21.06,0,0,0,3-11.65q0-9.85-6.56-15.24T114.5,94.42H89.14v68.25H103.2v-25h11.21Zm-24-56.86h11.3c3.78,0,6.59.92,8.41,2.77a10.29,10.29,0,0,1,2.75,7.59,9.63,9.63,0,0,1-2.91,7.43q-2.91,2.7-8.2,2.7H103.2Zm78.66-11.48h-1.45l-28.27,10.12v11l16.17-5v52.22h13.55Z"
  ]
};

var faPS5 = {
  prefix: "fac",
  iconName: "ps5",
  icon: [
    320,
    300,
    [],
    null,
    "M304,210H16A16,16,0,0,1,0,194V106A16,16,0,0,1,16,90H304a16,16,0,0,1,16,16v88A16,16,0,0,1,304,210Zm-96.89-87.56V143a9.37,9.37,0,0,0,9.37,9.37h49.58a9.64,9.64,0,0,1,9.73,8.8,9.42,9.42,0,0,1-9.4,10.05H207.11v6.32h64.43c8.48,0,15.77-6.52,16.17-15A15.74,15.74,0,0,0,272,146.07H222.8a3.77,3.77,0,0,1-3.77-3.76V128.76h66.54v-6.32Zm-46.16,0A14.92,14.92,0,0,0,146,137.36v25.45a8.43,8.43,0,0,1-8.43,8.43H108.89v6.32H143A14.92,14.92,0,0,0,158,162.64V137.19a8.43,8.43,0,0,1,8.43-8.43h29.25v-6.32Zm-128.68,0v6.32H92a8.86,8.86,0,0,1,8.93,8.08,8.66,8.66,0,0,1-8.64,9.23H47.18A14.92,14.92,0,0,0,32.27,161v16.57H44.19V160.82a8.42,8.42,0,0,1,8.43-8.43h44.8a15.26,15.26,0,0,0,15.38-14.25,15,15,0,0,0-15-15.7Z"
  ]
};

var faPS5_ALT = {
  prefix: "fac",
  iconName: "ps5-alt",
  icon: [
    320,
    100,
    [],
    null,
    "M207.11,22.44V43a9.37,9.37,0,0,0,9.37,9.37h49.91a9.43,9.43,0,0,1,0,18.85H207.11v6.32H272a15.75,15.75,0,0,0,0-31.49H222.8A3.77,3.77,0,0,1,219,42.31V28.76h66.54V22.44Zm-46.16,0A14.92,14.92,0,0,0,146,37.36V62.81a8.43,8.43,0,0,1-8.43,8.43H108.89v6.32H143A14.92,14.92,0,0,0,158,62.64V37.19a8.43,8.43,0,0,1,8.43-8.43h29.25V22.44Zm-128.68,0v6.32h60a8.66,8.66,0,1,1,0,17.31H47.18A14.92,14.92,0,0,0,32.27,61V77.56H44.19V60.82a8.42,8.42,0,0,1,8.43-8.43H97.84a15,15,0,1,0,0-29.95Z"
  ]
};

var faCROSS = {
  prefix: "fac",
  iconName: "ps5-cross",
  icon: [
    201.4,
    201.4,
    [],
    null,
    "M100.7,3.4c53.7,0,97.3,43.6,97.3,97.3S154.4,198,100.7,198S3.4,154.4,3.4,100.7S47,3.4,100.7,3.4zM107.1,100.7l27.5-27.5c1.8-1.8,1.8-4.7,0-6.5s-4.7-1.8-6.5,0l-27.5,27.5L73.2,66.8c-1.8-1.8-4.7-1.8-6.5,0c-1.8,1.8-1.8,4.7,0,6.5l27.5,27.5l-27.5,27.5c-1.8,1.8-1.8,4.7,0,6.5c0.9,0.9,2.1,1.3,3.2,1.3c1.1,0,2.3-0.5,3.2-1.3l27.5-27.5l27.5,27.5c1.8,1.8,4.7,1.8,6.5,0c0.9-0.9,1.3-2.1,1.3-3.2s-0.5-2.3-1.3-3.2L107.1,100.7z"
  ]
};

var faSQUARE = {
  prefix: "fac",
  iconName: "ps5-square",
  icon: [
    201.4,
    201.4,
    [],
    null,
    "M100.7,3.4C47,3.4,3.4,47,3.4,100.7S47,198,100.7,198s97.3-43.6,97.3-97.3S154.4,3.4,100.7,3.4z M138.2,133.7c0,2.5-2.1,4.5-4.5,4.5h-66c-2.5,0-4.5-2.1-4.5-4.5v-66c0-2.5,2.1-4.5,4.5-4.5h66c2.5,0,4.5,2.1,4.5,4.5V133.7z M72.2,72.2h56.9v56.9H72.2V72.2z"
  ]
};

var faTRIANGLE = {
  prefix: "fac",
  iconName: "ps5-triangle",
  icon: [
    201.4,
    201.4,
    [],
    null,
    "M100.7,3.4C47,3.4,3.4,47,3.4,100.7S47,198,100.7,198s97.3-43.6,97.3-97.3S154.4,3.4,100.7,3.4z M140.8,132.4c-0.8,1.4-2.3,2.3-3.9,2.3H64.6c-1.6,0-3.1-0.9-3.9-2.3c-0.8-1.4-0.8-3.1,0-4.5l36.1-63.3c0.8-1.4,2.3-2.3,3.9-2.3c1.6,0,3.1,0.9,3.9,2.3l36.1,63.3C141.6,129.3,141.6,131,140.8,132.4z M72.4,125.6H129L100.7,76L72.4,125.6z"
  ]
};

var faCIRCLE = {
  prefix: "fac",
  iconName: "ps5-circle",
  icon: [
    201.4,
    201.4,
    [],
    null,
    "M100.7,3.4C47,3.4,3.4,47,3.4,100.7S47,198,100.7,198s97.3-43.6,97.3-97.3S154.4,3.4,100.7,3.4z M100.7,147.4C75,147.4,54,126.4,54,100.7S75,54,100.7,54s46.7,20.9,46.7,46.7S126.4,147.4,100.7,147.4z M100.7,63.2c20.7,0,37.5,16.8,37.5,37.5s-16.8,37.5-37.5,37.5s-37.5-16.8-37.5-37.5S80,63.2,100.7,63.2z"
  ]
};

FontAwesome.library.add(
  faL1,
  faR1,
  faPS5,
  faPS5_ALT,
  faCROSS,
  faSQUARE,
  faTRIANGLE,
  faCIRCLE
);

//------------------da games boiiii (carousel + info and other details)
(function ($) {
  $(function () {
    var slider = $(".games_slider").flickity({
      imagesLoaded: true,
      percentPosition: false,
      prevNextButtons: false,
      initialIndex: 0,
      pageDots: false,
      groupCells: 1,
      selectedAttraction: 0.2,
      friction: 0.8,
      draggable: false
    });

    //enable clicking on cards
    slider.on("staticClick.flickity", function (
      event,
      pointer,
      cellElement,
      cellIndex
    ) {
      if (typeof cellIndex == "number") {
        slider.flickity("selectCell", cellIndex);
      }
    });

    //resize the selected card
    var flkty = slider.data("flickity");
    flkty.selectedElement.classList.add("is-custom-selected");
    flkty.resize();
    flkty.reposition();
    let time = 0;
    function reposition() {
      flkty.reposition();
      if (time++ < 10) {
        requestAnimationFrame(reposition);
      } else {
        $(".flickity-prev-next-button").css("pointer-events", "auto");
      }
    }
    requestAnimationFrame(reposition);

    flkty.on("settle", () => {
      $(".game_card").removeClass("is-custom-selected");
      $(".flickity-prev-next-button").css("pointer-events", "none");
      flkty.selectedElement.classList.add("is-custom-selected");

      let time = 0;
      function reposition() {
        flkty.reposition();
        if (time++ < 10) {
          requestAnimationFrame(reposition);
        } else {
          $(".flickity-prev-next-button").css("pointer-events", "auto");
        }
      }
      requestAnimationFrame(reposition);
    });

    //change things when the user clicks on a different game
    var game_bg_options = [
      "https://raw.githubusercontent.com/RaduBratan/CodePen-PS5-UI-concept-assets/master/PS5%20Backgrounds/swbf1-bg.jpg",
      "https://raw.githubusercontent.com/RaduBratan/CodePen-PS5-UI-concept-assets/master/PS5%20Backgrounds/swbf2-bg2.jpg",
      "https://raw.githubusercontent.com/RaduBratan/CodePen-PS5-UI-concept-assets/master/PS5%20Backgrounds/jedi-bg.jpg",
      "https://raw.githubusercontent.com/RaduBratan/CodePen-PS5-UI-concept-assets/master/PS5%20Backgrounds/horizon-bg2.jpg",
      "https://raw.githubusercontent.com/RaduBratan/CodePen-PS5-UI-concept-assets/master/PS5%20Backgrounds/dthstr-bg.jpg",
      "https://raw.githubusercontent.com/RaduBratan/CodePen-PS5-UI-concept-assets/master/PS5%20Backgrounds/spid-bg.jpg",
      "https://raw.githubusercontent.com/RaduBratan/CodePen-PS5-UI-concept-assets/master/PS5%20Backgrounds/tsus-bg.jpg",
      "https://raw.githubusercontent.com/RaduBratan/CodePen-PS5-UI-concept-assets/master/PS5%20Backgrounds/ass-bg.jpg",
      "https://raw.githubusercontent.com/RaduBratan/CodePen-PS5-UI-concept-assets/master/PS5%20Backgrounds/mgs5-bg.jpg",
      "https://raw.githubusercontent.com/RaduBratan/CodePen-PS5-UI-concept-assets/master/PS5%20Backgrounds/hit2-bg.jpg",
      "https://raw.githubusercontent.com/RaduBratan/CodePen-PS5-UI-concept-assets/master/PS5%20Backgrounds/rdr2-bg.jpg",
      "https://raw.githubusercontent.com/RaduBratan/CodePen-PS5-UI-concept-assets/master/PS5%20Backgrounds/sek-bg.jpg"
    ];

    var play_time_options = [
      "Last played 11 years ago",
      "Last played 12 years ago",
      "Last played 13 years ago",
      "Last played 14 years ago",
      "Last played 15 years ago",
      "Last played 16 years ago",
      "Last played 17 years ago",
      "Last played 18 years ago",
      "Last played 19 years ago",
      "Last played 20 years ago",
      "Last played 21 years ago",
      "Last played 22 years ago"
    ];

    var game_name_options = [
      "Star Wars Battlefront",
      "Star Wars Battlefront II",
      "Star Wars Jedi: Fallen Order",
      "Horizon Zero Dawn",
      "Death Stranding",
      "Marvel's Spider-Man",
      "Ghost of Tsushima",
      "Assassin's Creed Valhalla",
      "Metal Gear Solid V: The ...",
      "Hitman 2",
      "Red Dead Redemption 2",
      "Sekiro: Shadows Die Twice"
    ];

    var last_checkpoint_image_options = [
      "https://raw.githubusercontent.com/RaduBratan/CodePen-PS5-UI-concept-assets/master/PS5%20Checkpoints/swbf1-chk.jpg",
      "https://raw.githubusercontent.com/RaduBratan/CodePen-PS5-UI-concept-assets/master/PS5%20Checkpoints/swbf2-chk.jpg",
      "https://raw.githubusercontent.com/RaduBratan/CodePen-PS5-UI-concept-assets/master/PS5%20Checkpoints/jedi-chk.jpg",
      "https://raw.githubusercontent.com/RaduBratan/CodePen-PS5-UI-concept-assets/master/PS5%20Checkpoints/horizon-chk.jpg",
      "https://raw.githubusercontent.com/RaduBratan/CodePen-PS5-UI-concept-assets/master/PS5%20Checkpoints/dthstr-chk.jpg",
      "https://raw.githubusercontent.com/RaduBratan/CodePen-PS5-UI-concept-assets/master/PS5%20Checkpoints/spid-chk.jpg",
      "https://raw.githubusercontent.com/RaduBratan/CodePen-PS5-UI-concept-assets/master/PS5%20Checkpoints/tsus-chk.jpg",
      "https://raw.githubusercontent.com/RaduBratan/CodePen-PS5-UI-concept-assets/master/PS5%20Checkpoints/ass-chk.jpg",
      "https://raw.githubusercontent.com/RaduBratan/CodePen-PS5-UI-concept-assets/master/PS5%20Checkpoints/mgs5-chk.jpg",
      "https://raw.githubusercontent.com/RaduBratan/CodePen-PS5-UI-concept-assets/master/PS5%20Checkpoints/hit2-chk.jpg",
      "https://raw.githubusercontent.com/RaduBratan/CodePen-PS5-UI-concept-assets/master/PS5%20Checkpoints/rdr2-chk.jpg",
      "https://raw.githubusercontent.com/RaduBratan/CodePen-PS5-UI-concept-assets/master/PS5%20Checkpoints/sek-chk.jpg"
    ];

    var last_checkpoint_name_options = [
      "Why are",
      "Why are",
      "Why are",
      "Why are",
      "Why are",
      "Why are",
      "Why are",
      "Why are",
      "Why are",
      "Why are",
      "Why are",
      "Why are"
    ];

    var last_checkpoint_time_options = [
      "22/03/20 03.23 PM",
      "23/03/20 02.39 AM",
      "24/03/20 10.50 AM",
      "25/03/20 05.05 PM",
      "26/03/20 01.22 AM",
      "27/03/20 02.34 AM",
      "28/03/20 12.55 PM",
      "29/03/20 11.11 AM",
      "30/03/20 06.49 PM",
      "31/03/20 08.07 PM",
      "01/04/20 09.50 AM",
      "02/04/20 10.12 PM"
    ];

    var last_trophy_image_options = [
      "https://raw.githubusercontent.com/RaduBratan/CodePen-PS5-UI-concept-assets/master/PS5%20Achievements/swbf1-ach1.png",
      "https://raw.githubusercontent.com/RaduBratan/CodePen-PS5-UI-concept-assets/master/PS5%20Achievements/swbf2-ach1.png",
      "https://raw.githubusercontent.com/RaduBratan/CodePen-PS5-UI-concept-assets/master/PS5%20Achievements/jedi-ach1.png",
      "https://raw.githubusercontent.com/RaduBratan/CodePen-PS5-UI-concept-assets/master/PS5%20Achievements/horizon-ach1.png",
      "https://raw.githubusercontent.com/RaduBratan/CodePen-PS5-UI-concept-assets/master/PS5%20Achievements/dthstr-ach1.png",
      "https://raw.githubusercontent.com/RaduBratan/CodePen-PS5-UI-concept-assets/master/PS5%20Achievements/spid-ach1.png",
      "https://raw.githubusercontent.com/RaduBratan/CodePen-PS5-UI-concept-assets/master/PS5%20Achievements/tsus-ach1.png",
      "https://raw.githubusercontent.com/RaduBratan/CodePen-PS5-UI-concept-assets/master/PS5%20Achievements/ass-ach1.png",
      "https://raw.githubusercontent.com/RaduBratan/CodePen-PS5-UI-concept-assets/master/PS5%20Achievements/mgs5-ach1.png",
      "https://raw.githubusercontent.com/RaduBratan/CodePen-PS5-UI-concept-assets/master/PS5%20Achievements/hit2-ach1.png",
      "https://raw.githubusercontent.com/RaduBratan/CodePen-PS5-UI-concept-assets/master/PS5%20Achievements/rdr2-ach1.png",
      "https://raw.githubusercontent.com/RaduBratan/CodePen-PS5-UI-concept-assets/master/PS5%20Achievements/sek-ach1.png"
    ];

    var last_trophy_name_options = [
      "you reading",
      "you reading",
      "you reading",
      "you reading",
      "you reading",
      "you reading",
      "you reading",
      "you reading",
      "you reading",
      "you reading",
      "you reading",
      "you reading"
    ];

    var last_trophy_time_options = [
      "22/03/20 03.23 PM",
      "23/03/20 02.39 AM",
      "24/03/20 10.50 AM",
      "25/03/20 05.05 PM",
      "26/03/20 01.22 AM",
      "27/03/20 02.34 AM",
      "28/03/20 12.55 PM",
      "29/03/20 11.11 AM",
      "30/03/20 06.49 PM",
      "31/03/20 08.07 PM",
      "01/04/20 09.50 AM",
      "02/04/20 10.12 PM"
    ];

    var top_trophy_image_options = [
      "https://raw.githubusercontent.com/RaduBratan/CodePen-PS5-UI-concept-assets/master/PS5%20Achievements/swbf1-ach2.png",
      "https://raw.githubusercontent.com/RaduBratan/CodePen-PS5-UI-concept-assets/master/PS5%20Achievements/swbf2-ach2.png",
      "https://raw.githubusercontent.com/RaduBratan/CodePen-PS5-UI-concept-assets/master/PS5%20Achievements/jedi-ach2.png",
      "https://raw.githubusercontent.com/RaduBratan/CodePen-PS5-UI-concept-assets/master/PS5%20Achievements/horizon-ach2.png",
      "https://raw.githubusercontent.com/RaduBratan/CodePen-PS5-UI-concept-assets/master/PS5%20Achievements/dthstr-ach2.png",
      "https://raw.githubusercontent.com/RaduBratan/CodePen-PS5-UI-concept-assets/master/PS5%20Achievements/spid-ach2.png",
      "https://raw.githubusercontent.com/RaduBratan/CodePen-PS5-UI-concept-assets/master/PS5%20Achievements/tsus-ach2.png",
      "https://raw.githubusercontent.com/RaduBratan/CodePen-PS5-UI-concept-assets/master/PS5%20Achievements/ass-ach2.png",
      "https://raw.githubusercontent.com/RaduBratan/CodePen-PS5-UI-concept-assets/master/PS5%20Achievements/mgs5-ach2.png",
      "https://raw.githubusercontent.com/RaduBratan/CodePen-PS5-UI-concept-assets/master/PS5%20Achievements/hit2-ach2.png",
      "https://raw.githubusercontent.com/RaduBratan/CodePen-PS5-UI-concept-assets/master/PS5%20Achievements/rdr2-ach2.png",
      "https://raw.githubusercontent.com/RaduBratan/CodePen-PS5-UI-concept-assets/master/PS5%20Achievements/sek-ach2.png"
    ];

    var top_trophy_name_options = [
      "this?",
      "this?",
      "this?",
      "this?",
      "this?",
      "this?",
      "this?",
      "this?",
      "this?",
      "this?",
      "this?",
      "this?"
    ];

    var top_trophy_time_options = [
      "22/03/20 03.23 PM",
      "23/03/20 02.39 AM",
      "24/03/20 10.50 AM",
      "25/03/20 05.05 PM",
      "26/03/20 01.22 AM",
      "27/03/20 02.34 AM",
      "28/03/20 12.55 PM",
      "29/03/20 11.11 AM",
      "30/03/20 06.49 PM",
      "31/03/20 08.07 PM",
      "01/04/20 09.50 AM",
      "02/04/20 10.12 PM"
    ];

    var all_trophies_numbers_options = [
      "1 / 1 / 0 / 0",
      "2 / 3 / 0 / 0",
      "3 / 7 / 1 / 0",
      "5 / 4 / 2 / 0",
      "11 / 9 / 3 / 1",
      "10 / 4 / 5 / 1",
      "7 / 7 / 1 / 0",
      "6 / 1 / 2 / 0",
      "1 / 2 / 4 / 0",
      "3 / 0 / 0 / 0",
      "9 / 0 / 0 / 0",
      "1 / 3 / 0 / 0"
    ];

    function updateContent() {
      var i = flkty.selectedIndex;
      document.getElementById("game_bg").style.backgroundImage =
        "url(" + game_bg_options[i] + ")";
      document.getElementById("game_play_time").innerHTML =
        '<i class="fac fa-ps5"></i>' + "&nbsp" + play_time_options[i];
      document.getElementById("game_name").innerHTML = game_name_options[i];
      document.getElementById("last_checkpoint_img").src =
        last_checkpoint_image_options[i];
      document.getElementById("last_checkpoint_name").innerHTML =
        last_checkpoint_name_options[i];
      document.getElementById("last_checkpoint_time").innerHTML =
        last_checkpoint_time_options[i];

      document.getElementById("last_trophy_img").src =
        last_trophy_image_options[i];
      document.getElementById("last_trophy_name").innerHTML =
        last_trophy_name_options[i];
      document.getElementById("last_trophy_time").innerHTML =
        last_trophy_time_options[i];

      document.getElementById("top_trophy_img").src =
        top_trophy_image_options[i];
      document.getElementById("top_trophy_name").innerHTML =
        top_trophy_name_options[i];
      document.getElementById("top_trophy_time").innerHTML =
        top_trophy_time_options[i];

      document.getElementById("all_trophies_numbers").innerHTML =
        all_trophies_numbers_options[i];

      $("#game_bg").addClass("game_bg_anim");
      $("#game_play_time").addClass("game_play_time_anim");
      $("#game_name").addClass("game_name_anim");
      $(".game_start_button").addClass("game_start_button_anim");
      $("#last_checkpoint_img").addClass("last_checkpoint_img_anim");
      $("#last_checkpoint_text").addClass("last_checkpoint_text_anim");
      $("#last_checkpoint_name").addClass("last_checkpoint_name_anim");
      $("#last_checkpoint_time").addClass("last_checkpoint_time_anim");
      $("#last_trophy_img").addClass("last_trophy_img_anim");
      $("#last_trophy_text").addClass("last_trophy_text_anim");
      $("#last_trophy_name").addClass("last_trophy_name_anim");
      $("#last_trophy_time").addClass("last_trophy_time_anim");
      $("#top_trophy_img").addClass("top_trophy_img_anim");
      $("#top_trophy_text").addClass("top_trophy_text_anim");
      $("#top_trophy_name").addClass("top_trophy_name_anim");
      $("#top_trophy_time").addClass("top_trophy_time_anim");
      $("#all_trophies_img").addClass("all_trophies_img_anim");
      $("#all_trophies_text").addClass("all_trophies_text_anim");
      $("#all_trophies_numbers").addClass("all_trophies_numbers_anim");

      setTimeout(() => {
        $("#game_bg").removeClass("game_bg_anim");
        $("#game_play_time").removeClass("game_play_time_anim");
        $("#game_name").removeClass("game_name_anim");
        $(".game_start_button").removeClass("game_start_button_anim");
        $("#last_checkpoint_img").removeClass("last_checkpoint_img_anim");
        $("#last_checkpoint_text").removeClass("last_checkpoint_text_anim");
        $("#last_checkpoint_name").removeClass("last_checkpoint_name_anim");
        $("#last_checkpoint_time").removeClass("last_checkpoint_time_anim");
        $("#last_trophy_img").removeClass("last_trophy_img_anim");
        $("#last_trophy_text").removeClass("last_trophy_text_anim");
        $("#last_trophy_name").removeClass("last_trophy_name_anim");
        $("#last_trophy_time").removeClass("last_trophy_time_anim");
        $("#top_trophy_img").removeClass("top_trophy_img_anim");
        $("#top_trophy_text").removeClass("top_trophy_text_anim");
        $("#top_trophy_name").removeClass("top_trophy_name_anim");
        $("#top_trophy_time").removeClass("top_trophy_time_anim");
        $("#all_trophies_img").removeClass("all_trophies_img_anim");
        $("#all_trophies_text").removeClass("all_trophies_text_anim");
        $("#all_trophies_numbers").removeClass("all_trophies_numbers_anim");
      }, 400);
    }
    updateContent();
    slider.on("change.flickity", updateContent);
  });
})(jQuery);
