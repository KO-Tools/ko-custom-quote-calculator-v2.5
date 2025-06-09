// Calculator Data - Updated from CSV
const CALCULATOR_DATA = {
    baseGummyCosts: {
        "3.5g": 0.0368,  // Combined 3.5g/4g option
        "7.5g": 0.0744,
        "11g": 0.0886
    },
    
    cannabinoidCosts: {
        d8: 0.0005,
        hhc: 0.0006,
        hhcp: 0.011,    // Using PRD value as CSV doesn't have HHC-p
        thcp: 0.0075,
        thcv: 0.0090,
        thcaRosin: 0.022,  // Using PRD value
        thcaIsolate: 0.0025,
        d10: 0.0007,    // Using PRD value
        fullSpec: 0.0003,
        cbdIsolate: 0.0004,
        cbg: 0.0008,
        cbdNano: 0.0050,
        cbdLiveResin: 0.0035,
        cbnNano: 0.0044,  // Using PRD value
        bscbd: 0.0004,
        cbn: 0.0013,
        d9c: 0.0008,
        d9ml: 0.0006,   // Using PRD value
        d9Nano: 0.0090,
        cbda: 0.0019,
        cbga: 0.0011,   // Using PRD value
        cbt: 0.0085,    // Using PRD value
        cbc: 0.0045
    },
    
    supplementCosts: {
        alphaGpc: 0.00011,
        appleCiderVinegar: 0.00003,
        ashwagandha: 0.00004,
        fiveHtp: 0.00060,
        baobabPowder: 0.00005,
        beetRootPowder: 0.00002,
        caffeine: 0.00006,
        chamomile: 0.00002,
        echinacea: 0.00004,
        elderberryExtract: 0.0005,
        ginsengRoot: 0.00004,
        greenCoffeeBean: 0.00004,
        greenTeaPowder: 0.00004,
        guaranaExtract: 0.00005,
        hornyGoat: 0.00004,
        lCitrulline: 0.00004,
        lTheanine: 0.00006,
        lemonBalm: 0.00003,
        lTyrosine: 0.00004,
        macaRoot: 0.00004,
        magnesiumCitrate: 0.00002,
        melatonin: 0.00060,
        muiraPuama: 0.00004,
        muscimol: 0.00500,
        chagaMushroom: 0.00004,
        cordycepsMushroom: 0.00004,
        lionsManeMushroom: 0.00004,
        reishiMushroom: 0.00004,
        niacinB3: 0.00003,
        passionFlower: 0.00005,
        pineBarkExtract: 0.00004,
        potassiumChloride: 0.00002,
        raspberryKetone: 0.00007,
        rosehip: 0.00003,
        saffron: 0.00640,
        seamossPowder: 0.00004,
        soursop: 0.00004,
        taurine: 0.00003,
        tribulusTerrestris: 0.00004,
        sativaTerpsLarge: 0.00889,
        hybridTerpsLarge: 0.00889,
        indicaTerpsLarge: 0.00889,
        sativaTerpsSmall: 0.00435,
        hybridTerpsSmall: 0.00435,
        indicaTerpsSmall: 0.00435,
        turmeric: 0.0001,
        valerianRoot: 0.0001,
        vitaminB6: 0.0001,
        vitaminB12: 0.00077,
        vitaminC: 0.00002,
        vitaminD: 0.00005,
        yerbaMate: 0.00004,
        zinc: 0.00006
    },
    
    packagingCosts: {
        label: 0.40,
        jar: 0.60,
        processing: 1.00
    },
    
    moqPerFlavor: {
        "3.5g": 4400,  // Combined 3.5g/4g option
        "7.5g": 2250,
        "11g": 2250
    },
    
    markupFactors: {
        "Up to 10k": 4,
        "10k-25k": 3.5,
        "25k-50k": 3,
        "50k-100k": 2.5,
        "Over 100k": 2
    }
};

