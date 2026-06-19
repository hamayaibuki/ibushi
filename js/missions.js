const missions = [
    {
        goal: "名前タイトルを作ろう",
        learn: "HTMLのh1タグとCSSの文字色・文字サイズ",
        reason: "自己紹介サイトでは最初に名前を大きく表示すると、見る人に印象を与えられるため",
        hint: "見出しh1ブロックに自分の名前やサイトタイトルを書いてみよう。",
        reflection: "自分の名前を見やすく表示することができました。",
        check: code => /<h1[^>]*>/.test(code)
    },
    {
        goal: "自己紹介文を書こう",
        learn: "pタグを使った文章作成",
        reason: "文章を使うことで自分のことを相手へ伝えられるため",
        hint: "自己紹介を10文字以上書いてみよう。",
        reflection: "自己紹介文を書くことができました。",
        check: code => {
            const m = code.match(/<p[^>]*>(.*?)<\/p>/s);
            if (!m) return false;
            return m[1].replace(/\s/g, "").length >= 10;
        }
    },
    {
        goal: "好きなものを紹介しよう",
        learn: "箇条書きを使った整理",
        reason: "情報を整理して見やすく伝えられるため",
        hint: "好きなものを3つ以上箇条書きで書こう。",
        reflection: "箇条書きを使えるようになりました。",
        check: code => {
            const items = code.match(/<li>.*?<\/li>/gs);
            return items && items.length >= 3;
        }
    },
    {
        goal: "プロフィール画像を入れよう",
        learn: "imgタグ",
        reason: "画像を入れると自己紹介サイトらしくなるため",
        hint: "画像選択ボタンから画像を選び、プロフィール画像ブロックを置こう。",
        reflection: "画像を表示できました。",
        check: code => /<img/.test(code)
    },
    {
        goal: "カードデザインを覚えよう",
        learn: "背景色・余白・角丸・影",
        reason: "カードデザインはWebページでよく使われるため",
        hint: "背景色、padding、border-radius、box-shadowを使ってみよう。",
        reflection: "カード風デザインを作れました。",
        check: code =>
            code.includes("background") &&
            code.includes("padding") &&
            code.includes("border-radius")
    },
    {
        goal: "SNSリンクを作ろう",
        learn: "aタグ",
        reason: "リンクを使うと別ページへ移動できるため",
        hint: "GoogleやSNSへのリンクを作ってみよう。",
        reflection: "リンクを作ることができました。",
        check: code => /<a /.test(code)
    }
];

const freeModeInfo = {
    goal: "自由制作",
    learn: "今まで学んだHTML・CSS",
    reason: "自分で考えて作る力を身につけるため",
    hint: "自由にサイトを作ってみよう。",
    reflection: "自分だけのサイトを作ることができました。"
};

const finalModeInfo = {
    goal: "最終課題",
    learn: "HTML・CSSを自由に組み合わせる",
    reason: "Web制作には正解がないから",
    hint: "満足できる自己紹介サイトを作ろう。完成したら「完成しました！」を押してください。",
    reflection: "世界に一つだけの自己紹介サイトが完成しました。"
};