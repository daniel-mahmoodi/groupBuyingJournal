console.log("-----------------journal-----------------");
let A11 = 500;
let A12 = 300;
let A21 = 100;
let A22 = 50;
let B11 = 1.3;
let B12 = 1.3;
let B21 = 1;
let B22 = 2;
let Gama1 = 0.1;
let Gama2 = 1;
let Alpha1 = 1;
let Alpha2 = 2;
// /////////////////////////////////////////////
let C1 = 250;
let C2 = 50;
let a11 = A11;
let a12 = A12;
let a21 = A21;
let a22 = A22;
let b11 = B11;
let b12 = B12;
let b21 = B21;
let b22 = B22;
let gama1 = Gama1;
let gama2 = Gama2;
let alpha1 = Alpha1;
let alpha2 = Alpha2;
// //////////////
let P1p =
  (2 * (a11 + a12) * (b21 + b22) + (a21 + a22) * (gama1 + gama2)) /
  (4 * (b11 + b12) * (b21 + b22) - (gama1 + gama2) * (gama1 + gama2));
let P2p =
  (2 * (a21 + a22) * (b11 + b12) + (a11 + a12) * (gama1 + gama2)) /
  (4 * (b11 + b12) * (b21 + b22) - (gama1 + gama2) * (gama1 + gama2));
let c126c226 =
  ((b11 + b12) *
    (2 * (a11 + a12) * (b21 + b22) + (a21 + a22) * (gama1 + gama2))) /
  (4 * (b11 + b12) * (b21 + b22) - (gama1 + gama2) * (gama1 + gama2));

// c126c232 :
let c126c232 =
  ((b11 + b12) *
    ((a11 + a12) * (b21 + b22) + (a21 + a22 - C2) * (gama1 + gama2))) /
  (2 * (b11 + b12) * (b21 + b22) - (gama1 + gama2) * (gama1 + gama2));
let P1LP2Lc126c232 =
  ((a11 + a12) * (b21 + b22) + (a21 + a22 - C2) * (gama1 + gama2)) /
  (2 * (b11 + b12) * (b21 + b22) - (gama1 + gama2) * (gama1 + gama2));
let P2LP1Lc126c232 =
  ((a11 + a12) * (gama1 + gama2) + 2 * (a21 + a22 - C2) * (b11 + b12)) /
  (2 * (b11 + b12) * (b21 + b22) - (gama1 + gama2) * (gama1 + gama2));
let P1LP2Hc126c232 =
  ((a11 + a12) * b22 + a22 * (gama1 * gama2)) /
  (2 * b22 * (b11 + b12) - gama2 * (gama1 * gama2));
let P2HP1Lc126c232 =
  (2 * a22 * (b12 + b11) + (a11 + a12) * gama2) /
  (4 * b22 * (b11 + b12) - 2 * gama2 * (gama1 + gama2));
// c126c238:
let P1LP2Hc126c238 =
  (2 * b21 * (a11 + a12) + a21 * (gama1 + gama2)) /
  (4 * b21 * (b11 + b12) - gama1 * (gama1 + gama2));
let P2HP1Lc126c238 =
  (2 * a21 * (b11 + b12) + (a11 + a12) * gama2) /
  (4 * b21 * (b11 + b12) - gama1 * (gama1 + gama2));
// c126c239:
let P1LP2Hc126c239 =
  (a11 * b21 + a12 * b21 - (C2 - a21)) /
  (2 * b11 * b21 + 2 * b12 * b21 - gama1 * (gama1 + gama2));
let P2HP1Lc126c239 =
  (-2 * (C2 - a21) * b11 - 2 * (C2 - a21) * b12 + (a11 + a12) * gama1) /
  (2 * b11 * b21 + 2 * b12 * b21 - gama1 * (gama1 + gama2));
let P1HP2Hc126c239 =
  (a11 * b21 - C2 * gama1 + a21 * gama1) / (2 * b11 * b21 - gama1 ** 2);
let P2HP1Hc126c239 =
  (-2 * (C2 - a21) * b11 + a11 * gama1) / (2 * b11 * b21 - gama1 ** 2);
// c132c238:
let P1LP2Hc132c238 =
  (2 * (-C1 + a11 + a12) * b21 + a21 * (gama1 + gama2)) /
  (2 * b11 * b21 + 2 * b12 * b21 - gama1 * (gama1 + gama2));
let P2HP1Lc132c238 =
  (a21 * (b11 + b12) + (-C1 + a11 + a12) * gama1) /
  (2 * b11 * b21 + 2 * b12 * b21 - gama1 * (gama1 + gama2));
// c132c239:
let P1LP2Hc132c239 =
  ((-C1 + a11 + a12) * b21 - (C2 - a21) * (gama1 + gama2)) /
  (b11 * b21 + b12 * b21 - gama1 * (gama1 + gama2));
let P2HP1Lc132c239 =
  ((-C2 + a21) * b11 + (-C2 + a21) * b12 + (-C1 + a11 + a12) * gama1) /
  (b11 * b21 + b12 * b21 - gama1 * (gama1 + gama2));
let P1HP2Hc132c239 =
  (a11 * b21 - C2 * gama1 + a21 * gama1) / (2 * b11 * b21 - gama1 ** 2);
let P2HP1Hc132c239 =
  (-2 * (C2 - a21) * b11 + a11 * gama1) / (2 * b11 * b21 - gama1 ** 2);
// c138c239:
let P1HP2Hc138c239 =
  (a11 * b21 - C2 * gama1 + a21 * gama1) / (2 * b11 * b21 - gama1 ** 2);
let P2HP1Hc138c239 =
  (-2 * (C2 - a21) * b11 + a11 * gama1) / (2 * b11 * b21 - gama1 ** 2);
// c143c239:
let P1HP2Hc143c239 =
  (a11 * b21 - C2 * gama1 + a21 * gama1) / (2 * b11 * b21 - gama1 ** 2);
let P2HP1Hc143c239 =
  (-2 * (C2 - a21) * b11 + a11 * gama1) / (2 * b11 * b21 - gama1 ** 2);