// Cannabinoid display names and data mapping
const CANNABINOID_DISPLAY = [
    { label: "D8:", dataType: "d8" },
    { label: "HHC:", dataType: "hhc" },
    { label: "HHC-p:", dataType: "hhcp" },
    { label: "THC-p:", dataType: "thcp" },
    { label: "THC-v:", dataType: "thcv" },
    { label: "THCa Rosin:", dataType: "thcaRosin" },
    { label: "THCa Isolate:", dataType: "thcaIsolate" },
    { label: "D10 - 78%:", dataType: "d10" },
    { label: "Full Spec:", dataType: "fullSpec" },
    { label: "CBD Isolate:", dataType: "cbdIsolate" },
    { label: "CBG:", dataType: "cbg" },
    { label: "CBD Nano:", dataType: "cbdNano" },
    { label: "CBD - Live Resin:", dataType: "cbdLiveResin" },
    { label: "CBN Nano:", dataType: "cbnNano" },
    { label: "BSCBD:", dataType: "bscbd" },
    { label: "CBN:", dataType: "cbn" },
    { label: "D9 C:", dataType: "d9c" },
    { label: "D9 ML:", dataType: "d9ml" },
    { label: "D9 Nano:", dataType: "d9Nano" },
    { label: "CBDa:", dataType: "cbda" },
    { label: "CBGa:", dataType: "cbga" },
    { label: "CBT:", dataType: "cbt" },
    { label: "CBC:", dataType: "cbc" }
];

// Supplement display names and data mapping
const SUPPLEMENT_DISPLAY = [
    { label: "Alpha-GPC", dataType: "alphaGpc" },
    { label: "Apple Cider Vinegar Powder", dataType: "appleCiderVinegar" },
    { label: "Ashwagandha", dataType: "ashwagandha" },
    { label: "5-HTP", dataType: "fiveHtp" },
    { label: "Baobab Powder", dataType: "baobabPowder" },
    { label: "Beet Root Powder", dataType: "beetRootPowder" },
    { label: "Caffeine Powder", dataType: "caffeine" },
    { label: "Chamomile", dataType: "chamomile" },
    { label: "Echinacea", dataType: "echinacea" },
    { label: "Elderberry Extract", dataType: "elderberryExtract" },
    { label: "Ginseng Root Powder", dataType: "ginsengRoot" },
    { label: "Green Coffee Bean Extract", dataType: "greenCoffeeBean" },
    { label: "Green Tea Powder", dataType: "greenTeaPowder" },
    { label: "Guarana Extract", dataType: "guaranaExtract" },
    { label: "Horny Goat", dataType: "hornyGoat" },
    { label: "L-Citrulline", dataType: "lCitrulline" },
    { label: "L-Theanine", dataType: "lTheanine" },
    { label: "Lemon Balm", dataType: "lemonBalm" },
    { label: "L-Tyrosine", dataType: "lTyrosine" },
    { label: "Maca Root", dataType: "macaRoot" },
    { label: "Magnesium Citrate", dataType: "magnesiumCitrate" },
    { label: "Melatonin", dataType: "melatonin" },
    { label: "Muira Puama", dataType: "muiraPuama" },
    { label: "Muscimol", dataType: "muscimol" },
    { label: "Mushrooms - Chaga", dataType: "chagaMushroom" },
    { label: "Mushrooms - Cordyceps", dataType: "cordycepsMushroom" },
    { label: "Mushrooms - Lions Mane", dataType: "lionsManeMushroom" },
    { label: "Mushrooms - Reishi", dataType: "reishiMushroom" },
    { label: "Niacin B3", dataType: "niacinB3" },
    { label: "Passion Flower", dataType: "passionFlower" },
    { label: "Pine Bark Extract", dataType: "pineBarkExtract" },
    { label: "Potassium Chloride", dataType: "potassiumChloride" },
    { label: "Raspberry Ketone", dataType: "raspberryKetone" },
    { label: "Rosehip", dataType: "rosehip" },
    { label: "Saffron", dataType: "saffron" },
    { label: "Seamoss Powder", dataType: "seamossPowder" },
    { label: "Soursop", dataType: "soursop" },
    { label: "Taurine", dataType: "taurine" },
    { label: "Tribulus Terrestris", dataType: "tribulusTerrestris" },
    { label: "Sativa Terps - Large Gummy", dataType: "sativaTerpsLarge" },
    { label: "Hybrid Terps - Large Gummy", dataType: "hybridTerpsLarge" },
    { label: "Indica Terps - Large Gummy", dataType: "indicaTerpsLarge" },
    { label: "Sativa Terps - Small Gummy", dataType: "sativaTerpsSmall" },
    { label: "Hybrid Terps - Small Gummy", dataType: "hybridTerpsSmall" },
    { label: "Indica Terps - Small Gummy", dataType: "indicaTerpsSmall" },
    { label: "Turmeric", dataType: "turmeric" },
    { label: "Valerian Root", dataType: "valerianRoot" },
    { label: "Vitamin B6", dataType: "vitaminB6" },
    { label: "Vitamin B12", dataType: "vitaminB12" },
    { label: "Vitamin C", dataType: "vitaminC" },
    { label: "Vitamin D", dataType: "vitaminD" },
    { label: "Yerba Mate", dataType: "yerbaMate" },
    { label: "Zinc", dataType: "zinc" }
];

