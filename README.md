# Sticky-Header-W-H-Module
Header Sticky Administrable para HubSpot y WordPress
<header class="header">
    <div class="container">
      <div class="columns">
        <div class="column is-3">
          <div class="header__desktop__logo">
            <a href="https://compstak.com/"><img src="{{ module.logo.src }}"></a>
          </div>
        </div>
        <div class="column">
          {%- macro render_link_item(link,depth,looop)-%}
          {%- if link != [] && link.label -%}
          <li class="menu-item menu-depth-{{depth}}{% if link.activeBranch %} active-branch{% endif %}{% if link.activeNode %} active{% endif %}">
            <a href="{{link.url if link.url else '#'}}">{{link.label}}</a>
            {%- if link.children -%}
            <label title="Toggle Drop-down" class="drop-icon" for="sm{{looop}}_{{depth}}"><i class="fas fa-angle-down"></i></label>
            <input type="checkbox" id="sm{{looop}}_{{depth}}">
            <ul class="sub-menu">
              {% set depth = depth + 1%}
              {%- for sublink in link.children -%}
              {{render_link_item(sublink,depth,loop.index)}}
              {%- endfor -%}
            </ul>
            {%- endif -%}
          </li>
          {%- endif -%}
          {%- endmacro -%}
  
          {% set menu = menu(module.menu_field , "site_root").children %}
  
          <nav id="menu">
            <label for="tm" id="toggle-menu"><img src="{{ module.logo.src }}"><span class="drop-icon"><i class="fas fa-bars"></i></span></label>
            <input type="checkbox" id="tm">
            <ul class="main-menu cf">
  
              {% for link in menu %}   
              {{render_link_item(link,1,loop.index)}}
              {% endfor %}
  
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>

  <style>
      .header {
  transition: all 0.3s;
}
header{
  background-color: transparent;
  position: fixed;
  width: 100%;
  z-index: 1;
}
.header__desktop__logo img{
  max-width: 150px;
  padding: 10px;
}
#menu ul {
  margin: 0;
  padding: 0;
  font-family: 'gothambook';
}

#menu .main-menu {
  display: none;
}
#menu li.active-branch> a, #menu li.active>a{
  text-transform: uppercase;
}
#tm:checked + .main-menu {
  display: block;
}

#menu input[type="checkbox"], 
#menu ul span.drop-icon {
  display: none;
}

#menu li, 
#toggle-menu, 
#menu .sub-menu {

}

#menu li, 
#toggle-menu {
}
#menu li a{
  color: #fff;
  text-decoration: none;
  font-size: 14px;
  text-transform: uppercase;
}
#menu .sub-menu li a{
  color: #fff;
  padding: 0.9em 1em 0.3em;
  line-height: 22px;
}
#menu .sub-menu li a:hover{
  color: #4290F7;
}
#menu .sub-menu {
  background-color: #283040;
  border: 1px solid #ededed;
  margin: 0 1em;
  border-radius: 2px;
}

#menu .sub-menu li:last-child {
  border-width: 0;
}

#menu li, 
#toggle-menu, 
#menu a {
  position: relative;
  display: block;
  color: white;
}

#menu {
  background-color: transparent;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  line-height: 2em;
}

#toggle-menu {
}

#toggle-menu, 
#menu a {
  padding: 1em 1.2em 0.7em;
}

#menu a {
  transition: all .125s ease-in-out;
  -webkit-transition: all .125s ease-in-out;
}

#menu a:hover {
  color: #4290F7;
}
#menu a:hover > .drop-icon i{
  color: #4290F7;
}

#menu .sub-menu {
  display: none;
}

#menu input[type="checkbox"]:checked + .sub-menu {
  display: block;
}

#menu .sub-menu a:hover {
  color: #4290F7;
}

#toggle-menu .drop-icon, 
#menu li label.drop-icon {
  position: absolute;
  right: 0;
  top: 0;
}

#menu label.drop-icon, #toggle-menu span.drop-icon {
  padding: 1em;
  font-size: 2em;
  text-align: center;
  color: #fff;
}
#menu li:nth-child(6) a{
  padding: 10px 20px!important;
}
li:nth-child(6) > a{
  border: 1px solid #6CB584;
  background: #6CB584;
  font-size: 12px!important;
  line-height: 14px;
  color: #fff;
  /*padding: 2px 20px 0px!important;*/
  border-radius: 5px;
  margin-top: 14px;
  margin-left: 10px;
}
li:nth-child(6) > a:hover{
  border: 1px solid #409172!important;
  color: #fff!important;
  background: #409172!important;
}

@media only screen and (min-width: 1024px) {
  #menu .main-menu {
    display: block;
  }

  #toggle-menu, 
  #menu label.drop-icon {
    display: none;
  }

  #menu ul span.drop-icon {
    display: inline-block;
  }

  #menu li {
    display: flex;
    align-items: center;
    float: left;
  }
  #menu li.active-branch > a,
  #menu li.active > a {
    color:#4290F7;
  }
  #menu .sub-menu li {
    float: none;
  }

  #menu .sub-menu {
    border-width: 0;
    margin: 0;
    position: absolute;
    top: 100%;
    left: 0;
    width: 12em;
    z-index: 3000;
  }

  #menu .sub-menu, 
  #menu input[type="checkbox"]:checked + .sub-menu {
    display: none;
  }

  #menu .sub-menu li {
    border-width: 0 0 1px;
  }

  #menu .sub-menu .sub-menu {
    top: 0;
    left: 100%;
  }

  #menu .sub-menu .drop-icon {
    position: absolute;
    top: 0;
    right: 0;
    padding: 1em;
  }

  #menu li:hover > input[type="checkbox"] + .sub-menu {
    display: block;
  }
}
@media (max-width: 900px){
  .header__desktop__logo{
    display: none;
  }
}
@media (max-width: 900px){
  .header__desktop__logo{
    display: none;
  }
  #menu{
    display: block;
  }
  #menu .sub-menu{
    background: #054680;
    border: none;
  }
  #menu .sub-menu li a{
    color: #fff;
  }
  .main-menu li label.drop-icon{
    font-size: 1em!important;
  }
  #menu .sub-menu label.drop-icon{
    font-size: 1em;
  }
  #toggle-menu img{
    max-width: 160px;
    width: 100%;
  }
  #toggle-menu span.drop-icon{
    margin-top: -15px;
  }

}
@media (max-width: 435px){
  ul.cf{
    padding-bottom: 60px!important;
  }
}
  </style>

  <script>

$(document).ready(function () {

//   header_color_static = $('.header').data('color-static');
//   header_color_fixed = $('.header').data('color-fixed');
header_color_static = '#fff0';
header_color_fixed = '#32394B';

updateColorHeader();
$(window).bind('scroll', function () {
  updateColorHeader();
});
});

function updateColorHeader() {
if ($(window).scrollTop() > 40) {
  $('.header').css("background-color", header_color_fixed);
  //     $('.header').css("height", "80px");
  $('.header').css("box-shadow", "0 2px 4px 0 rgba(0,0,0,.13)");
}
else {
  $('.header').css("background-color", header_color_static);
  //     $('.header').css("height", "85px");
  $('.header').css("box-shadow", "none");
}
}
  </script>
