/*
Cash Register
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
*/
function checkCashRegister(price, cash, cid) {
  var statusKey="";
  var cambio=[];
  var totalInDrawer=0;
  var changePrimero;
  var changeLog={status: statusKey, change:cambio};
  var change= cash.toFixed(2) - price.toFixed(2);
  console.log("------")
  console.log(change);
  var changePrimero=change;
  var deCien=0;
  var de20=0;
  var de10=0;
  var de5=0;
  var de1=0;
  var de025=0;
  var de010=0;
  var de005=0;
  var de001=0;

  for (let i=0;i<cid.length;i++){
    totalInDrawer+=cid[i][1];
  }
  totalInDrawer=totalInDrawer.toFixed(2);
  console.log("-----TOTAL IN DRAWER-------")
  console.log(totalInDrawer);
  console.log("------- CHANGE _--------");
  console.log(change);
  if (totalInDrawer<change){
    changeLog.status="INSUFFICIENT_FUNDS";
    return changeLog;
  }

else{

 console.log(cid); 
       while(change>=100 && cid[8][1]>=100){
         change=change-100;
         cid[8][1]=cid[8][1]-100;
         deCien++;
       }
       if (deCien>0){
         cambio.push(["ONE HUNDRED", deCien*100])
       }
       while(change>=20 && cid[7][1]>=20){
        change=change-20;
        cid[7][1]=cid[7][1]-20;
        de20++;
      }
      if (de20>0){
        cambio.push(["TWENTY", de20*20])
      }
      while(change>=10 && cid[6][1]>=10){
        change=change-10;
        cid[6][1]=cid[6][1]-10;
        de10++;
      }
      if(de10>0){
        cambio.push(["TEN", de10 *10]);
      }
      while(change>=5 && cid[5][1]>=5){
        change=change-5;
        cid[5][1]=cid[5][1]-5;
        de5++;
      }
      if (de5>0){
        cambio.push(["FIVE", de5 * 5])
      }

      while(change>=1 && cid[4][1]>=1){
        change=change-1;
        cid[4][1]=cid[4][1]-1;
        de1++;
      }
      if (de1>0){
        cambio.push(["ONE", de1 ])
      }
      while(change>=0.25 && cid[3][1]>=0.25){
        change=change-0.25;
        console.log(change);
        cid[3][1]=cid[3][1]-0.25;
        de025++;
      }
      if(de025>0){
        cambio.push(["QUARTER", de025 * 0.25])
      }
      while(change>=0.1 && cid[2][1]>=0.1){
        change=change-0.1;
        cid[2][1]=cid[2][1]-0.1;
        de010++;
      }
      if (de010>0){
        cambio.push(["DIME", de010 * 0.10])
      }
      while(change>=0.05 && cid[1][1]>=0.05){
        change=change-0.05;
        change=change.toFixed(2);
        cid[1][1]=cid[1][1]-0.05;
        de005++;
      }
      if (de005>0){
        cambio.push(["NICKEL", de005 * 0.05])
      }
      while(change>=0.01 && cid[0][1]>=0.01){
        change=change-0.01;
        change=Math.floor(change).toFixed(2);
        cid[0][1]=cid[0][1]-0.01;
        de001++;
      }
      if (de001>0){
        cambio.push(["PENNY", de001 * 0.01])
      }
      console.log(cid);
      console.log("---EL CAMBIO QUE QUEDA---")
  console.log(change);
  
  if(change>0){
    changeLog.change=[];
    changeLog.status="INSUFFICIENT_FUNDS";
    console.log(changeLog);
    return changeLog;
  }
  if(totalInDrawer==changePrimero){
    changeLog.status="CLOSED";
    console.log(changeLog);
    return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}

   }

      
      console.log("AQUI AHORAAA TIENEN QUE SER IGUALES");
      console.log(totalInDrawer);
      console.log(changePrimero);
      
     
     if(totalInDrawer>change){
       changeLog.status="OPEN";
       console.log(statusKey);
      console.log(changeLog);
       return changeLog
     }
     

  }
}
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])