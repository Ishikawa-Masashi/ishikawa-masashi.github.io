---
title: "§4 演習問題 — ベクトルの内積"
description: "第1章 §4 の演習。内積の計算、シュワルツの不等式、平行四辺形・三角形の面積。"
pubDate: 2026-07-04
chapter: 1
chapterTitle: "平面および空間のベクトル"
section: 4
sectionLabel: "§4"
---

内積は $\boldsymbol{a}\cdot\boldsymbol{b}=|\boldsymbol{a}||\boldsymbol{b}|\cos\theta$、成分では $(a_1,a_2)\cdot(b_1,b_2)=a_1b_1+a_2b_2$ を用いる。2 つのベクトルが直交することは内積が $0$ になることと同値である。

---

## 1. ベクトルの直交条件

**問題** $\boldsymbol{a}=(2,3),\ \boldsymbol{b}=(1,-1)$ とするとき、次の各組のベクトルが直交するように実数 $t$ の値をそれぞれ求めよ。
(a) $\boldsymbol{a},\ \boldsymbol{a}+t\boldsymbol{b}$　(b) $\boldsymbol{a}-\boldsymbol{b},\ \boldsymbol{a}+t\boldsymbol{b}$　(c) $\boldsymbol{a}+t\boldsymbol{b},\ \boldsymbol{a}-t\boldsymbol{b}$

**解答** よく使う値を先に計算しておく。
$$
\boldsymbol{a}\cdot\boldsymbol{a}=13,\qquad \boldsymbol{a}\cdot\boldsymbol{b}=2-3=-1,\qquad \boldsymbol{b}\cdot\boldsymbol{b}=2
$$

**(a)** $\boldsymbol{a}\cdot(\boldsymbol{a}+t\boldsymbol{b})=\boldsymbol{a}\cdot\boldsymbol{a}+t(\boldsymbol{a}\cdot\boldsymbol{b})=13-t=0$ より
$$
\boxed{t=13}
$$

**(b)** $\boldsymbol{a}-\boldsymbol{b}=(1,4),\ \boldsymbol{a}+t\boldsymbol{b}=(2+t,\ 3-t)$ だから
$$
(1)(2+t)+(4)(3-t)=14-3t=0
\;\Longrightarrow\;
\boxed{t=\frac{14}{3}}
$$

**(c)** $(\boldsymbol{a}+t\boldsymbol{b})\cdot(\boldsymbol{a}-t\boldsymbol{b})=|\boldsymbol{a}|^2-t^2|\boldsymbol{b}|^2=13-2t^2=0$ より $t^2=\dfrac{13}{2}$、
$$
\boxed{t=\pm\frac{\sqrt{26}}{2}}
$$

---

## 2. 中線定理と内積の等式

**問題** $\boldsymbol{a},\boldsymbol{b}$ を 2 つのベクトルとするとき、次の等式が成り立つことを証明せよ。
(a) $|\boldsymbol{a}+\boldsymbol{b}|^2+|\boldsymbol{a}-\boldsymbol{b}|^2=2(|\boldsymbol{a}|^2+|\boldsymbol{b}|^2)$
(b) $|\boldsymbol{a}+\boldsymbol{b}|^2-|\boldsymbol{a}-\boldsymbol{b}|^2=4(\boldsymbol{a}\cdot\boldsymbol{b})$

**解答** $|\boldsymbol{a}\pm \boldsymbol{b}|^2=|\boldsymbol{a}|^2\pm 2(\boldsymbol{a}\cdot\boldsymbol{b})+|\boldsymbol{b}|^2$ を用いる。

**(a)** 2 式を加えると内積の項が消えて
$$
|\boldsymbol{a}+\boldsymbol{b}|^2+|\boldsymbol{a}-\boldsymbol{b}|^2=2|\boldsymbol{a}|^2+2|\boldsymbol{b}|^2=2(|\boldsymbol{a}|^2+|\boldsymbol{b}|^2)\qquad\blacksquare
$$

**(b)** 2 式を引くと
$$
|\boldsymbol{a}+\boldsymbol{b}|^2-|\boldsymbol{a}-\boldsymbol{b}|^2=4(\boldsymbol{a}\cdot\boldsymbol{b})\qquad\blacksquare
$$

---

## 3. シュワルツの不等式

**問題** ベクトル $\boldsymbol{a},\boldsymbol{b}$ に対して、シュワルツの不等式 $|\boldsymbol{a}\cdot\boldsymbol{b}|\le|\boldsymbol{a}||\boldsymbol{b}|$ を証明せよ。ここに左辺は内積 $\boldsymbol{a}\cdot\boldsymbol{b}$ の絶対値を表す。

