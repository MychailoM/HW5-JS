let drinksName;
const drinks = 'Чай'

switch (drinks) {
    case "Кава":
        drinksName = "Кава";
        break;

    case "Чай":
        drinksName = "Чай";
        break;

    case "Сік":
        drinksName = "Сік";
        break;

    default:
        console.log('Ви не ввели назви напою!');
}

alert(drinksName);


function check() {
    const fielText = parseFloat(document.getElementById("text_one").value);
    let mounth;

    switch (fielText) {
    case "понеділок":
        mounth = "робочий";
        break;

    case "вівторок":
        mounth = "робочий";
        break;

    case "середа":
        mounth = "робочий";
        break;

    case "четвер":
        mounth = "робочий";
        break;

    case "п'ятниця" || "пятниця":
        mounth = "робочий";
        break;

    case "субота":
        mounth = "вихідний";
        break;

    case "неділя":
        mounth = "вихідний";
            break;
        
        default:
            alert("введіть день тижня");
    }
    alert(`${fielNumOne} ${mounth} день`);
}


function checkNum() {
    const fielNumOne = parseFloat(document.getElementById("number_one").value);
    let season;

    switch (fielNumOne) {
    case 12:
        season = "winter";
        break;

    case 1:
        season = "winter";
        break;

    case 2:
        season = "winter";
        break;

    case 3:
        season = "spring";
        break;

    case 4:
        season = "spring";
        break;

    case 5:
        season = "spring";
        break;

    case 6:
        season = "summer";
        break;

    case 7:
        season = "summer";
        break;

    case 8:
        season = "summer";
        break;

    case 3:
        season = "autumn";
        break;

    case 4:
        season = "autumn";
        break;

    case 5:
        season = "autumn";
            break;
        
        default:
            alert("введіть число від 1 до 12 і ми визначимо яка це пора року");
    }
    alert(season);
    
}

function checkTextTwo() {
    const color = parseFloat(document.getElementById("textTwo").value);
    

    if (color === 'червоний') {
        alert('стій');
    } else if (color === 'жовтий') {
        alert('чекай');
    } else {
        alert('йди');
    }
}




