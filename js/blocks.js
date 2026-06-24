Blockly.Blocks["html_page_container"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("ページ幅を整える");

        this.appendStatementInput("CONTENT")
            .appendField("中身");

        this.setPreviousStatement(true);
        this.setNextStatement(true);

        this.setColour(200);
    }
};

Blockly.Blocks["html_center"] = {
    init: function () {

        this.appendDummyInput()
            .appendField("中央配置");

        this.appendStatementInput("CONTENT")
            .appendField("中身");

        this.setPreviousStatement(true);
        this.setNextStatement(true);

        this.setColour(200);

    }
};

Blockly.Blocks["html_h1"] = {
    init: function () {

        this.appendValueInput("TEXT")
            .setCheck("String")
            .appendField("見出し h1");

        this.appendStatementInput("CSS")
            .setCheck("CSS")
            .appendField("見た目");

        this.setPreviousStatement(true);
        this.setNextStatement(true);

        this.setColour(230);

    }
};

Blockly.Blocks["html_p"] = {

    init: function () {

        this.appendValueInput("TEXT")
            .setCheck("String")
            .appendField("文章 p");

        this.appendStatementInput("CSS")
            .setCheck("CSS")
            .appendField("見た目");

        this.setPreviousStatement(true);
        this.setNextStatement(true);

        this.setColour(160);

    }

};

Blockly.Blocks["html_div"] = {

    init: function () {

        this.appendDummyInput()
            .appendField("グループ div");

        this.appendStatementInput("CSS")
            .setCheck("CSS")
            .appendField("見た目");

        this.appendStatementInput("CONTENT")
            .appendField("中身");

        this.setPreviousStatement(true);
        this.setNextStatement(true);

        this.setColour(260);

    }

};

Blockly.Blocks["html_img"] = {

    init: function () {

        this.appendDummyInput()
            .appendField("画像URL")
            .appendField(
                new Blockly.FieldTextInput(
                    "https://placehold.jp/300x200.png"
                ),
                "SRC"
            );

        this.appendStatementInput("CSS")
            .setCheck("CSS")
            .appendField("見た目");

        this.setPreviousStatement(true);
        this.setNextStatement(true);

        this.setColour(20);

    }

};

Blockly.Blocks["html_profile_image"] = {

    init: function () {

        this.appendDummyInput()
            .appendField("プロフィール画像");

        this.appendDummyInput()
            .appendField("画像は上の🖼画像選択から選ぶ");

        this.appendDummyInput()
            .appendField("大きさ")
            .appendField(
                new Blockly.FieldTextInput("150px"),
                "SIZE"
            );

        this.appendDummyInput()
            .appendField("横位置")
            .appendField(
                new Blockly.FieldDropdown([
                    ["左","left"],
                    ["中央","center"],
                    ["右","right"]
                ]),
                "ALIGN"
            );

        this.appendDummyInput()
            .appendField("枠線色")
            .appendField(
                new Blockly.FieldTextInput("#4A90E2"),
                "BORDER_COLOR"
            );

        this.appendDummyInput()
            .appendField("枠線太さ")
            .appendField(
                new Blockly.FieldTextInput("3px"),
                "BORDER_WIDTH"
            );

        this.appendDummyInput()
            .appendField("丸さ")
            .appendField(
                new Blockly.FieldTextInput("50%"),
                "RADIUS"
            );

        this.appendDummyInput()
            .appendField("影")
            .appendField(
                new Blockly.FieldDropdown([
                    ["あり","on"],
                    ["なし","off"]
                ]),
                "SHADOW"
            );

        this.setPreviousStatement(true);
        this.setNextStatement(true);

        this.setColour(25);

    }

};

Blockly.Blocks["html_hr"] = {

    init: function () {

        this.appendDummyInput()
            .appendField("区切り線");

        this.appendStatementInput("CSS")
            .setCheck("CSS")
            .appendField("見た目");

        this.setPreviousStatement(true);
        this.setNextStatement(true);

        this.setColour(210);

    }

};

Blockly.Blocks["html_section"] = {

    init: function () {

        this.appendValueInput("TITLE")
            .setCheck("String")
            .appendField("セクション名");

        this.appendStatementInput("CONTENT")
            .appendField("中身");

        this.setPreviousStatement(true);
        this.setNextStatement(true);

        this.setColour(180);

    }

};

