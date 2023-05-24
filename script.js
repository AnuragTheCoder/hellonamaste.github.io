
const api_url='https://www.coursehubiitg.in/api/codingweek/contributions';
    async function getISS(){
        const response=await fetch(api_url);
        const anuragdata=await response.json();
        console.log(anuragdata);
        
        
         const board5 = document.getElementById('items5') 
    board5.innerHTML += '<div class="box1"><div class="num">6</div></div><div class="box2"> <img class="im4" src="' + anuragdata[8].avatar + '"></div> <div class="box3"><div class="Namef">'+anuragdata[8].name +'</div></div> <div class="box4"><div class="score">'+anuragdata[8].points+' </div></div></div';


    const board4 = document.getElementById('items4') 
    board4.innerHTML += '<div class="box1"><div class="num">5</div></div><div class="box2"> <img class="im4" src="' + anuragdata[7].avatar + '"></div> <div class="box3"><div class="Namef">'+anuragdata[7].name +'</div></div> <div class="box4"><div class="score">'+anuragdata[7].points+' </div></div></div';

    const board3 = document.getElementById('items3') 
    board3.innerHTML += '<div class="box1"><div class="num">4</div></div><div class="box2"> <img class="im4" src="' + anuragdata[6].avatar + '"></div> <div class="box3"><div class="Namef">'+anuragdata[6].name +'</div></div> <div class="box4"><div class="score">'+anuragdata[6].points+' </div></div></div';

    const board2 = document.getElementById('items2') 
    board2.innerHTML += '<div class="box1"><div class="num">3</div></div><div class="box2"> <img class="im4" src="' + anuragdata[5].avatar + '"></div> <div class="box3"><div class="Namef">'+anuragdata[5].name +'</div></div> <div class="box4"><div class="score">'+anuragdata[5].points+' </div></div></div';

    const board1 = document.getElementById('items1') 
    board1.innerHTML += '<div class="box1"><div class="num">2</div></div><div class="box2"> <img class="im4" src="' + anuragdata[4].avatar + '"></div> <div class="box3"><div class="Namef">'+anuragdata[4].name +'</div></div> <div class="box4"><div class="score">'+anuragdata[4].points+' </div></div></div';

    const board0 = document.getElementById('items0') 
    board0.innerHTML += '<div class="box1"><div class="num">1</div></div><div class="box2"> <img class="im4" src="' + anuragdata[3].avatar + '"></div> <div class="box3"><div class="Namef">'+anuragdata[3].name +'</div></div> <div class="box4"><div class="score">'+anuragdata[3].points+' </div></div></div';



    const head1=document.getElementById('recc2') 
    head1.innerHTML += '<div class="lo" ><div class="im4"><span class="ins">2</span></div> <img src="' + anuragdata[0].avatar + '"   class="im1" alt=""><div class="l" style="text-align: center;"> '+anuragdata[0].name+': '+anuragdata[0].points+'</div></div> <div class="lo"> <div class="im4"><span class="ins">1</span></div><img src="' + anuragdata[1].avatar + '"   class="im1" alt=""><div class="k" style="text-align: center;"> '+anuragdata[1].name+': '+anuragdata[1].points+'</div></div> <div class="lo"><div class="im4"><span class="ins">3</span></div> <img src="' + anuragdata[2].avatar + '"   class="im1" alt=""><div class="g" style="text-align: center;"> '+anuragdata[2].name+': '+anuragdata[2].points+'</div></div> '

    }

    
    getISS(); 




    
