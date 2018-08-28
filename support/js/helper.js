module.exports = {

    arraySearch: function (data,index,compare){
        var flat = [].concat.apply([], data);
        var col = flat.indexOf(compare);
        var row = -1;
        if (col != -1) // found, now need to extract the row
            while (data[++row].length <= col) // not this row
                 col -= data[row].length; // so adjust and try again
        return row;
    },
    
    arrayToObject: function (key, values){
        if (key.length != values.length)
            return -1;
        var res = {};
        for (var i = 0; i < values.length; i++)
            res[key[i]] = values[i];
        return res;
    }
}

function check(element) {
  return String(element).localeCompare('C2');
}

