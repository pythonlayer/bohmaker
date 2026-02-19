// Add wave
function addWave() {
    const container = document.getElementById('wavesContainer');
    const waveDiv = document.createElement('div');
    waveDiv.className = 'wave-container';
    waveDiv.setAttribute('data-wave-item', container.querySelectorAll('.wave-container').length + 1);
    
    const waveNumber = container.querySelectorAll('.wave-container').length + 1;
    
    waveDiv.innerHTML = `
        <div class="wave-header">
            <span class="wave-title">Wave ${waveNumber}</span>
            <button class="danger" style="padding: 5px 10px; font-size: 12px;" onclick="this.closest('.wave-container').remove()">Remove</button>
        </div>
        
        <div class="form-group">
            <label>Hat Count</label>
            <input type="number" class="hatCount" value="2" min="1" max="6">
        </div>
        
        <div class="form-group">
            <label>
                <input type="checkbox" class="useCustomHatPositions">
                Use Custom Hat Positions
            </label>
        </div>
        
        <div class="custom-hat-positions-section" style="display:none; background:#1a1a1a; padding:10px; border-radius:3px; margin-bottom:10px;">
            <label style="font-size: 12px; font-weight: bold;">Custom Hat Coordinates</label>
            <small style="color: #888; display: block; margin-bottom: 8px;">Note: x = 200, y = 160 corresponds to GridX = 0, GridY = 0</small>
            <div class="hat-positions-container"></div>
        </div>
        
        <div class="form-group">
            <label>Preview Duration (seconds)</label>
            <input type="number" class="previewDuration" value="3" min="0" max="10">
        </div>
        
        <div class="form-group">
            <label>Reveal Duration (seconds)</label>
            <input type="number" class="revealDuration" value="1" min="0" max="10">
        </div>
        
        <div class="form-group">
            <label>Wave Start Sound</label>
            <select class="waveStartSound">
                ${SOUND_IDS.map(s => `<option value="${s}">${s}</option>`).join('')}
            </select>
        </div>
        
        <div class="form-group">
            <label>Wave Start Message (Optional)</label>
            <input type="text" class="waveStartMessage" placeholder="e.g., [CARNIVAL_WAVE_TEXT]">
        </div>
        
        <div class="form-group">
            <label>
                <input type="checkbox" class="useRandomPlacement" checked>
                Use Random Zombie Placement
            </label>
        </div>
        
        <div class="form-group">
            <label>Hat Pop Animation</label>
            <select class="hatPopAnim">
                ${HAT_ANIMS.map(a => `<option value="${a}">${a}</option>`).join('')}
            </select>
        </div>
        
        <h3 style="margin-top: 15px; margin-bottom: 10px; font-size: 14px;">Choices</h3>
        <div class="indent-section" data-choices-container="true">
        </div>
        
        <button onclick="addChoiceToWave(event)" style="font-size: 12px; padding: 6px 10px;">+ Add Choice</button>
        
        <h3 style="margin-top: 15px; margin-bottom: 10px; font-size: 14px;">
            Shuffle Patterns (SwapWaves)
            <span class="toggle-help" onclick="togglePatternTutorial(event)" title="Click to expand/collapse" style="font-size: 12px; cursor: pointer;">📖</span>
        </h3>
        
        <div class="pattern-tutorial" style="display:none; background:#1a2a1a; border-left:3px solid #4a9d4a; padding:12px; margin-bottom:12px; border-radius:3px;">
            <details style="cursor: pointer;">
                <summary style="font-weight: bold; color: #7dd97d; margin-bottom: 8px;">Pattern Editor Help</summary>
                <div style="margin-top: 10px; font-size: 12px; color: #aaa; line-height: 1.6;">
                    <p><strong style="color: #9f9;">What is a pattern?</strong><br>
                    Each pattern defines HOW the hats swap. The game picks one randomly every shuffle.</p>
                    
                    <p><strong style="color: #9f9;">First (hat indices)</strong><br>
                    The starting positions of hats. For 3 hats: <code style="background:#0f0f0f; padding:2px 4px;">0, 1, 2</code><br>
                    (Position 0 has hat 0, position 1 has hat 1, etc.)</p>
                    
                    <p><strong style="color: #9f9;">Second (target positions)</strong><br>
                    Where each hat moves to. If you swap positions 0 and 1:<br>
                    <code style="background:#0f0f0f; padding:2px 4px;">1, 0, 2</code><br>
                    (Hat 0 goes to position 1, hat 1 goes to position 0, hat 2 stays)</p>
                    
                    <p><strong style="color: #9f9;">Style</strong><br>
                    <code style="background:#0f0f0f; padding:2px 4px;">SwapStraight</code> - Direct swap<br>
                    <code style="background:#0f0f0f; padding:2px 4px;">ParabolicUp</code> - Arcs upward<br>
                    <code style="background:#0f0f0f; padding:2px 4px;">ParabolicDown</code> - Arcs downward</p>
                    
                    <p><strong style="color: #9f9;">MovementCurve</strong><br>
                    How smooth the animation is. Try: <code style="background:#0f0f0f; padding:2px 4px;">linear</code>, <code style="background:#0f0f0f; padding:2px 4px;">ease_in_out</code>, <code style="background:#0f0f0f; padding:2px 4px;">bounce</code></p>
                    
                    <p><strong style="color: #9f9;">Duration & Cooldown</strong><br>
                    Duration: How long the swap takes (seconds)<br>
                    Cooldown: Pause after swap before next action (seconds)</p>
                    
                    <p><strong style="color: #9f9;">ParabolicHeight</strong><br>
                    Only for ParabolicUp/Down. Height of the arc in pixels. Leave empty for straight swaps.</p>
                    
                </div>
            </details>
        </div>
        
        <div class="indent-section" data-patterns-container="true" style="border-color: #2d5a2d;">
        </div>
        
        <button onclick="addPatternToWave(event)" style="font-size: 12px; padding: 6px 10px;">+ Add Pattern</button>
    `;
    
    container.appendChild(waveDiv);
    
    // Attach change listeners to new wave inputs for real-time updates
    attachChangeListeners(waveDiv);
    
    // Update hat positions when count or checkbox changes
    waveDiv.querySelector('.hatCount').addEventListener('change', () => updateHatPositions(waveDiv));
    waveDiv.querySelector('.useCustomHatPositions').addEventListener('change', () => {
        const section = waveDiv.querySelector('.custom-hat-positions-section');
        section.style.display = waveDiv.querySelector('.useCustomHatPositions').checked ? 'block' : 'none';
        if (waveDiv.querySelector('.useCustomHatPositions').checked) {
            updateHatPositions(waveDiv);
        }
    });
    
    addChoiceToWave({ target: waveDiv.querySelector('button:last-of-type') });
}

