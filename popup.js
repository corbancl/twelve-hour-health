// 十二时辰数据
const HOURS = [
  {
    gz: '子', name: '子时', start: 23, end: 1,
    organ: '胆经当令', element: '水',
    timeRange: '23:00 - 01:00',
    summary: '胆汁更新，深度睡眠',
    tips: ['此时应熟睡，胆汁得以更新', '不宜熬夜，否则伤胆气', '子时前入睡，有助于阳气生发'],
    yi:    ['深度睡眠', '侧卧养胆', '子时前入睡', '保持安静'],
    taboo: ['忌熬夜', '忌大声喧哗', '忌剧烈运动', '忌饮酒浓茶'],
    diet: ['睡前可饮少量温水', '忌食辛辣刺激食物', '不宜饮酒、浓茶'],
    exercise: ['此时不宜运动', '以静养为主', '可做简单的放松冥想'],
    emotion: ['保持平静心态', '避免情绪激动', '放下白天的烦恼'],
  },
  {
    gz: '丑', name: '丑时', start: 1, end: 3,
    organ: '肝经当令', element: '木',
    timeRange: '01:00 - 03:00',
    summary: '肝脏排毒，血液回流',
    tips: ['肝脏排毒时间，必须熟睡', '卧则血归于肝，养肝护肝', '此时醒来多为肝火旺盛'],
    yi:    ['熟睡养肝', '平卧休息', '保持情绪平稳', '血归于肝'],
    taboo: ['忌熬夜工作', '忌饮酒', '忌情绪激动', '忌食油腻'],
    diet: ['睡前忌饮酒', '忌食油腻食物', '可适量食用枸杞、菊花茶（睡前）'],
    exercise: ['绝对不宜运动', '深度睡眠是最好的养肝方式'],
    emotion: ['保持情绪平稳', '怒伤肝，睡前勿动怒', '以平和心态入眠'],
  },
  {
    gz: '寅', name: '寅时', start: 3, end: 5,
    organ: '肺经当令', element: '金',
    timeRange: '03:00 - 05:00',
    summary: '肺气宣发，气血分配',
    tips: ['肺将气血输布全身', '此时老人易醒，与肺气有关', '深度睡眠有助于肺气宣发'],
    yi:    ['深度睡眠', '保持温暖', '若醒来做深呼吸', '安静休息'],
    taboo: ['忌受寒', '忌大声说话', '忌剧烈运动', '忌悲忧伤肺'],
    diet: ['不宜进食', '可备温水，醒来时小口饮用'],
    exercise: ['不宜运动', '若醒来可做深呼吸'],
    emotion: ['保持安静', '悲忧伤肺，保持心情舒畅'],
  },
  {
    gz: '卯', name: '卯时', start: 5, end: 7,
    organ: '大肠经当令', element: '金',
    timeRange: '05:00 - 07:00',
    summary: '大肠蠕动，排毒清肠',
    tips: ['起床后喝温水，促进排便', '此时是最佳排便时间', '晨起活动，有助于大肠蠕动'],
    yi:    ['晨起喝温水', '排便清肠', '晨练散步', '呼吸新鲜空气'],
    taboo: ['忌憋便', '忌空腹剧烈运动', '忌受寒', '忌喝冷饮'],
    diet: ['起床后饮一杯温水（200-300ml）', '可食用富含纤维的食物', '忌空腹喝冷饮'],
    exercise: ['适合晨练', '可做太极、散步、慢跑', '呼吸新鲜空气'],
    emotion: ['保持愉快心情迎接新的一天', '感恩晨光，积极向上'],
  },
  {
    gz: '辰', name: '辰时', start: 7, end: 9,
    organ: '胃经当令', element: '土',
    timeRange: '07:00 - 09:00',
    summary: '胃气最旺，消化最强',
    tips: ['一天中消化能力最强的时段', '必须吃早餐，且要吃好', '早餐宜温热，忌生冷'],
    yi:    ['吃丰盛早餐', '温热饮食', '细嚼慢咽', '饭后散步'],
    taboo: ['忌不吃早餐', '忌边走边吃', '忌暴饮暴食', '忌食生冷'],
    diet: ['吃丰盛的早餐', '宜食粥、面食、鸡蛋、牛奶', '忌不吃早餐', '忌食生冷食物'],
    exercise: ['可进行适度运动', '饭后30分钟内不宜剧烈运动', '散步有助消化'],
    emotion: ['保持愉快心情用餐', '细嚼慢咽，专注饮食'],
  },
  {
    gz: '巳', name: '巳时', start: 9, end: 11,
    organ: '脾经当令', element: '土',
    timeRange: '09:00 - 11:00',
    summary: '脾气运化，精力充沛',
    tips: ['脾主运化，此时精力最旺盛', '适合学习、工作、思考', '脾喜燥恶湿，注意防湿'],
    yi:    ['专注工作学习', '适度有氧运动', '健脾饮食', '保持干燥环境'],
    taboo: ['忌思虑过度', '忌久坐不动', '忌食生冷甜腻', '忌处于潮湿环境'],
    diet: ['可适量饮水', '忌食甜腻食物过多', '可食用山药、薏米等健脾食物'],
    exercise: ['适合进行脑力劳动', '可做适度有氧运动', '避免久坐不动'],
    emotion: ['思虑过度伤脾', '保持专注但不过度焦虑', '适当休息放松'],
  },
  {
    gz: '午', name: '午时', start: 11, end: 13,
    organ: '心经当令', element: '火',
    timeRange: '11:00 - 13:00',
    summary: '心气最旺，午休养心',
    tips: ['心火最旺，宜静养', '午饭后小憩15-30分钟', '午睡不宜超过1小时'],
    yi:    ['午餐清淡', '午休小憩', '养心静神', '莲子百合食补'],
    taboo: ['忌剧烈运动', '忌情绪大起大落', '忌午睡过长', '忌暴饮暴食'],
    diet: ['午餐宜清淡', '可食用莲子、百合等养心食物', '忌暴饮暴食', '忌食过于辛辣'],
    exercise: ['午饭后不宜立即运动', '可做轻柔的伸展运动', '午休后可适度活动'],
    emotion: ['保持心情愉快', '喜伤心，避免过度兴奋', '午休有助于心气恢复'],
  },
  {
    gz: '未', name: '未时', start: 13, end: 15,
    organ: '小肠经当令', element: '火',
    timeRange: '13:00 - 15:00',
    summary: '小肠分清泌浊，吸收营养',
    tips: ['小肠吸收午餐营养的关键时段', '多喝水有助于小肠分清泌浊', '适合处理下午工作'],
    yi:    ['多饮温水', '轻度散步', '处理细心工作', '温热茶水'],
    taboo: ['忌饮冷饮', '忌剧烈运动', '忌暴饮暴食', '忌食生冷'],
    diet: ['多饮水，帮助小肠吸收', '忌食生冷食物', '可适量饮用温热茶水'],
    exercise: ['可进行轻度运动', '散步有助于消化吸收', '避免剧烈运动'],
    emotion: ['保持平和心态', '适合处理需要细心的工作'],
  },
  {
    gz: '申', name: '申时', start: 15, end: 17,
    organ: '膀胱经当令', element: '水',
    timeRange: '15:00 - 17:00',
    summary: '膀胱排毒，记忆力强',
    tips: ['此时记忆力和判断力最强', '适合学习、背诵、创作', '多喝水促进膀胱排毒'],
    yi:    ['学习背诵', '体育锻炼', '多饮温水', '处理重要事务'],
    taboo: ['忌憋尿', '忌久坐不动', '忌过度疲劳', '忌饮浓茶咖啡过多'],
    diet: ['多饮水（温水为佳）', '可食用下午茶点', '忌饮浓茶、咖啡过多'],
    exercise: ['适合进行体育锻炼', '此时运动效果最佳', '可做有氧运动、力量训练'],
    emotion: ['精力充沛，保持积极状态', '适合处理重要事务'],
  },
  {
    gz: '酉', name: '酉时', start: 17, end: 19,
    organ: '肾经当令', element: '水',
    timeRange: '17:00 - 19:00',
    summary: '肾气旺盛，补肾养精',
    tips: ['肾经当令，适合补肾养精', '此时运动有助于强肾', '晚餐宜早，七八分饱'],
    yi:    ['早吃晚餐', '补肾食物', '适度运动', '保暖防寒'],
    taboo: ['忌晚餐过晚过饱', '忌过度劳累', '忌受寒', '忌恐惧伤肾'],
    diet: ['晚餐宜早（17-18点为佳）', '可食用黑豆、黑芝麻、核桃等补肾食物', '忌晚餐过晚、过饱'],
    exercise: ['可进行适度运动', '太极、瑜伽、散步均可', '运动后注意保暖'],
    emotion: ['恐伤肾，保持心态平和', '放松心情，迎接傍晚'],
  },
  {
    gz: '戌', name: '戌时', start: 19, end: 21,
    organ: '心包经当令', element: '火',
    timeRange: '19:00 - 21:00',
    summary: '心包护心，放松娱乐',
    tips: ['心包代心受邪，此时宜放松', '适合散步、娱乐、家庭活动', '可做轻柔的保健操'],
    yi:    ['散步放松', '家庭娱乐', '听音乐阅读', '八段锦太极'],
    taboo: ['忌剧烈运动', '忌情绪激动', '忌宵夜', '忌长时间用眼'],
    diet: ['不宜再进食', '可饮温水或淡茶', '忌宵夜'],
    exercise: ['适合散步、轻柔运动', '可做八段锦、太极', '避免剧烈运动'],
    emotion: ['放松心情，享受家庭时光', '可听音乐、阅读', '避免情绪激动'],
  },
  {
    gz: '亥', name: '亥时', start: 21, end: 23,
    organ: '三焦经当令', element: '火',
    timeRange: '21:00 - 23:00',
    summary: '三焦通百脉，准备入眠',
    tips: ['三焦主持诸气，通调水道', '此时应准备入睡', '亥时入睡，百脉得养'],
    yi:    ['泡脚助眠', '冥想放松', '温牛奶助眠', '准备入睡'],
    taboo: ['忌熬夜', '忌剧烈运动', '忌长时间用手机', '忌饮浓茶咖啡'],
    diet: ['忌进食', '可饮少量温水或温牛奶', '忌饮浓茶、咖啡'],
    exercise: ['不宜运动', '可做放松冥想、深呼吸', '泡脚有助于入眠（15-20分钟）'],
    emotion: ['放下一天的烦恼', '保持平静心态', '感恩今日，期待明天'],
  }
];