// GummyCalculator Class
class GummyCalculator {
    constructor() {
        this.gummyType = "3.5g";
        this.gummyQuantity = 4400;
        this.cannabinoids = {};
        this.supplements = [];
        this.orderVolume = 4;
        this.gummiesPerPackage = 30;
        this.packaging = {
            label: true,
            jar: true,
            processing: true
        };
    }

    // Update gummy type and adjust quantity if needed
    setGummyType(type) {
        this.gummyType = type;
        const moq = CALCULATOR_DATA.moqPerFlavor[type];
        if (this.gummyQuantity < moq) {
            this.gummyQuantity = moq;
        } else {
            this.validateAndAdjustQuantity();
        }
    }

    // Validate and adjust quantity based on MOQ and increments
    validateAndAdjustQuantity() {
        const moq = CALCULATOR_DATA.moqPerFlavor[this.gummyType];
        const increment = (this.gummyType === "3.5g") ? 440 : 225;
        
        if (this.gummyQuantity < moq) {
            this.gummyQuantity = moq;
        } else {
            const excess = (this.gummyQuantity - moq) % increment;
            if (excess > 0) {
                this.gummyQuantity += (increment - excess);
            }
        }
    }

    // Set quantity with validation
    setQuantity(quantity) {
        this.gummyQuantity = Math.max(1, quantity);
        this.validateAndAdjustQuantity();
    }

    // Set cannabinoid amount
    setCannabinoid(type, amount) {
        if (amount > 0) {
            this.cannabinoids[type] = amount;
        } else {
            delete this.cannabinoids[type];
        }
    }

    // Add supplement
    addSupplement(type, amount) {
        this.supplements.push({ type, amount });
    }

    // Remove supplement
    removeSupplement(index) {
        this.supplements.splice(index, 1);
    }

    // Set order volume markup
    setOrderVolume(markup) {
        this.orderVolume = markup;
    }

    // Set gummies per package
    setGummiesPerPackage(count) {
        this.gummiesPerPackage = Math.max(1, count);
    }

    // Set packaging options
    setPackaging(option, enabled) {
        this.packaging[option] = enabled;
    }

    // Calculate base gummy cost per gummy
    getBaseGummyCost() {
        return CALCULATOR_DATA.baseGummyCosts[this.gummyType] || 0;
    }

    // Calculate medicine cost per gummy
    getMedicineCost() {
        let total = 0;
        for (const [type, amount] of Object.entries(this.cannabinoids)) {
            const cost = CALCULATOR_DATA.cannabinoidCosts[type] || 0;
            total += amount * cost;
        }
        return total;
    }

    // Calculate supplement cost per gummy
    getSupplementCost() {
        let total = 0;
        for (const supplement of this.supplements) {
            const cost = CALCULATOR_DATA.supplementCosts[supplement.type] || 0;
            total += supplement.amount * cost;
        }
        return total;
    }

    // Calculate total cost per gummy (to KO)
    getTotalCostPerGummy() {
        return this.getBaseGummyCost() + this.getMedicineCost() + this.getSupplementCost();
    }

    // Calculate total cost to KO (entire order)
    getTotalCostToKO() {
        return this.getTotalCostPerGummy() * this.gummyQuantity;
    }

    // Calculate customer cost per gummy
    getCustomerCostPerGummy() {
        return this.getTotalCostPerGummy() * this.orderVolume;
    }

    // Calculate packaging cost per package
    getPackagingCost() {
        let total = 0;
        if (this.packaging.label) total += CALCULATOR_DATA.packagingCosts.label;
        if (this.packaging.jar) total += CALCULATOR_DATA.packagingCosts.jar;
        if (this.packaging.processing) total += CALCULATOR_DATA.packagingCosts.processing;
        return total;
    }

    // Calculate total per jar/package (customer price)
    getTotalPerJar() {
        return (this.getCustomerCostPerGummy() * this.gummiesPerPackage) + this.getPackagingCost();
    }

    // Calculate number of packages needed
    getNumberOfPackages() {
        return Math.ceil(this.gummyQuantity / this.gummiesPerPackage);
    }

