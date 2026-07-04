// --- 1,500+ SIMPLE WORD POOL ---
const rawWordPool = [
    // --- SIMPLE NOUNS ---
    // Animals & Nature
    "Dog","Cat","Bird","Fish","Lion","Tiger","Bear","Horse","Cow","Pig","Sheep","Duck","Goose","Frog","Snake",
    "Shark","Whale","Dolphin","Monkey","Rabbit","Deer","Fox","Wolf","Elephant","Giraffe","Zebra","Hippo","Camel",
    "Spider","Ant","Bee","Fly","Butterfly","Crab","Lobster","Turtle","Mouse","Rat","Bat","Owl","Eagle","Hawk",
    "Tree","Flower","Grass","Leaf","Root","Seed","Plant","Rose","Tulip","Daisy","Bush","Forest","Jungle","Desert",
    "Mountain","Hill","Valley","River","Lake","Ocean","Sea","Beach","Sand","Rock","Stone","Mud","Clay","Dirt",
    "Rain","Snow","Wind","Ice","Sun","Moon","Star","Sky","Cloud","Storm","Thunder","Lightning","Fire","Smoke",
    
    // Food & Kitchen
    "Apple","Banana","Orange","Grape","Lemon","Lime","Peach","Pear","Cherry","Berry","Melon","Mango","Plum",
    "Tomato","Potato","Carrot","Onion","Garlic","Corn","Pea","Bean","Lettuce","Salad","Soup","Bread","Toast",
    "Cheese","Butter","Milk","Cream","Yogurt","Egg","Meat","Beef","Chicken","Pork","Fish","Steak","Burger",
    "Pizza","Pasta","Rice","Noodle","Cake","Pie","Cookie","Candy","Chocolate","Icecream","Sugar","Salt","Pepper",
    "Water","Juice","Soda","Tea","Coffee","Beer","Wine","Plate","Bowl","Cup","Glass","Mug","Fork","Knife",
    "Spoon","Pan","Pot","Oven","Stove","Fridge","Toaster","Blender","Sink","Counter","Apron","Timer","Recipe",

    // Home & Everyday Objects
    "House","Home","Room","Door","Window","Wall","Floor","Roof","Ceiling","Stairs","Halleway","Porch","Garage",
    "Bed","Pillow","Blanket","Sheet","Mattress","Couch","Chair","Table","Desk","Stool","Drawer","Shelf","Closet",
    "Lamp","Light","Bulb","Switch","Plug","Cord","Battery","Phone","Laptop","Computer","Screen","Mouse","Keyboard",
    "Tv","Radio","Clock","Watch","Mirror","Picture","Frame","Rug","Carpet","Curtain","Blinds","Vase","Plant",
    "Book","Notebook","Paper","Pen","Pencil","Eraser","Ruler","Marker","Crayon","Glue","Tape","Scissors","Folder",
    "Bag","Box","Bin","Basket","Bucket","Barrel","Can","Bottle","Jar","Lid","Cap","Key","Lock","Chain",

    // Clothing & Personal Items
    "Shirt","Tshirt","Pants","Jeans","Shorts","Skirt","Dress","Suit","Coat","Jacket","Sweater","Hoodie","Vest",
    "Socks","Shoes","Boots","Sneakers","Sandals","Slippers","Hat","Cap","Beanie","Helmet","Gloves","Mittens",
    "Scarf","Belt","Tie","Watch","Ring","Necklace","Bracelet","Earring","Glasses","Sunglasses","Wallet","Purse",
    "Backpack","Suitcase","Umbrella","Comb","Brush","Toothbrush","Soap","Shampoo","Towel","Razor","Makeup","Perfume",

    // Vehicles & Travel
    "Car","Truck","Van","Bus","Taxi","Ambulance","Firetruck","Policecar","Jeep","Suv","Bike","Bicycle","Motorcycle",
    "Scooter","Skateboard","Train","Subway","Metro","Tram","Airplane","Plane","Jet","Helicopter","Rocket","Spaceship",
    "Boat","Ship","Yacht","Ferry","Canoe","Kayak","Submarine","Raft","Sail","Anchor","Wheel","Tire","Engine",
    "Brake","Steering","Window","Seat","Belt","Door","Trunk","Hood","Gas","Fuel","Station","Road","Street",

    // Places & Buildings
    "City","Town","Village","Country","State","Island","World","Planet","Earth","Space","Store","Shop","Market",
    "Mall","Supermarket","Bakery","Cafe","Restaurant","Hotel","Motel","Inn","Bank","Office","Factory","School",
    "College","University","Library","Museum","Zoo","Park","Garden","Playground","Yard","Pool","Gym","Stadium",
    "Theater","Cinema","Church","Temple","Hospital","Clinic","Pharmacy","Postoffice","Station","Airport","Harbor",
    "Castle","Tower","Bridge","Tunnel","Highway","Path","Trail","Sidewalk","Corner","Square","Plaza","Farm",

    // People & Occupations
    "Man","Woman","Boy","Girl","Baby","Child","Kid","Teen","Adult","Parent","Mother","Mom","Father","Dad",
    "Brother","Sister","Son","Daughter","Baby","Grandma","Grandpa","Uncle","Aunt","Cousin","Friend","Neighbor",
    "Doctor","Nurse","Dentist","Teacher","Coach","Student","Boss","Worker","Police","Firefighter","Pilot","Driver",
    "Chef","Cook","Waiter","Baker","Farmer","Fisherman","Builder","Painter","Artist","Actor","Singer","Dancer",
    "Writer","Poet","Lawyer","Judge","King","Queen","Prince","Princess","Hero","Villain","Ghost","Witch",

    // --- SIMPLE VERBS ---
    "Walk","Run","Jump","Hop","Skip","Dance","Sing","Talk","Speak","Say","Tell","Ask","Answer","Shout",
    "Whisper","Laugh","Cry","Smile","Frown","Blink","Wink","Look","See","Watch","Stare","Glance","Hear","Listen",
    "Smell","Sniff","Taste","Bite","Chew","Swallow","Eat","Drink","Sip","Gulp","Cook","Bake","Fry","Boil",
    "Wash","Clean","Wipe","Scrub","Sweep","Mop","Dust","Vacuum","Polish","Fix","Mend","Repair","Build","Make",
    "Create","Paint","Draw","Write","Read","Spell","Count","Math","Learn","Teach","Study","Think","Know","Believe",
    "Forget","Remember","Understand","Guess","Choose","Pick","Select","Like","Love","Hate","Dislike","Want","Need",
    "Wish","Hope","Fear","Scare","Frighten","Terrify","Anger","Annoy","Please","Amuse","Excite","Bore","Tire",
    "Sleep","Wake","Dream","Rest","Sit","Stand","Lie","Lean","Kneel","Bow","Shake","Nod","Wave","Clap",
    "Snap","Point","Touch","Feel","Hold","Grip","Clutch","Grab","Take","Give","Bring","Carry","Lift","Raise",
    "Drop","Fall","Throw","Catch","Kick","Punch","Hit","Strike","Push","Pull","Drag","shove","Press","Squeeze",
    "Open","Close","Lock","Unlock","Tie","Untie","Wrap","Unwrap","Pack","Unpack","Fold","Unfold","Roll","Spin",
    "Turn","Twist","Bend","Break","Snap","Tear","Rip","Cut","Slice","Chop","Dig","Burry","Plant","Grow",
    "Water","Feed","Pet","Hug","Kiss","Greet","Meet","Visit","Stay","Leave","Go","Come","Arrive","Depart",
    "Drive","Ride","Fly","Sail","Swim","Dive","Float","Sink","Fly","Soar","Glide","Slide","Slip","Trip",
    "Stumble","Hide","Seek","Find","Lose","Search","Hunt","Chase","Follow","Lead","Guide","Show","Hide",
    "Buy","Sell","Pay","Cost","Spend","Save","Earn","Borrow","Lend","Share","Steal","Rob","Catch","Trap",
    "Play","Win","Lose","Score","Match","Fight","Argue","Agree","Disagree","Promise","Lie","Cheat","Steal",

    // --- SIMPLE ADJECTIVES ---
    "Big","Huge","Large","Small","Tiny","Little","Tall","Short","Long","Wide","Narrow","Thick","Thin",
    "Fat","Skinny","Heavy","Light","Hard","Soft","Smooth","Rough","Sharp","Dull","Flat","Round","Square",
    "Fast","Quick","Slow","Swift","Rapid","Early","Late","New","Old","Young","Ancient","Modern","Fresh",
    "Stale","Ripe","Rotten","Good","Bad","Great","Excellent","Wonderful","Terrible","Awful","Nice","Kind",
    "Mean","Cruel","Sweet","Sour","Bitter","Salty","Spicy","Bland","Hot","Warm","Cold","Cool","Chilly",
    "Bright","Dark","Light","Dim","Shiny","Dull","Glow","Clean","Dirty","Messy","Neat","Tidy","Pure",
    "Safe","Dangerous","Scary","Spooky","Fun","Funny","Silly","Serious","Boring","Exciting","Interesting","Loud",
    "Quiet","Noisy","Silent","Soft","Hard","Strong","Weak","Tough","Fragile","Brave","Coward","Smart",
    "Clever","Foolish","Stupid","Wise","Rich","Poor","Wealthy","Cheap","Expensive","Costly","Free","Full",
    "Empty","Heavy","Light","Dry","Wet","Damp","Soaked","Muddy","Dusty","Sandy","Rocky","Hilly",
    "Sunny","Cloudy","Rainy","Snowy","Windy","Stormy","Foggy","Clear","Beautiful","Pretty","Ugly","Cute",
    "Happy","Sad","Angry","Mad","Glad","Proud","Shy","Brave","Scared","Afraid","Tired","Sleepy","Awake",
    "Healthy","Sick","Ill","Hurt","Injured","Weak","Strong","Dead","Alive","Real","Fake","True","False",
    "Right","Wrong","Correct","Easy","Hard","Difficult","Simple","Complex","Plain","Fancy","Soft","Loud",
    "Red","Blue","Green","Yellow","Orange","Purple","Pink","Brown","Black","White","Gray","Gold","Silver"
];

// --- GAME STATE ---
let words = [];
let cardGroups = [];
let currentCardIndex = 0;

let timerInterval = null;
let timeLeft = 60;
const defaultTime = 60;
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
