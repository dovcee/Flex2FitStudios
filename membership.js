//Display error message by id
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

//Validator
function validateForm() {
    //get value 
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var address = document.contactForm.address.value;
    var city = document.contactForm.city.value;
    var state = document.contactForm.state.value;
    var zipcode = document.contactForm.zipcode.value;
    var mobile = document.contactForm.mobile.value;
    var plan = document.contactForm.plan.value;
    var gender = document.contactForm.gender.value;
    var goals = [];
    var checkboxes = document.getElementsByName("goals[]");
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            goals.push(checkboxes[i].value);
        }

    }

    // set to default
    var nameErr = emailErr = addressErr = cityErr = stateErr = zipcodeErr = mobileErr = planErr = genderErr = true;

    // Validate member name
    if (name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }

    // Validate member email address
    if (email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }

    // Validate member phone number
    if (mobile == "") {
        printError("mobileErr", "Please enter your phone number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if (regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid 10-digit phone number");
        } else {
            printError("mobileErr", "");
            mobileErr = false;
        }
    }

     //Validate Street Address
     if (address == "") {
        printError("addressErr", "Please enter your street address");
    } else {
        printError("addressErr", "");
        addressErr = false;
    }
    //Validate City 
    if (city == "") {
        printError("cityErr", "Please enter your city address");
    } else {
        printError("cityErr", "");
        cityErr = false;
    }
    //Validate State
    if (state == "") {
        printError("stateErr", "Please enter your state");
    } else {
        var regex = /(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])/;
        if (regex.test(state) === false) {
            printError("stateErr", "Please enter your state as abbreviation ex.NY");
        } else {
            printError("stateErr", "");
            stateErr = false;
        }
    }
    // Validate address zipcode
    if (zipcode == "") {
        printError("zipcodeErr", "Please enter your zipcode");
    } else {
        var regex = /^[1-9]\d{4}$/;
        if (regex.test(zipcode) === false) {
            printError("zipcodeErr", "Please enter a valid 5 digit zipcode");
        } else {
            printError("zipcodeErr", "");
            zipcodeErr = false;
        }
    }

    // Validate gender
    if (gender == "") {
        printError("genderErr", "Please select your gender");
    } else {
        printError("genderErr", "");
        genderErr = false;
    }
    // Validate Membership Plan
    if (plan == "Select") {
        printError("planErr", "Please select your desired plan");
    } else {
        printError("planErr", "");
        planErr = false;
    }

    


   
    // dont let it submit without checking for errors
    if ((nameErr || emailErr || addressErr || cityErr || stateErr || zipcodeErr || mobileErr || planErr || genderErr) == true) {
        return false;
    } else {
        // alertbox for info confirmation 
        var dataPreview = "Verify your membership form & click Ok: \n" +
            "Full Name: " + name + "\n" +
            "Email Address: " + email + "\n" +
            "Phone Number: " + mobile + "\n" +
            "Address: " + address + " " + city + "," + state + " " + zipcode + "\n" +
            "Gender: " + gender + "\n" +
            "Membership Plan: " + plan + "\n";
        if (goals.length) {
            dataPreview += "Fitness Goals: " + goals.join(", ");
        }
        alert(dataPreview);
    }
};//end of validator function

