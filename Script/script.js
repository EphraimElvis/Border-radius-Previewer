const topLeft = document.querySelector('.top-left');
const topRight = document.querySelector('.top-right');
const bottomLeft = document.querySelector('.bottom-left');
const bottomRight = document.querySelector('.bottom-right');

const mainContainer = document.querySelector('.box');
const prevValue = '';

const activeField = {
    selectedField: false
}

topLeft.setAttribute('value', '0'); 
topRight.setAttribute('value', '0');
bottomRight.setAttribute('value', '0');
bottomLeft.setAttribute('value', '0');

//set size of all border-radius
const setBorderRadius = (obj, borderElement, textInput) => {
    
    let num = Number(obj).toFixed();
    
    // console.log('textfiled ', num);
    if (isNaN(obj)) {
        textInput.value = '0' ;
    }
    
    //check if starts with a zero
    if (textInput.value.length > 1) {
         textInput.value = Number(obj).toFixed();
    }
    
    if (mainContainer.style.borderRadius === '' || mainContainer.style.borderRadius === '0') {
        mainContainer.style.borderRadius = `${obj}px`;

        topLeft.setAttribute('value', num); 
        topRight.setAttribute('value', num);
        bottomRight.setAttribute('value', num);
        bottomLeft.setAttribute('value', num);
    }
    //mainContainer.style.borderRadius = `${obj}px`;
    if(borderElement == 'top-left') {
        mainContainer.style.borderTopLeftRadius = `${obj}px`;
    } else if (borderElement == 'top-right') {
        mainContainer.style.borderTopRightRadius = `${obj}px`;
    } else if (borderElement == 'bottom-left') {
        mainContainer.style.borderBottomLeftRadius = `${obj}px`;
    } else if (borderElement == 'bottom-right') {
        mainContainer.style.borderBottomRightRadius = `${obj}px`;
    }
    
}

topLeft.addEventListener('keydown', (e) => {
    const timer = setTimeout(()=>{
        setBorderRadius(topLeft.value, topLeft.className, topLeft);
        
     },1);
    
    // if (topLeft.focus()) {
    //     alert();
    // }
    
});

topRight.addEventListener('keydown', (e) => {
    
    const timer = setTimeout(()=>{
        setBorderRadius(topRight.value, topRight.className, topRight);
    },1)
    

    // if (topRight.value > 0) {
    //     alert();
    //     clearTimeout(timer);
    // }

});

bottomLeft.addEventListener('keydown', (e)=> {

    const timer = setTimeout(() => {
        setBorderRadius(bottomLeft.value, bottomLeft.className, bottomLeft);
    },1);

    // if (bottomLeft.value > 0) {
    //     alert();
    //     clearTimeout(timer);
    // }

});

bottomRight.addEventListener('keydown', (e)=> {
    const timer  = setTimeout(() => {
        setBorderRadius(bottomRight.value, bottomRight.className, bottomRight) ;
    },1);

    // if (bottomRight.value > 0) {
    //     alert();
    //     clearTimeout(timer);
    // }
});
