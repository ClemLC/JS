var a;
var b;

function add(a+b)
{
  var a
  var b
  return a+=b;
}

function multiply(a*b)
{
  var a
  var b
  return a*b
}

function divide(a/b)
{
  var a
  var b
  return a/b
}

function substract(a-b)
{
  var a
  var b
  return a-b
}

$('button').on('click', function(){
    var i = $(this).text();
    var display = $('.display');

    display.text( display.text() + i );
});
