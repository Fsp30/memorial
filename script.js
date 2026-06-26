// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
  updateActiveLinks();
});

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');

hamburger.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});

document.addEventListener('click', (e) => {
  if (!sidebar.contains(e.target) && !hamburger.contains(e.target)) {
    sidebar.classList.remove('open');
  }
});

// ===== ACTIVE LINK TRACKING =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');
const sideLinks = document.querySelectorAll('.slink');

function updateActiveLinks() {
  let current = '';
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top <= 100) current = sec.id;
  });

  navLinks.forEach(a => {
    a.classList.toggle('active', a.dataset.section === current);
  });
  sideLinks.forEach(a => {
    const href = a.getAttribute('href').replace('#', '');
    a.classList.toggle('active', href === current);
  });
}

// ===== SIDEBAR LINKS CLOSE ON MOBILE =====
sideLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 900) {
      sidebar.classList.remove('open');
    }
  });
});

// ===== MODAL SYSTEM =====
const modalData = {
  objetivo: {
    title: 'O objetivo deste memorial',
    body: `
      <p>O objetivo deste memorial de deu a partir de uma necessidade acadêmica da sua matéria professor Marcus, entrentanto quando comecei a pensar na sua estrutura e desenvolvimento técnivo me recordei da finalidade do seminário. E me repreendi com a seguinte afirmação: "Isso é um retrato meu, não uma prova técnica, aqui é o Filipe e como se deu o (Lipe/Firmino - (Apelidos atribuidos ao longo do tempo)) e não o desenvolvedor, engenheiro, estudante Filipe de Paula Costa."</p>

      <p>Como o senhor deixou a entrega do memorial de forma aberta eu tomei a liberdade de ser pouco convecional, algo que dificilmente eu sou, e me permitir realizar a entrega por meio de uma pagina WEB, ao longo dos textos talvez fique claro o porque. Outra abordagem que considerei para tal entrega foi a gravação de um arquivo de aúdio ou multiplos arquivos menores, porém não gostaria de submete-lo a este sofrimento por possiveis longas horas.</p>
      
      <p>Este documento contendo as tecnologias HTML, CSS e JavaScript não teve auxilio de IA para ser gerado, o então peço perdão por possiveís usos incorretos ou repetivos de palavras e a possivél escrita errada de algumas, já que o editor de código (VsCode e Zed) não tem auxilio para a escrita de linguagem de textos "corridos".</p>
    `
  },
  metodologia: {
    title: 'Como eu me vejo',
    body: `
      <p>Vejo-me como alguém no processo de pós-treinamento (termo utilizado no treinamento de modelos de IA), em que agora posso tomar decisões por conta própria sobre quais caminhos desejo seguir ou quem quero me tornar. Sendo sincero, hoje me sinto bem comigo mesmo como pessoa, o que, para mim, é o mais importante. Apesar da competência técnica ou acadêmica, acredito fielmente que uma das maiores realizações possíveis é olhar para si mesmo e sentir alívio e felicidade por quem você é como pessoa (como Ser/Alma). Talvez eu não esteja tão bem com o meu momento de vida, mas estou bem com quem sou, e meu sorriso nasce a partir disso.</p>

      <p>Sou uma pessoa que talvez tente enxergar as coisas da vida de forma cética até demais. Em uma ordem de predominância nas ações, mesmo nas decisões mais importantes da minha vida, diria que tomo cerca de 85% delas com base na razão e 15% no emocional. Acredito, inclusive, que esse índice de racionalidade já foi bem maior (e talvez sua manutenção não tivesse permitido que eu estivesse em um relacionamento amoroso hoje, o que acredito que teria sido uma escolha equivocada. Nem consigo me imaginar em um cenário como esse).</p>

      <p>Algo que talvez seja importante deixar claro aqui é por que nunca me enxerguei como alguém "fora da curva" academicamente ou no trabalho, considerando minha idade e meu estágio de carreira. Sempre tive receio de ser impactado pelo fenômeno do "gênio infantil de localidade", pois percebi que muitas pessoas que, assim como eu, se destacaram academicamente no período escolar acabaram desenvolvendo soberba e arrogância, em um tom de superioridade que, para mim, difere de quem tento ser e de quem gostaria de me tornar.</p>

    `
  },
  fio: {
    title: 'Por que HTML?',
    body: `
      <p>Dentre todas as formas possíveis, por que uma página web?</p>

      <p>Talvez, ao receber um link de um repositório do GitHub e se deparar com uma página do usuário Fsp30, o senhor se espante um pouco. Porém, aqui há algo mais profundo do que uma simples descontração a partir da entrega de um trabalho.</p>

      <p>Eu nunca fui um cara apaixonado por máquinas, como muitos engenheiros ou desenvolvedores que, com cinco anos de idade, já mexiam em configurações de computadores. Mas há algo na computação que me faz bem: o seu ceticismo com tudo. As coisas funcionam por um motivo, e esse motivo não é superficial. Adoro o fato de trabalharmos com uma base matemática reduzida (base 2). No fim, é tudo zeros ou uns — ou ambos ao mesmo tempo, caso a computação quântica entre no debate. Porém, o fato de que, em algum ponto, ainda existe um sim ou não é o que me encanta, já que, na minha visão, não é possível determinar verdades absolutas na natureza humana.</p>

      <p>E, como felizmente (ou infelizmente) atuo além do estudo na área da computação, acabei achando adequado fazer algo com o nível mais raso e básico da web: HTML, CSS e JS. Graças ao bom Deus, não utilizo mais HTML e CSS profissionalmente, pois estou mais ligado às partes de backend, infraestrutura, engenharia e BusinessOps. Mas achei interessante relembrar as origens com uma aplicação básica (devem ter mais de 2000 linhas de código — foi sofrido escrever isso sem IA rsrs).</p>

      <p>E por que não utilizar as tecnologias do meu trabalho (TypeScript, Node, Bun e etc.)? Porque estou cansado, e já estou bem satisfeito de lidar com erros de type safety no TS ou requisições mal processadas pelo Node.</p>

    `
  }
};