// 44c126c232:
let For44c126c232 =
  ((b11 + b12) *
    (a11 * (b21 + b22) +
      a12 * (b21 + b22) -
      (C2 - a21 - a22) * (gama1 + gama2))) /
  (2 * b11 * (b21 + b22) + 2 * b12 * (b21 + b22) - (gama1 + gama2) ** 2);
let P1LP2L44c126c232 =
  (a11 * (b21 + b22) + a12 * (b21 + b22) - (C2 - a21 - a22) * (gama1 + gama2)) /
  (2 * b11 * (b21 + b22) + 2 * b12 * (b21 + b22) - (gama1 + gama2) ** 2);
let P2LP1L44c126c232 =
  (2 * (-C2 + a21 + a22) * b11 +
    2 * (-C2 + a21 + a22) * b12 +
    (a11 + a12) * (gama1 + gama2)) /
  (2 * b11 * (b21 + b22) + 2 * b12 * (b21 + b22) - (gama1 + gama2) ** 2);
// test for change 1 and 2 :
let P1LP2L44c132c226 =
  (2 * (-C1 + a11 + a12) * b21 +
    2 * (-C1 + a11 + a12) * b22 +
    (a21 + a22) * (gama1 + gama2)) /
  (2 * b11 * (b21 + b22) + 2 * b12 * (b21 + b22) - (gama1 + gama2) ** 2);

let P2LP1L44c132c226 =
  (a21 * (b11 + b12) + a22 * (b11 + b12) - (C1 - a11 - a12) * (gama1 + gama2)) /
  (2 * b11 * (b21 + b22) + 2 * b12 * (b21 + b22) - (gama1 + gama2) ** 2);

// test for changed 1 and 2 :

// 44c126c236:
let P1LP2H44c126c236 =
  (a11 * b21 + a12 * b21 - (C2 - a21) * (gama1 + gama2)) /
  (2 * b11 * b21 + 2 * b12 * b21 - gama1 * (gama1 + gama2));
let P2HP1L44c126c236 =
  (-2 * (C2 - a21) * b11 - 2 * (C2 - a21) * b12 + (a11 + a12) * gama1) /
  (2 * b11 * b21 + 2 * b12 * b21 - gama1 * (gama1 + gama2));
//  change 1 and 2:
let P2LP1H44c136c226 =
  (a21 * b11 + a22 * b11 - (C1 - a11) * (gama1 + gama2)) /
  (2 * b11 * b21 + 2 * b12 * b21 - gama1 * (gama1 + gama2));
let P1HP2L44c136c226 =
  (-2 * (C1 - a11) * b21 - 2 * (C1 - a11) * b22 + (a21 + a22) * gama1) /
  (2 * b11 * b21 + 2 * b12 * b21 - gama1 * (gama1 + gama2));
// 44c132c236:
let P1LP2H44c132c236 =
  ((-C1 + a11 + a12) * b21 - (C2 - a21) * (gama1 + gama2)) /
  (b11 * b21 + b12 * b21 - gama1 * (gama1 + gama2));
let P2HP1L44c132c236 =
  ((-C2 + a21) * b11 + (-C2 + a21) * b12 + (-C1 + a11 + a12) * gama1) /
  (b11 * b21 + b12 * b21 - gama1 * (gama1 + gama2));
// change 1aand 2 :
let P1HP2L44c136c232 =
  ((-C1 + a11) * b21 + (-C1 + a11) * b22 + (-C2 + a21 + a22) * gama1) /
  (b11 * b21 + b12 * b21 - gama1 * (gama1 + gama2));
let P2LP1H44c136c232 =
  ((-C2 + a21 + a22) * b11 - (C1 - a11) * (gama1 + gama2)) /
  (b11 * b21 + b12 * b21 - gama1 * (gama1 + gama2));

// ///////////
let P1H27 = (2 * a11 * b21 + a21 * gama1) / (4 * b11 * b21 - gama1 ** 2);
// new change for P1L28:
let c126 =
  ((b11 + b12) *
    (2 * (a11 + a12) * (b21 + b22) + (a21 + a22) * (gama1 + gama2))) /
  (4 * (b11 + b12) * (b21 + b22) - (gama1 + gama2) * (gama1 + gama2));
// let P1L28 =
//   ((a11 + a12 - c126) * (b21 + b22) + (a21 + a22 - C2) * (gama1 + gama2)) /
//   ((b11 + b12) * (b21 + b22) - (gama1 + gama2) * (gama1 + gama2));
// let R1L30 = P1L28 * c126;
let P1L28 =
  (2 * (a11 + a12) * (b21 + b22) + (a21 + a22) * (gama1 + gama2)) /
  (4 * (b11 + b12) * (b21 + b22) - (gama1 + gama2) * (gama1 + gama2));
let R1L30 =
  ((b11 + b12) *
    (2 * (a11 + a12) * (b21 + b22) + (a21 + a22) * (gama1 + gama2)) ** 2) /
  (4 * (b11 + b12) * (b21 + b22) - (gama1 + gama2) ** 2) ** 2;
let R1H29 =
  (b11 * ((2 * a11 * b21 + a21 * gama1) * (2 * a11 * b21 + a21 * gama1))) /
  (4 * b11 * b21 - gama1 * gama1) ** 2;

let P2H27 = (2 * a21 * b11 + a11 * gama1) / (4 * b11 * (gama1 * gama1));

let P2L28 =
  (2 * (a21 + a22) * (b11 + b12) + (a11 + a12) * (gama1 + gama2)) /
  (4 * (b11 + b12) * (b21 + b22) - (gama1 + gama2) * (gama1 + gama2));
// new change for P2L28:
let c226 =
  ((b21 + b22) *
    (2 * (a21 + a22) * (b11 + b12) + (a11 + a12) * (gama1 + gama2))) /
  (4 * (b11 + b12) * (b21 + b22) - (gama1 + gama2) * (gama1 + gama2));
