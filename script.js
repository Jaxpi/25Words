// --- 1,500+ WORD POOL ---
const rawWordPool = [
    // Nouns
    "Apple","Banana","Orange","Grapes","Melon","Peach","Cherry","Lemon","Lime","Berry","Plum","Mango","Papaya","Guitar","Violin",
    "Drums","Piano","Flute","Trumpet","Harp","Cello","Saxophone","Clarinet","Banjos","Robot","Cyborg","Android","Engine","Battery",
    "Magnet","Sensor","Laser","Radar","Rocket","Missile","Satellite","Astronaut","Cosmonaut","Meteor","Comet","Asteroid","Galaxy",
    "Universe","Cosmos","Nebula","Orbit","Gravity","Planet","Star","Sun","Moon","Earth","Mars","Jupiter","Saturn","Uranus","Neptune",
    "Pluto","Mercury","Venus","Vulcan","Phoenix","Dragon","Griffin","Unicorn","Pegasus","Centaur","Minotaur","Siren","Kraken","Hydra",
    "Gorgon","Medusa","Sphinx","Chimera","Wyvern","Basilisk","Cerberus","Anubis","Osiris","Horus","Isis","Zeus","Hera","Poseidon",
    "Hades","Athena","Apollo","Artemis","Ares","Aphrodite","Hermes","Dionysus","Odin","Thor","Loki","Freya","Frigg","Baldur","Tyr",
    "Heimdall","Hel","Fenrir","Jormungand","Valkyrie","Einherjar","Asgard","Midgard","Jotunheim","Niflheim","Muspelheim","Helheim",
    "Valhalla","Castle","Palace","Mansion","Villa","Cottage","Cabin","Chalet","Hut","Tent","Tepee","Igloo","Yurt","Wigwam","Hogan",
    "Longhouse","Pueblo","Adobe","Kraal","Rondavel","Tulou","Trullo","Ger","Bothy","Shanty","Shack","Lean-to","Treehouse","Houseboat",
    "Caravan","Camper","Trailer","Motorhome","RV","Bus","Coach","Train","Tram","Trolley","Subway","Metro","Monorail","Cablecar",
    "Funicular","Gondola","Ski-lift","Chairlift","Elevator","Escalator","Travelator","Walkway","Sidewalk","Pavement","Street","Road",
    "Avenue","Boulevard","Lane","Drive","Way","Court","Place","Square","Plaza","Terrace","Crescent","Close","Yard","Alley","Passage",
    "Path","Track","Trail","Route","Highway","Freeway","Motorway","Expressway","Turnpike","Parkway","Byway","Bypass","Ringroad","Flyover",
    "Overpass","Underpass","Tunnel","Bridge","Viaduct","Aqueduct","Causeway","Culvert","Ford","Ferry","Pier","Jetty","Wharf","Quay",
    "Marina","Harbor","Port","Dock","Shipyard","Slipway","Breakwater","Mole","Groyne","Sea-wall","Promenade","Esplanade","Beach","Shore",
    "Coast","Cliff","Cape","Headland","Promontory","Peninsula","Isthmus","Island","Islet","Atoll","Archipelago","Reef","Sandbank","Shoal",
    "Dune","Delta","Estuary","Firth","Fjord","Sound","Strait","Channel","Bay","Gulf","Bight","Cove","Inlet","Loch","Lake","Pond",
    "Pool","Tarn","Reservoir","Basin","Lagoon","Swamp","Marsh","Bog","Fen","Mire","Morass","Quagmire","Peatland","Wetland","Mangrove",
    "River","Stream","Brook","Creek","Rill","Burn","Beck","Torrent","Riverbed","Riverbank","Waterfall","Cascade","Cataract","Rapid","Spring",
    "Geyser","Source","Tributary","Confluence","Mouth","Valley","Glen","Dale","Vale","Gorge","Canyon","Ravine","Chasm","Abyss","Gulley",
    "Clough","Strath","Pass","Gap","Col","Saddle","Defile","Mountain","Mount","Peak","Summit","Crest","Ridge","Spur","Butte","Mesa",
    "Plateau","Tableland","Hill","Knoll","Mound","Tump","Tor","Crag","Pinnacle","Needle","Dome","Volcano","Caldera","Crater","Vent",
    "Fumarole","Lava-field","Scree","Talus","Moraine","Glacier","Ice-sheet","Ice-cap","Iceberg","Ice-floe","Pack-ice","Sastrugi","Serac",
    "Crevasse","Bergschrund","Moulin","Glacier-cave","Ice-cave","Cave","Cavern","Grotto","Pothole","Sinkhole","Dolene","Karst","Stalactite",
    "Stalagmit","Column","Pillar","Curtain","Flowstone","Helictite","Straw","Pool-crystal","Cave-pearl","Fossil","Amber","Petrified-wood",
    "Dinosaurs","Mammoth","Mastodon","Sabertooth","Megatherium","Glyptodon","Doedicurus","Phorusrhacos","Gastornis","Argentavis",
    "Pelagornis","Megalodon","Basilosaurus","Livyatan","Dunkleosteus","Helicoprion","Anomalocaris","Opabinia","Hallucigenia","Wiwaxia",
    "Pikaia","Trilobite","Ammonite","Belemite","Nautilus","Crinoid","Sea-lily","Sea-urchin","Starfish","Brittle-star","Sea-cucumber",
    "Sand-dollar","Sea-anemone","Coral","Sponge","Jellyfish","Portuguese-man-of-war","Box-jellyfish","Comb-jelly","Sea-walnut",
    "Venus-girdle","Flatworm","Tapeworm","Fluke","Roundworm","Nematode","Hookworm","Pinworm","Filaria","Earthworm","Lugworm",
    "Ragworm","Bloodworm","Leech","Tubifex","Snail","Slug","Limpet","Abalone","Conch","Whelk","Cowrie","Cone-snail","Nudibranch",
    "Sea-slug","Sea-hare","Clam","Cockle","Mussel","Oyster","Scallop","Razor-shell","Shipworm","Octopus","Squid","Cuttlefish",
    "Chambered-nautilus","Spirula","Vampire-squid","Giant-squid","Colossal-squid","Argonaut","Paper-nautilus","Sea-spider",
    "Horseshoe-crab","Trilobite-larva","Scorpion","Emperor-scorpion","Whip-scorpion","Wind-scorpion","Pseudoscorpion","Harvestman",
    "Daddy-longlegs","Tick","Mite","Chigger","Spider","Tarantula","Bird-eating-spider","Wolf-spider","Jumping-spider","Crab-spider",
    "Orb-weaver","Black-widow","Brown-recluse","Funnel-web","Trapdoor-spider","Water-spider","Lynx-spider","Nursery-web-spider",
    "Centipede","Millipede","Pill-bug","Woodlouse","Sowbug","Water-flea","Daphnia","Cyclops","Seed-shrimp","Ostracod","Fairy-shrimp",
    "Brine-shrimp","Tadpole-shrimp","Clam-shrimp","Mantis-shrimp","Pistol-shrimp","Cleaner-shrimp","Krill","Lobster","Spiny-lobster",
    "Crayfish","Crawfish","Crab","Hermit-crab","King-crab","Spider-crab","Fiddler-crab","Ghost-crab","Blue-crab","Dungeness-crab",
    "Barnacle","Goose-barnacle","Acorn-barnacle","Silverfish","Firebrat","Bristletail","Mayfly","Dragonfly","Damselfly","Stonefly",
    "Webspinner","Angel-insect","Earwig","Rock-crawler","Gladiator-insect","Cricket","Grasshopper","Locust","Katydid",
    "Mole-cricket","Stick-insect","Leaf-insect","Mantid","Praying-mantis","Cockroach","Termite","White-ant","Booklouse","Barklouse",
    "Chewing-louse","Sucking-louse","Thrips","Cicada","Treehopper","Leafhopper","Froghopper","Spittlebug","Planthopper","Fulgorid",
    "Scale-insect","Mealybug","Whitefly","Aphid","Plant-louse","Greenfly","Blackfly","Adelgid","Phylloxera","Assassin-bug",
    "Wheel-bug","Ambush-bug","Bed-bug","Bat-bug","Lace-bug","Stink-bug","Shield-bug","Burrower-bug","Negro-bug","Seed-bug",
    "Chinch-bug","Leaf-footed-bug","Squash-bug","Boxelder-bug","Firebug","Red-bug","Cotton-stainer","Broad-headed-bug",
    "Scentless-plant-bug","Toad-bug","Gelastocorid","Water-boatman","Backswimmer","Water-scorpion","Giant-water-bug","Toe-biter",
    "Creeping-water-bug","Velvety-shore-bug","Water-strider","Pond-skater","Marsh-treader","Water-measurer",

    // Verbs
    "Accept","Achieve","Acquire","Adapt","Add","Adjust","Admire","Advise","Afford","Agree","Alert","Allow","Alter","Amuse",
    "Analyse","Announce","Annoy","Answer","Anticipate","Apologise","Appear","Applaud","Apply","Appoint","Approve","Argue","Arise",
    "Arrange","Arrest","Arrive","Ascend","Ask","Assist","Assume","Assure","Astonish","Attach","Attack","Attain","Attempt",
    "Attend","Attract","Audit","Avoid","Awake","Babble","Back","Bake","Balance","Balk","Ban","Bang","Banish","Banter",
    "Bare","Bargain","Bark","Bash","Bask","Bate","Bathe","Battle","Bawl","Be","Beam","Bear","Beat","Beautify","Become",
    "Befall","Beg","Begin","Behave","Behold","Believe","Belong","Bend","Benefit","Bequeathe","Berate","Beseech","Beset",
    "Besiege","Bestow","Bet","Betray","Better","Beware","Bewilder","Bewitch","Chafe","Chaff","Challenge","Chamber","Champion",
    "Chance","Change","Chant","Chap","Char","Charge","Charm","Chart","Chase","Chasm","Chastise","Chat","Chatter","Cheapen",
    "Cheat","Check","Cheer","Cherish","Chew","Chide","Chill","Chime","Chip","Chirp","Chisel","Choke","Chop","Choreograph",
    "Chuckle","Churn","Cite","Clad","Claim","Clamber","Clamour","Clamp","Clang","Clank","Clap","Clarify","Clash","Clasp",
    "Class","Classify","Clatter","Claw","Clean","Cleanse","Clear","Cleave","Clench","Click","Climb","Cling","Clink","Clip",
    "Cloak","Clock","Clog","Cloister","Close","Closet","Clot","Clothe","Cloud","Clout","Clown","Club","Cluck","Clue",
    "Clump","Cluster","Clutch","Clutter","Coach","Coagulate","Coalesce","Coast","Coat","Coax","Cobble","Cock","Code",
    "Codify","Coerce","Coexist","Cogitate","Cohere","Coil","Coin","Coincide","Collaborate","Collapse","Collate","Collect",
    "Colligate","Collide","Collogue","Collude","Colonize","Color","Comb","Combat","Combine","Combust","Come","Comfort",
    "Command","Commemorate","Commence","Commend","Comment","Commission","Commit","Commix","Commune","Communicate","Commute",
    "Compact","Companion","Company","Compare","Compartment","Compass","Compel","Compensate","Compete","Compile","Complain",
    "Complement","Complete","Complicate","Compliment","Comply","Deafened","Debar","Debase","Debate","Debauch","Debilitate",
    "Debit","Debrief","Debunk","Debut","Decamp","Decant","Decapitate","Decay","Deceive","Decelerate","Decentralize",
    "Decept","Decide","Decimate","Decipher","Deck","Declaim","Declare","Declassify","Decline","Decoct","Decode","Decommission",
    "Decompose","Decompress","Decongest","Decontaminate","Decorate","Decouple","Decoy","Decrease","Decree","Decry","Encrypt",
    "Dedicate","Deduce","Deduct","Deed","Deem","Deepen","Deface","Defalcate","Defame","Defat","Default","Defeat","Defect",
    "Defend","Defer","Defile","Define","Deflate","Deflect","Deflorate","Defoliate","Deform","Defraud","Defray","Defrock",
    "Defrost","Defuse","Defy","Degas","Degenerate","Degrade","Degrease","Degust","Dehydrate","Deice","Deify","Deign",
    "Deject","Delay","Delegate","Delete","Deliberate","Delight","Delimit","Delineate","Delink","Delinquish","Deliquesce",
    "Deliver","Delocalize","Delude","Deluge","Delve","Demand","Demarcate","Demean","Dement","Demerge","Demilitarize",

    // Adjectives
    "Abundant","Acidic","Acrid","Active","Sharp","Bright","Calm","Crimson","Dazzling","Earnest","Elastic","Elegant","Erratic",
    "Fierce","Flamboyant","Frail","Frantic","Gargantuan","Glossy","Gothic","Graceful","Grim","Grotesque","Gullible","Hallowed",
    "Handy","Hardy","Harsh","Hasty","Hazy","Heavy","Hectic","Hefty","Heinous","Herculean","Hermetic","Heroic","Hesitant",
    "Hideous","High","Hilarious","Hoary","Hollow","Homely","Honest","Honorable","Hopeful","Horizontal","Horrible","Horrific",
    "Hospitable","Hostile","Hot","Huge","Humble","Humid","Humorous","Hungry","Hurried","Hurtful","Husky","Hydrated","Hygienic",
    "Hypnotic","Idyllic","Ignoble","Ignorant","Ill","Illegal","Illegible","Illicit","Illiterate","Illuminating","Illusive",
    "Illustrious","Immaculate","Immature","Immeasurable","Immediate","Immense","Imminent","Immune","Immutable","Impartial",
    "Impassioned","Impassive","Impatient","Impeccable","Impeded","Imperative","Imperfect","Imperial","Imperious","Impermeable",
    "Impertinent","Impervious","Impetuous","Impious","Impish","Implacable","Implicit","Implausible","Impolite","Important",
    "Importunate","Imposing","Impossible","Impotent","Impoverished","Impracticable","Impractical","Imprecise","Impregnable",
    "Impressive","Improbable","Improper","Improvident","Improvised","Imprudent","Impudent","Impulsive","Impure","Inaccurate",
    "Inadequate","Inadvertent","Inalienable","Inane","Inanimate","Inapplicable","Inappropriate","Inarticulate","Inaudible",
    "Inaugural","Inborn","Inbred","Incalculable","Incandescent","Incapable","Incapacitated","Incarcerated","Incautious",
    "Incendiary","Incensed","Incessant","Inchoate","Incidental","Incinerated","Incipient","Incised","Incisive","Inciteful",
    "Inclement","Inclined","Includable","Inclusive","Incognito","Incoherent","Incombustible","Income-producing","Incommensurate",
    "Incommodious","Incommunicable","Incomparable","Incompatible","Incompetent","Incomplete","Incomprehensible","Incompressible",
    "Inconceivable","Inconclusive","Incongruous","Inconsequential","Inconsiderate","Inconsistent","Inconsolable","Inconspicuous",
    "Inconstant","Incontestable","Incontrollable","Incontrovertible","Inconvenient","Inconvertible","Incoordinating",
    "Incorporate","Incorporeal","Incorrect","Incorrigible","Incorruptible","Incrassated","Incredible","Incredulous","Incremental",
    "Incriminated","Incrusted","Incubated","Inculpable","Incumbent","Incurable","Incurious","Incurved","Indebted","Indecent",
    "Indecipherable","Indecisive","Indefatigable","Indefeasible","Indefenbible","Indefinable","Indefinite","Indelible",
    "Indelicate","Indemnified","Indentable","Indented","Independent","Indescribable","Indestructible","Indeterminable",
    "Indeterminate","Indextrous","Indicative","Indictable","Indifferent","Indigenous","Indigent","Indigestible","Indignant",
    "Indirect","Indiscernible","Indiscreet","Indiscrete","Indiscriminate","Indispensable","Indisposed","Indisputable",
    "Indissoluble","Indistinct","Indistinguishable","Individual","Individualistic","Indivisible","Indocile","Indolent",
    "Indomitable","Indoor","Indorsee","Indubitable","Inductive","Indulgent","Indurated","Industrial","Industrious","Inedible",
    "Ineffable","Ineffaceable","Ineffective","Ineffectual","Inefficacious","Inefficient","Inelastic","Inelegant","Ineligible"
];

