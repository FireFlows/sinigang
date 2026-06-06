function getTime() {
    const now = new Date();

    const etFormatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/New_York',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
        timeZoneName: 'short'
    });

    const parts = etFormatter.formatToParts(now);

    let timeStr = "";
    let tzName = "";

    for (const p of parts) {
        if (p.type !== "timeZoneName") {
            timeStr += p.value;
        } else {
            tzName = p.value;
        }
    }

    const laTime = new Date(now.toLocaleString("en-US", { timeZone: "America/New_York" }));
    const localTime = new Date();

    document.getElementById('local-time-main').textContent = `${timeStr} ${tzName}`;
}

getTime();
setInterval(getTime, 1000);
///https://squirrelz.xyz/ <= check back on this!