/* ==========================================================================
   Javalab Interactive Simulation Provider Registry (Grades 7 - 12)
   Keeps all Javalab entries strictly separate from existing games.json,
   physics-data.js, vascak-simulations.js, and ophysics-simulations.js records,
   merging non-destructively inside the Game section.
   Original Source: https://javalab.org/en/
   ========================================================================== */
(function (global) {
    'use strict';

    var JAVALAB_BASE = 'https://javalab.org/en/';

    function jSim(slug, categoryPath, title, chapter, topic, description, objective) {
        return {
            provider: 'javalab',
            providerLabel: 'Javalab',
            slug: slug,
            title: title,
            chapter: chapter,
            topic: title,
            curriculumTopic: topic,
            description: description,
            objective: objective,
            url: JAVALAB_BASE + slug + '/',
            sourceUrl: JAVALAB_BASE + 'category/' + categoryPath + '/'
        };
    }

    var LESSON_ID_ALIASES = {
        'g12-ch1-l1': 'g12-l1',
        'g12-ch1-l2': 'g12-l2',
        'g12-ch1-l3': 'g12-l3',
        'g12-waves': 'g12-l4',
        'g12-standing': 'g12-l4',
        'g12-ch2-l1': 'g12-l4',
        'g12-ch2-l2': 'g12-interf',
        'g12-mag': 'g12-ch3-l1',
        'g12-l5': 'g12-ch3-l1',
        'g12-l6': 'g12-ch3-l4',
        'g12-ac': 'g12-ch3-l4'
    };

    var JAVALAB_SIMULATIONS_BY_LESSON = {
        /* ==================== GRADE 7 ==================== */
        'g7-l1': [
            jSim(
                'thermometer_en',
                'chemistry_en/heat_en',
                'Thermometer',
                'Grade 7 • Thermal Physics',
                'Temperature & Thermal Energy',
                'Warm and cool a liquid-in-glass thermometer to watch thermal expansion move the column along the scale.',
                'Connect liquid thermal expansion to everyday temperature measurement.'
            ),
            jSim(
                'bimetal_en',
                'chemistry_en/heat_en',
                'Bimetal',
                'Grade 7 • Thermal Physics',
                'Temperature & Thermal Energy',
                'Heat and cool two joined metal strips and observe how unequal expansion bends the bimetallic thermostat bar.',
                'Explain why different metals expand at different rates when heated.'
            ),
            jSim(
                'conduction_3_en',
                'chemistry_en/heat_en',
                'Heat Conduction (Wooden Pot Handles)',
                'Grade 7 • Thermal Physics',
                'Temperature & Thermal Energy',
                'Compare heat travel through a metallic pot body versus a wooden handle using interactive particle warmth.',
                'Distinguish thermal conductors from thermal insulators in everyday kitchen safety.'
            ),
            jSim(
                'convection_en',
                'chemistry_en/heat_en',
                'Convection',
                'Grade 7 • Thermal Physics',
                'Temperature & Thermal Energy',
                'Heat fluid at the bottom of a vessel and trace warm rising currents and cool sinking loops.',
                'Describe convection heat transfer through density changes in liquids and gases.'
            ),
            jSim(
                'room_convection_en',
                'chemistry_en/heat_en',
                'Convection in the Room (Air Conditioners & Stoves)',
                'Grade 7 • Thermal Physics',
                'Temperature & Thermal Energy',
                'Test placing heaters low and air conditioners high inside a room to see indoor air circulation.',
                'Apply convection principles to real-world room heating and cooling.'
            )
        ],
        'g7-l2': [
            jSim(
                'triboelectricity_en',
                'electricity_en',
                'Triboelectricity',
                'Grade 7 • Electricity',
                'Electric Charge',
                'Rub two dissimilar materials together and inspect how electrons transfer to leave opposite net charges.',
                'Explain static charging by friction in terms of electron movement.'
            ),
            jSim(
                'static_electricity_can_en',
                'electricity_en',
                'Static Electricity Experiment Using an Aluminum Can',
                'Grade 7 • Electricity',
                'Electric Charge',
                'Bring a charged rod near a neutral aluminum soda can and watch induced charges pull the can toward it.',
                'Demonstrate electrostatic induction and attraction of neutral conductors.'
            ),
            jSim(
                'electroscope_en',
                'electricity_en',
                'Electroscope',
                'Grade 7 • Electricity',
                'Electric Charge',
                'Approach or touch an electroscope knob with charged rods and watch the gold leaves repel and diverge.',
                'Use an electroscope to detect the presence and sign of static electric charge.'
            ),
            jSim(
                'conductor_and_insulator_en',
                'electricity_en',
                'Conductor and Insulator',
                'Grade 7 • Electricity',
                'Electric Charge',
                'Test whether charges flow through test rods of copper, glass, or plastic to light an indicator.',
                'Classify everyday solids into electrical conductors and insulators.'
            )
        ],
        'g7-l3': [
            jSim(
                'pressure_en',
                'chemistry_en/gas_en',
                'Pressure and Pressing Area',
                'Grade 7 • Mechanics & Fluids',
                'Pressure of Rigid Object',
                'Compare identical weights resting upright versus sideways on soft sponge surfaces to observe sinking depth.',
                'Apply P = F / A to explain why smaller contact areas create higher pressure.'
            ),
            jSim(
                'density_tower_en',
                'mechanics_en',
                'Density Tower',
                'Grade 7 • Mechanics & Fluids',
                'Pressure of Rigid Object',
                'Layer immiscible liquids and drop solid objects (plastic, iron, gold) into a graduated column.',
                'Compare densities of solids and liquids to predict layering and floating order.'
            ),
            jSim(
                'pascals_principle_en',
                'chemistry_en/molecules_in_motion_en',
                "Pascal's Principle",
                'Grade 7 • Mechanics & Fluids',
                'Pressure of Rigid Object',
                'Push down on a small hydraulic syringe piston and watch force transmit through the fluid to lift the large piston.',
                "Observe how fluid pressure applied in an enclosed system multiplies lifting force."
            )
        ],

        /* ==================== GRADE 8 ==================== */
        'g8-l1': [
            jSim(
                'distance_and_displacement_en',
                'measure_en',
                'Distance and Displacement',
                'Grade 8 • Chapter 1: Kinematics',
                'Speed, Velocity & Acceleration',
                'Walk or move between waypoints along curved and straight routes to compare total path length and net displacement.',
                'Distinguish scalar distance (and speed) from vector displacement (and velocity).'
            ),
            jSim(
                'constant_velocity_en',
                'mechanics_en',
                'Constant Velocity',
                'Grade 8 • Chapter 1: Kinematics',
                'Speed, Velocity & Acceleration',
                'Observe strobe markers spaced evenly during uniform motion and inspect the linear position graph.',
                'Recognize uniform speed as equal distance covered in equal time intervals.'
            ),
            jSim(
                'average_velocity_en',
                'mechanics_en',
                'Average Velocity and Instantaneous Velocity',
                'Grade 8 • Chapter 1: Kinematics',
                'Speed, Velocity & Acceleration',
                'Shrink the elapsed time window Δt around a point along curved motion to compare average and instantaneous slope.',
                'Contrast average speed over an interval with instantaneous speedometer speed.'
            )
        ],
        'g8-l2': [
            jSim(
                'uniform_motion_en',
                'mechanics_en',
                'Graph of Constant Velocity Motion',
                'Grade 8 • Chapter 1: Kinematics',
                'Graphs of Equations',
                'Adjust constant car speed and inspect live position-time and velocity-time graphs.',
                'Interpret straight-line slopes on s-t graphs and flat lines on v-t graphs.'
            ),
            jSim(
                'uniformly_accelerated_motion_en',
                'mechanics_en',
                'Uniformly Accelerated Motion',
                'Grade 8 • Chapter 1: Kinematics',
                'Graphs of Equations',
                'Run uniformly accelerated car motion and watch parabolic x-t and linear v-t plots build together.',
                'Connect constant acceleration to parabolic s-t curves and sloped v-t lines.'
            ),
            jSim(
                'ticker_timer_en',
                'mechanics_en',
                'Ticker Timer (Movement on the Slope)',
                'Grade 8 • Chapter 1: Kinematics',
                'Graphs of Equations',
                'Analyze paper ticker-tape dot intervals made by a cart rolling down an incline and convert them into v-t bars.',
                'Build velocity-time graphs directly from real-world ticker-timer dot spacings.'
            )
        ],
        'g8-l3': [
            jSim(
                'free_falling_en',
                'mechanics_en',
                'Free Fall Experiment',
                'Grade 8 • Chapter 1: Kinematics',
                'Free Falling Bodies',
                'Drop a ball under gravity with multi-flash snapshots showing growing spacing each 0.1 s.',
                'Measure downward speed gain and vertical distance fallen in free fall.'
            ),
            jSim(
                'free_fall_en',
                'mechanics_en',
                'Analysis of Free Fall Motion',
                'Grade 8 • Chapter 1: Kinematics',
                'Free Falling Bodies',
                'Inspect consecutive drop intervals stacked side-by-side to reveal linear velocity growth at 9.8 m/s².',
                'Verify uniform gravitational acceleration from equal-time fall strips.'
            ),
            jSim(
                'terminal_velocity_en',
                'energy_en',
                'Terminal Velocity & Air Resistance',
                'Grade 8 • Chapter 1: Kinematics',
                'Free Falling Bodies',
                'Compare objects falling with and without aerodynamic air drag to see terminal velocity balance weight.',
                'Explain why air drag limits falling speed for real-world objects and parachutes.'
            )
        ],
        'g8-l4': [
            jSim(
                'spring_scales_en',
                'mechanics_en',
                'Spring Scales',
                'Grade 8 • Chapter 2: Forces',
                'Weight & Stretching',
                'Hang varied masses from a calibrated spring balance and inspect extension vs. gravitational weight.',
                "Relate spring extension proportionally to suspended weight via Hooke's law."
            ),
            jSim(
                'springs_en',
                'mechanics_en',
                'Connection of Springs',
                'Grade 8 • Chapter 2: Forces',
                'Weight & Stretching',
                'Compare single springs with series and parallel spring combinations under identical loads.',
                'Observe how connecting springs in series increases stretch while parallel shares load.'
            ),
            jSim(
                'gravity_difference_on_several_planet_en',
                'mechanics_en',
                'Gravity Difference on Several Planets',
                'Grade 8 • Chapter 2: Forces',
                'Weight & Stretching',
                'Place the same test mass on scales calibrated for Earth, Moon, and Mars to compare readings.',
                'Distinguish invariant mass (kg) from location-dependent gravitational weight (N).'
            )
        ],
        'g8-l5': [
            jSim(
                'addition_of_force_en',
                'mechanics_en',
                'Addition of Force',
                'Grade 8 • Chapter 2: Forces',
                'Adding Forces & Vectors',
                'Drag two force arrows acting on a ring at adjustable angles and watch their parallelogram resultant.',
                'Find the single net resultant force replacing two concurrent forces.'
            ),
            jSim(
                'addition_of_force_2_en',
                'mechanics_en',
                'Addition of Force 2',
                'Grade 8 • Chapter 2: Forces',
                'Adding Forces & Vectors',
                'Add non-collinear forces interactively and test conditions for three-force static balance.',
                'Visualize equilibrant force equal in magnitude and opposite to the resultant.'
            )
        ],
        'g8-l6': [
            jSim(
                'inertia_en',
                'mechanics_en',
                'Inertia',
                'Grade 8 • Chapter 2: Forces',
                'Force & Acceleration',
                'Pull cards or start/stop carts beneath balanced blocks to observe rest and motion inertia.',
                "Explain Newton's First Law through real everyday inertia demonstrations."
            ),
            jSim(
                'force_movement_en',
                'mechanics_en',
                'Changes in Motion Due to Force (F = ma)',
                'Grade 8 • Chapter 2: Forces',
                'Force & Acceleration',
                'Vary net pulling force and object mass to test direct and inverse acceleration relationships.',
                "Verify a = F / m using Newton's Second Law."
            )
        ],
        'g8-l7': [
            jSim(
                'work-in-science',
                'energy_en',
                "'Work' in Science",
                'Grade 8 • Chapter 3: Work & Energy',
                'Energy, Work & Power',
                'Compare carrying a bag horizontally, holding it still, and lifting it upward against gravity.',
                'Distinguish scientific mechanical work (force parallel to displacement) from everyday effort.'
            ),
            jSim(
                'potential_energy_en',
                'energy_en',
                'Potential Energy Measurement',
                'Grade 8 • Chapter 3: Work & Energy',
                'Energy, Work & Power',
                'Lift a block steadily at constant velocity against gravity so work input matches gained potential energy.',
                'Connect constant-speed lifting work W = F·h directly to gravitational energy storage.'
            )
        ],
        'g8-l8': [
            jSim(
                'kinetic_energy_en',
                'energy_en',
                'Measurement of Kinetic Energy',
                'Grade 8 • Chapter 3: Work & Energy',
                'Kinetic & Potential Energy',
                'Roll balls of different masses and speeds into a wood block and measure sliding stopping distance.',
                'Demonstrate that kinetic energy grows with mass and the square of speed (½mv²).'
            ),
            jSim(
                'potential_energy_by_gravity_en',
                'energy_en',
                'Potential Energy Due to Gravity',
                'Grade 8 • Chapter 3: Work & Energy',
                'Kinetic & Potential Energy',
                'Drop weights of adjustable mass and height onto a clay/pile driver to observe work capacity.',
                'Verify gravitational potential energy Ep = mgh quantitatively.'
            ),
            jSim(
                'mechanical_energy_en',
                'energy_en',
                'Conservation of Mechanical Energy',
                'Grade 8 • Chapter 3: Work & Energy',
                'Kinetic & Potential Energy',
                'Watch gravitational potential and kinetic energy bars swap symmetrically during pendulum or track motion.',
                'Verify conservation of total mechanical energy Ep + Ek = constant.'
            ),
            jSim(
                'rollercoaster_en',
                'energy_en',
                'Conservation of Mechanical Energy in Rollercoaster',
                'Grade 8 • Chapter 3: Work & Energy',
                'Kinetic & Potential Energy',
                'Launch a coaster car across hills and loops while watching speed and energy bars react to elevation.',
                'Predict minimum starting height needed for coaster cars to clear crests and loops.'
            )
        ],
        'g8-l9': [
            jSim(
                'pressure_en',
                'chemistry_en/gas_en',
                'Pressure and Pressing Area',
                'Grade 8 • Chapter 4: Fluid Pressure',
                'Pressure & Liquid Pressure',
                'Inspect pressure variation across contact area before extending pressure concepts into fluids.',
                'Relate force per unit area clearly to hydrostatic liquid pressure.'
            ),
            jSim(
                'pascals_principle_en',
                'chemistry_en/molecules_in_motion_en',
                "Pascal's Principle",
                'Grade 8 • Chapter 4: Fluid Pressure',
                'Pressure & Liquid Pressure',
                'Operate coupled hydraulic cylinders to observe uniform pressure transmission in confined liquids.',
                'Calculate hydraulic piston forces using P1 = P2.'
            ),
            jSim(
                'buoyancy_experiment',
                'measure_en',
                'Buoyancy Experiment',
                'Grade 8 • Chapter 4: Fluid Pressure',
                'Pressure & Liquid Pressure',
                'Lower a suspended cylinder into water on a spring scale and read buoyant upthrust loss.',
                'Measure buoyant upward fluid force vs. submerged depth and fluid density.'
            )
        ],
        'g8-l10': [
            jSim(
                'conduction_en',
                'chemistry_en/heat_en',
                'Conduction',
                'Grade 8 • Chapter 5: Thermal Energy',
                'Conduction & Convection',
                'Heat rods of different metals and compare temperature travel speed from flame to far end.',
                'Rank solid metals and non-metals by thermal conduction speed.'
            ),
            jSim(
                'conduction_2_en',
                'chemistry_en/heat_en',
                'Particle Simulation of Thermal Conduction',
                'Grade 8 • Chapter 5: Thermal Energy',
                'Conduction & Convection',
                'Zoom in on vibrating lattice atoms passing kinetic energy to adjacent particles across a bar.',
                'Explain conduction microscopically through particle-to-particle collisions.'
            ),
            jSim(
                'convection_en',
                'chemistry_en/heat_en',
                'Convection',
                'Grade 8 • Chapter 5: Thermal Energy',
                'Conduction & Convection',
                'Track warm rising plumes and cool descending fluid currents in a heated tank.',
                'Explain natural thermal convection in fluids.'
            ),
            jSim(
                'room_convection_en',
                'chemistry_en/heat_en',
                'Convection in the Room (Air Conditioners & Stoves)',
                'Grade 8 • Chapter 5: Thermal Energy',
                'Conduction & Convection',
                'Compare room airflow patterns when cooling at ceiling height versus heating near the floor.',
                'Apply convection loops to domestic HVAC placement.'
            )
        ],
        'g8-l11': [
            jSim(
                'electromagnetic_waves_around_of_visible_rays_en',
                'light_wave_en',
                'Electromagnetic Waves Around Visible Rays',
                'Grade 8 • Chapter 5: Thermal Energy',
                'Thermal Radiation',
                'Explore infrared and visible radiation wavelengths emitted and transferred across empty space.',
                'Identify infrared radiation as electromagnetic thermal energy transfer without a medium.'
            ),
            jSim(
                'incandescence_en',
                'electricity_en',
                'Incandescent Light Bulb (Heat Dissipation)',
                'Grade 8 • Chapter 5: Thermal Energy',
                'Thermal Radiation',
                'Raise filament temperature in a bulb and observe thermal glow shifting from infrared heat toward visible light.',
                'Connect hot object temperature to thermal radiative emission.'
            )
        ],
        'g8-l12': [
            jSim(
                'electric_circuit_en',
                'electricity_en',
                'Electric Circuit Simulator',
                'Grade 8 • Chapter 6: Electricity',
                'DC Circuits',
                'Assemble live DC circuits with batteries, wires, switches, bulbs, and resistors to watch electron flow.',
                'Build working closed DC circuits and trace electron flow direction.'
            ),
            jSim(
                'ohms_law_en',
                'electricity_en',
                "Ohm's Law (Voltage, Resistance & Current)",
                'Grade 8 • Chapter 6: Electricity',
                'DC Circuits',
                'Adjust battery voltage and resistor ohms to see charge flow rate and needle ammeter respond.',
                "Verify I = V / R in simple DC circuits."
            ),
            jSim(
                'parallel_circuit_en',
                'electricity_en',
                'Parallel Circuit',
                'Grade 8 • Chapter 6: Electricity',
                'DC Circuits',
                'Switch parallel lamp branches on and off to observe independent branch operation and total current.',
                'Explain why parallel branches share identical voltage and operate independently.'
            ),
            jSim(
                'serial_parallel_circuit_en',
                'electricity_en',
                'Series and Parallel Circuit',
                'Grade 8 • Chapter 6: Electricity',
                'DC Circuits',
                'Compare series and parallel lamp circuits side by side for brightness, voltage, and current.',
                'Contrast series vs. parallel circuit behavior quantitatively.'
            )
        ],
        'g8-l13': [
            jSim(
                'indoor_wiring_en',
                'electricity_en',
                'Home Wiring (Indoor Wiring)',
                'Grade 8 • Chapter 6: Electricity',
                'Electrical Power & Domestic Safety',
                'Toggle household appliances in parallel domestic wiring and monitor total main breaker current for overload.',
                'Explain why home outlets wire loads in parallel and how fuses/breakers prevent overload fires.'
            ),
            jSim(
                'stairbulb_en',
                'electricity_en',
                'Stair Switch',
                'Grade 8 • Chapter 6: Electricity',
                'Electrical Power & Domestic Safety',
                'Operate two linked two-way switches controlling a stairwell lamp from upstairs and downstairs.',
                'Understand practical domestic switch wiring and closed-loop control.'
            ),
            jSim(
                'incandescence_en',
                'electricity_en',
                'Incandescent Light Bulb (Heat Dissipation of Resistance)',
                'Grade 8 • Chapter 6: Electricity',
                'Electrical Power & Domestic Safety',
                'Observe resistive electrical power turning into thermal heat and light inside thin tungsten filaments.',
                'Connect current, resistance, and electrical heating P = I²R to appliance safety.'
            )
        ],
        'g8-l14': [
            jSim(
                'wave_propagation_en',
                'light_wave_en',
                'Wave Propagation',
                'Grade 8 • Chapter 7: Waves',
                'General Properties of Waves',
                'Drive waves continuously and inspect wavelength, amplitude, frequency, and wave speed.',
                'Identify wavelength, frequency, amplitude, and wave velocity on moving waves.'
            ),
            jSim(
                'spring_wave_en',
                'light_wave_en',
                'Waves Made with Springs',
                'Grade 8 • Chapter 7: Waves',
                'General Properties of Waves',
                'Switch a coiled slinky between transverse side-to-side shakes and longitudinal push-pull pulses.',
                'Compare particle vibration direction in transverse versus longitudinal waves.'
            ),
            jSim(
                'water_waves_en',
                'light_wave_en',
                'Water Waves',
                'Grade 8 • Chapter 7: Waves',
                'General Properties of Waves',
                'Inspect floating surface cork particles tracing closed loops while the water wave advances forward.',
                'Demonstrate that waves transfer energy without net mass transport.'
            ),
            jSim(
                'sound_wave_en',
                'light_wave_en',
                'Sound Pitch and Volume',
                'Grade 8 • Chapter 7: Waves',
                'General Properties of Waves',
                'Listen and inspect oscilloscope traces while changing sound frequency (pitch) and amplitude (loudness).',
                'Link frequency to musical pitch and wave amplitude to sound volume.'
            )
        ],

        /* ==================== GRADE 9 ==================== */
        'g9-l1': [
            jSim(
                'lever_en',
                'energy_en',
                'Minimal Force Required for the Lever',
                'Grade 9 • Chapter 1: Moments & Equilibrium',
                'Turning Effect of Force',
                'Change fulcrum position and applied effort angle on a rigid bar to minimize turning force.',
                'Apply the principle of moments τ = F·d⊥ to rotational balance.'
            ),
            jSim(
                'addition_of_force_2_en',
                'mechanics_en',
                'Addition of Force 2',
                'Grade 9 • Chapter 1: Moments & Equilibrium',
                'Turning Effect of Force',
                'Explore force equilibrium conditions when non-parallel forces support a stationary load.',
                'Combine force balance and moment balance for static rigid equilibrium.'
            )
        ],
        'g9-l2': [
            jSim(
                'lever_en',
                'energy_en',
                'Minimal Force Required for the Lever',
                'Grade 9 • Chapter 2: Simple Machines',
                'Simple Machines',
                'Compare effort arm and load arm ratios across balanced lever setups.',
                'Calculate mechanical advantage and verify equal input/output work on ideal levers.'
            ),
            jSim(
                'pulley_1_en',
                'energy_en',
                'Pulleys with One Wire',
                'Grade 9 • Chapter 2: Simple Machines',
                'Simple Machines',
                'Lift weights with fixed versus movable single-rope pulleys while comparing force and pull distance.',
                'Distinguish direction-changing fixed pulleys from force-halving movable pulleys.'
            ),
            jSim(
                'pulley_2_en',
                'energy_en',
                'Pulleys with Many Wires',
                'Grade 9 • Chapter 2: Simple Machines',
                'Simple Machines',
                'Count supporting rope strands in compound pulley blocks to compare reduced pull force with extra rope pulled.',
                'Compute ideal mechanical advantage from supporting rope count and confirm Work = Force × Distance.'
            ),
            jSim(
                'gear_en',
                'energy_en',
                'Gear',
                'Grade 9 • Chapter 2: Simple Machines',
                'Simple Machines',
                'Mesh gears of adjustable tooth counts to observe rotation direction, speed ratio, and torque advantage.',
                'Apply gear-tooth ratios to speed multiplication and torque transformation.'
            ),
            jSim(
                'force_on_inclined_plane_en',
                'mechanics_en',
                'Force on Inclined Plane',
                'Grade 9 • Chapter 2: Simple Machines',
                'Simple Machines',
                'Pull a cart along ramps of varied slope angles to compare parallel holding force and work.',
                'Relate inclined plane angle to mechanical advantage L / h.'
            )
        ],
        'g9-l3': [
            jSim(
                'electric_circuit_en',
                'electricity_en',
                'Electric Circuit Simulator',
                'Grade 9 • Chapter 3: Electricity',
                'Electricity',
                'Build multi-branch DC circuits with resistors, bulbs, and switches to inspect current flow.',
                'Construct and test real series and parallel electrical loops.'
            ),
            jSim(
                'ohms_law_en',
                'electricity_en',
                "Ohm's Law",
                'Grade 9 • Chapter 3: Electricity',
                'Electricity',
                'Adjust resistance and EMF to verify current proportionality quantitatively.',
                "Solve circuit current and resistance calculations with V = IR."
            ),
            jSim(
                'electric_potential_en',
                'electricity_en',
                'Voltage & Current in Series and Parallel Circuits',
                'Grade 9 • Chapter 3: Electricity',
                'Electricity',
                'Measure potential differences and branch currents side by side across series and parallel loops.',
                'Explain voltage division in series and current division in parallel circuits.'
            ),
            jSim(
                'how-to-use-a-multimeter',
                'electricity_en',
                'How to Use a Multimeter',
                'Grade 9 • Chapter 3: Electricity',
                'Electricity',
                'Dial a virtual multimeter to measure DC voltage, current, and resistance safely on a test circuit.',
                'Select proper series ammeter vs. parallel voltmeter probes and ranges.'
            )
        ],
        'g9-l4': [
            jSim(
                'magnet_en',
                'electricity_en',
                'Magnetic Field Around Magnet (or Earth)',
                'Grade 9 • Chapter 4: Magnetism',
                'Magnetic Field',
                'Move miniature compasses around a magnet or Earth dipole to trace magnetic field direction.',
                'Map North-to-South external magnetic field lines with compass needles.'
            ),
            jSim(
                'oersteds_experiment_en',
                'electricity_en',
                "Oersted's Experiment",
                'Grade 9 • Chapter 4: Magnetism',
                'Magnetic Field',
                'Switch DC current on and reverse polarity above a compass needle to watch magnetic deflection.',
                'Demonstrate that electric currents generate surrounding magnetic fields.'
            ),
            jSim(
                'magnetic_field_around_a_coil_en',
                'electricity_en',
                'Magnetic Field Around a Coil',
                'Grade 9 • Chapter 4: Magnetism',
                'Magnetic Field',
                'Inspect solenoid internal and external magnetic field lines controlled by coil current.',
                'Apply right-hand grip rule to find electromagnet North and South poles.'
            ),
            jSim(
                'dc_motor_en',
                'electricity_en',
                'DC Motor',
                'Grade 9 • Chapter 4: Magnetism',
                'Magnetic Field',
                'Operate a rotating commutator DC motor coil inside a permanent magnet stator.',
                'Explain how split-ring commutation keeps a DC motor spinning continuously.'
            ),
            jSim(
                'electric_transformer_en',
                'electricity_en',
                'Electric Transformer',
                'Grade 9 • Chapter 4: Magnetism',
                'Magnetic Field',
                'Adjust primary and secondary coil turns to test AC step-up and step-down voltage conversion.',
                'Verify V1 / V2 = N1 / N2 in electromagnetic power transformers.'
            )
        ],
        'g9-l5': [
            jSim(
                'law_of_reflection_en',
                'light_wave_en',
                'Law of Reflection',
                'Grade 9 • Chapter 5: Optics',
                'Light',
                'Aim an incident light beam onto flat mirror surfaces and measure normal angles.',
                'Verify θi = θr quantitatively.'
            ),
            jSim(
                'principle_of_mirror_en',
                'light_wave_en',
                'Principle of Mirror',
                'Grade 9 • Chapter 5: Optics',
                'Light',
                'Drag eye and object positions to discover the minimum mirror size and height needed to view an image.',
                'Trace virtual reflected rays to understand plane mirror image geometry.'
            ),
            jSim(
                'mirrors_en',
                'light_wave_en',
                'Convex and Concave Mirrors',
                'Grade 9 • Chapter 5: Optics',
                'Light',
                'Toggle between concave and convex spherical mirrors while moving an object arrow interactively.',
                'Predict real/virtual and upright/inverted image characteristics for curved mirrors.'
            ),
            jSim(
                'lens_en',
                'light_wave_en',
                'Convex Lens & Concave Lens',
                'Grade 9 • Chapter 5: Optics',
                'Light',
                'Switch between convex converging and concave diverging lenses while inspecting principal rays and live image distance.',
                'Construct geometric ray diagrams and observe image size and orientation across lenses.'
            ),
            jSim(
                'total_internal_reflection_en',
                'light_wave_en',
                'Total Internal Reflection and Optical Fiber',
                'Grade 9 • Chapter 5: Optics',
                'Light',
                'Increase ray angle across the critical angle and guide trapped light along a bent optical fiber.',
                'Explain critical angle refraction and total internal reflection in fiber optics.'
            )
        ],

        /* ==================== GRADE 10 ==================== */
        'g10-l1': [
            jSim(
                'uniformly_accelerated_motion_en',
                'mechanics_en',
                'Uniformly Accelerated Motion',
                'Grade 10 • Chapter 1: Mechanics',
                'Rectilinear Motion & Kinematics',
                'Simulate uniformly accelerated rectilinear travel alongside live distance and velocity plots.',
                'Verify x(t) and v(t) kinematic equations against graphical motion curves.'
            ),
            jSim(
                'stroboscope_en',
                'mechanics_en',
                'Video Motion Analysis (Stroboscope)',
                'Grade 10 • Chapter 1: Mechanics',
                'Rectilinear Motion & Kinematics',
                'Analyze multi-flash strobe snapshots of accelerating and free-falling motion step by step.',
                'Compute instantaneous velocity and constant acceleration from equal-time position marks.'
            ),
            jSim(
                'free_fall_2_en',
                'mechanics_en',
                'Free Fall Motion Analysis',
                'Grade 10 • Chapter 1: Mechanics',
                'Rectilinear Motion & Kinematics',
                'Compare free-fall intervals and plot displacement versus squared time to extract g.',
                'Solve quantitative vertical free-fall kinematics problems.'
            )
        ],
        'g10-l2': [
            jSim(
                'force_movement_en',
                'mechanics_en',
                'Changes in Motion Due to Force (F = ma)',
                'Grade 10 • Chapter 1: Mechanics',
                "Dynamics: Newton's Laws",
                'Adjust applied force and mass interactively to inspect resultant linear acceleration.',
                "Apply Newton's Second Law ΣF = ma quantitatively."
            ),
            jSim(
                'force_on_inclined_plane_en',
                'mechanics_en',
                'Force on Inclined Plane',
                'Grade 10 • Chapter 1: Mechanics',
                "Dynamics: Newton's Laws",
                'Vary slope angle and resolve gravitational weight into normal and down-incline force vectors.',
                'Decompose forces along parallel and perpendicular axes on inclined planes.'
            ),
            jSim(
                'pulley_3_en',
                'mechanics_en',
                'Movement of an Object Suspended from a Pulley',
                'Grade 10 • Chapter 1: Mechanics',
                "Dynamics: Newton's Laws",
                'Test coupled pulley dynamics where unequal hanging masses accelerate together.',
                'Write free-body equations for connected two-body pulley systems.'
            )
        ],
        'g10-l3': [
            jSim(
                'work-in-science',
                'energy_en',
                "'Work' in Science",
                'Grade 10 • Chapter 1: Mechanics',
                'Work, Kinetic Energy & Power',
                'Compare mechanical work done when force is parallel versus perpendicular to displacement.',
                'Apply W = F·s·cos θ and distinguish positive vs. zero work.'
            ),
            jSim(
                'kinetic_energy_and_stopping_distance_en',
                'energy_en',
                'Kinetic Energy and Stopping Distance',
                'Grade 10 • Chapter 1: Mechanics',
                'Work, Kinetic Energy & Power',
                'Change car initial speed and observe how braking stopping distance scales quadratically with v².',
                'Apply the work-kinetic energy theorem −f·d = ΔEk = −½mv² to braking distance.'
            ),
            jSim(
                'mechanical_energy_conversion_en',
                'energy_en',
                'Mechanical Energy Conversion',
                'Grade 10 • Chapter 1: Mechanics',
                'Work, Kinetic Energy & Power',
                'Track continuous potential-to-kinetic energy conversions across changing elevations.',
                'Apply mechanical energy conservation across curved tracks and falls.'
            )
        ],
        'g10-l4': [
            jSim(
                'buoyancy_comparison_en',
                'mechanics_en',
                'Buoyancy Comparison',
                'Grade 10 • Chapter 1: Mechanics',
                'Fluids & Atmospheric Pressure',
                'Submerge blocks of equal volume or equal mass side by side in liquid to compare buoyant forces.',
                "Prove that buoyant force Fb = ρfluid·Vsub·g depends on displaced volume, not block material."
            ),
            jSim(
                'archimedes_en',
                'mechanics_en',
                'Buoyancy: Archimedes and the Crown',
                'Grade 10 • Chapter 1: Mechanics',
                'Fluids & Atmospheric Pressure',
                'Weigh pure gold versus adulterated crowns in air and underwater to expose density differences.',
                "Apply Archimedes' principle and apparent submerged weight to identify unknown materials."
            ),
            jSim(
                'torricellis_experiment_en',
                'chemistry_en/gas_en',
                "Torricelli's Experiment",
                'Grade 10 • Chapter 1: Mechanics',
                'Fluids & Atmospheric Pressure',
                'Tilt and vary tube cross-section in a mercury barometer to see vertical height stay fixed at 760 mmHg.',
                'Explain atmospheric pressure balance P0 = ρgh in mercury barometers.'
            ),
            jSim(
                'barometer_en',
                'chemistry_en/gas_en',
                'Mercury Barometers on Different Planets',
                'Grade 10 • Chapter 1: Mechanics',
                'Fluids & Atmospheric Pressure',
                'Compare atmospheric pressure and mercury column height across Earth, Venus, Mars, and Titan.',
                'Calculate hydrostatic barometer height changes with gravity and ambient pressure.'
            ),
            jSim(
                'atmospheric_pressure_en',
                'chemistry_en/gas_en',
                'Density Distribution in the Atmosphere',
                'Grade 10 • Chapter 1: Mechanics',
                'Fluids & Atmospheric Pressure',
                'Inspect molecular spacing from sea level to high altitude showing why air pressure drops upward.',
                'Relate altitude drop in atmospheric pressure to gravity and column weight of air above.'
            )
        ],
        'g10-ch2-l1': [
            jSim(
                'heat_capacity_en',
                'chemistry_en/heat_en',
                'Heat Capacity',
                'Grade 10 • Chapter 2: Thermodynamics',
                'Heat, Temperature & Gas Model',
                'Compare heating curves for different water masses under equal burner power.',
                'Distinguish extensive heat capacity C from material specific heat c.'
            ),
            jSim(
                'specific_heat_en',
                'chemistry_en/heat_en',
                'Specific Heat',
                'Grade 10 • Chapter 2: Thermodynamics',
                'Heat, Temperature & Gas Model',
                'Apply equal thermal energy to sand, metal, and water and compare temperature rise ΔT.',
                'Apply Q = m·c·ΔT to predict temperature changes of different substances.'
            ),
            jSim(
                'status_solid_liquid_gas_en',
                'chemistry_en/gas_en',
                'State of Matter',
                'Grade 10 • Chapter 2: Thermodynamics',
                'Heat, Temperature & Gas Model',
                'Visualize molecular arrangement and motion across solid crystal, flowing liquid, and free gas phases.',
                'Describe solid, liquid, and gas states using particle spacing and thermal kinetic energy.'
            ),
            jSim(
                'boyles_law_en',
                'chemistry_en/gas_en',
                "Boyle's Law",
                'Grade 10 • Chapter 2: Thermodynamics',
                'Heat, Temperature & Gas Model',
                'Compress trapped gas with weights at fixed temperature and plot pressure against volume.',
                "Verify Boyle's inverse gas law P1·V1 = P2·V2."
            ),
            jSim(
                'charles_law_en',
                'chemistry_en/gas_en',
                "Charles's Law",
                'Grade 10 • Chapter 2: Thermodynamics',
                'Heat, Temperature & Gas Model',
                'Warm a piston cylinder at constant pressure and watch gas volume expand linearly with Kelvin T.',
                "Verify Charles's law V1 / T1 = V2 / T2 and absolute zero extrapolation."
            ),
            jSim(
                'brownian_motion_en',
                'chemistry_en/molecules_in_motion_en',
                'Brownian Motion',
                'Grade 10 • Chapter 2: Thermodynamics',
                'Heat, Temperature & Gas Model',
                'Observe random thermal bombardment knocking a visible pollen grain along a zigzag trajectory.',
                'Cite Brownian motion as direct evidence of continuous molecular thermal motion.'
            )
        ],
        'g10-ch3-l1': [
            jSim(
                'electric_field_line_en',
                'electricity_en',
                'Electric Field Line',
                'Grade 10 • Chapter 3: Electricity & Magnetism',
                "Electrostatics & Coulomb's Law",
                'Arrange positive and negative point charges and trace electric field lines in 2D space.',
                'Interpret field line direction, symmetry, and line density around charges.'
            ),
            jSim(
                'electrostatic_induction_en',
                'electricity_en',
                'Electrostatic Induction',
                'Grade 10 • Chapter 3: Electricity & Magnetism',
                "Electrostatics & Coulomb's Law",
                'Charge insulated metal spheres permanently by grounding and separating while a charged rod is near.',
                'Trace step-by-step electron redistribution during charging by induction.'
            ),
            jSim(
                'charge_conservation_en',
                'electricity_en',
                'Charge Conservation',
                'Grade 10 • Chapter 3: Electricity & Magnetism',
                "Electrostatics & Coulomb's Law",
                'Touch charged conductive spheres together and track total net charge sharing.',
                'Verify conservation of total electric charge during conduction and neutralization.'
            ),
            jSim(
                'electric_potential_2_en',
                'electricity_en',
                'Electric Potential',
                'Grade 10 • Chapter 3: Electricity & Magnetism',
                "Electrostatics & Coulomb's Law",
                'Explore gravitational hill analogies alongside electrostatic potential V around point charges.',
                'Connect electric potential difference ΔV to electrostatic work per unit charge.'
            )
        ],
        'g10-ch3-l2': [
            jSim(
                'resistance_connection_en',
                'electricity_en',
                'Resistance Connection (Series & Parallel)',
                'Grade 10 • Chapter 3: Electricity & Magnetism',
                'DC Circuits & Magnetic Fields',
                'Combine resistors in series and parallel using pipe-flow analogies to inspect equivalent resistance.',
                'Derive Req = R1 + R2 for series and 1/Req = 1/R1 + 1/R2 for parallel resistors.'
            ),
            jSim(
                'magnetic_field_around_a_wire_en',
                'electricity_en',
                'Magnetic Field Around a Wire',
                'Grade 10 • Chapter 3: Electricity & Magnetism',
                'DC Circuits & Magnetic Fields',
                'Flip current direction in a vertical wire surrounded by compasses to observe circular B-field loops.',
                'Apply right-hand grip rule to straight current-carrying conductors.'
            ),
            jSim(
                'lorentzs_force_en',
                'electricity_en',
                'Lorentz Force',
                'Grade 10 • Chapter 3: Electricity & Magnetism',
                'DC Circuits & Magnetic Fields',
                'Toggle battery polarity and horseshoe magnet poles on a swinging wire rod to observe magnetic force.',
                "Predict Laplace force direction on a wire in a magnetic field using Fleming's left-hand rule."
            ),
            jSim(
                'dc_motor_2_en',
                'electricity_en',
                'DC Motor 2',
                'Grade 10 • Chapter 3: Electricity & Magnetism',
                'DC Circuits & Magnetic Fields',
                'Inspect magnetic forces acting on opposite loop arms through every half-turn of a DC motor.',
                'Explain continuous armature torque and brush/commutator reversal.'
            )
        ],
        'g10-ch3-l3': [
            jSim(
                'faradays_law_en',
                'electricity_en',
                "Faraday's Law of Electromagnetic Induction",
                'Grade 10 • Chapter 3: Electricity & Magnetism',
                'AC & Transformer Systems',
                'Move a bar magnet through a coil at varied speed and polarity while monitoring galvanometer deflection.',
                "Explain induced EMF from rate of magnetic flux change and Lenz's opposing current."
            ),
            jSim(
                'ac_generator_en',
                'electricity_en',
                'AC Power Generator',
                'Grade 10 • Chapter 3: Electricity & Magnetism',
                'AC & Transformer Systems',
                'Rotate an armature coil smoothly inside a magnetic field and plot instantaneous AC voltage output.',
                'Connect mechanical coil rotation directly to sinusoidal alternating EMF generation.'
            ),
            jSim(
                'electric_transformer_en',
                'electricity_en',
                'Electric Transformer',
                'Grade 10 • Chapter 3: Electricity & Magnetism',
                'AC & Transformer Systems',
                'Vary primary and secondary winding turns on an iron core transformer to inspect voltage stepping.',
                'Apply ideal transformer turns ratio Vp/Vs = Np/Ns.'
            ),
            jSim(
                'power-transmission',
                'electricity_en',
                'Transmitting Electricity at High Voltages',
                'Grade 10 • Chapter 3: Electricity & Magnetism',
                'AC & Transformer Systems',
                'Compare line heating losses I²R during low-voltage versus high-voltage AC power transmission.',
                'Explain why electrical grids use step-up transformers for long-distance transmission.'
            )
        ],
        'g10-ch4-l1': [
            jSim(
                'principle_of_least_time_en',
                'light_wave_en',
                "Principle of Least Time (Fermat's Principle)",
                'Grade 10 • Chapter 4: Geometric Optics',
                'Light Propagation & Reflection',
                'Drag reflection and refraction boundary points to compare optical travel times against the shortest path.',
                "Derive both the Law of Reflection and Snell's Law conceptually from Fermat's Principle."
            ),
            jSim(
                'law_of_reflection_en',
                'light_wave_en',
                'Law of Reflection',
                'Grade 10 • Chapter 4: Geometric Optics',
                'Light Propagation & Reflection',
                'Aim an incident light beam on mirrors at varied angles and measure reflected angle directly.',
                'Verify specular reflection angle equality θi = θr.'
            ),
            jSim(
                'optics_en',
                'light_wave_en',
                'Optical Experiment Simulator',
                'Grade 10 • Chapter 4: Geometric Optics',
                'Light Propagation & Reflection',
                'Build free-form optical bench arrangements of plane/curved mirrors, prisms, and lenses with ray beams.',
                'Experiment freely with light reflection and refraction across optical elements.'
            )
        ],
        'g10-ch4-l2': [
            jSim(
                'light_refraction_en',
                'light_wave_en',
                'Light Refraction',
                'Grade 10 • Chapter 4: Geometric Optics',
                "Refraction & Snell's Law",
                'Trace advancing light wavefronts crossing between fast and slow refractive media.',
                "Connect speed change across boundaries directly to Snell's bending angle."
            ),
            jSim(
                'refraction_a_fish_under_water_en',
                'light_wave_en',
                'Refraction on Water (Apparent Depth)',
                'Grade 10 • Chapter 4: Geometric Optics',
                "Refraction & Snell's Law",
                'Move an underwater fish and observer eye to compare real depth with refracted apparent image position.',
                'Explain apparent depth illusion from water-to-air light refraction.'
            ),
            jSim(
                'correction_of_near_sightedness_en',
                'light_wave_en',
                'Correction of Near-Sightedness & Far-Sightedness',
                'Grade 10 • Chapter 4: Geometric Optics',
                "Refraction & Snell's Law",
                'Test diverging and converging eyeglass prescriptions to bring blurred rays sharply onto the retina.',
                'Relate concave corrective lenses to myopia and convex lenses to hyperopia.'
            )
        ],
        'g10-ch4-l3': [
            jSim(
                'prism_en',
                'light_wave_en',
                'Prism',
                'Grade 10 • Chapter 4: Geometric Optics',
                'Double Plane, Slab, & Prism',
                'Rotate a triangular glass prism in white and monochromatic beams to inspect refraction and spectrum splitting.',
                'Analyze two-face prism deviation angles and color dispersion.'
            ),
            jSim(
                'total_internal_reflection_en',
                'light_wave_en',
                'Total Internal Reflection and Optical Fiber',
                'Grade 10 • Chapter 4: Geometric Optics',
                'Double Plane, Slab, & Prism',
                'Explore critical angle reflection and light guidance through curved glass fibers and optical prisms.',
                'Apply total internal reflection thresholds in prisms and optical fibers.'
            ),
            jSim(
                'rainbow_formation_en',
                'light_wave_en',
                'Rainbow Formation',
                'Grade 10 • Chapter 4: Geometric Optics',
                'Double Plane, Slab, & Prism',
                'Follow sunlight entering water droplets, undergoing internal reflection, and dispersing by color angle.',
                'Connect refraction, internal reflection, and dispersion to primary rainbow viewing angles.'
            )
        ],

        /* ==================== GRADE 11 ==================== */
        'g11-l1': [
            jSim(
                'projectile_en',
                'mechanics_en',
                'Free Falling vs. Horizontal Projectile',
                'Grade 11 • Chapter 1: Mechanics',
                'Kinematics in 2D & Projectile Motion',
                'Drop one ball vertically while launching another horizontally to compare vertical strobe markers.',
                'Confirm independence of horizontal uniform velocity and vertical free fall.'
            ),
            jSim(
                'projectile_motion_en',
                'mechanics_en',
                'Projectile Motion',
                'Grade 11 • Chapter 1: Mechanics',
                'Kinematics in 2D & Projectile Motion',
                'Drag to set launch angle and speed, toggling horizontal and vertical motion shadows.',
                'Analyze 2D parabolic range, apex height, and velocity components.'
            ),
            jSim(
                'parabolic_motion_en',
                'mechanics_en',
                'Parabolic Motion (Monkey and Hunter)',
                'Grade 11 • Chapter 1: Mechanics',
                'Kinematics in 2D & Projectile Motion',
                'Aim directly at a target that releases into free fall the instant a dart launches at varied speeds.',
                'Prove that equal vertical acceleration g guarantees collision regardless of dart speed.'
            ),
            jSim(
                'blocklab_parabolic_en',
                'tech_en',
                'Blocklab – Parabolic Motion Simulation',
                'Grade 11 • Chapter 1: Mechanics & Technology',
                'Kinematics in 2D & Projectile Motion',
                'Program 2D projectile update equations (vx, vy, gravity step) with visual blocks and run live trajectory.',
                'Model numerical 2D projectile kinematics step-by-step using computational blocks.'
            )
        ],
        'g11-l2': [
            jSim(
                'elevator_en',
                'mechanics_en',
                'Inertia Force of Elevator',
                'Grade 11 • Chapter 1: Mechanics',
                'Accelerated Frames & Rotational Dynamics',
                'Accelerate an elevator upward or downward and observe scale weight and apparent inertial pseudo-force.',
                'Analyze normal force N = m(g ± a) inside accelerating reference frames.'
            ),
            jSim(
                'condition_of_circular_movement_en',
                'mechanics_en',
                'Condition of Uniform Circular Motion',
                'Grade 11 • Chapter 1: Mechanics',
                'Accelerated Frames & Rotational Dynamics',
                'Vary tangential velocity and central pull force to test when motion closes into a circular orbit.',
                'Connect centripetal force Fc = mv²/r to circular trajectory maintenance.'
            ),
            jSim(
                'conical_pendulum_en',
                'mechanics_en',
                'Conical Pendulum',
                'Grade 11 • Chapter 1: Mechanics',
                'Accelerated Frames & Rotational Dynamics',
                'Spin a conical pendulum at varied angular speeds and inspect cone angle and centripetal tension component.',
                'Solve horizontal circular dynamics T·sin θ = mω²r alongside T·cos θ = mg.'
            ),
            jSim(
                'moment_of_inertia_en',
                'mechanics_en',
                'Moment of Inertia',
                'Grade 11 • Chapter 1: Mechanics',
                'Accelerated Frames & Rotational Dynamics',
                'Compare how radial mass distribution resists angular acceleration under identical applied torque.',
                'Explain moment of inertia I = Σmr² qualitatively and quantitatively.'
            ),
            jSim(
                'moment_of_inertia_2_en',
                'mechanics_en',
                'Moment of Inertia of Various Shapes',
                'Grade 11 • Chapter 1: Mechanics',
                'Accelerated Frames & Rotational Dynamics',
                'Race hollow cylinders, solid cylinders, and spheres down an incline to compare rotational inertia.',
                'Apply rotational kinetic energy and α = τ / I to rolling races.'
            ),
            jSim(
                'blocklab_circular_en',
                'tech_en',
                'Blocklab – Circular Motion Simulation',
                'Grade 11 • Chapter 1: Mechanics & Technology',
                'Accelerated Frames & Rotational Dynamics',
                'Build circular dynamics loops in Blocklab code blocks to test centripetal acceleration in real time.',
                'Translate circular motion kinematics and centripetal acceleration into simulation logic.'
            )
        ],
        'g11-l3': [
            jSim(
                'earths_gravity_en',
                'mechanics_en',
                'Range and Intensity of Gravity',
                'Grade 11 • Chapter 1: Mechanics',
                'Universal Gravitation & Satellite Motion',
                'Vary altitude above Earth to watch inverse-square gravitational field strength drop smoothly with radius.',
                'Apply g(r) = GM / r² across Earth altitudes and deep space.'
            ),
            jSim(
                'principle_of_satellite_en',
                'mechanics_en',
                'Principle of Satellite',
                'Grade 11 • Chapter 1: Mechanics',
                'Universal Gravitation & Satellite Motion',
                "Launch cannonballs at increasing horizontal speeds until trajectory curves match Earth's curvature.",
                'Connect circular orbital velocity v = √(GM/r) to continuous free-fall orbiting.'
            ),
            jSim(
                'orbit_en',
                'mechanics_en',
                'Satellite Circular Orbit Creation Game',
                'Grade 11 • Chapter 1: Mechanics',
                'Universal Gravitation & Satellite Motion',
                'Time thrust speed and position to capture a spacecraft into stable circular planetary orbits.',
                'Balance orbital velocity and radial distance to maintain closed circular orbits.'
            ),
            jSim(
                'gravity_en',
                'mechanics_en',
                'Gravity Simulator',
                'Grade 11 • Chapter 1: Mechanics',
                'Universal Gravitation & Satellite Motion',
                'Place stars and planets with custom masses and initial velocities to simulate multi-body orbits.',
                "Explore Newton's law of universal gravitation F = Gm1m2/r² and Keplerian orbital paths."
            )
        ],
        'g11-l4': [
            jSim(
                'impulse_en',
                'mechanics_en',
                'Impulse',
                'Grade 11 • Chapter 1: Mechanics',
                'Impulse, Momentum & Collisions',
                'Drop eggs onto hard stone versus soft cushion and compare force-time impact curves of equal impulse.',
                'Apply impulse-momentum theorem J = Favg·Δt = Δp to impact safety.'
            ),
            jSim(
                'collision_en',
                'mechanics_en',
                'Collision (1D Elastic & Inelastic)',
                'Grade 11 • Chapter 1: Mechanics',
                'Impulse, Momentum & Collisions',
                'Collide two carts of adjustable masses, initial velocities, and restitution coefficient e.',
                'Solve momentum conservation m1v1 + m2v2 = m1v1′ + m2v2′ across elastic and inelastic hits.'
            ),
            jSim(
                'collision_2_en',
                'mechanics_en',
                'Collision 2',
                'Grade 11 • Chapter 1: Mechanics',
                'Impulse, Momentum & Collisions',
                'Observe 2D and multi-particle momentum vector conservation during angled impacts.',
                'Apply 2D component-wise momentum conservation Σpx, Σpy.'
            ),
            jSim(
                'newtons_cradle_en',
                'mechanics_en',
                "Newton's Cradle",
                'Grade 11 • Chapter 1: Mechanics',
                'Impulse, Momentum & Collisions',
                'Release 1, 2, or 3 steel spheres and verify why equal sphere counts kick out on the opposite end.',
                'Explain why simultaneous conservation of p and Ek dictates exact cradle rebound counts.'
            )
        ],
        'g11-ch1-l5': [
            jSim(
                'pendulum_en',
                'mechanics_en',
                'Force to Move the Pendulum',
                'Grade 11 • Chapter 1: Mechanics',
                'Energy Conservation, Pendulum & Moduli',
                'Observe gravity weight, string tension, and tangential restoring force along a swinging pendulum arc.',
                'Resolve pendulum restoring force F = −mg·sin θ and analyze circular tension at the bottom.'
            ),
            jSim(
                'period_of_pendulum_en',
                'mechanics_en',
                'Period of Physical Pendulum',
                'Grade 11 • Chapter 1: Mechanics',
                'Energy Conservation, Pendulum & Moduli',
                'Vary pendulum rod geometry and pivot offset to explore simple vs. physical pendulum oscillation period.',
                'Compare T = 2π√(L/g) with rotational-inertia physical pendulum period T = 2π√(I / mgd).'
            ),
            jSim(
                'elastic_energy_en',
                'energy_en',
                'Elastic Energy',
                'Grade 11 • Chapter 1: Mechanics',
                'Energy Conservation, Pendulum & Moduli',
                'Compress a spring with a cart and verify launching distance and speed from stored ½kx².',
                'Apply elastic potential energy Ue = ½kx² in conservative energy calculations.'
            )
        ],
        'g11-ch1-l6': [
            jSim(
                'bernoullis_principle_en',
                'chemistry_en/molecules_in_motion_en',
                "Bernoulli's Principle",
                'Grade 11 • Chapter 1: Mechanics',
                'Fluid Dynamics, Continuity & Viscosity',
                'Send steady fluid through narrow and wide pipe sections while observing particle speed and manometer pressure.',
                'Apply equation of continuity A1v1 = A2v2 and Bernoulli pressure drop in faster flow.'
            ),
            jSim(
                'balloon_en',
                'mechanics_en',
                'Pressure, Buoyancy, and Gravity Applied to a Balloon',
                'Grade 11 • Chapter 1: Mechanics',
                'Fluid Dynamics, Continuity & Viscosity',
                'Explore internal gas pressure, displaced-air buoyancy, and gravitational equilibrium across altitudes.',
                'Connect atmospheric density gradient and Archimedes buoyancy to gas-filled balloons.'
            )
        ],
        'g11-ch2-l1': [
            jSim(
                'specific_heat_en',
                'chemistry_en/heat_en',
                'Specific Heat',
                'Grade 11 • Chapter 2: Thermal Physics & Waves',
                'Thermal Physics, Expansion & Heat',
                'Heat equal masses of materials of distinct specific heat capacity under constant heat input.',
                'Solve calorimetry and specific heat Q = m·c·ΔT calculations.'
            ),
            jSim(
                'kinetic_theory_model_en',
                'chemistry_en/molecules_in_motion_en',
                'Kinetic Theory Model',
                'Grade 11 • Chapter 2: Thermal Physics & Waves',
                'Thermal Physics, Expansion & Heat',
                'Simulate elastic gas spheres colliding inside a piston container while adjusting temperature and volume.',
                'Relate macroscopic gas pressure to molecular wall collision rate and kinetic energy.'
            ),
            jSim(
                'gas_en',
                'chemistry_en/heat_en',
                'Root-Mean-Square Velocity of Gas Molecules (Vrms)',
                'Grade 11 • Chapter 2: Thermal Physics & Waves',
                'Thermal Physics, Expansion & Heat',
                'Compare lighter and heavier ideal gas molecules at matching temperature to inspect vrms scaling.',
                'Apply vrms = √(3RT/M) to molecular speed and temperature.'
            )
        ],
        'g11-ch2-l2': [
            jSim(
                'spring_en',
                'mechanics_en',
                'Spring Pendulum (Horizontal SHM)',
                'Grade 11 • Chapter 2: Thermal Physics & Waves',
                'Periodic Motion, Oscillations & Waves',
                'Oscillate a frictionless horizontal mass-spring block while plotting displacement, velocity, and restoring force.',
                'Verify harmonic equation a = −(k/m)x and period T = 2π√(m/k).'
            ),
            jSim(
                'spring_pendulum_en',
                'mechanics_en',
                'Spring Pendulum (Vertical SHM)',
                'Grade 11 • Chapter 2: Thermal Physics & Waves',
                'Periodic Motion, Oscillations & Waves',
                'Trace vertical spring-mass SHM around its shifted static equilibrium position.',
                'Show that constant gravity shifts equilibrium offset without altering oscillation period T.'
            ),
            jSim(
                'resonance_en',
                'mechanics_en',
                'Resonance',
                'Grade 11 • Chapter 2: Thermal Physics & Waves',
                'Periodic Motion, Oscillations & Waves',
                'Sweep driving oscillation frequency across coupled pendulums of varied lengths to excite sharp resonance.',
                'Explain maximum amplitude energy transfer when driving frequency matches natural frequency f0.'
            ),
            jSim(
                'doppler_effect_en',
                'light_wave_en',
                'Doppler Effect',
                'Grade 11 • Chapter 2: Thermal Physics & Waves',
                'Periodic Motion, Oscillations & Waves',
                'Move a sound source past an observer at subsonic and supersonic speeds to inspect compressed wavefronts.',
                'Calculate frequency shifts and identify Mach shock-wave cones.'
            )
        ],
        'g11-ch3-l1': [
            jSim(
                'capacitor_en',
                'electricity_en',
                'Capacitor',
                'Grade 11 • Chapter 3: Electrostatics & Circuits',
                'Electrostatics, Fields & Capacitors',
                'Connect and disconnect plates of varied area and separation to watch electric field and stored charge.',
                'Apply parallel-plate formula C = ε0·A / d and Q = CV.'
            ),
            jSim(
                'dielectric_in_capacitor_en',
                'electricity_en',
                'Dielectric in Capacitor',
                'Grade 11 • Chapter 3: Electrostatics & Circuits',
                'Electrostatics, Fields & Capacitors',
                'Slide a dielectric slab between parallel capacitor plates and observe dipole polarization and capacitance boost.',
                'Explain how dielectric constant κ weakens internal net field and increases capacitance C = κC0.'
            ),
            jSim(
                'capacitor_characteristic_en',
                'electricity_en',
                'Charging & Discharging Characteristics of a Capacitor',
                'Grade 11 • Chapter 3: Electrostatics & Circuits',
                'Electrostatics, Fields & Capacitors',
                'Switch an RC loop between charging and discharging while plotting voltage V(t) and current I(t).',
                'Analyze exponential RC charging and discharging curves with time constant τ = RC.'
            ),
            jSim(
                'touch_screen_en',
                'electricity_en',
                'Capacitive Touch Screen (Technology Application)',
                'Grade 11 • Chapter 3: Electrostatics & Circuits',
                'Electrostatics, Fields & Capacitors',
                'Touch a smartphone capacitive sensor matrix to see local electric-field distortion register coordinates.',
                'Connect parallel-plate capacitance concepts to modern capacitive touchscreen technology.'
            )
        ],
        'g11-ch3-l2': [
            jSim(
                'potentiometer_en',
                'electricity_en',
                'Potentiometer',
                'Grade 11 • Chapter 3: Electrostatics & Circuits',
                'Electric Current, Resistance & DC Circuits',
                'Slide a variable wiper contact along a resistive track to control output voltage and load current.',
                'Analyze voltage divider operation and variable-resistance control.'
            ),
            jSim(
                'wheatstone_bridge_en',
                'electricity_en',
                'Wheatstone Bridge',
                'Grade 11 • Chapter 3: Electrostatics & Circuits',
                'Electric Current, Resistance & DC Circuits',
                'Tune resistor ratios in a diamond bridge until galvanometer bridge current balances cleanly to zero.',
                'Solve Wheatstone balance condition R1/R2 = R3/Rx to measure unknown resistance.'
            ),
            jSim(
                'serial_parallel_circuit_3_en',
                'electricity_en',
                'Series Parallel Circuit 3',
                'Grade 11 • Chapter 3: Electrostatics & Circuits',
                'Electric Current, Resistance & DC Circuits',
                'Inspect current and potential across complex combination resistor networks.',
                "Apply Kirchhoff's current and loop voltage laws to multi-branch circuits."
            ),
            jSim(
                'how-to-use-a-multimeter',
                'electricity_en',
                'How to Use a Multimeter',
                'Grade 11 • Chapter 3: Electrostatics & Circuits',
                'Electric Current, Resistance & DC Circuits',
                'Measure DC terminal voltage, current, and resistor values using realistic multimeter probe placement.',
                'Reinforce practical circuit measurement diagnostics safely.'
            )
        ],

        /* ==================== GRADE 12 ==================== */
        'g12-l1': [
            jSim(
                'gas_model_en',
                'chemistry_en/gas_en',
                'Kinetic Molecular Model of Gases',
                'Grade 12 • Chapter 1: Thermodynamics',
                'Kinetic Theory of Ideal Gases',
                'Change piston volume, molecule count, and temperature to track pressure and speed distributions.',
                'Connect ideal gas equation PV = NkBT to microscopic molecular impacts.'
            ),
            jSim(
                'gas_en',
                'chemistry_en/heat_en',
                'Root-Mean-Square Velocity of Gas Molecules (Vrms)',
                'Grade 12 • Chapter 1: Thermodynamics',
                'Kinetic Theory of Ideal Gases',
                'Compare H2, He, N2, and O2 molecules at identical temperature to verify mass dependence of vrms.',
                'Apply ½m(vrms)² = (3/2)kBT quantitatively.'
            ),
            jSim(
                'avogadros_law_en',
                'chemistry_en/gas_en',
                "Avogadro's Law",
                'Grade 12 • Chapter 1: Thermodynamics',
                'Kinetic Theory of Ideal Gases',
                'Adjust mole count n at fixed P and T to verify proportional gas volume expansion.',
                "Verify V ∝ n and molar volume relations in ideal gases."
            ),
            jSim(
                'pvnrt_en',
                'chemistry_en/molecules_in_motion_en',
                'Ideal Gas Law Calculator (PV = nRT)',
                'Grade 12 • Chapter 1: Thermodynamics',
                'Kinetic Theory of Ideal Gases',
                'Interactive ideal-gas solver letting students vary P, V, n, or T across SI units and check state equations.',
                'Perform multi-variable ideal gas state calculations cleanly.'
            )
        ],
        'g12-l2': [
            jSim(
                'pressure_volume_diagram_en',
                'chemistry_en/heat_en',
                'Pressure-Volume (P-V) Diagram',
                'Grade 12 • Chapter 1: Thermodynamics',
                'First Law of Thermodynamics',
                'Trace isothermal, isobaric, isochoric, and adiabatic gas state paths interactively on a P-V plot.',
                'Compute gas expansion work W = ∫P dV and First Law ΔU = Q + W across P-V paths.'
            ),
            jSim(
                'gas_in_various_condition_en',
                'chemistry_en/gas_en',
                'Gas in Various Conditions',
                'Grade 12 • Chapter 1: Thermodynamics',
                'First Law of Thermodynamics',
                'Lock temperature, pressure, volume, or thermal insulation to compare every thermodynamic process.',
                'Distinguish isothermal, isobaric, isochoric, and adiabatic particle dynamics.'
            ),
            jSim(
                'entropy_en',
                'chemistry_en/heat_en',
                "Where Did the Pendulum's Energy Go? (2nd Law & Irreversibility)",
                'Grade 12 • Chapter 1: Thermodynamics',
                'First Law of Thermodynamics',
                'Watch macroscopic mechanical pendulum energy disperse randomly into microscopic gas thermal jitter.',
                'Connect energy conservation (First Law) with irreversible entropy direction (Second Law).'
            )
        ],
        'g12-l3': [
            jSim(
                'carnot_engines_en',
                'chemistry_en/heat_en',
                'Carnot Engines',
                'Grade 12 • Chapter 1: Thermodynamics',
                'Heat Engine',
                'Animate the four ideal reversible Carnot strokes alongside the closed P-V indicator diagram.',
                'Derive maximum Carnot engine efficiency ηmax = 1 − Tc / Th.'
            ),
            jSim(
                'air_conditioner_en',
                'chemistry_en/heat_en',
                'Principle of Air Conditioner and Refrigerator',
                'Grade 12 • Chapter 1: Thermodynamics',
                'Heat Engine',
                'Follow refrigerant evaporation and condensation loops pumping thermal energy from cold to warm zones.',
                'Explain reverse heat-pump refrigeration cycles using compression and latent heat.'
            ),
            jSim(
                '4_stroke_engine_en',
                'chemistry_en/heat_en',
                '4-Stroke Engine',
                'Grade 12 • Chapter 1: Thermodynamics',
                'Heat Engine',
                'Step through intake, compression, ignition power, and exhaust piston strokes in an internal combustion engine.',
                'Connect practical four-stroke engine mechanics to thermodynamic work conversion.'
            )
        ],
        'g12-l4': [
            jSim(
                'superposition_en',
                'light_wave_en',
                'Superposition',
                'Grade 12 • Chapter 2: Waves & Optics',
                'Superposition & Standing Waves',
                'Send two customizable pulses from opposite ends of a medium and watch constructive/destructive overlap.',
                'Apply linear wave superposition and verify independent pulse passage afterward.'
            ),
            jSim(
                'standing_waves_on_a_string_en',
                'light_wave_en',
                'Standing Waves on a String',
                'Grade 12 • Chapter 2: Waves & Optics',
                'Superposition & Standing Waves',
                'Drive a taut string at resonant harmonics to observe fixed nodes, antinodes, and frequency ratios.',
                'Calculate harmonic frequencies fn = n·v / (2L) and node spacing λ/2.'
            ),
            jSim(
                'standing_waves_en',
                'light_wave_en',
                'Standing Waves in Various Situations',
                'Grade 12 • Chapter 2: Waves & Optics',
                'Superposition & Standing Waves',
                'Compare allowed harmonics across clamped strings, open-open acoustic pipes, and closed-open pipes.',
                'Distinguish full-integer harmonics (1, 2, 3...) from odd-integer closed-pipe harmonics (1, 3, 5...).'
            ),
            jSim(
                'standing_wave_synthesis_en',
                'light_wave_en',
                'Standing Wave Synthesis',
                'Grade 12 • Chapter 2: Waves & Optics',
                'Superposition & Standing Waves',
                'Overlay left-going and right-going traveling waves to watch the stationary standing wave emerge dynamically.',
                'Verify algebraically and visually how two opposite traveling waves synthesize a standing wave.'
            )
        ],
        'g12-interf': [
            jSim(
                'youngs_double_slit_en',
                'light_wave_en',
                "Young's Double Slit",
                'Grade 12 • Chapter 2: Waves & Optics',
                'Interference & Diffraction',
                'Vary slit spacing and light wavelength to inspect constructive nodal lines and screen fringe spacing.',
                'Apply path difference d·sin θ = kλ and Δy = λD/d.'
            ),
            jSim(
                'diffraction_grating_en',
                'light_wave_en',
                'Diffraction Grating',
                'Grade 12 • Chapter 2: Waves & Optics',
                'Interference & Diffraction',
                'Observe sharper spectral interference maxima as slit count N rises from 2 toward many grating lines.',
                'Calculate multi-slit grating maxima angles and explain spectral line sharpness.'
            ),
            jSim(
                'thin_film_interference_en',
                'light_wave_en',
                'Thin Film Interference',
                'Grade 12 • Chapter 2: Waves & Optics',
                'Interference & Diffraction',
                'Vary soap-film thickness and refractive index to see reflected rays interfere constructively or destructively.',
                'Account for optical path difference 2nt and π boundary phase flips in thin films.'
            ),
            jSim(
                'polarization_en',
                'light_wave_en',
                'Polarization',
                'Grade 12 • Chapter 2: Waves & Optics',
                'Interference & Diffraction',
                'Rotate two polarizing sheets interactively to filter transverse electric wave vectors from full to zero.',
                "Prove light is a transverse wave and verify Malus's law I = I0·cos²θ."
            ),
            jSim(
                'lcd_display_2_en',
                'light_wave_en',
                'LCD Display (Polarization Technology Application)',
                'Grade 12 • Chapter 2: Waves & Optics',
                'Interference & Diffraction & Technology',
                'Switch pixel voltage on twisted-nematic liquid crystals between crossed polarizers to toggle bright/dark pixels.',
                'Apply crossed polarization optics directly to LCD screen display technology.'
            )
        ],
        'g12-ch3-l1': [
            jSim(
                'oersteds_3d_en',
                'electricity_en',
                'Magnetic Field Around a Coil (WebGL 3D)',
                'Grade 12 • Chapter 3: Electromagnetism',
                'Magnetism',
                'Orbit around a 3D WebGL solenoid model and trace uniform interior axial magnetic flux lines.',
                'Calculate solenoid magnetic flux density B = μ0·n·I and direction in 3D.'
            ),
            jSim(
                'lorentzs_force_3d_en',
                'electricity_en',
                'Lorentz Force (Electromagnetic Swing 3D)',
                'Grade 12 • Chapter 3: Electromagnetism',
                'Magnetism',
                'Rotate a 3D copper swing conductor inside a permanent magnet while flipping battery polarity.',
                'Apply Laplace magnetic force vector F = I(L × B) in three dimensions.'
            ),
            jSim(
                'magnetic_force_en',
                'electricity_en',
                'Magnetic Force',
                'Grade 12 • Chapter 3: Electromagnetism',
                'Magnetism',
                'Inspect magnetic forces acting on moving charge carriers and current wires inside external B fields.',
                'Compute Lorentz force F = qvB·sin θ and F = BIL·sin θ.'
            )
        ],
        'g12-ch3-l2': [
            jSim(
                'faradays_law_2_en',
                'electricity_en',
                "Faraday's Law of Electromagnetic Induction",
                'Grade 12 • Chapter 3: Electromagnetism',
                'Electromagnetic Induction',
                'Track magnetic flux Φ(t) and induced EMF ε(t) quantitatively as magnet velocity and coil turns change.',
                "Apply Faraday-Lenz law ε = −N·(ΔΦ/Δt) accurately."
            ),
            jSim(
                'magnetic_induction_en',
                'electricity_en',
                'Magnetic Induction',
                'Grade 12 • Chapter 3: Electromagnetism',
                'Electromagnetic Induction',
                'Drop magnets through open and closed metal rings to see eddy currents oppose motion via Lenz law.',
                "Demonstrate Lenz's opposing magnetic braking force experimentally."
            ),
            jSim(
                'ac_generator_en',
                'electricity_en',
                'AC Power Generator',
                'Grade 12 • Chapter 3: Electromagnetism',
                'Electromagnetic Induction',
                'Spin a generator loop inside a magnetic field and track ε(t) = N·B·A·ω·sin(ωt).',
                'Connect rotating flux change Φ = BA·cos(ωt) directly to AC sinusoidal voltage generation.'
            )
        ],
        'g12-ch3-l3': [
            jSim(
                'inductor_en',
                'electricity_en',
                'Inductor Application Circuit',
                'Grade 12 • Chapter 3: Electromagnetism',
                'Self Induction',
                'Toggle an inductor circuit switch and watch self-induced back EMF oppose rapid current changes.',
                'Explain inductor self-induction εL = −L(dI/dt) and inductive current smoothing.'
            ),
            jSim(
                'inductor_and_capacitor_en',
                'electricity_en',
                'Inductor and Capacitor',
                'Grade 12 • Chapter 3: Electromagnetism',
                'Self Induction',
                'Observe current lag in inductors and voltage lag in capacitors when paired together.',
                'Compare magnetic energy storage ½LI² with electrostatic storage ½CV².'
            ),
            jSim(
                'lc_oscillator_en',
                'electricity_en',
                'LC Oscillator',
                'Grade 12 • Chapter 3: Electromagnetism',
                'Self Induction',
                'Watch sinusoidal energy bounce endlessly between a charged capacitor E-field and an inductor B-field.',
                'Apply Thomson resonance formula T0 = 2π√(LC) to electromagnetic oscillations.'
            )
        ],
        'g12-ch3-l4': [
            jSim(
                'dc_and_ac_en',
                'electricity_en',
                'Direct Current (DC) and Alternating Current (AC)',
                'Grade 12 • Chapter 3: Electromagnetism',
                'Alternating Currents',
                'Contrast steady one-way electron drift in DC circuits with back-and-forth AC electron oscillation.',
                'Relate AC peak and rms current values to oscillating electron motion.'
            ),
            jSim(
                'electric_circuits_ac_en',
                'electricity_en',
                'Electric Circuit Simulator (AC)',
                'Grade 12 • Chapter 3: Electromagnetism',
                'Alternating Currents',
                'Test AC sources driving resistive, capacitive, and inductive loads with live oscilloscope waveforms.',
                'Analyze phase angles between AC voltage and current across R, L, and C elements.'
            ),
            jSim(
                'rlc_serial_circuit_en',
                'electricity_en',
                'R-L-C Series Circuit',
                'Grade 12 • Chapter 3: Electromagnetism',
                'Alternating Currents',
                'Tune AC frequency and R, L, C values while inspecting impedance phasors and resonance current peak.',
                'Calculate XL, XC, total impedance Z, and resonance frequency f0 = 1/(2π√LC).'
            ),
            jSim(
                'lc_filter_en',
                'electricity_en',
                'LC Filter',
                'Grade 12 • Chapter 3: Electromagnetism',
                'Alternating Currents',
                'Feed mixed signal frequencies through LC filter stages to see frequency-selective impedance attenuation.',
                'Explain how frequency-dependent inductive and capacitive reactances filter AC signals.'
            ),
            jSim(
                'electric_transformer_en',
                'electricity_en',
                'Electric Transformer',
                'Grade 12 • Chapter 3: Electromagnetism',
                'Alternating Currents',
                'Step AC voltage up or down via coupled coils and verify power conservation VpIp ≈ VsIs.',
                'Solve ideal transformer AC voltage and current transformation problems.'
            )
        ],
        'g12-ch4-l1': [
            jSim(
                'energy_band_en',
                'electricity_en',
                'Energy Band of Metal & Semiconductor',
                'Grade 12 • Chapter 4: Modern Physics',
                'Semiconductors & Transistors',
                'Compare overlapping conduction/valence bands in conductors against band gaps in semiconductors and insulators.',
                'Explain semiconductor conductivity via band-gap energy and thermal carrier excitation.'
            ),
            jSim(
                'diode_making_en',
                'electricity_en',
                'Diode Making (P-N Junction)',
                'Grade 12 • Chapter 4: Modern Physics',
                'Semiconductors & Transistors',
                'Join P-type and N-type doped silicon crystals to watch majority carriers diffuse and form a depletion barrier.',
                'Explain donor/acceptor doping and P-N depletion-zone formation.'
            ),
            jSim(
                'diode_en',
                'electricity_en',
                'Diode',
                'Grade 12 • Chapter 4: Modern Physics',
                'Semiconductors & Transistors',
                'Reverse battery polarity on a P-N junction diode to test forward conduction versus reverse blocking.',
                'Predict diode forward-bias vs. reverse-bias current flow in circuits.'
            ),
            jSim(
                'rectifier_circuit_en',
                'electricity_en',
                'Rectifier Circuit',
                'Grade 12 • Chapter 4: Modern Physics',
                'Semiconductors & Transistors',
                'Compare half-wave and full-wave diode bridge rectification converting AC sine input into pulsating DC.',
                'Trace diode-bridge current paths converting AC into DC.'
            ),
            jSim(
                'led_en',
                'electricity_en',
                'The Principle of LED (Technology Application)',
                'Grade 12 • Chapter 4: Modern Physics & Technology',
                'Semiconductors & Transistors',
                'Forward-bias a semiconductor LED junction to observe electron-hole recombination emitting band-gap photons.',
                'Connect semiconductor band gaps E = hf directly to LED light emission color.'
            ),
            jSim(
                'transistor_en',
                'electricity_en',
                'The Principle of a Transistor',
                'Grade 12 • Chapter 4: Modern Physics',
                'Semiconductors & Transistors',
                'Vary small base-emitter input bias on a BJT transistor to switch or amplify large collector current.',
                'Explain bipolar transistor switching and current amplification Ic = β·Ib.'
            ),
            jSim(
                'logic_en',
                'electricity_en',
                'Logic Gate (Technology Application)',
                'Grade 12 • Chapter 4: Modern Physics & Technology',
                'Semiconductors & Transistors',
                'Test AND, OR, NOT, NAND, and NOR transistor logic gates interactively with binary A/B inputs.',
                'Relate semiconductor transistor switches to digital logic gates and truth tables.'
            )
        ],
        'g12-ch4-l2': [
            jSim(
                'michelson_interferometer_en',
                'measure_en',
                'Michelson Interferometer',
                'Grade 12 • Chapter 4: Modern Physics',
                'Special Theory of Relativity',
                'Compare light travel along perpendicular interferometer arms with and without hypothesized ether wind.',
                'Explain why the null Michelson-Morley result disproved luminiferous ether and confirmed invariant c.'
            ),
            jSim(
                'relativity-of-simultaneity',
                'measure_en',
                'Relativity of Simultaneity',
                'Grade 12 • Chapter 4: Modern Physics',
                'Special Theory of Relativity',
                'Emit light flashes inside a relativistic rocket/train car and compare arrival order for onboard vs. ground observers.',
                "Demonstrate Einstein's relativity of simultaneity from invariant light speed c."
            ),
            jSim(
                'special_relativity_en',
                'measure_en',
                'Special Relativity: Time Dilation',
                'Grade 12 • Chapter 4: Modern Physics',
                'Special Theory of Relativity',
                'Vary ship speed v as a fraction of c and watch a light clock tick slower for stationary observers.',
                'Apply Δt = γ·Δt0 with Lorentz factor γ = 1 / √(1 − v²/c²).'
            ),
            jSim(
                'special_relativity_2_en',
                'measure_en',
                'Special Relativity: Length Contraction',
                'Grade 12 • Chapter 4: Modern Physics',
                'Special Theory of Relativity',
                'Observe rod length along motion contract from rest length L0 to L = L0 / γ at high fractions of c.',
                'Calculate relativistic length contraction parallel to relative velocity.'
            ),
            jSim(
                'twin_paradox_en',
                'measure_en',
                'Twin Paradox',
                'Grade 12 • Chapter 4: Modern Physics',
                'Special Theory of Relativity',
                'Track asymmetric round-trip relativistic spaceflight time intervals between traveling and Earthbound twins.',
                'Explain why frame-switching turnarounds break symmetry in the twin paradox.'
            )
        ],
        'g12-ch4-l3': [
            jSim(
                'crt_en',
                'atoms_en',
                'Cathode Ray Tube (CRT)',
                'Grade 12 • Chapter 4: Modern Physics',
                'Atomic Structure',
                'Deflect cathode-ray beams with charged plates and magnets to verify negative electron charge.',
                'Connect Thomson cathode-ray deflection to discovery of the electron and e/m measurement.'
            ),
            jSim(
                'rutherford_scattering_en',
                'atoms_en',
                'Rutherford Scattering',
                'Grade 12 • Chapter 4: Modern Physics',
                'Atomic Structure',
                'Fire alpha particles at thin gold foil targets to compare rare sharp backscattering with straight transmission.',
                'Deduce the compact, massive, positively charged nucleus from Rutherford scattering data.'
            ),
            jSim(
                'photoelectric_effect_en',
                'atoms_en',
                'Photoelectric Effect',
                'Grade 12 • Chapter 4: Modern Physics',
                'Atomic Structure',
                'Adjust incident light frequency and intensity across cathode metals to observe threshold emission.',
                "Apply Einstein's photon equation hf = W0 + ½mvmax²."
            ),
            jSim(
                'bohrs_atomic_model_en',
                'atoms_en',
                "Bohr's Atomic Model",
                'Grade 12 • Chapter 4: Modern Physics',
                'Atomic Structure',
                'Trigger electron orbital jumps between discrete hydrogen shells and watch quantized photon emission.',
                'Explain quantized stationary orbits and spectral transition energy ΔE = hf.'
            ),
            jSim(
                'spectrum_of_hydrogen_en',
                'atoms_en',
                'Spectrum of Hydrogen Atom',
                'Grade 12 • Chapter 4: Modern Physics',
                'Atomic Structure',
                'Match Balmer, Lyman, and Paschen shell transitions directly to visible and UV spectral lines.',
                'Compute hydrogen emission wavelengths using Rydberg / Bohr energy level transitions.'
            ),
            jSim(
                'matter_wave_en',
                'atoms_en',
                "Matter Wave and de Broglie's Atomic Model",
                'Grade 12 • Chapter 4: Modern Physics',
                'Atomic Structure',
                'Test integer-wavelength standing de Broglie electron waves fitting cleanly around circular Bohr orbits.',
                'Connect de Broglie matter wavelength λ = h/p (2πr = nλ) to Bohr quantization.'
            )
        ]
    };

    function resolveLessonId(lessonId) {
        var key = String(lessonId || '').trim();
        return LESSON_ID_ALIASES[key] || key;
    }

    function getSimulations(lessonId) {
        var resolved = resolveLessonId(lessonId);
        var list = JAVALAB_SIMULATIONS_BY_LESSON[resolved];
        if (!Array.isArray(list)) return [];
        return list.map(function (item) {
            return Object.assign({}, item);
        });
    }

    global.WISJavalabSimulations = {
        JAVALAB_BASE: JAVALAB_BASE,
        LESSON_ID_ALIASES: LESSON_ID_ALIASES,
        JAVALAB_SIMULATIONS_BY_LESSON: JAVALAB_SIMULATIONS_BY_LESSON,
        resolveLessonId: resolveLessonId,
        getSimulations: getSimulations
    };
})(window);