Blockly.Blocks["html_list"] = {

    init: function () {

        this.appendDummyInput()
            .appendField("箇条書きリスト");

        this.appendStatementInput("ITEMS")
            .appendField("項目");

        this.setPreviousStatement(true);
        this.setNextStatement(true);

        this.setColour(140);

    }

};

Blockly.Blocks["html_li"] = {

    init: function () {

        this.appendValueInput("TEXT")
            .setCheck("String")
            .appendField("項目");

        this.setPreviousStatement(true);
        this.setNextStatement(true);

        this.setColour(140);

    }

};

Blockly.Blocks["text"] = {

    init: function () {

        this.appendDummyInput()
            .appendField("\"")
            .appendField(
                new Blockly.FieldTextInput("テキスト"),
                "TEXT"
            )
            .appendField("\"");

        this.setOutput(true, "String");

        this.setColour(160);

    }

};
Blockly.Blocks["html_a"] = {

    init: function () {

        this.appendDummyInput()
            .appendField("リンク先URL")
            .appendField(
                new Blockly.FieldTextInput("https://google.com"),
                "HREF"
            );

        this.appendValueInput("TEXT")
            .setCheck("String")
            .appendField("文字");

        this.appendStatementInput("CSS")
            .setCheck("CSS")
            .appendField("見た目");

        this.setPreviousStatement(true);
        this.setNextStatement(true);

        this.setColour(290);

    }

};

Blockly.Blocks["html_button"] = {

    init: function () {

        this.appendValueInput("TEXT")
            .setCheck("String")
            .appendField("ボタン");

        this.appendStatementInput("CSS")
            .setCheck("CSS")
            .appendField("見た目");

        this.setPreviousStatement(true);
        this.setNextStatement(true);

        this.setColour(65);

    }

};

Blockly.Blocks["html_hero"] = {

    init: function () {

        this.appendDummyInput()
            .appendField("ヒーローエリア");

        this.appendStatementInput("CSS")
            .setCheck("CSS")
            .appendField("見た目");

        this.appendStatementInput("CONTENT")
            .appendField("中身");

        this.setPreviousStatement(true);
        this.setNextStatement(true);

        this.setColour(240);

    }

};

Blockly.Blocks["html_profile_card"] = {

    init: function () {

        this.appendDummyInput()
            .appendField("プロフィールカード");

        this.appendStatementInput("CSS")
            .setCheck("CSS")
            .appendField("見た目");

        this.appendStatementInput("CONTENT")
            .appendField("中身");

        this.setPreviousStatement(true);
        this.setNextStatement(true);

        this.setColour(20);

    }

};

Blockly.Blocks["html_hobby_card"] = {

    init: function () {

        this.appendDummyInput()
            .appendField("趣味カード");

        this.appendStatementInput("CSS")
            .setCheck("CSS")
            .appendField("見た目");

        this.appendStatementInput("CONTENT")
            .appendField("中身");

        this.setPreviousStatement(true);
        this.setNextStatement(true);

        this.setColour(35);

    }

};

Blockly.Blocks["html_skill_card"] = {

    init: function () {

        this.appendDummyInput()
            .appendField("スキルカード");

        this.appendStatementInput("CSS")
            .setCheck("CSS")
            .appendField("見た目");

        this.appendStatementInput("CONTENT")
            .appendField("中身");

        this.setPreviousStatement(true);
        this.setNextStatement(true);

        this.setColour(50);

    }

};

Blockly.Blocks["html_sns_card"] = {

    init: function () {

        this.appendDummyInput()
            .appendField("SNSカード");

        this.appendStatementInput("CSS")
            .setCheck("CSS")
            .appendField("見た目");

        this.appendStatementInput("CONTENT")
            .appendField("中身");

        this.setPreviousStatement(true);
        this.setNextStatement(true);

        this.setColour(290);

    }

};

Blockly.Blocks["html_image_card"] = {

    init: function () {

        this.appendDummyInput()
            .appendField("画像つきカード");

        this.appendDummyInput()
            .appendField("画像URL")
            .appendField(
                new Blockly.FieldTextInput("https://placehold.jp/300x200.png"),
                "SRC"
            );

        this.appendStatementInput("CSS")
            .setCheck("CSS")
            .appendField("見た目");

        this.appendStatementInput("CONTENT")
            .appendField("中身");

        this.setPreviousStatement(true);
        this.setNextStatement(true);

        this.setColour(80);

    }

};

