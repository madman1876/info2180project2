window.onload = function()
{   
    var PP = document.getElementById('puzzlearea').children;  // Puzzle pieces
    var TP = 0;  // Current starting position of pixels from top
    var LP = 0;  // Current starting position of pixels from left
    var TE = 300;   // current position from top of empty space
    var LE = 300;   // current position from left of empty space
    var TMP;  //  Most previous position of pixels from top
    var LMP;  //  Most previous position of pixels from left
    var S;    //  Variable to hold current shuffle valuse
    var WL = 0; // image position wrap from left
    var WR = 0; // image position wrape relative to top


    for(var i = 0; i < 15; i++)  //assigning 15 pieces of the picture as tiles
{       PP[i].addClassName ('puzzlepiece');
        PP[i].style.top =  TP + 'px';
        PP[i].style.left = LP + 'px';
        PP[i].style.backgroundPosition = WL + 'px ' + WR + 'px';
                
        if (LP < 300){
            LP += 100;
            WL -= 100;
            
}
        else
{           LP = 0;
            WL = 0;
            TP += 100;
            WR -= 100;
}}

    for ( i in PP)
{       PP[i].onclick=function(){  // moves legal pieces ie = positions are changed
      TMP = parseInt(this.style.top);
        LMP = parseInt(this.style.left);

            if (TMP == TE && (LMP == LE-100 || LMP == LE+100) || LMP == LE && (TMP == TE-100 || TMP == TE+100 )){
                this.style.top = TE + 'px';
                this.style.left = LE + 'px';
                TE = TMP;
                LE = LMP;    
            }
        }
        PP[i].onmouseover=function(){  // highlights movable pieces
            TMP = parseInt(this.style.top);
            LMP = parseInt(this.style.left);
            if (TMP == TE && (LMP == LE-100 || LMP == LE+100) || LMP == LE && (TMP == TE-100 || TMP == TE+100 )){
                this.addClassName('movablepiece');        
            }
            else{
                this.removeClassName('movablepiece');
            }
        }
    }
    $('controls').onclick = function Shuffle(){  // function to shuffle pieces
        for(var i = 0; i < 400; i++){
            var choice = Math.floor (Math.random () * 4);
          
            if ( choice == 0) {
                (styleOf((TE-100)+'px', LE+'px'));                
                TMP = parseInt(S.style.top);
                LMP = parseInt(S.style.left);
                S.style.top = TE + 'px';
                S.style.left = LE + 'px';
				TE = TMP;
                LE = LMP;
            }
            else if ( choice == 1) {
               (styleOf(TE+'px', (LE-100)+'px'));               
                TMP = parseInt(S.style.top);
                LMP = parseInt(S.style.left);
                S.style.top = TE + 'px';
                S.style.left = LE + 'px';
				TE = TMP;
                LE = LMP;
            }
            else if ( choice == 2) {
                styleOf((TE+100)+'px', LE+'px');
                TMP = parseInt(S.style.top);
                LMP = parseInt(S.style.left);
                S.style.top = TE + 'px';
                S.style.left = LE + 'px';
				TE = TMP;
                LE = LMP;
            }
            else {
                styleOf(TE+'px', (LE + 100)+'px')
                TMP = parseInt(S.style.top);
                LMP = parseInt(S.style.left);              
                S.style.top = TE + 'px';
                S.style.left = LE + 'px';				
				TE = TMP;
                LE = LMP; 
            }
        }   
    };

    function styleOf(T, L){ // Helper function for shuffle parameters (top start position, left start position)
    for(var i =0; i < 15; i++){
        if(PP[i].style.top == T && PP[i].style.left == L){
            S = PP[i];
            return S;        
            }
        }
    }
};