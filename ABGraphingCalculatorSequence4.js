/*------------------------------------------------------------------------------
 * NAME       : VariableName
 * PURPOSE    : Identifies variable in expression
 * PARAMETERS : 
 * RETURNS    : 
 *----------------------------------------------------------------------------*/

    function VariableName(str) {

        for (var i = 65; i <= 90; i++) {
            var letter = String.fromCharCode(i);
            if (str.indexOf(letter) > -1) {
                return letter;
            };
        }

        for (var i = 97; i <= 122; i++) {
            var letter = String.fromCharCode(i);
            if (str.indexOf(letter) > -1) {
                return letter;
            };
        }
    }


/*------------------------------------------------------------------------------
 * NAME       : NDeriv
 * PURPOSE    : Find numerical derivative of function f(x) at x
 * PARAMETERS : x and f(x)
 * RETURNS    : f'(x)
 *----------------------------------------------------------------------------*/

    function BinomialExpanddiffquot(expression) {
        //alert('jjjj');
        //expression = '3x^7';

        if(expression == '-1x^0'){
            return '-1';
        }

        if(expression == '1x^0'){
            return '1';
        }

        if(expression.indexOf('x^0') > -1){
            var tt = expression.split('x^');
            return tt[0];
        }


        var tth = expression.split('x^');
        var deltaXsymbol = String.fromCharCode(916)+'x';	
        var v1 = 'x';//document.getElementById('Ellipse1').value;
        var v2 = '+';//document.getElementById('Ellipse2').value;
        var v3 = 'h';//deltaXsymbol;//document.getElementById('Ellipse3').value;
        var v4 = tth[1]; //document.getElementById('Ellipse4').value;
        var n = parseInt(v4);
 
        if (parseFloat(v4) != parseInt(v4)) {
            alert("Exponent must be a positive integer.");
            return;
        }

        if (v2 == "-") {
            v3 = "-" + v3;
            v2 = '';
            //alert("v3 = " + v3);
            v3 = v3.replace("--", "+");
            //alert("v365646 = " + v3);
        }

        var coeff = '';
        var coeff2 = '';
        var coeff3 = '';
        var coeff4 = '';

       //     alert('jjjj');                
        for (var k = 0; k <= parseInt(v4); k++) {

            var val = nCr(n, k);
            val = val*parseFloat(tth[0]);
            coeff += val + ";";
            //coeff2 += "n = " + n + "; k = " + k + "&nbsp;&nbsp;&nbsp; n!/[k!(n-k)!] = " + val + "<br>";
            //coeff3 += (k+1) + ")&nbsp;&nbsp;&nbsp;" + val + "(" + v1 + ")<sup>" + (n - k) + "</sup>"
            //       + "(" + v3 + ")<sup>" + k + "</sup>" + "<br>";
            if(n-k==0){
                var base1 = '';
                var exponent1 = '';
            }
            else{
                if (n - k == 1) {
                    var base1 =  v1 ;
                    var exponent1 = '';                    
                }
                else {
                    var base1 =  v1 ;
                    var exponent1 =  "<sup>" + (n-k) +"</sup>";           
                }

            }


            if(k==0){
                var base2 = '';
                var exponent2 = '';
            }
            else{
                if (k == 1) {
                    var base2 = '(' + v3 + ')';
                    var exponent2 = "";

                }
                else {
                    var base2 = '(' + v3 + ')';
                    var exponent2 = "<sup>" + k +"</sup>";
                }
            }
            
            coeff4 += val + base1 + exponent1 +  base2 +  exponent2 + " + ";
                  
                   
        }

        var nn = coeff4.length;
        var result = coeff4.substring(0, nn - 2);

        //alert('result....' + result);
        //document.getElementById("Table6").innerHTML = 'Input expression: ' +  expression + '<br><br>';
        //document.getElementById("Table6").innerHTML += tth[0]+'(x+'+deltaXsymbol+')'+  "<sup>" + tth[1] + "</sup> = " + result;
        return result;
    }
 
    function BinomialExpand() {
        var deltaXsymbol = String.fromCharCode(916)+'x';	
        var v1 = 'x';//document.getElementById('Ellipse1').value;
        var v2 = '+';//document.getElementById('Ellipse2').value;
        var v3 = deltaXsymbol;//document.getElementById('Ellipse3').value;
        var v4 = 7; //document.getElementById('Ellipse4').value;
        var n = parseInt(v4);

        if (parseFloat(v4) != parseInt(v4)) {
            alert("Exponent must be a positive integer.");
            return;
        }

        if (v2 == "-") {
            v3 = "-" + v3;
            v2 = '';
            //alert("v3 = " + v3);
            v3 = v3.replace("--", "+");
            //alert("v365646 = " + v3);
        }

        var coeff = '';
        var coeff2 = '';
        var coeff3 = '';
        var coeff4 = '';

                
        for (var k = 0; k <= parseInt(v4); k++) {
            //alert('jjjj');
            var val = nCr(n, k);
            
            coeff += val + ";";
            //coeff2 += "n = " + n + "; k = " + k + "&nbsp;&nbsp;&nbsp; n!/[k!(n-k)!] = " + val + "<br>";
            //coeff3 += (k+1) + ")&nbsp;&nbsp;&nbsp;" + val + "(" + v1 + ")<sup>" + (n - k) + "</sup>"
            //       + "(" + v3 + ")<sup>" + k + "</sup>" + "<br>";
            if(n-k==0){
                var base1 = '';
                var exponent1 = '';
            }
            else{
                if (n - k == 1) {
                    var base1 = '(' + v1 + ')';
                    var exponent1 = '';                    
                }
                else {
                    var base1 = '(' + v1 + ')';
                    var exponent1 = "<sup>" + (n - k) + "</sup>"; //n-k;                    
                }

            }


            if(k==0){
                var base2 = '';
                var exponent2 = '';
            }
            else{
                if (k == 1) {
                    var base2 = '(' + v3 + ')';
                    var exponent2 = "";

                }
                else {
                    var base2 = '(' + v3 + ')';
                    var exponent2 = "<sup>" + k + "</sup>";
                }
            }




            coeff4 += val + base1 + exponent1 +  base2 +  exponent2 + " + ";
                   
                   
        }

        var nn = coeff4.length;
        var result = coeff4.substring(0, nn - 2);

        //alert('result....' + result);
        document.getElementById("Table6").innerHTML = result;
        return coeff4;
    }
 
 
    function Factorial(n) {  //n!
        if (n <= 1) { return 1 };
        var r = 1;
        for (var d = 2; d <= n; d++) {
            r = r * d;
        }
        return r;
    }

    function nCr(n, k) {
        var r = 1;
        if (k > n) return 0;

        for (var d = 1; d <= k; d++) {
            r *= n - d + 1;
            r /= d;
        }
        r = Math.floor(r);
        return r;
    }

