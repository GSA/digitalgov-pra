(function() {
    function handleFormLogic(formId, logicFn) {
        const form = document.querySelector(formId);
        if (!form) {
            console.warn(`Form not found: ${formId}`);
            return;
        }
    
        const radios = form.querySelectorAll('input[type="radio"]');
        const guidanceContainer = form.querySelector('.quidance-container');
        const fieldsets = form.querySelectorAll('fieldset');
        const resetButton = form.querySelector('.reset-form');
    
        function updateGuidance() {
            logicFn(form, guidanceContainer);
        }
    
        if (radios.length > 0) {
            radios.forEach(radio => {
                radio.addEventListener('change', updateGuidance);
            });
        }
    
        if (resetButton) {
            resetButton.addEventListener('click', () => {
                form.reset();
                radios.forEach(radio => {
                    radio.disabled = false;
                });
                fieldsets.forEach(fieldset => {
                    fieldset.className = 'usa-fieldset grid-row';
                });
                guidanceContainer.innerHTML = "Guidance will appear here";
                guidanceContainer.className = 'quidance-container guidance-gray';
            });
        }
    }

    function setBaseUrl() {
        const baseUrl = window.location.origin;   
        // Find all elements with the class 'dynamic-base-url' and update their href attribute
        document.querySelectorAll("a.dynamic-base-url").forEach(function(element) {
            // Ensure the href attribute starts with a slash to avoid duplicating the base URL
            const relativePath=element.getAttribute('href');
            if(relativePath.startsWith('/')) {
                element.href=baseUrl+relativePath;
            }
        });    
    }
    
    function recruitmentFormLogic(form, guidanceContainer) {
        const answers = Array.from(form.querySelectorAll('input[type="radio"]:checked')).map(input => input.value);
        const allQuestions = Array.from(form.querySelectorAll('fieldset'));
        const recruit10OrMore = form.querySelector('input[name="recruiting-10-or-more"]:checked')?.value;
        const recruitPublic = form.querySelector('input[name="recruiting-public"]:checked')?.value;
        let lastUnanswered = null;
        const baseUrl = window.location.origin;
        const praClearancealink = baseUrl + "/pra-process-for-ux-cx/";

        // Reset guidance message
        guidanceContainer.innerHTML = "Guidance will appear here";
        guidanceContainer.className = 'quidance-container guidance-gray';

        function disableQuestionsAfter(triggerFieldset) {
            let disableNext = false;
            allQuestions.forEach(fieldset => {
                if (fieldset === triggerFieldset) {
                    disableNext = true;
                } else if (disableNext) {
                    fieldset.classList.add("disabled");
                    fieldset.querySelectorAll('input[type="radio"]').forEach(radio => {
                        radio.disabled = true;
                    });
                }
            });
        }
    
        function enableAllQuestions() {
            allQuestions.forEach(fieldset => {
                fieldset.classList.remove("disabled");
                fieldset.querySelectorAll('input[type="radio"]').forEach(radio => radio.disabled = false);
            });
        }
    
        enableAllQuestions();

        if (answers.length === 3 && answers.every(answer => answer === 'yes')) {
            guidanceContainer.innerHTML = '<span class="text-bold">If you answered YES to ALL of these questions, you will need PRA clearance for RECRUITMENT activities.</span> <a href="' + praClearancealink + '">Find out how to get PRA clearance</a>. If you are still unsure whether you need clearance, please consult <a href="mailto:tts-research@gsa.gov">tts-research@gsa.gov</a> for further clarification.';
            guidanceContainer.className = 'quidance-container guidance-yellow';
        }

        if (answers.some(answer => answer === 'no')) {
            guidanceContainer.innerHTML = '<span class="text-bold">If you answered NO to ANY of these questions, you will NOT need PRA clearance for RECRUITMENT activities.</span> If you are still unsure whether you need clearance, please consult <a href="mailto:tts-research@gsa.gov">tts-research@gsa.gov</a> for further clarification.';
            guidanceContainer.className = 'quidance-container guidance-green';
        }
        
        if (recruit10OrMore === "no") {
            disableQuestionsAfter(form.querySelector('input[name="recruiting-10-or-more"]').closest("fieldset"));
        } 
        
        if (recruitPublic === "no") {
            disableQuestionsAfter(form.querySelector('input[name="recruiting-public"]').closest("fieldset"));
        }

    }

    function researchFormLogic(form, guidanceContainer) {
        const research10OrMore = form.querySelector('input[name="research-10-or-more"]:checked')?.value;
        const researchPublic = form.querySelector('input[name="research-public"]:checked')?.value;
        const closeEndedQuestion = form.querySelector('input[name="close-ended-question"]:checked')?.value;
        const directObservation = form.querySelector('input[name="direct-observation"]:checked')?.value;
        const allQuestions = Array.from(form.querySelectorAll('fieldset')); // Get all question sections
        const baseUrl = window.location.origin;
        const praClearancealink = baseUrl + "/pra-process-for-ux-cx/";
    
        // Reset guidance message
        guidanceContainer.innerHTML = "Guidance will appear here";
        guidanceContainer.className = 'quidance-container guidance-gray';
    
        function disableQuestionsAfter(triggerFieldset) {
            let disableNext = false;
            allQuestions.forEach(fieldset => {
                if (fieldset === triggerFieldset) {
                    disableNext = true;
                } else if (disableNext) {
                    fieldset.classList.add("disabled");
                    fieldset.querySelectorAll('input[type="radio"]').forEach(radio => {
                        radio.disabled = true;
                    });
                }
            });
        }
    
        function enableAllQuestions() {
            allQuestions.forEach(fieldset => {
                fieldset.classList.remove("disabled");
                fieldset.querySelectorAll('input[type="radio"]').forEach(radio => radio.disabled = false);
            });
        }
    
        enableAllQuestions();
    
        if (research10OrMore === "no") {
            guidanceContainer.innerHTML = '<span class="text-bold">If you are conducting research with fewer than 10 participants, you will NOT need PRA clearance for RESEARCH activities.</span> If you are still unsure whether you need clearance, please consult <a href="mailto:tts-research@gsa.gov">tts-research@gsa.gov</a> for further clarification.';
            guidanceContainer.className = 'quidance-container guidance-green';
            disableQuestionsAfter(form.querySelector('input[name="research-10-or-more"]').closest("fieldset"));
        } 
        
        if (researchPublic === "no") {
            guidanceContainer.innerHTML = '<span class="text-bold">If you are conducting research with federal employees and contractors ONLY, you will NOT need PRA clearance for RESEARCH activities.</span> If you are still unsure whether you need clearance, please consult <a href="mailto:tts-research@gsa.gov">tts-research@gsa.gov</a> for further clarification.';
            guidanceContainer.className = 'quidance-container guidance-green';
            disableQuestionsAfter(form.querySelector('input[name="research-public"]').closest("fieldset"));
        }  
        
        if (directObservation === "yes") {
            guidanceContainer.innerHTML = `<span class="text-bold">Direct observation is excluded from the definition of "information collection" and therefore not subject to PRA. If you are directly observing participants, you will NOT need PRA clearance for RESEARCH activities.</span> If you are still unsure, please consult <a href="mailto:tts-research@gsa.gov">tts-research@gsa.gov</a> for further clarification.`;
            guidanceContainer.className = 'quidance-container guidance-green';
            disableQuestionsAfter(form.querySelector('input[name="direct-observation"]').closest("fieldset"));
        }
    
        if (directObservation === "no" && closeEndedQuestion === "yes") {
            guidanceContainer.innerHTML = '<span class="text-bold">A set of close-ended, identical questions is considered an "information collection" under PRA. If you are posing a set of close-ended, identical questions to 10 or more members of the public, it is <span class="text-italic">likely</span> that you will need PRA clearance for RESEARCH activities. </span> <a href="' + praClearancealink + '">Find out how to get PRA clearance</a>. If you are still unsure, please consult <a href="mailto:tts-research@gsa.gov">tts-research@gsa.gov</a> for further clarification.';
            guidanceContainer.className = 'quidance-container guidance-yellow';
        } else if (directObservation === "no" && closeEndedQuestion === "no") {
            guidanceContainer.innerHTML = '<span class="text-bold">"General solicitations" (i.e. open-ended questions that do not specify a set of answers) are not considered "information collections" under PRA. If you are not directly observing participants NOR are you posing a set of identical, close-ended questions (for example, with an open-ended website feedback form), it is <span class="text-italic">likely</span> that you will NOT need PRA clearance for RESEARCH activities.</span> If you are still unsure, please consult <a href="mailto:tts-research@gsa.gov">tts-research@gsa.gov</a> for further clarification.';
            guidanceContainer.className = 'quidance-container guidance-green';
        }
    }
    
    function resetFormOnLoad(formId) {
        const form = document.querySelector(formId);
        
        if (!form) {
            console.warn(`Form not found: ${formId}`);
            return;
        }
    
        if (typeof form.reset === "function") {
            form.reset();
        } else {
            console.warn(`Reset function not found for ${formId}`);
        }
    
        const guidanceContainer = form.querySelector('.quidance-container');
        if (guidanceContainer && guidanceContainer.innerHTML !== undefined) {
            guidanceContainer.innerHTML = "Guidance will appear here";
            guidanceContainer.className = 'quidance-container guidance-gray';
        }
    }    

    function switchQuiz() {
        const quizOptions = document.querySelector('.question-box-intro');
        const showResearchQuizButton = document.querySelector('.open-research-quiz');
        const showRecruitQuizButton = document.querySelector('.open-recruitment-quiz');
        const switchToResearchQuizButton = document.querySelector('.switch-to-research-form');
        const switchToRecruitQuizButton = document.querySelector('.switch-to-recruitment-form');
        const recruitQuiz = document.getElementById("pra-recruitment-quiz");
        const researchQuiz = document.getElementById("pra-researcher-quiz");
    
        if (showResearchQuizButton) {
            showResearchQuizButton.addEventListener('click', () => {
                if (quizOptions) quizOptions.style.display = "none";
                if (recruitQuiz) recruitQuiz.style.display = "none";
                if (researchQuiz) {
                    researchQuiz.style.display = "block";
                    handleFormLogic("#pra-researcher-quiz", researchFormLogic);
                }
            });
        }
    
        if (showRecruitQuizButton) {
            showRecruitQuizButton.addEventListener('click', () => {
                if (quizOptions) quizOptions.style.display = "none";
                if (researchQuiz) researchQuiz.style.display = "none";
                if (recruitQuiz) {
                    recruitQuiz.style.display = "block";
                    handleFormLogic("#pra-recruitment-quiz", recruitmentFormLogic);
                }
            });
        }
    
        if (switchToResearchQuizButton) {
            switchToResearchQuizButton.addEventListener('click', () => {
                if (recruitQuiz) recruitQuiz.style.display = "none";
                if (researchQuiz) {
                    researchQuiz.style.display = "block";
                    handleFormLogic("#pra-researcher-quiz", researchFormLogic);
                }
            });
        }
    
        if (switchToRecruitQuizButton) {
            switchToRecruitQuizButton.addEventListener('click', () => {
                if (researchQuiz) researchQuiz.style.display = "none";
                if (recruitQuiz) {
                    recruitQuiz.style.display = "block";
                    handleFormLogic("#pra-recruitment-quiz", recruitmentFormLogic);
                }
            });
        }
    }
    
    window.addEventListener("pageshow", () => {
        // Reset forms on page load
        if (document.querySelector('#pra-recruitment-quiz')) {
            resetFormOnLoad('#pra-recruitment-quiz');
        }
    
        if (document.querySelector('#pra-researcher-quiz')) {
            resetFormOnLoad('#pra-researcher-quiz');
        }
        switchQuiz();
    });

    // Initialize form logic handlers
    if (document.querySelector('#pra-recruitment-quiz')) {
        handleFormLogic('#pra-recruitment-quiz', recruitmentFormLogic);
        setBaseUrl();
    }
    
    if (document.querySelector('#pra-researcher-quiz')) {
        handleFormLogic('#pra-researcher-quiz', researchFormLogic);
        setBaseUrl();
    }
})();