    // Calculate total customer cost (entire order)
    getTotalCustomerCost() {
        return this.getTotalPerJar() * this.getNumberOfPackages();
    }

    // Get all calculation results
    getResults() {
        return {
            baseGummyCost: this.getBaseGummyCost(),
            medicineCost: this.getMedicineCost(),
            supplementCost: this.getSupplementCost(),
            totalCostPerGummy: this.getTotalCostPerGummy(),
            totalCostToKO: this.getTotalCostToKO(),
            customerCostPerGummy: this.getCustomerCostPerGummy(),
            packagingCost: this.getPackagingCost(),
            totalPerJar: this.getTotalPerJar(),
            numberOfPackages: this.getNumberOfPackages(),
            totalCustomerCost: this.getTotalCustomerCost()
        };
    }

    // Export current state
    exportState() {
        return {
            gummyType: this.gummyType,
            gummyQuantity: this.gummyQuantity,
            cannabinoids: { ...this.cannabinoids },
            supplements: [...this.supplements],
            orderVolume: this.orderVolume,
            gummiesPerPackage: this.gummiesPerPackage,
            packaging: { ...this.packaging }
        };
    }

    // Import state
    importState(state) {
        this.gummyType = state.gummyType || "3.5g";
        this.gummyQuantity = state.gummyQuantity || 4400;
        this.cannabinoids = state.cannabinoids || {};
        this.supplements = state.supplements || [];
        this.orderVolume = state.orderVolume || 4;
        this.gummiesPerPackage = state.gummiesPerPackage || 30;
        this.packaging = state.packaging || { label: true, jar: true, processing: true };
    }
}

// Global calculator instance
let calculator = new GummyCalculator();
let addedSupplements = [];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupEventListeners();
    generateCannabinoidInputs();
    populateSupplementDropdown();
    loadTheme();
    updateCalculations();
}

function setupEventListeners() {
    // Theme toggle
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
    
    // Collapsible sections
    document.querySelectorAll('.section-header').forEach(header => {
        header.addEventListener('click', toggleSection);
    });
    
    // Gummy type selection
    document.querySelectorAll('input[name="gummy-type"]').forEach(radio => {
        radio.addEventListener('change', handleGummyTypeChange);
    });
    
    // Quantity input
    document.getElementById('gummies-quantity').addEventListener('blur', handleQuantityChange);
    
    // Cannabinoid search
    document.getElementById('cannabinoid-search').addEventListener('input', filterCannabinoids);
    
    // Show more cannabinoids
    document.getElementById('show-more-cannabinoids').addEventListener('click', toggleCannabinoidVisibility);
    
    // Order volume
    document.getElementById('order-volume').addEventListener('change', handleOrderVolumeChange);
    
    // Gummies per package
    document.getElementById('gummies-per-package').addEventListener('change', handleGummiesPerPackageChange);
    
    // Packaging options
    document.getElementById('label-option').addEventListener('change', handlePackagingChange);
    document.getElementById('jar-option').addEventListener('change', handlePackagingChange);
    document.getElementById('processing-option').addEventListener('change', handlePackagingChange);
    
    // Supplement management
    document.getElementById('add-supplement-button').addEventListener('click', addSupplement);
    
    // Action buttons
    document.getElementById('generate-quote-button').addEventListener('click', showQuoteModal);
    document.getElementById('export-csv-button').addEventListener('click', exportCSV);
    document.getElementById('reset-button').addEventListener('click', resetCalculator);
    
    // Save/Load buttons
    document.getElementById('save-button').addEventListener('click', showSaveModal);
    document.getElementById('load-button').addEventListener('click', showLoadModal);
    
    // Modal close buttons
    document.querySelectorAll('.close-btn').forEach(btn => {
        btn.addEventListener('click', closeModals);
    });
    
    // Modal backdrop click
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModals();
            }
        });
    });
    
    // Save modal actions
    document.getElementById('confirm-save').addEventListener('click', saveCalculation);
    
    // Quote modal actions
    document.getElementById('view-quote-button').addEventListener('click', viewQuote);
    document.getElementById('download-quote-button').addEventListener('click', downloadQuote);
}

function toggleTheme() {
    const body = document.body;
    const icon = document.querySelector('#theme-toggle i');
    
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        icon.className = 'fas fa-sun';
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        icon.className = 'fas fa-moon';
        localStorage.setItem('theme', 'dark');
    }
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    const body = document.body;
    const icon = document.querySelector('#theme-toggle i');
    
    if (savedTheme === 'light') {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        icon.className = 'fas fa-sun';
    } else {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        icon.className = 'fas fa-moon';
    }
}

