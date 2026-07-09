---
title: "§7 演習問題 — 直線の方程式"
description: "第1章 §7 の演習。平行・直交条件、交角、角の2等分線、点と直線の距離、標準形。"
pubDate: 2026-07-05
chapter: 1
chapterTitle: "平面および空間のベクトル"
section: 7
sectionLabel: "§7"
---

直線 $ax+by+c=0$ の**法線ベクトル**は $(a,b)$（$a,b,c$ はスカラーの係数）、媒介変数表示 $x=x_0+\alpha t,\ y=y_0+\beta t$ の**方向ベクトル**は $(\alpha,\beta)$ である。

---

## 1. 平行・直交の必要十分条件

**問題** 媒介変数 $t$ によって $x=x_0+\alpha t,\ y=y_0+\beta t$ と表される直線と、方程式 $ax+by=c$ で表される直線とが平行（一致する場合も含む）であるための必要十分条件、直交するための必要十分条件を、それぞれ係数 $\alpha,\beta,a,b$ によって表せ。

**解答** 前者の方向ベクトルは $(\alpha,\beta)$、後者の法線ベクトルは $(a,b)$。

**平行**（一致を含む）$\iff$ 方向 $(\alpha,\beta)$ が法線 $(a,b)$ に垂直:
$$
a\alpha+b\beta=0
$$

**直交** $\iff$ 方向 $(\alpha,\beta)$ が法線 $(a,b)$ に平行:
$$
\alpha b-\beta a=0\qquad(\text{すなわち }\alpha:\beta=a:b)
$$

---

## 2. 2直線の交角の余弦

**問題** 2直線 $3x-2y=5,\ 4x+2y=1$ の交角 $\theta$ の余弦の値を求めよ。

**解答** 法線ベクトルを $\boldsymbol{n_1}=(3,-2),\ \boldsymbol{n_2}=(4,2)$ とすると
$$
\boldsymbol{n_1}\cdot\boldsymbol{n_2}=12-4=8,\qquad
|\boldsymbol{n_1}|=\sqrt{13},\qquad
|\boldsymbol{n_2}|=2\sqrt{5}
$$
交角の余弦は
$$
\cos\theta=\frac{|\boldsymbol{n_1}\cdot\boldsymbol{n_2}|}{|\boldsymbol{n_1}||\boldsymbol{n_2}|}
=\frac{8}{2\sqrt{65}}
=\boxed{\frac{4}{\sqrt{65}}=\frac{4\sqrt{65}}{65}}
$$

---

## 3. ベクトル方程式 (1.17) と方程式 (1.23) の一致

**問題** $|\boldsymbol{a}|=|\boldsymbol{b}|\ne0,\ \boldsymbol{a}\ne\boldsymbol{b}$ のとき、ベクトル方程式 (1.17) $\boldsymbol{x}=t(\boldsymbol{a}+\boldsymbol{b})$ で表される直線と、方程式 (1.23) $(\boldsymbol{a}-\boldsymbol{b})\cdot\boldsymbol{x}=0$ で表される直線とが一致することを、計算によって確かめよ。

**解答** (1.17) の $\boldsymbol{x}=t(\boldsymbol{a}+\boldsymbol{b})$ を (1.23) の左辺に代入すると
$$
(\boldsymbol{a}-\boldsymbol{b})\cdot\boldsymbol{x}
=t\,(\boldsymbol{a}-\boldsymbol{b})\cdot(\boldsymbol{a}+\boldsymbol{b})
=t\,(|\boldsymbol{a}|^2-|\boldsymbol{b}|^2)
$$
$|\boldsymbol{a}|=|\boldsymbol{b}|$ より $|\boldsymbol{a}|^2-|\boldsymbol{b}|^2=0$ だから、すべての $t$ で
$$
(\boldsymbol{a}-\boldsymbol{b})\cdot\boldsymbol{x}=0
$$
となり、(1.17) 上の点はすべて (1.23) を満たす。

逆に、$\boldsymbol{a}\ne\boldsymbol{b}$ なので $\boldsymbol{a}-\boldsymbol{b}\ne\boldsymbol{0}$、よって (1.23) は原点を通る 1 本の直線を表す。(1.17) も原点を通り方向ベクトル $\boldsymbol{a}+\boldsymbol{b}$ の直線で、その方向は上の計算により (1.23) 上にある。原点を通る直線は 1 つの方向で定まるから、両者は同一の直線である。
$$
\therefore\ (1.17)\text{ と }(1.23)\text{ は同じ直線を表す}\qquad\blacksquare
$$

