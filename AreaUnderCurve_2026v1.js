function alert22(){
    return;
    alert('hello alert22');
 }

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


    function TestingPoint() {
        var xval = document.getElementById('TestingPointX').value;
        var yval = document.getElementById('TestingPointY').value;
        document.getElementById('TestingPointDiv').innerHTML = '';

        for (var i = 1; i <= 20;i++ ){
        var valuedropbox = document.getElementById('mydropdownCartesian'+i).value;
        //var valueSelect = document.getElementById('mydropdownCartesian'+i);
        //var selectedText = valueSelect.options[valueSelect.selectedIndex].text;
        var ee1 = document.getElementById('TextBoxForCartesianGraph'+i).value;
        //var ee2 = document.getElementById('checkboxY'+i).checked;
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

//////////////////////////////////

    function isNum(n) {
        return Number(n) == n;
    }


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


    function processResult(text) {
        var NN = text.indexOf('e');
        if (NN == -1) { return text };

        var PP1 = text.substring(0, NN);
        var PP2 = text.substring(NN + 1);
        var mantissa = Math.round(PP1 * 10000000000) / 10000000000;
        text = mantissa + 'e' + PP2;
        return text;
    }


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
  
    //Graphing Calculator -- generates data for graph
    function GraphingCalculator() {
                 //alert('777');
        //cleardatastorage();;
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

                if (parseInt(valuedropbox) <= 4 && rightsideinputequation.indexOf('y') > -1) {
                    var msg = 'Equation ' + i + ' has "y" on both sides of the equation.\n\n If the left side has "y", then right side cannot have "y".\n\n\n\n';
                    alert(msg);
                    return;
                }

                if ((parseFloat(valuedropbox) >= 5 && parseFloat(valuedropbox) <= 9)&& rightsideinputequation.indexOf('x') > -1) {
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
  


                //var elementname11 = 'FindYforSpecificX' + (i + 1);
                //document.getElementById(elementname11).value = '-3,-2,-1,0,1,2,3';
                //FindY();

                //document.getElementById('TableStartY1').value = -10;
                //document.getElementById('TableEndY1').value = 10;
                //document.getElementById('StepsizeY1').value = 1;
                //alert('777777 draw()')
                if (InputExpression.indexOf("{") > -1) {
                    InputExpression = ProcessInequality(InputExpression);
                }

                if (InputExpression.indexOf("|") > -1) {
                    InputExpression = ProcessAbsoluteValue(InputExpression);
                }

                while (InputExpression.indexOf("Log") > -1) {
                    InputExpression = processlog(InputExpression);
                }

                InputExpression = replaceAll(InputExpression, 'LLL', 'LOG');

                while (InputExpression.indexOf("nroot") > -1) {
                    InputExpression = processnroot(InputExpression);
                }

                InputExpression = replaceAll(InputExpression, 'NRRR', 'NROOT');
                

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
                    else if (InputExpression.indexOf("hyperbolaXY") > -1) {
                        getDataConic(InputExpression, npoints1, 'GraphY' + i, "hyperbolaXY");
                    }
                    else if (InputExpression.indexOf("hyperbolaYX") > -1) {
                        getDataConic(InputExpression, npoints1, 'GraphY' + i, "hyperbolaYX");
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
                    else {
                        GenerateCartesianData(InputExpression, npoints1, xRmin, xh1, 'GraphY' + i);
                    }

                }

                else if (parseInt(valuedropbox) <= 9){ //for equations/inequalities with "x" on left side
                    var yh1 = (yRmax - yRmin) / npoints1;

                    while (InputExpression.indexOf("y") > -1) {
                        InputExpression = InputExpression.replace("y", "x");
                    }
                    
                    GenerateCartesianData2(InputExpression, npoints1, yRmin, yh1, 'GraphX'+i);                
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
            //alert('7777.....i=' + i);
            //alert('i = ' + i + 'data.... ' + document.getElementById("ParametricX1").value);
        }


        //for graph of circle
         if (document.getElementById("checkboxcircle").checked) {
             for (var i = 1; i <= 10; i++) {
                 var part1 = document.getElementById('TextBoxCircleA'+i).value;
                 var part2 = document.getElementById('TextBoxCircleB'+i).value;
                 var part3 = document.getElementById('TextBoxCircleC'+i).value;


                 if (part1 != "" && part2 != "" && part3 != "") {
                     //var part1 = document.getElementById('TextBoxconic1').value;
                     //var part2 = document.getElementById('TextBoxconic2').value;
                     //var part3 = document.getElementById('TextBoxconic3').value;
                     //var part4 = document.getElementById('TextBoxconic4').value;

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

                     //draw center of circle      
                     document.getElementById("GraphCircleCenterX" + i).value = thg2;
                     document.getElementById("GraphCircleCenterY" + i).value = thp2;
                     var InputExpression="ellipse(" + thg2 + ";" + thp2 + ";" + radius  + ";" + radius + ")";
                     var npoints1 = 1000;
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
                     if (plusminus == "+") {
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
                     else if (plusminus == "-" && numerator1.indexOf("x") > -1 && numerator2.indexOf("y") > -1) {
                         var InputExpression = "hyperbolaXY(" + thg2 + ";" + thp2 + ";" + h + ";" + k + ")";
                         getDataConic(InputExpression, npoints1, "GraphConic" + i, "hyperbolaXY");

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

                     else if (plusminus == "-" && numerator1.indexOf("y") > -1 && numerator2.indexOf("x") > -1) {
                         var InputExpression = "hyperbolaYX(" + thg2 + ";" + thp2 + ";" + h + ";" + k + ")";
                         getDataConic(InputExpression, npoints1, "GraphConic" + i, "hyperbolaYX");
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
            var Tmax = FindValue(document.getElementById("ParametricTmax").value);
            var Tmin = FindValue(document.getElementById("ParametricTmin").value);
            var Tstepsize = FindValue(document.getElementById("ParametricTstepsize").value);

            for (var i = 1; i <= 10; i++) {
                var tt1 = document.getElementById("ParametricX"+i).value ;
                var tt2 = document.getElementById("ParametricY"+i).value
                var tt3 = document.getElementById('checkboxParametric'+i).checked;
                if (tt1 != "" && tt2 != "" && tt3) { 
                
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


                    //create tracing point for parametric equation
                    if (document.getElementById('ParametricTracechartID'+i).checked && document.getElementById("TraceParametricCheckbox").checked) {
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
                        var tt = document.getElementById('TraceParametricBox').value;//TraceParametricBox
                        document.getElementById('LocationOfMouseClickX2').value = "t = " + tt + ' ; x =' + x1 + " ; y = " + y1 ;

                        //document.getElementById('LocationOfMouseClickX2').value = x1;
                        //document.getElementById('LocationOfMouseClickY2').value = y1;
                    }

                }
            }
        }


   
        //for polar equations
        if (document.getElementById("PolarEquationsOnOff").checked) {
            for (var i = 1; i <= 20; i++) {
                var pp = document.getElementById("checkboxPolarEquation" + i).checked;
                if (document.getElementById("PolarEquation" + i).value != "" && pp) {
                    var InputExpression = document.getElementById("PolarEquation" + i).value;
                    var NameOfEquation = 'r' + '<sub>1</sub>(' + thetasymbol + ') = ' + InputExpression;
                    PolarGraphData(InputExpression, "PolarSet" + i, "PolarEquationSet" + i, NameOfEquation, npoints1);
                }

            }
        }
	
        draw();//draw graphs
        TableY1234BB(); //make table of values

    }


    //Generates table of data for parametric equations
    function TableDataParametricEquation() {            
        if (document.getElementById("ParametricTableCheckBox").checked) {
            var Tmin = FindValue(document.getElementById("TableStartParametricTable").value);
            var Tmax = FindValue(document.getElementById("TableEndParametricTable").value);
            var Tstepsize = FindValue(document.getElementById("StepsizeParametricTable").value);


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

                        t1 = Math.round(t1 * 100000000) / 100000000;
                        //dataArray = t1 + ' ; ' + x1 + ' ; ' + y1 + ' ;<br><br>';
                        tdata += ';' + t1;
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

    function TableDataPolarEquation() {
        for (var i = 1; i <= 20; i++) {
            var Tmin = FindValue(document.getElementById("TableStartPolarEquationTable").value);
            var Tmax = FindValue(document.getElementById("TableEndPolarEquationTable").value);
            var Tstepsize = FindValue(document.getElementById("StepsizePolarEquationTable").value);
            var thetasymbol = String.fromCharCode(952);   //theta   
            var colortext = graphcolor(i);
            var pp = document.getElementById("PolarEquationTableCheckBox").checked;
            if (document.getElementById("PolarEquation" + i).value != "" && pp) {
                var InputExpression = document.getElementById("PolarEquation" + i).value;
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

                    t1 = Math.round(t1 * 100000000) / 100000000;
                    xdata += ';'+ x1;
                    ydata += ';'+y1 ;
                    rdata += ';' + r1;
                    thetadata += ';' + t1;
                    
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

    function tableCreatePolarEquation(thetadata, rdata, xdata, ydata, TableName, color, PolarEquation) {
     
//alert('rdata.....'+rdata );        
//alert('gggggg.....'+rdata );        
//alert('gggggg.....'+rdata );        


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

        //document.getElementById(TableName).innerHTML = "";
        document.getElementById(TableName).appendChild(tbl);

    }



    function currentID() {
        var selected = document.activeElement;
        //alert(selected.id);
        document.getElementById('CurrentFocusID').value = selected.id;
        getCursorPosition(selected);
    }




    function Trace1(Numm) {
        var val789 = FindValue(document.getElementById("TraceTextbox").value);

        if (Numm == 1) {
            var val744 = val789 + 1;
            if (val744 < 0) { val744 = 0; }
            if (val744 > 16) { val744 = 16; }
            document.getElementById("TraceTextbox").value = val744;
        }
        else if (Numm == 2) {
            var val744 = val789 - 1;
            if (val744 < 0) { val744 = 0; }
            if (val744 > 16) { val744 = 16; }
            document.getElementById("TraceTextbox").value = val744;
        }
    }



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




    function ClearShading() {
        if (document.getElementById('ShadingCheckbox').checked) {//case 1: shading mode is on
            ShadingMode('0');
            GraphingCalculator();
            ShadingMode('1');
        }
        else {
            GraphingCalculator();
        }

    }



    function TraceOff2() {
        document.getElementById('TracePointX').value = '';
        document.getElementById('TracePointY').value = '';

    }




    function GraphNormalpdf() {

        document.getElementById('TextBoxForCartesianGraph1').value = "normalpdf(0; 5)";
        document.getElementById('TextBoxForCartesianGraph2').value = "normalpdf(2; 5)";

        document.getElementById('xMinParameter').value = -20;
        document.getElementById('xMaxParameter').value = 25;
        document.getElementById('yMinParameter').value = -0.04;
        document.getElementById('yMaxParameter').value = 0.15;

        GraphingCalculator();
    }




    function GraphNormalcdf() {

        document.getElementById('TextBoxForCartesianGraph1').value = "normalcdf(0; 5)";
        document.getElementById('TextBoxForCartesianGraph2').value = "normalcdf(2; 5)";

        document.getElementById('xMinParameter').value = -30;
        document.getElementById('xMaxParameter').value = 30;
        document.getElementById('yMinParameter').value = -0.1;
        document.getElementById('yMaxParameter').value = 1.5;

        GraphingCalculator();
    }




    function Graphtdistpdf() {

        document.getElementById('TextBoxForCartesianGraph1').value = "tdistpdf(7)";
        document.getElementById('TextBoxForCartesianGraph2').value = "tdistpdf(25)";

        document.getElementById('xMinParameter').value = -3.75;
        document.getElementById('xMaxParameter').value = 3.75;
        document.getElementById('yMinParameter').value = -0.04;
        document.getElementById('yMaxParameter').value = 0.5;

        GraphingCalculator();
    }




    function Graphtdistcdf() {

        document.getElementById('TextBoxForCartesianGraph1').value = "tdistcdf(14)";
        document.getElementById('TextBoxForCartesianGraph2').value = "tdistcdf(22)";

        document.getElementById('xMinParameter').value = -30;
        document.getElementById('xMaxParameter').value = 30;
        document.getElementById('yMinParameter').value = -0.1;
        document.getElementById('yMaxParameter').value = 1.5;

        GraphingCalculator();
    }





    function GraphCircle() {

        document.getElementById('TextBoxForCartesianGraph1').value = "circle(3/4; 7/8; 6.5)";
        document.getElementById('TextBoxForCartesianGraph2').value = "circle(3/4; 7/8; 9.5)";

        GraphingCalculator();
    }





    function GraphEllipse() {

        document.getElementById('TextBoxForCartesianGraph1').value = "ellipse(2; 3; 16; 9)";
        document.getElementById('TextBoxForCartesianGraph2').value = "ellipse(-5; -7; 12; 25)";

        GraphingCalculator();
    }




    function GraphHyperbolaXY() {

        document.getElementById('TextBoxForCartesianGraph1').value = "hyperbolaXY(2; 3; 16; 9)";
        GraphingCalculator();
    }




    function GraphHyperbolaYX() {

        document.getElementById('TextBoxForCartesianGraph1').value = "hyperbolaYX(2; 3; 25; 36)";
        GraphingCalculator();
    }







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
            var Equation = "hyperbolaXY(" + hhh + ";" + kkk + ";" + ValueX + ";" + ValueY + ")";
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
            var Equation = "hyperbolaYX(" + hhh + ";" + kkk + ";" + ValueX + ";" + ValueY + ")";
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


    

    function DrawCircleExample() {

        document.getElementById('DrawCircleCenterX').value = "2/5";
        document.getElementById('DrawCircleCenterY').value = "-3/8";
        document.getElementById('DrawCircleRadius').value = 5.2;

        DrawCircle();

    }

    function DrawEllipseExample() {

        document.getElementById('DrawEllipseVal1').value = "5";
        document.getElementById('DrawEllipseVal2').value = "-3";
        document.getElementById('DrawEllipseVal3').value = 25;
        document.getElementById('DrawEllipseVal4').value = 9;
         DrawEllipse();

    }

    function DrawHyperbolaExample() {

        document.getElementById('DrawHyperbolaVal1').value = "5";
        document.getElementById('DrawHyperbolaVal2').value = "-3";
        document.getElementById('DrawHyperbolaVal3').value = 25;
        document.getElementById('DrawHyperbolaVal4').value = 9;
        DrawHyperbola(1);

    }




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


        var Equation = A + "x" + sup2 + "+" + B + "x+" + C;
        Equation = Equation.replace("+-", "-");
        Equation = Equation.replace("+-", "-");

        document.getElementById('TextBoxForCartesianGraph20').value = Equation;
        document.getElementById('checkboxCartesianPoints').checked=true;
        document.getElementById('Point18X').value = x1;
        document.getElementById('Point18Y').value = y1;
        document.getElementById('Point19X').value = x2;
        document.getElementById('Point19Y').value = y2;
        document.getElementById('Point20X').value = x3;
        document.getElementById('Point20Y').value = y3;
       
        GraphingCalculator();
        
    }






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





    function DrawParabola1Example() {


        document.getElementById('DrawParabolaPoint1X').value = "1/2";
        document.getElementById('DrawParabolaPoint1Y').value = "3/4";
        document.getElementById('DrawParabolaPoint2X').value = 6.9;
        document.getElementById('DrawParabolaPoint2Y').value = 12.5;

        DrawParabola1();

    }




    function DrawParabola2Example() {

        document.getElementById('DrawParabolaBBPoint1X').value = '-5';
        document.getElementById('DrawParabolaBBPoint1Y').value = 8;
        document.getElementById('DrawParabolaBBPoint2X').value = 1;
        document.getElementById('DrawParabolaBBPoint2Y').value = 5;
        document.getElementById('DrawParabolaBBPoint3X').value = 4;
        document.getElementById('DrawParabolaBBPoint3Y').value = 3;

        DrawParabola2();


    }




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






    function DrawLineTwoPoints2Example() {
        
        document.getElementById('DrawLineSlope').value = "3/4";
        document.getElementById('DrawLinePointPoint2X').value = 9.2;
        document.getElementById('DrawLinePointPoint2Y').value = -1.5;
         
        DrawLineTwoPoints2();


    }





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


 

    function DrawLineTwoPoints1Example() {

        document.getElementById('DrawLinePoint1X').value = "-1/2";
        document.getElementById('DrawLinePoint1Y').value = "8/7";
        document.getElementById('DrawLinePoint2X').value = 9.6;
        document.getElementById('DrawLinePoint2Y').value = -12.7;

        DrawLineTwoPoints1();
         
    }





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


 

    function DrawTwoParralelLinesExample() {

        document.getElementById('DrawTwoParralelLines1').value = "2/5";
        document.getElementById('DrawTwoParralelLines2').value = 3;
        document.getElementById('DrawTwoParralelLines3').value = -4;
        document.getElementById('DrawTwoParralelLines4').value = 2;
        document.getElementById('DrawTwoParralelLines5').value = 7;

        DrawTwoParralelLines();
         
    }





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


 

    function DrawTwoPerpendicularLinesExample() {

        document.getElementById('DrawTwoPerpendicularLines1').value = "2/5";
        document.getElementById('DrawTwoPerpendicularLines2').value = 3;
        document.getElementById('DrawTwoPerpendicularLines3').value = -4;
        document.getElementById('DrawTwoPerpendicularLines4').value = 2;
        document.getElementById('DrawTwoPerpendicularLines5').value = 7;

        DrawTwoPerpendicularLines();
         
    }



 



    function Shading() {        
        if(document.getElementById('ShadingCheckbox').checked == false){
            return;
        } 
        var canvas = document.getElementById('canvas');
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
     

    

    function Shading2() {//write text on grid;  currently not used in program
        var canvas = document.getElementById('canvas');
        if (null == canvas || !canvas.getContext) return;
        var ctx = canvas.getContext('2d');
 
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

        //var textLocX = xx0 + FindValue(document.getElementById('TextLocationBoxX').value) * dxx;
        //var textLocY = yy0 - FindValue(document.getElementById('TextLocationBoxY').value) * dyy;

        //adding text to canvas
        ctx.fillStyle = "maroon";
        ctx.font = "18px Arial bold";
        ctx.globalAlpha = 1;
        ctx.textAlign = "left";
        //write text to canvas
        var text = document.getElementById('AddTextCanvas').value;

        ctx.fillText(text, textLocX, textLocY);

        //saving image
        cPush();

        return;



    }






    //var cPushArray2 = new Array();
    //var cStep2 = -1;

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




    var cPushArray = new Array();
    var cStep = -1;
    var ctx = document.getElementById('canvas').getContext("2d");

    function cPush() {
        //var dataURL = canvas.toDataURL();
        //document.getElementById('canvasImg1').src = dataURL;
        //return;
        cStep++;
        if (cStep < cPushArray.length) { cPushArray.length = cStep; }
        cPushArray.push(document.getElementById('canvas').toDataURL());

    }


    function cUndo() {
        var ctx = document.getElementById('canvas').getContext("2d");
        if (cStep > 0) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            cStep--;
            var canvasPic = new Image();
            canvasPic.src = cPushArray[cStep];
            canvasPic.onload = function () { ctx.drawImage(canvasPic, 0, 0); }
        }
    }


    function cRedo() {
        var ctx = document.getElementById('canvas').getContext("2d");
        if (cStep < cPushArray.length - 1) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            cStep++;
            var canvasPic = new Image();
            canvasPic.src = cPushArray[cStep];
            canvasPic.onload = function () { ctx.drawImage(canvasPic, 0, 0); }
        }
    }






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
                var x = SolveEquationDirect(xcoord - 0.2, xcoord + 0.2, InputExpression);
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
                var y = SolveEquationDirect(val1, val2, InputExpression);
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
                var y = SolveEquationDirect(val1, val2, InputExpression);
 
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
                    var xint = SolveEquationDirect(xval1, xval2, InputExpression);
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
                    var yint = SolveEquationDirect(yval1, yval2, InputExpression);
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
 
        
 ////////////////////
 
 
 
    }
 
 
         
 
        
 


     function draw() {
         if(document.getElementById('ShadingCheckbox').checked){
             return;
         }
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
        if (document.getElementById('ShadingCheckbox').checked == false) {//shading feature is "OFF"
            context.clearRect(0, 0, canvas.width, canvas.height);
        }
        ctx.globalAlpha = 1;
        context.fillStyle = "black";
        context.font = "12px Arial";
        context.fillText("0", x0 - 10, y0 + 13);

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

            if (ee1 != "" && ee2 && parseInt(valuedropbox) <= 4 ) {
                //alert('in draw()......111111');
                //alert('valuedropbox...' + valuedropbox);
                var dataA = document.getElementById('GraphY' + i).value; // 
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
                    //alert('data5A....'+data5A)
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

                var dashFlag = "0";
                funGraph(ctx, "Reflection", '#B8860B', 3, dataCX, dataCY, xRminn, xRmaxx, yRminn, yRmaxx, x0, y0, dxx, dyy, dashFlag, ShadeFlag);
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

        var cond1 = document.getElementById('shadingAreaRectanglescheckbox').checked;
        var cond2 = document.getElementById('shadingAreacheckbox').checked;
        var cond3 = document.getElementById('GraphOnlycheckbox').checked;


         //draw shaded area
         if(cond3 == false){
            var data22 = document.getElementById("datastore2").value;
            if (data22.indexOf(';;;') > -1) {
                ctx.beginPath();
                ctx.lineWidth = 3;
                ctx.strokeStyle = 'yellow';
                ctx.fillStyle = 'yellow';
                ctx.globalAlpha = 0.8; 
                var data11 = (data22).split(';;;');
                var dataArray1 = (data11[0]).split(';');
                var dataArray2 = (data11[1]).split(';');
                var dataArray3 = (data11[2]).split(';');
                var dataArray4 = (data11[3]).split(';');

                for (var i = 0; i < dataArray1.length; i++) {
                    //alert('dataArray3[i]....' + dataArray3[i]);
                    //alert('dataArray4[i]....' + dataArray4[i]);

                    ctx.beginPath();
                    xx = x0 + parseFloat(dataArray1[i]) * dxx;
                    yy = y0 - parseFloat(0) * dyy;
                    ctx.moveTo(xx, yy);
                    //alert('data22....' + data22);
    
                    xx = x0 + parseFloat(dataArray2[i]) * dxx;
                    yy = y0 - parseFloat(0) * dyy;
                    ctx.lineTo(xx, yy);

                    xx = x0 + parseFloat(dataArray2[i]) * dxx;
                    yy = y0 - parseFloat(dataArray3[i]) * dyy;
                    ctx.lineTo(xx, yy);


                    xx = x0 + parseFloat(dataArray1[i]) * dxx;
                    yy = y0 - parseFloat(dataArray4[i]) * dyy;
                    ctx.lineTo(xx, yy);

                    xx = x0 + parseFloat(dataArray1[i]) * dxx;
                    yy = y0 - parseFloat(0) * dyy;
                    ctx.lineTo(xx, yy);
                    ctx.fill();
                    ctx.stroke();
                    ctx.closePath();

                }

            }
         }               
         
         //draw rectangles
        if(cond3 == false && cond1 == true){
            var data22 = document.getElementById("datastore").value;
            if (data22.indexOf(';;;') > -1) {
                ctx.beginPath();
                ctx.lineWidth = 3;
                ctx.strokeStyle = 'green';
                ctx.fillStyle = 'gray';
                ctx.globalAlpha = 0.2; 
                var data11 = (data22).split(';;;');
                var dataArray1 = (data11[0]).split(';');
                var dataArray2 = (data11[1]).split(';');
                var dataArray3 = (data11[2]).split(';');
                var dataArray4 = (data11[3]).split(';');

                for (var i = 0; i < dataArray1.length; i++) {
                    //alert('dataArray3[i]....' + dataArray3[i]);
                    //alert('dataArray4[i]....' + dataArray4[i]);

                    ctx.beginPath();
                    xx = x0 + parseFloat(dataArray1[i]) * dxx;
                    yy = y0 - parseFloat(0) * dyy;
                    ctx.moveTo(xx, yy);
                    //alert('data22....' + data22);
    
                    xx = x0 + parseFloat(dataArray2[i]) * dxx;
                    yy = y0 - parseFloat(0) * dyy;
                    ctx.lineTo(xx, yy);

                    xx = x0 + parseFloat(dataArray2[i]) * dxx;
                    yy = y0 - parseFloat(dataArray3[i]) * dyy;
                    ctx.lineTo(xx, yy);


                    xx = x0 + parseFloat(dataArray1[i]) * dxx;
                    yy = y0 - parseFloat(dataArray4[i]) * dyy;
                    ctx.lineTo(xx, yy);

                    xx = x0 + parseFloat(dataArray1[i]) * dxx;
                    yy = y0 - parseFloat(0) * dyy;
                    ctx.lineTo(xx, yy);
                    ctx.fill();
                    ctx.stroke();
                    ctx.closePath();

                }

            }
         }



   



         //Plot cartesian point
         var deltasymbol = String.fromCharCode(948);	
         var epsilonsymbol = String.fromCharCode(949);	
         var emdash = String.fromCharCode(8212);	
         ctx.globalAlpha = 1; 

         if (document.getElementById("checkboxCartesianPoints").checked) {
                if (document.getElementById("pointsizeL").checked) {
                    var pointSize = 6;
                }
                else if (document.getElementById("pointsizeM").checked) {
                    var pointSize = 4;
                }
                else if (document.getElementById("pointsizeS").checked) {
                    var pointSize = 2;
                }

                var pointSize = 4;
                for (var i = 1; i <= 20; i++) {
                    ctx.font="16px Georgia";
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

                        var xcoord = x0 + xt * dxx;
                        var ycoord = y0 - yt * dyy;
                        var LocationX = xcoord + 25; 
                        var LocationY = ycoord - 10; 

                        //close point
                        if (OpenClose) {
                            var radius = pointSize;
                            ctx.beginPath();
                            ctx.strokeStyle = "rgb(204, 0, 102)";
                            if(i==17){
                                ctx.strokeStyle = 'blue';
                                Label = 'c';
                                ctx.font="18px Georgia";
                                var LocationX = xcoord; 
                                var LocationY = ycoord+25; 
                            }
                            else if(i==18){
                                //ctx.strokeStyle = 'blue';
                                ctx.font="18px Georgia";
                                Label = 'f(x)='+coordY;
                            }
                            else if(i==19){
                                //ctx.strokeStyle = 'blue';
                                ctx.font="18px Georgia";
                                Label = 'x='+coordX;
                            }
                            else if(i==20 ){
                                ctx.strokeStyle = 'blue';
                                var LocationX = xcoord; 
                                var LocationY = ycoord+15; 
                                //Label = '';
                            }



                            ctx.arc(xcoord, ycoord, radius, 0, 2 * Math.PI, true);
                            ctx.fillStyle = 'black';
                            ctx.fillStyle = 'red';
                            ctx.font="18px";
                            ctx.fill();
                            ctx.fillText(Label, LocationX , LocationY);
                            ctx.stroke();
                            ctx.closePath();
                        
                        
                        
                        }
                        else {//open point
                            var radius = pointSize; // * dxx;
                            ctx.beginPath();
                            ctx.strokeStyle = "rgb(0, 0, 0)";
                            ctx.arc(xcoord, ycoord, radius, 0, 2 * Math.PI, true);
                            ctx.fillStyle = 'white';
                            ctx.fill();
                            ctx.fillStyle = 'red';
                            ctx.font="18px Georgia";
                            ctx.fillText(Label, xcoord + 25, ycoord-10);
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


                if (numerator1 != '' && plusminus != '' && numerator2 != '' && denominator1 != '' && denominator2 != '' && rightside != '' && checkboxi) {
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
                    ctx.beginPath();
                    ctx.strokeStyle = "rgb(0, 0, 0)";
                    ctx.arc(xcoord, ycoord, radius, 0, 2 * Math.PI, true);
                    ctx.fillStyle = 'orange';
                    ctx.fill();
                    ctx.fillStyle = 'green';
                    ctx.font="16px Georgia";
                    ctx.fillText(Label, xcoord + 25, ycoord-15);
                    ctx.font="12px Georgia";
                    ctx.stroke();
                    ctx.closePath();
                }
            }
        }
        

        //for tracing feature     
            var coordX = document.getElementById("TracePointX").value;
            var coordY = document.getElementById("TracePointY").value;
            if (coordX != "" && coordY != "") {                
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

    }



    function funGraph(ctx, func, color, thick, dataX, dataY, xRminn, xRmaxx, yRminn, yRmaxx, x0, y0, dxx, dyy, dashedFlag, shadeflag) {

        ctx.beginPath();
        ctx.lineWidth = thick;
        ctx.strokeStyle = color;
        ctx.globalAlpha = 1; //transparency level
        var setLineDashError = false;
        if (dashedFlag == "1") {
            try{
                ctx.setLineDash([5, 4]); //[length of segment, length of gap]
            }    
            catch(err) {
                setLineDashError = true;
                var text = "There was an error on this page.\n\n";
            }
        }


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


                var radius = 0.5; // * dxx;
                ctx.beginPath();
                ctx.strokeStyle = color;
                ctx.arc(xcoord, ycoord, radius, 0, 2 * Math.PI, true);
                //ctx.fillStyle ="green";
            ctx.fillStyle = color;
            ctx.fill();
            ctx.stroke();
            ctx.closePath();

            }

            return;
        }

        //alert('dashedFlag...' + dashedFlag);
        //draw solid graph
        if (dashedFlag != "1") {
            for (var i = 0; i < dataX.length; i++) {
                //xx = dx * i;
                xx = x0 + parseFloat(dataX[i]) * dxx;
                //yy = scale * func(xx / scale);
                yy = y0 - parseFloat(dataY[i]) * dyy;

                yy2 = y0 - parseFloat(dataY[i + 1]) * dyy;

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





    function showAxes(ctx, dxx, dyy, xRminn, xRmaxx, yRminn, yRmaxx, x0, y0) {

        if (document.getElementById('ShadingCheckbox').checked) {//shading feature is "ON"
            return;
        }

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
                ctx.strokeStyle = "rgb(0 , 0, 0)";
                ctx.moveTo(x0 - 3, val1); ctx.lineTo(x0 + 3, val1);  //draw horizontal gridlines 
                ctx.lineWidth = 2.0;
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

                    context.fillText(TextLabelY, LabelLocationY, val1 + 4);
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
                ctx.moveTo(val1, y0 + 3); ctx.lineTo(val1, y0 - 3);  //draw vertical gridlines 
                ctx.lineWidth = 2.0;
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
                    context.fillText(TextLabelX, val1, LabelLocationX);
                }

            }

        }



        //draw x-axis
        ctx.beginPath();
        ctx.strokeStyle = "rgb(0,0,0)";
        ctx.moveTo(0, y0); ctx.lineTo(canvas.width, y0);  //draw x-axis
        ctx.lineWidth = 1.5;
        ctx.closePath();
        ctx.stroke();

        //draw y-axis
        ctx.beginPath();
        ctx.strokeStyle = "rgb(0,0,0)";
        ctx.moveTo(x0, 0); ctx.lineTo(x0, canvas.height);  //draw y-axis
        ctx.lineWidth = 1.5;
        ctx.closePath();
        ctx.stroke();


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


 
 

 
    function TableY1() {
        var PIsymbol = String.fromCharCode(960);   //PI
 
        //for Y1
        if (document.getElementById('TextBoxForCartesianGraph1').value != "") {//Y1
 
            var InputExpression = document.getElementById('TextBoxForCartesianGraph1').value;
            while (InputExpression.indexOf("nroot") > -1) {
                InputExpression = processnroot(InputExpression);
            }
            InputExpression = replaceAll(InputExpression, 'NRRR', 'NROOT');

            if (InputExpression.indexOf("{") > -1) {
                InputExpression = ProcessInequality(InputExpression);
            }
            if (InputExpression.indexOf("|") > -1) {
                InputExpression = ProcessAbsoluteValue(InputExpression);
            }     
            while (InputExpression.indexOf("Log") > -1) {
                InputExpression = processlog(InputExpression);
            }
            InputExpression = replaceAll(InputExpression, 'LLL', 'LOG');
                    
            //var StartVal = document.getElementById('TableStartY1').value;
            //var xStart = FindValue(StartVal);
 
            //var EndVal = document.getElementById('TableEndY1').value;
            //var xEnd = FindValue(EndVal);
 
            //var Stepsize = document.getElementById('StepsizeY1').value;
            //var xStepsize = FindValue(Stepsize);
 
             
            var text = "y = " + document.getElementById('TextBoxForCartesianGraph1').value + "<br><br>";
            text = '<span style="font-size:20px; color: blue">' + text + '</span>';

            document.getElementById('TableDatatY1').innerHTML = text;
 
            for (var x = parseFloat(xStart); x <= parseFloat(xEnd); x += parseFloat(xStepsize)) {
                var temp1 = replaceAll(InputExpression, "x", "(" + x + ")");

                 y = FindValue(temp1);
                //y = Math.round(y * 1000000000000) / 1000000000000;

                 var ydec = '';
                if(Math.abs(y)<0.000000001 || Math.abs(y)<100000000000000){
                    var ydec = ' = ' + ToDecimal(y.toString());
                }


                if (IsNumericc(y) == false || y == null) {
                    y = NaN;
                }
 
                var XH = x;
 
                if (document.getElementById("TableY1Checkbox").checked) {
                    var tempp = x / Math.PI;
                    var XH = ToFraction(tempp.toString());
                    //alert("tempp = " + tempp + ".......... XH = " + XH);
 
                    var XH2 = XH.toString();
                    if (XH2.indexOf("/") > -1) {
                        XH2 = XH2.replace("/", PIsymbol + "/");
                        XH2 = XH2.replace("1" + PIsymbol, PIsymbol);
                        XH = XH2
                    }
                    else {
                        XH = XH2 + PIsymbol;
                        if (XH2 == "0") {
                            XH = 0;
                        }
                    }
  
                }
 
                document.getElementById('TableDatatY1').innerHTML += "x = " + XH + " , &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; y = " + temp1 + ' = ' + y + ydec + "<br><br>";
 
 
            }
 
        }
    }

 

 
    function TableY2() {
       var PIsymbol = String.fromCharCode(960);   //PI
 
       //for Y2
        if (document.getElementById('TextBoxForCartesianGraph2').value != "") {//Y2
 
            var InputExpression = document.getElementById('TextBoxForCartesianGraph2').value;
            while (InputExpression.indexOf("nroot") > -1) {
                InputExpression = processnroot(InputExpression);
            }
            InputExpression = replaceAll(InputExpression, 'NRRR', 'NROOT');

            if (InputExpression.indexOf("{") > -1) {
                InputExpression = ProcessInequality(InputExpression);
            }
            if (InputExpression.indexOf("|") > -1) {
                InputExpression = ProcessAbsoluteValue(InputExpression);
            } 
            while (InputExpression.indexOf("Log") > -1) {
                InputExpression = processlog(InputExpression);
            }
            InputExpression = replaceAll(InputExpression, 'LLL', 'LOG');

            var StartVal = document.getElementById('TableStartY2').value;
            var xStart = FindValue(StartVal);
 
            var EndVal = document.getElementById('TableEndY2').value;
            var xEnd = FindValue(EndVal);
 
            var Stepsize = document.getElementById('StepsizeY2').value;
            var xStepsize = FindValue(Stepsize);
            var text = "y = " + document.getElementById('TextBoxForCartesianGraph2').value + "<br><br>";
            text = '<span style="font-size:20px; color: red">' + text + '</span>';
            document.getElementById('TableDatatY2').innerHTML = text;
 
            for (var x = parseFloat(xStart); x <= parseFloat(xEnd); x += parseFloat(xStepsize)) {
                var temp1 = replaceAll(InputExpression, "x", "(" + x + ")");
 
                try {
 
                    y = FindValue(temp1);
                    y = Math.round(y * 1000000000000) / 1000000000000;
 
                }
                catch (err) {
                    y = NaN; //Handle errors here
                }
 
 
                if (IsNumericc(y) == false || y == null) {
                    y = NaN;
 
                }
 
                var XH = x;
 
                if (document.getElementById("TableY2Checkbox").checked) {
                    var tempp = x / Math.PI;
                    var XH = ToFraction(tempp.toString());
                    //alert("tempp = " + tempp + ".......... XH = " + XH);
 
                    var XH2 = XH.toString();
                    if (XH2.indexOf("/") > -1) {
                        XH2 = XH2.replace("/", PIsymbol + "/");
                        XH2 = XH2.replace("1" + PIsymbol, PIsymbol);
                        XH = XH2
                    }
                    else {
                        XH = XH2 + PIsymbol;
                        if (XH2 == "0") {
                            XH = 0;
                        }
                    }
 
 
                }
 
                document.getElementById('TableDatatY2').innerHTML += "x = " + XH + " , y = " + temp1 + ' = ' + y + "<br><br>";
 
 
            }
 
        }
    }

 

 
    function TableY3() {
       var PIsymbol = String.fromCharCode(960);   //PI
 
       //for Y3
        if (document.getElementById('TextBoxForCartesianGraph3').value != "") {//Y1
 
            var InputExpression = document.getElementById('TextBoxForCartesianGraph3').value;
            while (InputExpression.indexOf("nroot") > -1) {
                InputExpression = processnroot(InputExpression);
            }
            InputExpression = replaceAll(InputExpression, 'NRRR', 'NROOT');

            if (InputExpression.indexOf("{") > -1) {
                InputExpression = ProcessInequality(InputExpression);
            }
            if (InputExpression.indexOf("|") > -1) {
                InputExpression = ProcessAbsoluteValue(InputExpression);
            } 
            while (InputExpression.indexOf("Log") > -1) {
                InputExpression = processlog(InputExpression);
            }
            InputExpression = replaceAll(InputExpression, 'LLL', 'LOG');

            var StartVal = document.getElementById('TableStartY3').value;
            var xStart = FindValue(StartVal);
 
            var EndVal = document.getElementById('TableEndY3').value;
            var xEnd = FindValue(EndVal);
 
            var Stepsize = document.getElementById('StepsizeY3').value;
            var xStepsize = FindValue(Stepsize);
            var text = "y = " + document.getElementById('TextBoxForCartesianGraph3').value + "<br><br>";
            text = '<span style="font-size:20px; color: green">' + text + '</span>';
            document.getElementById('TableDatatY3').innerHTML = text;
            
 
            for (var x = parseFloat(xStart); x <= parseFloat(xEnd); x += parseFloat(xStepsize)) {
                var temp1 = replaceAll(InputExpression, "x", "(" + x + ")");
 
                try {
 
                    y = FindValue(temp1);
                    y = Math.round(y * 1000000000000) / 1000000000000;
 
                }
                catch (err) {
                    y = NaN; //Handle errors here
                }
 
 
                if (IsNumericc(y) == false || y == null) {
                    y = NaN;
 
                }
 
                var XH = x;
 
                if (document.getElementById("TableY3Checkbox").checked) {
                    var tempp = x / Math.PI;
                    var XH = ToFraction(tempp.toString());
                    //alert("tempp = " + tempp + ".......... XH = " + XH);
 
                    var XH2 = XH.toString();
                    if (XH2.indexOf("/") > -1) {
                        XH2 = XH2.replace("/", PIsymbol + "/");
                        XH2 = XH2.replace("1" + PIsymbol, PIsymbol);
                        XH = XH2
                    }
                    else {
                        XH = XH2 + PIsymbol;
                        if (XH2 == "0") {
                            XH = 0;
                        }
                    }
 
 
                }
 
                document.getElementById('TableDatatY3').innerHTML += "x = " + XH + " , y = "  + temp1 + ' = ' + y + "<br><br>";
 
 
            }
 
        }
    }

 
 

 
    function TableY4() {
       var PIsymbol = String.fromCharCode(960);   //PI
 
       //for Y4
        if (document.getElementById('TextBoxForCartesianGraph4').value != "") {//Y1
 
            var InputExpression = document.getElementById('TextBoxForCartesianGraph4').value;
            while (InputExpression.indexOf("nroot") > -1) {
                InputExpression = processnroot(InputExpression);
            }
            InputExpression = replaceAll(InputExpression, 'NRRR', 'NROOT');

            if (InputExpression.indexOf("{") > -1) {
                InputExpression = ProcessInequality(InputExpression);
            }
            if (InputExpression.indexOf("|") > -1) {
                InputExpression = ProcessAbsoluteValue(InputExpression);
            }           
            while (InputExpression.indexOf("Log") > -1) {
                InputExpression = processlog(InputExpression);
            }
            InputExpression = replaceAll(InputExpression, 'LLL', 'LOG');
            
              
            var StartVal = document.getElementById('TableStartY4').value;
            var xStart = FindValue(StartVal);
 
            var EndVal = document.getElementById('TableEndY4').value;
            var xEnd = FindValue(EndVal);
 
            var Stepsize = document.getElementById('StepsizeY4').value;
            var xStepsize = FindValue(Stepsize);
            var text = "y = " + document.getElementById('TextBoxForCartesianGraph4').value + "<br><br>";
            text = '<span style="font-size:20px; color: #df9124">' + text + '</span>';
            document.getElementById('TableDatatY4').innerHTML = text;
 

            for (var x = parseFloat(xStart); x <= parseFloat(xEnd); x += parseFloat(xStepsize)) {
                var temp1 = replaceAll(InputExpression, "x", "(" + x + ")");
 
                try {
 
                    y = FindValue(temp1);
                    y = Math.round(y * 1000000000000) / 1000000000000;
 
                }
                catch (err) {
                    y = NaN; //Handle errors here
                }
 
 
                if (IsNumericc(y) == false || y == null) {
                    y = NaN;
 
                }
 
                var XH = x;
 
                if (document.getElementById("TableY4Checkbox").checked) {
                    var tempp = x / Math.PI;
                    var XH = ToFraction(tempp.toString());
                    //alert("tempp = " + tempp + ".......... XH = " + XH);
 
                    var XH2 = XH.toString();
                    if (XH2.indexOf("/") > -1) {
                        XH2 = XH2.replace("/", PIsymbol + "/");
                        XH2 = XH2.replace("1" + PIsymbol, PIsymbol);
                        XH = XH2
                    }
                    else {
                        XH = XH2 + PIsymbol;
                        if (XH2 == "0") {
                            XH = 0;
                        }
                    }
 
 
                }
 
                document.getElementById('TableDatatY4').innerHTML += "x = " + XH + " , y = " + temp1 + ' = '  + y + "<br><br>";
            }
 
        }
    }

 

 


    function FindYYYValue(InputExpression, x1) {
        var temp1 = replaceAll(InputExpression, "x", "(" + x1 + ")");
        //alert('in FindY temp1 = ' + temp1);
        var y1 = FindValue(temp1);
        return y1;
    }



    function FindY() {

        //for Y1
        var spc = String.fromCharCode(160);
        if (document.getElementById('TextBoxForCartesianGraph1').value != "") {//Y1
            var InputExpression = document.getElementById('TextBoxForCartesianGraph1').value;
            //var InputExpression = ProcessInput(document.getElementById('TextBoxForCartesianGraph1').value);

            //alert("InputExpression1 = " + InputExpression);
            while (InputExpression.indexOf("nroot") > -1) {
                InputExpression = processnroot(InputExpression);
            }
            InputExpression = replaceAll(InputExpression, 'NRRR', 'NROOT');

            if (InputExpression.indexOf("{") > -1) {
                InputExpression = ProcessInequality(InputExpression);
            }


            if (InputExpression.indexOf("|") > -1) {
                InputExpression = ProcessAbsoluteValue(InputExpression);
            }

            while (InputExpression.indexOf("Log") > -1) {
                InputExpression = processlog(InputExpression);
            }
            InputExpression = replaceAll(InputExpression, 'LLL', 'LOG');



            if (document.getElementById('FindYforSpecificX2').value != "") {
                document.getElementById('TableDatatY1').innerHTML = '';
                var text = '<span style="font-size:24px; color:blue"> y = ' + document.getElementById('TextBoxForCartesianGraph1').value + '</span><br>'
                document.getElementById('TableDatatY1').innerHTML = text;

                var xs = document.getElementById('FindYforSpecificX2').value;
                if(xs.indexOf(',') > -1){
                    var xArray = xs.split(',');
                }
                else{
                    var xArray = new Array;
                    xArray[0] = xs;                    
                }

                var NN = xArray.length;
                for (var jj = 0; jj < NN; jj++) {
                    var x1 = FindValue(xArray[jj]);
                    var temp1 = replaceAll(InputExpression, "x", "(" + x1 + ")");
                    temp1 += ' = '; 
                    if(InputExpression == 'x'){temp1 = '';};
                    var y1 = FindYYYValue(InputExpression, x1);

                     var yFrac = '';
                     if(y1 == parseInt(y1)){
                          var yFrac = '';
                     }
                     else if (Math.abs(y1) >= 0.00000001  && Math.abs(y1) <= 100000000){
                        var yFrac = ' = ' + ToFraction(y1.toString());
                     }

                    document.getElementById('TableDatatY1').innerHTML += "x = " + xArray[jj] + " , " + spc + spc + " y = " + temp1  + y1 + yFrac + '<br><br>';
                }
             }

             
             if (document.getElementById('TraceForThisGraph').value == 'Y1' && document.getElementById("TraceON").checked == true) {
                    var x1 = FindValue(document.getElementById('FindYforSpecificX1').value);
                    var y1 = FindYYYValue(InputExpression, x1);       
                                
                    document.getElementById('Point1X').value = x1;
                    document.getElementById('Point1Y').value = y1;
                    var ttr = '';
                    if(parseFloat(y1) != parseInt(y1)){
                        ttr =  " = (" + x1 + " , " + ToFraction(y1.toString()) + ")";   
                    }

                    document.getElementById('LocationOfMouseClickX2').value = "(" + x1 + " , " + y1 + ")" + ttr;
                    //document.getElementById('LocationOfMouseClickY2').value = y1;
                }
        }


        //for Y2
        if (document.getElementById('TextBoxForCartesianGraph2').value != "") {//Y2
            var InputExpression = document.getElementById('TextBoxForCartesianGraph2').value;
            //var InputExpression = ProcessInput(document.getElementById('TextBoxForCartesianGraph2').value);
            while (InputExpression.indexOf("nroot") > -1) {
                InputExpression = processnroot(InputExpression);
            }
            InputExpression = replaceAll(InputExpression, 'NRRR', 'NROOT');

            if (InputExpression.indexOf("{") > -1) {
                InputExpression = ProcessInequality(InputExpression);
            }           
            if (InputExpression.indexOf("|") > -1) {
                InputExpression = ProcessAbsoluteValue(InputExpression);
            }
            while (InputExpression.indexOf("Log") > -1) {
                InputExpression = processlog(InputExpression);
            }
            InputExpression = replaceAll(InputExpression, 'LLL', 'LOG');

            if (document.getElementById('FindYforSpecificX3').value != "") {
                document.getElementById('TableDatatY2').innerHTML = '';
                var text = '<span style="font-size:24px; color:red"> y = ' + document.getElementById('TextBoxForCartesianGraph2').value + '</span><br>'
                document.getElementById('TableDatatY2').innerHTML = text;

                var xs = document.getElementById('FindYforSpecificX3').value;
                if(xs.indexOf(',') > -1){
                    var xArray = xs.split(',');
                }
                else{
                    var xArray = new Array;
                    xArray[0] = xs;                    
                }

                var NN = xArray.length;
                for (var jj = 0; jj < NN; jj++) {
                    var x1 = FindValue(xArray[jj]);
                    var temp1 = replaceAll(InputExpression, "x", "(" + x1 + ")");
                    temp1 += ' = '; 
                    if(InputExpression == 'x'){temp1 = '';};
                    var y1 = FindYYYValue(InputExpression, x1);
                     var yFrac = '';
                     if(y1 == parseInt(y1)){
                          var yFrac = '';
                     }
                     else if (Math.abs(y1) >= 0.00000001  && Math.abs(y1) <= 100000000){
                        var yFrac = ' = ' + ToFraction(y1.toString());
                     }

                    document.getElementById('TableDatatY2').innerHTML += "x = " + xArray[jj] + " , " + spc + spc + " y = " + temp1  + y1 + yFrac + '<br><br>';
                }
             }             

             if (document.getElementById('TraceForThisGraph').value == 'Y2' && document.getElementById("TraceON").checked == true) {
                    var x1 = FindValue(document.getElementById('FindYforSpecificX1').value);
                    var y1 = FindYYYValue(InputExpression, x1);                   
                    document.getElementById('Point1X').value = x1;
                    document.getElementById('Point1Y').value = y1;
                    var ttr = '';
                    if(parseFloat(y1) != parseInt(y1)){
                        ttr =  " = (" + x1 + " , " + ToFraction(y1.toString()) + ")";   
                    }

                    document.getElementById('LocationOfMouseClickX2').value = "(" + x1 + " , " + y1 + ")" + ttr;

                    //document.getElementById('LocationOfMouseClickX2').value = "(" + x1 + " , " + y1 + ")";
                    //document.getElementById('LocationOfMouseClickY2').value = y1;
                }
        }


        //for Y3
        if (document.getElementById('TextBoxForCartesianGraph3').value != "") {//Y3
            var InputExpression = document.getElementById('TextBoxForCartesianGraph3').value;
            //var InputExpression = ProcessInput(document.getElementById('TextBoxForCartesianGraph3').value);
            while (InputExpression.indexOf("nroot") > -1) {
                InputExpression = processnroot(InputExpression);
            }
            InputExpression = replaceAll(InputExpression, 'NRRR', 'NROOT');

            if (InputExpression.indexOf("{") > -1) {
                InputExpression = ProcessInequality(InputExpression);
            }
            if (InputExpression.indexOf("|") > -1) {
                InputExpression = ProcessAbsoluteValue(InputExpression);
            }
            while (InputExpression.indexOf("Log") > -1) {
                InputExpression = processlog(InputExpression);
            }
            InputExpression = replaceAll(InputExpression, 'LLL', 'LOG');

            if (document.getElementById('FindYforSpecificX4').value != "") {
                document.getElementById('TableDatatY3').innerHTML = '';
                var text = '<span style="font-size:24px; color:#2d8310"> y = ' + document.getElementById('TextBoxForCartesianGraph3').value + '</span><br>'
                document.getElementById('TableDatatY3').innerHTML = text;

                var xs = document.getElementById('FindYforSpecificX4').value;
                if(xs.indexOf(',') > -1){
                    var xArray = xs.split(',');
                }
                else{
                    var xArray = new Array;
                    xArray[0] = xs;                    
                }

                var NN = xArray.length;
                for (var jj = 0; jj < NN; jj++) {
                    var x1 = FindValue(xArray[jj]);
                    var temp1 = replaceAll(InputExpression, "x", "(" + x1 + ")");
                    temp1 += ' = '; 
                    if(InputExpression == 'x'){temp1 = '';};
                    var y1 = FindYYYValue(InputExpression, x1);
                     var yFrac = '';
                     if(y1 == parseInt(y1)){
                          var yFrac = '';
                     }
                     else if (Math.abs(y1) >= 0.00000001  && Math.abs(y1) <= 100000000){
                        var yFrac = ' = ' + ToFraction(y1.toString());
                     }
                    document.getElementById('TableDatatY3').innerHTML += "x = " + xArray[jj] + " , " + spc + spc + " y = " + temp1  + y1 + yFrac + '<br><br>';
                }
             }             

             if (document.getElementById('TraceForThisGraph').value == 'Y3' && document.getElementById("TraceON").checked == true) {
                    var x1 = FindValue(document.getElementById('FindYforSpecificX1').value);
                    var y1 = FindYYYValue(InputExpression, x1);                   
                    document.getElementById('Point1X').value = x1;
                    document.getElementById('Point1Y').value = y1;
                    var ttr = '';
                    if(parseFloat(y1) != parseInt(y1)){
                        ttr =  " = (" + x1 + " , " + ToFraction(y1.toString()) + ")";   
                    }

                    document.getElementById('LocationOfMouseClickX2').value = "(" + x1 + " , " + y1 + ")" + ttr;
                    //document.getElementById('LocationOfMouseClickX2').value = "(" + x1 + " , " + y1 + ")";
                    //document.getElementById('LocationOfMouseClickY2').value = y1;
                }
        }


        //for Y4
        if (document.getElementById('TextBoxForCartesianGraph4').value != "") {//Y4
            var InputExpression = document.getElementById('TextBoxForCartesianGraph4').value;
            //var InputExpression = ProcessInput(document.getElementById('TextBoxForCartesianGraph4').value);
            while (InputExpression.indexOf("nroot") > -1) {
                InputExpression = processnroot(InputExpression);
            }
            InputExpression = replaceAll(InputExpression, 'NRRR', 'NROOT');

            if (InputExpression.indexOf("{") > -1) {
                InputExpression = ProcessInequality(InputExpression);
            }
            if (InputExpression.indexOf("|") > -1) {
                InputExpression = ProcessAbsoluteValue(InputExpression);
            }
            while (InputExpression.indexOf("Log") > -1) {
                InputExpression = processlog(InputExpression);
            }
            InputExpression = replaceAll(InputExpression, 'LLL', 'LOG');

            if (document.getElementById('FindYforSpecificX5').value != "") {
                document.getElementById('TableDatatY4').innerHTML = '';
                var text = '<span style="font-size:24px; color:#df9124"> y = ' + document.getElementById('TextBoxForCartesianGraph4').value + '</span><br>'
                document.getElementById('TableDatatY4').innerHTML = text;

                var xs = document.getElementById('FindYforSpecificX5').value;
                if(xs.indexOf(',') > -1){
                    var xArray = xs.split(',');
                }
                else{
                    var xArray = new Array;
                    xArray[0] = xs;                    
                }

                var NN = xArray.length;
                for (var jj = 0; jj < NN; jj++) {
                    var x1 = FindValue(xArray[jj]);
                    var temp1 = replaceAll(InputExpression, "x", "(" + x1 + ")");
                    temp1 += ' = '; 
                    if(InputExpression == 'x'){temp1 = '';};
                    var y1 = FindYYYValue(InputExpression, x1);
                     var yFrac = '';
                     if(y1 == parseInt(y1)){
                          var yFrac = '';
                     }
                     else if (Math.abs(y1) >= 0.00000001  && Math.abs(y1) <= 100000000){
                        var yFrac = ' = ' + ToFraction(y1.toString());
                     }
                    document.getElementById('TableDatatY4').innerHTML += "x = " + xArray[jj] + " , " + spc + spc + " y = " + temp1  + y1 + yFrac + '<br><br>';
                }
             }         
             
        }
             if (document.getElementById('TraceForThisGraph').value == 'Y4' && document.getElementById("TraceON").checked == true) {
                    var x1 = FindValue(document.getElementById('FindYforSpecificX1').value);
                    var y1 = FindYYYValue(InputExpression, x1);                   
                    document.getElementById('Point1X').value = x1;
                    document.getElementById('Point1Y').value = y1;
                    var ttr = '';
                    if(parseFloat(y1) != parseInt(y1)){
                        ttr =  " = (" + x1 + " , " + ToFraction(y1.toString()) + ")";   
                    }

                    document.getElementById('LocationOfMouseClickX2').value = "(" + x1 + " , " + y1 + ")" + ttr;
                    //document.getElementById('LocationOfMouseClickX2').value = "(" + x1 + " , " + y1 + ")";
                    //document.getElementById('LocationOfMouseClickY2').value = y1;
                }
    }



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
 
 

    function Ellipse() {

        var symbol = "ellipse( ; ; ; )";
        var ListFuncOps = ['TextBoxForCartesianGraph1', 'TextBoxForCartesianGraph2', 'TextBoxForCartesianGraph3', 'TextBoxForCartesianGraph4'];
        var FocusID = document.getElementById('CurrentFocusID').value;

        for (indx = 0; indx < ListFuncOps.length; indx++) {
            if (FocusID == ListFuncOps[indx]) {
                insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, -7, 0);
                break;
            }
        }

        return;
    }

    function HyperbolaXY() {

        var symbol = "hyperbolaXY( ; ; ; )";
        var ListFuncOps = ['TextBoxForCartesianGraph1', 'TextBoxForCartesianGraph2', 'TextBoxForCartesianGraph3', 'TextBoxForCartesianGraph4'];
        var FocusID = document.getElementById('CurrentFocusID').value;

        for (indx = 0; indx < ListFuncOps.length; indx++) {
            if (FocusID == ListFuncOps[indx]) {
                insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, -7, 0);
                break;
            }
        }

        return;

    }


    function HyperbolaYX() {
        var symbol = "hyperbolaYX( ; ; ; )";
        var ListFuncOps = ['TextBoxForCartesianGraph1', 'TextBoxForCartesianGraph2', 'TextBoxForCartesianGraph3', 'TextBoxForCartesianGraph4'];
        var FocusID = document.getElementById('CurrentFocusID').value;

        for (indx = 0; indx < ListFuncOps.length; indx++) {
            if (FocusID == ListFuncOps[indx]) {
                insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, -7, 0);
                break;
            }
        }

        return;

    }



    function Circle() {
        var symbol = "circle( ;  ; )";
        var ListFuncOps = ['TextBoxForCartesianGraph1', 'TextBoxForCartesianGraph2', 'TextBoxForCartesianGraph3', 'TextBoxForCartesianGraph4'];
        var FocusID = document.getElementById('CurrentFocusID').value;

        for (indx = 0; indx < ListFuncOps.length; indx++) {
            if (FocusID == ListFuncOps[indx]) {
                insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, -7, 0);
                break;
            }
        }

        return;

    }


    function normalpdfinput() {
        var symbol = "normalpdf(;)";
        var ListFuncOps = ['TextBoxForCartesianGraph1', 'TextBoxForCartesianGraph2', 'TextBoxForCartesianGraph3', 'TextBoxForCartesianGraph4'];
        var FocusID = document.getElementById('CurrentFocusID').value;

        for (indx = 0; indx < ListFuncOps.length; indx++) {
            if (FocusID == ListFuncOps[indx]) {
                insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, -2, 0);
                break;
            }
        }

        return;

    }

    function normalcdfinput() {
        var symbol = "normalcdf(;)";
        var ListFuncOps = ['TextBoxForCartesianGraph1', 'TextBoxForCartesianGraph2', 'TextBoxForCartesianGraph3', 'TextBoxForCartesianGraph4'];
        var FocusID = document.getElementById('CurrentFocusID').value;

        for (indx = 0; indx < ListFuncOps.length; indx++) {
            if (FocusID == ListFuncOps[indx]) {
                insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, -2, 0);
                break;
            }
        }

        return;

    }


    function tdistpdfinput() {
        var symbol = "tdistpdf()";
        var ListFuncOps = ['TextBoxForCartesianGraph1', 'TextBoxForCartesianGraph2', 'TextBoxForCartesianGraph3', 'TextBoxForCartesianGraph4'];
        var FocusID = document.getElementById('CurrentFocusID').value;

        for (indx = 0; indx < ListFuncOps.length; indx++) {
            if (FocusID == ListFuncOps[indx]) {
                insertAtCaret(document.getElementById(FocusID), symbol, -1, 0, -1, 0);
                break;
            }
        }

        return;

    }


    function tdistcdfinput() {
        var symbol = "tdistcdf()";
        var ListFuncOps = ['TextBoxForCartesianGraph1', 'TextBoxForCartesianGraph2', 'TextBoxForCartesianGraph3', 'TextBoxForCartesianGraph4'];
        var FocusID = document.getElementById('CurrentFocusID').value;

        for (indx = 0; indx < ListFuncOps.length; indx++) {
            if (FocusID == ListFuncOps[indx]) {
                insertAtCaret(document.getElementById(FocusID), symbol, -1, 0, -1, 0);
                break;
            }
        }

        return;

    }


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

            var lowerbound = FindValue(document.getElementById('xMinParameter').value); ; //mean - 5 * sigma;
            var upperbound = FindValue(document.getElementById('xMaxParameter').value); ; //mean + 5 * sigma;

            // alert("DF = " + DF);

            var stepsize = (upperbound - lowerbound) / npoints;

            var xdata = "";
            var ydata = "";

            var xh = lowerbound;
            var MaxY = 0.0;

            for (var i = 0; i < npoints; i++) {
                xh = lowerbound + i * stepsize;
                //alert("xh = " + xh);

                yh = tDistCDF(DF, xh);

                //alert("yh = " + yh);
                if (MaxY < yh) { MaxY = yh };


                xdata += xh + ",";
                ydata += yh + ",";

                //document.write("i = " + i + "..............xh = " + xh + "................ yh = " + yh + "<br>");

            }
        }




        xdata = xdata.substring(0, xdata.length - 1);
        ydata = ydata.substring(0, ydata.length - 1);


        if (graphtype == "Y1") {
            document.getElementById('GraphY1').value = xdata + " ;;; " + ydata;
        }
        else if (graphtype == "Y2") {
            document.getElementById('GraphY2').value = xdata + " ;;; " + ydata;
        }
        else if (graphtype == "Y3") {
            document.getElementById('GraphY3').value = xdata + " ;;; " + ydata;
        }
        else if (graphtype == "Y4") {
            document.getElementById('GraphY4').value = xdata + " ;;; " + ydata;
        }

    }




    function getDataConic(Expression, npoints, graphtype, conictype) {

        //alert("hello conic npoints = " + npoints);
        var xdata = "";
        var ydata = "";

        if (conictype == "ellipse") {
            Expression = Expression.replace("ellipse", "");
            Expression = Expression.replace("(", "");
            Expression = Expression.replace(")", "");
            ExpressionTemp = Expression.split(";");
            ExpressionTemp[0] = ExpressionTemp[0].replace("ellipse(", "");
            ExpressionTemp[3] = ExpressionTemp[3].replace(")", "");

            var h = parseFloat(ExpressionTemp[0]);
            var k = parseFloat(ExpressionTemp[1]);
            var a = parseFloat(ExpressionTemp[2]);
            var b = parseFloat(ExpressionTemp[3]);

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


        else if (conictype == 'hyperbolaXY') {
            Expression = Expression.replace("hyperbolaXY", "");
            Expression = Expression.replace("(", "");
            Expression = Expression.replace(")", "");
            ExpressionTemp = Expression.split(";");
            ExpressionTemp[0] = ExpressionTemp[0].replace("hyperbolaXY(", "");
            ExpressionTemp[3] = ExpressionTemp[3].replace(")", "");

            var h = parseFloat(ExpressionTemp[0]);
            var k = parseFloat(ExpressionTemp[1]);
            var a = parseFloat(ExpressionTemp[2]);
            var b = parseFloat(ExpressionTemp[3]);

            //alert("hello getDatahyperbolaXY h = " + h + "......k = " + k + "...... a = " + a + "......b = " + b);

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

        else if (conictype == 'hyperbolaYX') {
            Expression = Expression.replace("hyperbolaYX", "");
            Expression = Expression.replace("(", "");
            Expression = Expression.replace(")", "");
            ExpressionTemp = Expression.split(";");
            ExpressionTemp[0] = ExpressionTemp[0].replace("hyperbolaYX(", "");
            ExpressionTemp[3] = ExpressionTemp[3].replace(")", "");

            var h = parseFloat(ExpressionTemp[0]);
            var k = parseFloat(ExpressionTemp[1]);
            var a = parseFloat(ExpressionTemp[2]);
            var b = parseFloat(ExpressionTemp[3]);

            //alert("hello getDatahyperbolaYX h = " + h + "......k = " + k + "...... a = " + a + "......b = " + b);

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





    function GenerateCartesianData(InputExpression, npoints1, xRmin, xh1, DataStorageBox) {
        var x1;
        var y1;
        var xdata = "";
        var ydata = "";
        var temp1;

        for (var i = 0; i <= npoints1; i++) {
            var x1 = (xRmin + i * xh1);

            var LL = x1.toString();
            if (LL.indexOf("e")) {
                LL = ToDecimal(LL);
            }

            temp1 = replaceAll(InputExpression, "x", "(" + x1 + ")");

            try {
                y1 = FindValue(temp1);
            }
            catch (err) {
                y1 = NaN; //Handle errors here
            }

            if (IsNumericc(y1) == false || y1 == null) {
                y1 = NaN;
            }

            xdata += x1 + ",";
            ydata += y1 + ",";
        }

        xdata = xdata.substring(0, xdata.length - 1);
        ydata = ydata.substring(0, ydata.length - 1);
        document.getElementById(DataStorageBox).value = xdata + " ;;; " + ydata;
        return;
    }


    function GenerateCartesianData2(InputExpression, npoints1, yRmin, yh1, DataStorageBox) {
 
        var x1 = 0.0;
        var y1 = 0.0;
        var xdata = "";
        var ydata = "";
        var temp1 = 0.0;

        for (var i = 0; i <= npoints1; i++) {
            y1 = yRmin + i * yh1;
            var LL = y1.toString();
            if (LL.indexOf("e")) {
                LL = ToDecimal(LL);
            }

            temp1 = replaceAll(InputExpression, "x", "(" + y1 + ")");

            try {
                x1 = FindValue(temp1);
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





    //generate data for graph of polar equation
    function PolarGraphData(InputExpression, DataStorageBoxID, IframeID, NameOfEquation, npoints1) {
        var Tmax = FindValue(document.getElementById("PolarTmax").value);
        var Tmin = FindValue(document.getElementById("PolarTmin").value);
        var Tstepsize = FindValue(document.getElementById("PolarTstepsize").value);
        var thetasymbol = String.fromCharCode(952);   //theta   
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
/**
        if (document.getElementById("TraceOFF").checked == true) {
            //var ifrm = document.getElementById(IframeID);
            //ifrm = (ifrm.contentWindow) ? ifrm.contentWindow : (ifrm.contentDocument.document) ? ifrm.contentDocument.document : ifrm.contentDocument;
            //ifrm.document.open();
            //ifrm.document.write(NameOfEquation);
            //ifrm.document.write('<br><br>');

            for (var i = Tmin; i <= Tmax; i += Tstepsize) {
                var LL = i.toString();
                if (LL.indexOf("e")) {
                    LL = ToDecimal(LL);
                }

                temp1 = replaceAll(InputExpression, thetasymbol, "(" + i + ")");

                try {
                    r1 = FindValue(temp1);
                    x1 = r1 * Math.cos(i);
                    y1 = r1 * Math.sin(i);

                }
                catch (err) {
                    x1 = NaN; //Handle errors here
                    y1 = NaN;
                }

                if (IsNumericc(x1) == false || x1 == null) {
                    x1 = NaN;
                    y1 = NaN;
                }

                i = Math.round(i * 10000000000) / 10000000000;
                x1 = Math.round(x1 * 10000000000) / 10000000000;
                y1 = Math.round(y1 * 10000000000) / 10000000000;
                //ifrm.document.write('t = ' + i + ", r = " + r1 + '.......Rectangular Coordinates: x = rcos(t) = ' + x1 + ' , y = rsin(t) = ' + y1 + "<br><br>");
            }

            //ifrm.document.close();
        }
**/

            
            var ii = document.getElementById('mydropdownpolar').value;
            if (document.getElementById("TracePolarCheckbox").checked &&  ii>0) {
 
 /**
                if (document.getElementById('TraceForThisGraph').value == 'R1') {
                    var InputExpression = document.getElementById("PolarEquation1").value;
                }
                else if (document.getElementById('TraceForThisGraph').value == 'R2') {
                    var InputExpression = document.getElementById("PolarEquation2").value;
                }
                else if (document.getElementById('TraceForThisGraph').value == 'R3') {
                    var InputExpression = document.getElementById("PolarEquation3").value;
                }
                else if (document.getElementById('TraceForThisGraph').value == 'R4') {
                    var InputExpression = document.getElementById("PolarEquation4").value;
                }
**/

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

                document.getElementById('Point1X').value = x1;
                document.getElementById('Point1Y').value = y1;
                document.getElementById('LocationOfMouseClickX2').value = thetasymbol + ' = ' + LL + ' ; r = ' + r1;
                document.getElementById('LocationOfMouseClickY2').value = 'x = ' + x1 + ' ; y = ' + y1;
                //document.getElementById('TracePolarBox2').value = r1;


            }        
            
            

    }



 		
		
	
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
 		
		
 		
        
		
	
    function RecordWindowSetting2(){//onmouseup	
        var xyposition = document.getElementById('LocationMouseOverChart').value;
        xyposition = xyposition.replace("(", "");
        xyposition = xyposition.replace(")", "");
 
        var indx = xyposition.indexOf(",");
        var listArray1 = xyposition.split(',');
 
        if (listArray1[0] == "") { listArray1[0] = "0" };
        if (listArray1[1] == "") { listArray1[1] = "0" };
 
        //alert("onmouseUP" + listArray1[0] + " ;;; " + listArray1[1]  );  
 
    }		
 		
	
 
 
 

 
    function RecordPosition() {
 
        var xyposition = document.getElementById('LocationMouseOverChart').value;
        xyposition = xyposition.replace("(", "");
        xyposition = xyposition.replace(")", "");
 
        var indx = xyposition.indexOf(",");
        var listArray1 = xyposition.split(',');
 
        if (listArray1[0] == "") { listArray1[0] = "0" };
        if (listArray1[1] == "") { listArray1[1] = "0" };
 
        document.getElementById('LocationOfMouseClickX').value = listArray1[0];
        document.getElementById('LocationOfMouseClickY').value = listArray1[1];
 
    }       
 
		
 		
 
 
 

 
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
 
        if (document.getElementById('ShadingCheckbox').checked) {//shading feature is "ON"
            Shading(); 
            return;
        }
 
        //alert("x1 = " + x1 + " ; " + "y1 = " + y1 + "x2 = " + x2 + " ; " + "y2 = " + y2);
 
        //var Xmin = FindValue(document.getElementById('xMinParameter').value);
        //var Xmax = FindValue(document.getElementById('xMaxParameter').value);
        //var Ymin = FindValue(document.getElementById('yMinParameter').value);
        //var Ymax = FindValue(document.getElementById('yMaxParameter').value);
 
 
        //var dxx = 540 / (Xmax - Xmin);
        //var dyy = 540 / (Ymax - Ymin);
 
        //var Dx = Math.abs(x1 - x2) * dxx;
        //var Dy = Math.abs(y1 - y2) * dyy;
 
        //alert("Dx = " + Dx + " ; " + "Dy = " + Dy );
        //alert(document.getElementById('DragStartX').value + " , " + document.getElementById('DragStartY').value + " , " + document.getElementById('DragEndX').value + " , " + document.getElementById('DragEndY').value);
 
 
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
        if (document.getElementById('ShadingCheckbox').checked && document.getElementById('MouseDownIndicator').value == 1) {
            document.getElementById('ShadingdataX').value += valX + ";";
            document.getElementById('ShadingdataY').value += valY + ";";
        }


        if (document.getElementById("TraceON").checked == true) {
            var ttpp = Math.pow(10, parseInt(document.getElementById('TraceTextbox').value));

            for (var i = 1; i <= 20; i++) {
                //var valuedropbox = document.getElementById('mydropdownCartesian'+i).value;
                var valueSelect = document.getElementById('mydropdownCartesian'+i);
                var selectedText = valueSelect.options[valueSelect.selectedIndex].text;
                if(document.getElementById('tracegraph' + i).checked == true){
                    document.getElementById('TraceON').checked = true;
                    document.getElementById('TraceOFF').checked = false;
                    InputExpression = document.getElementById('TextBoxForCartesianGraph' + i).value;
                    
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


		
 		
 		
 		
 		
 		
		
$(document).ready(function(){		
 $('input').keyup(function(e){		
  if(e.which==39)		
   $(this).closest('td').next().find('input').focus();		
  else if(e.which==37)		
   $(this).closest('td').prev().find('input').focus();		
  else if(e.which==40)		
   $(this).closest('tr').next().find('td:eq('+$(this).closest('td').index()+')').find('input').focus();		
  else if(e.which==38)		
   $(this).closest('tr').prev().find('td:eq('+$(this).closest('td').index()+')').find('input').focus();		
 		
 });		
});		
		
 		
 		
 		
		
$(document).ready(function(){		
 $('input').keydown(function(e){		
  if(e.which == 13 | e.keyCode == 13)		
    e.preventDefault();		
 });		
});		
		
 		
 		
 



 
 		
		
    function ToDeg() {		
        var symbolPI = String.fromCharCode(960);		
           		
        var s2 = document.getElementById('ScienCalculatorInput').value*180/Math.PI; 		
        document.getElementById('ScienCalculatorOutput').value = document.getElementById('ScienCalculatorInput').value + "*180/" + symbolPI + " = " + s2;		
 		
        var ifrm = document.getElementById('iframe1');
        ifrm = (ifrm.contentWindow) ? ifrm.contentWindow : (ifrm.contentDocument.document) ? ifrm.contentDocument.document : ifrm.contentDocument;
 
        ifrm.document.open();
 
        text = document.getElementById('ScienCalculatorOutput').value;
        ifrm.document.write('<span style="font-size: x-large; text-align: right">' + text + '</span><br><br>');
 
        ifrm.document.close();
 
} 		
 		
 		
 		
		
    function ToRad() {		
        var symbolPI = String.fromCharCode(960);		
                 		
        var s2 = document.getElementById('ScienCalculatorInput').value*Math.PI/180; 		
        document.getElementById('ScienCalculatorOutput').value = document.getElementById('ScienCalculatorInput').value + "*" + symbolPI + "/180 = " + s2;		
 		
        var ifrm = document.getElementById('iframe1');
        ifrm = (ifrm.contentWindow) ? ifrm.contentWindow : (ifrm.contentDocument.document) ? ifrm.contentDocument.document : ifrm.contentDocument;
 
        ifrm.document.open();
 
        text = document.getElementById('ScienCalculatorOutput').value;
        ifrm.document.write('<span style="font-size: x-large; text-align: right">' + text + '</span><br><br>');
 
        ifrm.document.close();
 		
 		
} 		
 		
 		
 		
 		
 		
 		

    function Logbasea() {
        window.open("../GraphingCalculator1/LogCalculation", "LogCalculation", "width=650,height=500");
        return;
        var symbol = 'Log' + String.fromCharCode(8336) + '(;)';
        insertAtCaret(document.getElementById('ScienCalculatorInput'), symbol, 0, 0, -2, 0);

    }       
       		
 		
 		
 		
		
    function Logbasea2() {		
        var symbol = 'Log' + String.fromCharCode(8336) + '(;)';        
        var ListFuncOps = ['TextBoxForCartesianGraph1', 'TextBoxForCartesianGraph2', 'TextBoxForCartesianGraph3', 'TextBoxForCartesianGraph4'];
        var FocusID = document.getElementById('CurrentFocusID').value;

        for (indx = 0; indx < ListFuncOps.length; indx++) {
            if (FocusID == ListFuncOps[indx]) {
                insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, -2, 0);
                break;
            }
        }

        return;
	
 		
    } 		
   		
 		
 		
 		 
 


    function ShadingMode(val) {
        //alert("hello ShadingMode");

        if (val == 0) {
            document.getElementById('ShadingCheckbox').checked = false;  //for shading mode

        }
        else if (val == 1) {
            document.getElementById('ShadingCheckbox').checked = true;  //for mode
            var text = "Reminder: When shading mode is turned on, many graphing features are disabled internally."  
            + " When shading is complete, be sure to turn off shading mode so that all graphing features can function normally. ";
            //alert(text);
        }
    }       



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
  	


 
    function FindExtremum(val) {
        if (val == 0) {
            document.getElementById('FindMaxMinIndicator').value = 0;  //for finding max
 
        }
        else if (val == 1) {
            document.getElementById('FindMaxMinIndicator').value = 1;  //for finding min
        }
 
        FindExtremumPoint();
 
    }       
 
 
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

    function rotateimage2(e) {
        var evt = window.event || e; //equalize event object
        var delta = evt.detail ? evt.detail : evt.wheelDelta;
        //delta returns +120 when wheel is scrolled up, -120 when scrolled down
        //nextslideindex=(delta<=-120)? nextslideindex+1 : nextslideindex-1 //move image index forward or back, depending on whether wheel is scrolled down or up
        //nextslideindex=(nextslideindex<0)? myimages.length-1 : (nextslideindex>myimages.length-1)? 0 : nextslideindex //wrap image index around when it goes beyond lower and upper boundaries
        //ElementCanvas.src=myimages[nextslideindex]
        //alert("kalsjdflkasdf " + delta);
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

    function rotateimage3(e) {
        var evt = window.event || e; //equalize event object
        var delta = evt.detail ? evt.detail : evt.wheelDelta;
        //delta returns +120 when wheel is scrolled up, -120 when scrolled down
        //nextslideindex=(delta<=-120)? nextslideindex+1 : nextslideindex-1 //move image index forward or back, depending on whether wheel is scrolled down or up
        //nextslideindex=(nextslideindex<0)? myimages.length-1 : (nextslideindex>myimages.length-1)? 0 : nextslideindex //wrap image index around when it goes beyond lower and upper boundaries
        //ElementCanvas.src=myimages[nextslideindex]
        //alert("kalsjdflkasdf " + delta);
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

 
 		

 
 		
 		
 		
		
        function reload() {		
            window.location.reload();		
        }		
      		
 		
 	 		
 		
 		
		
    function backspace() {		
        var StrVal = document.getElementById('TextBoxForCartesianGraph1').value;		
        document.getElementById('TextBoxForCartesianGraph1').value = StrVal.substr(0,StrVal.length-1);		
    }		
       		
 		

 
 		
		
    function AddFrac() {		
        var symbol1 = String.fromCharCode(8336);		
 		
        insertAtCaret(document.getElementById('ScienCalculatorInput'), '()/() + ()/()', 0, 0, -12, 0);		
    }		
   		
 		
 		
		
    function SubFrac() {		
        var symbol1 = String.fromCharCode(8336);		
 		
        insertAtCaret(document.getElementById('ScienCalculatorInput'), '()/() - ()/()', 0, 0, -12, 0);		
    }		
   		
 		
 		
		
    function MultiplyFrac() {		
        var symbol1 = String.fromCharCode(8729);		
 		
        insertAtCaret(document.getElementById('ScienCalculatorInput'), '()/() ' + symbol1 + ' ()/()', 0, 0, -12, 0);		
    }		
   		
 		
 		
 		
		
    function DivideFrac() {		
         var symbol1 = String.fromCharCode(247);		
 		
        insertAtCaret(document.getElementById('ScienCalculatorInput'), '[()/()] / [()/()]', 0, 0, -14, 0);		
    }		
   		
 		
 
 
 		

		
    function CommonMultiple() {		
        //document.getElementById('ScienCalculatorInput').value = "LEAST_COMMON_MULTIPLE(" + document.getElementById('ScienCalculatorInput').value + ")";		
        insertAtCaret(document.getElementById('ScienCalculatorInput'), "LCM(;)", 0, 0, -2, 0);		
    }		
  		
 		
 		
		
    function CommonFactor() {		
        insertAtCaret(document.getElementById('ScienCalculatorInput'), "GCF(;)", 0, 0, -2, 0);		
    }		
		
 		
 
    
 
 		
  		

    function ParametricExample() {
        var symbolpi = String.fromCharCode(960);
        document.getElementById('ParametricTmin').value = 0;
        document.getElementById('ParametricTmax').value = "2" + String.fromCharCode(960);
        document.getElementById('ParametricTstepsize').value = 0.1;
        document.getElementById('ParametricX1').value = "3 + 4Sin(t)";
        document.getElementById('ParametricY1').value = "2 + 4Cos(t)";

        GraphingCalculator();
    }       

 		
 		

    function PolarExample() {
        var symbolpi = String.fromCharCode(960);

        document.getElementById('PolarTmin').value = 0;
        document.getElementById('PolarTmax').value = "2" + String.fromCharCode(960);
        document.getElementById('PolarTstepsize').value = 0.1;
        document.getElementById('PolarEquation1').value = "4Sin(" + String.fromCharCode(952) + ") - 5";

        GraphingCalculator();
    }       
		
    function PolarExample2() {
        var symbolpi = String.fromCharCode(960);       
        document.getElementById("PointPolar1X").value = 2;
        document.getElementById("PointPolar1Y").value = "2" + String.fromCharCode(960);
        GraphingCalculator();
    }      		


 		
 		

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
 		
 


    function MainView() {

        document.getElementById('xMinParameter').value = "-15";
        document.getElementById('xMaxParameter').value = "15";
        document.getElementById('yMinParameter').value = "-15";
        document.getElementById('yMaxParameter').value = "15";

        GraphingCalculator();

    }


 
    function ZoomIn() {
 
        if (document.getElementById('ShadingCheckbox').checked) {//shading feature is "ON"
            return;
        }
  
        var s2 = document.getElementById('xMinParameter').value;
        var s3 = document.getElementById('xMaxParameter').value;
        var s4 = document.getElementById('yMinParameter').value;
        var s5 = document.getElementById('yMaxParameter').value;


        var ZoomFactor = 0.5;
 


        var result2 = ZoomFactor * FindValue(s2);
        var result3 = ZoomFactor * FindValue(s3);
        var result4 = ZoomFactor * FindValue(s4);
        var result5 = ZoomFactor * FindValue(s5);

        //document.getElementById('xMinParameter').value = result2;
        //document.getElementById('xMaxParameter').value = result3;

        //document.getElementById('yMinParameter').value = result4;
        //document.getElementById('yMaxParameter').value = result5;

        //GraphingCalculator();

        //return;

        //alert('s3 = ' + FindValue(s2) + '............' + 's2 = ' + s2 + ' ......' + 'result2 = ' + result2);


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
 
 		
 
 

    function ZoomOut() {
        if (document.getElementById('ShadingCheckbox').checked) {//shading feature is "ON"
            return;
        }

 
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


    function clearParametricTable() {
  

    }

    function clearVertical() {
        document.getElementById('LocationMouseOverChart').value = '';
    }


    function ClearGraphs() {
        document.getElementById('TraceON').checked = false;
        document.getElementById('TraceOFF').checked = true;
        document.getElementById('ReflectionCheckbox').checked = false;
        clearcartesianpoint();
        clearellipse();
        clearcircle();
        clearparametric();
        ClearPolarGraphs();
        ClearPolarPoint();
        //clear cartesian graphs
        for (var i = 1; i <= 20; i++) {
            document.getElementById('TextBoxForCartesianGraph'+i).value = '';
        }
        
        document.getElementById('TracePointX').value = '';
        document.getElementById('TracePointY').value = '';

        var myVarClear = setInterval(function () {
                MainView();
                draw();
                clearInterval(myVarClear);
        }, 300);

    }



    function ClearPolarGraphs() {
        for (var i = 1; i <= 20; i++) {
            document.getElementById('PolarEquation' + i).value = '';
        }
        GraphingCalculator();
    }
  
    function ClearPolarPoint() {
        for (var i = 1; i <= 20; i++) {
            document.getElementById("PointPolar" + i + "X").value = '';
            document.getElementById("PointPolar" + i + "Y").value = '';
        }
        GraphingCalculator();
    }

  
  
    function clearABC() {
        document.getElementById('DrawLinePoint1X').value = '';
        document.getElementById('DrawLinePoint1Y').value = '';
        document.getElementById('DrawLinePoint2X').value = '';
        document.getElementById('DrawLinePoint2Y').value = '';
    }

    function cleardatastorage(){
        for(i=1;i<=20;i++){
            document.getElementById('GraphY' + i).value = '';
            document.getElementById('GraphX' + i).value = '';
        }

    }

    
    function clearcircle(){
        for (var i = 1; i <= 10; i++) {
            document.getElementById("TextBoxCircleA"+i).value = '';  
            document.getElementById("TextBoxCircleB"+i).value = '';  
            document.getElementById("TextBoxCircleC"+i).value = '';  
        }

        GraphingCalculator();
    }


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
    
    function clearparametric(){
        for (var i = 1; i <= 10; i++) {
            document.getElementById('ParametricX' + i).value = '';
            document.getElementById('ParametricY' + i).value = '';
        }

        GraphingCalculator();
    }


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

    function clearBCD() {
        document.getElementById('DrawLineSlope').value = '';
        document.getElementById('DrawLinePointPoint2X').value = '';
        document.getElementById('DrawLinePointPoint2Y').value = '';

    }

    function clearCDE() {
        document.getElementById('DrawParabolaPoint1X').value = '';
        document.getElementById('DrawParabolaPoint1Y').value = '';
        document.getElementById('DrawParabolaPoint2X').value = '';
        document.getElementById('DrawParabolaPoint2Y').value = '';

    }

    function clearDEF() {
        document.getElementById('DrawParabolaBBPoint1X').value = '';
        document.getElementById('DrawParabolaBBPoint1Y').value = '';
        document.getElementById('DrawParabolaBBPoint2X').value = '';
        document.getElementById('DrawParabolaBBPoint2Y').value = '';
        document.getElementById('DrawParabolaBBPoint3X').value = '';
        document.getElementById('DrawParabolaBBPoint3Y').value = '';
    }


    function clearEFG() {
        document.getElementById('DrawCircleCenterX').value = '';
        document.getElementById('DrawCircleCenterY').value = '';
        document.getElementById('DrawCircleRadius').value = '';

    }


    function clearEFGGGG() {
        document.getElementById('DrawEllipseVal1').value = '';
        document.getElementById('DrawEllipseVal2').value = '';
        document.getElementById('DrawEllipseVal3').value = '';
        document.getElementById('DrawEllipseVal4').value = '';
    }

    function clearEFGHHH() {
        document.getElementById('DrawHyperbolaVal1').value = '';
        document.getElementById('DrawHyperbolaVal2').value = '';
        document.getElementById('DrawHyperbolaVal3').value = '';
        document.getElementById('DrawHyperbolaVal4').value = '';
    }

    function clearFGH() {
        document.getElementById('DrawTwoParralelLines1').value = '';
        document.getElementById('DrawTwoParralelLines2').value = '';
        document.getElementById('DrawTwoParralelLines3').value = '';
        document.getElementById('DrawTwoParralelLines4').value = '';
        document.getElementById('DrawTwoParralelLines5').value = '';

    }


    function clearGHI() {
        document.getElementById('DrawTwoPerpendicularLines1').value = '';
        document.getElementById('DrawTwoPerpendicularLines2').value = '';
        document.getElementById('DrawTwoPerpendicularLines3').value = '';
        document.getElementById('DrawTwoPerpendicularLines4').value = '';
        document.getElementById('DrawTwoPerpendicularLines5').value = '';
    }


    function clearrr35() {
    }


    function clearrr37() {
        for (var i = 1; i <= 20; i++) {
            document.getElementById("PointPolar"+i+"X").value = '';
            document.getElementById("PointPolar"+i+"Y").value = '';  
        }


        GraphingCalculator();
    }



    function clearrr2() {
        var symbol = '';
        var FocusID = document.getElementById('CurrentFocusID').value;
        document.getElementById(FocusID).value = '';
        return;
    }


    function Abs() {
        //document.getElementById('TextBoxForCartesianGraph1').value += "Abs(";     
        var symbol = "Abs()";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, -1, 0);
        return;
    }


    function Abs2() {
        //document.getElementById('TextBoxForCartesianGraph1').value += "Abs(";     
        var symbol = "| |";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, -1, 0);
        return;
    }



    function comma() {
        var symbol = ";";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, 0, 0);
        return;

    }


       		
 		
 		 		
 
 
 		
		
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
 		
       		
     		
 		
		
    function Example2() {		
 		
        var symbol1 = String.fromCharCode(8730);		
        var symbol2 = String.fromCharCode(160);		
        var symbol3 = String.fromCharCode(773);		
        var symbol4 = symbol1 + symbol2 + symbol3;  // square root symbol		
 		
        document.getElementById('TextBoxForCartesianGraph1').value = symbol4 + "(3x + 4) - 5";		
	    GraphingCalculator();
 		
    }		
 		
     		
 		
 		
		
    function Example3() {		
        var symbol = String.fromCharCode(178);		
        document.getElementById('TextBoxForCartesianGraph1').value = "2((5/6)x + 4/5)" + symbol + "+ 4/7";		
        GraphingCalculator();
    }		
 		
     		
 		
 		
		
    function Example4() {		
 		
        var symbol = String.fromCharCode(178);		
        document.getElementById('TextBoxForCartesianGraph1').value = "2(3.2x + 4/5)" + symbol + "- 4/7";		
	    GraphingCalculator();
    }		
 		
     		
 		
		
    function Example5() {		 		
        var symbol = String.fromCharCode(179);		
        document.getElementById('TextBoxForCartesianGraph1').value = "(3.2x + 4/5)/(x + 2)" + symbol;		
        GraphingCalculator();
    }		
 		
     		
 		
		
    function Example6() {	 		
        var symbol = String.fromCharCode(179);		
        document.getElementById('TextBoxForCartesianGraph1').value = "2Abs(3.2x + 4/5) - 6";		
	    GraphingCalculator();
    }		
 		
  		
 		

    function Reflection(x) {
        document.getElementById('ReflectionModeIndicator').value = x;
        GraphingCalculator(); 
    }       
		
 		
 
 

    function ineq1() {
        var symbol = "  {x " + String.fromCharCode(8804) + " }";
        //var ListFuncOps = ['TextBoxForCartesianGraph1', 'TextBoxForCartesianGraph2', 'TextBoxForCartesianGraph3', 'TextBoxForCartesianGraph4'];
        var FocusID = document.getElementById('CurrentFocusID').value;

        //for (indx = 0; indx < ListFuncOps.length; indx++) {
        //    if (FocusID == ListFuncOps[indx]) {
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -1,0);
        //        break;
        //    }
        //}

        return;
    }


    function ineq2() {
        var symbol = "  {x < " + " }";
        //var ListFuncOps = ['TextBoxForCartesianGraph1', 'TextBoxForCartesianGraph2', 'TextBoxForCartesianGraph3', 'TextBoxForCartesianGraph4'];
        var FocusID = document.getElementById('CurrentFocusID').value;

        //for (indx = 0; indx < ListFuncOps.length; indx++) {
        //    if (FocusID == ListFuncOps[indx]) {
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -1,0);
        //        break;
        //    }
        //}

        return;

    }


    function ineq3() {
        var symbol = "  {x " + String.fromCharCode(8805) + " }";
        //var ListFuncOps = ['TextBoxForCartesianGraph1', 'TextBoxForCartesianGraph2', 'TextBoxForCartesianGraph3', 'TextBoxForCartesianGraph4'];
        var FocusID = document.getElementById('CurrentFocusID').value;

        //for (indx = 0; indx < ListFuncOps.length; indx++) {
        //    if (FocusID == ListFuncOps[indx]) {
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -1,0);
        //        break;
        //    }
        //}

        return;
    }


    function ineq4() {
        var symbol = "  {x > " + " }";
        //var ListFuncOps = ['TextBoxForCartesianGraph1', 'TextBoxForCartesianGraph2', 'TextBoxForCartesianGraph3', 'TextBoxForCartesianGraph4'];
        var FocusID = document.getElementById('CurrentFocusID').value;

        //for (indx = 0; indx < ListFuncOps.length; indx++) {
        //    if (FocusID == ListFuncOps[indx]) {
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -1,0);
        //        break;
        //    }
        //}

        return;
    }


    function ineq5() {
        //var ListFuncOps = ['TextBoxForCartesianGraph1', 'TextBoxForCartesianGraph2', 'TextBoxForCartesianGraph3', 'TextBoxForCartesianGraph4'];
        var FocusID = document.getElementById('CurrentFocusID').value;
        var symbol = "  {x " + String.fromCharCode(8800) + " }";
        //for (indx = 0; indx < ListFuncOps.length; indx++) {
        //    if (FocusID == ListFuncOps[indx]) {
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -1,0);
        //        break;
        //    }
        //}

        return;
    }


    function ineq6() {
        var symbol = "  {x = " + " }";
        //var ListFuncOps = ['TextBoxForCartesianGraph1', 'TextBoxForCartesianGraph2', 'TextBoxForCartesianGraph3', 'TextBoxForCartesianGraph4'];
        var FocusID = document.getElementById('CurrentFocusID').value;

        //for (indx = 0; indx < ListFuncOps.length; indx++) {
        //    if (FocusID == ListFuncOps[indx]) {
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -1,0);
        //        break;
        //    }
        //}

        return;
    }


    function ineq8() {
        var symbol = " { " + String.fromCharCode(8804) + " x " + String.fromCharCode(8804) + " }";
        //var ListFuncOps = ['TextBoxForCartesianGraph1', 'TextBoxForCartesianGraph2', 'TextBoxForCartesianGraph3', 'TextBoxForCartesianGraph4'];
        var FocusID = document.getElementById('CurrentFocusID').value;

        //for (indx = 0; indx < ListFuncOps.length; indx++) {
        //    if (FocusID == ListFuncOps[indx]) {
                insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -1,0);
        //      break;
        //    }
        //}

        return;
    }


    function ineq9() {
        var symbol = " { " + String.fromCharCode(8804) + " x <  }";
        //var ListFuncOps = ['TextBoxForCartesianGraph1', 'TextBoxForCartesianGraph2', 'TextBoxForCartesianGraph3', 'TextBoxForCartesianGraph4'];
        var FocusID = document.getElementById('CurrentFocusID').value;

        //for (indx = 0; indx < ListFuncOps.length; indx++) {
        //    if (FocusID == ListFuncOps[indx]) {
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -1,0);
        //        break;
        //    }
        //}

        return;
    }


    function ineq10() {
        var symbol = " { < " + " x " + String.fromCharCode(8804) + " }";
        //var ListFuncOps = ['TextBoxForCartesianGraph1', 'TextBoxForCartesianGraph2', 'TextBoxForCartesianGraph3', 'TextBoxForCartesianGraph4'];
        var FocusID = document.getElementById('CurrentFocusID').value;

        //for (indx = 0; indx < ListFuncOps.length; indx++) {
        //    if (FocusID == ListFuncOps[indx]) {
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -1,0);
        //        break;
        //    }
        //}

        return;
    }


    function ineq11() {
        var symbol = " { < x < }"; 
        //var ListFuncOps = ['TextBoxForCartesianGraph1', 'TextBoxForCartesianGraph2', 'TextBoxForCartesianGraph3', 'TextBoxForCartesianGraph4'];
        var FocusID = document.getElementById('CurrentFocusID').value;

        //for (indx = 0; indx < ListFuncOps.length; indx++) {
        //    if (FocusID == ListFuncOps[indx]) {
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -1,0);
        //        break;
        //    }
        //}

        return;
    }


    function ineq20() {
        var symbol = " { }"; 
        //var ListFuncOps = ['TextBoxForCartesianGraph1', 'TextBoxForCartesianGraph2', 'TextBoxForCartesianGraph3', 'TextBoxForCartesianGraph4'];
        var FocusID = document.getElementById('CurrentFocusID').value;

        //for (indx = 0; indx < ListFuncOps.length; indx++) {
        //    if (FocusID == ListFuncOps[indx]) {
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -1,0);
        //        break;
        //    }
        //}

        return;
    }


    function ineq21() {
        var symbol =  "x" ;
        //var ListFuncOps = ['TextBoxForCartesianGraph1', 'TextBoxForCartesianGraph2', 'TextBoxForCartesianGraph3', 'TextBoxForCartesianGraph4'];
        var FocusID = document.getElementById('CurrentFocusID').value;

        //for (indx = 0; indx < ListFuncOps.length; indx++) {
        //    if (FocusID == ListFuncOps[indx]) {
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, 0,0);
        //        break;
        //    }
        //}

        return;
    }

    function ineq22() {
        var symbol = " " + String.fromCharCode(8804) + " ";
        //var ListFuncOps = ['TextBoxForCartesianGraph1', 'TextBoxForCartesianGraph2', 'TextBoxForCartesianGraph3', 'TextBoxForCartesianGraph4'];
        var FocusID = document.getElementById('CurrentFocusID').value;

        //for (indx = 0; indx < ListFuncOps.length; indx++) {
        //    if (FocusID == ListFuncOps[indx]) {
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, 0,0);
        //        break;
        //    }
        //}

        return;
    }



    function ineq23() {
        var symbol =  " < " ;
        //var ListFuncOps = ['TextBoxForCartesianGraph1', 'TextBoxForCartesianGraph2', 'TextBoxForCartesianGraph3', 'TextBoxForCartesianGraph4'];
        var FocusID = document.getElementById('CurrentFocusID').value;

        //for (indx = 0; indx < ListFuncOps.length; indx++) {
        //    if (FocusID == ListFuncOps[indx]) {
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -1,0);
        //        break;
        //    }
        //}

        return;
    }


    function ineq24() {
        var symbol = " " + String.fromCharCode(8805) + " " ;
        //var ListFuncOps = ['TextBoxForCartesianGraph1', 'TextBoxForCartesianGraph2', 'TextBoxForCartesianGraph3', 'TextBoxForCartesianGraph4'];
        var FocusID = document.getElementById('CurrentFocusID').value;

        //for (indx = 0; indx < ListFuncOps.length; indx++) {
        //    if (FocusID == ListFuncOps[indx]) {
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -1,0);
        //        break;
        //    }
        //}

        return;
    }

    function ineq25() {
        var symbol =  " > " ;
        //var ListFuncOps = ['TextBoxForCartesianGraph1', 'TextBoxForCartesianGraph2', 'TextBoxForCartesianGraph3', 'TextBoxForCartesianGraph4'];
        var FocusID = document.getElementById('CurrentFocusID').value;

        //for (indx = 0; indx < ListFuncOps.length; indx++) {
        //    if (FocusID == ListFuncOps[indx]) {
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -1,0);
        //        break;
        //    }
        //}

        return;
    }


    function ineq26() {
        var symbol = " " + String.fromCharCode(8800) + " ";
        //var ListFuncOps = ['TextBoxForCartesianGraph1', 'TextBoxForCartesianGraph2', 'TextBoxForCartesianGraph3', 'TextBoxForCartesianGraph4'];
        var FocusID = document.getElementById('CurrentFocusID').value;

        //for (indx = 0; indx < ListFuncOps.length; indx++) {
        //    if (FocusID == ListFuncOps[indx]) {
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0,0 ,0);
        //        break;
        //    }
        //}

        return;
    }


    function ineq27() {
        var symbol =  " = " ; 
        //var ListFuncOps = ['TextBoxForCartesianGraph1', 'TextBoxForCartesianGraph2', 'TextBoxForCartesianGraph3', 'TextBoxForCartesianGraph4'];
        var FocusID = document.getElementById('CurrentFocusID').value;

        //for (indx = 0; indx < ListFuncOps.length; indx++) {
        //    if (FocusID == ListFuncOps[indx]) {
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, 0,0);
        //        break;
        //    }
        //}

        return;
    }



    function ineq1B() {
        var symbol = "  {y " + String.fromCharCode(8804) + " }";
        //var ListFuncOps = [];
        var FocusID = document.getElementById('CurrentFocusID').value;

        //for (indx = 0; indx < ListFuncOps.length; indx++) {
        //    if (FocusID == ListFuncOps[indx]) {
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -1,0);
        //        break;
        //    }
        //}

        return;
    }


    function ineq2B() {
        var symbol = "  {y < " + " }";
        //var ListFuncOps = [];
        var FocusID = document.getElementById('CurrentFocusID').value;

        //for (indx = 0; indx < ListFuncOps.length; indx++) {
        //    if (FocusID == ListFuncOps[indx]) {
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -1,0);
        //        break;
        //    }
        //}

        return;
    }


    function ineq3B() {
        var symbol = "  {y " + String.fromCharCode(8805) + " }";
        //var ListFuncOps = [];
        var FocusID = document.getElementById('CurrentFocusID').value;

        //for (indx = 0; indx < ListFuncOps.length; indx++) {
        //    if (FocusID == ListFuncOps[indx]) {
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -1,0);
        //        break;
        //    }
        //}

        return;
    }


    function ineq4B() {
        var symbol = "  {y > " + " }";
        //var ListFuncOps = [];
        var FocusID = document.getElementById('CurrentFocusID').value;

        //for (indx = 0; indx < ListFuncOps.length; indx++) {
        //    if (FocusID == ListFuncOps[indx]) {
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -1,0);
        //        break;
        //    }
        //}

        return;
    }


    function ineq5B() {
        var symbol = "  {y " + String.fromCharCode(8800) + " }";
        //var ListFuncOps = [];
        var FocusID = document.getElementById('CurrentFocusID').value;

        //for (indx = 0; indx < ListFuncOps.length; indx++) {
        //    if (FocusID == ListFuncOps[indx]) {
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -1,0);
        //        break;
        //    }
        //}

        return;
    }


    function ineq6B() {
        var symbol = "  {y = " + " }";
        //var ListFuncOps = [];
        var FocusID = document.getElementById('CurrentFocusID').value;

        //for (indx = 0; indx < ListFuncOps.length; indx++) {
        //    if (FocusID == ListFuncOps[indx]) {
        insertAtCaret(document.getElementById(FocusID), symbol,0, 0, -1,0);
        //        break;
        //    }
        //}

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

    function ConicExample1() {
        //alert('kkkkkkk');
        document.getElementById('TextBoxCircleA1').value = "x - 4";
        //document.getElementById('TextBoxconicA').value = "+";
        document.getElementById('TextBoxCircleB1').value = "y - 3";
        document.getElementById('TextBoxCircleC1').value = "9";


        GraphingCalculator();
    }

    function ConicExample2() {
        document.getElementById('TextBoxconicAAA1').value = "x - 4";
        document.getElementById('TextBoxconicEEE1').value = "25";
        document.getElementById('TextBoxconicBBB1').value = "+";
        document.getElementById('TextBoxconicCCC1').value = "y + 3";
        document.getElementById('TextBoxconicDDD1').value = "16";
        document.getElementById('TextBoxconicFFF1').value = "1";

        GraphingCalculator();
    }

    


    function tableCreateY1234(xdata, ydata,TableName, flag1,color,EquName,columnName) {          
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

    }
 
    function Example33nn(){
        //document.getElementById('mydropdownlimit').value = 1;
        document.getElementById('LimitFunction').value  = 'x² + 2';
        document.getElementById("TextBoxForCartesianGraph1").value = document.getElementById('LimitFunction').value;
        document.getElementById('limitvalue1').value = '0';
        document.getElementById('limitvalue2').value = '4';
        document.getElementById('limitvalue3').value = '4';
        FindArea();
    }

    function Example34(){
        ClearGraphs();
        document.getElementById('LimitFunction').value = '3x - 5';
        document.getElementById('limitvalue').value = '2';
        document.getElementById('limitstepsizevalue').value='0.1';
        document.getElementById('Locationofx').value='3';
        document.getElementById('xMinParameter').value = '-1.25';
        document.getElementById('xMaxParameter').value = 6.25;
        document.getElementById('yMinParameter').value = '-2.5';
        document.getElementById('yMaxParameter').value = 5;

        limitmove('1');
    }

    function Example35(){
        ClearGraphs();
        document.getElementById('LimitFunction').value = '0.3x²+1';
        document.getElementById('limitvalue').value = '2';
        document.getElementById('limitstepsizevalue').value='0.1';
        document.getElementById('Locationofx').value='1';
        document.getElementById('xMinParameter').value = '-2.5';
        document.getElementById('xMaxParameter').value = 5;
        document.getElementById('yMinParameter').value = '-2.5';
        document.getElementById('yMaxParameter').value = 5;

        limitmove('2');
    }

 

    function Example36(){
        ClearGraphs();
        document.getElementById('LimitFunction').value = '√ ̅(2x + 1)';
        document.getElementById('limitvalue').value = '4';
        document.getElementById('limitstepsizevalue').value='0.1';
        document.getElementById('Locationofx').value='5';
        document.getElementById('xMinParameter').value = '-2.5';
        document.getElementById('xMaxParameter').value = 12.5;
        document.getElementById('yMinParameter').value = '-5';
        document.getElementById('yMaxParameter').value = 10;

        limitmove('1');
    }

        function Example37(){
            ClearGraphs();
        document.getElementById('LimitFunction').value = '4/(x + 2)';
        document.getElementById('limitvalue').value = '-2';
        document.getElementById('limitstepsizevalue').value='0.1';
        document.getElementById('Locationofx').value='-3';
        document.getElementById('xMinParameter').value = '-10';
        document.getElementById('xMaxParameter').value = 5;
        document.getElementById('yMinParameter').value = '-7.5';
        document.getElementById('yMaxParameter').value = 7.5;

        limitmove('2');
    }

        function Example38(){
        ClearGraphs();
        document.getElementById('LimitFunction').value = '|x|/x';
        document.getElementById('limitvalue').value = '0';
        document.getElementById('limitstepsizevalue').value='0.1';
        document.getElementById('Locationofx').value='1';
        document.getElementById('xMinParameter').value = '-2';
        document.getElementById('xMaxParameter').value = 2;
        document.getElementById('yMinParameter').value = '-2';
        document.getElementById('yMaxParameter').value = 2;

        limitmove('1');
    }

    function limitmove(casenum) {
        var stepsize = document.getElementById('limitstepsizevalue').value;
        var LocationOfx = document.getElementById('Locationofx').value;
        document.getElementById('Point17X').value = document.getElementById('limitvalue').value;
        document.getElementById('Point17Y').value = 0;

        if (LocationOfx.trim() == '' || isNaN(LocationOfx)) {
            if (casenum == '1') {
                document.getElementById('Locationofx').value = parseFloat(document.getElementById('limitvalue').value) + 1;
            }
            else if (casenum == '2') {
                document.getElementById('Locationofx').value = parseFloat(document.getElementById('limitvalue').value) - 1;
            }
        }
        else {
            if (casenum == '1') {
                var tt = Math.round((parseFloat(LocationOfx) - parseFloat(stepsize)) * 100000000000) / 100000000000;
            }
            else{
                var tt = Math.round((parseFloat(LocationOfx) + parseFloat(stepsize)) * 100000000000) / 100000000000;
            }

            document.getElementById('Locationofx').value = tt;
        }


        document.getElementById('Point19X').value = document.getElementById('Locationofx').value;
        document.getElementById('Point19Y').value = 0;

        document.getElementById('checkboxCartesianPoints').checked = true;
        document.getElementById("pointsizeS").checked = true;
        var InputExpression = document.getElementById('LimitFunction').value;
        document.getElementById('TextBoxForCartesianGraph20').value = document.getElementById('LimitFunction').value;
        while (InputExpression.indexOf("nroot") > -1) {
            InputExpression = processnroot(InputExpression);
        }
        InputExpression = replaceAll(InputExpression, 'NRRR', 'NROOT');

        if (InputExpression.indexOf("{") > -1) {
            InputExpression = ProcessInequality(InputExpression);
        }
        if (InputExpression.indexOf("|") > -1) {
            InputExpression = ProcessAbsoluteValue(InputExpression);
        }
        while (InputExpression.indexOf("Log") > -1) {
            InputExpression = processlog(InputExpression);
        }
        InputExpression = replaceAll(InputExpression, 'LLL', 'LOG');

        /////////////////////////////////////////////////////////////////////////
        ////////evaluate function at limit value f(limit value)   ///////////////
        /////////////////////////////////////////////////////////////////////////
        var limval = document.getElementById('limitvalue').value;
        var x = parseFloat(limval);
        var temp1 = replaceAll(InputExpression, "x", "(" + x.toString() + ")");
        var y = FindValue(temp1);
        if (IsNumericc(y) == false || y == null) {
            y = NaN;
        }
        y = Math.round(y * 1000000000000) / 1000000000000;

        document.getElementById('Point20X').value = x;
        document.getElementById('Point20Y').value = y;

        if (isNaN(y)) {
            document.getElementById('Point20X').value = '';
            document.getElementById('Point20Y').value = '';
        }

        //x approaching c
        var x = document.getElementById('Locationofx').value;
        var temp1 = replaceAll(InputExpression, "x", "(" + x.toString() + ")");
        var y = FindValue(temp1);
        y = Math.round(y * 1000000000000) / 1000000000000;
        document.getElementById('Point18X').value = document.getElementById('Locationofx').value;
        document.getElementById('Point18Y').value = y;
        GraphingCalculator();
        document.getElementById('LocationOfMouseClickX2').value = 'x = ' + x + ' ; f(x) = ' + y;
    }


    function clearcartesianpoint() {
        
        for (var i = 1; i <= 20; i++) {//alert('d45546444 = ' + i);
            document.getElementById("Point"+i+"X").value = '';
            document.getElementById("Point"+i+"Y").value = ''; 
 
        }

        //GraphingCalculator();
    }





    function FindArea() {
        //alert('d44444 = ');
        //clearcartesianpoint();
        document.getElementById('panellimit').style.height = '800px';
        
        //alert('d45546444 = ');
        var PIsymbol = String.fromCharCode(960);   //PI
        var delta = String.fromCharCode(916); 

        var ii = 1;//document.getElementById('mydropdownlimit').value;
        //var InputExpression = document.getElementById("TextBoxForCartesianGraph" + ii).value;        
        var InputExpression = document.getElementById('LimitFunction').value;
        var RightSideEquation = InputExpression;
     
        document.getElementById('TextBoxForCartesianGraph1').value = document.getElementById('LimitFunction').value;


        if (InputExpression == "") {
            alert('Please input function f(x).');
            return;
        }
        //alert('d44444 = ');
 
        if (InputExpression.indexOf("{") > -1) {
            InputExpression = ProcessInequality(InputExpression);
        }
        if (InputExpression.indexOf("|") > -1) {
            InputExpression = ProcessAbsoluteValue(InputExpression);
        }
 
        var aa = document.getElementById('limitvalue1').value;
        var bb = document.getElementById('limitvalue2').value;
        var nn = document.getElementById('limitvalue3').value;


        var colorTable = 'blue';//graphcolor(selectedgraph);//graphcolor(i) 
        document.getElementById('TableDataLimitY1').style.borderColor = colorTable;
        document.getElementById('TableDataLimitY1B').style.borderColor = colorTable;
        document.getElementById('leftsidelimit').innerHTML = '';
        document.getElementById('rightsidelimit').innerHTML = '';

        aa = FindValue(aa);
        bb = FindValue(bb);
        nn = FindValue(nn);

        var deltaX = (bb - aa) / nn;
        var data1 = '';
        var data2 = '';
        var data3 = '';
        var data4 = '';
        var dataWidth = '';

        //alert('deltaX = ' + deltaX);
        //Approximation Method
        if (document.getElementById('rectangletype1').checked){
            var casenum = 1;
        }
        else if (document.getElementById('rectangletype2').checked){
            var casenum = 2;
        }
        else if (document.getElementById('rectangletype3').checked){
            var casenum = 3;
        }
        else if (document.getElementById('rectangletype4').checked){
            var casenum = 4;
        }
        else if (document.getElementById('rectangletype5').checked){
            var casenum = 5;
        }

        if (document.getElementById('rectangletype6').checked){
            var casenum = 6;
            var RS = document.getElementById('RiemannSum').value;
            var RSdata = RS.split(',');
            nn = RSdata.length-1;
            aa = RSdata[0];
            bb = RSdata[nn];
            var aaaa = RSdata[0];
          
            
        }
                        

        document.getElementById('TableDataLimitY1').innerHTML = 'Table of Areas of Rectangles:<br>';
        var text = '';
        var SumArea = 0;
        var text33 = '';
        var nn1 = 1;
        var nn2 = 1000;
        var text44 = ''; 
        var text55 = ''; 
        var text66 = ''; 

        if (nn > 3000 && casenum < 6) {
            document.getElementById('datastoretable').value = '';
            FindAreabb(nn, SumArea, casenum, nn1, nn2, deltaX, aa, InputExpression, data1, data2, data3, data4,delta);
            return;
        }

        for (var i = 1; i <= nn; i++){
            if (document.getElementById('rectangletype6').checked) {
                var tt1 = parseFloat(FindValue(RSdata[i]));
                var tt2 =  parseFloat(FindValue(RSdata[i-1]));
                deltaX = tt1 - tt2 ;//RSdata[i] - RSdata[i - 1];
                var leftval = tt2;//RSdata[i - 1];
                var rightval = tt1;//RSdata[i];
            }
            else {
                var leftval = aa + (i - 1) * deltaX;
                var rightval = aa + i * deltaX;
            }

            var leftval22 = Math.round(leftval*1000000000000)/1000000000000;
            if (i <= 20) {
                text33 = text33 + 'x<sub>' + (i - 1) + '</sub> = ' + leftval22 + ' , ';
            }

            deltaX = Math.round(deltaX * 10000000000) / 10000000000;
            leftval = Math.round(leftval * 10000000000) / 10000000000;
            rightval = Math.round(rightval * 10000000000) / 10000000000;


            var temp1 = replaceAll(InputExpression, "x", "(" + leftval.toString() + ")");
            var fleft = FindValue(temp1);
            
            var temp1 = replaceAll(InputExpression, "x", "(" + rightval.toString() + ")");
            var fright = FindValue(temp1);

            fleft = Math.round(fleft * 10000000000) / 10000000000;
            fright = Math.round(fright * 10000000000) / 10000000000;

            var ss = '';
           //case 1: Estimate area with inscribed rectangles
            if (casenum == 1) {
                data1 = data1 + ';' + leftval;
                data2 = data2 + ';' + rightval;
                data3 = data3 + ';' + Math.min(fleft, fright);
                data4 = data4 + ';' + Math.min(fleft, fright);
                if(fleft <= fright){
                    var tt = leftval;
                }
                else{
                    var tt = rightval;
                }
                var height = Math.min(fleft, fright);
                var Area = height * deltaX;
                SumArea += Area;
                var text = text + '<tr>'
                   + '<td>'
                   + 'Rectangle ' + i
                   + '</td>'
                   + '<td>'
                   + 'width = ' + delta + 'x<sub>' + i + '</sub> = x<sub>' + i + '</sub>  &ndash; ' + 'x<sub>' + (i - 1) + '</sub> = ' + rightval + '  &ndash; (' + leftval + ')=' + deltaX
                   + '</td>'
                   + '<td>'
                   + 'height = f(' + tt + ') = ' + height
                   + '</td>'
                   + '<td>'
                   + 'Area  = (' + height + ')(' + deltaX + ')=' + Math.round(Area*1000000000000)/1000000000000
                   + '</td>'
                   + '</tr>';

                if (nn <= 10) {
                    document.getElementById('Point' + i + 'X').value = tt;
                    document.getElementById('Point' + i + 'Y').value = height;
                    //draw();
                }
            }
            else if (casenum == 2) {
                //case 2: Estimate area with circumscribed rectangles
                data1 = data1 + ';' + leftval;
                data2 = data2 + ';' + rightval;
                data3 = data3 + ';' + Math.max(fleft, fright);
                data4 = data4 + ';' + Math.max(fleft, fright);
                if(fleft >= fright){
                    var tt = leftval;
                }
                else{
                    var tt = rightval;
                }
                var height = Math.max(fleft, fright);
                var Area = height * deltaX;
                SumArea += Area;
                var text = text + '<tr>'
                   + '<td>'
                   + 'Rectangle ' + i
                   + '</td>'
                   + '<td>'
                   + 'width = ' + delta + 'x<sub>' + i + '</sub> = x<sub>' + i + '</sub>  &ndash; ' + 'x<sub>' + (i - 1) + '</sub> = ' + rightval + '  &ndash; (' + leftval + ')=' + deltaX
                   + '</td>'
                   + '<td>'
                   + 'height = f(' + tt + ') = ' + height
                   + '</td>'
                   + '<td>'
                   + 'Area  = (' + height + ')(' + deltaX + ')=' + Math.round(Area*1000000000000)/1000000000000;
                   + '</td>'
                   + '</tr>';

                if (nn <= 10) {
                    document.getElementById('Point' + i + 'X').value = tt;
                    document.getElementById('Point' + i + 'Y').value = height;
                    //draw();
                }

            }            
            else if (casenum == 3) {
                //case 3: Estimate area with left endpoints                
                data1 = data1 + ';' + leftval;
                data2 = data2 + ';' + rightval;
                data3 = data3 + ';' + fleft;
                data4 = data4 + ';' + fleft;
                var tt = leftval;
                var height = fleft;
                var Area = height * deltaX;
                SumArea += Area;
                var text = text + '<tr>'
                   + '<td>'
                   + 'Rectangle ' + i
                   + '</td>'
                   + '<td>'
                   + 'width = ' + delta + 'x<sub>' + i + '</sub> = x<sub>' + i + '</sub>  &ndash; ' + 'x<sub>' + (i - 1) + '</sub> = ' + rightval + '  &ndash; (' + leftval + ')=' + deltaX
                   + '</td>'
                   + '<td>'
                   + 'height = f(' + tt + ') = ' + height
                   + '</td>'
                   + '<td>'
                   + 'Area  = (' + height + ')(' + deltaX + ')=' + Math.round(Area*1000000000000)/1000000000000
                   + '</td>'
                   + '</tr>';

                if (nn <= 10) {
                    document.getElementById('Point' + i + 'X').value = tt;
                    document.getElementById('Point' + i + 'Y').value = height;
                    //draw();
                }

            }              
            else if (casenum == 4) {
                //case 4: Estimate area with right endpoints                
                data1 = data1 + ';' + leftval;
                data2 = data2 + ';' + rightval;
                data3 = data3 + ';' + fright;
                data4 = data4 + ';' + fright;
                var tt = rightval;
                var height = fright;
                var Area = height * deltaX;
                SumArea += Area;
                var text = text + '<tr>'
                   + '<td>'
                   + 'Rectangle ' + i
                   + '</td>'
                   + '<td>'
                   + 'width = ' + delta + 'x<sub>' + i + '</sub> = x<sub>' + i + '</sub>  &ndash; ' + 'x<sub>' + (i - 1) + '</sub> = ' + rightval + '  &ndash; (' + leftval + ')=' + deltaX
                   + '</td>'
                   + '<td>'
                   + 'height = f(' + tt + ') = ' + height
                   + '</td>'
                   + '<td>'
                   + 'Area  = (' + height + ')(' + deltaX + ')=' + Math.round(Area*1000000000000)/1000000000000
                   + '</td>'
                   + '</tr>';

                if (nn <= 10) {
                    document.getElementById('Point' + i + 'X').value = tt;
                    document.getElementById('Point' + i + 'Y').value = height;
                    //draw();
                }
            }  
            else if (casenum == 5) {
                //case 5: Estimate area with midpoints        
                tt = (leftval + rightval) / 2;
                var temp1 = replaceAll(InputExpression, "x", "(" + tt.toString() + ")");
                var height = FindValue(temp1);
                 
                data1 = data1 + ';' + leftval;
                data2 = data2 + ';' + rightval;
                data3 = data3 + ';' + height;
                data4 = data4 + ';' + height;
                var Area = height * deltaX;
                SumArea += Area;

                tt = Math.round(tt*1000000000000)/1000000000000;
                height = Math.round(height*1000000000000)/1000000000000;
                var text = text + '<tr>'
                   + '<td>'
                   + 'Rectangle ' + i
                   + '</td>'
                   + '<td>'
                   + 'width = ' + delta + 'x<sub>' + i + '</sub> = x<sub>' + i + '</sub>  &ndash; ' + 'x<sub>' + (i - 1) + '</sub> = ' + rightval + '  &ndash; (' + leftval + ')=' + deltaX
                   + '</td>'
                   + '<td>'
                   + 'height = f(' + tt + ') = ' + height
                   + '</td>'
                   + '<td>'
                   + 'Area  = (' + height + ')(' + deltaX + ')=' + Math.round(Area*1000000000000)/1000000000000
                   + '</td>'
                   + '</tr>';



                   var text44 = text44 + '<tr>'
                   + '<td>'
                   + 'Rectangle ' + i
                   + '</td>'
                   + '<td>'
                   + 't<sub>' + i + '</sub> = ' + tt
                   + '</td>'
                   + '<td>'
                   + 'f(' + tt + ') = ' + height
                   + '</td>'
                   + '</tr>';


                if (nn <= 10) {
                    document.getElementById('Point' + i + 'X').value = tt;
                    document.getElementById('Point' + i + 'Y').value = height;
                    //draw();
                }
                
                ss = 't<sub>' + i + '</sub> = ' + tt + '&nbsp;'


            }                          
            else if (casenum == 6) {
                //case 6: Estimate area with right endpoints; 
               if (document.getElementById('rectangletype4').checked){
                                              data1 = data1 + ';' + leftval;
                                              data2 = data2 + ';' + rightval;
                                              data3 = data3 + ';' + fright;
                                              data4 = data4 + ';' + fright;
                                             var tt = rightval;
                                             var height = fright;
                                             var Area = height * deltaX;
                                             SumArea += Area;
               }

                                        //case 6: Estimate area with left endpoints                
               if (document.getElementById('rectangletype3').checked){
                 data1 = data1 + ';' + leftval;
                 data2 = data2 + ';' + rightval;
                 data3 = data3 + ';' + fleft;
                 data4 = data4 + ';' + fleft;
                 var tt = leftval;
                 var height = fleft;
                 var Area = height * deltaX;
                 SumArea += Area;
               }

                var text = text + '<tr>'
                   + '<td>'
                   + 'Rectangle ' + i
                   + '</td>'
                   + '<td>'
                   + 'width = ' + delta + 'x<sub>' + i + '</sub> = x<sub>' + i + '</sub>  &ndash; ' + 'x<sub>' + (i - 1) + '</sub> = ' + rightval + '  &ndash; (' + leftval + ')=' + deltaX
                   + '</td>'
                   + '<td>'
                   + 'height = f(' + tt + ') = ' + height
                   + '</td>'
                   + '<td>'
                   + 'Area  = (' + height + ')(' + deltaX + ')=' + Math.round(Area*1000000000000)/1000000000000
                   + '</td>'
                   + '</tr>';

                   var text55 = text55 + '<tr>'
                   + '<td>'
                   + 'Rectangle ' + i
                   + '</td>'
                   + '<td>'
                   + 'height = f(' + tt + ') = ' + height
                   + '</td>'
                   + '<td>(x = ' + tt + ' , y = ' +  height + ')</tr>'
                   + '</tr>';

                   var text66 = text66 + '<tr>'
                   + '<td>'
                   + 'Rectangle ' + i
                   + '</td>'
                   + '<td>'
                   + 'Area  = (' + height + ')(' + deltaX + ')=' + Math.round(Area*1000000000000)/1000000000000
                   + '</td>'
                   + '</tr>';

                if (nn <= 10) {
                    document.getElementById('Point' + i + 'X').value = tt;
                    document.getElementById('Point' + i + 'Y').value = height;
                    //draw();
                }
            }  

            var dataWidth = dataWidth + ';' + deltaX;
         }



if (casenum == 5) {
   if(nn <= 20){
      text33 = text33 + 'x<sub>' + nn + '</sub> = ' + bb;
   }
   if(nn > 20){
      text33 = text33 + '...<br>' + 'x<sub>' + nn + '</sub> = ' + bb;
   }


}
         
if (casenum == 6) {
   text33 = text33 + 'x<sub>' + nn + '</sub> = ' + bb;
}


//-------------generates data for drawing shaded area-------------------------------
var nnnn = 200;
var dddeltaX = (parseFloat(bb) - parseFloat(aa)) / nnnn;
var dddata1 = '';
var dddata2 = '';
var dddata3 = '';
var dddata4 = '';
//alert('aa = ' + aa );
//aa = 0;  //bb = 4;
//alert('aa22 = ' + aa );
if (document.getElementById('rectangletype6').checked){
    aa = aaaa;    
}

for (var i = 1; i <= 200; i++){
    //if(i==50){alert('1aa2332 = ' + aa )};
    //if(i==100){alert('2aa2332 = ' + aa )};
    //if(i==150){alert('3aa2332 = ' + aa )};

    var leftval = parseFloat(aa) + (i - 1) * dddeltaX;
    var rightval = parseFloat(aa) + i * dddeltaX;
         
    tt = (leftval + rightval) / 2;
    var temp1 = replaceAll(InputExpression, "x", "(" + tt + ")");
    var height = FindValue(temp1);
        
    dddata1 = dddata1 + ';' + leftval;
    dddata2 = dddata2 + ';' + rightval;
    dddata3 = dddata3 + ';' + height;
    dddata4 = dddata4 + ';' + height;
 }

 document.getElementById('datastore2').value = dddata1 + ';;;' + dddata2 + ';;;' + dddata3 + ';;;' + dddata4;
//alert('set 1: ' + dddata1);
//alert('set 2: ' + dddata2);
//alert('set 3: ' + dddata3);
//alert('set 4: ' + dddata4);


//-==============================

        document.getElementById('TableDataLimitY1C').innerHTML = '&Delta;x = (b - a)/n = ' + deltaX + '<br><br>';
        text33 = text33;
        document.getElementById('TableDataLimitY1C').innerHTML += replaceAll(text33, ',', '<br>');
        document.getElementById('TableDataLimitY1C').innerHTML += '<br><br>Sum of Areas of Rectangles44 = ' + Math.round(SumArea*1000000000000)/1000000000000  + '<br><br><br><br><br><br><br><br><br><br>';

        document.getElementById('TableDataLimitY1C').innerHTML += '<br><br>Sum of Areas of Rectangles = ' + Math.round(SumArea*1000000000000)/1000000000000 

        document.getElementById('SumAreas11').value = nn;
        document.getElementById('SumAreas44').innerHTML = 'i = 1';
        document.getElementById('SumResult11').innerHTML = Math.round(SumArea*100000000)/100000000;
        document.getElementById('TableDataLimitY1').innerHTML +='<table border="1" style="white-space: nowrap">' + text44 + '<table>';   


        document.getElementById('TableDataLimitY1').innerHTML +='<br><br><br>Rectangle Widths<br><table id="table11" border="1" style="white-space: nowrap">' + text + '<table>';

        var table = document.getElementById("table11"); 
        var totalRows = document.getElementById("table11").rows.length;
        var totalCol = 3; // enter the number of columns in the table minus 1 (first column is 0 not 1)
        //To display all values

        var hh = '';
        for (var x = 0; x <= 4; x++){
            hh = hh + '<br><br><br><br><br>f(x) = ' + InputExpression + '<br>';
            for (var y = 0; y <= totalCol; y++){
                hh = hh + table.rows[x].cells[y].innerHTML + '<br>';
            }
        }
        document.getElementById('TableDataLimitY1').innerHTML += hh+ '<br><br><br><br><br><br>';


        //To display a single cell value enter in the row number and column number under rows and cells below:
        //var firstCell = table.rows[0].cells[0].innerHTML;
        //alert(firstCell);
        //Note:  if you use <th> this will be row 0, so your data will start at row 1 col 0




        document.getElementById('TableDataLimitY1').innerHTML +='<br><br><br>Rectangle Heights<br><table border="1" style="white-space: nowrap">' + text55 + '<table>';
        document.getElementById('TableDataLimitY1').innerHTML +='<br><br><br>Rectangle Areas<br><table border="1" style="white-space: nowrap">' + text66 + '<table><br><br><br><br><br><br>';



        document.getElementById('SumAreas').innerHTML = 'Sum of Areas of Rectangles = ' + Math.round(SumArea*1000000000000)/1000000000000
                +'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(sum of values in last column)';

        //document.getElementById('sumofareas').innerHTML = 'n = number of subintervals/rectangles = ' + nn;

	document.getElementById('sumofareas').innerHTML = '<br><br><br><br><br><br><br>Number of Rectangles = ' + nn;

        document.getElementById('sumofareas').innerHTML += '<br>Sum of Areas of Rectangles = ' + Math.round(SumArea*1000000000000)/1000000000000;
        document.getElementById('functionexpression').innerHTML = 'f(x) = ' + document.getElementById('LimitFunction').value;
//
        //if(document.getElementById('shadingAreacheckbox').checked){
        //    document.getElementById('sumofareas').innerHTML = 'Shaded Area = ' + Math.round(SumArea*1000000000000)/1000000000000;
        //}
        //else{
            //document.getElementById('sumofareas').innerHTML = 'Sum of Areas of Rectangles<br>' + Math.round(SumArea*1000000000000)/1000000000000;
        //}



        data1 = data1.substring(1);
        data2 = data2.substring(1);
        data3 = data3.substring(1);
        data4 = data4.substring(1);
        dataWidth = dataWidth.substring(1);

       
        document.getElementById('datastore').value = data1 + ';;;' + data2 + ';;;' + data3 + ';;;' + data4;
      
        GraphingCalculator();
        var TableName = 'TableDataLimitY1';
   
        // tableCreateLimit(dataWidth, data4, colorTable, TableName, xi, fxi);
 
        
        
        return;
    }


    function FindAreabb(nn,SumArea, casenum, nn1, nn2, deltaX, aa, InputExpression, data1, data2, data3, data4,  delta){
        //alert('in myvar nn1 = ' + nn1 + '.....nn2 = ' + nn2 + '.....SumArea = ' + SumArea);
        //alert('in myvar data5 = ' + data5);
        var ttt = '';
        var text33 = '';
        var myvar = setInterval(function () {
            for (var i = nn1; i <= nn2; i++) {
                var leftval = aa + (i - 1) * deltaX;
                var rightval = aa + i * deltaX;
                var leftval22 = Math.round(leftval * 1000000000000) / 1000000000000;

                deltaX = Math.round(deltaX * 10000000000) / 10000000000;
                leftval = Math.round(leftval * 10000000000) / 10000000000;
                rightval = Math.round(rightval * 10000000000) / 10000000000;

                if (nn1 < 1000 && i <= 7) {
                    text33 = text33 + 'x<sub>' + (i - 1) + '</sub> = ' + leftval22 + ' , ';
                }

                if (nn1 < 1000 && i == 7) {
                    document.getElementById('TableDataLimitY1C').innerHTML = '(b - a)/n = ' + deltaX + '<br>'  + text33 + ' ....'
                }

                var temp1 = replaceAll(InputExpression, "x", "(" + leftval.toString() + ")");
                var fleft = FindValue(temp1);

                var temp1 = replaceAll(InputExpression, "x", "(" + rightval.toString() + ")");
                var fright = FindValue(temp1);

                fleft = Math.round(fleft * 10000000000) / 10000000000;
                fright = Math.round(fright * 10000000000) / 10000000000;

                //case 1: Estimate area with inscribed rectangles
                if (casenum == 1) {
                    data1 = data1 + ';' + leftval;
                    data2 = data2 + ';' + rightval;
                    data3 = data3 + ';' + Math.min(fleft, fright);
                    data4 = data4 + ';' + Math.min(fleft, fright);
                    if (fleft <= fright) {
                        var tt = leftval;
                    }
                    else {
                        var tt = rightval;
                    }
                    var height = Math.min(fleft, fright);
                    var Area = height * deltaX;
                    Area = Math.round(Area * 1000000000000) / 1000000000000;
                    SumArea += Area;
                }
                else if (casenum == 2) {
                    //case 2: Estimate area with circumscribed rectangles
                    data1 = data1 + ';' + leftval;
                    data2 = data2 + ';' + rightval;
                    data3 = data3 + ';' + Math.max(fleft, fright);
                    data4 = data4 + ';' + Math.max(fleft, fright);
                    if (fleft >= fright) {
                        var tt = leftval;
                    }
                    else {
                        var tt = rightval;
                    }
                    var height = Math.max(fleft, fright);
                    var Area = height * deltaX;
                    Area = Math.round(Area * 1000000000000) / 1000000000000;
                    SumArea += Area;
                }
                else if (casenum == 3) {
                    //case 3: Estimate area with left endpoints                
                    data1 = data1 + ';' + leftval;
                    data2 = data2 + ';' + rightval;
                    data3 = data3 + ';' + fleft;
                    data4 = data4 + ';' + fleft;
                    var tt = leftval;
                    var height = fleft;
                    var Area = height * deltaX;
                    Area = Math.round(Area * 1000000000000) / 1000000000000;
                    SumArea += Area;
                }
                else if (casenum == 4) {
                    //case 4: Estimate area with right endpoints                
                    data1 = data1 + ';' + leftval;
                    data2 = data2 + ';' + rightval;
                    data3 = data3 + ';' + fright;
                    data4 = data4 + ';' + fright;
                    var tt = rightval;
                    var height = fright;
                    var Area = height * deltaX;
                    Area = Math.round(Area * 1000000000000) / 1000000000000;
                    SumArea += Area;
                }
                else if (casenum == 5) {
                    //case 5: Estimate area with midpoints        
                    var val = (fleft + fright) / 2;
                    data1 = data1 + ';' + leftval;
                    data2 = data2 + ';' + rightval;
                    data3 = data3 + ';' + val;
                    data4 = data4 + ';' + val;
                    var height = val;
                    tt = (leftval + rightval) / 2;
                    var Area = height * deltaX;
                    SumArea += Area;
                    Area = Math.round(Area * 1000000000000) / 1000000000000;
                }

                if (i <= 500) {
                        ttt = ttt
                           + '<tr>'
                           + '<td>' + 'Rectangle ' + i + '</td>'
                           + '<td>' + 'width = ' + delta + 'x<sub>' + i + '</sub> = x<sub>' + i + '</sub>-' + 'x<sub>' + (i - 1) + '</sub> = ' + rightval + '-(' + leftval + ')=' + deltaX + '</td>'
                           + '<td>' + 'height = f(' + tt + ') = ' + height + '</td>'
                           + '<td>' + 'Area  = (' + height + ')(' + deltaX + ')=' + Area + '</td>'
                           + '</tr>';
                 }
                else if (i == 1001 || i==1002 || i==1003) {
                        ttt = ttt
                           + '<tr>'
                           + '<td>' + ' ... ' + '</td>'
                           + '<td>' + ' ... ' + '</td>'
                           + '<td>' + ' ... ' + '</td>'
                           + '<td>' + ' ... ' + '</td>'
                           + '</tr>';
                 }
                 else if (Math.abs(nn - i) <= 3) {
                        ttt = ttt
                           + '<tr>'
                           + '<td>' + 'Rectangle ' + i + '</td>'
                           + '<td>' + 'width = ' + delta + 'x<sub>' + i + '</sub> = x<sub>' + i + '</sub>-' + 'x<sub>' + (i - 1) + '</sub> = ' + rightval + '-(' + leftval + ')=' + deltaX + '</td>'
                           + '<td>' + 'height = f(' + tt + ') = ' + height + '</td>'
                           + '<td>' + 'Area  = (' + height + ')(' + deltaX + ')=' + Area + '</td>'
                           + '</tr>';
                 }




            }  //for loop ends


            if (nn2 < nn) {
                document.getElementById('datastoretable').value += ttt;
                clearInterval(myvar);
                //alert('data5 = ' + document.getElementById('datastoretable').value);
                nn1 = nn2 + 1;
                nn2 = nn2 + 1000;
                if (nn2 > nn) {
                    nn2 = nn;
                }

                document.getElementById('SumAreasMsg').innerHTML = 'Program is running ..............count = ' + nn2;
                if (Math.abs(nn - nn2) <= 1000) {
                    document.getElementById('SumAreasMsg').innerHTML = 'Program is about to complete all calculations.';
                }

                FindAreabb(nn, SumArea, casenum, nn1, nn2, deltaX, aa, InputExpression, data1, data2, data3, data4, delta);
            }

            if (nn2 == nn) {

                document.getElementById('SumAreasMsg').innerHTML = '';
                document.getElementById('datastoretable').value += ttt;
                var hhh = document.getElementById('datastoretable').value;
                //alert('in nn2 == nn');
                clearInterval(myvar);
                document.getElementById('SumAreas11').value = nn;
                document.getElementById('SumAreas44').innerHTML = 'i = 1';
                document.getElementById('SumAreas33b').innerHTML = 'f(x<sub>i</sub>)Δx<sub>i</sub>  = ' + Math.round(SumArea * 1000000000000) / 1000000000000;
                document.getElementById('TableDataLimitY1').innerHTML = '<table border="1" style="white-space: nowrap">' + hhh + '<table>';
                document.getElementById('SumAreas').innerHTML = 'Shaded Area  = Sum of Areas = ' + Math.round(SumArea * 1000000000000) / 1000000000000
                + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(sum of values in last column.)';

               //document.getElementById('sumofareas').innerHTML = 'Sum of Areas of Rectangles <br>' + Math.round(SumArea*1000000000000)/1000000000000;
	       document.getElementById('sumofareas').innerHTML ='';
                data1 = data1.substring(1);
                data2 = data2.substring(1);
                data3 = data3.substring(1);
                data4 = data4.substring(1);
                document.getElementById('datastore').value = data1 + ';;;' + data2 + ';;;' + data3 + ';;;' + data4;
                GraphingCalculator();
            }

        }, 500);
 
    }


 
    function GraphEpsDel() {
        document.getElementById('panellimit').style.height = '800px';
        var PIsymbol = String.fromCharCode(960);   //PI
        

        //identify right side of selected equation 
        //var RightSideEquation = document.getElementById('TextBoxForCartesianGraph' + selectedgraph).value;
        var InputExpression = document.getElementById('LimitFunction').value;
        document.getElementById('TextBoxForCartesianGraph1').value = InputExpression;
        if (InputExpression == "") {
            alert('Please input equation for selected graph.');
            return;
        }


        while (InputExpression.indexOf("nroot") > -1) {
            InputExpression = processnroot(InputExpression);
        }
        InputExpression = replaceAll(InputExpression, 'NRRR', 'NROOT');

        if (InputExpression.indexOf("{") > -1) {
            InputExpression = ProcessInequality(InputExpression);
        }
        if (InputExpression.indexOf("|") > -1) {
            InputExpression = ProcessAbsoluteValue(InputExpression);
        }
        while (InputExpression.indexOf("Log") > -1) {
            InputExpression = processlog(InputExpression);
        }
        InputExpression = replaceAll(InputExpression, 'LLL', 'LOG');

        var epsilonsymbol = String.fromCharCode(949);
	    var deltasymbol = String.fromCharCode(948);	
        var Lvalue = document.getElementById('Lvalue').value;
        var Cvalue = document.getElementById('Cvalue').value;
        var epsilon = document.getElementById('epsilonvalue').value;
        var delta = document.getElementById('deltavalue').value;
        var CminusDel = parseFloat(Cvalue) - parseFloat(delta);
        var CplusDel = parseFloat(Cvalue) + parseFloat(delta);
        var LminusEps = parseFloat(Lvalue) - parseFloat(epsilon);
        var LplusEps = parseFloat(Lvalue) + parseFloat(epsilon);


        CminusDel = Math.round(CminusDel * 10000000000) / 10000000000;
        CplusDel1 = Math.round(CplusDel * 10000000000) / 10000000000;
        LminusEps = Math.round(LminusEps * 10000000000) / 10000000000;
        LplusEps = Math.round(LplusEps * 10000000000) / 10000000000; 
        
        var text = '(c - ' + deltasymbol + ', c + ' + deltasymbol + ') = (' + CminusDel + ' , '+ CplusDel+')<br><br>';
        var text = text + '(L - ' + epsilonsymbol + ', L + ' + epsilonsymbol + ') = (' + LminusEps  + ' , '+ LplusEps +')<br><br>';
  

        document.getElementById('TableDataLimitY1').innerHTML = text;


        //find f(CminusDel)
        var temp1 = replaceAll(InputExpression, "x", "(" + CminusDel.toString() + ")");
        var y1 = FindValue(temp1);
        if (IsNumericc(y1) == false || y1 == null) {
            y1 = NaN;
        }
        y1 = Math.round(y1 * 10000000000) / 10000000000;
        y1 = ToDecimal2(y1.toString());
        var x1 = Math.round(CminusDel * 10000000000) / 10000000000;

        //alert('y1.....' + y1);

        //find f(CplusDel)
        var temp1 = replaceAll(InputExpression, "x", "(" + CplusDel.toString() + ")");
        var y2 = FindValue(temp1);
        if (IsNumericc(y2) == false || y2 == null) {
            y2 = NaN;
        }
        y2 = Math.round(y2 * 10000000000) / 10000000000;
        y2 = ToDecimal2(y2.toString());
        var x2 = Math.round(CplusDel * 10000000000) / 10000000000;
 
        var dataX = CminusDel+';'+Cvalue +';'+CplusDel +';'+CplusDel+';'+ '0' +';'+ '0' +';'+CminusDel ;
        var dataY = '0'      +';'+'0'    +';'+'0'      +';'+ y2     +';'+  y2 +';'+  y1 +';'+y1 ;

        document.getElementById('TableDataLimitY1').innerHTML += 'f(c - ' + deltasymbol + ') = ' + y1 + '<br><br>';
        document.getElementById('TableDataLimitY1').innerHTML += 'f(c + ' + deltasymbol + ') = ' + y2 + '<br><br>';


        document.getElementById('Point1X').value = CminusDel;//point1
        document.getElementById('Point1Y').value = 0;//point1
        document.getElementById('Point2X').value = Cvalue;//point2
        document.getElementById('Point2Y').value = 0;//point2
        document.getElementById('Point3X').value = CplusDel;//point3
        document.getElementById('Point3Y').value = 0;//point3
        document.getElementById('Point4X').value = CplusDel;//point4
        document.getElementById('Point4Y').value = y2;//point4
        document.getElementById('Point5X').value = 0;//point5
        document.getElementById('Point5Y').value = y2;//point5
        document.getElementById('Point6X').value = 0;//point6
        document.getElementById('Point6Y').value = y1;//point6
        document.getElementById('Point7X').value = CminusDel;//point7
        document.getElementById('Point7Y').value = y1;//point7
        document.getElementById('Point8X').value = Cvalue;//point8
        document.getElementById('Point8Y').value = Lvalue;//point8
        document.getElementById('Point9X').value = 0;//point9
        document.getElementById('Point9Y').value = Lvalue;//point9
        document.getElementById('Point10X').value = 0;//point10
        document.getElementById('Point10Y').value = LminusEps;//point10
        document.getElementById('Point11X').value = 0;//point11
        document.getElementById('Point11Y').value = LplusEps;//point11


        document.getElementById("pointsizeS").checked = true;
        document.getElementById('checkboxCartesianPoints').checked = true;
        
        GraphingCalculator();

            return;






        return;
 
 
        document.getElementById('TableDataLimitY1').style.borderColor = colorTable;
        document.getElementById('TableDataLimitY1B').style.borderColor = colorTable;

 
        
        /////////////////////////////////////////////////////////////////////////
        ////////evaluate function at limit value f(limit value)   ///////////////
        /////////////////////////////////////////////////////////////////////////

        var x = parseFloat(limval);
        var temp1 = replaceAll(InputExpression, "x", "(" + x.toString() + ")");
        var y = FindValue(temp1);
        if (IsNumericc(y) == false || y == null) {
            y = NaN;
        }
        y = Math.round(y * 100000000000000) / 100000000000000;
        y = ToDecimal2(y.toString());

        var XH = Math.round(x * 100000000000000) / 100000000000000;
        var YH = replaceAll(InputExpression, "x", "(" + XH + ")");
        document.getElementById('TableDataLimitY1C').innerHTML = "<br><br> Note: When x = " + XH + " , &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; y = f("+XH + ") =  " + y + "<br><br>";

        if(isNaN(y) == false){
            document.getElementById('Point20X').value = x;
            document.getElementById('Point20Y').value = y;
            document.getElementById('checkboxCartesianPoints').checked = true;
        }
        //alert('klasjd;fkas;dfjasdflaksdfj.....' + text);

        ///////////////////////////////////////////////////////////////
        ////////     Limit from the left               ///////////////
        //////////////////////////////////////////////////////////////

        var text = "y = " + document.getElementById('TextBoxForCartesianGraph'+ selectedgraph).value + "<br><br>";
        text = '<span style="font-size:20px; color: blue">' + text + '</span>';

        document.getElementById('TableDataLimitY1').innerHTML = text;

        text = '<span style="font-size:20px; color: blue">Approach x = ' + limval + ' from the left</span><br><br>';

        document.getElementById('TableDataLimitY1').innerHTML += text;

        var xdata = '';
        var ydata = '';

        //if limit value is zero;
        if (parseFloat(limval) == 0) {
            var xb = '';
            //Limit from the left
            for (var i = 1; i <= 14; i++) {
                xb += '0';
                if (i == 1) {
                    xb = '';
                }
                x = '-0.' + xb + '1';
                var temp1 = replaceAll(InputExpression, "x", "(" + x + ")");
                y = FindValue(temp1);

                if (isFinite(y) == false) {
                    y = 'Very Large Number';
                }

                xdata += ';' + x;
                ydata += ';' + y;

            }

            xdata = xdata.substring(1);
            ydata = ydata.substring(1);
            var TableName = 'TableDataLimitY1';
            tableCreateLimit(xdata, ydata, colorTable, TableName,RightSideEquation);
            //document.getElementById('TableDataLimitY1').innerHTML += "x = " + x + " , &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; y = " + y + "<br><br>";

        } //if limit value is > zero;
        else if (parseFloat(limval) > 0) {
            var xc = parseFloat(limval) - 1;
            var xb = '';
            //Limit from the left
            for (var i = 1; i <= 14; i++) {
                xb += '9';
                x = xc + '.' + xb;
                var temp1 = replaceAll(InputExpression, "x", "(" + x + ")");
                y = FindValue(temp1);

                if (isFinite(y) == false) {
                    y = 'Very Large Number';
                }
                xdata += ';' + x;
                ydata += ';' + y;

            }

            xdata = xdata.substring(1);
            ydata = ydata.substring(1);
            var TableName = 'TableDataLimitY1';
            tableCreateLimit(xdata, ydata, colorTable, TableName,RightSideEquation);
            //document.getElementById('TableDataLimitY1').innerHTML += "x = " + x + " , &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; y = " + y + "<br><br>";

        } //if limit value is < zero;
        else if (parseFloat(limval) < 0) {
            var xb = '';
            //Limit from the left
            for (var i = 1; i <= 14; i++) {
                xb += '0';
                if (i == 1) {
                    xb = '';
                }
                x = limval + '.' + xb + '1';
                var temp1 = replaceAll(InputExpression, "x", "(" + x + ")");
                y = FindValue(temp1);

                if (isFinite(y) == false) {
                    y = 'Very Large Number';
                }

                xdata += ';' + x;
                ydata += ';' + y;

            }

            xdata = xdata.substring(1);
            ydata = ydata.substring(1);
            var TableName = 'TableDataLimitY1';
            tableCreateLimit(xdata, ydata, colorTable, TableName,RightSideEquation);
            //document.getElementById('TableDataLimitY1').innerHTML += "x = " + x + " , &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; y = " + y + "<br><br>";

        }

        ///////////////////////////////////////////////////////////////
        ////////     Limit from the right              ///////////////
        //////////////////////////////////////////////////////////////
        var text = "y = " + document.getElementById('TextBoxForCartesianGraph'+ selectedgraph).value + "<br><br>";
        text = '<span style="font-size:20px; color: blue">' + text + '</span>';

        document.getElementById('TableDataLimitY1B').innerHTML = text;

        text = '<span style="font-size:20px; color: blue">Approach x = ' + limval + ' from the right</span><br><br>';

        document.getElementById('TableDataLimitY1B').innerHTML += text;
            
        var xdata = '';
        var ydata = '';

        //if limit value is zero;
        if (parseFloat(limval) == 0) {
            var xb = '';
            //Limit from the left
            for (var i = 1; i <= 14; i++) {
                xb += '0';
                if (i == 1) {
                    xb = '';
                }
                var x = '0.' + xb + '1';
                var temp1 = replaceAll(InputExpression, "x", "(" + x + ")");
                y = FindValue(temp1);

                if (isFinite(y) == false) {
                    y = 'Very Large Number';
                }

                xdata += ';' + x;
                ydata += ';' + y;

            }

            xdata = xdata.substring(1);
            ydata = ydata.substring(1);
            var TableName = 'TableDataLimitY1B';
            tableCreateLimit(xdata, ydata, colorTable, TableName,RightSideEquation);
            //document.getElementById('TableDataLimitY1B').innerHTML += "x = " + x + " , &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; y = " + y + "<br><br>";
            
        } //if limit value is < zero;
        else if (parseFloat(limval) < 0) {
            var xc = parseFloat(limval) + 1;
            var xb = '';
            for (var i = 1; i <= 14; i++) {
                xb += '9';
                var x = xc + '.' + xb;
                var temp1 = replaceAll(InputExpression, "x", "(" + x + ")");
                var y = FindValue(temp1);

                if (isFinite(y) == false) {
                    y = 'Very Large Number';
                }

                xdata += ';' + x;
                ydata += ';' + y;

            }

            xdata = xdata.substring(1);
            ydata = ydata.substring(1);
            var TableName = 'TableDataLimitY1B';
            tableCreateLimit(xdata, ydata, colorTable, TableName,RightSideEquation);
            //document.getElementById('TableDataLimitY1B').innerHTML += "x = " + x + " , &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; y = " + y + "<br><br>";

        } //if limit value is > zero;
        else if (parseFloat(limval) > 0) {
            var xb = '';
            //Limit from the left
            for (var i = 1; i <= 14; i++) {
                xb += '0';
                if (i == 1) {
                    xb = '';
                }
                x = limval + '.' + xb + '1';
                var temp1 = replaceAll(InputExpression, "x", "(" + x + ")");
                y = FindValue(temp1);
                y = ToDecimal2(y.toString());

                if (isFinite(y) == false) {
                    y = 'Very Large Number';
                }

                xdata += ';' + x;
                ydata += ';' + y;

            }
            xdata = xdata.substring(1);
            ydata = ydata.substring(1);
            var TableName = 'TableDataLimitY1B';
            tableCreateLimit(xdata, ydata, colorTable, TableName,RightSideEquation);
            //document.getElementById('TableDataLimitY1B').innerHTML += "x = " + x + " , &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; y = " + y + "<br><br>";

        }

        GraphingCalculator();
        return;
    }

  
    function tableCreateLimit(dataWidth, dataHeight, color, TableName, xi){
        var space = String.fromCharCode(160);   //space
        var delta = String.fromCharCode(916); 
        var space2 = space + space;
        var body = document.body,
        tbl = document.createElement('table');
        tbl.style.width = '100%';
        tbl.style.border = "1px; solid; black;";
        //tbl.style.background = "cyan";
        tbl.style.color = "black";


        var width = dataWidth.split(';');
        var height = dataHeight.split(';');

        var tr = tbl.insertRow();
        tr.style.border = "solid";
        tr.style.color = "black";

        var td = tr.insertCell();
        td.style.border = "solid";
        td.style.color = color;
        td.style.borderColor = color;
        td.appendChild(document.createTextNode('ith rectangle'));

        var td = tr.insertCell();
        td.style.border = "solid";
        td.style.color = color;
        td.style.borderColor = color;
        td.appendChild(document.createTextNode('width of ith rectangle'));

        var td = tr.insertCell();
        td.style.border = "solid";
        td.style.color = color;
        td.style.borderColor = color;
        td.appendChild(document.createTextNode('<div>height of ith rectangle<sub>22</sub></div>'));

        var td = tr.insertCell();
        td.style.border = "solid";
        td.style.color = color;
        td.style.borderColor = color;
        td.appendChild(document.createTextNode('area of ith rectangle'));

        var sumArea = 0;


        for (var i = 0; i < width.length; i++) {
            var tr = tbl.insertRow();
            var td = tr.insertCell();
            td.style.border = "solid";
            td.style.borderColor = "gray";
            td.style.borderWidth = '1px';
            td.style.color = "black";
            td.appendChild(document.createTextNode('Rectangle ' + (i+1)));

            var td = tr.insertCell();
            td.style.border = "solid";
            td.style.borderColor = "gray";
            td.style.color = "black";
            td.style.borderWidth = '1px';
            td.appendChild(document.createTextNode(width[i]));

            var td = tr.insertCell();
            td.style.border = "solid";
            td.style.borderColor = "gray";
            td.style.color = "black";
            td.style.borderWidth = '1px';
            td.appendChild(document.createTextNode(height[i]));

            var area = width[i] * height[i];

            var td = tr.insertCell();
            td.style.border = "solid";
            td.style.borderColor = "gray";
            td.style.color = "black";
            td.style.borderWidth = '1px';
            td.appendChild(document.createTextNode(area));

            sumArea += area;

        }
        
        document.getElementById(TableName).innerHTML = "";
        document.getElementById(TableName).appendChild(tbl);

        document.getElementById('SumAreas').innerHTML = "Sum of areas of rectangles = " + sumArea ;
        
        //////////////////////////////////

        tbl = document.createElement('table');
        tbl.style.width = '100%';
        tbl.style.border = "1px; solid; black;";
        //tbl.style.background = "cyan";
        tbl.style.color = "black";


        var width = dataWidth.split(';');
        var height = dataHeight.split(';');

        var tr = tbl.insertRow();
        tr.style.border = "solid";
        tr.style.color = "black";

        var td = tr.insertCell();
        td.style.border = "solid";
        td.style.color = color;
        td.style.borderColor = color;
        td.appendChild(document.createTextNode('ith rectangle'));

        var td = tr.insertCell();
        td.style.border = "solid";
        td.style.color = color;
        td.style.borderColor = color;
        td.appendChild(document.createTextNode('width of ith rectangle'));

        var td = tr.insertCell();
        td.style.border = "solid";
        td.style.color = color;
        td.style.borderColor = color;
        td.appendChild(document.createTextNode('<div>height of ith rectangle<sub>22</sub></div>'));

        var td = tr.insertCell();
        td.style.border = "solid";
        td.style.color = color;
        td.style.borderColor = color;
        td.appendChild(document.createTextNode('area of ith rectangle'));

        var sumArea = 0;


        for (var i = 0; i < width.length; i++) {
            var tr = tbl.insertRow();
            var td = tr.insertCell();
            td.style.border = "solid";
            td.style.borderColor = "gray";
            td.style.borderWidth = '1px';
            td.style.color = "black";
            td.appendChild(document.createTextNode('Rectangle ' + (i+1)));

            var td = tr.insertCell();
            td.style.border = "solid";
            td.style.borderColor = "gray";
            td.style.color = "black";
            td.style.borderWidth = '1px';
            td.appendChild(document.createTextNode(width[i]));

            var td = tr.insertCell();
            td.style.border = "solid";
            td.style.borderColor = "gray";
            td.style.color = "black";
            td.style.borderWidth = '1px';
            td.appendChild(document.createTextNode(height[i]));

            var area = width[i] * height[i];

            var td = tr.insertCell();
            td.style.border = "solid";
            td.style.borderColor = "gray";
            td.style.color = "black";
            td.style.borderWidth = '1px';
            td.appendChild(document.createTextNode(area));

            sumArea += area;

        }

        var jj = 5;

        document.getElementById('TableDataLimitY1B').innerHTML = "";
        for (var i = 0; i < width.length; i++) {
            var text =
        '<table style="font-size:20px ">'
           + '<tr>'
           + '<td style="border-style:solid;border-color:gray">'
           + 'Rectangle '+i
           + '<td>'
           + '<td style="border-style:solid;border-color:gray">'
           +    'width = ' + delta + 'x<sub>' + i + '</sub> = x<sub>' + i + '</sub>-' + 'x<sub>' + (i-1) + '</sub> = ' + width[i]
           + '<td>'
           + '<td style="border-style:solid;border-color:gray">'
           + 'height = f(' + jj + ') = ' + jj
           + '<td>'
           + '<td style="border-style:solid;border-color:gray">'
           + 'Area  = (' + jj + ')(' + jj + ')=' + jj
           + '<td>'

           + '</tr>'
            '</table>';

            document.getElementById('TableDataLimitY1B').innerHTML += text;

        }




    }
      
    function TableY1234BB() {
        var PIsymbol = String.fromCharCode(960);   //PI
        var sup2 = String.fromCharCode(178);
        var pm = String.fromCharCode(177);	//plus minus
        var casenum = document.getElementById("TableOrSpecificValue").value;
        if (casenum == '2') {
            //alert('casenum33333.....' + casenum);
            var StartVal = FindValue(document.getElementById('TableStartY1234').value);
            var EndVal = FindValue(document.getElementById('TableEndY1234').value);
            var Stepsize = FindValue(document.getElementById('StepsizeY1234').value);
        }
        
/////////////////////////////////////////////////////////////////////////////////////////        


////////////////////////////////////////////////////////////////////////////

        for (var i = 1; i <= 20; i++) {
            var ydata = '';
            var TableName = "TableDataCartesian"+i;
            document.getElementById("TableDataCartesian"+i).style.width = '300px';
            var valuedropbox = document.getElementById('mydropdownCartesian'+i).value;
            var valueSelect = document.getElementById('mydropdownCartesian'+i);
            var selectedText = valueSelect.options[valueSelect.selectedIndex].text;
            var ee1 = document.getElementById('TextBoxForCartesianGraph'+i).value;
            var ee2 = document.getElementById('checkboxY'+i).checked;

            if (parseInt(valuedropbox) <= 4  || parseInt(valuedropbox) == 11) {
                var xdata = document.getElementById('FindYforSpecificX1234').value;  
            }
            else if (parseInt(valuedropbox) >= 5 && parseInt(valuedropbox) <= 10) {
                var xdata = document.getElementById('FindXforSpecificY1234').value;

            }

            if (casenum == '2') {//generates range of values for table
                    var xdata = parseFloat(StartVal);
                    for (var x = parseFloat(StartVal) + parseFloat(Stepsize); x <= parseFloat(EndVal); x += parseFloat(Stepsize)) {
                        xdata = xdata + ',' + x;
                    }
            }


            if (xdata.trim() == '') {
                return;
            }
        
            if (xdata.indexOf(',') > -1) {
                var xarray = xdata.split(',');
                var flag1 = false;
            }
            else {
                var xarray = new Array();
                xdata = xdata + ',0';
                var xarray = xdata.split(',');
                xarray.pop();
                var flag1 = true;
            }

            //alert('xarray: ' + xarray);

            var ydata;
            var xdata = xarray[0];
            for (var k = 1; k < xarray.length; k++) {
                xdata = xdata + ';' + xarray[k];
            }

            var ttt = '';

            //display x in terms of pi for equations with "y" on the left side
            if (document.getElementById("TableY1234Checkbox3").checked && parseInt(valuedropbox) <= 4) {
                for (var ii = 0; ii < xarray.length; ii++) {
                    var tempp = FindValue(xarray[ii]) / Math.PI;
                    var XH = ToFraction(tempp.toString());
                    //alert("tempp = " + tempp + ".......... XH = " + XH);
                    var XH2 = XH.toString();
                    if (XH2.indexOf("/") > -1) {
                        XH2 = XH2.replace("/", PIsymbol + "/");
                        XH2 = XH2.replace("1" + PIsymbol, PIsymbol);
                        XH = XH2
                    }
                    else {
                        XH = XH2 + PIsymbol;
                        if (XH2 == "0") {
                            XH = 0;
                        }
                    }

                    if (ii == 0) {
                        var ttt = XH2;
                    }
                    else {
                        var ttt = ttt + ';' + XH2;
                    }
                }
                xdata = ttt;
            }
            

            if (ee1 != "" && ee2 && parseInt(valuedropbox) <= 4) {
                var EquName = selectedText + ee1; 
                //for equation/inequality with "y" on the left side
                if (document.getElementById('TextBoxForCartesianGraph'+i).value != "") {
                    var InputExpression = document.getElementById('TextBoxForCartesianGraph'+i).value;
                    while (InputExpression.indexOf("nroot") > -1) {
                        InputExpression = processnroot(InputExpression);
                    }
                    InputExpression = replaceAll(InputExpression, 'NRRR', 'NROOT');

                    if (InputExpression.indexOf("{") > -1) {
                        InputExpression = ProcessInequality(InputExpression);
                    }
                    if (InputExpression.indexOf("|") > -1) {
                        InputExpression = ProcessAbsoluteValue(InputExpression);
                    }
                    while (InputExpression.indexOf("Log") > -1) {
                        InputExpression = processlog(InputExpression);
                    }
                    InputExpression = replaceAll(InputExpression, 'LLL', 'LOG');

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
                        if (document.getElementById('TableY1234Checkbox4').checked && isNaN(y) == false) {
                            y = ToFraction(y.toString());
                        }

                        if(document.getElementById('TableCartesianDetail').checked){
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
                if(document.getElementById('TableCartesianDetail').checked){
                    document.getElementById("TableDataCartesian"+i).style.width = '500px';
                }
                tableCreateY1234(xdata, ydata,TableName, flag1,graphcolor(i),EquName,columnName);
            }
            
            //for equation/inequality with "y" on the left side
            if (ee1 != "" && ee2 && (parseInt(valuedropbox) >= 5  && parseInt(valuedropbox) <= 9)) {
                var EquName = selectedText + ee1; 
               
                if (document.getElementById('TextBoxForCartesianGraph'+i).value != "") {
                    var InputExpression = document.getElementById('TextBoxForCartesianGraph'+i).value;
                    while (InputExpression.indexOf("nroot") > -1) {
                        InputExpression = processnroot(InputExpression);
                    }
                    InputExpression = replaceAll(InputExpression, 'NRRR', 'NROOT');

                    if (InputExpression.indexOf("{") > -1) {
                        InputExpression = ProcessInequality(InputExpression);
                    }
                    if (InputExpression.indexOf("|") > -1) {
                        InputExpression = ProcessAbsoluteValue(InputExpression);
                    }
                    while (InputExpression.indexOf("Log") > -1) {
                        InputExpression = processlog(InputExpression);
                    }
                    InputExpression = replaceAll(InputExpression, 'LLL', 'LOG');

                    for (var k = 0; k < xarray.length; k++) {
                        var temp1 = replaceAll(InputExpression, "y", "(" + xarray[k] + ")");
                        var temp1 = replaceAll(temp1, "x", "(" + xarray[k] + ")");
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
                        if (document.getElementById('TableY1234Checkbox4').checked && isNaN(y) == false) {
                            y = ToFraction(y.toString());
                        }
                        
                        if(document.getElementById('TableCartesianDetail').checked){
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
                if(document.getElementById('TableCartesianDetail').checked){
                    document.getElementById("TableDataCartesian"+i).style.width = '500px';
                }

                tableCreateY1234(xdata, ydata,TableName, flag1,graphcolor(i),EquName, columnName);

            }   
            
            if (ee1 != "" && ee2 && (parseInt(valuedropbox) == 10 )) {
                var EquName = 'x';//selectedText + ee1;               
                if (document.getElementById('TextBoxForCartesianGraph'+i).value != "") {
                    var InputExpression = document.getElementById('TextBoxForCartesianGraph'+i).value;
                    while (InputExpression.indexOf("nroot") > -1) {
                        InputExpression = processnroot(InputExpression);
                    }
                    InputExpression = replaceAll(InputExpression, 'NRRR', 'NROOT');

                    if (InputExpression.indexOf("{") > -1) {
                        InputExpression = ProcessInequality(InputExpression);
                    }
                    if (InputExpression.indexOf("|") > -1) {
                        InputExpression = ProcessAbsoluteValue(InputExpression);
                    }
                    while (InputExpression.indexOf("Log") > -1) {
                        InputExpression = processlog(InputExpression);
                    }
                    InputExpression = replaceAll(InputExpression, 'LLL', 'LOG');

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

                        //express y values as fractions
                        //if (document.getElementById('TableY1234Checkbox4').checked && isNaN(y) == false) {
                        //    y = ToFraction(y.toString());
                        //}
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

                tableCreateY1234(xdata, ydata,TableName, flag1,graphcolor(i),EquName, columnName);

            }   
            if (ee1 != "" && ee2 && (parseInt(valuedropbox) == 11 )) {
                var EquName = 'y';//selectedText + ee1;               
                if (document.getElementById('TextBoxForCartesianGraph'+i).value != "") {
                    var InputExpression = document.getElementById('TextBoxForCartesianGraph'+i).value;
                    while (InputExpression.indexOf("nroot") > -1) {
                        InputExpression = processnroot(InputExpression);
                    }
                    InputExpression = replaceAll(InputExpression, 'NRRR', 'NROOT');

                    if (InputExpression.indexOf("{") > -1) {
                        InputExpression = ProcessInequality(InputExpression);
                    }
                    if (InputExpression.indexOf("|") > -1) {
                        InputExpression = ProcessAbsoluteValue(InputExpression);
                    }
                    while (InputExpression.indexOf("Log") > -1) {
                        InputExpression = processlog(InputExpression);
                    }
                    InputExpression = replaceAll(InputExpression, 'LLL', 'LOG');

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
                        //if (document.getElementById('TableY1234Checkbox4').checked && isNaN(y) == false) {
                        //    y = ToFraction(y.toString());
                        //}
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

                tableCreateY1234(xdata, ydata,TableName, flag1,graphcolor(i),EquName, columnName);

            }                
            
            
                    

        }        
        //alert('xdata...' + xdata);
        return;
    }

    

    function TableY1234() {//FOR GRAPHS OF Y1, Y2, Y3, Y4
        var PIsymbol = String.fromCharCode(960);   //PI
        var StartVal = document.getElementById('TableStartY1234').value;
        var xStart = FindValue(StartVal);

        var EndVal = document.getElementById('TableEndY1234').value;
        var xEnd = FindValue(EndVal);

        var Stepsize = document.getElementById('StepsizeY1234').value;
        var xStepsize = FindValue(Stepsize);



        return;
    }

 

    function Logbasea3() {
        var symbol = ';';
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, 0, 0);
        return;
    }

    function log10b() {
        //document.getElementById('TextBoxForCartesianGraph1').value += "Log(";     
        var symbol = "Log(10; )";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, -1, 0);

        return;
    }

    function keypress(e) {
        var code = e.keyCode || e.which;
        //alert('code = ' + code);
        if (code == 47) { // `0` works in mozilla and `320 in other`
            //e.preventDefault();
            //div2();
        }

    }

    function div4() {
        //var val = document.getElementById('fractionreminder').value;
        //document.getElementById('fractionreminder').value = parseFloat(val) + 1;

        //if (parseFloat(val) <= 1) {
        //    window.open("../GraphingCalculator1/fracexample.png", "fracexample", "width=650,height=500");
        //}
        var symbol = "/";
        var FocusID = document.getElementById('CurrentFocusID').value;
        insertAtCaret(document.getElementById(FocusID), symbol, 0, 0, 0, 0);

        return;
    }

    function processlog(str) {
        alert('2222');
        var nn = str.indexOf('Log');
        var hh = '';
        for (var i = nn; i < str.length; i++) {
            var hh = hh + str.charAt(i);
            //alert('hh1111: ' + hh);
            var dd = ParentheseMatch(hh);
            //alert('dd: ' + dd);

            if (hh.indexOf('(') > -1 || hh.indexOf(')') > -1) {
                if (ParentheseMatch(hh)) {
                    if (hh.indexOf(';') > -1) {
                        var gg = hh.split(';');
                        var ff1 = 'LLL' + gg[0].replace('Log', '') + ')';
                        var ff2 = 'LLL(' + gg[1];
                        str = str.replace(hh, '(' + ff2 + '/' + ff1 + ')');
                        return str;
                    }
                    else {
                        //alert('hh: ' + hh);
                        var ff = hh.replace('Log', '');
                        str = str.replace(hh, '(LLL' + ff + '/LLL(10))');
                        return str;
                    }

                }
            }
        }

        return str;
    }

    function processnroot(str) {
        var nn = str.indexOf('nroot');
        var hh = '';
        for (var i = nn; i < str.length; i++) {
            var hh = hh + str.charAt(i);
            //alert('hh1111: ' + hh);
            var dd = ParentheseMatch(hh);
            //alert('dd: ' + dd);

            if (hh.indexOf('(') > -1 || hh.indexOf(')') > -1) {
                if (ParentheseMatch(hh)) {
                    if (hh.indexOf(';') > -1) {
                        var gg = hh.split(';');
                        var root = gg[0].replace('nroot(', '');
                        var root = 1 / parseFloat(root);
                        var exp = '((' + gg[1] + '^(' + root + '))';
                        str = str.replace(hh, exp);
                        return str;
                    }

                }
            }
        }

        return str;
    }


    function FindValue(userInput) {

        if (userInput.indexOf('e') > -1) {
            userInput = processE(userInput);
        }


        if (document.getElementById('RadianOrDegreeMode').value == 'degree mode') {
            userInput = replaceAll(userInput, "Sin", "SINDGG");
            userInput = replaceAll(userInput, "Cos", "COSDGG");
            userInput = replaceAll(userInput, "Tan", "TANDGG");
            userInput = replaceAll(userInput, "Csc", "CSCDGG");
            userInput = replaceAll(userInput, "Sec", "SINDGG");
            userInput = replaceAll(userInput, "Sin", "SINDEG");
        }

        userInput = replaceAll(userInput, "2.718281828459", "2.71828182845904523536028747"); //2.71828182845904523536028747135266249775724709369995

        //while (userInput.indexOf('Log') > -1) {
        //    alert('loggg: ' + userInput);

        //}


        userInput = userInput.replace(new RegExp(" ", 'g'), "");
        var postFix = InfixToPostfix(userInput);
        postFix = postFix.replace(new RegExp(" ", 'g'), "");
        var result = EvaluateExpression(postFix);

        //alert('userInput = ' +  userInput +'.......  result = ' +  result)
        return parseFloat(result); //result;
        //return result; //result;

    }


    function FindValue2(userInput) {
        userInput = ToDecimal(userInput);
        if (document.getElementById('RadianOrDegreeMode').value == 'degree mode') {
            userInput = replaceAll(userInput, "Sin", "SINDGG");
            userInput = replaceAll(userInput, "Cos", "COSDGG");
            userInput = replaceAll(userInput, "Tan", "TANDGG");
            userInput = replaceAll(userInput, "Csc", "CSCDGG");
            userInput = replaceAll(userInput, "Sec", "SINDGG");
            userInput = replaceAll(userInput, "Sin", "SINDEG");
        }

        userInput = userInput.replace(new RegExp(" ", 'g'), "");
        var postFix = InfixToPostfix(userInput);
        postFix = postFix.replace(new RegExp(" ", 'g'), "");
        var result = EvaluateExpression(postFix);

        //alert('userInput = ' +  userInput +'.......  result = ' +  result)
        //return parseFloat(result); //result;
        return result; //result;

    }

    function allowDrop(ev) {
        ev.preventDefault();
    }

    function drag(ev) {
        ev.dataTransfer.setData("Text", ev.target.id);
    }

    function drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("Text");
        ev.target.appendChild(document.getElementById(data));
    }
 		
 
    function CTF(num) {
        var val = document.getElementById('converttofrac' + num).value;
        var val2 = ToFraction(val);
        alert(val + ' = ' + val2);
        return;
    }

    function CTLD(num) {
        var val = document.getElementById('converttofrac' + num).value;
        val = val.trim();
        var val2 = ToDecimal2(val);
        val2 = replaceAll(val2, ' ', '');
        alert(val + ' = ' + val2);
        return;
    }







    function Initialize() {
        document.getElementById('ReflectionCheckbox').checked = false;
        document.getElementById('RotationCheckbox').checked = false;
        document.getElementById('XYInterceptCheckbox').checked = false;
        document.getElementById('IntersectionCheckbox').checked = false;
        document.getElementById('ExtremumCheckbox').checked = false;
        document.getElementById('ShadingCheckbox').checked = false;


        document.getElementById('xMinParameter').value = -15;
        document.getElementById('xMaxParameter').value = 15;
        document.getElementById('yMinParameter').value = -15;
        document.getElementById('yMaxParameter').value = 15;

        document.getElementById('RadianOrDegreeMode').value = "radian mode";
        //ShadingColor('6');

        if ("graphingquadratic" in localStorage) {
            document.getElementById('TextBoxForCartesianGraph1').value = localStorage["graphingquadratic"];
        }
        else {
            document.getElementById('TextBoxForCartesianGraph1').value = '';
        }

        GraphingCalculator();
        keyboardlayoutMain('panel2');
        //findlimit('1');
        //document.getElementById(' ').value  = ;
        //document.getElementById(' ').value  = ;
        //document.getElementById(' ').value  = ;
        //document.getElementById(' ').value  = ;
        //document.getElementById(' ').value  = ;
        //document.getElementById(' ').value  = ;
        //document.getElementById(' ').value  = ;
        //document.getElementById(' ').value  = ;
        //document.getElementById(' ').value  = ;
        //document.getElementById(' ').value  = ;
        //document.getElementById(' ').value  = ;
        //document.getElementById(' ').value  = ;
        //document.getElementById(' ').value  = ;
        //document.getElementById(' ').value  = ;
    }



    function convertEnterToTab() {
        if (event.keyCode == 13) {
            event.keyCode = 9;
        }
    }

    document.onkeydown = convertEnterToTab;

    function display(num) {
        document.getElementById('StatImage').innerHTML = "";

        document.getElementById('StatImage100').innerHTML = "";

        document.getElementById('StatImage').style.top = '10px';

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


        document.getElementById('StatImage').appendChild(img);

        return;

    }


    function display2() {
        document.getElementById('StatImage').innerHTML = "";

        document.getElementById('StatImage100').innerHTML = "";

        document.getElementById('StatImage').style.top = '1000px';

        return;

    }





    function TableLimitY1() {
        var PIsymbol = String.fromCharCode(960);   //PI
 
        //for Y1
        if (document.getElementById('TextBoxForCartesianGraph1').value != "") {//Y1
 
            var InputExpression = document.getElementById('TextBoxForCartesianGraph1').value;
            while (InputExpression.indexOf("nroot") > -1) {
                InputExpression = processnroot(InputExpression);
            }
            InputExpression = replaceAll(InputExpression, 'NRRR', 'NROOT');

            if (InputExpression.indexOf("{") > -1) {
                InputExpression = ProcessInequality(InputExpression);
            }
            if (InputExpression.indexOf("|") > -1) {
                InputExpression = ProcessAbsoluteValue(InputExpression);
            }     
            while (InputExpression.indexOf("Log") > -1) {
                InputExpression = processlog(InputExpression);
            }
            InputExpression = replaceAll(InputExpression, 'LLL', 'LOG');
                    
            //var StartVal = document.getElementById('TableStartY1').value;
            //var xStart = FindValue(StartVal);
 
            //var EndVal = document.getElementById('TableEndY1').value;
            //var xEnd = FindValue(EndVal);
 
            //var Stepsize = document.getElementById('StepsizeY1').value;
            //var xStepsize = FindValue(Stepsize);
 
             
            var text = "y = " + document.getElementById('TextBoxForCartesianGraph1').value + "<br><br>";
            text = '<span style="font-size:20px; color: blue">' + text + '</span>';

            document.getElementById('TableDatatY1').innerHTML = text;
 
            for (var x = parseFloat(xStart); x <= parseFloat(xEnd); x += parseFloat(xStepsize)) {
                var temp1 = replaceAll(InputExpression, "x", "(" + x + ")");

                 y = FindValue(temp1);
                //y = Math.round(y * 1000000000000) / 1000000000000;

                 var ydec = '';
                if(Math.abs(y)<0.000000001 || Math.abs(y)<100000000000000){
                    var ydec = ' = ' + ToDecimal(y.toString());
                }


                if (IsNumericc(y) == false || y == null) {
                    y = NaN;
                }
 
                var XH = x;
 
                if (document.getElementById("TableY1Checkbox").checked) {
                    var tempp = x / Math.PI;
                    var XH = ToFraction(tempp.toString());
                    //alert("tempp = " + tempp + ".......... XH = " + XH);
 
                    var XH2 = XH.toString();
                    if (XH2.indexOf("/") > -1) {
                        XH2 = XH2.replace("/", PIsymbol + "/");
                        XH2 = XH2.replace("1" + PIsymbol, PIsymbol);
                        XH = XH2
                    }
                    else {
                        XH = XH2 + PIsymbol;
                        if (XH2 == "0") {
                            XH = 0;
                        }
                    }
  
                }
 
                document.getElementById('TableDatatY1').innerHTML += "x = " + XH + " , &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; y = " + temp1 + ' = ' + y + ydec + "<br><br>";
 
 
            }
 
        }
    }

 

 
    function TableLimitY2() {
       var PIsymbol = String.fromCharCode(960);   //PI
 
       //for Y2
        if (document.getElementById('TextBoxForCartesianGraph2').value != "") {//Y2
 
            var InputExpression = document.getElementById('TextBoxForCartesianGraph2').value;
            while (InputExpression.indexOf("nroot") > -1) {
                InputExpression = processnroot(InputExpression);
            }
            InputExpression = replaceAll(InputExpression, 'NRRR', 'NROOT');

            if (InputExpression.indexOf("{") > -1) {
                InputExpression = ProcessInequality(InputExpression);
            }
            if (InputExpression.indexOf("|") > -1) {
                InputExpression = ProcessAbsoluteValue(InputExpression);
            } 
            while (InputExpression.indexOf("Log") > -1) {
                InputExpression = processlog(InputExpression);
            }
            InputExpression = replaceAll(InputExpression, 'LLL', 'LOG');

            var StartVal = document.getElementById('TableStartY2').value;
            var xStart = FindValue(StartVal);
 
            var EndVal = document.getElementById('TableEndY2').value;
            var xEnd = FindValue(EndVal);
 
            var Stepsize = document.getElementById('StepsizeY2').value;
            var xStepsize = FindValue(Stepsize);
            var text = "y = " + document.getElementById('TextBoxForCartesianGraph2').value + "<br><br>";
            text = '<span style="font-size:20px; color: red">' + text + '</span>';
            document.getElementById('TableDatatY2').innerHTML = text;
 
            for (var x = parseFloat(xStart); x <= parseFloat(xEnd); x += parseFloat(xStepsize)) {
                var temp1 = replaceAll(InputExpression, "x", "(" + x + ")");
 
                try {
 
                    y = FindValue(temp1);
                    y = Math.round(y * 1000000000000) / 1000000000000;
 
                }
                catch (err) {
                    y = NaN; //Handle errors here
                }
 
 
                if (IsNumericc(y) == false || y == null) {
                    y = NaN;
 
                }
 
                var XH = x;
 
                if (document.getElementById("TableY2Checkbox").checked) {
                    var tempp = x / Math.PI;
                    var XH = ToFraction(tempp.toString());
                    //alert("tempp = " + tempp + ".......... XH = " + XH);
 
                    var XH2 = XH.toString();
                    if (XH2.indexOf("/") > -1) {
                        XH2 = XH2.replace("/", PIsymbol + "/");
                        XH2 = XH2.replace("1" + PIsymbol, PIsymbol);
                        XH = XH2
                    }
                    else {
                        XH = XH2 + PIsymbol;
                        if (XH2 == "0") {
                            XH = 0;
                        }
                    }
 
 
                }
 
                document.getElementById('TableDatatY2').innerHTML += "x = " + XH + " , y = " + temp1 + ' = ' + y + "<br><br>";
 
 
            }
 
        }
    }

 

 
    function TableLimitY3() {
       var PIsymbol = String.fromCharCode(960);   //PI
 
       //for Y3
        if (document.getElementById('TextBoxForCartesianGraph3').value != "") {//Y1
 
            var InputExpression = document.getElementById('TextBoxForCartesianGraph3').value;
            while (InputExpression.indexOf("nroot") > -1) {
                InputExpression = processnroot(InputExpression);
            }
            InputExpression = replaceAll(InputExpression, 'NRRR', 'NROOT');

            if (InputExpression.indexOf("{") > -1) {
                InputExpression = ProcessInequality(InputExpression);
            }
            if (InputExpression.indexOf("|") > -1) {
                InputExpression = ProcessAbsoluteValue(InputExpression);
            } 
            while (InputExpression.indexOf("Log") > -1) {
                InputExpression = processlog(InputExpression);
            }
            InputExpression = replaceAll(InputExpression, 'LLL', 'LOG');

            var StartVal = document.getElementById('TableStartY3').value;
            var xStart = FindValue(StartVal);
 
            var EndVal = document.getElementById('TableEndY3').value;
            var xEnd = FindValue(EndVal);
 
            var Stepsize = document.getElementById('StepsizeY3').value;
            var xStepsize = FindValue(Stepsize);
            var text = "y = " + document.getElementById('TextBoxForCartesianGraph3').value + "<br><br>";
            text = '<span style="font-size:20px; color: green">' + text + '</span>';
            document.getElementById('TableDatatY3').innerHTML = text;
            
 
            for (var x = parseFloat(xStart); x <= parseFloat(xEnd); x += parseFloat(xStepsize)) {
                var temp1 = replaceAll(InputExpression, "x", "(" + x + ")");
 
                try {
 
                    y = FindValue(temp1);
                    y = Math.round(y * 1000000000000) / 1000000000000;
 
                }
                catch (err) {
                    y = NaN; //Handle errors here
                }
 
 
                if (IsNumericc(y) == false || y == null) {
                    y = NaN;
 
                }
 
                var XH = x;
 
                if (document.getElementById("TableY3Checkbox").checked) {
                    var tempp = x / Math.PI;
                    var XH = ToFraction(tempp.toString());
                    //alert("tempp = " + tempp + ".......... XH = " + XH);
 
                    var XH2 = XH.toString();
                    if (XH2.indexOf("/") > -1) {
                        XH2 = XH2.replace("/", PIsymbol + "/");
                        XH2 = XH2.replace("1" + PIsymbol, PIsymbol);
                        XH = XH2
                    }
                    else {
                        XH = XH2 + PIsymbol;
                        if (XH2 == "0") {
                            XH = 0;
                        }
                    }
 
 
                }
 
                document.getElementById('TableDatatY3').innerHTML += "x = " + XH + " , y = "  + temp1 + ' = ' + y + "<br><br>";
 
 
            }
 
        }
    }

 
 

 
    function TableLimitY4() {
       var PIsymbol = String.fromCharCode(960);   //PI
 
       //for Y4
        if (document.getElementById('TextBoxForCartesianGraph4').value != "") {//Y1
 
            var InputExpression = document.getElementById('TextBoxForCartesianGraph4').value;
            while (InputExpression.indexOf("nroot") > -1) {
                InputExpression = processnroot(InputExpression);
            }
            InputExpression = replaceAll(InputExpression, 'NRRR', 'NROOT');

            if (InputExpression.indexOf("{") > -1) {
                InputExpression = ProcessInequality(InputExpression);
            }
            if (InputExpression.indexOf("|") > -1) {
                InputExpression = ProcessAbsoluteValue(InputExpression);
            }           
            while (InputExpression.indexOf("Log") > -1) {
                InputExpression = processlog(InputExpression);
            }
            InputExpression = replaceAll(InputExpression, 'LLL', 'LOG');
            
              
            var StartVal = document.getElementById('TableStartY4').value;
            var xStart = FindValue(StartVal);
 
            var EndVal = document.getElementById('TableEndY4').value;
            var xEnd = FindValue(EndVal);
 
            var Stepsize = document.getElementById('StepsizeY4').value;
            var xStepsize = FindValue(Stepsize);
            var text = "y = " + document.getElementById('TextBoxForCartesianGraph4').value + "<br><br>";
            text = '<span style="font-size:20px; color: #df9124">' + text + '</span>';
            document.getElementById('TableDatatY4').innerHTML = text;
 

            for (var x = parseFloat(xStart); x <= parseFloat(xEnd); x += parseFloat(xStepsize)) {
                var temp1 = replaceAll(InputExpression, "x", "(" + x + ")");
 
                try {
 
                    y = FindValue(temp1);
                    y = Math.round(y * 1000000000000) / 1000000000000;
 
                }
                catch (err) {
                    y = NaN; //Handle errors here
                }
 
 
                if (IsNumericc(y) == false || y == null) {
                    y = NaN;
 
                }
 
                var XH = x;
 
                if (document.getElementById("TableY4Checkbox").checked) {
                    var tempp = x / Math.PI;
                    var XH = ToFraction(tempp.toString());
                    //alert("tempp = " + tempp + ".......... XH = " + XH);
 
                    var XH2 = XH.toString();
                    if (XH2.indexOf("/") > -1) {
                        XH2 = XH2.replace("/", PIsymbol + "/");
                        XH2 = XH2.replace("1" + PIsymbol, PIsymbol);
                        XH = XH2
                    }
                    else {
                        XH = XH2 + PIsymbol;
                        if (XH2 == "0") {
                            XH = 0;
                        }
                    }
 
 
                }
 
                document.getElementById('TableDatatY4').innerHTML += "x = " + XH + " , y = " + temp1 + ' = '  + y + "<br><br>";
            }
 
        }
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
            document.getElementById('panel2').style.left = '680px';
        }
        else if (num == '2') {
            document.getElementById('panel2').style.display = 'inline-block';
            document.getElementById('panel2').style.top = parseInt(clickY) + 'px';
            document.getElementById('panel2').style.left = '1350px';
        }
    }

		