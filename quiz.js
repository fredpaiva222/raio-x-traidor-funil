// RAIO-X DO TRAIDOR — Quiz Logic

var QUESTIONS = [
  {
    id: 1,
    text: "Nos últimos tempos, como você descreveria o comportamento dele com o celular?",
    options: [
      { l:"A", t:"Normal, sem nenhuma mudança que eu tenha notado.", v:0 },
      { l:"B", t:"Ele virou um pouco mais cuidadoso, mas nada que me preocupe muito.", v:1 },
      { l:"C", t:"Ele protege muito mais o celular do que antes. Já vi ele mudar de tela quando cheguei perto.", v:2 },
      { l:"D", t:"O celular nunca sai do bolso ou fica sempre virado pra baixo. Se eu chego perto, ele trava na hora.", v:3 }
    ]
  },
  {
    id: 2,
    text: "Como está a frequência e a qualidade da intimidade entre vocês ultimamente?",
    options: [
      { l:"A", t:"Está normal, sem grandes mudanças.", v:0 },
      { l:"B", t:"Diminuiu um pouco, mas a rotina explica.", v:1 },
      { l:"C", t:"Caiu bastante. Ele parece distante mesmo quando estamos juntos.", v:2 },
      { l:"D", t:"Praticamente inexistente. Quando acontece, parece mecânico ou ele evita.", v:3 }
    ]
  },
  {
    id: 3,
    text: "Ele tem saído mais do que o normal? Viagens, happy hours, compromissos de última hora?",
    options: [
      { l:"A", t:"Não. A rotina dele é a mesma de sempre.", v:0 },
      { l:"B", t:"Teve algumas saídas a mais, mas tudo com justificativa razoável.", v:1 },
      { l:"C", t:"Sim. Saídas mais frequentes e os horários de retorno mudaram.", v:2 },
      { l:"D", t:"Sim, e as justificativas ficam cada vez mais vagas ou contraditórias.", v:3 }
    ]
  },
  {
    id: 4,
    text: "Como você descreveria a disposição emocional dele com você nos últimos meses?",
    options: [
      { l:"A", t:"Presente, carinhoso e atencioso como sempre.", v:0 },
      { l:"B", t:"Um pouco mais distraído, mas nada que acenda alertas.", v:1 },
      { l:"C", t:"Distante, irritável em momentos sem sentido, ou ausente emocionalmente.", v:2 },
      { l:"D", t:"Frio, desinteressado, e às vezes age como se eu fosse um incômodo.", v:3 }
    ]
  },
  {
    id: 5,
    text: "Você já encontrou ou percebeu algo suspeito — mensagens, fotos, perfis estranhos?",
    options: [
      { l:"A", t:"Nunca encontrei nada suspeito.", v:0 },
      { l:"B", t:"Uma vez achei algo, mas ele explicou e fez sentido.", v:1 },
      { l:"C", t:"Já encontrei coisas que me deixaram desconfortável, mas sem certeza.", v:2 },
      { l:"D", t:"Sim. Já vi prints, conversas ou apps que não fazem parte da nossa relação.", v:3 }
    ]
  },
  {
    id: 6,
    text: "Como é a presença dele nas redes sociais em relação a você e ao relacionamento?",
    options: [
      { l:"A", t:"Normal. Posta sobre nós quando faz sentido.", v:0 },
      { l:"B", t:"Parou de nos marcar juntos, mas não é um problema grande.", v:1 },
      { l:"C", t:"Praticamente apagou qualquer sinal de que temos um relacionamento online.", v:2 },
      { l:"D", t:"Age como se fosse solteiro nas redes. Sem fotos nossas, interage com outras pessoas de forma estranha.", v:3 }
    ]
  },
  {
    id: 7,
    text: "Quando você faz perguntas sobre onde ele estava ou com quem, qual é a reação dele?",
    options: [
      { l:"A", t:"Responde normalmente, sem nervosismo.", v:0 },
      { l:"B", t:"Às vezes fica um pouco na defensiva, mas acaba explicando.", v:1 },
      { l:"C", t:"Fica irritado ou acusa você de paranoia com frequência.", v:2 },
      { l:"D", t:"Explode, parte para o ataque ou simplesmente muda de assunto sem responder.", v:3 }
    ]
  },
  {
    id: 8,
    text: "Ele mudou a aparência ou os hábitos de cuidado pessoal de forma notável?",
    options: [
      { l:"A", t:"Não. Continua do mesmo jeito de sempre.", v:0 },
      { l:"B", t:"Houve uma melhora pequena, talvez por motivação do trabalho.", v:1 },
      { l:"C", t:"Sim. Começou a malhar, usar perfume diferente, se vestir melhor.", v:2 },
      { l:"D", t:"Mudança drástica e sem explicação. Cuida mais de si mesmo, mas não te inclui nisso.", v:3 }
    ]
  },
  {
    id: 9,
    text: "Vocês têm conversas de qualidade? Ele te conta coisas da vida dele?",
    options: [
      { l:"A", t:"Sim. A comunicação entre nós é boa.", v:0 },
      { l:"B", t:"Um pouco menos do que antes, mas ainda conversamos.", v:1 },
      { l:"C", t:"As conversas ficaram superficiais. Ele não compartilha mais o que sente.", v:2 },
      { l:"D", t:"Ele é evasivo sobre praticamente tudo. Parece que esconde uma vida paralela.", v:3 }
    ]
  },
  {
    id: 10,
    text: "Qual é a sua sensação mais honesta sobre a situação hoje?",
    options: [
      { l:"A", t:"Estou tranquila. Acho que é só insegurança minha.", v:0 },
      { l:"B", t:"Tenho dúvidas, mas espero que não seja nada.", v:1 },
      { l:"C", t:"Minha intuição está gritando que algo está errado.", v:2 },
      { l:"D", t:"No fundo, acho que já sei a resposta. Só preciso de confirmação.", v:3 }
    ]
  }
];