核心は $(\boldsymbol{a}-\boldsymbol{b})\cdot(\boldsymbol{a}+\boldsymbol{b})=|\boldsymbol{a}|^2-|\boldsymbol{b}|^2$ が $|\boldsymbol{a}|=|\boldsymbol{b}|$ のとき $0$ になること。幾何的には「2等分線の方向 $\boldsymbol{a}+\boldsymbol{b}$ が法線 $\boldsymbol{a}-\boldsymbol{b}$ と直交する」ことを表す。

---

## 4. $\angle AOB$ の2等分線の方程式

**問題** 一般に $\angle AOB$ の 2 等分線の方程式は
$$
\left(\frac{\boldsymbol{a}}{|\boldsymbol{a}|}-\frac{\boldsymbol{b}}{|\boldsymbol{b}|}\right)\cdot\boldsymbol{x}=0
$$
で与えられることを示せ。ただし $O$ は座標原点、$\boldsymbol{a}=\overrightarrow{OA},\ \boldsymbol{b}=\overrightarrow{OB}$ である。

**解答** 単位ベクトルを $\hat{\boldsymbol{a}}=\dfrac{\boldsymbol{a}}{|\boldsymbol{a}|},\ \hat{\boldsymbol{b}}=\dfrac{\boldsymbol{b}}{|\boldsymbol{b}|}$ とする。点 $\boldsymbol{x}$ が $\angle AOB$ の 2 等分線上にあることは、$\boldsymbol{x}$ が $OA,OB$ と等しい角をなすこと、すなわち
$$
\hat{\boldsymbol{a}}\cdot\frac{\boldsymbol{x}}{|\boldsymbol{x}|}=\hat{\boldsymbol{b}}\cdot\frac{\boldsymbol{x}}{|\boldsymbol{x}|}
$$
と同値である。分母を払うと $\hat{\boldsymbol{a}}\cdot\boldsymbol{x}=\hat{\boldsymbol{b}}\cdot\boldsymbol{x}$、すなわち
$$
(\hat{\boldsymbol{a}}-\hat{\boldsymbol{b}})\cdot\boldsymbol{x}=0
\;\Longleftrightarrow\;
\left(\frac{\boldsymbol{a}}{|\boldsymbol{a}|}-\frac{\boldsymbol{b}}{|\boldsymbol{b}|}\right)\cdot\boldsymbol{x}=0
\qquad\blacksquare
$$

（2 等分線の方向は $\hat{\boldsymbol{a}}+\hat{\boldsymbol{b}}$ であり、$|\hat{\boldsymbol{a}}|=|\hat{\boldsymbol{b}}|=1$ より $(\hat{\boldsymbol{a}}+\hat{\boldsymbol{b}})\perp(\hat{\boldsymbol{a}}-\hat{\boldsymbol{b}})$。よって $\hat{\boldsymbol{a}}-\hat{\boldsymbol{b}}$ が法線になる。）

---

## 5. $\angle ABC$ の2等分線の方程式

**問題** $A(13,7),\ B(1,2),\ C(-2,6)$ のとき、$\angle ABC$ の 2 等分線の方程式を求めよ。

**解答** 頂点は $B$。問 4 を原点 $O\to B$ に置き換えて用いる。
$$
\overrightarrow{BA}=(12,5),\ |\overrightarrow{BA}|=13,\qquad
\overrightarrow{BC}=(-3,4),\ |\overrightarrow{BC}|=5
$$
法線ベクトルは
$$
\frac{\overrightarrow{BA}}{|\overrightarrow{BA}|}-\frac{\overrightarrow{BC}}{|\overrightarrow{BC}|}
=\left(\frac{12}{13}+\frac{3}{5},\ \frac{5}{13}-\frac{4}{5}\right)
=\left(\frac{99}{65},\ -\frac{27}{65}\right)
\parallel(11,-3)
$$
これを法線とし $B(1,2)$ を通る直線は
$$
11(x-1)-3(y-2)=0
\;\Longrightarrow\;
\boxed{11x-3y=5}
$$
（検算: $B(1,2)$ で $11-6=5$。）

