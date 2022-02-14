function rec() {
    var a = document.getElementById('inp');
    var b = Math.round(Math.random() * 10000);
    //console.log(b);
    var c = b + '';
    if (c.length == 4) {
        a.value = c;
    }
    else {
        return rec();
    }
}
document.getElementById('pin').addEventListener('click', function () {
    rec();

});


document.getElementById('btnp').addEventListener('click', function (e) {
    if (e.target.innerText == 'C') {
        document.getElementById('inp2').value = '';
        // document.getElementById('inp').value = '';
        // document.getElementById('rt').style.visibility = 'hidden';
        // document.getElementById('wg').style.visibility = 'hidden';
    }
    else {
        document.getElementById('inp2').value = document.getElementById('inp2').value + e.target.innerText;
    }

});
var count = 0;
document.getElementById('sub').addEventListener('click', function () {
    var a = document.getElementById('inp').value;
    var b = document.getElementById('inp2').value;
    if (a == b) {
        document.getElementById('rt').style.visibility = 'visible';
        document.getElementById('wg').style.visibility = 'hidden';
        count = 0;
        document.getElementById('try').style.visibility = 'hidden';

    }
    else {
        count++;
        if (count > 1 && a != b) {
            document.getElementById('wg').style.visibility = 'visible';
            document.getElementById('try').innerText = 'You try ' + count + " times";
            document.getElementById('try').style.visibility = 'visible';
            document.getElementById('rt').style.visibility = 'hidden';
        }
        else {
            document.getElementById('wg').style.visibility = 'visible';
            document.getElementById('rt').style.visibility = 'hidden';
        }
    }

});
