let count = 0;

function increaseCount() {
    count++; //Increment by 1
    displayCount();
    checkCountValue();
}

function resetFollowers() {
    let count = 0
    alert("Your instagram followers has been reset to 0!")
    document.getElementById('countDisplay').innerHTML=count;
}

function displayCount()  {
    document.getElementById('countDisplay').innerHTML=count;
}

function checkCountValue() {
    if(count === 10) {
        alert("Your instagram post gained 10 followers!")
    } else if (count === 20) {
        alert("Your instagram post gained 20 followers")
    }
}