---

## 6. 点と直線の距離・垂線の足

**問題** 方程式 $ax+by+c=0$ で表される直線 $l$ に点 $P(x_0,y_0)$ から下した垂線の足 $Q(x',y')$ は
$$
x'=x_0-\frac{ax_0+by_0+c}{a^2+b^2}\,a,\qquad
y'=y_0-\frac{ax_0+by_0+c}{a^2+b^2}\,b
$$
で与えられ、垂線 $PQ$ の長さ（$P$ から $l$ までの距離）は $\dfrac{|ax_0+by_0+c|}{\sqrt{a^2+b^2}}$ で与えられることを示せ。

**解答** $l$ の法線ベクトルは $(a,b)$。垂線の足を $Q=P-t\,(a,b)$ とおき、$Q$ が $l$ 上にある条件から $t$ を定める。
$$
a(x_0-ta)+b(y_0-tb)+c=0
\;\Longrightarrow\;
t=\frac{ax_0+by_0+c}{a^2+b^2}
$$
これを $Q=(x_0-ta,\ y_0-tb)$ に代入して
$$
x'=x_0-\frac{ax_0+by_0+c}{a^2+b^2}\,a,\qquad
y'=y_0-\frac{ax_0+by_0+c}{a^2+b^2}\,b\qquad\blacksquare
$$
垂線の長さは $|\overrightarrow{PQ}|=|t|\,|(a,b)|=|t|\sqrt{a^2+b^2}$ だから
$$
PQ=\frac{|ax_0+by_0+c|}{\sqrt{a^2+b^2}}\qquad\blacksquare
$$

---

## 7. 垂線の足と長さの計算

**問題** 原点から次の各直線に下した垂線の足の座標、およびその垂線の長さを求めよ。また原点のかわりに点 $(2,-10)$ をとって、同じ問題を考えよ。
(a) $3x-2y=13$　(b) $4x+3y+18=0$

**解答** 問 6 の公式を用いる。$t=\dfrac{ax_0+by_0+c}{a^2+b^2}$、足は $(x_0-ta,\ y_0-tb)$、長さは $|t|\sqrt{a^2+b^2}$。

**(a)** $3x-2y-13=0$（$a=3,\ b=-2,\ c=-13,\ a^2+b^2=13$）

- 原点 $(0,0)$：$ax_0+by_0+c=-13,\ t=-1$。足 $(3,-2)$、長さ $\sqrt{13}$。
- 点 $(2,-10)$：$ax_0+by_0+c=13,\ t=1$。足 $(-1,-8)$、長さ $\sqrt{13}$。

**(b)** $4x+3y+18=0$（$a=4,\ b=3,\ c=18,\ a^2+b^2=25$）

- 原点 $(0,0)$：$ax_0+by_0+c=18,\ t=\dfrac{18}{25}$。足 $\left(-\dfrac{72}{25},\ -\dfrac{54}{25}\right)$、長さ $\dfrac{18}{5}$。
- 点 $(2,-10)$：$ax_0+by_0+c=-4,\ t=-\dfrac{4}{25}$。足 $\left(\dfrac{66}{25},\ -\dfrac{238}{25}\right)$、長さ $\dfrac{4}{5}$。

---

## 8. 標準形（ヘッセの標準形）

**問題** 前問の 2 つの直線をそれぞれ標準形で表せ。

**解答** $ax+by+c=0$ を $\sqrt{a^2+b^2}$ で割り、右辺の $p$（原点からの距離）が $p\ge0$ となるよう符号を選ぶと、標準形 $x\cos\omega+y\sin\omega=p$ が得られる。

**(a)** $3x-2y-13=0$ を $\sqrt{13}$ で割って
$$
\boxed{\ \frac{3}{\sqrt{13}}x-\frac{2}{\sqrt{13}}y=\sqrt{13}\ }\qquad(p=\sqrt{13})
$$

**(b)** $4x+3y+18=0$ を $-5$ で割って（右辺を正にする）
$$
\boxed{\ -\frac{4}{5}x-\frac{3}{5}y=\frac{18}{5}\ }\qquad\left(p=\frac{18}{5}\right)
$$

いずれも $p$ が問 7 で求めた原点からの距離と一致する。
