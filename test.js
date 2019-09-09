const isat=require('wygsiwyg');

isat.isat_wygsiwyg_zone({
     editor_style:"border: 1px solid;padding: 10px;box-shadow: 5px 10px;",
     trigger:1,
     disable:false,
    imgMode:{
         height:40,
         width:50
    },
    dataMode:{
     attribute:document.getElementById("mycode")
    }

});



console.log(isat.getCode());

// // isatbold();

// function isatbold(){
// alert("clicked");

// }
// function myFunction() {
  
//      alert("clicked");
//    }