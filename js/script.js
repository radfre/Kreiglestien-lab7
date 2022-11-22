function init(){
//add your javascrip between these two lines of code
  const button = document.getElementById('entrybutton');
  button.addEventListener('click',alertbox);

  function alertbox(){
    const input = document.getElementById('entryinput');
    const output = document.getElementById('textoutput');

    output.innerHTML = input.value;
    alert('Alex Schatz: ' + input.value);

  }
}
window.addEventListener('load', init);
