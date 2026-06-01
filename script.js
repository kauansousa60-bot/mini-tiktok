let likes = 0;

const videos = [
  "videos/video1.mp4",
  "videos/video2.mp4",
  "videos/video3.mp4"
];

let videoAtual = 0;

const player = document.getElementById("videoPlayer");

function curtir() {
  likes++;
  document.getElementById("likes").innerText = likes;
}

function comentar() {
  let comentario = prompt("Digite seu comentário:");

  if (comentario) {
    alert("Comentário enviado!");
  }
}

function compartilhar() {
  navigator.clipboard.writeText(window.location.href);

  alert("Link copiado!");
}

function proximoVideo() {

  videoAtual++;

  if(videoAtual >= videos.length){
    videoAtual = 0;
  }

  player.src = videos[videoAtual];
  player.play();
}