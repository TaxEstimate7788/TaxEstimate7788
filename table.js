/*------------------------------------------------------------------------------
 * NAME       : table22
 * PURPOSE    : Creates 2X2 table with no border
 * PARAMETERS :   
 * RETURNS    :  
 *----------------------------------------------------------------------------*/

function table22(c11,c12,c21,c22,border){
    if(border=='no'){
        var bb = '<table border ="0" style="white-space:nowrap">';
    }
    else{
        var bb = '<table border ="1" style="white-space:nowrap">';
    }

    var text = bb
    +'<tr>'
    + '<td>' + c11 + '</td>'
    + '<td style="text-decoration-line: underline">' + c12 + '</td>'
    + '</tr>'
    + '<tr>'
    + '<td>' + c21 + '</td>'
    + '<td>' + c22 + '</td>'
    + '</tr>'
    + '</table>'
    ;

    return text;
}


function table23(c11,c12,c13,c21,c22,c23,border){
    if(border=='no'){
        var bb = '<table border ="0" style="white-space:nowrap">';
    }
    else{
        var bb = '<table border ="1" style="white-space:nowrap">';
    }

    var text = bb
    +'<tr>'
    + '<td>' + c11 + '</td>'
    + '<td>' + c12 + '</td>'
    + '<td>' + c13 + '</td>'
    + '</tr>'
    + '<tr>'
    + '<td>' + c21 + '</td>'
    + '<td>' + c22 + '</td>'
    + '<td>' + c23 + '</td>'
    + '</tr>'
    + '</table>'
    ;

    return text;
}


function table24(c11,c12,c13,c14,c21,c22,c23,c24,border){
    if(border=='no'){
        var bb = '<table border ="0" style="white-space:nowrap">';
    }
    else{
        var bb = '<table border ="1" style="white-space:nowrap">';
    }

    var text = bb
    +'<tr>'
    + '<td>' + c11 + '</td>'
    + '<td>' + c12 + '</td>'
    + '<td>' + c13 + '</td>'
    + '<td>' + c14 + '</td>'
    + '</tr>'
    + '<tr>'
    + '<td>' + c21 + '</td>'
    + '<td>' + c22 + '</td>'
    + '<td>' + c23 + '</td>'
    + '<td>' + c24 + '</td>'
    + '</tr>'
    + '</table>'
    ;
    return text;
}



function table25(c11,c12,c13,c14,c15,c21,c22,c23,c24,c25,border){
    if(border=='no'){
        var bb = '<table border ="0" style="white-space:nowrap">';
    }
    else{
        var bb = '<table border ="1" style="white-space:nowrap">';
    }

    var text = bb
    +'<tr>'
    + '<td>' + c11 + '</td>'
    + '<td>' + c12 + '</td>'
    + '<td>' + c13 + '</td>'
    + '<td>' + c14 + '</td>'
    + '<td>' + c15 + '</td>'
    + '</tr>'
    + '<tr>'
    + '<td>' + c21 + '</td>'
    + '<td>' + c22 + '</td>'
    + '<td>' + c23 + '</td>'
    + '<td>' + c24 + '</td>'
    + '<td>' + c25 + '</td>'
    + '</tr>'
    + '</table>'
    ;
    return text;
}