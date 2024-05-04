const questionsDog = [
    "Ter conexões e atenções ativamente das pessoas com você e vice-versa",
    "Mais extrovertido e sociável, buscando constantemente interações e conexões",
    "Ser mais direto e expressivo em sua comunicação",
    "Tem uma busca considerável por validação e aprovação vinda de terceiros",
    "É um pouco mais dependente emocionalmente dos outros",
    "Se apresenta com mais zelo, sendo uma pessoa mais cautelosa e familiaridade",
    "Prefere ser mais propenso a compartilhar detalhes de sua vida nas redes sociais, buscando conexões e interações",
    "Busca Ativamente Feedback e validação de suas postagens e atividades nas redes sociais",
    "Passo bastante tempo navegando ou interagindo nas redes sociais",
    "Gosta de expressar suas opiniões de forma pública e direta nas redes sociais",
    "Sou mais suscetível à comparação social nas redes e acabo me equiparando aos outros",
    "Construo com facilidade e mantenho grandes redes de amigos e seguidores nas redes sociais"
];

const questionsCat = [
    "Sua independência é ser uma pessoa mais reservada",
    "Mais seletivo, e acaba preferindo interações mais discretas",
    "Ser mais sutil e reservado com suas falas",
    "Confia 100% em sua própria avaliação e autoestima",
    "Valoriza mais sua independência e autonomia",
    "Se adapta mais facilmente a novas situações e ambientes",
    "Prefere manter certas informações privadas e compartilhar apenas o necessário",
    "Por ser uma pessoa reservada, não depende tanto das opiniões dos outros",
    "Limito meu tempo online e priorizo outras atividades offline",
    "Prefere ser mais cauteloso e seletivo em relação ao o que compartilha, evitando conflitos online",
    "Sou menos preocupado com a competição e mais focado no meu próprio bem-estar",
    "Foco mais em relacionamentos próximos e de qualidade, preferindo interações offline"
];

let currentQuestionIndex = 0;
let dogVotes = 0;
let catVotes = 0;

function renderQuestions() {
    const questionContainerDog = document.getElementById('questionDog');
    const questionContainerCat = document.getElementById('questionCat');
    
    questionContainerDog.innerText = questionsDog[currentQuestionIndex];
    questionContainerCat.innerText = questionsCat[currentQuestionIndex];
    
    questionContainerDog.style.fontSize = "20px"; // Ajuste o tamanho da fonte conforme necessário
    questionContainerCat.style.fontSize = "20px"; // Ajuste o tamanho da fonte conforme necessário
}

function choose(animal) {
    if (animal === 'dog') {
        dogVotes++;
    } else if (animal === 'cat') {
        catVotes++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questionsDog.length) {
        renderQuestions();
    } else {
        showResult();
    }
}

function showResult() {
    const totalVotes = dogVotes + catVotes;
    const dogPercentage = (dogVotes / totalVotes) * 100;
    const catPercentage = (catVotes / totalVotes) * 100;
    document.getElementById('result').innerHTML = `Você é um(a):<br> Cachorro: ${dogPercentage.toFixed(2)}%<br> Gato: ${catPercentage.toFixed(2)}%`;
}

renderQuestions();
