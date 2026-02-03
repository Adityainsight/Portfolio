
// Command Definitions
export const commands = {
    help: {
        description: "Show available commands",
        execute: (term) => {
            term.log("╔════════════════════════════════════════════════════════════════╗", "success");
            term.log("║           ADITYA SHARMA - TERMINAL COMMAND REFERENCE           ║", "success");
            term.log("╚════════════════════════════════════════════════════════════════╝", "success");
            term.log(" ", "info");

            term.log("📋 GENERAL COMMANDS", "warning");
            term.log("  help         → Show this command reference", "info");
            term.log("  about        → Learn about Aditya (alias: whoami)", "info");
            term.log("  skills       → View technical skills & expertise", "info");
            term.log("  projects     → Browse featured projects", "info");
            term.log("  experience   → Work & education history", "info");
            term.log("  contact      → Get in touch (email, LinkedIn, GitHub)", "info");
            term.log("  resume       → Download resume via SCP simulation", "info");
            term.log(" ", "info");

            term.log("🤖 MACHINE LEARNING LAB", "warning");
            term.log("  models       → List all available ML models", "info");
            term.log("  run [model]  → Run interactive ML simulation", "info");
            term.log("  upload       → Upload CSV dataset for training", "info");
            term.log("  train [model] --epochs=N → Train model on your data", "info");
            term.log(" ", "info");

            term.log("⚙️  AUTOMATION & WORKFLOWS", "warning");
            term.log("  n8n          → View intelligent job application workflow", "info");
            term.log("  workflow     → Alias for n8n command", "info");
            term.log(" ", "info");

            term.log("🎮 HIDDEN EASTER EGGS", "warning");
            term.log("  snake        → Play Snake game", "info");
            term.log("  pong         → Play Pong", "info");
            term.log("  tetris       → Play Tetris", "info");
            term.log("  coffee       → Brew virtual coffee ☕", "info");
            term.log("  matrix       → Enter the Matrix", "info");
            term.log("  neofetch     → Display system information", "info");
            term.log("  sudo rm -rf / → [DANGER] Try at your own risk...", "error");
            term.log(" ", "info");

            term.log("🛠️  SYSTEM COMMANDS", "warning");
            term.log("  clear        → Clear terminal screen", "info");
            term.log("  reset        → Reload terminal", "info");
            term.log("  sudo hire aditya → [RESTRICTED] Recruiter access only", "error");
            term.log(" ", "info");

            term.log("💡 TIP: You can click command buttons above or type commands manually!", "success");
        }
    },
    about: {
        description: "Display profile info",
        execute: (term) => {
            term.log("Aditya Sharma", "success");
            term.log("Role: Software Developer | AI/ML Engineer", "info");
            term.log("Education: Mechanical Engineering & CS, Dayalbagh Educational Institute (2027)", "info");
            term.log("Recent: Engineering Intern @ Silogix Nanosystems (Jun-Jul 2025)", "warning");
            term.log("Focus: Building intelligent systems, automation, data science & financial modeling.", "info");
        }
    },
    whoami: {
        description: "Alias for about",
        execute: (term) => commands.about.execute(term)
    },
    contact: {
        description: "Contact info",
        execute: (term) => {
            term.log("Email: asadityasharma100@gmail.com", "success");
            term.log("GitHub: <a href='https://github.com/Adityainsight' target='_blank'>github.com/Adityainsight</a>", "info");
            term.log("LinkedIn: <a href='https://www.linkedin.com/in/adityainsight/' target='_blank'>linkedin.com/in/adityainsight</a>", "info");
        }
    },
    experience: {
        description: "Work & Education History",
        execute: (term) => {
            term.log("EDUCATION", "success");
            term.log("Dayalbagh Educational Institute (Agra)", "info");
            term.log("B.Tech in Mechanical Engineering (Specialization in CS)", "info");
            term.log("Graduating: May 2027", "warning");
            term.log("----------------------------------------", "info");
            term.log("EXPERIENCE", "success");
            term.log(" ", "info");
            term.log("Silogix Nanosystems Pvt. Ltd. | Jun 2025 – Jul 2025", "success");
            term.log("Engineering Intern", "warning");
            term.log("• Developed Python scripts to automate file operations, processing", "info");
            term.log("  over 500+ sensor logs and reducing manual entry time by 12%.", "info");
            term.log("• Analyzed datasets using NumPy and Pandas to visualize sensor", "info");
            term.log("  calibration trends and thermal variability for client reports.", "info");
            term.log(" ", "info");
            term.log("Freelance / Independent Developer | 2023 – Present", "success");
            term.log("• Building AI/ML solutions and automation workflows.", "info");
            term.log("• Developed high-frequency trading bots.", "info");
            term.log("• Created autonomous drone pathing algorithms.", "info");
        }
    },
    skills: {
        description: "List skills",
        execute: (term) => {
            term.log("LANGUAGES:  Python, C++, JavaScript, SQL", "info");
            term.log("ML/AI:      TensorFlow, PyTorch, Scikit-learn, OpenCV, LLMs (Gemini/GPT-4)", "info");
            term.log("DATA:       Pandas, NumPy, Matplotlib, Data Visualization, Sensor Analytics", "info");
            term.log("AUTOMATION: Python Scripting, n8n, Google Workspace APIs, Web Scraping", "info");
            term.log("WEB:        HTML/CSS, React, Terminal Interfaces", "info");
            term.log("TOOLS:      Git, Linux, ROS, IoT Systems", "info");
        }
    },
    projects: {
        description: "Show projects",
        execute: (term) => {
            term.log("1. Intelligent Job Application Agent (n8n, Gemini, GPT-4)", "success");
            term.log("   - Automated workflow to scrape LinkedIn jobs, filter by criteria,", "info");
            term.log("   - calculate match scores, and generate tailored cover letters.", "info");
            term.log(" ", "info");
            term.log("2. Sensor Data Automation System (Python, NumPy, Pandas)", "success");
            term.log("   - Automated processing of 500+ sensor logs at Silogix Nanosystems.", "info");
            term.log("   - Reduced manual entry time by 12% through intelligent scripting.", "info");
            term.log("   - Visualized calibration trends and thermal variability patterns.", "info");
            term.log(" ", "info");
            term.log("3. Algorithmic Trading Bot (Python, ML)", "warning");
            term.log("   - Financial modeling for predictive market analysis.", "info");
            term.log(" ", "info");
            term.log("4. Autonomous Drone Pathing (C++, ROS)", "warning");
            term.log("   - Computer vision based navigation system.", "info");
            term.log(" ", "info");
            term.log("5. Predictive Maintenance System (IoT, TensorFlow)", "warning");
            term.log("   - Industrial IoT solution for machine health monitoring.", "info");
        }
    },
    clear: {
        description: "Clear screen",
        execute: (term) => {
            term.clear();
        }
    },
    models: {
        description: "List ML models",
        execute: (term) => {
            term.log("Available Simulations:", "warning");
            term.log("  linear        - Linear Regression (Gradient Descent)", "info");
            term.log("  kmeans        - K-Means Clustering", "info");
            term.log("  knn           - K-Nearest Neighbors (Voting)", "info");
            term.log("  neural        - Neural Network (Feed Forward)", "info");
            term.log("  logistic      - Logistic Regression (Sigmoid)", "info");
            term.log("  decision      - Decision Tree (Splits)", "info");
            term.log("  random_forest - Random Forest (Ensemble)", "info");
            term.log("  svm           - Support Vector Machine", "info");
            term.log("  naive_bayes   - Naive Bayes Classifier", "info");
            term.log("  pca           - Principal Component Analysis", "info");
        }
    },
    run: {
        description: "Run a simulation",
        execute: (term, args) => {
            if (!args || args.length === 0) {
                term.log("Error: Please specify a model to run. Usage: 'run <model_name>' (e.g., run linear)", "error");
                return;
            }
            // Strip brackets if user included them (e.g., [svm] -> svm)
            const modelName = args[0].replace(/[\[\]]/g, '').toLowerCase();
            term.runSimulation(modelName);
        }
    },
    sudo: {
        description: "Admin commands",
        execute: (term, args) => {
            if (args[0] === 'hire' && args[1] === 'aditya') {
                term.log("ACCESS GRANTED: RECRUITER MODE UNLOCKED", "success");
                term.log("------------------------------------------", "success");
                term.log("Candidate Status:  HIGH PRIORITY", "info");
                term.log("Technical Rating:  9.8/10", "info");
                term.log("Culture Fit:       EXCEPTIONAL", "info");
                term.log("Action Required:   SCHEDULE INTERVIEW IMMEDIATELY", "warning");
                term.log("Run 'contact' now to proceed.", "info");
            } else {
                term.log("Permission denied. Try 'sudo hire aditya'", "error");
            }
        }
    },
    matrix: {
        description: "Enter the matrix",
        execute: (term) => {
            term.log("Knock, knock, Neo...", "success");
            // Could trigger a full screen matrix effect here later
        }
    },
    neofetch: {
        description: "System specs",
        execute: (term) => {
            term.log("ADITYA@BRAIN-OS", "success");
            term.log("---------------", "info");
            term.log("OS:      Neural Network v2.5", "info");
            term.log("Kernel:  Mechanical Engineering Core", "info");
            term.log("Uptime:  21 Years", "info");
            term.log("Shell:   Knowledge-Base 4.0", "info");
            term.log("CPU:     Analytical & Creative Dual-Core", "info");
            term.log("Memory:  Infinite Learning Capacity", "info");
        }
    },
    resume: {
        description: "Download resume via SCP",
        execute: async (term) => {
            term.log("Initiating secure file transfer...", "info");
            await term.delay(500);
            term.log("scp aditya@internship:~/resume.pdf recruiter@company.com:/desktop/", "warning");
            await term.delay(800);
            term.log("Establishing SSH connection... [OK]", "success");
            await term.delay(600);
            term.log("Authenticating with RSA key... [OK]", "success");
            await term.delay(700);

            // Animated transfer
            const sizes = [0, 15, 42, 68, 85, 100];
            for (let progress of sizes) {
                term.updateLastLog(`Transferring: [${'█'.repeat(progress / 5)}${' '.repeat(20 - progress / 5)}] ${progress}%`);
                await term.delay(300);
            }

            term.log("Transfer complete! Resume downloaded.", "success");
            term.log("Opening file...", "info");
            await term.delay(500);

            // Open PDF in new tab
            window.open('Aditya Sharma.pdf', '_blank');

            term.log("✓ Resume opened in new tab!", "success");
        }
    },
    upload: {
        description: "Upload CSV dataset",
        execute: (term, args) => {
            term.log("Opening file picker...", "info");
            const input = document.getElementById('csv-upload');
            input.onchange = (e) => {
                const file = e.target.files[0];
                if (file) {
                    term.log(`File selected: ${file.name} (${(file.size / 1024).toFixed(2)}KB)`, "success");
                    term.log("Dataset loaded into memory. Use 'train <model>' to begin.", "info");
                    term.uploadedDataset = file;
                }
            };
            input.click();
        }
    },
    train: {
        description: "Train model on uploaded data",
        execute: async (term, args) => {
            if (!term.uploadedDataset) {
                term.log("Error: No dataset uploaded. Use 'upload' first.", "error");
                return;
            }

            const modelName = args[0] || 'linear';
            const epochs = parseInt(args.find(a => a.startsWith('--epochs='))?.split('=')[1]) || 50;

            term.log(`Training ${modelName} model on ${term.uploadedDataset.name}...`, "warning");
            term.log(`Hyperparameters: epochs=${epochs}, lr=0.01`, "info");
            await term.delay(800);

            for (let i = 1; i <= Math.min(epochs, 10); i++) {
                term.updateLastLog(`Epoch ${i}/${epochs} - Loss: ${(1 / i).toFixed(4)} - Acc: ${(50 + i * 4).toFixed(1)}%`);
                await term.delay(400);
            }

            term.log("Training complete! Model saved to memory.", "success");
            term.log(`Run 'run ${modelName}' to visualize.`, "info");
        }
    },
    n8n: {
        description: "Show n8n automation workflow",
        execute: (term) => {
            term.log("=== INTELLIGENT JOB APPLICATION AGENT ===", "success");
            term.log("Workflow: Automated LinkedIn Job Scraper + AI Cover Letter Generator", "info");
            term.log(" ", "info");
            term.executeWorkflow();
        }
    },
    workflow: {
        description: "Alias for n8n",
        execute: (term) => commands.n8n.execute(term)
    },
    coffee: {
        description: "Brew some coffee ☕",
        execute: async (term) => {
            term.log("Brewing coffee...", "info");
            await term.delay(500);
            term.log("      (  (", "info");
            term.log("       )  )", "info");
            term.log("    ........", "info");
            term.log("    |      |]", "info");
            term.log("    \\      /", "info");
            term.log("     `----'", "info");
            await term.delay(800);
            term.log("☕ Coffee ready! Productivity +20%", "success");
        }
    },
    snake: {
        description: "Play Snake game",
        execute: (term) => {
            term.log("Launching Snake...", "warning");
            term.log("Use arrow keys. Press ESC to exit.", "info");
            term.launchGame('snake');
        }
    },
    pong: {
        description: "Play Pong",
        execute: (term) => {
            term.log("Launching Pong...", "warning");
            term.launchGame('pong');
        }
    },
    tetris: {
        description: "Play Tetris",
        execute: (term) => {
            term.log("Launching Tetris...", "warning");
            term.launchGame('tetris');
        }
    },
    reset: {
        description: "Reset terminal",
        execute: (term) => {
            location.reload();
        }
    }
};
