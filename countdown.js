
const targetDate = new Date("March 25, 2026 00:00:00").getTime();
setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;
    const d = Math.floor(distance / (1000*60*60*24));
    const h = Math.floor((distance / (1000*60*60)) % 24);
    const m = Math.floor((distance / (1000*60)) % 60);
    const s = Math.floor((distance / 1000) % 60);
    const el = document.getElementById("countdown");
    if (el) el.innerHTML = `${d}d ${h}h ${m}m ${s}s`;
}, 1000);
