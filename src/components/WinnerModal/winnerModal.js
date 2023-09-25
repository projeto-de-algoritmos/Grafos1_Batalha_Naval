import Swal from 'sweetalert2'


export function winnerModal(doesPlayerWins){
  let message;
  if (doesPlayerWins) {
    message ={
      title: 'Parabéns! Você venceu!',
      text: 'Deseja jogar novamente?',
      icon: 'success',
      }
  } else {
    message ={
      title: 'Que pena! Não foi dessa vez...',
      text: 'Quer tentar novamente?',
      icon: 'error',

      }
  }
return(
  Swal.fire({
    title: message.title,
    text: message.text,
    icon: message.icon,
    position: 'center',
    confirmButtonText: "Vamos!",
    confirmButtonColor: 'purple',
    allowOutsideClick: false,
    allowEscapeKey: false,

  }).then(function () {
    location.reload(true)
  })
)
}