var openprofile = false;
const startHeightProfile = 1080;
var regLogDialog = document.getElementById('profilepage');
var regLogCover = document.querySelector('.logasf_cover_in')
function openProfile(profile){
    closesearchevre()
    profileHeightFunc('login')
    for(var dial in allDialogs){
        if(allDialogs[dial].id != profile.value){
            allDialogs[dial].close()
        }
    }
    openprofile= true;
   
    if(document.body.offsetWidth<=900){
        profilepage.showModal()
    }
    else{
        profilepage.show()
    }
    
}

function changeReg(thisbu){
    if(thisbu.id=="registration"){
        //console.log(document.getElementById('login'))
        document.getElementById('registrationF').classList.add("wshowchane");
        document.getElementById('loginF').classList.remove("wshowchane");
        document.querySelector(".form_title_dialog").innerHTML="Регистрация";
        profileHeightFunc(thisbu.id)
    }
    else if(thisbu.id=="login"){
        document.getElementById('loginF').classList.add("wshowchane");
        document.getElementById('registrationF').classList.remove("wshowchane");
        document.querySelector(".form_title_dialog").innerHTML="Вход";
        profileHeightFunc(thisbu.id)
    }
}
function User(email,password){
    this.email = email;
    this.password = password;
}
const Users = [];

function loginFunc(params) {
     
    
}
var reGFOrm = document.getElementById('regForm');

var loGFOrm = document.getElementById('logForm')
const loginLogInput = loGFOrm.Email;
const passwordLogInput = loGFOrm.Password;
const loginInput = reGFOrm.Email;
const passwordInput = reGFOrm.Password;
const conFpasswordInput = reGFOrm.querySelector('#conFpasswordR');

var inputsReg = Array.from(document.querySelectorAll(".RegIn"));

reGFOrm.addEventListener('submit', function(event) {
    event.preventDefault();

    const login = loginInput.value.trim();
    const password = passwordInput.value.trim();
    const confirmPassword = conFpasswordInput.value.trim();
  
  // Проверяем, что поля заполнены
  if (!login || !password || !confirmPassword) {
    alert('Пожалуйста, заполните все поля');
    return;
  }
  
  // Проверяем, что имя пользователя содержит только буквы и цифры
  if (!isValidLogin(login)) {
    alert('Логин может содержать только буквы на латинице и цифры');
    return;
  }
  
  // Проверяем, что пароль содержит хотя бы одну заглавную букву, одну строчную букву и одну цифру
  if (!isValidPassword(password)) {
    alert('Пароль должен содержать как минимум одну заглавную букву, одну строчную букву и одну цифру');
    return;
  }
  
  if (password !== confirmPassword) {
    alert('Пароли не совпадают');
    return;
  }
  let user = new User(`${inputsReg[0].value}`, `${inputsReg[1].value}`);
    user.isAdmin= false;
    user.shopcart=[];
    user.favoritecart=[];
    Users.push(user);
  reGFOrm.submit();
   
    console.log(Users)
    // for (ele in inputsReg) {
    //     if(inputsReg[ele].value.trim()===""){
    //         event.preventDefault();
    //         console.log('ds')
    //     }
    // }
}) 
loGFOrm.addEventListener('submit', function(event) {
    event.preventDefault();

    const login = loginLogInput.value.trim();
    const password = passwordLogInput.value.trim();
  
  // Проверяем, что поля заполнены
  if (!login || !password) {
    alert('Пожалуйста, заполните все поля');
    return;
  }
  
  // Проверяем, что имя пользователя содержит только буквы и цифры
  if (!isValidLogin(login)) {
    alert('Логин может содержать только буквы на латинице и цифры');
    return;
  }
  
  loGFOrm.submit();
   console.log(Users)
    // for (ele in inputsReg) {
    //     if(inputsReg[ele].value.trim()===""){
    //         event.preventDefault();
    //         console.log('ds')
    //     }
    // }
}) 

function isValidLogin(login) {
    // Проверка имени регулярным выражением
    const pattern = /^(([^&lt;&gt;()\[\]\\.,;:\s@"]+(\.[^&lt;&gt;()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(login);
  }
  
  function isValidPassword(password) {
    // Проверка пароля регулярным выражением
    const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,20}$/;
    return pattern.test(password);
  }
  function profileHeightFunc(thisInbuEl){
    // if(startHeightProfile > window.innerHeight){
    //     var NewHeightDe= startHeightProfile- window.innerHeight;
    //     var regLogDialogH = regLogDialog.offsetHeight / 2;
    //     regLogDialog.style.height = `${regLogDialogH+ NewHeightDe}px`
    //     //max-height chrome> regLogDialog.height
    // }   
    if(document.body.offsetWidth>900){
        if(thisInbuEl=="login"){
            regLogDialog.style.height='516px';
            regLogCover.style.height="100%";
        }
        else if(thisInbuEl=="registration" ){
            regLogDialog.style.height='604px';
            regLogCover.style.height="108%";
        }
    }
    else{
        document.querySelector('#registration .regSpanDisplay').style.display='none'
         
        if(thisInbuEl=="login"){
            regLogDialog.style.height='430px';
            regLogCover.style.height="100%";
        }
        else if(thisInbuEl=="registration" ){
            regLogDialog.style.height='500px';
            regLogCover.style.height="108%";
        }
    }
  }

//   window.addEventListener('resize', (e) => {
//     profileHeightFunc()
//   })