var TIEBREAKER = {
  text: "Uma última pergunta. Você já chegou a confrontar ele diretamente sobre suspeitas de traição?",
  options: [
    { l:"A", t:"Não, nunca tive coragem ou motivo para isso.", v:0 },
    { l:"B", t:"Indiretamente, numa conversa geral sobre confiança.", v:1 },
    { l:"C", t:"Sim, uma vez. Ele negou com muita convicção.", v:2 },
    { l:"D", t:"Sim, e ele saiu do sério, virou o jogo contra mim ou simplesmente negou com raiva.", v:3 }
  ]
};

var SOCIALS = {
  3: {
    name: "Camila R.",
    loc: "São Paulo · SP",
    msg: "Quando ele começou a ter mais 'happy hours' e chegar depois das 23h, achei que era trabalho. O dossiê mostrou que ele tinha perfil ativo no Badoo atualizado toda semana. Confrontei e ele confessou."
  },
  6: {
    name: "Renata M.",
    loc: "Belo Horizonte · MG",
    msg: "Quando percebi que ele tinha apagado todas as nossas fotos do Instagram, senti que estava ficando louca. O relatório confirmou o que minha intuição já sabia há meses."
  },
  9: {
    name: "Juliana F.",
    loc: "Curitiba · PR",
    msg: "Quando ele parou de me contar coisas, senti que perdi meu melhor amigo. O quiz descreveu exatamente o padrão 'O Duplo'. Era assustador de preciso."
  }
};

var answers = {};
var currentQ = 0;
var totalQ = QUESTIONS.length;

function updateProgress(idx) {
  var pct = Math.round((idx / totalQ) * 100);
  var fill = document.getElementById('progressFill');
  var label = document.getElementById('progressLabel');
  if(fill) fill.style.width = pct + '%';
  if(label) label.textContent = 'SINAL ' + idx + ' DE ' + totalQ;
}

function renderQ(idx) {
  var area = document.getElementById('questionArea');
  var q = QUESTIONS[idx];

  var opts = q.options.map(function(o){
    return '<button class="quiz-option" onclick="selectAnswer(' + o.v + ',' + idx + ',this)">' +
      '<span class="q-letter">' + o.l + '</span>' +
      '<span class="q-text">' + o.t + '</span>' +
      '<iconify-icon icon="lucide:check" class="q-check" width="16"></iconify-icon>' +
    '</button>';
  }).join('');

  var num = (idx + 1 < 10 ? '0' : '') + (idx + 1);

  area.innerHTML =
    '<div class="quiz-card" id="qCard">' +
      '<div class="quiz-q-num">' + num + '</div>' +
      '<div class="quiz-question">' + q.text + '</div>' +
      opts +
    '</div>';
}

function renderTiebreaker() {
  var area = document.getElementById('questionArea');
  var q = TIEBREAKER;

  var opts = q.options.map(function(o){
    return '<button class="quiz-option" onclick="selectTiebreaker(' + o.v + ',this)">' +
      '<span class="q-letter">' + o.l + '</span>' +
      '<span class="q-text">' + o.t + '</span>' +
      '<iconify-icon icon="lucide:check" class="q-check" width="16"></iconify-icon>' +
    '</button>';
  }).join('');

  area.innerHTML =
    '<div style="text-align:center;margin-bottom:16px;">' +
      '<span class="section-label">Desempate</span>' +
    '</div>' +
    '<div class="quiz-card" id="qCard">' +
      '<div class="quiz-q-num">TB</div>' +
      '<div class="quiz-question">' + q.text + '</div>' +
      opts +
    '</div>';
}