// Update hat position inputs
function updateHatPositions(waveDiv) {
    const hatCount = parseInt(waveDiv.querySelector('.hatCount').value);
    const container = waveDiv.querySelector('.hat-positions-container');
    container.innerHTML = '';
    
    for (let i = 0; i < hatCount; i++) {
        const posDiv = document.createElement('div');
        posDiv.style.marginBottom = '10px';
        posDiv.style.padding = '8px';
        posDiv.style.backgroundColor = '#0f0f0f';
        posDiv.style.borderRadius = '3px';
        posDiv.innerHTML = `
            <div style="font-size: 11px; font-weight: bold; margin-bottom: 5px;">Hat ${i + 1}</div>
            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 6px;">
                <div>
                    <label style="font-size: 10px;">X</label>
                    <input type="number" class="hatPosX" value="0" style="font-size: 11px;">
                </div>
                <div>
                    <label style="font-size: 10px;">Y</label>
                    <input type="number" class="hatPosY" value="0" style="font-size: 11px;">
                </div>
                <div>
                    <label style="font-size: 10px;">Z</label>
                    <input type="number" class="hatPosZ" value="0" style="font-size: 11px;">
                </div>
            </div>
        `;
        container.appendChild(posDiv);
    }
}

// Remove wave
function removeWave(waveElement) {
    if (waveElement && waveElement.closest) {
        waveElement.closest('.wave-container').remove();
    }
}

// Add pattern to wave
function addPatternToWave(event) {
    const waveDiv = event.target.closest('.wave-container');
    addPattern(waveDiv);
}

// Toggle pattern collapse
function togglePattern(headerEl) {
    headerEl.classList.toggle('collapsed');
    headerEl.nextElementSibling.style.display = headerEl.classList.contains('collapsed') ? 'none' : 'grid';
}

// Copy from previous pattern
function copyFromPreviousPattern(currentPatternEl) {
    const waveDiv = currentPatternEl.closest('.wave-container');
    const patterns = waveDiv.querySelectorAll('.pattern-editor');
    const currentIndex = Array.from(patterns).indexOf(currentPatternEl);
    
    if (currentIndex > 0) {
        const prevPattern = patterns[currentIndex - 1];
        
        // Copy style
        currentPatternEl.querySelector('.pattern-style').value = prevPattern.querySelector('.pattern-style').value;
        
        // Copy curve
        currentPatternEl.querySelector('.pattern-curve').value = prevPattern.querySelector('.pattern-curve').value;
        
        // Copy duration
        currentPatternEl.querySelector('.pattern-duration').value = prevPattern.querySelector('.pattern-duration').value;
        
        // Copy cooldown
        currentPatternEl.querySelector('.pattern-cooldown').value = prevPattern.querySelector('.pattern-cooldown').value;
        
        // Copy height
        currentPatternEl.querySelector('.pattern-height').value = prevPattern.querySelector('.pattern-height').value;
        
        // Copy first positions
        const prevFirstList = prevPattern.querySelector('.pattern-first-list');
        const currentFirstList = currentPatternEl.querySelector('.pattern-first-list');
        currentFirstList.innerHTML = prevFirstList.innerHTML;
        
        // Copy second positions
        const prevSecondList = prevPattern.querySelector('.pattern-second-list');
        const currentSecondList = currentPatternEl.querySelector('.pattern-second-list');
        currentSecondList.innerHTML = prevSecondList.innerHTML;
        
        // Re-attach listeners
        attachChangeListeners(currentPatternEl);
        checkAndShowCustomPositions(currentPatternEl);
    } else {
        alert('No previous pattern to copy from.');
    }
}

