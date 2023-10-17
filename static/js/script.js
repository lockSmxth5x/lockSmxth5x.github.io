function home_link() {
  document.location.href = "./";
}
function git_profile_link() {
  document.location.href = "https://github.com/LockSmxth5x";
}
function repl_profile_link() {
  document.location.href = "https://replit.com/@lockSmxth5x";
}
function game_site_link() {
  document.location.href = "https://locksmxth5x.github.io/gamehub";
}
function contact_link() {
  document.location.href = "tel:901-878-9029";
}
function custom_right_click_menu() {
  document.onclick = hideMenu;
  document.oncontextmenu = rightClick;

  function hideMenu() {
    document.getElementById(
      "contextMenu").style.display = "none"
  }

  function rightClick(e) {
    e.preventDefault();

    if (document.getElementById(
      "contextMenu").style.display == "block")
      hideMenu();
    else {
      var menu = document
        .getElementById("contextMenu")

      menu.style.display = 'block';
      menu.style.left = e.pageX + "px";
      menu.style.top = e.pageY + "px";
    }
  }
}

function tab_focus_title_thing() {
  var pageTitle = document.title;
  var attentionMessage = 'Cya! - LockSmxth5x';

  document.addEventListener('visibilitychange', function(e) {
    var isPageActive = !document.hidden;

    if (!isPageActive) {
      document.title = attentionMessage;
      setTimeout(() => { document.title = pageTitle; }, 1300);
    } else {
      document.title = "Hey! - " + pageTitle;
      setTimeout(() => { document.title = pageTitle; }, 1300);
    }
  });
}

function allowUpDownKeys(event) {
  if (event.keyCode == 38 || event.keyCode == 40) {
    return true;
  }
  return false;
}





document.addEventListener('contextmenu', event => event.preventDefault());

feather.replace();
