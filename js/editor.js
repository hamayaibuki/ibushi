let workspace;
let latestPreviewHTML = "";
let selectedProfileImageData = "";
let cleared = false;
let finalFinished = false;

const params = new URLSearchParams(location.search);
const missionId = Number(params.get("id") || 0);
const mode = params.get("mode");

const isFreeMode = mode === "free";
const isFinalMode = mode === "final";

window.onload = function () {
    setupPage();
    setupImageInput();
    setupBlockly();
    setupDragbar();
};

function setupPage() {
    const title = document.getElementById("mission-title");

    if (isFinalMode) {
        title.innerText = "最終課題：自分だけの自己紹介サイトを作ろう";
        setLearningInfo(finalModeInfo);
        document.getElementById("finish-box").style.display = "block";
        return;
    }

    if (isFreeMode) {
        title.innerText = "自由制作モード";
        setLearningInfo(freeModeInfo);
        return;
    }

    const mission = missions[missionId] || missions[0];
    title.innerText = mission.goal;
    setLearningInfo(mission);
}

function setupBlockly() {
    workspace = Blockly.inject("blockly-div", {
        toolbox: document.getElementById("toolbox"),
        theme: Blockly.Themes.Dark,
        trashcan: true,
        scrollbars: true,
        zoom: {
            controls: true,
            wheel: true,
            startScale: 1
        }
    });

    workspace.addChangeListener(function (event) {
        updatePreview(event);
    });

    updatePreview(null);
}

function setupImageInput() {
    const input = document.getElementById("profile-image-input");

    input.addEventListener("change", function () {
        const file = input.files[0];
        if (!file) return;

        const reader = new FileReader();

        reader.onload = function (e) {
            selectedProfileImageData = e.target.result;
            updatePreview({ type: "change" });
        };

        reader.readAsDataURL(file);
    });
}

function setLearningInfo(info) {
    document.getElementById("goal-text").innerText = info.goal;
    document.getElementById("learn-text").innerText = info.learn;
    document.getElementById("reason-text").innerText = info.reason;
    document.getElementById("hint-text").innerText = info.hint;
}

function updatePreview(event) {
    const rawCode = gen.workspaceToCode(workspace);

    const bodyBg = getBodyBackground(rawCode);
    const code = rawCode.replace(/BODY_BG:.*?;/g, "");

    showCode(code);
    showPreview(code, bodyBg);

    if (isFinalMode) {
        showFinalMessage(code);
        return;
    }

    if (isFreeMode) {
        showFreeMessage(code);
        return;
    }

    checkMission(event, code);
}

function getBodyBackground(rawCode) {
    const match = rawCode.match(/BODY_BG:(.*?);/);
    return match ? match[1].trim() : "#ffffff";
}

function showCode(code) {
    let displayCode = code;

    if (selectedProfileImageData) {
        displayCode = displayCode.replaceAll(
            selectedProfileImageData,
            "選択した画像"
        );
    }

    document.getElementById("combined-code").value = displayCode;
}

function showPreview(code, bodyBg) {
    latestPreviewHTML = `
<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<title>プレビュー</title>
<base target="_blank">
<style>
body {
    padding: 40px;
    font-family: sans-serif;
    background: ${bodyBg};
    color: #333;
}

a,
button {
    cursor: pointer;
}

a:hover,
button:hover {
    opacity: 0.8;
}

@media(max-width:600px){
    body {
        padding: 20px;
    }

    div[style*="grid-template-columns"] {
        display: block !important;
    }
}
</style>
</head>
<body>
${code}
</body>
</html>
`;

    document.getElementById("preview").srcdoc = latestPreviewHTML;
}

function showFinalMessage(code) {
    if (!code.trim()) return;
    if (finalFinished) return;

    showReflection(
        "自由に制作中です。完成したと思ったら「完成しました！」を押してください。"
    );
}

function showFreeMessage(code) {
    if (!code.trim()) return;

    showReflection(freeModeInfo.reflection);
}

function checkMission(event, code) {
    if (cleared) return;
    if (!isValidEvent(event)) return;

    const mission = missions[missionId] || missions[0];

    if (!mission.check(code)) return;

    cleared = true;

    document.getElementById("clear-status").innerText = "🎉 クリア！";

    showReflection(mission.reflection);
    showSurveyLink();

    confetti({
        particleCount: 100,
        spread: 70
    });
}

function isValidEvent(event) {
    if (!event) return false;

    return (
        event.type === Blockly.Events.BLOCK_MOVE ||
        event.type === Blockly.Events.BLOCK_CHANGE ||
        event.type === "move" ||
        event.type === "change"
    );
}

function showReflection(text) {
    document.getElementById("reflection-text").innerText = text;
    document.getElementById("reflection-box").style.display = "block";
}

function showSurveyLink() {
    document.getElementById("survey-link").style.display = "block";
}

function finishFinalWork() {
    finalFinished = true;

    document.getElementById("clear-status").innerText = "🎉 完成！";

    showReflection(
        "世界に一つだけの自己紹介サイトが完成しました。おつかれさまでした！"
    );

    showSurveyLink();

    confetti({
        particleCount: 180,
        spread: 90
    });
}

function openPreviewWindow() {
    const newWindow = window.open("", "_blank");

    if (!newWindow) {
        alert("ポップアップがブロックされています。");
        return;
    }

    newWindow.document.open();
    newWindow.document.write(latestPreviewHTML);
    newWindow.document.close();
}

function openExample() {
    window.open("example.html", "_blank");
}

function chooseProfileImage() {
    document.getElementById("profile-image-input").click();
}

function copyGeneratedCode() {
    const code = document.getElementById("combined-code").value;

    if (!code.trim()) {
        alert("コピーするHTMLがありません。");
        return;
    }

    navigator.clipboard.writeText(code)
        .then(function () {
            alert("HTMLをコピーしました！");
        })
        .catch(function () {
            const textarea = document.getElementById("combined-code");
            textarea.select();
            document.execCommand("copy");
            alert("HTMLをコピーしました！");
        });
}

function resetWorkspace() {
    if (!workspace) return;

    const ok = confirm("作業内容をリセットしますか？");
    if (!ok) return;

    workspace.clear();

    selectedProfileImageData = "";
    cleared = false;
    finalFinished = false;

    document.getElementById("profile-image-input").value = "";
    document.getElementById("combined-code").value = "";
    document.getElementById("clear-status").innerText = "準備OK";
    document.getElementById("reflection-box").style.display = "none";
    document.getElementById("survey-link").style.display = "none";

    updatePreview(null);
}

function setupDragbar() {
    const dragbar = document.getElementById("dragbar");
    const leftArea = document.getElementById("blockly-area");
    const rightPanel = document.querySelector(".right-panel");

    let dragging = false;

    dragbar.addEventListener("mousedown", function () {
        dragging = true;
        document.body.style.cursor = "col-resize";
    });

    document.addEventListener("mouseup", function () {
        dragging = false;
        document.body.style.cursor = "default";
    });

    document.addEventListener("mousemove", function (e) {
        if (!dragging) return;

        const leftWidth = e.clientX;
        const rightWidth = window.innerWidth - leftWidth - dragbar.offsetWidth;

        if (leftWidth < 300 || rightWidth < 380) return;

        leftArea.style.width = leftWidth + "px";
        rightPanel.style.width = rightWidth + "px";

        Blockly.svgResize(workspace);
    });
}