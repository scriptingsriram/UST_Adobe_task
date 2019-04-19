


  setTimeout(() => {
    var sel = document.getElementById('list-item-id-0')
     console.log('set->>',sel);
  var sel2=document.getElementById('expand-div-0');
    sel.addEventListener('mouseover',function(){
  
      sel2.style.display='block'
  
    })
    sel2.addEventListener('mouseover',function(){
     
          sel2.style.display='block'
      
        })



    sel.addEventListener('mouseout',function(){
        document.getElementById('expand-div-0').style.display='none'
    
      })
      sel2.addEventListener('mouseout',function(){
        document.getElementById('expand-div-0').style.display='none'
    
      })







      var sel1 = document.getElementById('list-item-id-1')
      console.log('set->>',sel);
   var sel22=document.getElementById('expand-div-1');
     sel1.addEventListener('mouseover',function(){
    
       sel22.style.display='block'
   
     })
     sel22.addEventListener('mouseover',function(){
      
           sel22.style.display='block'
       
         })
 
 
 
     sel1.addEventListener('mouseout',function(){
         document.getElementById('expand-div-1').style.display='none'
     
       })
       sel22.addEventListener('mouseout',function(){
         document.getElementById('expand-div-1').style.display='none'
     
       })





       var sel11 = document.getElementById('list-item-id-2')
      console.log('set->>',sel);
   var sel222=document.getElementById('expand-div-2');
     sel11.addEventListener('mouseover',function(){
   
       sel222.style.display='block'
   
     })
     sel222.addEventListener('mouseover',function(){
       
           sel222.style.display='block'
       
         })
 
 
 
     sel11.addEventListener('mouseout',function(){
         document.getElementById('expand-div-2').style.display='none'
     
       })
       sel222.addEventListener('mouseout',function(){
         document.getElementById('expand-div-2').style.display='none'
     
       })
   


  
  
  }, 1000);


    function showNav(id){
      var popS=document.getElementById(id)
      
      popS.style.visibility='visible'

        
    }
    function hidePop(i){
      var popH= document.getElementById(i)
      popH.style.visibility='hidden'
    }