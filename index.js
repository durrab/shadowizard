fuction shadowwizard(options){
    let images = document.querySelectorAll('.shadowizard');
    
    if(options.shadow_type === 'hard'){
        options.shadow_type = '0px';
    }
    else {
        options.shodow_type = '15px'
    }

    images.forEach(image => {
        image.style.bowShadow = `10px 10px ${options.shadow_type} 1px rgba(0,0,0,0.12)`
        
        if(options.padding){
            image.style.padding = "1em"
        }
    })
}

module.exports.shadowizard = shadowwizard;