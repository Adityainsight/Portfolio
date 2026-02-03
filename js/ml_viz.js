
// Simulation Logic
export class SimulationManager {
    constructor(term) {
        this.term = term;
    }

    async start(modelName) {
        // Simulate fetching from GitHub specific to user's repo
        await this.simulateNetworkDelay(modelName);

        switch (modelName) {
            case 'linear':
                await this.explainLinear();
                this.runLinearRegression();
                break;
            case 'kmeans':
                await this.explainKMeans();
                this.runKMeans();
                break;
            case 'knn':
                await this.explainKNN();
                this.runKNN();
                break;
            case 'neural':
                await this.explainNeural();
                this.runNeuralNet();
                break;
            case 'logistic':
                await this.explainLogistic();
                this.runLogistic();
                break;
            case 'pca':
                await this.explainPCA();
                this.runPCA();
                break;
            case 'svm':
                await this.explainSVM();
                this.runSVM();
                break;
            case 'random_forest':
                await this.explainRandomForest();
                this.runRandomForest();
                break;
            case 'naive_bayes':
                await this.explainNaiveBayes();
                this.runNaiveBayes();
                break;
            case 'decision':
                await this.explainDecisionTree();
                this.runRandomForest(); // Re-use RF viz for single tree for now
                break;
            default:
                this.term.log(`Error: Model '${modelName}' not found. Type 'models' for list.`, "error");
        }
    }

    // Explanation methods
    async explainLinear() {
        this.term.log("═══ LINEAR REGRESSION EXPLAINED ═══", "success");
        this.term.log("Goal: Find the best-fit line through data points", "info");
        await this.term.delay(500);
        this.term.log("Method: Gradient Descent - iteratively adjust slope & intercept", "info");
        await this.term.delay(500);
        this.term.log("Use case: Predicting continuous values (e.g., house prices, stock trends)", "warning");
        await this.term.delay(700);
        this.term.log("Starting visualization...", "success");
        this.term.log(" ", "info");
    }

    async explainKMeans() {
        this.term.log("═══ K-MEANS CLUSTERING EXPLAINED ═══", "success");
        this.term.log("Goal: Group similar data points into K clusters", "info");
        await this.term.delay(500);
        this.term.log("Method: Assign points to nearest centroid → Move centroid → Repeat", "info");
        await this.term.delay(500);
        this.term.log("Use case: Customer segmentation, image compression, anomaly detection", "warning");
        await this.term.delay(700);
        this.term.log("Starting visualization...", "success");
        this.term.log(" ", "info");
    }

    async explainKNN() {
        this.term.log("═══ K-NEAREST NEIGHBORS EXPLAINED ═══", "success");
        this.term.log("Goal: Classify a point based on its K nearest neighbors", "info");
        await this.term.delay(500);
        this.term.log("Method: Find K closest points → Majority vote determines class", "info");
        await this.term.delay(500);
        this.term.log("Use case: Recommendation systems, pattern recognition", "warning");
        await this.term.delay(700);
        this.term.log("Starting visualization... (Hover to classify)", "success");
        this.term.log(" ", "info");
    }

    async explainNeural() {
        this.term.log("═══ NEURAL NETWORK EXPLAINED ═══", "success");
        this.term.log("Goal: Learn complex patterns through layered transformations", "info");
        await this.term.delay(500);
        this.term.log("Method: Forward pass → Calculate error → Backpropagate → Update weights", "info");
        await this.term.delay(500);
        this.term.log("Use case: Image recognition, NLP, game AI, autonomous systems", "warning");
        await this.term.delay(700);
        this.term.log("Starting visualization...", "success");
        this.term.log(" ", "info");
    }

    async explainLogistic() {
        this.term.log("═══ LOGISTIC REGRESSION EXPLAINED ═══", "success");
        this.term.log("Goal: Binary classification using sigmoid function", "info");
        await this.term.delay(500);
        this.term.log("Method: Map linear combination to 0-1 probability → Classify based on threshold", "info");
        await this.term.delay(500);
        this.term.log("Use case: Spam detection, disease diagnosis, credit scoring", "warning");
        await this.term.delay(700);
        this.term.log("Starting visualization...", "success");
        this.term.log(" ", "info");
    }