// Add pattern
function addPattern(waveDiv) {
    const hatCount = parseInt(waveDiv.querySelector('.hatCount').value) || 2;
    const patternsContainer = waveDiv.querySelector('[data-patterns-container="true"]');
    const patternNumber = patternsContainer.querySelectorAll('.pattern-editor').length + 1;
    
    const patternDiv = document.createElement('div');
    patternDiv.className = 'pattern-editor';
    patternDiv.dataset.patternItem = 'true';
    
    // Generate default values based on hat count
    const defaultFirst = Array.from({length: hatCount}, (_, i) => i).join(', ');
    const defaultSecond = [...Array.from({length: hatCount}, (_, i) => i).slice(1), 0].join(', ');
    
    patternDiv.innerHTML = `
        <div class="pattern-header" onclick="togglePattern(this)">
            <div style="display: flex; align-items: center; gap: 6px;">
                <span class="toggle-icon">▼</span>
                <span class="pattern-label">Pattern ${patternNumber}</span>
            </div>
            <div style="display: flex; gap: 4px;">
                <button title="Copy from previous pattern" onclick="event.stopPropagation(); copyFromPreviousPattern(this.closest('.pattern-editor'))" style="padding: 3px 6px; font-size: 10px;">📋 Copy Prev</button>
                <button class="danger" style="padding: 3px 6px; font-size: 10px; margin-right: 0;" onclick="event.stopPropagation(); this.closest('.pattern-editor').remove()">Remove</button>
            </div>
        </div>
        <div class="pattern-content">
            <div style="background:#0a0a0a; padding:8px; border-radius:3px; margin-bottom:10px; border-left:2px solid #4a9d4a;">
                <strong style="color:#9f9; font-size:11px;">Pattern Layout Example for ${hatCount} hat(s):</strong><br>
                <code style="color:#7dd97d; font-size:10px;">First: ${defaultFirst} → Second: ${defaultSecond}</code>
            </div>
            
            <div class="pattern-field">
                <label>First (Starting Positions)</label>
                <small style="color: #888;">Automatically matches hat count above</small>
                <div class="pattern-first-list" style="background-color: #44150E; border: dashed 1px #991F1F; border-radius: 3px; padding: 8px; margin-top: 6px; min-height: 40px; display: flex; flex-wrap: wrap; gap: 6px; align-items: flex-start;">
                </div>
                <button onclick="addFirstPosition(this.closest('[data-pattern-item]'))" style="margin-top: 6px; padding: 4px 8px; background-color: #662815; color: #FF9999; border: 1px solid #991F1F; border-radius: 3px; cursor: pointer; font-size: 12px;">+ Add Position</button>
            </div>
            <div class="pattern-field">
                <label>Second (Where They Go)</label>
                <small style="color: #888;">Same as First but shuffled. Set to -1 for custom positions.</small>
                <div class="pattern-second-list" style="background-color: #44150E; border: dashed 1px #991F1F; border-radius: 3px; padding: 8px; margin-top: 6px; min-height: 40px; display: flex; flex-wrap: wrap; gap: 6px; align-items: flex-start;">
                </div>
                <button onclick="randomisePatternList(this.closest('[data-pattern-item]').querySelector('.pattern-second-list'))" style="margin-top: 6px; padding: 4px 8px; background-color: #662815; color: #FF9999; border: 1px solid #991F1F; border-radius: 3px; cursor: pointer; font-size: 12px;">Randomise</button>
            </div>
            
            <div class="pattern-field">
                <label>🔄 Style (Animation Type)</label>
                <select class="pattern-style" style="font-size: 12px; padding: 4px;">
                    <option value="SwapStraight">SwapStraight (Direct swap)</option>
                    <option value="ParabolicUp">ParabolicUp (Arc upward)</option>
                    <option value="ParabolicDown">ParabolicDown (Arc downward)</option>
                </select>
                <small style="color: #888;">How hats visually move</small>
            </div>
            <div class="pattern-field">
                <label>⏱️ MovementCurve (Animation Smoothness)</label>
                <select class="pattern-curve" style="font-size: 12px; padding: 4px;">
                    ${MOVEMENT_CURVES.map(curve => `<option value="${curve}">${curve}</option>`).join('')}
                </select>
                <small style="color: #888;">linear, ease_in_out, bounce, etc.</small>
            </div>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                <div class="pattern-field">
                    <label>⏸️ Duration (seconds)</label>
                    <input type="number" class="pattern-duration" value="0.25" min="0" step="0.05">
                    <small style="color: #888;">How long the swap takes</small>
                </div>
                <div class="pattern-field">
                    <label>⏳ Cooldown (seconds)</label>
                    <input type="number" class="pattern-cooldown" value="0.22" min="0" step="0.05">
                    <small style="color: #888;">Pause after swap</small>
                </div>
            </div>
            
            <div class="pattern-field">
                <label>📈 ParabolicHeight (arc pixels)</label>
                <input type="text" class="array-input pattern-height" placeholder="120, 120" value="">
                <small style="color: #888;">Only for ParabolicUp/Down. Leave empty for straight.</small>
            </div>
            
            <div class="custom-positions-section" style="display: none; background: #1a2a1a; border-left: 3px solid #4a9d4a; padding: 12px; margin-top: 15px; border-radius: 3px;">
                <label style="font-weight: bold; color: #7dd97d; display: block; margin-bottom: 10px;">Custom Hat Positions (Set when Second values are -1)</label>
            </div>
        </div>
    `;
    
    patternsContainer.appendChild(patternDiv);
    attachChangeListeners(patternDiv);
    
    // Populate the first positions list with defaults (0, 1, 2, ...)
    const firstList = patternDiv.querySelector('.pattern-first-list');
    for (let i = 0; i < hatCount; i++) {
        addFirstPosition(patternDiv, i, true);
    }
    
    // Populate the second positions list with same values as first but shuffled
    const secondList = patternDiv.querySelector('.pattern-second-list');
    const secondValues = Array.from({length: hatCount}, (_, i) => i);
    // Shuffle the values
    for (let i = secondValues.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [secondValues[i], secondValues[j]] = [secondValues[j], secondValues[i]];
    }
    for (let val of secondValues) {
        addSecondPosition(patternDiv, val);
    }
    // Ensure parity in case addFirstPosition also auto-added items
    ensureFirstSecondParity(patternDiv);
}

// Add choice to wave
function addChoiceToWave(event) {
    const waveDiv = event.target.closest('.wave-container');
    addChoice(waveDiv);
}

// Toggle choice collapse
function toggleChoice(headerEl) {
    headerEl.classList.toggle('collapsed');
    headerEl.closest('.choice-group').querySelector('.choice-content').classList.toggle('collapsed');
}

// Shuffle choices order
function shuffleChoices(headerEl) {
    const waveEl = headerEl.closest('.wave-container');
    const choicesContainer = waveEl.querySelector('[data-choices-container="true"]');
    const choices = Array.from(choicesContainer.querySelectorAll('.choice-group'));
    
    for (let i = choices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [choices[i], choices[j]] = [choices[j], choices[i]];
    }
    
    choices.forEach(choice => choicesContainer.appendChild(choice));
    updateChoiceNumbers(waveEl);
}

// Swap choice with previous
function moveChoiceUp(headerEl) {
    const choiceGroup = headerEl.closest('.choice-group');
    const prevChoice = choiceGroup.previousElementSibling;
    if (prevChoice && prevChoice.classList.contains('choice-group')) {
        choiceGroup.parentNode.insertBefore(choiceGroup, prevChoice);
        updateChoiceNumbers(headerEl.closest('.wave-container'));
    }
}

// Swap choice with next
function moveChoiceDown(headerEl) {
    const choiceGroup = headerEl.closest('.choice-group');
    const nextChoice = choiceGroup.nextElementSibling;
    if (nextChoice && nextChoice.classList.contains('choice-group')) {
        choiceGroup.parentNode.insertBefore(nextChoice, choiceGroup);
        updateChoiceNumbers(headerEl.closest('.wave-container'));
    }
}

