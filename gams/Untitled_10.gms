         parameters
a11      /150/
a12     /200/
a21     /250/
a22     /300/
gama1    /0.5/
gama2  /0.5/
b11     /2.1/
b12     /2.1/
b21     /2.5/
b22   /2.5/
alpha1 /1/
alpha2 /2/
C1     /50/
p02 /   87.315/
p2 /  127.315/
T2 /  20/
 ;
integer variable d1;
integer variable d2;
variable p1;
*variable p2;
*variable p02;
variable p01;
variable R1;
variable R2;

integer variable T1;
T1.lo=2;
*integer variable T2;
*T2.lo=2;


equations
         sudef1
         sudef2
         col1
*         col2
*         col3
         col4
         col5
*         col6
*         col7
         col8
         col9
*         col10
         col11
         col12
*         col13
*         col14
         col15
         col16
         col17
         col18
         col19
         col20
         col21
         col22
         col23
*         col24
         col25
*         col26
         col27
*         col28
         col29
*         col30
*         col31
                 ;
sudef1  .. R1=e=P01*(a11-b11*(p01+(T1*alpha1))+gama1*(p02+(T2*alpha1)))+p1*(a12-b12*p1+p2*gama2);
sudef2  .. R2=e=P02*(a21-b21*(p02+(T2*alpha1))+gama1*(p01+(T1*alpha1)))+p2*(a22-b22*p2+p1*gama2);
col1      .. (a11-b11*(p01+(T1*alpha1))+gama1*(p02+(T2*alpha1))) =g=0        ;
*col2      .. (a21-b21*(p02+(T2*alpha1))+gama1*(p01+(T1*alpha1))) =g=0        ;
*col3      .. (a21-b21*(p02+(T2*alpha1))+gama1*(p01+(T1*alpha1)))+(a22-b22*p2+p1*gama2) =l= C1 ;
col4      .. (a11-b11*(p01+(T1*alpha1))+gama1*(p02+(T2*alpha1)))+(a12-b12*p1+p2*gama2) =l= C1;
col5      .. d1=e=(a11-b11*(p01+(T1*alpha1))+gama1*(p02+(T2*alpha1)))+(a12-b12*p1+p2*gama2) ;
*col6      .. d2=e=(a21-b21*(p02+(T2*alpha1))+gama1*(p01+(T1*alpha1)))+(a22-b22*p2+p1*gama2) ;
*col7      .. (a22-b22*p2+p1*gama2) =g=0;
col8      .. (a12-b12*p1+p2*gama2) =g=0;
col9      .. T1=e=(p1-p01)/alpha2 ;
*col10     .. T2=e=(p2-p02)/alpha2 ;
col11     .. p01+(T1*alpha1)=l=p1 ;
col12     .. p01+(T1*alpha2)=g=p1 ;
*col13     .. p02+(T2*alpha1)=l=p2 ;
*col14     .. p02+(T2*alpha2)=g=p2 ;
col15      .. p1=g=0;
col16      .. p01=g=0;
col17      .. p2=g=0;
col18      .. p02=g=0;
col19      .. p01=l=p1;
col20      .. p02=l=p2;
col21      .. T1=l=d1 ;
col22      .. p01=l=p2;
col23      .. p02=l=p1;
*col24      .. T2=l=d2;
col25      .. b12*p1=g=p2*gama2;
*col26      .. b22*p2=g=p1*gama2;
col27      .. b11*(p01+(T1*alpha1))=g=gama1*(p02+(T2*alpha1));
*col28      .. b21*(p02+(T2*alpha1))=g=gama1*(p01+(T1*alpha1));
col29      .. d1 =l=c1;
*col30      .. d2 =l=c1;
*col31      .. ((a11*b21)+(a21*gama1))/((b11*b21)-(gama1*gama1))=l=((a12*b22)+(a22*gama2))/((b12*b22)-(gama1*gama1));

model example2 /all/
solve example2 using MINLP maximizing R1;
*solve example2 using MINLP maximizing R2;
option MINLP=ALPHAECP;
display R1.l,T1.l,p01.l,p1.l,d1.l;
*display R1.l,R2.l,T1.l,p01.l,p1.l,d1.l,T2.l,d2.l;