function renderSocial(socialData, cb) {
  var overlay = document.createElement('div');
  overlay.className = 'social-overlay';
  overlay.id = 'socialOverlay';

  overlay.innerHTML =
    '<div class="social-card">' +
      '<p class="section-label text-center mb-16">Depoimento verificado</p>' +
      '<div class="wpp-card">' +
        '<div class="wpp-header">' +
          '<div class="wpp-avatar">' + socialData.name[0] + '</div>' +
          '<div>' +
            '<div class="wpp-name">' + socialData.name + '</div>' +
            '<div class="wpp-loc">' + socialData.loc + '</div>' +
          '</div>' +
        '</div>' +
        '<div class="wpp-bubble">"' + socialData.msg + '"</div>' +
      '</div>' +
      '<button onclick="dismissSocial()" class="btn-cta" style="margin-top:20px;">Continuar análise →</button>' +
    '</div>';

  document.body.appendChild(overlay);

  var t = setTimeout(function(){ dismissSocial(); cb(); }, 4000);

  overlay.querySelector('button').addEventListener('click', function(){
    clearTimeout(t);
  });

  window.__socialCb = cb;
}

function dismissSocial() {
  var el = document.getElementById('socialOverlay');
  if(el) el.remove();
  if(window.__socialCb) {
    var fn = window.__socialCb;
    window.__socialCb = null;
    fn();
  }
}

var GAMIF_TOASTS = {
  2: { num: '73.218', text: 'mulheres também sentiram aquele aperto quando ele protegeu o celular.' },
  5: { num: '61.447', text: 'mulheres responderam que ele vira o assunto quando questionado.' },
  8: { num: '89.332', text: 'mulheres também já se perguntaram se o problema era elas.' }
};

function showGamifToast(qNum) {
  var data = GAMIF_TOASTS[qNum];
  if(!data) return;
  var el = document.createElement('div');
  el.className = 'gamif-toast';
  el.id = 'gamifToast';
  el.innerHTML = '<div class="gamif-toast-num">' + data.num + '</div><div class="gamif-toast-text">' + data.text + '</div>';
  document.body.appendChild(el);
  setTimeout(function(){
    el.classList.add('hiding');
    setTimeout(function(){ if(el.parentNode) el.parentNode.removeChild(el); }, 400);
  }, 3500);
}

function selectAnswer(value, qIdx, btn) {
  // Disable all options
  var opts = document.querySelectorAll('.quiz-option');
  opts.forEach(function(o){ o.style.pointerEvents = 'none'; });

  btn.classList.add('selected');
  answers[qIdx] = value;
  localStorage.setItem('q' + (qIdx + 1), value);

  var qNum = qIdx + 1;
  showGamifToast(qNum);

  var card = document.getElementById('qCard');
  var next = qIdx + 1;

  setTimeout(function(){
    card.style.opacity = '0';
    card.style.transform = 'translateY(-16px)';
    card.style.transition = 'opacity 0.3s, transform 0.3s';

    setTimeout(function(){
      updateProgress(next);

      if(SOCIALS[next] && next < totalQ) {
        renderSocial(SOCIALS[next], function(){
          if(next < totalQ) {
            renderQ(next);
            currentQ = next;
          } else {
            checkTiebreaker();
          }
        });
        return;
      }

      if(next < totalQ) {
        renderQ(next);
        currentQ = next;
      } else {
        checkTiebreaker();
      }
    }, 320);
  }, 300);
}

function selectTiebreaker(value, btn) {
  var opts = document.querySelectorAll('.quiz-option');
  opts.forEach(function(o){ o.style.pointerEvents = 'none'; });
  btn.classList.add('selected');
  localStorage.setItem('qtb', value);

  var card = document.getElementById('qCard');
  setTimeout(function(){
    card.style.opacity = '0';
    card.style.transition = 'opacity 0.3s';
    setTimeout(function(){
      window.location.href = 'processando.html';
    }, 350);
  }, 350);
}

function checkTiebreaker() {
  var score = 0;
  for(var i = 0; i < totalQ; i++){
    var v = parseInt(localStorage.getItem('q' + (i+1)));
    if(!isNaN(v)) score += v;
  }

  updateProgress(totalQ);
  var fill = document.getElementById('progressFill');
  if(fill) fill.style.width = '100%';

  if(score >= 16) {
    renderTiebreaker();
  } else {
    window.location.href = 'processando.html';
  }
}

// INIT
(function(){
  updateProgress(0);
  renderQ(0);
})();
