const gen = javascript.javascriptGenerator;

/* =========================
   テキスト生成
========================= */

const gen = javascript.javascriptGenerator;

gen.forBlock["text"] = function (block) {
    return [
        block.getFieldValue("TEXT"),
        javascript.Order.ATOMIC
    ];
};

/* =========================
   CSS生成
========================= */

gen.forBlock["css_body_bg"] = function (block) {

    return `BODY_BG:${block.getFieldValue("VAL")}; `;

};

gen.forBlock["css_color"] = function (block) {

    return `color:${block.getFieldValue("VAL")}; `;

};

gen.forBlock["css_bg"] = function (block) {

    return `background-color:${block.getFieldValue("VAL")}; `;

};

gen.forBlock["css_size"] = function (block) {

    return `font-size:${block.getFieldValue("VAL")}; `;

};

gen.forBlock["css_width"] = function (block) {

    return `width:${block.getFieldValue("VAL")}; `;

};

gen.forBlock["css_padding"] = function (block) {

    return `padding:${block.getFieldValue("VAL")}; `;

};

gen.forBlock["css_margin"] = function (block) {

    return `margin:${block.getFieldValue("VAL")}; `;

};

gen.forBlock["css_radius"] = function (block) {

    return `border-radius:${block.getFieldValue("VAL")}; `;

};

gen.forBlock["css_align"] = function (block) {

    return `text-align:${block.getFieldValue("VAL")}; `;

};

gen.forBlock["css_border"] = function (block) {

    return `border:${block.getFieldValue("VAL")}; `;

};

gen.forBlock["css_shadow"] = function (block) {

    return `box-shadow:${block.getFieldValue("VAL")}; `;

};

/* =========================
   HTML基本ブロック生成
========================= */

gen.forBlock["html_page_container"] = function (block, generator) {

    const content =
        generator.statementToCode(block, "CONTENT");

    return `
<div style="
max-width:900px;
margin:0 auto;
padding:40px;
">
${content}
</div>
`;

};

gen.forBlock["html_center"] = function (block, generator) {

    const content =
        generator.statementToCode(block, "CONTENT");

    return `
<div style="
text-align:center;
">
${content}
</div>
`;

};

gen.forBlock["html_h1"] = function (block, generator) {

    const text =
        generator.valueToCode(
            block,
            "TEXT",
            javascript.Order.ATOMIC
        ) || "見出し";

    const css =
        generator.statementToCode(block, "CSS").trim();

    return `<h1 style="${css}">${text}</h1>\n`;

};

gen.forBlock["html_p"] = function (block, generator) {

    const text =
        generator.valueToCode(
            block,
            "TEXT",
            javascript.Order.ATOMIC
        ) || "文章";

    const css =
        generator.statementToCode(block, "CSS").trim();

    return `<p style="${css}">${text}</p>\n`;

};

gen.forBlock["html_div"] = function (block, generator) {

    const css =
        generator.statementToCode(block, "CSS").trim();

    const content =
        generator.statementToCode(block, "CONTENT");

    return `
<div style="${css}">
${content}
</div>
`;

};

gen.forBlock["html_img"] = function (block, generator) {

    const src =
        block.getFieldValue("SRC");

    const css =
        generator.statementToCode(block, "CSS").trim();

    return `<img src="${src}" style="${css}">\n`;

};

gen.forBlock["html_profile_image"] = function (block) {

    const src =
        selectedProfileImageData ||
        "https://placehold.jp/300x300.png";

    const size =
        block.getFieldValue("SIZE");

    const align =
        block.getFieldValue("ALIGN");

    const borderColor =
        block.getFieldValue("BORDER_COLOR");

    const borderWidth =
        block.getFieldValue("BORDER_WIDTH");

    const radius =
        block.getFieldValue("RADIUS");

    const shadow =
        block.getFieldValue("SHADOW");

    let marginLeft = "auto";
    let marginRight = "auto";

    if (align === "left") {

        marginLeft = "0";
        marginRight = "auto";

    }

    if (align === "right") {

        marginLeft = "auto";
        marginRight = "0";

    }

    const shadowStyle =
        shadow === "on"
            ? "box-shadow:0 4px 12px rgba(0,0,0,0.25);"
            : "";

    return `
<img src="${src}" style="
width:${size};
height:${size};
object-fit:cover;
border-radius:${radius};
border:${borderWidth} solid ${borderColor};
display:block;
margin-left:${marginLeft};
margin-right:${marginRight};
margin-bottom:20px;
${shadowStyle}
">
`;

};

gen.forBlock["html_hr"] = function (block, generator) {

    const css =
        generator.statementToCode(block, "CSS").trim();

    return `<hr style="border:none;border-top:2px solid #4A90E2;margin:30px 0;${css}">\n`;

};

