/*------------------------------------------------------------------------------
* NAME       : keypadloc
* PURPOSE    : Displays keypad
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function keypadloc(tp,lf) {
        //alert('999');
        document.getElementById('panel2').style.display = 'inline-block';
        document.getElementById('panel2').style.top = tp+'px';
        document.getElementById('panel2').style.left= lf+'px';
    }

/*------------------------------------------------------------------------------
* NAME       : keypadmove
* PURPOSE    : Determines which keypad to display
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function keypadmove(num) {
         var top = document.getElementById('panel2').style.top;
        var left = document.getElementById('panel2').style.left;
        if(num==1){
            var tt = parseInt(left.replace('px','')) - 40;
            if(tt<10){tt = 10};
            var left2 = tt + 'px';
            document.getElementById('panel2').style.left = left2;
        }
        else if(num==2){
            var tt = parseInt(left.replace('px','')) - 150;
            if(tt<10){tt = 10};
            var left2 = tt + 'px';
            document.getElementById('panel2').style.left = left2;
        }
        else if(num==3){
            var tt = parseInt(left.replace('px','')) + 40;
            //if(tt>4000){tt = 4000};
            var left2 = tt + 'px';
            document.getElementById('panel2').style.left = left2;
        }        
        else if(num==4){
            var tt = parseInt(left.replace('px','')) + 150;
            //if(tt>4000){tt = 4000};
            var left2 = tt + 'px';
            document.getElementById('panel2').style.left = left2;
        }
        else if(num==5){
            var tt = parseInt(top.replace('px','')) - 40;
            if(tt<10){tt = 10};
            var top2 = tt + 'px';
            document.getElementById('panel2').style.top = top2;
        }
        else if(num==6){
            var tt = parseInt(top.replace('px','')) - 100;
            if(tt<10){tt = 10};
            var top2 = tt + 'px';
            document.getElementById('panel2').style.top = top2;
        }
        else if(num==7){
            var tt = parseInt(top.replace('px','')) + 40;
            //if(tt>4000){tt = 4000};
            var top2 = tt + 'px';
            document.getElementById('panel2').style.top = top2;
        }
        else if(num==8){
            var tt = parseInt(top.replace('px','')) + 100;
            //if(tt>4000){tt = 4000};
            var top2 = tt + 'px';
            document.getElementById('panel2').style.top = top2;
        }
        else if(num==9){
            document.getElementById('panel2').style.left = '10px';
        }
        else if(num==10){
            document.getElementById('panel2').style.left = '1200px';
        }
        else if(num==11){
            document.getElementById('panel2').style.top = '10px';
        }
        else if(num==12){
            document.getElementById('panel2').style.top = '800px';
        }
        else if(num==13){
            document.getElementById('panel2').style.top = '10px';
            document.getElementById('panel2').style.left = '10px';
        }
        else if(num==14){
            document.getElementById('panel2').style.top = '10px';
            document.getElementById('panel2').style.left = '1200px';
        }
        else if(num==15){
            document.getElementById('panel2').style.top = '800px';
            document.getElementById('panel2').style.left = '10px';
        }
        else if(num==16){
            document.getElementById('panel2').style.top = '800px';
            document.getElementById('panel2').style.left = '1200px';
        }
    }

/*------------------------------------------------------------------------------
* NAME       : keypad
* PURPOSE    : Determines which keypad to display
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function keypad(num) {
        if(num == 6){
            document.getElementById('panel2').style.display = 'none';

            if (document.getElementById("panel3")) {
                document.getElementById('panel3').style.display = 'none';
            }
            return;
        }

        for (var i = 1; i <= 5;i++){
            document.getElementById('kp'+i).style.display = 'none';
        }

        //alert('num = ' + num);

        document.getElementById('kp' + num).style.display = 'inline-block';
   
        //document.getElementById('secondkeypad').innerHTML =document.getElementById('panel2').innerHTML;

    }


function openwindow(num){
    if (num == 1) {
        document.getElementById('piecewisefunction').style.display = 'inline-block';
    }
    else if (num == 2) {
        window.open("../GraphingCalculator1/AlgebraMenu2.cshtml", "calculator" + Math.random(), "width=700px, height=600px,scrollbars=1");
    }
    else if (num == 3) {
        window.open("../_Statistics/AStatisticsMenu.cshtml","calculator" + Math.random() ,"width=700px, height=600px,scrollbars=1");
    }
    else if (num == 4) {
        window.open("../Trigonometry.cshtml","Trigonometry" + Math.random() ,"width=700px, height=600px,scrollbars=1");
    }
    else if (num == 5) {
        window.open("../Calculus/CalculusMain.cshtml","CalculusMain" + Math.random() ,"width=700px, height=600px,scrollbars=1");
    }
}

function drag(){
    DragEvent(event);alert('eee');
}

function displayImageFraction(num){
    if(num == 1){
        document.getElementById('displayImageFraction').style.display = 'inline-block';
    }
    else{
        document.getElementById('displayImageFraction').style.display = 'none';
    }
}

function displayImageExponent(num){
    if(num == 1){
        document.getElementById('fractioninput').style.display = 'inline-block';
    }
    else{
        document.getElementById('fractioninput').style.display = 'none';
    }
}

function mydropdownxvariableonchange(){
    var symbol = document.getElementById('mydropdownxvariable').value;
    if(symbol == 'xf'){symbol = 'x'};
    var FocusID = document.getElementById('CurrentFocusID').value;
    insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, 0, 0);
    document.getElementById('mydropdownxvariable').value = 'xf';
}

function mydropdownyvariableonchange(){
    var symbol = document.getElementById('mydropdownyvariable').value;
    if(symbol == 'yf'){symbol = 'y'};
    var FocusID = document.getElementById('CurrentFocusID').value;
    insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, 0, 0);
    document.getElementById('mydropdownyvariable').value = 'yf';
}

function mydropdowntvariableonchange(){
    var symbol = document.getElementById('mydropdowntvariable').value;
    if(symbol == 'tf'){symbol = 't'};
    var FocusID = document.getElementById('CurrentFocusID').value;
    insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, 0, 0);
    document.getElementById('mydropdowntvariable').value = 'tf';
}

function mydropdownpoweronchange(){
    var symbol = document.getElementById('mydropdownpower').value;
    if(symbol == '²f'){symbol = ''};
    var FocusID = document.getElementById('CurrentFocusID').value;
    insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, 0, 0);
    document.getElementById('mydropdownpower').value = '²f';
}


function mydropdownCompareonchange(num){
    var symbol = document.getElementById('mydropdownCompare').value;
    if(symbol == '{ }f'){symbol = '{ }'};
    var FocusID = document.getElementById('CurrentFocusID').value;
    insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, -num, 0);
    document.getElementById('mydropdownCompare').value = '{ }f';
}


function mydropdownTrig1onchange(){
    var symbol = document.getElementById('mydropdownTrig1').value;
    if(symbol == 'Cos(x)f'){symbol = 'Cos(x)'};
    var FocusID = document.getElementById('CurrentFocusID').value;
    insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, -2, 0);
    document.getElementById('mydropdownTrig1').value = 'Cos(x)f';
}

function mydropdownTrig2onchange(){
    var symbol = document.getElementById('mydropdownTrig2').value;
    if(symbol == 'Acos(x)f'){symbol = 'Acos(x)'};
    var FocusID = document.getElementById('CurrentFocusID').value;
    insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, -2, 0);
    document.getElementById('mydropdownTrig2').value = 'Acos(x)f';
}

function mydropdownTrig3onchange(){
    var symbol = document.getElementById('mydropdownTrig3').value;
    if(symbol == 'Cosh(x)f'){symbol = 'Cosh(x)'};
    var FocusID = document.getElementById('CurrentFocusID').value;
    insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, -2, 0);
    document.getElementById('mydropdownTrig3').value = 'Cosh(x)f';
}

function mydropdownTrig4onchange(){
    var symbol = document.getElementById('mydropdownTrig4').value;
    if(symbol == 'InvCosh(x)f'){symbol = 'InvCosh(x)'};
    var FocusID = document.getElementById('CurrentFocusID').value;
    insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, -2, 0);
    document.getElementById('mydropdownTrig4').value = 'InvCosh(x)f';
}

function mydropdownparenthesesonchange(){
    var symbol = document.getElementById('mydropdownparentheses').value;
    if(symbol == '()'){var nn = -1;}
    else if(symbol == '('){var nn = 0;}
    else if(symbol == ')'){var nn = 0;}
    else if(symbol == '(/)'){var nn = -2;}
    else if(symbol == '()/()'){var nn = -4;}
    else if(symbol == '[ ]'){var nn = -1;}
    else if(symbol == '[[ ]]'){var nn = -2;}
    var FocusID = document.getElementById('CurrentFocusID').value;
    insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, nn, 0);
    document.getElementById('mydropdownparentheses').value = '()f';
}



function mydropdownLogarithmonchange(){
    var symbol = document.getElementById('mydropdownLogarithm').value;
    if(symbol == 'Log(x)f'){symbol = 'Log(x)'};
    if(symbol == 'Log(x)'){var nn = -2;}
    else if(symbol == 'Ln(x)'){var nn = -2;}
    else if(symbol == 'Ln(x)'){var nn = -2;}
    else if(symbol == 'Log()/Log()'){var nn = -7;}
    else if(symbol == 'Ln()/Ln()'){var nn = -6;}
    var FocusID = document.getElementById('CurrentFocusID').value;
    insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, nn, 0);
    document.getElementById('mydropdownLogarithm').value = 'Log(x)f';
}

function mydropdownRootonchange(){
    var symbol = document.getElementById('mydropdownRoot').value;
    if(symbol == '0f'){symbol = '0'};
    var FocusID = document.getElementById('CurrentFocusID').value;
    insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, -2, 0);    
    document.getElementById('mydropdownRoot').value = '0f';
}

function mydropdownPolyvariableonchange(){
    var symbol = document.getElementById('mydropdownPolyvariable').value;
    if(symbol == '0f'){symbol = '0'};
    var FocusID = document.getElementById('CurrentFocusID').value;
    insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, -2, 0);   
    document.getElementById('mydropdownPolyvariable').value = '0f'; 
}

function mydropdownEfunctiononchange(symbol){
    //var symbol = document.getElementById('mydropdownEfunction').value;
    if (symbol == '(2.718281828459)f') { symbol = '(2.718281828459)' };
    var FocusID = document.getElementById('CurrentFocusID').value;

    if (symbol.indexOf('^') > -1 || symbol.indexOf('()') > -1) {
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, -1, 0);
    }
    else {
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, -1, 0);
    }

    document.getElementById('mydropdownEfunction').value = '(2.718281828459)f';
}

/*------------------------------------------------------------------------------
* NAME       :  keyboardlayoutMain(
* PURPOSE    :  Creates keypad for graphing calculator
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/
function keyboardlayoutMain(divname){
    //alert('keyboardlayoutMain ='+divname);

    //container div
    //<div id="panel2"  style="width: 610px;  height: 240px; overflow-x: hidden;  overflow-y: scroll; border-style: solid;background-color: rgba(230, 247, 251, 0.74); " >
     
    var myString = function(){/*
     <div id="kp6"  style=" height: 40px;border-style: none; " > 
        <table> 
            <tr> 
                <td onclick="leftdel()" style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:80px; height:35px; font-size: 14px;">Backsp</td> 
                <td onclick="rightdel()" style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:80px; height:35px; font-size: 14px;">Delete</td> 
                <td onclick="leftarrow()" style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:50px; height:35px; font-size: 14px;">&larr;</td> 
                <td onclick="rightarrow()" style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:50px; height:35px; font-size: 14px;">&rarr;</td> 
                <td onclick="parentheses2()" onmouseover="displayImageFraction(1)" onmouseout="displayImageFraction(2)" style="color: green;border-style: solid; border-width: 1px; border-color: black; text-align: center; width:80px; height:35px; font-size: 14px;">Fraction<br>Input</td> 
                <td onclick="power(21)" onmouseover="displayImageExponent(1)" onmouseout="displayImageExponent(2)" style="color: green;border-style: solid; border-width: 1px; border-color: black; text-align: center; width:80px; height:35px; font-size: 14px;">exponent</td> 
                <td style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:100px; height:35px; font-size: 14px;"> 
                    <button onclick="SubmitButton()" type="button" style ="text-align: center; height: 35px; width: 110px;background-color: #ffd800; font-size: 14px">Submit</button> 
                </td> 
        </tr> 
        </table> 
        <table> 
           <tr> 
                <td  onclick="keypad(1)" style="margin-top:1px;border-style: solid; border-width: 1px; border-color: black;  text-align: center; width:80px; height:35px; font-size: 14px; background-color:  rgba(178, 171, 171, 0.67) ">KP 1</td> 
                <td onclick="keypad(2)" style="margin-top:1px;border-style: solid; border-width: 1px; border-color: black;  text-align: center; width:80px; height:35px; font-size: 14px; background-color:  rgba(178, 171, 171, 0.67) ">KP 2</td> 
                <td onclick="keypad(3)" style="margin-top:1px;border-style: solid; border-width: 1px; border-color: black;  text-align: center; width:80px; height:35px; font-size: 14px; background-color:  rgba(178, 171, 171, 0.67) ">KP 3</td> 
                <td onclick="keypad(4)" style="margin-top:1px;border-style: solid; border-width: 1px; border-color: black;  text-align: center; width:80px; height:35px; font-size: 14px; background-color:  rgba(178, 171, 171, 0.67) ">KP 4</td> 
                <td onclick="keypad(5)" style="margin-top:1px;border-style: solid; border-width: 1px; border-color: black;  text-align: center; width:80px; height:35px; font-size: 14px; background-color:  rgba(178, 171, 171, 0.67) ">KP 5</td>
                <td onclick="keyboardlayout33()" style="margin-top:1px;border-style: solid; border-width: 1px; border-color: black;  text-align: center; width:80px; height:35px; font-size: 14px; background-color:  rgba(178, 171, 171, 0.67) ">KP 2,3</td>
                <td onclick="clearrr2()"  title="clear input field"   style="background-color: cyan;width:80px; height:35px;border-style: solid; border-width: 1px; border-color: black; text-align: center;   left:1000px">Clear</td> 

                <td onclick="keypad(6)" style="margin-top:1px;border-style: solid; border-width: 1px; border-color: black;  text-align: center; width:80px; height:35px; font-size: 14px; background-color:  orange ">Hide</td>
            
            </tr> 
        </table> 
        <table style="display:none"> 
           <tr> 
                <td onclick="" style="margin-top:1px;border-style: none; border-width: 1px; border-color: black;  text-align: center;  height:35px; font-size: 14px; background-color:  white ">Move Keypad:</button></td>
                <td onclick="keypadmove(1)" style="margin-top:1px;border-style: solid; border-width: 1px; border-color: black;  text-align: center; width:50px; height:35px; font-size: 14px; background-color:  rgba(178, 171, 171, 0.67) ">&larr;</td>
                <td onclick="keypadmove(2)" style="margin-top:1px;border-style: solid; border-width: 1px; border-color: black;  text-align: center; width:50px; height:35px; font-size: 20px; background-color:  rgba(178, 171, 171, 0.67) ">&#11013;</td>
                <td onclick="keypadmove(3)" style="margin-top:1px;border-style: solid; border-width: 1px; border-color: black;  text-align: center; width:50px; height:35px; font-size: 14px; background-color:  rgba(178, 171, 171, 0.67) ">&rarr;</td>
                <td onclick="keypadmove(4)" style="margin-top:1px;border-style: solid; border-width: 1px; border-color: black;  text-align: center; width:50px; height:35px; font-size: 20px; background-color:  rgba(178, 171, 171, 0.67) ">&#10145;</td>
                <td onclick="keypadmove(5)" style="margin-top:1px;border-style: solid; border-width: 1px; border-color: black;  text-align: center; width:50px; height:35px; font-size: 14px; background-color:  rgba(178, 171, 171, 0.67) ">&uarr;</td>
                <td onclick="keypadmove(6)" style="margin-top:1px;border-style: solid; border-width: 1px; border-color: black;  text-align: center; width:50px; height:35px; font-size: 20px; background-color:  rgba(178, 171, 171, 0.67) ">&#11014;</td>
                <td onclick="keypadmove(7)" style="margin-top:1px;border-style: solid; border-width: 1px; border-color: black;  text-align: center; width:50px; height:35px; font-size: 14px; background-color:  rgba(178, 171, 171, 0.67) ">&darr;</td>
                <td onclick="keypadmove(8)" style="margin-top:1px;border-style: solid; border-width: 1px; border-color: black;  text-align: center; width:50px; height:35px; font-size: 20px; background-color:  rgba(178, 171, 171, 0.67) ">&#11015;</td>
             </tr>
        </table>
        </div><br><br><br>
         <div id="displayImageFraction" style="display:none;"> 
            <img src="../images/displayImageFraction.png" alt="blank"  />
         </div>   
         <div id="fractioninput" style="display:none;"> 
            <img src="../images/fractioninput.png" alt="blank"  />
         </div>          
        
       <div id="kp1"  style=" display:inline-block;width:590px; height: 280px;  border-style: solid;background-color: rgba(230, 247, 251, 0.74); " > 
                <button class="btsblue" onclick="num(1)" style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:45px; font-size: 20px;; background-color: #b6ff00">1</button> 
                <button class="btsblue" onclick="num(2)" style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:45px; font-size: 20px;; background-color: #b6ff00">2</button> 
                <button class="btsblue" onclick="num(3)" style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:45px; font-size: 20px;; background-color: #b6ff00">3</button> 

                <select id="mydropdownxvariable" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;-moz-appearance: none;background-repeat: no-repeat;background-position: right center;width: 44px; height: 44px; font-size: 16px;background-color: #eae6e0;"   >
                    <option value= "xf"  onclick="mydropdownxvariableonchange()">x:</option>
                    <option value= "x"  onclick="mydropdownxvariableonchange()">x</option>
                    <option value= "x²"  onclick="mydropdownxvariableonchange()">x²</option>
                    <option value= "x³"  onclick="mydropdownxvariableonchange()">x³</option>
                    <option value= "x⁴"  onclick="mydropdownxvariableonchange()">x⁴</option>
                    <option value= "x⁵"  onclick="mydropdownxvariableonchange()">x⁵</option>
                    <option value= "x⁶"  onclick="mydropdownxvariableonchange()">x⁶</option>
                    <option value= "x^7"  onclick="mydropdownxvariableonchange()">x^7</option>
                    <option value= "x^8"  onclick="mydropdownxvariableonchange()">x^8</option>
                    <option value= "x^9"  onclick="mydropdownxvariableonchange()">x^9</option>
                </select>

                <select id="mydropdownyvariable" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;-moz-appearance: none;background-repeat: no-repeat;background-position: right center;width: 44px; height: 44px; font-size: 16px;background-color: #eae6e0;"   >
                    <option value= "yf"  onclick="mydropdownyvariableonchange()">y:</option>
                    <option value= "y"  onclick="mydropdownyvariableonchange()">y</option>
                    <option value= "y²"  onclick="mydropdownyvariableonchange()">y²</option>
                    <option value= "y³"  onclick="mydropdownyvariableonchange()">y³</option>
                    <option value= "y⁴"  onclick="mydropdownyvariableonchange()">y⁴</option>
                    <option value= "y⁵"  onclick="mydropdownyvariableonchange()">y⁵</option>
                    <option value= "y⁶"  onclick="mydropdownyvariableonchange()">y⁶</option>
                    <option value= "y^7"  onclick="mydropdownyvariableonchange()">y^7</option>
                    <option value= "y^8"  onclick="mydropdownyvariableonchange()">y^8</option>
                    <option value= "y^9"  onclick="mydropdownyvariableonchange()">y^9</option>
                </select>



                <select id="mydropdowntvariable" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;-moz-appearance: none;background-repeat: no-repeat;background-position: right center;width: 44px; height: 44px; font-size: 16px;background-color: #eae6e0;" >
                    <option value= "tf"  onclick="mydropdowntvariableonchange()">t:</option>
                    <option value= "t"  onclick="mydropdowntvariableonchange()">t</option>
                    <option value= "t²"  onclick="mydropdowntvariableonchange()">t²</option>
                    <option value= "t³"  onclick="mydropdowntvariableonchange()">t³</option>
                    <option value= "t⁴"  onclick="mydropdowntvariableonchange()">t⁴</option>
                    <option value= "t⁵"  onclick="mydropdowntvariableonchange()">t⁵</option>
                    <option value= "t⁶"  onclick="mydropdowntvariableonchange()">t⁶</option>
                    <option value= "t^7"  onclick="mydropdowntvariableonchange()">t^7</option>
                    <option value= "t^8"  onclick="mydropdowntvariableonchange()">t^8</option>
                    <option value= "t^9"  onclick="mydropdowntvariableonchange()">t^9</option>
                </select>

                <select id="mydropdownPolyvariable" style="border-style: solid; border-width: 1px; border-color: black; text-align: left;-moz-appearance: none;background-repeat: no-repeat;background-position: right center;width: 44px; height: 44px; font-size: 16px;background-color: #eae6e0;" >
                    <option value= "0f"  onclick="">poly</option>
                    <option value= "x² + x "  onclick="mydropdownPolyvariableonchange()">x² + x</option>
                    <option value= "x³ + x² + x "  onclick="mydropdownPolyvariableonchange()">x³ + x² + x </option>
                    <option value= "x⁴ + x³ + x² + x "  onclick="mydropdownPolyvariableonchange()">x⁴ + x³ + x² + x </option>
                    <option value= "x⁵ + x⁴ + x³ + x² + x "  onclick="mydropdownPolyvariableonchange()">x⁵ + x⁴ + x³ + x² + x </option>
                    <option value= "x⁶ + x⁵ + x⁴ + x³ + x² + x "  onclick="mydropdownPolyvariableonchange()">x⁶ + x⁵ + x⁴ + x³ + x² + x </option>
                    <option value= "x^7 + x⁶ + x⁵ + x⁴ + x³ + x² + x "  onclick="mydropdownPolyvariableonchange()">x^7 + x⁶ + x⁵ + x⁴ + x³ + x² + x </option>
                </select>
                 <select id="mydropdownpower" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;-moz-appearance: none;background-repeat: no-repeat;background-position: right center;width: 44px; height: 44px; font-size: 16px;background-color: #eae6e0;" >
                        <option value= "²f"  onclick="mydropdownpoweronchange()">&#9617;²:</option>
                        <option value= "²"  onclick="mydropdownpoweronchange()">&#9617;²</option>
                        <option value= "³"  onclick="mydropdownpoweronchange()">&#9617;³</option>
                        <option value= "⁴"  onclick="mydropdownpoweronchange()">&#9617;⁴</option>
                        <option value= "⁵"  onclick="mydropdownpoweronchange()">&#9617;⁵</option>
                        <option value= "⁶"  onclick="mydropdownpoweronchange()">&#9617;⁶</option>
                    </select>


                <select id="mydropdownRoot" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;-moz-appearance: none;background-repeat: no-repeat;background-position: right center;width: 45px; height: 45px; font-size: 16px;background-color: #eae6e0;">
                    <option value= "0"  onclick="">Root1</option>
                    <option value= "Root2(x)f"  onclick="mydropdownRootonchange()">Root 2</option>
                    <option value= "Root3(x)"  onclick="mydropdownRootonchange()">Root 2</option>
                    <option value= "Root4(x)"  onclick="mydropdownRootonchange()">Root 4</option>
                    <option value= "Root5(x)"  onclick="mydropdownRootonchange()">Root 5</option>
                    <option value= "Root6(x)"  onclick="mydropdownRootonchange()">Root 6</option>
                    <option value= "Root7(x)"  onclick="mydropdownRootonchange()">Root 7</option>
                    <option value= "Root8(x)"  onclick="mydropdownRootonchange()">Root 8</option>
                    <option value= "Root9(x)"  onclick="mydropdownRootonchange()">Root 9</option>
                    <option value= "Root10(x)"  onclick="mydropdownRootonchange()">Root 10</option>
                    <option value= "( )^(1/ )"  onclick="mydropdownRootonchange()">Root n</option>
                   
                </select>
                 <select id="mydropdownEfunction"  title="e = 2.71828182845904523536028747135266249775724709369995"   style="border-style: solid; border-width: 1px; border-color: black; text-align: center;-moz-appearance: none;background-repeat: no-repeat;background-position: right center;width: 45px; height: 45px; font-size: 16px;background-color: #eae6e0;" >
                        <option value= "(2.718281828459)f"  onclick="mydropdownEfunctiononchange('e:')">e:</option>
                        <option value= "(2.718281828459)"  onclick="mydropdownEfunctiononchange('e')">e</option>
                        <option value= "(2.718281828459)^()"  onclick="mydropdownEfunctiononchange('e^')">e^</option>
                 </select>
                <select id="mydropdownLogarithm" style="border-style: solid; border-width: 1px; border-color: black;text-align: center;-moz-appearance: none;background-repeat: no-repeat;background-position: right center;width: 45px; height: 45px; font-size: 16px;background-color: #eae6e0;" >
                    <option value= "Log(x)f" onclick="mydropdownLogarithmonchange()">Log:</option>
                    <option value= "Log(x)" onclick="mydropdownLogarithmonchange()">Log</option>
                    <option value= "Ln(x)" onclick="mydropdownLogarithmonchange()"> Ln</option>
                    <option value= "Log()/Log()" onclick="mydropdownLogarithmonchange()">Log/Log</option>
                    <option value= "Ln()/Ln()" onclick="mydropdownLogarithmonchange()">Ln/Ln</option>
                </select>


                <button onclick="mydropdownEfunctiononchange('²')" style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:45px; font-size: 20px;; background-color: #b6ff00">&#9617;²</button> 

                <br>

                <button onclick="num(4)" style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:45px; font-size: 20px;; background-color: #b6ff00">4</button> 
                <button onclick="num(5)" style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:45px; font-size: 20px;; background-color: #b6ff00">5</button> 
                <button onclick="num(6)" style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:45px; font-size: 20px;; background-color: #b6ff00">6</button> 
                <button onclick="plus()"   title="plus sign"   class="btswhite" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;  width:45px; height:45px; font-size: 20px;background-color: #eae6e0;">+</button> 
                <button title="minus sign"  onclick="minus()" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;  width:43px; height:45px; font-size: 20px;background-color: #eae6e0;">&#151;</button> 
                <button title="multiplication sign" onclick="mult()" class="btswhite" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;  width:43px; height:45px; font-size: 20px;background-color: #eae6e0;">*</button> 
                <button title="division sign or fraction slash" onclick="div4()"   onmouseout="display2()" onmouseover="display(1)"  class="btswhite" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;  width:45px; height:45px; font-size: 20px;background-color: #eae6e0;">/</button> 



                <button title="&pi; = 3.1415926535897932384626433832795028" onclick="pi()"   class ="btsred" style="width:45px;height: 45px;  border-style: solid; border-width: 1px; border-color: black; text-align: center;   color: black; font-family: black; font-weight: bold; font-size: 20px;background-color: #eae6e0;">&pi;</button> 
                <button title="&theta; for polar equations" onclick="theta()" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;  width:45px; height:45px; font-size: 20px;background-color: #eae6e0;background-color: #eae6e0;">&theta;</button> 


                <select id="mydropdownCompare" style="border-style: solid; border-width: 1px; border-color: black;text-align: center;-moz-appearance: none;background-repeat: no-repeat;background-position: right center;width: 45px; height: 45px; font-size: 16px;background-color: #eae6e0;">
                        <option value= "{ }f"  onclick="mydropdownCompareonchange(1)">{ }:</option>
                        <option value= "{ }"  onclick="mydropdownCompareonchange(1)">{ }</option>
                        <option value= "<"  onclick="mydropdownCompareonchange(0)">&lt;</option>
                        <option value= ">"  onclick="mydropdownCompareonchange(0)">&gt;</option>
                        <option value= "≤"  onclick="mydropdownCompareonchange(0)">≤</option>
                        <option value= "≥"  onclick="mydropdownCompareonchange(0)">≥</option>
                        <option value= "≠"  onclick="mydropdownCompareonchange(0)">≠</option>
                        <option value= "="  onclick="mydropdownCompareonchange(0)">=</option>
                        <option value= "{x ≤ }"  onclick="mydropdownCompareonchange(1)">{x ≤ }</option>
                        <option value= "{x < }"  onclick="mydropdownCompareonchange(1)">{x < }</option>
                        <option value= "{x ≥ }"  onclick="mydropdownCompareonchange(1)">{x ≥ }</option>
                        <option value= "{x > }"  onclick="mydropdownCompareonchange(1)">{x > }</option>
                        <option value= "{x ≠ }"  onclick="mydropdownCompareonchange(1)">{x ≠ }</option>
                        <option value= "{x = }"  onclick="mydropdownCompareonchange(1)">{x = }</option>
                        <option value= "{ ≤ x ≤ }"  onclick="mydropdownCompareonchange(7)">{a ≤ x ≤ b}</option>
                        <option value= "{ ≤ x < }"  onclick="mydropdownCompareonchange(7)">{a ≤ x < b}</option>
                        <option value= "{ < x ≤ }"  onclick="mydropdownCompareonchange(7)">{a < x ≤ b}</option>
                        <option value= "{ < x < }"  onclick="mydropdownCompareonchange(7)">{a < x < b}</option>
                </select>


                <button title=""  onmouseout="display2()" onmouseover="display(14)"    onclick="power(21)" class="btswhite" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;  width:45px; height:45px; font-size: 20px;background-color: #eae6e0;">^</button> 
                <button onclick="mydropdownEfunctiononchange('³')" style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:45px; font-size: 20px;; background-color: #b6ff00">&#9617;³</button> 


                <br>

                <button onclick="num(7)" style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:45px; font-size: 20px;; background-color: #b6ff00">7</button> 
                <button onclick="num(8)" style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:45px; font-size: 20px;; background-color: #b6ff00">8</button> 
                <button onclick="num(9)" style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:45px; font-size: 20px;; background-color: #b6ff00">9</button> 
                <button title="" class="btsblue" onclick="root2()"   onmouseout="display2()" onmouseover="display()"  style="background-color: #eae6e0;border-style: solid; border-width: 1px; border-color: black; text-align: center; ; width:60px; height:45px; font-size: 12px;"><span class="radical"><span class="n-root" style="width:8px;border-style: none;"></span>&radic;</span><span class="radicand"  style="border-top-color: black" >&nbsp;</span></button> 		
                <button title="" class="btsblue" onclick="root3()"   onmouseout="display2()" onmouseover="display()"  style="background-color: #eae6e0;border-style: solid; border-width: 1px; border-color: black; text-align: center; ; width:60px; height:45px; font-size: 12px;"><span class="radical"><span class="n-root" style="width:8px;border-style: none;">3</span>&radic;</span><span class="radicand"  style="border-top-color: black" >&nbsp;</span></button> 		
                <select id="mydropdownTrig1" style="border-style: solid; border-width: 1px; border-color: black;text-align: center;-moz-appearance: none;background-repeat: no-repeat;background-position: right center;width: 61px; height: 45px; font-size: 16px;background-color: #eae6e0;">
                        <option value= "Cos(x)f"  onclick="mydropdownTrig1onchange()">Cos:</option>
                        <option value= "Cos(x)"  onclick="mydropdownTrig1onchange()">Cos</option>
                        <option value= "Sin(x)"  onclick="mydropdownTrig1onchange()">Sin</option>
                        <option value= "Tan(x)"  onclick="mydropdownTrig1onchange()">Tan</option>
                        <option value= "Sec(x)"  onclick="mydropdownTrig1onchange()">Sec</option>
                        <option value= "Csc(x)"  onclick="mydropdownTrig1onchange()">Csc</option>
                        <option value= "Cot(x)"  onclick="mydropdownTrig1onchange()">Cot</option>
                    </select>
                    <select id="mydropdownTrig2" style="border-style: solid; border-width: 1px; border-color: black;text-align: center;-moz-appearance: none;background-repeat: no-repeat;background-position: right center;width: 61px; height: 45px; font-size: 16px;background-color: #eae6e0;">
                        <option value= "Acos(x)f"  onclick="mydropdownTrig2onchange()" >Cos⁻¹:</option>
                        <option value= "Acos(x)"  onclick="mydropdownTrig2onchange()" >Cos⁻¹</option>
                        <option value= "Asin(x)"  onclick="mydropdownTrig2onchange()">Sin⁻¹</option>
                        <option value= "Atan(x)"  onclick="mydropdownTrig2onchange()">Tan⁻¹</option>
                        <option value= "Asec(x)"  onclick="mydropdownTrig2onchange()">Sec⁻¹</option>
                        <option value= "Acsc(x)"  onclick="mydropdownTrig2onchange()">Csc⁻¹</option>
                        <option value= "Acot(x)"  onclick="mydropdownTrig2onchange()">Cot⁻¹</option>
                    </select>
                    <select id="mydropdownTrig3" style="border-style: solid; border-width: 1px; border-color: black;text-align: center;-moz-appearance: none;background-repeat: no-repeat;background-position: right center;width: 61px; height: 45px; font-size: 16px;background-color: #eae6e0;" >
                        <option value= "Cosh(x)f" onclick="mydropdownTrig3onchange()">Cosh:</option>
                        <option value= "Cosh(x)" onclick="mydropdownTrig3onchange()">Cosh</option>
                        <option value= "Sinh(x)" onclick="mydropdownTrig3onchange()">Sinh</option>
                        <option value= "Tanh(x)" onclick="mydropdownTrig3onchange()">Tanh</option>
                        <option value= "Sech(x)" onclick="mydropdownTrig3onchange()">Sech</option>
                        <option value= "Csch(x)" onclick="mydropdownTrig3onchange()">Csch</option>
                        <option value= "Coth(x)" onclick="mydropdownTrig3onchange()">Coth</option>
                    </select>
                    <select id="mydropdownTrig4" style="border-style: solid; border-width: 1px; border-color: black;text-align: center;-moz-appearance: none;background-repeat: no-repeat;background-position: right center;width: 61px; height: 45px; font-size: 16px;background-color: #eae6e0;" >
                        <option value= "InvCosh(x)f" onclick="mydropdownTrig4onchange()">Cosh⁻¹:</option>
                        <option value= "InvCosh(x)" onclick="mydropdownTrig4onchange()">Cosh⁻¹</option>
                        <option value= "InvSinh(x)" onclick="mydropdownTrig4onchange()">Sinh⁻¹</option>
                        <option value= "InvTanh(x)" onclick="mydropdownTrig4onchange()">Tanh⁻¹</option>
                        <option value= "InvSech(x)" onclick="mydropdownTrig4onchange()">Sech⁻¹</option>
                        <option value= "InvCsch(x)" onclick="mydropdownTrig4onchange()">Csch⁻¹</option>
                        <option value= "InvCoth(x)" onclick="mydropdownTrig4onchange()">Coth⁻¹</option>
                    </select>

                <br>
                <table>
                <tr><td>
                <button onclick="num(0)" style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:45px; font-size: 20px; background-color: #b6ff00">0</button> 
                <button onclick="decimalll()" title="decimal point"   style="border-style: solid; border-width: 1px; border-color: black; text-align: center;  width:45px; height:45px; font-size: 20px;; background-color: #b6ff00">.</button> 
                <button title="negative sign"  onclick="plus_or_minus()" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;  width:45px; height:45px; font-size:  14px; background-color: #b6ff00">(-)</button> 
                <button title="Absolue value; Input format: Abs(x)" class="btsblue" onclick="Abs()"   onmouseout="display2()" onmouseover="display(2)"  style="background-color: #eae6e0;border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:45px; font-size: 14px;">Abs</button> 
                <button title="Absolue value; Input format: |x|" class="btsblue" onclick="Abs2()"   onmouseout="display2()" onmouseover="display(17)"  style="background-color: #eae6e0;border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:45px; font-size: 14px;">|&nbsp;&nbsp;|</button> 
                </td>
                <td>
                <select id="mydropdownparentheses" style="border-style: solid; border-width: 1px; border-color: black;text-align: center;-moz-appearance: none;background-repeat: no-repeat;background-position: right center;width: 45px; height: 45px; font-size: 14px;background-color: #eae6e0;">
                    <option value= "()f"  onclick="mydropdownparenthesesonchange()">( )</option>
                    <option value= "()"  onclick="mydropdownparenthesesonchange()">( )</option>
                    <option value= "("  onclick="mydropdownparenthesesonchange()">(</option>
                    <option value= ")"  onclick="mydropdownparenthesesonchange()">)</option>
                    <option value= "(/)"  onclick="mydropdownparenthesesonchange()">(/)</option>
                    <option value= "()/()"  onclick="mydropdownparenthesesonchange()">()/()</option>
                    <option value= "[ ]"  onclick="mydropdownparenthesesonchange()">[ ]</option>
                    <option value= "[[ ]]"  onclick="mydropdownparenthesesonchange()">[[ ]]</option>


                    
                </select>
                </td>
                <td>
                <button title =" " onclick="RootInfo()" style="background-color: #eae6e0;border-style: solid; border-width: 1px; border-color: black; text-align: center;  width:67px; height:45px; ">root<br>info</button> 
                <button title="Radian Mode" id="radianmode" onclick="TrigMode(0)" style="background-color: #fcff10; border-style: solid; border-width: 1px; border-color: black; text-align: center;  width:80px; height:45px; ">Radian<br>Mode</button> 
                <button title="Degree Mode"  id="degreemode" onclick="TrigMode(1)" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;  width:80px; height:45px; ">Degree<br>Mode</button> 
                </td></tr></table>

                <button onclick="mydropdownEfunctiononchange('2.71828182845904523536028')" style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:45px; font-size: 20px;; background-color: #b6ff00">e</button> 
                <button onclick="mydropdownEfunctiononchange('(2.71828182845904523536028)^()')" style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:45px; font-size: 20px;; background-color: #b6ff00">e^</button> 

                <button onclick="mydropdownEfunctiononchange('Ln()')" style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:45px; font-size: 20px;; background-color: #b6ff00">Ln</button> 

                <button onclick="mydropdownEfunctiononchange('Log()')" style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:45px; font-size: 20px;; background-color: #b6ff00">Log</button> 


                <button onclick="mydropdownEfunctiononchange('Sin()')" style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:45px; font-size: 20px;; background-color: #b6ff00">Sin</button> 
                <button onclick="mydropdownEfunctiononchange('Cos()')" style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:45px; font-size: 20px;; background-color: #b6ff00">Cos</button> 
                <button onclick="mydropdownEfunctiononchange('Tan()')" style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:45px; font-size: 20px;; background-color: #b6ff00">Tan</button> 

                <button onclick="mydropdownEfunctiononchange('√ ̅ ()')" style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:45px; font-size: 20px;; background-color: #b6ff00">√ ̅ </button> 

                <button onclick="mydropdownEfunctiononchange('∛ ̅ ()')" style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:45px; font-size: 20px;; background-color: #b6ff00">∛ ̅ </button> 
                <button onclick="mydropdownEfunctiononchange('fac()')" style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:45px; font-size: 20px;; background-color: #b6ff00">fac</button> 
                <button onclick="mydropdownEfunctiononchange('n')" style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:45px; font-size: 20px;; background-color: #b6ff00">n</button> 
                <button onclick="mydropdownEfunctiononchange('()')" style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:45px; font-size: 20px;; background-color: #b6ff00">()</button> 


























       </div> 

       <div id="kp2"  style=" display:none;width:570px; height: 205px;  border-style: solid;background-color: rgba(230, 247, 251, 0.74); " > 
         <table> 
           <tr> 
                <td onclick="sup2(22)" title="2nd power"  style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:45px; font-size: 20px;">x<sup>2</sup></td> 
                <td onclick="sup3(22)" title="3rd power"  style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:45px; font-size: 20px;">x<sup>3</sup></td> 
                <td onclick="sup4(22)" title="4th power"  style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:45px; font-size: 20px;">x<sup>4</sup></td> 
                <td onclick="sup5(22)" title="5th power" style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:45px; font-size: 20px;">x<sup>5</sup></td> 
                <td onclick="sup6(22)" title="6th power"  style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:45px; font-size: 20px;">x<sup>6</sup></td> 
                <td title="Sine function"  onclick="sin()" class="btsred" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;  width:45px; height:45px; font-size: 20px;"    onmouseout="display2()" onmouseover="display(21)">Sin</td> 
                <td title="Cosine function"  onclick="cos()" class="btsred" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;  width:45px; height:45px; font-size: 20px;"    onmouseout="display2()" onmouseover="display(21)">Cos</td> 
                <td title="Tangent function" onclick="tan()" class="btsred" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;  width:45px; height:45px; font-size: 20px;"    onmouseout="display2()" onmouseover="display(21)">Tan</td> 
                <td title="Cosecant function"  onclick="csc()" class="btsred" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;  width:45px; height:45px; font-size: 20px;"    onmouseout="display2()" onmouseover="display(21)">Csc</td> 
                <td title="Secant function"  onclick="sec()" class="btsred" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;  width:45px; height:45px; font-size: 20px;"    onmouseout="display2()" onmouseover="display(21)">Sec</td> 
                <td title="Cotangent function" onclick="cot()" class="btsred" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;  width:45px; height:45px; font-size: 20px;"    onmouseout="display2()" onmouseover="display(21)">Cot</td> 

           </tr> 
           <tr> 
                <td onclick="sup2(23)" title="2nd power"  style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:45px; font-size: 20px;">y<sup>2</sup></td> 
                <td onclick="sup3(23)" title="3rd power"  style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:45px; font-size: 20px;">y<sup>3</sup></td> 
                <td onclick="sup4(23)" title="4th power"  style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:45px; font-size: 20px;">y<sup>4</sup></td> 
                <td onclick="sup5(23)" title="5th power" style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:45px; font-size: 20px;">y<sup>5</sup></td> 
                <td onclick="sup6(23)" title="6th power"  style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:45px; font-size: 20px;">y<sup>6</sup></td> 
                <td title="Arcsin; Inverse Sine; output is in radians " onclick="Asin()" style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:30px; font-size: medium"   onmouseout="display2()" onmouseover="display(23)">Sin<sup>-1</sup></td> 
                <td title="Arccos; Inverse Cosine; output is in radians " onclick="Acos()" style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:30px; font-size: medium"  onmouseout="display2()" onmouseover="display(23)">Cos<sup>-1</sup></td> 
                <td title="Arctan; Inverse Tangent; output is in radians " onclick="Atan()" style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:30px; font-size: medium"  onmouseout="display2()" onmouseover="display(23)">Tan<sup>-1</sup></td> 
                <td title="Arccsc; Inverse Cosecant; output is in radians " onclick="Acsc()" style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:30px; font-size: medium"  onmouseout="display2()" onmouseover="display(23)">Csc<sup>-1</sup></td> 
                <td title="Arcsec; Inverse Secant; output is in radians " onclick="Asec()" style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:30px; font-size: medium"  onmouseout="display2()" onmouseover="display(23)">Sec<sup>-1</sup></td> 
                <td title="Arccot; Inverse Cotangent; output is in radians " onclick="Acot()" style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:30px; font-size: medium"  onmouseout="display2()" onmouseover="display(23)">Cot<sup>-1</sup></td> 

           </tr> 
           <tr> 
                <td onclick="sup2(24)" title="2nd degree polynomial"  style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:45px; font-size: 20px;">P2</sup></td> 
                <td onclick="sup3(24)" title="3rd degree polynomial"  style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:45px; font-size: 20px;">P3</sup></td> 
                <td onclick="sup4(24)" title="4th  degree polynomial"  style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:45px; font-size: 20px;">P4</sup></td> 
                <td onclick="sup5(24)" title="5th  degree polynomial" style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:45px; font-size: 20px;">P5</sup></td> 
                <td onclick="sup6(24)" title="6th  degree polynomial"  style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:45px; font-size: 20px;">P6</sup></td> 
                <td title="Hyperbolic Sine" onclick="Sinh()" style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:30px; font-size: medium"   onmouseout="display2()" onmouseover="display(22)">Sinh</td> 
                <td title="Hyperbolic Cosine" onclick="Cosh()" style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:30px; font-size: medium"   onmouseout="display2()" onmouseover="display(22)">Cosh</td> 
                <td title="Hyperbolic Tangent" onclick="Tanh()" style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:30px; font-size: medium"   onmouseout="display2()" onmouseover="display(22)">Tanh</td> 
                <td title="Hyperbolic Cosecant" onclick="Csch()" style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:30px; font-size: medium"   onmouseout="display2()" onmouseover="display(22)">Csch</td> 
                <td title="Hyperbolic Secant" onclick="Sech()" style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:30px; font-size: medium"   onmouseout="display2()" onmouseover="display(22)">Sech</td> 
                <td title="Hyperbolic Cotangent" onclick="Coth()" style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:30px; font-size: medium"   onmouseout="display2()" onmouseover="display(22)">Coth</td> 

           </tr> 
           <tr> 
                <td onclick="sup2(25)" title="2nd power"  style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:45px; font-size: 20px;">t<sup>2</sup></td> 
                <td onclick="sup3(25)" title="3rd power"  style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:45px; font-size: 20px;">t<sup>3</sup></td> 
                <td onclick="sup4(25)" title="4th power"  style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:45px; font-size: 20px;">t<sup>4</sup></td> 
                <td onclick="sup5(25)" title="5th power" style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:45px; font-size: 20px;">t<sup>5</sup></td> 
                <td onclick="sup6(25)" title="6th power"  style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:45px; font-size: 20px;">t<sup>6</sup></td> 
                <td title="Inverse Hyperbolic Sine" onclick="InvSinh()" style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:30px; font-size: small"   onmouseout="display2()" onmouseover="display(2244)">Sinh<sup>-1</sup></td> 
                <td title="Inverse Hyperbolic Cosine" onclick="InvCosh()" style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:30px; font-size: small"   onmouseout="display2()" onmouseover="display(2244)">Cosh<sup>-1</sup></td> 
                <td title="Inverse Hyperbolic Tangent" onclick="InvTanh()" style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:30px; font-size: small"   onmouseout="display2()" onmouseover="display(2244)">Tanh<sup>-1</sup></td> 
                <td title="Inverse Hyperbolic Cosecant" onclick="InvCsch()" style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:30px; font-size: small"   onmouseout="display2()" onmouseover="display(2244)">Csch<sup>-1</sup></td> 
                <td title="Inverse Hyperbolic Secant" onclick="InvSech()" style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:30px; font-size: small"   onmouseout="display2()" onmouseover="display(2244)">Sech<sup>-1</sup></td> 
                <td title="Inverse Hyperbolic Cotangent" onclick="InvCoth()" style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:30px; font-size: small"   onmouseout="display2()" onmouseover="display(2244)">Coth<sup>-1</sup></td> 

           </tr> 
       </table> 

    </div> 

       <div id="kp3"  style=" display:none;width:570px; height: 205px;overflow-y:scroll ;border-style: solid;background-color: rgba(230, 247, 251, 0.74); " > 
       <table> 
            <tr> 
                <td> <button onclick="openwindow(1)"  type="button" style ="text-align: center; width: 200px;height:45px ;font-size: 14px">Input Piecewise Function</button>  </td>    
                <td  title=" " onclick="ineq20()"   onmouseout="display2()" onmouseover="display(8)" class="btsred" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;  width:45px; height:45px; font-size: 20px;">{ }</td> 
                <td  title=" " onclick="ineq21()"   onmouseout="display2()" onmouseover="display(8)" class="btsred" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;  width:45px; height:45px; font-size: 20px;">x</td> 
                <td title=" "  onclick="ineq22()"    onmouseout="display2()" onmouseover="display(8)"  class="btsred" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;  width:45px; height:45px; font-size: 20px;">&le;</td> 
                <td title=" " onclick="ineq23()"   onmouseout="display2()" onmouseover="display(8)" class="btsred" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;  width:45px; height:45px; font-size: 20px;">&lt;</td> 
                <td title=" "   onclick="ineq24()"    onmouseout="display2()" onmouseover="display(8)"  class="btsred" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;  width:45px; height:45px; font-size: 20px;">&ge;</td> 
                <td title="  " onclick="ineq25()"   onmouseout="display2()" onmouseover="display(8)" class="btsred" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;  width:45px; height:45px; font-size: 20px;">&gt;</td> 
                <td   title="  "   onclick="ineq26()"    onmouseout="display2()" onmouseover="display(8)"   class="btsred" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;  width:45px; height:45px; font-size: 20px;">&ne;</td> 
                <td   title=" "   onclick="ineq27()"    onmouseout="display2()" onmouseover="display(8)"   class="btsred" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;  width:45px; height:45px; font-size: 20px;">=</td> 
            </tr> 
        </table> 
            <table> 
                <tr> 
                <td title="Restricting x  ; Example: f(x) = 4x + 1 {x &#8804; 1 } " onclick="ineq1()"   onmouseout="display2()" onmouseover="display(8)" class="btsred" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;  width:100px; height:45px; font-size: 20px;">{x &#8804; }</td> 
                <td title="Restricting x  ; Example: f(x) = 4x + 1 {x < 1 } "  onclick="ineq2()"    onmouseout="display2()" onmouseover="display(8)"  class="btsred" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;  width:100px; height:45px; font-size: 20px;">{x &lt; }</td> 
                <td title="Restricting x  ; Example: f(x) = 4x + 1 {x &#8805; 1 } " onclick="ineq3()"   onmouseout="display2()" onmouseover="display(8)" class="btsred" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;  width:100px; height:45px; font-size: 20px;">{x &#8805; }</td> 
                <td title="Restricting x  ; Example: f(x) = 4x + 1 {x > 1 } "   onclick="ineq4()"    onmouseout="display2()" onmouseover="display(8)"  class="btsred" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;  width:100px; height:45px; font-size: 20px;">{x &gt; }</td> 
                <td title="Restricting x  ; Example: f(x) = 4x + 1 {x &#8800; 1 } " onclick="ineq5()"   onmouseout="display2()" onmouseover="display(8)" class="btsred" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;  width:100px; height:45px; font-size: 20px;">{x &#8800; } </td> 
                <td title="Restricting x  ; Example: f(x) = 4x + 1 {x = 1 } "   onclick="ineq6()"    onmouseout="display2()" onmouseover="display(8)"   class="btsred" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;  width:100px; height:45px; font-size: 20px;">{x = }</td> 
            </tr> 
        </table> 
        <table> 
            <tr> 
                <td title="Restricting x  ;  "   onclick="ineq8()"    onmouseout="display2()" onmouseover="display(8)"  class="btsred" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;  width:150px; height:45px; font-size: 20px;">{a &#8804; x &#8804; b}</td> 
                <td title="Restricting x  ;  " onclick="ineq9()"   onmouseout="display2()" onmouseover="display(8)" class="btsred" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;  width:150px; height:45px; font-size: 20px;">{a &#8804; x < b} </td> 
                <td title="Restricting x  ; "   onclick="ineq10()"    onmouseout="display2()" onmouseover="display(8)"  class="btsred" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;  width:150px; height:45px; font-size: 20px;">{a < x &#8804; b}</td> 
                <td title="Restricting x  ; " onclick="ineq11()"   onmouseout="display2()" onmouseover="display(8)" class="btsred" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;  width:150px; height:45px; font-size: 20px;">{a < x < b} </td> 
            </tr> 
        </table> 
        <table> 
            <tr> 
                <td  title="Restricting x  ; Example: g(y) = 4y + 1 {y &#8804; 1 } " onclick="ineq1B()"   onmouseout="display2()" onmouseover="display(8)" class="btsred" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;  width:300px; height:45px; font-size: 20px;">{y &#8804; }</td> 
                <td title="Restricting x  ; Example: g(y) = 4y + 1 {y < 1 } "  onclick="ineq2B()"    onmouseout="display2()" onmouseover="display(8)"  class="btsred" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;  width:300px; height:45px; font-size: 20px;">{y &lt; }</td> 
                <td title="Restricting x  ; Example: g(y) = 4y + 1 {y &#8805; 1 } " onclick="ineq3B()"   onmouseout="display2()" onmouseover="display(8)" class="btsred" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;  width:300px; height:45px; font-size: 20px;">{y &#8805; }</td> 
                <td title="Restricting x  ; Example: g(y) = 4y + 1 {y > 1 } "   onclick="ineq4B()"    onmouseout="display2()" onmouseover="display(8)"  class="btsred" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;  width:300px; height:45px; font-size: 20px;">{y &gt; }</td> 
                <td title="Restricting x  ; Example: g(y) = 4y + 1 {y &#8800; 1 } " onclick="ineq5B()"   onmouseout="display2()" onmouseover="display(8)" class="btsred" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;  width:300px; height:45px; font-size: 20px;">{y &#8800; } </td> 
                <td title="Restricting x  ; Example: g(y) = 4y + 1 {y = 1 } " onclick="ineq5B()"   onmouseout="display2()" onmouseover="display(8)" class="btsred" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;  width:300px; height:45px; font-size: 20px;">{y = } </td> 

             </tr> 
        </table> 
        <table> 
            <tr> 
                <td title="Restricting x  ;  "   onclick="ineq7B()"    onmouseout="display2()" onmouseover="display(8)"  class="btsred" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;  width:600px; height:45px; font-size:20px;">{a &#8804; y &#8804; b}</td> 
                <td title="Restricting x  ;  " onclick="ineq8B()"   onmouseout="display2()" onmouseover="display(8)" class="btsred" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;  width:600px; height:45px; font-size:20px;">{a &#8804; y < b} </td> 
                <td title="Restricting x  ; "   onclick="ineq9B()"    onmouseout="display2()" onmouseover="display(8)"  class="btsred" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;  width:600px; height:45px; font-size:20px;">{a < y &#8804; b}</td> 
                <td title="Restricting x  ; " onclick="ineq10B()"   onmouseout="display2()" onmouseover="display(8)" class="btsred" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;  width:600px; height:45px; font-size:20px;">{a < y < b} </td> 
            </tr> 
        </table> 

     </div> 

    <div id="kp4"  style="overflow:scroll;display:none;width:570px; height: 205px; border-style: solid;background-color: rgba(230, 247, 251, 0.74); " > 
            <input type="button" title="ellipse(h ;k ; value under x ; value under y )" value="Input ellipse" onclick="Ellipse()" class="btsred" style="height:30px;"/> 
            <input type="button" title="hyperbolaXY(h ;k ; value under x ; value under y )" value="Input hyperbolaXY" onclick="hyperbolaXY()" class="btsred" style="height:30px; "/> 
            <input type="button" title="hyperbolaYX(h ;k ; value under x ; value under y )" value="Input hyperbolaYX" onclick="hyperbolaYX()" style="height:30px; "/> 
            <br>
            <input type="button" title="parabolaUp(h ;k ; value of p )" value="Input parabolaUp" onclick="parabolaUp()" style="height:30px; "/> 
            <input type="button" title="parabolaDown(h ;k ; value of p )" value="Input parabolaDown" onclick="parabolaDown()" style="height:30px; "/> 
            <input type="button" title="parabolaRight(h ;k ; value of p )" value="Input parabolaRight" onclick="parabolaRight()" style="height:30px; "/> 
            <input type="button" title="parabolaLeft(h ;k ; value of p )" value="Input parabolaLeft" onclick="parabolaLeft()" style="height:30px; "/> 

       <table border="1"> 
            <tr> 
                <td title="4th root" onclick="RootInfo()"   class="btsred" style="border-style: solid; border-width: 1px; border-color: black; text-align: center; ; width:55px; height:45px; font-size: 20px;">Root<br>Info</td> 		
                <td title="" class="btsblue" onclick="Root(2)"     style="border-style: solid; border-width: 1px; border-color: black; text-align: center; ; width:60px; height:45px; font-size: 20px;"><span class="radical"><span class="n-root" style="width:10px;border-style: none;"></span>&radic;</span><span class="radicand"  style="border-top-color: black" >&nbsp;</span></td> 		
                <td title="" class="btsblue" onclick="Root(3)"     style="border-style: solid; border-width: 1px; border-color: black; text-align: center; ; width:60px; height:45px; font-size: 20px;"><span class="radical"><span class="n-root" style="width:10px;border-style: none;">3</span>&radic;</span><span class="radicand"  style="border-top-color: black" >&nbsp;</span></td> 		
                <td title="" class="btsblue" onclick="Root(4)"     style="border-style: solid; border-width: 1px; border-color: black; text-align: center; ; width:60px; height:45px; font-size: 20px;"><span class="radical"><span class="n-root" style="width:10px;border-style: none;">4</span>&radic;</span><span class="radicand"  style="border-top-color: black" >&nbsp;</span></td> 		
                <td title="" class="btsblue" onclick="Root(5)"     style="border-style: solid; border-width: 1px; border-color: black; text-align: center; ; width:60px; height:45px; font-size: 20px;"><span class="radical"><span class="n-root" style="width:10px;border-style: none;">5</span>&radic;</span><span class="radicand"  style="border-top-color: black" >&nbsp;</span></td> 		
                <td title="" class="btsblue" onclick="Root(6)"     style="border-style: solid; border-width: 1px; border-color: black; text-align: center; ; width:60px; height:45px; font-size: 20px;"><span class="radical"><span class="n-root" style="width:10px;border-style: none;">6</span>&radic;</span><span class="radicand"  style="border-top-color: black" >&nbsp;</span></td> 		
                <td title="" class="btsblue" onclick="Root(7)"     style="border-style: solid; border-width: 1px; border-color: black; text-align: center; ; width:60px; height:45px; font-size: 20px;"><span class="radical"><span class="n-root" style="width:10px;border-style: none;">7</span>&radic;</span><span class="radicand"  style="border-top-color: black" >&nbsp;</span></td> 		
                <td title="" class="btsblue" onclick="Root(8)"     style="border-style: solid; border-width: 1px; border-color: black; text-align: center; ; width:60px; height:45px; font-size: 20px;"><span class="radical"><span class="n-root" style="width:10px;border-style: none;">8</span>&radic;</span><span class="radicand"  style="border-top-color: black" >&nbsp;</span></td> 		
            </tr>     
            <tr>                                 
                <td title="" class="btsblue" onclick="Root(9)"     style="border-style: solid; border-width: 1px; border-color: black; text-align: center; ; width:60px; height:45px; font-size: 20px;"><span class="radical"><span class="n-root" style="width:10px;border-style: none;">9</span>&radic;</span><span class="radicand"  style="border-top-color: black" >&nbsp;</span></td> 		
                <td title="" class="btsblue" onclick="Root(10)"     style="border-style: solid; border-width: 1px; border-color: black; text-align: center; ; width:60px; height:45px; font-size: 20px;"><span class="radical"><span class="n-root" style="width:10px;border-style: none;">10</span>&radic;</span><span class="radicand"  style="border-top-color: black" >&nbsp;</span></td> 	
                <td title="" class="btsblue" onclick="Root(11)"     style="border-style: solid; border-width: 1px; border-color: black; text-align: center; ; width:60px; height:45px; font-size: 20px;"><span class="radical"><span class="n-root" style="width:10px;border-style: none;">11</span>&radic;</span><span class="radicand"  style="border-top-color: black" >&nbsp;</span></td> 		
                <td title="" class="btsblue" onclick="Root(12)"     style="border-style: solid; border-width: 1px; border-color: black; text-align: center; ; width:60px; height:45px; font-size: 20px;"><span class="radical"><span class="n-root" style="width:10px;border-style: none;">12</span>&radic;</span><span class="radicand"  style="border-top-color: black" >&nbsp;</span></td> 	
                <td title="" class="btsblue" onclick="Root(13)"     style="border-style: solid; border-width: 1px; border-color: black; text-align: center; ; width:60px; height:45px; font-size: 20px;"><span class="radical"><span class="n-root" style="width:10px;border-style: none;">13</span>&radic;</span><span class="radicand"  style="border-top-color: black" >&nbsp;</span></td> 		
                <td title="" class="btsblue" onclick="Root(14)"     style="border-style: solid; border-width: 1px; border-color: black; text-align: center; ; width:60px; height:45px; font-size: 20px;"><span class="radical"><span class="n-root" style="width:10px;border-style: none;">14</span>&radic;</span><span class="radicand"  style="border-top-color: black" >&nbsp;</span></td> 	
                <td title="" class="btsblue" onclick="Root(15)"     style="border-style: solid; border-width: 1px; border-color: black; text-align: center; ; width:60px; height:45px; font-size: 20px;"><span class="radical"><span class="n-root" style="width:10px;border-style: none;">15</span>&radic;</span><span class="radicand"  style="border-top-color: black" >&nbsp;</span></td> 	
                <td title =" "       onclick="nthRoot2()" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;  width:60px; height:45px; font-size: 20px"><span class="radical"><span class="n-root" style="width:10px;border-style: none;">n</span>&radic;</span><span class="radicand"  style="border-top-color: black" >&nbsp;</span></td> 

            </tr>     
       </table> 
    <h1>Special Functions:</h1> 
             <span style="font-size: 24px">Greatest Integer Function</span> 
                <input type="button" value="Input Examples" onclick="inputGI()" class="btsred" style="width:100px; height:30px; font-size: small"/> 
                <br> 
                Example 1: Graph y = [[x]];  Input  y = [[x]]         <br> 
                Example 2: Graph y = [[x + 2]];  Input  y = [[x + 2]] <br> 
                Example 3: Graph y = [[x - 3]];  Input  y = [[x - 3]] <br> 
                Note: Graph should be in "point mode". 

            <br><br> 
            <span style="font-size: 24px">Conic Sections: Circle, Ellipse, Hyperbola, Parabola</span> 
            <input type="button" value="Input Circle" onclick="Circle()" class="btsred" style="width:100px; height:30px; font-size: small"/> 
            <input type="button" value= "Submit" class="btswhite" onclick="SubmitButton()" style ="height: 30px; width: 100px;background-color: #ffd800; font-size: 14px" /> 
            &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; 
            <input type="button" value= "Example" class="submit" style="height: 25px; width: 100px;  background-color: #b6ff00 " onclick="GraphCircle()"/> 
            <br> 
            Input Format: circle(h; k; r); where (h, k) is center of circle and r is radius<br/> 
            Example: (x - 4)<sup>2</sup> + (y + 3)<sup>2</sup> = 25;  Input will be circle(4; -3; 5)<br> 
            Example: x<sup>2</sup> + y<sup>2</sup> = 20;  Input will be circle(0; 0; @sqrtsym20)<br> 
            <br><br> 
            <input type="button" value="Input Ellipse" onclick="Ellipse()" class="btsred" style="width:100px; height:30px; font-size: small"/> 
            <input type="button" value= "Submit" class="btswhite" onclick="GraphTable()" style ="height: 30px; width: 100px;background-color: #ffd800; font-size: 14px" /> 
            &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; 
            <input type="button" value= "Example" class="submit" style="height: 25px; width: 100px;  background-color: #b6ff00 " onclick="GraphEllipse()"/> 
            <br> 
            Input Format: ellipse(h; k; value under (x - h)<sup>2</sup>; value under (y - k)<sup>2</sup>); where (h, k) is center of ellipse<br/> 
            Example: (x - 4)<sup>2</sup>/16 + (y + 3)<sup>2</sup>/9 = 1;  Input will be ellipse(4; -3; 16; 9)<br> 
            Example: (y - 2)<sup>2</sup>/25 + (x + 7)<sup>2</sup>/12 = 1;  Input will be ellipse(-7; 2; 12; 25)<br> 

            <br><br> 

            <input type="button" value="Input Hyperbola (XY type)" onclick="hyperbolaXY()" class="btsred" style="width:200px; height:30px; font-size: small"/> 
            <input type="button" value= "Submit" class="btswhite" onclick="GraphingCalculator()" style ="height: 30px; width: 100px;background-color: #ffd800; font-size: 14px" /> 
            &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; 
            <input type="button" value= "Example" class="submit" style="height: 25px; width: 100px;  background-color: #b6ff00 " onclick="GraphHyperbolaXY()"/> 
            <br> 
            Input Format: hyperbolaXY(h; k; value under (x - h)<sup>2</sup>; value under (y - k)<sup>2</sup>); <br/> 
            where (h, k) is center of ellipse<br/> 
            xample: (x - 4)<sup>2</sup>/16 - (y + 3)<sup>2</sup>/9 = 1;  Input will be hyperbolaXY(4; -3; 16; 9)<br/> 
            Example: x<sup>2</sup>/15 - y<sup>2</sup>/20 = 1;  Input will be hyperbolaXY(0; 0; 15; 20)<br/> 
            <br/><br/> 
            <input type="button" value="Input Hyperbola (YX type)" onclick="HyperbolaYX()" class="btsred" style="width:200px; height:30px; font-size: small"/> 
            <input type="button" value= "Submit" class="btswhite" onclick="GraphingCalculator()" style ="height: 30px; width: 100px;background-color: #ffd800; font-size: 14px" /> 
            &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; 
            <input type="button" value= "Example" class="submit" style="height: 25px; width: 100px;  background-color: #b6ff00 " onclick="GraphHyperbolaYX()"/> 
            <br/> 
            Input Format: hyperbolaYX(h; k; value under (x - h)<sup>2</sup>; value under (y - k)<sup>2</sup>); <br/> 
            where (h, k) is center of ellipse<br/> 
            Example: (y - 6)<sup>2</sup>/16 - (x + 7)<sup>2</sup>/9 = 1;  Input will be hyperbolaYX(-7; 6; 9; 16)<br/> 
            Example: y<sup>2</sup>/15 - x<sup>2</sup>/20 = 1;  Input will be hyperbolaYX(0; 0; 15; 20)<br/> 
            <br/><br/> 
             <h3>Statistics Functions</h3> 
            <input type="button" value="Input Normal Distribution pdf" onclick="normalpdfinput()" class="btsred" style="width:200px; height:30px; font-size: small"/> 
            <input type="button" value= "Submit" class="btswhite" onclick="GraphingCalculator()" style ="height: 30px; width: 100px;background-color: #ffd800; font-size: 14px" /> 
            &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; 
            <input type="button" value= "Example" class="submit" style="height: 25px; width: 100px;  background-color: #b6ff00 " onclick="GraphNormalpdf()"/> 
            <br> 
            Input Format: normalpdf(&mu;; &sigma;) 
            where &mu; is population mean and &sigma; is population standard deviation<br/> 
            Example: Draw pdf for normal population with &mu; = 0 and &sigma; = 1.  Input will normalpdf(0; 1)<br/> 
            Example: Draw pdf for normal population with &mu; = 2 and &sigma; = 5.  Input will normalpdf(2; 5) 
            <br><br> 
            <input type="button" value="Input Normal Distribution cdf" onclick="normalcdfinput()" class="btsred" style="width:200px; height:30px; font-size: small"/> 
            <input type="button" value= "Submit" class="btswhite" onclick="GraphingCalculator()" style ="height: 30px; width: 100px;background-color: #ffd800; font-size: 14px" /> 
            &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; 
            <input type="button" value= "Example" class="submit" style="height: 25px; width: 100px;  background-color: #b6ff00 " onclick="GraphNormalcdf()"/> 
            <br> 
            Input Format: normalcdf(&mu;; &sigma;) 
            where &mu; is population mean and &sigma; is population standard deviation<br/> 
            Example: Draw cdf for normal population with &mu; = 0 and &sigma; = 1.  Input will normalcdf(0; 1)<br/> 
            Example: Draw cdf for normal population with &mu; = 2 and &sigma; = 5.  Input will normalcdf(2; 5) 
            <br><br> 
            <input type="button" value="Input t-Distribution pdf" onclick="tdistpdfinput()" class="btsred" style="width:200px; height:30px; font-size: small"/> 
            <input type="button" value= "Submit" class="btswhite" onclick="GraphingCalculator()" style ="height: 30px; width: 100px;background-color: #ffd800; font-size: 14px" /> 
            &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; 
            <input type="button" value= "Example" class="submit" style="height: 25px; width: 100px;  background-color: #b6ff00 " onclick="Graphtdistpdf()"/> 
            <br> 
            Input Format: tdistpdf(DF) 
            where DF is degrees of freedom<br/> 
            Example: Draw pdf for t-distribution with degrees of freedom of 15.  tdistpdf(15) 
            <br><br> 
            <input type="button" value="Input t-Distribution cdf" onclick="tdistcdfinput()" class="btsred" style="width:200px; height:30px; font-size: small"/> 
            <input type="button" value= "Submit" class="btswhite" onclick="GraphingCalculator()" style ="height: 30px; width: 100px;background-color: #ffd800; font-size: 14px" /> 
            &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; 
            <input type="button" value= "Example" class="submit" style="height: 25px; width: 100px;  background-color: #b6ff00 " onclick="Graphtdistcdf()"/> 
            <br> 
            Input Format: tdistcdf(DF) 
            where DF is degrees of freedom<br/> 
            Example: Draw cdf for t-distribution with degrees of freedom of 15.  tdistcdf(15) 
            <br><br> 
            <input type="button" value="Input F-Distribution pdf" onclick="fdistpdfinput()" class="btsred" style="width:200px; height:30px; font-size: small"/> 
            <input type="button" value= "Submit" class="btswhite" onclick="GraphingCalculator()" style ="height: 30px; width: 100px;background-color: #ffd800; font-size: 14px" /> 
            &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; 
            <input type="button" value= "Example" class="submit" style="height: 25px; width: 100px;  background-color: #b6ff00 " onclick="GraphFDistpdf()"/> 
            <br> 
            Input Format: GraphFDistpdf(df1; df2) 
            where df1 is degrees of freedom 1;  df2 is degrees of freedom 2 <br/> 
            Example: Draw pdf with df1 = 5 and dft2 = 2.  Input will FDistpdf(5; 2)<br/> 
            Example: Draw pdf with df1 = 100 and dft2 = 100.  Input will FDistpdf(100; 100)<br/> 
            <br><br> 
             <h1 style="color: #ff6a00">More features Coming Soon</h1> 
            </div> 

            <div id="kp5"  style=" display:none;width:570px ;height: 205px;  border-style: solid;background-color: rgba(230, 247, 251, 0.74); " > 

       <table border="1"> 
            <tr> 
                <td> <button onclick="standardalphabet()"  type="button" style ="text-align: center; width: 200px; font-size: 14px">QWERTY Keyboard</button>  </td>  
            </tr> 
            <tr> 
                <td> <button onclick="openwindow(2)"  type="button" style ="text-align: center; width: 200px; font-size: 14px">Algebra/Precalculus Menu</button>  </td>    
                <td> <button onclick="openwindow(3)"  type="button" style ="text-align: center; width: 200px; font-size: 14px">Statistics Menu</button>  </td>    
            </tr> 
            <tr> 
                <td> <button onclick="openwindow(4)"  type="button" style ="text-align: center; width: 200px; font-size: 14px">Trigonmetry Menu</button>  </td>    
                <td> <button onclick="openwindow(5)"  type="button" style ="text-align: center; width: 200px; font-size: 14px">Calculus Menu</button>  </td>    

            </tr> 
        </table> 
        </div>    

        */}.toString().slice(14,-1);       

        var myString2 = (myString.toString()).replace('*/}', '');
        myString2 = myString2.replace('*/', '');        

    //alert(divname);
    document.getElementById('panel2').innerHTML = myString2;
    //document.getElementById('secondkeypad').innerHTML = text;

    
}


 
/*------------------------------------------------------------------------------
* NAME       :  keyboardlayoutMain(
* PURPOSE    :  Creates keypad for graphing calculator
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/
function keyboardlayout33(){
        
    var myString = function(){/*
       <div style="width:570px; height: 205px;  border-style: solid;background-color: rgba(230, 247, 251, 0.74); " > 
         <table> 
           <tr> 
                <td onclick="sup2(22)" title="2nd power"  style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:45px; font-size: 20px;">x<sup>2</sup></td> 
                <td onclick="sup3(22)" title="3rd power"  style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:45px; font-size: 20px;">x<sup>3</sup></td> 
                <td onclick="sup4(22)" title="4th power"  style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:45px; font-size: 20px;">x<sup>4</sup></td> 
                <td onclick="sup5(22)" title="5th power" style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:45px; font-size: 20px;">x<sup>5</sup></td> 
                <td onclick="sup6(22)" title="6th power"  style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:45px; font-size: 20px;">x<sup>6</sup></td> 
                <td title="Sine function"  onclick="sin()" class="btsred" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;  width:45px; height:45px; font-size: 20px;"    onmouseout="display2()" onmouseover="display(21)">Sin</td> 
                <td title="Cosine function"  onclick="cos()" class="btsred" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;  width:45px; height:45px; font-size: 20px;"    onmouseout="display2()" onmouseover="display(21)">Cos</td> 
                <td title="Tangent function" onclick="tan()" class="btsred" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;  width:45px; height:45px; font-size: 20px;"    onmouseout="display2()" onmouseover="display(21)">Tan</td> 
                <td title="Cosecant function"  onclick="csc()" class="btsred" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;  width:45px; height:45px; font-size: 20px;"    onmouseout="display2()" onmouseover="display(21)">Csc</td> 
                <td title="Secant function"  onclick="sec()" class="btsred" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;  width:45px; height:45px; font-size: 20px;"    onmouseout="display2()" onmouseover="display(21)">Sec</td> 
                <td title="Cotangent function" onclick="cot()" class="btsred" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;  width:45px; height:45px; font-size: 20px;"    onmouseout="display2()" onmouseover="display(21)">Cot</td> 

           </tr> 
           <tr> 
                <td onclick="sup2(23)" title="2nd power"  style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:45px; font-size: 20px;">y<sup>2</sup></td> 
                <td onclick="sup3(23)" title="3rd power"  style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:45px; font-size: 20px;">y<sup>3</sup></td> 
                <td onclick="sup4(23)" title="4th power"  style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:45px; font-size: 20px;">y<sup>4</sup></td> 
                <td onclick="sup5(23)" title="5th power" style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:45px; font-size: 20px;">y<sup>5</sup></td> 
                <td onclick="sup6(23)" title="6th power"  style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:45px; font-size: 20px;">y<sup>6</sup></td> 
                <td title="Arcsin; Inverse Sine; output is in radians " onclick="Asin()" style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:30px; font-size: medium"   onmouseout="display2()" onmouseover="display(23)">Sin<sup>-1</sup></td> 
                <td title="Arccos; Inverse Cosine; output is in radians " onclick="Acos()" style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:30px; font-size: medium"  onmouseout="display2()" onmouseover="display(23)">Cos<sup>-1</sup></td> 
                <td title="Arctan; Inverse Tangent; output is in radians " onclick="Atan()" style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:30px; font-size: medium"  onmouseout="display2()" onmouseover="display(23)">Tan<sup>-1</sup></td> 
                <td title="Arccsc; Inverse Cosecant; output is in radians " onclick="Acsc()" style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:30px; font-size: medium"  onmouseout="display2()" onmouseover="display(23)">Csc<sup>-1</sup></td> 
                <td title="Arcsec; Inverse Secant; output is in radians " onclick="Asec()" style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:30px; font-size: medium"  onmouseout="display2()" onmouseover="display(23)">Sec<sup>-1</sup></td> 
                <td title="Arccot; Inverse Cotangent; output is in radians " onclick="Acot()" style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:30px; font-size: medium"  onmouseout="display2()" onmouseover="display(23)">Cot<sup>-1</sup></td> 

           </tr> 
           <tr> 
                <td onclick="sup2(24)" title="2nd degree polynomial"  style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:45px; font-size: 20px;">P2</sup></td> 
                <td onclick="sup3(24)" title="3rd degree polynomial"  style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:45px; font-size: 20px;">P3</sup></td> 
                <td onclick="sup4(24)" title="4th  degree polynomial"  style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:45px; font-size: 20px;">P4</sup></td> 
                <td onclick="sup5(24)" title="5th  degree polynomial" style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:45px; font-size: 20px;">P5</sup></td> 
                <td onclick="sup6(24)" title="6th  degree polynomial"  style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:45px; font-size: 20px;">P6</sup></td> 
                <td title="Hyperbolic Sine" onclick="Sinh()" style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:30px; font-size: medium"   onmouseout="display2()" onmouseover="display(22)">Sinh</td> 
                <td title="Hyperbolic Cosine" onclick="Cosh()" style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:30px; font-size: medium"   onmouseout="display2()" onmouseover="display(22)">Cosh</td> 
                <td title="Hyperbolic Tangent" onclick="Tanh()" style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:30px; font-size: medium"   onmouseout="display2()" onmouseover="display(22)">Tanh</td> 
                <td title="Hyperbolic Cosecant" onclick="Csch()" style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:30px; font-size: medium"   onmouseout="display2()" onmouseover="display(22)">Csch</td> 
                <td title="Hyperbolic Secant" onclick="Sech()" style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:30px; font-size: medium"   onmouseout="display2()" onmouseover="display(22)">Sech</td> 
                <td title="Hyperbolic Cotangent" onclick="Coth()" style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:30px; font-size: medium"   onmouseout="display2()" onmouseover="display(22)">Coth</td> 

           </tr> 
           <tr> 
                <td onclick="sup2(25)" title="2nd power"  style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:45px; font-size: 20px;">t<sup>2</sup></td> 
                <td onclick="sup3(25)" title="3rd power"  style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:45px; font-size: 20px;">t<sup>3</sup></td> 
                <td onclick="sup4(25)" title="4th power"  style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:45px; font-size: 20px;">t<sup>4</sup></td> 
                <td onclick="sup5(25)" title="5th power" style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:45px; font-size: 20px;">t<sup>5</sup></td> 
                <td onclick="sup6(25)" title="6th power"  style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:45px; font-size: 20px;">t<sup>6</sup></td> 
                <td title="Inverse Hyperbolic Sine" onclick="InvSinh()" style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:30px; font-size: small"   onmouseout="display2()" onmouseover="display(2244)">Sinh<sup>-1</sup></td> 
                <td title="Inverse Hyperbolic Cosine" onclick="InvCosh()" style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:30px; font-size: small"   onmouseout="display2()" onmouseover="display(2244)">Cosh<sup>-1</sup></td> 
                <td title="Inverse Hyperbolic Tangent" onclick="InvTanh()" style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:30px; font-size: small"   onmouseout="display2()" onmouseover="display(2244)">Tanh<sup>-1</sup></td> 
                <td title="Inverse Hyperbolic Cosecant" onclick="InvCsch()" style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:30px; font-size: small"   onmouseout="display2()" onmouseover="display(2244)">Csch<sup>-1</sup></td> 
                <td title="Inverse Hyperbolic Secant" onclick="InvSech()" style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:30px; font-size: small"   onmouseout="display2()" onmouseover="display(2244)">Sech<sup>-1</sup></td> 
                <td title="Inverse Hyperbolic Cotangent" onclick="InvCoth()" style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:30px; font-size: small"   onmouseout="display2()" onmouseover="display(2244)">Coth<sup>-1</sup></td> 

           </tr> 
       </table> 

    </div> 
    <br>
    <div style=" width:570px; height: 205px;overflow-y:scroll ;border-style: solid;background-color: rgba(230, 247, 251, 0.74); " > 
       <table> 
            <tr> 
                <td> <button onclick="openwindow(1)"  type="button" style ="text-align: center; width: 200px;height:45px ;font-size: 14px">Input Piecewise Function</button>  </td>    
                <td  title=" " onclick="ineq20()"   onmouseout="display2()" onmouseover="display(8)" class="btsred" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;  width:45px; height:45px; font-size: 20px;">{ }</td> 
                <td  title=" " onclick="ineq21()"   onmouseout="display2()" onmouseover="display(8)" class="btsred" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;  width:45px; height:45px; font-size: 20px;">x</td> 
                <td title=" "  onclick="ineq22()"    onmouseout="display2()" onmouseover="display(8)"  class="btsred" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;  width:45px; height:45px; font-size: 20px;">&le;</td> 
                <td title=" " onclick="ineq23()"   onmouseout="display2()" onmouseover="display(8)" class="btsred" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;  width:45px; height:45px; font-size: 20px;">&lt;</td> 
                <td title=" "   onclick="ineq24()"    onmouseout="display2()" onmouseover="display(8)"  class="btsred" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;  width:45px; height:45px; font-size: 20px;">&ge;</td> 
                <td title="  " onclick="ineq25()"   onmouseout="display2()" onmouseover="display(8)" class="btsred" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;  width:45px; height:45px; font-size: 20px;">&gt;</td> 
                <td   title="  "   onclick="ineq26()"    onmouseout="display2()" onmouseover="display(8)"   class="btsred" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;  width:45px; height:45px; font-size: 20px;">&ne;</td> 
                <td   title=" "   onclick="ineq27()"    onmouseout="display2()" onmouseover="display(8)"   class="btsred" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;  width:45px; height:45px; font-size: 20px;">=</td> 
            </tr> 
        </table> 
            <table> 
                <tr> 
                <td title="Restricting x  ; Example: f(x) = 4x + 1 {x &#8804; 1 } " onclick="ineq1()"   onmouseout="display2()" onmouseover="display(8)" class="btsred" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;  width:100px; height:45px; font-size: 20px;">{x &#8804; }</td> 
                <td title="Restricting x  ; Example: f(x) = 4x + 1 {x < 1 } "  onclick="ineq2()"    onmouseout="display2()" onmouseover="display(8)"  class="btsred" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;  width:100px; height:45px; font-size: 20px;">{x &lt; }</td> 
                <td title="Restricting x  ; Example: f(x) = 4x + 1 {x &#8805; 1 } " onclick="ineq3()"   onmouseout="display2()" onmouseover="display(8)" class="btsred" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;  width:100px; height:45px; font-size: 20px;">{x &#8805; }</td> 
                <td title="Restricting x  ; Example: f(x) = 4x + 1 {x > 1 } "   onclick="ineq4()"    onmouseout="display2()" onmouseover="display(8)"  class="btsred" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;  width:100px; height:45px; font-size: 20px;">{x &gt; }</td> 
                <td title="Restricting x  ; Example: f(x) = 4x + 1 {x &#8800; 1 } " onclick="ineq5()"   onmouseout="display2()" onmouseover="display(8)" class="btsred" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;  width:100px; height:45px; font-size: 20px;">{x &#8800; } </td> 
                <td title="Restricting x  ; Example: f(x) = 4x + 1 {x = 1 } "   onclick="ineq6()"    onmouseout="display2()" onmouseover="display(8)"   class="btsred" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;  width:100px; height:45px; font-size: 20px;">{x = }</td> 
            </tr> 
        </table> 
        <table> 
            <tr> 
                <td title="Restricting x  ;  "   onclick="ineq8()"    onmouseout="display2()" onmouseover="display(8)"  class="btsred" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;  width:150px; height:45px; font-size: 20px;">{a &#8804; x &#8804; b}</td> 
                <td title="Restricting x  ;  " onclick="ineq9()"   onmouseout="display2()" onmouseover="display(8)" class="btsred" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;  width:150px; height:45px; font-size: 20px;">{a &#8804; x < b} </td> 
                <td title="Restricting x  ; "   onclick="ineq10()"    onmouseout="display2()" onmouseover="display(8)"  class="btsred" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;  width:150px; height:45px; font-size: 20px;">{a < x &#8804; b}</td> 
                <td title="Restricting x  ; " onclick="ineq11()"   onmouseout="display2()" onmouseover="display(8)" class="btsred" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;  width:150px; height:45px; font-size: 20px;">{a < x < b} </td> 
            </tr> 
        </table> 
        <table> 
            <tr> 
                <td  title="Restricting x  ; Example: g(y) = 4y + 1 {y &#8804; 1 } " onclick="ineq1B()"   onmouseout="display2()" onmouseover="display(8)" class="btsred" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;  width:300px; height:45px; font-size: 20px;">{y &#8804; }</td> 
                <td title="Restricting x  ; Example: g(y) = 4y + 1 {y < 1 } "  onclick="ineq2B()"    onmouseout="display2()" onmouseover="display(8)"  class="btsred" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;  width:300px; height:45px; font-size: 20px;">{y &lt; }</td> 
                <td title="Restricting x  ; Example: g(y) = 4y + 1 {y &#8805; 1 } " onclick="ineq3B()"   onmouseout="display2()" onmouseover="display(8)" class="btsred" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;  width:300px; height:45px; font-size: 20px;">{y &#8805; }</td> 
                <td title="Restricting x  ; Example: g(y) = 4y + 1 {y > 1 } "   onclick="ineq4B()"    onmouseout="display2()" onmouseover="display(8)"  class="btsred" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;  width:300px; height:45px; font-size: 20px;">{y &gt; }</td> 
                <td title="Restricting x  ; Example: g(y) = 4y + 1 {y &#8800; 1 } " onclick="ineq5B()"   onmouseout="display2()" onmouseover="display(8)" class="btsred" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;  width:300px; height:45px; font-size: 20px;">{y &#8800; } </td> 
                <td title="Restricting x  ; Example: g(y) = 4y + 1 {y = 1 } " onclick="ineq5B()"   onmouseout="display2()" onmouseover="display(8)" class="btsred" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;  width:300px; height:45px; font-size: 20px;">{y = } </td> 

             </tr> 
        </table> 
        <table> 
            <tr> 
                <td title="Restricting x  ;  "   onclick="ineq7B()"    onmouseout="display2()" onmouseover="display(8)"  class="btsred" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;  width:600px; height:45px; font-size:20px;">{a &#8804; y &#8804; b}</td> 
                <td title="Restricting x  ;  " onclick="ineq8B()"   onmouseout="display2()" onmouseover="display(8)" class="btsred" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;  width:600px; height:45px; font-size:20px;">{a &#8804; y < b} </td> 
                <td title="Restricting x  ; "   onclick="ineq9B()"    onmouseout="display2()" onmouseover="display(8)"  class="btsred" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;  width:600px; height:45px; font-size:20px;">{a < y &#8804; b}</td> 
                <td title="Restricting x  ; " onclick="ineq10B()"   onmouseout="display2()" onmouseover="display(8)" class="btsred" style="border-style: solid; border-width: 1px; border-color: black; text-align: center;  width:600px; height:45px; font-size:20px;">{a < y < b} </td> 
            </tr> 
        </table> 

     </div> 
     <br>
     <button onclick="document.getElementById('panel3').style.display = 'none'"  type="button" style ="text-align: center; width: 570px;height:45px ;font-size: 24px;background-color:#b6ff00">Hide</button>  </td>    


    */}.toString().slice(14,-1);       
    var myString2 = (myString.toString()).replace('*/}', '');
    myString2 = myString2.replace('*/', '');
   
    document.getElementById('panel3').style.display = 'inline-block';
    document.getElementById('panel3').innerHTML = myString2;    
}


 
 
 
 	
