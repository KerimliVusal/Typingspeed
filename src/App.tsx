import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import {IoRefresh} from 'react-icons/io5'
import {FcAlarmClock} from 'react-icons/fc'
import { useState,useRef } from 'react';
import Footer from './footer';
import Navba from './navbar';
import Swal from 'sweetalert2'
import log1 from './speedtype.png'
import Loa from './Loa';
function App() {
  const intervalID=useRef<any>();
  const inpta=useRef<any>();
  const refbtn=useRef<any>();
  const[count,setCount]=useState<number>(0)
  const[period,setPeriod]=useState<number>()
  const[light,setLight]=useState<any>()
  const[typewords,setTypewords]=useState<any>()
  const[typewords2,setTypewords2]=useState<any>(false)
  const[refes,setRefres]=useState<any>()
  const[disinpt,setDisinpt]=useState<any>()
  const[words,setWords]=useState<any>([])
  const[startb,setStartb]=useState<any>(false)
  const[loa,setLoa]=useState<any>(true)
  const[wpk,setWpk]=useState<number>(0)
  const[correctword,setCorrectword]=useState<string>('currentword')
   useEffect(()=>{
    setTimeout(()=>{
      setLoa(false)
    },6000)
   },[])
   const RandomWords=()=>{
    

   var topWords = ["ability", "able", "about", "above", "accept", "according", "account", "across", "action", "activity", "actually",  "address", "administration", "admit", "adult", "affect", "after", "again", "against",  "agency", "agent", "ago", "agree", "agreement", "ahead",  "allow", "almost", "alone", "along", "already", "also", "although", "always", "American", "among", "amount", "analysis", "and", "animal", "another", "answer",  "anyone", "anything", "appear", "apply", "approach", "area", "argue",  "around", "arrive", "article", "artist",  "assume", "attack", "attention", "attorney", "audience", "author", "authority", "available", "avoid", "away", "baby", "back",   "ball", "bank",  "beat", "beautiful", "because", "become",  "before", "begin", "behavior", "behind", "believe", "benefit", "best", "better", "between", "beyond",  "bill", "billion",  "black", "blood", "blue", "board", "body", "book", "born", "both", "break", "bring", "brother", "budget", "build", "building", "business", "call", "camera", "campaign",  "cancer", "candidate", "capital", "card", "care", "career", "carry", "case", "catch", "cause", "cell", "center", "central", "century", "certain", "certainly", "chair", "challenge", "chance", "change", "character", "charge", "check", "child", "choice", "choose", "church", "citizen", "city", "civil", "claim", "class", "clear", "clearly", "close", "coach", "cold", "collection", "college", "color", "come", "commercial", "common", "community", "company", "compare", "computer", "concern", "condition", "conference", "congress", "consider", "consumer", "contain", "continue", "control", "cost", "could", "country", "couple", "course", "court", "cover", "create", "crime", "cultural", "culture", "cup", "current", "customer",  "dark", "data", "daughter",  "dead", "deal", "death", "debate", "decade", "decide", "decision", "deep", "defense", "degree", "Democrat", "democratic", "describe", "design", "despite", "detail", "determine", "develop", "development",  "difference", "different", "difficult", "dinner", "direction", "director", "discover", "discuss", "discussion", "disease", "doctor",  "door", "down", "draw", "dream", "drive", "drop", "drug", "during", "each", "early", "east", "easy",  "economic", "economy", "edge", "education", "effect", "effort", "eight", "either", "election", "else", "employee",  "energy", "enjoy", "enough", "enter", "entire", "environment", "environmental", "especially", "establish", "even", "evening", "event", "ever", "every", "everybody", "everyone", "everything", "evidence", "exactly", "example", "executive", "exist", "expect", "experience", "expert", "explain", "eye", "face", "fact", "factor", "fail", "fall", "family", "far", "fast", "father", "fear", "federal", "feel", "feeling",  "field", "fight", "figure", "fill", "film", "final", "finally", "financial", "find", "fine", "finger", "finish", "fire", "firm", "first", "fish", "five", "floor", "fly", "focus", "follow", "food", "foot",  "force", "foreign", "forget", "form", "former", "forward", "four", "free", "friend", "from", "front", "full", "fund", "future", "game", "garden",  "general", "generation",  "girl", "give", "glass", "goal", "good", "government", "great", "green", "ground", "group", "grow", "growth", "guess", "guy", "hair", "half", "hand", "hang", "happen", "happy", "hard", "have",  "head", "health", "hear", "heart", "heat", "heavy", "help", "here", "herself", "high", "him", "himself", "his", "history",  "hold", "home", "hope", "hospital", "hot", "hotel", "hour", "house", "how", "however", "huge", "human", "hundred", "husband", "I", "idea", "identify", "if", "image", "imagine", "impact", "important", "improve",  "include", "including", "increase", "indeed", "indicate", "individual", "industry", "information", "inside", "instead", "institution", "interest", "interesting", "international", "interview", "into", "investment", "involve", "issue",  "item", "it's", "itself", "join", "just", "keep",  "kill", "kind", "kitchen", "know", "knowledge", "land", "language", "large", "last", "late", "later", "laugh", "law", "lawyer", "lead", "leader", "learn", "least", "leave", "left",  "legal", "less",  "letter", "level",  "life", "light", "like", "likely", "line", "list", "listen", "little", "live", "local", "long", "look", "lose", "loss", "love", "machine", "magazine", "main", "maintain", "major", "majority", "make", "man", "manage", "management", "manager", "many", "market", "marriage", "material", "matter", "maybe",  "mean", "measure", "media", "medical", "meet", "meeting", "member", "memory", "mention", "message", "method", "middle", "might", "military", "million", "mind", "minute", "miss", "mission", "model", "modern", "moment", "money", "month", "more", "morning", "most", "mother", "mouth", "move", "movement", "movie", "Mr", "Mrs", "much", "music", "must", "my", "myself", "name", "nation", "national", "natural", "nature", "near", "nearly", "necessary", "need", "network", "never",  "news", "newspaper", "next", "nice", "night",  "none",  "north",  "note", "nothing", "notice",  "number", "occur", "off", "offer", "office", "officer", "official", "often", "once", "only", "onto", "open", "operation", "opportunity", "option",  "order", "organization", "other", "others",  "outside", "over", "own", "owner", "page", "pain", "painting", "paper", "parent", "part", "participant", "particular", "particularly", "partner", "party", "pass", "past", "patient", "pattern", "peace", "people", "perform", "performance", "perhaps", "period", "person", "personal", "phone", "physical", "pick", "picture", "piece", "place", "plan", "plant", "play", "player", "PM", "point", "police", "policy", "political", "politics", "poor", "popular", "population", "position", "positive", "possible", "power", "practice", "prepare", "present", "president", "pressure", "pretty", "prevent", "price", "private", "probably", "problem", "process", "produce", "product", "production", "professional", "professor", "program", "project", "property", "protect", "prove", "provide", "public", "pull", "purpose", "push",  "quality", "question", "quickly", "quite", "race", "radio", "raise", "range", "rate", "rather", "reach", "read", "ready", "real", "reality", "realize", "really", "reason", "receive", "recent", "recently", "recognize", "record", "red", "reduce", "reflect", "region", "relate", "relationship", "religious", "remain", "remember", "remove", "report", "represent", "republican", "require", "research", "resource", "respond", "response", "responsibility", "rest", "result", "return", "reveal", "rich", "right", "rise", "risk", "road", "rock", "role", "room", "rule",  "safe", "same", "save",  "scene", "school", "science", "scientist", "score", "sea", "season", "seat", "second", "section", "security", "see", "seek", "seem", "sell", "send", "senior", "sense", "series", "serious", "serve", "service", "set", "seven", "several", "sex", "sexual", "shake", "share", "she", "shoot", "short", "shot", "should", "shoulder", "show", "side", "sign", "significant", "similar", "simple", "simply", "since", "sing", "single", "sister",   "situation", "size", "skill", "skin", "small", "smile",  "social", "society", "soldier", "some", "somebody", "someone", "something", "sometimes", "song", "soon", "sort", "sound", "source", "south", "southern", "space", "speak", "special", "specific", "speech", "spend", "sport", "spring", "staff", "stage", "stand", "standard", "star", "start", "state", "statement", "station", "stay", "step", "still", "stock", "stop", "store", "story", "strategy", "street", "strong", "structure", "student", "study", "stuff", "style", "subject", "success", "successful", "such", "suddenly", "suffer", "suggest", "summer", "support", "sure", "surface", "system", "table", "take", "talk", "task", "tax", "teach", "teacher", "team", "technology", "television", "tell",  "tend", "term", "test", "than", "thank", "that",  "their", "them", "themselves", "then", "theory", "there", "these", "they", "thing", "think", "third", "this", "those", "though", "thought", "thousand", "threat", "three", "through", "throughout", "throw", "thus", "time", "today", "together", "tonight",  "total", "tough", "toward", "town", "trade", "traditional", "training", "travel", "treat", "treatment", "tree", "trial", "trip", "trouble", "true", "truth", "try", "turn", "TV",  "type", "under", "understand", "unit", "until", "usually", "value", "various", "very", "victim", "view", "violence", "visit", "voice", "vote", "wait", "walk", "wall", "want",  "watch", "water",  "weapon", "wear", "week", "weight", "well", "west", "western", "what", "whatever", "when", "where", "whether", "which", "while", "white",  "whole", "whom", "whose",  "wide", "wife", "will", "wind", "window", "wish", "with", "within", "without", "woman", "wonder", "word", "work", "worker", "world", "worry", "would", "write", "writer", "wrong", "yard", "yeah", "year", "young", "your", "yourself"];


  var basicWords = ["a", "about", "above", "across", "act",  "add", "afraid", "after", "again", "age", "ago", "agree", "air", "all", "alone", "along", "always", "am", "amount", "an", "and", "angry", "another", "answer", "any", "anyone",  "appear", "apple", "are", "area", "arm", "army", "around", "arrive", "art", "as", "ask", "at", "aunt",  "away", "baby", "back", "bad", "bag", "ball", "bank", "base",  "bath", "be", "bean", "bear",  "bed", "beer", "before", "begin", "bell", "below", "best", "big", "bird", "birth",  "bit", "bite", "black", "bleed", "block", "blood", "blow", "blue", "board", "boat", "body", "boil", "bone", "book", "border", "born", "both",  "bowl", "box", "boy", "branch", "brave", "bread", "break", "breathe", "bridge", "bright", "bring", "brother", "brown", "brush", "build", "burn",  "bus", "busy", "but", "buy", "by", "cake", "call", "can",  "cap", "car", "card", "care", "carry", "case", "cat", "catch",  "chair", "chase", "cheap", "cheese",  "child",   "choice",  "circle", "city", "class", "clever", "clean", "clear", "climb", "clock", "cloth",  "cloud",  "close", "coffee", "coat", "coin", "cold",  "colour", "comb",  "common", "compare", "come",  "control", "cook", "cool", "copper", "corn", "corner", "correct", "cost",  "count",   "cover", "crash", "cross", "cry", "cup",  "cut", "dance",  "dark",  "day", "dead", "decide", "deep", "deer",  "desk",   "die",  "dirty",  "dish", "do", "dog", "door",  "down", "draw", "dream", "dress", "drink", "drive", "drop", "dry", "duck", "dust", "duty", "each", "ear", "early", "earn", "earth", "east", "easy", "eat", "effect", "egg", "eight",   "else", "empty", "end", "enemy", "enjoy",  "enter", "equal",  "even",  "event", "ever", "every",  "exact",   "except",  "expect",  "explain",  "eye", "face", "fact", "fail", "fall", "false", "family", "famous", "far", "farm",  "fast", "fat", "fault", "fear", "feed", "feel", "fever", "few", "fight", "fill", "film", "find", "fine",  "fire", "first", "fish", "fit", "five", "fix", "flag", "flat", "float", "floor", "flour",  "fly", "fold", "food", "fool", "foot", "for", "force",  "forest", "forget",  "fork", "form", "fox", "four", "free", "freeze", "fresh", "friend",  "from", "front", "fruit", "full", "fun", "funny",   "future", "game",  "gate","get", "gift", "give", "glad", "glass", "go", "goat", "god", "gold", "good",   "grass", "grave", "great", "green", "gray",  "group", "grow", "gun", "hair", "half", "hall",  "hand",  "happy", "hard", "hat", "hate", "have", "he", "head",  "hear", "heavy", "heart",  "hello", "help", "hen", "her", "here", "hers", "hide", "high", "hill", "him", "his", "hit", "hobby", "hold", "hole",  "home", "hope", "horse",  "hot", "hotel", "house", "how",  "hour", "hurry",  "hurt", "I", "ice", "idea", "if",  "in",   "into", "invent", "iron",  "is", "island", "it", "its", "jelly", "job", "join", "juice", "jump", "just", "keep", "key", "kill", "kind", "king",  "knee", "knife", "knock", "know", "lady", "lamp", "land", "large", "last", "late", "laugh", "lazy", "lead", "leaf", "learn", "leave", "leg", "left", "lend", "length", "less", "lesson", "let", "letter", "lie", "life", "light", "like", "lion", "lip", "list",  "live", "lock", "lonely", "long", "look", "lose", "lot", "love", "low", "lower", "luck",  "main", "make", "male", "man", "many", "map", "mark", "may", "me", "meal", "mean", "meat",  "meet",  "milk", "mind",  "miss",  "mix", "model",   "money",  "month", "moon", "more",  "most",  "mouth", "move", "much", "music", "must", "my", "name",  "near", "neck", "need", "needle",  "net", "never", "new", "news",  "next", "nice", "night", "nine", "no", "noble", "noise", "none", "nor", "north", "nose", "not",  "notice", "now",  "obey",  "ocean", "of", "off", "offer", "office", "often", "oil", "old", "on", "one", "only", "open",  "or", "orange", "order", "other", "our", "out",  "over", "own", "page", "pain", "paint", "pair", "pan", "paper",  "park", "part",  "party", "pass", "past", "path", "pay", "peace", "pen",   "per",  "piano", "pick",  "piece", "pig", "pin", "pink", "place", "plane", "plant",  "plate", "play", "please",  "plenty",  "point",  "polite", "pool", "poor",    "pour", "power",  "press", "pretty",  "price", "prince", "prison",  "prize",      "pull", "punish", "pupil", "push", "put", "queen",  "quick", "quiet", "radio", "rain", "rainy", "raise", "reach", "read", "ready", "real",  "red",   "rent",   "reply", "rest",  "rice", "rich", "ride", "right", "ring", "rise", "road", "rob", "rock", "room", "round", "rude", "rule", "ruler", "run", "rush", "sad", "safe", "sail", "salt", "same", "sand", "save", "say", "school",  "search", "seat", "second", "see", "seem", "sell", "send",  "serve", "seven", "sex", "shade",  "shake", "shape", "share", "sharp", "she", "sheep", "sheet",  "shine", "ship", "shirt", "shoe", "shoot", "shop", "short",   "shout", "show", "sick", "side",   "silly", "silver",  "simple", "single", "since", "sing", "sink", "sister", "sit", "six", "size", "skill", "skin", "skirt", "sky", "sleep", "slip", "slow", "small", "smell", "smile", "smoke", "snow", "so", "soap", "sock", "soft", "some",  "son", "soon", "sorry", "sound", "soup", "south", "space", "speak",  "speed", "spell", "spend", "spoon", "sport", "spread", "spring", "square", "stamp", "stand", "star", "start",  "stay", "steal", "steam", "step", "still",  "stone", "stop", "store", "storm", "story",  "street", "study", "stupid",  "such", "sugar",  "sun", "sunny",  "sure",  "sweet", "swim", "sword", "table", "take", "talk", "tall", "taste", "taxi", "tea", "teach", "team", "tear",   "tell", "ten", "tennis", "test", "than", "that", "the", "their", "then", "there",  "these", "thick", "thin", "thing", "think", "third", "this",  "threat", "three", "tidy", "tie", "title", "to", "today", "toe", "too", "tool", "tooth", "top", "total", "touch", "town", "train", "tram",  "tree",  "true", "trust", "twice", "try", "turn", "type", "ugly", "uncle", "under",  "unit", "until", "up", "use", "useful", "usual", "usually",  "very",  "voice", "visit", "wait", "wake", "walk", "want", "warm", "was", "wash", "waste", "watch", "water", "way", "we", "weak", "wear",  "week", "weight",  "were", "well", "west", "wet", "what", "wheel", "when", "where", "which", "while", "white", "who", "why", "wide", "wife", "wild", "will", "win", "wind",  "wine",  "wire", "wise", "wish", "with",  "woman",  "word", "work", "world", "worry", "yard", "yell",  "yet", "you", "young", "your", "zero", "zoo"];
  
    // if(diff==1){
    //  wordArray = basicWords;
    // }
    // else{
    //    wordArray =topWords;
    // }
    

    for(var i=0;i<40;i++){
      var randomNumber= Math.floor(Math.random()*basicWords.length);
      var b=[],a=[]
      // let be=selectedWords.push(wordArray[randomNumber]+" ");
      if(typewords==true&&words.length<40){
       let te=words.push(basicWords[randomNumber]+" ")
       setWords([...words])
       setTypewords(true)
      }
      else if(typewords2==true&&words.length<40 ){
         let be=words.push(topWords[randomNumber]+" ")
         setWords([...words])

      }
      else if(words.length>=40){
        setWords([])

      }
      
      
       }
      
      //  setWords([words])
      
}
  const start=()=>{
    setStartb(()=>!startb)
       inpta.current=document.querySelector<HTMLInputElement>('.inpt')!;
     let times=document.querySelector<HTMLElement>('.selecttime')!;
      times.style.visibility='hidden';
      inpta.current.disabled=false

    let a:number
    if(period===30){
      a=30;
    } 
    else if(period===60){
      a=60
     

    }
     intervalID.current=setInterval(()=>{
      if(a===0){
        clearInterval(intervalID.current)
        // startbtn.style.display='block';
    //     times.style.visibility='visible';
    //   //  setDisinpt(true)
      inpta.current.disabled=true
      setStartb(false)
      inpta.current.value=''
      }
     
      setCount(a)
       a-=1;
    },1000)
    setCount(count)
  }
const easy=()=>{
  setTypewords(()=>!typewords)
  setTypewords2(false)
  
 
}
const hard=()=>{
  setTypewords2(()=>!typewords2)
  setTypewords(false)
  
 
 
}
const refres=()=>{
  Swal.fire({
    // title: 'Typing Speed Result:',
    // 
    
    
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuX2dHcmkkpCt7MsQV5nyA_UkRaqEmXrZxyg&usqp=CAU',
imageWidth: 300,
imageHeight: 150,
imageAlt: 'Custom image',
title: `Typing Speed Result:${wpk}`,


  })

  // let startbt=document.querySelector<HTMLElement>('.btn')!;
   let tim=document.querySelector<HTMLElement>('.selecttime')!;
   inpta.current=document.querySelector<HTMLInputElement>('.inpt')!;
   setStartb(false)
   setWpk(0);


  
  // startbt.style.display='block';
    tim.style.visibility='visible';
  // // setWords([])
    inpta.current.disabled=true
    inpta.current.value=''

    // const re=(event:React.ChangeEvent<HTMLInputElement>)=>{
    //   inpta.current.value=''
    // }
    
     
  //  inpta.current.focus()
   setPeriod(0)
   setDisinpt(()=>!disinpt)
   setCount(0)
   setTypewords(false) 
   setTypewords2(false) 
   setWords([])
  // setRefres(true)
  clearInterval(intervalID.current)
}
const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
// setWordse(()=>event.target.value)
 inpta.current=document.querySelector<HTMLInputElement>('.inpt')!
setCorrectword('currentword')
let enteredword=event.target.value
for(let i=0;i<40;i++){
  let sp=document.querySelector<HTMLElement>(`#id${i}`)!;
if(enteredword===words[i].toString()){
  event.target.value='';
  // alert(`correct word : ${wpk}`);
  // event.target.value=''
let k=wpk+1;
setWpk(k);
setCorrectword('currentword')
sp.style.color='green'
}
else if(i===wpk&&!words[i].toString().includes(enteredword)) {
  //  alert('false');
    //  setCorrectword('falseword')
    // let a=i;
     let spt=document.querySelector<HTMLElement>(`#id${i}`)!;
     spt.style.color='red'

}  
else if(i===wpk&&words[i].toString().includes(enteredword)) {
  //  alert('false');
    //  setCorrectword('falseword')
    // let a=i;
     let spt=document.querySelector<HTMLElement>(`#id${i}`)!;
     spt.style.color='white'

}  

}
}