function toggleSection(e) {
    const header = e.currentTarget;
    const targetId = header.getAttribute('data-target');
    const content = document.getElementById(targetId);
    const icon = header.querySelector('i');
    
    if (content.classList.contains('collapsed')) {
        content.classList.remove('collapsed');
        header.classList.remove('collapsed');
        icon.className = 'fas fa-chevron-down';
    } else {
        content.classList.add('collapsed');
        header.classList.add('collapsed');
        icon.className = 'fas fa-chevron-right';
    }
}

function generateCannabinoidInputs() {
    const grid = document.getElementById('cannabinoid-grid');
    grid.innerHTML = '';
    
    CANNABINOID_DISPLAY.forEach((cannabinoid, index) => {
        const item = document.createElement('div');
        item.className = 'cannabinoid-item';
        if (index >= 8) {
            item.classList.add('hidden');
        }
        
        item.innerHTML = `
            <span class="cannabinoid-label">${cannabinoid.label}</span>
            <input type="number" class="cannabinoid-input" data-type="${cannabinoid.dataType}" min="0" value="0">
            <span class="cannabinoid-unit">mg</span>
        `;
        
        const input = item.querySelector('input');
        input.addEventListener('input', function() {
            handleCannabinoidChange(cannabinoid.dataType, parseFloat(this.value) || 0);
        });
        
        grid.appendChild(item);
    });
}

function populateSupplementDropdown() {
    const select = document.getElementById('supplement-select');
    
    SUPPLEMENT_DISPLAY.forEach(supplement => {
        const option = document.createElement('option');
        option.value = supplement.dataType;
        option.textContent = supplement.label;
        select.appendChild(option);
    });
}

function handleGummyTypeChange(e) {
    const newType = e.target.value;
    calculator.setGummyType(newType);
    document.getElementById('gummies-quantity').value = calculator.gummyQuantity;
    updateCalculations();
}

function handleQuantityChange(e) {
    const quantity = parseInt(e.target.value) || 1;
    calculator.setQuantity(quantity);
    e.target.value = calculator.gummyQuantity;
    updateCalculations();
}

function handleCannabinoidChange(type, amount) {
    calculator.setCannabinoid(type, amount);
    updateCalculations();
}

function filterCannabinoids() {
    const searchTerm = document.getElementById('cannabinoid-search').value.toLowerCase();
    const items = document.querySelectorAll('.cannabinoid-item');
    
    items.forEach(item => {
        const label = item.querySelector('.cannabinoid-label').textContent.toLowerCase();
        if (label.includes(searchTerm)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}

function toggleCannabinoidVisibility() {
    const button = document.getElementById('show-more-cannabinoids');
    const hiddenItems = document.querySelectorAll('.cannabinoid-item.hidden');
    
    if (hiddenItems.length > 0) {
        hiddenItems.forEach(item => item.classList.remove('hidden'));
        button.textContent = 'Show Less Cannabinoids';
    } else {
        const allItems = document.querySelectorAll('.cannabinoid-item');
        allItems.forEach((item, index) => {
            if (index >= 8) {
                item.classList.add('hidden');
            }
        });
        button.textContent = 'Show More Cannabinoids';
    }
}

function handleOrderVolumeChange(e) {
    calculator.setOrderVolume(parseFloat(e.target.value));
    updateCalculations();
}

function handleGummiesPerPackageChange(e) {
    calculator.setGummiesPerPackage(parseInt(e.target.value) || 1);
    updateCalculations();
}

function handlePackagingChange(e) {
    const option = e.target.id.replace('-option', '');
    calculator.setPackaging(option, e.target.checked);
    updateCalculations();
}

function addSupplement() {
    const select = document.getElementById('supplement-select');
    const quantityInput = document.getElementById('supplement-quantity');
    
    const supplementType = select.value;
    const quantity = parseFloat(quantityInput.value) || 0;
    
    if (!supplementType || quantity <= 0) {
        alert('Please select a supplement and enter a valid quantity.');
        return;
    }
    
    calculator.addSupplement(supplementType, quantity);
    updateSupplementsList();
    updateCalculations();
    
    // Reset form
    select.value = '';
    quantityInput.value = '0';
}

function removeSupplement(index) {
    calculator.removeSupplement(index);
    updateSupplementsList();
    updateCalculations();
}

function updateSupplementsList() {
    const list = document.getElementById('added-supplements-list');
    
    if (calculator.supplements.length === 0) {
        list.innerHTML = '<p class="no-supplements">No supplements added yet.</p>';
        return;
    }
    
    list.innerHTML = calculator.supplements.map((supplement, index) => {
        const displayName = SUPPLEMENT_DISPLAY.find(s => s.dataType === supplement.type)?.label || supplement.type;
        return `
            <div class="supplement-item">
                <div class="supplement-info">
                    <div class="supplement-name">${displayName}</div>
                    <div class="supplement-quantity">${supplement.amount} mg</div>
                </div>
                <button class="remove-btn" onclick="removeSupplement(${index})">&times;</button>
            </div>
        `;
    }).join('');
}

function updateCalculations() {
    const results = calculator.getResults();
    
    document.getElementById('total-packages').textContent = results.numberOfPackages;
    document.getElementById('total-customer-cost').textContent = formatCurrency(results.totalCustomerCost);
}

function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
}

function showSaveModal() {
    document.getElementById('modal-title').textContent = 'Save Calculation';
    document.getElementById('save-view').style.display = 'block';
    document.getElementById('load-view').style.display = 'none';
    document.getElementById('save-load-modal').classList.add('show');
}

function showLoadModal() {
    document.getElementById('modal-title').textContent = 'Load Calculation';
    document.getElementById('save-view').style.display = 'none';
    document.getElementById('load-view').style.display = 'block';
    populateSavedCalculations();
    document.getElementById('save-load-modal').classList.add('show');
}

function showQuoteModal() {
    document.getElementById('quote-modal').classList.add('show');
}

function closeModals() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.classList.remove('show');
    });
}

