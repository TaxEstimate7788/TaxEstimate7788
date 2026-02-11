 function textcolor(color, element){
     //alert(color, element);
     document.getElementById('Textboxongrid').style.color = color;

 }

 function   textFontSize(size, element){
     document.getElementById('Textboxongrid').style.fontSize = size+'px';
 }

function setEndOfContenteditable(contentEditableElement)
{
    var range,selection;
    if(document.createRange)//Firefox, Chrome, Opera, Safari, IE 9+
    {
        range = document.createRange();//Create a range (a range is a like the selection but invisible)
        range.selectNodeContents(contentEditableElement);//Select the entire contents of the element with the range
        range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
        selection = window.getSelection();//get the selection object (allows you to change selection)
        selection.removeAllRanges();//remove any selections already made
        selection.addRange(range);//make the range you have just created the visible selection
    }
    else if(document.selection)//IE 8 and lower
    { 
        range = document.body.createTextRange();//Create a range (a range is a like the selection but invisible)
        range.moveToElementText(contentEditableElement);//Select the entire contents of the element with the range
        range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
        range.select();//Select the range (make it the visible selection
    }
}

    function symboltranslate44(element) {
        //alert('in WriteToFile()77777777777777.....'+element);
        var focusID = element;//document.getElementById(element).value;
        //alert(focusID);
        //var elemsVal = document.getElementById(focusID).value;
        //alert(elemsVal);
        document.getElementById(focusID).innerHTML =replaceAllSym((document.getElementById(focusID).innerHTML),'pi', 'π');
        document.getElementById(focusID).innerHTML =replaceAllSym((document.getElementById(focusID).innerHTML),'infin', '∞');
        document.getElementById(focusID).innerHTML =replaceAllSym((document.getElementById(focusID).innerHTML),'theta', 'θ');
        document.getElementById(focusID).innerHTML =replaceAllSym((document.getElementById(focusID).innerHTML),'sigma', 'Σ');
        document.getElementById(focusID).innerHTML =replaceAllSym((document.getElementById(focusID).innerHTML),'sup0', '⁰');//sup0
        document.getElementById(focusID).innerHTML =replaceAllSym((document.getElementById(focusID).innerHTML),'sup1', '¹');//sup1
        document.getElementById(focusID).innerHTML =replaceAllSym((document.getElementById(focusID).innerHTML),'sup2', '²');//sup2
        document.getElementById(focusID).innerHTML =replaceAllSym((document.getElementById(focusID).innerHTML),'sup3', '³');//sup3
        document.getElementById(focusID).innerHTML =replaceAllSym((document.getElementById(focusID).innerHTML),'sup4', '⁴');//sup4
        document.getElementById(focusID).innerHTML =replaceAllSym((document.getElementById(focusID).innerHTML),'sup5', '⁵');//sup5
        document.getElementById(focusID).innerHTML =replaceAllSym((document.getElementById(focusID).innerHTML),'sup6', '⁶');//sup6
        document.getElementById(focusID).innerHTML =replaceAllSym((document.getElementById(focusID).innerHTML),'sup7', '⁷');//sup7
        document.getElementById(focusID).innerHTML =replaceAllSym((document.getElementById(focusID).innerHTML),'sup8', '⁸');//sup8
        document.getElementById(focusID).innerHTML =replaceAllSym((document.getElementById(focusID).innerHTML),'sup9', '⁹');//sup9

        document.getElementById(focusID).innerHTML =replaceAllSym((document.getElementById(focusID).innerHTML),'sub0', String.fromCharCode(8320));//sub0
        document.getElementById(focusID).innerHTML =replaceAllSym((document.getElementById(focusID).innerHTML),'sub1', String.fromCharCode(8321));//sub1
        document.getElementById(focusID).innerHTML =replaceAllSym((document.getElementById(focusID).innerHTML),'sub2', String.fromCharCode(8322));//sub2
        document.getElementById(focusID).innerHTML =replaceAllSym((document.getElementById(focusID).innerHTML),'sub3', String.fromCharCode(8323));//sub3
        document.getElementById(focusID).innerHTML =replaceAllSym((document.getElementById(focusID).innerHTML),'sub4', String.fromCharCode(8324));//sub4
        document.getElementById(focusID).innerHTML =replaceAllSym((document.getElementById(focusID).innerHTML),'sub5', String.fromCharCode(8325));//sub5
        document.getElementById(focusID).innerHTML =replaceAllSym((document.getElementById(focusID).innerHTML),'sub6', String.fromCharCode(8326));//sub6
        document.getElementById(focusID).innerHTML =replaceAllSym((document.getElementById(focusID).innerHTML),'sub7', String.fromCharCode(8327));//sub7
        document.getElementById(focusID).innerHTML =replaceAllSym((document.getElementById(focusID).innerHTML),'sub8', String.fromCharCode(8328));//sub8
        document.getElementById(focusID).innerHTML =replaceAllSym((document.getElementById(focusID).innerHTML),'sub9', String.fromCharCode(8329));//sub9

        document.getElementById(focusID).innerHTML =replaceAllSym((document.getElementById(focusID).innerHTML),'root2', '√ ̅');//sub9
        document.getElementById(focusID).innerHTML =replaceAllSym((document.getElementById(focusID).innerHTML),'root3', '∛ ̅');//sub9
        document.getElementById(focusID).innerHTML =replaceAllSym((document.getElementById(focusID).innerHTML),'root4', '∜ ̅');//sub9

        document.getElementById(focusID).innerHTML =replaceAllSym((document.getElementById(focusID).innerHTML),'vec', '⟨ ⟩');//sub9
        document.getElementById(focusID).innerHTML =replaceAllSym((document.getElementById(focusID).innerHTML),'del', 'Δ');//sub9
        document.getElementById(focusID).innerHTML =replaceAllSym((document.getElementById(focusID).innerHTML),'nab', '∇');//sub9
        document.getElementById(focusID).innerHTML =replaceAllSym((document.getElementById(focusID).innerHTML),'integ', '∫');//sub9
        document.getElementById(focusID).innerHTML =replaceAllSym((document.getElementById(focusID).innerHTML),'pm', '±');//sub9

        var elem = document.getElementById(element);//This is the element that you want to move the caret to the end of
        setEndOfContenteditable(elem);   
      
        
        return;
      }
    function symboltranslate(element) {
        //alert('in WriteToFile()77777777777777.....'+element);
        var focusID = element;//document.getElementById(element).value;
        //alert(focusID);
        //var elemsVal = document.getElementById(focusID).value;
        //alert(elemsVal);
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

function replaceAllSym(txt, replace, with_this) {
    return txt.replace(new RegExp(replace, 'g'), with_this);
}

 
    function calculatetheta(xx, yy){
                var tt = parseFloat(yy) / parseFloat(xx);

                if(parseFloat(xx) > 0 && parseFloat(yy)> 0){
                    var theta = Math.atan(tt);                    
                }
                if(parseFloat(xx) < 0 && parseFloat(yy)> 0){
                    var theta = Math.atan(tt) + Math.PI;                    
                }
                if(parseFloat(xx) < 0 && parseFloat(yy) < 0){
                    var theta = Math.atan(tt) + Math.PI;                    
                }
                if(parseFloat(xx) > 0 && parseFloat(yy) < 0){
                    var theta = 2*Math.PI + Math.atan(tt) ;                    
                }                
                if(parseFloat(xx) == 0 && parseFloat(yy) < 0){
                    var theta = 3*Math.PI/2;                    
                }  
                if(parseFloat(xx) == 0 && parseFloat(yy) > 0){
                    var theta = Math.PI/2;                    
                }  
                if(parseFloat(xx) < 0 && parseFloat(yy) == 0){
                    var theta = Math.PI;                    
                }  

                return theta;
    }

    function implicitfunctionExample1(){
        document.getElementById("implicitfunction1").value = 'y³ + y² -5y -x² = -4';
        //GraphingCalculator33();
    }
    
  function DrawTangentLine(){
        document.getElementById("functiondefinedimplicitly").innerHTML = '';
        //window.open('../GraphingCalculator1/implicitexample1.pdf','calculatorExample1','width=700px, height=600px,scrollbars=1');
        //document.getElementById('mydropdownCartesian1').value = '10';
        //document.getElementById("TextBoxForCartesianGraph1").value = '36+y²';
        //document.getElementById("yprime").value = 'x/y';
        //document.getElementById("TangentPoint").value = '(10,8) ; (-10,-8)'
        var TangentPointList = document.getElementById("TangentPoint").value;
        if (TangentPointList.indexOf(';') > -1) {
            var list1 = TangentPointList.split(';');
        }
        else {
            var list1 = [TangentPointList];
        }

        for (var i = 0; i < list1.length; i++) {
            var tt = list1[i].split(',');
            var pp0 = tt[0].replace('(', '');
            var pp1 = tt[1].replace(')', '');
            document.getElementById("Point" + (20 - i) + "X").value = pp0;
            document.getElementById("Point" + (20 - i) + "Y").value = pp1;
            var SlopeTangentLine = replaceAll(document.getElementById("yprime").value, 'x', '(' + pp0 + ')');
            var SlopeTangentLine = replaceAll(SlopeTangentLine, 'y', '(' + pp1 + ')');
            var SlopeTangentLine = FindValue(ProcessInput(SlopeTangentLine));
            //alert('SlopeTangentLine=' + SlopeTangentLine);
            var EquationTangentLine = SlopeTangentLine + '(x - ' + '(' + pp0 + ')) + ' + pp1;
            document.getElementById("TextBoxForCartesianGraph" + (20 - i)).value = EquationTangentLine;
            document.getElementById("functiondefinedimplicitly").innerHTML += 'At the point ' + list1[i] + ':<br>'
                      + 'Slope of Tangent Line = ' + SlopeTangentLine + '<br>'
                      + 'Equation of Tangent Line is y = ' + EquationTangentLine + '<br><br><br>';
        }

        document.getElementById("checkboxCartesianPoints").checked = true;          
        GraphingCalculator();
    }



    function DrawTangentLine1(){
        document.getElementById("functiondefinedimplicitly").innerHTML = '';
        window.open('../GraphingCalculator1/implicitexample1.pdf','calculatorExample1','width=700px, height=600px,scrollbars=1');
        document.getElementById('mydropdownCartesian1').value = '10';
        document.getElementById("TextBoxForCartesianGraph1").value = '36+y²';
        document.getElementById("yprime").value = 'x/y';
        document.getElementById("TangentPoint").value = '(10,8) ; (-10,-8)'
        var TangentPointList = document.getElementById("TangentPoint").value;
        if (TangentPointList.indexOf(';') > -1) {
            var list1 = TangentPointList.split(';');
        }
        else {
            var list1 = [TangentPointList];
        }

        for (var i = 0; i < list1.length; i++) {
            var tt = list1[i].split(',');
            var pp0 = tt[0].replace('(', '');
            var pp1 = tt[1].replace(')', '');
            document.getElementById("Point" + (20 - i) + "X").value = pp0;
            document.getElementById("Point" + (20 - i) + "Y").value = pp1;


            var SlopeTangentLine = replaceAll(document.getElementById("yprime").value, 'x', '(' + pp0 + ')');
            var SlopeTangentLine = replaceAll(SlopeTangentLine, 'y', '(' + pp1 + ')');
            var SlopeTangentLine = FindValue(ProcessInput(SlopeTangentLine));
            var EquationTangentLine = SlopeTangentLine + '(x - ' + '(' + pp0 + ')) + ' + pp1;
            document.getElementById("TextBoxForCartesianGraph" + (20 - i)).value = EquationTangentLine;
            document.getElementById("functiondefinedimplicitly").innerHTML += 'At the point ' + list1[i] + ':<br>'
                      + 'Slope of Tangent Line = ' + SlopeTangentLine + '<br>'
                      + 'Equation of Tangent Line is y = ' + EquationTangentLine + '<br><br><br>';
        }

        document.getElementById("checkboxCartesianPoints").checked = true;          
        GraphingCalculator();
    }


    function DrawTangentLine2(){
        document.getElementById("functiondefinedimplicitly").innerHTML = '';
        window.open('../GraphingCalculator1/implicitexample2.pdf','calculatorExample1','width=700px, height=600px,scrollbars=1');
        document.getElementById('mydropdownCartesian1').value = '5';
        document.getElementById('mydropdownCartesian2').value = '5';

        document.getElementById("TextBoxForCartesianGraph1").value = '(4 - y^(2/3))^(3/2)';
        document.getElementById("TextBoxForCartesianGraph2").value = '-(4 - y^(2/3))^(3/2)';

        document.getElementById("yprime").value = '-y^(1/3)/x^(1/3)';
        document.getElementById("TangentPoint").value = '((4 - 4^(2/3))^(3/2),4)'
        var TangentPointList = document.getElementById("TangentPoint").value;
        if (TangentPointList.indexOf(';') > -1) {
            var list1 = TangentPointList.split(';');
        }
        else {
            var list1 = [TangentPointList];
        }

        for (var i = 0; i < list1.length; i++) {
            var tt = list1[i].split(',');
            var pp0 = tt[0].replace('(', '');
            var pp1 = tt[1].replace(')', '');
            pp0 = FindValue(ProcessInput(pp0));
            pp1 = FindValue(ProcessInput(pp1));
            document.getElementById("Point" + (20 - i) + "X").value = pp0;
            document.getElementById("Point" + (20 - i) + "Y").value = pp1;


            var SlopeTangentLine = replaceAll(document.getElementById("yprime").value, 'x', '(' + pp0 + ')');
            var SlopeTangentLine = replaceAll(SlopeTangentLine, 'y', '(' + pp1 + ')');
            var SlopeTangentLine = FindValue(ProcessInput(SlopeTangentLine));
            var EquationTangentLine = SlopeTangentLine + '(x - ' + '(' + pp0 + ')) + ' + pp1;
            document.getElementById("TextBoxForCartesianGraph" + (20 - i)).value = EquationTangentLine;
            document.getElementById("functiondefinedimplicitly").innerHTML += 'At the point ' + list1[i] + ':<br>'
                      + 'Slope of Tangent Line = ' + SlopeTangentLine + '<br>'
                      + 'Equation of Tangent Line is y = ' + EquationTangentLine + '<br><br><br>';
        }

        document.getElementById("checkboxCartesianPoints").checked = true;          
        GraphingCalculator();
    }





 


function SolveEquationNewtonRaphson(leftbound, rightbound, func) { //Uses Newton-Raphson Method
    //alert('pppp');
    func = replaceAll(func,"y","x");

    func = ProcessInput(func);

    var a = leftbound;   //-100.0;
    var b = rightbound;  //100.0;
    var tt = 0.0;
    var tol = 0.00000005;

    var x1 = a;
    var fx1 = 1.0;
    //alert('func2=' + func2);
    var fpx1 = NDeriv(x1, func);;//FindValue(replaceAll(func2, 'x', '('+x1+')')) ;//

    var x2 = x1 - fx1/fpx1;


    ////alert("hello SolveEquation3");

    try{
        fx1 =  FindValue(replaceAll(func,"x", "("+ x1.toString()+")"));
        fpx1 = NDeriv(x1, func);;//FindValue(replaceAll(func2, 'x', '('+x1+')'));//NDeriv(x1, func);
        x2 = x1 - fx1/fpx1;

    }catch(err){
        if(isNaN(fpx1) ||  Math.abs(fpx1)<= 0.0001){
                x2 = 0;
                return x2;       
          
        };

        return Math.sqrt(-1);
    }

var diff = Math.abs(x1-x2);

if(diff < tol){
    return x2;
}

for(var i = 0; i <= 1000; i++){
    x1 = x2;

    try{
        fx1 =  FindValue(replaceAll(func,"x", "("+ x1.toString()+")"));
        fpx1 = NDeriv(x1, func);;//FindValue(replaceAll(func2, 'x', '('+x1+')'));//NDeriv(x1, func); 
        x2 = x1 - fx1/fpx1;
         

    }catch(err){
        
        return Math.sqrt(-1);
    }
        
    diff = Math.abs(x1-x2);
    if(diff < tol){
        return x2;
    }

}
 
return x2;

} 




/*------------------------------------------------------------------------------
 * NAME       : Linear Equation in Point-Slope Form
 * PURPOSE    : Write Linear Equation in Point-Slope Form
 * PARAMETERS : slope of line; point (x1, y1) on line 
 * RETURNS    : Equation in Point-Slope Form
 *----------------------------------------------------------------------------*/
    function writelinearequation(slope, x1, y1){
            //var text1 = "Slope = m = (y<sub>2</sub> - y<sub>1</sub>)/(x<sub>2</sub> - x<sub>1</sub>) = " + "(" + v4 + " - " + v2 + ")/(" + v3 + " - " + v1 + ") = " + slope2;

            //var text7 = "Using the point (" + v1 + "," + v2 + ") as (x<sub>1</sub>, y<sub>1</sub>)";
            var text2 = "y - " + y1 + " = " + slope + "(x - " + x1 + ")";
            var text2a = replaceAll(text2, " ", "");
            var text2a = replaceAll(text2a, "--", "+");
            var text2a = replaceAll(text2a, "=", " = ");

            return text2a;



            var text3 = "Slope-Intercept Form: y  = mx + b";
            var bb = -slope * v1 + v2;
            var bb2 = ToFraction(bb.toString());
            var text4 = "b = y-intercept = -mx<sub>1</sub> + y<sub>1</sub> = "
                       + "-(" + slope2 + ")(" + v1 + ") + " + v2 + " = " + bb2;

            var text5 = "y = " + slope3 + "x + " + bb2;
            var text5a = replaceAll(text5, " ", "");
            var text5a = text5a.replace("+-", "-");
            var text5a = replaceAll(text5a, "=", " = ");
            var text5a = text5a.replace("+", " + ");


     

    }

    function findtangentline88(){
        var x1y1 = (document.getElementById('x1y1').value).split(';');
        var slope = document.getElementById('slope33').value;
            var text2 = "y - " + x1y1[1] + " = " + slope + "(x - " + x1y1[0] + ")";
            var text2a = replaceAll(text2, " ", "");
            var text2a = replaceAll(text2a, "--", "+");
            var text2a = replaceAll(text2a, "=", " = ");
            document.getElementById('TableDataLimitY1E').innerHTML += 'Equation of the tangent line:<br>'+text2a;
            document.getElementById('slope33').value = slope;
            return ;
    }



function ToDecimal(ss) {
        if (ss.indexOf('e') == -1) { return ss };

        var InputIsPositive = true;
        if(parseFloat(ss) < 0){
            ss = (Math.abs(ss)).toString();
            InputIsPositive = false;
        }

        var ss2 = ss.split('e');
        var mantissa = ss2[0];
        var power = parseInt(ss2[1])
        var res = ss;

        if (mantissa.indexOf('.') == -1 && power > 0) {
            var noz = '';
            for (var i = 1; i <= power; i++) {
                noz += '0';
            }

            res = mantissa + noz;
        }
        else if (mantissa.indexOf('.') > -1 && power > 0) {
            var ttt = mantissa.split('.');
            var lfp = ttt[1].length;
            var noz = '';
            for (var i = 1; i <= (power - lfp); i++) {
                noz += '0';
            }

            res = ttt[0] + ttt[1] + noz;
        }
        else if (mantissa.indexOf('.') == -1 && power < 0) {
            var powerB = Math.abs(parseInt(ss2[1]));
            var noz = '';
            for (var i = 1; i <= (powerB - mantissa.length); i++) {
                noz += '0';
            }

            res = '0.' + noz + mantissa;

        }
        else if (mantissa.indexOf('.') > -1 && power < 0) {
            var powerB = Math.abs(parseInt(ss2[1]));
            var ttt = mantissa.split('.');
            var lfpp = ttt[0].length;
            var noz = '';
            for (var i = 1; i <= powerB - lfpp; i++) {
                noz += '0';
            }

            res = '0.' + noz + ttt[0] + ttt[1];
        }

        if(InputIsPositive == false){
            return '-' + res;
        }

        return res;
    }


function AddPolynomial(poly1, poly2, type) {
        // type = 1 returns all terms;  type = 2 return x terms only; type = 3 return y terms only
        var trq1 = SplitPoly(poly1); // temp1.split("+");

        var trq2 = SplitPoly(poly2); //temp2.split("+");

        var SumConstant = 0;
        var SumX1 = 0;
        var SumX2 = 0;
        var SumY1 = 0;
        var SumY2 = 0;
        var SumXY = 0;

        var trq = trq1.concat(trq2);

        for (var i = 0; i < trq.length; i++) {
            if (trq[i].indexOf("xy") > -1) {
                SumXY += FindValue(trq[i].replace("xy", ""));
            }
            else if (trq[i].indexOf("x^0") > -1) {
                var ttt1 = FindValue(trq[i].replace("x^0", ""));
                SumConstant += ttt1;
            }
            else if (trq[i].indexOf("x^1") > -1) {
                var ttt2 = trq[i].split("x");
                var ttt2b = FindValue(ttt2[0]);
                SumX1 += ttt2b;
            }
            else if (trq[i].indexOf("x^2") > -1) {
                var ttt3 = trq[i].split("x");
                var ttt3b = FindValue(ttt3[0]);
                SumX2 += ttt3b;
            }
            else if (trq[i].indexOf("y^1") > -1) {
                var ttt4 = trq[i].split("y");
                if (ttt4[0] == "") { ttt4[0] = "1" };
                if (ttt4[0] == "-") { ttt4[0] = "-1" };

                var ttt4b = FindValue(ttt4[0]);
                SumY1 += ttt4b;
            }
            else if (trq[i].indexOf("y^2") > -1) {
                var ttt5 = trq[i].split("y");
                if (ttt5[0] == "") { ttt5[0] = "1" };
                if (ttt5[0] == "-") { ttt5[0] = "-1" };
                var ttt5b = FindValue(ttt5[0]);
                SumY2 += ttt5b;
            }
        }


        var polyArray = new Array();
        polyArray[0] = SumXY + "xy";
        polyArray[1] = SumConstant + "x^0";
        polyArray[2] = SumX1 + "x^1";
        polyArray[3] = SumY1 + "y^1";
        polyArray[4] = SumX2 + "x^2";
        polyArray[5] = SumY2 + "y^2";

        if (type == 1){
            return polyArray;           
        }
        else if(type == 2){
            var polyArray2 = new Array();
            polyArray2[0] = SumConstant + "x^0";
            polyArray2[1] = SumX1 + "x^1";
            polyArray2[2] = SumX2 + "x^2";
            return polyArray2; 
        }
        else if(type == 3){
            var polyArray3 = new Array();
            polyArray3[0] = SumConstant + "y^0";
            polyArray3[1] = SumX1 + "y^1";
            polyArray3[2] = SumX2 + "y^2";
            return polyArray3; 
        }
}



function RestrictionType(str){
    str = replaceAll(str, ' ', '');
    if (str.indexOf('x') > -1 && str.indexOf('y') == -1) {
        var tth = str.indexOf('x');
    }
    else if(str.indexOf('x') == -1 && str.indexOf('y') > -1){
        var tth = str.indexOf('y');
    }

    //alert('str=' + str + '......tth=' + tth);

    var str1 = str.charAt(tth - 1);
    var str2 = str.charAt(tth + 1);
    var str3 = str.charAt(tth + 2);

    if(str1 == '{' && str2 == '<' &&  str3 == '='){
        str = str.replace('{', 'INQUALITYA(');
        str = str.replace('<=', ';');
        str = str.replace('}', ')');
        return str;
    }
    else if(str1 == '{' && str2 == '<' &&  str3 != '='){
        str = str.replace('{', 'INQUALITYB(');
        str = str.replace('<', ';');
        str = str.replace('}', ')');
        return str;
    }
    else if(str1 == '{' && str2 == '>' &&  str3 == '='){
        str = str.replace('{', 'INQUALITYC(');
        str = str.replace('>=', ';');
        str = str.replace('}', ')');
        return str;
    }
    else if(str1 == '{' && str2 == '>' &&  str3 != '='){
        str = str.replace('{', 'INQUALITYD(');
        str = str.replace('>', ';');
        str = str.replace('}', ')');
        return str;
    }
    else if(str1 == '{' && str2 == '!' &&  str3 == '='){
        str = str.replace('{', 'INQUALITYK(');
        str = str.replace('!=', ';');
        str = str.replace('}', ')');
        return str;
    }
    else if(str1 == '{' && str2 == '=' &&  str3 != '='){
        str = str.replace('{', 'INQUALITYF(');
        str = str.replace('=', ';');
        str = str.replace('}', ')');
        return str;
    }
    else if(str1 == '=' && str2 == '<' && str3 == '='){
        str = str.replace('{', 'INQUALITYG(');
        str = str.replace('<=', ';');
        str = str.replace('<=', ';');
        str = str.replace('}', ')');
        return str;
    }
    else if(str1 == '=' && str2 == '<' && str3 != '='){
        str = str.replace('{', 'INQUALITYH(');
        str = str.replace('<=', ';');
        str = str.replace('<', ';');
        str = str.replace('}', ')');
        return str ;
    }
    else if(str1 == '<' && str2 == '<' && str3 == '='){
        str = str.replace('{', 'INQUALITYI(');
        str = str.replace('<', ';');
        str = str.replace('<=', ';');
        str = str.replace('}', ')');
        return str ;
    }
    else if(str1 == '<' && str2 == '<' && str3 != '='){
        str = str.replace('{', 'INQUALITYJ(');
        str = str.replace('<', ';');
        str = str.replace('<', ';');
        str = str.replace('}', ')');
        return str ;;
    }


    return str;
}


function ProcessInequality(expr) {
   
        //INQUALITYA   x <= number
        //INQUALITYB   x < number
        //INQUALITYC   x >= number
        //INQUALITYD   x > number
        //INQUALITYK   x != number
        //INQUALITYF   x = number

        //INQUALITYG   num1 <= x <= num2
        //INQUALITYH   num1 <= x < num2
        //INQUALITYI   num1 < x <= num2
        //INQUALITYJ  num1 < x < num2


        var le = String.fromCharCode(8804);
        var ge = String.fromCharCode(8805);
        var ne = String.fromCharCode(8800);

        expr = replaceAll(expr, " ", "");
        expr = replaceAll(expr, le, "<=");
        expr = replaceAll(expr, ge, ">=");
        expr = replaceAll(expr, ne, "!=");

        var hy = '';
        while (expr.indexOf('{') > -1) {
            var hhr = expr.indexOf('{');
            //alert('hhr....' + hhr);

            var tt1 = expr.indexOf('{');
            //alert('tt1.....' + tt1);

            var tt2 = expr.indexOf('}');
            //alert('tt2.....' + tt2);

            var tt3 = expr.substring(tt1, tt2 + 1);
            //alert('tt3.....' + tt3);
            //alert('999999');      
            var tt4 = RestrictionType(tt3);
            //alert('tt4.....' + tt4);
 
            expr = expr.replace(tt3, '*' + tt4);

            hy += tt4 + '#';
            //alert('expr....' + expr);

        }

        hy = replaceAll(hy, 'y', 'x');
        document.getElementById('domainexpr').value = hy;
        //alert('hy....' + hy);
        expr = expr + '+ RESTRICTION(x)';


        //if (hy.indexOf('x') > -1) {
           
        //}
        //else if(hy.indexOf('y') > -1){
        //    expr = expr + '+ RESTRICTION(y)';
        //}

        //alert('hy1111....' + hy);

        //alert('expr....' + expr);
        return expr;
        


        if (tgh1[i].indexOf("<=x") > -1 && tgh1[i].indexOf("x<=") == -1) {
            var casenum = '1';
        }
        else if (tgh1[i].indexOf("<=x") > -1 && tgh1[i].indexOf("x<=") > -1) {
             var casenum = '0';
        }

        for (var i = 1; i <= tgh1.length - 1; i++) {
            ////alert("expression " + i + ": " + tgh1[i]);
            if (tgh1[i].indexOf("<=x") > -1 && tgh1[i].indexOf("x<=") > -1) {
                tgh1[i] = replaceAll(tgh1[i], "}", ")");
                tgh1[i] = replaceAll(tgh1[i], "<=", ";");
                
                var ddd = tgh1[i].split(";");
                var ppp1 = FindValue(ddd[0]);
                var ppp2 = FindValue(ddd[2]);
                tgh1[i] = ppp1 + ";" + "x" + ";" + ppp2;
                tgh1[i] = "*INQUALITYG(" + tgh1[i] + ")";
                tgh1[0] = tgh1[0] + tgh1[i];

            }

            else if (tgh1[i].indexOf("<=x") > -1 && tgh1[i].indexOf("x<") > -1) {
                tgh1[i] = replaceAll(tgh1[i], "}", "");
                tgh1[i] = replaceAll(tgh1[i], "<=", ";");
                tgh1[i] = replaceAll(tgh1[i], "<", ";");

                var ddd = tgh1[i].split(";");
                var ppp1 = FindValue(ddd[0]);
                var ppp2 = FindValue(ddd[2]);
                tgh1[i] = ppp1 + ";" + "x" + ";" + ppp2;

                tgh1[i] = "+ INQUALITYH(" + tgh1[i] + ")";
                tgh1[0] = tgh1[0] + tgh1[i];
            }

            else if (tgh1[i].indexOf("<x") > -1 && tgh1[i].indexOf("x<=") > -1) {
                tgh1[i] = replaceAll(tgh1[i], "}", "");
                tgh1[i] = replaceAll(tgh1[i], "<=", ";");
                tgh1[i] = replaceAll(tgh1[i], "<", ";");
                
                var ddd = tgh1[i].split(";");
                var ppp1 = FindValue(ddd[0]);
                var ppp2 = FindValue(ddd[2]);
                tgh1[i] = ppp1 + ";" + "x" + ";" + ppp2;

                tgh1[i] = "+ INQUALITYI(" + tgh1[i] + ")";
                tgh1[0] = tgh1[0] + tgh1[i];
            }

            else if (tgh1[i].indexOf("<x") > -1 && tgh1[i].indexOf("x<") > -1) {
                tgh1[i] = replaceAll(tgh1[i], "}", "");
                tgh1[i] = replaceAll(tgh1[i], "<", ";");
                //tgh1[i] = replaceAll(tgh1[i], "<", ";");

                var ddd = tgh1[i].split(";");
                var ppp1 = FindValue(ddd[0]);
                var ppp2 = FindValue(ddd[2]);
                tgh1[i] = ppp1 + ";" + "x" + ";" + ppp2;

                tgh1[i] = "+ INQUALITYJ(" + tgh1[i] + ")";
                tgh1[0] = tgh1[0] + tgh1[i];
            }
            else if (tgh1[i].indexOf("x<=") > -1) {
                tgh1[i] = replaceAll(tgh1[i], "}", "");
                tgh1[i] = replaceAll(tgh1[i], "<=", ";");

                var ddd = tgh1[i].split(";");
                var ppp1 = FindValue(ddd[1]);
                tgh1[i] = "x" + ";" + ppp1;
                tgh1[i] = "+ INQUALITYA(" + tgh1[i] + ")";

                tgh1[0] = tgh1[0] + tgh1[i];
            }
            else if (tgh1[i].indexOf("x<") > -1) {
                tgh1[i] = replaceAll(tgh1[i], "}", "");
                tgh1[i] = replaceAll(tgh1[i], "<", ";");

                var ddd = tgh1[i].split(";");
                var ppp1 = FindValue(ddd[1]);
                tgh1[i] = "x" + ";" + ppp1;

                tgh1[i] = "+ INQUALITYB(" + tgh1[i] + ")";

                tgh1[0] = tgh1[0] + tgh1[i];
            }
            else if (tgh1[i].indexOf("x>=") > -1) {
                tgh1[i] = replaceAll(tgh1[i], "}", "");
                tgh1[i] = replaceAll(tgh1[i], ">=", ";");

                var ddd = tgh1[i].split(";");
                var ppp1 = FindValue(ddd[1]);
                tgh1[i] = "x" + ";" + ppp1;

                tgh1[i] = "+ INQUALITYC(" + tgh1[i] + ")";

                tgh1[0] = tgh1[0] + tgh1[i];
            }
            else if (tgh1[i].indexOf("x>") > -1) {
                tgh1[i] = replaceAll(tgh1[i], "}", "");
                tgh1[i] = replaceAll(tgh1[i], ">", ";");

                var ddd = tgh1[i].split(";");
                var ppp1 = FindValue(ddd[1]);
                tgh1[i] = "x" + ";" + ppp1;
                tgh1[i] = "+ INQUALITYD(" + tgh1[i] + ")";

                tgh1[0] = tgh1[0] + tgh1[i];
            }
            if (tgh1[i].indexOf("x!=") > -1) {
                tgh1[i] = replaceAll(tgh1[i], "}", "");
                tgh1[i] = replaceAll(tgh1[i], "!=", ";");

                var ddd = tgh1[i].split(";");
                var ppp1 = FindValue(ddd[1]);
                tgh1[i] = "x" + ";" + ppp1;
                tgh1[i] = "+ INQUALITYK(" + tgh1[i] + ")";

                tgh1[0] = tgh1[0] + tgh1[i];
            }
            else if (tgh1[i].indexOf("x=") > -1) {
                tgh1[i] = replaceAll(tgh1[i], "}", "");
                tgh1[i] = replaceAll(tgh1[i], "=", ";");

                var ddd = tgh1[i].split(";");
                var ppp1 = FindValue(ddd[1]);
                tgh1[i] = "x" + ";" + ppp1;
                tgh1[i] = "+ INQUALITYF(" + tgh1[i] + ")";

                tgh1[0] = tgh1[0] + tgh1[i];
            }


        }


        ////alert("processed expression is " +tgh1[0]);

        return tgh1[0];

}



function NDeriv(x, func){
    
    var InputExpression = ProcessInput(func);
 
    var h = 0.0001;
    var df1 = 0.0;   
    var df2 = 0.0;   
    var df3 = 0.0;   
    var df4 = 0.0;
    var dx = 0.0;
    var v1 = 0.0;
    var Mx = 0.0;   
    var Mx1 = 0.0;   
    var Mx2 = 0.0;   
    var Mx3 = 0.0;   
    var Mx4 = 0.0;   
    var temp = "";
   
    try{
        //calculate deverivatives
        Mx = x;
        Mx1 = Mx + 2*h;
        temp = replaceAll(InputExpression, "x", "(" + Mx1 + ")");

        df1 = FindValue(temp);
        Mx2 = Mx + h;
        
        ////alert("Hello NDeriv df1 = " + df1);     
        
        
        temp = replaceAll(InputExpression, "x", "(" + Mx2 + ")");            
        df2 = FindValue(temp);
        Mx3 = Mx - h;
        temp = replaceAll(InputExpression, "x", "(" + Mx3 + ")");            
        df3 = FindValue(temp);
        Mx4 = Mx - 2*h;
        temp = replaceAll(InputExpression, "x", "(" + Mx4 + ")");            
        df4 = FindValue(temp);

        v1 = -df1 + 8*df2 -8*df3 + df4;
        dx = v1/(12*h);    
        dx = Math.round(dx * 1000000000000) / 1000000000000;
    
    }
        catch (err) {
        dx = NaN; //Handle errors here
    }

    return dx;
    //parser.AddVariable("x", Mx1.ToString());
    //df1 = parser.SimplifyDouble(func);
    //parser.RemoveVariable("x");                         

    //Mx2 = Mx + h;
    //parser.AddVariable("x", Mx2.ToString());
    //df2 = parser.SimplifyDouble(func);
    //parser.RemoveVariable("x");                  

    //Mx3 = Mx - h;
    //parser.AddVariable("x", Mx3.ToString());
    //df3 = parser.SimplifyDouble(func);
    //parser.RemoveVariable("x");     

    //Mx4 = Mx - 2*h;
    //parser.AddVariable("x", Mx4.ToString());
    //df4 = parser.SimplifyDouble(func);
    //parser.RemoveVariable("x");    
                            
    //v1 = -df1 + 8*df2 -8*df3 + df4;
    //dx = v1/(12*h);    
    //dx = Math.Round(dx, 10);
     
                      
}    

function LinearInterpolation(func){
            
            var bound = 100000;
            var tempff = func;
            
            while (tempff.indexOf(" ") > -1) {
                tempff = tempff.replace(" ", "");
            }

            while (tempff.indexOf("=") > -1) {
                tempff = tempff.replace("=", "-(");
            }
            
            tempff = tempff + ")";
            
            while (tempff.indexOf("--") > -1) {
                tempff = tempff.replace("--", "+");
            }




            var x1 = 1.0;
            var x2 = 2.0;
  
            ////alert("tempff = " + tempff);   

            var tempf1 = tempff;
            tempf1 = replaceAll(tempff, "x", "(1.0)");

            ////alert("tempf1 = " + tempf1);


            var tempf2 = tempff;
            tempf2 = replaceAll(tempff, "x", "(2.0)");


            ////alert("tempf2 = " + tempf2);



            //return;


            var y1 = SolveEquationDirect2(-bound, bound, tempf1);  //****************************
            var y2 = SolveEquationDirect2(-bound, bound, tempf2);  //****************************


            var mmm = (y2-y1)/(x2-x1);
            mmm = Round(mmm, 12);
            var mmm2 = -mmm*x1 + y1;
            mmm2 = Round(mmm2, 12);

            //<h4>tempf1 = @tempf1; x1 = @x1; y1 = @y1;  x2 = @x2; y2 = @y2; m = @mmm</h4>

            
            var funcff2 = mmm.toString() + "x + " + mmm2.toString() ;
            //funcff2 = funcff2.Replace(" ", "");
            while (funcff2.indexOf(" ") > -1) {
                funcff2 = funcff2.replace(" ", "");
            }
                        
            
            //funcff2 = funcff2.Replace("--", "+");
            while (funcff2.indexOf("--") > -1) {
                funcff2 = funcff2.replace("--", "+");
            }            
            
            //funcff2 = funcff2.replace("+-", "-");
            while (funcff2.indexOf("+-") > -1) {
                funcff2 = funcff2.replace("+-", "-");
            }            
            
             
            //funcff2 = ProcessInput(funcff2);   //****************************
 

            return funcff2;


                      
}    


/*------------------------------------------------------------------------------
 * NAME       : Round
 * PURPOSE    : Rounds input value (val) to a specified number of decimal places (n)
 * PARAMETERS : val, n
 * RETURNS    : rounded val
 *----------------------------------------------------------------------------*/
 
function Round(val, n){
    return Math.round(val*Math.pow(10, n))/Math.pow(10, n);
}


/*------------------------------------------------------------------------------
 * NAME       : ProcessInput
 * PURPOSE    : Processes input for EVALUATOR function
 * PARAMETERS : input string
 * RETURNS    : processed input string
 *----------------------------------------------------------------------------*/


    function ProcessInput(StringToProcess) {

        ////alert("ProcessInput");

        var PI = String.fromCharCode(960);   
        var space = String.fromCharCode(160); 
        var overline = String.fromCharCode(773); 
        var secondroot = String.fromCharCode(8730);
        var thirdroot = String.fromCharCode(8731); 
        var fourthroot = String.fromCharCode(8732);                     
        //var Logbassa = "Log" + String.fromCharCode(8336); 
        var ndash = String.fromCharCode(8211); 
        var sup2 = String.fromCharCode(178); 
        var sup3 = String.fromCharCode(179); 
        var sup4 = String.fromCharCode(8308); 
        var sup5 = String.fromCharCode(8309); 
        var sup6 = String.fromCharCode(8310); 
        var sup7 = String.fromCharCode(8311); 
        var star = String.fromCharCode(8727);

        var ggg = StringToProcess;
        
        ggg = replaceAll(ggg, " ", "");

        ggg = replaceAll(ggg, "X", "x");
        ggg = replaceAll(ggg, "10^", "10.0^");
        

        ggg = replaceAll(ggg, String.fromCharCode(960), "PI");
        ggg = replaceAll(ggg, String.fromCharCode(160), "");  //space
        ggg = replaceAll(ggg, String.fromCharCode(773), "");

        while (ggg.indexOf("Root2(") > -1) {
            ggg = ggg.replace("Root2(", "SQRT(");
        }
        while (ggg.indexOf("Root3(") > -1) {
            ggg = ggg.replace("Root3(", "CBROOT(");
        }
        while (ggg.indexOf("Root4(") > -1) {
            ggg = ggg.replace("Root4(", "FOURTHROOT(");
        }
        while (ggg.indexOf("Root5(") > -1) {
            ggg = ggg.replace("Root5(", "FIFTHROOT(");
        }
        while (ggg.indexOf("Root6(") > -1) {
            ggg = ggg.replace("Root6(", "SIXTHROOT(");
        }
        while (ggg.indexOf("Root7(") > -1) {
            ggg = ggg.replace("Root7(", "SEVENTHROOT(");
        }
        while (ggg.indexOf("Root8(") > -1) {
            ggg = ggg.replace("Root8(", "EIGTHROOT(");
        }
        while (ggg.indexOf("Root9(") > -1) {
            ggg = ggg.replace("Root9(", "NINTHROOT(");
        }
        while (ggg.indexOf("Root10(") > -1) {
            ggg = ggg.replace("Root10(", "TENTHROOT(");
        }
        ggg = replaceAll(ggg, String.fromCharCode(8730), "SQRT");
        ggg = replaceAll(ggg, String.fromCharCode(8731), "CBROOT");
        ggg = replaceAll(ggg, String.fromCharCode(8732), "FOURTHROOT");
        ggg = replaceAll(ggg, String.fromCharCode(178), "^(2)");
        ggg = replaceAll(ggg, String.fromCharCode(179), "^(3)");
        ggg = replaceAll(ggg, String.fromCharCode(8308), "^(4)");
        ggg = replaceAll(ggg, String.fromCharCode(8309), "^(5)");
        ggg = replaceAll(ggg, String.fromCharCode(8310), "^(6)");
        ggg = replaceAll(ggg, String.fromCharCode(8311), "^(7)");
        ggg = replaceAll(ggg, String.fromCharCode(8336), "bassa");
        ggg = replaceAll(ggg, "x", "(x)");



        ggg = replaceAll(ggg, "Asec", "ASCC");
        ggg = replaceAll(ggg, "Sec", "SCC");
        ggg = replaceAll(ggg, "Sech", "SCCH");
 

        while (ggg.indexOf("*-") > -1) {
            ggg = ggg.replace("*-", "*(-1)*");
        }

        ggg = replaceAll(ggg, "PI", "(3.141592653589793238462643)");//3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679
        ggg = replaceAll(ggg, "e", "(2.71828182845904523536028)");//2.71828182845904523536028747135266249775724709369995
        ggg = replaceAll(ggg, "ASCC", "Asec");
        ggg = replaceAll(ggg, "SCC", "Sec");
        ggg = replaceAll(ggg, "SCCH", "Sech");


        var Len = ggg.length;
        var str = ggg.split('');
        
        ////alert("checking ........ggg =  " + ggg);
        ////alert("checking ........str =  " + ggg);

        //inserts '*' between number character and 'x' or 'PI' or 'e'
        for (var i = 0; i < Len-1; i++) {
            if (isInteger(str[i]) && isAlpha(str[i + 1])) { //number followed by alpha
                str[i + 1] = "*" + str[i + 1];
            }
            else if (str[i] == ")" && isAlpha(str[i + 1])) {// ) followed by alpha
                str[i + 1] = "*" + str[i + 1];
            }
            else if (isInteger(str[i]) && str[i + 1] == "(") {//number followed by (
                str[i + 1] = "*" + str[i + 1];
            }
            else if (str[i] == ")" && str[i + 1] == "(") {// ) followed by (
                str[i + 1] = "*" + str[i + 1];
            }

        }

 
        ggg = str.join("");

        ////alert ("str.join = " + str);

  
        
          while (ggg.indexOf("**") > -1) {
            ggg = ggg.replace("**", "*");
        }


        while (ggg.indexOf("+*") > -1) {
            ggg = ggg.replace("+*", "+");
        }


        while (ggg.indexOf("*+") > -1) {
            ggg = ggg.replace("*+", "+");
        }


        while (ggg.indexOf("(+") > -1) {
            ggg = ggg.replace("(+", "(");
        }

        while (ggg.indexOf("++") > -1) {
            ggg = ggg.replace("++", "+");
        }

        while (ggg.indexOf("--") > -1) {
            ggg = ggg.replace("--", "+");
        }
        

        while (ggg.indexOf("+-") > -1) {
            ggg = ggg.replace("+-", "-");
        }


        while (ggg.indexOf("/-") > -1) {
            ggg = ggg.replace("/-", "*(0-1)/");
        }


        while (ggg.indexOf("-*") > -1) {
            ggg = ggg.replace("-*", "-");
        }


        while (ggg.indexOf("/*") > -1) {
            ggg = ggg.replace("/*", "/");
        }


        while (ggg.indexOf("*^") > -1) {
            ggg = ggg.replace("*^", "^");
        }


        while (ggg.indexOf("(*") > -1) {
            ggg = ggg.replace("(*", "(");
        }


        while (ggg.indexOf("*)") > -1) {
            ggg = ggg.replace("*)", ")");
        }


        while (ggg.indexOf("*;") > -1) {
            ggg = ggg.replace("*;", ";");
        }


         while (ggg.indexOf(";+") > -1) {
            ggg = ggg.replace(";+", ";");
        }


        while (ggg.indexOf(",*") > -1) {
            ggg = ggg.replace(",*", ",");
        }


        while (ggg.indexOf("*,") > -1) {
            ggg = ggg.replace("*,", ",");
        }


        while (ggg.indexOf("-(") > -1) {
            ggg = ggg.replace("-(", "-1*(");
        }

        while (ggg.indexOf("[[") > -1) {
            ggg = ggg.replace("[[", "GI(");
        }

        while (ggg.indexOf("]]") > -1) {
            ggg = ggg.replace("]]", ")");
        }

        while (ggg.indexOf("[") > -1) {
            ggg = ggg.replace("[", "(");
        }


        while (ggg.indexOf("]") > -1) {
            ggg = ggg.replace("]", ")");
        }


        for (var i = 0; i <= 9; i++) {
            while (ggg.indexOf(")" + i) > -1) {
                ggg = ggg.replace(")" + i, ")*" + i);
            }

        }


        var txy = ggg.split("");

        if(txy[0] == "-"){
            txy[0] = "(0-1)*";
        }

        for (var i = 1; i < txy.length; i++ ){
            if(txy[i] == "-"){
                if (txy[i - 1] == "(" || txy[i - 1] == ";") {
                    txy[i] = "(0-1)*";
                }
                else{
                    txy[i] = "+(0-1)*";   
                }
            }
        }



        //while (ggg.indexOf(";+(") > -1) {
        //    ggg = ggg.replace(";+(", ";(");
        //}


        ggg = txy.join("");
              
        //alert("ggg = " + ggg);


        return ggg;


    } //processnum





/*------------------------------------------------------------------------------
 * NAME       : IsNumericc
 * PURPOSE    : determines whether input string is a number
 * PARAMETERS : s
 * RETURNS    : true or false
 *----------------------------------------------------------------------------*/

    function IsNumericc(s) {
        return !isNaN(parseFloat(s)) && isFinite(s);

    }

    
 

function ReplaceIneq(expr) {
    
    expr = replaceAll(expr, " ", "");

    var le = String.fromCharCode(8804);
    var ge = String.fromCharCode(8805);
    var ne = String.fromCharCode(8800);

    expr = replaceAll(expr, " ", "");
    expr = replaceAll(expr, "}", ")");
    expr = replaceAll(expr, le, "<=");
    expr = replaceAll(expr, ge, ">=");
    expr = replaceAll(expr, ne, "!=");


    ////alert("Hello from ReplaceIneq(expr) ==> " + expr);
    
    if (expr.indexOf("{x<=") > -1) {
        expr = replaceAll(expr, "{x<=", " + Rstrict(x;11;");
    }

    ////alert("Hello from ReplaceIneq(expr) ==> " + expr);

        
    if (expr.indexOf("{x<") > -1) {
        expr = replaceAll(expr, "{x<", " + Rstrict(x;22;");
    }
        
    if (expr.indexOf("{x>=") > -1) {
        expr = replaceAll(expr, "{x>=", " + Rstrict(x;33;");
    }
        
    if (expr.indexOf("{x>") > -1) {
        expr = replaceAll(expr, "{x>", " + Rstrict(x;44;");
    }
        
    if (expr.indexOf("{x!=") > -1) {
        expr = replaceAll(expr, "{x!=", " + Rstrict(x;55;");
    }
        
    if (expr.indexOf("{x=") > -1) {
        expr = replaceAll(expr, "{x=", " + Rstrict(x;66;");
    }


    ////alert("Hello222 from ReplaceIneq(expr) ==> " + expr);

    return expr;

}



function replaceAll(txt, replace, with_this) {
    return txt.replace(new RegExp(replace, 'g'), with_this);
}


function isInteger(s) {
    var i;
    for (i = 0; i < s.length; i++) {
        // Check that current character is number.
        var c = s.charAt(i);
        if (((c < "0") || (c > "9"))) return false;
        // uncomment the next line of code if you want to detect leading zeros.
        //if (i==1 && c=="0") return false;
    }
    // All characters are numbers.
    return true;
}


function checkineq(val1, inesign, val2){  //check inequality
            
            var inesign = replaceAll(inesign, " ", "");  

            var checkinequality = new Boolean();

            if(inesign == "<"){
                if(val1 < val2){
                    checkinequality = true;
                }
                else{
                    checkinequality = false;
                }
                                               
            }
            else if(inesign == "<="){
                if(val1 <= val2){
                    checkinequality = true;
                }
                else{
                    checkinequality = false;
                }                                   
            }
            else if(inesign == ">"){
                if(val1 > val2){
                    checkinequality = true;
                }
                else{
                    checkinequality = false;
                }                                   
            }
            else if(inesign == ">="){
                if(val1 >= val2){
                    checkinequality = true;
                }
                else{
                    checkinequality = false;
                }                             
            }
            else if(inesign == "="){
                if(val1 == val2){
                    checkinequality = true;
                }
                else{
                    checkinequality = false;
                }                                   
            }
            else if(inesign == "!="){
                if(val1 != val2){
                    checkinequality = true;
                }
                else{
                    checkinequality = false;
                }                                   
            }               

        return checkinequality;

}




function Rstrict(val1, inesign, val2){  //check inequality

    var Value = 0;
    
    if(checkineq(val1, inesign, val2) == false){
        Value = Math.sqrt(-1);
    }

        return Value;

}


function dotproduct(A, B){
    
    var sum = 0.0;
    var dim = A.length;
    var sss = "";

    for(var i=1; i<=dim; i++){
        sum = sum + A[i]*B[i];
        
        sss = sss + ToFraction3(A[i]*B[i]);

        if(i<dim){ 
            sss = sss + " + ";
            }
                    
    }
            
    sss = sss.replace(" ", "");
    sss = sss.replace("+-", "-");
    sss = sss.replace("+", " + ");
    sss = sss.replace("-", " - ");
    var retsum = ToFraction3(sum);
    return sss + " = " + retsum;            

}
   

function SolveEquation3(leftbound, rightbound, func) { //Uses Newton-Raphson Method
    //alert('pppp');
    func = replaceAll(func,"y","x");

    func = ProcessInput(func);

    var a = leftbound;   //-100.0;
    var b = rightbound;  //100.0;
    var tt = 0.0;
    var tol = 0.0000000005;

    var x1 = a;
    var fx1 = 1.0;
    var fpx1 = NDeriv(x1, func);

    var x2 = x1 - fx1/fpx1;


    ////alert("hello SolveEquation3");

    try{
        fx1 =  FindValue(replaceAll(func,"x", "("+ x1.toString()+")"));
        fpx1 = NDeriv(x1, func);
        x2 = x1 - fx1/fpx1;

    }catch(err){
        if(isNaN(fpx1) ||  Math.abs(fpx1)<= 0.0001){
                x2 = 0;
                return x2;       
          
        };

        return Math.sqrt(-1);
    }

var diff = Math.abs(x1-x2);

if(diff < tol){
    return x2;
}

for(var i = 0; i <= 1000; i++){
    x1 = x2;

    try{
        fx1 =  FindValue(replaceAll(func,"x", "("+ x1.toString()+")"));
        fpx1 = NDeriv(x1, func); 
        x2 = x1 - fx1/fpx1;
        
        //direct approximation
        if(isNaN(fpx1) |  Math.abs(fpx1)<= 0.0001){ 
          
            var aa = Round(x1,1) - 2.0;
            var bb = Round(x1,1) + 2.0;
            var ttr = FindValue(replaceAll(func,"x", "("+ aa.toString()+")"));
            var xt = 0.0;             


            for(var j=0; j<=40; j++){
                xt = aa + 0.1*j;
                x1 = FindValue(replaceAll(func,"x", "("+ xt.toString()+")"));
                
                if(Math.abs(ttr) > Math.abs(x1)){ttr = x1;}
                //<h1>xt = @xt ; ttr = @ttr ; x1 = @x1</h1>
                if(Math.abs(ttr) < 0.00000000001){
                     return xt;            
                }
            }

            
            aa = Round(ttr,1) - 0.2;
            bb = Round(ttr,1) + 0.2;
            ttr = FindValue(replaceAll(func,"x", "("+ aa.toString()+")"));
             

            for(var j=0; j<=40; j++){
                xt = aa + 0.01*j;
                x1 = FindValue(replaceAll(func, "x", "("+ xt.toString()+")"));
                if(Math.abs(ttr) > Math.abs(x1)){ttr = x1;}
 
                if(Math.abs(ttr) < 0.00000000001){
                     return xt;            
                }
            }


            aa = Round(ttr,1) - 0.02;
            bb = Round(ttr,1) + 0.02;
            ttr = FindValue(replaceAll(func,"x", "("+ aa.toString()+")"));
             
            for(var j=0; j<=40; j++){
                xt = aa + 0.001*j;
                x1 = FindValue(replaceAll(func, "x", "("+ xt.toString()+")"));
                if(Math.abs(ttr) > Math.abs(x1)){ttr = x1;}
                if(Math.abs(ttr) < 0.00000000001){
                    return xt; 
                }
            }

            return xt;                   
        
        };  //direct approximation
        

    }catch(err){
        
        return Math.sqrt(-1);
    }
        
    diff = Math.abs(x1-x2);
    if(diff < tol){
        return x2;
    }

}
 
return x2;

} 





function SolveEquationNewtonMethod(leftbound, rightbound, func, func2) { //Uses Newton-Raphson Method
    alert('Uses Newton-Raphson Method');
    func = replaceAll(func,"y","x");
    func = ProcessInput(func);
    func2 = ProcessInput(func2);

    var a = leftbound;   //-100.0;
    var b = rightbound;  //100.0;
    var tt = 0.0;
    var tol = 0.00000000005;

    var x1 = a;
    var fx1 = FindValue(replaceAll(func,"x", "("+ x1.toString()+")"));
    var fpx1 = FindValue(replaceAll(func2,"x", "("+ x1.toString()+")"));

    var x2 = x1 - fx1/fpx1;


    ////alert("hello SolveEquation3");

    try{
        fx1 =  FindValue(replaceAll(func,"x", "("+ x1.toString()+")"));
        fpx1 = FindValue(replaceAll(func2,"x", "("+ x1.toString()+")"));
        x2 = x1 - fx1/fpx1;

    }catch(err){
        if(isNaN(fpx1) ||  Math.abs(fpx1)<= 0.0001){
                x2 = 0;
                return x2;       
          
        };

        return NaN;
    }
    
    if(Math.abs(x1-x2) < tol){
    return x2;
}

for(var i = 0; i <= 1000; i++){
    alert('x1 = ' + x1 + '......x2 = ' + x2 + 'diff = ' + Math.abs(x1 - x2));
    x1 = x2;
    try{
        fx1 =  FindValue(replaceAll(func,"x", "("+ x1.toString()+")"));
        fpx1 = FindValue(replaceAll(func2,"x", "("+ x1.toString()+")"));
        x2 = x1 - fx1/fpx1;
    }catch(err){        
        return NaN;
    }
        
    if(Math.abs(x1-x2) < tol){
        return x2;
    }

}
 
return x2;

} 


       
function EvaluateExpression(expression) {

        var tokens = expression.split(",");
        ////alert("In Evaluation and expression = " + tokens);

        var evalStack = [];

        while (tokens.length != 0) {
            var currentToken = tokens.shift();

            ////alert("currentToken = " + currentToken);

            if (isNumber(currentToken) || currentToken == ";") {
                evalStack.push(currentToken);
            }

            else if (IsFunction(currentToken)) {
                ////alert("In Function:  " + "currentToken = " + currentToken);
                var FuncName = currentToken;
                if (FuncName != "e") {
                        FuncName = currentToken.toUpperCase();
                }

                if (FuncName == "RSTRICT"  || FuncName == "INQUALITYG"  || FuncName == "INQUALITYH"  
                    || FuncName == "INQUALITYI"  || FuncName == "INQUALITYJ" ) {//functions with three arguments                    
                    var operand3 = evalStack.pop();  //right parameter
                    evalStack.pop();
                    var operand2 = evalStack.pop();  //inequality sign
                    evalStack.pop();
                    var operand1 = evalStack.pop();  //left parameter
                    var result = FunctionEval(currentToken, parseFloat(operand1), parseFloat(operand2), parseFloat(operand3), 4, 5);
                
                }

                else if (FuncName == "NROOT" || FuncName == "LOGA" || FuncName == "LCM" || FuncName == "GCF" 
                        || FuncName == "INQUALITYA" || FuncName == "INQUALITYB" || FuncName == "INQUALITYC" 
                        || FuncName == "INQUALITYD" || FuncName == "INQUALITYK" || FuncName == "INQUALITYF") 
                {//functions with two arguments
                    var operand2 = evalStack.pop();  //argument
                    evalStack.pop();  //semicolon ;
                    var operand1 = evalStack.pop();  //base

                    var result = FunctionEval(FuncName, parseFloat(operand1), parseFloat(operand2), 3, 4, 5);
                    
                }
                else {//functions with one argument
                    //alert('in functions with one argument');
                    var operand1 = evalStack.pop();
                    var result = FunctionEval(currentToken, parseFloat(operand1), 2, 3, 4, 5);
                }

                ////alert("result = " + result);

                evalStack.push(result);
            }

            else if (isOperator(currentToken)) {
                var operand1 = evalStack.pop();  //.pop method removes the last element from an array
                if (evalStack != "") {
                    var operand2 = evalStack.pop();
                }
                else {
                    var operand2 = 0;
                }

                ////alert("currentToken + operand1 + operand2 = " + currentToken + " , " + operand1 + " , " + operand2);

                var result = PerformOperation(parseFloat(operand1), parseFloat(operand2), currentToken);

                ////alert("result = " + result);
                evalStack.push(result);
            }

               ////alert("tokens = " + tokens + ".............." + "Currentoken = " + currentToken + ".............." + "result = " + result + ".............." + "evalStack = " + evalStack + "<br><br>");
               //document.write("tokens = " + tokens + ".............." + "Currentoken = " + currentToken + ".............." + "result = " + result + ".............." + "evalStack = " + evalStack + "<br><br>");
               
        }
        return evalStack.pop();
}


    /*------------------------------------------------------------------------------
    * NAME       : PerformOperation         FunctionEval(func, arg1)
    * PURPOSE    : Calculates binarary expression
    * PARAMETERS : operand1, operand2, operator
    * RETURNS    : value of expression
    *----------------------------------------------------------------------------*/
    function PerformOperation(operand1, operand2, operator) {
        switch (operator) {
            case '+':
                return operand1 + operand2;
            case '-':
                return operand2 - operand1;
            case '*':
                return operand1 * operand2;
            case '/':
                return operand2 / operand1;
            case '^':

                //return Math.pow(operand2, operand1);
                if (operand2 >= 0 || operand1 == parseInt(operand1)) {
                    return Math.pow(operand2, operand1);
                }

                ////alert("operand2 = " + operand2 + "........" + "operand1 = " + operand1);
                //first converts operand1 to a fraction if it's not an integer
                var temp = ToFraction(operand1.toString());

                ////alert("temp = " + temp);

                var temp2 = new Array();
                if (temp.indexOf("/")) {
                    var temp2 = temp.split("/")

                    if (parseFloat(temp2[1]) % 2 == 1) {//rational exponent has odd denominator

                        var vem = -1 * Math.pow(-operand2, 1.0 / parseFloat(temp2[1]));
                        return Math.pow(vem, parseFloat(temp2[0]));

                    }
                    else {
                        return Math.sqrt(-1);
                    }
                }


            default:
                return;
        }

    }




    /*------------------------------------------------------------------------------
    * NAME       : InfixToPostfix
    * PURPOSE    : Converts Infix expression to Postfix expression
    * PARAMETERS : expression
    * RETURNS    : Postfix expression
    *----------------------------------------------------------------------------*/

    function InfixToPostfix(expression) {
        //document.write(expression);
        expression = ProcessInput(expression);
        //document.write(expression);

        var tokens = expression.split(/([0-9.]+|[*+-\/()])/);

        var outputQueue = [];
        var operatorStack = [];

        while (tokens.length != 0) {
            var currentToken = tokens.shift();

            ////currentToken = " + currentToken);

            if (isAlpha(currentToken)) {
                //outputQueue.push(currentToken);
                ////alert("isAlpha = " + currentToken);
                ////alert("tokens1 = " + tokens);
                var func = currentToken;
                ////alert("tokens2 = " + tokens);
                currentToken = tokens.shift();
                while (isAlpha(currentToken)) {
                    func += currentToken;

                    currentToken = tokens.shift();
                }

                tokens.unshift(currentToken);

                if (func == "e") {
                    var eee = new Array;
                    eee[0] = " " + Math.E;  //add space in front
                    ////alert("tokens 1 :............... " + tokens);
                    tokens.unshift(eee[0]);
                    ////alert("tokens 2 :............... " + tokens);
                }
                else if (func == "PI") {
                    var pie = new Array;
                    pie[0] = " " + Math.PI;  //add space in front
                    ////alert("tokens 1 :............... " + tokens);
                    tokens.unshift(pie[0]);
                    ////alert("tokens 2 :............... " + tokens);
                }


                else {
                    operatorStack.push(func);
                }

            }

            else if (isNumber(currentToken)) {
                outputQueue.push(currentToken);

            }
            else if (currentToken == ";") {

                var OperatorStackLast = operatorStack.pop();
                if(OperatorStackLast == "*"){
                    outputQueue.push(OperatorStackLast);
                }
                else{
                    operatorStack.push(OperatorStackLast);
                }
                outputQueue.push(currentToken);

            }

            else if (isOperator(currentToken)) {
                while ((getAssociativity(currentToken) == 'left' &&
                                getPrecedence(currentToken) <= getPrecedence(operatorStack[operatorStack.length - 1])) ||
                                (getAssociativity(currentToken) == 'right' &&
                                getPrecedence(currentToken) < getPrecedence(operatorStack[operatorStack.length - 1]))) {
                    outputQueue.push(operatorStack.pop())
                }

                operatorStack.push(currentToken);

            }

            else if (currentToken == '(') {
                operatorStack.push(currentToken);
            }
            else if (currentToken == ')') {
                while (operatorStack[operatorStack.length - 1] != '(') {
                    if (operatorStack.length == 0)
                        throw ("Parenthesis balancing error! ");

                    outputQueue.push(operatorStack.pop());
                }

                operatorStack.pop();  //delete "(


                if (operatorStack.length != 0) {

                    var FirstElement = operatorStack.pop();

                    if (IsFunction(FirstElement)) {
                        outputQueue.push(FirstElement);
                    }
                    else {
                        operatorStack.push(FirstElement);  //put element back to stack because it's not a function
                    }
                }

            }


            //if (currentToken != "") {
            //document.write("Current Token is " + currentToken + " .......... outputQueue is " + outputQueue + " .......  operatorStack is " + operatorStack + "<br><br>");
            //}


        }

        while (operatorStack.length != 0) {
            if (!operatorStack[operatorStack.length - 1].match(/([()])/))
                outputQueue.push(operatorStack.pop());
            else
                throw ("");
        }

        var tkp = outputQueue.join(",");
         
        tkp = tkp.replace(new RegExp(" ", 'g'), "");

        ////alert("tkp = " + tkp);
               

        return tkp;

    }





    /*------------------------------------------------------------------------------
    * NAME       : isOperator
    * PURPOSE    : Determines whether or not input character is an operator
    * PARAMETERS : character
    * RETURNS    : boolean value
    *----------------------------------------------------------------------------*/

    function isOperator(token) {
        if (!token.match(/([*+-^\/])/))
            return false;
        else
            return true;
    }


    /*------------------------------------------------------------------------------
    * NAME       : isNumber
    * PURPOSE    : Determines whether or not input character is a number
    * PARAMETERS : character
    * RETURNS    : boolean value
    *----------------------------------------------------------------------------*/

    function isNumber(token) {
        if (!token.match(/([0-9]+)/))
            return false;
        else
            return true;
    }


    /*------------------------------------------------------------------------------
    * NAME       : isAlpha
    * PURPOSE    : Determines whether or not input character is an alpha
    * PARAMETERS : character
    * RETURNS    : boolean value
    *----------------------------------------------------------------------------*/

    function isAlpha(token) {

        myCharCode = token.charCodeAt(0);

        if (((myCharCode > 64) && (myCharCode < 91)) || ((myCharCode > 96) && (myCharCode < 123))) {
            return true;
        }

        return false;
    }



    /*------------------------------------------------------------------------------
    * NAME       : getPrecedence
    * PURPOSE    : Determines "Precedence" value of an operator
    * PARAMETERS : character
    * RETURNS    : numerical value
    *----------------------------------------------------------------------------*/
    function getPrecedence(token) {
        switch (token) {
            case '^':
                return 9;
            case '*':
            case '/':
            case '%':
                return 8;
            case '+':
            case '-':
                return 6;
            default:
                return -1;
        }
    }


    /*------------------------------------------------------------------------------
    * NAME       : getAssociativity
    * PURPOSE    : Determines Associative Property of an operator
    * PARAMETERS : character
    * RETURNS    : "left" or "right"
    *----------------------------------------------------------------------------*/

    function getAssociativity(token) {
        switch (token) {
            case '+':
            case '-':
            case '*':
            case '/':
                return 'left';
            case '^':
                return 'right';
        }

    }



    /*------------------------------------------------------------------------------
    * NAME       : HandleFunctions
    * PURPOSE    : Execute built-in functions
    * PARAMETERS : pstrTok - The current function name
    *              pStack - Operand stack
    * RETURNS    : Nothing, the result is pushed back onto the stack.
    *----------------------------------------------------------------------------*/

    //function replaceAll(txt, replace, with_this) {
    //    return txt.replace(new RegExp(replace, 'g'), with_this);
    //}

    function FunctionEval(func, arg1, arg2, arg3, arg4, arg5) {
        func = func.toUpperCase();
        switch (func) {           
            case "RESTRICTION":
                //alert('in  (x+5){x  ≤  2} + (4-x){x  >  2} ');
                var restfunc = document.getElementById('domainexpr').value;
                var restfunc1 = replaceAll(restfunc, 'x', arg1);
                var restfunc2 = restfunc1.split('#');
                restfunc2.pop();
                //alert('restfunc2.length.....' + restfunc2.length);
                //alert('restfunc2[0]....' + restfunc2[0]);
                //alert('restfunc2[1]....' + restfunc2[1]);

                var summ = 0;
                for (var i = 0; i < restfunc2.length; i++) {
                    //alert('i= ' + i +'.....restfunc2[i]....' + restfunc2[i]);

                    if ((restfunc2[i]).indexOf("INQUALITYA") > -1) {
                        var tt1 = restfunc2[i].replace("INQUALITYA(", '');
                        var tt1 = tt1.replace(")", '');
                        var tt2 = tt1.split(';');
                        //tt2[0] = FindValue(tt2[0]);
                        tt2[1] = FindValue(tt2[1]);
                        if (parseFloat(tt2[0]) <= parseFloat(tt2[1])) {
                            summ += 1;
                        }
                    }
                    else if ((restfunc2[i]).indexOf("INQUALITYB") > -1) {
                        var tt1 = restfunc2[i].replace("INQUALITYB(", '');
                        var tt1 = tt1.replace(")", '');
                        var tt2 = tt1.split(';');
                        //tt2[0] = FindValue(tt2[0]);
                        tt2[1] = FindValue(tt2[1]);
                        if (parseFloat(tt2[0]) < parseFloat(tt2[1])) {
                            summ += 1;
                        }

                    }
                    else if ((restfunc2[i]).indexOf("INQUALITYC") > -1) {
                        //alert('............INQUALITYC............................asdfasdf');

                        var tt1 = restfunc2[i].replace("INQUALITYC(", '');
                        var tt1 = tt1.replace(")", '');
                        var tt2 = tt1.split(';');
                        //tt2[0] = FindValue(tt2[0]);
                        tt2[1] = FindValue(tt2[1]);
                        if (parseFloat(tt2[0]) >= parseFloat(tt2[1])) {
                            summ += 1;
                        }
                    }

                    else if ((restfunc2[i]).indexOf("INQUALITYD") > -1) {
                        //alert('............INQUALITYD............................asdfasdf');
                        var tt1 = restfunc2[i].replace("INQUALITYD(", '');
                        var tt1 = tt1.replace(")", '');
                        var tt2 = tt1.split(';');
                        //tt2[0] = FindValue(tt2[0]);
                        tt2[1] = FindValue(tt2[1]);
                        if (parseFloat(tt2[0]) > parseFloat(tt2[1])) {
                            summ += 1;
                        }

                    }
                    else if ((restfunc2[i]).indexOf("INQUALITYF") > -1) {
                        var tt1 = restfunc2[i].replace("INQUALITYF(", '');
                        var tt1 = tt1.replace(")", '');
                        var tt2 = tt1.split(';');
                        //tt2[0] = FindValue(tt2[0]);
                        tt2[1] = FindValue(tt2[1]);
                        if (parseFloat(tt2[0]) == parseFloat(tt2[1])) {
                            summ += 1;
                        }
                    }
                    else if ((restfunc2[i]).indexOf("INQUALITYK") > -1) {
                        var tt1 = restfunc2[i].replace("INQUALITYK(", '');
                        var tt1 = tt1.replace(")", '');
                        var tt2 = tt1.split(';');
                        //tt2[0] = FindValue(tt2[0]);
                        tt2[1] = FindValue(tt2[1]);
                        if (parseFloat(tt2[0]) != parseFloat(tt2[1])) {
                            summ += 1;
                        }
                    }
                    else if ((restfunc2[i]).indexOf("INQUALITYG") > -1) {

                        var tt1 = restfunc2[i].replace("INQUALITYG(", '');
                        var tt1 = tt1.replace(")", '');
                        var tt2 = tt1.split(';');
                        tt2[0] = FindValue(tt2[0]);
                        //tt2[1] = FindValue(tt2[1]);
                        tt2[2] = FindValue(tt2[2]);
                        if (parseFloat(tt2[0]) <= parseFloat(tt2[1]) && parseFloat(tt2[1]) <= parseFloat(tt2[2])) {
                            summ += 1;
                        }
                    }
                    else if ((restfunc2[i]).indexOf("INQUALITYH") > -1) {
                        var tt1 = restfunc2[i].replace("INQUALITYH(", '');
                        var tt1 = tt1.replace(")", '');
                        var tt2 = tt1.split(';');
                        tt2[0] = FindValue(tt2[0]);
                        //tt2[1] = FindValue(tt2[1]);
                        tt2[2] = FindValue(tt2[2]);
                        if (parseFloat(tt2[0]) <= parseFloat(tt2[1]) && parseFloat(tt2[1]) < parseFloat(tt2[2])) {
                            summ += 1;
                        }
                    }
                    else if ((restfunc2[i]).indexOf("INQUALITYI") > -1) {
                        var tt1 = restfunc2[i].replace("INQUALITYI(", '');
                        var tt1 = tt1.replace(")", '');
                        var tt2 = tt1.split(';');
                        tt2[0] = FindValue(tt2[0]);
                        //tt2[1] = FindValue(tt2[1]);
                        tt2[2] = FindValue(tt2[2]);
                        if (parseFloat(tt2[0]) < parseFloat(tt2[1]) && parseFloat(tt2[1]) <= parseFloat(tt2[2])) {
                            summ += 1;
                        }
                    }
                    else if ((restfunc2[i]).indexOf("INQUALITYJ") > -1) {
                        var tt1 = restfunc2[i].replace("INQUALITYJ(", '');
                        var tt1 = tt1.replace(")", '');
                        var tt2 = tt1.split(';');
                        tt2[0] = FindValue(tt2[0]);
                        //tt2[1] = FindValue(tt2[1]);
                        tt2[2] = FindValue(tt2[2]);
                        if (parseFloat(tt2[0]) < parseFloat(tt2[1]) && parseFloat(tt2[1]) < parseFloat(tt2[2])) {
                            summ += 1;
                        }
                    }
                }

                if (summ == 0) {
                    return NaN;
                }
                else {
                    return 0;
                }
            case "FAC":
                if (parseFloat(arg1) == 0) {
                    return 1;
                }
                else if (parseFloat(arg1) < 0) {
                    return NaN;
                }
                else if (parseFloat(arg1) != parseInt(arg1)) {
                    return NaN;
                }
                else {
                    var factorialArray = factorial100();
                    if (parseFloat(arg1) <= 100) {
                        var tt = factorialArray[arg1];
                        //alert('arg1=' + arg1 + '......tt = ' + tt);
                        return parseInt(factorialArray[arg1]);
                    }

                    var prod = factorialArray[100];
                    for (var j = 101; j <= parseFloat(arg1); j++) {
                        prod *= j;
                    }
                }
                //alert('arg1...' + arg1 + '....prod = ' + prod);
                return prod;
            case "GI":
                return Math.floor(arg1); 
            case "ACOS": return Math.acos(arg1);
            case "ASIN": return Math.asin(arg1);
            case "ATAN": return Math.atan(arg1);
            case "ABS":  return Math.abs(arg1);
            case "COS":  return Math.cos(arg1);
            case "AVG":
                  return 1;//function currently not used
            case "FIX": return Math.sqrt(arg1);
            case "HEX": return Math.sqrt(arg1);
            case "LOG":
                if (parseFloat(arg1) <= 0) { return NaN;};
                return Math.log(arg1) / Math.log(10);     
                          
            case "LN": return Math.log(arg1);
            case "ROUND": return Math.sqrt(arg1);
            case "SIN": return Math.sin(arg1);
            case "SQRT": return Math.sqrt(arg1);
            case "CBROOT": 
                if (arg1 <= 0) {
                    arg1 = -1 * arg1;
                    return -1*Math.pow(arg1, 0.33333333333333);

                }
                else{
                    return Math.pow(arg1, 0.33333333333333);
                }            

            case "FOURTHROOT": return Math.pow(arg1, 0.25);
            case "FIFTHROOT": 
                if (arg1 <= 0) {
                    arg1 = -1 * arg1;
                    return -1*Math.pow(arg1, 0.2);
                }
                else{
                    return Math.pow(arg1, 0.2);
                }           


            case "SIXTHROOT": return Math.pow(arg1, 0.16666666666666);
            case "SEVENTHROOT":  
                if (arg1 <= 0) {
                    arg1 = -1 * arg1;
                    return -1*Math.pow(arg1, 0.14285714285714285);
                }
                else{
                    return Math.pow(arg1, 0.14285714285714285);
                }           
            case "EIGTHROOT": return Math.pow(arg1, 0.125);
            case "NINTHROOT":  
                if (arg1 <= 0) {
                    arg1 = -1 * arg1;
                    return -1*Math.pow(arg1, 0.1111111111111111);
                }
                else{
                    return Math.pow(arg1, 0.1111111111111111);
                }           
            case "TENTHROOT": return Math.pow(arg1, 0.1);
            case "TAN": return Math.tan(arg1);
            case "SINDGG": return Math.sin(arg1 * 0.01745329252);
            case "COSDGG": return Math.cos(arg1 * 0.01745329252);
            case "TANDGG": return Math.tan(arg1 * 0.01745329252);
            case "CSCDGG": return 1.0 / Math.sin(arg1 * 0.01745329252);
            case "SECDGG": return 1.0 / Math.cos(arg1 * 0.01745329252);
            case "COTDGG": return 1.0 / Math.tan(arg1 * 0.01745329252);
            case "CSC": return 1.0 / Math.sin(arg1);
            case "SEC": return 1.0 / Math.cos(arg1);
            case "COT": return 1.0 / Math.tan(arg1);
            case "SINH": return (Math.pow(Math.E, arg1) - Math.pow(Math.E, -arg1)) / 2.0;
            case "COSH": return (Math.pow(Math.E, arg1) + Math.pow(Math.E, -arg1)) / 2.0;
            case "TANH":
                var x = (Math.pow(Math.E, arg1) - Math.pow(Math.E, -arg1)) / 2.0;
                var y = (Math.pow(Math.E, arg1) + Math.pow(Math.E, -arg1)) / 2.0;
                var r = x / y;
                return r;
            case "CSCH": return Math.sqrt(arg1);
                var x = (Math.pow(Math.E, arg1) - Math.pow(Math.E, -arg1)) / 2.0;
                //var y = (Math.pow(Math.E, objTmp) + Math.pow(Math.E, -objTmp)) / 2.0;
                var r = 1.0 / x;
                return r;
            case "SECH": return Math.sqrt(arg1);
                //var x = (Math.pow(Math.E, objTmp) - Math.pow(Math.E, -objTmp)) / 2.0;
                var y = (Math.pow(Math.E, arg1) + Math.pow(Math.E, -arg1)) / 2.0;
                var r = 1.0 / y;
                return r;
            case "COTH": return Math.sqrt(arg1);
                var x = (Math.pow(Math.E, arg1) - Math.pow(Math.E, -arg1)) / 2.0;
                var y = (Math.pow(Math.E, arg1) + Math.pow(Math.E, -arg1)) / 2.0;
                var r = y / x;
                return r;

            case "NROOT":
                if(arg2 < 0){
                     if(arg1 % 2 == 1) {//exponent is odd 
                        var vem = -1 * Math.pow(-arg2, 1.0 / arg1);
                        return vem;
                    }
                    else {
                        return NaN;
                    }    
                }                    
                else{
                    return Math.pow(arg2,1.0/arg1);
                }

            case "LOGA":
                //alert("arg1 = " + arg1 + "....... arg2 = " + arg2);
               
                alert("arg11111 = " + arg1 + "....... arg2 = " + arg2);

                return (Math.log(arg2) / Math.log(arg1));

            case "RSTRICT":
                var val1 = arg1;
                var inesign = arg2;
                var val2 = arg3;

                if (inesign == 11) {
                    if (val1 <= val2) {
                        checkinequality = 0;
                    }
                    else {
                        checkinequality = NaN;
                    }

                }
                else if (inesign == 22) {
                    if (val1 < val2) {
                        checkinequality = 0;
                    }
                    else {
                        checkinequality = NaN;
                    }
                }
                else if (inesign == 33) {
                    if (val1 >= val2) {
                        checkinequality = 0;
                    }
                    else {
                        checkinequality = NaN;
                    }
                }
                else if (inesign == 44) {
                    if (val1 > val2) {
                        checkinequality = 0;
                    }
                    else {
                        checkinequality = NaN;
                    }
                }
                else if (inesign == 55) {
                    if (val1 != val2) {
                        checkinequality = 0;
                    }
                    else {
                        checkinequality = NaN;
                    }
                }
                else if (inesign == 66) {
                    if (val1 == val2) {
                        checkinequality = 0;
                    }
                    else {
                        checkinequality = NaN;
                    }
                }

                return checkinequality;

            case "LCM":
                //////alert("hello LCM");
                n1 = Math.abs(arg1);
                n2 = Math.abs(arg2);
                var prod = n1 * n2;
                var min = Math.min(n1, n2);
                var GCF = 1;
                for (var i = 1; i <= min; i++) {
                    if (n1 % i == 0 && n2 % i == 0) {
                        GCF = i;

                    }
                }

                //////alert("prod = " + prod + ".......... GCF = " + GCF);
                return prod / GCF;

            case "GCF":
                ////alert("hello GCF");
                n1 = Math.abs(arg1);
                n2 = Math.abs(arg2);	
                var GCF = 1;		
                var min = Math.min(n1, n2); 		
                for(var i=1; i<=min; i++){		
                    if(n1 % i == 0 && n2 % i == 0 ){		
                        GCF = i;           		
                    }		
                }                     		
                return GCF;

            case "INQUALITYA":
                ////alert("INQUALITYA   hello");
                var val1 = arg1;
                var val2 = arg2;

                ////alert("val1 = " + val1 + ";;;;;;; val2 = " + val2);

                if (val1 <= val2) {
                    return '1';
                }
                else {
                    return '0';
                };


            case "INQUALITYB":
                var val1 = arg1;
                var val2 = arg2;
                if (val1 < val2) {
                    return '1';
                }
                else {
                    return '0';
                };

            case "INQUALITYC":
                var val1 = arg1;
                var val2 = arg2;
                if (val1 >= val2) {
                    return '1';
                }
                else {
                    return '0';
                };

            case "INQUALITYD":
                var val1 = arg1;
                var val2 = arg2;
                if (val1 > val2) {
                    return '1';
                }
                else {
                    return '0';
                };

            case "INQUALITYK":
                var val1 = arg1;
                var val2 = arg2;
                if (val1 != val2) {
                    return '1';
                }
                else {
                    return '0';
                };

            case "INQUALITYF":
                var val1 = arg1;
                var val2 = arg2;
                if (val1 == val2) {
                    return '1';
                }
                else {
                    return '0';
                };

            case "INQUALITYG":
                var val1 = arg1;
                var val2 = arg2;
                var val3 = arg3;
                //alert('val1...' + val1 + '.....val2...' + val2 + '.....val3...' + val3);
                if (parseFloat(val1) <= parseFloat(val2) && parseFloat(val2) <= parseFloat(val3)) {
                    return 1;
                    var kk = 1;
                }
                else {
                    return 0;
                    var kk = 0;
                };
                //alert('kk......'+ kk + '.....val1...' + val1 + '.....val2...' + val2 + '.....val3...' + val3);
                return kk;

            case "INQUALITYH":
                var val1 = arg1;
                var val2 = arg2;
                var val3 = arg3;

                if (val1 <= val2 && val2 < val3) {
                    return '1';
                }
                else {
                    return '0';
                };


            case "INQUALITYI":
                var val1 = arg1;
                var val2 = arg2;
                var val3 = arg3;

                if (val1 < val2 && val2 <= val3) {
                    return '1';
                }
                else {
                    return '0';
                };

            case "INQUALITYJ":
                var val1 = arg1;
                var val2 = arg2;
                var val3 = arg3;

                if (val1 < val2 && val2 < val3) {
                    return '1';
                }
                else {
                    return '0';
                };



                break;
        }

    }


    /*------------------------------------------------------------------------------
    * NAME       : ParentheseMatch
    * PURPOSE    : Determines whether expression has balanced parentheses
    * PARAMETERS : character
    * RETURNS    : true or false
    *----------------------------------------------------------------------------*/

    function ParentheseMatch(expression) {

        while (expression.indexOf(" ") > -1) {
            expression = expression.replace(" ", "");
        }

        var inputexpression = expression.split("");
        var LL = inputexpression.length;


        var countLP = 0;
        var countRP = 0;

        for (var i = 0; i < LL; i++) {
            if (inputexpression[i] == "(") {
                countLP += 1;
            }
            else if (inputexpression[i] == ")") {
                countRP += 1;
            }
            else {
                //do nothing 
            }

        }

        ////alert("countLP = " + countLP + " ;;;  countRP = " + countRP);
        if (countLP == countRP) {
            return true;
        }
        else {
            return false;
        }


        ////alert("hello paren:  inputexpression is " + inputexpression);
        while (inputexpression.length > 0) {

            var currentChar = inputexpression[0];
            ////alert("currentChar = " + currentChar);

            if (currentChar == "(") {
                inputexpression.shift(); //removes 1st character
                inputexpression.push(currentChar); //add character to the end of array
                ////alert("hello 1 = " + inputexpression);
            }
            else if (currentChar == ")") {
                inputexpression.shift();  //removes 1st character
                inputexpression.pop();    //removes last charactre
                ////alert("hello 2 = " + inputexpression);
            }
            else {
                //////alert("hello 3A = " + inputexpression);
                inputexpression.shift(); //removes 1st character
                ////alert("hello 3 = " + inputexpression);


            }
        }
        
        ////alert("input expression final = " + inputexpression);
        
        if (expression.indexOf(")") > -1 || expression.indexOf("(") > -1)
            return false;
        else {
            return true;
        }


    }


    /*------------------------------------------------------------------------------
    * NAME       : IsFunction
    * PURPOSE    : Checks whether the string specified by strArg is a function name
    * PARAMETERS : strArg - The string to be checked
    * RETURNS    : False - If strArg is not a valid built-in function name.
    *              True - Otherwise 
    *----------------------------------------------------------------------------*/
    function IsFunction(func) {

        ////alert("Hello IsFunction1 and func is " + func);
        func = func.toUpperCase();

        ////alert("Hello IsFunction2 and func is " + func);

        var ListFuncOps = ["AVG", "ABS", "ACOS", "ASC", "ASIN", "ATAN", "CDATE", "CHR", "COS", "DATE", "FIX","FAC",
                        "HEX", "IIF", "LCASE", "LEFT", "LOG", "LN", "MAX", "MID", "MIN", "RIGHT", "ROUND",
                        "SIN", "SQRT", "TAN", "UCASE", "POWER", "CBROOT", "FOURTHROOT","FIFTHROOT", "SIXTHROOT","SEVENTHROOT","EIGTHROOT","NINTHROOT","TENTHROOT", "NROOT", "LOGA",
                        "SINDGG", "COSDGG", "TANDGG", "CSCDGG", "SECDGG", "COTDGG", "CSC", "SEC", "COT",
                        "RSTRICT", "SINH", "COSH", "TANH", "CSCH", "SECH", "COTH", "LCM", "GCF",
                        "INQUALITYA", "INQUALITYB", "INQUALITYC", "INQUALITYD", "INQUALITYK", "INQUALITYF", 
                        "INQUALITYG", "INQUALITYH", "INQUALITYI", "INQUALITYJ", "GI", 'RESTRICTION'];


        var indx = 0;
        ////alert("function is " );
        //strArg = strArg.toUpperCase();
        func = func.toUpperCase();

        for (indx = 0; indx < ListFuncOps.length; indx++) {
            ////alert("function is " + lstFuncOps[indx]);

            if (func == ListFuncOps[indx])
            ////alert("function is " + lstFuncOps[indx]);
                return true;

        }
        return false;
    }



/*------------------------------------------------------------------------------
* NAME       : ToFrac
* PURPOSE    : Converts input expression to reduced fraction
* PARAMETERS : 
* RETURNS    : False - If strArg is not a valid built-in function name.
*              True - Otherwise 
*----------------------------------------------------------------------------*/
function ToFraction(userinput) {
    if(parseFloat(userinput) == 0){
        return userinput;
    }

    var result = FindValue(userinput);

    if(parseInt(result) == result){
        return result;
    }
                  

    if (IsNumericc(result) == false || result == null) {
        return NaN;
    }

    var Z = new Array();
    var D = new Array();
    var N = new Array();
    var SignFlag = 0;  //for positive input
    var X = result;  

    if (Math.abs(X) == parseInt(Math.abs(X))) {
        return X
    }

    if (X < 0) {
        X = Math.abs(X);
        SignFlag = 1;  //for negative input
    }
    
    Z[1] = X;
    D[0] = 0;
    D[1] = 1;
    N[1] = 1;

    for (var i = 1; i < 10; i++) {
        var r1 = parseFloat(N[i]);  
        var r2 = parseFloat(D[i]);  
        var tol = r1 / r2 - X;
        if (Math.abs(tol) < 0.000000000001) {
            ss = r1.toString() + "/" + r2.toString();
            if (SignFlag == 1) {
                ss = "-" + ss;
            }

            break;
        }

        Z[i + 1] = 1 / (Z[i] - parseInt(Z[i]));
        D[i + 1] = D[i] * (parseInt(Z[i + 1])) + D[i - 1];
        N[i + 1] = parseInt(Math.round(X * D[i + 1]));

    }

    if(r1 == r2){
        return "1";
    }
    else if(r2 == 1){
        return r1;
    }

    if(SignFlag == 1){
         return "-" + r1 + "/" + r2;
    }

    return r1 + "/" + r2;
}


/*------------------------------------------------------------------------------
* NAME       : SolveEquationDirect
* PURPOSE    : Finds solution of equation by search for solution over closed interval [a, b]
* PARAMETERS : leftbound, rightbound, function
* RETURNS    : returns solution if it exists.
*              
*----------------------------------------------------------------------------*/

        function SolveEquationDirect(leftbound, rightbound, func) { //Bisection Method

        func = replaceAll(func, "y", "x");

        //func = ProcessInput(func);

        var a = leftbound;   
        var b = rightbound;  
        var tt = 0.0;
        var tol = 0.00000000005;


        //try x = 0 first         
        if(leftbound < 0 & rightbound > 0){
            var temp1 = replaceAll(func, "x", "(0)");
            var temp3 = FindValue(temp1);
            if (Math.abs(temp3) < tol) {
                return 0;
            }
        }
        

        var AA = a.toString();
        if(AA.indexOf("e") > -1){
            AA = toFixed(AA);
        }        

        var BB = b.toString();
        if(BB.indexOf("e") > -1){
            BB = toFixed(BB);
        }    

        fa = FindValue(replaceAll(func, "x", "(" + AA + ")"));
        fb = FindValue(replaceAll(func, "x", "(" + BB + ")"));


        //case where f(a) and f(b) have same sign
        if((fa < 0 && fb < 0) || (fa > 0 && fb > 0)){
            var sollly = 100;
            var solllx = 0;
            for (var j = a; j <= b; j+=0.0001) {
                var c = j;
                var CC = c.toString();
                if(CC.indexOf("e") > -1){
                    CC = toFixed(CC);
                } 

                var fc = FindValue(replaceAll(func, "x", "(" + CC + ")"));
                if(sollly > Math.abs(fc)){
                    sollly = Math.abs(fc);
                    solllx = c;
                }

            }

            fc = FindValue(replaceAll(func, "x", "(" + solllx + ")"));
            if(Math.abs(fc) > 0.00000000001){
                return Math.sqrt(-1);
            }
            return solllx;
        }
        


        //case 1  f(a) < f(b)
        if (fa < fb) {
            for (var j = 0; j <= 100; j++) {
                var c = (a + b) / 2.0;

                var CC = c.toString();
                if(CC.indexOf("e") > -1){
                    CC = toFixed(CC);
                } 

                var fc = FindValue(replaceAll(func, "x", "(" + CC + ")"));

                var diff = Math.abs(b - a) / 2.0;
                if (fc == 0 || diff < tol) {
                    return c;
                    break;
                }


                if (fc < 0) {
                    a = c;
                }
                else if (fc > 0) {
                    b = c;
                }


            }
        }
        else if (fa > fb) {
            for (var j = 0; j <= 1000; j++) {
                var c = (a + b) / 2.0;
                
                var CC = c.toString();
                if(CC.indexOf("e") > -1){
                    CC = toFixed(CC);
                } 

                var fc = FindValue(replaceAll(func, "x", "(" + CC + ")"));
                if (fc < 0) {
                    b = c;
                }
                else if (fc > 0) {
                    a = c;
                }

                var diff = Math.abs(b - a) / 2.0;
                if (fc == 0 || diff < tol) {
                    return c;
                    break;

                }


            }

        }
        else if (fa == fb) {
            return NaN;
        }

        return NaN;
    }


/*------------------------------------------------------------------------------
* NAME       : SolveEquationDirect
* PURPOSE    : Finds solution of equation by search for solution over closed interval [a, b]
* PARAMETERS : leftbound, rightbound, function
* RETURNS    : returns solution if it exists.
*              
*----------------------------------------------------------------------------*/

        function SolveEquationDirectTolerance(leftbound, rightbound, func,Tolerance) { //Bisection Method
        func = replaceAll(func, "y", "x");
        //alert('in 4444');

        //func = ProcessInput(func);

        var a = leftbound;   
        var b = rightbound;  
        var tt = 0.0;
        var thh = '0.';
        for (var i = 1; i <= Tolerance;i++){
            thh += '0';
        }
        thh += '5';
        var tol = parseFloat(thh);
        //alert('tol...'+tol);


        //try x = 0 first         
        if(leftbound < 0 & rightbound > 0){
            var temp1 = replaceAll(func, "x", "(0)");
            var temp3 = FindValue(temp1);
            if (Math.abs(temp3) < tol) {
                return 0;
            }
        }
        

        var AA = a.toString();
        if(AA.indexOf("e") > -1){
            AA = toFixed(AA);
        }        

        var BB = b.toString();
        if(BB.indexOf("e") > -1){
            BB = toFixed(BB);
        }    

        fa = FindValue(replaceAll(func, "x", "(" + AA + ")"));
        fb = FindValue(replaceAll(func, "x", "(" + BB + ")"));


        //case where f(a) and f(b) have same sign
        if((fa < 0 && fb < 0) || (fa > 0 && fb > 0)){
            var sollly = 100;
            var solllx = 0;
            for (var j = a; j <= b; j+=0.0001) {
                var c = j;
                var CC = c.toString();
                if(CC.indexOf("e") > -1){
                    CC = toFixed(CC);
                } 

                var fc = FindValue(replaceAll(func, "x", "(" + CC + ")"));
                if(sollly > Math.abs(fc)){
                    sollly = Math.abs(fc);
                    solllx = c;
                }

            }

            fc = FindValue(replaceAll(func, "x", "(" + solllx + ")"));
            if(Math.abs(fc) > 0.00000000001){
                return Math.sqrt(-1);
            }
            return solllx;
        }
        


        //case 1  f(a) < f(b)
        if (fa < fb) {
            for (var j = 0; j <= 100; j++) {
                var c = (a + b) / 2.0;

                var CC = c.toString();
                if(CC.indexOf("e") > -1){
                    CC = toFixed(CC);
                } 

                var fc = FindValue(replaceAll(func, "x", "(" + CC + ")"));

                var diff = Math.abs(b - a) / 2.0;
                if (fc == 0 || diff < tol) {
                    return c;
                    break;
                }


                if (fc < 0) {
                    a = c;
                }
                else if (fc > 0) {
                    b = c;
                }


            }
        }
        else if (fa > fb) {
            for (var j = 0; j <= 1000; j++) {
                var c = (a + b) / 2.0;
                
                var CC = c.toString();
                if(CC.indexOf("e") > -1){
                    CC = toFixed(CC);
                } 

                var fc = FindValue(replaceAll(func, "x", "(" + CC + ")"));
                if (fc < 0) {
                    b = c;
                }
                else if (fc > 0) {
                    a = c;
                }

                var diff = Math.abs(b - a) / 2.0;
                if (fc == 0 || diff < tol) {
                    return c;
                    break;

                }


            }

        }
        else if (fa == fb) {
            return NaN;
        }

        return NaN;
    }



/*------------------------------------------------------------------------------
* NAME       : SolveEquationDirect2
* PURPOSE    : Finds solution of equation by search for solution over closed interval [a, b]
* PARAMETERS : leftbound, rightbound, function
* RETURNS    : returns solution if it exists.
*              
*----------------------------------------------------------------------------*/

        function SolveEquationDirect2(leftbound, rightbound, func) { //Bisection Method

        func = replaceAll(func, "y", "x");

        //func = ProcessInput(func);

        var a = leftbound;   
        var b = rightbound;  
        var tt = 0.0;
        var tol = 0.00000000005;


        //try x = 0 first            
        var temp1 = replaceAll(func, "x", "(0)");
        var temp3 = FindValue(temp1);
        if (Math.abs(temp3) < tol) {
            ////alert("temp3 = " + temp3);

            return 0;
        }


        var AA = a.toString();
        if(AA.indexOf("e") > -1){
            AA = toFixed(AA);
        }        

        var BB = b.toString();
        if(BB.indexOf("e") > -1){
            BB = toFixed(BB);
        }    

        fa = FindValue(replaceAll(func, "x", "(" + AA + ")"));
        fb = FindValue(replaceAll(func, "x", "(" + BB + ")"));


        //case where f(a) and f(b) have same sign
        if((fa < 0 && fb < 0) || (fa > 0 && fb > 0)){
            var sollly = 100;
            var solllx = 0;
            for (var j = a; j <= b; j+=0.0001) {
                var c = j;
                var CC = c.toString();
                if(CC.indexOf("e") > -1){
                    CC = toFixed(CC);
                } 

                var fc = FindValue(replaceAll(func, "x", "(" + CC + ")"));
                if(sollly > Math.abs(fc)){
                    sollly = Math.abs(fc);
                    solllx = c;
                }

            }

            fc = FindValue(replaceAll(func, "x", "(" + solllx + ")"));
            if(Math.abs(fc) > 0.00000000001){
                return Math.sqrt(-1);
            }
            return solllx;
        }
        


        //case 1  f(a) < f(b)
        if (fa < fb) {
            for (var j = 0; j <= 100; j++) {
                var c = (a + b) / 2.0;

                var CC = c.toString();
                if(CC.indexOf("e") > -1){
                    CC = toFixed(CC);
                } 

                var fc = FindValue(replaceAll(func, "x", "(" + CC + ")"));

                var diff = Math.abs(b - a) / 2.0;
                if (fc == 0 || diff < tol) {
                    return c;
                    break;
                }


                if (fc < 0) {
                    a = c;
                }
                else if (fc > 0) {
                    b = c;
                }


            }
        }
        else if (fa > fb) {
            for (var j = 0; j <= 1000; j++) {
                var c = (a + b) / 2.0;
                
                var CC = c.toString();
                if(CC.indexOf("e") > -1){
                    CC = toFixed(CC);
                } 

                var fc = FindValue(replaceAll(func, "x", "(" + CC + ")"));
                if (fc < 0) {
                    b = c;
                }
                else if (fc > 0) {
                    a = c;
                }

                var diff = Math.abs(b - a) / 2.0;
                if (fc == 0 || diff < tol) {
                    return c;
                    break;

                }


            }

        }
        else if (fa == fb) {
            return Math.sqrt(-1);
        }

        return Math.sqrt(-1);
    }





    /*------------------------------------------------------------------------------
    * NAME       : FindMaxima
    * PURPOSE    : Finds Maximum of a function over a specified interval [a, b]
    * PARAMETERS : leftbound(a), rightbound(b), function (func)
    * RETURNS    : Maximum/Minimum
    *----------------------------------------------------------------------------*/

    function FindMaxima(leftbound, rightbound, func) {
        //func = ProcessInput(func);
        ////alert("hello FindMaxima");
        var a = leftbound;   //-100.0;
        var b = rightbound;  //100.0;
        var tt = 0.0;
        var maximaX = a;
        var maximaY = 0.0;
        var t1 = 0.0;

        var AA = a.toString();
        if(AA.indexOf("e") > -1){
            AA = toFixed(AA);
        }

        maximaY = FindValue(replaceAll(func, "x", "(" + AA + ")"));

        for (var j = 0; j <= 10; j++) {
            var xhh = 0.0;
            if (j > 0) {

                a = maximaX - Math.pow(10, -j-1);
                b = maximaX + Math.pow(10, -j-1);

            }

            var stepsize = (b - a) / 50;

            for (var i = 0; i <= 50; i++) {
                xhh = a + stepsize * i;

                if (xhh > b) { break; }

                try {
                    var XHH = xhh.toString();
                    if (XHH.indexOf("e") > -1) {
                        XHH = toFixed(XHH);
                    }
                    var fff1 = replaceAll(func, "x", "(" + XHH + ")");
                    t1 = FindValue(fff1);
                    if (t1 > maximaY) { maximaY = t1; maximaX = xhh; }

                } catch (err) {
                    return Math.sqrt(-1);
                }

                //document.write("1) a = " + a + "......maximaX = " + maximaX + ".............. maximaY = " + maximaY + "<br><br>");
            }

            //document.write("j = " + j + " .............................................................."+ "<br><br>");

        }

        return maximaX + ";" + maximaY;
    }



    /*------------------------------------------------------------------------------
    * NAME       : FindMinima
    * PURPOSE    : Finds Minimum of a function over a specified interval [a, b]
    * PARAMETERS : leftbound(a), rightbound(b), function (func)
    * RETURNS    : Maximum/Minimum
    *----------------------------------------------------------------------------*/
    function FindMinima(leftbound, rightbound, func) {
        var a = leftbound;   //-100.0;
        var b = rightbound;  //100.0;
        var tt = 0.0;
        var minimaX = a;
        var minimaY = 0.0;
        var t1 = 0.0;

        var AA = a.toString();
        if(AA.indexOf("e") > -1){
            AA = toFixed(AA);
        }

        minimaY = FindValue(replaceAll(func, "x", "(" + AA + ")"));
     

        for (var j = 0; j <= 10; j++) {
            var xhh = 0.0;
            if (j > 0) {
                a = minimaX - Math.pow(10, -j - 1);
                b = minimaX + Math.pow(10, -j - 1);
            }

            var stepsize = (b - a) / 50.0;
            
            for (var i = 0; i <= 50; i++) {
                xhh = a + stepsize * i;

                if (xhh > b) { break; }

                try {
                    var XHH = xhh.toString();
                    if (XHH.indexOf("e") > -1) {
                        XHH = toFixed(XHH);
                    }

                    var fff1 = replaceAll(func, "x", "(" + XHH + ")");
                    t1 = FindValue(fff1);
                    if (t1 < minimaY) { minimaY = t1; minimaX = xhh; }

                } catch (err) {
                    return Math.sqrt(-1);
                }

                //document.write("1) a = " + a + "......minimaX = " + minimaX + ".............. minimaY = " + minimaY + "<br><br>");
            }

            //document.write("j = " + j + " .............................................................."+ "<br><br>");


        }

        return minimaX + ";" + minimaY;

    }



    /*------------------------------------------------------------------------------
    * NAME       : FindRightmost
    * PURPOSE    : Finds Rightmost of a relation over a specified interval [a, b]
    * PARAMETERS : leftbound(a), rightbound(b), relation (func)
    * RETURNS    : Leftmost Point or Rightmost Point
    *----------------------------------------------------------------------------*/

    function FindRightmost(lowerbound, upperbound, func) {
        //func = ProcessInput(func);

        var a = lowerbound;   //-100.0;
        var b = upperbound;  //100.0;
        var tt = 0.0;
        var ExtremeY = a;
        var ExtremeX = 0.0;
        //var t1 = 0.0;
        var xt1 = 0.0;
        
        var AA = a.toString();
        if(AA.indexOf("e") > -1){
            AA = toFixed(AA);
        }

        ExtremeX = FindValue(replaceAll(func, "x", "(" + AA + ")"));


        for (var j = 0; j <= 10; j++) {
            var yhh = 0.0;
            if (j > 0) {
                a = ExtremeY - Math.pow(10, -j - 1);
                b = ExtremeY + Math.pow(10, -j - 1);
            }

            var stepsize = (b - a) / 50.0;

            for (var i = 0; i <= 50; i++) {
                yhh = a + stepsize * i;

                if (yhh > b) { break; }

                var YHH = yhh.toString();
                if (YHH.indexOf("e") > -1) {
                    YHH = toFixed(YHH);
                }

                var fff1 = replaceAll(func, "x", "(" + YHH + ")");

                xt1 = FindValue(fff1);

                if (xt1 > ExtremeX) { ExtremeX = xt1; ExtremeY = yhh; }

                 //document.write("ExtremeX = " + ExtremeX + ".............. ExtremeY = " + ExtremeY + "<br><br>");
            }

        }

        ////alert("Hello FindRightmost ExtremX = " + ExtremeX + ".........ExtremeY = " + ExtremeY);

        return ExtremeX + ";" + ExtremeY;

    }


    /*------------------------------------------------------------------------------
    * NAME       : FindLeftmost
    * PURPOSE    : Finds Leftmost of a relation over a specified interval [a, b]
    * PARAMETERS : leftbound(a), rightbound(b), relation (func)
    * RETURNS    : Leftmost Point or Rightmost Point
    *----------------------------------------------------------------------------*/

    function FindLeftmost(lowerbound, upperbound, func) {

         ////alert("Hello FindLeftmost");
        //func = ProcessInput(func);

        var a = lowerbound;   //-100.0;
        var b = upperbound;  //100.0;
        var tt = 0.0;
        var ExtremeY = a;
        var ExtremeX = 0.0;
        var xt1 = 0.0;
        
        var AA = a.toString();
        if(AA.indexOf("e") > -1){
            AA = toFixed(AA);
        }

        ExtremeX = FindValue(replaceAll(func, "x", "(" + AA + ")"));


        for (var j = 0; j <= 10; j++) {
            var yhh = 0.0;
            if (j > 0) {
                a = ExtremeY - Math.pow(10, -j - 1);
                b = ExtremeY + Math.pow(10, -j - 1);
            }

            var stepsize = (b - a) / 50.0;
            
            for (var i = 0; i <= 50; i++) {
                yhh = a + stepsize * i;

                //if (yhh > b) { break; }

                try {
                    var YHH = yhh.toString();
                    if (YHH.indexOf("e") > -1) {
                        YHH = toFixed(YHH);
                    }

                    var fff1 = replaceAll(func, "x", "(" + YHH + ")");

                    xt1 = FindValue(fff1);

                    if (xt1 < ExtremeX) { ExtremeX = xt1; ExtremeY = yhh; }

                } catch (err) {
                    return Math.sqrt(-1);
                }

                //document.write("yhh = " + yhh + "......b = " + b + "......ExtremeX = " + ExtremeX + ".............. ExtremeY = " + ExtremeY + "<br><br>");
            }
        }

        return ExtremeX + ";" + ExtremeY;
}


	
function LCM(n1, n2){
    n1 = Math.abs(n1);
    n2 = Math.abs(n2);
    var prod = n1*n2;
    var min = Math.min(n1, n2);                      
                    
    var GCF = 1;
                                                       
    for(var i=1; i<=min; i++){
        if(n1 % i == 0 && n2 % i == 0){
            GCF = i;           
         
        }
    }
                  

    return prod/GCF;
                      
}    
   		

function GCF(n1, n2){		
    n1 = Math.abs(n1);
    n2 = Math.abs(n2);            
            
    var answer = "1";		
 		
 		
    var GCF = 1;		
    var min = Math.Min(n1, n2); 		
                  		
    for(var i=1; i<=min; i++){		
        if(n1 % i == 0 & n2 % i == 0 ){		
            GCF = i;           		
        }		
    }                     		
                		
    return GCF;		
	
}		
       		


/*---------------- Normal Distribution pdf ------------*/

function Normalpdf(xvalue, value1, value2){

        var mean = value1;  
        var sigma = value2;
        var x = xvalue;
        var y = 0.0;
        var expression1 = 0.0; 
        var expression2 = 0.0; 
        var expression3 = 0.0; 
        expression1 = 1/(sigma*Math.sqrt(2*Math.PI)) ;
        expression2 = -Math.pow((x - mean),2)/(2*sigma*sigma);
        expression3 = expression1*Math.pow(Math.E,expression2);
        y = expression3;
        return y;

}




 
/*---------------- Normal Distribution cdf ------------*/

function  Normalcdf(xscore, m, sd){
        var x =0.0;
        var z_score = (xscore - m)/sd;    
        if (z_score < 0.0){
            x = -z_score;
        }
        else if (z_score > 0.0){
            x = z_score;
        }
            
        var b0 = 0.2316419;
        var t=1.0/(1.0+b0*x);
        var b1 = 0.319381530;
        var b2 = -0.356563782;
        var b3 = 1.781477937;
        var b4 = -1.821255978;
        var b5 = 1.330274429;
        var cdf = 0.0;
        var valueReturn = 0.0;
           
        cdf = 1.0 - Normalpdf(x, 0.0, 1.0)*(b1*t + b2*Math.pow(t,2.0)+ b3*Math.pow(t,3.0)+ b4*Math.pow(t,4.0)+ b5*Math.pow(t,5.0));
            
        if (z_score < 0.0){
            valueReturn = 1.0 - cdf;
        }
        else if (z_score > 0.0){
            valueReturn = cdf;
        }
        else{
            valueReturn = 0.5;
        }
            
        return valueReturn;;
          
}



        
/*---------------------  t-dsitribution pdf   ----------------------------*/

function tDistPDF(DF, t){

   

        var n = DF;  //degrees of freedom 
        //var Pi = 3.14159265358979;
        var gammavalue1 = 0.0;
        var gammavalue2 = 0.0;
        var product1 = 0.0;
        var product2 = 0.0;
        var tdistributionpdf = 0.0;
        var y = 1.0;
            
        if(DF == 1){
            return 1.0 / (Math.PI * (1.0 + t*t));
        }   
            
            
        else if(DF == 2){
            return 1.0 /Math.pow(2.0 + t*t, 3.0/2.0);
        }	
            
        else{ ////alert("DF = " + DF + "............t = " + t);
            if((DF % 2) == 0){  //even n
                product1 = 1.0;
                for (var i = 3; i < DF; i+= 2){
                    product1 = product1 * i;
                }   
                
                gammavalue1 = product1;
                
                product2 = 1.0;
                for(var i = 2; i < DF; i+= 2){
                    product2 = product2 * i;
                }  
                
                gammavalue2 = 2.0 * Math.sqrt(n) * product2;
                    
            }  //end if
            
            else{  //odd n
           ////alert("DF odd = " + DF + "............t = " + t);
                product1 = 1.0;
                for (var i = 2; i < DF; i+= 2){
                    product1 = product1 * i;
                }
                
                gammavalue1 = product1;
                    
                product2 = 1.0;
                for (var i = 3; i < DF; i+= 2){
                        
                    product2 = product2* i;
                }
                
                gammavalue2 = Math.PI * Math.sqrt(n) * product2;
                    
            }
            
            ////alert("gammavalue1 = " + gammavalue1 + "............gammavalue2 = " + gammavalue2);

            var ttt1 = (gammavalue1 / gammavalue2);
            var ttt2 = 1.0 + (t*t) / n;
            var ttt3 = -(n + 1.0) / 2.0;

            ////alert("ttt2 = " + ttt2);

            //var yyyy = ttt1 *Math.pow(ttt2, ttt3);


            return  ttt1 *Math.pow(ttt2, ttt3);
        }


}

  


    /*---------------------  t-dsitribution cdf   ----------------------------*/

    function tDistCDF(DF, x) {
        var n = DF;  //degrees of freedom 
        var tdistributioncdf = 0.0;
        var area = 0.0;
        var RectWidth = 0.0;
        var tt = 0.0;

        if (DF <= 1) {
            tdistributioncdf = 1.0 / 2.0 + (1.0 / Math.PI) * Math.atan(x);
        }

        else if (DF <= 2) {
            tdistributioncdf = (1.0 / 2.0) * (1.0 + x / Math.sqrt(2.0 + x * x));
        }
        else {
            if (x == 0) {
                tdistributioncdf = 0.5;
            }

            else {
                var a = 0.0;
                RectWidth = 0.001;

                tt = 0.0;
                while (tt <= Math.abs(x)) {
                    area = area + tDistPDF(DF, tt) * RectWidth;
                    tt += RectWidth;
                }

                if (area > 0.4999999999) { area = 0.4999999999; }

                if (x > 0) {
                    tdistributioncdf = area + 0.5;
                }
                else {
                    tdistributioncdf = 0.5 - area;
                }
            }

        }

        return tdistributioncdf;

    }



    /*------------------------------------------------------------------------------
* NAME       : FindValue
* PURPOSE    : Evaluates input expression
* PARAMETERS : userInput
* RETURNS    : numerical value of input expression
*----------------------------------------------------------------------------*/
function FindValue(userInput) {
    userInput = userInput.replace(new RegExp(" ", 'g'), "");
    var postFix = InfixToPostfix(userInput);
    postFix = postFix.replace(new RegExp(" ", 'g'), "");
    var result = EvaluateExpression(postFix);
    return parseFloat(result); //result;

}
       


/*------------------------------------------------------------------------------
* NAME       : SplitPoly
* PURPOSE    : Splits a polynomial into terms
* PARAMETERS : poly
* RETURNS    : Array of polynomial terms
*----------------------------------------------------------------------------*/
function SplitPoly(poly) {
    var temp1 = replaceAll(poly, " ", "");
    var temp1 = replaceAll(temp1, "-", "+-");
    while (temp1.indexOf("(+-") > -1) {
        temp1 = temp1.replace("(+-", "(-");
    }

    if (temp1.substring(0, 1) == "+") {
        temp1 = temp1.substring(1, temp1.length);
    }

    var trq1 = temp1.split("+");

    for (var i = 0; i < trq1.length; i++) {
       if (trq[i].indexOf("yx^0") > -1) {
                trq[i] = trq[i].replace("yx^0", "1y^1")
        }
      
        if (trq1[i].indexOf("^") > -1) {
            if (trq1[i].substring(0, 1) == "x") {
                trq1[i] = "1" + trq1[i];
            }
            var tru2 = trq1[i].split("^");
            if (tru2[0] == "x") {
                trq1[i] = "1" + trq1[i];
            }
            else if (tru2[0] == "-x") {
                trq1[i] = "-1x^" + tru2[1];
            }
        }
        else if (trq1[i].indexOf("x") > -1) {
            if (trq1[i] == "x") {
                trq1[i] = "1x^1";
            }
            else if (trq1[i] == "-x") {
                trq1[i] = "-1x^1";
            }
            else {
                trq1[i] = trq1[i] + "^1";
            }
        }
        else if (trq1[i].indexOf("x") == -1) {
            trq1[i] = trq1[i] + "x^0";
        }
    }

    return trq1;
}



/*------------------------------------------------------------------------------
* NAME       :  ConvertResult
* PURPOSE    :  Cleans up "raw" polynomial for proper display
* PARAMETERS :  poly
* RETURNS    :  Properly displayed polynomial
*----------------------------------------------------------------------------*/

function ConvertResult(poly) {
    poly = replaceAll(poly, "-", "+-");
    polyTemp = poly.split("+");
    var trw = "";
    for (var i = 0; i < polyTemp.length; i++) {
        if (polyTemp[i].indexOf("^") > -1) {
            var tt = polyTemp[i].split("^");
            if (tt[1] == "0") {
                polyTemp[i] = tt[0].replace("x", "");
            }
            else if (tt[1] == "1") {
                polyTemp[i] = tt[0];
            }
            else {
                polyTemp[i] = tt[0] + "<sup>" + tt[1] + "</sup>";
            }
        }

        else if (polyTemp[i] == "1x") {
            polyTemp[i] = "x"
        }
        else if (polyTemp[i] == "-1x") {
            polyTemp[i] = "-x"
        }

        trw += polyTemp[i] + "+";
    }

    trw = trw.substring(0, trw.length - 1);
    while (trw.indexOf("+-") > -1) {
        trw = trw.replace("+-", "-");
    }

    return trw;
}


/*------------------------------------------------------------------------------
* NAME       :  polyDegree
* PURPOSE    :  Finds degree of polynomial 
* PARAMETERS :  polyArray
* RETURNS    :  degree of polynomial (maxExpo)
*----------------------------------------------------------------------------*/

function polyDegree(polyArray) {
    var maxExpo = 0;
    for (var i = 0; i < polyArray.length; i++) {
        var ghy = polyArray[i].split("^");
        var tjh = parseFloat(ghy[1]);
        if (tjh > maxExpo) {
            maxExpo = tjh;
        }
    }
    return maxExpo;

}


/*------------------------------------------------------------------------------
* NAME       :  AddPolynomial
* PURPOSE    :  Adds two polynomials
* PARAMETERS :  poly1, poly2
* RETURNS    :  sum of two polynomials
*----------------------------------------------------------------------------*/
function AddPolynomial2(poly1, poly2) {
    var trq1 = SplitPoly(poly1);
    var trq2 = SplitPoly(poly2);
    var trq3 = trq1.concat(trq2);

    var maxExpo = 0;
    for (var i = 0; i < trq3.length; i++) {
        if (trq3[i].indexOf("^") > -1) {
            var ghy = trq3[i].split("^");
            var tjh = parseFloat(ghy[1]);
            if (tjh > maxExpo) {
                maxExpo = tjh;
            }
        }
    }

    var result1 = new Array();
    var result2 = "";

    //alert("trq3 = " + trq3);
    for (var j = 0; j <= maxExpo; j++) {
        var summ = 0;
        for (var nn = 0; nn < trq3.length; nn++) {
            var expo = "x^" + j;
            if (trq3[nn].indexOf(expo) > -1) {
                var pp = trq3[nn].split(expo);
                summ += FindValue(pp[0]);
            }
        }

        var summstr = ToFraction(summ.toString());

        if (parseInt(summ) != summ) {
            summstr = "(" + summstr + ")";
        }

        var jk = maxExpo - j;

        result1[jk] = summstr + expo;

        if (j == 0) {
            result1[jk] = summ;
        }
        if (j == 1) {
            result1[jk] = summ + "x";
        }
        if (summ == 0) {
            result1[jk] = "";
        }

        var result2 = result1[jk] + "+" + result2;

    }


    result2 = replaceAll(result2, " ", "");
    while (result2.indexOf("++") > -1) {
        result2 = result2.replace("++", "+");
    }


    while (result2.indexOf("+-") > -1) {
        result2 = result2.replace("+-", "-");
    }

    result2 = result2.substring(0, result2.length - 1);

    //alert("result2 = " + result2);
    return result2;
}



/*------------------------------------------------------------------------------
* NAME       :  RemovePM
* PURPOSE    :  Removes '+-' symbol from string
* PARAMETERS :  str
* RETURNS    :  Input string without '+-'
*----------------------------------------------------------------------------*/
function RemovePM(str) {
    ////alert("str1 = " + str);
    str = replaceAll(str, " ", "");
    while (str.indexOf("+-") > -1) {
        str = str.replace("+-", "-");
    }
    return str;
}



/*------------------------------------------------------------------------------
* NAME       :  ConvertSymbol
* PURPOSE    :  Converts '^' to properly displayed exponent
* PARAMETERS :  poly
* RETURNS    :  Propertly displayed polynomial
*----------------------------------------------------------------------------*/
function ConvertSymbol(poly) {
    if (poly == "1x^0") { return "1" };
    if (poly == "-1x^0") { return "-1" };

    poly = replaceAll(poly, "-", "+-");
    polyTemp = poly.split("+");

    var trw = "";

    for (var i = 0; i < polyTemp.length; i++) {
        var tt = polyTemp[i].split("x^");
        if (tt[0] == "") { tt[0] = "1" };
        if (tt[0] == "-") { tt[0] = "-1" };

        var exponent = parseInt(tt[1]);
        var coeff = parseFloat(tt[0]);

        if (coeff == 1 && exponent == 0) {
            polyTemp[i] = "1";
        }
        else if (coeff == -1 && exponent == 0) {
            polyTemp[i] = "-1";
        }
        else if (Math.abs(coeff) != -1 && exponent == 0) {
            polyTemp[i] = coeff;
        }
        else if (coeff == 1 && exponent == 1) {
            polyTemp[i] = "x";
        }
        else if (coeff == -1 && exponent == 1) {
            polyTemp[i] = "-x";
        }
        else if (tt[0] == 1 && exponent > 1) {
            polyTemp[i] = "x" + "<sup>" + tt[1] + "</sup>";
        }
        else if (tt[0] == 1 && exponent > 1) {
            polyTemp[i] = "x" + "<sup>" + tt[1] + "</sup>";
        }
        else if (coeff == -1 && exponent > 1) {
            polyTemp[i] = "-x" + "<sup>" + tt[1] + "</sup>";
        }
        else if (coeff != 1 && exponent == 1) {
            polyTemp[i] = coeff + "x";
        }
        else if (coeff != 1 && exponent > 1) {
            polyTemp[i] = coeff + "x" + "<sup>" + tt[1] + "</sup>";
        }

        trw += polyTemp[i] + "+";
    }


    trw = trw.substring(0, trw.length - 1);
    while (trw.indexOf("+-") > -1) {
        trw = trw.replace("+-", "-");
    }

    ////alert("trw = " + trw);
    return trw;
}


/*------------------------------------------------------------------------------
* NAME       :  polyDegreeMin
* PURPOSE    :  Finds the minimum exponent of polynomial array 
* PARAMETERS :  polyArray
* RETURNS    :  Mininum exponent
*----------------------------------------------------------------------------*/
function polyDegreeMin(polyArray) {
    var maxExpo = 0;
    for (var i = 0; i < polyArray.length; i++) {
        var ghy = polyArray[i].split("^");
        var tjh = parseFloat(ghy[1]);
        if (tjh > maxExpo) {
            maxExpo = tjh;
        }
    }


    var minExpo = maxExpo;
    for (var i = 0; i < polyArray.length; i++) {
        var ghy = polyArray[i].split("^");
        var tjh = parseFloat(ghy[1]);
        if (tjh < minExpo) {
            minExpo = tjh;
        }
    }

    return minExpo;
}



/*------------------------------------------------------------------------------
* NAME       :  DividePoly
* PURPOSE    :  Divides polynomial by polynomial
* PARAMETERS :  poly1, poly2
* RETURNS    :  quotient and remainder
*----------------------------------------------------------------------------*/
function DividePoly(poly1, poly2) {

    poly1 = replaceAll(poly1, " ", "");
    poly2 = replaceAll(poly2, " ", "");

    var result = "";
    var trq1 = SplitPoly(poly1);
    var trq2 = SplitPoly(poly2);

    var deg1 = polyDegree(trq1);
    var deg2 = polyDegree(trq2);


    if (deg1 < deg2) {
        return;
    }

    var nn0 = trq1[0];
    var pp0 = poly1;
    var result;

    while (deg1 >= deg2) {
        var rr0 = DividePoly1(nn0, trq2[0]);
        result += rr0 + "+";
        var rr1 = MultiplyPoly(rr0, poly2);
        var rr2 = SubtractPolynomial(pp0, rr1, 2);

        if (rr2 == "") { rr2 = "0x^0" };
        if (rr2.substring(0, 1) == "+") {
            rr2 = rr2.substring(1, rr2.length);
        }

        var ret = rr2;
        pp0 = rr2;
        nn0 = ret[0];
        deg1 = polyDegree(ret);

    }

    //alert("trq1 = " + trq1 + " ;;; trq2 = " + trq2);

    result = result.substring(0, result.length - 1);

    while (result.indexOf("+-") > -1) {
        result = result.replace("+-", "-");
    }

    while (result.indexOf("+-") > -1) {
        result = result.replace("+-", "-");
    }

    //alert("result divide = " + result);
    return result;
}



/*------------------------------------------------------------------------------
* NAME       :  DividePoly1
* PURPOSE    :  Divides monomial by monomial
* PARAMETERS :  poly1, poly2
* RETURNS    :  result of monomial dividing by monomial
*----------------------------------------------------------------------------*/
function DividePoly1(poly1, poly2) {
    var ghy1 = poly1.split("x^");
    var coef1 = FindValue(ghy1[0]);
    var expo1 = FindValue(ghy1[1]);
    var ghy2 = poly2.split("x^");
    var coef2 = FindValue(ghy2[0]);
    var expo2 = FindValue(ghy2[1]);
    var coef3 = coef1 / coef2;
    var expo3 = expo1 - expo2;
    var expr3 = coef3 + "x^" + expo3;
    return expr3;

}




/*------------------------------------------------------------------------------
* NAME       :  MultiplyPoly
* PURPOSE    :  Multiplies two polynomials
* PARAMETERS :  poly1, poly2
* RETURNS    :  result of two polynomials multiplied together
*----------------------------------------------------------------------------*/
function MultiplyPoly(poly1, poly2) {
    var trq1 = SplitPoly(poly1);
    var trq2 = SplitPoly(poly2);

    var product = "";
    for (var i = 0; i < trq1.length; i++) {
        for (var ii = 0; ii < trq2.length; ii++) {
            var prod = MultiplyPoly1(trq1[i], trq2[ii]);
            product += prod + "+";
        }
    }

    while (product.indexOf("+-") > -1) {
        product = product.replace("+-", "-");
    }

    product = product.substring(0, product.length - 1);
    //alert("product = " + product);
    return product;
} ////




/*------------------------------------------------------------------------------
* NAME       :  SubtractPolynomial
* PURPOSE    :  Subtracts a polynomial from a second polynomial
* PARAMETERS :  poly1, poly2
* RETURNS    :  result of polynomial subtraction
*----------------------------------------------------------------------------*/
function SubtractPolynomial(poly1, poly2, type) {
    type = 2;
    // type = 1 returns all terms;  type = 2 return x terms only; type = 3 return y terms only
    var trq1 = SplitPoly(poly1);
    if (poly2.substring(0, 1) == "x") {
        poly2 = "1" + poly2;
    }

    if (poly2.substring(0, 1) != "-") {
        poly2 = "+" + poly2;
    }

    poly2 = replaceAll(poly2, "-", "~");
    while (poly2.indexOf("+") > -1) {
        poly2 = poly2.replace("+", "-");
    }
    poly2 = replaceAll(poly2, "~", "+");

    if (poly2.substring(0, 1) == "+") {
        poly2 = poly2.substring(1, poly2.length);
    }

    var trq2 = SplitPoly(poly2); //temp2.split("+");      

    var SumConstant = 0;
    var SumX1 = 0;
    var SumX2 = 0;
    var SumY1 = 0;
    var SumY2 = 0;
    var SumXY = 0;

    var trq = trq1.concat(trq2);

    for (var i = 0; i < trq.length; i++) {
        if (trq[i].indexOf("xy") > -1) {
            SumXY += FindValue(trq[i].replace("xy", ""));
        }
        else if (trq[i].indexOf("x^0") > -1) {
            var ttt1 = FindValue(trq[i].replace("x^0", ""));
            SumConstant += ttt1;
        }
        else if (trq[i].indexOf("x^1") > -1) {
            var ttt2 = trq[i].split("x");
            var ttt2b = FindValue(ttt2[0]);
            SumX1 += ttt2b;
        }
        else if (trq[i].indexOf("x^2") > -1) {
            var ttt3 = trq[i].split("x");
            var ttt3b = FindValue(ttt3[0]);
            SumX2 += ttt3b;
        }
        else if (trq[i].indexOf("y^1") > -1) {
            var ttt4 = trq[i].split("y");
            if (ttt4[0] == "") { ttt4[0] = "1" };
            if (ttt4[0] == "-") { ttt4[0] = "-1" };

            var ttt4b = FindValue(ttt4[0]);
            SumY1 += ttt4b;
        }
        else if (trq[i].indexOf("y^2") > -1) {
            var ttt5 = trq[i].split("y");
            if (ttt5[0] == "") { ttt5[0] = "1" };
            if (ttt5[0] == "-") { ttt5[0] = "-1" };
            var ttt5b = FindValue(ttt5[0]);
            SumY2 += ttt5b;
        }
    }


    var polyArray = new Array();
    polyArray[0] = SumXY + "xy";
    polyArray[1] = SumConstant + "x^0";
    polyArray[2] = SumX1 + "x^1";
    polyArray[3] = SumY1 + "y^1";
    polyArray[4] = SumX2 + "x^2";
    polyArray[5] = SumY2 + "y^2";

    if (type == 1) {
        return polyArray;
    }
    else if (type == 2) {
        var polyArray2 = new Array();
        polyArray2[0] = SumConstant + "x^0";
        polyArray2[1] = SumX1 + "x^1";
        polyArray2[2] = SumX2 + "x^2";
        //alert("polyArray2 = " + polyArray2);

        return polyArray2;
    }
    else if (type == 3) {
        var polyArray3 = new Array();
        polyArray3[0] = SumConstant + "y^0";
        polyArray3[1] = SumX1 + "y^1";
        polyArray3[2] = SumX2 + "y^2";
        return polyArray3;
    }

}




/*------------------------------------------------------------------------------
* NAME       :  MultiplyPoly1
* PURPOSE    :  Multiplies monomial with monomial
* PARAMETERS :  poly1, poly2
* RETURNS    :  Result of multiplication of monomial with monomial
*----------------------------------------------------------------------------*/
function MultiplyPoly1(poly1, poly2) {
    var ghy1 = poly1.split("x^");
    var coef1 = FindValue(ghy1[0]);
    var expo1 = FindValue(ghy1[1]);
    var ghy2 = poly2.split("x^");
    var coef2 = FindValue(ghy2[0]);
    var expo2 = FindValue(ghy2[1]);
    var coef3 = coef1 * coef2;
    var expo3 = expo1 + expo2;
    var expr3 = coef3 + "x^" + expo3;
    return expr3;

}




/*------------------------------------------------------------------------------
* NAME       :  ProcessPoly
* PURPOSE    :  Simplifies all coefficients
* PARAMETERS :  str
* RETURNS    :  Simplified string
*----------------------------------------------------------------------------*/
function ProcessPoly(str) {
    //alert("round 1 strkk777777k = " + str);
    while (str.indexOf("(") > -1) {
        var nn1 = str.split("(");
        for (var i = 1; i < nn1.length; i++) {
            if (nn1[i] != "") {
                nn1[1] = nn1[i];
                break;
            }
        }

        var nn2 = nn1[1].split(")");
        var h1 = str.indexOf("(")
        var h2 = str.indexOf(")")

        //alert("str1111 = " + str + ";;; nn2 = " + nn2[0] + ";;; h1 = " + h1 + ";;; h2 = " + h2);

        var nnt = nn2[0].toString();

        while (nnt.indexOf("(") > -1) {
            nnt = nnt.replace("(", "");
        }

        while (nnt.indexOf(")") > -1) {
            nnt = nnt.replace(")", "");
        }

        //alert("nnt = " + nnt);

        if (nnt.match(/([0-9.*+-^\/])/) && nnt.indexOf("x") == -1 && nnt.indexOf("y") == -1) {
            var val = FindValue(nn2[0].toString());
            str = str.replace("(" + nn2[0] + ")", val);
            //alert("str = " + str);
        }
        else {
            //alert("strwdddddddd = " + str);
            if (nnt.indexOf("x") > -1) {
                var tuu = "(" + nn2[0] + ")^2";
                if (str.indexOf(tuu) > -1) {
                    var prod = MultiplyPoly(nnt, nnt);
                    str = str.replace(tuu, "(" + prod + ")");
                }
            }
            else if (nnt.indexOf("x") > -1) {
                var tuu = "(" + nn2[0] + ")";
                if (str.indexOf(tuu) > -1) {
                    var prod = MultiplyPoly(nnt, nnt);
                    str = str.replace(tuu, "(" + prod + ")");
                }
            }
            else if (nnt.indexOf("y") > -1) {
                var tuu = "(" + nn2[0] + ")^2";
                if (str.indexOf(tuu) > -1) {
                    var nny = replaceAll(nnt, "y", "x");
                    var prod = MultiplyPoly(nny, nny);
                    prod = replaceAll(prod, "x", "y");
                    str = str.replace(tuu, "(" + prod + ")");
                }
            }
            else if (nnt.indexOf("y") > -1) {
                var tuu = "(" + nn2[0] + ")";
                if (str.indexOf(tuu) > -1) {
                    var nny = replaceAll(nnt, "y", "x");
                    var prod = MultiplyPoly(nny, nny);
                    prod = replaceAll(prod, "x", "y");
                    str = str.replace(tuu, "(" + prod + ")");
                }
            }
            str = str.replace("(" + nn2[0] + ")", "{" + nn2[0] + "}");
        }
    } //end of while loop

    str = replaceAll(str, "{", "(");
    str = replaceAll(str, "}", ")")
    //alert("round 1 strkkkkkkkkkk = " + str);

    while (str.indexOf("(") > -1) {
        var nn1 = str.split("(");
        var nn2 = nn1[1].split(")");
        //alert("str222 = " + str + ";;;" + nn2[0]);

        var nnt = nn2[0].toString();
        //alert("nnt = " + nnt);

        while (nnt.indexOf("+") > -1) {
            nnt = nnt.replace("+", "PLUS");
        }

        while (nnt.indexOf("-") > -1) {
            nnt = nnt.replace("-", "MINUS");
        }

        str = str.replace("(" + nn2[0] + ")", "{" + nnt + "}");
    }

    //alert("str333 = " + str + ";;;");
    str = replaceAll(str, "{", "(");
    str = replaceAll(str, "}", ")")
    str = replaceAll(str, "-", "+-");

    var termArray = new Array();

    if (str.indexOf("+") > -1) {
        termArray = str.split("+");
    }
    else {
        termArray[0] = str;
    }

    //alert("termArray = " + termArray);

    var StrTemp = '';
    for (var i = 0; i < termArray.length; i++) {
        if (termArray[i].indexOf("(") > -1) {
            termArray[i] = replaceAll(termArray[i], "PLUS", "+");
            termArray[i] = replaceAll(termArray[i], "MINUS", "-");
            var h1 = termArray[i].indexOf("(");
            var h2 = termArray[i].indexOf(")");
            var t1 = termArray[i].substring(0, h1);
            var t2 = termArray[i].substring(h1 + 1, h2);
            var t3 = "1" + termArray[i].substring(h2 + 1, termArray[i].length);
            if (t1 == "") { t1 = "1" }
            else if (t1 == "-") { t1 = "-1" };
            t1 = FindValue(t1);
            t3 = FindValue(t3);

            if (t1 == "") {
                t1 = "1";
            }
            else if (t1 == "-") {
                t1 = "-1";
            }
            else if (t1.match(/([0-9.*+-^\/])/)) {
                t1 = FindValue(t1);
            }
            else {

                if (t1.indexOf("x") > -1) {
                    var tfr = t1.split("x");
                    if (tfr[0] == "") { tfr[0] = "1"; }
                    else if (tfr[0] == "-") { tfr[0] = "-1"; }
                    t1 = FindValue(tfr[0].toString()) + "x" + tfr[1];
                }
            }


            //alert("t1 = " + t1 + ";;; t2 = " + t2 + " ;;; t3 = " + t3);
            var ttArray = t1 + ";" + t2 + ";" + t3;
            var termArray2 = ttArray.split(";");
            var prod = "1";
            if (termArray[i].indexOf("x") > -1) {
                for (var j = 0; j < termArray2.length; j++) {
                    var prod = MultiplyPoly(prod, termArray2[j]);
                }
                StrTemp += prod + "+";
            }
            else if (termArray[i].indexOf("y") > -1) {
                for (var j = 0; j < termArray2.length; j++) {
                    termArray2[j] = replaceAll(termArray2[j], "y", "x");
                    var prod = MultiplyPoly(prod, termArray2[j]);
                }
                //alert("prodyyyyyyyyyy = " + prod);
                prod = replaceAll(prod, "x", "y");
                StrTemp += "+" + prod;
            }

            //StrTemp = StrTemp.substring(0, StrTemp.length - 1);
        }
        else if (termArray[i].indexOf("y/") > -1 && termArray[i].indexOf("xy") > -1) {
            var pp = termArray[i].split("xy");
            if (pp[0] == "") {
                pp[0] = "1";
            }
            else if (pp[0] == "-") {
                pp[0] = "-1";
            }

            var pp2 = FindValue(pp[0].toString()) / FindValue(pp[1].toString());
            termArray[i] = pp2 + "xy";
            StrTemp += "+" + termArray[i];
        }
        else if (termArray[i].indexOf("xy") > -1) {
            var pp = termArray[i].split("xy");
            if (pp[0] == "") {
                pp[0] = "1";
            }
            else if (pp[0] == "-") {
                pp[0] = "-1";
            }

            var pp2 = FindValue(pp[0].toString());
            termArray[i] = pp2 + "xy";
            StrTemp += "+" + termArray[i];
        }
        else if (termArray[i].indexOf("x/") > -1) {
            var pp = termArray[i].split("x/");
            if (pp[0] == "") {
                pp[0] = "1";
            }
            else if (pp[0] == "-") {
                pp[0] = "-1";
            }

            var pp2 = FindValue(pp[0].toString()) / FindValue(pp[1].toString());
            termArray[i] = pp2 + "x";
            StrTemp += "+" + termArray[i];
        }
        else if (termArray[i].indexOf("x^2/") > -1) {
            var pp = termArray[i].split("x^2/");
            if (pp[0] == "") {
                pp[0] = "1";
            }
            else if (pp[0] == "-") {
                pp[0] = "-1";
            }

            var pp2 = FindValue(pp[0].toString()) / FindValue(pp[1].toString());
            termArray[i] = pp2 + "x^2";
            StrTemp += "+" + termArray[i];
        }
        else if (termArray[i].indexOf("y/") > -1) {
            var pp = termArray[i].split("y/");
            if (pp[0] == "") {
                pp[0] = "1";
            }
            else if (pp[0] == "-") {
                pp[0] = "-1";
            }

            var pp2 = FindValue(pp[0].toString()) / FindValue(pp[1].toString());
            termArray[i] = pp2 + "y";
            StrTemp += "+" + termArray[i];
        }
        else if (termArray[i].indexOf("y^2/") > -1) {
            var pp = termArray[i].split("y^2/");
            if (pp[0] == "") {
                pp[0] = "1";
            }
            else if (pp[0] == "-") {
                pp[0] = "-1";
            }

            var pp2 = FindValue(pp[0].toString()) / FindValue(pp[1].toString());
            termArray[i] = pp2 + "y^2";
            StrTemp += "+" + termArray[i];
        }
        else {
            StrTemp += "+" + termArray[i];
        }
    }


    if (StrTemp.charAt(0) == "+") {
        StrTemp = StrTemp.substring(1, StrTemp.length);
    }

    if (StrTemp.charAt(StrTemp.length - 1) == "+") {
        StrTemp = StrTemp.substring(0, StrTemp.length - 1);
    }

    while (StrTemp.indexOf("+-") > -1) {
        StrTemp = StrTemp.replace("+-", "-");
    }
    while (StrTemp.indexOf("++") > -1) {
        StrTemp = StrTemp.replace("++", "+");
    }

    //alert("strTemp = " + StrTemp);

    return StrTemp;
}

    

/*------------------------------------------------------------------------------
* NAME       :  ExpandExpr
* PURPOSE    :  Simplifies input expression to determine parameters of general 
*               conic Ax^2 + Bxy + Cy^2 + Dx + Ey + F = 0
* PARAMETERS :  poly
* RETURNS    :  Parameters A, B, C, D, E, F
*----------------------------------------------------------------------------*/
function ExpandExpr(poly) {
    //alert("alksjdflkajsdflexpand");
    var polyTemp = poly;
    if (poly == "") { return; }
    poly = replaceAll(poly, " ", "");

    poly = replaceAll(poly, String.fromCharCode(178), "^2");
    poly = replaceAll(poly, String.fromCharCode(179), "^3");
    poly = replaceAll(poly, String.fromCharCode(8308), "^4");
    poly = replaceAll(poly, String.fromCharCode(8309), "^5");
    poly = replaceAll(poly, String.fromCharCode(8310), "^6");
    poly = replaceAll(poly, String.fromCharCode(8311), "^7");
    if (poly.indexOf(")(") > -1) {
        poly = ProcessPoly(poly);
    }

    poly = replaceAll(poly, "-", "+-");
    var tru = poly.split("=");

    if (tru[0].indexOf("+") == -1) {
        tru[0] += "+ 0";
    }

    var LeftsideArray = tru[0].split("+");
    //alert("leftsideArray = " + LeftsideArray);

    for (var i = 0; i < LeftsideArray.length; i++) {
        if (LeftsideArray[i].indexOf("(") > -1 && LeftsideArray[i].indexOf(")") == -1) {
            LeftsideArray[i] = LeftsideArray[i] + "+" + LeftsideArray[i + 1];
            LeftsideArray[i + 1] = "";
            while (LeftsideArray[i].indexOf("+-") > -1) {
                LeftsideArray[i] = LeftsideArray[i].replace("+-", "-");
            }

        }
    }


    //alert("leftsideArray222 = " + LeftsideArray);

    var PolyArray1 = new Array();
    for (var i = 0; i < LeftsideArray.length; i++) {
        if (LeftsideArray[i] == "") {
            LeftsideArray[i] = "0";
        }

        if (LeftsideArray[i].indexOf("x") > -1 && LeftsideArray[i].indexOf(")^2") > -1) {
            //alert("leftsideArray333 = " + LeftsideArray[i]);
            LeftsideArray[i] = SimpPowerExpr(LeftsideArray[i]);
            PolyArray1 = PolyArray1.concat(SplitPoly(LeftsideArray[i]));
        }
        else if (LeftsideArray[i].indexOf("x") > -1 && LeftsideArray[i].indexOf("^2/") > -1) {
            var wer = LeftsideArray[i].split("x");
            if (wer[0] == "") {
                wer[0] = 1;
            }
            else if (wer[0] == "-") {
                wer[0] = -1;
            }
            LeftsideArray[i] = FindValue(wer[0].toString()) + '(x - 0)' + wer[1];
            LeftsideArray[i] = SimpPowerExpr(LeftsideArray[i]);
            PolyArray1 = PolyArray1.concat(SplitPoly(LeftsideArray[i]));
        }
        else if (LeftsideArray[i].indexOf("y") > -1 && LeftsideArray[i].indexOf(")^2") > -1) {
            LeftsideArray[i] = replaceAll(LeftsideArray[i], "y", "x");
            LeftsideArray[i] = SimpPowerExpr(LeftsideArray[i]);
            LeftsideArray[i] = replaceAll(LeftsideArray[i], "x", "y");
            PolyArray1 = PolyArray1.concat(SplitPoly(LeftsideArray[i]));
        }
        else if (LeftsideArray[i].indexOf("y") > -1 && LeftsideArray[i].indexOf("^2/") > -1) {
            var wert = LeftsideArray[i].split("y");
            if (wert[0] == "") {
                wert[0] = 1;
            }
            else if (wert[0] == "-") {
                wert[0] = -1;
            }
            LeftsideArray[i] = FindValue(wert[0].toString()) + '(y - 0)' + wert[1];
            LeftsideArray[i] = replaceAll(LeftsideArray[i], "y", "x");
            LeftsideArray[i] = SimpPowerExpr(LeftsideArray[i]);
            LeftsideArray[i] = replaceAll(LeftsideArray[i], "x", "y");
            PolyArray1 = PolyArray1.concat(SplitPoly(LeftsideArray[i]));
        }
        else if (LeftsideArray[i].indexOf("x") > -1 && LeftsideArray[i].indexOf("(") > -1 && LeftsideArray[i].indexOf(")") > -1) {
            var FirstChar = LeftsideArray[i].charAt(0);
            var LastChar = LeftsideArray[i].charAt(LeftsideArray[i].length - 1);
            if (FirstChar.match(/([0-9.-\/])/) && LastChar == ")") {
                LeftsideArray[i] = SimpPowerExpr2(LeftsideArray[i]);
            }
            else if (LeftsideArray[i].indexOf("xy") > -1) {
                //alert("LeftsideArray[i]//// = " + LeftsideArray[i]);
                var tempp1 = LeftsideArray[i].replace("xy", "");
                var tempp2 = FindValue(tempp1);
                LeftsideArray[i] = tempp2 + "xy";
            }
            else if (LeftsideArray[i].indexOf("x") > -1 && LeftsideArray[i].indexOf("y") == -1) {
                var tempp1 = LeftsideArray[i].replace("x", "");
                var tempp2 = FindValue(tempp1);
                LeftsideArray[i] = tempp2 + "x";
            }

            PolyArray1 = PolyArray1.concat(SplitPoly(LeftsideArray[i]));
        }
        else if (LeftsideArray[i].indexOf("y") > -1 && LeftsideArray[i].indexOf("(") > -1 && LeftsideArray[i].indexOf(")") > -1) {
            //alert("LeftsideArray[i]jkhkjhjkl = " + LeftsideArray[i]);
            var FirstChar = LeftsideArray[i].charAt(0);
            var LastChar = LeftsideArray[i].charAt(LeftsideArray[i].length - 1);
            //alert("FirstChar = " + FirstChar);
            //alert("LastChar = " + LastChar);

            if (FirstChar.match(/([0-9-\/])/) && LastChar == ")") {
                LeftsideArray[i] = replaceAll(LeftsideArray[i], "y", "x");
                LeftsideArray[i] = SimpPowerExpr2(LeftsideArray[i]);
                LeftsideArray[i] = replaceAll(LeftsideArray[i], "x", "y");
            }
            else if (LeftsideArray[i].indexOf("y") > -1) {
                var tempp1 = LeftsideArray[i].replace("y", "");
                var tempp2 = FindValue(tempp1);
                LeftsideArray[i] = tempp2 + "y";
            }

            PolyArray1 = PolyArray1.concat(SplitPoly(LeftsideArray[i]));
        }
        else {
            PolyArray1 = PolyArray1.concat(SplitPoly(LeftsideArray[i]));
        }

    }


    //alert("PolyArray1 = " + PolyArray1);

    ///////////////////////////////////////////////////////////////////////

    if (tru[1].indexOf("+") == -1) {
        tru[1] += "+ 0";
    }

    var RightsideArray = tru[1].split("+");
    //alert("RightsideArray = " + RightsideArray);

    for (var i = 0; i < RightsideArray.length; i++) {
        if (RightsideArray[i].indexOf("(") > -1 && RightsideArray[i].indexOf(")") == -1) {
            RightsideArray[i] = RightsideArray[i] + "+" + RightsideArray[i + 1];
            RightsideArray[i + 1] = "";
            while (RightsideArray[i].indexOf("+-") > -1) {
                RightsideArray[i] = RightsideArray[i].replace("+-", "-");
            }
        }
    }

    //alert("RightsideArray222 = " + RightsideArray);

    var PolyArray2 = new Array();
    for (var i = 0; i < RightsideArray.length; i++) {
        if (RightsideArray[i] == "") {
            RightsideArray[i] = "0";
        }

        if (RightsideArray[i].indexOf("x") > -1 && RightsideArray[i].indexOf(")^2") > -1) {
            RightsideArray[i] = SimpPowerExpr(RightsideArray[i]);
            PolyArray2 = PolyArray2.concat(SplitPoly(RightsideArray[i]));
        }
        else if (RightsideArray[i].indexOf("x") > -1 && RightsideArray[i].indexOf("^2/") > -1) {
            var wer = RightsideArray[i].split("x");
            if (wer[0] == "") {
                wer[0] = 1;
            }
            else if (wer[0] == "-") {
                wer[0] = -1;
            }
            RightsideArray[i] = FindValue(wer[0].toString()) + '(x - 0)' + wer[1];
            RightsideArray[i] = SimpPowerExpr(RightsideArray[i]);
            PolyArray2 = PolyArray2.concat(SplitPoly(RightsideArray[i]));
            //alert("RightsideArray[i]xx = " + RightsideArray[i]);
        }
        else if (RightsideArray[i].indexOf("y") > -1 && RightsideArray[i].indexOf(")^2") > -1) {
            RightsideArray[i] = replaceAll(RightsideArray[i], "y", "x");
            RightsideArray[i] = SimpPowerExpr(RightsideArray[i]);
            RightsideArray[i] = replaceAll(RightsideArray[i], "x", "y");
            //alert("RightsideArray[i]xx = " + RightsideArray[i]);
            PolyArray2 = PolyArray2.concat(SplitPoly(RightsideArray[i]));
        }
        else if (RightsideArray[i].indexOf("y") > -1 && RightsideArray[i].indexOf("^2/") > -1) {
            var wert = RightsideArray[i].split("y");
            if (wert[0] == "") {
                wert[0] = 1;
            }
            else if (wert[0] == "-") {
                wert[0] = -1;
            }
            RightsideArray[i] = FindValue(wert[0].toString()) + '(y - 0)' + wert[1];
            RightsideArray[i] = replaceAll(RightsideArray[i], "y", "x");
            RightsideArray[i] = SimpPowerExpr(RightsideArray[i]);
            RightsideArray[i] = replaceAll(RightsideArray[i], "x", "y");
            PolyArray2 = PolyArray2.concat(SplitPoly(RightsideArray[i]));
        }
        else if (RightsideArray[i].indexOf("x") > -1 && RightsideArray[i].indexOf("(") > -1 && RightsideArray[i].indexOf(")") > -1) {
            var FirstChar = RightsideArray[i].charAt(0);
            var LastChar = RightsideArray[i].charAt(RightsideArray[i].length - 1);
            if (FirstChar.match(/([0-9.-\/])/) && LastChar == ")") {
                RightsideArray[i] = SimpPowerExpr2(RightsideArray[i]);
            }
            else if (RightsideArray[i].indexOf("xy") > -1) {
                //alert("RightsideArray[i]//// = " + RightsideArray[i]);
                var tempp1 = RightsideArray[i].replace("xy", "");
                var tempp2 = FindValue(tempp1);
                RightsideArray[i] = tempp2 + "xy";
            }
            else if (RightsideArray[i].indexOf("x") > -1 && RightsideArray[i].indexOf("y") == -1) {
                var tempp1 = RightsideArray[i].replace("x", "");
                var tempp2 = FindValue(tempp1);
                RightsideArray[i] = tempp2 + "x";
            }

            PolyArray2 = PolyArray2.concat(SplitPoly(RightsideArray[i]));

        }
        else if (RightsideArray[i].indexOf("y") > -1 && RightsideArray[i].indexOf("(") > -1 && RightsideArray[i].indexOf(")") > -1) {
            //alert("RightsideArray[i]jkhkjhjkl = " + RightsideArray[i]);
            var FirstChar = RightsideArray[i].charAt(0);
            var LastChar = RightsideArray[i].charAt(RightsideArray[i].length - 1);
            //alert("FirstChar = " + FirstChar);
            //alert("LastChar = " + LastChar);

            if (FirstChar.match(/([0-9-\/])/) && LastChar == ")") {
                RightsideArray[i] = replaceAll(RightsideArray[i], "y", "x");
                RightsideArray[i] = SimpPowerExpr2(RightsideArray[i]);
                RightsideArray[i] = replaceAll(RightsideArray[i], "x", "y");
            }
            else if (RightsideArray[i].indexOf("y") > -1) {
                var tempp1 = RightsideArray[i].replace("y", "");
                var tempp2 = FindValue(tempp1);
                RightsideArray[i] = tempp2 + "y";
            }

            PolyArray2 = PolyArray2.concat(SplitPoly(RightsideArray[i]));
        }
        else {
            PolyArray2 = PolyArray2.concat(SplitPoly(RightsideArray[i]));
        }

    }


    //alert("PolyArray2 = " + PolyArray2);


    for (var i = 0; i < PolyArray2.length; i++) {
        if (PolyArray2[i].indexOf("x^") > -1) {
            var tt = PolyArray2[i].split("x^");
            PolyArray2[i] = -1 * FindValue(tt[0]) + "x^" + tt[1];
        }
        else if (PolyArray2[i].indexOf("y^") > -1) {
            var tt = PolyArray2[i].split("y^");
            PolyArray2[i] = -1 * FindValue(tt[0]) + "y^" + tt[1];
        }
    }



    var SumConstant = 0;
    var SumX1 = 0;
    var SumX2 = 0;
    var SumY1 = 0;
    var SumY2 = 0;
    var SumXY = 0;

    var trq = PolyArray1.concat(PolyArray2);

    //alert("trq = " + trq);

    for (var i = 0; i < trq.length; i++) {
        if (trq[i].indexOf("xy") > -1) {
            SumXY += FindValue(trq[i].replace("xy", ""));
        }
        else if (trq[i].indexOf("x^0") > -1) {
            var ttt1 = FindValue(trq[i].replace("x^0", ""));
            SumConstant += ttt1;
        }
        else if (trq[i].indexOf("y^0") > -1) {
            var ttt1 = FindValue(trq[i].replace("y^0", ""));
            SumConstant += ttt1;
        }
        else if (trq[i].indexOf("x^1") > -1) {
            var ttt2 = trq[i].split("x");
            var ttt2b = FindValue(ttt2[0]);
            SumX1 += ttt2b;
        }
        else if (trq[i].indexOf("x^2") > -1) {
            var ttt3 = trq[i].split("x");
            var ttt3b = FindValue(ttt3[0]);
            SumX2 += ttt3b;
        }
        else if (trq[i].indexOf("y^1") > -1) {
            var ttt4 = trq[i].split("y");
            if (ttt4[0] == "") { ttt4[0] = "1" };
            if (ttt4[0] == "-") { ttt4[0] = "-1" };

            var ttt4b = FindValue(ttt4[0]);
            SumY1 += ttt4b;
        }
        else if (trq[i].indexOf("y^2") > -1) {
            var ttt5 = trq[i].split("y");
            if (ttt5[0] == "") { ttt5[0] = "1" };
            if (ttt5[0] == "-") { ttt5[0] = "-1" };
            var ttt5b = FindValue(ttt5[0]);
            SumY2 += ttt5b;
        }
    }

    var CoeffArray = SumX2 + ";" + SumXY + ";" + SumY2 + ";" + SumX1 + ";" + SumY1 + ";" + SumConstant;

    //alert("CoeffArray = " + CoeffArray);
    var CoeffArray2 = CoeffArray.split(";");
    return CoeffArray2;

}



/*------------------------------------------------------------------------------
* NAME       :  SimpPowerExpr
* PURPOSE    :  Simplifies expression of the form A(Bx-C)^2/D
* PARAMETERS :  str
* RETURNS    :  Simplified expression
*----------------------------------------------------------------------------*/
function SimpPowerExpr(str) {

    var LastChar = str.charAt(str.length - 1);
    str = replaceAll(str, " ", "");
    if (str.indexOf("x-") > -1) {
        var wa = str.split("x-");
        var wab = wa[1].split(")^2")
        var constr = FindValue(wab[0].toString());
        str = wa[0] + "x-" + constr + ")^2" + wab[1];

    }

    if (str.indexOf("x+") > -1) {
        var wa = str.split("x+");
        var wab = wa[1].split(")^2")
        var constr = FindValue(wab[0].toString());
        str = wa[0] + "x+" + constr + ")^2" + wab[1];
    }

    if (LastChar == "2") {
        str = str + "/1";
    }

    

    if (str.indexOf("/") > -1) {
        if (str.indexOf("/(") > -1) {
            var div = str.split("/(");
            div[1] = div[1].replace(")", "");
            var den = FindValue(div[1]);
        }
        else {
            var div = str.split("/");
            var den = FindValue(div[1]);
        }

        //alert("div = " + div);

        //alert("den = " + den);
        var tre = div[0].split(")^");

        //alert("tre = " + tre);
        var exponent = FindValue(tre[1]);
        //alert("exponent = " + exponent);

        var tuy = tre[0].split("(")
        if (tuy[0] == "") {
            tuy[0] = 1;
        }
        else if (tuy[0] == "-") {
            tuy[0] = -1;
        }


        var base = tuy[1];

        //alert("base = " + base);
        //alert("base = " + base + " ;;; exponent = " + exponent);

        var product = MultiplyPoly(base, base);
        //alert("product1 = " + product);
        //alert("tuy[0] = " + tuy[0]);

        var ccc = FindValue(tuy[0].toString()) / den;
        ccc = Round(ccc, 12);
        //alert("ccc = " + ccc);

        var ccc2 = ccc + "x^0";
        var product = MultiplyPoly(ccc2, product);
        //alert("str = " + str + " ;;; " + " product2 = " + product);
    }




    return product;
}


/*------------------------------------------------------------------------------
* NAME       :  SimpPowerExpr2
* PURPOSE    :  Simplifies expression of the form A(Bx + C)
* PARAMETERS :  str
* RETURNS    :  Simplified expression
*----------------------------------------------------------------------------*/
function SimpPowerExpr2(str) {
    str = replaceAll(str, " ", "");
    var tuy = str.split("(")
    if (tuy[0] == "") {
        tuy[0] = 1;
    }
    else if (tuy[0] == "-") {
        tuy[0] = -1;
    }

    var base = tuy[1].replace(")", "");

    var ccc = FindValue(tuy[0].toString());
    ccc = Round(ccc, 12);
    //alert("ccc = " + ccc);

    var ccc2 = ccc + "x^0";
    var product = MultiplyPoly(ccc2, base);

    return product;
}

    function factorial100(){
        var listfactorial = '1,1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800, 39916800, 479001600, ' +
          '6227020800, 87178291200, 1307674368000, 20922789888000, 355687428096000, 6402373705728000,  ' +
          '121645100408832000, 2432902008176640000, 51090942171709440000, 1124000727777607680000, '+
          '25852016738884976640000, 620448401733239439360000, 15511210043330985984000000, 403291461126605635584000000, '+
          '10888869450418352160768000000, 304888344611713860501504000000, 8841761993739701954543616000000, '+
          '265252859812191058636308480000000, 8222838654177922817725562880000000, 263130836933693530167218012160000000, '+
          '8683317618811886495518194401280000000, 295232799039604140847618609643520000000, '+
          '10333147966386144929666651337523200000000, 371993326789901217467999448150835200000000, '+
          '13763753091226345046315979581580902400000000, 523022617466601111760007224100074291200000000, '+
          '20397882081197443358640281739902897356800000000, 815915283247897734345611269596115894272000000000, '+
          '33452526613163807108170062053440751665152000000000, 1405006117752879898543142606244511569936384000000000, '+
          '60415263063373835637355132068513997507264512000000000, 2658271574788448768043625811014615890319638528000000000, '+
          '119622220865480194561963161495657715064383733760000000000, '+
          '5502622159812088949850305428800254892961651752960000000000, '+
          '258623241511168180642964355153611979969197632389120000000000, '+
          '12413915592536072670862289047373375038521486354677760000000000, '+
          '608281864034267560872252163321295376887552831379210240000000000, '+
          '30414093201713378043612608166064768844377641568960512000000000000, '+
          '1551118753287382280224243016469303211063259720016986112000000000000, '+
          '80658175170943878571660636856403766975289505440883277824000000000000, '+
          '4274883284060025564298013753389399649690343788366813724672000000000000, '+
          '230843697339241380472092742683027581083278564571807941132288000000000000, '+  
          '12696403353658275925965100847566516959580321051449436762275840000000000000, '+
          '710998587804863451854045647463724949736497978881168458687447040000000000000, '+
          '40526919504877216755680601905432322134980384796226602145184481280000000000000, '+
          '2350561331282878571829474910515074683828862318181142924420699914240000000000000, '+
          '138683118545689835737939019720389406345902876772687432540821294940160000000000000, '+
          '8320987112741390144276341183223364380754172606361245952449277696409600000000000000, '+
          '507580213877224798800856812176625227226004528988036003099405939480985600000000000000, '+
          '31469973260387937525653122354950764088012280797258232192163168247821107200000000000000, '+
          '1982608315404440064116146708361898137544773690227268628106279599612729753600000000000000, '+
          '126886932185884164103433389335161480802865516174545192198801894375214704230400000000000000, '+
          '8247650592082470666723170306785496252186258551345437492922123134388955774976000000000000000, '+
          '544344939077443064003729240247842752644293064388798874532860126869671081148416000000000000000, '+
          '36471110918188685288249859096605464427167635314049524593701628500267962436943872000000000000000, '+
          '2480035542436830599600990418569171581047399201355367672371710738018221445712183296000000000000000, '+
          '171122452428141311372468338881272839092270544893520369393648040923257279754140647424000000000000000, '+
          '11978571669969891796072783721689098736458938142546425857555362864628009582789845319680000000000000000, '+
          '850478588567862317521167644239926010288584608120796235886430763388588680378079017697280000000000000000, '+
          '61234458376886086861524070385274672740778091784697328983823014963978384987221689274204160000000000000000, '+
          '4470115461512684340891257138125051110076800700282905015819080092370422104067183317016903680000000000000000, '+
          '330788544151938641225953028221253782145683251820934971170611926835411235700971565459250872320000000000000000, '+
          '24809140811395398091946477116594033660926243886570122837795894512655842677572867409443815424000000000000000000, '+
          '1885494701666050254987932260861146558230394535379329335672487982961844043495537923117729972224000000000000000000, '+
          '145183092028285869634070784086308284983740379224208358846781574688061991349156420080065207861248000000000000000000, '+
          '11324281178206297831457521158732046228731749579488251990048962825668835325234200766245086213177344000000000000000000, '+
          '894618213078297528685144171539831652069808216779571907213868063227837990693501860533361810841010176000000000000000000, '+
          '71569457046263802294811533723186532165584657342365752577109445058227039255480148842668944867280814080000000000000000000, '+
          '5797126020747367985879734231578109105412357244731625958745865049716390179693892056256184534249745940480000000000000000000, '+
          '475364333701284174842138206989404946643813294067993328617160934076743994734899148613007131808479167119360000000000000000000, '+
          '39455239697206586511897471180120610571436503407643446275224357528369751562996629334879591940103770870906880000000000000000000, '+
          '3314240134565353266999387579130131288000666286242049487118846032383059131291716864129885722968716753156177920000000000000000000, '+
          '281710411438055027694947944226061159480056634330574206405101912752560026159795933451040286452340924018275123200000000000000000000, '+
          '24227095383672732381765523203441259715284870552429381750838764496720162249742450276789464634901319465571660595200000000000000000000, '+
          '2107757298379527717213600518699389595229783738061356212322972511214654115727593174080683423236414793504734471782400000000000000000000, '+
          '185482642257398439114796845645546284380220968949399346684421580986889562184028199319100141244804501828416633516851200000000000000000000, '+
          '16507955160908461081216919262453619309839666236496541854913520707833171034378509739399912570787600662729080382999756800000000000000000000, '+
          '1485715964481761497309522733620825737885569961284688766942216863704985393094065876545992131370884059645617234469978112000000000000000000000, '+
          '135200152767840296255166568759495142147586866476906677791741734597153670771559994765685283954750449427751168336768008192000000000000000000000, '+
          '12438414054641307255475324325873553077577991715875414356840239582938137710983519518443046123837041347353107486982656753664000000000000000000000, '+
          '1156772507081641574759205162306240436214753229576413535186142281213246807121467315215203289516844845303838996289387078090752000000000000000000000, '+
          '108736615665674308027365285256786601004186803580182872307497374434045199869417927630229109214583415458560865651202385340530688000000000000000000000, '+
          '10329978488239059262599702099394727095397746340117372869212250571234293987594703124871765375385424468563282236864226607350415360000000000000000000000, '+
          '991677934870949689209571401541893801158183648651267795444376054838492222809091499987689476037000748982075094738965754305639874560000000000000000000000, '+
          '96192759682482119853328425949563698712343813919172976158104477319333745612481875498805879175589072651261284189679678167647067832320000000000000000000000, '+
          '9426890448883247745626185743057242473809693764078951663494238777294707070023223798882976159207729119823605850588608460429412647567360000000000000000000000, '+
          '933262154439441526816992388562667004907159682643816214685929638952175999932299156089414639761565182862536979208272237582511852109168640000000000000000000000,'+
          '93326215443944152681699238856266700490715968264381621468592963895217599993229915608941463976156518286253697920827223758251185210916864000000000000000000000000';

          return listfactorial.split(',');
    }




    function ineq6B() {
        var symbol = "{y = " + " }";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -1,0);
        return;
    }


    function ineq7B() {
        var symbol = "{" + String.fromCharCode(8804) + " y " + String.fromCharCode(8804) + " }";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -7,0);
        return;
    }

    function ineq8B() {
        var symbol = "{" + String.fromCharCode(8804) + " y " + String.fromCharCode(60) + " }";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -7,0);
        return;
    }

    function ineq9B() {
        var symbol = "{" + String.fromCharCode(60) + " y " + String.fromCharCode(8804) + " }";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -7,0);
        return;
    }

    function ineq10B() {
        var symbol = "{" + String.fromCharCode(60) + " y " + String.fromCharCode(60) + " }";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -7,0);
        return;
    }

        function neginfinity() {          
        var symbol = "-"+String.fromCharCode(8734) ;
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, 0, 0);
        return;
    }

    function posinfinity() {          
        var symbol = String.fromCharCode(8734) ;
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, 0, 0);
        return;
    }

    function lessthan() {          
        var symbol = " < ";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, 0, 0);
        return;
    }

    function greaterthan() {          
        var symbol = " < ";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, 0, 0);
        return;
    }

    function equal() {          
        var symbol = " = ";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, 0, 0);
        return;
    }
    function xinterval1() {          
        var symbol = " < x < ";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, -7, 0);
        return;
    }
    function xinterval2() {          
        var symbol = String.fromCharCode(8804) + " x " + String.fromCharCode(8804) ;
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, -7, 0);
        return;
    }
    function xinterval3() {          

        var symbol = "-"+String.fromCharCode(8734) + " x < ";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, 0, 0);
        return;
    }
    function xinterval4() {          
        var symbol = "< x < "+String.fromCharCode(8734);
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, -7, 0);
        return;
    }

    function xinterval5() {          
        var spc = String.fromCharCode(160);		//space
        var symbol = String.fromCharCode(8804) + spc + spc + String.fromCharCode(8804);
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, -7, 0);
        return;
    }

    function xinterval6() {          
        var spc = String.fromCharCode(160);		//space
        var symbol = String.fromCharCode(8804) + spc + " < ";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, -7, 0);
        return;
    }

    function xinterval7() {          
        var spc = String.fromCharCode(160);		//space
        var symbol = "<  " + spc + String.fromCharCode(8804) ;
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, -7, 0);
        return;
    }

    function xinterval8() {         
       var spc = String.fromCharCode(160);		//space 
        var symbol = "< " + spc + " < " ;
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, -7, 0);
        return;
    }
