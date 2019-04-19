
/**
 * Captilization
 */

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

var valueMain1 = []
var valueMain2 = []
var valueMain3 = []






var updateDB = function () {



  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonblob.com/api/jsonBlob/6766327f-607d-11e9-95ef-9bcb815ba4a4", true);
  xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
  xhr.send();


  var newObj = {};
  xhr.onreadystatechange = function () {
    if ((xhr.status == 200) && (xhr.readyState == 4)) {


      console.log('act-->', xhr.responseText)
      newObj = JSON.parse(xhr.responseText)
      //  var t= newObj.product[0];
      // console.log('par-->', t[Object.keys(t)[1]]);
      // console.log('par-->', Object.values(t));

      const keys = Object.keys(newObj);
      // console.log('keys->>', keys);


      var mainLi = document.getElementById('nav-main-list');
      // console.log(mainLi);

      for (let index = 0; index < keys.length; index++) {

        var newEle = document.createElement('button')
        newEle.setAttribute('class', 'list-item-' + index);
        newEle.setAttribute('id', 'list-item-id-' + index);

        // console.log(newEle, "done");
        var newEleChild = document.createElement('span');
        newEleChild.setAttribute('class', 'list-item-span-' + index)
        newEleChild.innerText = keys[index].capitalize();
        newEle.appendChild(newEleChild)
        newEleChild = '';
        mainLi.appendChild(newEle)
        newEle = '';

      }

      /**
       * adding dropdown elements
       */
      /**
       * getting values
       */

      var valueIn1 = []
      for (let index = 0; index < newObj.product.length; index++) {
     
        valueIn1.push(Object.values(newObj.product[index]))

      }
    
      for (let i = 0; i < valueIn1.length; i++) {
        for (let j = 0; j < valueIn1.length; j++) {
    
          if ((valueIn1[i][j] == valueIn1[0][1]) || (valueIn1[i][j] == valueIn1[1][1]) || (valueIn1[i][j] == valueIn1[2][1])) {
            valueMain1.push(valueIn1[i][j])
          }

        }

      }


      var valueIn2 = []
      for (let index = 0; index < newObj.developers.length; index++) {
   
        valueIn2.push(Object.values(newObj.developers[index]))

      }

      for (let i = 0; i < valueIn2.length; i++) {
        for (let j = 0; j < valueIn2.length; j++) {
     
          if ((valueIn2[i][j] == valueIn2[0][1]) || (valueIn2[i][j] == valueIn2[1][1]) || (valueIn2[i][j] == valueIn2[2][1])) {
            valueMain2.push(valueIn2[i][j])
          }

        }

      }

     
      var compTit = newObj.company[0].title

      var valueIn3 = []
      for (let index = 0; index < newObj.company.length; index++) {
    

        valueIn3.push(Object.values(newObj.company[index]))

      }
  
      for (let i = 0; i < valueIn3.length; i++) {
        for (let j = 0; j < valueIn3.length; j++) {

          console.log('compant sub', valueIn3[0][1]);

          if ((valueIn3[i][j] == valueIn3[0][1])) {
            valueMain3.push(valueIn3[i][j])
          }

        }

      }





      // console.log("fasdabgnhjdghgfefhjkjffgfdg->>>>>>>>", valueIn3);


      // console.log("jdhfkjdvhmf----->", valueMain1, valueIn2);

      /**
       * 
       *  svg s for all the elements
       * 
       */
      var svgArr1 = ['<svg viewBox="0 0 48 48"> <path fill="#87BBFD" class="hover-fillLight" d="M24 48C12.11 48 2.244 39.35.338 28H6.5V9H5.27C9.67 3.515 16.423 0 24 0c13.255 0 24 10.745 24 24S37.255 48 24 48z"> </path>  <path fill="#555ABF" class="hover-fillDark" d="M25 21v8H.526A24.082 24.082 0 0 1 0 24 23.908 23.908 0 0 1 6.116 8H31.5c.828 0 1.5.67 1.5 1.5V21h-8zm-10.502-8.995a6.497 6.497 0 1 0 0 12.994 6.497 6.497 0 0 0 0-12.996z">   </path>   <path fill="#FFF"       d="M39.823 39.276a2.44 2.44 0 0 1-1.76.724H16.5a1.5 1.5 0 0 1-1.5-1.5v-18c0-.828.67-1.5 1.5-1.5h27.693a1.51 1.51 0 0 1 1.484 1.256c.21 1.217.323 2.467.323 3.744 0 5.936-2.355 11.32-6.177 15.276zM33.5 23.002a6.497 6.497 0 1 0 0 12.995 6.497 6.497 0 0 0 .002-12.994z">   </path> </svg>', '<svg viewBox="0 0 48 48"> <path fill="#74E4A2" class="hover-fillLight" d="M24 0c13.255 0 24 10.745 24 24S37.255 48 24 48 0 37.255 0 24 10.745 0 24 0z"> </path> <path fill="#FFF"  d="M39.558 30.977c-6.23 6.225-16.304 6.194-22.535-.03l13.975-13.962c-6.232-6.224-16.335-6.224-22.567 0-4.043 4.04-5.456 9.712-4.247 14.896l-.654.174a21.89 21.89 0 0 1-1.536-8.61c.284-11.806 10.003-21.35 21.823-21.446 6.15-.05 11.72 2.42 15.744 6.438 6.23 6.226 6.23 16.318 0 22.542z">   </path>  <path fill="#159570" class="hover-fillDark"       d="M33.653 21.413c1.43 5.336-1.735 10.82-7.068 12.25-5.332 1.43-10.814-1.736-12.242-7.072-1.43-5.334 1.735-10.82 7.068-12.25 5.334-1.43 10.815 1.738 12.244 7.074z">   </path> </svg>', '<svg viewBox="0 0 48 48"> <path fill="#68D4F8" class="hover-fillLight"    d="M48 24c0 13.255-10.745 24-24 24S0 37.255 0 24 10.745 0 24 0c1.363 0 2.698.12 4 .338V15h5v5h14.662c.218 1.302.338 2.637.338 4z"> </path> <path fill="#FFF"     d="M16.99 29.966L17 17l-5.55-.006a1.02 1.02 0 0 0-.725.3L2.65 25.446a1.55 1.55 0 0 0-.44 1.28c1.22 9.944 9.1 17.825 19.042 19.047.472.058.945-.104 1.28-.44l8.172-8.076c.192-.193.3-.453.3-.725L31 31l-12.985-.01a1.023 1.023 0 0 1-1.024-1.024z"> </path> <path fill="#217AB7" class="hover-fillDark"     d="M47.697 20.195L37.194 30.702a1.03 1.03 0 0   1-.726.3h-5.462V18.03c0-.567-.46-1.025-1.025-1.025H16.994V11.52c0-.274.108-.534.3-.726L27.783.3C38 1.916 46.07 9.98 47.698 20.194z">  </path></svg>']

      var svgArr2 = ['<svg width="17" height="17"><path fill="#87BBFD" class="hover-fillLight" d="M.945 1.998h3.632C6.744 1.998 8.5 3.005 8.5 4.83v11.583c-.512 0-1.015-.337-1.33-.59-1.03-.828-3.057-.828-5.222-.828H.945A.944.944 0 0 1 0 14.052V2.944C0 2.422.423 2 .945 2z"></path><path fill="#6772E5" class="hover-fillDark" d="M16.055 1.998h-3.632C10.257 1.998 8.5 3.005 8.5 4.83v11.583c.512 0 1.015-.337 1.33-.59 1.03-.828 3.057-.828 5.222-.828h1.003A.944.944 0 0 0 17 14.05V2.945A.944.944 0 0 0 16.055 2z"></path></svg>', '<svg width="17" height="17"><path d="M2 15h13M2 11h13M2 7h13M2 3h13" fill="none" stroke="#6772e5" class="hover-strokeDark" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>', '<svg width="17" height="17"><path d="M1 9h2.95l3-6.5 3 12 3-5.45L16 9" fill="none" stroke="#6772e5" class="hover-strokeDark" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>']


      var svgArr3 = ['<svg width="17" height="17"><path fill="#6772E5" class="hover-fillDark" d="M8.5 17a8.5 8.5 0 1 1 0-17 8.5 8.5 0 0 1 0 17zm.178-10.89c.76 0 1.726.278 2.486.69V4.443c-.828-.33-1.656-.502-2.484-.502-2.028 0-3.41 1.06-3.41 2.83 0 2.77 3.8 2.32 3.8 3.513 0 .462-.37.612-.93.612-.827 0-1.867-.366-2.706-.823v2.388c.93.4 1.843.592 2.705.592 2.077 0 3.48-1.027 3.48-2.827 0-2.98-3.82-2.447-3.82-3.572-.003-.39.352-.542.877-.542z"></path></svg>']










      for (let index = 0; index < keys.length; index++) {

        var innerChild = document.createElement('div');
        innerChild.className = 'dropdown-expand-' + index;
        innerChild.setAttribute('id', 'expand-div-' + index);
        var innerChild0 = document.createElement('div');
        innerChild0.className = 'inner-expand-product-' + index;
        innerChild0.childNodes
        // console.log(innerChild0);
        var html = '<ul>'

        if (innerChild0.className == 'inner-expand-product-0') {
          for (i = 0; i < newObj.product.length; i++) {



            html = html + '<li> <a>' + svgArr1[i] + '<div><h3>' + newObj.product[i].title + '</h3>' + '<p>' + valueMain1[i] + '</p></div></a> </li>';
          }
          html = html + '</ul>'
          innerChild0.innerHTML = html
        }
        else if (innerChild0.className == 'inner-expand-product-1') {
          for (i = 0; i < newObj.product.length; i++) {



            html = html + '<li> <a>' + svgArr2[i] + '<div><h3>' + newObj.developers[i].title + '</h3>' + '<p>' + valueMain2[i] + '</p></div></a> </li>';
          }
          html = html + '</ul>'
          innerChild0.innerHTML = html
        }
        else if (innerChild0.className == 'inner-expand-product-2') {
          for (i = 0; i < newObj.company.length; i++) {



            html = html + '<li> <a> <h3>' + svgArr3[0] + compTit + '</h3>' + '</a> </li>';
          }
          html = html + '</ul>'
          innerChild0.innerHTML = html
        }

     
    
        innerChild.appendChild(innerChild0)

        mainLi.appendChild(innerChild)
        innerChild = ''
        console.log(innerChild0);


      }




    }


  }




}
