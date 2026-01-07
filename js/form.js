// ============================================
// HACKWARTS HACKATHON - FORM LOGIC
// Team Registration with Dynamic Fields
// ============================================

// ============================================
// STATE MANAGEMENT
// ============================================
let currentStep = 1;
let teamMemberCount = 0;
const maxTeamMembers = 3;
let formData = {};

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', function () {
    populateHouseDropdown();
    initializeFormEventListeners();
    updateProgressIndicator();
});

// ============================================
// DROPDOWN POPULATION
// ============================================
function populateHouseDropdown() {
    const houseSelect = document.getElementById('house');
    if (!houseSelect) return;

    // Clear existing options except the first
    houseSelect.innerHTML = '<option value="">Select a house...</option>';

    // Add house options
    housesData.forEach(house => {
        const option = document.createElement('option');
        option.value = house.id;
        option.textContent = house.name;
        option.dataset.color = house.color;
        houseSelect.appendChild(option);
    });
}

function populateProjectDropdown(houseId) {
    const projectSelect = document.getElementById('projectCode');
    if (!projectSelect) return;

    // Find selected house
    const selectedHouse = housesData.find(h => h.id === houseId);

    if (!selectedHouse) {
        projectSelect.innerHTML = '<option value="">First select a house...</option>';
        projectSelect.disabled = true;
        return;
    }

    // Clear and enable project dropdown
    projectSelect.innerHTML = '<option value="">Select a project...</option>';
    projectSelect.disabled = false;

    // Add project options
    selectedHouse.projects.forEach(project => {
        const option = document.createElement('option');
        option.value = project.code;
        option.textContent = `${project.code} - ${project.title}`;
        option.dataset.title = project.title;
        projectSelect.appendChild(option);
    });
}

// ============================================
// EVENT LISTENERS
// ============================================
function initializeFormEventListeners() {
    const form = document.getElementById('registrationForm');
    const houseSelect = document.getElementById('house');
    const projectSelect = document.getElementById('projectCode');
    const problemStatement = document.getElementById('problemStatement');
    const proposedSolution = document.getElementById('proposedSolution');

    // House change event
    if (houseSelect) {
        houseSelect.addEventListener('change', function () {
            const houseId = this.value;
            populateProjectDropdown(houseId);

            // Clear project selection
            if (projectSelect) {
                projectSelect.value = '';
                document.getElementById('projectTitle').value = '';
            }

            // Show/hide innovation fields
            toggleInnovationFields(houseId);
        });
    }

    // Project change event
    if (projectSelect) {
        projectSelect.addEventListener('change', function () {
            const selectedOption = this.options[this.selectedIndex];
            const projectTitle = selectedOption.dataset.title || '';
            document.getElementById('projectTitle').value = projectTitle;
        });
    }

    // Word count for textareas
    if (problemStatement) {
        problemStatement.addEventListener('input', function () {
            updateWordCount(this, 150);
        });
    }

    if (proposedSolution) {
        proposedSolution.addEventListener('input', function () {
            updateWordCount(this, 150);
        });
    }

    // Form submission
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
}

function toggleInnovationFields(houseId) {
    const innovationFields = document.getElementById('innovationFields');
    if (!innovationFields) return;

    if (houseId === 'merlinthor') {
        innovationFields.style.display = 'block';
        document.getElementById('problemStatement').required = true;
        document.getElementById('proposedSolution').required = true;
    } else {
        innovationFields.style.display = 'none';
        document.getElementById('problemStatement').required = false;
        document.getElementById('proposedSolution').required = false;
    }
}

function updateWordCount(textarea, maxWords) {
    const text = textarea.value.trim();
    const words = text ? text.split(/\s+/).length : 0;
    const charCountElement = textarea.nextElementSibling;

    if (charCountElement && charCountElement.classList.contains('char-count')) {
        charCountElement.textContent = `${words} / ${maxWords} words`;

        if (words > maxWords) {
            charCountElement.style.color = '#ff6b6b';
            textarea.setCustomValidity(`Please limit to ${maxWords} words or less.`);
        } else {
            charCountElement.style.color = '';
            textarea.setCustomValidity('');
        }
    }
}