// Update choice numbers after reorder
function updateChoiceNumbers(waveEl) {
    const choices = waveEl.querySelectorAll('.choice-group');
    choices.forEach((choice, idx) => {
        choice.querySelector('.choice-header .choice-label').textContent = `Choice ${idx + 1}`;
    });
}

// Add choice
function addChoice(waveDiv) {
    const choicesContainer = waveDiv.querySelector('[data-choices-container="true"]');
    const choiceNumber = choicesContainer.querySelectorAll('.choice-group').length + 1;
    
    const choiceDiv = document.createElement('div');
    choiceDiv.className = 'choice-group';
    
    choiceDiv.innerHTML = `
        <div class="choice-header" onclick="toggleChoice(this)">
            <div style="display: flex; align-items: center; gap: 8px; flex: 1;">
                <span class="toggle-icon">▼</span>
                <span class="choice-label">Choice ${choiceNumber}</span>
                <span class="preview-label" style="color: #888; font-size: 11px; font-weight: normal;">Preview: <span class="preview-value">-</span></span>
            </div>
            <div class="choice-controls" onclick="event.stopPropagation();">
                <button title="Shuffle choices" onclick="shuffleChoices(this.closest('.choice-header'))" style="padding: 4px 6px; font-size: 11px;">🔀</button>
                <button title="Move up" onclick="moveChoiceUp(this.closest('.choice-header'))" style="padding: 4px 6px; font-size: 11px;">↑</button>
                <button title="Move down" onclick="moveChoiceDown(this.closest('.choice-header'))" style="padding: 4px 6px; font-size: 11px;">↓</button>
                <button class="danger" title="Delete" style="padding: 4px 6px; font-size: 11px;" onclick="this.closest('.choice-group').remove()">×</button>
            </div>
        </div>
        <div class="choice-content">
        <div class="form-group">
            <label>Preview Zombie</label>
                <input list="zombiePoolList" class="previewZombie" onchange="this.closest('.choice-group').querySelector('.preview-value').textContent = this.value || '-'" style="
    background-color: #484848;
    color: white;
    font-weight: bold;
    border: dashed 1px #999999;
">
        </div>
        
        <div class="form-group">
            <label>Reveal Zombie</label>
            <input list="zombiePoolList" class="revealZombie" style="
    background-color: #484848;
    color: white;
    font-weight: bold;
    border: dashed 1px #999999;
">
        </div>
        
        <div class="form-group">
            <label>Sun Amount</label>
            <input type="number" class="sunAmount" value="0" min="0">
        </div>
        
        <label style="font-size: 13px;">Spawned Zombies</label>
        <div class="indent-section" data-spawned-container="true" style="margin-top: 8px;">
        </div>
        </div>
    `;
    
    choicesContainer.appendChild(choiceDiv);
    attachChangeListeners(choiceDiv);
    addSpawnedZombieToChoice({ target: choiceDiv.querySelector('button:last-of-type') });
}

// Add spawned zombie to choice
function addSpawnedZombieToChoice(event) {
    const choiceDiv = event.target.closest('.choice-group');
    addSpawnedZombie(choiceDiv);
}

// Add spawned zombie
function addSpawnedZombie(choiceDiv) {
    const spawnedContainer = choiceDiv.querySelector('[data-spawned-container="true"]');
    
    // Initialize grid data if it doesn't exist
    if (!spawnedContainer.zombieGrid) {
        spawnedContainer.zombieGrid = {};
        for (let row = 1; row <= 5; row++) {
            spawnedContainer.zombieGrid[row] = {};
            for (let col = 1; col <= 6; col++) {
                spawnedContainer.zombieGrid[row][col] = {
                    type: '',
                    plantfood: false
                };
            }
        }
    }
    
    // Render the grid
    renderZombieGrid(choiceDiv);
}

// Render zombie grid (6x5)
function renderZombieGrid(choiceDiv) {
    const spawnedContainer = choiceDiv.querySelector('[data-spawned-container="true"]');
    
    // Clear existing grid
    const existingGrid = spawnedContainer.querySelector('.zombie-grid');
    if (existingGrid) existingGrid.remove();
    
    // Clear existing coordinate mode
    const existingCoordMode = spawnedContainer.querySelector('.zombie-coordinate-mode');
    if (existingCoordMode) existingCoordMode.remove();
    
    // Initialize grid if needed
    if (!spawnedContainer.zombieGrid) {
        spawnedContainer.zombieGrid = {};
        for (let row = 1; row <= 5; row++) {
            spawnedContainer.zombieGrid[row] = {};
            for (let col = 1; col <= 5; col++) {
                spawnedContainer.zombieGrid[row][col] = {
                    type: '',
                    plantfood: false
                };
            }
        }
    }
    
    // Initialize coordinate mode if needed
    if (!spawnedContainer.zombieCoordinates) {
        spawnedContainer.zombieCoordinates = [];
    }
    
    const gridDiv = document.createElement('div');
    gridDiv.className = 'zombie-grid';
    
    // Grid rows
    for (let row = 1; row <= 5; row++) {
        const rowContainer = document.createElement('div');
        rowContainer.style.display = 'flex';
        rowContainer.style.gap = '4px';
        rowContainer.style.alignItems = 'center';
        
        const rowLabel = document.createElement('div');
        rowLabel.className = 'zombie-grid-header';
        rowLabel.textContent = row;
        rowLabel.style.flex = '0 0 50px';
        rowContainer.appendChild(rowLabel);
        
        // Create a wrapper div for the grid cells
        const cellsWrapper = document.createElement('div');
        cellsWrapper.style.display = 'flex';
        cellsWrapper.style.flex = '1';
        cellsWrapper.style.gap = '1px';
        
        for (let col = 1; col <= 5; col++) {
            const cellData = spawnedContainer.zombieGrid[row][col];
            const cell = document.createElement('div');
            cell.className = 'zombie-grid-cell';
            cell.dataset.row = row;
            cell.dataset.col = col;
            
            cell.innerHTML = `
                <div style="display: flex; gap: 4px; align-items: center;">
                    <input type="text" class="zombie-type-select" list="zombiePoolList" data-row="${row}" data-col="${col}" value="${cellData.type}" style="flex: 1; min-width: 80px; background-color: #484848; color: #ffffff; border: 1px solid #484848; border-radius: 2px; font-weight: bold; font-size: 11px;" />
                    <input type="checkbox" class="zombie-pf-check" data-row="${row}" data-col="${col}" ${cellData.plantfood ? 'checked' : ''}>
                </div>
            `;
            
            cellsWrapper.appendChild(cell);
        }
        
        rowContainer.appendChild(cellsWrapper);
        gridDiv.appendChild(rowContainer);
    }
    
    spawnedContainer.appendChild(gridDiv);
    
    // Render coordinate mode
    renderZombieCoordinateMode(choiceDiv);
    
    // Attach event listeners (use input event for better performance)
    gridDiv.querySelectorAll('.zombie-type-select').forEach(input => {
        input.addEventListener('change', (e) => {
            const row = parseInt(e.target.dataset.row);
            const col = parseInt(e.target.dataset.col);
            spawnedContainer.zombieGrid[row][col].type = e.target.value;
            attachChangeListeners(choiceDiv);
        });
    });
    
    gridDiv.querySelectorAll('.zombie-pf-check').forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            const row = parseInt(e.target.dataset.row);
            const col = parseInt(e.target.dataset.col);
            spawnedContainer.zombieGrid[row][col].plantfood = e.target.checked;
            attachChangeListeners(choiceDiv);
        });
    });
}

