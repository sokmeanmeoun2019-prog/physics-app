// WIS Physics Hub - Dedicated Complete Curriculum Data
// Provides instant synchronous data loading across all 16 chapters (Grade 9 & Grade 12)
(function() {
    const G9_LESSONS = [
        // --- Grade 9 Chapter 1 ---
        {
            id: "g9-l1",
            gifUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Torque_animation.gif",
            worksheetUrl: "worksheets/g9-ch1-worksheet.pdf",
            games: [{ topic: "Turning Effect", url: "https://g.co/gemini/share/da86f09d1c05" }],
            title: "Chapter 1: Turning Effect of Force",
            concepts: [
                "Resultant Force: Calculated depending on the direction of the acting forces.",
                "Trigonometry Basics: Using right triangles to relate angles to side lengths (sine, cosine, tangent).",
                "Resolving Force: A force can be broken down into horizontal and vertical components.",
                "Moment of a force: The turning effect produced by a force.",
                "Principle of moment: For equilibrium, Anti-clockwise moment = Clockwise moment \\( M_{ACW} = M_{CW} \\)."
            ],
            definitions: [
                { term: "Resultant Force", definition: "The single overall vector force that represents the combined physical effect of two or more individual forces acting on an object.", symbol: "R", unit: "\\mathrm{N}", equation: "R = a + b \\quad\\text{or}\\quad R = |a - b|" },
                { term: "Collinear Forces", definition: "Forces whose lines of action lie along the exact same straight line, acting in either the same or directly opposite directions.", symbol: "a, b", unit: "\\mathrm{N}", equation: "R = a + b \\quad (\\text{same}) \\;\\Big|\\; R = |a - b| \\quad (\\text{opposite})" },
                { term: "Perpendicular Forces", definition: "Two forces that act at a right angle (90°) relative to each other, whose resultant forms the hypotenuse of a right-angled force triangle.", symbol: "R", unit: "\\mathrm{N}", equation: "R = \\sqrt{a^2 + b^2}" },
                { term: "Parallelogram Law of Forces", definition: "If two forces acting at a point are represented in magnitude and direction by adjacent sides of a parallelogram, their resultant is represented by the diagonal passing through that point.", symbol: "R", unit: "\\mathrm{N}", equation: "R = \\sqrt{a^2 + b^2 + 2ab\\cos\\theta}" },
                { term: "Resolution of a Force", definition: "The process of splitting a single applied vector force into two mutually perpendicular component forces (horizontal and vertical).", symbol: "F_x, F_y", unit: "\\mathrm{N}", equation: "F_x = F\\cos\\theta, \\; F_y = F\\sin\\theta" },
                { term: "Horizontal Component", definition: "The part of an applied force that acts parallel to the horizontal ground or x-axis.", symbol: "F_x", unit: "\\mathrm{N}", equation: "F_x = F\\cos\\theta \\quad (\\theta \\text{ to horizontal})" },
                { term: "Vertical Component", definition: "The part of an applied force that acts perpendicular to the ground along the vertical y-axis.", symbol: "F_y", unit: "\\mathrm{N}", equation: "F_y = F\\sin\\theta \\quad (\\theta \\text{ to horizontal})" },
                { term: "Direction of Resultant", definition: "The orientation angle (\\(\\theta\\)) that the resultant force makes with a chosen reference axis (typically the horizontal adjacent side).", symbol: "\\theta", unit: "{^\\circ} \\text{ or rad}", equation: "\\theta = \\tan^{-1}\\left(\\frac{b}{a}\\right)" },
                { term: "Moment of a Force", definition: "The turning effect or rotational tendency produced by a force about a fixed pivot or axis of rotation.", symbol: "M", unit: "\\mathrm{N\\cdot m}", equation: "M = F \\times d_{\\perp}" },
                { term: "Perpendicular Distance", definition: "The shortest distance measured perpendicularly from the axis of rotation or pivot to the line of action of the force.", symbol: "d_{\\perp}", unit: "\\mathrm{m}", equation: "d_{\\perp} = \\frac{M}{F}" },
                { term: "Principle of Moments", definition: "For an object in rotational equilibrium, the total sum of anti-clockwise moments about any pivot must equal the total sum of clockwise moments.", symbol: "M_{ACW}, M_{CW}", unit: "\\mathrm{N\\cdot m}", equation: "M_{ACW} = M_{CW}" },
                { term: "Net Moment", definition: "The resultant turning effect obtained by finding the algebraic difference between anti-clockwise and clockwise moments.", symbol: "M_{net}", unit: "\\mathrm{N\\cdot m}", equation: "M_{net} = M_{ACW} - M_{CW}" },
                { term: "Parallel Forces", definition: "Forces that act along parallel lines of action in the same or opposite directions on a rigid body.", symbol: "F_1, F_2", unit: "\\mathrm{N}", equation: "F_1 d_1 = F_2 d_2 \\implies \\frac{F_1}{F_2} = \\frac{d_2}{d_1}" },
                { term: "Beam Support Reaction Forces", definition: "The upward normal forces exerted by supports at points A and B to maintain equilibrium when supporting a downward load.", symbol: "F_A, F_B", unit: "\\mathrm{N}", equation: "F_A = \\frac{F \\times OB}{AB}, \\; F_B = \\frac{F \\times OA}{AB}" }
            ],
            examples: [
                { title: "Resultant of Forces in Same Direction", given: "Force \\( a = 15\\,\\mathrm{N} \\) directed East, Force \\( b = 25\\,\\mathrm{N} \\) directed East.", find: "Resultant force (\\( R \\)).", equation: "R = a + b", solution: "Since both forces act along the same line and in the identical direction:<br>\\( R = 15\\,\\mathrm{N} + 25\\,\\mathrm{N} = 40\\,\\mathrm{N} \\).", finalAnswer: "R = 40\\,\\mathrm{N} \\text{ (East)}", explanation: "When collinear forces pull in the same direction, their magnitudes add directly to produce a stronger net force." },
                { title: "Resultant of Forces in Opposite Directions", given: "Force \\( a = 40\\,\\mathrm{N} \\) pulling to the right, Force \\( b = 18\\,\\mathrm{N} \\) pulling to the left.", find: "Resultant force (\\( R \\)).", equation: "R = |a - b|", solution: "Because the forces pull in opposite directions, subtract the smaller magnitude from the larger:<br>\\( R = |40\\,\\mathrm{N} - 18\\,\\mathrm{N}| = 22\\,\\mathrm{N} \\).", finalAnswer: "R = 22\\,\\mathrm{N} \\text{ (to the right)}", explanation: "Opposite forces cancel each other partially; the resulting motion is dictated by the leftover force in the direction of the larger force." },
                { title: "Resultant of Perpendicular Forces (90° Angle)", given: "Horizontal force \\( a = 8\\,\\mathrm{N} \\), Vertical force \\( b = 6\\,\\mathrm{N} \\).", find: "Magnitude of the resultant force (\\( R \\)).", equation: "R = \\sqrt{a^2 + b^2}", solution: "Use Pythagoras' theorem on the perpendicular components:<br>\\( R = \\sqrt{(8)^2 + (6)^2} = \\sqrt{64 + 36} = \\sqrt{100} = 10\\,\\mathrm{N} \\).", finalAnswer: "R = 10\\,\\mathrm{N}", explanation: "Perpendicular vectors form the adjacent and opposite sides of a right triangle whose hypotenuse is the magnitude of the resultant force." },
                { title: "Resultant of Two Forces at an Oblique Angle (Parallelogram Law)", given: "Force \\( a = 5\\,\\mathrm{N} \\), Force \\( b = 7\\,\\mathrm{N} \\), Angle between forces \\( \\theta = 60^\\circ \\).", find: "Resultant force (\\( R \\)).", equation: "R = \\sqrt{a^2 + b^2 + 2ab\\cos\\theta}", solution: "Substitute the values knowing that \\( \\cos 60^\\circ = 0.5 \\):<br>\\( R = \\sqrt{5^2 + 7^2 + 2(5)(7)\\cos 60^\\circ} \\)<br>\\( R = \\sqrt{25 + 49 + 70(0.5)} = \\sqrt{74 + 35} = \\sqrt{109} \\approx 10.44\\,\\mathrm{N} \\).", finalAnswer: "R \\approx 10.44\\,\\mathrm{N}", explanation: "The parallelogram law accounts for the geometric separation angle between two non-perpendicular vectors." },
                { title: "Resolving Force (Angle with Horizontal Axis)", given: "Tension force \\( F = 50\\,\\mathrm{N} \\) acting at an angle \\( \\theta = 30^\\circ \\) above the horizontal ground.", find: "Horizontal component \\( F_x \\) and vertical component \\( F_y \\).", equation: "F_x = F\\cos\\theta, \\quad F_y = F\\sin\\theta", solution: "Using trigonometric functions for \\( \\theta = 30^\\circ \\) (\\( \\cos 30^\\circ \\approx 0.866 \\), \\( \\sin 30^\\circ = 0.5 \\)):<br>\\( F_x = 50 \\times \\cos 30^\\circ = 50 \\times 0.866 = 43.30\\,\\mathrm{N} \\)<br>\\( F_y = 50 \\times \\sin 30^\\circ = 50 \\times 0.5 = 25.00\\,\\mathrm{N} \\).", finalAnswer: "F_x = 43.30\\,\\mathrm{N}, \\quad F_y = 25.00\\,\\mathrm{N}", explanation: "When the angle is measured from the horizontal, the adjacent side corresponds to the cosine projection (horizontal force) and opposite to sine (vertical force)." },
                { title: "Resolving Force (Angle with Vertical Axis)", given: "Applied force \\( F = 60\\,\\mathrm{N} \\) at an angle \\( \\theta = 45^\\circ \\) to the vertical wall.", find: "Horizontal component \\( F_x \\) and vertical component \\( F_y \\).", equation: "F_x = F\\sin\\theta, \\quad F_y = F\\cos\\theta", solution: "When the angle is with the vertical:<br>\\( F_x = 60 \\times \\sin 45^\\circ = 60 \\times 0.7071 \\approx 42.43\\,\\mathrm{N} \\)<br>\\( F_y = 60 \\times \\cos 45^\\circ = 60 \\times 0.7071 \\approx 42.43\\,\\mathrm{N} \\).", finalAnswer: "F_x = 42.43\\,\\mathrm{N}, \\quad F_y = 42.43\\,\\mathrm{N}", explanation: "When the reference angle shifts to the vertical axis, the opposite component becomes horizontal (sine) and adjacent becomes vertical (cosine)." },
                { title: "Direction of Resultant Force", given: "Adjacent component \\( a = 4\\,\\mathrm{N} \\), Opposite component \\( b = 3\\,\\mathrm{N} \\).", find: "Direction angle \\( \\theta \\) with the horizontal.", equation: "\\theta = \\tan^{-1}\\left(\\frac{b}{a}\\right)", solution: "Substitute into the inverse tangent function:<br>\\( \\theta = \\tan^{-1}\\left(\\frac{3}{4}\\right) = \\tan^{-1}(0.75) \\approx 36.87^\\circ \\).", finalAnswer: "\\theta \\approx 36.9^\\circ", explanation: "The tangent of the angle in a right triangle is the ratio of opposite to adjacent sides, giving the direction of the vector." },
                { title: "Calculating the Moment of a Force (Torque)", given: "Force applied to spanner \\( F = 20\\,\\mathrm{N} \\), Perpendicular distance \\( d_{\\perp} = 25\\,\\mathrm{cm} = 0.25\\,\\mathrm{m} \\).", find: "Moment of the force (\\( M \\)).", equation: "M = F \\times d_{\\perp}", solution: "Ensure distance is in meters, then multiply:<br>\\( M = 20\\,\\mathrm{N} \\times 0.25\\,\\mathrm{m} = 5.0\\,\\mathrm{N\\cdot m} \\).", finalAnswer: "M = 5.0\\,\\mathrm{N\\cdot m}", explanation: "Moment quantifies the turning effect; lengthening the spanner arm increases the moment produced for the exact same applied effort." },
                { title: "Two Parallel Forces on a Balanced Lever", given: "Load force \\( F_2 = 120\\,\\mathrm{N} \\) placed at distance \\( d_2 = 0.5\\,\\mathrm{m} \\) from pivot. Applied effort is located at distance \\( d_1 = 1.5\\,\\mathrm{m} \\).", find: "Effort force \\( F_1 \\) required for equilibrium.", equation: "F_1 d_1 = F_2 d_2 \\implies F_1 = \\frac{F_2 d_2}{d_1}", solution: "Rearrange the parallel forces relation for \\( F_1 \\):<br>\\( F_1 = \\frac{120\\,\\mathrm{N} \\times 0.5\\,\\mathrm{m}}{1.5\\,\\mathrm{m}} = \\frac{60}{1.5} = 40\\,\\mathrm{N} \\).", finalAnswer: "F_1 = 40\\,\\mathrm{N}", explanation: "Because the effort arm is three times longer than the load arm, only one-third of the load's force is needed to maintain balance." },
                { title: "Principle of Moments (Equilibrium Check)", given: "Left-side anti-clockwise force \\( F_1 = 30\\,\\mathrm{N} \\) at \\( d_1 = 2\\,\\mathrm{m} \\). Right-side load \\( F_2 = 40\\,\\mathrm{N} \\) at \\( d_2 = 1.5\\,\\mathrm{m} \\).", find: "Confirm whether the beam is in rotational equilibrium.", equation: "M_{ACW} = F_1 d_1, \\quad M_{CW} = F_2 d_2", solution: "Compute each moment separately:<br>\\( M_{ACW} = 30\\,\\mathrm{N} \\times 2.0\\,\\mathrm{m} = 60\\,\\mathrm{N\\cdot m} \\)<br>\\( M_{CW} = 40\\,\\mathrm{N} \\times 1.5\\,\\mathrm{m} = 60\\,\\mathrm{N\\cdot m} \\)<br>Since \\( M_{ACW} = M_{CW} \\), the beam satisfies the principle of moments.", finalAnswer: "M_{ACW} = M_{CW} = 60\\,\\mathrm{N\\cdot m} \\text{ (Beam is in equilibrium)}", explanation: "The system is in rotational equilibrium because the total anti-clockwise moment perfectly balances the total clockwise moment." },
                { title: "Net Moment on an Unbalanced Beam", given: "Anti-clockwise moment \\( M_{ACW} = 85\\,\\mathrm{N\\cdot m} \\), Clockwise moment \\( M_{CW} = 50\\,\\mathrm{N\\cdot m} \\).", find: "Net moment (\\( M_{net} \\)) and direction of rotation.", equation: "M_{net} = M_{ACW} - M_{CW}", solution: "Subtract clockwise from anti-clockwise moment:<br>\\( M_{net} = 85\\,\\mathrm{N\\cdot m} - 50\\,\\mathrm{N\\cdot m} = 35\\,\\mathrm{N\\cdot m} \\).", finalAnswer: "M_{net} = 35\\,\\mathrm{N\\cdot m} \\text{ (Anti-clockwise)}", explanation: "Because the anti-clockwise moment exceeds the clockwise moment, the beam accelerates rotationally in the anti-clockwise direction." },
                { title: "Reaction Forces on a Supported Beam", given: "Total beam length \\( AB = 4.0\\,\\mathrm{m} \\). A downward load \\( F = 600\\,\\mathrm{N} \\) acts at point O where \\( OA = 1.0\\,\\mathrm{m} \\) and \\( OB = 3.0\\,\\mathrm{m} \\).", find: "Reaction support forces at A (\\( F_A \\)) and B (\\( F_B \\)).", equation: "F_A = \\frac{F \\times OB}{AB}, \\quad F_B = \\frac{F \\times OA}{AB}", solution: "Calculate each reaction force using beam moments:<br>\\( F_A = \\frac{600\\,\\mathrm{N} \\times 3.0\\,\\mathrm{m}}{4.0\\,\\mathrm{m}} = 450\\,\\mathrm{N} \\)<br>\\( F_B = \\frac{600\\,\\mathrm{N} \\times 1.0\\,\\mathrm{m}}{4.0\\,\\mathrm{m}} = 150\\,\\mathrm{N} \\)<br>Verification: \\( F_A + F_B = 450 + 150 = 600\\,\\mathrm{N} = F \\).", finalAnswer: "F_A = 450\\,\\mathrm{N}, \\quad F_B = 150\\,\\mathrm{N}", explanation: "The support closer to the downward load carries the greater share of the weight to preserve translational and rotational equilibrium." }
            ],
            equations: [
                { section: "Resultant Force", name: "Resultant: Opposite direction", formula: "\\( R = |a - b| \\)", symbols: [{ symbol: "R", desc: "Resultant Force (N)" }, { symbol: "a, b", desc: "Component Forces (N)" }] },
                { section: "Resultant Force", name: "Resultant: Same direction", formula: "\\( R = a + b \\)", symbols: [{ symbol: "R", desc: "Resultant Force (N)" }, { symbol: "a, b", desc: "Component Forces (N)" }] },
                { section: "Resultant Force (Perpendicular)", name: "Resultant: At 90° angle", formula: "\\( R = \\sqrt{a^2 + b^2} \\)", symbols: [{ symbol: "R", desc: "Resultant Force (N)" }, { symbol: "a, b", desc: "Component Forces (N)" }] },
                { section: "Resultant Force (At angle θ)", name: "Parallelogram Law of Forces", formula: "\\( R = \\sqrt{a^2 + b^2 + 2ab \\cos \\theta} \\)", symbols: [{ symbol: "R", desc: "Resultant Force (N)" }, { symbol: "a, b", desc: "Component Forces (N)" }, { symbol: "θ", desc: "Angle between forces (° or rad)" }] },
                { section: "Trigonometry Basics (Right Triangle)", name: "Sine (\\(\\sin\\))", formula: "\\( \\sin \\theta = \\frac{\\text{opposite}}{\\text{hypotenuse}} = \\frac{b}{R} \\)", symbols: [{ symbol: "b", desc: "Opposite Side (N)" }, { symbol: "R", desc: "Hypotenuse (N)" }] },
                { section: "Trigonometry Basics (Right Triangle)", name: "Cosine (\\(\\cos\\))", formula: "\\( \\cos \\theta = \\frac{\\text{adjacent}}{\\text{hypotenuse}} = \\frac{a}{R} \\)", symbols: [{ symbol: "a", desc: "Adjacent Side (N)" }, { symbol: "R", desc: "Hypotenuse (N)" }] },
                { section: "Trigonometry Basics (Right Triangle)", name: "Tangent (\\(\\tan\\))", formula: "\\( \\tan \\theta = \\frac{\\text{opposite}}{\\text{adjacent}} = \\frac{b}{a} \\)", symbols: [{ symbol: "b", desc: "Opposite Side (N)" }, { symbol: "a", desc: "Adjacent Side (N)" }] },
                { section: "Resolving Force (Angle with horizontal axis)", name: "Horizontal Force", formula: "\\( F_x = F \\cos \\theta \\)", symbols: [{ symbol: "F_x", desc: "Horizontal Force (N)" }, { symbol: "F", desc: "Applied Force (N)" }, { symbol: "θ", desc: "Angle (° or rad)" }] },
                { section: "Resolving Force (Angle with horizontal axis)", name: "Vertical Force", formula: "\\( F_y = F \\sin \\theta \\)", symbols: [{ symbol: "F_y", desc: "Vertical Force (N)" }, { symbol: "F", desc: "Applied Force (N)" }, { symbol: "θ", desc: "Angle (° or rad)" }] },
                { section: "Resolving Force (Angle with vertical axis)", name: "Horizontal Force", formula: "\\( F_x = F \\sin \\theta \\)", symbols: [{ symbol: "F_x", desc: "Horizontal Force (N)" }, { symbol: "F", desc: "Applied Force (N)" }, { symbol: "θ", desc: "Angle (° or rad)" }] },
                { section: "Resolving Force (Angle with vertical axis)", name: "Vertical Force", formula: "\\( F_y = F \\cos \\theta \\)", symbols: [{ symbol: "F_y", desc: "Vertical Force (N)" }, { symbol: "F", desc: "Applied Force (N)" }, { symbol: "θ", desc: "Angle (° or rad)" }] },
                { section: "Direction", name: "Direction of a resultant force", formula: "\\( \\theta = \\tan^{-1}\\left(\\frac{\\text{opp}}{\\text{adj}}\\right) = \\tan^{-1}\\left(\\frac{b}{a}\\right) \\)", symbols: [{ symbol: "θ", desc: "Direction Angle (° or rad)" }, { symbol: "b", desc: "Opposite Force (N)" }, { symbol: "a", desc: "Adjacent Force (N)" }] },
                { section: "Moment", name: "Moment of a force", formula: "\\( M = F \\times d_{\\perp} \\)", symbols: [{ symbol: "M", desc: "Moment of Force (N·m)" }, { symbol: "F", desc: "Applied Force (N)" }, { symbol: "d_⊥", desc: "Perpendicular distance (m)" }] },
                { section: "Moment", name: "Two parallel forces", formula: "\\( F_1 d_1 = F_2 d_2 \\Rightarrow \\frac{F_1}{F_2} = \\frac{d_2}{d_1} \\)", symbols: [{ symbol: "F_1, F_2", desc: "Parallel Forces (N)" }, { symbol: "d_1, d_2", desc: "Distances from pivot (m)" }] },
                { section: "Moment", name: "Principle of moment", formula: "\\( M_{ACW} = M_{CW} \\)", symbols: [{ symbol: "M_{ACW}", desc: "Anti-Clockwise Moment (N·m)" }, { symbol: "M_{CW}", desc: "Clockwise Moment (N·m)" }] },
                { section: "Moment", name: "Net moment", formula: "\\( M_{net} = M_{ACW} - M_{CW} \\)", symbols: [{ symbol: "M_{net}", desc: "Net Moment (N·m)" }] },
                { section: "Moment (Force Components)", name: "Force Components", formula: "\\( F_A = \\frac{F \\times OB}{AB} \\), \\( F_B = \\frac{F \\times OA}{AB} \\)", symbols: [{ symbol: "F_A, F_B", desc: "Reaction Forces (N)" }, { symbol: "F", desc: "Applied Force (N)" }, { symbol: "OA, OB, AB", desc: "Distances along beam (m)" }] }
            ],
            flashcards: [
                { front: "How do you calculate the resultant of two forces acting in opposite directions?", back: "\\( R = |a - b| \\)" },
                { front: "How do you calculate the resultant of two forces acting in the same direction?", back: "\\( R = a + b \\)" },
                { front: "What is the formula for the resultant of two forces acting at a 90° angle?", back: "\\( R = \\sqrt{a^2 + b^2} \\)" },
                { front: "What is the general formula for the resultant of two forces acting at an angle \\(\\alpha\\)?", back: "\\( R = \\sqrt{a^2 + b^2 + 2ab \\cos \\alpha} \\)" },
                { front: "How do you find the horizontal component of a force (when \\(\\theta\\) is with horizontal axis)?", back: "\\( F_x = F \\cos \\theta \\)" },
                { front: "How do you find the vertical component of a force (when \\(\\theta\\) is with horizontal axis)?", back: "\\( F_y = F \\sin \\theta \\)" },
                { front: "What is the formula for calculating the moment of a force?", back: "\\( M = F \\times d_{\\perp} \\)" },
                { front: "What is the condition for the Principle of Moments in rotational equilibrium?", back: "\\( M_{ACW} = M_{CW} \\)" },
                { front: "What is the formula for the Net Moment?", back: "\\( M_{net} = M_{ACW} - M_{CW} \\)" },
                { front: "What is the formula for finding the direction \\(\\theta\\) of a resultant force?", back: "\\( \\theta = \\tan^{-1}\\left(\\frac{b}{a}\\right) \\)" }
            ],
            quiz: [
                { question: "If two forces of 10 N and 6 N act in opposite directions, what is the resultant force?", options: ["16 N", "4 N", "60 N", "1.67 N"], correctIndex: 1, feedback: "For forces in opposite directions, \\( R = |a - b| = |10 - 6| = 4\\,\\text{N} \\)." },
                { question: "What is the resultant of two perpendicular forces of 3 N and 4 N?", options: ["7 N", "1 N", "5 N", "12 N"], correctIndex: 2, feedback: "Using Pythagoras theorem: \\( R = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = 5\\,\\text{N} \\)." },
                { question: "When resolving a force \\(F\\) at an angle \\(\\theta\\) to the horizontal axis, the horizontal component is:", options: ["\\( F \\sin \\theta \\)", "\\( F \\cos \\theta \\)", "\\( F \\tan \\theta \\)", "\\( F / \\cos \\theta \\)"], correctIndex: 1, feedback: "The horizontal component adjacent to the angle is \\( F_x = F \\cos \\theta \\)." },
                { question: "The moment of a force depends on the force and what other factor?", options: ["Time", "Mass", "Perpendicular distance to pivot", "Velocity"], correctIndex: 2, feedback: "Moment equals force multiplied by perpendicular distance: \\( M = F \\times d_{\\perp} \\)." },
                { question: "If a balanced beam has \\( M_{CW} = 50\\,\\text{N\\cdot m} \\), what must \\( M_{ACW} \\) be?", options: ["25 N·m", "50 N·m", "100 N·m", "0 N·m"], correctIndex: 1, feedback: "By the Principle of Moments, anti-clockwise moment equals clockwise moment." },
                { question: "What is the net moment if \\( M_{ACW} = 80\\,\\text{N\\cdot m} \\) and \\( M_{CW} = 30\\,\\text{N\\cdot m} \\)?", options: ["110 N·m", "50 N·m", "2400 N·m", "2.67 N·m"], correctIndex: 1, feedback: "\\( M_{net} = M_{ACW} - M_{CW} = 80 - 30 = 50\\,\\text{N\\cdot m} \\)." },
                { question: "In a right triangle, the tangent of angle \\(\\theta\\) is defined as:", options: ["opposite / hypotenuse", "adjacent / hypotenuse", "opposite / adjacent", "hypotenuse / opposite"], correctIndex: 2, feedback: "\\( \\tan \\theta = \\text{opposite} / \\text{adjacent} = b / a \\)." },
                { question: "Two parallel forces satisfy \\( F_1 d_1 = F_2 d_2 \\). If \\( F_1 = 20\\,\\text{N} \\), \\( d_1 = 2\\,\\text{m} \\), and \\( d_2 = 1\\,\\text{m} \\), what is \\( F_2 \\)?", options: ["10 N", "20 N", "40 N", "80 N"], correctIndex: 2, feedback: "\\( F_2 = (F_1 \\times d_1) / d_2 = (20 \\times 2) / 1 = 40\\,\\text{N} \\)." },
                { question: "What is the SI unit for the moment of a force?", options: ["N/m", "N·m", "Joules / second", "kg·m/s"], correctIndex: 1, feedback: "Force (N) multiplied by distance (m) gives Newton-meters (N·m)." },
                { question: "When resolving a force with angle \\(\\theta\\) to the vertical axis, the horizontal component is:", options: ["\\( F \\cos \\theta \\)", "\\( F \\sin \\theta \\)", "\\( F \\tan \\theta \\)", "\\( F \\)"], correctIndex: 1, feedback: "When the angle is measured to the vertical, the horizontal side is opposite: \\( F_x = F \\sin \\theta \\)." }
            ]
        },

        // --- Grade 9 Chapter 2 ---
        {
            id: "g9-l2",
            gifUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Atwood_s_swinging_machine.gif",
            worksheetUrl: "worksheets/g9-ch2-worksheet.pdf",
            games: [
                { topic: "Levers", url: "https://g.co/gemini/share/0b9242977d1a" },
                { topic: "Inclined Plane", url: "https://g.co/gemini/share/a0f83fb13666" },
                { topic: "Pulley", url: "https://share.gemini.google/ikZlefCPf3VG" },
                { topic: "Gear and Belt System", url: "https://gemini.google.com/share/a559ad0916ce" },
                { topic: "Wheel and Axle", url: "https://gemini.google.com/share/8a5c6aeecc08" }
            ],
            title: "Chapter 2: Simple Machines",
            concepts: [
                "Simple Machines: Devices that change the magnitude, direction, or distance of force to make physical work easier.",
                "Mechanical Advantage (MA): The factor by which a machine multiplies applied effort force, \\( MA = \\frac{F_R}{F_E} \\).",
                "Velocity Ratio (VR): The ratio of distance moved by effort to distance moved by load, \\( VR = \\frac{d_E}{d_R} \\).",
                "Efficiency (eff): The percentage of input work transformed into useful output work, \\( \\text{eff} = \\frac{MA}{VR} \\times 100\\% \\).",
                "Key Machines: Levers (1st, 2nd, 3rd class), Inclined Planes (\\( MA = L/h \\)), Pulleys, Gears, and Wheel & Axle (\\( MA = R/r \\))."
            ],
            definitions: [
                { term: "Simple Machine", definition: "A basic mechanical device that changes the magnitude, direction, or distance of an applied force to make physical work easier.", symbol: "\\text{Machine}", unit: "\\text{No unit}", equation: "MA = \\frac{F_R}{F_E}" },
                { term: "Effort Force", definition: "The external force applied by a person or motor to operate a machine.", symbol: "F_E", unit: "\\mathrm{N}", equation: "F_E = \\frac{F_R}{MA}" },
                { term: "Resistance / Load Force", definition: "The resistive force or weight of the object that the machine overcomes or lifts.", symbol: "F_R", unit: "\\mathrm{N}", equation: "F_R = MA \\times F_E" },
                { term: "Mechanical Advantage (MA)", definition: "The factor by which a machine multiplies the applied effort force to overcome a load.", symbol: "MA", unit: "\\text{No unit}", equation: "MA = \\frac{F_R}{F_E}" },
                { term: "Velocity Ratio (VR)", definition: "The theoretical ratio of the distance moved by the effort force to the distance moved by the load force.", symbol: "VR", unit: "\\text{No unit}", equation: "VR = \\frac{d_E}{d_R}" },
                { term: "Efficiency (eff)", definition: "The percentage of input work converted into useful output work, measuring energy lost to friction and heat.", symbol: "eff", unit: "\\%", equation: "eff = \\frac{MA}{VR} \\times 100\\% = \\frac{W_R}{W_E} \\times 100\\%" },
                { term: "Lever", definition: "A rigid bar free to pivot about a fixed support point called the fulcrum, classified into 1st, 2nd, and 3rd class levers.", symbol: "\\text{Lever}", unit: "\\text{No unit}", equation: "\\frac{F_R}{F_E} = \\frac{d_E}{d_R}" },
                { term: "Effort Arm", definition: "The perpendicular distance between the fulcrum and the line of action of the effort force.", symbol: "d_E", unit: "\\mathrm{m}", equation: "d_E = MA \\times d_R" },
                { term: "Load Arm", definition: "The perpendicular distance between the fulcrum and the line of action of the load force.", symbol: "d_R", unit: "\\mathrm{m}", equation: "d_R = \\frac{d_E}{MA}" },
                { term: "Inclined Plane", definition: "A flat supporting ramp surface tilted at an angle to the horizontal used to raise heavy loads by applying force along its length.", symbol: "\\text{Incline}", unit: "\\text{No unit}", equation: "MA = \\frac{L}{h}" },
                { term: "Work Done by Effort", definition: "The total energy input supplied to the machine along the effort distance.", symbol: "W_E", unit: "\\mathrm{J}", equation: "W_E = F_E \\times L \\quad (\\text{or } F_E \\times d_E)" },
                { term: "Work Done on Load", definition: "The useful gravitational potential energy gained by raising the load through vertical height.", symbol: "W_R", unit: "\\mathrm{J}", equation: "W_R = F_R \\times h \\quad (\\text{or } F_R \\times d_R)" },
                { term: "Pulley System", definition: "A wheel with a grooved rim over which a rope passes, used to change the direction or reduce the required lifting effort.", symbol: "\\text{Pulley}", unit: "\\text{No unit}", equation: "MA = \\text{number of supporting rope strands}" },
                { term: "Gear System", definition: "A mechanism of two or more meshed toothed wheels that transmit rotational motion and torque between shafts.", symbol: "\\text{Gears}", unit: "\\text{No unit}", equation: "MA = \\frac{N_R}{N_E} = \\frac{d_R}{d_E}" },
                { term: "Gear Ratio (GR)", definition: "The ratio of the number of teeth or diameter of the driven gear (load) to the driving gear (effort).", symbol: "GR", unit: "\\text{No unit}", equation: "GR = \\frac{N_R}{N_E} = \\frac{d_R}{d_E}" },
                { term: "Belt System", definition: "Two rotating pulleys linked by a continuous loop belt, transmitting torque across parallel shafts.", symbol: "\\text{Belt}", unit: "\\text{No unit}", equation: "N_E D_E = N_R D_R \\implies MA = \\frac{R_R}{R_E}" },
                { term: "Wheel and Axle", definition: "A simple machine consisting of two concentric cylindrical wheels of different diameters that rotate together about the same axis.", symbol: "\\text{Wheel \\& Axle}", unit: "\\text{No unit}", equation: "MA = VR = \\frac{R}{r}" }
            ],
            examples: [
                { title: "Mechanical Advantage of a Lever", given: "Load force \\( F_R = 600\\,\\mathrm{N} \\), Effort applied \\( F_E = 150\\,\\mathrm{N} \\), Load arm \\( d_R = 0.4\\,\\mathrm{m} \\).", find: "Mechanical Advantage (\\( MA \\)) and required effort arm (\\( d_E \\)).", equation: "MA = \\frac{F_R}{F_E} = \\frac{d_E}{d_R}", solution: "1. Calculate mechanical advantage:<br>\\( MA = \\frac{600\\,\\mathrm{N}}{150\\,\\mathrm{N}} = 4.0 \\).<br>2. Find effort arm:<br>\\( d_E = MA \\times d_R = 4.0 \\times 0.4\\,\\mathrm{m} = 1.6\\,\\mathrm{m} \\).", finalAnswer: "MA = 4.0, \\quad d_E = 1.6\\,\\mathrm{m}", explanation: "A mechanical advantage of 4 multiplies effort fourfold, requiring an effort arm 4 times longer than the load arm." },
                { title: "Efficiency of a Lever System", given: "Load force \\( F_R = 400\\,\\mathrm{N} \\), Effort force \\( F_E = 120\\,\\mathrm{N} \\), Load distance \\( d_R = 0.5\\,\\mathrm{m} \\), Effort distance \\( d_E = 2.0\\,\\mathrm{m} \\).", find: "Mechanical Advantage (\\( MA \\)), Velocity Ratio (\\( VR \\)), and Efficiency (\\( eff \\)).", equation: "eff = \\frac{MA}{VR} \\times 100\\%", solution: "1. \\( MA = \\frac{400}{120} \\approx 3.33 \\).<br>2. \\( VR = \\frac{2.0}{0.5} = 4.0 \\).<br>3. \\( eff = \\frac{3.33}{4.0} \\times 100\\% = 83.33\\% \\).", finalAnswer: "MA \\approx 3.33, \\quad VR = 4.0, \\quad eff \\approx 83.3\\%", explanation: "Friction at the pivot reduces mechanical advantage below the velocity ratio, giving efficiency under 100%." },
                { title: "Mechanical Advantage of an Inclined Plane", given: "Ramp length \\( L = 6.0\\,\\mathrm{m} \\), Vertical height \\( h = 1.5\\,\\mathrm{m} \\).", find: "Ideal Mechanical Advantage (\\( MA \\)).", equation: "MA = \\frac{L}{h}", solution: "Substitute values:<br>\\( MA = \\frac{6.0\\,\\mathrm{m}}{1.5\\,\\mathrm{m}} = 4.0 \\).", finalAnswer: "MA = 4.0", explanation: "An inclined plane spreads lifting work over a longer distance, reducing the required pushing force by 4 times." },
                { title: "Work Done on a Frictionless Inclined Plane", given: "Crate weight \\( F_R = 900\\,\\mathrm{N} \\), Ramp height \\( h = 2.0\\,\\mathrm{m} \\), Ramp length \\( L = 5.0\\,\\mathrm{m} \\).", find: "Work on load (\\( W_R \\)) and required effort force (\\( F_E \\)).", equation: "W_R = F_R \\times h, \\quad F_E = \\frac{F_R h}{L}", solution: "1. \\( W_R = 900 \\times 2.0 = 1800\\,\\mathrm{J} \\).<br>2. Without friction, \\( W_E = W_R = 1800\\,\\mathrm{J} \\).<br>3. \\( F_E = \\frac{1800}{5.0} = 360\\,\\mathrm{N} \\).", finalAnswer: "W_R = 1800\\,\\mathrm{J}, \\quad F_E = 360\\,\\mathrm{N}", explanation: "Energy conservation guarantees work input equals gravitational work output when friction is negligible." },
                { title: "Pulley System Mechanical Advantage", given: "Block and tackle pulley system has 4 supporting cables lifting a load \\( F_R = 800\\,\\mathrm{N} \\) by \\( d_R = 1.2\\,\\mathrm{m} \\).", find: "Effort force (\\( F_E \\)) and Effort pull distance (\\( d_E \\)).", equation: "MA = VR = 4, \\quad F_E = \\frac{F_R}{MA}, \\quad d_E = VR \\times d_R", solution: "1. \\( F_E = \\frac{800\\,\\mathrm{N}}{4} = 200\\,\\mathrm{N} \\).<br>2. \\( d_E = 4 \\times 1.2\\,\\mathrm{m} = 4.8\\,\\mathrm{m} \\).", finalAnswer: "MA = 4, \\quad F_E = 200\\,\\mathrm{N}, \\quad d_E = 4.8\\,\\mathrm{m}", explanation: "Each supporting rope carries an equal share of the load, reducing effort to one quarter while quadrupling pull distance." }
            ],
            equations: [
                { section: "Lever", name: "Lever Mechanical advantage", formula: "\\( MA = \\frac{F_R}{F_E} = \\frac{d_E}{d_R} \\)", symbols: [{ symbol: "MA", desc: "Mechanical Advantage (No unit)" }, { symbol: "F_R", desc: "Load Force (N)" }, { symbol: "F_E", desc: "Effort Force (N)" }, { symbol: "d_E", desc: "Effort Arm (m)" }, { symbol: "d_R", desc: "Load Arm (m)" }] },
                { section: "Lever", name: "Lever Efficiency", formula: "\\( eff = \\frac{MA}{VR} \\times 100\\% \\)", symbols: [{ symbol: "eff", desc: "Efficiency (%)" }, { symbol: "MA, VR", desc: "Advantage / Velocity Ratio" }] },
                { section: "Inclined Plane", name: "Inclined Plane MA", formula: "\\( MA = \\frac{L}{h} \\)", symbols: [{ symbol: "L", desc: "Length of incline (m)" }, { symbol: "h", desc: "Height of incline (m)" }] },
                { section: "Inclined Plane", name: "Work done on Incline", formula: "\\( W_E = F_E \\times L, \\; W_R = F_R \\times h \\)", symbols: [{ symbol: "W_E, W_R", desc: "Work by Effort / Load (J)" }] },
                { section: "Pulley", name: "Pulley Mechanical advantage", formula: "\\( MA = \\frac{F_R}{F_E} = \\text{# of cables} \\)", symbols: [{ symbol: "MA", desc: "Mechanical Advantage (No unit)" }] },
                { section: "Pulley", name: "Pulley Velocity Ratio", formula: "\\( VR = \\frac{d_E}{d_R} \\)", symbols: [{ symbol: "d_E, d_R", desc: "Distances of Effort and Load (m)" }] },
                { section: "Gears System", name: "Gear Ratio and MA", formula: "\\( MA = GR = \\frac{N_R}{N_E} = \\frac{d_R}{d_E} \\)", symbols: [{ symbol: "N_R, N_E", desc: "Number of teeth" }, { symbol: "d_R, d_E", desc: "Diameters (m)" }] },
                { section: "Gears System", name: "Relation of turns-teeth", formula: "\\( N_E t_E = N_R t_R \\)", symbols: [{ symbol: "N", desc: "Turns" }, { symbol: "t", desc: "Teeth count" }] },
                { section: "Belt System", name: "Belt System MA", formula: "\\( MA = \\frac{R_R}{R_E} = \\frac{D_R}{D_E} \\)", symbols: [{ symbol: "R_R, R_E", desc: "Radii of pulleys (m)" }] },
                { section: "Wheel and Axle", name: "Wheel and Axle MA & VR", formula: "\\( MA = VR = \\frac{R}{r} \\)", symbols: [{ symbol: "R", desc: "Radius of wheel (m)" }, { symbol: "r", desc: "Radius of axle (m)" }] }
            ],
            flashcards: [
                { front: "What is the formula for the Mechanical Advantage (MA) of a lever?", back: "\\( MA = \\frac{F_R}{F_E} = \\frac{d_E}{d_R} \\)" },
                { front: "How do you calculate the Efficiency of a machine?", back: "\\( eff = \\frac{MA}{VR} \\times 100\\% \\)" },
                { front: "What is the Mechanical Advantage of an inclined plane?", back: "\\( MA = \\frac{L}{h} \\)" },
                { front: "How is the Velocity Ratio of a pulley calculated?", back: "\\( VR = \\frac{d_E}{d_R} \\)" },
                { front: "What is the Gear Ratio (GR)?", back: "\\( GR = \\frac{N_R}{N_E} = \\frac{d_R}{d_E} \\)" },
                { front: "What is the relation between turns and teeth in a gear system?", back: "\\( N_E t_E = N_R t_R \\)" },
                { front: "How is the Mechanical Advantage of a wheel and axle found?", back: "\\( MA = \\frac{R}{r} \\)" }
            ],
            quiz: [
                { question: "In a lever, if the effort arm is 4 m and the load arm is 1 m, what is the Mechanical Advantage?", options: ["0.25", "4", "5", "3"], correctIndex: 1, feedback: "MA = Effort Arm / Load Arm = 4 / 1 = 4." },
                { question: "The formula for the efficiency of a machine is:", options: ["MA + VR", "VR / MA", "\\( \\frac{MA}{VR} \\times 100\\% \\)", "MA × VR"], correctIndex: 2, feedback: "Efficiency relates actual mechanical advantage to theoretical velocity ratio." },
                { question: "For an inclined plane of length L and height h, the Mechanical Advantage is:", options: ["L × h", "h / L", "L - h", "L / h"], correctIndex: 3, feedback: "The MA of an inclined plane is length divided by height: L / h." },
                { question: "In an ideal system with no friction on an inclined plane, what is true?", options: ["W_E > W_R", "W_E = W_R", "W_E < W_R", "W_E = 0"], correctIndex: 1, feedback: "Without friction, energy is conserved: Work input equals work output." },
                { question: "In a wheel and axle, what is the Velocity Ratio (VR)?", options: ["r / R", "R × r", "R / r", "F_R / F_E"], correctIndex: 2, feedback: "Velocity ratio is the radius of the wheel divided by the radius of the axle: R / r." }
            ]
        },

        // --- Grade 9 Chapter 3 ---
        {
            id: "g9-l3",
            gifUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Electric_circuit.gif",
            worksheetUrl: "worksheets/g9-ch3-worksheet.pdf",
            games: [
                { topic: "Electricity", url: "https://gemini.google.com/share/e1def1ea44ff" },
                { topic: "Household Wiring System", url: "https://gemini.google.com/share/b1b0af13b130" }
            ],
            title: "Chapter 3: Electricity",
            concepts: [
                "Ohm's Law: Relates voltage, current, and resistance: \\( V = IR \\).",
                "Electrical Power: The rate of electrical energy consumption: \\( P = VI = I^2 R = V^2 / R \\).",
                "Energy Transfer & Cost: Electrical energy \\( E = Pt = VIt \\), billed by power companies in kilowatt-hours (kWh).",
                "Joule's Law & Heat: Electrical energy converted into heat: \\( Q = mc\\Delta T = RI^2 t \\)."
            ],
            definitions: [
                { term: "Electrical Power", definition: "The rate at which electrical energy is converted into another form of energy per unit time.", symbol: "P", unit: "\\mathrm{W} \\;(\\mathrm{J/s})", equation: "P = VI = RI^2 = \\frac{V^2}{R}" },
                { term: "Electrical Energy", definition: "The total work done by an electric field in moving charge carriers through an electrical component over time.", symbol: "E", unit: "\\mathrm{J}", equation: "E = VIt = RI^2 t = \\frac{V^2}{R}t" },
                { term: "Voltage (Potential Difference)", definition: "The energy transferred or work done per unit of electric charge moving between two points.", symbol: "V", unit: "\\mathrm{V}", equation: "V = IR = \\frac{E}{Q}" },
                { term: "Electric Current", definition: "The continuous rate of flow of electric charge through a conductor.", symbol: "I", unit: "\\mathrm{A}", equation: "I = \\frac{Q}{t} = \\frac{V}{R}" },
                { term: "Electrical Resistance", definition: "The opposition offered by a conductor material to the flow of electric current.", symbol: "R", unit: "\\Omega", equation: "R = \\frac{V}{I}" },
                { term: "Kilowatt-Hour (kWh)", definition: "The commercial unit of electricity consumption representing energy used by a 1000 W appliance in 1 hour.", symbol: "\\mathrm{kWh}", unit: "1\\,\\mathrm{kWh} = 3.6\\times 10^6\\,\\mathrm{J}", equation: "E(\\mathrm{kWh}) = \\frac{P(\\mathrm{W}) \\times t(\\mathrm{h})}{1000}" },
                { term: "Cost of Electricity", definition: "The total financial charge for electrical energy consumed over a given period.", symbol: "\\text{Cost}", unit: "\\text{Currency}", equation: "\\text{Cost} = E(\\mathrm{kWh}) \\times \\text{price/kWh}" },
                { term: "Heat Energy (Thermal)", definition: "The internal thermal energy absorbed or released by a substance.", symbol: "Q", unit: "\\mathrm{J}", equation: "Q = mc\\Delta T" },
                { term: "Specific Heat Capacity", definition: "The heat energy required to raise the temperature of 1 kg of a substance by 1 Kelvin.", symbol: "c", unit: "\\mathrm{J/(kg\\cdot K)}", equation: "c = \\frac{Q}{m\\Delta T}" },
                { term: "Conservation of Energy (Heating)", definition: "In an electric heater, electrical energy supplied equals thermal heat absorbed.", symbol: "E = Q", unit: "\\mathrm{J}", equation: "RI^2 t = mc\\Delta T" }
            ],
            examples: [
                { title: "Electrical Power of an Appliance", given: "Operating voltage \\( V = 220\\,\\mathrm{V} \\), Current drawn \\( I = 2.5\\,\\mathrm{A} \\).", find: "Electrical power consumption (\\( P \\)).", equation: "P = VI", solution: "\\( P = 220\\,\\mathrm{V} \\times 2.5\\,\\mathrm{A} = 550\\,\\mathrm{W} \\).", finalAnswer: "P = 550\\,\\mathrm{W}", explanation: "The appliance converts 550 Joules of electrical energy into other forms every second." },
                { title: "Power Dissipation in a Resistor", given: "Resistance \\( R = 48.4\\,\\Omega \\), Current \\( I = 5.0\\,\\mathrm{A} \\).", find: "Power dissipated (\\( P \\)).", equation: "P = RI^2", solution: "\\( P = 48.4 \\times (5.0)^2 = 48.4 \\times 25 = 1210\\,\\mathrm{W} \\).", finalAnswer: "P = 1210\\,\\mathrm{W} \\; (1.21\\,\\mathrm{kW})", explanation: "Joule heating states rate of heat production is proportional to resistance and current squared." },
                { title: "Cost of Running an Air Conditioner", given: "Power \\( P = 2.0\\,\\mathrm{kW} \\), Run time \\( t = 180\\,\\mathrm{h} \\) over a month, Tariff = $0.20 per kWh.", find: "Total energy and monthly cost.", equation: "E = P \\times t, \\quad \\text{Cost} = E \\times \\text{tariff}", solution: "1. \\( E = 2.0\\,\\mathrm{kW} \\times 180\\,\\mathrm{h} = 360\\,\\mathrm{kWh} \\).<br>2. \\( \\text{Cost} = 360 \\times \\$0.20 = \\$72.00 \\).", finalAnswer: "E = 360\\,\\mathrm{kWh}, \\quad \\text{Cost} = \\$72.00", explanation: "Multiplying power in kW by hours gives kilowatt-hours, which determines the utility bill." },
                { title: "Heating Water with an Electric Kettle", given: "Mass of water \\( m = 1.0\\,\\mathrm{kg} \\), \\( c = 4200\\,\\mathrm{J/(kg\\cdot K)} \\), \\( \\Delta T = 80\\,\\mathrm{K} \\), Heater power \\( P = 1600\\,\\mathrm{W} \\).", find: "Time required to heat the water.", equation: "P t = mc\\Delta T \\implies t = \\frac{mc\\Delta T}{P}", solution: "1. \\( Q = 1.0 \\times 4200 \\times 80 = 336{,}000\\,\\mathrm{J} \\).<br>2. \\( t = \\frac{336{,}000}{1600} = 210\\,\\mathrm{s} = 3.5\\,\\text{minutes} \\).", finalAnswer: "t = 210\\,\\mathrm{s} \\; (3.5\\,\\text{minutes})", explanation: "All electrical energy generated by the heating element is absorbed as thermal heat by the water." }
            ],
            equations: [
                { section: "Electrical Power", name: "Definition of power", formula: "\\( P = \\frac{E}{t} = VI = RI^2 = \\frac{V^2}{R} \\)", symbols: [{ symbol: "P", desc: "Power (W)" }, { symbol: "V", desc: "Voltage (V)" }, { symbol: "I", desc: "Current (A)" }, { symbol: "R", desc: "Resistance (Ω)" }] },
                { section: "Electrical Power", name: "Energy Transfer", formula: "\\( E = VIt = RI^2 t = \\frac{V^2}{R} t \\)", symbols: [{ symbol: "E", desc: "Energy (J)" }, { symbol: "t", desc: "Time (s)" }] },
                { section: "Electrical Power", name: "Cost of using electricity", formula: "\\( \\text{cost} = E(\\text{kWh}) \\times \\text{price/kWh} \\)", symbols: [{ symbol: "E", desc: "Energy (kWh)" }] },
                { section: "Heat Energy", name: "Heat gained or lost", formula: "\\( Q = mc\\Delta T \\)", symbols: [{ symbol: "Q", desc: "Heat (J)" }, { symbol: "m", desc: "Mass (kg)" }, { symbol: "c", desc: "Specific heat (J/kg·K)" }, { symbol: "ΔT", desc: "Temperature change (K)" }] },
                { section: "Heat Energy", name: "Conservation of energy", formula: "\\( RI^2 t = mc\\Delta T \\)", symbols: [{ symbol: "R", desc: "Resistance (Ω)" }, { symbol: "I", desc: "Current (A)" }, { symbol: "t", desc: "Time (s)" }] }
            ],
            flashcards: [
                { front: "What is the formula for Electrical Power using current and resistance?", back: "\\( P = RI^2 \\)" },
                { front: "What is the formula for Electrical Power using voltage and resistance?", back: "\\( P = \\frac{V^2}{R} \\)" },
                { front: "How do you calculate electrical Energy Transfer?", back: "\\( E = VIt \\)" },
                { front: "What is the formula for heat absorbed with a temperature change?", back: "\\( Q = mc\\Delta T \\)" },
                { front: "What is the conservation of energy equation for an electric kettle?", back: "\\( RI^2 t = mc\\Delta T \\)" }
            ],
            quiz: [
                { question: "Which formula correctly represents Electrical Power in terms of Voltage and Current?", options: ["P = V / I", "P = I / V", "P = VI", "P = V² I"], correctIndex: 2, feedback: "Power is the product of voltage and current: P = VI." },
                { question: "What is the SI unit for Specific Heat Capacity?", options: ["J/kg", "J/°C", "J/(kg·K)", "W/(kg·K)"], correctIndex: 2, feedback: "Specific heat capacity is measured in Joules per kilogram per Kelvin." },
                { question: "If an appliance uses 2 kWh of energy and the price is $0.50/kWh, what is the cost?", options: ["$2.50", "$1.00", "$0.25", "$4.00"], correctIndex: 1, feedback: "Cost = Energy × rate = 2 × $0.50 = $1.00." },
                { question: "In the heat equation Q = mcΔT, what does c represent?", options: ["Speed of light", "Capacitance", "Specific heat capacity", "Current"], correctIndex: 2, feedback: "c stands for specific heat capacity." },
                { question: "In an electric heater, electrical energy (RI²t) is converted directly into:", options: ["Gravitational energy", "Thermal heat (mcΔT)", "Chemical energy", "Nuclear energy"], correctIndex: 1, feedback: "Joule heating converts electrical work directly into thermal energy." }
            ]
        },

        // --- Grade 9 Chapter 4 ---
        {
            id: "g9-l4",
            gifUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/VFPt_solenoid-field-animation.gif",
            worksheetUrl: "worksheets/g9-ch4-worksheet.pdf",
            games: [
                { topic: "Straight Wire B-Field", url: "https://gemini.google.com/share/4e08057d8f02" },
                { topic: "Circular Loop B-Field", url: "https://gemini.google.com/share/d3ff81a78225" },
                { topic: "Solenoid B-Field", url: "https://gemini.google.com/share/97335be64f77" },
                { topic: "Magnetic Force", url: "https://gemini.google.com/share/e58537b64df4" },
                { topic: "Transformers", url: "https://gemini.google.com/share/4436f3b52926" }
            ],
            title: "Chapter 4: Magnetic Field",
            concepts: [
                "Magnetic Field (\\( B \\)): Region produced by moving charges or currents, measured in Tesla (T).",
                "Straight Wire: Concentric circular field lines with \\( B = \\frac{\\mu_0 I}{2\\pi d} \\).",
                "Solenoid: Concentrated uniform interior field with \\( B = \\frac{\\mu_0 NI}{l} \\).",
                "Magnetic Deflection: Force on a current-carrying wire \\( F = IlB\\sin\\theta \\).",
                "Transformers: Voltage and current transformation ratio \\( \\frac{V_S}{V_P} = \\frac{N_S}{N_P} = \\frac{I_P}{I_S} \\)."
            ],
            definitions: [
                { term: "Magnetic Field", definition: "A vector field surrounding moving charges or magnets that exerts forces on other currents.", symbol: "B", unit: "\\mathrm{T}", equation: "B = \\frac{\\mu_0 I}{2\\pi d}" },
                { term: "Permeability of Free Space", definition: "Physical constant of vacuum magnetic response.", symbol: "\\mu_0", unit: "\\mathrm{T\\cdot m/A}", equation: "\\mu_0 = 4\\pi\\times 10^{-7}\\,\\mathrm{T\\cdot m/A}" },
                { term: "Solenoid", definition: "A cylindrical coil producing a uniform magnetic field inside its core.", symbol: "\\text{Solenoid}", unit: "\\text{No unit}", equation: "B = \\frac{\\mu_0 NI}{l}" },
                { term: "Magnetic Force on Wire", definition: "Sideways deflecting force exerted on a current-carrying wire by a magnetic field.", symbol: "F", unit: "\\mathrm{N}", equation: "F = IlB\\sin\\theta" },
                { term: "Transformer", definition: "Device that alters AC voltage through mutual electromagnetic induction.", symbol: "\\text{Transformer}", unit: "\\text{No unit}", equation: "\\frac{V_S}{V_P} = \\frac{N_S}{N_P} = \\frac{I_P}{I_S}" },
                { term: "Joule Heating Loss", definition: "Power wasted as heat in transmission line resistance.", symbol: "P_J", unit: "\\mathrm{W}", equation: "P_J = RI^2 = P_{e1} - P_{e2}" }
            ],
            examples: [
                { title: "Magnetic Field of a Straight Wire", given: "Current \\( I = 5.0\\,\\mathrm{A} \\), distance \\( d = 0.10\\,\\mathrm{m} \\), \\( \\mu_0 = 4\\pi\\times 10^{-7}\\,\\mathrm{T\\cdot m/A} \\).", find: "Magnetic field (\\( B \\)).", equation: "B = \\frac{\\mu_0 I}{2\\pi d}", solution: "\\( B = \\frac{(4\\pi\\times 10^{-7}) \\times 5.0}{2\\pi \\times 0.10} = 1.0\\times 10^{-5}\\,\\mathrm{T} \\).", finalAnswer: "B = 1.0\\times 10^{-5}\\,\\mathrm{T} \\; (10\\,\\mu\\mathrm{T})", explanation: "Field lines encircle the wire, decreasing inversely with distance." },
                { title: "Magnetic Field Inside a Solenoid", given: "Turns \\( N = 500 \\), length \\( l = 0.25\\,\\mathrm{m} \\), current \\( I = 2.0\\,\\mathrm{A} \\).", find: "Internal field (\\( B \\)).", equation: "B = \\frac{\\mu_0 NI}{l}", solution: "\\( B = \\frac{(4\\pi\\times 10^{-7}) \\times 500 \\times 2.0}{0.25} \\approx 5.03\\times 10^{-3}\\,\\mathrm{T} \\).", finalAnswer: "B \\approx 5.03\\,\\mathrm{mT}", explanation: "Turns reinforce each other constructively in the core." },
                { title: "Transformer Voltage Ratio", given: "Primary voltage \\( V_P = 240\\,\\mathrm{V} \\), Primary turns \\( N_P = 1200 \\), Desired secondary \\( V_S = 12\\,\\mathrm{V} \\).", find: "Secondary turns (\\( N_S \\)).", equation: "\\frac{V_S}{V_P} = \\frac{N_S}{N_P}", solution: "\\( N_S = 1200 \\times \\frac{12}{240} = 60\\,\\text{turns} \\).", finalAnswer: "N_S = 60\\,\\text{turns} \\text{ (Step-Down)}", explanation: "A 20:1 turns ratio steps the voltage down from 240 V to 12 V." }
            ],
            equations: [
                { section: "Magnetic Field & Force", name: "Due to a straight wire", formula: "\\( B = \\frac{\\mu_0 I}{2\\pi d} \\)", symbols: [{ symbol: "B", desc: "Magnetic Field (T)" }, { symbol: "I", desc: "Current (A)" }, { symbol: "d", desc: "Distance (m)" }] },
                { section: "Magnetic Field & Force", name: "Due to a solenoid", formula: "\\( B = \\frac{\\mu_0 NI}{l} \\)", symbols: [{ symbol: "N", desc: "Turns" }, { symbol: "l", desc: "Length (m)" }] },
                { section: "Magnetic Field & Force", name: "On a current carrying wire", formula: "\\( F = IlB \\sin \\theta \\)", symbols: [{ symbol: "F", desc: "Force (N)" }, { symbol: "l", desc: "Length (m)" }, { symbol: "B", desc: "Field (T)" }] },
                { section: "Transformers", name: "Transformer Ratios", formula: "\\( \\frac{V_S}{V_P} = \\frac{N_S}{N_P} = \\frac{I_P}{I_S} \\)", symbols: [{ symbol: "V, N, I", desc: "Voltage, Turns, Current" }] },
                { section: "Transformers", name: "Power Loss", formula: "\\( P_J = RI^2 = P_{e1} - P_{e2} \\)", symbols: [{ symbol: "P_J", desc: "Heat loss (W)" }] }
            ],
            flashcards: [
                { front: "What is the formula for the magnetic field of a straight wire?", back: "\\( B = \\frac{\\mu_0 I}{2\\pi d} \\)" },
                { front: "What is the formula for the magnetic field inside a solenoid?", back: "\\( B = \\frac{\\mu_0 NI}{l} \\)" },
                { front: "How do you calculate magnetic force on a current-carrying wire?", back: "\\( F = IlB \\sin \\theta \\)" },
                { front: "What is the voltage and turns ratio of a transformer?", back: "\\( \\frac{V_S}{V_P} = \\frac{N_S}{N_P} \\)" },
                { front: "How do currents relate to turns in an ideal transformer?", back: "\\( \\frac{I_P}{I_S} = \\frac{N_S}{N_P} \\)" }
            ],
            quiz: [
                { question: "The magnetic field near a long straight wire is inversely proportional to:", options: ["Current", "Distance (d)", "Voltage", "Wire resistance"], correctIndex: 1, feedback: "B = μ₀I / (2πd), so field decreases with distance." },
                { question: "The magnetic force on a wire is maximum when the angle θ with the field is:", options: ["0°", "45°", "90°", "180°"], correctIndex: 2, feedback: "F = IlB sin θ, and sin(90°) = 1." },
                { question: "In a step-up transformer, which relationship is true?", options: ["V_S > V_P and I_S < I_P", "V_S < V_P and I_S > I_P", "V_S = V_P", "N_S < N_P"], correctIndex: 0, feedback: "Step-up transformers increase voltage while decreasing current." },
                { question: "Joule heating power loss in electric transmission is calculated as:", options: ["V² / R", "RI²", "VI", "P / t"], correctIndex: 1, feedback: "Transmission line power loss is P_J = RI²." },
                { question: "What does μ₀ represent in electromagnetism?", options: ["Electric permittivity", "Permeability of free space", "Speed of light", "Conductivity"], correctIndex: 1, feedback: "μ₀ is the magnetic permeability of vacuum." }
            ]
        },

        // --- Grade 9 Chapter 5 ---
        {
            id: "g9-l5",
            gifUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Refraction_animation.gif",
            worksheetUrl: "worksheets/g9-ch5-worksheet.pdf",
            games: [
                { topic: "Light Rays & Reflection", url: "https://gemini.google.com/share/2ac63456c976" },
                { topic: "Plane & Curved Mirrors", url: "https://gemini.google.com/share/7e4ee437394b" },
                { topic: "Refraction of Light", url: "https://gemini.google.com/share/307ba374b958" },
                { topic: "Thin Lenses", url: "https://gemini.google.com/share/1d57559d8cb4" }
            ],
            title: "Chapter 5: Light",
            concepts: [
                "Law of Reflection: Angle of incidence equals angle of reflection (\\( i = r \\)).",
                "Pinhole Camera: Projects an inverted real image with magnification \\( m = \\frac{h_i}{h_o} = \\frac{d_i}{d_o} \\).",
                "Refraction & Snell's Law: Bending across media boundaries, \\( n = \\frac{c}{v} \\) and \\( n_1 \\sin i = n_2 \\sin r \\).",
                "Total Internal Reflection: Occurs when angle of incidence exceeds critical angle \\( \\sin\\theta_c = \\frac{n_2}{n_1} \\).",
                "Mirror & Lens Equation: Relates object, image distance, and focal length \\( \\frac{1}{f} = \\frac{1}{d_o} + \\frac{1}{d_i} \\) with \\( f = \\frac{R}{2} \\)."
            ],
            definitions: [
                { term: "Law of Reflection", definition: "The angle of incidence equals the angle of reflection (\\(i = r\\)) in the same plane.", symbol: "i = r", unit: "{^\\circ}", equation: "i = r" },
                { term: "Pinhole Camera", definition: "A lensless camera that forms an inverted real image through a tiny hole.", symbol: "m", unit: "\\text{No unit}", equation: "m = \\frac{h_i}{h_o} = \\frac{d_i}{d_o}" },
                { term: "Refractive Index", definition: "Ratio of light speed in vacuum to light speed in the medium.", symbol: "n", unit: "\\text{No unit}", equation: "n = \\frac{c}{v}" },
                { term: "Snell's Law", definition: "Quantitative relation governing light refraction across an interface.", symbol: "n_1, n_2", unit: "\\text{No unit}", equation: "n_1 \\sin i = n_2 \\sin r" },
                { term: "Critical Angle", definition: "Angle of incidence in denser medium producing a 90° refraction angle.", symbol: "\\theta_c", unit: "{^\\circ}", equation: "\\sin\\theta_c = \\frac{n_2}{n_1}" },
                { term: "Mirror/Lens Equation", definition: "Fundamental formula connecting focal length, object, and image distances.", symbol: "f", unit: "\\mathrm{m}", equation: "\\frac{1}{f} = \\frac{1}{d_o} + \\frac{1}{d_i}" },
                { term: "Magnification", definition: "Ratio of image height to object height.", symbol: "M", unit: "\\text{No unit}", equation: "M = -\\frac{d_i}{d_o} = \\frac{h_i}{h_o}" }
            ],
            examples: [
                { title: "Image in a Pinhole Camera", given: "Object height \\( h_o = 1.8\\,\\mathrm{m} \\), object distance \\( d_o = 6.0\\,\\mathrm{m} \\), pinhole-to-screen \\( d_i = 0.20\\,\\mathrm{m} \\).", find: "Image height \\( h_i \\).", equation: "h_i = h_o \\times \\frac{d_i}{d_o}", solution: "\\( h_i = 1.8 \\times \\frac{0.20}{6.0} = 0.06\\,\\mathrm{m} = 6.0\\,\\mathrm{cm} \\).", finalAnswer: "h_i = 6.0\\,\\mathrm{cm} \\text{ (inverted)}", explanation: "Rays intersecting through the pinhole form an inverted scaled real image." },
                { title: "Refractive Index of Crown Glass", given: "Light speed in vacuum \\( c = 3.0\\times 10^8\\,\\mathrm{m/s} \\), light speed in glass \\( v = 2.0\\times 10^8\\,\\mathrm{m/s} \\).", find: "Refractive index \\( n \\).", equation: "n = \\frac{c}{v}", solution: "\\( n = \\frac{3.0\\times 10^8}{2.0\\times 10^8} = 1.50 \\).", finalAnswer: "n = 1.50", explanation: "Light travels 1.5 times slower in crown glass than in vacuum." },
                { title: "Critical Angle of Water", given: "Water \\( n_1 = 1.333 \\), Air \\( n_2 = 1.000 \\).", find: "Critical angle \\( \\theta_c \\).", equation: "\\sin\\theta_c = \\frac{n_2}{n_1}", solution: "\\( \\sin\\theta_c = \\frac{1.000}{1.333} = 0.750 \\implies \\theta_c = \\sin^{-1}(0.750) \\approx 48.6^\\circ \\).", finalAnswer: "\\theta_c \\approx 48.6^\\circ", explanation: "Rays striking water surface at angles beyond 48.6° undergo total internal reflection." },
                { title: "Image Distance in a Concave Mirror", given: "Focal length \\( f = 10\\,\\mathrm{cm} \\), object distance \\( d_o = 15\\,\\mathrm{cm} \\).", find: "Image distance \\( d_i \\).", equation: "d_i = \\frac{f d_o}{d_o - f}", solution: "\\( d_i = \\frac{10 \\times 15}{15 - 10} = \\frac{150}{5} = 30\\,\\mathrm{cm} \\).", finalAnswer: "d_i = 30\\,\\mathrm{cm} \\text{ (Real image)}", explanation: "Light rays converge to form an inverted real image 30 cm in front of the mirror." }
            ],
            equations: [
                { section: "Reflection of light", name: "Law of Reflection", formula: "\\( i = r \\)", symbols: [{ symbol: "i, r", desc: "Angle of incidence and reflection (°)" }] },
                { section: "Pinhole Camera", name: "Pinhole Magnification", formula: "\\( m = \\frac{h_i}{h_o} = \\frac{d_i}{d_o} \\)", symbols: [{ symbol: "h_i, h_o", desc: "Image/Object height" }, { symbol: "d_i, d_o", desc: "Image/Object distance" }] },
                { section: "Refraction of light", name: "Refractive Index & Snell's Law", formula: "\\( n = \\frac{c}{v}, \\quad n_1 \\sin i = n_2 \\sin r \\)", symbols: [{ symbol: "n", desc: "Index" }, { symbol: "i, r", desc: "Angles" }] },
                { section: "Refraction of light", name: "Critical Angle", formula: "\\( \\sin\\theta_c = \\frac{n_2}{n_1} \\)", symbols: [{ symbol: "θ_c", desc: "Critical angle (°)" }] },
                { section: "Mirrors & Lenses", name: "Mirror/Lens Equation", formula: "\\( \\frac{1}{f} = \\frac{1}{d_o} + \\frac{1}{d_i}, \\quad f = \\frac{R}{2} \\)", symbols: [{ symbol: "f", desc: "Focal length (m)" }, { symbol: "R", desc: "Curvature radius (m)" }] },
                { section: "Mirrors & Lenses", name: "Magnification", formula: "\\( M = -\\frac{d_i}{d_o} = \\frac{h_i}{h_o} \\)", symbols: [{ symbol: "M", desc: "Magnification" }] }
            ],
            flashcards: [
                { front: "What is the Law of Reflection?", back: "\\( i = r \\)" },
                { front: "What is Snell's Law of refraction?", back: "\\( n_1 \\sin i = n_2 \\sin r \\)" },
                { front: "What is the formula for the critical angle?", back: "\\( \\sin\\theta_c = \\frac{n_2}{n_1} \\)" },
                { front: "What is the Mirror/Lens equation?", back: "\\( \\frac{1}{f} = \\frac{1}{d_o} + \\frac{1}{d_i} \\)" },
                { front: "How is focal length related to radius of curvature?", back: "\\( f = \\frac{R}{2} \\)" }
            ],
            quiz: [
                { question: "When light travels from air into glass, it bends:", options: ["Toward the normal", "Away from the normal", "Not at all", "Reverses completely"], correctIndex: 0, feedback: "Because glass is optically denser than air, light slows down and bends toward the normal." },
                { question: "The critical angle is defined when the angle of refraction in the second medium is:", options: ["0°", "45°", "90°", "180°"], correctIndex: 2, feedback: "At the critical angle, the refracted ray skims the surface at 90°." },
                { question: "A concave mirror has a radius of curvature of 30 cm. What is its focal length?", options: ["60 cm", "30 cm", "15 cm", "10 cm"], correctIndex: 2, feedback: "Focal length is half the radius: f = R / 2 = 15 cm." },
                { question: "Which formula relates real depth (H) and apparent depth (h)?", options: ["n = H / h", "n = h / H", "n = H × h", "n = H - h"], correctIndex: 0, feedback: "Apparent depth appears shallower: n = real depth / apparent depth." },
                { question: "Total internal reflection can only happen when light travels from:", options: ["Denser to rarer medium", "Rarer to denser medium", "Air into water", "Vacuum into glass"], correctIndex: 0, feedback: "TIR requires light traveling from an optically denser medium into a less dense medium." }
            ]
        }
    ];

    const G12_LESSONS = [
        // --- Grade 12 Chapter 1 ---
        {
            id: "g12-l1",
            gifUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Translational_motion.gif",
            worksheetUrl: "worksheets/ch1-l1-worksheet.pdf",
            games: [{ topic: "Kinetic Theory of Ideal Gases", url: "https://gemini.google.com/share/acfae742b2c0" }],
            title: "Chapter 1 Lesson 1: Kinetic Theory of Ideal Gases",
            concepts: [
                "Ideal Gas Model: Molecules treated as point masses in continuous random motion with elastic collisions.",
                "Microscopic Pressure: Arises from momentum transfer on wall collisions: \\( P = \\frac{2}{3}\\left(\\frac{N}{V}\\right)K_{av} \\).",
                "Ideal Gas Law: Combines gas laws into \\( PV = nRT = Nk_B T \\).",
                "Average Kinetic Energy: Depends solely on temperature \\( T \\): \\( K_{av} = \\frac{3}{2}k_B T \\).",
                "Root-Mean-Square Speed: Statistical molecular speed \\( v_{rms} = \\sqrt{\\frac{3RT}{M}} = \\sqrt{\\frac{3k_B T}{m_0}} \\)."
            ],
            definitions: [
                { term: "Ideal Gas", definition: "A theoretical model of gas consisting of identical, randomly moving point-like molecules with negligible volume that exert no forces except during elastic collisions.", symbol: "\\text{Ideal Gas}", unit: "\\text{No unit}", equation: "PV = nRT = N k_B T" },
                { term: "Gas Pressure", definition: "The macroscopic normal force exerted per unit area on container walls by countless molecular collisions.", symbol: "P", unit: "\\mathrm{Pa}", equation: "P = \\frac{F}{A} = \\frac{2}{3}\\left(\\frac{N}{V}\\right)K_{av}" },
                { term: "Universal Gas Constant", definition: "Proportionality constant relating energy of one mole of gas to absolute temperature.", symbol: "R", unit: "\\mathrm{J/(mol\\cdot K)}", equation: "R = 8.314\\,\\mathrm{J/(mol\\cdot K)}" },
                { term: "Boltzmann Constant", definition: "Kinetic energy per degree of absolute temperature per individual particle.", symbol: "k_B", unit: "\\mathrm{J/K}", equation: "k_B = \\frac{R}{N_A} = 1.38\\times 10^{-23}\\,\\mathrm{J/K}" },
                { term: "Combined Gas Law", definition: "Combines Boyle's, Charles's, and Gay-Lussac's laws for a fixed gas mass.", symbol: "\\frac{PV}{T} = \\text{const}", unit: "\\text{No unit}", equation: "\\frac{P_1 V_1}{T_1} = \\frac{P_2 V_2}{T_2}" },
                { term: "Average Kinetic Energy per Molecule", definition: "Mean translational kinetic energy of an individual molecule, strictly dependent on temperature.", symbol: "K_{av}", unit: "\\mathrm{J}", equation: "K_{av} = \\frac{3}{2}k_B T" },
                { term: "Total Kinetic Energy of Gas", definition: "Sum of kinetic energies of all N particles in the system.", symbol: "K", unit: "\\mathrm{J}", equation: "K = \\frac{3}{2}nRT = \\frac{3}{2}PV" },
                { term: "Root-Mean-Square Speed (v_rms)", definition: "Statistical measure of particle speeds in a gas.", symbol: "v_{rms}", unit: "\\mathrm{m/s}", equation: "v_{rms} = \\sqrt{\\frac{3RT}{M}} = \\sqrt{\\frac{3k_B T}{m_0}}" }
            ],
            examples: [
                { title: "Microscopic Pressure from Average Kinetic Energy", given: "Volume \\( V = 0.05\\,\\mathrm{m^3} \\), Molecules \\( N = 1.0\\times 10^{24} \\), \\( K_{av} = 6.0\\times 10^{-21}\\,\\mathrm{J} \\).", find: "Pressure \\( P \\).", equation: "P = \\frac{2}{3}\\left(\\frac{N}{V}\\right)K_{av}", solution: "\\( P = \\frac{2}{3} \\times \\left(\\frac{1.0\\times 10^{24}}{0.05}\\right) \\times (6.0\\times 10^{-21}) = 80{,}000\\,\\mathrm{Pa} \\).", finalAnswer: "P = 8.0\\times 10^4\\,\\mathrm{Pa} \\; (80\\,\\mathrm{kPa})", explanation: "Gas pressure originates directly from kinetic energy density." },
                { title: "Ideal Gas State Calculation", given: "Moles \\( n = 2.0\\,\\mathrm{mol} \\), \\( T = 300\\,\\mathrm{K} \\), \\( V = 0.025\\,\\mathrm{m^3} \\), \\( R = 8.31\\,\\mathrm{J/(mol\\cdot K)} \\).", find: "Pressure \\( P \\).", equation: "P = \\frac{nRT}{V}", solution: "\\( P = \\frac{2.0 \\times 8.31 \\times 300}{0.025} = 199{,}440\\,\\mathrm{Pa} \\).", finalAnswer: "P \\approx 199.4\\,\\mathrm{kPa}", explanation: "The ideal gas equation interrelates P, V, n, and T." },
                { title: "Root-Mean-Square Speed of Oxygen", given: "Temperature \\( T = 300\\,\\mathrm{K} \\), Molar mass \\( M = 0.032\\,\\mathrm{kg/mol} \\), \\( R = 8.31\\,\\mathrm{J/(mol\\cdot K)} \\).", find: "RMS speed \\( v_{rms} \\).", equation: "v_{rms} = \\sqrt{\\frac{3RT}{M}}", solution: "\\( v_{rms} = \\sqrt{\\frac{3 \\times 8.31 \\times 300}{0.032}} \\approx 483.4\\,\\mathrm{m/s} \\).", finalAnswer: "v_{rms} \\approx 483\\,\\mathrm{m/s}", explanation: "At room temperature, oxygen molecules move at an average speed of 483 m/s." }
            ],
            equations: [
                { section: "Ideal Gas Law", name: "Equation of State", formula: "\\( PV = nRT = N k_B T \\)", symbols: [{ symbol: "P", desc: "Pressure (Pa)" }, { symbol: "V", desc: "Volume (m³)" }, { symbol: "n", desc: "Moles" }, { symbol: "R", desc: "Gas constant" }, { symbol: "T", desc: "Temp (K)" }] },
                { section: "Ideal Gas Law", name: "Combined Gas Law", formula: "\\( \\frac{P_1 V_1}{T_1} = \\frac{P_2 V_2}{T_2} \\)", symbols: [{ symbol: "P, V, T", desc: "Initial and final states" }] },
                { section: "Kinetic Energy & Speed", name: "Average Molecular Kinetic Energy", formula: "\\( K_{av} = \\frac{3}{2} k_B T \\)", symbols: [{ symbol: "K_av", desc: "Average KE (J)" }, { symbol: "k_B", desc: "Boltzmann constant" }, { symbol: "T", desc: "Temp (K)" }] },
                { section: "Kinetic Energy & Speed", name: "Total Gas Kinetic Energy", formula: "\\( K = \\frac{3}{2} nRT = \\frac{3}{2} PV \\)", symbols: [{ symbol: "K", desc: "Total KE (J)" }] },
                { section: "Kinetic Energy & Speed", name: "Root-Mean-Square Speed", formula: "\\( v_{rms} = \\sqrt{\\frac{3RT}{M}} = \\sqrt{\\frac{3k_B T}{m_0}} \\)", symbols: [{ symbol: "v_rms", desc: "RMS speed (m/s)" }, { symbol: "M", desc: "Molar mass (kg/mol)" }] }
            ],
            flashcards: [
                { front: "What is the Ideal Gas Law equation?", back: "\\( PV = nRT = N k_B T \\)" },
                { front: "What is the formula for average molecular kinetic energy?", back: "\\( K_{av} = \\frac{3}{2} k_B T \\)" },
                { front: "What is the formula for root-mean-square speed \\( v_{rms} \\)?", back: "\\( v_{rms} = \\sqrt{\\frac{3RT}{M}} \\)" },
                { front: "What is the Combined Gas Law?", back: "\\( \\frac{P_1 V_1}{T_1} = \\frac{P_2 V_2}{T_2} \\)" },
                { front: "What is the value of the Universal Gas Constant R?", back: "8.31 J/(mol·K)" }
            ],
            quiz: [
                { question: "The average kinetic energy of an ideal gas molecule depends solely on:", options: ["Pressure", "Volume", "Absolute temperature", "Gas density"], correctIndex: 2, feedback: "K_av = 1.5 k_B T, depending strictly on temperature T." },
                { question: "Which equation gives the root-mean-square speed of gas molecules?", options: ["\\( \\sqrt{3RT/M} \\)", "\\( 3RT/M \\)", "\\( \\sqrt{2RT/M} \\)", "\\( RT/M \\)"], correctIndex: 0, feedback: "v_rms = sqrt(3RT / M)." },
                { question: "In an isothermal process for an ideal gas, which quantity remains constant?", options: ["Pressure", "Volume", "Temperature", "Heat"], correctIndex: 2, feedback: "Isothermal means constant temperature (T1 = T2)." },
                { question: "The Combined Gas Law is represented by:", options: ["PV = nRT", "\\( \\frac{P_1 V_1}{T_1} = \\frac{P_2 V_2}{T_2} \\)", "P1 T1 = P2 T2", "V1 P1 = V2 P2"], correctIndex: 1, feedback: "(P1 V1)/T1 = (P2 V2)/T2 combines all standard gas laws." }
            ]
        },

        // --- Grade 12 Chapter 1 Lesson 2 ---
        {
            id: "g12-l2",
            gifUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Boyles_Law_animated.gif",
            worksheetUrl: "worksheets/ch1-l2-worksheet.pdf",
            games: [{ topic: "First Law of Thermodynamics", url: "https://gemini.google.com/share/9e34579d87cd" }],
            title: "Chapter 1 Lesson 2: First Law of Thermodynamics",
            concepts: [
                "First Law of Thermodynamics: Conservation of energy in thermodynamic systems, \\( Q = W + \\Delta U \\).",
                "Internal Energy (\\( U \\)): Depends solely on temperature for ideal gases, \\( \\Delta U = \\frac{3}{2}nR\\Delta T \\).",
                "Thermodynamic Work (\\( W \\)): Work done by expanding gas, \\( W = P\\Delta V \\) (isobaric).",
                "Special Processes: Isobaric (constant P), Isochoric (constant V, W = 0), Isothermal (constant T, ΔU = 0), and Adiabatic (Q = 0)."
            ],
            definitions: [
                { term: "First Law of Thermodynamics", definition: "Conservation of energy: heat added equals work done by system plus internal energy increase.", symbol: "Q = W + \\Delta U", unit: "\\mathrm{J}", equation: "Q = W + \\Delta U" },
                { term: "Internal Energy", definition: "Total microscopic thermal kinetic energy of all gas molecules.", symbol: "U", unit: "\\mathrm{J}", equation: "U = \\frac{3}{2}nRT" },
                { term: "Thermodynamic Work", definition: "Mechanical energy transferred during gas expansion.", symbol: "W", unit: "\\mathrm{J}", equation: "W = P\\Delta V" },
                { term: "Isobaric Process", definition: "State change occurring under constant pressure.", symbol: "P = \\text{const}", unit: "\\text{No unit}", equation: "W = P\\Delta V, \\; Q_p = \\frac{5}{2}nR\\Delta T" },
                { term: "Isochoric Process", definition: "State change inside a rigid container (constant volume, W = 0).", symbol: "V = \\text{const}", unit: "\\text{No unit}", equation: "W = 0, \\; Q_v = \\Delta U = \\frac{3}{2}nR\\Delta T" },
                { term: "Isothermal Process", definition: "State change occurring at constant temperature (ΔU = 0).", symbol: "T = \\text{const}", unit: "\\text{No unit}", equation: "Q = W = nRT\\ln\\left(\\frac{V_2}{V_1}\\right)" },
                { term: "Adiabatic Process", definition: "Process occurring with zero heat exchange (Q = 0).", symbol: "Q = 0", unit: "\\text{No unit}", equation: "W = -\\Delta U = \\frac{P_1 V_1 - P_2 V_2}{\\gamma - 1}" }
            ],
            examples: [
                { title: "First Law Energy Balance", given: "Gas absorbs \\( Q = 800\\,\\mathrm{J} \\) and does \\( W = 350\\,\\mathrm{J} \\) of work.", find: "Internal energy change \\( \\Delta U \\).", equation: "\\Delta U = Q - W", solution: "\\( \\Delta U = 800\\,\\mathrm{J} - 350\\,\\mathrm{J} = 450\\,\\mathrm{J} \\).", finalAnswer: "\\Delta U = +450\\,\\mathrm{J}", explanation: "Surplus absorbed heat increases the internal thermal energy of the gas." },
                { title: "Work in Isobaric Expansion", given: "Pressure \\( P = 2.0\\times 10^5\\,\\mathrm{Pa} \\), volume expands from \\( 0.010\\,\\mathrm{m^3} \\) to \\( 0.025\\,\\mathrm{m^3} \\).", find: "Work done \\( W \\).", equation: "W = P(V_2 - V_1)", solution: "\\( W = 2.0\\times 10^5 \\times 0.015 = 3000\\,\\mathrm{J} = 3.0\\,\\mathrm{kJ} \\).", finalAnswer: "W = 3.0\\,\\mathrm{kJ}", explanation: "Constant pressure expansion work is the product of pressure and volume change." }
            ],
            equations: [
                { section: "First Law", name: "First Law of Thermodynamics", formula: "\\( Q = W + \\Delta U \\)", symbols: [{ symbol: "Q", desc: "Heat added (J)" }, { symbol: "W", desc: "Work done (J)" }, { symbol: "ΔU", desc: "Internal energy change (J)" }] },
                { section: "Internal Energy", name: "Internal energy change", formula: "\\( \\Delta U = \\frac{3}{2} nR\\Delta T \\)", symbols: [{ symbol: "n", desc: "Moles" }, { symbol: "R", desc: "Gas constant" }, { symbol: "ΔT", desc: "Temp change (K)" }] },
                { section: "Processes", name: "Isobaric Work", formula: "\\( W = P \\Delta V \\)", symbols: [{ symbol: "P", desc: "Pressure (Pa)" }, { symbol: "ΔV", desc: "Volume change (m³)" }] },
                { section: "Processes", name: "Isothermal Work & Heat", formula: "\\( Q = W = nRT \\ln\\left(\\frac{V_2}{V_1}\\right) \\)", symbols: [{ symbol: "V2/V1", desc: "Expansion ratio" }] },
                { section: "Processes", name: "Adiabatic Work", formula: "\\( W = \\frac{P_1 V_1 - P_2 V_2}{\\gamma - 1} \\)", symbols: [{ symbol: "γ", desc: "Adiabatic index" }] }
            ],
            flashcards: [
                { front: "What is the First Law of Thermodynamics?", back: "\\( Q = W + \\Delta U \\)" },
                { front: "What is the work done in an isobaric process?", back: "\\( W = P \\Delta V \\)" },
                { front: "What is the work done in an isochoric process?", back: "\\( W = 0 \\)" },
                { front: "What is the change in internal energy during an isothermal process?", back: "\\( \\Delta U = 0 \\)" },
                { front: "What is an adiabatic process?", back: "A process where no heat is transferred into or out of the system (\\( Q = 0 \\))." }
            ],
            quiz: [
                { question: "In an isochoric process, the work done by the gas is:", options: ["PΔV", "nRT ln(V2/V1)", "0", "Positive"], correctIndex: 2, feedback: "Since volume is constant (ΔV = 0), work done is zero." },
                { question: "According to the First Law of Thermodynamics:", options: ["Q = W - ΔU", "Q = W + ΔU", "W = Q + ΔU", "ΔU = Q + W"], correctIndex: 1, feedback: "Heat added equals work done plus internal energy increase: Q = W + ΔU." },
                { question: "During an isothermal expansion of an ideal gas:", options: ["ΔU = 0", "W = 0", "Q = 0", "Pressure is constant"], correctIndex: 0, feedback: "Constant temperature means internal energy remains unchanged (ΔU = 0)." }
            ]
        },

        // --- Grade 12 Chapter 1 Lesson 3 ---
        {
            id: "g12-l3",
            gifUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Carnot_cycle.gif",
            worksheetUrl: "worksheets/ch1-l3-worksheet.pdf",
            games: [{ topic: "Heat Engine", url: "https://gemini.google.com/share/a6cfadc258e4" }],
            title: "Chapter 1 Lesson 3: Heat Engine",
            concepts: [
                "Heat Engine: Converts thermal energy from a hot reservoir into mechanical work, rejecting waste heat to a cold sink.",
                "Energy Conservation: \\( Q_h = W_M + Q_c \\).",
                "Carnot Cycle: Ideal reversible cycle giving theoretical maximum efficiency: \\( e_c = 1 - \\frac{T_c}{T_h} \\).",
                "Overall Efficiency: Combines Carnot efficiency and mechanical efficiency: \\( e = e_c \\times e_M = \\frac{W_U}{Q_h} \\)."
            ],
            definitions: [
                { term: "Heat Engine", definition: "A system that converts heat absorbed from a hot source into mechanical work, rejecting heat to a cold sink.", symbol: "\\text{Engine}", unit: "\\text{No unit}", equation: "Q_h = W_M + Q_c" },
                { term: "Hot Reservoir", definition: "Thermal reservoir at elevated temperature \\(T_h\\) supplying heat \\(Q_h\\).", symbol: "T_h", unit: "\\mathrm{K}", equation: "Q_h = W_M + Q_c" },
                { term: "Cold Reservoir", definition: "Low-temperature environment \\(T_c\\) absorbing exhaust heat \\(Q_c\\).", symbol: "T_c", unit: "\\mathrm{K}", equation: "Q_c = Q_h - W_M" },
                { term: "Carnot Efficiency", definition: "Theoretical upper limit of thermal efficiency between two temperatures.", symbol: "e_c", unit: "\\text{No unit}", equation: "e_c = 1 - \\frac{T_c}{T_h}" },
                { term: "Overall Efficiency", definition: "Fraction of fuel heat converted into useful output work.", symbol: "e", unit: "\\text{No unit}", equation: "e = e_c \\times e_M = \\frac{W_U}{Q_h}" }
            ],
            examples: [
                { title: "Energy Conservation in a Heat Engine", given: "Heat absorbed \\( Q_h = 2500\\,\\mathrm{J} \\), Mechanical work \\( W_M = 900\\,\\mathrm{J} \\).", find: "Waste heat rejected \\( Q_c \\).", equation: "Q_c = Q_h - W_M", solution: "\\( Q_c = 2500\\,\\mathrm{J} - 900\\,\\mathrm{J} = 1600\\,\\mathrm{J} \\).", finalAnswer: "Q_c = 1600\\,\\mathrm{J}", explanation: "Energy conservation requires heat input to balance mechanical output plus exhaust." },
                { title: "Carnot Theoretical Efficiency", given: "Hot reservoir \\( T_h = 800\\,\\mathrm{K} \\), Cold reservoir \\( T_c = 300\\,\\mathrm{K} \\).", find: "Carnot efficiency \\( e_c \\).", equation: "e_c = 1 - \\frac{T_c}{T_h}", solution: "\\( e_c = 1 - \\frac{300}{800} = 1 - 0.375 = 0.625 \\; (62.5\\%) \\).", finalAnswer: "e_c = 62.5\\%", explanation: "Maximum theoretical efficiency is limited by reservoir temperatures." }
            ],
            equations: [
                { section: "Heat Engine", name: "Energy Conservation", formula: "\\( Q_h = W_M + Q_c \\)", symbols: [{ symbol: "Q_h", desc: "Heat absorbed (J)" }, { symbol: "W_M", desc: "Work done (J)" }, { symbol: "Q_c", desc: "Heat rejected (J)" }] },
                { section: "Carnot Cycle", name: "Carnot Efficiency", formula: "\\( e_c = 1 - \\frac{Q_c}{Q_h} = 1 - \\frac{T_c}{T_h} \\)", symbols: [{ symbol: "e_c", desc: "Carnot efficiency" }, { symbol: "T_h, T_c", desc: "Hot/Cold temperatures (K)" }] },
                { section: "Overall Efficiency", name: "Overall Engine Efficiency", formula: "\\( e = e_c \\times e_M = \\frac{W_U}{Q_h} \\)", symbols: [{ symbol: "W_U", desc: "Useful output work (J)" }] }
            ],
            flashcards: [
                { front: "What is the conservation of energy for a heat engine?", back: "\\( Q_h = W_M + Q_c \\)" },
                { front: "What is the formula for Carnot efficiency?", back: "\\( e_c = 1 - \\frac{T_c}{T_h} \\)" },
                { front: "Can any real engine exceed the Carnot efficiency?", back: "No, Carnot efficiency is the theoretical maximum for any engine between those temperatures." }
            ],
            quiz: [
                { question: "What is the Carnot efficiency of an engine operating between 600 K and 300 K?", options: ["25%", "33%", "50%", "100%"], correctIndex: 2, feedback: "e_c = 1 - 300/600 = 0.5 or 50%." },
                { question: "In a heat engine, rejected waste heat is denoted by:", options: ["Q_h", "W_M", "Q_c", "e_c"], correctIndex: 2, feedback: "Q_c is the exhaust heat discharged to the cold reservoir." }
            ]
        },

        // --- Grade 12 Chapter 2 Lesson 1 ---
        {
            id: "g12-l4",
            gifUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Standing_wave_2.gif",
            worksheetUrl: "worksheets/ch2-l1-worksheet.pdf",
            games: [
                { topic: "Mechanical Waves", url: "https://gemini.google.com/share/2e83761df9b7" },
                { topic: "Standing Waves & Harmonics", url: "https://gemini.google.com/share/2e83761df9b7" }
            ],
            title: "Chapter 2 Lesson 1: Superposition and Standing Waves",
            concepts: [
                "Principle of Superposition: Resultant wave disturbance is the algebraic sum of individual displacements: \\( y = y_1 + y_2 \\).",
                "Sinusoidal Travelling Wave: Described by \\( y = a \\sin(\\omega t \\pm kx) \\) with wave speed \\( v = f\\lambda = \\frac{\\omega}{k} \\).",
                "Standing Wave Formation: Stationary vibrational pattern formed by interference of two identical waves traveling in opposite directions: \\( y = 2a \\sin(kx) \\cos(\\omega t) \\).",
                "Nodes: Points of permanently zero vibrational amplitude where \\( \\sin(kx) = 0 \\implies x_n = n \\frac{\\lambda}{2} \\).",
                "Antinodes: Points of maximum vibrational amplitude \\( 2a \\) where \\( x_n = (2n + 1) \\frac{\\lambda}{4} \\).",
                "Resonance in Strings: Fixed boundary conditions vibrate at harmonic frequencies \\( f_n = n \\frac{v}{2L} \\)."
            ],
            definitions: [
                { term: "Principle of Superposition", definition: "When two or more waves overlap, the resultant displacement at any point is the sum of the individual displacements.", symbol: "y = y_1 + y_2", unit: "\\mathrm{m}", equation: "y = y_1 + y_2" },
                { term: "Sinusoidal Travelling Wave", definition: "A smooth periodic disturbance propagating through space described by a sinusoidal function.", symbol: "y(x, t)", unit: "\\mathrm{m}", equation: "y = a \\sin(\\omega t \\pm kx)" },
                { term: "Wave Speed", definition: "Linear speed of wave propagation through the medium.", symbol: "v", unit: "\\mathrm{m/s}", equation: "v = f\\lambda = \\frac{\\omega}{k}" },
                { term: "Standing Wave", definition: "A stationary vibrational pattern formed by interference of two identical oppositely directed waves.", symbol: "\\text{Standing Wave}", unit: "\\mathrm{m}", equation: "y = 2a \\sin(kx) \\cos(\\omega t)" },
                { term: "Node", definition: "A point along a standing wave having permanently zero vibrational amplitude.", symbol: "A = 0", unit: "\\mathrm{m}", equation: "x_n = n \\frac{\\lambda}{2} \\quad (n = 0, 1, 2, \\dots)" },
                { term: "Antinode", definition: "A point along a standing wave experiencing peak constructive amplitude 2a.", symbol: "A = 2a", unit: "\\mathrm{m}", equation: "x_n = (2n + 1) \\frac{\\lambda}{4} \\quad (n = 0, 1, 2, \\dots)" },
                { term: "Fundamental Frequency", definition: "Lowest resonant frequency at which a string or pipe vibrates standing waves.", symbol: "f_1", unit: "\\mathrm{Hz}", equation: "f_1 = \\frac{v}{2L}" },
                { term: "Harmonic Frequencies", definition: "Integer multiples of the fundamental frequency produced in resonant standing wave cavities.", symbol: "f_n", unit: "\\mathrm{Hz}", equation: "f_n = n f_1 = n \\frac{v}{2L}" }
            ],
            examples: [
                { title: "Extracting Characteristics from Wave Equation", given: "Wave equation \\( y = 0.05\\sin(40\\pi t - 2\\pi x) \\) in SI units.", find: "Amplitude \\( a \\), Angular frequency \\( \\omega \\), Wave number \\( k \\), and Speed \\( v \\).", equation: "y = a\\sin(\\omega t - kx), \\quad v = \\frac{\\omega}{k}", solution: "1. \\( a = 0.05\\,\\mathrm{m} \\).<br>2. \\( \\omega = 40\\pi\\,\\mathrm{rad/s} \\).<br>3. \\( k = 2\\pi\\,\\mathrm{rad/m} \\).<br>4. \\( v = \\frac{40\\pi}{2\\pi} = 20\\,\\mathrm{m/s} \\).", finalAnswer: "a = 0.05\\,\\mathrm{m}, \\; \\omega = 40\\pi\\,\\mathrm{rad/s}, \\; k = 2\\pi\\,\\mathrm{rad/m}, \\; v = 20\\,\\mathrm{m/s}", explanation: "Comparing with standard form directly yields all wave constants." },
                { title: "Positions of Nodes on a Vibrating String", given: "Standing wave with wavelength \\( \\lambda = 0.60\\,\\mathrm{m} \\).", find: "Positions of first four nodes starting from \\( x = 0 \\).", equation: "x_n = n \\frac{\\lambda}{2}", solution: "\\( \\lambda/2 = 0.30\\,\\mathrm{m} \\).<br>For \\( n = 0, 1, 2, 3 \\): \\( x = 0\\,\\mathrm{m}, 0.30\\,\\mathrm{m}, 0.60\\,\\mathrm{m}, 0.90\\,\\mathrm{m} \\).", finalAnswer: "x = 0, \\; 0.30\\,\\mathrm{m}, \\; 0.60\\,\\mathrm{m}, \\; 0.90\\,\\mathrm{m}", explanation: "Adjacent nodes are spaced precisely by half a wavelength along the string." },
                { title: "Fundamental Resonant Frequency of a String", given: "String length \\( L = 0.80\\,\\mathrm{m} \\), wave speed \\( v = 240\\,\\mathrm{m/s} \\).", find: "Fundamental frequency \\( f_1 \\) and 3rd harmonic \\( f_3 \\).", equation: "f_n = n \\frac{v}{2L}", solution: "1. \\( f_1 = \\frac{240}{2(0.80)} = \\frac{240}{1.60} = 150\\,\\mathrm{Hz} \\).<br>2. \\( f_3 = 3 \\times 150\\,\\mathrm{Hz} = 450\\,\\mathrm{Hz} \\).", finalAnswer: "f_1 = 150\\,\\mathrm{Hz}, \\quad f_3 = 450\\,\\mathrm{Hz}", explanation: "The 3rd harmonic vibrates at three times the fundamental frequency." }
            ],
            equations: [
                { section: "Sinusoidal Wave", name: "Wave Equation", formula: "\\( y = a \\sin(\\omega t \\pm kx) \\)", symbols: [{ symbol: "y", desc: "Displacement (m)" }, { symbol: "a", desc: "Amplitude (m)" }, { symbol: "ω", desc: "Angular frequency (rad/s)" }, { symbol: "k", desc: "Wave number (rad/m)" }] },
                { section: "Wave Parameters", name: "Angular frequency, Wave number & Speed", formula: "\\( \\omega = 2\\pi f, \\quad k = \\frac{2\\pi}{\\lambda}, \\quad v = f\\lambda = \\frac{\\omega}{k} \\)", symbols: [{ symbol: "v", desc: "Speed (m/s)" }, { symbol: "λ", desc: "Wavelength (m)" }] },
                { section: "Standing Waves", name: "Standing Wave Equation", formula: "\\( y = 2a \\sin(kx) \\cos(\\omega t) \\)", symbols: [{ symbol: "2a", desc: "Peak amplitude (m)" }] },
                { section: "Nodes & Antinodes", name: "Node & Antinode Positions", formula: "\\( x_n = n \\frac{\\lambda}{2} \\; (\\text{Nodes}), \\quad x_n = (2n + 1) \\frac{\\lambda}{4} \\; (\\text{Antinodes}) \\)", symbols: [{ symbol: "x_n", desc: "Positions (m)" }] },
                { section: "Harmonics", name: "String Resonant Frequencies", formula: "\\( f_n = n \\frac{v}{2L} \\quad (n = 1, 2, 3, \\dots) \\)", symbols: [{ symbol: "f_n", desc: "Harmonic frequency (Hz)" }, { symbol: "L", desc: "Length (m)" }] }
            ],
            flashcards: [
                { front: "What is the principle of superposition?", back: "The resultant displacement of overlapping waves is the algebraic sum: \\( y = y_1 + y_2 \\)." },
                { front: "What is the sinusoidal travelling wave equation?", back: "\\( y = a \\sin(\\omega t \\pm kx) \\)" },
                { front: "What is the standing wave equation?", back: "\\( y = 2a \\sin(kx) \\cos(\\omega t) \\)" },
                { front: "Where do nodes occur in a standing wave?", back: "\\( x_n = n \\frac{\\lambda}{2} \\)" },
                { front: "What is the distance between two consecutive nodes?", back: "\\( \\frac{\\lambda}{2} \\) (half a wavelength)." },
                { front: "What is the formula for wave speed v?", back: "\\( v = f\\lambda = \\frac{\\omega}{k} \\)" }
            ],
            quiz: [
                { question: "At what positions does a standing wave have minimum amplitude (nodes)?", options: ["x = nλ", "x = nλ/2", "x = (2n+1)λ/4", "x = nλ/4"], correctIndex: 1, feedback: "Nodes occur where sin(kx) = 0, yielding x = nλ/2." },
                { question: "The distance between a node and the nearest adjacent antinode is:", options: ["λ", "λ / 2", "λ / 4", "2λ"], correctIndex: 2, feedback: "Adjacent node and antinode are separated by a quarter wavelength: λ/4." },
                { question: "Which formula defines the wave number k?", options: ["2π / ω", "2π / λ", "λ / T", "2π f"], correctIndex: 1, feedback: "Wave number relates to wavelength: k = 2π / λ." },
                { question: "Wave speed can be computed using:", options: ["k / ω", "ω / k", "ω × k", "T / λ"], correctIndex: 1, feedback: "v = ω / k = fλ." }
            ]
        },

        // --- Grade 12 Chapter 2 Lesson 2 ---
        {
            id: "g12-interf",
            gifUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Two_sources_interference.gif",
            worksheetUrl: "worksheets/ch2-l2-worksheet.pdf",
            games: [{ topic: "Interference and Diffraction", url: "https://gemini.google.com/share/14c6c1b23c4d" }],
            title: "Chapter 2 Lesson 2: Interference and Diffraction",
            concepts: [
                "Interference: Overlapping of two coherent waves altering resultant amplitude.",
                "Constructive Interference: In-phase superposition producing maximum intensity when path difference \\( \\Delta d = n\\lambda \\).",
                "Destructive Interference: Out-of-phase superposition cancelling amplitude when \\( \\Delta d = (2n+1)\\frac{\\lambda}{2} \\).",
                "Young's Double-Slit: Produces bright fringes at \\( d\\sin\\theta = m\\lambda \\) and fringe spacing \\( \\Delta y = \\frac{L\\lambda}{d} \\).",
                "Diffraction: Spreading of light through a slit of width a with dark minima at \\( a\\sin\\theta = m\\lambda \\)."
            ],
            definitions: [
                { term: "Interference of Waves", definition: "Phenomenon occurring when coherent waves superpose to form modified resultant amplitude.", symbol: "\\text{Interference}", unit: "\\text{No unit}", equation: "y = y_1 + y_2" },
                { term: "Coherent Sources", definition: "Wave sources maintaining identical frequency, wavelength, and constant phase difference.", symbol: "\\Delta\\phi = \\text{const}", unit: "\\text{No unit}", equation: "\\Delta\\phi = \\text{constant}" },
                { term: "Path Difference", definition: "Difference in distance traveled by waves from their respective sources to a given point.", symbol: "\\Delta d", unit: "\\mathrm{m}", equation: "\\Delta d = d\\sin\\theta" },
                { term: "Constructive Interference", definition: "Reinforcement occurring when waves arrive in phase.", symbol: "\\text{Max}", unit: "\\mathrm{m}", equation: "d_2 - d_1 = n\\lambda" },
                { term: "Destructive Interference", definition: "Cancellation occurring when waves arrive half a cycle out of phase.", symbol: "\\text{Min}", unit: "\\mathrm{m}", equation: "d_2 - d_1 = (2n + 1)\\frac{\\lambda}{2}" },
                { term: "Fringe Spacing", definition: "Constant distance between two consecutive bright or dark fringes on a screen.", symbol: "\\Delta y", unit: "\\mathrm{m}", equation: "\\Delta y = \\frac{L\\lambda}{d}" },
                { term: "Single-Slit Diffraction Minima", definition: "Angular positions of dark bands in diffraction through slit of width a.", symbol: "\\theta_{min}", unit: "{^\\circ}", equation: "a\\sin\\theta = m\\lambda" }
            ],
            examples: [
                { title: "Young's Double-Slit Fringe Spacing", given: "Slit separation \\( d = 0.25\\,\\mathrm{mm} = 2.5\\times 10^{-4}\\,\\mathrm{m} \\), screen distance \\( L = 1.5\\,\\mathrm{m} \\), wavelength \\( \\lambda = 600\\,\\mathrm{nm} = 6.0\\times 10^{-7}\\,\\mathrm{m} \\).", find: "Fringe spacing \\( \\Delta y \\).", equation: "\\Delta y = \\frac{L\\lambda}{d}", solution: "\\( \\Delta y = \\frac{1.5 \\times 6.0\\times 10^{-7}}{2.5\\times 10^{-4}} = \\frac{9.0\\times 10^{-7}}{2.5\\times 10^{-4}} = 3.6\\times 10^{-3}\\,\\mathrm{m} = 3.6\\,\\mathrm{mm} \\).", finalAnswer: "\\Delta y = 3.6\\,\\mathrm{mm}", explanation: "Consecutive bright fringes are spaced 3.6 mm apart on the observation screen." }
            ],
            equations: [
                { section: "Interference Conditions", name: "Constructive & Destructive", formula: "\\( \\Delta d = n\\lambda \\; (\\text{Bright}), \\quad \\Delta d = (2n + 1)\\frac{\\lambda}{2} \\; (\\text{Dark}) \\)", symbols: [{ symbol: "Δd", desc: "Path difference (m)" }, { symbol: "λ", desc: "Wavelength (m)" }] },
                { section: "Double Slit", name: "Young's Double-Slit Formula", formula: "\\( d\\sin\\theta = m\\lambda, \\quad \\Delta y = \\frac{L\\lambda}{d} \\)", symbols: [{ symbol: "d", desc: "Slit separation (m)" }, { symbol: "L", desc: "Screen distance (m)" }, { symbol: "Δy", desc: "Fringe width (m)" }] },
                { section: "Diffraction", name: "Single-Slit Diffraction Minima", formula: "\\( a\\sin\\theta = m\\lambda \\)", symbols: [{ symbol: "a", desc: "Slit width (m)" }] }
            ],
            flashcards: [
                { front: "What is the condition for constructive interference?", back: "Path difference \\( \\Delta d = n\\lambda \\) (integer number of wavelengths)." },
                { front: "What is the condition for destructive interference?", back: "Path difference \\( \\Delta d = (2n+1)\\frac{\\lambda}{2} \\) (odd half-wavelengths)." },
                { front: "What is the formula for fringe width in Young's experiment?", back: "\\( \\Delta y = \\frac{L\\lambda}{d} \\)" }
            ],
            quiz: [
                { question: "In Young's experiment, increasing the screen distance L causes fringe spacing to:", options: ["Increase", "Decrease", "Stay the same", "Disappear"], correctIndex: 0, feedback: "Δy = Lλ / d, so fringe width increases proportionally with L." },
                { question: "Destructive interference occurs when the path difference equals:", options: ["nλ", "(2n+1)λ/2", "nλ/2", "2nλ"], correctIndex: 1, feedback: "Odd multiples of half a wavelength cause crests to meet troughs." }
            ]
        },

        // --- Grade 12 Chapter 3 Lesson 1 ---
        {
            id: "g12-l5",
            gifUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Electric-generator-animation.gif",
            worksheetUrl: "worksheets/ch3-l1-worksheet.pdf",
            games: [
                { topic: "Magnetic Field", url: "https://gemini.google.com/share/8a653df6b614" },
                { topic: "Faraday’s Law", url: "https://gemini.google.com/share/a36b992c1d6d" },
                { topic: "Self Induction", url: "https://gemini.google.com/share/ae9787424975" }
            ],
            title: "Chapter 3 Lesson 1: Magnetism, Electromagnetic Induction and Self Induction",
            concepts: [
                "Magnetic Fields: Produced by straight wires, coils, and solenoids.",
                "Lorentz & Laplace Forces: \\( F = |q|vB\\sin\\theta \\) and \\( F = IlB\\sin\\theta \\).",
                "Faraday's & Lenz's Laws: Induced emf opposes flux change, \\( e = -\\frac{d\\Phi}{dt} \\).",
                "Self-Induction: Back-emf \\( e = -L\\frac{dI}{dt} \\) in an inductor.",
                "RL Circuit: Current growth \\( i = I_p(1 - e^{-t/\\tau}) \\) and decay \\( i = I_p e^{-t/\\tau} \\) with \\( \\tau = \\frac{L}{R} \\)."
            ],
            definitions: [
                { term: "Magnetic Field (Straight Wire)", definition: "Concentric circular magnetic field around a straight conductor.", symbol: "B", unit: "\\mathrm{T}", equation: "B = \\frac{\\mu_0 I}{2\\pi d}" },
                { term: "Lorentz Force", definition: "Deflecting magnetic force on a moving charge.", symbol: "F", unit: "\\mathrm{N}", equation: "F = |q|vB\\sin\\theta" },
                { term: "Cyclotron Radius", definition: "Orbital radius of a charged particle in a magnetic field.", symbol: "R", unit: "\\mathrm{m}", equation: "R = \\frac{mv}{|q|B}" },
                { term: "Magnetic Flux", definition: "Measure of total magnetic field threading an area.", symbol: "\\Phi", unit: "\\mathrm{Wb}", equation: "\\Phi = NBA\\cos\\theta" },
                { term: "Faraday's Law", definition: "Electromotive force induced by time-varying magnetic flux.", symbol: "e", unit: "\\mathrm{V}", equation: "e = -\\frac{d\\Phi}{dt}" },
                { term: "Self-Inductance", definition: "Back-emf induced by time-varying current in a coil.", symbol: "L", unit: "\\mathrm{H}", equation: "e = -L\\frac{dI}{dt}" },
                { term: "RL Time Constant", definition: "Time for current to build to 63.2% or decay to 36.8%.", symbol: "\\tau", unit: "\\mathrm{s}", equation: "\\tau = \\frac{L}{R}" }
            ],
            examples: [
                { title: "Lorentz Force on a Proton", given: "Charge \\( q = 1.6\\times 10^{-19}\\,\\mathrm{C} \\), velocity \\( v = 2.5\\times 10^6\\,\\mathrm{m/s} \\), field \\( B = 0.80\\,\\mathrm{T} \\), \\( \\theta = 30^\\circ \\).", find: "Force \\( F \\).", equation: "F = qvB\\sin\\theta", solution: "\\( F = (1.6\\times 10^{-19}) \\times (2.5\\times 10^6) \\times 0.80 \\times 0.5 = 1.6\\times 10^{-13}\\,\\mathrm{N} \\).", finalAnswer: "F = 1.6\\times 10^{-13}\\,\\mathrm{N}", explanation: "The magnetic force acts perpendicular to the velocity and magnetic field vectors." },
                { title: "RL Circuit Time Constant and Growth", given: "Battery \\( V = 24\\,\\mathrm{V} \\), \\( R = 12\\,\\Omega \\), \\( L = 0.060\\,\\mathrm{H} \\).", find: "Time constant \\( \\tau \\) and peak current \\( I_p \\).", equation: "\\tau = \\frac{L}{R}, \\quad I_p = \\frac{V}{R}", solution: "1. \\( \\tau = \\frac{0.060}{12} = 0.0050\\,\\mathrm{s} = 5.0\\,\\mathrm{ms} \\).<br>2. \\( I_p = \\frac{24}{12} = 2.0\\,\\mathrm{A} \\).", finalAnswer: "\\tau = 5.0\\,\\mathrm{ms}, \\quad I_p = 2.0\\,\\mathrm{A}", explanation: "The inductor opposes immediate current surge, reaching 63.2% after 5 ms." }
            ],
            equations: [
                { section: "Magnetic Fields", name: "Biot-Savart Straight Wire", formula: "\\( B = \\frac{\\mu_0 I}{2\\pi d} \\)", symbols: [{ symbol: "B", desc: "Field (T)" }, { symbol: "I", desc: "Current (A)" }, { symbol: "d", desc: "Distance (m)" }] },
                { section: "Magnetic Forces", name: "Lorentz Force", formula: "\\( F = |q|vB\\sin\\theta \\)", symbols: [{ symbol: "F", desc: "Force (N)" }, { symbol: "q", desc: "Charge (C)" }] },
                { section: "Induction", name: "Faraday's Law", formula: "\\( e = -\\frac{d\\Phi}{dt}, \\quad \\Phi = NBA\\cos\\theta \\)", symbols: [{ symbol: "e", desc: "Induced emf (V)" }, { symbol: "Φ", desc: "Flux (Wb)" }] },
                { section: "Self-Induction", name: "Back-EMF & RL Constant", formula: "\\( e = -L\\frac{dI}{dt}, \\quad \\tau = \\frac{L}{R} \\)", symbols: [{ symbol: "L", desc: "Inductance (H)" }, { symbol: "τ", desc: "Time constant (s)" }] }
            ],
            flashcards: [
                { front: "What is Faraday's law of electromagnetic induction?", back: "\\( e = -\\frac{d\\Phi}{dt} \\)" },
                { front: "What is the formula for the time constant in an RL circuit?", back: "\\( \\tau = \\frac{L}{R} \\)" },
                { front: "What is the Lorentz force formula?", back: "\\( F = |q|vB\\sin\\theta \\)" }
            ],
            quiz: [
                { question: "Self-induced emf in an inductor is directly proportional to:", options: ["Current I", "Voltage V", "Rate of current change dI/dt", "Resistance R"], correctIndex: 2, feedback: "e = -L (dI/dt)." },
                { question: "The time constant τ of an RL circuit is given by:", options: ["R / L", "L / R", "L × R", "1 / (LR)"], correctIndex: 1, feedback: "τ = L / R." }
            ]
        },

        // --- Grade 12 Chapter 3 Lesson 2 ---
        {
            id: "g12-l6",
            gifUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Alternating_current_ani.gif",
            worksheetUrl: "worksheets/ch3-l2-worksheet.pdf",
            games: [{ topic: "Alternating Current", url: "https://gemini.google.com/share/0c850ab5a53b" }],
            title: "Chapter 3 Lesson 2: Alternating Currents",
            concepts: [
                "AC Waveforms: Sinusoidal current and voltage with RMS values \\( I = \\frac{I_m}{\\sqrt{2}} \\), \\( V = \\frac{V_m}{\\sqrt{2}} \\).",
                "Reactance: Inductive reactance \\( Z_L = L\\omega \\); capacitive reactance \\( Z_C = \\frac{1}{C\\omega} \\).",
                "RLC Impedance: Total opposition \\( Z = \\sqrt{R^2 + (Z_L - Z_C)^2} \\) with Ohm's law \\( I = \\frac{V}{Z} \\).",
                "Power in AC: Active power \\( P = VI\\cos\\phi \\) with power factor \\( \\cos\\phi = \\frac{R}{Z} \\)."
            ],
            definitions: [
                { term: "RMS Current", definition: "Effective DC heating equivalent of alternating current.", symbol: "I", unit: "\\mathrm{A}", equation: "I = \\frac{I_m}{\\sqrt{2}}" },
                { term: "RMS Voltage", definition: "Effective value of alternating potential difference.", symbol: "V", unit: "\\mathrm{V}", equation: "V = \\frac{V_m}{\\sqrt{2}}" },
                { term: "Inductive Reactance", definition: "Opposition offered by an inductor to AC flow.", symbol: "Z_L", unit: "\\Omega", equation: "Z_L = L\\omega = 2\\pi f L" },
                { term: "Capacitive Reactance", definition: "Opposition offered by a capacitor to AC flow.", symbol: "Z_C", unit: "\\Omega", equation: "Z_C = \\frac{1}{C\\omega}" },
                { term: "Impedance", definition: "Total combined opposition to AC current in an RLC circuit.", symbol: "Z", unit: "\\Omega", equation: "Z = \\sqrt{R^2 + (Z_L - Z_C)^2}" },
                { term: "Power Factor", definition: "Cosine of phase angle indicating active power fraction.", symbol: "\\cos\\phi", unit: "\\text{No unit}", equation: "\\cos\\phi = \\frac{R}{Z}" }
            ],
            examples: [
                { title: "RMS to Peak Voltage Conversion", given: "Rated mains voltage \\( V = 230\\,\\mathrm{V} \\).", find: "Peak voltage \\( V_m \\).", equation: "V_m = V\\sqrt{2}", solution: "\\( V_m = 230 \\times 1.4142 \\approx 325\\,\\mathrm{V} \\).", finalAnswer: "V_m \\approx 325\\,\\mathrm{V}", explanation: "A nominal 230 V RMS AC supply oscillates between +325 V and -325 V peak." },
                { title: "RLC Series Circuit Impedance", given: "Resistance \\( R = 40\\,\\Omega \\), \\( Z_L = 100\\,\\Omega \\), \\( Z_C = 70\\,\\Omega \\).", find: "Impedance \\( Z \\).", equation: "Z = \\sqrt{R^2 + (Z_L - Z_C)^2}", solution: "\\( Z = \\sqrt{40^2 + (100 - 70)^2} = \\sqrt{1600 + 900} = 50\\,\\Omega \\).", finalAnswer: "Z = 50\\,\\Omega", explanation: "Pythagorean combination of resistance and net reactance." }
            ],
            equations: [
                { section: "AC Fundamentals", name: "RMS Relations & Ohm's Law", formula: "\\( I = \\frac{I_m}{\\sqrt{2}}, \\quad V = \\frac{V_m}{\\sqrt{2}}, \\quad I = \\frac{V}{Z} \\)", symbols: [{ symbol: "I, V", desc: "RMS values" }, { symbol: "Z", desc: "Impedance (Ω)" }] },
                { section: "Reactance & Impedance", name: "Reactance and Impedance Formulas", formula: "\\( Z_L = L\\omega, \\quad Z_C = \\frac{1}{C\\omega}, \\quad Z = \\sqrt{R^2 + (Z_L - Z_C)^2} \\)", symbols: [{ symbol: "Z_L, Z_C", desc: "Reactances (Ω)" }] },
                { section: "AC Power", name: "Active Power & Factor", formula: "\\( P = VI \\cos\\phi, \\quad \\cos\\phi = \\frac{R}{Z} \\)", symbols: [{ symbol: "P", desc: "Power (W)" }, { symbol: "cosφ", desc: "Power factor" }] }
            ],
            flashcards: [
                { front: "What is the relation between RMS and peak voltage?", back: "\\( V = \\frac{V_m}{\\sqrt{2}} \\)" },
                { front: "What is the formula for inductive reactance \\( Z_L \\)?", back: "\\( Z_L = L\\omega = 2\\pi f L \\)" },
                { front: "What is the formula for capacitive reactance \\( Z_C \\)?", back: "\\( Z_C = \\frac{1}{C\\omega} \\)" },
                { front: "What is the total impedance in an RLC series circuit?", back: "\\( Z = \\sqrt{R^2 + (Z_L - Z_C)^2} \\)" }
            ],
            quiz: [
                { question: "In an RLC series circuit at resonance (Z_L = Z_C), the impedance Z equals:", options: ["Zero", "R", "Infinite", "R²"], correctIndex: 1, feedback: "When Z_L = Z_C, the reactive terms cancel, leaving Z = R." },
                { question: "The power factor in an AC circuit is given by:", options: ["R / Z", "Z / R", "Z_L / Z_C", "V / I"], correctIndex: 0, feedback: "Power factor cos φ = R / Z." }
            ]
        },

        // --- Grade 12 Chapter 4 Lesson 1 ---
        {
            id: "g12-ch4-l1",
            gifUrl: "",
            worksheetUrl: "worksheets/ch4-l1-worksheet.pdf",
            games: [],
            title: "Chapter 4 Lesson 1: Semiconductors & Transistors",
            concepts: [
                "Semiconductors: Material whose conductivity lies between conductors and insulators (doped N-type with electrons, P-type with holes).",
                "P-N Junction: Forward bias reduces depletion zone allowing current; reverse bias widens barrier blocking current.",
                "Transistors: Three-terminal devices (Emitter, Base, Collector) satisfying \\( I_E = I_B + I_C \\).",
                "Current Amplification: Common-emitter gain \\( \\beta = \\frac{I_C}{I_B} \\) and common-base gain \\( \\alpha = \\frac{I_C}{I_E} = \\frac{\\beta}{\\beta + 1} \\)."
            ],
            definitions: [
                { term: "Semiconductor", definition: "Material whose electrical conductivity can be controlled via doping.", symbol: "\\text{Semiconductor}", unit: "\\text{No unit}", equation: "R = \\rho \\frac{l}{A}" },
                { term: "Transistor Current Conservation", definition: "Total emitter current equals sum of base and collector currents.", symbol: "I_E", unit: "\\mathrm{A}", equation: "I_E = I_B + I_C" },
                { term: "Common-Emitter Current Gain", definition: "Ratio of output collector current to input base current.", symbol: "\\beta", unit: "\\text{No unit}", equation: "\\beta = \\frac{I_C}{I_B}" },
                { term: "Common-Base Current Gain", definition: "Ratio of collector current to emitter current.", symbol: "\\alpha", unit: "\\text{No unit}", equation: "\\alpha = \\frac{I_C}{I_E} = \\frac{\\beta}{\\beta + 1}" }
            ],
            examples: [
                { title: "Transistor Current Conservation", given: "Base current \\( I_B = 0.050\\,\\mathrm{mA} \\), collector current \\( I_C = 4.95\\,\\mathrm{mA} \\).", find: "Emitter current \\( I_E \\).", equation: "I_E = I_B + I_C", solution: "\\( I_E = 0.050 + 4.95 = 5.00\\,\\mathrm{mA} \\).", finalAnswer: "I_E = 5.00\\,\\mathrm{mA}", explanation: "Current conservation requires emitter current to equal base plus collector current." },
                { title: "Common-Emitter Gain Calculation", given: "Base current \\( I_B = 40\\,\\mu\\mathrm{A} \\), collector current \\( I_C = 4.0\\,\\mathrm{mA} \\).", find: "Gain \\( \\beta \\).", equation: "\\beta = \\frac{I_C}{I_B}", solution: "\\( \\beta = \\frac{4.0\\times 10^{-3}}{40\\times 10^{-6}} = 100 \\).", finalAnswer: "\\beta = 100", explanation: "A gain of 100 multiplies the small control base current into large collector current." }
            ],
            equations: [
                { section: "Semiconductor", name: "Resistance and Resistivity", formula: "\\( R = \\rho \\frac{l}{A} \\)", symbols: [{ symbol: "ρ", desc: "Resistivity (Ω·m)" }] },
                { section: "Transistor", name: "Current Conservation", formula: "\\( I_E = I_B + I_C \\)", symbols: [{ symbol: "I_E, I_B, I_C", desc: "Transistor currents (A)" }] },
                { section: "Transistor Gains", name: "Current Gain Ratios", formula: "\\( \\beta = \\frac{I_C}{I_B}, \\quad \\alpha = \\frac{I_C}{I_E} = \\frac{\\beta}{\\beta + 1} \\)", symbols: [{ symbol: "β, α", desc: "Current gains" }] }
            ],
            flashcards: [
                { front: "What is the relationship between transistor currents?", back: "\\( I_E = I_B + I_C \\)" },
                { front: "What is common-emitter current gain β?", back: "\\( \\beta = \\frac{I_C}{I_B} \\)" },
                { front: "What are majority carriers in N-type semiconductors?", back: "Electrons" }
            ],
            quiz: [
                { question: "If I_E = 10 mA and I_B = 0.1 mA, what is the collector current I_C?", options: ["10.1 mA", "9.9 mA", "100 mA", "0.01 mA"], correctIndex: 1, feedback: "I_C = I_E - I_B = 10 - 0.1 = 9.9 mA." },
                { question: "The common-emitter current gain β is defined as:", options: ["I_C / I_E", "I_E / I_B", "I_C / I_B", "I_B / I_C"], correctIndex: 2, feedback: "β is the ratio of collector current to base current." }
            ]
        },

        // --- Grade 12 Chapter 4 Lesson 2 ---
        {
            id: "g12-ch4-l2",
            gifUrl: "",
            worksheetUrl: "worksheets/ch4-l2-worksheet.pdf",
            games: [],
            title: "Chapter 4 Lesson 2: Special Theory of Relativity",
            concepts: [
                "Inertial Frames: Frames moving at constant velocity where Newton's laws are valid.",
                "Michelson-Morley Experiment: Null result proved the speed of light is invariant in all directions without ether.",
                "Einstein's Postulates: 1. Physics laws are universal in all inertial frames. 2. Speed of light c is constant for all observers.",
                "Lorentz Factor: \\( \\gamma = \\frac{1}{\\sqrt{1 - \\frac{u^2}{c^2}}} \\ge 1 \\).",
                "Relativistic Transformations: Spacetime transforms via \\( x' = \\gamma(x - ut) \\), \\( t' = \\gamma\\left(t - \\frac{ux}{c^2}\\right) \\)."
            ],
            definitions: [
                { term: "Speed of Light in Vacuum", definition: "Universal physical invariant speed limit.", symbol: "c", unit: "\\mathrm{m/s}", equation: "c \\approx 3.0\\times 10^8\\,\\mathrm{m/s}" },
                { term: "Lorentz Factor", definition: "Relativistic scaling factor for time dilation and length contraction.", symbol: "\\gamma", unit: "\\text{No unit}", equation: "\\gamma = \\frac{1}{\\sqrt{1 - \\frac{u^2}{c^2}}}" },
                { term: "Lorentz Spatial Coordinate", definition: "Relativistic position transformation between moving frames.", symbol: "x'", unit: "\\mathrm{m}", equation: "x' = \\gamma(x - ut)" },
                { term: "Lorentz Time Coordinate", definition: "Relativistic time transformation showing relativity of simultaneity.", symbol: "t'", unit: "\\mathrm{s}", equation: "t' = \\gamma\\left(t - \\frac{ux}{c^2}\\right)" },
                { term: "Relativistic Velocity Addition", definition: "Velocity combination ensuring no physical object exceeds c.", symbol: "v_x'", unit: "\\mathrm{m/s}", equation: "v_x' = \\frac{v_x - u}{1 - \\frac{u v_x}{c^2}}" }
            ],
            examples: [
                { title: "Lorentz Factor Calculation", given: "Particle travels at \\( u = 0.80c \\).", find: "Lorentz factor \\( \\gamma \\).", equation: "\\gamma = \\frac{1}{\\sqrt{1 - u^2/c^2}}", solution: "\\( \\sqrt{1 - (0.80)^2} = \\sqrt{1 - 0.64} = 0.60 \\implies \\gamma = \\frac{1}{0.60} = 1.667 \\).", finalAnswer: "\\gamma \\approx 1.67", explanation: "At 80% light speed, time dilates and space contracts by factor 1.67." },
                { title: "Relativistic Velocity Addition", given: "Spaceship moves at \\( u = 0.70c \\) and fires a probe forward at \\( v_x' = 0.60c \\).", find: "Probe speed relative to Earth \\( v_x \\).", equation: "v_x = \\frac{v_x' + u}{1 + \\frac{u v_x'}{c^2}}", solution: "\\( v_x = \\frac{0.60c + 0.70c}{1 + (0.70)(0.60)} = \\frac{1.30c}{1.42} \\approx 0.915c \\).", finalAnswer: "v_x \\approx 0.915c", explanation: "Relativistic addition ensures total velocity remains below c." }
            ],
            equations: [
                { section: "Lorentz Transformation", name: "Lorentz Factor", formula: "\\( \\gamma = \\frac{1}{\\sqrt{1 - \\frac{u^2}{c^2}}} \\)", symbols: [{ symbol: "γ", desc: "Lorentz Factor" }, { symbol: "u", desc: "Frame velocity (m/s)" }] },
                { section: "Lorentz Transformation", name: "Space & Time Transformations", formula: "\\( x' = \\gamma(x - ut), \\quad t' = \\gamma\\left(t - \\frac{ux}{c^2}\\right) \\)", symbols: [{ symbol: "x', t'", desc: "Transformed coordinates" }] },
                { section: "Velocity Addition", name: "Relativistic Velocity", formula: "\\( v_x' = \\frac{v_x - u}{1 - \\frac{u v_x}{c^2}} \\)", symbols: [{ symbol: "v_x'", desc: "Velocity in S'" }] }
            ],
            flashcards: [
                { front: "What is the formula for the Lorentz factor γ?", back: "\\( \\gamma = \\frac{1}{\\sqrt{1 - \\frac{u^2}{c^2}}} \\)" },
                { front: "What was the result of the Michelson-Morley experiment?", back: "Null result — proving light speed is constant with no ether." },
                { front: "What happens to γ as velocity approaches light speed c?", back: "γ approaches infinity." }
            ],
            quiz: [
                { question: "According to Einstein's second postulate, the speed of light in vacuum is:", options: ["Dependent on source speed", "Dependent on observer speed", "Constant for all inertial observers", "Infinite"], correctIndex: 2, feedback: "Light speed c is invariant for all observers." },
                { question: "When u << c, the Lorentz factor γ approaches:", options: ["0", "1", "Infinity", "c"], correctIndex: 1, feedback: "At low speeds, γ approaches 1, reverting to Newtonian mechanics." }
            ]
        },

        // --- Grade 12 Chapter 4 Lesson 3 ---
        {
            id: "g12-ch4-l3",
            gifUrl: "",
            worksheetUrl: "worksheets/ch4-l3-worksheet.pdf",
            games: [],
            title: "Chapter 4 Lesson 3: Atomic Structure",
            concepts: [
                "Cathode Rays: Thomson measured electron specific charge \\( e/m \\).",
                "Rutherford's Nucleus: Alpha scattering proved atoms contain a dense positive nucleus.",
                "Photoelectric Effect: Light travels as photons with energy \\( E = hf \\). Electrons are emitted when \\( hf \\ge E_0 \\).",
                "Einstein's Photoelectric Equation: \\( K_{max} = hf - E_0 = eV_s \\).",
                "Bohr Model: Quantized electron orbits; photon emission on transition: \\( \\Delta E = E_2 - E_1 = hf \\)."
            ],
            definitions: [
                { term: "Charge-to-Mass Ratio (e/m)", definition: "Specific charge of the electron measured by J.J. Thomson.", symbol: "e/m", unit: "\\mathrm{C/kg}", equation: "\\frac{q}{m} = \\frac{Z E}{D l B^2}" },
                { term: "Photon", definition: "Quantum packet of light energy.", symbol: "E", unit: "\\mathrm{J}", equation: "E = hf = \\frac{hc}{\\lambda}" },
                { term: "Work Function", definition: "Minimum binding energy required to liberate an electron from metal.", symbol: "E_0", unit: "\\mathrm{J} \\; (\\text{or eV})", equation: "E_0 = hf_0" },
                { term: "Photoelectric Equation", definition: "Maximum kinetic energy of ejected photoelectrons.", symbol: "K_{max}", unit: "\\mathrm{J}", equation: "K_{max} = hf - E_0 = eV_s" },
                { term: "Stopping Potential", definition: "Retarding potential required to reduce photocurrent to zero.", symbol: "V_s", unit: "\\mathrm{V}", equation: "K_{max} = eV_s" }
            ],
            examples: [
                { title: "Photoelectric Kinetic Energy", given: "UV light frequency \\( f = 1.0\\times 10^{15}\\,\\mathrm{Hz} \\), work function \\( E_0 = 2.30\\,\\mathrm{eV} = 3.685\\times 10^{-19}\\,\\mathrm{J} \\), \\( h = 6.626\\times 10^{-34}\\,\\mathrm{J\\cdot s} \\).", find: "Max kinetic energy \\( K_{max} \\).", equation: "K_{max} = hf - E_0", solution: "1. \\( hf = 6.626\\times 10^{-19}\\,\\mathrm{J} = 4.14\\,\\mathrm{eV} \\).<br>2. \\( K_{max} = 4.14 - 2.30 = 1.84\\,\\mathrm{eV} \\).", finalAnswer: "K_{max} = 1.84\\,\\mathrm{eV} \\; (2.94\\times 10^{-19}\\,\\mathrm{J})", explanation: "Conservation of energy on a single photon-electron collision basis." },
                { title: "Stopping Potential Calculation", given: "Max photoelectron energy \\( K_{max} = 1.84\\,\\mathrm{eV} \\).", find: "Stopping potential \\( V_s \\).", equation: "K_{max} = eV_s \\implies V_s = \\frac{K_{max}}{e}", solution: "\\( V_s = 1.84\\,\\mathrm{V} \\).", finalAnswer: "V_s = 1.84\\,\\mathrm{V}", explanation: "A retarding voltage of 1.84 V performs sufficient negative work to stop the electrons." }
            ],
            equations: [
                { section: "Cathode Rays", name: "Thomson e/m Ratio", formula: "\\( \\frac{q}{m} = \\frac{ZE}{DlB^2} \\)", symbols: [{ symbol: "q/m", desc: "Charge to mass (C/kg)" }] },
                { section: "Photoelectric Effect", name: "Einstein's Equation", formula: "\\( K_{max} = hf - E_0 = eV_s \\)", symbols: [{ symbol: "K_max", desc: "Max KE (J)" }, { symbol: "E_0", desc: "Work function (J)" }, { symbol: "V_s", desc: "Stopping potential (V)" }] },
                { section: "Bohr Model", name: "Energy Transition", formula: "\\( \\Delta E = E_2 - E_1 = hf = \\frac{hc}{\\lambda} \\)", symbols: [{ symbol: "ΔE", desc: "Energy gap (J)" }] }
            ],
            flashcards: [
                { front: "What is Einstein's photoelectric equation?", back: "\\( K_{max} = hf - E_0 \\)" },
                { front: "What is the work function of a metal?", back: "The minimum energy required to liberate an electron from the metal surface." },
                { front: "How is stopping potential related to maximum kinetic energy?", back: "\\( K_{max} = eV_s \\)" }
            ],
            quiz: [
                { question: "Einstein explained the photoelectric effect by treating light as:", options: ["Continuous waves", "Streams of energy packets called photons", "Sound vibrations", "Electrons"], correctIndex: 1, feedback: "Light consists of localized discrete energy packets called photons." },
                { question: "Electrons are emitted in the photoelectric effect only if the photon frequency is:", options: ["Less than threshold frequency", "Equal to or greater than threshold frequency", "Zero", "Arbitrary"], correctIndex: 1, feedback: "Photon energy hf must exceed or equal work function E_0 = hf_0." }
            ]
        }
    ];

    const PHYSICS_DATA = {
        "9": G9_LESSONS,
        "12": G12_LESSONS
    };

    // Expose synchronously to global window
    if (typeof window !== 'undefined') {
        window.physicsData = PHYSICS_DATA;
        window.appData = PHYSICS_DATA;
        try {
            window.dispatchEvent(new CustomEvent('physicsDataReady', { detail: PHYSICS_DATA }));
        } catch (e) {}
    }

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = PHYSICS_DATA;
    }
})();