    async explainPCA() {
        this.term.log("═══ PCA (DIMENSIONALITY REDUCTION) EXPLAINED ═══", "success");
        this.term.log("Goal: Reduce features while preserving maximum variance", "info");
        await this.term.delay(500);
        this.term.log("Method: Find principal components (directions of max variance)", "info");
        await this.term.delay(500);
        this.term.log("Use case: Data compression, visualization, noise reduction", "warning");
        await this.term.delay(700);
        this.term.log("Starting visualization...", "success");
        this.term.log(" ", "info");
    }

    async explainSVM() {
        this.term.log("═══ SUPPORT VECTOR MACHINE EXPLAINED ═══", "success");
        this.term.log("Goal: Find optimal hyperplane that maximizes margin between classes", "info");
        await this.term.delay(500);
        this.term.log("Method: Identify support vectors → Maximize distance to decision boundary", "info");
        await this.term.delay(500);
        this.term.log("Use case: Text classification, face detection, bioinformatics", "warning");
        await this.term.delay(700);
        this.term.log("Starting visualization...", "success");
        this.term.log(" ", "info");
    }

    async explainRandomForest() {
        this.term.log("═══ RANDOM FOREST EXPLAINED ═══", "success");
        this.term.log("Goal: Ensemble of decision trees voting for final prediction", "info");
        await this.term.delay(500);
        this.term.log("Method: Train multiple trees on random subsets → Aggregate predictions", "info");
        await this.term.delay(500);
        this.term.log("Use case: Feature importance, robust classification, regression", "warning");
        await this.term.delay(700);
        this.term.log("Starting visualization...", "success");
        this.term.log(" ", "info");
    }

    async explainNaiveBayes() {
        this.term.log("═══ NAIVE BAYES EXPLAINED ═══", "success");
        this.term.log("Goal: Probabilistic classification using Bayes' theorem", "info");
        await this.term.delay(500);
        this.term.log("Method: P(Class|Features) ∝ P(Features|Class) × P(Class)", "info");
        await this.term.delay(500);
        this.term.log("Use case: Spam filtering, sentiment analysis, document classification", "warning");
        await this.term.delay(700);
        this.term.log("Starting visualization... (Hover to see probabilities)", "success");
        this.term.log(" ", "info");
    }

    async explainDecisionTree() {
        this.term.log("═══ DECISION TREE EXPLAINED ═══", "success");
        this.term.log("Goal: Create tree of if-then rules for classification/regression", "info");
        await this.term.delay(500);
        this.term.log("Method: Split data based on feature that maximizes information gain", "info");
        await this.term.delay(500);
        this.term.log("Use case: Interpretable models, feature selection, rule extraction", "warning");
        await this.term.delay(700);
        this.term.log("Starting visualization...", "success");
        this.term.log(" ", "info");
    }

    async simulateNetworkDelay(modelName) {
        const repoUrl = `https://github.com/Adityainsight/Machine-Learning`;

        this.term.log(`[NET] Initiating handshake with github.com...`, 'info');
        await new Promise(r => setTimeout(r, 600));

        this.term.log(`[GET] ${repoUrl}/blob/main/${modelName}.py`, 'warning');
        await new Promise(r => setTimeout(r, 800));

        const size = (Math.random() * 10 + 2).toFixed(1);
        this.term.log(`[200] OK - Payload received (${size}kb)`, 'success');
        this.term.log(`[SYS] Parsing Python AST... Compiling to WebGL...`, 'info');
        await new Promise(r => setTimeout(r, 600));
    }

