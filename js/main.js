
import { commands } from './commands.js';
import { SimulationManager } from './ml_viz.js';
import { BootSequence } from './boot.js';
import { SnakeGame } from './games.js';

class Terminal {
    constructor() {
        this.outputDiv = document.getElementById('output-area');
        this.input = document.getElementById('command-input');
        this.cursor = document.querySelector('.cursor-block');
        this.simManager = new SimulationManager(this);

        this.history = [];
        this.historyIndex = -1;
        this.uploadedDataset = null;

        // Boot
        const boot = new BootSequence();
        boot.start().then(() => {
            this.init();
        });
    }

    init() {
        // Focus management
        document.addEventListener('keydown', () => this.input.focus());

        // Event Listeners
        this.input.addEventListener('keydown', (e) => this.handleInput(e));

        // Command button handlers
        document.querySelectorAll('.cmd-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const cmd = btn.getAttribute('data-cmd');
                this.input.value = cmd;
                this.processCommand(cmd);
            });
        });

        // Stats loop
        setInterval(() => this.updateStats(), 1000);

        // Kernel panic easter egg
        this.setupKernelPanic();
    }

    setupKernelPanic() {
        // Listen for dangerous command
        const originalProcess = this.processCommand.bind(this);
        this.processCommand = (cmd) => {
            if (cmd.trim() === 'sudo rm -rf /' || cmd.trim() === 'rm -rf /') {
                this.triggerKernelPanic();
                return;
            }
            originalProcess(cmd);
        };
    }

    async triggerKernelPanic() {
        this.log("⚠️  WARNING: CRITICAL SYSTEM OPERATION DETECTED", "error");
        await this.delay(500);
        this.log("Kernel panic - not syncing: VFS: Unable to mount root fs", "error");
        await this.delay(300);
        this.log("CPU: 0 PID: 1 Comm: swapper/0 Not tainted 5.15.0-aditya #1", "error");
        await this.delay(200);
        this.log("Hardware name: BRAIN-OS/Neural-Core, BIOS 2.5 01/01/2003", "error");
        await this.delay(400);
        this.log("Call Trace:", "error");
        await this.delay(200);
        this.log("  dump_stack+0x6d/0x8b", "error");
        this.log("  panic+0x101/0x2e3", "error");
        this.log("  mount_block_root+0x2a1/0x2b0", "error");
        await this.delay(800);
        this.log("---[ end Kernel panic - not syncing ]---", "error");
        await this.delay(1500);
        this.log(" ", "info");
        this.log("Just kidding! 😄", "success");
        await this.delay(500);
        this.log("Panic resolved. System integrity restored.", "success");
        this.log("(Nice try though. You can't break me that easily!)", "info");
    }

    updateStats() {
        // Fake stats
        document.getElementById('clock').innerText = new Date().toLocaleTimeString();
        document.getElementById('cpu-stat').innerText = Math.floor(Math.random() * 30 + 5) + "%";

        // Random memory flux
        const mem = (Math.random() * 0.5 + 4).toFixed(1);
        document.getElementById('ram-stat').innerText = `${mem}/16GB`;
    }

    handleInput(e) {
        if (e.key === 'Enter') {
            const cmd = this.input.value.trim();
            this.input.value = '';

            if (cmd) {
                this.history.push(cmd);
                this.historyIndex = this.history.length;
                this.processCommand(cmd);
            }
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (this.historyIndex > 0) {
                this.historyIndex--;
                this.input.value = this.history[this.historyIndex];
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (this.historyIndex < this.history.length - 1) {
                this.historyIndex++;
                this.input.value = this.history[this.historyIndex];
            } else {
                this.historyIndex = this.history.length;
                this.input.value = '';
            }
        }
    }

    processCommand(inputString) {
        // Echo command
        const promptSpan = document.createElement('span');
        promptSpan.className = 'prompt';
        promptSpan.textContent = 'aditya@internship:~$ ';

        const cmdSpan = document.createElement('span');
        cmdSpan.className = 'log-cmd';
        cmdSpan.textContent = inputString;

        const lineDiv = document.createElement('div');
        lineDiv.appendChild(promptSpan);
        lineDiv.appendChild(cmdSpan);
        this.outputDiv.appendChild(lineDiv);


        // Parse args
        const parts = inputString.match(/(?:[^\s"]+|"[^"]*")+/g) || [];
        const cmdName = parts[0];
        const args = parts.slice(1).map(arg => arg.replace(/"/g, '')); // Strip quotes

        if (commands[cmdName]) {
            try {
                commands[cmdName].execute(this, args);
            } catch (err) {
                this.log(`Error executing '${cmdName}': ${err.message}`, 'error');
            }
        } else {
            this.log(`Command not found: ${cmdName}. Type 'help' for available commands.`, 'error');
        }

        this.scrollToBottom();
    }

    log(text, type = 'info') {
        const div = document.createElement('div');
        div.className = `log-entry log-${type}`;
        div.innerHTML = text;
        this.outputDiv.appendChild(div);
        this.scrollToBottom();
    }

    updateLastLog(text) {
        const lastLog = this.outputDiv.lastElementChild;
        if (lastLog && lastLog.classList.contains('log-entry')) {
            lastLog.innerHTML = text;
        } else {
            this.log(text, 'info');
        }
    }

    clear() {
        this.outputDiv.innerHTML = '';
    }

    scrollToBottom() {
        setTimeout(() => {
            const container = document.getElementById('main-container');
            container.scrollTop = container.scrollHeight;
        }, 10);
    }

    runSimulation(modelName) {
        this.simManager.start(modelName);
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // n8n Workflow Execution with Animated Explanation
    async executeWorkflow() {
        this.log("┌─────────────────────────────────────────────────────────┐", "success");
        this.log("│  STEP 1: Schedule Trigger (Every Hour)                 │", "success");
        this.log("└─────────────────────────────────────────────────────────┘", "success");
        await this.delay(600);
        this.log("[TRIGGER] Workflow initiated at " + new Date().toLocaleTimeString(), "info");
        await this.delay(400);

        this.log(" ", "info");
        this.log("┌─────────────────────────────────────────────────────────┐", "success");
        this.log("│  STEP 2: Fetch Job Criteria from Google Sheets         │", "success");
        this.log("└─────────────────────────────────────────────────────────┘", "success");
        await this.delay(600);
        this.log("[SHEETS] Reading filter criteria...", "info");
        await this.delay(500);
        this.log("  ✓ Keywords: Data Analyst, ML Engineer, Software Developer", "success");
        this.log("  ✓ Location: India", "success");
        this.log("  ✓ Experience: Internship, Entry Level", "success");
        this.log("  ✓ Remote: On-site", "success");
        await this.delay(700);

        this.log(" ", "info");
        this.log("┌─────────────────────────────────────────────────────────┐", "success");
        this.log("│  STEP 3: Build LinkedIn Search URL                     │", "success");
        this.log("└─────────────────────────────────────────────────────────┘", "success");
        await this.delay(500);
        this.log("[CODE] Constructing dynamic search query...", "warning");
        await this.delay(600);
        this.log("  URL: https://linkedin.com/jobs/search/?keywords=...", "info");
        await this.delay(400);

        this.log(" ", "info");
        this.log("┌─────────────────────────────────────────────────────────┐", "success");
        this.log("│  STEP 4: Scrape LinkedIn Job Listings                  │", "success");
        this.log("└─────────────────────────────────────────────────────────┘", "success");
        await this.delay(600);
        this.log("[HTTP] Fetching job listings...", "info");
        await this.delay(800);
        this.log("[HTML] Parsing job cards...", "info");
        await this.delay(600);
        this.log("  ✓ Found 25 job postings", "success");
        await this.delay(500);

        this.log(" ", "info");
        this.log("┌─────────────────────────────────────────────────────────┐", "success");
        this.log("│  STEP 5: Extract Job Details (Loop)                    │", "success");
        this.log("└─────────────────────────────────────────────────────────┘", "success");
        await this.delay(500);

        for (let i = 1; i <= 3; i++) {
            this.log(`[JOB ${i}] Extracting: Title, Company, Location, Description...`, "info");
            await this.delay(400);
        }
        this.log("  ... (22 more jobs)", "info");
        await this.delay(600);

        this.log(" ", "info");
        this.log("┌─────────────────────────────────────────────────────────┐", "success");
        this.log("│  STEP 6: AI Match Score & Cover Letter Generation      │", "success");
        this.log("└─────────────────────────────────────────────────────────┘", "success");
        await this.delay(600);
        this.log("[AI] Loading resume from Google Docs...", "warning");
        await this.delay(700);
        this.log("[GEMINI] Analyzing job description vs resume...", "warning");
        await this.delay(900);
        this.log("  ✓ Match Score: 85/100", "success");
        await this.delay(500);
        this.log("[GPT-4] Generating personalized cover letter...", "warning");
        await this.delay(1000);
        this.log("  ✓ Cover letter generated (100 words, humanized)", "success");
        await this.delay(600);

        this.log(" ", "info");
        this.log("┌─────────────────────────────────────────────────────────┐", "success");
        this.log("│  STEP 7: Create Tailored Resume (Google Docs)          │", "success");
        this.log("└─────────────────────────────────────────────────────────┘", "success");
        await this.delay(600);
        this.log("[DOCS] Creating new document: CV-Aditya-CompanyName", "info");
        await this.delay(700);
        this.log("[AI] Customizing resume for job requirements...", "warning");
        await this.delay(900);
        this.log("  ✓ Resume tailored and saved", "success");
        await this.delay(500);

        this.log(" ", "info");
        this.log("┌─────────────────────────────────────────────────────────┐", "success");
        this.log("│  STEP 8: Save Results to Google Sheets                 │", "success");
        this.log("└─────────────────────────────────────────────────────────┘", "success");
        await this.delay(600);
        this.log("[SHEETS] Appending row to 'result' sheet...", "info");
        await this.delay(500);
        this.log("  Columns: Title | Company | Location | Score | Cover Letter | Link", "info");
        await this.delay(600);
        this.log("  ✓ Data saved successfully", "success");
        await this.delay(700);

        this.log(" ", "info");
        this.log("═══════════════════════════════════════════════════════════", "success");
        this.log("  WORKFLOW COMPLETE! 🎉", "success");
        this.log("  25 jobs processed | 18 high matches | 7 applications ready", "success");
        this.log("═══════════════════════════════════════════════════════════", "success");
        this.log(" ", "info");
        this.log("💡 This automation saves ~4 hours per day of manual work!", "warning");
    }

    // Game Launcher
    launchGame(gameName) {
        if (gameName === 'snake') {
            const game = new SnakeGame(this);
            game.start();
        } else {
            this.log(`Game '${gameName}' is under construction. Coming soon!`, "warning");
            this.log("(Only Snake is available right now 🐍)", "info");
        }
    }
}

// Start
window.terminal = new Terminal();
