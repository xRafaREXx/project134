difference = 0;
rightWristX = 0;
leftWristX = 0;

  function setup() {
  /*Crear la captura del video */
  video = createCapture(VIDEO);
  /*Tamaño del video 550 ancho y 500 de alto */
  video.size(550, 500);

  /*Crear Lienzo 550 ancho y 550 de alto */
  canvas = createCanvas(550, 550);
  /*Dar posición al lienzo 560, 150 */
  canvas.position(560, 150);
  /*Escribir el nombre de la biblioteca ml5.poseNet  */
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  /*Imprimir 'PoseNet Is Initialized!'*/
  console.log('PoseNet Is Initialized!');
}

/*En el segundo parámetro pondremos la función "gotPoses" que obtendrá las poses o coordenadas */
function gotPoses(results)
{
  /*Si la longitud de los resultados es mayor que 0  */
  if(results.length > 0)
    {}
}
