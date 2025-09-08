function startFortuneTelling() {
    // 1. 从HTML中获取用户输入的值
    const dateInput = document.getElementById("dateInput");
    const ageInput = document.getElementById("ageInput");

    const date = dateInput.value;
    const age = ageInput.value;

    // 2. 检查输入是否为空
    if (name === "" || date === "") {
        alert("名前と日付を両方入力してください。");
        return; // 如果有空值，停止程序
    }

    // 3. 生成一个1到4之间的随机数
    const fortune = Math.floor(Math.random() * 4) + 1;

    // 4. 根据输入和随机数生成占卜结果文本
    const resultText = `今日の${name}さん、あなたの運気番号は${fortune}です。`;
    const fortuneMeaning = "1:大吉 2:中吉 3:吉 4:凶";

    // 5. 在HTML中显示结果
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        <h3>占いの結果が出ました！</h3>
        <p>${resultText}</p>
        <p>${fortuneMeaning}</p>
    `;

}
