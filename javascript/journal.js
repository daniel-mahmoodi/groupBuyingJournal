console.log("-----------------journal-----------------");
let A11 = 150;
let A12 = 200;
let A21 = 250;
let A22 = 300;
let B11 = 2.1;
let B12 = 2.1;
let B21 = 0.8;
let B22 = 2.5;
let Gama1 = 0.5;
let Gama2 = 0.5;
let Alpha1 = 1;
let Alpha2 = 2;
// /////////////////////////////////////////////
let C1 = 50;
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
let P1HP2Hc132c238 =
  (2 * a11 * b21 + a21 * gama1) / (4 * b11 * b21 - gama1 * gama1);
let P2HP1Hc132c238 =
  (2 * a21 * b11 + a11 * gama1) / (4 * b11 * b21 - gama1 * gama1);
let P1LP2Hc132c238 =
  (2 * (-C1 + a11 + a12) * b21 + a21 * (gama1 + gama2)) /
  (2 * b11 * b21 + 2 * b12 * b21 - gama1 * (gama1 + gama2));
let P2HP1Lc132c238 =
  (a21 * (b11 + b12) + (-C1 + a11 + a12) * gama1) /
  (2 * b11 * b21 + 2 * b12 * b21 - gama1 * (gama1 + gama2));
// c138c232:
let P1HP2Hc138c232 =
  (2 * a21 * b11 + a11 * gama1) / (4 * b11 * b21 - gama1 * gama1);

let P2HP1Hc138c232 =
  (2 * a11 * b21 + a21 * gama1) / (4 * b11 * b21 - gama1 * gama1);
let P1LP2Hc138c232 =
  (2 * (-C2 + a21 + a22) * b11 + a11 * (gama1 + gama2)) /
  (2 * b11 * b21 + 2 * b12 * b21 - gama1 * (gama1 + gama2));
let P2HP1Lc138c232 =
  (a11 * (b21 + b22) + (-C2 + a21 + a22) * gama1) /
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
// c139c232:
let P2LP1Hc139c232 =
  ((-C2 + a21 + a22) * b11 - (C1 - a11) * (gama1 + gama2)) /
  (b21 * b11 + b22 * b11 - gama1 * (gama1 + gama2));
let P1HP2Lc139c232 =
  ((-C1 + a11) * b21 + (-C1 + a11) * b22 + (-C2 + a21 + a22) * gama1) /
  (b21 * b11 + b22 * b11 - gama1 * (gama1 + gama2));
let P2HP1Hc139c232 =
  (a21 * b11 - C1 * gama1 + a11 * gama1) / (2 * b11 * b21 - gama1 ** 2);
let P1HP2Hc139c232 =
  (-2 * (C1 - a11) * b21 + a21 * gama1) / (2 * b11 * b21 - gama1 ** 2);
// c138c239:
let P1HP2Hc138c239 =
  (a11 * b21 - C2 * gama1 + a21 * gama1) / (2 * b11 * b21 - gama1 ** 2);
let P2HP1Hc138c239 =
  (-2 * (C2 - a21) * b11 + a11 * gama1) / (2 * b11 * b21 - gama1 ** 2);
// c139c238:
let P1HP2Hc139c238 =
  (a21 * b11 - C1 * gama1 + a11 * gama1) / (2 * b11 * b21 - gama1 ** 2);