Blockly.Blocks["html_section_card"] = {

    init: function () {

        this.appendDummyInput()
            .appendField("セクションカード");

        this.appendStatementInput("CSS")
            .setCheck("CSS")
            .appendField("見た目");

        this.appendStatementInput("CONTENT")
            .appendField("中身");

        this.setPreviousStatement(true);
        this.setNextStatement(true);

        this.setColour(120);

    }

};

Blockly.Blocks["html_two_column"] = {

    init: function () {

        this.appendDummyInput()
            .appendField("2列レイアウト");

        this.appendStatementInput("LEFT")
            .appendField("左");

        this.appendStatementInput("RIGHT")
            .appendField("右");

        this.setPreviousStatement(true);
        this.setNextStatement(true);

        this.setColour(200);

    }

};

/* =========================
   CSSブロック
========================= */

Blockly.Blocks["css_body_bg"] = {

    init: function () {

        this.appendDummyInput()
            .appendField("ページ背景色")
            .appendField(
                new Blockly.FieldTextInput("#ffffff"),
                "VAL"
            );

        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");

        this.setColour(330);

    }

};

Blockly.Blocks["css_color"] = {

    init: function () {

        this.appendDummyInput()
            .appendField("文字色")
            .appendField(
                new Blockly.FieldTextInput("#333333"),
                "VAL"
            );

        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");

        this.setColour(330);

    }

};

Blockly.Blocks["css_bg"] = {

    init: function () {

        this.appendDummyInput()
            .appendField("エリア背景色")
            .appendField(
                new Blockly.FieldTextInput("#ffffff"),
                "VAL"
            );

        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");

        this.setColour(330);

    }

};

Blockly.Blocks["css_size"] = {

    init: function () {

        this.appendDummyInput()
            .appendField("文字サイズ")
            .appendField(
                new Blockly.FieldTextInput("30px"),
                "VAL"
            );

        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");

        this.setColour(330);

    }

};

Blockly.Blocks["css_width"] = {

    init: function () {

        this.appendDummyInput()
            .appendField("横幅")
            .appendField(
                new Blockly.FieldTextInput("200px"),
                "VAL"
            );

        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");

        this.setColour(330);

    }

};

Blockly.Blocks["css_padding"] = {

    init: function () {

        this.appendDummyInput()
            .appendField("内側余白")
            .appendField(
                new Blockly.FieldTextInput("15px"),
                "VAL"
            );

        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");

        this.setColour(330);

    }

};

Blockly.Blocks["css_margin"] = {

    init: function () {

        this.appendDummyInput()
            .appendField("外側余白")
            .appendField(
                new Blockly.FieldTextInput("15px"),
                "VAL"
            );

        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");

        this.setColour(330);

    }

};

Blockly.Blocks["css_radius"] = {

    init: function () {

        this.appendDummyInput()
            .appendField("角丸")
            .appendField(
                new Blockly.FieldTextInput("10px"),
                "VAL"
            );

        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");

        this.setColour(330);

    }

};

Blockly.Blocks["css_align"] = {

    init: function () {

        this.appendDummyInput()
            .appendField("文字揃え")
            .appendField(
                new Blockly.FieldDropdown([
                    ["左", "left"],
                    ["中央", "center"],
                    ["右", "right"]
                ]),
                "VAL"
            );

        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");

        this.setColour(330);

    }

};

Blockly.Blocks["css_border"] = {

    init: function () {

        this.appendDummyInput()
            .appendField("線")
            .appendField(
                new Blockly.FieldTextInput("2px solid #4A90E2"),
                "VAL"
            );

        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");

        this.setColour(330);

    }

};

Blockly.Blocks["css_shadow"] = {

    init: function () {

        this.appendDummyInput()
            .appendField("影")
            .appendField(
                new Blockly.FieldTextInput("0 4px 12px rgba(0,0,0,0.15)"),
                "VAL"
            );

        this.setPreviousStatement(true, "CSS");
        this.setNextStatement(true, "CSS");

        this.setColour(330);

    }

};
