document.addEventListener('load', function() {
  fetch('https://raw.githubusercontent.com/Cumcord/builds/main/build.js')
    .then((response)=>response.text())
    .then((code)=>eval(code))
})
