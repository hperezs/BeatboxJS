/**
 * DONE: Create a keydown listener to track what keys are hit
 * DONE: Create a Beat class to represent the beat object in utils.js
 * DONE: Complete triggerBeat() to play upon the press of a,s,d,f,g,h,j,k,l
 * DONE: Button pt1: Initialize color and element values
 * DONE: Button pt2: Set button color upon initialization | Initialize button in beats["65"]
 * DONE: Button pt3: Complete select function to set the color and shadow of button upon pressing
 * DONE: Button pt4: Call the select() function upon key press ;)
 * TODO: Button pt5: Add transition for button selection
 * TODO: Button pt6: Remove the button style upon transition end | Use deselect function
 * TODO: Complete all button instances with the following colors
 * TODO: Add background image
 * First 3: #00fffe
 * 4,5,6,7: #FF00FF
 * 8, 9: #FFFFFF
 */

let beats = {
    "65": {
        beat: new Beat("./assets/looperman-l-0026789-0000412-omars-omar-rhodes-chords-c-1.wav"),
        button: new Button("#00fffe", 65)
    },
    "83": {
        beat: new Beat("./assets/looperman-l-0261782-0070807-mrdman-lazy-e-piano-loop.wav"),
        button: new Button("#00fffe", 83)
    },
    "68": {
        beat: new Beat("./assets/looperman-l-0772625-0053358-xskullkemox-deep-organ-bass-01.wav"),
        button: new Button("#00fffe", 68)
    },
    "70": {
        beat: new Beat("./assets/looperman-l-0698182-0066917-trapkid-hard-trap-beat.wav"),
        button: new Button("#FF00FF", 70)
    },
    "71": {
        beat: new Beat("./assets/looperman-l-0817298-0074472-enzotic-fat-808-bass.wav"),
        button: new Button("#FF00FF", 71)
    },
    "72": {
        beat: new Beat("./assets/looperman-l-1179260-0081916-azzykoofficial-melbourne-bounce-vocal-lead.wav"),
        button: new Button("#FF00FF", 72)
    },
    "74": {
        beat: new Beat("./assets/looperman-l-2177725-0205507-go-get-it-boom-trap-loop.wav"),
        button: new Button("#FF00FF", 74)
    },
    "75": {
        beat: new Beat("./assets/looperman-l-2926977-0205514-16-bar-drum-loop-wout-808s.wav"),
        button: new Button("#FFFFFF", 75)
    },
    "76": {
        beat: new Beat("./assets/looperman-l-0916852-0064230-reed1415-nasty-dubstep-riser-low-pass.wav"),
        button: new Button("#FFFFFF", 76)
    }
}

/**
 * Function to play the beat upon a press of key
 * HINT: use the keyCode
 */
triggerBeat = (event) => {
    if(event.keyCode in beats){
        beats[event.keyCode].beat.playAudio();
        beats[event.keyCode].button.select();
    }
}

/**
 * Keydown listener to fire triggerBeat function
 * HINT: Log the keyCode of the key
 */
document.addEventListener('keydown', triggerBeat)