import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: "./src/content/blog/", pattern: "*.md" }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

const tech = defineCollection({
	// Load Markdown and MDX files in the `src/content/tech/` directory.
	loader: glob({ base: "./src/content/tech/", pattern: "*.md" }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

// 参考書ごとの解説記事。`src/content/math/<参考書スラッグ>/<記事>.md` に置く。
// `_` で始まるファイル（参考書メタの `_book.md`）は記事から除外する。
const math = defineCollection({
	loader: glob({ base: "./src/content/math/", pattern: "**/[!_]*.md" }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		// 章番号（1章, 2章, ...）。同じ章番号の記事がひとまとまりで表示される。
		chapter: z.number().default(1),
		// 章タイトル（例: "ベクトル空間"）。同じ章の記事は同じ値にする。見出しに使用。
		chapterTitle: z.string().optional(),
		// 章の中での節番号。並び順に使う。小さいほど先。
		section: z.number().default(1),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

// 参考書そのもののメタ情報。各参考書ディレクトリの `_book.md` を読み込む。
const mathBooks = defineCollection({
	loader: glob({ base: "./src/content/math/", pattern: "**/_book.md" }),
	schema: z.object({
		title: z.string(),
		author: z.string().optional(),
		publisher: z.string().optional(),
		description: z.string().optional(),
		// 分野（例: "線形代数", "解析学", "確率・統計"）。未指定は「その他」に分類。
		field: z.string().default("その他"),
		// /public 以下の表紙画像パス（例: "/covers/linear-algebra.jpg"）
		coverImage: z.string().optional(),
		// 参考書一覧での並び順。小さいほど先。
		order: z.number().default(0),
	}),
});

export const collections = { blog, tech, math, mathBooks };