// ============================================
// STEP NAVIGATION
// ============================================
function nextFormStep() {
    if (!validateCurrentStep()) {
        return;
    }

    saveCurrentStepData();

    if (currentStep < 4) {
        currentStep++;
        showStep(currentStep);

        // Generate review if on final step
        if (currentStep === 4) {
            generateReviewContent();
        }
    }
}

function prevFormStep() {
    if (currentStep > 1) {
        currentStep--;
        showStep(currentStep);
    }
}

function showStep(stepNumber) {
    // Hide all steps
    const allSteps = document.querySelectorAll('.form-step');
    allSteps.forEach(step => {
        step.classList.remove('active');
    });

    // Show current step
    const currentStepElement = document.querySelector(`.form-step[data-step="${stepNumber}"]`);
    if (currentStepElement) {
        currentStepElement.classList.add('active');
    }

    // Update progress indicator
    updateProgressIndicator();

    // Scroll to top of form
    document.getElementById('register').scrollIntoView({ behavior: 'smooth' });
}

function updateProgressIndicator() {
    const progressSteps = document.querySelectorAll('.progress-step');
    progressSteps.forEach((step, index) => {
        const stepNumber = index + 1;
        if (stepNumber <= currentStep) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    });
}

// ============================================
// VALIDATION
// ============================================
function validateCurrentStep() {
    const currentStepElement = document.querySelector(`.form-step[data-step="${currentStep}"]`);
    if (!currentStepElement) return false;

    const inputs = currentStepElement.querySelectorAll('input[required], select[required], textarea[required]');
    let isValid = true;

    inputs.forEach(input => {
        // Clear previous errors
        clearError(input);

        // Check validity
        if (!input.value.trim()) {
            showError(input, 'This field is required');
            isValid = false;
        } else if (input.type === 'email' && !isValidEmail(input.value)) {
            showError(input, 'Please enter a valid email address');
            isValid = false;
        } else if (input.type === 'tel' && !isValidPhone(input.value)) {
            showError(input, 'Please enter a valid phone number');
            isValid = false;
        }
    });

    // Special validation for Merlinthor fields
    if (currentStep === 3) {
        const houseId = formData.house;
        if (houseId === 'merlinthor') {
            const problemStatement = document.getElementById('problemStatement');
            const proposedSolution = document.getElementById('proposedSolution');

            if (!validateWordCount(problemStatement, 150)) {
                isValid = false;
            }
            if (!validateWordCount(proposedSolution, 150)) {
                isValid = false;
            }
        }
    }

    return isValid;
}

function validateWordCount(textarea, maxWords) {
    const text = textarea.value.trim();
    const words = text ? text.split(/\s+/).length : 0;

    if (words > maxWords) {
        showError(textarea, `Please limit to ${maxWords} words or less (currently ${words} words)`);
        return false;
    }

    return true;
}

function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function isValidPhone(phone) {
    const cleaned = phone.replace(/\D/g, '');
    return cleaned.length >= 10 && cleaned.length <= 15;
}

function showError(input, message) {
    const errorElement = input.parentElement.querySelector('.form-error');
    if (errorElement) {
        errorElement.textContent = message;
    }
    input.classList.add('error');
}

function clearError(input) {
    const errorElement = input.parentElement.querySelector('.form-error');
    if (errorElement) {
        errorElement.textContent = '';
    }
    input.classList.remove('error');
}

// ============================================
// DATA MANAGEMENT
// ============================================
function saveCurrentStepData() {
    const currentStepElement = document.querySelector(`.form-step[data-step="${currentStep}"]`);
    if (!currentStepElement) return;

    const inputs = currentStepElement.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        if (input.name) {
            formData[input.name] = input.value;
        }
    });

    // Save team members
    if (currentStep === 3) {
        formData.teamMembers = collectTeamMembers();
    }
}

