# Product Requirements Document - Kind Oasis Gummy Calculator

## 1. Introduction

### 1.1 Purpose
This document outlines the product requirements for the Kind Oasis Gummy Cost & Price Calculator. The calculator is a web-based application designed for customer-facing use, allowing users to configure custom gummy products, including base gummy type, cannabinoid content, and added supplements, and to receive an estimated total order cost. It also provides functionality to generate a formal quote.

### 1.2 Target Audience
This calculator is intended for potential and existing customers of Kind Oasis who are interested in ordering custom gummy products in bulk.

### 1.3 Scope
The scope of this document covers all functional and non-functional requirements of the calculator, including user interface (UI) design, input parameters, calculation logic, output display, and interactive features. The goal is to provide a comprehensive guide that would allow a development team to recreate the calculator accurately.

### 1.4 Definitions, Acronyms, and Abbreviations
- **PRD**: Product Requirements Document
- **UI**: User Interface
- **MOQ**: Minimum Order Quantity
- **KO**: Kind Oasis
- **CBD**: Cannabidiol
- **THC**: Tetrahydrocannabinol
- **HHC**: Hexahydrocannabinol
- **CBG**: Cannabigerol
- **CBN**: Cannabinol
- **CSV**: Comma-Separated Values
- **CRC**: Child-Resistant Cap
- **mg**: Milligram
- **g**: Gram

## 2. Overall Description

### 2.1 Product Perspective
The Kind Oasis Gummy Calculator is a standalone, customer-facing web application. It replaces previous internal or more complex versions, offering a streamlined experience for customers to estimate costs and request quotes for custom gummy formulations.

### 2.2 Product Features
The calculator includes the following high-level features:
- Selection of base gummy type and quantity
- Customization of cannabinoid content with a wide range of options
- Addition of various supplements to the gummy formulation
- Configuration of order details, including volume-based markups and packaging options
- Real-time calculation and display of total order costs
- Functionality to save and load calculation configurations
- Generation of formal quotes (viewable in-browser and downloadable as PDF)
- Export of calculation details to a CSV file
- A user-selectable light/dark theme for visual preference
- Responsive design for usability across different devices (implied, standard web practice)

### 2.3 User Characteristics
Users are expected to be customers of Kind Oasis, potentially with varying levels of technical proficiency but with a clear interest in ordering custom gummy products. They will need to understand basic concepts of gummy ingredients and order volumes.

### 2.4 Operating Environment
The calculator is a web application accessible via standard web browsers on desktop and mobile devices. It is deployed as a static website.

