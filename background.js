// 十二时辰切换时间点（小时）
const HOUR_CHANGES = [
  { hour: 23, name: '子时', organ: '胆经当令', tip: '胆汁更新时间，请尽快入睡' },
  { hour: 1,  name: '丑时', organ: '肝经当令', tip: '肝脏排毒时间，请保持熟睡' },
  { hour: 3,  name: '寅时', organ: '肺经当令', tip: '肺气宣发，气血输布全身' },
  { hour: 5,  name: '卯时', organ: '大肠经当令', tip: '晨起喝温水，促进排便排毒' },
  { hour: 7,  name: '辰时', organ: '胃经当令', tip: '胃气最旺，记得吃好早餐！' },
  { hour: 9,  name: '巳时', organ: '脾经当令', tip: '脾气运化，精力充沛，适合工作' },
  { hour: 11, name: '午时', organ: '心经当令', tip: '心气最旺，午饭后小憩养心' },
  { hour: 13, name: '未时', organ: '小肠经当令', tip: '小肠吸收营养，多喝温水' },
  { hour: 15, name: '申时', organ: '膀胱经当令', tip: '记忆力最强，适合学习运动' },
  { hour: 17, name: '酉时', organ: '肾经当令', tip: '肾气旺盛，早吃晚餐补肾养精' },
  { hour: 19, name: '戌时', organ: '心包经当令', tip: '心包护心，放松娱乐享受家庭' },
  { hour: 21, name: '亥时', organ: '三焦经当令', tip: '三焦通百脉，准备入眠' },
];

// 检查是否需要发送通知
function checkAndNotify() {
  chrome.storage.local.get('notifyEnabled', (res) => {
    const enabled = res.notifyEnabled !== false;
    if (!enabled) return;

    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();

    // 只在整点时发送（分钟为0）
    if (m !== 0) return;

    const match = HOUR_CHANGES.find(hc => hc.hour === h);
    if (!match) return;

    chrome.notifications.create(`hour-${h}-${Date.now()}`, {
      type: 'basic',
      iconUrl: 'icons/icon128.png',
      title: `☯ ${match.name} · ${match.organ}`,
      message: match.tip,
      priority: 1
    });
  });
}

// 监听来自 popup 的消息
chrome.runtime.onMessage.addListener((msg) => {
  if (msg.type === 'SET_NOTIFY') {
    chrome.storage.local.set({ notifyEnabled: msg.enabled });
  }
});

// 每分钟检查一次
chrome.alarms.create('checkHour', { periodInMinutes: 1 });
chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'checkHour') checkAndNotify();
});

// 安装时立即检查一次
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ notifyEnabled: true });
});