// let P2L28 =
//   ((a11 + a12 - c226) * (b21 + b22) + (a21 + a22 - C1) * (gama1 + gama2)) /
//   ((b11 + b12) * (b21 + b22) - (gama1 + gama2) * (gama1 + gama2));
// let R2L30 = P2L28 * c226;

let R2H29 =
  (b21 * (2 * a21 * b11 + a11 * gama1) * (2 * a11 * b21 + a21 * gama1)) /
  (4 * b11 * b21 - gama1 * gama1);
let R2L30 =
  ((b21 + b22) *
    (2 * (a21 + a22) * (b11 + b12) + (a11 + a12) * (gama1 + gama2)) ** 2) /
  (4 * (b11 + b12) * (b21 + b22) - (gama1 + gama2)) ** 2;

let P1L33 =
  ((a11 + a12 - C1) * (b21 + b22) + (a21 + a22 - C2) * (gama1 + gama2)) /
  ((b11 + b12) * (b21 + b22) - (gama1 + gama2) * (gama1 + gama2));
let P2L33 =
  ((a21 + a22 - C2) * (b11 + b12) + (a11 + a12 - C1) * (gama1 + gama2)) /
  ((b11 + b12) * (b21 + b22) - (gama1 + gama2) * (gama1 + gama2));
let R1L34 = P1L33 * C1;
let R2L34 = P2L33 * C2;

let P1H40 = ((a11 - C1) * b21 + (a21 - C2) * gama1) / (b11 * b21 - gama1 ** 2);
let R1H41 = C1 * P1H40;
let P2H40 = ((a21 - C2) * b11 + (a11 - C1) * gama1) / (b11 * b21 - gama1 ** 2);
let R2H41 = C2 * P2H40;

// Capacity ranges according to the table:
// let c126 =
//   ((b11 + b12) *
//     (2 * (a11 + a12) * (b21 + b22) + (a21 + a22) * (gama1 + gama2))) /
//   (4 * (b11 + b12) * (b21 + b22) - (gama1 + gama2) * (gama1 + gama2));
// let c226 =
//   ((b21 + b22) *
//     (2 * (a21 + a22) * (b11 + b12) + (a11 + a12) * (gama1 + gama2))) /
//   (4 * (b11 + b12) * (b21 + b22) - (gama1 + gama2) * (gama1 + gama2));

let leftSideOfc132 =
  a11 +
  (gama1 * (a22 * b12 + a12 * gama2) - b11 * (a12 * b22 + a22 * gama2)) /
    (b12 * b22 - gama2 * gama2);

let leftSideOfc232 =
  a21 +
  (gama1 * (a12 * b22 + a22 * gama2) - b21 * (a22 * b12 + a12 * gama2)) /
    (b12 * b22 - gama2 * gama2);

let leftSideOfc138 =
  (b11 * (2 * a11 * b21 + a21 * gama1)) / (4 * b11 * b21 - gama1 ** 2);

let leftSideOfc238 =
  (b21 * (2 * a21 * b11 + a11 * gama1)) / (4 * b11 * b21 - gama1 ** 2);

// solve
// First we need to determine what kind of market it is:
let q10 = (a11 * b21 + a21 * gama1) / (b11 * b21 - gama1 * gama1);
let q1 = (a12 * b22 + a22 * gama2) / (b12 * b22 - gama2 * gama2);
let q20 = (a21 * b11 + a11 * gama1) / (b11 * b21 - gama1 * gama1);
let q2 = (a22 * b12 + a12 * gama2) / (b12 * b22 - gama2 * gama2);

