
  // let shefaseba_div = document.getElementById('shefaseba_div');
  // let info_list = document.getElementById('info_list');
  // let h4 = document.getElementById('h4');
  // let h3 = document.getElementById('h3');
  // let close_btn = document.getElementById('close');
  // let article = document.getElementsByTagName('article')[0];
  
  // close_btn.addEventListener("click", function()
  // {
  //     article.classList.remove('article_active');
  //     article.classList.add('article');
  //         info_list.remove();
  //         h4.remove();
  //         h3.remove();
  //         shefaseba_div.remove();
  //         close_btn.remove(); 
  //                article.style.height = article[1].offsetHeight;
  
  
  // });

  // start
  



// and



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
                                else{
                                  info_list_l2_div.textContent = raodenoba * 550 +" ₾";
                                      }


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
                                    else{
                                    info_list_l2_div.textContent = raodenoba * 550 +" ₾";
                                        }
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
                                      else{ info_list_l2_div.textContent = raodenoba * 550 +" ₾";}
    

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



        
    article.addEventListener('mouseover', function(){
          wiev_link_text.style.display = "flex";
          wiev_link.classList.remove('wiev_link'); 
          wiev_link.classList.add('wiev_link_active');
      })

        article.addEventListener('mouseout', function(){
          wiev_link.classList.add('wiev_link');  
          wiev_link.classList.remove('wiev_link_active');
        })

          close_btn.addEventListener('click', function(){
            remove_active_elements();
            wiev_link.style.display="flex";
          });

              wiev_link.addEventListener('click', function(){

                remove_active_elements();

                    movlena();
                    
              });


            
      

});
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


  function slide(){
    var images = [
      "img/img (30).jpg", "img/img (29).jpg", "img/img (28).jpg", "img/img (27).jpg", 
      "img/img (26).jpg", "img/img (25).jpg", "img/img (24).jpg",  
      "img/img (22).jpg", "img/img (21).jpg", "img/img (18).jpg", "img/img (23).jpg",
      "img/img (20).jpg", "img/img (19).jpg", "img/img (17).jpg", "img/img (13).jpg",
      "img/img (16).jpg", "img/img (15).jpg", "img/img (14).jpg", 
      "img/img (12).jpg", "img/img (11).jpg", "img/img (10).jpg", "img/img (9).jpg"
    ];
    


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
        
              setTimeout(function() {
                slide.style.opacity = "1";
                slide.style.transition = "4s ease-in-out";
              }, 50); 
              setTimeout(function() {
                slide.style.marginLeft = slide_line_width - 40 + "px";
                slide.style.transition = "15s ease-in-out";
              }, 150); 
              setTimeout(function() {
                slide.style.transition = "2s ease-in-out";
                slide.style.opacity = "0";
              }, 12000); 
              setTimeout(function() {
                slide.remove();
              }, 14000); 
        
              slide_line.append(slide);
            }, i * 11500); 
          }
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
  

 






//   const select = document.querySelector('select');

// select.addEventListener('change', function(event) {
//   const value = event.target.value;
//   console.log(`Selected season: ${value}`);


// });
// const select = document.querySelector('select');

// select.addEventListener('change', function(event) {
//   const value = event.target.value;
//   console.log(`Selected season: ${value}`);
// });







    // let wiev_link = document.getElementById("wiev_link"); 


    // content_img.addEventListener('mouseover', function() {
    //   wiev_link.style.boxShadow ="1px 1px 5px 2px red inset";
    
    // })
