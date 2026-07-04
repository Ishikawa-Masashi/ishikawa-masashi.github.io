---
title: "線形代数 - 一次独立の判定"
description: "3本のベクトルが一次独立かどうかを行列式で判定する"
pubDate: 2026-04-07
chapter: 1
chapterTitle: "ベクトル空間"
section: 2
---

## 問題
次の3本のベクトルが一次独立かどうか判定せよ。
$$
\mathbf{a}=(1,0,1),\quad \mathbf{b}=(0,1,1),\quad \mathbf{c}=(1,1,0)
$$

---

## 解答

これらを列に並べた行列の行列式を調べる。
$$
\begin{vmatrix} 1 & 0 & 1 \\ 0 & 1 & 1 \\ 1 & 1 & 0 \end{vmatrix}
= 1(1\cdot 0 - 1\cdot 1) - 0 + 1(0\cdot 1 - 1\cdot 1)
= -1 - 1 = -2
$$

行列式が $0$ でないので，3本のベクトルは一次独立である。

👉
$$
\boxed{\text{一次独立}}
$$
