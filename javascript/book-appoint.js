 // Set current year in footer
        document.getElementById('year').textContent = new Date().getFullYear();

        // Mobile navigation toggle
        const navToggle = document.getElementById('navToggle');
        const mainNav = document.getElementById('mainNav');
        
        navToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });

        // Appointment Booking Logic
        let currentStep = 1;
        const totalSteps = 4;
        let appointmentData = {};

        // Initialize date input with tomorrow as minimum date
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        const minDate = tomorrow.toISOString().split('T')[0];
        document.getElementById('appointment-date').min = minDate;

        // Doctor data
        const doctors = [
            { id: 1, name: "Dr. Sarah Johnson", specialty: "Cardiology", avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" },
            { id: 2, name: "Dr. Michael Chen", specialty: "Neurology", avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" },
            { id: 3, name: "Dr. Emily Rodriguez", specialty: "Pediatrics", avatar: "https://images.unsplash.com/photo-1594824947933-d0501ba2fe65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" },
            { id: 4, name: "Dr. James Wilson", specialty: "Orthopedics", avatar: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" },
            { id: 5, name: "Dr. Lisa Thompson", specialty: "Dental Care", avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" },
            { id: 6, name: "Dr. Robert Davis", specialty: "Ophthalmology", avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" }
        ];

        // Time slots
        const timeSlots = [
            "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
            "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM",
            "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM"
        ];

        // Populate doctors
        function populateDoctors() {
            const doctorSelection = document.getElementById('doctor-selection');
            doctorSelection.innerHTML = '';
            
            doctors.forEach(doctor => {
                const doctorCard = document.createElement('div');
                doctorCard.className = 'doctor-card';
                doctorCard.dataset.id = doctor.id;
                doctorCard.innerHTML = `
                    <img src="${doctor.avatar}" alt="${doctor.name}" class="doctor-avatar">
                    <div class="doctor-name">${doctor.name}</div>
                    <div class="doctor-specialty">${doctor.specialty}</div>
                `;
                
                doctorCard.addEventListener('click', () => {
                    document.querySelectorAll('.doctor-card').forEach(card => {
                        card.classList.remove('selected');
                    });
                    doctorCard.classList.add('selected');
                    appointmentData.doctor = doctor;
                    updateSummary();
                });
                
                doctorSelection.appendChild(doctorCard);
            });
        }

        // Populate time slots
        function populateTimeSlots() {
            const timeSlotsContainer = document.getElementById('time-slots');
            timeSlotsContainer.innerHTML = '';
            
            // Mark some slots as unavailable randomly for demo
            timeSlots.forEach(slot => {
                const isUnavailable = Math.random() < 0.3; // 30% chance of being unavailable
                
                const timeSlot = document.createElement('div');
                timeSlot.className = `time-slot ${isUnavailable ? 'unavailable' : ''}`;
                timeSlot.textContent = slot;
                
                if (!isUnavailable) {
                    timeSlot.addEventListener('click', () => {
                        document.querySelectorAll('.time-slot').forEach(slot => {
                            slot.classList.remove('selected');
                        });
                        timeSlot.classList.add('selected');
                        appointmentData.time = slot;
                        updateSummary();
                    });
                }
                
                timeSlotsContainer.appendChild(timeSlot);
            });
        }

        // Update summary
        function updateSummary() {
            // Update service
            const serviceSelect = document.getElementById('service');
            document.getElementById('summary-service').textContent = 
                serviceSelect.value ? serviceSelect.options[serviceSelect.selectedIndex].text : 'Not selected';
            
            // Update doctor
            document.getElementById('summary-doctor').textContent = 
                appointmentData.doctor ? appointmentData.doctor.name : 'Not selected';
            
            // Update date and time
            const dateInput = document.getElementById('appointment-date');
            document.getElementById('summary-datetime').textContent = 
                dateInput.value && appointmentData.time ? 
                `${formatDate(dateInput.value)} at ${appointmentData.time}` : 'Not selected';
            
            // Update patient name
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            if (firstName && lastName) {
                document.getElementById('summary-patient').textContent = `${firstName} ${lastName}`;
            }
        }

        // Format date for display
        function formatDate(dateString) {
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            return new Date(dateString).toLocaleDateString('en-US', options);
        }

        // Navigation functions
        function goToStep(step) {
            // Hide all steps
            document.querySelectorAll('.form-step').forEach(step => {
                step.classList.remove('active');
            });
            
            // Show current step
            document.getElementById(`step-${step}`).classList.add('active');
            
            // Update step indicator
            document.querySelectorAll('.step').forEach(stepEl => {
                stepEl.classList.remove('active', 'completed');
                
                const stepNumber = parseInt(stepEl.dataset.step);
                if (stepNumber === step) {
                    stepEl.classList.add('active');
                } else if (stepNumber < step) {
                    stepEl.classList.add('completed');
                }
            });
            
            currentStep = step;
        }

        // Next button event listeners
        document.getElementById('next-1').addEventListener('click', () => {
            // Validate step 1
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const dob = document.getElementById('dob').value;
            const gender = document.getElementById('gender').value;
            
            if (!firstName || !lastName || !email || !phone || !dob || !gender) {
                alert('Please fill in all required fields');
                return;
            }
            
            // Save data
            appointmentData.personal = {
                firstName, lastName, email, phone, dob, gender,
                address: document.getElementById('address').value
            };
            
            populateDoctors();
            goToStep(2);
        });

        document.getElementById('next-2').addEventListener('click', () => {
            // Validate step 2
            const service = document.getElementById('service').value;
            if (!service) {
                alert('Please select a medical service');
                return;
            }
            
            if (!appointmentData.doctor) {
                alert('Please select a doctor');
                return;
            }
            
            // Save data
            appointmentData.service = service;
            appointmentData.symptoms = document.getElementById('symptoms').value;
            
            populateTimeSlots();
            goToStep(3);
        });

        document.getElementById('next-3').addEventListener('click', () => {
            // Validate step 3
            const date = document.getElementById('appointment-date').value;
            if (!date) {
                alert('Please select a date');
                return;
            }
            
            if (!appointmentData.time) {
                alert('Please select a time slot');
                return;
            }
            
            // Save data
            appointmentData.date = date;
            
            // Update confirmation details
            document.getElementById('confirmation-id').textContent = `AP-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
            document.getElementById('confirmation-name').textContent = 
                `${appointmentData.personal.firstName} ${appointmentData.personal.lastName}`;
            document.getElementById('confirmation-service').textContent = 
                document.getElementById('service').options[document.getElementById('service').selectedIndex].text;
            document.getElementById('confirmation-doctor').textContent = appointmentData.doctor.name;
            document.getElementById('confirmation-datetime').textContent = 
                `${formatDate(appointmentData.date)} at ${appointmentData.time}`;
            
            goToStep(4);
        });

        // Previous button event listeners
        document.getElementById('prev-2').addEventListener('click', () => goToStep(1));
        document.getElementById('prev-3').addEventListener('click', () => goToStep(2));
        document.getElementById('prev-4').addEventListener('click', () => goToStep(3));

        // Update summary when inputs change
        document.getElementById('service').addEventListener('change', updateSummary);
        document.getElementById('appointment-date').addEventListener('change', updateSummary);
        document.getElementById('firstName').addEventListener('input', updateSummary);
        document.getElementById('lastName').addEventListener('input', updateSummary);

        // Initialize
        populateDoctors();
        updateSummary();
   