    // --- SVM ---
    runSVM() {
        const { canvas, ctx, stats } = this.createCanvas("SUPPORT VECTOR MACHINE (SVM)");

        // Data: 2 Linearly separable clusters
        const data = [];
        for (let i = 0; i < 15; i++) data.push({ x: 0.2 + Math.random() * 0.25, y: 0.2 + Math.random() * 0.25, label: -1 });
        for (let i = 0; i < 15; i++) data.push({ x: 0.6 + Math.random() * 0.25, y: 0.6 + Math.random() * 0.25, label: 1 });

        // Hyperplane params
        let w = { x: 1, y: 1 };
        let b = 0;
        let lr = 0.005;

        // Simple Hinge Loss optimization
        const train = () => {
            for (let p of data) {
                const val = w.x * p.x + w.y * p.y - b;
                const condition = p.label * val >= 1;

                if (condition) {
                    w.x -= lr * (2 * 0.01 * w.x); // Regularization only
                    w.y -= lr * (2 * 0.01 * w.y);
                } else {
                    w.x -= lr * (2 * 0.01 * w.x - p.x * p.label);
                    w.y -= lr * (2 * 0.01 * w.y - p.y * p.label);
                    b -= lr * p.label;
                }
            }
        };

        const animate = () => {
            if (!canvas.isConnected) return;
            train();

            // Background
            ctx.fillStyle = '#111';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw Margins
            // w.x*x + w.y*y - b = 0 (Decision)
            // w.x*x + w.y*y - b = 1 (+Margin)
            // w.x*x + w.y*y - b = -1 (-Margin)

            const drawLine = (offset, color, dash) => {
                ctx.beginPath();
                ctx.strokeStyle = color;
                ctx.lineWidth = 2;
                ctx.setLineDash(dash ? [5, 5] : []);
                // x=0
                const y0 = (offset + b) / w.y;
                // x=1
                const y1 = (offset + b - w.x) / w.y;

                ctx.moveTo(0, y0 * canvas.height);
                ctx.lineTo(canvas.width, y1 * canvas.height);
                ctx.stroke();
                ctx.setLineDash([]);
            };

            drawLine(0, '#fff', false); // Center
            drawLine(1, '#00ff00', true); // + Support
            drawLine(-1, '#ff0000', true); // - Support

            // Draw Points
            data.forEach(p => {
                ctx.fillStyle = p.label === -1 ? '#ff0000' : '#00ff00';
                ctx.beginPath();
                ctx.arc(p.x * canvas.width, p.y * canvas.height, 5, 0, Math.PI * 2);
                ctx.fill();
                // Support vectors?
                const val = w.x * p.x + w.y * p.y - b;
                if (Math.abs(val) < 1.1) {
                    ctx.strokeStyle = '#ffff00';
                    ctx.stroke();
                }
            });

            stats.textContent = `Optimizing Margin... |W|: ${Math.hypot(w.x, w.y).toFixed(3)}`;
            requestAnimationFrame(animate);
        };
        animate();
    }

    // --- Random Forest ---
    runRandomForest() {
        const { canvas, ctx, stats } = this.createCanvas("RANDOM FOREST (Ensemble Voting)");

        const trees = 5;
        const gridSize = 20; // Lower res for visual style
        const grid = [];

        // Init Grid
        for (let x = 0; x < canvas.width; x += gridSize) {
            for (let y = 0; y < canvas.height; y += gridSize) {
                grid.push({ x, y, votes: 0, final: 0 });
            }
        }

        let currentTree = 0;

        const animate = () => {
            if (!canvas.isConnected) return;

            // Train one "tree" per few frames
            if (Math.random() > 0.9 && currentTree < trees) {
                currentTree++;
                // Random decision boundary for this tree
                const type = Math.random() > 0.5 ? 'split-x' : 'split-y';
                const split = Math.random() * (type === 'split-x' ? canvas.width : canvas.height);

                grid.forEach(cell => {
                    const val = (type === 'split-x' ? cell.x : cell.y);
                    // Vote logic (arbitrary mostly for viz)
                    if (val > split) cell.votes++;
                    else cell.votes--;
                });
            }

            ctx.fillStyle = '#000';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw Grid
            grid.forEach(cell => {
                // Visualize aggregate
                const intensity = Math.abs(cell.votes) / trees;
                const r = cell.votes < 0 ? 255 : 0;
                const g = cell.votes > 0 ? 255 : 0;
                ctx.fillStyle = `rgba(${r}, ${g}, 100, ${intensity * 0.8 + 0.1})`;
                ctx.fillRect(cell.x, cell.y, gridSize - 1, gridSize - 1);
            });

            // Draw Tree Icons
            for (let i = 0; i < trees; i++) {
                ctx.fillStyle = i < currentTree ? '#00ff00' : '#333';
                ctx.beginPath();
                const tx = 30 + i * 40;
                const ty = 30;
                ctx.moveTo(tx, ty);
                ctx.lineTo(tx - 10, ty + 20);
                ctx.lineTo(tx + 10, ty + 20);
                ctx.fill();
            }

            stats.textContent = `Trees Trained: ${currentTree}/${trees} | Ensemble Voting in Progress...`;
            requestAnimationFrame(animate);
        };
        animate();
    }

