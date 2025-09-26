/*************** 
 * Tester *
 ***************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2024.2.4.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'Tester';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
const Trial_1LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(Trial_1LoopBegin(Trial_1LoopScheduler));
flowScheduler.add(Trial_1LoopScheduler);
flowScheduler.add(Trial_1LoopEnd);


flowScheduler.add(GoodbyeRoutineBegin());
flowScheduler.add(GoodbyeRoutineEachFrame());
flowScheduler.add(GoodbyeRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'ImageW.png', 'path': 'ImageW.png'},
    {'name': 'ImageTouchX.png', 'path': 'ImageTouchX.png'},
    {'name': 'Image3.png', 'path': 'Image3.png'},
    {'name': 'ImageG.png', 'path': 'ImageG.png'},
    {'name': 'ImageAdducted5.png', 'path': 'ImageAdducted5.png'},
    {'name': 'ImageB.png', 'path': 'ImageB.png'},
    {'name': 'Image5.png', 'path': 'Image5.png'},
    {'name': 'Image8.png', 'path': 'Image8.png'},
    {'name': 'ImageA.png', 'path': 'ImageA.png'},
    {'name': 'ImageOpen8.png', 'path': 'ImageOpen8.png'},
    {'name': 'ImageH_URadial.png', 'path': 'ImageH_URadial.png'},
    {'name': 'ImageK.png', 'path': 'ImageK.png'},
    {'name': 'Image1.png', 'path': 'Image1.png'},
    {'name': 'ImageY.png', 'path': 'ImageY.png'},
    {'name': 'ImageU.png', 'path': 'ImageU.png'},
    {'name': 'ImageF.png', 'path': 'ImageF.png'},
    {'name': 'ImageE.png', 'path': 'ImageE.png'},
    {'name': 'ImageCurved3.png', 'path': 'ImageCurved3.png'},
    {'name': 'Image4.png', 'path': 'Image4.png'},
    {'name': 'ImageUlnar1.png', 'path': 'ImageUlnar1.png'},
    {'name': 'ImageCurvedV.png', 'path': 'ImageCurvedV.png'},
    {'name': 'ImageFlatO.png', 'path': 'ImageFlatO.png'},
    {'name': 'ImageS.png', 'path': 'ImageS.png'},
    {'name': 'Imagei.png', 'path': 'Imagei.png'},
    {'name': 'Image10.png', 'path': 'Image10.png'},
    {'name': 'ImageO.png', 'path': 'ImageO.png'},
    {'name': 'ImageCurvedL.png', 'path': 'ImageCurvedL.png'},
    {'name': 'ImageC.png', 'path': 'ImageC.png'},
    {'name': 'ImageCurved5.png', 'path': 'ImageCurved5.png'},
    {'name': 'ImageL.png', 'path': 'ImageL.png'},
    {'name': 'ImageV.png', 'path': 'ImageV.png'},
    {'name': 'ImageX.png', 'path': 'ImageX.png'},
    {'name': 'ImageAdductedBent5.png', 'path': 'ImageAdductedBent5.png'},
    {'name': 'ImageR.png', 'path': 'ImageR.png'},
    {'name': 'ImageD.png', 'path': 'ImageD.png'},
    {'name': 'ImageUlnarL.png', 'path': 'ImageUlnarL.png'},
    {'name': 'Test_book.xlsx', 'path': 'Test_book.xlsx'},
    {'name': 'Noisy_90.mp4', 'path': 'Noisy_90.mp4'},
    {'name': 'My Movie.mp4', 'path': 'My Movie.mp4'},
    {'name': '90_1_Elbow_Circle_Down24.mp4', 'path': '90_1_Elbow_Circle_Down24.mp4'},
    {'name': '90_4_Elbow_Circle_Forward22.mp4', 'path': '90_4_Elbow_Circle_Forward22.mp4'},
    {'name': '90_5_Neutral_Twist_Forward1.mp4', 'path': '90_5_Neutral_Twist_Forward1.mp4'},
    {'name': '90_Adducted_5_Mouth_Twist_Down12.mp4', 'path': '90_Adducted_5_Mouth_Twist_Down12.mp4'},
    {'name': '90_Curved_V_Elbow_Twist_Down23.mp4', 'path': '90_Curved_V_Elbow_Twist_Down23.mp4'},
    {'name': '1_ulnar.jpg', 'path': '1_ulnar.jpg'},
    {'name': '1.jpg', 'path': '1.jpg'},
    {'name': '3.jpg', 'path': '3.jpg'},
    {'name': '4.jpg', 'path': '4.jpg'},
    {'name': '5.jpg', 'path': '5.jpg'},
    {'name': '8.jpg', 'path': '8.jpg'},
    {'name': '10.jpg', 'path': '10.jpg'},
    {'name': 'A.jpg', 'path': 'A.jpg'},
    {'name': 'H_U_radial.jpg', 'path': 'H_U_radial.jpg'},
    {'name': 'Adducted_5.jpg', 'path': 'Adducted_5.jpg'},
    {'name': 'Adducted_5_bent.jpg', 'path': 'Adducted_5_bent.jpg'},
    {'name': 'B.jpg', 'path': 'B.jpg'},
    {'name': '3_curved.jpg', 'path': '3_curved.jpg'},
    {'name': 'L_curved.jpg', 'path': 'L_curved.jpg'},
    {'name': 'V_curved.jpg', 'path': 'V_curved.jpg'},
    {'name': 'X_touch.jpg', 'path': 'X_touch.jpg'},
    {'name': 'C.jpg', 'path': 'C.jpg'},
    {'name': '5_curved.jpg', 'path': '5_curved.jpg'},
    {'name': 'D.jpg', 'path': 'D.jpg'},
    {'name': 'E.jpg', 'path': 'E.jpg'},
    {'name': 'F.jpg', 'path': 'F.jpg'},
    {'name': 'Flat_O.jpg', 'path': 'Flat_O.jpg'},
    {'name': 'G.jpg', 'path': 'G.jpg'},
    {'name': 'i.jpg', 'path': 'i.jpg'},
    {'name': 'K.jpg', 'path': 'K.jpg'},
    {'name': 'L_ulnar.jpg', 'path': 'L_ulnar.jpg'},
    {'name': 'L.jpg', 'path': 'L.jpg'},
    {'name': 'O.jpg', 'path': 'O.jpg'},
    {'name': '8_radial.jpg', 'path': '8_radial.jpg'},
    {'name': 'R.jpg', 'path': 'R.jpg'},
    {'name': 'S.jpg', 'path': 'S.jpg'},
    {'name': 'H_U.jpg', 'path': 'H_U.jpg'},
    {'name': 'V.jpg', 'path': 'V.jpg'},
    {'name': 'W.jpg', 'path': 'W.jpg'},
    {'name': 'X.jpg', 'path': 'X.jpg'},
    {'name': 'Y.jpg', 'path': 'Y.jpg'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.2.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var trialClock;
var Black_ScreenClock;
var Black_Screen;
var Noisy_1Clock;
var Noisy_1;
var HS_vidsClock;
var HS_vids;
var Noisy_2Clock;
var Noisy_2;
var One_ulnar;
var One;
var three;
var four;
var five;
var eight;
var ten;
var a;
var add_3;
var add_5;
var add_bent_5;
var b;
var bent_3;
var bent_l;
var bent_v;
var touch_x;
var c;
var curved_5;
var d;
var e;
var f;
var flat_o;
var g;
var i;
var k;
var l_ulnar;
var l;
var o;
var open_8;
var r;
var s;
var u_h;
var v;
var w;
var x;
var y;
var mouse_2;
var GoodbyeClock;
var ExitText;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  Black_ScreenClock = new util.Clock();
  Black_Screen = new visual.MovieStim({
    win: psychoJS.window,
    name: 'Black_Screen',
    units: psychoJS.window.units,
    movie: 'My Movie.mp4',
    pos: [0, 0],
    anchor: 'center',
    size: [2.0, 2.0],
    ori: 0.0,
    opacity: undefined,
    loop: false,
    noAudio: false,
    depth: 0
    });
  Noisy_1Clock = new util.Clock();
  Noisy_1 = new visual.MovieStim({
    win: psychoJS.window,
    name: 'Noisy_1',
    units: psychoJS.window.units,
    movie: 'Noisy_90.mp4',
    pos: [0, 0],
    anchor: 'center',
    size: [2.0, 2.0],
    ori: 0.0,
    opacity: undefined,
    loop: false,
    noAudio: false,
    depth: -1
    });
  HS_vidsClock = new util.Clock();
  HS_vids = new visual.MovieStim({
    win: psychoJS.window,
    name: 'HS_vids',
    units: psychoJS.window.units,
    movie: undefined,
    pos: [0, 0],
    anchor: 'center',
    size: [1.0, 1.0],
    ori: 0.0,
    opacity: undefined,
    loop: false,
    noAudio: false,
    depth: -2
    });
  Noisy_2Clock = new util.Clock();
  Noisy_2 = new visual.MovieStim({
    win: psychoJS.window,
    name: 'Noisy_2',
    units: psychoJS.window.units,
    movie: 'Noisy_90.mp4',
    pos: [0, 0],
    anchor: 'center',
    size: [2.0, 2.0],
    ori: 0.0,
    opacity: undefined,
    loop: false,
    noAudio: false,
    depth: -3
    });
  One_ulnar = new visual.ImageStim({
    win : psychoJS.window,
    name : 'One_ulnar', units : undefined, 
    image : '1_ulnar.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.08), (- 0.08)], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  One = new visual.ImageStim({
    win : psychoJS.window,
    name : 'One', units : undefined, 
    image : '1.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.08), 0.07], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  three = new visual.ImageStim({
    win : psychoJS.window,
    name : 'three', units : undefined, 
    image : '3.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.23), (- 0.23)], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  four = new visual.ImageStim({
    win : psychoJS.window,
    name : 'four', units : undefined, 
    image : '4.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.23), (- 0.38)], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -7.0 
  });
  five = new visual.ImageStim({
    win : psychoJS.window,
    name : 'five', units : undefined, 
    image : '5.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.08), 0.22], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -8.0 
  });
  eight = new visual.ImageStim({
    win : psychoJS.window,
    name : 'eight', units : undefined, 
    image : '8.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.07, (- 0.08)], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -9.0 
  });
  ten = new visual.ImageStim({
    win : psychoJS.window,
    name : 'ten', units : undefined, 
    image : '10.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.23), (- 0.08)], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -10.0 
  });
  a = new visual.ImageStim({
    win : psychoJS.window,
    name : 'a', units : undefined, 
    image : 'A.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.22, (- 0.08)], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -11.0 
  });
  add_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'add_3', units : undefined, 
    image : 'H_U_radial.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.38), (- 0.08)], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -12.0 
  });
  add_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'add_5', units : undefined, 
    image : 'Adducted_5.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.23), 0.37], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -13.0 
  });
  add_bent_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'add_bent_5', units : undefined, 
    image : 'Adducted_5_bent.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.07, 0.07], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -14.0 
  });
  b = new visual.ImageStim({
    win : psychoJS.window,
    name : 'b', units : undefined, 
    image : 'B.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.23), 0.07], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -15.0 
  });
  bent_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'bent_3', units : undefined, 
    image : '3_curved.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.23), 0.22], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -16.0 
  });
  bent_l = new visual.ImageStim({
    win : psychoJS.window,
    name : 'bent_l', units : undefined, 
    image : 'L_curved.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.07, 0.22], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -17.0 
  });
  bent_v = new visual.ImageStim({
    win : psychoJS.window,
    name : 'bent_v', units : undefined, 
    image : 'V_curved.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.08), (- 0.23)], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -18.0 
  });
  touch_x = new visual.ImageStim({
    win : psychoJS.window,
    name : 'touch_x', units : undefined, 
    image : 'X_touch.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.38), (- 0.23)], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -19.0 
  });
  c = new visual.ImageStim({
    win : psychoJS.window,
    name : 'c', units : undefined, 
    image : 'C.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.38), (- 0.38)], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -20.0 
  });
  curved_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'curved_5', units : undefined, 
    image : '5_curved.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.22, 0.22], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -21.0 
  });
  d = new visual.ImageStim({
    win : psychoJS.window,
    name : 'd', units : undefined, 
    image : 'D.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.07, (- 0.23)], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -22.0 
  });
  e = new visual.ImageStim({
    win : psychoJS.window,
    name : 'e', units : undefined, 
    image : 'E.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.37, 0.22], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -23.0 
  });
  f = new visual.ImageStim({
    win : psychoJS.window,
    name : 'f', units : undefined, 
    image : 'F.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.07, 0.37], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -24.0 
  });
  flat_o = new visual.ImageStim({
    win : psychoJS.window,
    name : 'flat_o', units : undefined, 
    image : 'Flat_O.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.38), 0.07], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -25.0 
  });
  g = new visual.ImageStim({
    win : psychoJS.window,
    name : 'g', units : undefined, 
    image : 'G.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.08), 0.37], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -26.0 
  });
  i = new visual.ImageStim({
    win : psychoJS.window,
    name : 'i', units : undefined, 
    image : 'i.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.38), 0.22], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -27.0 
  });
  k = new visual.ImageStim({
    win : psychoJS.window,
    name : 'k', units : undefined, 
    image : 'K.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.22, 0.07], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -28.0 
  });
  l_ulnar = new visual.ImageStim({
    win : psychoJS.window,
    name : 'l_ulnar', units : undefined, 
    image : 'L_ulnar.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.37, 0.07], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -29.0 
  });
  l = new visual.ImageStim({
    win : psychoJS.window,
    name : 'l', units : undefined, 
    image : 'L.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.38), 0.37], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -30.0 
  });
  o = new visual.ImageStim({
    win : psychoJS.window,
    name : 'o', units : undefined, 
    image : 'O.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.22, (- 0.23)], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -31.0 
  });
  open_8 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'open_8', units : undefined, 
    image : '8_radial.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.22, 0.37], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -32.0 
  });
  r = new visual.ImageStim({
    win : psychoJS.window,
    name : 'r', units : undefined, 
    image : 'R.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.08), (- 0.38)], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -33.0 
  });
  s = new visual.ImageStim({
    win : psychoJS.window,
    name : 's', units : undefined, 
    image : 'S.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.07, (- 0.38)], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -34.0 
  });
  u_h = new visual.ImageStim({
    win : psychoJS.window,
    name : 'u_h', units : undefined, 
    image : 'H_U.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.37, (- 0.23)], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -35.0 
  });
  v = new visual.ImageStim({
    win : psychoJS.window,
    name : 'v', units : undefined, 
    image : 'V.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.37, (- 0.38)], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -36.0 
  });
  w = new visual.ImageStim({
    win : psychoJS.window,
    name : 'w', units : undefined, 
    image : 'W.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.37, (- 0.08)], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -37.0 
  });
  x = new visual.ImageStim({
    win : psychoJS.window,
    name : 'x', units : undefined, 
    image : 'X.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.37, 0.37], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -38.0 
  });
  y = new visual.ImageStim({
    win : psychoJS.window,
    name : 'y', units : undefined, 
    image : 'Y.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.22, (- 0.38)], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -39.0 
  });
  mouse_2 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_2.mouseClock = new util.Clock();
  // Initialize components for Routine "Goodbye"
  GoodbyeClock = new util.Clock();
  ExitText = new visual.TextStim({
    win: psychoJS.window,
    name: 'ExitText',
    text: 'Thank you for participating, please wait while we save your results... ',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var Trial_1;
function Trial_1LoopBegin(Trial_1LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    Trial_1 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'Test_book.xlsx',
      seed: undefined, name: 'Trial_1'
    });
    psychoJS.experiment.addLoop(Trial_1); // add the loop to the experiment
    currentLoop = Trial_1;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_1 of Trial_1) {
      snapshot = Trial_1.getSnapshot();
      Trial_1LoopScheduler.add(importConditions(snapshot));
      Trial_1LoopScheduler.add(trialRoutineBegin(snapshot));
      Trial_1LoopScheduler.add(trialRoutineEachFrame());
      Trial_1LoopScheduler.add(trialRoutineEnd(snapshot));
      Trial_1LoopScheduler.add(Trial_1LoopEndIteration(Trial_1LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function Trial_1LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(Trial_1);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function Trial_1LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var t;
var frameN;
var continueRoutine;
var trialMaxDurationReached;
var gotValidClick;
var trialMaxDuration;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trialClock.reset();
    routineTimer.reset();
    trialMaxDurationReached = false;
    // update component parameters for each repeat
    HS_vids.setMovie(HS_VIDS);
    // setup some python lists for storing info about the mouse_2
    // current position of the mouse:
    mouse_2.x = [];
    mouse_2.y = [];
    mouse_2.leftButton = [];
    mouse_2.midButton = [];
    mouse_2.rightButton = [];
    mouse_2.time = [];
    mouse_2.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('trial.started', globalClock.getTime());
    trialMaxDuration = null
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(Black_Screen);
    trialComponents.push(Noisy_1);
    trialComponents.push(HS_vids);
    trialComponents.push(Noisy_2);
    trialComponents.push(One_ulnar);
    trialComponents.push(One);
    trialComponents.push(three);
    trialComponents.push(four);
    trialComponents.push(five);
    trialComponents.push(eight);
    trialComponents.push(ten);
    trialComponents.push(a);
    trialComponents.push(add_3);
    trialComponents.push(add_5);
    trialComponents.push(add_bent_5);
    trialComponents.push(b);
    trialComponents.push(bent_3);
    trialComponents.push(bent_l);
    trialComponents.push(bent_v);
    trialComponents.push(touch_x);
    trialComponents.push(c);
    trialComponents.push(curved_5);
    trialComponents.push(d);
    trialComponents.push(e);
    trialComponents.push(f);
    trialComponents.push(flat_o);
    trialComponents.push(g);
    trialComponents.push(i);
    trialComponents.push(k);
    trialComponents.push(l_ulnar);
    trialComponents.push(l);
    trialComponents.push(o);
    trialComponents.push(open_8);
    trialComponents.push(r);
    trialComponents.push(s);
    trialComponents.push(u_h);
    trialComponents.push(v);
    trialComponents.push(w);
    trialComponents.push(x);
    trialComponents.push(y);
    trialComponents.push(mouse_2);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
var prevButtonState;
var _mouseButtons;
var _mouseXYs;
function trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial' ---
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Black_Screen* updates
    if (t >= 0.0 && Black_Screen.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Black_Screen.tStart = t;  // (not accounting for frame time here)
      Black_Screen.frameNStart = frameN;  // exact frame index
      
      Black_Screen.setAutoDraw(true);
      Black_Screen.play();
    }
    
    frameRemains = 0.0 + 4.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (Black_Screen.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Black_Screen.setAutoDraw(false);
    }
    
    
    // *Noisy_1* updates
    if (t >= 4.5 && Noisy_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Noisy_1.tStart = t;  // (not accounting for frame time here)
      Noisy_1.frameNStart = frameN;  // exact frame index
      
      Noisy_1.setAutoDraw(true);
      Noisy_1.play();
    }
    
    frameRemains = 4.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (Noisy_1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Noisy_1.setAutoDraw(false);
    }
    
    
    // *HS_vids* updates
    if (t >= 5.0 && HS_vids.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      HS_vids.tStart = t;  // (not accounting for frame time here)
      HS_vids.frameNStart = frameN;  // exact frame index
      
      HS_vids.setAutoDraw(true);
      HS_vids.play();
    }
    
    frameRemains = 5.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (HS_vids.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      HS_vids.setAutoDraw(false);
    }
    
    
    // *Noisy_2* updates
    if (t >= 6.0 && Noisy_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Noisy_2.tStart = t;  // (not accounting for frame time here)
      Noisy_2.frameNStart = frameN;  // exact frame index
      
      Noisy_2.setAutoDraw(true);
      Noisy_2.play();
    }
    
    frameRemains = 6.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (Noisy_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Noisy_2.setAutoDraw(false);
    }
    
    
    // *One_ulnar* updates
    if (t >= 6.6 && One_ulnar.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      One_ulnar.tStart = t;  // (not accounting for frame time here)
      One_ulnar.frameNStart = frameN;  // exact frame index
      
      One_ulnar.setAutoDraw(true);
    }
    
    
    // *One* updates
    if (t >= 6.6 && One.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      One.tStart = t;  // (not accounting for frame time here)
      One.frameNStart = frameN;  // exact frame index
      
      One.setAutoDraw(true);
    }
    
    
    // *three* updates
    if (t >= 6.6 && three.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      three.tStart = t;  // (not accounting for frame time here)
      three.frameNStart = frameN;  // exact frame index
      
      three.setAutoDraw(true);
    }
    
    
    // *four* updates
    if (t >= 6.6 && four.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      four.tStart = t;  // (not accounting for frame time here)
      four.frameNStart = frameN;  // exact frame index
      
      four.setAutoDraw(true);
    }
    
    
    // *five* updates
    if (t >= 6.6 && five.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      five.tStart = t;  // (not accounting for frame time here)
      five.frameNStart = frameN;  // exact frame index
      
      five.setAutoDraw(true);
    }
    
    
    // *eight* updates
    if (t >= 6.6 && eight.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      eight.tStart = t;  // (not accounting for frame time here)
      eight.frameNStart = frameN;  // exact frame index
      
      eight.setAutoDraw(true);
    }
    
    
    // *ten* updates
    if (t >= 6.6 && ten.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ten.tStart = t;  // (not accounting for frame time here)
      ten.frameNStart = frameN;  // exact frame index
      
      ten.setAutoDraw(true);
    }
    
    
    // *a* updates
    if (t >= 6.6 && a.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      a.tStart = t;  // (not accounting for frame time here)
      a.frameNStart = frameN;  // exact frame index
      
      a.setAutoDraw(true);
    }
    
    
    // *add_3* updates
    if (t >= 6.6 && add_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      add_3.tStart = t;  // (not accounting for frame time here)
      add_3.frameNStart = frameN;  // exact frame index
      
      add_3.setAutoDraw(true);
    }
    
    
    // *add_5* updates
    if (t >= 6.6 && add_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      add_5.tStart = t;  // (not accounting for frame time here)
      add_5.frameNStart = frameN;  // exact frame index
      
      add_5.setAutoDraw(true);
    }
    
    
    // *add_bent_5* updates
    if (t >= 6.6 && add_bent_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      add_bent_5.tStart = t;  // (not accounting for frame time here)
      add_bent_5.frameNStart = frameN;  // exact frame index
      
      add_bent_5.setAutoDraw(true);
    }
    
    
    // *b* updates
    if (t >= 6.6 && b.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      b.tStart = t;  // (not accounting for frame time here)
      b.frameNStart = frameN;  // exact frame index
      
      b.setAutoDraw(true);
    }
    
    
    // *bent_3* updates
    if (t >= 6.6 && bent_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bent_3.tStart = t;  // (not accounting for frame time here)
      bent_3.frameNStart = frameN;  // exact frame index
      
      bent_3.setAutoDraw(true);
    }
    
    
    // *bent_l* updates
    if (t >= 6.6 && bent_l.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bent_l.tStart = t;  // (not accounting for frame time here)
      bent_l.frameNStart = frameN;  // exact frame index
      
      bent_l.setAutoDraw(true);
    }
    
    
    // *bent_v* updates
    if (t >= 6.6 && bent_v.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bent_v.tStart = t;  // (not accounting for frame time here)
      bent_v.frameNStart = frameN;  // exact frame index
      
      bent_v.setAutoDraw(true);
    }
    
    
    // *touch_x* updates
    if (t >= 6.6 && touch_x.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      touch_x.tStart = t;  // (not accounting for frame time here)
      touch_x.frameNStart = frameN;  // exact frame index
      
      touch_x.setAutoDraw(true);
    }
    
    
    // *c* updates
    if (t >= 6.6 && c.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      c.tStart = t;  // (not accounting for frame time here)
      c.frameNStart = frameN;  // exact frame index
      
      c.setAutoDraw(true);
    }
    
    
    // *curved_5* updates
    if (t >= 6.6 && curved_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      curved_5.tStart = t;  // (not accounting for frame time here)
      curved_5.frameNStart = frameN;  // exact frame index
      
      curved_5.setAutoDraw(true);
    }
    
    
    // *d* updates
    if (t >= 6.6 && d.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      d.tStart = t;  // (not accounting for frame time here)
      d.frameNStart = frameN;  // exact frame index
      
      d.setAutoDraw(true);
    }
    
    
    // *e* updates
    if (t >= 6.6 && e.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      e.tStart = t;  // (not accounting for frame time here)
      e.frameNStart = frameN;  // exact frame index
      
      e.setAutoDraw(true);
    }
    
    
    // *f* updates
    if (t >= 6.6 && f.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      f.tStart = t;  // (not accounting for frame time here)
      f.frameNStart = frameN;  // exact frame index
      
      f.setAutoDraw(true);
    }
    
    
    // *flat_o* updates
    if (t >= 6.6 && flat_o.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      flat_o.tStart = t;  // (not accounting for frame time here)
      flat_o.frameNStart = frameN;  // exact frame index
      
      flat_o.setAutoDraw(true);
    }
    
    
    // *g* updates
    if (t >= 6.6 && g.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      g.tStart = t;  // (not accounting for frame time here)
      g.frameNStart = frameN;  // exact frame index
      
      g.setAutoDraw(true);
    }
    
    
    // *i* updates
    if (t >= 6.6 && i.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      i.tStart = t;  // (not accounting for frame time here)
      i.frameNStart = frameN;  // exact frame index
      
      i.setAutoDraw(true);
    }
    
    
    // *k* updates
    if (t >= 6.6 && k.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      k.tStart = t;  // (not accounting for frame time here)
      k.frameNStart = frameN;  // exact frame index
      
      k.setAutoDraw(true);
    }
    
    
    // *l_ulnar* updates
    if (t >= 6.6 && l_ulnar.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      l_ulnar.tStart = t;  // (not accounting for frame time here)
      l_ulnar.frameNStart = frameN;  // exact frame index
      
      l_ulnar.setAutoDraw(true);
    }
    
    
    // *l* updates
    if (t >= 6.6 && l.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      l.tStart = t;  // (not accounting for frame time here)
      l.frameNStart = frameN;  // exact frame index
      
      l.setAutoDraw(true);
    }
    
    
    // *o* updates
    if (t >= 6.6 && o.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      o.tStart = t;  // (not accounting for frame time here)
      o.frameNStart = frameN;  // exact frame index
      
      o.setAutoDraw(true);
    }
    
    
    // *open_8* updates
    if (t >= 6.6 && open_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      open_8.tStart = t;  // (not accounting for frame time here)
      open_8.frameNStart = frameN;  // exact frame index
      
      open_8.setAutoDraw(true);
    }
    
    
    // *r* updates
    if (t >= 6.6 && r.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      r.tStart = t;  // (not accounting for frame time here)
      r.frameNStart = frameN;  // exact frame index
      
      r.setAutoDraw(true);
    }
    
    
    // *s* updates
    if (t >= 6.6 && s.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      s.tStart = t;  // (not accounting for frame time here)
      s.frameNStart = frameN;  // exact frame index
      
      s.setAutoDraw(true);
    }
    
    
    // *u_h* updates
    if (t >= 6.6 && u_h.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      u_h.tStart = t;  // (not accounting for frame time here)
      u_h.frameNStart = frameN;  // exact frame index
      
      u_h.setAutoDraw(true);
    }
    
    
    // *v* updates
    if (t >= 6.6 && v.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      v.tStart = t;  // (not accounting for frame time here)
      v.frameNStart = frameN;  // exact frame index
      
      v.setAutoDraw(true);
    }
    
    
    // *w* updates
    if (t >= 6.6 && w.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      w.tStart = t;  // (not accounting for frame time here)
      w.frameNStart = frameN;  // exact frame index
      
      w.setAutoDraw(true);
    }
    
    
    // *x* updates
    if (t >= 6.6 && x.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      x.tStart = t;  // (not accounting for frame time here)
      x.frameNStart = frameN;  // exact frame index
      
      x.setAutoDraw(true);
    }
    
    
    // *y* updates
    if (t >= 6.6 && y.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      y.tStart = t;  // (not accounting for frame time here)
      y.frameNStart = frameN;  // exact frame index
      
      y.setAutoDraw(true);
    }
    
    // *mouse_2* updates
    if (t >= 0.0 && mouse_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_2.tStart = t;  // (not accounting for frame time here)
      mouse_2.frameNStart = frameN;  // exact frame index
      
      mouse_2.status = PsychoJS.Status.STARTED;
      mouse_2.mouseClock.reset();
      prevButtonState = mouse_2.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_2.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_2.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_2.clickableObjects = eval([One_ulnar, One, three, four, five, eight, ten, a, add_3, add_5, add_bent_5, b, bent_3, bent_l, bent_v, touch_x, c, curved_5, d, e, f, flat_o, g, i, k, l_ulnar, l, o, open_8, r, s, u_h, v, w, x, y])
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_2.clickableObjects)) {
              mouse_2.clickableObjects = [mouse_2.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_2.clickableObjects) {
              if (obj.contains(mouse_2)) {
                  gotValidClick = true;
                  mouse_2.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse_2.clicked_name.push(null);
          }
          _mouseXYs = mouse_2.getPos();
          mouse_2.x.push(_mouseXYs[0]);
          mouse_2.y.push(_mouseXYs[1]);
          mouse_2.leftButton.push(_mouseButtons[0]);
          mouse_2.midButton.push(_mouseButtons[1]);
          mouse_2.rightButton.push(_mouseButtons[2]);
          mouse_2.time.push(mouse_2.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial' ---
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial.stopped', globalClock.getTime());
    Black_Screen.stop();  // ensure movie has stopped at end of Routine
    Noisy_1.stop();  // ensure movie has stopped at end of Routine
    HS_vids.stop();  // ensure movie has stopped at end of Routine
    Noisy_2.stop();  // ensure movie has stopped at end of Routine
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_2.x', mouse_2.x);
    psychoJS.experiment.addData('mouse_2.y', mouse_2.y);
    psychoJS.experiment.addData('mouse_2.leftButton', mouse_2.leftButton);
    psychoJS.experiment.addData('mouse_2.midButton', mouse_2.midButton);
    psychoJS.experiment.addData('mouse_2.rightButton', mouse_2.rightButton);
    psychoJS.experiment.addData('mouse_2.time', mouse_2.time);
    psychoJS.experiment.addData('mouse_2.clicked_name', mouse_2.clicked_name);
    
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var GoodbyeMaxDurationReached;
var GoodbyeMaxDuration;
var GoodbyeComponents;
function GoodbyeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Goodbye' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    GoodbyeClock.reset();
    routineTimer.reset();
    GoodbyeMaxDurationReached = false;
    // update component parameters for each repeat
    //Dsiable downloading results to browser
    psychoJS._saveResults = 0;
    
    //Save data to filename
    let filename = psychoJS._experiment._experimentName + '_' + psychoJS._experiment._datetime + '.csv';
    
    //Extract data from experiment
    let dataObj = psychoJS._experiment._trialsData;
    
    //Convert data to csv 
    let data = [Object.keys(dataObj[0])].concat(dataObj).map(it => {
        return Object.values(it).toString()
    }).join('\n')
    
    //Send data tp OSF via datapipe
    console.log('Saving data...');
    fetch('https://pipe.jspsych.org/api/data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: '*/*',
        },
        body: JSON.stringify({ 
            experimentID:'XEHBnacidEKS'
        }),
    }).then(response => response.json()).then(data => {
        // log response and force experiment end
        console.log(data);
        quitPsychoJS();
    })
    psychoJS.experiment.addData('Goodbye.started', globalClock.getTime());
    GoodbyeMaxDuration = null
    // keep track of which components have finished
    GoodbyeComponents = [];
    GoodbyeComponents.push(ExitText);
    
    for (const thisComponent of GoodbyeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function GoodbyeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Goodbye' ---
    // get current time
    t = GoodbyeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *ExitText* updates
    if (t >= 0.0 && ExitText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ExitText.tStart = t;  // (not accounting for frame time here)
      ExitText.frameNStart = frameN;  // exact frame index
      
      ExitText.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of GoodbyeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function GoodbyeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Goodbye' ---
    for (const thisComponent of GoodbyeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Goodbye.stopped', globalClock.getTime());
    // the Routine "Goodbye" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