function AddPolynomial77(poly1, poly2, type) {
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




function ProcessInequality7777777777777777(expr) {

        //INQUALITYA   x <= number
        //INQUALITYB   x < number
        //INQUALITYC   x >= number
        //INQUALITYD   x > number
        //INQUALITYDD   x != number
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

        var tgh1 = expr.split("{"); //

        //var NumExpr = tgh1.length;

        ////alert("expression 1 is " + tgh1[0]);

        ////alert("expression 2 is " + tgh1[1]);

        ////alert("Number of expressions " + NumExpr);

        for (var i = 1; i <= tgh1.length - 1; i++) {

            ////alert("expression " + i + ": " + tgh1[i]);


            if (tgh1[i].indexOf("<=x") > -1 && tgh1[i].indexOf("x<=") > -1) {
                tgh1[i] = replaceAll(tgh1[i], "}", "");
                tgh1[i] = replaceAll(tgh1[i], "<=", ";");
                
                var ddd = tgh1[i].split(";");
                var ppp1 = FindValue(ddd[0]);
                var ppp2 = FindValue(ddd[2]);
                tgh1[i] = ppp1 + ";" + "x" + ";" + ppp2;
                tgh1[i] = "+ INQUALITYG(" + tgh1[i] + ")";
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
                tgh1[i] = "+ INQUALITYDD(" + tgh1[i] + ")";

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



function NDeriv777777777777777(x, func){
    
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
        dx = Math.sqrt(-1); //Handle errors here
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

function LinearInterpolation77777777777(func){
            
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
 
function Round77777777777777(val, n){
    return Math.round(val*Math.pow(10, n))/Math.pow(10, n);
}


/*------------------------------------------------------------------------------
 * NAME       : ProcessInput
 * PURPOSE    : Processes input for EVALUATOR function
 * PARAMETERS : input string
 * RETURNS    : processed input string
 *----------------------------------------------------------------------------*/


    function ProcessInput77777777777777(StringToProcess) {

        ////alert("ProcessInput");

        var PI = String.fromCharCode(960);   
        var space = String.fromCharCode(160); 
        var overline = String.fromCharCode(773); 
        var secondroot = String.fromCharCode(8730);
        var thirdroot = String.fromCharCode(8731); 
        var fourthroot = String.fromCharCode(8732);                     
        var Logbassa = "Log" + String.fromCharCode(8336); 
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
        ggg = replaceAll(ggg, String.fromCharCode(8730), "sqrt");
        ggg = replaceAll(ggg, String.fromCharCode(8731), "CBROOT");
        ggg = replaceAll(ggg, String.fromCharCode(8732), "FourthRoot");
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

        ggg = replaceAll(ggg, "PI", "(3.14159265358979)");
        ggg = replaceAll(ggg, "e", "(2.71828182845904)");
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

        while (ggg.indexOf("Logbassa") > -1) {
            ggg = ggg.replace("Logbassa", "Loga");
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
              
        ////alert("ggg = " + ggg);


        return ggg;


    } //processnum





/*------------------------------------------------------------------------------
 * NAME       : IsNumericc
 * PURPOSE    : determines whether input string is a number
 * PARAMETERS : s
 * RETURNS    : true or false
 *----------------------------------------------------------------------------*/

    function IsNumericc7777777(s) {
        return !isNaN(parseFloat(s)) && isFinite(s);

    }

    
 

function ReplaceIneq7777777777(expr) {
    
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



function replaceAll777777777(txt, replace, with_this) {
    return txt.replace(new RegExp(replace, 'g'), with_this);
}


function isInteger777777(s) {
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


function checkineq77777777(val1, inesign, val2){  //check inequality
            
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




function Rstrict777777(val1, inesign, val2){  //check inequality

    var Value = 0;
    
    if(checkineq(val1, inesign, val2) == false){
        Value = Math.sqrt(-1);
    }

        return Value;

}


function dotproduct7777777(A, B){
    
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
   


function SolveEquation377777777(leftbound, rightbound, func) { //Uses Newton-Raphson Method


    func = replaceAll(func,"y","x");

    func = ProcessInput(func);

    var a = leftbound;   //-100.0;
    var b = rightbound;  //100.0;
    var tt = 0.0;
    var tol = 0.00000000005;

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


       
function EvaluateExpression77777777777(expression) {

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

                else if (FuncName == "NTHROOT" || FuncName == "LOGA" || FuncName == "LCM" || FuncName == "GCF" 
                        || FuncName == "INQUALITYA" || FuncName == "INQUALITYB" || FuncName == "INQUALITYC" 
                        || FuncName == "INQUALITYD" || FuncName == "INQUALITYDD" || FuncName == "INQUALITYF") 
                {//functions with two arguments

                    var operand2 = evalStack.pop();  //argument
                    evalStack.pop();  //semicolon ;
                    var operand1 = evalStack.pop();  //base

                    var result = FunctionEval(FuncName, parseFloat(operand1), parseFloat(operand2), 3, 4, 5);
                    
                }
                else {//functions with one argument
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
    function PerformOperation77777777(operand1, operand2, operator) {
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

    function InfixToPostfix777777777777(expression) {
        //document.write(expression);
        expression = ProcessInput(expression);
        //document.write(expression);

        var tokens = expression.split(/([0-9.]+|[*+-\/()])/);

        var outputQueue = [];
        var operatorStack = [];

        while (tokens.length != 0) {
            var currentToken = tokens.shift();

            ////alert("currentToken = " + currentToken);

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

    function isOperator77777777777(token) {
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

    function isNumber7777777(token) {
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

    function isAlpha77777777(token) {

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
    function getPrecedence777777777(token) {
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

    function getAssociativity77777777(token) {
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

    function FunctionEval777777777777777(func, arg1, arg2, arg3, arg4, arg5) {

        //////alert("FF[0] = " + FF[0]);
        //////alert("FF[1] = " + FF[1]);

        //var ArgumentList = FF[1].split(",")

        //////alert("ArgumentList = " + ArgumentList);

        //ArgumentList[0] = eval(ArgumentList[0]);

        func = func.toUpperCase();

        switch (func) {
            case "FAC": return Factorial(arg1);            
            case "ACOS": return Math.acos(arg1);
            case "ASIN": return Math.asin(arg1);
            case "ATAN": return Math.atan(arg1);
            case "ABS": return Math.abs(arg1);
            case "COS": return Math.cos(arg1);
            case "FIX": return Math.sqrt(arg1);
            case "HEX": return Math.sqrt(arg1);
            case "LOG": return Math.log(arg1) / Math.log(10);
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

            case "NTHROOT":
                return Math.pow(arg2, 1.0 / arg1);

            case "LOGA":
                //////alert("arg1 = " + arg1);
                //////alert("arg2 = " + arg2);

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
                        checkinequality = Math.sqrt(-1);
                    }

                }
                else if (inesign == 22) {
                    if (val1 < val2) {
                        checkinequality = 0;
                    }
                    else {
                        checkinequality = Math.sqrt(-1);
                    }
                }
                else if (inesign == 33) {
                    if (val1 >= val2) {
                        checkinequality = 0;
                    }
                    else {
                        checkinequality = Math.sqrt(-1);
                    }
                }
                else if (inesign == 44) {
                    if (val1 > val2) {
                        checkinequality = 0;
                    }
                    else {
                        checkinequality = Math.sqrt(-1);
                    }
                }
                else if (inesign == 55) {
                    if (val1 != val2) {
                        checkinequality = 0;
                    }
                    else {
                        checkinequality = Math.sqrt(-1);
                    }
                }
                else if (inesign == 66) {
                    if (val1 == val2) {
                        checkinequality = 0;
                    }
                    else {
                        checkinequality = Math.sqrt(-1);
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
                    return 0;
                }
                else {
                    return NaN;
                };


            case "INQUALITYB":
                var val1 = arg1;
                var val2 = arg2;
                if (val1 < val2) {
                    return 0;
                }
                else {
                    return NaN;
                };

            case "INQUALITYC":
                var val1 = arg1;
                var val2 = arg2;
                if (val1 >= val2) {
                    return 0;
                }
                else {
                    return NaN;
                };

            case "INQUALITYD":
                var val1 = arg1;
                var val2 = arg2;
                if (val1 > val2) {
                    return 0;
                }
                else {
                    return NaN;
                };

            case "INQUALITYDD":
                var val1 = arg1;
                var val2 = arg2;
                if (val1 != val2) {
                    return 0;
                }
                else {
                    return NaN;
                };

            case "INQUALITYF":
                var val1 = arg1;
                var val2 = arg2;
                if (val1 == val2) {
                    return 0;
                }
                else {
                    return NaN;
                };

            case "INQUALITYG":
                var val1 = arg1;
                var val2 = arg2;
                var val3 = arg3;

                if (val1 <= val2 && val2 <= val3) {
                    return 0;
                }
                else {
                    return NaN;
                };


            case "INQUALITYH":
                var val1 = arg1;
                var val2 = arg2;
                var val3 = arg3;

                if (val1 <= val2 && val2 < val3) {
                    return 0;
                }
                else {
                    return NaN;
                };


            case "INQUALITYI":
                var val1 = arg1;
                var val2 = arg2;
                var val3 = arg3;

                if (val1 < val2 && val2 <= val3) {
                    return 0;
                }
                else {
                    return NaN;
                };

            case "INQUALITYJ":
                var val1 = arg1;
                var val2 = arg2;
                var val3 = arg3;

                if (val1 < val2 && val2 < val3) {
                    return 0;
                }
                else {
                    return NaN;
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

    function ParentheseMatch777777777(expression) {

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
    function IsFunction77777777(func) {

        ////alert("Hello IsFunction1 and func is " + func);
        func = func.toUpperCase();

        ////alert("Hello IsFunction2 and func is " + func);

        var ListFuncOps = ["AVG", "ABS", "ACOS", "ASC", "ASIN", "ATAN", "CDATE", "CHR", "COS", "DATE", "FIX", "FAC",
                        "HEX", "IIF", "LCASE", "LEFT", "LOG", "LN", "MAX", "MID", "MIN", "RIGHT", "ROUND",
                        "SIN", "SQRT", "TAN", "UCASE", "POWER", "CBROOT", "FOURTHROOT", "NTHROOT", "LOGA",
                        "SINDGG", "COSDGG", "TANDGG", "CSCDGG", "SECDGG", "COTDGG", "CSC", "SEC", "COT",
                        "RSTRICT", "SINH", "COSH", "TANH", "CSCH", "SECH", "COTH", "LCM", "GCF",
                        "INQUALITYA", "INQUALITYB", "INQUALITYC", "INQUALITYD", "INQUALITYD", "INQUALITYDD", "INQUALITYF", 
                        "INQUALITYG", "INQUALITYH", "INQUALITYI", "INQUALITYJ"
                        ];


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
function ToFraction77777777(userinput) {

    var result = FindValue(userinput);

    if(parseInt(result) == result){
        return result;
    }
                  

    if (IsNumericc(result) == false || result == null) {
        return Math.sqrt(-1);
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

        function SolveEquationDirect7777777777(leftbound, rightbound, func) { //Bisection Method

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
            return Math.sqrt(-1);
        }

        return Math.sqrt(-1);
    }



/*------------------------------------------------------------------------------
* NAME       : SolveEquationDirect2
* PURPOSE    : Finds solution of equation by search for solution over closed interval [a, b]
* PARAMETERS : leftbound, rightbound, function
* RETURNS    : returns solution if it exists.
*              
*----------------------------------------------------------------------------*/

        function SolveEquationDirect277777777777(leftbound, rightbound, func) { //Bisection Method

        func = replaceAll(func, "y", "x");

        //func = ProcessInput(func);

        var a = leftbound;   
        var b = rightbound;  
        var tt = 0.0;
        var tol = 0.000000000000005;


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

    function FindMaxima77777777777(leftbound, rightbound, func) {
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
    function FindMinima77777777777(leftbound, rightbound, func) {
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

    function FindRightmost7777777777777(lowerbound, upperbound, func) {
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

    function FindLeftmost77777777777(lowerbound, upperbound, func) {

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


	
function LCM777777777(n1, n2){
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
   		

function GCF7777777777(n1, n2){		
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
       		


    /*------------------------------------------------------------------------------
* NAME       : FindValue
* PURPOSE    : Evaluates input expression
* PARAMETERS : userInput
* RETURNS    : numerical value of input expression
*----------------------------------------------------------------------------*/
function FindValue7777777777777(userInput) {
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

function ConvertResult77(poly) {
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

function polyDegree77(polyArray) {
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

    alert("trq3 = " + trq3);
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

    alert("result2 = " + result2);
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
function ConvertSymbol77(poly) {
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

    alert("trq1 = " + trq1 + " ;;; trq2 = " + trq2);

    result = result.substring(0, result.length - 1);

    while (result.indexOf("+-") > -1) {
        result = result.replace("+-", "-");
    }

    while (result.indexOf("+-") > -1) {
        result = result.replace("+-", "-");
    }

    alert("result divide = " + result);
    return result;
}



/*------------------------------------------------------------------------------
* NAME       :  DividePoly1
* PURPOSE    :  Divides monomial by monomial
* PARAMETERS :  poly1, poly2
* RETURNS    :  result of monomial dividing by monomial
*----------------------------------------------------------------------------*/
function DividePoly177(poly1, poly2) {
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
function MultiplyPoly77(poly1, poly2) {
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
    alert("product = " + product);
    return product;
} ////




/*------------------------------------------------------------------------------
* NAME       :  SubtractPolynomial
* PURPOSE    :  Subtracts a polynomial from a second polynomial
* PARAMETERS :  poly1, poly2
* RETURNS    :  result of polynomial subtraction
*----------------------------------------------------------------------------*/
function SubtractPolynomial77(poly1, poly2, type) {
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
        alert("polyArray2 = " + polyArray2);

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
function MultiplyPoly177(poly1, poly2) {
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
* PURPOSE    :  
* PARAMETERS :  str
* RETURNS    :  
*----------------------------------------------------------------------------*/
function ProcessPoly77(str) {
    var nn = str.indexOf(")(");
    for (var i = 1; i < str.length; i++) {
        if (str[nn - i] == "(") {
            var nn1 = nn - i;
            break;
        }
    }

    for (var i = 1; i < str.length; i++) {
        //alert('i = ' + i + " ;;; " + str[nn + i]);
        if (str[nn + i] == ")") {
            var nn2 = nn + i;
            break;
        }
    }

    //alert("nn = " + nn + " ;;; " + "nn1 = " + nn1 + " ;;; " + " nn2 = " + nn2);
    var strNew1 = str.substring(nn1 + 1, nn);
    var strNew2 = str.substring(nn + 2, nn2);
    //alert("strNew1 = " + strNew1 + " ;;; " + "strNew2 = " + strNew2);
    var strNew4 = "(" + str.substring(nn1 + 1, nn2) + ")";
    //alert("strNew4 = " + strNew4);

    if (!str.match(/([()])/)) {
    }
    strNew3 = MultiplyPoly(strNew1, strNew2);
    //alert("strNew3 = " + strNew3);
    str = str.replace(strNew4, strNew3);
    //alert("str = " + str);
    return str;
}

/*------------------------------------------------------------------------------
* NAME       :  ExpandExpr
* PURPOSE    :  Simplifies input expression to determine parameters of general 
*               conic Ax^2 + Bxy + Cy^2 + Dx + Ey + F = 0
* PARAMETERS :  poly
* RETURNS    :  Parameters A, B, C, D, E, F
*----------------------------------------------------------------------------*/
function ExpandExpr(poly) {
    alert("alksjdflkajsdflexpand");
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

    alert("CoeffArray = " + CoeffArray);
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



/*------------------------------------------------------------------------------
* NAME       :  
* PURPOSE    :  
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/




/*------------------------------------------------------------------------------
* NAME       :  
* PURPOSE    :  
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/




/*------------------------------------------------------------------------------
* NAME       :  
* PURPOSE    :  
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/


    function ProcessPoly(str) {
        var userInput = str;
        userInput = replaceAll(userInput, '2.718281828459', '2.71828182845904523536028');
        userInput = userInput.replace(new RegExp(" ", 'g'), "");
        var postFix = InfixToPostfix(userInput);
        postFix = postFix.replace(new RegExp(" ", 'g'), "");
        var postFixTT = postFix.split(',');
        //take care of numerical fractions
        for (var i = 0; i < postFixTT.length; i++) {
            if (postFixTT[i] == '/') {
                if (IsNumericc(postFixTT[i - 2]) && IsNumericc(postFixTT[i - 1])) {  //alert('postFix22 = ' + postFix[i] + '.... i = ' + i);
                    var tt = FindValue(postFixTT[i - 2]) / FindValue(postFixTT[i - 1]);
                    postFixTT[i] = tt;
                    postFixTT.splice(i - 2, 2);
                }
            }
        }

        while (postFixTT.length > 1) {
            for (var i = 0; i < postFixTT.length; i++) {
                var pp = postFixTT[i];
                if (pp == '^' || pp == '*' || pp == '/' || pp == '+' || pp == '-') {
                    if (postFixTT[i] == '+') {
                        var tt = AddPolynomial(postFixTT[i - 2], postFixTT[i - 1]);
                        postFixTT[i] = tt;
                        postFixTT.splice(i - 2, 2);
                        break;
                    }
                    else if (postFixTT[i] == '-') {
                        var tt = SubtractPolynomial(postFixTT[i - 2], postFixTT[i - 1]);
                        postFixTT[i] = tt;
                        postFixTT.splice(i - 2, 2);
                        break;
                    }
                    else if (postFixTT[i] == '*') {
                        var tt = MultiplyPoly(postFixTT[i - 2], postFixTT[i - 1]);
                        postFixTT[i] = tt;
                        postFixTT.splice(i - 2, 2);
                        break;
                    }
                    else if (postFixTT[i] == '/') {
                        var tt = DividePoly(postFixTT[i - 2], postFixTT[i - 1]);
                        postFixTT[i] = tt;
                        postFixTT.splice(i - 2, 2);
                        break;
                    }
                    else if (postFixTT[i] == '^') {
                        var tt = postFixTT[i - 2]; //alert('tt = ' + tt);
                        for (var j = 2; j <= parseFloat(postFixTT[i - 1]); j++) {
                            tt = MultiplyPoly(tt, postFixTT[i - 2]);
                        }
                        //alert('tt^ = ' + tt);
                        postFixTT[i] = tt;
                        postFixTT.splice(i - 2, 2);
                        break;
                    }

                }
            }

            //alert('posfFixTT = ' + postFixTT);

        }


        return postFixTT.toString();

    }



    function SubtractPolynomial(poly1, poly2) {
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


        return AddPolynomial(poly1, poly2);

    }


    function MultiplyPoly(poly1, poly2) {
        if (IsNumericc(poly1)) {
            poly1 = poly1 + 'x^0';
        }

        if (IsNumericc(poly2)) {
            poly2 = poly2 + 'x^0';
        }

        //alert('poly1 = ' + poly1 + '..... poly2 = ' + poly2);

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

    
    function FindParam(num, expression) {
        num = 7;
        var OperationID = '';
        var spc = String.fromCharCode(160);
        var tab5 = spc + spc + spc + spc + spc;
        var tab10 = tab5 + tab5;
        var tab15 = tab5 + tab5 + tab5;
        var tab20 = tab10 + tab10;
        //document.getElementById('Ellipse2').value = num;

        //document.getElementById("Table3").innerHTML = text;
        //document.getElementById("Table4").innerHTML = text;
        if (num == 1) {
            //document.getElementById("operationID").value = "+";
            var operationSymbol = '+';
        }
        else if (num == 2) {
            //document.getElementById("operationID").value = "-";
            var operationSymbol = "-";
        }
        else if (num == 3) {
            //document.getElementById("operationID").value = "*";
            var operationSymbol = "*";
        }
        else if (num == 4) {
            //document.getElementById("operationID").value = "/";
            var operationSymbol = "/";
        }
        else if (num == 6) {
            //document.getElementById("operationID").value = "power";
            var operationSymbol = "power";
        }
        else if (num == 7) {
            var inputexpr = expression;  //document.getElementById("box12").value;
            if (inputexpr.indexOf('÷') > -1) {
                document.getElementById("operationID").value = "/";
                var tt = inputexpr.split('÷');
                var numer = replaceAll(tt[0], ' ', '');
                numer = numer.substring(1);
                numer = numer.slice(0, -1);
                var denom = replaceAll(tt[1], ' ', '');
                denom = denom.substring(1);
                denom = denom.slice(0, -1);

                document.getElementById("box13").value = numer;
                document.getElementById("box14").value = denom;
            }
            else {
                document.getElementById("operationID").value = "multiply3";
            }
        }
        else if (num == 8) {
            document.getElementById("operationID").value = "diffquot";
        }

        PolyOperations();

        return;

    }


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

    
    function DivideByConstant(poly1, poly2) {

        poly1 = replaceAll(poly1, " ", "");
        poly2 = replaceAll(poly2, " ", "");

        if (IsNumericc(poly1)) {
            poly1 = poly1 + 'x^0';
        }



        var result = "";
        var trq1 = SplitPoly(poly1);
        //var trq2 = SplitPoly(poly2);

        //var deg1 = polyDegree(trq1);
        //var deg2 = polyDegree(trq2);


        //if (deg1 < deg2) {
        //    return;
        //}


        //alert('trq1 = ' + trq1);

        for (var i = 0; i < trq1.length; i++) {
            var gg = trq1[i].split('x');

            //alert('gg[0] = ' + gg[0]);

            var hh = FindValue(gg[0].toString()) / FindValue(poly2.toString());

            //alert('hh = ' + hh);

            trq1[i] = hh + 'x' + gg[1];
            if (hh > 0) {
                result += '+' + trq1[i];
            }
            else if (hh < 0) {
                result += trq1[i];
            }
        }

        return result;
    }



    function DividePoly2(poly1, poly2) {
        var spc = String.fromCharCode(160);
        var divsym = String.fromCharCode(8747);

        polytt1 = document.getElementById('box13').value;
        polytt2 = document.getElementById('box14').value;
        var Divisor = document.getElementById('box14').value;

        poly1 = AddPolynomial(poly1, "0x^0");
        poly2 = AddPolynomial(poly2, "0x^0");


        if (IsNumericc(poly2)) {
            var text = DivideByConstant(poly1, poly2);
            if (text.substring(0, 1) == "+") {
                text = text.substring(1, text.legth);
            }

            text = ConvertSymbol(text);
            var ifrm = document.getElementById('iframe1Ellipse');
            ifrm = (ifrm.contentWindow) ? ifrm.contentWindow : (ifrm.contentDocument.document) ? ifrm.contentDocument.document : ifrm.contentDocument;

            ifrm.document.open();
            ifrm.document.write('<span style="font-size: large; ">Input: (' + polytt1 + ')&#247;(' + polytt2 + ')</span><br><br>');
            ifrm.document.write('<span style="font-size: large; ">Result: <br>(' + polytt1 + ')&#247;(' + polytt2 + ') = ' + text + '</span><br><br><br><br>');
            ifrm.document.close();

            //document.getElementById('Table5').innerHTML = '';

            return;
        }



        var result = "";
        var trq1 = SplitPoly(poly1); //temp1.split("+");
        var trq2 = SplitPoly(poly2); //temp2.split("+");

        var deg1 = polyDegree(trq1);
        var deg2 = polyDegree(trq2);

        if (deg1 < deg2) {
            alert("Note: Degree of polynomial in the numerator is less than degree of polynomial in the denominator.")
            return;
        }

        //alert("deg1 = " + deg1);
        //alert("deg2 = " + deg2);

        var ifrm = document.getElementById('iframe1Ellipse');
        ifrm = (ifrm.contentWindow) ? ifrm.contentWindow : (ifrm.contentDocument.document) ? ifrm.contentDocument.document : ifrm.contentDocument;

        ifrm.document.open();
        ifrm.document.write('<span style="font-size: large; ">Input: (' + polytt1 + ')&#247;(' + polytt2 + ')</span><br><br>');
        //ifrm.document.write('<span style="font-size: large; ">Division Process: ' + '</span><br><br>');


        var array1 = '';
        var array2 = '';
        var array3 = '';

        var nn0 = trq1[0];
        var pp0 = poly1;

        while (deg1 >= deg2) {
            var rr0 = DividePoly1(nn0, trq2[0]);
            //var text2 = "<span style='color: blue'>" + ConvertSymbol(rr0) + "</span>";

            //var text = "(" + ConvertSymbol(nn0) + ")/(" + ConvertSymbol(trq2[0]) + ") = " + text2;
            //ifrm.document.write('<span style="font-size: large; ">' + text + '</span><br>');

            result += ConvertSymbol(rr0) + "+";

            var rr1 = MultiplyPoly2(rr0, poly2, "2");
            //text = "(" + ConvertSymbol(rr0) + ")(" + ConvertSymbol(poly2) + ") = " + ConvertSymbol(rr1);
            //ifrm.document.write('<span style="font-size: large; ">' + text + '</span><br>');

            var poly = rr1;

            if (poly.substring(0, 1) != "-") {
                poly = "+" + poly;
            }
            poly = replaceAll(poly, "-", "~");
            while (poly.indexOf("+") > -1) {
                poly = poly.replace("+", "-");
            }
            poly = replaceAll(poly, "~", "+");

            if (poly.substring(0, 1) == "+") {
                poly = poly.substring(1, poly.length);
            }

            var rr2 = AddPolynomial(pp0, poly);

            if (rr2 == "") { rr2 = "0x^0" };
            if (rr2.substring(0, 1) == "+") {
                rr2 = rr2.substring(1, rr2.length);
            }

            //text = "(" + ConvertSymbol(pp0) + ") - (" + ConvertSymbol(rr1) + ") = " + ConvertSymbol(rr2);
            //ifrm.document.write('<span style="font-size: large; ">' + text + '</span><br>');

            array1 += ConvertSymbol(pp0) + ";";
            array2 += ConvertSymbol(rr1) + ";";
            array3 += ConvertSymbol(rr2) + ";";


            var ret = SplitPoly(rr2);
            //ifrm.document.write('<span style="font-size: large; ">' + '</span><br><br><br><br>');

            pp0 = rr2;
            nn0 = ret[0];
            deg1 = polyDegree(ret);


        } //end while


        var ret = SplitPoly(rr2);

        result = result.substring(0, result.length - 1);

        while (result.indexOf("+-") > -1) {
            result = result.replace("+-", "-");
        }
        var result34 = result;

        //alert('result9999 = ' + result);
        //document.getElementById('quotient').value = result;


        //document.getElementById("Table2").innerHTML += array1 + '<br><br>';
        //document.getElementById("Table2").innerHTML += array2 + '<br><br>';
        //document.getElementById("Table2").innerHTML += array3 + '<br><br>';


        if (rr2 != "0x^0") {
            result += ' + <sup>' + ConvertSymbol(rr2) + "</sup><span style='font-size:36px'>/</span><sub>(" + document.getElementById('box14').value + ")</sub>";
        }

        while (result.indexOf("+-") > -1) {
            result = result.replace("+-", "-");
        }

        ifrm.document.write('<span style="font-size: large; ">' + '</span><br><br><br>');
        ifrm.document.write('<span style="font-size: large; ">Result: <br>(' + document.getElementById('box13').value + ')&#247;(' + document.getElementById('box14').value + ') <br>= ' + result + '</span><br><br><br><br>');

        ifrm.document.write('<span style="font-size: large; color:blue">Quotient = ' + result34 + '</span><br>');
        ifrm.document.write('<span style="font-size: large; ">Remainder = ' + ConvertSymbol(rr2) + '</span><br>');
        ifrm.document.write('<span style="font-size: large; ">Divisor = ' + document.getElementById('box14').value + '</span><br>');



        //ifrm.document.write('<span style="font-size: large; ">' + '</span><br><br><br><br>');
        //ifrm.document.write('<span style="font-size: large; ">Result: <br>(' + polytt1 + ')/(' + polytt2 + ') = ' + convertedResult + '</span><br><br><br><br>');

        ifrm.document.close();


        //var ifrm = document.getElementById('iframe2Ellipse');
        //ifrm = (ifrm.contentWindow) ? ifrm.contentWindow : (ifrm.contentDocument.document) ? ifrm.contentDocument.document : ifrm.contentDocument;
        //ifrm.document.open();
        //ifrm.document.write('<span style="font-size: large; ">' + result + '</span>');
        //ifrm.document.close();

        var arr1 = array1.split(";");
        var arr2 = array2.split(";");
        var arr3 = array3.split(";");

        var N = arr1.length;
        var N2 = polytt2.length;
        var space = '';
        for (var i = N2; i < 25; i++) {
            space += spc;
        }

        //alert("N2 = " + N2);

        //document.getElementById("Table5").innerHTML = polytt2;


        //document.getElementById("Table2").innerHTML = 'Long Division Process: <br><br>';
        //document.getElementById("Table2").innerHTML = result + '<br>';
        //document.getElementById("Table2").innerHTML += "_____________________________<br>";
        //document.getElementById("Table2").innerHTML += "|" + spc;

        //document.getElementById("Table2").innerHTML += arr1[0] + '<br>';
        //document.getElementById("Table2").innerHTML += "-(" + arr2[0] + ")" + '<br>';
        //document.getElementById("Table2").innerHTML += "-----------------------------<br>";
        //document.getElementById("Table2").innerHTML += arr3[0] + '<br><br>';

        //for (var i = 1; i < N - 1; i++) {
        //    //document.getElementById("Table2").innerHTML += space + arr1[i] + '<br>';
        //    document.getElementById("Table2").innerHTML += "-(" + arr2[i] + ")" + '<br>';
        //    document.getElementById("Table2").innerHTML += "-----------------------------<br>";
        //    document.getElementById("Table2").innerHTML += arr3[i] + '<br><br>';
        //}



        return;

    } /////

        function SplitPoly(poly) {

        var temp1 = replaceAll(poly, " ", "");
        var temp1 = replaceAll(temp1, "-", "+-");
        if (IsNumericc(poly)) {
            poly = poly + 'x^0';
        }

        while (temp1.indexOf("(+-") > -1) {
            temp1 = temp1.replace("(+-", "(-");
        }

        if (temp1.substring(0, 1) == "+") {
            temp1 = temp1.substring(1, temp1.length);
        }

        var trq1 = temp1.split("+");

        for (var i = 0; i < trq1.length; i++) {

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

    function MultiplyPoly2(poly1, poly2, printType) {

        polytt1 = '';//document.getElementById('box13').value;
        polytt2 = '';//document.getElementById('box14').value;

        var trq1 = SplitPoly(poly1); //temp1.split("+");
        var trq2 = SplitPoly(poly2); //temp2.split("+");

        if (printType == "1") {
            var ifrm = document.getElementById('iframe1Ellipse');
            ifrm = (ifrm.contentWindow) ? ifrm.contentWindow : (ifrm.contentDocument.document) ? ifrm.contentDocument.document : ifrm.contentDocument;
            ifrm.document.open();
            ifrm.document.write('<span style="font-size: large; ">Input: (' + polytt1 + ')(' + polytt2 + ')</span><br><br>');
            ifrm.document.write('<span style="font-size: large; ">Multiplication Process: ' + '</span><br><br>');
        }

        var product = "";
        for (var i = 0; i < trq1.length; i++) {
            for (var ii = 0; ii < trq2.length; ii++) {
                var prod = MultiplyPoly1(trq1[i], trq2[ii]);
                var expr1 = ConvertSymbol(trq1[i]);
                var expr2 = ConvertSymbol(trq2[ii]);
                var expr3 = ConvertSymbol(prod);
                if (printType == "1") {
                    ifrm.document.write('<span style="font-size: large; ">' + "(" + expr1 + ")(" + expr2 + ") = " + expr3 + '</span><br>');
                }
                product += prod + "+";
            }
        }

        while (product.indexOf("+-") > -1) {
            product = product.replace("+-", "-");
        }

        product = product.substring(0, product.length - 1);

 
        if (printType == "2") {
            return product;
        }

        ifrm.document.write('<span style="font-size: large; "> ' + '</span><br> ');
        var rrr2 = ConvertSymbol(product);
        ifrm.document.write('<span style="font-size: large; ">Summing: ' + rrr2 + '</span><br><br><br>');


        //combine like terms
        var rrr = AddPolynomial(product, "0x^0")
        rrr = ConvertSymbol(rrr);
        ifrm.document.write('<span style="font-size: large; ">Result: ' + '</span><br>');
        ifrm.document.write('<span style="font-size: large; ">(' + polytt1 + ')(' + polytt2 + ') = ' + rrr + '</span><br><br>');
        ifrm.document.close();


    } /////


    function ConvertResult(poly) {

        poly = replaceAll(poly, "-", "+-");
        polyTemp = poly.split("+");
        var trw = "";
        for (var i = 0; i < polyTemp.length; i++) {
            if (polyTemp[i].indexOf("^") > -1) {
                var tt = polyTemp[i].split("^");
                if (tt[1] == "0" ) {
                    polyTemp[i] = tt[0].replace("x", "");
                }
                else if (tt[1] == "1") {
                    polyTemp[i] = tt[0];
                }
                else {
                    polyTemp[i] = tt[0] + "<sup>" + tt[1] + "</sup>";
                }
            }

            else if(polyTemp[i] == "1x"){
                polyTemp[i] = "x"
            }
            else if(polyTemp[i] == "-1x"){
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

    function ConvertSymbol(poly) {

        if (poly == "1x^0") { return "1" };
        if (poly == "-1x^0") { return "-1" };

        poly = replaceAll(poly, "-", "+-");
        polyTemp = poly.split("+");

        var trw = "";

        for (var i = 0; i < polyTemp.length; i++) {
            if (polyTemp[i] == '1x^0') {
                polyTemp[i] = '1';
            }
            else if (polyTemp[i].indexOf("^") > -1) {
                var tt = polyTemp[i].split("^");
                if (tt[0] == "1x") {
                    tt[0] = "x";
                }
                if (tt[0] == "-1x") {
                    tt[0] = "-x";
                }

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

            trw += polyTemp[i] + "+";
        }


        trw = trw.substring(0, trw.length - 1);
        while (trw.indexOf("+-") > -1) {
            trw = trw.replace("+-", "-");
        }

        //alert("trw = " + trw);
        return trw;

    }

    function polyDegree(poly) {
        var maxExpo = 0;
        for (var i = 0; i < poly.length; i++) {
            var ghy = poly[i].split("^");
            var tjh = parseFloat(ghy[1]);
            if (tjh > maxExpo) {
                maxExpo = tjh;
            }
        }
        return maxExpo;
    }

    function AddPolynomial(poly1, poly2) {
        var trq1 = SplitPoly(poly1); // temp1.split("+");
        var trq2 = SplitPoly(poly2); //temp2.split("+");
        
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
   
        return result2;
    }

    function PolyOperations(inputexpr) {
        //alert('PolyOperations(inputexpr).......'+inputexpr);
        var sup2 = String.fromCharCode(178);     //sup 2
        var sup3 = String.fromCharCode(179);     //sup 3
        var sup4 = String.fromCharCode(8308);    //sup 4
        var sup5 = String.fromCharCode(8309);    //sup 5
        var sup6 = String.fromCharCode(8310);    //sup 6
        var sup7 = String.fromCharCode(8311);    //sup 7

        var operation = 'multiply3';//document.getElementById("operationID").value;

        if (operation == "+") {
            var poly1 = '3x+2';
            var poly2 = '1';
        }
        else if (operation == "-") {
            var poly1 = '3x+2';
            var poly2 = '1';
        }
        else if (operation == "*") {
            var poly1 = '3x+2';
            var poly2 = '1';
        }
        else if (operation == "/") {
            var poly1 =''; //document.getElementById('box13').value;
            var poly2 ='';// document.getElementById('box14').value;
        }
        else if (operation == "power") {
            var poly1 = '3x+4';
            var poly2 = '2';
        }
        else if (operation == "multiply3") {
            var poly1 = inputexpr;//document.getElementById('box12').value;
            var poly2 = '1';

        }

        var poly1Temp = poly1;
        var poly2Temp = poly2;

        poly1 = replaceAll(poly1, " ", "");
        operation = replaceAll(operation, " ", "");
        poly2 = replaceAll(poly2, " ", "");


        poly1 = replaceAll(poly1, sup2, "^2");
        poly1 = replaceAll(poly1, sup3, "^3");
        poly1 = replaceAll(poly1, sup4, "^4");
        poly1 = replaceAll(poly1, sup5, "^5");
        poly1 = replaceAll(poly1, sup6, "^6");
        poly1 = replaceAll(poly1, sup7, "^7");

        poly2 = replaceAll(poly2, sup2, "^2");
        poly2 = replaceAll(poly2, sup3, "^3");
        poly2 = replaceAll(poly2, sup4, "^4");
        poly2 = replaceAll(poly2, sup5, "^5");
        poly2 = replaceAll(poly2, sup6, "^6");
        poly2 = replaceAll(poly2, sup7, "^7");

        poly1 = ProcessPoly(poly1);
        poly2 = ProcessPoly(poly2);


        //alert('poly1 = ' + poly1);

       if (operation == "+") {

            var res1 = AddPolynomial(poly1, poly2);

            if (res1 == "") { res1 = "0x^0" };
            res1 = ConvertSymbol(res1);

            while (poly1.indexOf("+-") > -1) {
                poly1 = poly1.replace("+-", "-");
            }

        }
        else if (operation == "-") {
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

            var res1 = AddPolynomial(poly1, poly2);
            if (res1 == "") { res1 = "0x^0" };
            res1 = ConvertSymbol(res1);

            var expr = poly1 + "+" + poly2;
            expr = replaceAll(expr, " ", "");
            while (expr.indexOf("+-") > -1) {
                expr = expr.replace("+-", "-");
            }

            expr = ConvertSymbol(expr);
        }
        else if (operation == "*") {
            MultiplyPoly2(poly1, poly2, "2");
        }
        else if (operation == "/") {
            var res4 = DividePoly2(poly1, poly2);

        }
        else if (operation == "power") {
            var rrr = poly1;
            if (poly2 > 1) {
                for (var i = 2; i <= poly2; i++) {
                    var rrr = MultiplyPoly2(rrr, poly1, "2");
                }

                rrr = AddPolynomial(rrr, "0x^0")
            }


            rrr = ConvertSymbol(rrr);

        }
        else if (operation == "multiply3") {
            var rrr = poly1;
            rrr = AddPolynomial(rrr, "0x^0")
            rrr = ConvertSymbol(rrr);

        }
        else {
            return;
        }


        //alert('result is: ' + rrr);
        return rrr;
    }


    function replacewithF(str){
        if(str.indexOf("ASIN") > -1 ){
            var str = replaceAll(str,"ASIN" , "ASFF");
        }
        
        if(str.indexOf("Asin") > -1 ){
            var str = replaceAll(str,"Asin" , "ASFF");
        }
        
        if(str.indexOf("asin") > -1 ){
            var str = replaceAll(str,"asin" , "ASFF");
        }
        if(str.indexOf("SIN") > -1 ){
            var str = replaceAll(str,"SIN" , "SFF");
        }
        
        if(str.indexOf("Sin") > -1 ){
            var str = replaceAll(str,"Sin" , "SFF");
        }
        
        if(str.indexOf("sin") > -1 ){
            var str = replaceAll(str,"sin" , "SFF");
        }
        if(str.indexOf("ATAN") > -1 ){
            var str = replaceAll(str,"ATAN" , "ATAF");
        }
        
        if(str.indexOf("Atan") > -1 ){
            var str = replaceAll(str,"Atan" , "ATAF");
        }
        
        if(str.indexOf("atan") > -1 ){
            var str = replaceAll(str,"atan" , "ATAF");
        }
        if(str.indexOf("TAN") > -1 ){
            var str = replaceAll(str,"TAN" , "TAF");
        }
        
        if(str.indexOf("Tan") > -1 ){
            var str = replaceAll(str,"Tan" , "TAF");
        }
        
        if(str.indexOf("tan") > -1 ){
            var str = replaceAll(str,"tan" , "TAF");
        }
        if(str.indexOf("LN") > -1 ){
            var str = replaceAll(str,"LN" , "LF");
        }
        
        if(str.indexOf("Ln") > -1 ){
            var str = replaceAll(str,"Ln" , "LF");
        }
        
        if(str.indexOf("tan") > -1 ){
            var str = replaceAll(str,"ln" , "LF");
        }

        return str;
    }


   function replace456(str){
        if(str.indexOf("ASFF") > -1 ){
            var str = replaceAll(str , "ASFF","ASIN");
        }
        if(str.indexOf("SFF") > -1 ){
            var str = replaceAll(str , "SFF","SIN");
        }
        if(str.indexOf("ATAF") > -1 ){
            var str = replaceAll(str , "ATAF","ATAN");
        }
        if(str.indexOf("TAF") > -1 ){
            var str = replaceAll(str,"TAF" , "TAN");
        }
        if(str.indexOf("LF") > -1 ){
            var str = replaceAll(str,"LF" , "LN");
        }
    
        return str;
    }