function saveCalculation() {
    const name = document.getElementById('save-name').value.trim();
    if (!name) {
        alert('Please enter a calculation name.');
        return;
    }
    
    const savedCalculations = JSON.parse(localStorage.getItem('savedCalculations') || '{}');
    savedCalculations[name] = calculator.exportState();
    localStorage.setItem('savedCalculations', JSON.stringify(savedCalculations));
    
    alert('Calculation saved successfully!');
    closeModals();
    document.getElementById('save-name').value = '';
}

function populateSavedCalculations() {
    const list = document.getElementById('saved-calculations-list');
    const savedCalculations = JSON.parse(localStorage.getItem('savedCalculations') || '{}');
    
    if (Object.keys(savedCalculations).length === 0) {
        list.innerHTML = '<p>No saved calculations found.</p>';
        return;
    }
    
    list.innerHTML = Object.keys(savedCalculations).map(name => `
        <div class="calculation-item">
            <span class="calculation-name">${name}</span>
            <div class="calculation-actions">
                <button class="load-calc-btn" onclick="loadCalculation('${name}')">Load</button>
                <button class="delete-calc-btn" onclick="deleteCalculation('${name}')">Delete</button>
            </div>
        </div>
    `).join('');
}

function loadCalculation(name) {
    const savedCalculations = JSON.parse(localStorage.getItem('savedCalculations') || '{}');
    if (savedCalculations[name]) {
        calculator.importState(savedCalculations[name]);
        updateUIFromCalculator();
        updateCalculations();
        alert('Calculation loaded successfully!');
        closeModals();
    }
}

function deleteCalculation(name) {
    if (confirm(`Are you sure you want to delete "${name}"?`)) {
        const savedCalculations = JSON.parse(localStorage.getItem('savedCalculations') || '{}');
        delete savedCalculations[name];
        localStorage.setItem('savedCalculations', JSON.stringify(savedCalculations));
        populateSavedCalculations();
    }
}

function updateUIFromCalculator() {
    // Update gummy type
    document.querySelector(`input[name="gummy-type"][value="${calculator.gummyType}"]`).checked = true;
    
    // Update quantity
    document.getElementById('gummies-quantity').value = calculator.gummyQuantity;
    
    // Update cannabinoids
    document.querySelectorAll('.cannabinoid-input').forEach(input => {
        const type = input.getAttribute('data-type');
        input.value = calculator.cannabinoids[type] || 0;
    });
    
    // Update order details
    document.getElementById('order-volume').value = calculator.orderVolume;
    document.getElementById('gummies-per-package').value = calculator.gummiesPerPackage;
    
    // Update packaging
    document.getElementById('label-option').checked = calculator.packaging.label;
    document.getElementById('jar-option').checked = calculator.packaging.jar;
    document.getElementById('processing-option').checked = calculator.packaging.processing;
    
    // Update supplements list
    updateSupplementsList();
}