useEffect(()=>{
  RandomWords();
},[typewords||typewords2])
 
  console.log(words)
  return (
    <div className="App">
      {loa==true?<Loa/>:<div> 
      <Navba setLight={setLight}/>
     <h2 className='typeh2'>Typing Test</h2>
     <div className='selecttime'><div className='timebuton'><button onClick={()=>{setPeriod(30);setCount(30);}}>30s</button><button onClick={()=>{setPeriod(60);setCount(60);}}>60s</button></div>
     <div className='selectdifficulty'><button onClick={()=>{easy();}}>Easy</button><button onClick={()=>{hard();}}>Hard</button></div>
     </div>
     <div className='timearea'><div className='timecounter'><span className='timespan2'><span className='timespan'>Time</span><span className='timespan3'>{period?count:'0'}s </span></span></div>
       <div className='speedtimer'><span className='speedspan1'><span className='speedspan2'>wpm</span>{wpk}</span></div>
     </div>
    <div className='randomtext'>
     {typewords||typewords2?<p>{words.map((entword:any,index:number)=>(
      <span key={index} className={index==wpk?correctword:''} id={`id${index}`}>{entword}</span>
     ))}</p>:''}
    </div>
    <div className='inputfield'><input ref={inpta} type='text' placeholder='start to type' className='inpt' disabled={true} onChange={(event)=>handleChange(event)}/></div>
    <div className='startbutton'>{count!==0&&typewords==true&&startb===false||count!==0&&typewords2===true&&startb===false?<button onClick={()=>{start()}} className={light===true?'btn1':'btn2'}>Start</button>:''}<button onClick={()=>refres()}><IoRefresh size={25} className={light===true?'btn1':'btn2'}></IoRefresh></button></div>
    <Footer/></div>}
    </div>
   
  );
}

export default App;