**解答** $\boldsymbol{b}=\vec{0}$ のときは両辺 $0$ で成立する。$\boldsymbol{b}\ne\vec{0}$ とする。任意の実数 $t$ に対して
$$
|\boldsymbol{a}-t\boldsymbol{b}|^2=|\boldsymbol{a}|^2-2t(\boldsymbol{a}\cdot\boldsymbol{b})+t^2|\boldsymbol{b}|^2\ge 0
$$
が成り立つ。これは $t$ についての 2 次式で、すべての $t$ で $\ge 0$ だから判別式は $\le 0$：
$$
\{-2(\boldsymbol{a}\cdot\boldsymbol{b})\}^2-4|\boldsymbol{b}|^2|\boldsymbol{a}|^2\le 0
\;\Longrightarrow\;
(\boldsymbol{a}\cdot\boldsymbol{b})^2\le|\boldsymbol{a}|^2|\boldsymbol{b}|^2
$$
両辺の平方根をとって
$$
|\boldsymbol{a}\cdot\boldsymbol{b}|\le|\boldsymbol{a}||\boldsymbol{b}|\qquad\blacksquare
$$

---

## 4. 等号 $\boldsymbol{a}\cdot\boldsymbol{b}=|\boldsymbol{a}||\boldsymbol{b}|$ が成り立つ場合

**問題** $\boldsymbol{a}\cdot\boldsymbol{b}=|\boldsymbol{a}||\boldsymbol{b}|$ が成り立つのはどのような場合か。

**解答** $\boldsymbol{a}\cdot\boldsymbol{b}=|\boldsymbol{a}||\boldsymbol{b}|\cos\theta$ なので、$\boldsymbol{a}\cdot\boldsymbol{b}=|\boldsymbol{a}||\boldsymbol{b}|$ は $\cos\theta=1$、すなわち $\theta=0$ を意味する。したがって

- $\boldsymbol{a},\boldsymbol{b}$ が**同じ向き**のとき（一方が他方の正のスカラー倍、$\boldsymbol{b}=k\boldsymbol{a}\ (k>0)$）、
- または $\boldsymbol{a},\boldsymbol{b}$ の少なくとも一方が $\vec{0}$ のとき

に成り立つ。（絶対値つきの等号 $|\boldsymbol{a}\cdot\boldsymbol{b}|=|\boldsymbol{a}||\boldsymbol{b}|$ は「平行（同じ向き・逆向きのいずれか）」で成り立つが、絶対値なしの場合は**同じ向き**に限られる。）

---

## 5. 正三角形と 3 等分点

**問題** 1 辺の長さが $1$ である正三角形 $OAB$ において、$\overrightarrow{OA}=\boldsymbol{a},\ \overrightarrow{OB}=\boldsymbol{b}$ とし、辺 $AB$ を 3 等分する点を $M,N$ とする。
(a) $\boldsymbol{a}\cdot\boldsymbol{b}$ の値を求めよ。
(b) $\overrightarrow{OM},\ \overrightarrow{ON}$ を $\boldsymbol{a},\boldsymbol{b}$ で表して、$\overrightarrow{OM}\cdot\overrightarrow{ON}$ の値を求めよ。

**解答**

**(a)** $|\boldsymbol{a}|=|\boldsymbol{b}|=1$、$\boldsymbol{a},\boldsymbol{b}$ のなす角は $60^\circ$ だから
$$
\boldsymbol{a}\cdot\boldsymbol{b}=|\boldsymbol{a}||\boldsymbol{b}|\cos 60^\circ=1\cdot 1\cdot\frac{1}{2}=\boxed{\frac{1}{2}}
$$

**(b)** $A\to B$ の向きに $A,M,N,B$ と並ぶ。$A$ の位置ベクトルは $\boldsymbol{a}$、$B$ は $\boldsymbol{b}$ だから
$$
\overrightarrow{OM}=\frac{2}{3}\boldsymbol{a}+\frac{1}{3}\boldsymbol{b},\qquad
\overrightarrow{ON}=\frac{1}{3}\boldsymbol{a}+\frac{2}{3}\boldsymbol{b}
$$

$$
\overrightarrow{OM}\cdot\overrightarrow{ON}
=\frac{2}{9}|\boldsymbol{a}|^2+\frac{5}{9}(\boldsymbol{a}\cdot\boldsymbol{b})+\frac{2}{9}|\boldsymbol{b}|^2
=\frac{2}{9}+\frac{5}{9}\cdot\frac{1}{2}+\frac{2}{9}
=\frac{4}{9}+\frac{5}{18}
=\boxed{\frac{13}{18}}
$$

---

## 6. 直角三角形の垂線の足と内積