const overlay = document.getElementById('modalOverlay');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');

function openModal(key) {
  const data = modalData[key];
  if (!data) return;
  modalTitle.textContent = data.title;
  modalBody.innerHTML = data.body;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

// Delega o clique no documento — captura qualquer botão .card-read-more
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.card-read-more');
  if (btn) {
    const card = btn.closest('[data-modal]');
    if (card) openModal(card.dataset.modal);
    return;
  }
  if (e.target === overlay) closeModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// ===== SCROLL REVEAL =====
const revealEls = document.querySelectorAll(
  '.section-header, .text-block, .projects-grid, .vision-pillars, .pull-quote, .timeline-item'
  // intro-card removido daqui — não aplica opacity:0 neles para não bloquear cliques
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
      entry.target.style.opacity = '1';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

revealEls.forEach(el => {
  el.style.opacity = '0';
  el.style.animationPlayState = 'paused';
  observer.observe(el);
});


// ===== SNAKE GAME =====
(function () {
  const canvas = document.getElementById('snake-canvas');
  const ctx = canvas.getContext('2d');
  const scoreEl = document.getElementById('snake-score');
  const statusEl = document.getElementById('snake-status');

  const CELL = 14;
  const COLS = canvas.width / CELL; 
  const ROWS = canvas.height / CELL; 

  const COL_BG = '#0a0a08';
  const COL_SNAKE = '#EF9F27';
  const COL_HEAD = '#ffffff';
  const COL_FOOD = '#1D9E75';
  const COL_GRID = 'rgba(239,159,39,0.04)';
  const COL_DEAD = '#D85A30';

  let snake, dir, nextDir, food, score, running, dead, loopId;

  function rand(max) { return Math.floor(Math.random() * max); }

  function spawnFood() {
    let pos;
    do {
      pos = { x: rand(COLS), y: rand(ROWS) };
    } while (snake.some(s => s.x === pos.x && s.y === pos.y));
    return pos;
  }

  function init() {
    snake = [{ x: 7, y: 7 }, { x: 6, y: 7 }, { x: 5, y: 7 }];
    dir = { x: 1, y: 0 };
    nextDir = { x: 1, y: 0 };
    food = spawnFood();
    score = 0;
    running = false;
    dead = false;
    scoreEl.textContent = 'score: 0';
    statusEl.textContent = 'pressione ↑ para iniciar';
    draw();
  }

  function start() {
    if (running) return;
    running = true;
    dead = false;
    statusEl.textContent = 'wsad ou ↑↓←→';
    loop();
  }

  function loop() {
    loopId = setTimeout(() => {
      step();
      if (running) loop();
    }, 130);
  }

  function step() {
    dir = { ...nextDir };
    const head = { x: snake[0].x + dir.x, y: snake[0].y + dir.y };

    // Wall collision
    if (head.x < 0 || head.x >= COLS || head.y < 0 || head.y >= ROWS) {
      return gameOver();
    }
    // Self collision
    if (snake.some(s => s.x === head.x && s.y === head.y)) {
      return gameOver();
    }

    snake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
      score++;
      scoreEl.textContent = `score: ${score}`;
      food = spawnFood();
    } else {
      snake.pop();
    }

    draw();
  }

  function gameOver() {
    running = false;
    dead = true;
    clearTimeout(loopId);
    statusEl.textContent = 'game over — clique p/ reiniciar';
    draw();
  }

  function draw() {
    // Background
    ctx.fillStyle = COL_BG;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Grid
    ctx.strokeStyle = COL_GRID;
    ctx.lineWidth = 0.5;
    for (let x = 0; x <= COLS; x++) {
      ctx.beginPath();
      ctx.moveTo(x * CELL, 0);
      ctx.lineTo(x * CELL, canvas.height);
      ctx.stroke();
    }
    for (let y = 0; y <= ROWS; y++) {
      ctx.beginPath();
      ctx.moveTo(0, y * CELL);
      ctx.lineTo(canvas.width, y * CELL);
      ctx.stroke();
    }

    // Food — pulsing dot
    ctx.fillStyle = COL_FOOD;
    ctx.beginPath();
    ctx.arc(
      food.x * CELL + CELL / 2,
      food.y * CELL + CELL / 2,
      CELL / 2 - 2, 0, Math.PI * 2
    );
    ctx.fill();

    // Snake
    snake.forEach((seg, i) => {
      const isHead = i === 0;
      ctx.fillStyle = dead ? COL_DEAD : (isHead ? COL_HEAD : COL_SNAKE);
      const pad = isHead ? 1 : 2;
      ctx.fillRect(
        seg.x * CELL + pad,
        seg.y * CELL + pad,
        CELL - pad * 2,
        CELL - pad * 2
      );
    });

    // Score overlay on game over
    if (dead) {
      ctx.fillStyle = 'rgba(10,10,8,0.6)';
      ctx.fillRect(0, 60, canvas.width, 60);
      ctx.fillStyle = COL_DEAD;
      ctx.font = 'bold 13px Courier New';
      ctx.textAlign = 'center';
      ctx.fillText('GAME OVER', canvas.width / 2, 86);
      ctx.fillStyle = 'rgba(240,237,230,0.5)';
      ctx.font = '10px Courier New';
      ctx.fillText(`score: ${score}`, canvas.width / 2, 104);
    }
  }

  // Controls
  const keyMap = {
    ArrowUp: { x: 0, y: -1 }, w: { x: 0, y: -1 }, W: { x: 0, y: -1 },
    ArrowDown: { x: 0, y: 1 }, s: { x: 0, y: 1 }, S: { x: 0, y: 1 },
    ArrowLeft: { x: -1, y: 0 }, a: { x: -1, y: 0 }, A: { x: -1, y: 0 },
    ArrowRight: { x: 1, y: 0 }, d: { x: 1, y: 0 }, D: { x: 1, y: 0 },
  };

  document.addEventListener('keydown', (e) => {
    const widget = document.getElementById('snake-widget');
    if (!widget || widget.style.display === 'none') return;

    const mapped = keyMap[e.key];
    if (!mapped) return;

    // Prevent page scroll only when game is active
    if (running) e.preventDefault();

    // Prevent 180° reversal
    if (mapped.x !== 0 && mapped.x === -dir.x) return;
    if (mapped.y !== 0 && mapped.y === -dir.y) return;

    nextDir = mapped;
    if (!running && !dead) start();
  });

  canvas.addEventListener('click', () => {
    if (dead) { init(); return; }
    if (!running) start();
  });

  // Touch swipe support
  let touchStart = null;
  canvas.addEventListener('touchstart', (e) => {
    touchStart = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  }, { passive: true });
  canvas.addEventListener('touchend', (e) => {
    if (!touchStart) return;
    const dx = e.changedTouches[0].clientX - touchStart.x;
    const dy = e.changedTouches[0].clientY - touchStart.y;
    if (Math.abs(dx) > Math.abs(dy)) {
      nextDir = dx > 0 ? { x: 1, y: 0 } : { x: -1, y: 0 };
    } else {
      nextDir = dy > 0 ? { x: 0, y: 1 } : { x: 0, y: -1 };
    }
    if (!running && !dead) start();
    touchStart = null;
  }, { passive: true });

  init();
})();