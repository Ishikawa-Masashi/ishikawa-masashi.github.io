---
title: "円の方程式"
description: "2点間の距離から導く円の方程式。標準形と一般形。"
pubDate: 2026-07-08
chapter: 3
chapterTitle: "図形と方程式"
section: 1
---

直線と並ぶ基本図形が「円」である。円は「ある点（中心）からの距離が一定（半径）である点の集まり」なので、**2 点間の距離**を式にすると円の方程式が得られる。

---

## 原点を中心とする半径 1 の円

円上の点を $P(x,y)$ とすると、点 $P$ は「原点 $O$ からの距離が $1$」を満たす。すなわち
$$
\mathrm{OP}=1
$$
2 点間の距離の公式より $\mathrm{OP}=\sqrt{(x-0)^2+(y-0)^2}$ だから
$$
\sqrt{x^2+y^2}=1
$$
両辺を 2 乗して
$$
\boxed{x^2+y^2=1}
$$

逆に、$x^2+y^2=1$ を満たす点 $P(x,y)$ は $\mathrm{OP}=1$ を満たすので円上の点である。したがって、これが求める円の方程式になる。

---

## 点 $A(a,b)$ を中心とする半径 $r$ の円

同じように考える。円上の点を $P(x,y)$ とすると、$P$ は「中心 $A$ からの距離が $r$」を満たす。

<figure style="text-align: center; margin: 22px 0;">
<img src="/figures/circle-equation.svg" alt="点A(a,b)を中心とする半径rの円と円上の点P(x,y)" style="display: block; margin: 0 auto; max-width: 300px; width: 100%; height: auto;" />
<figcaption style="font-size: 14px; color: #555; margin-top: 6px;">中心 A(a, b) からの距離が r である点 P(x, y) の集まりが円</figcaption>
</figure>

$$
\mathrm{AP}=r
\;\Longleftrightarrow\;
\sqrt{(x-a)^2+(y-b)^2}=r
\;\Longleftrightarrow\;
(x-a)^2+(y-b)^2=r^2
$$

---

## 円の方程式（標準形と一般形）

点 $A(a,b)$ を中心とする半径 $r\ (r>0)$ の円の方程式は
$$
(x-a)^2+(y-b)^2=r^2
$$
と書ける。この形を円の**標準形**という。

これを展開すると
$$
x^2+y^2-2ax-2by+(a^2+b^2-r^2)=0
$$
となり、$l=-2a,\ m=-2b,\ n=a^2+b^2-r^2$ とおけば
$$
x^2+y^2+lx+my+n=0
$$
の形になる。この形を円の**一般形**という。

- **標準形** … 中心 $(a,b)$ と半径 $r$ がひと目で分かる。
- **一般形** … 展開した形。中心・半径を知りたいときは平方完成して標準形に戻す。
