/** PS4 Interface Version 1.0.0
 * Thanks to
 * https://codepen.io/Kapilnemo/pen/bwYoPZ
 * https://codepen.io/rstacruz/pen/oxJqNv
 * https://codepen.io/Pixmy/pen/qaYQoV
 */

var notifications = [
  "Updates installed successfully. See Settings for new features",
  "Discover. You can create a password for your account",
  "Installed. Netflix update file",
  "Installed. Furi",
  "There are new events for Call of Duty: Blac Ops III",
  "Invite. You received an invite from IamtheRealDonFrank"
];

$(document).ready(function() {
  $(this).find('.item-title, .item-subtitle, .rss').hide();

  initialise();

  // Assign handleMouse to mouse movement events
  document.onmousemove =
  function(event) {
    var x = event.clientX,
        y = event.clientY,
        X = window.scrollX,
        Y = window.scrollY,
        w = screen.availWidth,
        h = screen.availHeight,
        l = $('#xmb-menu').children().length;

    if(!$("#context-menu").hasClass("display"))
      window.scrollTo(x - 240, Y);
  };

  $(window).scroll(function() {
    if($(this).scrollTop() > 10)
      $('header').css("background-color", "rgba(255, 49, 49, 0.8)");
    else
      $('header').css("background-color", "rgba(0,0,0,0)");
  });
});

$(".menu-item, .sub-item").hover(
  function() {
    $(this).find('.item-title, .item-subtitle, .rss').show();

    $(this).toggleClass("ripple", true);
  },

  function() {
    $(this).find('.item-title, .item-subtitle, .rss').hide();

    $(this).toggleClass("ripple", false);
  })
.contextmenu(function(event) {
  event.preventDefault();
  offcontextmenu();

  var menu = $(this).attr("context-menu") || "",
      bumu;

  if($(this).find(".sub-item[context-menu]").length > 0)
    return $("#context-menu").toggleClass("display", true);

  $("#context-menu")
    .html(function() {
      menu = (bumu = menu.replace(/^\s+|\s+$/g, "")).split(/\n\r?|\r\n?/);

      if(menu.length <= 1 && menu[0].length < 1)
        return "";
      else
        menu.push("----");

      menu.push("Cancel => javascript:offcontextmenu(this)");

      for(var index = 0, length = menu.length, html = "", items, R = /^javascript\:/i; index < length; index++) {
        items = menu[index].replace(/^\s+|\s+$/g, "").split(/\s*\=>\s*/, 2);

        if(items.length == 1 && menu[index].length > 0) {
          html += "<hr>";
          continue;
        }

        if(R.test(items[1]))
          html += "<a href='#' onclick=\"" + items[1].replace(R, "") + "\"><li class='menu-item context-item'>" + items[0] + "</li></a>";
        else
          html += "<a href='" + items[1] + "'><li class='menu-item context-item'>" + items[0] + "</li></a>";
      }

      return "<ul>" + html + "</ul>";
    })
    .toggleClass("display", bumu = bumu.replace(/[\n\r]/g).length > 0);

  $(this).toggleClass("focus", bumu);
});


function initialise() {
  "use strict";

  setInterval(function() {
    var date = new Date(),
        hrs  = date.getHours(),
        mins = date.getMinutes();

    $('#clock').text(
      (" " + (hrs < 13? hrs || 12: hrs - 12)).slice(-2) + ":" + ("0" + mins).slice(-2) + " " + (hrs < 12? "AM": "PM")
    );
  }, 1000);

  notify();
}

function offcontextmenu() {
  $("#context-menu").removeClass("display");
  $(".focus").removeClass("focus");
}

function notify() {

  for(var index = notifications.index = 0, timeout = 7000, length = notifications.length; index < length; index++) {
    setTimeout(function() {
      var message = notifications[notifications.index++];

      if(message.length > 45)
        message = message.slice(0, 42) + '...';

      $('#notifications')
        .addClass("animated slideInDown")
        .text(message);

      setTimeout(function() {
        $('#notifications').removeClass("animated slideInDown");
      }, timeout - 1000);
    }, index * timeout);
  }

  setTimeout(notify, length * timeout);
}

function loading(state) {
  state = (state == undefined || state == null)?
    document.readyState != 'complete':
  eval(loading.state = state);

  $('.loading-container, #wave-container').toggleClass("display", state);

  if(!state)
    return loading.state = undefined, state;

  function select(l) {
    return document.querySelector(l);
  }

  var _1 = $('.loading-icon:nth-child(1) > img'),
      _2 = $('.loading-icon:nth-child(2) > img'),
      _3 = $('.loading-icon:nth-child(3) > img'),
      _4 = $('.loading-icon:nth-child(4) > img');

  function random() {
    for(var s = "triangle circle square cross".split(' '), S = [], i = 0, l = s.length; i < l; i++)
      S.push(s[Math.floor(Math.random() * l)]);
    return S;
  }

  var order = random(),
      url   = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/769286/",
      i     = 0;

  _1.attr('src', url + order[i++] + '.png');
  _2.attr('src', url + order[i++] + '.png');
  _3.attr('src', url + order[i++] + '.png');
  _4.attr('src', url + order[i++] + '.png');

  setTimeout(function() {
    loading(loading.state);
  }, 4000);
}

loading("document.readyState != 'complete'");