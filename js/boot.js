
export class BootSequence {
    constructor() {
        this.log = document.getElementById('boot-log');
        this.screen = document.getElementById('boot-sequence');
        this.terminal = document.getElementById('terminal-interface');
        this.sourceImg = document.getElementById('source-image');
        this.asciiDiv = document.getElementById('ascii-portrait');
    }

    async start() {
        await this.typeLine("System detected: Aditya Sharma | AI/ML Engineer | Software Developer", 50);
        await this.typeLine("Initializing neural interfaces... [OK]", 200);
        await this.typeLine("Mounting cognitive modules... [OK]", 150);
        await this.typeLine("Loading project intelligence... [OK]", 300);
        await this.typeLine("Authenticating operator... ", 500);
        await this.typeLine("[SUCCESS]", 0, "color:#33ff00; font-weight:bold;");

        await new Promise(r => setTimeout(r, 800));

        // Transition
        this.screen.style.opacity = 0;
        setTimeout(() => {
            this.screen.style.display = 'none';
            this.terminal.classList.remove('hidden');
            this.generateASCII();
        }, 500);
    }

    typeLine(text, delay, style = "") {
        return new Promise(resolve => {
            setTimeout(() => {
                const div = document.createElement('div');
                div.innerHTML = text;
                if (style) div.style.cssText = style;
                this.log.appendChild(div);
                resolve();
            }, delay);
        });
    }

    generateASCII() {
        // Enhanced ASCII converter with better character mapping
        if (!this.sourceImg.complete) {
            this.sourceImg.onload = () => this.processImage();
        } else {
            this.processImage();
        }
    }

    processImage() {
        const w = 150; // Increased width for higher resolution
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        // Helper to maintain aspect ratio
        const ratio = this.sourceImg.height / this.sourceImg.width;
        const h = Math.floor(w * ratio * 0.45); // Adjusted for character aspect ratio

        canvas.width = w;
        canvas.height = h;
        ctx.drawImage(this.sourceImg, 0, 0, w, h);

        const data = ctx.getImageData(0, 0, w, h).data;

        // Enhanced character gradient for better detail
        const chars = " .'`^\",:;Il!i><~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$";

        let asciiLines = [];

        for (let y = 0; y < h; y++) {
            let line = "";
            for (let x = 0; x < w; x++) {
                const offset = (y * w + x) * 4;
                const r = data[offset];
                const g = data[offset + 1];
                const b = data[offset + 2];

                // Weighted grayscale for better perception
                const brightness = (0.299 * r + 0.587 * g + 0.114 * b);

                const charIndex = Math.floor((brightness / 255) * (chars.length - 1));
                line += chars[charIndex];
            }
            asciiLines.push(line);
        }

        // Animate line-by-line with glitch effect
        this.animateASCII(asciiLines);
    }

    async animateASCII(lines) {
        this.asciiDiv.textContent = '';

        // Glitch boot effect - load lines with random delays
        for (let i = 0; i < lines.length; i++) {
            // Random glitch characters initially
            if (Math.random() > 0.7) {
                const glitchChars = '█▓▒░@#$%&*';
                let glitchLine = '';
                for (let j = 0; j < lines[i].length; j++) {
                    glitchLine += glitchChars[Math.floor(Math.random() * glitchChars.length)];
                }
                this.asciiDiv.textContent += glitchLine + '\n';

                // Replace with actual line after brief delay
                await new Promise(r => setTimeout(r, 20));
                const currentText = this.asciiDiv.textContent.split('\n');
                currentText[i] = lines[i];
                this.asciiDiv.textContent = currentText.join('\n');
            } else {
                this.asciiDiv.textContent += lines[i] + '\n';
            }

            // Variable speed for dramatic effect
            const delay = i < 10 ? 30 : (i > lines.length - 10 ? 30 : 15);
            await new Promise(r => setTimeout(r, delay));
        }

        // Final glitch flash
        await this.glitchFlash();
    }

    async glitchFlash() {
        const original = this.asciiDiv.textContent;

        for (let i = 0; i < 3; i++) {
            // Glitch
            this.asciiDiv.style.textShadow = '2px 2px 0px #ff00ff, -2px -2px 0px #00ffff';
            this.asciiDiv.style.transform = 'translate(2px, 2px)';
            await new Promise(r => setTimeout(r, 50));

            // Normal
            this.asciiDiv.style.textShadow = '';
            this.asciiDiv.style.transform = '';
            await new Promise(r => setTimeout(r, 100));
        }
    }
}
