// This is for the automatically typed text 

var typed = new Typed('#auto_typed_text', {
  strings: ['Learn Coding', 'Developer', 'Avinash'],
  typeSpeed: 120,
  backSpeed: 80,
    loop: true,
});


// ----------- For Menu ----------- 

const hamburger = document.querySelector(".hamburger")

const menu = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" fill-rule="evenodd" class="text-3xl text-white md:hidden block" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926 224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512 166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"></path></svg>`

const cross = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="text-3xl text-white md:hidden block" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path></svg>`

const menuClick = () => {
  hamburger.innerHTML = (hamburger.innerHTML == menu) ? cross : menu;
  
  document.querySelector(".links").classList.toggle("menuClicked")
}

hamburger.onclick = () => {
  menuClick()
}

// ----- For login button to pervent default -------

document.querySelector(".login_btn").addEventListener("click", (e) => {
  e.preventDefault();
})

// ----- For links to navigate when hamburger is present ---- 

document.querySelector(".links").onclick = () => {
  if(window.innerWidth <= 880){
    menuClick()
  }
}