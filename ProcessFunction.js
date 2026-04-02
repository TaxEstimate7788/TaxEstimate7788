     function processlog(str) {
        var nn = str.indexOf('Log');
        var hh = '';
        for (var i = nn; i < str.length; i++) {
            var hh = hh + str.charAt(i);
            var dd = (ParentheseMatch(hh) && hh.indexOf('(') > -1 && hh.indexOf(')') > -1);
             //alert('dd = ' + dd + '.......hh = ' + hh);
             if(dd){  
                var tt = hh.split('(');
                //alert('tt[0]...' + tt[0]);
                var BaseNumber = tt[0].replace('Log','');
                //alert('BaseNumber44...' + BaseNumber);

                //alert('BaseNumber...' + BaseNumber);
                var indx = hh.indexOf('(');
                var rr = hh.substring(indx);
                //alert('rr...' + rr);
                if (BaseNumber.trim() == '') {
                    var exp = 'LLL' + rr + '';
                }
                else {
                    var Base = FindValue(BaseNumber.toString());
                    var exp = '(LLL' + rr + '/LLL(' + Base + '))';
                }
                
                str = str.replace(hh, exp);
                //alert('hh = ' + hh + ' ........tt[0] = ' + tt[0] + '......BaseNumber = ' + BaseNumber + '....rr = ' + rr  + '....str = ' + str);
                return str;
            }
        }

        return str;
    }


    function processroot(str) {
        var nn = str.indexOf('Root');
        var hh = '';
        for (var i = nn; i < str.length; i++) {
            var hh = hh + str.charAt(i);
            var dd = (ParentheseMatch(hh) && hh.indexOf('(') > -1 && hh.indexOf(')') > -1);
             //alert('dd = ' + dd + '.......hh = ' + hh);
             if(dd){  
                var tt = hh.split('(');
                var RootNumber = tt[0].replace('Root','');
                if(RootNumber.trim()==''){
                    alert('Root number is missing.');
                    return NaN;
                }

                if(parseFloat(RootNumber) != parseInt(RootNumber)){
                    alert('Root number must be an integer.');
                    return NaN;
                }


                var indx = hh.indexOf('(');
                var rr = hh.substring(indx);
                var exponent = 1 / parseFloat(RootNumber);
                var exp = rr + '^(' + exponent + ')';
                str = str.replace(hh, exp);
                //alert('hh = ' + hh + ' ........tt[0] = ' + tt[0] + '......RootNumber = ' + RootNumber + '....rr = ' + rr  + '....str = ' + str);
                return str;
            }
        }

        return str;
    }
