
/*------------------------------------------------------------------------------
 * NAME       : NDeriv
 * PURPOSE    : Find numerical derivative of function f(x) at x
 * PARAMETERS : x and f(x)
 * RETURNS    : f'(x)
 *----------------------------------------------------------------------------*/
  
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




function ProcessInequality(expr) {

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
        expression = ProcessInput(expression);
        var tokens = expression.split(/([0-9.]+|[*+-\/()])/);
        var outputQueue = [];
        var operatorStack = [];
        while (tokens.length != 0) {
            var currentToken = tokens.shift();
            if (isAlpha(currentToken)) {
                 if(IsFunction(currentToken)){
                     operatorStack.push(currentToken);
                 }
                 else {
                     outputQueue.push(currentToken);
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
                        throw ("Parentheses do not match! ");

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


        }

        while (operatorStack.length != 0) {
            if (!operatorStack[operatorStack.length - 1].match(/([()])/))
                outputQueue.push(operatorStack.pop());
            else
                throw ("Parentheses error!");
        }

        var tkp = outputQueue.join(",");
         
        tkp = tkp.replace(new RegExp(" ", 'g'), "");

        //alert("tkp = " + tkp);
               

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
    var PrecedenceValue = 0;
    
    if(token == '+' || token == '-'){
        PrecedenceValue = 1;
    }
    else if(token == '*' || token == '/'){
        PrecedenceValue = 2;
    }
    else if(token == '^'){
        PrecedenceValue = 3;
    }

    return PrecedenceValue;
}


    /*------------------------------------------------------------------------------
    * NAME       : getAssociativity
    * PURPOSE    : Determines Associative Property of an operator
    * PARAMETERS : character
    * RETURNS    : "left" or "right"
    *----------------------------------------------------------------------------*/

function getAssociativity(token) {
    var Associativity = '';
    if(token == '^'){
        Associativity = 'right';
    }
    else if(token == '+' || token == '-' ||token == '*' ||token == '/'){
        Associativity = 'left';
    }

    return Associativity;
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

        //////alert("FF[0] = " + FF[0]);
        //////alert("FF[1] = " + FF[1]);

        //var ArgumentList = FF[1].split(",")

        //////alert("ArgumentList = " + ArgumentList);

        //ArgumentList[0] = eval(ArgumentList[0]);

        func = func.toUpperCase();

        switch (func) {
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

        var ListFuncOps = ["AVG", "ABS", "ACOS", "ASC", "ASIN", "ATAN", "CDATE", "CHR", "COS", "DATE", "FIX",
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
function ToFraction(userinput) {

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

        function SolveEquationDirect2(leftbound, rightbound, func) { //Bisection Method

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


/*------------------------------------------------------------------------------
* NAME       :  
* PURPOSE    :  
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/
function enterpressalert(e){
    var code = (e.keyCode ? e.keyCode : e.which);
    //alert('code = ' + code);

    if(code == 13) { //Enter keycode
     code = 40;//alert('enter press');
    }

    if (code < 37 || code > 40) { return; }

    var ElementId = document.activeElement.id;
    //alert('ElementId = ' + ElementId);
    var ElementId = ElementId.replace('ParamDS', '');
    var RowCol = ElementId.split('Col');
    var Row = RowCol[0].replace('Row', '');
    var Col = RowCol[1];
    //alert(Row +'..............'  + Col);

    if (code == 40) {//move down
        var RR = parseInt(Row) + 1;
        var CC = parseInt(Col);
        if (RR > 100) { CC = 100 }
        ElementId = 'ParamDSRow' + RR + 'Col' + CC;
        document.getElementById(ElementId).focus();
    }
    else if (code == 38) {//move up
        var RR = parseInt(Row) - 1;
        var CC = parseInt(Col);
        if (RR < 1) { CC = 1 }
        ElementId = 'ParamDSRow' + RR + 'Col' + CC;
        document.getElementById(ElementId).focus();
    }
    else if (code == 37) {//move left
        var RR = parseInt(Row);
        var CC = parseInt(Col)-1;
        if (RR < 1) { CC = 1 }
        ElementId = 'ParamDSRow' + RR + 'Col' + CC;
        document.getElementById(ElementId).focus();
    }
    else if (code == 39) {//move right
        var RR = parseInt(Row);
        var CC = parseInt(Col)+1;
        if (RR > 50) { CC = 50 }
        ElementId = 'ParamDSRow' + RR + 'Col' + CC;
        document.getElementById(ElementId).focus();
    }


}



/*------------------------------------------------------------------------------
* NAME       :  
* PURPOSE    :  
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/
function backgroundColor(elementid , casenum){
    if(casenum == 1){
        document.getElementById(elementid).style.backgroundColor = 'yellow';
    }
    else{
        document.getElementById(elementid).style.backgroundColor = 'white';
    }
}



/*------------------------------------------------------------------------------
* NAME       :  
* PURPOSE    :  
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/