    // --- Naive Bayes ---
    runNaiveBayes() {
        const { canvas, ctx, stats, controls } = this.createCanvas("NAIVE BAYES (Probabilistic)");

        let mouseX = canvas.width / 2;

        // Two likelihood distributions (Gaussian)
        const classA = { mean: 0.35, std: 0.1, color: '#ff0000' };
        const classB = { mean: 0.65, std: 0.15, color: '#0000ff' };

        canvas.onmousemove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouseX = e.clientX - rect.left;
        };

        controls.innerHTML = `<span>Hover to check probability P(Class|X)</span>`;

        const gaussian = (x, mean, std) => {
            return Math.exp(-0.5 * Math.pow((x - mean) / std, 2)) / (std * Math.sqrt(2 * Math.PI));
        };

        const animate = () => {
            if (!canvas.isConnected) return;
            ctx.fillStyle = '#111';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            const drawDist = (cls) => {
                ctx.strokeStyle = cls.color;
                ctx.lineWidth = 2;
                ctx.beginPath();
                for (let i = 0; i < canvas.width; i += 5) {
                    const xNorm = i / canvas.width;
                    const y = gaussian(xNorm, cls.mean, cls.std);
                    // Scale y for visual
                    const yPlot = canvas.height - (y * 50);
                    if (i === 0) ctx.moveTo(i, yPlot);
                    else ctx.lineTo(i, yPlot);
                }
                ctx.stroke();
            };

            drawDist(classA);
            drawDist(classB);

            // Mouse Line
            ctx.strokeStyle = '#fff';
            ctx.beginPath();
            ctx.moveTo(mouseX, 0);
            ctx.lineTo(mouseX, canvas.height);
            ctx.stroke();

            // Calculate Prob at Mouse
            const xVal = mouseX / canvas.width;
            const pA = gaussian(xVal, classA.mean, classA.std);
            const pB = gaussian(xVal, classB.mean, classB.std);

            // Normalize to Prior=0.5
            const tot = pA + pB;
            const finalA = tot ? (pA / tot) : 0;
            const finalB = tot ? (pB / tot) : 0;

            // Draw Bars
            ctx.fillStyle = classA.color;
            ctx.fillRect(mouseX + 10, canvas.height - 150, 20, finalA * 100);
            ctx.fillStyle = classB.color;
            ctx.fillRect(mouseX + 40, canvas.height - 150, 20, finalB * 100);

            ctx.fillStyle = '#fff';
            ctx.fillText(`P(A): ${(finalA * 100).toFixed(1)}%`, mouseX + 10, canvas.height - 160);
            ctx.fillText(`P(B): ${(finalB * 100).toFixed(1)}%`, mouseX + 10, canvas.height - 180);

            stats.textContent = `Input X: ${xVal.toFixed(2)}`;
            requestAnimationFrame(animate);
        };
        animate();
    }

    createCanvas(title) {
        const template = document.getElementById('viz-template');
        const clone = template.content.cloneNode(true);

        // Customize
        clone.querySelector('.viz-title').textContent = title;

        // Append to output
        this.term.outputDiv.appendChild(clone);

        // Get elements
        const container = this.term.outputDiv.lastElementChild; // The viz-container we just added
        const canvas = container.querySelector('canvas');
        const ctx = canvas.getContext('2d');
        const controls = container.querySelector('.viz-controls');
        const stats = container.querySelector('.viz-stats');

        this.term.scrollToBottom();

        return { canvas, ctx, controls, stats, container };
    }

    // --- Linear Regression ---
    runLinearRegression() {
        const { canvas, ctx, controls, stats } = this.createCanvas("LINEAR REGRESSION (Ordinary Least Squares)");

        // State
        let points = [];
        let m = 0;
        let b = 0;
        let learningRate = 0.05;
        let isRunning = true;

        // Init Points
        for (let i = 0; i < 30; i++) {
            points.push({
                x: Math.random(),
                y: Math.random() // Roughly linear with noise handled by algo
            });
        }

        // Controls
        controls.innerHTML = `
            <button id="lr-reset">Reset</button>
            <label>LR: <input type="range" min="0.001" max="0.1" step="0.001" value="0.05" id="lr-rate"></label>
        `;

        controls.querySelector('#lr-reset').onclick = () => {
            points = [];
            for (let i = 0; i < 30; i++) points.push({ x: Math.random(), y: Math.random() });
            m = 0; b = 0;
        };
        controls.querySelector('#lr-rate').oninput = (e) => learningRate = parseFloat(e.target.value);

        // Loop
        const animate = () => {
            if (!canvas.isConnected) return; // Stop if removed

            // Update (Gradient Descent)
            if (isRunning) {
                let dM = 0;
                let dB = 0;
                const N = points.length;

                for (let p of points) {
                    const guess = m * p.x + b;
                    const error = guess - p.y;
                    dM += error * p.x;
                    dB += error;
                }

                m -= (dM / N) * learningRate;
                b -= (dB / N) * learningRate;
            }

            // Draw
            ctx.fillStyle = '#111';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw Points
            ctx.fillStyle = '#00bfff';
            for (let p of points) {
                ctx.beginPath();
                ctx.arc(p.x * canvas.width, (1 - p.y) * canvas.height, 4, 0, Math.PI * 2);
                ctx.fill();
            }

            // Draw Line
            ctx.strokeStyle = '#00ff00';
            ctx.lineWidth = 2;
            ctx.beginPath();
            const y1 = m * 0 + b;
            const y2 = m * 1 + b;
            ctx.moveTo(0, (1 - y1) * canvas.height);
            ctx.lineTo(canvas.width, (1 - y2) * canvas.height);
            ctx.stroke();

            // Stats
            stats.textContent = `Slope (m): ${m.toFixed(4)} | Intercept (b): ${b.toFixed(4)} | Learning Rate: ${learningRate}`;

            requestAnimationFrame(animate);
        };
        animate();
    }

    // --- K-Means ---
    runKMeans() {
        const { canvas, ctx, controls, stats } = this.createCanvas("K-MEANS CLUSTERING");

        let points = [];
        let centroids = [];
        let k = 3;

        const init = () => {
            points = [];
            centroids = [];
            // Random Gaussian-ish blobs
            for (let i = 0; i < 100; i++) {
                points.push({ x: Math.random(), y: Math.random(), group: -1 });
            }
            // Random Centroids
            for (let i = 0; i < k; i++) {
                centroids.push({ x: Math.random(), y: Math.random(), color: `hsl(${i * 360 / k}, 100%, 50%)` });
            }
        };

        controls.innerHTML = `<button id="km-step">Step</button> <button id="km-reset">Reset</button>`;
        controls.querySelector('#km-reset').onclick = init;

        init();

        const step = () => {
            // Assign points to nearest centroid
            let changed = false;
            for (let p of points) {
                let minDist = Infinity;
                let group = -1;
                centroids.forEach((c, i) => {
                    const d = Math.hypot(c.x - p.x, c.y - p.y);
                    if (d < minDist) {
                        minDist = d;
                        group = i;
                    }
                });
                if (p.group !== group) changed = true;
                p.group = group;
            }

            // Move centroids
            if (changed) {
                centroids.forEach((c, i) => {
                    const assigned = points.filter(p => p.group === i);
                    if (assigned.length > 0) {
                        const sumX = assigned.reduce((s, p) => s + p.x, 0);
                        const sumY = assigned.reduce((s, p) => s + p.y, 0);
                        c.x = sumX / assigned.length;
                        c.y = sumY / assigned.length;
                    }
                });
            }
            stats.textContent = changed ? "Training..." : "Converged";
        };

        controls.querySelector('#km-step').onclick = step;

        const animate = () => {
            if (!canvas.isConnected) return;

            ctx.fillStyle = '#111';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw Points
            for (let p of points) {
                ctx.fillStyle = p.group === -1 ? '#555' : centroids[p.group].color;
                ctx.beginPath();
                ctx.arc(p.x * canvas.width, p.y * canvas.height, 3, 0, Math.PI * 2);
                ctx.fill();
            }

            // Draw Centroids
            for (let c of centroids) {
                ctx.strokeStyle = '#fff';
                ctx.lineWidth = 2;
                ctx.fillStyle = c.color;
                ctx.beginPath();
                ctx.rect(c.x * canvas.width - 6, c.y * canvas.height - 6, 12, 12);
                ctx.fill();
                ctx.stroke();
            }

            requestAnimationFrame(animate);
        };
        animate();
    }

    // --- KNN ---
    runKNN() {
        const { canvas, ctx, controls, stats } = this.createCanvas("K-NEAREST NEIGHBORS");

        let trainingData = [];
        let k = 3;
        const classes = [{ color: '#ff0000', label: 'A' }, { color: '#0000ff', label: 'B' }];

        // Init random data
        for (let i = 0; i < 20; i++) trainingData.push({ x: Math.random(), y: Math.random(), class: 0 });
        for (let i = 0; i < 20; i++) trainingData.push({ x: Math.random(), y: Math.random(), class: 1 });

        let mouseX = 0, mouseY = 0;

        canvas.onmousemove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouseX = (e.clientX - rect.left) / canvas.width;
            mouseY = (e.clientY - rect.top) / canvas.height;
        };

        controls.innerHTML = `<span>Hover to classify</span> <label>K: <input type="range" min="1" max="10" step="1" value="3" id="knn-k"></label>`;
        controls.querySelector('#knn-k').oninput = (e) => k = parseInt(e.target.value);

        const animate = () => {
            if (!canvas.isConnected) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw training data
            for (let p of trainingData) {
                ctx.fillStyle = classes[p.class].color;
                ctx.beginPath();
                ctx.arc(p.x * canvas.width, p.y * canvas.height, 4, 0, Math.PI * 2);
                ctx.fill();
            }

            // Classify Mouse Pos
            const distances = trainingData.map(p => ({
                p, dist: Math.hypot(p.x - mouseX, p.y - mouseY)
            })).sort((a, b) => a.dist - b.dist).slice(0, k);

            const votes = [0, 0];
            distances.forEach(d => votes[d.p.class]++);
            const predicted = votes[0] > votes[1] ? 0 : 1;

            // Draw Mouse/Prediction
            ctx.fillStyle = classes[predicted].color;
            ctx.beginPath();
            ctx.arc(mouseX * canvas.width, mouseY * canvas.height, 8, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = '#fff';
            ctx.stroke();

            // Draw lines to neighbors
            ctx.strokeStyle = '#555';
            ctx.beginPath();
            distances.forEach(d => {
                ctx.moveTo(mouseX * canvas.width, mouseY * canvas.height);
                ctx.lineTo(d.p.x * canvas.width, d.p.y * canvas.height);
            });
            ctx.stroke();

            stats.textContent = `Predicted Class: ${classes[predicted].label} | K: ${k}`;
            requestAnimationFrame(animate);
        };
        animate();
    }

    // --- Neural Network (Visual only) ---
    runNeuralNet() {
        const { canvas, ctx } = this.createCanvas("NEURAL NETWORK ACTIVITY");

        const layers = [4, 6, 6, 2];
        const nodes = [];

        // Setup nodes
        layers.forEach((count, lIndex) => {
            const lNodes = [];
            const x = (lIndex + 1) * (canvas.width / (layers.length + 1));
            const yStep = canvas.height / (count + 1);
            for (let i = 0; i < count; i++) {
                lNodes.push({ x, y: (i + 1) * yStep, val: Math.random() });
            }
            nodes.push(lNodes);
        });

        const animate = () => {
            if (!canvas.isConnected) return;
            ctx.fillStyle = '#000';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Pulse values randomly
            nodes.forEach(layer => layer.forEach(n => n.val = Math.max(0, Math.min(1, n.val + (Math.random() - 0.5) * 0.1))));

            // Draw connections
            for (let i = 0; i < nodes.length - 1; i++) {
                const current = nodes[i];
                const next = nodes[i + 1];
                for (let n1 of current) {
                    for (let n2 of next) {
                        ctx.strokeStyle = `rgba(0, 255, 0, ${n1.val * n2.val})`;
                        ctx.beginPath();
                        ctx.moveTo(n1.x, n1.y);
                        ctx.lineTo(n2.x, n2.y);
                        ctx.stroke();
                    }
                }
            }

            // Draw nodes
            nodes.forEach(layer => {
                layer.forEach(n => {
                    ctx.fillStyle = `rgba(0, 255, 255, ${n.val})`;
                    ctx.beginPath();
                    ctx.arc(n.x, n.y, 6, 0, Math.PI * 2);
                    ctx.fill();
                });
            });
            requestAnimationFrame(animate);
        };
        animate();
    }

    // --- Logistic Regression ---
    runLogistic() {
        const { canvas, ctx, controls, stats } = this.createCanvas("LOGISTIC REGRESSION (Classification)");
        const data = [];

        // Generate two clusters
        for (let i = 0; i < 20; i++) data.push({ x: 0.2 + Math.random() * 0.3, y: 0.2 + Math.random() * 0.3, label: 0 });
        for (let i = 0; i < 20; i++) data.push({ x: 0.6 + Math.random() * 0.3, y: 0.6 + Math.random() * 0.3, label: 1 });

        // Weights
        let w1 = 0, w2 = 0, b = 0;
        let lr = 0.01;

        const sigmoid = (z) => 1 / (1 + Math.exp(-z));

        const animate = () => {
            if (!canvas.isConnected) return;

            // Train Step
            for (let p of data) {
                const z = w1 * p.x + w2 * p.y + b;
                const pred = sigmoid(z);
                const err = pred - p.label;
                w1 -= lr * err * p.x;
                w2 -= lr * err * p.y;
                b -= lr * err;
            }

            // Draw
            ctx.fillStyle = '#111';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw Decision Boundary (where w1*x + w2*y + b = 0 => y = (-w1*x - b)/w2)
            ctx.strokeStyle = '#fff';
            ctx.beginPath();
            const xStart = 0;
            const yStart = (-w1 * xStart - b) / w2;
            const xEnd = 1;
            const yEnd = (-w1 * xEnd - b) / w2;

            ctx.moveTo(xStart * canvas.width, yStart * canvas.height);
            ctx.lineTo(xEnd * canvas.width, yEnd * canvas.height);
            ctx.stroke();

            // Draw Points
            for (let p of data) {
                ctx.fillStyle = p.label === 0 ? '#f00' : '#0f0';
                ctx.beginPath();
                ctx.arc(p.x * canvas.width, p.y * canvas.height, 4, 0, Math.PI * 2);
                ctx.fill();
            }
            requestAnimationFrame(animate);
        };
        animate();
    }

    runPCA() {
        const { canvas, ctx, stats } = this.createCanvas("PCA (Dimensionality Reduction)");
        // Just a visual demo of rotating axes
        let angle = 0;

        const animate = () => {
            if (!canvas.isConnected) return;
            ctx.fillStyle = '#111';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw "Cloud"
            ctx.save();
            ctx.translate(canvas.width / 2, canvas.height / 2);
            ctx.rotate(angle);

            ctx.fillStyle = '#00bfff';
            for (let i = 0; i < 50; i++) {
                // Elliptical distribution
                const x = (Math.random() - 0.5) * 200;
                const y = (Math.random() - 0.5) * 50;
                ctx.beginPath();
                ctx.arc(x, y, 2, 0, Math.PI * 2);
                ctx.fill();
            }

            // Principal Axis
            ctx.strokeStyle = '#ffff00';
            ctx.beginPath();
            ctx.moveTo(-150, 0);
            ctx.lineTo(150, 0);
            ctx.stroke();

            ctx.restore();

            angle += 0.01;
            requestAnimationFrame(animate);
        };
        animate();
    }
}
