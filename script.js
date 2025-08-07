document.getElementById("calculate").addEventListener("click", function () {
  const maxMP = Number(document.getElementById("max-mp").value);
  const mpPercent = Number(document.getElementById("mp-threshold").value);
  const mgLevel = Number(document.getElementById("magic-guard-level").value);
  const shieldLevel = Number(document.getElementById("magic-shield-level").value);

  if (!maxMP || !mpPercent || mgLevel === null || shieldLevel === null) {
    document.getElementById("result").innerText = "請完整輸入所有欄位";
    return;
  }

  const autoMP = Math.floor(maxMP * mpPercent / 100);
  const magicGuardRate = 0.2 + 0.05 * mgLevel; // 20% + 每等5%
  const shieldCost = (shieldLevel === 0) ? 0 : [8,8,8,8,8,10,10,10,10,10,13,13,13,13,13,16,16,16,16,16][shieldLevel - 1];

  const message = `
🔢 自動補 MP 閾值：${autoMP} MP
🛡️ 魔心防禦比率：${Math.round(magicGuardRate * 100)}%
💧 魔力之盾耗 MP：${shieldCost} 每次施放
🔍 建議：請根據你的補品選擇，選擇 CP 值最高的搭配（如藍水、紅豆刨冰、礦泉水...）
  `;

  document.getElementById("result").innerText = message;
});
