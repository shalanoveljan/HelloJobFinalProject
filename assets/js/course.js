var modeBtn=document.querySelector('.mode_btn')
var mode=document.getElementById('body')


if(localStorage.getItem("mode")===null){
 localStorage.setItem("mode","light")
}

else{
 modeBtn.addEventListener('click',function(e){
 e.preventDefault()

 if(modeBtn.className==="evening mode_btn" ){
  
   mode.className='dark'
   modeBtn.className = "morning mode_btn"
   localStorage.setItem('mode','dark')
 }
 else  {
   mode.className='light'
   modeBtn.className="evening mode_btn"
   localStorage.setItem('mode','light')
   

 }
 })

 if(localStorage.getItem('mode')==='light'){
   mode.className='light'
   modeBtn.className="evening mode_btn"
 }

 else{
   mode.className='dark'
   modeBtn.className = "morning mode_btn"
 }
}


const baglamaButonu = document.querySelector('.baglama-btn');
const nightmenuacButonu = document.querySelector('.menu_open');
const sidebar = document.querySelector('.sidebar');


  nightmenuacButonu.addEventListener('click', function (e) {
   console.log(e);
    e.preventDefault()
    sidebar.style.display = 'block';

}
  )
baglamaButonu.addEventListener('click', function (e) {
    e.preventDefault()
    sidebar.style.display = 'none';
});

var registermodal=document.querySelector('.modal-content-register')
var loginmodal=document.querySelector('.modal-content')
var registerbtn=document.querySelector('.register-btn')
var loginbtn=document.querySelector('.loginac')

registerbtn.addEventListener("click",function (e) {
  e.preventDefault()
  registermodal.style.display="flex"
  loginmodal.style.display="none"
})
loginbtn.addEventListener("click",function (e) {
  e.preventDefault()
  registermodal.style.display="none"
  loginmodal.style.display="flex"
})




const likeIcons = document.querySelectorAll('#like');
const unlikeIcons = document.querySelectorAll('#unlike');

likeIcons.forEach(likeIcon => {
    likeIcon.addEventListener('click', function(e) {
        e.preventDefault();
        this.style.display = 'none';
        unlikeIcons[Array.from(likeIcons).indexOf(this)].style.display = 'inline-block';
    });
});

unlikeIcons.forEach(unlikeIcon => {
    unlikeIcon.addEventListener('click', function(e) {
        e.preventDefault();
        this.style.display = 'none';
        likeIcons[Array.from(unlikeIcons).indexOf(this)].style.display = 'inline-block';
    });
});

const filterClearButton = document.getElementById('clear_filters2');
const filterClearButton2 = document.getElementById('clear_filters');

filterClearButton.addEventListener('click', function(e) {
  e.preventDefault()
    document.getElementById('sort').selectedIndex = 0;
    var checkboxes = document.querySelectorAll('.resumes__filters__checkbox input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {
        checkbox.checked = false;
    });
    const radioButtons = document.querySelectorAll('input[type="radio"][name="sort"]');
    radioButtons.forEach(function(radioButton,index) {
        radioButton.checked = false;
        if (index === 0) {
          radioButton.checked = true;
      }
    });
});
filterClearButton2.addEventListener('click', function(e) {
  e.preventDefault()
    document.getElementById('sort').selectedIndex = 0;
    var checkboxes = document.querySelectorAll('.resumes__filters__checkbox input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {
        checkbox.checked = false;
    });
});


var filterbtn=document.querySelector('.btn-filters')
var closeButton=document.querySelector('.resumes__filters__close')
var resumesFilter=document.querySelector('#resume_filters')
var sortbtn=document.querySelector('.btn-sort')
var resumesSort=document.querySelector('.resumes__sort')
sortbtn.addEventListener('click',function(e){
  e.preventDefault()
  resumesSort.classList.toggle('resume-show')
  })

filterbtn.addEventListener('click',function(e){
e.preventDefault()
resumesFilter.style.opacity='1'
resumesFilter.style.visibility='visible'
})


closeButton.addEventListener('click',function(e){
e.preventDefault()
resumesFilter.style.opacity='0'
resumesFilter.style.visibility='hidden'
})

