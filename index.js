var x = document.querySelector('.backgroundRight_form-radio');
var y = document.querySelector('.backgroundRight_form-questions-span');
x.onmouseover = function ()
{
    y.style.opacity = '100%';
};
x.onmouseout = function ()
{
    y.style.opacity = '0%';
};