// Render coordinate mode
function renderZombieCoordinateMode(choiceDiv) {
    const spawnedContainer = choiceDiv.querySelector('[data-spawned-container="true"]');
    
    if (!spawnedContainer.zombieCoordinates) {
        spawnedContainer.zombieCoordinates = [];
    }
    
    // Remove old coordinate mode div if it exists
    const oldCoordDiv = spawnedContainer.querySelector('.zombie-coordinate-mode');
    if (oldCoordDiv) {
        oldCoordDiv.remove();
    }
    
    const coordDiv = document.createElement('div');
    coordDiv.className = 'zombie-coordinate-mode';
    coordDiv.style.maxHeight = '300px';
    coordDiv.style.overflowY = 'auto';
    coordDiv.style.marginTop = '10px';
    coordDiv.style.padding = '8px';
    coordDiv.style.backgroundColor = '#1a1a1a';
    coordDiv.style.borderRadius = '3px';
    // Add scrollbar styling
    coordDiv.style.scrollbarWidth = 'thin';
    coordDiv.style.scrollbarColor = '#484848 #1a1a1a';
    
    const header = document.createElement('div');
    header.className = 'zombie-coordinate-mode-header';
    header.textContent = 'Advanced: Custom Coordinates';
    header.style.marginBottom = '8px';
    header.style.fontWeight = 'bold';
    header.style.fontSize = '12px';
    coordDiv.appendChild(header);
    
    spawnedContainer.zombieCoordinates.forEach((coord, idx) => {
        // Skip poof zombies - they are managed by checkboxes
        if (coord.type === 'carnie_poof') return;
        
        const itemDiv = document.createElement('div');
        itemDiv.className = 'zombie-coord-item';
        itemDiv.dataset.coordIdx = idx;
        itemDiv.style.display = 'flex';
        itemDiv.style.gap = '4px';
        itemDiv.style.marginBottom = '6px';
        itemDiv.style.alignItems = 'center';
        
        itemDiv.innerHTML = `
            <input type="text" class="zombie-coord-type" list="zombiePoolList" data-coord-idx="${idx}" value="${coord.type}" style="flex: 1; min-width: 80px; padding: 4px; background-color: #484848; color: #ffffff; border: 1px solid #484848; border-radius: 2px; font-weight: bold; font-size: 11px;">
            <input type="number" class="zombie-coord-x" data-coord-idx="${idx}" placeholder="X" value="${coord.x || 0}" style="width: 50px; padding: 4px; background-color: #484848; color: #ffffff; border: 1px solid #484848; border-radius: 2px; font-weight: bold; font-size: 11px;">
            <input type="number" class="zombie-coord-y" data-coord-idx="${idx}" placeholder="Y" value="${coord.y || 0}" style="width: 50px; padding: 4px; background-color: #484848; color: #ffffff; border: 1px solid #484848; border-radius: 2px; font-weight: bold; font-size: 11px;">
            <input type="checkbox" class="zombie-coord-pf" data-coord-idx="${idx}" ${coord.plantfood ? 'checked' : ''} title="Plantfood" style="width: 18px; height: 18px;">
            <button class="secondary" style="padding: 4px 8px; font-size: 10px;" onclick="removeCoordinateZombie(${idx}, event)">×</button>
        `;
        
        coordDiv.appendChild(itemDiv);
    });
    
    const addBtn = document.createElement('button');
    addBtn.textContent = '+ Add Coordinate Zombie';
    addBtn.style.fontSize = '11px';
    addBtn.style.padding = '6px 10px';
    addBtn.style.marginTop = '8px';
    addBtn.onclick = (e) => addCoordinateZombie(choiceDiv, e);
    coordDiv.appendChild(addBtn);
    
    spawnedContainer.appendChild(coordDiv);
    
    // Attach event listeners
    coordDiv.querySelectorAll('.zombie-coord-type').forEach(input => {
        input.addEventListener('change', (e) => {
            const idx = parseInt(e.target.dataset.coordIdx);
            spawnedContainer.zombieCoordinates[idx].type = e.target.value;
            attachChangeListeners(choiceDiv);
        });
    });
    
    coordDiv.querySelectorAll('.zombie-coord-x').forEach(input => {
        input.addEventListener('change', (e) => {
            const idx = parseInt(e.target.dataset.coordIdx);
            spawnedContainer.zombieCoordinates[idx].x = parseFloat(e.target.value) || 0;
            attachChangeListeners(choiceDiv);
        });
    });
    
    coordDiv.querySelectorAll('.zombie-coord-y').forEach(input => {
        input.addEventListener('change', (e) => {
            const idx = parseInt(e.target.dataset.coordIdx);
            spawnedContainer.zombieCoordinates[idx].y = parseFloat(e.target.value) || 0;
            attachChangeListeners(choiceDiv);
        });
    });
    
    coordDiv.querySelectorAll('.zombie-coord-pf').forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            const idx = parseInt(e.target.dataset.coordIdx);
            spawnedContainer.zombieCoordinates[idx].plantfood = e.target.checked;
            attachChangeListeners(choiceDiv);
        });
    });
}