/********************************************************************************
 *   The following functions are used to input text from selected key on keypad
*********************************************************************************/		

   //Function for keyboard: Inputs 0-9 		
    function num(xs) {
        //var x = xs.toString();
        var symbol = xs.toString();
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, 0, 0);

    }
 		
    //Function for keyboard: Inputs "(/)"		
    function parentheses3() {		 
        symbol = "(/)";		
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -2,0);
	    return; 
    }		
                		

//Function for keyboard: Inputs "[[]]"		
     function doublebracket() {		 
        symbol = "[[]]";		
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -2,0);
	    return; 
    }	
 		
//Function for keyboard: Inputs "["		
     function leftbracket() {		 
        symbol = "[";		
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, 0,0);
	    return; 
    }	
 		
//Function for keyboard: Inputs "]"		
     function rightbracket() {		 
        symbol = "]";		
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -1,0);
	    return; 
    }	
 		

 		
//Function for keyboard: Inputs "{"		
     function leftbrace() {		 
        symbol = "{";		
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, 0,0);
	    return; 
    }	
 		
//Function for keyboard: Inputs "}"		
     function rightbrace() {		 
        symbol = "}";		
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -1,0);
	    return; 
    }	
 		

//Function for keyboard: Inputs "("		
     function leftparenthesis() {		 
        symbol = "(";		
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, 0,0);
	    return; 
    }	
 		