let c153 = a12 - (alpha2 / alpha1) * (b12 * q10 - gama2 * q20);
let c253 = a22 - (alpha2 / alpha1) * (b22 * q20 - gama2 * q10);
let Q1 = (2 * a11 * b21 + a21 * gama1) / (4 * b11 * b21 - gama1 * gama1);
let Q2 = (2 * a21 * b11 + a11 * gama1) / (4 * b11 * b21 - gama1 * gama1);
// ////////////
console.log(
  "c1:",
  C1,
  "c126",
  c126,
  "leftSideOfc132",
  leftSideOfc132,
  "leftSideOfc138",
  leftSideOfc138,
  "c2:",
  C2,
  "c226",
  c226,
  "leftSideOfc232",
  leftSideOfc232,
  "leftSideOfc238",
  leftSideOfc238
);
let c12;
if (q10 >= q1) {
  console.log("Dominant collective market for Retailer1");
  if (q1 < Q1) {
    console.log("dominant collective market is strong for Retailer1");
    if (P1p <= q1 && q1 < Q1) {
      if (c126 <= C1) {
        if (c226 <= C2) {
          console.log("P1H27 =", P1H27, "and R1H29 = ", R1H29);
          console.log("P1L28 =", P1L28, "and R1L30 = ", R1L30);
          console.log("P1LP2Hc126c226 =");
          console.log("P1HP2Lc126c226 =");
        } else if (leftSideOfc232 <= C2 && C2 < c226) {
          console.log(
            "P1HP2Hc126c232 & P2HP1Hc126c232 =",
            P1H27,
            "and R1P1HP2Hc126c232 = ",
            R1H29
          );
          console.log("P1LP2Lc126c232 =", P1LP2Lc126c232);
          console.log(" P2LP1Lc126c232 =", P2LP1Lc126c232);
          console.log("P1LP2Hc126c232 =", P1LP2Hc126c232);
          console.log("P2HP1Lc126c232 =", P2HP1Lc126c232);
        } else if (leftSideOfc238 <= C2 && C2 < leftSideOfc232) {
          console.log(
            "P1HP2Hc126c238 & P2HP1Hc126c238 =",
            P1H27,
            "and R1P1HP2Hc126c232 = ",
            R1H29
          );
          console.log("P1LP2Hc126c238 =", P1LP2Hc126c238);
          console.log("P2HP1Lc126c238 =", P2HP1Lc126c238);
        } else if (C2 < leftSideOfc238) {
          console.log("P1HP2Hc126c239 =", P1HP2Hc126c239);
          console.log("P1LP2Hc126c239 =", P1LP2Hc126c239);
          console.log("P2HP1Lc126c239 =", P2HP1Lc126c239);
        } else {
          console.log("error");
        }
      } else if (leftSideOfc132 <= C1 && C1 < c126) {
        if (c226 <= C2) {
          console.log("i should write it");
        } else if (leftSideOfc232 <= C2 && C2 < c226) {
          console.log("P1H27 =", P1H27, "and R1H29 = ", R1H29);
          console.log("P1L33 =", P1L33, "and R1L34 = ", R1L34);
        } else if (leftSideOfc238 <= C2 && C2 < leftSideOfc232) {
          console.log("P1HP2Hc132c238 =", P1H27);
          console.log("P1LP2Hc132c238 =", P1LP2Hc132c238);
          console.log("P2HP1Lc132c238 =", P2HP1Lc132c238);
        } else if (C2 < leftSideOfc238) {
          console.log("P1HP2Hc132c239 =", P1HP2Hc132c239);
          console.log("P2HP1Hc132c239 =", P2HP1Hc132c239);
          console.log("P1LP2Hc132c239 =", P1LP2Hc132c239);
          console.log("P2HP1Lc132c239 =", P2HP1Lc132c239);
        } else {
          console.log("error");
        }
      } else if (leftSideOfc138 <= C1 && C1 < leftSideOfc132) {
        if (c226 <= C2) {
          console.log("i should write it");
        } else if (leftSideOfc232 <= C2 && C2 < c226) {
          console.log("i should write it");
        } else if (leftSideOfc238 <= C2 && C2 < leftSideOfc232) {
          console.log("P1H27 =", P1H27, "and R1H29 = ", R1H29);
        } else if (C2 < leftSideOfc238) {
          console.log("P1HP2Hc138c239 =", P1HP2Hc138c239);
          console.log("P2HP1Hc138c239 =", P2HP1Hc138c239);
        } else {
          console.log("error");
        }
      } else if (C1 < leftSideOfc138) {
        if (c226 <= C2) {
          console.log("i should write it");
        } else if (leftSideOfc232 <= C2 && C2 < c226) {
          console.log("i should write it");
        } else if (leftSideOfc238 <= C2 && C2 < leftSideOfc232) {
          console.log("i should write it");
        } else if (C2 < leftSideOfc238) {
          console.log("P1H40 =", P1H40, "and R1H41 = ", R1H41);
        } else {
          console.log("error");
        }
      } else {
        console.log("error");
      }
    } else if (P1p > q1 && q1 < Q1) {
      // 43
      if (leftSideOfc138 <= C1) {
        if (leftSideOfc238 <= C2) {
          console.log("P1H27 =", P1H27, "and R1H29 = ", R1H29);
        } else if (C2 < leftSideOfc238) {
          console.log("P1HP2Hc143c239 =", P1HP2Hc143c239);
          console.log("P2HP1Hc143c239 =", P2HP1Hc143c239);
        } else {
          console.log("error");
        }
        // 39
      } else if (C1 < leftSideOfc138) {
        if (leftSideOfc238 <= C2) {
          console.log("i should write it");
        } else if (C2 < leftSideOfc238) {
          console.log("P1H40 =", P1H40, "and R1H41 = ", R1H41);
        } else {
          console.log("error");
        }
      } else {
        console.log("error");
      }
    } else {
      console.log("error");
    }
  } else if (q1 >= Q1) {
    console.log("dominant collective market is weak for Retailer1");
    if (c126 <= C1) {
      if (c226 <= C2) {
        // console.log("P1L28 =", P1L28, "and R1L30 = ", R1L30);
        // P1L33 -> c2 ==c'1
        console.log("P1L28 =", P1L28, "and R1L30 = ", R1L30);
      } else if (leftSideOfc232 <= C2 && C2 < c226) {
      } else if (leftSideOfc232 > C2) {
      } else {
        console.log("error");
      }
      //
    } else if (leftSideOfc132 <= C1 && C1 < c126) {
      if (c226 <= C2) {
      } else if (leftSideOfc232 <= C2 && C2 < c226) {
        console.log("P1L33 =", P1L33, "and R1L34 = ", R1L34);
        console.log("", leftSideOfc232);
        console.log("", C2);
        console.log("", c226);
      } else if (leftSideOfc232 > C2) {
      } else {
        console.log("error");
      }
    } else if (leftSideOfc132 > C1) {
      if (c226 <= C2) {
      } else if (leftSideOfc232 <= C2 && C2 < c226) {
      } else if (leftSideOfc232 > C2) {
        console.log("P1H40 =", P1H40, "and R1H41 = ", R1H41);
      } else {
        console.log("error");
      }
    } else {
      console.log("error");
    }
  } else {
    console.log("error");
  }
} else if (q10 < q1) {
  console.log("Dominant individual market for Retailer1");

  if (C1 <= c153) {
    console.log("There is no group buying strategy for Retailer1");
    console.log("----------------------no python needed---------------------");
  } else {
    console.log(
      "*************There may be a group buying strategy for Retailer1"
    );
  }
  let a11 = A12;
  let a12 = A11;
  let a21 = A22;
  let a22 = A21;
  let b11 = B12;
  let b12 = B11;
  let b21 = B22;
  let b22 = B21;
  let gama1 = Gama2;
  let gama2 = Gama1;
  let alpha1 = Alpha2;
  let alpha2 = Alpha1;
  // //////////////
  let P1p =
    (2 * (a11 + a12) * (b21 + b22) + (a21 + a22) * (gama1 + gama2)) /
    (4 * (b11 + b12) * (b21 + b22) - (gama1 + gama2) * (gama1 + gama2));
  let P2p =
    (2 * (a21 + a22) * (b11 + b12) + (a11 + a12) * (gama1 + gama2)) /
    (4 * (b11 + b12) * (b21 + b22) - (gama1 + gama2) * (gama1 + gama2));
  let c126c226 =
    ((b11 + b12) *
      (2 * (a11 + a12) * (b21 + b22) + (a21 + a22) * (gama1 + gama2))) /
    (4 * (b11 + b12) * (b21 + b22) - (gama1 + gama2) * (gama1 + gama2));

  // c126c232 :
  let c126c232 =
    ((b11 + b12) *
      ((a11 + a12) * (b21 + b22) + (a21 + a22 - C2) * (gama1 + gama2))) /
    (2 * (b11 + b12) * (b21 + b22) - (gama1 + gama2) * (gama1 + gama2));
  let P1LP2Lc126c232 =
    ((a11 + a12) * (b21 + b22) + (a21 + a22 - C2) * (gama1 + gama2)) /
    (2 * (b11 + b12) * (b21 + b22) - (gama1 + gama2) * (gama1 + gama2));
  let P2LP1Lc126c232 =
    ((a11 + a12) * (gama1 + gama2) + 2 * (a21 + a22 - C2) * (b11 + b12)) /
    (2 * (b11 + b12) * (b21 + b22) - (gama1 + gama2) * (gama1 + gama2));
  let P1LP2Hc126c232 =
    ((a11 + a12) * b22 + a22 * (gama1 * gama2)) /
    (2 * b22 * (b11 + b12) - gama2 * (gama1 * gama2));
  let P2HP1Lc126c232 =
    (2 * a22 * (b12 + b11) + (a11 + a12) * gama2) /
    (4 * b22 * (b11 + b12) - 2 * gama2 * (gama1 + gama2));
  // c126c238:
  let c126c238 =
    ((b11 + b12) * (2 * a11 * b21 + 2 * a12 * b21 + a21 * (gama1 + gama2))) /
    (4 * (b11 + b12) * b21 - gama1 * (gama1 + gama2));
  let c138c226 =
    ((b21 + b22) * (2 * a21 * b11 + 2 * a22 * b11 + a11 * (gama1 + gama2))) /
    (4 * (b11 + b12) * b21 - gama1 * (gama1 + gama2));
  let P1LP2Hc126c238 =
    (2 * b21 * (a11 + a12) + a21 * (gama1 + gama2)) /
    (4 * b21 * (b11 + b12) - gama1 * (gama1 + gama2));
  let P2HP1Lc126c238 =
    (2 * a21 * (b11 + b12) + (a11 + a12) * gama2) /
    (4 * b21 * (b11 + b12) - gama1 * (gama1 + gama2));
  // c126c239:
  let P1LP2Hc126c239 =
    (a11 * b21 + a12 * b21 - (C2 - a21)) /
    (2 * b11 * b21 + 2 * b12 * b21 - gama1 * (gama1 + gama2));
  let P2HP1Lc126c239 =
    (-2 * (C2 - a21) * b11 - 2 * (C2 - a21) * b12 + (a11 + a12) * gama1) /
    (2 * b11 * b21 + 2 * b12 * b21 - gama1 * (gama1 + gama2));
  let P1HP2Hc126c239 =
    (a11 * b21 - C2 * gama1 + a21 * gama1) / (2 * b11 * b21 - gama1 ** 2);
  let P2HP1Hc126c239 =
    (-2 * (C2 - a21) * b11 + a11 * gama1) / (2 * b11 * b21 - gama1 ** 2);
  // c132c238:
  let P1LP2Hc132c238 =
    (2 * (-C1 + a11 + a12) * b21 + a21 * (gama1 + gama2)) /
    (2 * b11 * b21 + 2 * b12 * b21 - gama1 * (gama1 + gama2));
  let P2HP1Lc132c238 =
    (a21 * (b11 + b12) + (-C1 + a11 + a12) * gama1) /
    (2 * b11 * b21 + 2 * b12 * b21 - gama1 * (gama1 + gama2));
  // c132c239:
  let P1LP2Hc132c239 =
    ((-C1 + a11 + a12) * b21 - (C2 - a21) * (gama1 + gama2)) /
    (b11 * b21 + b12 * b21 - gama1 * (gama1 + gama2));
  let P2HP1Lc132c239 =
    ((-C2 + a21) * b11 + (-C2 + a21) * b12 + (-C1 + a11 + a12) * gama1) /
    (b11 * b21 + b12 * b21 - gama1 * (gama1 + gama2));
  let P1HP2Hc132c239 =
    (a11 * b21 - C2 * gama1 + a21 * gama1) / (2 * b11 * b21 - gama1 ** 2);
  let P2HP1Hc132c239 =
    (-2 * (C2 - a21) * b11 + a11 * gama1) / (2 * b11 * b21 - gama1 ** 2);
  // c138c239:
  let P1HP2Hc138c239 =
    (a11 * b21 - C2 * gama1 + a21 * gama1) / (2 * b11 * b21 - gama1 ** 2);
  let P2HP1Hc138c239 =
    (-2 * (C2 - a21) * b11 + a11 * gama1) / (2 * b11 * b21 - gama1 ** 2);
  // c143c239:
  let P1HP2Hc143c239 =
    (a11 * b21 - C2 * gama1 + a21 * gama1) / (2 * b11 * b21 - gama1 ** 2);
  let P2HP1Hc143c239 =
    (-2 * (C2 - a21) * b11 + a11 * gama1) / (2 * b11 * b21 - gama1 ** 2);
  // 44c126c232:
  let For44c126c232 =
    ((b11 + b12) *
      (a11 * (b21 + b22) +
        a12 * (b21 + b22) -
        (C2 - a21 - a22) * (gama1 + gama2))) /
    (2 * b11 * (b21 + b22) + 2 * b12 * (b21 + b22) - (gama1 + gama2) ** 2);
  let P1LP2L44c126c232 =
    (a11 * (b21 + b22) +
      a12 * (b21 + b22) -
      (C2 - a21 - a22) * (gama1 + gama2)) /
    (2 * b11 * (b21 + b22) + 2 * b12 * (b21 + b22) - (gama1 + gama2) ** 2);
  let P2LP1L44c126c232 =
    (2 * (-C2 + a21 + a22) * b11 +
      2 * (-C2 + a21 + a22) * b12 +
      (a11 + a12) * (gama1 + gama2)) /
    (2 * b11 * (b21 + b22) + 2 * b12 * (b21 + b22) - (gama1 + gama2) ** 2);
  // test for change 1 and 2 :
  // pilp3-ilci32c3-i26
  let P1LP2L44c132c226 =
    (2 * (-C1 + a11 + a12) * b21 +
      2 * (-C1 + a11 + a12) * b22 +
      (a21 + a22) * (gama1 + gama2)) /
    (2 * b11 * (b21 + b22) + 2 * b12 * (b21 + b22) - (gama1 + gama2) ** 2);

  let P2LP1L44c132c226 =
    (a21 * (b11 + b12) +
      a22 * (b11 + b12) -
      (C1 - a11 - a12) * (gama1 + gama2)) /
    (2 * b11 * (b21 + b22) + 2 * b12 * (b21 + b22) - (gama1 + gama2) ** 2);

  // test for changed 1 and 2 :

  // 44c126c236:
  let P1LP2H44c126c236 =
    (a11 * b21 + a12 * b21 - (C2 - a21) * (gama1 + gama2)) /
    (2 * b11 * b21 + 2 * b12 * b21 - gama1 * (gama1 + gama2));
  let P2HP1L44c126c236 =
    (-2 * (C2 - a21) * b11 - 2 * (C2 - a21) * b12 + (a11 + a12) * gama1) /
    (2 * b11 * b21 + 2 * b12 * b21 - gama1 * (gama1 + gama2));
  //  change 1 and 2:
  let P2LP1H44c136c226 =
    (a21 * b11 + a22 * b11 - (C1 - a11) * (gama1 + gama2)) /
    (2 * b11 * b21 + 2 * b12 * b21 - gama1 * (gama1 + gama2));
  let P1HP2L44c136c226 =
    (-2 * (C1 - a11) * b21 - 2 * (C1 - a11) * b22 + (a21 + a22) * gama1) /
    (2 * b11 * b21 + 2 * b12 * b21 - gama1 * (gama1 + gama2));
  // 44c132c236:
  let P1LP2H44c132c236 =
    ((-C1 + a11 + a12) * b21 - (C2 - a21) * (gama1 + gama2)) /
    (b11 * b21 + b12 * b21 - gama1 * (gama1 + gama2));
  let P2HP1L44c132c236 =
    ((-C2 + a21) * b11 + (-C2 + a21) * b12 + (-C1 + a11 + a12) * gama1) /
    (b11 * b21 + b12 * b21 - gama1 * (gama1 + gama2));
  // change 1aand 2 :
  let P1HP2L44c136c232 =
    ((-C1 + a11) * b21 + (-C1 + a11) * b22 + (-C2 + a21 + a22) * gama1) /
    (b11 * b21 + b12 * b21 - gama1 * (gama1 + gama2));
  let P2LP1H44c136c232 =
    ((-C2 + a21 + a22) * b11 - (C1 - a11) * (gama1 + gama2)) /
    (b11 * b21 + b12 * b21 - gama1 * (gama1 + gama2));

  // ///////////
  let P1H27 = (2 * a11 * b21 + a21 * gama1) / (4 * b11 * b21 - gama1 ** 2);
  // new change for P1L28:
  let c126 =
    ((b11 + b12) *
      (2 * (a11 + a12) * (b21 + b22) + (a21 + a22) * (gama1 + gama2))) /
    (4 * (b11 + b12) * (b21 + b22) - (gama1 + gama2) * (gama1 + gama2));
  // let P1L28 =
  //   ((a11 + a12 - c126) * (b21 + b22) + (a21 + a22 - C2) * (gama1 + gama2)) /
  //   ((b11 + b12) * (b21 + b22) - (gama1 + gama2) * (gama1 + gama2));
  // let R1L30 = P1L28 * c126;
  let P1L28 =
    (2 * (a11 + a12) * (b21 + b22) + (a21 + a22) * (gama1 + gama2)) /
    (4 * (b11 + b12) * (b21 + b22) - (gama1 + gama2) * (gama1 + gama2));
  let R1L30 =
    ((b11 + b12) *
      (2 * (a11 + a12) * (b21 + b22) + (a21 + a22) * (gama1 + gama2)) ** 2) /
    (4 * (b11 + b12) * (b21 + b22) - (gama1 + gama2) ** 2) ** 2;
  let R1H29 =
    (b11 * ((2 * a11 * b21 + a21 * gama1) * (2 * a11 * b21 + a21 * gama1))) /
    (4 * b11 * b21 - gama1 * gama1) ** 2;

  let P2H27 = (2 * a21 * b11 + a11 * gama1) / (4 * b11 * (gama1 * gama1));

  let P2L28 =
    (2 * (a21 + a22) * (b11 + b12) + (a11 + a12) * (gama1 + gama2)) /
    (4 * (b11 + b12) * (b21 + b22) - (gama1 + gama2) * (gama1 + gama2));
  // new change for P2L28:
  let c226 =
    ((b21 + b22) *
      (2 * (a21 + a22) * (b11 + b12) + (a11 + a12) * (gama1 + gama2))) /
    (4 * (b11 + b12) * (b21 + b22) - (gama1 + gama2) * (gama1 + gama2));
  // let P2L28 =
  //   ((a11 + a12 - c226) * (b21 + b22) + (a21 + a22 - C1) * (gama1 + gama2)) /
  //   ((b11 + b12) * (b21 + b22) - (gama1 + gama2) * (gama1 + gama2));
  // let R2L30 = P2L28 * c226;

  let R2H29 =
    (b21 * (2 * a21 * b11 + a11 * gama1) * (2 * a11 * b21 + a21 * gama1)) /
    (4 * b11 * b21 - gama1 * gama1);
  let R2L30 =
    ((b21 + b22) *
      (2 * (a21 + a22) * (b11 + b12) + (a11 + a12) * (gama1 + gama2)) ** 2) /
    (4 * (b11 + b12) * (b21 + b22) - (gama1 + gama2)) ** 2;

  let P1L33 =
    ((a11 + a12 - C1) * (b21 + b22) + (a21 + a22 - C2) * (gama1 + gama2)) /
    ((b11 + b12) * (b21 + b22) - (gama1 + gama2) * (gama1 + gama2));
  let P2L33 =
    ((a21 + a22 - C2) * (b11 + b12) + (a11 + a12 - C1) * (gama1 + gama2)) /
    ((b11 + b12) * (b21 + b22) - (gama1 + gama2) * (gama1 + gama2));
  let R1L34 = P1L33 * C1;
  let R2L34 = P2L33 * C2;

  let P1H40 =
    ((a11 - C1) * b21 + (a21 - C2) * gama1) / (b11 * b21 - gama1 ** 2);
  let R1H41 = C1 * P1H40;
  let P2H40 =
    ((a21 - C2) * b11 + (a11 - C1) * gama1) / (b11 * b21 - gama1 ** 2);
  let R2H41 = C2 * P2H40;

  // Capacity ranges according to the table:
  // let c126 =
  //   ((b11 + b12) *
  //     (2 * (a11 + a12) * (b21 + b22) + (a21 + a22) * (gama1 + gama2))) /
  //   (4 * (b11 + b12) * (b21 + b22) - (gama1 + gama2) * (gama1 + gama2));
  // let c226 =
  //   ((b21 + b22) *
  //     (2 * (a21 + a22) * (b11 + b12) + (a11 + a12) * (gama1 + gama2))) /
  //   (4 * (b11 + b12) * (b21 + b22) - (gama1 + gama2) * (gama1 + gama2));

  let leftSideOfc132 =
    a11 +
    (gama1 * (a22 * b12 + a12 * gama2) - b11 * (a12 * b22 + a22 * gama2)) /
      (b12 * b22 - gama2 * gama2);

  let leftSideOfc232 =
    a21 +
    (gama1 * (a12 * b22 + a22 * gama2) - b21 * (a22 * b12 + a12 * gama2)) /
      (b12 * b22 - gama2 * gama2);

  let leftSideOfc138 =
    (b11 * (2 * a11 * b21 + a21 * gama1)) / (4 * b11 * b21 - gama1 ** 2);

  let leftSideOfc238 =
    (b21 * (2 * a21 * b11 + a11 * gama1)) / (4 * b11 * b21 - gama1 ** 2);

  // solve
  // First we need to determine what kind of market it is:
  let q10 = (a11 * b21 + a21 * gama1) / (b11 * b21 - gama1 * gama1);
  let q1 = (a12 * b22 + a22 * gama2) / (b12 * b22 - gama2 * gama2);
  let q20 = (a21 * b11 + a11 * gama1) / (b11 * b21 - gama1 * gama1);
  let q2 = (a22 * b12 + a12 * gama2) / (b12 * b22 - gama2 * gama2);

  // let c153 = a12 - (alpha2 / alpha1) * (b12 * q10 - gama2 * q20);
  let c253 = a22 - (alpha2 / alpha1) * (b22 * q20 - gama2 * q10);
  let Q1 = (2 * a11 * b21 + a21 * gama1) / (4 * b11 * b21 - gama1 * gama1);
  let Q2 = (2 * a21 * b11 + a11 * gama1) / (4 * b11 * b21 - gama1 * gama1);
  // ////////////
  if (q1 < Q1) {
    console.log("dominant collective market is strong for Retailer1");
    if (P1p <= q1 && q1 < Q1) {
      if (c126 <= C1) {
        if (c226 <= C2) {
          console.log("P1H27 =", P1H27, "and R1H29 = ", R1H29);
          console.log("P1L28 =", P1L28, "and R1L30 = ", R1L30);
          console.log("P1LP2Hc126c226 =");
          console.log("P1HP2Lc126c226 =");
        } else if (leftSideOfc232 <= C2 && C2 < c226) {
          console.log(
            "P1HP2Hc126c232 & P2HP1Hc126c232 =",
            P1H27,
            "and R1P1HP2Hc126c232 = ",
            R1H29
          );
          console.log("P1LP2Lc126c232 =", P1LP2Lc126c232);
          console.log(" P2LP1Lc126c232 =", P2LP1Lc126c232);
          console.log("P1LP2Hc126c232 =", P1LP2Hc126c232);
          console.log("P2HP1Lc126c232 =", P2HP1Lc126c232);
        } else if (leftSideOfc238 <= C2 && C2 < leftSideOfc232) {
          console.log(
            "P1HP2Hc126c238 & P2HP1Hc126c238 =",
            P1H27,
            "and R1P1HP2Hc126c232 = ",
            R1H29
          );
          console.log("P1LP2Hc126c238 =", P1LP2Hc126c238);
          console.log("P2HP1Lc126c238 =", P2HP1Lc126c238);
        } else if (C2 < leftSideOfc238) {
          console.log("P1HP2Hc126c239 =", P1HP2Hc126c239);
          console.log("P1LP2Hc126c239 =", P1LP2Hc126c239);
          console.log("P2HP1Lc126c239 =", P2HP1Lc126c239);
        } else {
          console.log("error");
        }
      } else if (leftSideOfc132 <= C1 && C1 < c126) {
        if (c226 <= C2) {
          console.log("i should write it");
        } else if (leftSideOfc232 <= C2 && C2 < c226) {
          console.log("P1H27 =", P1H27, "and R1H29 = ", R1H29);
          console.log("P1L33 =", P1L33, "and R1L34 = ", R1L34);
        } else if (leftSideOfc238 <= C2 && C2 < leftSideOfc232) {
          console.log("P1HP2Hc132c238 =", P1H27);
          console.log("P1LP2Hc132c238 =", P1LP2Hc132c238);
          console.log("P2HP1Lc132c238 =", P2HP1Lc132c238);
        } else if (C2 < leftSideOfc238) {
          console.log("P1HP2Hc132c239 =", P1HP2Hc132c239);
          console.log("P2HP1Hc132c239 =", P2HP1Hc132c239);
          console.log("P1LP2Hc132c239 =", P1LP2Hc132c239);
          console.log("P2HP1Lc132c239 =", P2HP1Lc132c239);
        } else {
          console.log("error");
        }
      } else if (leftSideOfc138 <= C1 && C1 < leftSideOfc132) {
        if (c226 <= C2) {
          console.log("i should write it");
        } else if (leftSideOfc232 <= C2 && C2 < c226) {
          console.log("i should write it");
        } else if (leftSideOfc238 <= C2 && C2 < leftSideOfc232) {
          console.log("P1H27 =", P1H27, "and R1H29 = ", R1H29);
        } else if (C2 < leftSideOfc238) {
          console.log("P1HP2Hc138c239 =", P1HP2Hc138c239);
          console.log("P2HP1Hc138c239 =", P2HP1Hc138c239);
        } else {
          console.log("error");
        }
      } else if (C1 < leftSideOfc138) {
        if (c226 <= C2) {
          console.log("i should write it");
        } else if (leftSideOfc232 <= C2 && C2 < c226) {
          console.log("i should write it");
        } else if (leftSideOfc238 <= C2 && C2 < leftSideOfc232) {
          console.log("i should write it");
        } else if (C2 < leftSideOfc238) {
          console.log("P1H40 =", P1H40, "and R1H41 = ", R1H41);
        } else {
          console.log("error");
        }
      } else {
        console.log("error");
      }
    } else if (P1p > q1 && q1 < Q1) {
      // 43
      if (leftSideOfc138 <= C1) {
        if (leftSideOfc238 <= C2) {
          console.log("P1H27 =", P1H27, "and R1H29 = ", R1H29);
        } else if (C2 < leftSideOfc238) {
          console.log("P1HP2Hc143c239 =", P1HP2Hc143c239);
          console.log("P2HP1Hc143c239 =", P2HP1Hc143c239);
        } else {
          console.log("error");
        }
        // 39
      } else if (C1 < leftSideOfc138) {
        if (leftSideOfc238 <= C2) {
          console.log("i should write it");
        } else if (C2 < leftSideOfc238) {
          console.log("P1H40 =", P1H40, "and R1H41 = ", R1H41);
        } else {
          console.log("error");
        }
      } else {
        console.log("error");
      }
    } else {
      console.log("error");
    }
  } else if (q1 >= Q1) {
    console.log("dominant collective market is weak for Retailer1");

    console.log(
      "c1:",
      C1,
      "c126",
      c126,
      "leftSideOfc132",
      leftSideOfc132,
      "leftSideOfc138",
      leftSideOfc138,
      "c2:",
      C2,
      "c226",
      c226,
      "leftSideOfc232",
      leftSideOfc232,
      "leftSideOfc238",
      leftSideOfc238
    );

    // console.log("c126c238", c126c238);
    // console.log("c138c226", c138c226);
    if (c126 <= C1) {
      console.log("test");
      if (c226 <= C2) {
        // console.log("P1L28 =", P1L28, "and R1L30 = ", R1L30);
        // P1L33 -> c2 ==c'1
        console.log("P1L28 =", P1L28, "and R1L30 = ", R1L30);
      } else if (leftSideOfc232 <= C2 && C2 < c226) {
        console.log("P1LP2L44c126c232 =", P1LP2L44c126c232);
        console.log("P2LP1L44c126c232 =", P2LP1L44c126c232);
      } else if (leftSideOfc232 > C2) {
        console.log(
          "P1LP2H44c126c236 =",
          P1LP2H44c126c236,
          "R1:",
          P1LP2H44c126c236 * c126
        );
        console.log(
          "P2HP1L44c126c236 =",
          P2HP1L44c126c236,
          "R1:",
          P2HP1L44c126c236 * C2
        );
      } else {
        console.log("error");
      }
      console.log("test");

      //
    } else if (leftSideOfc132 <= C1 && C1 < c126) {
      if (c226 <= C2) {
        console.log("i should write this");
      } else if (leftSideOfc232 <= C2 && C2 < c226) {
        console.log("P1L33 =", P1L33, "and R1L34 = ", R1L34);
        console.log("", leftSideOfc232);
        console.log("", C2);
        console.log("", c226);
      } else if (leftSideOfc232 > C2) {
        console.log(
          "P1LP2H44c132c236 =",
          P1LP2H44c132c236,
          "R1:",
          P1LP2H44c132c236 * C1
        );
        console.log(
          "P2HP1L44c132c236 =",
          P2HP1L44c132c236,
          "R2:",
          P2HP1L44c132c236 * C2
        );
      } else {
        console.log("error");
      }
    } else if (leftSideOfc132 > C1) {
      if (c226 <= C2) {
        let pP1HP2L44c136c232 =
          ((-C1 + a11) * b21 +
            (-C1 + a11) * b22 +
            (-c226 + a21 + a22) * gama1) /
          (b11 * b21 + b12 * b21 - gama1 * (gama1 + gama2));
        let pP2LP1H44c136c232 =
          ((-c226 + a21 + a22) * b11 - (C1 - a11) * (gama1 + gama2)) /
          (b11 * b21 + b12 * b21 - gama1 * (gama1 + gama2));
        console.log(
          "P1HP2L44c136c226",
          pP1HP2L44c136c232,
          "R1:",
          pP1HP2L44c136c232 * C1
        );
        console.log(
          "P2LP1H44c136c226",
          pP2LP1H44c136c232,
          "R2:",
          pP2LP1H44c136c232 * c226
        );
      } else if (leftSideOfc232 <= C2 && C2 < c226) {
        console.log(
          "P1HP2L44c136c232",
          P1HP2L44c136c232,
          "R1:",
          P1HP2L44c136c232 * C1
        );
        console.log(
          "P2LP1H44c136c232",
          P2LP1H44c136c232,
          "R2:",
          P2LP1H44c136c232 * C2
        );
      } else if (leftSideOfc232 > C2) {
        console.log("P1H40 =", P1H40, "and R1H41 = ", R1H41);
        console.log("P2H40 =", P2H40, "and R2H41 = ", R2H41);
      } else {
        console.log("error");
      }
    } else {
      console.log("error");
    }
  } else {
    console.log("error");
  }
} else {
  console.log("error");
}
