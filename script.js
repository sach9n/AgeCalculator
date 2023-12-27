function calculateAge(birthdate) {
  var currentDate = new Date();

  var birthdate = new Date(birthdate);

  var timeDiff = currentDate - birthdate;

  var years = new Date(timeDiff).getUTCFullYear() - 1970;
  var months = new Date(timeDiff).getUTCMonth();
  var days = new Date(timeDiff).getUTCDate() - 1;
  return { years: years, months: months, days: days };
}


let btn = document.getElementById("button");

btn.addEventListener('click', function () {
  let year = document.getElementById('year').value;
  let month = document.getElementById('month').value;
  let day = document.getElementById('day').value;
  let yearnumber = document.querySelector(".yearNumber");
  let monthnumber = document.querySelector(".monthNumber");
  let daynumber = document.querySelector(".dayNumber");
 
 
  
  // console.log(year,month,day)
  if (year === "" && month === "" && day === "") {
    document.querySelectorAll(".para1").forEach((element) => {
      element.style.display = "block";
    })
    document.querySelectorAll(".InputHead").forEach((element) => {
      element.style.color = "red";
    })
    return;
  }else if (year === "" || isNaN(year) || year < 0) {
    document.getElementById('parayear').style.display = "block";
    return
  }else if (month === "" || isNaN(month) || month < 1 || month > 12) {
    document.getElementById('paramonth').style.display = "block";
    
  }else if (day === "" || isNaN(day) || day < 1 || day > 31) {
    document.getElementById('paraday').style.display = "block";
    return;
  }
    



let age = calculateAge(year,month,day);
  
  yearnumber.textContent = age.years;
  monthnumber.textContent = age.months;
  daynumber.textContent = age.days;

})
