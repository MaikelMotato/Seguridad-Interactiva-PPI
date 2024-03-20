let currentQuestion = 0;
let feedbackText = '';

function checkAnswer(answer) {
  if (answer === 'correct') {
    feedbackText = '¡Respuesta correcta! Utilizar casco y arnés de seguridad es fundamental al trabajar en altura.';
  } else {
    feedbackText = 'Respuesta incorrecta. Recuerda que es importante utilizar casco y arnés de seguridad al trabajar en altura.';
  }
  document.getElementById('feedback').innerText = feedbackText;
  document.getElementById('next-button').style.display = 'block';
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion === 1) {
    document.getElementById('question').innerText = '¿Qué debes hacer antes de operar una maquinaria pesada?';
    document.getElementsByClassName('choice')[0].innerText = 'a) Leer el manual de operación';
    document.getElementsByClassName('choice')[1].innerText = 'b) Ponerse los auriculares';
    document.getElementsByClassName('choice')[2].innerText = 'c) Ignorar las instrucciones';
    document.getElementById('feedback').innerText = '';
    document.getElementById('next-button').style.display = 'none';
  }
  // Aquí continuarías con más preguntas y respuestas
} 