function collectTeamMembers() {
    const members = [];
    const memberContainers = document.querySelectorAll('.team-member');

    memberContainers.forEach(container => {
        const nameInput = container.querySelector('input[name^="memberName"]');
        const emailInput = container.querySelector('input[name^="memberEmail"]');
        const mobileInput = container.querySelector('input[name^="memberMobile"]');

        if (nameInput && nameInput.value.trim()) {
            members.push({
                name: nameInput.value,
                email: emailInput.value,
                mobile: mobileInput.value
            });
        }
    });

    return members;
}

// ============================================
// TEAM MEMBERS MANAGEMENT
// ============================================
function addTeamMember() {
    if (teamMemberCount >= maxTeamMembers) {
        alert(`Maximum ${maxTeamMembers} additional team members allowed`);
        return;
    }

    teamMemberCount++;
    const container = document.getElementById('teamMembersContainer');

    const memberDiv = document.createElement('div');
    memberDiv.className = 'team-member';
    memberDiv.dataset.memberIndex = teamMemberCount;

    memberDiv.innerHTML = `
        <div class="member-header">
            <span class="member-number">Team Member ${teamMemberCount}</span>
            <button type="button" class="remove-member" onclick="removeTeamMember(${teamMemberCount})" aria-label="Remove member">×</button>
        </div>
        
        <div class="form-group">
            <label for="memberName${teamMemberCount}">Full Name</label>
            <input type="text" id="memberName${teamMemberCount}" name="memberName${teamMemberCount}" 
                   placeholder="Enter member's full name">
            <span class="form-error"></span>
        </div>
    `;

    container.appendChild(memberDiv);

    // Update button state
    updateAddMemberButton();
}

function removeTeamMember(index) {
    const member = document.querySelector(`.team-member[data-member-index="${index}"]`);
    if (member) {
        member.remove();
        teamMemberCount--;

        // Renumber remaining members
        renumberTeamMembers();
        updateAddMemberButton();
    }
}

function renumberTeamMembers() {
    const members = document.querySelectorAll('.team-member');
    members.forEach((member, index) => {
        const newIndex = index + 1;
        member.dataset.memberIndex = newIndex;
        member.querySelector('.member-number').textContent = `Team Member ${newIndex}`;
    });
}

function updateAddMemberButton() {
    const addButton = document.getElementById('addMemberBtn');
    if (!addButton) return;

    if (teamMemberCount >= maxTeamMembers) {
        addButton.disabled = true;
        addButton.textContent = `Maximum ${maxTeamMembers} Members Reached`;
    } else {
        addButton.disabled = false;
        addButton.textContent = '+ Add Team Member';
    }
}

