const jokes = [
  "Why don’t skeletons fight each other? They don’t have the guts.",
  "Why did the scarecrow win an award? He was outstanding in his field.",
  "What do you call fake spaghetti? An impasta.",
  "I told my wife she should embrace her mistakes. She gave me a hug.",
  "Why don’t scientists trust atoms? Because they make up everything.",
  "What do you call a dog magician? A labracadabrador.",
  "Why do cows have hooves instead of feet? Because they lactose.",
  "What do you get when you cross a snowman with a dog? Frostbite.",
  "What’s a cat’s favorite color? Purr-ple.",
  "Why don’t elephants use computers? They’re afraid of the mouse.",
  "Why did the tomato turn red? Because it saw the salad dressing.",
  "What do you call cheese that isn’t yours? Nacho cheese.",
  "What’s a pizza maker’s favorite song? Slice, slice, baby.",
  "Why do watermelons have fancy weddings? Because they cantaloupe.",
  "What do you call a fake noodle? An impasta.",
  "Why don’t eggs tell jokes? They’d crack each other up.",
  "I’m afraid of elevators, so I’m going to start taking steps to avoid them.",
  "What’s orange and sounds like a parrot? A carrot.",
  "Why can’t you give Elsa a balloon? She’ll let it go.",
  "What’s the best way to watch a fly fishing tournament? Live stream.",
  "Why do programmers prefer dark mode? Because light attracts bugs.",
  "Why did the computer break up with its partner? There was no connection.",
  "How do computers get drunk? They take screenshots.",
  "Why was the computer late to work? It had a hard drive.",
  "Why don’t robots have siblings? They’re all made from scratch.",
  "Why did the physicist break up with the biologist? They had no chemistry.",
  "What do you call a dinosaur with great vocabulary? A thesaurus.",
  "Why can’t you trust an atom? Because they make up everything.",
  "What’s a physicist’s favorite food? Fission chips.",
  "Why didn’t the skeleton go to the party? He had no body to go with.",
  "Why was the math book sad? It had too many problems.",
  "What did the pencil say to the paper? You’re write for me.",
  "Why didn’t the skeleton do his homework? His heart wasn’t in it.",
  "What’s a teacher’s favorite type of tree? Geometry.",
  "Why did the student eat his homework? Because his teacher said it was a piece of cake.",
  "Why don’t skeletons work in offices? They lack the backbone.",
  "Why did the employee bring a ladder to work? To reach new heights.",
  "My boss told me to have a good day, so I went home.",
  "Why did the coffee file a police report? It got mugged.",
  "Why don’t calendars get promoted? They’re always stuck in the same place.",
  "Why don’t graveyards get overcrowded? People are dying to get in.",
  "Why was the cemetery so popular? It was a graveyard smash.",
  "What’s the difference between a piano and a fish? You can’t tuna fish.",
  "Why did the orphan rob the bank? To feel wanted.",
  "Why don’t cannibals eat comedians? They taste funny.",
  "I’m on a seafood diet. I see food, and I eat it.",
  "Did you hear about the guy who invented Lifesavers? He made a mint.",
  "Why did the scarecrow get promoted? He was outstanding in his field.",
  "What did the janitor say when he jumped out of the closet? Supplies!",
  "Why do bees have sticky hair? They use honeycombs.",
  "Why do basketball players love donuts? They dunk them.",
  "What do you call a pig who plays basketball? A ball hog.",
  "Why are frogs so good at basketball? Because they always make jump shots.",
  "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
  "Why did the baseball player go to jail? He stole second base.",
  "Why don’t oysters share their pearls? Because they’re shellfish.",
  "What did the ocean say to the shore? Nothing, it just waved.",
  "I used to hate facial hair, but then it grew on me.",
  "Parallel lines have so much in common. It’s a shame they’ll never meet.",
  "Why don’t oysters share their pearls? Because they’re shellfish.",
  "What did the ocean say to the shore? Nothing, it just waved.",
  "I used to hate facial hair, but then it grew on me.",
  "Why did the dolphin go to school? To improve his fin-ishing skills.",
  "What’s black, white, and red all over? A sunburnt penguin.",
  "Why don’t koalas count as bears? They don’t meet the koalafications.",
  "Why was the math teacher so mean? They had too many problems.",
  "Why can’t you trust stairs? They’re always up to something.",
  "Why didn’t the angle get a loan? His credit was acute.",
  "Why was the photon afraid of getting a job? It was a particle.",
  "What do you call two birds in love? Tweethearts.",
  "What do you get when you cross a snowman with a vampire? Frostbite.",
  "Why did the photon check its luggage? It was traveling light.",
  "I accidentally dropped my laptop off a boat. Now it’s a Dell rolling in the deep.",
  "Why don’t robots ever get tired? They recharge their batteries.",
  "Why did the computer go to therapy? It had too many bad sectors.",
  "How does a computer sneeze? With a-choo-byte.",
  "Why was the computer hot? It needed a fan upgrade.",
  "Why do computers hate nature? Too many bugs.",
  "Why did the chicken cross the playground? To get to the other slide.",
  "What do you call a fish wearing a bowtie? Sofishticated.",
  "Why did the spider become a web designer? It loved creating threads.",
  "What’s a snake’s favorite subject in school? Hiss-tory.",
  "Why did the cow go to space? To see the Milky Way.",
  "Why did the golfer bring an extra pair of pants? In case he got a hole in one.",
  "Why do bees have sticky hair? They use honeycombs.",
  "What do you call a pig that does karate? A pork chop.",
  "Why don’t skeletons go on roller coasters? They don’t have the stomach for it.",
  "What did the traffic light say to the car? Don’t look, I’m about to change.",
  "What do you call a man with a rubber toe? Roberto.",
  "What’s Forrest Gump’s password? 1forest1.",
  "Why don’t eggs tell jokes? They might crack up.",
  "Did you hear about the restaurant on the moon? Great food, no atmosphere.",
  "Why do melons have weddings? Because they cantaloupe.",
  "I would tell a joke about pizza, but it’s too cheesy.",
  "Why did the worker eat a clock? He wanted to kill some time.",
  "Why don’t keyboards ever get along? They’re always hitting the wrong keys.",
  "Why was the stapler scared? It thought it was going to be pressed for time.",
  "My office is like a broken pencil—there’s no point.",
  "Why did the employee bring string to work? To tie up loose ends.",
  "What do you call a bear with no teeth? A gummy bear.",
  "Why did the banana go to the doctor? It wasn’t peeling well.",
  "What do you call a sleeping bull? A bulldozer.",
  "Why did the student eat his test? Because his teacher said it was a piece of cake.",
  "What’s a pirate’s favorite letter? You’d think it’s R, but it’s the C.",
  "I’m reading a book about anti-gravity. It’s impossible to put down.",
  "Did you hear about the guy who got hit on the head with a can of soda? He was lucky it was a soft drink.",
  "What did the left eye say to the right eye? Between us, something smells.",
  "Why did the bicycle fall over? It was two-tired.",
  "How does a penguin build its house? Igloos it together.",
  "Why did the frog take the bus? His car got toad away.",
  "What’s a snowman’s favorite drink? Iced tea.",
  "Why did the pirate buy a hook? Because he wanted to accessorize.",
  "Why did the broom get a promotion? It swept all the competition.",
  "What’s a baker’s favorite exercise? Roll-ups.",
  "Why did the dolphin go to school? To improve his fin-ishing skills.",
  "What’s black, white, and red all over? A sunburnt penguin.",
  "Why don’t koalas count as bears? They don’t meet the koalafications.",
  "Why don’t ants get sick? They have tiny ant-bodies.",
  "Why did the computer go to therapy? It had too many bad sectors.",
  "Why did the photon check its luggage? It was traveling light.",
  "Why don’t grave diggers get bored? They’re always digging their job.",
  "I have a joke about death, but it’s too much of a *killer*.",
  "My doctor said I’m going deaf. That news was hard to hear.",
  "I’d tell you a joke about ghosts, but you wouldn’t see the humor in it.",
  "Why don’t vampires get jobs? They can’t handle the graveyard shift.",
  "What’s a skeleton’s favorite meal? Spare ribs.",
  "Why did the worker eat a clock? He wanted to kill some time.",
  "Why don’t skeletons play music in church? They don’t have organs.",
  "Why did the man put his money in the blender? He wanted to make some liquid assets.",
  "What’s a tree’s least favorite math problem? Logarithms.",
  "Why do mushrooms get invited to all the parties? They’re such fungi.",
  "What do you call a group of musical whales? An orca-stra.",
  "Why don’t skeletons work in offices? They lack the backbone.",
  "Why did the stapler cross the road? To bind papers on the other side.",
  "Why did the meeting go to the beach? To brainstorm.",
  "My office has the best coffee. It’s grounds for celebration.",
  "Why did the accountant bring a ladder? To reach the top of the balance sheet.",
  "Why do coworkers like photocopiers? They make great copies of themselves.",
  "What’s a ghost’s favorite dessert? Ice scream.",
  "Why did the banker switch careers? He lost interest.",
  "What’s orange and sounds like a parrot? A carrot.",
  "Why do ducks have feathers? To cover their butt quacks.",
  // Additional jokes
  "Why did the bicycle fall over? Because it was two-tired!",
  "I told my wife she was drawing her eyebrows too high. She looked surprised.",
  "I used to play piano by ear, but now I use my hands.",
  "Why did the belt get arrested? For holding up a pair of pants!",
  "How does a snowman get around? By riding an ‘icicle’!",
  "What do you get when you cross a computer with an elephant? Lots of memory!",
  "Why don’t seagulls fly over the bay? Because then they’d be bagels.",
  "What’s a skeleton’s least favorite room? The living room!",
  "I couldn’t figure out how to put my seatbelt on. Then it clicked.",
  "What did the grape do when it got stepped on? Nothing but let out a little wine!",
];
const jokeButton=document.getElementById('jokeButton');
const jokeParagraph=document.getElementById('joke');

const getRandomJoke=()=>{
  let randomJokesIndex=Math.floor(Math.random()*jokes.length);
  let randomJoke=jokes[randomJokesIndex];
  jokeParagraph.textContent=randomJoke;
};
jokeButton.addEventListener('click',getRandomJoke);