// 获取当前时辰
function getCurrentHourIndex() {
  const h = new Date().getHours();
  if (h >= 23 || h < 1) return 0;   // 子
  if (h >= 1 && h < 3)  return 1;   // 丑
  if (h >= 3 && h < 5)  return 2;   // 寅
  if (h >= 5 && h < 7)  return 3;   // 卯
  if (h >= 7 && h < 9)  return 4;   // 辰
  if (h >= 9 && h < 11) return 5;   // 巳
  if (h >= 11 && h < 13) return 6;  // 午
  if (h >= 13 && h < 15) return 7;  // 未
  if (h >= 15 && h < 17) return 8;  // 申
  if (h >= 17 && h < 19) return 9;  // 酉
  if (h >= 19 && h < 21) return 10; // 戌
  if (h >= 21 && h < 23) return 11; // 亥
  return 0;
}

// 格式化时间
function formatTime(date) {
  const h = String(date.getHours()).padStart(2, '0');
  const m = String(date.getMinutes()).padStart(2, '0');
  const s = String(date.getSeconds()).padStart(2, '0');
  return `${h}:${m}:${s}`;
}

// 渲染当前时辰卡片
function renderCurrentCard() {
  const idx = getCurrentHourIndex();
  const cur = HOURS[idx];
  document.getElementById('curGanzhi').textContent = cur.gz;
  document.getElementById('curName').textContent = cur.name;
  document.getElementById('curOrgan').textContent = cur.organ;
  document.getElementById('curTimeRange').textContent = cur.timeRange;
  document.getElementById('curYiJi').innerHTML = `
    <div class="yi-block">
      <div class="yi-ji-title yi-title">✅ 宜</div>
      ${cur.yi.map(t => `<div class="yi-ji-item yi-item">◆ ${t}</div>`).join('')}
    </div>
    <div class="yi-block">
      <div class="yi-ji-title ji-title">🚫 忌</div>
      ${cur.taboo.map(t => `<div class="yi-ji-item ji-item">◆ ${t}</div>`).join('')}
    </div>
  `;
}

