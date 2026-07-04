---
title: "§3 演習問題 — 中点・分点と三角不等式"
description: "第1章 §3 の演習。中点・分点の位置ベクトル表示と三角不等式の証明。"
pubDate: 2026-07-04
chapter: 1
chapterTitle: "平面および空間のベクトル"
section: 3
---

$$
\text{各点の位置ベクトルを } A, B, C, \dots \text{ と書き、}
\overrightarrow{PQ} = Q - P \text{ を用いる。}
$$

---

$\text{1. 中点と等式の証明}$

$$
\text{三角形 } ABC \text{ の辺 } BC, CA, AB
\text{ の中点をそれぞれ } L, M, N \text{ とすると}
$$
$$
L=\frac{B+C}{2},\quad M=\frac{C+A}{2},\quad N=\frac{A+B}{2}
$$

$\text{(a) } \overrightarrow{BN}+\overrightarrow{CM}=\overrightarrow{LA}$

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

$\text{(b) } \overrightarrow{BL}+\overrightarrow{CM}+\overrightarrow{AN}=\vec{0}$

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

$\text{2. } \overrightarrow{AL},\ \overrightarrow{BM},\ \overrightarrow{CN} \text{ を } a,b \text{ で表す}$

$$
\text{原点を } A \text{ にとり } \overrightarrow{AB}=a,\ \overrightarrow{AC}=b
\text{ とする。このとき } B=a,\ C=b \text{ であり}
$$
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

$\text{3. 平行四辺形 } ABCD$

$$
\text{対角線について}
$$
$$
\overrightarrow{AC}=\overrightarrow{AB}+\overrightarrow{AD}=a,\qquad
\overrightarrow{BD}=\overrightarrow{AD}-\overrightarrow{AB}=b
$$

$$
\overrightarrow{AB}=x,\ \overrightarrow{AD}=y \text{ とおくと}
$$
$$
x+y=a,\qquad y-x=b
$$

$$
\text{辺々を足し引きして}
$$
$$
\overrightarrow{AD}=\frac{1}{2}(a+b),\qquad
\overrightarrow{AB}=\frac{1}{2}(a-b)
$$

---

## $\text{4. 三角不等式}$

### $|a+b|\le|a|+|b| \quad \text{（第 11 図(b)）}$

$$
\text{第 11 図(b) のように点 } A, B, C \text{ をとり}
$$
$$
a=\overrightarrow{AB},\qquad b=\overrightarrow{BC},\qquad a+b=\overrightarrow{AC}
$$
$$
\text{とする。三角形 } ABC
\text{ では 1 辺の長さは他の 2 辺の長さの和を超えないから}
$$
$$
|\overrightarrow{AC}|\le|\overrightarrow{AB}|+|\overrightarrow{BC}|
\;\Longrightarrow\;
|a+b|\le|a|+|b|
$$

$$
\text{等号が成り立つのは } A, B, C
\text{ が一直線上に並ぶとき、すなわち } a, b \text{ が同じ向きのときである。}
$$

### $|a-b|\le|a|+|b| \quad \text{（第 12 図）}$

$$
\text{第 12 図のように点 } O, A, B \text{ をとり}
$$
$$
a=\overrightarrow{OA},\qquad b=\overrightarrow{OB}
$$
$$
\text{とすると}
$$
$$
a-b=\overrightarrow{OA}-\overrightarrow{OB}=\overrightarrow{BA}
$$

$$
\text{三角形 } OAB
\text{ では辺 } BA \text{ の長さは他の 2 辺の長さの和を超えないから}
$$
$$
|\overrightarrow{BA}|\le|\overrightarrow{OA}|+|\overrightarrow{OB}|
\;\Longrightarrow\;
|a-b|\le|a|+|b|\qquad\blacksquare
$$

$$
\text{等号が成り立つのは } O, A, B
\text{ が一直線上に並ぶとき、すなわち } a, b \text{ が反対向きのときである。}
$$

---

## $\text{5. 辺 } BC \text{ の 3 等分点 } D, E$

$$
B\to C \text{ の向きに } B, D, E, C
\text{ と並ぶ。原点を } A \text{ にとると}
$$
$$
D=\frac{2}{3}B+\frac{1}{3}C,\qquad E=\frac{1}{3}B+\frac{2}{3}C
$$

$$
\overrightarrow{AD}=\frac{2}{3}\overrightarrow{AB}+\frac{1}{3}\overrightarrow{AC},\qquad
\overrightarrow{AE}=\frac{1}{3}\overrightarrow{AB}+\frac{2}{3}\overrightarrow{AC}
$$

$$
\text{和をとると}
$$
$$
\overrightarrow{AD}+\overrightarrow{AE}
=\overrightarrow{AB}+\overrightarrow{AC}\qquad\blacksquare
$$

---

## $\text{6. 四辺形 } ABCD \text{ の辺 } AD, BC \text{ の中点 } M, N$

$$
M=\frac{A+D}{2},\qquad N=\frac{B+C}{2}
$$

$$
\overrightarrow{MN}=N-M
=\frac{(B-A)+(C-D)}{2}
=\frac{1}{2}\left(\overrightarrow{AB}+\overrightarrow{DC}\right)
$$

---

## $\text{7. 3 等分点 } M_1, M_2 \text{（辺 } AD \text{）、} N_1, N_2 \text{（辺 } BC \text{）}$

$$
M_1=\frac{2}{3}A+\frac{1}{3}D,\quad M_2=\frac{1}{3}A+\frac{2}{3}D
$$
$$
N_1=\frac{2}{3}B+\frac{1}{3}C,\quad N_2=\frac{1}{3}B+\frac{2}{3}C
$$

$$
\text{したがって}
$$
$$
\overrightarrow{M_1N_1}=N_1-M_1
=\frac{2}{3}\overrightarrow{AB}+\frac{1}{3}\overrightarrow{DC}
$$
$$
\overrightarrow{M_2N_2}=N_2-M_2
=\frac{1}{3}\overrightarrow{AB}+\frac{2}{3}\overrightarrow{DC}
$$

$$
\text{和をとると}
$$
$$
\overrightarrow{M_1N_1}+\overrightarrow{M_2N_2}
=\overrightarrow{AB}+\overrightarrow{DC}\qquad\blacksquare
$$

$$
\text{第 6 問の } \overrightarrow{MN}=\tfrac{1}{2}(\overrightarrow{AB}+\overrightarrow{DC})
\text{ とも整合する。}
$$
