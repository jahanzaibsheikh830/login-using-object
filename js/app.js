var userDetails = []
function getData() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    email = email.toLowerCase();
    var password = document.getElementById('password').value;
    var phone = document.getElementById('phone').value;
    var gender = document.getElementById('gender').value;
    var nation = document.getElementById('nation').value;

    var getUser = localStorage.getItem("users")

    if (getUser === null) {
        userDetails = []
    }
    else {
        userDetails = JSON.parse(getUser)
    }

    var isFound = false;
    for (var i = 0; i < userDetails.length; i++) {
        if (userDetails[i].userEmail === email) {
            isFound = true
            break;
        }
    }

    if (isFound) {
        alert("User Already Registered");
    }
    else {
        userDetails.push(
            {
                userName: name,
                userEmail: email,
                userPassword: password,
                userPhone: phone,
                userGender: gender,
                userNation: nation,
            }
        )
        document.getElementById('name').value = "";
        document.getElementById('email').value = "";
        document.getElementById('password').value = "";
        document.getElementById('phone').value = "";
        document.getElementById('gender').value = "";
        document.getElementById('nation').value = "";
        alert("registrerd successfully")
        location.href = "login.html"
        localStorage.setItem("users", JSON.stringify(userDetails))
    }
    return false
}

var getUserData = JSON.parse(localStorage.getItem("users"))

function loginUser() {
    var uEmail = document.getElementById('uEmail').value;
    var uPassword = document.getElementById('uPassword').value;
    uEmail = uEmail.toLowerCase();
    var isFound = false;
    for (var i = 0; i < getUserData.length; i++) {
        if (getUserData[i].userEmail === uEmail) {
            isFound = i
            localStorage.setItem('cIndex', JSON.stringify(isFound))
            break;
        }
    }
    if (isFound === false) {
        alert("user not found")
    }
    else if (getUserData[isFound].userPassword === uPassword) {
        alert("login")
        location.href = "profile.html";
    }
    else {
        alert("email or password is incorrect")
    }
    return false
}
function loginSuccess() {
    var cIndex = JSON.parse(localStorage.getItem("cIndex"));
    document.getElementById('userN').innerHTML = "Name: " + getUserData[cIndex].userName;
    document.getElementById('userE').innerHTML = "Natioality: " + getUserData[cIndex].userNation;
    document.getElementById('userP').innerHTML = "Phone No: " + getUserData[cIndex].userPhone;
    document.getElementById('userG').innerHTML = "Gender: " + getUserData[cIndex].userGender;
}