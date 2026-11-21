/* ==========================================================================
   Vaščák Physics at School Simulation Provider Registry (Grades 7 - 12)
   Keeps all Vaščák entries strictly separate from existing games.json and
   physics-data.js records, and merges them non-destructively in the Game tab.
   Original Source: https://www.vascak.cz/physicsanimations.php?l=en
   ========================================================================== */
(function (global) {
    'use strict';

    var VASCAK_BASE = 'https://www.vascak.cz/data/android/physicsatschool/template.php?s=';
    var VASCAK_SOURCE = 'https://www.vascak.cz/physicsanimations.php?l=en';

    function vUrl(slug) {
        return VASCAK_BASE + encodeURIComponent(slug) + '&l=en';
    }

    function sim(slug, title, chapter, topic, description, objective) {
        return {
            provider: 'vascak',
            providerLabel: 'Vaščák Physics at School',
            slug: slug,
            title: title,
            chapter: chapter,
            topic: title,
            curriculumTopic: topic,
            description: description,
            objective: objective,
            url: vUrl(slug),
            sourceUrl: VASCAK_SOURCE
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

    var VASCAK_SIMULATIONS_BY_LESSON = {
        /* ==================== GRADE 7 ==================== */
        'g7-l1': [
            sim(
                'mf_teplotni_stupnice',
                'Temperature scales',
                'Grade 7 • Thermal Physics',
                'Temperature & Thermal Energy',
                'Compare Celsius, Kelvin, and Fahrenheit thermometer readings side by side across freezing and boiling reference points.',
                'Read and convert temperatures across Celsius, Kelvin, and Fahrenheit scales accurately.'
            ),
            sim(
                'mf_galileo_teplomer',
                'Galileo thermometer',
                'Grade 7 • Thermal Physics',
                'Temperature & Thermal Energy',
                'Observe how floating glass bulbs of different densities rise or sink inside a liquid column as temperature changes.',
                'Explain how liquid density varies with temperature and enables buoyancy-based temperature indication.'
            ),
            sim(
                'mf_roztaznost1',
                'Thermal expansion',
                'Grade 7 • Thermal Physics',
                'Temperature & Thermal Energy',
                'Heat a solid rod and observe how its length increases depending on initial length, material, and temperature rise.',
                'Identify how heating causes solid materials to expand and relate expansion to real-world engineering.'
            ),
            sim(
                'mf_bimetal',
                'Bimetal',
                'Grade 7 • Thermal Physics',
                'Temperature & Thermal Energy',
                'Test a bimetallic strip made of two bonded metals and watch it bend when heated or cooled.',
                'Understand why unequal thermal expansion bends a bimetallic strip and how thermostats use this effect.'
            ),
            sim(
                'mf_vedeni_energie',
                'Heat transfer – conduction',
                'Grade 7 • Thermal Physics',
                'Temperature & Thermal Energy',
                'Compare thermal conduction rates along rods of different materials heated at one end.',
                'Distinguish good thermal conductors from thermal insulators using particle energy transfer.'
            ),
            sim(
                'mf_proudeni_energie',
                'Heat transfer – convection',
                'Grade 7 • Thermal Physics',
                'Temperature & Thermal Energy',
                'Visualize warm fluid rising and cool fluid sinking to form continuous convection currents.',
                'Describe how convection circulates thermal energy through liquids and gases.'
            ),
            sim(
                'mf_zareni_energie',
                'Heat transfer – radiation',
                'Grade 7 • Thermal Physics',
                'Temperature & Thermal Energy',
                'Compare thermal energy absorption and emission between dark and reflective surfaces under radiant heat.',
                'Explain how thermal radiation transfers energy without a medium and how surface color affects absorption.'
            )
        ],
        'g7-l2': [
            sim(
                'elpole_coulomb',
                "Coulomb's law",
                'Grade 7 • Electricity',
                'Electric Charge',
                'Adjust the sign, magnitude, and separation of two electric charges to observe attraction and repulsion forces.',
                'Recognize that like charges repel, opposite charges attract, and force weakens with distance.'
            ),
            sim(
                'elpole_vodicizolant',
                'Conductor and insulator',
                'Grade 7 • Electricity',
                'Electric Charge',
                'Test how free charges behave inside metallic conductors versus non-conducting insulators.',
                'Differentiate electrical conductors from insulators based on charge mobility.'
            ),
            sim(
                'elpole_vandegraaff',
                'Van de Graaff generator',
                'Grade 7 • Electricity',
                'Electric Charge',
                'Explore how friction and charge belt transport build static charge on a hollow metal dome.',
                'Describe static charge accumulation and electrostatic discharge phenomena.'
            ),
            sim(
                'elpole_pole',
                'Charges and fields',
                'Grade 7 • Electricity',
                'Electric Charge',
                'Place positive and negative point charges and inspect the resulting electric field pattern around them.',
                'Visualize the region of electrostatic influence surrounding charged objects.'
            )
        ],
        'g7-l3': [
            sim(
                'mech_tlak',
                'Pressure',
                'Grade 7 • Mechanics & Fluids',
                'Pressure of Rigid Object',
                'Change the applied force and contact surface area of a block to see how pressure changes.',
                'Apply P = F / A to explain why smaller contact areas produce greater pressure for the same force.'
            ),
            sim(
                'mech_pascal',
                "Pascal's law",
                'Grade 7 • Mechanics & Fluids',
                'Pressure of Rigid Object',
                'Apply external pressure to an enclosed fluid chamber and observe equal pressure transmission in all directions.',
                "State Pascal's principle and observe uniform pressure distribution inside confined fluids."
            ),
            sim(
                'mech_lis',
                'Hydraulic Lifter',
                'Grade 7 • Mechanics & Fluids',
                'Pressure of Rigid Object',
                'Use connected small and large pistons to lift a heavy load with a smaller input force.',
                'Demonstrate how hydraulic systems multiply force by transmitting equal fluid pressure across unequal areas.'
            )
        ],

        /* ==================== GRADE 8 ==================== */
        'g8-l1': [
            sim(
                'mech_pohyb',
                'Motion',
                'Grade 8 • Chapter 1: Kinematics',
                'Speed, Velocity & Acceleration',
                'Control initial position, velocity, and acceleration of a moving body along a straight track in real time.',
                'Distinguish uniform motion from uniformly accelerated motion using distance and speed changes.'
            ),
            sim(
                'mech_pohyb_obr2',
                'Motion (Speed & Acceleration Comparison)',
                'Grade 8 • Chapter 1: Kinematics',
                'Speed, Velocity & Acceleration',
                'Compare two moving objects with adjustable velocities and accelerations side by side.',
                'Analyze relative speed and acceleration during simultaneous rectilinear motion.'
            )
        ],
        'g8-l2': [
            sim(
                'mech_pohyb_obr3',
                'Motion (Distance-Time & Velocity-Time Graphs)',
                'Grade 8 • Chapter 1: Kinematics',
                'Graphs of Equations',
                'Run motion experiments while watching real-time s-t and v-t graphs trace out simultaneously.',
                'Interpret slope and shape in distance-time and velocity-time graphs.'
            ),
            sim(
                'mech_pohyb',
                'Motion',
                'Grade 8 • Chapter 1: Kinematics',
                'Graphs of Equations',
                'Explore how constant velocity and constant acceleration translate into straight and curved motion profiles.',
                'Connect algebraic motion parameters to graphical representations.'
            )
        ],
        'g8-l3': [
            sim(
                'gp_volny_pad',
                'Free fall',
                'Grade 8 • Chapter 1: Kinematics',
                'Free Falling Bodies',
                'Drop an object under gravity and track instantaneous speed, elapsed time, and distance fallen.',
                'Verify that freely falling objects accelerate uniformly at g regardless of mass in vacuum.'
            ),
            sim(
                'gp_newtonova_trubice',
                "Newton's Tube",
                'Grade 8 • Chapter 1: Kinematics',
                'Free Falling Bodies',
                'Drop a feather and heavy object inside an air-filled tube versus an evacuated vacuum tube.',
                'Explain why air resistance slows lighter objects in air while all objects fall together in vacuum.'
            ),
            sim(
                'gp_skladani_pohybu',
                'Horizontally Launched Projectile',
                'Grade 8 • Chapter 1: Kinematics',
                'Free Falling Bodies',
                'Compare a dropped ball and a horizontally launched ball released at the same height.',
                'Demonstrate that vertical free-fall motion is independent of horizontal velocity.'
            )
        ],
        'g8-l4': [
            sim(
                'mf_hook',
                "Hooke's law - 1",
                'Grade 8 • Chapter 2: Forces',
                'Weight & Stretching',
                'Hang weights from springs of varying stiffness and measure spring extension.',
                "Verify Hooke's law (F = kx) and distinguish elastic force from gravitational weight."
            ),
            sim(
                'gp_homogenni_pole',
                'Gravitational field on Earth',
                'Grade 8 • Chapter 2: Forces',
                'Weight & Stretching',
                'Visualize the uniform downward gravitational pull acting on objects near Earth’s surface.',
                'Relate mass, gravitational field strength g, and weight W = mg.'
            )
        ],
        'g8-l5': [
            sim(
                'mech_rovnobeznik',
                'Parallelogram of force',
                'Grade 8 • Chapter 2: Forces',
                'Adding Forces & Vectors',
                'Combine two concurrent force vectors at adjustable magnitudes and angles using the parallelogram construction.',
                'Find the resultant force magnitude and direction graphically and conceptually.'
            ),
            sim(
                'mech_treni',
                'Friction',
                'Grade 8 • Chapter 2: Forces',
                'Adding Forces & Vectors',
                'Pull a block across surfaces with adjustable normal force and friction coefficient to compare applied and resistive forces.',
                'Analyze how static and kinetic friction oppose motion when adding forces.'
            )
        ],
        'g8-l6': [
            sim(
                'mech_newton1',
                "Newton's 1st Law",
                'Grade 8 • Chapter 2: Forces',
                'Force & Acceleration',
                'Observe how an object maintains constant velocity or rest when net external force is zero.',
                'Explain inertia and equilibrium states in terms of balanced forces.'
            ),
            sim(
                'mech_newton2',
                "Newton's 2nd Law",
                'Grade 8 • Chapter 2: Forces',
                'Force & Acceleration',
                'Vary applied force and cart mass to measure the resulting acceleration in real time.',
                'Apply F = ma to predict how force and mass control acceleration.'
            ),
            sim(
                'mech_newton3',
                "Newton's 3rd Law",
                'Grade 8 • Chapter 2: Forces',
                'Force & Acceleration',
                'Inspect interacting bodies exerting equal-magnitude, opposite-direction action and reaction forces.',
                'Identify action-reaction force pairs acting on two separate objects.'
            ),
            sim(
                'mech_rovina',
                'Friction and drag',
                'Grade 8 • Chapter 2: Forces',
                'Force & Acceleration',
                'Test motion down an incline or horizontal surface while varying resistive drag and friction.',
                'Determine net force when driving forces act alongside friction and drag.'
            )
        ],
        'g8-l7': [
            sim(
                'mech_prace',
                'Work',
                'Grade 8 • Chapter 3: Work & Energy',
                'Energy, Work & Power',
                'Adjust applied force, angle, and displacement to compute mechanical work done on an object.',
                'Calculate mechanical work W = F·s·cos(θ) and recognize when zero work is performed.'
            ),
            sim(
                'mech_zze',
                'Conservation of energy',
                'Grade 8 • Chapter 3: Work & Energy',
                'Energy, Work & Power',
                'Track potential, kinetic, and total mechanical energy bars during frictionless and damped motion.',
                'Explain conservation and transformation of mechanical energy during motion.'
            )
        ],
        'g8-l8': [
            sim(
                'mech_zze',
                'Conservation of energy',
                'Grade 8 • Chapter 3: Work & Energy',
                'Kinetic & Potential Energy',
                'Observe continuous exchange between gravitational potential energy and kinetic energy with live bar indicators.',
                'Relate height loss to speed gain using Ep + Ek = constant.'
            ),
            sim(
                'mech_maxwell',
                "Maxwell's Pendulum",
                'Grade 8 • Chapter 3: Work & Energy',
                'Kinetic & Potential Energy',
                'Release a suspended flywheel to watch gravitational potential energy transform into translational and rotational kinetic energy.',
                'Analyze reversible energy conversion between potential and kinetic forms.'
            )
        ],
        'g8-l9': [
            sim(
                'mech_hydrotlak',
                'Hydrostatic pressure',
                'Grade 8 • Chapter 4: Fluid Pressure',
                'Pressure & Liquid Pressure',
                'Change immersion depth and liquid density to see how hydrostatic pressure and liquid jets respond.',
                'Apply p = ρgh to explain why liquid pressure increases with depth and density.'
            ),
            sim(
                'mech_nadoby',
                'Communicating vessels',
                'Grade 8 • Chapter 4: Fluid Pressure',
                'Pressure & Liquid Pressure',
                'Fill interconnected vessels of different shapes and observe the resulting equilibrium fluid levels.',
                'Explain why a single liquid settles at equal vertical height across connected vessels.'
            ),
            sim(
                'mech_pascal',
                "Pascal's law",
                'Grade 8 • Chapter 4: Fluid Pressure',
                'Pressure & Liquid Pressure',
                'Apply pressure to a confined liquid and verify uniform transmission in every direction.',
                "Describe Pascal's law and its application to liquid pressure transmission."
            ),
            sim(
                'mech_lis',
                'Hydraulic Lifter',
                'Grade 8 • Chapter 4: Fluid Pressure',
                'Pressure & Liquid Pressure',
                'Operate coupled hydraulic pistons to amplify force using an incompressible liquid.',
                'Solve force multiplication problems using F1 / A1 = F2 / A2.'
            )
        ],
        'g8-l10': [
            sim(
                'mf_vedeni_energie',
                'Heat transfer – conduction',
                'Grade 8 • Chapter 5: Thermal Energy',
                'Conduction & Convection',
                'Observe microscopic and macroscopic heat flow through solid rods of different materials.',
                'Explain thermal conduction through particle collisions and free-electron transfer.'
            ),
            sim(
                'mf_proudeni_energie',
                'Heat transfer – convection',
                'Grade 8 • Chapter 5: Thermal Energy',
                'Conduction & Convection',
                'Watch heated fluid expand, decrease in density, rise, and establish circular convection currents.',
                'Connect density differences in heated fluids to natural convection loops.'
            )
        ],
        'g8-l11': [
            sim(
                'mf_zareni_energie',
                'Heat transfer – radiation',
                'Grade 8 • Chapter 5: Thermal Energy',
                'Thermal Radiation',
                'Compare radiative temperature change for black, white, and shiny metallic surfaces.',
                'Explain how infrared radiation transfers thermal energy across empty space.'
            )
        ],
        'g8-l12': [
            sim(
                'ele_obvod',
                'Electrical circuit',
                'Grade 8 • Chapter 6: Electricity',
                'DC Circuits',
                'Interact with a simple closed circuit loop showing switch action, conventional current, and electron flow.',
                'Identify closed-circuit requirements and distinguish conventional current from electron motion.'
            ),
            sim(
                'ele_ohm',
                "Ohm's law",
                'Grade 8 • Chapter 6: Electricity',
                'DC Circuits',
                "Adjust source voltage and resistor value to measure circuit current and plot Ohm's characteristic curve.",
                "Apply V = I·R to predict current changes in DC circuits."
            ),
            sim(
                'ele_odpory',
                'Resistors',
                'Grade 8 • Chapter 6: Electricity',
                'DC Circuits',
                'Switch between series and parallel resistor networks to inspect equivalent resistance and current division.',
                'Compare total resistance, voltage drops, and branch currents in series versus parallel circuits.'
            )
        ],
        'g8-l13': [
            sim(
                'ele_uir',
                'Voltage, current and resistance',
                'Grade 8 • Chapter 6: Electricity',
                'Electrical Power & Domestic Safety',
                'Observe how voltage and resistance control current flow and electrical energy dissipation.',
                'Connect voltage, current, and resistance to safe electrical power ratings in appliances.'
            ),
            sim(
                'ele_odpor',
                'Electrical resistance',
                'Grade 8 • Chapter 6: Electricity',
                'Electrical Power & Domestic Safety',
                'Modify wire length, cross-sectional area, and resistivity to inspect conductor resistance and overload heating risk.',
                'Explain how wire thickness and material affect resistance and domestic circuit safety.'
            )
        ],
        'g8-l14': [
            sim(
                'kv_vlneni',
                'Wave',
                'Grade 8 • Chapter 7: Waves',
                'General Properties of Waves',
                'Explore transverse and longitudinal traveling waves while adjusting wavelength, frequency, and amplitude.',
                'Identify amplitude, wavelength, period, and wave speed in mechanical waves.'
            ),
            sim(
                'kv_odraz_vlneni',
                'Reflection',
                'Grade 8 • Chapter 7: Waves',
                'General Properties of Waves',
                'Observe incident and reflected wavefronts bouncing off a plane barrier.',
                'Verify that the angle of incidence equals the angle of reflection for wavefronts.'
            ),
            sim(
                'kv_lom_vlneni',
                'Refraction',
                'Grade 8 • Chapter 7: Waves',
                'General Properties of Waves',
                'Watch wavefronts change speed, wavelength, and propagation direction across a boundary between two media.',
                'Explain wave refraction as a result of wave speed changing across a boundary.'
            ),
            sim(
                'kv_huygens',
                'Huygens–Fresnel principle',
                'Grade 8 • Chapter 7: Waves',
                'General Properties of Waves',
                'Construct advancing wavefronts from secondary spherical wavelets.',
                'Describe how Huygens wavelets account for wave propagation, reflection, and diffraction.'
            )
        ],

        /* ==================== GRADE 9 ==================== */
        'g9-l1': [
            sim(
                'mech_rovnobeznik',
                'Parallelogram of force',
                'Grade 9 • Chapter 1: Moments & Equilibrium',
                'Turning Effect of Force',
                'Combine forces acting along different lines of action and inspect net force equilibrium conditions.',
                'Analyze vector balance required alongside rotational moment balance.'
            ),
            sim(
                'mech_paka',
                'Lever principle',
                'Grade 9 • Chapter 1: Moments & Equilibrium',
                'Turning Effect of Force',
                'Place weights at different distances from a fulcrum to balance clockwise and counter-clockwise moments.',
                'Apply the principle of moments (F1·d1 = F2·d2) to solve lever balance problems.'
            ),
            sim(
                'mech_rovnovazna',
                'Mechanical equilibrium 1',
                'Grade 9 • Chapter 1: Moments & Equilibrium',
                'Turning Effect of Force',
                'Tilt a rigid body to compare stable, unstable, and neutral equilibrium based on its center of mass.',
                'Relate center of gravity position and base of support to mechanical stability.'
            )
        ],
        'g9-l2': [
            sim(
                'mech_paka',
                'Lever principle',
                'Grade 9 • Chapter 2: Simple Machines',
                'Simple Machines',
                'Test first-, second-, and third-class lever configurations and inspect mechanical advantage.',
                'Compare effort force, load force, and lever arm ratios across lever types.'
            ),
            sim(
                'mech_sily',
                'Inclined Plane',
                'Grade 9 • Chapter 2: Simple Machines',
                'Simple Machines',
                'Vary ramp angle and observe force components needed to hold or move a mass up an inclined plane.',
                'Calculate mechanical advantage and force trade-offs along an inclined plane.'
            ),
            sim(
                'mech_kladky',
                'Pulley fixed and free',
                'Grade 9 • Chapter 2: Simple Machines',
                'Simple Machines',
                'Compare lifting a load with a single fixed pulley versus a single movable pulley.',
                'Explain why a fixed pulley changes force direction while a movable pulley halves effort force.'
            ),
            sim(
                'mech_kladkostroj',
                'Pulley system',
                'Grade 9 • Chapter 2: Simple Machines',
                'Simple Machines',
                'Test multi-pulley block-and-tackle setups and compare rope tension with rope displacement.',
                'Compute ideal mechanical advantage from supporting rope segments in a pulley system.'
            )
        ],
        'g9-l3': [
            sim(
                'ele_ohm',
                "Ohm's law",
                'Grade 9 • Chapter 3: Electricity',
                'Electricity',
                'Adjust voltage and resistance in an electric circuit to measure current and resistance proportionality.',
                "Verify Ohm's law quantitatively and interpret linear V-I graphs."
            ),
            sim(
                'ele_uir',
                'Voltage, current and resistance',
                'Grade 9 • Chapter 3: Electricity',
                'Electricity',
                'Explore how potential difference drives current through ohmic loads in DC circuits.',
                'Relate voltage, current, resistance, and electrical energy transfer in circuits.'
            ),
            sim(
                'ele_odpory',
                'Resistors',
                'Grade 9 • Chapter 3: Electricity',
                'Electricity',
                'Build series and parallel resistor combinations and observe equivalent resistance changes.',
                'Calculate equivalent resistance for basic series and parallel resistor networks.'
            ),
            sim(
                'mf_kalorimetr',
                'Calorimeter',
                'Grade 9 • Chapter 3: Electricity',
                'Electricity',
                'Investigate thermal energy transfer into water inside an insulated calorimeter vessel.',
                'Relate thermal energy gain (Q = mcΔT) to heating processes such as Joule heating.'
            )
        ],
        'g9-l4': [
            sim(
                'mag_magnet',
                'Magnet',
                'Grade 9 • Chapter 4: Magnetism',
                'Magnetic Field',
                'Inspect bar magnet poles, magnetic field lines, and attraction/repulsion between magnetic poles.',
                'Map external magnetic field lines from North pole to South pole.'
            ),
            sim(
                'mag_vodic',
                "Ampere's right hand screw rules",
                'Grade 9 • Chapter 4: Magnetism',
                'Magnetic Field',
                'Reverse electric current in a straight conductor and circular loop to observe magnetic field orientation.',
                'Apply the right-hand grip rule to determine magnetic field direction around current-carrying wires.'
            ),
            sim(
                'mag_civka',
                'Coil',
                'Grade 9 • Chapter 4: Magnetism',
                'Magnetic Field',
                'Explore the magnetic field pattern inside and outside a current-carrying solenoid coil.',
                'Determine solenoid north and south poles from current direction and coil windings.'
            ),
            sim(
                'mag_fleming',
                "Fleming's left-hand rule",
                'Grade 9 • Chapter 4: Magnetism',
                'Magnetic Field',
                'Vary current direction and magnetic field orientation to observe the magnetic force on a conductor.',
                "Use Fleming's left-hand rule to predict motor force direction."
            ),
            sim(
                'ac_transformator',
                'Transformer',
                'Grade 9 • Chapter 4: Magnetism',
                'Magnetic Field',
                'Change primary and secondary coil turn ratios to test voltage step-up and step-down transformation.',
                'Explain electromagnetic voltage transformation using coil turn ratios.'
            )
        ],
        'g9-l5': [
            sim(
                'opt_zrcadlo',
                'Mirror',
                'Grade 9 • Chapter 5: Optics',
                'Light',
                'Adjust incident ray angle on a plane mirror and inspect reflection angle and virtual image formation.',
                'State the laws of reflection and locate virtual images formed by plane mirrors.'
            ),
            sim(
                'opt_dute',
                'Concave mirror',
                'Grade 9 • Chapter 5: Optics',
                'Light',
                'Move an object relative to focal point F and center C of a concave mirror and trace principal rays.',
                'Predict real and virtual image size, orientation, and location for concave mirrors.'
            ),
            sim(
                'opt_vypukle',
                'Convex mirror',
                'Grade 9 • Chapter 5: Optics',
                'Light',
                'Move an object in front of a diverging convex mirror and observe upright diminished image formation.',
                'Explain why convex mirrors always produce virtual, upright, diminished images.'
            ),
            sim(
                'opt_total',
                'Total internal reflection',
                'Grade 9 • Chapter 5: Optics',
                'Light',
                'Increase angle of incidence from denser to rarer medium past the critical angle.',
                'Determine conditions for refraction versus total internal reflection.'
            ),
            sim(
                'opt_spojka',
                'Positive lens',
                'Grade 9 • Chapter 5: Optics',
                'Light',
                'Slide an object toward and past a converging convex lens to inspect real and magnified virtual images.',
                'Construct ray diagrams for converging lenses across all object-distance regions.'
            ),
            sim(
                'opt_rozptylka',
                'Negative lens',
                'Grade 9 • Chapter 5: Optics',
                'Light',
                'Trace diverging light rays through a concave lens for different object positions.',
                'Explain virtual, upright, diminished image formation in diverging lenses.'
            )
        ],

        /* ==================== GRADE 10 ==================== */
        'g10-l1': [
            sim(
                'mech_pohyb_obr3',
                'Motion (Kinematics & Graphs)',
                'Grade 10 • Chapter 1: Mechanics',
                'Rectilinear Motion & Kinematics',
                'Vary initial velocity and acceleration while plotting instantaneous displacement, velocity, and acceleration.',
                'Relate kinematic equations to s-t and v-t graph slopes and areas.'
            ),
            sim(
                'gp_volny_pad',
                'Free fall',
                'Grade 10 • Chapter 1: Mechanics',
                'Rectilinear Motion & Kinematics',
                'Analyze vertical free-fall motion under uniform gravitational acceleration g.',
                'Solve free-fall time, velocity, and displacement problems quantitatively.'
            ),
            sim(
                'gp_vrh_svisly',
                'Vertically launched projectile',
                'Grade 10 • Chapter 1: Mechanics',
                'Rectilinear Motion & Kinematics',
                'Launch a particle vertically upward with chosen initial velocity and track apex height and flight time.',
                'Apply symmetry and constant downward acceleration to vertical toss motion.'
            )
        ],
        'g10-l2': [
            sim(
                'mech_newton1',
                "Newton's 1st Law",
                'Grade 10 • Chapter 1: Mechanics',
                "Dynamics: Newton's Laws",
                'Examine inertial frames and uniform motion when net external force equals zero.',
                "Explain inertia and equilibrium using Newton's First Law."
            ),
            sim(
                'mech_newton22',
                "Newton's 2nd Law",
                'Grade 10 • Chapter 1: Mechanics',
                "Dynamics: Newton's Laws",
                'Observe acceleration response to net force and mass in dynamic free-body setups.',
                'Compute acceleration from vector sum of forces ΣF = ma.'
            ),
            sim(
                'mech_newton3',
                "Newton's 3rd Law",
                'Grade 10 • Chapter 1: Mechanics',
                "Dynamics: Newton's Laws",
                'Study paired equal and opposite contact forces during dynamic interaction.',
                'Apply action-reaction symmetry to multi-body dynamics problems.'
            ),
            sim(
                'mech_sily',
                'Inclined Plane',
                'Grade 10 • Chapter 1: Mechanics',
                "Dynamics: Newton's Laws",
                'Resolve weight into parallel (mg sin α) and perpendicular (mg cos α) components on a ramp.',
                'Analyze force components, normal reaction, and acceleration on inclined planes.'
            ),
            sim(
                'mech_treni',
                'Friction',
                'Grade 10 • Chapter 1: Mechanics',
                "Dynamics: Newton's Laws",
                'Explore limiting static friction versus sliding kinetic friction for varied normal force and μ.',
                'Calculate maximum static and kinetic friction forces using Ff = μN.'
            )
        ],
        'g10-l3': [
            sim(
                'mech_prace',
                'Work',
                'Grade 10 • Chapter 1: Mechanics',
                'Work, Kinetic Energy & Power',
                'Investigate how force direction relative to displacement determines positive, zero, or negative work.',
                'Apply W = F·s·cos(θ) and the work-kinetic energy theorem.'
            ),
            sim(
                'mech_zze',
                'Conservation of energy',
                'Grade 10 • Chapter 1: Mechanics',
                'Work, Kinetic Energy & Power',
                'Compare conservative energy conservation with non-conservative energy dissipation.',
                'Use conservation of mechanical energy to calculate speed and height changes.'
            )
        ],
        'g10-l4': [
            sim(
                'mech_hydrotlak',
                'Hydrostatic pressure',
                'Grade 10 • Chapter 1: Mechanics',
                'Fluids & Atmospheric Pressure',
                'Measure fluid pressure at varying depths and densities inside open containers.',
                'Calculate total pressure P = P0 + ρgh in static fluid columns.'
            ),
            sim(
                'mech_pascal',
                "Pascal's law",
                'Grade 10 • Chapter 1: Mechanics',
                'Fluids & Atmospheric Pressure',
                'Observe isotropic pressure transmission in an enclosed fluid system.',
                'Explain hydraulic transmission of pressure increases throughout static liquids.'
            ),
            sim(
                'mech_lis',
                'Hydraulic Lifter',
                'Grade 10 • Chapter 1: Mechanics',
                'Fluids & Atmospheric Pressure',
                'Test force amplification and piston displacement trade-offs in a hydraulic press.',
                'Relate hydraulic force multiplication to work conservation across coupled pistons.'
            ),
            sim(
                'mech_archimedes',
                "Archimedes' principle",
                'Grade 10 • Chapter 1: Mechanics',
                'Fluids & Atmospheric Pressure',
                'Submerge blocks of adjustable density and volume in fluid to compare weight and buoyant upthrust.',
                'Predict floating, neutral buoyancy, and sinking using Fb = ρfluid·Vsub·g.'
            ),
            sim(
                'mf_vyska_tlak',
                'Atmospheric pressure - Altitude',
                'Grade 10 • Chapter 1: Mechanics',
                'Fluids & Atmospheric Pressure',
                'Track barometric atmospheric pressure as altitude increases above sea level.',
                'Explain why atmospheric pressure decreases non-linearly with elevation.'
            )
        ],
        'g10-ch2-l1': [
            sim(
                'mf_teplotni_stupnice',
                'Temperature scales',
                'Grade 10 • Chapter 2: Thermodynamics',
                'Heat, Temperature & Gas Model',
                'Convert cleanly between Celsius and Kelvin thermodynamic temperature scales.',
                'Use T(K) = t(°C) + 273.15 in thermal and gas calculations.'
            ),
            sim(
                'mf_kalorimetr',
                'Calorimeter',
                'Grade 10 • Chapter 2: Thermodynamics',
                'Heat, Temperature & Gas Model',
                'Mix heated samples and water in an insulated calorimeter to find thermal equilibrium temperature.',
                'Apply calorimetry energy balance Qlost = Qgained using Q = mcΔT.'
            ),
            sim(
                'mf_skupenstvi',
                'State of matter',
                'Grade 10 • Chapter 2: Thermodynamics',
                'Heat, Temperature & Gas Model',
                'Heat or cool molecules and watch particle spacing and speed change across solid, liquid, and gas states.',
                'Connect macroscopic phase states to intermolecular spacing and thermal kinetic energy.'
            ),
            sim(
                'mf_brownuv_pohyb',
                'Brownian motion',
                'Grade 10 • Chapter 2: Thermodynamics',
                'Heat, Temperature & Gas Model',
                'Observe random erratic motion of a suspended pollen particle bombarded by unseen fluid molecules.',
                'Cite Brownian motion as direct microscopic evidence for kinetic molecular theory.'
            )
        ],
        'g10-ch3-l1': [
            sim(
                'elpole_coulomb',
                "Coulomb's law",
                'Grade 10 • Chapter 3: Electricity & Magnetism',
                "Electrostatics & Coulomb's Law",
                'Quantify electrostatic force magnitude and direction as a function of q1, q2, and separation r.',
                "Apply F = k|q1q2|/r² to calculate point-charge interactions."
            ),
            sim(
                'elpole_el_pole',
                'Electric field',
                'Grade 10 • Chapter 3: Electricity & Magnetism',
                "Electrostatics & Coulomb's Law",
                'Inspect electric field intensity vectors and test-charge forces around charge configurations.',
                'Define electric field E = F / q0 and interpret field vector direction.'
            ),
            sim(
                'elpole_pole',
                'Charges and fields',
                'Grade 10 • Chapter 3: Electricity & Magnetism',
                "Electrostatics & Coulomb's Law",
                'Arrange single or multiple charges and inspect resultant electric field lines and equipotentials.',
                'Draw and interpret electric field patterns around dipole and point-charge systems.'
            )
        ],
        'g10-ch3-l2': [
            sim(
                'ele_obvod',
                'Electrical circuit',
                'Grade 10 • Chapter 3: Electricity & Magnetism',
                'DC Circuits & Magnetic Fields',
                'Explore continuous charge flow in closed DC circuits with switches and resistive loads.',
                'Trace current direction and closed-loop continuity in DC circuits.'
            ),
            sim(
                'ele_ohm',
                "Ohm's law",
                'Grade 10 • Chapter 3: Electricity & Magnetism',
                'DC Circuits & Magnetic Fields',
                'Test how source EMF and load resistance govern current intensity in simple DC circuits.',
                'Calculate current, voltage drop, and resistance in single-loop DC circuits.'
            ),
            sim(
                'ele_odpory',
                'Resistors',
                'Grade 10 • Chapter 3: Electricity & Magnetism',
                'DC Circuits & Magnetic Fields',
                'Compare series and parallel circuit connections for total resistance and branch currents.',
                'Solve multi-resistor DC circuits using series and parallel reduction.'
            ),
            sim(
                'mag_fleming',
                "Fleming's left-hand rule",
                'Grade 10 • Chapter 3: Electricity & Magnetism',
                'DC Circuits & Magnetic Fields',
                'Predict magnetic force direction on a current-carrying conductor placed in an external magnetic field.',
                'Determine force direction on current-carrying wires in magnetic fields.'
            )
        ],
        'g10-ch3-l3': [
            sim(
                'mag_indukce_accel',
                'Electromagnetic induction',
                'Grade 10 • Chapter 3: Electricity & Magnetism',
                'AC & Transformer Systems',
                'Move a magnet relative to a coil at varying speeds and observe induced voltage polarity and magnitude.',
                "Explain Faraday's law of electromagnetic induction using changing magnetic flux."
            ),
            sim(
                'mag_alternator',
                'Alternator and dynamo',
                'Grade 10 • Chapter 3: Electricity & Magnetism',
                'AC & Transformer Systems',
                'Compare slip-ring AC alternators and split-ring commutator DC dynamos while rotating an armature coil.',
                'Explain how coil rotation in a magnetic field generates sinusoidal AC or pulsed DC.'
            ),
            sim(
                'ac_transformator',
                'Transformer',
                'Grade 10 • Chapter 3: Electricity & Magnetism',
                'AC & Transformer Systems',
                'Adjust primary and secondary coil turns and AC input to inspect step-up/step-down output.',
                'Apply Vp/Vs = Np/Ns to ideal power-grid AC transformers.'
            )
        ],
        'g10-ch4-l1': [
            sim(
                'opt_fermat',
                'Fermat’s principle',
                'Grade 10 • Chapter 4: Geometric Optics',
                'Light Propagation & Reflection',
                'Test light paths between two points via a boundary and identify the path of least travel time.',
                "Connect Fermat's principle of least time to rectilinear propagation and reflection laws."
            ),
            sim(
                'opt_zrcadlo',
                'Mirror',
                'Grade 10 • Chapter 4: Geometric Optics',
                'Light Propagation & Reflection',
                'Measure angles of incidence and reflection on a mirror and trace reflected image rays.',
                'Verify θi = θr and locate virtual plane-mirror images geometrically.'
            )
        ],
        'g10-ch4-l2': [
            sim(
                'opt_total',
                'Total internal reflection',
                'Grade 10 • Chapter 4: Geometric Optics',
                "Refraction & Snell's Law",
                'Change refractive indices and incident angle to examine refracted bending and critical angle.',
                "Apply Snell's law n1·sin(θ1) = n2·sin(θ2) and compute critical angle sin(θc) = n2/n1."
            ),
            sim(
                'opt_ohnisko',
                'Focal length',
                'Grade 10 • Chapter 4: Geometric Optics',
                "Refraction & Snell's Law",
                'Vary lens curvature and refractive index to observe how parallel light converges to focal point F.',
                'Connect lens refractive index and surface curvature to focal length and optical power.'
            )
        ],
        'g10-ch4-l3': [
            sim(
                'opt_hranol',
                'Prism',
                'Grade 10 • Chapter 4: Geometric Optics',
                'Double Plane, Slab, & Prism',
                'Direct light rays and white light through an optical prism while adjusting prism angle and index.',
                'Analyze double refraction, deviation angle, and chromatic dispersion in a glass prism.'
            ),
            sim(
                'opt_total',
                'Total internal reflection',
                'Grade 10 • Chapter 4: Geometric Optics',
                'Double Plane, Slab, & Prism',
                'Examine internal boundary reflections and lateral displacement across optical media interfaces.',
                'Predict ray exit versus internal trapping in prisms and optical fibers.'
            )
        ],

        /* ==================== GRADE 11 ==================== */
        'g11-l1': [
            sim(
                'mat_vektory',
                'Vector Addition',
                'Grade 11 • Chapter 1: Mechanics',
                'Kinematics in 2D & Projectile Motion',
                'Add and subtract 2D vectors graphically and by components with adjustable angles and magnitudes.',
                'Resolve 2D velocity and displacement vectors into orthogonal x and y components.'
            ),
            sim(
                'gp_vrh_vodorovny',
                'Horizontally Launched Projectile',
                'Grade 11 • Chapter 1: Mechanics',
                'Kinematics in 2D & Projectile Motion',
                'Launch a projectile horizontally from variable cliff height and speed to observe its parabolic path.',
                'Compute range, flight time, and impact velocity components for horizontal launches.'
            ),
            sim(
                'gp_vrh_sikmy',
                'Projectile motion',
                'Grade 11 • Chapter 1: Mechanics',
                'Kinematics in 2D & Projectile Motion',
                'Vary launch angle and initial speed to compare trajectory peak, time of flight, and horizontal range.',
                'Solve 2D projectile equations and analyze optimal launch angles.'
            )
        ],
        'g11-l2': [
            sim(
                'mech_setrvacnost',
                'Fictitious force',
                'Grade 11 • Chapter 1: Mechanics',
                'Accelerated Frames & Rotational Dynamics',
                'Observe a pendulum and sliding mass inside an accelerating reference frame versus an inertial frame.',
                'Distinguish pseudo-forces in non-inertial frames from real physical interactions.'
            ),
            sim(
                'mech_kruznice',
                'Uniform circular motion',
                'Grade 11 • Chapter 1: Mechanics',
                'Accelerated Frames & Rotational Dynamics',
                'Inspect tangential velocity and inward centripetal acceleration vectors along a circular orbit.',
                'Apply ac = v²/r = ω²r and relate angular speed to linear speed.'
            ),
            sim(
                'mech_odstrediva',
                'Centrifugal force',
                'Grade 11 • Chapter 1: Mechanics',
                'Accelerated Frames & Rotational Dynamics',
                'Compare rotating-frame outward apparent force with inertial centripetal tension.',
                'Analyze circular dynamics correctly from both inertial and rotating perspectives.'
            ),
            sim(
                'mech_moment',
                'Moment of inertia',
                'Grade 11 • Chapter 1: Mechanics',
                'Accelerated Frames & Rotational Dynamics',
                'Race bodies of different mass distributions (hoop, cylinder, sphere) and adjust torque/inertia.',
                'Explain how mass distribution around the axis determines rotational inertia I and angular acceleration.'
            )
        ],
        'g11-l3': [
            sim(
                'gp_newton_zakon',
                "Newton's law of universal gravitation",
                'Grade 11 • Chapter 1: Mechanics',
                'Universal Gravitation & Satellite Motion',
                'Vary two planetary masses and orbital separation to measure inverse-square gravitational attraction.',
                'Apply F = G·m1·m2 / r² to planetary and satellite interactions.'
            ),
            sim(
                'gp_intenzita',
                'Gravitational Field Intensity',
                'Grade 11 • Chapter 1: Mechanics',
                'Universal Gravitation & Satellite Motion',
                'Probe radial gravitational field strength g(r) from inside a planet out into deep space.',
                'Calculate gravitational field intensity g = GM / r² at varying orbital altitudes.'
            ),
            sim(
                'gp_kosmicke_rychlosti',
                "Newton's Cannon",
                'Grade 11 • Chapter 1: Mechanics',
                'Universal Gravitation & Satellite Motion',
                'Fire projectiles horizontally from a high mountain at speeds up to orbital and escape velocities.',
                'Distinguish suborbital fall, circular orbit (v1), elliptical orbit, and escape velocity (v2).'
            ),
            sim(
                'gp_geostacionarni',
                'Geosynchronous satellite',
                'Grade 11 • Chapter 1: Mechanics',
                'Universal Gravitation & Satellite Motion',
                'Observe a satellite whose 24-hour orbital period keeps it stationary over a fixed equatorial longitude.',
                'Derive the orbital radius and speed required for geostationary satellites.'
            ),
            sim(
                'kepler_zakony',
                "Kepler's Laws",
                'Grade 11 • Chapter 1: Mechanics',
                'Universal Gravitation & Satellite Motion',
                'Inspect elliptical planetary orbits, equal areas swept in equal times, and T² ∝ a³ scaling.',
                "Verify Kepler's three laws of planetary motion interactively."
            )
        ],
        'g11-l4': [
            sim(
                'mech_pruzna',
                'Elastic Collision',
                'Grade 11 • Chapter 1: Mechanics',
                'Impulse, Momentum & Collisions',
                'Collide two carts of adjustable mass and velocity while conserving both momentum and kinetic energy.',
                'Solve 1D elastic collision problems using simultaneous conservation of p and Ek.'
            ),
            sim(
                'mech_nepruzna',
                'Inelastic Collision',
                'Grade 11 • Chapter 1: Mechanics',
                'Impulse, Momentum & Collisions',
                'Collide carts that stick together after impact and inspect lost kinetic energy versus conserved momentum.',
                'Apply momentum conservation to perfectly inelastic collisions and quantify kinetic energy loss.'
            ),
            sim(
                'mech_houpacka',
                "Newton's Cradle",
                'Grade 11 • Chapter 1: Mechanics',
                'Impulse, Momentum & Collisions',
                'Release one or more spheres in a steel-ball pendulum row and track momentum-energy transfer.',
                'Demonstrate why equal numbers of spheres rebound to satisfy both momentum and energy conservation.'
            )
        ],
        'g11-ch1-l5': [
            sim(
                'mech_zze',
                'Conservation of energy',
                'Grade 11 • Chapter 1: Mechanics',
                'Energy Conservation, Pendulum & Moduli',
                'Monitor continuous energy transformation between kinetic and potential forms in mechanical systems.',
                'Apply energy conservation to conservative mechanical oscillators and falling systems.'
            ),
            sim(
                'kv_kyvadlo',
                'Pendulum (mathematics)',
                'Grade 11 • Chapter 1: Mechanics',
                'Energy Conservation, Pendulum & Moduli',
                'Adjust pendulum length, mass, and gravitational field to measure oscillation period and energy.',
                'Verify T = 2π√(L/g) and observe mass independence for small-angle simple pendulums.'
            ),
            sim(
                'mf_young',
                "Hooke's law - 2",
                'Grade 11 • Chapter 1: Mechanics',
                'Energy Conservation, Pendulum & Moduli',
                'Apply tensile load to wires of adjustable length, area, and material to inspect stress-strain deformation.',
                "Calculate tensile stress, strain, and Young's modulus E = σ / ε."
            )
        ],
        'g11-ch1-l6': [
            sim(
                'mech_bernoulli',
                "Bernoulli's principle",
                'Grade 11 • Chapter 1: Mechanics',
                'Fluid Dynamics, Continuity & Viscosity',
                'Observe steady fluid flow through a constricted Venturi tube with live pressure and velocity gauges.',
                'Apply the continuity equation A1v1 = A2v2 and Bernoulli equation along a streamline.'
            ),
            sim(
                'gp_vytok',
                'Flow of Fluid through a Hole',
                'Grade 11 • Chapter 1: Mechanics',
                'Fluid Dynamics, Continuity & Viscosity',
                'Open side orifices at different depths in a tank to measure efflux speed and jet range.',
                "Derive and test Torricelli's efflux law v = √(2gh) from Bernoulli's equation."
            ),
            sim(
                'mech_kridlo',
                'Lift (force)',
                'Grade 11 • Chapter 1: Mechanics',
                'Fluid Dynamics, Continuity & Viscosity',
                'Vary angle of attack and airflow speed around an airfoil cross-section to observe aerodynamic lift.',
                'Explain aerodynamic lift generation using pressure differences and airflow deflection.'
            )
        ],
        'g11-ch2-l1': [
            sim(
                'mf_roztaznost2',
                'Thermal expansion',
                'Grade 11 • Chapter 2: Thermal Physics & Waves',
                'Thermal Physics, Expansion & Heat',
                'Measure quantitative linear and volumetric thermal expansion as temperature rises across solids/liquids.',
                'Compute ΔL = α·L0·ΔT and ΔV = β·V0·ΔT for engineering materials.'
            ),
            sim(
                'mf_kalorimetr',
                'Calorimeter',
                'Grade 11 • Chapter 2: Thermal Physics & Waves',
                'Thermal Physics, Expansion & Heat',
                'Perform thermal mixing experiments in a calorimeter to determine equilibrium temperature or specific heat.',
                'Solve calorimetry and heat capacity conservation problems quantitatively.'
            ),
            sim(
                'mf_rozdeleni_rychlosti',
                'Velocity distribution of ideal gas molecules',
                'Grade 11 • Chapter 2: Thermal Physics & Waves',
                'Thermal Physics, Expansion & Heat',
                'Observe how changing temperature shifts the Maxwell-Boltzmann speed distribution of gas particles.',
                'Connect absolute temperature directly to average molecular translational kinetic energy.'
            )
        ],
        'g11-ch2-l2': [
            sim(
                'kv_harmonicke_kmitani',
                'Simple harmonic motion',
                'Grade 11 • Chapter 2: Thermal Physics & Waves',
                'Periodic Motion, Oscillations & Waves',
                'Compare circular uniform rotation projection with sinusoidal displacement, velocity, and acceleration.',
                'Describe SHM kinematics using x(t) = A·sin(ωt + φ) and phase diagrams.'
            ),
            sim(
                'kv_mechanicky_oscilator',
                'Simple harmonic oscillator',
                'Grade 11 • Chapter 2: Thermal Physics & Waves',
                'Periodic Motion, Oscillations & Waves',
                'Vary spring stiffness k and oscillating mass m while observing restoring force and kinetic-potential bars.',
                'Apply T = 2π√(m/k) and analyze mechanical energy conservation in SHM.'
            ),
            sim(
                'kv_rychlost_zvuku',
                'Speed of sound',
                'Grade 11 • Chapter 2: Thermal Physics & Waves',
                'Periodic Motion, Oscillations & Waves',
                'Compare acoustic wave propagation speed across gases, liquids, solids, and varying air temperatures.',
                'Explain how medium elasticity, density, and temperature govern the speed of sound.'
            ),
            sim(
                'kv_doppler',
                'Doppler effect',
                'Grade 11 • Chapter 2: Thermal Physics & Waves',
                'Periodic Motion, Oscillations & Waves',
                'Move a wave source toward and past a stationary listener while observing wavefront compression and pitch shift.',
                'Analyze observed frequency shifts due to relative source-observer motion.'
            )
        ],
        'g11-ch3-l1': [
            sim(
                'elpole_coulomb',
                "Coulomb's law",
                'Grade 11 • Chapter 3: Electrostatics & Circuits',
                'Electrostatics, Fields & Capacitors',
                'Investigate inverse-square electrostatic force vectors in vacuum and dielectric environments.',
                "Compute net vector forces on point charges using Coulomb's law and superposition."
            ),
            sim(
                'elpole_el_pole',
                'Electric field',
                'Grade 11 • Chapter 3: Electrostatics & Circuits',
                'Electrostatics, Fields & Capacitors',
                'Measure electric field strength and potential difference across point and uniform parallel-plate fields.',
                'Relate electric field E, potential V, and force F = qE.'
            ),
            sim(
                'elpole_kondenzator',
                'Capacitor',
                'Grade 11 • Chapter 3: Electrostatics & Circuits',
                'Electrostatics, Fields & Capacitors',
                'Vary plate area, plate separation, and dielectric constant inside a parallel-plate capacitor.',
                'Apply C = ε0·εr·A/d and Q = C·V to predict charge and stored electrostatic energy.'
            ),
            sim(
                'elpole_kondenzatory',
                'Capacitors',
                'Grade 11 • Chapter 3: Electrostatics & Circuits',
                'Electrostatics, Fields & Capacitors',
                'Connect capacitors in series and parallel circuits and measure equivalent capacitance and voltage sharing.',
                'Calculate equivalent capacitance, total charge, and stored energy in capacitor networks.'
            )
        ],
        'g11-ch3-l2': [
            sim(
                'ele_odpor',
                'Electrical resistance',
                'Grade 11 • Chapter 3: Electrostatics & Circuits',
                'Electric Current, Resistance & DC Circuits',
                'Investigate wire resistivity ρ, length l, and cross-sectional area S on conductor resistance.',
                'Calculate wire resistance using R = ρ·l/S.'
            ),
            sim(
                'ele_odpor_teplota',
                'Temperature coefficient',
                'Grade 11 • Chapter 3: Electrostatics & Circuits',
                'Electric Current, Resistance & DC Circuits',
                'Heat a metallic resistor and measure how electrical resistance rises linearly with temperature.',
                'Apply R = R0(1 + αΔT) to model thermal resistance variation in conductors.'
            ),
            sim(
                'ele_vnitrni_odpor',
                'Internal resistance',
                'Grade 11 • Chapter 3: Electrostatics & Circuits',
                'Electric Current, Resistance & DC Circuits',
                'Vary external load resistance connected to a real cell with EMF ε and internal resistance r.',
                'Apply Vterm = ε − I·r and determine load matching for terminal voltage and current.'
            ),
            sim(
                'ele_kirchhoff',
                "Kirchhoff's circuit laws",
                'Grade 11 • Chapter 3: Electrostatics & Circuits',
                'Electric Current, Resistance & DC Circuits',
                'Test multi-branch DC circuits while monitoring junction currents and closed-loop potential sums.',
                "Use Kirchhoff's current law (ΣI = 0) and voltage law (ΣΔV = 0) to analyze circuits."
            )
        ],

        /* ==================== GRADE 12 ==================== */
        'g12-l1': [
            sim(
                'mf_rozdeleni_rychlosti',
                'Velocity distribution of ideal gas molecules',
                'Grade 12 • Chapter 1: Thermodynamics',
                'Kinetic Theory of Ideal Gases',
                'Vary temperature and molar mass to inspect shifts in the Maxwell-Boltzmann speed curve and rms speed.',
                'Relate microscopic molecular speed distributions to temperature and pressure.'
            ),
            sim(
                'mf_avogadro',
                "Avogadro's law",
                'Grade 12 • Chapter 1: Thermodynamics',
                'Kinetic Theory of Ideal Gases',
                'Compare equal-volume chambers of different ideal gases at identical pressure and temperature.',
                "Verify Avogadro's hypothesis and apply the ideal gas law PV = nRT = NkBT."
            ),
            sim(
                'mf_brownuv_pohyb',
                'Brownian motion',
                'Grade 12 • Chapter 1: Thermodynamics',
                'Kinetic Theory of Ideal Gases',
                'Simulate random molecular collisions driving the erratic path of a suspended micro-particle.',
                'Connect random thermal molecular impacts to kinetic gas pressure and diffusion.'
            )
        ],
        'g12-l2': [
            sim(
                'mf_vnitrni_energie',
                'Internal energy',
                'Grade 12 • Chapter 1: Thermodynamics',
                'First Law of Thermodynamics',
                'Change internal energy of a gas via heat transfer Q and mechanical work W simultaneously.',
                'Apply the First Law ΔU = Q + W (and sign conventions) to thermodynamic systems.'
            ),
            sim(
                'mf_izotermicky_dej',
                'Isothermal process',
                'Grade 12 • Chapter 1: Thermodynamics',
                'First Law of Thermodynamics',
                'Compress or expand an ideal gas at constant temperature along its hyperbolic P-V isotherm.',
                'Analyze isothermal work, constant ΔU = 0, and heat flow.'
            ),
            sim(
                'mf_izobaricky_dej',
                'Isobaric process',
                'Grade 12 • Chapter 1: Thermodynamics',
                'First Law of Thermodynamics',
                'Heat a gas under constant piston pressure and monitor V-T proportionality and W = PΔV.',
                'Compute work, heat absorbed, and ΔU during constant-pressure expansion.'
            ),
            sim(
                'mf_izochoricky_dej',
                'Isochoric process',
                'Grade 12 • Chapter 1: Thermodynamics',
                'First Law of Thermodynamics',
                'Heat or cool a rigid fixed-volume gas chamber to observe zero boundary work and ΔU = Q.',
                'Relate pressure-temperature proportionality to constant-volume heat exchange.'
            ),
            sim(
                'mf_adiabaticky_dej',
                'Adiabatic process',
                'Grade 12 • Chapter 1: Thermodynamics',
                'First Law of Thermodynamics',
                'Rapidly compress or expand an insulated gas without heat exchange and observe sharp temperature swings.',
                'Explain adiabatic heating/cooling using ΔU = W and steeper P-V curves.'
            )
        ],
        'g12-l3': [
            sim(
                'mf_carnot',
                'Carnot cycle',
                'Grade 12 • Chapter 1: Thermodynamics',
                'Heat Engine',
                'Step through isothermal and adiabatic stages on a P-V diagram between hot and cold reservoirs.',
                'Calculate maximum theoretical Carnot efficiency ηmax = 1 − Tc/Th.'
            ),
            sim(
                'mf_lednicka',
                'Refrigerator',
                'Grade 12 • Chapter 1: Thermodynamics',
                'Heat Engine',
                'Inspect a reversed thermodynamic cycle pumping heat from a cold interior to warmer surroundings.',
                'Compare heat engine efficiency with refrigerator Coefficient of Performance.'
            ),
            sim(
                'mf_ctyrtakt',
                'Four-stroke engine',
                'Grade 12 • Chapter 1: Thermodynamics',
                'Heat Engine',
                'Watch intake, compression, power/combustion, and exhaust strokes synchronized with the Otto P-V loop.',
                'Connect real internal-combustion cycles to thermodynamic work output.'
            )
        ],
        'g12-l4': [
            sim(
                'kv_stojate_vlneni',
                'Standing waves',
                'Grade 12 • Chapter 2: Waves & Optics',
                'Superposition & Standing Waves',
                'Exciting harmonics (n = 1, 2, 3...) along a string or air column with fixed/free boundary conditions.',
                'Identify nodes, antinodes, and standing-wave harmonic wavelengths λn = 2L / n.'
            ),
            sim(
                'kv_skladani_kmitani_3',
                'Superposition of harmonic oscillations',
                'Grade 12 • Chapter 2: Waves & Optics',
                'Superposition & Standing Waves',
                'Combine two sinusoidal waves/oscillations of adjustable frequencies and phases to observe beats and interference.',
                'Explain wave superposition, constructive/destructive addition, and beat frequency.'
            ),
            sim(
                'kv_odraz_na_konci',
                'Reflection of Waves from Boundaries',
                'Grade 12 • Chapter 2: Waves & Optics',
                'Superposition & Standing Waves',
                'Send a wave pulse toward a rigid fixed end versus a loose free end and compare phase inversion.',
                'Explain the π phase flip at fixed boundaries versus in-phase reflection at free boundaries.'
            )
        ],
        'g12-interf': [
            sim(
                'opt_interference',
                'Double-slit experiment',
                'Grade 12 • Chapter 2: Waves & Optics',
                'Interference & Diffraction',
                "Vary slit separation d and wavelength λ in Young's double-slit setup to inspect fringe spacing.",
                'Apply Δy = λD/d and path-difference conditions for bright and dark interference fringes.'
            ),
            sim(
                'opt_difrakce',
                'Diffraction grating',
                'Grade 12 • Chapter 2: Waves & Optics',
                'Interference & Diffraction',
                'Direct monochromatic or white light onto a multi-line grating and observe angular diffraction orders.',
                'Apply d·sin(θ) = k·λ to determine diffraction angles and spectral wavelengths.'
            ),
            sim(
                'kv_huygens',
                'Huygens–Fresnel principle',
                'Grade 12 • Chapter 2: Waves & Optics',
                'Interference & Diffraction',
                'Visualize secondary wavelets spreading past apertures and obstacles.',
                'Explain diffraction bending of light and mechanical waves using Huygens wavelets.'
            )
        ],
        'g12-ch3-l1': [
            sim(
                'ele_amper',
                "Ampere's law",
                'Grade 12 • Chapter 3: Electromagnetism',
                'Magnetism',
                'Vary current magnitudes and directions in parallel straight wires to test attraction and repulsion.',
                'Compute magnetic force per unit length between parallel current-carrying conductors.'
            ),
            sim(
                'mag_fleming',
                "Fleming's left-hand rule",
                'Grade 12 • Chapter 3: Electromagnetism',
                'Magnetism',
                'Determine Laplace force F = B·I·L·sin(α) direction for arbitrary current and field orientations.',
                'Predict magnetic force direction and magnitude on current-carrying conductors.'
            ),
            sim(
                'mag_wehnelt',
                'Teltron tube',
                'Grade 12 • Chapter 3: Electromagnetism',
                'Magnetism',
                'Bend a visible electron beam into circular motion inside a uniform Helmholtz magnetic field.',
                'Apply Lorentz force qvB = mv²/r to circular trajectories of charged particles.'
            ),
            sim(
                'mag_civka',
                'Coil',
                'Grade 12 • Chapter 3: Electromagnetism',
                'Magnetism',
                'Inspect uniform axial magnetic field B = μ0·n·I inside a current-carrying solenoid.',
                'Calculate magnetic flux density inside ideal solenoids and apply right-hand rule.'
            )
        ],
        'g12-ch3-l2': [
            sim(
                'mag_indukce_accel',
                'Electromagnetic induction',
                'Grade 12 • Chapter 3: Electromagnetism',
                'Electromagnetic Induction',
                'Change magnetic flux rate ΔΦ/Δt through a coil and record peak induced EMF.',
                "Verify Faraday's law ε = −N·(ΔΦ/Δt) quantitatively."
            ),
            sim(
                'mag_lenz',
                "Lenz's law",
                'Grade 12 • Chapter 3: Electromagnetism',
                'Electromagnetic Induction',
                'Drop magnets or move conductive rings near coils to inspect induced opposing magnetic poles.',
                "Explain the minus sign in Faraday's law and Lenz's law via energy conservation."
            ),
            sim(
                'mag_alternator',
                'Alternator and dynamo',
                'Grade 12 • Chapter 3: Electromagnetism',
                'Electromagnetic Induction',
                'Spin a coil inside a magnetic field to plot induced sinusoidal EMF ε(t) = N·B·A·ω·sin(ωt).',
                'Analyze rotating-loop AC generator EMF as a function of angular velocity and flux.'
            )
        ],
        'g12-ch3-l3': [
            sim(
                'mag_indukce',
                'Self-induction',
                'Grade 12 • Chapter 3: Electromagnetism',
                'Self Induction',
                'Close and open a switch in parallel resistive and inductive bulb branches to observe current lag.',
                'Explain self-induced back EMF εL = −L·(dI/dt) and energy stored in an inductor.'
            ),
            sim(
                'ele_elmg',
                'Electromagnetic oscillating circuit',
                'Grade 12 • Chapter 3: Electromagnetism',
                'Self Induction',
                'Track periodic energy exchange between electric field (C) and magnetic field (L) in an LC tank.',
                'Apply Thomson frequency ω0 = 1/√(LC) to LC electromagnetic oscillations.'
            )
        ],
        'g12-ch3-l4': [
            sim(
                'ele_ac_rlc',
                'Simple AC circuits',
                'Grade 12 • Chapter 3: Electromagnetism',
                'Alternating Currents',
                'Compare voltage and current phase relationships across pure R, L, and C AC elements.',
                'Identify capacitive current lead and inductive voltage lead in sinusoidal AC circuits.'
            ),
            sim(
                'ac_rlc_ser',
                'RLC series circuit',
                'Grade 12 • Chapter 3: Electromagnetism',
                'Alternating Currents',
                'Sweep AC frequency across series R, L, and C components while inspecting phasors, impedance, and current.',
                'Compute impedance Z, phase angle φ, and resonance frequency f0 = 1/(2π√LC) in series RLC.'
            ),
            sim(
                'ac_rlc_par',
                'RLC parallel circuit',
                'Grade 12 • Chapter 3: Electromagnetism',
                'Alternating Currents',
                'Inspect branch currents and parallel resonance admittance across parallel R, L, and C elements.',
                'Contrast parallel RLC branch currents and resonance behavior with series RLC.'
            ),
            sim(
                'ac_transformator',
                'Transformer',
                'Grade 12 • Chapter 3: Electromagnetism',
                'Alternating Currents',
                'Test AC voltage and current transformation under load across step-up and step-down coils.',
                'Solve ideal transformer AC voltage, current, and high-voltage power transmission efficiency problems.'
            )
        ],
        'g12-ch4-l1': [
            sim(
                'pol_kremik',
                'Silicon',
                'Grade 12 • Chapter 4: Modern Physics',
                'Semiconductors & Transistors',
                'Inspect silicon crystal covalent bonding and valence-band thermal electron excitation.',
                'Explain covalent lattice structure and band-gap conduction in intrinsic silicon.'
            ),
            sim(
                'pol_pohyb_der',
                'Intrinsic semiconductor',
                'Grade 12 • Chapter 4: Modern Physics',
                'Semiconductors & Transistors',
                'Compare negative free-electron drift and positive hole propagation under an applied electric field.',
                'Distinguish electron and hole charge carriers in intrinsic and doped semiconductors.'
            ),
            sim(
                'pol_dioda',
                'Diode',
                'Grade 12 • Chapter 4: Modern Physics',
                'Semiconductors & Transistors',
                'Bias a p-n junction diode forward and reverse to inspect depletion layer width and rectification.',
                'Explain asymmetric diode I-V behavior and p-n depletion zone physics.'
            ),
            sim(
                'pol_tranzistor',
                'Transistor',
                'Grade 12 • Chapter 4: Modern Physics',
                'Semiconductors & Transistors',
                'Control small base current in a bipolar NPN/PNP transistor to modulate a larger collector current.',
                'Explain transistor current amplification and electronic switching action.'
            ),
            sim(
                'pol_graetz',
                'Diode bridge',
                'Grade 12 • Chapter 4: Modern Physics',
                'Semiconductors & Transistors',
                'Trace AC current paths through a four-diode Graetz bridge during positive and negative half-cycles.',
                'Explain full-wave AC-to-DC rectification using a bridge rectifier.'
            )
        ],
        'g12-ch4-l2': [
            sim(
                'str_michelson',
                'Michelson–Morley experiment',
                'Grade 12 • Chapter 4: Modern Physics',
                'Special Theory of Relativity',
                'Compare perpendicular interferometer light beams with and without hypothesized ether drift.',
                'Explain how the null Michelson-Morley result established constancy of the speed of light c.'
            ),
            sim(
                'str_relativnost',
                'Relativity of simultaneity',
                'Grade 12 • Chapter 4: Modern Physics',
                'Special Theory of Relativity',
                'Compare light flashes inside a fast-moving train car as viewed by onboard versus trackside observers.',
                'Demonstrate why simultaneous events in one inertial frame need not be simultaneous in another.'
            ),
            sim(
                'str_dilatace',
                'Time dilation',
                'Grade 12 • Chapter 4: Modern Physics',
                'Special Theory of Relativity',
                'Track a light clock moving at relativistic fraction of c to compare proper time Δt0 and dilated time Δt.',
                'Apply Δt = γ·Δt0 with Lorentz factor γ = 1/√(1 − v²/c²).'
            ),
            sim(
                'str_kontrakce',
                'Length contraction',
                'Grade 12 • Chapter 4: Modern Physics',
                'Special Theory of Relativity',
                'Observe proper length L0 contract along the direction of motion at relativistic speeds.',
                'Apply L = L0 / γ to relativistic distance and length measurements.'
            )
        ],
        'g12-ch4-l3': [
            sim(
                'elplyn_magnet_elektron',
                'Cathode ray',
                'Grade 12 • Chapter 4: Modern Physics',
                'Atomic Structure',
                'Deflect cathode-ray electrons electrically and magnetically to measure charge-to-mass ratio e/m.',
                'Explain how cathode ray experiments led to discovery of the electron.'
            ),
            sim(
                'atom_rutheford',
                'Rutherford gold foil experiment',
                'Grade 12 • Chapter 4: Modern Physics',
                'Atomic Structure',
                'Fire alpha particles at thin gold nuclei and observe small-angle versus rare large-angle scattering.',
                'Deduce the small, dense, positively charged atomic nucleus from alpha scattering.'
            ),
            sim(
                'opt_fotoefekt',
                'Photoelectric effect',
                'Grade 12 • Chapter 4: Modern Physics',
                'Atomic Structure',
                'Vary light frequency, intensity, and cathode work function to inspect threshold emission and stopping voltage.',
                "Apply Einstein's photoelectric equation hf = Φ + Ek,max."
            ),
            sim(
                'atom_vodik',
                'Bohr model',
                'Grade 12 • Chapter 4: Modern Physics',
                'Atomic Structure',
                'Trigger hydrogen electron transitions between stationary energy shells to observe Balmer/Lyman photon emission.',
                'Connect discrete atomic spectral lines to quantized energy transitions ΔE = hf.'
            )
        ]
    };

    function escapeHtml(value) {
        return String(value == null ? '' : value)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    function detectExistingProvider(game) {
        var url = String((game && game.url) || '').toLowerCase();
        var explicit = game && game.providerLabel;
        if (explicit) return explicit;
        if (url.indexOf('phet.colorado.edu') !== -1) return 'PhET Interactive Simulations';
        if (url.indexOf('vascak.cz') !== -1) return 'Vaščák Physics at School';
        if (url.indexOf('geogebra') !== -1) return 'GeoGebra Physics';
        return 'Interactive Simulation';
    }

    function detectExistingProviderKey(game) {
        if (game && game.provider) return String(game.provider).toLowerCase();
        var url = String((game && game.url) || '').toLowerCase();
        if (url.indexOf('vascak.cz') !== -1) return 'vascak';
        return 'existing';
    }

    function resolveLessonId(lessonId) {
        var key = String(lessonId || '').trim();
        return LESSON_ID_ALIASES[key] || key;
    }

    function getVascakSimulations(lessonId) {
        var resolved = resolveLessonId(lessonId);
        var list = VASCAK_SIMULATIONS_BY_LESSON[resolved];
        if (!Array.isArray(list)) return [];
        return list.map(function (item) {
            return Object.assign({}, item);
        });
    }

    function normalizeExistingGames(existingGames, lesson) {
        if (!Array.isArray(existingGames)) return [];
        return existingGames
            .filter(function (g) {
                return g && typeof g === 'object' && g.url;
            })
            .map(function (g) {
                var pKey = detectExistingProviderKey(g);
                var pLabel = detectExistingProvider(g);
                return Object.assign({}, g, {
                    provider: pKey,
                    providerLabel: pLabel,
                    title: g.title || g.topic || 'Interactive Simulation',
                    topic: g.topic || g.title || 'Interactive Simulation',
                    chapter: g.chapter || ((lesson && lesson.title) ? lesson.title : 'Curriculum Topic'),
                    curriculumTopic: g.curriculumTopic || g.topic || (lesson && lesson.title) || '',
                    description: g.description || '',
                    objective: g.objective || '',
                    sourceUrl: g.sourceUrl || g.url
                });
            });
    }

    function getMergedGames(lesson, existingGames) {
        var existingNormalized = normalizeExistingGames(existingGames, lesson);
        var vascakList = getVascakSimulations(lesson && lesson.id);

        var seenUrls = {};
        var merged = [];

        existingNormalized.forEach(function (g) {
            var cleanUrl = String(g.url || '').trim();
            if (!cleanUrl || seenUrls[cleanUrl]) return;
            seenUrls[cleanUrl] = true;
            merged.push(g);
        });

        vascakList.forEach(function (v) {
            var cleanUrl = String(v.url || '').trim();
            if (!cleanUrl || seenUrls[cleanUrl]) return;
            seenUrls[cleanUrl] = true;
            merged.push(v);
        });

        return merged;
    }

    function renderGameSection(container, lesson, existingGames) {
        if (!container || !lesson) return;

        var allGames = getMergedGames(lesson, existingGames);

        if (!allGames.length) {
            container.innerHTML =
                '<div class="game-empty">' +
                '<i class="fa-solid fa-gamepad"></i>' +
                '<h3>Interactive Game Coming Soon</h3>' +
                '<p>An interactive simulation or game for this lesson will be available soon.</p>' +
                '</div>';
            return;
        }

        var existingOnly = allGames.filter(function (g) { return g.provider !== 'vascak'; });
        var vascakOnly = allGames.filter(function (g) { return g.provider === 'vascak'; });

        var activeFilter = 'all';
        var selectedIndex = 0;

        function getVisibleGames() {
            if (activeFilter === 'existing') return existingOnly;
            if (activeFilter === 'vascak') return vascakOnly;
            return allGames;
        }

        function requestFrameFullscreen(wrapperEl, iframeEl) {
            var target = wrapperEl || iframeEl;
            if (!target) return false;
            var fn = target.requestFullscreen || target.webkitRequestFullscreen || target.mozRequestFullScreen || target.msRequestFullscreen;
            if (typeof fn === 'function') {
                try {
                    var res = fn.call(target);
                    if (res && typeof res.catch === 'function') {
                        res.catch(function () {});
                    }
                    return true;
                } catch (e) {
                    return false;
                }
            }
            return false;
        }

        function draw() {
            var visibleGames = getVisibleGames();
            if (!visibleGames.length) {
                activeFilter = 'all';
                visibleGames = allGames;
            }
            if (selectedIndex >= visibleGames.length || selectedIndex < 0) {
                selectedIndex = 0;
            }

            var currentGame = visibleGames[selectedIndex];
            var isVascak = currentGame.provider === 'vascak';

            var providerFilterHtml = '';
            if (existingOnly.length > 0 && vascakOnly.length > 0) {
                providerFilterHtml =
                    '<div class="game-provider-bar" role="tablist" aria-label="Simulation Provider Filter">' +
                    '<span class="game-topic-label"><i class="fa-solid fa-layer-group"></i> Providers:</span>' +
                    '<div class="game-provider-pills">' +
                    '<button type="button" class="game-provider-pill ' + (activeFilter === 'all' ? 'active' : '') + '" data-filter="all">' +
                    'All Providers <span class="game-count-chip">' + allGames.length + '</span>' +
                    '</button>' +
                    '<button type="button" class="game-provider-pill ' + (activeFilter === 'existing' ? 'active' : '') + '" data-filter="existing">' +
                    '<i class="fa-solid fa-atom"></i> Existing / PhET <span class="game-count-chip">' + existingOnly.length + '</span>' +
                    '</button>' +
                    '<button type="button" class="game-provider-pill vascak ' + (activeFilter === 'vascak' ? 'active' : '') + '" data-filter="vascak">' +
                    '<i class="fa-solid fa-flask"></i> Vaščák Physics at School <span class="game-count-chip">' + vascakOnly.length + '</span>' +
                    '</button>' +
                    '</div>' +
                    '</div>';
            }

            var topicsSelectorHtml = '';
            if (visibleGames.length > 1) {
                topicsSelectorHtml =
                    '<div class="game-topic-selector">' +
                    '<span class="game-topic-label"><i class="fa-solid fa-list-check"></i> Select Simulation:</span>' +
                    '<div class="game-topic-pills">' +
                    visibleGames.map(function (g, idx) {
                        var badgeLabel = g.provider === 'vascak'
                            ? 'Vaščák'
                            : (String(g.providerLabel || '').indexOf('PhET') !== -1 ? 'PhET' : 'Interactive');
                        var badgeClass = g.provider === 'vascak' ? 'vascak' : 'existing';
                        return (
                            '<button type="button" class="game-topic-pill ' + (idx === selectedIndex ? 'active' : '') + '" data-index="' + idx + '">' +
                            '<span class="game-provider-tag ' + badgeClass + '">' + escapeHtml(badgeLabel) + '</span>' +
                            '<span>' + escapeHtml(g.title || g.topic) + '</span>' +
                            '</button>'
                        );
                    }).join('') +
                    '</div>' +
                    '</div>';
            }

            var metadataHtml = '';
            if (isVascak || currentGame.description || currentGame.objective) {
                var chapterDisplay = currentGame.chapter && currentGame.curriculumTopic
                    ? (currentGame.chapter + ' — ' + currentGame.curriculumTopic)
                    : (currentGame.chapter || currentGame.topic);
                metadataHtml =
                    '<div class="game-sim-info-card ' + (isVascak ? 'is-vascak' : 'is-existing') + '">' +
                    '<div class="game-sim-info-top">' +
                    '<div class="game-sim-title-group">' +
                    '<span class="game-provider-badge ' + (isVascak ? 'vascak' : 'existing') + '">' +
                    '<i class="fa-solid ' + (isVascak ? 'fa-flask' : 'fa-atom') + '"></i> ' + escapeHtml(currentGame.providerLabel) +
                    '</span>' +
                    '<h3>' + escapeHtml(currentGame.title || currentGame.topic) + '</h3>' +
                    '</div>' +
                    '<div class="game-sim-chapter-chip"><i class="fa-solid fa-book-open"></i> ' + escapeHtml(chapterDisplay) + '</div>' +
                    '</div>' +
                    (currentGame.description
                        ? '<div class="game-meta-row"><strong><i class="fa-solid fa-circle-play"></i> Experiment Description:</strong> <span>' + escapeHtml(currentGame.description) + '</span></div>'
                        : '') +
                    (currentGame.objective
                        ? '<div class="game-meta-row"><strong><i class="fa-solid fa-bullseye"></i> Learning Objective:</strong> <span>' + escapeHtml(currentGame.objective) + '</span></div>'
                        : '') +
                    '<div class="game-meta-row game-meta-source">' +
                    '<strong><i class="fa-solid fa-link"></i> Original Simulation Source:</strong> ' +
                    '<a href="' + escapeHtml(currentGame.sourceUrl || currentGame.url) + '" target="_blank" rel="noopener noreferrer" class="game-source-link">' +
                    escapeHtml(isVascak ? 'Vaščák Physics at School (vascak.cz)' : (currentGame.sourceUrl || currentGame.url)) +
                    ' <i class="fa-solid fa-arrow-up-right-from-square"></i></a>' +
                    '</div>' +
                    '</div>';
            }

            container.innerHTML =
                '<div class="game-header">' +
                '<h2><i class="fa-solid fa-gamepad"></i> ' + escapeHtml(lesson.title || 'Interactive Simulation') + '</h2>' +
                '<div class="game-current-topic">' +
                '<i class="fa-solid fa-puzzle-piece"></i> Active Simulation: <span>' + escapeHtml(currentGame.title || currentGame.topic) + '</span> ' +
                '<span class="game-provider-inline-tag ' + (isVascak ? 'vascak' : 'existing') + '">' + escapeHtml(currentGame.providerLabel) + '</span>' +
                '</div>' +
                '<p>Explore the interactive simulation below or switch between available providers for this topic.</p>' +
                '</div>' +
                providerFilterHtml +
                topicsSelectorHtml +
                metadataHtml +
                '<div class="game-actions">' +
                '<a href="' + escapeHtml(currentGame.url) + '" target="_blank" rel="noopener noreferrer" class="game-btn primary">' +
                '<i class="fa-solid fa-arrow-up-right-from-square"></i> Open Simulation ("' + escapeHtml(currentGame.title || currentGame.topic) + '") in New Tab' +
                '</a>' +
                '<button type="button" class="game-btn secondary js-game-fullscreen">' +
                '<i class="fa-solid fa-expand"></i> Fullscreen View' +
                '</button>' +
                '</div>' +
                '<div class="game-embed-wrapper">' +
                '<iframe src="' + escapeHtml(currentGame.url) + '" class="game-preview" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="' + escapeHtml(currentGame.title || currentGame.topic) + ' Simulation"></iframe>' +
                '<div class="game-embed-notice">' +
                '<i class="fa-solid fa-circle-info"></i> If this simulation does not display inside the embedded frame on your network or device, use <strong>"Open Simulation in New Tab"</strong> above to launch the full interactive experiment directly.' +
                '</div>' +
                '</div>';

            container.querySelectorAll('.game-provider-pill').forEach(function (btn) {
                btn.addEventListener('click', function () {
                    var nextFilter = btn.getAttribute('data-filter') || 'all';
                    if (nextFilter !== activeFilter) {
                        activeFilter = nextFilter;
                        selectedIndex = 0;
                        draw();
                    }
                });
            });

            container.querySelectorAll('.game-topic-pill').forEach(function (btn) {
                btn.addEventListener('click', function () {
                    var idx = parseInt(btn.getAttribute('data-index'), 10);
                    if (!isNaN(idx) && idx !== selectedIndex) {
                        selectedIndex = idx;
                        draw();
                    }
                });
            });

            var fsBtn = container.querySelector('.js-game-fullscreen');
            if (fsBtn) {
                fsBtn.addEventListener('click', function () {
                    var wrapper = container.querySelector('.game-embed-wrapper');
                    var frame = container.querySelector('.game-preview');
                    if (!requestFrameFullscreen(wrapper, frame)) {
                        window.open(currentGame.url, '_blank', 'noopener,noreferrer');
                    }
                });
            }
        }

        draw();
    }

    global.WISVascakSimulations = {
        VASCAK_SOURCE: VASCAK_SOURCE,
        LESSON_ID_ALIASES: LESSON_ID_ALIASES,
        VASCAK_SIMULATIONS_BY_LESSON: VASCAK_SIMULATIONS_BY_LESSON,
        resolveLessonId: resolveLessonId,
        getVascakSimulations: getVascakSimulations,
        getMergedGames: getMergedGames,
        renderGameSection: renderGameSection
    };
})(window);
