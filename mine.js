
var colors = ["red", "orange", "yellow", "green", "blue", "purple"];
var randomIndex = Math.floor(Math.random() * colors.length);
var randomColor = colors[randomIndex];
            var aqtiuri = 0;
            var index = 0;

function remove_active_elements(){
  
  const btn = document.querySelectorAll('.close_icon');
  btn.forEach((closebtn) => { closebtn.style.display = "none"; });

    const activeArticles = document.querySelectorAll('.article_active');
    activeArticles.forEach((article) => {
      article.classList.remove('article_active');
      article.classList.add('article');  
    });

      const article_info = document.querySelectorAll('.article_info_active');
      article_info.forEach((article_info) => {
        article_info.classList.remove('article_info_active');
        article_info.classList.add('article_info');  
      });

        const wiev = document.querySelectorAll('.wiev_link');
        wiev.forEach(( wiev) => { wiev.style.display = "flex"; });

          const name = document.querySelectorAll('.name_active');
          name.forEach((name) => {
            name.classList.remove('name_active');
            name.classList.add('name');  
          });
        
            const agwera = document.querySelectorAll('.agwera_active');
            agwera.forEach((agwera) => {
              agwera.classList.remove('agwera_active');
              agwera.classList.add('agwera');  
            });

              const kategoria = document.querySelectorAll('.kategoria_active');
              kategoria.forEach((kategoria) => {
                kategoria.classList.remove('kategoria_active');
                kategoria.classList.add('kategoria');  
              });
            
                const shefaseba = document.querySelectorAll('.shefaseba_div');
                shefaseba.forEach((shefaseba_div) => { shefaseba_div.remove(); });

                  const info = document.querySelectorAll('.info_list');
                  info.forEach((info) => { info.remove(); });
}

  function dalageba() {

  let kategoria1 = document.getElementById('kategoria1');
  let kategoria2 = document.getElementById('kategoria2');
  let articles = document.getElementsByTagName('article');
  let classname1;
  let classname2;

  kategoria1.addEventListener('change', function() {
  for (let i = 0; i < articles.length; i++) {
  let article = articles[i];

  if (kategoria1.value == "all" && kategoria2.value == "all")
  {article.style.display = "block"; }
  if (kategoria1.value == "all") 
  {
  if(kategoria2.value != "all")
  {classname1 = kategoria2.value;
  if (!article.classList.contains(classname1)) 
  {article.style.display = "none";} 
  }
  else  {article.style.display = "block";}
  } 
  else if(kategoria1.value == "zamtai")
  {
  if(kategoria2.value != "all"){
  classname1 = kategoria2.value;
  }
  if (!article.classList.contains('zamtai || zafxuli')) {
  article.style.display = "block";
  }
  if (!article.classList.contains('zamtai') && !article.classList.contains(classname1)) {
  article.style.display = "none";
  }
  }      
  else if(kategoria1.value == "zafxuli")
  {
  if(kategoria2.value != "all"){
  classname1 = kategoria2.value;
  }
  if (!article.classList.contains('zamtai || zafxuli')) {
  article.style.display = "block";
  }
  if (!article.classList.contains('zafxuli') && !article.classList.contains(classname1)) {
  article.style.display = "none";
  }
  }
  }
  });

  kategoria2.addEventListener('change', function() {
  for (let i = 0; i < articles.length; i++) {
  let article = articles[i];



  if (kategoria1.value == "all" && kategoria2.value == "all")
  {article.style.display = "block"; }
  if (kategoria2.value == "all") 
  {
  if(kategoria1.value != "all") 
  {
  classname2 = kategoria1.value;
  if (!article.classList.contains(classname2))
  {article.style.display = "none"; }
  else {article.style.display = "block";}
  } 
  }
  else if(kategoria2.value == "mta")
  {
  if(kategoria1.value != "all") 
  {classname2 = kategoria1.value;}
  if (!article.classList.contains('mta || zgva')) 
  {article.style.display = "block";}
  if (!article.classList.contains('mta')  && !article.classList.contains(classname2)) 
  {article.style.display = "none";}
  }  

  else if(kategoria2.value == "zgva")
  {
  if(kategoria1.value != "all")
  {classname2 = kategoria1.value;}
  if (!article.classList.contains('mta || zgva')) 
  {article.style.display = "block";}
  if (!article.classList.contains('zgva') && !article.classList.contains(classname2)) 
  { article.style.display = "none";}
  }
  }

  });


  }

    function menu_mob(){

    let mini_menu_list = document.getElementById('mini_menu_list');
    let menu_btn = document.getElementById('menu_btn');
    menu_btn.addEventListener('click',function(){

    let text_slide = document.getElementById('text_slide');
    let nav_text_slide = document.getElementById('nav_text_slide');

    if(!menu_btn.classList.contains('menu_btn_active')){
    text_slide.style.display = "none";
    nav_text_slide.style.boxShadow = "none";
    nav_text_slide.style.transition = "1s ease-in-out";
    nav_text_slide.style.overflow = "visible"

    menu_btn.classList.remove('menu_btn');
    menu_btn.classList.add('menu_btn_active');
    mini_menu_list.style.opacity = "0"; 
    mini_menu_list.style.display = "flex";

    setTimeout(() => {
    mini_menu_list.style.opacity = "1"; 
    },100)
    }
    else {
    menu_btn.classList.remove('menu_btn_active');
    menu_btn.classList.add('menu_btn'); 
    mini_menu_list.style.opacity = "0";
    mini_menu_list.style.transition= "1.5s ease-in-out";

    nav_text_slide.style.boxShadow = `0.5px 0px 10px 0.5px inset ${randomColor}`;
    nav_text_slide.style.transition = "1s ease-in-out";

    setTimeout(() => { 
    mini_menu_list.style.display = "none"; 

    nav_text_slide.style.overflow = "hidden"

    text_slide.style.display = "flex";
    text_slide.style.opacity = "1";
    },1000)


    }
    });

    }

      function slide(){
      var images = [
      "img/img (30).jpg", "img/img (29).jpg", "img/img (28).jpg", "img/img (27).jpg", 
      "img/img (26).jpg", "img/img (25).jpg", "img/img (24).jpg",  
      "img/img (22).jpg", "img/img (21).jpg", "img/img (18).jpg", "img/img (23).jpg",
      "img/img (20).jpg", "img/img (19).jpg", "img/img (17).jpg", "img/img (13).jpg",
      "img/img (16).jpg", "img/img (15).jpg", "img/img (14).jpg", 
      "img/img (12).jpg", "img/img (11).jpg", "img/img (10).jpg", "img/img (9).jpg"
      ];


      var line1 = "<samp class = 'txt1'>წარმოუდგენელი შეთავაზება თქვენთვის!!!</samp> <samp class = 'txt2'>თქვენთვის სასურველი 1 სტრიცონიანი ტექსტი N1</samp>"; 
      var line2 = "<samp class = 'txt1'>წარმოუდგენელი შეთავაზება თქვენთვის!!!</samp> <samp class = 'txt2'>თქვენთვის სასურველი 1 სტრიცონიანი ტექსტი N1</samp>"; 
      var line3 = "<samp class = 'txt1'>წარმოუდგენელი შეთავაზება თქვენთვის!!!</samp> <samp class = 'txt2'>თქვენთვის სასურველი 1 სტრიცონიანი ტექსტი N1</samp>"; 
      var line4 = "<samp class = 'txt1'>წარმოუდგენელი შეთავაზება თქვენთვის!!!</samp> <samp class = 'txt2'>თქვენთვის სასურველი 1 სტრიცონიანი ტექსტი N1</samp>"; 
      var line5 = "<samp class = 'txt1'>წარმოუდგენელი შეთავაზება თქვენთვის!!!</samp> <samp class = 'txt2'>თქვენთვის სასურველი 1 სტრიცონიანი ტექსტი N1</samp>"; 

      var slide_text = [line1,line2,line3,line4,line5 ];

      var isPaused = false;
      var boxshadow = false;
      let intervalId; 

      function changeBoxShadow(nav_text_slide) {
      if(boxshadow){ return; }
      let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      if (nav_text_slide.offsetWidth <= 555) {
      nav_text_slide.style.boxShadow = `0px 7px 8px 0px inset ${randomColor}`;
      nav_text_slide.style.transition = "box-shadow 1s ease-in-out";
      } 
      else {nav_text_slide.style.boxShadow = "none";}
      }
      intervalId = setInterval(function() {

      let nav_text_slide = document.getElementById('nav_text_slide');
      changeBoxShadow(nav_text_slide);
      }, 500);

      //text slide
      for (let j = 0; j < 100; j++) {
      setTimeout(function() {
      if (isPaused) {
      return; 
      }
      let nav_text_slide = document.getElementById('nav_text_slide');
      let text_slide = document.createElement('div');
      text_slide.className = "text_slide";
      text_slide.id = "text_slide";
      text_slide.innerHTML = slide_text[Math.floor(Math.random() * slide_text.length)];
      setTimeout(function() {
      text_slide.style.marginBottom = "0px";
      text_slide.style.transition = "3s ease-in-out";
      }, 100)

      setTimeout(function() {
      text_slide.style.marginBottom = "60px";
      text_slide.style.transition = "3s ease-in-out";
      setTimeout(function() {
      text_slide.remove();
      }, 4000) 
      }, 6000) 

      nav_text_slide.append(text_slide);
      }, j * 10200);
      }
      //

      // image slide
      for(i = 0; i < 100; i++) {
      setTimeout(function() {


      let slide_line = document.getElementById('slide_line');
      let slide_line_width = slide_line.offsetWidth;
      let slide_line_heigth = slide_line.offsetHeight;
      let slide = document.createElement('img');

      slide.className = "slide_img";
      slide.src = images[Math.floor(Math.random() * images.length)];

      slide.onload = function() { 
      let slide_img_start_width = slide.offsetWidth; 
      let slide_img_start_heigth = slide.offsetHeight; 

      let sxvaoba1 = slide_img_start_width /300;
      let sxvaoba2 = slide_img_start_heigth /300;

      if(slide_img_start_width > slide_img_start_heigth) {
      slide.style.height = slide_line_heigth + "px";
      slide.style.width = slide_img_start_width / sxvaoba1 + "px";
      }
      else if(slide_img_start_width <= slide_img_start_heigth){
      slide.style.height = slide_line_heigth + "px";
      slide.style.width = slide_img_start_width / sxvaoba2 + "px";
      }
      }
      slide.style.marginLeft = "-200px";
      slide.style.opacity = "0";

      setTimeout(function() { slide.style.opacity = "1"; slide.style.transition = "4s ease-in-out"; }, 50); 
      setTimeout(function() { slide.style.marginLeft = slide_line_width - 40 + "px"; slide.style.transition = "15s ease-in-out"; }, 150); 
      setTimeout(function() { slide.style.transition = "2s ease-in-out"; slide.style.opacity = "0"; }, 12000); 
      setTimeout(function() { slide.remove(); }, 14000); 
      slide_line.append(slide);
      }, i * 11500); 
      }
      //

      menu_btn.addEventListener('click',function(){ 

      if(isPaused == true){isPaused = false}
      else{isPaused = true;}

      if(boxshadow == true){boxshadow = false}
      else{boxshadow = true;}


      });

      }

        function lamp(){
        let lamp = document.getElementById("lamp");
        lamp.addEventListener("click", function() {
        if (lamp.classList.contains('lamp1')) {
        lamp.classList.remove("lamp1");
        lamp.classList.add("lamp2");
        document.body.style.backgroundColor = "rgb(86, 92, 90)";
        }
        else if (lamp.classList.contains('lamp2')){
        lamp.classList.add("lamp1");
        lamp.classList.remove("lamp2");
        document.body.style.backgroundColor = "rgb(59, 57, 57)";
        }
        });

        }

          function user_autorise(){
            let user_btn = document.getElementById('user_btn');
            let user_btn_img = document.getElementById('user_btn_img');
            let login_header_text = document.getElementById('login_header_text');
        
            login_header_text.textContent = "შესვლა";
        
            let login = document.getElementById('login');
            let singup_btn = document.getElementById('singup_btn');
        
            let login_btn = document.getElementById('login_btn');
        
            let singup = document.getElementById('singup');
        
            let login_form = document.getElementById('login_form');
            let togglePassword = document.querySelector('#toggle-password');
        let password = document.querySelector('#password');
        var chveneba = true;
        var user_btn_click = true;
        var login_click = true;
        var singup_click = false;
        var wvetebi_s = false;
        


        function user_btn_click_f(){
            login_form.classList.add('login_form_active');
                login_form.classList.remove('login_form');
                user_btn.classList.add('user_active');
                user_btn_img.src = "img/close_login_form.svg";
                setTimeout(() => { login_form.style.top = "55px"; },10);
                user_btn_click =false; 
                wvetebi_s = false;
        
        }
        
        function user_btn_click_f_else(){
            login_form.style.top = "-410px";
            user_btn.classList.remove('user_active');
            user_btn.classList.remove('user_active_registr');
            login_header_text.classList.remove('login_header_text_registr')
            login_header_text.classList.add('login_header_text')
            login_form.classList.add('login_form_active');
            login_form.classList.remove('login_form_registracia');
            login_header_text.textContent = "შესვლა";
            singup.style.display = "none";
            login.style.display = "flex";
            user_btn_img.src = "img/person.svg";
            setTimeout(() => {  login_form.classList.add('login_form');  },1500);
            user_btn_click = true;
            singup_click = false;
            wvetebi_s = false;
        
        }
        
        function singup_btn_click_f(){
            login_header_text.textContent = "რეგისტრაცია";
            login_header_text.classList.add('login_header_text_registr')
            login_header_text.classList.remove('login_header_text')
            login.style.display = "none";
            login_form.classList.remove('login_form_active');
            login_form.classList.add('login_form_registracia');
            singup.style.display = "flex";
            user_btn.classList.remove('user_active');
            user_btn.classList.add('user_active_registr');
            singup_click = true;
            login_click = false;
            wvetebi_s = true;
        }
        
        function login_btn_click_f(){
            user_btn.classList.add('user_active');
            user_btn.classList.remove('user_active_registr');
            login_header_text.classList.remove('login_header_text_registr')
            login_header_text.classList.add('login_header_text')
            login_form.classList.add('login_form_active');
            login_form.classList.remove('login_form_registracia');
            login_header_text.textContent = "შესვლა";
            singup.style.display = "none";
            login.style.display = "flex";
            user_btn_img.src = "img/close_login_form.svg";
            user_btn_click = false;
            singup_click = false;
            wvetebi_s = false;
        
        
        }
        


        function wvetebi_start() {
          if (wvetebi_s) {
              let singup_panel = document.getElementById('singup');

              var wvetebi_conteitner0 = document.createElement("div"); wvetebi_conteitner0.id ="wvetebi_conteitner0"; wvetebi_conteitner0.className = "wvetebi_conteitner";
              let wvetebi_conteitner1 = document.createElement("div"); wvetebi_conteitner1.className = "wvetebi_conteitner";
              let wvetebi_conteitner2 = document.createElement("div"); wvetebi_conteitner2.className = "wvetebi_conteitner";
              let wvetebi_conteitner3 = document.createElement("div"); wvetebi_conteitner3.className = "wvetebi_conteitner";
              let wvetebi_conteitner4 = document.createElement("div"); wvetebi_conteitner4.className = "wvetebi_conteitner";
              let wvetebi_conteitner5 = document.createElement("div"); wvetebi_conteitner5.className = "wvetebi_conteitner";


              let wvetebi_conteitner6 = document.createElement("div"); wvetebi_conteitner6.className = "wvetebi_conteitner";
              // let wvetebi_conteitner7 = document.createElement("div"); wvetebi_conteitner7.className = "wvetebi_conteitner";
              // let wvetebi_conteitner8 = document.createElement("div"); wvetebi_conteitner8.className = "wvetebi_conteitner";
              // let wvetebi_conteitner9 = document.createElement("div"); wvetebi_conteitner9.className = "wvetebi_conteitner";
              // let wvetebi_conteitner10 = document.createElement("div"); wvetebi_conteitner10.className = "wvetebi_conteitner";
              // let wvetebi_conteitner11 = document.createElement("div"); wvetebi_conteitner11.className = "wvetebi_conteitner";

              // let wvetebi_conteitner12 = document.createElement("div"); wvetebi_conteitner12.className = "wvetebi_conteitner";
              // let wvetebi_conteitner13 = document.createElement("div"); wvetebi_conteitner13.className = "wvetebi_conteitner";
              // let wvetebi_conteitner14 = document.createElement("div"); wvetebi_conteitner14.className = "wvetebi_conteitner";
              // let wvetebi_conteitner15 = document.createElement("div"); wvetebi_conteitner15.className = "wvetebi_conteitner";
              // let wvetebi_conteitner16 = document.createElement("div"); wvetebi_conteitner16.className = "wvetebi_conteitner";
              // let wvetebi_conteitner17 = document.createElement("div"); wvetebi_conteitner17.className = "wvetebi_conteitner";


              // let wvetebi_conteitner18 = document.createElement("div"); wvetebi_conteitner18.className = "wvetebi_conteitner";
              // let wvetebi_conteitner19 = document.createElement("div"); wvetebi_conteitner19.className = "wvetebi_conteitner";
              // let wvetebi_conteitner20 = document.createElement("div"); wvetebi_conteitner20.className = "wvetebi_conteitner";
              // let wvetebi_conteitner21 = document.createElement("div"); wvetebi_conteitner21.className = "wvetebi_conteitner";
              // let wvetebi_conteitner22 = document.createElement("div"); wvetebi_conteitner22.className = "wvetebi_conteitner";
              // let wvetebi_conteitner23 = document.createElement("div"); wvetebi_conteitner23.className = "wvetebi_conteitner";

              // let wvetebi_conteitner24 = document.createElement("div"); wvetebi_conteitner24.className = "wvetebi_conteitner";
              // let wvetebi_conteitner25 = document.createElement("div"); wvetebi_conteitner25.className = "wvetebi_conteitner";
              // let wvetebi_conteitner26 = document.createElement("div"); wvetebi_conteitner26.className = "wvetebi_conteitner";
              // let wvetebi_conteitner27 = document.createElement("div"); wvetebi_conteitner27.className = "wvetebi_conteitner";
              // let wvetebi_conteitner28 = document.createElement("div"); wvetebi_conteitner28.className = "wvetebi_conteitner";
              // let wvetebi_conteitner29 = document.createElement("div"); wvetebi_conteitner29.className = "wvetebi_conteitner";
              // let wvetebi_conteitner30 = document.createElement("div"); wvetebi_conteitner30.className = "wvetebi_conteitner";
              // let wvetebi_conteitner31 = document.createElement("div"); wvetebi_conteitner31.className = "wvetebi_conteitner";


              singup_panel.append(
                wvetebi_conteitner0, 
                wvetebi_conteitner1, 
                wvetebi_conteitner2, 
                wvetebi_conteitner3, 
                wvetebi_conteitner4, 
                wvetebi_conteitner5,
                
                wvetebi_conteitner6, 
                // wvetebi_conteitner7, 
                // wvetebi_conteitner8, 
                // wvetebi_conteitner9, 
                // wvetebi_conteitner10, 
                // wvetebi_conteitner11,
                
                // wvetebi_conteitner12, 
                // wvetebi_conteitner13, 
                // wvetebi_conteitner14, 
                // wvetebi_conteitner15, 
                // wvetebi_conteitner16, 
                // wvetebi_conteitner17,
                
                // wvetebi_conteitner18, 
                // wvetebi_conteitner19, 
                // wvetebi_conteitner20, 
                // wvetebi_conteitner21, 
                // wvetebi_conteitner22, 
                // wvetebi_conteitner23,

                // wvetebi_conteitner24, 
                // wvetebi_conteitner25, 
                // wvetebi_conteitner26, 
                // wvetebi_conteitner27, 
                // wvetebi_conteitner28, 
                // wvetebi_conteitner29,

                // wvetebi_conteitner30, 
                // wvetebi_conteitner31,
                );
      
              for (i = 0; i <= 84; i++) {
                  setTimeout(() => {
                      let wvetebi = document.createElement("div"); 
                      wvetebi.className = "wvetebi";
                                          
                      setTimeout(() => {wvetebi.classList.add('wvetebi1');}, 1000);
                      setTimeout(() => {wvetebi.classList.add('wvetebi2');}, 4050);
                      setTimeout(() => {wvetebi.classList.add('wvetebi3');}, 9100);
                      setTimeout(() => {
                          wvetebi.classList.add('wvetebi4');  
                          wvetebi.classList.remove('wvetebi3');
                      }, 24000);
                      setTimeout(() => {wvetebi.classList.add('wvetebi5');}, 24100);
                      setTimeout(() => {
                          wvetebi.remove();

let wvetebi_down = document.createElement("div"); 
wvetebi_down.className = "wvetebia"; 
if(document.querySelectorAll('.wvetebia').length < 12){
wvetebi_conteitner0.classList.add('wvetebi_conteitner0'); wvetebi_conteitner0.append(wvetebi_down);
} 
else if(document.querySelectorAll('.wvetebia').length >= 12 && document.querySelectorAll('.wvetebia').length <=23){
wvetebi_conteitner1.append(wvetebi_down); wvetebi_conteitner1.classList.add('wvetebi_conteitner1');
}
else if(document.querySelectorAll('.wvetebia').length > 23 && document.querySelectorAll('.wvetebia').length <=35){
wvetebi_conteitner2.append(wvetebi_down); wvetebi_conteitner2.classList.add('wvetebi_conteitner2');
}
else if(document.querySelectorAll('.wvetebia').length > 35 && document.querySelectorAll('.wvetebia').length <=47){
wvetebi_conteitner3.append(wvetebi_down); wvetebi_conteitner3.classList.add('wvetebi_conteitner3');
}
else if(document.querySelectorAll('.wvetebia').length > 47 && document.querySelectorAll('.wvetebia').length <=59){
wvetebi_conteitner4.append(wvetebi_down); wvetebi_conteitner4.classList.add('wvetebi_conteitner4');
}
else if(document.querySelectorAll('.wvetebia').length > 59 && document.querySelectorAll('.wvetebia').length <=71){
wvetebi_conteitner5.append(wvetebi_down); wvetebi_conteitner5.classList.add('wvetebi_conteitner5');
}
else if(document.querySelectorAll('.wvetebia').length > 71 && document.querySelectorAll('.wvetebia').length <=83){
wvetebi_conteitner6.append(wvetebi_down); wvetebi_conteitner6.classList.add('wvetebi_conteitner6');
}
// else if(document.querySelectorAll('.wvetebia').length > 83 && document.querySelectorAll('.wvetebia').length <=95){
// wvetebi_conteitner7.append(wvetebi_down); wvetebi_conteitner7.classList.add('wvetebi_conteitner7');
// }
// else if(document.querySelectorAll('.wvetebia').length > 95 && document.querySelectorAll('.wvetebia').length <=107){
// wvetebi_conteitner8.append(wvetebi_down); wvetebi_conteitner8.classList.add('wvetebi_conteitner8');
// }
// else if(document.querySelectorAll('.wvetebia').length > 107 && document.querySelectorAll('.wvetebia').length <=119){
// wvetebi_conteitner9.append(wvetebi_down); wvetebi_conteitner9.classList.add('wvetebi_conteitner9');
// }
// else if(document.querySelectorAll('.wvetebia').length > 119 && document.querySelectorAll('.wvetebia').length <=131){
// wvetebi_conteitner10.append(wvetebi_down); wvetebi_conteitner10.classList.add('wvetebi_conteitner10');
// }
// else if(document.querySelectorAll('.wvetebia').length > 131 && document.querySelectorAll('.wvetebia').length <=143){
// wvetebi_conteitner11.append(wvetebi_down); wvetebi_conteitner11.classList.add('wvetebi_conteitner11');
// }
// else if(document.querySelectorAll('.wvetebia').length > 143 && document.querySelectorAll('.wvetebia').length <=155){
// wvetebi_conteitner12.append(wvetebi_down); wvetebi_conteitner12.classList.add('wvetebi_conteitner12');
// }
// else if(document.querySelectorAll('.wvetebia').length > 155 && document.querySelectorAll('.wvetebia').length <=167){
// wvetebi_conteitner13.append(wvetebi_down); wvetebi_conteitner13.classList.add('wvetebi_conteitner13');
// }
// else if(document.querySelectorAll('.wvetebia').length > 167 && document.querySelectorAll('.wvetebia').length <=179){
// wvetebi_conteitner14.append(wvetebi_down); wvetebi_conteitner14.classList.add('wvetebi_conteitner14');
// }
// else if(document.querySelectorAll('.wvetebia').length > 179 && document.querySelectorAll('.wvetebia').length <=191){
// wvetebi_conteitner15.append(wvetebi_down); wvetebi_conteitner15.classList.add('wvetebi_conteitner15');
// }
// else if(document.querySelectorAll('.wvetebia').length > 191 && document.querySelectorAll('.wvetebia').length <=203){
// wvetebi_conteitner16.append(wvetebi_down); wvetebi_conteitner16.classList.add('wvetebi_conteitner16');
// }
// else if(document.querySelectorAll('.wvetebia').length > 203 && document.querySelectorAll('.wvetebia').length <=215){
// wvetebi_conteitner17.append(wvetebi_down); wvetebi_conteitner17.classList.add('wvetebi_conteitner17');
// }
// else if(document.querySelectorAll('.wvetebia').length > 215 && document.querySelectorAll('.wvetebia').length <=227){
//   wvetebi_conteitner18.append(wvetebi_down); wvetebi_conteitner18.classList.add('wvetebi_conteitner18');
// }
// else if(document.querySelectorAll('.wvetebia').length > 227 && document.querySelectorAll('.wvetebia').length <=239){
//   wvetebi_conteitner19.append(wvetebi_down); wvetebi_conteitner19.classList.add('wvetebi_conteitner19');
// }
// else if(document.querySelectorAll('.wvetebia').length > 239 && document.querySelectorAll('.wvetebia').length <=251){
//   wvetebi_conteitner20.append(wvetebi_down); wvetebi_conteitner20.classList.add('wvetebi_conteitner20');
// }
// else if(document.querySelectorAll('.wvetebia').length > 251 && document.querySelectorAll('.wvetebia').length <=263){
//   wvetebi_conteitner21.append(wvetebi_down); wvetebi_conteitner21.classList.add('wvetebi_conteitner21');
// }
// else if(document.querySelectorAll('.wvetebia').length > 263 && document.querySelectorAll('.wvetebia').length <=275){
//   wvetebi_conteitner22.append(wvetebi_down); wvetebi_conteitner22.classList.add('wvetebi_conteitner22');
// }
// else if(document.querySelectorAll('.wvetebia').length > 275 && document.querySelectorAll('.wvetebia').length <=287){
//   wvetebi_conteitner23.append(wvetebi_down); wvetebi_conteitner23.classList.add('wvetebi_conteitner23');
// }


// else if(document.querySelectorAll('.wvetebia').length > 287 && document.querySelectorAll('.wvetebia').length <=299){
//   wvetebi_conteitner24.append(wvetebi_down); wvetebi_conteitner24.classList.add('wvetebi_conteitner24');
// }
// else if(document.querySelectorAll('.wvetebia').length > 299 && document.querySelectorAll('.wvetebia').length <=311){
//   wvetebi_conteitner25.append(wvetebi_down); wvetebi_conteitner25.classList.add('wvetebi_conteitner25');
// }
// else if(document.querySelectorAll('.wvetebia').length > 311 && document.querySelectorAll('.wvetebia').length <=323){
//   wvetebi_conteitner26.append(wvetebi_down); wvetebi_conteitner26.classList.add('wvetebi_conteitner26');
// }
// else if(document.querySelectorAll('.wvetebia').length > 323 && document.querySelectorAll('.wvetebia').length <=335){
//   wvetebi_conteitner27.append(wvetebi_down); wvetebi_conteitner27.classList.add('wvetebi_conteitner27');
// }
// else if(document.querySelectorAll('.wvetebia').length > 335 && document.querySelectorAll('.wvetebia').length <=347){
//   wvetebi_conteitner28.append(wvetebi_down); wvetebi_conteitner28.classList.add('wvetebi_conteitner28');
// }
// else if(document.querySelectorAll('.wvetebia').length > 347 && document.querySelectorAll('.wvetebia').length <=359){
//   wvetebi_conteitner29.append(wvetebi_down); wvetebi_conteitner29.classList.add('wvetebi_conteitner29');
// }

// else if(document.querySelectorAll('.wvetebia').length > 359 && document.querySelectorAll('.wvetebia').length <=371){
//   wvetebi_conteitner30.append(wvetebi_down); wvetebi_conteitner30.classList.add('wvetebi_conteitner30');
// }
// else if(document.querySelectorAll('.wvetebia').length > 371 && document.querySelectorAll('.wvetebia').length <=382){
//   wvetebi_conteitner31.append(wvetebi_down); wvetebi_conteitner31.classList.add('wvetebi_conteitner31');
// }


else if (document.querySelectorAll('.wvetebia').length > 83) {

  let fullList = document.querySelectorAll('.wvetebia');

  for (let i = fullList.length - 1; i >= 0; i--) {
    setTimeout(() => {
      fullList[i].classList.add('wveti_garet');
      fullList[i].classList.remove('wvetebia');
  
      let onkaki_cont = document.getElementById('onkaki_cont');
      let onkaki = document.getElementById('onkaki');
          login_form.style.borderBottomRightRadius = "0px";
          wvetebi_conteitner0.style.marginLeft = "5px";
          wvetebi_conteitner0.style.width = "430px";
          onkaki.style.opacity = "1";
      onkaki_cont.append(fullList[i]);
  
      setTimeout(() => {
        fullList[i].remove();
        if (i<=0){
          onkaki.style.opacity = "0";
          login_form.style.borderBottomRightRadius = "20px";

        }
      }, 900);
    }, (fullList.length - i - 1) * 800);
  }
  }





          

            }, 29100);
            
                      
                      singup_panel.append(wvetebi);
                  }, i * 800);
              }

              return true;
          }
      }
            

        user_btn.addEventListener("click", function(){
            if(user_btn_click){user_btn_click_f() }
            else{ user_btn_click_f_else(); }
        })
        
        singup_btn.addEventListener("click", function(){
            if(!singup_click){ singup_btn_click_f();  wvetebi_start(); }
        else{alert('თქვენ წარმატებით გაიარეთ რეგისტრაცია')}
        })
        
        login_btn.addEventListener("click", function(){
            if(!login_click){ login_btn_click_f(); }
            else{alert('თქვენ წარმატებით გაიარეთ ავტორიზაცია')}
        })
        
        
        togglePassword.addEventListener('click', function (e) {
          const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
                      password.setAttribute('type', type);
        
          if (chveneba){ togglePassword.src = "img/visibility_off.svg"; chveneba = false; }
            else{ togglePassword.src = "img/visibility_on.svg"; chveneba = true; }
        
        });
        
        
        
          }

            function gallery() {
              fetch('mine.json')
                .then(response => response.json())
                .then(data => {
                    
                    let gallery = document.getElementById('gallery');
                      var elementebi_meore_gverdze_sawyisi = 0
                        var elementebi_meore_gverdze_bolo = 4

                          if (data.gallery.length > 12) {
                            var gallery_page_list = document.createElement('div');
                                gallery_page_list.className = "gallery_page_list";
                              var btn_next = document.createElement('div');
                                  btn_next.className = "btn_next btn";
                                  btn_next.id = "btn_next";
                                var btn_next_img = document.createElement('img');
                                    btn_next_img.src = "img/prev.svg";
                                  var btn_prev = document.createElement('div');
                                      btn_prev.className = "btn_prev btn";
                                    var btn_prev_img = document.createElement('img');
                                        btn_prev_img.src = "img/next.svg";
                                      var btn_list_conteiner = document.createElement('div');
                                          btn_list_conteiner.className = "btn_list_conteiner";
                                        var list_style = "page_list_active";
                                          var btn_style = "btn_list_active btn";
                          
                for (var i = 0; i <= (data.gallery.length / 12) -1; i++) {
                  var btn_list = document.createElement('div');
                      btn_list.className = btn_style;
                      btn_list.textContent = i + 1;
                      btn_list.id = 'btn' + i;

                        btn_list_conteiner.append(btn_list);

                    var page_list = document.createElement('div');
                        page_list.className = list_style + " pages";

                          gallery.append(page_list);

                            list_style = "page_list";
                            btn_style = "btn_list btn";

                          btn_next.append(btn_next_img);
                          btn_prev.append(btn_prev_img);
                          gallery_page_list.append(btn_next, btn_list_conteiner, btn_prev);

                            let a = "gallery_element";
                              let element_width = "23%";

                        // var loop = (data.gallery.length / 3) - 2;

                  for (let i = elementebi_meore_gverdze_sawyisi; i < elementebi_meore_gverdze_bolo; i++) {

                    let gallery_colum = document.createElement('div');
                        gallery_colum.className = "gallery_colum";

                    for (let j = 0; j < 3; j++) {
                        let gallery_element = document.createElement('article');
                            gallery_element.className = a;
                            gallery_element.style.width = element_width;
              
                          let gallery_img = document.createElement('img');
                              gallery_img.className = "gallery_img";
                              gallery_img.src = data.gallery[i * 3 + j].Image;
                
                                gallery_element.append(gallery_img);
                                gallery_colum.append(gallery_element);
                
                                  gallery_element.addEventListener('mouseover', () => {
                                      gallery_element.classList.add('gallery_element_activa');
                                      gallery_img.classList.add('gallery_img_active');
                                  });

                                    gallery_element.addEventListener('mouseout', () => {
                                        gallery_element.classList.remove('gallery_element_activa');
                                        gallery_img.classList.remove('gallery_img_active');
                                    });


                                    if (element_width === "23%") { element_width = "40%"; }
                                          else if (element_width === "40%") { element_width = "30%"; }
                                            else if (element_width === "30%") { element_width = "23%"; }
                    }
                                              if (element_width === "23%") { element_width = "40%"; }
                                                else if (element_width === "40%") { element_width = "30%"; }
                                                  else if (element_width === "30%") { element_width = "23%"; }



                                                    gallery.append(page_list,gallery_page_list);
                                                    page_list.append(gallery_colum);
                  }
                                                      elementebi_meore_gverdze_sawyisi += 4;
                                                      elementebi_meore_gverdze_bolo += 4;
                }    

              let btns = document.querySelectorAll(".btn");
                for (let i = 0; i < btns.length; i++) {
                  let btn = btns[i];
                    function scroll_top(){
                      if(scroll_true){
                      window.scrollTo({
                        top: 0,
                        behavior: 'smooth',
                        duration: 1500,
                        easing: 'ease-in-out'
                      }); 
                    }               
                      }
                      function gadartva_btn(){
                        var pages = document.querySelectorAll(".pages");
                          for (let i = 0; i < pages.length; i++) { var page = pages[i];
                            if(page.classList.contains('page_list_active')){
                              pages[i].classList.remove('page_list_active');
                              pages[i].classList.add('page_list');
                            } 
                          } 
                            pages[i-1].classList.add('page_list_active') ;
                        }
                        function btn_minus_add_remove_end(){
                          if(btns[1].classList.contains('btn_list_active')){
                            btns[0].classList.add('end');
                            btns[0].classList.remove('btn'); 
                              btns[btn_length-1].classList.remove('end');
                              btns[btn_length-1].classList.add('btn'); 
                          }
                          }
                          function btn_plus_add_remove_end(){
                            if(btns[btn_length-2].classList.contains('btn_list_active')){
                                btns[btn_length-1].classList.add('end');
                                btns[btn_length-1].classList.remove('btn'); 
                
                                  btns[0].classList.remove('end');
                                  btns[0].classList.add('btn'); 
                            }
                            }
                            function btn_select_add_remove_end(){
                              if (!btns[btn_length-2].classList.contains('btn_list_active')&& !btns[1].classList.contains('btn_list_active')){
                                  btns[btn_length-1].classList.remove('end');
                                  btns[btn_length-1].classList.add('btn'); 
                                    btns[0].classList.remove('end');
                                    btns[0].classList.add('btn'); 
                              }
                              }
                              function btns_end_add_remove(){
                                btn_minus_add_remove_end();
                                  btn_plus_add_remove_end();
                                    btn_select_add_remove_end();
                                }
                                function btn_select(){
                                    btn.classList.add('btn_list_active');
                                    btn.classList.remove('btn_list');
                                      gadartva_btn();
                                        btns_end_add_remove();
                                  }
                                  function click_btn_plus_change_active_btn(){
                                    let activeb = btns.length;
                                    for (let j = btns.length - 1; j > 0; j--) {
                                      let Btn_plus = btns[j];
                                        if (Btn_plus.classList.contains('btn_list_active')){
                                            activeb = j 
                                            Btn_plus.classList.remove('btn_list_active');
                                            Btn_plus.classList.add('btn_list');
                                              btns[j+1].classList.add('btn_list_active');
                                              btns[j+1].classList.remove('btn_list');

                                              var pages = document.querySelectorAll(".pages");
                                              for (let i = 0; i < pages.length; i++) { 
                                                var page = pages[i];
                                                if(page.classList.contains('page_list_active')){
                                                  pages[j-1].classList.remove('page_list_active');
                                                  pages[j-1].classList.add('page_list');
                                                } 
                                              } 
                                                pages[j].classList.add('page_list_active') ;
                                        }
                                    }
                                    }
                                    function click_btn_minus_change_active_btn() {
                                      let activeIndex = 0;
                                    
                                      for (let j = 1; j < btns.length; j++) {
                                        let btn = btns[j];
                                        if (btn.classList.contains('btn_list_active')) {
                                          activeIndex = j;
                                          btn.classList.remove('btn_list_active');
                                          btn.classList.add('btn_list');
                                          btns[j - 1].classList.add('btn_list_active');
                                          btns[j - 1].classList.remove('btn_list');
                                      }
                                    }
                                        var pages = document.querySelectorAll(".pages");
                                          for (let i = 0; i < pages.length; i++) { 
                                            var page = pages[i];
                                            if (page.classList.contains('page_list_active')) {
                                              pages[i].classList.remove('page_list_active');
                                              pages[i].classList.add('page_list');
                                              pages[i-1].classList.add('page_list_active');
                                              pages[i-1].classList.remove('page_list');
                                            }
                                            }

                                      }
                                      function click_btn_plus(){
                                        if(i==btns.length -1 && !btns[i-1].classList.contains('btn_list_active')){
                                          click_btn_plus_change_active_btn();
                                            if(i == btns.length-1  && btns[i-1].classList.contains('btn_list_active'))
                                              {btns[i].classList.add('end'); btns[i].classList.remove('btn');}
                                                else if(!btns[1].classList.contains('btn_list_active')){
                                                  btns[0].classList.remove('end');
                                                  btns[0].classList.add('btn'); 
                                                }
                                          } 
                                        }
                                        function click_btn_minus(){
                                          if(i==0 && !btns[i+1].classList.contains('btn_list_active')){
                                            click_btn_minus_change_active_btn();
                                                  if(i == 0  && btns[1].classList.contains('btn_list_active'))
                                                  {btns[i].classList.add('end'); btns[i].classList.remove('btn'); }
                                                    else if(!btns[4].classList.contains('btn_list_active')){
                                                      btns[btn_length-1].classList.remove('end');
                                                      btns[btn_length-1].classList.add('btn'); 
                                                    }
                                          }


                                          }

      var btn_length = btns.length;
        let scroll_true = true;
        btn.addEventListener("click", function() {

          if (btns[i].classList.contains('btn_list_active')){scroll_true = false;}
            if (!btns[i].classList.contains('btn_list_active')&& scroll_true == false){scroll_true = true;}
              if (btns[i].classList.contains('end')){scroll_true = false;}

              scroll_top();


                click_btn_plus(); click_btn_minus();
                  if(!btns[1].classList.contains('btn_list_active')){
                      btns[0].classList.remove('end');
                      btns[0].classList.add('btn'); 
                  }
                    else if(!btns[4].classList.contains('btn_list_active')){
                            btns[btn_length-1].classList.remove('end');
                            btns[btn_length-1].classList.add('btn'); 
                    }
                      if(!i==0 && i != btns.length -1){
                        for (let j = 0; j < btns.length; j++) {
                          let otherBtn = btns[j];
                            if (otherBtn !== btn && otherBtn.classList.contains('btn_list_active')) {
                                otherBtn.classList.remove('btn_list_active');
                                otherBtn.classList.add('btn_list'); }
                              else if (otherBtn == btn && otherBtn.classList.contains('btn_list_active')) {
                                        otherBtn.classList.remove('btn_list_active');
                                        otherBtn.classList.add('btn_list'); 
                              }
                        }
                                if (btn.classList.contains('btn_list_active')) {
                                  btn.classList.remove('btn_list_active');
                                  btn.classList.add('btn_list');
                                } 
                                  else {btn_select();}
                      } 




              });
                        }
                  }


                  let element = Array.from(document.getElementsByTagName('article'));

                  element.forEach((item, i) => {
                    item.addEventListener('click', (event) => {
                       index = i;
                      gallery_img_player() ;

                    });
                  });

                        });
            }
            
              function gallery_img_player() {

                fetch('mine.json')
                  .then(response => response.json())
                  .then(data => {
                    document.body.style.overflow = " hidden";

              var length_img = data.gallery.length -1;
                let close_player = document.getElementById('close_player');
                  var player_img_active = document.getElementById('player_img_active');
                    player_img_active.src = data.gallery[index].Image;
                    elementebis_raodenoba.textContent = index +1 + " / " + length_img;
                      if(index >=0){
                        let gallery_player_btn_prev = document.getElementById('gallery_player_btn_prev');
                        let gallery_player_btn_next = document.getElementById('gallery_player_btn_next');

                          gallery_player_btn_prev.addEventListener('click', ()=>{
                            player_img_active.src = data.gallery[index-1].Image;
                            index = (index - 1 + data.gallery.length) % data.gallery.length;
                            elementebis_raodenoba.textContent = index +1 + " / " + length_img;
                          })
                            gallery_player_btn_next.addEventListener('click', ()=>{
                              player_img_active.src = data.gallery[index+1].Image;
                              elementebis_raodenoba.textContent = index +1 + " / " + length_img;
                              index = (index + 1) % data.gallery.length;

                            })
                    }

  let gallery_img_player = document.getElementById('gallery_img_player');
    let wiev_full_img = document.getElementById('wiev_full_img');
      let play_auto_slide = document.getElementById('play_auto_slide');
        let play_icon = document.getElementById('play_icon');
          let zoom_in = document.getElementById('zoom_in');
            let zoom_out = document.getElementById('zoom_out');
              let contrast = document.getElementById('contrast');
                let download = document.getElementById('download');
                  let gallery_head_line = document.getElementById('gallery_head_line');
                    let timeoutId;
                      var play = false;
                        var timerId = null;
                          var interval = 2500;
                            let gallery_color = true;
                            
                      gallery_img_player.style.display = "flex";
                      setTimeout(() => {
                        gallery_img_player.style.opacity = "1";
                        gallery_img_player.style.transition = "1.2s ease-in-out";
                      },200);





                      var sawyisi_sigrdze = null;
                        var sawyisi_simagle = null;
                          var zoomin_max_sigrdze = null;
                            // var zoomin_max_simagle = null;
                              var zoomin_mini_sigrdze = null;
                                // var zoomin_mini_simagle = null;
            player_img_active.addEventListener('load', ()=>{
              zoom_in.style.pointerEvents = "auto";
                zoom_out.style.pointerEvents = "auto";
              if (sawyisi_sigrdze != null && sawyisi_simagle != null) {
                sawyisi_sigrdze = null;
                  sawyisi_simagle = null;
                    zoomin_max_sigrdze = null;
                      zoomin_max_simagle = null;
                        zoomin_mini_sigrdze = null;
                          zoomin_mini_simagle = null;
                }
                if (sawyisi_sigrdze === null && sawyisi_simagle === null) {
                  player_img_active.style.maxWidth = "100%";
                    player_img_active.style.maxHeight = "100%";
                      player_img_active.style.width = "auto";
                        player_img_active.style.height = "auto";
                  setTimeout(() => {
                    sawyisi_sigrdze = player_img_active.offsetWidth;
                      sawyisi_simagle = player_img_active.offsetHeight;
                        zoomin_max_sigrdze = sawyisi_sigrdze * 4;
                          zoomin_max_simagle = sawyisi_simagle * 4;
                            zoomin_mini_sigrdze = sawyisi_sigrdze / 2;
                              zoomin_mini_simagle = sawyisi_simagle / 2;
                  });

              }
            
            })
        let zoom = true;
          function zoomin(){
            zoom_out.style.pointerEvents = "auto";
              if(sawyisi_sigrdze > 0 && sawyisi_sigrdze < zoomin_max_sigrdze){
              zoom = true;
                player_img_active.style.maxWidth = "500%";
                  player_img_active.style.maxHeight = "500%";
                    sawyisi_sigrdze = sawyisi_sigrdze  *1.1;
                      sawyisi_simagle = sawyisi_simagle *1.1;
            } 
             else {zoom = false; zoom_in.style.pointerEvents = "none"; }

            
             if(zoom){
              
            player_img_active.style.width = sawyisi_sigrdze +"px";
            player_img_active.style.height = sawyisi_simagle +"px";
          

          }

          }
            function zoomout(){
              zoom_in.style.pointerEvents = "auto";
                if (sawyisi_sigrdze >= zoomin_mini_sigrdze) {
                  zoom = true;
                  sawyisi_sigrdze = sawyisi_sigrdze  /1.1;
                    sawyisi_simagle = sawyisi_simagle /1.1;
              } 
              else {zoom = false; zoom_out.style.pointerEvents = "none";}
                if(zoom){
                  player_img_active.style.width = sawyisi_sigrdze  +'px';
                    player_img_active.style.height = sawyisi_simagle +'px';
                }
            }   
          zoom_in.addEventListener('click', zoomin);
            zoom_out.addEventListener('click', zoomout);
              
                      





















                document.addEventListener('mousemove', ()=>{
                  gallery_head_line.style.opacity = "0.8";
                    gallery_head_line.style.transition = "0.5s ease-in-out";

                      clearTimeout(timeoutId);
                        timeoutId = setTimeout(() => {
                          gallery_head_line.style.opacity = "0";
                            gallery_head_line.style.transition = "0.5s ease-in-out";
                      }, 3000);
                  })

                  close_player.addEventListener('click', () => {
                    document.body.style.overflow = "auto";

                    index = 0;
                      gallery_img_player.style.opacity = "0";
                      gallery_img_player.style.transition = "1.2s ease-in-out";
                      setTimeout(() => {  gallery_img_player.style.display = "none"; },1000);
                      if (play == true) {
                        clearInterval(timerId);
                        play_icon.src = "img/play.svg";
                        play = false;
                      }
                    });
                    zoom_in.addEventListener('mousemove' , ()=>{zoom_in.classList.add('g_head_icon_active');});
                    zoom_in.addEventListener('mouseout' , ()=>{zoom_in.classList.remove('g_head_icon_active');});
                      zoom_out.addEventListener('mousemove' , ()=>{zoom_out.classList.add('g_head_icon_active');});
                      zoom_out.addEventListener('mouseout' , ()=>{zoom_out.classList.remove('g_head_icon_active');});
                        wiev_full_img.addEventListener('mousemove' , ()=>{wiev_full_img.classList.add('g_head_icon_active');});
                        wiev_full_img.addEventListener('mouseout' , ()=>{wiev_full_img.classList.remove('g_head_icon_active');});
                          play_auto_slide.addEventListener('mousemove' , ()=>{play_auto_slide.classList.add('g_head_icon_active');});
                          play_auto_slide.addEventListener('mouseout' , ()=>{play_auto_slide.classList.remove('g_head_icon_active');});
                            contrast.addEventListener('mousemove' , ()=>{contrast.classList.add('g_head_icon_active');});
                            contrast.addEventListener('mouseout' , ()=>{contrast.classList.remove('g_head_icon_active');});
                              download.addEventListener('mousemove' , ()=>{download.classList.add('g_head_icon_active');});
                              download.addEventListener('mouseout' , ()=>{download.classList.remove('g_head_icon_active');});
                               
                              play_auto_slide.addEventListener('click', () => {
                                if (play == false) {
                                  play_icon.src = "img/pause.svg";
                                  timerId = setInterval(() => {
                                      player_img_active.src = data.gallery[index].Image;
                                    elementebis_raodenoba.textContent = index + 1 + " / " + length_img;
                                    index = (index + 1) % data.gallery.length;
                                  }, interval);
                                  play = true;
                                } else if (play == true) {
                                  clearInterval(timerId);
                                  play_icon.src = "img/play.svg";
                                  play = false;
                                }
                              });


                              contrast.addEventListener('click', ()=>{
                                    let contrast_icon = document.getElementById('contrast_icon');
                                      if(gallery_color){
                                        contrast_icon.style.transform = `rotate(180deg)`; 
                                        gallery_img_player.style.backgroundColor = "#CCCCCC";
                                        gallery_color = false;
                                      } 
                                        else {
                                          contrast_icon.style.transform = `rotate(0deg)`; 
                                          gallery_img_player.style.backgroundColor = "rgb(38, 41, 39)";
                                          gallery_color = true;
                                        }
                                    });

      
              });


              }

                function showFullScreen() {

                  var elem = document.getElementById("player_img_active");
                  if (elem.requestFullscreen) {
                    elem.requestFullscreen();
                  } else if (elem.msRequestFullscreen) {
                    elem.msRequestFullscreen();
                  } else if (elem.mozRequestFullScreen) {
                    elem.mozRequestFullScreen();
                  } else if (elem.webkitRequestFullscreen) {
                    elem.webkitRequestFullscreen();
                  }
                }

                    function home_content() {

            fetch('mine.json')
              .then(response => response.json())
              .then(data => {

                  data.Person.forEach(person => {

          let content = document.getElementById("content");
            let article = document.createElement('article');
              article.className = "article" +" "+ person.Email;

            let content_img = document.createElement('img');
                content_img.className = "content_img";

              var kategoria = document.createElement('div');
                  kategoria.className = "kategoria";

                let kategoria_img = document.createElement('img');
                    kategoria_img.className = "kategoria_img";
                    kategoria_img.src= "img/category.svg";

                  let kategoria_txt = document.createElement('samp');
                      kategoria_txt.id = "kategoria_txt";
                      kategoria_txt.textContent = "სეზონი/ლოკაცია";

                    var article_info = document.createElement('div');
                        article_info.className = "article_info";

                      let time = document.createElement('div');
                          time.className = "time";

                        let time_img = document.createElement('img');
                            time_img.className = "time_img";
                            time_img.src = "img/time.svg";

                          let time_txt = document.createElement('samp');
                              time_txt.className = "time_txt";

                            let view = document.createElement('div');
                                view.className = "view";

                              let view_txt = document.createElement('samp');
                                  view_txt.className = "view_txt";
                                  view_txt.textContent = "290";

                                let view_img = document.createElement('img');
                                    view_img.className = "view_img";
                                    view_img.src = "img/favorit1.svg";

                                    var name = document.createElement('h2');
                                      name.className = "name";

                                      var agwera = document.createElement('h3');
                                      agwera.className = "agwera";

                                      var wiev_link = document.createElement('div');
                                          wiev_link.className ="wiev_link";

                                            let wiev_img = document.createElement('img');
                                            wiev_img.src = "img/view.svg";
                            
                        
                      agwera.textContent = person.Username;
                      content_img.src = person.Image;
                      name.textContent = person.Name;
                      time_txt.textContent = person.Datetime;

                      
                      let articles = document.getElementsByClassName("article");
                      for (let i = 0; i < articles.length; i++) {
                        let article = articles[i];
                            let articleWidth = article.offsetWidth;
                                article.style.height = articleWidth + 40 + "px";
                
                          var wiev_link = document.createElement('div');
                              wiev_link.className ="wiev_link";
                
                              var wiev_link_text = document.createElement('samp');
                              wiev_link_text.className = "wiev_link_text";
                              wiev_link_text.textContent = "ჩვენება"
                
                                let wiev_img = document.createElement('img');
                                    wiev_img.src = "img/view.svg";
                
                                    var close_btn = document.createElement('div');
                                    close_btn.className = "close_icon";
                                    close_btn.style.display = "none";
                        
                                          var close_img = document.createElement('img');
                                          close_img.src = "img/close.svg";
                            
                      }
                

          function movlena(){

            article.classList.remove('article');
            article.classList.add("article_active");
                      
              setTimeout(() => {

                var shefaseba_div = document.createElement('div');
                var shefaseba_txt = document.createElement('h1');
              
              
                var info_list = document.createElement('ul');
                
                var info_list_l1 = document.createElement('li');
                var info_list_l1_img =  document.createElement('img');
                    info_list_l1_img.src = "img/dro.svg";
                    var info_list_l1_div =  document.createElement('div');
                    info_list_l1_div.textContent = "3 დღე.";
              
              
                    var info_list_l2 = document.createElement('li');
                    var info_list_l2_img =  document.createElement('img');
                        var info_list_l2_div =  document.createElement('div');
              
              
              
                        var info_list_l3 = document.createElement('li');
                        var info_list_l3_img =  document.createElement('img');
                            var info_list_l3_div =  document.createElement('div');
                            var info_list_l3_samp =  document.createElement('samp');
              
              
              
                            var info_list_l4 = document.createElement('li');
                            var info_list_l4_img =  document.createElement('img');
                                var info_list_l4_div =  document.createElement('div');
                                var info_list_l4_samp =  document.createElement('samp');
                                
              
                                    var info_list_l5 = document.createElement('li');
                                    var info_list_l5_img =  document.createElement('img');
              
                                    var info_list_l5_btn1 =  document.createElement('button');
              
                                    var info_list_l5_input =  document.createElement('input');
              
                                    var info_list_l5_btn2 =  document.createElement('button');
              
                                      var info_list_l6 = document.createElement('li');
                                      var info_list_l6_btn3 =  document.createElement('button');
              




                close_btn.style.display = "flex";
                
                  shefaseba_div.className ="shefaseba_div";
                  shefaseba_div.id ="shefaseba_div";

                    shefaseba_txt.className = "shefaseba_txt";
                    shefaseba_txt.textContent = "4+";

                      info_list.className = "info_list";
                      info_list.id = "info_list";     

                        info_list_l1_img.src = "img/dro.svg";
                        info_list_l1_div.textContent = "3 დღე.";

                          info_list_l2_img.src = "img/fasi.svg";
                          info_list_l2_div.textContent = 550 +" ₾";
                          info_list_l2_div.className = "cheked";
                          info_list_l2_div.id = "fasi";

                            info_list_l3_img.src = "img/transporti.svg";
                            info_list_l3_div.className = "cheked";
                            info_list_l3_samp.className = "item";

                              info_list_l4_img.src = "img/kveda.svg";
                              info_list_l4_div.className = "cheked";
                              info_list_l4_samp.className = "item";
                                                  
                                info_list_l5.className = "raodenoba";
                                info_list_l5_img.src = "img/raodenoba.svg";

                                  info_list_l5_btn1.id = "mateba";
                                  info_list_l5_btn1.className ="mateba";
                                  info_list_l5_btn1.textContent = "+";

                                    info_list_l5_input.id = "raodenoba_txt";
                                    info_list_l5_input.type = "text";
                                    info_list_l5_input.value = "1";

                                      info_list_l5_btn2.id = "kleba";
                                      info_list_l5_btn2.textContent = "-";

                                        info_list_l6_btn3.className = "dajavshna";
                                        info_list_l6_btn3.id = "dajavshna";
                                        info_list_l6_btn3.textContent = "დაჯავშნა";
                                            



                                        info_list_l5_btn1.addEventListener('click', function(){
                                          info_list_l5_input.value ++;
                                          let raodenoba = info_list_l5_input.value;
                                          if(raodenoba >=11){
                                            alert("ამ მოდულიდან შეიძლება მხოლოდ 10 პერსონაზე დაჯავშნა, სხვა შემთხვევაში დაგვიკავშირდეით (+995) 595 03-56-68");
                                            info_list_l5_input.value = "10";
                                            let raodenoba = info_list_l5_input.value;
                                            info_list_l2_div.textContent = raodenoba * 550 +" ₾";
                                          }
                                          else{info_list_l2_div.textContent = raodenoba * 550 +" ₾";}
                                        });

                                          info_list_l5_btn2.addEventListener('click', function(){
                                            info_list_l5_input.value --;
                                            let raodenoba = info_list_l5_input.value;

                                            if(raodenoba <=0){
                                              alert("მნიშვნელობა უნდა იყოს მინიმუმ 1");
                                              info_list_l5_input.value = "1";
                                              let raodenoba = info_list_l5_input.value;
                                              info_list_l2_div.textContent = raodenoba * 550 +" ₾";
                                            }
                                            else{info_list_l2_div.textContent = raodenoba * 550 +" ₾";}
                                          });

                                              info_list_l5_input.addEventListener('change', function(){
                                              let raodenoba = info_list_l5_input.value;

                                              if(raodenoba <=0){
                                                alert("გთხოვთ შეიყვანოთ 0-სგან განსხვავებული დადებითი რიცხვი");
                                                info_list_l5_input.value = "1";
                                              }
                                              else if (raodenoba >=11) {
                                                alert("ამ მოდულიდან შეიძლება მხოლოდ 10 პერსონაზე დაჯავშნა, სხვა შემთხვევაში დაგვიკავშირდეით (+995) 595 03-56-68");
                                                info_list_l5_input.value = "10";
                                                let raodenoba = info_list_l5_input.value;
                                                info_list_l2_div.textContent = raodenoba*550 +" ₾";
                                              }
                                              else{info_list_l2_div.textContent = raodenoba * 550 +" ₾";}
            

                                              })


                                    

              agwera.classList.remove("agwera");
              agwera.classList.add("agwera_active");
              name.classList.add("name_active");
              article_info.classList.add('article_info_active');
              kategoria.classList.add('kategoria_active');

                info_list_l3_div.append(info_list_l3_samp);
                info_list_l4_div.append(info_list_l4_samp);
                info_list_l1.append(info_list_l1_img,info_list_l1_div);
                info_list_l2.append(info_list_l2_img,info_list_l2_div);
                info_list_l3.append(info_list_l3_img,info_list_l3_div);
                info_list_l4.append(info_list_l4_img,info_list_l4_div);
                info_list_l5.append(info_list_l5_img,info_list_l5_btn1,info_list_l5_input,info_list_l5_btn2)
                info_list_l6.append(info_list_l6_btn3);
                
                  info_list.append(info_list_l1,info_list_l2,info_list_l3,info_list_l4,info_list_l5,info_list_l6);
                  shefaseba_div.append(shefaseba_txt);
                  article.append( wiev_link,shefaseba_div,content_img,info_list,kategoria,article_info,name,agwera);
                                  
                    wiev_link.style.display="none";

            }, 1500);

            
          }           


                close_btn.append(close_img);
                wiev_link.append(wiev_img,wiev_link_text);
                time.append(time_img,time_txt);
                view.append(view_txt,view_img);
                article_info.append(time,view);
                kategoria.append(kategoria_img,kategoria_txt);
                article.append(wiev_link,close_btn,content_img,kategoria,article_info,name);
                content.append(article);
                  
          article.addEventListener('mouseover', function(){ wiev_link_text.style.display = "flex";  wiev_link.classList.remove('wiev_link');  wiev_link.classList.add('wiev_link_active'); })
          article.addEventListener('mouseout', function(){ wiev_link.classList.add('wiev_link'); wiev_link.classList.remove('wiev_link_active'); })
          close_btn.addEventListener('click', function(){ remove_active_elements(); wiev_link.style.display="flex"; });
          wiev_link.addEventListener('click', function(){ remove_active_elements();  movlena(); });

          });
            });
                              //ziritadi funqciebi
                                menu_mob(); 
                                  slide(); 
                                    lamp(); 
                                      user_autorise();
                              //
                    }