// Add coordinate zombie
function addCoordinateZombie(choiceDiv, e) {
    const spawnedContainer = choiceDiv.querySelector('[data-spawned-container="true"]');
    
    if (!spawnedContainer.zombieCoordinates) {
        spawnedContainer.zombieCoordinates = [];
    }
    
    // Add new coordinate zombie
    spawnedContainer.zombieCoordinates.push({
        type: '',
        x: 0,
        y: 0,
        plantfood: false
    });
    
    // Re-render coordinate mode
    renderZombieCoordinateMode(choiceDiv);
    attachChangeListeners(choiceDiv);
}

// Remove coordinate zombie
function removeCoordinateZombie(idx, event) {
    event.preventDefault();
    event.stopPropagation();
    
    const button = event.target;
    const choiceDiv = button.closest('.choice-group');
    const spawnedContainer = choiceDiv.querySelector('[data-spawned-container="true"]');
    
    if (spawnedContainer.zombieCoordinates) {
        spawnedContainer.zombieCoordinates.splice(idx, 1);
        renderZombieCoordinateMode(choiceDiv);
        attachChangeListeners(choiceDiv);
    }
}

// Toggle poof for a specific row
function togglePoofForRow(choiceDiv, row, coords, event) {
    event.preventDefault();
    event.stopPropagation();
    
    const spawnedContainer = choiceDiv.querySelector('[data-spawned-container="true"]');
    
    // Check if poof already exists for this row
    const poofIdx = spawnedContainer.zombieCoordinates.findIndex(z => 
        z.type === 'carnie_poof' && z.x === coords.x && z.y === coords.y
    );
    
    if (poofIdx !== -1) {
        // Remove poof
        spawnedContainer.zombieCoordinates.splice(poofIdx, 1);
    } else {
        // Add poof
        spawnedContainer.zombieCoordinates.push({
            type: 'carnie_poof',
            x: coords.x,
            y: coords.y,
            plantfood: false
        });
    }
    
}

// Toggle help
function toggleHelp() {
    const helpContent = document.getElementById('helpContent');
    const isHidden = helpContent.style.maxHeight === '0px';
    helpContent.style.maxHeight = isHidden ? '500px' : '0px';
    helpContent.style.overflow = 'hidden';
    helpContent.style.transition = 'max-height 0.3s ease';
}

// Toggle pattern tutorial
function togglePatternTutorial(event) {
    event.stopPropagation();
    const waveDiv = event.target.closest('.wave-container');
    const tutorial = waveDiv.querySelector('.pattern-tutorial');
    if (tutorial) {
        tutorial.style.display = tutorial.style.display === 'none' ? 'block' : 'none';
    }
}

// Add plant to seedbank
function addPlant() {
    const plantsContainer = document.getElementById('plantsContainer');
    const plantNumber = plantsContainer.querySelectorAll('[data-plant-item]').length + 1;
    
    const plantDiv = document.createElement('div');
    plantDiv.dataset.plantItem = 'true';
    plantDiv.draggable = true;
    plantDiv.className = 'draggable-item';
    plantDiv.style.marginBottom = '10px';
    plantDiv.style.padding = '8px';
    plantDiv.style.backgroundColor = '#44150E';
    plantDiv.style.borderRadius = '3px';
    plantDiv.style.color = '#F9A44B';
    plantDiv.style.border = '1px solid #99381F';
    
    plantDiv.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; cursor: grab; user-select: none;">
            <span style="font-size: 12px; font-weight: bold;">☰ Plant ${plantNumber}</span>
            <button class="danger" style="padding: 3px 6px; font-size: 10px;" onclick="this.closest('[data-plant-item]').remove(); generateJSON();">Remove</button>
        </div>
        
        <div style="display: grid; grid-template-columns: 1fr; gap: 8px;">
            <div>
                <label style="font-size: 12px;background-color: #99381F;padding: 5px;color: #FF9999;">Plant Type</label>
                <input list="plantTypesList" class="plantType" value="peashooter" style="font-size: 12px;font-weight: bold;background-color: #662815;color: white;border: dashed 1px #991F1F;border-radius: 3px;padding: 6px;width: 100%;" />
                <datalist id="plantTypesList"></datalist>
            </div>
        </div>
    `;
    
    plantsContainer.appendChild(plantDiv);
    attachChangeListeners(plantDiv);
    attachDragHandlers(plantDiv, plantsContainer);
    
    // Populate datalist if not already done
    const plantsList = document.getElementById('plantTypesList');
    if (!plantsList.innerHTML) {
        plantsList.innerHTML = PLANT_TYPES.map(p => `<option value="${p}"></option>`).join('');
    }
}

// Helper function to attach change listeners to dynamically created elements
function attachChangeListeners(element) {
    const inputs = element.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('change', generateJSON);
        input.addEventListener('input', generateJSON);
    });
}

// Add Module Definition
function addModuleDefinition() {
    const moduleDefsContainer = document.getElementById('moduleDefinitionsContainer');
    const moduleDefNumber = moduleDefsContainer.querySelectorAll('[data-moduledef-item]').length + 1;
    
    const moduleDefDiv = document.createElement('div');
    moduleDefDiv.setAttribute('data-moduledef-item', moduleDefNumber);
    moduleDefDiv.draggable = true;
    moduleDefDiv.className = 'draggable-item';
    moduleDefDiv.style.marginBottom = '10px';
    moduleDefDiv.style.padding = '8px';
    moduleDefDiv.style.backgroundColor = '#44150E';
    moduleDefDiv.style.borderRadius = '3px';
    moduleDefDiv.style.color = '#F9A44B';
    moduleDefDiv.style.border = '1px solid #99381F';
    
    moduleDefDiv.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; cursor: grab; user-select: none;">
            <span style="font-size: 12px; font-weight: bold;">☰ Module Definition ${moduleDefNumber}</span>
            <button class="danger" style="padding: 3px 6px; font-size: 10px;" onclick="this.closest('[data-moduledef-item]').remove(); generateJSON();">Remove</button>
        </div>
        <textarea class="moduleDefCode" placeholder='{"aliases":["MyModule"],"objclass":"...","objdata":{...}}' style="width: 100%; height: 150px; padding: 6px; font-size: 11px; font-family: monospace; background-color: #662815; color: #FF9999; border: dashed 1px #991F1F; border-radius: 3px;"></textarea>
    `;
    
    moduleDefsContainer.appendChild(moduleDefDiv);
    attachChangeListeners(moduleDefDiv);
    attachDragHandlers(moduleDefDiv, moduleDefsContainer);
}