//Function for keyboard: Inputs "}"		
     function rightparenthesis() {		 
        symbol = ")";		
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -1,0);
	    return; 
    }	

    //Function for keyboard: Inputs "()/()"		
    function parentheses2() {		
            		
        var symbol = "( )/( )";	
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, -6, 0);
	    return;             	
    }		
      		
 		
    //Function for keyboard: Inputs "log()/Log()"		
    function LogLog() {		
            		
        var symbol = "Log()/Log()";		
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, -7, 0);
	    return; 
    }		
      		
 		
    //Function for keyboard: Inputs  ε		
    function epsilon() {		
        var symbol = String.fromCharCode(949);		
        symbol = symbol.replace(" ", "");		
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, 0, 0);
	    return;  
    }				
 
     //Function for keyboard: Inputs  δ				 
    function delta() {		
        var symbol = String.fromCharCode(948);		
        symbol = symbol.replace(" ", "");		
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, 0, 0);
	    return;  
    }				

 
    function clearrr2() {
        var symbol = '';
        var FocusID = document.getElementById('CurrentFocusID').value;
        document.getElementById(FocusID).value = '';
        return;
    }
 

     //Function for keyboard: Inputs  x² or x² + x 		
    function sup2(valnum) {
        if(valnum==21){var val=''};
        if(valnum==22){var val='x'};
        if(valnum==23){var val='y'};
        if(valnum==24){var val='p'};
        if(valnum==25){var val='t'};

        var symbol = val+String.fromCharCode(178);
        if(val == 'p'){
            symbol = 'x'+ String.fromCharCode(178) + ' + x ';
        }
        symbol = symbol.replace(" ", "");		
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, 0, 0);
	    return; 
 
    }		
         		
    		
 		
     //Function for keyboard: Inputs  x³ or x³ + x² + x 		
    function sup3(valnum) {		
        if(valnum==21){var val=''};
        if(valnum==22){var val='x'};
        if(valnum==23){var val='y'};
        if(valnum==24){var val='p'};
        if(valnum==25){var val='t'};
        var symbol = val+String.fromCharCode(179);		
        if(val == 'p'){
            symbol = 'x'+ String.fromCharCode(179) + ' + x'+ String.fromCharCode(178) + ' + x ';
        }
        symbol = symbol.replace(" ", "");	
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, 0, 0);
	    return;             

    }		
  		
        		
           		
     //Function for keyboard: Inputs x⁴ or  x⁴ + x³ + x² + x  		
    function sup4(valnum) {		
        if(valnum==21){var val=''};
        if(valnum==22){var val='x'};
        if(valnum==23){var val='y'};
        if(valnum==24){var val='p'};
        if(valnum==25){var val='t'};
        var symbol = val+String.fromCharCode(8308);	
        if(val == 'p'){
            symbol = 'x'+ String.fromCharCode(8308) + ' + x'+ String.fromCharCode(179) + ' + x'+ String.fromCharCode(178) + ' + x ';
        }        	
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, 0, 0);
	    return;        
    }		
   		
 		
 		
     //Function for keyboard: Inputs	x⁵ + x⁴ + x³ + x² + x  	
    function sup5(valnum) {		
        if(valnum==21){var val=''};
        if(valnum==22){var val='x'};
        if(valnum==23){var val='y'};
        if(valnum==24){var val='p'};
        if(valnum==25){var val='t'};
        var symbol = val+String.fromCharCode(8309); 
        if(val == 'p'){
            symbol = 'x'+ String.fromCharCode(8309) +  ' + x'+ String.fromCharCode(8308) + ' + x'+ String.fromCharCode(179)
                   + ' + x'+ String.fromCharCode(178) + ' + x ';
        }          		
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, 0, 0);
	    return;         
    }		
     		
 		
 		
     //Function for keyboard: Inputs x⁶ or x⁶ + x⁵ + x⁴ + x³ + x² + x  		
    function sup6(valnum) {		
         if(valnum==21){var val=''};
        if(valnum==22){var val='x'};
        if(valnum==23){var val='y'};
        if(valnum==24){var val='p'};
        if(valnum==25){var val='t'};
        var symbol = val+String.fromCharCode(8310); 	
        if(val == 'p'){
            symbol = 'x'+ String.fromCharCode(8310) +  ' + x'+ String.fromCharCode(8309) +  ' + x'+ String.fromCharCode(8308) 
                   + ' + x'+ String.fromCharCode(179)
                   + ' + x'+ String.fromCharCode(178) + ' + x ';
        }          	
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, 0, 0);
	    return;         
   }		
     		
 		
     //Function for keyboard: Inputs x^7 + x⁶ + x⁵ + x⁴ + x³ + x² + x   		
        function sup7(valnum) {	
        if(valnum==21){var val=''};
        if(valnum==22){var val='x'};
        if(valnum==23){var val='y'};
        if(valnum==24){var val='p'};
        if(valnum==25){var val='t'};    	
        var symbol = val+String.fromCharCode(8311); 	
        if(val == 'p'){
            symbol = 'x^7' + ' + x'+ String.fromCharCode(8310) +  ' + x'+ String.fromCharCode(8309) +  ' + x'
                   + String.fromCharCode(8308) 
                   + ' + x'+ String.fromCharCode(179)
                   + ' + x'+ String.fromCharCode(178) + ' + x ';
        }          	
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, 0, 0);
	    return;         
    }		
     		 						
 		
    //Function for keyboard: Inputs  " + "
    function plus() {
        var symbol = " + ";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, 0, 0);
        return;
    }

    //Function for keyboard: Inputs  " - "
    function minus() {
         
        var symbol = " - ";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, 0, 0);
        return;
    }


    //Function for keyboard: Inputs  "*"
    function mult() {
        var symbol = "*";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, 0, 0);
        return;
        
    }


    //Function for keyboard: Inputs  "/"
    function div2() {
        //var val = document.getElementById('fractionreminder').value;
        //document.getElementById('fractionreminder').value = parseFloat(val) + 1;

        //if (parseFloat(val) <= 1) {
        //    window.open("../GraphingCalculator1/fracexample.png", "fracexample", "width=650,height=500");
        //}
        var symbol = "/";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, -2, 0);

        return;
    }


    //Function for keyboard: Inputs  "(/)"
    function div3() {
        var val = document.getElementById('fractionreminder').value;
        document.getElementById('fractionreminder').value = parseFloat(val) + 1;

        if (parseFloat(val) <= 1) {
            //alert('tt1');
            //window.location="../GraphingCalculator1/fracexample.png";
            window.open("../GraphingCalculator1/fracexample.png", "fracexample", "width=650,height=500");
            //alert('tt2');
        }

        var symbol = "(/)";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, -2, 0);

        return;
    }

    //Function for keyboard: Inputs  "."
    function decimalll() {
        var symbol = ".";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, 0, 0);

        return;
    }

    //Function for keyboard: Inputs  "()"
    function parentheses() {
        var symbol = "()";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, -1, 0);

        return;
    }

    function openp2() {
        var symbol = "(";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, -1, 0);

        return;
    }

    function openp3() {
        var symbol = "(";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, -1, 0);

        return;
    }

    //Function for keyboard: Inputs  "(/)"
    function closep() {
        var symbol = "(/)";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, -2, 0);

        return;
    }       

    //Function for keyboard: Inputs  π
    function pi() {
        var symbol = String.fromCharCode(960);
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, 0, 0);

        return;
    }

    //Function for keyboard: Inputs  π/2
    function pi2() {
        var symbol = String.fromCharCode(960)+'/2';
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, 0, 0);

        return;
    }

    //Function for keyboard: Inputs  π/3
    function pi3() {
        var symbol = String.fromCharCode(960)+'/3';
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, 0, 0);

        return;
    }

    //Function for keyboard: Inputs  π/4
    function pi4() {
        var symbol = String.fromCharCode(960)+'/4';
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, 0, 0);

        return;
    }

    //Function for keyboard: Inputs  π/6
    function pi6() {
        var symbol = String.fromCharCode(960)+'/6';
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, 0, 0);

        return;
    }

    //Function for keyboard: Inputs  π/12
    function pi12() {
        var symbol = String.fromCharCode(960)+'/12';
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, 0, 0);

        return;
    }

    //Function for keyboard: Inputs  "10^()"
    function TenN() {

        var symbol = "10^()";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -1,0);

        return;

    }

    //Function for keyboard: Inputs "(2.718281828459)"
    function econstant2() {
             
        var symbol = "(2.718281828459)";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, 0, 0);

        return;
    }

    //Function for keyboard: Inputs "(2.718281828459)^()"
    function econstant3() {
        
        var symbol = "(2.718281828459)^()";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -1,0);

        return;
    }

    //Function for keyboard: Inputs "-"
    function plus_or_minus() {
        var symbol = "-";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, 0, 0);
        return;
    }


     //Function for keyboard: Inputs √ ̅()
    function root2() {
        var symbol1 = String.fromCharCode(947);
        var symbol2 = String.fromCharCode(8260);
        var symbol3 = String.fromCharCode(8254);  //overline        
        var symbol4 = String.fromCharCode(8730);  //square root     
        var symbol5 = String.fromCharCode(8731);  //cuberoot        
        var symbol6 = String.fromCharCode(8732);  //4th root        
        var symbol7 = String.fromCharCode(773);  //overline (on top of a character)     
        var symbol8 = String.fromCharCode(160);   //space       
                  
        var symbol = symbol4 + symbol8 + symbol7 + "(x)";

        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -2,0);

        return;

    }

    //Function for keyboard: Inputs ∛ ̅()
    function root3() {
        var symbol1 = String.fromCharCode(947);
        var symbol2 = String.fromCharCode(8260);
        var symbol3 = String.fromCharCode(8254);
        var symbol4 = String.fromCharCode(8730);  //square root     
        var symbol5 = String.fromCharCode(8731);  //cuberoot        
        var symbol6 = String.fromCharCode(8732);  //4th root        
        var symbol7 = String.fromCharCode(773);  //overline (on top of a character)     
        var symbol8 = String.fromCharCode(160);   //space       
        
        var symbol = symbol5 + symbol8 + symbol7 + "(x)";

        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, -2, 0);

        return;

    }

    //Function for keyboard: Inputs ∜ ̅()
    function Root(num) {
        if(num <= 10){
            var symbol = "Root" + num +"()";
            var FocusID = document.getElementById('CurrentFocusID').value;
            insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -1,0);
            return;            
        }
        else{
            var symbol = "()^(1/" + num +")";
            var FocusID = document.getElementById('CurrentFocusID').value;
            insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -8,0);
            return;             
        }



    }

    //Function for keyboard: Inputs ∜ ̅()
    function root4() {
        var symbol1 = String.fromCharCode(947);
        var symbol2 = String.fromCharCode(8260);
        var symbol3 = String.fromCharCode(8254);  //overline        
        var symbol4 = String.fromCharCode(8730);  //square root     
        var symbol5 = String.fromCharCode(8731);  //cuberoot        
        var symbol6 = String.fromCharCode(8732);  //4th root        
        var symbol7 = String.fromCharCode(773);  //overline (on top of a character)     
        var symbol8 = String.fromCharCode(160);   //space       
                  
        var symbol = symbol6 + symbol8 + symbol7 + "()";

        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -1,0);

        return;
 
    }

    //Function for keyboard: Inputs "^()"
    function power(valnum) {
        if(valnum==21){var val=''};
        if(valnum==22){var val='x'};
        if(valnum==23){var val='y'};
        if(valnum==24){var val='p'};
        if(valnum==25){var val='t'};   
        var symbol = val+"^()";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, -1, 0);

        return;
    }



    //Function for keyboard: backspace
    function leftdel() {      
        var symbol = '';
        var FocusID = document.getElementById('CurrentFocusID').value;
        //insertAtCaret2(document.getElementById(FocusID), symbol,  -1, 0,-1,0);
        insertAtCaret(document.getElementById(FocusID), symbol, -1, 0,-1,0);

        return;
    }

    //Function for keyboard: delete
    function rightdel() {        
        var symbol = '';
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 1,0,0);

        return;
    }

    //Function for keyboard: Moves left
    function leftarrow() {
        
        var symbol = '';
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, -1,0);

        return;
    }


    //Function for keyboard: Moves right
    function rightarrow() {
            
        var symbol = '';
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, 1, 2);

        return;
    }

    

    //Function for keyboard: Inputs  ()x² + ()x 
    function Polynomial2() {
        var symbol = "()x" + String.fromCharCode(178) + " + ()x";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, 1, 2);

        return;
    }

   //Function for keyboard: Inputs ()x³ + ()x² + ()x 
    function Polynomial3() {
        var symbol = "()x" + String.fromCharCode(179) + " + ()x" + String.fromCharCode(178) + " + ()x";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, 1, 2);

        return;
    }
    
   //Function for keyboard: Inputs  ()x⁴ + ()x³ + ()x² + ()x 
    function Polynomial4() {
        var symbol = "()x" + String.fromCharCode(8308) + " + ()x" + String.fromCharCode(179)
                       + " + ()x" + String.fromCharCode(178) + " + ()x";

        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, 1, 2);

        return;
    }
    
   //Function for keyboard: Inputs   ()x⁵ + ()x⁴ + ()x³ + ()x² + ()x 
    function Polynomial5() {
        var symbol = "()x" + String.fromCharCode(8309) + " + ()x" + String.fromCharCode(8308)
                       + " + ()x" + String.fromCharCode(179) + " + ()x" + String.fromCharCode(178)
                       + " + ()x";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, 1, 2);

        return;
    }
    
   //Function for keyboard: Inputs  ()x⁶ + ()x⁵ + ()x⁴ + ()x³ + ()x² + ()x 
    function Polynomial6() {
        var symbol = "()x" + String.fromCharCode(8310)
                       + " + ()x" + String.fromCharCode(8309) + " + ()x" + String.fromCharCode(8308)
                       + " + ()x" + String.fromCharCode(179) + " + ()x" + String.fromCharCode(178)
                       + " + ()x";

        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, 1, 2);

        return;
    }

    //Function for keyboard: Inputs  ()x^7 + ()x⁶ + ()x⁵ + ()x⁴ + ()x³ + ()x² + ()x 
    function Polynomial7() {
        var symbol = "()x^7" + " + ()x" + String.fromCharCode(8310)
                       + " + ()x" + String.fromCharCode(8309) + " + ()x" + String.fromCharCode(8308)
                       + " + ()x" + String.fromCharCode(179) + " + ()x" + String.fromCharCode(178)
                       + " + ()x";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, 1, 2);

        return;
    }


   //Function for keyboard: Inputs "Acot()"
    function Acot() {
        var symbol = "Acot(x)";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -1,0);

        return;

    }

    //Function for keyboard: Inputs "Acsc()"
    function Acsc() {
        var symbol = "Acsc(x)";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -1,0);

        return;
    }

    //Function for keyboard: Inputs "Asec()"
    function Asec() {
        var symbol = "Asec(x)";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -1,0);

        return;
    }

    //Function for keyboard: Inputs "Cos()"
    function cos() {
        //document.getElementById('TextBoxForCartesianGraph1').value += "Cos(";     
        var symbol = "Cos(x)";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -1,0);

        return;
    }

    //Function for keyboard: Inputs "Cosh()"
    function Cosh() {
        //document.getElementById('TextBoxForCartesianGraph1').value += "Cos(";     
        var symbol = "Cosh(x)";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -1,0);

        return;
    }

    //Function for keyboard: Inputs "Sinh()"
    function Sinh() {
        //document.getElementById('TextBoxForCartesianGraph1').value += "Cos(";     
        var symbol = "Sinh(x)";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -1,0);

        return;
    }

    //Function for keyboard: Inputs "Tanh()"
    function Tanh() {
        //document.getElementById('TextBoxForCartesianGraph1').value += "Cos(";     
        var symbol = "Tanh(x)";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -1,0);
        return;
    }

    //Function for keyboard: Inputs "Sech()" 
    function Sech() {
        //document.getElementById('TextBoxForCartesianGraph1').value += "Cos(";     
        var symbol = "Sech(x)";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -1,0);

        return;

    }

    //Function for keyboard: Inputs "Csch()"
    function Csch() {
        //document.getElementById('TextBoxForCartesianGraph1').value += "Cos(";     
        var symbol = "Csch(x)";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -1,0);

        return;
    }

    //Function for keyboard: Inputs "Coth()"
    function Coth() {
        //document.getElementById('TextBoxForCartesianGraph1').value += "Cos(";     
        var symbol = "Coth(x)";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -1,0);

        return;
    }

    //Function for keyboard: Inputs "InvCosh()"
    function InvCosh() {
        //document.getElementById('TextBoxForCartesianGraph1').value += "Cos(";     
        var symbol = "InvCosh(x)";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -1,0);

        return;
    }

    //Function for keyboard: Inputs "InvSinh()"
    function InvSinh() {
        //document.getElementById('TextBoxForCartesianGraph1').value += "Cos(";     
        var symbol = "InvSinh(x)";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -1,0);

        return;
    }

    //Function for keyboard: Inputs "InvTanh()"
    function InvTanh() {
        //document.getElementById('TextBoxForCartesianGraph1').value += "Cos(";     
        var symbol = "InvTanh(x)";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -1,0);
        return;
    }

    //Function for keyboard: Inputs "Sech()" 
    function InvSech() {
        //document.getElementById('TextBoxForCartesianGraph1').value += "Cos(";     
        var symbol = "InvSech(x)";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -1,0);

        return;

    }

    //Function for keyboard: Inputs "Csch()"
    function InvCsch() {
        //document.getElementById('TextBoxForCartesianGraph1').value += "Cos(";     
        var symbol = "InvCsch(x)";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -1,0);

        return;
    }

    //Function for keyboard: Inputs "Coth()"
    function InvCoth() {
        //document.getElementById('TextBoxForCartesianGraph1').value += "Cos(";     
        var symbol = "InvCoth(x)";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -1,0);

        return;
    }
        
    //Function for keyboard: Inputs "Sin()"
    function sin() {
        //document.getElementById('TextBoxForCartesianGraph1').value += "Sin(";     
        var symbol = "Sin(x)";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -1,0);

        return;
    }

    //Function for keyboard: Inputs "Tan()"
    function tan() {
        //document.getElementById('TextBoxForCartesianGraph1').value += "Tan(";     
        var symbol = "Tan(x)";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -1,0);

        return;
    }

    //Function for keyboard: Inputs "ACos()"
    function Acos() {
        //document.getElementById('TextBoxForCartesianGraph1').value += "ACOS(";        
        var symbol = "ACos(x)";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -1,0);

        return;
    }

    //Function for keyboard: Inputs "Asin()"
    function Asin() {

        //document.getElementById('TextBoxForCartesianGraph1').value += "ASIN(";        
        var symbol = "Asin(x)";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -1,0);

        return;
    }

    //Function for keyboard: Inputs "Atan()"
    function Atan() {
        //document.getElementById('TextBoxForCartesianGraph1').value += "ATAN(";        
        var symbol = "Atan(x)";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -1,0);

        return;
    }

    //Function for keyboard: Inputs "Csc()"
    function csc() {
        //document.getElementById('TextBoxForCartesianGraph1').value += "COS_deg(";     
        var symbol = "Csc(x)";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -1,0);

        return;
    }

    //Function for keyboard: Inputs "Sec()"
    function sec() {
        var symbol = "Sec(x)";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -1,0);

        return;
    }

    //Function for keyboard: Inputs "Cot()"
    function cot() {
        var symbol = "Cot(x)";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -1,0);

        return;
    }

    //Function for keyboard: Inputs "Ln()"
    function log() {
        //document.getElementById('TextBoxForCartesianGraph1').value += "Ln(";      
        var symbol = "Ln(x)";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -1,0);

        return;
    }

    //Function for keyboard: Inputs "Log()"
    function log10() {
        //document.getElementById('TextBoxForCartesianGraph1').value += "Log(";     
        var symbol = "Log(x)";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -1,0);

        return;
    }
    
    //Function for keyboard: Inputs "( )^(1/ )"
    function nthRoot2() {
        var symbol = "( )^(1/ )";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, -8, 0);

        return;
    }

    //Function for keyboard: Inputs "Power(;)"
    function Power2() {              
        var symbol = "Power(;)";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, -2, 0);

        return;
    }

    //Function for keyboard: Inputs "Power(;)"
    function factorial() {              
        var symbol = "fac()";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, -1, 0);

        return;
    }

    //Function for keyboard: Inputs "x"
    function xvariable() {
        var symbol = "x";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, 0, 0);
        
        return;
    }

    //Function for keyboard: Inputs "y"
    function yvariable() {
        var symbol = "y";        
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, 0, 0);
        
        return;
    }

    //Function for keyboard: Inputs "t"
    function tvariable() {
        var symbol = "t";
        var ListFuncOps = ['ParametricX1', 'ParametricY1', 'ParametricX2', 'ParametricY2'];
        var FocusID = document.getElementById('CurrentFocusID').value;

        for (indx = 0; indx < ListFuncOps.length; indx++) {
            if (FocusID == ListFuncOps[indx]) {
                insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, 0, 0);
                break;
            }
        }

        return;

    }
    
    //Function for keyboard: Inputs θ
    function theta() {
        
        var symbol = String.fromCharCode(952);   //theta   
        var ListFuncOps = ['PolarEquation1', 'PolarEquation2', 'PolarEquation3', 'PolarEquation4'];
        var FocusID = document.getElementById('CurrentFocusID').value;

        for (indx = 0; indx < ListFuncOps.length; indx++) {
            if (FocusID == ListFuncOps[indx]) {
                insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, 0, 0);
                break;
            }
        }

        return;

    }

    //Function for keyboard: Inputs "Abs()"
    function Abs() {
        var symbol = "Abs()";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, -1, 0);
        return;
    }

    //Function for keyboard: Inputs "| |"
    function Abs2() {
        var symbol = "| |";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, -1, 0);
        return;
    }

    //Function for keyboard: Inputs "Log()"
     function log10b() {
        //document.getElementById('TextBoxForCartesianGraph1').value += "Log(";     
        var symbol = "Log()";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, -1, 0);

        return;
    }


    //Function for keyboard: Inputs ";"
    function comma() {
        var symbol = ";";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, 0, 0);
        return;
    }



    //Function for keyboard: Inputs ";"
    function comma2() {
        var symbol = ",";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, 0, 0);
        return;

    }

    //Function for keyboard: Inputs {x ≤ }
    function ineq1() {
        var symbol = "{x " + String.fromCharCode(8804) + " }";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -1,0);
        return;
    }


    //Function for keyboard: Inputs {x < }
    function ineq2() {
        var symbol = "{x < " + " }";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -1,0);
        return;
    }

    //Function for keyboard: Inputs {x ≥ }
    function ineq3() {
        var symbol = "{x " + String.fromCharCode(8805) + " }";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -1,0);
        return;
    }

    //Function for keyboard: Inputs {x > } 
    function ineq4() {
        var symbol = "{x > " + " }";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -1,0);
        return;
    }

    //Function for keyboard: Inputs {x ≠ }
    function ineq5() {
        var FocusID = document.getElementById('CurrentFocusID').value;
        var symbol = "{x " + String.fromCharCode(8800) + " }";
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -1,0);
        return;
    }

    //Function for keyboard: Inputs {x = }
    function ineq6() {
        var symbol = "{x = " + " }";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -1,0);
        return;
    }

    //Function for keyboard: Inputs  { ≤ x ≤ }
    function ineq8() {
        var symbol = " { " + String.fromCharCode(8804) + " x " + String.fromCharCode(8804) + " }";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -1,0);
        return;
    }

    //Function for keyboard: Inputs   { ≤ x < }
    function ineq9() {
        var symbol = " { " + String.fromCharCode(8804) + " x <  }";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -1,0);
        return;
    }

    //Function for keyboard: Inputs   { < x ≤ }
    function ineq10() {
        var symbol = " { < " + " x " + String.fromCharCode(8804) + " }";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -1,0);
        return;
    }

    //Function for keyboard: Inputs   { < x < }
    function ineq11() {
        var symbol = " { < x < }"; 
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -1,0);
        return;
    }

    //Function for keyboard: Inputs {}
    function ineq20() {
        var symbol = " { }"; 
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -1,0);
        return;
    }


    //Function for keyboard: Inputs "if"
    function ineq20bb() {
        var symbol = " if "; 
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol,0,0,0,0);
        return;
    }

    //Function for keyboard: Inputs "x"
    function ineq21() {
        var symbol =  "x" ;
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, 0,0);
        return;
    }

    //Function for keyboard: Inputs   ≤
    function ineq22() {
        var symbol = " " + String.fromCharCode(8804) + " ";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, 0,0);
        return;
    }


    //Function for keyboard: Inputs <
    function ineq23() {
        var symbol =  " < " ;
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -1,0);
        return;
    }

    //Function for keyboard: Inputs ≥
    function ineq24() {
        var symbol = " " + String.fromCharCode(8805) + " " ;
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -1,0);
        return;
    }

    //Function for keyboard: Inputs >
    function ineq25() {
        var symbol =  " > " ;
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -1,0);
        return;
    }

    //Function for keyboard: Inputs ≠
    function ineq26() {
        var symbol = " " + String.fromCharCode(8800) + " ";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0,0 ,0);
        return;
    }

    //Function for keyboard: Inputs =
    function ineq27() {
        var symbol =  " = " ; 
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, 0,0);
        return;
    }


    //Function for keyboard: Inputs  {y ≤ }
    function ineq1B() {
        var symbol = "{y " + String.fromCharCode(8804) + " }";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -1,0);
        return;
    }

    //Function for keyboard: Inputs  {y < }
    function ineq2B() {
        var symbol = "{y < " + " }";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -1,0);
        return;
    }

    //Function for keyboard: Inputs  {y ≥ }
    function ineq3B() {
        var symbol = "{y " + String.fromCharCode(8805) + " }";
       var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -1,0);
        return;
    }

    //Function for keyboard: Inputs {y > }
    function ineq4B() {
        var symbol = "{y > " + " }";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -1,0);
        return;
    }

    //Function for keyboard: Inputs {y ≠ } 
    function ineq5B() {
        var symbol = "{y " + String.fromCharCode(8800) + " }";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -1,0);
        return;
    }

    //Function for keyboard: Inputs {y = }
    function ineq6B() {
        var symbol = "{y = " + " }";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -1,0);
        return;
    }

    //Function for keyboard: Inputs { ≤ y ≤  }
    function ineq7B() {
        var symbol = "{" + String.fromCharCode(8804) + " y " + String.fromCharCode(8804) + " }";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -7,0);
        return;
    }


    //Function for keyboard: Inputs { ≤ y < }
    function ineq8B() {
        var symbol = "{" + String.fromCharCode(8804) + " y " + String.fromCharCode(60) + " }";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -7,0);
        return;
    }

    //Function for keyboard: Inputs { < y ≤ }
    function ineq9B() {
        var symbol = "{" + String.fromCharCode(60) + " y " + String.fromCharCode(8804) + " }";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -7,0);
        return;
    }

    //Function for keyboard: Inputs { < y < }
    function ineq10B() {
        var symbol = "{" + String.fromCharCode(60) + " y " + String.fromCharCode(60) + " }";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -7,0);
        return;
    }



    
 //Function for keyboard: Inputs -∞
  function neginfinity() {          
        var symbol = "-"+String.fromCharCode(8734) ;
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, 0, 0);
        return;
    }

    //Function for keyboard: Inputs ∞
    function posinfinity() {          
        var symbol = String.fromCharCode(8734) ;
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, 0, 0);
        return;
    }

    //Function for keyboard: Inputs <
    function lessthan() {          
        var symbol = " < ";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, 0, 0);
        return;
    }

    //Function for keyboard: Inputs -∞
    function greaterthan() {          
        var symbol = " > ";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, 0, 0);
        return;
    }

    //Function for keyboard: Inputs =
    function equal() {          
        var symbol = " = ";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, 0, 0);
        return;
    }


    //Function for keyboard: Inputs " < x < "
    function xinterval1() {          
        var symbol = " < x < ";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, -7, 0);
        return;
    }


    //Function for keyboard: Inputs ≤ x ≤
    function xinterval2() {          
        var symbol = String.fromCharCode(8804) + " x " + String.fromCharCode(8804) ;
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, -7, 0);
        return;
    }


    //Function for keyboard: Inputs  ≤ x <
    function xinterval3() {          

        var symbol = "-"+String.fromCharCode(8734) + " x < ";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, 0, 0);
        return;
    }


    //Function for keyboard: Inputs  < x <
    function xinterval4() {          
        var symbol = "< x < "+String.fromCharCode(8734);
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, -7, 0);
        return;
    }

    //Function for keyboard: Inputs  ≤  ≤
    function xinterval5() {          
        var spc = String.fromCharCode(160);		//space
        var symbol = String.fromCharCode(8804) + spc + spc + String.fromCharCode(8804);
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, -7, 0);
        return;
    }

    //Function for keyboard: Inputs  ≤  <
    function xinterval6() {          
        var spc = String.fromCharCode(160);		//space
        var symbol = String.fromCharCode(8804) + spc + " < ";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, -7, 0);
        return;
    }

    //Function for keyboard: Inputs  <  ≤
    function xinterval7() {          
        var spc = String.fromCharCode(160);		//space
        var symbol = "<  " + spc + String.fromCharCode(8804) ;
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, -7, 0);
        return;
    }

    //Function for keyboard: Inputs < L
    function xinterval8() {         
       var spc = String.fromCharCode(160);	 
        var symbol = "< " + spc + " < " ;
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, -7, 0);
        return;
    }




    //Function for keyboard: Inputs "/"
    function div4() {
        var symbol = "/";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, 0, 0);

        return;
    }

