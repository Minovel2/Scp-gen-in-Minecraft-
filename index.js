import { world } from "mojang-minecraft";
let startRoom = 45,floorplan = [], docking = [],i,ochered = [],endrooms = [],placed,floorplanCount,x, x1, count,loop, bigRoom,maxloop = 2, maxBigRoom = 3;
let maxrooms = 50;
let minrooms = 20;

let over = world.getDimension("overworld");
world.events.tick.subscribe(({ currentTick }) => {
    if (currentTick % 20 == 0) {
        if (score("online","game") == 1) {
            over.runCommand("scoreboard players set online game 0");
            start();
            dock();
            /*for (let j = 0; j < 100; j++) {
  if (floorplan[j] == 5 && nCount(j)) {
  floorplan[j] = 6;
  endrooms.push(j);
}}*/
place();
over.runCommand(`say Колец: ${loop} ; Биг рум: ${bigRoom} ; Конечные комнаты: ${endrooms} ; Количество: ${floorplanCount}`);
        }
}
})

const score = (player, objective) => parseInt(over.runCommand(`scoreboard players test "${player}" ${objective} * *`)?.statusMessage?.split(" ")[1] || 0);

function start() {
  for (let j = 0; j < 100; j++) {
  floorplan[j] = 0;
}
floorplanCount = 0;
endrooms.length = 0;
nAdd(startRoom);
ochered = [startRoom];
  
  loop = 0;
  bigRoom = 0;
  while (floorplanCount <= maxrooms && ochered.length > 0) {
  i = ochered.shift();
  placed = false;
  x = i % 10; 
   if (x > 0) 
   visit(i - 1);
   if (x < 9) 
   visit(i + 1);
   if (i > 9)
   visit(i - 10);
   if (i < 90)
   visit(i + 10);
   }
  if (loop < maxloop) {
  start.apply(this); 
  return;
  }
  if (floorplanCount < minrooms) {
  start.apply(this);
  return;
  }
}

function nAdd(i, n = 5) {
    floorplan[i] = n;
    floorplanCount++;
    ochered.push(i);
    x1 = i % 10;
  if (x1 > 0 && floorplan[i - 1] < 5) floorplan[i - 1] += 1;
  if (x1 < 9 && floorplan[i + 1] < 5) floorplan[i + 1] += 1;
  if (i > 9 && floorplan[i - 10] < 5) floorplan[i - 10] += 1;
  if (i < 90 && floorplan[i + 10] < 5) floorplan[i + 10] += 1;
}

function nCount(i) {
  let x1 = i % 10;
  count = 0;
  line(x1,i,() => count++)
  if (count == 1) {
    return true;
  } else {return false;}
}
function line(x1,i,f1,f2 = f1,f3=f1,f4=f1) {
  if (x1 > 0 && floorplan[i-1] > 4)
  f1();
  if (x1 < 9 && floorplan[i+1] > 4)
  f2();
  if (i > 9 && floorplan[i-10] > 4)
  f3();
  if (i < 90 && floorplan[i+10] > 4)
  f4();
}

function visit(j) {
  if (floorplan[j] == undefined || floorplan[j] > 4)
        return;

    if (Math.random() < 0.5 && j != startRoom + 10)
        return;
        
    if (floorplan[j] > 1 && loop >= maxloop)
        return;
        
    if (floorplanCount >= maxrooms)
        return;
  
    if (loop < maxloop || bigRoom < maxBigRoom) {
      x1 = j % 10;
         if (x1 > 0 && floorplan[j-1] + floorplan[j+9] + floorplan[j+10] > 14) {
           bigR(j);
     return;      
    }
    else if (x1 < 9 && floorplan[j+10] + floorplan[j+11] + floorplan[j+1] > 14) {
      bigR(j);
     return;
    }
    else if (x1 < 9 && floorplan[j+1] + floorplan[j-9] + floorplan[j-10] > 14) {
      bigR(j);
     return;
    }
    else if (x1 > 0 && floorplan[j-10] + floorplan[j-11] + floorplan[j-1] > 14) {
      bigR(j);
     return;
    }
    else if (floorplan[j] > 1) {
    nAdd(j);
    floorplan[j] = 7;
    loop++;
    } }
     if (floorplan[j] < 2)
    nAdd(j);
    return;
}
function bigR(j) {
  if (bigRoom < maxBigRoom && floorplan[j] == 2) {
    bigRoom++;
    nAdd(j,8);
  }
}
function dock() {
  for (let j=0;j<100;j++) {
    x1 = j % 10;
    docking[j] = 0;
    if (floorplan[j] > 4)
    line(x1,j,() => docking[j] += 8,() => docking[j] += 2,() => docking[j] += 1,() => docking[j] += 4);
  }
}
function place() {
    let y1;
    for (let j=0;j<100;j++) {
        x1 = j % 10;
        y1 = (j - x1) / 10;
        if (docking[j]) {
            over.runCommand(`structure load koridor${docking[j]} ${204 + (5-x1)*25 - 5 + x1} -25 ${230 + (4-y1)*25 - 4 + y1}`);
        }
    }
}