// Add Level Module
function addModule() {
    const modulesContainer = document.getElementById('modulesContainer');
    const moduleNumber = modulesContainer.querySelectorAll('[data-module-item]').length + 1;
    
    const moduleDiv = document.createElement('div');
    moduleDiv.setAttribute('data-module-item', moduleNumber);
    moduleDiv.draggable = true;
    moduleDiv.className = 'draggable-item';
    moduleDiv.style.marginBottom = '10px';
    moduleDiv.style.padding = '8px';
    moduleDiv.style.backgroundColor = '#44150E';
    moduleDiv.style.borderRadius = '3px';
    moduleDiv.style.color = '#F9A44B';
    moduleDiv.style.border = '1px solid #99381F';
    
    moduleDiv.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; cursor: grab; user-select: none;">
            <span style="font-size: 12px; font-weight: bold;">☰ Module ${moduleNumber}</span>
            <button class="danger" style="padding: 3px 6px; font-size: 10px;" onclick="this.closest('[data-module-item]').remove(); generateJSON();">Remove</button>
        </div>
        <input type="text" class="moduleName" placeholder="e.g., RTID(StandardIntro@LevelModules)" value="" style="width: 100%; padding: 6px; font-size: 12px; font-weight: bold; background-color: #662815; color: #FF9999; border: dashed 1px #991F1F; border-radius: 3px;" />
    `;
    
    modulesContainer.appendChild(moduleDiv);
    attachChangeListeners(moduleDiv);
    attachDragHandlers(moduleDiv, modulesContainer);
}

// Add Resource Group
function addResourceGroup() {
    const resourceGroupsContainer = document.getElementById('resourceGroupsContainer');
    const resourceGroupNumber = resourceGroupsContainer.querySelectorAll('[data-resourcegroup-item]').length + 1;
    
    const resourceGroupDiv = document.createElement('div');
    resourceGroupDiv.setAttribute('data-resourcegroup-item', resourceGroupNumber);
    resourceGroupDiv.draggable = true;
    resourceGroupDiv.className = 'draggable-item';
    resourceGroupDiv.style.marginBottom = '10px';
    resourceGroupDiv.style.padding = '8px';
    resourceGroupDiv.style.backgroundColor = '#44150E';
    resourceGroupDiv.style.borderRadius = '3px';
    resourceGroupDiv.style.color = '#F9A44B';
    resourceGroupDiv.style.border = '1px solid #99381F';
    
    resourceGroupDiv.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; cursor: grab; user-select: none;">
            <span style="font-size: 12px; font-weight: bold;">☰ Resource Group ${resourceGroupNumber}</span>
            <button class="danger" style="padding: 3px 6px; font-size: 10px;" onclick="this.closest('[data-resourcegroup-item]').remove(); generateJSON();">Remove</button>
        </div>
        <input type="text" class="resourceGroupName" placeholder="e.g., DelayLoad_Background_Beach" value="" style="width: 100%; padding: 6px; font-size: 12px; font-weight: bold; background-color: #662815; color: #FF9999; border: dashed 1px #991F1F; border-radius: 3px;" />
    `;
    
    resourceGroupsContainer.appendChild(resourceGroupDiv);
    attachChangeListeners(resourceGroupDiv);
    attachDragHandlers(resourceGroupDiv, resourceGroupsContainer);
}

// Randomise (shuffle) items in the second list
function randomisePatternList(listEl) {
    const items = Array.from(listEl.querySelectorAll('[data-second-item]'));
    for (let i = items.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [items[i], items[j]] = [items[j], items[i]];
    }
    items.forEach(item => listEl.appendChild(item));
}

// Add first position
function addFirstPosition(patternEl, defaultValue = 0, skipSecondAdd = false) {
    const list = patternEl.querySelector('.pattern-first-list');
    const secondList = patternEl.querySelector('.pattern-second-list');
    const itemNum = list.querySelectorAll('[data-first-item]').length + 1;
    
    const item = document.createElement('div');
    item.setAttribute('data-first-item', itemNum);
    item.className = 'pattern-first-item';
    item.innerHTML = `
        <span class="drag-handle">☰</span>
        <input type="number" value="${defaultValue}" min="-1">
        <button onclick="removeFirstAndSecondPosition(this.closest('[data-pattern-item]'), this.closest('[data-first-item]'));">✕</button>
    `;
    
    item.draggable = true;
    item.addEventListener('dragstart', (e) => {
        item.classList.add('dragging');
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('position-value', item.querySelector('input').value);
    });
    
    item.addEventListener('dragend', (e) => {
        item.classList.remove('dragging');
    });
    
    list.appendChild(item);
    
    // Auto-add corresponding item to second list unless caller requests skip
    if (!skipSecondAdd) {
        const secondItemNum = secondList.querySelectorAll('[data-second-item]').length + 1;
        if (secondItemNum <= itemNum) {
            addSecondPosition(patternEl, defaultValue);
        }
    }
    
    // Check if all Second values are -1 to show custom positions
    checkAndShowCustomPositions(patternEl);
    
    // Add dragover handler to list only once
    if (!list.dataset.dragoverAttached) {
        list.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
            const draggingItem = list.querySelector('.dragging');
            const afterElement = getFirstDragAfterElement(list, e.clientX);
            if (afterElement == null) {
                list.appendChild(draggingItem);
            } else {
                list.insertBefore(draggingItem, afterElement);
            }
        });
        list.dataset.dragoverAttached = 'true';
    }
}