//***************End of Keyboard section*****************************






/*------------------------------------------------------------------------------
* NAME       :  keyboardlayoutSecond
* PURPOSE    :  Creates secondary keypad for writing text over grid
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function keyboardlayoutSecond(divname) {
        document.getElementById('textovergrid22').style.display = 'inline-block';
        var text = ''
        + '<button onclick="keypadforgrid(63)" style="background-color: silver;height:45px">Second Panel</button>' 
        + '<button onclick="greekalphabet()" style="background-color: silver;height:45px">Math Symbols</button>' 

        + '<br>'
        + '<button style = "width:100px; height:45px; font-size: 20px;" onclick="keypadforgrid(64)">x<sub>0</sub>,...,x<sub>n</sub></button>'
        + '<button style = "width:100px; height:45px; font-size: 20px;" onclick="keypadforgrid(65)">∑f(x)Δx</button>'
        + '<button style = "width:100px; height:45px; font-size: 20px;" onclick="keypadforgrid(66)">∫f(x)dx</button>'
        + '<button style = "width:100px; height:45px; font-size: 20px;" onclick="keypadforgrid(6678)">Log</button>'
        + '<button style = "width:110px; height:45px; font-size: 20px;" onclick="keypadforgrid(6645)">Fraction</button>'
        + '<br>'
        + '<button style = "width:110px; height:45px; font-size: 20px;" onclick="keypadforgrid(67)">limit</button>'

        +'</div>' ;   
  
        document.getElementById(divname).innerHTML = text;


        var forloop1 = '';
        for(var i=1; i<= 20; i++){
            var value = 'value=' + i; 
            var color = 'color: ' + graphcolor(i);
            forloop1 = forloop1   
            +'<option ' + value + ' style="font-weight: bold;background-color:white ; ' + color + '">'
            +'Text Color ' + i
            +'</option>;'

         }	

        var forloop2 = '';
        for(var i=1; i<= 20; i++){
            var value = 'value=' + i; 
            forloop2 = forloop2   
            +'<option  ' + value + ' style="font-weight: bold;background-color:white ">'
            +'Font Size ' + (i*10)
            +'</option>;'

         }




    var text2 = ''
    +'<span style="font-size: 20px;  ">Writing Text</span>'
    +'<br>'
    +'<select id="mydropdowntextovergrid1" style="font-weight: 300; width: 150px; height: 30px; font-size: 16px;background-color: #eae6e0;"  onchange="mydropdowntextovergrid11()">'
    +'    <option value= "0">'        
    +'        select a color'
    +'    </option>;'
    +  forloop1 
    +'</select>' 	 
    +'&nbsp; &nbsp;'  
    +'<select id="mydropdowntextovergrid2" style="font-weight: 300; width: 150px; height: 30px; font-size: 16px;background-color: #eae6e0;"  onchange="mydropdowntextovergrid22()">'
    +'    <option value= "0">'        
    +'        select font size'
    +'    </option>;'
    +  forloop2 
    +'  </select>' 	 
    +'   &nbsp; &nbsp;'  
    +'   <button onclick="Textboxongrid22BB()" type="button" style ="text-align: center; height: 30px; width: 80px;background-color: #ffd800; font-size: 20px">close</button>'
    +'   &nbsp; &nbsp;'  
    +'   <button onclick="keypadforgrid(6348)" type="button" style ="text-align: center; height: 30px; width: 80px;background-color: cyan; font-size: 20px">clear</button>'
    +'   <br>'
    ;

    document.getElementById('textovergridarea').innerHTML = text2;


}


/*------------------------------------------------------------------------------
* NAME       :  mydropdowntextovergrid11
* PURPOSE    :  Displays textbox with features for writing text over grid
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function mydropdowntextovergrid11(){  
        document.getElementById("Textboxongrid").focus();
        var val = document.getElementById('mydropdowntextovergrid1').value;
        var color = graphcolor(val);
        if (val > 0){
            document.getElementById('Textboxongrid').style.color = color;
            document.getElementById('mydropdowntextovergrid1').style.color = color;
            //document.getElementById('mydropdowntextovergrid1').style.fontWeight = "bold";
        }

        
        return;
    }

/*------------------------------------------------------------------------------
* NAME       :  mydropdowntextovergrid22
* PURPOSE    :  Displays textbox with features for writing text over grid
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function mydropdowntextovergrid22(){
        document.getElementById("Textboxongrid").focus();
        var val = document.getElementById('mydropdowntextovergrid2').value;
        var size = graphcolor(val);
        if (val > 1){
            document.getElementById('Textboxongrid').style.fontSize = parseFloat(val)*10 + 'px';
        }
    }



/*------------------------------------------------------------------------------
* NAME       :  mydropdowntextovergrid22
* PURPOSE    :  Displays textbox with features for writing text over grid
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function mydropdowntextovergrid22bb(){
        document.getElementById("integralsym").focus();
        var val = document.getElementById('mydropdowntextovergrid2bb').value; 
        var size = graphcolor(val);
        if (val > 1){
            document.getElementById('integralsym').style.fontSize = parseFloat(val)*10 + 'px';
        }
    }

/*------------------------------------------------------------------------------
* NAME       :  mydropdowntextovergrid11bb
* PURPOSE    :  Displays textbox with features for writing text over grid
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function mydropdowntextovergrid11bb(){  
        document.getElementById("integralsym").focus();
        var val = document.getElementById('mydropdowntextovergrid1bb').value; 
        var color = graphcolor(val);
        if (val > 0){
            document.getElementById('integralsym').style.color = color;
            document.getElementById('mydropdowntextovergrid1bb').style.color = color;
            //document.getElementById('mydropdowntextovergrid1').style.fontWeight = "bold";
        }

        
        return;
    }




/*------------------------------------------------------------------------------
* NAME       :  Textboxongrid22BB
* PURPOSE    :  Turns on/off "writing text over grid" feature
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/   
   function Textboxongrid22BB() {//alert('Textarea over grid is enabled.  You may now write text over grid.');
        if(document.getElementById('textovergridarea').style.display == 'inline-block'){;//if (casenum == '1') {//text area over grid is off.
            document.getElementById("TextboxongridOFF").style.backgroundColor = ''; //bright yellow
            //document.getElementById("TextboxongridON").style.backgroundColor = '#eae6e0'; //gray
            document.getElementById("Textboxongrid").style.width = '18px';
            document.getElementById("Textboxongrid").style.height = '18px';
            document.getElementById('textovergridarea').style.display = 'none';
            document.getElementById('textovergridarea2').style.display = 'none';
            document.getElementById('textovergrid22').style.display = 'none';

        }
        else{
            document.getElementById("TextboxongridOFF").style.backgroundColor = '#fcff10'; //gray
            //document.getElementById("TextboxongridON").style.backgroundColor = ''; //bright yellow
            document.getElementById('textovergrid22').style.display = 'inline-block';
            document.getElementById("Textboxongrid").style.width = '530px';
            document.getElementById("Textboxongrid").style.height = '530px';
            document.getElementById('textovergridarea').style.display = 'inline-block';
            document.getElementById('textovergridarea2').style.display = 'inline-block';
            keyboardlayoutSecond('textovergridarea2');
            greekalphabet();
            //alert('Textarea over grid is enabled.  You may now write text over grid.');
        }    
    }


    
/*------------------------------------------------------------------------------
* NAME       :  keypadforgrid
* PURPOSE    :  Inputs keys for textarea over grid
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function keypadforgrid(casenumstr){
        //document.getElementById("Textboxongrid").focus();
        //alert('casenum=' + casenumstr);
        var casenum = casenumstr.toString();
        var symbol = " " ;
        var FocusID = document.getElementById('CurrentFocusID').value;
        switch (casenum){
            case "1": symbol = '-' + String.fromCharCode(8734);break; //negative infinity               
            case "2": symbol= String.fromCharCode(8734);break;  //infinity
            case "3": symbol= String.fromCharCode(960);break;    //PI
            case "4": symbol= 'x' + String.fromCharCode(178);break;  //sup2
            case "5": symbol= 'x' + String.fromCharCode(179);break;  //sup3
            case "6": symbol= 'x' + String.fromCharCode(8308);break;  //sup4
            case "7": symbol= 'x' + String.fromCharCode(8309);break;  //sup5
            case "8": symbol= 'x' + String.fromCharCode(8310);break;  //sup6
            case "9": symbol=  'x' + String.fromCharCode(8311);break;  //sup7
            case "10": symbol= String.fromCharCode(177);break; 	//plus minus
            case "11": symbol= String.fromCharCode(8730);break; 	//root 2
            case "12": symbol= String.fromCharCode(8731);break; 	//root 3
            case "13": symbol= String.fromCharCode(8732);break; 	//root 4
            case "14": symbol= String.fromCharCode(8804);break; //<=
            case "15": symbol= String.fromCharCode(8805);break; //>=
            case "16": symbol= String.fromCharCode(8242);break; //'
            case "17": symbol= String.fromCharCode(8243);break; //''
            case "18": symbol= String.fromCharCode(8244);break; //'''
            case "19": symbol= String.fromCharCode(8747);break; //∫
            case "20": symbol= String.fromCharCode(8706);break; //∂
            case "21": symbol= String.fromCharCode(8710);break; //Δ
            case "22": symbol= String.fromCharCode(8711);break; //∇
            case "23": symbol= String.fromCharCode(8477);break; //ℝ
            case "24": symbol= String.fromCharCode(8709);break; //∅
            case "25": symbol= String.fromCharCode(8746);break; //∪
            case "26": symbol= String.fromCharCode(8745);break; //⋂
            case "27": symbol= String.fromCharCode(8712);break; //∈
            case "28": symbol= String.fromCharCode(8800);break; //≠
            case "29": symbol= String.fromCharCode(8776);break; //≈
            case "30": symbol= String.fromCharCode(8728);break; //∘
            case "31": symbol= String.fromCharCode(8729);break; //∙
            case "32": symbol= String.fromCharCode(956);break; //μ
            case "33": symbol= String.fromCharCode(963);break; //σ
            case "34": symbol= String.fromCharCode(931);break; //∑
            case "35": symbol= 'x'+String.fromCharCode(772);break; //x̄
            case "36": symbol= 'p'+String.fromCharCode(770);break; //p̂
            case "37": symbol= String.fromCharCode(952);break; //θ
            case "38": symbol= String.fromCharCode(945);break; //α
            case "39": symbol= String.fromCharCode(946);break; //β
            case "40": symbol= String.fromCharCode(949);break; //ε
            case "41": symbol= 'ƒ'+String.fromCharCode(8315)+String.fromCharCode(185);break; //ε
            case "42": symbol= String.fromCharCode(8320);break; //sub 0
            case "43": symbol= String.fromCharCode(8321);break; //sub 1
            case "44": symbol= String.fromCharCode(8322);break; //sub 2
            case "45": symbol= String.fromCharCode(8323);break; //sub 3
            case "46": symbol= String.fromCharCode(8324);break; //sub 4
            case "47": symbol= String.fromCharCode(8325);break; //sub 5
            case "48": symbol= String.fromCharCode(8326);break; //sub 6
            case "49": symbol= String.fromCharCode(8327);break; //sub 7
            case "50": symbol= String.fromCharCode(8328);break; //sub 8
            case "51": symbol= String.fromCharCode(8329);break; //sub 9
            case "52": symbol= String.fromCharCode(8594);break; //right arrow
            case "53": symbol= String.fromCharCode(8314);break; //sup + 
            case "54": symbol= String.fromCharCode(8315);break; //sup - 
            case "55": symbol= String.fromCharCode(8595);break; // 
            case "56": symbol= String.fromCharCode(8596);break; // 
            case "57": symbol= String.fromCharCode(8658);break; // 
            case "58": symbol= String.fromCharCode(8660);break; // 
            case "59": symbol= String.fromCharCode(8709);break; // 
            case "60": symbol= String.fromCharCode(8776);break; // 
            case "61": symbol= String.fromCharCode(247);break; // 
            case "62": symbol= String.fromCharCode(7522);break; // sub i
            case "63": 
                document.getElementById('integralsym').style.display = 'inline-block';
                document.getElementById('textovergridareabb').style.display = 'inline-block';
                break;
            case "6398": 
                document.getElementById('integralsym').style.display = 'none';
                document.getElementById('textovergridareabb').style.display = 'none';
                break;
            case "6345": Textboxongrid22BB();

                break;
            case "6348": 
                document.getElementById('Textboxongrid').value = '';
                break;                  
            case "64":  
                var text = 'a = x<sub>0</sub>,x<sub>1</sub>,x<sub>3</sub>, ... ,x<sub>n-1</sub>,x<sub>n</sub> = b<span>&nbsp;</span>';
                insertTextIntoDiv(text);
                break;
            case "65":        
               var text = 
                '<div><span><span contenteditable="true"   style="position:relative;top:-50px;left:100px;font-size:30px">n</span>'
               + '<span contenteditable="true"   style="position:relative;top:50px;left:1px;font-size:25px">||Δ||&rarr;0&nbsp;&nbsp;&nbsp;&nbsp;i=1</span>'
               + '<span contenteditable="true" style="position:relative;top:1px;left:-140px;font-size:60px">lim ∑f(x)Δx</span></span></div>';
               
               insertTextIntoDiv(text);
               break;   //
           case "66": //document.getElementById('integralsym').innerHTML +=
                var text =  '<div><span contenteditable="true"   style="position:relative;top:5px;left:40px;font-size:30px">a</span><br>'
                + '<span contenteditable="true" style="position:relative;top:1px;left:40px;font-size:60px">∫f(x)dx</span><br>'
                + '<span contenteditable="true"   style="position:relative;top:-10px;left:40px;font-size:30px">b</span></div> ';
                insertTextIntoDiv(text);
               break;  // 
           case "6678": //document.getElementById('integralsym').innerHTML +=
                var text = 'Log<sub>b</sub>()';
                insertTextIntoDiv(text);
                break;  //
            case "6645":
                var text ='<span style=" float:left"></span>'
                        +'<table style="font-size:40px;float:left">'
                        + '<tr>'
                        +   '<td  style="border-bottom-style: solid;border-bottom-color: black;text-align:center ">'
                        +       '<span> abc &nbsp;</span>'
                        +   '</td>'
                        + '</tr>'                    
                        + '<tr>'
                        +   '<td  style="text-align:center ">'
                        +       '<span> 123 &nbsp;</span>'
                        +    '</td>'
                        + '</tr>'
                    
                    +'</table><span></span>'                   
                ;
                insertTextIntoDiv(text);
                break;   // 
            case "6612": //symbol = document.getElementById('integralsym').innerHTML += 
                var text = 
                 'Area = x<sub>0</sub>,x<sub>1</sub>,x<sub>3</sub>, ... ,x<sub>n-1</sub>,x<sub>n</sub> = b<span>&nbsp;</span>';
                
                insertTextIntoDiv(text);
                break;
            case "67":        
               var text = '<div>'
               + '<span contenteditable="true" style="position:relative;top:1px;left:10px;font-size:50px">&nbsp;&nbsp;lim f(x) = </span></span><br>'
               +'<span contenteditable="true"   style="position:relative;top:-40px;left:40px;font-size:25px">x&rarr;0<sup>+-</sup></span>'
               + '</div>';
               
               insertTextIntoDiv(text);
               break;   //

            case "68": symbol= String.fromCharCode();break; // 
            case "69": symbol= String.fromCharCode();break; //             
            case "70": symbol= String.fromCharCode();break; // 
            case "71": symbol= String.fromCharCode();break; // 
            case "72": symbol= String.fromCharCode();break; // 
            case "73": symbol= String.fromCharCode();break; //             
            case "74": symbol= String.fromCharCode();break; // 
            case "75": symbol= String.fromCharCode();break; // 
            case "76": symbol= String.fromCharCode();break; // 
            case "77": symbol= String.fromCharCode();break; //             
            case "78": symbol= String.fromCharCode();break; // 
            case "79": symbol= String.fromCharCode();break; // 
            case "80": symbol= String.fromCharCode();break; // 
            case "81": symbol= String.fromCharCode();break; //             
            case "82": symbol= String.fromCharCode();break; // 
            case "83": symbol= String.fromCharCode();break; // 
            case "84": symbol= String.fromCharCode();break; // 
            case "85": symbol= String.fromCharCode();break; //             
            case "86": symbol= String.fromCharCode();break; // 
            case "87": symbol= String.fromCharCode();break; // 
            case "88": symbol= String.fromCharCode();break; // 
            case "89": symbol= String.fromCharCode();break; //             
            case "90": symbol= String.fromCharCode();break; // 
            case "91": symbol= String.fromCharCode();break; // 
            case "92": symbol= String.fromCharCode();break; // 
            case "93": symbol= String.fromCharCode();break; // 
            case "94": symbol= String.fromCharCode();break; // 
            case "95": symbol= String.fromCharCode();break; // 
            case "96": symbol= String.fromCharCode();break; //             
            case "97": symbol= String.fromCharCode();break; // 
            case "98": symbol= String.fromCharCode();break; // 
            case "99": symbol= String.fromCharCode();break; // 
            case "100": symbol= String.fromCharCode();break; // 

        }

        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, 0, 0);

        return;
    }
 

 /*------------------------------------------------------------------------------
* NAME       : insertTextIntoDiv
* PURPOSE    : Inserts text into div or span
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function insertTextIntoDiv(text) {
        //var str = document.getElementById('integralsym').innerHTML;
        document.getElementById('integralsym').innerHTML += '<br>' + text;
        //document.getElementById('tdiv2').innerHTML = str.toString();
        return;
        var str1 = str.toString();
        var element = document.getElementById('integralsym');
        var caretOffset = 0;
        var doc = element.ownerDocument || element.document;
        var win = doc.defaultView || doc.parentWindow;
        var sel;

        if (typeof win.getSelection != "undefined") {
            sel = win.getSelection();
            if (sel.rangeCount > 0) {
                //alert('sel = ' + sel);
                var range = win.getSelection().getRangeAt(0);
                //alert('Range = ' + range);
                var preCaretRange = range.cloneRange();
                //alert('preCaretRange1 = ' + preCaretRange);
                preCaretRange.selectNode(element);
                //alert('preCaretRange2 = ' + preCaretRange);
                preCaretRange.setEnd(range.endContainer, range.endOffset);
                //alert('preCaretRange3 = ' + preCaretRange);
                caretOffset = preCaretRange.toString().length;
            }
        } else if ((sel = doc.selection) && sel.type != "Control") {
            var textRange = sel.createRange();
            var preCaretTextRange = doc.body.createTextRange();
            preCaretTextRange.moveToElementText(element);
            preCaretTextRange.setEndPoint("EndToEnd", textRange);
            caretOffset = preCaretTextRange.text.length;
        }

        //alert('caretOffset7777777 = ' + caretOffset);
        //document.getElementById('tdiv2').innerHTML += '<br><br>' + preCaretRange;
        var str2 = preCaretRange.toString();
        //document.getElementById('tdiv2').innerHTML += '<br><br>' + preCaretRange.toString();
        var pos = findnewposition(str1, str2);
        //str = replaceAll(str, '!', '<');
        //str = replaceAll(str, '~', '>');
        var text1 = str1.substring(0, pos);
        var text2 = '';
        if (pos < str1.length) {
            text2 = str1.substring(pos);
        }
        //alert('text77111 = ' + text1);
        //alert('text77 = ' + text);

        document.getElementById('integralsym').innerHTML = text1 + text + text2;
        //element.focus();
        //moveCursorToEnd(element);
        //moveCaret(element, 5);
        return;
    }

  /*------------------------------------------------------------------------------
* NAME       : findnewposition
* PURPOSE    : Finds new position of cursor after text is inserted
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function findnewposition(str1, str2) {
        //alert('in findnewposition');
        var str11 = str1.split('');
        var str22 = str2.split('');  //preCaretRange
        var str33 = '';
        var count = 0;
        var nn = str11.length;
        var i = -1;
        //alert('in findnewposition str11...' + str11);
        while (i < nn && str33 != str2) {
            //alert('7777777  str33 = ' + str33 + '.......str22 = ' + str2);
            count += 1;
            if (count == 300) { break; }
            i += 1;
            if (str11[i] == '<') {
                i += 1;
                //alert('8888888 i = ' + i + '.....str11[i] =' + str11[i]);
                while (str11[i] != '>') {
                    i += 1;
                    //alert('8888888 i = ' + i + '.....str11[i] =' + str11[i]);
                }
            }
            else {
                str33 += str11[i];

            }
        }

        return (i + 1);
    }


 
/*------------------------------------------------------------------------------
* NAME       :  TrigMode
* PURPOSE    :  Turns on radian mode or degree mode
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function TrigMode(mode) {
        if (mode == 0) {
            
            document.getElementById('radianmode').style.backgroundColor = "#fcff10";
            document.getElementById('degreemode').style.backgroundColor = "rgba(230, 247, 251, 0.74)";
            document.getElementById('radianmode2').style.backgroundColor = "#fcff10";
            document.getElementById('degreemode2').style.backgroundColor = "rgba(230, 247, 251, 0.74)";
            document.getElementById('RadianOrDegreeMode').value = 'radian mode';
            document.getElementById('RadianOrDegreeModeScienCalculator').value = 'radian mode'
        }
        else {
            document.getElementById('radianmode').style.backgroundColor = "rgba(230, 247, 251, 0.74)";
            document.getElementById('degreemode').style.backgroundColor = "#fcff10";
            document.getElementById('radianmode2').style.backgroundColor = "rgba(230, 247, 251, 0.74)";
            document.getElementById('degreemode2').style.backgroundColor = "#fcff10";
            document.getElementById('RadianOrDegreeMode').value = 'degree mode';
            document.getElementById('RadianOrDegreeModeScienCalculator').value = 'degree mode'
        }


    }



 function RootInfo(){     
     document.getElementById('rootinput').style.display = 'inline-block';

 }

  
    function closegreekalphabetdiv(){
        var el = document.getElementById('greekalpha');
        el.parentNode.removeChild(el);    
    }
    
    //Function for keyboard: Inputs ∜ ̅()      
    function greekalphabet() {
        //<div id="rootinput"   style="display: none; white-space: nowrap;padding: 5px ;overflow: scroll ;background-color: white;position: absolute;top:10px;left: 1100px;font-size: 40px; color: black; font-family: black; font-weight: bold;  border-style: solid; border-color:  #ff6a00">		
        var div = document.createElement("div");
        div.id = "greekalpha";
        div.style.position = "absolute";
        div.style.display = 'inline-block';
        div.style.top = "10px";
        div.style.left = "600px";
        div.style.height = "600px";
        div.style.backgroundColor = "white";
        div.style.border = "solid";
        div.style.borderColor = "green";
        div.style.overflow = "scroll";
        div.style.zIndex = '99';
        
        //math symbols
        div.innerHTML = '<input type="button"  value="CLOSE" onclick="closegreekalphabetdiv()" style="width: 200px;height:40px; font-size: 20px;background-color: #b6ff00 " />'	
            + '<br><button onclick="CalculusLetter(1)"  style="text-align: center; width:45px; height:45px; font-size: 20px;">∫</button>'
            + '<button onclick="CalculusLetter(2)"  style="text-align: center; width:45px; height:45px; font-size: 20px;">∂</button>'
            + '<button onclick="CalculusLetter(3)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">Δ</button>'
            + '<button onclick="CalculusLetter(4)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">∇</button>'
            + '<button onclick="CalculusLetter(6)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">ℝ</button>'
            + '<button onclick="CalculusLetter(7)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">&le;</button>'
            + '<button onclick="CalculusLetter(8)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">&ge;</button>'
            + '<button onclick="CalculusLetter(9)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">±</button>'
            + '<button onclick="CalculusLetter(10)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">≠</button>'
            + '<button onclick="CalculusLetter(11)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">÷</button>'
            + '<button onclick="CalculusLetter(12)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">×</button>'
            + '<button onclick="keypadforgrid(41)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">ƒ⁻¹</button>'
            + '<br>'            
            + '<button onclick="CalculusLetter(14)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">&#9646;<sup>0</sup></button>'
            + '<button onclick="CalculusLetter(15)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">&#9646;<sup>1</sup></button>'
            + '<button onclick="CalculusLetter(16)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">&#9646;<sup>2</sup></button>'
            + '<button onclick="CalculusLetter(17)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">&#9646;<sup>3</sup></button>'
            + '<button onclick="CalculusLetter(18)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">&#9646;<sup>4</sup></button>'
            + '<button onclick="CalculusLetter(19)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">&#9646;<sup>5</sup></button>'
            + '<button onclick="CalculusLetter(20)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">&#9646;<sup>6</sup></button>'
            + '<button onclick="CalculusLetter(21)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">&#9646;<sup>7</sup></button>'
            + '<button onclick="CalculusLetter(22)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">&#9646;<sup>8</sup></button>'
            + '<button onclick="CalculusLetter(23)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">&#9646;<sup>9</sup></button>'
            + '<button onclick="CalculusLetter(44)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">Ø</button>'
            + '<button onclick="CalculusLetter(13)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">′</button>'
            + '<br>'  
            + '<button onclick="CalculusLetter(24)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">&#9646;<sub>0</sub></button>'
            + '<button onclick="CalculusLetter(25)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">&#9646;<sub>1</sub></button>'
            + '<button onclick="CalculusLetter(26)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">&#9646;<sub>2</sub></button>'
            + '<button onclick="CalculusLetter(27)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">&#9646;<sub>3</sub></button>'
            + '<button onclick="CalculusLetter(28)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">&#9646;<sub>4</sub></button>'
            + '<button onclick="CalculusLetter(29)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">&#9646;<sub>5</sub></button>'
            + '<button onclick="CalculusLetter(30)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">&#9646;<sub>6</sub></button>'
            + '<button onclick="CalculusLetter(31)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">&#9646;<sub>7</sub></button>'
            + '<button onclick="CalculusLetter(32)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">&#9646;<sub>8</sub></button>'
            + '<button onclick="CalculusLetter(33)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">&#9646;<sub>9</sub></button>'
            + '<button onclick="CalculusLetter(38)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">&#9646;<sup>(</sup></button>'
            + '<button onclick="CalculusLetter(39)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">&#9646;<sup>)</sup></button>'
            + '<br>'   
            + '<button onclick="CalculusLetter(40)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">&#9646;<sup>i</sup></button>'
            + '<button onclick="CalculusLetter(41)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">&#9646;<sup>n</sup></button>'
            + '<button onclick="keypadforgrid(53)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">&#9646;<sup>+</sup></button>'
            + '<button onclick="keypadforgrid(54)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">&#9646;<sup>-</sup></button>'

            + '<button onclick="CalculusLetter(36)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">∈</button>'
            + '<button onclick="CalculusLetter(37)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">∉</button>'
            + '<button onclick="CalculusLetter(42)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">≈</button>'
            + '<button onclick="CalculusLetter(43)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">∘</button>'
            + '<button onclick="keypadforgrid(31)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">∙</button>'
            + '<button onclick="keypadforgrid(16)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">′</button>'
            + '<button onclick="keypadforgrid(17)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">″</button>'
            + '<button onclick="keypadforgrid(18)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">‴</button>'
            + '<br>'
            + '<button style="width:45px; height:45px; font-size: 20px;" onclick="keypadforgrid(1)">-&infin;</button>'
            + '<button style = "width:45px; height:45px; font-size: 20px;" onclick="keypadforgrid(2)">&infin;</button>'
            + '<button style = "width:45px; height:45px; font-size: 20px;" onclick="keypadforgrid(4)">x<sup>2</sup></button>'
            + '<button style = "width:45px; height:45px; font-size: 20px;" onclick="keypadforgrid(5)">x<sup>3</sup></button>'
            + '<button style = "width:45px; height:45px; font-size: 20px;" onclick="keypadforgrid(6)">x<sup>4</sup></button>'
            + '<button style = "width:45px; height:45px; font-size: 20px;" onclick="keypadforgrid(7)">x<sup>5</sup></button>'
            + '<button style = "width:45px; height:45px; font-size: 20px;" onclick="keypadforgrid(8)">x<sup>6</sup></button>'
            + '<button style = "width:45px; height:45px; font-size: 20px;" onclick="keypadforgrid(9)">x<sup>7</sup></button>'
            + '<button style = "width:45px; height:45px; font-size: 20px;" onclick="keypadforgrid(11)">&radic;</button>'
            + '<button style = "width:45px; height:45px; font-size: 20px;" onclick="keypadforgrid(12)">∛</button>'
            + '<button style = "width:45px; height:45px; font-size: 20px;" onclick="keypadforgrid(13)">∜</button>'
            + '<button style = "width:45px; height:45px; font-size: 20px;" onclick="keypadforgrid(35)">x̄</button>'
            + '<br>'
            + '<button style = "width:45px; height:45px; font-size: 20px;" onclick="keypadforgrid(36)">p̂</button>'
            + '<button style = "width:45px; height:45px; font-size: 20px;" onclick="keypadforgrid(52)">&#8594;</button>'
            + '<button style = "width:45px; height:45px; font-size: 20px;" onclick="keypadforgrid(53)">&#8592;</button>'
            + '<button style = "width:45px; height:45px; font-size: 20px;" onclick="keypadforgrid(54)">&#8593;</button>'
            + '<button style = "width:45px; height:45px; font-size: 20px;" onclick="keypadforgrid(55)">&#8595;</button>'
            + '<button style = "width:45px; height:45px; font-size: 20px;" onclick="keypadforgrid(56)">&#8596;</button>'
            + '<button style = "width:45px; height:45px; font-size: 20px;" onclick="keypadforgrid(57)">&#8658;</button>'
            + '<button style = "width:45px; height:45px; font-size: 20px;" onclick="keypadforgrid(58)">&#8660;</button>'
            + '<button onclick="CalculusLetter(34)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">∩</button>'
            + '<button onclick="CalculusLetter(35)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">∪</button>'

            ;
 
        //greek alphabet
        div.innerHTML += '<br><br>'
            + '<button onclick="greekletter(1)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">α</button>'
            + '<button onclick="greekletter(2)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">β</button>'
            + '<button onclick="greekletter(3)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">γ</button>'
            + '<button onclick="greekletter(4)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">δ</button>'
            + '<button onclick="greekletter(5)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">ε</button>'
            + '<button onclick="greekletter(6)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">ζ</button>'
            + '<button onclick="greekletter(7)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">η</button>'
            + '<button onclick="greekletter(8)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">θ</button>'
            + '<button onclick="greekletter(9)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">ι</button>'
            + '<button onclick="greekletter(10)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">κ</button>'
            + '<button onclick="greekletter(11)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">λ</button>'
            + '<button onclick="greekletter(12)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">μ</button>'
            + '<br>'            
            + '<button onclick="greekletter(13)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">ν</button>'
            + '<button onclick="greekletter(14)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">ξ</button>'
            + '<button onclick="greekletter(15)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">ο</button>'
            + '<button onclick="greekletter(16)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">π</button>'
            + '<button onclick="greekletter(17)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">ρ</button>'
            + '<button onclick="greekletter(18)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">ς</button>'
            + '<button onclick="greekletter(19)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">σ</button>'
            + '<button onclick="greekletter(20)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">τ</button>'
            + '<button onclick="greekletter(21)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">υ</button>'
            + '<button onclick="greekletter(22)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">φ</button>'
            + '<button onclick="greekletter(23)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">χ</button>'
            + '<button onclick="greekletter(24)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">ψ</button>'
            + '<br>'    
            + '<button onclick="greekletter(25)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">ω</button>'
            + '<button onclick="greekletter(26)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">Δ</button>'
            + '<button onclick="greekletter(27)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">Π</button>'
            + '<button onclick="greekletter(28)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">Σ</button>'
            + '<button onclick="greekletter(29)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">Φ</button>'
            + '<button onclick="greekletter(30)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">Ψ</button>'
            + '<button onclick="greekletter(31)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">Ω</button>'
            + '<button onclick="greekletter(32)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">Γ</button>'
            + '<br>'    
            + '<br>'    
            + '<button onclick="standardalphabet()"  style=" text-align: center;   height:45px; font-size: 20px; background-color: #b6ff00;">QUERTY Keyboard</button>'
            ;
   
 
        document.body.appendChild(div);
        //calculussymbol();
        return;
    }
    
    function greekletter(num){
        //alert('casenum =' + num);
        switch (num.toString()) {
            case "1": var symbol = String.fromCharCode(945); break; //α
            case "2": var symbol = String.fromCharCode(946); break; //β
            case "3": var symbol = String.fromCharCode(947); break; //γ
            case "4": var symbol = String.fromCharCode(948); break; //δ
            case "5": var symbol = String.fromCharCode(949); break; //ε
            case "6": var symbol = String.fromCharCode(950); break; //ζ
            case "7": var symbol = String.fromCharCode(951); break; //η
            case "8": var symbol = String.fromCharCode(952); break; //θ
            case "9": var symbol = String.fromCharCode(953); break; //ι
            case "10": var symbol = String.fromCharCode(954); break; //κ
            case "11": var symbol = String.fromCharCode(955); break; //λ
            case "12": var symbol = String.fromCharCode(956); break; //μ
            case "13": var symbol = String.fromCharCode(957); break; //ν
            case "14": var symbol = String.fromCharCode(958); break; //ξ
            case "15": var symbol = String.fromCharCode(959); break; //ο
            case "16": var symbol = String.fromCharCode(960); break; //π
            case "17": var symbol = String.fromCharCode(961); break; //ρ
            case "18": var symbol = String.fromCharCode(962); break; //ς
            case "19": var symbol = String.fromCharCode(963); break; //σ
            case "20": var symbol = String.fromCharCode(964); break; //τ
            case "21": var symbol = String.fromCharCode(965); break; //υ
            case "22": var symbol = String.fromCharCode(966); break; //φ
            case "23": var symbol = String.fromCharCode(967); break; //χ
            case "24": var symbol = String.fromCharCode(968); break; //ψ
            case "25": var symbol = String.fromCharCode(969); break; //ω
            case "26": var symbol = String.fromCharCode(916); break; //Δ
            case "27": var symbol = String.fromCharCode(928); break; //Π
            case "28": var symbol = String.fromCharCode(931); break; //Σ
            case "29": var symbol = String.fromCharCode(934); break; //Φ
            case "30": var symbol = String.fromCharCode(936); break; //Ψ
            case "31": var symbol = String.fromCharCode(937); break; //Ω
            case "32": var symbol = String.fromCharCode(915); break; //Γ
        }
                
        //alert('symbol =' + symbol);
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, 0, 0);
        return;
    }



    function closecalculussymboldiv(){
        var el = document.getElementById('CalculusSigns');
        el.parentNode.removeChild(el);    
    }
    
   
    function CalculusLetter(num){
        //alert('casenum =' + num);
        switch (num.toString()) {
            case "1": var symbol = String.fromCharCode(8747); break; //∫
            case "2": var symbol = String.fromCharCode(8706); break; //∂
            case "3": var symbol = String.fromCharCode(8710); break; //Δ
            case "4": var symbol = String.fromCharCode(8711); break; //∇
            case "5": var symbol = String.fromCharCode(8734); break; //∞
            case "6": var symbol = String.fromCharCode(8477); break; //ℝ
            case "7": var symbol = String.fromCharCode(8804); break; //≤
            case "8": var symbol = String.fromCharCode(8805); break; //≥
            case "9": var symbol = String.fromCharCode(177); break; //±

            case "10": var symbol = String.fromCharCode(8800); break; //≠
            case "11": var symbol = String.fromCharCode(247); break; //÷
            case "12": var symbol = String.fromCharCode(215); break; //×
            case "13": var symbol = String.fromCharCode(8242); break; //′
            case "14": var symbol = String.fromCharCode(8304); break; //sup 0
            case "15": var symbol = String.fromCharCode(185); break; //sup 1
            case "16": var symbol = String.fromCharCode(178); break; //sup 2
            case "17": var symbol = String.fromCharCode(179); break; //sup 3
            case "18": var symbol = String.fromCharCode(8308); break; //sup 4
            case "19": var symbol = String.fromCharCode(8309); break; //sup 5
            case "20": var symbol = String.fromCharCode(8310); break; //sup 6
            case "21": var symbol = String.fromCharCode(8311); break; //sup 7
            case "22": var symbol = String.fromCharCode(8312); break; //sup 8
            case "23": var symbol = String.fromCharCode(8313); break; //sup 9
            case "24": var symbol = String.fromCharCode(8320); break; //sub 0
            case "25": var symbol = String.fromCharCode(8321); break; //sup 1
            case "26": var symbol = String.fromCharCode(8322); break; //sup 2
            case "27": var symbol = String.fromCharCode(8323); break; //sup 3
            case "28": var symbol = String.fromCharCode(8324); break; //sup 4
            case "29": var symbol = String.fromCharCode(8325); break; //sup 5
            case "30": var symbol = String.fromCharCode(8326); break; //sup 6
            case "31": var symbol = String.fromCharCode(8327); break; //sup 7
            case "32": var symbol = String.fromCharCode(8328); break; //sup 8
            case "33": var symbol = String.fromCharCode(8329); break; //sup 9

            case "34": var symbol = String.fromCharCode(8745); break; // ∩
            case "35": var symbol = String.fromCharCode(8746); break; // ∪
            case "36": var symbol = String.fromCharCode(8712); break; // ∈
            case "37": var symbol = String.fromCharCode(8713); break; // ∉
            case "38": var symbol = String.fromCharCode(8317); break; // sup ( 
            case "39": var symbol = String.fromCharCode(8318); break; // sup ) 
            case "40": var symbol = String.fromCharCode(8305); break; // sup i 
            case "41": var symbol = String.fromCharCode(8319); break; // sup n 


            case "42": var symbol = String.fromCharCode(8776); break; //≈
            case "43": var symbol = String.fromCharCode(8728); break; // ∘
            case "44": var symbol = String.fromCharCode(216); break; // Ø
            case "45": var symbol = String.fromCharCode(); break; // 
            case "46": var symbol = String.fromCharCode(); break; // 
            case "47": var symbol = String.fromCharCode(); break; // 
            case "48": var symbol = String.fromCharCode(); break; // 
            
        }
                
        //alert('symbol =' + symbol);
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, 0, 0);
        return;
    }


      
    function closestandardalphabetdiv(){
        var el = document.getElementById('standardalpha');
        el.parentNode.removeChild(el);    
    }
    
    //Function for keyboard: Inputs ∜ ̅()      
    function standardalphabet() {
        //div id="rootinput"   style="display: none; white-space: nowrap;padding: 5px ;overflow: scroll ;background-color: white;position: absolute;top:10px;left: 1100px;font-size: 40px; color: black; font-family: black; font-weight: bold;  border-style: solid; border-color:  #ff6a00">		
        var div = document.createElement("div");
        div.id = "standardalpha";
        div.style.position = "absolute";
        div.style.display = 'inline-block';
        div.style.top = "10px";
        div.style.left = "600px";
        div.style.height = "430px";
        div.style.backgroundColor = "white";
        div.style.border = "solid";
        div.style.borderColor = "green";
        div.style.whiteSpace = 'nowrap';
        //div.style.overflow = "scroll";
        div.style.zIndex = '99';
         
        div.innerHTML = '<input type="button"  value="CLOSE" onclick="closestandardalphabetdiv()" style="height:40px; font-size: 20px;background-color: #b6ff00 " />'	
            + '<br><button onclick="standardletter(1)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">1</button>'
            + '<button onclick="standardletter(2)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">2</button>'
            + '<button onclick="standardletter(3)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">3</button>'
            + '<button onclick="standardletter(4)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">4</button>'
            + '<button onclick="standardletter(5)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">5</button>'
            + '<button onclick="standardletter(6)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">6</button>'
            + '<button onclick="standardletter(7)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">7</button>'
            + '<button onclick="standardletter(8)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">8</button>'
            + '<button onclick="standardletter(9)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">9</button>'
            + '<button onclick="standardletter(10)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">0</button>'
            + '<button onclick="standardletter(11)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">=</button>'
            + '<br>'  
            + '<button onclick="standardletter(12)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">q</button>'
            + '<button onclick="standardletter(13)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">w</button>'
            + '<button onclick="standardletter(14)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">e</button>'
            + '<button onclick="standardletter(15)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">r</button>'
            + '<button onclick="standardletter(16)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">t</button>'
            + '<button onclick="standardletter(17)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">y</button>'
            + '<button onclick="standardletter(18)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">u</button>'
            + '<button onclick="standardletter(19)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">i</button>'
            + '<button onclick="standardletter(20)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">o</button>'
            + '<button onclick="standardletter(21)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">p</button>'
            + '<button onclick="standardletter(22)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">|</button>'
            + '<br>'  
            + '<button onclick="standardletter(23)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">a</button>'
            + '<button onclick="standardletter(24)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">s</button>'
            + '<button onclick="standardletter(25)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">d</button>'
            + '<button onclick="standardletter(26)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">f</button>'
            + '<button onclick="standardletter(27)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">g</button>'
            + '<button onclick="standardletter(28)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">h</button>'
            + '<button onclick="standardletter(29)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">j</button>'
            + '<button onclick="standardletter(30)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">k</button>'
            + '<button onclick="standardletter(31)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">l</button>'
            + '<button onclick="standardletter(32)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">;</button>'
            + '<button onclick="standardletter(33)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">′</button>'
            + '<br>'  
            + '<button onclick="standardletter(34)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">z</button>'
            + '<button onclick="standardletter(35)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">x</button>'
            + '<button onclick="standardletter(36)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">c</button>'
            + '<button onclick="standardletter(37)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">v</button>'
            + '<button onclick="standardletter(38)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">b</button>'
            + '<button onclick="standardletter(38)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">n</button>'
            + '<button onclick="standardletter(40)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">m</button>'
            + '<button onclick="standardletter(41)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">,</button>'
            + '<button onclick="standardletter(42)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">.</button>'
            + '<button onclick="standardletter(43)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">{</button>'
            + '<button onclick="standardletter(44)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">}</button>'
            + '<br><br>'  
            + '<button onclick="standardletter(45)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">Q</button>'
            + '<button onclick="standardletter(46)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">W</button>'
            + '<button onclick="standardletter(47)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">E</button>'
            + '<button onclick="standardletter(48)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">R</button>'
            + '<button onclick="standardletter(49)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">T</button>'
            + '<button onclick="standardletter(50)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">Y</button>'
            + '<button onclick="standardletter(51)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">U</button>'
            + '<button onclick="standardletter(52)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">I</button>'
            + '<button onclick="standardletter(53)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">O</button>'
            + '<button onclick="standardletter(54)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">P</button>'
            + '<button onclick="standardletter(55)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">=</button>'
            + '<br>'  
            + '<button onclick="standardletter(56)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">A</button>'
            + '<button onclick="standardletter(57)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">S</button>'
            + '<button onclick="standardletter(58)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">D</button>'
            + '<button onclick="standardletter(59)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">F</button>'
            + '<button onclick="standardletter(60)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">G</button>'
            + '<button onclick="standardletter(61)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">H</button>'
            + '<button onclick="standardletter(62)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">J</button>'
            + '<button onclick="standardletter(63)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">K</button>'
            + '<button onclick="standardletter(64)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">L</button>'
            + '<button onclick="standardletter(65)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">;</button>'
            + '<button onclick="standardletter(66)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">′</button>'
            + '<br>'  
            + '<button onclick="standardletter(67)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">Z</button>'
            + '<button onclick="standardletter(68)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">X</button>'
            + '<button onclick="standardletter(69)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">C</button>'
            + '<button onclick="standardletter(70)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">V</button>'
            + '<button onclick="standardletter(71)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">B</button>'
            + '<button onclick="standardletter(72)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">N</button>'
            + '<button onclick="standardletter(73)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">M</button>'
            + '<button onclick="standardletter(74)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">,</button>'
            + '<button onclick="standardletter(75)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">.</button>'
            + '<button onclick="standardletter(76)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">{</button>'
            + '<button onclick="standardletter(77)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;">}</button>'
            + '<br>'
            +  'Moving Keyboard Location:&nbsp;'
            + '<button onclick="keypadmove2(2)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;background-color: #b6ff00;">&larr;</button>'
            + '<button onclick="keypadmove2(4)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;background-color: #b6ff00;">&rarr;</button>'
            + '<button onclick="keypadmove2(6)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;background-color: #b6ff00;">&uarr;</button>'
            + '<button onclick="keypadmove2(8)"  style=" text-align: center; width:45px; height:45px; font-size: 20px;background-color: #b6ff00;">&darr;</button>'
            ;


        document.body.appendChild(div);
        //calculussymbol();
        return;
    }
 

    
    function standardletter(num){
        //alert('casenum =' + num);
        switch (num.toString()) {
            case "1": var symbol = String.fromCharCode(49); break; //1
            case "2": var symbol = String.fromCharCode(50); break; //2
            case "3": var symbol = String.fromCharCode(51); break; //3
            case "4": var symbol = String.fromCharCode(52); break; //4
            case "5": var symbol = String.fromCharCode(53); break; //5
            case "6": var symbol = String.fromCharCode(54); break; //6
            case "7": var symbol = String.fromCharCode(55); break; //7
            case "8": var symbol = String.fromCharCode(56); break; //8
            case "9": var symbol = String.fromCharCode(57); break; //9
            case "10": var symbol = String.fromCharCode(48); break; //0
            case "11": var symbol = String.fromCharCode(61); break; //=

            case "12": var symbol = String.fromCharCode(113); break; //q
            case "13": var symbol = String.fromCharCode(119); break; //w
            case "14": var symbol = String.fromCharCode(101); break; //e
            case "15": var symbol = String.fromCharCode(114); break; //r
            case "16": var symbol = String.fromCharCode(116); break; //t
            case "17": var symbol = String.fromCharCode(121); break; //y
            case "18": var symbol = String.fromCharCode(117); break; //u
            case "19": var symbol = String.fromCharCode(105); break; //i
            case "20": var symbol = String.fromCharCode(111); break; //o
            case "21": var symbol = String.fromCharCode(112); break; //p
            case "22": var symbol = String.fromCharCode(124); break; //|

            case "23": var symbol = String.fromCharCode(97); break; //a
            case "24": var symbol = String.fromCharCode(115); break; //s
            case "25": var symbol = String.fromCharCode(100); break; //d
            case "26": var symbol = String.fromCharCode(102); break; //f
            case "27": var symbol = String.fromCharCode(103); break; //g
            case "28": var symbol = String.fromCharCode(104); break; //h
            case "29": var symbol = String.fromCharCode(106); break; //j
            case "30": var symbol = String.fromCharCode(107); break; //k
            case "31": var symbol = String.fromCharCode(108); break; //l
            case "32": var symbol = String.fromCharCode(59); break; //;
            case "33": var symbol = String.fromCharCode(39); break; //'

            case "34": var symbol = String.fromCharCode(122); break; //z
            case "35": var symbol = String.fromCharCode(120); break; //x
            case "36": var symbol = String.fromCharCode(99); break; //c
            case "37": var symbol = String.fromCharCode(118); break; //v
            case "38": var symbol = String.fromCharCode(98); break; //b
            case "39": var symbol = String.fromCharCode(110); break; //n
            case "40": var symbol = String.fromCharCode(109); break; //m
            case "41": var symbol = String.fromCharCode(44); break; //,
            case "42": var symbol = String.fromCharCode(46); break; //.
            case "43": var symbol = String.fromCharCode(123); break; //{
            case "44": var symbol = String.fromCharCode(125); break; //}

            case "45": var symbol = String.fromCharCode(81); break; //Q
            case "46": var symbol = String.fromCharCode(87); break; //W
            case "47": var symbol = String.fromCharCode(69); break; //E
            case "48": var symbol = String.fromCharCode(82); break; //R
            case "49": var symbol = String.fromCharCode(84); break; //T
            case "50": var symbol = String.fromCharCode(89); break; //Y
            case "51": var symbol = String.fromCharCode(85); break; //U
            case "52": var symbol = String.fromCharCode(73); break; //I
            case "53": var symbol = String.fromCharCode(79); break; //O
            case "54": var symbol = String.fromCharCode(80); break; //P
            case "55": var symbol = String.fromCharCode(124); break; //|

            case "56": var symbol = String.fromCharCode(65); break; //A
            case "57": var symbol = String.fromCharCode(83); break; //S
            case "58": var symbol = String.fromCharCode(68); break; //D
            case "59": var symbol = String.fromCharCode(70); break; //F
            case "60": var symbol = String.fromCharCode(71); break; //G
            case "61": var symbol = String.fromCharCode(72); break; //H
            case "62": var symbol = String.fromCharCode(74); break; //J
            case "63": var symbol = String.fromCharCode(75); break; //K
            case "64": var symbol = String.fromCharCode(76); break; //L
            case "65": var symbol = String.fromCharCode(59); break; //;
            case "66": var symbol = String.fromCharCode(39); break; //'
            case "67": var symbol = String.fromCharCode(90); break; //Z
            case "68": var symbol = String.fromCharCode(88); break; //X
            case "69": var symbol = String.fromCharCode(67); break; //C
            case "70": var symbol = String.fromCharCode(86); break; //V
            case "71": var symbol = String.fromCharCode(66); break; //B
            case "72": var symbol = String.fromCharCode(78); break; //N
            case "72": var symbol = String.fromCharCode(77); break; //M
            case "74": var symbol = String.fromCharCode(44); break; //,
            case "75": var symbol = String.fromCharCode(46); break; //.
            case "76": var symbol = String.fromCharCode(123); break; //{
            case "77": var symbol = String.fromCharCode(125); break; //}
        }
                
        //alert('symbol =' + symbol);
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, 0, 0);
        return;
    }


    /*------------------------------------------------------------------------------
* NAME       : keypadmove
* PURPOSE    : Determines which keypad to display
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function keypadmove2(num) {
        var top = document.getElementById('standardalpha').style.top;
        var left = document.getElementById('standardalpha').style.left;
        if(num==1){
            var tt = parseInt(left.replace('px','')) - 40;
            if(tt<10){tt = 10};
            var left2 = tt + 'px';
            document.getElementById('standardalpha').style.left = left2;
        }
        else if(num==2){
            var tt = parseInt(left.replace('px','')) - 150;
            if(tt<10){tt = 10};
            var left2 = tt + 'px';
            document.getElementById('standardalpha').style.left = left2;
        }
        else if(num==3){
            var tt = parseInt(left.replace('px','')) + 40;
            //if(tt>1400){tt = 1400};
            var left2 = tt + 'px';
            document.getElementById('standardalpha').style.left = left2;
        }        
        else if(num==4){
            var tt = parseInt(left.replace('px','')) + 150;
            //if(tt>1400){tt = 1400};
            var left2 = tt + 'px';
            document.getElementById('standardalpha').style.left = left2;
        }
        else if(num==5){
            var tt = parseInt(top.replace('px','')) - 40;
            if(tt<10){tt = 10};
            var top2 = tt + 'px';
            document.getElementById('standardalpha').style.top = top2;
        }
        else if(num==6){
            var tt = parseInt(top.replace('px','')) - 100;
            if(tt<10){tt = 10};
            var top2 = tt + 'px';
            document.getElementById('standardalpha').style.top = top2;
        }
        else if(num==7){
            var tt = parseInt(top.replace('px','')) + 40;
            //if(tt>900){tt = 900};
            var top2 = tt + 'px';
            document.getElementById('standardalpha').style.top = top2;
        }
        else if(num==8){
            var tt = parseInt(top.replace('px','')) + 100;
            //if(tt>900){tt = 900};
            var top2 = tt + 'px';
            document.getElementById('standardalpha').style.top = top2;
        }
        else if(num==9){
            document.getElementById('standardalpha').style.left = '10px';
        }
        else if(num==10){
            document.getElementById('standardalpha').style.left = '1200px';
        }
        else if(num==11){
            document.getElementById('standardalpha').style.top = '10px';
        }
        else if(num==12){
            document.getElementById('standardalpha').style.top = '800px';
        }
        else if(num==13){
            document.getElementById('standardalpha').style.top = '10px';
            document.getElementById('standardalpha').style.left = '10px';
        }
        else if(num==14){
            document.getElementById('standardalpha').style.top = '10px';
            document.getElementById('standardalpha').style.left = '1200px';
        }
        else if(num==15){
            document.getElementById('standardalpha').style.top = '800px';
            document.getElementById('standardalpha').style.left = '10px';
        }
        else if(num==16){
            document.getElementById('standardalpha').style.top = '800px';
            document.getElementById('standardalpha').style.left = '1200px';
        }
    }



   function symboltranslate() {//also in AnswerTemplate11.js in AnswerTemplate folder
        //alert('in WriteToFile()77777777777777');
        var focusID = document.activeElement.id;
        //alert(focusID);
        var elemsVal = document.getElementById(focusID).value;
        //alert(elemsVal);

        document.getElementById(focusID).value =replaceAllSym((document.getElementById(focusID).value),'<<', '≤');
        document.getElementById(focusID).value =replaceAllSym((document.getElementById(focusID).value),'>>', '≥'); 
        document.getElementById(focusID).value =replaceAllSym((document.getElementById(focusID).value),'<=', '≤');
        document.getElementById(focusID).value =replaceAllSym((document.getElementById(focusID).value),'>=', '≥');
        document.getElementById(focusID).value =replaceAllSym((document.getElementById(focusID).value),'nn', '≠');
        document.getElementById(focusID).value =replaceAllSym((document.getElementById(focusID).value),'<>', '≠');
        document.getElementById(focusID).value =replaceAllSym((document.getElementById(focusID).value),'sqr', '√ ̅(');
        document.getElementById(focusID).value =replaceAllSym((document.getElementById(focusID).value),'cr', '∛ ̅(');
        document.getElementById(focusID).value =replaceAllSym((document.getElementById(focusID).value),'pp', 'π');
        document.getElementById(focusID).value =replaceAllSym((document.getElementById(focusID).value),'ff', '(');
        document.getElementById(focusID).value =replaceAllSym((document.getElementById(focusID).value),'jj', ')');
        document.getElementById(focusID).value =replaceAllSym((document.getElementById(focusID).value),'hh', '^');


        
        document.getElementById(focusID).value =replaceAllSym((document.getElementById(focusID).value),'pi', 'π');
        document.getElementById(focusID).value =replaceAllSym((document.getElementById(focusID).value),'infin', '∞');
        document.getElementById(focusID).value =replaceAllSym((document.getElementById(focusID).value),'theta', 'θ');
        document.getElementById(focusID).value =replaceAllSym((document.getElementById(focusID).value),'sigma', 'Σ');

        document.getElementById(focusID).value =replaceAllSym((document.getElementById(focusID).value),'sup0', '⁰');//sup0
        document.getElementById(focusID).value =replaceAllSym((document.getElementById(focusID).value),'sup1', '¹');//sup1
        document.getElementById(focusID).value =replaceAllSym((document.getElementById(focusID).value),'sup2', '²');//sup2
        document.getElementById(focusID).value =replaceAllSym((document.getElementById(focusID).value),'sup3', '³');//sup3
        document.getElementById(focusID).value =replaceAllSym((document.getElementById(focusID).value),'sup4', '⁴');//sup4
        document.getElementById(focusID).value =replaceAllSym((document.getElementById(focusID).value),'sup5', '⁵');//sup5
        document.getElementById(focusID).value =replaceAllSym((document.getElementById(focusID).value),'sup6', '⁶');//sup6
        document.getElementById(focusID).value =replaceAllSym((document.getElementById(focusID).value),'sup7', '⁷');//sup7
        document.getElementById(focusID).value =replaceAllSym((document.getElementById(focusID).value),'sup8', '⁸');//sup8
        document.getElementById(focusID).value =replaceAllSym((document.getElementById(focusID).value),'sup9', '⁹');//sup9

        document.getElementById(focusID).value =replaceAllSym((document.getElementById(focusID).value),'sub0', String.fromCharCode(8320));//sub0
        document.getElementById(focusID).value =replaceAllSym((document.getElementById(focusID).value),'sub1', String.fromCharCode(8321));//sub1
        document.getElementById(focusID).value =replaceAllSym((document.getElementById(focusID).value),'sub2', String.fromCharCode(8322));//sub2
        document.getElementById(focusID).value =replaceAllSym((document.getElementById(focusID).value),'sub3', String.fromCharCode(8323));//sub3
        document.getElementById(focusID).value =replaceAllSym((document.getElementById(focusID).value),'sub4', String.fromCharCode(8324));//sub4
        document.getElementById(focusID).value =replaceAllSym((document.getElementById(focusID).value),'sub5', String.fromCharCode(8325));//sub5
        document.getElementById(focusID).value =replaceAllSym((document.getElementById(focusID).value),'sub6', String.fromCharCode(8326));//sub6
        document.getElementById(focusID).value =replaceAllSym((document.getElementById(focusID).value),'sub7', String.fromCharCode(8327));//sub7
        document.getElementById(focusID).value =replaceAllSym((document.getElementById(focusID).value),'sub8', String.fromCharCode(8328));//sub8
        document.getElementById(focusID).value =replaceAllSym((document.getElementById(focusID).value),'sub9', String.fromCharCode(8329));//sub9

        document.getElementById(focusID).value =replaceAllSym((document.getElementById(focusID).value),'root2', '√ ̅');//sub9
        document.getElementById(focusID).value =replaceAllSym((document.getElementById(focusID).value),'root3', '∛ ̅');//sub9
        document.getElementById(focusID).value =replaceAllSym((document.getElementById(focusID).value),'root4', '∜ ̅');//sub9

        document.getElementById(focusID).value =replaceAllSym((document.getElementById(focusID).value),'vec', '⟨ ⟩');//sub9
        document.getElementById(focusID).value =replaceAllSym((document.getElementById(focusID).value),'del', 'Δ');//sub9
        document.getElementById(focusID).value =replaceAllSym((document.getElementById(focusID).value),'nab', '∇');//sub9
        document.getElementById(focusID).value =replaceAllSym((document.getElementById(focusID).value),'integ', '∫');//sub9
        document.getElementById(focusID).value =replaceAllSym((document.getElementById(focusID).value),'pm', '±');//sub9
        
        return;
      }