// --- GAME STATE ---
let words = [];
let cardGroups = [];
let currentCardIndex = 0;

let timerInterval = null;
let timeLeft = 45;
const defaultTime = 45;
let isTimerRunning = false;

let holdTimer = null;
let isHolding = false;

// --- DOM ELEMENTS ---
const timerEl = document.getElementById('timer');
const wagerInput = document.getElementById('wager-input');
const generateGridBtn = document.getElementById('generate-grid-btn');
const gridBoard = document.getElementById('grid-board');
const resetBoardBtn = document.getElementById('reset-board-btn');
const cardBtn = document.getElementById('card-btn');
const cardModal = document.getElementById('card-modal');
const closeModal = document.querySelector('.close-modal');
const wordListEl = document.getElementById('word-list');
const nextCardBtn = document.getElementById('next-card-btn');

// --- SHUFFLE & SETUP LOGIC ---
function initializeGamePools() {
    words = [...rawWordPool];
    shuffleArray(words);
    
    cardGroups = [];
    for (let i = 0; i < words.length; i += 5) {
        if (i + 5 <= words.length) {
            cardGroups.push(words.slice(i, i + 5));
        }
    }
    
    shuffleArray(cardGroups);
    currentCardIndex = 0;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// --- TIMER FUNCTIONS (TAP, PAUSE, HOLD TO RESET) ---
function startTimer() {
    if (isTimerRunning) return;
    isTimerRunning = true;
    timerInterval = setInterval(() => {
        timeLeft--;
        timerEl.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            isTimerRunning = false;
            timerEl.textContent = "TIME!";
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(timerInterval);
    isTimerRunning = false;
}

function resetTimer() {
    clearInterval(timerInterval);
    isTimerRunning = false;
    timeLeft = defaultTime;
    timerEl.textContent = timeLeft;
}

function handleTimerTouchStart(e) {
    e.preventDefault();
    isHolding = false;
    holdTimer = setTimeout(() => {
        isHolding = true;
        resetTimer();
    }, 1000);
}

function handleTimerTouchEnd(e) {
    e.preventDefault();
    clearTimeout(holdTimer);
    if (!isHolding) {
        if (isTimerRunning) {
            pauseTimer();
        } else {
            if (timeLeft <= 0) resetTimer();
            startTimer();
        }
    }
}

// --- GRID MANAGEMENT ---
function generateGrid(boxCount) {
    gridBoard.innerHTML = '';
    const limit = Math.max(1, Math.min(25, boxCount));
    
    for (let i = 1; i <= limit; i++) {
        const box = document.createElement('div');
        box.classList.add('grid-box');
        box.textContent = i;
        box.addEventListener('click', () => {
            box.classList.toggle('used');
        });
        gridBoard.appendChild(box);
    }
}

function resetBoardOnly() {
    const boxes = document.querySelectorAll('.grid-box');
    boxes.forEach(box => box.classList.remove('used'));
}

// --- WORD CARD MODAL SYSTEM ---
function displayCurrentCard() {
    wordListEl.innerHTML = '';
    if (cardGroups.length === 0) return;
    
    if (currentCardIndex >= cardGroups.length) {
        initializeGamePools();
    }
    
    const currentGroup = cardGroups[currentCardIndex];
    currentGroup.forEach(word => {
        const li = document.createElement('li');
        li.textContent = word;
        wordListEl.appendChild(li);
    });
}

// --- EVENT LISTENERS ---
timerEl.addEventListener('mousedown', handleTimerTouchStart);
timerEl.addEventListener('mouseup', handleTimerTouchEnd);
timerEl.addEventListener('touchstart', handleTimerTouchStart, { passive: false });
timerEl.addEventListener('touchend', handleTimerTouchEnd, { passive: false });

generateGridBtn.addEventListener('click', () => {
    const value = parseInt(wagerInput.value) || 25;
    generateGrid(value);
});

resetBoardBtn.addEventListener('click', resetBoardOnly);

cardBtn.addEventListener('click', () => {
    displayCurrentCard();
    cardModal.style.display = 'flex';
});

closeModal.addEventListener('click', () => {
    cardModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === cardModal) {
        cardModal.style.display = 'none';
    }
});

nextCardBtn.addEventListener('click', () => {
    currentCardIndex++;
    displayCurrentCard();
});

window.addEventListener('DOMContentLoaded', () => {
    initializeGamePools();
    generateGrid(25);
});
