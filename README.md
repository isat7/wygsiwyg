

## Description
This wygsiwyg editor is designed for developers and easy to implement  whthin few minutes,easy to customize all the widgets

## Download and Install wygsiwyg Editor

### Install from npm

```
npm install wygsiwyg --save
```

### Import Option 1
```
const isat=require('wygsiwyg');
```

### Import Option 2
```
import {'isat'} from 'wygsiwyg'
```

### Usage
```
isat.isat_wygsiwyg_zone({ });
```

### apply editable
here **isat_editable_content=isat_editable_content** is must to perform wygsiwyg
```html
 <div isat_editable_content="isat_editable_content">this is writable</div>
```

### usage
apply your own style for wydgets and then make container if you want ,which is fully developer friendly
```html
    
  <a id="isat-left">left</a>
  <a id="isat-center">center</a>
  <a id="isat-right">right</a>
  <a id="isat-jfull">jfull</a>
  <a id="isat-indent"> isat indent</a>
  <a id="isat-outdent">outdent</a>  
  <a id="isat-insertOrderedList"> isat-insertOrderedList</a>
  <a id="isat-insertUnorderedList">isat-insertUnorderedList</a>   
  <a id="isat-bold">bold</a>  
  <a id="isat-italic">italic</a>  
  <a id="isat-strikeThrough">strightthrough</a>  
  <a id="isat-subscript">subscript
  <a id="isat-superscript">supscript</a>    
  <a id="isat-underline"> underline</a>
  <a id="isat-createlink">createlink</a>
  <a id="isat-unlink">unlink</a>      
  <a id="isat-header-1">h1</a>
  <a id="isat-header-2">h2</a>
  <a id="isat-forecolor">fore color</a>
  <a id="isat-backcolor">back color</a>   
  <a id="isat-undo">undo</a>
  <a id="isat-redo">redo</a>
  <a id="isat-getText">isat getText</a>   
  <a id="isat-getCode">isat getCode</a> 
  
  
  <!-- google fonts here -->
    <select name="slct" id="isat-fontfamily">            
              <option value="default">default</option>    
              <option value="Arial">Arial</option>    
              <option value="Tangerine">Tangerine</option>    
              <option value="Comic Sans MS">Comic Sans MS</option>    
              <option value="Calibri">Calibri</option>    
              <option value="ZCOOL KuaiLe">ZCOOL KuaiLe</option>     
              <option value="Mogra">Mogra</option>  
              <option value="Gloria Hallelujah">Gloria Hallelujah</option>  
    </select>
      

    <select  id="isat-headers" >
                  <option  value="p">Normal</option>    
                  <option  value="h1">HEADER 1</option>    
                  <option  value="h2">HEADER 2</option>    
                  <option  value="h3">HEADER 3</option>    
                  <option  value="h4">HEADER 4</option>
                  <option  value="h5">HEADER 5</option>
                  <option  value="h6">HEADER 6</option>
    </select>
         

```


### Example Code

```html
<!-- Add Own Style -->
 <a id="isat-bold">bold</a>  
 <a id="isat-italic"> italic</a>
 <!-- Editable Area -->
 <div isat_editable_content="isat_editable_content">Editable area</div>  



```


```javascript
const isat=require('wygsiwyg');
isat.isat_wygsiwyg_zone({
     editor_style:"border: 1px solid;padding: 10px;box-shadow: 5px 10px;",
     trigger:1,
   
});
```



### options
Style Your contentEditable

```javascript

isat.isat_wygsiwyg_zone({
    // apply css style in string 
     editor_style:"border: 1px solid;padding: 10px;box-shadow: 5px 10px;",
    
   
});
```
Trigger options are  used to activate the contenteditable which have (isat_editable_content="isat_editable_content")
```javascript
isat.isat_wygsiwyg_zone({
     trigger:1,
   
});
```

For Disable wygsiwyg
```javascript
isat.isat_wygsiwyg_zone({
     disable:false,
   
});
```

Manually apply size of image preview

```html

  
 <input class="tool-items fa fa-file-image-o" type="file" accept="image/*"   id="isat-image" >
 <!-- Editable Area -->
 <div isat_editable_content="isat_editable_content">Editable area</div>  


```
```javascript
isat.isat_wygsiwyg_zone({
 
 imgMode:{
         height:40,
         width:50
    },

});

```

Insert  Edited Wysiwyg Content or Html 


```html

  
 <!-- Editable Area -->
 <div isat_editable_content="isat_editable_content">Editable area</div>  
<!-- Add Own Style with your element -->
<a id="isat-getText">isat getText</a>
  
<a id="isat-getCode">isat getCode</a> 

  <div id="mycode">Output</div>


```

```javascript
isat.isat_wygsiwyg_zone({
 

dataMode:{
     attribute:document.getElementById("mycode")
    }


});

```

Get HTML Code  
 
```javascript


isat.getCode()


```

Get Plain Text   
 
```javascript


isat.getText()


```





## Licensing

- License Agreement: MIT
- Author :Balaji