// 渲染对照表
function renderTable() {
  const curIdx = getCurrentHourIndex();
  const container = document.getElementById('tableView');
  container.innerHTML = HOURS.map((h, i) => `
    <div class="hour-item ${i === curIdx ? 'active-hour' : ''}" data-index="${i}">
      <div class="hour-gz">${h.gz}</div>
      <div class="hour-body">
        <div class="hour-name-row">
          <span class="hour-name">${h.name}</span>
          <span class="hour-time">${h.timeRange}</span>
          ${i === curIdx ? '<span class="now-badge">当前</span>' : ''}
        </div>
        <div class="hour-organ">${h.organ} · ${h.summary}</div>
        <div class="hour-tip">${h.tips[0]}</div>
      </div>
    </div>
  `).join('');

  // 点击跳转详情
  container.querySelectorAll('.hour-item').forEach(el => {
    el.addEventListener('click', () => {
      const idx = parseInt(el.dataset.index);
      showDetail(idx);
    });
  });
}

// 渲染详细建议
function showDetail(idx) {
  const h = HOURS[idx];
  const panel = document.getElementById('detailPanel');
  panel.innerHTML = `
    <div class="back-btn" id="backBtn">← 返回对照表</div>
    <div class="detail-header">
      <div class="detail-gz">${h.gz}</div>
      <div>
        <div style="font-size:15px;font-weight:700;">${h.name} · ${h.timeRange}</div>
        <div style="font-size:11px;color:rgba(255,255,255,0.5);margin-top:2px;">${h.organ} · ${h.summary}</div>
      </div>
    </div>
    <div class="detail-section">
      <h3>🌿 养生要点</h3>
      <ul>${h.tips.map(t => `<li>${t}</li>`).join('')}</ul>
    </div>
    <div class="detail-section">
      <h3>✅ 宜 / 🚫 忌</h3>
      <ul>
        ${h.yi.map(t => `<li style="color:rgba(0,230,118,0.85);">${t}</li>`).join('')}
        ${h.taboo.map(t => `<li style="color:rgba(255,82,82,0.85);">${t}</li>`).join('')}
      </ul>
    </div>
    <div class="detail-section">
      <h3>🍚 饮食建议</h3>
      <ul>${h.diet.map(t => `<li>${t}</li>`).join('')}</ul>
    </div>
    <div class="detail-section">
      <h3>🏃 运动建议</h3>
      <ul>${h.exercise.map(t => `<li>${t}</li>`).join('')}</ul>
    </div>
    <div class="detail-section">
      <h3>😌 情志调养</h3>
      <ul>${h.emotion.map(t => `<li>${t}</li>`).join('')}</ul>
    </div>
  `;
  panel.querySelector('#backBtn').addEventListener('click', () => switchTab('table'));
  switchTab('detail');
}