**問題** 直角三角形 $OAB$ において、直角をはさむ 2 辺 $OA,OB$ の長さがそれぞれ $4,3$ であるとする。$O$ から斜辺 $AB$ に下した垂線の足を $H$ とするとき、内積 $\overrightarrow{OA}\cdot\overrightarrow{OH}$ の値を求めよ。

**解答** 座標を $O=(0,0),\ A=(4,0),\ B=(0,3)$ にとる。$H$ は $AB$ 上の点で $\overrightarrow{OH}\perp\overrightarrow{AB}$。$H=A+s(B-A)=(4-4s,\ 3s)$、$\overrightarrow{AB}=(-4,3)$ として
$$
\overrightarrow{OH}\cdot\overrightarrow{AB}=(4-4s)(-4)+(3s)(3)=-16+25s=0
\;\Longrightarrow\;
s=\frac{16}{25}
$$
よって $H=\left(\dfrac{36}{25},\ \dfrac{48}{25}\right)$ となり
$$
\overrightarrow{OA}\cdot\overrightarrow{OH}=(4,0)\cdot\left(\frac{36}{25},\frac{48}{25}\right)=\boxed{\frac{144}{25}}
$$

---

## 7. 平行四辺形の面積（内積による表示）

**問題** $\boldsymbol{a},\boldsymbol{b}$ を $\vec{0}$ でない 2 つのベクトルとし、$\boldsymbol{a}=\overrightarrow{OA},\ \boldsymbol{b}=\overrightarrow{OB}$ とする。$OA,OB$ を 2 辺とする平行四辺形の面積 $S$ は
$$
S=\sqrt{|\boldsymbol{a}|^2|\boldsymbol{b}|^2-(\boldsymbol{a}\cdot\boldsymbol{b})^2}
$$
で与えられることを証明せよ。

**解答** $\boldsymbol{a},\boldsymbol{b}$ のなす角を $\theta$ とすると、平行四辺形の面積は $S=|\boldsymbol{a}||\boldsymbol{b}|\sin\theta$。したがって
$$
S^2=|\boldsymbol{a}|^2|\boldsymbol{b}|^2\sin^2\theta=|\boldsymbol{a}|^2|\boldsymbol{b}|^2(1-\cos^2\theta)
=|\boldsymbol{a}|^2|\boldsymbol{b}|^2-(|\boldsymbol{a}||\boldsymbol{b}|\cos\theta)^2
=|\boldsymbol{a}|^2|\boldsymbol{b}|^2-(\boldsymbol{a}\cdot\boldsymbol{b})^2
$$
根号内はシュワルツの不等式より $\ge 0$ なので
$$
S=\sqrt{|\boldsymbol{a}|^2|\boldsymbol{b}|^2-(\boldsymbol{a}\cdot\boldsymbol{b})^2}\qquad\blacksquare
$$

---

## 8. 平行四辺形の面積（成分表示）

**問題** $\boldsymbol{a}=(a_1,a_2),\ \boldsymbol{b}=(b_1,b_2)$ とすれば、$\boldsymbol{a},\boldsymbol{b}$ を 2 辺とする平行四辺形の面積 $S$ は $S=|a_1b_2-a_2b_1|$ で与えられることを示せ。

**解答** 問 7 の式に成分を代入する。
$$
|\boldsymbol{a}|^2|\boldsymbol{b}|^2-(\boldsymbol{a}\cdot\boldsymbol{b})^2=({a_1}^2+{a_2}^2)({b_1}^2+{b_2}^2)-(a_1b_1+a_2b_2)^2
$$
展開すると（ラグランジュの恒等式）
$$
={a_1}^2{b_2}^2-2a_1b_1a_2b_2+{a_2}^2{b_1}^2=(a_1b_2-a_2b_1)^2
$$
したがって
$$
S=\sqrt{(a_1b_2-a_2b_1)^2}=|a_1b_2-a_2b_1|\qquad\blacksquare
$$

---

## 9. 座標で与えられた三角形の面積

**問題** 3 頂点の座標が $(2,1),\ (-1,3),\ (3,6)$ である三角形の面積を求めよ。

**解答** 頂点 $P=(2,1)$ を基点にとると
$$
\boldsymbol{a}=(-1,3)-(2,1)=(-3,2),\qquad \boldsymbol{b}=(3,6)-(2,1)=(1,5)
$$
三角形の面積は平行四辺形の半分だから、問 8 より
$$
S=\frac{1}{2}\,|a_1b_2-a_2b_1|=\frac{1}{2}\,|(-3)(5)-(2)(1)|=\frac{1}{2}\cdot 17=\boxed{\frac{17}{2}}
$$
