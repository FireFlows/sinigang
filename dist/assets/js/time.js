function getTime() {
    const now = new Date();

    const laFormatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/New_York',
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
        timeZoneName: 'short'
    });

    const parts = laFormatter.formatToParts(now);

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

    const diffMs = laTime - localTime;
    const diffHours = diffMs / (1000 * 60 * 60);

    let diffText = " ";

    if (Math.abs(diffHours) < 0.1) {
        diffText = "...we share a timezone!";
    } else {
        const rounded = Math.round(diffHours);
        if (rounded > 0) {
            diffText = `...${rounded}h ahead of you`;
        } else {
            diffText = `...${Math.abs(rounded)}h behind you`;
        }
    }

    document.getElementById("local-time-main").textContent = `${timeStr} ${tzName}`;
    document.getElementById("local-time-extra").innerHTML = diffText;
}

setTheme();
getTime();
setInterval(getTime, 1000);