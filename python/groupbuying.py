import numpy as np
import math
from scipy.optimize import minimize

import scipy


T2 = 2
C1 = 50
C2 = 50
a11 = 150
a12 = 200
a21 = 250
a22 = 300
alpha1 = 1
alpha2 = 2
gama1 = 0.5
gama2 = 1.1
b11 = 2.1
b12 = 2.1
b21 = 2.5
b22 = 2.5
p02 = 2.698
p2 = 1.698
for i in range(0, 100):

    def func1(p):
        p01 = p[0]
        p1 = p[1]
        T1 = (p[1] - p[0]) / alpha2
        return -(p01 * (a11 - b11 * (p01 + (T1 * alpha1)) + gama1 * (p02 + (T2 * alpha1))) + p1 * (
                    a12 - b12 * p1 + p2 * gama2))


    def constraint1(p):
        T1 = (p[1] - p[0]) / alpha2
        if a11 - b11 * (p[0] + (T1 * alpha1)) + gama1 * (p02 + (T2 * alpha1)) < 0:
            print('constraint1error')
        return a11 - b11 * (p[0] + (T1 * alpha1)) + gama1 * (p02 + (T2 * alpha1))



    def constraint4(p):
        T1 = (p[1] - p[0]) / alpha2
        if C1 - (a11 - b11 * (p[0] + (T1 * alpha1)) + gama1 * (p02 + (T2 * alpha1))) + (
                    a12 - b12 * p[1] + p2 * gama2)< 0 :
            print('constraint4error')
        return C1 - (a11 - b11 * (p[0] + (T1 * alpha1)) + gama1 * (p02 + (T2 * alpha1))) + (
                    a12 - b12 * p[1] + p2 * gama2)



    def constraint6(p):
        if (a12 - b12 * p[1] + p2 * gama2) < 0:
            print('constraint6error')
        return (a12 - b12 * p[1] + p2 * gama2)


    def constraint7(p):
        T1 = (p[1] - p[0]) / alpha2
        if p[1] - (p[0] + (T1 * alpha1))<0:
            print('constraint7error')
        return p[1] - (p[0] + (T1 * alpha1))


    def constraint8(p):
        T1 = (p[1] - p[0]) / alpha2
        if p[0] + (T1 * alpha2) - p[1] < 0:
            print('constraint8error')
        return p[0] + (T1 * alpha2) - p[1]




    def constraint11(p):
        if p[1] - p[0] < 0:
            print('constraint11error')
        return p[1] - p[0]


    def constraint12(p):
        T1 = (p[1] - p[0]) / alpha2
        d1 = (a11 - b11 * (p[0] + (T1 * alpha1)) + gama1 * (p02 + (T2 * alpha1))) + (a12 - b12 * p[1] + p2 * gama2)
        if d1 - T1 < 0:
            print('constraint12error')
        return d1 - T1


    def constraint13(p):
        if p2 - p[0] < 0:
            print('constraint13error')
        return p2 - p[0]


    def constraint14(p):
        if p[1] - p02 < 0:
            print('constraint14error')
        return p[1] - p02



    def constraint16(p):
        if (b12 * p[1]) - (p2 * gama2) < 0:
            print('constraint16error')
        return (b12 * p[1]) - (p2 * gama2)



    def constraint18(p):
        T1 = (p[1] - p[0]) / alpha2
        if (b11 * (p[0] + (T1 * alpha1))) - (gama1 * (p02 + (T2 * alpha1))) < 0:
            print('constraint18error')
        return (b11 * (p[0] + (T1 * alpha1))) - (gama1 * (p02 + (T2 * alpha1)))


    def constraint20(p):
        T1 = (p[1] - p[0]) / alpha2
        d1 = (a11 - b11 * (p[0] + (T1 * alpha1)) + gama1 * (p02 + (T2 * alpha1))) + (a12 - b12 * p[1] + p2 * gama2)
        if C1 - d1 < 0:
            print('constraint20error')
        return C1 - d1


    def constraint21(p):
        T1 = (p[1] - p[0]) / alpha2
        if T1 - 2 < 0:
            print('constraint21error')
        return T1 - 2


    bnds = ((0, None), (0, None))

    cons1 = {'type': 'ineq', 'fun': constraint1}

   

    cons4 = {'type': 'ineq', 'fun': constraint4}

   

    cons6 = {'type': 'ineq', 'fun': constraint6}

    cons7 = {'type': 'ineq', 'fun': constraint7}

    cons8 = {'type': 'ineq', 'fun': constraint8}

   

    cons11 = {'type': 'ineq', 'fun': constraint11}

    cons12 = {'type': 'ineq', 'fun': constraint12}

    cons13 = {'type': 'ineq', 'fun': constraint13}

    cons14 = {'type': 'ineq', 'fun': constraint14}

   

    cons16 = {'type': 'ineq', 'fun': constraint16}

   

    cons18 = {'type': 'ineq', 'fun': constraint18}


    cons20 = {'type': 'ineq', 'fun': constraint20}

    cons21 = {'type': 'ineq', 'fun': constraint21}

    cons = [cons1, cons4, cons6, cons7,
            cons8, cons11, cons12, cons13, cons14,
            cons16, cons18, cons20,cons21]

    R1max = minimize(func1, (2, 6), bounds=bnds, method='SLSQP', constraints=cons)

    R1max_final = -round(R1max.fun, 3)
    p01 = round(R1max.x[0], 3)
    p1 = round(R1max.x[1], 3)
    T1 = (p1 - p01) / alpha2
    print("P01: {}".format(p01) + "  ####  P1: {}".format(p1))
    print("R1Max: {}".format(R1max_final))
    print("T1: {}".format(T1))


    def func2(pp):
        p02 = pp[0]
        p2 = pp[1]
        T2 = (pp[1] - pp[0]) / alpha2
        # T2 = round(tt2)
        return -(p02 * (a21 - b21 * (p02 + (T2 * alpha1)) + gama1 * (p01 + (T1 * alpha1))) + p2 * (
                    a22 - b22 * p2 + p1 * gama2))


    def constraint1(pp):
        T2 = (pp[1] - pp[0]) / alpha2
        return T2 - 2


    def constraint2(pp):
        T2 = (pp[1] - pp[0]) / alpha2
        return a21 - b21 * (pp[0] + (T2 * alpha1)) + gama1 * (p01 + (T1 * alpha1))


    def constraint3(pp):
        T2 = (pp[1] - pp[0]) / alpha2
        return C2 - (a21 - b21 * (pp[0] + (T2 * alpha1)) + gama1 * (p01 + (T1 * alpha1))) + (
                    a22 - b22 * pp[1] + p1 * gama2)


   
    def constraint5(pp):
        return (a22 - b22 * pp[1] + p1 * gama2)



    def constraint9(pp):
        T2 = (pp[1] - pp[0]) / alpha2
        return pp[1] - (pp[0] + (T2 * alpha1))


    def constraint10(pp):
        T2 = (pp[1] - pp[0]) / alpha2
        return pp[0] + (T2 * alpha2) - pp[1]


    def constraint11(pp):
        return pp[1] - pp[0]


    def constraint13(pp):
        return pp[1] - p01


    def constraint14(pp):
        return p1 - pp[0]


    def constraint15(pp):
        T2 = (pp[1] - pp[0]) / alpha2
        d2 = (a21 - b21 * (pp[0] + (T2 * alpha1)) + gama1 * (p01 + (T1 * alpha1))) + (a22 - b22 * pp[1] + p1 * gama2)
        return d2 - T2



    def constraint17(pp):
        return (b22 * pp[1]) - (p1 * gama2)



    def constraint19(pp):
        T2 = (pp[1] - pp[0]) / alpha2
        return (b21 * (pp[0] + (T2 * alpha1))) - (gama1 * (p01 + (T1 * alpha1)))



    def constraint21(pp):
        T2 = (pp[1] - pp[0]) / alpha2
        d2 = (a21 - b21 * (pp[0] + (T2 * alpha1)) + gama1 * (p01 + (T1 * alpha1))) + (a22 - b22 * pp[1] + p1 * gama2)
        return C2 - d2


    bnds = ((1, None), (1, None))

    cons1 = {'type': 'ineq', 'fun': constraint1}

    cons2 = {'type': 'ineq', 'fun': constraint2}

    cons3 = {'type': 'ineq', 'fun': constraint3}


    cons5 = {'type': 'ineq', 'fun': constraint5}




    cons9 = {'type': 'ineq', 'fun': constraint9}

    cons10 = {'type': 'ineq', 'fun': constraint10}

    cons11 = {'type': 'ineq', 'fun': constraint11}


    cons13 = {'type': 'ineq', 'fun': constraint13}

    cons14 = {'type': 'ineq', 'fun': constraint14}

    cons15 = {'type': 'ineq', 'fun': constraint15}


    cons17 = {'type': 'ineq', 'fun': constraint17}


    cons19 = {'type': 'ineq', 'fun': constraint19}


    cons21 = {'type': 'ineq', 'fun': constraint21}

    cons = [cons1, cons2, cons3, cons5, cons9, cons10, cons11, cons13, cons14, cons15,
            cons17, cons19, cons21]

    x0 = [round(1, 3), round(1, 3)]

    R2max = minimize(func2, x0, bounds=bnds, method='SLSQP', constraints=cons)

    R2max_final = -round(R2max.fun, 3)
    p02 = round(R2max.x[0], 3)
    p2 = round(R2max.x[1], 3)
    T2 = (p2 - p02) / alpha2

    print("P02: {}".format(p02) + "  ####  P2: {}".format(p2))
    print("R2max: {}".format(R2max_final))
    print("T2: {}".format(T2))
  