// 切换标签
function switchTab(tab) {
  const tableView = document.getElementById('tableView');
  const detailPanel = document.getElementById('detailPanel');
  const tabTable = document.getElementById('tabTable');
  const tabDetail = document.getElementById('tabDetail');
  if (tab === 'table') {
    tableView.style.display = 'block';
    detailPanel.style.display = 'none';
    tabTable.classList.add('active');
    tabDetail.classList.remove('active');
  } else {
    tableView.style.display = 'none';
    detailPanel.style.display = 'block';
    tabTable.classList.remove('active');
    tabDetail.classList.add('active');
    // 滚动到顶部
    detailPanel.scrollTop = 0;
  }
}

// 更新时间
function updateTime() {
  const now = new Date();
  document.getElementById('currentTime').textContent = `${now.getFullYear()}年${now.getMonth()+1}月${now.getDate()}日 ${formatTime(now)}`;
}

// 通知开关
function initNotifyToggle() {
  const toggle = document.getElementById('notifyToggle');
  if (!toggle) return;

  // 读取存储状态
  chrome.storage.local.get('notifyEnabled', (res) => {
    const enabled = res.notifyEnabled !== false;
    if (enabled) toggle.classList.add('on');
    else toggle.classList.remove('on');
  });

  toggle.addEventListener('click', () => {
    const isOn = toggle.classList.toggle('on');
    chrome.storage.local.set({ notifyEnabled: isOn });
    // 安全发送消息（background 可能未激活）
    try {
      chrome.runtime.sendMessage({ type: 'SET_NOTIFY', enabled: isOn }, () => {
        // 忽略 lastError（background 未激活时正常）
        void chrome.runtime.lastError;
      });
    } catch (e) { /* ignore */ }
  });
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
  renderCurrentCard();
  renderTable();
  updateTime();
  initNotifyToggle();
  setInterval(updateTime, 1000);

  document.getElementById('tabTable').addEventListener('click', () => switchTab('table'));
  document.getElementById('tabDetail').addEventListener('click', () => {
    if (document.getElementById('detailPanel').innerHTML === '') {
      showDetail(getCurrentHourIndex());
    }
    switchTab('detail');
  });
});