function resetCalculator() {
    if (confirm('Are you sure you want to reset all inputs?')) {
        calculator = new GummyCalculator();
        updateUIFromCalculator();
        updateCalculations();
    }
}

function viewQuote() {
    const quoteData = collectQuoteData();
    const quoteHTML = generateQuoteHTML(quoteData);
    
    const newWindow = window.open('', '_blank');
    newWindow.document.write(quoteHTML);
    newWindow.document.close();
}

function downloadQuote() {
    const quoteData = collectQuoteData();
    const quoteHTML = generateQuoteHTML(quoteData);
    
    // Create a temporary element for PDF generation
    const element = document.createElement('div');
    element.innerHTML = quoteHTML;
    
    // Use browser's print functionality to save as PDF
    const newWindow = window.open('', '_blank');
    newWindow.document.write(quoteHTML);
    newWindow.document.close();
    setTimeout(() => {
        newWindow.print();
    }, 500);
}

function collectQuoteData() {
    return {
        customerName: document.getElementById('customer-name').value,
        customerEmail: document.getElementById('customer-email').value,
        customerCompany: document.getElementById('customer-company').value,
        customerPhone: document.getElementById('customer-phone').value,
        discount: parseFloat(document.getElementById('discount-percentage').value) || 0,
        additionalNotes: document.getElementById('additional-notes').value,
        date: new Date().toLocaleDateString(),
        calculator: calculator,
        results: calculator.getResults()
    };
}