// Remove item from first AND corresponding item from second
function removeFirstAndSecondPosition(patternEl, firstItem) {
    const firstList = patternEl.querySelector('.pattern-first-list');
    const secondList = patternEl.querySelector('.pattern-second-list');
    const firstItems = Array.from(firstList.querySelectorAll('[data-first-item]'));
    const indexToRemove = firstItems.indexOf(firstItem);
    
    if (indexToRemove >= 0) {
        firstItem.remove();
        const secondItems = Array.from(secondList.querySelectorAll('[data-second-item]'));
        if (secondItems[indexToRemove]) {
            secondItems[indexToRemove].remove();
        }
    }
    
    checkAndShowCustomPositions(patternEl);
    ensureFirstSecondParity(patternEl);
}

// Add second position
function addSecondPosition(patternEl, defaultValue = 0) {
    const list = patternEl.querySelector('.pattern-second-list');
    const itemNum = list.querySelectorAll('[data-second-item]').length + 1;
    
    const item = document.createElement('div');
    item.setAttribute('data-second-item', itemNum);
    item.className = 'pattern-second-item';
    item.innerHTML = `
        <span class="drag-handle">☰</span>
        <input type="number" value="${defaultValue}" min="-1" onchange="checkAndShowCustomPositions(this.closest('[data-pattern-item]'))">
    `;
    
    item.draggable = true;
    item.addEventListener('dragstart', (e) => {
        item.classList.add('dragging');
        e.dataTransfer.effectAllowed = 'move';
    });
    
    item.addEventListener('dragend', (e) => {
        item.classList.remove('dragging');
    });
    
    list.appendChild(item);
    
    // Add dragover handler to list only once
    if (!list.dataset.dragoverAttached) {
        list.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
            const draggingItem = list.querySelector('.dragging');
            const afterElement = getSecondDragAfterElement(list, e.clientX);
            if (afterElement == null) {
                list.appendChild(draggingItem);
            } else {
                list.insertBefore(draggingItem, afterElement);
            }
        });
        list.dataset.dragoverAttached = 'true';
    }
}

function getSecondDragAfterElement(container, x) {
    const draggableElements = [...container.querySelectorAll('[data-second-item]:not(.dragging)')];
    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = x - box.left - box.width / 2;
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

// Check if all Second values are -1 and show custom positions editor
function checkAndShowCustomPositions(patternEl) {
    const secondItems = Array.from(patternEl.querySelectorAll('[data-second-item]'));
    const allNegativeOne = secondItems.every(item => {
        const value = parseInt(item.querySelector('input').value);
        return value === -1;
    });
    
    const customSection = patternEl.querySelector('.custom-positions-section');
    if (customSection) {
        if (allNegativeOne && secondItems.length > 0) {
            customSection.style.display = 'block';
            // Ensure we have the right number of custom position inputs
            ensureCustomPositionInputs(customSection, secondItems.length);
        } else {
            customSection.style.display = 'none';
        }
    }
}

// Ensure custom position inputs match hat count
function ensureCustomPositionInputs(customSection, hatCount) {
    const existing = customSection.querySelectorAll('[data-custom-index]');
    
    // Remove extra inputs
    while (existing.length > hatCount) {
        existing[existing.length - 1].remove();
        existing.length--;
    }
    
    // Add missing inputs
    for (let i = existing.length; i < hatCount; i++) {
        const customDiv = document.createElement('div');
        customDiv.style.marginBottom = '10px';
        customDiv.style.padding = '8px';
        customDiv.style.backgroundColor = '#0f0f0f';
        customDiv.style.borderRadius = '3px';
        customDiv.setAttribute('data-custom-index', i);
        customDiv.innerHTML = `
            <div style="font-size: 11px; font-weight: bold; margin-bottom: 5px;">Hat ${i + 1} Custom Position</div>
            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 6px;">
                <div>
                    <label style="font-size: 10px;">X</label>
                    <input type="number" class="custom-x" value="0" step="1">
                </div>
                <div>
                    <label style="font-size: 10px;">Y</label>
                    <input type="number" class="custom-y" value="0" step="1">
                </div>
                <div>
                    <label style="font-size: 10px;">Z</label>
                    <input type="number" class="custom-z" value="0" step="1">
                </div>
            </div>
        `;
        customSection.appendChild(customDiv);
    }
}

// Ensure First and Second lists have matching item counts
function ensureFirstSecondParity(patternEl) {
    const firstList = patternEl.querySelector('.pattern-first-list');
    const secondList = patternEl.querySelector('.pattern-second-list');
    if (!firstList || !secondList) return;

    const firstItems = Array.from(firstList.querySelectorAll('[data-first-item]'));
    let secondItems = Array.from(secondList.querySelectorAll('[data-second-item]'));

    const firstCount = firstItems.length;

    // If second has more items than first, remove extras from the end
    while (secondItems.length > firstCount) {
        const rem = secondItems.pop();
        rem.remove();
    }

    // If second has fewer items than first, add missing items copying first values
    for (let i = secondItems.length; i < firstCount; i++) {
        const val = parseInt(firstItems[i].querySelector('input').value) || i;
        addSecondPosition(patternEl, val);
    }

    // Reindex attributes to be consistent
    Array.from(firstList.querySelectorAll('[data-first-item]')).forEach((el, idx) => el.setAttribute('data-first-item', idx + 1));
    Array.from(secondList.querySelectorAll('[data-second-item]')).forEach((el, idx) => el.setAttribute('data-second-item', idx + 1));
}

function getFirstDragAfterElement(container, x) {
    const draggableElements = [...container.querySelectorAll('[data-first-item]:not(.dragging)')];
    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = x - box.left - box.width / 2;
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}