gen.forBlock["html_section"] = function (block, generator) {

    const title =
        generator.valueToCode(
            block,
            "TITLE",
            javascript.Order.ATOMIC
        ) || "セクション";

    const content =
        generator.statementToCode(block, "CONTENT");

    return `
<section style="margin:35px 0;">
<h2 style="
color:#4A90E2;
border-bottom:2px solid #4A90E2;
padding-bottom:8px;
">
${title}
</h2>
${content}
</section>
`;

};
gen.forBlock["html_list"] = function (block, generator) {

    const items =
        generator.statementToCode(block, "ITEMS");

    return `<ul style="line-height:2;">\n${items}</ul>\n`;

};

gen.forBlock["html_li"] = function (block, generator) {

    const text =
        generator.valueToCode(
            block,
            "TEXT",
            javascript.Order.ATOMIC
        ) || "項目";

    return `<li>${text}</li>\n`;

};

gen.forBlock["html_a"] = function (block, generator) {

    const href =
        block.getFieldValue("HREF");

    const text =
        generator.valueToCode(
            block,
            "TEXT",
            javascript.Order.ATOMIC
        ) || "リンク";

    const css =
        generator.statementToCode(block, "CSS").trim();

    return `<a href="${href}" target="_blank" style="${css}">${text}</a>\n`;

};

gen.forBlock["html_button"] = function (block, generator) {

    const text =
        generator.valueToCode(
            block,
            "TEXT",
            javascript.Order.ATOMIC
        ) || "ボタン";

    const css =
        generator.statementToCode(block, "CSS").trim();

    return `<button style="cursor:pointer; ${css}">${text}</button>\n`;

};

/* =========================
   カード系ブロック生成
========================= */

gen.forBlock["html_hero"] = function (block, generator) {

    const css =
        generator.statementToCode(block, "CSS").trim();

    const content =
        generator.statementToCode(block, "CONTENT");

    return `
<div style="
background:linear-gradient(135deg,#74ebd5,#9face6);
color:white;
padding:50px 30px;
border-radius:24px;
text-align:center;
margin-bottom:24px;
${css}
">
${content}
</div>
`;

};

gen.forBlock["html_profile_card"] = function (block, generator) {

    const css =
        generator.statementToCode(block, "CSS").trim();

    const content =
        generator.statementToCode(block, "CONTENT");

    return `
<div style="
background:white;
padding:28px;
margin:16px auto;
border-radius:18px;
box-shadow:0 4px 12px rgba(0,0,0,0.12);
max-width:760px;
${css}
">
${content}
</div>
`;

};

gen.forBlock["html_hobby_card"] = function (block, generator) {

    const css =
        generator.statementToCode(block, "CSS").trim();

    const content =
        generator.statementToCode(block, "CONTENT");

    return `
<div style="
background:#fff7e6;
padding:20px;
margin:14px 0;
border-radius:16px;
border:2px solid #ffd166;
${css}
">
${content}
</div>
`;

};

gen.forBlock["html_skill_card"] = function (block, generator) {

    const css =
        generator.statementToCode(block, "CSS").trim();

    const content =
        generator.statementToCode(block, "CONTENT");

    return `
<div style="
background:#eef6ff;
padding:20px;
margin:14px 0;
border-radius:16px;
border-left:8px solid #3498db;
${css}
">
${content}
</div>
`;

};

gen.forBlock["html_sns_card"] = function (block, generator) {

    const css =
        generator.statementToCode(block, "CSS").trim();

    const content =
        generator.statementToCode(block, "CONTENT");

    return `
<div style="
background:#f3e8ff;
padding:20px;
margin:14px 0;
border-radius:16px;
text-align:center;
${css}
">
${content}
</div>
`;

};

gen.forBlock["html_image_card"] = function (block, generator) {

    const src =
        block.getFieldValue("SRC");

    const css =
        generator.statementToCode(block, "CSS").trim();

    const content =
        generator.statementToCode(block, "CONTENT");

    return `
<div style="
background:white;
padding:20px;
margin:16px 0;
border-radius:18px;
box-shadow:0 4px 12px rgba(0,0,0,0.12);
${css}
">
<img src="${src}" style="
width:100%;
border-radius:14px;
margin-bottom:12px;
">
${content}
</div>
`;

};

gen.forBlock["html_section_card"] = function (block, generator) {

    const css =
        generator.statementToCode(block, "CSS").trim();

    const content =
        generator.statementToCode(block, "CONTENT");

    return `
<section style="
background:#ffffff;
padding:28px;
margin:24px 0;
border-radius:20px;
${css}
">
${content}
</section>
`;

};

gen.forBlock["html_two_column"] = function (block, generator) {

    const left =
        generator.statementToCode(block, "LEFT");

    const right =
        generator.statementToCode(block, "RIGHT");

    return `
<div style="
display:grid;
grid-template-columns:1fr 1fr;
gap:20px;
margin:20px 0;
">
<div>
${left}
</div>
<div>
${right}
</div>
</div>
`;

};