function generateQuoteHTML(data) {
    const subtotal = data.results.totalCustomerCost;
    const discountAmount = subtotal * (data.discount / 100);
    const total = subtotal - discountAmount;
    
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Kind Oasis Quote</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; }
                .header { text-align: center; margin-bottom: 40px; }
                .company-name { font-size: 24px; font-weight: bold; color: #052B2B; }
                .quote-title { font-size: 18px; margin-top: 10px; }
                .section { margin-bottom: 30px; }
                .section-title { font-size: 16px; font-weight: bold; margin-bottom: 10px; border-bottom: 1px solid #ccc; }
                .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
                .detail-row { display: flex; justify-content: space-between; margin-bottom: 5px; }
                .total-row { font-weight: bold; font-size: 16px; border-top: 2px solid #052B2B; padding-top: 10px; }
                @media print { body { margin: 20px; } }
            </style>
        </head>
        <body>
            <div class="header">
                <div class="company-name">Kind Oasis</div>
                <div class="quote-title">Custom Gummy Quote</div>
                <div>Date: ${data.date}</div>
            </div>
            
            <div class="section">
                <div class="section-title">Customer Information</div>
                <div class="detail-row"><span>Name:</span><span>${data.customerName}</span></div>
                <div class="detail-row"><span>Email:</span><span>${data.customerEmail}</span></div>
                <div class="detail-row"><span>Company:</span><span>${data.customerCompany}</span></div>
                <div class="detail-row"><span>Phone:</span><span>${data.customerPhone}</span></div>
            </div>
            
            <div class="section">
                <div class="section-title">Order Details</div>
                <div class="detail-row"><span>Gummy Type:</span><span>${data.calculator.gummyType === "3.5g" ? "3.5g/4g" : data.calculator.gummyType} Gummy</span></div>
                <div class="detail-row"><span>Quantity:</span><span>${data.calculator.gummyQuantity.toLocaleString()} gummies</span></div>
                <div class="detail-row"><span>Gummies Per Package:</span><span>${data.calculator.gummiesPerPackage}</span></div>
                <div class="detail-row"><span>Number of Packages:</span><span>${data.results.numberOfPackages}</span></div>
            </div>
            
            ${Object.keys(data.calculator.cannabinoids).length > 0 ? `
            <div class="section">
                <div class="section-title">Cannabinoids</div>
                ${Object.entries(data.calculator.cannabinoids).map(([type, amount]) => {
                    const display = CANNABINOID_DISPLAY.find(c => c.dataType === type);
                    return `<div class="detail-row"><span>${display?.label || type}:</span><span>${amount} mg</span></div>`;
                }).join('')}
            </div>` : ''}
            
            ${data.calculator.supplements.length > 0 ? `
            <div class="section">
                <div class="section-title">Supplements</div>
                ${data.calculator.supplements.map(supplement => {
                    const display = SUPPLEMENT_DISPLAY.find(s => s.dataType === supplement.type);
                    return `<div class="detail-row"><span>${display?.label || supplement.type}:</span><span>${supplement.amount} mg</span></div>`;
                }).join('')}
            </div>` : ''}
            
            <div class="section">
                <div class="section-title">Pricing</div>
                <div class="detail-row"><span>Cost Per Package:</span><span>${formatCurrency(data.results.totalPerJar)}</span></div>
                <div class="detail-row"><span>Subtotal:</span><span>${formatCurrency(subtotal)}</span></div>
                ${data.discount > 0 ? `<div class="detail-row"><span>Discount (${data.discount}%):</span><span>-${formatCurrency(discountAmount)}</span></div>` : ''}
                <div class="detail-row total-row"><span>Total:</span><span>${formatCurrency(total)}</span></div>
            </div>
            
            ${data.additionalNotes ? `
            <div class="section">
                <div class="section-title">Additional Notes</div>
                <p>${data.additionalNotes}</p>
            </div>` : ''}
            
            <div class="section">
                <div class="section-title">Terms & Conditions</div>
                <p>This quote is valid for 30 days. All prices are subject to change based on ingredient costs and availability. Production time is typically 2-3 weeks after order confirmation and payment.</p>
            </div>
        </body>
        </html>
    `;
}

function exportCSV() {
    const results = calculator.getResults();
    const csvData = [];
    
    // Header
    csvData.push(['Kind Oasis Gummy Calculator Export', '']);
    csvData.push(['Date', new Date().toLocaleDateString()]);
    csvData.push(['', '']);
    
    // Base Gummy
    csvData.push(['Base Gummy', '']);
    csvData.push(['Type', calculator.gummyType === "3.5g" ? "3.5g/4g" : calculator.gummyType]);
    csvData.push(['Quantity', calculator.gummyQuantity]);
    csvData.push(['', '']);
    
    // Cannabinoids
    if (Object.keys(calculator.cannabinoids).length > 0) {
        csvData.push(['Cannabinoids', '']);
        Object.entries(calculator.cannabinoids).forEach(([type, amount]) => {
            const display = CANNABINOID_DISPLAY.find(c => c.dataType === type);
            csvData.push([display?.label || type, amount + ' mg']);
        });
        csvData.push(['', '']);
    }
    
    // Supplements
    if (calculator.supplements.length > 0) {
        csvData.push(['Supplements', '']);
        calculator.supplements.forEach(supplement => {
            const display = SUPPLEMENT_DISPLAY.find(s => s.dataType === supplement.type);
            csvData.push([display?.label || supplement.type, supplement.amount + ' mg']);
        });
        csvData.push(['', '']);
    }
    
    // Order Details
    csvData.push(['Order Details', '']);
    csvData.push(['Gummies Per Package', calculator.gummiesPerPackage]);
    csvData.push(['Order Volume Markup', calculator.orderVolume + 'x']);
    csvData.push(['Label Included', calculator.packaging.label ? 'Yes' : 'No']);
    csvData.push(['Jar Included', calculator.packaging.jar ? 'Yes' : 'No']);
    csvData.push(['Processing Included', calculator.packaging.processing ? 'Yes' : 'No']);
    csvData.push(['', '']);
    
    // Results
    csvData.push(['Cost Breakdown', '']);
    csvData.push(['Base Gummy Cost (per gummy)', formatCurrency(results.baseGummyCost)]);
    csvData.push(['Medicine Cost (per gummy)', formatCurrency(results.medicineCost)]);
    csvData.push(['Supplement Cost (per gummy)', formatCurrency(results.supplementCost)]);
    csvData.push(['Total Cost Per Gummy (to KO)', formatCurrency(results.totalCostPerGummy)]);
    csvData.push(['Total Cost To KO', formatCurrency(results.totalCostToKO)]);
    csvData.push(['Customer Cost Per Gummy', formatCurrency(results.customerCostPerGummy)]);
    csvData.push(['Packaging Cost (per package)', formatCurrency(results.packagingCost)]);
    csvData.push(['Total Per Package', formatCurrency(results.totalPerJar)]);
    csvData.push(['Number of Packages', results.numberOfPackages]);
    csvData.push(['Total Customer Cost', formatCurrency(results.totalCustomerCost)]);
    
    // Convert to CSV string
    const csvString = csvData.map(row => 
        row.map(cell => `"${cell}"`).join(',')
    ).join('\n');
    
    // Download
    const blob = new Blob([csvString], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', `gummy-calculator-${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}