// ============================================
// REVIEW GENERATION
// ============================================
function generateReviewContent() {
    const reviewContent = document.getElementById('reviewContent');
    if (!reviewContent) return;

    saveCurrentStepData();

    // Get house and project names
    const houseName = housesData.find(h => h.id === formData.house)?.name || formData.house;
    const projectTitle = formData.projectTitle || formData.projectCode;

    let html = `
        <div class="review-section">
            <h4>Team Information</h4>
            <div class="review-item">
                <span class="review-label">Team Name:</span>
                <span class="review-value">${formData.teamName || 'N/A'}</span>
            </div>
            <div class="review-item">
                <span class="review-label">House:</span>
                <span class="review-value">${houseName}</span>
            </div>
            <div class="review-item">
                <span class="review-label">Project:</span>
                <span class="review-value">${formData.projectCode} - ${projectTitle}</span>
            </div>
        </div>
        
        <div class="review-section">
            <h4>Team Leader</h4>
            <div class="review-item">
                <span class="review-label">Name:</span>
                <span class="review-value">${formData.leaderName || 'N/A'}</span>
            </div>
            <div class="review-item">
                <span class="review-label">College:</span>
                <span class="review-value">${formData.leaderCollege || 'N/A'}</span>
            </div>
            <div class="review-item">
                <span class="review-label">Email:</span>
                <span class="review-value">${formData.leaderEmail || 'N/A'}</span>
            </div>
            <div class="review-item">
                <span class="review-label">Mobile:</span>
                <span class="review-value">${formData.leaderMobile || 'N/A'}</span>
            </div>
        </div>
    `;

    // Team members
    if (formData.teamMembers && formData.teamMembers.length > 0) {
        html += '<div class="review-section"><h4>Team Members</h4>';
        formData.teamMembers.forEach((member, index) => {
            html += `
                <div style="margin-bottom: 12px; padding: 12px; background: rgba(0,0,0,0.2); border-radius: 8px;">
                    <strong>Member ${index + 1}</strong><br>
                    ${member.name} • ${member.email} • ${member.mobile}
                </div>
            `;
        });
        html += '</div>';
    }

    // Innovation fields
    if (formData.house === 'merlinthor' && formData.problemStatement) {
        html += `
            <div class="review-section">
                <h4>Open Innovation</h4>
                <div class="review-item" style="flex-direction: column; align-items: flex-start;">
                    <span class="review-label">Problem Statement:</span>
                    <span class="review-value" style="margin-top: 8px;">${formData.problemStatement}</span>
                </div>
                <div class="review-item" style="flex-direction: column; align-items: flex-start; margin-top: 12px;">
                    <span class="review-label">Proposed Solution:</span>
                    <span class="review-value" style="margin-top: 8px;">${formData.proposedSolution || ''}</span>
                </div>
            </div>
        `;
    }

    reviewContent.innerHTML = html;
}

// ============================================
// FORM SUBMISSION
// ============================================
function handleFormSubmit(e) {
    e.preventDefault();

    // Final validation
    const termsCheckbox = document.getElementById('termsAccept');
    if (!termsCheckbox || !termsCheckbox.checked) {
        alert('Please accept the terms and conditions to continue');
        return;
    }

    saveCurrentStepData();

    // Save to localStorage (in production, this would be sent to a backend)
    saveRegistration(formData);

    // Show success message
    showSuccessMessage();
}

function saveRegistration(data) {
    // Get existing registrations
    let registrations = JSON.parse(localStorage.getItem('hackathonRegistrations') || '[]');

    // Add timestamp
    data.timestamp = new Date().toISOString();
    data.id = generateId();

    registrations.push(data);

    // Save back to localStorage
    localStorage.setItem('hackathonRegistrations', JSON.stringify(registrations));

    console.log('Registration saved:', data);
}

function generateId() {
    return 'REG-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
}

function showSuccessMessage() {
    // Hide form
    document.getElementById('registrationForm').style.display = 'none';

    // Show success message
    const successMessage = document.getElementById('successMessage');
    const successHouse = document.getElementById('successHouse');

    const houseName = housesData.find(h => h.id === formData.house)?.name || formData.house;
    successHouse.textContent = houseName;

    successMessage.style.display = 'block';
}

function resetForm() {
    // Reset form
    document.getElementById('registrationForm').reset();
    document.getElementById('registrationForm').style.display = 'block';
    document.getElementById('successMessage').style.display = 'none';

    // Reset state
    currentStep = 1;
    teamMemberCount = 0;
    formData = {};

    // Clear team members
    document.getElementById('teamMembersContainer').innerHTML = '';

    // Show first step
    showStep(1);

    // Scroll to form
    scrollToSection('register');
}

// ============================================
// EXPORT FUNCTIONS FOR GLOBAL USE
// ============================================
window.nextFormStep = nextFormStep;
window.prevFormStep = prevFormStep;
window.addTeamMember = addTeamMember;
window.removeTeamMember = removeTeamMember;
window.resetForm = resetForm;
