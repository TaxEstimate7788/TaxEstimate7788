/*------------------------------------------------------------------------------
* NAME       : CheckboxEvent
* PURPOSE    : Turns on/off checkbox
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/
function CheckboxEvent(elementID){
    if(document.getElementById(elementID).checked){
        document.getElementById(elementID).checked = false;
    }
    else{
        document.getElementById(elementID).checked = true;
    }
    return;
} 



/*------------------------------------------------------------------------------
* NAME       : KeypadReminder
* PURPOSE    : Displays panel for user to specify size of mobile device
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/

function KeypadReminder(top,left) { //for mobile device graphing calculator
    var div = document.createElement("div");
    div.id = "DivKeypadReminder";
    div.style.position = "absolute";
    div.style.display = 'inline-block';
    div.style.top = top;
    div.style.left = left;
    //div.style.height = "600px";
    //div.style.width = "600px";
    div.style.backgroundColor = "white";
    div.style.border = "solid";
    div.style.borderColor = "green";
    div.style.fontSize = '70px';
    div.style.whiteSpace = 'nowrap';
    //div.style.overflow = "scroll";
    //div.style.transform = "scale(2.5)";
    div.style.zIndex = '99';
    div.innerHTML = '<span style="font-size:60px">Reminder:To move keypad around <br>tap on "Keypad Area".  </span><br><br>'
        + '<span style="font-size:60px">&larr;&nbsp;&nbsp;-------&nbsp;&nbsp; "Keypad Area" &nbsp;&nbsp;-------&nbsp;&nbsp;&rarr;</span><br>'
        + '<input style="font-size:60px; height:100px;background-color:#b6ff00" type="button" onclick ="closeKeypadReminder()" value="&nbsp;&nbsp;&nbsp;CLOSE&nbsp;&nbsp;&nbsp;"/>'
        +  '&nbsp;&nbsp;&nbsp;&nbsp;'
        + '<input id="inputtimer22" style="color:#ff6a00;border:0px;font-size:35px;width:580px ;height:50px;background-color:white" type="text" onclick ="" value="timer"/>'
       ;

    document.body.appendChild(div);
    timer22(15, 2);
 
}

function closeKeypadReminder(){
    var el = document.getElementById('DivKeypadReminder');
    el.parentNode.removeChild(el);    
}


/*------------------------------------------------------------------------------
* NAME       : KeypadReminder2
* PURPOSE    : Displays panel for user to specify size of mobile device
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/

function KeypadReminder2(top,left) { //for desktop graphing calculator
    var div = document.createElement("div");
    div.id = "DivKeypadReminder2";
    div.style.position = "absolute";
    div.style.display = 'inline-block';
    div.style.top = top;
    div.style.left = left;
    //div.style.height = "600px";
    div.style.width = "600px";
    div.style.backgroundColor = "white";
    div.style.border = "solid";
    div.style.borderColor = "green";
    div.style.fontSize = '40px';
    div.style.whiteSpace = 'nowrap';
    //div.style.overflow = "scroll";
    //div.style.transform = "scale(2.5)";
    div.style.zIndex = '99';
    div.innerHTML = '<span style="font-size:35px">Moving Keypad Around:<br>Click on "Keypad Area".  </span><br>'
        + '<span style="font-size:35px">&larr;--------&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "Keypad Area" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--------&rarr;</span><br><br>'
        + '<input style="font-size:35px; height:50px;background-color:#b6ff00" type="button" onclick ="closeKeypadReminder2()" value="&nbsp;&nbsp;&nbsp;CLOSE&nbsp;&nbsp;&nbsp;"/>'
        +  '&nbsp;&nbsp;&nbsp;&nbsp;'
        + '<input id="inputtimer22" style="color:#ff6a00;border:0px;font-size:20px;width:300px ;height:50px;background-color:white" type="text" onclick ="" value="timer"/>'
       ;

    document.body.appendChild(div);
    timer22(15, 1);
}

function closeKeypadReminder2(){
    var el = document.getElementById('DivKeypadReminder2');
    el.parentNode.removeChild(el);    
}

function timer22(inputtime, closewindow){
    var time = parseInt(inputtime);
    document.getElementById('inputtimer22').value = 'Window closes in ' + time + ' seconds.';
    var myTimer = setInterval(function () {
        time -= 1;
        document.getElementById('inputtimer22').value = 'Window closes in ' + time + ' seconds.';
        if (time == 0) {
            clearInterval(myTimer);
            if (closewindow == 1) {
                closeKeypadReminder2();//for desktop version
            }
            else if (closewindow == 2) {
                closeKeypadReminder();//for mobile version
            }

        }

    }, 1000);
}

/*------------------------------------------------------------------------------
* NAME       : DeviceSize
* PURPOSE    : Displays panel for user to specify size of mobile device
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/
function DeviceSize(top,left) {
    var div = document.createElement("div");
    div.id = "DivDeviceSize";
    div.style.position = "absolute";
    div.style.display = 'inline-block';
    div.style.top = top;
    div.style.left = left;
    //div.style.height = "600px";
    //div.style.width = "600px";
    div.style.backgroundColor = "white";
    div.style.border = "solid";
    div.style.borderColor = "green";
    div.style.fontSize = '70px';
    div.style.whiteSpace = 'nowrap';
    //div.style.overflow = "scroll";
    //div.style.transform = "scale(2.5)";
    div.style.zIndex = '99';
    div.innerHTML = 'Please select size of <br>mobile device screen:<br>'
       + '1) <button onclick="DeviceType(5);closeDivDeviceSize()" style="font-size:60px;width:500px; background-color:#b6ff00"> ' + '5 inch' + '</button><br>'
       + '2) <button onclick="DeviceType(6);closeDivDeviceSize()" style="font-size:60px;width:500px; background-color:#b6ff00"> ' + '6 inch' + '</button><br>'
       + '3) <button onclick="DeviceType(7);closeDivDeviceSize()" style="font-size:60px;width:500px; background-color:#b6ff00"> ' + '7 inch' + '</button><br>'
       + '4) <button onclick="DeviceType(8);closeDivDeviceSize()" style="font-size:60px;width:500px; background-color:#b6ff00"> ' + '8 inch' + '</button><br>'
       + '5) <button onclick="DeviceType(9);closeDivDeviceSize()" style="font-size:60px;width:500px; background-color:#b6ff00"> ' + '9 inch' + '</button><br>'
       + '6) <button onclick="DeviceType(10);closeDivDeviceSize()" style="font-size:60px;width:500px ;background-color:#b6ff00"> ' + '10 inch or larger' + '</button>'
       +  '<br>'
       ;

    document.body.appendChild(div);
}

function closeDivDeviceSize(){ 
    var el = document.getElementById('DivDeviceSize');
    el.parentNode.removeChild(el);    
}


/*------------------------------------------------------------------------------
* NAME       : DeviceType
* PURPOSE    : Sets initial-scale value for mobile device
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/
function DeviceType(size){
    if (size == 5) {
        document.getElementById("viewport").setAttribute('content', 'initial-scale=0.33; user-scalable=0');
    }
    else if (size == 6) {
        document.getElementById("viewport").setAttribute('content', 'initial-scale=0.4; user-scalable=0;');
    }
    else if (size == 7) {
        document.getElementById("viewport").setAttribute('content', 'initial-scale=0.5; user-scalable=0;');
    }
    else if (size == 8) {
        document.getElementById("viewport").setAttribute('content', 'initial-scale=0.6; user-scalable=0;');
    }
    else if (size == 9) {
        document.getElementById("viewport").setAttribute('content', 'initial-scale=0.7; user-scalable=0;');
    }
    else if (size == 10) {
        document.getElementById("viewport").setAttribute('content', 'initial-scale=0.8; user-scalable=0;');
    }
}




/*------------------------------------------------------------------------------
* NAME       : DeviceSize
* PURPOSE    : Displays panel for user to specify size of mobile device
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/
function DeviceSize22(top,left) {
    var div = document.createElement("div");
    div.id = "DivDeviceSize22";
    div.style.position = "absolute";
    div.style.display = 'inline-block';
    div.style.top = top;
    div.style.left = left;
    //div.style.height = "600px";
    //div.style.width = "600px";
    div.style.backgroundColor = "white";
    div.style.border = "solid";
    div.style.borderColor = "green";
    div.style.fontSize = '70px';
    div.style.whiteSpace = 'nowrap';
    //div.style.overflow = "scroll";
    //div.style.transform = "scale(2.5)";
    div.style.zIndex = '99';
    div.innerHTML = 'Please select size of <br>mobile device screen:<br>'
       + '1) <button onclick="DeviceType22(5);closeDivDeviceSize22()" style="font-size:60px;width:500px; background-color:#b6ff00"> ' + '5 inch' + '</button><br>'
       + '2) <button onclick="DeviceType22(6);closeDivDeviceSize22()" style="font-size:60px;width:500px; background-color:#b6ff00"> ' + '6 inch' + '</button><br>'
       + '3) <button onclick="DeviceType22(7);closeDivDeviceSize22()" style="font-size:60px;width:500px; background-color:#b6ff00"> ' + '7 inch' + '</button><br>'
       + '4) <button onclick="DeviceType22(8);closeDivDeviceSize22()" style="font-size:60px;width:500px; background-color:#b6ff00"> ' + '8 inch' + '</button><br>'
       + '5) <button onclick="DeviceType22(9);closeDivDeviceSize22()" style="font-size:60px;width:500px; background-color:#b6ff00"> ' + '9 inch' + '</button><br>'
       + '6) <button onclick="DeviceType22(10);closeDivDeviceSize22()" style="font-size:60px;width:500px ;background-color:#b6ff00"> ' + '10 inch or larger' + '</button>'
       +  '<br>'
       ;

    document.body.appendChild(div);
}

function closeDivDeviceSize22(){ 
    var el = document.getElementById('DivDeviceSize22');
    el.parentNode.removeChild(el);    
}


/*------------------------------------------------------------------------------
* NAME       : DeviceType
* PURPOSE    : Sets initial-scale value for mobile device
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/
function DeviceType22(size){
    if (size == 5) {
        document.getElementById("viewport").setAttribute('content', 'initial-scale=0.6; user-scalable=0');
    }
    else if (size == 6) {
        document.getElementById("viewport").setAttribute('content', 'initial-scale=0.7; user-scalable=0;');
    }
    else if (size == 7) {
        document.getElementById("viewport").setAttribute('content', 'initial-scale=0.8; user-scalable=0;');
    }
    else if (size == 8) {
        document.getElementById("viewport").setAttribute('content', 'initial-scale=0.9; user-scalable=0;');
    }
    else if (size == 9) {
        document.getElementById("viewport").setAttribute('content', 'initial-scale=1.1; user-scalable=0;');
    }
    else if (size == 10) {
        document.getElementById("viewport").setAttribute('content', 'initial-scale=1.3; user-scalable=0;');
    }
}


/*------------------------------------------------------------------------------
* NAME       : screensize33
* PURPOSE    : Adjusts viewport size
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/
function screensize33(num){
    if((document.getElementById("screensize").value).trim() == ''){
        document.getElementById("screensize").value = 0;
    }

    if(num == 1){
        document.getElementById("screensize").value = parseInt(document.getElementById("screensize").value) + 1;
    }
    else if(num == 2){
        document.getElementById("screensize").value = parseInt(document.getElementById("screensize").value) - 1;
    }
    else if(num == 3){
        document.getElementById("screensize").value = parseInt(document.getElementById("screensize").value);
    }



    if(parseInt(document.getElementById("screensize").value) <=2){
        document.getElementById("screensize").value = 2;
    }

    var size = 0.1*parseInt(document.getElementById("screensize").value);

    document.getElementById("viewport").setAttribute('content', 'initial-scale= ' + size + '; user-scalable=0');
    
}


/*------------------------------------------------------------------------------
* NAME       :  handleEventKeyboard22
* PURPOSE    :  Records position of mouse over vertical strip for movable keyboard
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/  
function getCursorPosition(element, e) {//for calculus programs
    var rect = element.getBoundingClientRect();
    var width = rect.width/2;
    var diff = 0;
    if(width <245){
        var diff = 245 - width;
    }


    var x = rect.left + window.scrollX-diff;
    var y = rect.bottom + window.scrollY + 70;
    //alert("left: " + x + " bottom: " + y);
    if(x<20){x = 20};
    y += 50;
    handleEventKeyboard22(y, x);
}

/*------------------------------------------------------------------------------
* NAME       :  handleEventKeyboard44
* PURPOSE    :  Records position of mouse over vertical strip for movable keyboard
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/  
function getCursorPosition44(element, e) {//for desktop grpahing calculator
    if (document.getElementById('keypadOption2')) {
        if (document.getElementById('keypadOption2').checked) {
            return;
        }
    }

    var rect = element.getBoundingClientRect();
    var width = rect.width/2;
    var diff = 0;
    if(width <280){
        var diff = 280 - width;
    }
    var x = rect.left + window.scrollX-diff;
    var y = rect.bottom + window.scrollY + 50;
    //alert("left: " + x + " bottom: " + y);
    if(x <= 10){x = 15};
    handleEventKeyboard22(y, x);
}


/*------------------------------------------------------------------------------
* NAME       :  handleEventKeyboard22
* PURPOSE    :  Records position of mouse over vertical strip for movable keyboard
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/  
function getCursorPosition33(element, e) {//for mobile grpahing calculator
    var rect = element.getBoundingClientRect();
    var width = rect.width/2;
    var diff = 0;
    if(width <470){
        var diff = 470 - width;
    }
    var x = rect.left + window.scrollX-diff;
    var y = rect.bottom + window.scrollY + 50;
    //alert("left: " + x + " bottom: " + y);
    if(x <= 10){x = 15};
    handleEventKeyboard22(y, x);
}

/*------------------------------------------------------------------------------
* NAME       :  handleEventKeyboard22
* PURPOSE    :  Records position of mouse over vertical strip for movable keyboard
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/   
    function handleEventKeyboard22(top, left) {//alert(top +'.....'+ left);
            document.getElementById('panel2').style.display = 'inline-block';
            document.getElementById('panel2').style.top = top + 'px';
            document.getElementById('panel2').style.left = left + 'px';
    }

/*------------------------------------------------------------------------------
* NAME       :  RunningMsg
* PURPOSE    :  Displays "running" message
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function RunningMsg(message, DivID) {
        document.getElementById(DivID).style.display = 'inline-block';
        document.getElementById(DivID).innerHTML = message;
    }

    function RunningMsgDivClose(DivID){
        document.getElementById(DivID).style.display = 'none';
    }



/*------------------------------------------------------------------------------
* NAME       : ViewPort
* PURPOSE    : Sets initial viewport size
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/ 
function ViewPort(){
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
    var viewsize = w + " ,,,,,,, " + h;
     if(w <= 1100){
        var size = 0.33;document.getElementById('screensize').value = 1;
    }
    else if(w <= 1200){
        var size = 0.33 + 0.0357;document.getElementById('screensize').value = 2;
    }
    else if(w <= 1300){
        var size = 0.33 + 2*0.0357;document.getElementById('screensize').value = 3;
    }
    else if(w <= 1400){
        var size = 0.33 + 3*0.0357;document.getElementById('screensize').value = 4;
    }
    else if(w <= 1500){
        var size = 0.33 + 4*0.0357;document.getElementById('screensize').value = 5;
    }
    else if(w <= 1600){
        var size = 0.33 + 5*0.0357;document.getElementById('screensize').value = 6;
    }
    else if(w <= 1700){
        var size = 0.33 + 6*0.0357;document.getElementById('screensize').value = 7;
    }
    else if(w <= 1800){
        var size = 0.33 + 7*0.0357;document.getElementById('screensize').value = 8;
    }
    else if(w <= 1900){
        var size = 0.33 + 8*0.0357;document.getElementById('screensize').value = 9;
    }
    else if(w <= 2000){
        var size = 0.33 + 9*0.0357;document.getElementById('screensize').value = 10;
    }
    else if(w <= 2100){
        var size = 0.33 + 10*0.0357;document.getElementById('screensize').value = 11;
    }
    else if(w <= 2200){
        var size = 0.33 + 11*0.0357;document.getElementById('screensize').value = 12;
    }
    else if(w <= 2300){
        var size = 0.33 + 12*0.0357;document.getElementById('screensize').value = 13;
    }
    else if(w <= 2400){
        var size = 0.33 + 13*0.0357;document.getElementById('screensize').value = 14;
    }
    else if(w <= 2500){
        var size = 0.33 + 14*0.0357;document.getElementById('screensize').value = 15;
    }
    else if(w <= 2600){
        var size = 0.33 + 15*0.0357;document.getElementById('screensize').value = 16;
    }
    else if(w <= 2700){
        var size = 0.33 + 16*0.0357;document.getElementById('screensize').value = 17;
    }
    else if(w <= 2800){
        var size = 0.33 + 17*0.0357;document.getElementById('screensize').value = 18;
    }
    else if(w <= 2900){
        var size = 0.33 + 18*0.0357;document.getElementById('screensize').value = 19;
    }
    else if(w <= 3000){
        var size = 0.33 + 19*0.0357;document.getElementById('screensize').value = 20;
    }
    else {
        var size = 0.33 + 20*0.0357;document.getElementById('screensize').value = 21;
    }
    
    document.getElementById("viewport").setAttribute('content', 'initial-scale= ' + size + '; user-scalable=0');

    //alert("Your View Port Size is:" + size);
}
 

/*------------------------------------------------------------------------------
* NAME       : ViewPort22
* PURPOSE    : Sets initial viewport size
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/ 
function ViewPort22(){//for calculus programs
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
    var viewsize = w + ",,,,,,,,,,," + h;

    if(w <= 1100){
        var size = 0.33;document.getElementById('screensize').value = 1;
    }
    else if(w <= 1200){
        var size = 0.33 + 0.071428;document.getElementById('screensize').value = 2;
    }
    else if(w <= 1300){
        var size = 0.33 + 2*0.071428;document.getElementById('screensize').value = 3;
    }
    else if(w <= 1400){
        var size = 0.33 + 3*0.071428;document.getElementById('screensize').value = 4;
    }
    else if(w <= 1500){
        var size = 0.33 + 4*0.071428;document.getElementById('screensize').value = 5;
    }
    else if(w <= 1600){
        var size = 0.33 + 5*0.071428;document.getElementById('screensize').value = 6;
    }
    else if(w <= 1700){
        var size = 0.33 + 6*0.071428;document.getElementById('screensize').value = 7;
    }
    else if(w <= 1800){
        var size = 0.33 + 7*0.071428;document.getElementById('screensize').value = 8;
    }
    else if(w <= 1900){
        var size = 0.33 + 8*0.071428;document.getElementById('screensize').value = 9;
    }
    else if(w <= 2000){
        var size = 0.33 + 9*0.071428;document.getElementById('screensize').value = 10;
    }
    else if(w <= 2100){
        var size = 0.33 + 10*0.071428;document.getElementById('screensize').value = 11;
    }
    else if(w <= 2200){
        var size = 0.33 + 11*0.071428;document.getElementById('screensize').value = 12;
    }
    else if(w <= 2300){
        var size = 0.33 + 12*0.071428;document.getElementById('screensize').value = 13;
    }
    else if(w <= 2400){
        var size = 0.33 + 13*0.071428;document.getElementById('screensize').value = 14;
    }
    else if(w <= 2500){
        var size = 0.33 + 14*0.071428;document.getElementById('screensize').value = 15;
    }
    else if(w <= 2600){
        var size = 0.33 + 15*0.071428;document.getElementById('screensize').value = 16;
    }
    else if(w <= 2700){
        var size = 0.33 + 16*0.071428;document.getElementById('screensize').value = 17;
    }
    else if(w <= 2800){
        var size = 0.33 + 17*0.071428;document.getElementById('screensize').value = 18;
    }
    else if(w <= 2900){
        var size = 0.33 + 18*0.071428;document.getElementById('screensize').value = 19;
    }
    else if(w <= 3000){
        var size = 0.33 + 19*0.071428;document.getElementById('screensize').value = 20;
    }
    else {
        var size = 0.33 + 20*0.071428;document.getElementById('screensize').value = 21;
    }
    //alert(viewsize);
    document.getElementById("viewport").setAttribute('content', 'initial-scale= ' + size + '; user-scalable=0');
    //document.getElementById("size57").innerHTML = "Your View Port Size is:" + viewsize +'<br><br>';
}
 

/*------------------------------------------------------------------------------
* NAME       : screensize
* PURPOSE    : Adjusts viewport size for mobile device
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/
function screensize(num, programType){ 
    //for mobile-device graphing calculator
    //programType = 1;  Graphing Calculator
    //programType =21;  Calculus Programs

    if((document.getElementById("screensize").value).trim() == ''){
        document.getElementById("screensize").value = 0;
    }

    if(num == 1){
        document.getElementById("screensize").value = parseInt(document.getElementById("screensize").value) + 1;
    }
    else if(num == 2){
        document.getElementById("screensize").value = parseInt(document.getElementById("screensize").value) - 1;
    }
    else if(num == 3){
        document.getElementById("screensize").value = parseInt(document.getElementById("screensize").value);
    }

    var val = parseInt(document.getElementById("screensize").value)
    if(val <= 1){
        document.getElementById("screensize").value = 1;
    }

    
    if (programType == 1) {//programType = 1;  Graphing Calculator
        var size = 0.33 + (val - 1) * 0.0357;
    }
    else if (programType == 2) {//programType = 2; for Calculus Programs
        var size = 0.33 + (val - 1) * 0.07;
    }

    //document.getElementById("size57").innerHTML += "val = " + val +'<br><br>';
    //document.getElementById("size57").innerHTML += "size = " + size +'<br><br>';

    document.getElementById("viewport").setAttribute('content', 'initial-scale= ' + size + '; user-scalable=0');
    
}


/*------------------------------------------------------------------------------
* NAME       : zoomtype
* PURPOSE    : Displays graphing calculator depending on size of mobile device
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/
function zoomtype(val){
    if(val == 0){
        document.getElementById("viewport").setAttribute('content','user-scalable=0;');
        document.getElementById("disablezoom0").checked = true;
    }
    else{
        document.getElementById("viewport").setAttribute('content','user-scalable=1;');
        document.getElementById("disablezoom1").checked = true;
    }
}

/*------------------------------------------------------------------------------
* NAME       : screensize
* PURPOSE    : Adjusts viewport size for mobile device
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/
function screensize44(num, factor){//for Quadratic Formula
    //for mobile-device graphing calculator
    //programType = 1;  Graphing Calculator
    //programType =21;  Calculus Programs

    if((document.getElementById("screensize").value).trim() == ''){
        document.getElementById("screensize").value = 0;
    }

    if(num == 1){
        document.getElementById("screensize").value = parseInt(document.getElementById("screensize").value) + 1;
    }
    else if(num == 2){
        document.getElementById("screensize").value = parseInt(document.getElementById("screensize").value) - 1;
    }
    else if(num == 3){
        document.getElementById("screensize").value = parseInt(document.getElementById("screensize").value);
    }

    var val = parseInt(document.getElementById("screensize").value)
    if(val <= 1){
        document.getElementById("screensize").value = 1;
    }

    var size = 0.33 + (val - 1) * parseFloat(factor);


    //document.getElementById("size57").innerHTML += "val = " + val +'<br><br>';
    //document.getElementById("size57").innerHTML += "size = " + size +'<br><br>';

    document.getElementById("viewport").setAttribute('content', 'initial-scale= ' + size + '; user-scalable=0');
    
}



/*------------------------------------------------------------------------------
* NAME       : ViewPort22
* PURPOSE    : Sets initial viewport size
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/ 
function ViewPort44(factor){//for calculus programs
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
    var viewsize = w + ",,,,,,,,,,," + h;

    if(w <= 1100){
        var size = 0.33;document.getElementById('screensize').value = 1;
    }
    else if(w <= 1200){
        var size = 0.33 + parseFloat(factor);document.getElementById('screensize').value = 2;
    }
    else if(w <= 1300){
        var size = 0.33 + 2*parseFloat(factor);document.getElementById('screensize').value = 3;
    }
    else if(w <= 1400){
        var size = 0.33 + 3*parseFloat(factor);document.getElementById('screensize').value = 4;
    }
    else if(w <= 1500){
        var size = 0.33 + 4*parseFloat(factor);document.getElementById('screensize').value = 5;
    }
    else if(w <= 1600){
        var size = 0.33 + 5*parseFloat(factor);document.getElementById('screensize').value = 6;
    }
    else if(w <= 1700){
        var size = 0.33 + 6*parseFloat(factor);document.getElementById('screensize').value = 7;
    }
    else if(w <= 1800){
        var size = 0.33 + 7*parseFloat(factor);document.getElementById('screensize').value = 8;
    }
    else if(w <= 1900){
        var size = 0.33 + 8*parseFloat(factor);document.getElementById('screensize').value = 9;
    }
    else if(w <= 2000){
        var size = 0.33 + 9*parseFloat(factor);document.getElementById('screensize').value = 10;
    }
    else if(w <= 2100){
        var size = 0.33 + 10*parseFloat(factor);document.getElementById('screensize').value = 11;
    }
    else if(w <= 2200){
        var size = 0.33 + 11*parseFloat(factor);document.getElementById('screensize').value = 12;
    }
    else if(w <= 2300){
        var size = 0.33 + 12*parseFloat(factor);document.getElementById('screensize').value = 13;
    }
    else if(w <= 2400){
        var size = 0.33 + 13*parseFloat(factor);document.getElementById('screensize').value = 14;
    }
    else if(w <= 2500){
        var size = 0.33 + 14*parseFloat(factor);document.getElementById('screensize').value = 15;
    }
    else if(w <= 2600){
        var size = 0.33 + 15*parseFloat(factor);document.getElementById('screensize').value = 16;
    }
    else if(w <= 2700){
        var size = 0.33 + 16*parseFloat(factor);document.getElementById('screensize').value = 17;
    }
    else if(w <= 2800){
        var size = 0.33 + 17*parseFloat(factor);document.getElementById('screensize').value = 18;
    }
    else if(w <= 2900){
        var size = 0.33 + 18*parseFloat(factor);document.getElementById('screensize').value = 19;
    }
    else if(w <= 3000){
        var size = 0.33 + 19*parseFloat(factor);document.getElementById('screensize').value = 20;
    }
    else {
        var size = 0.33 + 20*parseFloat(factor);document.getElementById('screensize').value = 21;
    }
    //alert(viewsize);
    document.getElementById("viewport").setAttribute('content', 'initial-scale= ' + size + '; user-scalable=0');
    //document.getElementById("size57").innerHTML = "Your View Port Size is:" + viewsize +'<br><br>';
}
 


/*------------------------------------------------------------------------------
* NAME       : labelaxiswithpi
* PURPOSE    : turns on/off axis π labels
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/ 
function labelaxiswithpi(axis){ 
    if(axis == 'x'){
        if(document.getElementById('labelxaxispi').checked){
            document.getElementById('labelxaxispi').checked = false;
        }
        else{
            document.getElementById('labelxaxispi').checked = true;
        }
    }
    else if(axis == 'y'){
        if(document.getElementById('labelyaxispi').checked){
            document.getElementById('labelyaxispi').checked = false;
        }
        else{
            document.getElementById('labelyaxispi').checked = true;
        }
    }

    GraphingCalculator();
    return;
}