### 2.5 Design and Implementation Constraints
- The application must maintain the existing dark mode color scheme and overall visual style established in previous iterations (Background: #052B2B, Text: #F5FFFF, Accent: #98BFBE)
- Calculations must be accurate based on the provided cost data for base gummies, cannabinoids, supplements, and packaging
- The user interface must be intuitive and easy to navigate
- Specific cost details for individual cannabinoids and supplements must be hidden from the user in the input panels but used in the backend calculations
- Markup details in the order volume selection must be hidden from the user but applied in calculations

## 3. User Interface (UI) Requirements

### 3.1 General Layout
The application features a two-column layout on wider screens:
- **Left Column (Input Panel)**: Contains all user-configurable options, grouped into collapsible sections
- **Right Column (Results Panel)**: Displays the calculated total order costs and action buttons. This panel was simplified to only show total order costs

### 3.2 Header
- **Logo/Title Area**:
  - Main Title: "Cost & Price Calculator"
  - Subtitle: "Kind Oasis Gummy Production"
- **Action Buttons Area**:
  - Save Button: Icon (floppy disk), Text ("Save")
  - Load Button: Icon (folder open), Text ("Load")
  - Theme Toggle Button: Icon (moon/sun, toggles based on theme)

### 3.3 Input Panel Sections
All input sections are collapsible, featuring a header with a title and a chevron icon (downward pointing when expanded, rightward when collapsed).

#### 3.3.1 Base Gummy Selection
- **Section Title**: "Base Gummy Selection"
- **Gummy Type**:
  - Radio button group for selecting gummy type
  - Options:
    - "3.5g Gummy" (Value: 3.5g, MOQ: 4400)
    - "4g Gummy" (Value: 4g, MOQ: 4400)
    - "7.5g Gummy" (Value: 7.5g, MOQ: 2250)
    - "11g Gummy" (Value: 11g, MOQ: 2250)
  - Each option displays its associated MOQ badge
  - Default selection: "3.5g Gummy"
- **Number of Gummies**:
  - Label: "Number of Gummies:"
  - Input field: Type `number`, ID `gummies-quantity`
  - Default value: MOQ of the selected gummy type (e.g., 4400 for 3.5g)
  - Minimum value: 1
  - Input enforces MOQ and rounding increments upon losing focus (blur event)

#### 3.3.2 Cannabinoid Inputs
- **Section Title**: "Cannabinoid Inputs"
- **Search Filter**:
  - Input field: Type `text`, ID `cannabinoid-search`, Placeholder "Search cannabinoids..."
  - Filters the list of cannabinoids displayed below based on user input
- **Cannabinoid List (Grid Layout)**:
  - Each cannabinoid has a row with:
    - Label: Name of the cannabinoid (e.g., "D8:")
    - Input field: Type `number`, class `cannabinoid-input`, data-type attribute (e.g., `d8`), default value 0, min 0
    - Unit display: "mg"
    - Individual cost display for each cannabinoid is hidden from the user
  
  **Full list of 23 Cannabinoids** (and their data-type / id stem):
  1. D8 (`d8`)
  2. HHC (`hhc`)
  3. HHC-p (`hhcp`)
  4. THC-p (`thcp`)
  5. THC-v (`thcv`)
  6. THCa Rosin (`thcaRosin`)
  7. THCa Isolate (`thcaIsolate`)
  8. D10 - 78% (`d10`)
  9. Full Spec (`fullSpec`)
  10. CBD Isolate (`cbdIsolate`)
  11. CBG (`cbg`)
  12. CBD Nano (`cbdNano`)
  13. CBD - Live Resin (`cbdLiveResin`) - Note: Uses a placeholder cost of $0.00 by default
  14. CBN Nano (`cbnNano`)
  15. BSCBD (`bscbd`)
  16. CBN (`cbn`)
  17. D9 C (`d9c`)
  18. D9 ML (`d9ml`)
  19. D9 Nano (`d9Nano`)
  20. CBDa (`cbda`)
  21. CBGa (`cbga`)
  22. CBT (`cbt`)
  23. CBC (`cbc`)

- **Show More/Less Button**:
  - ID: `show-more-cannabinoids`
  - Initially, only the first 8 cannabinoids are visible
  - Button text: "Show More Cannabinoids"
  - Clicking expands the list to show all cannabinoids; button text changes to "Show Less Cannabinoids"
  - Clicking again collapses the list back to the first 8; button text reverts to "Show More Cannabinoids"

#### 3.3.3 Supplement Inputs
- **Section Title**: "Supplement Inputs"
- **Add Supplement Form**:
  - **Select Supplement**:
    - Label: "Select Supplement:"
    - Dropdown menu: ID `supplement-select`
    - Default option: "-- Select an Ingredient --" (disabled, selected)
    - Options populated dynamically from `CALCULATOR_DATA.supplementCosts` (see Section 4.2.3 for list)
  - **Quantity (mg)**:
    - Label: "Quantity (mg):"
    - Input field: Type `number`, ID `supplement-quantity`, min 0, default value 0
  - **Add Ingredient Button**:
    - ID: `add-supplement-button`, Text: "+ Add Ingredient"
    - Adds the selected supplement and quantity to the "Added Supplements" list
- **Added Supplements List**:
  - ID: `added-supplements-list`
  - Header: "Added Supplements:"
  - Displays a list of currently added supplements
  - Each item in the list shows:
    - Supplement Name
    - Quantity in mg
    - A remove button (styled as an 'X')
  - Individual cost display for each added supplement is hidden from the user
  - If no supplements are added, a message "No supplements added yet." is displayed

#### 3.3.4 Order Details
- **Section Title**: "Order Details"
- **Order Volume**:
  - Label: "Order Volume:"
  - Dropdown menu: ID `order-volume`
  - Options (display text only, markup value is associated via value attribute):
    - "Up to 10k" (Value: 4)
    - "10k-25k" (Value: 3.5)
    - "25k-50k" (Value: 3)
    - "50k-100k" (Value: 2.5)
    - "Over 100k" (Value: 2)
  - The parenthesized markup text (e.g., "(4x markup)") is hidden from the user
- **Gummies Per Package**:
  - Label: "Gummies Per Package:"
  - Input field: Type `number`, ID `gummies-per-package`, default value 30, min 1
- **Packaging Options**:
  - Label: "Packaging Options:"
  - Checkbox group:
    - "Label ($0.40)" (ID: `label-option`, checked by default)
    - "Jar & White CRC lid ($0.60)" (ID: `jar-option`, checked by default)
    - "Fill, Seal, Label, Date, Box ($1.00)" (ID: `processing-option`, checked by default)

### 3.4 Results Panel (Simplified)
This panel is displayed to the right of the Input Panel on wider screens.

#### 3.4.1 Total Order Cost
- **Section Title**: "Total Order Cost"
- **Results Grid**:
  - "Number of Packages:": Displays calculated value (ID `total-packages`)
  - "Total Customer Cost:": Displays calculated value, formatted as currency (ID `total-customer-cost`)

### 3.5 Action Buttons (Below Results Panel)
- **Generate Quote Button**:
  - ID: `generate-quote-button`, Text: "Generate Quote", Icon (file-invoice-dollar)
  - Opens the Quote Modal
- **Export CSV Button**:
  - ID: `export-csv-button`, Text: "Export CSV", Icon (file-csv)
  - Triggers CSV download of current calculation
- **Reset Button**:
  - ID: `reset-button`, Text: "Reset", Icon (undo)
  - Prompts user for confirmation before resetting all inputs to default

### 3.6 Modals
Modals overlay the main interface and have a close button ('X') in their header.

#### 3.6.1 Save/Load Modal
- ID: `save-load-modal`
- **Save View**:
  - Modal Title: "Save Calculation"
  - Input field: "Calculation Name:" (ID `save-name`)
  - Button: "Save" (ID `confirm-save`)
- **Load View**:
  - Modal Title: "Load Calculation"
  - List area: ID `saved-calculations-list` (displays saved calculation names with Load/Delete buttons)
  - Message "No saved calculations found." if list is empty

#### 3.6.2 Quote Modal
- ID: `quote-modal`
- Modal Title: "Generate Quote"
- **Input Fields**:
  - "Customer Name:" (ID `customer-name`)
  - "Customer Email:" (ID `customer-email`)
  - "Customer Company:" (ID `customer-company`)
  - "Customer Phone:" (ID `customer-phone`)
  - "Discount (%):" (ID `discount-percentage`, default 0, min 0, max 100)
  - "Additional Notes:" (Textarea, ID `additional-notes`)
- **Action Buttons**:
  - "View Quote" (ID `view-quote-button`): Generates and opens the quote in a new browser tab/window for printing
  - "Download Quote" (ID `download-quote-button`): Generates and downloads the quote as a PDF

### 3.7 Color Scheme and Styling
- **Dark Theme (Default)**:
  - Background: `#052B2B`
  - Primary Text: `#F5FFFF`
  - Accent/Interactive Elements: `#98BFBE`
  - Panel Headers (e.g., "Base Gummy Selection"): Text color `#B6D2D1` on the dark panel background
- **Light Theme**: (Specific colors not explicitly defined but should provide good contrast and readability)
- Collapsible sections use chevron icons (`fas fa-chevron-down` / `fas fa-chevron-right`)
- Buttons use FontAwesome icons where specified
- MOQ badges are displayed next to gummy type options
- Input fields and buttons should have a consistent modern style

## 4. Functional Requirements

### 4.1 Data Sources and Costs

#### 4.1.1 Base Gummy Costs (per gummy)
- **3.5g Gummy**: $0.07
- **4g Gummy**: $0.08
- **7.5g Gummy**: $0.12
- **11g Gummy**: $0.15

#### 4.1.2 Cannabinoid Costs (per mg)
(Stored in `CALCULATOR_DATA.cannabinoidCosts` in calculator.js)
- **d8**: $0.0006
- **hhc**: $0.0022
- **hhcp**: $0.011
- **thcp**: $0.011
- **thcv**: $0.0385
- **thcaRosin**: $0.022
- **thcaIsolate**: $0.0165
- **d10**: $0.0007
- **fullSpec**: $0.0006
- **cbdIsolate**: $0.0005 (Note: This was updated from an earlier value)
- **cbg**: $0.0011
- **cbdNano**: $0.0011
- **cbdLiveResin**: $0.00 (Placeholder - user must be reminded to update this)
- **cbnNano**: $0.0044
- **bscbd**: $0.0003
- **cbn**: $0.0033
- **d9c**: $0.0006
- **d9ml**: $0.0006
- **d9Nano**: $0.0011
- **cbda**: $0.0011
- **cbga**: $0.0011
- **cbt**: $0.0085
- **cbc**: $0.0022

#### 4.1.3 Supplement Costs (per mg)
(Stored in `CALCULATOR_DATA.supplementCosts` in calculator.js, originally from supplement-costs.csv)
- **alphaGpc**: 0.00011
- **americanGinseng**: 0.00011
- **ashwagandha**: 0.000077
- **bacopaMonnieri**: 0.000088
- **biotin**: 0.0024
- **caffeine**: 0.000022
- **cordyceps**: 0.000132
- **fiveHtp**: 0.00022
- **gaba**: 0.000066
- **gingerRoot**: 0.000055
- **ginkgoBiloba**: 0.000165
- **huperzineA**: 0.0088
- **lCitrulline**: 0.000088
- **lTheanine**: 0.00022
- **lTyrosine**: 0.000055
- **lionsMane**: 0.000154
- **melatonin**: 0.000165
- **niacinB3**: 0.000033
- **redReishiMushroom**: 0.00011
- **rhodiolaRosea**: 0.00011
- **taurine**: 0.000033
- **trueTerpeneLrTerps225**: 0.00022
- **trueTerpeneLrTerps460**: 0.00022
- **turkeyTailMushroom**: 0.00011
- **turmeric**: 0.000055
- **valerianRoot**: 0.000088
- **vitaminB6**: 0.000033
- **vitaminB12**: 0.00022
- **vitaminC**: 0.000022
- **vitaminD**: 0.000055

#### 4.1.4 Packaging Costs (per package/jar)
- **Label**: $0.40
- **Jar & White CRC lid**: $0.60
- **Fill, Seal, Label, Date, Box (Processing)**: $1.00

### 4.2 Calculation Logic

#### 4.2.1 Gummy Quantity Validation
When gummy type changes or quantity input loses focus:
- If entered quantity < MOQ for the selected gummy type, quantity is set to MOQ
- Else, quantity is rounded up to the nearest increment:
  - 3.5g & 4g gummies: Increment of 440
  - 7.5g & 11g gummies: Increment of 225

#### 4.2.2 Core Cost Calculations
(performed by GummyCalculator class)
- **Base Gummy Cost** (per gummy): Cost of the selected base gummy type
- **Medicine Cost** (per gummy): Sum of (cannabinoid mg × cost per mg for that cannabinoid) for all entered cannabinoids
- **Supplement Cost** (per gummy): Sum of (supplement mg × cost per mg for that supplement) for all added supplements
- **Total Cost Per Gummy** (to KO): Base Gummy Cost + Medicine Cost + Supplement Cost
- **Total Cost To KO** (entire order): Total Cost Per Gummy × Number of Gummies
- **Customer Cost Per Gummy**: Total Cost Per Gummy × Markup Factor (from Order Volume selection)
- **Packaging Cost** (per package): Sum of costs for selected packaging options (Label, Jar, Processing)
- **Total Per Jar/Package** (customer price): (Customer Cost Per Gummy × Gummies Per Package) + Packaging Cost
- **Number of Packages**: Ceiling of (Number of Gummies ÷ Gummies Per Package)
- **Total Customer Cost** (entire order): Total Per Jar × Number of Packages

#### 4.2.3 Currency and Percentage Formatting
- Currency values should be displayed with a '$' prefix
- Costs per gummy (like individual cannabinoid costs if they were shown, or total cost per gummy) are typically shown with 4-6 decimal places for precision
- Final costs (like Total Customer Cost) are shown with 2 decimal places
- Percentages (like profit margin, if it were shown) are displayed with a '%' suffix and typically 2 decimal places

### 4.3 Feature Functionality

#### 4.3.1 Theme Toggle
- Clicking the theme toggle button switches between "light" and "dark" themes
- The selected theme is saved in local storage and applied on subsequent visits
- The button icon changes (moon for light mode, sun for dark mode)

#### 4.3.2 Save/Load Calculations
**Save**:
- User clicks "Save" button, Save Modal appears
- User enters a name and clicks "Save" in the modal
- The current state of all calculator inputs is saved to local storage under the given name
- A confirmation message is shown

**Load**:
- User clicks "Load" button, Load Modal appears
- A list of previously saved calculations is displayed
- User clicks "Load" next to a saved calculation
- The calculator inputs are populated with the saved state, and results are recalculated
- A confirmation message is shown
- User can also delete saved calculations from this list (with confirmation)

#### 4.3.3 Generate Quote
- User clicks "Generate Quote" button, Quote Modal appears
- User fills in customer details (Name, Email, Company, Phone), discount, and notes

**View Quote**:
- User clicks "View Quote"
- A new browser tab/window opens displaying a formatted HTML quote
- The quote includes:
  - Kind Oasis branding/logo (current implementation uses a placeholder image `Big_O_Banner_Palm_TRANSPARENT_1080x291.png`)
  - Date of quote
  - Customer details
  - Detailed breakdown of the order: Gummy type, quantity, cannabinoids and their mgs, supplements and their mgs, packaging options
  - Pricing: Cost per gummy, cost per package, number of packages, subtotal, discount amount (if any), total order cost
  - Terms and conditions (standard template)

**Download Quote**:
- User clicks "Download Quote"
- The same quote content is generated as a PDF file and downloaded by the browser

#### 4.3.4 Export CSV
- User clicks "Export CSV" button
- A CSV file is generated and downloaded
- The CSV contains a summary of the current calculation, including:
  - Base Gummy: Type, Quantity
  - Cannabinoids: Each added cannabinoid, its name, and mg quantity
  - Supplements: Each added supplement, its name, and mg quantity
  - Order Details: Gummies Per Package, Markup Factor, Label Used, Jar Used, Processing Used
  - Results: All key cost figures (Gummy Cost, Medicine Cost, Supplement Cost, Total Cost Per Gummy, Total Cost To KO, Customer Cost Per Gummy, Packaging Cost, Total Per Jar, Total Packages, Total Customer Cost)

#### 4.3.5 Reset Calculator
- User clicks "Reset" button
- A confirmation dialog appears ("Are you sure you want to reset all inputs?")
- If confirmed, all input fields are reset to their default values, added supplements are cleared, and calculations are updated

#### 4.3.6 Collapsible Sections
- Clicking on the header of a collapsible section (Base Gummy, Cannabinoids, Supplements, Order Details) toggles its content visibility (expand/collapse)
- The chevron icon in the header rotates to indicate state

#### 4.3.7 Cannabinoid Search/Filter
- Typing in the "Search cannabinoids..." input field dynamically filters the list of cannabinoid inputs displayed, showing only those whose names match the search term (case-insensitive)

#### 4.3.8 Add/Remove Supplements
**Add**: User selects a supplement from the dropdown, enters a quantity, and clicks "+ Add Ingredient". The supplement is added to the "Added Supplements" list, and calculations update.

**Remove**: User clicks the 'X' button next to an ingredient in the "Added Supplements" list. The supplement is removed, and calculations update.

## 5. Non-Functional Requirements

### 5.1 Performance
- The calculator should respond quickly to user inputs, with calculations updating in near real-time
- Modal dialogs should appear without noticeable delay
- Quote generation (HTML and PDF) should be reasonably fast

### 5.2 Usability
- The interface should be intuitive and easy for non-technical users to understand and operate
- Error messages (e.g., for invalid input if any, or for save/load operations) should be clear and helpful
- MOQs and rounding rules should be applied transparently or with clear indication (e.g., MOQ badges)

### 5.3 Maintainability
- The codebase (HTML, CSS, JavaScript) should be well-structured, commented, and easy to understand for future modifications or bug fixes
- Configuration data (like costs) should be centralized and easy to update (e.g., in calculator.js or clearly marked data structures)

### 5.4 Compatibility
- The calculator must function correctly on modern versions of major web browsers (e.g., Chrome, Firefox, Safari, Edge)
- It should be responsive and usable on various screen sizes, including desktops, tablets, and mobile phones

### 5.5 Reliability
- Calculations must be consistently accurate
- Save/Load functionality must reliably store and retrieve data without corruption

## 6. Data Dictionary

### 6.1 CALCULATOR_DATA (JavaScript Object)
- **baseGummyCosts**: Object mapping gummy type strings (e.g., "3.5g") to their cost per gummy
- **cannabinoidCosts**: Object mapping cannabinoid data-type strings (e.g., "d8") to their cost per mg
- **supplementCosts**: Object mapping supplement data-type strings (e.g., "alphaGpc") to their cost per mg
- **packagingCosts**: Object with keys `label`, `jar`, `processing` and their respective costs
- **moqPerFlavor**: Object mapping gummy type strings to their MOQ
- **markupFactors**: Object mapping order volume display text (though values are used directly in HTML now) to markup multiplier values (e.g., 4, 3.5)

### 6.2 Local Storage Keys
- **theme**: Stores the user's preferred theme ("light" or "dark")
- **savedCalculations**: Stores a JSON string representing an object where keys are saved calculation names and values are the calculator state objects

## 7. Future Considerations (Out of Scope for Current Version)
- Integration with an inventory system for real-time availability of ingredients
- Direct submission of quotes to an order management system
- User accounts for saving calculations persistently across devices
- More advanced visual customization options for gummies (e.g., color, shape)

---

This document provides a comprehensive overview of the Kind Oasis Gummy Calculator. It is intended to be a living document and may be updated as the product evolves.