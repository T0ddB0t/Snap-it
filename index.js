async function app() {
    const webcamElement = document.getElementsByTagName("video")[0];
    const model = await mobilenet.load();
    
    const webcam = await tf.data.webcam(webcamElement);
    const captureButton = document.getElementsByTagName("button")[0];

    captureButton.onclick = async () =>{
        const img = await webcam.capture();

        const predictions = await model.classify(img);
        img.dispose();
        console.log(predictions);
        
    };
}
app();