let P2HP1Hc139c238 =
  (-2 * (C1 - a11) * b21 + a21 * gama1) / (2 * b11 * b21 - gama1 ** 2);
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
        }  if (leftSideOfc232 <= C2 && C2 < c226) {
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
        }  if (leftSideOfc238 <= C2 && C2 < leftSideOfc232) {
          console.log(
            "P1HP2Hc126c238 & P2HP1Hc126c238 =",
            P1H27,
            "and R1P1HP2Hc126c232 = ",
            R1H29
          );
          console.log("P1LP2Hc126c238 =", P1LP2Hc126c238);
          console.log("P2HP1Lc126c238 =", P2HP1Lc126c238);
        }  if (C2 < leftSideOfc238) {
          console.log("P1HP2Hc126c239 =", P1HP2Hc126c239);
          console.log("P1LP2Hc126c239 =", P1LP2Hc126c239);
          console.log("P2HP1Lc126c239 =", P2HP1Lc126c239);
        } else {
          console.log("error");
        }
      }  if (leftSideOfc132 <= C1 && C1 < c126) {
        if (c226 <= C2) {
          console.log("i should write it");
        } if (leftSideOfc232 <= C2 && C2 < c226) {
          console.log("P1H27 =", P1H27, "and R1H29 = ", R1H29);
          console.log("P1L33 =", P1L33, "and R1L34 = ", R1L34);
        }  if (leftSideOfc238 <= C2 && C2 < leftSideOfc232) {
          console.log("P1HP2Hc132c238 =", P1H27);
          console.log("P1LP2Hc132c238 =", P1LP2Hc132c238);
          console.log("P2HP1Lc132c238 =", P2HP1Lc132c238);
        }  if (C2 < leftSideOfc238) {
          console.log(
            "leftSideOfc132 <= C1 && C1 < c126  ,  C2 < leftSideOfc238 !!!!!==> P1HP2Hc132c239 =",
            P1HP2Hc132c239
          );
          console.log("P2HP1Hc132c239 =", P2HP1Hc132c239);
          console.log("P1LP2Hc132c239 =", P1LP2Hc132c239);
          console.log("P2HP1Lc132c239 =", P2HP1Lc132c239);
        } else {
          console.log("error");
        }
      }  if (leftSideOfc138 <= C1 && C1 < leftSideOfc132) {
        if (c226 <= C2) {
          console.log("i should write it");
        }  if (leftSideOfc232 <= C2 && C2 < c226) {
          console.log("c1:38-4,c2:32-4");
        }  if (leftSideOfc238 <= C2 && C2 < leftSideOfc232) {
          console.log("P1H27 =", P1H27, "and R1H29 = ", R1H29);
        }  if (C2 < leftSideOfc238) {
          console.log("P1HP2Hc138c239 =", P1HP2Hc138c239);
          console.log("P2HP1Hc138c239 =", P2HP1Hc138c239);
        } else {
          console.log("error");
        }
      }  if (C1 < leftSideOfc138) {
        if (c226 <= C2) {
          console.log("i should write it");
        }  if (leftSideOfc232 <= C2 && C2 < c226) {
          console.log(
            "c1:39-4,c2:32-4 faghat copy shode C1 < leftSideOfc138,leftSideOfc232 <= C2 && C2 < c226 ==>"
          );
          console.log(" P2HP1Hc139c232 =", P2HP1Hc139c232, P2HP1Hc139c232 * C2);
          console.log("P1HP2Hc139c232 =", P1HP2Hc139c232, P1HP2Hc139c232 * C1);
          console.log("P2LP1Hc139c232 =", P2LP1Hc139c232, P2LP1Hc139c232 * C2);
          console.log("P1HP2Lc139c232 =", P1HP2Lc139c232, P1HP2Lc139c232 * C1);
        }  if (leftSideOfc238 <= C2 && C2 < leftSideOfc232) {
          console.log("i should write it");
        }  if (C2 < leftSideOfc238) {
          console.log("P1H40 =", P1H40, "and R1H41 = ", R1H41);
        } else {
          console.log("error");
        }
      } else {
        console.log("error");
      }
    }  if (P1p > q1 && q1 < Q1) {
      // 43
      if (leftSideOfc138 <= C1) {
        if (leftSideOfc238 <= C2) {
          console.log("P1H27 =", P1H27, "and R1H29 = ", R1H29);
        }  if (C2 < leftSideOfc238) {
          console.log("P1HP2Hc143c239 =", P1HP2Hc143c239);
          console.log("P2HP1Hc143c239 =", P2HP1Hc143c239);
        } else {
          console.log("error");
        }
        // 39
      }  if (C1 < leftSideOfc138) {
        if (leftSideOfc238 <= C2) {
          console.log("i should write it");
        }  if (C2 < leftSideOfc238) {
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
  }  if (q1 >= Q1) {
    console.log("dominant collective market is weak for Retailer1");
    if (c126 <= C1) {
      if (c226 <= C2) {
        console.log("c126 <= C1 , c226 <= C2");
        // console.log("P1L28 =", P1L28, "and R1L30 = ", R1L30);
        // P1L33 -> c2 ==c'1
        console.log("P1L28 =", P1L28, "and R1L30 = ", R1L30);
      }
      if (leftSideOfc232 <= C2 && C2 < c226) {
        console.log("c126 <= C1 , leftSideOfc232 <= C2 && C2 < c226");
      }
      if (leftSideOfc232 > C2) {
        console.log("c126 <= C1 , leftSideOfc232 > C2");
      } else {
        console.log("error");
      }
      //
    }
    if (leftSideOfc132 <= C1 && C1 < c126) {
      console.log("leftSideOfc132 <= C1 && C1 < c126");
      if (c226 <= C2) {
        console.log("leftSideOfc132 <= C1 && C1 < c126, c226 <= C2");
      }
      if (leftSideOfc232 <= C2 && C2 < c226) {
        console.log(
          "leftSideOfc132 <= C1 && C1 < c126 , leftSideOfc232 <= C2 && C2 < c226"
        );
        console.log("P1L33 =", P1L33, "and R1L34 = ", R1L34);
        console.log("P2L33 =", P2L33, "and R2L34 = ", R2L34);
        console.log("", leftSideOfc232);
        console.log("", C2);
        console.log("", c226);
        console.log(
          "baresi inke agar darin baze ham hast che gheymatai midahad :leftSideOfc238 > C2"
          );
          console.log(
            "P1LP2H44c132c236 =",
            P1LP2H44c132c236,
            "and R1 = ",
            P1LP2H44c132c236 * C1
            );
            console.log(
              "P2HP1L44c132c236 =",
              P2HP1L44c132c236,
              "and R2 = ",
              P2HP1L44c132c236 * C2
              );
            }
            if (leftSideOfc232 > C2) {
              console.log("leftSideOfc232 > C2");
              console.log("P1LP2H44c132c236 =", P1LP2H44c132c236, "and R1 = ", P1LP2H44c132c236*C1);
              console.log("P2HP1L44c132c236 =", P2HP1L44c132c236, "and R2 = ", P2HP1L44c132c236*C2);
      }
      //  else {
      //   console.log("error");
      // }
    }
    if (leftSideOfc132 > C1) {
      console.log("leftSideOfc132 > C1");
      if (c226 <= C2) {
        console.log("c226 <= C2");
      }
      if (leftSideOfc232 <= C2 && C2 < c226) {
        console.log("leftSideOfc232 <= C2 && C2 < c226");
        console.log(
          "P1HP2L44c136c232 =",
          P1HP2L44c136c232,
          "and R1 = ",
          P1HP2L44c136c232 * C1
        );
        console.log(
          "P2LP1H44c136c232 =",
          P2LP1H44c136c232,
          "and R2 = ",
          P2LP1H44c136c232 * C2
        );
      }
      if (leftSideOfc232 > C2) {
        console.log("P1H40 =", P1H40, "and R1H41 = ", R1H41);
      } else {
        console.log(
          "dar inbaze nist: leftSideOfc132 > C1, leftSideOfc232 > C2"
        );
      }
    } 
    // else {
    //   console.log("dar inbaze nist : leftSideOfc132 > C1");
    // }
  } else {
    console.log("error");
  }
} 
 if (q10 < q1) {
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
    (b21 * b11 + b22 * b11 - gama1 * (gama1 + gama2));
  let P2LP1H44c136c232 =
    ((-C2 + a21 + a22) * b11 - (C1 - a11) * (gama1 + gama2)) /
    (b21 * b11 + b22 * b11 - gama1 * (gama1 + gama2));

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
  console.log(
    "innnnnnnnnnnnnnnnnnnnneshtebaheeeeeee bbbinn kojaha bazeshtebahnevesthius"
  );
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
  //1.hardogheymate balatar:
  let P1HP2HNEW = (2 * a11 * b21 + a21 * gama1) / (4 * b11 * b21 - gama1 ** 2);
  let P2HP1HNEW = (2 * a21 * b11 + a11 * gama1) / (4 * b11 * b21 - gama1 ** 2);
  let R1HR2HNEW =
    (b11 * ((2 * a11 * b21 + a21 * gama1) * (2 * a11 * b21 + a21 * gama1))) /
    (4 * b11 * b21 - gama1 * gama1) ** 2;
  let R2HR1HNEW =
    (b21 * (2 * a21 * b11 + a11 * gama1) * (2 * a21 * b11 + a11 * gama1)) /
    (4 * b11 * b21 - gama1 * gama1) ** 2;
  // 2.retailer1  gheymate balatar va digari gheymate paintar:
  let P1HP2LNew =
    (a11 * (b21 + b22) + (a21 + a22 - C2) * gama1) /
    (2 * b11 * (b21 + b22) - gama1 * (gama1 + gama2));
  let P2LP1HNew =
    (2 * b11 * (a21 + a22 - C2) + a11 * (gama1 + gama2)) /
    (2 * b11 * (b21 + b22) - gama1 * (gama1 + gama2));
  let R1HNEW = P1HP2LNew * C1;
  let R2LNEW = P2LP1HNew * C2;
  // 3.retailer2  gheymate balatar va digari gheymate paintar:
  let P2HP1LNew =
    (a21 * (b11 + b12) + (a11 + a12 - C1)) /
    (2 * b21 * (b11 + b12) - gama1 * (gama1 + gama2));
  let P1LP2HNew =
    (2 * b21 * (a11 + a12 - C1) + a21 * (gama1 + gama2)) /
    (2 * b21 * (b11 + b12) - gama1 * (gama1 + gama2));
  let R1LNEW = P2HP1LNew * C2;
  let R2HNEW = P1LP2HNew * C1;
  //3morede bala new ast.
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
        }  if (leftSideOfc232 <= C2 && C2 < c226) {
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
        }  if (leftSideOfc238 <= C2 && C2 < leftSideOfc232) {
          console.log(
            "P1HP2Hc126c238 & P2HP1Hc126c238 =",
            P1H27,
            "and R1P1HP2Hc126c232 = ",
            R1H29
          );
          console.log("P1LP2Hc126c238 =", P1LP2Hc126c238);
          console.log("P2HP1Lc126c238 =", P2HP1Lc126c238);
        }  if (C2 < leftSideOfc238) {
          console.log("P1HP2Hc126c239 =", P1HP2Hc126c239);
          console.log("P1LP2Hc126c239 =", P1LP2Hc126c239);
          console.log("P2HP1Lc126c239 =", P2HP1Lc126c239);
        } else {
          console.log("error");
        }
      }  if (leftSideOfc132 <= C1 && C1 < c126) {
        if (c226 <= C2) {
          console.log("i should write it");
        }  if (leftSideOfc232 <= C2 && C2 < c226) {
          console.log("P1H27 =", P1H27, "and R1H29 = ", R1H29);
          console.log("P1L33 =", P1L33, "and R1L34 = ", R1L34);
        }  if (leftSideOfc238 <= C2 && C2 < leftSideOfc232) {
          console.log("P1HP2Hc132c238 =", P1H27);
          console.log("P1LP2Hc132c238 =", P1LP2Hc132c238);
          console.log("P2HP1Lc132c238 =", P2HP1Lc132c238);
        }  if (C2 < leftSideOfc238) {
          console.log("P1HP2Hc132c239 =", P1HP2Hc132c239);
          console.log("P2HP1Hc132c239 =", P2HP1Hc132c239);
          console.log("P1LP2Hc132c239 =", P1LP2Hc132c239);
          console.log("P2HP1Lc132c239 =", P2HP1Lc132c239);
        } else {
          console.log("error");
        }
      }  if (leftSideOfc138 <= C1 && C1 < leftSideOfc132) {
        if (c226 <= C2) {
          console.log("i should write it");
        }  if (leftSideOfc232 <= C2 && C2 < c226) {
          console.log("i should write it");
        }  if (leftSideOfc238 <= C2 && C2 < leftSideOfc232) {
          console.log("P1H27 =", P1H27, "and R1H29 = ", R1H29);
        }  if (C2 < leftSideOfc238) {
          console.log("P1HP2Hc138c239 =", P1HP2Hc138c239);
          console.log("P2HP1Hc138c239 =", P2HP1Hc138c239);
        } else {
          console.log("error");
        }
      }  if (C1 < leftSideOfc138) {
        if (c226 <= C2) {
          console.log("i should write it");
        }  if (leftSideOfc232 <= C2 && C2 < c226) {
          console.log("//");
          console.log("C1 < leftSideOfc138");
          console.log("P1HP2Lc139c232", P1HP2Lc139c232, P1HP2Lc139c232 * C1);
          console.log("P2LP1Hc139c232", P2LP1Hc139c232, P2LP1Hc139c232 * C2);
          console.log("P1HP2Hc139c232", P1HP2Hc139c232, P1HP2Hc139c232 * C1);
          console.log("P2HP1Hc139c232", P2HP1Hc139c232, P2HP1Hc139c232 * C2);
          console.log("leftSideOfc238 <= C2 && C2 < leftSideOfc232:");
          console.log("P1HP2Hc139c238", P1HP2Hc139c238, P1HP2Hc139c238 * C1);
          console.log("P2HP1Hc139c238", P2HP1Hc139c238, P2HP1Hc139c238 * C2);
          console.log("C2 < leftSideOfc238:");
          console.log("P1H40 =", P1H40, "and R1H41 = ", R1H41);
          console.log("//");
          // ghesmate pain sharayeti ra dar nazar migirim k agar estesnaan in etefagh bioftad:
          // c1: 50 c126 206.3 leftSideOfc132 -830 leftSideOfc138 88.5
          // c2: 50 c226 313.2 leftSideOfc232 -50 leftSideOfc238 135.5
          console.log(
            " ghesmate pain sharayeti ra dar nazar migirim k agar estesnaan in etefagh bioftad: c1: 50 c126 206.3 leftSideOfc132 -830 leftSideOfc138 88.5  c2: 50 c226 313.2 leftSideOfc232 -50 leftSideOfc238 135.5"
          );
          console.log("leftSideOfc138 <= C1 && C1 < leftSideOfc132");
          if (c226 <= C2) {
            console.log("i should write it");
          }
          if (leftSideOfc232 <= C2 && C2 < c226) {
            console.log("leftSideOfc232 <= C2 && C2 < c226");
            console.log("P1HP2Hc138c232", P1HP2Hc138c232, P1HP2Hc138c232 * C1);
            console.log("P2HP1Hc138c232", P2HP1Hc138c232, P2HP1Hc138c232 * C2);
            console.log("P1LP2Hc138c232", P1LP2Hc138c232, P1LP2Hc138c232 * C1);
            console.log("P2HP1Lc138c232", P2HP1Lc138c232, P2HP1Lc138c232 * C2);

            console.log(
              "leftSideOfc238 <= C2 && C2 < leftSideOfc232 ==>c132,c232"
            );
            console.log("P1H27 =", P1H27, "and R1H29 = ", R1H29, P1H27 * C1);
            console.log("P2H27 =", P2H27, "and R2H29 = ", R2H29, P2H27 * C2);

            console.log("C2 < leftSideOfc238");
            console.log(
              "P1HP2Hc138c239 =",
              P1HP2Hc138c239,
              P1HP2Hc138c239 * C1
            );
            console.log(
              "P2HP1Hc138c239 =",
              P2HP1Hc138c239,
              P2HP1Hc138c239 * C2
            );
          }
          if (leftSideOfc238 <= C2 && C2 < leftSideOfc232) {
            console.log("P1H27 =", P1H27, "and R1H29 = ", R1H29);
          }
          if (C2 < leftSideOfc238) {
            console.log("P1HP2Hc138c239 =", P1HP2Hc138c239);
            console.log("P2HP1Hc138c239 =", P2HP1Hc138c239);
          }
          // else {
          //   console.log("error");
          // }
          console.log("//");
        }
        if (leftSideOfc238 <= C2 && C2 < leftSideOfc232) {
          console.log("i should write it");
        }
        if (C2 < leftSideOfc238) {
          console.log("P1H40 =", P1H40, "and R1H41 = ", R1H41);
        }
        // else {
        //   console.log("error");
        // }
      } else {
        console.log("error");
      }
    }  if (P1p > q1 && q1 < Q1) {
      // 43
      console.log("43");
      if (leftSideOfc138 <= C1) {
        if (leftSideOfc238 <= C2) {
          console.log("P1H27 =", P1H27, "and R1H29 = ", R1H29);
        }  if (C2 < leftSideOfc238) {
          console.log("P1HP2Hc143c239 =", P1HP2Hc143c239);
          console.log("P2HP1Hc143c239 =", P2HP1Hc143c239);
        } else {
          console.log("error");
        }
        // 39
        console.log("39");
      }  if (C1 < leftSideOfc138) {
        if (leftSideOfc238 <= C2) {
          console.log("i should write it");
        }  if (C2 < leftSideOfc238) {
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
  }  if (q1 >= Q1) {
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
      }  if (leftSideOfc232 <= C2 && C2 < c226) {
        console.log("P1LP2L44c126c232 =", P1LP2L44c126c232,P1LP2L44c126c232*c126);
        console.log("P2LP1L44c126c232 =", P2LP1L44c126c232,P2LP1L44c126c232*C2);
      }  if (leftSideOfc232 > C2) {
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
    } if (leftSideOfc132 <= C1 && C1 < c126) {
      console.log('leftSideOfc132 <= C1 && C1 < c126');
      if (c226 <= C2) {
        console.log("i should write this c226 <= C2");
      }  if (leftSideOfc232 <= C2 && C2 < c226) {
        console.log('leftSideOfc232 <= C2 && C2 < c226');
        console.log("P1L33 =", P1L33, "and R1L34 = ", R1L34,'or',R1=P1L33*C1);
        console.log("P2L33 =", P2L33, "and R2L34 = ", R2L34);
console.log('batavajoh b mesale adadi zaheran in NEW ha eshtebah hastan');
        console.log(
          "1 gheymate balatar retailer 2 gheymate paintar",
          "P1HP2LNew =",
          P1HP2LNew,
          "and R1HNEW = ",
          R1HNEW
        );
        console.log(
          "1 gheymate balatar retailer 2 gheymate paintar",
          "P2LP1HNew =",
          P2LP1HNew,
          "and R2LNEW = ",
          R2LNEW
        );
        console.log(
          "1 gheymate balatar retailer 2 gheymate paintar",
          "P2HP1LNew =",
          P2HP1LNew,
          "and R1LNEW = ",
          R1LNEW
        );
        console.log(
          "1 gheymate balatar retailer 2 gheymate paintar",
          "P1LP2HNew =",
          P1LP2HNew,
          "and R2HNEW = ",
          R2HNEW
        );
        // P1HP2HNEW  R1HR2HNEW  P2HP1HNEW   R2HR1HNEW
        console.log(
          "hardo gheymate bakatar",
          "P1HP2HNEW =",
          P1HP2HNEW,
          "and R1HR2HNEW = ",
          R1HR2HNEW
        );
        console.log(
          "hardo gheymate bakatar",
          "P2HP1HNEW =",
          P2HP1HNEW,
          "and R2HR1HNEW = ",
          R2HR1HNEW
        );
        console.log("leftSideOfc232", leftSideOfc232);
        console.log("C2", C2);
        console.log("c226", c226);
      }  if (leftSideOfc232 > C2) {
        console.log('leftSideOfc232 > C2');
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
    }  if (leftSideOfc132 > C1) {
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
      }  if (leftSideOfc232 <= C2 && C2 < c226) {
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
      }  if (leftSideOfc232 > C2) {
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
}
//  else {
//   console.log("error");
// }
