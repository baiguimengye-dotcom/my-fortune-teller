function startFortuneTelling() {
    // 1. 从HTML中获取用户输入的值
    const dateInput = document.getElementById("dateInput");
    const nameInput = document.getElementById("nameInput");

    const date = dateInput.value;
    const name = nameInput.value;

    // 2. 检查输入是否为空
    if (name === "" || date === "") {
        alert("名前と日付を両方入力してください。");
        return;
    }

    // 3. 使用日期生成一个伪随机数
    // 我们将日期作为种子，然后对一个大质数取余来得到一个固定的伪随机数。
    // 这比Math.random()更适合“每日占卜”。
    const seed = parseInt(date, 10);
    const fortune = (seed % 4) + 1; // 对4取余，结果为0, 1, 2, 3，然后加1得到1到4的数字

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
