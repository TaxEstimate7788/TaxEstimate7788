
/*------------------------------------------------------------------------------
 * NAME       : ReplaceVariable
 * PURPOSE    : Replaces all variables with a designated variable
 * PARAMETERS : str, variable 
 * RETURNS    : expression containing only designated variable
 *----------------------------------------------------------------------------*/
    function ReplaceVariable(str, variable) {
        for (var i = 65; i <= 90; i++) {
            var letter = String.fromCharCode(i);
            str = replaceAll(str, letter, variable);
        }

        for (var i = 97; i <= 122; i++) {
            var letter = String.fromCharCode(i);
            str = replaceAll(str, letter, variable);
        }

        //alert('str = ' + str);
        return str;
    }


/*------------------------------------------------------------------------------
 * NAME       : CheckVariableX
 * PURPOSE    : Determines if expression contains 'x' variable only
 * PARAMETERS : str 
 * RETURNS    : Boolean
 *----------------------------------------------------------------------------*/
    function CheckVariableX(str) {//determine if expression contains 'x' variable only.
        return true;
        //x = character 120
        if (str.match(/([A-Z]+)/)){
            return false;
        }
        
        if (str.match(/([a-w]+)/)){
            return false;
        }

        if (str.match(/([y-z]+)/)){
            return false;
        }

        return true;
    }


/*------------------------------------------------------------------------------
 * NAME       : CheckVariableY
 * PURPOSE    : Determines if expression contains 'y' variable only
 * PARAMETERS : str 
 * RETURNS    : Boolean
 *----------------------------------------------------------------------------*/
    function CheckVariableY(str) {//determine if expression contains 'x' variable only.
        return true;
        if (str.match(/([A-Z]+)/)){
            return false;
        }
        
        if (str.match(/([a-x]+)/)){
            return false;
        }

        if (str.match(/([z]+)/)){
            return false;
        }

        return true;
    }



/*------------------------------------------------------------------------------
 * NAME       : TestingPoint
 * PURPOSE    : Determines if selected point on graph satifies selected equality/inequality
 * PARAMETERS : xval, yval, equality/inequality
 * RETURNS    : Boolean
 *----------------------------------------------------------------------------*/
    function TestingPoint() {
        var xval = document.getElementById('TestingPointX').value;
        var yval = document.getElementById('TestingPointY').value;
        document.getElementById('TestingPointDiv').innerHTML = '';
        for (var i = 1; i <= 20;i++ ){
        var valuedropbox = document.getElementById('mydropdownCartesian'+i).value;
        var ee1 = document.getElementById('TextBoxForCartesianGraph'+i).value;
        if (parseInt(valuedropbox) <= 4 && ee1 != "" ){
                var e = document.getElementById("mydropdownCartesian"+i);
                var sign = e.options[e.selectedIndex].text;
                //var sign = document.getElementById('mydropdownCartesian'+i).value;
                var leftval = FindValue(yval);
                var rightexpr = document.getElementById('TextBoxForCartesianGraph'+i).value;
                var rightexpr = replaceAll(rightexpr, 'x', '(' + xval + ')');
                var rightval = FindValue(rightexpr);
                var sign2 = sign.replace('y', '');
                var TF = CheckValue(leftval, sign2, rightval);

                var text = "For equation/inequality " + i + ':<br>';
                var text = text + sign + ' ' + document.getElementById('TextBoxForCartesianGraph'+i).value + '<br>'
                     + yval + ' ' + sign2 + ' ' + rightexpr + '<br>'
                     + leftval + ' ' + sign2 + ' ' + rightval + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + TF + '<br><br><br>'

                document.getElementById('TestingPointDiv').innerHTML += text;
                
            }     
            else if ((parseInt(valuedropbox) >= 5 && parseInt(valuedropbox) <= 9) && ee1 != "" ){
                var e = document.getElementById("mydropdownCartesian"+i);
                var sign = e.options[e.selectedIndex].text;
                var leftval = FindValue(xval);
                var rightexpr = document.getElementById('TextBoxForCartesianGraph'+i).value;
                var rightexpr = replaceAll(rightexpr, 'y', '(' + yval + ')');
                rightval = FindValue(rightexpr);
                var sign2 = sign.replace('x','');

                var TF = CheckValue(leftval, sign2, rightval);
                var text = "For equation/inequality " + i + ':<br>';
                var text = text + sign + ' ' + document.getElementById('TextBoxForCartesianGraph'+i).value + '<br>'
                     + xval + ' ' + sign2 + ' ' + rightexpr + '<br>'
                     + leftval + ' ' + sign2 + ' ' + rightval + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + TF + '<br><br><br>'

                document.getElementById('TestingPointDiv').innerHTML += text;
                
            }        
            else if (parseInt(valuedropbox) == 10 && ee1 != "" ){
               // var e = document.getElementById("mydropdownCartesian"+i);
                //var sign = e.options[e.selectedIndex].text;
                var leftval = FindValue(xval);
                var rightexpr = document.getElementById('TextBoxForCartesianGraph'+i).value;
                var rightexpr = replaceAll(rightexpr, 'y', '(' + yval + ')');
                rightval = FindValue(rightexpr);
                //var sign2 = sign.replace('x','');
                leftval = '(' + leftval + ')<sup>2</sup>';
                var leftval2 = Math.pow(xval, 2);
                var TF = CheckValue(leftval2, '=', rightval);
                var text = "For equation/inequality " + i + ':<br>';
                var text = text + 'x<sup>2</sup> = ' + document.getElementById('TextBoxForCartesianGraph'+i).value + '<br>'
                     + '(' + xval+')<sup>2</sup>' + ' = ' + ' ' + rightexpr + '<br>'
                     + leftval2 + ' = ' + ' ' + rightval + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + TF + '<br><br><br>'

                document.getElementById('TestingPointDiv').innerHTML += text;
                
            }                    
           else if (parseInt(valuedropbox) == 11 && ee1 != "" ){
                var leftval = FindValue(yval);
                var rightexpr = document.getElementById('TextBoxForCartesianGraph'+i).value;
                var rightexpr = replaceAll(rightexpr, 'x', '(' + xval + ')');
                rightval = FindValue(rightexpr);
                leftval = '(' + leftval + ')<sup>2</sup>';
                var leftval2 = Math.pow(yval, 2);
                var TF = CheckValue(leftval2, '=', rightval);
                var text = "For equation/inequality " + i + ':<br>';
                var text = text + 'y<sup>2</sup> = ' + document.getElementById('TextBoxForCartesianGraph'+i).value + '<br>'
                     + '(' + yval+')<sup>2</sup>' + ' = ' + ' ' + rightexpr + '<br>'
                     + leftval2 + ' = ' + ' ' + rightval + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + TF + '<br><br><br>'

                document.getElementById('TestingPointDiv').innerHTML += text;
                
            }                    
            
        }    
        
}                   
        


/*------------------------------------------------------------------------------
 * NAME       : CheckValue
 * PURPOSE    : Determines if equality/inequality is true or false
 * PARAMETERS : leftval, equality/inequality sign, rightval
 * RETURNS    : Boolean
 *----------------------------------------------------------------------------*/
    function CheckValue(leftval, sign, rightval) {
        var le = String.fromCharCode(8804);
        var ne = String.fromCharCode(8800);
        var ge = String.fromCharCode(8805);
        var rew = false;
        sign = sign.replace(' ', '');
        sign = sign.replace(' ', '');
        sign = sign.replace(' ', '');
        sign = sign.replace(' ', '');


        if (isFinite(leftval) == false) {
            return false;
        }
        else {
            leftval = Math.round(leftval * 100000000000) / 100000000000;
            rightval = Math.round(rightval * 100000000000) / 100000000000;

            if (sign == le) {
                if (leftval <= rightval) {
                    rew = true;
                }
            }
            else if (sign == '<') {
                if (leftval < rightval) {
                    rew = true;
                }
            }
            else if (sign == ge) {
                if (leftval >= rightval) {
                    rew = true;
                }
            }
            else if (sign == '>') {
                if (leftval > rightval) {
                    rew = true;
                }
            }
            else if (sign == ne) {
                if (leftval != rightval) {
                    rew = true;
                }
            }
            else if (sign == '=') {
                if (leftval == rightval) {
                    rew = true;
                }
            }

        }

        return rew;
    }

 



/*------------------------------------------------------------------------------
* NAME       : isNum
* PURPOSE    : Determines whether or not input character is a number
* PARAMETERS : character
* RETURNS    : boolean value
*----------------------------------------------------------------------------*/
    function isNum(n) {
        return Number(n) == n;
    }


/*------------------------------------------------------------------------------
 * NAME       : ToDecimal
 * PURPOSE    : Converts number in engineering notation to long decimal
 * PARAMETERS : ss 
 * RETURNS    : long decimal number
 *----------------------------------------------------------------------------*/
    function ToDecimal2(ss) {
        if (ss.indexOf('e') == -1) { return ss };

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
            if (power == lfp) {
                res = mantissa.replace('.', '');
            }
            else if (power < lfp) {
                res = ttt[0] + ttt[1].substring(0, power) + '.' + ttt[1].substring(power);

            }
            else if (power > lfp) {
                for (var i = 1; i <= (power - lfp); i++) {
                    noz += '0';
                }

                res = ttt[0] + ttt[1] + noz;
            }

        }
        else if (mantissa.indexOf('.') == -1 && power < 0) {
            var powerB = Math.abs(parseInt(ss2[1]));
            var noz = '';
            for (var i = 1; i <= powerB - ss2[0].length; i++) {
                noz += '0';
            }

            res = '0.' + noz + mantissa;

        }
        else if (mantissa.indexOf('.') > -1 && power < 0) {
            var powerB = Math.abs(parseInt(ss2[1]));
            var ttt = mantissa.split('.');
            var lfpp = ttt[0].length;
            var noz = '';

            if (powerB == lfpp) {
                res = '0.' + mantissa.replace('.', '');

            }
            else if (powerB < lfpp) {
                //alert('powerB = ' + powerB + ' ;;; lfpp = ' + lfpp);
                var hhh = ttt[0].toString();

                //alert('hhh = ' + hhh);

                res = hhh.substring(0, lfpp - powerB) + '.' + hhh.substring(lfpp - powerB) + ttt[1];

                //alert('resss = ' + res);

            }
            else if (powerB > lfpp) {
                for (var i = 1; i <= powerB - lfpp; i++) {
                    noz += '0';
                }

                res = '0.' + noz + mantissa.replace('.', '');
            }

        }


        if (res.indexOf('-') > -1) {
            res = res.replace('-', '');
            res = '-' + res;
        }

        return res;
    }


/*------------------------------------------------------------------------------
* NAME       : processE
* PURPOSE    : Converts number in engineering notation to long decimal number
* PARAMETERS : string
* RETURNS    : long decimal number
*----------------------------------------------------------------------------*/
    function processE(text) {
        var textin = text;
        while (text.indexOf('e-') > -1) {
            var NN = text.indexOf('e-');
            var PP1 = text.substring(0, NN);
            var PP2 = text.substring(NN + 2);


            if (isNum(PP2)) {
                text = PP1 + '*10^(-' + PP2 + ')';
            }
            else {
                var yy = '';
                var cArray = PP2.split('');
                for (var i = 0; cArray.length; i++) {
                    if (isNum(cArray[i])) {
                        yy += cArray[i];
                    }
                    else { break; }
                }

                var td = ToDecimal('1e-' + yy);
                text = text.replace('e-' + yy, '(' + td + ')');
            }

        }

        while (text.indexOf('e+') > -1) {
            var NN = text.indexOf('e+');
            var PP1 = text.substring(0, NN);
            var PP2 = text.substring(NN + 2);


            if (isNum(PP2)) {
                text = PP1 + '*10^(' + PP2 + ')';
            }
            else {
                var yy = '';
                var cArray = PP2.split('');
                for (var i = 0; cArray.length; i++) {
                    if (isNum(cArray[i])) {
                        yy += cArray[i];
                    }
                    else { break; }
                }

                var td = ToDecimal('1e+' + yy);
                text = text.replace('e+' + yy, '(' + td + ')');
            }

        }

        //alert('textin = ' + textin + '...... text = ' + text);
        return text;
    }

/*------------------------------------------------------------------------------
* NAME       : processResult(
* PURPOSE    : Rounds mantissa part of number in engineering notation 
* PARAMETERS : string
* RETURNS    : number in engineering notation
*----------------------------------------------------------------------------*/
    function processResult(text) {
        var NN = text.indexOf('e');
        if (NN == -1) { return text };

        var PP1 = text.substring(0, NN);
        var PP2 = text.substring(NN + 1);
        var mantissa = Math.round(PP1 * 10000000000) / 10000000000;
        text = mantissa + 'e' + PP2;
        return text;
    }


/*------------------------------------------------------------------------------
* NAME       : SetNumberOfPoints
* PURPOSE    : Sets number of points to be generated for each graph
* PARAMETERS : InputExpression
* RETURNS    : number of points
*----------------------------------------------------------------------------*/
    function SetNumberOfPoints(InputExpression) {
        if (document.getElementById('mrbox').value == 'Y') {
            return 300;
        }

        var npoints1 = setinitialnumberofipoints();
        if (InputExpression.indexOf("Tan") > -1 || InputExpression.indexOf("Csc") > -1 || 
            InputExpression.indexOf("Sec") > -1 || InputExpression.indexOf("Cot") > -1) {
            var npoints1 = 2000;
        }

        var npoints2 = document.getElementById('morepointsongraph').value;
        if (npoints2.trim() != '' && parseFloat(npoints2) > 300) {
            npoints1 = parseFloat(npoints2);
        }
        
        //alert('npoints1 ....' + npoints1);
        return npoints1;
    }


/*------------------------------------------------------------------------------
* NAME       : setinitialnumberofipoints
* PURPOSE    : Sets initial number of points to be generated for each graph
* PARAMETERS : value of element document.getElementById('mrbox')
* RETURNS    : number of points
*----------------------------------------------------------------------------*/ 
 function setinitialnumberofipoints(){

   if (document.getElementById('mrbox').value == 'Y') {
      return 300;
   }
  
    var count = 0;
        
    for (var i=1; i<= 20; i++){
	    var name = 'TextBoxForCartesianGraph' + i;
	    if (document.getElementById(name).value != "") {
		    count += 1;
	    }

    }

  
    for (var i=1; i<= 10; i++){
	    var name = 'TextBoxForGraphX' + i;
	    //if (document.getElementById(name).value != "") {
		//    count += 1;
	    //}
    }

    //alert('count = ' + count);

    if(count == 0){
	    return 300;
    }
    else if(count <= 2){
	    return 1000;
    }
    else if(count <= 4){
	    return 500;
    }
    else if(count > 4){
	    return 300;
    }
}
  

function Processparabola(Expression, type){
    //alert("Expression..." + Expression);
    var n1 = Expression.indexOf('(');
    //alert("n1..." + n1);
    Expression = Expression.substring(n1+1);
    Expression = Expression.substring(0, Expression.length-1);
    var tt = Expression.split(';');
    var hh= FindValue(tt[0]);
    var kk= FindValue(tt[1]);
    var pp= FindValue(tt[2]);
    //alert('hh = ' + hh+ '....kk = ' + kk+ '.....pp = ' + pp);
    if (type == 'Up') {
        return '(x - (' + hh + '))^2/(' + (4 * pp) + ') + ' + kk;
    }
    else if (type == 'Down') {
        return '(x - (' + hh + '))^2/(' + (-4 * pp) + ') + ' + kk;
    }
    else if (type == 'Right') {
        return '(y - (' + kk + '))^2/(' + (4 * pp) + ') + ' + hh;
    }
    else if (type == 'Left') {
        return '(y - (' + kk + '))^2/(' + (-4 * pp) + ') + ' + hh;
    }
}



 
/*------------------------------------------------------------------------------
* NAME       : GraphingCalculator
* PURPOSE    : Generates data for graph(s)
* PARAMETERS : two-varialbe equations or inequalities
* RETURNS    : data for each graph
*----------------------------------------------------------------------------*/ 
    function GraphingCalculator() {                 
        cleardatastorage();
        var sup2 = String.fromCharCode(178);		
        var thetasymbol = String.fromCharCode(952);   //theta    
        var xRmin = FindValue(document.getElementById('xMinParameter').value);
        var xRmax = FindValue(document.getElementById('xMaxParameter').value);
        var yRmin = FindValue(document.getElementById('yMinParameter').value);
        var yRmax = FindValue(document.getElementById('yMaxParameter').value);
        var npoints1 = 300;
        //var npoints1 = setinitialnumberofipoints();

        var xh1 = (xRmax - xRmin) / npoints1;
        var yh1 = (yRmax - yRmin) / npoints1;

        for (var i = 1; i <= 20; i++) {
            var rightsideinputequation = document.getElementById('TextBoxForCartesianGraph' + i).value;
            if(rightsideinputequation.indexOf('pi') > - 1 || rightsideinputequation.indexOf('PI') > - 1 || rightsideinputequation.indexOf('Pi') > - 1){
                rightsideinputequation = replaceAll(rightsideinputequation, "PI", "π");
                rightsideinputequation = replaceAll(rightsideinputequation, "Pi", "π");
                rightsideinputequation = replaceAll(rightsideinputequation, "pi", "π");
                document.getElementById('TextBoxForCartesianGraph' + i).value = rightsideinputequation;
            }

            if(rightsideinputequation.indexOf('X')>-1){
                rightsideinputequation = replaceAll(rightsideinputequation, 'X', 'x');
                document.getElementById('TextBoxForCartesianGraph' + i).value = rightsideinputequation;
            }
            if(rightsideinputequation.indexOf('Y')>-1){
                rightsideinputequation = replaceAll(rightsideinputequation, 'Y', 'y');
                document.getElementById('TextBoxForCartesianGraph' + i).value = rightsideinputequation;
            }            


            var statusCheckbox = document.getElementById('checkboxY' + i).checked;
            var valuedropbox = document.getElementById('mydropdownCartesian' + i).value;
            var valueSelect = document.getElementById('mydropdownCartesian' + i);
            var selectedText = valueSelect.options[valueSelect.selectedIndex].text;

            //alert('selectedText...' + selectedText);
            //alert('rightsideinputequation...' + rightsideinputequation);
            //alert('55555.....i=' + i);       
            if (rightsideinputequation != "" && statusCheckbox == true) {
                //alert('3333.....i=' + i);       
                var InputExpression = rightsideinputequation;
                //check left side and right side of input equation to make sure both sides do not have "X" or both sides have "Y"

                if (parseInt(valuedropbox) <= 4 && rightsideinputequation.indexOf('y') > -1 && rightsideinputequation.indexOf('hyperbola') == -1) {
                    var msg = 'Equation ' + i + ' has "y" on both sides of the equation.\n\n If the left side has "y", then right side cannot have "y".\n\n\n\n';
                    alert(msg);
                    return;
                }

                if ((parseFloat(valuedropbox) >= 5 && parseFloat(valuedropbox) <= 9)&& rightsideinputequation.indexOf('x') > -1  && rightsideinputequation.indexOf('hyperbola') == -1) {
                    var msg = 'Equation ' + i + ' has "x" on both sides of the equation.\n\n If the left side has "x", then right side cannot have "x".\n\n\n\n';
                    alert(msg);
                    return;
                }
                if (parseFloat(valuedropbox) == 10 && rightsideinputequation.indexOf('x') > -1) {
                    var msg = 'Equation ' + i + ' has "x" on both sides of the equation.\n\n If the left side has "x", then right side cannot have "x".\n\n\n\n';
                    alert(msg);
                    return;
                }
                if (parseFloat(valuedropbox) == 11 && rightsideinputequation.indexOf('y') > -1) {
                    var msg = 'Equation ' + i + ' has "y" on both sides of the equation.\n\n If the left side has "y", then right side cannot have "x".\n\n\n\n';
                    alert(msg);
                    return;
                }
  


                if (InputExpression.indexOf("{") > -1) {
                    //alert('000...' + InputExpression);
                    InputExpression = ProcessInequality(InputExpression);
                    //alert('111...' + InputExpression);
                }
           
                if (InputExpression.indexOf("parabolaUp") > -1) {
                    InputExpression = Processparabola(InputExpression, 'Up');
                    document.getElementById('TextBoxForCartesianGraph' + i).value = InputExpression;
                    document.getElementById('mydropdownCartesian' + i).value = 0;
                    valuedropbox = 0;
                }

                if (InputExpression.indexOf("parabolaDown") > -1) {
                    InputExpression = Processparabola(InputExpression, 'Down');
                    document.getElementById('TextBoxForCartesianGraph' + i).value = InputExpression;
                    document.getElementById('mydropdownCartesian' + i).value = 0;
                    valuedropbox = 0;
                }                

                if (InputExpression.indexOf("parabolaLeft") > -1) {
                    InputExpression = Processparabola(InputExpression, 'Left');
                    document.getElementById('TextBoxForCartesianGraph' + i).value = InputExpression;
                    document.getElementById('mydropdownCartesian' + i).value = 5;
                    valuedropbox = 5;
                }                

                if (InputExpression.indexOf("parabolaRight") > -1) {
                    InputExpression = Processparabola(InputExpression, 'Right');
                    document.getElementById('TextBoxForCartesianGraph' + i).value = InputExpression;
                    document.getElementById('mydropdownCartesian' + i).value = 5;
                    valuedropbox = 5;
                }


                if (InputExpression.indexOf("|") > -1) {
                    InputExpression = ProcessAbsoluteValue(InputExpression);
                }

                while (InputExpression.indexOf('Root') > -1) {
                    InputExpression = processroot(InputExpression);
                    //alert('InputExpression Root:..' + InputExpression);
                    if (InputExpression == NaN) {
                        return;
                    }
                }



                //for equations/inequalities with "y" on left side
                if (parseInt(valuedropbox) <= 4) {
                    npoints1 = SetNumberOfPoints(InputExpression);
                    var xh1 = (xRmax - xRmin) / npoints1;
                    //alert('555554 draw()')
                    if (InputExpression.indexOf("ellipse") > -1) {
                        getDataConic(InputExpression, npoints1, 'GraphY' + i, "ellipse");
                    }
                    else if (InputExpression.indexOf("circle") > -1) {
                        getDataConic(InputExpression, npoints1, 'GraphY' + i, "circle");
                    }
                    else if (InputExpression.indexOf("hyperbolaxy") > -1) {
                        getDataConic(InputExpression, npoints1, 'GraphY' + i, "hyperbolaxy");
                    }
                    else if (InputExpression.indexOf("hyperbolayx") > -1) {
                        getDataConic(InputExpression, npoints1, 'GraphY' + i, "hyperbolayx");
                    }

    


                    else if (InputExpression.indexOf("normalpdf") > -1) {
                        getDataStatistics(InputExpression, npoints1, 'GraphY' + i, "normalpdf");
                    }
                    else if (InputExpression.indexOf("normalcdf") > -1) {
                        getDataStatistics(InputExpression, npoints1, 'GraphY' + i, "normalcdf");
                    }
                    else if (InputExpression.indexOf("tdistpdf") > -1) {
                        getDataStatistics(InputExpression, npoints1, 'GraphY' + i, "tdistpdf");
                    }
                    else if (InputExpression.indexOf("tdistcdf") > -1) {
                        getDataStatistics(InputExpression, npoints1, 'GraphY' + i, "tdistcdf");
                    }
                    else if (InputExpression.indexOf("fdistpdf") > -1) {
                        getDataStatistics(InputExpression, npoints1, 'GraphY' + i, "fdistpdf");
                    }
                    else if (InputExpression.indexOf("FDistcdf") > -1) {
                        getDataStatistics(InputExpression, npoints1, 'GraphY' + i, "fdistcdf");
                    }
                    else {

                        //alert('InputExpression7777.....' + InputExpression);
                        GenerateCartesianData(InputExpression, npoints1, xRmin, xh1, 'GraphY' + i);
                    }

                     //TableY1234BB(); //make table of values
                }
                else if (parseInt(valuedropbox) <= 9){ //for equations/inequalities with "x" on left side
                    var yh1 = (yRmax - yRmin) / npoints1;
                    while (InputExpression.indexOf("y") > -1) {
                        InputExpression = InputExpression.replace("y", "x");
                    }
                    
                    GenerateCartesianData(InputExpression, npoints1, yRmin, yh1, 'GraphY'+i);
                    var tt = (document.getElementById('GraphY' + i).value).split(';;;');
                    var tt2 = tt[1] + ';;;' + tt[0];
                    document.getElementById('GraphY' + i).value = tt2;

                    //document.getElementById('tempdata').value = document.getElementById('GraphY' + i).value;
                    //alert('InputExpression5555.....' + InputExpression);
                                                       
                }

                else if (parseInt(valuedropbox) == 10){ //for equations "x squared" on left side
                    var yh1 = (yRmax - yRmin) / npoints1;
                    while (InputExpression.indexOf("y") > -1) {
                        InputExpression = InputExpression.replace("y", "x");
                    }
                    var tf = InputExpression;
                    InputExpression = "√ ̅(" +tf +")";
                    GenerateCartesianData2(InputExpression, npoints1, yRmin, yh1, 'GraphY'+i);

                    InputExpression = "-√ ̅(" +tf +")";
                    GenerateCartesianData2(InputExpression, npoints1, yRmin, yh1, 'GraphX'+i);
                }
                else if (parseInt(valuedropbox) == 11){ //for equations "y squared" on left side
                    var xh1 = (xRmax - xRmin) / npoints1;
                    var tf = InputExpression;
                    InputExpression = "√ ̅(" +tf +")";
                    GenerateCartesianData(InputExpression, npoints1, xRmin, yh1, 'GraphY'+i);
                    InputExpression = "-√ ̅(" +tf +")";
                    GenerateCartesianData(InputExpression, npoints1, xRmin, yh1, 'GraphX'+i);
                }
            }       
        }


        //for graph of circle
         if (document.getElementById("checkboxcircle").checked) {
       
             for (var i = 1; i <= 10; i++) {
                 var part1 = document.getElementById('TextBoxCircleA'+i).value;
                 var part2 = document.getElementById('TextBoxCircleB'+i).value;
                 var part3 = document.getElementById('TextBoxCircleC'+i).value;


                 //alert('part1 =' + part1 + part2 + part3);

                 if (part1 != "" && part2 != "" && part3 != "") {
                     var radius = FindValue(part3);
                     var thg = part1;
                     thg = replaceAll(thg, " ", "");

                     if (thg.indexOf("y+") > -1) {
                         var thg2 = thg.split("y+", "-");
                     }
                     else if (thg.indexOf("y-") > -1) {
                         var thg2 = thg.replace("y-", "");
                     }
                     else if (thg.indexOf("y") > -1) {
                         var thg2 = "0";
                     }
                     else if (thg.indexOf("x-") > -1) {
                         var thg2 = thg.replace("x-", "");
                     }
                     else if (thg.indexOf("x+") > -1) {
                         var thg2 = thg.replace("x+", "-");
                     }
                     else if (thg.indexOf("x") > -1) {
                         var thg2 = "0";
                     }


                     var thp = part2;
                     thp = replaceAll(thp, " ", "");

                     if (thp.indexOf("y+") > -1) {
                         var thp2 = thp.replace("y+", "-");
                     }
                     else if (thp.indexOf("y-") > -1) {
                         var thp2 = thp.replace("y-", "");
                     }
                     else if (thp.indexOf("y") > -1) {
                         var thp2 = "0";
                     }
                     else if (thp.indexOf("x-") > -1) {
                         var thp2 = thp.replace("x-", "");
                     }
                     else if (thp.indexOf("x+") > -1) {
                         var thp2 = thp.replace("x+", "-");
                     }
                     else if (thp2.indexOf("x") > -1) {
                         var thp2 = "0";
                     }
                     //alert('part1266666622 =' + part1 + part2 + part3);
                     //draw center of circle      
                     document.getElementById("GraphCircleCenterX" + i).value = thg2;
                     document.getElementById("GraphCircleCenterY" + i).value = thp2;
                     //alert('part1269999999999996666622 =' + part1 + part2 + part3);

                     var InputExpression="ellipse(" + thg2 + ";" + thp2 + ";" + radius  + ";" + radius + ")";
                     var npoints1 = 1000;
                     //alert('part1222 =' + part1 + part2 + part3);
                     getDataConic(InputExpression, npoints1, 'GraphCircle' + i, "ellipse");

                     //var rr = document.getElementById('GraphCircle' + i).value; 
                 }


             }
         }


        
        //for graph of ellipse and hyperbola
         if (document.getElementById("checkboxconic1").checked) {

             for (var i = 1; i <= 4; i++) {
                 var pkc1 = "TextBoxconicAAA" + i; //numerator 1
                 var pkc2 = "TextBoxconicBBB" + i; //plus or minus
                 var pkc3 = "TextBoxconicCCC" + i; //numerator 2
                 var pkc4 = "TextBoxconicFFF" + i; //denominator2
                 var pkc5 = "TextBoxconicDDD" + i; //denominator 1
                 var pkc6 = "TextBoxconicEEE" + i; //rightside
                 var pkc7 = "checkboxXsquared3" + i; //checkbox   

                 var numerator1 = document.getElementById(pkc1).value;
                 var plusminus = document.getElementById(pkc2).value;  //a squared
                 var numerator2 = document.getElementById(pkc3).value;
                 var denominator2 = document.getElementById(pkc4).value;
                 var denominator1 = document.getElementById(pkc5).value; //b squared
                 var rightside = document.getElementById(pkc6).value;
                 var checkboxi = document.getElementById(pkc7).checked;

                 if(numerator1.indexOf('x')>-1 && numerator2.indexOf('x')>-1 ){
                     var msg = 'Input equation must "x" and "y".';
                     alert(msg);
                     return;
                 }
                 if(numerator1.indexOf('y')>-1 && numerator2.indexOf('y')>-1 ){
                     var msg = 'Input equation must "x" and "y".';
                     alert(msg);
                     return;
                 }


                 //var buttoncolor =  colorselect(i) ;//	"#000080";
                 //////////////////////////
                 if (numerator1 != '' && plusminus != '' && numerator2 != '' && denominator1 != '' && denominator2 != '' && rightside != '' && checkboxi) {
                     var thg = numerator1;
                     thg = replaceAll(thg, " ", "");

                     if (thg.indexOf("y+") > -1) {
                         var thg2 = thg.split("y+", "-");
                         k = eval(denominator1) * eval(rightside);
                     }
                     else if (thg.indexOf("y-") > -1) {
                         var thg2 = thg.replace("y-", "");
                         k = eval(denominator1) * eval(rightside);
                     }
                     else if (thg.indexOf("y") > -1) {
                         var thg2 = "0";
                         k = eval(denominator1) * eval(rightside);
                     }
                     else if (thg.indexOf("x-") > -1) {
                         var thg2 = thg.replace("x-", "");
                         h = eval(denominator1) * eval(rightside);
                     }
                     else if (thg.indexOf("x+") > -1) {
                         var thg2 = thg.replace("x+", "-");
                         h = eval(denominator1) * eval(rightside);
                     }
                     else if (thg.indexOf("x") > -1) {
                         var thg2 = "0";
                         h = eval(denominator1) * eval(rightside);
                     }


                     var thp = numerator2;
                     thp = replaceAll(thp, " ", "");

                     if (thp.indexOf("y+") > -1) {
                         var thp2 = thp.replace("y+", "-");
                         k = eval(denominator2) * eval(rightside);
                     }
                     else if (thp.indexOf("y-") > -1) {
                         var thp2 = thp.replace("y-", "");
                         k = eval(denominator2) * eval(rightside);
                     }
                     else if (thp.indexOf("y") > -1) {
                         var thp2 = "0";
                         k = eval(denominator2) * eval(rightside);
                     }
                     else if (thp.indexOf("x-") > -1) {
                         var thp2 = thp.replace("x-", "");
                         h = eval(denominator2) * eval(rightside);
                     }
                     else if (thp.indexOf("x+") > -1) {
                         var thp2 = thp.replace("x+", "-");
                         h = eval(denominator2) * eval(rightside);
                     }
                     else if (thp.indexOf("x") > -1) {
                         var thp2 = "0";
                         h = eval(denominator2) * eval(rightside);
                     }

                     //alert('thg2....' + thg2 + '.....thp2' + thp2 + '.....h.....' + h + '.....k...' + k);

                     var npoints1 = 1000;
                     if (plusminus.trim() == "+") {
                         var InputExpression = "ellipse(" + thg2 + ";" + thp2 + ";" + h + ";" + k + ")";
                         getDataConic(InputExpression, npoints1, "GraphConic" + i, "ellipse");


                         if (parseFloat(h) >= parseFloat(k)) {//ellipse elongated horizontally                            
 
                             var aa = Math.sqrt(parseFloat(h));
                             var bb = Math.sqrt(parseFloat(k));
                             var cc = Math.sqrt(parseFloat(h) - parseFloat(k));
                             var centerX = parseFloat(thg2);
                             var centerY = parseFloat(thp2);
                             //var vertexX1 = centerX + aa;
                             //var vertexY1 = centerY;
                             //var vertexX2 = centerX - aa;
                             //var vertexY2 = centerY;
                             //var focusX1 = centerX + cc;
                             //var focusY1 = centerY;
                             //var focusX2 = centerX - cc;
                             //var focusY2 = centerY;


                             //document.getElementById("GraphConicCenterX" + i).value = thg2;
                             //document.getElementById("GraphConicCenterY" + i).value = thp2;
                             //document.getElementById("GraphConicVertexX1" + i).value = (centerX + aa);
                             //document.getElementById("GraphConicVertexY1" + i).value = (centerY);
                             //document.getElementById("GraphConicVertexX2" + i).value = (centerX - aa);
                             //document.getElementById("GraphConicVertexY2" + i).value = (centerY);
                             //document.getElementById("GraphConicFocusX1" + i).value = (centerX + cc);
                             //document.getElementById("GraphConicFocusY1" + i).value = (centerY);
                             //document.getElementById("GraphConicFocusX2" + i).value = (centerX - cc);
                             //document.getElementById("GraphConicFocusY2" + i).value = (centerY);


                             var tgg = document.getElementById("GraphConic" + i).value;
                             tgg = tgg + ";;;" + centerX + ";;;" + centerY
                                 + " ;;; " + (centerX + aa) + " ;;; " + (centerY) 
                                 +" ;;; " + (centerX - aa) + " ;;; " + (centerY) 
                                 +" ;;; " + (centerX + cc) + " ;;; " + (centerY)
                                 +" ;;; " + (centerX - cc) + " ;;; " + (centerY)
                                 +" ;;; " + aa +" ;;; " + bb +" ;;; " + cc;                                 ;

                             //tgg = tgg.replace(' ', '');
                             //var ty = tgg.split(';;;');                             
                             //alert('ty...' + ty.length);
                             //alert('ty2...' + ty);
                             //return;
                             document.getElementById("GraphConic" + i).value = tgg;



                         }
                         else {//ellipse elongated vertically
                             
                             var aa = Math.sqrt(parseFloat(h));
                             var bb = Math.sqrt(parseFloat(k));
                             var cc = Math.sqrt(parseFloat(k) - parseFloat(h));
                             var centerX = parseFloat(thg2);
                             var centerY = parseFloat(thp2);

                             //document.getElementById("GraphConicVertexX1" + i).value = centerX;
                             //document.getElementById("GraphConicVertexY1" + i).value = centerY + bb;
                             //document.getElementById("GraphConicVertexX2" + i).value = centerX;
                             //document.getElementById("GraphConicVertexY2" + i).value = centerY - bb;

                             //document.getElementById("GraphConicFocusX1" + i).value = centerX;
                             //document.getElementById("GraphConicFocusY1" + i).value = centerY + cc;
                             //document.getElementById("GraphConicFocusX2" + i).value = centerX;
                             //document.getElementById("GraphConicFocusY2" + i).value = centerY - cc;
                             var tgg = document.getElementById("GraphConic" + i).value;
                             tgg = tgg + " ;;; " + centerX + " ;;; " + centerY
                                 + " ;;; " + (centerX) + " ;;; " + (centerY+bb) 
                                 +" ;;; " + (centerX) + " ;;; " + (centerY-bb) 
                                 +" ;;; " + (centerX) + " ;;; " + (centerY+cc) 
                                 +" ;;; " + (centerX) + " ;;; " + (centerY-cc)
                                 +" ;;; " + bb +" ;;; " + aa +" ;;; " + cc;   

                             document.getElementById("GraphConic" + i).value = tgg;
                         }
                     }
                     else if (plusminus.trim() == "-" && numerator1.indexOf("x") > -1 && numerator2.indexOf("y") > -1) {
                         var InputExpression = "hyperbolaxy(" + thg2 + ";" + thp2 + ";" + h + ";" + k + ")";
                         getDataConic(InputExpression, npoints1, "GraphConic" + i, "hyperbolaxy");

                         var aa = Math.sqrt(parseFloat(h));
                         var bb = Math.sqrt(parseFloat(k));
                         var cc = Math.sqrt(parseFloat(k) + parseFloat(h));
                         var centerX = parseFloat(thg2);
                         var centerY = parseFloat(thp2);

                         //document.getElementById("GraphConicVertexX1" + i).value = centerX + aa;
                         //document.getElementById("GraphConicVertexY1" + i).value = centerY;
                         //document.getElementById("GraphConicVertexX2" + i).value = centerX - aa;
                         //document.getElementById("GraphConicVertexY2" + i).value = centerY;

                         //document.getElementById("GraphConicFocusX1" + i).value = centerX + cc;
                         //document.getElementById("GraphConicFocusY1" + i).value = centerY;
                         //document.getElementById("GraphConicFocusX2" + i).value = centerX - cc;
                         //document.getElementById("GraphConicFocusY2" + i).value = centerY;
                         var tgg = document.getElementById("GraphConic" + i).value;
                         tgg = tgg + " ;;; " + centerX + " ;;; " + centerY
                                 + " ;;; " + (centerX + aa) + " ;;; " + (centerY) 
                                 +" ;;; " + (centerX - aa) + " ;;; " + (centerY) 
                                 +" ;;; " + (centerX + cc) + " ;;; " + (centerY)
                                 +" ;;; " + (centerX - cc) + " ;;; " + (centerY)
                                 +" ;;; " + aa +" ;;; " + bb +" ;;; " + cc;;

                         document.getElementById("GraphConic" + i).value = tgg;

                     }

                     else if (plusminus.trim() == "-" && numerator1.indexOf("y") > -1 && numerator2.indexOf("x") > -1) {
                         var InputExpression = "hyperbolayx(" + thg2 + ";" + thp2 + ";" + h + ";" + k + ")";
                         getDataConic(InputExpression, npoints1, "GraphConic" + i, "hyperbolayx");
                         var aa = Math.sqrt(parseFloat(h));
                         var bb = Math.sqrt(parseFloat(k));
                         var cc = Math.sqrt(parseFloat(k) + parseFloat(h));
                         var centerX = parseFloat(thg2);
                         var centerY = parseFloat(thp2);

                         //document.getElementById("GraphConicVertexX1" + i).value = centerX;
                         //document.getElementById("GraphConicVertexY1" + i).value = centerY + bb;
                         //document.getElementById("GraphConicVertexX2" + i).value = centerX;
                         //document.getElementById("GraphConicVertexY2" + i).value = centerY - bb;

                         //document.getElementById("GraphConicFocusX1" + i).value = centerX;
                         //document.getElementById("GraphConicFocusY1" + i).value = centerY + cc;
                         //document.getElementById("GraphConicFocusX2" + i).value = centerX;
                         //document.getElementById("GraphConicFocusY2" + i).value = centerY - cc;

                         var tgg = document.getElementById("GraphConic" + i).value;
                             tgg = tgg + " ;;; " + centerX + " ;;; " + centerY
                                 + " ;;; " + (centerX) + " ;;; " + (centerY+bb) 
                                 +" ;;; " + (centerX) + " ;;; " + (centerY-bb) 
                                 +" ;;; " + (centerX) + " ;;; " + (centerY+cc) 
                                 +" ;;; " + (centerX) + " ;;; " + (centerY-cc)
                                 +" ;;; " + bb +" ;;; " + aa +" ;;; " + cc;

                         document.getElementById("GraphConic" + i).value = tgg;

                     }

                 }

             }

         }



        //for parametric equations
        if (document.getElementById("ParametricEquationsOnOff").checked) {
            var Tmax2 = document.getElementById("ParametricTmax").value;
            var Tmin2 = document.getElementById("ParametricTmin").value;
            var Tstepsize2 = document.getElementById("ParametricTstepsize").value;
            if(Tmax2.trim()==''){
                document.getElementById("ParametricTmax").value = 0;
            }

            if(Tmin2.trim()==''){
                document.getElementById("ParametricTmin").value = '2Ï€';
            }

            if(Tstepsize2.trim()==''){
                document.getElementById("ParametricTstepsize").value = '0.01';
            }


            var Tmax = FindValue(document.getElementById("ParametricTmax").value);
            var Tmin = FindValue(document.getElementById("ParametricTmin").value);
            var Tstepsize = FindValue(document.getElementById("ParametricTstepsize").value);
            var thetasymbol = String.fromCharCode(952);   //theta    
            for (var i = 1; i <= 10; i++) {                
                var tt1 = document.getElementById("ParametricX"+i).value ;
                var tt2 = document.getElementById("ParametricY" + i).value;

                if (tt1.indexOf(thetasymbol) > -1 || tt2.indexOf(thetasymbol) > -1) {
                    tt1 = replaceAll(tt1, thetasymbol, 't');
                    tt2 = replaceAll(tt2, thetasymbol, 't');
                    document.getElementById("ParametricX"+i).value = tt1;
                    document.getElementById("ParametricY"+i).value = tt2;
                }

                var tt3 = document.getElementById('checkboxParametric'+i).checked;
                if (tt1.trim() != "" && tt2.trim() != "" && tt3) {                 
                    var InputExpression1 = document.getElementById("ParametricX"+i).value;
                    var InputExpression2 = document.getElementById("ParametricY"+i).value;
                    var x1 = 0.0;
                    var y1 = 0.0;
                    var xdata = "";
                    var ydata = "";
                    var temp1 = 0.0;
                    var stepsize = (Tmax - Tmin) / npoints1;
                    
                    for (var k = 0; k <= npoints1; k++) {
                        var t1 = Tmin + k * stepsize;
                        var LL = t1.toString();
                        if (LL.indexOf("e")) {
                            LL = ToDecimal(LL);
                        }

                        temp1 = replaceAll(InputExpression1, "t", "(" + LL + ")");
                        temp2 = replaceAll(InputExpression2, "t", "(" + LL + ")");

                        try {
                            x1 = FindValue(temp1);
                            y1 = FindValue(temp2);

                        }
                        catch (err) {
                            x1 = NaN; //Handle errors here
                            y1 = NaN;
                        }


                        if (IsNumericc(x1) == false || x1 == null) {
                            x1 = NaN;
                            y1 = NaN;
                        }

                        xdata += x1 + ",";
                        ydata += y1 + ",";

                    }

                    xdata = xdata.substring(0, xdata.length - 1);
                    ydata = ydata.substring(0, ydata.length - 1);
                    document.getElementById('ParametricSet'+i).value = xdata + " ;;; " + ydata;

                    //alert('888888');
                    //alert('888888111'+document.getElementById('ParametricTraceMethod1').checked);
                    //alert('888888222'+document.getElementById('ParametricTraceMethod2').checked);
                    var condition22 = (document.getElementById('TraceParametricCheckbox').checked);
                    //create tracing point for parametric equation (manual tracing)

                    if (document.getElementById('ParametricTraceMethod1').checked && condition22) {
                        if (document.getElementById('ParametricTracechartID' + i).checked && document.getElementById("TraceParametricCheckbox").checked) {
                            var LL = document.getElementById('TraceParametricBox').value;
                            if (LL.indexOf("e")) {
                                LL = ToDecimal(LL);
                            }

                            temp1 = replaceAll(InputExpression1, "t", "(" + LL + ")");
                            temp2 = replaceAll(InputExpression2, "t", "(" + LL + ")");
                            try {
                                x1 = FindValue(temp1);
                                y1 = FindValue(temp2);
                            }
                            catch (err) {
                                x1 = NaN; //Handle errors here
                                y1 = NaN;
                            }

                            if (IsNumericc(x1) == false || x1 == null) {
                                x1 = NaN;
                                y1 = NaN;
                            }

                            k = Math.round(k * 10000000000) / 10000000000;
                            x1 = Math.round(x1 * 10000000000) / 10000000000;
                            y1 = Math.round(y1 * 10000000000) / 10000000000;

                            document.getElementById('TracePointX').value = x1;
                            document.getElementById('TracePointY').value = y1;

                            //var ttr = '';
                            //if(parseFloat(y1) != parseInt(y1)){
                            //    ttr =  " = (" + x1 + " , " + ToFraction(y1.toString()) + ")";   
                            //}
                            var tt = document.getElementById('TraceParametricBox').value; //TraceParametricBox
                            document.getElementById('LocationOfMouseClickX2').value = "t = " + tt + ' ; x =' + x1 + " ; y = " + y1;

                            //document.getElementById('LocationOfMouseClickX2').value = x1;
                            //document.getElementById('LocationOfMouseClickY2').value = y1;
                        }
                    }
                    else if (document.getElementById('ParametricTraceMethod2').checked && condition22) {
                        //create tracing point for parametric equation (automatic tracing)
                        //alert('1478888'+document.getElementById('ParametricTracechartID' + i).checked);
                        //alert('1473333'+document.getElementById("TraceParametricCheckbox").checked);
                        if (document.getElementById('ParametricTracechartID' + i).checked && document.getElementById("TraceParametricCheckbox").checked) {
                            //alert('777777777777777771111');
                            var StartVal = document.getElementById("ParametricStartValueTracingmethod").value;
                            var EndVal = document.getElementById("ParametricEndValueTracingmethod").value;
                            var Stepsize = document.getElementById("ParametricStepsizetracingmethod2").value;
                            if(StartVal.trim()==''){
                                StartVal = Tmin;
                                document.getElementById("ParametricStartValueTracingmethod").value = Tmin;
                            }

                            if(EndVal.trim()==''){
                                EndVal = Tmax;
                                document.getElementById("ParametricEndValueTracingmethod").value = Tmax;
                            }

                            if(Stepsize.trim()==''){
                                Stepsize = Tstepsize;
                                document.getElementById("ParametricStepsizetracingmethod2").value = Tstepsize;
                            }

                            var ts = document.getElementById("ParametricSpeedtracingmethod").value;
                            if(ts.trim()==''){
                                ts = 0.1;
                                document.getElementById("ParametricSpeedtracingmethod").value = 0.1;
                            }

                            //alert('7777777777777777722222');
                            var TracingSpeed = 1000*parseFloat(FindValue(ts.toString()));                            
                            var StartVal22 = parseFloat(FindValue(StartVal.toString()));
                            var EndVal22 = parseFloat(FindValue(EndVal.toString()));
                            var Stepsize22 = parseFloat(FindValue(Stepsize.toString()));
                            ////////////////////////////////////
                            //clearInterval(AutomaticTracingParametric);
                            //alert('7777777777777777733333');
                            var th = StartVal22;
                            var AutomaticTracingParametric = setInterval(function () {
                                var temp1 = replaceAll(InputExpression1, "t", "(" + th + ")");
                                var temp2 = replaceAll(InputExpression2, "t", "(" + th + ")");
                                try {
                                    x1 = FindValue(temp1);
                                    y1 = FindValue(temp2);
                                }
                                catch (err) {
                                    x1 = NaN; //Handle errors here
                                    y1 = NaN;
                                }

                                if (IsNumericc(x1) == false || x1 == null) {
                                    x1 = NaN;
                                    y1 = NaN;
                                }

                                th = Math.round(th * 10000000000000) / 10000000000000;
                                x1 = Math.round(x1 * 10000000000) / 10000000000;
                                y1 = Math.round(y1 * 10000000000) / 10000000000;

                                document.getElementById('TracePointX').value = x1;
                                document.getElementById('TracePointY').value = y1;

                                //var ttr = '';
                                //if(parseFloat(y1) != parseInt(y1)){
                                //    ttr =  " = (" + x1 + " , " + ToFraction(y1.toString()) + ")";   
                                //}
                                var th22 = th;
                                if (document.getElementById('taspiparametric').checked) {
                                    th22 = expressaspi(th);
                                }

                                document.getElementById('LocationOfMouseClickX2').value = "t = " + th22 + ' ; x =' + x1 + " ; y = " + y1;

                                var stopmsg = document.getElementById('ParametricStopTracingMsg').value;
                                draw();

                                th +=  Stepsize22;
                                //alert('77777777777777777LL = ' + th);
                                //GraphingCalculator();

                                if (stopmsg == 'stop') {
                                    //alert('7777777777788888555555555stop = ' + th);
                                    clearInterval(AutomaticTracingParametric);
                                }
                                if (parseFloat(th) > EndVal22) {
                                    //alert('7777777777788881111111stop = ' + th + '......EndVal22.....'+EndVal22);
                                    th = StartVal22;
                                    //clearInterval(AutomaticTracingParametric);
                                }

                            }, TracingSpeed);
                            //////////////////////////////
                        }
                    }
                }
            }//loop for i

        }


   
        //for polar equations
        if (document.getElementById("PolarEquationsOnOff").checked) {
            //alert('polar');
            var thetasymbol = String.fromCharCode(952);   //theta   
            for (var i = 1; i <= 20; i++) {
                var pp = document.getElementById("checkboxPolarEquation" + i).checked;
                if (document.getElementById("PolarEquation" + i).value != "" && pp) {//alert('polar4422');
                    var InputExpression = document.getElementById("PolarEquation" + i).value;
                    var NameOfEquation = 'r' + '<sub>1</sub>(' + thetasymbol + ') = ' + InputExpression;
                    var PolarEquType = document.getElementById("MyDropDownTheta" + i).value;
                    if (PolarEquType == 'rtheta') {
                    //alert('PolarEquType11 = ' + PolarEquType);

                        PolarGraphData(InputExpression, "PolarSet" + i, "PolarEquationSet" + i, NameOfEquation, npoints1);
                    }
                    else if (PolarEquType == 'theta'){
                    //alert('PolarEquType22 = ' + PolarEquType);
                         PolarGraphData2(InputExpression, "PolarSet" + i, "PolarEquationSet" + i, NameOfEquation, npoints1);
                                     
                        //document.getElementById("PolarSet" + i).value = "";
                        //document.getElementById('TextBoxForCartesianGraph' + i).value = 'Tan(' +InputExpression+')x';
                        //var InputExpression24 = 'Tan(' +InputExpression+')x';
                        //GenerateCartesianData(InputExpression24, npoints1, xRmin, xh1, 'GraphY' + i);
  
                    }
                }
            }
            //alert('polar22');
            //Generate data for tracing of polar equation            
            var ii = document.getElementById('mydropdownpolar').value;

            var condition33 = (document.getElementById('TracePolarCheckbox').checked);

            //Generate data for manual tracing of polar equation
            if (document.getElementById('PolarTraceMethod1').checked && condition33) {
                //alert('888888bbb');
                if (document.getElementById("TracePolarCheckbox").checked && ii > 0) {
                    var InputExpression = document.getElementById("PolarEquation" + ii).value;
                    var LL = document.getElementById('TracePolarBox').value;
                    if (LL.indexOf("e")) {
                        LL = ToDecimal(LL);
                    }
                    temp1 = replaceAll(InputExpression, thetasymbol, "(" + LL + ")");
                    try {
                        r1 = FindValue(temp1);
                        x1 = r1 * Math.cos(LL);
                        y1 = r1 * Math.sin(LL);
                    }
                    catch (err) {
                        x1 = NaN; //Handle errors here
                        y1 = NaN;
                    }

                    if (IsNumericc(x1) == false || x1 == null) {
                        x1 = NaN;
                        y1 = NaN;
                    }

                    x1 = Math.round(x1 * 10000000000) / 10000000000;
                    y1 = Math.round(y1 * 10000000000) / 10000000000;

                    document.getElementById('TracePointX').value = x1;
                    document.getElementById('TracePointY').value = y1;
                    //alert('7777');
                    document.getElementById('LocationOfMouseClickX2').value = thetasymbol + ' = ' + LL + ' ; r = ' + r1;
                    document.getElementById('LocationOfMouseClickY2').value = 'x = ' + x1 + ' ; y = ' + y1;
                    //document.getElementById('TracePolarBox2').value = r1;
                }
            }
////////////////////////
            //Generate data for automatic tracing
            //alert('condition33 =' + condition33);
            if (document.getElementById('PolarTraceMethod2').checked && condition33) {
                //id of selected equation for tracing
                //PolarTracechartID
                //mydropdownpolar
                var degreeSymbol = String.fromCharCode(176);	
                var Tmax = FindValue(document.getElementById("PolarTmax").value);
                var Tmin = FindValue(document.getElementById("PolarTmin").value);
                var Tstepsize = FindValue(document.getElementById("PolarTstepsize").value);


                var StartVal = document.getElementById("PolarStartValueTracingmethod").value;
                var EndVal = document.getElementById("PolarEndValueTracingmethod").value;
                var Stepsize = document.getElementById("PolarStepsizetracingmethod2").value;
                var TraceSpeed = document.getElementById("PolarSpeedtracingmethod").value;


                if (TraceSpeed.trim() == '') {
                    TraceSpeed = 1;
                    document.getElementById("PolarSpeedtracingmethod").value = 1;
                }

                if (StartVal.trim() == '') {
                    StartVal = Tmin;
                    document.getElementById("PolarStartValueTracingmethod").value = Tmin;
                }

                if (EndVal.trim() == '') {
                    EndVal = Tmax;
                    document.getElementById("PolarEndValueTracingmethod").value = Tmax;
                }

                if (Stepsize.trim() == '') {
                    Stepsize = Tstepsize;
                    document.getElementById("PolarStepsizetracingmethod2").value = Tstepsize;
                }

                var StartVal22 = parseFloat(FindValue(StartVal));
                var EndVal22 = parseFloat(FindValue(EndVal));
                var Stepsize22 = parseFloat(FindValue(Stepsize));
                var th = StartVal22;
                var ts = parseFloat(FindValue(TraceSpeed));
                if(ts < 0){ts = 1};
                //alert('888888qqqqqqqqqqqqqqqqqqqqqqqq');
                if (document.getElementById("TracePolarCheckbox").checked && ii > 0) {
                    var InputExpression = document.getElementById("PolarEquation" + ii).value;
                    //alert('888888ccccccccccccccccccccccccc temp1 = ' + InputExpression);
                    var TracingSpeed = 1000*ts;
                    //var thetasymbol = String.fromCharCode(952);   //theta
                    var InputExpression22 = replaceAll(InputExpression, thetasymbol, "theta");
                    var AutomaticTracingPolar = setInterval(function () {
                        var temp1 = replaceAll(InputExpression22, 'theta', "(" + th + ")");
                        //alert('888888ccccccccccccccccccccccccc temp1 = ' + temp1);

                        try {
                            r1 = FindValue(temp1);
                            x1 = r1 * Math.cos(th);
                            y1 = r1 * Math.sin(th);
                        }
                        catch (err) {
                            x1 = NaN; //Handle errors here
                            y1 = NaN;
                        }

                        if (IsNumericc(x1) == false || x1 == null) {
                            x1 = NaN;
                            y1 = NaN;
                        }

                        th = Math.round(th * 10000000000000) / 10000000000000;
                        x1 = Math.round(x1 * 10000000000) / 10000000000;
                        y1 = Math.round(y1 * 10000000000) / 10000000000;
                        r1 = Math.round(r1 * 10000000000) / 10000000000;
                        var th22 = th;
                        var th44 = th * 180 / Math.PI;
                        th44 = Math.round(th44 * 10000000000) / 10000000000;
                        if (document.getElementById('taspipolar').checked) {
                            th22 = expressaspi(th);
                        }

                        document.getElementById('TracePointX').value = x1;
                        document.getElementById('TracePointY').value = y1;

                        document.getElementById('LocationOfMouseClickX2').value = thetasymbol + ' = ' + th22 + ' = ' + th44 + degreeSymbol + ' ; r = ' + r1;
                        document.getElementById('LocationOfMouseClickY2').value = 'x = ' + x1 + ' ; y = ' + y1;
                        //document.getElementById('TracePolarBox2').value = r1;

                        var stopmsg = document.getElementById('PolarStopTracingMsg').value;
                        draw();
                        th = th + parseFloat(Stepsize22);
                        //alert('77777777777777777LL = ' + th);
                        //GraphingCalculator();

                        if (stopmsg == 'stop') {
                            //alert('7777777777788888555555555stop = ' + th);
                            clearInterval(AutomaticTracingPolar);
                        }

                        if (parseFloat(th) > EndVal22) {
                            //alert('7777777777788881111111stop = ' + th);
                            th = StartVal22;
                            //clearInterval(AutomaticTracingPolar);
                        }

                    }, TracingSpeed);

                }


            }



////////////////////////

        }

        

        //imlicit function
        var InputExpression = document.getElementById("implicitfunction1").value; //'y^3 + y^2 -5y -x^2 + 4';
        if (document.getElementById("checkboximplicitfunction").checked && InputExpression != '') {
            document.getElementById('implicitdata').value = '';
            if (InputExpression.indexOf("{") > -1) {
                InputExpression = ProcessInequality(InputExpression);
            }

            if (InputExpression.indexOf("|") > -1) {
                InputExpression = ProcessAbsoluteValue(InputExpression);
            }

            while (InputExpression.indexOf('Root') > -1) {
                InputExpression = processroot(InputExpression);
                //alert('InputExpression Root:..' + InputExpression);
                if (InputExpression == NaN) {
                    return;
                }
            }

            //var yprime = '(-2x)/(3y^2)';
            var xdata = '';
            var ydata = '';
            var equation2 = InputExpression.split('=');
            var leftside = equation2[0];
            var rightside = equation2[1];

            //var xRminn = FindValue(document.getElementById('xMinParameter').value);
            //var xRmaxx = FindValue(document.getElementById('xMaxParameter').value);
            //var yRminn = FindValue(document.getElementById('yMinParameter').value);
            //var yRmaxx = FindValue(document.getElementById('yMaxParameter').value);
            var stepsizeX = (parseFloat(xRmax) - parseFloat(xRmin)) / 300;
            var stepsizeY = (parseFloat(yRmax) - parseFloat(yRmin)) / 300;

            //initial evaluation
            var ttleft = replaceAll(leftside, 'y', '(' + yRmin + ')');
            var ttleft = replaceAll(ttleft, 'x', '(' + xRmin + ')');
            var ttright = replaceAll(rightside, 'y', '(' + yRmin + ')');
            var ttright = replaceAll(ttright, 'y', '(' + xRmin + ')');
            var valueLeft = FindValue(ttleft);
            var valueRight = FindValue(ttright);


            if (parseFloat(valueLeft) > parseFloat(valueRight)) {
                var signPrevious = '1';
            }
            if (parseFloat(valueLeft) < parseFloat(valueRight)) {
                var signPrevious = '0';
            }
            //alert('InputExpression='+InputExpression);

            //alert('valueRight='+valueRight);
            //alert('valueLeft='+valueLeft);
            //alert('signPrevious='+signPrevious);
            //var y = '1';//fixing y=1
            var kk = 15;
            generatedataimplicitfunc(kk,xdata,ydata,leftside, rightside, valueLeft, valueRight, signPrevious, xRmin, xRmax, yRmin, yRmax, stepsizeX, stepsizeY);

            return;

            for (var y = yRmin; y <= yRmax; y += stepsizeY) {
                var yt = y;
                if (Math.abs(y) < 1e-12) { yt = 0 };
                for (var x = xRmin; x <= xRmax; x += stepsizeX) {
                    var xt = x;
                    if (Math.abs(x) < 1e-12) { xt = 0 };

                    var ttleft = replaceAll(leftside, 'y', '(' + yt + ')');
                    var ttleft = replaceAll(ttleft, 'x', '(' + xt + ')');
                    var ttright = replaceAll(rightside, 'y', '(' + yt + ')');
                    var ttright = replaceAll(ttright, 'x', '(' + xt + ')');
                    var valueLeft = FindValue(ttleft);
                    var valueRight = FindValue(ttright);

                    //alert('x = ' + x + '......valueRight='+valueRight);
                    //alert('valueLeft='+valueLeft);
                    //alert('signPrevious='+signPrevious);


                    if (parseFloat(valueLeft) > parseFloat(valueRight)) {
                        var signCurrent = '1';
                    }
                    else if (parseFloat(valueLeft) < parseFloat(valueRight)) {
                        var signCurrent = '0';
                    }

                    if (signPrevious != signCurrent) {
                        //xdata += 'y = ' + yt + '.......x = ' + xt + '<br>';
                        xdata += ',' + xt;
                        ydata += ',' + yt;
                        signPrevious = signCurrent;
                        //alert('x4444 = ' + x);
                    }
                }
            }

            xdata = xdata.substring(1);
            ydata = ydata.substring(1);
            document.getElementById('implicitdata').value = xdata + ';;;' + ydata;
        }


        draw();//draw graphs
    }


    function generatedataimplicitfunc(kk, xdata,ydata,leftside, rightside, valueLeft, valueRight, signPrevious, xRmin, xRmax, yRmin, yRmax, stepsizeX, stepsizeY){
           var count = 0;
           var y = yRmin;
           kk -= 1;
           var MyVar = setInterval(function () {
               /////////////////for (var y = yRmin; y <= yRmax; y += stepsizeY) {                   
               y += stepsizeY;
               var yt = y;
               if (Math.abs(y) < 1e-12) { yt = 0 };
               for (var x = xRmin; x <= xRmax; x += stepsizeX) {
                   var xt = x;
                   if (Math.abs(x) < 1e-12) { xt = 0 };
                   var ttleft = replaceAll(leftside, 'y', '(' + yt + ')');
                   var ttleft = replaceAll(ttleft, 'x', '(' + xt + ')');
                   var ttright = replaceAll(rightside, 'y', '(' + yt + ')');
                   var ttright = replaceAll(ttright, 'x', '(' + xt + ')');
                   var valueLeft = FindValue(ttleft);
                   var valueRight = FindValue(ttright);

                   //alert('x = ' + x + '......valueRight='+valueRight);
                   //alert('valueLeft='+valueLeft);
                   //alert('signPrevious='+signPrevious);


                   if (parseFloat(valueLeft) > parseFloat(valueRight)) {
                       var signCurrent = '1';
                   }
                   else if (parseFloat(valueLeft) < parseFloat(valueRight)) {
                       var signCurrent = '0';
                   }

                   if (signPrevious != signCurrent) {
                       //xdata += 'y = ' + yt + '.......x = ' + xt + '<br>';
                       xdata += ',' + xt;
                       ydata += ',' + yt;
                       signPrevious = signCurrent;
                       //alert('x4444 = ' + x);
                   }
               }

               if (y >= yRmax) {//end of generating data for implicit function
                   document.getElementById('implicitfuncmsg').innerHTML = 'Finished!';
                   clearInterval(MyVar);
                   xdata = xdata.substring(1);
                   ydata = ydata.substring(1);
                   document.getElementById('implicitdata').value = xdata + ';;;' + ydata;
                   
                   draw(); //draw graphs
               }

               count += 1; //alert('y = ' + y); //alert('count = ' + count);
               document.getElementById('implicitfuncmsg').innerHTML = 'program is running .....   .....  ..... ' + kk;
               //if (count < 10) {
               //     document.getElementById('implicitfuncmsg').innerHTML = 'program is running .....   .....  ..... ' + kk;
               //}
               //else {
               //    document.getElementById('implicitfuncmsg').innerHTML = '';
               //}

               if(kk<=0){
                   document.getElementById('implicitfuncmsg').innerHTML = 'Finished!';
               }

               if (count == 20) {
                   clearInterval(MyVar);
                   yRmin = y;
                   generatedataimplicitfunc(kk,xdata, ydata, leftside, rightside, valueLeft, valueRight, signPrevious, xRmin, xRmax, yRmin, yRmax, stepsizeX, stepsizeY);
               }

               ///////////}

           }, 100);


}



/*------------------------------------------------------------------------------
* NAME       : TableDataParametricEquation
* PURPOSE    : Generates table of data for parametric equations
* PARAMETERS : parametric equations
* RETURNS    : table data for parametric equations
*----------------------------------------------------------------------------*/
    function TableDataParametricEquation() {            
        if (document.getElementById("ParametricTableOnOffCheckbox").checked) {
            var Tmin = FindValue(document.getElementById("TminParametricEqu").value);
            var Tmax = FindValue(document.getElementById("TmaxParametricEqu").value);
            var Tstepsize = FindValue(document.getElementById("StepsizeParametricEqu").value);


            for (var i = 1; i <= 10; i++) {
                var tt1 = document.getElementById("ParametricX" + i).value;
                var tt2 = document.getElementById("ParametricY" + i).value
                var tt3 = document.getElementById('checkboxParametric' + i).checked;
                document.getElementById('TableParametricEquationsSet' + i).innerHTML = '';
                var textX = 'X(t) = ' + document.getElementById("ParametricX" + i).value;
                var textY = 'Y(t) = ' + document.getElementById("ParametricY" + i).value + '<br><br>';
                var colortext = graphcolor(i);

                document.getElementById('TableParametricEquationsSet' + i).innerHTML = '<span style="font-size:20px; color:'+ colortext + '">' + textX + '<br>' + textY + '</span>';

                if (tt1 != "" && tt2 != "") {
                    var InputExpression1 = document.getElementById("ParametricX" + i).value;
                    var InputExpression2 = document.getElementById("ParametricY" + i).value;
                    var x1 = 0.0;
                    var y1 = 0.0;
                    var xdata = "";
                    var ydata = "";
                    var temp1 = 0.0;
                    

                    var dataArray = '';
                    var tdata = '';
                    var xdata = '';
                    var ydata = '';
                    var loopstatus = true;
                    var k = 0;
                    while (loopstatus) {
                        var t1 = Tmin + k * Tstepsize;                     
                        var LL = t1.toString();
                        if (LL.indexOf("e")) {
                            LL = ToDecimal(LL);
                        }
 
                        temp1 = replaceAll(InputExpression1, "t", "(" + LL + ")");
                        temp2 = replaceAll(InputExpression2, "t", "(" + LL + ")");

                        try {
                            x1 = FindValue(temp1);
                            y1 = FindValue(temp2);

                        }
                        catch (err) {
                            x1 = NaN; //Handle errors here
                            y1 = NaN;
                        }


                        if (IsNumericc(x1) == false || x1 == null) {
                            x1 = NaN;
                            y1 = NaN;
                        }

                        t1 = Math.round(t1 * 10000000000) / 10000000000;
                         
                         var t122 = t1;
                         if (document.getElementById('taspiparametric2').checked) {
                             t122 = expressaspi(t122);
                         }

                        //dataArray = t1 + ' ; ' + x1 + ' ; ' + y1 + ' ;<br><br>';
                        tdata += ';' + t122;
                        xdata += ';' + x1;
                        ydata += ';' + y1;
                         
                        //xdata += x1 + ",";
                        //ydata += y1 + ",";
                        //document.getElementById('TableParametricEquationsSet' + i).innerHTML += dataArray;
                        k += 1;
                        var t1 = Tmin + k * Tstepsize;
                        //alert('t1...' + t1 + '.......Tmax.....' + Tmax);
                        if (t1 > Tmax) { loopstatus = false; }

                    }

                    tdata = tdata.substring(1);
                    xdata = xdata.substring(1);
                    ydata = ydata.substring(1);
                    TableName = 'TableParametricEquationsSet' + i;
                     
                    tableCreateParametricEquation(tdata, xdata, ydata,TableName, colortext,tt1,tt2)

               }
            }
        }
    }


/*------------------------------------------------------------------------------
* NAME       : tableCreateParametricEquation
* PURPOSE    : creates table for parametric equation data
* PARAMETERS : tdata, xdata, ydata, TableName, color, ParametricEquX, ParametricEquY
* RETURNS    : table with data from parametric equations
*----------------------------------------------------------------------------*/
    function tableCreateParametricEquation(tdata, xdata, ydata, TableName, color, ParametricEquX, ParametricEquY) {
        var body = document.body,
        tbl = document.createElement('table');
        tbl.style.width = '100%';
        tbl.style.border = "1px; solid; black;";
        //tbl.style.background = "cyan";
        tbl.style.color = "black";

        var tval = tdata.split(';');
        var xval = xdata.split(';');
        var yval = ydata.split(';');

        var tr = tbl.insertRow();
        tr.style.border = "solid";
        tr.style.color = "black";

        var td = tr.insertCell();
        td.style.border = "solid";
        td.style.color = color;
        td.style.borderColor = color;
        td.appendChild(document.createTextNode('t'));

        var td = tr.insertCell();
        td.style.border = "solid";
        td.style.color = color;
        td.style.borderColor = color;
        td.appendChild(document.createTextNode('X(t) = ' + ParametricEquX));

        var td = tr.insertCell();
        td.style.border = "solid";
        td.style.color = color;
        td.style.borderColor = color;
        td.appendChild(document.createTextNode('Y(t) = ' + ParametricEquY));


        for (var i = 0; i < xval.length; i++) {
            var tr = tbl.insertRow();

            var td = tr.insertCell();
            td.style.border = "solid";
            td.style.borderColor = "gray";
            td.style.borderWidth = '1px';
            td.style.color = "black";
            td.appendChild(document.createTextNode(tval[i]));

            var td = tr.insertCell();
            td.style.border = "solid";
            td.style.borderColor = "gray";
            td.style.borderWidth = '1px';
            td.style.color = "black";
            td.appendChild(document.createTextNode(xval[i]));

            var td = tr.insertCell();
            td.style.border = "solid";
            td.style.borderColor = "gray";
            td.style.color = "black";
            td.style.borderWidth = '1px';
            td.appendChild(document.createTextNode(yval[i]));

        }

        //document.getElementById(TableName).innerHTML = "";
        document.getElementById(TableName).appendChild(tbl);

    }


/*------------------------------------------------------------------------------
* NAME       : TableDataPolarEquation
* PURPOSE    : Generates table of data for polar equations
* PARAMETERS : polar equations
* RETURNS    : table data for polar equations
*----------------------------------------------------------------------------*/
    function TableDataPolarEquation() {
        var PIsymbol = String.fromCharCode(960);   //PI
        for (var i = 1; i <= 20; i++) {
            var Tmin = parseFloat(FindValue(document.getElementById("TableStartPolarEquationTableNew").value));
            var Tmax = parseFloat(FindValue(document.getElementById("TableEndPolarEquationTableNew").value));
            var Tstepsize = parseFloat(FindValue(document.getElementById("StepsizePolarEquationTableNew").value));

            var thetasymbol = String.fromCharCode(952);   //theta   
            var colortext = graphcolor(i);
            var pp = document.getElementById("PolarEquationTableCheckBoxNew").checked;
            if (document.getElementById("PolarEquation" + i).value != "" && pp) {
                var InputExpression = document.getElementById("PolarEquation" + i).value;
                if(InputExpression.indexOf('t') > -1){
                    thetasymbol = 't';
                }

                var NameOfEquation = 'r(' + thetasymbol + ') = ' + InputExpression;
 
                var x1 = 0.0;
                var y1 = 0.0;
                var r1 = 0.0;

                var thetadata = "";
                var rdata = "";
                var xdata = "";
                var ydata = "";
                var temp1 = 0.0;

                //var stepsize = (Tmax - Tmin) / npoints1;
                var k = 0;
                var loopstatus = true;
                while (loopstatus) {
                    var t1 = Tmin + k * Tstepsize;
                    var LL = t1.toString();
                    if (LL.indexOf("e")) {
                        LL = ToDecimal(LL);
                    }

                    temp1 = replaceAll(InputExpression, thetasymbol, "(" + t1 + ")");

                    try {
                        r1 = FindValue(temp1);
                        x1 = r1 * Math.cos(t1);
                        y1 = r1 * Math.sin(t1);

                    }
                    catch (err) {
                        x1 = NaN; //Handle errors here
                        y1 = NaN;
                    }


                    if (IsNumericc(x1) == false || x1 == null) {
                        x1 = NaN;
                        y1 = NaN;
                    }

                    t1 = Math.round(t1 * 10000000000) / 10000000000;
                    //alert('t1 = ' + t1);
                    var t122 = t1;
                    if (document.getElementById('taspipolar2').checked) {
                         t122 = expressaspi(t122);
                    }

                    xdata += ';'+ x1;
                    ydata += ';'+y1 ;
                    rdata += ';' + r1;
                    thetadata += ';' + t122;
                    
                    k += 1;
                    var t1 = Tmin + k * Tstepsize;
                    if (t1 > Tmax) { loopstatus = false; }

                }
                    
                var TableName = "PolarEquationSet" + i;
                var PolarEquation = document.getElementById("PolarEquation" + i).value;
                thetadata = thetadata.substring(1);
                rdata = rdata.substring(1);
                xdata = xdata.substring(1);
                ydata = ydata.substring(1);
    
                               
                tableCreatePolarEquation(thetadata, rdata, xdata, ydata, TableName, colortext, PolarEquation);
            }

        }

    }

/*------------------------------------------------------------------------------
* NAME       : tableCreatePolarEquation
* PURPOSE    : creates table for poalr equation data
* PARAMETERS : thetadata, rdata, xdata, ydata, TableName, color, PolarEquation
* RETURNS    : table with data from polar equations
*----------------------------------------------------------------------------*/
    function tableCreatePolarEquation(thetadata, rdata, xdata, ydata, TableName, color, PolarEquation) {
        var PIsymbol = String.fromCharCode(960);   //PI
        var thetasymbol = String.fromCharCode(952);   //theta  
        var body = document.body,
        tbl = document.createElement('table');
        tbl.style.width = '100%';
        tbl.style.border = "1px; solid; black;";
        //tbl.style.background = "cyan";
        tbl.style.color = "black";

        var thetaval = thetadata.split(';');
        var rval = rdata.split(';');
        var xval = xdata.split(';');
        var yval = ydata.split(';');

        var tr = tbl.insertRow();
        tr.style.border = "solid";
        tr.style.color = "black";
 
        var td = tr.insertCell();
        td.style.border = "solid";
        td.style.color = color;
        td.style.borderColor = color;
        td.appendChild(document.createTextNode(thetasymbol));

        var td = tr.insertCell();
        td.style.border = "solid";
        td.style.color = color;
        td.style.borderColor = color;
        td.appendChild(document.createTextNode('r('+thetasymbol+') = '+PolarEquation));

        var td = tr.insertCell();
        td.style.border = "solid";
        td.style.color = color;
        td.style.borderColor = color;
        td.appendChild(document.createTextNode('x = rcos('+thetasymbol+')'));

        var td = tr.insertCell();
        td.style.border = "solid";
        td.style.color = color;
        td.style.borderColor = color;
        td.appendChild(document.createTextNode('y = rsin('+thetasymbol+')'));

        for (var i = 0; i < xval.length; i++) {
            var tr = tbl.insertRow();

            var td = tr.insertCell();
            td.style.border = "solid";
            td.style.borderColor = "gray";
            td.style.borderWidth = '1px';
            td.style.color = "black";
            td.appendChild(document.createTextNode(thetaval[i]));

            var td = tr.insertCell();
            td.style.border = "solid";
            td.style.borderColor = "gray";
            td.style.borderWidth = '1px';
            td.style.color = "black";
            td.appendChild(document.createTextNode(rval[i]));

            var td = tr.insertCell();
            td.style.border = "solid";
            td.style.borderColor = "gray";
            td.style.borderWidth = '1px';
            td.style.color = "black";
            td.appendChild(document.createTextNode(xval[i]));

            var td = tr.insertCell();
            td.style.border = "solid";
            td.style.borderColor = "gray";
            td.style.color = "black";
            td.style.borderWidth = '1px';
            td.appendChild(document.createTextNode(yval[i]));

        }

        document.getElementById(TableName).innerHTML = "";
        document.getElementById(TableName).appendChild(tbl);

    }


/*------------------------------------------------------------------------------
* NAME       : currentID
* PURPOSE    : stores id of element with cursor or focus
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function currentID() {
        var selected = document.activeElement;
        //alert(selected.id);
        document.getElementById('CurrentFocusID').value = selected.id;
    }



/*------------------------------------------------------------------------------
* NAME       : Trace1
* PURPOSE    : Sets number of decimal places for input variable for manual tracing of Cartesian graph 
* PARAMETERS : Numm 
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function Trace1(Numm) {
        if (Numm == 1) {
            var val789 = FindValue(document.getElementById("TraceTextbox").value);
            var val744 = val789 + 1;
            if (val744 < 0) { val744 = 0; }
            if (val744 > 16) { val744 = 16; }
            document.getElementById("TraceTextbox").value = val744;
        }
        else if (Numm == 2) {
            var val789 = FindValue(document.getElementById("TraceTextbox").value);
            var val744 = val789 - 1;
            if (val744 < 0) { val744 = 0; }
            if (val744 > 16) { val744 = 16; }
            document.getElementById("TraceTextbox").value = val744;
        }
        else if (Numm == 3) {
            var val = parseFloat(document.getElementById("Speedtracingmethod").value);
            var val744 = val + 1;
            if (val744 < 1) { val744 = 1; }
            if (val744 > 10) { val744 = 10; }
            document.getElementById("Speedtracingmethod").value = val744;
        }
        else if (Numm == 4) {
            var val = parseFloat(document.getElementById("Speedtracingmethod").value);
            var val744 = val - 1;
            if (val744 < 1) { val744 = 1 }
            if (val744 > 10) { val744 = 10; }
            document.getElementById("Speedtracingmethod").value = val744;
        }

    }



/*------------------------------------------------------------------------------
* NAME       : Parametrictracingmethodbb
* PURPOSE    : Sets message to stop or continue automatic tracing of parametric equations
* PARAMETERS : casenum 
* RETURNS    : 'continue' or  'stop
*----------------------------------------------------------------------------*/
    function Parametrictracingmethodbb(casenum){
        if(casenum == 2){
            document.getElementById("ParametricStopTracingMsg").value = 'continue';
            GraphingCalculator();
        }
        if(casenum == 3){
            document.getElementById("ParametricStopTracingMsg").value = 'stop';
        }

    }


/*------------------------------------------------------------------------------
* NAME       : Polartracingmethodbb
* PURPOSE    : Sets message to stop or continue automatic tracing of polar equations
* PARAMETERS : casenum 
* RETURNS    : 'continue' or  'stop
*----------------------------------------------------------------------------*/
    function Polartracingmethodbb(casenum){
        if(casenum == 2){
            document.getElementById("PolarStopTracingMsg").value = 'continue';
            GraphingCalculator();
        }
        if(casenum == 3){
            document.getElementById("PolarStopTracingMsg").value = 'stop';
        }

    }


/*------------------------------------------------------------------------------
* NAME       : TraceParametric1
* PURPOSE    : Traces and displays values of t, x, and y for parametric equations
* PARAMETERS : Numm 
* RETURNS    : values of t, x, and y
*----------------------------------------------------------------------------*/
    function TraceParametric1(Numm) {
        if(document.getElementById('TraceParametricCheckbox').checked == false){
            var msg = 'In order to use the tracing feature for parametric equations,\n\n "on/off" checkbox must be checked.';
            alert(msg);
            return;
        }


        if(document.getElementById('ParametricTmin').value == ''){
            var msg = "There is no graph for parametric equations.";
            alert(msg);
            return;
        }
        

        if(document.getElementById('TraceParametricBox').value == ''){
            document.getElementById('TraceParametricBox').value = document.getElementById('ParametricTmin').value;  
            var val = document.getElementById('TraceParametricBox').value;                  
        }
        else{
            var val = FindValue(document.getElementById('TraceParametricBox').value);   
        }
        
        if (isNaN(val)) { val = 0; }

        var stepsize = FindValue(document.getElementById('ParametricTstepsize').value);
        var num1 = FindValue(document.getElementById('ParametricTmin').value);
        var num2 = FindValue(document.getElementById('ParametricTmax').value);

        if (Numm == 1) {
            val += stepsize;
        }
        else if (Numm == 2) {
            val -= stepsize;
        }

        if (val < num1) { val = num1; }
        if (val > num2) { val = num2; }
        val = Math.round(val * 10000000000) / 10000000000;
        document.getElementById("TraceParametricBox").value = val;
        //ParametricEquationTracing();

        GraphingCalculator();
    }



/*------------------------------------------------------------------------------
* NAME       : TracePolar1
* PURPOSE    : Traces and displays values of t, x, and y for polar equations
* PARAMETERS : Numm 
* RETURNS    : values of t, x, and y
*----------------------------------------------------------------------------*/
    function TracePolar1(Numm) {
        if(document.getElementById('TracePolarCheckbox').checked == false){
            var msg = 'In order to use tracing feature for polar equations, \n\n "on/off" checkbox must be checked to activate this feature.';
            alert(msg);
            return;
        }
        
        var val = FindValue(document.getElementById('TracePolarBox').value);
        if (isNaN(val)) { val = 0; }
        var stepsize = FindValue(document.getElementById('PolarTstepsize').value);
        var num1 = FindValue(document.getElementById('PolarTmin').value);
        var num2 = FindValue(document.getElementById('PolarTmax').value);

        if (Numm == 1) {
            val += stepsize;
        }
        else if (Numm == 2) {
            val -= stepsize;
        }

        if (val < num1) { val = num1; }
        if (val >= num2) { val = num2; }
        val = Math.round(val * 10000000000) / 10000000000;
        document.getElementById("TracePolarBox").value = val;

        GraphingCalculator();
    }



/*------------------------------------------------------------------------------
* NAME       : ClearShading
* PURPOSE    : Clears shading canvas
* PARAMETERS :   
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function ClearShading() {
        var canvas = document.getElementById("canvas2");
        var context = canvas.getContext("2d");
        context.clearRect(0, 0, canvas.width, canvas.height);
        return;
    }


/*------------------------------------------------------------------------------
* NAME       : TraceOff2
* PURPOSE    : Turns off tracing of Cartesian Equations
* PARAMETERS :   
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function TraceOff2() {
        document.getElementById('TracePointX').value = '';
        document.getElementById('TracePointY').value = '';
    }

/*------------------------------------------------------------------------------
* NAME       : GraphFDistpdf
* PURPOSE    : Graphs pdf of F-distribution
* PARAMETERS :   
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function GraphFDistpdf() {
        document.getElementById('TextBoxForCartesianGraph1').value = "FDistpdf(1;1)";
        document.getElementById('TextBoxForCartesianGraph2').value = "FDistpdf(2;1)";
        document.getElementById('TextBoxForCartesianGraph3').value = "FDistpdf(5;2)";
        document.getElementById('TextBoxForCartesianGraph4').value = "FDistpdf(100;100)";

        document.getElementById('xMinParameter').value = 0;
        document.getElementById('xMaxParameter').value = 10;
        document.getElementById('yMinParameter').value = 0;
        document.getElementById('yMaxParameter').value = 5;

        GraphingCalculator();
    }


/*------------------------------------------------------------------------------
* NAME       : GraphNormalpdf
* PURPOSE    : Graphs pdf of normal distribution
* PARAMETERS :   
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function GraphNormalpdf() {
        document.getElementById('TextBoxForCartesianGraph1').value = "normalpdf(0; 5)";
        document.getElementById('TextBoxForCartesianGraph2').value = "normalpdf(2; 5)";

        document.getElementById('xMinParameter').value = -20;
        document.getElementById('xMaxParameter').value = 25;
        document.getElementById('yMinParameter').value = -0.04;
        document.getElementById('yMaxParameter').value = 0.15;

        GraphingCalculator();
    }



/*------------------------------------------------------------------------------
* NAME       : GraphNormalcdf
* PURPOSE    : Graphs cdf of normal distribution
* PARAMETERS :   
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function GraphNormalcdf() {
        document.getElementById('TextBoxForCartesianGraph1').value = "normalcdf(0; 5)";
        document.getElementById('TextBoxForCartesianGraph2').value = "normalcdf(2; 5)";

        document.getElementById('xMinParameter').value = -30;
        document.getElementById('xMaxParameter').value = 30;
        document.getElementById('yMinParameter').value = -0.1;
        document.getElementById('yMaxParameter').value = 1.5;

        GraphingCalculator();
    }



/*------------------------------------------------------------------------------
* NAME       : Graphtdistpdf
* PURPOSE    : Graphs pdf of t-distribution
* PARAMETERS :   
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function Graphtdistpdf() {
        document.getElementById('TextBoxForCartesianGraph1').value = "tdistpdf(7)";
        document.getElementById('TextBoxForCartesianGraph2').value = "tdistpdf(25)";

        document.getElementById('xMinParameter').value = -3.75;
        document.getElementById('xMaxParameter').value = 3.75;
        document.getElementById('yMinParameter').value = -0.04;
        document.getElementById('yMaxParameter').value = 0.5;

        GraphingCalculator();
    }



/*------------------------------------------------------------------------------
* NAME       : Graphtdistcdf
* PURPOSE    : Graphs cdf of t-distribution
* PARAMETERS :   
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function Graphtdistcdf() {
        document.getElementById('TextBoxForCartesianGraph1').value = "tdistcdf(14)";
        document.getElementById('TextBoxForCartesianGraph2').value = "tdistcdf(22)";

        document.getElementById('xMinParameter').value = -30;
        document.getElementById('xMaxParameter').value = 30;
        document.getElementById('yMinParameter').value = -0.1;
        document.getElementById('yMaxParameter').value = 1.5;

        GraphingCalculator();
    }




/*------------------------------------------------------------------------------
* NAME       : GraphCircle
* PURPOSE    : Graphs circle graph
* PARAMETERS :   
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function GraphCircle() {
        document.getElementById('TextBoxForCartesianGraph1').value = "circle(3/4; 7/8; 6.5)";
        document.getElementById('TextBoxForCartesianGraph2').value = "circle(3/4; 7/8; 9.5)";
        GraphingCalculator();
    }




/*------------------------------------------------------------------------------
* NAME       : GraphEllipse
* PURPOSE    : Graphs ellipse graph
* PARAMETERS :   
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function GraphEllipse() {
        document.getElementById('TextBoxForCartesianGraph1').value = "ellipse(2; 3; 16; 9)";
        document.getElementById('TextBoxForCartesianGraph2').value = "ellipse(-5; -7; 12; 25)";

        GraphingCalculator();
    }




/*------------------------------------------------------------------------------
* NAME       : Graphhyperbolaxy
* PURPOSE    : Graphs hyperbola graph
* PARAMETERS :   
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function GraphhyperbolaXY() {
        document.getElementById('TextBoxForCartesianGraph1').value = "hyperbolaxy(2; 3; 16; 9)";
        GraphingCalculator();
    }



/*------------------------------------------------------------------------------
* NAME       : Graphhyperbolaxy
* PURPOSE    : Graphs hyperbola graph
* PARAMETERS :   
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function GraphhyperbolaYX() {
        document.getElementById('TextBoxForCartesianGraph1').value = "hyperbolayx(2; 3; 25; 36)";
        GraphingCalculator();
    }






/*------------------------------------------------------------------------------
* NAME       : DrawCircle
* PURPOSE    : Draws circle graph
* PARAMETERS :   
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function DrawCircle() {
        clearcartesianpoint();
        var hhht = document.getElementById('DrawCircleCenterX').value;
        var kkkt = document.getElementById('DrawCircleCenterY').value;
        var radiust = document.getElementById('DrawCircleRadius').value;

        var hhh = FindValue(hhht);
        var kkk = FindValue(kkkt);
        var radius = FindValue(radiust);

        var rrr = radius;

        var sup2 = String.fromCharCode(178);     //sup 2

        var Equation = "circle(" + hhh + ";" + kkk + ";" + rrr + ")";

        document.getElementById('TextBoxForCartesianGraph20').value = Equation;
        document.getElementById('checkboxCartesianPoints').checked=true;
        document.getElementById('Point20X').value = hhh;
        document.getElementById('Point20Y').value = kkk;
        GraphingCalculator();

    }




/*------------------------------------------------------------------------------
* NAME       : DrawEllipse
* PURPOSE    : Draws ellipse graph
* PARAMETERS :   
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function DrawEllipse() {
        clearcartesianpoint();
        var hhht = document.getElementById('DrawEllipseVal1').value;
        var kkkt = document.getElementById('DrawEllipseVal2').value;
        var ValueXt = document.getElementById('DrawEllipseVal3').value;
        var ValueYt = document.getElementById('DrawEllipseVal4').value;

        var hhh = FindValue(hhht);
        var kkk = FindValue(kkkt);
        var ValueX = FindValue(ValueXt);
        var ValueY = FindValue(ValueYt);

        var sup2 = String.fromCharCode(178);     //sup 2

        if (ValueX >= ValueY) {
            var Equation = "ellipse(" + hhh + ";" + kkk + ";" + ValueX + ";" + ValueY + ")";
            var cc = Math.sqrt(ValueX - ValueY);
            var Vertex1X = hhh + Math.sqrt(ValueX);
            var Vertex1Y = kkk;
            var Vertex2X = hhh - Math.sqrt(ValueX);
            var Vertex2Y = kkk;
            var Focus1X = hhh + cc;
            var Focus1Y = kkk;
            var Focus2X = hhh - cc;
            var Focus2Y = kkk;


        }
        else {
            var Equation = "ellipse(" + hhh + ";" + kkk + ";" + ValueX + ";" + ValueY + ")";
            var cc = Math.sqrt(ValueY - ValueX);
            var Vertex1X = hhh;
            var Vertex1Y = kkk + Math.sqrt(ValueY);
            var Vertex2X = hhh;
            var Vertex2Y = kkk - Math.sqrt(ValueY);
            var Focus1X = hhh;
            var Focus1Y = kkk + cc;
            var Focus2X = hhh;
            var Focus2Y = kkk - cc;
        }


        document.getElementById('TextBoxForCartesianGraph20').value = Equation;
        document.getElementById('checkboxCartesianPoints').checked=true;
        document.getElementById('Point16X').value = hhh;
        document.getElementById('Point16Y').value = kkk;
        document.getElementById('Point17X').value = Vertex1X;
        document.getElementById('Point17Y').value = Vertex1Y;
        document.getElementById('Point18X').value = Vertex2X;
        document.getElementById('Point18Y').value = Vertex2Y;
        document.getElementById('Point19X').value = Focus1X;
        document.getElementById('Point19Y').value = Focus1Y;
        document.getElementById('Point20X').value = Focus2X;
        document.getElementById('Point20Y').value = Focus2Y;
   

        GraphingCalculator();

    }



/*------------------------------------------------------------------------------
* NAME       : DrawHyperbola
* PURPOSE    : Draws hyperbola graph
* PARAMETERS :   
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function DrawHyperbola(type) {
        clearcartesianpoint();
        var hhht = document.getElementById('DrawHyperbolaVal1').value;
        var kkkt = document.getElementById('DrawHyperbolaVal2').value;
        var ValueXt = document.getElementById('DrawHyperbolaVal3').value;
        var ValueYt = document.getElementById('DrawHyperbolaVal4').value;

        var hhh = FindValue(hhht);
        var kkk = FindValue(kkkt);
        var ValueX = FindValue(ValueXt);
        var ValueY = FindValue(ValueYt);

        var sup2 = String.fromCharCode(178);     //sup 2

        if (type == 1) {
            var Equation = "hyperbolaxy(" + hhh + ";" + kkk + ";" + ValueX + ";" + ValueY + ")";
            var cc = Math.sqrt(ValueX + ValueY);
            var Vertex1X = hhh + Math.sqrt(ValueX);
            var Vertex1Y = kkk;
            var Vertex2X = hhh - Math.sqrt(ValueX);
            var Vertex2Y = kkk;
            var Focus1X = hhh + cc;
            var Focus1Y = kkk;
            var Focus2X = hhh - cc;
            var Focus2Y = kkk;
        }
        else if (type == 2) {
            var Equation = "hyperbolayx(" + hhh + ";" + kkk + ";" + ValueX + ";" + ValueY + ")";
            var cc = Math.sqrt(ValueY + ValueX);
            var Vertex1X = hhh;
            var Vertex1Y = kkk + Math.sqrt(ValueY);
            var Vertex2X = hhh;
            var Vertex2Y = kkk - Math.sqrt(ValueY);
            var Focus1X = hhh;
            var Focus1Y = kkk + cc;
            var Focus2X = hhh;
            var Focus2Y = kkk - cc;
        }


        document.getElementById('TextBoxForCartesianGraph20').value = Equation;
        document.getElementById('checkboxCartesianPoints').checked=true;
        document.getElementById('Point16X').value = hhh;
        document.getElementById('Point16Y').value = kkk;
        document.getElementById('Point17X').value = Vertex1X;
        document.getElementById('Point17Y').value = Vertex1Y;
        document.getElementById('Point18X').value = Vertex2X;
        document.getElementById('Point18Y').value = Vertex2Y;
        document.getElementById('Point19X').value = Focus1X;
        document.getElementById('Point19Y').value = Focus1Y;
        document.getElementById('Point20X').value = Focus2X;
        document.getElementById('Point20Y').value = Focus2Y;
        GraphingCalculator();

    }


    
/*------------------------------------------------------------------------------
* NAME       : DrawCircleExample
* PURPOSE    : Draws circle graph
* PARAMETERS :   
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function DrawCircleExample() {
        document.getElementById('DrawCircleCenterX').value = "2/5";
        document.getElementById('DrawCircleCenterY').value = "-3/8";
        document.getElementById('DrawCircleRadius').value = 5.2;

        DrawCircle();

    }

/*------------------------------------------------------------------------------
* NAME       : DrawEllipseExample
* PURPOSE    : Draws ellipse graph
* PARAMETERS :   
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function DrawEllipseExample() {
        document.getElementById('DrawEllipseVal1').value = "5";
        document.getElementById('DrawEllipseVal2').value = "-3";
        document.getElementById('DrawEllipseVal3').value = 25;
        document.getElementById('DrawEllipseVal4').value = 9;
         DrawEllipse();

    }

/*------------------------------------------------------------------------------
* NAME       : DrawHyperbola
* PURPOSE    : Draws hyperbola graph
* PARAMETERS :   
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function DrawHyperbolaExample() {

        document.getElementById('DrawHyperbolaVal1').value = "5";
        document.getElementById('DrawHyperbolaVal2').value = "-3";
        document.getElementById('DrawHyperbolaVal3').value = 25;
        document.getElementById('DrawHyperbolaVal4').value = 9;
        DrawHyperbola(1);

    }



/*------------------------------------------------------------------------------
* NAME       : DrawParabola2
* PURPOSE    : Draws parabola graph
* PARAMETERS :   
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function DrawParabola2() {
        clearcartesianpoint();
        var sup2 = String.fromCharCode(178);     //sup 2
        var x1t = document.getElementById('DrawParabolaBBPoint1X').value;
        var y1t = document.getElementById('DrawParabolaBBPoint1Y').value;
        var x2t = document.getElementById('DrawParabolaBBPoint2X').value;
        var y2t = document.getElementById('DrawParabolaBBPoint2Y').value;
        var x3t = document.getElementById('DrawParabolaBBPoint3X').value;
        var y3t = document.getElementById('DrawParabolaBBPoint3Y').value;

        var x1 = FindValue(x1t);
        var y1 = FindValue(y1t);
        var x2 = FindValue(x2t);
        var y2 = FindValue(y2t);
        var x3 = FindValue(x3t);
        var y3 = FindValue(y3t);

        if (x1 == x2 || x2 == x3 || x1 == x3) {
            alert("All three x-coordinates must be different.");
            return;
        }


        //Draw Parabola through three points:
        var denom = (x1 - x2) * (x1 - x3) * (x2 - x3);
        var A = (x3 * (y2 - y1) + x2 * (y1 - y3) + x1 * (y3 - y2)) / denom;
        var B = (x3 * x3 * (y1 - y2) + x2 * x2 * (y3 - y1) + x1 * x1 * (y2 - y3)) / denom;
        var C = (x2 * x3 * (x2 - x3) * y1 + x3 * x1 * (x3 - x1) * y2 + x1 * x2 * (x1 - x2) * y3) / denom;


        //alert("A = " + A);
        //alert("B = " + B);

        if (A == 0) {
            alert("It is not possible to draw a parabola passing through the three given points.");
            //return;
        }

        var xv = -B / (2 * A);
        var yv = C - B * B / (4 * A);

        var aa = ToFraction(A.toString());
        var bb = ToFraction(B.toString());
        var cc = ToFraction(C.toString());
        if(aa.indexOf('/')>-1){
            aa = '(' + aa + ')';
        }
        if(bb.indexOf('/')>-1){
            bb = '(' + bb + ')';
        }

        var Equation = aa + "x" + sup2 + "+" + bb + "x+" + cc;
        Equation = Equation.replace("+-", "-");
        Equation = Equation.replace("+-", "-");
        Equation = Equation.replace("+(-", "-(");
        Equation = Equation.replace("+(-", "-(");

        document.getElementById('TextBoxForCartesianGraph1').value = Equation;
        document.getElementById('checkboxCartesianPoints').checked=true;
        document.getElementById('Point18X').value = x1;
        document.getElementById('Point18Y').value = y1;
        document.getElementById('Point19X').value = x2;
        document.getElementById('Point19Y').value = y2;
        document.getElementById('Point20X').value = x3;
        document.getElementById('Point20Y').value = y3;
       
        GraphingCalculator();
        
    }





/*------------------------------------------------------------------------------
* NAME       : DrawParabola1
* PURPOSE    : Draws parabola graph
* PARAMETERS :   
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function DrawParabola1() {
        clearcartesianpoint();
        var hhhT = document.getElementById('DrawParabolaPoint1X').value;
        var kkkT = document.getElementById('DrawParabolaPoint1Y').value;
        var Point1XT = document.getElementById('DrawParabolaPoint2X').value;
        var Point1YT = document.getElementById('DrawParabolaPoint2Y').value;
        var sup2 = String.fromCharCode(178);     //sup 2
        
        
        var hhh = FindValue(hhhT);
        var kkk = FindValue(kkkT);
        var Point1X = FindValue(Point1XT);
        var Point1Y = FindValue(Point1YT);
        
        if (Point1X == hhh) {
            Alert("Vertex and point must not be the same.");
            return;
        }

        aaa = (Point1Y - kkk) / ((Point1X - hhh) * (Point1X - hhh))
        
        var Equation = aaa + "(x-" +hhh+ ")" + sup2 + "+"+kkk;
        Equation = Equation.replace("+-", "-");
        Equation = Equation.replace("--", "+");

        document.getElementById('TextBoxForCartesianGraph20').value = Equation;
        document.getElementById('checkboxCartesianPoints').checked=true;
        document.getElementById('Point19X').value = Point1X;
        document.getElementById('Point19Y').value = Point1Y;
        document.getElementById('Point20X').value = hhh;
        document.getElementById('Point20Y').value = kkk;
        GraphingCalculator();


    }




/*------------------------------------------------------------------------------
* NAME       : DrawParabola1Example
* PURPOSE    : Draws parabola graph
* PARAMETERS :   
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function DrawParabola1Example() {
        document.getElementById('DrawParabolaPoint1X').value = "1/2";
        document.getElementById('DrawParabolaPoint1Y').value = "3/4";
        document.getElementById('DrawParabolaPoint2X').value = 6.9;
        document.getElementById('DrawParabolaPoint2Y').value = 12.5;

        DrawParabola1();

    }



/*------------------------------------------------------------------------------
* NAME       : DrawParabola2Example
* PURPOSE    : Draws parabola graph
* PARAMETERS :   
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function DrawParabola2Example(val) {
        if (val == 1) {
            document.getElementById('DrawParabolaBBPoint1X').value = '-5';
            document.getElementById('DrawParabolaBBPoint1Y').value = 1;
            document.getElementById('DrawParabolaBBPoint2X').value = 1;
            document.getElementById('DrawParabolaBBPoint2Y').value = 5;
            document.getElementById('DrawParabolaBBPoint3X').value = 4;
            document.getElementById('DrawParabolaBBPoint3Y').value = 3;
        }
        else if (val == 2) {
            document.getElementById('DrawParabolaBBPoint1X').value = '-3';
            document.getElementById('DrawParabolaBBPoint1Y').value = 3;
            document.getElementById('DrawParabolaBBPoint2X').value = 0;
            document.getElementById('DrawParabolaBBPoint2Y').value = '-2';
            document.getElementById('DrawParabolaBBPoint3X').value = 4;
            document.getElementById('DrawParabolaBBPoint3Y').value = 3;
        }
        else if (val == 3) {
            document.getElementById('DrawParabolaBBPoint1X').value = '-3';
            document.getElementById('DrawParabolaBBPoint1Y').value = '3';
            document.getElementById('DrawParabolaBBPoint2X').value = '-1';
            document.getElementById('DrawParabolaBBPoint2Y').value = '-2';
            document.getElementById('DrawParabolaBBPoint3X').value = '2';
            document.getElementById('DrawParabolaBBPoint3Y').value = '3';
        }
        else if (val == 4) {
            document.getElementById('DrawParabolaBBPoint1X').value = '-3';
            document.getElementById('DrawParabolaBBPoint1Y').value = '3';
            document.getElementById('DrawParabolaBBPoint2X').value = '-6';
            document.getElementById('DrawParabolaBBPoint2Y').value = '-2';
            document.getElementById('DrawParabolaBBPoint3X').value = '2';
            document.getElementById('DrawParabolaBBPoint3Y').value = '-3';
        }
         DrawParabola2();
    }



/*------------------------------------------------------------------------------
* NAME       : DrawLineTwoPoints2
* PURPOSE    : Draws line graph
* PARAMETERS :   
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function DrawLineTwoPoints2() {
        clearcartesianpoint();
        var slopeT = document.getElementById('DrawLineSlope').value;
        var Point1XT = document.getElementById('DrawLinePointPoint2X').value;
        var Point1YT = document.getElementById('DrawLinePointPoint2Y').value;
         
        var Point1X = FindValue(Point1XT);
        var Point1Y = FindValue(Point1YT);
        var slope = FindValue(slopeT);
        

        var Equation = "("+slope+")" + "(x-"+Point1X+")+"+Point1Y;
        Equation = Equation.replace("+-", "-");
        Equation = Equation.replace("--", "+");

        document.getElementById('TextBoxForCartesianGraph19').value = Equation;
        document.getElementById('checkboxCartesianPoints').checked=true;
        document.getElementById('Point18X').value = Point1X;
        document.getElementById('Point18Y').value = Point1Y;
        GraphingCalculator();
        //document.getElementById('checkboxCartesianPoints').checked=false;

    }





/*------------------------------------------------------------------------------
* NAME       : DrawLineTwoPoints2Example
* PURPOSE    : Draws line graph
* PARAMETERS :   
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function DrawLineTwoPoints2Example() {
        
        document.getElementById('DrawLineSlope').value = "3/4";
        document.getElementById('DrawLinePointPoint2X').value = 9.2;
        document.getElementById('DrawLinePointPoint2Y').value = -1.5;
         
        DrawLineTwoPoints2();


    }




/*------------------------------------------------------------------------------
* NAME       : DrawLineTwoPoints1
* PURPOSE    : Draws line graph
* PARAMETERS :   
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function DrawLineTwoPoints1() {
        clearcartesianpoint();
        var Point1XT = document.getElementById('DrawLinePoint1X').value;
        var Point1YT = document.getElementById('DrawLinePoint1Y').value;
        var Point2XT = document.getElementById('DrawLinePoint2X').value;
        var Point2YT = document.getElementById('DrawLinePoint2Y').value;

        var Point1X = FindValue(Point1XT);
        var Point1Y = FindValue(Point1YT);
        var Point2X = FindValue(Point2XT);
        var Point2Y = FindValue(Point2YT);



        if (Point1X == Point2X) {
            document.getElementById('TextBoxForCartesianGraph20').value = Point1X;
            return;
        }


        var slope = (Point2Y - Point1Y) / (Point2X - Point1X);
        var Equation = slope + "(x-" + Point1X + ")+" + Point1Y;
        Equation = Equation.replace("+-", "-");
        Equation = Equation.replace("--", "+");

        document.getElementById('TextBoxForCartesianGraph20').value = Equation;
        document.getElementById('checkboxCartesianPoints').checked=true;
        document.getElementById('Point19X').value = Point1X;
        document.getElementById('Point19Y').value = Point1Y;
        document.getElementById('Point20X').value = Point2X;
        document.getElementById('Point20Y').value = Point2Y;
        GraphingCalculator();
        //document.getElementById('checkboxCartesianPoints').checked = false;

    }


 
/*------------------------------------------------------------------------------
* NAME       : DrawLineTwoPoints1Example
* PURPOSE    : Draws line graph
* PARAMETERS :   
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function DrawLineTwoPoints1Example() {

        document.getElementById('DrawLinePoint1X').value = "-1/2";
        document.getElementById('DrawLinePoint1Y').value = "8/7";
        document.getElementById('DrawLinePoint2X').value = 9.6;
        document.getElementById('DrawLinePoint2Y').value = -12.7;

        DrawLineTwoPoints1();
         
    }




/*------------------------------------------------------------------------------
* NAME       : DrawTwoParralelLines
* PURPOSE    : Draws parallel lines
* PARAMETERS :   
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function DrawTwoParralelLines() {
        clearcartesianpoint();
        var SlopeLine1T  = document.getElementById('DrawTwoParralelLines1').value;
        var Line1PointXT = document.getElementById('DrawTwoParralelLines2').value;
        var Line1PointYT = document.getElementById('DrawTwoParralelLines3').value;
        var Line2PointXT = document.getElementById('DrawTwoParralelLines4').value;
        var Line2PointYT = document.getElementById('DrawTwoParralelLines5').value;


        var SlopeLine1 = FindValue(SlopeLine1T);
        var Line1PointX = FindValue(Line1PointXT);
        var Line1PointY = FindValue(Line1PointYT);
        var Line2PointX = FindValue(Line2PointXT);
        var Line2PointY = FindValue(Line2PointYT);

        var Equation1 = SlopeLine1 + "(x-" + Line1PointX + ")+" + Line1PointY;
        Equation1 = Equation1.replace("+-", "-");
        Equation1 = Equation1.replace("--", "+");

        var Equation2 = SlopeLine1 + "(x-" + Line2PointX + ")+" + Line2PointY;
        Equation2 = Equation2.replace("+-", "-");
        Equation2 = Equation2.replace("--", "+");

        document.getElementById('TextBoxForCartesianGraph19').value = Equation1;
        document.getElementById('TextBoxForCartesianGraph20').value = Equation2;
        document.getElementById('checkboxCartesianPoints').checked=true;
        document.getElementById('Point1X').value = Line1PointX;
        document.getElementById('Point1Y').value = Line1PointY;
        document.getElementById('Point2X').value = Line2PointX;
        document.getElementById('Point2Y').value = Line2PointY;
        GraphingCalculator();

    }


 
/*------------------------------------------------------------------------------
* NAME       : DrawTwoParralelLinesExample
* PURPOSE    : Draws parallel lines
* PARAMETERS :   
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function DrawTwoParralelLinesExample() {

        document.getElementById('DrawTwoParralelLines1').value = "2/5";
        document.getElementById('DrawTwoParralelLines2').value = 3;
        document.getElementById('DrawTwoParralelLines3').value = -4;
        document.getElementById('DrawTwoParralelLines4').value = 2;
        document.getElementById('DrawTwoParralelLines5').value = 7;

        DrawTwoParralelLines();
         
    }




/*------------------------------------------------------------------------------
* NAME       : DrawTwoPerpendicularLines
* PURPOSE    : Draws perpendicular lines
* PARAMETERS :   
* RETURNS    :  
*----------------------------------------------------------------------------*/ 
    function DrawTwoPerpendicularLines() {
        clearcartesianpoint();
        document.getElementById('checkboxCartesianPoints').checked=true;
        var SlopeLine1T  = document.getElementById('DrawTwoPerpendicularLines1').value;
        var Line1PointXT = document.getElementById('DrawTwoPerpendicularLines2').value;
        var Line1PointYT = document.getElementById('DrawTwoPerpendicularLines3').value;
        var Line2PointXT = document.getElementById('DrawTwoPerpendicularLines4').value;
        var Line2PointYT = document.getElementById('DrawTwoPerpendicularLines5').value;


        var SlopeLine1 = FindValue(SlopeLine1T);
        var Line1PointX = FindValue(Line1PointXT);
        var Line1PointY = FindValue(Line1PointYT);
        var Line2PointX = FindValue(Line2PointXT);
        var Line2PointY = FindValue(Line2PointYT);

        var SlopeLine2 = -1/SlopeLine1;

        var Equation1 = SlopeLine1 + "(x-" + Line1PointX + ")+" + Line1PointY;
        Equation1 = Equation1.replace("+-", "-");
        Equation1 = Equation1.replace("--", "+");

        var Equation2 = SlopeLine2 + "(x-" + Line2PointX + ")+" + Line2PointY;
        Equation2 = Equation2.replace("+-", "-");
        Equation2 = Equation2.replace("--", "+");

        document.getElementById('TextBoxForCartesianGraph19').value = Equation1;
        document.getElementById('TextBoxForCartesianGraph20').value = Equation2;

        document.getElementById('Point1X').value = Line1PointX;
        document.getElementById('Point1Y').value = Line1PointY;
        document.getElementById('Point2X').value = Line2PointX;
        document.getElementById('Point2Y').value = Line2PointY;
        GraphingCalculator();

    }


 
/*------------------------------------------------------------------------------
* NAME       : DrawTwoPerpendicularLinesExample
* PURPOSE    : Draws perpendicular lines
* PARAMETERS :   
* RETURNS    :  
*----------------------------------------------------------------------------*/ 
    function DrawTwoPerpendicularLinesExample() {

        document.getElementById('DrawTwoPerpendicularLines1').value = "2/5";
        document.getElementById('DrawTwoPerpendicularLines2').value = 3;
        document.getElementById('DrawTwoPerpendicularLines3').value = -4;
        document.getElementById('DrawTwoPerpendicularLines4').value = 2;
        document.getElementById('DrawTwoPerpendicularLines5').value = 7;

        DrawTwoPerpendicularLines();
         
    }



 


/*------------------------------------------------------------------------------
* NAME       : Shading
* PURPOSE    : Shades with mouse as tool
* PARAMETERS :   
* RETURNS    :  
*----------------------------------------------------------------------------*/ 
    function Shading() {        
        if(document.getElementById('ShadingCheckbox').checked == false){
            return;
        } 
        var canvas = document.getElementById('canvas2');
        if (null == canvas || !canvas.getContext) return;
        var ctx = canvas.getContext('2d');

        var xRminn = FindValue(document.getElementById('xMinParameter').value);
        var xRmaxx = FindValue(document.getElementById('xMaxParameter').value);
        var yRminn = FindValue(document.getElementById('yMinParameter').value);
        var yRmaxx = FindValue(document.getElementById('yMaxParameter').value);

        var x1 = FindValue(document.getElementById('DragStartX').value);
        var y1 = FindValue(document.getElementById('DragStartY').value);
        var x2 = FindValue(document.getElementById('DragEndX').value);
        var y2 = FindValue(document.getElementById('DragEndY').value);



        //alert("hello Shading " + "x1 = " + x1 + "....... y1 = " + y1 + "....... x2 = " + x2 + "....... y2 = " + y2);
        //Number of pixels per 1 x-unit (horizontal direction)
        var dxx = canvas.width / (xRmaxx - xRminn);
        //Number of pixels per 1 y-unit (vertical direction)
        var dyy = canvas.height / (yRmaxx - yRminn);

        //calculate position of x0
        if (xRminn < 0 && xRmaxx > 0) {
            xx0 = Math.abs(xRminn * dxx);
        }
        else if (xRminn >= 0 && xRmaxx > 0) {
            xx0 = -xRminn * dxx;
        }
        else if (xRminn < 0 && xRmaxx <= 0) {
            xx0 = Math.abs(xRminn * dxx);
        }


        //calculate position of y0
        if (yRminn < 0 && yRmaxx > 0) {
            yy0 = Math.abs(yRmaxx * dyy);
        }
        else if (yRminn >= 0 && yRmaxx > 0) {
            yy0 = yRmaxx * dyy;
        }
        else if (yRminn < 0 && yRmaxx <= 0) {
            yy0 = yRmaxx * dyy;
        }


        //var color = document.getElementById('ShadingColorBox').value;
        //identify shading color
        var valueSelect = document.getElementById('mydropdownShadingColor');
        var selectedText = valueSelect.options[valueSelect.selectedIndex].text;        
        var ValuemydropdownShadingColor = document.getElementById('mydropdownShadingColor').value
        var color = selectedText;

        //identify shading tool
        var valueSelect2 = document.getElementById('mydropdownShadingTool');
        var selectedText2 = valueSelect2.options[valueSelect2.selectedIndex].text;        
        var ValuemydropdownShadingTool = document.getElementById('mydropdownShadingTool').value
        var ShadingTool = selectedText2;

        //alert('ShadingTool.....' + ShadingTool);
        //alert('ValuemydropdownShadingTool.....' + ValuemydropdownShadingTool);
        
        var strokewidth = 5;

        if (document.getElementById('StrokeWidthBox').value != "") {
            strokewidth = FindValue(document.getElementById('StrokeWidthBox').value);
        }

        if (strokewidth < 1) { strokewidth = 1 };
        if (strokewidth > 100) { strokewidth = 100 };

        var TransparentLevel = 0.4;

        if (document.getElementById('TransparencyLevel').value != "") {
            TransparentLevel = FindValue(document.getElementById('TransparencyLevel').value);
        }

        if (TransparentLevel < 0.1) { TransparentLevel = 0.1 };
        if (TransparentLevel > 1) { TransparentLevel = 11 };

        var xx1 = x0 + x1 * dxx;
        var xx2 = x0 + x2 * dxx;
        var yy1 = y0 - y1 * dyy;
        var yy2 = y0 - y2 * dyy;

        //var axes = {}, 
        var ctx = canvas.getContext("2d");

        var context = canvas.getContext("2d");
        //context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = "black";
        //context.font = "12px Arial";
        //context.fillText("0", x0 - 10, y0 + 13);


        ctx.beginPath();
        ctx.lineWidth = strokewidth;
        ctx.strokeStyle = selectedText;
        ctx.globalAlpha = TransparentLevel;

        if(ValuemydropdownShadingTool == '1'){//Shade with brush/pencil
            var dataX = (document.getElementById('ShadingdataX').value).split(";");
            var dataY = (document.getElementById('ShadingdataY').value).split(";");
            dataX.pop();
            dataY.pop();

            //alert('dataX..' + dataX);
            //alert('dataY..' + dataY);

            xx1 = x0 + parseFloat(dataX[0]) * dxx;
            yy1 = y0 - parseFloat(dataY[0]) * dyy;
            ctx.moveTo(xx1, yy1);
            for (var i = 1; i < dataX.length; i++) {
                xx2 = x0 + parseFloat(dataX[i]) * dxx;
                yy2 = y0 - parseFloat(dataY[i]) * dyy;
                ctx.lineTo(xx2, yy2);
            }
            ctx.stroke();
            ctx.closePath();
        }
        else if (ValuemydropdownShadingTool == '2'){//Shade with line
            ctx.moveTo(xx1, yy1);
            ctx.lineTo(xx2, yy2);
            ctx.stroke();
            ctx.closePath();
        }
        else if (ValuemydropdownShadingTool == '3'){//Shade with Filled Circle
            var xm = x0 + 0.5 * (x2 + x1) * dxx;
            var ym = y0 - 0.5 * (y2 + y1) * dyy;
            var radius = 0.5 * Math.abs(x2 - x1) * dxx;

            //var radius = 6;
            ctx.beginPath();
            ctx.strokeStyle = "black"; //rgb(204, 0, 102)" red;
            ctx.arc(xm, ym, radius, 0, 2 * Math.PI, true);
            ctx.fillStyle = selectedText;
            ctx.fill();
            ctx.stroke();
            ctx.closePath();

        }
        else if (ValuemydropdownShadingTool == '4'){//Shade with 'Open Circle'
            var xm = x0 + 0.5 * (x2 + x1) * dxx;
            var ym = y0 - 0.5 * (y2 + y1) * dyy;
            var radius = 0.5 * Math.abs(x2 - x1) * dxx;

            //var radius = 6;
            ctx.beginPath();
            ctx.strokeStyle = selectedText;
            ctx.arc(xm, ym, radius, 0, 2 * Math.PI, true);
            //ctx.fillStyle = selectedText;
            //ctx.fill();
            ctx.stroke();
            ctx.closePath();

        }
        else if (ValuemydropdownShadingTool == '5'){//Shade with 'Filled Rectangle'
            var width = Math.abs(xx2 - xx1);
            var height = Math.abs(yy2 - yy1);
            var slope = (y2 - y1) / (x2 - x1);
            var Rx = xx1;
            var Ry = yy1;

            if (slope < 0 && x1 > x2) {
                Rx = xx2;
                Ry = yy2;
            }
            else if (slope > 0 && x1 > x2) {
                Rx = xx2;
                Ry = yy1;
            }
            else if (slope > 0 && x1 < x2) {
                Rx = xx1;
                Ry = yy2;
            }

            //var radius = 6;
            ctx.beginPath();
            ctx.strokeStyle = selectedText;
            ctx.rect(Rx, Ry, width, height);
            ctx.fillStyle = selectedText;
            ctx.fill();
            ctx.stroke();
            ctx.closePath();

        }
        else if  (ValuemydropdownShadingTool == '6'){//Shade with 'Open Rectangle') {
            var width = Math.abs(xx2 - xx1);
            var height = Math.abs(yy2 - yy1);
            var slope = (y2 - y1) / (x2 - x1);
            var Rx = xx1;
            var Ry = yy1;

            if (slope < 0 && x1 > x2) {
                Rx = xx2;
                Ry = yy2;
            }
            else if (slope > 0 && x1 > x2) {
                Rx = xx2;
                Ry = yy1;
            }
            else if (slope > 0 && x1 < x2) {
                Rx = xx1;
                Ry = yy2;
            }

            //var radius = 6;
            ctx.beginPath();
            ctx.strokeStyle = selectedText;
            ctx.rect(Rx, Ry, width, height);
            //ctx.fillStyle = document.getElementById('ShadingColorBox').value;
            //ctx.fill();
            ctx.stroke();
            ctx.closePath();

        }

        //saving image
        cPush();

    }
     

/*------------------------------------------------------------------------------
* NAME       : cPush2
* PURPOSE    : Saves canvas image
* PARAMETERS :   
* RETURNS    :  
*----------------------------------------------------------------------------*/ 
    function cPush2() {
        document.getElementById('canvasImg9').src = document.getElementById('canvasImg8').src;  
        document.getElementById('canvasImg8').src = document.getElementById('canvasImg7').src;  
        document.getElementById('canvasImg7').src = document.getElementById('canvasImg6').src;  
        document.getElementById('canvasImg6').src = document.getElementById('canvasImg5').src;  
        document.getElementById('canvasImg5').src = document.getElementById('canvasImg4').src;  
        document.getElementById('canvasImg4').src = document.getElementById('canvasImg3').src;  
        document.getElementById('canvasImg3').src = document.getElementById('canvasImg2').src;  
        document.getElementById('canvasImg2').src = document.getElementById('canvasImg1').src;  

        var dataURL = canvas.toDataURL();
        document.getElementById('canvasImg1').src = dataURL;
        
    }



    function cPush22() {
        //document.getElementById('graphcolor22').value = blue;
        document.getElementById('TextBoxForCartesianGraph5').value = document.getElementById('TextBoxForCartesianGraph1').value;
        document.getElementById('checkboxY1').checked = true;
        document.getElementById('checkboxY2').checked = false;
        document.getElementById('checkboxY3').checked = false;
        document.getElementById('checkboxY4').checked = false;
        document.getElementById('checkboxY5').checked = false;

        
        //saving first image
        GraphingCalculator();
        var dataURL = canvas.toDataURL();
        document.getElementById('canvasImg1').src = dataURL;


        //saving second image
        document.getElementById('TextBoxForCartesianGraph1').value = document.getElementById('TextBoxForCartesianGraph2').value;
        GraphingCalculator();
        var dataURL = canvas.toDataURL();
        document.getElementById('canvasImg2').src = dataURL;

        //saving third image
        document.getElementById('TextBoxForCartesianGraph1').value = document.getElementById('TextBoxForCartesianGraph3').value;
        GraphingCalculator();
        var dataURL = canvas.toDataURL();
        document.getElementById('canvasImg3').src = dataURL;


        //saving fourth image
        document.getElementById('TextBoxForCartesianGraph1').value = document.getElementById('TextBoxForCartesianGraph4').value;
        GraphingCalculator();
        var dataURL = canvas.toDataURL();
        document.getElementById('canvasImg4').src = dataURL;


        document.getElementById('TextBoxForCartesianGraph1').value = document.getElementById('TextBoxForCartesianGraph5').value;

        return;
        
    }


    function cPush33() {
        //saving first image
        document.getElementById('checkboxY1').checked = true;
        document.getElementById('checkboxY2').checked = true;
        document.getElementById('checkboxY3').checked = false;
        document.getElementById('checkboxY4').checked = false;
        document.getElementById('checkboxY5').checked = false;
        document.getElementById('checkboxY6').checked = false;
        document.getElementById('checkboxY7').checked = false;
        document.getElementById('checkboxY8').checked = false;
        document.getElementById('checkboxY9').checked = false;
        document.getElementById('checkboxY10').checked = false;



        document.getElementById('TextBoxForCartesianGraph9').value = document.getElementById('TextBoxForCartesianGraph1').value;
        document.getElementById('TextBoxForCartesianGraph10').value = document.getElementById('TextBoxForCartesianGraph2').value;
        GraphingCalculator();
        var dataURL = canvas.toDataURL();
        document.getElementById('canvasImg1').src = dataURL;


        //saving second image
        document.getElementById('TextBoxForCartesianGraph1').value = document.getElementById('TextBoxForCartesianGraph3').value;
        document.getElementById('TextBoxForCartesianGraph2').value = document.getElementById('TextBoxForCartesianGraph4').value;

        GraphingCalculator();
        var dataURL = canvas.toDataURL();
        document.getElementById('canvasImg2').src = dataURL;

        //saving third image
        document.getElementById('TextBoxForCartesianGraph1').value = document.getElementById('TextBoxForCartesianGraph5').value;
        document.getElementById('TextBoxForCartesianGraph2').value = document.getElementById('TextBoxForCartesianGraph6').value;

        GraphingCalculator();
        var dataURL = canvas.toDataURL();
        document.getElementById('canvasImg3').src = dataURL;


        //saving fourth image
        document.getElementById('TextBoxForCartesianGraph1').value = document.getElementById('TextBoxForCartesianGraph7').value;
        document.getElementById('TextBoxForCartesianGraph2').value = document.getElementById('TextBoxForCartesianGraph8').value;

        GraphingCalculator();
        var dataURL = canvas.toDataURL();
        document.getElementById('canvasImg4').src = dataURL;

        document.getElementById('TextBoxForCartesianGraph1').value = document.getElementById('TextBoxForCartesianGraph9').value;
        document.getElementById('TextBoxForCartesianGraph2').value = document.getElementById('TextBoxForCartesianGraph10').value;


        return;
        
    }

    function cPush44(num) {
        var dataURL = canvas.toDataURL();
        document.getElementById('canvasImg' + num).src = dataURL;

        return;
        
    }




/*------------------------------------------------------------------------------
* NAME       : cPush
* PURPOSE    : Saves canvas image
* PARAMETERS :   
* RETURNS    :  
*----------------------------------------------------------------------------*/ 
    var cPushArray = new Array();
    var cStep = -1;
    //var ctx = document.getElementById('canvas2').getContext("2d");
    function cPush() {      
        //alert('cStep1111....'+cStep);  
        cStep++;
        //alert('cStep2222....'+cStep); 
        if (cStep < cPushArray.length) { cPushArray.length = cStep; }
        cPushArray.push(document.getElementById('canvas2').toDataURL());

    }


/*------------------------------------------------------------------------------
* NAME       : cUndo
* PURPOSE    : Undoes canvas image
* PARAMETERS :   
* RETURNS    :  
*----------------------------------------------------------------------------*/ 
    function cUndo() {
        var ctx2 = document.getElementById('canvas2').getContext("2d");
            //alert('cStep3333....'+cStep);  
        if (cStep > 0) {
            ctx2.clearRect(0, 0, canvas.width, canvas.height);
            cStep--;
            //alert('cStep4444....'+cStep);  
            var canvasPic = new Image();
            canvasPic.src = cPushArray[cStep];
            canvasPic.onload = function () { ctx2.drawImage(canvasPic, 0, 0); }
        }
    }


/*------------------------------------------------------------------------------
* NAME       : cRedo
* PURPOSE    : Redoes canvas image
* PARAMETERS :   
* RETURNS    :  
*----------------------------------------------------------------------------*/ 
    function cRedo() {
        var ctx2 = document.getElementById('canvas2').getContext("2d");
        if (cStep < cPushArray.length - 1) {
            ctx2.clearRect(0, 0, canvas.width, canvas.height);
            cStep++;
            var canvasPic = new Image();
            canvasPic.src = cPushArray[cStep];
            canvasPic.onload = function () { ctx2.drawImage(canvasPic, 0, 0); }
        }
    }





/*------------------------------------------------------------------------------
* NAME       : FindExtremumPoint
* PURPOSE    : Finds Maximum or Minimum point of Cartesian graph; 
*              Finds Leftmost and Rightmost point of Cartesian graph;
* PARAMETERS :   
* RETURNS    :  
*----------------------------------------------------------------------------*/ 
    function FindExtremumPoint(casenum) {
        if (document.getElementById('ExtremumCheckbox').checked == false) {
            var msg = 'In order to use the "Finding Maximum or Minimum" feature, "on/off" must be checked to activate this feature of the calculator.';
            alert(msg);
            return;
        }

        var selectedgraph = document.getElementById('mydropdownExtremum').value;

        //identify the left side of selected equation
        var LeftSideEquation = document.getElementById('mydropdownCartesian' + selectedgraph).value;

        var cond1 = (LeftSideEquation == '0');
        var cond2 = (LeftSideEquation == '5');
        if (cond1 == false && cond2 == false) {
            var msg = '"Finding Maximum or Minimum" feature is only for graph with equation that starts with "y = " or "x = ".';
            alert(msg);
            return;
        }

        //identify right side of selected equation 
        var graph1 = document.getElementById('TextBoxForCartesianGraph' + selectedgraph).value;
        if (graph1 == "") {
            alert('Please input equation for selected graph.');
            return;
        }


        /////////////////////////////
        //Finding Maximum or Minimum
        var InputExpression = "";
        if (cond1) {//left side of equation has "y = "
            InputExpression = document.getElementById('TextBoxForCartesianGraph' + selectedgraph).value;
            var val1 = FindValue(document.getElementById('extremebound1').value);
            var val2 = FindValue(document.getElementById('extremebound2').value);
            if (isNaN(val1) || isNaN(val2)) {
                alert("Please input left bound and right bound of extremum point.")
                return;
            }

            try {
                //alert("val1 = " + val1);        
                var tt = "";
                if (casenum == '1') {//find mim
                    var tt = FindMinima(val1, val2, InputExpression);
                }
                else if (casenum == '2') {//find max
                    var tt = FindMaxima(val1, val2, InputExpression);
                }

                //alert("tt = " + tt);
                var ss = tt.split(";");

                var x = parseFloat(ss[0]);
                var y = parseFloat(ss[1]);

                x = Math.round(x * 10000000) / 10000000;
                y = Math.round(y * 100000000) / 100000000;

                //alert("Hello Extremum: InputExpression = " + InputExpression + " xMax = " + x + " yMax = " + y);

            } catch (err) {
                document.getElementById('LocationExtremum').value = 'Graphing Calculator could not find extremum point.';
                return;
            }

            if (casenum == '1') {//find minimum
                document.getElementById('LocationExtremum').value = "Lowest Point is (" + x + " , " + y + ")";
            }
            else if (casenum == '2') {//find maximum
                document.getElementById('LocationExtremum').value = "Highest Point is (" + x + " , " + y + ")";
            }

            return;


        }
        else if (cond2) {//left side of equation has "x = " and right side of has variable "y"
            InputExpression = document.getElementById('TextBoxForCartesianGraph' + selectedgraph).value;
            InputExpression = replaceAll(InputExpression, "y", "x");
                InputExpression = ProcessInput(InputExpression);
                var val1 = FindValue(document.getElementById('extremebound3').value);
                var val2 = FindValue(document.getElementById('extremebound4').value);
                
                if (isNaN(val1) || isNaN(val2)) {
                    alert("Please input lower bound and upper bound of extremum point.")
                    return;
                }

                try {
                    var tt = "";
                    if (casenum == '3') {//find leftmost
                        var tt = FindLeftmost(val1, val2, InputExpression);
                    }
                    else if (casenum == '4') {//find rightmost
                        var tt = FindRightmost(val1, val2, InputExpression);
                    }

                    //alert("tt = " + tt);
                    var ss = tt.split(";");

                    var x = parseFloat(ss[0]);
                    var y = parseFloat(ss[1]);

                    //alert("!!!!!  x = " + x + "....... y = " + y);

                    x = Math.round(x * 100000000) / 100000000;
                    y = Math.round(y * 10000000) / 10000000;


                    //alert("Hello Extremum: InputExpression = " + InputExpression + " xMax = " + x + " yMax = " + y);

                } catch (err) {
                    document.getElementById('LocationExtremum').value = 'Graphing Calculator could not find extremum point.';
                    return;
                }

                if (casenum == '3') {//find leftmost
                    document.getElementById('LocationExtremum2').value = "Leftmost Point is (" + x + " , " + y + ")";
                }
                else if (casenum == '4'){//find rightmost
                    document.getElementById('LocationExtremum2').value = "Rightmost Point is (" + x + " , " + y + ")";
                }

                return;

        }
    }
    

/*------------------------------------------------------------------------------
* NAME       : FindIntersectionPoint
* PURPOSE    : Finds intersection point of two Cartesian graphs
* PARAMETERS :   
* RETURNS    :  
*----------------------------------------------------------------------------*/  
    function FindIntersectionPoint() {

        if(document.getElementById('IntersectionCheckbox').checked == false){
            var msg = 'In order to use the "finding intersection" feature, "on/off" must be checked to activate this feature of the calculator.';
            alert(msg);
            return;               
        }
        var selectedgraph1 = document.getElementById('mydropdownIntersectionAA').value;
        var selectedgraph2 = document.getElementById('mydropdownIntersectionBB').value;
        if(selectedgraph1 == selectedgraph2){
            var msg = 'Two different graphs must be selected.';
            alert(msg);
            return;               
        }

        //identify the left sides of the two selection equations
        var LeftSideEquation1 = document.getElementById('mydropdownCartesian'+selectedgraph1).value;
        var LeftSideEquation2 = document.getElementById('mydropdownCartesian'+selectedgraph2).value;

        //alert('LeftSideEquation1....' + LeftSideEquation1);
        //alert('LeftSideEquation2....' + LeftSideEquation2);

        var cond1 = (LeftSideEquation1 == '0');
        var cond2 = (LeftSideEquation1 == '5');

        if(cond1 == false && cond2 == false){
            var msg = 'Finding intersection feature is only for graph with equation that starts with "y = " or "x = ".';
            alert(msg);
            return;               
        }

        var cond1 = (LeftSideEquation2 == '0');
        var cond2 = (LeftSideEquation2 == '5');

        if(cond1 == false && cond2 == false){
            var msg = 'Finding intersection feature is only for graph with equation that starts with "y = " or "x = ".';
            alert(msg);
            return;               
        }

        //identify right sides of the two selected equations 
        var graph1 = document.getElementById('TextBoxForCartesianGraph'+selectedgraph1).value;
        var graph2 = document.getElementById('TextBoxForCartesianGraph'+selectedgraph2).value;


        if(LeftSideEquation1 == '0'){
            var graph1Type = "Y";
        }
        else if(LeftSideEquation1 == '5'){
            var graph1Type = "X";
        } 

        if(LeftSideEquation2 == '0'){
            var graph2Type = "Y";
        }
        else if(LeftSideEquation2 == '5'){
            var graph2Type = "X";
        }        


        var funcComb = "1"; 
        if (graph1Type == "Y" & graph2Type == "Y") { 
            funcComb = graph1 + "-(" + graph2 + ")";
            var InputExpression = ProcessInput(funcComb);
            var InputExpression2 = ProcessInput(graph1);
            var xcoord = FindValue(document.getElementById('LocationIntersectionX').value);
 
            try {
                //var x = SolveEquationDirect(xcoord - 0.2, xcoord + 0.2, InputExpression);
                var x = SolveEquation3(xcoord - 0.2, xcoord + 0.2, InputExpression);

                x = Math.round(x * 100000000) / 100000000;
                 
                var temp1 = replaceAll(InputExpression2, "x", "(" + x + ")");
 
                var y = FindValue(temp1);
                y = Math.round(y * 100000000) / 100000000;
 
                if (IsNumericc(y) == false || y == null) {
                    y = NaN;
                }
  
            } catch (err) {
                document.getElementById('LocationIntersection').value = 'Graphing Calculator could not find the intersection.'
                return ;
            }
  
            document.getElementById('LocationIntersection').value = "Intersection Point is (" + x + " , " + y + ")";
         }
         else if (graph1Type == "Y" & graph2Type == "X") {
            funcComb = replaceAll(graph1, "x", "(" + graph2 + ")") + "- x"; //ProcessInput function processes only "x" variable
            funcComb = replaceAll(funcComb, "y", "x");
            var InputExpression = ProcessInput(funcComb);
            var InputExpression2 = ProcessInput(graph2);
            var ycoord = FindValue(document.getElementById('LocationIntersectionY').value);
            var val1 = ycoord - 0.2;
            var val2 = ycoord + 0.2;
            //alert("hello type 2; InputExpression = " + InputExpression + " ; y1 = " + val1 + " ; y2 = " + val2);
 
            try {
                //var y = SolveEquationDirect(val1, val2, InputExpression);
                var y = SolveEquation3(val1, val2, InputExpression);

                //alert("solY = " + y);
 
                y = Math.round(y * 100000000) / 100000000;
 
                var temp1 = replaceAll(InputExpression2, "y", "(" + y + ")");
                var x = FindValue(temp1);
                x = Math.round(x * 100000000) / 100000000;
 
                if (IsNumericc(x) == false || x == null) {
                    x = NaN;
                }

            } catch (err) {
                document.getElementById('LocationIntersection').value = 'Graphing Calculator could not find the intersection.'
                return ;
            }
  
            document.getElementById('LocationIntersection').value = "Intersection Point is (" + x + " , " + y + ")";
  
        }
        else if (graph1Type == "X" & graph2Type == "X") {
            graph1 = replaceAll(graph1, "y", "x");
            graph2 = replaceAll(graph2, "y", "x");
            var funcComb = graph1 + "-(" + graph2 + ")"; //ProcessInput function processes only "x" variable
            //funcComb = replaceAll(funcComb, "y", "x");  
            
            var InputExpression = ProcessInput(funcComb);
            var InputExpression2 = ProcessInput(graph2);
            var ycoord = FindValue(document.getElementById('LocationIntersectionY').value);
            var val1 = ycoord - 0.2;
            var val2 = ycoord + 0.2;
            //alert("hello type 2; InputExpression = " + InputExpression + " ; y1 = " + val1 + " ; y2 = " + val2);
 
            try {
                //var y = SolveEquationDirect(val1, val2, InputExpression);
                var y = SolveEquation3(val1, val2, InputExpression);
 
                y = Math.round(y * 100000000) / 100000000;
                
                var temp1 = replaceAll(InputExpression2, "x", "(" + y + ")");
 
                var x = FindValue(temp1);
                x = Math.round(x * 100000000) / 100000000;
 
                if (IsNumericc(x) == false || x == null) {
                    x = NaN;
                }
 
                //alert("x = " + x + " ;;;  y = " + y);
 
 
            } catch (err) {
                return "";
            }
            
            document.getElementById('LocationIntersection').value = "Intersection Point is (" + x + " , " + y + ")";
            
        }
        
    }

 
        
 
 

/*------------------------------------------------------------------------------
* NAME       : FindXIntercept
* PURPOSE    : Finds x-intercept and y-intercept of Cartesian graph
* PARAMETERS :   
* RETURNS    :  
*----------------------------------------------------------------------------*/   
    function FindXIntercept(casenum) {
        var sup2 = String.fromCharCode(178);	
        if(document.getElementById('XYInterceptCheckbox').checked == false){
            var msg = 'In order to find x-intercept or y-intercept, \n\n' 
                    + '"on/off" checkbox must be checked to activate this feature of the calculator.';
            alert(msg);
            return;

        }

        var SelectedEquation = parseFloat(document.getElementById('mydropdownXYIntercept').value);

        for (var i = 1; i <= 20;i++){
            if (SelectedEquation == i) {
                var valuedropbox = parseFloat(document.getElementById('mydropdownCartesian' + i).value);
                var InputExpression = ProcessInput(document.getElementById('TextBoxForCartesianGraph'+i).value);
            }
        }

        //alert('valuedropbox....' + valuedropbox);
        
        if ((valuedropbox >= 1 && valuedropbox <= 4) || (valuedropbox >= 6 && valuedropbox <= 9)) {
                var msg = 'Finding "x-intercept or y-intercept" feature is only for equations that start \n\n'
                    + 'with "y = " , "x = " , "x' + sup2 + ' = " , or ' + '"y ' + sup2 + ' = ". '
                alert(msg);
                return;
        }


        if (casenum == '1') {//find x-intercept 
            var xval1 = FindValue(document.getElementById('xinterceptbound1').value);
            var xval2 = FindValue(document.getElementById('xinterceptbound2').value);
            if (valuedropbox == 0) {//find x-intercept for equation with "y = "
                try {
                    //var xint = SolveEquationDirect(xval1, xval2, InputExpression);
                    var xint = SolveEquation3(xval1, xval2, InputExpression);

                    xint = Math.round(xint * 1000000000) / 1000000000;
                    if(isNaN(xint)){
                        document.getElementById('LocationXIntercept').value = "Graphing Calculator could not find the x-intercept.";
                    }
                    else{
                        document.getElementById('LocationXIntercept').value = "x-intercept is (" + xint + " , 0)";
                    }
                } catch (err) {
                    document.getElementById('LocationXIntercept').value = "Graphing Calculator could not find the x-intercept.";
                }
                return;
            }
            else if (valuedropbox == 5) {//find x-intercept for equation with "x = "
                var tt = replaceAll(InputExpression, 'y', '(0)');
                var xint = FindValue(tt); 
                document.getElementById('LocationXIntercept').value = "x-intercept is (" + xint + " , 0)";
                return;

            }
        }
        else if (casenum == '2') {//find y-intercept 
            var yval1 = FindValue(document.getElementById('yinterceptbound1').value);
            var yval2 = FindValue(document.getElementById('yinterceptbound2').value);
            if(parseFloat(yval1) > parseFloat(yval2)){
                var yval1 = FindValue(document.getElementById('yinterceptbound2').value);
                var yval2 = FindValue(document.getElementById('yinterceptbound1').value);               
            } 

            if (valuedropbox == 0) {//find y-intercept for equation with "y = "
                var tt = replaceAll(InputExpression, 'x', '(0)');
                var yint = FindValue(tt); 
                document.getElementById('LocationXIntercept').value = "y-intercept is (0 , " + yint + ")";
                return;
            }
            else if (valuedropbox == 5) {//find y-intercept for equation with "x = "
                InputExpression = replaceAll(InputExpression, "y", "x");
                InputExpression = ProcessInput(InputExpression);
                try {
                    //var yint = SolveEquationDirect(yval1, yval2, InputExpression);
                    var yint = SolveEquation3(yval1, yval2, InputExpression);

                    yint = Math.round(yint * 1000000000) / 1000000000;
                    if(isNaN(yint)){
                        document.getElementById('LocationXIntercept').value = "Graphing Calculator could not find the y-intercept.";
                    }
                    else{
                        document.getElementById('LocationXIntercept').value = "y-intercept is (" + yint + " , 0)";
                    }                    
                } catch (err) {
                    document.getElementById('LocationXIntercept').value = "Graphing Calculator could not find the y-intercept.";
                }
                return;
            }
        }        
 
 
    }
 
 
         
 
        
 

/*------------------------------------------------------------------------------
* NAME       : draw
* PURPOSE    : Draws graph on canvas
* PARAMETERS :   
* RETURNS    :  
*----------------------------------------------------------------------------*/ 
     function draw() {
        // alert('in draw()');
        var canvas = document.getElementById("canvas");
        if (null == canvas || !canvas.getContext) return;

        var xRminn = FindValue(document.getElementById('xMinParameter').value);
        var xRmaxx = FindValue(document.getElementById('xMaxParameter').value);
        var yRminn = FindValue(document.getElementById('yMinParameter').value);
        var yRmaxx = FindValue(document.getElementById('yMaxParameter').value);

        //Number of pixels per 1 x-unit (horizontal direction)
        var dxx = canvas.width / (xRmaxx - xRminn);

        //Number of pixels per 1 y-unit (vertical direction)
        var dyy = canvas.height / (yRmaxx - yRminn);

        //calculate position of x0
        if (xRminn < 0 && xRmaxx > 0) {
            x0 = Math.abs(xRminn * dxx);
        }
        else if (xRminn >= 0 && xRmaxx > 0) {
            x0 = -xRminn * dxx;
        }
        else if (xRminn < 0 && xRmaxx <= 0) {
            x0 = Math.abs(xRminn * dxx);
        }

        //calculate position of y0
        if (yRminn < 0 && yRmaxx > 0) {
            y0 = Math.abs(yRmaxx * dyy);
        }
        else if (yRminn >= 0 && yRmaxx > 0) {
            y0 = yRmaxx * dyy;
        }
        else if (yRminn < 0 && yRmaxx <= 0) {
            y0 = yRmaxx * dyy;
        }


        var gap = 17;  //gap between gridlines
        var ctx = canvas.getContext("2d");
        var context = canvas.getContext("2d");
        context.clearRect(0, 0, canvas.width, canvas.height);
        ctx.globalAlpha = 1;
        context.fillStyle = "black";
        context.font = "12px Arial";
        if(document.getElementById('LabelPointCheckBox').checked==false){
            context.fillText("", x0, y0 + 13);
        }
        else{
            context.fillText("0", x0 - 10, y0 + 13);
        }


        //draw gridlines, and xy axes
        showAxes(ctx, dxx, dyy, xRminn, xRmaxx, yRminn, yRmaxx, x0, y0);


        //Draw graph with left side of equation containing "y"
        for (var i = 1; i <= 20; i++) {
            var colorforgraph = graphcolor(i);
            var valuedropbox = document.getElementById('mydropdownCartesian'+i).value;
            var ShadeFlag = valuedropbox;
            var dashFlag = '0';
            var vty = parseFloat(valuedropbox);
            if (vty == 1 || vty == 3 || vty == 6 || vty == 8 ) {
                var dashFlag = '1';
            }
            //alert('i...'+ i+'....vty.....' + vty + '...dashFlag....  '+dashFlag);
 

            var valueSelect = document.getElementById('mydropdownCartesian'+i);
            var selectedText = valueSelect.options[valueSelect.selectedIndex].text;
            //alert('selectedText....'+selectedText)

            var ee1 = document.getElementById('TextBoxForCartesianGraph'+i).value;
            var ee2 = document.getElementById('checkboxY'+i).checked;

            if (ee1 != "" && ee2 && parseInt(valuedropbox) <= 9 ) {
                //alert('in draw()......111111');
                //alert('valuedropbox...' + valuedropbox);
                var dataA = document.getElementById('GraphY' + i).value; // 
                //alert('i='+i+'.......dataA....' + dataA);
                var dataB = dataA.split(";;;");
                var dataCX = dataB[0].split(",");
                var dataCY = dataB[1].split(",");
                if (parseFloat(valuedropbox)>= 1 && parseFloat(valuedropbox) <=4 ) {
                     //var ShadeFlag = 1;//document.getElementById('mydropdownCartesian1').value;
                     document.getElementById('TraceOFF').checked = true;
                }

                funGraph(ctx, "Y"+i, colorforgraph, 3, dataCX, dataCY, xRminn, xRmaxx, yRminn, yRmaxx, x0, y0, dxx, dyy, dashFlag, ShadeFlag);
            }
            //Draw graph with left side of equation containing "x"
            else if (ee1 != "" && ee2 && (parseInt(valuedropbox) >=5 && parseInt(valuedropbox) <=9)) {
                   //alert('in draw()......222222');
                    var dataA = document.getElementById('GraphX'+i).value;
                    //alert('i='+i+'.......dataA....' + dataA);
                    var dataB = dataA.split(";;;");
                    var dataCX = dataB[0].split(",");
                    var dataCY = dataB[1].split(",");
                    if (parseFloat(valuedropbox)>=6) {
                        document.getElementById('TraceOFF').checked = true;
                    }  

                    var colorforgraph = graphcolor(i);
                    funGraph(ctx, "X"+i, colorforgraph, 3, dataCX, dataCY, xRminn, xRmaxx, yRminn, yRmaxx, x0, y0, dxx, dyy, dashFlag, ShadeFlag);

                }
            //Draw graph with left side of equation containing "x squared" or "y-squared"
            else if (ee1 != "" && ee2 && parseInt(valuedropbox)>=10 ) {
                    //alert('in draw()......222222');
                    ShadeFlag = 0;
                    var dataA = document.getElementById('GraphX'+i).value; 
                    var dataB = dataA.split(";;;");
                    var dataCX = dataB[0].split(",");
                    var dataCY = dataB[1].split(",");
                    var colorforgraph = graphcolor(i);
                    funGraph(ctx, "X2"+i, colorforgraph, 3, dataCX, dataCY, xRminn, xRmaxx, yRminn, yRmaxx, x0, y0, dxx, dyy, dashFlag, ShadeFlag);
                    
                    var dataA = document.getElementById('GraphY'+i).value; 
                    var dataB = dataA.split(";;;");
                    var dataCX = dataB[0].split(",");
                    var dataCY = dataB[1].split(",");
                    funGraph(ctx, "X2"+i, colorforgraph, 3, dataCX, dataCY, xRminn, xRmaxx, yRminn, yRmaxx, x0, y0, dxx, dyy, dashFlag, ShadeFlag);
            }

           
            //drawing reflection
            var condition1 = document.getElementById('ReflectionCheckbox').checked;
            var condition2 = (document.getElementById('mydropdownreflection').value == i);
            var condition3 = (valuedropbox == 0 || valuedropbox == 5);
            if (condition1 && condition2 && condition3) {
                 if (document.getElementById('ReflectionModeIndicator').value == "1") {//reflect over y-axis
                    for (var kk = 0; kk < dataCX.length; kk++) { //dataCX.length;
                        dataCX[kk] = -1 * parseFloat(dataCX[kk]);
                    }
                }
                else if (document.getElementById('ReflectionModeIndicator').value == "2") {
                    for (var kk = 0; kk < dataCX.length; kk++) {
                        var temp = -1 * parseFloat(dataCY[kk]);
                        dataCY[kk] = temp.toString();
                    }
                }
                else if (document.getElementById('ReflectionModeIndicator').value == "3") {
                    for (var kk = 0; kk < dataCX.length; kk++) {
                        var temp = parseFloat(dataCX[kk]);
                        dataCX[kk] = dataCY[kk];
                        dataCY[kk] = temp.toString();

                        if (isNaN(temp)) {
                            dataCY[kk] = (NaN).toString();
                        }
                    }
                }
                else if (document.getElementById('ReflectionModeIndicator').value == "4") {
                    for (var kk = 0; kk < dataCX.length; kk++) {
                        var temp = -1 * parseFloat(dataCX[kk]);
                        dataCX[kk] = temp.toString();

                        var temp = -1 * parseFloat(dataCY[kk]);
                        dataCY[kk] = temp.toString();
                    }
                }
                else if (document.getElementById('ReflectionModeIndicator').value == "5") {
                    var valY = document.getElementById('ReflectY').value;
                    for (var kk = 0; kk < dataCX.length; kk++) {
                        //var temp = parseFloat(dataCX[kk]) ;
                        //dataCX[kk] = temp.toString();

                        var temp = 2*parseFloat(valY) - parseFloat(dataCY[kk]);
                        dataCY[kk] = temp.toString();
                    }
                }
                else if (document.getElementById('ReflectionModeIndicator').value == "6") {
                    var valX = document.getElementById('ReflectX').value;                    
                    for (var kk = 0; kk < dataCX.length; kk++) {
                        var dist = Math.abs(parseFloat(valX) - parseFloat(dataCX[kk]));
                        if(parseFloat(dataCX[kk]) <= parseFloat(valX)){
                            dataCX[kk] = 2*dist + parseFloat(dataCX[kk]);
                        }
                        else{
                            dataCX[kk] = parseFloat(dataCX[kk]) - 2*dist;
                        }
                    }
                }


                var dashFlag = "0";
                var colorvalue = document.getElementById('mydropdownreflection22').value;
                var colorforgraph = graphcolor(colorvalue);
                funGraph(ctx, "Reflection", colorforgraph, 3, dataCX, dataCY, xRminn, xRmaxx, yRminn, yRmaxx, x0, y0, dxx, dyy, dashFlag, ShadeFlag);
                ctx.strokeStyle = colorforgraph;
            }
           
            //drawing rotation
            var condition1 = document.getElementById('RotationCheckbox').checked;
            var condition2 = (document.getElementById('mydropdownRotation').value == i);
            var condition3 = (valuedropbox == 0 || valuedropbox == 5);
            if (condition1 && condition2 && condition3) {
                var dataXrotation = dataB[0].split(",");
                var dataYrotation = dataB[1].split(",");
                var RotateDegree = document.getElementById('RotationDegree').value;
                var temp3 = Math.PI / 180;

                for (var jj = 0; jj < dataXrotation.length; jj++) {
                    temp1 = dataXrotation[jj];
                    temp2 = dataYrotation[jj];

                    dataXrotation[jj] = temp1 * Math.cos(RotateDegree * temp3) - temp2 * Math.sin(RotateDegree * temp3);
                    dataYrotation[jj] = temp1 * Math.sin(RotateDegree * temp3) + temp2 * Math.cos(RotateDegree * temp3);
                }

                var dashFlag = "0";
                funGraph(ctx, "Rotation", '#B8860B', 3,  dataXrotation, dataYrotation, xRminn, xRmaxx, yRminn, yRmaxx, x0, y0, dxx, dyy, dashFlag, ShadeFlag);
                ctx.strokeStyle = colorforgraph;
            }

         }


         //draw implicit function
         if (document.getElementById("checkboximplicitfunction").checked) {
             var dataA = document.getElementById('implicitdata').value;
             if (dataA.indexOf(';;;') > -1) {
                 document.getElementById('graphingmodepoint').checked = true;
                 //alert('in draw');
                 var dataB = dataA.split(";;;");
                 var dataCX = dataB[0].split(",");
                 var dataCY = dataB[1].split(",");
                 var colorforgraph = 'blue';//graphcolor(i);
                 funGraph(ctx, "X" + i, colorforgraph, 6, dataCX, dataCY, xRminn, xRmaxx, yRminn, yRmaxx, x0, y0, dxx, dyy, dashFlag, ShadeFlag);
                 document.getElementById('graphingmodeline').checked = true;
             }
         }


         //Shade between two curves y1 and y2
         if(document.getElementById('CheckboxShading').checked == true){
             var equationNum1 =  document.getElementById('mydropdownShadingEquation1').value;
             var equationNum2 =  document.getElementById('mydropdownShadingEquation2').value;
             //alert('equationNum1.....'+equationNum1+'......equationNum2......'+equationNum2);

             var dataA = document.getElementById('GraphY'+equationNum1).value; 
             //alert('dataA.....'+dataA);
             if (dataA.indexOf(';;;') > -1) {
                 var dataB = dataA.split(";;;");
                 var dataCX = dataB[0].split(",");
                 var dataCY = dataB[1].split(",");
             }


             var dataA22 = document.getElementById('GraphY'+equationNum2).value; 
             //alert('dataA22.....'+dataA22);
             if (dataA22.indexOf(';;;') > -1) {
                 var dataB22 = dataA22.split(";;;");
                 var dataCX22 = dataB22[0].split(",");
                 var dataCY22 = dataB22[1].split(",");
             //alert('dataCX11111.....'+dataCX22.length);
             }

             var colorforgraph = 'lime';//graphcolor(i);

             var aa = FindValue(document.getElementById('AValueShading').value);
             var bb = FindValue(document.getElementById('BValueShading').value);
             //alert('dataCX22222....');
             for(var i=0; i<dataCX22.length; i++){
                 //alert('dataCX11111.....' + dataCX[i] + '....'+dataCX22[i] + '.....'+dataCY[i] + '......'+dataCY22[i]);

                 if(parseFloat(dataCX[i])>= aa && parseFloat(dataCX[i]) <= bb){
                     //alert('dataCX.....' + dataCX[i] + '....'+dataCX22[i] + '.....'+dataCY[i] + '......'+dataCY22[i]);
                     var dataXX = [dataCX[i], dataCX22[i]];
                     var dataYY = [dataCY[i], dataCY22[i]];

                     funGraph(ctx, "shading", colorforgraph, 6, dataXX, dataYY, xRminn, xRmaxx, yRminn, yRmaxx, x0, y0, dxx, dyy, dashFlag, ShadeFlag);
                }
            }
            
            document.getElementById('CheckboxShading').checked = false;
 
         }

         //Shade between two curves x1 and x2
         if(document.getElementById('CheckboxShadingbb').checked == true){
             var equationNum1 =  document.getElementById('mydropdownShadingEquation1bb').value;
             var equationNum2 =  document.getElementById('mydropdownShadingEquation2bb').value;
             //alert('equationNum1.....'+equationNum1+'......equationNum2......'+equationNum2);

             var dataA = document.getElementById('GraphY'+equationNum1).value; 
             //alert('dataA.....'+dataA);
             if (dataA.indexOf(';;;') > -1) {
                 var dataB = dataA.split(";;;");
                 var dataCX = dataB[0].split(",");
                 var dataCY = dataB[1].split(",");
             }


             var dataA22 = document.getElementById('GraphY'+equationNum2).value; 
             //alert('dataA22.....'+dataA22);
             if (dataA22.indexOf(';;;') > -1) {
                 var dataB22 = dataA22.split(";;;");
                 var dataCX22 = dataB22[0].split(",");
                 var dataCY22 = dataB22[1].split(",");
             //alert('dataCX11111.....'+dataCX22.length);
             }

             var colorforgraph = 'lime';//graphcolor(i);

             var aa = FindValue(document.getElementById('AValueShadingbb').value);
             var bb = FindValue(document.getElementById('BValueShadingbb').value);
             //alert('dataCX22222....');
             for(var i=0; i<dataCX22.length; i++){
                 //alert('dataCX11111.....' + dataCX[i] + '....'+dataCX22[i] + '.....'+dataCY[i] + '......'+dataCY22[i]);

                 if(parseFloat(dataCY[i])>= aa && parseFloat(dataCY[i]) <= bb){
                     //alert('dataCX.....' + dataCX[i] + '....'+dataCX22[i] + '.....'+dataCY[i] + '......'+dataCY22[i]);
                     var dataXX = [dataCX[i], dataCX22[i]];
                     var dataYY = [dataCY[i], dataCY22[i]];

                     funGraph(ctx, "shading", colorforgraph, 6, dataXX, dataYY, xRminn, xRmaxx, yRminn, yRmaxx, x0, y0, dxx, dyy, dashFlag, ShadeFlag);
                }
            }
            
            document.getElementById('CheckboxShadingbb').checked = false;
 
         }


         //Plot cartesian point
         var deltasymbol = String.fromCharCode(948);	
         var epsilonsymbol = String.fromCharCode(949);	
         var emdash = String.fromCharCode(8212);	
         
         if (document.getElementById("checkboxCartesianPoints").checked) {
             ctx.globalAlpha = 1;
             var pointSize = 6
                if (document.getElementById("pointsizeL").checked) {
                    var pointSize = 6;
                }
                else if (document.getElementById("pointsizeM").checked) {
                    var pointSize = 4;
                }
                else if (document.getElementById("pointsizeS").checked) {
                    var pointSize = 2;
                }
                ctx.textAlign="left"; 
                for (var i = 1; i <= 20; i++) {
                    var tt1 = "Point" + i + "X"; //id of x-coord.
                    var tt2 = "Point" + i + "Y"; //id of y-coord
                    var tt3 = "Point" + i + "statusclose";
                    var tt4 = "Point" + i + "statusopen";
                    var tt5 = "Point" + i;  //name of radio button

                    var coordX = document.getElementById("Point" + i + "X").value;
                    var coordY = document.getElementById("Point" + i + "Y").value;
                    var OpenClose = document.getElementById("Point" + i + "statusclose").checked;
                    var PlotStatus = document.getElementById('checkboxCartesianPoints').checked;

                    if (coordX != "" && coordY != "" && PlotStatus) {
                        var xt = FindValue(coordX);
                        var yt = FindValue(coordY);

                        var Label = '(' + coordX + ' , ' + coordY + ')';
                        if(document.getElementById('LabelPointCheckBox').checked==false){
                            var Label = '';
                        }

                        var xcoord = x0 + xt * dxx;
                        var ycoord = y0 - yt * dyy;

                        //close point
                        if (OpenClose) {
                            var radius = pointSize;
                            ctx.beginPath();
                            ctx.strokeStyle = "rgb(204, 0, 102)";
                            ctx.arc(xcoord, ycoord, radius, 0, 2 * Math.PI, true);
                            ctx.fillStyle = 'black';
                            ctx.fill();
                            ctx.fillStyle = 'green';
                            ctx.font="18px Georgia";
                            ctx.fillText(Label, xcoord , ycoord+30);
                            ctx.stroke();
                            ctx.closePath();                     
                        }
                        else {//open point
                           //alert('i = '+ i + '.........open point = ' + OpenClose); 
                           var radius = pointSize; // * dxx;
                           //alert('i = '+ i + '.........open point = ' + OpenClose + '......radius = ' + radius); 
                            ctx.beginPath();
                            ctx.strokeStyle = "rgb(0, 0, 0)";
                            ctx.arc(xcoord, ycoord, radius, 0, 2 * Math.PI, true);
                            ctx.fillStyle = 'white';
                            ctx.fill();
                            ctx.fillStyle = 'green';
                            ctx.font="18px Georgia";
                            ctx.fillText(Label, xcoord, ycoord+30);
                            ctx.stroke();
                            ctx.closePath();
                           
                        }


                    }

                }
        }

        
        //graphing circle
        if(document.getElementById("checkboxcircle").checked){
            for (var i = 1; i <= 10; i++) {
                var pcc1 = document.getElementById("TextBoxCircleA"+i).value; ;
                var pcc2 = document.getElementById("TextBoxCircleB"+i).value; ;
                var pcc3 = document.getElementById("TextBoxCircleC"+i).value; ;
                var pcc4 = document.getElementById("checkboxXsquared2"+i).checked;
                var pcc5 = document.getElementById("GraphCircle" + i).value; ;
                //alert('pcc1...' + pcc1);
                //alert('pcc2...' + pcc2);
                //alert('pcc3...' + pcc3);
                //alert('pcc4...' + pcc4);
                //alert('pcc5...' + pcc5);
                
                if (pcc1 != "" && pcc2 != "" && pcc3 != "" && pcc4) {
                    var data1 = pcc5; 
                    var data2 = data1.split(";;;");
                    var data3X = data2[0].split(",");
                    var data3Y = data2[1].split(",");
                    var dashFlag = "0";
                    var colorforgraph = graphcolor(i);
                    funGraph(ctx, "c1", colorforgraph, 3, data3X, data3Y, xRminn, xRmaxx, yRminn, yRmaxx, x0, y0, dxx, dyy, dashFlag, '0');
                
                    var centerX = document.getElementById("GraphCircleCenterX" + i).value;
                    var centerY = document.getElementById("GraphCircleCenterY" + i).value;                
                    var xt = FindValue(centerX);
                    var yt = FindValue(centerY);

                    var Label = '(' + centerX + ' , ' + centerY + ')';

                    var xcoord = x0 + xt * dxx;
                    var ycoord = y0 - yt * dyy;
                    var radius = 6;
                    ctx.beginPath();
                    ctx.strokeStyle = "rgb(204, 0, 102)";
                    ctx.arc(xcoord, ycoord, radius, 0, 2 * Math.PI, true);
                    ctx.fillStyle = 'black';
                    ctx.fill();
                    ctx.fillStyle = 'green';
                    ctx.fillText(Label, xcoord + 25, ycoord);
                    ctx.stroke();
                    ctx.closePath();
               
                }

             }            
        }

        //graphing ellipse/hyperbola
        if (document.getElementById("checkboxconic1").checked) {
            for (var i = 1; i <= 4; i++) {
                var pkc1 = "TextBoxconicAAA" + i; //numerator 1
                var pkc2 = "TextBoxconicBBB" + i; //plus or minus
                var pkc3 = "TextBoxconicCCC" + i; //numerator 2
                var pkc4 = "TextBoxconicDDD" + i; //denominator2
                var pkc5 = "TextBoxconicEEE" + i; //denominator 1
                var pkc6 = "TextBoxconicFFF" + i; //rightside
                var pkc7 = "checkboxXsquared3" + i; //checkbox   

                var numerator1 = document.getElementById(pkc1).value;
                var plusminus = document.getElementById(pkc2).value;  //a squared
                var numerator2 = document.getElementById(pkc3).value;
                var denominator2 = document.getElementById(pkc4).value;
                var denominator1 = document.getElementById(pkc5).value; //b squared
                var rightside = document.getElementById(pkc6).value;
                var checkboxi = document.getElementById(pkc7).checked;
                var dataconic = document.getElementById("GraphConic" + i).value;   

                var colorforgraph =  graphcolor(i);
                //////////////////////////
                //             tgg = tgg + " ;;; " + centerX + " ;;; " + centerY
                //                 + " ;;; " + (centerX + aa) + " ;;; " + (centerY) +
                //                 +" ;;; " + (centerX - aa) + " ;;; " + (centerY) +
                //                 +" ;;; " + (centerX + cc) + " ;;; " + (centerY) +
                //                 +" ;;; " + (centerX - cc) + " ;;; " + (centerY);


                if (numerator1.trim() != '' && plusminus.trim() != '' && numerator2.trim() != '' && denominator1.trim() != '' && denominator2.trim() != '' && rightside.trim() != '' && checkboxi) {
                    var data1 = dataconic; 
                    var data2 = data1.split(";;;");
                    //alert('data2......'+data2.length);

                    var data3X = data2[0].split(",");
                    var data3Y = data2[1].split(",");
                    var dashFlag = "0";
                    var colorforgraph = graphcolor(i);
                    funGraph(ctx, "c1", colorforgraph, 3, data3X, data3Y, xRminn, xRmaxx, yRminn, yRmaxx, x0, y0, dxx, dyy, dashFlag, '0');

                    //plot center of conic
                    var centerX = data2[2];//document.getElementById("GraphConicCenterX" + i).value;
                    var centerY = data2[3];//document.getElementById("GraphConicCenterY" + i).value;                
                    var xt = FindValue(centerX);
                    var yt = FindValue(centerY);
                    var Label = '(' + centerX + ' , ' + centerY + ')';
                    var xcoord = x0 + xt * dxx;
                    var ycoord = y0 - yt * dyy;
                    var radius = 3;
                    ctx.beginPath();
                    ctx.strokeStyle = "rgb(204, 0, 102)";
                    ctx.arc(xcoord, ycoord, radius, 0, 2 * Math.PI, true);
                    ctx.fillStyle = 'black';
                    ctx.fill();
                    ctx.fillStyle = 'green';
                    ctx.fillText(Label, xcoord + 5, ycoord-5);
                    ctx.textAlign="left"; 
                    ctx.font="16px Georgia";
                    ctx.fillText('Center: '+Label, 20, 30);
                    ctx.font="12px Georgia";
                    ctx.stroke();
                    ctx.closePath();

                    //plot vertex 1 of conic
                    var centerX = data2[4];//document.getElementById("GraphConicVertexX1" + i).value;
                    var centerY = data2[5];//document.getElementById("GraphConicVertexY1" + i).value;                
                    var xt = FindValue(centerX);
                    var yt = FindValue(centerY);
                    centerX = Math.round(centerX * 1000000) / 1000000;
                    centerY = Math.round(centerY * 1000000) / 1000000;
                    var Label = '(' + centerX + ' , ' + centerY + ')';
                    var xcoord = x0 + xt * dxx;
                    var ycoord = y0 - yt * dyy;
                    var radius = 3;
                    ctx.beginPath();
                    ctx.strokeStyle = "rgb(204, 0, 102)";
                    ctx.arc(xcoord, ycoord, radius, 0, 2 * Math.PI, true);
                    ctx.fillStyle = 'black';
                    ctx.fill();
                    ctx.fillStyle = 'green';
                    ctx.fillText(Label, xcoord, ycoord-5);
                    ctx.font="16px Georgia";
                    ctx.fillText('Vertex 1: '+ Label, 20, 50);
                    ctx.font="12px Georgia";
                    ctx.stroke();
                    ctx.closePath();

                    //plot vertex 2 of conic
                    var centerX = data2[6];//document.getElementById("GraphConicVertexX2" + i).value;
                    var centerY = data2[7];//document.getElementById("GraphConicVertexY2" + i).value;                
                    var xt = FindValue(centerX);
                    var yt = FindValue(centerY);
                    centerX = Math.round(centerX * 1000000) / 1000000;
                    centerY = Math.round(centerY * 1000000) / 1000000;
                    var Label = '(' + centerX + ' , ' + centerY + ')';
                    var xcoord = x0 + xt * dxx;
                    var ycoord = y0 - yt * dyy;
                    var radius = 3;
                    ctx.beginPath();
                    ctx.strokeStyle = "rgb(204, 0, 102)";
                    ctx.arc(xcoord, ycoord, radius, 0, 2 * Math.PI, true);
                    ctx.fillStyle = 'black';
                    ctx.fill();
                    ctx.fillStyle = 'green';
                    ctx.fillText(Label, xcoord - 10, ycoord-5);
                    ctx.font="16px Georgia";
                    ctx.fillText('Vertex 2: '+ Label, 20, 70);
                    ctx.font="12px Georgia";
                    ctx.stroke();
                    ctx.closePath();



                    //plot focus 1 of conic
                    var centerX = data2[8];//document.getElementById("GraphConicFocusX1" + i).value;
                    var centerY = data2[9];//document.getElementById("GraphConicFocusY1" + i).value;                
                    var xt = FindValue(centerX);
                    var yt = FindValue(centerY);
                    centerX = Math.round(centerX * 1000000) / 1000000;
                    centerY = Math.round(centerY * 1000000) / 1000000;
                    var Label = '(' + centerX + ' , ' + centerY + ')';
                    var xcoord = x0 + xt * dxx;
                    var ycoord = y0 - yt * dyy;
                    var radius = 3;
                    ctx.beginPath();
                    ctx.strokeStyle = "rgb(204, 0, 102)";
                    ctx.arc(xcoord, ycoord, radius, 0, 2 * Math.PI, true);
                    ctx.fillStyle = 'black';
                    ctx.fill();
                    ctx.fillStyle = 'green';
                    ctx.fillText(Label, xcoord + 5, ycoord+15);
                    ctx.font="16px Georgia";
                    ctx.fillText('Focus 1: '+ Label, 20, 90);
                    ctx.font="12px Georgia";
                    ctx.stroke();
                    ctx.closePath();

                    //plot focus 2 of conic
                    var centerX = data2[10];//document.getElementById("GraphConicFocusX2" + i).value;
                    var centerY = data2[11];//document.getElementById("GraphConicFocusY2" + i).value;                
                    var xt = FindValue(centerX);
                    var yt = FindValue(centerY);
                    centerX = Math.round(centerX * 1000000) / 1000000;
                    centerY = Math.round(centerY * 1000000) / 1000000;
                    var Label = '(' + centerX + ' , ' + centerY + ')';
                    var xcoord = x0 + xt * dxx;
                    var ycoord = y0 - yt * dyy;
                    var radius = 3;
                    ctx.beginPath();
                    ctx.strokeStyle = "rgb(204, 0, 102)";
                    ctx.arc(xcoord, ycoord, radius, 0, 2 * Math.PI, true);
                    ctx.fillStyle = 'black';
                    ctx.fill();
                    ctx.fillStyle = 'green';
                    ctx.fillText(Label, xcoord + 5, ycoord+15);
                    ctx.font="16px Georgia";
                    ctx.fillText('Focus 2: '+ Label, 20, 110);
                    ctx.font="12px Georgia";
                    ctx.stroke();
                    ctx.closePath();

                    //show values of a, b, c
                    var Label = 'a = '+data2[12] ;
                    ctx.fillStyle = 'green';
                    ctx.font="16px Georgia";
                    ctx.fillText(Label, 20, 130);

                    var Label = 'b = '+data2[13]  ;
                    ctx.fillStyle = 'green';
                    ctx.font="16px Georgia";
                    ctx.fillText(Label, 20, 150);

                    var Label = 'c = '+data2[14] ;
                    ctx.fillStyle = 'green';
                    ctx.font="16px Georgia";
                    ctx.fillText(Label, 20, 170);
                    
                
                
                }
            }

        }


        //for parametric equations
        if (document.getElementById("ParametricEquationsOnOff").checked) {
            for (var i = 1; i <= 10; i++) {
                var tt1 = document.getElementById("ParametricX"+i).value ;
                var tt2 = document.getElementById("ParametricY"+i).value
                var tt3 = document.getElementById('checkboxParametric'+i).checked;
                if (tt1 != "" && tt2 != "" && tt3) {
                    var data1 = document.getElementById('ParametricSet'+i).value; //data for Graph X4
                    var data2 = data1.split(";;;");
                    var data3X = data2[0].split(",");
                    var data3Y = data2[1].split(",");
                    var dashFlag = "0";
                    var colorforgraph = graphcolor(i);
                    funGraph(ctx, "X1Y1", colorforgraph, 3, data3X, data3Y, xRminn, xRmaxx, yRminn, yRmaxx, x0, y0, dxx, dyy, dashFlag, '0');
                }
            }
        }



        //for polar equations
        if (document.getElementById("PolarEquationsOnOff").checked) {
            for (var i = 1; i <= 20; i++) {
                var pp = document.getElementById("checkboxPolarEquation" + i).checked;
                if (document.getElementById("PolarEquation"+i).value != "" && pp) {
                    var data1 = document.getElementById('PolarSet'+i).value; 
                    var data2 = data1.split(";;;");
                    var data3X = data2[0].split(",");
                    var data3Y = data2[1].split(",");
                    var dashFlag = "0";
                    var colorforgraph = graphcolor(i);
                    funGraph(ctx, "r1", colorforgraph, 3, data3X, data3Y, xRminn, xRmaxx, yRminn, yRmaxx, x0, y0, dxx, dyy, dashFlag, '0');
                }

             }
        }



        //Plot Point (polar)
        if (document.getElementById("checkboxPolarPoints").checked) {
            for (var i = 1; i <= 20; i++) {
                var pp1 = "PointPolar"+i+"X";
                var pp2 = "PointPolar"+i+"Y";

                if (document.getElementById(pp1).value != "" && document.getElementById(pp2).value != "") {
                    var rVal = FindValue(document.getElementById(pp1).value);
                    var thetaVal = FindValue(document.getElementById(pp2).value);

                    //check whether theta is in degrees or radians
                    if (document.getElementById('RadianOrDegreeMode').value == 'degree mode') {
                        thetaVal = thetaVal * Math.PI / 180;
                    }
                    
                    var xcoord = x0 + rVal * Math.cos(thetaVal) * dxx;
                    var ycoord = y0 - rVal * Math.sin(thetaVal) * dyy;
                    var Label = '(' + document.getElementById(pp1).value + ' , ' + document.getElementById(pp2).value + ')';
                    var radius = 6; // * dxx;
                    ctx.beginPath();//alert('i111='+i);
                    ctx.strokeStyle = "rgb(0, 0, 0)";
                    ctx.arc(xcoord, ycoord, radius, 0, 2 * Math.PI, true);
                    ctx.fillStyle = 'orange';
                    ctx.fill();
                    ctx.fillStyle = 'green';
                    ctx.font = "16px Georgia";
                    ctx.font = "12px Georgia";
                    ctx.stroke();
                    ctx.closePath();

                    if (document.getElementById('PolarPointLabelChecked').checked == true) { 
                        ctx.fillText(Label, xcoord + 25, ycoord - 15);
                    }
                    
                }

                ///alert('i44='+i);
            }
        }
 
         //Draw Vector
         var deltasymbol = String.fromCharCode(948);	
         var epsilonsymbol = String.fromCharCode(949);	
         var emdash = String.fromCharCode(8212);	
 
          
         if (document.getElementById("checkboxDrawVector").checked) {               
                if (document.getElementById("vectorsizeL").checked) {
                    var vectorSize = 6;
                    var radius = 10;
                }
                else if (document.getElementById("vectorsizeM").checked) {
                    var vectorSize = 4;
                    var radius = 14;
                }
                else if (document.getElementById("vectorsizeS").checked) {
                    var vectorSize = 2;
                    var radius = 18;
                }
                ctx.textAlign="left"; 
                for (var i = 1; i <= 10; i++) {
                    var colorforgraph = graphcolor(i);
                    var tt1 = "InitialPointX" + i; //id of x-coord of initial point of vector.
                    var tt2 = "InitialPointY" + i; //id of y-coord of initial point of vector.
                    var tt3 = "TerminalPointX" + i; //id of x-coord of terminal point of vector.
                    var tt4 = "TerminalPointY" + i; //id of y-coord of terminal point of vector.

                    var coordX1 = document.getElementById("InitialPointX" + i).value;
                    var coordY1 = document.getElementById("InitialPointY" + i).value;
                    var coordX2 = document.getElementById("TerminalPointX" + i).value;
                    var coordY2 = document.getElementById("TerminalPointY" + i).value;
                    
                    if (coordX1.trim() != '' && coordY1.trim() != '' && coordX2.trim() != '' && coordY2.trim() != '') {
                        var xt1 = FindValue(coordX1);
                        var yt1 = FindValue(coordY1);
                        var xt2 = FindValue(coordX2);
                        var yt2 = FindValue(coordY2);
                        var xcoord1 = x0 + xt1 * dxx;
                        var ycoord1 = y0 - yt1 * dyy;
                        var xcoord2 = x0 + xt2 * dxx;
                        var ycoord2 = y0 - yt2 * dyy;
                        if (document.getElementById("LabelDrawVectorCheckBox").checked) {
                            var Label1 = '(' + coordX1 + ' , ' + coordY1 + ')';
                            var Label2 = '(' + coordX2 + ' , ' + coordY2 + ')';
                            ctx.fillStyle = colorforgraph;
                            ctx.font="18px Georgia";
                            ctx.fillText(Label1, xcoord1+10, ycoord1+10);
                            ctx.fillText(Label2, xcoord2+10, ycoord2+10);
                        }

                        //alert('in vector'); 
                        drawVector(xcoord1, ycoord1, xcoord2, ycoord2, vectorSize, colorforgraph, radius);
                    }

                }
        }        
         
         
 
        //for tracing feature     
            var coordX = document.getElementById("TracePointX").value;
            var coordY = document.getElementById("TracePointY").value;
            if (coordX != "" && coordY != "") {    
                ctx.textAlign="left";             
                var xt = FindValue(coordX);
                var yt = FindValue(coordY);
                var Label = '(' + xt + ' , ' + yt + ')';
                var xcoord = x0 + xt * dxx;
                var ycoord = y0 - yt * dyy;
                var radius = 4;
                ctx.beginPath();
                ctx.strokeStyle = "rgb(204, 0, 102)";
                ctx.arc(xcoord, ycoord, radius, 0, 2 * Math.PI, true);
                ctx.fillStyle = 'black';
                ctx.fill();
                ctx.fillStyle = 'green';
                ctx.font="16px Georgia";
                ctx.fillText(Label, xcoord + 25, ycoord);
                ctx.font="12px Georgia";
                ctx.stroke();
                ctx.closePath();
             }        

        //for tracing feature 2    
            var coordXArray = document.getElementById("TracePointX2").value;
            var coordYArray = document.getElementById("TracePointY2").value;
            if (coordXArray.trim() != "" && coordYArray.trim() != "") {
                ctx.textAlign="left"; 
                document.getElementById("pointsizeS").checked = true;
                coordXArray = coordXArray.substring(1);
                coordYArray = coordYArray.substring(1);
                if (coordXArray.indexOf(';') > -1 && coordYArray.indexOf(';') > -1) {
                    var coordXArray2 = coordXArray.split(';');
                    var coordYArray2 = coordYArray.split(';');
                }
                else {
                    var coordXArray2 = [coordXArray];
                    var coordYArray2 = [coordYArray];
                }

                for (var ik = 0; ik < coordXArray2.length; ik++) {
                    var coordX = coordXArray2[ik];
                    var coordY = coordYArray2[ik];
                    var xt = FindValue(coordX);
                    var yt = FindValue(coordY);
                    var Label = '(' + coordX + ' , ' + coordY + ')';
                    var xcoord = x0 + xt * dxx;
                    var ycoord = y0 - yt * dyy;
                    var radius = 4;
                    ctx.beginPath();
                    ctx.strokeStyle = "rgb(204, 0, 102)";
                    ctx.arc(xcoord, ycoord, radius, 0, 2 * Math.PI, true);
                    //ctx.fillStyle = 'black';
                    ctx.fill();
                    ctx.fillStyle = 'green';
                    ctx.font = "18px Georgia";
                    ctx.stroke();
                    ctx.closePath();
                    ctx.fillText(Label, xcoord+5, ycoord+5);

                }
            }
    }


 
 /*------------------------------------------------------------------------------
* NAME       : funGraph
* PURPOSE    : Draws graph on canvas
* PARAMETERS :   
* RETURNS    :  
*----------------------------------------------------------------------------*/    
    function funGraph(ctx, func, color, thick, dataX, dataY, xRminn, xRmaxx, yRminn, yRmaxx, x0, y0, dxx, dyy, dashedFlag, shadeflag) {
        if(document.getElementById('AllGraphSameColor').checked){
            color = 'blue';
            var val = document.getElementById('mydropdownreflection77').value;
            if(val > 1){
                color = graphcolor(val);
            }

        }

        ctx.beginPath();
        ctx.lineWidth = document.getElementById('mydropdownlinethickness').value;//thick;
        ctx.strokeStyle = color;
        ctx.globalAlpha = 1; //transparency level
        var setLineDashError = false;
        if (dashedFlag == "1") {
            try{
                ctx.setLineDash([5, 10]); //[length of segment, length of gap]
            }    
            catch(err) {
                setLineDashError = true;
                var text = "There was an error on this page.\n\n";
            }
        }

        //alert('setLineDashError='+setLineDashError);

        //point mode
        if (document.getElementById('graphingmodepoint').checked) {
            for (var i = 0; i < dataX.length; i++) {
                //xx = dx * i;
                xx = x0 + parseFloat(dataX[i]) * dxx;
                //yy = scale * func(xx / scale);
                yy = y0 - parseFloat(dataY[i]) * dyy;

                yy2 = y0 - parseFloat(dataY[i + 1]) * dyy;

                var xcoord = xx;  //x0 + xt * dxx;
                var ycoord = yy;  //y0 - yt * dyy;
                 var radius = document.getElementById('mydropdownlinethickness').value;//thick;
                 ctx.beginPath();
                 ctx.arc(xcoord, ycoord, radius, 0, 2 * Math.PI, true);
                 ctx.fill();        
                 ctx.fillStyle = color;
                 ctx.closePath();

           }

            return;
        }

        ctx.shadowBlur = 0;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        //ctx.stroke();
        //alert('dashedFlag...' + dashedFlag);
        //draw solid graph
        //var maxArrY = Math.max.apply( Math, dataY );
        if (dashedFlag != "1") { 
            var xt =   x0 + parseFloat(dataX[0]) * dxx;   
            var yt =   y0 - parseFloat(dataY[0]) * dyy;      
            for (var i = 1; i < dataX.length; i++) {
                xx = x0 + parseFloat(dataX[i]) * dxx;
                yy = y0 - parseFloat(dataY[i]) * dyy;                   
                ctx.beginPath();
                ctx.moveTo(xt, yt);
                ctx.lineTo(xx, yy);
                ctx.stroke();
                ctx.closePath();
                xt = xx;
                yt = yy;
            }
        }
        else if (dashedFlag == "1" && setLineDashError == false) {            
            //Graph is dashed and ctx.setLineDash is working this browser
            for (var i = 0; i < dataX.length; i++) {
                //xx = dx * i;
                xx = x0 + parseFloat(dataX[i]) * dxx;
                //yy = scale * func(xx / scale);
                yy = y0 - parseFloat(dataY[i]) * dyy;

                yy2 = y0 - parseFloat(dataY[i + 1]) * dyy;

                //document.write("dataX = " + dataX[i] + " ;;;;; dataY = " + dataY[i]  + "<br>");

                //document.write("x0 = " + x0 + " xx = " + xx + ";;;  y0 = " + y0 + " yy = " + yy  + "<br>" + "<br>")

                if (i == 0) {
                    ctx.moveTo(xx, yy);
                }
                else {
                    if (isNaN(yy) == false && isNaN(yy2) == false) {
                        if (i % 2 == 0) {
                            ctx.lineTo(xx, yy);
                        }
                    }
                    else if (isNaN(yy) == false && isNaN(yy2) == true) {
                        ctx.lineTo(xx, yy);
                        ctx.stroke();
                        ctx.closePath();
                    }
                    else if (isNaN(yy) == true && isNaN(yy2) == false) {
                        ctx.beginPath();
                        ctx.moveTo(xx, yy2);
                    }
                    else {
                        //do nothing
                    }

                }

            }

        }
        else if (dashedFlag == "1" && setLineDashError == true) {
        
            //Graph is dashed but ctx.setLineDash is not working this browser
            for (var i = 0; i < dataX.length; i++) {
                xx = x0 + parseFloat(dataX[i]) * dxx;
                yy = y0 - parseFloat(dataY[i]) * dyy;

                var xx2 = x0 + parseFloat(dataX[i + 1]) * dxx;
                var yy2 = y0 - parseFloat(dataY[i + 1]) * dyy;

                if (i % 2 == 0) {
                    ctx.beginPath();
                    ctx.moveTo(xx, yy);
                    ctx.lineTo(xx2, yy2);
                    ctx.stroke();
                    ctx.closePath();
                }
                else {
                    //do nothing

                }


            }
        }


        ///////////////////  SHADING  //////////////////////////////
        if (shadeflag == '0' || document.getElementById("TraceON").checked == true) { return; };

        //shading for '<' and '<=' for graphs Y1, Y2, Y3, Y4
            try{
                ctx.setLineDash([5, 0]); //[length of segment, length of gap]
            }    
            catch(err) {
                var text = "There was an error on this page.\n\n";
            }
        
        ctx.globalAlpha = 0.1; //transparency level

        if (parseFloat(shadeflag) >= 1 && parseFloat(shadeflag) <=2 ) {// < or <=  for graphs with "y" on left side
            ctx.globalAlpha = 0.1;
            for (var i = 0; i < dataX.length; i++) {
                xx = x0 + parseFloat(dataX[i]) * dxx;
                yy = y0 - parseFloat(dataY[i]) * dyy;
                var top = yy;
                if(top > 540){top = 540};
                if(top < 0){top = 0};
                var bottom = 540;
                ctx.beginPath();
                ctx.moveTo(xx, top);
                ctx.lineTo(xx, bottom);   
                ctx.closePath(); // complete custom shape

                // create radial gradient
                //var grd = ctx.createRadialGradient(238, 50, 10, 238, 50, 200);
                //grd.addColorStop(0, color); // light blue
                //grd.addColorStop(1, color); // dark blue
                //ctx.fillStyle = grd;
                //ctx.fill();

                // add stroke
                ctx.lineWidth = 4;
                ctx.strokeStyle = color;
                ctx.stroke();
                ctx.restore();        
            }
        }
        else if (parseFloat(shadeflag) >= 3 && parseFloat(shadeflag) <=4){ // > or >=  for graphs with "y" on left side
            ctx.globalAlpha = 0.1;
            for (var i = 0; i < dataX.length; i++) {
                xx = x0 + parseFloat(dataX[i]) * dxx;
                yy = y0 - parseFloat(dataY[i]) * dyy;
                var top = yy;
                if(top > 540){top = 540};
                if(top < 0){top = 0};
                var bottom = 0;
                ctx.beginPath();
                ctx.moveTo(xx, top);
                ctx.lineTo(xx, bottom);   
                ctx.closePath(); // complete custom shape

                // create radial gradient
                //var grd = ctx.createRadialGradient(238, 50, 10, 238, 50, 200);
                //grd.addColorStop(0, color); // light blue
                //grd.addColorStop(1, color); // dark blue
                //ctx.fillStyle = grd;
                //ctx.fill();

                // add stroke
                ctx.lineWidth = 4;
                ctx.strokeStyle = color;
                ctx.stroke();
                ctx.restore();        
            }
        }

        else if (parseFloat(shadeflag) >= 6 && parseFloat(shadeflag) <=7 ) {// < or <=  for graphs with "x" on left side
            ctx.globalAlpha = 0.1;
            for (var i = 0; i < dataY.length; i++) {
                xx = x0 + parseFloat(dataX[i]) * dxx;
                yy = y0 - parseFloat(dataY[i]) * dyy;
                var right = 0;
                var left = xx;
                if(left > 540){left = 540};
                if(left < 0){left = 0};
                ctx.beginPath();
                ctx.moveTo(right, yy);
                ctx.lineTo(left, yy);     
                ctx.closePath(); // complete custom shape

                // create radial gradient
                //var grd = ctx.createRadialGradient(238, 50, 10, 238, 50, 200);
                //grd.addColorStop(0, color); // light blue
                //grd.addColorStop(1, color); // dark blue
                //ctx.fillStyle = grd;
                //ctx.fill();

                // add stroke
                ctx.lineWidth = 4;
                ctx.strokeStyle = color;
                ctx.stroke();
                ctx.restore();        
            }
        }

        else if (parseFloat(shadeflag) >= 8 && parseFloat(shadeflag) <= 9) {// > or >=  for graphs with "x" on left side
            ctx.globalAlpha = 0.1;
            for (var i = 0; i < dataY.length; i++) {
                xx = x0 + parseFloat(dataX[i]) * dxx;
                yy = y0 - parseFloat(dataY[i]) * dyy;
                var right = 540;
                var left = xx;
                if(left > 540){left = 540};
                if(left < 0){left = 0};
                ctx.beginPath();
                ctx.moveTo(right, yy);
                ctx.lineTo(left, yy);   
                ctx.closePath(); // complete custom shape

                // create radial gradient
                //var grd = ctx.createRadialGradient(238, 50, 10, 238, 50, 200);
                //grd.addColorStop(0, color); // light blue
                //grd.addColorStop(1, color); // dark blue
                //ctx.fillStyle = grd;
                //ctx.fill();

                // add stroke
                ctx.lineWidth = 4;
                ctx.strokeStyle = color;
                ctx.stroke();
                ctx.restore();        
            }
        }

    return;

    }


 /*------------------------------------------------------------------------------
* NAME       : showAxes
* PURPOSE    : Draws x-axis and y-axis on canvas
* PARAMETERS :   
* RETURNS    :  
*----------------------------------------------------------------------------*/    
    function showAxes(ctx, dxx, dyy, xRminn, xRmaxx, yRminn, yRmaxx, x0, y0) {
        var symbolPI = String.fromCharCode(960);
        var emdash = String.fromCharCode(8212);
        //alert("dxx = " + dxx + " x0 = " + x0 + " dyy =  " + dyy + " ; y0 = " + y0);
        // horizontal grid lines
        var height = canvas.height;
        var width = canvas.width;   //do 250 divided by gridPixelSizeX
        var gridPixelSizeX = gap; //dyy * HorGrid;  //the default grid box dimensions or the gap that the lines will be drawn vertically and horizontally.
        var gridPixelSizeY = gap; //dxx * VertGrid;

        CenterCanvasX = canvas.width / 2;
        CenterCanvasY = canvas.height / 2;

        var CenterX = (xRmaxx + xRminn) / 2;
        var CenterY = (yRmaxx + yRminn) / 2;
        dxx = canvas.width / (xRmaxx - xRminn);
        dyy = canvas.width / (yRmaxx - yRminn);


        var gap = 18;
        var NumberOfGridLines = canvas.width / gap;
        var FactorX = (xRmaxx - xRminn) / NumberOfGridLines;
        var FactorY = (yRmaxx - yRminn) / NumberOfGridLines;


        var context = canvas.getContext("2d");
        context.fillStyle = "black";
        context.font = "12px Arial";
        context.textAlign = "center";
        //context.fillText("(" + CenterX + ", " + CenterY + ")", 260, 50);
        //context.fillText("CCCCC", CenterCanvasX, CenterCanvasY);



        //draw horizontal gridlines 
        //horizontal text label
        context.fillStyle = "black";
        context.font = "12px Arial";
        context.textAlign = "right"

        //where to place y-axis labels
        var LabelLocationY = 530;
        if (xRminn < 0 && xRmaxx > 0) {
            LabelLocationY = x0 - 5;
        }


        //var CoordinateMode = "Cartesian";
        var CoordinateMode = "Polar";
        tt = 5;
        for (var i = 0; i < NumberOfGridLines; i++) {
            var val1 = i * gap;
            if (document.getElementById('CartesianSystemIndicator').value == 1) {
                ctx.beginPath();
                ctx.strokeStyle = "rgb(128,128,128)";
                ctx.moveTo(0, val1); ctx.lineTo(canvas.width, val1);  //draw horizontal gridlines 
                ctx.lineWidth = 0.2;
                ctx.stroke();
                ctx.closePath();
            }

            if (i % tt == 0) {
                if (document.getElementById('CartesianSystemIndicator').value == 1) {
                    ctx.beginPath();
                    ctx.strokeStyle = "rgb(128,128,130)";
                    ctx.moveTo(0, val1); ctx.lineTo(canvas.width, val1);  //draw horizontal gridlines 
                    ctx.lineWidth = 0.2;
                    ctx.closePath();
                    ctx.stroke();
                }

                ctx.beginPath();
                ctx.strokeStyle = "rgb(128,128,128)";
                if(document.getElementById('labelyaxisreal').checked == false){
                    ctx.strokeStyle = "white";
                };
                ctx.moveTo(x0 - 5, val1); ctx.lineTo(x0 + 5, val1);  //draw horizontal tick marks 
                ctx.lineWidth = 0.01;
                ctx.closePath();
                ctx.stroke();


                var TextLabelY = yRmaxx - i * FactorY;
                if (Math.abs(TextLabelY) > 100000000) {
                    TextLabelY = TextLabelY.toExponential();
                    if (Math.abs(TextLabelY) > Math.pow(10, 20)) {
                        var str = (TextLabelY.split("e"));
                        var str2 = Math.round(parseFloat(str[0]) * 100) / 100;
                        TextLabelY = str2 + "e" + str[1];
                    }

                }
                else if (Math.abs(TextLabelY) < 1 && Math.abs(TextLabelY) >= 0.0001) {
                    TextLabelY = Math.round(TextLabelY * 10000) / 10000;
                }
                else if (Math.abs(TextLabelY) < 0.0001) {
                    TextLabelY = TextLabelY.toExponential();
                    var str = (TextLabelY.split("e"));
                    var str2 = Math.round(parseFloat(str[0]) * 1000) / 1000;
                    TextLabelY = str2 + "e" + str[1];
                }


                if (TextLabelY != 0) {
                    if ((TextLabelY.toString()).length > 12) {
                        TextLabelY = Math.round(TextLabelY * 10000000000) / 10000000000;
                    }

                    if (document.getElementById('labelyaxisreal').checked) {
                        context.fillText(TextLabelY, LabelLocationY, val1 + 4);
                    }
                }



            }
            
         }
 




        //draw vertical gridlines 

        context.fillStyle = "black";
        context.font = "12px Arial";
        context.textAlign = "center"

        //where to place x-axis labels
        var LabelLocationX = 535;
        if (yRminn < 0 && yRmaxx > 0) {
            LabelLocationX = y0 + 14;
        }


        for (var i = 0; i < NumberOfGridLines; i++) {
            var val1 = i * gap;
            if (document.getElementById('CartesianSystemIndicator').value == 1) {
                ctx.beginPath();
                ctx.strokeStyle = "rgb(128,128,128)";
                ctx.moveTo(val1, 0); ctx.lineTo(val1, canvas.height);  //draw vertical gridlines 
                ctx.lineWidth = 0.2;
                ctx.closePath();
                ctx.stroke();
            }



            if (i % tt == 0) {
                if (document.getElementById('CartesianSystemIndicator').value == 1) {
                    ctx.beginPath();
                    ctx.strokeStyle = "rgb(128,128,130)";
                    ctx.moveTo(val1, 0); ctx.lineTo(val1, canvas.height);  //draw vertical gridlines 
                    ctx.lineWidth = 0.2;
                    ctx.closePath();
                    ctx.stroke();
                }

                ctx.beginPath();
                ctx.strokeStyle = "rgb(128,128,128)";
                ctx.moveTo(val1, y0 + 5); ctx.lineTo(val1, y0 - 5);  //draw vertical tick marks
                ctx.lineWidth = 0.01;
                ctx.closePath();
                ctx.stroke();


                var TextLabelX = (xRminn + i * FactorX)
                
                if (Math.abs(TextLabelX) > 100000000) {
                    TextLabelX = TextLabelX.toExponential();
                    if (Math.abs(TextLabelX) > Math.pow(10, 20)) {
                        var str = (TextLabelX.split("e"));
                        var str2 = Math.round(parseFloat(str[0]) * 100) / 100;
                        TextLabelX = str2 + "e" + str[1];
                    }
                }
                else if (Math.abs(TextLabelX) < 1 && Math.abs(TextLabelX) >= 0.0001) {
                    TextLabelX = Math.round(TextLabelX * 10000) / 10000;
                }
                else if (Math.abs(TextLabelX) < 0.0001) {
                    TextLabelX = TextLabelX.toExponential();
                    var str = (TextLabelX.split("e"));
                    var str2 = Math.round(parseFloat(str[0]) * 1000) / 1000;
                    TextLabelX = str2 + "e" + str[1];

                }


                if (TextLabelX != 0) {
                    if ((TextLabelX.toString()).length > 12) {
                        TextLabelX = Math.round(TextLabelX * 10000000000) / 10000000000;
                    }

                    if (document.getElementById('labelxaxisreal').checked) {
                        context.fillText(TextLabelX, val1, LabelLocationX);
                    }
                }

            }

        }

         //label x-axis with multiples of PI
        if (!document.getElementById('labelxaxispi').checked) { 
            var stepsize3 = document.getElementById('XaxisPiStepsize').value;         
            var stepsize2 = ProcessInput(document.getElementById('XaxisPiStepsize').value);
            var stepsize = FindValue(stepsize2);
            var startPi = parseInt(xRminn / stepsize);
            var EndPi = parseInt(xRmaxx / stepsize);
            ctx.fillStyle = "green";   
            for (var i = startPi; i <= EndPi; i++) { 
                var gg = i * stepsize / Math.PI;                 
                //if(stepsize3.indexOf('/3') > -1){gg = gg.toFixed(12)} else{};
                gg = gg.toFixed(12);
                if(parseFloat(gg) == 0){gg = 0};

                var gg2 = ToFraction(gg.toString());
                if(gg2.toString() == '0'){
                    var LabelPI = '';
                }
                else if(gg2.toString() == '1'){
                    var LabelPI = symbolPI;
                }
                else if(gg2.toString() == '-1'){
                    var LabelPI = '-'+symbolPI;
                }
                else if((gg2.toString()).indexOf('/')>-1){
                    var gg3 = gg2.split('/');
                    if (gg3[0] == '1') {
                        var LabelPI = symbolPI + '/' + gg3[1];
                    }
                    else if (gg3[0] == '-1') {
                        var LabelPI = '-' + symbolPI + '/' + gg3[1];
                    }
                    else {
                        var LabelPI = gg3[0] + symbolPI + '/' + gg3[1];
                    }
                }
                else{            
                    var LabelPI = gg2 + symbolPI;
                }


                xx = x0 + (i * stepsize) * dxx;
                if (LabelLocationX > 500) {
                    context.fillText(LabelPI, xx, LabelLocationX - 15);
                    context.fillText('|', xx, 530);

                }
                else {

                    context.fillText(LabelPI, xx, LabelLocationX + 15);
                    context.fillText('|', xx, y0 + 2);
                }
            }
            context.fillStyle = "black";
        }


         //label y-axis with multiples of PI
        if (!document.getElementById('labelyaxispi').checked) {
            var stepsize2 = ProcessInput(document.getElementById('YaxisPiStepsize').value);
            var stepsize = FindValue(stepsize2);
            var startPi = parseInt(yRminn / stepsize);
            var EndPi = parseInt(yRmaxx / stepsize);
            context.fillStyle = "green";
            for (var i = startPi; i <= EndPi; i++) {                
                var gg = i * stepsize / Math.PI; 
                gg = gg.toFixed(12);
                if(parseFloat(gg) == 0){gg = 0};

                var gg2 = ToFraction(gg.toString());
                if(gg2.toString() == '0'){
                    var LabelPI = '';
                }
                else if(gg2.toString() == '1'){
                    var LabelPI = symbolPI;
                }
                else if(gg2.toString() == '-1'){
                    var LabelPI = '-'+symbolPI;
                }
                else if((gg2.toString()).indexOf('/')>-1){
                    var gg3 = gg2.split('/');
                    if (gg3[0] == '1') {
                        var LabelPI = symbolPI + '/' + gg3[1];
                    }
                    else if (gg3[0] == '-1') {
                        var LabelPI = '-' + symbolPI + '/' + gg3[1];
                    }
                    else {
                        var LabelPI = gg3[0] + symbolPI + '/' + gg3[1];
                    }
                }
                else{            
                    var LabelPI = gg2 + symbolPI;
                }
                
                yy = y0 - (i * stepsize) * dyy;
                if (LabelLocationY > 500) {
                    context.fillText(LabelPI, LabelLocationY-15, yy+4);
                    context.fillText(emdash, 530, yy+4);
                }
                else {
                    context.fillText(LabelPI, LabelLocationY-15, yy+4);
                    context.fillText(emdash, x0, yy + 4);
                }
            }
            context.fillStyle = "black";

        }

 
        //draw x-axis
        if (document.getElementById('drawxaxis').checked == true) {
            ctx.beginPath();
            ctx.strokeStyle = "rgb(0,0,0)";
            ctx.moveTo(0, y0); ctx.lineTo(canvas.width, y0);  //draw x-axis
            ctx.lineWidth = 1.5;
            ctx.closePath();
            ctx.stroke();
        }


        //draw y-axis
        if (document.getElementById('drawyaxis').checked == true) {
            ctx.beginPath();
            ctx.strokeStyle = "rgb(0,0,0)";
            ctx.moveTo(x0, 0); ctx.lineTo(x0, canvas.height);  //draw y-axis
            ctx.lineWidth = 1.5;
            ctx.closePath();
            ctx.stroke();
        }

        //draw polar circles
        if (document.getElementById('PolarSystemIndicator').value == 1) {
            var Maxboundary = Math.max(Math.abs(xRminn), Math.abs(xRmaxx), Math.abs(yRminn), Math.abs(yRmaxx));

            var NumberOfCircles = parseInt(Maxboundary / FactorX) + 10;

            for (var i = 0; i < NumberOfCircles; i++) {

                var val1 = i * gap;

                if (i % 2 == 0) {

                    ctx.beginPath();
                    ctx.strokeStyle = "rgb(128,128,128)";

                    ctx.moveTo(x0 + val1, y0);
                    ctx.arc(x0, y0, val1, 0, 2 * Math.PI, false);

                    ctx.lineWidth = 1.5;
                    ctx.stroke();
                    ctx.closePath();
                }
            }


            var symbolPI = String.fromCharCode(960);

            Maxboundary2 = 1.5 * Maxboundary * dxx;

            ctx.strokeStyle = "rgb(128,128,128)";
            ctx.lineWidth = 2.0;
            ctx.textAlign = "right";

            ctx.beginPath();
            ctx.moveTo(x0, y0);
            var xcoord = Maxboundary2 * Math.cos(-Math.PI / 4) + x0;
            var ycoord = Maxboundary2 * Math.sin(-Math.PI / 4) + y0;
            var xcoord2 = (0.6 * Maxboundary2) * Math.cos(-Math.PI / 4) + x0;
            var ycoord2 = (0.6 * Maxboundary2) * Math.sin(-Math.PI / 4) + y0;

            var textPI = symbolPI + "/4";
            ctx.fillText(textPI, xcoord2, ycoord2);
            ctx.lineTo(xcoord, ycoord);
            ctx.stroke();
            ctx.closePath();


            ctx.beginPath();
            ctx.moveTo(x0, y0);
            xcoord = Maxboundary2 * Math.cos(-Math.PI / 6) + x0;
            ycoord = Maxboundary2 * Math.sin(-Math.PI / 6) + y0;
            xcoord2 = (0.6 * Maxboundary2) * Math.cos(-Math.PI / 6) + x0;
            ycoord2 = (0.6 * Maxboundary2) * Math.sin(-Math.PI / 6) + y0;

            textPI = symbolPI + "/6";
            ctx.fillText(textPI, xcoord2, ycoord2);
            ctx.lineTo(xcoord, ycoord);
            ctx.stroke();
            ctx.closePath();



            ctx.beginPath();
            ctx.moveTo(x0, y0);
            xcoord = Maxboundary2 * Math.cos(-Math.PI / 3) + x0;
            ycoord = Maxboundary2 * Math.sin(-Math.PI / 3) + y0;
            xcoord2 = (0.6 * Maxboundary2) * Math.cos(-Math.PI / 3) + x0;
            ycoord2 = (0.6 * Maxboundary2) * Math.sin(-Math.PI / 3) + y0;

            textPI = symbolPI + "/3";
            ctx.fillText(textPI, xcoord2, ycoord2);
            ctx.lineTo(xcoord, ycoord);
            ctx.stroke();
            ctx.closePath();


            ctx.beginPath();
            ctx.moveTo(x0, y0);
            xcoord = Maxboundary2 * Math.cos(-Math.PI / 3) + x0;
            ycoord = Maxboundary2 * Math.sin(-Math.PI / 3) + y0;
            xcoord2 = (0.6 * Maxboundary2) * Math.cos(-Math.PI / 3) + x0;
            ycoord2 = (0.6 * Maxboundary2) * Math.sin(-Math.PI / 3) + y0;

            textPI = symbolPI + "/3";
            ctx.fillText(textPI, xcoord2, ycoord2);
            ctx.lineTo(xcoord, ycoord);
            ctx.stroke();
            ctx.closePath();


            ctx.beginPath();
            //ctx.moveTo(x0, y0);
            //xcoord = Maxboundary2 * Math.cos(-Math.PI / 2) + x0;
            //ycoord = Maxboundary2 * Math.sin(-Math.PI / 2) + y0;
            xcoord2 = (0.6 * Maxboundary2) * Math.cos(-Math.PI / 2) + x0;
            ycoord2 = (0.6 * Maxboundary2) * Math.sin(-Math.PI / 2) + y0;

            textPI = symbolPI + "/2";
            ctx.fillText(textPI, xcoord2, ycoord2);
            //ctx.lineTo(xcoord, ycoord);
            ctx.stroke();
            ctx.closePath();




            ctx.textAlign = "left";
            ctx.beginPath();
            ctx.moveTo(x0, y0);
            xcoord = Maxboundary2 * Math.cos(-2 * Math.PI / 3) + x0;
            ycoord = Maxboundary2 * Math.sin(-2 * Math.PI / 3) + y0;
            xcoord2 = (0.6 * Maxboundary2) * Math.cos(-2 * Math.PI / 3) + x0;
            ycoord2 = (0.6 * Maxboundary2) * Math.sin(-2 * Math.PI / 3) + y0;

            textPI = "2" + symbolPI + "/3";
            ctx.fillText(textPI, xcoord2, ycoord2);
            ctx.lineTo(xcoord, ycoord);
            ctx.stroke();
            ctx.closePath();


            ctx.beginPath();
            ctx.moveTo(x0, y0);
            xcoord = Maxboundary2 * Math.cos(-3 * Math.PI / 4) + x0;
            ycoord = Maxboundary2 * Math.sin(-3 * Math.PI / 4) + y0;
            xcoord2 = (0.6 * Maxboundary2) * Math.cos(-3 * Math.PI / 4) + x0;
            ycoord2 = (0.6 * Maxboundary2) * Math.sin(-3 * Math.PI / 4) + y0;

            textPI = "3" + symbolPI + "/4";
            ctx.fillText(textPI, xcoord2, ycoord2);
            ctx.lineTo(xcoord, ycoord);
            ctx.stroke();
            ctx.closePath();



            ctx.beginPath();
            ctx.moveTo(x0, y0);
            xcoord = Maxboundary2 * Math.cos(-5 * Math.PI / 6) + x0;
            ycoord = Maxboundary2 * Math.sin(-5 * Math.PI / 6) + y0;
            xcoord2 = (0.6 * Maxboundary2) * Math.cos(-5 * Math.PI / 6) + x0;
            ycoord2 = (0.6 * Maxboundary2) * Math.sin(-5 * Math.PI / 6) + y0;

            textPI = "5" + symbolPI + "/6";
            ctx.fillText(textPI, xcoord2, ycoord2);
            ctx.lineTo(xcoord, ycoord);
            ctx.stroke();
            ctx.closePath();


            ctx.beginPath();
            //ctx.moveTo(x0, y0);
            //xcoord = Maxboundary2 * Math.cos(-Math.PI) + x0;
            //ycoord = Maxboundary2 * Math.sin(-Math.PI) + y0;
            xcoord2 = (0.6 * Maxboundary2) * Math.cos(-Math.PI) + x0;
            ycoord2 = (0.6 * Maxboundary2) * Math.sin(-Math.PI) + y0;

            textPI = symbolPI;
            ctx.fillText(textPI, xcoord2, ycoord2);
            //ctx.lineTo(xcoord, ycoord);
            ctx.stroke();
            ctx.closePath();


            ctx.textAlign = "right";
            ctx.beginPath();
            ctx.moveTo(x0, y0);
            xcoord = Maxboundary2 * Math.cos(-7 * Math.PI / 6) + x0;
            ycoord = Maxboundary2 * Math.sin(-7 * Math.PI / 6) + y0;
            xcoord2 = (0.6 * Maxboundary2) * Math.cos(-7 * Math.PI / 6) + x0;
            ycoord2 = (0.6 * Maxboundary2) * Math.sin(-7 * Math.PI / 6) + y0;

            textPI = "7" + symbolPI + "/6";
            ctx.fillText(textPI, xcoord2, ycoord2);
            ctx.lineTo(xcoord, ycoord);
            ctx.stroke();
            ctx.closePath();


            ctx.beginPath();
            ctx.moveTo(x0, y0);
            xcoord = Maxboundary2 * Math.cos(-5 * Math.PI / 4) + x0;
            ycoord = Maxboundary2 * Math.sin(-5 * Math.PI / 4) + y0;
            xcoord2 = (0.6 * Maxboundary2) * Math.cos(-5 * Math.PI / 4) + x0;
            ycoord2 = (0.6 * Maxboundary2) * Math.sin(-5 * Math.PI / 4) + y0;

            textPI = "5" + symbolPI + "/4";
            ctx.fillText(textPI, xcoord2, ycoord2);
            ctx.lineTo(xcoord, ycoord);
            ctx.stroke();
            ctx.closePath();



            ctx.beginPath();
            ctx.moveTo(x0, y0);
            xcoord = Maxboundary2 * Math.cos(-4 * Math.PI / 3) + x0;
            ycoord = Maxboundary2 * Math.sin(-4 * Math.PI / 3) + y0;
            xcoord2 = (0.6 * Maxboundary2) * Math.cos(-4 * Math.PI / 3) + x0;
            ycoord2 = (0.6 * Maxboundary2) * Math.sin(-4 * Math.PI / 3) + y0;

            textPI = "4" + symbolPI + "/3";
            ctx.fillText(textPI, xcoord2, ycoord2);
            ctx.lineTo(xcoord, ycoord);
            ctx.stroke();
            ctx.closePath();


            ctx.beginPath();
            //ctx.moveTo(x0, y0);
            //xcoord = Maxboundary2 * Math.cos(-Math.PI) + x0;
            //ycoord = Maxboundary2 * Math.sin(-Math.PI) + y0;
            xcoord2 = (0.6 * Maxboundary2) * Math.cos(-3 * Math.PI / 2) + x0;
            ycoord2 = (0.6 * Maxboundary2) * Math.sin(-3 * Math.PI / 2) + y0;

            textPI = "3" + symbolPI + "/2";
            ctx.fillText(textPI, xcoord2, ycoord2);
            //ctx.lineTo(xcoord, ycoord);
            ctx.stroke();
            ctx.closePath();




            ctx.textAlign = "left";
            ctx.beginPath();
            ctx.moveTo(x0, y0);
            xcoord = Maxboundary2 * Math.cos(-5 * Math.PI / 3) + x0;
            ycoord = Maxboundary2 * Math.sin(-5 * Math.PI / 3) + y0;
            xcoord2 = (0.6 * Maxboundary2) * Math.cos(-5 * Math.PI / 3) + x0;
            ycoord2 = (0.6 * Maxboundary2) * Math.sin(-5 * Math.PI / 3) + y0;

            textPI = "5" + symbolPI + "/3";
            ctx.fillText(textPI, xcoord2, ycoord2);
            ctx.lineTo(xcoord, ycoord);
            ctx.stroke();
            ctx.closePath();


            ctx.beginPath();
            ctx.moveTo(x0, y0);
            xcoord = Maxboundary2 * Math.cos(-7 * Math.PI / 4) + x0;
            ycoord = Maxboundary2 * Math.sin(-7 * Math.PI / 4) + y0;
            xcoord2 = (0.6 * Maxboundary2) * Math.cos(-7 * Math.PI / 4) + x0;
            ycoord2 = (0.6 * Maxboundary2) * Math.sin(-7 * Math.PI / 4) + y0;

            textPI = "7" + symbolPI + "/4";
            ctx.fillText(textPI, xcoord2, ycoord2);
            ctx.lineTo(xcoord, ycoord);
            ctx.stroke();
            ctx.closePath();



            ctx.beginPath();
            ctx.moveTo(x0, y0);
            xcoord = Maxboundary2 * Math.cos(-11 * Math.PI / 6) + x0;
            ycoord = Maxboundary2 * Math.sin(-11 * Math.PI / 6) + y0;
            xcoord2 = (0.6 * Maxboundary2) * Math.cos(-11 * Math.PI / 6) + x0;
            ycoord2 = (0.6 * Maxboundary2) * Math.sin(-11 * Math.PI / 6) + y0;

            textPI = "11" + symbolPI + "/6";
            ctx.fillText(textPI, xcoord2, ycoord2);
            ctx.lineTo(xcoord, ycoord);
            ctx.stroke();
            ctx.closePath();

        }

    }


 
/*------------------------------------------------------------------------------
* NAME       : FindYYYValue
* PURPOSE    : Finds y value when x is given
* PARAMETERS : InputExpression, x1  
* RETURNS    : y value 
*----------------------------------------------------------------------------*/ 
 function FindYYYValue(InputExpression, x1) {
        var temp1 = replaceAll(InputExpression, "x", "(" + x1 + ")");
        //alert('in FindY temp1 = ' + temp1);
        var y1 = FindValue(temp1);
        return y1;
}



/*------------------------------------------------------------------------------
* NAME       : FindXXValue
* PURPOSE    : Finds x value when y is given
* PARAMETERS : InputExpression, y1  
* RETURNS    : x value 
*----------------------------------------------------------------------------*/ 
    function FindXXValue(InputExpression, y1) {
        var x1 = 0.0;
        var temp1 = replaceAll(InputExpression, "y", "(" + y1 + ")");
        try {
            x1 = FindValue(temp1);
            x1 = Math.round(x1 * 1000000000000) / 1000000000000;
        }
        catch (err) {
            x1 = NaN; //Handle errors here
        }

        if (IsNumericc(x1) == false || x1 == null) {
            x1 = NaN;
        }

        return x1;
    }



/*------------------------------------------------------------------------------
* NAME       : ProcessAbsoluteValue
* PURPOSE    : Converts "| |" to "Abs"
* PARAMETERS : string 
* RETURNS    : string 
*----------------------------------------------------------------------------*/ 
    function ProcessAbsoluteValue(str){
        var nn = str.length;
        var tt = '';
        var cc = '1';
        //alert('str1: ' + str);

         for(var i=0; i<nn; i++){
            var hh = str.charAt(i);
            //alert('hh: ' + hh );
            //alert('cc: ' + cc );
            if(hh == '|'){
                if(cc == '1'){
                    hh = 'Abs(';
                    cc = '2';
                }
                else{
                    hh = ')';
                    cc = '1';
                }
            }

            tt = tt +  hh;
            //alert('tt: ' + tt );
        }

        return tt;
    }
 
 
/*------------------------------------------------------------------------------
* NAME       : Ellipse
* PURPOSE    : Inputs "ellipse( ; ; ; )"
* PARAMETERS :   
* RETURNS    :  
*----------------------------------------------------------------------------*/ 
    function Ellipse() {
        var symbol = "ellipse( ; ; ; )";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, -7, 0);
        return;
    }


    function parabolaUp() {
        var symbol = "parabolaUp( ; ; )";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, -6, 0);
        return;
    }
    function parabolaDown() {
        var symbol = "parabolaDown( ; ; )";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, -6, 0);
        return;
    }

    function parabolaRight() {
        var symbol = "parabolaRight( ; ; )";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, -6, 0);
        return;
    }

    function parabolaLeft() {
        var symbol = "parabolaLeft( ; ; )";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, -6, 0);
        return;
    }


/*------------------------------------------------------------------------------
            <input type="button" title="parabolaUp(h ;k ; value of p )" value="Input parabolaUp" onclick="parabolaUp()" style="height:30px; "/> 
            <input type="button" title="parabolaDown(h ;k ; value of p )" value="Input parabolaDown" onclick="parabolaDown()" style="height:30px; "/> 
            <input type="button" title="parabolaRight(h ;k ; value of p )" value="Input parabolaRight" onclick="parabolaRight()" style="height:30px; "/> 
            <input type="button" title="parabolaLeft(h ;k ; value of p )" value="Input parabolaLeft" onclick="parabolaLeft()" style="height:30px; "/> 

* NAME       : hyperbolaxy
* PURPOSE    : Inputs "hyperbolaxy( ; ; ; )"
* PARAMETERS :   
* RETURNS    :  
*----------------------------------------------------------------------------*/ 
    function hyperbolaXY() {
        var symbol = "hyperbolaxy( ; ; ; )";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, -7, 0);
        return;

    }

/*------------------------------------------------------------------------------
* NAME       : hyperbolayx 
* PURPOSE    : Inputs "hyperbolayx( ; ; ; )" 
* PARAMETERS :   
* RETURNS    :  
*----------------------------------------------------------------------------*/ 
    function hyperbolaYX() {
        var symbol = "hyperbolayx( ; ; ; )";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, -7, 0);
        return;
    }


/*------------------------------------------------------------------------------
* NAME       : Circle 
* PURPOSE    : Inputs "circle( ;  ; )"
* PARAMETERS :   
* RETURNS    :  
*----------------------------------------------------------------------------*/ 
    function Circle() {
        var symbol = "circle( ;  ; )";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, -7, 0);
        return;

    }


/*------------------------------------------------------------------------------
* NAME       : fdistpdfinput 
* PURPOSE    : Inputs "fdistpdf(;)" 
* PARAMETERS :   
* RETURNS    :  
*----------------------------------------------------------------------------*/ 
    function fdistpdfinput() {
        var symbol = "fdistpdf(;)";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, -2, 0);
        return;

    }


/*------------------------------------------------------------------------------
* NAME       : normalpdfinput 
* PURPOSE    : Inputs "normalpdf(;)" 
* PARAMETERS :   
* RETURNS    :  
*----------------------------------------------------------------------------*/ 
    function normalpdfinput() {
        var symbol = "normalpdf(;)";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, -2, 0);
        return;

    }


/*------------------------------------------------------------------------------
* NAME       : normalcdfinput 
* PURPOSE    : Inputs "normalcdf(;)";
* PARAMETERS :   
* RETURNS    :  
*----------------------------------------------------------------------------*/ 
    function normalcdfinput() {
        var symbol = "normalcdf(;)";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, -2, 0);
        return;

    }

/*------------------------------------------------------------------------------
* NAME       : tdistpdfinput 
* PURPOSE    : Inputs  "tdistpdf()"
* PARAMETERS :   
* RETURNS    :  
*----------------------------------------------------------------------------*/ 
    function tdistpdfinput() {
        var symbol = "tdistpdf()";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, -1, 0, -1, 0);
        return;

    }

/*------------------------------------------------------------------------------
* NAME       : tdistcdfinput 
* PURPOSE    : Inputs "tdistcdf()" 
* PARAMETERS :   
* RETURNS    :  
*----------------------------------------------------------------------------*/ 
    function tdistcdfinput() {
        var symbol = "tdistcdf()";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, -1, 0, -1, 0);
        return;

    }

/*------------------------------------------------------------------------------
* NAME       : getDataStatistics
* PURPOSE    : Generates data for statistics functions 
* PARAMETERS : Expression, npoints, graphtype, type  
* RETURNS    : data of ordered pair (x, y)
*----------------------------------------------------------------------------*/ 
    function getDataStatistics(Expression, npoints, graphtype, type) {
        //alert("hello getDataStatistics = " + npoints);
        var xdata = "";
        var ydata = "";

        if (type == "normalpdf") {
            Expression = Expression.replace("normalpdf", "");
            Expression = Expression.replace("(", "");
            Expression = Expression.replace(")", "");
            ExpressionTemp = Expression.split(";");


            var mean = parseFloat(ExpressionTemp[0]);
            var sigma = parseFloat(ExpressionTemp[1]);

            var lowerbound = mean - 5 * sigma;
            var upperbound = mean + 5 * sigma;

            //alert("upperbound = " + upperbound);

            var stepsize = (upperbound - lowerbound) / npoints;

            var xdata = "";
            var ydata = "";

            var xh = lowerbound;
            var MaxY = 0.0;

            for (var i = 0; i < npoints; i++) {
                xh = lowerbound + i * stepsize;
                yh = Normalpdf(xh, mean, sigma);

                if (MaxY < yh) { MaxY = yh };
                //alert("yh = " + yh);

                xdata += xh + ",";
                ydata += yh + ",";

                //document.write("i = " + i + "..............xh = " + xh + "................ yh = " + yh + "<br>");
            }

        }
        else if (type == "normalcdf") {
            Expression = Expression.replace("normalcdf", "");
            Expression = Expression.replace("(", "");
            Expression = Expression.replace(")", "");
            ExpressionTemp = Expression.split(";");


            var mean = parseFloat(ExpressionTemp[0]);
            var sigma = parseFloat(ExpressionTemp[1]);

            var lowerbound = FindValue(document.getElementById('xMinParameter').value); ; //mean - 5 * sigma;
            var upperbound = FindValue(document.getElementById('xMaxParameter').value); ; //mean + 5 * sigma;

            //alert("upperbound = " + upperbound);

            var stepsize = (upperbound - lowerbound) / npoints;

            var xdata = "";
            var ydata = "";

            var xh = lowerbound;
            var MaxY = 0.0;

            for (var i = 0; i < npoints; i++) {
                xh = lowerbound + i * stepsize;
                yh = Normalcdf(xh, mean, sigma);

                if (MaxY < yh) { MaxY = yh };
                //alert("yh = " + yh);

                xdata += xh + ",";
                ydata += yh + ",";

                //document.write("i = " + i + "..............xh = " + xh + "................ yh = " + yh + "<br>");

            }
        }
        else if (type == "tdistpdf") {
            Expression = Expression.replace("tdistpdf", "");
            Expression = Expression.replace("(", "");
            Expression = Expression.replace(")", "");
            //ExpressionTemp = Expression.split(";");

            var DF = parseFloat(Expression);

            var lowerbound = -5; //FindValue(document.getElementById('xMinParameter').value); ; //mean - 5 * sigma;
            var upperbound = 5; //FindValue(document.getElementById('xMaxParameter').value); ; //mean + 5 * sigma;

            // alert("DF = " + DF);

            var stepsize = (upperbound - lowerbound) / npoints;

            var xdata = "";
            var ydata = "";

            var xh = lowerbound;
            var MaxY = 0.0;

            for (var i = 0; i < npoints; i++) {
                xh = lowerbound + i * stepsize;
                //alert("xh = " + xh);

                yh = tDistPDF(DF, xh);

                //alert("yh = " + yh);
                if (MaxY < yh) { MaxY = yh };


                xdata += xh + ",";
                ydata += yh + ",";

                //document.write("i = " + i + "..............xh = " + xh + "................ yh = " + yh + "<br>");

            }
        }
        else if (type == "tdistcdf") {
            Expression = Expression.replace("tdistcdf", "");
            Expression = Expression.replace("(", "");
            Expression = Expression.replace(")", "");
            //ExpressionTemp = Expression.split(";");

            var DF = parseFloat(Expression);

            var lowerbound = FindValue(document.getElementById('xMinParameter').value); 
            var upperbound = FindValue(document.getElementById('xMaxParameter').value); 

            // alert("DF = " + DF);

            var stepsize = (upperbound - lowerbound) / npoints;

            var xdata = "";
            var ydata = "";

            var xh = lowerbound;
            var MaxY = 0.0;

            for (var i = 0; i < npoints; i++) {
                xh = lowerbound + i * stepsize;
                yh = tDistCDF(DF, xh);

                //alert("yh = " + yh);
                if (MaxY < yh) { MaxY = yh };


                xdata += xh + ",";
                ydata += yh + ",";

                //document.write("i = " + i + "..............xh = " + xh + "................ yh = " + yh + "<br>");

            }
        }
        else if (type == "fdistpdf") {
            Expression = Expression.replace("fdistpdf", "");
            Expression = Expression.replace("(", "");
            Expression = Expression.replace(")", "");
            //ExpressionTemp = Expression.split(";");

            var ddd = Expression.split(';');

            var df1 = parseFloat(ddd[0]);
            var df2 = parseFloat(ddd[1]);
            //alert("df1 = " + df1);
            //alert("df2 = " + df2);

            var lowerbound = 0; //FindValue(document.getElementById('xMinParameter').value); ; //mean - 5 * sigma;
            var upperbound = 5; //FindValue(document.getElementById('xMaxParameter').value); ; //mean + 5 * sigma;

            // alert("DF = " + DF);
            npoints = 1000;
            var stepsize = (upperbound - lowerbound) / npoints;

            var xdata = "";
            var ydata = "";
            var thy = '';
            var xh = -0.01;//lowerbound;
            var MaxY = 0.0;
            stepsize = 0.01;
            while (xh<=10) {
                var xh = xh+stepsize;//lowerbound + i * stepsize;
                //alert("xh = " + xh+'......df1='+df1 +'.........df2='+df2);

                var yh = 1-fdistpdf(xh,df1,df2);

                //alert("yh = " + yh);
                
                //if (MaxY < yh) { MaxY = yh };
                
                xdata += xh + ",";
                ydata += yh + ",";
                thy += xh + "..............."+ yh + "\n";
                //alert('thy');
                //document.getElementById('tempdata').value += xh + ","+ yh + "\n\n";
                //document.write("i = " + i + "..............xh = " + xh + "................ yh = " + yh + "<br>");

            }
        }
        else if (type == "FDistcdf") {
            Expression = Expression.replace("tdistcdf", "");
            Expression = Expression.replace("(", "");
            Expression = Expression.replace(")", "");
            //ExpressionTemp = Expression.split(";");

            var DF = parseFloat(Expression);

            var lowerbound = FindValue(document.getElementById('xMinParameter').value); ; //mean - 5 * sigma;
            var upperbound = FindValue(document.getElementById('xMaxParameter').value); ; //mean + 5 * sigma;

            // alert("DF = " + DF);

            var stepsize = (upperbound - lowerbound) / npoints;

            var xdata = "";
            var ydata = "";

            var xh = lowerbound;
            var MaxY = 0.0;
            stepsize = 0.1;
            for (var i = 0; i < npoints; i++) {
                xh = lowerbound + i * stepsize;
                //alert("xh = " + xh);

                yh = 1-fdistcdf(x, dfn, dfd);

                //alert("yh = " + yh);
                if (MaxY < yh) { MaxY = yh };


                xdata += xh + ",";
                ydata += yh + ",";


            }
        }


        //alert('xdata...' + xdata);
        xdata = xdata.substring(0, xdata.length - 1);
        ydata = ydata.substring(0, ydata.length - 1);
        document.getElementById(graphtype).value = xdata + " ;;; " + ydata;
        document.getElementById('tempdata').value = thy;
        

    }

/*------------------------------------------------------------------------------
 * NAME       : fdistpdf
 * PURPOSE    : Finds the probability density function (pdf) for X
 * PARAMETERS : x, degrees of freedom numerator, degrees of freedom denominator, 
 * RETURNS    : pdf
 *----------------------------------------------------------------------------*/
function fdistpdf(x,dfn,dfd){
    //alert('dfn='+dfn);
    var dfn2 = dfn / 2;
    var dfd2 = dfd / 2;
    var ttt = -(dfn+dfd)/2;
    //alert('ttt='+ttt);
    //var pp1 = 1 / BetaFunction(dfn2, dfd2);
    //var pp2 = Math.pow(dfn / dfd, dfn2);
    //var pp3 = Math.pow(x, dfn2 - 1);
    //var pp4 = Math.pow(1 + dfn * x / dfd, ttt);
    //var pdf = pp1 * pp2 * pp3 * pp4;

    var pp1 = BetaFunction(dfn2, dfd2);
    var pp2 = Math.pow(dfn*x,dfn)*Math.pow(dfd,dfd);
    var pp3 = Math.pow(dfn * x + dfd, dfn+dfd);
    var pp4 = Math.sqrt(pp2/pp3);
    var pdf = pp4/(x * pp1);

    return pdf;
}


/*------------------------------------------------------------------------------
 * NAME       : BetaFunction
 * PURPOSE    : Replaces all variables with a designated variable
 * PARAMETERS : str, variable 
 * RETURNS    : expression containing only designated variable
 *----------------------------------------------------------------------------*/
function BetaFunction(x, y){

    var t = -0.001;
    var sum = 0;
    while(t<=1){
        t += 0.001;
        ft = Math.pow(t, x - 1) * Math.pow(1 - t, y - 1);
        sum += ft;
    }

    return sum;
}

/*------------------------------------------------------------------------------
* NAME       : getDataConic
* PURPOSE    : Generates data for conic sections 
* PARAMETERS : Expression, npoints, graphtype, conictype
* RETURNS    : data of ordered pair (x, y)
*----------------------------------------------------------------------------*/
    function getDataConic(Expression, npoints, graphtype, conictype) {

        //alert("hello conic npoints = " + npoints);
        var xdata = "";
        var ydata = "";

        if (conictype == "ellipse") {            
            Expression = Expression.replace("ellipse(", "");
            Expression = Expression.slice(0, -1);
            ExpressionTemp = Expression.split(";");
            //Expression = Expression.replace("(", "");
            //Expression = Expression.replace(")", "");
            //ExpressionTemp[0] = ExpressionTemp[0].replace("ellipse(", "");
            //ExpressionTemp[3] = ExpressionTemp[3].replace(")", "");

            var h = FindValue(ExpressionTemp[0]);
            var k = FindValue(ExpressionTemp[1]);
            var a = FindValue(ExpressionTemp[2]);
            var b = FindValue(ExpressionTemp[3]);

            //alert("hello getDataEllipse h = " + h + "......k = " + k + "...... a = " + a + "......b = " + b);

            var x1 = 0.0;
            var y1 = 0.0;
            a = Math.sqrt(a);
            b = Math.sqrt(b);
            var tmin = 0;
            var tmax = 6.3;
            var stepsize = (tmax - tmin) / npoints;

            //alert("stepsize = " + stepsize);

            for (var i = 0; i <= npoints; i++) {
                var t1 = tmin + i * stepsize;

                try {
                    x1 = h + a * Math.cos(t1);
                    y1 = k + b * Math.sin(t1);

                }
                catch (err) {
                    x1 = NaN; //Handle errors here
                    y1 = NaN;
                }


                if (IsNumericc(x1) == false || x1 == null) {
                    x1 = NaN;
                    y1 = NaN;
                }

                xdata += x1 + ",";
                ydata += y1 + ",";

            }

            xdata = xdata.substring(0, xdata.length - 1);
            ydata = ydata.substring(0, ydata.length - 1);

        }

        else if (conictype == "circle") {
            Expression = replaceAll(Expression, " ", "");
            Expression = Expression.substring(0, Expression.length - 1);
            var tt = Expression.split("circle(");
            var pp = tt[1].split(";");

            var h = FindValue(pp[0]);
            var k = FindValue(pp[1]);
            var a = FindValue(pp[2]);

            //var b = parseFloat(ExpressionTemp[3]);

            //alert("hello getDataEllipse h = " + h + "......k = " + k + "...... a = " + a + "......b = " + b);

            var x1 = 0.0;
            var y1 = 0.0;
            //a = Math.sqrt(a);
            var tmin = 0;
            var tmax = 6.3;
            var stepsize = (tmax - tmin) / npoints;


            //alert("stepsize = " + stepsize);

            for (var i = 0; i <= npoints; i++) {
                var t1 = tmin + i * stepsize;
                x1 = h + a * Math.cos(t1);
                y1 = k + a * Math.sin(t1);

                if (IsNumericc(x1) == false || x1 == null) {
                    x1 = NaN;
                    y1 = NaN;
                }

                xdata += x1 + ",";
                ydata += y1 + ",";

            }


            xdata = xdata.substring(0, xdata.length - 1);
            ydata = ydata.substring(0, ydata.length - 1);

        }


        else if (conictype == 'hyperbolaxy') {
            Expression = Expression.replace("hyperbolaxy(", "");
            Expression = Expression.slice(0, -1);
            ExpressionTemp = Expression.split(";");

            //Expression = Expression.replace("(", "");
            //Expression = Expression.replace(")", "");
            //ExpressionTemp = Expression.split(";");
            //ExpressionTemp[0] = ExpressionTemp[0].replace("hyperbolaxy(", "");
            //ExpressionTemp[3] = ExpressionTemp[3].replace(")", "");

            //var h = parseFloat(ExpressionTemp[0]);
            //var k = parseFloat(ExpressionTemp[1]);
            //var a = parseFloat(ExpressionTemp[2]);
            //var b = parseFloat(ExpressionTemp[3]);

            var h = FindValue(ExpressionTemp[0]);
            var k = FindValue(ExpressionTemp[1]);
            var a = FindValue(ExpressionTemp[2]);
            var b = FindValue(ExpressionTemp[3]);

            //alert("hello getDatahyperbolaxy h = " + h + "......k = " + k + "...... a = " + a + "......b = " + b);

            var x1 = 0.0;
            var y1 = 0.0;
            a = Math.sqrt(a);
            b = Math.sqrt(b);
            var tmin = 0;
            var tmax = 6.3;
            var stepsize = (tmax - tmin) / npoints;

            //alert("stepsize = " + stepsize);

            for (var i = 0; i <= npoints; i++) {
                var t1 = tmin + i * stepsize;

                try {
                    x1 = h + a * (1 / Math.cos(t1));
                    y1 = k + b * Math.tan(t1);

                }
                catch (err) {
                    x1 = NaN; //Handle errors here
                    y1 = NaN;
                }


                if (IsNumericc(x1) == false || x1 == null) {
                    x1 = NaN;
                    y1 = NaN;
                }

                xdata += x1 + ",";
                ydata += y1 + ",";

            }

            xdata = xdata.substring(0, xdata.length - 1);
            ydata = ydata.substring(0, ydata.length - 1);

        }

        else if (conictype == 'hyperbolayx') {
            Expression = Expression.replace("hyperbolayx(", "");
            Expression = Expression.slice(0, -1);
            ExpressionTemp = Expression.split(";");

            //Expression = Expression.replace("(", "");
            //Expression = Expression.replace(")", "");
            //ExpressionTemp = Expression.split(";");
            //ExpressionTemp[0] = ExpressionTemp[0].replace("hyperbolayx(", "");
            //ExpressionTemp[3] = ExpressionTemp[3].replace(")", "");

            //var h = parseFloat(ExpressionTemp[0]);
            //var k = parseFloat(ExpressionTemp[1]);
            //var a = parseFloat(ExpressionTemp[2]);
            //var b = parseFloat(ExpressionTemp[3]);

            var h = FindValue(ExpressionTemp[0]);
            var k = FindValue(ExpressionTemp[1]);
            var a = FindValue(ExpressionTemp[2]);
            var b = FindValue(ExpressionTemp[3]);

            //alert("hello getDatahyperbolayx h = " + h + "......k = " + k + "...... a = " + a + "......b = " + b);

            var x1 = 0.0;
            var y1 = 0.0;
            a = Math.sqrt(a);
            b = Math.sqrt(b);
            var tmin = 0;
            var tmax = 6.3;
            var stepsize = (tmax - tmin) / npoints;

            //alert("stepsize = " + stepsize);

            for (var i = 0; i <= npoints; i++) {
                var t1 = tmin + i * stepsize;

                try {
                    x1 = h + a * Math.tan(t1);
                    y1 = k + b * (1 / Math.cos(t1));

                }
                catch (err) {
                    x1 = NaN; //Handle errors here
                    y1 = NaN;
                }


                if (IsNumericc(x1) == false || x1 == null) {
                    x1 = NaN;
                    y1 = NaN;
                }

                xdata += x1 + ",";
                ydata += y1 + ",";

            }

            xdata = xdata.substring(0, xdata.length - 1);
            ydata = ydata.substring(0, ydata.length - 1);


        }

        else if (conictype == 'parabola') { ; };

        //var graphtype = 'Graph' + graphtype;
 
        document.getElementById(graphtype).value = xdata + " ;;; " + ydata;
         
    }




/*------------------------------------------------------------------------------
* NAME       : GenerateCartesianData
* PURPOSE    : Generates data for Cartesian equation 
* PARAMETERS : InputExpression, npoints1, xRmin, xh1, DataStorageBox
* RETURNS    : data of ordered pair (x, y)
*----------------------------------------------------------------------------*/
    function GenerateCartesianData(InputExpression, npoints1, xRmin, xh1, DataStorageBox) {
        var x1;
        var y1;
        var xdata = "";
        var ydata = "";
        var temp1;
        //var text = '';
        for (var i = 0; i <= npoints1; i++) {
            var x1 = (xRmin + i * xh1);
            var LL = x1.toString();
            if (LL.indexOf("e")>-1) {
                LL = ToDecimal(LL);
            }

            temp1 = replaceAll(InputExpression, "x", "(" + x1 + ")");

            try {
                y1 = FindValue(temp1);
                //if ((y1.toString()).indexOf("e")>-1) {
                //    y1 = ToDecimal(y1.toString());
                //}
            }
            catch (err) {
                y1 = NaN; //Handle errors here
            }

            if (IsNumericc(y1) == false || y1 == null) {
                y1 = NaN;
            }

            xdata += x1 + ",";
            ydata += y1 + ",";
            //text += '<tr><td>' + x1 + '</td><td>' + y1 + '</td></tr>'; 

        }

        xdata = xdata.substring(0, xdata.length - 1);
        ydata = ydata.substring(0, ydata.length - 1);
        document.getElementById(DataStorageBox).value = xdata + " ;;; " + ydata;
        
        return;
    }


/*------------------------------------------------------------------------------
* NAME       : GenerateCartesianData2
* PURPOSE    : Generates data for Cartesian equation 
* PARAMETERS : InputExpression, npoints1, yRmin, yh1, DataStorageBox
* RETURNS    : data of ordered pair (x, y)
*----------------------------------------------------------------------------*/
    function GenerateCartesianData2(InputExpression, npoints1, yRmin, yh1, DataStorageBox) { 
        var x1 = 0.0;
        var y1 = 0.0;
        var xdata = "";
        var ydata = "";
        var temp1 = 0.0;

        //alert('GenerateCartesianData2');
        for (var i = 0; i <= npoints1; i++) {
            y1 = yRmin + i * yh1;
            var LL = y1.toString();
            if (LL.indexOf("e")) {
                LL = ToDecimal(LL);
            }

            temp1 = replaceAll(InputExpression, "x", "(" + y1 + ")");
            //alert('GenerateCartesianData222222......'+temp1);

            try {
                //alert('GenerateCartesianData222222......'+temp1);
                x1 = FindValue(temp1);
                //alert('temp1 = ' + temp1);
                //alert('x = ' + x1 + '.......y = ' + y1);
            }
            catch (err) {
                x1 = NaN; //Handle errors here
                y1 = NaN;
            }


            if (IsNumericc(x1) == false || x1 == null) {
                x1 = NaN;
                y1 = NaN;
            }

            xdata += x1 + ",";
            ydata += y1 + ",";

        }

        xdata = xdata.substring(0, xdata.length - 1);
        ydata = ydata.substring(0, ydata.length - 1);
        //alert('333InputExpression...' + xdata);

        document.getElementById(DataStorageBox).value = xdata + " ;;; " + ydata;
        return;
    }
    


/*------------------------------------------------------------------------------
* NAME       : PolarGraphData
* PURPOSE    : Generates data for polar equation 
* PARAMETERS : InputExpression, DataStorageBoxID, IframeID, NameOfEquation, npoints1
* RETURNS    : data of ordered pair (x, y)
*----------------------------------------------------------------------------*/
    function PolarGraphData(InputExpression, DataStorageBoxID, IframeID, NameOfEquation, npoints1, PolarEquType) {
        var Tmax = FindValue(document.getElementById("PolarTmax").value);
        var Tmin = FindValue(document.getElementById("PolarTmin").value);
        var Tstepsize = FindValue(document.getElementById("PolarTstepsize").value);
        var thetasymbol = String.fromCharCode(952);   //theta   
        if(InputExpression.indexOf('t') > -1){
            thetasymbol = 't';
        }


        var x1 = 0.0;
        var y1 = 0.0;
        var r1 = 0.0;

        var xdata = "";
        var ydata = "";
        var temp1 = 0.0;

            var stepsize = (Tmax - Tmin) / npoints1;
            for (var i = 0; i <= npoints1; i++) {
                var t1 = Tmin + i * stepsize;

                var LL = t1.toString();
                if (LL.indexOf("e")) {
                    LL = ToDecimal(LL);
                }


                temp1 = replaceAll(InputExpression, thetasymbol, "(" + t1 + ")");
                try {
                    r1 = FindValue(temp1);
                    x1 = r1 * Math.cos(t1);
                    y1 = r1 * Math.sin(t1);

                }
                catch (err) {
                    x1 = NaN; //Handle errors here
                    y1 = NaN;
                }

                if (IsNumericc(x1) == false || x1 == null) {
                    x1 = NaN;
                    y1 = NaN;
                }

                xdata += x1 + ",";
                ydata += y1 + ",";

            }


        xdata = xdata.substring(0, xdata.length - 1);
        ydata = ydata.substring(0, ydata.length - 1);

        document.getElementById(DataStorageBoxID).value = xdata + " ;;; " + ydata;

    }


/*------------------------------------------------------------------------------
* NAME       : PolarGraphData2
* PURPOSE    : Generates data for polar equation when equation is of the type  θ = constant
* PARAMETERS : InputExpression, DataStorageBoxID, IframeID, NameOfEquation, npoints1
* RETURNS    : data of ordered pair (x, y)
*----------------------------------------------------------------------------*/
    function PolarGraphData2(InputExpression, DataStorageBoxID, IframeID, NameOfEquation, npoints1, PolarEquType) {
        var xRmin = FindValue(document.getElementById('xMinParameter').value);
        var xRmax = FindValue(document.getElementById('xMaxParameter').value);
        var yRmin = FindValue(document.getElementById('yMinParameter').value);
        var yRmax = FindValue(document.getElementById('yMaxParameter').value);
        var xh1 = (xRmax - xRmin) / npoints1;
        var yh1 = (yRmax - yRmin) / npoints1;

        var thetasymbol = String.fromCharCode(952);   //theta   
        if(InputExpression.indexOf('t') > -1){
            thetasymbol = 't';
        }

        var x1 = 0.0;
        var y1 = 0.0;
        var r1 = 0.0;

        var xdata = "";
        var ydata = "";
        var temp1 = 0.0;
        //alert('PolarGraphData2 = ' + InputExpression);

        var cc = Math.tan(FindValue(InputExpression));

        InputExpression = cc + '(x)';
        //alert('PolarGraphData2333 = ' + InputExpression);


        for (var i = 0; i <= npoints1; i++) {
            var x1 = (xRmin + i * xh1);
            var LL = x1.toString();
            if (LL.indexOf("e")>-1) {
                LL = ToDecimal(LL);
            }

            temp1 = replaceAll(InputExpression, "x", "(" + x1 + ")");

            try {
                y1 = FindValue(temp1);
                //if ((y1.toString()).indexOf("e")>-1) {
                //    y1 = ToDecimal(y1.toString());
                //}
            }
            catch (err) {
                y1 = NaN; //Handle errors here
            }

            if (IsNumericc(y1) == false || y1 == null) {
                y1 = NaN;
            }

            xdata += x1 + ",";
            ydata += y1 + ",";
            //text += '<tr><td>' + x1 + '</td><td>' + y1 + '</td></tr>'; 

        }    


        xdata = xdata.substring(0, xdata.length - 1);
        ydata = ydata.substring(0, ydata.length - 1);

        document.getElementById(DataStorageBoxID).value = xdata + " ;;; " + ydata;

    }



 		
		
/*------------------------------------------------------------------------------
* NAME       : RecordWindowSetting1
* PURPOSE    : Records position (x,y) when mouse is moved over canvas. 
* PARAMETERS : 
* RETURNS    : 
*----------------------------------------------------------------------------*/	
    function RecordWindowSetting1(){//onmousedown			
        var xyposition = document.getElementById('LocationMouseOverChart').value;
        xyposition = xyposition.replace("(", "");
        xyposition = xyposition.replace(")", "");
 
        var indx = xyposition.indexOf(",");
        var listArray1 = xyposition.split(',');
 
        if (listArray1[0] == "") { listArray1[0] = "0" };
        if (listArray1[1] == "") { listArray1[1] = "0" };
 
 
        //alert("onmouseDown" + listArray1[0] + " ;;; " + listArray1[1]  );  
 
    }		
 		
		
 		
        
		
/*------------------------------------------------------------------------------
* NAME       : RecordWindowSetting2
* PURPOSE    : Records position (x,y) when mouse is moved over canvas. 
* PARAMETERS : 
* RETURNS    : 
*----------------------------------------------------------------------------*/	
    function RecordWindowSetting2(){//onmouseup	
        var xyposition = document.getElementById('LocationMouseOverChart').value;
        xyposition = xyposition.replace("(", "");
        xyposition = xyposition.replace(")", "");
 
        var indx = xyposition.indexOf(",");
        var listArray1 = xyposition.split(',');
 
        if (listArray1[0] == "") { listArray1[0] = "0" };
        if (listArray1[1] == "") { listArray1[1] = "0" };
 
 
    }		
 		
	
 
 
 

/*------------------------------------------------------------------------------
* NAME       : RecordWindowSetting
* PURPOSE    : Records position (x,y) when mouse is moved over canvas. 
* PARAMETERS : 
* RETURNS    : 
*----------------------------------------------------------------------------*/	
    function RecordPosition() { 
        var xyposition = document.getElementById('LocationMouseOverChart').value;
        xyposition = xyposition.replace("(", "");
        xyposition = xyposition.replace(")", "");
 
        var indx = xyposition.indexOf(",");
        var listArray1 = xyposition.split(',');
 
        if (listArray1[0] == "") { listArray1[0] = "0" };
        if (listArray1[1] == "") { listArray1[1] = "0" };
 
        document.getElementById('LocationOfMouseClickX').value = '('+ listArray1[0] + ' , ' + listArray1[1] + ')';
        //document.getElementById('LocationOfMouseClickY').value = listArray1[1];
 
    }       
 
		
 		
 
/*------------------------------------------------------------------------------
* NAME       : DragStart
* PURPOSE    : Records position (x,y) of mouse at the beginning of mouse drag. 
* PARAMETERS : 
* RETURNS    : 
*----------------------------------------------------------------------------*/	
    function DragStart() {
        document.getElementById('MouseDownIndicator').value = 1;
        document.getElementById('ShadingdataX').value = "";
        document.getElementById('ShadingdataY').value = "";

 
        //RecordWindowSetting();
        document.getElementById('RecordWindowSettingXmin').value = document.getElementById('xMinParameter').value;
        document.getElementById('RecordWindowSettingXmax').value = document.getElementById('xMaxParameter').value;
        document.getElementById('RecordWindowSettingYmin').value = document.getElementById('yMinParameter').value;
        document.getElementById('RecordWindowSettingYmax').value = document.getElementById('yMaxParameter').value;
 
        //alert(document.getElementById('RecordWindowSettingXmin').value + " ; " + document.getElementById('RecordWindowSettingXmin').value + " ; " + document.getElementById('RecordWindowSettingXmin').value + " ; " + document.getElementById('RecordWindowSettingXmin').value );
 
        var xyposition = document.getElementById('LocationMouseOverChart').value;
        xyposition = xyposition.replace("(", "");
        xyposition = xyposition.replace(")", "");
  
        var indx = xyposition.indexOf(",");
        var listArray1 = xyposition.split(',');
 
        if (listArray1[0] == "") { listArray1[0] = "0" };
        if (listArray1[1] == "") { listArray1[1] = "0" };
 
        document.getElementById('DragStartX').value = listArray1[0];
        document.getElementById('DragStartY').value = listArray1[1];
 
        document.getElementById('LocationOfMouseClickX').value =  '('+ listArray1[0] + ' , ' + listArray1[1] + ')';
        //document.getElementById('LocationOfMouseClickY').value = listArray1[1];

        //document.getElementById('TextLocationBoxX').value = listArray1[0];
        //document.getElementById('TextLocationBoxY').value = listArray1[1];

        document.getElementById('xinterceptbound1').value = parseFloat(listArray1[0]) - 0.3;
        document.getElementById('xinterceptbound2').value = parseFloat(listArray1[0]) + 0.3;

        document.getElementById('extremebound1').value = parseFloat(listArray1[0]) - 0.3;
        document.getElementById('extremebound2').value = parseFloat(listArray1[0]) + 0.3;

        document.getElementById('extremebound3').value = parseFloat(listArray1[1]) - 0.3;
        document.getElementById('extremebound4').value = parseFloat(listArray1[1]) + 0.3;

        document.getElementById('LocationIntersectionX').value = parseFloat(listArray1[0]);
        document.getElementById('LocationIntersectionY').value = parseFloat(listArray1[1]);

        var TPR = Math.pow(10,document.getElementById('TestingPointRound').value);
        document.getElementById('TestingPointX').value = Math.round(listArray1[0]*TPR)/TPR;
        document.getElementById('TestingPointY').value = Math.round(listArray1[1]*TPR)/TPR;
 
 

  
        //alert(document.getElementById('DragStartX').value + " , " + document.getElementById('DragStartY').value);
 
    }       
 
		
 

/*------------------------------------------------------------------------------
* NAME       : DragEnd
* PURPOSE    : Records position (x,y) of mouse at the end of mouse drag. 
* PARAMETERS : 
* RETURNS    : 
*----------------------------------------------------------------------------*/	
    function DragEnd() {
        document.getElementById('MouseDownIndicator').value = 0;
        var xyposition = document.getElementById('LocationMouseOverChart').value;
        xyposition = xyposition.replace("(", "");
        xyposition = xyposition.replace(")", "");
 
        var indx = xyposition.indexOf(",");
        var listArray1 = xyposition.split(',');
 
        if (listArray1[0] == "") { listArray1[0] = "0" };
        if (listArray1[1] == "") { listArray1[1] = "0" };
 
        document.getElementById('DragEndX').value = listArray1[0];
        document.getElementById('DragEndY').value = listArray1[1];
 
 
        var x1 = FindValue(document.getElementById('DragStartX').value);
        var y1 = FindValue(document.getElementById('DragStartY').value);
        var x2 = FindValue(document.getElementById('DragEndX').value);
        var y2 = FindValue(document.getElementById('DragEndY').value);

        var slope = (y2 - y1) / (x2 - x1);
        var slope2 = Math.abs(slope);
 
 
 
        //return false;
 
        //case1:  Move left
        if (slope2 < 0.2 && x1 < x2) {
            MoveLeft();
        }
        else if ((slope2 < 0.2 && x1 > x2)) {
            MoveRight();
        }
        else if ((slope2 > 3 && y1 > y2)) {
            MoveUp();
        }
        else if ((slope2 > 3 && y1 < y2)) {
            MoveDown();
        }
        else if ((slope > 0 && x1 < x2)) {
            MoveSW();
        }
        else if ((slope > 0 && x1 > x2)) {
            MoveNE();
        }
        else if ((slope < 0 && x1 > x2)) {
            MoveSE();
        }
        else if ((slope < 0 && x1 < x2)) {
            MoveNW();
        }
 
 
        isDragging = false;
        return false;
 
 
 
    }       
 

/*------------------------------------------------------------------------------
* NAME       : DragStart2
* PURPOSE    : Records position (x,y) of mouse at the beginning of mouse drag. 
* PARAMETERS : 
* RETURNS    : 
*----------------------------------------------------------------------------*/	
    function DragStart2() {
        document.getElementById('MouseDownIndicator').value = 1;
        document.getElementById('ShadingdataX').value = "";
        document.getElementById('ShadingdataY').value = "";

 
        //RecordWindowSetting();
        document.getElementById('RecordWindowSettingXmin').value = document.getElementById('xMinParameter').value;
        document.getElementById('RecordWindowSettingXmax').value = document.getElementById('xMaxParameter').value;
        document.getElementById('RecordWindowSettingYmin').value = document.getElementById('yMinParameter').value;
        document.getElementById('RecordWindowSettingYmax').value = document.getElementById('yMaxParameter').value;
 
        //alert(document.getElementById('RecordWindowSettingXmin').value + " ; " + document.getElementById('RecordWindowSettingXmin').value + " ; " + document.getElementById('RecordWindowSettingXmin').value + " ; " + document.getElementById('RecordWindowSettingXmin').value );
 
        var xyposition = document.getElementById('LocationMouseOverChart').value;
        xyposition = xyposition.replace("(", "");
        xyposition = xyposition.replace(")", "");
  
        var indx = xyposition.indexOf(",");
        var listArray1 = xyposition.split(',');
 
        if (listArray1[0] == "") { listArray1[0] = "0" };
        if (listArray1[1] == "") { listArray1[1] = "0" };
 
        document.getElementById('DragStartX').value = listArray1[0];
        document.getElementById('DragStartY').value = listArray1[1];
 
        document.getElementById('LocationOfMouseClickX').value = listArray1[0];
        document.getElementById('LocationOfMouseClickY').value = listArray1[1];

        //document.getElementById('TextLocationBoxX').value = listArray1[0];
        //document.getElementById('TextLocationBoxY').value = listArray1[1];

        document.getElementById('xinterceptbound1').value = parseFloat(listArray1[0]) - 0.3;
        document.getElementById('xinterceptbound2').value = parseFloat(listArray1[0]) + 0.3;

        document.getElementById('extremebound1').value = parseFloat(listArray1[0]) - 0.3;
        document.getElementById('extremebound2').value = parseFloat(listArray1[0]) + 0.3;

        document.getElementById('extremebound3').value = parseFloat(listArray1[1]) - 0.3;
        document.getElementById('extremebound4').value = parseFloat(listArray1[1]) + 0.3;

        document.getElementById('LocationIntersectionX').value = parseFloat(listArray1[0]);
        document.getElementById('LocationIntersectionY').value = parseFloat(listArray1[1]);

        document.getElementById('TestingPointX').value = parseFloat(listArray1[0]);
        document.getElementById('TestingPointY').value = parseFloat(listArray1[1]);


  
        //alert(document.getElementById('DragStartX').value + " , " + document.getElementById('DragStartY').value);
 
    }       
 
		
 

/*------------------------------------------------------------------------------
* NAME       : DragEnd2
* PURPOSE    : Records position (x,y) of mouse at the end of mouse drag. 
* PARAMETERS : 
* RETURNS    : 
*----------------------------------------------------------------------------*/	
    function DragEnd2() {
        document.getElementById('MouseDownIndicator').value = 0;
        var xyposition = document.getElementById('LocationMouseOverChart').value;
        xyposition = xyposition.replace("(", "");
        xyposition = xyposition.replace(")", "");
 
        var indx = xyposition.indexOf(",");
        var listArray1 = xyposition.split(',');
 
        if (listArray1[0] == "") { listArray1[0] = "0" };
        if (listArray1[1] == "") { listArray1[1] = "0" };
 
        document.getElementById('DragEndX').value = listArray1[0];
        document.getElementById('DragEndY').value = listArray1[1];
 
 
        var x1 = FindValue(document.getElementById('DragStartX').value);
        var y1 = FindValue(document.getElementById('DragStartY').value);
        var x2 = FindValue(document.getElementById('DragEndX').value);
        var y2 = FindValue(document.getElementById('DragEndY').value);
 
        if (document.getElementById('ShadingCheckbox').checked) {//shading feature is "ON"
            Shading(); 
            return;
        }
 

        var slope = (y2 - y1) / (x2 - x1);
        var slope2 = Math.abs(slope);
 
 
 
        //return false;
 
        //case1:  Move left
        if (slope2 < 0.2 && x1 < x2) {
            MoveLeft();
        }
        else if ((slope2 < 0.2 && x1 > x2)) {
            MoveRight();
        }
        else if ((slope2 > 3 && y1 > y2)) {
            MoveUp();
        }
        else if ((slope2 > 3 && y1 < y2)) {
            MoveDown();
        }
        else if ((slope > 0 && x1 < x2)) {
            MoveSW();
        }
        else if ((slope > 0 && x1 > x2)) {
            MoveNE();
        }
        else if ((slope < 0 && x1 > x2)) {
            MoveSE();
        }
        else if ((slope < 0 && x1 < x2)) {
            MoveNW();
        }
 
 
        isDragging = false;
        return false;
 
 
 
    }       
 


/*------------------------------------------------------------------------------
* NAME       : handleEvent
* PURPOSE    : Records position (x, y) of mouse over grid 
* PARAMETERS : 
* RETURNS    : 
*----------------------------------------------------------------------------*/	
    function handleEvent(e) {
        var evt = e ? e : window.event;
        var clickX = 0, clickY = 0;
        if ((evt.clientX || evt.clientY) && document.body && document.body.scrollLeft != null) {
            clickX = evt.clientX + document.body.scrollLeft;
            clickY = evt.clientY + document.body.scrollTop;
        }

        if ((evt.clientX || evt.clientY) && document.compatMode == 'CSS1Compat' && document.documentElement && document.documentElement.scrollLeft != null) {
            clickX = evt.clientX + document.documentElement.scrollLeft;
            clickY = evt.clientY + document.documentElement.scrollTop;
        }

        if (evt.pageX || evt.pageY) {
            clickX = evt.pageX;
            clickY = evt.pageY;
        }

        var clickX = clickX - 24;
        var clickY = clickY - 75;


        document.getElementById('LocationMouseOverChart').value = "(" + clickX + " , " + clickY + ")";

        var xRminn = FindValue(document.getElementById('xMinParameter').value);
        var xRmaxx = FindValue(document.getElementById('xMaxParameter').value);
        var yRminn = FindValue(document.getElementById('yMinParameter').value);
        var yRmaxx = FindValue(document.getElementById('yMaxParameter').value);

        var xRminn = parseFloat(xRminn);
        var xRmaxx = parseFloat(xRmaxx);
        var yRminn = parseFloat(yRminn);
        var yRmaxx = parseFloat(yRmaxx);


        //Number of pixels per 1 x-unit (horizontal direction)
        var dxx = 540 / (xRmaxx - xRminn);  //540 is width of canvas;

        //Number of pixels per 1 y-unit (vertical direction)
        var dyy = 540 / (yRmaxx - yRminn);  //540 is height of canvas;


        //values of x-coord and y-coord at center of canvas [position on canvas: (270, 270)]
        var CenterX = (xRmaxx + xRminn) / 2;
        var CenterY = (yRmaxx + yRminn) / 2;


        //var stepX = (FindValue(X2) - FindValue(X1)) / 540.0;
        //var stepY = (FindValue(Y2) - FindValue(Y1)) / 540.0;

        var valX = (clickX - 270) / dxx + CenterX;
        var valY = (270 - clickY) / dyy + CenterY;

        document.getElementById('LocationMouseOverChart').value = "(" + valX + " , " + valY + ")";
        if (document.getElementById("TraceON").checked == true  && document.getElementById("tracingmethod1").checked == true  ){
            var ttpp = Math.pow(10, parseInt(document.getElementById('TraceTextbox').value));
            for (var i = 1; i <= 20; i++) {
                //var valuedropbox = document.getElementById('mydropdownCartesian'+i).value;
                var valueSelect = document.getElementById('mydropdownCartesian'+i);
                var selectedText = valueSelect.options[valueSelect.selectedIndex].text;
                if(document.getElementById('tracegraph' + i).checked == true){
                    document.getElementById('TraceON').checked = true;
                    document.getElementById('TraceOFF').checked = false;
                    InputExpression = document.getElementById('TextBoxForCartesianGraph' + i).value;

                    if (InputExpression.indexOf("{") > -1) {
                        InputExpression = ProcessInequality(InputExpression);
                    }
                    if (InputExpression.indexOf("|") > -1) {
                        InputExpression = ProcessAbsoluteValue(InputExpression);
                    } 
 
                    while (InputExpression.indexOf('Root') > -1) {
                        InputExpression = processroot(InputExpression);
                        //alert('InputExpression Root:..' + InputExpression);
                        if (InputExpression == NaN) {
                            return;
                        }
                    }
                                                   
                    //for equations with "y" on  the left side
                    if(selectedText.indexOf('y')>-1){
                        var x1 = Math.round(valX * ttpp) / ttpp;  
                        var y1 = FindYYYValue(InputExpression, x1);       
                    }
                    //for equations with "x" on the left side
                    else {
                        var y1 = Math.round(valY * ttpp) / ttpp;  
                        var x1 = FindXXValue(InputExpression, y1);                               
                    }

                                
                    document.getElementById('TracePointX').value = x1;
                    document.getElementById('TracePointY').value = y1;
                    var ttr = '';
                    if(parseFloat(y1) != parseInt(y1)){
                        ttr =  " = (" + x1 + " , " + ToFraction(y1.toString()) + ")";   
                    }

                    document.getElementById('LocationOfMouseClickX2').value = "(" + x1 + " , " + y1 + ")" + ttr;

                    break;
                }
            }
            
            draw();

        }


        return false;
    }       
    





/*------------------------------------------------------------------------------
* NAME       :  handleEventKeyboard
* PURPOSE    :  Records position of mouse over vertical strip for movable keyboard
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/   
    function handleEventKeyboard(e, num) {
        //alert(num);        
        var evt = e ? e : window.event;
        var clickX = 0, clickY = 0;
        if ((evt.clientX || evt.clientY) && document.body && document.body.scrollLeft != null) {
            clickX = evt.clientX + document.body.scrollLeft;
            clickY = evt.clientY + document.body.scrollTop;
        }

        if ((evt.clientX || evt.clientY) && document.compatMode == 'CSS1Compat' && document.documentElement && document.documentElement.scrollLeft != null) {
            clickX = evt.clientX + document.documentElement.scrollLeft;
            clickY = evt.clientY + document.documentElement.scrollTop;
        }

        if (evt.pageX || evt.pageY) {
            clickX = evt.pageX;
            clickY = evt.pageY;
        }


        //alert(num);  
        if (num == '1') {
            document.getElementById('panel2').style.display = 'inline-block';
            document.getElementById('panel2').style.top = parseInt(clickY) + 'px';
            document.getElementById('panel2').style.left = '10px';
        }
        else if (num == '2') {
            document.getElementById('panel2').style.display = 'inline-block';
            document.getElementById('panel2').style.top = parseInt(clickY) + 'px';
            document.getElementById('panel2').style.left = '640px';
        }
        else if (num == '3') {
            document.getElementById('panel2').style.display = 'inline-block';
            document.getElementById('panel2').style.top = parseInt(clickY) + 'px';
            document.getElementById('panel2').style.left = '640px';
        }
        else if (num == '4') {
            document.getElementById('panel2').style.display = 'inline-block';
            document.getElementById('panel2').style.top = parseInt(clickY) + 'px';
            document.getElementById('panel2').style.left = '1340px';
        }


    }


/*------------------------------------------------------------------------------
* NAME       :  handleEventKeyboard22
* PURPOSE    :  Records position of mouse over vertical strip for movable keyboard
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/   
    function handleEventKeyboard22(top, left) {
            document.getElementById('panel2').style.display = 'inline-block';
            document.getElementById('panel2').style.top = top + 'px';
            document.getElementById('panel2').style.left = left + 'px';
    }



/*------------------------------------------------------------------------------
* NAME       :  handleEvent2
* PURPOSE    :  Records position of mouse over shading canvas
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/   
    function handleEvent2(e) {
        var evt = e ? e : window.event;
        var clickX = 0, clickY = 0;
        if ((evt.clientX || evt.clientY) && document.body && document.body.scrollLeft != null) {
            clickX = evt.clientX + document.body.scrollLeft;
            clickY = evt.clientY + document.body.scrollTop;
        }

        if ((evt.clientX || evt.clientY) && document.compatMode == 'CSS1Compat' && document.documentElement && document.documentElement.scrollLeft != null) {
            clickX = evt.clientX + document.documentElement.scrollLeft;
            clickY = evt.clientY + document.documentElement.scrollTop;
        }

        if (evt.pageX || evt.pageY) {
            clickX = evt.pageX;
            clickY = evt.pageY;
        }

        var clickX = clickX - 24;
        var clickY = clickY - 75;


        document.getElementById('LocationMouseOverChart').value = "(" + clickX + " , " + clickY + ")";

        var xRminn = FindValue(document.getElementById('xMinParameter').value);
        var xRmaxx = FindValue(document.getElementById('xMaxParameter').value);
        var yRminn = FindValue(document.getElementById('yMinParameter').value);
        var yRmaxx = FindValue(document.getElementById('yMaxParameter').value);

        var xRminn = parseFloat(xRminn);
        var xRmaxx = parseFloat(xRmaxx);
        var yRminn = parseFloat(yRminn);
        var yRmaxx = parseFloat(yRmaxx);


        //Number of pixels per 1 x-unit (horizontal direction)
        var dxx = 540 / (xRmaxx - xRminn);  //540 is width of canvas;

        //Number of pixels per 1 y-unit (vertical direction)
        var dyy = 540 / (yRmaxx - yRminn);  //540 is height of canvas;


        //values of x-coord and y-coord at center of canvas [position on canvas: (270, 270)]
        var CenterX = (xRmaxx + xRminn) / 2;
        var CenterY = (yRmaxx + yRminn) / 2;


        //var stepX = (FindValue(X2) - FindValue(X1)) / 540.0;
        //var stepY = (FindValue(Y2) - FindValue(Y1)) / 540.0;

        var valX = (clickX - 270) / dxx + CenterX;
        var valY = (270 - clickY) / dyy + CenterY;

        document.getElementById('LocationMouseOverChart').value = "(" + valX + " , " + valY + ")";
        if (document.getElementById('ShadingCheckbox').checked && document.getElementById('MouseDownIndicator').value == 1) {
            document.getElementById('ShadingdataX').value += valX + ";";
            document.getElementById('ShadingdataY').value += valY + ";";
        }


        if (document.getElementById("TraceON").checked == true) {
            var ttpp = Math.pow(10, parseInt(document.getElementById('TraceTextbox').value));

            for (var i = 1; i <= 20; i++) {
                //var valuedropbox = document.getElementById('mydropdownCartesian'+i).value;
                var valueSelect = document.getElementById('mydropdownCartesian' + i);
                var selectedText = valueSelect.options[valueSelect.selectedIndex].text;
                if (document.getElementById('tracegraph' + i).checked == true) {
                    document.getElementById('TraceON').checked = true;
                    document.getElementById('TraceOFF').checked = false;
                    InputExpression = document.getElementById('TextBoxForCartesianGraph' + i).value;

                    //for equations with "y" on  the left side
                    if (selectedText.indexOf('y') > -1) {
                        var x1 = Math.round(valX * ttpp) / ttpp;
                        var y1 = FindYYYValue(InputExpression, x1);
                    }
                    //for equations with "x" on the left side
                    else {
                        var y1 = Math.round(valY * ttpp) / ttpp;
                        var x1 = FindXXValue(InputExpression, y1);
                    }


                    document.getElementById('TracePointX').value = x1;
                    document.getElementById('TracePointY').value = y1;
                    var ttr = '';
                    if (parseFloat(y1) != parseInt(y1)) {
                        ttr = " = (" + x1 + " , " + ToFraction(y1.toString()) + ")";
                    }

                    document.getElementById('LocationOfMouseClickX2').value = "(" + x1 + " , " + y1 + ")" + ttr;

                    break;
                }
            }

            draw();

        }


        return false;
    }



/*------------------------------------------------------------------------------
* NAME       : tracingmethodbb
* PURPOSE    : Selects type of tracing (manual or automatic)
* PARAMETERS : 
* RETURNS    : 
*----------------------------------------------------------------------------*/	
    function tracingmethodbb(casenum){

        if (document.getElementById('mydropdowntracing').value < 1){
            alert('Please select an equation.');
            return;
        }

        if (casenum == '1') {
            document.getElementById('StopTracingMsg').value = 'stop';        
            document.getElementById('autotracing').style.display = 'inline-block';   
            document.getElementById('manualtracing').style.display = 'inline-block';         
        }
        else if (casenum == '2') {
            document.getElementById('tracingmethod2').checked == true;
            //if(document.getElementById('tracingmethod2').checked == false){
            //    var msg = "If you would like to start 'Automatic Tracing' feature, first click on the radio button ''Automatic Tracing'. ";
           //     alert(msg);
            //}

            document.getElementById('StopTracingMsg').value = 'continue';  
            //alert('2222222244444 xRmaxx = ');
            GraphingCalculator();  
            GraphTracingAutomatic();
        }
        else if (casenum == '3') {
            document.getElementById('StopTracingMsg').value = 'stop';             
        }
        else if (casenum == '4') {
            document.getElementById('StopTracingMsg').value = 'stop';  
            document.getElementById('autotracing').style.display = 'inline-block';
            document.getElementById('manualtracing').style.display = 'inline-block';
                       
        }

        return;
    }


/*------------------------------------------------------------------------------
* NAME       : GraphTracingAutomatic
* PURPOSE    : Traces graph automatically 
* PARAMETERS : 
* RETURNS    : 
*----------------------------------------------------------------------------*/	
    function GraphTracingAutomatic() {
        //alert('22222222222222222 xRmaxx = ');
        var xRminn = FindValue(document.getElementById('xMinParameter').value);
        var xRmaxx = FindValue(document.getElementById('xMaxParameter').value);
        var yRminn = FindValue(document.getElementById('yMinParameter').value);
        var yRmaxx = FindValue(document.getElementById('yMaxParameter').value);

        var xRminn = parseFloat(xRminn);
        var xRmaxx = parseFloat(xRmaxx);
        var yRminn = parseFloat(yRminn);
        var yRmaxx = parseFloat(yRmaxx);
        

        //Number of pixels per 1 x-unit (horizontal direction)
        var dxx = 540 / (xRmaxx - xRminn);  //540 is width of canvas;

        //Number of pixels per 1 y-unit (vertical direction)
        var dyy = 540 / (yRmaxx - yRminn);  //540 is height of canvas;


        //values of x-coord and y-coord at center of canvas [position on canvas: (270, 270)]
        var CenterX = (xRmaxx + xRminn) / 2;
        var CenterY = (yRmaxx + yRminn) / 2;


        //var stepX = (FindValue(X2) - FindValue(X1)) / 540.0;
        //var stepY = (FindValue(Y2) - FindValue(Y1)) / 540.0;

        var valX = '';
        var valY = '';
        //alert('22222222222222222 xRmaxx = ' + xRmaxx);
        
        document.getElementById('LocationMouseOverChart').value = "(" + valX + " , " + valY + ")";
        document.getElementById("tracingmethod2").checked = true;
        document.getElementById("tracingmethod1").checked = false;

        if (document.getElementById("TraceON").checked  && document.getElementById("tracingmethod2").checked ){
            var TracingStepSize = document.getElementById('Stepsizetracingmethod2').value;
            var TracingSpeed = document.getElementById('Speedtracingmethod').value;
            if(TracingStepSize.trim() == ''){
                document.getElementById('Stepsizetracingmethod2').value = 1;
                TracingStepSize = 1;
            }
            else{
                TracingStepSize = FindValue(TracingStepSize);
            }

            if(TracingSpeed.trim() == ''){
                document.getElementById('Speedtracingmethod').value = 1;
                TracingSpeed = 1;
            }
            else{
                TracingSpeed = FindValue(TracingSpeed);
            }
            
            var TracingSpeed = 1000 * parseFloat(TracingSpeed);
            var tracegraphIsSelected = false;
            var StartValueTracing = document.getElementById('StartValueTracingmethod').value;
            var EndValueTracing = document.getElementById('EndValueTracingmethod').value;
            var TracingStepSize22 = parseFloat(TracingStepSize);

            var tracegraphIsSelected = false;
            var i = 0;
            for (var ki = 1; ki <= 20; ki++) {
                if (document.getElementById('tracegraph' + ki).checked == true) {
                    i = ki;
                    tracegraphIsSelected = true;
                    break;
                }
            }
            
            //alert('22222222222222222 xRmaxx = ' + xRmaxx);
            if(tracegraphIsSelected == false){
                document.getElementById('tracegraph1').checked == true
                //var msg = "Please select a graph that you want to trace.";
                //alert(msg);
                //return;
            }
            
            
            var valueSelect = document.getElementById('mydropdownCartesian' + i);
            var selectedText = valueSelect.options[valueSelect.selectedIndex].text;
            if (document.getElementById('tracegraph' + i).checked == true) {
                document.getElementById('TraceON').checked = true;
                document.getElementById('TraceOFF').checked = false;
                InputExpression = document.getElementById('TextBoxForCartesianGraph' + i).value;

                if (InputExpression.indexOf("{") > -1) {
                    InputExpression = ProcessInequality(InputExpression);
                }

                if (InputExpression.indexOf("|") > -1) {
                    InputExpression = ProcessAbsoluteValue(InputExpression);
                }

                while (InputExpression.indexOf('Root') > -1) {
                    InputExpression = processroot(InputExpression);
                    //alert('InputExpression Root:..' + InputExpression);
                    if (InputExpression == NaN) {
                        return;
                    }
                }

                //alert('InputExpression11 = ' + InputExpression);
                //for equations with "y" on  the left side
                if (selectedText.indexOf('y') > -1) {
                    if(StartValueTracing.trim() == ''){
                        document.getElementById('StartValueTracingmethod').value = xRminn;
                        StartValueTracing = xRminn;
                    }
                    else{
                        StartValueTracing = FindValue(StartValueTracing);
                    }

                    if(EndValueTracing.trim() == ''){
                        document.getElementById('EndValueTracingmethod').value = xRmaxx;
                        EndValueTracing = xRmaxx;
                    }
                    else{
                        EndValueTracing = FindValue(EndValueTracing);
                    }

                    var StartValueTracing22 = parseFloat(StartValueTracing);
                    var EndValueTracing22 = parseFloat(EndValueTracing);
                    var valX = parseFloat(StartValueTracing22);
                    var xval = parseFloat(StartValueTracing22);
                    //alert('3333333333');
                    //clearInterval(AutomaticTracing);
                    var count = 0;

                    document.getElementById('tracingdirection1').checked = true;
                    if (document.getElementById('tracingdirection1').checked) {
                        //var loopcount = 0;
                        //alert('InputExpression22 = ' + InputExpression);
                        //var AutomaticTracing = setInterval(function () {
                        document.getElementById('TracePointX2').value = '';
                        document.getElementById('TracePointY2').value = '';

                        while (xval <= parseFloat(EndValueTracing22)) {    
                            var x1 = Math.round(xval * 100000000000) / 100000000000;
                            var y1 = FindYYYValue(InputExpression, x1);

                            var x1tt = x1;
                            var y1tt = y1;

                            var x122 = x1;
                            if (document.getElementById('xaspicartesian').checked) {
                                x122 = expressaspi(x122);
                            }


                            if (document.getElementById('yasfractioncartesian').checked == true) {
                                y1 = ToFraction(y1.toString());
                            }
                            else{
                                y1 = ToDecimal2(y1.toString());
                            }
                            ;



                            //if (x1tt >= xRminn && x1tt <= xRmaxx && y1tt >= yRminn && y1tt <= yRmaxx) {
                            //    pointcount += 1;
                            //    document.getElementById('Point' + pointcount + 'X').value = x122;
                            //    document.getElementById('Point' + pointcount + 'Y').value = y1;
                            //}


                         //document.getElementById('TracePointX').value = x122;
                         //document.getElementById('TracePointY').value = y1;

                         document.getElementById('TracePointX2').value += ';'+ x122 ;
                         document.getElementById('TracePointY2').value += ';' + y1;

                          var ttr = '';
                            if (isNaN(y1) == false) {
                                if (parseFloat(y1) != parseInt(y1)) {
                                    ttr = " = (" + x1 + " , " + ToFraction(y1.toString()) + ")";
                                }
                                //draw();
                            }



                            var stopmsg = document.getElementById('StopTracingMsg').value;
                            document.getElementById('LocationOfMouseClickX2').value = "(" + x122 + " , " + y1 + ")" + ttr;

                            xval = xval + TracingStepSize22;

                            //alert('222222222222222 valX='+xval);


                            //if (xval >= EndValueTracing22) {
                            //    loopcount += 1;
                                //alert('Currently in Automatic444444444444444 Tracing xval='+xval);
                                //clearInterval(AutomaticTracing);
                            //}

                            //if (stopmsg == 'stop' || loopcount == 8) {
                                //alert('Currently in Automatic444444444444444 Tracing xval='+xval);
                            //    clearInterval(AutomaticTracing);
                            //}

                            //if (xval > parseFloat(EndValueTracing22)) {
                                //alert('Currently in Automatic999999999999999 Tracing xval='+xval + '.....EndValueTracing22...'+EndValueTracing22);
                            //    xval = parseFloat(StartValueTracing);
                                //clearInterval(AutomaticTracing);
                            //}

                        };//, TracingSpeed);

                        draw();
                    }
                    else {
                        var AutomaticTracing = setInterval(function () {
                            var x1 = Math.round(xval * 100000000000) / 100000000000;
                            var y1 = FindYYYValue(InputExpression, x1);
                            document.getElementById('TracePointX').value = x1;
                            document.getElementById('TracePointY').value = y1;
                            var ttr = '';
                            if (isNaN(y1) == false) {
                                if (parseFloat(y1) != parseInt(y1)) {
                                    ttr = " = (" + x1 + " , " + ToFraction(y1.toString()) + ")";
                                }

                                draw();
                            }

                            var x122 = x1;
                            if (document.getElementById('xaspicartesian').checked) {
                                x122 = expressaspi(x122);
                            }
                            var stopmsg = document.getElementById('StopTracingMsg').value;
                            document.getElementById('LocationOfMouseClickX2').value = "(" + x122 + " , " + y1 + ")" + ttr;
                           
                            xval = xval - TracingStepSize22;
                            //alert('222222222222222 valX='+xval);

                            if (stopmsg == 'stop') {
                                //alert('Currently in Automatic444444444444444 Tracing xval='+xval);
                                clearInterval(AutomaticTracing);
                            }

                            if (xval < parseFloat(StartValueTracing)) {
                                //alert('Currently in Automatic999999999999999 Tracing xval='+xval + '.....EndValueTracing22...'+EndValueTracing22);
                                xval = parseFloat(EndValueTracing22);
                                //clearInterval(AutomaticTracing);
                            }

                        }, TracingSpeed);

                    }


                }                    
                else {//for equations with "x" on the left side
                    if(StartValueTracing.trim() == ''){
                            document.getElementById('StartValueTracingmethod').value = yRminn;
                            StartValueTracing = yRminn;
                     }
                     else{
                            StartValueTracing = FindValue(StartValueTracing);
                     }

                     if (EndValueTracing.trim() == '') {
                            document.getElementById('EndValueTracingmethod').value = yRmaxx;
                            EndValueTracing = yRmaxx;
                     }
                     else {
                          EndValueTracing = FindValue(EndValueTracing);
                     }

                     var valY = StartValueTracing;
                     //clearInterval(AutomaticTracing);
                     var AutomaticTracing = setInterval(function () {
                         var y1 = Math.round(valY * 10000000000) / 10000000000;
                         var x1 = FindXXValue(InputExpression, y1);
                         document.getElementById('TracePointX').value = x1;
                         document.getElementById('TracePointY').value = y1;
                         var ttr = '';
                         if (parseFloat(y1) != parseInt(y1)) {
                             ttr = " = (" + x1 + " , " + ToFraction(y1.toString()) + ")";
                         }

                         var x122 = x1;
                         if (document.getElementById('xaspicartesian').checked) {
                             x122 = expressaspi(x122);
                         }

                         var stopmsg = document.getElementById('StopTracingMsg').value;
                         document.getElementById('LocationOfMouseClickX2').value = "(" + x122 + " , " + y1 + ")" + ttr;
                         draw();
                         valY += parseFloat(TracingStepSize);
                         if (stopmsg == 'stop') {
                             clearInterval(AutomaticTracing);
                         }
                         if (valY > EndValueTracing) {
                             valY = StartValueTracing;
                             //clearInterval(AutomaticTracing);
                         }
                     }, TracingSpeed);

                  }
              }  
        }

        return false;
    }       

		
  	 		
/*------------------------------------------------------------------------------
* NAME       : RotationUp
* PURPOSE    : Increases amount of rotation of graph  
* PARAMETERS : 
* RETURNS    : 
*----------------------------------------------------------------------------*/	 	
    function RotationUp() {
        if(document.getElementById('RotationCheckbox').checked == false){
            var msg = 'In order to use to rotation feature, "on/off" checkbox '
                    + 'must be checked to activate this feature of the graphing calculator.'
            alert(msg);
            return;
        }

        if (document.getElementById('RotationDegree').value == "") {
            document.getElementById('RotationDegree').value = 0;
        }
        var val = FindValue(document.getElementById('RotationDegree').value) + 5;
        document.getElementById('RotationDegree').value = val;
        GraphingCalculator();
    }
 	
     		

/*------------------------------------------------------------------------------
* NAME       : RotationDown
* PURPOSE    : Decreases amount of rotation of graph. 
* PARAMETERS : 
* RETURNS    : 
*----------------------------------------------------------------------------*/	 
    function RotationDown() {
        if(document.getElementById('RotationCheckbox').checked == false){
            var msg = 'In order to use to rotation feature, "on/off" checkbox '
                    + 'must be checked to activate this feature of the graphing calculator.'
            alert(msg);
            return;
        }

        if (document.getElementById('RotationDegree').value == "") {
            document.getElementById('RotationDegree').value = 0;
        }
        var val = FindValue(document.getElementById('RotationDegree').value) - 5;
 
        document.getElementById('RotationDegree').value = val;
        GraphingCalculator();
    }       
 

/*------------------------------------------------------------------------------
* NAME       : EpsilonUp
* PURPOSE    : Increases value of Epsilon
* PARAMETERS : 
* RETURNS    : 
*----------------------------------------------------------------------------*/	
    function EpsilonUp() {
        if (document.getElementById('epsilonvalue').value == "") {
            document.getElementById('epsilonvalue').value = '0.1';
        }
        var val = FindValue(document.getElementById('epsilonvalue').value);
        val = parseFloat(val) + 0.01;
        val = Math.round(val * 1000000) / 1000000;
        if(val < 0.00000001){
            val = 0.00000001;
        }
        document.getElementById('epsilonvalue').value = val;
        GraphingCalculator();
    }
 	
     		

/*------------------------------------------------------------------------------
* NAME       : EpsilonDown
* PURPOSE    : Decreases value of epsilon
* PARAMETERS : 
* RETURNS    : 
*----------------------------------------------------------------------------*/	 
    function EpsilonDown() {
        if (document.getElementById('epsilonvalue').value == "") {
            document.getElementById('epsilonvalue').value = '0.1';
        }
        var val = FindValue(document.getElementById('epsilonvalue').value);
        val = parseFloat(val) - 0.001;
        val = Math.round(val * 1000000) / 1000000;
        if(val < 0.00000001){
            val = '0.00000001';
        }
        document.getElementById('epsilonvalue').value = val;
        GraphingCalculator();
    }       


/*------------------------------------------------------------------------------
* NAME       : DeltaUp
* PURPOSE    : Increases value of Delta
* PARAMETERS : 
* RETURNS    : 
*----------------------------------------------------------------------------*/	  	
     function DeltaUp() {

        if (document.getElementById('deltavalue').value == "") {
            document.getElementById('deltavalue').value = '0.1';
        }
        var val = FindValue(document.getElementById('deltavalue').value);
        val = parseFloat(val) + 0.01;
        val = Math.round(val * 1000000) / 1000000;
        if(val < 0.00000001){
            val = 0.00000001;
        }
        document.getElementById('deltavalue').value = val;
        GraphingCalculator();
    }
 	
     		

/*------------------------------------------------------------------------------
* NAME       : DeltaDown
* PURPOSE    : Decreases value of Delta
* PARAMETERS : 
* RETURNS    : 
*----------------------------------------------------------------------------*/	 
    function DeltaDown() {
        if (document.getElementById('deltavalue').value == "") {
            document.getElementById('deltavalue').value = '0.1';
        }
        var val = FindValue(document.getElementById('deltavalue').value);
        val = parseFloat(val) - 0.01;
        val = Math.round(val * 1000000) / 1000000;
        if(val < 0.00000001){
            val = '0.00000001';
        }
        document.getElementById('deltavalue').value = val;
        GraphingCalculator();
    }       
  	


/*------------------------------------------------------------------------------
* NAME       : FindExtremum
* PURPOSE    : Finds extremum point of graph 
* PARAMETERS : 
* RETURNS    : 
*----------------------------------------------------------------------------*/	 
    function FindExtremum(val) {
        if (val == 0) {
            document.getElementById('FindMaxMinIndicator').value = 0;  //for finding max
 
        }
        else if (val == 1) {
            document.getElementById('FindMaxMinIndicator').value = 1;  //for finding min
        }
 
        FindExtremumPoint();
 
    }       
 
 
/*------------------------------------------------------------------------------
* NAME       : MouseWheel
* PURPOSE    : Uses mousewheel to zoom in and zoom out graph
* PARAMETERS : 
* RETURNS    : 
*----------------------------------------------------------------------------*/	
    function MouseWheel() {
        //alert("in MouseWheel")
        var ElementCanvas = document.getElementById("canvas");
        var mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel" //FF doesn't recognize mousewheel as of FF3.x

        if (ElementCanvas.attachEvent) { //if IE (and Opera depending on user setting)
            ElementCanvas.attachEvent("on" + mousewheelevt, rotateimage3);
        }
        else if (ElementCanvas.addEventListener) { //WC3 browsers
            ElementCanvas.addEventListener(mousewheelevt, rotateimage2, false);
        }

    }


/*------------------------------------------------------------------------------
* NAME       : MouseWheel2
* PURPOSE    : Uses mousewheel to zoom in and zoom out graph
* PARAMETERS : 
* RETURNS    : 
*----------------------------------------------------------------------------*/	
    function MouseWheel2() {
        //alert("in MouseWheel")
        var ElementCanvas = document.getElementById("canvas");
        var mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel" //FF doesn't recognize mousewheel as of FF3.x

        if (ElementCanvas.attachEvent) { //if IE (and Opera depending on user setting)
            ElementCanvas.attachEvent("on" + mousewheelevt, rotateimage3);
        }
        else if (ElementCanvas.addEventListener) { //WC3 browsers
            ElementCanvas.addEventListener(mousewheelevt, rotateimage2, false);
        }

    }


/*------------------------------------------------------------------------------
* NAME       : rotateimage2
* PURPOSE    : Increases/decreases when mousewheel is used.
* PARAMETERS : 
* RETURNS    : 
*----------------------------------------------------------------------------*/	
    function rotateimage2(e) {
        var evt = window.event || e; //equalize event object
        var delta = evt.detail ? evt.detail : evt.wheelDelta;
        if (delta > 0) {
            ZoomOut();
        }
        else {
            ZoomIn();
        }

        if (evt.preventDefault) //disable default wheel action of scrolling page
            evt.preventDefault()
        else
            return false

    }

/*------------------------------------------------------------------------------
* NAME       : rotateimage3
* PURPOSE    : Increases/decreases when mousewheel is used.
* PARAMETERS : 
* RETURNS    : 
*----------------------------------------------------------------------------*/	
    function rotateimage3(e) {
        var evt = window.event || e; //equalize event object
        var delta = evt.detail ? evt.detail : evt.wheelDelta;
        if (delta > 0) {
            ZoomIn();
        }
        else {
            ZoomOut();
        }

        if (evt.preventDefault) //disable default wheel action of scrolling page
            evt.preventDefault()
        else
            return false

    }

 		
  		
/*------------------------------------------------------------------------------
* NAME       : ParametricExample
* PURPOSE    : Displays example of parametric equations
* PARAMETERS : 
* RETURNS    : 
*----------------------------------------------------------------------------*/	
    function ParametricExample() {
        var symbolpi = String.fromCharCode(960);
        document.getElementById('ParametricTmin').value = 0;
        document.getElementById('ParametricTmax').value = "2" + String.fromCharCode(960);
        document.getElementById('ParametricTstepsize').value = 0.1;
        document.getElementById('ParametricX1').value = "3 + 4Sin(t)";
        document.getElementById('ParametricY1').value = "2 + 4Cos(t)";
        document.getElementById('ParametricEquationsOnOff').checked = true;
        GraphingCalculator();
    }       

 		
 		
/*------------------------------------------------------------------------------
* NAME       : PolarExample
* PURPOSE    : Displays example of polar equation
* PARAMETERS : 
* RETURNS    : 
*----------------------------------------------------------------------------*/	
    function PolarExample() {
        var symbolpi = String.fromCharCode(960);

        document.getElementById('PolarTmin').value = 0;
        document.getElementById('PolarTmax').value = "2" + String.fromCharCode(960);
        document.getElementById('PolarTstepsize').value = 0.1;
        document.getElementById('PolarEquation1').value = "4Sin(" + String.fromCharCode(952) + ") - 5";
        document.getElementById('PolarEquationsOnOff').checked = true;
        GraphingCalculator();
    }       


/*------------------------------------------------------------------------------
* NAME       : PolarExample2
* PURPOSE    : Displays example of polar equation
* PARAMETERS : 
* RETURNS    : 
*----------------------------------------------------------------------------*/		
    function PolarExample2() {
        var symbolpi = String.fromCharCode(960);       
        document.getElementById("PointPolar1X").value = 2;
        document.getElementById("PointPolar1Y").value = "2" + String.fromCharCode(960);
        GraphingCalculator();
    }      		


 		
 		
/*------------------------------------------------------------------------------
* NAME       :  insertAtCaret
* PURPOSE    :  Inserts characters into input text field
* PARAMETERS :  characters
* RETURNS    :  new expression with inserted characters
*----------------------------------------------------------------------------*/
function insertAtCaret(element, text, val1, val2, val3, val4) {
    var userSelection;
    if (window.getSelection) {
        element.focus();
        userSelection = window.getSelection();
        userSelection.text = text;
        element.focus();
 
        var startPos = element.selectionStart;
        var endPos = element.selectionEnd;
        var scrollTop = element.scrollTop;
        element.value = element.value.substring(0, startPos + val1) + text + element.value.substring(endPos + val2, element.value.length);
        element.focus(); 
        element.selectionStart = startPos + text.length + val4;
        element.selectionEnd = startPos + text.length + val3 ;
        element.scrollTop = scrollTop;
 
        return;
 
    }
    else if (document.selection) { 
        userSelection = document.selection.createRange();
    }
     
}
 
 		
 		
/*------------------------------------------------------------------------------
* NAME       : MoveLeft
* PURPOSE    : Moves graph to the left 
* PARAMETERS : 
* RETURNS    : 
*----------------------------------------------------------------------------*/	  
 function MoveLeft() { 
        var s2 = document.getElementById('xMinParameter').value;
        var s3 = document.getElementById('xMaxParameter').value;
        //var s4 = document.getElementById('yMinParameter').value;
        //var s5 = document.getElementById('yMaxParameter').value;
 
          var result2 = 0.0;
          var result3 = 0.0;
          //var result4 = 0.0;
          //var result5 = 0.0;
 
          try {
 
            result2 = parseFloat(FindValue(s2));
            result3 = parseFloat(FindValue(s3));
            //result4 = FindValue(s4));
            //result5 = FindValue(s5));
 
            var HalfWidth = (result3 - result2) / 6;
            //var HalfHeight = (result5 - result4) / 6;
 
            document.getElementById('xMinParameter').value = result2 - HalfWidth ;
            document.getElementById('xMaxParameter').value = result3 - HalfWidth;
            //document.getElementById('yMinParameter').value = result4 + HalfHeight;
            //document.getElementById('yMaxParameter').value = result5 + HalfHeight;
  
          }
          catch (err) {
                return;
          }
  
        GraphingCalculator(); 
 
    }       
 
 		
 /*------------------------------------------------------------------------------
* NAME       : MoveRight
* PURPOSE    : Moves graph to the right.
* PARAMETERS : 
* RETURNS    : 
*----------------------------------------------------------------------------*/			
 function MoveRight() {		
    var s2 = document.getElementById('xMinParameter').value;		
    var s3 = document.getElementById('xMaxParameter').value;		
    //var s4 = document.getElementById('yMinParameter').value;		
    //var s5 = document.getElementById('yMaxParameter').value;		
        
 		
          var result2 = 0.0;
          var result3 = 0.0;
          //var result4 = 0.0;
          //var result5 = 0.0;
 
          try {
 
            result2 = parseFloat(FindValue(s2));
            result3 = parseFloat(FindValue(s3));
            //result4 = FindValue(s4));
            //result5 = FindValue(s5));
 
            var HalfWidth = (result3 - result2) / 6;
            //var HalfHeight = (result5 - result4) / 4;
 
            document.getElementById('xMinParameter').value = result2 + HalfWidth ;
            document.getElementById('xMaxParameter').value = result3 + HalfWidth;
            //document.getElementById('yMinParameter').value = result4 + HalfHeight;
            //document.getElementById('yMaxParameter').value = result5 + HalfHeight;
 
             
          }
          catch (err) {
                return;
          }
 		 		
          GraphingCalculator();
          		
 		
      }		
 		
 		
 		
 		
 
 		

 /*------------------------------------------------------------------------------
* NAME       : MoveDown
* PURPOSE    : Moves graph down
* PARAMETERS : 
* RETURNS    : 
*----------------------------------------------------------------------------*/	
    function MoveDown() {
 
        //var s2 = document.getElementById('xMinParameter').value;        
        //var s3 = document.getElementById('xMaxParameter').value;        
        var s4 = document.getElementById('yMinParameter').value;
        var s5 = document.getElementById('yMaxParameter').value;
 
        //var result2 = 0.0;
        //var result3 = 0.0;
        var result4 = 0.0;
        var result5 = 0.0;
 
        try {
 
 
            //result2 = FindValue(s2));
            //result3 = FindValue(s3));
            result4 = parseFloat(FindValue(s4));
            result5 = parseFloat(FindValue(s5));
 
            //var HalfWidth = (result3 - result2) / 6;
            var HalfHeight = (result5 - result4) / 6;
 
            var v1 = result4 - HalfHeight;
            var v2 = result5 - HalfHeight;
 
            //document.getElementById('xMinParameter').value = result2 - HalfWidth ;
            //document.getElementById('xMaxParameter').value = result3 - HalfWidth;
            document.getElementById('yMinParameter').value = v1;
            document.getElementById('yMaxParameter').value = v2;
 
 
        }
        catch (err) {
            return;
        }
 
         GraphingCalculator();
 
 
    }     
 
 
 		
 		
 

/*------------------------------------------------------------------------------
* NAME       : MoveUp
* PURPOSE    : Move graph up.
* PARAMETERS : 
* RETURNS    : 
*----------------------------------------------------------------------------*/	 
    function MoveUp() {
 
        //var s2 = document.getElementById('xMinParameter').value;
        //var s3 = document.getElementById('xMaxParameter').value;
        var s4 = document.getElementById('yMinParameter').value;
        var s5 = document.getElementById('yMaxParameter').value;
 
        //var result2 = 0.0;
        //var result3 = 0.0;
        var result4 = 0.0;
        var result5 = 0.0;
 
        try {
 
            //result2 = FindValue(s2));
            //result3 = FindValue(s3));
            result4 = parseFloat(FindValue(s4));
            result5 = parseFloat(FindValue(s5));
 
            //var HalfWidth = (result3 - result2) / 6;
            var HalfHeight = (result5 - result4) / 6;
 
            //document.getElementById('xMinParameter').value = result2 - HalfWidth ;
            //document.getElementById('xMaxParameter').value = result3 - HalfWidth;
            document.getElementById('yMinParameter').value = result4 + HalfHeight;
            document.getElementById('yMaxParameter').value = result5 + HalfHeight;
 
        }
        catch (err) {
            return;
        }
  
        GraphingCalculator();
  
    }     
 
 
 		
 		
 
 

/*------------------------------------------------------------------------------
* NAME       : MoveNW
* PURPOSE    : Moves graph in the northwest direction
* PARAMETERS : 
* RETURNS    : 
*----------------------------------------------------------------------------*/	 
    function MoveNW() {
 
        var s2 = document.getElementById('xMinParameter').value;
        var s3 = document.getElementById('xMaxParameter').value;
        var s4 = document.getElementById('yMinParameter').value;
        var s5 = document.getElementById('yMaxParameter').value;
 
        var result2 = 0.0;
        var result3 = 0.0;
        var result4 = 0.0;
        var result5 = 0.0;
 
        try {
            result2 = FindValue(s2);
            result3 = FindValue(s3);
            result4 = FindValue(s4);
            result5 = FindValue(s5);
 
            var HalfWidth = (result3 - result2) / 6;
            var HalfHeight = (result5 - result4) / 6;
 
            document.getElementById('xMinParameter').value = result2 - HalfWidth ;
            document.getElementById('xMaxParameter').value = result3 - HalfWidth;
            document.getElementById('yMinParameter').value = result4 + HalfHeight;
            document.getElementById('yMaxParameter').value = result5 + HalfHeight;
 
        }
        catch (err) {
            return;
        }
  
        GraphingCalculator();
 
 
    }     
 
 
 		
 
 
 
		
 /*------------------------------------------------------------------------------
* NAME       : MoveNE
* PURPOSE    : Moves graph in the Northeast direction
* PARAMETERS : 
* RETURNS    : 
*----------------------------------------------------------------------------*/			
      function MoveNE() {		
 		
          var s2 = document.getElementById('xMinParameter').value;		
          var s3 = document.getElementById('xMaxParameter').value;		
          var s4 = document.getElementById('yMinParameter').value;		
          var s5 = document.getElementById('yMaxParameter').value;		
         		
 		
          var result2 = 0.0;
          var result3 = 0.0;
          var result4 = 0.0;
          var result5 = 0.0;
 
          try {
 
            result2 = FindValue(s2);
            result3 = FindValue(s3);
            result4 = FindValue(s4);
            result5 = FindValue(s5);
 
            var HalfWidth = (result3 - result2) / 6;
            var HalfHeight = (result5 - result4) / 6;
 
            document.getElementById('xMinParameter').value = result2 + HalfWidth ;
            document.getElementById('xMaxParameter').value = result3 + HalfWidth;
            document.getElementById('yMinParameter').value = result4 + HalfHeight;
            document.getElementById('yMaxParameter').value = result5 + HalfHeight;
 
 
          }
          catch (err) {
                return;
          }
 		
 		
 		
          GraphingCalculator();	
          		
 		
      }		
 		
 		
 		
 
 
 
 
		
 /*------------------------------------------------------------------------------
* NAME       : MoveSW
* PURPOSE    : Moves graph in the Southwest direction
* PARAMETERS : 
* RETURNS    : 
*----------------------------------------------------------------------------*/			
      function MoveSW() {		
 		
         var s2 = document.getElementById('xMinParameter').value;		
         var s3 = document.getElementById('xMaxParameter').value;		
         var s4 = document.getElementById('yMinParameter').value;		
         var s5 = document.getElementById('yMaxParameter').value;		
         var symbolPI = String.fromCharCode(960);		
 		
          var result2 = 0.0;
          var result3 = 0.0;
          var result4 = 0.0;
          var result5 = 0.0;
 
          try {
 
            result2 = FindValue(s2);
            result3 = FindValue(s3);
            result4 = FindValue(s4);
            result5 = FindValue(s5);
 
            var HalfWidth = (result3 - result2) / 6;
            var HalfHeight = (result5 - result4) / 6;
 
            document.getElementById('xMinParameter').value = result2 - HalfWidth ;
            document.getElementById('xMaxParameter').value = result3 - HalfWidth;
            document.getElementById('yMinParameter').value = result4 - HalfHeight;
            document.getElementById('yMaxParameter').value = result5 - HalfHeight;
 
 
          }
          catch (err) {
                return;
          } 
 		
 		
 		
          GraphingCalculator();	
          		
 		
      }		
 		
 		
 		
 
 
 
 
		
 /*------------------------------------------------------------------------------
* NAME       : MoveSE
* PURPOSE    : Moves graph in the Southeast direction
* PARAMETERS : 
* RETURNS    : 
*----------------------------------------------------------------------------*/		
      function MoveSE() {		
 		
          var s2 = document.getElementById('xMinParameter').value;		
          var s3 = document.getElementById('xMaxParameter').value;		
          var s4 = document.getElementById('yMinParameter').value;		
          var s5 = document.getElementById('yMaxParameter').value;		
         		
 		
          var result2 = 0.0;
          var result3 = 0.0;
          var result4 = 0.0;
          var result5 = 0.0;
 
          try {
 
            result2 = FindValue(s2);
            result3 = FindValue(s3);
            result4 = FindValue(s4);
            result5 = FindValue(s5);
 
            var HalfWidth = (result3 - result2) / 6;
            var HalfHeight = (result5 - result4) / 6;
 
            document.getElementById('xMinParameter').value = result2 + HalfWidth ;
            document.getElementById('xMaxParameter').value = result3 + HalfWidth;
            document.getElementById('yMinParameter').value = result4 - HalfHeight;
            document.getElementById('yMaxParameter').value = result5 - HalfHeight;
 
 
          }
          catch (err) {
                return;
          } 
 		
 		
          GraphingCalculator();	
          		
 		
      }		
 		
 		


/*------------------------------------------------------------------------------
* NAME       :  MainView
* PURPOSE    :  Sets viewing window of grid: [left, right, bottom, top] = [-15, 15, -15, 15]
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function MainView() {

        document.getElementById('xMinParameter').value = "-15";
        document.getElementById('xMaxParameter').value = "15";
        document.getElementById('yMinParameter').value = "-15";
        document.getElementById('yMaxParameter').value = "15";

        GraphingCalculator();

    }


/*------------------------------------------------------------------------------
* NAME       :  ZoomIn
* PURPOSE    :  Reduces current setting of viewing window of grid by a factor of 0.5
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function ZoomIn() {
 
        var s2 = document.getElementById('xMinParameter').value;
        var s3 = document.getElementById('xMaxParameter').value;
        var s4 = document.getElementById('yMinParameter').value;
        var s5 = document.getElementById('yMaxParameter').value;


        var ZoomFactor = 0.5;
 


        var result2 = ZoomFactor * FindValue(s2);
        var result3 = ZoomFactor * FindValue(s3);
        var result4 = ZoomFactor * FindValue(s4);
        var result5 = ZoomFactor * FindValue(s5);


        var dx = (result3 - result2) / 30;
        var val1 = result2 / (result3 - result2);
        var val1 = parseInt(val1 * 30);
        val1 = Math.abs(val1);
        var val2 = 30 - val1;
 
        if (dx < 1) {
            if (dx >= 0.5) {
                result2 = -0.5 * val1;
                result3 = 0.5 * val2;
            }
            else if (dx >= 0.25) {
                result2 = -0.25 * val1;
                result3 = 0.25 * val2;
            }
            else if (dx >= 0.125) {
                result2 = -0.125 * val1;
                result3 = 0.125 * val2;
            }
 
            else if (dx >= 0.05) {
                result2 = -0.05 * val1;
                result3 = 0.05 * val2;
            }
            else if (dx >= 0.001) {
                result2 = -0.001 * val1;
                result3 = 0.001 * val2;
            }
            else if (dx >= 0.0005) {
                result2 = -0.0005 * val1;
                result3 = 0.0005 * val2;
            }
            else if (dx >= 0.00001) {
                result2 = -0.00001 * val1;
                result3 = 0.00001 * val2;
            }
            else if (dx >= 0.000005) {
                result2 = -0.000005 * val1;
                result3 =  0.000005 * val2;
            }
             else if (dx >= 0.0000001) {
                result2 =  -0.0000001 * val1;
                result3 =   0.0000001 * val2;
            }
            else if (dx >= 0.00000005) {
                result2 = -0.00000005 * val1;
                result3 =  0.00000005 * val2;
            }
             else if (dx >= 0.000000001) {
                result2 =  -0.000000001 * val1;
                result3 =   0.000000001 * val2;
            }
            else if (dx >= 0.0000000005) {
                result2 = -0.0000000005 * val1;
                result3 =  0.0000000005 * val2;
            } 


            else {
                for (var i = 7; i <= 300; i++) {
                    if (i % 2 == 0) {
                        var value1 = 5 * Math.pow(10, -i);
                        if (dx >= value1) {
                            result2 = -value1 * val1;
                            result3 = value1 * val1;
                            break;
                        }
                    }
                    else {
                        var value1 = Math.pow(10, -i);
                        if (dx >= value1) {
                            result2 = -value1 * val1;
                            result3 = value1 * val1;
                            break;
                        }
                    }
                }
            }//


        } 
 
 
        document.getElementById('xMinParameter').value = result2;
        document.getElementById('xMaxParameter').value = result3;
 
 
        var dy = (result5 - result4) / 30;
        var val3 = result4 / (result5 - result4);
        var val3 = parseInt(val3 * 30);
        val3 = Math.abs(val3);
        var val4 = 30 - val3;
 
 
        //alert("hell0 dy = " + dy + "..... val3 = " + val3 + "...... val4 = " + val4);
        if (dy < 1) {
            if (dy >= 0.5) {
                result4 = -0.5 * val3;
                result5 = 0.5 * val4;
            }
            else if (dy >= 0.25) {
                result4 = -0.25 * val3;
                result5 = 0.25 * val4;
            }
            else if (dy >= 0.125) {
                result4 = -0.125 * val3;
                result5 = 0.125 * val4;
            }
            else if (dy >= 0.05) {
                result4 = -0.05 * val3;
                result5 = 0.05 * val4;
            }
            else if (dy >= 0.001) {
                result4 = -0.001 * val3;
                result5 = 0.001 * val4;
            }
            else if (dy >= 0.0005) {
                result4 = -0.0005 * val3;
                result5 = 0.0005 * val4;
            }
            else if (dy >= 0.00001) {
                result4 = -0.00001 * val3;
                result5 =  0.00001 * val4;
            }
            else if (dy >= 0.000005) {
                result4 = -0.000005 * val3;
                result5 =  0.000005 * val4;
            }
            else if (dy >= 0.0000001) {
                result4 = -0.0000001 * val3;
                result5 =  0.0000001 * val4;
            }
            else if (dy >= 0.00000005) {
                result4 = -0.00000005 * val3;
                result5 =  0.00000005 * val4;
            }
            else if (dy >= 0.000000001) {
                result4 = -0.000000001 * val3;
                result5 =  0.000000001 * val4;
            }
            else if (dy >= 0.0000000005) {
                result4 = -0.0000000005 * val3;
                result5 =  0.0000000005 * val4;
            }             
            else if (dy >= 0.00000000001) {
                result4 = -0.00000000001 * val3;
                result5 =  0.00000000001 * val4;
            }
            else if (dy >= 0.000000000005) {
                result4 = -0.000000000005 * val3;
                result5 =  0.000000000005 * val4;
            }             

            else {
                for (var i = 7; i <= 300; i++) {
                    if (i % 2 == 0) {
                        var value1 = 5 * Math.pow(10, -i);
                        if (dx >= value1) {
                            result4 = -value1 * val3;
                            result5 = value1 * val4;
                            break;
                        }
                    }
                    else {
                        var value1 = Math.pow(10, -i);
                        if (dx >= value1) {
                            result4 = -value1 * val3;
                            result5 = value1 * val4;
                            break;
                        }
                    }
                }
 
            }


        }
 
 
        document.getElementById('yMinParameter').value = result4;
        document.getElementById('yMaxParameter').value = result5;
 

        GraphingCalculator();
 
 
   }       
 
 
/*------------------------------------------------------------------------------
* NAME       :  ZoomOut
* PURPOSE    :  Increases current setting of viewing window of grid by a factor of 2
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function ZoomOut() {

        var s2 = document.getElementById('xMinParameter').value;
        var s3 = document.getElementById('xMaxParameter').value;
        var s4 = document.getElementById('yMinParameter').value;
        var s5 = document.getElementById('yMaxParameter').value;
 
        var ZoomFactor = 2;
 
        var result2 = ZoomFactor * FindValue(s2);
        var result3 = ZoomFactor * FindValue(s3);
        var result4 = ZoomFactor * FindValue(s4);
        var result5 = ZoomFactor * FindValue(s5);
 
        var dx = (result3 - result2) / 30;
        var val1 = result2 / (result3 - result2);
        var val1 = parseInt(val1 * 30);
        val1 = Math.abs(val1);
        var val2 = 30 - val1;
 
        if (dx > 4) {
            if (dx < 10) {
                result2 = -5 * val1;
                result3 = 5 * val2;
            }
            else if (dx < 20) {
                result2 = -10 * val1;
                result3 = 10 * val2;
            }
            else if (dx < 50) {
                result2 = -25 * val1;
                result3 = 25 * val2;
            }
            else if (dx < 100) {
                result2 = -50 * val1;
                result3 = 50 * val2;
            }
            else if (dx < 200) {
                result2 = -100 * val1;
                result3 = 100 * val2;
            }
            else if (dx < 500) {
                result2 = -250 * val1;
                result3 = 250 * val2;
            }
            else if (dx < 1000) {
                result2 = -500 * val1;
                result3 = 500 * val2;
            }
            else if (dx < 5000) {
                result2 = -2500 * val1;
                result3 = 2500 * val2;
            }
            else if (dx < 10000) {
                result2 = -5000 * val1;
                result3 = 5000 * val2;
            }
            else if (dx < 20000) {
                result2 = -10000 * val1;
                result3 = 10000 * val2;
            }
            else if (dx < 50000) {
                result2 = -25000 * val1;
                result3 = 25000 * val2;
            }
 
            else if (dx < 100000) {
                result2 = -50000 * val1;
                result3 = 50000 * val2;
            }
            else if (dx < 200000) {
                result2 = -100000 * val1;
                result3 = 100000 * val2;
            }
            else if (dx < 500000) {
                result2 = -250000 * val1;
                result3 = 250000 * val2;
            }
            else {
                for (var i = 6; i <= 300; i++) {
                    if (dx < Math.pow(10, i)) {
                        result2 = -Math.pow(10, i) * val1;
                        result3 = Math.pow(10, i) * val2;
                        break;
                    }
                }
            }
 
        }


        document.getElementById('xMinParameter').value = ToDecimal(result2.toString());
        document.getElementById('xMaxParameter').value = ToDecimal(result3.toString());
 
 
        var dy = (result5 - result4) / 30;
        var val3 = result4 / (result5 - result4);
        var val3 = parseInt(val3 * 30);
        val3 = Math.abs(val3);
        var val4 = 30 - val3;
 
        if (dy > 4) {
            if (dy < 10) {
                result4 = -5 * val3;
                result5 = 5 * val4;
 
            }
            else if (dy < 20) {
                result4 = -10 * val3;
                result5 = 10 * val4;
 
            }
            else if (dy < 50) {
                result4 = -25 * val3;
                result5 = 25 * val4;
 
            }
 
            else if (dy < 100) {
                result4 = -50 * val3;
                result5 = 50 * val4;
 
            }
            else if (dy < 200) {
                result4 = -100 * val3;
                result5 = 100 * val4;
 
            }
            else if (dy < 500) {
                result4 = -250 * val3;
                result5 = 250 * val4;
 
            }
            else if (dy < 1000) {
                result4 = -500 * val3;
                result5 = 500 * val4;
            }
 
            else if (dy < 5000) {
                result4 = -2500 * val3;
                result5 = 2500 * val4;
            }
 
            else if (dy < 10000) {
                result4 = -5000 * val3;
                result5 = 5000 * val4;
            }
 
            else if (dy < 20000) {
                result4 = -10000 * val3;
                result5 = 10000 * val4;
            }
            else if (dy < 50000) {
                result4 = -25000 * val3;
                result5 = 25000 * val4;
            }
 
            else if (dy < 100000) {
                result4 = -50000 * val3;
                result5 = 50000 * val4;
            }
 
            else if (dy < 200000) {
                result4 = -100000 * val3;
                result5 = 100000 * val4;
            }
            else if (dy < 500000) {
                result4 = -250000 * val3;
                result5 = 250000 * val4;
            }
 
            else {
                for (var i = 6; i <= 300; i++) {
                    if (dy < Math.pow(10, i)) {
                        result4 = -Math.pow(10, i) * val3;
                        result5 = Math.pow(10, i) * val4;
                        break;
                    }
                }
            }
 
        }
 
        document.getElementById('yMinParameter').value = ToDecimal(result4.toString());
        document.getElementById('yMaxParameter').value = ToDecimal(result5.toString());
  
        GraphingCalculator();
 
 
 
    }


/*------------------------------------------------------------------------------
* NAME       :  clearrrYvalue
* PURPOSE    :  Clears all graphs
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function clearrrYvalue() {

        document.getElementById('Y1value').value = '';
        document.getElementById('Y2value').value = '';
        document.getElementById('Y3value').value = '';
        document.getElementById('Y4value').value = '';
        document.getElementById('Y5value').value = '';

        return;

        document.getElementById('X1Point1').value = '';
        document.getElementById('X1Point2').value = '';
        document.getElementById('X1Point3').value = '';
        document.getElementById('X1Point4').value = '';
        document.getElementById('X1Point5').value = '';

        document.getElementById('X2Point1').value = '';
        document.getElementById('X2Point2').value = '';
        document.getElementById('X2Point3').value = '';
        document.getElementById('X2Point4').value = '';
        document.getElementById('X2Point5').value = '';

        document.getElementById('X3Point1').value = '';
        document.getElementById('X3Point2').value = '';
        document.getElementById('X3Point3').value = '';
        document.getElementById('X3Point4').value = '';
        document.getElementById('X3Point5').value = '';

        document.getElementById('X4Point1').value = '';
        document.getElementById('X4Point2').value = '';
        document.getElementById('X4Point3').value = '';
        document.getElementById('X4Point4').value = '';
        document.getElementById('X4Point5').value = '';

    }


/*------------------------------------------------------------------------------
* NAME       :  clearParametricTable
* PURPOSE    :  Clears Tmin, Tmax, Stepsize values for parameteric-equation table of values
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function clearParametricTable() {
        document.getElementById('TminParametricEqu').value = '';
        document.getElementById('TmaxParametricEqu').value = '';
        document.getElementById('StepsizeParametricEqu').value = '';

    }

/*------------------------------------------------------------------------------
* NAME       :  clearVertical
* PURPOSE    :  Clears textbox document.getElementById('LocationMouseOverChart')
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function clearVertical() {
        document.getElementById('LocationMouseOverChart').value = '';
    }


/*------------------------------------------------------------------------------
* NAME       :  ClearGraphs
* PURPOSE    :  Clears graphs
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function ClearGraphs() {
        document.getElementById('implicitdata').value = '';
        document.getElementById('TracePointX').value = '';
        document.getElementById('TracePointY').value = '';

        document.getElementById('LocationOfMouseClickX2').value = '';
        document.getElementById('LocationOfMouseClickY2').value = '';
        document.getElementById('TraceON').checked = false;
        document.getElementById('TraceOFF').checked = true;
        document.getElementById('ReflectionCheckbox').checked = false;

        var count = 0;
        var myVarClear = setInterval(function () {
            count += 1;
            if (count == 1) {
                clearcartesianpoint();
                clearellipse();
                clearcircle();

            }
            else if (count == 2) {
                clearparametric();
                ClearPolarGraphs();
                ClearPolarPoint();
            }
            else if (count == 3) {
                 for (var i = 1; i <= 20; i++) {
                    document.getElementById('TextBoxForCartesianGraph'+i).value = '';
                }
            }
            else if (count == 4) {
                MainView();
                draw();//GraphingCalculator();
            }
            else{
                clearInterval(myVarClear);
                //alert('finish');
            }
        }, 300);
  }


/*------------------------------------------------------------------------------
* NAME       :  ClearPolarGraphs
* PURPOSE    :  Clears polar equation inputs
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function ClearPolarGraphs() {
        for (var i = 1; i <= 20; i++) {
            document.getElementById('PolarEquation' + i).value = '';
        }

        GraphingCalculator();
    }
  
/*------------------------------------------------------------------------------
* NAME       :  ClearPolarPoint
* PURPOSE    :  Clear polar point inputs
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function ClearPolarPoint() {
        for (var i = 1; i <= 20; i++) {
            document.getElementById("PointPolar" + i + "X").value = '';
            document.getElementById("PointPolar" + i + "Y").value = '';
        }
        GraphingCalculator();
    }

  
 /*------------------------------------------------------------------------------
* NAME       :  clearABC
* PURPOSE    :  Clears inputs for "Drawing Line" feature
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/ 
    function clearABC() {
        document.getElementById('DrawLinePoint1X').value = '';
        document.getElementById('DrawLinePoint1Y').value = '';
        document.getElementById('DrawLinePoint2X').value = '';
        document.getElementById('DrawLinePoint2Y').value = '';
    }


 /*------------------------------------------------------------------------------
* NAME       :  cleardatastorage
* PURPOSE    :  Clears all storage of data used for drawing graph
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/ 
    function cleardatastorage(){
        for(i=1;i<=20;i++){
            document.getElementById('GraphY' + i).value = '';
            document.getElementById('GraphX' + i).value = '';
        }

    }

 /*------------------------------------------------------------------------------
* NAME       :  clearcircle
* PURPOSE    :  Clears inputs for drawing circle
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/   
    function clearcircle(){
        for (var i = 1; i <= 10; i++) {
            document.getElementById("TextBoxCircleA"+i).value = '';  
            document.getElementById("TextBoxCircleB"+i).value = '';  
            document.getElementById("TextBoxCircleC"+i).value = '';  
        }

        GraphingCalculator();
    }

/*------------------------------------------------------------------------------
* NAME       :  clearellipse
* PURPOSE    :  Clears inputs for drawing ellipse
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function clearellipse(){
        for (var i = 1; i <= 4; i++) {
            document.getElementById("TextBoxconicAAA" + i).value = '';
            document.getElementById("TextBoxconicBBB" + i).value = '';
            document.getElementById("TextBoxconicCCC" + i).value = '';
            document.getElementById("TextBoxconicDDD" + i).value = '';
            document.getElementById("TextBoxconicEEE" + i).value = '';
            document.getElementById("TextBoxconicFFF" + i).value = '';
        }

        GraphingCalculator();
    }
 
 /*------------------------------------------------------------------------------
* NAME       :  clearparametric
* PURPOSE    :  Clears inputs for parametric equations
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/   
    function clearparametric(){
        for (var i = 1; i <= 10; i++) {
            document.getElementById('ParametricX' + i).value = '';
            document.getElementById('ParametricY' + i).value = '';
        }

        GraphingCalculator();
    }

/*------------------------------------------------------------------------------
* NAME       :  clearepolar
* PURPOSE    :  Clears inputs for polar equations
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function clearepolar(){
        for (var i = 1; i <= 4; i++) {
            document.getElementById("TextBoxCircleA" + i).value = '';
            document.getElementById("TextBoxCircleB" + i).value = '';
            document.getElementById("TextBoxCircleC" + i).value = '';
            document.getElementById("TextBoxconicAAA" + i).value = '';
            document.getElementById("TextBoxconicBBB" + i).value = '';
            document.getElementById("TextBoxconicCCC" + i).value = '';
            document.getElementById("TextBoxconicDDD" + i).value = '';
            document.getElementById("TextBoxconicEEE" + i).value = '';
            document.getElementById("TextBoxconicFFF" + i).value = '';
            document.getElementById('ParametricX' + i).value = '';
            document.getElementById('ParametricY' + i).value = '';
        }
        GraphingCalculator();
    }

/*------------------------------------------------------------------------------
* NAME       :  clearBCD
* PURPOSE    :  Clears inputs for "Drawing Line" feature
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function clearBCD() {
        document.getElementById('DrawLineSlope').value = '';
        document.getElementById('DrawLinePointPoint2X').value = '';
        document.getElementById('DrawLinePointPoint2Y').value = '';

    }

/*------------------------------------------------------------------------------
* NAME       :  clearCDE
* PURPOSE    :  Clears inputs for "Drawing Parabola" feature
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function clearCDE() {
        document.getElementById('DrawParabolaPoint1X').value = '';
        document.getElementById('DrawParabolaPoint1Y').value = '';
        document.getElementById('DrawParabolaPoint2X').value = '';
        document.getElementById('DrawParabolaPoint2Y').value = '';

    }

/*------------------------------------------------------------------------------
* NAME       :  clearDEF
* PURPOSE    :  Clears inputs for "Drawing Parabola" feature
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function clearDEF() {
        document.getElementById('DrawParabolaBBPoint1X').value = '';
        document.getElementById('DrawParabolaBBPoint1Y').value = '';
        document.getElementById('DrawParabolaBBPoint2X').value = '';
        document.getElementById('DrawParabolaBBPoint2Y').value = '';
        document.getElementById('DrawParabolaBBPoint3X').value = '';
        document.getElementById('DrawParabolaBBPoint3Y').value = '';
    }


/*------------------------------------------------------------------------------
* NAME       :  clearEFG
* PURPOSE    :  Clears inputs for "Drawing Circle" feature
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function clearEFG() {
        document.getElementById('DrawCircleCenterX').value = '';
        document.getElementById('DrawCircleCenterY').value = '';
        document.getElementById('DrawCircleRadius').value = '';

    }

/*------------------------------------------------------------------------------
* NAME       :  clearEFGGGG
* PURPOSE    :  Clears inputs for "Drawing Ellipse" feature
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function clearEFGGGG() {
        document.getElementById('DrawEllipseVal1').value = '';
        document.getElementById('DrawEllipseVal2').value = '';
        document.getElementById('DrawEllipseVal3').value = '';
        document.getElementById('DrawEllipseVal4').value = '';
    }

/*------------------------------------------------------------------------------
* NAME       :  clearEFGHHH
* PURPOSE    :  Clears inputs for "Drawing Hyperbola" feature
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function clearEFGHHH() {
        document.getElementById('DrawHyperbolaVal1').value = '';
        document.getElementById('DrawHyperbolaVal2').value = '';
        document.getElementById('DrawHyperbolaVal3').value = '';
        document.getElementById('DrawHyperbolaVal4').value = '';
    }


/*------------------------------------------------------------------------------
* NAME       :  clearFGH
* PURPOSE    :  Clears inputs for "Drawing Parallel Lines" feature
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function clearFGH() {
        document.getElementById('DrawTwoParralelLines1').value = '';
        document.getElementById('DrawTwoParralelLines2').value = '';
        document.getElementById('DrawTwoParralelLines3').value = '';
        document.getElementById('DrawTwoParralelLines4').value = '';
        document.getElementById('DrawTwoParralelLines5').value = '';

    }

/*------------------------------------------------------------------------------
* NAME       :  clearGHI
* PURPOSE    :  Clears inputs for "Drawing Perpendicular Lines" feature
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function clearGHI() {
        document.getElementById('DrawTwoPerpendicularLines1').value = '';
        document.getElementById('DrawTwoPerpendicularLines2').value = '';
        document.getElementById('DrawTwoPerpendicularLines3').value = '';
        document.getElementById('DrawTwoPerpendicularLines4').value = '';
        document.getElementById('DrawTwoPerpendicularLines5').value = '';
    }

/*------------------------------------------------------------------------------
* NAME       :  clearcartesianpoint
* PURPOSE    :  Clears inputs for Cartesian points
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function clearcartesianpoint() {
        document.getElementById('TracePointX').value = '';
        document.getElementById('TracePointY').value = '';

        document.getElementById('TracePointX2').value = '';
        document.getElementById('TracePointY2').value = '';

        for (var i = 1; i <= 40; i++) {
            var tt1 = "Point" + i + "X";
            var tt2 = "Point" + i + "Y";
            document.getElementById(tt1).value = '';
            document.getElementById(tt2).value = '';
        }

        GraphingCalculator();
    }

    function clearrr35() {
    }

/*------------------------------------------------------------------------------
* NAME       :  clearrr37
* PURPOSE    :  Clears inputs for polar points
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function clearrr37() {
        for (var i = 1; i <= 20; i++) {
            document.getElementById("PointPolar"+i+"X").value = '';
            document.getElementById("PointPolar"+i+"Y").value = '';  
        }


        GraphingCalculator();
    }


/*------------------------------------------------------------------------------
* NAME       :  clearrr2
* PURPOSE    :  Clears input of element wit focus
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function clearrr2() {
        var symbol = '';
        var FocusID = document.getElementById('CurrentFocusID').value;
        document.getElementById(FocusID).value = '';
        return;
    }


/*------------------------------------------------------------------------------
* NAME       :  Example1
* PURPOSE    :  Inputs examples of Cartesian equations
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/
	
    function Example1() {		
        var symbol1 = String.fromCharCode(8730);	 //square root
        	
        var symbol2 = String.fromCharCode(160);		//space
        var symbol3 = String.fromCharCode(773);		//overline
 		var symbolSquareRoot = symbol1 + symbol2 + symbol3;  // square root symbol
        var symbolSquare = String.fromCharCode(178);  // square symbol 
        var symbol4 = String.fromCharCode(8731);	
        var symbolCube = symbol4 + symbol2 + symbol3;  // cube symbol      
          		
        
        document.getElementById('TextBoxForCartesianGraph1').value = "(2/3)x + 4/5";		
        document.getElementById('TextBoxForCartesianGraph2').value = "x" + symbolSquare;		
        document.getElementById('TextBoxForCartesianGraph3').value = symbolSquareRoot+"(x + 4)";		
        document.getElementById('TextBoxForCartesianGraph4').value = "Log(x - 2)";		
        document.getElementById('TextBoxForCartesianGraph5').value = "-5";		
        document.getElementById('TextBoxForCartesianGraph6').value = "x" + symbolSquare + " + 2";		
        document.getElementById('TextBoxForCartesianGraph7').value = "Log(x + 2)";		
        document.getElementById('TextBoxForCartesianGraph8').value = symbolCube + "(x)";
        GraphingCalculator();
 
    }		
 		
       		
     		
 		
/*------------------------------------------------------------------------------
* NAME       :  Example2
* PURPOSE    :  Inputs examples of Cartesian equation
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/		
    function Example2() {		
 		
        var symbol1 = String.fromCharCode(8730);		
        var symbol2 = String.fromCharCode(160);		
        var symbol3 = String.fromCharCode(773);		
        var symbol4 = symbol1 + symbol2 + symbol3;  // square root symbol		
 		
        document.getElementById('TextBoxForCartesianGraph1').value = symbol4 + "(3x + 4) - 5";		
	    GraphingCalculator();
 		
    }		
 		
     		
 		
 		
/*------------------------------------------------------------------------------
* NAME       :  Example3
* PURPOSE    :  Inputs examples of Cartesian equation
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/		
    function Example3() {		
        var symbol = String.fromCharCode(178);		
        document.getElementById('TextBoxForCartesianGraph1').value = "2((5/6)x + 4/5)" + symbol + "+ 4/7";		
        GraphingCalculator();
    }		
 		
     		
 		
 		
/*------------------------------------------------------------------------------
* NAME       :  Example4
* PURPOSE    :  Inputs examples of Cartesian equation
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/		
    function Example4() {		
 		
        var symbol = String.fromCharCode(178);		
        document.getElementById('TextBoxForCartesianGraph1').value = "2(3.2x + 4/5)" + symbol + "- 4/7";		
	    GraphingCalculator();
    }		
 		
     		
 		
/*------------------------------------------------------------------------------
* NAME       :  Example5
* PURPOSE    :  Inputs examples of Cartesian equation
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/		
    function Example5() {		 		
        var symbol = String.fromCharCode(179);		
        document.getElementById('TextBoxForCartesianGraph1').value = "(3.2x + 4/5)/(x + 2)" + symbol;		
        GraphingCalculator();
    }		
 		
     		
 		
/*------------------------------------------------------------------------------
* NAME       :  Example6
* PURPOSE    :  Inputs examples of Cartesian equation
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/		
    function Example6() {	 		
        var symbol = String.fromCharCode(179);		
        document.getElementById('TextBoxForCartesianGraph1').value = "2Abs(3.2x + 4/5) - 6";		
	    GraphingCalculator();
    }		
 		
  		
 		
/*------------------------------------------------------------------------------
* NAME       :  Reflection
* PURPOSE    :  Reflects Cartesian graph over x-axis, y-axis, or line y=x
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function Reflection(x) {
        document.getElementById('ReflectionModeIndicator').value = x;
        GraphingCalculator(); 
    }       
		
 		
 



/*------------------------------------------------------------------------------
* NAME       :  CartesianMode
* PURPOSE    :  Turns on/off graphing in Cartesian mode
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function CartesianMode(val) {              
        if(val == 1){
            document.getElementById('CartesianModeOn').style.backgroundColor = '#fcff10';
            document.getElementById('CartesianModeOff').style.backgroundColor = '';
        }
        else{
            document.getElementById('CartesianModeOn').style.backgroundColor = '';
            document.getElementById('CartesianModeOff').style.backgroundColor = '#fcff10';
        }
        
        document.getElementById('CartesianSystemIndicator').value = val;
        GraphingCalculator();
    }

/*------------------------------------------------------------------------------
* NAME       :  PolarMode
* PURPOSE    :  Turns on/off graphing in polar mode
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function PolarMode(val) {
        if(val == 1){
            document.getElementById('PolarModeOn').style.backgroundColor = '#fcff10';
            document.getElementById('PolarModeOff').style.backgroundColor = '';
        }
        else{
            document.getElementById('PolarModeOn').style.backgroundColor = '';
            document.getElementById('PolarModeOff').style.backgroundColor = '#fcff10';
        }

        document.getElementById('PolarSystemIndicator').value = val;
        GraphingCalculator();
    }

/*------------------------------------------------------------------------------
* NAME       :  ConicExample1
* PURPOSE    :  Inputs example of a conic section
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function ConicExample1() {
        //alert('kkkkkkk');
        document.getElementById('TextBoxCircleA1').value = "x - 4";
        //document.getElementById('TextBoxconicA').value = "+";
        document.getElementById('TextBoxCircleB1').value = "y - 3";
        document.getElementById('TextBoxCircleC1').value = "9";


        GraphingCalculator();
    }

/*------------------------------------------------------------------------------
* NAME       :  ConicExample2
* PURPOSE    :  Inputs example of a conic section
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function ConicExample2() {
        document.getElementById('TextBoxconicAAA1').value = "x - 4";
        document.getElementById('TextBoxconicEEE1').value = "25";
        document.getElementById('TextBoxconicBBB1').value = "+";
        document.getElementById('TextBoxconicCCC1').value = "y + 3";
        document.getElementById('TextBoxconicDDD1').value = "16";
        document.getElementById('TextBoxconicFFF1').value = "1";

        GraphingCalculator();
    }

    

/*------------------------------------------------------------------------------
* NAME       :  tableCreateY1234
* PURPOSE    :  Creates table of value for Cartesian equation
* PARAMETERS :  x-values and y-values
* RETURNS    :  table of values
*----------------------------------------------------------------------------*/
    function tableCreateY1234(xdata, ydata,TableName, color,EquName,columnName) {          
        var body = document.body,
        tbl = document.createElement('table');
        tbl.style.width = '100%';
        tbl.style.border = "1px; solid; black;";
        //tbl.style.background = "cyan";
        tbl.style.color = "black";


        var xval = xdata.split(';');
        var yval = ydata.split(';');
        //var y2val = y2data.split(';');
        //var y3val = y3data.split(';');
        //var y4val = y4data.split(';');

        var tr = tbl.insertRow();
        tr.style.border = "solid";
        tr.style.color = "black";

        var td = tr.insertCell();
        td.style.border = "solid";
        td.style.color = color;
        td.style.borderColor = color;
        td.appendChild(document.createTextNode(columnName));

        var td = tr.insertCell();
        td.style.border = "solid";
        td.style.color = color;
        td.style.borderColor = color;
        td.appendChild(document.createTextNode(EquName));

        for (var i = 0; i < xval.length; i++) {
            var tr = tbl.insertRow();
            var td = tr.insertCell();
            td.style.border = "solid";
            td.style.borderColor = "gray";
            td.style.borderWidth = '1px';
            td.style.color = "black";

            td.appendChild(document.createTextNode(xval[i]));

            var td = tr.insertCell();
            td.style.border = "solid";
            td.style.borderColor = "gray";
            td.style.color = "black";
            td.style.borderWidth = '1px';
            td.appendChild(document.createTextNode(yval[i]));

        }

        document.getElementById(TableName).innerHTML = "";
        document.getElementById(TableName).appendChild(tbl);
        document.getElementById(TableName).innerHTML = "";
        document.getElementById(TableName).appendChild(tbl);

    }
 


 /*------------------------------------------------------------------------------
* NAME       :  FindingDiff
* PURPOSE    :  Finds the differences of values for two Cartesian equations
* PARAMETERS :  x-values or y-values
* RETURNS    :  diffenrences
*----------------------------------------------------------------------------*/    
 function FindingDiff() {
        var PIsymbol = String.fromCharCode(960);   //PI
        var sup2 = String.fromCharCode(178);
        var pm = String.fromCharCode(177);	//plus minus
        //var casenum = document.getElementById("TableOrSpecificValue").value;
        var StartVal = FindValue(document.getElementById('StartValuefinddiff').value);
        var EndVal = FindValue(document.getElementById('EndValuefinddiff').value);
        var Stepsize = FindValue(document.getElementById('Stepsizefinddiff').value);
        var valuedropbox1 = document.getElementById('mydropdowndifference1').value;
        var valuedropbox2 = document.getElementById('mydropdowndifference2').value;
       
        if(parseFloat(valuedropbox1) < 1 || parseFloat(valuedropbox2) <1){
            alert('Please select two equations.');
            return;
        }

        var InputExpression1 = document.getElementById('TextBoxForCartesianGraph'+valuedropbox1).value;
        var InputExpression2 = document.getElementById('TextBoxForCartesianGraph'+valuedropbox2).value;

        if (InputExpression1.indexOf("{") > -1) {
            InputExpression1 = ProcessInequality(InputExpression1);
        }
        if (InputExpression1.indexOf("|") > -1) {
            InputExpression1 = ProcessAbsoluteValue(InputExpression1);
        }
 
        while (InputExpression1.indexOf('Root') > -1) {
            InputExpression1 = processroot(InputExpression1);
            //alert('InputExpression Root:..' + InputExpression);
            if (InputExpression1 == NaN) {
                return;
            }
        }


        if (InputExpression2.indexOf("{") > -1) {
            InputExpression2 = ProcessInequality(InputExpression2);
        }
        if (InputExpression2.indexOf("|") > -1) {
            InputExpression2 = ProcessAbsoluteValue(InputExpression2);
        }
 
        while (InputExpression2.indexOf('Root') > -1) {
            InputExpression2 = processroot(InputExpression2);
            //alert('InputExpression Root:..' + InputExpression);
            if (InputExpression2 == NaN) {
                return;
            }
        }

        var xt = parseFloat(StartVal);
        var text = '<table border="1">' + '<tr><td>x&nbsp;&nbsp;&nbsp;</td><td> y = ' + InputExpression1 + '&nbsp;&nbsp;&nbsp;</td><td> y = ' + InputExpression2 + '&nbsp;&nbsp;&nbsp;</td><td> Difference &nbsp;&nbsp;&nbsp;</td></tr>';
        var count = 0;
        while(xt <= parseFloat(EndVal) || count==10000){
            count += 1;
            var temp = replaceAll(InputExpression1, "x", "(" + xt + ")");
            var y1 = FindValue(temp);
            if (IsNumericc(y1) == false || y1 == null) {
                y1 = NaN;
            }
                       
            var temp = replaceAll(InputExpression2, "x", "(" + xt + ")");
            var y2 = FindValue(temp);
            //y = Math.round(y * 1000000000000) / 1000000000000;
            if (IsNumericc(y2) == false || y2 == null) {
                y2 = NaN;
            }

            var diff = Math.abs(y1 - y2);
            var xtr = Math.round(xt * 10000000000) / 10000000000;

            text += '<tr><td>' + xtr + '&nbsp;&nbsp;&nbsp;</td><td>' + y1 + '&nbsp;&nbsp;&nbsp;</td><td>' + y2 + '&nbsp;&nbsp;&nbsp;</td>' + '&nbsp;&nbsp;&nbsp;</td><td>|' + y1 + ' &ndash; ' + y2 + '| = ' + diff + '&nbsp;&nbsp;&nbsp;</td></tr>';
            xt += parseFloat(Stepsize);
        }

        text += '</table>';
        document.getElementById('TableFindDiff').innerHTML = text + '<br><br><br>';


}

 
 /*------------------------------------------------------------------------------
* NAME       :  TableY1234BB
* PURPOSE    :  Generates table of values for Cartesian equations
* PARAMETERS :  x-values or y-values
* RETURNS    :  y-values or x-values
* NOTE       :  If equation is of the form "y = ", then x-values need to be input;
*               If equation is of the form "x = ", then y-values need to be input;
*----------------------------------------------------------------------------*/    
    function TableY1234BB() {
        var PIsymbol = String.fromCharCode(960);   //PI
        var sup2 = String.fromCharCode(178);
        var pm = String.fromCharCode(177);	//plus minus
        //var casenum = document.getElementById("TableOrSpecificValue").value;
        var StartVal = '';//FindValue(document.getElementById('TableStartY1234New').value);
        var EndVal = '';//FindValue(document.getElementById('TableEndY1234New').value);
        var Stepsize = '';//FindValue(document.getElementById('StepsizeY1234New').value);
       
        for (var i = 1; i <= 20; i++) {
            var ydata = '';
            var TableName = "TableCartesianByColor"+i;
            //document.getElementById("TableDataCartesian"+i).style.width = '300px';
            var valuedropbox = document.getElementById('mydropdownCartesian'+i).value;
            var valueSelect = document.getElementById('mydropdownCartesian'+i);
            var selectedText = valueSelect.options[valueSelect.selectedIndex].text;
            var ee1 = document.getElementById('TextBoxForCartesianGraph'+i).value;
            var ee2 = document.getElementById('checkboxY'+i).checked;

            if (parseInt(valuedropbox) <= 4  || parseInt(valuedropbox) == 11) {
                var xdata = document.getElementById('FindYGivenXInputList').value;  
            }
            else if (parseInt(valuedropbox) >= 5 && parseInt(valuedropbox) <= 10) {
                var xdata = document.getElementById('FindXGivenYInputList').value;
            }

            if (xdata.trim() == '') {
                return;
            }

            //alert('xdata....' + xdata);

            if (xdata.indexOf(',') > -1 && xdata.indexOf('to') == -1) {//alert('kkkk77777');
                var xarray = xdata.split(',');                
            }

            if (xdata.indexOf('to') > -1 && xdata.indexOf('step') > -1) {//alert('kkkk');
                var tt = xdata.split('to');
                var tt2 = (tt[1]).split('step');
                var hh = '';
                var v1 = FindValue(tt[0]);
                var v2 = FindValue(tt2[0]);
                var v3 = FindValue(tt2[1]);

                for (var kk = parseFloat(v1); kk <= parseFloat(v2); kk+=parseFloat(v3)) {
                    hh += ',' + kk; 
                }
                hh = hh.substring(1);
                var xarray = hh.split(',');      
            }
            else if(xdata.indexOf('to') > -1  && xdata.indexOf('step') == -1){//alert('kkkk22');//stepsize = 1
                var tt = xdata.split('to');
                var hh = '';
                var v1 = FindValue(ProcessInput(tt[0]));
                var v2 = FindValue(ProcessInput(tt[1]));
                for (var kk = parseFloat(v1); kk <= parseFloat(v2); kk++) {
                    hh += ',' + kk; 
                }
                hh = hh.substring(1);
                var xarray = hh.split(',');            
            }
            else if (xdata.indexOf(',') == -1 && xdata.indexOf('to') == -1){//alert('kkkk23332');
                var xarray = [xdata];//.split(',');
            }

            //alert('xarray: ' + xarray);

            var ydata;
            var xdata = xarray[0];
            for (var k = 1; k < xarray.length; k++) {
                xdata = xdata + ';' + xarray[k];
            }

            var ttt = '';
           
            //display x in terms of pi for equations with "y" on the left side
            if (document.getElementById("ExpressAsPiCheckbox").checked && parseInt(valuedropbox) <= 4 ) {
                 for (var ii = 0; ii < xarray.length; ii++) {
                    var tempp = FindValue(xarray[ii]);
                    //alert("tempp = " + tempp );
                    var XH2 = tempp.toString();
                    //alert("tempp55555555555555 = " + tempp);
                    tempp = expressaspi(tempp.toString());


                    if (ii == 0) {
                        var ttt = tempp;
                    }
                    else {
                        var ttt = ttt + ';' + tempp;
                    }
                }
                xdata = ttt;
            }
            

            if (ee1 != "" && ee2 && parseInt(valuedropbox) <= 4) {
                var EquName = 'y = '+ ee1;//selectedText + ee1; 
                //for equation/inequality with "y" on the left side
                if (document.getElementById('TextBoxForCartesianGraph'+i).value != "") {
                    var InputExpression = document.getElementById('TextBoxForCartesianGraph'+i).value;

                    if (InputExpression.indexOf("{") > -1) {
                        InputExpression = ProcessInequality(InputExpression);
                    }
                    if (InputExpression.indexOf("|") > -1) {
                        InputExpression = ProcessAbsoluteValue(InputExpression);
                    }
 
                    while (InputExpression.indexOf('Root') > -1) {
                        InputExpression = processroot(InputExpression);
                        //alert('InputExpression Root:..' + InputExpression);
                        if (InputExpression == NaN) {
                            return;
                        }
                    }

                    for (var k = 0; k < xarray.length; k++) {
                        var temp1 = replaceAll(InputExpression, "x", "(" + xarray[k] + ")");

                        var y = FindValue(temp1);
                        //y = Math.round(y * 1000000000000) / 1000000000000;

                        var ydec = '';
                        if (Math.abs(y) < 0.000000001 || Math.abs(y) < 100000000000000) {
                            var ydec = ' = ' + ToDecimal(y.toString());
                        }
                        
                        if (IsNumericc(y) == false || y == null) {
                            y = NaN;
                        }

                        //express y values as fractions
                        if (document.getElementById('ExpressYasFractionCheckbox').checked && isNaN(y) == false) {
                            y = ToFraction(y.toString());
                        }
                        else{
                            y = ToDecimal2(y.toString());
                        }


                        if(document.getElementById('TableCartesianDetailCheckbox').checked){
                            y = temp1 + ' = ' + y;
                        }
                        
                        var ydata = ydata + ';' + y;

                    }

                } // end 

                if(ydata.charAt(0)==';'){
                    ydata = ydata.substring(1);
                }

                //alert('ydata...' + ydata);
                columnName = 'x';
                //if(document.getElementById('TableCartesianDetailCheckbox').checked){
                //    document.getElementById("TableDataCartesian"+i).style.width = '500px';
                //}
                 
                var xval = xdata.split(';');
                var yval = ydata.split(';');
                var text = '<table border="1">'+ '<tr><td style="color:'+graphcolor(i)+'">' + columnName + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td><td style="color:'+graphcolor(i)+'">'  + EquName + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr>';;
                for (var ki = 0; ki < xval.length; ki++) {
                    text += '<tr><td>' + xval[ki] + '</td><td>' + yval[ki] + '</td></tr>';
                }
                text += '</table>';
                document.getElementById(TableName).innerHTML = text;
                //tableCreateY1234(xdata, ydata,TableName, graphcolor(i),EquName,columnName);
                

            }
            
            //for equation/inequality with "y" on the left side
            if (ee1 != "" && ee2 && (parseInt(valuedropbox) >= 5  && parseInt(valuedropbox) <= 9)) {
                var EquName = 'x = ' + ee1;//selectedText + ee1; 
               
                if (document.getElementById('TextBoxForCartesianGraph'+i).value != "") {
                    var InputExpression = document.getElementById('TextBoxForCartesianGraph'+i).value;

                    if (InputExpression.indexOf("{") > -1) {
                        InputExpression = ProcessInequality(InputExpression);
                    }
                    if (InputExpression.indexOf("|") > -1) {
                        InputExpression = ProcessAbsoluteValue(InputExpression);
                    }

                    while (InputExpression.indexOf('Root') > -1) {
                        InputExpression = processroot(InputExpression);
                        //alert('InputExpression Root:..' + InputExpression);
                        if (InputExpression == NaN) {
                            return;
                        }
                    }

                    for (var k = 0; k < xarray.length; k++) {
                        var temp1 = replaceAll(InputExpression, "y", "(" + xarray[k] + ")");
                        var temp1 = replaceAll(temp1, "x", "(" + xarray[k] + ")");
                        //alert('InputExpression5555=' + temp1);
                        var y = FindValue(temp1);
                        //y = Math.round(y * 1000000000000) / 1000000000000;

                        //alert('y = ' + y);
                        var ydec = '';
                        if (Math.abs(y) < 0.000000001 || Math.abs(y) < 100000000000000) {
                            var ydec = ' = ' + ToDecimal(y.toString());
                        }
                        
                        if (IsNumericc(y) == false || y == null) {
                            y = NaN;
                        }

                        //express y values as fractions
                        if (document.getElementById('ExpressYasFractionCheckbox').checked && isNaN(y) == false) {
                            y = ToFraction(y.toString());
                        }
                        
                        if(document.getElementById('TableCartesianDetailCheckbox').checked){
                            y = temp1 + ' = ' + y;
                        }
                        var ydata = ydata + ';' + y;

                    }

                } // end 

                if(ydata.charAt(0)==';'){
                    ydata = ydata.substring(1);
                }

                //alert('ydata...' + ydata);
                columnName = 'y';
                //if(document.getElementById('TableCartesianDetailCheckbox').checked){
                //    document.getElementById("TableDataCartesian"+i).style.width = '500px';
                //}
                var xval = xdata.split(';');
                var yval = ydata.split(';');
                var text = '<table border="1">'+ '<tr><td style="color:'+graphcolor(i)+'">' + columnName + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td><td style="color:'+graphcolor(i)+'">'  + EquName + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr>';;
                for (var ki = 0; ki < xval.length; ki++) {
                    text += '<tr><td>' + xval[ki] + '</td><td>' + yval[ki] + '</td></tr>';
                }
                text += '</table>';
                document.getElementById(TableName).innerHTML = text;
                //tableCreateY1234(xdata, ydata,TableName, graphcolor(i),EquName, columnName);

            }   
            
            if (ee1 != "" && ee2 && (parseInt(valuedropbox) == 10 )) {
                var EquName = 'x';//selectedText + ee1;               
                if (document.getElementById('TextBoxForCartesianGraph'+i).value != "") {
                    var InputExpression = document.getElementById('TextBoxForCartesianGraph'+i).value;


                    if (InputExpression.indexOf("{") > -1) {
                        InputExpression = ProcessInequality(InputExpression);
                    }
                    if (InputExpression.indexOf("|") > -1) {
                        InputExpression = ProcessAbsoluteValue(InputExpression);
                    }

                    while (InputExpression.indexOf('Root') > -1) {
                        InputExpression = processroot(InputExpression);
                        //alert('InputExpression Root:..' + InputExpression);
                        if (InputExpression == NaN) {
                            return;
                        }
                    }

                    for (var k = 0; k < xarray.length; k++) {
                        var temp1 = replaceAll(InputExpression, "y", "(" + xarray[k] + ")");

                        var y = FindValue(temp1);
                        //y = Math.round(y * 1000000000000) / 1000000000000;

                        var ydec = '';
                        if (Math.abs(y) < 0.000000001 || Math.abs(y) < 100000000000000) {
                            var ydec = ' = ' + ToDecimal(y.toString());
                        }
                        
                        if (IsNumericc(y) == false || y == null) {
                            y = NaN;
                        }

                        y = Math.sqrt(y);
                        if (isNaN(y) || parseFloat(y)==0) {
                            var ydata = ydata + ';' + y;
                        }
                        else{
                            var ydata = ydata + ';' + pm + y;
                        }

                    }

                } // end 

                if(ydata.charAt(0)==';'){
                    ydata = ydata.substring(1);
                }

                //alert('ydata...' + ydata);
                columnName = 'y';
                var xval = xdata.split(';');
                var yval = ydata.split(';');
                var text = '<table border="1">'+ '<tr><td style="color:'+graphcolor(i)+'">' + columnName + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td><td style="color:'+graphcolor(i)+'">'  + EquName + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr>';;
                for (var ki = 0; ki < xval.length; ki++) {
                    text += '<tr><td>' + xval[ki] + '</td><td>' + yval[ki] + '</td></tr>';
                }
                text += '</table>';
                document.getElementById(TableName).innerHTML = text;
                //tableCreateY1234(xdata, ydata,TableName, graphcolor(i),EquName, columnName);

            }   
            if (ee1 != "" && ee2 && (parseInt(valuedropbox) == 11 )) {
                var EquName = 'y';//selectedText + ee1;               
                if (document.getElementById('TextBoxForCartesianGraph'+i).value != "") {
                    var InputExpression = document.getElementById('TextBoxForCartesianGraph'+i).value;

                    if (InputExpression.indexOf("{") > -1) {
                        InputExpression = ProcessInequality(InputExpression);
                    }
                    if (InputExpression.indexOf("|") > -1) {
                        InputExpression = ProcessAbsoluteValue(InputExpression);
                    }

                    while (InputExpression.indexOf('Root') > -1) {
                        InputExpression = processroot(InputExpression);
                        //alert('InputExpression Root:..' + InputExpression);
                        if (InputExpression == NaN) {
                            return;
                        }
                    }
                     
                    for (var k = 0; k < xarray.length; k++) {
                        var temp1 = replaceAll(InputExpression, "x", "(" + xarray[k] + ")");

                        var y = FindValue(temp1);
                        //y = Math.round(y * 1000000000000) / 1000000000000;

                        var ydec = '';
                        if (Math.abs(y) < 0.000000001 || Math.abs(y) < 100000000000000) {
                            var ydec = ' = ' + ToDecimal(y.toString());
                        }
                        
                        if (IsNumericc(y) == false || y == null) {
                            y = NaN;
                        }

                        y = Math.sqrt(y);
                        if (isNaN(y) || parseFloat(y)==0) {
                            var ydata = ydata + ';' + y;
                        }
                        else{
                            var ydata = ydata + ';' + pm + y;
                        }

                    }

                } // end 

                if(ydata.charAt(0)==';'){
                    ydata = ydata.substring(1);
                }

                //alert('ydata...' + ydata);
                columnName = 'x';
                var xval = xdata.split(';');
                var yval = ydata.split(';');
                var text = '<table border="1">'+ '<tr><td style="color:'+graphcolor(i)+'">' + columnName + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td><td style="color:'+graphcolor(i)+'">'  + EquName + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr>';;
                for (var ki = 0; ki < xval.length; ki++) {
                    text += '<tr><td>' + xval[ki] + '</td><td>' + yval[ki] + '</td></tr>';
                }
                text += '</table>';
                document.getElementById(TableName).innerHTML = text;
                //tableCreateY1234(xdata, ydata,TableName, graphcolor(i),EquName, columnName);

            }                         

        }        
        //alert('xdata...' + xdata);

        keypad(6);
        return;
    }

    


/*------------------------------------------------------------------------------
* NAME       :  keypress
* PURPOSE    :  Currently not used
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function keypress(e) {
        var code = e.keyCode || e.which;
        //alert('code = ' + code);
        if (code == 47) { // `0` works in mozilla and `320 in other`
            //e.preventDefault();
        }
    }


 
/*------------------------------------------------------------------------------
* NAME       :  PlotPointofIntersection
* PURPOSE    :  Plots point of intersection of two Cartesian graphs
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/		
    function PlotPointofIntersection(){
        var tt1 = document.getElementById('LocationIntersection').value;
        var tt1 = tt1.replace('Intersection Point is (','');
        var tt1 = tt1.replace(')','');
        var tt2 = tt1.split(',');
        for (var i = 1; i <= 20; i++){
            var xt = document.getElementById('Point'+i+'X').value;
            var yt = document.getElementById('Point'+i+'Y').value; 
            if(xt.trim() == '' && yt.trim() == ''){
                document.getElementById('Point'+i+'X').value = tt2[0];
                document.getElementById('Point'+i+'Y').value = tt2[1];
                document.getElementById('checkboxCartesianPoints').checked = true;
                document.getElementById('pointsizeL').checked = true;
                
                GraphingCalculator();
                return;
            }
        }

        return;

    }


/*------------------------------------------------------------------------------
* NAME       :  PlotIntercept
* PURPOSE    :  Plots x-intercept or y-intercept
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function PlotIntercept(){
        var tt1 = document.getElementById('LocationXIntercept').value;
        if(tt1.indexOf('x-intercept')>-1){
            var tt1 = tt1.replace('x-intercept is (','');
        }
        else if(tt1.indexOf('y-intercept')>-1){
            var tt1 = tt1.replace('y-intercept is (','');
        }        

        var tt1 = tt1.replace(')','');
        var tt2 = tt1.split(',');
        for (var i = 1; i <= 20; i++){
            var xt = document.getElementById('Point'+i+'X').value;
            var yt = document.getElementById('Point'+i+'Y').value; 
            if(xt.trim() == '' && yt.trim() == ''){
                document.getElementById('Point'+i+'X').value = tt2[0];
                document.getElementById('Point'+i+'Y').value = tt2[1];
                document.getElementById('checkboxCartesianPoints').checked = true;
                document.getElementById('pointsizeL').checked = true;
                
                GraphingCalculator();
                return;
            }
        }

        return;

    }

 /*------------------------------------------------------------------------------
* NAME       :  expressaspi
* PURPOSE    :  Expresses a number in terms of Ï€
* PARAMETERS :  number
* RETURNS    :  number in terms of Ï€
*----------------------------------------------------------------------------*/
    function expressaspi(value){
        var PIsymbol = String.fromCharCode(960);   //PI
        var tempp =  value/ Math.PI;
        //var tempp2 = Math.round(tempp);
        //if(Math.abs(tempp2 - tempp) < 0.0000000001){
            //tempp = tempp2;
        //}
        tempp = Math.round(tempp * 10000000000) / 10000000000;
        var XH = ToFraction(tempp.toString());
        //alert("tempp = " + tempp + ".......... XH = " + XH);
        var XH2 = XH.toString();
        if (XH2.indexOf("/") > -1) {
            var XH3 = XH2.split('/');
            if(XH3[0] == '1'){XH3[0] = ''};
            if(XH3[0] == '-1'){XH3[0] = '-'};
            XH = XH3[0] + PIsymbol + '/' + XH3[1];
        }
        else {
            XH = XH2 + PIsymbol;
            if (XH2 == "0") {
                XH = 0;
            }
            if (XH2 == "1") {
                XH = PIsymbol;
            }
            if (XH2 == "-1") {
                XH = '-' + PIsymbol;
            }
        
        }
        return XH;
    }




/*------------------------------------------------------------------------------
* NAME       :  GraphingPiecewise2
* PURPOSE    :  Displays input fields for piecewise function with two pieces
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function GraphingPiecewise2(){
        var ppp1 = document.getElementById('pw1').value;
        var ppp2 = document.getElementById('pw2').value;
        ppp1 = replaceAll(ppp1, ' ', '');
        ppp2 = replaceAll(ppp2, ' ', '');

        ppp1 = ppp1.replace(',', 'if');
        ppp2 = ppp2.replace(',', 'if');

        ppp1 = replaceAll(ppp1, 'ifif', 'if');
        ppp2 = replaceAll(ppp2, 'ifif', 'if');


        //alert('jjj');
        if(ppp1.indexOf('if')>-1){
            var gg1 = ppp1.split('if');
        }
        else{
            var msg = 'input expression is missing "if".';
            alert(msg);
            return;
        }

        if(ppp2.indexOf('if')>-1){
            var gg2 = ppp2.split('if');
        }
        else{
            var msg = 'input expression is missing "if".';
            alert(msg);
            return;
        }

        document.getElementById('TextBoxForCartesianGraph1').value = '(' + gg1[0] + '){' + gg1[1] + '}';
        document.getElementById('TextBoxForCartesianGraph2').value = '(' + gg2[0] + '){' + gg2[1] + '}';
        GraphingCalculator();
        return;
    }


/*------------------------------------------------------------------------------
* NAME       :  GraphingPiecewise3
* PURPOSE    :  Displays input fields for piecewise function with three pieces
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function GraphingPiecewise3(){
        var ppp1 = document.getElementById('pw3').value;
        var ppp2 = document.getElementById('pw4').value;
        var ppp3 = document.getElementById('pw5').value;

        ppp1 = replaceAll(ppp1, ' ', '');
        ppp2 = replaceAll(ppp2, ' ', '');
        ppp3 = replaceAll(ppp3, ' ', '');

        ppp1 = ppp1.replace(',', 'if');
        ppp2 = ppp2.replace(',', 'if');
        ppp3 = ppp3.replace(',', 'if');

        ppp1 = replaceAll(ppp1, 'ifif', 'if');
        ppp2 = replaceAll(ppp2, 'ifif', 'if');
        ppp3 = replaceAll(ppp3, 'ifif', 'if');

        //alert('jjj');
        if(ppp1.indexOf('if')>-1){
            var gg1 = ppp1.split('if');
        }
        else{
            var msg = 'input expression is missing "if".';
            alert(msg);
            return;
        }

        if(ppp2.indexOf('if')>-1){
            var gg2 = ppp2.split('if');
        }
        else{
            var msg = 'input expression is missing "if".';
            alert(msg);
            return;
        }

        if(ppp3.indexOf('if')>-1){
            var gg3 = ppp3.split('if');
        }
        else{
            var msg = 'input expression is missing "if".';
            alert(msg);
            return;
        }

        document.getElementById('TextBoxForCartesianGraph1').value = '(' + gg1[0] + '){' + gg1[1] + '}';
        document.getElementById('TextBoxForCartesianGraph2').value = '(' + gg2[0] + '){' + gg2[1] + '}';
        document.getElementById('TextBoxForCartesianGraph3').value = '(' + gg3[0] + '){' + gg3[1] + '}';

        GraphingCalculator();
        return;
    }


/*------------------------------------------------------------------------------
* NAME       :  GraphingPiecewise4
* PURPOSE    :  Displays input fields for piecewise function with four pieces
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function GraphingPiecewise4(){
        var ppp1 = document.getElementById('pw6').value;
        var ppp2 = document.getElementById('pw7').value;
        var ppp3 = document.getElementById('pw8').value;
        var ppp4 = document.getElementById('pw9').value;
        
        ppp1 = replaceAll(ppp1, ' ', '');
        ppp2 = replaceAll(ppp2, ' ', '');
        ppp3 = replaceAll(ppp3, ' ', '');
        ppp4 = replaceAll(ppp4, ' ', '');

        ppp1 = ppp1.replace(',', 'if');
        ppp2 = ppp2.replace(',', 'if');
        ppp3 = ppp3.replace(',', 'if');
        ppp4 = ppp4.replace(',', 'if');

        ppp1 = replaceAll(ppp1, 'ifif', 'if');
        ppp2 = replaceAll(ppp2, 'ifif', 'if');
        ppp3 = replaceAll(ppp3, 'ifif', 'if');
        ppp4 = replaceAll(ppp4, 'ifif', 'if');

        //alert('jjj');
        if(ppp1.indexOf('if')>-1){
            var gg1 = ppp1.split('if');
        }
        else{
            var msg = 'input expression is missing "if".';
            alert(msg);
            return;
        }

        if(ppp2.indexOf('if')>-1){
            var gg2 = ppp2.split('if');
        }
        else{
            var msg = 'input expression is missing "if".';
            alert(msg);
            return;
        }

        if(ppp3.indexOf('if')>-1){
            var gg3 = ppp3.split('if');
        }
        else{
            var msg = 'input expression is missing "if".';
            alert(msg);
            return;
        }
        
        if(ppp4.indexOf('if')>-1){
            var gg4 = ppp4.split('if');
        }
        else{
            var msg = 'input expression is missing "if".';
            alert(msg);
            return;
        }


        document.getElementById('TextBoxForCartesianGraph1').value = '(' + gg1[0] + '){' + gg1[1] + '}';
        document.getElementById('TextBoxForCartesianGraph2').value = '(' + gg2[0] + '){' + gg2[1] + '}';
        document.getElementById('TextBoxForCartesianGraph3').value = '(' + gg3[0] + '){' + gg3[1] + '}';
        document.getElementById('TextBoxForCartesianGraph4').value = '(' + gg4[0] + '){' + gg4[1] + '}';

        GraphingCalculator();
        return;
    }


/*------------------------------------------------------------------------------
* NAME       :  GraphingPiecewise5
* PURPOSE    :  Displays input fields for piecewise function with five pieces
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function GraphingPiecewise5(){
        var ppp1 = document.getElementById('pw10').value;
        var ppp2 = document.getElementById('pw11').value;
        var ppp3 = document.getElementById('pw12').value;
        var ppp4 = document.getElementById('pw13').value;
        var ppp5 = document.getElementById('pw14').value;
        

        ppp1 = replaceAll(ppp1, ' ', '');
        ppp2 = replaceAll(ppp2, ' ', '');
        ppp3 = replaceAll(ppp3, ' ', '');
        ppp4 = replaceAll(ppp4, ' ', '');
        ppp5 = replaceAll(ppp5, ' ', '');

        ppp1 = ppp1.replace(',', 'if');
        ppp2 = ppp2.replace(',', 'if');
        ppp3 = ppp3.replace(',', 'if');
        ppp4 = ppp4.replace(',', 'if');
        ppp5 = ppp5.replace(',', 'if');

        ppp1 = replaceAll(ppp1, 'ifif', 'if');
        ppp2 = replaceAll(ppp2, 'ifif', 'if');
        ppp3 = replaceAll(ppp3, 'ifif', 'if');
        ppp4 = replaceAll(ppp4, 'ifif', 'if');
        ppp5 = replaceAll(ppp5, 'ifif', 'if');

        //alert('jjj');
        if(ppp1.indexOf('if')>-1){
            var gg1 = ppp1.split('if');
        }
        else{
            var msg = 'input expression is missing "if".';
            alert(msg);
            return;
        }

        if(ppp2.indexOf('if')>-1){
            var gg2 = ppp2.split('if');
        }
        else{
            var msg = 'input expression is missing "if".';
            alert(msg);
            return;
        }

        if(ppp3.indexOf('if')>-1){
            var gg3 = ppp3.split('if');
        }
        else{
            var msg = 'input expression is missing "if".';
            alert(msg);
            return;
        }
        
        if(ppp4.indexOf('if')>-1){
            var gg4 = ppp4.split('if');
        }
        else{
            var msg = 'input expression is missing "if".';
            alert(msg);
            return;
        }

        if(ppp5.indexOf('if')>-1){
            var gg5 = ppp5.split('if');
        }
        else{
            var msg = 'input expression is missing "if".';
            alert(msg);
            return;
        }

        document.getElementById('TextBoxForCartesianGraph1').value = '(' + gg1[0] + '){' + gg1[1] + '}';
        document.getElementById('TextBoxForCartesianGraph2').value = '(' + gg2[0] + '){' + gg2[1] + '}';
        document.getElementById('TextBoxForCartesianGraph3').value = '(' + gg3[0] + '){' + gg3[1] + '}';
        document.getElementById('TextBoxForCartesianGraph4').value = '(' + gg4[0] + '){' + gg4[1] + '}';
        document.getElementById('TextBoxForCartesianGraph5').value = '(' + gg5[0] + '){' + gg5[1] + '}';

        GraphingCalculator();
        return;
    }


/*------------------------------------------------------------------------------
* NAME       :  piecewisefunctionoption
* PURPOSE    :  Selects an option to display input fields for piecewise function
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function piecewisefunctionoption(val){
        document.getElementById('piecewisefunction2').style.display = 'none';
        document.getElementById('piecewisefunction3').style.display = 'none';
        document.getElementById('piecewisefunction4').style.display = 'none';
        document.getElementById('piecewisefunction5').style.display = 'none';
        
        if(document.getElementById('pwoption2').checked){
            document.getElementById('piecewisefunction2').style.display = 'inline-block';
        }
        else if(document.getElementById('pwoption3').checked){
            document.getElementById('piecewisefunction3').style.display = 'inline-block';
        }
        else if(document.getElementById('pwoption4').checked){
            document.getElementById('piecewisefunction4').style.display = 'inline-block';
        }
        else if(document.getElementById('pwoption5').checked){
            document.getElementById('piecewisefunction5').style.display = 'inline-block';
        }
    }

/*------------------------------------------------------------------------------
* NAME       :  GraphingPiecewise2Example
* PURPOSE    :  Inputs example of piecewise function with two pieces
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function GraphingPiecewise2Example(){
        document.getElementById('pw1').value = 'x + 2 if x â‰¤ 0';
        document.getElementById('pw2').value = 'xÂ² - 1 if x > 0';
        GraphingPiecewise2()
    }

/*------------------------------------------------------------------------------
* NAME       :  GraphingPiecewise3Example
* PURPOSE    :  Inputs example of piecewise function with three pieces
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function GraphingPiecewise3Example(){
        document.getElementById('pw3').value = '2 if x â‰¤ 0';
        document.getElementById('pw4').value = 'x if 0 <  x â‰¤ 3';
        document.getElementById('pw5').value = '0.1xÂ² - 1 if x > 3';
        GraphingPiecewise3()
    }

/*------------------------------------------------------------------------------
* NAME       :  GraphingPiecewise4Example
* PURPOSE    :  Inputs example of piecewise function with four pieces
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function GraphingPiecewise4Example(){
        document.getElementById('pw6').value = '2 if x â‰¤ 0';
        document.getElementById('pw7').value = 'xÂ² - 1 if 0 <  x â‰¤ 3';
        document.getElementById('pw8').value = '0.4x + 2 if 3 <  x â‰¤ 8';
        document.getElementById('pw9').value = 'x - 1 if x > 8';
        GraphingPiecewise4()
    }


/*------------------------------------------------------------------------------
* NAME       :  ShowScientificCalculator
* PURPOSE    :  Shows or hides scientific calculator
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/
 function ShowScientificCalculator(casenum) {
        if (casenum == 1) {
            document.getElementById('hidecalculator').style.display = 'inline-block';
            document.getElementById('displayScienCalc').style.display = 'inline-block';
            document.getElementById('displayScienCalc').src = '/GraphingCalculator1/AScientificCalculator2.cshtml';
        }
        else {
            document.getElementById('displayScienCalc').src = '';
            document.getElementById('displayScienCalc').style.display = 'none';
            document.getElementById('hidecalculator').style.display = 'none';
            
        }
    }

/*------------------------------------------------------------------------------
* NAME       :  MovableKeyboard
* PURPOSE    :  Shows or hides movable keyboard
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function MovableKeyboard(casenum) {
        if (casenum == 1) {
            document.getElementById('KeyboardSlide').style.display = 'inline-block';
            document.getElementById('KeyboardForm').style.display = 'inline-block';
            document.getElementById('KeypadMsg').innerHTML = "Click on 'beige' vertical strip to move keypad up/down.";
            keyboardlayoutMain('secondkeypad');
        }
        else if (casenum == 2) {
            document.getElementById('KeyboardSlide').style.display = 'none';
            document.getElementById('KeyboardForm').style.display = 'none';
            document.getElementById('KeypadMsg').innerHTML = "";
        }
        else if (casenum == 3) {
            document.getElementById('panel2').style.top = '5px';
        }
    }




/*------------------------------------------------------------------------------
* NAME       :  display
* PURPOSE    :  Displays image showing how to use calculator features
* PARAMETERS :  number
* RETURNS    :  image
*----------------------------------------------------------------------------*/
    function display(num) {
        return;
        document.getElementById('StatImage').innerHTML = "";
        document.getElementById('StatImage100').innerHTML = "";
        document.getElementById('StatImage').style.top = '10px';
        document.getElementById('StatImage').style.display = 'inline-block';
        var img = document.createElement('img');
        if (num == '1') {
            img.src = "fracexample.png";
        }
        else if (num == '2') {
            img.src = "absolutevalueexample.png";
        }
        else if (num == '3') {
            img.src = "logexample.png";
        }
        else if (num == '4') {
            img.src = "nrootexample.png";
        }
        else if (num == '5') {
            img.src = "squarerootexample.png";
        }
        else if (num == '6') {
            img.src = "cuberootexample.png";
        }
        else if (num == '7') {
            img.src = "fourthrootexample.png";
        }
        else if (num == '8') {
            img.src = "piecewisefunctions.png";
        }
        else if (num == '8bb') {
            img.src = "braceexample.png";
        }
        else if (num == '9') {
            img.src = "logexample2.png";
        }
        else if (num == '10') {
            img.src = "scientificcalculator2.png";
        }
        else if (num == '11') {
            img.src = "tracinggraph.png";
        }
        else if (num == '12') {
            img.src = "Agraphingcalculatorexample.png";
        }
        else if (num == '13') {
            img.src = "Agraphingcalculatorexample2.png";
        }
        else if (num == '14') {
            img.src = "powerbutton.png";
        }
        else if (num == '15') {
            img.src = "algebramenu.png";
        }
        else if (num == '16') {
            img.src = "statisticsmenu.png";
        }
        else if (num == '17') {
            img.src = "absolutevalueexample3.png";
        }
        else if (num == '18') {
            img.src = "morepoints.png";
        }
        else if (num == '19') {
            img.src = "pointvsline.png";
        }
        else if (num == '20') {
            img.src = "hrvsmr.png";
        }
        else if (num == '21') {
            img.src = "trigdef.png";
        }
        else if (num == '22') {
            img.src = "hyperbolicdef.png";
        }
        else if (num == '2244') {
            img.src = "invhyperbolicdef.png";
        }

        else if (num == '23') {
            img.src = "triginverse.png";
        }
        else if (num == '24') {
            var text = 'Reminder: To use this feature, "on/off" checkbox  must be checked.';
            document.getElementById('scrollcartesianpoint').innerHTML = text;
            document.getElementById('scrollcircle').innerHTML = text;
            document.getElementById('ellipse').innerHTML = text;
            document.getElementById('parametric').innerHTML = text;
            document.getElementById('polarequation').innerHTML = text;
            document.getElementById('polarpoint').innerHTML = text;
            document.getElementById('traceparametricmarquee').innerHTML = text;
            document.getElementById('ParametricTablemarquee').innerHTML = text;
            document.getElementById('PolarEquationTablemarquee').innerHTML = text;

            //document.getElementById('StatImage').style.top = '300px';
            //img.src = "checkboxreminder.png";
        }
        else if (num == '25') {
            document.getElementById('StatImage').style.top = '100px';
            document.getElementById('StatImage').style.left = '700px';
            img.src = "tablevalue.png";
        }
        else if (num == '25b') {          
            //var top = window.pageYOffset;
            //var left = window.pageXOffset;
            var el = document.getElementById("GenerateTableButton");
            var rect = el.getBoundingClientRect();
            var left = rect.left + window.scrollX ;
            var top = rect.top + window.scrollY+100;
            document.getElementById('StatImage').style.top = top+'px';//alert('25b....top = ' +(left + 50));
            document.getElementById('StatImage').style.left = left+'px';
            img.src = "tablevalue.png";
        }
        else if (num == '26') {
            var el = document.getElementById("GenerateTableButton");
            var rect = el.getBoundingClientRect();
            var left = rect.left + window.scrollX ;
            var top = rect.top + window.scrollY+100;
            document.getElementById('StatImage').style.top = top+'px';//alert('25b....top = ' +(left + 50));
            document.getElementById('StatImage').style.left = left+'px';
            img.src = "tablevalue2.png";

            //document.getElementById('StatImage').style.top = '100px';
            //document.getElementById('StatImage').style.left = '700px';
            //img.src = "tablevalue2.png";
        }
        else if (num == '26b') {
            //document.getElementById('StatImage').style.top = '100px';
            //document.getElementById('StatImage').style.left = '700px';
            //img.src = "tablevalue2.png";
            var el = document.getElementById("GenerateTableButton");
            var rect = el.getBoundingClientRect();
            var left = rect.left + window.scrollX ;
            var top = rect.top + window.scrollY+100;
            document.getElementById('StatImage').style.top = top+'px';//alert('25b....top = ' +(left + 50));
            document.getElementById('StatImage').style.left = left+'px';
            img.src = "tablevalue2.png";

        }
        else if (num == '27') {
            document.getElementById('StatImage').style.top = '10px';
            img.src = "automatictracingcartesian.png";
        }
        else if (num == '28') {
            document.getElementById('StatImage').style.top = '10px';
            img.src = "automatictracingparametric.png";
        }
        else if (num == '29') {
            document.getElementById('StatImage').style.top = '10px';

            img.src = "automatictracingpolar.png";
        }
        else if (num == '30') {
            document.getElementById('StatImage').style.top = '100px';
            document.getElementById('StatImage').style.left = '10px';
            img.src = "remindercircleequation.png";
        }
        else if (num == '31') {
            document.getElementById('StatImage').style.top = '100px';
            document.getElementById('StatImage').style.left = '10px';
            img.src = "reminderellipseequation.png";
        }
        else if (num == '32') {
            document.getElementById('StatImage').style.top = '100px';
            document.getElementById('StatImage').style.left = '10px';
            img.src = "reminderparametricequation.png";
        }
        else if (num == '33') {
            document.getElementById('StatImage').style.top = '100px';
            document.getElementById('StatImage').style.left = '10px';            
            img.src = "reminderpolarequation.png";
        }
        else if (num == '34') {
            document.getElementById('StatImage').style.top = '200px';
            document.getElementById('StatImage').style.left = '650px';            
            img.src = "reminderpolarpoint.png";
        }
        else if (num == '35') {
            document.getElementById('StatImage').style.top = '200px';
            document.getElementById('StatImage').style.left = '650px';
            img.src = "remindercartesianpoint.png";
        }

        document.getElementById('StatImage').appendChild(img);

        return;

    }




/*------------------------------------------------------------------------------
* NAME       :  display2
* PURPOSE    :  Clears all images
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function display2() {
        document.getElementById('scrollcartesianpoint').innerHTML = '';
        document.getElementById('scrollcircle').innerHTML = "";
        document.getElementById('ellipse').innerHTML = "";
        document.getElementById('parametric').innerHTML = "";
        document.getElementById('polarequation').innerHTML = "";
        document.getElementById('polarpoint').innerHTML = "";
        document.getElementById('traceparametricmarquee').innerHTML = '';
        document.getElementById('ParametricTablemarquee').innerHTML = '';
        document.getElementById('PolarEquationTablemarquee').innerHTML = '';
        document.getElementById('StatImage').innerHTML = "";
        document.getElementById('StatImage100').innerHTML = "";
        document.getElementById('StatImage').style.top = '10px';
        document.getElementById('StatImage').style.left = '10px';
        document.getElementById('StatImage').style.display = 'none';

        return;

    }


/*------------------------------------------------------------------------------
* NAME       : refinegraph
* PURPOSE    : Adds more points to graph 
* PARAMETERS : 
* RETURNS    : 
*----------------------------------------------------------------------------*/	
    function refinegraph() {
        if (document.getElementById('mrbox').value == 'Y') {
            document.getElementById('morepointsongraph').value = 300;
            return;
        };

        var val = document.getElementById('morepointsongraph').value;
        if (val.trim() == '') {
            document.getElementById('morepointsongraph').value = 1000;
        }
        else {
            document.getElementById('morepointsongraph').value = parseFloat(val) + 500;
        }

        GraphingCalculator();

        return;

    }



/*------------------------------------------------------------------------------
* NAME       : mr
* PURPOSE    : Sets number of points on graph at minimum (300 points) 
* PARAMETERS : 
* RETURNS    : 
*----------------------------------------------------------------------------*/	
    function mr() {
        document.getElementById('mrbox').value = 'Y';
        GraphingCalculator();
        document.getElementById('mrbox').value = 'N';

        return;

    }



/*------------------------------------------------------------------------------
* NAME       : TraceCartesianGraphID
* PURPOSE    : Identifies selected graph for tracing 
* PARAMETERS : 
* RETURNS    : 
*----------------------------------------------------------------------------*/	
    function TraceCartesianGraphID() {
        document.getElementById('TraceON').checked = true;
        document.getElementById('TraceOFF').checked = false;
        document.getElementById("tracingmethod1").checked == true;

        for (var i = 1; i <= 20; i++) {
            if (document.getElementById("tracegraph" + i).checked) {
                document.getElementById("mydropdowntracing").value = i;
                var thu = document.getElementById("mydropdownCartesian" + i).value;
                if (thu != '0' && thu != '5') {
                    var msg = 'Tracing feature is only for equation that starts with "x = " or "y = " ';
                    alert(msg);
                    return;
                }

                TraceGraphID('Y' + i);
                break;
            }

        }

    }


/*------------------------------------------------------------------------------
* NAME       : TableDataPolarEquation22
* PURPOSE    : Reminds user to check on/off checkbox in order to generates table
*              of values for polar equations 
* PARAMETERS : 
* RETURNS    : 
*----------------------------------------------------------------------------*/	
    function TableDataPolarEquation22() {
 
        if (document.getElementById("PolarEquationTableCheckBoxNew").checked == false) {
            var msg = 'In order to generate table of values for polar equation, \n\n "on/off" checkbox must be checked to activate this feature of the calculator.'
            alert(msg);
            return;

        }

        TableDataPolarEquation();
    }



/*------------------------------------------------------------------------------
* NAME       : clearPolarInputs
* PURPOSE    : Clears inputs for Tmin, Tmax, Stepsize for polar equation table
* PARAMETERS : 
* RETURNS    : 
*----------------------------------------------------------------------------*/	
    function clearPolarInputs() {
        document.getElementById('TableStartPolarEquationTableNew').value = '';
        document.getElementById('TableEndPolarEquationTableNew').value = '';
        document.getElementById('StepsizePolarEquationTableNew').value = '';

    }



/*------------------------------------------------------------------------------
* NAME       : GenerateTableParametricEqu
* PURPOSE    : Reminds user to check on/off checkbox in order to generates table
*              of values for parametric equations 
* PARAMETERS : 
* RETURNS    : 
*----------------------------------------------------------------------------*/	
    function GenerateTableParametricEqu() {
        if (document.getElementById("ParametricTableOnOffCheckbox").checked == false) {
            var msg = 'In order to generate table of values for parametric equations, \n\n "on/off" checkbox must be checked to activate this feature of the calculator.'
            alert(msg);
            return;

        }

        TableDataParametricEquation();
    }


/*------------------------------------------------------------------------------
* NAME       : GraphingCalculator22
* PURPOSE    : Reminds user to check on/off checkbox in order to plot Cartesian points
* PARAMETERS : 
* RETURNS    : 
*----------------------------------------------------------------------------*/	
    function GraphingCalculator22() {
        if (document.getElementById("checkboxCartesianPoints").checked == false) {
            var msg = 'In order to plot Cartesian points, \n\n "on/off" checkbox must be checked to activate this feature of the calculator.'
            alert(msg);
            return;

        }

        GraphingCalculator();
    }


/*------------------------------------------------------------------------------
* NAME       : GraphingCalculator24
* PURPOSE    : Reminds user to check on/off checkbox in order to graph equation of circle 
* PARAMETERS : 
* RETURNS    : 
*----------------------------------------------------------------------------*/	
    function GraphingCalculator24() {
        if (document.getElementById("checkboxcircle").checked == false) {
            var msg = 'In order to graph equation of circle, \n\n "on/off" checkbox must be checked to activate this feature of the calculator.'
            alert(msg);
            return;

        }

        GraphingCalculator();
    }


/*------------------------------------------------------------------------------
* NAME       : GraphingCalculator26
* PURPOSE    : Reminds user to check on/off checkbox in order to graph equation of ellipse/hyperbola 
* PARAMETERS : 
* RETURNS    : 
*----------------------------------------------------------------------------*/	
    function GraphingCalculator26() {
        if (document.getElementById("checkboxconic1").checked == false) {
            var msg = 'In order to graph equation of ellipse/hyperbola, \n\n "on/off" checkbox must be checked to activate this feature of the calculator.'
            alert(msg);
            return;

        }

        GraphingCalculator();
    }


/*------------------------------------------------------------------------------
* NAME       : GraphingCalculator28
* PURPOSE    : Reminds user to check on/off checkbox in order to graph parametric equations
* PARAMETERS : 
* RETURNS    : 
*----------------------------------------------------------------------------*/	
    function GraphingCalculator28() {
        if (document.getElementById("ParametricEquationsOnOff").checked == false) {
            var msg = 'In order to graph parametric equations, \n\n "on/off" checkbox must be checked to activate this feature of the calculator.'
            alert(msg);
            return;

        }

        GraphingCalculator();
    }


/*------------------------------------------------------------------------------
* NAME       : GraphingCalculator30
* PURPOSE    : Reminds user to check on/off checkbox in order to graph polar equations
* PARAMETERS : 
* RETURNS    : 
*----------------------------------------------------------------------------*/	
    function GraphingCalculator30() {
        if (document.getElementById("PolarEquationsOnOff").checked == false) {
            var msg = 'In order to graph polar equations, \n\n "on/off" checkbox must be checked to activate this feature of the calculator.'
            alert(msg);
            return;

        }

        GraphingCalculator();
    }


/*------------------------------------------------------------------------------
* NAME       : GraphingCalculator32
* PURPOSE    : Reminds user to check on/off checkbox in order to graph polar points
* PARAMETERS : 
* RETURNS    : 
*----------------------------------------------------------------------------*/	
    function GraphingCalculator32() {
        if (document.getElementById("checkboxPolarPoints").checked == false) {
            var msg = 'In order to plot polar points, \n\n "on/off" checkbox must be checked to activate this feature of the calculator.'
            alert(msg);
            return;

        }

        GraphingCalculator();
    }



/*------------------------------------------------------------------------------
* NAME       : GraphingCalculator34
* PURPOSE    : Reminds user to check on/off checkbox in order to plot Cartesian points
* PARAMETERS : 
* RETURNS    : 
*----------------------------------------------------------------------------*/	
    function GraphingCalculator34() {
        if (document.getElementById("checkboxDrawVector").checked == false) {
            var msg = 'In order to draw vectors, \n\n "on/off" checkbox must be checked to activate this feature of the calculator.'
            alert(msg);
            return;

        }

        GraphingCalculator();
    }
 


/*------------------------------------------------------------------------------
* NAME       : tracingtype
* PURPOSE    : Sets tracing type (Cartesian, Parametric, or Polar)
* PARAMETERS : 
* RETURNS    : 
*----------------------------------------------------------------------------*/	
    function tracingtype(casenum) {
        document.getElementById("tracingpanel11").style.display = 'none';
        document.getElementById("tracingpanel22").style.display = 'none';
        document.getElementById("tracingpanel33").style.display = 'none';
        document.getElementById("tracingtype11").style.backgroundColor = 'silver';
        document.getElementById("tracingtype22").style.backgroundColor = 'silver';
        document.getElementById("tracingtype33").style.backgroundColor = 'silver';
        
        document.getElementById("tracingpanel" + casenum + casenum).style.display = 'inline-block';
        document.getElementById("tracingtype" + casenum + casenum).style.backgroundColor = 'yellow';
  
    }


/*------------------------------------------------------------------------------
* NAME       : CTF
* PURPOSE    : Converts a number to a fraction 
* PARAMETERS : 
* RETURNS    : 
*----------------------------------------------------------------------------*/	
    function CTF(num) {
        var val = document.getElementById('converttofrac' + num).value;
        var val2 = ToFraction(val);
        alert(val + ' = ' + val2);
        return;
    }


/*------------------------------------------------------------------------------
* NAME       : CTLD
* PURPOSE    : Converts a number to a long decimal
* PARAMETERS : 
* RETURNS    : 
*----------------------------------------------------------------------------*/	
    function CTLD(num) {
        var val = document.getElementById('converttofrac' + num).value;
        val = val.trim();
        var val2 = ToDecimal2(val);
        val2 = replaceAll(val2, ' ', '');
        alert(val + ' = ' + val2);
        return;
    }



/*------------------------------------------------------------------------------
* NAME       :  inputGI
* PURPOSE    :  Inputs examples of greatest integer function
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function inputGI() {
        document.getElementById('TextBoxForCartesianGraph1').value = '[[x]]';
        document.getElementById('TextBoxForCartesianGraph2').value = '[[x + 2]]';
        document.getElementById('TextBoxForCartesianGraph3').value = '[[x - 3]]';
        document.getElementById('graphingmodepoint').checked = true;
        GraphingCalculator();
    }



/*------------------------------------------------------------------------------
* NAME       :  ShadeFeatureOnOff
* PURPOSE    :  Turns on/off shading feature
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/
   function ShadeFeatureOnOff(casenum) {
        if (casenum == '1') {//shading featrue is off.
            document.getElementById("ShadeFeatureOff").style.backgroundColor = '#fcff10'; //bright yellow
            document.getElementById("ShadeFeatureOn").style.backgroundColor = '#eae6e0'; //gray
            document.getElementById("canvas2").width = '1';
            document.getElementById("canvas2").height = '1';
            ClearShading3344();                     
        }
        else{//shading featrue is o0.
            document.getElementById("ShadeFeatureOff").style.backgroundColor = '#eae6e0'; //gray
            document.getElementById("ShadeFeatureOn").style.backgroundColor = '#fcff10'; //bright yellow
            document.getElementById("canvas2").width = '540';
            document.getElementById("canvas2").height = '540'; 
            document.getElementById('ShadingCheckbox').checked = true;
            ClearShading22();           
        }    
    }



/*------------------------------------------------------------------------------
* NAME       :  rotateX
* PURPOSE    :  currently not used
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function rotateX(){
        var deg = 0;
        var AutomaticTracingParametric = setInterval(function () {
            deg = deg + 30;
            document.getElementById('rot').style.transform = 'rotateY(' + deg + 'deg)';

            if (dge > 360) { deg = 0 };

        }, 500);
    
    
    }

  /*------------------------------------------------------------------------------
* NAME       :  tabletype
* PURPOSE    :  Displays selected table of values
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/  
   function tabletype(num){
       //alert(num);
        document.getElementById('tabletype1').style.display = 'none';
        document.getElementById('tabletype2').style.display = 'none';
        document.getElementById('tabletype3').style.display = 'none';

        if(num == 1){
            document.getElementById('tabletype1').style.display = 'inline-block';
            document.getElementById('tabletype11').style.backgroundColor = '#fcff10';
            document.getElementById('tabletype22').style.backgroundColor = '#eae6e0';
            document.getElementById('tabletype33').style.backgroundColor = '#eae6e0';
        }
        else if(num == 2){
            document.getElementById('tabletype2').style.display = 'inline-block';
            document.getElementById('tabletype22').style.backgroundColor = '#fcff10';
            document.getElementById('tabletype11').style.backgroundColor = '#eae6e0';
            document.getElementById('tabletype33').style.backgroundColor = '#eae6e0';
        }
        else if(num == 3){
            document.getElementById('tabletype3').style.display = 'inline-block';
            document.getElementById('tabletype33').style.backgroundColor = '#fcff10';
            document.getElementById('tabletype11').style.backgroundColor = '#eae6e0';
            document.getElementById('tabletype22').style.backgroundColor = '#eae6e0';
        }       


   }


/*------------------------------------------------------------------------------
* NAME       :  NeedHelp
* PURPOSE    :  Displays information image
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/  
function NeedHelp(num){     
    document.getElementById('questiondiv').style.display = 'inline-block';
    if(num == 1){
        document.getElementById('questiondiv').innerHTML = '<img src="tablevalue.png" alt="blank" />';
    }

}

function prepareCartesiandataforexport(str){ 
    var tt = replaceAll(str, '</tbody></table>', '');
    tt = replaceAll(tt, '</td></tr>', '');
    tt = replaceAll(tt, '<td>', '');

    var dataArr = tt.split('<tr>');
    //document.getElementById('textarea11').value = '';
    var xdata = '';
    var ydata = '';
    for (var i = 2; i < dataArr.length; i++ ){
        //document.getElementById('textarea11').value += dataArr[i] + '\n\n';
        var ss = dataArr[i].split('</td>');
        xdata += ';' + ss[0];
        ydata += ';' + ss[1];
    }    


    return xdata.substr(1) + ';;;' + ydata.substr(1);
}






function FullViewCartesianTable(num){
    //var rr = document.getElementById('TableCartesianByColor' + num).innerHTML;
    //document.getElementById('textarea11').value = rr;
    document.getElementById('FullViewTable').style.display = 'inline-block';
    document.getElementById('FullViewTable').style.borderColor = graphcolor(num);
    var closebutton = '<input type="button"  value="CLOSE" onclick="closeFullViewCartesianTable()" class="btswhite" style=" width: 200px;height:30px; font-size: 20px;background-color: #b6ff00 " />'
    document.getElementById('FullViewTable').innerHTML = closebutton + '<br><br>' + document.getElementById('TableCartesianByColor' + num).innerHTML + '<br><br><br><br><br><br><br><br>';
}

function closeFullViewCartesianTable(){
    document.getElementById('FullViewTable').style.display = 'none';
}


function FullViewParametricTable(num){
    //var rr = document.getElementById('TableCartesianByColor' + num).innerHTML;
    //document.getElementById('textarea11').value = rr;
    document.getElementById('FullViewTable').style.display = 'inline-block';
    document.getElementById('FullViewTable').style.borderColor = graphcolor(num);
    var closebutton = '<input type="button"  value="CLOSE" onclick="closeFullViewCartesianTable()" class="btswhite" style=" width: 200px;height:30px; font-size: 20px;background-color: #b6ff00 " />'
    document.getElementById('FullViewTable').innerHTML = closebutton + '<br><br>' + document.getElementById('TableParametricEquationsSet' + num).innerHTML + '<br><br><br><br><br><br><br><br>';
}


function FullViewPolarTable(num){
    //var rr = document.getElementById('TableCartesianByColor' + num).innerHTML;
    //document.getElementById('textarea11').value = rr;
    document.getElementById('FullViewTable').style.display = 'inline-block';
    document.getElementById('FullViewTable').style.borderColor = graphcolor(num);
    var closebutton = '<input type="button"  value="CLOSE" onclick="closeFullViewCartesianTable()" class="btswhite" style=" width: 200px;height:30px; font-size: 20px;background-color: #b6ff00 " />'
    document.getElementById('FullViewTable').innerHTML = closebutton + '<br><br>' + document.getElementById('PolarEquationSet' + num).innerHTML + '<br><br><br><br><br><br><br><br>';

}




function exporttable(num) {    //var datafromTable1=     
    var rr = document.getElementById('TableCartesianByColor' + num).innerHTML;
    var data = prepareCartesiandataforexport(rr.toString());
    localStorage["datafromTable1"] = data;
    localStorage["TableDataType"] = 'cartesian';
    window.open('../GraphingCalculator1/ColumnOperations2.cshtml', 'ColumnOperations2' + Math.random());
}
  

function Copytable(num) {    //var datafromTable1=     
    var rr = document.getElementById('TableCartesianByColor' + num).innerHTML;
    var data = prepareCartesiandataforexport(rr.toString());

    document.getElementById('textarea11').style.display = 'inline-block';
    document.getElementById('Inputtextarea11').style.display = 'inline-block';

    var data22 = data.split(';;;');
    var xdata = data22[0].split(';');
    var ydata = data22[1].split(';');
    document.getElementById('textarea11').value = '\n';
    for (var i = 0; i < xdata.length; i++) {
        document.getElementById('textarea11').value += 'x = ' + xdata[i] + ' , y = ' + ydata[i] + '\n';
    }
    
    keypad(6);
    var copyText = document.getElementById("textarea11");
    copyText.select();
    document.execCommand("copy");
    document.getElementById('textarea11').style.display = 'none';
    document.getElementById('Inputtextarea11').style.display = 'none';
    alert("Text was copied to clipboard.");
    return;

    localStorage["datafromTable1"] = data;
    localStorage["TableDataType"] = 'cartesian';
    window.open('../GraphingCalculator1/ColumnOperations2.cshtml', 'ColumnOperations2' + Math.random());
}

function exporttableParametric(num) {    //var datafromTable1=     
    var rr = document.getElementById('TableParametricEquationsSet' + num).innerHTML;
    //var data = prepareCartesiandataforexport(rr.toString());
    //document.getElementById('textarea11').value = rr;
    document.getElementById('textarea11').value = '';
    var dataArr = rr.split('</td></tr>');
    var data = '';
    for (var i = 1; i < dataArr.length-1; i++ ){
        dataArr[i] = replaceAll(dataArr[i], '<td style="border: 1px solid gray; color: black;">', '');
        dataArr[i] = replaceAll(dataArr[i], '<tr>', '');
        dataArr[i] = replaceAll(dataArr[i].toString(), '</td>', ',');
        data += dataArr[i] + ';\n';
        document.getElementById('textarea11').value += dataArr[i] + ';\n';
    }

    data = replaceAll(data, '</td>', ',');

    localStorage["datafromTable1"] = data;
    localStorage["TableDataType"] = 'parametric';
    window.open('../GraphingCalculator1/ColumnOperations2.cshtml', 'ColumnOperations2' + Math.random());
}
  
function exporttablePolar(num) {    //var datafromTable1=     
    var rr = document.getElementById('PolarEquationSet' +num).innerHTML;
    //var data = prepareCartesiandataforexport(rr.toString());
    //document.getElementById('textarea11').value = rr;
    document.getElementById('textarea11').value = '';
    var dataArr = rr.split('</td></tr>');
    var data = '';
    for (var i = 1; i < dataArr.length-1; i++ ){
        dataArr[i] = replaceAll(dataArr[i], '<td style="border: 1px solid gray; color: black;">', '');
        dataArr[i] = replaceAll(dataArr[i], '<tr>', '');
        dataArr[i] = replaceAll(dataArr[i].toString(), '</td>', ',');
        data += dataArr[i] + ';\n';
        document.getElementById('textarea11').value += dataArr[i] + ';\n';
    }

    data = replaceAll(data, '</td>', ',');

    localStorage["datafromTable1"] = data;
    localStorage["TableDataType"] = 'polar';
    window.open('../GraphingCalculator1/ColumnOperations2.cshtml', 'ColumnOperations2' + Math.random());
}
  
