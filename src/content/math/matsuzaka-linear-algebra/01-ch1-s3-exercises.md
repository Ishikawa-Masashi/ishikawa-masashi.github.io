---
title: "§3 演習問題 — 中点・分点と三角不等式"
description: "第1章 §3 の演習。中点・分点の位置ベクトル表示と三角不等式の証明。"
pubDate: 2026-07-04
chapter: 1
chapterTitle: "平面および空間のベクトル"
section: 3
sectionLabel: "§3"
---

各点の位置ベクトルを $A, B, C, \dots$ と書き、$\overrightarrow{PQ}=Q-P$ を用いる。

---

## 1. 中点と等式の証明

三角形 $ABC$ の辺 $BC, CA, AB$ の中点をそれぞれ $L, M, N$ とすると
$$
L=\frac{B+C}{2},\quad M=\frac{C+A}{2},\quad N=\frac{A+B}{2}
$$

<figure style="text-align: center; margin: 22px 0;">
<img src="/figures/matsuzaka-ch1s3-triangle.svg" alt="三角形ABCと辺の中点L, M, N" style="display: block; margin: 0 auto; max-width: 340px; width: 100%; height: auto;" />
<figcaption style="font-size: 14px; color: #555; margin-top: 6px;">L, M, N は辺 BC, CA, AB の中点（黄色は中点三角形 LMN）</figcaption>
</figure>

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

$\overrightarrow{BL},\ \overrightarrow{CM},\ \overrightarrow{AN}$ はそれぞれ辺 $BC,\ CA,\ AB$ の半分。継ぎ足すと出発点に戻る（＝一周 $\overrightarrow{BC}+\overrightarrow{CA}+\overrightarrow{AB}=\vec{0}$ の半分）ので和は $\vec{0}$。

<figure style="text-align: center; margin: 18px 0;">
<img src="/figures/matsuzaka-ch1s3-sum-zero.svg" alt="BL, CM, AN を継ぎ足すと0になる図" style="display: block; margin: 0 auto; max-width: 220px; width: 100%; height: auto;" />
<figcaption style="font-size: 14px; color: #555; margin-top: 6px;">3 本を継ぎ足すと閉じる ＝ 和は 0</figcaption>
</figure>

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

## 2. $\overrightarrow{AL},\ \overrightarrow{BM},\ \overrightarrow{CN}$ を $\boldsymbol{a},\boldsymbol{b}$ で表す

原点を $A$ にとり $\overrightarrow{AB}=\boldsymbol{a},\ \overrightarrow{AC}=\boldsymbol{b}$ とする。このとき $B=\boldsymbol{a},\ C=\boldsymbol{b}$ であり
$$
L=\frac{\boldsymbol{a}+\boldsymbol{b}}{2},\quad M=\frac{\boldsymbol{b}}{2},\quad N=\frac{\boldsymbol{a}}{2}
$$

$$
\overrightarrow{AL}=\frac{1}{2}(\boldsymbol{a}+\boldsymbol{b})
$$
$$
\overrightarrow{BM}=M-B=\frac{\boldsymbol{b}}{2}-\boldsymbol{a}=-\boldsymbol{a}+\frac{1}{2}\boldsymbol{b}
$$
$$
\overrightarrow{CN}=N-C=\frac{\boldsymbol{a}}{2}-\boldsymbol{b}=\frac{1}{2}\boldsymbol{a}-\boldsymbol{b}
$$

---

## 3. 平行四辺形 $ABCD$

対角線について
$$
\overrightarrow{AC}=\overrightarrow{AB}+\overrightarrow{AD}=\boldsymbol{a},\qquad
\overrightarrow{BD}=\overrightarrow{AD}-\overrightarrow{AB}=\boldsymbol{b}
$$

$\overrightarrow{AB}=\boldsymbol{x},\ \overrightarrow{AD}=\boldsymbol{y}$ とおくと
$$
\boldsymbol{x}+\boldsymbol{y}=\boldsymbol{a},\qquad \boldsymbol{y}-\boldsymbol{x}=\boldsymbol{b}
$$

辺々を足し引きして
$$
\overrightarrow{AD}=\frac{1}{2}(\boldsymbol{a}+\boldsymbol{b}),\qquad
\overrightarrow{AB}=\frac{1}{2}(\boldsymbol{a}-\boldsymbol{b})
$$

---

## 4. 三角不等式

### $|\boldsymbol{a}+\boldsymbol{b}|\le|\boldsymbol{a}|+|\boldsymbol{b}|$（第 11 図(b)）

第 11 図(b) のように点 $A, B, C$ をとり
$$
\boldsymbol{a}=\overrightarrow{AB},\qquad \boldsymbol{b}=\overrightarrow{BC},\qquad \boldsymbol{a}+\boldsymbol{b}=\overrightarrow{AC}
$$
とする。三角形 $ABC$ では 1 辺の長さは他の 2 辺の長さの和を超えないから
$$
|\overrightarrow{AC}|\le|\overrightarrow{AB}|+|\overrightarrow{BC}|
\;\Longrightarrow\;
|\boldsymbol{a}+\boldsymbol{b}|\le|\boldsymbol{a}|+|\boldsymbol{b}|
$$

等号が成り立つのは $A, B, C$ が一直線上に並ぶとき、すなわち $\boldsymbol{a}, \boldsymbol{b}$ が同じ向きのときである。

### $|\boldsymbol{a}-\boldsymbol{b}|\le|\boldsymbol{a}|+|\boldsymbol{b}|$（第 12 図）

第 12 図のように点 $O, A, B$ をとり
$$
\boldsymbol{a}=\overrightarrow{OA},\qquad \boldsymbol{b}=\overrightarrow{OB}
$$
とすると
$$
\boldsymbol{a}-\boldsymbol{b}=\overrightarrow{OA}-\overrightarrow{OB}=\overrightarrow{BA}
$$

三角形 $OAB$ では辺 $BA$ の長さは他の 2 辺の長さの和を超えないから
$$
|\overrightarrow{BA}|\le|\overrightarrow{OA}|+|\overrightarrow{OB}|
\;\Longrightarrow\;
|\boldsymbol{a}-\boldsymbol{b}|\le|\boldsymbol{a}|+|\boldsymbol{b}|\qquad\blacksquare
$$

等号が成り立つのは $O, A, B$ が一直線上に並ぶとき、すなわち $\boldsymbol{a}, \boldsymbol{b}$ が反対向きのときである。

---

## 5. 辺 $BC$ の 3 等分点 $D, E$

$B\to C$ の向きに $B, D, E, C$ と並ぶ。原点を $A$ にとると
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

第 6 問の $\overrightarrow{MN}=\tfrac{1}{2}(\overrightarrow{AB}+\overrightarrow{DC})$ とも整合する。
