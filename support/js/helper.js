module.exports = {
    arraySearch: function(data, compare) {
        var flat = [].concat.apply([], data);
        var col = flat.indexOf(compare);
        var row = -1;
        if (col != -1) // found, now need to extract the row
            while (data[++row].length <= col) // not this row
                col -= data[row].length; // so adjust and try again
        return row;
    },
    arrayToObject: function(key, values) {
        if (key.length != values.length) return -1;
        var res = {};
        for (var i = 0; i < values.length; i++) res[key[i]] = values[i];
        return res;
    },
    dateSince: function(start, end = 0) {
        if (end) end = new Date(end);
        else end = new Date();
        return Math.floor((end.getTime()) / (86400000)) - Math.floor((new Date(start).getTime()) / (86400000));
    },
    errorSuppress: function(caller, error) {
        if (error.message == "No Match Found") return true;
        console.error(caller, ": ", error.message);
    }
};

function check(element) {
    return String(element).localeCompare('C2');
}
