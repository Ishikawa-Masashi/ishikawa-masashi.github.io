---
title: "ベクトルの演算 - 演習問題"
description: "中点・分点の位置ベクトル表示と三角不等式の証明（§3 ベクトルの演算）"
pubDate: 2026-07-04
chapter: 2
chapterTitle: "ベクトルの演算"
section: 1
---

各点の位置ベクトルを $A, B, C, \dots$ と書き、$\overrightarrow{PQ} = Q - P$ を用いる。

---

## 1. 中点と等式の証明

三角形 $ABC$ の辺 $BC, CA, AB$ の中点をそれぞれ $L, M, N$ とすると
$$
L=\frac{B+C}{2},\quad M=\frac{C+A}{2},\quad N=\frac{A+B}{2}
$$

### (a) $\overrightarrow{BN}+\overrightarrow{CM}=\overrightarrow{LA}$

$$
\overrightarrow{BN}=N-B=\frac{A-B}{2},\qquad
\overrightarrow{CM}=M-C=\frac{A-C}{2}
$$

$$
\overrightarrow{BN}+\overrightarrow{CM}
=\frac{2A-B-C}{2}
=A-\frac{B+C}{2}
=A-L=\overrightarrow{LA}\qquad\blacksquare
$$

### (b) $\overrightarrow{BL}+\overrightarrow{CM}+\overrightarrow{AN}=\vec{0}$

$$
\overrightarrow{BL}=\frac{C-B}{2},\quad
\overrightarrow{CM}=\frac{A-C}{2},\quad
\overrightarrow{AN}=\frac{B-A}{2}
$$

$$
\overrightarrow{BL}+\overrightarrow{CM}+\overrightarrow{AN}
=\frac{(C-B)+(A-C)+(B-A)}{2}
=\vec{0}\qquad\blacksquare
$$

---

## 2. $\overrightarrow{AL},\ \overrightarrow{BM},\ \overrightarrow{CN}$ を $a,b$ で表す

$A$ を原点にとり $\overrightarrow{AB}=a,\ \overrightarrow{AC}=b$ とする。このとき $B=a,\ C=b$ であり
$$
L=\frac{a+b}{2},\quad M=\frac{b}{2},\quad N=\frac{a}{2}
$$

$$
\overrightarrow{AL}=\frac{1}{2}(a+b)
$$
$$
\overrightarrow{BM}=M-B=\frac{b}{2}-a=-a+\frac{1}{2}b
$$
$$
\overrightarrow{CN}=N-C=\frac{a}{2}-b=\frac{1}{2}a-b
$$

---

## 3. 平行四辺形 $ABCD$

対角線について
$$
\overrightarrow{AC}=\overrightarrow{AB}+\overrightarrow{AD}=a,\qquad
\overrightarrow{BD}=\overrightarrow{AD}-\overrightarrow{AB}=b
$$

$\overrightarrow{AB}=x,\ \overrightarrow{AD}=y$ とおくと
$$
x+y=a,\qquad y-x=b
$$

辺々を足し引きして
$$
\overrightarrow{AD}=\frac{1}{2}(a+b),\qquad
\overrightarrow{AB}=\frac{1}{2}(a-b)
$$

---

## 4. 三角不等式

### $|a+b|\le|a|+|b|$（第 11 図(b)）

第 11 図(b) のように点 $A, B, C$ をとり
$$
a=\overrightarrow{AB},\qquad b=\overrightarrow{BC},\qquad a+b=\overrightarrow{AC}
$$
とする。三角形 $ABC$ では 1 辺の長さは他の 2 辺の長さの和を超えないから
$$
|\overrightarrow{AC}|\le|\overrightarrow{AB}|+|\overrightarrow{BC}|
\;\Longrightarrow\;
|a+b|\le|a|+|b|
$$

等号が成り立つのは $A, B, C$ が一直線上に並ぶとき、すなわち $a, b$ が同じ向きのときである。

### $|a-b|\le|a|+|b|$（第 12 図）

第 12 図のように点 $O, A, B$ をとり
$$
a=\overrightarrow{OA},\qquad b=\overrightarrow{OB}
$$
とすると
$$
a-b=\overrightarrow{OA}-\overrightarrow{OB}=\overrightarrow{BA}
$$

三角形 $OAB$ では辺 $BA$ の長さは他の 2 辺の長さの和を超えないから
$$
|\overrightarrow{BA}|\le|\overrightarrow{OA}|+|\overrightarrow{OB}|
\;\Longrightarrow\;
|a-b|\le|a|+|b|\qquad\blacksquare
$$

等号が成り立つのは $O, A, B$ が一直線上に並ぶとき、すなわち $a, b$ が反対向きのときである。

---

## 5. 辺 $BC$ の 3 等分点 $D, E$

$B\to C$ の向きに $B, D, E, C$ と並ぶ。$A$ を原点にとると
$$
D=\frac{2}{3}B+\frac{1}{3}C,\qquad E=\frac{1}{3}B+\frac{2}{3}C
$$

$$
\overrightarrow{AD}=\frac{2}{3}\overrightarrow{AB}+\frac{1}{3}\overrightarrow{AC},\qquad
\overrightarrow{AE}=\frac{1}{3}\overrightarrow{AB}+\frac{2}{3}\overrightarrow{AC}
$$

和をとると
$$
\overrightarrow{AD}+\overrightarrow{AE}
=\overrightarrow{AB}+\overrightarrow{AC}\qquad\blacksquare
$$

---

## 6. 四辺形 $ABCD$ の辺 $AD, BC$ の中点 $M, N$

$$
M=\frac{A+D}{2},\qquad N=\frac{B+C}{2}
$$

$$
\overrightarrow{MN}=N-M
=\frac{(B-A)+(C-D)}{2}
=\frac{1}{2}\left(\overrightarrow{AB}+\overrightarrow{DC}\right)
$$

---

## 7. 3 等分点 $M_1, M_2$（辺 $AD$）、$N_1, N_2$（辺 $BC$）

$$
M_1=\frac{2}{3}A+\frac{1}{3}D,\quad M_2=\frac{1}{3}A+\frac{2}{3}D
$$
$$
N_1=\frac{2}{3}B+\frac{1}{3}C,\quad N_2=\frac{1}{3}B+\frac{2}{3}C
$$

したがって
$$
\overrightarrow{M_1N_1}=N_1-M_1
=\frac{2}{3}\overrightarrow{AB}+\frac{1}{3}\overrightarrow{DC}
$$
$$
\overrightarrow{M_2N_2}=N_2-M_2
=\frac{1}{3}\overrightarrow{AB}+\frac{2}{3}\overrightarrow{DC}
$$

和をとると
$$
\overrightarrow{M_1N_1}+\overrightarrow{M_2N_2}
=\overrightarrow{AB}+\overrightarrow{DC}\qquad\blacksquare
$$

第 6 問の $\overrightarrow{MN}=\dfrac{1}{2}(\overrightarrow{AB}+\overrightarrow{DC})$ とも整合する。
