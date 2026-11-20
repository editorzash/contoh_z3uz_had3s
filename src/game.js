/**
 * ZEUS VS HADES - GODS OF WAR™ (Pragmatic Play 1:1 HTML5 Rebuild - vs15godsofwar)
 * Uses 100% authentic extracted sprites, textures, fonts, and payline mechanics
 */

(() => {
  'use strict';

  // =========================================================================
  // 1. SYMBOL DEFINITIONS & OFFICIAL PAYTABLE (15 Paylines on 5x5 Grid)
  // =========================================================================
  const SYMBOLS = {
    S01: {
      id: 'S01',
      name: { zeus: 'TEMPLE OF OLYMPUS (SCATTER)', hades: 'TEMPLE OF HADES (SCATTER)' },
      img: {
        zeus: 'assets/sprites/S01_zeus_scatter/s_S01_zeus_scatter.png',
        hades: 'assets/sprites/S01_hades_scatter/s_S01_hades_scatter.png'
      },
      blur: {
        zeus: 'assets/sprites/zeha_zeus_blurs/s_S01_zeus_scatter.png',
        hades: 'assets/sprites/zeha_hades_blurs/s_S01_hades_scatter.png'
      },
      isScatter: true,
      desc: 'Appears on reels 1, 3, and 5 in the base game. Hit 3 SCATTER symbols to trigger 10 FREE SPINS with STICKY EXPANDING WILDS!'
    },
    S02: {
      id: 'S02',
      name: { zeus: 'WILD', hades: 'WILD' },
      img: {
        zeus: 'assets/sprites/S02_zeus_wild/s_S02_zeus_wild.png',
        hades: 'assets/sprites/S02_hades_wild/s_S02_hades_wild.png'
      },
      blur: {
        zeus: 'assets/sprites/zeha_zeus_blurs/s_S02_zeus_wild.png',
        hades: 'assets/sprites/zeha_hades_blurs/s_S02_hades_wild.png'
      },
      isWild: true,
      pays: { 5: 20.0, 4: 10.0, 3: 2.0 },
      desc: 'Substitutes for all symbols except SCATTER. Appears on all reels.'
    },
    S13: {
      id: 'S13',
      name: { zeus: 'EXPANDING WILD (ZEUS)', hades: 'EXPANDING WILD (HADES)' },
      img: {
        zeus: 'assets/sprites/S13_BB_zeus/s_S13_BB_zeus.png',
        hades: 'assets/sprites/S13_BB_hades/s_S13_BB_hades.png'
      },
      blur: {
        zeus: 'assets/sprites/zeha_zeus_blurs/s_S02_zeus_wild.png',
        hades: 'assets/sprites/zeha_hades_blurs/s_S02_hades_wild.png'
      },
      isWild: true,
      isExpandingWild: true,
      pays: { 5: 20.0, 4: 10.0, 3: 2.0 },
      desc: 'Expands vertically to fill the entire reel and triggers a Zeus vs Hades Duel for a random multiplier from 2x up to 100x!'
    },
    S03: {
      id: 'S03',
      name: { zeus: 'ZEUS', hades: 'HADES' },
      img: {
        zeus: 'assets/sprites/S03_zeus_h1_zeus/s_S03_zeus_h1_zeus.png',
        hades: 'assets/sprites/S03_hades_h1_hades/s_S03_hades_h1_hades.png'
      },
      blur: {
        zeus: 'assets/sprites/zeha_zeus_blurs/s_S03_zeus_h1_zeus.png',
        hades: 'assets/sprites/zeha_hades_blurs/s_S03_hades_h1_hades.png'
      },
      pays: { 5: 20.0, 4: 10.0, 3: 2.0, 2: 0.2 }
    },
    S04: {
      id: 'S04',
      name: { zeus: 'PEGASUS', hades: 'CERBERUS' },
      img: {
        zeus: 'assets/sprites/S04_zeus_h2_pegasus/s_S04_zeus_h2_pegasus.png',
        hades: 'assets/sprites/S04_hades_h2_cerberus/s_S04_hades_h2_cerberus.png'
      },
      blur: {
        zeus: 'assets/sprites/zeha_zeus_blurs/s_S04_zeus_h2_pegasus.png',
        hades: 'assets/sprites/zeha_hades_blurs/s_S04_hades_h2_cerberus.png'
      },
      pays: { 5: 10.0, 4: 5.0, 3: 1.0 }
    },
    S05: {
      id: 'S05',
      name: { zeus: 'EAGLE OF OLYMPUS', hades: 'PHOENIX OF HADES' },
      img: {
        zeus: 'assets/sprites/S05_zeus_h3_eagle/s_S05_zeus_h3_eagle.png',
        hades: 'assets/sprites/S05_hades_h3_phoenix/s_S05_hades_h3_phoenix.png'
      },
      blur: {
        zeus: 'assets/sprites/zeha_zeus_blurs/s_S05_zeus_h3_eagle.png',
        hades: 'assets/sprites/zeha_hades_blurs/s_S05_hades_h3_phoenix.png'
      },
      pays: { 5: 10.0, 4: 5.0, 3: 1.0 }
    },
    S06: {
      id: 'S06',
      name: { zeus: 'OLYMPUS HELMET', hades: 'FLAMING HELMET' },
      img: {
        zeus: 'assets/sprites/S06_zeus_h4_helmet/s_S06_zeus_h4_helmet.png',
        hades: 'assets/sprites/S06_hades_h4_flamingHelmet/s_S06_hades_h4_flamingHelmet.png'
      },
      blur: {
        zeus: 'assets/sprites/zeha_zeus_blurs/s_S06_zeus_h4_helmet.png',
        hades: 'assets/sprites/zeha_hades_blurs/s_S06_hades_h4_flamingHelmet.png'
      },
      pays: { 5: 5.0, 4: 2.5, 3: 0.5 }
    },
    S07: {
      id: 'S07',
      name: { zeus: 'GOLDEN CHALICE', hades: 'CHALICE OF FIRE' },
      img: {
        zeus: 'assets/sprites/S07_zeus_h5_goblet/s_S07_zeus_h5_goblet.png',
        hades: 'assets/sprites/S07_hades_h5_goblet/s_S07_hades_h5_goblet.png'
      },
      blur: {
        zeus: 'assets/sprites/zeha_zeus_blurs/s_S07_zeus_h5_goblet.png',
        hades: 'assets/sprites/zeha_hades_blurs/s_S07_hades_h5_goblet.png'
      },
      pays: { 5: 5.0, 4: 2.5, 3: 0.5 }
    },
    S08: {
      id: 'S08',
      name: { zeus: 'ACE (A)', hades: 'ACE (A)' },
      img: {
        zeus: 'assets/sprites/S08_zeus_royal_A/s_S08_zeus_royal_A.png',
        hades: 'assets/sprites/S08_hades_royal_A/s_S08_hades_royal_A.png'
      },
      blur: {
        zeus: 'assets/sprites/zeha_zeus_blurs/s_S08_zeus_royal_A.png',
        hades: 'assets/sprites/zeha_hades_blurs/s_S08_hades_royal_A.png'
      },
      pays: { 5: 1.0, 4: 0.4, 3: 0.1 }
    },
    S09: {
      id: 'S09',
      name: { zeus: 'KING (K)', hades: 'KING (K)' },
      img: {
        zeus: 'assets/sprites/S09_zeus_royal_K/s_S09_zeus_royal_K.png',
        hades: 'assets/sprites/S09_hades_royal_K/s_S09_hades_royal_K.png'
      },
      blur: {
        zeus: 'assets/sprites/zeha_zeus_blurs/s_S09_zeus_royal_K.png',
        hades: 'assets/sprites/zeha_hades_blurs/s_S09_hades_royal_K.png'
      },
      pays: { 5: 1.0, 4: 0.4, 3: 0.1 }
    },
    S10: {
      id: 'S10',
      name: { zeus: 'QUEEN (Q)', hades: 'QUEEN (Q)' },
      img: {
        zeus: 'assets/sprites/S10_zeus_royal_Q/s_S10_zeus_royal_Q.png',
        hades: 'assets/sprites/S10_hades_royal_Q/s_S10_hades_royal_Q.png'
      },
      blur: {
        zeus: 'assets/sprites/zeha_zeus_blurs/s_S10_zeus_royal_Q.png',
        hades: 'assets/sprites/zeha_hades_blurs/s_S10_hades_royal_Q.png'
      },
      pays: { 5: 1.0, 4: 0.4, 3: 0.1 }
    },
    S11: {
      id: 'S11',
      name: { zeus: 'JACK (J)', hades: 'JACK (J)' },
      img: {
        zeus: 'assets/sprites/S11_zeus_royal_J/s_S11_zeus_royal_J.png',
        hades: 'assets/sprites/S11_hades_royal_J/s_S11_hades_royal_J.png'
      },
      blur: {
        zeus: 'assets/sprites/zeha_zeus_blurs/s_S11_zeus_royal_J.png',
        hades: 'assets/sprites/zeha_hades_blurs/s_S11_hades_royal_J.png'
      },
      pays: { 5: 1.0, 4: 0.4, 3: 0.1 }
    },
    S12: {
      id: 'S12',
      name: { zeus: 'TEN (10)', hades: 'TEN (10)' },
      img: {
        zeus: 'assets/sprites/S12_zeus_royal_10/s_S12_zeus_royal_10.png',
        hades: 'assets/sprites/S12_hades_royal_10/s_S12_hades_royal_10.png'
      },
      blur: {
        zeus: 'assets/sprites/zeha_zeus_blurs/s_S12_zeus_royal_10.png',
        hades: 'assets/sprites/zeha_hades_blurs/s_S12_hades_royal_10.png'
      },
      pays: { 5: 1.0, 4: 0.4, 3: 0.1 }
    }
  };

  // Full-Reel Expanding Wild textures (227x896)
  const EXPANDED_WILD_ART = {
    zeus: {
      zeus: 'assets/sprites/S02_zeus_wild_big_zeusGM/s_S02_zeus_wild_big_zeusGM.png',
      hades: 'assets/sprites/S02_hades_wild_big_zeusGM/s_S02_hades_wild_big_zeusGM.png'
    },
    hades: {
      hades: 'assets/sprites/S02_hades_wild_big_hadesGM/s_S02_hades_wild_big_hadesGM.png',
      zeus: 'assets/sprites/S02_zeus_wild_big_hadesGM/s_S02_zeus_wild_big_hadesGM.png'
    }
  };

  const PAYING_IDS = ['S03', 'S04', 'S05', 'S06', 'S07', 'S08', 'S09', 'S10', 'S11', 'S12'];
  const WILD_MULTIPLIER_POOL = [2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 20, 25, 50, 100];

  // Official 15 Paylines on the 5x5 Grid (matching s_zeus_vs_hades_5x5_15.png)
  const PAYLINES_15 = [
    [0, 0, 0, 0, 0], // Line 1
    [1, 1, 1, 1, 1], // Line 2
    [2, 2, 2, 2, 2], // Line 3
    [3, 3, 3, 3, 3], // Line 4
    [4, 4, 4, 4, 4], // Line 5
    [0, 1, 2, 3, 4], // Line 6
    [4, 3, 2, 1, 0], // Line 7
    [0, 1, 0, 1, 0], // Line 8
    [1, 0, 1, 0, 1], // Line 9
    [1, 2, 1, 2, 1], // Line 10
    [2, 1, 2, 1, 2], // Line 11
    [2, 3, 2, 3, 2], // Line 12
    [3, 2, 3, 2, 3], // Line 13
    [3, 4, 3, 4, 3], // Line 14
    [4, 3, 4, 3, 4]  // Line 15
  ];

  const PAYLINE_COLORS = [
    '#00e5ff', '#ffd600', '#ff4081', '#76ff03', '#ff6d00',
    '#e040fb', '#18ffff', '#ffeb3b', '#ff5252', '#69f0ae',
    '#40c4ff', '#ffab40', '#b388ff', '#ffff00', '#ff1744'
  ];

  const NUM_REELS = 5;
  const NUM_ROWS = 5;
  const COL_W = 182;
  const ROW_H = 146;

  // Initial 5x5 showcase board
  const INITIAL_GRID = [
    ['S03', 'S08', 'S04', 'S11', 'S06'],
    ['S09', 'S03', 'S13', 'S10', 'S07'],
    ['S05', 'S10', 'S03', 'S08', 'S01'],
    ['S11', 'S06', 'S12', 'S04', 'S09'],
    ['S07', 'S12', 'S05', 'S09', 'S03']
  ];

  const BET_LEVELS = [0.10, 0.20, 0.50, 1.00, 2.00, 4.00, 6.00, 10.00, 20.00, 40.00, 60.00, 100.00];

  // =========================================================================
  // 2. GAME STATE
  // =========================================================================
  const state = {
    mode: 'zeus', // 'zeus' (Olympus) | 'hades' (Hades)
    credit: 100000.00,
    betIndex: 4, // $2.00
    displayCoins: false,
    isSpinning: false,
    stopRequested: false,
    turboMode: false,
    soundEnabled: true,
    autoplayRemaining: 0,
    inFreeSpins: false,
    isSuperFreeSpins: false,
    freeSpinsLeft: 0,
    freeSpinsTotalWin: 0,
    currentSpinWin: 0,
    forcedFeature: null, // 'expand_duel' | 'freespins' | 'super_fs' | 'maxwin'
    pendingBuyType: null, // 'standard' | 'super'
    grid: [],
    // expandedWilds[reelIdx] = null or { multiplier: number, winner: 'zeus'|'hades', sticky: boolean }
    expandedWilds: [null, null, null, null, null],
    paytablePage: 0,
    manifestData: null
  };

  function getBet() {
    return BET_LEVELS[state.betIndex];
  }

  function getStandardBuyMultiplier() {
    return state.mode === 'zeus' ? 75 : 150;
  }

  function formatMoney(val) {
    if (state.displayCoins) {
      const coinVal = Math.round((val / getBet()) * 15);
      return `${coinVal.toLocaleString('en-US')} COINS`;
    }
    return '$' + val.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  function getSymImg(symId, blurred = false) {
    const def = SYMBOLS[symId] || SYMBOLS.S08;
    const table = blurred ? def.blur : def.img;
    return table[state.mode] || table.zeus;
  }

  function getSymName(symId) {
    const def = SYMBOLS[symId] || SYMBOLS.S08;
    return def.name[state.mode] || def.name.zeus;
  }

  // =========================================================================
  // 3. WEB AUDIO SYNTHESIS & SOUND ENGINE
  // =========================================================================
  class SoundEngine {
    constructor() {
      this.ctx = null;
    }

    init() {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) this.ctx = new AudioCtx();
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    playTone(freq, duration = 0.12, type = 'sine', gainVal = 0.14, slideFreq = null) {
      if (!state.soundEnabled) return;
      this.init();
      if (!this.ctx) return;
      try {
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, now);
        if (slideFreq) {
          osc.frequency.exponentialRampToValueAtTime(slideFreq, now + duration);
        }
        gain.gain.setValueAtTime(gainVal, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + duration);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + duration);
      } catch (_) {}
    }

    playClick() {
      this.playTone(640, 0.06, 'triangle', 0.12, 920);
    }

    playModeSwitch(mode) {
      if (mode === 'zeus') {
        this.playTone(320, 0.28, 'sawtooth', 0.15, 960);
      } else {
        this.playTone(220, 0.32, 'sawtooth', 0.18, 95);
      }
    }

    playSpinStart() {
      this.playTone(260, 0.16, 'sine', 0.14, 520);
    }

    playReelStop(reelIdx) {
      this.playTone(170 + reelIdx * 24, 0.08, 'triangle', 0.18, 95);
    }

    playWildExpand() {
      this.playTone(180, 0.35, 'sawtooth', 0.18, 720);
      setTimeout(() => this.playTone(540, 0.25, 'triangle', 0.18, 1080), 160);
    }

    playDuelClash() {
      [240, 480, 360, 720].forEach((f, i) => {
        setTimeout(() => this.playTone(f, 0.11, 'sawtooth', 0.16, f * 1.35), i * 85);
      });
    }

    playWinChord(mult = 1) {
      const base = state.mode === 'zeus' ? 440 : 370;
      [1, 1.25, 1.5, 2].forEach((m, idx) => {
        setTimeout(() => this.playTone(base * m, 0.24, 'triangle', Math.min(0.22, 0.13 + mult * 0.002)), idx * 60);
      });
    }

    playScatterHit(count) {
      const f = 520 + count * 140;
      this.playTone(f, 0.28, 'sine', 0.2, f * 1.4);
    }

    playBigWinFanfare() {
      const notes = [392, 493.88, 587.33, 783.99, 987.77];
      notes.forEach((n, idx) => {
        setTimeout(() => this.playTone(n, 0.32, 'triangle', 0.18), idx * 110);
      });
    }
  }

  const sfx = new SoundEngine();

  // =========================================================================
  // 4. RESPONSIVE 16:9 STAGE SCALING & AMBIENT EFFECTS
  // =========================================================================
  function updateStageScale() {
    const stage = document.getElementById('stage');
    if (!stage) return;
    const scaleX = window.innerWidth / 1778;
    const scaleY = window.innerHeight / 1000;
    const scale = Math.min(scaleX, scaleY);
    stage.style.transform = `translate(-50%, -50%) scale(${scale})`;
  }

  window.addEventListener('resize', updateStageScale);

  function renderAmbientParticles() {
    const container = document.getElementById('bg-fx-layer');
    if (!container) return;
    container.innerHTML = '';

    const count = 8;
    for (let i = 0; i < count; i++) {
      const img = document.createElement('img');
      img.className = 'ambient-particle';
      if (state.mode === 'zeus') {
        img.src = i % 2 === 0
          ? 'assets/sprites/zeha_banner_zeus_zeha_banner_zeus/s_blue_cloud_02_.png'
          : 'assets/sprites/zeha_basegame_zeus_zeha_basegame_zeus4/s_red_fog.png';
        img.style.width = `${260 + (i % 3) * 110}px`;
      } else {
        img.src = i % 2 === 0
          ? 'assets/sprites/zeha_basegame_hades_zeha_basegame_hades3/s_red_fire_spark_00004.png'
          : 'assets/sprites/zeha_basegame_hades_zeha_basegame_hades3/s_red_fire_parti_loop_00004.png';
        img.style.width = `${110 + (i % 3) * 45}px`;
      }
      img.style.left = `${(i * 230) % 1620}px`;
      img.style.top = `${120 + (i * 115) % 720}px`;
      img.style.animationDuration = `${7 + (i % 5) * 2}s`;
      img.style.animationDelay = `${-i * 1.3}s`;
      container.appendChild(img);
    }
  }

  // =========================================================================
  // 5. DUAL MODE SWITCHING (OLYMPUS <-> HADES)
  // =========================================================================
  function setGameMode(newMode, withFlash = true) {
    if (state.isSpinning || state.inFreeSpins) return;
    if (newMode !== 'zeus' && newMode !== 'hades') return;

    const changed = state.mode !== newMode;
    state.mode = newMode;
    document.body.setAttribute('data-mode', newMode);

    if (changed && withFlash) {
      sfx.playModeSwitch(newMode);
      const overlay = document.getElementById('mode-transition-overlay');
      const img = document.getElementById('mode-transition-img');
      img.src = newMode === 'zeus'
        ? 'assets/sprites/zeha_transition_zeus_zeha_transition_zeus/s_Transition_00007.png'
        : 'assets/sprites/zeha_transition_gm_zeha_transition_gm6/s_red_bkg_glow_hades.png';
      overlay.classList.remove('hidden');
      setTimeout(() => overlay.classList.add('hidden'), 650);
    }

    // Update Intro mode cards
    document.getElementById('intro-choose-zeus').classList.toggle('active', newMode === 'zeus');
    document.getElementById('intro-choose-hades').classList.toggle('active', newMode === 'hades');

    // Update Right-side Mode Switcher buttons
    document.getElementById('btn-mode-zeus').classList.toggle('active', newMode === 'zeus');
    document.getElementById('btn-mode-hades').classList.toggle('active', newMode === 'hades');

    // Update 5th Volatility Bolt (4/5 High for Olympus, 5/5 Very High for Hades)
    const boltSrc = newMode === 'hades'
      ? 'assets/sprites/volatility/s_lightning_enabled.png'
      : 'assets/sprites/volatility/s_lightning_disabled.png';
    document.getElementById('intro-vol-bolt-5').src = boltSrc;
    document.getElementById('hud-vol-bolt-5').src = boltSrc;

    // Update Buy Feature Icons
    document.getElementById('buy-std-icon').src = getSymImg('S01');
    document.getElementById('buy-super-icon').src = getSymImg('S13');

    syncVisualThemeLayers();
    renderAmbientParticles();
    renderFullGrid();
    updateHudDisplay();
  }

  function syncVisualThemeLayers() {
    const isZeus = state.mode === 'zeus';
    const isFS = state.inFreeSpins;

    document.getElementById('game-bg-zeus-base').classList.toggle('active', isZeus && !isFS);
    document.getElementById('game-bg-zeus-free').classList.toggle('active', isZeus && isFS);
    document.getElementById('game-bg-hades-base').classList.toggle('active', !isZeus && !isFS);
    document.getElementById('game-bg-hades-free').classList.toggle('active', !isZeus && isFS);

    document.getElementById('reel-backdrop-zeus-base').classList.toggle('active', isZeus && !isFS);
    document.getElementById('reel-backdrop-zeus-free').classList.toggle('active', isZeus && isFS);
    document.getElementById('reel-backdrop-hades-base').classList.toggle('active', !isZeus && !isFS);
    document.getElementById('reel-backdrop-hades-free').classList.toggle('active', !isZeus && isFS);

    document.getElementById('reel-dividers-zeus').classList.toggle('active', isZeus);
    document.getElementById('reel-dividers-hades').classList.toggle('active', !isZeus);

    document.getElementById('reel-frame-zeus').classList.toggle('active', isZeus);
    document.getElementById('reel-frame-hades').classList.toggle('active', !isZeus);
  }

  // =========================================================================
  // 6. 5x5 REEL GRID RENDERING & EXPANDING WILD OVERLAYS
  // =========================================================================
  function cloneGrid(g) {
    return g.map(col => col.slice());
  }

  function renderFullGrid(blurred = false) {
    const container = document.getElementById('reels-container');
    if (!container) return;
    container.innerHTML = '';

    for (let r = 0; r < NUM_REELS; r++) {
      const colEl = document.createElement('div');
      colEl.className = 'reel-col';
      colEl.dataset.reel = r;

      for (let row = 0; row < NUM_ROWS; row++) {
        const symId = state.grid[r][row];
        const cell = document.createElement('div');
        cell.className = `symbol-cell sym-${symId}`;
        cell.dataset.reel = r;
        cell.dataset.row = row;
        cell.dataset.sym = symId;
        cell.style.top = `${row * ROW_H}px`;

        const img = document.createElement('img');
        img.className = 'tile-img';
        img.src = getSymImg(symId, blurred);
        img.alt = getSymName(symId);
        cell.appendChild(img);

        cell.addEventListener('click', (e) => {
          e.stopPropagation();
          if (!state.isSpinning) showSymbolCallout(symId, r, row);
        });

        colEl.appendChild(cell);
      }

      // Render Full-Reel Expanding Wild Overlay if present on this reel
      const ew = state.expandedWilds[r];
      if (ew) {
        colEl.appendChild(createExpandedWildElement(r, ew));
      }

      container.appendChild(colEl);
    }
  }

  function createExpandedWildElement(reelIdx, ew) {
    const wrap = document.createElement('div');
    wrap.className = `expanded-wild-overlay ${ew.winner === 'hades' ? 'hades-won' : 'zeus-won'} ${ew.dueling ? 'dueling' : ''}`;
    wrap.dataset.reel = reelIdx;

    const artImg = document.createElement('img');
    artImg.className = 'ew-full-art';
    artImg.src = EXPANDED_WILD_ART[state.mode][ew.winner];
    artImg.alt = 'Expanding Wild';
    wrap.appendChild(artImg);

    if (ew.dueling) {
      const flash = document.createElement('div');
      flash.className = 'ew-duel-flash';
      wrap.appendChild(flash);
    }

    const topLabel = document.createElement('div');
    topLabel.className = 'ew-wild-top-label';
    topLabel.textContent = 'WILD';
    wrap.appendChild(topLabel);

    if (ew.sticky || state.inFreeSpins) {
      const stickyTag = document.createElement('div');
      stickyTag.className = 'ew-sticky-tag';
      stickyTag.textContent = 'STICKY WILD';
      wrap.appendChild(stickyTag);
    }

    const badge = document.createElement('div');
    badge.className = 'ew-mult-badge';
    badge.innerHTML = `
      <div class="ew-mult-val">${ew.dueling ? '⚔️' : ew.multiplier + 'x'}</div>
      <div class="ew-winner-caption">${ew.dueling ? 'ZEUS VS HADES' : (ew.winner === 'zeus' ? 'ZEUS VICTORY' : 'HADES VICTORY')}</div>
    `;
    wrap.appendChild(badge);

    return wrap;
  }

  function showSymbolCallout(symId, reelIdx, rowIdx) {
    sfx.playClick();
    const callout = document.getElementById('symbol-callout');
    const imgEl = document.getElementById('callout-img');
    const textEl = document.getElementById('callout-text');
    const def = SYMBOLS[symId];
    if (!def) return;

    imgEl.src = getSymImg(symId, false);
    const bet = getBet();
    if (def.pays) {
      const lines = Object.entries(def.pays)
        .sort((a, b) => Number(b[0]) - Number(a[0]))
        .map(([cnt, mult]) => `${cnt}x  ${formatMoney(bet * mult)}`);
      textEl.textContent = `${getSymName(symId)}\n${lines.join('\n')}`;
    } else {
      textEl.textContent = `${getSymName(symId)}\n${def.desc}`;
    }

    const leftPx = Math.min(600, Math.max(12, reelIdx * COL_W - 20));
    const topPx = Math.min(560, Math.max(12, rowIdx * ROW_H));
    callout.style.left = `${leftPx}px`;
    callout.style.top = `${topPx}px`;
    callout.classList.remove('hidden');
  }

  function hideSymbolCallout() {
    const callout = document.getElementById('symbol-callout');
    if (callout) callout.classList.add('hidden');
  }

  // =========================================================================
  // 7. BOARD GENERATION & FORCED FEATURE SCENARIOS
  // =========================================================================
  function pickRandomPayingSymbol() {
    // Weighted toward Royals, with higher high-symbol density in Hades mode
    const pool = state.mode === 'hades'
      ? ['S03', 'S04', 'S05', 'S06', 'S07', 'S08', 'S08', 'S09', 'S09', 'S10', 'S10', 'S11', 'S11', 'S12', 'S12']
      : ['S03', 'S04', 'S05', 'S06', 'S06', 'S07', 'S07', 'S08', 'S08', 'S09', 'S09', 'S10', 'S10', 'S11', 'S11', 'S12', 'S12'];
    return pool[Math.floor(Math.random() * pool.length)];
  }

  function pickRandomMultiplier(highBias = false) {
    if (highBias) {
      const highPool = [10, 12, 15, 20, 25, 50, 100];
      return highPool[Math.floor(Math.random() * highPool.length)];
    }
    const weights = [2, 2, 2, 3, 3, 3, 4, 4, 5, 5, 6, 7, 8, 9, 10, 12, 15, 20, 25, 50, 100];
    return weights[Math.floor(Math.random() * weights.length)];
  }

  function generateSpinGrid(forcedType) {
    const newGrid = [];
    for (let r = 0; r < NUM_REELS; r++) {
      const col = [];
      for (let row = 0; row < NUM_ROWS; row++) {
        let sym = pickRandomPayingSymbol();
        // Natural 1x1 Wild chance
        if (Math.random() < 0.04) sym = 'S02';
        // Natural Expanding Wild (S13) chance if reel doesn't already have sticky wild
        if (!state.expandedWilds[r] && !col.includes('S13')) {
          const ewChance = state.inFreeSpins ? 0.055 : (state.mode === 'zeus' ? 0.045 : 0.035);
          if (Math.random() < ewChance) sym = 'S13';
        }
        // Natural Scatter (S01) on reels 0, 2, 4 in Base Game
        if (!state.inFreeSpins && (r === 0 || r === 2 || r === 4) && !col.includes('S01') && !col.includes('S13')) {
          if (Math.random() < 0.045) sym = 'S01';
        }
        col.push(sym);
      }
      newGrid.push(col);
    }

    // Super Free Spins guarantee: On first spin of Super FS, force at least 1 Expanding Wild
    if (state.inFreeSpins && state.isSuperFreeSpins && state.expandedWilds.every(w => w === null)) {
      const targetReel = [1, 2, 3][Math.floor(Math.random() * 3)];
      newGrid[targetReel][2] = 'S13';
    }

    // Apply forced demo / buy scenarios
    if (forcedType === 'expand_duel') {
      newGrid[1][2] = 'S13';
      newGrid[3][1] = 'S13';
      newGrid[0][1] = 'S03';
      newGrid[2][1] = 'S03';
      newGrid[4][1] = 'S03';
    } else if (forcedType === 'freespins' || forcedType === 'super_fs') {
      // Remove any S13 on scatter reels 0, 2, 4 so 3 Temple Scatters land cleanly
      for (const r of [0, 2, 4]) {
        for (let row = 0; row < NUM_ROWS; row++) {
          if (newGrid[r][row] === 'S13' || newGrid[r][row] === 'S01') {
            newGrid[r][row] = pickRandomPayingSymbol();
          }
        }
      }
      newGrid[0][1] = 'S01';
      newGrid[2][2] = 'S01';
      newGrid[4][3] = 'S01';
      if (forcedType === 'super_fs') {
        state.isSuperFreeSpins = true;
      }
    } else if (forcedType === 'maxwin') {
      for (let r = 0; r < NUM_REELS; r++) {
        newGrid[r][2] = 'S13';
      }
    }

    return newGrid;
  }

  // =========================================================================
  // 8. EXPANDING WILD DUEL ANIMATION & 15-PAYLINE EVALUATION
  // =========================================================================
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function processExpandingWildDuels(forcedType) {
    const newlyLandedReels = [];
    for (let r = 0; r < NUM_REELS; r++) {
      if (state.expandedWilds[r]) continue; // Already sticky from earlier Free Spin
      if (state.grid[r].includes('S13')) {
        newlyLandedReels.push(r);
      }
    }

    if (newlyLandedReels.length === 0) return;

    // 1. Expand all newly landed S13 reels and start Zeus vs Hades Duel
    sfx.playWildExpand();
    for (const r of newlyLandedReels) {
      const isMax = forcedType === 'maxwin';
      const mult = isMax ? 100 : pickRandomMultiplier(forcedType === 'expand_duel' || state.inFreeSpins);
      const winner = Math.random() < (state.mode === 'zeus' ? 0.65 : 0.35) ? 'zeus' : 'hades';
      state.expandedWilds[r] = {
        multiplier: mult,
        winner,
        sticky: state.inFreeSpins,
        dueling: true
      };
    }
    renderFullGrid(false);

    // 2. Play Duel clash effect
    sfx.playDuelClash();
    await sleep(state.turboMode ? 320 : 680);

    // 3. Reveal final Duel Multipliers
    for (const r of newlyLandedReels) {
      if (state.expandedWilds[r]) {
        state.expandedWilds[r].dueling = false;
      }
    }
    renderFullGrid(false);
    await sleep(state.turboMode ? 180 : 360);
  }

  function evaluate15Paylines() {
    const bet = getBet();
    const winningLines = [];
    let totalWin = 0;

    for (let lineIdx = 0; lineIdx < PAYLINES_15.length; lineIdx++) {
      const pattern = PAYLINES_15[lineIdx];
      const lineSyms = [];
      const lineWildMults = [];

      for (let r = 0; r < NUM_REELS; r++) {
        const row = pattern[r];
        if (state.expandedWilds[r]) {
          lineSyms.push('S02');
          lineWildMults.push(state.expandedWilds[r].multiplier);
        } else {
          const s = state.grid[r][row];
          if (s === 'S13') {
            lineSyms.push('S02');
          } else {
            lineSyms.push(s);
          }
        }
      }

      // First symbol cannot be Scatter
      if (lineSyms[0] === 'S01') continue;

      // Determine target paying symbol for this line
      let targetSym = 'S02';
      for (let r = 0; r < NUM_REELS; r++) {
        const s = lineSyms[r];
        if (s === 'S01') break;
        if (s !== 'S02') {
          targetSym = s;
          break;
        }
      }

      // Count consecutive matching symbols from reel 0
      let matchCount = 0;
      let wildMultSum = 0;
      for (let r = 0; r < NUM_REELS; r++) {
        const s = lineSyms[r];
        if (s === targetSym || s === 'S02') {
          matchCount++;
          if (state.expandedWilds[r]) {
            wildMultSum += state.expandedWilds[r].multiplier;
          }
        } else {
          break;
        }
      }

      const symDef = SYMBOLS[targetSym];
      if (!symDef || !symDef.pays) continue;
      const basePayRatio = symDef.pays[matchCount];
      if (!basePayRatio) continue;

      const appliedMultiplier = wildMultSum > 0 ? wildMultSum : 1;
      const lineWin = bet * basePayRatio * appliedMultiplier;

      totalWin += lineWin;
      winningLines.push({
        lineIdx,
        pattern,
        matchCount,
        targetSym,
        appliedMultiplier,
        lineWin
      });
    }

    // Cap at 15,000x Max Win
    const maxCap = bet * 15000;
    if (totalWin > maxCap) {
      totalWin = maxCap;
    }

    return { totalWin, winningLines };
  }

  function countScatters() {
    const positions = [];
    for (let r = 0; r < NUM_REELS; r++) {
      if (state.expandedWilds[r]) continue;
      for (let row = 0; row < NUM_ROWS; row++) {
        if (state.grid[r][row] === 'S01') {
          positions.push({ r, row });
        }
      }
    }
    return positions;
  }

  // =========================================================================
  // 9. PAYLINE SVG DRAWING & WIN PRESENTATION
  // =========================================================================
  function clearPaylinesOverlay() {
    const svg = document.getElementById('paylines-svg');
    if (svg) svg.innerHTML = '';
    document.querySelectorAll('.symbol-cell').forEach(el => {
      el.classList.remove('winning', 'dimmed');
    });
    document.querySelectorAll('.floating-win-pop').forEach(el => el.remove());
  }

  function highlightWinningPaylines(winningLines) {
    const svg = document.getElementById('paylines-svg');
    svg.innerHTML = '';

    const winningCoords = new Set();
    winningLines.forEach(wl => {
      for (let r = 0; r < wl.matchCount; r++) {
        winningCoords.add(`${r},${wl.pattern[r]}`);
      }
    });

    document.querySelectorAll('.symbol-cell').forEach(el => {
      const key = `${el.dataset.reel},${el.dataset.row}`;
      if (winningCoords.has(key)) {
        el.classList.add('winning');
        el.classList.remove('dimmed');
      } else {
        el.classList.add('dimmed');
      }
    });

    // Draw SVG polylines for each winning line
    winningLines.forEach((wl, idx) => {
      const pts = [];
      for (let r = 0; r < NUM_REELS; r++) {
        const cx = r * COL_W + COL_W / 2;
        const cy = wl.pattern[r] * ROW_H + ROW_H / 2;
        pts.push(`${cx},${cy}`);
      }
      const poly = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
      poly.setAttribute('points', pts.join(' '));
      poly.setAttribute('class', 'payline-path');
      poly.style.color = PAYLINE_COLORS[wl.lineIdx % PAYLINE_COLORS.length];
      poly.style.stroke = PAYLINE_COLORS[wl.lineIdx % PAYLINE_COLORS.length];
      svg.appendChild(poly);

      // Show floating payout pop on first 4 winning lines
      if (idx < 4) {
        const viewport = document.getElementById('reels-viewport');
        const pop = document.createElement('div');
        pop.className = 'floating-win-pop';
        const midR = Math.min(2, wl.matchCount - 1);
        pop.style.left = `${midR * COL_W + COL_W / 2}px`;
        pop.style.top = `${wl.pattern[midR] * ROW_H + ROW_H / 2}px`;
        pop.textContent = `${formatMoney(wl.lineWin)}${wl.appliedMultiplier > 1 ? ' (' + wl.appliedMultiplier + 'x)' : ''}`;
        viewport.appendChild(pop);
      }
    });
  }

  // =========================================================================
  // 10. SPIN EXECUTION LOOP & FREE SPINS LIFECYCLE
  // =========================================================================
  async function executeSpin() {
    if (state.isSpinning) {
      state.stopRequested = true;
      return;
    }

    hideSymbolCallout();
    clearPaylinesOverlay();

    const bet = getBet();
    if (!state.inFreeSpins) {
      if (state.credit < bet) {
        setBannerIdleMessage('INSUFFICIENT CREDIT — LOWER BET TO CONTINUE');
        state.autoplayRemaining = 0;
        updateAutoplayPill();
        return;
      }
      state.credit -= bet;
      // Clear non-sticky expanded wilds from previous base spin
      state.expandedWilds = [null, null, null, null, null];
    } else {
      state.freeSpinsLeft = Math.max(0, state.freeSpinsLeft - 1);
    }

    state.isSpinning = true;
    state.stopRequested = false;
    const activeForce = state.forcedFeature;
    state.forcedFeature = null;
    document.querySelectorAll('.demo-chip[data-force]').forEach(b => b.classList.remove('armed'));

    updateHudDisplay();
    setSpinButtonState(true);
    sfx.playSpinStart();

    if (!state.inFreeSpins) {
      setBannerIdleMessage(state.turboMode ? 'TURBO SPINNING...' : 'GOOD LUCK!');
    }

    // Show blurred spinning state on non-sticky reels
    renderFullGrid(true);

    const targetGrid = generateSpinGrid(activeForce);
    const spinDuration = state.turboMode ? 220 : 520;
    await sleep(spinDuration);

    state.grid = targetGrid;
    for (let r = 0; r < NUM_REELS; r++) {
      if (!state.stopRequested && !state.turboMode) {
        await sleep(65);
      }
      sfx.playReelStop(r);
    }
    renderFullGrid(false);

    // 1. Process Expanding Wilds & Zeus vs Hades Multiplier Duels
    await processExpandingWildDuels(activeForce);

    // 2. Evaluate 15 Paylines
    const { totalWin, winningLines } = evaluate15Paylines();
    state.currentSpinWin = totalWin;

    if (totalWin > 0) {
      const maxMult = Math.max(1, ...winningLines.map(w => w.appliedMultiplier));
      sfx.playWinChord(maxMult);
      highlightWinningPaylines(winningLines);

      if (state.inFreeSpins) {
        state.freeSpinsTotalWin += totalWin;
        showBannerWin(
          `${winningLines.length} PAYLINE${winningLines.length > 1 ? 'S' : ''} WON ${formatMoney(totalWin)}${maxMult > 1 ? ' • ' + maxMult + 'X WILD DUEL' : ''}`,
          'TOTAL WIN',
          state.freeSpinsTotalWin
        );
      } else {
        state.credit += totalWin;
        showBannerWin(
          `${winningLines.length} PAYLINE${winningLines.length > 1 ? 'S' : ''}${maxMult > 1 ? ' • ' + maxMult + 'X EXPANDING WILD MULTIPLIER' : ''}`,
          'WIN',
          totalWin
        );
      }
      updateHudDisplay();
      await sleep(state.turboMode ? 520 : 1050);

      // Show Big Win Celebration if single spin win >= 20x Bet
      if (totalWin >= bet * 20) {
        await showBigWinCelebration(totalWin);
      }
    } else if (state.inFreeSpins && state.freeSpinsTotalWin > 0) {
      showBannerWin('STICKY EXPANDING WILDS ACTIVE', 'TOTAL WIN', state.freeSpinsTotalWin);
    } else {
      setBannerIdleMessage('WIN UP TO 15,000X BET • EXPANDING WILDS UP TO 100X');
    }

    // 3. Check 3 Temple Scatters on Reels 1, 3, 5 (Base Game -> Trigger 10 Free Spins)
    const scatters = countScatters();
    if (!state.inFreeSpins && scatters.length >= 3) {
      sfx.playScatterHit(scatters.length);
      await sleep(450);
      await triggerFreeSpinsRound();
    }

    // 4. Check if Free Spins round just finished
    if (state.inFreeSpins && state.freeSpinsLeft <= 0) {
      const finalFSWin = state.freeSpinsTotalWin;
      state.credit += finalFSWin;
      state.inFreeSpins = false;
      state.isSuperFreeSpins = false;
      state.expandedWilds = [null, null, null, null, null];
      syncVisualThemeLayers();
      updateHudDisplay();
      await showFreeSpinsSummaryCelebration(finalFSWin);
      renderFullGrid(false);
    }

    state.isSpinning = false;
    setSpinButtonState(false);
    updateHudDisplay();

    // Continue Free Spins or Autoplay automatically
    if (state.inFreeSpins && state.freeSpinsLeft > 0) {
      setTimeout(() => {
        if (!state.isSpinning) executeSpin();
      }, state.turboMode ? 320 : 650);
    } else if (state.autoplayRemaining > 0) {
      state.autoplayRemaining--;
      updateAutoplayPill();
      setTimeout(() => {
        if (!state.isSpinning && state.autoplayRemaining >= 0) executeSpin();
      }, state.turboMode ? 280 : 600);
    }
  }

  async function triggerFreeSpinsRound() {
    state.inFreeSpins = true;
    state.freeSpinsLeft = 10;
    state.freeSpinsTotalWin = 0;
    state.expandedWilds = [null, null, null, null, null];
    syncVisualThemeLayers();
    updateHudDisplay();

    await showCelebrationModal({
      tierImg: state.mode === 'zeus'
        ? 'assets/sprites/S01_zeus_scatter/s_S01_zeus_scatter.png'
        : 'assets/sprites/S01_hades_scatter/s_S01_hades_scatter.png',
      title: '10 FREE SPINS AWARDED!',
      subtitle: state.isSuperFreeSpins
        ? 'SUPER FREE SPINS • GUARANTEED STICKY EXPANDING WILD!'
        : 'ALL EXPANDING WILDS REMAIN STICKY FOR THE ENTIRE ROUND!',
      amountText: '10 FREE SPINS',
      buttonText: 'START FREE SPINS'
    });
  }

  // =========================================================================
  // 11. BIG WIN & FREE SPINS CELEBRATION MODALS
  // =========================================================================
  function getBigWinTierSprite(ratio) {
    if (state.mode === 'zeus') {
      if (ratio >= 100) return 'assets/sprites/zeha_bigwin_zeus_zeha_bigwin_zeus5/s_magenta_sensational.png';
      if (ratio >= 40) return 'assets/sprites/zeha_bigwin_zeus_zeha_bigwin_zeus6/s_red_mega.png';
      return 'assets/sprites/zeha_bigwin_zeus_zeha_bigwin_zeus4/s_green_nice.png';
    } else {
      if (ratio >= 100) return 'assets/sprites/zeha_bigwin_hades_zeha_bigwin_hades3/s_magenta_sensational_01.png';
      if (ratio >= 40) return 'assets/sprites/zeha_bigwin_hades_zeha_bigwin_hades/s_blue_superb.png';
      return 'assets/sprites/zeha_bigwin_hades_zeha_bigwin_hades2/s_green_nice.png';
    }
  }

  function showBigWinCelebration(winAmount) {
    const ratio = winAmount / getBet();
    let title = 'BIG WIN!';
    if (ratio >= 15000) title = '15,000X MAX WIN!';
    else if (ratio >= 100) title = 'SENSATIONAL WIN!';
    else if (ratio >= 40) title = 'MEGA WIN!';

    sfx.playBigWinFanfare();
    return showCelebrationModal({
      tierImg: getBigWinTierSprite(ratio),
      title,
      subtitle: `${ratio.toFixed(1)}X TOTAL BET`,
      amountText: formatMoney(winAmount),
      buttonText: 'COLLECT WIN'
    });
  }

  function showFreeSpinsSummaryCelebration(totalFSWin) {
    sfx.playBigWinFanfare();
    return showCelebrationModal({
      tierImg: getBigWinTierSprite(Math.max(25, totalFSWin / getBet())),
      title: 'FREE SPINS COMPLETE!',
      subtitle: 'CONGRATULATIONS! YOU WON:',
      amountText: formatMoney(totalFSWin),
      buttonText: 'CONTINUE'
    });
  }

  function showCelebrationModal({ tierImg, title, subtitle, amountText, buttonText }) {
    return new Promise(resolve => {
      const overlay = document.getElementById('celebration-overlay');
      document.getElementById('celeb-tier-img').src = tierImg;
      document.getElementById('celeb-title-text').textContent = title;
      document.getElementById('celeb-subtitle-text').textContent = subtitle;
      document.getElementById('celeb-amount-text').textContent = amountText;
      const btn = document.getElementById('celeb-continue-btn');
      btn.textContent = buttonText || 'CLICK TO CONTINUE';

      overlay.classList.remove('hidden');

      let closed = false;
      const finish = () => {
        if (closed) return;
        closed = true;
        sfx.playClick();
        overlay.classList.add('hidden');
        btn.removeEventListener('click', finish);
        overlay.removeEventListener('click', finish);
        resolve();
      };

      btn.addEventListener('click', finish);
      overlay.addEventListener('click', finish);
      setTimeout(finish, state.turboMode ? 2400 : 4800);
    });
  }

  // =========================================================================
  // 12. HUD, BANNER & PAYTABLE UPDATES
  // =========================================================================
  function setSpinButtonState(spinning) {
    const btn = document.getElementById('btn-spin');
    const stopIcon = document.getElementById('spin-stop-icon');
    if (spinning) {
      btn.classList.add('spinning');
      stopIcon.classList.remove('hidden');
    } else {
      btn.classList.remove('spinning');
      stopIcon.classList.add('hidden');
    }
  }

  function setBannerIdleMessage(msg) {
    document.getElementById('banner-win-box').classList.add('hidden');
    const idleEl = document.getElementById('banner-idle-msg');
    idleEl.textContent = msg;
    idleEl.classList.remove('hidden');
  }

  function showBannerWin(detailText, labelText, amountVal) {
    document.getElementById('banner-idle-msg').classList.add('hidden');
    const box = document.getElementById('banner-win-box');
    document.getElementById('banner-tumble-detail').textContent = detailText;
    document.getElementById('banner-win-label').textContent = labelText;
    document.getElementById('banner-win-amount').textContent = formatMoney(amountVal);
    box.classList.remove('hidden');
  }

  function updateAutoplayPill() {
    const pill = document.getElementById('btn-autoplay');
    const txt = document.getElementById('autoplay-btn-text');
    if (state.autoplayRemaining > 0) {
      pill.classList.add('active');
      txt.textContent = `STOP (${state.autoplayRemaining})`;
    } else {
      pill.classList.remove('active');
      txt.textContent = 'AUTOPLAY';
    }
  }

  function updateHudDisplay() {
    const bet = getBet();
    document.getElementById('hud-credit-val').textContent = formatMoney(state.credit);
    document.getElementById('hud-bet-val').textContent = formatMoney(bet);
    document.getElementById('modal-bet-display').textContent = formatMoney(bet);

    const stdMult = getStandardBuyMultiplier();
    document.getElementById('buy-std-mult-tag').textContent = `${stdMult}x TOTAL BET`;
    document.getElementById('buy-price-label').textContent = formatMoney(bet * stdMult);
    document.getElementById('buy-super-price-label').textContent = formatMoney(bet * 300);

    // Toggle Free Spins counter vs Buy Buttons
    const fsPanel = document.getElementById('fs-counter-panel');
    const buyBtn1 = document.getElementById('buy-fs-btn');
    const buyBtn2 = document.getElementById('buy-super-fs-btn');
    if (state.inFreeSpins) {
      fsPanel.classList.remove('hidden');
      document.getElementById('fs-remaining-count').textContent = state.freeSpinsLeft;
      buyBtn1.classList.add('hidden');
      buyBtn2.classList.add('hidden');
    } else {
      fsPanel.classList.add('hidden');
      buyBtn1.classList.remove('hidden');
      buyBtn2.classList.remove('hidden');
    }
  }

  // =========================================================================
  // 13. DYNAMIC 7-PAGE PAYTABLE MODAL (Uses Official Zeus vs Hades Sprites)
  // =========================================================================
  function renderPaytablePage() {
    const body = document.getElementById('pt-body');
    const ind = document.getElementById('pt-page-indicator');
    const dots = document.getElementById('pt-dots');
    const bet = getBet();
    const totalPages = 7;

    ind.textContent = `PAGE ${state.paytablePage + 1} / ${totalPages}`;
    dots.innerHTML = Array.from({ length: totalPages }, (_, i) => `
      <span class="pt-dot ${i === state.paytablePage ? 'active' : ''}" data-page="${i}"></span>
    `).join('');
    dots.querySelectorAll('.pt-dot').forEach(d => {
      d.addEventListener('click', () => {
        sfx.playClick();
        state.paytablePage = Number(d.dataset.page);
        renderPaytablePage();
      });
    });

    const formatPayList = (symId) => {
      const pays = SYMBOLS[symId].pays;
      return Object.entries(pays)
        .sort((a, b) => Number(b[0]) - Number(a[0]))
        .map(([k, v]) => `${k}x — ${formatMoney(bet * v)}`)
        .join('\n');
    };

    if (state.paytablePage === 0) {
      // Page 1: High-Pay Mythological Symbols + Wild
      const ids = ['S02', 'S03', 'S04', 'S05', 'S06', 'S07'];
      body.innerHTML = `
        <div class="pt-grid-symbols">
          ${ids.map(id => `
            <div class="pt-sym-card">
              <img src="${getSymImg(id)}" alt="${getSymName(id)}" />
              <div class="pt-sym-info">
                <div class="pt-sym-name">${getSymName(id)}</div>
                <div class="pt-sym-pays">${formatPayList(id)}</div>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    } else if (state.paytablePage === 1) {
      // Page 2: Royal Symbols (A, K, Q, J, 10) + Scatter
      const ids = ['S08', 'S09', 'S10', 'S11', 'S12'];
      body.innerHTML = `
        <div class="pt-grid-symbols">
          ${ids.map(id => `
            <div class="pt-sym-card">
              <img src="${getSymImg(id)}" alt="${getSymName(id)}" />
              <div class="pt-sym-info">
                <div class="pt-sym-name">${getSymName(id)}</div>
                <div class="pt-sym-pays">${formatPayList(id)}</div>
              </div>
            </div>
          `).join('')}
          <div class="pt-sym-card">
            <img src="${getSymImg('S01')}" alt="Scatter" />
            <div class="pt-sym-info">
              <div class="pt-sym-name">${getSymName('S01')}</div>
              <div class="pt-sym-pays">3x on Reels 1, 3, 5 awards 10 FREE SPINS!</div>
            </div>
          </div>
        </div>
      `;
    } else if (state.paytablePage === 2) {
      // Page 3: Expanding Wilds with Multiplier Duel
      body.innerHTML = `
        <div class="pt-rule-section">
          <img src="${getSymImg('S13')}" alt="Expanding Wild" />
          <div class="pt-rule-text">
            <h3>EXPANDING WILDS WITH MULTIPLIERS (2X – 100X)</h3>
            <p>• EXPANDING WILD symbols can appear on all reels in both Base Game and Free Spins.<br/>
            • Whenever an EXPANDING WILD lands, it expands vertically to cover all 5 positions on the reel.<br/>
            • Zeus and Hades battle in an epic duel to award a random multiplier of <strong>2x, 3x, 4x, 5x, 6x, 7x, 8x, 9x, 10x, 12x, 15x, 20x, 25x, 50x, or 100x</strong>.<br/>
            • If more than one EXPANDING WILD is part of the same winning payline, their multipliers are added together!</p>
          </div>
        </div>
      `;
    } else if (state.paytablePage === 3) {
      // Page 4: Free Spins with Sticky Expanding Wilds
      body.innerHTML = `
        <div class="pt-rule-section">
          <img src="${getSymImg('S01')}" alt="Free Spins" />
          <div class="pt-rule-text">
            <h3>FREE SPINS WITH STICKY EXPANDING WILDS</h3>
            <p>• Hit 3 SCATTER symbols on reels 1, 3, and 5 to trigger <strong>10 FREE SPINS</strong>.<br/>
            • During the FREE SPINS feature, any EXPANDING WILD symbol that hits expands, gets a random multiplier from <strong>2x to 100x</strong>, and remains <strong>STICKY on the screen</strong> until the end of the round!</p>
          </div>
        </div>
      `;
    } else if (state.paytablePage === 4) {
      // Page 5: Olympus Mode vs Hades Mode
      body.innerHTML = `
        <div class="pt-rule-section">
          <img src="assets/sprites/zeha_title/s_zeha_title.png" alt="Zeus vs Hades" />
          <div class="pt-rule-text">
            <h3>DUAL GAME MODES: OLYMPUS VS HADES</h3>
            <p>• Players can switch between <strong>OLYMPUS MODE</strong> and <strong>HADES MODE</strong> at any time in the base game:<br/>
            • <strong>OLYMPUS MODE (HIGH VOLATILITY - 4/5 Bolts):</strong> Higher chance of hitting the Free Spins feature.<br/>
            • <strong>HADES MODE (VERY HIGH VOLATILITY - 5/5 Bolts):</strong> Free Spins feature has a higher average payout potential.</p>
          </div>
        </div>
      `;
    } else if (state.paytablePage === 5) {
      // Page 6: 15 Paylines Diagram (Official Sprite s_zeus_vs_hades_5x5_15.png)
      body.innerHTML = `
        <div class="pt-rule-section">
          <img src="assets/sprites/paylines_hades_vs_zeus/s_zeus_vs_hades_5x5_15.png" alt="15 Paylines" style="width: 420px; height: auto;" />
          <div class="pt-rule-text">
            <h3>15 WINNING PAYLINES (5x5 REEL GRID)</h3>
            <p>• All symbols pay from left to right on adjacent reels starting from the leftmost reel along 15 fixed paylines.<br/>
            • Only the highest win is paid per line. When winning on multiple paylines, all wins are added to the total win.<br/>
            • Maximum Win is capped at <strong>15,000x Total Bet</strong> in both Olympus and Hades modes.</p>
          </div>
        </div>
      `;
    } else {
      // Page 7: Buy Free Spins & Game Specifications
      body.innerHTML = `
        <div class="pt-rule-section">
          <img src="assets/sprites/zeha_title/s_zeha_title.png" alt="Zeus vs Hades" />
          <div class="pt-rule-text">
            <h3>BUY FREE SPINS &amp; GAME SPECIFICATIONS</h3>
            <p>• <strong>OLYMPUS BUY FREE SPINS:</strong> 75x Total Bet (Standard) or 300x Total Bet (Super Free Spins with 1 guaranteed Expanding Wild).<br/>
            • <strong>HADES BUY FREE SPINS:</strong> 150x Total Bet (Standard) or 300x Total Bet (Super Free Spins with 1 guaranteed Expanding Wild).<br/>
            • Theoretical RTP: 96.07% (Olympus) / 96.05% (Hades) • Max Win: 15,000x Bet.</p>
          </div>
        </div>
      `;
    }
  }

  // =========================================================================
  // 14. EXTRACTED ASSET EXPLORER (186 Atlases / 4,553 Sprites / 194 Textures)
  // =========================================================================
  async function openAssetExplorer() {
    sfx.playClick();
    const modal = document.getElementById('assets-modal');
    modal.classList.remove('hidden');

    if (!state.manifestData) {
      try {
        const resp = await fetch('assets/manifest.json');
        state.manifestData = await resp.json();
        populateAssetExplorerFilter();
      } catch (e) {
        console.error('Failed to load manifest.json:', e);
        return;
      }
    }
    renderAssetExplorerGrid();
  }

  function populateAssetExplorerFilter() {
    const select = document.getElementById('asset-atlas-filter');
    const summaryEl = document.getElementById('assets-summary-text');
    const s = state.manifestData.summary;
    summaryEl.textContent = `${s.atlasCount} Texture Atlases • ${s.totalSprites.toLocaleString()} Cropped Sprites • ${s.textures || 194} Textures • ${s.fonts} Fonts • ${s.spineSkeletons} Spine Skeletons`;

    select.innerHTML = `<option value="ALL">All ${s.atlasCount} Atlases (${s.totalSprites.toLocaleString()} Sprites)</option>`;
    Object.keys(state.manifestData.atlases).sort().forEach(atlasKey => {
      const a = state.manifestData.atlases[atlasKey];
      const opt = document.createElement('option');
      opt.value = atlasKey;
      opt.textContent = `${atlasKey} (${a.spriteCount} sprites)`;
      select.appendChild(opt);
    });
  }

  function renderAssetExplorerGrid() {
    if (!state.manifestData) return;
    const gridEl = document.getElementById('assets-grid');
    const query = document.getElementById('asset-search-input').value.trim().toLowerCase();
    const atlasFilter = document.getElementById('asset-atlas-filter').value;

    const items = [];
    for (const [atlasKey, ainfo] of Object.entries(state.manifestData.atlases)) {
      if (atlasFilter !== 'ALL' && atlasFilter !== atlasKey) continue;
      for (const [sname, smeta] of Object.entries(ainfo.sprites)) {
        if (query && !sname.toLowerCase().includes(query) && !atlasKey.toLowerCase().includes(query)) {
          continue;
        }
        items.push({ atlasKey, sname, smeta });
        if (items.length >= 240) break;
      }
      if (items.length >= 240) break;
    }

    gridEl.innerHTML = items.map(({ atlasKey, sname, smeta }) => `
      <div class="asset-card">
        <div class="asset-thumb-box">
          <img src="${smeta.path}" alt="${sname}" loading="lazy" />
        </div>
        <div class="asset-name">${sname}</div>
        <div class="asset-dim">${atlasKey} • ${smeta.width}×${smeta.height}</div>
      </div>
    `).join('');
  }

  // =========================================================================
  // 15. EVENT LISTENERS & INITIALIZATION
  // =========================================================================
  function openBuyModal(buyType) {
    if (state.isSpinning || state.inFreeSpins) return;
    sfx.playClick();
    state.pendingBuyType = buyType;
    const bet = getBet();
    const isSuper = buyType === 'super';
    const mult = isSuper ? 300 : getStandardBuyMultiplier();
    const cost = bet * mult;

    document.getElementById('buy-dialog-bg-img').src = state.mode === 'zeus'
      ? 'assets/sprites/zeha_buyfs_confirm_window/s_zeha_buyfs_confim_bkg_left.png'
      : 'assets/sprites/zeha_buyfs_confirm_window/s_zeha_buyfs_confim_bkg_right.png';
    document.getElementById('buy-dialog-title').textContent = isSuper
      ? `BUY SUPER FREE SPINS (${state.mode.toUpperCase()})`
      : `BUY FREE SPINS (${state.mode.toUpperCase()})`;
    document.getElementById('buy-dialog-desc').textContent = isSuper
      ? 'Instantly trigger 10 FREE SPINS with 1 guaranteed Sticky Expanding Wild on the first free spin (300x Bet):'
      : `Instantly trigger 10 FREE SPINS with 3 SCATTER symbols in ${state.mode.toUpperCase()} mode (${mult}x Bet):`;
    document.getElementById('buy-dialog-cost').textContent = formatMoney(cost);
    document.getElementById('buy-modal').classList.remove('hidden');
  }

  function bindEvents() {
    // Intro Mode Selection Cards
    document.getElementById('intro-choose-zeus').addEventListener('click', () => setGameMode('zeus', false));
    document.getElementById('intro-choose-hades').addEventListener('click', () => setGameMode('hades', false));

    // In-Game Right-Side Mode Switcher Buttons
    document.getElementById('btn-mode-zeus').addEventListener('click', () => setGameMode('zeus', true));
    document.getElementById('btn-mode-hades').addEventListener('click', () => setGameMode('hades', true));

    // Intro Splash Screen controls
    document.getElementById('intro-skip-toggle').addEventListener('click', (e) => {
      e.preventDefault();
      sfx.playClick();
      document.getElementById('intro-cb-check').classList.toggle('hidden');
    });

    document.getElementById('intro-play-btn').addEventListener('click', () => {
      sfx.playClick();
      document.getElementById('intro-screen').classList.remove('active');
      document.getElementById('game-screen').classList.add('active');
    });

    document.getElementById('stage').addEventListener('click', () => {
      hideSymbolCallout();
    });

    // Main Spin Button
    const spinBtn = document.getElementById('btn-spin');
    const spinBg = document.getElementById('spin-btn-bg');
    spinBtn.addEventListener('mouseenter', () => {
      spinBg.src = 'assets/sprites/GUI_v11_desktop/s_spin_hover.png';
    });
    spinBtn.addEventListener('mouseleave', () => {
      spinBg.src = 'assets/sprites/GUI_v11_desktop/s_spin_normal.png';
    });
    spinBtn.addEventListener('mousedown', () => {
      spinBg.src = 'assets/sprites/GUI_v11_desktop/s_spin_pressed.png';
    });
    spinBtn.addEventListener('mouseup', () => {
      spinBg.src = 'assets/sprites/GUI_v11_desktop/s_spin_hover.png';
    });
    spinBtn.addEventListener('click', () => {
      executeSpin();
    });

    // Bet Minus & Plus Buttons
    const adjustBet = (delta) => {
      if (state.isSpinning || state.inFreeSpins) return;
      sfx.playClick();
      state.betIndex = Math.max(0, Math.min(BET_LEVELS.length - 1, state.betIndex + delta));
      updateHudDisplay();
    };
    document.getElementById('btn-bet-minus').addEventListener('click', () => adjustBet(-1));
    document.getElementById('btn-bet-plus').addEventListener('click', () => adjustBet(1));
    document.getElementById('modal-bet-minus').addEventListener('click', () => adjustBet(-1));
    document.getElementById('modal-bet-plus').addEventListener('click', () => adjustBet(1));

    // Toggle Cash / Coin display
    document.getElementById('credit-bet-toggle').addEventListener('click', () => {
      sfx.playClick();
      state.displayCoins = !state.displayCoins;
      updateHudDisplay();
    });

    // Sound Toggle
    document.getElementById('btn-sound').addEventListener('click', () => {
      state.soundEnabled = !state.soundEnabled;
      document.getElementById('sound-icon-img').src = state.soundEnabled
        ? 'assets/sprites/GUI/s_Sound.png'
        : 'assets/sprites/GUI/s_SoundMute.png';
      document.getElementById('toggle-audio').checked = state.soundEnabled;
      if (state.soundEnabled) sfx.playClick();
    });

    // Info / Paytable Modal
    document.getElementById('btn-info').addEventListener('click', () => {
      sfx.playClick();
      state.paytablePage = 0;
      renderPaytablePage();
      document.getElementById('paytable-modal').classList.remove('hidden');
    });
    document.getElementById('pt-prev-btn').addEventListener('click', () => {
      sfx.playClick();
      state.paytablePage = (state.paytablePage + 6) % 7;
      renderPaytablePage();
    });
    document.getElementById('pt-next-btn').addEventListener('click', () => {
      sfx.playClick();
      state.paytablePage = (state.paytablePage + 1) % 7;
      renderPaytablePage();
    });
    document.getElementById('pt-close-btn').addEventListener('click', () => {
      sfx.playClick();
      document.getElementById('paytable-modal').classList.add('hidden');
    });

    // Menu / Settings Modal
    document.getElementById('btn-menu').addEventListener('click', () => {
      sfx.playClick();
      document.getElementById('settings-modal').classList.remove('hidden');
    });
    document.getElementById('settings-close-btn').addEventListener('click', () => {
      sfx.playClick();
      document.getElementById('settings-modal').classList.add('hidden');
    });
    document.getElementById('toggle-turbo').addEventListener('change', (e) => {
      state.turboMode = e.target.checked;
    });
    document.getElementById('toggle-audio').addEventListener('change', (e) => {
      state.soundEnabled = e.target.checked;
      document.getElementById('sound-icon-img').src = state.soundEnabled
        ? 'assets/sprites/GUI/s_Sound.png'
        : 'assets/sprites/GUI/s_SoundMute.png';
    });

    // Autoplay Button & Presets
    document.getElementById('btn-autoplay').addEventListener('click', () => {
      sfx.playClick();
      if (state.autoplayRemaining > 0) {
        state.autoplayRemaining = 0;
        updateAutoplayPill();
      } else {
        document.getElementById('settings-modal').classList.remove('hidden');
      }
    });
    document.querySelectorAll('.auto-preset-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        sfx.playClick();
        state.autoplayRemaining = Number(btn.dataset.spins);
        updateAutoplayPill();
        document.getElementById('settings-modal').classList.add('hidden');
        if (!state.isSpinning) executeSpin();
      });
    });

    // Buy Free Spins Buttons (Standard & Super)
    document.getElementById('buy-fs-btn').addEventListener('click', () => openBuyModal('standard'));
    document.getElementById('buy-super-fs-btn').addEventListener('click', () => openBuyModal('super'));

    document.getElementById('buy-confirm-no').addEventListener('click', () => {
      sfx.playClick();
      document.getElementById('buy-modal').classList.add('hidden');
    });
    document.getElementById('buy-confirm-yes').addEventListener('click', () => {
      sfx.playClick();
      document.getElementById('buy-modal').classList.add('hidden');
      const isSuper = state.pendingBuyType === 'super';
      const mult = isSuper ? 300 : getStandardBuyMultiplier();
      const cost = getBet() * mult;
      if (state.credit < cost) {
        setBannerIdleMessage('INSUFFICIENT CREDIT FOR BUY FEATURE');
        return;
      }
      state.credit -= cost - getBet(); // executeSpin deducts 1x bet
      state.forcedFeature = isSuper ? 'super_fs' : 'freespins';
      executeSpin();
    });

    // Demo Feature Quick-Triggers
    document.querySelectorAll('.demo-chip[data-force]').forEach(btn => {
      btn.addEventListener('click', () => {
        sfx.playClick();
        const type = btn.dataset.force;
        document.querySelectorAll('.demo-chip[data-force]').forEach(b => b.classList.remove('armed'));
        btn.classList.add('armed');
        state.forcedFeature = type;
        if (!state.isSpinning) {
          executeSpin();
        }
      });
    });

    // Extracted Asset Explorer
    document.getElementById('open-assets-btn').addEventListener('click', openAssetExplorer);
    document.getElementById('assets-close-btn').addEventListener('click', () => {
      sfx.playClick();
      document.getElementById('assets-modal').classList.add('hidden');
    });
    document.getElementById('asset-search-input').addEventListener('input', renderAssetExplorerGrid);
    document.getElementById('asset-atlas-filter').addEventListener('change', renderAssetExplorerGrid);

    // Keyboard Support: Space / Enter to Spin, Hold Space for Turbo Spin
    window.addEventListener('keydown', (e) => {
      if (e.code === 'Space' || e.code === 'Enter') {
        const tag = document.activeElement && document.activeElement.tagName;
        if (tag === 'INPUT' || tag === 'SELECT') return;
        e.preventDefault();

        const introScreen = document.getElementById('intro-screen');
        if (introScreen.classList.contains('active')) {
          document.getElementById('intro-play-btn').click();
          return;
        }

        if (e.repeat && e.code === 'Space') {
          state.turboMode = true;
          document.getElementById('toggle-turbo').checked = true;
        }
        executeSpin();
      }
    });

    window.addEventListener('keyup', (e) => {
      if (e.code === 'Space') {
        state.turboMode = document.getElementById('toggle-turbo').checked;
      }
    });
  }

  function runLoadingSequence() {
    const fill = document.getElementById('loading-bar-fill');
    let progress = 18;
    const interval = setInterval(() => {
      progress += Math.random() * 26 + 14;
      if (progress >= 100) {
        progress = 100;
        fill.style.width = '100%';
        clearInterval(interval);
        setTimeout(() => {
          document.getElementById('loading-screen').classList.remove('active');
          document.getElementById('intro-screen').classList.add('active');
        }, 260);
      } else {
        fill.style.width = `${progress}%`;
      }
    }, 120);
  }

  function init() {
    updateStageScale();
    state.grid = cloneGrid(INITIAL_GRID);
    setGameMode('zeus', false);
    bindEvents();
    runLoadingSequence();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
