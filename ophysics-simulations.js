/* ==========================================================================
   oPhysics Interactive Simulation Provider Registry (Grades 7 - 12)
   Keeps all oPhysics entries strictly separate from existing games.json,
   physics-data.js, and vascak-simulations.js records, merging non-destructively.
   Original Source: https://ophysics.com/
   ========================================================================== */
(function (global) {
    'use strict';

    var OPHYSICS_BASE = 'https://ophysics.com/';

    function oSim(page, categoryPage, title, chapter, topic, description, objective) {
        return {
            provider: 'ophysics',
            providerLabel: 'oPhysics',
            slug: page.replace(/\.html$/i, ''),
            title: title,
            chapter: chapter,
            topic: title,
            curriculumTopic: topic,
            description: description,
            objective: objective,
            url: OPHYSICS_BASE + page,
            sourceUrl: OPHYSICS_BASE + categoryPage
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

    var OPHYSICS_SIMULATIONS_BY_LESSON = {
        /* ==================== GRADE 7 ==================== */
        'g7-l2': [
            oSim(
                'em1.html',
                'em.html',
                "Coulomb's Law with Two Charged Objects",
                'Grade 7 • Electricity',
                'Electric Charge',
                'Move two charged objects closer or farther apart and change their charges to inspect attraction and repulsion arrows.',
                'Observe how opposite charges attract, like charges repel, and electrostatic force grows weaker with distance.'
            ),
            oSim(
                'em4.html',
                'em.html',
                'Electric Field & Potential',
                'Grade 7 • Electricity',
                'Electric Charge',
                'Arrange positive and negative charges on a grid and visualize the electric field map around them.',
                'Describe the invisible electric influence created around stationary positive and negative charges.'
            )
        ],
        'g7-l3': [
            oSim(
                'fl1.html',
                'fl.html',
                'Buoyancy',
                'Grade 7 • Mechanics & Fluids',
                'Pressure of Rigid Object',
                'Adjust object density and surrounding fluid density to test whether a submerged block sinks, hovers, or floats.',
                'Compare object density against liquid density and observe fluid support forces acting on solids.'
            ),
            oSim(
                'fl5.html',
                'fl.html',
                'Density Lab Using Buoyancy',
                'Grade 7 • Mechanics & Fluids',
                'Pressure of Rigid Object',
                'Submerge sample blocks in a liquid of known density and inspect submerged fraction and displaced fluid.',
                'Determine unknown material density conceptually from floating equilibrium in a liquid.'
            )
        ],

        /* ==================== GRADE 8 ==================== */
        'g8-l1': [
            oSim(
                'k6.html',
                'k.html',
                'Uniform Acceleration in One Dimension',
                'Grade 8 • Chapter 1: Kinematics',
                'Speed, Velocity & Acceleration',
                'Set initial position, velocity, and acceleration for a car along a straight road and watch its motion unfold.',
                'Distinguish constant velocity from steady acceleration during straight-line motion.'
            ),
            oSim(
                'k7.html',
                'k.html',
                'Kinematics in One Dimension: Two Object System',
                'Grade 8 • Chapter 1: Kinematics',
                'Speed, Velocity & Acceleration',
                'Run two cars side by side with independent starting positions, speeds, and accelerations.',
                'Compare relative speed and overtake positions between two objects moving in 1D.'
            )
        ],
        'g8-l2': [
            oSim(
                'k4.html',
                'k.html',
                'Uniform Acceleration in One Dimension: Motion Graphs',
                'Grade 8 • Chapter 1: Kinematics',
                'Graphs of Equations',
                'Adjust initial position, velocity, and acceleration to inspect synchronized x-t, v-t, and a-t graphs.',
                'Connect motion parameters directly to straight and curved slopes on kinematics graphs.'
            ),
            oSim(
                'k4b.html',
                'k.html',
                'Position, Velocity, and Acceleration vs. Time Graphs',
                'Grade 8 • Chapter 1: Kinematics',
                'Graphs of Equations',
                'Drag points directly on a velocity-time graph and observe how position-time and acceleration-time curves update.',
                'Interpret positive/negative slopes and graph shapes across x-t, v-t, and a-t plots.'
            ),
            oSim(
                'k5a.html',
                'k.html',
                '1D Kinematics: Velocity vs. Time Graphs',
                'Grade 8 • Chapter 1: Kinematics',
                'Graphs of Equations',
                'Drag vertices and time markers on a piecewise velocity-time plot to inspect multi-stage motion.',
                'Identify constant speed, speeding up, and slowing down regions on a velocity-time graph.'
            )
        ],
        'g8-l3': [
            oSim(
                'k5.html',
                'k.html',
                'Kinematics Graphs: Adjust the Acceleration',
                'Grade 8 • Chapter 1: Kinematics',
                'Free Falling Bodies',
                'Set uniform downward acceleration over time intervals and trace resulting velocity and vertical displacement.',
                'Model constant gravitational acceleration g and read velocity increase over time.'
            )
        ],
        'g8-l4': [
            oSim(
                'e1.html',
                'e.html',
                'Conservation of Mechanical Energy: Mass on a Vertical Spring',
                'Grade 8 • Chapter 2: Forces',
                'Weight & Stretching',
                'Hang an adjustable mass on a vertical spring and compare equilibrium stretch with spring oscillation.',
                'Relate downward weight to upward spring restoring force during vertical stretching.'
            )
        ],
        'g8-l5': [
            oSim(
                'k1.html',
                'k.html',
                'Vector Addition',
                'Grade 8 • Chapter 2: Forces',
                'Adding Forces & Vectors',
                'Combine two vectors interactively using tip-to-tail triangle or parallelogram construction.',
                'Find the resultant of two forces acting at an angle graphically.'
            ),
            oSim(
                'k3.html',
                'k.html',
                'Vector Components',
                'Grade 8 • Chapter 2: Forces',
                'Adding Forces & Vectors',
                'Drag any vector tip and inspect its horizontal and vertical component projections.',
                'Break a slanted vector into perpendicular horizontal and vertical components.'
            )
        ],
        'g8-l6': [
            oSim(
                'f1.html',
                'f.html',
                'Friction: Pulling a Box on a Horizontal Surface',
                'Grade 8 • Chapter 2: Forces',
                'Force & Acceleration',
                'Pull a crate horizontally while varying mass, pulling force, and static/kinetic friction coefficients.',
                'Observe how net force (pull minus friction) governs whether a block stays still or accelerates.'
            ),
            oSim(
                'f3.html',
                'f.html',
                "Atwood's Machine / Atwood's Incline",
                'Grade 8 • Chapter 2: Forces',
                'Force & Acceleration',
                'Adjust two pulley-connected masses and track system acceleration with Run/Pause/Reset controls.',
                'See how net unbalanced weight accelerates the combined mass of a two-body system.'
            )
        ],
        'g8-l7': [
            oSim(
                'e1.html',
                'e.html',
                'Conservation of Mechanical Energy: Mass on a Vertical Spring',
                'Grade 8 • Chapter 3: Work & Energy',
                'Energy, Work & Power',
                'Monitor live kinetic, gravitational, and elastic energy transfers as a suspended mass oscillates.',
                'Explain energy transfer into mechanical kinetic and potential forms.'
            )
        ],
        'g8-l8': [
            oSim(
                'e1.html',
                'e.html',
                'Conservation of Mechanical Energy: Mass on a Vertical Spring',
                'Grade 8 • Chapter 3: Work & Energy',
                'Kinetic & Potential Energy',
                'Track real-time bar charts of kinetic, gravitational potential, and elastic potential energy.',
                'Verify that total mechanical energy remains conserved as potential and kinetic energy trade off.'
            ),
            oSim(
                'f3a.html',
                'f.html',
                'The Pendulum',
                'Grade 8 • Chapter 3: Work & Energy',
                'Kinetic & Potential Energy',
                'Adjust pendulum length, starting angle, and gravity while inspecting live energy, velocity, and forces.',
                'Identify points of maximum potential energy and maximum kinetic energy during a swing.'
            )
        ],
        'g8-l9': [
            oSim(
                'fl1.html',
                'fl.html',
                'Buoyancy',
                'Grade 8 • Chapter 4: Fluid Pressure',
                'Pressure & Liquid Pressure',
                'Modify fluid density, block density, and viscosity to explore upward buoyant support force.',
                'Connect fluid density and pressure difference with depth to buoyant lifting force.'
            ),
            oSim(
                'fl4.html',
                'fl.html',
                'Fluid Density U-Tube Lab',
                'Grade 8 • Chapter 4: Fluid Pressure',
                'Pressure & Liquid Pressure',
                'Compare column heights of two immiscible liquids resting inside an open U-shaped tube.',
                'Use balanced hydrostatic pressure (ρ1gh1 = ρ2gh2) to find an unknown liquid density.'
            )
        ],
        'g8-l12': [
            oSim(
                'em4a.html',
                'em.html',
                'Electric Circuit with Four Identical Light Bulbs',
                'Grade 8 • Chapter 6: Electricity',
                'DC Circuits',
                'Toggle three switches in a combination four-bulb circuit while checking bulb brightness, current, and voltage.',
                'Compare how open and closed switches alter series and parallel DC current paths.'
            ),
            oSim(
                't1.html',
                't.html',
                'Basic Electric Circuit Drawing Tools',
                'Grade 8 • Chapter 6: Electricity',
                'DC Circuits',
                'Place and connect standard circuit symbols (batteries, bulbs, switches, resistors) into neat schematics.',
                'Identify and draw standard electrical circuit symbols for DC loops.'
            )
        ],
        'g8-l13': [
            oSim(
                'em4a.html',
                'em.html',
                'Electric Circuit with Four Identical Light Bulbs',
                'Grade 8 • Chapter 6: Electricity',
                'Electrical Power & Domestic Safety',
                'Inspect bulb brightness, voltage drops, and branch currents when multiple bulbs share a circuit.',
                'Relate electric power output (brightness) to voltage and current across series and parallel loads.'
            )
        ],
        'g8-l14': [
            oSim(
                'w0.html',
                'w.html',
                'Simple Harmonic Motion, Circular Motion, and Transverse Waves',
                'Grade 8 • Chapter 7: Waves',
                'General Properties of Waves',
                'Visualize transverse wave crests and troughs emerging from synchronized particle oscillation.',
                'Distinguish particle vibration direction from transverse wave propagation.'
            ),
            oSim(
                'w5.html',
                'w.html',
                'Longitudinal Waves',
                'Grade 8 • Chapter 7: Waves',
                'General Properties of Waves',
                'Animate compressions and rarefactions traveling through a medium in longitudinal motion.',
                'Contrast longitudinal particle oscillation with transverse wave motion.'
            ),
            oSim(
                'w13.html',
                'w.html',
                'Surface Waves',
                'Grade 8 • Chapter 7: Waves',
                'General Properties of Waves',
                'Adjust amplitude, wavelength, and wave speed on a water-surface wave model.',
                'Identify wavelength, amplitude, and wave speed visually on surface waves.'
            ),
            oSim(
                'waves1.html',
                'w.html',
                'Waves Tutorial',
                'Grade 8 • Chapter 7: Waves',
                'General Properties of Waves',
                'Interactive step-by-step tutorial introducing mechanical wave properties, wavelength, and frequency.',
                'Review fundamental wave definitions using v = fλ.'
            )
        ],

        /* ==================== GRADE 9 ==================== */
        'g9-l1': [
            oSim(
                'r11.html',
                'r.html',
                'Stability, Equilibrium, and Center of Mass',
                'Grade 9 • Chapter 1: Moments & Equilibrium',
                'Turning Effect of Force',
                'Tilt shapes and inspect when center of mass stays over the base of support versus tipping over.',
                'Explain rotational equilibrium and tipping stability using center of mass and turning moments.'
            ),
            oSim(
                'r6.html',
                'r.html',
                'Equilibrium Problem: Bar Supported by Cable',
                'Grade 9 • Chapter 1: Moments & Equilibrium',
                'Turning Effect of Force',
                'Vary beam load position and cable angle while examining free-body diagrams and torque balance.',
                'Apply clockwise and counter-clockwise moment equilibrium (Στ = 0) to static beams.'
            )
        ],
        'g9-l2': [
            oSim(
                'f2.html',
                'f.html',
                'Static and Kinetic Friction on an Inclined Plane',
                'Grade 9 • Chapter 2: Simple Machines',
                'Simple Machines',
                'Vary ramp angle and friction coefficients to inspect force balance along an inclined plane.',
                'Analyze forces required to hold or slide loads on an inclined plane simple machine.'
            ),
            oSim(
                'f3.html',
                'f.html',
                "Atwood's Machine / Atwood's Incline",
                'Grade 9 • Chapter 2: Simple Machines',
                'Simple Machines',
                'Observe string tension and load motion across an ideal frictionless pulley system.',
                'Understand how a pulley redirects tension forces between connected masses.'
            )
        ],
        'g9-l3': [
            oSim(
                'em4a.html',
                'em.html',
                'Electric Circuit with Four Identical Light Bulbs',
                'Grade 9 • Chapter 3: Electricity',
                'Electricity',
                'Test series, parallel, and mixed switch configurations with optional voltage and current probes.',
                'Predict voltage sharing, branch current splits, and load brightness in DC circuits.'
            ),
            oSim(
                't1.html',
                't.html',
                'Basic Electric Circuit Drawing Tools',
                'Grade 9 • Chapter 3: Electricity',
                'Electricity',
                'Construct circuit diagrams using interactive electrical symbols for sources, switches, and resistors.',
                'Translate physical DC circuit setups into standard schematic diagrams.'
            )
        ],
        'g9-l4': [
            oSim(
                'em10.html',
                'em.html',
                'DC Motor',
                'Grade 9 • Chapter 4: Magnetism',
                'Magnetic Field',
                'Adjust applied voltage, magnetic field strength, and loop turns to watch a DC motor coil spin.',
                'Explain how magnetic force on current-carrying wires produces continuous motor rotation.'
            ),
            oSim(
                'em11.html',
                'em.html',
                'Electromagnetic Induction',
                'Grade 9 • Chapter 4: Magnetism',
                'Magnetic Field',
                'Move a bar magnet in and out of a wire coil to observe induced current direction and magnitude.',
                'Discover how relative motion between a magnet and coil induces an electric current.'
            )
        ],
        'g9-l5': [
            oSim(
                'l7.html',
                'l.html',
                'Reflection and Refraction',
                'Grade 9 • Chapter 5: Optics',
                'Light',
                'Change incident ray angle and two media refractive indices to inspect reflected and refracted rays.',
                'Observe law of reflection (θi = θr), light bending at boundaries, and critical internal reflection.'
            ),
            oSim(
                'l9.html',
                'l.html',
                'Plane Mirrors',
                'Grade 9 • Chapter 5: Optics',
                'Light',
                'Drag an object arrow in front of a flat mirror and trace how virtual image rays reach the eye.',
                'Verify image distance, uprightness, and virtual image symmetry in plane mirrors.'
            ),
            oSim(
                'l10.html',
                'l.html',
                'Concave and Convex Mirrors',
                'Grade 9 • Chapter 5: Optics',
                'Light',
                'Move object arrow and mirror focal length to compare real inverted and virtual upright curved-mirror images.',
                'Trace principal rays to locate images in converging concave and diverging convex mirrors.'
            ),
            oSim(
                'l12.html',
                'l.html',
                'Concave and Convex Lenses',
                'Grade 9 • Chapter 5: Optics',
                'Light',
                'Move an object past a thin converging or diverging lens and adjust focal length interactively.',
                'Determine whether converging and diverging lenses produce real or virtual, magnified or diminished images.'
            ),
            oSim(
                'l20.html',
                'l.html',
                'Image Formation with Convex Lenses',
                'Grade 9 • Chapter 5: Optics',
                'Light',
                'Inspect full-cone ray bundles forming focused optical images through a convex lens with zoom controls.',
                'Observe how multiple rays from one object point reconverge to form a sharp image.'
            )
        ],

        /* ==================== GRADE 10 ==================== */
        'g10-l1': [
            oSim(
                'k4.html',
                'k.html',
                'Uniform Acceleration in One Dimension: Motion Graphs',
                'Grade 10 • Chapter 1: Mechanics',
                'Rectilinear Motion & Kinematics',
                'Set initial position, velocity, and constant acceleration while reading synchronized x-t, v-t, and a-t graphs.',
                'Relate kinematic equations x(t) and v(t) directly to motion graph curves and slopes.'
            ),
            oSim(
                'k5.html',
                'k.html',
                'Kinematics Graphs: Adjust the Acceleration',
                'Grade 10 • Chapter 1: Mechanics',
                'Rectilinear Motion & Kinematics',
                'Control acceleration piecewise over time intervals and trace resulting velocity and displacement curves.',
                'Apply area under a-t and v-t graphs to solve non-zero acceleration problems.'
            ),
            oSim(
                'k6.html',
                'k.html',
                'Uniform Acceleration in One Dimension',
                'Grade 10 • Chapter 1: Mechanics',
                'Rectilinear Motion & Kinematics',
                'Animate a car under adjustable constant acceleration with real-time position and velocity vectors.',
                'Verify SUVAT rectilinear kinematics predictions against live motion simulation.'
            ),
            oSim(
                'k7.html',
                'k.html',
                'Kinematics in One Dimension: Two Object System',
                'Grade 10 • Chapter 1: Mechanics',
                'Rectilinear Motion & Kinematics',
                'Set independent kinematics parameters for two cars and find meeting times and positions.',
                'Solve two-body catch-up and rendezvous kinematics equations.'
            )
        ],
        'g10-l2': [
            oSim(
                'f1.html',
                'f.html',
                'Friction: Pulling a Box on a Horizontal Surface',
                'Grade 10 • Chapter 1: Mechanics',
                "Dynamics: Newton's Laws",
                'Explore applied pull, normal force, static friction threshold, kinetic friction, and acceleration.',
                'Apply Fnet = ma horizontally while distinguishing static vs. kinetic friction regimes.'
            ),
            oSim(
                'f2.html',
                'f.html',
                'Static and Kinetic Friction on an Inclined Plane',
                'Grade 10 • Chapter 1: Mechanics',
                "Dynamics: Newton's Laws",
                'Adjust ramp tilt angle, mass, and μs/μk to test slipping threshold and down-slope acceleration.',
                'Resolve gravity along an incline (mg sin θ, mg cos θ) with friction.'
            ),
            oSim(
                'f3.html',
                'f.html',
                "Atwood's Machine / Atwood's Incline",
                'Grade 10 • Chapter 1: Mechanics',
                "Dynamics: Newton's Laws",
                'Analyze coupled acceleration and rope tension in a classic two-mass Atwood pulley machine.',
                "Set up simultaneous Newton's Second Law free-body equations for connected masses."
            )
        ],
        'g10-l3': [
            oSim(
                'e1.html',
                'e.html',
                'Conservation of Mechanical Energy: Mass on a Vertical Spring',
                'Grade 10 • Chapter 1: Mechanics',
                'Work, Kinetic Energy & Power',
                'Track live energy bars (KE, GPE, EPE) during vertical spring motion.',
                'Apply mechanical work and energy conservation across gravitational and elastic fields.'
            ),
            oSim(
                'e2.html',
                'e.html',
                'Momentum & Energy: Elastic and Inelastic Collisions',
                'Grade 10 • Chapter 1: Mechanics',
                'Work, Kinetic Energy & Power',
                'Compare total kinetic energy before and after elastic versus inelastic collisions.',
                'Determine when kinetic energy is conserved versus converted into internal energy.'
            )
        ],
        'g10-l4': [
            oSim(
                'fl1.html',
                'fl.html',
                'Buoyancy',
                'Grade 10 • Chapter 1: Mechanics',
                'Fluids & Atmospheric Pressure',
                'Vary fluid and block densities plus viscosity to quantify upward buoyant force.',
                "Apply Archimedes' principle Fb = ρ·Vsub·g to floating and submerged solids."
            ),
            oSim(
                'fl4.html',
                'fl.html',
                'Fluid Density U-Tube Lab',
                'Grade 10 • Chapter 1: Mechanics',
                'Fluids & Atmospheric Pressure',
                'Measure fluid column heights in an open U-tube manometer filled with two immiscible liquids.',
                'Determine unknown fluid density using Pascal and hydrostatic equilibrium P1 = P2.'
            ),
            oSim(
                'fl5.html',
                'fl.html',
                'Density Lab Using Buoyancy',
                'Grade 10 • Chapter 1: Mechanics',
                'Fluids & Atmospheric Pressure',
                'Use apparent weight loss and submerged volume in a known liquid to calculate solid density.',
                'Solve quantitative fluid statics and buoyancy density problems.'
            )
        ],
        'g10-ch3-l1': [
            oSim(
                'em1.html',
                'em.html',
                "Coulomb's Law with Two Charged Objects",
                'Grade 10 • Chapter 3: Electricity & Magnetism',
                "Electrostatics & Coulomb's Law",
                'Adjust magnitudes and positions of two charges and read the inverse-square Coulomb force.',
                "Verify F = k|q1q2|/r² quantitatively for point-charge pairs."
            ),
            oSim(
                'em1a.html',
                'em.html',
                'Coulomb Forces on Three Charged Objects',
                'Grade 10 • Chapter 3: Electricity & Magnetism',
                "Electrostatics & Coulomb's Law",
                'Place three charges in 2D and inspect individual Coulomb vectors alongside the net resultant force.',
                'Apply vector superposition of electrostatic forces for three-charge systems.'
            ),
            oSim(
                'em4.html',
                'em.html',
                'Electric Field & Potential',
                'Grade 10 • Chapter 3: Electricity & Magnetism',
                "Electrostatics & Coulomb's Law",
                'Map electric field arrows and electric potential around custom charge arrangements.',
                'Relate electric field direction and magnitude to local charge distribution.'
            )
        ],
        'g10-ch3-l2': [
            oSim(
                'em4a.html',
                'em.html',
                'Electric Circuit with Four Identical Light Bulbs',
                'Grade 10 • Chapter 3: Electricity & Magnetism',
                'DC Circuits & Magnetic Fields',
                'Analyze voltage and current distribution across four identical bulbs controlled by three switches.',
                'Apply Ohm’s law and series/parallel circuit rules to multi-branch DC networks.'
            ),
            oSim(
                'em10.html',
                'em.html',
                'DC Motor',
                'Grade 10 • Chapter 3: Electricity & Magnetism',
                'DC Circuits & Magnetic Fields',
                'Change voltage, magnetic field, and coil turns to observe torque and rotation speed in a DC motor.',
                'Explain magnetic force on a current loop and commutator switching in DC motors.'
            )
        ],
        'g10-ch3-l3': [
            oSim(
                'em11.html',
                'em.html',
                'Electromagnetic Induction',
                'Grade 10 • Chapter 3: Electricity & Magnetism',
                'AC & Transformer Systems',
                'Sweep a magnet near a coil at varying speeds to observe alternating induced current direction.',
                "Relate changing magnetic flux to induced EMF in AC generators and transformers."
            )
        ],
        'g10-ch4-l1': [
            oSim(
                'l9.html',
                'l.html',
                'Plane Mirrors',
                'Grade 10 • Chapter 4: Geometric Optics',
                'Light Propagation & Reflection',
                'Move an object arrow in front of a plane mirror and examine reflected rays and virtual image coordinates.',
                'Apply the law of reflection to construct virtual images in plane mirrors.'
            ),
            oSim(
                'l10.html',
                'l.html',
                'Concave and Convex Mirrors',
                'Grade 10 • Chapter 4: Geometric Optics',
                'Light Propagation & Reflection',
                'Drag object position relative to mirror focal point F and center C to test image magnification and sign.',
                'Use principal rays and the mirror equation 1/f = 1/do + 1/di.'
            ),
            oSim(
                'l11.html',
                'l.html',
                'iPad Spherical Mirror Simulation',
                'Grade 10 • Chapter 4: Geometric Optics',
                'Light Propagation & Reflection',
                'Touch-friendly concave and convex spherical mirror ray-tracing workspace.',
                'Practice spherical mirror ray diagrams smoothly on tablet, phone, or desktop.'
            )
        ],
        'g10-ch4-l2': [
            oSim(
                'l7.html',
                'l.html',
                'Reflection and Refraction',
                'Grade 10 • Chapter 4: Geometric Optics',
                "Refraction & Snell's Law",
                'Adjust boundary refractive indices n1, n2 and incident angle to measure refracted ray and critical angle.',
                "Apply Snell's law n1·sin(θ1) = n2·sin(θ2) and verify total internal reflection thresholds."
            ),
            oSim(
                'l12.html',
                'l.html',
                'Concave and Convex Lenses',
                'Grade 10 • Chapter 4: Geometric Optics',
                "Refraction & Snell's Law",
                'Explore thin converging and diverging lens image formation with movable object and focus sliders.',
                'Predict image position, magnification, and real/virtual nature via 1/f = 1/do + 1/di.'
            ),
            oSim(
                'l14.html',
                'l.html',
                'Lens Refraction and Spherical Aberration',
                'Grade 10 • Chapter 4: Geometric Optics',
                "Refraction & Snell's Law",
                "Apply exact Snell's law refraction at both curved lens surfaces to observe outer-ray spherical aberration.",
                'Contrast ideal thin-lens focal point approximation with physical thick-lens refraction.'
            ),
            oSim(
                'l16.html',
                'l.html',
                'Optics of the Human Eye',
                'Grade 10 • Chapter 4: Geometric Optics',
                "Refraction & Snell's Law",
                'Adjust eye lens focal power and add corrective converging/diverging spectacles for nearsighted/farsighted vision.',
                'Explain myopia, hyperopia, and optical lens power correction.'
            )
        ],
        'g10-ch4-l3': [
            oSim(
                'l8.html',
                'l.html',
                'Dispersion of Light',
                'Grade 10 • Chapter 4: Geometric Optics',
                'Double Plane, Slab, & Prism',
                'Send white light through a triangular prism while varying surrounding and glass refractive indices.',
                'Explain chromatic dispersion and angular deviation across a prism due to wavelength-dependent index n.'
            ),
            oSim(
                'l17.html',
                'l.html',
                'Rainbow Formation',
                'Grade 10 • Chapter 4: Geometric Optics',
                'Double Plane, Slab, & Prism',
                'Trace sunlight refracting into a spherical water droplet, reflecting internally, and dispersing outward.',
                'Connect double refraction plus internal reflection and dispersion to primary rainbow formation.'
            ),
            oSim(
                'l19.html',
                'l.html',
                'AP Physics 2 Refraction Problem',
                'Grade 10 • Chapter 4: Geometric Optics',
                'Double Plane, Slab, & Prism',
                'Scale ray-tracing lab testing refraction through stacked media interfaces and slabs.',
                'Solve multi-boundary Snell refraction and lateral shift challenges.'
            )
        ],

        /* ==================== GRADE 11 ==================== */
        'g11-l1': [
            oSim(
                'k1.html',
                'k.html',
                'Vector Addition',
                'Grade 11 • Chapter 1: Mechanics',
                'Kinematics in 2D & Projectile Motion',
                'Add two 2D vectors using triangle and parallelogram constructions with live magnitude readouts.',
                'Compute resultant 2D displacement and velocity vectors geometrically and analytically.'
            ),
            oSim(
                'k2.html',
                'k.html',
                'Vector Addition and Subtraction',
                'Grade 11 • Chapter 1: Mechanics',
                'Kinematics in 2D & Projectile Motion',
                'Switch between vector addition A + B and subtraction A − B to inspect velocity change vectors Δv.',
                'Construct vector differences A − B needed for 2D relative motion and acceleration.'
            ),
            oSim(
                'k3.html',
                'k.html',
                'Vector Components',
                'Grade 11 • Chapter 1: Mechanics',
                'Kinematics in 2D & Projectile Motion',
                'Resolve any angled 2D vector into horizontal vx and vertical vy components.',
                'Apply vx = v·cos θ and vy = v·sin θ to decompose 2D motion.'
            ),
            oSim(
                'k8.html',
                'k.html',
                'Projectile Motion',
                'Grade 11 • Chapter 1: Mechanics',
                'Kinematics in 2D & Projectile Motion',
                'Change launch speed, angle, initial height, and gravity to study parabolic projectile trajectories.',
                'Analyze range, peak height, time of flight, and velocity components in 2D projectile motion.'
            ),
            oSim(
                'k9.html',
                'k.html',
                'Exploring Projectile Motion Concepts',
                'Grade 11 • Chapter 1: Mechanics',
                'Kinematics in 2D & Projectile Motion',
                'Compare four simultaneous projectiles launched at 20°, 30°, 45°, and 60° over level ground.',
                'Demonstrate complementary-angle equal range (30° vs 60°) and 45° maximum level range.'
            ),
            oSim(
                'k10.html',
                'k.html',
                'Projectile Motion: Tranquilize the Monkey',
                'Grade 11 • Chapter 1: Mechanics',
                'Kinematics in 2D & Projectile Motion',
                'Aim straight at a falling target released the instant a projectile fires under gravity.',
                'Prove that equal vertical gravitational acceleration causes projectile and dropped target to meet.'
            ),
            oSim(
                'k11.html',
                'k.html',
                'Relative Velocity: Boat Crossing a River',
                'Grade 11 • Chapter 1: Mechanics',
                'Kinematics in 2D & Projectile Motion',
                'Adjust river current speed, boat speed, and heading angle to explore downstream drift and crossing time.',
                'Solve 2D relative velocity vector addition v_net = v_boat + v_river.'
            )
        ],
        'g11-l2': [
            oSim(
                'f4.html',
                'f.html',
                'The Conical Pendulum',
                'Grade 11 • Chapter 1: Mechanics',
                'Accelerated Frames & Rotational Dynamics',
                'Adjust circle radius and rotation speed for a suspended bob revolving in uniform horizontal circular motion.',
                'Resolve tension into vertical weight balance and horizontal centripetal force mv²/r.'
            ),
            oSim(
                'f5.html',
                'f.html',
                'Conical Pendulum: 3D',
                'Grade 11 • Chapter 1: Mechanics',
                'Accelerated Frames & Rotational Dynamics',
                'Rotate the camera perspective around a 3D conical pendulum while tuning string length and speed.',
                'Connect orbital radius, cone angle, and angular velocity ω in uniform circular dynamics.'
            ),
            oSim(
                'r1.html',
                'r.html',
                'Rotation, Sliding, Rolling, and Friction',
                'Grade 11 • Chapter 1: Mechanics',
                'Accelerated Frames & Rotational Dynamics',
                'Launch spinning or sliding disks/spheres along a surface with friction until rolling without slipping begins.',
                'Analyze static vs. kinetic friction torque linking linear speed v to angular speed ωR.'
            ),
            oSim(
                'r2.html',
                'r.html',
                'Rotation: Rolling Motion',
                'Grade 11 • Chapter 1: Mechanics',
                'Accelerated Frames & Rotational Dynamics',
                'Race selectable solid/hollow shapes rolling down an incline while tracking translational and rotational motion.',
                'Compare how shape rotational inertia coefficient c in I = cMR² affects rolling acceleration.'
            ),
            oSim(
                'r3.html',
                'r.html',
                'Moment of Inertia: Rolling and Sliding Down an Incline',
                'Grade 11 • Chapter 1: Mechanics',
                'Accelerated Frames & Rotational Dynamics',
                'Race five bodies simultaneously down an incline (frictionless block vs. ring, cylinder, shell, sphere).',
                'Rank rotational inertia I using downward incline finish order and rotational KE share.'
            ),
            oSim(
                'r4.html',
                'r.html',
                'Rotational Inertia and Torque',
                'Grade 11 • Chapter 1: Mechanics',
                'Accelerated Frames & Rotational Dynamics',
                'Apply constant torque to selectable rotors (solid disk, hoop, etc.) and measure angular acceleration α.',
                'Apply rotational dynamics law τ = I·α directly.'
            ),
            oSim(
                'r5.html',
                'r.html',
                'Rotational Inertia Lab',
                'Grade 11 • Chapter 1: Mechanics',
                'Accelerated Frames & Rotational Dynamics',
                'Test pulley rotational inertia across constant-force, single-hanging-mass, and dual-mass setups.',
                'Couple linear Newton equations with pulley torque τ = (T1 − T2)R = Iα.'
            )
        ],
        'g11-l3': [
            oSim(
                'f6.html',
                'f.html',
                "Elliptical Orbits & Kepler's 2nd Law",
                'Grade 11 • Chapter 1: Mechanics',
                'Universal Gravitation & Satellite Motion',
                'Vary planet launch speed, distance, and central star mass to sweep equal orbital areas in equal times.',
                "Explore elliptical gravitational orbits and verify Kepler's Second Law (conservation of angular momentum)."
            )
        ],
        'g11-l4': [
            oSim(
                'e2.html',
                'e.html',
                'Momentum & Energy: Elastic and Inelastic Collisions',
                'Grade 11 • Chapter 1: Mechanics',
                'Impulse, Momentum & Collisions',
                'Collide two carts with adjustable mass, velocity, and elasticity factor from 0 to 1.',
                'Solve 1D elastic and inelastic collision velocities using momentum and restitution equations.'
            ),
            oSim(
                'e2a.html',
                'e.html',
                'Momentum & Energy: Explosive Collisions',
                'Grade 11 • Chapter 1: Mechanics',
                'Impulse, Momentum & Collisions',
                'Trigger an internal explosion separating two moving carts with chosen released kinetic energy.',
                'Apply momentum conservation during recoil and internal explosive separation.'
            ),
            oSim(
                'e3.html',
                'e.html',
                'The Ballistic Pendulum',
                'Grade 11 • Chapter 1: Mechanics',
                'Impulse, Momentum & Collisions',
                'Fire a projectile into a suspended pendulum block and measure maximum swing height.',
                'Combine inelastic collision momentum conservation with post-impact mechanical energy conservation.'
            ),
            oSim(
                'e4.html',
                'e.html',
                'Ballistic Pendulum "Quiz"',
                'Grade 11 • Chapter 1: Mechanics',
                'Impulse, Momentum & Collisions',
                'Interactive ballistic pendulum challenge where bullet speed is hidden for analytical calculation.',
                'Calculate unknown projectile launch velocity from measured pendulum mass and swing rise h.'
            ),
            oSim(
                'e6.html',
                'e.html',
                'Center of Mass: Person on a Floating Raft',
                'Grade 11 • Chapter 1: Mechanics',
                'Impulse, Momentum & Collisions',
                'Walk a person along a frictionless floating raft while tracking boat recoil and system center of mass.',
                'Prove that system center of mass remains stationary under zero external horizontal impulse.'
            ),
            oSim(
                'r7.html',
                'r.html',
                'Angular Momentum Collision',
                'Grade 11 • Chapter 1: Mechanics',
                'Impulse, Momentum & Collisions',
                'Stick a clay ball onto a pivoted vertical rod and measure resulting angular swing.',
                'Apply conservation of angular momentum L = r×p = Iω in rotational collisions.'
            ),
            oSim(
                'r9.html',
                'r.html',
                'Angular Momentum: Person on Rotating Platform',
                'Grade 11 • Chapter 1: Mechanics',
                'Impulse, Momentum & Collisions',
                'Move mass inward/outward on a spinning turntable to observe angular velocity changes.',
                'Explain ice-skater spin acceleration via Li = Lf (I1ω1 = I2ω2).'
            ),
            oSim(
                'r9a.html',
                'r.html',
                'Angular Momentum: Rotating Disks',
                'Grade 11 • Chapter 1: Mechanics',
                'Impulse, Momentum & Collisions',
                'Drop one spinning coaxial disk onto another until both reach a shared angular velocity.',
                'Solve rotational inelastic coupling problems using angular momentum conservation.'
            )
        ],
        'g11-ch1-l5': [
            oSim(
                'f3a.html',
                'f.html',
                'The Pendulum',
                'Grade 11 • Chapter 1: Mechanics',
                'Energy Conservation, Pendulum & Moduli',
                'Inspect force vectors, velocity, tangential acceleration, and energy bars across swing angles.',
                'Analyze simple pendulum period dependence on length/g and mechanical energy conservation.'
            ),
            oSim(
                'e1.html',
                'e.html',
                'Conservation of Mechanical Energy: Mass on a Vertical Spring',
                'Grade 11 • Chapter 1: Mechanics',
                'Energy Conservation, Pendulum & Moduli',
                'Track KE, gravitational PE, and elastic spring PE throughout vertical SHM.',
                'Apply total mechanical energy balance E = K + Ug + Us.'
            ),
            oSim(
                'e5.html',
                'e.html',
                'Dropping a Mass on Another Oscillating Mass',
                'Grade 11 • Chapter 1: Mechanics',
                'Energy Conservation, Pendulum & Moduli',
                'Drop extra mass onto an oscillating block at equilibrium or turnaround and observe new amplitude and period.',
                'Predict how added mass changes spring period T and energy at different oscillation phases.'
            )
        ],
        'g11-ch1-l6': [
            oSim(
                'fl2.html',
                'fl.html',
                'Fluid Dynamics and the Bernoulli Equation',
                'Grade 11 • Chapter 1: Mechanics',
                'Fluid Dynamics, Continuity & Viscosity',
                'Adjust pipe diameters, heights, and flow velocity to inspect pressure gauges along a steady streamline.',
                'Apply continuity (A1v1 = A2v2) and Bernoulli equation (P + ½ρv² + ρgh = const).'
            ),
            oSim(
                'fl3.html',
                'fl.html',
                'Fluid Flow and the Torricelli Equation',
                'Grade 11 • Chapter 1: Mechanics',
                'Fluid Dynamics, Continuity & Viscosity',
                'Change hole depth in an open tank to measure horizontal water jet speed and range.',
                "Derive and apply Torricelli's theorem v = √(2gh) for fluid efflux."
            )
        ],
        'g11-ch2-l2': [
            oSim(
                'w0.html',
                'w.html',
                'Simple Harmonic Motion, Circular Motion, and Transverse Waves',
                'Grade 11 • Chapter 2: Thermal Physics & Waves',
                'Periodic Motion, Oscillations & Waves',
                'Link uniform circular reference rotation simultaneously to SHM vertical projection and traveling waves.',
                'Connect angular frequency ω and phase angle φ to sinusoidal SHM and wave motion.'
            ),
            oSim(
                'w1.html',
                'w.html',
                'Simple Harmonic Motion: Mass on a Spring',
                'Grade 11 • Chapter 2: Thermal Physics & Waves',
                'Periodic Motion, Oscillations & Waves',
                'Observe mass-spring oscillation with Run/Pause/Step controls and force/displacement tracking.',
                'Verify restoring force F = −kx and harmonic period T = 2π√(m/k).'
            ),
            oSim(
                'w1a.html',
                'w.html',
                'Oscillation Graphs Quiz',
                'Grade 11 • Chapter 2: Thermal Physics & Waves',
                'Periodic Motion, Oscillations & Waves',
                'Match SHM x-t, v-t, a-t, and F-t curves against four candidate graphs in an interactive quiz.',
                'Relate phase shifts between position, velocity, acceleration, and restoring force in SHM.'
            ),
            oSim(
                'w4.html',
                'w.html',
                'Oscillations',
                'Grade 11 • Chapter 2: Thermal Physics & Waves',
                'Periodic Motion, Oscillations & Waves',
                'Visualize circular reference projection producing clean harmonic displacement waves.',
                'Reinforce phasor representation of simple harmonic oscillation.'
            ),
            oSim(
                'w11.html',
                'w.html',
                'The Doppler Effect & Sonic Boom',
                'Grade 11 • Chapter 2: Thermal Physics & Waves',
                'Periodic Motion, Oscillations & Waves',
                'Adjust source and observer speeds relative to wave speed up to Mach cone sonic-boom formation.',
                'Calculate Doppler-shifted frequency f′ and recognize shock-wave cone conditions.'
            )
        ],
        'g11-ch3-l1': [
            oSim(
                'em1.html',
                'em.html',
                "Coulomb's Law with Two Charged Objects",
                'Grade 11 • Chapter 3: Electrostatics & Circuits',
                'Electrostatics, Fields & Capacitors',
                'Measure force vector magnitudes while dragging charges or dialing charge quantity in microcoulombs.',
                "Compute electrostatic forces quantitatively using Coulomb's inverse-square law."
            ),
            oSim(
                'em1a.html',
                'em.html',
                'Coulomb Forces on Three Charged Objects',
                'Grade 11 • Chapter 3: Electrostatics & Circuits',
                'Electrostatics, Fields & Capacitors',
                'Solve vector equilibrium and resultant force configurations across three interacting charges.',
                'Apply vector superposition of electric forces in two dimensions.'
            ),
            oSim(
                'em4.html',
                'em.html',
                'Electric Field & Potential',
                'Grade 11 • Chapter 3: Electrostatics & Circuits',
                'Electrostatics, Fields & Capacitors',
                'Inspect field arrows and scalar electric potential values around multiple point charges.',
                'Contrast vector electric field E with scalar electric potential V.'
            ),
            oSim(
                'em5.html',
                'em.html',
                'Capacitor Lab',
                'Grade 11 • Chapter 3: Electrostatics & Circuits',
                'Electrostatics, Fields & Capacitors',
                'Vary battery voltage, series resistance, plate area, and plate separation in a charging RC circuit.',
                'Calculate capacitance C = ε0·A/d, charge Q = CV, and time constant τ = RC.'
            ),
            oSim(
                'em6.html',
                'em.html',
                'Charged Particle in an Electric Field',
                'Grade 11 • Chapter 3: Electrostatics & Circuits',
                'Electrostatics, Fields & Capacitors',
                'Inject a charged particle across uniform parallel capacitor plates and trace parabolic deflection.',
                'Analyze 2D projectile-like motion of charge q in uniform electric field E.'
            ),
            oSim(
                'em9.html',
                'em.html',
                'Equipotentials & Electric Field of Two Charges',
                'Grade 11 • Chapter 3: Electrostatics & Circuits',
                'Electrostatics, Fields & Capacitors',
                'Toggle between 2D electric field / equipotential contour maps and 3D potential surfaces.',
                'Explain why electric field lines always cross equipotential surfaces perpendicularly.'
            )
        ],
        'g11-ch3-l2': [
            oSim(
                'em4a.html',
                'em.html',
                'Electric Circuit with Four Identical Light Bulbs',
                'Grade 11 • Chapter 3: Electrostatics & Circuits',
                'Electric Current, Resistance & DC Circuits',
                'Test network switching combinations and verify junction currents and loop potential differences.',
                "Apply Kirchhoff's junction and loop rules to combination DC resistor circuits."
            ),
            oSim(
                'em5.html',
                'em.html',
                'Capacitor Lab',
                'Grade 11 • Chapter 3: Electrostatics & Circuits',
                'Electric Current, Resistance & DC Circuits',
                'Inspect current decay and capacitor voltage rise across adjustable resistance R and capacitance C.',
                'Model charging current I(t) and time constant behavior in series RC DC circuits.'
            )
        ],

        /* ==================== GRADE 12 ==================== */
        'g12-l4': [
            oSim(
                'w2.html',
                'w.html',
                'Wave Pulse Interference and Superposition',
                'Grade 12 • Chapter 2: Waves & Optics',
                'Superposition & Standing Waves',
                'Adjust height and width of two approaching wave pulses to observe constructive and destructive overlap.',
                'Apply the linear superposition principle y(x,t) = y1 + y2 cleanly.'
            ),
            oSim(
                'w2a.html',
                'w.html',
                'Wave Pulse Interference and Superposition 2',
                'Grade 12 • Chapter 2: Waves & Optics',
                'Superposition & Standing Waves',
                'Display two counter-propagating strings separately above their real-time resultant sum string.',
                'Verify that pulses pass through one another unchanged after temporary superposition.'
            ),
            oSim(
                'w3.html',
                'w.html',
                'Superposition of Transverse Waves',
                'Grade 12 • Chapter 2: Waves & Optics',
                'Superposition & Standing Waves',
                'Superpose two continuous periodic transverse waves propagating through the same medium.',
                'Analyze spatial and temporal wave interference conditions.'
            ),
            oSim(
                'w4a.html',
                'w.html',
                'Oscillations (Phase-Shifted Wave Comparison)',
                'Grade 12 • Chapter 2: Waves & Optics',
                'Superposition & Standing Waves',
                'Compare two sinusoidal waves with adjustable phase difference Δφ.',
                'Connect phase difference Δφ (in-phase vs π out-of-phase) to constructive/destructive addition.'
            ),
            oSim(
                'w6.html',
                'w.html',
                'Longitudinal and Transverse Wave Basics',
                'Grade 12 • Chapter 2: Waves & Optics',
                'Superposition & Standing Waves',
                'Select harmonic modes on fixed strings, open-open pipes, and closed-open air columns.',
                'Compare fundamental frequencies and allowed harmonic series across string and pipe boundaries.'
            ),
            oSim(
                'w7.html',
                'w.html',
                'Standing Waves',
                'Grade 12 • Chapter 2: Waves & Optics',
                'Superposition & Standing Waves',
                'Explore node and antinode locations formed by counter-propagating harmonic waves.',
                'Identify stationary nodes (Δx = λ/2) and standing-wave amplitude envelopes.'
            ),
            oSim(
                'w8.html',
                'w.html',
                'Standing Waves on Strings',
                'Grade 12 • Chapter 2: Waves & Optics',
                'Superposition & Standing Waves',
                'Tune driving frequency, string linear mass density μ, and tension FT to excite string harmonics.',
                'Apply v = √(FT/μ) and fn = n·v / (2L) to vibrating strings.'
            ),
            oSim(
                'w9.html',
                'w.html',
                'Wave Pulse Reflection (Free & Fixed Ends)',
                'Grade 12 • Chapter 2: Waves & Optics',
                'Superposition & Standing Waves',
                'Toggle between fixed-end and free-end boundaries while viewing incident and reflected pulse traces.',
                'Explain π phase inversion at rigid boundaries versus non-inverted free-end reflection.'
            ),
            oSim(
                'w10.html',
                'w.html',
                'Air Column Resonance',
                'Grade 12 • Chapter 2: Waves & Optics',
                'Superposition & Standing Waves',
                'Visualize acoustic pressure/displacement standing waves inside resonant open and closed tubes.',
                'Calculate resonant wavelengths and harmonic frequencies for open and half-open pipes.'
            )
        ],
        'g12-interf': [
            oSim(
                'l3.html',
                'l.html',
                'Polarization of Light',
                'Grade 12 • Chapter 2: Waves & Optics',
                'Interference & Diffraction',
                'Rotate polarizing filters against incident wave vibration planes to inspect transmitted intensity.',
                "Explain transverse nature of light and Malus's law intensity attenuation through polarizers."
            ),
            oSim(
                'l4.html',
                'l.html',
                'Double Slit Diffraction and Interference',
                'Grade 12 • Chapter 2: Waves & Optics',
                'Interference & Diffraction',
                'Vary wavelength λ, slit separation d, and screen distance D to measure interference fringe spacing.',
                'Apply Young double-slit condition d·sin θ = kλ and fringe spacing Δy = λD/d.'
            ),
            oSim(
                'l5.html',
                'l.html',
                'Double Slit Interference',
                'Grade 12 • Chapter 2: Waves & Optics',
                'Interference & Diffraction',
                'Inspect circular Huygens wavefront overlaps, constructive nodal lines, and resulting intensity curve.',
                'Connect path-length difference δ = r2 − r1 to bright and dark fringe lines.'
            ),
            oSim(
                'l5b.html',
                'l.html',
                'Diffraction Grating Laser Lab',
                'Grade 12 • Chapter 2: Waves & Optics',
                'Interference & Diffraction',
                'Operate a 3D laser bench shining through a diffraction grating onto an observation screen.',
                'Compute diffraction grating order angles using d·sin θ = mλ.'
            ),
            oSim(
                'l6.html',
                'l.html',
                'Thin Film Interference',
                'Grade 12 • Chapter 2: Waves & Optics',
                'Interference & Diffraction',
                'Adjust refractive indices, film thickness t, and light wavelength to observe reflected wave phase shifts.',
                'Solve thin-film constructive/destructive conditions accounting for 2nt and reflection phase flips.'
            ),
            oSim(
                'w12.html',
                'w.html',
                'Surface Wave Interference in 3D',
                'Grade 12 • Chapter 2: Waves & Optics',
                'Interference & Diffraction',
                'Visualize two coherent point wave sources creating 3D constructive/destructive nodal hyperbolas.',
                'Connect 2D/3D two-source coherent wave interference directly to optical double-slit fringes.'
            )
        ],
        'g12-ch3-l1': [
            oSim(
                'em7.html',
                'em.html',
                'Charged particle in a Magnetic Field',
                'Grade 12 • Chapter 3: Electromagnetism',
                'Magnetism',
                'Vary charge sign, mass, velocity, and magnetic field B to measure cyclotron circular radius.',
                'Apply Lorentz magnetic force F = qvB and circular radius r = mv/(|q|B).'
            ),
            oSim(
                'em8.html',
                'em.html',
                'Charged Particle in a Magnetic Field 3D',
                'Grade 12 • Chapter 3: Electromagnetism',
                'Magnetism',
                'Observe helical 3D particle motion when velocity has components both parallel and perpendicular to B.',
                'Analyze 3D Lorentz trajectories including pitch and cyclotron radius.'
            ),
            oSim(
                'em10.html',
                'em.html',
                'DC Motor',
                'Grade 12 • Chapter 3: Electromagnetism',
                'Magnetism',
                'Explore magnetic torque on a multi-turn current loop rotating between stator magnet poles.',
                'Apply Laplace magnetic force and torque τ = N·I·B·A·sin θ to electric motors.'
            )
        ],
        'g12-ch3-l2': [
            oSim(
                'em11.html',
                'em.html',
                'Electromagnetic Induction',
                'Grade 12 • Chapter 3: Electromagnetism',
                'Electromagnetic Induction',
                'Move a permanent bar magnet into and out of a solenoid coil to observe induced current direction.',
                "Apply Faraday's law and Lenz's law to predict induced EMF polarity during flux change."
            )
        ],
        'g12-ch3-l3': [
            oSim(
                'em11.html',
                'em.html',
                'Electromagnetic Induction',
                'Grade 12 • Chapter 3: Electromagnetism',
                'Self Induction',
                'Observe how changing magnetic flux inside a coil induces an EMF opposing the flux change.',
                'Connect Faraday-Lenz induction to self-induced back EMF inside an inductor coil.'
            ),
            oSim(
                'em3.html',
                'em.html',
                'Electromagnetic Waves',
                'Grade 12 • Chapter 3: Electromagnetism',
                'Self Induction',
                'Visualize mutually regenerating orthogonal electric E and magnetic B oscillating fields in space.',
                'Connect coupled inductive-capacitive oscillations to electromagnetic wave propagation.'
            )
        ],
        'g12-ch3-l4': [
            oSim(
                'em3.html',
                'em.html',
                'Electromagnetic Waves',
                'Grade 12 • Chapter 3: Electromagnetism',
                'Alternating Currents',
                'Inspect sinusoidal E and B oscillations generated by alternating currents.',
                'Relate sinusoidal alternating current oscillations to electromagnetic radiation.'
            )
        ],
        'g12-ch4-l3': [
            oSim(
                'm1.html',
                'm.html',
                'Hydrogen Energy Levels',
                'Grade 12 • Chapter 4: Modern Physics',
                'Atomic Structure',
                'Trigger electron transitions between quantized Bohr energy levels and inspect emitted photon energies.',
                'Calculate photon wavelengths and energies ΔE = Ei − Ef = hf across hydrogen spectral series.'
            ),
            oSim(
                'm2.html',
                'm.html',
                'Charge to Mass Ratio Lab',
                'Grade 12 • Chapter 4: Modern Physics',
                'Atomic Structure',
                'Recreate J. J. Thomson’s crossed electric-magnetic deflection experiment to find electron e/m.',
                'Derive e/m from velocity selector condition v = E/B and magnetic circular radius r.'
            ),
            oSim(
                'em2.html',
                'em.html',
                'The Millikan Oil-Drop Experiment',
                'Grade 12 • Chapter 4: Modern Physics',
                'Atomic Structure',
                'Balance charged oil droplets between gravitational fall and opposing electric force.',
                'Verify elementary charge quantization e = 1.6×10⁻¹⁹ C from droplet equilibrium.'
            )
        ]
    };

    function resolveLessonId(lessonId) {
        var key = String(lessonId || '').trim();
        return LESSON_ID_ALIASES[key] || key;
    }

    function getSimulations(lessonId) {
        var resolved = resolveLessonId(lessonId);
        var list = OPHYSICS_SIMULATIONS_BY_LESSON[resolved];
        if (!Array.isArray(list)) return [];
        return list.map(function (item) {
            return Object.assign({}, item);
        });
    }

    global.WISOPhysicsSimulations = {
        OPHYSICS_BASE: OPHYSICS_BASE,
        LESSON_ID_ALIASES: LESSON_ID_ALIASES,
        OPHYSICS_SIMULATIONS_BY_LESSON: OPHYSICS_SIMULATIONS_BY_LESSON,
        resolveLessonId: resolveLessonId,
        getSimulations: getSimulations
    };
})(window);
