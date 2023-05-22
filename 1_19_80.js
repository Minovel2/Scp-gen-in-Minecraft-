import { world, system } from "@minecraft/server"

let startRoom = 45,mode,seed,type = [],obmen = [],seedNum,degr = [0,1,0,2,0,1,0,3,3,1,3,2,2,1,0],abc = "0123456789AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZzАаБбВвГгДдЕеЁёЖжЗзИиЙйКкЛлМмНнОоПпРрСсТтУуФфХхЦцЧчШшЩщЪъЬьЫыЭэЮюЯя",floorplan = [], docking = [],ochered = [],endrooms = [],floorplanCount,count,loop,zoneL={},zoneH={},zoneO={}, bigRoom,maxloop = 2, maxBigRoom = 3;

let maxrooms = 50;

let minrooms = 20;

let over = world.getDimension("overworld");

system.runInterval(() => {

        if (zoneL.length > 1) {

        let ent = [...over.getEntities()]

        for (let i=0;i<ent.length;i++) {

            if (ent[i].id == "map:helper" && ent[i].nameTag.split("-")[0] == "set") {

                let ex = ent[i].location.x, ez = ent[i].location.z, spl = ent[i].nameTag.split("-");

                let x = Math.floor((209+5*25-ex)/26)+1, y = Math.floor((234+4*25-ez)/26)+1;

                let rot = degr[zoneL.docking[y*10 + x]-1],bData = [0,2,1,3,4,6,5,7,8,10,9,11,12,14,13,15];

                let data = bData.indexOf(+spl[2]) % 4 + rot < 4 ? bData[bData.indexOf(+spl[2])+rot] : bData[bData.indexOf(+spl[2])+rot - 4];

                try {

                ent[i].runCommand(`setblock ~~~ ${spl[1]} ${data}`);

                } catch {}

                ent[i].kill();

            }
import { world, system } from "@minecraft/server"
let startRoom = 45,mode,seed,type = [],obmen = [],seedNum,degr = [0,1,0,2,0,1,0,3,3,1,3,2,2,1,0],abc = "0123456789AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZzАаБбВвГгДдЕеЁёЖжЗзИиЙйКкЛлМмНнОоПпРрСсТтУуФфХхЦцЧчШшЩщЪъЬьЫыЭэЮюЯя",floorplan = [], docking = [],ochered = [],endrooms = [],floorplanCount,count,loop,zoneL={},zoneH={},zoneO={}, bigRoom,maxloop = 2, maxBigRoom = 3;
let maxrooms = 50;
let minrooms = 20;

let over = world.getDimension("overworld");
system.runInterval(() => {
        if (zoneL.length > 1) {
        let ent = [...over.getEntities()]
        for (let i=0;i<ent.length;i++) {
            if (ent[i].id == "map:helper" && ent[i].nameTag.split("-")[0] == "set") {
                let ex = ent[i].location.x, ez = ent[i].location.z, spl = ent[i].nameTag.split("-");
                let x = Math.floor((209+5*25-ex)/26)+1, y = Math.floor((234+4*25-ez)/26)+1;
                let rot = degr[zoneL.docking[y*10 + x]-1],bData = [0,2,1,3,4,6,5,7,8,10,9,11,12,14,13,15];
                let data = bData.indexOf(+spl[2]) % 4 + rot < 4 ? bData[bData.indexOf(+spl[2])+rot] : bData[bData.indexOf(+spl[2])+rot - 4];
                try {
                ent[i].runCommand(`setblock ~~~ ${spl[1]} ${data}`);
                } catch {}
                ent[i].kill();
            }
        }
    }
    let scores = score("online","game");
        if (scores != 0) {
            if (!seed) {
            seedNum = "";
            seed = makeseed();
            seed = strRepl(seed);
            for (let j=0;(j<seed.length && j < 8);j++)
            seedNum += abc.indexOf(seed[j]);
            seedNum = new Random(+seedNum);
            }
            over.runCommand("scoreboard players set online game 0");
            gen(scores - 1);
            over.runCommandAsync(`say Сид: ${seed} ; Колец: ${loop} ; Биг рум: ${bigRoom} ; Количество: ${floorplanCount[3]}`);
        }
    },19)

function score(target, objective, returnZero = true) {
  try {
    const ob = world.scoreboard.getObjective(objective)
    let score
    if(typeof target === "string") score = ob.getScore(ob.getParticipants().find(p => p.displayName === target))
    else score = ob.getScore(target.scoreboard)
    return score
  } catch (e) {
    if(returnZero === true) return 0
    else return null
  }
}

function makeseed() {
  let seed = "";
  for (let j=0;j<8;j++) {
    seed += abc[Math.floor(Math.random()*abc.length)];
  }
  return seed;
}
function gen(n) {
  if (n == 2) startRoom = obmen[1] || 45;
  else startRoom = 45;
  mode = n;
  start();
  dock();
  mapping();
  if (n == 0) floorCopy(zoneL);
  if (n == 1) floorCopy(zoneH);
  if (n == 2) floorCopy(zoneO);
  place();
}

function floor(f,j = 1) {
    for (let i=0; i<100; i+=j)
    f(i);
}

function floorCopy(obj) {
    obj.floorplan = [...floorplan];
    obj.type = [...type];
    obj.docking = [...docking];
}

function start() {
  for (let k = 0; k < 10000; k++) {
floor((i) => floorplan[i] = 0);
floorplanCount = [0,0,0,0];
endrooms = [];
type = [];
ochered = [];
nAdd(startRoom);
if (mode == 1) hard(startRoom);
if (mode == 2) type[startRoom] = obmen[0];
  
  loop = 0;
  bigRoom = 0;
  while (floorplanCount[3] <= maxrooms && ochered.length > 0) {
  let i = ochered.shift();
  let x = i % 10; 
   if (x > 0) 
   visit(i - 1,type[i]);
   if (x < 9) 
   visit(i + 1,type[i]);
   if (i > 9)
   visit(i - 10,type[i]);
   if (i < 90)
   visit(i + 10,type[i]);
   }
  if (loop < maxloop || floorplanCount[3] < minrooms || endCount() < 4) {
  continue;
  }
  if (mode == 1) {
    let arr = arrSide();
    if (Math.abs(floorplanCount[1] - floorplanCount[2]) > 10 || arr.length < 2 || type[arr[0]] != type[arr[1]]) {
  continue;
  }
  obmen = [type[arr[0]+9],...arr];
  }
  if (mode == 2) {
    if (floorplan[obmen[1]] != 5 || floorplan[obmen[2]] != 5 || !nCount(obmen[1]) || !nCount(obmen[2]) || floorplan[obmen[2]+1] != 5 || floorplan[obmen[1]+1] != 5) {
    continue;
  }}
  break;
  }
}

function endCount() {
    let c = 0;
    for (let i=0; i<99; i++) {
        if (nCount(i) && floorplan[i] == 5)
        c++;
    }
    if (mode == 1 || mode == 2) c -= 2;
    return c;
}

function arrSide() {
    let room1 = [],room2 = [];
  for (let i = 0;i < 10; i++) {
    if (nCount(i*10 + 9) && floorplan[i*10+8] == 5 && floorplan[i*10 + 9] == 5) {
        if (type[i*10+9] == 1) room1.push(i*10);
        if (type[i*10+9] == 2) room2.push(i*10);
    }
  }
  if (room1.length < 2 && room2.length < 2) return [0];
  let arr = room2.length >= room1.length ? room2 : room1;
  shuffle(arr);
  return arr;
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = random(i+1);
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function hard(i) {
  ochered.shift();
  let arr = [-10,1,10,-1,-10],num = random(4);
  nAdd(i+arr[num],2);
  nAdd(i+arr[num+1],1);
}

function nAdd(i,type1 = 0) {
    floorplan[i] = 5;
    type[i] = type1;
    floorplanCount[3]++;
    floorplanCount[type1]++;
    ochered.push(i);
    let x1 = i % 10;
  if (x1 > 0 && floorplan[i - 1] < 5) floorplan[i - 1] += 1;
  if (x1 < 9 && floorplan[i + 1] < 5) floorplan[i + 1] += 1;
  if (i > 9 && floorplan[i - 10] < 5) floorplan[i - 10] += 1;
  if (i < 90 && floorplan[i + 10] < 5) floorplan[i + 10] += 1;
}

function nCount(i) {
  let x1 = i % 10;
  count = 0;
  line(floorplan,5,x1,i,() => count++)
  if (count == 1) {
    return true;
  } else return false;
}
function line(arr,n,x1,i,f1,f2 = f1,f3=f1,f4=f1) {
  if (x1 > 0 && (arr[i-1] == n || arr[i-1] == undefined))
  f1();
  if (x1 < 9 && (arr[i+1] == n || arr[i+1] == undefined))
  f2();
  if (i > 9 && (arr[i-10] == n || arr[i-10] == undefined))
  f3();
  if (i < 90 && (arr[i+10] == n || arr[i+10] == undefined))
  f4();
}

function nType(i, c = type[i]) {
  let x1 = i % 10;
  count = 0;
  line(type,c,x1,i,() => count++)
  if (x1 == 0) count++;
  if (x1 == 9) count++;
  if (i < 10) count++;
  if (i > 89) count++;
  if (count > 3) return true;
  else return false;
}

function visit(j,from) {
    if (mode == 1 && !nType(j,from))
        return;
    
    if (floorplan[j] == undefined || floorplan[j] > 4)
        return;

    if (random() < 0.5 && (j != startRoom + 10 || mode == 2))
        return;
        
    if (floorplan[j] > 1 && loop >= maxloop)
        return;
        
    if (floorplanCount[3] >= maxrooms)
        return;
  
    if (loop < maxloop || bigRoom < maxBigRoom) {
      let x1 = j % 10;
         if (x1 > 0 && floorplan[j-1] + floorplan[j+9] + floorplan[j+10] > 14) {
           bigR(j,from);
     return;      
    }
    else if (x1 < 9 && floorplan[j+10] + floorplan[j+11] + floorplan[j+1] > 14) {
      bigR(j,from);
     return;
    }
    else if (x1 < 9 && floorplan[j+1] + floorplan[j-9] + floorplan[j-10] > 14) {
      bigR(j,from);
     return;
    }
    else if (x1 > 0 && floorplan[j-10] + floorplan[j-11] + floorplan[j-1] > 14) {
      bigR(j,from);
     return;
    }
    else if (floorplan[j] > 1) {
    nAdd(j,from);
    floorplan[j] = 5;
    loop++;
    } }
     if (floorplan[j] < 2)
    nAdd(j,from);
    return;
}
function bigR(j,from) {
  if (bigRoom < maxBigRoom && random() < 0.4 && floorplan[j] == 2) {
    bigRoom++;
    nAdd(j,from);
  }
}
function dock() {
  floor((j) => {
      let x1 = j % 10;
    docking[j] = 0;
    if (floorplan[j] > 4)
    line(floorplan,5,x1,j,() => docking[j] += 8,() => docking[j] += 2,() => docking[j] += 1,() => docking[j] += 4);
  });
}
function Random(seed) {
  seed = (seed || 9) % 2147483647;
  return {
    next: function() {
      return seed = seed * 48271 % 2147483647;
    },
  };
};
function random(n = 0) {
  let num1 = `${seedNum.next()}`,num2 = `${seedNum.next()}`;
  let res = parseFloat(`0.${num1[num1.length-2]}${num2[num2.length-2]}${num1[num1.length-4]}${num2[num2.length-4]}`);
  if (!n)
  return res
  return Math.floor(res*n);
}
function map1(arr,num,min = 1,max = min) {
  for (let j=0;j < random(max-min+1)+min;j++) {
  floorplan[arr.splice(random(arr.length),1)] = num;
  }
}
function mapping() {
    let straight = [], triple = [],corner = [];
    for (let j = 0; j < 100; j++) {
  if (floorplan[j] == 5 && nCount(j))
  endrooms.push(j);
  if (docking[j] == 5 || docking[j] == 10)
  straight.push(j);
  if (docking[j] == 14 || docking[j] == 13 || docking[j] == 11 || docking[j] == 7)
  triple.push(j);
  if (docking[j] == 3 || docking[j] == 6 || docking[j] == 12 || docking[j] == 9)
  corner.push(j);
}
if (mode == 0) {
  map1(endrooms,0);
floorplan[endrooms.pop()] = 1;
floorplan[endrooms.shift()] = 1;
  if (triple.length > straight.length)
  map1(triple,2);
  else map1(straight,2);
  map1(endrooms,3);
  map1(straight,4);
  map1(endrooms,6);
  map1(endrooms,7);
  map1(endrooms,8);
  map1(endrooms,9);
  map1(straight,10,1,3);
  map1(straight,11,2,5);
  }
  if (mode == 1) {
      floorplan[endrooms.splice(endrooms.indexOf(obmen[1]+9),1)] = 13;
      floorplan[endrooms.splice(endrooms.indexOf(obmen[2]+9),1)] = 13;
      floorplan[startRoom] = 18;
      floorplan[endrooms.pop()] = 14;
      floorplan[endrooms.shift()] = 14;
      map1(endrooms,15);
      map1(straight,16);
      map1(straight,17,2);
      map1(endrooms,19);
      map1(straight,20,0,3);
      map1(straight,21);
      map1(straight,22);
      map1(triple,23,0,1);
      map1(endrooms,24,0,1);
      floor((i) => {
          if (floorplan[i] == 5)
          floorplan[i] = 12;
      });
  }
  if (mode == 2) {
      floorplan[endrooms.splice(endrooms.indexOf(obmen[1]),1)] = 26;
      floorplan[endrooms.splice(endrooms.indexOf(obmen[2]),1)] = 26;
      map1(endrooms,27);
      map1(endrooms,28);
      map1(endrooms,29);
      map1(corner,32);
      map1(straight,33,0,2);
      map1(straight,34,0,2);
      map1(straight,35,0,2);
      map1(straight,36,0,2);
      floor((i) => {
          if (floorplan[i] == 5)
          floorplan[i] = 25;
      });
      for (let i=0; i < endrooms.length; i++) {
        floorplan[endrooms[i]] = random(2)+30;
      }
  }
}
function place() {
    let startX = startRoom % 10;
    let startY = (startRoom - startX) / 10;
    let x1,y1,z1,centreX=204,centreY=230,num = [1,1,3,1,5,3,7,1,3,5,7,3,7,7,15],rooms = ["D-class","exit_L","SCP-173","office","toilet","corridor_L","SCP-914","SCP-372","SCP-012","armory_L","gateway","greenhouse","corridor_H","exit_H","elevator","SCP-096","SCP-049","alpha","server","SCP-079","tesla","SCP-939","HID","armory_H","SCP-106","corridor_O","exit_O","gates_A","gates_B","shelter","impasse_Big","impasse_Small","intercom","office_Big","office_Medium","office_Small","corridor_conference"];
    if (mode == 2) {
        centreX = 73;
        centreY = centreY + (4-Math.floor(obmen[1]/10))*26; }
    for (let j=0;j<100;j++) {
        x1 = j % 10;
        y1 = (j - x1) / 10;
        if (mode == 1 || mode == 2) z1 = 50;
        else z1 = -25;
        if (type[j] == 2) z1 += 8;
        if (floorplan[j] == 8)
        z1 += -16;
        if (docking[j]) {
           if (!over.runCommand(`structure load ${rooms[floorplan[j]]}_${num[docking[j]-1]} ${centreX + (startX -x1)*26} ${z1} ${centreY + (startY-y1)*26} ${degr[docking[j]-1]*90}_degrees`).successCount
           ) {over.runCommandAsync(`structure load corridor_L_${num[docking[j]-1]} ${centreX + (startX -x1)*26} ${z1} ${centreY + (startY-y1)*26} ${degr[docking[j]-1]*90}_degrees`);
              over.runCommandAsync(`say error: ${rooms[floorplan[j]]}_${num[docking[j]-1]}`);
           }
        }
    }
}

function strRepl(str) {
  let from = "укехаросмУКЕНХВАРОСМИТ0ёЁЙ3", to = "ykexapocmYKEHXBAPOCMNTOeENЗ";
  for (let i=0;i<str.length;i++) {
    if (from.includes(str[i])) {
      str = str.replaceAt(i,to[from.indexOf(str[i])]);
    }
  }
  return str;
}

String.prototype.replaceAt = function(index, replacement) {
  return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}
        }

    }

    let scores = score("online","game");

        if (scores != 0) {

            if (!seed) {

            seedNum = "";

            seed = makeseed();

            seed = strRepl(seed);

            for (let j=0;(j<seed.length && j < 8);j++)

            seedNum += abc.indexOf(seed[j]);

            seedNum = new Random(+seedNum);

            }

            over.runCommand("scoreboard players set online game 0");

            gen(scores - 1);

            over.runCommandAsync(`say Сид: ${seed} ; Колец: ${loop} ; Биг рум: ${bigRoom} ; Количество: ${floorplanCount[3]}`);

        }

    },19)

function score(target, objective, returnZero = true) {

  try {

    const ob = world.scoreboard.getObjective(objective)

    let score

    if(typeof target === "string") score = ob.getScore(ob.getParticipants().find(p => p.displayName === target))

    else score = ob.getScore(target.scoreboard)

    return score

  } catch (e) {

    if(returnZero === true) return 0

    else return null

  }

}

function makeseed() {

  let seed = "";

  for (let j=0;j<8;j++) {

    seed += abc[Math.floor(Math.random()*abc.length)];

  }

  return seed;

}

function gen(n) {

  if (n == 2) startRoom = obmen[1] || 45;

  else startRoom = 45;

  mode = n;

  start();

  dock();

  mapping();

  if (n == 0) floorCopy(zoneL);

  if (n == 1) floorCopy(zoneH);

  if (n == 2) floorCopy(zoneO);

  place();

}

function floor(f,j = 1) {

    for (let i=0; i<100; i+=j)

    f(i);

}

function floorCopy(obj) {

    obj.floorplan = [...floorplan];

    obj.type = [...type];

    obj.docking = [...docking];

}

function start() {

  for (let k = 0; k < 10000; k++) {

floor((i) => floorplan[i] = 0);

floorplanCount = [0,0,0,0];

endrooms = [];

type = [];

ochered = [];

nAdd(startRoom);

if (mode == 1) hard(startRoom);

if (mode == 2) type[startRoom] = obmen[0];

  

  loop = 0;

  bigRoom = 0;

  while (floorplanCount[3] <= maxrooms && ochered.length > 0) {

  let i = ochered.shift();

  let x = i % 10; 

   if (x > 0) 

   visit(i - 1,type[i]);

   if (x < 9) 

   visit(i + 1,type[i]);

   if (i > 9)

   visit(i - 10,type[i]);

   if (i < 90)

   visit(i + 10,type[i]);

   }

  if (loop < maxloop || floorplanCount[3] < minrooms || endCount() < 4) {

  continue;

  }

  if (mode == 1) {

    let arr = arrSide();

    if (Math.abs(floorplanCount[1] - floorplanCount[2]) > 10 || arr.length < 2 || type[arr[0]] != type[arr[1]]) {

  continue;

  }

  obmen = [type[arr[0]+9],...arr];

  }

  if (mode == 2) {

    if (floorplan[obmen[1]] != 5 || floorplan[obmen[2]] != 5 || !nCount(obmen[1]) || !nCount(obmen[2]) || floorplan[obmen[2]+1] != 5 || floorplan[obmen[1]+1] != 5) {

    continue;

  }}

  break;

  }

}

function endCount() {

    let c = 0;

    for (let i=0; i<99; i++) {

        if (nCount(i) && floorplan[i] == 5)

        c++;

    }

    if (mode == 1 || mode == 2) c -= 2;

    return c;

}

function arrSide() {

    let room1 = [],room2 = [];

  for (let i = 0;i < 10; i++) {

    if (nCount(i*10 + 9) && floorplan[i*10+8] == 5 && floorplan[i*10 + 9] == 5) {

        if (type[i*10+9] == 1) room1.push(i*10);

        if (type[i*10+9] == 2) room2.push(i*10);

    }

  }

  if (room1.length < 2 && room2.length < 2) return [0];

  let arr = room2.length >= room1.length ? room2 : room1;

  shuffle(arr);

  return arr;

}

function shuffle(array) {

  for (let i = array.length - 1; i > 0; i--) {

    let j = random(i+1);

    [array[i], array[j]] = [array[j], array[i]];

  }

}

function hard(i) {

  ochered.shift();

  let arr = [-10,1,10,-1,-10],num = random(4);

  nAdd(i+arr[num],2);

  nAdd(i+arr[num+1],1);

}

function nAdd(i,type1 = 0) {

    floorplan[i] = 5;

    type[i] = type1;

    floorplanCount[3]++;

    floorplanCount[type1]++;

    ochered.push(i);

    let x1 = i % 10;

  if (x1 > 0 && floorplan[i - 1] < 5) floorplan[i - 1] += 1;

  if (x1 < 9 && floorplan[i + 1] < 5) floorplan[i + 1] += 1;

  if (i > 9 && floorplan[i - 10] < 5) floorplan[i - 10] += 1;

  if (i < 90 && floorplan[i + 10] < 5) floorplan[i + 10] += 1;

}

function nCount(i) {

  let x1 = i % 10;

  count = 0;

  line(floorplan,5,x1,i,() => count++)

  if (count == 1) {

    return true;

  } else return false;

}

function line(arr,n,x1,i,f1,f2 = f1,f3=f1,f4=f1) {

  if (x1 > 0 && (arr[i-1] == n || arr[i-1] == undefined))

  f1();

  if (x1 < 9 && (arr[i+1] == n || arr[i+1] == undefined))

  f2();

  if (i > 9 && (arr[i-10] == n || arr[i-10] == undefined))

  f3();

  if (i < 90 && (arr[i+10] == n || arr[i+10] == undefined))

  f4();

}

function nType(i, c = type[i]) {

  let x1 = i % 10;

  count = 0;

  line(type,c,x1,i,() => count++)

  if (x1 == 0) count++;

  if (x1 == 9) count++;

  if (i < 10) count++;

  if (i > 89) count++;

  if (count > 3) return true;

  else return false;

}

function visit(j,from) {

    if (mode == 1 && !nType(j,from))

        return;

    

    if (floorplan[j] == undefined || floorplan[j] > 4)

        return;

    if (random() < 0.5 && (j != startRoom + 10 || mode == 2))

        return;

        

    if (floorplan[j] > 1 && loop >= maxloop)

        return;

        

    if (floorplanCount[3] >= maxrooms)

        return;

  

    if (loop < maxloop || bigRoom < maxBigRoom) {

      let x1 = j % 10;

         if (x1 > 0 && floorplan[j-1] + floorplan[j+9] + floorplan[j+10] > 14) {

           bigR(j,from);

     return;      

    }

    else if (x1 < 9 && floorplan[j+10] + floorplan[j+11] + floorplan[j+1] > 14) {

      bigR(j,from);

     return;

    }

    else if (x1 < 9 && floorplan[j+1] + floorplan[j-9] + floorplan[j-10] > 14) {

      bigR(j,from);

     return;

    }

    else if (x1 > 0 && floorplan[j-10] + floorplan[j-11] + floorplan[j-1] > 14) {

      bigR(j,from);

     return;

    }

    else if (floorplan[j] > 1) {

    nAdd(j,from);

    floorplan[j] = 5;

    loop++;

    } }

     if (floorplan[j] < 2)

    nAdd(j,from);

    return;

}

function bigR(j,from) {

  if (bigRoom < maxBigRoom && random() < 0.4 && floorplan[j] == 2) {

    bigRoom++;

    nAdd(j,from);

  }

}

function dock() {

  floor((j) => {

      let x1 = j % 10;

    docking[j] = 0;

    if (floorplan[j] > 4)

    line(floorplan,5,x1,j,() => docking[j] += 8,() => docking[j] += 2,() => docking[j] += 1,() => docking[j] += 4);

  });

}

function Random(seed) {

  seed = (seed || 9) % 2147483647;

  return {

    next: function() {

      return seed = seed * 48271 % 2147483647;

    },

  };

};

function random(n = 0) {

  let num1 = `${seedNum.next()}`,num2 = `${seedNum.next()}`;

  let res = parseFloat(`0.${num1[num1.length-2]}${num2[num2.length-2]}${num1[num1.length-4]}${num2[num2.length-4]}`);

  if (!n)

  return res

  return Math.floor(res*n);

}

function map1(arr,num,min = 1,max = min) {

  for (let j=0;j < random(max-min+1)+min;j++) {

  floorplan[arr.splice(random(arr.length),1)] = num;

  }

}

function mapping() {

    let straight = [], triple = [],corner = [];

    for (let j = 0; j < 100; j++) {

  if (floorplan[j] == 5 && nCount(j))

  endrooms.push(j);

  if (docking[j] == 5 || docking[j] == 10)

  straight.push(j);

  if (docking[j] == 14 || docking[j] == 13 || docking[j] == 11 || docking[j] == 7)

  triple.push(j);

  if (docking[j] == 3 || docking[j] == 6 || docking[j] == 12 || docking[j] == 9)

  corner.push(j);

}

if (mode == 0) {

  map1(endrooms,0);

floorplan[endrooms.pop()] = 1;

floorplan[endrooms.shift()] = 1;

  if (triple.length > straight.length)

  map1(triple,2);

  else map1(straight,2);

  map1(endrooms,3);

  map1(straight,4);

  map1(endrooms,6);

  map1(endrooms,7);

  map1(endrooms,8);

  map1(endrooms,9);

  map1(straight,10,1,3);

  map1(straight,11,2,5);

  }

  if (mode == 1) {

      floorplan[endrooms.splice(endrooms.indexOf(obmen[1]+9),1)] = 13;

      floorplan[endrooms.splice(endrooms.indexOf(obmen[2]+9),1)] = 13;

      floorplan[startRoom] = 18;

      floorplan[endrooms.pop()] = 14;

      floorplan[endrooms.shift()] = 14;

      map1(endrooms,15);

      map1(straight,16);

      map1(straight,17,2);

      map1(endrooms,19);

      map1(straight,20,0,3);

      map1(straight,21);

      map1(straight,22);

      map1(triple,23,0,1);

      map1(endrooms,24,0,1);

      floor((i) => {

          if (floorplan[i] == 5)

          floorplan[i] = 12;

      });

  }

  if (mode == 2) {

      floorplan[endrooms.splice(endrooms.indexOf(obmen[1]),1)] = 26;

      floorplan[endrooms.splice(endrooms.indexOf(obmen[2]),1)] = 26;

      map1(endrooms,27);

      map1(endrooms,28);

      map1(endrooms,29);

      map1(corner,32);

      map1(straight,33,0,2);

      map1(straight,34,0,2);

      map1(straight,35,0,2);

      map1(straight,36,0,2);

      floor((i) => {

          if (floorplan[i] == 5)

          floorplan[i] = 25;

      });

      for (let i=0; i < endrooms.length; i++) {

        floorplan[endrooms[i]] = random(2)+30;

      }

  }

}

function place() {

    let startX = startRoom % 10;

    let startY = (startRoom - startX) / 10;

    let x1,y1,z1,centreX=204,centreY=230,num = [1,1,3,1,5,3,7,1,3,5,7,3,7,7,15],rooms = ["D-class","exit_L","SCP-173","office","toilet","corridor_L","SCP-914","SCP-372","SCP-012","armory_L","gateway","greenhouse","corridor_H","exit_H","elevator","SCP-096","SCP-049","alpha","server","SCP-079","tesla","SCP-939","HID","armory_H","SCP-106","corridor_O","exit_O","gates_A","gates_B","shelter","impasse_Big","impasse_Small","intercom","office_Big","office_Medium","office_Small","corridor_conference"];

    if (mode == 2) {

        centreX = 73;

        centreY = centreY + (4-Math.floor(obmen[1]/10))*26; }

    for (let j=0;j<100;j++) {

        x1 = j % 10;

        y1 = (j - x1) / 10;

        if (mode == 1 || mode == 2) z1 = 50;

        else z1 = -25;

        if (type[j] == 2) z1 += 8;

        if (floorplan[j] == 8)

        z1 += -16;

        if (docking[j]) {

           if (!over.runCommand(`structure load ${rooms[floorplan[j]]}_${num[docking[j]-1]} ${centreX + (startX -x1)*26} ${z1} ${centreY + (startY-y1)*26} ${degr[docking[j]-1]*90}_degrees`).successCount

           ) {over.runCommandAsync(`structure load corridor_L_${num[docking[j]-1]} ${centreX + (startX -x1)*26} ${z1} ${centreY + (startY-y1)*26} ${degr[docking[j]-1]*90}_degrees`);

              over.runCommandAsync(`say error: ${rooms[floorplan[j]]}_${num[docking[j]-1]}`);

           }

        }

    }

}

function strRepl(str) {

  let from = "укехаросмУКЕНХВАРОСМИТ0ёЁЙ3", to = "ykexapocmYKEHXBAPOCMNTOeENЗ";

  for (let i=0;i<str.length;i++) {

    if (from.includes(str[i])) {

      str = str.replaceAt(i,to[from.indexOf(str[i])]);

    }

  }

  return str;

}

String.prototype.replaceAt = function(index, replacement) {

  return this.substr(0, index) + replacement + this.substr(index + replacement.length);

}
