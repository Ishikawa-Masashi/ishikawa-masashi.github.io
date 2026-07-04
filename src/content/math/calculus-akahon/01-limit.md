---
title: "微分積分 - 数列の極限"
description: "はさみうちの原理を使った数列の極限の求め方"
pubDate: 2026-04-10
chapter: 1
chapterTitle: "極限"
section: 1
---

## 問題
次の極限を求めよ。
$$
\lim_{n \to \infty} \frac{\sin n}{n}
$$

---

## 解答

任意の $n$ について $-1 \le \sin n \le 1$ が成り立つので，
$$
-\frac{1}{n} \le \frac{\sin n}{n} \le \frac{1}{n}
$$

ここで
$$
\lim_{n \to \infty} \left(-\frac{1}{n}\right) = 0, \quad
\lim_{n \to \infty} \frac{1}{n} = 0
$$

よってはさみうちの原理より

👉
$$
\boxed{\lim_{n \to \infty} \frac{\sin n}{n} = 0}
$$
