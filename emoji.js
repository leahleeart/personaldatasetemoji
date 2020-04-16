
//Hi! the first step for me was to just put all the emoji in.
//Size of an emoji = frequency

//question 1: I want to use this image as the mouse cursor. https://imgur.com/ggk0MmU.
//would cursor() tag work?

//question 2: How can I add stroke to text? hope I can make a gradient stroke.
//i've been trying to find tutorials. they're all about CSS.

//I want to change text(emoji) when they're clicked. Right now I have emojis as texts.
//Would it work better if I have emojis as images? or objects?

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  textAlign(CENTER, CENTER);

}

function draw(){

cursor('https://imgur.com/ggk0MmU');
stroke(255, 150, 250);
strokeWeight(6);
line(400, 200, 500, 300);

stroke(255, 150, 250);
strokeWeight(6);
line(400, 200, 500, 200);

textSize(48);
text('👏', 200, 200);

textSize(44);
text('🥰', 300, 200);

textSize(112);
text('❤️', 400, 200);

textSize(16);
text('👌', 500, 200);

textSize(68);
text('😍', 600, 200);

textSize(28);
text('🎉', 700, 200);

textSize(52);
text('😭', 800, 200);

textSize(72);
text('😷', 900, 200);

textSize(16);
text('🤬', 200, 300);

textSize(12);
text('🤷', 300, 300);

textSize(15);
text('🙏', 300, 300);

textSize(48);
text('✨', 400, 300);

textSize(40);
text('🔥', 500, 300);

textSize(20);
text('👩‍💻', 600, 300);

textSize(44);
text('💐', 700, 300);

textSize(32);
text('⭐', 800, 300);

textSize(88);
text('👍', 900, 300);

textSize(52);
text('🦠', 200, 400);

textSize(52);
text('💡', 300, 400);

textSize(28);
text('🥺', 400, 400);
}
