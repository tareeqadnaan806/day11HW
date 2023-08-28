window.addEventListener("keydown", (e)=>{
    const key = e.key
    const keyVal = document.querySelector("#key")
    keyVal.innerHTML = `
      <h1>You Pressed <span style="color: orange;">${key}<span/></h1>
    `
    const keyCodeVal = document.querySelector("#Code")
    const code = e.keyCode
    keyCodeVal.innerHTML = `
      <h1 style="color: red;">${code}</h1>
    `
  })