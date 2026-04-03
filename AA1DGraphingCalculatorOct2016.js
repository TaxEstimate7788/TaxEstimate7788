    function nPr(n,k) {//nPr

        var r = 1;
        if (k > n) return 0;
        for (var d = 1; d <= k; d++) {
            r = r * (n + 1 - d);
        }

        r = Math.floor(r);

        return r;t
    }






/*------------------------------------------------------------------------------
 * NAME       : PopOutInputList123
 * PURPOSE    : Displays input list 
 * PARAMETERS :   
 * RETURNS    :  
 *----------------------------------------------------------------------------*/

function PopOutInputList123(num){
    //alert(num);

    if (num == 1) {
        document.getElementById('FindYGivenXInputList').value = document.getElementById('InputList1').value;
        document.getElementById('PopOutInputList1').style.display = 'none';
    
    }
    else{
        document.getElementById('FindXGivenYInputList').value = document.getElementById('InputList2').value;
        document.getElementById('PopOutInputList2').style.display = 'none';
    }

    TableY1234BB();
}

        function OnDragStart (event) {
            event.dataTransfer.setData ("text/plain", event.target.textContent);
            return true;
        }



function RecordPosition22(event){    
    var   mouseX = event.pageX ;
    var mouseY = event.pageY ;
    document.getElementById('posss').value = mouseX + ' , ' + mouseY;
}



/*------------------------------------------------------------------------------
* NAME       :  windowsetting
* PURPOSE    :  Displays view window settings
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/ 
function windowsetting(){
    var element1 = document.getElementById('MG22');
    var element2 = document.getElementById('windowsetting');//alert('111....'+element1.style.backgroundColor);
    if(element1.style.backgroundColor == 'silver'){
        element1.style.backgroundColor = 'yellow';
        element2.style.display = 'inline-block';
    }
    else{
        element1.style.backgroundColor = 'silver';
        element2.style.display = 'none';        
    }

}

/*------------------------------------------------------------------------------
* NAME       :  movinggraph
* PURPOSE    :  Displays "moving graph" settings
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/  
function movinggraph(){
    var element1 = document.getElementById('VW22');
    var element2 = document.getElementById('movinggraph');
    if(element1.style.backgroundColor == 'silver'){
        element1.style.backgroundColor = 'yellow';
        element2.style.display = 'inline-block';
    }
    else{
        element1.style.backgroundColor = 'silver';
        element2.style.display = 'none';        
    }
    

}

/*------------------------------------------------------------------------------
* NAME       :  gridmode
* PURPOSE    :  Displays "grid mode" settings
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/  
function gridmode(){
    var element1 = document.getElementById('GM22');
    var element2 = document.getElementById('gridmode');
    if(element1.style.backgroundColor == 'silver'){
        element1.style.backgroundColor = 'yellow';
        element2.style.display = 'inline-block';
    }
    else{
        element1.style.backgroundColor = 'silver';
        element2.style.display = 'none';        
    }   

}


/*------------------------------------------------------------------------------
* NAME       : closeGraphIneqdiv
* PURPOSE    : Closes panel for graphing linear and/or compound inequality
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/  
function closeGraphIneqdiv() {
    document.getElementById('graphOptions').style.display ='none';
    document.getElementById('labelyaxisreal').checked = true;
    document.getElementById('labelxaxispi').checked = true;
    document.getElementById('labelyaxispi').checked = true;
    document.getElementById('drawxaxis').checked = true;
    document.getElementById('drawyaxis').checked = true;
    document.getElementById('LabelPointCheckBox').checked = true;    
    document.getElementById('TextBoxForCartesianGraph2').value = '';
    document.getElementById('Point1X').value = '';
    document.getElementById('Point1Y').value = '';
    document.getElementById('Point2X').value = '';
    document.getElementById('Point2Y').value = '';
    CartesianMode(1);
    GraphingCalculator();
}


/*------------------------------------------------------------------------------
* NAME       : graphLinearIneq
* PURPOSE    : Graphs linear and/or compound inequality
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/  
function graphLinearIneq(casenum){
    document.getElementById('labelyaxisreal').checked = false;
    document.getElementById('labelxaxisreal').checked = true;
    document.getElementById('labelxaxispi').checked = false;
    document.getElementById('labelyaxispi').checked = false;
    document.getElementById('drawxaxis').checked = true;
    document.getElementById('drawyaxis').checked = false;
    document.getElementById('LabelPointCheckBox').checked = false;    
    document.getElementById('TextBoxForCartesianGraph2').value = '';
    document.getElementById('Point1X').value = '';
    document.getElementById('Point1Y').value = '';
    document.getElementById('Point2X').value = '';
    document.getElementById('Point2Y').value = '';
    CartesianMode(0);
    //ClearGraphs();

    if (casenum == 1) {     
        var sign = (document.getElementById('selectGraphIneqcase1').value).trim();
        var value = document.getElementById('GraphIneqcase1').value;
        document.getElementById('TextBoxForCartesianGraph2').value = '(0){x' + sign + value + '}';
        document.getElementById('Point1X').value = value;
        document.getElementById('Point1Y').value = 0;
        if (sign == 'â‰¥' || sign == 'â‰¤') {
            document.getElementById('Point1statusclose').checked = true;
        }
        else {
            document.getElementById('Point1statusopen').checked = true;
        }

    }
    else if (casenum == 2) {//alert(casenum)        
        var sign1 = (document.getElementById('selectGraphIneqcase2a').value).trim();
        var sign2 = (document.getElementById('selectGraphIneqcase2b').value).trim();

        var value1 = document.getElementById('GraphIneqcase2a').value;
        var value2 = document.getElementById('GraphIneqcase2b').value;

        document.getElementById('TextBoxForCartesianGraph2').value = '(0){' + value1 + sign1 + 'x' + sign2 + value2 + '}';
        document.getElementById('Point1X').value = value1;
        document.getElementById('Point1Y').value = 0;
        document.getElementById('Point2X').value = value2;
        document.getElementById('Point2Y').value = 0;

        if (sign1 == 'â‰¥' || sign1 == 'â‰¤') {
            document.getElementById('Point1statusclose').checked = true;
        }
        else {
            document.getElementById('Point1statusopen').checked = true;
        }

        if (sign2 == 'â‰¥' || sign2 == 'â‰¤') {
            document.getElementById('Point2statusclose').checked = true;
        }
        else {
            document.getElementById('Point2statusopen').checked = true;
        }


    }
    else if (casenum == 3) {//alert(casenum)        
        var sign1 = (document.getElementById('selectGraphIneqcase3a').value).trim();
        var sign2 = (document.getElementById('selectGraphIneqcase3b').value).trim();
        var value1 = document.getElementById('GraphIneqcase3a').value;
        var value2 = document.getElementById('GraphIneqcase3b').value;
        if ((sign1 == '<' || sign1 == 'â‰¤') && (sign2 == '<' || sign2 == 'â‰¤') && (parseFloat(value1) < parseFloat(value2))) {

            document.getElementById('TextBoxForCartesianGraph2').value = '(0){x ' + sign1 + value1 + '}';
            document.getElementById('Point1X').value = value1;
            document.getElementById('Point1Y').value = 0;
            if (sign1 == 'â‰¥' || sign1 == 'â‰¤') {
                document.getElementById('Point1statusclose').checked = true;
            }
            else {
                document.getElementById('Point1statusopen').checked = true;
            }
        }
        else if ((sign1 == '<' || sign1 == 'â‰¤') && (sign2 == '<' || sign2 == 'â‰¤') && (parseFloat(value1) > parseFloat(value2))) {
            document.getElementById('TextBoxForCartesianGraph2').value = '(0){ x ' + sign2 + value2 + '}';
            document.getElementById('Point1X').value = value2;
            document.getElementById('Point1Y').value = 0;
            if (sign1 == 'â‰¥' || sign1 == 'â‰¤') {
                document.getElementById('Point1statusclose').checked = true;
            }
            else {
                document.getElementById('Point1statusopen').checked = true;
            }
        }
        else if ((sign1 == '<' || sign1 == 'â‰¤') && (sign2 == '>' || sign2 == 'â‰¥') && (parseFloat(value1) < parseFloat(value2))) {
            var ineq = 'x ' + sign1 + value1 + ' and x ' + sign2 + value2;
            var msg = 'The compound inequality ' + ineq + ' has no solution.';
            alert(msg);
        }
        else if ((sign1 == '<' || sign1 == 'â‰¤') && (sign2 == '>' || sign2 == 'â‰¥') && (parseFloat(value1) > parseFloat(value2))) {
            document.getElementById('TextBoxForCartesianGraph2').value = '(0){' + value2 + sign2 + 'x' + sign1 + value1 + '}';
            document.getElementById('Point1X').value = value1;
            document.getElementById('Point1Y').value = 0;
            document.getElementById('Point2X').value = value2;
            document.getElementById('Point2Y').value = 0;
            if (sign1 == 'â‰¥' || sign1 == 'â‰¤') {
                document.getElementById('Point1statusclose').checked = true;
            }
            else {
                document.getElementById('Point1statusopen').checked = true;
            }

            if (sign2 == 'â‰¥' || sign2 == 'â‰¤') {
                document.getElementById('Point2statusclose').checked = true;
            }
            else {
                document.getElementById('Point2statusopen').checked = true;
            }

        }
        else if ((sign1 == '>' || sign1 == 'â‰¥') && (sign2 == '<' || sign2 == 'â‰¤') && (parseFloat(value1) < parseFloat(value2))) {
            document.getElementById('TextBoxForCartesianGraph2').value = '(0){' + value1 + 'â‰¤xâ‰¤' + value2 + '}';
            document.getElementById('Point1X').value = value1;
            document.getElementById('Point1Y').value = 0;
            document.getElementById('Point2X').value = value2;
            document.getElementById('Point2Y').value = 0;
            if (sign1 == 'â‰¥' || sign1 == 'â‰¤') {
                document.getElementById('Point1statusclose').checked = true;
            }
            else {
                document.getElementById('Point1statusopen').checked = true;
            }

            if (sign2 == 'â‰¥' || sign2 == 'â‰¤') {
                document.getElementById('Point2statusclose').checked = true;
            }
            else {
                document.getElementById('Point2statusopen').checked = true;
            }

        }
        else if ((sign1 == '>' || sign1 == 'â‰¥') && (sign2 == '<' || sign2 == 'â‰¤') && (parseFloat(value1) > parseFloat(value2))) {
            var ineq = 'x ' + sign1 + value1 + ' and x ' + sign2 + value2;
            var msg = 'The compound inequality ' + ineq + ' has no solution.';
            alert(msg);
        }
        else if ((sign1 == '>' || sign1 == 'â‰¥') && (sign2 == '>' || sign2 == 'â‰¥') && (parseFloat(value1) < parseFloat(value2))) {
            document.getElementById('TextBoxForCartesianGraph2').value = '(0){x' + sign2 + value2 + '}';
            document.getElementById('Point1X').value = value2;
            document.getElementById('Point1Y').value = 0;
            if (sign2 == 'â‰¥' || sign2 == 'â‰¤') {
                document.getElementById('Point1statusclose').checked = true;
            }
            else {
                document.getElementById('Point1statusopen').checked = true;
            }

        }
        else if ((sign1 == '>' || sign1 == 'â‰¥') && (sign2 == '>' || sign2 == 'â‰¥') && (parseFloat(value1) > parseFloat(value2))) {
            document.getElementById('TextBoxForCartesianGraph2').value = '(0){x' + sign1 + value1 + '}';
            document.getElementById('Point1X').value = value1;
            document.getElementById('Point1Y').value = 0;
            if (sign1 == 'â‰¥' || sign1 == 'â‰¤') {
                document.getElementById('Point1statusclose').checked = true;
            }
            else {
                document.getElementById('Point1statusopen').checked = true;
            }

        }
    }
    else if (casenum == 4) {//alert(casenum)        
        var sign1 = (document.getElementById('selectGraphIneqcase4a').value).trim();
        var sign2 = (document.getElementById('selectGraphIneqcase4b').value).trim();
        var value1 = document.getElementById('GraphIneqcase4a').value;
        var value2 = document.getElementById('GraphIneqcase4b').value;
        if ((sign1 == '<' || sign1 == 'â‰¤') && (sign2 == '<' || sign2 == 'â‰¤') && (parseFloat(value1) < parseFloat(value2))) {//case 41            
            document.getElementById('TextBoxForCartesianGraph2').value = '(0){x ' + sign2 + value2 + '}';
            document.getElementById('Point1X').value = value2;
            document.getElementById('Point1Y').value = 0;
            if (sign2 == 'â‰¥' || sign2 == 'â‰¤') {
                document.getElementById('Point1statusclose').checked = true;
            }
            else {
                document.getElementById('Point1statusopen').checked = true;
            }
        }
        else if ((sign1 == '<' || sign1 == 'â‰¤') && (sign2 == '<' || sign2 == 'â‰¤') && (parseFloat(value1) > parseFloat(value2))) {//case 42
            document.getElementById('TextBoxForCartesianGraph2').value = '(0){ x ' + sign1 + value1 + '}';
            document.getElementById('Point1X').value = value1;
            document.getElementById('Point1Y').value = 0;
            if (sign1 == 'â‰¥' || sign1 == 'â‰¤') {
                document.getElementById('Point1statusclose').checked = true;
            }
            else {
                document.getElementById('Point1statusopen').checked = true;
            }
        }
        else if ((sign1 == '<' || sign1 == 'â‰¤') && (sign2 == '>' || sign2 == 'â‰¥') && (parseFloat(value1) < parseFloat(value2))) {//case 43 
            document.getElementById('TextBoxForCartesianGraph2').value = '(0){x' + sign1 + value1 + '}+' + '(0){x' + sign2 + value2 + '}';
            document.getElementById('Point1X').value = value1;
            document.getElementById('Point1Y').value = 0;
            document.getElementById('Point2X').value = value2;
            document.getElementById('Point2Y').value = 0;
            if (sign1 == 'â‰¥' || sign1 == 'â‰¤') {
                document.getElementById('Point1statusclose').checked = true;
            }
            else {
                document.getElementById('Point1statusopen').checked = true;
            }

            if (sign2 == 'â‰¥' || sign2 == 'â‰¤') {
                document.getElementById('Point2statusclose').checked = true;
            }
            else {
                document.getElementById('Point2statusopen').checked = true;
            }
        }
        else if ((sign1 == '<' || sign1 == 'â‰¤') && (sign2 == '>' || sign2 == 'â‰¥') && (parseFloat(value1) > parseFloat(value2))) {//case 44
            document.getElementById('TextBoxForCartesianGraph2').value = '0';
            var msg = 'Solution set for this compound inequality is the set of all real numbers = (-âˆž , âˆž) = â„';
            alert(msg);
        }
        else if ((sign1 == '>' || sign1 == 'â‰¥') && (sign2 == '<' || sign2 == 'â‰¤') && (parseFloat(value1) < parseFloat(value2))) {//case 45
            document.getElementById('TextBoxForCartesianGraph2').value = '0';
            var msg = 'Solution set for this compound inequality is the set of all real numbers = (-âˆž , âˆž) = â„';
            alert(msg);
        }
        else if ((sign1 == '>' || sign1 == 'â‰¥') && (sign2 == '<' || sign2 == 'â‰¤') && (parseFloat(value1) > parseFloat(value2))) {//case 46
            document.getElementById('TextBoxForCartesianGraph2').value = '(0){x' + sign2 + value2 + '}+' + '(0){x' + sign1 + value1 + '}';
            document.getElementById('Point1X').value = value1;
            document.getElementById('Point1Y').value = 0;
            document.getElementById('Point2X').value = value2;
            document.getElementById('Point2Y').value = 0;
            if (sign1 == 'â‰¥' || sign1 == 'â‰¤') {
                document.getElementById('Point1statusclose').checked = true;
            }
            else {
                document.getElementById('Point1statusopen').checked = true;
            }

            if (sign2 == 'â‰¥' || sign2 == 'â‰¤') {
                document.getElementById('Point2statusclose').checked = true;
            }
            else {
                document.getElementById('Point2statusopen').checked = true;
            }
        }
        else if ((sign1 == '>' || sign1 == 'â‰¥') && (sign2 == '>' || sign2 == 'â‰¥') && (parseFloat(value1) < parseFloat(value2))) {
            document.getElementById('TextBoxForCartesianGraph2').value = '(0){x' + sign1 + value1 + '}';
            document.getElementById('Point1X').value = value1;
            document.getElementById('Point1Y').value = 0;
            if (sign1 == 'â‰¥' || sign1 == 'â‰¤') {
                document.getElementById('Point1statusclose').checked = true;
            }
            else {
                document.getElementById('Point1statusopen').checked = true;
            }

        }
        else if ((sign1 == '>' || sign1 == 'â‰¥') && (sign2 == '>' || sign2 == 'â‰¥') && (parseFloat(value1) > parseFloat(value2))) {
            document.getElementById('TextBoxForCartesianGraph2').value = '(0){x' + sign2 + value2 + '}';
            document.getElementById('Point1X').value = value2;
            document.getElementById('Point1Y').value = 0;
            if (sign2 == 'â‰¥' || sign2 == 'â‰¤') {
                document.getElementById('Point1statusclose').checked = true;
            }
            else {
                document.getElementById('Point1statusopen').checked = true;
            }

        }
    }
    else if (casenum == 5) { 
        var value = document.getElementById('GraphIneqcase5').value;
        if (value.indexOf('{') > -1 && value.indexOf('}') > -1) { 
            var value = value.replace('{','');
            var value = value.replace('}','');
            if(value.indexOf(',') > -1){
                var valueArray = value.split(',');
            }
            else{
                var valueArray = [value];
            }

            for(var i=1; i<=valueArray.length;i++){
                document.getElementById('Point'+i+'X').value = valueArray[i-1];
                document.getElementById('Point'+i+'Y').value = 0;
            }

            GraphingCalculator22();
            return;
        }



        var dd = '';
        if (value.indexOf('âˆª') > -1) {
            var IntervalArray = value.split('âˆª');
            for(var i=1; i<=IntervalArray.length;i++){
                dd += processInterval(IntervalArray[i - 1]);
            }
        }
        else{
            dd = processInterval(value);       
        }


        if(dd.charAt(0) == '+'){
            dd = dd.substring(1);
        }

        document.getElementById('TextBoxForCartesianGraph2').value = dd;
    }
    
    GraphingCalculator();
    //mr();//minimum resolution

}

function processInterval(str){
    str = replaceAll(str, ' ', '');
    if(str == '(-âˆž,âˆž)'){
        return '0';
    }

    var tt = str.split(',');
    //alert('tt='+tt[0]);

    if(tt[0] == '(-âˆž' && tt[1].indexOf(')') > -1){
       var returnstr = '(0){x < ' + tt[1].replace(')','') + '}';
    }
    else if(tt[0] == '(-âˆž' && tt[1].indexOf(']') > -1){
        var returnstr =  '(0){x â‰¤ ' + tt[1].replace(')','') + '}';
    }        
    else if(tt[1] == 'âˆž)' && tt[0].indexOf('(') > -1){
        var returnstr =  '(0){x > ' + tt[0].replace('(','') + '}';
    } 
    else if(tt[1] == 'âˆž)' && tt[0].indexOf('[') > -1){
        var returnstr =  '(0){x â‰¥ ' + tt[0].replace('(','') + '}';
    } 
    else if( tt[0].indexOf('(') >-1 && tt[1].indexOf(')') > -1){
        var returnstr =  '(0){' + tt[0].replace('(','') + ' < x < ' +  tt[1].replace(')','')  + '}';
    }   
    else if( tt[0].indexOf('[') >-1 && tt[1].indexOf(']') > -1){
        var returnstr =  '(0){' + tt[0].replace('(','') + ' â‰¤ x â‰¤ ' +  tt[1].replace(')','')  + '}';
    }  
    else if( tt[0].indexOf('(') > -1 && tt[1].indexOf(']') > -1){
        var returnstr =  '(0){' + tt[0].replace('(','') + ' < x â‰¤ ' +  tt[1].replace(')','')  + '}';
    } 
    else if( tt[0].indexOf('[') > -1 && tt[1].indexOf(')') > -1){
        var returnstr =  '(0){' + tt[0].replace('(','') + ' â‰¤ x < ' +  tt[1].replace(')','')  + '}';
    }

    //alert(' returnstr ...' + returnstr);
    return returnstr;
}



/*------------------------------------------------------------------------------
* NAME       : closeGraphIneq234div
* PURPOSE    : Closes   "GraphIneq234" <div></div> 
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function closeGraphIneq234div(){
        var el = document.getElementById('GraphIneq234');
        el.parentNode.removeChild(el);
        closeGraphIneqdiv();
    }


/*------------------------------------------------------------------------------
* NAME       : graphingInequality234
* PURPOSE    : Creates  "GraphIneq234" <div></div> for graphing linear and compound inequality
* PARAMETERS :  
* RETURNS    :  
*----------------------------------------------------------------------------*/
    function graphingInequality234() {
        var div = document.createElement("div");
        div.id = "GraphIneq234";
        div.style.position = "absolute";
        //div.style.display = 'inline-block';
        div.style.top = "10px";
        div.style.left = "640px";
        div.style.height = "430px";
        div.style.backgroundColor = "white";
        div.style.border = "solid";
        div.style.borderColor = "green";
        div.style.overflow = "scroll";
        div.style.fontSize = "24px";
        div.style.padding = "10px";
        div.style.color = "black"; 
        div.style.fontFamily = "black"; 
        div.style.fontWeight = "bold"; 
        div.style.zIndex = '99';
        //<div id="GraphIneq"   style="display: none ;font-size: 24px;  white-space: nowrap;padding: 5px ;overflow: scroll ;background-color: white;position: absolute;top:10px;left: 630px;font-size: 40px; color: black; font-family: black; font-weight: bold;  border-style: solid; border-color:  #ff6a00">		

        var myString = function(){/*
            Graphing Linear and Compound Inequality<br>
            1)&nbsp;&nbsp;x 
            <select id="selectGraphIneqcase1" style="font-size: 25px;background-color: white;-webkit-appearance: none;-moz-appearance: none;">
                <option value="<" style="font-size: 25px;width: 50px;height:40px; ">&lt;</option>
                <option value="â‰¤" style="font-size: 25px;width: 50px;height:40px; ">&le;</option>
                <option value=">" style="font-size: 25px;width: 50px;height:40px; ">&gt;</option>
                <option value="â‰¥" style="font-size: 25px;width: 50px;height:40px; ">&ge;</option>   
            </select>
            <input id = "GraphIneqcase1" type="text"  value="1" onfocus="this.style.backgroundColor='yellow';" onblur="this.style.backgroundColor='beige';" 
            style="  height:40px;  width:100px; color: black; font-family: black; font-weight: bold; font-size: 25px; ;"		
            onclick="currentID()" autocomplete="off"/>
            <input type="button"  value="Submit" onclick="graphLinearIneq('1')"   style=" width: 100px;height:40px; font-size: 24px;background-color: #ffd800; " />	
            <br><br>
            2)&nbsp;&nbsp;
            <input id = "GraphIneqcase2a" type="text"  value="1" onfocus="this.style.backgroundColor='yellow';" onblur="this.style.backgroundColor='beige';" 
            style="  height:40px;  width:100px; color: black; font-family: black; font-weight: bold; font-size: 25px; ;"		
                    onclick="currentID()" autocomplete="off"/>
            <select id="selectGraphIneqcase2a" style="font-size: 25px;background-color: white;-webkit-appearance: none;-moz-appearance: none;">
                <option value="<" style="font-size: 25px;width: 50px;height:40px; ">&lt;</option>
                <option value="â‰¤" style="font-size: 25px;width: 50px;height:40px; ">&le;</option>
                <option value=">" style="font-size: 25px;width: 50px;height:40px; ">&gt;</option>
                <option value="â‰¥" style="font-size: 25px;width: 50px;height:40px; ">&ge;</option>   
            </select>
            x 
            <select id="selectGraphIneqcase2b" style="font-size: 25px;background-color: white;-webkit-appearance: none;-moz-appearance: none;">
                <option value="<" style="font-size: 25px;width: 50px;height:40px; ">&lt;</option>
                <option value="â‰¤" style="font-size: 25px;width: 50px;height:40px; ">&le;</option>
                <option value=">" style="font-size: 25px;width: 50px;height:40px; ">&gt;</option>
                <option value="â‰¥" style="font-size: 25px;width: 50px;height:40px; ">&ge;</option>   
            </select>
            <input id = "GraphIneqcase2b" type="text"  value="6" onfocus="this.style.backgroundColor='yellow';" onblur="this.style.backgroundColor='beige';" 
                style="  height:40px;  width:100px; color: black; font-family: black; font-weight: bold; font-size: 25px; ;"		
                onclick="currentID()" autocomplete="off"/>
            <input type="button"  value="Submit" onclick="graphLinearIneq('2')"   style=" width: 100px;height:40px; font-size: 24px;background-color: #ffd800; " />	
            <br><br>
            3)&nbsp;&nbsp;
            x 
            <select id="selectGraphIneqcase3a" style="font-size: 25px;background-color: white;-webkit-appearance: none;-moz-appearance: none;">
                <option value="<" style="font-size: 25px;width: 50px;height:40px; ">&lt;</option>
                <option value="â‰¤" style="font-size: 25px;width: 50px;height:40px; ">&le;</option>
                <option value=">" style="font-size: 25px;width: 50px;height:40px; ">&gt;</option>
                <option value="â‰¥" style="font-size: 25px;width: 50px;height:40px; ">&ge;</option>   
            </select>
            <input id = "GraphIneqcase3a" type="text"  value="1" onfocus="this.style.backgroundColor='yellow';" onblur="this.style.backgroundColor='beige';" 
                style="  height:40px;  width:100px; color: black; font-family: black; font-weight: bold; font-size: 25px; ;"		
                onclick="currentID()" autocomplete="off"/>
            &nbsp;AND&nbsp;
            x 
            <select id="selectGraphIneqcase3b" style="font-size: 25px;background-color: white;-webkit-appearance: none;-moz-appearance: none;">
                <option value="<" style="font-size: 25px;width: 50px;height:40px; ">&lt;</option>
                <option value="â‰¤" style="font-size: 25px;width: 50px;height:40px; ">&le;</option>
                <option value=">" style="font-size: 25px;width: 50px;height:40px; ">&gt;</option>
                <option value="â‰¥" style="font-size: 25px;width: 50px;height:40px; ">&ge;</option>   
            </select>
            <input id = "GraphIneqcase3b" type="text"  value="6" onfocus="this.style.backgroundColor='yellow';" onblur="this.style.backgroundColor='beige';" 
                style="  height:40px;  width:100px; color: black; font-family: black; font-weight: bold; font-size: 25px; ;"		
                onclick="currentID()" autocomplete="off"/>
            <input type="button"  value="Submit" onclick="graphLinearIneq('3')"   style=" width: 100px;height:40px; font-size: 24px;background-color: #ffd800; " />	
            <br> <br>  
            4)&nbsp;&nbsp;
            x 
            <select id="selectGraphIneqcase4a" style="font-size: 25px;background-color: white;-webkit-appearance: none;-moz-appearance: none;">
                <option value="<" style="font-size: 25px;width: 50px;height:40px; ">&lt;</option>
                <option value="â‰¤" style="font-size: 25px;width: 50px;height:40px; ">&le;</option>
                <option value=">" style="font-size: 25px;width: 50px;height:40px; ">&gt;</option>
                <option value="â‰¥" style="font-size: 25px;width: 50px;height:40px; ">&ge;</option>   
            </select>
            <input id = "GraphIneqcase4a" type="text"  value="1" onfocus="this.style.backgroundColor='yellow';" onblur="this.style.backgroundColor='beige';" 
                style="  height:40px;  width:100px; color: black; font-family: black; font-weight: bold; font-size: 25px; ;"		
                onclick="currentID()" autocomplete="off"/>
            &nbsp;OR&nbsp;
            x 
            <select id="selectGraphIneqcase4b" style="font-size: 25px;background-color: white;-webkit-appearance: none;-moz-appearance: none;">
                <option value="<" style="font-size: 25px;width: 50px;height:40px; ">&lt;</option>
                <option value="â‰¤" style="font-size: 25px;width: 50px;height:40px; ">&le;</option>
                <option value=">" style="font-size: 25px;width: 50px;height:40px; ">&gt;</option>
                <option value="â‰¥" style="font-size: 25px;width: 50px;height:40px; ">&ge;</option>   
            </select>
            <input id = "GraphIneqcase4b" type="text"  value="7" onfocus="this.style.backgroundColor='yellow';" onblur="this.style.backgroundColor='beige';" 
                style="  height:40px;  width:100px; color: black; font-family: black; font-weight: bold; font-size: 25px; ;"		
                onclick="currentID()" autocomplete="off"/>
            <input type="button"  value="Submit" onclick="graphLinearIneq('4')"   style=" width: 100px;height:40px; font-size: 24px;background-color: #ffd800; " />	
            <br>
            <span style="color:green;font-size:25px" >&larr; 
            <button type="button" onclick="" style="font-size:20px;width:40px;height:40px;border-radius:100%;background-color:lime;">KP</button>
            Keypad
            </span>
            <br><br>                   
            <input type="button"  value="CLOSE" onclick="closeGraphIneq234div()" class="btswhite" style=" width: 200px;height:40px; font-size: 25px;background-color: #b6ff00 " />	
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;More Options &darr;
            <br><br><br>
            Input Examples: <br>{4,5,3/2} ; (-âˆž , 4)âˆª(4, 8)âˆª(8 , âˆž) ; (-âˆž , 4]âˆª[4, 8]âˆª[8 , âˆž)
            <br><br>
            5)&nbsp;&nbsp;
            <input id = "GraphIneqcase5" type="text"  value="(-âˆž , 4)âˆª(4, 8)âˆª(8 , âˆž)" onfocus="this.style.backgroundColor='yellow';" onblur="this.style.backgroundColor='beige';" 
                style="  height:40px;  width:400px; color: black; font-family: black; font-weight: bold; font-size: 25px; ;"		
                onclick="currentID()" autocomplete="off"/>
            <input type="button"  value="Submit" onclick="graphLinearIneq('5')"   style=" width: 100px;height:40px; font-size: 24px;background-color: #ffd800; " />	
            <br>
            <table>
            <tr>
                <td onclick="CalculusLetter('35')" style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:45px; font-size: 20px;">âˆª</sup></td>
                <td style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:45px; font-size: 20px;" onclick="keypadforgrid(1)">-&infin;</td>
                <td style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:45px; font-size: 20px;" onclick="keypadforgrid(2)">&infin;</td>
                <td style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:45px; font-size: 20px;" onclick="leftbracket()">[</td>
                <td style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:45px; font-size: 20px;" onclick="rightbracket()">]</td>
                <td style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:45px; font-size: 20px;"  onclick="leftbrace()">{</td>
                <td style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:45px; font-size: 20px;" onclick="rightbrace()">}</td>
                <td style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:45px; font-size: 20px;" onclick="leftparenthesis()">(</td>
                <td style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:45px; font-size: 20px;" onclick="rightparenthesis()">)</td>
                <td style="border-style: solid; border-width: 1px; border-color: black; text-align: center; width:45px; height:45px; font-size: 20px;" onclick="comma2()">,</td>

            </tr>
            </table> 
            <br>
            <button onclick="document.getElementById('GraphIneqcase5').value = '{4,5,3/2}'" style="border-style: solid; border-width: 1px; border-color: black; text-align: center; height:45px; font-size: 20px;">Input {4,5,3/2}</button>
            <br>
            <button onclick="document.getElementById('GraphIneqcase5').value = '(-âˆž , 4)âˆª(4, 8)âˆª(8 , âˆž)'" style="border-style: solid; border-width: 1px; border-color: black; text-align: center; height:45px; font-size: 20px;">Input (-âˆž , 4)âˆª(4, 8)âˆª(8 , âˆž)</button>
            <br>
            <button onclick="document.getElementById('GraphIneqcase5').value = '(-âˆž , 4]âˆª[4, 8]âˆª[8 , âˆž)'" style="border-style: solid; border-width: 1px; border-color: black; text-align: center; height:45px; font-size: 20px;">Input (-âˆž , 4]âˆª[4, 8]âˆª[8 , âˆž)</button>

 

            <br><br><br><br>
            */}.toString().slice(14,-1);

        var myString2 = (myString.toString()).replace('*/}', '');
        myString2 = myString2.replace('*/', '');
        //slice(14,-1); start at character 14; -1 means go to the end
        div.innerHTML = myString2;
        document.body.appendChild(div);
        return;
    }


/*------------------------------------------------------------------------------
* NAME       :  checkbox11()
* PURPOSE    :  Turns on/off feature
* PARAMETERS :   
* RETURNS    :   
*   
*----------------------------------------------------------------------------*/
function checkbox11(){
    if(document.getElementById('ExpressYasFractionCheckbox').checked){
       document.getElementById('ExpressYasFractionCheckbox').checked = false;
        document.getElementById('checkbox11button').style.backgroundColor = '#eae6e0';
    }
    else{
       document.getElementById('ExpressYasFractionCheckbox').checked = true;
        document.getElementById('checkbox11button').style.backgroundColor = 'yellow';
    }
    TableY1234BB();        
}

    
/*------------------------------------------------------------------------------
* NAME       :  checkbox12()
* PURPOSE    :  Turns on/off feature
* PARAMETERS :   
* RETURNS    :   
*   
*----------------------------------------------------------------------------*/
function checkbox12(){
    if(document.getElementById('ExpressAsPiCheckbox').checked){
        document.getElementById('ExpressAsPiCheckbox').checked = false;
        document.getElementById('checkbox12button').style.backgroundColor = '#eae6e0';
    }
    else{
        document.getElementById('ExpressAsPiCheckbox').checked = true;
        document.getElementById('checkbox12button').style.backgroundColor = 'yellow';
    }
    TableY1234BB();        
}

/*------------------------------------------------------------------------------
* NAME       :  checkbox13()
* PURPOSE    :  Turns on/off feature
* PARAMETERS :   
* RETURNS    :   
*   
*----------------------------------------------------------------------------*/
function checkbox13(){
    if(document.getElementById('TableCartesianDetailCheckbox').checked){
        document.getElementById('TableCartesianDetailCheckbox').checked = false;
        document.getElementById('checkbox13button').style.backgroundColor = '#eae6e0';
    }
    else{
        document.getElementById('TableCartesianDetailCheckbox').checked = true;
        document.getElementById('checkbox13button').style.backgroundColor = 'yellow';
    }
    TableY1234BB();        
}


/*------------------------------------------------------------------------------
* NAME       :  drawVector
* PURPOSE    :  Draws vector on grid
* PARAMETERS :  initial point (x1,y1) and terminal point (x2, y2)
* RETURNS    :  vector on grid
*   
*----------------------------------------------------------------------------*/
    function drawVector(x1,y1,x2,y2,thickness,color, radius) {
        var can = document.getElementById('canvas');
        var ctx = can.getContext('2d');

        ctx.lineWidth = thickness;//5;
        ctx.strokeStyle = color;//'blue';//steelblue';
        ctx.fillStyle = color;//'blue';//'steelbllue'; // for the triangle fill
        ctx.lineJoin = 'butt';

        ctx.beginPath();
        //ctx.moveTo(50, 50);
        //ctx.lineTo(280, 380);
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();

        canvas_arrow(ctx, x1,y1,x2,y2,radius);
        //canvas_arrow2(ctx, 150, 150, 50, 50, 10);
    }

    function canvas_arrow(context, fromx, fromy, tox, toy, r) {
        var x_center = tox;
        var y_center = toy;

        var angle;
        var x;
        var y;

        context.beginPath();

        angle = Math.atan2(toy - fromy, tox - fromx)
        x = r * Math.cos(angle) + x_center;
        y = r * Math.sin(angle) + y_center;

        context.moveTo(x, y);

        angle += (1 / 3) * (2 * Math.PI)
        x = r * Math.cos(angle) + x_center;
        y = r * Math.sin(angle) + y_center;

        context.lineTo(x, y);

        angle += (1 / 3) * (2 * Math.PI)
        x = r * Math.cos(angle) + x_center;
        y = r * Math.sin(angle) + y_center;

        context.lineTo(x, y);

        context.closePath();

        context.fill();
    }


/*------------------------------------------------------------------------------
* NAME       :  JacobianTransformation
* PURPOSE    :  Plot original points and transformed points
* PARAMETERS :  original points, function u, function
* RETURNS    :  plot of transformed points
*   
*----------------------------------------------------------------------------*/
    function JacobianTransformation(num) {
        var jp = document.getElementById("JacobianPoints").value;
        var ju = document.getElementById("JacobianU").value; 
        var jv =document.getElementById("JacobianV").value; 

        var can = document.getElementById('canvas');
        var ctx = can.getContext('2d');

        jp = replaceAll(jp, ' ', '');
        jp = jp.substr(1, jp.length - 2);
        
        if(jp.indexOf(')(') > -1){
            var jpArr = jp.split(')(');
        }
        else{
            var jpArr = [jp];
        }

      
      //alert('jpArr = ' + jpArr);
    for(var i = 1; i <=  40; i++){
        document.getElementById("Point" + i + "X").value = '';
        document.getElementById("Point" + i + "Y").value = '';
    }

      var output = '';
      var nn = jpArr.length;
      for(var i = 0; i < jpArr.length; i++){
        var tt = jpArr[i];
        var ss = tt.split(',');
        var xt = FindValue(ss[0]);
        var yt = FindValue(ss[1]);
        document.getElementById("Point" + (i+1) + "X").value = xt;
        document.getElementById("Point" + (i+1) + "Y").value = yt;
        document.getElementById("Point" + (i+1) + "statusopen").checked = true;

        if(num == 1){
            var jut = replaceAll(ju, 'x', '('+ xt +')');
            jut = replaceAll(jut, 'y', '('+ yt +')');
            var uu = FindValue(jut);

            var jvt = replaceAll(jv, 'x', '('+ xt +')');
            jvt = replaceAll(jvt, 'y', '('+ yt +')');
            var vv = FindValue(jvt);
            document.getElementById("Point" + (i+2+nn) + "X").value = uu;
            document.getElementById("Point" + (i+2+nn) + "Y").value = vv;
            document.getElementById("Point" + (i+2+nn) + "statusclose").checked = true;
            output += '(' + xt + ',' + yt + ') &#10145 (' +  uu + ',' + vv + ')<br>'; 
         }
       }
       
        document.getElementById('LabelPointCheckBox').checked = false;
        document.getElementById("pointsizeL").checked = true;
        //document.getElementById('AllGraphSameColor').checked = true;
        //document.getElementById('mydropdownreflection77').value = 1;//blue
        document.getElementById("checkboxCartesianPoints").checked = true;
        GraphingCalculator();

        document.getElementById("JacobianOutput").innerHTML = output + '<br><br><br><br><br>';
      
      return;
    } 


    function JacobianTransformationClear(){
        document.getElementById("JacobianPoints").value = '';
        document.getElementById("JacobianU").value = ''; 
        document.getElementById("JacobianV").value = ''; 

    }


    function JacobianTransformationExample(){
        document.getElementById("JacobianPoints").value = '(0,1) (1,2) (2,1) (1,0)';
        document.getElementById("JacobianU").value = 'x - y'; 
        document.getElementById("JacobianV").value = 'x + y'; 
    }




/*------------------------------------------------------------------------------
* NAME       :  CreateTextboxFordrawVector
* PURPOSE    :  Creates textboxes for input of initial point (x1,y1) and terminal point (x2, y2)
* PARAMETERS :  
* RETURNS    :  
*   
*----------------------------------------------------------------------------*/

function CreateTextboxFordrawVector(){
        //alert('CreateTextboxFordrawVector');
        var myString = function(){/*
        <div style="width: 580px; height: 65px; background-color: rgba(230, 247, 251, 0.74); border-style: solid; border-color: black"  onmouseout="display2()" onmouseover="display('24')" >
        <span style="font-size: x-large" title="checkbox must be checked in order to draw vector."    >Draw Vector  
        &nbsp;&nbsp;  &nbsp;&nbsp;  
        <input id="checkboxDrawVector"  type="checkbox" checked type="text"  value="1"  onclick=" GraphingCalculator()"/>		
          on/off 
        &nbsp;&nbsp;&nbsp;&nbsp;   
        <input id="LabelDrawVectorCheckBox"  type="checkbox" checked type="text"  value="1" checked    onclick=" GraphingCalculator()"/>		
          Label 
        </span>
        &nbsp;&nbsp;&nbsp;&nbsp; 
        &nbsp;		
        <input type="button"  value="Draw Vector" onclick="GraphingCalculator34()" style="background-color: #ffd800; height:30px; left:1000px" />		
        <br> 
        <span style="font-size: large">Vector Thickness:&nbsp;&nbsp; </span> 
        <input type="radio" id="vectorsizeL"  name="pointsize"   checked="checked"  onclick="GraphingCalculator()"/>
        <span style="font-size: large">Large &nbsp;&nbsp;  </span>               
        <input type="radio" id="vectorsizeM"  name="pointsize"  onclick="GraphingCalculator()"/> 
        <span style="font-size: large">Medium &nbsp;&nbsp; </span>               
        <input type="radio" id="vectorsizeS"  name="pointsize"   onclick="GraphingCalculator()"/> 
        <span style="font-size: large">Small &nbsp;&nbsp; </span>    
        &nbsp;		
        <input type="button"  value="CLEAR" onclick="clearDrawVector()" class="btswhite"		
                style="background-color: cyan; height:30px; left:1000px" />	<br> 
        </div>

        <div  id="panelDrawVector" style="width: 540px; height: 300px; padding: 5px; overflow-x: hidden;  overflow-y: scroll; border-style: solid; border-color: black; background-color: rgba(230, 247, 251, 0.74)" >	
        </div> 
        <br>
        <div  id="panelDrawVector2" style="font-size:24px;width: 540px; height: 250px; padding: 5px; overflow-x: hidden;  overflow-y: scroll; border-style: solid; border-color: black; background-color: rgba(230, 247, 251, 0.74)" >	
        </div><br>
        <div  id="panelDrawVector3" style="font-size:24px;width: 540px; height: 200px; padding: 5px; overflow-x: hidden;  overflow-y: scroll; border-style: solid; border-color: black; background-color: rgba(230, 247, 251, 0.74)" >	
        </div><br>
        <div  id="panelDrawVector4" style="font-size:24px;width: 540px; height: 200px; padding: 5px; overflow-x: hidden;  overflow-y: scroll; border-style: solid; border-color: black; background-color: rgba(230, 247, 251, 0.74)" >	
        </div><br>
        <div  id="panelDrawVector5" style="font-size:24px;width: 540px; height: 200px; padding: 5px; overflow-x: hidden;  overflow-y: scroll; border-style: solid; border-color: black; background-color: rgba(230, 247, 251, 0.74)" >	
        </div><br>
        <div  id="drawvectorbbcc" style="font-size:24px;width: 540px; height: 200px; padding: 5px; overflow-x: hidden;  overflow-y: scroll; border-style: solid; border-color: black; background-color: rgba(230, 247, 251, 0.74)" >	
        </div><br>
       
        <div  id="panelDrawVector6" style="font-size:24px;width: 540px; height: 250px; padding: 5px; overflow-x: hidden;  overflow-y: scroll; border-style: solid; border-color: black; background-color: rgba(230, 247, 251, 0.74)" >	
        </div><br>
        <div  id="panelDrawVector6bb" style="font-size:24px;width: 840px; height: 500px; padding: 5px; overflow-x: hidden;  overflow-y: scroll; border-style: solid; border-color: black; background-color: rgba(230, 247, 251, 0.74)" >	
        </div><br>

        <br><br><br><br><br><br><br><br><br><br>*/}.toString().slice(14, -1);       

    var myString2 = (myString.toString()).replace('*/}', '');
    myString2 = myString2.replace('*/', '');        
    //alert('CreateTextboxFordrawVector');
    document.getElementById('drawvector').innerHTML = myString2;


    var DrawVectorText = '';
    for(var i = 1; i<= 10; i++){
        DrawVectorText = DrawVectorText 
        + '<span style="font-size: x-large">'+i+')&nbsp;&nbsp;&nbsp; Initial Point (</span>' 		
        + '<input id = "InitialPointX'+i+'" type="text" size="4" value="0" onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()" style="height: 30px; margin-top: 10px;  width:75px; color: black; font-family: black; font-weight: bold; font-size: 20px; ;" autocomplete="off"   />'		
        + '<span style="font-size: large">,</span>'			
        + '<input id = "InitialPointY'+i+'" type="text" size="4" value="0" 	onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()" style="height: 30px; margin-top: 10px;  width:75px; color: black; font-family: black; font-weight: bold; font-size: 20px; ;" autocomplete="off"   />'		
        + '<span style="font-size: x-large">)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	</span> <br>'      	
        + '<span style="font-size: x-large">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Terminal Point (</span>'		
        + '<input id = "TerminalPointX'+i+'" type="text" size="4" value="" onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()" style="height: 30px; margin-top: 10px;  width:75px; color: black; font-family: black; font-weight: bold; font-size: 20px; ;" autocomplete="off"   />'		
        + '<span style="font-size: large">,</span>'		
   	    + '<input id = "TerminalPointY'+i+'" type="text" size="4" value="" onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()" style="height: 30px; margin-top: 10px;  width:75px; color: black; font-family: black; font-weight: bold; font-size: 20px; ;" autocomplete="off"   />'		
     	+ '<span style="font-size: x-large">)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br> <br>';   
    }

    document.getElementById('panelDrawVector').innerHTML = DrawVectorText + '<br> <br><br> <br><br> <br>'; 

    var DrawVectorText = 'Drawing Parallel Vector: <br>Draw a vector that is parallel to vector #'
        + '<input id = "parallelvectorNum" type="text" value="" 	onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()" style="height: 30px; margin-top: 10px;  width:30px; color: black; font-family: black; font-weight: bold; font-size: 20px; ;" autocomplete="off"   />'		
        + '<br>with initial point at ('
        + '<input id = "parallelvectorX" type="text" value="" 	onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()" style="height: 30px; margin-top: 10px;  width:70px; color: black; font-family: black; font-weight: bold; font-size: 20px; ;" autocomplete="off"   />,'		
        + '<input id = "parallelvectorY" type="text" value="" 	onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()" style="height: 30px; margin-top: 10px;  width:70px; color: black; font-family: black; font-weight: bold; font-size: 20px; ;" autocomplete="off"   />)'		
        + '<br>Store new vector in slot # '
        + '<input id = "parallelvectorNum2" type="text" value="" 	onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()" style="height: 30px; margin-top: 10px;  width:30px; color: black; font-family: black; font-weight: bold; font-size: 20px; ;" autocomplete="off"   />'		
        + '<br>New vector is '
        + '<input id = "parallelvectorNum3" type="text" value="1" 	onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()" style="height: 30px; margin-top: 10px;  width:30px; color: black; font-family: black; font-weight: bold; font-size: 20px; ;" autocomplete="off"   />'		
        + ' times original vector<br>'
        + '<input type="button"  value="Submit" onclick="DrawParallelVector()" style="background-color: #ffd800; height:30px; left:1000px" />'
        ;
    
    document.getElementById('panelDrawVector2').innerHTML = DrawVectorText + '<br> <br><br> <br><br> <br>'; 

    var DrawVectorText = 'Drawing Unit Vector: <br>Draw a unit vector in the direction of vector #'
        + '<input id = "parallelvectorNum22" type="text" value="" 	onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()" style="height: 30px; margin-top: 10px;  width:30px; color: black; font-family: black; font-weight: bold; font-size: 20px; ;" autocomplete="off"   />'		
        + '<br>Store unit vector in slot # '
        + '<input id = "parallelvectorNum22b" type="text" value="" 	onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()" style="height: 30px; margin-top: 10px;  width:30px; color: black; font-family: black; font-weight: bold; font-size: 20px; ;" autocomplete="off"   />'		
        + '<input type="button"  value="Submit" onclick="DrawParallelVector22()" style="background-color: #ffd800; height:30px; left:1000px" />'
        ;
    
    document.getElementById('panelDrawVector3').innerHTML = DrawVectorText + '<br> <br><br> <br><br> <br>'; 

    var DrawVectorText = 'Drawing Opposite Vector: <br>Draw a vector opposite to vector #'
        + '<input id = "oppositevectorNum" type="text" value="" 	onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()" style="height: 30px; margin-top: 10px;  width:30px; color: black; font-family: black; font-weight: bold; font-size: 20px; ;" autocomplete="off"   />'		
        + '<br>Store unit vector in slot # '
        + '<input id = "oppositevectorNumb" type="text" value="" 	onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()" style="height: 30px; margin-top: 10px;  width:30px; color: black; font-family: black; font-weight: bold; font-size: 20px; ;" autocomplete="off"   />'		
        + '<input type="button"  value="Submit" onclick="DrawOppositeVector44()" style="background-color: #ffd800; height:30px; left:1000px" />'
        ;
    
    document.getElementById('panelDrawVector4').innerHTML = DrawVectorText + '<br> <br><br> <br><br> <br>'; 

    var DrawVectorText = 'Rotating Vector: <br>Rotate vector #'
        + '<input id = "perpendicularvectorNum" type="text" value="" 	onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()" style="height: 30px; margin-top: 10px;  width:30px; color: black; font-family: black; font-weight: bold; font-size: 20px; ;" autocomplete="off"   />'		
        + '<br><input id = "perpendicularvectorNumc" type="text" value="" 	onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()" style="height: 30px; margin-top: 10px;  width:100px; color: black; font-family: black; font-weight: bold; font-size: 20px; ;" autocomplete="off"   />'		
        + ' degrees'
        + '<br>Store unit vector in slot # '
        + '<input id = "perpendicularvectorNumb" type="text" value="" 	onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()" style="height: 30px; margin-top: 10px;  width:30px; color: black; font-family: black; font-weight: bold; font-size: 20px; ;" autocomplete="off"   />'		
        + '<br><input type="button"  value="Rotate Counterclockwise" onclick="DrawperpendicularVector44(1)" style="background-color: #ffd800; height:30px; left:1000px" />'
        + '<input type="button"  value="Rotate Clockwise" onclick="DrawperpendicularVector44(2)" style="background-color: #ffd800; height:30px; left:1000px" />'

        ;
    
    document.getElementById('panelDrawVector5').innerHTML = DrawVectorText + '<br> <br><br> <br><br> <br>'; 


    var DrawVectorText = '<span style"font-size:24px">Directional Derivative and Maximum Rate of Change</span><br>'
        + 'f(x, y) = <input id = "gradient11" type="text" value="x² + y² - 2" 	onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()" style="height: 30px; margin-top: 10px;  width:400px; color: black; font-family: black; font-weight: bold; font-size: 20px; ;" autocomplete="off"   />'		
        + '<br>&nabla;f(x, y) = ⟨ <input id = "gradient22" type="text" value="2x, 2y" 	onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()" style="height: 30px; margin-top: 10px;  width:350px; color: black; font-family: black; font-weight: bold; font-size: 20px; ;" autocomplete="off"   /> ⟩'		
        + '<br>Find Directional Derivative at (x, y) = '
        + '(<input id = "gradient33" type="text" value="1" 	onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()" style="height: 30px; margin-top: 10px;  width:40px; color: black; font-family: black; font-weight: bold; font-size: 20px; ;" autocomplete="off"   />'		
        + ', <input id = "gradient44" type="text" value="3" 	onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()" style="height: 30px; margin-top: 10px;  width:40px; color: black; font-family: black; font-weight: bold; font-size: 20px; ;" autocomplete="off"   />)'		
        + ' in the direction of vector <b>v</b> =  ⟨ <input id = "gradient55" type="text" value="1, 2" 	onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()" style="height: 30px; margin-top: 10px;  width:100px; color: black; font-family: black; font-weight: bold; font-size: 20px; ;" autocomplete="off"   /> ⟩'		
        + '<br><input type="button"  value="Submit" onclick="DrawDirectionDerivative(1)" style="background-color: #ffd800; height:30px;width:150px; left:1000px" />'
        + '<input type="button"  value="1" onclick="GradientExample(1)" style="background-color: #b6ff00; height:30px;width:50px; left:1000px" />'
        + '<input type="button"  value="2" onclick="GradientExample(2)" style="background-color: #b6ff00; height:30px;width:50px; left:1000px" />'
        + '<input type="button"  value="3" onclick="GradientExample(3)" style="background-color: #b6ff00; height:30px;width:50px; left:1000px" />'
        + '<input type="button"  value="4" onclick="GradientExample(4)" style="background-color: #b6ff00; height:30px;width:50px; left:1000px" />'
        + '<input type="button"  value="5" onclick="GradientExample(5)" style="background-color: #b6ff00; height:30px;width:50px; left:1000px" />'
        + '<input type="button"  value="6" onclick="GradientExample(6)" style="background-color: #b6ff00; height:30px;width:50px; left:1000px" />'
        + '<input type="button"  value="7" onclick="GradientExample(7)" style="background-color: #b6ff00; height:30px;width:50px; left:1000px" />'
        + '<input type="button"  value="8" onclick="GradientExample(8)" style="background-color: #b6ff00; height:30px;width:50px; left:1000px" />'
        + '<input type="button"  value="9" onclick="GradientExample(9)" style="background-color: #b6ff00; height:30px;width:50px; left:1000px" />'
        + '<input type="button"  value="10" onclick="GradientExample(10)" style="background-color: #b6ff00; height:30px;width:50px; left:1000px" />'
        + '<input type="button"  value="11" onclick="GradientExample(11)" style="background-color: #b6ff00; height:30px;width:50px; left:1000px" />'
        + '<input type="button"  value="12" onclick="GradientExample(12)" style="background-color: #b6ff00; height:30px;width:50px; left:1000px" />'
        + '<input type="button"  value="13" onclick="GradientExample(13)" style="background-color: #b6ff00; height:30px;width:50px; left:1000px" />'
        + '<input type="button"  value="14" onclick="GradientExample(14)" style="background-color: #b6ff00; height:30px;width:50px; left:1000px" />'      ;
    
    document.getElementById('drawvectorbbcc').innerHTML = '<br>' + DrawVectorText + '<br> '; 
    //alert('CreateTextboxFordrawVecto44r');
}

function GradientExample(num){
    if(num ==1){
        document.getElementById('gradient55').value = '4, 4';    
    }
    else if(num ==2){
        document.getElementById('gradient55').value = '4, 0';    
    }
    else if(num ==3){
        document.getElementById('gradient55').value = '4, -4';    
    }
    else if(num ==4){
        document.getElementById('gradient55').value = '0, -4';    
    }
    else if(num ==5){
        document.getElementById('gradient55').value = '-4, -4';    
    }
    else if(num ==6){
        document.getElementById('gradient55').value = '-4, 0';    
    }
    else if(num ==7){
        document.getElementById('gradient55').value = '-4, 4';    
    }
    else if(num ==8){
        document.getElementById('gradient55').value = '0, 4';    
    }
    else if(num ==9){
        document.getElementById('gradient55').value = '4, 5';    
    }
    else if(num ==10){
        document.getElementById('gradient55').value = '4, -2';    
    }
    else if(num ==11){
        document.getElementById('gradient55').value = '4, -5';    
    }
    else if(num ==12){
        document.getElementById('gradient55').value = '0, -5';    
    }
    else if(num ==13){
        document.getElementById('gradient55').value = '-4, -3';    
    }
    else if(num ==14){
        document.getElementById('gradient55').value = '-4, 5';    
    }

    DrawDirectionDerivative(1);

}


function DrawDirectionDerivative(dir){
    //alert('pppppppppppppppp');
    var Px = FindValue(document.getElementById('gradient33').value);
    var Py = FindValue(document.getElementById('gradient44').value);
    //alert(Px, Py);
    var vv = document.getElementById('gradient55').value;
    var vv2 = vv.split(',');
    //alert(Px, Py, vv2[0], vv2[1]);
    var vv3 = FindValue(vv2[0]);
    var vv4 = FindValue(vv2[1]);
    
    var tt1 = parseFloat(Px) + parseFloat(FindValue(vv2[0]));
    var tt2 = parseFloat(Py) + parseFloat(FindValue(vv2[1]));

    document.getElementById('InitialPointX1').value = Px;
    document.getElementById('InitialPointY1').value = Py;
    document.getElementById('TerminalPointX1').value = tt1;
    document.getElementById('TerminalPointY1').value = tt2;

    var gradient = document.getElementById('gradient22').value;
    var gg = replaceAll(gradient, 'x', '(' + Px + ')');
    //alert(gg);
    var gg = replaceAll(gg, 'y', '(' + Py + ')');

    var gg2 = gg.split(',');
    //alert(gg2);

    var gg3a = FindValue(gg2[0]);
    var gg3b = FindValue(gg2[1]);

    var tt1 = parseFloat(Px) + parseFloat(FindValue(gg2[0]));
    var tt2 = parseFloat(Py) + parseFloat(FindValue(gg2[1]));

    document.getElementById('InitialPointX2').value = Px;
    document.getElementById('InitialPointY2').value = Py;
    document.getElementById('TerminalPointX2').value = tt1;
    document.getElementById('TerminalPointY2').value = tt2;
    //return;

    var ff1 = parseFloat(Px) + parseFloat(gg3a);
    var ff2 = parseFloat(Py) + parseFloat(gg3b);




    var MagGradient = Math.sqrt(gg3a*gg3a + gg3b*gg3b);
    var MagV = Math.sqrt(vv3*vv3 + vv4*vv4);
    var u1 = vv3 / MagV;
    var u2 = vv4 / MagV;
    var dirVec = u1*gg3a + u2*gg3b;

    var w1 = parseFloat(Px) + parseFloat(u1);
    var w2 = parseFloat(Py) + parseFloat(u2);
    
    document.getElementById('InitialPointX3').value = Px;
    document.getElementById('InitialPointY3').value = Py;
    document.getElementById('TerminalPointX3').value = w1;
    document.getElementById('TerminalPointY3').value = w2;

    GraphingCalculator34();
    
    var text = "Gradient vector &nabla;f(x, y) at the point (" +Px + ", " + Py + ") = ⟨ " + FindValue(gg2[0]) + ", " + FindValue(gg2[1]) + " ⟩"
     + "<br>||&nabla;f(" +Px + ", " + Py + ")|| =  ||⟨" + FindValue(gg2[0]) + ", " + FindValue(gg2[1]) + " ⟩|| = " + ' <span style="color:red">'+  MagGradient + '</span>'
     + "<br>Directional Derivative in the direction of ⟨ " + FindValue(gg2[0]) + ", " + FindValue(gg2[1]) + " ⟩" +  ' = <span style="color:red">  '+  MagGradient + '</span>'
     + "<br>Note: This is the maximum rate of change."
     + "<br><br>||<b>v</b>|| =  " + '<span style="color:blue">'+ MagV + '</span>'
     + "<br><b>u</b> = Unit vector along <b>v</b> = <b>v</b>/||<b>v</b>|| = " +  '<span style="color:green">' + "⟨ " + u1 + ", " + u2 + " ⟩"  + '</span>'
     + "<br><br>&nabla;f(x, y)•<b>u</b> = "
     + " Directional Derivative in the direction of <b>v</b> "
     + "<br> = ⟨ " + gg3a + ", " + gg3b + " ⟩•" +  "⟨ " +u1 + ", " + u2 + " ⟩<br>"     
     + '= <span style="color:blue">'+ dirVec + '</span>'; 
     ;

    document.getElementById('drawvectorbbdd').innerHTML = text + '<br> <br>'; 
}



function DrawperpendicularVector44(dir){//draws perpendicular vector
    var num = document.getElementById('perpendicularvectorNum').value;
    var num2 = document.getElementById('perpendicularvectorNumb').value;
    var theta = FindValue(document.getElementById('perpendicularvectorNumc').value);

    var x1 = FindValue(document.getElementById('InitialPointX' + num).value);
    var y1 = FindValue(document.getElementById('InitialPointY' + num).value);
    var x2 = FindValue(document.getElementById('TerminalPointX' + num).value);
    var y2 = FindValue(document.getElementById('TerminalPointY' + num).value);
    var theta = parseFloat(theta) * Math.PI / 180;
    if(dir == 2){
        theta = 2*Math.PI - theta;
    }
    var cc = Math.cos(theta);
    var ss = Math.sin(theta);
    var x3 = cc * x2 - ss * y2 - x1 * cc + y1 * ss + x1;
    var y3 = ss * x2 + cc * y2 - x1 * ss - y1 * cc + y1;

    //var aa = parseFloat(x1) - parseFloat(x2);
    //var bb = parseFloat(y1) - parseFloat(y2);       
       
    document.getElementById('InitialPointX' + num2).value = parseFloat(x1);// + parseFloat(aa);
    document.getElementById('InitialPointY' + num2).value = parseFloat(y1);;// + parseFloat(bb);
    document.getElementById('TerminalPointX' + num2).value = parseFloat(x3);;// + parseFloat(aa);
    document.getElementById('TerminalPointY' + num2).value = parseFloat(y3);;// + parseFloat(bb);
    GraphingCalculator34();

 

}




function DrawOppositeVector44(){//draws opposite vector
    var num = document.getElementById('oppositevectorNum').value;
    var num2 = document.getElementById('oppositevectorNumb').value;

    var x1 = FindValue(document.getElementById('InitialPointX' + num).value);
    var y1 = FindValue(document.getElementById('InitialPointY' + num).value);
    var x2 = FindValue(document.getElementById('TerminalPointX' + num).value);
    var y2 = FindValue(document.getElementById('TerminalPointY' + num).value);
    var aa = parseFloat(x1) - parseFloat(x2);
    var bb = parseFloat(y1) - parseFloat(y2);       
       
    document.getElementById('InitialPointX' + num2).value = parseFloat(x1);// + parseFloat(aa);
    document.getElementById('InitialPointY' + num2).value = parseFloat(y1);;// + parseFloat(bb);
    document.getElementById('TerminalPointX' + num2).value = parseFloat(x1) + parseFloat(aa);
    document.getElementById('TerminalPointY' + num2).value = parseFloat(y1) + parseFloat(bb);
    GraphingCalculator34();
}


function DrawParallelVector22(){//draws  unit vector
    var num = document.getElementById('parallelvectorNum22').value;
    var num2 = document.getElementById('parallelvectorNum22b').value;

    var x1 = FindValue(document.getElementById('InitialPointX' + num).value);
    var y1 = FindValue(document.getElementById('InitialPointY' + num).value);
    var x2 = FindValue(document.getElementById('TerminalPointX' + num).value);
    var y2 = FindValue(document.getElementById('TerminalPointY' + num).value);
    var aa = parseFloat(x2) - parseFloat(x1);
    var bb = parseFloat(y2) - parseFloat(y1);
    var veclength = Math.sqrt(aa*aa + bb*bb);
    var x3 = aa/veclength;
    var y3 = bb/veclength;
          
       
    document.getElementById('InitialPointX' + num2).value = parseFloat(x1);
    document.getElementById('InitialPointY' + num2).value = parseFloat(y1);
    document.getElementById('TerminalPointX' + num2).value = parseFloat(x3) + parseFloat(x1);
    document.getElementById('TerminalPointY' + num2).value = parseFloat(y3) + parseFloat(y1);
    GraphingCalculator34();
}



function DrawParallelVector(){//draws parallel vector
    var num = document.getElementById('parallelvectorNum').value;
    var num2 = document.getElementById('parallelvectorNum2').value;
    var num3 = FindValue(document.getElementById('parallelvectorNum3').value);

    var x1 = FindValue(document.getElementById('InitialPointX' + num).value);
    var y1 = FindValue(document.getElementById('InitialPointY' + num).value);
    var x2 = FindValue(document.getElementById('TerminalPointX' + num).value);
    var y2 = FindValue(document.getElementById('TerminalPointY' + num).value);
    var x3 = parseFloat(num3)*(parseFloat(x2) - parseFloat(x1));
    var y3 = parseFloat(num3)*(parseFloat(y2) - parseFloat(y1));
    var aa = FindValue(document.getElementById('parallelvectorX').value);
    var bb = FindValue(document.getElementById('parallelvectorY').value);
    document.getElementById('InitialPointX' + num2).value = parseFloat(aa);
    document.getElementById('InitialPointY' + num2).value = parseFloat(bb);
    document.getElementById('TerminalPointX' + num2).value = parseFloat(x3) + parseFloat(aa);
    document.getElementById('TerminalPointY' + num2).value = parseFloat(y3) + parseFloat(bb);
    GraphingCalculator34();
}


function CreateTextboxForTaylorPoly(){
    
        //document.getElementById('Graphingellipsehyperbola').innerHTML = myString2;

}



/*------------------------------------------------------------------------------
* NAME       :  CreateTextboxFordrawVector
* PURPOSE    :  Creates textboxes for input of initial point (x1,y1) and terminal point (x2, y2)
* PARAMETERS :  
* RETURNS    :  
*   
*----------------------------------------------------------------------------*/

function CreateTextboxForEllipseHyperbola(){
        var myString = function(){/*
        <fieldset style="width: 542px; height: 78px; background-color: rgba(230, 247, 251, 0.74); border-style: solid; border-color: black"  onmouseout="display2()" onmouseover="display('31')" >
        <span style="font-size:x-large" >Graphing ellipse and hyperbola in standard form</sup> 
         </span>
         (<a href="" target="Videocircle" >Video</a>)
          <br>        
          <span style="font-size:x-large"  onmouseout="display2()" onmouseover="display('24')" >(x - h)<sup>2</sup>/a<sup>2</sup> + (y - k)<sup>2</sup>/b<sup>2</sup> = c</span>     
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span title="Checkbox must be checked in order to graph equation of ellipse and hyperbola." style="font-size: x-large">
          <input id="checkboxconic1" type="checkbox" type="text"  value="1"  onclick=" GraphingCalculator()"/>		
          on/off 
          </span>    
            <br>
             &nbsp;&nbsp;
            <input type="button"  value="Submit" onclick="GraphingCalculator26()" class="btswhite" style="background-color: #ffd800; height:30px; left:1000px"   onmouseout="display2()" onmouseover="display('31')" /> 		 		
            <input type="button" title="" value="Example" type="text"  value="1"  style="width:80px;  font-size: medium;  "
                    onclick="ConicExample2()"/>	
        <input type="button"  value="CLEAR" onclick="clearellipse()" class="btswhite"		
                style="background-color: cyan; height:30px; left:1000px" />	     
            <br>
        <marquee behavior="scroll" direction="left"  scrollamount="3"  style="color: black; font-size: large">
           <span id="ellipse" style="color:orange"></span>
        </marquee>
        </fieldset>
    
<fieldset style="width: 532px; height: 400px; padding: 5px; overflow-x: hidden;  overflow-y: scroll; border-style: solid; border-color: black; background-color: rgba(230, 247, 251, 0.74)" >	
<br> 
<input type="hidden" id ="GraphConic1" value= ""/>
<div id = "conicsectioncontainer"  style="width:532px">
    <span style="padding-bottom:5px;font-size: 32px;position: relative; top: 0px;left:1px; border-bottom-style:solid;border-bottom-color: #000;width:150px">( 
        <input id = "TextBoxconicAAA1" type= "text"  value="" onclick="currentID(); getCursorPosition44(this, event)"  onkeyup="symboltranslate()"    
            style="   height: 30px;  width:60px;   color: black; font-family: black; font-weight: bold; font-size: 24px; text-align: center"/>		
        )<sup>2</sup>
    </span>
  
     &nbsp;
    <input id = "TextBoxconicBBB1"  type= "text"  value="+" onclick="currentID(); getCursorPosition44(this, event)"  onkeyup="symboltranslate()"
        style="position: relative;  top: 20px; left:1px; height: 25px;  width:30px; color: black; font-family: black; font-weight: bold; font-size: 24px; text-align: center"/>		
    &nbsp;
    <span style="padding-bottom:5px;font-size: 32px;position: relative; top: 0px;left:1px; border-bottom-style:solid;border-bottom-color: #000;width:150px">( 
        <input id = "TextBoxconicCCC1" type= "text"  value="" onclick="currentID(); getCursorPosition44(this, event)"    onkeyup="symboltranslate()"  
        style=" height: 30px;  width:60px; color: black; font-family: black; font-weight: bold; font-size: 24px; text-align: center"/>		
        )<sup>2</sup>
    </span>       
 
    <span style="font-size: large;position: relative;   top: 17px;left:1px; ">&nbsp;   =   &nbsp;</span>
  
    <input id = "TextBoxconicEEE1" type= "text"  value="" onclick="currentID(); getCursorPosition44(this, event)"  onkeyup="symboltranslate()"
         style="position: relative; top: 17px; left:1px; height: 30px;  width:40px; color: black; font-family: black; font-weight: bold; font-size: 24px; text-align: center"/>		
        
    &nbsp; &nbsp;&nbsp;&nbsp;
    <input type="button" title="  " value="1"
            class ="btsblue"  style="position: relative; top: 17px; left:1px;font-size: large; background-color: blue"   onclick="ClearXsquared3()"/> 

    <input id="checkboxXsquared31" type="checkbox" checked  onclick=" GraphingCalculator()"  style="position: relative;  top: 20px; left:1px;font-size: small"/> 
    <span style="position: relative;  top: 17px; left:1px;font-size: small">on/off</span>
    <br>        
    <input id = "TextBoxconicDDD1" type= "text"  value="" onclick="currentID(); getCursorPosition44(this, event)"  onkeyup="symboltranslate()"
    style=" position: relative;  top: 15px; left:30px; height: 30px;  width:40px; color: black; font-family: black; font-weight: bold; font-size: 24px; text-align: center"/>		
              
    <input id = "TextBoxconicFFF1"  type= "text"  value="" onclick="currentID(); getCursorPosition44(this, event)"  onkeyup="symboltranslate()"
    style="position: relative;  top: 15px; left:160px; height: 30px;  width:40px; color: black; font-family: black; font-weight: bold; font-size: 24px; text-align: center"/>		
</div>        


<br>  <br>  
---------------------------------------------------------------------------------------    
<br>  <br>  

<input type="hidden" id ="GraphConic2" value= ""/>
<div style="width:532px">

    <span style="padding-bottom:5px;font-size: 32px;position: relative; top: 0px;left:1px; border-bottom-style:solid;border-bottom-color: #000;width:150px">( 
        <input id = "TextBoxconicAAA2" type= "text"  value="" onclick="currentID(); getCursorPosition44(this, event)"    onkeyup="symboltranslate()"  
            style="   height: 30px;  width:60px;   color: black; font-family: black; font-weight: bold; font-size: 24px; text-align: center"/>		
        )<sup>2</sup>
    </span>
  
     &nbsp;
    <input id = "TextBoxconicBBB2"  type= "text"  value="+" onclick="currentID(); getCursorPosition44(this, event)"  onkeyup="symboltranslate()"
        style="position: relative;  top: 20px; left:1px; height: 25px;  width:30px; color: black; font-family: black; font-weight: bold; font-size: 24px; text-align: center"/>		
    &nbsp;
    <span style="padding-bottom:5px;font-size: 32px;position: relative; top: 0px;left:1px; border-bottom-style:solid;border-bottom-color: #000;width:150px">( 
        <input id = "TextBoxconicCCC2" type= "text"  value="" onclick="currentID(); getCursorPosition44(this, event)"   onkeyup="symboltranslate()"   
        style=" height: 30px;  width:60px; color: black; font-family: black; font-weight: bold; font-size: 24px; text-align: center"/>		
        )<sup>2</sup>
    </span>       
 
    <span style="font-size: large;position: relative;   top: 17px;left:1px; ">&nbsp;   =   &nbsp;</span>
  
    <input id = "TextBoxconicEEE2" type= "text"  value="" onclick="currentID(); getCursorPosition44(this, event)"  onkeyup="symboltranslate()"
         style="position: relative; top: 17px; left:1px; height: 30px;  width:40px; color: black; font-family: black; font-weight: bold; font-size: 24px; text-align: center"/>		
        
    &nbsp; &nbsp;&nbsp;&nbsp;
    <input type="button" title="  " value="1"
            class ="btsblue"  style="position: relative; top: 17px; left:1px;font-size: large; background-color: red"   onclick="ClearXsquared3()"/> 

    <input id="checkboxXsquared32" type="checkbox" checked  onclick=" GraphingCalculator()"  style="position: relative;  top: 20px; left:1px;font-size: small"/> 
    <span style="position: relative;  top: 17px; left:1px;font-size: small">on/off</span>
    <br>        
    <input id = "TextBoxconicDDD2" type= "text"  value="" onclick="currentID(); getCursorPosition44(this, event)"  onkeyup="symboltranslate()"
    style=" position: relative;  top: 15px; left:30px; height: 30px;  width:40px; color: black; font-family: black; font-weight: bold; font-size: 24px; text-align: center"/>		
              
    <input id = "TextBoxconicFFF2"  type= "text"  value="" onclick="currentID(); getCursorPosition44(this, event)"  onkeyup="symboltranslate()"
    style="position: relative;  top: 15px; left:160px; height: 30px;  width:40px; color: black; font-family: black; font-weight: bold; font-size: 24px; text-align: center"/>		
</div>    



    
<br><br>   
    
---------------------------------------------------------------------------------------    
<br>  <br>  
    
 
<input type="hidden" id ="GraphConic3" value= ""/>
<div style="width:532px">
    <span style="padding-bottom:5px;font-size: 32px;position: relative; top: 0px;left:1px; border-bottom-style:solid;border-bottom-color: #000;width:150px">( 
        <input id = "TextBoxconicAAA3" type= "text"  value="" onclick="currentID(); getCursorPosition44(this, event)"  onkeyup="symboltranslate()"    
            style="   height: 30px;  width:60px;   color: black; font-family: black; font-weight: bold; font-size: 24px; text-align: center"/>		
        )<sup>2</sup>
    </span>
  
     &nbsp;
    <input id = "TextBoxconicBBB3"  type= "text"  value="+" onclick="currentID(); getCursorPosition44(this, event)"  onkeyup="symboltranslate()"
        style="position: relative;  top: 20px; left:1px; height: 25px;  width:30px; color: black; font-family: black; font-weight: bold; font-size: 24px; text-align: center"/>		
    &nbsp;
    <span style="padding-bottom:5px;font-size: 32px;position: relative; top: 0px;left:1px; border-bottom-style:solid;border-bottom-color: #000;width:150px">( 
        <input id = "TextBoxconicCCC3" type= "text"  value="" onclick="currentID(); getCursorPosition44(this, event)"   onkeyup="symboltranslate()"   
        style=" height: 30px;  width:60px; color: black; font-family: black; font-weight: bold; font-size: 24px; text-align: center"/>		
        )<sup>2</sup>
    </span>       
 
    <span style="font-size: large;position: relative;   top: 17px;left:1px; ">&nbsp;   =   &nbsp;</span>
  
    <input id = "TextBoxconicEEE3" type= "text"  value="" onclick="currentID(); getCursorPosition44(this, event)"  onkeyup="symboltranslate()"
         style="position: relative; top: 17px; left:1px; height: 30px;  width:40px; color: black; font-family: black; font-weight: bold; font-size: 24px; text-align: center"/>		
        
    &nbsp; &nbsp;&nbsp;&nbsp;
    <input type="button" title="  " value="1"
            class ="btsblue"  style="position: relative; top: 17px; left:1px;font-size: large; background-color: green"   onclick="ClearXsquared3()"/> 

    <input id="checkboxXsquared33" type="checkbox" checked  onclick=" GraphingCalculator()"  style="position: relative;  top: 20px; left:1px;font-size: small"/> 
    <span style="position: relative;  top: 17px; left:1px;font-size: small">on/off</span>
    <br>        
    <input id = "TextBoxconicDDD3" type= "text"  value="" onclick="currentID(); getCursorPosition44(this, event)"  onkeyup="symboltranslate()"
    style=" position: relative;  top: 15px; left:30px; height: 30px;  width:40px; color: black; font-family: black; font-weight: bold; font-size: 24px; text-align: center"/>		
              
    <input id = "TextBoxconicFFF3"  type= "text"  value="" onclick="currentID(); getCursorPosition44(this, event)"  onkeyup="symboltranslate()"
    style="position: relative;  top: 15px; left:160px; height: 30px;  width:40px; color: black; font-family: black; font-weight: bold; font-size: 24px; text-align: center"/>		
</div>    
    
<br><br>   
 ---------------------------------------------------------------------------------------    
<br>  <br>  
    
 
<input type="hidden" id ="GraphConic4" value= ""/>
<div style="width:532px">

    <span style="padding-bottom:5px;font-size: 32px;position: relative; top: 0px;left:1px; border-bottom-style:solid;border-bottom-color: #000;width:150px">( 
        <input id = "TextBoxconicAAA4" type= "text"  value="" onclick="currentID(); getCursorPosition44(this, event)"  onkeyup="symboltranslate()"    
            style="   height: 30px;  width:60px;   color: black; font-family: black; font-weight: bold; font-size: 24px; text-align: center"/>		
        )<sup>2</sup>
    </span>
  
     &nbsp;
    <input id = "TextBoxconicBBB4"  type= "text"  value="+" onclick="currentID(); getCursorPosition44(this, event)"  onkeyup="symboltranslate()"
        style="position: relative;  top: 20px; left:1px; height: 25px;  width:30px; color: black; font-family: black; font-weight: bold; font-size: 24px; text-align: center"/>		
    &nbsp;
    <span style="padding-bottom:5px;font-size: 32px;position: relative; top: 0px;left:1px; border-bottom-style:solid;border-bottom-color: #000;width:150px">( 
        <input id = "TextBoxconicCCC4" type= "text"  value="" onclick="currentID(); getCursorPosition44(this, event)"    onkeyup="symboltranslate()"  
        style=" height: 30px;  width:60px; color: black; font-family: black; font-weight: bold; font-size: 24px; text-align: center"/>		
        )<sup>2</sup>
    </span>       
 
    <span style="font-size: large;position: relative;   top: 17px;left:1px; ">&nbsp;   =   &nbsp;</span>
  
    <input id = "TextBoxconicEEE4" type= "text"  value="" onclick="currentID(); getCursorPosition44(this, event)"  onkeyup="symboltranslate()"
         style="position: relative; top: 17px; left:1px; height: 30px;  width:40px; color: black; font-family: black; font-weight: bold; font-size: 24px; text-align: center"/>		
        
    &nbsp; &nbsp;&nbsp;&nbsp;
    <input type="button" title="  " value="1"
            class ="btsblue"  style="position: relative; top: 17px; left:1px;font-size: large; background-color: orange"   onclick="ClearXsquared3()"/> 

    <input id="checkboxXsquared34" type="checkbox" checked  onclick=" GraphingCalculator()"  style="position: relative;  top: 20px; left:1px;font-size: small"/> 
    <span style="position: relative;  top: 17px; left:1px;font-size: small">on/off</span>
    <br>        
    <input id = "TextBoxconicDDD4" type= "text"  value="" onclick="currentID(); getCursorPosition44(this, event)"  onkeyup="symboltranslate()"
    style=" position: relative;  top: 15px; left:30px; height: 30px;  width:40px; color: black; font-family: black; font-weight: bold; font-size: 24px; text-align: center"/>		
              
    <input id = "TextBoxconicFFF4"  type= "text"  value="" onclick="currentID(); getCursorPosition44(this, event)"  onkeyup="symboltranslate()"
    style="position: relative;  top: 15px; left:160px; height: 30px;  width:40px; color: black; font-family: black; font-weight: bold; font-size: 24px; text-align: center"/>		
</div>    
    
<br><br>   
 
<br/><br/><br/><br/><br/><br/>
</fieldset>*/}.toString().slice(14, -1);       
    var myString2 = (myString.toString()).replace('*/}', '');
    myString2 = myString2.replace('*/', '');        
    //alert('CreateTextboxFordrawVector');
    document.getElementById('Graphingellipsehyperbola').innerHTML = myString2;



}


function CreateTableForCalculatorFeatures(){
        //alert('CreateTextboxFordrawVector');
        var myString = function(){/*
        <table border="1">
        <tr>
            <td>Calculator Feature&nbsp;&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;on/off&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
        </tr>    
        <tr>
            <td>Reflection of Cartesian Equations &nbsp;&nbsp;</td>
            <td> &nbsp;&nbsp;<input type="checkbox" id="ReflectionCheckbox"  onclick="ReflectionCheckboxChecked()"/>&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;<a href="ReflectionFeatureVideo.cshtml" target="ReflectionFeatureVideo" >Video</a>&nbsp;&nbsp;</td>
        </tr>
        <tr>
            <td>Rotation of Cartesian Equation&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;<input type="checkbox" id="RotationCheckbox" onclick="TurnOnRotationFeature()" /> &nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;<a href="RotationFeatureVideo.cshtml" target="RotationFeatureVideo" >Video</a>&nbsp;&nbsp;</td>
        </tr>    
        <tr>
            <td>Finding x-intercept and y-intercept&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;<input type="checkbox" id="XYInterceptCheckbox" onclick="XYInterceptCheckboxClick()" />&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;<a href="InterceptFeatureVideo.cshtml" target="InterceptFeatureVideo" >Video</a>&nbsp;&nbsp;</td>
        </tr>    
        <tr>
            <td>Finding Intersection of Two Graphs&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;<input type="checkbox" id="IntersectionCheckbox" onclick="IntersectionCheckboxClick()" />&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;<a href="IntersectionFeatureVideo.cshtml" target="IntersectionFeatureVideo" >Video</a>&nbsp;&nbsp;</td>
        </tr>    
        <tr>
            <td>Finding Maximum or Minimum&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;<input type="checkbox" id="ExtremumCheckbox" onclick="ExtremumCheckboxClick()" />&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;<a href="VideoFindExtremum.cshtml" target="VideoFindExtremum" >Video</a>&nbsp;&nbsp;</td>
        </tr>    
        <tr>
            <td>Shading/Painting&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;<input type="checkbox" id="ShadingCheckbox" onclick="ClearShading22()" />&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;<a href="http://youtu.be/NI3gjW6hrwg" target="HowToShadingVideo" >Video</a>&nbsp;&nbsp;</td>
        </tr>    
        <tr>
            <td>Drawing Line With Two Given Points&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;<input type="checkbox" id="DrawingLineCheckbox11" onclick="DrawingLine11()" />&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
        </tr>    
        <tr>
            <td>Drawing Line With Given Slope and One Point&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;<input type="checkbox" id="DrawingLineCheckbox22" onclick="DrawingLine22()" />&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
        </tr>    
        <tr>
            <td>Drawing Parabola Through Vertex and One Point&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;<input type="checkbox" id="DrawingLineCheckbox33" onclick="DrawingLine33()" />&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
        </tr>    
        <tr>
            <td>Drawing Parabola Through Three Points&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;<input type="checkbox" id="DrawingLineCheckbox44" onclick="DrawingLine44()" />&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
        </tr> 
        <tr>
            <td>Drawing Circle&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;<input type="checkbox" id="DrawingLineCheckbox55" onclick="DrawingLine55()" />&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
        </tr>    
        <tr>
            <td>Drawing Ellipse of Equation in Standard Form&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;<input type="checkbox" id="DrawingLineCheckbox88" onclick="DrawingLine88()" />&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
        </tr>    
        <tr>
            <td>Drawing Hyperbola of Equation in Standard Form&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;<input type="checkbox" id="DrawingLineCheckbox99" onclick="DrawingLine99()" />&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
        </tr>    
        <tr>
            <td>Drawing Two Parralel Lines&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;<input type="checkbox" id="DrawingLineCheckbox66" onclick="DrawingLine66()" />&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
        </tr>    
        <tr>
            <td>Drawing Two Perpendicular Lines&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;<input type="checkbox" id="DrawingLineCheckbox77" onclick="DrawingLine77()" />&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
        </tr>    
        <tr>
            <td>Testing Point for Inequality and Equation&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;<input type="checkbox" id="DrawingLineCheckbox1010" onclick="DrawingLine1010()" />&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
        </tr>    
        <tr>
            <td> Draw Tangent Line(s) for function defined implicitly or explicitly&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;<input type="checkbox" id="DrawingLineCheckbox1111" onclick="DrawingLine1111()" />&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
        </tr>    
        <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
        </tr>    
    </table>*/}.toString().slice(14, -1);       

    var myString2 = (myString.toString()).replace('*/}', '');
    myString2 = myString2.replace('*/', '');        
    //alert('CreateTextboxFordrawVector');
    document.getElementById('CalculatorFeaturesDiv').innerHTML = myString2;
}


function CreateTextboxForTracingPanel(){        
    var myString = function(){/*
    <span style="font-size: 18px">Select tracing option:</span>
    <input id="tracingtype11" type="button" value="Cartesian" style="width: 130px;font-size: 20px;background-color:yellow" onclick="tracingtype('1')"/>
    <input id="tracingtype22" type="button" value="Parametric" style="width: 130px;font-size: 20px;background-color:silver" onclick="tracingtype('2')"/>
    <input id="tracingtype33" type="button" value="Polar" style="width: 130px;font-size: 20px;background-color:silver" onclick="tracingtype('3')"/>
    <br>

    <div id="tracingpanel11"  style="font-size: 20px ;background-color:white; width: 600px;border-style: solid; border-color: black;" >
        <span style="display: none;font-size: 20px">Tracing of Cartesian Equations</span>
        <input type="radio" id="TraceON" name = "Tracing"  value="ON" checked/> 
        <span>ON &nbsp;&nbsp;</span>        
        <input type="radio"  id="TraceOFF"  name = "Tracing"  value="OFF"   onclick="TraceOff2()"  />
        <span>OFF &nbsp;&nbsp;</span>    
        
         
        <input id = "TraceForThisGraph" type="hidden" value="Y1"		
                onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()"  style="height: 10px;  width:50px; color: #ff6a00; font-family: black; font-weight: bold; font-size: 16px; background-color: white; border: 0"		
                autocomplete="off"   />	       
        <br>
        <span style="font-size: 18px">Select an equation:   </span>
        <select id="mydropdowntracing" style="font-weight: 300; width: 220px; height: 30px; font-size: 16px;background-color: #eae6e0;"  onchange="SelectCartesianGraphTracing()">
                <option value= "0">        
                 select an equation
                </option>;
                <!--
                {for(int i=1; i<= 20; i++){
                      var tpp1 = "tracingCartesian"+i;
                      var buttoncolor =  colorselect(i) ;//	"#000080";
                <option value=i style="font-weight: bold;background-color:white ; color:buttoncolor">        
                    Cartestian Equation i
                </option>;
                }}	
                -->
                <option value="1" style="font-weight: bold;background-color:white ; color:blue"> Cartestian Equation 1 </option>
                <option value="2" style="font-weight: bold;background-color:white ; color:red"> Cartestian Equation 2 </option>
                <option value="3" style="font-weight: bold;background-color:white ; color:green"> Cartestian Equation 3 </option>
                <option value="4" style="font-weight: bold;background-color:white ; color:orange"> Cartestian Equation 4 </option>
                <option value="5" style="font-weight: bold;background-color:white ; color:lime"> Cartestian Equation 5 </option>
                <option value="6" style="font-weight: bold;background-color:white ; color:cyan"> Cartestian Equation 6 </option>
                <option value="7" style="font-weight: bold;background-color:white ; color:magenta"> Cartestian Equation 7 </option>
                <option value="8" style="font-weight: bold;background-color:white ; color:silver"> Cartestian Equation 8 </option>
                <option value="9" style="font-weight: bold;background-color:white ; color:gray"> Cartestian Equation 9 </option>
                <option value="10" style="font-weight: bold;background-color:white ; color:maroon"> Cartestian Equation10 </option>
                <option value="11" style="font-weight: bold;background-color:white ; color:olive"> Cartestian Equation 11 </option>
                <option value="12" style="font-weight: bold;background-color:white ; color:purple"> Cartestian Equation 12 </option>
                <option value="13" style="font-weight: bold;background-color:white ; color:teal"> Cartestian Equation 13 </option>
                <option value="14" style="font-weight: bold;background-color:white ; color:salmon"> Cartestian Equation 14 </option>
                <option value="15" style="font-weight: bold;background-color:white ; color:gold"> Cartestian Equation 15 </option>
                <option value="16" style="font-weight: bold;background-color:white ; color:khaki"> Cartestian Equation 16 </option>
                <option value="17" style="font-weight: bold;background-color:white ; color:indigo"> Cartestian Equation 17 </option>
                <option value="18" style="font-weight: bold;background-color:white ; color:#1E90FF"> Cartestian Equation 18 </option>
                <option value="19" style="font-weight: bold;background-color:white ; color:#483D8B"> Cartestian Equation 19 </option>
                <option value="20" style="font-weight: bold;background-color:white ; color:#B8860B"> Cartestian Equation 20 </option>
        </select> 	 
        <br>  
        <input type="radio" id="tracingmethod2" style="display: none" name = "tracingmethod" onclick="tracingmethodbb('4')"  checked  /><!--Automatic Tracing-->
        <br>
        <div id="autotracing" style="" >
           
            Start Value =
            <input type="text" id="StartValueTracingmethod" value="-5"  onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()"  style=" background-color:beige; font-family: black;font-weight: bold; font-size: 18px;height: 25px; width: 70px"  /> 
    
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
            End Value =
            <input type="text" id="EndValueTracingmethod" value="5"  onclick="currentID(); getCursorPosition44(this, event)"  onkeyup="symboltranslate()" style=" background-color:beige;font-family: black; font-family: black;font-weight: bold; font-size: 18px;height: 25px; width: 70px"  /> 
            <br>
            Stepsize =
           <input type="text" id="Stepsizetracingmethod2" value="1"  onclick="currentID(); getCursorPosition44(this, event)"  onkeyup="symboltranslate()" style="margin-top: 10px; background-color:beige; font-family: black;font-weight: bold; font-size: 18px;height: 25px; width: 70px"  /> 
           &nbsp;&nbsp;&nbsp;&nbsp; 
           <input type="button" id="Stepsizetracingmethod21" value="1"  onclick="document.getElementById('Stepsizetracingmethod2').value = '1';"  style="margin-top: 10px; background-color:silver; font-family: black;font-weight: bold; font-size: 18px;height: 25px; width: 40px"  /> 
           <input type="button" id="Stepsizetracingmethod21" value="0.5"  onclick="document.getElementById('Stepsizetracingmethod2').value = '0.5';"  style="margin-top: 10px; background-color:silver; font-family: black;font-weight: bold; font-size: 18px;height: 25px; width: 40px"  /> 
           <input type="button" id="Stepsizetracingmethod21" value="0.2"  onclick="document.getElementById('Stepsizetracingmethod2').value = '0.2';"  style="margin-top: 10px; background-color:silver; font-family: black;font-weight: bold; font-size: 18px;height: 25px; width: 40px"  /> 
           <input type="button" id="Stepsizetracingmethod22" value="0.1"  onclick="document.getElementById('Stepsizetracingmethod2').value = '0.1';"  style="margin-top: 10px; background-color:silver; font-family: black;font-weight: bold; font-size: 18px;height: 25px; width: 40px"  /> 
           <input type="button" id="Stepsizetracingmethod23" value="&pi;"  onclick="document.getElementById('Stepsizetracingmethod2').value = '&pi;'"  style="margin-top: 10px; background-color:silver; font-family: black;font-weight: bold; font-size: 18px;height: 25px; width: 40px"  /> 
           <input type="button" id="Stepsizetracingmethod24" value="&pi;/2"  onclick="document.getElementById('Stepsizetracingmethod2').value = '&pi;/2'"  style="margin-top: 10px; background-color:silver; font-family: black;font-weight: bold; font-size: 18px;height: 25px; width: 40px"  /> 
           <input type="button" id="Stepsizetracingmethod25" value="&pi;/3"  onclick="document.getElementById('Stepsizetracingmethod2').value = '&pi;/3'"  style="margin-top: 10px; background-color:silver; font-family: black;font-weight: bold; font-size: 18px;height: 25px; width: 40px"  /> 
           <input type="button" id="Stepsizetracingmethod26" value="&pi;/4"  onclick="document.getElementById('Stepsizetracingmethod2').value = '&pi;/4'"  style="margin-top: 10px; background-color:silver; font-family: black;font-weight: bold; font-size: 18px;height: 25px; width: 40px"  /> 
            

            <br>  
            <input  onclick="document.getElementById('TraceON').checked = true ;tracingmethodbb('2')"  id="xaspicartesian" type="checkbox"  value="" style=";" />
            Express x in terms of &pi;    
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input  onclick="document.getElementById('TraceON').checked = true ;tracingmethodbb('2')"  id="yasfractioncartesian" type="checkbox"  value="" style=";" />
            Express y-values as fractions    

            <br>
            <div style="display:none">

            Tracing Speed =
            <input type="text" id="Speedtracingmethod" value="1"  onclick="currentID(); getCursorPosition44(this, event)"  onkeyup="symboltranslate()" style=" margin-top: 10px;background-color:beige;font-family: black;font-weight: bold; font-size: 18px;height: 25px; width: 40px"  /> 
            <input type="button" value= "&uarr;" class="submit" style="height: 25px; width: 25px;  		
                            background-color:   #b6ff00;" onclick ="Trace1(3)"/>	
                    <input type="button" value= "&darr;" class="submit" style="height: 25px; width: 25px;  		
                            background-color:   #b6ff00;" onclick ="Trace1(4)"/>	

            (Number of seconds between points)<br> <br>


            <span style="display: none;font-size: 14px">Direction of Tracing </span> : 
            <input type="radio" id="tracingdirection1" name = "tracingdirection" onclick="" checked  />Left to Right
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	
            <input type="radio" id="tracingdirection2" name = "tracingdirection" onclick=""   />Right to Left
            <br>
            </div>
            
            <input type="button" onclick="document.getElementById('TraceON').checked = true ;tracingmethodbb('2')" value="Show Points on Graph" style="margin-top: 10px; background-color:cyan;height: 30px; width: 270px;   font-size: 24px"     />
            <input type="button" onclick="tracingmethodbb('3')" value="Stop Tracing" style="display:none;margin-top: 10px; background-color:cyan;height: 30px; width: 300px;   font-size: 24px"      >
            &nbsp;&nbsp;	
            <input type="button" onclick="clearcartesianpoint()" value="Clear Points" style="margin-top: 10px; background-color:cyan;height: 30px; width: 270px;   font-size: 24px"     />
            <br>             
            <input type="button" value= "Close Panel" style="height: 30px; width: 270px;background-color: #ffd800; font-size: 24px" class="submit"  onclick ="TracingCartesian('2')"/>		
            <input type="text" id="StopTracingMsg" name = "" onclick="" value="" style="color: white;border: 0px; background-color:white;height: 1px; width: 1px"   /> 
        </div>
        
        <br><br>
      
        <div id="manualtracing" style="display: inline-block" > 
            <fieldset style="display: none;width: 500px; height: 70px; border-style: none; border-color: black"  >
                   <input type="radio" id="tracingmethod1" name = "tracingmethod" onclick="tracingmethodbb('1')" checked />
                    <br>
                    Number of decimal places for input variable:        	
                    	
                    <input id="TraceTextbox" value="0" type="text" style="height: 20px; width: 40px; " onclick="currentID(); getCursorPosition44(this, event)"  onkeyup="symboltranslate()"/>
                    
                    <input type="button" value= "&uarr;" class="submit" style="height: 25px; width: 25px;  		
                            background-color:   #b6ff00;" onclick ="Trace1(1)"/>	 		
                    	
                    <input type="button" value= "&darr;" class="submit" style="height: 25px; width: 25px;  		
                            background-color:   #b6ff00;" onclick ="Trace1(2)"/>		

                    <br/><span style="font-size: medium">(Note: Input value  of 0 means input variable will be integer.)</span>
                    <a href="TracingFeatureVideo.cshtml" target="TracingFeatureVideo" >Video</a>

                <br><br>

            <input type="button" value= "Close Panel" style="height: 30px; width: 200px;background-color: #ffd800; font-size: 18px" class="submit"  onclick ="TracingCartesian('2')"/>		

            </fieldset>
     
        </div>
        <br> 

    </div>

    <div id="tracingpanel22"  style="padding-left:10px;display: none ; background-color:white;width: 600px;border-style: solid; border-color: black;" >
        <span style="font-size: x-large">Parametric Equations Tracing:
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="VideoParametricTracing.cshtml" target="VideoParametricTracing" >Video</a>        
        </span>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <input type="checkbox" id="TraceParametricCheckbox"  />on/off    
        <br/>  
        <div style=" height: 100px ;width: 500px; overflow:scroll" onmouseout="display2()" onmouseover="display('24')" >
            Select parametric equations:<br> 
        <div style="white-space: nowrap; width: 1200px; "   >
           <input type="radio" id="ParametricTracechartID1" name = "ParametricTracechartID" onclick="TraceGraphID('ParametricTrace1')"   />
            <input type="button" title="" value="1" style="width:30px; height:30px; font-size: small; background-color: blue"
            onclick="document.getElementById('ParametricTracechartID1').checked = true;"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;		

            <input type="radio" id="ParametricTracechartID2" name = "ParametricTracechartID" onclick="TraceGraphID('ParametricTrace2')"   />
            <input type="button" title="" value="2" style="width:30px; height:30px; font-size: small; background-color: red"
            onclick="document.getElementById('ParametricTracechartID2').checked = true;"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <input type="radio" id="ParametricTracechartID3" name = "ParametricTracechartID" onclick="TraceGraphID('ParametricTrace3')"   />
            <input type="button" title="" value="3" style="width:30px; height:30px; font-size: small; background-color: green"
            onclick="document.getElementById('ParametricTracechartID3').checked = true;"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <input type="radio" id="ParametricTracechartID4" name = "ParametricTracechartID" onclick="TraceGraphID('ParametricTrace4')"   />
            <input type="button" title="" value="4" style="width:30px; height:30px; font-size: small; background-color: orange"
            onclick="document.getElementById('ParametricTracechartID4').checked = true;"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;		

            <input type="radio" id="ParametricTracechartID5" name = "ParametricTracechartID" onclick="TraceGraphID('ParametricTrace5')"   />
            <input type="button" title="" value="5" style="width:30px; height:30px; font-size: small; background-color: lime"
            onclick="document.getElementById('ParametricTracechartID5').checked = true;"/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	

            <input type="radio" id="ParametricTracechartID6" name = "ParametricTracechartID" onclick="TraceGraphID('ParametricTrace6')"   />
            <input type="button" title="" value="6" style="width:30px; height:30px; font-size: small; background-color: cyan"
            onclick="document.getElementById('ParametricTracechartID6').checked = true;"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <input type="radio" id="ParametricTracechartID7" name = "ParametricTracechartID" onclick="TraceGraphID('ParametricTrace7')"   />
            <input type="button" title="" value="7" style="width:30px; height:30px; font-size: small; background-color: magenta"
            onclick="document.getElementById('ParametricTracechartID7').checked = true;"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;		

            <input type="radio" id="ParametricTracechartID8" name = "ParametricTracechartID" onclick="TraceGraphID('ParametricTrace8')"   />
            <input type="button" title="" value="8" style="width:30px; height:30px; font-size: small; background-color: silver"
            onclick="document.getElementById('ParametricTracechartID8').checked = true;"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <input type="radio" id="ParametricTracechartID9" name = "ParametricTracechartID" onclick="TraceGraphID('ParametricTrace9')"   />
            <input type="button" title="" value="9" style="width:30px; height:30px; font-size: small; background-color: gray"
            onclick="document.getElementById('ParametricTracechartID9').checked = true;"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <input type="radio" id="ParametricTracechartID10" name = "ParametricTracechartID" onclick="TraceGraphID('ParametricTrace10')" checked   />
            <input type="button" title="" value="10" style="width:30px; height:30px; font-size: small; background-color: maroon"
            onclick="document.getElementById('ParametricTracechartID10').checked = true;"/>
            <br>
            </div>
            <marquee behavior="scroll" direction="left"  scrollamount="3"  style="color: black; font-size: large">
                    <span id="traceparametricmarquee" style="color:orange"></span>
            </marquee>

        </div>
        <br> 
        <input type="radio" id="ParametricTraceMethod2" name = "ParametricTraceMethod" onclick=""  checked />   
        Automatic tracing: <br>
        <div id="Parametricautotracing" style="display: inline-block" >
        Start t-value =
        <input type="text" id="ParametricStartValueTracingmethod" value="0"  onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()"  style=" background-color:beige;font-family: black;font-weight: bold; font-size: 18px;height: 25px; width: 70px"  /> 
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        End t-value =
        <input type="text" id="ParametricEndValueTracingmethod" value="2&pi;"  onclick="currentID(); getCursorPosition44(this, event)"  onkeyup="symboltranslate()" style=" background-color:beige;font-family: black;font-weight: bold; font-size: 18px;height: 25px; width: 70px"  /> 
        <br> 
        Stepsize   =
        <input type="text" id="ParametricStepsizetracingmethod2" value="&pi;/4"  onclick="currentID(); getCursorPosition44(this, event)"  onkeyup="symboltranslate()" style="margin-top: 10px; background-color:beige;font-family: black;font-weight: bold; font-size: 18px;height: 25px; width: 70px"  /> 
            &nbsp;&nbsp;&nbsp;&nbsp;
           <input type="button"  value="&pi;"  onclick="document.getElementById('ParametricStepsizetracingmethod2').value = '&pi;'"  style="margin-top: 10px; background-color:silver; font-family: black;font-weight: bold; font-size: 18px;height: 25px; width: 50px"  /> 
           <input type="button"  value="&pi;/2"  onclick="document.getElementById('ParametricStepsizetracingmethod2').value = '&pi;/2'"  style="margin-top: 10px; background-color:silver; font-family: black;font-weight: bold; font-size: 18px;height: 25px; width: 50px"  /> 
           <input type="button"  value="&pi;/3"  onclick="document.getElementById('ParametricStepsizetracingmethod2').value = '&pi;/3'"  style="margin-top: 10px; background-color:silver; font-family: black;font-weight: bold; font-size: 18px;height: 25px; width: 50px"  /> 
           <input type="button"  value="&pi;/4"  onclick="document.getElementById('ParametricStepsizetracingmethod2').value = '&pi;/4'"  style="margin-top: 10px; background-color:silver; font-family: black;font-weight: bold; font-size: 18px;height: 25px; width: 50px"  /> 
           <input type="button"  value="&pi;/6"  onclick="document.getElementById('ParametricStepsizetracingmethod2').value = '&pi;/6'"  style="margin-top: 10px; background-color:silver; font-family: black;font-weight: bold; font-size: 18px;height: 25px; width: 50px"  /> 
           <input type="button"  value="&pi;/12"  onclick="document.getElementById('ParametricStepsizetracingmethod2').value = '&pi;/12'"  style="margin-top: 10px; background-color:silver; font-family: black;font-weight: bold; font-size: 18px;height: 25px; width: 50px"  /> 

        <br>   
        <input  onclick="" id="taspiparametric" type="checkbox"  value="" style=";" />
        Express <i>t</i> in terms of &pi;
        
        <br> 
        Number of seconds between points =
       <input type="text" id="ParametricSpeedtracingmethod" value="1"  onclick="currentID(); getCursorPosition44(this, event)"  onkeyup="symboltranslate()" style=" margin-top: 10px;background-color:beige;font-family: black;font-weight: bold; font-size: 18px;height: 25px; width: 70px"  /> 
        (tracing speed)<br> 
       <input type="button"   onclick="Parametrictracingmethodbb('2')" value="Start Tracing" style="margin-top: 10px; background-color:cyan;height: 30px; width: 200px;  font-size: 24px"     onmouseout="display2()" onmouseover="display('28')" /> 
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   
       <input type="button"  onclick="Parametrictracingmethodbb('3')" value="Stop Tracing" style="margin-top: 10px; background-color:cyan;height: 30px; width: 200px;  font-size: 24px"     onmouseout="display2()" onmouseover="display('28')" /> 
        
       <br>
       <input type="button" onclick="clearcartesianpoint()" value="Clear Points" style="margin-top: 10px; background-color:cyan;height: 30px; width: 200px;   font-size: 24px"     />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     
       <input type="button" value= "Close" style="height: 30px;  background-color: #ffd800; width: 200px;  font-size: 24px" class="submit"  onclick ="TracingCartesian('2')"/>		
       <input type="text" id="ParametricStopTracingMsg" name = "" onclick="" value="" style="color: white;border: 0px; background-color:white;height: 1px; width: 1px"   /> 
        <br>
    
        </div>
        <br/>  <br/>  
        <span style="font-size: 18px;display: none">***************************************************
        <br><br> 
         <input type="radio" id="ParametricTraceMethod1" name = "ParametricTraceMethod" onclick=""   />
        Manual tracing: <br> 
        t = <input id="TraceParametricBox" value="" type="text" style="height: 20px; width: 100px; " onclick="currentID(); getCursorPosition44(this, event)"  onkeyup="symboltranslate()"/>
        <input type="button" value= "&uarr;" class="submit" style="height: 25px; width: 25px;  		
                background-color:   #b6ff00;" onclick ="TraceParametric1(1)"/>		
        <input type="button" value= "&darr;" class="submit" style="height: 25px; width: 25px;  		
                background-color:   #b6ff00;" onclick ="TraceParametric1(2)"/>	(click on arrow to start tracing)	
        <br><br>

        </span>


    </div>

    <div id="tracingpanel33"  style="padding-left:10px;display: none ;background-color:white;width: 600px;border-style: solid; border-color: black;" >
        <span style="font-size: x-large">Tracing for Polar Equations:
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a href="VideoPolarTracing.cshtml" target="VideoPolarTracing" >Video</a>          
        </span>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <input type="checkbox" id="TracePolarCheckbox"  />on/off    
        <br/>  <br/>

        Select an equation: 
        <select id="mydropdownpolar" style=" width: 200px; height: 30px; font-size: 16px;background-color: #eae6e0;"  onchange="dropdownboxpolar()">
            <option value= "0">        
                select an equation
            </option>;
            <!--
            {for(int i=1; i<= 20; i++){
                  var tpp1 = "PolarTracechartID"+i;
                  var buttoncolor =  colorselect(i) ;//	"#000080";
            <option value=i style="font-weight: bold; background-color:white ; color:buttoncolor">        
                Polar Equation i
            </option>;
            }}	
            -->
                <option value="1" style="font-weight: bold;background-color:white ; color:blue"> Polar Equation 1 </option>
                <option value="2" style="font-weight: bold;background-color:white ; color:red"> Polar Equation 2 </option>
                <option value="3" style="font-weight: bold;background-color:white ; color:green"> Polar Equation 3 </option>
                <option value="4" style="font-weight: bold;background-color:white ; color:orange"> Polar Equation 4 </option>
                <option value="5" style="font-weight: bold;background-color:white ; color:lime"> Polar Equation 5 </option>
                <option value="6" style="font-weight: bold;background-color:white ; color:cyan"> Polar Equation 6 </option>
                <option value="7" style="font-weight: bold;background-color:white ; color:magenta"> Polar Equation 7 </option>
                <option value="8" style="font-weight: bold;background-color:white ; color:silver"> Polar Equation 8 </option>
                <option value="9" style="font-weight: bold;background-color:white ; color:gray"> Polar Equation 9 </option>
                <option value="10" style="font-weight: bold;background-color:white ; color:maroon"> Polar Equation10 </option>
                <option value="11" style="font-weight: bold;background-color:white ; color:olive"> Polar Equation 11 </option>
                <option value="12" style="font-weight: bold;background-color:white ; color:purple"> Polar Equation 12 </option>
                <option value="13" style="font-weight: bold;background-color:white ; color:teal"> Polar Equation 13 </option>
                <option value="14" style="font-weight: bold;background-color:white ; color:salmon"> Polar Equation 14 </option>
                <option value="15" style="font-weight: bold;background-color:white ; color:gold"> Polar Equation 15 </option>
                <option value="16" style="font-weight: bold;background-color:white ; color:khaki"> Polar Equation 16 </option>
                <option value="17" style="font-weight: bold;background-color:white ; color:indigo"> Polar Equation 17 </option>
                <option value="18" style="font-weight: bold;background-color:white ; color:#1E90FF"> Polar Equation 18 </option>
                <option value="19" style="font-weight: bold;background-color:white ; color:#483D8B"> Polar Equation 19 </option>
                <option value="20" style="font-weight: bold;background-color:white ; color:#B8860B"> Polar Equation 20 </option>


        </select> 	 

        <br/><br/>
        <input type="radio" id="PolarTraceMethod2" name = "PolarTraceMethod" onclick="PolarTrace('2')"  />
        Automatic Tracing:&nbsp;&nbsp;    
        <div id="Polarautotracing" style="display: inline-block" >
        <br> 
        Start &theta;-value =
        <input type="text" id="PolarStartValueTracingmethod" value="0"  onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()"  style=" background-color:beige;font-family: black;font-weight: bold; font-size: 18px;height: 25px; width: 70px"  /> 
        &nbsp;&nbsp;&nbsp;&nbsp; 
        End &theta;-value =
        <input type="text" id="PolarEndValueTracingmethod" value="2&pi;"  onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()"  style=" background-color:beige;font-family: black;font-weight: bold; font-size: 18px;height: 25px; width: 70px"  /> 
        <br> 
        Stepsize   =
        <input type="text" id="PolarStepsizetracingmethod2" value="&pi;/4"  onclick="currentID(); getCursorPosition44(this, event)"  onkeyup="symboltranslate()" style="margin-top: 10px; background-color:beige;font-family: black;font-weight: bold; font-size: 18px;height: 25px; width: 70px"  /> 
            &nbsp;&nbsp;&nbsp;&nbsp;
           <input type="button"  value="&pi;"  onclick="document.getElementById('PolarStepsizetracingmethod2').value = '&pi;'"  style="margin-top: 10px; background-color:silver; font-family: black;font-weight: bold; font-size: 18px;height: 25px; width: 50px"  /> 
           <input type="button"  value="&pi;/2"  onclick="document.getElementById('PolarStepsizetracingmethod2').value = '&pi;/2'"  style="margin-top: 10px; background-color:silver; font-family: black;font-weight: bold; font-size: 18px;height: 25px; width: 50px"  /> 
           <input type="button"  value="&pi;/3"  onclick="document.getElementById('PolarStepsizetracingmethod2').value = '&pi;/3'"  style="margin-top: 10px; background-color:silver; font-family: black;font-weight: bold; font-size: 18px;height: 25px; width: 50px"  /> 
           <input type="button"  value="&pi;/4"  onclick="document.getElementById('PolarStepsizetracingmethod2').value = '&pi;/4'"  style="margin-top: 10px; background-color:silver; font-family: black;font-weight: bold; font-size: 18px;height: 25px; width: 50px"  /> 
           <input type="button"  value="&pi;/6"  onclick="document.getElementById('PolarStepsizetracingmethod2').value = '&pi;/6'"  style="margin-top: 10px; background-color:silver; font-family: black;font-weight: bold; font-size: 18px;height: 25px; width: 50px"  /> 
           <input type="button"  value="&pi;/12"  onclick="document.getElementById('PolarStepsizetracingmethod2').value = '&pi;/12'"  style="margin-top: 10px; background-color:silver; font-family: black;font-weight: bold; font-size: 18px;height: 25px; width: 50px"  /> 

       <br>    
        <input  onclick="" id="taspipolar" type="checkbox"  value="" style=";" />
        Express &theta; in terms of &pi;    
        <br> 
        Number of seconds between points =
        <input type="text" id="PolarSpeedtracingmethod" value="1"  onclick="currentID(); getCursorPosition44(this, event)"  onkeyup="symboltranslate()" style=" margin-top: 10px;background-color:beige;font-family: black;font-weight: bold; font-size: 18px;height: 25px; width: 70px"  /> 
        (tracing speed)
        <br> 
        <input type="button" onclick="Polartracingmethodbb('2')" value="Start Automatic Tracing" style="margin-top: 10px; background-color:cyan;height: 30px;   font-size: 18px"   onmouseout="display2()" onmouseover="display('29')" /> 
        &nbsp;&nbsp;&nbsp;  
        <input type="button" onclick="Polartracingmethodbb('3')" value="Stop/Reset Automatic Tracing" style="margin-top: 10px; background-color:cyan;height: 30px;   font-size: 18px"   onmouseout="display2()" onmouseover="display('29')" /> 
        &nbsp;&nbsp;&nbsp;
        <input type="button" value= "Close" style="height: 30px; width: 60px;background-color: #ffd800; font-size: 18px" class="submit"  onclick ="TracingCartesian('2')"/>		
        <input type="text" id="PolarStopTracingMsg" name = "" onclick="" value="" style="color: white;border: 0px; background-color:white;height: 1px; width: 1px"   /> 
        <br>
   
        </div>
       <br/>  <br/>  
        <span style="font-size: 18px">***************************************************</span>
        <br><br>	        

        <input type="radio" id="PolarTraceMethod1" name = "PolarTraceMethod" onclick="PolarTrace('1')"  checked />
        Manual Tracing:<br> 
        &theta; = <input id="TracePolarBox" value="" type="text" style="height: 20px; width: 100px; " onclick="currentID(); getCursorPosition44(this, event)"  onkeyup="symboltranslate()"/>
         <input type="button" value= "&uarr;" class="submit" style="height: 25px; width: 25px;  		
                background-color:   #b6ff00;" onclick ="TracePolar1(1)"/>
         <input type="button" value= "&darr;" class="submit" style="height: 25px; width: 25px;  		
                background-color:   #b6ff00;" onclick ="TracePolar1(2)"/>	
        	
        (click on arrow to start tracing)  
        <br><br>                    
    </div> 
    <br/>  <br/>*/}.toString().slice(14, -1);       

    var myString2 = (myString.toString()).replace('*/}', '');
    myString2 = myString2.replace('*/', '');        
    document.getElementById('tracingpanel').innerHTML = myString2;
}




function CreateTextboxForReflectionpanel(){
    //alert('CreateTextboxFordrawVector');
    var myString = function(){/*
    <div style="font-size: 20px ;background-color:white; width: 600px;border-style: solid; border-color: black;" >
    <h2> Reflection of Cartesian Equations</h2>
    Select a Cartesian equation: 
        <select id="mydropdownreflection" style=" width: 220px; height: 30px; font-size: 16px;background-color: #eae6e0;"  onchange="Selectanequation12()">
            <option value= "0">        
                select an equation
            </option>
            <!--
            {for(int i=1; i<= 20; i++){
                  var tpp1 = "reflectionID"+i;
                  var buttoncolor =  colorselect(i) ;//	"#000080";
            <option value=i style="font-weight: 300;background-color:white ; color:buttoncolor">        
                Cartestian Equation i
            </option>;
            }}	
            -->
                <option value="1" style="font-weight: bold;background-color:white ; color:blue"> Cartestian Equation 1 </option>
                <option value="2" style="font-weight: bold;background-color:white ; color:red"> Cartestian Equation 2 </option>
                <option value="3" style="font-weight: bold;background-color:white ; color:green"> Cartestian Equation 3 </option>
                <option value="4" style="font-weight: bold;background-color:white ; color:orange"> Cartestian Equation 4 </option>
                <option value="5" style="font-weight: bold;background-color:white ; color:lime"> Cartestian Equation 5 </option>
                <option value="6" style="font-weight: bold;background-color:white ; color:cyan"> Cartestian Equation 6 </option>
                <option value="7" style="font-weight: bold;background-color:white ; color:magenta"> Cartestian Equation 7 </option>
                <option value="8" style="font-weight: bold;background-color:white ; color:silver"> Cartestian Equation 8 </option>
                <option value="9" style="font-weight: bold;background-color:white ; color:gray"> Cartestian Equation 9 </option>
                <option value="10" style="font-weight: bold;background-color:white ; color:maroon"> Cartestian Equation10 </option>
                <option value="11" style="font-weight: bold;background-color:white ; color:olive"> Cartestian Equation 11 </option>
                <option value="12" style="font-weight: bold;background-color:white ; color:purple"> Cartestian Equation 12 </option>
                <option value="13" style="font-weight: bold;background-color:white ; color:teal"> Cartestian Equation 13 </option>
                <option value="14" style="font-weight: bold;background-color:white ; color:salmon"> Cartestian Equation 14 </option>
                <option value="15" style="font-weight: bold;background-color:white ; color:gold"> Cartestian Equation 15 </option>
                <option value="16" style="font-weight: bold;background-color:white ; color:khaki"> Cartestian Equation 16 </option>
                <option value="17" style="font-weight: bold;background-color:white ; color:indigo"> Cartestian Equation 17 </option>
                <option value="18" style="font-weight: bold;background-color:white ; color:#1E90FF"> Cartestian Equation 18 </option>
                <option value="19" style="font-weight: bold;background-color:white ; color:#483D8B"> Cartestian Equation 19 </option>
                <option value="20" style="font-weight: bold;background-color:white ; color:#B8860B"> Cartestian Equation 20 </option>

        </select> 	 
        <br>
        Select color of reflection graph: 
        <select id="mydropdownreflection22" style="margin: 5px ;width: 220px; height: 30px; font-size: 16px;background-color: #eae6e0;"  onchange="Selectanequation14()">
            <option value= "0">        
                select a color
            </option>;
            <!--
            {for(int i=1; i<= 20; i++){
                  var tpp1 = "reflectionID22"+i;
                  var buttoncolor =  colorselect(i) ;//	"#000080";
            <option value=i style="font-weight: 300;background-color:white ; color:buttoncolor">        
                Color i
            </option>;
            }}	
            -->
                <option value="1" style="font-weight: bold;background-color:white ; color:blue"> Color 1 </option>
                <option value="2" style="font-weight: bold;background-color:white ; color:red"> Color 2 </option>
                <option value="3" style="font-weight: bold;background-color:white ; color:green"> Color 3 </option>
                <option value="4" style="font-weight: bold;background-color:white ; color:orange"> Color 4 </option>
                <option value="5" style="font-weight: bold;background-color:white ; color:lime"> Color 5 </option>
                <option value="6" style="font-weight: bold;background-color:white ; color:cyan"> Color 6 </option>
                <option value="7" style="font-weight: bold;background-color:white ; color:magenta"> Color 7 </option>
                <option value="8" style="font-weight: bold;background-color:white ; color:silver"> Color 8 </option>
                <option value="9" style="font-weight: bold;background-color:white ; color:gray"> Color 9 </option>
                <option value="10" style="font-weight: bold;background-color:white ; color:maroon"> Color10 </option>
                <option value="11" style="font-weight: bold;background-color:white ; color:olive"> Color 11 </option>
                <option value="12" style="font-weight: bold;background-color:white ; color:purple"> Color 12 </option>
                <option value="13" style="font-weight: bold;background-color:white ; color:teal"> Color 13 </option>
                <option value="14" style="font-weight: bold;background-color:white ; color:salmon"> Color 14 </option>
                <option value="15" style="font-weight: bold;background-color:white ; color:gold"> Color 15 </option>
                <option value="16" style="font-weight: bold;background-color:white ; color:khaki"> Color 16 </option>
                <option value="17" style="font-weight: bold;background-color:white ; color:indigo"> Color 17 </option>
                <option value="18" style="font-weight: bold;background-color:white ; color:#1E90FF"> Color 18 </option>
                <option value="19" style="font-weight: bold;background-color:white ; color:#483D8B"> Color 19 </option>
                <option value="20" style="font-weight: bold;background-color:white ; color:#B8860B"> Color 20 </option>

        </select> 	 
        <br>
        Reflect graph over: 
        <input type="button" value= "y-axis" class="submit" style="height: 30px; width: 60px;" onclick ="Reflection(1)"/>		
        <input type="button" value= "x-axis" class="submit" style="height: 30px; width: 60px; " onclick ="Reflection(2)"/>		
        <input type="button" value= "line y = x" class="submit" style="height: 30px; width: 80px; " onclick ="Reflection(3)"/>		
        <input type="button" value= "x-axis and y-axis" class="submit" style="height: 30px; width: 130px;" onclick ="Reflection(4)"/><br>		
        Reflect graph over horizontal line y = 
        <input type="text" id="ReflectY" value= "" class="submit" style="height: 30px; width: 80px; " onclick =""/>
        <input type="button" value= "submit" class="submit" style="height: 30px; width: 60px;" onclick ="Reflection(5)"/>
        <br>		
        Reflect graph over vertical line x = 
        <input type="text" id="ReflectX" value= "" class="submit" style="height: 30px; width: 80px;" onclick =""/>		
        <input type="button" value= "submit" class="submit" style="height: 30px; width: 60px;" onclick ="Reflection(6)"/>
        <input type="hidden" value= "OFF" class="submit" style="height: 30px; width: 40px;" onclick ="Reflection(0)"/>		
 		
 		
        <input id = "ReflectionModeIndicator" type="hidden" size="1" value="0" 		
            onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()"  style=" background-color:beige" autocomplete="off"   />		
		
        <br/><br/>
        Note:Reflection is only for graph with equation that starts <br>with "y = " or "x = "
        <br/><br/>     
        <input type="button" style="background-color:#ffd800;height: 30px;width:200px ; font-size:18px;" value= "CLOSE" class="submit"  onclick ="Turnoffreflectionfeature()"/>		
        <br>
    </div>*/}.toString().slice(14, -1);       

    var myString2 = (myString.toString()).replace('*/}', '');
    myString2 = myString2.replace('*/', '');        
    //alert('CreateTextboxFordrawVector');
    document.getElementById('Reflectionpanel').innerHTML = myString2;
}



function CreateTextboxForRotationpanel(){
    //alert('CreateTextboxFordrawVector');
    var myString = function(){/*
    <div style="padding:10px;font-size: 20px ;background-color:white; width: 600px;border-style: solid; border-color: black;" >
        <h2> Rotation of Cartesian Graphs &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="RotationFeatureVideo.cshtml" target="RotationFeatureVideo" >Video</a></h2>
    
        Select an equation: 
        <select id="mydropdownRotation" style=" width: 220px; height: 30px; font-size: 16px;background-color: #eae6e0;"  onchange="Selectanequation24()">
            <option value= "0">        
                select an equation
            </option>
            <!--
            {for(int i=1; i<= 20; i++){
                  var tpp1 = "RotationID"+i;
                  var buttoncolor =  colorselect(i) ;//	"#000080";
            <option value=i style="font-weight: 300;background-color:white ; color:buttoncolor">        
                Cartestian Equation i
            </option>;
            }}	
            -->
                <option value="1" style="font-weight: bold;background-color:white ; color:blue"> Cartestian Equation 1 </option>
                <option value="2" style="font-weight: bold;background-color:white ; color:red"> Cartestian Equation 2 </option>
                <option value="3" style="font-weight: bold;background-color:white ; color:green"> Cartestian Equation 3 </option>
                <option value="4" style="font-weight: bold;background-color:white ; color:orange"> Cartestian Equation 4 </option>
                <option value="5" style="font-weight: bold;background-color:white ; color:lime"> Cartestian Equation 5 </option>
                <option value="6" style="font-weight: bold;background-color:white ; color:cyan"> Cartestian Equation 6 </option>
                <option value="7" style="font-weight: bold;background-color:white ; color:magenta"> Cartestian Equation 7 </option>
                <option value="8" style="font-weight: bold;background-color:white ; color:silver"> Cartestian Equation 8 </option>
                <option value="9" style="font-weight: bold;background-color:white ; color:gray"> Cartestian Equation 9 </option>
                <option value="10" style="font-weight: bold;background-color:white ; color:maroon"> Cartestian Equation10 </option>
                <option value="11" style="font-weight: bold;background-color:white ; color:olive"> Cartestian Equation 11 </option>
                <option value="12" style="font-weight: bold;background-color:white ; color:purple"> Cartestian Equation 12 </option>
                <option value="13" style="font-weight: bold;background-color:white ; color:teal"> Cartestian Equation 13 </option>
                <option value="14" style="font-weight: bold;background-color:white ; color:salmon"> Cartestian Equation 14 </option>
                <option value="15" style="font-weight: bold;background-color:white ; color:gold"> Cartestian Equation 15 </option>
                <option value="16" style="font-weight: bold;background-color:white ; color:khaki"> Cartestian Equation 16 </option>
                <option value="17" style="font-weight: bold;background-color:white ; color:indigo"> Cartestian Equation 17 </option>
                <option value="18" style="font-weight: bold;background-color:white ; color:#1E90FF"> Cartestian Equation 18 </option>
                <option value="19" style="font-weight: bold;background-color:white ; color:#483D8B"> Cartestian Equation 19 </option>
                <option value="20" style="font-weight: bold;background-color:white ; color:#B8860B"> Cartestian Equation 20 </option>
        </select> 	 

        
        <br/><br/>    
        Degrees of rotation:        	
        <input id = "RotationDegree" type="text" value= "0" class="submit" style="height: 20px; width: 40px;  		
                background-color:   beige;" onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()"/>		
 		
 		
        <input type="button" value= "&uarr;" class="submit" style="height: 25px; width: 25px;  		
                background-color:   #b6ff00;" onclick ="RotationUp()"/>		
 		
 		
        <input type="button" value= "&darr;" class="submit" style="height: 25px; width: 25px;  		
               background-color:   #b6ff00;" onclick ="RotationDown()"/>(click on arrow to start rotation)		
         <br/>	<br/>
        Note: <br>a) Rotation is only for graph with equation that starts <br>with "y = " or "x = "	
 
        <br/><br/>b) Rotation is about the origin; <br>positive degrees of rotation is counterclockwise.	
        <br/><br/>     
      	<input type="button" style="background-color:#ffd800;height: 30px;width:200px ; font-size:18px;" value= "CLOSE" class="submit"  onclick ="TurnOffRotationFeature()"/>		
        <br>

    </div>*/}.toString().slice(14, -1);       

    var myString2 = (myString.toString()).replace('*/}', '');
    myString2 = myString2.replace('*/', '');        
    //alert('CreateTextboxFordrawVector');
    document.getElementById('Rotationpanel').innerHTML = myString2;
}


function CreateTextboxForinterceptpanel(){
    //alert('CreateTextboxFordrawVector');
    var myString = function(){/*
    <div style="padding:10px;font-size: 20px ;background-color:white; width: 600px; height:400px; overflow:scroll; border-style: solid; border-color: black;" >
        <span style="font-size: x-large">Finding x-intercept and y-intercept:</span>  
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	           
        <a href="InterceptFeatureVideo.cshtml" target="InterceptFeatureVideo" >Video</a>
        <br><br>
        Select an equation: 
        <select id="mydropdownXYIntercept" style=" width: 220px; height: 30px; font-size: 16px;background-color: #eae6e0;"  onchange="Selectanequation34()">
            <option value= "0">        
                select an equation
            </option>
            <!--
            {for(int i=1; i<= 20; i++){
                  var tpp1 = "XYInterceptID"+i;
                  var buttoncolor =  colorselect(i) ;//	"#000080";
            <option value=i style="font-weight: 300;background-color:white ; color:buttoncolor">        
                Cartestian Equation i
            </option>;
            }}	
            -->
                <option value="1" style="font-weight: bold;background-color:white ; color:blue"> Cartestian Equation 1 </option>
                <option value="2" style="font-weight: bold;background-color:white ; color:red"> Cartestian Equation 2 </option>
                <option value="3" style="font-weight: bold;background-color:white ; color:green"> Cartestian Equation 3 </option>
                <option value="4" style="font-weight: bold;background-color:white ; color:orange"> Cartestian Equation 4 </option>
                <option value="5" style="font-weight: bold;background-color:white ; color:lime"> Cartestian Equation 5 </option>
                <option value="6" style="font-weight: bold;background-color:white ; color:cyan"> Cartestian Equation 6 </option>
                <option value="7" style="font-weight: bold;background-color:white ; color:magenta"> Cartestian Equation 7 </option>
                <option value="8" style="font-weight: bold;background-color:white ; color:silver"> Cartestian Equation 8 </option>
                <option value="9" style="font-weight: bold;background-color:white ; color:gray"> Cartestian Equation 9 </option>
                <option value="10" style="font-weight: bold;background-color:white ; color:maroon"> Cartestian Equation10 </option>
                <option value="11" style="font-weight: bold;background-color:white ; color:olive"> Cartestian Equation 11 </option>
                <option value="12" style="font-weight: bold;background-color:white ; color:purple"> Cartestian Equation 12 </option>
                <option value="13" style="font-weight: bold;background-color:white ; color:teal"> Cartestian Equation 13 </option>
                <option value="14" style="font-weight: bold;background-color:white ; color:salmon"> Cartestian Equation 14 </option>
                <option value="15" style="font-weight: bold;background-color:white ; color:gold"> Cartestian Equation 15 </option>
                <option value="16" style="font-weight: bold;background-color:white ; color:khaki"> Cartestian Equation 16 </option>
                <option value="17" style="font-weight: bold;background-color:white ; color:indigo"> Cartestian Equation 17 </option>
                <option value="18" style="font-weight: bold;background-color:white ; color:#1E90FF"> Cartestian Equation 18 </option>
                <option value="19" style="font-weight: bold;background-color:white ; color:#483D8B"> Cartestian Equation 19 </option>
                <option value="20" style="font-weight: bold;background-color:white ; color:#B8860B"> Cartestian Equation 20 </option>
        </select> 	        
        
        <br>

        <span style="font-size:16px;">Search for x-intercept between <br>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           Left Bound =  
           <input type="text" id="xinterceptbound1" value= "" style="background-color:beige ;height: 20px; width: 100px;  font-size: 16px " 		
           onclick="currentID(); getCursorPosition44(this, event)"  onkeyup="symboltranslate()"/><br>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

           Right Bound =   
           <input type="text" id="xinterceptbound2"  value= "" style="background-color:beige; height: 20px; width: 100px;    font-size: 16px " 		
           onclick="currentID(); getCursorPosition44(this, event)"  onkeyup="symboltranslate()"/><br>	
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           Guess =
           <input type="text" id="guessxinterceptbound"  value= "" style="background-color:beige ; height: 20px; width: 100px;    font-size: 16px " 		
           onclick="currentID(); getCursorPosition44(this, event)"  onkeyup="symboltranslate()"/><br><br>	

           <input type="button" value= "Submit" class="submit" style="height: 25px; width: 100px;  background-color: #ffd800; " 		
           onclick="FindXIntercept('1')"/>	
           <br><br>
           <input id  ="LocationXIntercept" type="text" value="" style="height: 30px;  width:450px; color: black; font-family: black; font-size: 20px;
                         background-color: white; border-style: solid; border-color:white"/>		
           </span>
           <br><br>   <br><br>  
           <input type="button" style="background-color:yellowgreen;height: 30px;width:200px ; font-size:18px;" value= "CLOSE" onclick ="TurnOffXYInterceptFeature()"/>
           &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
           <input type="button" value= "Plot Intercept" style="height: 25px;  background-color: #b6ff00" onclick="PlotIntercept()"/>    		
           <br><br>

        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

        <span style="font-size:16px;">Search for y-intercept between y =  
        <input type="text" id="yinterceptbound1" value= "" class="submit" style="height: 20px; width: 50px;  font-size: 16px " 		
        onclick="currentID(); getCursorPosition44(this, event)"  onkeyup="symboltranslate()"/>	
        &nbsp;&nbsp; and &nbsp;&nbsp;y =   
        <input type="text" id="yinterceptbound2"  value= "" class="submit" style="height: 20px; width: 50px;    font-size: 16px " 		
        onclick="currentID(); getCursorPosition44(this, event)"  onkeyup="symboltranslate()"/>	
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="button" value= "Submit" class="submit" style="height: 25px; width: 70px;  background-color: #ffd800; " 		
            onclick="FindXIntercept('2')"/>		
        </span>
        <br>

    </div>*/}.toString().slice(14, -1);       

    var myString2 = (myString.toString()).replace('*/}', '');
    myString2 = myString2.replace('*/', '');        
    //alert('CreateTextboxFordrawVector');
    document.getElementById('interceptpanel').innerHTML = myString2;
}




function CreateTextboxForintersectionpanel(){
   //alert('CreateTextboxFordrawVector');
        var myString = function(){/*
    <div style="padding:10px;font-size: 20px ;background-color:white; width: 600px;border-style: solid; border-color: black;" >

        <span style="font-size: x-large" >Finding Intersection of Two Graphs:</span> 
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="IntersectionFeatureVideo.cshtml" target="IntersectionFeatureVideo" >Video</a>
        <br><br>
        Select First Curve: 
        <select id="mydropdownIntersectionAA" style=" width: 220px; height: 30px; font-size: 16px;background-color: #eae6e0;"  onchange="intersectEqu1()">
            <option value= "0">        
                select an equation
            </option>
            <!--
            {for(int i=1; i<= 20; i++){
                  var tpp1 = "IntersectionAA"+i;
                  var buttoncolor =  colorselect(i) ;//	"#000080";
            <option value=i style="font-weight: 300;background-color:white ; color:buttoncolor">        
                Cartestian Equation i
            </option>;
            }}	
            -->
                <option value="1" style="font-weight: bold;background-color:white ; color:blue"> Cartestian Equation 1 </option>
                <option value="2" style="font-weight: bold;background-color:white ; color:red"> Cartestian Equation 2 </option>
                <option value="3" style="font-weight: bold;background-color:white ; color:green"> Cartestian Equation 3 </option>
                <option value="4" style="font-weight: bold;background-color:white ; color:orange"> Cartestian Equation 4 </option>
                <option value="5" style="font-weight: bold;background-color:white ; color:lime"> Cartestian Equation 5 </option>
                <option value="6" style="font-weight: bold;background-color:white ; color:cyan"> Cartestian Equation 6 </option>
                <option value="7" style="font-weight: bold;background-color:white ; color:magenta"> Cartestian Equation 7 </option>
                <option value="8" style="font-weight: bold;background-color:white ; color:silver"> Cartestian Equation 8 </option>
                <option value="9" style="font-weight: bold;background-color:white ; color:gray"> Cartestian Equation 9 </option>
                <option value="10" style="font-weight: bold;background-color:white ; color:maroon"> Cartestian Equation10 </option>
                <option value="11" style="font-weight: bold;background-color:white ; color:olive"> Cartestian Equation 11 </option>
                <option value="12" style="font-weight: bold;background-color:white ; color:purple"> Cartestian Equation 12 </option>
                <option value="13" style="font-weight: bold;background-color:white ; color:teal"> Cartestian Equation 13 </option>
                <option value="14" style="font-weight: bold;background-color:white ; color:salmon"> Cartestian Equation 14 </option>
                <option value="15" style="font-weight: bold;background-color:white ; color:gold"> Cartestian Equation 15 </option>
                <option value="16" style="font-weight: bold;background-color:white ; color:khaki"> Cartestian Equation 16 </option>
                <option value="17" style="font-weight: bold;background-color:white ; color:indigo"> Cartestian Equation 17 </option>
                <option value="18" style="font-weight: bold;background-color:white ; color:#1E90FF"> Cartestian Equation 18 </option>
                <option value="19" style="font-weight: bold;background-color:white ; color:#483D8B"> Cartestian Equation 19 </option>
                <option value="20" style="font-weight: bold;background-color:white ; color:#B8860B"> Cartestian Equation 20 </option>



        </select> 	        
        
        <br><br>
        Select Second Curve: 
        <select id="mydropdownIntersectionBB" style=" width: 220px; height: 30px; font-size: 16px;background-color: #eae6e0;"  onchange="intersectEqu2()">
            <option value= "0">        
                select an equation
            </option>
            <!--
            {for(int i=1; i<= 20; i++){
                  var tpp1 = "IntersectionBB"+i;
                  var buttoncolor =  colorselect(i) ;//	"#000080";
            <option value=i style="font-weight: 300;background-color:white ; color:buttoncolor">        
                Cartestian Equation i
            </option>;
            }}	
            -->
                <option value="1" style="font-weight: bold;background-color:white ; color:blue"> Cartestian Equation 1 </option>
                <option value="2" style="font-weight: bold;background-color:white ; color:red"> Cartestian Equation 2 </option>
                <option value="3" style="font-weight: bold;background-color:white ; color:green"> Cartestian Equation 3 </option>
                <option value="4" style="font-weight: bold;background-color:white ; color:orange"> Cartestian Equation 4 </option>
                <option value="5" style="font-weight: bold;background-color:white ; color:lime"> Cartestian Equation 5 </option>
                <option value="6" style="font-weight: bold;background-color:white ; color:cyan"> Cartestian Equation 6 </option>
                <option value="7" style="font-weight: bold;background-color:white ; color:magenta"> Cartestian Equation 7 </option>
                <option value="8" style="font-weight: bold;background-color:white ; color:silver"> Cartestian Equation 8 </option>
                <option value="9" style="font-weight: bold;background-color:white ; color:gray"> Cartestian Equation 9 </option>
                <option value="10" style="font-weight: bold;background-color:white ; color:maroon"> Cartestian Equation10 </option>
                <option value="11" style="font-weight: bold;background-color:white ; color:olive"> Cartestian Equation 11 </option>
                <option value="12" style="font-weight: bold;background-color:white ; color:purple"> Cartestian Equation 12 </option>
                <option value="13" style="font-weight: bold;background-color:white ; color:teal"> Cartestian Equation 13 </option>
                <option value="14" style="font-weight: bold;background-color:white ; color:salmon"> Cartestian Equation 14 </option>
                <option value="15" style="font-weight: bold;background-color:white ; color:gold"> Cartestian Equation 15 </option>
                <option value="16" style="font-weight: bold;background-color:white ; color:khaki"> Cartestian Equation 16 </option>
                <option value="17" style="font-weight: bold;background-color:white ; color:indigo"> Cartestian Equation 17 </option>
                <option value="18" style="font-weight: bold;background-color:white ; color:#1E90FF"> Cartestian Equation 18 </option>
                <option value="19" style="font-weight: bold;background-color:white ; color:#483D8B"> Cartestian Equation 19 </option>
                <option value="20" style="font-weight: bold;background-color:white ; color:#B8860B"> Cartestian Equation 20 </option>



        </select> 	        
        
        <br><br>
        <span>Guess (input approximate location of intersection): </span>
        <br>
        <span style="font-size: xx-large">(</span>  
        <input type="text" id="LocationIntersectionX" value= "" class="submit" style="height: 20px; width: 100px;  font-size: 12px " 		
        onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()" />	
        &nbsp;&nbsp; , &nbsp;&nbsp;   
        <input type="text" id="LocationIntersectionY"  value= "" class="submit" style="height: 20px; width: 100px;    font-size: 12px " 		
        onclick="currentID(); getCursorPosition44(this, event)"  onkeyup="symboltranslate()"/><span style="font-size: xx-large">)</span> 
        &nbsp;&nbsp; &nbsp;&nbsp; 
        <input type="button" value= "Submit" class="submit" style="height: 25px; width: 70px;  background-color: #ffd800; " 		
            onclick="FindIntersectionPoint()"/>		
        
        <br><br>
        <input id ="LocationIntersection" type="text" value="" style="height: 30px;  width:450px; color: green; 
                   font-family: black; font-size: 18px; background-color: white; border-style: solid; border-color:white"/>		
        <br/><br/>     
        <input type="button" style="background-color:#ffd800;height: 30px;width:200px ; font-size:18px;" value= "CLOSE" class="submit"  onclick ="TurnOffIntersectionFeature()"/>		
        &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
        <input type="button" value= "Plot Point of Intersection" class="submit" style="height: 25px;  background-color: #b6ff00" 		
            onclick="PlotPointofIntersection()"/>
        <br>

    </div>*/}.toString().slice(14, -1);       

    var myString2 = (myString.toString()).replace('*/}', '');
    myString2 = myString2.replace('*/', '');        
    //alert('CreateTextboxFordrawVector');
    document.getElementById('intersectionpanel').innerHTML = myString2;
}


function CreateTextboxForExtremumpanel(){
    //alert('CreateTextboxFordrawVector');
    var myString = function(){/*
    <div style="padding:10px;font-size: 20px ;background-color:white; width: 600px;border-style: solid; border-color: black;" >
        <span style="font-size: x-large" >Finding Maximum or Minimum:</span>    
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="VideoFindExtremum.cshtml" target="VideoFindExtremum" >Video</a>
        <br><br>
        Select a graph: 
        <select id="mydropdownExtremum" style=" width: 220px; height: 30px; font-size: 16px;background-color: #eae6e0;"  onchange="">
           <option value= "0">select an equation </option>
                <!--
                {for(int i=1; i<= 20; i++){
                      var tpp1 = "Extremum"+i;
                      var buttoncolor =  colorselect(i) ;//	"#000080";
                <option value=i style="font-weight: 300;background-color:white ; color:buttoncolor">        
                    Cartestian Equation i
                </option>;
                }}	
                -->
           <option value="1" style="font-weight: bold;background-color:white ; color:blue"> Cartestian Equation 1 </option>
           <option value="2" style="font-weight: bold;background-color:white ; color:red"> Cartestian Equation 2 </option>
           <option value="3" style="font-weight: bold;background-color:white ; color:green"> Cartestian Equation 3 </option>
           <option value="4" style="font-weight: bold;background-color:white ; color:orange"> Cartestian Equation 4 </option>
           <option value="5" style="font-weight: bold;background-color:white ; color:lime"> Cartestian Equation 5 </option>
           <option value="6" style="font-weight: bold;background-color:white ; color:cyan"> Cartestian Equation 6 </option>
           <option value="7" style="font-weight: bold;background-color:white ; color:magenta"> Cartestian Equation 7 </option>
           <option value="8" style="font-weight: bold;background-color:white ; color:silver"> Cartestian Equation 8 </option>
           <option value="9" style="font-weight: bold;background-color:white ; color:gray"> Cartestian Equation 9 </option>
           <option value="10" style="font-weight: bold;background-color:white ; color:maroon"> Cartestian Equation10 </option>
           <option value="11" style="font-weight: bold;background-color:white ; color:olive"> Cartestian Equation 11 </option>
           <option value="12" style="font-weight: bold;background-color:white ; color:purple"> Cartestian Equation 12 </option>
           <option value="13" style="font-weight: bold;background-color:white ; color:teal"> Cartestian Equation 13 </option>
           <option value="14" style="font-weight: bold;background-color:white ; color:salmon"> Cartestian Equation 14 </option>
           <option value="15" style="font-weight: bold;background-color:white ; color:gold"> Cartestian Equation 15 </option>
           <option value="16" style="font-weight: bold;background-color:white ; color:khaki"> Cartestian Equation 16 </option>
           <option value="17" style="font-weight: bold;background-color:white ; color:indigo"> Cartestian Equation 17 </option>
           <option value="18" style="font-weight: bold;background-color:white ; color:#1E90FF"> Cartestian Equation 18 </option>
           <option value="19" style="font-weight: bold;background-color:white ; color:#483D8B"> Cartestian Equation 19 </option>
           <option value="20" style="font-weight: bold;background-color:white ; color:#B8860B"> Cartestian Equation 20 </option>
        </select> 	        
        <br>
        <fieldset style="border-style: solid; border-color: black; font-size: large">
                      For equation with "y = ":<br>
                      <span>Search for maximum/minimum point between <br>
                      Left Bound = 
                     <input type="text" id="extremebound1" value= "" class="submit" style="height: 20px; width: 70px;  background-color:  beige;  font-size: 12px " onclick="currentID()" />	
                     <br> <br> 
                     Right Bound = 
                    <input type="text" id="extremebound2"  value= "" class="submit" style="height: 20px; width: 70px;  background-color: beige;  font-size: 12px "  onclick="currentID()" />	
                    </span>
                    <br> <br> 
                    Guess =
                    <input type="text" id="guessextremebound2"  value= "" class="submit" style="height: 20px; width: 70px;  background-color: beige;  font-size: 12px " onclick="currentID()" />	
                   </span><br><br> <br> 

 
            <span style="font-size: small">&nbsp;&nbsp;</span>		
            <input type="button" value= "Find Minimum" class="submit" style="height: 25px; width: 140px;  background-color: #ffd800;  font-size: 14px " 		
            onclick="FindExtremumPoint('1')"/>	
 
            <span style="font-size: small">&nbsp;&nbsp;</span>		
            <input type="button" value= "Find Maximum" class="submit" style="height: 25px; width: 140px;  background-color: #ffd800;  font-size: 14px " 		
            onclick="FindExtremumPoint('2')"/>	
            <br/>
            <input id  ="LocationExtremum" type="text" value="" style="height: 30px;  width:450px; color: #ff6a00; 
                           font-family: black; font-size: 16px; background-color: white; border-style: solid; border-color:white"/>		

        </fieldset>
        <br/> <br/>
        <fieldset style="border-style: solid; border-color: black; font-size: large">
            For equation with "x = ":<br>
            Search for leftmost/rightmost point <br>between y = 
            <input type="text" id="extremebound3"  value= "" class="submit" style="height: 20px; width: 60px;    font-size: 12px " 		
             onclick="currentID(); getCursorPosition44(this, event)"  onkeyup="symboltranslate()"/>	
             &nbsp;&nbsp; and &nbsp;&nbsp; y = 
             <input type="text" id="extremebound4"  value= "" class="submit" style="height: 20px; width: 60px;    font-size: 12px " 		
             onclick="currentID(); getCursorPosition44(this, event)"  onkeyup="symboltranslate()"/>
             <br>
             <input type="button" value= "Find Leftmost" class="submit" style="height: 25px; width: 160px;  background-color: #ffd800;  font-size: 14px " 		
                 onclick="FindExtremumPoint('3')"/>	
             <input type="button" value= "Find Rightmost Point" class="submit" style="height: 25px; width: 160px;  background-color: #ffd800;  font-size: 14px" 		
                 onclick="FindExtremumPoint('4')"/>	
             <br>
             <input id  ="LocationExtremum2" type="text" value="" style="height: 30px;  width:450px; color: #ff6a00; 
                font-family: black; font-size: 16px; background-color: white; border-style: solid; border-color:white"/>		
    
        </fieldset>
        <br/><br/>     
        <input type="button" style="background-color:yellowgreen; height: 40px;width:200px ; font-size:18px;" value= "CLOSE" class="submit"  onclick ="TurnOffExtremumFeature()"/>		
        <br>

    </div>*/}.toString().slice(14, -1);       

    var myString2 = (myString.toString()).replace('*/}', '');
    myString2 = myString2.replace('*/', '');        
    //alert('CreateTextboxFordrawVector');
    document.getElementById('Extremumpanel').innerHTML = myString2;
}



function CreateTextboxForShadingpanel(){
        //alert('CreateTextboxFordrawVector');
        var myString = function(){/*
     
    <div style="overflow: scroll;padding:10px;font-size: 20px ;background-color:white; width: 550px; height: 400px;border-style: solid; border-color: black;" >
        <h2> Shading/Painting&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="http://youtu.be/NI3gjW6hrwg" target="shadingfeature">video</a> 
        <input type="button" style="margin-left:40px;background-color:#ffd800;height: 30px;width:100px ; font-size:18px;" value= "CLOSE" class="submit"  onclick ="ClearShading3344()"/>		

        </h2> 
 



<div id="shadingbetweencurves"  style="overflow: scroll;  width:520px; height: 180px; color: black; font-family: black; font-weight: bold; font-size: 14px; border-style: solid; border-color: black">		
    Shading between two graphs y<sub>1</sub> and y<sub>2</sub>:<br>
    Select First Graph: 
        <select id="mydropdownShadingEquation1" style=" width: 200px; height: 30px; font-size: 16px;background-color: #eae6e0;"  onchange="intersectEqu44A()">
            <option value= "0">        
                select an equation
            </option>;
                <option value="1" style="font-weight: bold;background-color:white ; color:blue"> Cartestian Equation 1 </option>
                <option value="2" style="font-weight: bold;background-color:white ; color:red"> Cartestian Equation 2 </option>
                <option value="3" style="font-weight: bold;background-color:white ; color:green"> Cartestian Equation 3 </option>
                <option value="4" style="font-weight: bold;background-color:white ; color:orange"> Cartestian Equation 4 </option>
                <option value="5" style="font-weight: bold;background-color:white ; color:lime"> Cartestian Equation 5 </option>
                <option value="6" style="font-weight: bold;background-color:white ; color:cyan"> Cartestian Equation 6 </option>
                <option value="7" style="font-weight: bold;background-color:white ; color:magenta"> Cartestian Equation 7 </option>
                <option value="8" style="font-weight: bold;background-color:white ; color:silver"> Cartestian Equation 8 </option>
                <option value="9" style="font-weight: bold;background-color:white ; color:gray"> Cartestian Equation 9 </option>
                <option value="10" style="font-weight: bold;background-color:white ; color:maroon"> Cartestian Equation10 </option>
                <option value="11" style="font-weight: bold;background-color:white ; color:olive"> Cartestian Equation 11 </option>
                <option value="12" style="font-weight: bold;background-color:white ; color:purple"> Cartestian Equation 12 </option>
                <option value="13" style="font-weight: bold;background-color:white ; color:teal"> Cartestian Equation 13 </option>
                <option value="14" style="font-weight: bold;background-color:white ; color:salmon"> Cartestian Equation 14 </option>
                <option value="15" style="font-weight: bold;background-color:white ; color:gold"> Cartestian Equation 15 </option>
                <option value="16" style="font-weight: bold;background-color:white ; color:khaki"> Cartestian Equation 16 </option>
                <option value="17" style="font-weight: bold;background-color:white ; color:indigo"> Cartestian Equation 17 </option>
                <option value="18" style="font-weight: bold;background-color:white ; color:#1E90FF"> Cartestian Equation 18 </option>
                <option value="19" style="font-weight: bold;background-color:white ; color:#483D8B"> Cartestian Equation 19 </option>
                <option value="20" style="font-weight: bold;background-color:white ; color:#B8860B"> Cartestian Equation 20 </option>


        </select> 	        
        
        <br>
    Select Second Graph: 
        <select id="mydropdownShadingEquation2" style=" width: 200px; height: 30px; font-size: 16px;background-color: #eae6e0;"  onchange="intersectEqu44B()">
            <option value= "0">        
                select an equation
            </option>;
                <option value="1" style="font-weight: bold;background-color:white ; color:blue"> Cartestian Equation 1 </option>
                <option value="2" style="font-weight: bold;background-color:white ; color:red"> Cartestian Equation 2 </option>
                <option value="3" style="font-weight: bold;background-color:white ; color:green"> Cartestian Equation 3 </option>
                <option value="4" style="font-weight: bold;background-color:white ; color:orange"> Cartestian Equation 4 </option>
                <option value="5" style="font-weight: bold;background-color:white ; color:lime"> Cartestian Equation 5 </option>
                <option value="6" style="font-weight: bold;background-color:white ; color:cyan"> Cartestian Equation 6 </option>
                <option value="7" style="font-weight: bold;background-color:white ; color:magenta"> Cartestian Equation 7 </option>
                <option value="8" style="font-weight: bold;background-color:white ; color:silver"> Cartestian Equation 8 </option>
                <option value="9" style="font-weight: bold;background-color:white ; color:gray"> Cartestian Equation 9 </option>
                <option value="10" style="font-weight: bold;background-color:white ; color:maroon"> Cartestian Equation10 </option>
                <option value="11" style="font-weight: bold;background-color:white ; color:olive"> Cartestian Equation 11 </option>
                <option value="12" style="font-weight: bold;background-color:white ; color:purple"> Cartestian Equation 12 </option>
                <option value="13" style="font-weight: bold;background-color:white ; color:teal"> Cartestian Equation 13 </option>
                <option value="14" style="font-weight: bold;background-color:white ; color:salmon"> Cartestian Equation 14 </option>
                <option value="15" style="font-weight: bold;background-color:white ; color:gold"> Cartestian Equation 15 </option>
                <option value="16" style="font-weight: bold;background-color:white ; color:khaki"> Cartestian Equation 16 </option>
                <option value="17" style="font-weight: bold;background-color:white ; color:indigo"> Cartestian Equation 17 </option>
                <option value="18" style="font-weight: bold;background-color:white ; color:#1E90FF"> Cartestian Equation 18 </option>
                <option value="19" style="font-weight: bold;background-color:white ; color:#483D8B"> Cartestian Equation 19 </option>
                <option value="20" style="font-weight: bold;background-color:white ; color:#B8860B"> Cartestian Equation 20 </option>

        </select> 	        
        
        <br><br>
        <span>Shade between <i>a</i> and <i>b</i> :</span><br>
        <span style="font-size: 20px">a = </span>          
        <input type="text" id="AValueShading" value= ""  style="height: 20px; width: 100px;  background-color:  beige;  font-size: 12px " 		
        onclick="currentID()" />	
        &nbsp;&nbsp;&nbsp;&nbsp;   
        <span style="font-size: 20px">b = </span>  
        <input type="text" id="BValueShading"  value= "" class="submit" style="height: 20px; width: 100px;  background-color: beige;  font-size: 12px " 		
        onclick="currentID()" />
        &nbsp;&nbsp; &nbsp;&nbsp; 
         <input type="button" style="background-color:#ffd800;height: 35px;width:100px ; font-size:18px;" value= "Submit" 
           onclick ="document.getElementById('CheckboxShading').checked = true; GraphingCalculator()"/>		

        <input type="checkbox" value= ""   id="CheckboxShading"  style="margin-left:30px;top: 195px; left: 575px;height: 30px; width: 30px;  background-color: Transparent;border-style: solid;border-color: black ; text-align: left;font-family: black; font-weight: bold;" onclick=" GraphingCalculator()"/>	

    </div>		
<br>


<div id="shadingbetweencurves22"  style="overflow: scroll;  width:520px; height: 180px; color: black; font-family: black; font-weight: bold; font-size: 14px; border-style: solid; border-color: black">		
    Shading between two graphs x<sub>1</sub> and x<sub>2</sub>:<br>
    Select First Graph: 
        <select id="mydropdownShadingEquation1bb" style=" width: 200px; height: 30px; font-size: 16px;background-color: #eae6e0;"  onchange="intersectEqu44A()">
            <option value= "0">        
                select an equation
            </option>;
                <option value="1" style="font-weight: bold;background-color:white ; color:blue"> Cartestian Equation 1 </option>
                <option value="2" style="font-weight: bold;background-color:white ; color:red"> Cartestian Equation 2 </option>
                <option value="3" style="font-weight: bold;background-color:white ; color:green"> Cartestian Equation 3 </option>
                <option value="4" style="font-weight: bold;background-color:white ; color:orange"> Cartestian Equation 4 </option>
                <option value="5" style="font-weight: bold;background-color:white ; color:lime"> Cartestian Equation 5 </option>
                <option value="6" style="font-weight: bold;background-color:white ; color:cyan"> Cartestian Equation 6 </option>
                <option value="7" style="font-weight: bold;background-color:white ; color:magenta"> Cartestian Equation 7 </option>
                <option value="8" style="font-weight: bold;background-color:white ; color:silver"> Cartestian Equation 8 </option>
                <option value="9" style="font-weight: bold;background-color:white ; color:gray"> Cartestian Equation 9 </option>
                <option value="10" style="font-weight: bold;background-color:white ; color:maroon"> Cartestian Equation10 </option>
                <option value="11" style="font-weight: bold;background-color:white ; color:olive"> Cartestian Equation 11 </option>
                <option value="12" style="font-weight: bold;background-color:white ; color:purple"> Cartestian Equation 12 </option>
                <option value="13" style="font-weight: bold;background-color:white ; color:teal"> Cartestian Equation 13 </option>
                <option value="14" style="font-weight: bold;background-color:white ; color:salmon"> Cartestian Equation 14 </option>
                <option value="15" style="font-weight: bold;background-color:white ; color:gold"> Cartestian Equation 15 </option>
                <option value="16" style="font-weight: bold;background-color:white ; color:khaki"> Cartestian Equation 16 </option>
                <option value="17" style="font-weight: bold;background-color:white ; color:indigo"> Cartestian Equation 17 </option>
                <option value="18" style="font-weight: bold;background-color:white ; color:#1E90FF"> Cartestian Equation 18 </option>
                <option value="19" style="font-weight: bold;background-color:white ; color:#483D8B"> Cartestian Equation 19 </option>
                <option value="20" style="font-weight: bold;background-color:white ; color:#B8860B"> Cartestian Equation 20 </option>


        </select> 	        
        
        <br>
    Select Second Graph: 
        <select id="mydropdownShadingEquation2bb" style=" width: 200px; height: 30px; font-size: 16px;background-color: #eae6e0;"  onchange="intersectEqu44B()">
            <option value= "0">        
                select an equation
            </option>;
                <option value="1" style="font-weight: bold;background-color:white ; color:blue"> Cartestian Equation 1 </option>
                <option value="2" style="font-weight: bold;background-color:white ; color:red"> Cartestian Equation 2 </option>
                <option value="3" style="font-weight: bold;background-color:white ; color:green"> Cartestian Equation 3 </option>
                <option value="4" style="font-weight: bold;background-color:white ; color:orange"> Cartestian Equation 4 </option>
                <option value="5" style="font-weight: bold;background-color:white ; color:lime"> Cartestian Equation 5 </option>
                <option value="6" style="font-weight: bold;background-color:white ; color:cyan"> Cartestian Equation 6 </option>
                <option value="7" style="font-weight: bold;background-color:white ; color:magenta"> Cartestian Equation 7 </option>
                <option value="8" style="font-weight: bold;background-color:white ; color:silver"> Cartestian Equation 8 </option>
                <option value="9" style="font-weight: bold;background-color:white ; color:gray"> Cartestian Equation 9 </option>
                <option value="10" style="font-weight: bold;background-color:white ; color:maroon"> Cartestian Equation10 </option>
                <option value="11" style="font-weight: bold;background-color:white ; color:olive"> Cartestian Equation 11 </option>
                <option value="12" style="font-weight: bold;background-color:white ; color:purple"> Cartestian Equation 12 </option>
                <option value="13" style="font-weight: bold;background-color:white ; color:teal"> Cartestian Equation 13 </option>
                <option value="14" style="font-weight: bold;background-color:white ; color:salmon"> Cartestian Equation 14 </option>
                <option value="15" style="font-weight: bold;background-color:white ; color:gold"> Cartestian Equation 15 </option>
                <option value="16" style="font-weight: bold;background-color:white ; color:khaki"> Cartestian Equation 16 </option>
                <option value="17" style="font-weight: bold;background-color:white ; color:indigo"> Cartestian Equation 17 </option>
                <option value="18" style="font-weight: bold;background-color:white ; color:#1E90FF"> Cartestian Equation 18 </option>
                <option value="19" style="font-weight: bold;background-color:white ; color:#483D8B"> Cartestian Equation 19 </option>
                <option value="20" style="font-weight: bold;background-color:white ; color:#B8860B"> Cartestian Equation 20 </option>

        </select> 	        
        
        <br><br>
        <span>Shade between <i>c</i> and <i>d</i> :</span><br>
        <span style="font-size: 20px">c = </span>          
        <input type="text" id="AValueShadingbb" value= ""  style="height: 20px; width: 100px;  background-color:  beige;  font-size: 12px " 		
        onclick="currentID()" />	
        &nbsp;&nbsp;&nbsp;&nbsp;   
        <span style="font-size: 20px">d = </span>  
        <input type="text" id="BValueShadingbb"  value= "" class="submit" style="height: 20px; width: 100px;  background-color: beige;  font-size: 12px " 		
        onclick="currentID()" />
        &nbsp;&nbsp; &nbsp;&nbsp; 
         <input type="button" style="background-color:#ffd800;height: 35px;width:100px ; font-size:18px;" value= "Submit" 
           onclick ="document.getElementById('CheckboxShadingbb').checked = true; GraphingCalculator()"/>		

        <input type="checkbox" value= ""   id="CheckboxShadingbb"  style="margin-left:30px;top: 195px; left: 575px;height: 30px; width: 30px;  background-color: Transparent;border-style: solid;border-color: black ; text-align: left;font-family: black; font-weight: bold;" onclick=" GraphingCalculator()"/>	

    </div>		
<br>

<div id="shadingbetweencurves22"  style="overflow: scroll;  width:520px; height: 180px; color: black; font-family: black; font-weight: bold; font-size: 14px; border-style: solid; border-color: black">		
        Freestyle shading:<br>
        <span style="font-size: small">Enter Stroke Width:</span>	
        &nbsp;
        <input id = "StrokeWidthBox" type="text" value= "5" class="submit" style="height: 30px; width: 80px;" onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()"/>	
        &nbsp;&nbsp;
        <span style="font-size: small">(Enter a value between 1 and 100; default value is 5.)</span>	
            
        <br/>	
        <span style="font-size: small">Transparency Level:&nbsp;</span>
        <input id = "TransparencyLevel" type="text" value= "0.4" class="submit" style="height: 30px; width: 80px; " onclick="currentID(); getCursorPosition44(this, event)"  onkeyup="symboltranslate()"/>	
                     	
        <span style="font-size: small">(Enter a value between 0.1 and 1; default value is 0.4.)</span>	

        <br/>	
 
        <span style="font-size: small">Select a shading color:</span>
        <select id="mydropdownShadingColor" style=" width: 220px; height: 30px; font-size: 16px;background-color: #eae6e0;"  onchange="selectacolor11bb()">
            <option value= "0">        
                select a color
            </option>
            <!--
            {for(int i=1; i<= 17; i++){
                  var tpp1 = "Shading"+i;
                  var buttoncolor =  colorselect(i) ;//	"#000080";
            <option value=i style="font-weight: 300;background-color:white ; color:buttoncolor">        
                buttoncolor
            </option>;
            }}	
            -->
                <option value="1" style="font-weight: bold;background-color:blue ; color:blue"> blue </option>
                <option value="2" style="font-weight: bold;background-color:red ; color:red"> red </option>
                <option value="3" style="font-weight: bold;background-color:green ; color:green"> green </option>
                <option value="4" style="font-weight: bold;background-color:orange ; color:orange"> orange </option>
                <option value="5" style="font-weight: bold;background-color:lime ; color:lime"> lime </option>
                <option value="6" style="font-weight: bold;background-color:cyan ; color:cyan"> cyan </option>
                <option value="7" style="font-weight: bold;background-color:magenta ; color:magenta"> magenta </option>
                <option value="8" style="font-weight: bold;background-color:silver ; color:silver"> silver </option>
                <option value="9" style="font-weight: bold;background-color:gray ; color:gray"> gray </option>
                <option value="10" style="font-weight: bold;background-color:maroon ; color:maroon"> maroon </option>
                <option value="11" style="font-weight: bold;background-color:olive ; color:olive"> olive </option>
                <option value="12" style="font-weight: bold;background-color:purple ; color:purple"> purple </option>
                <option value="13" style="font-weight: bold;background-color:teal ; color:teal"> teal </option>
                <option value="14" style="font-weight: bold;background-color:salmon ; color:salmon"> salmon </option>
                <option value="15" style="font-weight: bold;background-color:gold ; color:gold"> gold </option>
                <option value="16" style="font-weight: bold;background-color:khaki ; color:khaki"> khaki </option>
                <option value="17" style="font-weight: bold;background-color:indigo ; color:indigo"> indigo </option>
                <option value="18" style="font-weight: bold;background-color:#1E90FF ; color:#1E90FF"> Color 18 </option>
                <option value="19" style="font-weight: bold;background-color:#483D8B ; color:#483D8B"> Color 19 </option>
                <option value="20" style="font-weight: bold;background-color:#B8860B ; color:#B8860B"> Color 20 </option>

        </select> 	        
        <span id="selectacolor11" style="width: 50px;height: 30px"></span>
        <br>
        <span style="font-size: small">Select a shading tool:</span>
        <select id="mydropdownShadingTool" style=" width: 220px; height: 30px; font-size: 16px;background-color: #eae6e0;"  onchange="">
            <option value= "0">select a shading tool</option>
            <option value="1">Brush/Pencil</option>
            <option value="2">Line</option>
            <option value="3">Filled Circle</option>
            <option value="4">Open Circle</option>
            <option value="5">Filled Rectangle</option>
            <option value="6">Open Rectangle</option>
        </select> 
        <br>    

        <input type="button" value= "Clear Shading" class="submit" style="height: 28px; width: 100px;  		
                background-color:   cyan" onclick ="ClearShading()"/>		
        <button type="button" title="Undo" value= "" class="submit" style="height: 30px; width: 40px;  		
                background-color:   white" onclick ="cUndo()"><img src="undoicon.png" alt="Blank"/>  </button>
        <button type="button" title="Redo"  value= "" class="submit" style="height: 30px; width: 40px;  		
                background-color:   white" onclick ="cRedo()"><img src="redoicon.png" alt="Blank"/>  </button>

        <br/><br/>     
        <input type="button" style="background-color:#ffd800;height: 30px;width:200px ; font-size:18px;" value= "CLOSE" class="submit"  onclick ="ClearShading3344()"/>		

        <br/><br/><br/><br/>
       	        
    </div>
    
 
    
    
    
    */}.toString().slice(14, -1);       

    var myString2 = (myString.toString()).replace('*/}', '');
    myString2 = myString2.replace('*/', '');        
    //alert('CreateTextboxFordrawVector');
    document.getElementById('Shadingpanel').innerHTML = myString2;
}


function CreateTextboxForLinepanel1(){
    //alert('CreateTextboxFordrawVector');
    var myString = function(){/*
    <div style="padding:10px;font-size: 20px ;background-color:white; width: 600px;border-style: solid; border-color: black;" >

        <span style="font-size: x-large" >Drawing Line With Two Given Points</span>   
        <br/><br/>
        Input Point 1:&nbsp;&nbsp; x<sub>1</sub> = <input type="text" id = "DrawLinePoint1X"  value="" style="height: 20px; width: 100px; " onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()" />
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 y<sub>1</sub> = <input type="text" id = "DrawLinePoint1Y"  value="" style="height: 20px; width: 100px; " onclick="currentID(); getCursorPosition44(this, event)"  onkeyup="symboltranslate()"/>
        <br/>   <br/>  
        Input Point 2:&nbsp;&nbsp; x<sub>2</sub> = <input type="text" id = "DrawLinePoint2X"  value="" style="height: 20px; width: 100px; " onclick="currentID(); getCursorPosition44(this, event)"  onkeyup="symboltranslate()"/>
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 y<sub>2</sub> = <input type="text" id = "DrawLinePoint2Y"  value="" style="height: 20px; width: 100px; " onclick="currentID(); getCursorPosition44(this, event)"  onkeyup="symboltranslate()"/>
        <br/><br/>
       <input type="button" value= "Submit" class="submit" style="height: 25px; width: 60px;  background-color: #ffd800; " 		
       onclick="DrawLineTwoPoints1()"/>
        &nbsp;&nbsp;&nbsp;
       <input type="button" value= "Example" class="submit" style="height: 25px; width: 90px;  background-color: #b6ff00 " 		
       onclick="DrawLineTwoPoints1Example()"/>
        &nbsp;&nbsp;&nbsp;
       <input type="button" value= "Clear" class="submit" style="height: 25px; width: 50px;  background-color: cyan" 		
       onclick="clearABC()"/>
        <br/><br/>     
        <input type="button" style="background-color:#ffd800;height: 30px;width:200px ; font-size:18px;" value= "CLOSE" class="submit"  onclick ="TurnOffLinepanel1()"/>		

      </div>*/}.toString().slice(14, -1);       

    var myString2 = (myString.toString()).replace('*/}', '');
    myString2 = myString2.replace('*/', '');        
    //alert('CreateTextboxFordrawVector');
    document.getElementById('Linepanel1').innerHTML = myString2;
}


function CreateTextboxForLinepanel2(){
    //alert('CreateTextboxFordrawVector');
    var myString = function(){/*
    <div style="padding:10px;font-size: 20px ;background-color:white; width: 600px;border-style: solid; border-color: black;" >

        <span style="font-size: x-large" >Drawing Line With Given Slope and One Point</span>   
        <br/><br/>
        Input Slope = <input type="text" id = "DrawLineSlope"  value="" style="height: 20px; width: 60px; " onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()"/>
        <br/> <br/>      
        Input Point : &nbsp;&nbsp;x<sub>1</sub> = <input type="text" id = "DrawLinePointPoint2X"  value="" style="height: 20px; width: 60px; " onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()"/>
                 &nbsp;&nbsp;&nbsp;&nbsp;y<sub>1</sub> = <input type="text" id = "DrawLinePointPoint2Y"  value="" style="height: 20px; width: 60px; " onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()"/>
        <br/> <br/>   
        <input type="button" value= "Submit" class="submit" style="height: 25px; width: 60px;  background-color: #ffd800; " 		
        onclick="DrawLineTwoPoints2()"/>
        &nbsp;&nbsp;&nbsp;
        <input type="button" value= "Example" class="submit" style="height: 25px; width: 100px;  background-color: #b6ff00 " 		
        onclick="DrawLineTwoPoints2Example()"/>
        &nbsp;&nbsp;&nbsp;
        <input type="button" value= "Clear" class="submit" style="height: 25px; width: 50px;  background-color: cyan" 		
        onclick="clearBCD()"/>
        <br/><br/>     
         <input type="button" style="background-color:#ffd800;height: 30px;width:200px ; font-size:18px;" value= "CLOSE" class="submit"  onclick ="TurnOffLinepanel2()"/>		

     </div>*/}.toString().slice(14, -1);       

    var myString2 = (myString.toString()).replace('*/}', '');
    myString2 = myString2.replace('*/', '');        
    //alert('CreateTextboxFordrawVector');
    document.getElementById('Linepanel2').innerHTML = myString2;
}



function CreateTextboxForLinepanel3(){
        //alert('CreateTextboxFordrawVector');
        var myString = function(){/*
       <div style="padding:10px;font-size: 20px ;background-color:white; width: 600px;border-style: solid; border-color: black;" >

               <span style="font-size: x-large" >Draw Parabola Through Vertex and One Point</span>
        <br/><br/>
        Input Vertex:  x = <input type="text" id = "DrawParabolaPoint1X"  value="" style="height: 20px; width: 100px; " onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()"/>
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 y = <input type="text" id = "DrawParabolaPoint1Y"  value="" style="height: 20px; width: 100px; " onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()"/>
        <br/>  <br/>    
        Input Point : x<sub>1</sub> = <input type="text" id = "DrawParabolaPoint2X"  value="" style="height: 20px; width: 100px; " onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()"/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                y<sub>1</sub> = <input type="text" id = "DrawParabolaPoint2Y"  value="" style="height: 20px; width: 100px; " onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()"/>
        <br/> <br/> 
       <input type="button" value= "Submit" class="submit" style="height: 25px; width: 60px;  background-color: #ffd800; " 		
       onclick="DrawParabola1()"/>
        &nbsp;&nbsp;&nbsp;
       <input type="button" value= "Example" class="submit" style="height: 25px; width: 100px;  background-color: #b6ff00 " 		
       onclick="DrawParabola1Example()"/>
        &nbsp;&nbsp;&nbsp;
       <input type="button" value= "Clear" class="submit" style="height: 25px; width: 50px;  background-color: cyan" 		
       onclick="clearCDE()"/>
        <br/><br/>     
         <input type="button" style="background-color:#ffd800;height: 30px;width:200px ; font-size:18px;" value= "CLOSE" class="submit"  onclick ="TurnOffLinepanel3()"/>		

     </div>*/}.toString().slice(14, -1);       

    var myString2 = (myString.toString()).replace('*/}', '');
    myString2 = myString2.replace('*/', '');        
    //alert('CreateTextboxFordrawVector');
    document.getElementById('Linepanel3').innerHTML = myString2;
}


function CreateTextboxForLinepanel4(){
        //alert('CreateTextboxFordrawVector');
        var myString = function(){/*
      <div style="padding:10px;font-size: 20px ;background-color:white; width: 600px;border-style: solid; border-color: black;" >

        Drawing Parabola Through Three Points:        
        Draw Parabola Through Three Points: <br/><br/>
        Point 1 :  x<sub>1</sub> = <input type="text" id = "DrawParabolaBBPoint1X"  value="" style="height: 20px; width: 60px; " onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()"/>
                   y<sub>1</sub> = <input type="text" id = "DrawParabolaBBPoint1Y"  value="" style="height: 20px; width: 60px; " onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()"/>
        <br/>     
        Point 2 :  x<sub>2</sub> = <input type="text" id = "DrawParabolaBBPoint2X"  value="" style="height: 20px; width: 60px; " onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()"/>
                   y<sub>2</sub> = <input type="text" id = "DrawParabolaBBPoint2Y"  value="" style="height: 20px; width: 60px; " onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()"/>
        <br/>     
        Point 3 :  x<sub>3</sub> = <input type="text" id = "DrawParabolaBBPoint3X"  value="" style="height: 20px; width: 60px; " onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()"/>
                   y<sub>3</sub> = <input type="text" id = "DrawParabolaBBPoint3Y"  value="" style="height: 20px; width: 60px; " onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()"/>
 
        &nbsp;&nbsp;&nbsp; 
       <input type="button" value= "Submit" class="submit" style="height: 25px; width: 60px;  background-color: #ffd800; " 		
       onclick="DrawParabola2()"/>
        &nbsp;&nbsp;&nbsp;
       <input type="button" value= "Clear" class="submit" style="height: 25px; width: 50px;  background-color: cyan" 		
       onclick="clearDEF()"/>
        <br/><br/>     
       <input type="button" value= "Example 1" class="submit" style="height: 25px; width: 100px;  background-color: #b6ff00 " 		
       onclick="DrawParabola2Example('1')"/>&nbsp; 
       <input type="button" value= "Example 2" class="submit" style="height: 25px; width: 100px;  background-color: #b6ff00 " 		
       onclick="DrawParabola2Example('2')"/>&nbsp; 
       <input type="button" value= "Example 3" class="submit" style="height: 25px; width: 100px;  background-color: #b6ff00 " 		
       onclick="DrawParabola2Example('3')"/>&nbsp; 
       <input type="button" value= "Example 4" class="submit" style="height: 25px; width: 100px;  background-color: #b6ff00 " 		
       onclick="DrawParabola2Example('4')"/>&nbsp; 

       <input type="button" style="background-color:#ffd800;height: 30px;width:200px ; font-size:18px;" value= "CLOSE" class="submit"  onclick ="TurnOffLinepanel4()"/>

     </div>*/}.toString().slice(14, -1);       

    var myString2 = (myString.toString()).replace('*/}', '');
    myString2 = myString2.replace('*/', '');        
    //alert('CreateTextboxFordrawVector');
    document.getElementById('Linepanel4').innerHTML = myString2;
}

function CreateTextboxForLinepanel5(){
    //alert('CreateTextboxFordrawVector');
    var myString = function(){/*
    <div style="padding:10px;font-size: 20px ;background-color:white; width: 600px;border-style: solid; border-color: black;" >

        <span style="font-size: x-large" >Draw Circle </span> 
        <br/><br/>
        Input Center :  x = <input type="text" id = "DrawCircleCenterX"  value="" style="height: 20px; width: 100px; " onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()"/>
                  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
               y = <input type="text" id = "DrawCircleCenterY"  value="" style="height: 20px; width: 100px; " onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()"/>
        <br/> <br/>    
        Input Radius =   <input type="text" id = "DrawCircleRadius"  value="" style="height: 20px; width: 60px; " onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()"/>
        <br/><br/>
       <input type="button" value= "Submit" class="submit" style="height: 25px; width: 60px;  background-color: #ffd800; " 		
       onclick="DrawCircle()"/>
        &nbsp;&nbsp;&nbsp; 
       <input type="button" value= "Example" class="submit" style="height: 25px; width: 100px;  background-color: #b6ff00 " 		
       onclick="DrawCircleExample()"/>
        &nbsp;&nbsp;&nbsp;
       <input type="button" value= "Clear" class="submit" style="height: 25px; width: 50px;  background-color: cyan" 		
       onclick="clearEFG()"/>
        <br/><br/>     
        <input type="button" style="background-color:#ffd800;height: 30px;width:200px ; font-size:18px;" value= "CLOSE" class="submit"  onclick ="TurnOffLinepanel5()"/>

     </div>*/}.toString().slice(14, -1);       

    var myString2 = (myString.toString()).replace('*/}', '');
    myString2 = myString2.replace('*/', '');        
    //alert('CreateTextboxFordrawVector');
    document.getElementById('Linepanel5').innerHTML = myString2;
}


function CreateTextboxForLinepanel8(){
    //alert('CreateTextboxFordrawVector');
    var myString = function(){/*
    <div style="padding:10px;font-size: 20px ;background-color:white; width: 600px;border-style: solid; border-color: black;" >

        <span style="font-size: x-large" >Draw Ellipse of Equation in Standard Form</span> 
        <br/><br/>
        Input Center :  h = <input type="text" id = "DrawEllipseVal1"  value="" style="height: 20px; width: 60px; " onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()"/>
        &nbsp;&nbsp;&nbsp; 
                 k = <input type="text" id = "DrawEllipseVal2"  value="" style="height: 20px; width: 60px; " onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()"/>
        <br/> <br/>    
        Input Value Under (x - h)<sup>2</sup> =   <input type="text" id = "DrawEllipseVal3"  value="" style="height: 20px; width: 60px; " onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()"/>
        <br><br/>
        Input Value Under (y - k)<sup>2</sup> =   <input type="text" id = "DrawEllipseVal4"  value="" style="height: 20px; width: 60px; " onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()"/>
        <br><br/>
        <input type="button" value= "Submit" class="submit" style="height: 25px; width: 60px;  background-color: #ffd800; " 		
        onclick="DrawEllipse()"/>
        &nbsp;&nbsp;&nbsp; 
        <input type="button" value= "Example" class="submit" style="height: 25px; width: 100px;  background-color: #b6ff00 " 		
        onclick="DrawEllipseExample()"/>
        &nbsp;&nbsp;&nbsp;
       <input type="button" value= "Clear" class="submit" style="height: 25px; width: 50px;  background-color: cyan" 		
       onclick="clearEFGGGG()"/>
        <br/><br/>     
        <input type="button" style="background-color:#ffd800;height: 30px;width:200px ; font-size:18px;" value= "CLOSE" class="submit"  onclick ="TurnOffLinepanel8()"/>

     </div>*/}.toString().slice(14, -1);       

    var myString2 = (myString.toString()).replace('*/}', '');
    myString2 = myString2.replace('*/', '');        
    //alert('CreateTextboxFordrawVector');
    document.getElementById('Linepanel8').innerHTML = myString2;
}


function CreateTextboxForLinepanel9(){
    //alert('CreateTextboxFordrawVector');
    var myString = function(){/*
    <div style="padding:10px;font-size: 20px ;background-color:white; width: 600px;border-style: solid; border-color: black;" >
 
        <span style="font-size: x-large" >Draw Hyperbola of Equation in Standard Form</span>  
        <br/><br/>
        Input Center :  h = <input type="text" id = "DrawHyperbolaVal1"  value="" style="height: 20px; width: 60px; " onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()"/>
        &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; 
                 k = <input type="text" id = "DrawHyperbolaVal2"  value="" style="height: 20px; width: 60px; " onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()"/>
        <br/><br/>     
        Input Value Under (x - h)<sup>2</sup> =   <input type="text" id = "DrawHyperbolaVal3"  value="" style="height: 20px; width: 60px; " onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()"/>
        <br><br/>
        Input Value Under (y - k)<sup>2</sup> =   <input type="text" id = "DrawHyperbolaVal4"  value="" style="height: 20px; width: 60px; " onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()"/>
        <br><br/>
        If equation is of the form (x - h)<sup>2</sup>/a<sup>2</sup> - (y - k)<sup>2</sup>/b<sup>2</sup> = 1, then
        <input type="button" value= "Submit: XY type" class="submit" style="height: 25px; width: 120px;  background-color: #ffd800; " 		
        onclick="DrawHyperbola(1)"/>
        <br><br/>
        If equation is of the form (y - k)<sup>2</sup>/a<sup>2</sup> - (x - h)<sup>2</sup>/b<sup>2</sup> = 1, then
        <input type="button" value= "Submit: YX type" class="submit:  y@lettter2 - x@lettter2 type" style="height: 25px; width: 120px;  background-color: #ffd800; " 		
        onclick="DrawHyperbola(2)"/>
        <br><br/>
        <input type="button" value= "Example" class="submit" style="height: 25px; width: 100px;  background-color: #b6ff00 " 		
        onclick="DrawHyperbolaExample()"/>
        &nbsp;&nbsp;&nbsp;
        <input type="button" value= "Clear" class="submit" style="height: 25px; width: 50px;  background-color: cyan" 		
        onclick="clearEFGHHH()"/>
        &nbsp;&nbsp;&nbsp;    
        <input type="button" style="background-color:#ffd800;height: 30px;width:200px ; font-size:18px;" value= "CLOSE" class="submit"  onclick ="TurnOffLinepanel9()"/>

     </div>*/}.toString().slice(14, -1);       

    var myString2 = (myString.toString()).replace('*/}', '');
    myString2 = myString2.replace('*/', '');        
    //alert('CreateTextboxFordrawVector');
    document.getElementById('Linepanel9').innerHTML = myString2;
}


function CreateTextboxForLinepanel6(){
        //alert('CreateTextboxFordrawVector');
        var myString = function(){/*
    <div style="padding:10px;font-size: 20px ;background-color:white; width: 600px;border-style: solid; border-color: black;" >

        <span style="font-size: x-large" >Draw Two Parralel Lines</span>  
        <br/><br/>
        Input slope of Line 1 and point on Line 1 :<br>
        Slope = 
        <input type="text" id = "DrawTwoParralelLines1"  value="" style="height: 20px; width: 60px; " onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()"/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Passing Through:
        x = <input type="text" id = "DrawTwoParralelLines2"  value="" style="height: 20px; width: 60px; " onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()"/>
        &nbsp;&nbsp;&nbsp;&nbsp;
        y = <input type="text" id = "DrawTwoParralelLines3"  value="" style="height: 20px; width: 60px; " onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()"/>
        <br/>  <br/>   
        Input point on Line 2 (Line 2 is parallel to Line 1; Line 2 has same slope as Line 1):<br>
        Passing Through:
        x = <input type="text" id = "DrawTwoParralelLines4"  value="" style="height: 20px; width: 60px; " onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()"/>
        &nbsp;&nbsp;&nbsp;&nbsp;
        y = <input type="text" id = "DrawTwoParralelLines5"  value="" style="height: 20px; width: 60px; " onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()"/>
        
       <br><br>
       <input type="button" value= "Submit" class="submit" style="height: 25px; width: 60px;  background-color: #ffd800; " 		
       onclick="DrawTwoParralelLines()"/>
        &nbsp; 
       <input type="button" value= "Example" class="submit" style="height: 25px; width: 80px;  background-color: #b6ff00 " 		
       onclick="DrawTwoParralelLinesExample()"/>
        &nbsp; 
       <input type="button" value= "Clear" class="submit" style="height: 25px; width: 50px;  background-color: cyan" 		
       onclick="clearFGH()"/>
        <br><br>
         
        <input type="button" style="background-color:#ffd800;height: 30px;width:200px ; font-size:18px;" value= "CLOSE" class="submit"  onclick ="TurnOffLinepanel6()"/>

     </div>*/}.toString().slice(14, -1);       

    var myString2 = (myString.toString()).replace('*/}', '');
    myString2 = myString2.replace('*/', '');        
    //alert('CreateTextboxFordrawVector');
    document.getElementById('Linepanel6').innerHTML = myString2;
}


function CreateTextboxForLinepanel7(){
    //alert('CreateTextboxFordrawVector');
    var myString = function(){/*
    <div style="padding:10px;font-size: 20px ;background-color:white; width: 600px;border-style: solid; border-color: black;" >

        <span style="font-size: x-large" >Draw Two Perpendicular Lines</span> 
        <br/><br/>
        Line 1 :<br>
        Slope = 
        <input type="text" id = "DrawTwoPerpendicularLines1"  value="" style="height: 20px; width: 60px; " onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()"/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Passing Through:
        x = <input type="text" id = "DrawTwoPerpendicularLines2"  value="" style="height: 20px; width: 60px; " onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()"/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        y = <input type="text" id = "DrawTwoPerpendicularLines3"  value="" style="height: 20px; width: 60px; " onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()"/>
        <br/>  <br/>   
        Line 2 (perpendicular to Line 1; slope is negative reciprocal of slope of Line 1) :<br>
        Passing Through:
        x = <input type="text" id = "DrawTwoPerpendicularLines4"  value="" style="height: 20px; width: 60px; " onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()"/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        y = <input type="text" id = "DrawTwoPerpendicularLines5"  value="" style="height: 20px; width: 60px; " onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()"/>
        
        <br> <br>       
       <input type="button" value= "Submit" class="submit" style="height: 25px; width: 60px;  background-color: #ffd800; " 		
       onclick="DrawTwoPerpendicularLines()"/>
        &nbsp; 
       <input type="button" value= "Example" class="submit" style="height: 25px; width: 80px;  background-color: #b6ff00 " 		
       onclick="DrawTwoPerpendicularLinesExample()"/>

        &nbsp; 
       <input type="button" value= "Clear" class="submit" style="height: 25px; width: 50px;  background-color: cyan" 		
       onclick="clearGHI()"/>
        <br><br>
        <input type="button" style="background-color:#ffd800;height: 30px;width:200px ; font-size:18px;" value= "CLOSE" class="submit"  onclick ="TurnOffLinepanel7()"/>

     </div>*/}.toString().slice(14, -1);       

    var myString2 = (myString.toString()).replace('*/}', '');
    myString2 = myString2.replace('*/', '');        
    //alert('CreateTextboxFordrawVector');
    document.getElementById('Linepanel7').innerHTML = myString2;
}


function CreateTextboxForLinepanel10(){
    //alert('CreateTextboxFordrawVector');
    var myString = function(){/*
    <div style="padding:10px;font-size: 20px ;background-color:white; width: 600px;border-style: solid; border-color: black;" >

        <span style="font-size: large">Testing Point: Input x- and y-coordinate (click on grid to input):</span><br><br>
        x = <input type="text" id = "TestingPointX"  value="" style="height: 20px; width: 100px; " onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()"/>
        &nbsp;&nbsp;&nbsp;
        y = <input type="text" id = "TestingPointY"  value="" style="height: 20px; width: 100px; " onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()"/>
        &nbsp;&nbsp; 
        <input type="button" value= "Submit" class="submit" style="height: 25px; width: 80px;  background-color: #ffd800" 		
        onclick="TestingPoint()"/>
        &nbsp;&nbsp; 
        <input type="button" value= "Clear Output" class="submit" style="height: 25px; width: 100px;  background-color: rgb(0, 255, 255) ; 	"	
        onclick="document.getElementById('TestingPointDiv').innerHTML=''"/>    
        &nbsp;&nbsp; 
        <input type="button" value= "CLOSE" class="submit"  onclick ="TurnOffLinepanel10()" style="height: 25px;background-color: #ffd800"/>		
        <br> <br>
         Round input values to &nbsp;
        <input type="text" id = "TestingPointRound"  value="0" style="height: 20px; width: 50px; " onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()"/>
         &nbsp;decimal places. (For integers, input 0.)    
        <br> <br>    
        <div id="TestingPointDiv" style="padding: 10px; width:490px; height: 300px; color: black; font-family: black; font-weight: bold; font-size: 18px; border-style: solid; border-color: black; overflow: scroll">		
        </div>

    </div>*/}.toString().slice(14, -1);       

    var myString2 = (myString.toString()).replace('*/}', '');
    myString2 = myString2.replace('*/', '');        
    //alert('CreateTextboxFordrawVector');
    document.getElementById('Linepanel10').innerHTML = myString2;
}


function CreateTextboxForLinepanel11(){
    //alert('CreateTextboxFordrawVector');
    var myString = function(){/*
    <div style="padding:10px;font-size: 20px ;background-color:white; width: 600px;border-style: solid; border-color: black;" >

        <span style="font-size: large">Draw Tangent Line(s) for function defined implicitly or explicitly</span><br>
        Input y' = dy/dx = <input type="text" id = "yprime"  value="" style="height: 30px; width: 300px;font-size:18px" onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()"/>
        <br>Draw tangent line(s) at the following point(s):<br>
        <input type="text" id = "TangentPoint"  value="" style="height: 30px; width: 300px;font-size:18px" onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()"/>
        &nbsp;&nbsp;Example: (3,4) ; (-4,9)<br>
        <input type="button" value= "Example 1" class="submit" style="height: 25px;    " 		
        onclick="DrawTangentLine1()"/>
        <input type="button" value= "Example 2" class="submit" style="height: 25px; " 		
        onclick="DrawTangentLine2()"/>
        <input type="button" value= "Example 3" class="submit" style="height: 25px;   " 		
        onclick="DrawTangentLine3()"/>
        <input type="button" value= "Example 4" class="submit" style="height: 25px;  " 		
        onclick="DrawTangentLine4()"/>
        <input type="button" value= "Example 5" class="submit" style="height: 25px; " 		
        onclick="DrawTangentLine5()"/>
        <br> 
        <input type="button" value= "Example 6" class="submit" style="height: 25px;    " 		
        onclick="DrawTangentLine6()"/>
        <input type="button" value= "Example 7" class="submit" style="height: 25px; " 		
        onclick="DrawTangentLine7()"/>
        <input type="button" value= "Example 8" class="submit" style="height: 25px;   " 		
        onclick="DrawTangentLine8()"/>
        <input type="button" value= "Example 9" class="submit" style="height: 25px;  " 		
        onclick="DrawTangentLine9()"/>
        <input type="button" value= "Example 10" class="submit" style="height: 25px; " 		
        onclick="DrawTangentLine10()"/>
        <br>
        <input type="button" value= "Submit" class="submit" style="height: 25px; width: 80px;  background-color: #ffd800" 		
        onclick="DrawTangentLine()"/>
        &nbsp;&nbsp; 
        <input type="button" value= "Clear Output" class="submit" style="height: 25px; width: 100px;  background-color: rgb(0, 255, 255) ; 	"	
        onclick="document.getElementById('functiondefinedimplicitly').innerHTML=''"/>    
            <br>
        <div id="functiondefinedimplicitly" style="padding: 10px; width:490px; height: 450px; color: black; font-family: black; font-weight: bold; font-size: 18px; border-style: solid; border-color: black; overflow: scroll">		

        </div>
        <br><br>
         
        <input type="button" style="background-color:#ffd800;height: 30px;width:200px ; font-size:18px;" value= "CLOSE" class="submit"  onclick ="TurnOffLinepanel11()"/>

    </div>*/}.toString().slice(14, -1);       

    var myString2 = (myString.toString()).replace('*/}', '');
    myString2 = myString2.replace('*/', '');        
    //alert('CreateTextboxFordrawVector');
    document.getElementById('Linepanel11').innerHTML = myString2;
}



function CreateTextboxForpiecewisefunction(){
        //alert('CreateTextboxFordrawVector');
        var myString = function(){/*
        <span style="font-size: 24px">Piecewise Functions </span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button onclick="document.getElementById('piecewisefunction').style.display ='none'"  type="button" style ="text-align: center; width: 140px;background-color: cyan; font-size: 30px">close</button>
    
        <br>
        Select an option: <br>
        <input type="radio" name="pwoption" id ="pwoption2"   title="" onclick="piecewisefunctionoption('2')" onmouseout="display2()" onmouseover="display('8bb')" checked/>		
        <span onclick="document.getElementById('pwoption2').checked='true'">2 pieces&nbsp;&nbsp;&nbsp;</span>  
        <input type="radio"  name="pwoption" id ="pwoption3"   title="" onclick="piecewisefunctionoption('3')"   onmouseout="display2()" onmouseover="display('8bb')" />			
        <span onclick="document.getElementById('pwoption3').checked='true'">3 pieces&nbsp;&nbsp;&nbsp;</span>  
 
        <input type="radio" name="pwoption" id ="pwoption4"   title="" onclick="piecewisefunctionoption('4')" onmouseout="display2()" onmouseover="display('8bb')" />		
        <span onclick="document.getElementById('pwoption4').checked='true'">4 pieces&nbsp;&nbsp;&nbsp;</span>  
        <input type="radio"  name="pwoption" id ="pwoption5"   title="" onclick="piecewisefunctionoption('5')"    onmouseout="display2()" onmouseover="display('8bb')" />			
        <span onclick="document.getElementById('pwoption5').checked='true'">5 pieces&nbsp;&nbsp;&nbsp;</span>  
        <br>
        <table>	
            <tr>
            <td  title=" " onclick="ineq20bb()"   onmouseout="display2()" onmouseover="display('8bb')" class="btsred" style="border-style: solid; border-width: 1px; 
                border-color: black; text-align: center;  width:30px; height:30px; font-size: large">if</td>  		
            <td  title=" " onclick="ineq21()"   onmouseout="display2()" onmouseover="display('8bb')" class="btsred" style="border-style: solid; border-width: 1px; 
                border-color: black; text-align: center;  width:30px; height:30px; font-size: large">x</td>  		
            <td title=" "  onclick="ineq22()"    onmouseout="display2()" onmouseover="display('8bb')"  class="btsred" style="border-style: solid; border-width: 1px; 
                border-color: black; text-align: center;  width:30px; height:30px; font-size: large">&le;</td>  		
            <td title=" " onclick="ineq23()"   onmouseout="display2()" onmouseover="display('8bb')" class="btsred" style="border-style: solid; border-width: 1px; 
                border-color: black; text-align: center;  width:30px; height:30px; font-size: large">&lt;</td>  	

            <td title=" "   onclick="ineq24()"    onmouseout="display2()" onmouseover="display('8bb')"  class="btsred" style="border-style: solid; border-width: 1px; 
                border-color: black; text-align: center;  width:30px; height:30px; font-size: large">&ge;</td>  		
            <td title="  " onclick="ineq25()"   onmouseout="display2()" onmouseover="display('8bb')" class="btsred" style="border-style: solid; border-width: 1px; 
                border-color: black; text-align: center;  width:30px; height:30px; font-size: large">&gt;</td>  		
            <td   title="  "   onclick="ineq26()"    onmouseout="display2()" onmouseover="display('8bb')"   class="btsred" style="border-style: solid; border-width: 1px; 
                border-color: black; text-align: center;  width:30px; height:30px; font-size: large">&ne;</td>  		
            <td   title=" "   onclick="ineq27()"    onmouseout="display2()" onmouseover="display('8bb')"   class="btsred" style="border-style: solid; border-width: 1px; 
                border-color: black; text-align: center;  width:30px; height:30px; font-size: large">=</td>  		
        </tr>
        </table>	  
     <br>

    <div  id="piecewisefunction2" style="display:inline-block">
    <span style="font-size: 24px">Piecewise Functions: Two Pieces</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <button onclick="GraphingPiecewise2()" type="button" style ="text-align: center; height: 30px; width: 81px;background-color: #ffd800; font-size: 20px">Submit</button>
    <button onclick="GraphingPiecewise2Example()"    onmouseout="display2()" onmouseover="display('8bb')" type="button" style ="text-align: center;  font-size: 20px">Example</button>
    
    <br>
    <img src="brace2.png" alt="blank" style="position: relative;top: 10px; "/> 
    <input id ="pw1" type= "text"  onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()"		
            style="position: relative;top: -80px;height: 40px;  width:370px; color: black; font-family: black; font-weight: bold; font-size: 24px; ;"/>		
    <br>
    <input id ="pw2" type= "text"  onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()"		
            style="position: relative;left: 110px;top: -60px;height: 40px;  width:370px; color: black; font-family: black; font-weight: bold; font-size: 24px; ;"/>		
    </div>

    <div  id="piecewisefunction3"  style="display: none">
        <span style="font-size: 24px">Piecewise Functions: Three Pieces</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <button onclick="GraphingPiecewise3()" type="button" style ="text-align: center; height: 30px; width: 81px;background-color: #ffd800; font-size: 20px">Submit</button>
        <button onclick="GraphingPiecewise3Example()"    onmouseout="display2()" onmouseover="display('8bb')" type="button" style ="text-align: center;  font-size: 20px">Example</button>
        <br>
        <img src="brace3.png" alt="blank" style="position: relative;top: 10px; "/> 
        <input id ="pw3" type= "text"  onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()"		
                style="position: relative;top: -120px;height: 40px;  width:370px; color: black; font-family: black; font-weight: bold; font-size: 24px; ;"/>		
        <br>
        <input id ="pw4" type= "text"  onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()"		
            style="position: relative;left: 110px;top: -110px;height: 40px;  width:370px; color: black; font-family: black; font-weight: bold; font-size: 24px; ;"/>		
        <br>
        <input id ="pw5" type= "text"  onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()"		
            style="position: relative;left: 110px;top: -100px;height: 40px;  width:370px; color: black; font-family: black; font-weight: bold; font-size: 24px; ;"/>		
    </div>

    <div  id="piecewisefunction4"  style="display: none">
        <span style="font-size: 24px">Piecewise Functions: Four Pieces</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button onclick="GraphingPiecewise4()" type="button" style ="text-align: center; height: 30px; width: 81px;background-color: #ffd800; font-size: 20px">Submit</button>
        <button onclick="GraphingPiecewise4Example()"    onmouseout="display2()" onmouseover="display('8bb')" type="button" style ="text-align: center;  font-size: 20px">Example</button>
        <br>
        <img src="brace4.png" alt="blank" style="position: relative;top: 10px; "/> 
        <input id ="pw6" type= "text"  onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()"		
                style="position: relative;top: -165px;height: 40px;  width:370px; color: black; font-family: black; font-weight: bold; font-size: 24px; ;"/>		
        <br>
        <input id ="pw7" type= "text"  onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()"		
            style="position: relative;left: 110px;top: -155px;height: 40px;  width:370px; color: black; font-family: black; font-weight: bold; font-size: 24px; ;"/>		
        <br>
        <input id ="pw8" type= "text"  onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()"		
            style="position: relative;left: 110px;top: -150px;height: 40px;  width:370px; color: black; font-family: black; font-weight: bold; font-size: 24px; ;"/>		
        <br>
        <input id ="pw9" type= "text"  onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()"		
            style="position: relative;left: 110px;top: -140px;height: 40px;  width:370px; color: black; font-family: black; font-weight: bold; font-size: 24px; ;"/>		
        <br>
    </div>
    <div  id="piecewisefunction5"  style="display: none">
        <span style="font-size: 24px">Piecewise Functions: Five Pieces</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button onclick="GraphingPiecewise5()"    onmouseout="display2()" onmouseover="display('8bb')" type="button" style ="text-align: center; height: 30px; width: 81px;background-color: #ffd800; font-size: 20px">Submit</button>
        <br>
        <img src="brace5.png" alt="blank" style="position: relative;top: 10px; "/> 
        <input id ="pw10" type= "text"  onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()"		
                style="position: relative;top: -205px;height: 40px;  width:370px; color: black; font-family: black; font-weight: bold; font-size: 24px; ;"/>		
        <br>
        <input id ="pw11" type= "text"  onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()"		
            style="position: relative;left: 110px;top: -200px;height: 40px;  width:370px; color: black; font-family: black; font-weight: bold; font-size: 24px; ;"/>		
        <br>
        <input id ="pw12" type= "text"  onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()"		
            style="position: relative;left: 110px;top: -195px;height: 40px;  width:370px; color: black; font-family: black; font-weight: bold; font-size: 24px; ;"/>		
        <br>
        <br>
        <input id ="pw13" type= "text"  onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()"		
            style="position: relative;left: 110px;top: -210px;height: 40px;  width:370px; color: black; font-family: black; font-weight: bold; font-size: 24px; ;"/>		
        <br>
        <input id ="pw14" type= "text"  onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()"		
            style="position: relative;left: 110px;top: -205px;height: 40px;  width:370px; color: black; font-family: black; font-weight: bold; font-size: 24px; ;"/>		
        </div>

    </div>*/}.toString().slice(14, -1);       

    var myString2 = (myString.toString()).replace('*/}', '');
    myString2 = myString2.replace('*/', '');        
    //alert('CreateTextboxFordrawVector');
    document.getElementById('piecewisefunction').innerHTML = myString2;
}


function CreateTextboxForgraphOptions(){
    //alert('CreateTextboxFordrawVector');
    var myString = function(){/*
    <fieldset  style="width:580px; border-style: solid;border-color: black;background-color: white">
        Label x-axis with real numbers: <input id="labelxaxisreal" type="checkbox" onclick="GraphingCalculator()"  checked/>on/off 
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    
        Draw x-axis: <input id="drawxaxis" type="checkbox" onclick="GraphingCalculator()"  checked/>on/off<br><br>

        Label y-axis with real numbers: <input id="labelyaxisreal" type="checkbox" onclick="GraphingCalculator()"  checked/>on/off 
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    
        Draw y-axis: <input id="drawyaxis" type="checkbox" onclick="GraphingCalculator()"  checked/>on/off<br><br>
        Label x-axis with multiples of &pi;: <input id="labelxaxispi" type="checkbox" onclick="GraphingCalculator()"  checked/>on/off<br>
        Input increment of &pi; for x-axis = 
                <input id = "XaxisPiStepsize" type="text" size="5" value="&pi;" onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()" 		
                style=" height: 30px;  width:100px; color: black; font-family: black; font-weight: bold; font-size: 20px; ;" 		
                autocomplete="off"/>
        <select id="xPIoption" style="font-weight: 300; height: 30px; font-size: 20px;font-weight: bold; font-family: black;background-color: #eae6e0;"  onchange="document.getElementById('XaxisPiStepsize').value = document.getElementById('xPIoption').value">
            <option value= "&pi;" style="font-size: 20px;font-weight: bold; font-family: black;">&nbsp;&pi;&nbsp;</option>
            <option value= "&pi;/2" style="font-size: 20px;font-weight: bold; font-family: black;">&nbsp;&pi;/2&nbsp;</option>
            <option value= "&pi;/3" style="font-size: 20px;font-weight: bold; font-family: black;">&nbsp;&pi;/3&nbsp;</option>
            <option value= "&pi;/4" style="font-size: 20px;font-weight: bold; font-family: black;">&nbsp;&pi;/4&nbsp;</option>
            <option value= "&pi;/5" style="font-size: 20px;font-weight: bold; font-family: black;">&nbsp;&pi;/5&nbsp;</option>
            <option value= "&pi;/6" style="font-size: 20px;font-weight: bold; font-family: black;">&nbsp;&pi;/6&nbsp;</option>
            <option value= "&pi;/7" style="font-size: 20px;font-weight: bold; font-family: black;">&nbsp;&pi;/7&nbsp;</option>
            <option value= "&pi;/8" style="font-size: 20px;font-weight: bold; font-family: black;">&nbsp;&pi;/8&nbsp;</option>
            <option value= "&pi;/9" style="font-size: 20px;font-weight: bold; font-family: black;">&nbsp;&pi;/9&nbsp;</option>
            <option value= "&pi;/10" style="font-size: 20px;font-weight: bold; font-family: black;">&nbsp;&pi;/10&nbsp;</option>
            <option value= "&pi;/11" style="font-size: 20px;font-weight: bold; font-family: black;">&nbsp;&pi;/11&nbsp;</option>
            <option value= "&pi;/12" style="font-size: 20px;font-weight: bold; font-family: black;">&nbsp;&pi;/12&nbsp;</option>
        </select> 	      	
        <br><br>
        Label y-axis with multiples of &pi;: <input id="labelyaxispi" type="checkbox" onclick="GraphingCalculator()"  checked/>on/off<br>
        Input increment of &pi; for y-axis = 
                <input id = "YaxisPiStepsize" type="text" size="5" value="&pi;" onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()" 		
                style=" height: 30px;  width:100px; color: black; font-family: black; font-weight: bold; font-size: 20px; ;" 		
                autocomplete="off"/>	
            <select id="yPIoption" style="font-weight: 300; height: 30px; font-size: 20px;font-weight: bold; font-family: black;background-color: #eae6e0;"  onchange="document.getElementById('YaxisPiStepsize').value = document.getElementById('yPIoption').value">
                <option value= "&pi;" style="font-size: 20px;font-weight: bold; font-family: black;">&nbsp;&pi;&nbsp;</option>
                <option value= "&pi;/2" style="font-size: 20px;font-weight: bold; font-family: black;">&nbsp;&pi;/2&nbsp;</option>
                <option value= "&pi;/3" style="font-size: 20px;font-weight: bold; font-family: black;">&nbsp;&pi;/3&nbsp;</option>
                <option value= "&pi;/4" style="font-size: 20px;font-weight: bold; font-family: black;">&nbsp;&pi;/4&nbsp;</option>
                <option value= "&pi;/5" style="font-size: 20px;font-weight: bold; font-family: black;">&nbsp;&pi;/5&nbsp;</option>
                <option value= "&pi;/6" style="font-size: 20px;font-weight: bold; font-family: black;">&nbsp;&pi;/6&nbsp;</option>
                <option value= "&pi;/7" style="font-size: 20px;font-weight: bold; font-family: black;">&nbsp;&pi;/7&nbsp;</option>
                <option value= "&pi;/8" style="font-size: 20px;font-weight: bold; font-family: black;">&nbsp;&pi;/8&nbsp;</option>
                <option value= "&pi;/9" style="font-size: 20px;font-weight: bold; font-family: black;">&nbsp;&pi;/9&nbsp;</option>
                <option value= "&pi;/10" style="font-size: 20px;font-weight: bold; font-family: black;">&nbsp;&pi;/10&nbsp;</option>
                <option value= "&pi;/11" style="font-size: 20px;font-weight: bold; font-family: black;">&nbsp;&pi;/11&nbsp;</option>
                <option value= "&pi;/12" style="font-size: 20px;font-weight: bold; font-family: black;">&nbsp;&pi;/12&nbsp;</option>
            </select> 	   
        <br>

        <span style="font-size: 18px">
        Example: Increment = &pi;/2 &rArr; axis will have:  ....,-2&pi;,-3&pi;/2,-&pi;/2,0,&pi;/2,&pi;,3&pi;/2,2&pi;,... 
        </span>
        <br> 
        <button onclick="GraphingCalculator()"  type="button" style ="text-align: center; height: 40px; width: 200px;background-color: #ffd800; font-size: 20px">Submit</button>
        &nbsp;&nbsp;&nbsp;  
        <button onclick="document.getElementById('graphOptions').style.display ='none'"  type="button" style ="text-align: center; height: 40px; width: 200px;background-color: #ffd800; font-size: 20px">close</button>

    </fieldset>*/}.toString().slice(14, -1);       

    var myString2 = (myString.toString()).replace('*/}', '');
    myString2 = myString2.replace('*/', '');        
    //alert('CreateTextboxFordrawVector');
    document.getElementById('graphOptions').innerHTML = myString2;
}


function CreateTextboxFortextovergridareabb(){
        //alert('CreateTextboxFordrawVector');
        var myString = function(){/*
    <span style="font-size: 24px;  ">Writing Text</span>
    <br>
    <select id="mydropdowntextovergrid1bb" style="font-weight: 300; width: 150px; height: 30px; font-size: 16px;background-color: #eae6e0;"  onchange="mydropdowntextovergrid11bb()">
        <option value= "0">        
            select a color
        </option>;
        <!--
        {for(int i=1; i<= 20; i++){
            var buttoncolor =  colorselect(i) ;//	"#000080";
            <option value=i style="font-weight: bold;background-color:white ; color:buttoncolor">        
               Text Color i
            </option>;
         }}
        -->	
                <option value="1" style="font-weight: bold;background-color:white ; color:blue"> blue </option>
                <option value="2" style="font-weight: bold;background-color:white; color:red"> red </option>
                <option value="3" style="font-weight: bold;background-color:white ; color:green"> green </option>
                <option value="4" style="font-weight: bold;background-color:white ; color:orange"> orange </option>
                <option value="5" style="font-weight: bold;background-color:white ; color:lime"> lime </option>
                <option value="6" style="font-weight: bold;background-color:white ; color:cyan"> cyan </option>
                <option value="7" style="font-weight: bold;background-color:white ; color:magenta"> magenta </option>
                <option value="8" style="font-weight: bold;background-color:white ; color:silver"> silver </option>
                <option value="9" style="font-weight: bold;background-color:white ; color:gray"> gray </option>
                <option value="10" style="font-weight: bold;background-color:white ; color:maroon"> maroon </option>
                <option value="11" style="font-weight: bold;background-color:white ; color:olive"> olive </option>
                <option value="12" style="font-weight: bold;background-color:white ; color:purple"> purple </option>
                <option value="13" style="font-weight: bold;background-color:white ; color:teal"> teal </option>
                <option value="14" style="font-weight: bold;background-color:white ; color:salmon"> salmon </option>
                <option value="15" style="font-weight: bold;background-color:white ; color:gold"> gold </option>
                <option value="16" style="font-weight: bold;background-color:white ; color:khaki"> khaki </option>
                <option value="17" style="font-weight: bold;background-color:white ; color:indigo"> indigo </option>
                <option value="18" style="font-weight: bold;background-color:white ; color:#1E90FF"> Color 18 </option>
                <option value="19" style="font-weight: bold;background-color:white ; color:#483D8B"> Color 19 </option>
                <option value="20" style="font-weight: bold;background-color:white ; color:#B8860B"> Color 20 </option>


    </select> 	 
    &nbsp; &nbsp;  
    <select id="mydropdowntextovergrid2bb" style="font-weight: 300; width: 150px; height: 30px; font-size: 16px;background-color: #eae6e0;"  onchange="mydropdowntextovergrid22bb()">
        <option value= "0">        
            select font size
        </option>;
        <!--
        {for(int i=1; i<= 20; i++){
            <option value=i style="font-weight: bold;background-color:white ">        
               font size (i*10)
            </option>;
            }}	
        -->
                <option value="1" style="font-weight: bold;background-color:white"> 10 </option>
                <option value="2" style="font-weight: bold;background-color:white"> 20 </option>
                <option value="3" style="font-weight: bold;background-color:white"> 30 </option>
                <option value="4" style="font-weight: bold;background-color:white "> 40 </option>
                <option value="5" style="font-weight: bold;background-color:white "> 50 </option>
                <option value="6" style="font-weight: bold;background-color:white "> 60 </option>
                <option value="7" style="font-weight: bold;background-color:white "> 70 </option>
                <option value="8" style="font-weight: bold;background-color:white "> 80 </option>
                <option value="9" style="font-weight: bold;background-color:white "> 90 </option>
                <option value="10" style="font-weight: bold;background-color:white "> 100 </option>
                <option value="11" style="font-weight: bold;background-color:white "> 110 </option>
                <option value="12" style="font-weight: bold;background-color:white "> 120 </option>
                <option value="13" style="font-weight: bold;background-color:white "> 130 </option>
                <option value="14" style="font-weight: bold;background-color:white "> 140 </option>
                <option value="15" style="font-weight: bold;background-color:white  "> 150 </option>
                <option value="16" style="font-weight: bold;background-color:white  "> 160 </option>
                <option value="17" style="font-weight: bold;background-color:white  "> 170 </option>
                <option value="18" style="font-weight: bold;background-color:white  "> 180 </option>
                <option value="19" style="font-weight: bold;background-color:white  "> 190 </option>
                <option value="20" style="font-weight: bold;background-color:white  "> 200 </option>

        </select> 	 
        &nbsp; &nbsp;  
        <button onclick="keypadforgrid(6398)" type="button" style ="text-align: center; height: 30px; width: 80px;background-color: #ffd800; font-size: 20px">close</button>
        &nbsp; &nbsp;  
        <button onclick="document.getElementById('integralsym').innerHTML=''"  type="button" style ="text-align: center; height: 30px; width: 80px;background-color: cyan; font-size: 20px">clear</button>

        <br>*/}.toString().slice(14, -1);       

    var myString2 = (myString.toString()).replace('*/}', '');
    myString2 = myString2.replace('*/', '');        
    //alert('CreateTextboxFordrawVector');
    document.getElementById('textovergridareabb').innerHTML = myString2;
}


function CreateTextboxForPopOutInputList1(){
        //alert('CreateTextboxFordrawVector');
        var myString = function(){/*
    <span style="font-size: 20px"> Table of Values for Cartesian Equations</span> <br>
    <span style="font-size: 20px"> In textarea below, input x-values.  <br>Example: 5,4,7,5/8,1.2,π </span> <br>
    <input type="button"  value="&nbsp;&nbsp;CLOSE&nbsp;&nbsp;" onclick="document.getElementById('PopOutInputList1').style.display='none'" class="btswhite" style=" height:50px; font-size: 20px;background-color: #b6ff00 " />	
    <input type="button"  value="CLEAR" onclick="document.getElementById('InputList1').value =''" class="btswhite" style="background-color: cyan; height:50px;font-size: 20px ; left:1000px" />		
    <input type="button"  value="Submit" onclick="PopOutInputList123('1')" class="btswhite" style="background-color: #ffd800; height:50px;font-size: 20px ; left:1000px" />		 		
   <input type="button"  value="Example" onclick="document.getElementById('InputList1').value ='1,2,3,4,8,9'" class="btswhite" style="height:50px;font-size: 20px ; left:1000px; background-color: silver" />		
    <br>
    <textarea id ="InputList1"	 onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()" style="height: 300px;  width:400px;text-align: left ;color: black; margin-top: 10px; font-family: black; font-weight: bold; font-size: 30px; ;" autocomplete="off" > 
    </textarea>*/}.toString().slice(14, -1);       

    var myString2 = (myString.toString()).replace('*/}', '');
    myString2 = myString2.replace('*/', '');        
    //alert('CreateTextboxFordrawVector');
    document.getElementById('PopOutInputList1').innerHTML = myString2;
}


function CreateTextboxForPopOutInputList2(){
    //alert('CreateTextboxFordrawVector');
    var myString = function(){/*
    <span style="font-size: 20px"> Table of Values for Cartesian Equations</span> <br>
    <span style="font-size: 20px"> In textarea below, input y-values.  <br>Example: 5,4,7,5/8,1.2,π </span> <br>
    <input type="button"  value="&nbsp;&nbsp;CLOSE&nbsp;&nbsp;" onclick="document.getElementById('PopOutInputList2').style.display='none'" class="btswhite" style=" height:50px; font-size: 20px;background-color: #b6ff00 " />	
    <input type="button"  value="CLEAR" onclick="document.getElementById('InputList2').value =''" class="btswhite" style="background-color: cyan; height:50px;font-size: 20px ; left:1000px" />		
    <input type="button"  value="Submit" onclick="PopOutInputList123('2')" class="btswhite" style="background-color: #ffd800; height:50px;font-size: 20px ; left:1000px" />		 		
    <input type="button"  value="Example" onclick="document.getElementById('InputList2').value ='1,2,3,4,8,9'" class="btswhite" style="height:50px;font-size: 20px ; left:1000px; background-color: silver" />		
    <br>       
    <textarea id ="InputList2"	 onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()" style="height: 300px;  width:400px;text-align: left ;color: black; margin-top: 10px; font-family: black; font-weight: bold; font-size: 30px; ;" autocomplete="off">
    </textarea>*/}.toString().slice(14, -1);       

    var myString2 = (myString.toString()).replace('*/}', '');
    myString2 = myString2.replace('*/', '');        
    //alert('CreateTextboxFordrawVector');
    document.getElementById('PopOutInputList2').innerHTML = myString2;
}


function CreateTextboxForFindingDifferences(){
    //alert('CreateTextboxFordrawVector');
    var myString = function(){/*
        <span style="display: none;font-size: 20px">Finding Differences</span>
        <span style="font-size: 24px">Select two equations to find differences:<br>   </span>
        <select id="mydropdowndifference1" style="font-weight: 300; width: 220px; height: 30px; font-size: 16px;background-color: #eae6e0;"  onchange="SelectCartesianGraphTracing2('1')">
                <option value= "0">        
                    select an equation
                </option>;
                <!--
                {for(int i=1; i<= 20; i++){
                      var tpp1 = "tracingCartesian"+i;
                      var buttoncolor =  colorselect(i) ;//	"#000080";
                <option value=i style="font-weight: bold;background-color:white ; color:buttoncolor">        
                    Cartestian Equation i
                </option>;
                }}	
                -->
                <option value="1" style="font-weight: bold;background-color:white ; color:blue"> Cartestian Equation 1 </option>
                <option value="2" style="font-weight: bold;background-color:white ; color:red"> Cartestian Equation 2 </option>
                <option value="3" style="font-weight: bold;background-color:white ; color:green"> Cartestian Equation 3 </option>
                <option value="4" style="font-weight: bold;background-color:white ; color:orange"> Cartestian Equation 4 </option>
                <option value="5" style="font-weight: bold;background-color:white ; color:lime"> Cartestian Equation 5 </option>
                <option value="6" style="font-weight: bold;background-color:white ; color:cyan"> Cartestian Equation 6 </option>
                <option value="7" style="font-weight: bold;background-color:white ; color:magenta"> Cartestian Equation 7 </option>
                <option value="8" style="font-weight: bold;background-color:white ; color:silver"> Cartestian Equation 8 </option>
                <option value="9" style="font-weight: bold;background-color:white ; color:gray"> Cartestian Equation 9 </option>
                <option value="10" style="font-weight: bold;background-color:white ; color:maroon"> Cartestian Equation10 </option>
                <option value="11" style="font-weight: bold;background-color:white ; color:olive"> Cartestian Equation 11 </option>
                <option value="12" style="font-weight: bold;background-color:white ; color:purple"> Cartestian Equation 12 </option>
                <option value="13" style="font-weight: bold;background-color:white ; color:teal"> Cartestian Equation 13 </option>
                <option value="14" style="font-weight: bold;background-color:white ; color:salmon"> Cartestian Equation 14 </option>
                <option value="15" style="font-weight: bold;background-color:white ; color:gold"> Cartestian Equation 15 </option>
                <option value="16" style="font-weight: bold;background-color:white ; color:khaki"> Cartestian Equation 16 </option>
                <option value="17" style="font-weight: bold;background-color:white ; color:indigo"> Cartestian Equation 17 </option>
                <option value="18" style="font-weight: bold;background-color:white ; color:#1E90FF"> Cartestian Equation 18 </option>
                <option value="19" style="font-weight: bold;background-color:white ; color:#483D8B"> Cartestian Equation 19 </option>
                <option value="20" style="font-weight: bold;background-color:white ; color:#B8860B"> Cartestian Equation 20 </option>

        </select> 	 
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <select id="mydropdowndifference2" style="font-weight: 300; width: 220px; height: 30px; font-size: 16px;background-color: #eae6e0;"  onchange="SelectCartesianGraphTracing2('2')">
                <option value= "0">        
                    select an equation
                </option>;
                <!--
                {for(int i=1; i<= 20; i++){
                      var tpp1 = "tracingCartesian"+i;
                      var buttoncolor =  colorselect(i) ;//	"#000080";
                <option value=i style="font-weight: bold;background-color:white ; color:buttoncolor">        
                    Cartestian Equation i
                </option>;
                }}	
                --->
                <option value="1" style="font-weight: bold;background-color:white ; color:blue"> Cartestian Equation 1 </option>
                <option value="2" style="font-weight: bold;background-color:white ; color:red"> Cartestian Equation 2 </option>
                <option value="3" style="font-weight: bold;background-color:white ; color:green"> Cartestian Equation 3 </option>
                <option value="4" style="font-weight: bold;background-color:white ; color:orange"> Cartestian Equation 4 </option>
                <option value="5" style="font-weight: bold;background-color:white ; color:lime"> Cartestian Equation 5 </option>
                <option value="6" style="font-weight: bold;background-color:white ; color:cyan"> Cartestian Equation 6 </option>
                <option value="7" style="font-weight: bold;background-color:white ; color:magenta"> Cartestian Equation 7 </option>
                <option value="8" style="font-weight: bold;background-color:white ; color:silver"> Cartestian Equation 8 </option>
                <option value="9" style="font-weight: bold;background-color:white ; color:gray"> Cartestian Equation 9 </option>
                <option value="10" style="font-weight: bold;background-color:white ; color:maroon"> Cartestian Equation10 </option>
                <option value="11" style="font-weight: bold;background-color:white ; color:olive"> Cartestian Equation 11 </option>
                <option value="12" style="font-weight: bold;background-color:white ; color:purple"> Cartestian Equation 12 </option>
                <option value="13" style="font-weight: bold;background-color:white ; color:teal"> Cartestian Equation 13 </option>
                <option value="14" style="font-weight: bold;background-color:white ; color:salmon"> Cartestian Equation 14 </option>
                <option value="15" style="font-weight: bold;background-color:white ; color:gold"> Cartestian Equation 15 </option>
                <option value="16" style="font-weight: bold;background-color:white ; color:khaki"> Cartestian Equation 16 </option>
                <option value="17" style="font-weight: bold;background-color:white ; color:indigo"> Cartestian Equation 17 </option>
                <option value="18" style="font-weight: bold;background-color:white ; color:#1E90FF"> Cartestian Equation 18 </option>
                <option value="19" style="font-weight: bold;background-color:white ; color:#483D8B"> Cartestian Equation 19 </option>
                <option value="20" style="font-weight: bold;background-color:white ; color:#B8860B"> Cartestian Equation 20 </option>
        </select> 	 

        <br>
            Start Value =
            <input type="text" id="StartValuefinddiff" value="-5"  onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()"  style=" background-color:beige; font-family: black;font-weight: bold; font-size: 18px;height: 25px; width: 70px"  /> 
    
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
            End Value =
            <input type="text" id="EndValuefinddiff" value="5"  onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()"  style=" background-color:beige;font-family: black; font-family: black;font-weight: bold; font-size: 18px;height: 25px; width: 70px"  /> 
            <br>
            Stepsize =
           <input type="text" id="Stepsizefinddiff" value="1"  onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()"  style="margin-top: 10px; background-color:beige; font-family: black;font-weight: bold; font-size: 18px;height: 25px; width: 70px"  /> 
           &nbsp;&nbsp;&nbsp;&nbsp; 
           <input type="button" id="Stepsizefinddiff1" value="1"  onclick="document.getElementById('Stepsizefinddiff').value = '1';"  style="margin-top: 10px; background-color:silver; font-family: black;font-weight: bold; font-size: 18px;height: 25px; width: 40px"  /> 
           <input type="button" id="Stepsizefinddiff2" value="0.5"  onclick="document.getElementById('Stepsizefinddiff').value = '0.5';"  style="margin-top: 10px; background-color:silver; font-family: black;font-weight: bold; font-size: 18px;height: 25px; width: 40px"  /> 
           <input type="button" id="Stepsizefinddiff3" value="0.2"  onclick="document.getElementById('Stepsizefinddiff').value = '0.2';"  style="margin-top: 10px; background-color:silver; font-family: black;font-weight: bold; font-size: 18px;height: 25px; width: 40px"  /> 
           <input type="button" id="Stepsizefinddiff4" value="0.1"  onclick="document.getElementById('Stepsizefinddiff').value = '0.1';"  style="margin-top: 10px; background-color:silver; font-family: black;font-weight: bold; font-size: 18px;height: 25px; width: 40px"  /> 
           <input type="button" id="Stepsizefinddiff5" value="&pi;"  onclick="document.getElementById('Stepsizefinddiff').value = '&pi;'"  style="margin-top: 10px; background-color:silver; font-family: black;font-weight: bold; font-size: 18px;height: 25px; width: 40px"  /> 
           <input type="button" id="Stepsizefinddiff6" value="&pi;/2"  onclick="document.getElementById('Stepsizefinddiff').value = '&pi;/2'"  style="margin-top: 10px; background-color:silver; font-family: black;font-weight: bold; font-size: 18px;height: 25px; width: 40px"  /> 
           <input type="button" id="Stepsizefinddiff7" value="&pi;/3"  onclick="document.getElementById('Stepsizefinddiff').value = '&pi;/3'"  style="margin-top: 10px; background-color:silver; font-family: black;font-weight: bold; font-size: 18px;height: 25px; width: 40px"  /> 
           <input type="button" id="Stepsizefinddiff8" value="&pi;/4"  onclick="document.getElementById('Stepsizefinddiff').value = '&pi;/4'"  style="margin-top: 10px; background-color:silver; font-family: black;font-weight: bold; font-size: 18px;height: 25px; width: 40px"  /> 
           <br>  
            <input type="button" onclick="FindingDiff()" value="Find Differences" style="margin-top: 10px; background-color:cyan;height: 30px; width: 270px;   font-size: 24px"     />
            &nbsp;&nbsp;&nbsp;&nbsp;             
            <input type="button" value= "Close Panel" style="height: 30px; width: 270px;background-color: #ffd800; font-size: 24px" class="submit"  onclick="document.getElementById('FindingDifferences').style.display='none'"/>		
        
        <br><br>
      
        <div id="TableFindDiff" style="font-size:20px;white-space: nowrap;"></div>*/}.toString().slice(14, -1);       

    var myString2 = (myString.toString()).replace('*/}', '');
    myString2 = myString2.replace('*/', '');        
    //alert('CreateTextboxFordrawVector');
    document.getElementById('FindingDifferences').innerHTML = myString2;
}


function CreateTextboxForInputExamples(){
        //alert('CreateTextboxFordrawVector');
        var myString = function(){/*
        Input Examples:<br>
        <table  style="width:500px; height: auto; border-style: solid; border-color: black;background-color:rgba(230, 247, 251, 0.74);">		
            <tr >		
                <td><input type="button" title="comma" value="Example 1" type="text"  value="1" onclick="Example1()" style="width:90px; height:35px; font-size: 14px; background-color: #eae6e0"/></td>		
                <td>Input for all eight graphs</td>		
            </tr>		
 		    <tr>		
                <td><input type="button" title="comma" value="Example 2" type="text"  value="1" onclick="Example2()" style="width:90px; height:35px; font-size: 14px; background-color: #eae6e0"/></td>		
                <td>&#8730;<span style="text-decoration: overline">3x + 4</span> - 5</td>		
            </tr>		
            <tr>		
                <td><input type="button" title="comma" value="Example 3" type="text"  value="1" onclick="Example3()" style="width:90px; height:35px; font-size: 14px; background-color: #eae6e0"/></td>		
                <td><img src="example3.png" alt="Blank Image" /></td>		
            </tr>		
            <tr>	
                <td><input type="button" title="comma" value="Example 4" type="text"  value="1" onclick="Example4()" style="width:90px; height:35px; font-size: 14px; background-color: #eae6e0"/></td>		
                <td><img src="example4.png" alt="Blank Image" /></td>		
            </tr>		
            <tr>		
                <td><input type="button" title="comma" value="Example 5" type="text"  value="1" onclick="Example5()" style="width:90px; height:35px; font-size: 14px; background-color: #eae6e0"/></td>		
                <td><img src="example5.png" alt="Blank Image" /></td>		
            </tr>	
    	    <tr >		
                <td><input type="button" title="comma" value="Example 6" type="text"  value="1" onclick="Example6()" style="width:90px; height:35px; font-size: 14px; background-color: #eae6e0"/></td>		
                <td>y = 2|3.2x + 4/5| - 6</td>		
            </tr>	
    	    <tr>		
                <td>		
                    <input type="button" title="comma" value="Example 7" type="text"  value="1" 		
                        onclick="document.getElementById('TextBoxForCartesianGraph1').value = '(x - 6)/(2x - 7)'" style="width:90px; height:35px; font-size: 14px; background-color: #eae6e0"/>		
                </td>		
                <td><img src="example7.png" alt="Blank Image"/></td>		
            </tr>	
    	    <tr>		
                <td>       		
                    <input type="button" title="comma" value="Example 8" type="text"  value="1" style="width:90px; height:35px; font-size: 14px; background-color: #eae6e0" 		
                        onclick="document.getElementById('TextBoxForCartesianGraph1').value = 'Log(x + 2)/Log(4)'"/>		
                </td>		
                <td><img src="example8.png" alt="Blank Image"/></td>		
            </tr>		
            <tr>		
                <td>       		
                    <input type="button" title="comma" value="Example 9" type="text"  value="1" style="width:90px; height:35px; font-size: 14px; background-color: #eae6e0"		
                        onclick="document.getElementById('TextBoxForCartesianGraph1').value = '(xÂ² + x - 6)/(2x - 7)Â²'"/>		
                </td>		
                <td><img src="example9.png" alt="Blank Image"/></td>		
            </tr>	
            <tr>		
                <td>		
                    <input type="button" title="comma" value="Example 10" type="text"  value="1" style="width:90px; height:35px; font-size: 14px; background-color: #eae6e0"		
                    onclick ="document.getElementById('TextBoxForCartesianGraph1').value = 'nthRoot(4; 4x - 5)'"/>		
                </td>		
                <td><img src="example10.png" alt="Blank Image"/></td>		
            </tr>	
        </table>*/}.toString().slice(14, -1);       

    var myString2 = (myString.toString()).replace('*/}', '');
    myString2 = myString2.replace('*/', '');        
    //alert('CreateTextboxFordrawVector');
    document.getElementById('InputExamples').innerHTML = myString2;
}


function CreateTextboxForTableForCartesianEqu(){
        //alert('CreateTextboxFordrawVector');
        var myString = function(){/*
            <div id ="TableForCartesianAA"  style="height: 320px; width:7000px; font-size: 14px; border-style: none; border-width:1px;  background-color: white; border-color: blue;  overflow:  no-display  ">
            </div> <br>*/}.toString().slice(14, -1);       

    var myString2 = (myString.toString()).replace('*/}', '');
    myString2 = myString2.replace('*/', '');        
    //alert('CreateTextboxFordrawVector');
    document.getElementById('TableForCartesianEqu').innerHTML = myString2;

    var tt= ''
    for(var i=1; i<=20; i++){
        var color = graphcolor(i);
        tt = tt 
            + '<div><input type="button" onclick="exporttable(' + i + ')" value= "Export Data To Spreadsheet" style="height: 30px; background-color: #ffd800; font-size: 20px" class="submit"  />'		
            + '<input type="button" onclick="Copytable(' + i + ')" value= "Copy" style="height: 30px; background-color: #ffd800; font-size: 20px" class="submit"  />'		
            + '<input type="button" onclick="FullViewCartesianTable(' + i + ')" value= "Full View" style="height: 30px; background-color: #ffd800; font-size: 20px" />'		
            + '<br>'
            + '<div id="TableCartesianByColor' + i + '" style="white-space:nowrap;font-size:20px;width: 450px; height:300px;margin:10px;  background-color: white; border-color: '+ color +'; border-style:solid; overflow: scroll">TABLE ' + i + '<br>'
            + '</div></div>';
    }

    document.getElementById('TableForCartesianAA').innerHTML = tt;

}

function CreateTextboxForlocationOfMouse(){
    //alert('CreateTextboxFordrawVector');
    var myString = function(){/*
    <span style= "font-size:18px">Location of Mouse Over Chart:<br></span>		
    <input id = "LocationMouseOverChart" type="text" value="" onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()" 		
    style="height: 20px; width: 500px; border:0; color: black; font-family: black; font-weight: bold; font-size: 18px; background-color: white;" autocomplete="off" />		

    <br/>
	
    <span style="font-size: 18px;color: #164ea7;">Location of Mouse Click: 
    <button type="button"  title="When mouse is clicked over chart area, location of mouse will be recorded. " style="background-color: #00ff90 ; border: 0"><i>i</i></button>		
        
    <br></span>  		
    <input id = "LocationOfMouseClickX" type="text" value="(&nbsp;&nbsp; , &nbsp;&nbsp;)" onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()" 
    style="white-space: nowrap;width: 400px;height: 20px;  color: #164ea7; font-family: black; font-weight: bold; font-size: 18px; background-color: white; border:0"		
    autocomplete="off"/>		
    <input id = "LocationOfMouseClickY" type="text"  value="" 	onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()" 
    style="height: 20px;width: 1px;   color: #164ea7; font-family: black; font-weight: bold; font-size: 18px; background-color: white; border: 0"		
    autocomplete="off"   />		
    <span style="font-size: 18px"></span>*/}.toString().slice(14, -1);       

    var myString2 = (myString.toString()).replace('*/}', '');
    myString2 = myString2.replace('*/', '');        
    //alert('CreateTextboxFordrawVector');
    document.getElementById('locationOfMouse').innerHTML = myString2;
}

function CreateTextboxForHowToSaveImage(){
        //alert('CreateTextboxFordrawVector');
        var myString = function(){/*
            <br><br>
            <span style="font-size:30px" >A)</span>
            <span style="font-size:30px;margin-left:550px" >B)</span><br>

            <img id="canvasImg1" style="border-style: solid; border-color: black "  alt="blank"/>
            <img id="canvasImg2" style="border-style: solid; border-color: black;margin-left:30px " alt="blank"/><br><br><br>
            <span style="font-size:30px" >C)</span>
            <span style="font-size:30px;margin-left:550px" >D)</span><br>
            <img id="canvasImg3" style="border-style: solid; border-color: black " alt="blank"/>
            <img id="canvasImg4" style="border-style: solid; border-color: black;margin-left:30px " alt="blank"/><br><br><br><br><br>
            <img id="canvasImg5" style="border-style: solid; " alt="blank"/><br>
            <img id="canvasImg6" style="border-style: solid; " alt="blank"/><br>
            <img id="canvasImg7" style="border-style: solid; " alt="blank"/><br>
            <img id="canvasImg8" style="border-style: solid; " alt="blank"/><br>
            <img id="canvasImg9" style="border-style: solid; " alt="blank"/><br>*/}.toString().slice(14, -1);       

    var myString2 = (myString.toString()).replace('*/}', '');
    myString2 = myString2.replace('*/', '');        
    //alert('CreateTextboxFordrawVector');
    document.getElementById('HowToSaveImage').innerHTML = myString2;
}





function CreateTextboxForPlottingPointspolar(){
    //alert('CreateTextboxFordrawVector');
    var myString = function(){/*
    <fieldset style="width: 538px; height: 85px; background-color: rgba(230, 247, 251, 0.74); border-style: solid; border-color: black" onmouseout="display2()" onmouseover="display('34')" >
        <span style="font-size: x-large"> Plotting Points in polar coordinates (r, &theta;)</span> 
        <a href="VideoPlottingPoints.cshtml" target="VideoPlottingPoints" >Video</a>         
        &nbsp;&nbsp; 
        <span title="Checkbox must be checked in order to plot points." style="font-size: x-large">
        </span>    
        <br>
        <span style="font-size: medium">
        Note: Use keypad below to indicate whether &theta; is in radians or degrees.
        </span> 	
  	     <br/>	
 		
        &nbsp;		
        <input type="button"  value="CLEAR" onclick="ClearPolarPoint()" class="btswhite" style="background-color: cyan; height:30px; left:1000px" />		
 
        &nbsp;		
        <input type="button"  value="Submit" onclick="GraphingCalculator32()" class="btswhite" style="background-color: #ffd800; height:30px; left:1000px" />		 		
    
        &nbsp;		
        <input type="button"  value="Example" onclick="PolarExample2()" class="btswhite" style=" height:30px; left:1000px" />	
             	
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input id="checkboxPolarPoints" type="checkbox" type="text"  value="1"  onclick=" GraphingCalculator()"/>	
        on/off 
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	
        <input id="PolarPointLabelChecked" type="checkbox" type="text"  onclick=" GraphingCalculator()" checked/>Label
         
          	
       
        <marquee behavior="scroll" direction="left"  scrollamount="3"  style="color: black; font-size: large">
                <span id="polarpoint" style="color:orange"></span>
        </marquee>

    </fieldset>
    <fieldset id="panelPolarPoints"  style="width: 547px; height: 400px; padding: 5px; overflow-x: hidden;  overflow-y: scroll; border-style: solid; border-color: black; background-color: rgba(230, 247, 251, 0.74)" >	
    </fieldset>*/}.toString().slice(14, -1);       

    var myString2 = (myString.toString()).replace('*/}', '');
    myString2 = myString2.replace('*/', '');        
    //alert('CreateTextboxFordrawVector');
    document.getElementById('PlottingPointspolar').innerHTML = myString2;
       
    var PolarPointsText = '';
    for(var i=1; i<=20; i++){
        var pp1 = "PointPolar"+i+"X";
        var pp2 = "PointPolar"+i+"Y";

        PolarPointsText = PolarPointsText 
            + '<span style="font-size: x-large">'+i+'.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (</span>' 		
            + '<input id = '+pp1+' type="text" size="4" value="" onclick="currentID(); getCursorPosition44(this, event)"  onkeyup="symboltranslate()" style="height: 30px;  width:75px; color: black; margin-top: 10px; font-family: black; font-weight: bold; font-size: 20px; " autocomplete="off"   />'
            + '<span style="font-size: large">,</span>'		
     		+ '<input id = '+pp2+' type="text" size="4" value="" onclick="currentID(); getCursorPosition44(this, event)"  onkeyup="symboltranslate()" style="height: 30px;  width:75px; color: black; margin-top: 10px; font-family: black; font-weight: bold; font-size: 20px; " autocomplete="off"   />'
            + '<span style="font-size: x-large">)</span><br/>';
        }

        document.getElementById('panelPolarPoints').innerHTML = PolarPointsText + '<br/><br/><br/><br/><br/><br/><br/>';
}


function CreateTextboxForplotpoints(){
   //alert('CreateTextboxFordrawVector');
   var myString = function(){/*
        <span style="font-size: x-large" title="checkbox must be checked in order to plot points."    >Plotting Points  
        &nbsp;&nbsp;  &nbsp;&nbsp;  
        <input id="checkboxCartesianPoints"  type="checkbox" checked type="text"  value="1" checked  onclick=" GraphingCalculator()"/>		
          on/off 
        &nbsp;&nbsp;&nbsp;&nbsp;   
        <input id="LabelPointCheckBox"  type="checkbox" checked type="text"  value="1" checked    onclick=" GraphingCalculator()"/>		
          Label 
        </span>
        <br> 
        Point Size:
        <input type="radio" id="pointsizeL"  name="pointsize"   checked="checked"   onclick="GraphingCalculator()"/>
        <span style="font-size: large">Large &nbsp;&nbsp;  </span>               
        <input type="radio" id="pointsizeM"  name="pointsize"  onclick="GraphingCalculator()" checked="false"/> 
        <span style="font-size: large">Medium &nbsp;&nbsp; </span>               
        <input type="radio" id="pointsizeS"  name="pointsize"   onclick="GraphingCalculator()" checked="false"/> 
        <span style="font-size: large">Small &nbsp;&nbsp; </span>    
 
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;		
        <input type="button" id="plotPointButton"  value="Plot Point" onclick="GraphingCalculator22()" class="btswhite"	style="background-color: #ffd800; height:30px; left:1000px" />		 		
 
        &nbsp;		
        <input type="button"  value="CLEAR" onclick="clearcartesianpoint()" class="btswhite"		
                style="background-color: cyan; height:30px; left:1000px" />	<br> 
        <marquee id="marqueecartesianpoint" behavior="scroll" direction="left"  scrollamount="3"  style="color: black; font-size: large"><span id="scrollcartesianpoint" style="color: #ff6a00"></span>
        </marquee>*/}.toString().slice(14, -1);       
   
   var myString2 = (myString.toString()).replace('*/}', '');
   myString2 = myString2.replace('*/', '');        
   //alert('CreateTextboxFordrawVector');
   document.getElementById('plotpoints33').innerHTML = myString2;

   CreateTextboxForplotpoints33();

   var myString = function(){/*
     &nbsp;		
    <input type="button"  value="Submit" onclick="GraphingCalculator()" class="btswhite" style="background-color: #ffd800; height:30px; left:1000px" />		 		
     &nbsp;		
    <button type="button"  title="To plot individual points, input x and y coordinates and click 'Submit'." style="background-color: #00ff90 ; border: 0"><i>i</i></button>		
    <br><br> 
    <!--for tracing-->
    <span style="font-size: x-large">(</span> 		
    <input id = "TracePointX" type="text" size="4" value="" 		
    onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()" 
    style="height: 20px;  width:75px; color: black; font-family: black; font-weight: bold; font-size: 14px; background-color: #ff6a00; " readonly="true"   />		
    <span style="font-size: large">,</span>		
     		
    <input id = "TracePointY" type="text" size="4" value="" 		
    onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()"
    style="height: 20px;  width:75px; color: black; font-family: black; font-weight: bold; font-size: 14px; background-color: #ff6a00; " readonly="true"     />		
        <span style="font-size: x-large">)</span> 	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  for tracing feature (read only)	
    <br>
    <span style="font-size: x-large">(</span> 		
    <input id = "TracePointX2" type="text" size="4" value="" 		
    onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()"
    style="height: 20px;  width:75px; color: black; font-family: black; font-weight: bold; font-size: 14px; background-color: #ff6a00; " readonly="true"   />		
    <span style="font-size: large">,</span>		
     		
    <input id = "TracePointY2" type="text" size="4" value="" 		
    onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()"
    style="height: 20px;  width:75px; color: black; font-family: black; font-weight: bold; font-size: 14px; background-color: #ff6a00; " readonly="true"     />		
    <span style="font-size: x-large">)</span> 	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  for tracing feature (read only)	
    <br/><br/>*/}.toString().slice(14, -1);       
    var myString2 = (myString.toString()).replace('*/}', '');
    myString2 = myString2.replace('*/', '');        
   //alert('CreateTextboxFordrawVector');

   document.getElementById('plotpoints44').innerHTML = myString2; 
   document.getElementById('pointsizeL').checked = true;
   document.getElementById('pointsizeM').checked = false;
   document.getElementById('pointsizeS').checked = false;
}



function CreateTextboxForplotpoints33(){
    var text = '';
    for(var i=1; i<=40; i++){
        var hh0 = "" + i + "";
        var hh1 = "Point" + i + "X";
        var hh2 = "Point" + i + "Y";
        var hh3 = "Point" + i + "statusclose";
        var hh4 = "Point" + i + "statusopen";
        var hh5 = "Point" + i ;
        var line1 = ' <input id = "' + hh1 + '" type="text" size="4" value="" onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()"';
        var line2 = ' <input id = "' + hh2 + '" type="text" size="4" value="" onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()"';
        var line3 = ' <input type="radio" id= "' + hh3 + '" name= "' + hh5 + '" checked="checked"  onclick="GraphingCalculator()"/>';
        var line4 = ' <input type="radio" id= "' + hh4 + '" name= "' + hh5 + '" onclick="GraphingCalculator()"/>';

        text = text + '<span style="font-size: x-large">'+ hh0 + '.&nbsp;&nbsp;&nbsp; (</span>' 
             + line1 
             + ' style="height: 30px; margin-top: 10px;  width:75px; color: black; font-family: black; font-weight: bold; font-size: 20px; " autocomplete="off"   />'
             + ' <span style="font-size: large">,</span>'
             + line2
             + ' style="height: 30px; margin-top: 10px;  width:75px; color: black; font-family: black; font-weight: bold; font-size: 20px; " autocomplete="off"   />'
             + ' <span style="font-size: x-large">)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	</span>'
             + line3
             + ' <span style="font-size: large">Close &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>'
             + line4               
             + ' <span style="font-size: large">Open <br> </span>';                                                               
        }

     document.getElementById('plotpoints55').innerHTML = text;
}


function CreateTextboxForGraphingequationcircle(){
    var text1 = '<fieldset style="width: 540px; height: 65px; background-color: rgba(230, 247, 251, 0.74); border-style: solid; border-color: black"  onmouseout="display2()" onmouseover="display(30)" >'
        + '<span style="font-size:x-large" >Graphing equation of circle in standard form</sup>' 
        + '</span>(<a href="" target="Videocircle" >Video</a>)<br>'        
        + '<span style="font-size:x-large"  onmouseout="display2()" onmouseover="display(30)" >(x - h)<sup>2</sup> + (y - k)<sup>2</sup> = r<sup>2</sup></span>'     
        + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' 
        + '<span title="Checkbox must be checked in order to graph equation of cirlce." style="font-size: x-large">'
        + '<input id="checkboxcircle" type="checkbox" type="text"  value="1"  onclick=" GraphingCalculator()"/>on/off' 
        + '</span> &nbsp;&nbsp;'   
        + '<input type="button" title="" value="Example" type="text"  value="1"  style="width:90px;  font-size: medium;  "   onclick="ConicExample1()"  />' 	
        + '<input type="button"  value="Submit" onclick="GraphingCalculator24()" class="btswhite" style="background-color: #ffd800; height:30px; left:1000px"    /><br>'
        + '<marquee behavior="scroll" direction="left"  scrollamount="3"  style="color: black; font-size: large"><span id="scrollcircle" style="color:orange"></span></marquee>'
        + '</fieldset>';



    var text = '<fieldset style="width: 548px; height: 400px; padding: 5px; overflow-x: hidden;  overflow-y: scroll; border-style: solid; border-color: black; background-color: rgba(230, 247, 251, 0.74)" >'	
        + 'Example: Graph (x - 4)<sup>2</sup> + (y + 2)<sup>2</sup> = 16&nbsp;&nbsp;&nbsp;&nbsp;'
        + '<input type="button"  value="CLEAR" onclick="clearcircle()" class="btswhite"'		
        + 'style="background-color: cyan; height:30px; left:1000px" />'
        +'<br> <br>';

    for(var i=1; i<=10; i++){
        var pcc1 = "TextBoxCircleA"+i;
        var pcc2 = "TextBoxCircleB"+i;
        var pcc3 = "TextBoxCircleC"+i;
        var pcc4 = "checkboxXsquared2"+i;
        var pcc5 = "GraphCircle" + i;
        var pcc6 = "GraphCircleCenterX" + i;
        var pcc7 = "GraphCircleCenterY" + i;
        var buttoncolor =  graphcolor(i) ;//	"#000080";

    var text = text + '<input type="hidden" id = "' + pcc5 +  '"  value= ""  />'
        + '<input type="hidden" id = "' + pcc6 +  '"  value= ""  />'
        +  '<input type="hidden" id = "' + pcc7 +  '"  value= ""  />'
        + '<span style="font-size: 32px">('		
        + '<input id = "' + pcc1 +  '" type= "text"  value="" onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()"' 
        + 'style="height: 30px;  width:70px;   color: black; font-family: black; font-weight: bold; font-size: 20px;  text-align: center"/>'
        + ')<sup>2</sup> &nbsp;  </span>'
        + '<input id = "plus" type= "text" value= "+"  onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()" readonly style="height: 30px;  width:20px;   color: black; font-family: black; font-weight: bold; font-size: 20px;  text-align: center"/>'		
        + '<span style="font-size: 32px">&nbsp;&nbsp;('		
        + '<input id = "' +  pcc2 + '" type= "text"  value="" onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()"' 
        + 'style="height: 30px;  width:70px;   color: black; font-family: black; font-weight: bold; font-size: 20px;  text-align: center"/>'		
        + ')<sup>2</sup>  = </span>'
        + '<input id = "' + pcc3 + '"  type= "text" size="40" value="" onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()"' 
        + 'style="height: 30px;  width:35px; left:100px; color: black; font-family: black; font-weight: bold; font-size: 20px;  text-align: center"/>'		
        + '<span style="font-size: 32px">&nbsp;&nbsp;</span>'
        + '<input type="button" title=" " value="'+ i + '"'
        + 'type="text"  value="1"  style="width:35px; height:30px; font-size: large; background-color: ' + buttoncolor + '"'
        + 'onclick="ClearXsquared2()"/>'
    	+ '<input id= "' + pcc4 + '"  type="checkbox"type="text"  value="1"  onclick=" GraphingCalculator()"/>'		
        + '<span style="font-size: medium">on/off</span>'		
        + '<br/><br/>';	
    }

    text = text + '<br/><br/><br/><br/>999999999999999999999999999999999</fieldset>';
    //alert(text);

    document.getElementById('Graphingequationcircle').innerHTML = text1 + text;
}


function HideShowPanel(num){
        document.getElementById('plotpoints').style.display ='none';
        document.getElementById('plotpointsDiv').style.position = 'initial';
        document.getElementById('plotpointsDiv').style.borderStyle = 'none';
        document.getElementById('PlottingPointspolar').style.display ='none';
        document.getElementById('plotPolarpointsDiv').style.position = 'initial';
        document.getElementById('plotPolarpointsDiv').style.borderStyle = 'none';
        document.getElementById('Graphingequationcircle').style.display ='none';
        document.getElementById('GraphingequationofcircleDiv').style.position = 'initial';
        document.getElementById('GraphingequationofcircleDiv').style.borderStyle = 'none';
        document.getElementById('Graphingellipsehyperbola').style.display ='none';
        document.getElementById('GraphingequationofellipseDiv').style.position = 'initial';
        document.getElementById('GraphingequationofellipseDiv').style.borderStyle = 'none';
        document.getElementById('GraphingParametricEquations').style.display ='none';
        document.getElementById('GraphingParametricEquationsDiv').style.position = 'initial';
        document.getElementById('GraphingParametricEquationsDiv').style.borderStyle = 'none';
        document.getElementById('GraphingPolarEquations').style.display ='none';
        document.getElementById('GraphingPolarEquationsDiv').style.position = 'initial';
        document.getElementById('GraphingPolarEquationsDiv').style.borderStyle = 'none';
        document.getElementById('drawvector').style.display ='none';
        document.getElementById('DrawVectorDiv').style.position = 'initial';
        document.getElementById('DrawVectorDiv').style.borderStyle = 'none';
        document.getElementById('JacobianTransformation').style.display ='none';
        document.getElementById('JacobianTransformationDiv').style.position = 'initial';
        document.getElementById('JacobianTransformationDiv').style.borderStyle = 'none';

        document.getElementById('TaylorPolynomial').style.display ='none';
        document.getElementById('TaylorPolynomialDiv').style.position = 'initial';
        document.getElementById('TaylorPolynomialDiv').style.borderStyle = 'none';



    if(num == 1){
        document.getElementById('plotpoints').style.display ='inline-block';
        document.getElementById('pointsizeL').checked = true;
        document.getElementById('plotpointsDiv').style.position = 'absolute';
        document.getElementById('plotpointsDiv').style.top = '50px';
        document.getElementById('plotpointsDiv').style.borderStyle = 'solid';
        document.getElementById('plotpointsDiv').style.borderColor = 'black';
    }
    else if(num == 2){
        document.getElementById('plotpoints').style.display ='none';
        document.getElementById('plotpointsDiv').style.position = 'initial';
        document.getElementById('plotpointsDiv').style.borderStyle = 'none';
    }   
    else if(num == 3){
        document.getElementById('PlottingPointspolar').style.display ='inline-block';
        document.getElementById('plotPolarpointsDiv').style.position = 'absolute';
        document.getElementById('plotPolarpointsDiv').style.borderStyle = 'solid';
        document.getElementById('plotPolarpointsDiv').style.top = '50px';
        document.getElementById('plotPolarpointsDiv').style.borderColor = 'black';
  
    }
    else if(num == 4){
        document.getElementById('PlottingPointspolar').style.display ='none';
        document.getElementById('plotPolarpointsDiv').style.position = 'initial';
        document.getElementById('plotPolarpointsDiv').style.borderStyle = 'none';
    }
    else if(num == 5){
        document.getElementById('Graphingequationcircle').style.display ='inline-block';
        document.getElementById('GraphingequationofcircleDiv').style.position = 'absolute';
        document.getElementById('GraphingequationofcircleDiv').style.borderStyle = 'solid';
        document.getElementById('GraphingequationofcircleDiv').style.top = '50px';
        document.getElementById('GraphingequationofcircleDiv').style.borderColor = 'black';
    }
    else if(num == 6){
        document.getElementById('Graphingequationcircle').style.display ='none';
        document.getElementById('GraphingequationofcircleDiv').style.position = 'initial';
        document.getElementById('GraphingequationofcircleDiv').style.borderStyle = 'none';

    }
    else if(num == 7){
        document.getElementById('Graphingellipsehyperbola').style.display ='inline-block';
        document.getElementById('GraphingequationofellipseDiv').style.position = 'absolute';
        document.getElementById('GraphingequationofellipseDiv').style.borderStyle = 'solid';
        document.getElementById('GraphingequationofellipseDiv').style.top = '50px';
        document.getElementById('GraphingequationofellipseDiv').style.borderColor = 'black';
    }
    else if(num == 8){
        document.getElementById('Graphingellipsehyperbola').style.display ='none';
        document.getElementById('GraphingequationofellipseDiv').style.position = 'initial';
        document.getElementById('GraphingequationofellipseDiv').style.borderStyle = 'none';
    }
    else if(num == 9){
        document.getElementById('GraphingParametricEquations').style.display ='inline-block';
        document.getElementById('GraphingParametricEquationsDiv').style.position = 'absolute';
        document.getElementById('GraphingParametricEquationsDiv').style.borderStyle = 'solid';
        document.getElementById('GraphingParametricEquationsDiv').style.top = '50px';
        document.getElementById('GraphingParametricEquationsDiv').style.borderColor = 'black';
    }
    else if(num == 10){
        document.getElementById('GraphingParametricEquations').style.display ='none';
        document.getElementById('GraphingParametricEquationsDiv').style.position = 'initial';
        document.getElementById('GraphingParametricEquationsDiv').style.borderStyle = 'none';
    }
    else if(num == 11){
        document.getElementById('GraphingPolarEquations').style.display ='inline-block';
        document.getElementById('GraphingPolarEquationsDiv').style.position = 'absolute';
        document.getElementById('GraphingPolarEquationsDiv').style.borderStyle = 'solid';
        document.getElementById('GraphingPolarEquationsDiv').style.top = '50px';
        document.getElementById('GraphingPolarEquationsDiv').style.borderColor = 'black';
    }
    else if(num == 12){
        document.getElementById('GraphingPolarEquations').style.display ='none';
        document.getElementById('GraphingPolarEquationsDiv').style.position = 'initial';
        document.getElementById('GraphingPolarEquationsDiv').style.borderStyle = 'none';
    }
    else if(num == 13){
        document.getElementById('drawvector').style.display ='inline-block';
        document.getElementById('DrawVectorDiv').style.position = 'absolute';
        document.getElementById('DrawVectorDiv').style.borderStyle = 'solid';
        document.getElementById('DrawVectorDiv').style.top = '50px';
        document.getElementById('DrawVectorDiv').style.borderColor = 'black';
    }
    else if(num == 14){
        document.getElementById('drawvector').style.display ='none';
        document.getElementById('DrawVectorDiv').style.position = 'initial';
        document.getElementById('DrawVectorDiv').style.borderStyle = 'none';
    }
    else if(num == 15){
        document.getElementById('JacobianTransformation').style.display ='inline-block';
        document.getElementById('JacobianTransformationDiv').style.position = 'absolute';
        document.getElementById('JacobianTransformationDiv').style.borderStyle = 'solid';
        document.getElementById('JacobianTransformationDiv').style.top = '50px';
        document.getElementById('JacobianTransformationDiv').style.borderColor = 'black';
    }
    else if(num == 16){
        document.getElementById('JacobianTransformation').style.display ='none';
        document.getElementById('JacobianTransformationDiv').style.position = 'initial';
        document.getElementById('JacobianTransformationDiv').style.borderStyle = 'none';
    }
    else if(num == 17){
        document.getElementById('TaylorPolynomial').style.display ='inline-block';
        document.getElementById('TaylorPolynomialDiv').style.position = 'absolute';
        document.getElementById('TaylorPolynomialDiv').style.borderStyle = 'solid';
        document.getElementById('TaylorPolynomialDiv').style.top = '50px';
        document.getElementById('TaylorPolynomialDiv').style.borderColor = 'black';
    }
    else if(num == 18){
        document.getElementById('TaylorPolynomial').style.display ='none';
        document.getElementById('TaylorPolynomialDiv').style.position = 'initial';
        document.getElementById('TaylorPolynomialDiv').style.borderStyle = 'none';
    }

 
}




function TracingParametricEquationOptions(){
    TracingCartesian('1');
    document.getElementById('tracingtype22').click();
    document.getElementById('ParametricEquationsOnOff').checked = true;
    document.getElementById('TraceParametricCheckbox').checked = true;
 }


function CreateTextboxForGraphingParametricEquations(){
    //alert('CreateTextboxFordrawVector');
    var myString = function(){/*
    <fieldset style="width: 540px; height: 100px; background-color: rgba(230, 247, 251, 0.74); border-style: solid; border-color: black"  onmouseout="display2()" onmouseover="display('32')" >
    <span style="font-size: x-large"  >
    Parametric Equations     
    </span>   
    <a href="VideoParametricEquation.cshtml" target="VideoParametricEquation" >Video</a>     
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        <span title="Checkbox must be checked in order to do graphing of parametric equations." style="font-size: x-large">    
        <input id="ParametricEquationsOnOff"   type="checkbox"type="text"  value="1"  onclick=" GraphingCalculator()"/>		
            on/off</span>	
    <br/>    
     Tmin =    
    <input id = "ParametricTmin" type= "text" value="" 	onclick="currentID(); getCursorPosition44(this, event)"	 onkeyup="symboltranslate()"
        style="height: 35px;  width:40px; left:100px; color: black; font-family: black; font-weight: bold; font-size: 18px; ;" onclick="currentID(); getCursorPosition44(this, event)"  onkeyup="symboltranslate()"/>			
    &nbsp;&nbsp;&nbsp;&nbsp;
    Tmax =    
    <input id = "ParametricTmax" type= "text" value="" 	onclick="currentID(); getCursorPosition44(this, event)"	 onkeyup="symboltranslate()"	
        style="height: 35px;  width:40px; left:100px; color: black; font-family: black; font-weight: bold; font-size: 18px; ;" />				
    &nbsp;&nbsp;&nbsp;&nbsp;    
    Tstepsize =    
    <input id = "ParametricTstepsize" type= "text" value="" onclick="currentID(); getCursorPosition44(this, event)"	 onkeyup="symboltranslate()"			
        style="height: 35px;  width:40px; left:100px; color: black; font-family: black; font-weight: bold; font-size: 18px; ;" />			
    <br>    
    <input type="button" value="Example"  type="text"  value="1"  style="width:70px; height:30px; font-size: small; background-color:  #b6ff00"  onclick="ParametricExample()"/>		
    <input type="button"  value="Submit" onclick="GraphingCalculator28()" class="btswhite" style="background-color: #ffd800; height:30px; left:1000px" />		 		
    <input type="button"  value="clear" onclick="clearparametric()" class="btswhite"		
        style="background-color: cyan; height:30px; width: 60px" />	     
    <input type="button"  value="Table of Values" onclick="TableCartesianOpenClose('1')" class="btswhite" style="  height:25px; " />	
    <input type="button"  value="Tracing Graph" onclick="TracingParametricEquationOptions()" class="btswhite" style="  height:25px; " />	
    
    <br>                   
    </fieldset>
    <fieldset id="panelparametric"  style="width: 547px; height: 400px; padding: 5px; overflow-x: hidden;  overflow-y: scroll; border-style: solid; border-color: black; background-color: rgba(230, 247, 251, 0.74)" >	
    <marquee behavior="scroll" direction="left"  scrollamount="3"  style="color: black; font-size: large">
        <span id="parametric" style="color:orange"></span>
    </marquee>*/}.toString().slice(14, -1);       
    var myString2 = (myString.toString()).replace('*/}', '');
    myString2 = myString2.replace('*/', '');        

    var text = '';
    for(var i=1; i<=10; i++){
        var pa1 = "ParametricX"+i;
        var pa2 = "ParametricY"+i;
        var pa3 = "checkboxParametric"+i;
        var pa4 = "ParametricSet"+i;
        var buttoncolor =  graphcolor(i);
        var pa5 = 'ParametricX' + i;
        var pa6 = 'ParametricY' + i;

        var text = text + '<input id = "' + pa4  + '" type="hidden"  />'
            + '<span style="font-size: x-large">X(t) = </span>'		
            + '<input id = "'+ pa1 + '" type= "text" size="40" value="" onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()"'	
            + 'style="height: 40px;  width:350px; left:100px; color: black; font-family: black; font-weight: bold; font-size: 24px; ;"/>'		
            + '<input type="button" title="Example: x = 3t - 5" type="text"  value="' + i + '"  style="width:30px; height:30px; font-size: large; background-color: ' + buttoncolor + '"'
            + ' onclick= "clearparametricboxX(' + i + ')"/>'		
            + '<input id= ' + pa3 + ' type="checkbox"  type="text" checked value="1"   onclick=" GraphingCalculator()"/><span style="font-size: medium">on/off</span><br/>'
            + '<span style="font-size: x-large">Y(t) = </span>'		
            + '<input id = "' + pa2 + '" type= "text" size="40" value="" onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()"'	
            + 'style="height: 40px;  width:350px; left:100px; color: black; font-family: black; font-weight: bold; font-size: 24px; ;"/>'		
            + '<input type="button" title="Example: y = -2t - 4" type="text"  value="'+ i +'"  style="width:30px; height:30px; font-size: large; background-color: ' + buttoncolor + '"'
            + ' onclick= "clearparametricboxY(' + i + ')"/><br/><br/>';	
   }    
    
   var text = text + '<br><br> <br><br> <br><br> <br><br></fieldset>';

    //alert(text);
    document.getElementById('GraphingParametricEquations').innerHTML = myString2 + text;
}

function clearparametricboxX(idname){
    document.getElementById('ParametricX' + idname).value = '';  
}
function clearparametricboxY(idname){
    document.getElementById('ParametricY' + idname).value = '';  
}


function TracingPolarEquationOptions(){
    TracingCartesian('1');
    document.getElementById('tracingtype33').click();
    document.getElementById('TracePolarCheckbox').checked = true;
}

function CreateTextboxForGraphingPolarEquations(){
    //alert('CreateTextboxFordrawVector');
    var myString = function(){/*
    <fieldset style="width: 640px; height: 100px; background-color: rgba(230, 247, 251, 0.74); border-style: solid; border-color: black"  onmouseout="display2()" onmouseover="display('33')" >
        <span style="font-size: x-large">Polar Equations</span>           
        <a href="VideoPolarEquation.cshtml" target="VideoPolarEquation" >Video</a> 
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span title="Checkbox must be checked in order to do graphing of polar equations." style="font-size: x-large">    
        <input id="PolarEquationsOnOff"   type="checkbox"type="text"  value="1"  onclick=" GraphingCalculator()"/>		
            on/off</span>	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        <br/>        
        &theta;min =    
        <input id = "PolarTmin" type= "text" value="" 		
            style="height: 35px;  width:40px; left:100px; color: black; font-family: black; font-weight: bold; font-size: 18px; ;"
		    onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()"/>	
        &nbsp;&nbsp;
        &theta;max =    
        <input id = "PolarTmax" type= "text" value="" 		
            style="height: 35px;  width:40px; left:100px; color: black; font-family: black; font-weight: bold; font-size: 18px; ;" 	onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()"/>			
        &nbsp;&nbsp;    
        &theta;stepsize =    
        <input id = "PolarTstepsize" type= "text" value="" 		
            style="height: 35px;  width:40px; left:100px; color: black; font-family: black; font-weight: bold; font-size: 18px; ;"        
		onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()"/>	
        <br>

        <input type="button" value="Example"  type="text"  value="1"  style="width:80px; height:30px; font-size: small; background-color:  #b6ff00"  onclick="PolarExample()"/>		
        <input type="button"  value="Submit" onclick="GraphingCalculator30()" class="btswhite" style="background-color: #ffd800; height:30px; left:1000px" />		 		
        <input type="button"  value="clear" onclick="ClearPolarGraphs()" class="btswhite"		
        style="background-color: cyan; height:30px; width: 70px" />	    
                 <input type="button"  value="Table of Values" onclick="ShowTable(1)"  style="  height:25px; " />	
                 <input type="button"  value="Close" onclick="document.getElementById('GraphingPolarEquations').style.display ='none'" style="width:150px; height:30px; background-color:greenyellow">
	
        <br>
    </fieldset>    

    <fieldset id=""  style="width: 600px; height: 800px; padding: 5px; overflow-x: hidden;  overflow-y: scroll; border-style: solid; border-color: black; background-color: rgba(230, 247, 251, 0.74)" >	
    Note: Program accepts "θ" or "t"; <br>
        <marquee behavior="scroll" direction="left"  scrollamount="3"  style="color: black; font-size: large">
            <span id="polarequation" style="color:orange"></span>
        </marquee>*/}.toString().slice(14, -1);       
    var myString2 = (myString.toString()).replace('*/}', '');
    myString2 = myString2.replace('*/', '');        
    //alert('CreateTextboxFordrawVector');

    var text = '';
    for(var i=1; i<=20; i++){
    var pe1 = "PolarEquation"+i;
    var pe2 = "checkboxPolarEquation"+i;
    var pe3 = "PolarSet"+i;
    var buttoncolor =  graphcolor(i);
    var pe4 = "MyDropDownTheta" + i;
    
    text = text + '<input id = "' + pe3 + '"  type="hidden" size="4" onclick="" style=" background-color:beige"  />' 	
                 + '<input type="button" value="'+ i + '"   title="Example: r = Sin(3&theta;) +  5" type="text"  value="1"  style="width:30px; height:30px; font-size: large; background-color: ' + buttoncolor + '"'
                + 'onclick="clearpolarbox(' + i + ')"/>'		


        + '<select id= "' + pe4 + '" style="-moz-appearance: none;-webkit-appearance: none;font-weight: 300; height: 40px; font-size: 20px;font-weight: bold; font-family: black;background-color: #eae6e0;" >'
        + '<option value= "rtheta" style="font-size: 20px;font-weight: bold; font-family: black;">r(&theta;) = </option>'
        + '<option value= "theta" style="font-size: 20px;font-weight: bold; font-family: black;">&theta; = </option>'
        + '</select>'                                                                                   	
        + '<input id = "' + pe1 + '" type= "text" size="40" value=""     onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()"  style="height: 40px;  width:350px; left:100px; color: black; font-family: black; font-weight: bold; font-size: 24px; ;"/>'		
        + '<input id="' + pe2 + '" type="checkbox"  value="1"  onclick=" GraphingCalculator()" checked/>'
        + '<span style="font-size: medium">on/off</span>'		
        + '<br/><br/>'	
        ;
    }              		

    text = text + '<br/><br/><br/><br/><br/><br/><br/><br/></fieldset>';

    //document.getElementById('GraphingPolarEquations').innerHTML = myString2 + text;
    document.getElementById('polar5').innerHTML = myString2 + text;
    
}

function clearpolarbox(idname){
    document.getElementById('PolarEquation' + idname).value = '';  
}



function CreateTextboxForpanel1fieldset(){
    var text = '';
    for(var i=1; i<=20; i++){
        var tt1 = "mydropdownCartesian" + i;
        var tt2 = "dropdownbox" + i + "()";
        var tt3 = "TextBoxForCartesianGraph" + i;
        var tt4 = "checkboxY" + i;
        var tt5 = "Y" + i ;
        var tt6 = "tracegraph"+i;
        var tt7 = "GraphY"+ i;
        var tt8 = "GraphX"+ i;
        var buttoncolor =  graphcolor(i);
        //alert(text);
        text = text 
            + '<input id = "' + tt7 + '" type="hidden"/>'
            + '<input id = "' + tt8 + '" type="hidden"/>'
            + '<select id= "' + tt1 + '" style="margin-top:5px	; width: 70px; height: 40px; font-size: 24px;background-color: #eae6e0;"  onmouseout="display2()" onmouseover="display(12)"  onchange="' + tt2 + '">'
            + '<option value="0">y =</option>'
            + '<option value="1">y &lt;</option>'
            + '<option value="2">y &le;</option>'
            + '<option value="3">y &gt;</option>'
            + '<option value="4">y &ge;</option>'
            + '<option style="background-color:  Lime" value="5">x =</option>'
            + '<option style="background-color:  Lime"  value="6">x &lt;</option>'
            + '<option style="background-color:  Lime"  value="7">x &le;</option>'
            + '<option style="background-color:  Lime"  value="8">x &gt;</option>'
            + '<option style="background-color:  Lime"  value="9">x &ge;</option>'
            + '<option style="background-color:  #fcff10 "  value="10">x² = </option>'
            + '<option style="background-color:  #fcff10"  value="11">y² = </option>'
            + '</select>'
            + '<input id= "' + tt3 + '" type= "text" value="" onclick="currentID(); getCursorPosition44(this, event)" onkeypress="keypress(event)" onkeyup="symboltranslate()"'
            +  'style="height: 40px;  width:330px; left:100px; color: black; font-family: black; font-weight: bold; font-size: 24px; margin-top:5px	"/>'		
            + '<input type="button" title="clears entry" value="'+ i + '" type="text"  value="1"  style="width:30px; height:30px; font-size: large; background-color: ' + buttoncolor + '"'
            + 'onclick="ClearTextBoxForCartesianGraph(' + i + ')"/>'		
            + '<input type="radio" id= "' + tt6 + '"  name = "NameTraceCartesianEquation" onclick="TracingCartesian(1)"   onmouseout="display2()" onmouseover="display(11)"   />'    	
            + '<input title="Turns graph ON/OFF" id= "' + tt4 + '" type="checkbox"  type="text"  value="1" checked="checked" onclick="GraphingCalculator()"/>'		
            + '<input type="button" title=" entry" value="'+ i + '" type="text"  value="1"  style="width:30px; height:30px; font-size: large; background-color: ' + buttoncolor + '"'
	        + '<br/>';
      }
                        
      text = text + '<br/><br/>	<br/><br/>	<br/><br/>';

      //alert('CreateTextboxFordrawVector');
      var myString = function(){/*         
 
        
        */}.toString().slice(14, -1);       

    var myString2 = (myString.toString()).replace('*/}', '');
    myString2 = myString2.replace('*/', '');        
    //alert('CreateTextboxFordrawVector');
    document.getElementById('panel1fieldset').innerHTML = text;//myString2;
}


    function symboltranslate() {
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

function ClearTextBoxForCartesianGraph(idname){
    document.getElementById('TextBoxForCartesianGraph' + idname).value = '';
}


function CreateTextboxForpanel1fieldset2(){
    //alert('CreateTextboxFordrawVector');
    var myString = function(){/*
    <table >
        <tr>
        <td>
        <span  onmouseout="display2()" onmouseover="display('19')" style="font-size: 20px">
        <input type="radio" name="graphmode" id ="graphingmodepoint" value= "pm" title=" Calculator makes graph by plotting only the points; this feature should be used to graph greatest integer function; Example: y = [[x]]." onclick="GraphingCalculator()" onmouseout="display2()" onmouseover="display('19')" />		
        point mode &nbsp; &nbsp; &nbsp; 
        </span> 
        </td>

        <td>
        <span  onmouseout="display2()" onmouseover="display(19)" style="font-size: 20px">
        <input type="radio" name="graphmode" id ="graphingmodeline" value= "lm"  title=" Calculator makes graph by connecting dots with continuous lines or curves." onclick="GraphingCalculator()" checked     onmouseout="display2()" onmouseover="display('19')" />			
        line mode  &nbsp; &nbsp; &nbsp;
        </span> 
        </td>
        <td>
        <select id="mydropdownlinethickness" style=" width: 200px; font-size: 18px;background-color: #eae6e0;"  onchange="GraphingCalculator()" onclick="document.getElementById('mydropdownCalculatorFeature').value = 2">
            <option value="3">Graph thickness 1</option>
            <option value="2">Graph thickness 2</option>
            <option value="4">Graph thickness 3</option>
            <option value="6">Graph thickness 4</option>
            <option value="10">Graph thickness 5</option>
            <option value="12">Graph thickness 6</option>
        </select> 
       
        </td>
        </tr>

     </table>

    <select id="mydropdownCalculatorFeature" style=" width: 260px; font-size: 25px;background-color: #eae6e0;"  onchange="CalculatorFeature()" onclick="document.getElementById('mydropdownCalculatorFeature').value = 0">
        <option value= "0">Calculator Features</option>
        <option value="17">Tracing of Graph</option>
        <option value="20" onclick="graphingInequality234()">Graph Linear and Compound Inequality</option>
        <option value="21" onclick="document.getElementById('piecewisefunction').style.display='inline-block'">Piecewise Function</option>
        <option value="18">Writing Text Over Grid</option>
        <option value="1">Reflection of Cartesian Equations</option>
        <option value="2">Rotation of Cartesian Equation</option>
        <option value="3">Finding x-intercept and y-intercept</option>
        <option value="4">Finding Intersection of Two Graphs</option>
        <option value="5">Finding Maximum or Minimum</option>
        <option value="6">Shading/Painting</option>
        <option value="7">Drawing Line With Two Given Points</option>
        <option value="8">Drawing Line With Given Slope and One Point</option>
        <option value="9">Drawing Parabola Through Vertex and One Point</option>
        <option value="19">Drawing Parabola Through Three Points</option>
        <option value="10">Drawing Circle</option>
        <option value="11">Drawing Ellipse of Equation in Standard Form</option>
        <option value="12">Drawing Hyperbola of Equation in Standard Form</option>
        <option value="13">Drawing Two Parralel Lines</option>
        <option value="14">Drawing Two Perpendicular Lines</option>
        <option value="15">Testing Point for Inequality and Equation</option>
        <option value="16">Drawing Tangent Line(s) for function defined implicitly or explicitly</option>
    </select>  &nbsp; 
    <input type="button" title="Display table of values" value="Table of Values" onclick="TableCartesianOpenClose(1)" class="btswhite" style="width: 260px; font-size: 25px;background-color: #eae6e0;" />		 		
    <br>
    <input type="button" title="Tracing options: Manual or Automatic" value="Tracing" onclick="TracingCartesian(1)" class="btswhite" style="display: none;width: 260px; font-size: 25px;background-color: #eae6e0; " />	

    <input id="TextboxongridOFF" type="button" value= "Text Over Grid" onclick="Textboxongrid22BB()" title="Turns on/off textarea over grid to write text over grid.  " class="submit" style="width: 260px; font-size: 25px;background-color: #eae6e0;" />		
    &nbsp; 
    <input type="button" id ="xaxispilabel" value= "Labeling Axis" style=" width: 260px; font-size: 25px;background-color: #eae6e0;"
        title="Labels x-axis with multiples of &pi; " onclick="document.getElementById('graphOptions').style.display ='inline-block'" onmouseout="display2()" onmouseover="display()" />			
    &nbsp; 

    <br>
 
    <input title="displays tracing of graph feature" type="button" value="Trace Graph"  style="color: green;width: 260px;font-size:25px;background-color: #eae6e0;" onclick="TracingCartesian('1')"/>
    &nbsp; 
    <input type="button" value="Show Calculator"  style="color: green;width: 260px;font-size:25px;background-color: #eae6e0;" onclick="ShowScientificCalculator('1')"/>*/}.toString().slice(14, -1);       

    var myString2 = (myString.toString()).replace('*/}', '');
    myString2 = myString2.replace('*/', '');        
    //alert('CreateTextboxFordrawVector');
    document.getElementById('panel1fieldset2').innerHTML = myString2;
}


function RightSideForm22Onclick(idnum){
    if(idnum == 1){
         document.getElementById('RightSideForm22').style.left ='640px';
    }
    else if(idnum == 2){     
         document.getElementById('RightSideForm').style.left ='1335px'; 
    }
    else if(idnum == 3){     
         document.getElementById('RightSideForm22').style.left ='1335px';
    }
    else if(idnum == 4){     
        document.getElementById('RightSideForm').style.left ='640px'; 
    }
    else if(idnum == 5){     
        document.getElementById('PopOutInputList1').style.display='inline-block';
    }
    else if(idnum == 6){     
        document.getElementById('PopOutInputList2').style.display='inline-block';
    }    
    else if(idnum == 7){     
    
        display('25b');//show how to input x-values and y-values
    }             
    else if(idnum == 8){     
        document.getElementById('FindingDifferences').style.display='inline-block';		
    }         
    else if(idnum == 9){     
        document.getElementById('FindYGivenXInputList').value='-15 to 15 step 1/2';	
    }             
    else if(idnum == 10){     
        document.getElementById('FindYGivenXInputList').value='-2π to 2π step π/4';	
    }              
    else if(idnum == 11){     
        document.getElementById('FindYGivenXInputList').value='';
    }             
    else if(idnum == 12){     
         display('26b');
    }       
    else if(idnum == 13){     
         document.getElementById('FindXGivenYInputList').value='';
    }             
    else if(idnum == 14){     
     
    }    
    else if(idnum == 15){     
     
    }             
    else if(idnum == 16){     
     
    }    
    else if(idnum == 17){     
     
    }             
    else if(idnum == 18){     
     
    }    
}

function CreateTextboxForRightSideForm22(){
    var myString = function(){/*
    <div id="tablenew" style="top:5px ; left: 1100px; width: 650px; height: 780px; border-style: solid; border-color: black;overflow-y: hidden"  >
        <input id="tabletype11" type="button" title="" value="Cartesian" onclick="tabletype(1)" class="btswhite" style="width:200px; height:30px; font-size:20px;background-color: #fcff10 " />		
        <input id="tabletype22"  type="button" title="" value="Parametric" onclick="tabletype(2)" class="btswhite" style="width:200px; height:30px; font-size:20px;background-color: #eae6e0" />		
        <input id="tabletype33"  type="button" title="" value="Polar" onclick="tabletype(3)" class="btswhite" style="width:200px; height:30px; font-size:20px;background-color: #eae6e0" />		
        <br>
        <button id="moveForm1" type="button" onclick ="RightSideForm22Onclick(1);RightSideForm22Onclick(2)" style="width:200px;height:30px; font-size:20px;background-color: #eae6e0;color: green;">&#9668;Move Panel Left</button>   
        <button id="moveForm2" type="button"  onclick="RightSideForm22Onclick(3);RightSideForm22Onclick(4)" style="width:200px;height:30px; font-size:20px;background-color: #eae6e0;color: green;">Move Panel Right&#9658;</button>  
        <input   type="button"  value="Close Panel" onclick="TableCartesianOpenClose(2)" class="btswhite" style="background-color:  cyan; height:30px;font-size: 20px;width:200px; " />
        <br>

        <!--Table of Values for Cartesian Equation-->
        <fieldset id="tabletype1" style="width:587px; height: 700px; color: black; font-family: black; font-weight: bold; font-size: 14px; border-style: solid; border-color: black"  >		
             <span style="font-size: x-large "  onmouseout="display2()" onmouseover="RightSideForm22Onclick(7)" >Table of Values for Cartesian Equations</span>  
                &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
                <br/>        

            <span style="font-size: medium"  onmouseout="display2()" onmouseover="RightSideForm22Onclick(7)" >Input x-values = 
            <input id = "FindYGivenXInputList" type="text" size="4" value="-15 to 15 step 1/2"  ondblclick="promtinputbox(this.id)" onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()" 
                    style ="height: 30px;  width:450px; color: black; font-family: black; font-weight: bold; font-size: 18px; " autocomplete="off"   />
              
            </span>		
            <br/>    
        
            <input id="GenerateTableButton" type="button" value= "Generate Table" class="submit" style="height: 30px;    background-color: #ffd800; " onclick="TableY1234BB()"/>		
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="button"  value="Clear &uarr;"  onclick="RightSideForm22Onclick(11)" class="btswhite" style="background-color:  cyan; height:30px; left:1000px" />		
            <a href="VideoFindSpecificValue.cshtml" target="VideoFindSpecificValue" >Video</a>         
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="button"  value="Clear &darr;" onclick="RightSideForm22Onclick(13)" class="btswhite" style="background-color:  cyan; height:30px; left:1000px" />		
 
            <a href="VideoFindSpecificValue.cshtml" target="VideoFindSpecificValue" >Video</a>         
           
            
            <br/>
            <span style="font-size: medium;color: Lime"  onmouseout="display2()" onmouseover="RightSideForm22Onclick(12)" >Input y-values = 
            <input oninput="" id = "FindXGivenYInputList" type="text"  value="-5,-1,-0.5,0,1,2.6,3,7/8"  ondblclick="promtinputbox(this.id)" onclick = "currentID();getCursorPosition44(this, event)"   onkeyup="symboltranslate()"
                    style ="margin-top: 5px;height: 30px;  width:450px; color: black; font-family: black; font-weight: bold; font-size: 18px; " autocomplete="off" />		
              
            </span>        

            <span style="font-size: 20px">Approach </span>
            <input id = "LimitListValue" type="text" size="4" value=""  ondblclick="promtinputbox(this.id)" onclick="currentID(); getCursorPosition44(this, event)" onkeyup="symboltranslate()" 
                    style ="height: 30px;  width:100px; color: black; font-family: black; font-weight: bold; font-size: 14px; " autocomplete="off"   />

            <input type="button"  value="from the left" onclick="LimitList('1')" class="btswhite" style="background-color: #ffd800; height:30px;font-size: 14px ; left:1000px" />		 		
            <input type="button"  value="from the right" onclick="LimitList('2')" class="btswhite" style="background-color: #ffd800; height:30px;font-size: 14px ; left:1000px" />		 		

            <br><br/> 
            <button  id="checkbox11button"  type="button" style="background-color: #eae6e0;font-size: 18px;height: 35px" onclick="checkbox11()">Express y values as fractions</button>	
            <button  id="checkbox12button"  type="button" style="background-color: #eae6e0;font-size: 18px;height: 35px; font-family: black; font-weight: bold;" onclick="checkbox12()">Express x in terms of &pi;</button>	
            <button  id="checkbox13button"  type="button" style="background-color: #eae6e0;font-size: 18px;height: 35px" onclick="checkbox13()">Detailed</button>	
            <input  onclick="TableY1234BB()" id="ExpressYasFractionCheckbox" onclick="" type="checkbox"  value="" style="display: none;;" />
            <input  onclick="TableY1234BB()" id="ExpressAsPiCheckbox" type="checkbox"  value="" style="display: none;;" />
            <input  onclick="TableY1234BB()" id="TableCartesianDetailCheckbox" onclick="" type="checkbox"  value="" style="display: none;;" />
            <br>
            <input type="button" title=" " value="Pop Out 1" onclick="RightSideForm22Onclick(5)" style=" height:30px; font-size:18px;background-color: #eae6e0;color: green;" />		
            <input type="button" title=" " value="Pop Out 2" onclick="RightSideForm22Onclick(6)" style=" height:30px; font-size:18px;background-color: #eae6e0;color: green;" />		
            <input type="button" title=" " value="Finding Differences" onclick="RightSideForm22Onclick(8)" style=" height:30px; font-size:18px;background-color: #eae6e0;color: green;" />		
            <input type="button" title="input shortcut 1" value="S1" onclick="RightSideForm22Onclick(9)" class="btswhite" style=" height:30px; font-size:18px;background-color: #eae6e0" />	
            <input type="button" title="input shortcut 2" value="S2" onclick="RightSideForm22Onclick(10)" class="btswhite" style=" height:30px; font-size:18px;background-color: #eae6e0" />	
            <button type="button" title="comma" onclick="comma2()"   class ="btsred" style="height: 30px;  border-style: solid; 
                    background-color: #eae6e0;border-color: black; text-align: center;  width:50px; color: black; font-family: black; 
                    font-weight: bold; font-size: 20px;">,</button>		
                
            <br>
            <div id ="TableForCartesianEqu"  style="height: 450px; padding-left: 10px; width:550px; border-style: dashed; font-size: 14px; border-style: solid; border-width:5px;  background-color: white; border-color:  gray; overflow: scroll">
            </div>         

            <br/> <br/><br/> <br/>    

        </fieldset>         

        <!--Table of Values for Parametric Equations-->
        <fieldset id="tabletype2"  style="display: none;border-color: black; border-style: solid;  width:550px;height: 700px;" >     
            <h2>Table of Values for Parametric Equations</h2>
            <fieldset onmouseout="display2()" onmouseover="display(24)">
                Tmin =  
                <input id="TminParametricEqu"  type="text"  value="0" style="width:50px; font-family: black;font-weight: bold;  font-size: 16px;"
                      onclick="currentID(); getCursorPosition44(this, event)"  onkeyup="symboltranslate()"/>  
                &nbsp;&nbsp;&nbsp;&nbsp;
                Tmax = 
                <input id="TmaxParametricEqu"  type="text"  value="2&pi;"    style="width:50px;font-family: black; font-weight: bold; font-size: 16px; "
                        onclick="currentID(); getCursorPosition44(this, event)"  onkeyup="symboltranslate()"/>
                &nbsp;&nbsp;&nbsp;&nbsp;
                Stepsize = 
                <input id="StepsizeParametricEqu"  type="text"  value="0.1"    style="width:50px;font-family: black; font-weight: bold; font-size: 16px; "
                        onclick="currentID(); getCursorPosition44(this, event)"  onkeyup="symboltranslate()"/>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <input id="ParametricTableOnOffCheckbox"  type="checkbox"  value="" style="" onclick="GenerateTableParametricEqu()"/>on/off
                <br>
                <input type="button" value= "Submit" class="submit" style="height: 30px; width: 80px;  background-color: #ffd800; " onclick="GenerateTableParametricEqu()"/>		
                &nbsp;&nbsp;&nbsp;		
                <span style="font-size: small"></span>		
                &nbsp;		
                <input type="button"  value="Clear" onclick="clearParametricTable()" class="btswhite" style="background-color:  Lime; height:30px; left:1000px" />		
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button type="button" title="&pi; = 3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679" onclick="pi()"   class ="btsred" style="height: 30px;  border-style: solid; 
                                background-color: #eae6e0;border-color: black; text-align: center;  width:50px; color: black; font-family: black; 
                                font-weight: bold; font-size: 20px;">&pi;</button>	
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    
                <input  onclick="" id="taspiparametric2" type="checkbox"  value="" style="" />
                Express t in terms of &pi;        	
                <br>

                <marquee behavior="scroll" direction="left"  scrollamount="3"  style="color: black; font-size: large">
                        <span id="ParametricTablemarquee" style="color:orange"></span>
                </marquee>
            </fieldset>


            <div id="parametricTableContainer" style="height: 490px; padding: 1px; width:530px; font-size: 14px; border-style: solid; border-width:1px;  background-color: white; border-color: white; overflow: scroll">
                <div id="parametricTableContainer22"   style="height: 380px; padding: 10px; width:15000px; font-size: 14px; border-style: solid; border-width:5px;  background-color: white; border-color:  white; overflow: no-display">
                </div>
            </div>

        </fieldset> 

 
        <fieldset id="tabletype3"  style="display: none;border-color: black; border-style: solid;  width:550px;   height: 1000px" >    
         <h1>Table of Values for Polar Equations</h1>
        <fieldset onmouseout="display2()" onmouseover="display(24)">
            &theta;min =  
        <input id="TableStartPolarEquationTableNew"  type="text"  value="0" style="width:50px; font-family: black;font-weight: bold;  font-size: 16px; "
               onclick="currentID(); getCursorPosition44(this, event)"  onkeyup="symboltranslate()"/>
    &nbsp;&nbsp;&nbsp;&nbsp;
    &theta;max = 
    <input id="TableEndPolarEquationTableNew"  type="text"  value="2&pi;"    style="width:50px;font-family: black; font-weight: bold; font-size: 16px; "
            onclick="currentID(); getCursorPosition44(this, event)"  onkeyup="symboltranslate()"/>
    &nbsp;&nbsp;&nbsp;&nbsp;
    &theta;stepsize = 
    <input id="StepsizePolarEquationTableNew"  type="text"  value="0.1"    style="width:50px;font-family: black; font-weight: bold; font-size: 16px; "
            onclick="currentID(); getCursorPosition44(this, event)"  onkeyup="symboltranslate()"/>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <input id="PolarEquationTableCheckBoxNew"  type="checkbox"  value="" style="" onclick="TableDataPolarEquation22()" />on/off
    <br>

    <input type="button" value= "Submit" style="height: 30px; width: 80px;  background-color: #ffd800; " onclick="TableDataPolarEquation22()"/>		
   		
    &nbsp;		
    <input type="button"  value="Clear" onclick="clearPolarInputs()" class="btswhite" style="background-color:  Lime; height:30px; left:1000px" />	
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <button type="button" title="&pi; = 3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679" onclick="pi()"   class ="btsred" style="height: 30px;  border-style: solid; 
                    background-color: #eae6e0;border-color: black; text-align: center;  width:50px; color: black; font-family: black; 
                    font-weight: bold; font-size: 20px;">&pi;</button>		
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   
    <input   id="taspipolar2" type="checkbox"  value="" style=""  onclick="TableDataPolarEquation22()"/>
    Express &theta; in terms of &pi;      
    <br>

   </fieldset>
    <div  style="height: 690px; padding: 1px; width:540px; font-size: 14px; border-style: solid; border-width:1px;  background-color: white; border-color:  gray; overflow: scroll">
        <div id="polarequationcontainer" style="height: 370px; padding: 10px; width:15000px; font-size: 14px; border-style: solid; border-width:5px;  background-color: white; border-color:  white; overflow: no-display">
        </div>
    </div> 

    </fieldset>
    <br/> <br/> <br/> </div>*/}.toString().slice(14, -1);   
    var myString2 = (myString.toString()).replace('*/}', '');
    myString2 = myString2.replace('*/', '');        
    //alert('CreateTextboxFordrawVector');
    document.getElementById('RightSideForm22').innerHTML = myString2;

    var parametricTable = '';
    for(var i=1;i<=10;i++){
        var color = graphcolor(i);
        parametricTable = parametricTable 
            + '<fieldset style="height: 380px;padding:10px;  width:450px; ">'
            + '<span style="color:'+ color +';font-size: large "> Table of Values for Parametric Equations X(t) and Y(t) (set '+ i +'):</span><br>'
            + '<input type="button" onclick="exporttableParametric('+i+')" value= "Export Data To Spreadsheet" style="height: 30px;color:black; background-color: #ffd800; font-size: 20px"   />'		
            + '&nbsp;&nbsp;<input type="button" onclick="FullViewParametricTable(' + i + ')" value= "Full View" style="height: 30px; background-color: #ffd800; font-size: 20px" />'		
            + '<br/>'
            + '<div id = "TableParametricEquationsSet'+ i+'"  style="height: 300px;padding:10px;  width:450px; font-size: 20px; border-style: solid; border-width:5px; background-color: white; border-color: '+color+';overflow:scroll" >' 
            + '</div></fieldset><br/><br/>';
    }

    document.getElementById('parametricTableContainer').innerHTML =  parametricTable;

    var polarTable = '';
    for(var i=1;i<=20;i++){
        var color = graphcolor(i);
        polarTable = polarTable
            + '<fieldset style="height: 350px;padding:10px;  width:450px; ">'
            + '<span style="color:'+color+'; font-size: 16px"> Table of Values for Polar Equation '+i+':</span><br>'
            + '<input type="button" onclick="exporttablePolar('+i+')" value= "Export Data To Spreadsheet" style="height: 30px;background-color: #ffd800; font-size: 20px"   />'		
            + '&nbsp;&nbsp;<input type="button" onclick="FullViewPolarTable(' + i + ')" value= "Full View" style="height: 30px; background-color: #ffd800; font-size: 20px" />'		
           
            + '<br/>'
            + '<div id = "PolarEquationSet'+i+'" style="height: 300px;  width:450px; font-size: 20px; border-style: solid; border-width:5px; background-color: white; border-color:'+color+'; overflow: scroll "   > </div>'
            + '</fieldset> <br/> <br/>';
    }

    document.getElementById('polarequationcontainer').innerHTML =  polarTable;

}


function LimitList(num){
    if(num == 1){
        var val = FindValue( document.getElementById('LimitListValue').value );
        var tt1 = parseFloat(val) - 1;
        var tt2 = parseFloat(val) - 0.5;
        var tt3 = parseFloat(val) - 0.1;
        var tt4 = parseFloat(val) - 0.0001;
        var tt5 = parseFloat(val) - 0.000001;
        var tt6 = parseFloat(val) - 0.00000001;
        var tt7 = parseFloat(val) - 0.0000000001;
        var tt8 = parseFloat(val) - 0.000000000001;      
    }
    else{
        var val = FindValue( document.getElementById('LimitListValue').value );
        var tt1 = parseFloat(val) + 1;
        var tt2 = parseFloat(val) + 0.5;
        var tt3 = parseFloat(val) + 0.1;
        var tt4 = parseFloat(val) + 0.0001;
        var tt5 = parseFloat(val) + 0.000001;
        var tt6 = parseFloat(val) + 0.00000001;
        var tt7 = parseFloat(val) + 0.0000000001;
        var tt8 = parseFloat(val) + 0.000000000001;
   }
   
   document.getElementById('FindYGivenXInputList').value = tt1 + ', ' + tt2 + ', ' + tt3 + ', ' + tt4 + ', ' + tt5 + ', ' +tt6 + ', ' + tt7 + ', ' + tt8;

    TableY1234BB();
    return;		

}




function CreateTextboxFor(){
    //alert('CreateTextboxFordrawVector');
    var myString = function(){/*

    */}.toString().slice(14, -1);   
    var myString2 = (myString.toString()).replace('*/}', '');
    myString2 = myString2.replace('*/', '');        
    //alert('CreateTextboxFordrawVector');
    document.getElementById('').innerHTML = myString2;
}


function CreateTextboxFor77(){
    //alert('CreateTextboxFordrawVector')22222;
    var myString = function(){/*


    */}.toString().slice(14, -1);   
    var myString2 = (myString.toString()).replace('*/}', '');
    myString2 = myString2.replace('*/', '');        
    //alert('CreateTextboxFordrawVector');
    document.getElementById('').innerHTML = myString2;
}


function CreateTextboxFor8877(){
    //alert('CreateTextboxFordrawVector');
    var myString = function(){/*


    */}.toString().slice(14, -1);   
    var myString2 = (myString.toString()).replace('*/}', '');
    myString2 = myString2.replace('*/', '');        
    //alert('CreateTextboxFordrawVector');
    document.getElementById('').innerHTML = myString2;
}


    function deriv() {
        alert('tt = ');
        var func = '3x^2';
        var n = 2;
        var h = 0.0000001;
        var x = 2;
        var tt = nthDer(func, n, h, x);
        alert('tt = ' + tt);

    }

    function nCr(n, k) {//nPr
        var r = 1;
        if (k > n) return 0;

        for (var d = 1; d <= k; d++) {
            r *= n - d + 1;
            r /= d;
        }

        r = Math.floor(r);
        //alert('n='+n+'..............k='+k+ '...........r='+r);

        return r;

    }


    function nthDer(func, n, h, xval) {
        //alert('555555555555555');
        h = 0.000001;
        if (n < 0 && n > 4) { return; }

        var tt1 = xval + 2 * h;
        var tt2 = xval + h;
        var tt3 = xval - h;
        var tt4 = xval - 2 * h;
        var tt5 = xval + 5 * h;


        var fv0 = FindValue(replaceAll(func, 'x', "(" + xval + ")"));
        var fv1 = FindValue(replaceAll(func, 'x', "(" + tt1 + ")"));
        var fv2 = FindValue(replaceAll(func, 'x', "(" + tt2 + ")"));
        var fv3 = FindValue(replaceAll(func, 'x', "(" + tt3 + ")"));
        var fv4 = FindValue(replaceAll(func, 'x', "(" + tt4 + ")"));
        var fv5 = FindValue(replaceAll(func, 'x', "(" + tt5 + ")"));

        if(n == 0){
            return fv0;
        }
        else if (n == 1) {
            return (-fv1 + 8 * fv2 - 8 * fv3 + fv4) / (12 * h);
        }
        else if (n == 2) {
            h = 0.00001;
            var tt0 = xval - 3 * h;
            var tt1 = xval - 2*h;
            var tt2 = xval - h;
            var tt3 = xval;
            var tt4 = xval +  h;
            var tt5 = xval +  2*h;
            var tt6 = xval +  3*h;

            var fv0 = FindValue(replaceAll(func, 'x', "(" + tt0 + ")"));
            var fv1 = FindValue(replaceAll(func, 'x', "(" + tt1 + ")"));
            var fv2 = FindValue(replaceAll(func, 'x', "(" + tt2 + ")"));
            var fv3 = FindValue(replaceAll(func, 'x', "(" + tt3 + ")"));
            var fv4 = FindValue(replaceAll(func, 'x', "(" + tt4 + ")"));
            var fv5 = FindValue(replaceAll(func, 'x', "(" + tt5 + ")"));            
            var fv6 = FindValue(replaceAll(func, 'x', "(" + tt6 + ")"));

            var c0 = 1/90;
            var c1 = -3/20;
            var c2 = 3/2;
            var c3 = -49/18;
            var c4 = 3/2;
            var c5 = -3/20;
            var c6 = 1/90;

            var tt = c0 * fv0 + c1 * fv1 + c2 * fv2 + c3* fv3 + c4 * fv4  + c5 * fv5 + c6 * fv6;
            var tt2 = ToDecimal(tt.toString());     
                  
            return parseFloat(tt2)/(h^2);

        }
        else if (n == 3) {
            var tt0 = xval - 3 * h;
            var tt1 = xval - 2*h;
            var tt2 = xval - h;
            var tt3 = xval;
            var tt4 = xval +  h;
            var tt5 = xval +  2*h;
            var tt6 = xval +  3*h;

            var fv0 = FindValue(replaceAll(func, 'x', "(" + tt0 + ")"));
            var fv1 = FindValue(replaceAll(func, 'x', "(" + tt1 + ")"));
            var fv2 = FindValue(replaceAll(func, 'x', "(" + tt2 + ")"));
            var fv3 = FindValue(replaceAll(func, 'x', "(" + tt3 + ")"));
            var fv4 = FindValue(replaceAll(func, 'x', "(" + tt4 + ")"));
            var fv5 = FindValue(replaceAll(func, 'x', "(" + tt5 + ")"));            
            var fv6 = FindValue(replaceAll(func, 'x', "(" + tt6 + ")"));

            var c0 = 0;
            var c1 = 1;
            var c2 = -2;
            var c3 = 0;
            var c4 = 16;
            var c5 = -1;
            var c6 = 0;

        var tt = c0 * fv0 +c1 * fv1 + c2 * fv2 + c3* fv3 + c4 * fv4  + c5 * fv5 + c6 * fv6;
                 
        return tt/(h^2);
        }
        else if (n == 4) {
            return (fv1 - 4 * fv2 + 6 * fv0 - 4 * fv3 + fv4) / (h ^ 4);
        }

        
        return;

        ////////////////////////////////
        var derval = 0;
        for (var k = 0; k <= n; k++) {
            alert('k=' + k);
            var xkh = x + k * h;
            var funcval = FindValue(replaceAll(func, 'x', "(" + xkh + ")"));


            derval = derval + (-1) ^ (k + 1) * nCr(n, k) * funcval;
        }

        return derval / (h ^ n);

    }



function GraphTaylorPolybb(){
        document.getElementById('TextBoxForCartesianGraph1').value = document.getElementById('TaylorfOfxbb').value;
        var func =  document.getElementById('TaylorfOfxbb').value;
        var num = document.getElementById('TaylorDegreeValuebb').value;
        var cc = FindValue(document.getElementById('TaylorCenterbb').value);
        var hh = 0.000001;
        
        var fc0 = nthDer(func, 0, hh, cc);//   document.getElementById('Taylorf0c').value;
        var fc1 = nthDer(func, 1, hh, cc);//document.getElementById('Taylorf1c').value;
        var fc2 = nthDer(func, 2, hh, cc);//document.getElementById('Taylorf2c').value;
        var fc3 = nthDer(func, 3, hh, cc);//document.getElementById('Taylorf3c').value;
        var fc4 = nthDer(func, 4, hh, cc);//document.getElementById('Taylorf4c').value;

        var fc0 = ToDecimal(fc0.toString());     
        var fc1 = ToDecimal(fc1.toString());     
        var fc2 = ToDecimal(fc2.toString());     
        var fc3 = ToDecimal(fc3.toString());     
        var fc4 = ToDecimal(fc4.toString());     
                 
            

        alert('fc0=' + fc0 + '.............fc1=' + fc1 + '............fc2=' + fc2 + '...........fc3=' + fc3 + '...........fc4=' + fc4);

        var text = fc0 + '+' + '(' + fc1 + ')(x - (' + cc + '))';
        document.getElementById('TextBoxForCartesianGraph2').value = text;

        var text = fc0 + '+' + '(' + fc1 + ')(x - (' + cc + '))' + ' + (' + fc2 + ')(x - (' + cc + '))^2/2'; 
        document.getElementById('TextBoxForCartesianGraph3').value = text; 

        var text = fc0 + '+' + '(' + fc1 + ')(x - (' + cc + '))' + ' + (' + fc2 + ')(x - (' + cc + '))^2/2'  + ' + (' + fc3 + ')(x - (' + cc + '))^3/6'; 
         document.getElementById('TextBoxForCartesianGraph4').value = text; 

        var text = fc0 + '+' + '(' + fc1 + ')(x - (' + cc + '))' + ' + (' + fc2 + ')(x - (' + cc + '))^2/2'  + ' + (' + fc3 + ')(x - (' + cc + '))^3/6'
            + ' + (' + fc4 + ')(x - (' + cc + '))^4/24'; 
        document.getElementById('TextBoxForCartesianGraph5').value = text;            

        GraphingCalculator();

        return;

        //}
        //else if (num == 2) {
            var fc0 = nthDer(func, 0, hh, cc);//document.getElementById('Taylorf0c').value;
            var fc1 = nthDer(func, 1, hh, cc);//document.getElementById('Taylorf1c').value;
            var fc2 = nthDer(func, 2, hh, cc);//document.getElementById('Taylorf2c').value;
            var text = fc0 + '+' + '(' + fc1 + ')(x - (' + cc + '))' + ' + (' + fc2 + ')(x - (' + cc + '))^2/2'; 
            document.getElementById('TextBoxForCartesianGraph3').value = text; 
        //}
        //else if (num == 3) {
            var fc0 = nthDer(func, 0, hh, cc);//document.getElementById('Taylorf0c').value;
            var fc1 = nthDer(func, 1, hh, cc);//document.getElementById('Taylorf1c').value;
            var fc2 = nthDer(func, 2, hh, cc);//document.getElementById('Taylorf2c').value;
            var fc3 = nthDer(func, 3, hh, cc);//document.getElementById('Taylorf3c').value;
            var text = fc0 + '+' + '(' + fc1 + ')(x - (' + cc + '))' + ' + (' + fc2 + ')(x - (' + cc + '))^2/2'  + ' + (' + fc3 + ')(x - (' + cc + '))^3/6'; 
            document.getElementById('TextBoxForCartesianGraph4').value = text; 
        //}
        //else if (num == 4) {
            var fc0 = nthDer(func, 0, hh, cc);//document.getElementById('Taylorf0c').value;
            var fc1 = nthDer(func, 1, hh, cc);//document.getElementById('Taylorf1c').value;
            var fc2 = nthDer(func, 2, hh, cc);//document.getElementById('Taylorf2c').value;
            var fc3 = nthDer(func, 3, hh, cc);//document.getElementById('Taylorf3c').value;
            var fc4 = nthDer(func, 4, hh, cc);//document.getElementById('Taylorf4c').value;
            var text = fc0 + '+' + '(' + fc1 + ')(x - (' + cc + '))' + ' + (' + fc2 + ')(x - (' + cc + '))^2/2'  + ' + (' + fc3 + ')(x - (' + cc + '))^3/6'
            + ' + (' + fc4 + ')(x - (' + cc + '))^4/24'; 
            document.getElementById('TextBoxForCartesianGraph5').value = text;            
        //}





}


function GraphTaylorPoly(){
        document.getElementById('TextBoxForCartesianGraph1').value = document.getElementById('TaylorfOfx').value;
        var num = document.getElementById('TaylorDegreeValue').value;
        var cc = document.getElementById('TaylorCenter').value;

        //var text0 = 'f(c) =  <input id = "Taylorf0c" type= "text"  value="" onclick="currentID(); getCursorPosition44(this, event)"  onkeyup="symboltranslate()"  style="height: 30px;  width:300px;   color: black; font-family: black;  font-size: 24px;margin-top:10px "/>';
        //var text1 = 'f ′(c) =  <input id = "Taylorf1c" type= "text"  value="" onclick="currentID(); getCursorPosition44(this, event)"  onkeyup="symboltranslate()"  style="height: 30px;  width:300px;   color: black; font-family: black;  font-size: 24px;margin-top:10px "/>';
        //var text2 = 'f ″(c) =  <input id = "Taylorf2c" type= "text"  value="" onclick="currentID(); getCursorPosition44(this, event)"  onkeyup="symboltranslate()"  style="height: 30px;  width:300px;   color: black; font-family: black;  font-size: 24px;margin-top:10px "/>';
        //var text3 = 'f <sup>(3)</sup>(c) =  <input id = "Taylorf3c" type= "text"  value="" onclick="currentID(); getCursorPosition44(this, event)"  onkeyup="symboltranslate()"  style="height: 30px;  width:300px;   color: black; font-family: black;  font-size: 24px;margin-top:10px "/>';
        //var text4 = 'f <sup>(4)</sup>(c) =  <input id = "Taylorf4c" type= "text"  value="" onclick="currentID(); getCursorPosition44(this, event)"  onkeyup="symboltranslate()"  style="height: 30px;  width:300px;   color: black; font-family: black;  font-size: 24px;margin-top:10px "/>';
        //var text5 = 'f <sup>(5)</sup>(c) =  <input id = "Taylorf5c" type= "text"  value="" onclick="currentID(); getCursorPosition44(this, event)"  onkeyup="symboltranslate()"  style="height: 30px;  width:300px;   color: black; font-family: black;  font-size: 24px;margin-top:10px "/>';
        //var text6 = 'f <sup>(6)</sup>(c) =  <input id = "Taylorf6c" type= "text"  value="" onclick="currentID(); getCursorPosition44(this, event)"  onkeyup="symboltranslate()"  style="height: 30px;  width:300px;   color: black; font-family: black;  font-size: 24px;margin-top:10px "/>';
        //var text7 = 'f <sup>(7)</sup>(c) =  <input id = "Taylorf7c" type= "text"  value="" onclick="currentID(); getCursorPosition44(this, event)"  onkeyup="symboltranslate()"  style="height: 30px;  width:300px;   color: black; font-family: black;  font-size: 24px;margin-top:10px "/>';
        //var text8 = 'f <sup>(8)</sup>(c) =  <input id = "Taylorf8c" type= "text"  value="" onclick="currentID(); getCursorPosition44(this, event)"  onkeyup="symboltranslate()"  style="height: 30px;  width:300px;   color: black; font-family: black;  font-size: 24px;margin-top:10px "/>';
        //var text9 = 'f <sup>(9)</sup>(c) =  <input id = "Taylorf9c" type= "text"  value="" onclick="currentID(); getCursorPosition44(this, event)"  onkeyup="symboltranslate()"  style="height: 30px;  width:300px;   color: black; font-family: black;  font-size: 24px;margin-top:10px "/>';
        //var text10 = 'f <sup>(10)</sup>(c) =  <input id = "Taylorf10c" type= "text"  value="" onclick="currentID(); getCursorPosition44(this, event)"  onkeyup="symboltranslate()"  style="height: 30px;  width:300px;   color: black; font-family: black;  font-size: 24px;margin-top:10px "/>';

        
        var fac7 = 720 *7;
        var fac8 = 720 *7*8;            
        var fac9 = 720 *7*8*9;
        var fac10 = 720 *7*8*9*10;


        if (num >= 1) {
            var fc0 = document.getElementById('TaylorfOfx').value;
            var fc1 = document.getElementById('Taylorf1c').value;

            var fv0 = FindValue(replaceAll(fc0, 'x', "(" + cc + ")"));
            var fv1 = FindValue(replaceAll(fc1, 'x', "(" + cc + ")"));
      
            var fv0 = ToDecimal(fv0.toString());     
            var fv1 = ToDecimal(fv1.toString());
            var text = fv0 + '+' + '(' + fv1 + ')(x - (' + cc + '))';
            document.getElementById('TextBoxForCartesianGraph2').value = text;
        }
       
        if (num >= 2) {
            var fc2 = document.getElementById('Taylorf2c').value;
            var fv2 = FindValue(replaceAll(fc2, 'x', "(" + cc + ")"));
            var fv2 = ToDecimal(fv2.toString());     
           
            var text = fv0 + '+' + '(' + fv1 + ')(x - (' + cc + '))' + ' + (' + fv2 + ')(x - (' + cc + '))^2/2'; 
            document.getElementById('TextBoxForCartesianGraph3').value = text; 
        }
        
        if (num >= 3) {
            var fc3 = document.getElementById('Taylorf3c').value;
            var fv3 = FindValue(replaceAll(fc3, 'x', "(" + cc + ")"));
            var fv3 = ToDecimal(fv3.toString());     
            var text = fv0 + '+' + '(' + fv1 + ')(x - (' + cc + '))' + ' + (' + fv2 + ')(x - (' + cc + '))^2/2'  + ' + (' + fv3 + ')(x - (' + cc + '))^3/6'; 
            document.getElementById('TextBoxForCartesianGraph4').value = text; 
        }
        
        if (num >= 4) {
            var fc4 = document.getElementById('Taylorf4c').value;
            var fv4 = FindValue(replaceAll(fc4, 'x', "(" + cc + ")"));
            var fv4 = ToDecimal(fv4.toString());     
            var text = fv0 + '+' + '(' + fv1 + ')(x - (' + cc + '))' + ' + (' + fv2 + ')(x - (' + cc + '))^2/2'  + ' + (' + fv3 + ')(x - (' + cc + '))^3/6'
            + ' + (' + fv4 + ')(x - (' + cc + '))^4/24'; 
            document.getElementById('TextBoxForCartesianGraph5').value = text;            
        }
        
        if (num >= 5) {
            var fc5 = document.getElementById('Taylorf5c').value;
            var fv5 = FindValue(replaceAll(fc5, 'x', "(" + cc + ")"));
            var fv5 = ToDecimal(fv5.toString());     
            var text = fv0 + '+' + '(' + fv1 + ')(x - (' + cc + '))' + ' + (' + fv2 + ')(x - (' + cc + '))^2/2'  + ' + (' + fv3 + ')(x - (' + cc + '))^3/6'
            + ' + (' + fv4 + ')(x - (' + cc + '))^4/24'+ ' + (' + fv5 + ')(x - (' + cc + '))^5/120' ; 
            document.getElementById('TextBoxForCartesianGraph6').value = text;           
        }
        
        if (num >= 6) {
            var fc6 = document.getElementById('Taylorf6c').value;
            var fv6 = FindValue(replaceAll(fc6, 'x', "(" + cc + ")"));
            var fv6 = ToDecimal(fv6.toString());     
            var text = fv0 + '+' + '(' + fv1 + ')(x - (' + cc + '))' + ' + (' + fv2 + ')(x - (' + cc + '))^2/2'  + ' + (' + fv3 + ')(x - (' + cc + '))^3/6'
            + ' + (' + fv4 + ')(x - (' + cc + '))^4/24' + ' + (' + fv5 + ')(x - (' + cc + '))^5/120'  + ' + (' + fv6 + ')(x - (' + cc + '))^6/720' ; 
            document.getElementById('TextBoxForCartesianGraph7').value = text;           
           
        }
        
        if (num >= 7) {
            var fc7 = document.getElementById('Taylorf7c').value;
            var fv7 = FindValue(replaceAll(fc7, 'x', "(" + cc + ")"));
            var fv7 = ToDecimal(fv7.toString());     
            var text = fv0 + '+' + '(' + fv1 + ')(x - (' + cc + '))' + ' + (' + fv2 + ')(x - (' + cc + '))^2/2'  + ' + (' + fv3 + ')(x - (' + cc + '))^3/6'
               + ' + (' + fv4 + ')(x - (' + cc + '))^4/24' + ' + (' + fv5 + ')(x - (' + cc + '))^5/120'  + ' + (' + fv6 + ')(x - (' + cc + '))^6/720' 
               + ' + (' + fv7 + ')(x - (' + cc + '))^7/' + fac7 ; 
            document.getElementById('TextBoxForCartesianGraph8').value = text;           
            
        }
        
        if (num >= 8) {
            var fc8 = document.getElementById('Taylorf8c').value;
            var fv8 = FindValue(replaceAll(fc8, 'x', "(" + cc + ")"));
            var fv8 = ToDecimal(fv8.toString());     
            var fc8 = document.getElementById('Taylorf8c').value;
            var text = fv0 + '+' + '(' + fv1 + ')(x - (' + cc + '))' + ' + (' + fv2 + ')(x - (' + cc + '))^2/2'  + ' + (' + fv3 + ')(x - (' + cc + '))^3/6'
               + ' + (' + fv4 + ')(x - (' + cc + '))^4/24' + ' + (' + fv5 + ')(x - (' + cc + '))^5/120'  + ' + (' + fv6 + ')(x - (' + cc + '))^6/720' 
               + ' + (' + fv7 + ')(x - (' + cc + '))^7/' + fac7 + ' + (' + fv8 + ')(x - (' + cc + '))^8/' + fac7 ; 
            document.getElementById('TextBoxForCartesianGraph9').value = text;           
             
        }
        
        if (num >= 9) {
            var fc9 = document.getElementById('Taylorf9c').value;
            var fv9 = FindValue(replaceAll(fc9, 'x', "(" + cc + ")"));
            var fv9 = ToDecimal(fv9.toString());     
            var text = fv0 + '+' + '(' + fv1 + ')(x - (' + cc + '))' + ' + (' + fv2 + ')(x - (' + cc + '))^2/2'  + ' + (' + fv3 + ')(x - (' + cc + '))^3/6'
               + ' + (' + fv4 + ')(x - (' + cc + '))^4/24' + ' + (' + fv5 + ')(x - (' + cc + '))^5/120'  + ' + (' + fv6 + ')(x - (' + cc + '))^6/720' 
               + ' + (' + fv7 + ')(x - (' + cc + '))^7/' + fac7 + ' + (' + fv8 + ')(x - (' + cc + '))^8/' + fac8 
                + ' + (' + fv9 + ')(x - (' + cc + '))^9/' + fac9 ; 
            document.getElementById('TextBoxForCartesianGraph10').value = text;           
              
        }
        
        if (num >= 10) {
            var fc10 = document.getElementById('Taylorf10c').value;
            var fv10 = FindValue(replaceAll(fc10, 'x', "(" + cc + ")"));
            var fv10 = ToDecimal(fv10.toString());     
            var text = fv0 + '+' + '(' + fv1 + ')(x - (' + cc + '))' + ' + (' + fv2 + ')(x - (' + cc + '))^2/2'  + ' + (' + fv3 + ')(x - (' + cc + '))^3/6'
               + ' + (' + fv4 + ')(x - (' + cc + '))^4/24' + ' + (' + fv5 + ')(x - (' + cc + '))^5/120'  + ' + (' + fv6 + ')(x - (' + cc + '))^6/720' 
               + ' + (' + fv7 + ')(x - (' + cc + '))^7/' + fac7 + ' + (' + fv8 + ')(x - (' + cc + '))^8/' + fac8 
               + ' + (' + fv9 + ')(x - (' + cc + '))^9/' + fac9 + ' + (' + fv10 + ')(x - (' + cc + '))^10/' + fac10; 
            document.getElementById('TextBoxForCartesianGraph11').value = text;           
           
        }

        GraphingCalculator(); return;
}

    function TaylorPoly(num) {

        document.getElementById('TaylorDegreeValue').value = num;
        document.getElementById('TaylorPolynomialInput').innerHTML = '';

        var text1 = '<fieldset style="width: 540px; height: 65px; background-color: rgba(230, 247, 251, 0.74); border-style: solid; border-color: black"  onmouseout="display2()" onmouseover="display(30)" >'
        + '<span style="font-size:large" >Graphing 2nd Degree Taylor Polynomial P</sub>2</sup>(x)<br>'
        + 'P</sub>2</sup>(x) = '

        + '</span>(<a href="" target="Videocircle" >Video</a>)<br>'
        + '<span style="font-size:x-large"  onmouseout="display2()" onmouseover="display(30)" >(x - h)<sup>2</sup> + (y - k)<sup>2</sup> = r<sup>2</sup></span>'
        + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
        + '<span title="Checkbox must be checked in order to graph equation of cirlce." style="font-size: x-large">'
        + '<input id="checkboxcircle" type="checkbox" type="text"  value="1"  onclick=" GraphingCalculator()"/>on/off'
        + '</span> &nbsp;&nbsp;'
        + '<input type="button" title="" value="Example" type="text"  value="1"  style="width:90px;  font-size: medium;  "   onclick="ConicExample1()"  />'
        + '<input type="button"  value="Submit" onclick="GraphingCalculatorTaylor()" class="btswhite" style="background-color: #ffd800; height:30px; left:1000px"    /><br>'


        + '<marquee behavior="scroll" direction="left"  scrollamount="3"  style="color: black; font-size: large"><span id="scrollcircle" style="color:orange"></span></marquee>'
        + '</fieldset>';


        var text0 = 'f(x) =  <input id = "Taylorf0c" type= "text"  value="sin(x)" onclick="currentID(); getCursorPosition44(this, event)"  onkeyup="symboltranslate()"  style="height: 30px;  width:300px;   color: black; font-family: black;  font-size: 24px;margin-top:10px "/>';
        var text1 = 'f ′(x) =  <input id = "Taylorf1c" type= "text"  value="cos(x)" onclick="currentID(); getCursorPosition44(this, event)"  onkeyup="symboltranslate()"  style="height: 30px;  width:300px;   color: black; font-family: black;  font-size: 24px;margin-top:10px "/>';
        var text2 = 'f ″(x) =  <input id = "Taylorf2c" type= "text"  value="-sin(x)" onclick="currentID(); getCursorPosition44(this, event)"  onkeyup="symboltranslate()"  style="height: 30px;  width:300px;   color: black; font-family: black;  font-size: 24px;margin-top:10px "/>';
        var text3 = 'f <sup>(3)</sup>(x) =  <input id = "Taylorf3c" type= "text"  value="-cos(x)" onclick="currentID(); getCursorPosition44(this, event)"  onkeyup="symboltranslate()"  style="height: 30px;  width:300px;   color: black; font-family: black;  font-size: 24px;margin-top:10px "/>';
        var text4 = 'f <sup>(4)</sup>(x) =  <input id = "Taylorf4c" type= "text"  value="sin(x)" onclick="currentID(); getCursorPosition44(this, event)"  onkeyup="symboltranslate()"  style="height: 30px;  width:300px;   color: black; font-family: black;  font-size: 24px;margin-top:10px "/>';
        var text5 = 'f <sup>(5)</sup>(x) =  <input id = "Taylorf5c" type= "text"  value="cos(x)" onclick="currentID(); getCursorPosition44(this, event)"  onkeyup="symboltranslate()"  style="height: 30px;  width:300px;   color: black; font-family: black;  font-size: 24px;margin-top:10px "/>';
        var text6 = 'f <sup>(6)</sup>(x) =  <input id = "Taylorf6c" type= "text"  value="-sin(x)" onclick="currentID(); getCursorPosition44(this, event)"  onkeyup="symboltranslate()"  style="height: 30px;  width:300px;   color: black; font-family: black;  font-size: 24px;margin-top:10px "/>';
        var text7 = 'f <sup>(7)</sup>(x) =  <input id = "Taylorf7c" type= "text"  value="-cos(x)" onclick="currentID(); getCursorPosition44(this, event)"  onkeyup="symboltranslate()"  style="height: 30px;  width:300px;   color: black; font-family: black;  font-size: 24px;margin-top:10px "/>';
        var text8 = 'f <sup>(8)</sup>(x) =  <input id = "Taylorf8c" type= "text"  value="sin(x)" onclick="currentID(); getCursorPosition44(this, event)"  onkeyup="symboltranslate()"  style="height: 30px;  width:300px;   color: black; font-family: black;  font-size: 24px;margin-top:10px "/>';
        var text9 = 'f <sup>(9)</sup>(x) =  <input id = "Taylorf9c" type= "text"  value="cos(x)" onclick="currentID(); getCursorPosition44(this, event)"  onkeyup="symboltranslate()"  style="height: 30px;  width:300px;   color: black; font-family: black;  font-size: 24px;margin-top:10px "/>';
        var text10 = 'f <sup>(10)</sup>(x) =  <input id = "Taylorf10c" type= "text"  value="-sin(x)" onclick="currentID(); getCursorPosition44(this, event)"  onkeyup="symboltranslate()"  style="height: 30px;  width:300px;   color: black; font-family: black;  font-size: 24px;margin-top:10px "/>';


        //document.getElementById('TaylorPolynomialInput').innerHTML = 'Input the following:<br>' + text0 + '<br>';
        if (num >= 1) {
            document.getElementById('TaylorPolynomialInput').innerHTML += text1 + '<br>';
        }
        if (num >= 2) {
            document.getElementById('TaylorPolynomialInput').innerHTML += text2 + '<br>';
        }
        if (num >= 3) {
            document.getElementById('TaylorPolynomialInput').innerHTML += text3 + '<br>';
        }
        if (num >= 4) {
            document.getElementById('TaylorPolynomialInput').innerHTML += text4 + '<br>';
        }
        if (num >= 5) {
            document.getElementById('TaylorPolynomialInput').innerHTML += text5 + '<br>';
        }
        if (num >= 6) {
            document.getElementById('TaylorPolynomialInput').innerHTML += text6 + '<br>';
        }
        if (num >= 7) {
            document.getElementById('TaylorPolynomialInput').innerHTML += text7 + '<br>';
        }
        if (num >= 8) {
            document.getElementById('TaylorPolynomialInput').innerHTML += text8 + '<br>';
        }
        if (num >= 9) {
            document.getElementById('TaylorPolynomialInput').innerHTML += text9 + '<br>';
        }
        if (num >= 10) {
            document.getElementById('TaylorPolynomialInput').innerHTML += text10 + '<br>';
        }

    }

function GraphTaylorPolyExample(num){

    TaylorPoly(10);
    if(num == 1){
        document.getElementById('TaylorCenter').value = 0;
        document.getElementById('TaylorfOfx').value = 'e^(4x)';
        document.getElementById('Taylorf1c').value = '4e^(4x)';
        document.getElementById('Taylorf2c').value = '16e^(4x)';
        document.getElementById('Taylorf3c').value = '64e^(4x)';
        document.getElementById('Taylorf4c').value = '256e^(4x)';
        document.getElementById('Taylorf5c').value = '1024e^(4x)';
        document.getElementById('Taylorf6c').value = '(4^6)e^(4x)';
        document.getElementById('Taylorf7c').value = '(4^7)e^(4x)';
        document.getElementById('Taylorf8c').value = '(4^8)e^(4x)';
        document.getElementById('Taylorf9c').value = '(4^9)e^(4x)';
        document.getElementById('Taylorf10c').value = '(4^10)e^(4x)';
    }
    if(num == 2){
        document.getElementById('TaylorCenter').value = 2;
        document.getElementById('TaylorfOfx').value = '1/(x-1)';
        document.getElementById('Taylorf1c').value = '-1/(x-1)^2';
        document.getElementById('Taylorf2c').value = '2/(x-1)^3';
        document.getElementById('Taylorf3c').value = '-6/(x-1)^4';
        document.getElementById('Taylorf4c').value = '24/(x-1)^5';
        document.getElementById('Taylorf5c').value = '-120/(x-1)^6';
        document.getElementById('Taylorf6c').value = '720/(x-1)^7';
        document.getElementById('Taylorf7c').value = '-4320/(x-1)^8';
        document.getElementById('Taylorf8c').value = '30240/(x-1)^9';
        document.getElementById('Taylorf9c').value = '-241920/(x-1)^10';
        document.getElementById('Taylorf10c').value = '2177280/(x-1)^11';
    }
    if(num == 3){
        document.getElementById('TaylorCenter').value = 0;
        document.getElementById('TaylorfOfx').value = 'ln(x+1)';
        document.getElementById('Taylorf1c').value = '1/(x+1)';
        document.getElementById('Taylorf2c').value = '-1/(x+1)^2';
        document.getElementById('Taylorf3c').value = '2/(x+1)^3';
        document.getElementById('Taylorf4c').value = '-6/(x+1)^4';
        document.getElementById('Taylorf5c').value = '24/(x+1)^5';
        document.getElementById('Taylorf6c').value = '-120/(x+1)^6';
        document.getElementById('Taylorf7c').value = '720/(x+1)^7';
        document.getElementById('Taylorf8c').value = '-4320/(x+1)^8';
        document.getElementById('Taylorf9c').value = '30240/(x+1)^9';
        document.getElementById('Taylorf10c').value = '-241920/(x+1)^10';
    }




}



  function  keyboardshortcut(){
      window.open('../GraphingCalculator1/keyboardshortcut.pdf','keyboardshortcut');
  }
