

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/oOW0lOvRk/model.json',modelReady);
p1=""
p2=""

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'jpeg',
    jpeg_quality: 90
 });
 Webcam.attach( '#camera' );


function take_snapshot(){
    Webcam.snap( function(data_uri) {
        // display results in page
        document.getElementById('result').innerHTML = 
         '<img id="img1" src="'+data_uri+'"/>';
    } );
};
function modelReady(){
    console.log("modelReady");
};
function speak(){
    var synth=window.speechSynthesis;
    var speakData="First prediction is"+p1+"and the second prediction is"+p2;
    var speakOBJ=new SpeechSynthesisUtterance(speakData);
    synth.speak(speakOBJ);
}
function check(){
    img1=document.getElementById("img1");
    classifier.classify(img1,gotResult)
    
}