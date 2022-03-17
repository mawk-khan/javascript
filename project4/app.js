class DigitalClock {
    constructor(element) {
        this.element = element;
    }

    start () {
        this.update();
        setInterval( () => {
            this.update();
        }, 500);
    }

    update() {
        const parts = this.getTimeParts();
        const minuteFormatted = parts.minute.toString().padStart(2, '0');
        const timeFormattd = `${parts.hours}: ${minuteFormatted}`;
        const amPm = parts.isAm ? 'AM' : 'PM';

        this.element.querySelector('.clock-time').textContent = timeFormattd;
        this.element.querySelector('.clock-ampm').textContent = amPm;
    }

    getTimeParts () {
        const now = new Date();

        return {
            hours: now.getHours() % 12 || 12,
            minute: now.getMinutes(),
            isAm: now.getHours() < 12
        };
    }

    
}

const clockElement = document.querySelector('.clock');
const clockObject = new DigitalClock(clockElement);

clockObject.start();