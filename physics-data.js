// WIS Physics Hub - Dedicated Complete Curriculum Data
// Provides instant synchronous data loading across all 15 chapters (Grade 9 & Grade 12)
(function() {
    const G9_LESSONS = [
        // --- Grade 9 Chapter 1 ---
        {
            id: "g9-l1",
            gifUrl: "",
            worksheetUrl: "worksheets/g9-ch1-worksheet.pdf",
            ebookUrl: "ebooks/g9-ch1-ebook.pdf.pdf",
            ebooks: [
                { title: "Chapter 1: Turning Effect of Force (pp. 1–12)", url: "ebooks/g9-ch1-ebook.pdf.pdf", altUrl: "ebooks/g9-ch1-ebook.pdf" }
            ],
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
                {
                    title: "Example 1: Resultant of Forces in Same Direction",
                    question: "Two students push a stalled car in the same direction along a straight road. Student A exerts a force of 15 N East, and Student B exerts a force of 25 N East. Find the magnitude and direction of the resultant force acting on the car.",
                    given: "Force \\( a = 15\\,\\mathrm{N} \\) East, Force \\( b = 25\\,\\mathrm{N} \\) East.",
                    find: "Resultant force (\\( R \\)) in \\( \\mathrm{N} \\).",
                    equation: "R = a + b",
                    rearrangement: "\\text{Direct addition for collinear parallel vectors: } R = a + b",
                    solution: "1. <strong>Formula:</strong> \\( R = a + b \\)<br>2. <strong>Substitution:</strong> \\( R = 15\\,\\mathrm{N} + 25\\,\\mathrm{N} \\)<br>3. <strong>Calculation:</strong> \\( R = 40\\,\\mathrm{N} \\) directed East.",
                    finalAnswer: "R = 40\\,\\mathrm{N} \\text{ (East)}",
                    explanation: "When two collinear forces act in the same direction, their magnitudes add directly to produce a stronger net forward force."
                },
                {
                    title: "Example 2: Resultant of Forces in Opposite Directions",
                    question: "In a tug-of-war match, Team A pulls to the right with a force of 40 N, while Team B pulls to the left with a force of 18 N. Calculate the magnitude and direction of the resultant force.",
                    given: "Force \\( a = 40\\,\\mathrm{N} \\) to the right, Force \\( b = 18\\,\\mathrm{N} \\) to the left.",
                    find: "Resultant force (\\( R \\)) in \\( \\mathrm{N} \\).",
                    equation: "R = |a - b|",
                    rearrangement: "\\text{Algebraic difference: } R = a - b \\quad (\\text{where } a > b)",
                    solution: "1. <strong>Formula:</strong> \\( R = |a - b| \\)<br>2. <strong>Substitution:</strong> \\( R = |40\\,\\mathrm{N} - 18\\,\\mathrm{N}| \\)<br>3. <strong>Calculation:</strong> \\( R = 22\\,\\mathrm{N} \\) to the right.",
                    finalAnswer: "R = 22\\,\\mathrm{N} \\text{ (to the right)}",
                    explanation: "Opposing collinear forces partially cancel each other out; the net force acts in the direction of the larger force."
                },
                {
                    title: "Example 3: Resultant of Perpendicular Forces (90° Angle)",
                    question: "A boat is pulled simultaneously by two cables at right angles. A horizontal force of 8 N acts East and a vertical force of 6 N acts North. What is the magnitude of the resultant force pulling the boat?",
                    given: "Horizontal force \\( a = 8\\,\\mathrm{N} \\), Vertical force \\( b = 6\\,\\mathrm{N} \\), Angle \\( \\theta = 90^\\circ \\).",
                    find: "Magnitude of resultant force (\\( R \\)) in \\( \\mathrm{N} \\).",
                    equation: "R = \\sqrt{a^2 + b^2}",
                    rearrangement: "R = \\sqrt{a^2 + b^2} \\quad (\\text{from Pythagoras' theorem})",
                    solution: "1. <strong>Formula:</strong> \\( R = \\sqrt{a^2 + b^2} \\)<br>2. <strong>Substitution:</strong> \\( R = \\sqrt{(8\\,\\mathrm{N})^2 + (6\\,\\mathrm{N})^2} = \\sqrt{64 + 36} \\)<br>3. <strong>Calculation:</strong> \\( R = \\sqrt{100} = 10\\,\\mathrm{N} \\).",
                    finalAnswer: "R = 10\\,\\mathrm{N}",
                    explanation: "Perpendicular vectors form the legs of a right-angled force triangle whose hypotenuse represents the net resultant force."
                },
                {
                    title: "Example 4: Parallelogram Law of Forces (Oblique Angle)",
                    question: "Two forces of 5 N and 7 N act at an angle of 60° to each other on a point. Find the magnitude of their resultant force using the Parallelogram Law of Forces.",
                    given: "Force \\( a = 5\\,\\mathrm{N} \\), Force \\( b = 7\\,\\mathrm{N} \\), Separation angle \\( \\theta = 60^\\circ \\) (\\(\\cos 60^\\circ = 0.50\\)).",
                    find: "Resultant force (\\( R \\)) in \\( \\mathrm{N} \\).",
                    equation: "R = \\sqrt{a^2 + b^2 + 2ab\\cos\\theta}",
                    rearrangement: "\\text{Evaluate terms under radical: } R = \\sqrt{a^2 + b^2 + 2ab\\cos\\theta}",
                    solution: "1. <strong>Formula:</strong> \\( R = \\sqrt{a^2 + b^2 + 2ab\\cos\\theta} \\)<br>2. <strong>Substitution:</strong> \\( R = \\sqrt{5^2 + 7^2 + 2(5)(7)\\cos 60^\\circ} \\)<br>3. <strong>Calculation:</strong> \\( R = \\sqrt{25 + 49 + 70(0.50)} = \\sqrt{74 + 35} = \\sqrt{109} \\approx 10.44\\,\\mathrm{N} \\).",
                    finalAnswer: "R \\approx 10.44\\,\\mathrm{N}",
                    explanation: "The Parallelogram Law accounts for the geometric angle separating two non-perpendicular concurrent vectors."
                },
                {
                    title: "Example 5: Resolving Force — Horizontal Component",
                    question: "A child pulls a wagon with a rope exerting a tension force of 50 N at an angle of 30° above the horizontal ground. Determine the effective horizontal force moving the wagon forward.",
                    given: "Applied force \\( F = 50\\,\\mathrm{N} \\), Angle with horizontal \\( \\theta = 30^\\circ \\) (\\(\\cos 30^\\circ \\approx 0.866\\)).",
                    find: "Horizontal component force (\\( F_x \\)) in \\( \\mathrm{N} \\).",
                    equation: "F_x = F\\cos\\theta",
                    rearrangement: "F_x = F\\cos\\theta",
                    solution: "1. <strong>Formula:</strong> \\( F_x = F\\cos\\theta \\)<br>2. <strong>Substitution:</strong> \\( F_x = (50\\,\\mathrm{N})\\cos(30^\\circ) = 50 \\times 0.8660 \\)<br>3. <strong>Calculation:</strong> \\( F_x = 43.3\\,\\mathrm{N} \\).",
                    finalAnswer: "F_x = 43.3\\,\\mathrm{N}",
                    explanation: "Only the horizontal component of the applied pull provides forward propulsion along the ground surface."
                },
                {
                    title: "Example 6: Resolving Force — Vertical Component",
                    question: "For the same wagon pulled with 50 N at 30° above the horizontal, calculate the vertical component force that tends to lift the wagon upward.",
                    given: "Applied force \\( F = 50\\,\\mathrm{N} \\), Angle with horizontal \\( \\theta = 30^\\circ \\) (\\(\\sin 30^\\circ = 0.50\\)).",
                    find: "Vertical component force (\\( F_y \\)) in \\( \\mathrm{N} \\).",
                    equation: "F_y = F\\sin\\theta",
                    rearrangement: "F_y = F\\sin\\theta",
                    solution: "1. <strong>Formula:</strong> \\( F_y = F\\sin\\theta \\)<br>2. <strong>Substitution:</strong> \\( F_y = (50\\,\\mathrm{N})\\sin(30^\\circ) = 50 \\times 0.50 \\)<br>3. <strong>Calculation:</strong> \\( F_y = 25.0\\,\\mathrm{N} \\).",
                    finalAnswer: "F_y = 25.0\\,\\mathrm{N}",
                    explanation: "The vertical component reduces the normal contact force exerted by the ground on the wagon wheels."
                },
                {
                    title: "Example 7: Direction Angle of Resultant Force",
                    question: "A crate experiences a horizontal force a = 8.0 N East and a vertical force b = 6.0 N North. Find the direction angle θ of the resultant force measured relative to the horizontal East axis.",
                    given: "Horizontal adjacent force \\( a = 8.0\\,\\mathrm{N} \\), Vertical opposite force \\( b = 6.0\\,\\mathrm{N} \\).",
                    find: "Direction angle (\\( \\theta \\)) in degrees.",
                    equation: "\\tan\\theta = \\frac{b}{a}",
                    rearrangement: "\\theta = \\tan^{-1}\\left(\\frac{b}{a}\\right)",
                    solution: "1. <strong>Formula:</strong> \\( \\tan\\theta = \\frac{b}{a} \\implies \\theta = \\tan^{-1}\\left(\\frac{6.0\\,\\mathrm{N}}{8.0\\,\\mathrm{N}}\\right) \\)<br>2. <strong>Ratio:</strong> \\( \\frac{6.0}{8.0} = 0.75 \\)<br>3. <strong>Calculation:</strong> \\( \\theta = \\tan^{-1}(0.75) \\approx 36.87^\\circ \\).",
                    finalAnswer: "\\theta \\approx 36.9^\\circ \\text{ North of East}",
                    explanation: "The tangent ratio of perpendicular component forces specifies the orientation angle of the net vector."
                },
                {
                    title: "Example 8: Trigonometry Ratios on Force Triangle",
                    question: "In a right-angled force triangle with resultant hypotenuse R = 10 N, adjacent side a = 8 N, and opposite side b = 6 N, verify the sine and cosine trigonometric ratios.",
                    given: "Adjacent side \\( a = 8\\,\\mathrm{N} \\), Opposite side \\( b = 6\\,\\mathrm{N} \\), Hypotenuse \\( R = 10\\,\\mathrm{N} \\).",
                    find: "Trigonometric values \\( \\sin\\theta \\) and \\( \\cos\\theta \\).",
                    equation: "\\sin\\theta = \\frac{b}{R}, \\quad \\cos\\theta = \\frac{a}{R}",
                    rearrangement: "\\sin\\theta = \\frac{\\text{Opposite}}{\\text{Hypotenuse}}, \\quad \\cos\\theta = \\frac{\\text{Adjacent}}{\\text{Hypotenuse}}",
                    solution: "1. <strong>Sine ratio:</strong> \\( \\sin\\theta = \\frac{b}{R} = \\frac{6\\,\\mathrm{N}}{10\\,\\mathrm{N}} = 0.60 \\)<br>2. <strong>Cosine ratio:</strong> \\( \\cos\\theta = \\frac{a}{R} = \\frac{8\\,\\mathrm{N}}{10\\,\\mathrm{N}} = 0.80 \\)<br>3. <strong>Check Identity:</strong> \\( \\sin^2\\theta + \\cos^2\\theta = 0.60^2 + 0.80^2 = 0.36 + 0.64 = 1.00 \\).",
                    finalAnswer: "\\sin\\theta = 0.60, \\quad \\cos\\theta = 0.80",
                    explanation: "Right triangle ratios connect Cartesian components directly to polar vector magnitude and angle."
                },
                {
                    title: "Example 9: Moment of a Force (Torque)",
                    question: "A mechanic uses a wrench to tighten a bolt. She applies a perpendicular force of 40 N at a distance of 0.25 m from the pivot bolt. Calculate the turning moment produced.",
                    given: "Applied force \\( F = 40\\,\\mathrm{N} \\), Perpendicular distance \\( d_{\\perp} = 0.25\\,\\mathrm{m} \\).",
                    find: "Moment of the force (\\( M \\)) in \\( \\mathrm{N\\cdot m} \\).",
                    equation: "M = F \\times d_{\\perp}",
                    rearrangement: "M = F \\times d_{\\perp}",
                    solution: "1. <strong>Formula:</strong> \\( M = F \\times d_{\\perp} \\)<br>2. <strong>Substitution:</strong> \\( M = (40\\,\\mathrm{N})(0.25\\,\\mathrm{m}) \\)<br>3. <strong>Calculation:</strong> \\( M = 10.0\\,\\mathrm{N\\cdot m} \\).",
                    finalAnswer: "M = 10.0\\,\\mathrm{N\\cdot m}",
                    explanation: "The moment of a force measures its rotational tendency about an axis and depends directly on force magnitude and lever arm length."
                },
                {
                    title: "Example 10: Finding Perpendicular Lever Arm Distance",
                    question: "A door requires a turning moment of 18 N·m to open. If a person pushes the door perpendicularly with a force of 30 N, how far from the hinges must the force be applied?",
                    given: "Required moment \\( M = 18\\,\\mathrm{N\\cdot m} \\), Applied perpendicular force \\( F = 30\\,\\mathrm{N} \\).",
                    find: "Perpendicular distance (\\( d_{\\perp} \\)) in \\( \\mathrm{m} \\).",
                    equation: "M = F \\times d_{\\perp}",
                    rearrangement: "d_{\\perp} = \\frac{M}{F}",
                    solution: "1. <strong>Rearranged Formula:</strong> \\( d_{\\perp} = \\frac{M}{F} \\)<br>2. <strong>Substitution:</strong> \\( d_{\\perp} = \\frac{18\\,\\mathrm{N\\cdot m}}{30\\,\\mathrm{N}} \\)<br>3. <strong>Calculation:</strong> \\( d_{\\perp} = 0.60\\,\\mathrm{m} \\).",
                    finalAnswer: "d_{\\perp} = 0.60\\,\\mathrm{m} \\; (60\\,\\mathrm{cm})",
                    explanation: "Applying the force further from the hinge increases the lever arm, reducing the muscular force needed to open the door."
                },
                {
                    title: "Example 11: Principle of Moments in Rotational Equilibrium",
                    question: "A uniform seesaw is pivoted at its center. Child 1 of weight 300 N sits 1.6 m to the left of the pivot (creating an anti-clockwise moment). How far to the right of the pivot must Child 2 of weight 400 N sit to balance the seesaw horizontally?",
                    given: "Child 1 weight \\( F_1 = 300\\,\\mathrm{N} \\), Distance \\( d_1 = 1.6\\,\\mathrm{m} \\), Child 2 weight \\( F_2 = 400\\,\\mathrm{N} \\).",
                    find: "Balancing distance of Child 2 (\\( d_2 \\)) in \\( \\mathrm{m} \\).",
                    equation: "M_{ACW} = M_{CW}",
                    rearrangement: "F_1 \\times d_1 = F_2 \\times d_2 \\implies d_2 = \\frac{F_1 \\times d_1}{F_2}",
                    solution: "1. <strong>Anti-clockwise moment:</strong> \\( M_{ACW} = F_1 \\times d_1 = (300\\,\\mathrm{N})(1.6\\,\\mathrm{m}) = 480\\,\\mathrm{N\\cdot m} \\)<br>2. <strong>Equilibrium Condition:</strong> \\( M_{CW} = M_{ACW} = 480\\,\\mathrm{N\\cdot m} \\)<br>3. <strong>Solve for \\( d_2 \\):</strong> \\( d_2 = \\frac{480\\,\\mathrm{N\\cdot m}}{400\\,\\mathrm{N}} = 1.20\\,\\mathrm{m} \\).",
                    finalAnswer: "d_2 = 1.20\\,\\mathrm{m}",
                    explanation: "By the Principle of Moments, the heavier child must sit closer to the pivot so that clockwise and anti-clockwise turning effects are equal."
                }
            ],
            equations: [
                {
                    section: "Resultant Force",
                    name: "Resultant: Same Direction",
                    formula: "\\[ R = a + b \\]",
                    figure: {
                        img: "image_G9_one/g9-ch1-eq1.png.jpg",
                        svgKey: "g9_l1_collinear_same",
                        title: "Resultant: Same Direction",
                        caption: "Collinear force vectors pointing in the identical direction: R = a + b."
                    },
                    explanation: "When forces act along the same line of action in the identical direction, add their magnitudes directly to find the net combined force.",
                    conditions: "Collinear vectors pointing in the same direction.",
                    variables: [
                        { symbol: "R", rep: "Resultant force", unit: "Newton", unitSym: "\\mathrm{N}" },
                        { symbol: "a", rep: "First collinear force", unit: "Newton", unitSym: "\\mathrm{N}" },
                        { symbol: "b", rep: "Second collinear force", unit: "Newton", unitSym: "\\mathrm{N}" }
                    ]
                },
                {
                    section: "Resultant Force",
                    name: "Resultant: Opposite Direction",
                    formula: "\\[ F = |a - b| \\quad\\text{or}\\quad R = |a - b| \\]",
                    figure: {
                        img: "image_G9_one/g9-ch1-eq2.png.jpg",
                        svgKey: "g9_l1_collinear_opp",
                        title: "Resultant: Opposite Direction",
                        caption: "Collinear force vectors pulling in opposing directions: R = |a - b|."
                    },
                    explanation: "When collinear forces pull in opposite directions, subtract the smaller magnitude from the larger. The net force acts in the direction of the larger force.",
                    conditions: "Collinear vectors pointing in opposite directions.",
                    variables: [
                        { symbol: "F \\text{ (or } R\\text{)}", rep: "Net resultant force", unit: "Newton", unitSym: "\\mathrm{N}" },
                        { symbol: "a, b", rep: "Opposing collinear forces", unit: "Newton", unitSym: "\\mathrm{N}" }
                    ]
                },
                {
                    section: "Resultant Force",
                    name: "Resultant: At 90° Angle (Perpendicular)",
                    formula: "\\[ R = \\sqrt{a^2 + b^2} \\]",
                    figure: {
                        img: "image_G9_one/g9-ch1-eq3.png.jpg",
                        svgKey: "g9_l1_perpendicular",
                        title: "Perpendicular Forces (90°)",
                        caption: "Two perpendicular forces forming a right-angled vector triangle: R = √(a² + b²)."
                    },
                    explanation: "Two perpendicular forces form the perpendicular legs of a right triangle; the resultant force is the hypotenuse found by Pythagoras' theorem.",
                    conditions: "Forces act at an angle of exactly 90°.",
                    variables: [
                        { symbol: "R", rep: "Resultant force", unit: "Newton", unitSym: "\\mathrm{N}" },
                        { symbol: "a", rep: "Horizontal component force", unit: "Newton", unitSym: "\\mathrm{N}" },
                        { symbol: "b", rep: "Vertical component force", unit: "Newton", unitSym: "\\mathrm{N}" }
                    ]
                },
                {
                    section: "Resultant Force",
                    name: "Resultant: At an Angle \\(\\alpha\\) (Parallelogram Law)",
                    formula: "\\[ R = \\sqrt{a^2 + b^2 + 2ab \\cos \\alpha} \\]",
                    figure: {
                        img: "image_G9_one/g9-ch1-eq4.png.jpg",
                        svgKey: "g9_l1_parallelogram",
                        title: "Parallelogram Law of Forces",
                        caption: "Diagonal resultant vector of two concurrent forces at angle α: R = √(a² + b² + 2ab cos α)."
                    },
                    explanation: "If two forces act at an angle α, their combined resultant vector is the diagonal of the parallelogram formed by the two force vectors.",
                    conditions: "Concurrent forces meeting at an arbitrary angle α.",
                    variables: [
                        { symbol: "R", rep: "Resultant force", unit: "Newton", unitSym: "\\mathrm{N}" },
                        { symbol: "a, b", rep: "Component applied forces", unit: "Newton", unitSym: "\\mathrm{N}" },
                        { symbol: "\\alpha", rep: "Angle separating the two forces", unit: "Degree (or radian)", unitSym: "{^\\circ}" }
                    ]
                },
                {
                    section: "Direction of Resultant",
                    name: "Direction of a Resultant Force",
                    formula: "\\[ \\theta = \\tan^{-1}\\left(\\frac{\\text{opp}}{\\text{adj}}\\right) = \\tan^{-1}\\left(\\frac{b}{a}\\right) \\]",
                    figure: {
                        img: "image_G9_one/g9-ch1-eq5.png.jpg",
                        svgKey: "g9_l1_trig_triangle",
                        title: "Direction of Resultant",
                        caption: "Orientation angle θ of the resultant vector with reference axis: θ = tan⁻¹(b / a)."
                    },
                    explanation: "The orientation angle θ of the resultant with the horizontal reference axis is calculated using the inverse tangent ratio.",
                    conditions: "Right-angled vector triangle.",
                    variables: [
                        { symbol: "\\theta", rep: "Direction angle with reference axis", unit: "Degree", unitSym: "{^\\circ}" },
                        { symbol: "b", rep: "Opposite force component", unit: "Newton", unitSym: "\\mathrm{N}" },
                        { symbol: "a", rep: "Adjacent force component", unit: "Newton", unitSym: "\\mathrm{N}" }
                    ]
                },
                {
                    section: "Resolving Force",
                    name: "Resolving Force: Horizontal Component",
                    formula: "\\[ F_x = F \\cos \\theta \\]",
                    figure: {
                        img: "image_G9_one/g9-ch1-eq6.png.jpg",
                        svgKey: "g9_l1_resolve_forces",
                        title: "Horizontal Component Fx",
                        caption: "Horizontal projection of applied force F acting along ground axis: F_x = F cos θ."
                    },
                    explanation: "The horizontal component represents the part of applied force F acting parallel to the ground or horizontal x-axis.",
                    conditions: "Angle θ measured with respect to the horizontal.",
                    variables: [
                        { symbol: "F_x", rep: "Horizontal force component", unit: "Newton", unitSym: "\\mathrm{N}" },
                        { symbol: "F", rep: "Total applied force", unit: "Newton", unitSym: "\\mathrm{N}" },
                        { symbol: "\\theta", rep: "Angle with the horizontal", unit: "Degree", unitSym: "{^\\circ}" }
                    ]
                },
                {
                    section: "Resolving Force",
                    name: "Resolving Force: Vertical Component",
                    formula: "\\[ F_y = F \\sin \\theta \\]",
                    figure: {
                        img: "image_G9_one/g9-ch1-eq7.png.jpg",
                        svgKey: "g9_l1_resolve_forces",
                        title: "Vertical Component Fy",
                        caption: "Vertical projection of applied force F acting perpendicular to ground: F_y = F sin θ."
                    },
                    explanation: "The vertical component represents the part of applied force F acting perpendicular to the ground along the vertical y-axis.",
                    conditions: "Angle θ measured with respect to the horizontal.",
                    variables: [
                        { symbol: "F_y", rep: "Vertical force component", unit: "Newton", unitSym: "\\mathrm{N}" },
                        { symbol: "F", rep: "Total applied force", unit: "Newton", unitSym: "\\mathrm{N}" },
                        { symbol: "\\theta", rep: "Angle with the horizontal", unit: "Degree", unitSym: "{^\\circ}" }
                    ]
                },
                {
                    section: "Moment of a Force",
                    name: "Moment of a Force (Torque)",
                    formula: "\\[ M = F \\times d_{\\perp} \\]",
                    figure: {
                        img: "image_G9_one/g9-ch1-eq8.png.jpg",
                        svgKey: "g9_l1_moment_wrench",
                        title: "Moment of a Force (Torque)",
                        caption: "Turning effect about pivot equals force times perpendicular distance: M = F × d_⊥."
                    },
                    explanation: "The turning effect (moment) of a force about a pivot equals the force magnitude multiplied by the perpendicular distance from the pivot to its line of action.",
                    conditions: "Distance must be perpendicular to the line of action.",
                    variables: [
                        { symbol: "M", rep: "Moment of force (turning effect)", unit: "Newton-meter", unitSym: "\\mathrm{N\\cdot m}" },
                        { symbol: "F", rep: "Applied turning force", unit: "Newton", unitSym: "\\mathrm{N}" },
                        { symbol: "d_{\\perp}", rep: "Perpendicular distance from pivot", unit: "Meter", unitSym: "\\mathrm{m}" }
                    ]
                },
                {
                    section: "Moment of a Force",
                    name: "Net Moment & Principle of Moments",
                    formula: "\\[ M_{\\text{net}} = M_{\\text{ACW}} - M_{\\text{CW}}, \\qquad M_{\\text{ACW}} = M_{\\text{CW}} \\; (\\text{at equilibrium}) \\]",
                    figure: {
                        img: "image_G9_one/g9-ch1-eq9.png.jpg",
                        svgKey: "g9_l1_seesaw_equilibrium",
                        title: "Principle of Moments",
                        caption: "Rotational equilibrium: Total Anti-Clockwise Moments equal Total Clockwise Moments."
                    },
                    explanation: "For an object in rotational equilibrium, total anti-clockwise moments equal total clockwise moments (M_net = 0).",
                    conditions: "Rigid body in rotational equilibrium.",
                    variables: [
                        { symbol: "M_{\\text{net}}", rep: "Net rotational moment", unit: "Newton-meter", unitSym: "\\mathrm{N\\cdot m}" },
                        { symbol: "M_{\\text{ACW}}", rep: "Total anti-clockwise moment", unit: "Newton-meter", unitSym: "\\mathrm{N\\cdot m}" },
                        { symbol: "M_{\\text{CW}}", rep: "Total clockwise moment", unit: "Newton-meter", unitSym: "\\mathrm{N\\cdot m}" }
                    ]
                },
                {
                    section: "Parallel Forces",
                    name: "Two Parallel Support Forces on a Beam",
                    formula: "\\[ F_A = \\frac{F \\times OB}{AB}, \\qquad F_B = \\frac{F \\times OA}{AB} \\]",
                    figure: {
                        img: "image_G9_one/g9-ch1-eq10.png.jpg",
                        svgKey: "g9_l1_parallel_beam",
                        title: "Parallel Support Forces on Beam",
                        caption: "Static equilibrium upward reaction forces F_A and F_B supporting downward load F on beam AB."
                    },
                    explanation: "Upward reaction forces exerted by supports at A and B to balance a downward load F applied at point O along beam AB.",
                    conditions: "Supported horizontal beam in static equilibrium.",
                    variables: [
                        { symbol: "F_A", rep: "Reaction support force at A", unit: "Newton", unitSym: "\\mathrm{N}" },
                        { symbol: "F_B", rep: "Reaction support force at B", unit: "Newton", unitSym: "\\mathrm{N}" },
                        { symbol: "F", rep: "Downward load force at point O", unit: "Newton", unitSym: "\\mathrm{N}" },
                        { symbol: "OA, OB, AB", rep: "Beam segment lengths", unit: "Meter", unitSym: "\\mathrm{m}" }
                    ]
                }
            ],
            flashcards: [
                { front: "How do you calculate the resultant of two forces acting in opposite directions?", back: "\\( R = |a - b| \\)" },
                { front: "What is the formula for the resultant of two forces acting at a 90° angle?", back: "\\( R = \\sqrt{a^2 + b^2} \\)" },
                { front: "What is the principle of moments for an object in equilibrium?", back: "Anti-clockwise moment = Clockwise moment \\( (M_{ACW} = M_{CW}) \\)" }
            ],
            quiz: [
                { question: "If two forces 3N and 4N act at a 90° angle, what is the magnitude of the resultant force?", options: ["1N", "7N", "5N", "12N"], correctIndex: 2, feedback: "Using Pythagoras theorem: \\( R = \\sqrt{3^2 + 4^2} = 5\\,\\text{N} \\)." },
                { question: "What is the correct SI unit for the moment of a force?", options: ["N", "J", "N·m", "N/m"], correctIndex: 2, feedback: "Moment is Force multiplied by distance: Newton-meters (N·m)." }
            ]
        },

        // --- Grade 9 Chapter 2 ---
        {
            id: "g9-l2",
            gifUrl: "",
            worksheetUrl: "worksheets/g9-ch2-worksheet.pdf",
            ebookUrl: "ebooks/g9-ch2-1-levers.pdf.pdf",
            ebooks: [
                { title: "1. Levers (pp. 13–19)", url: "ebooks/g9-ch2-1-levers.pdf.pdf", altUrl: "ebooks/g9-ch2-1-levers.pdf" },
                { title: "2. Inclined Plane (pp. 20–22)", url: "ebooks/g9-ch2-2-incline.pdf.pdf", altUrl: "ebooks/g9-ch2-2-incline.pdf" },
                { title: "3. Pulleys (pp. 23–26)", url: "ebooks/g9-ch2-3-pulley.pdf.pdf", altUrl: "ebooks/g9-ch2-3-pulley.pdf" },
                { title: "4. Gears & Belts (pp. 27–29)", url: "ebooks/g9-ch2-4-gears.pdf.pdf", altUrl: "ebooks/g9-ch2-4-gears.pdf" },
                { title: "5. Wheel & Axle (p. 30)", url: "ebooks/g9-ch2-5-wheel-axle.pdf.pdf", altUrl: "ebooks/g9-ch2-5-wheel-axle.pdf" }
            ],
            games: [
                { topic: "Levers", url: "https://g.co/gemini/share/0b9242977d1a" },
                { topic: "Inclined Plane", url: "https://g.co/gemini/share/a0f83fb13666" },
                { topic: "Pulley", url: "https://share.gemini.google/ikZlefCPf3VG" }
            ],
            title: "Chapter 2: Simple Machines",
            concepts: [
                "Simple Machines: Mechanical devices that transform the magnitude, direction, or travel distance of an applied force to make work easier.",
                "Velocity Ratio (VR): The theoretical geometric ratio of distance moved by effort to distance moved by load: \\( VR = \\frac{d_E}{d_R} \\).",
                "Mechanical Advantage (MA): The actual force multiplication factor provided by a machine: \\( MA = \\frac{F_R}{F_E} \\).",
                "Machine Efficiency: The percentage of input work transformed into useful output work: \\( \\text{eff} = \\frac{MA}{VR} \\times 100\\% = \\frac{F_R \\times d_R}{F_E \\times d_E} \\times 100\\% \\).",
                "Key Machine Types: Levers (\\( MA = \\frac{d_E}{d_R} \\)), Inclined Planes (\\( MA = \\frac{L}{h} \\)), Pulleys (\\( MA = \\text{supporting cables} \\)), Gears (\\( GR = \\frac{N_R}{N_E} \\)), Belt Systems (\\( MA = \\frac{R_R}{R_E} \\)), and Wheel & Axle (\\( MA = \\frac{R}{r} \\))."
            ],
            definitions: [
                { term: "Mechanical Advantage (MA)", definition: "The factor by which a machine multiplies the applied effort force to overcome a resistance load.", symbol: "MA", unit: "\\text{No unit}", equation: "MA = \\frac{F_R}{F_E}" },
                { term: "Velocity Ratio (VR)", definition: "The ideal geometric ratio of the distance moved by the effort force to the distance moved by the load.", symbol: "VR", unit: "\\text{No unit}", equation: "VR = \\frac{d_E}{d_R}" },
                { term: "Efficiency (eff)", definition: "The percentage of energy or work input converted into useful work output, reduced by internal friction.", symbol: "eff", unit: "\\%", equation: "\\text{eff} = \\frac{F_R \\times d_R}{F_E \\times d_E} \\times 100\\% = \\frac{MA}{VR} \\times 100\\%" },
                { term: "Lever", definition: "A rigid beam turning about a fixed fulcrum; effort arm d_E and load arm d_R determine mechanical advantage.", symbol: "\\text{Lever}", unit: "\\text{No unit}", equation: "MA = \\frac{F_R}{F_E} = \\frac{d_E}{d_R}" },
                { term: "Inclined Plane", definition: "A flat tilted ramp surface that reduces the lifting effort force by increasing travel distance along slope L.", symbol: "\\text{Incline}", unit: "\\text{No unit}", equation: "MA = \\frac{L}{h} \\implies F_E L = F_R h" },
                { term: "Pulley System", definition: "A combination of fixed and movable grooved wheels over which a continuous rope passes to lift heavy loads.", symbol: "\\text{Pulley}", unit: "\\text{No unit}", equation: "MA = \\text{number of supporting cables}" },
                { term: "Gear System & Gear Ratio (GR)", definition: "A set of intermeshed toothed wheels transmitting torque, where gear ratio is the ratio of driven to driver teeth or diameters.", symbol: "GR", unit: "\\text{No unit}", equation: "GR = \\frac{N_R}{N_E} = \\frac{d_R}{d_E}, \\; N_E t_E = N_R t_R" },
                { term: "Belt System", definition: "Two separated pulleys connected by a continuous flexible belt; mechanical advantage equals the ratio of driven to driver pulley radii.", symbol: "\\text{Belt}", unit: "\\text{No unit}", equation: "MA = \\frac{R_R}{R_E}, \\; N_E D_E = N_R D_R" },
                { term: "Wheel and Axle", definition: "Two concentric cylinders of different radii locked together; effort on the wheel rim lifts a heavy load on the smaller axle shaft.", symbol: "\\text{Wheel \\& Axle}", unit: "\\text{No unit}", equation: "MA = VR = \\frac{R}{r}, \\; M_E = F_E \\times R, \\; M_R = F_R \\times r" }
            ],
            examples: [
                {
                    title: "Example 1: Mechanical Advantage and Effort Arm of a Lever",
                    question: "A construction worker uses a first-class lever to lift a heavy rock weighing 600 N. The distance from the pivot to the rock (load arm) is 0.40 m. If the worker applies an effort force of 150 N, find the mechanical advantage of the lever and the required length of the effort arm.",
                    given: "Load force \\( F_R = 600\\,\\mathrm{N} \\), Effort force applied \\( F_E = 150\\,\\mathrm{N} \\), Load arm \\( d_R = 0.40\\,\\mathrm{m} \\).",
                    find: "Mechanical advantage (\\( MA \\)) and effort arm length (\\( d_E \\)) in \\( \\mathrm{m} \\).",
                    equation: "MA = \\frac{F_R}{F_E} = \\frac{d_E}{d_R}",
                    rearrangement: "d_E = MA \\times d_R",
                    solution: "1. <strong>Calculate Mechanical Advantage:</strong><br>\\[ MA = \\frac{F_R}{F_E} = \\frac{600\\,\\mathrm{N}}{150\\,\\mathrm{N}} = 4.0 \\]<br>2. <strong>Calculate Required Effort Arm Length:</strong><br>\\[ d_E = MA \\times d_R = (4.0)(0.40\\,\\mathrm{m}) = 1.60\\,\\mathrm{m} \\]",
                    finalAnswer: "MA = 4.0 \\; (\\text{dimensionless}), \\quad d_E = 1.60\\,\\mathrm{m}",
                    explanation: "A mechanical advantage of 4.0 quadruples the applied force, but requires the effort arm to be 4 times longer than the load arm."
                },
                {
                    title: "Example 2: Calculating Required Effort Force to Lift a Load",
                    question: "A lever has a mechanical advantage of 5.0. How much effort force must a person apply to lift a load of 750 N?",
                    given: "Load force \\( F_R = 750\\,\\mathrm{N} \\), Mechanical advantage \\( MA = 5.0 \\).",
                    find: "Required effort force (\\( F_E \\)) in \\( \\mathrm{N} \\).",
                    equation: "MA = \\frac{F_R}{F_E}",
                    rearrangement: "F_E = \\frac{F_R}{MA}",
                    solution: "1. <strong>Rearranged Formula:</strong> \\( F_E = \\frac{F_R}{MA} \\)<br>2. <strong>Substitution:</strong> \\( F_E = \\frac{750\\,\\mathrm{N}}{5.0} \\)<br>3. <strong>Calculation:</strong> \\( F_E = 150\\,\\mathrm{N} \\).",
                    finalAnswer: "F_E = 150\\,\\mathrm{N}",
                    explanation: "The machine reduces the required muscular input force by a factor of 5, making the heavy load easier to lift."
                },
                {
                    title: "Example 3: Mechanical Advantage of an Inclined Plane",
                    question: "Movers push a 1200 N piano into a delivery truck using a smooth wooden ramp of length 4.5 m. The back of the truck is 1.5 m above the ground. Calculate the ideal mechanical advantage of the ramp and the force needed to push the piano up the ramp (neglecting friction).",
                    given: "Ramp length along slope \\( L = 4.5\\,\\mathrm{m} \\), Vertical height \\( h = 1.5\\,\\mathrm{m} \\), Load weight \\( F_R = 1200\\,\\mathrm{N} \\).",
                    find: "Mechanical advantage (\\( MA \\)) and required effort force (\\( F_E \\)) in \\( \\mathrm{N} \\).",
                    equation: "MA = \\frac{L}{h}, \\quad F_E = \\frac{F_R}{MA}",
                    rearrangement: "MA = \\frac{L}{h} \\implies F_E = F_R \\left(\\frac{h}{L}\\right)",
                    solution: "1. <strong>Mechanical Advantage:</strong><br>\\[ MA = \\frac{L}{h} = \\frac{4.5\\,\\mathrm{m}}{1.5\\,\\mathrm{m}} = 3.0 \\]<br>2. <strong>Effort Force Required:</strong><br>\\[ F_E = \\frac{F_R}{MA} = \\frac{1200\\,\\mathrm{N}}{3.0} = 400\\,\\mathrm{N} \\]",
                    finalAnswer: "MA = 3.0, \\quad F_E = 400\\,\\mathrm{N}",
                    explanation: "An inclined plane trades increased travel distance along the ramp for a significant reduction in required lifting effort."
                },
                {
                    title: "Example 4: Mechanical Advantage of a Pulley System",
                    question: "A block and tackle pulley system has 4 rope strands directly supporting a hanging load of 800 N. Assuming an ideal frictionless system, determine its mechanical advantage and the effort force required to support the load.",
                    given: "Number of supporting cable strands \\( n = 4 \\), Hanging load \\( F_R = 800\\,\\mathrm{N} \\).",
                    find: "Mechanical advantage (\\( MA \\)) and effort force (\\( F_E \\)) in \\( \\mathrm{N} \\).",
                    equation: "MA = n \\quad (\\text{# of supporting cables}), \\quad F_E = \\frac{F_R}{MA}",
                    rearrangement: "F_E = \\frac{F_R}{n}",
                    solution: "1. <strong>Mechanical Advantage:</strong> \\( MA = n = 4 \\).<br>2. <strong>Effort Force:</strong><br>\\[ F_E = \\frac{F_R}{MA} = \\frac{800\\,\\mathrm{N}}{4} = 200\\,\\mathrm{N} \\]",
                    finalAnswer: "MA = 4, \\quad F_E = 200\\,\\mathrm{N}",
                    explanation: "In an ideal pulley system, the load weight is distributed equally among the supporting rope strands, reducing the required effort force."
                },
                {
                    title: "Example 5: Velocity Ratio (VR) of a Machine",
                    question: "In a lifting mechanism, pulling the effort rope through a distance of 3.0 m raises the heavy load by 0.60 m. Calculate the velocity ratio of the machine.",
                    given: "Distance moved by effort \\( d_E = 3.0\\,\\mathrm{m} \\), Distance moved by load \\( d_R = 0.60\\,\\mathrm{m} \\).",
                    find: "Velocity ratio (\\( VR \\)) of the machine.",
                    equation: "VR = \\frac{d_E}{d_R}",
                    rearrangement: "VR = \\frac{d_E}{d_R}",
                    solution: "1. <strong>Formula:</strong> \\( VR = \\frac{d_E}{d_R} \\)<br>2. <strong>Substitution:</strong> \\( VR = \\frac{3.0\\,\\mathrm{m}}{0.60\\,\\mathrm{m}} \\)<br>3. <strong>Calculation:</strong> \\( VR = 5.0 \\).",
                    finalAnswer: "VR = 5.0 \\; (\\text{dimensionless})",
                    explanation: "The velocity ratio is determined entirely by machine geometry and represents the ideal mechanical advantage in the absence of friction."
                },
                {
                    title: "Example 6: Efficiency of a Simple Machine",
                    question: "A pulley system has a velocity ratio VR = 4.0. Due to friction in the bearings, an applied effort force of 160 N is required to lift a load of 480 N. Calculate the actual mechanical advantage (MA) and the efficiency of the machine.",
                    given: "Load \\( F_R = 480\\,\\mathrm{N} \\), Effort \\( F_E = 160\\,\\mathrm{N} \\), Velocity ratio \\( VR = 4.0 \\).",
                    find: "Mechanical advantage (\\( MA \\)) and efficiency (\\( \\text{eff} \\)) as a percentage.",
                    equation: "MA = \\frac{F_R}{F_E}, \\quad \\text{eff} = \\frac{MA}{VR} \\times 100\\%",
                    rearrangement: "\\text{eff} = \\frac{MA}{VR} \\times 100\\%",
                    solution: "1. <strong>Actual Mechanical Advantage:</strong><br>\\[ MA = \\frac{F_R}{F_E} = \\frac{480\\,\\mathrm{N}}{160\\,\\mathrm{N}} = 3.0 \\]<br>2. <strong>Machine Efficiency:</strong><br>\\[ \\text{eff} = \\frac{MA}{VR} \\times 100\\% = \\frac{3.0}{4.0} \\times 100\\% = 0.75 \\times 100\\% = 75\\% \\]",
                    finalAnswer: "MA = 3.0, \\quad \\text{eff} = 75\\%",
                    explanation: "Real machines always have an efficiency less than 100% because a fraction of the input work is converted into thermal energy by friction."
                },
                {
                    title: "Example 7: Mechanical Advantage of a Wheel and Axle",
                    question: "A water well windlass consists of a wheel of radius R = 40 cm attached to an axle of radius r = 8 cm. Find the ideal mechanical advantage of the wheel and axle, and the effort needed on the wheel rim to lift a 250 N bucket of water.",
                    given: "Wheel radius \\( R = 40\\,\\mathrm{cm} = 0.40\\,\\mathrm{m} \\), Axle radius \\( r = 8\\,\\mathrm{cm} = 0.08\\,\\mathrm{m} \\), Load \\( F_R = 250\\,\\mathrm{N} \\).",
                    find: "Mechanical advantage (\\( MA \\)) and effort force (\\( F_E \\)) in \\( \\mathrm{N} \\).",
                    equation: "MA = \\frac{R}{r}, \\quad F_E = \\frac{F_R}{MA}",
                    rearrangement: "F_E = F_R \\left(\\frac{r}{R}\\right)",
                    solution: "1. <strong>Mechanical Advantage:</strong><br>\\[ MA = \\frac{R}{r} = \\frac{40\\,\\mathrm{cm}}{8\\,\\mathrm{cm}} = 5.0 \\]<br>2. <strong>Effort Force:</strong><br>\\[ F_E = \\frac{F_R}{MA} = \\frac{250\\,\\mathrm{N}}{5.0} = 50\\,\\mathrm{N} \\]",
                    finalAnswer: "MA = 5.0, \\quad F_E = 50\\,\\mathrm{N}",
                    explanation: "The wheel and axle functions as a rotating lever where the ratio of wheel radius to axle radius provides mechanical force multiplication."
                },
                {
                    title: "Example 8: Gear System Speed and Teeth Ratio",
                    question: "A driver gear having 16 teeth meshes with a driven gear having 32 teeth. Calculate the velocity ratio of the gear train, and determine the rotational speed of the driven gear if the driver gear rotates at 120 rpm.",
                    given: "Driver teeth \\( N_1 = 16 \\), Driven teeth \\( N_2 = 32 \\), Driver speed \\( n_1 = 120\\,\\mathrm{rpm} \\).",
                    find: "Velocity ratio (\\( VR \\)) and driven gear speed (\\( n_2 \\)) in \\( \\mathrm{rpm} \\).",
                    equation: "VR = \\frac{N_2}{N_1}, \\quad \\frac{n_1}{n_2} = \\frac{N_2}{N_1}",
                    rearrangement: "n_2 = n_1 \\left(\\frac{N_1}{N_2}\\right)",
                    solution: "1. <strong>Velocity Ratio:</strong><br>\\[ VR = \\frac{N_2}{N_1} = \\frac{32}{16} = 2.0 \\]<br>2. <strong>Driven Gear Speed:</strong><br>\\[ n_2 = 120\\,\\mathrm{rpm} \\times \\left(\\frac{16}{32}\\right) = 120 \\times 0.50 = 60\\,\\mathrm{rpm} \\]",
                    finalAnswer: "VR = 2.0, \\quad n_2 = 60\\,\\mathrm{rpm}",
                    explanation: "The larger driven gear rotates at half the speed of the driver gear but delivers twice the rotational torque."
                }
            ],
            equations: [
                {
                    section: "General Machine Formulas",
                    name: "Velocity Ratio (VR)",
                    formula: "\\[ VR = \\frac{d_E}{d_R} \\]",
                    figure: {
                        img: "image_G9_one/g9-ch2-eq1.png.jpg",
                        svgKey: "g9_l2_lever",
                        title: "Velocity Ratio",
                        caption: "Ratio of effort displacement to load displacement: VR = d_E / d_R."
                    },
                    explanation: "Velocity ratio is determined entirely by the geometric dimensions of the machine and represents the ratio of effort displacement to load displacement.",
                    conditions: "All simple machines.",
                    variables: [
                        { symbol: "VR", rep: "Velocity Ratio", unit: "Dimensionless ratio", unitSym: "\\text{No unit}" },
                        { symbol: "d_E", rep: "Distance moved by effort force", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "d_R", rep: "Distance moved by load (resistance)", unit: "Meter", unitSym: "\\mathrm{m}" }
                    ]
                },
                {
                    section: "General Machine Formulas",
                    name: "Machine Efficiency",
                    formula: "\\[ \\text{eff} = \\frac{F_R \\times d_R}{F_E \\times d_E} \\times 100\\% = \\frac{MA}{VR} \\times 100\\% \\]",
                    figure: {
                        img: "image_G9_one/g9-ch2-eq2.png.jpg",
                        svgKey: "g9_l2_lever",
                        title: "Machine Efficiency",
                        caption: "Efficiency percentage comparing work output to work input: eff = (MA / VR) × 100%."
                    },
                    explanation: "Efficiency measures the fraction of work input converted into useful work output. In real machines, friction always makes efficiency less than 100%.",
                    conditions: "Real machines with energy dissipation.",
                    variables: [
                        { symbol: "\\text{eff}", rep: "Machine efficiency percentage", unit: "Percentage", unitSym: "\\%" },
                        { symbol: "MA", rep: "Actual Mechanical Advantage", unit: "Dimensionless ratio", unitSym: "\\text{No unit}" },
                        { symbol: "VR", rep: "Ideal Velocity Ratio", unit: "Dimensionless ratio", unitSym: "\\text{No unit}" },
                        { symbol: "F_R \\times d_R", rep: "Work output (useful work)", unit: "Joule", unitSym: "\\mathrm{J}" },
                        { symbol: "F_E \\times d_E", rep: "Work input (total work)", unit: "Joule", unitSym: "\\mathrm{J}" }
                    ]
                },
                {
                    section: "Lever",
                    name: "Mechanical Advantage of a Lever",
                    formula: "\\[ MA = \\frac{F_R}{F_E} = \\frac{d_E}{d_R} \\]",
                    figure: {
                        img: "image_G9_one/g9-ch2-eq3.png.jpg",
                        svgKey: "g9_l2_lever",
                        title: "Lever Mechanical Advantage",
                        caption: "Mechanical advantage of a rigid lever: MA = F_R / F_E = d_E / d_R."
                    },
                    explanation: "A lever multiplies applied effort force by the ratio of effort arm distance to load arm distance from the fulcrum.",
                    conditions: "Rigid lever in rotational equilibrium.",
                    variables: [
                        { symbol: "MA", rep: "Mechanical Advantage", unit: "Dimensionless ratio", unitSym: "\\text{No unit}" },
                        { symbol: "F_R", rep: "Load / Resistance force overcome", unit: "Newton", unitSym: "\\mathrm{N}" },
                        { symbol: "F_E", rep: "Effort force applied", unit: "Newton", unitSym: "\\mathrm{N}" },
                        { symbol: "d_E", rep: "Effort arm distance from fulcrum", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "d_R", rep: "Load arm distance from fulcrum", unit: "Meter", unitSym: "\\mathrm{m}" }
                    ]
                },
                {
                    section: "Inclined Plane",
                    name: "Inclined Plane Mechanical Advantage & Work",
                    formula: "\\[ MA = \\frac{L}{h}, \\qquad W_E = W_R \\implies F_E L = F_R h \\; (\\text{frictionless}) \\]",
                    figure: {
                        img: "image_G9_one/g9-ch2-eq4.png.jpg",
                        svgKey: "g9_l2_inclined_plane",
                        title: "Inclined Plane",
                        caption: "Ramp mechanical advantage and work conservation: MA = L / h, F_E L = F_R h."
                    },
                    explanation: "An inclined plane reduces the required pushing force by spreading the work over ramp length L instead of lifting directly through height h.",
                    conditions: "Ideal frictionless incline surface.",
                    variables: [
                        { symbol: "MA", rep: "Mechanical Advantage", unit: "Dimensionless ratio", unitSym: "\\text{No unit}" },
                        { symbol: "L", rep: "Ramp length along slope", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "h", rep: "Vertical height raised", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "F_E", rep: "Effort force applied along ramp", unit: "Newton", unitSym: "\\mathrm{N}" },
                        { symbol: "F_R", rep: "Load weight of object", unit: "Newton", unitSym: "\\mathrm{N}" }
                    ]
                },
                {
                    section: "Pulley",
                    name: "Mechanical Advantage of a Pulley System",
                    formula: "\\[ MA = \\text{number of supporting cables} \\]",
                    figure: {
                        img: "image_G9_one/g9-ch2-eq5.png.jpg",
                        svgKey: "g9_l2_pulley_system",
                        title: "Pulley System",
                        caption: "Mechanical advantage of block-and-tackle equals number of supporting cable strands."
                    },
                    explanation: "In a block-and-tackle pulley system, each cable strand directly holding the movable block carries an equal fraction of the total load weight.",
                    conditions: "Ideal frictionless pulley system with negligible rope mass.",
                    variables: [
                        { symbol: "MA", rep: "Mechanical Advantage", unit: "Dimensionless integer", unitSym: "\\text{No unit}" },
                        { symbol: "n", rep: "Number of load-supporting cable strands", unit: "Cable strands count", unitSym: "\\text{Strands}" }
                    ]
                },
                {
                    section: "Gears System",
                    name: "Gears System Mechanical Advantage & Gear Ratio (GR)",
                    formula: "\\[ MA = \\frac{N_R}{N_E} = \\frac{r_R}{r_E} = \\frac{d_R}{d_E}, \\quad GR = \\frac{N_R}{N_E} = \\frac{d_R}{d_E}, \\quad N_E t_E = N_R t_R \\]",
                    figure: {
                        img: "image_G9_one/g9-ch2-eq6.png.jpg",
                        svgKey: "g9_l2_gears",
                        title: "Gears System & Gear Ratio",
                        caption: "Intermeshed gear teeth, pitch diameters, and turns relation: GR = N_R / N_E = d_R / d_E."
                    },
                    explanation: "For intermeshed gears, the ratio of teeth or diameters determines the force multiplication (MA) and rotational turns relation without slip.",
                    conditions: "Interlocking toothed gears without slippage.",
                    variables: [
                        { symbol: "MA", rep: "Mechanical Advantage", unit: "Dimensionless ratio", unitSym: "\\text{No unit}" },
                        { symbol: "GR", rep: "Gear Ratio", unit: "Dimensionless ratio", unitSym: "\\text{No unit}" },
                        { symbol: "N_R, N_E", rep: "Number of teeth on driven (R) and driving (E) gears", unit: "Teeth count", unitSym: "\\text{Teeth}" },
                        { symbol: "d_R, d_E", rep: "Pitch diameters of driven and driving gears", unit: "Meter (or cm)", unitSym: "\\mathrm{m}" },
                        { symbol: "t_E, t_R", rep: "Turns / rotational speeds of driving and driven gears", unit: "Revolutions (or rpm)", unitSym: "\\text{rev}" }
                    ]
                },
                {
                    section: "Belt System",
                    name: "Belt and Pulley Drive System",
                    formula: "\\[ MA = \\frac{R_R}{R_E}, \\qquad N_E D_E = N_R D_R \\]",
                    figure: {
                        img: "image_G9_one/g9-ch2-eq7.png.jpg",
                        svgKey: "g9_l2_belt_system",
                        title: "Belt and Pulley Drive",
                        caption: "Rotational transmission via continuous belt: MA = R_R / R_E, N_E D_E = N_R D_R."
                    },
                    explanation: "Two rotating pulleys linked by a continuous belt transmit rotational motion. Mechanical advantage equals the radius ratio of the driven to driver pulley.",
                    conditions: "Belt-driven pulleys running without slippage.",
                    variables: [
                        { symbol: "MA", rep: "Mechanical Advantage", unit: "Dimensionless ratio", unitSym: "\\text{No unit}" },
                        { symbol: "R_R, R_E", rep: "Radii of driven and driver pulleys", unit: "Meter (or cm)", unitSym: "\\mathrm{m}" },
                        { symbol: "D_E, D_R", rep: "Diameters of driver and driven pulleys", unit: "Meter (or cm)", unitSym: "\\mathrm{m}" },
                        { symbol: "N_E, N_R", rep: "Rotational speeds / turns of driver and driven pulleys", unit: "Revolutions per minute", unitSym: "\\mathrm{rpm}" }
                    ]
                },
                {
                    section: "Wheel and Axle",
                    name: "Wheel and Axle Moments & Mechanical Advantage",
                    formula: "\\[ M_E = F_E \\times R, \\quad M_R = F_R \\times r, \\quad MA = \\frac{R}{r}, \\quad VR = \\frac{2\\pi R}{2\\pi r} = \\frac{R}{r} \\]",
                    figure: {
                        img: "image_G9_one/g9-ch2-eq8.png.jpg",
                        svgKey: "g9_l2_wheel_axle",
                        title: "Wheel and Axle",
                        caption: "Circular lever balancing moments: M_E = F_E · R, M_R = F_R · r, MA = R / r."
                    },
                    explanation: "The wheel and axle functions as a circular lever: applying force at outer radius R generates a large balancing moment against load on inner axle r.",
                    conditions: "Concentric wheel and axle rigidly joined to turn together.",
                    variables: [
                        { symbol: "M_E", rep: "Applied effort turning moment", unit: "Newton-meter", unitSym: "\\mathrm{N\\cdot m}" },
                        { symbol: "M_R", rep: "Resisting load turning moment", unit: "Newton-meter", unitSym: "\\mathrm{N\\cdot m}" },
                        { symbol: "MA, VR", rep: "Mechanical Advantage and Velocity Ratio", unit: "Dimensionless ratio", unitSym: "\\text{No unit}" },
                        { symbol: "R", rep: "Radius of outer wheel", unit: "Meter (or cm)", unitSym: "\\mathrm{m}" },
                        { symbol: "r", rep: "Radius of inner axle shaft", unit: "Meter (or cm)", unitSym: "\\mathrm{m}" }
                    ]
                }
            ],
            flashcards: [
                { front: "What is the formula for Mechanical Advantage?", back: "\\( MA = \\frac{F_R}{F_E} \\)" },
                { front: "What is the Mechanical Advantage of an inclined plane?", back: "\\( MA = \\frac{L}{h} \\)" }
            ],
            quiz: [
                { question: "If effort arm is 4m and load arm is 1m, what is the Mechanical Advantage?", options: ["0.25", "4", "5", "3"], correctIndex: 1, feedback: "MA = 4 / 1 = 4." }
            ]
        },

        // --- Grade 9 Chapter 3 ---
        {
            id: "g9-l3",
            gifUrl: "",
            worksheetUrl: "worksheets/g9-ch3-worksheet.pdf",
            ebookUrl: "ebooks/g9-ch3-part1.pdf.pdf",
            ebooks: [
                { title: "Part 1: Electric Energy (pp. 31–38)", url: "ebooks/g9-ch3-part1.pdf.pdf", altUrl: "ebooks/g9-ch3-part1.pdf" },
                { title: "Part 2: Household Wiring Systems (pp. 39–47)", url: "ebooks/g9-ch3-part2.pdf.pdf", altUrl: "ebooks/g9-ch3-part2.pdf" }
            ],
            games: [{ topic: "Electricity", url: "https://gemini.google.com/share/e1def1ea44ff" }],
            title: "Chapter 3: Electricity",
            concepts: [
                "Ohm's Law: Electric potential difference is directly proportional to current: \\( V = IR \\).",
                "Electrical Power: The rate of consuming or transforming electric energy: \\( P = \\frac{W}{t} = \\frac{E}{t} = VI = RI^2 = \\frac{V^2}{R} \\).",
                "Electrical Energy & Work: Total work performed by current over time: \\( E = QV = VIt = RI^2t = \\frac{V^2}{R}t \\).",
                "Joule Heating & Heat Conservation: Electrical energy dissipated as heat in a resistor equals heat absorbed by a surrounding substance: \\( Q = mc\\Delta T \\implies RI^2t = mc\\Delta T \\).",
                "Energy Distribution: Input electrical energy supplied to an appliance divides between light and heat: \\( E_L = E \\times (\\%\\text{ light}) \\) and \\( E_H = E \\times (\\%\\text{ heat}) \\).",
                "Cost of Electricity: Billing calculates energy consumption in kilowatt-hours: \\( \\text{Cost} = E(\\text{kWh}) \\times \\text{price per kWh} \\)."
            ],
            definitions: [
                { term: "Electrical Power", definition: "The rate at which electrical energy is transformed into other forms of energy per unit time.", symbol: "P", unit: "\\mathrm{W}", equation: "P = \\frac{W}{t} = VI = RI^2 = \\frac{V^2}{R}" },
                { term: "Total Electrical Energy", definition: "The overall work done by moving electric charge across a potential difference over time.", symbol: "E", unit: "\\mathrm{J}", equation: "E = QV = VIt = RI^2t = \\frac{V^2}{R}t" },
                { term: "Heat Energy (Thermal Energy)", definition: "Energy transferred due to temperature difference, proportional to mass and specific heat capacity.", symbol: "Q", unit: "\\mathrm{J}", equation: "Q = mc\\Delta T" },
                { term: "Specific Heat Capacity", definition: "The amount of heat energy required to raise the temperature of 1 kg of a substance by 1°C.", symbol: "c", unit: "\\mathrm{J/(kg\\cdot^\\circ C)}", equation: "c = \\frac{Q}{m\\Delta T}" },
                { term: "Conservation of Energy (Joule Heating)", definition: "In an insulated system, heat generated electrically by a resistor equals the thermal energy absorbed by the liquid.", symbol: "Q", unit: "\\mathrm{J}", equation: "RI^2t = mc\\Delta T" },
                { term: "Energy Distribution", definition: "The percentage partitioning of total input electrical energy into useful light emission versus thermal heat dissipation.", symbol: "E_L, E_H", unit: "\\mathrm{J}", equation: "E_L = E \\times (\\%\\text{ light}), \\; E_H = E \\times (\\%\\text{ heat})" },
                { term: "Cost of Electricity", definition: "The utility fee calculated by multiplying energy consumed in kilowatt-hours (kWh) by the tariff rate per kWh.", symbol: "\\text{Cost}", unit: "\\text{Currency}", equation: "\\text{Cost} = E(\\text{kWh}) \\times \\text{price per kWh}" },
                { term: "Ohmic Resistance", definition: "Opposition offered by a material to electric charge flow, given by the ratio of voltage to current.", symbol: "R", unit: "\\Omega", equation: "R = \\frac{V}{I}" }
            ],
            examples: [
                {
                    title: "Example 1: Ohm's Law – Calculating Voltage Drop",
                    question: "A current of 2.5 A flows through a resistor with a resistance of 48 Ω. Calculate the potential difference (voltage drop) across the resistor.",
                    given: "Electric current \\( I = 2.5\\,\\mathrm{A} \\), Resistance \\( R = 48\\,\\Omega \\).",
                    find: "Potential difference (\\( V \\)) in \\( \\mathrm{V} \\).",
                    equation: "V = IR",
                    rearrangement: "V = IR",
                    solution: "1. <strong>Formula:</strong> \\( V = IR \\)<br>2. <strong>Substitution:</strong> \\( V = (2.5\\,\\mathrm{A})(48\\,\\Omega) \\)<br>3. <strong>Calculation:</strong> \\( V = 120\\,\\mathrm{V} \\).",
                    finalAnswer: "V = 120\\,\\mathrm{V}",
                    explanation: "By Ohm's law, the potential difference across an ohmic conductor is directly proportional to the current flowing through it."
                },
                {
                    title: "Example 2: Electric Current from Applied Voltage",
                    question: "A 240 V mains power supply is connected across an electric heating coil having a resistance of 30 Ω. What current flows through the heater?",
                    given: "Supply voltage \\( V = 240\\,\\mathrm{V} \\), Resistance \\( R = 30\\,\\Omega \\).",
                    find: "Electric current (\\( I \\)) in \\( \\mathrm{A} \\).",
                    equation: "V = IR",
                    rearrangement: "I = \\frac{V}{R}",
                    solution: "1. <strong>Rearranged Formula:</strong> \\( I = \\frac{V}{R} \\)<br>2. <strong>Substitution:</strong> \\( I = \\frac{240\\,\\mathrm{V}}{30\\,\\Omega} \\)<br>3. <strong>Calculation:</strong> \\( I = 8.0\\,\\mathrm{A} \\).",
                    finalAnswer: "I = 8.0\\,\\mathrm{A}",
                    explanation: "Current is inversely proportional to the circuit resistance under a constant supply voltage."
                },
                {
                    title: "Example 3: Resistance of an Electric Lamp Filament",
                    question: "An automobile headlight operates on a 12 V battery and draws a current of 0.40 A. Calculate the electrical resistance of the lamp filament.",
                    given: "Potential difference \\( V = 12\\,\\mathrm{V} \\), Current \\( I = 0.40\\,\\mathrm{A} \\).",
                    find: "Filament resistance (\\( R \\)) in \\( \\Omega \\).",
                    equation: "V = IR",
                    rearrangement: "R = \\frac{V}{I}",
                    solution: "1. <strong>Rearranged Formula:</strong> \\( R = \\frac{V}{I} \\)<br>2. <strong>Substitution:</strong> \\( R = \\frac{12\\,\\mathrm{V}}{0.40\\,\\mathrm{A}} \\)<br>3. <strong>Calculation:</strong> \\( R = 30\\,\\Omega \\).",
                    finalAnswer: "R = 30\\,\\Omega",
                    explanation: "The resistance represents the opposition to electric charge movement through the filament."
                },
                {
                    title: "Example 4: Electrical Power of a Motor (P = VI)",
                    question: "An electric motor connected to a 220 V line draws a steady current of 3.5 A. Calculate the electrical power input to the motor.",
                    given: "Operating voltage \\( V = 220\\,\\mathrm{V} \\), Operating current \\( I = 3.5\\,\\mathrm{A} \\).",
                    find: "Electrical power (\\( P \\)) in \\( \\mathrm{W} \\).",
                    equation: "P = VI",
                    rearrangement: "P = VI",
                    solution: "1. <strong>Formula:</strong> \\( P = VI \\)<br>2. <strong>Substitution:</strong> \\( P = (220\\,\\mathrm{V})(3.5\\,\\mathrm{A}) \\)<br>3. <strong>Calculation:</strong> \\( P = 770\\,\\mathrm{W} \\).",
                    finalAnswer: "P = 770\\,\\mathrm{W}",
                    explanation: "Electric power is the instantaneous rate of electrical energy transfer, equal to the product of potential difference and current."
                },
                {
                    title: "Example 5: Power Dissipation in a Transmission Cable (P = I²R)",
                    question: "A power transmission line with a total resistance of 0.50 Ω carries a current of 20 A. Determine the rate of heat loss (dissipated power) in the line.",
                    given: "Current \\( I = 20\\,\\mathrm{A} \\), Cable resistance \\( R = 0.50\\,\\Omega \\).",
                    find: "Power dissipated (\\( P \\)) in \\( \\mathrm{W} \\).",
                    equation: "P = I^2 R",
                    rearrangement: "P = I^2 R",
                    solution: "1. <strong>Formula:</strong> \\( P = I^2 R \\)<br>2. <strong>Substitution:</strong> \\( P = (20\\,\\mathrm{A})^2 \\times 0.50\\,\\Omega = 400 \\times 0.50 \\)<br>3. <strong>Calculation:</strong> \\( P = 200\\,\\mathrm{W} \\).",
                    finalAnswer: "P = 200\\,\\mathrm{W}",
                    explanation: "Heat loss in wires increases quadratically with current, highlighting why power transmission lines use high voltages to minimize current."
                },
                {
                    title: "Example 6: Power of an Appliance from Voltage and Resistance (P = V²/R)",
                    question: "An electric toaster with heating element resistance 40 Ω is plugged into a 120 V household circuit. Find its power output.",
                    given: "Supply voltage \\( V = 120\\,\\mathrm{V} \\), Heating element resistance \\( R = 40\\,\\Omega \\).",
                    find: "Rated power (\\( P \\)) in \\( \\mathrm{W} \\).",
                    equation: "P = \\frac{V^2}{R}",
                    rearrangement: "P = \\frac{V^2}{R}",
                    solution: "1. <strong>Formula:</strong> \\( P = \\frac{V^2}{R} \\)<br>2. <strong>Substitution:</strong> \\( P = \\frac{(120\\,\\mathrm{V})^2}{40\\,\\Omega} = \\frac{14{,}400}{40} \\)<br>3. <strong>Calculation:</strong> \\( P = 360\\,\\mathrm{W} \\).",
                    finalAnswer: "P = 360\\,\\mathrm{W}",
                    explanation: "At constant supply voltage, power output is inversely proportional to the resistance of the heating element."
                },
                {
                    title: "Example 7: Electrical Energy Consumption Over Time",
                    question: "An electric iron rated at 1200 W is used continuously for 45 minutes (2700 s). Determine the electrical energy consumed in joules and in kilowatt-hours (kWh).",
                    given: "Power \\( P = 1200\\,\\mathrm{W} = 1.20\\,\\mathrm{kW} \\), Time \\( t = 45\\,\\mathrm{min} = 2700\\,\\mathrm{s} = 0.75\\,\\mathrm{h} \\).",
                    find: "Energy consumed (\\( E \\)) in \\( \\mathrm{J} \\) and \\( \\mathrm{kWh} \\).",
                    equation: "E = Pt",
                    rearrangement: "E = Pt",
                    solution: "1. <strong>Energy in Joules:</strong><br>\\[ E = Pt = (1200\\,\\mathrm{W})(2700\\,\\mathrm{s}) = 3{,}240{,}000\\,\\mathrm{J} = 3.24 \\times 10^6\\,\\mathrm{J} \\]<br>2. <strong>Energy in Kilowatt-hours:</strong><br>\\[ E = (1.20\\,\\mathrm{kW})(0.75\\,\\mathrm{h}) = 0.90\\,\\mathrm{kWh} \\]",
                    finalAnswer: "E = 3.24 \\times 10^6\\,\\mathrm{J} = 0.90\\,\\mathrm{kWh}",
                    explanation: "The kilowatt-hour is the practical commercial unit of electrical energy, where 1 kWh = 3.6 × 10⁶ J."
                },
                {
                    title: "Example 8: Joule Heating and Water Temperature Rise",
                    question: "An immersion heater with resistance 10 Ω carrying a current of 5.0 A is placed in 0.50 kg of water for 210 s. Assuming negligible heat loss (specific heat capacity of water c = 4200 J/(kg·°C)), find the temperature rise of the water.",
                    given: "Resistance \\( R = 10\\,\\Omega \\), Current \\( I = 5.0\\,\\mathrm{A} \\), Time \\( t = 210\\,\\mathrm{s} \\), Water mass \\( m = 0.50\\,\\mathrm{kg} \\), Specific heat \\( c = 4200\\,\\mathrm{J/(kg\\cdot^\\circ C)} \\).",
                    find: "Temperature increase (\\( \\Delta T \\)) in \\( ^\\circ\\mathrm{C} \\).",
                    equation: "Q = RI^2 t = mc\\Delta T",
                    rearrangement: "\\Delta T = \\frac{RI^2 t}{mc}",
                    solution: "1. <strong>Heat Generated (Joule's Law):</strong><br>\\[ Q = RI^2 t = (10\\,\\Omega)(5.0\\,\\mathrm{A})^2(210\\,\\mathrm{s}) = 10 \\times 25 \\times 210 = 52{,}500\\,\\mathrm{J} \\]<br>2. <strong>Temperature Rise:</strong><br>\\[ \\Delta T = \\frac{Q}{mc} = \\frac{52{,}500\\,\\mathrm{J}}{(0.50\\,\\mathrm{kg})(4200\\,\\mathrm{J/(kg\\cdot^\\circ C)})} = \\frac{52{,}500}{2100} = 25\\,^\\circ\\mathrm{C} \\]",
                    finalAnswer: "\\Delta T = 25\\,^\\circ\\mathrm{C}",
                    explanation: "Electrical energy dissipated as heat is fully absorbed by the water, raising its temperature according to the heat equation."
                }
            ],
            equations: [
                {
                    section: "Electrical Power",
                    name: "Electrical Power (Basic & Circuit Forms)",
                    formula: "\\[ P = \\frac{W}{t} = \\frac{E}{t}, \\qquad P = VI = RI^2 = \\frac{V^2}{R} \\]",
                    figure: {
                        img: "image_G9_one/g9-ch3-eq1.png.jpg",
                        svgKey: "g9_l3_ohms_law",
                        title: "Electrical Power",
                        caption: "Rate of energy dissipation and power formulas: P = VI = I²R = V² / R."
                    },
                    explanation: "Electrical power is the rate at which electrical energy is transformed into other energy forms (light, heat, mechanical work) in an electric circuit.",
                    conditions: "Direct current (DC) circuits and purely resistive AC loads.",
                    variables: [
                        { symbol: "P", rep: "Electrical power", unit: "Watt", unitSym: "\\mathrm{W}" },
                        { symbol: "W, E", rep: "Work done or electrical energy consumed", unit: "Joule", unitSym: "\\mathrm{J}" },
                        { symbol: "t", rep: "Time interval", unit: "Second", unitSym: "\\mathrm{s}" },
                        { symbol: "V", rep: "Potential difference (voltage)", unit: "Volt", unitSym: "\\mathrm{V}" },
                        { symbol: "I", rep: "Electric current", unit: "Ampere", unitSym: "\\mathrm{A}" },
                        { symbol: "R", rep: "Electrical resistance", unit: "Ohm", unitSym: "\\Omega" }
                    ]
                },
                {
                    section: "Energy Transfer & Heat",
                    name: "Total Electrical Energy Transfer",
                    formula: "\\[ E = QV = VIt = RI^2t = \\frac{V^2}{R}t \\]",
                    figure: {
                        img: "image_G9_one/g9-ch3-eq2.png.jpg",
                        svgKey: "g9_l3_ohms_law",
                        title: "Electrical Energy Transfer",
                        caption: "Total electrical work and energy delivered to circuit element: E = VIt = I²Rt."
                    },
                    explanation: "Total electrical energy delivered to a circuit element equals the charge multiplied by voltage, or power multiplied by time.",
                    conditions: "Constant potential difference and steady current.",
                    variables: [
                        { symbol: "E", rep: "Total electrical energy", unit: "Joule", unitSym: "\\mathrm{J}" },
                        { symbol: "Q", rep: "Electric charge transferred", unit: "Coulomb", unitSym: "\\mathrm{C}" },
                        { symbol: "V", rep: "Potential difference across component", unit: "Volt", unitSym: "\\mathrm{V}" },
                        { symbol: "I", rep: "Electric current", unit: "Ampere", unitSym: "\\mathrm{A}" },
                        { symbol: "t", rep: "Time duration", unit: "Second", unitSym: "\\mathrm{s}" },
                        { symbol: "R", rep: "Resistance of appliance", unit: "Ohm", unitSym: "\\Omega" }
                    ]
                },
                {
                    section: "Energy Transfer & Heat",
                    name: "Heat Energy & Specific Heat Capacity",
                    formula: "\\[ Q = mc\\Delta T, \\qquad c = \\frac{Q}{m\\Delta T} \\]",
                    figure: {
                        img: "image_G9_one/g9-ch3-eq3.png.jpg",
                        svgKey: "g9_l3_joule_calorimeter",
                        title: "Specific Heat Capacity",
                        caption: "Thermal energy absorbed or released with temperature variation: Q = mcΔT."
                    },
                    explanation: "Heat energy absorbed or released by a substance of mass m when heated or cooled across temperature change ΔT.",
                    conditions: "No phase change occurring during heating.",
                    variables: [
                        { symbol: "Q", rep: "Thermal heat energy absorbed or released", unit: "Joule", unitSym: "\\mathrm{J}" },
                        { symbol: "m", rep: "Mass of heated substance", unit: "Kilogram", unitSym: "\\mathrm{kg}" },
                        { symbol: "c", rep: "Specific heat capacity", unit: "Joule per kilogram Celsius", unitSym: "\\mathrm{J/(kg\\cdot^\\circ C)}" },
                        { symbol: "\\Delta T", rep: "Temperature change (T_final - T_initial)", unit: "Celsius degree", unitSym: "{^\\circ\\mathrm{C}}" }
                    ]
                },
                {
                    section: "Energy Transfer & Heat",
                    name: "Conservation of Energy: Joule Heating to Heat Gain",
                    formula: "\\[ RI^2t = mc\\Delta T \\]",
                    figure: {
                        img: "image_G9_one/g9-ch3-eq4.png.jpg",
                        svgKey: "g9_l3_joule_calorimeter",
                        title: "Joule Heating Conservation",
                        caption: "Electrical Joule energy converted to liquid thermal gain: RI²t = mcΔT."
                    },
                    explanation: "In an insulated calorimeter, electrical energy dissipated by current in the heating coil converts completely into thermal heat gained by the liquid.",
                    conditions: "Negligible heat loss to calorimeter surroundings.",
                    variables: [
                        { symbol: "R", rep: "Heating element electrical resistance", unit: "Ohm", unitSym: "\\Omega" },
                        { symbol: "I", rep: "Electric current flowing through coil", unit: "Ampere", unitSym: "\\mathrm{A}" },
                        { symbol: "t", rep: "Heating duration", unit: "Second", unitSym: "\\mathrm{s}" },
                        { symbol: "m", rep: "Mass of liquid (water)", unit: "Kilogram", unitSym: "\\mathrm{kg}" },
                        { symbol: "c", rep: "Specific heat capacity of liquid", unit: "Joule per kilogram Celsius", unitSym: "\\mathrm{J/(kg\\cdot^\\circ C)}" },
                        { symbol: "\\Delta T", rep: "Observed temperature increase", unit: "Celsius degree", unitSym: "{^\\circ\\mathrm{C}}" }
                    ]
                },
                {
                    section: "Energy Distribution",
                    name: "Energy Distribution (Light and Heat Percentages)",
                    formula: "\\[ E_L = E \\times (\\%\\text{ of light}), \\qquad E_H = E \\times (\\%\\text{ of heat}) \\]",
                    figure: {
                        img: "image_G9_one/g9-ch3-eq5.png.jpg",
                        svgKey: "g9_l3_joule_calorimeter",
                        title: "Energy Distribution",
                        caption: "Split between useful radiated light and thermal dissipation: E = E_light + E_heat."
                    },
                    explanation: "In an illumination device such as a light bulb, electrical energy splits between useful radiated light and thermal heat dissipation.",
                    conditions: "Total input energy conservation: E = E_L + E_H.",
                    variables: [
                        { symbol: "E_L", rep: "Light energy emitted", unit: "Joule", unitSym: "\\mathrm{J}" },
                        { symbol: "E_H", rep: "Heat energy dissipated", unit: "Joule", unitSym: "\\mathrm{J}" },
                        { symbol: "E", rep: "Total electrical energy input", unit: "Joule", unitSym: "\\mathrm{J}" },
                        { symbol: "\\%\\text{ of light}", rep: "Efficiency percentage for light output", unit: "Percentage", unitSym: "\\%" },
                        { symbol: "\\%\\text{ of heat}", rep: "Percentage of energy converted to heat", unit: "Percentage", unitSym: "\\%" }
                    ]
                },
                {
                    section: "Cost of Electricity",
                    name: "Cost of Electricity & Energy Billing",
                    formula: "\\[ \\text{Cost} = E(\\text{kWh}) \\times \\text{price per kWh}, \\qquad E(\\text{kWh}) = \\frac{P(\\text{W}) \\times t(\\text{h})}{1000} \\]",
                    figure: {
                        img: "image_G9_one/g9-ch3-eq6.png.jpg",
                        svgKey: "g9_l3_ohms_law",
                        title: "Electricity Billing",
                        caption: "Commercial energy consumption in kilowatt-hours: Cost = kWh × unit rate."
                    },
                    explanation: "Commercial electrical utility bills measure energy in kilowatt-hours (1 kWh = 1000 W × 3600 s = 3.6 × 10⁶ J) multiplied by the unit tariff rate.",
                    conditions: "Standard domestic or industrial electrical billing meters.",
                    variables: [
                        { symbol: "\\text{Cost}", rep: "Total cost of electrical energy consumed", unit: "Currency units ($ or local)", unitSym: "\\text{Cost}" },
                        { symbol: "E(\\text{kWh})", rep: "Electrical energy consumed", unit: "Kilowatt-hour", unitSym: "\\mathrm{kWh}" },
                        { symbol: "\\text{price per kWh}", rep: "Utility tariff rate per kilowatt-hour", unit: "Price per kWh", unitSym: "\\text{Price/kWh}" },
                        { symbol: "P", rep: "Power rating of appliance", unit: "Watt", unitSym: "\\mathrm{W}" },
                        { symbol: "t", rep: "Operating time", unit: "Hour", unitSym: "\\mathrm{h}" }
                    ]
                }
            ],
            flashcards: [
                { front: "What is Ohm's Law?", back: "\\( V = IR \\)" },
                { front: "What is the formula for electrical power in terms of I and R?", back: "\\( P = I^2 R \\)" },
                { front: "What is Joule's Law of Heating?", back: "\\( Q = RI^2 t \\)" }
            ],
            quiz: [
                { question: "An appliance draws 5 A at 200 V. What is its power?", options: ["40 W", "1000 W", "500 W", "25 W"], correctIndex: 1, feedback: "P = VI = 200 × 5 = 1000 W." }
            ]
        },

        // --- Grade 9 Chapter 4 ---
        {
            id: "g9-l4",
            gifUrl: "",
            worksheetUrl: "worksheets/g9-ch4-worksheet.pdf",
            ebookUrl: "ebooks/g9-ch4-part1.pdf.pdf",
            ebooks: [
                { title: "Part 1: Magnetic Field (pp. 48–54)", url: "ebooks/g9-ch4-part1.pdf.pdf", altUrl: "ebooks/g9-ch4-part1.pdf" },
                { title: "Part 2: Magnetic Force & Transformers (pp. 55–65)", url: "ebooks/g9-ch4-part2.pdf.pdf", altUrl: "ebooks/g9-ch4-part2.pdf" }
            ],
            games: [{ topic: "Magnetic Force", url: "https://gemini.google.com/share/e58537b64df4" }],
            title: "Chapter 4: Magnetic Field",
            concepts: [
                "Magnetic Field of a Straight Wire: Concentric circular field lines form around the wire: \\( B = \\frac{\\mu_0 I}{2\\pi d} \\). The right-hand grip rule gives the field direction.",
                "Magnetic Field Inside a Solenoid: A long solenoid produces a strong, uniform axial magnetic field: \\( B = \\frac{\\mu_0 NI}{l} \\).",
                "Magnetic Permeability Constant: The permeability of free space is \\( \\mu_0 = 4\\pi \\times 10^{-7}\\,\\mathrm{T\\cdot m/A} \\).",
                "Laplace Magnetic Force: A current-carrying wire of length l placed in magnetic field B experiences deflecting force \\( F = IlB\\sin\\theta \\).",
                "Transformer Relations: An alternating magnetic flux transfers energy between primary and secondary coils: \\( \\frac{V_s}{V_p} = \\frac{N_s}{N_p} = \\frac{I_p}{I_s} \\).",
                "Step-Up vs Step-Down: Step-up (\\( N_s / N_p > 1 \\implies V_s > V_p \\)); Step-down (\\( N_s / N_p < 1 \\implies V_s < V_p \\)).",
                "Power Loss in Transmission: Electrical heating loss along transmission cables is \\( P_J = RI^2 = P_{e1} - P_{e2} \\)."
            ],
            definitions: [
                { term: "Magnetic Field Strength (B)", definition: "A vector field measuring the magnitude and direction of magnetic force exerted on moving charges and electric currents.", symbol: "B", unit: "\\mathrm{T}", equation: "B = \\frac{\\mu_0 I}{2\\pi d}" },
                { term: "Permeability of Free Space (μ₀)", definition: "Physical constant measuring the capability of vacuum or air to support magnetic field lines.", symbol: "\\mu_0", unit: "\\mathrm{T\\cdot m/A}", equation: "\\mu_0 = 4\\pi \\times 10^{-7}\\,\\mathrm{T\\cdot m/A}" },
                { term: "Solenoid Field", definition: "Uniform magnetic field created inside a cylindrical coil of wire carrying electric current.", symbol: "B", unit: "\\mathrm{T}", equation: "B = \\frac{\\mu_0 NI}{l}" },
                { term: "Laplace Force", definition: "Mechanical deflecting force experienced by a current-carrying conductor inside an external magnetic field.", symbol: "F", unit: "\\mathrm{N}", equation: "F = IlB\\sin\\theta" },
                { term: "Transformer", definition: "A device that transfers electrical energy between AC circuits by mutual electromagnetic induction.", symbol: "\\text{XFMR}", unit: "\\text{No unit}", equation: "\\frac{V_s}{V_p} = \\frac{N_s}{N_p} = \\frac{I_p}{I_s}" },
                { term: "Step-Up Transformer", definition: "A transformer with more secondary turns than primary turns (N_s > N_p) that increases output voltage.", symbol: "\\text{Step-up}", unit: "\\text{No unit}", equation: "\\frac{N_s}{N_p} > 1 \\implies V_s > V_p" },
                { term: "Step-Down Transformer", definition: "A transformer with fewer secondary turns than primary turns (N_s < N_p) that decreases output voltage.", symbol: "\\text{Step-down}", unit: "\\text{No unit}", equation: "\\frac{N_s}{N_p} < 1 \\implies V_s < V_p" },
                { term: "Transmission Power Loss (Joule Loss)", definition: "Power dissipated as unwanted heat in long cables due to their internal electrical resistance.", symbol: "P_J", unit: "\\mathrm{W}", equation: "P_J = RI^2 = P_{e1} - P_{e2}" }
            ],
            examples: [
                {
                    title: "Example 1: Magnetic Field of a Long Straight Conductor",
                    question: "A long straight wire carries a direct current of 15 A. Calculate the magnitude of the magnetic field at a perpendicular distance of 0.050 m (5.0 cm) from the wire in air. (μ₀ = 4π × 10⁻⁷ T·m/A).",
                    given: "Current \\( I = 15\\,\\mathrm{A} \\), Distance \\( d = 0.050\\,\\mathrm{m} \\), Permeability \\( \\mu_0 = 4\\pi \\times 10^{-7}\\,\\mathrm{T\\cdot m/A} \\).",
                    find: "Magnetic field strength (\\( B \\)) in \\( \\mathrm{T} \\) and \\( \\mu\\mathrm{T} \\).",
                    equation: "B = \\frac{\\mu_0 I}{2\\pi d}",
                    rearrangement: "B = \\frac{\\mu_0 I}{2\\pi d}",
                    solution: "1. <strong>Formula:</strong> \\( B = \\frac{\\mu_0 I}{2\\pi d} \\)<br>2. <strong>Substitution:</strong><br>\\[ B = \\frac{(4\\pi \\times 10^{-7}\\,\\mathrm{T\\cdot m/A})(15\\,\\mathrm{A})}{2\\pi (0.050\\,\\mathrm{m})} = \\frac{2 \\times 10^{-7} \\times 15}{0.050} \\]<br>3. <strong>Calculation:</strong> \\( B = 6.0 \\times 10^{-5}\\,\\mathrm{T} = 60\\,\\mu\\mathrm{T} \\).",
                    finalAnswer: "B = 6.0 \\times 10^{-5}\\,\\mathrm{T} = 60\\,\\mu\\mathrm{T}",
                    explanation: "The magnetic field forms concentric circles around the conductor and falls off inversely with distance."
                },
                {
                    title: "Example 2: Determining Distance from Wire for a Given Field",
                    question: "At what perpendicular distance from a straight power line carrying a current of 50 A is the induced magnetic field equal to 2.5 × 10⁻⁵ T (comparable to Earth's magnetic field)?",
                    given: "Current \\( I = 50\\,\\mathrm{A} \\), Target field \\( B = 2.5 \\times 10^{-5}\\,\\mathrm{T} \\), \\( \\mu_0 = 4\\pi \\times 10^{-7}\\,\\mathrm{T\\cdot m/A} \\).",
                    find: "Perpendicular distance (\\( d \\)) in \\( \\mathrm{m} \\).",
                    equation: "B = \\frac{\\mu_0 I}{2\\pi d}",
                    rearrangement: "d = \\frac{\\mu_0 I}{2\\pi B}",
                    solution: "1. <strong>Rearranged Formula:</strong> \\( d = \\frac{\\mu_0 I}{2\\pi B} \\)<br>2. <strong>Substitution:</strong><br>\\[ d = \\frac{(4\\pi \\times 10^{-7})(50)}{2\\pi (2.5 \\times 10^{-5})} = \\frac{2 \\times 10^{-7} \\times 50}{2.5 \\times 10^{-5}} \\]<br>3. <strong>Calculation:</strong> \\( d = \\frac{100 \\times 10^{-7}}{2.5 \\times 10^{-5}} = 0.40\\,\\mathrm{m} = 40\\,\\mathrm{cm} \\).",
                    finalAnswer: "d = 0.40\\,\\mathrm{m} = 40\\,\\mathrm{cm}",
                    explanation: "Rearranging the straight wire equation allows determining safe clearance distances around high-current conductors."
                },
                {
                    title: "Example 3: Magnetic Field Inside an Ideal Solenoid",
                    question: "A solenoid of length 0.25 m consists of 500 closely wound turns carrying an electric current of 2.0 A. Calculate the magnetic field strength at the center of the solenoid.",
                    given: "Length \\( l = 0.25\\,\\mathrm{m} \\), Total turns \\( N = 500 \\), Current \\( I = 2.0\\,\\mathrm{A} \\), \\( \\mu_0 = 4\\pi \\times 10^{-7}\\,\\mathrm{T\\cdot m/A} \\).",
                    find: "Internal magnetic field (\\( B \\)) in \\( \\mathrm{T} \\) and \\( \\mathrm{mT} \\).",
                    equation: "B = \\frac{\\mu_0 NI}{l}",
                    rearrangement: "B = \\mu_0 \\left(\\frac{N}{l}\\right) I",
                    solution: "1. <strong>Turn Density:</strong> \\( n = \\frac{N}{l} = \\frac{500}{0.25\\,\\mathrm{m}} = 2000\\,\\text{turns/m} \\)<br>2. <strong>Substitution:</strong><br>\\[ B = (4\\pi \\times 10^{-7})(2000)(2.0) = 1.6\\pi \\times 10^{-3}\\,\\mathrm{T} \\]<br>3. <strong>Calculation:</strong> \\( B \\approx 5.03 \\times 10^{-3}\\,\\mathrm{T} = 5.03\\,\\mathrm{mT} \\).",
                    finalAnswer: "B \\approx 5.03\\,\\mathrm{mT} \\; (5.03 \\times 10^{-3}\\,\\mathrm{T})",
                    explanation: "Inside a tightly wound solenoid, the magnetic field is nearly uniform and directed along the cylinder axis."
                },
                {
                    title: "Example 4: Step-Down Transformer Voltage Calculation",
                    question: "A step-down transformer has 1200 turns in its primary coil and 60 turns in its secondary coil. If connected to a 240 V AC supply, determine the secondary output voltage.",
                    given: "Primary turns \\( N_P = 1200 \\), Secondary turns \\( N_S = 60 \\), Primary voltage \\( V_P = 240\\,\\mathrm{V} \\).",
                    find: "Secondary voltage (\\( V_S \\)) in \\( \\mathrm{V} \\).",
                    equation: "\\frac{V_S}{V_P} = \\frac{N_S}{N_P}",
                    rearrangement: "V_S = V_P \\left(\\frac{N_S}{N_P}\\right)",
                    solution: "1. <strong>Rearranged Formula:</strong> \\( V_S = V_P \\left(\\frac{N_S}{N_P}\\right) \\)<br>2. <strong>Substitution:</strong> \\( V_S = 240\\,\\mathrm{V} \\times \\left(\\frac{60}{1200}\\right) = 240 \\times 0.05 \\)<br>3. <strong>Calculation:</strong> \\( V_S = 12.0\\,\\mathrm{V} \\).",
                    finalAnswer: "V_S = 12.0\\,\\mathrm{V}",
                    explanation: "Voltage scales directly with turn count; a secondary coil with fewer turns steps down the AC voltage proportionally."
                },
                {
                    title: "Example 5: Transformer Current Ratio in an Ideal Transformer",
                    question: "An ideal transformer steps down voltage from 240 V to 12 V (turns ratio 1200:60). When a load connected to the secondary draws a current of 4.0 A, what current is drawn from the primary line?",
                    given: "Primary turns \\( N_P = 1200 \\), Secondary turns \\( N_S = 60 \\), Secondary current \\( I_S = 4.0\\,\\mathrm{A} \\).",
                    find: "Primary current (\\( I_P \\)) in \\( \\mathrm{A} \\).",
                    equation: "\\frac{I_P}{I_S} = \\frac{N_S}{N_P}",
                    rearrangement: "I_P = I_S \\left(\\frac{N_S}{N_P}\\right)",
                    solution: "1. <strong>Rearranged Formula:</strong> \\( I_P = I_S \\left(\\frac{N_S}{N_P}\\right) \\)<br>2. <strong>Substitution:</strong> \\( I_P = 4.0\\,\\mathrm{A} \\times \\left(\\frac{60}{1200}\\right) = 4.0 \\times 0.05 \\)<br>3. <strong>Calculation:</strong> \\( I_P = 0.20\\,\\mathrm{A} \\).",
                    finalAnswer: "I_P = 0.20\\,\\mathrm{A}",
                    explanation: "Because an ideal transformer conserves power (V_P I_P = V_S I_S), stepping down voltage steps up the current by the reciprocal ratio."
                },
                {
                    title: "Example 6: Magnetic Force on a Current-Carrying Conductor",
                    question: "A straight wire of length 0.30 m carrying a current of 4.0 A is placed in a uniform magnetic field of 0.50 T. Calculate the magnetic force exerted on the wire when the angle θ between the wire and the field lines is 90° (perpendicular) and when it is 30°.",
                    given: "Conductor length \\( l = 0.30\\,\\mathrm{m} \\), Current \\( I = 4.0\\,\\mathrm{A} \\), Magnetic field \\( B = 0.50\\,\\mathrm{T} \\).",
                    find: "Magnetic force (\\( F \\)) at \\( \\theta = 90^\\circ \\) and \\( \\theta = 30^\\circ \\) in \\( \\mathrm{N} \\).",
                    equation: "F = I l B \\sin\\theta",
                    rearrangement: "F = I l B \\sin\\theta",
                    solution: "1. <strong>Perpendicular (θ = 90°, sin 90° = 1.0):</strong><br>\\[ F = (4.0\\,\\mathrm{A})(0.30\\,\\mathrm{m})(0.50\\,\\mathrm{T})(1.0) = 0.60\\,\\mathrm{N} \\]<br>2. <strong>At 30° Angle (sin 30° = 0.50):</strong><br>\\[ F = (4.0\\,\\mathrm{A})(0.30\\,\\mathrm{m})(0.50\\,\\mathrm{T})(0.50) = 0.30\\,\\mathrm{N} \\]",
                    finalAnswer: "F_{90^\\circ} = 0.60\\,\\mathrm{N}, \\quad F_{30^\\circ} = 0.30\\,\\mathrm{N}",
                    explanation: "The Laplace magnetic force reaches its maximum when the conductor is perpendicular to the field and drops to zero when parallel (θ = 0°)."
                }
            ],
            equations: [
                {
                    section: "Magnetic Field Strength",
                    name: "Magnetic Field of a Straight Wire",
                    formula: "\\[ B = \\frac{\\mu_0 I}{2\\pi d} \\]",
                    figure: {
                        img: "image_G9_two/g9-ch4-eq1.png.jpg",
                        svgKey: "g9_l4_straight_wire",
                        title: "Straight Wire Magnetic Field",
                        caption: "Concentric circular magnetic flux density around straight conductor: B = μ₀I / (2πd)."
                    },
                    explanation: "Concentric circular magnetic field lines form around a straight wire. The field strength B is directly proportional to current I and inversely proportional to distance d.",
                    conditions: "Long straight conductor in air or vacuum.",
                    variables: [
                        { symbol: "B", rep: "Magnetic field strength (flux density)", unit: "Tesla", unitSym: "\\mathrm{T}" },
                        { symbol: "\\mu_0", rep: "Permeability of free space (4π × 10⁻⁷ T·m/A)", unit: "Tesla meter per Ampere", unitSym: "\\mathrm{T\\cdot m/A}" },
                        { symbol: "I", rep: "Electric current carried by wire", unit: "Ampere", unitSym: "\\mathrm{A}" },
                        { symbol: "d", rep: "Perpendicular distance from conductor", unit: "Meter", unitSym: "\\mathrm{m}" }
                    ]
                },
                {
                    section: "Magnetic Field Strength",
                    name: "Magnetic Field Inside an Ideal Solenoid",
                    formula: "\\[ B = \\frac{\\mu_0 NI}{l} \\]",
                    figure: {
                        img: "image_G9_two/g9-ch4-eq2.png.jpg",
                        svgKey: "g9_l4_solenoid",
                        title: "Solenoid Magnetic Field",
                        caption: "Uniform axial magnetic field inside a helical solenoid coil: B = μ₀NI / l."
                    },
                    explanation: "Inside a tightly wound solenoid, the magnetic field is uniform, strong, and parallel to the central cylinder axis.",
                    conditions: "Long helical coil where length l is much greater than radius.",
                    variables: [
                        { symbol: "B", rep: "Magnetic field inside core", unit: "Tesla", unitSym: "\\mathrm{T}" },
                        { symbol: "\\mu_0", rep: "Permeability of free space", unit: "Tesla meter per Ampere", unitSym: "\\mathrm{T\\cdot m/A}" },
                        { symbol: "N", rep: "Total number of wire turns", unit: "Turns count", unitSym: "\\text{Turns}" },
                        { symbol: "I", rep: "Electric current in coil", unit: "Ampere", unitSym: "\\mathrm{A}" },
                        { symbol: "l", rep: "Total length of solenoid", unit: "Meter", unitSym: "\\mathrm{m}" }
                    ]
                },
                {
                    section: "Magnetic Force",
                    name: "Laplace Force on a Current-Carrying Conductor",
                    formula: "\\[ F = IlB \\sin \\theta \\]",
                    figure: {
                        img: "image_G9_two/g9-ch4-eq3.png.jpg",
                        svgKey: "g9_l4_laplace_force",
                        title: "Laplace Magnetic Force",
                        caption: "Deflecting magnetic force on current-carrying conductor: F = IlB sin θ."
                    },
                    explanation: "A mechanical deflecting force acts on a current-carrying wire inside a magnetic field, directed perpendicular to both the conductor and field lines.",
                    conditions: "Maximum force at θ = 90° (perpendicular); zero force at θ = 0° (parallel).",
                    variables: [
                        { symbol: "F", rep: "Laplace magnetic deflecting force", unit: "Newton", unitSym: "\\mathrm{N}" },
                        { symbol: "I", rep: "Current in conductor", unit: "Ampere", unitSym: "\\mathrm{A}" },
                        { symbol: "l", rep: "Active conductor length within field", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "B", rep: "External magnetic field strength", unit: "Tesla", unitSym: "\\mathrm{T}" },
                        { symbol: "\\theta", rep: "Angle between conductor and field lines", unit: "Degree", unitSym: "{^\\circ}" }
                    ]
                },
                {
                    section: "Transformer Relations",
                    name: "Transformer Turns, Voltage, and Current Ratios",
                    formula: "\\[ \\frac{V_s}{V_p} = \\frac{N_s}{N_p} = \\frac{I_p}{I_s} \\]",
                    figure: {
                        img: "image_G9_two/g9-ch4-eq4.png.jpg",
                        svgKey: "g9_l4_transformer",
                        title: "Transformer Ratios",
                        caption: "Ideal transformer voltage, turns, and current conservation: V_s / V_p = N_s / N_p = I_p / I_s."
                    },
                    explanation: "In an ideal iron-core transformer, voltage ratio equals the coil turns ratio, while current ratio is inverted to conserve electrical power (V_p I_p = V_s I_s).",
                    conditions: "Ideal transformer with 100% magnetic coupling efficiency.",
                    variables: [
                        { symbol: "V_s", rep: "Secondary output voltage", unit: "Volt", unitSym: "\\mathrm{V}" },
                        { symbol: "V_p", rep: "Primary input voltage", unit: "Volt", unitSym: "\\mathrm{V}" },
                        { symbol: "N_s", rep: "Secondary coil turns", unit: "Turns count", unitSym: "\\text{Turns}" },
                        { symbol: "N_p", rep: "Primary coil turns", unit: "Turns count", unitSym: "\\text{Turns}" },
                        { symbol: "I_p", rep: "Primary input current", unit: "Ampere", unitSym: "\\mathrm{A}" },
                        { symbol: "I_s", rep: "Secondary output current", unit: "Ampere", unitSym: "\\mathrm{A}" }
                    ]
                },
                {
                    section: "Transformer Relations",
                    name: "Step-Up and Step-Down Transformer Classification",
                    formula: "\\[ \\text{Step-up: } \\frac{N_s}{N_p} > 1 \\implies V_s > V_p, \\qquad \\text{Step-down: } \\frac{N_s}{N_p} < 1 \\implies V_s < V_p \\]",
                    figure: {
                        img: "image_G9_two/g9-ch4-eq5.png.jpg",
                        svgKey: "g9_l4_transformer",
                        title: "Step-Up vs Step-Down Transformers",
                        caption: "Transformer turns ratio classification: Step-up (V_s > V_p) vs Step-down (V_s < V_p)."
                    },
                    explanation: "Step-up transformers increase voltage (and decrease current) for power transmission; step-down transformers reduce voltage to safe levels for consumer devices.",
                    conditions: "AC operation via mutual electromagnetic induction.",
                    variables: [
                        { symbol: "N_s / N_p", rep: "Turns ratio", unit: "Dimensionless ratio", unitSym: "\\text{No unit}" },
                        { symbol: "V_s", rep: "Secondary voltage", unit: "Volt", unitSym: "\\mathrm{V}" },
                        { symbol: "V_p", rep: "Primary voltage", unit: "Volt", unitSym: "\\mathrm{V}" }
                    ]
                },
                {
                    section: "Transmission Power Loss",
                    name: "Power Loss in Long-Distance Transmission Lines",
                    formula: "\\[ P_J = RI^2 = P_{e1} - P_{e2} \\]",
                    figure: {
                        img: "image_G9_two/g9-ch4-eq6.png.jpg",
                        svgKey: "g9_l4_transformer",
                        title: "Transmission Line Joule Loss",
                        caption: "Thermal power dissipation in transmission cables: P_J = RI² = P_{e1} - P_{e2}."
                    },
                    explanation: "Joule thermal power loss in cables depends on resistance R and the square of current I, demonstrating why high voltages are used to minimize transmission current.",
                    conditions: "Electrical power transmission across conductive lines.",
                    variables: [
                        { symbol: "P_J", rep: "Joule heat power dissipated in cables", unit: "Watt", unitSym: "\\mathrm{W}" },
                        { symbol: "R", rep: "Total resistance of transmission lines", unit: "Ohm", unitSym: "\\Omega" },
                        { symbol: "I", rep: "Transmission current", unit: "Ampere", unitSym: "\\mathrm{A}" },
                        { symbol: "P_{e1}", rep: "Input power sent from station", unit: "Watt", unitSym: "\\mathrm{W}" },
                        { symbol: "P_{e2}", rep: "Useful power received at substation", unit: "Watt", unitSym: "\\mathrm{W}" }
                    ]
                }
            ],
            flashcards: [
                { front: "What is the formula for the magnetic field of a straight wire?", back: "\\( B = \\frac{\\mu_0 I}{2\\pi d} \\)" },
                { front: "What is the formula for the magnetic field inside a solenoid?", back: "\\( B = \\frac{\\mu_0 NI}{l} \\)" },
                { front: "What is the relationship between voltages and turns in a transformer?", back: "\\( \\frac{V_S}{V_P} = \\frac{N_S}{N_P} \\)" }
            ],
            quiz: [
                { question: "In an ideal step-up transformer, which is true?", options: ["V_S > V_P and I_S < I_P", "V_S < V_P", "V_S = V_P", "N_S < N_P"], correctIndex: 0, feedback: "Step-up increases voltage and decreases current." }
            ]
        },

        // --- Grade 9 Chapter 5 ---
        {
            id: "g9-l5",
            gifUrl: "",
            worksheetUrl: "worksheets/g9-ch5-worksheet.pdf",
            ebookUrl: "ebooks/g9-ch5-1-light-ray.pdf.pdf",
            ebooks: [
                { title: "1. Light Ray (pp. 66–68)", url: "ebooks/g9-ch5-1-light-ray.pdf.pdf", altUrl: "ebooks/g9-ch5-1-light-ray.pdf" },
                { title: "2. Reflection of Light (pp. 69–71)", url: "ebooks/g9-ch5-2-reflection.pdf.pdf", altUrl: "ebooks/g9-ch5-2-reflection.pdf" },
                { title: "3. Mirrors (pp. 72–79)", url: "ebooks/g9-ch5-3-mirrors.pdf.pdf", altUrl: "ebooks/g9-ch5-3-mirrors.pdf" },
                { title: "4. Refraction of Light (pp. 80–85)", url: "ebooks/g9-ch5-4-refraction.pdf.pdf", altUrl: "ebooks/g9-ch5-4-refraction.pdf" },
                { title: "5. Lenses (pp. 86–97)", url: "ebooks/g9-ch5-5-lenses.pdf.pdf", altUrl: "ebooks/g9-ch5-5-lenses.pdf" }
            ],
            games: [{ topic: "Refraction of Light", url: "https://gemini.google.com/share/307ba374b958" }],
            title: "Chapter 5: Light",
            concepts: [
                "Law of Reflection: The angle of reflection equals the angle of incidence: \\( i = r \\).",
                "Refraction & Snell's Law: As light travels between media of different optical densities, it refracts according to \\( n_1 \\sin i = n_2 \\sin r \\), where \\( n = \\frac{c}{v} \\).",
                "Real and Apparent Depth: Submerged objects appear shallower than their actual depth due to light bending at the surface: \\( n = \\frac{\\text{Real depth } (H)}{\\text{Apparent depth } (h)} \\).",
                "Critical Angle & Total Internal Reflection (TIR): When traveling from denser to rarer medium at incident angles exceeding critical angle \\( \\theta_c \\), light reflects totally inside: \\( \\sin \\theta_c = \\frac{n_2}{n_1} \\).",
                "Pinhole Camera: Ray optics through an aperture forms an inverted real image with magnification \\( m = \\frac{h_i}{h_o} = \\frac{d_i}{d_o} \\).",
                "Spherical Mirrors & Thin Lenses: Relates focal length, object distance, and image distance: \\( \\frac{1}{f} = \\frac{1}{d_o} + \\frac{1}{d_i} \\), \\( f = \\frac{R}{2} \\), and \\( M = \\frac{d_i}{d_o} = -\\frac{h_i}{h_o} \\)."
            ],
            definitions: [
                { term: "Law of Reflection", definition: "The fundamental optical principle stating that the angle of incidence equals the angle of reflection relative to the normal.", symbol: "i = r", unit: "\\text{Degrees}", equation: "i = r" },
                { term: "Refractive Index (n)", definition: "The ratio of the speed of light in vacuum to the speed of light in a given optical medium.", symbol: "n", unit: "\\text{No unit}", equation: "n = \\frac{c}{v}" },
                { term: "Snell's Law of Refraction", definition: "The mathematical law relating the angles of incidence and refraction to the refractive indices of two interfacing media.", symbol: "\\text{Snell}", unit: "\\text{No unit}", equation: "n_1 \\sin i = n_2 \\sin r" },
                { term: "Real and Apparent Depth", definition: "The ratio of true vertical depth H of a submerged object to its apparent observed depth h caused by refraction.", symbol: "n", unit: "\\text{No unit}", equation: "n = \\frac{H}{h}" },
                { term: "Critical Angle (θ_c)", definition: "The minimum angle of incidence in an optically denser medium for which the angle of refraction is 90°.", symbol: "\\theta_c", unit: "\\text{Degrees}", equation: "\\sin\\theta_c = \\frac{n_2}{n_1}" },
                { term: "Pinhole Camera Magnification", definition: "Linear magnification of an inverted image formed by straight-line ray paths through a pinhole aperture.", symbol: "m", unit: "\\text{No unit}", equation: "m = \\frac{h_i}{h_o} = \\frac{d_i}{d_o}" },
                { term: "Thin Lens / Mirror Equation", definition: "Equation relating the focal length f of a lens or spherical mirror to object distance d_o and image distance d_i.", symbol: "f", unit: "\\mathrm{m}", equation: "\\frac{1}{f} = \\frac{1}{d_o} + \\frac{1}{d_i}" },
                { term: "Focal Length and Radius of Curvature", definition: "The focal length of a spherical mirror or lens equals half its radius of curvature.", symbol: "f, R", unit: "\\mathrm{m}", equation: "f = \\frac{R}{2} \\implies R = 2f" },
                { term: "Linear Optical Magnification (M)", definition: "The ratio of image height to object height, or ratio of image distance to object distance.", symbol: "M", unit: "\\text{No unit}", equation: "M = \\frac{d_i}{d_o} = -\\frac{h_i}{h_o}" }
            ],
            examples: [
                {
                    title: "Example 1: Law of Reflection on a Plane Mirror",
                    question: "A light ray strikes a plane mirror at an angle of incidence of 35° with the normal. Find the angle of reflection and the total angle between the incident and reflected rays.",
                    given: "Angle of incidence \\( i = 35^\\circ \\).",
                    find: "Angle of reflection (\\( r \\)) and total angle (\\( \\theta_{\\text{total}} \\)) in degrees.",
                    equation: "i = r, \\quad \\theta_{\\text{total}} = i + r",
                    rearrangement: "r = i",
                    solution: "1. <strong>Angle of Reflection:</strong> By the law of reflection, \\( r = i = 35^\\circ \\).<br>2. <strong>Total Separation Angle:</strong><br>\\[ \\theta_{\\text{total}} = i + r = 35^\\circ + 35^\\circ = 70^\\circ \\]",
                    finalAnswer: "r = 35^\\circ, \\quad \\theta_{\\text{total}} = 70^\\circ",
                    explanation: "In specular reflection, the angle of reflection is always equal to the angle of incidence, both measured from the normal line."
                },
                {
                    title: "Example 2: Speed of Light from Refractive Index",
                    question: "The speed of light in vacuum is c = 3.00 × 10⁸ m/s. Given that crown glass has a refractive index n = 1.52, calculate the speed of light inside the glass.",
                    given: "Vacuum light speed \\( c = 3.00 \\times 10^8\\,\\mathrm{m/s} \\), Refractive index \\( n = 1.52 \\).",
                    find: "Speed of light in glass (\\( v \\)) in \\( \\mathrm{m/s} \\).",
                    equation: "n = \\frac{c}{v}",
                    rearrangement: "v = \\frac{c}{n}",
                    solution: "1. <strong>Rearranged Formula:</strong> \\( v = \\frac{c}{n} \\)<br>2. <strong>Substitution:</strong> \\( v = \\frac{3.00 \\times 10^8\\,\\mathrm{m/s}}{1.52} \\)<br>3. <strong>Calculation:</strong> \\( v \\approx 1.97 \\times 10^8\\,\\mathrm{m/s} \\).",
                    finalAnswer: "v \\approx 1.97 \\times 10^8\\,\\mathrm{m/s}",
                    explanation: "Light propagates more slowly through denser optical media in inverse proportion to the medium's index of refraction."
                },
                {
                    title: "Example 3: Snell's Law – Refraction from Air into Water",
                    question: "A light ray traveling in air (n₁ = 1.00) enters water (n₂ = 1.33) at an angle of incidence of 40°. Calculate the sine of the angle of refraction and the angle of refraction r.",
                    given: "Medium 1 index \\( n_1 = 1.00 \\), Medium 2 index \\( n_2 = 1.33 \\), Incident angle \\( i = 40^\\circ \\) (\\( \\sin 40^\\circ \\approx 0.6428 \\)).",
                    find: "Angle of refraction (\\( r \\)) in degrees.",
                    equation: "n_1 \\sin i = n_2 \\sin r",
                    rearrangement: "\\sin r = \\frac{n_1 \\sin i}{n_2}",
                    solution: "1. <strong>Rearranged Formula:</strong> \\( \\sin r = \\frac{n_1 \\sin i}{n_2} \\)<br>2. <strong>Substitution:</strong> \\( \\sin r = \\frac{(1.00)(0.6428)}{1.33} \\approx 0.4833 \\)<br>3. <strong>Angle Calculation:</strong> \\( r = \\sin^{-1}(0.4833) \\approx 28.9^\\circ \\).",
                    finalAnswer: "r \\approx 28.9^\\circ",
                    explanation: "Light bends toward the normal line (r < i) when transitioning from an optically rarer medium to a denser medium."
                },
                {
                    title: "Example 4: Determining Refractive Index from Observed Angles",
                    question: "A ray of light traveling in air (n₁ = 1.00) strikes a transparent polymer slab at an angle of incidence of 50° and is refracted at an angle of 30°. Determine the refractive index of the slab.",
                    given: "Air index \\( n_1 = 1.00 \\), Incident angle \\( i = 50^\\circ \\) (\\( \\sin 50^\\circ \\approx 0.7660 \\)), Refracted angle \\( r = 30^\\circ \\) (\\( \\sin 30^\\circ = 0.5000 \\)).",
                    find: "Refractive index of polymer slab (\\( n_2 \\)).",
                    equation: "n_1 \\sin i = n_2 \\sin r",
                    rearrangement: "n_2 = \\frac{n_1 \\sin i}{\\sin r}",
                    solution: "1. <strong>Rearranged Formula:</strong> \\( n_2 = \\frac{n_1 \\sin i}{\\sin r} \\)<br>2. <strong>Substitution:</strong> \\( n_2 = \\frac{(1.00)(0.7660)}{0.5000} \\)<br>3. <strong>Calculation:</strong> \\( n_2 = 1.532 \\approx 1.53 \\).",
                    finalAnswer: "n_2 \\approx 1.53",
                    explanation: "Measuring the deflection of light rays through a flat interface yields the experimental refractive index of the material."
                },
                {
                    title: "Example 5: Critical Angle and Total Internal Reflection",
                    question: "Light propagates from flint glass (n₁ = 1.62) toward water (n₂ = 1.33). Calculate the critical angle θ_c at the glass-water interface.",
                    given: "Denser medium index \\( n_1 = 1.62 \\), Rarer medium index \\( n_2 = 1.33 \\).",
                    find: "Critical angle (\\( \\theta_c \\)) in degrees.",
                    equation: "\\sin\\theta_c = \\frac{n_2}{n_1}",
                    rearrangement: "\\theta_c = \\sin^{-1}\\left(\\frac{n_2}{n_1}\\right)",
                    solution: "1. <strong>Formula:</strong> \\( \\sin\\theta_c = \\frac{n_2}{n_1} \\)<br>2. <strong>Substitution:</strong> \\( \\sin\\theta_c = \\frac{1.33}{1.62} \\approx 0.8210 \\)<br>3. <strong>Angle Calculation:</strong> \\( \\theta_c = \\sin^{-1}(0.8210) \\approx 55.2^\\circ \\).",
                    finalAnswer: "\\theta_c \\approx 55.2^\\circ",
                    explanation: "At angles of incidence exceeding 55.2°, all light is totally internally reflected back into the glass with zero refraction into water."
                },
                {
                    title: "Example 6: Linear Magnification and Image Height in a Lens",
                    question: "An object of height 5.0 cm is placed 20 cm in front of a converging lens. A real inverted image is formed on a screen placed 60 cm on the other side of the lens. Find the magnification and the height of the image.",
                    given: "Object height \\( h_o = 5.0\\,\\mathrm{cm} \\), Object distance \\( d_o = 20\\,\\mathrm{cm} \\), Image distance \\( d_i = 60\\,\\mathrm{cm} \\).",
                    find: "Magnification (\\( m \\)) and image height (\\( h_i \\)) in \\( \\mathrm{cm} \\).",
                    equation: "m = \\frac{d_i}{d_o} = \\frac{h_i}{h_o}",
                    rearrangement: "m = \\frac{d_i}{d_o}, \\quad h_i = m \\times h_o",
                    solution: "1. <strong>Magnification:</strong><br>\\[ m = \\frac{d_i}{d_o} = \\frac{60\\,\\mathrm{cm}}{20\\,\\mathrm{cm}} = 3.0 \\]<br>2. <strong>Image Height:</strong><br>\\[ h_i = m \\times h_o = (3.0)(5.0\\,\\mathrm{cm}) = 15.0\\,\\mathrm{cm} \\]",
                    finalAnswer: "m = 3.0 \\; (\\text{dimensionless}), \\quad h_i = 15.0\\,\\mathrm{cm}",
                    explanation: "The image is three times larger than the original object because the image distance is three times the object distance."
                }
            ],
            equations: [
                {
                    section: "Law of Reflection",
                    name: "Law of Reflection",
                    formula: "\\[ i = r \\]",
                    figure: {
                        img: "image_G9_two/g9-ch5-eq1.png.jpg",
                        svgKey: "g9_l5_reflection",
                        title: "Law of Reflection",
                        caption: "Reflection on smooth boundary: angle of incidence equals angle of reflection (i = r)."
                    },
                    explanation: "When light reflects off a smooth boundary, the angle of reflection equals the angle of incidence, with both rays lying in the same plane as the normal.",
                    conditions: "Specular reflection on smooth planar or curved surfaces.",
                    variables: [
                        { symbol: "i", rep: "Angle of incidence", unit: "Degree", unitSym: "{^\\circ}" },
                        { symbol: "r", rep: "Angle of reflection", unit: "Degree", unitSym: "{^\\circ}" }
                    ]
                },
                {
                    section: "Refraction & Snell's Law",
                    name: "Refractive Index & Snell's Law",
                    formula: "\\[ n = \\frac{c}{v}, \\qquad n_1 \\sin i = n_2 \\sin r \\]",
                    figure: {
                        img: "image_G9_two/g9-ch5-eq2.png.jpg",
                        svgKey: "g9_l5_refraction_snell",
                        title: "Refraction & Snell's Law",
                        caption: "Wave velocity refraction and ray deviation: n₁ sin i = n₂ sin r, n = c / v."
                    },
                    explanation: "Light changes speed and bends when crossing an interface between media with different optical densities according to Snell's law.",
                    conditions: "Monochromatic light passing through a planar interface between two transparent media.",
                    variables: [
                        { symbol: "n", rep: "Refractive index of optical medium", unit: "Dimensionless ratio", unitSym: "\\text{No unit}" },
                        { symbol: "c", rep: "Speed of light in vacuum (3.00 × 10⁸ m/s)", unit: "Meter per second", unitSym: "\\mathrm{m/s}" },
                        { symbol: "v", rep: "Speed of light in medium", unit: "Meter per second", unitSym: "\\mathrm{m/s}" },
                        { symbol: "n_1, n_2", rep: "Refractive indices of medium 1 and medium 2", unit: "Dimensionless ratio", unitSym: "\\text{No unit}" },
                        { symbol: "i", rep: "Angle of incidence", unit: "Degree", unitSym: "{^\\circ}" },
                        { symbol: "r", rep: "Angle of refraction", unit: "Degree", unitSym: "{^\\circ}" }
                    ]
                },
                {
                    section: "Refraction & Snell's Law",
                    name: "Real and Apparent Depth",
                    formula: "\\[ n = \\frac{\\text{Real depth } (H)}{\\text{Apparent depth } (h)} = \\frac{H}{h} \\]",
                    figure: {
                        img: "image_G9_two/g9-ch5-eq3.png.jpg",
                        svgKey: "g9_l5_apparent_depth",
                        title: "Real and Apparent Depth",
                        caption: "Vertical optical displacement of submerged object viewed from above: n = H / h."
                    },
                    explanation: "Due to refraction bending rays away from the normal as they exit denser liquids into air, submerged objects appear raised closer to the surface.",
                    conditions: "Observer viewing submerged objects near normal incidence from air.",
                    variables: [
                        { symbol: "n", rep: "Refractive index of liquid (water = 1.33)", unit: "Dimensionless ratio", unitSym: "\\text{No unit}" },
                        { symbol: "H", rep: "Actual vertical depth of submerged object", unit: "Meter (or cm)", unitSym: "\\mathrm{m}" },
                        { symbol: "h", rep: "Apparent depth seen from above", unit: "Meter (or cm)", unitSym: "\\mathrm{m}" }
                    ]
                },
                {
                    section: "Total Internal Reflection",
                    name: "Critical Angle & Total Internal Reflection (TIR)",
                    formula: "\\[ \\sin \\theta_c = \\frac{n_2}{n_1} \\]",
                    figure: {
                        img: "image_G9_two/g9-ch5-eq4.png.jpg",
                        svgKey: "g9_l5_apparent_depth",
                        title: "Total Internal Reflection & Critical Angle",
                        caption: "Light trapped in denser medium at incidence beyond critical threshold: sin θ_c = n₂ / n₁."
                    },
                    explanation: "When light travels from an optically denser medium (n₁) toward a rarer medium (n₂), the critical angle θ_c produces a 90° refracted ray. Angles exceeding θ_c undergo total internal reflection.",
                    conditions: "Light traveling from denser toward rarer medium (n₁ > n₂).",
                    variables: [
                        { symbol: "\\theta_c", rep: "Critical angle of incidence", unit: "Degree", unitSym: "{^\\circ}" },
                        { symbol: "n_1", rep: "Refractive index of denser medium", unit: "Dimensionless ratio", unitSym: "\\text{No unit}" },
                        { symbol: "n_2", rep: "Refractive index of rarer medium (air = 1.00)", unit: "Dimensionless ratio", unitSym: "\\text{No unit}" }
                    ]
                },
                {
                    section: "Pinhole Camera",
                    name: "Pinhole Camera Magnification",
                    formula: "\\[ m = \\frac{h_i}{h_o} = \\frac{d_i}{d_o} \\]",
                    figure: {
                        img: "image_G9_two/g9-ch5-eq5.png.jpg",
                        svgKey: "g9_l5_convex_lens",
                        title: "Pinhole Camera Magnification",
                        caption: "Inverted geometric image formation and linear scaling: m = h_i / h_o = d_i / d_o."
                    },
                    explanation: "Rectilinear propagation of light through a small pinhole forms an inverted real image whose magnification equals the ratio of screen distance to object distance.",
                    conditions: "Pinhole camera with small aperture and sharp geometric ray paths.",
                    variables: [
                        { symbol: "m", rep: "Linear magnification", unit: "Dimensionless ratio", unitSym: "\\text{No unit}" },
                        { symbol: "h_i", rep: "Height of inverted image on screen", unit: "Meter (or cm)", unitSym: "\\mathrm{m}" },
                        { symbol: "h_o", rep: "Height of object", unit: "Meter (or cm)", unitSym: "\\mathrm{m}" },
                        { symbol: "d_i", rep: "Image distance (pinhole to screen)", unit: "Meter (or cm)", unitSym: "\\mathrm{m}" },
                        { symbol: "d_o", rep: "Object distance (object to pinhole)", unit: "Meter (or cm)", unitSym: "\\mathrm{m}" }
                    ]
                },
                {
                    section: "Spherical Mirrors & Thin Lenses",
                    name: "Lens/Mirror Formula and Focal Length",
                    formula: "\\[ \\frac{1}{f} = \\frac{1}{d_o} + \\frac{1}{d_i}, \\qquad f = \\frac{R}{2} \\implies R = 2f \\]",
                    figure: {
                        img: "image_G9_two/g9-ch5-eq6.png.jpg",
                        svgKey: "g9_l5_convex_lens",
                        title: "Thin Lens & Mirror Formula",
                        caption: "Gaussian optical relationship: 1/f = 1/d_o + 1/d_i, with focal length f = R / 2."
                    },
                    explanation: "Relates focal length f, object distance d_o, and image distance d_i for thin spherical lenses and spherical mirrors, where focal length is half the radius of curvature.",
                    conditions: "Paraxial light rays through thin lenses or spherical mirrors.",
                    variables: [
                        { symbol: "f", rep: "Focal length", unit: "Meter (or cm)", unitSym: "\\mathrm{m}" },
                        { symbol: "d_o", rep: "Distance from object to lens/mirror", unit: "Meter (or cm)", unitSym: "\\mathrm{m}" },
                        { symbol: "d_i", rep: "Distance from image to lens/mirror", unit: "Meter (or cm)", unitSym: "\\mathrm{m}" },
                        { symbol: "R", rep: "Radius of curvature of optical surface", unit: "Meter (or cm)", unitSym: "\\mathrm{m}" }
                    ]
                },
                {
                    section: "Spherical Mirrors & Thin Lenses",
                    name: "Direct Algebraic Rearrangements of Lens Formula",
                    formula: "\\[ f = \\frac{d_i d_o}{d_i + d_o}, \\qquad d_i = \\frac{f d_o}{d_o - f}, \\qquad d_o = \\frac{f d_i}{d_i - f} \\]",
                    figure: {
                        img: "image_G9_two/g9-ch5-eq7.png.jpg",
                        svgKey: "g9_l5_convex_lens",
                        title: "Direct Lens Equation Variants",
                        caption: "Single-step algebraic calculations: f = d_i·d_o/(d_i + d_o), d_i = f·d_o/(d_o - f)."
                    },
                    explanation: "Algebraic rearrangements to directly calculate focal length, image position, or object position without fraction manipulation.",
                    conditions: "Standard thin lens equation.",
                    variables: [
                        { symbol: "f", rep: "Focal length", unit: "Meter (or cm)", unitSym: "\\mathrm{m}" },
                        { symbol: "d_o", rep: "Object distance", unit: "Meter (or cm)", unitSym: "\\mathrm{m}" },
                        { symbol: "d_i", rep: "Image distance", unit: "Meter (or cm)", unitSym: "\\mathrm{m}" }
                    ]
                },
                {
                    section: "Spherical Mirrors & Thin Lenses",
                    name: "Optical Magnification & Sign Conventions",
                    formula: "\\[ M = \\frac{d_i}{d_o} = -\\frac{h_i}{h_o} \\implies h_i = -\\frac{d_i h_o}{d_o} \\]",
                    figure: {
                        img: "image_G9_two/g9-ch5-eq8.png.jpg",
                        svgKey: "g9_l5_convex_lens",
                        title: "Magnification & Lens Sign Conventions",
                        caption: "Cartesian optical signs: M = d_i / d_o = -h_i / h_o (inverted image h_i < 0)."
                    },
                    explanation: "Sign conventions: Convex lens (f > 0); Concave lens (f < 0). Real images formed behind lens (d_i > 0); Virtual images in front of lens (d_i < 0). Negative image height indicates inverted image.",
                    conditions: "Cartesian sign convention for geometric optics.",
                    variables: [
                        { symbol: "M", rep: "Linear magnification", unit: "Dimensionless ratio", unitSym: "\\text{No unit}" },
                        { symbol: "h_i", rep: "Image height (negative for inverted)", unit: "Meter (or cm)", unitSym: "\\mathrm{m}" },
                        { symbol: "h_o", rep: "Object height (upright > 0)", unit: "Meter (or cm)", unitSym: "\\mathrm{m}" },
                        { symbol: "d_i", rep: "Image distance from lens", unit: "Meter (or cm)", unitSym: "\\mathrm{m}" },
                        { symbol: "d_o", rep: "Object distance from lens", unit: "Meter (or cm)", unitSym: "\\mathrm{m}" }
                    ]
                }
            ],
            flashcards: [
                { front: "What is Snell's Law?", back: "\\( n_1 \\sin i = n_2 \\sin r \\)" },
                { front: "What is the critical angle formula?", back: "\\( \\sin\\theta_c = \\frac{n_2}{n_1} \\)" },
                { front: "What is the formula for refractive index?", back: "\\( n = \\frac{c}{v} \\)" }
            ],
            quiz: [
                { question: "Total internal reflection occurs only when light travels from:", options: ["Denser to rarer medium", "Rarer to denser medium", "Air into water", "Vacuum into glass"], correctIndex: 0, feedback: "TIR requires light traveling from denser to rarer medium with angle exceeding critical angle." }
            ]
        }
    ];

    // =========================================================================
    // GRADE 12 CURRICULUM - VERIFIED FROM STUDENT PDF SUMMARY SLIDES
    // Contains every single formula from all 40 PDF pages with complete 4-column tables
    // =========================================================================
    const G12_LESSONS = [
        // =====================================================================
        // CHAPTER 1 LESSON 1: Kinetic Theory of Ideal Gases (PDF Pages 2 - 8)
        // =====================================================================
        {
            id: "g12-l1",
            gifUrl: "",
            worksheetUrl: "worksheets/ch1-l1-worksheet.pdf",
            ebookUrl: "ebooks/g12-ch1-l1-ebook.pdf.pdf",
            ebooks: [
                { title: "Thermal Physics (pp. 1–18)", url: "ebooks/g12-ch1-l1-ebook.pdf.pdf", altUrl: "ebooks/g12-ch1-l1-ebook.pdf" }
            ],
            games: [{ topic: "Kinetic Theory of Ideal Gases", url: "https://gemini.google.com/share/acfae742b2c0" }],
            title: "Chapter 1 Lesson 1: Kinetic Theory of Ideal Gases",
            concepts: [
                "Ideal Gas Model: Particles treated as point masses in continuous random motion with elastic collisions.",
                "Microscopic Pressure: Arises from momentum transfer upon container wall collisions: \\( P = \\frac{2}{3}\\left(\\frac{N}{V}\\right)K_{av} \\).",
                "Equation of State: Relates macroscopic variables: \\( PV = nRT = N k_B T \\).",
                "Molecular Kinetic Energy: Dependent solely on absolute temperature: \\( K_{av} = \\frac{3}{2}k_B T \\).",
                "Root-Mean-Square Speed: Effective molecular speed: \\( v_{rms} = \\sqrt{\\frac{3k_B T}{m_0}} = \\sqrt{\\frac{3RT}{M}} = \\sqrt{\\frac{3P}{\\rho}} \\).",
                "Gas Quantities & Conversions: \\( n = \\frac{m}{M} = \\frac{N}{N_A} \\) and \\( T(K) = t(^\\circ\\mathrm{C}) + 273 \\)."
            ],
            definitions: [
                { term: "Ideal Gas", definition: "A theoretical model of gas consisting of identical, randomly moving point-like molecules with negligible volume that exert no forces except during elastic collisions.", symbol: "\\text{Ideal Gas}", unit: "No SI unit", equation: "PV = nRT = N k_B T" },
                { term: "Gas Pressure", definition: "The macroscopic normal force exerted per unit area on container walls by countless molecular collisions.", symbol: "P", unit: "\\mathrm{Pa}", equation: "P = \\frac{F}{A} = \\frac{2}{3}\\left(\\frac{N}{V}\\right)K_{av}" },
                { term: "Universal Gas Constant (R)", definition: "Proportionality constant relating energy of one mole of gas to absolute temperature.", symbol: "R", unit: "\\mathrm{J/(mol\\cdot K)}", equation: "R = 8.314\\,\\mathrm{J/(mol\\cdot K)}" },
                { term: "Boltzmann Constant (k_B)", definition: "Gas constant per individual particle, equal to R divided by Avogadro's number.", symbol: "k_B", unit: "\\mathrm{J/K}", equation: "k_B = \\frac{R}{N_A} = 1.38\\times 10^{-23}\\,\\mathrm{J/K}" },
                { term: "Root-Mean-Square Speed (v_rms)", definition: "Square root of the mean squared speeds of all gas molecules in the sample.", symbol: "v_{rms}", unit: "\\mathrm{m/s}", equation: "v_{rms} = \\sqrt{\\frac{3RT}{M}}" }
            ],
            examples: [
                {
                    title: "Example 1: Pressure from Molecular Kinetic Energy Density",
                    question: "A closed container of volume 0.050 m³ encloses 1.0 × 10²⁴ ideal gas molecules. If the average translational kinetic energy per molecule is 6.0 × 10⁻²¹ J, calculate the macroscopic gas pressure in pascals and kilopascals.",
                    given: "Container volume \\( V = 0.050\\,\\mathrm{m^3} \\), Number of molecules \\( N = 1.0 \\times 10^{24} \\), Average molecular kinetic energy \\( K_{av} = 6.0 \\times 10^{-21}\\,\\mathrm{J} \\).",
                    find: "Macroscopic gas pressure (\\( P \\)) in \\( \\mathrm{Pa} \\) and \\( \\mathrm{kPa} \\).",
                    equation: "P = \\frac{2}{3}\\left(\\frac{N}{V}\\right)K_{av}",
                    rearrangement: "P = \\frac{2}{3}\\left(\\frac{N}{V}\\right)K_{av}",
                    solution: "1. <strong>Formula:</strong> \\( P = \\frac{2}{3}\\left(\\frac{N}{V}\\right)K_{av} \\)<br>2. <strong>Substitution:</strong><br>\\[ P = \\frac{2}{3}\\left(\\frac{1.0 \\times 10^{24}}{0.050\\,\\mathrm{m^3}}\\right)(6.0 \\times 10^{-21}\\,\\mathrm{J}) = \\frac{2}{3}(2.0 \\times 10^{25})(6.0 \\times 10^{-21}) \\]<br>3. <strong>Calculation:</strong> \\( P = 80{,}000\\,\\mathrm{Pa} = 80\\,\\mathrm{kPa} \\).",
                    finalAnswer: "P = 80\\,\\mathrm{kPa} \\; (80{,}000\\,\\mathrm{Pa})",
                    explanation: "Macroscopic gas pressure equals two-thirds of the volumetric kinetic energy density of molecular random translational motion."
                },
                {
                    title: "Example 2: Wall Pressure from Rate of Momentum Transfer",
                    question: "A stream of gas molecules impacts a wall of area 0.020 m² perpendicularly. During a time interval of 0.50 s, the colliding molecules transfer a total normal momentum of 40 kg·m/s to the surface. Calculate the average force exerted on the wall and the resulting pressure.",
                    given: "Wall surface area \\( A = 0.020\\,\\mathrm{m^2} \\), Collision time \\( \\Delta t = 0.50\\,\\mathrm{s} \\), Total momentum transferred \\( \\Delta p = 40\\,\\mathrm{kg\\cdot m/s} \\).",
                    find: "Average impact force (\\( F \\)) in \\( \\mathrm{N} \\) and pressure (\\( P \\)) in \\( \\mathrm{Pa} \\).",
                    equation: "F = \\frac{\\Delta p}{\\Delta t}, \\quad P = \\frac{F}{A}",
                    rearrangement: "P = \\frac{\\Delta p}{A \\Delta t}",
                    solution: "1. <strong>Average Normal Force:</strong><br>\\[ F = \\frac{\\Delta p}{\\Delta t} = \\frac{40\\,\\mathrm{kg\\cdot m/s}}{0.50\\,\\mathrm{s}} = 80\\,\\mathrm{N} \\]<br>2. <strong>Pressure Calculation:</strong><br>\\[ P = \\frac{F}{A} = \\frac{80\\,\\mathrm{N}}{0.020\\,\\mathrm{m^2}} = 4000\\,\\mathrm{Pa} = 4.0\\,\\mathrm{kPa} \\]",
                    finalAnswer: "F = 80\\,\\mathrm{N}, \\quad P = 4.0\\,\\mathrm{kPa} \\; (4000\\,\\mathrm{Pa})",
                    explanation: "Gas pressure is fundamentally the time-averaged normal force per unit area generated by cumulative molecular collisions."
                },
                {
                    title: "Example 3: Wall Pressure from Elastic Molecular Collisions",
                    question: "Consider 5.0 × 10²² gas molecules, each of mass m₀ = 4.8 × 10⁻²⁶ kg, striking a container wall of area 0.10 m² perpendicularly with speed v = 500 m/s every Δt = 0.20 s. Assuming all collisions are perfectly elastic, find the pressure exerted on the wall.",
                    given: "Molecule count \\( N = 5.0 \\times 10^{22} \\), Particle mass \\( m_0 = 4.8 \\times 10^{-26}\\,\\mathrm{kg} \\), Normal speed \\( v = 500\\,\\mathrm{m/s} \\), Surface area \\( A = 0.10\\,\\mathrm{m^2} \\), Time duration \\( \\Delta t = 0.20\\,\\mathrm{s} \\).",
                    find: "Wall pressure for elastic collisions (\\( P \\)) in \\( \\mathrm{Pa} \\).",
                    equation: "P = \\frac{2 N m_0 v}{A \\Delta t}",
                    rearrangement: "P = \\frac{2 N m_0 v}{A \\Delta t}",
                    solution: "1. <strong>Formula:</strong> \\( P = \\frac{2 N m_0 v}{A \\Delta t} \\)<br>2. <strong>Substitution:</strong><br>\\[ P = \\frac{2(5.0 \\times 10^{22})(4.8 \\times 10^{-26}\\,\\mathrm{kg})(500\\,\\mathrm{m/s})}{(0.10\\,\\mathrm{m^2})(0.20\\,\\mathrm{s})} \\]<br>3. <strong>Calculation:</strong><br>\\[ P = \\frac{2.4\\,\\mathrm{kg\\cdot m/s}}{0.020\\,\\mathrm{m^2\\cdot s}} = 120\\,\\mathrm{Pa} \\]",
                    finalAnswer: "P = 120\\,\\mathrm{Pa}",
                    explanation: "In elastic collisions, molecules rebound with velocity -v, transferring 2m₀v momentum per particle, doubling the impulse compared to sticking particles."
                },
                {
                    title: "Example 4: Wall Pressure from Inelastic Molecular Collisions",
                    question: "Under sticky surface conditions, 5.0 × 10²² particles of mass m₀ = 4.8 × 10⁻²⁶ kg strike area 0.10 m² at v = 500 m/s over 0.20 s and adhere without rebounding (completely inelastic impact). Calculate the pressure produced on the surface.",
                    given: "Molecule count \\( N = 5.0 \\times 10^{22} \\), Mass \\( m_0 = 4.8 \\times 10^{-26}\\,\\mathrm{kg} \\), Speed \\( v = 500\\,\\mathrm{m/s} \\), Area \\( A = 0.10\\,\\mathrm{m^2} \\), Time \\( \\Delta t = 0.20\\,\\mathrm{s} \\).",
                    find: "Wall pressure for inelastic impacts (\\( P \\)) in \\( \\mathrm{Pa} \\).",
                    equation: "P = \\frac{N m_0 v}{A \\Delta t}",
                    rearrangement: "P = \\frac{N m_0 v}{A \\Delta t}",
                    solution: "1. <strong>Formula:</strong> \\( P = \\frac{N m_0 v}{A \\Delta t} \\)<br>2. <strong>Substitution:</strong><br>\\[ P = \\frac{(5.0 \\times 10^{22})(4.8 \\times 10^{-26}\\,\\mathrm{kg})(500\\,\\mathrm{m/s})}{(0.10\\,\\mathrm{m^2})(0.20\\,\\mathrm{s})} = \\frac{1.2}{0.020} = 60\\,\\mathrm{Pa} \\]<br>3. <strong>Calculation:</strong> \\( P = 60\\,\\mathrm{Pa} \\).",
                    finalAnswer: "P = 60\\,\\mathrm{Pa}",
                    explanation: "Without a rebound velocity, momentum transfer per collision is halved (m₀v instead of 2m₀v), cutting the resulting pressure exactly in half."
                },
                {
                    title: "Example 5: Ideal Gas Equation of State (PV = nRT)",
                    question: "A rigid vessel contains 2.0 moles of helium gas at an absolute temperature of 300 K under a pressure of 1.5 × 10⁵ Pa. Calculate the volume of the container. (R = 8.314 J/(mol·K)).",
                    given: "Amount of gas \\( n = 2.0\\,\\mathrm{mol} \\), Temperature \\( T = 300\\,\\mathrm{K} \\), Pressure \\( P = 1.5 \\times 10^5\\,\\mathrm{Pa} \\), Gas constant \\( R = 8.314\\,\\mathrm{J/(mol\\cdot K)} \\).",
                    find: "Container volume (\\( V \\)) in \\( \\mathrm{m^3} \\) and liters (\\( \\mathrm{L} \\)).",
                    equation: "PV = nRT",
                    rearrangement: "V = \\frac{nRT}{P}",
                    solution: "1. <strong>Rearranged Formula:</strong> \\( V = \\frac{nRT}{P} \\)<br>2. <strong>Substitution:</strong><br>\\[ V = \\frac{(2.0\\,\\mathrm{mol})(8.314\\,\\mathrm{J/(mol\\cdot K)})(300\\,\\mathrm{K})}{1.5 \\times 10^5\\,\\mathrm{Pa}} = \\frac{4988.4}{150{,}000} \\approx 0.03326\\,\\mathrm{m^3} \\]<br>3. <strong>Volume in Liters:</strong> \\( 0.03326\\,\\mathrm{m^3} \\times 1000 = 33.3\\,\\mathrm{L} \\).",
                    finalAnswer: "V \\approx 0.0333\\,\\mathrm{m^3} \\; (33.3\\,\\mathrm{L})",
                    explanation: "The ideal gas law connects the macroscopic thermodynamic state variables (P, V, T, n) in a single unified relationship."
                },
                {
                    title: "Example 6: Combined Gas Law Across Changing States",
                    question: "A weather balloon has a volume of 4.0 m³ at ground level where the pressure is 1.0 × 10⁵ Pa and temperature is 300 K (27°C). It ascends to an altitude where pressure drops to 0.40 × 10⁵ Pa and temperature cools to 240 K (-33°C). Find the final volume of the balloon.",
                    given: "Initial state: \\( P_1 = 1.0 \\times 10^5\\,\\mathrm{Pa} \\), \\( V_1 = 4.0\\,\\mathrm{m^3} \\), \\( T_1 = 300\\,\\mathrm{K} \\). Final state: \\( P_2 = 0.40 \\times 10^5\\,\\mathrm{Pa} \\), \\( T_2 = 240\\,\\mathrm{K} \\).",
                    find: "Final volume (\\( V_2 \\)) in \\( \\mathrm{m^3} \\).",
                    equation: "\\frac{P_1 V_1}{T_1} = \\frac{P_2 V_2}{T_2}",
                    rearrangement: "V_2 = V_1 \\left(\\frac{P_1}{P_2}\\right)\\left(\\frac{T_2}{T_1}\\right)",
                    solution: "1. <strong>Rearranged Formula:</strong> \\( V_2 = V_1 \\left(\\frac{P_1}{P_2}\\right)\\left(\\frac{T_2}{T_1}\\right) \\)<br>2. <strong>Substitution:</strong><br>\\[ V_2 = 4.0\\,\\mathrm{m^3} \\times \\left(\\frac{1.0 \\times 10^5}{0.40 \\times 10^5}\\right) \\times \\left(\\frac{240\\,\\mathrm{K}}{300\\,\\mathrm{K}}\\right) \\]<br>3. <strong>Calculation:</strong> \\( V_2 = 4.0 \\times 2.5 \\times 0.80 = 8.0\\,\\mathrm{m^3} \\).",
                    finalAnswer: "V_2 = 8.0\\,\\mathrm{m^3}",
                    explanation: "The combined gas law tracks simultaneous changes in pressure, volume, and temperature for a sealed constant mass of gas."
                },
                {
                    title: "Example 7: Isobaric Process (Charles's Law)",
                    question: "A cylinder fitted with a frictionless movable piston contains gas at an initial volume of 2.4 L and temperature of 300 K. The gas is heated isobarically (at constant pressure) until its temperature reaches 450 K. Calculate the final volume of the gas.",
                    given: "Initial volume \\( V_1 = 2.4\\,\\mathrm{L} \\), Initial temperature \\( T_1 = 300\\,\\mathrm{K} \\), Final temperature \\( T_2 = 450\\,\\mathrm{K} \\), Pressure \\( P = \\text{constant} \\).",
                    find: "Final volume (\\( V_2 \\)) in \\( \\mathrm{L} \\).",
                    equation: "\\frac{V_1}{T_1} = \\frac{V_2}{T_2}",
                    rearrangement: "V_2 = V_1 \\left(\\frac{T_2}{T_1}\\right)",
                    solution: "1. <strong>Rearranged Formula:</strong> \\( V_2 = V_1 \\left(\\frac{T_2}{T_1}\\right) \\)<br>2. <strong>Substitution:</strong> \\( V_2 = 2.4\\,\\mathrm{L} \\times \\left(\\frac{450\\,\\mathrm{K}}{300\\,\\mathrm{K}}\\right) \\)<br>3. <strong>Calculation:</strong> \\( V_2 = 2.4 \\times 1.5 = 3.6\\,\\mathrm{L} \\).",
                    finalAnswer: "V_2 = 3.6\\,\\mathrm{L}",
                    explanation: "Under constant pressure, gas expands in direct proportion to its absolute temperature in Kelvin."
                },
                {
                    title: "Example 8: Isochoric Process (Gay-Lussac's Law)",
                    question: "A rigid sealed metal tank contains gas at pressure P₁ = 2.0 × 10⁵ Pa and temperature 290 K. If the tank is heated to 435 K at constant volume, find the final pressure of the gas.",
                    given: "Initial pressure \\( P_1 = 2.0 \\times 10^5\\,\\mathrm{Pa} \\), Initial temperature \\( T_1 = 290\\,\\mathrm{K} \\), Final temperature \\( T_2 = 435\\,\\mathrm{K} \\), Volume \\( V = \\text{constant} \\).",
                    find: "Final pressure (\\( P_2 \\)) in \\( \\mathrm{Pa} \\) and \\( \\mathrm{kPa} \\).",
                    equation: "\\frac{P_1}{T_1} = \\frac{P_2}{T_2}",
                    rearrangement: "P_2 = P_1 \\left(\\frac{T_2}{T_1}\\right)",
                    solution: "1. <strong>Rearranged Formula:</strong> \\( P_2 = P_1 \\left(\\frac{T_2}{T_1}\\right) \\)<br>2. <strong>Substitution:</strong> \\( P_2 = (2.0 \\times 10^5\\,\\mathrm{Pa}) \\times \\left(\\frac{435\\,\\mathrm{K}}{290\\,\\mathrm{K}}\\right) \\)<br>3. <strong>Calculation:</strong> \\( P_2 = 2.0 \\times 10^5 \\times 1.5 = 3.0 \\times 10^5\\,\\mathrm{Pa} = 300\\,\\mathrm{kPa} \\).",
                    finalAnswer: "P_2 = 3.0 \\times 10^5\\,\\mathrm{Pa} \\; (300\\,\\mathrm{kPa})",
                    explanation: "In a rigid container of constant volume, molecular thermal agitation increases with temperature, raising the impact pressure proportionally."
                },
                {
                    title: "Example 9: Isothermal Process (Boyle's Law)",
                    question: "An ideal gas is held at constant temperature inside a cylinder. The gas is compressed slowly from an initial volume of 0.060 m³ and pressure of 1.0 × 10⁵ Pa to a final volume of 0.020 m³. Calculate the final pressure.",
                    given: "Initial pressure \\( P_1 = 1.0 \\times 10^5\\,\\mathrm{Pa} \\), Initial volume \\( V_1 = 0.060\\,\\mathrm{m^3} \\), Final volume \\( V_2 = 0.020\\,\\mathrm{m^3} \\), Temperature \\( T = \\text{constant} \\).",
                    find: "Final pressure (\\( P_2 \\)) in \\( \\mathrm{Pa} \\).",
                    equation: "P_1 V_1 = P_2 V_2",
                    rearrangement: "P_2 = P_1 \\left(\\frac{V_1}{V_2}\\right)",
                    solution: "1. <strong>Rearranged Formula:</strong> \\( P_2 = P_1 \\left(\\frac{V_1}{V_2}\\right) \\)<br>2. <strong>Substitution:</strong> \\( P_2 = 1.0 \\times 10^5\\,\\mathrm{Pa} \\times \\left(\\frac{0.060\\,\\mathrm{m^3}}{0.020\\,\\mathrm{m^3}}\\right) \\)<br>3. <strong>Calculation:</strong> \\( P_2 = 1.0 \\times 10^5 \\times 3.0 = 3.0 \\times 10^5\\,\\mathrm{Pa} \\).",
                    finalAnswer: "P_2 = 3.0 \\times 10^5\\,\\mathrm{Pa} \\; (300\\,\\mathrm{kPa})",
                    explanation: "During isothermal compression, reducing the container volume increases molecular collision frequency, inversely increasing pressure."
                },
                {
                    title: "Example 10: Average Molecular Kinetic Energy per Particle",
                    question: "Calculate the average translational kinetic energy of an ideal gas molecule at a room temperature of 300 K. (Boltzmann constant kB = 1.38 × 10⁻²³ J/K).",
                    given: "Absolute temperature \\( T = 300\\,\\mathrm{K} \\), Boltzmann constant \\( k_B = 1.38 \\times 10^{-23}\\,\\mathrm{J/K} \\).",
                    find: "Average molecular kinetic energy (\\( K_{av} \\)) in \\( \\mathrm{J} \\).",
                    equation: "K_{av} = \\frac{3}{2}k_B T",
                    rearrangement: "K_{av} = 1.5 \\, k_B T",
                    solution: "1. <strong>Formula:</strong> \\( K_{av} = \\frac{3}{2}k_B T \\)<br>2. <strong>Substitution:</strong> \\( K_{av} = 1.5 \\times (1.38 \\times 10^{-23}\\,\\mathrm{J/K}) \\times 300\\,\\mathrm{K} \\)<br>3. <strong>Calculation:</strong> \\( K_{av} = 6.21 \\times 10^{-21}\\,\\mathrm{J} \\).",
                    finalAnswer: "K_{av} = 6.21 \\times 10^{-21}\\,\\mathrm{J}",
                    explanation: "The average translational kinetic energy per molecule depends solely on absolute temperature, completely independent of the gas species or molecular mass."
                },
                {
                    title: "Example 11: Total Internal Kinetic Energy of a Gas Sample",
                    question: "Find the total internal translational kinetic energy of 3.0 moles of argon gas at 350 K. (R = 8.314 J/(mol·K)).",
                    given: "Amount of gas \\( n = 3.0\\,\\mathrm{mol} \\), Temperature \\( T = 350\\,\\mathrm{K} \\), Gas constant \\( R = 8.314\\,\\mathrm{J/(mol\\cdot K)} \\).",
                    find: "Total internal kinetic energy (\\( K \\)) in \\( \\mathrm{J} \\) and \\( \\mathrm{kJ} \\).",
                    equation: "K = \\frac{3}{2}nRT",
                    rearrangement: "K = 1.5 \\, n R T",
                    solution: "1. <strong>Formula:</strong> \\( K = \\frac{3}{2}nRT \\)<br>2. <strong>Substitution:</strong> \\( K = 1.5 \\times (3.0\\,\\mathrm{mol}) \\times (8.314\\,\\mathrm{J/(mol\\cdot K)}) \\times (350\\,\\mathrm{K}) \\)<br>3. <strong>Calculation:</strong> \\( K = 13{,}094.55\\,\\mathrm{J} \\approx 1.31 \\times 10^4\\,\\mathrm{J} = 13.1\\,\\mathrm{kJ} \\).",
                    finalAnswer: "K \\approx 13.1\\,\\mathrm{kJ} \\; (13{,}095\\,\\mathrm{J})",
                    explanation: "Total internal kinetic energy represents the summed mechanical energy of all molecules in the sample, directly proportional to mole count and temperature."
                },
                {
                    title: "Example 12: Root-Mean-Square Speed from Temperature and Molar Mass",
                    question: "Calculate the root-mean-square speed of oxygen molecules (O₂, molar mass M = 0.032 kg/mol) at standard temperature T = 273 K. (R = 8.314 J/(mol·K)).",
                    given: "Absolute temperature \\( T = 273\\,\\mathrm{K} \\), Molar mass \\( M = 0.032\\,\\mathrm{kg/mol} \\), Gas constant \\( R = 8.314\\,\\mathrm{J/(mol\\cdot K)} \\).",
                    find: "RMS speed (\\( v_{rms} \\)) in \\( \\mathrm{m/s} \\).",
                    equation: "v_{rms} = \\sqrt{\\frac{3RT}{M}}",
                    rearrangement: "v_{rms} = \\sqrt{\\frac{3RT}{M}}",
                    solution: "1. <strong>Formula:</strong> \\( v_{rms} = \\sqrt{\\frac{3RT}{M}} \\)<br>2. <strong>Substitution:</strong><br>\\[ v_{rms} = \\sqrt{\\frac{3 \\times 8.314 \\times 273}{0.032}} = \\sqrt{\\frac{6809.166}{0.032}} = \\sqrt{212{,}786.4} \\]<br>3. <strong>Calculation:</strong> \\( v_{rms} \\approx 461.3\\,\\mathrm{m/s} \\).",
                    finalAnswer: "v_{rms} \\approx 461\\,\\mathrm{m/s}",
                    explanation: "The thermal speed of gas molecules scales with the square root of temperature and inversely with the square root of molar mass."
                },
                {
                    title: "Example 13: Root-Mean-Square Speed from Pressure and Density",
                    question: "At standard atmospheric pressure P = 1.013 × 10⁵ Pa, dry air has a density of ρ = 1.29 kg/m³. Determine the root-mean-square speed of air molecules directly from pressure and density.",
                    given: "Pressure \\( P = 1.013 \\times 10^5\\,\\mathrm{Pa} \\), Density \\( \\rho = 1.29\\,\\mathrm{kg/m^3} \\).",
                    find: "RMS speed (\\( v_{rms} \\)) in \\( \\mathrm{m/s} \\).",
                    equation: "v_{rms} = \\sqrt{\\frac{3P}{\\rho}}",
                    rearrangement: "v_{rms} = \\sqrt{\\frac{3P}{\\rho}}",
                    solution: "1. <strong>Formula:</strong> \\( v_{rms} = \\sqrt{\\frac{3P}{\\rho}} \\)<br>2. <strong>Substitution:</strong><br>\\[ v_{rms} = \\sqrt{\\frac{3 \\times 1.013 \\times 10^5\\,\\mathrm{Pa}}{1.29\\,\\mathrm{kg/m^3}}} = \\sqrt{\\frac{303{,}900}{1.29}} = \\sqrt{235{,}581.4} \\]<br>3. <strong>Calculation:</strong> \\( v_{rms} \\approx 485.4\\,\\mathrm{m/s} \\).",
                    finalAnswer: "v_{rms} \\approx 485\\,\\mathrm{m/s}",
                    explanation: "Connecting root-mean-square speed directly to pressure and density provides a powerful macroscopic method for probing microscopic velocity."
                },
                {
                    title: "Example 14: Arithmetic Average Molecular Speed vs. RMS Speed",
                    question: "A sample of 5 gas molecules has individual measured speeds: 300 m/s, 400 m/s, 500 m/s, 600 m/s, and 700 m/s. Calculate the arithmetic average speed and compare it with the root-mean-square speed.",
                    given: "Speeds \\( v = [300, 400, 500, 600, 700]\\,\\mathrm{m/s} \\), Molecule count \\( N = 5 \\).",
                    find: "Arithmetic mean speed (\\( \\bar{v} \\)) and RMS speed (\\( v_{rms} \\)) in \\( \\mathrm{m/s} \\).",
                    equation: "\\bar{v} = \\frac{\\sum v_i}{N}, \\quad v_{rms} = \\sqrt{\\frac{\\sum v_i^2}{N}}",
                    rearrangement: "\\bar{v} = \\frac{v_1 + v_2 + v_3 + v_4 + v_5}{5}",
                    solution: "1. <strong>Arithmetic Mean Speed:</strong><br>\\[ \\bar{v} = \\frac{300 + 400 + 500 + 600 + 700}{5} = \\frac{2500}{5} = 500.0\\,\\mathrm{m/s} \\]<br>2. <strong>Mean Square Speed:</strong><br>\\[ \\langle v^2\\rangle = \\frac{300^2 + 400^2 + 500^2 + 600^2 + 700^2}{5} = \\frac{90{,}000 + 160{,}000 + 250{,}000 + 360{,}000 + 490{,}000}{5} = 270{,}000\\,\\mathrm{m^2/s^2} \\]<br>3. <strong>RMS Speed:</strong><br>\\[ v_{rms} = \\sqrt{270{,}000} \\approx 519.6\\,\\mathrm{m/s} \\]",
                    finalAnswer: "\\bar{v} = 500\\,\\mathrm{m/s}, \\quad v_{rms} \\approx 520\\,\\mathrm{m/s}",
                    explanation: "The arithmetic mean speed is fundamentally different from the RMS speed: v_rms > v̄ because higher speeds contribute with greater quadratic weight."
                },
                {
                    title: "Example 15: Mole Amount and Particle Count Relations",
                    question: "A sample of neon gas has a mass of 0.0808 kg (molar mass M = 0.0202 kg/mol). Determine the number of moles and the total number of neon atoms present. (Avogadro constant NA = 6.02 × 10²³ mol⁻¹).",
                    given: "Sample mass \\( m = 0.0808\\,\\mathrm{kg} \\), Molar mass \\( M = 0.0202\\,\\mathrm{kg/mol} \\), Avogadro constant \\( N_A = 6.02 \\times 10^{23}\\,\\mathrm{mol^{-1}} \\).",
                    find: "Number of moles (\\( n \\)) and total particle count (\\( N \\)).",
                    equation: "n = \\frac{m}{M} = \\frac{N}{N_A}",
                    rearrangement: "n = \\frac{m}{M}, \\quad N = n N_A",
                    solution: "1. <strong>Number of Moles:</strong><br>\\[ n = \\frac{m}{M} = \\frac{0.0808\\,\\mathrm{kg}}{0.0202\\,\\mathrm{kg/mol}} = 4.0\\,\\mathrm{mol} \\]<br>2. <strong>Total Particles:</strong><br>\\[ N = n N_A = 4.0\\,\\mathrm{mol} \\times 6.02 \\times 10^{23}\\,\\mathrm{mol^{-1}} = 2.408 \\times 10^{24} \\]",
                    finalAnswer: "n = 4.0\\,\\mathrm{mol}, \\quad N \\approx 2.41 \\times 10^{24} \\; \\text{atoms}",
                    explanation: "Connecting macroscopic mass to chemical mole quantity and microscopic particle count bridges atomic and laboratory scales."
                },
                {
                    title: "Example 16: Single Molecule Mass and Thermodynamic Conversions",
                    question: "Calculate the mass of a single carbon dioxide molecule (CO₂, M = 0.044 kg/mol) and convert an experimental temperature of 25°C to the absolute Kelvin scale.",
                    given: "Molar mass of CO₂ \\( M = 0.044\\,\\mathrm{kg/mol} \\), Avogadro's number \\( N_A = 6.02 \\times 10^{23}\\,\\mathrm{mol^{-1}} \\), Celsius temperature \\( t = 25\\,^\\circ\\mathrm{C} \\).",
                    find: "Mass of one molecule (\\( m_0 \\)) in \\( \\mathrm{kg} \\) and absolute temperature (\\( T \\)) in \\( \\mathrm{K} \\).",
                    equation: "m_0 = \\frac{M}{N_A}, \\quad T = t + 273",
                    rearrangement: "m_0 = \\frac{M}{N_A}, \\quad T = t + 273",
                    solution: "1. <strong>Mass of One Molecule:</strong><br>\\[ m_0 = \\frac{M}{N_A} = \\frac{0.044\\,\\mathrm{kg/mol}}{6.02 \\times 10^{23}\\,\\mathrm{mol^{-1}}} \\approx 7.31 \\times 10^{-26}\\,\\mathrm{kg} \\]<br>2. <strong>Temperature Conversion:</strong><br>\\[ T = 25 + 273 = 298\\,\\mathrm{K} \\]",
                    finalAnswer: "m_0 \\approx 7.31 \\times 10^{-26}\\,\\mathrm{kg}, \\quad T = 298\\,\\mathrm{K}",
                    explanation: "Thermodynamic equations require absolute temperature in Kelvin, while single molecular masses are calculated by dividing molar mass by Avogadro's constant."
                }
            ],
            equations: [
                {
                    section: "Kinetic Theory Pressure",
                    name: "Pressure in Kinetic Theory of Ideal Gases",
                    formula: "\\[ P = \\frac{2}{3}\\left(\\frac{N}{V}\\right)\\left(\\frac{1}{2}m_0 \\langle v^2\\rangle_{av}\\right) = \\frac{2}{3}\\left(\\frac{N}{V}\\right)K_{av} \\]",
                    figure: { img: "image_G12_one/ch1-l1-eq1.png", title: "Kinetic Theory Pressure", caption: "Relationship between macroscopic pressure and molecular kinetic energy density." },
                    pdfPage: "PDF Page 3 & 4",
                    explanation: "Relates macroscopic pressure directly to the number density of gas molecules and their mean molecular translational kinetic energy.",
                    conditions: "Ideal gas model (point particles, elastic collisions, negligible molecular volume).",
                    variables: [
                        { symbol: "P", rep: "Absolute gas pressure", unit: "Pascal (Newton per square meter)", unitSym: "\\mathrm{Pa} \\; (\\mathrm{N/m^2})" },
                        { symbol: "N", rep: "Total number of gas molecules", unit: "Dimensionless count", unitSym: "\\text{No SI unit}" },
                        { symbol: "V", rep: "Volume of gas container", unit: "Cubic meter", unitSym: "\\mathrm{m^3}" },
                        { symbol: "m_0", rep: "Mass of a single gas molecule", unit: "Kilogram", unitSym: "\\mathrm{kg}" },
                        { symbol: "\\langle v^2\\rangle_{av}", rep: "Mean square speed of molecules", unit: "Meter squared per second squared", unitSym: "\\mathrm{m^2/s^2}" },
                        { symbol: "K_{av}", rep: "Average molecular kinetic energy", unit: "Joule", unitSym: "\\mathrm{J}" }
                    ]
                },
                {
                    section: "Kinetic Theory Pressure",
                    name: "Pressure Exerted on Container Walls",
                    formula: "\\[ P = \\frac{F}{A}, \\quad F = \\frac{\\Delta p}{\\Delta t}, \\quad \\Delta p = N m_0 \\Delta v \\]",
                    figure: { img: "image_G12_one/ch1-l1-eq2.png", title: "Wall Pressure & Momentum Transfer", caption: "Normal force and rate of momentum change per unit area." },
                    pdfPage: "PDF Page 3 & 4",
                    explanation: "Pressure on container walls equals the net normal impact force per unit area, determined by the time rate of molecular momentum transfer.",
                    conditions: "Uniform perpendicular impact distribution over container area A.",
                    variables: [
                        { symbol: "P", rep: "Wall pressure", unit: "Pascal", unitSym: "\\mathrm{Pa}" },
                        { symbol: "F", rep: "Total normal force on container wall", unit: "Newton", unitSym: "\\mathrm{N}" },
                        { symbol: "A", rep: "Surface area of container wall", unit: "Square meter", unitSym: "\\mathrm{m^2}" },
                        { symbol: "\\Delta p", rep: "Total momentum transferred to wall", unit: "Kilogram meter per second", unitSym: "\\mathrm{kg\\cdot m/s}" },
                        { symbol: "\\Delta t", rep: "Collision time duration", unit: "Second", unitSym: "\\mathrm{s}" },
                        { symbol: "N", rep: "Number of colliding molecules", unit: "Dimensionless count", unitSym: "\\text{No SI unit}" },
                        { symbol: "m_0", rep: "Mass of one molecule", unit: "Kilogram", unitSym: "\\mathrm{kg}" },
                        { symbol: "\\Delta v", rep: "Change in velocity perpendicular to wall", unit: "Meter per second", unitSym: "\\mathrm{m/s}" }
                    ]
                },
                {
                    section: "Kinetic Theory Pressure",
                    name: "Wall Pressure: Elastic Collisions",
                    formula: "\\[ P = \\frac{F}{A} = \\frac{\\Delta p}{A\\Delta t} = \\frac{2 N m_0 v}{A\\Delta t} \\]",
                    figure: { img: "image_G12_one/ch1-l1-eq3.png", title: "Elastic Collision Pressure", caption: "Rebound with 2mv momentum transfer per colliding molecule." },
                    pdfPage: "PDF Page 3 & 4",
                    explanation: "For elastic collisions, particles rebound with reversed velocity (-v), transferring 2m₀v momentum per molecule to the wall surface.",
                    conditions: "Perfect elastic rebound with no kinetic energy loss (Δv = 2v).",
                    variables: [
                        { symbol: "P", rep: "Pressure during elastic collisions", unit: "Pascal", unitSym: "\\mathrm{Pa}" },
                        { symbol: "N", rep: "Colliding molecule count", unit: "Dimensionless count", unitSym: "\\text{No SI unit}" },
                        { symbol: "m_0", rep: "Mass of one molecule", unit: "Kilogram", unitSym: "\\mathrm{kg}" },
                        { symbol: "v", rep: "Perpendicular molecular speed", unit: "Meter per second", unitSym: "\\mathrm{m/s}" },
                        { symbol: "A", rep: "Impact surface area", unit: "Square meter", unitSym: "\\mathrm{m^2}" },
                        { symbol: "\\Delta t", rep: "Collision duration", unit: "Second", unitSym: "\\mathrm{s}" }
                    ]
                },
                {
                    section: "Kinetic Theory Pressure",
                    name: "Wall Pressure: Inelastic Collisions",
                    formula: "\\[ P = \\frac{F}{A} = \\frac{\\Delta p}{A\\Delta t} = \\frac{N m_0 v}{A\\Delta t} \\]",
                    figure: { img: "image_G12_one/ch1-l1-eq4.png", title: "Inelastic Collision Pressure", caption: "Momentum transfer without rebound (mv per molecule)." },
                    pdfPage: "PDF Page 3 & 4",
                    explanation: "For inelastic impacts, particles deposit normal momentum without rebounding, transferring m₀v momentum per molecule.",
                    conditions: "Completely inelastic impact (particles stick or lose normal velocity, Δv = v).",
                    variables: [
                        { symbol: "P", rep: "Pressure during inelastic collisions", unit: "Pascal", unitSym: "\\mathrm{Pa}" },
                        { symbol: "N", rep: "Colliding molecule count", unit: "Dimensionless count", unitSym: "\\text{No SI unit}" },
                        { symbol: "m_0", rep: "Mass of one molecule", unit: "Kilogram", unitSym: "\\mathrm{kg}" },
                        { symbol: "v", rep: "Normal molecular velocity", unit: "Meter per second", unitSym: "\\mathrm{m/s}" },
                        { symbol: "A", rep: "Impact surface area", unit: "Square meter", unitSym: "\\mathrm{m^2}" },
                        { symbol: "\\Delta t", rep: "Time duration", unit: "Second", unitSym: "\\mathrm{s}" }
                    ]
                },
                {
                    section: "Gas Laws & State Equations",
                    name: "Ideal Gas State Equations",
                    formula: "\\[ PV = nRT = N k_B T \\]",
                    figure: { img: "image_G12_one/ch1-l1-eq5.png", title: "Ideal Gas State Equation", caption: "Equation of state connecting P, V, T, and mole/particle count." },
                    pdfPage: "PDF Page 3 & 5",
                    explanation: "Relates pressure, volume, temperature, and quantity of an ideal gas in molar form (nRT) and molecular form (Nk_BT).",
                    conditions: "Valid for dilute gases where intermolecular attractions and molecular volumes are negligible.",
                    variables: [
                        { symbol: "P", rep: "Absolute gas pressure", unit: "Pascal", unitSym: "\\mathrm{Pa}" },
                        { symbol: "V", rep: "Gas volume", unit: "Cubic meter", unitSym: "\\mathrm{m^3}" },
                        { symbol: "n", rep: "Amount of gas", unit: "Mole", unitSym: "\\mathrm{mol}" },
                        { symbol: "R", rep: "Universal gas constant (8.314 J/(mol·K))", unit: "Joule per mole kelvin", unitSym: "\\mathrm{J/(mol\\cdot K)}" },
                        { symbol: "N", rep: "Total number of molecules", unit: "Dimensionless count", unitSym: "\\text{No SI unit}" },
                        { symbol: "k_B", rep: "Boltzmann constant (1.38 × 10⁻²³ J/K)", unit: "Joule per kelvin", unitSym: "\\mathrm{J/K}" },
                        { symbol: "T", rep: "Absolute thermodynamic temperature", unit: "Kelvin", unitSym: "\\mathrm{K}" }
                    ]
                },
                {
                    section: "Gas Laws & State Equations",
                    name: "Combined Gas Law",
                    formula: "\\[ \\frac{P_1 V_1}{T_1} = \\frac{P_2 V_2}{T_2} = \\text{constant} \\]",
                    figure: { img: "image_G12_one/ch1-l1-eq6.png", title: "Combined Gas Law", caption: "State transitions for a fixed mass of enclosed gas." },
                    pdfPage: "PDF Page 3 & 5",
                    explanation: "Relates initial and final equilibrium states for a fixed mass of enclosed gas.",
                    conditions: "Closed system with constant quantity of gas (n = constant).",
                    variables: [
                        { symbol: "P_1, P_2", rep: "Initial and final pressures", unit: "Pascal", unitSym: "\\mathrm{Pa}" },
                        { symbol: "V_1, V_2", rep: "Initial and final volumes", unit: "Cubic meter", unitSym: "\\mathrm{m^3}" },
                        { symbol: "T_1, T_2", rep: "Initial and final absolute temperatures", unit: "Kelvin", unitSym: "\\mathrm{K}" }
                    ]
                },
                {
                    section: "Gas Laws & State Equations",
                    name: "Isobaric Process (Charles's Law)",
                    formula: "\\[ \\frac{V_1}{T_1} = \\frac{V_2}{T_2} = \\text{constant} \\quad (P = \\text{constant}) \\]",
                    figure: { img: "image_G12_one/ch1-l1-eq7.png", title: "Isobaric Process (Charles's Law)", caption: "Linear volume expansion with absolute temperature at constant pressure." },
                    pdfPage: "PDF Page 3 & 5",
                    explanation: "At constant pressure, gas volume is directly proportional to its absolute temperature in Kelvin.",
                    conditions: "Isobaric process (P = constant, ΔP = 0).",
                    variables: [
                        { symbol: "V_1, V_2", rep: "Initial and final volumes", unit: "Cubic meter", unitSym: "\\mathrm{m^3}" },
                        { symbol: "T_1, T_2", rep: "Initial and final temperatures", unit: "Kelvin", unitSym: "\\mathrm{K}" }
                    ]
                },
                {
                    section: "Gas Laws & State Equations",
                    name: "Isochoric Process (Gay-Lussac's Law)",
                    formula: "\\[ \\frac{P_1}{T_1} = \\frac{P_2}{T_2} = \\text{constant} \\quad (V = \\text{constant}) \\]",
                    figure: { img: "image_G12_one/ch1-l1-eq8.png", title: "Isochoric Process (Gay-Lussac's Law)", caption: "Pressure variation with temperature at constant container volume." },
                    pdfPage: "PDF Page 3 & 5",
                    explanation: "At constant volume, gas pressure is directly proportional to its absolute temperature in Kelvin.",
                    conditions: "Isochoric process (V = constant, rigid container).",
                    variables: [
                        { symbol: "P_1, P_2", rep: "Initial and final pressures", unit: "Pascal", unitSym: "\\mathrm{Pa}" },
                        { symbol: "T_1, T_2", rep: "Initial and final temperatures", unit: "Kelvin", unitSym: "\\mathrm{K}" }
                    ]
                },
                {
                    section: "Gas Laws & State Equations",
                    name: "Isothermal Process (Boyle's Law)",
                    formula: "\\[ P_1 V_1 = P_2 V_2 = \\text{constant} \\quad (T = \\text{constant}) \\]",
                    figure: { img: "image_G12_one/ch1-l1-eq9.png", title: "Isothermal Process (Boyle's Law)", caption: "Inverse relation between pressure and volume at constant temperature." },
                    pdfPage: "PDF Page 3 & 5",
                    explanation: "At constant temperature, gas pressure is inversely proportional to its volume.",
                    conditions: "Isothermal process (T = constant, slow quasi-static expansion/compression).",
                    variables: [
                        { symbol: "P_1, P_2", rep: "Initial and final pressures", unit: "Pascal", unitSym: "\\mathrm{Pa}" },
                        { symbol: "V_1, V_2", rep: "Initial and final volumes", unit: "Cubic meter", unitSym: "\\mathrm{m^3}" }
                    ]
                },
                {
                    section: "Molecular Energy & Velocity",
                    name: "Average Molecular Kinetic Energy",
                    formula: "\\[ K_{av} = \\frac{1}{2}m_0 \\langle v^2\\rangle_{av} = \\frac{3}{2}\\frac{PV}{N} = \\frac{3}{2}k_B T \\]",
                    figure: { img: "image_G12_one/ch1-l1-eq10.png", title: "Average Molecular Kinetic Energy", caption: "Translational energy per molecule proportional to absolute temperature." },
                    pdfPage: "PDF Page 3 & 6",
                    explanation: "Translational kinetic energy per molecule depends solely on absolute temperature T, independent of molecular mass or gas identity.",
                    conditions: "Ideal gas with 3 translational degrees of freedom.",
                    variables: [
                        { symbol: "K_{av}", rep: "Average translational kinetic energy per molecule", unit: "Joule", unitSym: "\\mathrm{J}" },
                        { symbol: "m_0", rep: "Mass of one molecule", unit: "Kilogram", unitSym: "\\mathrm{kg}" },
                        { symbol: "\\langle v^2\\rangle_{av}", rep: "Mean square speed", unit: "Meter squared per second squared", unitSym: "\\mathrm{m^2/s^2}" },
                        { symbol: "P", rep: "Gas pressure", unit: "Pascal", unitSym: "\\mathrm{Pa}" },
                        { symbol: "V", rep: "Gas volume", unit: "Cubic meter", unitSym: "\\mathrm{m^3}" },
                        { symbol: "N", rep: "Molecule count", unit: "Dimensionless count", unitSym: "\\text{No SI unit}" },
                        { symbol: "k_B", rep: "Boltzmann constant", unit: "Joule per kelvin", unitSym: "\\mathrm{J/K}" },
                        { symbol: "T", rep: "Absolute temperature", unit: "Kelvin", unitSym: "\\mathrm{K}" }
                    ]
                },
                {
                    section: "Molecular Energy & Velocity",
                    name: "Total Gas Kinetic Energy",
                    formula: "\\[ K = N K_{av} = \\frac{3}{2}N k_B T = \\frac{3}{2}nRT = \\frac{3}{2}PV \\]",
                    figure: { img: "image_G12_one/ch1-l1-eq11.png", title: "Total Gas Kinetic Energy", caption: "Summed internal translational kinetic energy of all gas molecules." },
                    pdfPage: "PDF Page 3 & 6",
                    explanation: "Total internal translational kinetic energy of all N molecules comprising the gas sample.",
                    conditions: "Ideal monatomic gas sample.",
                    variables: [
                        { symbol: "K", rep: "Total translational kinetic energy", unit: "Joule", unitSym: "\\mathrm{J}" },
                        { symbol: "N", rep: "Total molecule count", unit: "Dimensionless count", unitSym: "\\text{No SI unit}" },
                        { symbol: "K_{av}", rep: "Average molecular kinetic energy", unit: "Joule", unitSym: "\\mathrm{J}" },
                        { symbol: "k_B", rep: "Boltzmann constant", unit: "Joule per kelvin", unitSym: "\\mathrm{J/K}" },
                        { symbol: "n", rep: "Amount of substance", unit: "Mole", unitSym: "\\mathrm{mol}" },
                        { symbol: "R", rep: "Universal gas constant", unit: "Joule per mole kelvin", unitSym: "\\mathrm{J/(mol\\cdot K)}" },
                        { symbol: "T", rep: "Absolute temperature", unit: "Kelvin", unitSym: "\\mathrm{K}" },
                        { symbol: "P", rep: "Pressure", unit: "Pascal", unitSym: "\\mathrm{Pa}" },
                        { symbol: "V", rep: "Volume", unit: "Cubic meter", unitSym: "\\mathrm{m^3}" }
                    ]
                },
                {
                    section: "Molecular Energy & Velocity",
                    name: "Root-Mean-Square Speed (v_rms)",
                    formula: "\\[ v_{rms} = \\sqrt{\\langle v^2\\rangle_{av}} = \\sqrt{\\frac{3k_B T}{m_0}} = \\sqrt{\\frac{3RT}{M}} = \\sqrt{\\frac{3P}{\\rho}} \\]",
                    figure: { img: "image_G12_one/ch1-l1-eq12.png", title: "Root-Mean-Square Speed", caption: "Effective thermal velocity derived from temperature, molar mass, and density." },
                    pdfPage: "PDF Page 3 & 6",
                    explanation: "The statistical effective speed of gas particles based on absolute temperature, molecular mass, molar mass, or density.",
                    conditions: "Maxwellian thermal equilibrium distribution.",
                    variables: [
                        { symbol: "v_{rms}", rep: "Root-mean-square speed", unit: "Meter per second", unitSym: "\\mathrm{m/s}" },
                        { symbol: "k_B", rep: "Boltzmann constant", unit: "Joule per kelvin", unitSym: "\\mathrm{J/K}" },
                        { symbol: "T", rep: "Absolute temperature", unit: "Kelvin", unitSym: "\\mathrm{K}" },
                        { symbol: "m_0", rep: "Mass of one molecule", unit: "Kilogram", unitSym: "\\mathrm{kg}" },
                        { symbol: "R", rep: "Universal gas constant", unit: "Joule per mole kelvin", unitSym: "\\mathrm{J/(mol\\cdot K)}" },
                        { symbol: "M", rep: "Molar mass (kg/mol)", unit: "Kilogram per mole", unitSym: "\\mathrm{kg/mol}" },
                        { symbol: "P", rep: "Gas pressure", unit: "Pascal", unitSym: "\\mathrm{Pa}" },
                        { symbol: "\\rho", rep: "Gas density (\\(\\rho = m/V\\))", unit: "Kilogram per cubic meter", unitSym: "\\mathrm{kg/m^3}" }
                    ]
                },
                {
                    section: "Molecular Energy & Velocity",
                    name: "Arithmetic Average Molecular Speed",
                    formula: "\\[ \\bar{v} = \\frac{v_1 + v_2 + v_3 + \\dots + v_N}{N} \\quad (\\bar{v} \\ne v_{rms}) \\]",
                    pdfPage: "PDF Page 3",
                    explanation: "The simple arithmetic mean speed of molecules in a gas sample; mathematically lower than v_rms in a Maxwell-Boltzmann distribution.",
                    conditions: "Statistical gas ensemble.",
                    variables: [
                        { symbol: "\\bar{v}", rep: "Arithmetic mean speed", unit: "Meter per second", unitSym: "\\mathrm{m/s}" },
                        { symbol: "v_1, v_2, \\dots", rep: "Individual molecular speeds", unit: "Meter per second", unitSym: "\\mathrm{m/s}" },
                        { symbol: "N", rep: "Total count of molecules", unit: "Dimensionless count", unitSym: "\\text{No SI unit}" }
                    ]
                },
                {
                    section: "Mole & Mass Conversions",
                    name: "Number of Moles and Particles Relation",
                    formula: "\\[ n = \\frac{m}{M} = \\frac{N}{N_A} \\]",
                    figure: { img: "image_G12_one/ch1-l1-eq13.png", title: "Mole & Particle Relations", caption: "Conversions between mass, molar mass, mole count, and Avogadro's number." },
                    pdfPage: "PDF Page 7 & 8",
                    explanation: "Interconverts chemical amount of substance n with macroscopic mass m and microscopic particle count N.",
                    conditions: "Pure chemical substance.",
                    variables: [
                        { symbol: "n", rep: "Amount of substance", unit: "Mole", unitSym: "\\mathrm{mol}" },
                        { symbol: "m", rep: "Total mass of sample", unit: "Kilogram", unitSym: "\\mathrm{kg}" },
                        { symbol: "M", rep: "Molar mass", unit: "Kilogram per mole", unitSym: "\\mathrm{kg/mol}" },
                        { symbol: "N", rep: "Total number of molecules", unit: "Dimensionless count", unitSym: "\\text{No SI unit}" },
                        { symbol: "N_A", rep: "Avogadro constant (6.02 × 10²³ mol⁻¹)", unit: "Reciprocal mole", unitSym: "\\mathrm{mol^{-1}}" }
                    ]
                },
                {
                    section: "Mole & Mass Conversions",
                    name: "Single Molecule Mass & Sample Mass Relations",
                    formula: "\\[ m_0 = \\frac{M}{N_A} = \\frac{m}{N}, \\quad M = m_0 N_A = \\frac{m}{n}, \\quad m = n M = m_0 N \\]",
                    figure: { img: "image_G12_one/ch1-l1-eq14.png", title: "Single Molecule & Sample Mass", caption: "Individual molecular mass calculated from molar mass and Avogadro constant." },
                    pdfPage: "PDF Page 7 & 8",
                    explanation: "Determines the mass of an individual microscopic molecule m₀ from molar mass and Avogadro's constant.",
                    conditions: "Monocomponent substance.",
                    variables: [
                        { symbol: "m_0", rep: "Mass of a single molecule", unit: "Kilogram", unitSym: "\\mathrm{kg}" },
                        { symbol: "M", rep: "Molar mass", unit: "Kilogram per mole", unitSym: "\\mathrm{kg/mol}" },
                        { symbol: "N_A", rep: "Avogadro constant", unit: "Reciprocal mole", unitSym: "\\mathrm{mol^{-1}}" },
                        { symbol: "m", rep: "Total sample mass", unit: "Kilogram", unitSym: "\\mathrm{kg}" },
                        { symbol: "N", rep: "Number of molecules", unit: "Dimensionless count", unitSym: "\\text{No SI unit}" },
                        { symbol: "n", rep: "Number of moles", unit: "Mole", unitSym: "\\mathrm{mol}" }
                    ]
                },
                {
                    section: "Units & Standards",
                    name: "Pressure Units & Conversion Equivalences",
                    formula: "\\[ 1\\,\\mathrm{Pa} = 1\\,\\mathrm{N/m^2}, \\quad 1\\,\\mathrm{atm} = 1.013\\times 10^5\\,\\mathrm{Pa} \\approx 10^5\\,\\mathrm{Pa}, \\quad 1\\,\\mathrm{bar} = 10^5\\,\\mathrm{Pa}, \\quad 760\\,\\mathrm{mmHg} = 1\\,\\mathrm{atm} \\]",
                    figure: { img: "image_G12_one/ch1-l1-eq15.png", title: "Pressure Unit Equivalences", caption: "Conversion factors between Pa, atm, bar, and mmHg." },
                    pdfPage: "PDF Page 7 & 8",
                    explanation: "Standard pressure conversion factors connecting the SI Pascal with industrial and atmospheric units.",
                    conditions: "Standard atmospheric conditions at sea level.",
                    variables: [
                        { symbol: "\\mathrm{Pa}", rep: "Pascal (SI pressure unit)", unit: "Pascal", unitSym: "\\mathrm{Pa}" },
                        { symbol: "\\mathrm{N/m^2}", rep: "Newton per square meter", unit: "Newton per square meter", unitSym: "\\mathrm{N/m^2}" },
                        { symbol: "\\mathrm{atm}", rep: "Standard atmosphere (101,325 Pa)", unit: "Atmosphere", unitSym: "\\mathrm{atm}" },
                        { symbol: "\\mathrm{bar}", rep: "Bar (100,000 Pa)", unit: "Bar", unitSym: "\\mathrm{bar}" },
                        { symbol: "\\mathrm{mmHg}", rep: "Millimeter of mercury (Torr)", unit: "Millimeter of mercury", unitSym: "\\mathrm{mmHg}" }
                    ]
                },
                {
                    section: "Units & Standards",
                    name: "Volume & Temperature Conversions",
                    formula: "\\[ 1\\,\\mathrm{m^3} = 10^3\\,\\mathrm{dm^3} = 10^3\\,\\mathrm{L}, \\quad 1\\,\\mathrm{dm^3} = 1\\,\\mathrm{L} = 10^3\\,\\mathrm{mL}, \\quad T_K = T_C + 273 \\]",
                    figure: { img: "image_G12_one/ch1-l1-eq16.png", title: "Volume & Temperature Conversions", caption: "Metric volume units and Celsius to Kelvin absolute temperature scale." },
                    pdfPage: "PDF Page 7 & 8",
                    explanation: "Metric volume relations and Celsius to Kelvin absolute temperature conversion required in thermodynamics.",
                    conditions: "Thermodynamic equations require temperature T in Kelvin.",
                    variables: [
                        { symbol: "T_K", rep: "Absolute thermodynamic temperature", unit: "Kelvin", unitSym: "\\mathrm{K}" },
                        { symbol: "T_C", rep: "Celsius temperature", unit: "Degree Celsius", unitSym: "^\circ\\mathrm{C}" },
                        { symbol: "\\mathrm{m^3}", rep: "Cubic meter (SI volume base unit)", unit: "Cubic meter", unitSym: "\\mathrm{m^3}" },
                        { symbol: "\\mathrm{L}", rep: "Liter (10⁻³ m³)", unit: "Liter", unitSym: "\\mathrm{L}" }
                    ]
                }
            ],
            flashcards: [
                { front: "What is the formula for pressure in kinetic theory of gases?", back: "\\( P = \\frac{2}{3}\\left(\\frac{N}{V}\\right)K_{av} \\)" },
                { front: "What is the Ideal Gas Law equation?", back: "\\( PV = nRT = N k_B T \\)" },
                { front: "What is the formula for average molecular kinetic energy?", back: "\\( K_{av} = \\frac{3}{2} k_B T \\)" },
                { front: "What is the formula for root-mean-square speed \\( v_{rms} \\)?", back: "\\( v_{rms} = \\sqrt{\\frac{3RT}{M}} = \\sqrt{\\frac{3k_B T}{m_0}} \\)" },
                { front: "What is the Combined Gas Law?", back: "\\( \\frac{P_1 V_1}{T_1} = \\frac{P_2 V_2}{T_2} \\)" },
                { front: "What is the value of the Universal Gas Constant R?", back: "8.314 J/(mol·K)" }
            ],
            quiz: [
                { question: "The average translational kinetic energy of an ideal gas molecule depends exclusively on:", options: ["Gas pressure", "Container volume", "Absolute temperature T", "Gas density"], correctIndex: 2, feedback: "K_av = (3/2)k_B T, depending solely on absolute temperature." },
                { question: "Which formula expresses the root-mean-square speed of gas molecules?", options: ["\\( \\sqrt{3RT/M} \\)", "\\( 3RT/M \\)", "\\( \\sqrt{2RT/M} \\)", "\\( RT/M \\)"], correctIndex: 0, feedback: "v_rms = sqrt(3RT / M) = sqrt(3k_B T / m₀)." },
                { question: "In an isobaric process, which relationship between volume and temperature is correct?", options: ["V₁ / T₁ = V₂ / T₂", "V₁ T₁ = V₂ T₂", "V₁ P₁ = V₂ P₂", "V₁ / P₁ = V₂ / P₂"], correctIndex: 0, feedback: "Charles's law states V / T = constant when pressure is held constant." },
                { question: "What is the pressure conversion for 1 standard atmosphere (atm)?", options: ["100 Pa", "1.013 × 10⁵ Pa", "760 Pa", "10³ Pa"], correctIndex: 1, feedback: "1 atm = 1.013 × 10⁵ Pa = 760 mmHg." }
            ]
        },

        // =====================================================================
        // CHAPTER 1 LESSON 2: First Law of Thermodynamics (PDF Pages 9 - 11)
        // =====================================================================
        {
            id: "g12-l2",
            gifUrl: "",
            worksheetUrl: "worksheets/ch1-l2-worksheet.pdf",
            ebookUrl: "ebooks/g12-ch1-l2-ebook.pdf.pdf",
            ebooks: [
                { title: "The Laws of Thermodynamics (pp. 19–48)", url: "ebooks/g12-ch1-l2-ebook.pdf.pdf", altUrl: "ebooks/g12-ch1-l2-ebook.pdf" }
            ],
            games: [{ topic: "First Law of Thermodynamics", url: "https://gemini.google.com/share/9e34579d87cd" }],
            title: "Chapter 1 Lesson 2: First Law of Thermodynamics",
            concepts: [
                "First Law of Thermodynamics: Conservation of energy in thermodynamic systems: \\( Q = W + \\Delta U \\iff \\Delta U = Q - W \\).",
                "Sign Conventions: Q > 0 absorbed, Q < 0 expelled; W > 0 work done by system, W < 0 work received by system; ΔU > 0 internal energy increase.",
                "1. Isobaric Process (\\(P = \\text{const}\\)): \\( W = P_{\\mathrm{av}}\\Delta V = P(V_f - V_i) \\), and heat added is \\( Q_p = \\Delta U + W = \\frac{3}{2}nR\\Delta T + P_{\\mathrm{av}}\\Delta V = \\frac{5}{2}nR\\Delta T = nC_p\\Delta T \\).",
                "2. Linear P–V Process: \\( W = P_{\\mathrm{av}}\\Delta V = \\left(\\frac{P_i + P_f}{2}\\right)(V_f - V_i) \\), and heat added is \\( Q = \\Delta U + W = \\frac{3}{2}nR\\Delta T + P_{\\mathrm{av}}\\Delta V \\).",
                "3. Isothermal Process (\\(\\Delta T = 0\\)): For an ideal gas \\(\\Delta U = 0\\), so \\( Q = W = nRT\\ln\\left(\\frac{V_2}{V_1}\\right) = nRT\\ln\\left(\\frac{P_1}{P_2}\\right) \\).",
                "4. Isochoric Process (\\(V = \\text{const}\\)): Volume is constant (\\(\\Delta V = 0\\)), so \\( W = 0 \\), and heat added is \\( Q_v = \\Delta U + W = \\frac{3}{2}nR\\Delta T = nC_v\\Delta T \\).",
                "5. Adiabatic Process (\\(Q = 0\\)): Zero heat exchange; work done is \\( W = -\\Delta U = \\frac{nR}{\\gamma-1}(T_1-T_2) = \\frac{P_1V_1-P_2V_2}{\\gamma-1} \\).",
                "Adiabatic Relationships (Poisson's Laws): \\( PV^\\gamma = \\text{constant} \\), \\( P_1V_1^\\gamma = P_2V_2^\\gamma \\), \\( T_1V_1^{\\gamma-1} = T_2V_2^{\\gamma-1} \\), \\( T_1^\\gamma P_1^{1-\\gamma} = T_2^\\gamma P_2^{1-\\gamma} \\).",
                "Internal Energy of Ideal Gas: \\( U = \\frac{3}{2}nRT \\); in isothermal and closed cyclic processes \\( \\Delta U = 0 \\).",
                "Heat Absorption: Sensible heat \\( Q = mc\\Delta T \\), Latent heat \\( Q = mL \\), and Adiabatic \\( Q = 0 \\)."
            ],
            definitions: [
                { term: "First Law of Thermodynamics", definition: "Conservation of energy: net heat added to system equals work done by system plus internal energy increase.", symbol: "Q = W + \\Delta U", unit: "\\mathrm{J}", equation: "Q = W + \\Delta U" },
                { term: "Internal Energy", definition: "Total microscopic kinetic energy of all gas molecules in the system.", symbol: "U", unit: "\\mathrm{J}", equation: "U = \\frac{3}{2}nRT" },
                { term: "Isobaric Process", definition: "Thermodynamic change taking place at constant pressure (P_av = P).", symbol: "P = \\text{const}", unit: "No SI unit", equation: "W = P_{\\mathrm{av}}\\Delta V, \\; Q_p = \\Delta U + W = \\frac{5}{2}nR\\Delta T = nC_p\\Delta T" },
                { term: "Linear P–V Process", definition: "Thermodynamic path where pressure varies linearly with volume across the P-V plane.", symbol: "P(V) = mV + c", unit: "No SI unit", equation: "W = P_{\\mathrm{av}}\\Delta V, \\; Q = \\Delta U + W = \\frac{3}{2}nR\\Delta T + P_{\\mathrm{av}}\\Delta V" },
                { term: "Isothermal Process", definition: "Thermodynamic change at constant temperature (ΔT = 0, ΔU = 0, so Q = W).", symbol: "T = \\text{const}", unit: "No SI unit", equation: "Q = W = nRT\\ln\\left(\\frac{V_2}{V_1}\\right) = nRT\\ln\\left(\\frac{P_1}{P_2}\\right)" },
                { term: "Isochoric Process", definition: "Thermodynamic change at constant volume (ΔV = 0, W = 0, so Q_v = ΔU).", symbol: "V = \\text{const}", unit: "No SI unit", equation: "W = 0, \\; Q_v = \\Delta U + W = \\frac{3}{2}nR\\Delta T = nC_v\\Delta T" },
                { term: "Adiabatic Process", definition: "Process occurring with zero heat exchange with surroundings (Q = 0, W = -ΔU).", symbol: "Q = 0", unit: "No SI unit", equation: "W = -\\Delta U = \\frac{nR}{\\gamma-1}(T_1-T_2) = \\frac{P_1V_1-P_2V_2}{\\gamma-1}" },
                { term: "Adiabatic Relationships (Poisson's Relations)", definition: "Equations connecting state variables during reversible adiabatic expansion or compression of an ideal gas.", symbol: "PV^\\gamma = \\text{const}", unit: "No SI unit", equation: "PV^\\gamma = \\text{const}, \\; P_1V_1^\\gamma = P_2V_2^\\gamma, \\; T_1V_1^{\\gamma-1} = T_2V_2^{\\gamma-1}" }
            ],
            examples: [
                {
                    title: "Example 1: First Law of Thermodynamics Energy Balance",
                    question: "An enclosed gas absorbs 800 J of heat from a thermal reservoir while expanding and doing 350 J of mechanical work on a piston. Calculate the change in internal energy of the gas.",
                    given: "Heat absorbed \\( Q = +800\\,\\mathrm{J} \\), Work done by gas \\( W = +350\\,\\mathrm{J} \\).",
                    find: "Change in internal energy (\\( \\Delta U \\)) in \\( \\mathrm{J} \\).",
                    equation: "Q = \\Delta U + W \\iff \\Delta U = Q - W",
                    rearrangement: "\\Delta U = Q - W",
                    solution: "1. <strong>Formula:</strong> \\( \\Delta U = Q - W \\)<br>2. <strong>Substitution:</strong> \\( \\Delta U = 800\\,\\mathrm{J} - 350\\,\\mathrm{J} \\)<br>3. <strong>Calculation:</strong> \\( \\Delta U = +450\\,\\mathrm{J} \\).",
                    finalAnswer: "\\Delta U = +450\\,\\mathrm{J}",
                    explanation: "By the First Law of Thermodynamics, heat added to a system either increases its internal thermal energy or leaves the system as mechanical work done on the environment."
                },
                {
                    title: "Example 2: Work Done in an Isobaric Expansion",
                    question: "An ideal gas expands isobarically at a constant pressure of 2.0 × 10⁵ Pa from an initial volume of 0.010 m³ to a final volume of 0.025 m³. Find the mechanical work done by the gas.",
                    given: "Constant pressure \\( P = P_{\\mathrm{av}} = 2.0 \\times 10^5\\,\\mathrm{Pa} \\), Initial volume \\( V_i = 0.010\\,\\mathrm{m^3} \\), Final volume \\( V_f = 0.025\\,\\mathrm{m^3} \\).",
                    find: "Work done by gas (\\( W \\)) in \\( \\mathrm{J} \\) and \\( \\mathrm{kJ} \\).",
                    equation: "W = P_{\\mathrm{av}}\\Delta V = P(V_f - V_i)",
                    rearrangement: "W = P(V_f - V_i)",
                    solution: "1. <strong>Volume Change:</strong> \\( \\Delta V = V_f - V_i = 0.025 - 0.010 = 0.015\\,\\mathrm{m^3} \\)<br>2. <strong>Work Calculation:</strong><br>\\[ W = P\\Delta V = (2.0 \\times 10^5\\,\\mathrm{Pa})(0.015\\,\\mathrm{m^3}) = 3000\\,\\mathrm{J} = 3.0\\,\\mathrm{kJ} \\]",
                    finalAnswer: "W = 3.0\\,\\mathrm{kJ} \\; (3000\\,\\mathrm{J})",
                    explanation: "In an isobaric process, work done equals the rectangular area on the P-V diagram under constant pressure: W = P·ΔV."
                },
                {
                    title: "Example 3: Heat Transfer in an Isobaric Process (Qp = n Cp ΔT)",
                    question: "A sample of 2.0 moles of a monatomic ideal gas is heated at constant pressure (P = constant) so that its temperature rises by ΔT = 40 K. Calculate the internal energy change, work done, and total heat added. (R = 8.314 J/(mol·K)).",
                    given: "Amount of gas \\( n = 2.0\\,\\mathrm{mol} \\), Temperature increase \\( \\Delta T = 40\\,\\mathrm{K} \\), Gas constant \\( R = 8.314\\,\\mathrm{J/(mol\\cdot K)} \\).",
                    find: "Change in internal energy (\\( \\Delta U \\)), work done (\\( W \\)), and isobaric heat (\\( Q_p \\)) in \\( \\mathrm{J} \\).",
                    equation: "Q_p = \\Delta U + W = \\frac{3}{2}nR\\Delta T + nR\\Delta T = \\frac{5}{2}nR\\Delta T = n C_p \\Delta T",
                    rearrangement: "\\Delta U = \\frac{3}{2}nR\\Delta T, \\quad W = nR\\Delta T, \\quad Q_p = \\frac{5}{2}nR\\Delta T",
                    solution: "1. <strong>Internal Energy Change:</strong><br>\\[ \\Delta U = \\frac{3}{2}(2.0\\,\\mathrm{mol})(8.314\\,\\mathrm{J/(mol\\cdot K)})(40\\,\\mathrm{K}) = 3 \\times 8.314 \\times 40 = 997.68\\,\\mathrm{J} \\]<br>2. <strong>Work Done:</strong><br>\\[ W = nR\\Delta T = (2.0)(8.314)(40) = 665.12\\,\\mathrm{J} \\]<br>3. <strong>Total Heat Added:</strong><br>\\[ Q_p = \\Delta U + W = 997.68 + 665.12 = 1662.8\\,\\mathrm{J} = \\frac{5}{2}(2.0)(8.314)(40) \\]",
                    finalAnswer: "\\Delta U \\approx 998\\,\\mathrm{J}, \\quad W \\approx 665\\,\\mathrm{J}, \\quad Q_p \\approx 1663\\,\\mathrm{J} \\; (1.66\\,\\mathrm{kJ})",
                    explanation: "For an isobaric process of a monatomic gas, 60% (3/5) of the added heat goes into raising internal energy and 40% (2/5) is converted into boundary work."
                },
                {
                    title: "Example 4: Work and Heat in a Linear P–V Process",
                    question: "An ideal gas undergoes a linear thermodynamic transition from state 1 (P₁ = 1.0 × 10⁵ Pa, V₁ = 0.020 m³, T₁ = 300 K) to state 2 (P₂ = 3.0 × 10⁵ Pa, V₂ = 0.060 m³, T₂ = 900 K). For n = 0.80 mol, calculate the work done and total heat exchanged.",
                    given: "Initial state: \\( P_1 = 1.0 \\times 10^5\\,\\mathrm{Pa} \\), \\( V_1 = 0.020\\,\\mathrm{m^3} \\). Final state: \\( P_2 = 3.0 \\times 10^5\\,\\mathrm{Pa} \\), \\( V_2 = 0.060\\,\\mathrm{m^3} \\). Temperature change: \\( \\Delta T = 600\\,\\mathrm{K} \\), \\( n = 0.80\\,\\mathrm{mol} \\).",
                    find: "Work done (\\( W \\)) and heat added (\\( Q \\)) in \\( \\mathrm{kJ} \\).",
                    equation: "W = P_{\\mathrm{av}}\\Delta V = \\left(\\frac{P_1 + P_2}{2}\\right)(V_2 - V_1), \\quad Q = \\Delta U + W = \\frac{3}{2}nR\\Delta T + W",
                    rearrangement: "P_{\\mathrm{av}} = \\frac{P_1 + P_2}{2}, \\quad W = P_{\\mathrm{av}}(V_2 - V_1)",
                    solution: "1. <strong>Average Pressure:</strong><br>\\[ P_{\\mathrm{av}} = \\frac{1.0 \\times 10^5 + 3.0 \\times 10^5}{2} = 2.0 \\times 10^5\\,\\mathrm{Pa} \\]<br>2. <strong>Work Done (Trapezoidal Area):</strong><br>\\[ W = P_{\\mathrm{av}}\\Delta V = (2.0 \\times 10^5\\,\\mathrm{Pa})(0.060 - 0.020\\,\\mathrm{m^3}) = 8000\\,\\mathrm{J} = 8.0\\,\\mathrm{kJ} \\]<br>3. <strong>Internal Energy Change:</strong><br>\\[ \\Delta U = \\frac{3}{2}nR\\Delta T = 1.5 \\times 0.80 \\times 8.314 \\times 600 = 5986\\,\\mathrm{J} \\approx 5.99\\,\\mathrm{kJ} \\]<br>4. <strong>Heat Added:</strong><br>\\[ Q = \\Delta U + W = 5986 + 8000 = 13{,}986\\,\\mathrm{J} \\approx 14.0\\,\\mathrm{kJ} \\]",
                    finalAnswer: "W = 8.0\\,\\mathrm{kJ}, \\quad Q \\approx 14.0\\,\\mathrm{kJ}",
                    explanation: "Along a linear P-V path, work is the exact trapezoidal area under the segment: W = P_av · ΔV, and heat is the sum of ΔU and W."
                },
                {
                    title: "Example 5: Work and Heat in an Isothermal Expansion (Q = W = nRT ln(V₂/V₁))",
                    question: "A cylinder containing 1.5 moles of an ideal gas at a constant temperature of 300 K expands isothermally from an initial volume of 0.010 m³ to 0.030 m³. Calculate the internal energy change, work done, and heat absorbed by the gas.",
                    given: "Moles \\( n = 1.5\\,\\mathrm{mol} \\), Constant temperature \\( T = 300\\,\\mathrm{K} \\), Volume ratio \\( \\frac{V_2}{V_1} = \\frac{0.030}{0.010} = 3.0 \\), \\( R = 8.314\\,\\mathrm{J/(mol\\cdot K)} \\). (Note: \\( \\ln 3.0 \\approx 1.0986 \\)).",
                    find: "Internal energy change (\\( \\Delta U \\)), work done (\\( W \\)), and heat absorbed (\\( Q \\)) in \\( \\mathrm{J} \\).",
                    equation: "Q = W = nRT \\ln\\left(\\frac{V_2}{V_1}\\right), \\quad \\Delta U = 0",
                    rearrangement: "W = nRT \\ln\\left(\\frac{V_2}{V_1}\\right), \\quad Q = W",
                    solution: "1. <strong>Internal Energy Change:</strong> Since temperature is constant, \\( \\Delta U = 0 \\).<br>2. <strong>Work Done:</strong><br>\\[ W = (1.5\\,\\mathrm{mol})(8.314\\,\\mathrm{J/(mol\\cdot K)})(300\\,\\mathrm{K})\\ln(3.0) = (3741.3)(1.0986) \\approx 4110\\,\\mathrm{J} \\]<br>3. <strong>Heat Absorbed:</strong> By the First Law, \\( Q = \\Delta U + W = 0 + 4110 = 4110\\,\\mathrm{J} \\).",
                    finalAnswer: "\\Delta U = 0, \\quad W \\approx 4110\\,\\mathrm{J} \\; (4.11\\,\\mathrm{kJ}), \\quad Q \\approx 4110\\,\\mathrm{J}",
                    explanation: "In an isothermal expansion of an ideal gas, temperature does not change (ΔU = 0), so all absorbed heat is converted directly into mechanical expansion work (Q = W)."
                },
                {
                    title: "Example 6: Isothermal Compression Using Pressure Ratio",
                    question: "An ideal gas containing 2.0 moles at 350 K is compressed isothermally from an initial pressure of 1.0 × 10⁵ Pa to a final pressure of 4.0 × 10⁵ Pa. Calculate the work done by the gas.",
                    given: "Amount \\( n = 2.0\\,\\mathrm{mol} \\), Temperature \\( T = 350\\,\\mathrm{K} \\), Initial pressure \\( P_1 = 1.0 \\times 10^5\\,\\mathrm{Pa} \\), Final pressure \\( P_2 = 4.0 \\times 10^5\\,\\mathrm{Pa} \\). (Note: \\( \\ln(1/4) = -\\ln 4 \\approx -1.3863 \\)).",
                    find: "Work done by the gas (\\( W \\)) in \\( \\mathrm{J} \\) and \\( \\mathrm{kJ} \\).",
                    equation: "W = nRT \\ln\\left(\\frac{P_1}{P_2}\\right)",
                    rearrangement: "W = nRT \\ln\\left(\\frac{P_1}{P_2}\\right)",
                    solution: "1. <strong>Formula:</strong> \\( W = nRT \\ln\\left(\\frac{P_1}{P_2}\\right) \\)<br>2. <strong>Substitution:</strong><br>\\[ W = (2.0\\,\\mathrm{mol})(8.314\\,\\mathrm{J/(mol\\cdot K)})(350\\,\\mathrm{K}) \\ln\\left(\\frac{1.0 \\times 10^5}{4.0 \\times 10^5}\\right) = (5819.8)(-\\ln 4) \\]<br>3. <strong>Calculation:</strong> \\( W = (5819.8)(-1.3863) \\approx -8068\\,\\mathrm{J} = -8.07\\,\\mathrm{kJ} \\).",
                    finalAnswer: "W \\approx -8.07\\,\\mathrm{kJ} \\; (-8068\\,\\mathrm{J})",
                    explanation: "The negative work indicates that external work was performed on the gas to compress it, with an equivalent quantity of heat expelled to the surroundings."
                },
                {
                    title: "Example 7: Isochoric Process Work and Heat (W = 0, Qv = n Cv ΔT)",
                    question: "A rigid, sealed steel tank of fixed volume contains 3.0 moles of a monatomic ideal gas. When 4500 J of heat is added to the gas, determine the mechanical work done and the temperature increase of the gas. (Cv = (3/2)R = 12.47 J/(mol·K)).",
                    given: "Rigid container volume \\( V = \\text{constant} \\; (\\Delta V = 0) \\), Heat added \\( Q_v = 4500\\,\\mathrm{J} \\), Moles \\( n = 3.0\\,\\mathrm{mol} \\), \\( C_v = \\frac{3}{2}R = 12.471\\,\\mathrm{J/(mol\\cdot K)} \\).",
                    find: "Mechanical work done (\\( W \\)) and temperature increase (\\( \\Delta T \\)) in \\( \\mathrm{K} \\).",
                    equation: "W = 0 \\quad (\\Delta V = 0), \\quad Q_v = \\Delta U = n C_v \\Delta T = \\frac{3}{2}nR\\Delta T",
                    rearrangement: "W = 0, \\quad \\Delta T = \\frac{Q_v}{n C_v}",
                    solution: "1. <strong>Work Done:</strong> Because the container walls cannot move (\\( \\Delta V = 0 \\)), \\( W = 0 \\).<br>2. <strong>Internal Energy Change:</strong> \\( \\Delta U = Q_v - W = 4500\\,\\mathrm{J} - 0 = 4500\\,\\mathrm{J} \\).<br>3. <strong>Temperature Rise:</strong><br>\\[ \\Delta T = \\frac{Q_v}{n C_v} = \\frac{4500\\,\\mathrm{J}}{(3.0\\,\\mathrm{mol})(12.471\\,\\mathrm{J/(mol\\cdot K)})} = \\frac{4500}{37.413} \\approx 120.3\\,\\mathrm{K} \\]",
                    finalAnswer: "W = 0\\,\\mathrm{J}, \\quad \\Delta T \\approx 120\\,\\mathrm{K}",
                    explanation: "At constant volume, no boundary work can be performed (W = 0), so 100% of the supplied heat directly increases the internal kinetic energy and temperature."
                },
                {
                    title: "Example 8: Work Done in an Adiabatic Expansion (W = (P₁V₁ - P₂V₂)/(γ - 1))",
                    question: "An ideal gas with adiabatic index γ = 1.40 expands adiabatically from state 1 (P₁ = 4.0 × 10⁵ Pa, V₁ = 0.010 m³) to state 2 (P₂ = 1.5 × 10⁵ Pa, V₂ = 0.020 m³). Calculate the work done by the gas during this expansion.",
                    given: "Initial state: \\( P_1 = 4.0 \\times 10^5\\,\\mathrm{Pa} \\), \\( V_1 = 0.010\\,\\mathrm{m^3} \\). Final state: \\( P_2 = 1.5 \\times 10^5\\,\\mathrm{Pa} \\), \\( V_2 = 0.020\\,\\mathrm{m^3} \\). Adiabatic index \\( \\gamma = 1.40 \\).",
                    find: "Work done by expanding gas (\\( W \\)) in \\( \\mathrm{J} \\) and \\( \\mathrm{kJ} \\).",
                    equation: "W = \\frac{P_1 V_1 - P_2 V_2}{\\gamma - 1}",
                    rearrangement: "W = \\frac{P_1 V_1 - P_2 V_2}{\\gamma - 1}",
                    solution: "1. <strong>Evaluate P₁V₁ and P₂V₂:</strong><br>\\[ P_1 V_1 = (4.0 \\times 10^5\\,\\mathrm{Pa})(0.010\\,\\mathrm{m^3}) = 4000\\,\\mathrm{J} \\]<br>\\[ P_2 V_2 = (1.5 \\times 10^5\\,\\mathrm{Pa})(0.020\\,\\mathrm{m^3}) = 3000\\,\\mathrm{J} \\]<br>2. <strong>Work Calculation:</strong><br>\\[ W = \\frac{4000 - 3000}{1.40 - 1} = \\frac{1000}{0.40} = 2500\\,\\mathrm{J} = 2.5\\,\\mathrm{kJ} \\]",
                    finalAnswer: "W = 2.5\\,\\mathrm{kJ} \\; (2500\\,\\mathrm{J})",
                    explanation: "In an adiabatic expansion (Q = 0), work is extracted entirely from the internal energy of the gas (W = -ΔU), causing the gas to cool."
                },
                {
                    title: "Example 9: Adiabatic Expansion Using Poisson's Law (P₁V₁^γ = P₂V₂^γ)",
                    question: "An ideal gas with adiabatic ratio γ = 1.40 is initially at pressure P₁ = 2.0 × 10⁵ Pa and volume V₁ = 0.015 m³. It expands adiabatically without heat loss to a final volume V₂ = 0.030 m³ (doubling in volume). Find the final pressure P₂.",
                    given: "Initial pressure \\( P_1 = 2.0 \\times 10^5\\,\\mathrm{Pa} \\), Initial volume \\( V_1 = 0.015\\,\\mathrm{m^3} \\), Final volume \\( V_2 = 0.030\\,\\mathrm{m^3} \\), Adiabatic constant \\( \\gamma = 1.40 \\). (Note: \\( 2^{1.4} \\approx 2.639 \\)).",
                    find: "Final pressure (\\( P_2 \\)) in \\( \\mathrm{Pa} \\) and \\( \\mathrm{kPa} \\).",
                    equation: "P_1 V_1^\\gamma = P_2 V_2^\\gamma",
                    rearrangement: "P_2 = P_1 \\left(\\frac{V_1}{V_2}\\right)^\\gamma",
                    solution: "1. <strong>Rearranged Formula:</strong> \\( P_2 = P_1 \\left(\\frac{V_1}{V_2}\\right)^\\gamma \\)<br>2. <strong>Volume Ratio:</strong> \\( \\frac{V_1}{V_2} = \\frac{0.015}{0.030} = \\frac{1}{2} = 0.50 \\)<br>3. <strong>Calculation:</strong><br>\\[ P_2 = (2.0 \\times 10^5\\,\\mathrm{Pa}) \\times (0.50)^{1.40} = \\frac{2.0 \\times 10^5}{2^{1.40}} = \\frac{200{,}000}{2.639} \\approx 75{,}786\\,\\mathrm{Pa} \\approx 75.8\\,\\mathrm{kPa} \\]",
                    finalAnswer: "P_2 \\approx 75.8\\,\\mathrm{kPa} \\; (7.58 \\times 10^4\\,\\mathrm{Pa})",
                    explanation: "Because γ > 1, pressure falls more steeply during adiabatic expansion than during isothermal expansion due to the simultaneous drop in temperature."
                },
                {
                    title: "Example 10: Temperature Change in Adiabatic Process (T₁V₁^(γ-1) = T₂V₂^(γ-1))",
                    question: "Air inside a diesel engine cylinder at initial temperature T₁ = 300 K (27°C) is compressed adiabatically from volume V₁ to V₂ = V₁ / 15 (compression ratio 15:1). Taking γ = 1.40, calculate the final temperature of the compressed air.",
                    given: "Initial temperature \\( T_1 = 300\\,\\mathrm{K} \\), Compression ratio \\( \\frac{V_1}{V_2} = 15 \\), Adiabatic exponent \\( \\gamma = 1.40 \\implies \\gamma - 1 = 0.40 \\). (Note: \\( 15^{0.40} \\approx 2.954 \\)).",
                    find: "Final temperature (\\( T_2 \\)) in \\( \\mathrm{K} \\) and \\( ^\\circ\\mathrm{C} \\).",
                    equation: "T_1 V_1^{\\gamma-1} = T_2 V_2^{\\gamma-1}",
                    rearrangement: "T_2 = T_1 \\left(\\frac{V_1}{V_2}\\right)^{\\gamma-1}",
                    solution: "1. <strong>Rearranged Formula:</strong> \\( T_2 = T_1 \\left(\\frac{V_1}{V_2}\\right)^{\\gamma-1} \\)<br>2. <strong>Substitution:</strong> \\( T_2 = (300\\,\\mathrm{K})(15)^{0.40} = 300 \\times 2.9542 \\approx 886.3\\,\\mathrm{K} \\)<br>3. <strong>In Celsius:</strong> \\( t_2 = 886.3 - 273 = 613.3\\,^\\circ\\mathrm{C} \\).",
                    finalAnswer: "T_2 \\approx 886\\,\\mathrm{K} \\; (\\approx 613\\,^\\circ\\mathrm{C})",
                    explanation: "Rapid adiabatic compression heats the gas significantly because work done on the gas increases its internal thermal energy, enabling diesel auto-ignition."
                },
                {
                    title: "Example 11: Internal Energy and Temperature Change (U = 1.5 nRT, ΔU = 1.5 nR ΔT)",
                    question: "Calculate the total internal energy of 4.0 moles of a monatomic ideal gas at 400 K, and find the change in internal energy if it cools to 280 K.",
                    given: "Amount \\( n = 4.0\\,\\mathrm{mol} \\), Initial temperature \\( T_1 = 400\\,\\mathrm{K} \\), Final temperature \\( T_2 = 280\\,\\mathrm{K} \\), Gas constant \\( R = 8.314\\,\\mathrm{J/(mol\\cdot K)} \\).",
                    find: "Total internal energy at 400 K (\\( U \\)) and change in internal energy (\\( \\Delta U \\)) in \\( \\mathrm{kJ} \\).",
                    equation: "U = \\frac{3}{2}nRT, \\quad \\Delta U = \\frac{3}{2}nR(T_2 - T_1)",
                    rearrangement: "\\Delta U = \\frac{3}{2}nR\\Delta T",
                    solution: "1. <strong>Total Internal Energy at 400 K:</strong><br>\\[ U = \\frac{3}{2}(4.0)(8.314)(400) = 19{,}953.6\\,\\mathrm{J} \\approx 20.0\\,\\mathrm{kJ} \\]<br>2. <strong>Temperature Change:</strong> \\( \\Delta T = 280 - 400 = -120\\,\\mathrm{K} \\)<br>3. <strong>Change in Internal Energy:</strong><br>\\[ \\Delta U = \\frac{3}{2}(4.0)(8.314)(-120) = -5986\\,\\mathrm{J} \\approx -5.99\\,\\mathrm{kJ} \\]",
                    finalAnswer: "U \\approx 20.0\\,\\mathrm{kJ}, \\quad \\Delta U \\approx -5.99\\,\\mathrm{kJ}",
                    explanation: "Internal energy is a thermodynamic state function solely dependent on absolute temperature: cooling the gas decreases its internal thermal energy."
                },
                {
                    title: "Example 12: Sensible Heat and Latent Heat of Phase Change",
                    question: "Calculate the heat needed to warm 0.50 kg of ice from -10°C to 0°C (c_ice = 2100 J/(kg·K)), and the latent heat required to melt it completely into water at 0°C (L_f = 3.34 × 10⁵ J/kg).",
                    given: "Ice mass \\( m = 0.50\\,\\mathrm{kg} \\), Temperature change \\( \\Delta T = 0 - (-10) = 10\\,\\mathrm{K} \\), Specific heat \\( c = 2100\\,\\mathrm{J/(kg\\cdot K)} \\), Latent heat of fusion \\( L_f = 3.34 \\times 10^5\\,\\mathrm{J/kg} \\).",
                    find: "Sensible heat (\\( Q_1 \\)), latent heat (\\( Q_2 \\)), and total heat (\\( Q_{\\text{total}} \\)) in \\( \\mathrm{kJ} \\).",
                    equation: "Q_1 = mc\\Delta T, \\quad Q_2 = mL_f, \\quad Q_{\\text{total}} = Q_1 + Q_2",
                    rearrangement: "Q_{\\text{total}} = mc\\Delta T + mL_f",
                    solution: "1. <strong>Sensible Heat to Warm Ice to 0°C:</strong><br>\\[ Q_1 = mc\\Delta T = (0.50\\,\\mathrm{kg})(2100\\,\\mathrm{J/(kg\\cdot K)})(10\\,\\mathrm{K}) = 10{,}500\\,\\mathrm{J} = 10.5\\,\\mathrm{kJ} \\]<br>2. <strong>Latent Heat of Fusion to Melt Ice:</strong><br>\\[ Q_2 = mL_f = (0.50\\,\\mathrm{kg})(3.34 \\times 10^5\\,\\mathrm{J/kg}) = 167{,}000\\,\\mathrm{J} = 167.0\\,\\mathrm{kJ} \\]<br>3. <strong>Total Heat Required:</strong> \\( Q_{\\text{total}} = 10.5 + 167.0 = 177.5\\,\\mathrm{kJ} \\).",
                    finalAnswer: "Q_1 = 10.5\\,\\mathrm{kJ}, \\quad Q_2 = 167.0\\,\\mathrm{kJ}, \\quad Q_{\\text{total}} = 177.5\\,\\mathrm{kJ}",
                    explanation: "Sensible heat produces temperature change without altering state, whereas latent heat breaks intermolecular bonds at constant temperature during a phase change."
                }
            ],
            equations: [
                {
                    section: "First Law of Thermodynamics",
                    name: "First Law of Thermodynamics & Sign Convention",
                    formula: "\\[ Q = W + \\Delta U \\iff \\Delta U = Q - W \\]",
                    figure: { img: "image_G12_one/ch1-l2-eq7.png", title: "First Law of Thermodynamics", caption: "Energy conservation with heat, work, and internal energy changes." },
                    pdfPage: "PDF Page 9 & 11",
                    explanation: "Energy conservation in thermodynamic systems: net heat added to system equals work done by system plus internal energy increase.",
                    conditions: "Sign conventions: Q > 0 absorbed, Q < 0 expelled; W > 0 done by system (expansion), W < 0 done on system (compression); ΔU > 0 increased, ΔU < 0 decreased.",
                    variables: [
                        { symbol: "Q", rep: "Net heat supplied to system (Q > 0 absorbed, Q < 0 expelled)", unit: "Joule", unitSym: "\\mathrm{J}" },
                        { symbol: "W", rep: "Work done by system on surroundings (W > 0 expansion, W < 0 compression)", unit: "Joule", unitSym: "\\mathrm{J}" },
                        { symbol: "\\Delta U", rep: "Change in internal energy of system (\\(U_f - U_i\\))", unit: "Joule", unitSym: "\\mathrm{J}" }
                    ]
                },
                {
                    section: "Work Done in Thermodynamic Processes",
                    name: "Work Done in Isobaric Process",
                    formula: "\\[ W = P_{\\mathrm{av}}\\Delta V = P(V_f - V_i) \\]\\[ Q_p = \\Delta U + W = \\frac{3}{2}nR\\Delta T + P_{\\mathrm{av}}\\Delta V = \\frac{5}{2}nR\\Delta T = nC_p\\Delta T \\]",
                    figure: { img: "image_G12_one/ch1-l2-eq1.png", title: "Work in Isobaric Process", caption: "Boundary work and heat transfer under constant pressure." },
                    pdfPage: "PDF Page 9 & 10",
                    explanation: "Mechanical boundary work and heat transfer for an ideal gas under constant pressure (\\(P = \\text{const}\\)). Since pressure is constant, \\(P_{\\mathrm{av}} = P\\) and work done by the gas is \\(W = P_{\\mathrm{av}}\\Delta V = P(V_f - V_i)\\). The total heat added satisfies \\(Q_p = \\Delta U + W = \\frac{5}{2}nR\\Delta T = nC_p\\Delta T\\).",
                    conditions: "Isobaric process (\\(P = \\text{constant}\\), \\(P_{\\mathrm{av}} = P\\)).",
                    variables: [
                        { symbol: "W", rep: "Work done by expanding gas (positive for expansion, negative for compression)", unit: "Joule", unitSym: "\\mathrm{J}" },
                        { symbol: "Q_p", rep: "Heat transferred to gas at constant pressure", unit: "Joule", unitSym: "\\mathrm{J}" },
                        { symbol: "\\Delta U", rep: "Change in internal energy (\\(\\frac{3}{2}nR\\Delta T\\))", unit: "Joule", unitSym: "\\mathrm{J}" },
                        { symbol: "P_{\\mathrm{av}}, P", rep: "Average and constant gas pressure", unit: "Pascal", unitSym: "\\mathrm{Pa}" },
                        { symbol: "\\Delta V", rep: "Volume change (\\(V_f - V_i\\))", unit: "Cubic meter", unitSym: "\\mathrm{m^3}" },
                        { symbol: "V_f, V_i", rep: "Final and initial volumes", unit: "Cubic meter", unitSym: "\\mathrm{m^3}" },
                        { symbol: "n", rep: "Amount of gas", unit: "Mole", unitSym: "\\mathrm{mol}" },
                        { symbol: "R", rep: "Universal gas constant (8.314 J/(mol·K))", unit: "Joule per mole kelvin", unitSym: "\\mathrm{J/(mol\\cdot K)}" },
                        { symbol: "\\Delta T", rep: "Temperature change (\\(T_f - T_i\\))", unit: "Kelvin", unitSym: "\\mathrm{K}" },
                        { symbol: "C_p", rep: "Molar heat capacity at constant pressure (\\(C_p = \\frac{5}{2}R\\))", unit: "Joule per mole kelvin", unitSym: "\\mathrm{J/(mol\\cdot K)}" }
                    ]
                },
                {
                    section: "Work Done in Thermodynamic Processes",
                    name: "Work Done in Linear P-V Process",
                    formula: "\\[ W = P_{\\mathrm{av}}\\Delta V = \\left(\\frac{P_i + P_f}{2}\\right)(V_f - V_i) \\]\\[ Q = \\Delta U + W = \\frac{3}{2}nR\\Delta T + P_{\\mathrm{av}}\\Delta V \\]",
                    figure: { img: "image_G12_one/ch1-l2-eq2.png", title: "Work in Linear P-V Process", caption: "Trapezoidal area work integration on the P-V plane." },
                    pdfPage: "PDF Page 9 & 10",
                    explanation: "For an ideal gas along a straight-line path on the P-V diagram where pressure varies linearly with volume, work is evaluated as the trapezoidal area \\(W = P_{\\mathrm{av}}\\Delta V\\). Net heat transfer is governed by the First Law: \\(Q = \\Delta U + W = \\frac{3}{2}nR\\Delta T + P_{\\mathrm{av}}\\Delta V\\).",
                    conditions: "Linear path between states \\((P_i, V_i)\\) and \\((P_f, V_f)\\) on P-V plane.",
                    variables: [
                        { symbol: "W", rep: "Work done by gas (trapezoidal area under P-V path)", unit: "Joule", unitSym: "\\mathrm{J}" },
                        { symbol: "Q", rep: "Total heat transferred during linear process", unit: "Joule", unitSym: "\\mathrm{J}" },
                        { symbol: "\\Delta U", rep: "Change in internal energy (\\(\\frac{3}{2}nR\\Delta T\\))", unit: "Joule", unitSym: "\\mathrm{J}" },
                        { symbol: "P_{\\mathrm{av}}", rep: "Average pressure during process (\\(\\frac{P_i + P_f}{2}\\))", unit: "Pascal", unitSym: "\\mathrm{Pa}" },
                        { symbol: "P_i, P_f", rep: "Initial and final pressures", unit: "Pascal", unitSym: "\\mathrm{Pa}" },
                        { symbol: "V_i, V_f", rep: "Initial and final volumes", unit: "Cubic meter", unitSym: "\\mathrm{m^3}" },
                        { symbol: "\\Delta V", rep: "Volume change (\\(V_f - V_i\\))", unit: "Cubic meter", unitSym: "\\mathrm{m^3}" },
                        { symbol: "n", rep: "Amount of gas", unit: "Mole", unitSym: "\\mathrm{mol}" },
                        { symbol: "R", rep: "Universal gas constant (8.314 J/(mol·K))", unit: "Joule per mole kelvin", unitSym: "\\mathrm{J/(mol\\cdot K)}" },
                        { symbol: "\\Delta T", rep: "Temperature change (\\(T_f - T_i\\))", unit: "Kelvin", unitSym: "\\mathrm{K}" }
                    ]
                },
                {
                    section: "Work Done in Thermodynamic Processes",
                    name: "Work Done in Isothermal Process",
                    formula: "\\[ Q = W = nRT \\ln\\left(\\frac{V_2}{V_1}\\right) = nRT \\ln\\left(\\frac{P_1}{P_2}\\right) \\]",
                    figure: { img: "image_G12_one/ch1-l2-eq3.png", title: "Work in Isothermal Process", caption: "Logarithmic work and total conversion of heat at constant temperature." },
                    pdfPage: "PDF Page 9 & 10",
                    explanation: "For an ideal gas in an isothermal process (\\(\\Delta T = 0\\)), internal energy depends solely on temperature, so \\(\\Delta U = 0\\). By the First Law (\\(Q = \\Delta U + W\\)), all heat transferred is converted into work (\\(Q = W\\)). By Boyle's Law (\\(P_1V_1 = P_2V_2\\)), the volume ratio equals \\(\\frac{V_2}{V_1} = \\frac{P_1}{P_2}\\).",
                    conditions: "Quasi-static reversible isothermal process (\\(\\Delta T = 0\\), T = constant, \\(\\Delta U = 0\\), so \\(Q = W\\)).",
                    variables: [
                        { symbol: "W", rep: "Work done by expanding gas", unit: "Joule", unitSym: "\\mathrm{J}" },
                        { symbol: "Q", rep: "Heat absorbed by gas (\\(Q = W\\))", unit: "Joule", unitSym: "\\mathrm{J}" },
                        { symbol: "\\Delta U", rep: "Change in internal energy (\\(\\Delta U = 0\\))", unit: "Joule", unitSym: "\\mathrm{J}" },
                        { symbol: "n", rep: "Amount of gas", unit: "Mole", unitSym: "\\mathrm{mol}" },
                        { symbol: "R", rep: "Universal gas constant (8.314 J/(mol·K))", unit: "Joule per mole kelvin", unitSym: "\\mathrm{J/(mol\\cdot K)}" },
                        { symbol: "T", rep: "Constant absolute temperature", unit: "Kelvin", unitSym: "\\mathrm{K}" },
                        { symbol: "V_1, V_2", rep: "Initial and final volumes", unit: "Cubic meter", unitSym: "\\mathrm{m^3}" },
                        { symbol: "P_1, P_2", rep: "Initial and final pressures", unit: "Pascal", unitSym: "\\mathrm{Pa}" }
                    ]
                },
                {
                    section: "Work Done in Thermodynamic Processes",
                    name: "Work Done in Isochoric Process",
                    formula: "\\[ W = 0 \\quad (\\Delta V = 0) \\]\\[ Q_v = \\Delta U + W = \\frac{3}{2}nR\\Delta T = nC_v\\Delta T \\]",
                    figure: { img: "image_G12_one/ch1-l2-eq4.png", title: "Work in Isochoric Process", caption: "Zero mechanical work (W = 0) and internal energy change at fixed volume." },
                    pdfPage: "PDF Page 9 & 10",
                    explanation: "In a rigid closed container at constant volume (\\(\\Delta V = 0\\)), no boundary displacement occurs, so thermodynamic work is zero (\\(W = 0\\)). By the First Law, all heat transferred directly changes internal energy: \\(Q_v = \\Delta U = \\frac{3}{2}nR\\Delta T = nC_v\\Delta T\\).",
                    conditions: "Isochoric process (\\(V = \\text{constant}\\), \\(\\Delta V = 0\\), \\(W = 0\\)).",
                    variables: [
                        { symbol: "W", rep: "Work done by gas (\\(W = 0\\))", unit: "Joule", unitSym: "\\mathrm{J}" },
                        { symbol: "Q_v", rep: "Heat transferred at constant volume", unit: "Joule", unitSym: "\\mathrm{J}" },
                        { symbol: "\\Delta U", rep: "Change in internal energy", unit: "Joule", unitSym: "\\mathrm{J}" },
                        { symbol: "\\Delta V", rep: "Volume change (\\(\\Delta V = 0\\))", unit: "Cubic meter", unitSym: "\\mathrm{m^3}" },
                        { symbol: "n", rep: "Amount of gas", unit: "Mole", unitSym: "\\mathrm{mol}" },
                        { symbol: "R", rep: "Universal gas constant (8.314 J/(mol·K))", unit: "Joule per mole kelvin", unitSym: "\\mathrm{J/(mol\\cdot K)}" },
                        { symbol: "C_v", rep: "Molar heat capacity at constant volume (\\(C_v = \\frac{3}{2}R\\))", unit: "Joule per mole kelvin", unitSym: "\\mathrm{J/(mol\\cdot K)}" },
                        { symbol: "\\Delta T", rep: "Temperature change (\\(T_2 - T_1\\))", unit: "Kelvin", unitSym: "\\mathrm{K}" }
                    ]
                },
                {
                    section: "Work Done in Thermodynamic Processes",
                    name: "Work Done in Adiabatic Process",
                    formula: "\\[ Q = 0, \\quad W = -\\Delta U = \\frac{nR}{\\gamma-1}(T_1-T_2) = \\frac{P_1V_1-P_2V_2}{\\gamma-1} \\]",
                    figure: { img: "image_G12_one/ch1-l2-eq10.png", title: "Work in Adiabatic Process", caption: "Zero heat exchange (Q = 0) and work done at expense of internal energy." },
                    pdfPage: "PDF Page 9 & 10",
                    explanation: "Work performed by an ideal gas during an adiabatic process with zero heat transfer with surroundings (\\(Q = 0\\), \\(W = -\\Delta U\\)). Gas expansion cools the gas (\\(T_2 < T_1\\)), while compression heats it.",
                    conditions: "Reversible adiabatic process (\\(Q = 0\\)).",
                    variables: [
                        { symbol: "W", rep: "Work done by gas (positive for expansion, negative for compression)", unit: "Joule", unitSym: "\\mathrm{J}" },
                        { symbol: "Q", rep: "Heat transferred (\\(Q = 0\\))", unit: "Joule", unitSym: "\\mathrm{J}" },
                        { symbol: "\\Delta U", rep: "Change in internal energy (\\(\\Delta U = -W\\))", unit: "Joule", unitSym: "\\mathrm{J}" },
                        { symbol: "n", rep: "Amount of gas", unit: "Mole", unitSym: "\\mathrm{mol}" },
                        { symbol: "R", rep: "Universal gas constant (8.314 J/(mol·K))", unit: "Joule per mole kelvin", unitSym: "\\mathrm{J/(mol\\cdot K)}" },
                        { symbol: "\\gamma", rep: "Adiabatic index / heat capacity ratio (\\(C_p / C_v\\))", unit: "Dimensionless ratio", unitSym: "No SI unit" },
                        { symbol: "T_1, T_2", rep: "Initial and final absolute temperatures", unit: "Kelvin", unitSym: "\\mathrm{K}" },
                        { symbol: "P_1, P_2", rep: "Initial and final pressures", unit: "Pascal", unitSym: "\\mathrm{Pa}" },
                        { symbol: "V_1, V_2", rep: "Initial and final volumes", unit: "Cubic meter", unitSym: "\\mathrm{m^3}" }
                    ]
                },
                {
                    section: "Work Done in Thermodynamic Processes",
                    name: "Adiabatic Relationships (Poisson's Laws)",
                    formula: "\\[ PV^\\gamma = \\text{constant}, \\quad P_1V_1^\\gamma = P_2V_2^\\gamma, \\quad T_1V_1^{\\gamma-1} = T_2V_2^{\\gamma-1}, \\quad T_1^\\gamma P_1^{1-\\gamma} = T_2^\\gamma P_2^{1-\\gamma} \\]",
                    figure: { img: "image_G12_one/ch1-l2-eq11.png", title: "Adiabatic Relationships (Poisson's Laws)", caption: "Poisson state relations for reversible adiabatic transformations." },
                    pdfPage: "PDF Page 9 & 10",
                    explanation: "Poisson's relations connecting state variables for a reversible adiabatic expansion or compression of an ideal gas.",
                    conditions: "Reversible adiabatic process (\\(Q = 0\\)) with constant heat capacity ratio \\(\\gamma\\).",
                    variables: [
                        { symbol: "P, P_1, P_2", rep: "Gas pressures (initial and final)", unit: "Pascal", unitSym: "\\mathrm{Pa}" },
                        { symbol: "V, V_1, V_2", rep: "Gas volumes (initial and final)", unit: "Cubic meter", unitSym: "\\mathrm{m^3}" },
                        { symbol: "T, T_1, T_2", rep: "Absolute temperatures (initial and final)", unit: "Kelvin", unitSym: "\\mathrm{K}" },
                        { symbol: "\\gamma", rep: "Heat capacity ratio (\\(C_p / C_v\\))", unit: "Dimensionless ratio", unitSym: "No SI unit" }
                    ]
                },
                {
                    section: "Internal Energy & Heat",
                    name: "Internal Energy of Monatomic Ideal Gas",
                    formula: "\\[ U = \\frac{3}{2}nRT = \\frac{3}{2}N k_B T = \\frac{3}{2}PV \\]",
                    figure: { img: "image_G12_one/ch1-l2-eq5.png", title: "Internal Energy of Ideal Gas", caption: "State function proportional to temperature and mole quantity." },
                    pdfPage: "PDF Page 9",
                    explanation: "Total internal thermal energy of a monatomic ideal gas comprising purely translational molecular kinetic energy.",
                    conditions: "Ideal monatomic gas with 3 translational degrees of freedom.",
                    variables: [
                        { symbol: "U", rep: "Total internal energy", unit: "Joule", unitSym: "\\mathrm{J}" },
                        { symbol: "n", rep: "Amount of substance", unit: "Mole", unitSym: "\\mathrm{mol}" },
                        { symbol: "R", rep: "Universal gas constant", unit: "Joule per mole kelvin", unitSym: "\\mathrm{J/(mol\\cdot K)}" },
                        { symbol: "T", rep: "Absolute temperature", unit: "Kelvin", unitSym: "\\mathrm{K}" },
                        { symbol: "N", rep: "Number of molecules", unit: "Dimensionless count", unitSym: "\\text{No SI unit}" },
                        { symbol: "k_B", rep: "Boltzmann constant", unit: "Joule per kelvin", unitSym: "\\mathrm{J/K}" },
                        { symbol: "P", rep: "Pressure", unit: "Pascal", unitSym: "\\mathrm{Pa}" },
                        { symbol: "V", rep: "Volume", unit: "Cubic meter", unitSym: "\\mathrm{m^3}" }
                    ]
                },
                {
                    section: "Internal Energy & Heat",
                    name: "Change in Internal Energy (ΔU)",
                    formula: "\\[ \\Delta U = U_f - U_i = \\frac{3}{2}nR\\Delta T = \\frac{3}{2}nR(T_f - T_i) \\]",
                    figure: { img: "image_G12_one/ch1-l2-eq6.png", title: "Change in Internal Energy", caption: "Thermal energy change proportional to temperature differential ΔT." },
                    pdfPage: "PDF Page 9",
                    explanation: "Change in internal energy depends solely on temperature change; ΔU = 0 for any isothermal or closed cyclic process.",
                    conditions: "In any isothermal process (T = const) or cyclic process (∮), ΔU = 0.",
                    variables: [
                        { symbol: "\\Delta U", rep: "Change in internal energy", unit: "Joule", unitSym: "\\mathrm{J}" },
                        { symbol: "U_f, U_i", rep: "Final and initial internal energy", unit: "Joule", unitSym: "\\mathrm{J}" },
                        { symbol: "n", rep: "Number of moles", unit: "Mole", unitSym: "\\mathrm{mol}" },
                        { symbol: "R", rep: "Universal gas constant", unit: "Joule per mole kelvin", unitSym: "\\mathrm{J/(mol\\cdot K)}" },
                        { symbol: "\\Delta T", rep: "Temperature change (\\(T_f - T_i\\))", unit: "Kelvin", unitSym: "\\mathrm{K}" }
                    ]
                },
                {
                    section: "Internal Energy & Heat",
                    name: "Sensible Heat Absorption & Capacity",
                    formula: "\\[ Q = mc\\Delta T = mc(T_f - T_i) \\]",
                    figure: { img: "image_G12_one/ch1-l2-eq8.png", title: "Sensible Heat Absorption", caption: "Heat absorbed across temperature change without state transition." },
                    pdfPage: "PDF Page 9",
                    explanation: "Heat energy absorbed or released by a substance undergoing a temperature change without phase transition.",
                    conditions: "Constant specific heat capacity over temperature range.",
                    variables: [
                        { symbol: "Q", rep: "Heat transferred (Q > 0 absorbed, Q < 0 released)", unit: "Joule", unitSym: "\\mathrm{J}" },
                        { symbol: "m", rep: "Mass of substance", unit: "Kilogram", unitSym: "\\mathrm{kg}" },
                        { symbol: "c", rep: "Specific heat capacity", unit: "Joule per kilogram kelvin", unitSym: "\\mathrm{J/(kg\\cdot K)}" },
                        { symbol: "\\Delta T", rep: "Temperature change (\\(T_f - T_i\\))", unit: "Kelvin", unitSym: "\\mathrm{K}" }
                    ]
                },
                {
                    section: "Internal Energy & Heat",
                    name: "Latent Heat in Phase Transitions",
                    formula: "\\[ Q = mL \\quad (\\text{Latent Heat}), \\quad Q = 0 \\quad (\\text{Adiabatic Process}) \\]",
                    figure: { img: "image_G12_one/ch1-l2-eq9.png", title: "Latent Heat in Phase Transitions", caption: "Isothermal heat exchange during phase change (Q = mL)." },
                    pdfPage: "PDF Page 9",
                    explanation: "Heat required for phase change at constant temperature; in an adiabatic process, heat exchange is zero (Q = 0).",
                    conditions: "Phase change occurs at constant saturation temperature.",
                    variables: [
                        { symbol: "Q", rep: "Latent heat exchanged", unit: "Joule", unitSym: "\\mathrm{J}" },
                        { symbol: "m", rep: "Mass undergoing phase transition", unit: "Kilogram", unitSym: "\\mathrm{kg}" },
                        { symbol: "L", rep: "Specific latent heat (fusion or vaporization)", unit: "Joule per kilogram", unitSym: "\\mathrm{J/kg}" }
                    ]
                }
            ],
            flashcards: [
                { front: "State the First Law of Thermodynamics formula:", back: "\\( Q = W + \\Delta U \\iff \\Delta U = Q - W \\)" },
                { front: "What is the formula for work in an isobaric expansion?", back: "\\( W = P\\Delta V = P(V_f - V_i) \\)" },
                { front: "How much work is done in an isochoric process?", back: "\\( W = 0 \\) (because \\( \\Delta V = 0 \\))." },
                { front: "What is \\( \\Delta U \\) in an isothermal process?", back: "\\( \\Delta U = 0 \\) (because \\( T = \\text{constant} \\))." },
                { front: "What is Q in an adiabatic process?", back: "\\( Q = 0 \\)" }
            ],
            quiz: [
                { question: "A gas absorbs 500 J of heat and expands, doing 200 J of work. What is ΔU?", options: ["700 J", "300 J", "-300 J", "2.5 J"], correctIndex: 1, feedback: "ΔU = Q - W = 500 - 200 = 300 J." },
                { question: "In an isochoric process, what is the work done by the gas?", options: ["PΔV", "nRT ln(Vf/Vi)", "0 J", "Q / 2"], correctIndex: 2, feedback: "Because volume is fixed, no displacement occurs, so W = 0." },
                { question: "What is the change in internal energy (ΔU) for any complete cyclic process?", options: ["Zero", "Positive", "Negative", "Equal to heat absorbed"], correctIndex: 0, feedback: "A cyclic process returns to its initial state, so ΔU = 0." }
            ]
        },

        // =====================================================================
        // CHAPTER 1 LESSON 3: Heat Engine (PDF Pages 12 - 13)
        // =====================================================================
        {
            id: "g12-l3",
            gifUrl: "",
            worksheetUrl: "worksheets/ch1-l3-worksheet.pdf",
            ebookUrl: "ebooks/g12-ch1-l3-ebook.pdf.pdf",
            ebooks: [
                { title: "Thermodynamics & Heat Engines (pp. 19–48)", url: "ebooks/g12-ch1-l3-ebook.pdf.pdf", altUrl: "ebooks/g12-ch1-l3-ebook.pdf" }
            ],
            games: [{ topic: "Heat Engine & Carnot Cycle", url: "https://gemini.google.com/share/9e34579d87cd" }],
            title: "Chapter 1 Lesson 3: Heat Engine",
            concepts: [
                "Heat Engine Operation: Transforms absorbed heat \\( Q_h \\) from a hot reservoir into mechanical work \\( W_M \\) and rejects waste heat \\( Q_c \\).",
                "Conservation of Energy: \\( Q_h = W_M + Q_c \\iff W_M = Q_h - Q_c \\).",
                "Carnot Reversible Cycle: Operates with heat-temperature ratio \\( \\frac{Q_c}{Q_h} = \\frac{T_c}{T_h} \\).",
                "Carnot (Maximum Ideal) Efficiency: \\( e_c = \\frac{W_M}{Q_h} = 1 - \\frac{Q_c}{Q_h} = 1 - \\frac{T_c}{T_h} \\).",
                "Actual Internal Combustion Engine: Combines combustion chamber thermal efficiency \\( e_c = \\frac{W_M}{Q_h} \\) and crankshaft mechanical efficiency \\( e_M = \\frac{W_U}{W_M} \\) into overall efficiency \\( e = e_c \\times e_M = \\frac{W_U}{Q_h} \\)."
            ],
            definitions: [
                { term: "Heat Engine", definition: "A cyclic device that absorbs thermal heat from a high-temperature source and converts part of it into useful mechanical work.", symbol: "\\text{Engine}", unit: "No SI unit", equation: "Q_h = W_M + Q_c" },
                { term: "Thermal Efficiency", definition: "The fraction of heat absorbed from the hot reservoir that is converted into mechanical work.", symbol: "e_c", unit: "No SI unit", equation: "e_c = \\frac{W_M}{Q_h} = 1 - \\frac{Q_c}{Q_h}" },
                { term: "Carnot Efficiency", definition: "The maximum theoretical efficiency possible for any heat engine operating between two given temperatures.", symbol: "e_{Carnot}", unit: "No SI unit", equation: "e_c = 1 - \\frac{T_c}{T_h}" },
                { term: "Mechanical Efficiency", definition: "Ratio of useful brake work output delivered by crankshaft to indicated mechanical work from combustion.", symbol: "e_M", unit: "No SI unit", equation: "e_M = \\frac{W_U}{W_M}" },
                { term: "Overall Efficiency", definition: "Total efficiency of an actual engine taking into account both thermal and mechanical frictional losses.", symbol: "e", unit: "No SI unit", equation: "e = e_c \\times e_M = \\frac{W_U}{Q_h}" }
            ],
            examples: [
                {
                    title: "Example 1: Energy Balance and Work of a Heat Engine",
                    question: "A heat engine absorbs 5000 J of heat from a high-temperature boiler and exhausts 3200 J of waste heat to the cooling condenser during each cycle. Calculate the net mechanical work produced by the engine.",
                    given: "Heat absorbed from hot reservoir \\( Q_h = 5000\\,\\mathrm{J} \\), Heat rejected to cold sink \\( Q_c = 3200\\,\\mathrm{J} \\).",
                    find: "Net mechanical work output (\\( W_M \\)) in \\( \\mathrm{J} \\) and \\( \\mathrm{kJ} \\).",
                    equation: "Q_h = W_M + Q_c \\iff W_M = Q_h - Q_c",
                    rearrangement: "W_M = Q_h - Q_c",
                    solution: "1. <strong>Formula:</strong> \\( W_M = Q_h - Q_c \\)<br>2. <strong>Substitution:</strong> \\( W_M = 5000\\,\\mathrm{J} - 3200\\,\\mathrm{J} \\)<br>3. <strong>Calculation:</strong> \\( W_M = 1800\\,\\mathrm{J} = 1.80\\,\\mathrm{kJ} \\).",
                    finalAnswer: "W_M = 1800\\,\\mathrm{J} \\; (1.80\\,\\mathrm{kJ})",
                    explanation: "By energy conservation, the mechanical work performed by a heat engine during a cycle equals the difference between the heat absorbed and the waste heat discharged."
                },
                {
                    title: "Example 2: Carnot Cycle Heat and Temperature Ratio",
                    question: "An ideal Carnot engine operates between a hot reservoir at Th = 500 K and a cold reservoir at Tc = 300 K. If the engine absorbs 4000 J of heat per cycle from the hot reservoir, determine the waste heat expelled to the cold reservoir.",
                    given: "Hot reservoir temperature \\( T_h = 500\\,\\mathrm{K} \\), Cold reservoir temperature \\( T_c = 300\\,\\mathrm{K} \\), Heat absorbed \\( Q_h = 4000\\,\\mathrm{J} \\).",
                    find: "Waste heat expelled (\\( Q_c \\)) in \\( \\mathrm{J} \\).",
                    equation: "\\frac{Q_c}{Q_h} = \\frac{T_c}{T_h}",
                    rearrangement: "Q_c = Q_h \\left(\\frac{T_c}{T_h}\\right)",
                    solution: "1. <strong>Rearranged Formula:</strong> \\( Q_c = Q_h \\left(\\frac{T_c}{T_h}\\right) \\)<br>2. <strong>Substitution:</strong> \\( Q_c = 4000\\,\\mathrm{J} \\times \\left(\\frac{300\\,\\mathrm{K}}{500\\,\\mathrm{K}}\\right) = 4000 \\times 0.60 \\)<br>3. <strong>Calculation:</strong> \\( Q_c = 2400\\,\\mathrm{J} \\).",
                    finalAnswer: "Q_c = 2400\\,\\mathrm{J} \\; (2.40\\,\\mathrm{kJ})",
                    explanation: "In a reversible Carnot cycle, the ratio of heat transferred to the two reservoirs equals the ratio of their absolute Kelvin temperatures."
                },
                {
                    title: "Example 3: Maximum Theoretical Carnot Efficiency",
                    question: "A proposed geothermal power plant utilizes steam at Th = 600 K (327°C) and river water for cooling at Tc = 300 K (27°C). Calculate the maximum possible thermal efficiency of any heat engine operating between these two temperatures.",
                    given: "Hot temperature \\( T_h = 600\\,\\mathrm{K} \\), Cold temperature \\( T_c = 300\\,\\mathrm{K} \\).",
                    find: "Carnot thermal efficiency (\\( e_c \\)) as a percentage.",
                    equation: "e_c = 1 - \\frac{T_c}{T_h}",
                    rearrangement: "e_c = 1 - \\frac{T_c}{T_h}",
                    solution: "1. <strong>Formula:</strong> \\( e_c = 1 - \\frac{T_c}{T_h} \\)<br>2. <strong>Substitution:</strong> \\( e_c = 1 - \\frac{300\\,\\mathrm{K}}{600\\,\\mathrm{K}} = 1 - 0.50 = 0.50 \\)<br>3. <strong>Percentage:</strong> \\( 0.50 \\times 100\\% = 50\\% \\).",
                    finalAnswer: "e_c = 50\\% \\; (0.50)",
                    explanation: "Carnot efficiency represents the absolute theoretical ceiling on efficiency set by the Second Law of Thermodynamics."
                },
                {
                    title: "Example 4: Combustion Chamber Thermal Efficiency",
                    question: "An automotive engine burns fuel releasing 80,000 J of thermal energy per cycle inside the cylinders. The expanding combustion gas produces 28,000 J of indicated mechanical work on the pistons. Determine the thermal efficiency of the combustion process.",
                    given: "Heat input from fuel \\( Q_h = 80{,}000\\,\\mathrm{J} \\), Indicated cylinder work \\( W_M = 28{,}000\\,\\mathrm{J} \\).",
                    find: "Thermal efficiency of combustion chamber (\\( e_c \\)) as a percentage.",
                    equation: "e_c = \\frac{W_M}{Q_h}",
                    rearrangement: "e_c = \\frac{W_M}{Q_h}",
                    solution: "1. <strong>Formula:</strong> \\( e_c = \\frac{W_M}{Q_h} \\)<br>2. <strong>Substitution:</strong> \\( e_c = \\frac{28{,}000\\,\\mathrm{J}}{80{,}000\\,\\mathrm{J}} = 0.35 \\)<br>3. <strong>Percentage:</strong> \\( 0.35 \\times 100\\% = 35\\% \\).",
                    finalAnswer: "e_c = 35\\% \\; (0.35)",
                    explanation: "Thermal efficiency measures how effectively chemical combustion energy is converted into mechanical work inside the cylinder."
                },
                {
                    title: "Example 5: Crankshaft Mechanical Efficiency and Friction Losses",
                    question: "The piston of an engine delivers gross indicated mechanical work WM = 2500 J to the connecting rod. Due to bearing friction and oil viscosity, 500 J is lost as friction heat (QL = 500 J). Calculate the useful brake work delivered to the crankshaft and the mechanical efficiency of the mechanism.",
                    given: "Indicated work \\( W_M = 2500\\,\\mathrm{J} \\), Frictional loss \\( Q_L = 500\\,\\mathrm{J} \\).",
                    find: "Useful brake work (\\( W_U \\)) and mechanical efficiency (\\( e_M \\)) as a percentage.",
                    equation: "W_M = W_U + Q_L \\iff W_U = W_M - Q_L, \\quad e_M = \\frac{W_U}{W_M}",
                    rearrangement: "W_U = W_M - Q_L, \\quad e_M = \\frac{W_U}{W_M}",
                    solution: "1. <strong>Useful Work Output:</strong><br>\\[ W_U = W_M - Q_L = 2500\\,\\mathrm{J} - 500\\,\\mathrm{J} = 2000\\,\\mathrm{J} \\]<br>2. <strong>Mechanical Efficiency:</strong><br>\\[ e_M = \\frac{W_U}{W_M} = \\frac{2000\\,\\mathrm{J}}{2500\\,\\mathrm{J}} = 0.80 = 80\\% \\]",
                    finalAnswer: "W_U = 2000\\,\\mathrm{J} \\; (2.0\\,\\mathrm{kJ}), \\quad e_M = 80\\%",
                    explanation: "Mechanical efficiency measures the proportion of piston work transmitted to the driveshaft without being dissipated by mechanical friction."
                },
                {
                    title: "Example 6: Overall Engine Efficiency",
                    question: "An internal combustion engine operates with a cylinder thermal efficiency ec = 35% (0.35) and a drivetrain mechanical efficiency eM = 80% (0.80). Calculate the overall brake efficiency of the engine and the useful work output obtained from 100,000 J of fuel heat.",
                    given: "Thermal efficiency \\( e_c = 0.35 \\), Mechanical efficiency \\( e_M = 0.80 \\), Fuel heat input \\( Q_h = 100{,}000\\,\\mathrm{J} \\).",
                    find: "Overall efficiency (\\( e \\)) and useful work output (\\( W_U \\)) in \\( \\mathrm{kJ} \\).",
                    equation: "e = e_c \\times e_M = \\frac{W_U}{Q_h}",
                    rearrangement: "e = e_c \\times e_M, \\quad W_U = e \\times Q_h",
                    solution: "1. <strong>Overall Efficiency:</strong><br>\\[ e = e_c \\times e_M = 0.35 \\times 0.80 = 0.28 = 28\\% \\]<br>2. <strong>Useful Work Output:</strong><br>\\[ W_U = e \\times Q_h = 0.28 \\times 100{,}000\\,\\mathrm{J} = 28{,}000\\,\\mathrm{J} = 28\\,\\mathrm{kJ} \\]",
                    finalAnswer: "e = 28\\% \\; (0.28), \\quad W_U = 28\\,\\mathrm{kJ} \\; (28{,}000\\,\\mathrm{J})",
                    explanation: "Overall efficiency combines thermodynamic cycle losses with mechanical frictional losses to determine total delivered shaft power per unit fuel energy."
                }
            ],
            equations: [
                {
                    section: "Heat Engine Principles",
                    name: "Conservation of Energy in Heat Engine",
                    formula: "\\[ Q_h = W_M + Q_c \\iff W_M = Q_h - Q_c \\]",
                    figure: { img: "image_G12_one/ch1-l3-eq1.png", title: "Heat Engine Energy Balance", caption: "Partitioning of input heat into mechanical work and rejected waste heat." },
                    pdfPage: "PDF Page 12 & 13",
                    explanation: "Heat absorbed from the hot reservoir Q_h is partitioned into gross mechanical work W_M and waste heat Q_c rejected to the cold reservoir.",
                    conditions: "Cyclic heat engine.",
                    variables: [
                        { symbol: "Q_h", rep: "Heat absorbed from hot reservoir", unit: "Joule", unitSym: "\\mathrm{J}" },
                        { symbol: "W_M", rep: "Mechanical work generated by engine", unit: "Joule", unitSym: "\\mathrm{J}" },
                        { symbol: "Q_c", rep: "Heat rejected to cold reservoir", unit: "Joule", unitSym: "\\mathrm{J}" }
                    ]
                },
                {
                    section: "Heat Engine Principles",
                    name: "Carnot Heat and Temperature Ratio",
                    formula: "\\[ \\frac{Q_c}{Q_h} = \\frac{T_c}{T_h} \\]",
                    figure: { img: "image_G12_one/ch1-l3-eq2.png", title: "Carnot Heat & Temperature Ratio", caption: "Proportionality of reservoir heat exchanges to Kelvin temperatures." },
                    pdfPage: "PDF Page 12",
                    explanation: "In an ideal reversible Carnot cycle, the ratio of heat exchange with reservoirs equals the ratio of their absolute temperatures in Kelvin.",
                    conditions: "Ideal reversible Carnot engine.",
                    variables: [
                        { symbol: "Q_c", rep: "Heat rejected to cold sink", unit: "Joule", unitSym: "\\mathrm{J}" },
                        { symbol: "Q_h", rep: "Heat absorbed from hot source", unit: "Joule", unitSym: "\\mathrm{J}" },
                        { symbol: "T_c", rep: "Absolute temperature of cold reservoir", unit: "Kelvin", unitSym: "\\mathrm{K}" },
                        { symbol: "T_h", rep: "Absolute temperature of hot reservoir", unit: "Kelvin", unitSym: "\\mathrm{K}" }
                    ]
                },
                {
                    section: "Heat Engine Principles",
                    name: "Carnot (Ideal Maximum) Efficiency",
                    formula: "\\[ e_c = \\frac{W_M}{Q_h} = 1 - \\frac{Q_c}{Q_h} = 1 - \\frac{T_c}{T_h} \\]",
                    figure: { img: "image_G12_one/ch1-l3-eq3.png", title: "Carnot Maximum Efficiency", caption: "Theoretical upper limit of thermodynamic efficiency." },
                    pdfPage: "PDF Page 12 & 13",
                    explanation: "Upper thermodynamic limit of efficiency achievable by any heat engine operating between temperatures T_h and T_c.",
                    conditions: "Reversible thermodynamic Carnot cycle.",
                    variables: [
                        { symbol: "e_c", rep: "Carnot thermal efficiency", unit: "Dimensionless ratio", unitSym: "\\text{No SI unit (or \\%)}" },
                        { symbol: "W_M", rep: "Mechanical work output", unit: "Joule", unitSym: "\\mathrm{J}" },
                        { symbol: "Q_h", rep: "Input heat from hot reservoir", unit: "Joule", unitSym: "\\mathrm{J}" },
                        { symbol: "Q_c", rep: "Rejected waste heat", unit: "Joule", unitSym: "\\mathrm{J}" },
                        { symbol: "T_c", rep: "Cold reservoir temperature", unit: "Kelvin", unitSym: "\\mathrm{K}" },
                        { symbol: "T_h", rep: "Hot reservoir temperature", unit: "Kelvin", unitSym: "\\mathrm{K}" }
                    ]
                },
                {
                    section: "Actual Engine Efficiencies",
                    name: "Combustion Chamber Thermal Efficiency",
                    formula: "\\[ e_c = \\frac{W_M}{Q_h} \\]",
                    figure: { img: "image_G12_one/ch1-l3-eq4.png", title: "Combustion Chamber Thermal Efficiency", caption: "Conversion efficiency of fuel combustion energy into indicated work." },
                    pdfPage: "PDF Page 12 & 13",
                    explanation: "Fraction of fuel combustion heat Q_h converted into indicated mechanical work W_M inside the cylinder chamber.",
                    conditions: "Actual internal/external combustion engine.",
                    variables: [
                        { symbol: "e_c", rep: "Thermal efficiency of combustion chamber", unit: "Dimensionless ratio", unitSym: "\\text{No SI unit}" },
                        { symbol: "W_M", rep: "Indicated mechanical work from combustion", unit: "Joule", unitSym: "\\mathrm{J}" },
                        { symbol: "Q_h", rep: "Heat absorbed from fuel combustion", unit: "Joule", unitSym: "\\mathrm{J}" }
                    ]
                },
                {
                    section: "Actual Engine Efficiencies",
                    name: "Crankshaft Energy Balance & Mechanical Efficiency",
                    formula: "\\[ W_M = W_U + Q_L \\iff e_M = \\frac{W_U}{W_M} \\]",
                    pdfPage: "PDF Page 12 & 13",
                    explanation: "Mechanical work delivered to crankshaft is reduced by bearing friction and heat losses Q_L, delivering net useful shaft work W_U.",
                    conditions: "Mechanical transmission in engines.",
                    variables: [
                        { symbol: "W_M", rep: "Gross mechanical work input to crankshaft", unit: "Joule", unitSym: "\\mathrm{J}" },
                        { symbol: "W_U", rep: "Useful brake work output at crankshaft", unit: "Joule", unitSym: "\\mathrm{J}" },
                        { symbol: "Q_L", rep: "Frictional/thermal loss in crankshaft mechanism", unit: "Joule", unitSym: "\\mathrm{J}" },
                        { symbol: "e_M", rep: "Mechanical efficiency of engine", unit: "Dimensionless ratio", unitSym: "\\text{No SI unit}" }
                    ]
                },
                {
                    section: "Actual Engine Efficiencies",
                    name: "Overall Total Engine Efficiency",
                    formula: "\\[ e = e_c \\times e_M = \\frac{W_U}{Q_h} \\]",
                    pdfPage: "PDF Page 12 & 13",
                    explanation: "The combined brake efficiency of the entire engine system, calculated as the product of thermal and mechanical efficiencies.",
                    conditions: "Overall performance of gasoline and diesel engines.",
                    variables: [
                        { symbol: "e", rep: "Overall engine efficiency", unit: "Dimensionless ratio", unitSym: "\\text{No SI unit}" },
                        { symbol: "e_c", rep: "Combustion chamber thermal efficiency", unit: "Dimensionless ratio", unitSym: "\\text{No SI unit}" },
                        { symbol: "e_M", rep: "Crankshaft mechanical efficiency", unit: "Dimensionless ratio", unitSym: "\\text{No SI unit}" },
                        { symbol: "W_U", rep: "Net useful brake work output", unit: "Joule", unitSym: "\\mathrm{J}" },
                        { symbol: "Q_h", rep: "Total heat input from combustion", unit: "Joule", unitSym: "\\mathrm{J}" }
                    ]
                }
            ],
            flashcards: [
                { front: "What is the Carnot efficiency formula?", back: "\\( e_c = 1 - \\frac{T_c}{T_h} = \\frac{W_M}{Q_h} \\)" },
                { front: "What is the energy balance for a heat engine?", back: "\\( Q_h = W_M + Q_c \\iff W_M = Q_h - Q_c \\)" },
                { front: "How is overall engine efficiency calculated?", back: "\\( e = e_c \\times e_M = \\frac{W_U}{Q_h} \\)" }
            ],
            quiz: [
                { question: "A heat engine absorbs 2000 J and rejects 1200 J of heat. What is its thermal efficiency?", options: ["40%", "60%", "80%", "20%"], correctIndex: 0, feedback: "e = (2000 - 1200) / 2000 = 800 / 2000 = 0.40 = 40%." },
                { question: "The maximum theoretical efficiency of a heat engine depends exclusively on:", options: ["Working fluid type", "Engine cylinder size", "Reservoir temperatures in Kelvin", "Fuel octane rating"], correctIndex: 2, feedback: "Carnot efficiency depends strictly on Th and Tc in Kelvin." }
            ]
        },

        // =====================================================================
        // CHAPTER 2 LESSON 1: Superposition & Standing Waves (PDF Page 14)
        // =====================================================================
        {
            id: "g12-l4",
            gifUrl: "",
            worksheetUrl: "worksheets/ch2-l1-worksheet.pdf",
            ebookUrl: "ebooks/g12-ch2-l1-ebook.pdf.pdf",
            ebooks: [
                { title: "Superposition & Standing Waves (pp. 49–63)", url: "ebooks/g12-ch2-l1-ebook.pdf.pdf", altUrl: "ebooks/g12-ch2-l1-ebook.pdf" }
            ],
            games: [
                { topic: "Mechanical Waves", url: "https://gemini.google.com/share/2e83761df9b7" },
                { topic: "Standing Waves & Harmonics", url: "https://gemini.google.com/share/2e83761df9b7" }
            ],
            title: "Chapter 2 Lesson 1: Superposition and Standing Waves",
            concepts: [
                "Sinusoidal Wave: Wave possessing constant amplitude and period: \\( y = a\\sin(\\omega t + \\phi) \\).",
                "Traveling Waves: Right-propagating \\( y = a\\sin(\\omega t - kx) \\) and left-propagating \\( y = a\\sin(\\omega t + kx) \\).",
                "Kinematic Relations: Wave speed \\( v = \\frac{x}{t} = \\frac{\\lambda}{T} = \\lambda f = \\frac{\\omega}{k} \\), \\( \\omega = \\frac{2\\pi}{T} \\), \\( k = \\frac{2\\pi}{\\lambda} \\).",
                "Superposition Principle: Method 1 (Trigonometric for identical amplitudes): \\( y = 2a\\cos\\left(\\frac{\\phi_1-\\phi_2}{2}\\right)\\sin\\left(\\omega t + \\frac{\\phi_1+\\phi_2}{2}\\right) \\); Method 2 (Phasor Vector method).",
                "Standing Wave Formation: Produced by counter-propagating waves in a medium: \\( y = 2a\\sin(kx)\\cos(\\omega t) \\) with amplitude \\( A = 2a|\\sin(kx)| \\).",
                "Nodes & Antinodes: Nodes (zero amplitude) at \\( x = n\\frac{\\lambda}{2} \\); Antinodes (peak amplitude 2a) at \\( x = (2n+1)\\frac{\\lambda}{4} \\)."
            ],
            definitions: [
                { term: "Sinusoidal Wave", definition: "A smooth periodic wave disturbance characterized by constant amplitude, wavelength, and frequency.", symbol: "y(t)", unit: "\\mathrm{m}", equation: "y = a\\sin(\\omega t + \\phi)" },
                { term: "Principle of Superposition", definition: "When two or more waves traverse the same medium, the net displacement is the algebraic sum of individual wave displacements.", symbol: "y = y_1 + y_2", unit: "\\mathrm{m}", equation: "y = y_1 + y_2" },
                { term: "Standing Wave", definition: "A stationary interference pattern generated by the superposition of two identical waves traveling in opposite directions.", symbol: "\\text{Standing Wave}", unit: "\\mathrm{m}", equation: "y = 2a\\sin(kx)\\cos(\\omega t)" },
                { term: "Node", definition: "A point along a standing wave with permanently zero vibrational amplitude.", symbol: "A = 0", unit: "\\mathrm{m}", equation: "x = n\\frac{\\lambda}{2} \\quad (n = 0, 1, 2, \\dots)" },
                { term: "Antinode", definition: "A point along a standing wave experiencing maximum vibrational amplitude 2a.", symbol: "A = 2a", unit: "\\mathrm{m}", equation: "x = (2n + 1)\\frac{\\lambda}{4} \\quad (n = 0, 1, 2, \\dots)" }
            ],
            examples: [
                {
                    title: "Example 1: Harmonic Oscillation of a Medium Particle",
                    question: "A particle in an elastic string oscillates in simple harmonic motion according to y(t) = 0.05 sin(40π t + π/3) where y is in meters and t in seconds. Determine the amplitude, angular frequency, oscillation frequency, period, and initial phase.",
                    given: "Harmonic equation \\( y(t) = 0.05\\sin(40\\pi t + \\pi/3) \\).",
                    find: "Amplitude (\\( a \\)), angular frequency (\\( \\omega \\)), frequency (\\( f \\)), period (\\( T \\)), and phase constant (\\( \\phi \\)).",
                    equation: "y = a\\sin(\\omega t + \\phi), \\quad f = \\frac{\\omega}{2\\pi}, \\quad T = \\frac{1}{f}",
                    rearrangement: "\\omega = 2\\pi f \\implies f = \\frac{\\omega}{2\\pi}, \\quad T = \\frac{2\\pi}{\\omega}",
                    solution: "1. <strong>Amplitude:</strong> \\( a = 0.05\\,\\mathrm{m} = 5.0\\,\\mathrm{cm} \\).<br>2. <strong>Angular Frequency:</strong> \\( \\omega = 40\\pi\\,\\mathrm{rad/s} \\approx 125.7\\,\\mathrm{rad/s} \\).<br>3. <strong>Frequency:</strong> \\( f = \\frac{40\\pi}{2\\pi} = 20\\,\\mathrm{Hz} \\).<br>4. <strong>Period:</strong> \\( T = \\frac{1}{20} = 0.050\\,\\mathrm{s} \\).<br>5. <strong>Initial Phase:</strong> \\( \\phi = \\frac{\\pi}{3}\\,\\mathrm{rad} = 60^\\circ \\).",
                    finalAnswer: "a = 0.05\\,\\mathrm{m}, \\; \\omega = 40\\pi\\,\\mathrm{rad/s}, \\; f = 20\\,\\mathrm{Hz}, \\; T = 0.050\\,\\mathrm{s}, \\; \\phi = \\pi/3\\,\\mathrm{rad}",
                    explanation: "Direct matching against the standard harmonic equation reveals all periodic motion parameters of a point in the wave medium."
                },
                {
                    title: "Example 2: Traveling Wave Parameters and Direction",
                    question: "A sinusoidal transverse wave traveling along a taut string has the equation y(x, t) = 0.06 sin(50π t - 2.5π x), with x and y in meters and t in seconds. Identify the direction of wave travel and calculate the wave number, angular frequency, and propagation speed.",
                    given: "Wave equation \\( y(x, t) = 0.06\\sin(50\\pi t - 2.5\\pi x) \\).",
                    find: "Propagation direction, wave number (\\( k \\)), angular frequency (\\( \\omega \\)), and wave speed (\\( v \\)) in \\( \\mathrm{m/s} \\).",
                    equation: "y = a\\sin(\\omega t - kx), \\quad v = \\frac{\\omega}{k}",
                    rearrangement: "v = \\frac{\\omega}{k}",
                    solution: "1. <strong>Direction of Propagation:</strong> The minus sign between \\( \\omega t \\) and \\( kx \\) indicates propagation in the positive x-direction (to the right).<br>2. <strong>Wave Number:</strong> \\( k = 2.5\\pi\\,\\mathrm{rad/m} \\approx 7.85\\,\\mathrm{rad/m} \\).<br>3. <strong>Angular Frequency:</strong> \\( \\omega = 50\\pi\\,\\mathrm{rad/s} \\approx 157.1\\,\\mathrm{rad/s} \\).<br>4. <strong>Propagation Speed:</strong><br>\\[ v = \\frac{\\omega}{k} = \\frac{50\\pi\\,\\mathrm{rad/s}}{2.5\\pi\\,\\mathrm{rad/m}} = 20.0\\,\\mathrm{m/s} \\]",
                    finalAnswer: "\\text{Direction: Right (+x)}, \\quad k = 2.5\\pi\\,\\mathrm{rad/m}, \\quad \\omega = 50\\pi\\,\\mathrm{rad/s}, \\quad v = 20.0\\,\\mathrm{m/s}",
                    explanation: "A wave term of the form (ωt - kx) represents an unattenuated wave traveling in the positive x-direction at speed v = ω/k."
                },
                {
                    title: "Example 3: Kinematic Wave Speed, Frequency, and Wavelength",
                    question: "A ripple tank wave generator vibrates at a frequency of 50 Hz, producing surface waves with a wavelength of 0.080 m (8.0 cm). Calculate the wave speed, period, angular frequency, and wave number.",
                    given: "Frequency \\( f = 50\\,\\mathrm{Hz} \\), Wavelength \\( \\lambda = 0.080\\,\\mathrm{m} \\).",
                    find: "Wave speed (\\( v \\)), period (\\( T \\)), angular frequency (\\( \\omega \\)), and wave number (\\( k \\)).",
                    equation: "v = \\lambda f = \\frac{\\omega}{k}, \\quad T = \\frac{1}{f}, \\quad \\omega = 2\\pi f, \\quad k = \\frac{2\\pi}{\\lambda}",
                    rearrangement: "v = \\lambda f, \\quad \\omega = 2\\pi f, \\quad k = \\frac{2\\pi}{\\lambda}",
                    solution: "1. <strong>Wave Speed:</strong> \\( v = \\lambda f = (0.080\\,\\mathrm{m})(50\\,\\mathrm{Hz}) = 4.0\\,\\mathrm{m/s} \\).<br>2. <strong>Period:</strong> \\( T = \\frac{1}{f} = \\frac{1}{50} = 0.020\\,\\mathrm{s} \\).<br>3. <strong>Angular Frequency:</strong> \\( \\omega = 2\\pi f = 2\\pi(50) = 100\\pi\\,\\mathrm{rad/s} \\approx 314\\,\\mathrm{rad/s} \\).<br>4. <strong>Wave Number:</strong> \\( k = \\frac{2\\pi}{\\lambda} = \\frac{2\\pi}{0.080} = 25\\pi\\,\\mathrm{rad/m} \\approx 78.5\\,\\mathrm{rad/m} \\).",
                    finalAnswer: "v = 4.0\\,\\mathrm{m/s}, \\quad T = 0.020\\,\\mathrm{s}, \\quad \\omega = 100\\pi\\,\\mathrm{rad/s}, \\quad k = 25\\pi\\,\\mathrm{rad/m}",
                    explanation: "These kinematic relationships connect spatial periodicity (wavelength, wave number) with temporal periodicity (period, frequency)."
                },
                {
                    title: "Example 4: Superposition of Two Equal-Amplitude Waves",
                    question: "Two coherent wave sources produce identical waves of amplitude a = 3.0 cm and identical frequency, with phase angles φ₁ = 0 and φ₂ = π/3 rad (60°). Find the amplitude and phase angle of the resultant wave disturbance.",
                    given: "Individual amplitude \\( a = 3.0\\,\\mathrm{cm} = 0.030\\,\\mathrm{m} \\), Phase angles \\( \\phi_1 = 0 \\), \\( \\phi_2 = \\pi/3\\,\\mathrm{rad} \\).",
                    find: "Resultant wave amplitude (\\( A_{\\text{res}} \\)) and phase angle (\\( \\phi_{\\text{res}} \\)).",
                    equation: "y = 2a\\cos\\left(\\frac{\\phi_1 - \\phi_2}{2}\\right)\\sin\\left(\\omega t + \\frac{\\phi_1 + \\phi_2}{2}\\right)",
                    rearrangement: "A_{\\text{res}} = 2a\\left|\\cos\\left(\\frac{\\Delta\\phi}{2}\\right)\\right|, \\quad \\phi_{\\text{res}} = \\frac{\\phi_1 + \\phi_2}{2}",
                    solution: "1. <strong>Phase Difference:</strong> \\( \\Delta\\phi = \\phi_1 - \\phi_2 = -\\pi/3 \\implies \\frac{\\Delta\\phi}{2} = -\\pi/6 \\; (-30^\\circ) \\).<br>2. <strong>Resultant Amplitude:</strong><br>\\[ A_{\\text{res}} = 2(3.0\\,\\mathrm{cm})\\cos(-30^\\circ) = 6.0 \\times \\frac{\\sqrt{3}}{2} = 3\\sqrt{3} \\approx 5.20\\,\\mathrm{cm} \\]<br>3. <strong>Resultant Phase:</strong> \\( \\phi_{\\text{res}} = \\frac{0 + \\pi/3}{2} = \\frac{\\pi}{6}\\,\\mathrm{rad} \\; (30^\\circ) \\).",
                    finalAnswer: "A_{\\text{res}} \\approx 5.20\\,\\mathrm{cm}, \\quad \\phi_{\\text{res}} = \\pi/6\\,\\mathrm{rad} \\; (30^\\circ)",
                    explanation: "Because the waves are not fully in phase (phase difference 60°), interference is constructive but yields less than the maximum possible amplitude of 2a = 6.0 cm."
                },
                {
                    title: "Example 5: Phasor Vector Addition of Wave Disturbances",
                    question: "Two harmonic waves superpose at a point: y₁(t) = 4.0 sin(ωt) and y₂(t) = 3.0 sin(ωt + π/2). Use the phasor vector addition method to determine the resultant amplitude and phase angle.",
                    given: "Component 1: \\( a_1 = 4.0\\,\\mathrm{cm} \\), \\( \\phi_1 = 0 \\). Component 2: \\( a_2 = 3.0\\,\\mathrm{cm} \\), \\( \\phi_2 = \\pi/2\\,\\mathrm{rad} \\; (90^\\circ) \\).",
                    find: "Resultant amplitude (\\( a \\)) and phase angle (\\( \\phi \\)).",
                    equation: "a = \\sqrt{a_x^2 + a_y^2}, \\quad a_x = \\sum a_i\\cos\\phi_i, \\quad a_y = \\sum a_i\\sin\\phi_i, \\quad \\tan\\phi = \\frac{a_y}{a_x}",
                    rearrangement: "a_x = a_1\\cos\\phi_1 + a_2\\cos\\phi_2, \\quad a_y = a_1\\sin\\phi_1 + a_2\\sin\\phi_2",
                    solution: "1. <strong>Horizontal Component:</strong> \\( a_x = 4.0\\cos(0) + 3.0\\cos(90^\\circ) = 4.0(1) + 3.0(0) = 4.0\\,\\mathrm{cm} \\).<br>2. <strong>Vertical Component:</strong> \\( a_y = 4.0\\sin(0) + 3.0\\sin(90^\\circ) = 4.0(0) + 3.0(1) = 3.0\\,\\mathrm{cm} \\).<br>3. <strong>Resultant Amplitude:</strong><br>\\[ a = \\sqrt{a_x^2 + a_y^2} = \\sqrt{4.0^2 + 3.0^2} = \\sqrt{16 + 9} = \\sqrt{25} = 5.0\\,\\mathrm{cm} \\]<br>4. <strong>Phase Angle:</strong> \\( \\tan\\phi = \\frac{a_y}{a_x} = \\frac{3.0}{4.0} = 0.75 \\implies \\phi = \\tan^{-1}(0.75) \\approx 36.87^\\circ \\; (0.644\\,\\mathrm{rad}) \\).",
                    finalAnswer: "a = 5.0\\,\\mathrm{cm}, \\quad \\phi \\approx 36.9^\\circ \\; (0.644\\,\\mathrm{rad})",
                    explanation: "When waves are perpendicular in phase (90° apart), their phasor amplitudes add orthogonally by the Pythagorean theorem."
                },
                {
                    title: "Example 6: Amplitude Profile of a Standing Wave (A(x) = 2a |sin(kx)|)",
                    question: "A standing wave on a string has individual component wave amplitudes a = 0.020 m and wavelength λ = 0.60 m. Calculate the standing wave's vibrational amplitude at position x = 0.050 m from a fixed node at the origin.",
                    given: "Component amplitude \\( a = 0.020\\,\\mathrm{m} \\), Wavelength \\( \\lambda = 0.60\\,\\mathrm{m} \\), Position \\( x = 0.050\\,\\mathrm{m} \\).",
                    find: "Vibrational amplitude (\\( A(x) \\)) at \\( x = 0.050\\,\\mathrm{m} \\).",
                    equation: "A(x) = 2a|\\sin(kx)|, \\quad k = \\frac{2\\pi}{\\lambda}",
                    rearrangement: "k = \\frac{2\\pi}{\\lambda} \\implies kx = \\frac{2\\pi x}{\\lambda}",
                    solution: "1. <strong>Phase Argument kx:</strong><br>\\[ kx = \\frac{2\\pi(0.050\\,\\mathrm{m})}{0.60\\,\\mathrm{m}} = \\frac{0.10\\pi}{0.60} = \\frac{\\pi}{6}\\,\\mathrm{rad} = 30^\\circ \\]<br>2. <strong>Sine Value:</strong> \\( \\sin(30^\\circ) = 0.50 \\).<br>3. <strong>Amplitude Calculation:</strong><br>\\[ A(0.050\\,\\mathrm{m}) = 2(0.020\\,\\mathrm{m})|\\sin(30^\\circ)| = 0.040 \\times 0.50 = 0.020\\,\\mathrm{m} = 2.0\\,\\mathrm{cm} \\]",
                    finalAnswer: "A(0.050\\,\\mathrm{m}) = 0.020\\,\\mathrm{m} = 2.0\\,\\mathrm{cm}",
                    explanation: "Unlike traveling waves where every point reaches peak amplitude 2a, a standing wave's amplitude is locked in place as a function of position: A(x) = 2a|sin(kx)|."
                },
                {
                    title: "Example 7: Stationary Node Positions on a Vibrating String",
                    question: "A standing wave is established on a string with wavelength λ = 0.40 m and a fixed node at x = 0 m. Determine the positions of the first four consecutive nodes (x₀, x₁, x₂, x₃).",
                    given: "Wavelength \\( \\lambda = 0.40\\,\\mathrm{m} \\), Node condition \\( x_n = n\\frac{\\lambda}{2} \\) for \\( n = 0, 1, 2, 3 \\).",
                    find: "Node positions (\\( x_0, x_1, x_2, x_3 \\)) in \\( \\mathrm{m} \\).",
                    equation: "x_n = n\\frac{\\lambda}{2} \\quad (n = 0, 1, 2, \\dots)",
                    rearrangement: "x_n = n \\left(\\frac{0.40\\,\\mathrm{m}}{2}\\right) = n(0.20\\,\\mathrm{m})",
                    solution: "1. <strong>Node 0 (n = 0):</strong> \\( x_0 = 0 \\times 0.20\\,\\mathrm{m} = 0.00\\,\\mathrm{m} \\).<br>2. <strong>Node 1 (n = 1):</strong> \\( x_1 = 1 \\times 0.20\\,\\mathrm{m} = 0.20\\,\\mathrm{m} \\).<br>3. <strong>Node 2 (n = 2):</strong> \\( x_2 = 2 \\times 0.20\\,\\mathrm{m} = 0.40\\,\\mathrm{m} \\).<br>4. <strong>Node 3 (n = 3):</strong> \\( x_3 = 3 \\times 0.20\\,\\mathrm{m} = 0.60\\,\\mathrm{m} \\).",
                    finalAnswer: "x_0 = 0\\,\\mathrm{m}, \\quad x_1 = 0.20\\,\\mathrm{m}, \\quad x_2 = 0.40\\,\\mathrm{m}, \\quad x_3 = 0.60\\,\\mathrm{m}",
                    explanation: "Nodes are points of zero motion separated by exactly half a wavelength (λ/2) along the standing wave."
                },
                {
                    title: "Example 8: Antinode Positions and Peak Vibrational Amplitude",
                    question: "For a standing wave with component wave amplitude a = 0.035 m and wavelength λ = 0.40 m, find the peak vibration amplitude at the antinodes and the coordinates of the first three antinodes (x₀, x₁, x₂).",
                    given: "Component amplitude \\( a = 0.035\\,\\mathrm{m} \\), Wavelength \\( \\lambda = 0.40\\,\\mathrm{m} \\), Antinode formula \\( x_n = (2n + 1)\\frac{\\lambda}{4} \\).",
                    find: "Maximum antinode amplitude (\\( A_{\\max} \\)) and positions (\\( x_0, x_1, x_2 \\)) in \\( \\mathrm{m} \\).",
                    equation: "A_{\\max} = 2a, \\quad x_n = (2n + 1)\\frac{\\lambda}{4} \\quad (n = 0, 1, 2, \\dots)",
                    rearrangement: "x_n = (2n + 1)(0.10\\,\\mathrm{m})",
                    solution: "1. <strong>Maximum Amplitude:</strong> \\( A_{\\max} = 2a = 2(0.035\\,\\mathrm{m}) = 0.070\\,\\mathrm{m} = 7.0\\,\\mathrm{cm} \\).<br>2. <strong>Antinode 0 (n = 0):</strong> \\( x_0 = (2(0) + 1)(0.10\\,\\mathrm{m}) = 0.10\\,\\mathrm{m} \\).<br>3. <strong>Antinode 1 (n = 1):</strong> \\( x_1 = (2(1) + 1)(0.10\\,\\mathrm{m}) = 0.30\\,\\mathrm{m} \\).<br>4. <strong>Antinode 2 (n = 2):</strong> \\( x_2 = (2(2) + 1)(0.10\\,\\mathrm{m}) = 0.50\\,\\mathrm{m} \\).",
                    finalAnswer: "A_{\\max} = 0.070\\,\\mathrm{m} \\; (7.0\\,\\mathrm{cm}), \\quad x_0 = 0.10\\,\\mathrm{m}, \\; x_1 = 0.30\\,\\mathrm{m}, \\; x_2 = 0.50\\,\\mathrm{m}",
                    explanation: "Antinodes occur exactly halfway between adjacent nodes where constructive interference doubles the amplitude to 2a."
                }
            ],
            equations: [
                {
                    section: "Traveling Wave Kinematics",
                    name: "Sinusoidal Harmonic Wave Equation",
                    formula: "\\[ y = a\\sin(\\omega t + \\phi) \\]",
                    figure: { img: "image_G12_one/ch2-l1-eq1.png", title: "Sinusoidal Wave Equation", caption: "Harmonic displacement at a fixed position." },
                    pdfPage: "PDF Page 14",
                    explanation: "Simple harmonic transverse displacement at a fixed position having constant amplitude a, angular frequency ω, and phase angle φ.",
                    conditions: "Harmonic oscillation in linear medium.",
                    variables: [
                        { symbol: "y", rep: "Instantaneous transverse displacement", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "a", rep: "Wave amplitude", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "\\omega", rep: "Angular frequency", unit: "Radian per second", unitSym: "\\mathrm{rad/s}" },
                        { symbol: "t", rep: "Elapsed time", unit: "Second", unitSym: "\\mathrm{s}" },
                        { symbol: "\\phi", rep: "Initial phase angle", unit: "Radian", unitSym: "\\mathrm{rad}" }
                    ]
                },
                {
                    section: "Traveling Wave Kinematics",
                    name: "Traveling Wave Equations (Left & Right Propagation)",
                    formula: "\\[ y = a\\sin(\\omega t \\mp kx) \\quad \\text{or} \\quad y = a\\sin(kx \\mp \\omega t) \\]",
                    figure: { img: "image_G12_one/ch2-l1-eq2.png", title: "Traveling Wave Equation", caption: "Right (-kx) and left (+kx) propagation." },
                    pdfPage: "PDF Page 14",
                    explanation: "Mathematical expression for a traveling wave propagating toward the right (- sign) or toward the left (+ sign).",
                    conditions: "Uniform non-dispersive medium.",
                    variables: [
                        { symbol: "y", rep: "Transverse displacement at position x and time t", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "a", rep: "Peak wave amplitude", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "\\omega", rep: "Angular frequency (\\(2\\pi/T\\))", unit: "Radian per second", unitSym: "\\mathrm{rad/s}" },
                        { symbol: "k", rep: "Wave number (\\(2\\pi/\\lambda\\))", unit: "Radian per meter", unitSym: "\\mathrm{rad/m}" },
                        { symbol: "x", rep: "Spatial coordinate along path", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "t", rep: "Time coordinate", unit: "Second", unitSym: "\\mathrm{s}" }
                    ]
                },
                {
                    section: "Traveling Wave Kinematics",
                    name: "Wave Speed, Angular Frequency & Wave Number",
                    formula: "\\[ v = \\frac{x}{t} = \\frac{\\lambda}{T} = \\lambda f = \\frac{\\omega}{k}, \\quad \\omega = \\frac{2\\pi}{T} = 2\\pi f, \\quad k = \\frac{2\\pi}{\\lambda}, \\quad T = \\frac{1}{f} \\]",
                    figure: { img: "image_G12_one/ch2-l1-eq3.png", title: "Wave Kinematic Relations", caption: "Velocity, wavelength, frequency, and wave number." },
                    pdfPage: "PDF Page 14",
                    explanation: "Fundamental kinematic relations connecting wave propagation speed with period, frequency, wavelength, and wave number.",
                    conditions: "Linear harmonic wave.",
                    variables: [
                        { symbol: "v", rep: "Wave phase velocity", unit: "Meter per second", unitSym: "\\mathrm{m/s}" },
                        { symbol: "\\lambda", rep: "Wavelength", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "T", rep: "Wave period", unit: "Second", unitSym: "\\mathrm{s}" },
                        { symbol: "f", rep: "Wave frequency", unit: "Hertz", unitSym: "\\mathrm{Hz} \\; (\\mathrm{s^{-1}})" },
                        { symbol: "\\omega", rep: "Angular frequency", unit: "Radian per second", unitSym: "\\mathrm{rad/s}" },
                        { symbol: "k", rep: "Wave number", unit: "Radian per meter", unitSym: "\\mathrm{rad/m}" }
                    ]
                },
                {
                    section: "Superposition of Waves",
                    name: "Superposition of Two Waves with Equal Amplitude",
                    formula: "\\[ y = y_1 + y_2 = 2a\\cos\\left(\\frac{\\phi_1 - \\phi_2}{2}\\right)\\sin\\left(\\omega t + \\frac{\\phi_1 + \\phi_2}{2}\\right) \\]",
                    pdfPage: "PDF Page 14",
                    explanation: "Resultant interference displacement when two waves of identical frequency and equal amplitude superpose.",
                    conditions: "Equal amplitude a₁ = a₂ = a, identical angular frequency ω.",
                    variables: [
                        { symbol: "y", rep: "Resultant wave displacement", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "y_1, y_2", rep: "Individual wave displacements", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "a", rep: "Amplitude of each component wave", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "\\phi_1, \\phi_2", rep: "Phase angles of the two waves", unit: "Radian", unitSym: "\\mathrm{rad}" },
                        { symbol: "\\omega", rep: "Angular frequency", unit: "Radian per second", unitSym: "\\mathrm{rad/s}" },
                        { symbol: "t", rep: "Time", unit: "Second", unitSym: "\\mathrm{s}" }
                    ]
                },
                {
                    section: "Superposition of Waves",
                    name: "Superposition via Phasor Vector Method",
                    formula: "\\[ y = a\\sin(\\omega t + \\phi), \\quad a = \\sqrt{a_x^2 + a_y^2}, \\quad a_x = \\sum a_i\\cos\\phi_i, \\quad a_y = \\sum a_i\\sin\\phi_i, \\quad \\tan\\theta = \\left|\\frac{a_y}{a_x}\\right| \\]",
                    pdfPage: "PDF Page 14",
                    explanation: "Analytical vector addition of rotating phasors in the complex plane to determine resultant amplitude and phase.",
                    conditions: "Superposition of arbitrary number of harmonic waves of same frequency.",
                    variables: [
                        { symbol: "a", rep: "Resultant wave amplitude", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "a_x", rep: "Sum of horizontal phasor projections", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "a_y", rep: "Sum of vertical phasor projections", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "a_i", rep: "Amplitude of i-th wave component", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "\\phi_i", rep: "Phase angle of i-th wave component", unit: "Radian", unitSym: "\\mathrm{rad}" },
                        { symbol: "\\phi", rep: "Resultant phase angle", unit: "Radian", unitSym: "\\mathrm{rad}" }
                    ]
                },
                {
                    section: "Standing Waves & Resonance",
                    name: "Standing Wave Equation & Amplitude Profile",
                    formula: "\\[ y = 2a\\sin(kx)\\cos(\\omega t), \\quad A(x) = 2a|\\sin(kx)| \\]",
                    figure: { img: "image_G12_one/ch2-l1-eq4.png", title: "Standing Wave Profile", caption: "Stationary wave amplitude profile A(x) = 2a|sin(kx)|." },
                    pdfPage: "PDF Page 14",
                    explanation: "Stationary wave formed by the interference of two identical waves traveling in opposite directions; amplitude varies sinusoidally with position.",
                    conditions: "Oppositely propagating identical waves in medium.",
                    variables: [
                        { symbol: "y", rep: "Standing wave displacement", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "A(x)", rep: "Position-dependent vibrational amplitude", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "a", rep: "Amplitude of each traveling component wave", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "k", rep: "Wave number (\\(2\\pi/\\lambda\\))", unit: "Radian per meter", unitSym: "\\mathrm{rad/m}" },
                        { symbol: "x", rep: "Position coordinate along medium", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "\\omega", rep: "Angular frequency", unit: "Radian per second", unitSym: "\\mathrm{rad/s}" },
                        { symbol: "t", rep: "Time", unit: "Second", unitSym: "\\mathrm{s}" }
                    ]
                },
                {
                    section: "Standing Waves & Resonance",
                    name: "Positions of Nodes in Standing Waves",
                    formula: "\\[ A = 0 \\iff \\sin(kx) = 0 \\implies x_n = n\\frac{\\lambda}{2} \\quad (n = 0, 1, 2, \\dots) \\]",
                    figure: { img: "image_G12_one/ch2-l1-eq5.png", title: "Positions of Nodes", caption: "Zero displacement coordinates x_n = n(λ/2)." },
                    pdfPage: "PDF Page 14",
                    explanation: "Points along the standing wave that remain permanently at rest due to complete destructive interference, spaced every half wavelength.",
                    conditions: "Fixed boundary condition at origin x = 0.",
                    variables: [
                        { symbol: "x_n", rep: "Coordinate of n-th node", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "n", rep: "Node order number", unit: "Dimensionless integer", unitSym: "\\text{No SI unit}" },
                        { symbol: "\\lambda", rep: "Wavelength", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "k", rep: "Wave number", unit: "Radian per meter", unitSym: "\\mathrm{rad/m}" }
                    ]
                },
                {
                    section: "Standing Waves & Resonance",
                    name: "Positions of Antinodes in Standing Waves",
                    formula: "\\[ A = 2a \\iff \\sin(kx) = \\pm 1 \\implies x_n = (2n + 1)\\frac{\\lambda}{4} = \\left(n + \\frac{1}{2}\\right)\\frac{\\lambda}{2} \\quad (n = 0, 1, 2, \\dots) \\]",
                    figure: { img: "image_G12_one/ch2-l1-eq6.png", title: "Positions of Antinodes", caption: "Maximum amplitude coordinates x_n = (2n+1)(λ/4)." },
                    pdfPage: "PDF Page 14",
                    explanation: "Points along the standing wave that experience maximum vibrational amplitude 2a due to constructive interference, located midway between adjacent nodes.",
                    conditions: "Standing wave in linear medium.",
                    variables: [
                        { symbol: "x_n", rep: "Coordinate of n-th antinode", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "n", rep: "Antinode order number", unit: "Dimensionless integer", unitSym: "\\text{No SI unit}" },
                        { symbol: "\\lambda", rep: "Wavelength", unit: "Meter", unitSym: "\\mathrm{m}" }
                    ]
                }
            ],
            flashcards: [
                { front: "What is the standing wave equation?", back: "\\( y = 2a\\sin(kx)\\cos(\\omega t) \\)" },
                { front: "Where do nodes occur in a standing wave?", back: "\\( x_n = n\\frac{\\lambda}{2} \\quad (n = 0, 1, 2, \\dots) \\)" },
                { front: "Where do antinodes occur in a standing wave?", back: "\\( x_n = (2n + 1)\\frac{\\lambda}{4} \\quad (n = 0, 1, 2, \\dots) \\)" },
                { front: "What is the distance between consecutive nodes?", back: "\\( \\frac{\\lambda}{2} \\) (half a wavelength)." },
                { front: "What is the formula for wave speed v?", back: "\\( v = \\frac{\\lambda}{T} = \\lambda f = \\frac{\\omega}{k} \\)" }
            ],
            quiz: [
                { question: "In a standing wave, what is the distance between adjacent nodes?", options: ["λ", "λ / 2", "λ / 4", "2λ"], correctIndex: 1, feedback: "Consecutive nodes are spaced exactly by half a wavelength: λ / 2." },
                { question: "What is the distance between a node and the immediately adjacent antinode?", options: ["λ", "λ / 2", "λ / 4", "3λ / 4"], correctIndex: 2, feedback: "Distance from a node to the closest antinode is a quarter wavelength: λ / 4." },
                { question: "Which formula gives the wave number k?", options: ["2π / λ", "2π / T", "λ / f", "v / λ"], correctIndex: 0, feedback: "Wave number is the spatial frequency: k = 2π / λ." }
            ]
        },

        // =====================================================================
        // CHAPTER 2 LESSON 2: Interference and Diffraction (Unit 2 Continued)
        // =====================================================================
        {
            id: "g12-interf",
            gifUrl: "",
            worksheetUrl: "worksheets/ch2-l2-worksheet.pdf",
            ebookUrl: "ebooks/g12-ch2-l2-ebook.pdf.pdf",
            ebooks: [
                { title: "Interference & Diffraction of Light (pp. 64–78)", url: "ebooks/g12-ch2-l2-ebook.pdf.pdf", altUrl: "ebooks/g12-ch2-l2-ebook.pdf" }
            ],
            games: [{ topic: "Interference and Diffraction", url: "https://gemini.google.com/share/14c6c1b23c4d" }],
            title: "Chapter 2 Lesson 2: Interference and Diffraction",
            concepts: [
                "Conditions for Interference: Constructive interference (maximum amplitude) occurs when path difference \\( d_2 - d_1 = n\\lambda \\) (for \\( n = 0, 1, 2, 3, \\dots \\)). Destructive interference (minimum amplitude) occurs when \\( d_2 - d_1 = \\frac{(2n+1)\\lambda}{2} \\) (for \\( n = 0, 1, 2, 3, \\dots \\)).",
                "Superposition Wave Amplitude: Two identical waves of amplitude \\( A \\) superpose to yield resultant amplitude \\( A' = 2A\\left|\\cos\\left(\\frac{\\pi(d_2 - d_1)}{\\lambda}\\right)\\right| \\). Maximum amplitude \\( A'_{\\max} = 2A \\) occurs when \\( \\cos\\left(\\frac{\\pi(d_2 - d_1)}{\\lambda}\\right) = \\pm 1 \\implies d_2 - d_1 = n\\lambda \\). Minimum amplitude \\( A'_{\\min} = 0 \\) occurs when \\( \\cos\\left(\\frac{\\pi(d_2 - d_1)}{\\lambda}\\right) = 0 \\implies d_2 - d_1 = \\frac{(2n+1)\\lambda}{2} \\).",
                "Young's Double-Slit Path Difference: At observation point P on a distant screen, path difference is \\( \\Delta d = d_2 - d_1 = d\\sin\\theta \\), where \\( d \\) is slit separation and \\( \\theta \\) is angle from central axis.",
                "Fringe Conditions in Young's Experiment: Bright fringes occur at \\( d\\sin\\theta_{\\text{bright}} = m\\lambda \\) (with central maximum at \\( m = 0 \\Rightarrow \\theta = 0 \\) and first-order fringes at \\( m = \\pm 1 \\)). Dark fringes occur at \\( d\\sin\\theta_{\\text{dark}} = \\left(m + \\frac{1}{2}\\right)\\lambda \\), where \\( m = 0, \\pm 1, \\pm 2, \\dots \\).",
                "Fringe Positions on Screen: Using small-angle approximation (\\( \\tan\\theta \\approx \\sin\\theta \\approx \\frac{y}{L} \\)), bright fringe positions are \\( y_{\\text{bright}} = \\frac{m\\lambda L}{d} \\) and dark fringe positions are \\( y_{\\text{dark}} = \\frac{(m + 1/2)\\lambda L}{d} \\). Adjacent fringes are separated by constant fringe width \\( \\Delta y = \\frac{\\lambda L}{d} \\).",
                "Light Diffraction: Bending and spreading of light around obstacle edges or through a narrow aperture of width \\( a \\), noticeable when \\( a \\sim \\lambda \\). Single-slit dark minima occur at \\( a\\sin\\theta = m\\lambda \\) for \\( m = \\pm 1, \\pm 2, \\pm 3, \\dots \\) (\\( m = 0 \\) is excluded as it corresponds to the central maximum).",
                "Diffraction Fringe Positions & Central Maximum: Dark fringes appear at \\( y_{\\text{dark}} = \\frac{m\\lambda L}{a} \\), with first minima at \\( y = \\pm \\frac{\\lambda L}{a} \\). The broad central maximum has width \\( W = \\frac{2\\lambda L}{a} \\), which is twice the distance from the center to the first minimum."
            ],
            definitions: [
                { term: "Constructive Interference", definition: "Superposition of two in-phase coherent waves where wave crests coincide, resulting in maximum resultant amplitude A' = 2A.", symbol: "d_2 - d_1 = n\\lambda", unit: "\\mathrm{m}", equation: "d_2 - d_1 = n\\lambda \\quad (n = 0, 1, 2, \\dots)" },
                { term: "Destructive Interference", definition: "Superposition of two coherent waves out of phase by half a cycle where crests meet troughs, resulting in minimum (zero) amplitude A' = 0.", symbol: "d_2 - d_1 = \\frac{(2n+1)\\lambda}{2}", unit: "\\mathrm{m}", equation: "d_2 - d_1 = \\frac{(2n+1)\\lambda}{2} \\quad (n = 0, 1, 2, \\dots)" },
                { term: "Resultant Superposition Amplitude", definition: "Net amplitude A' of the combined wave formed by the interference of two identical waves of amplitude A, dependent on path difference.", symbol: "A'", unit: "\\mathrm{m}", equation: "A' = 2A\\left|\\cos\\left(\\frac{\\pi(d_2 - d_1)}{\\lambda}\\right)\\right|" },
                { term: "Maximum Amplitude Condition", definition: "Condition yielding peak resultant amplitude A'_max = 2A when cosine factor equals ±1.", symbol: "A'_{\\max} = 2A", unit: "\\mathrm{m}", equation: "d_2 - d_1 = n\\lambda \\implies A'_{\\max} = 2A" },
                { term: "Minimum Amplitude Condition", definition: "Condition yielding zero resultant amplitude A'_min = 0 when cosine factor equals 0.", symbol: "A'_{\\min} = 0", unit: "\\mathrm{m}", equation: "d_2 - d_1 = \\frac{(2n+1)\\lambda}{2} \\implies A'_{\\min} = 0" },
                { term: "Double-Slit Path Difference", definition: "Geometric difference in distance traveled by light from two slits separated by distance d to an observation point on the screen.", symbol: "\\Delta d", unit: "\\mathrm{m}", equation: "\\Delta d = d_2 - d_1 = d\\sin\\theta" },
                { term: "Slit Separation (Interference)", definition: "Center-to-center distance separating the two parallel slits in Young's double-slit experiment.", symbol: "d", unit: "\\mathrm{m}", equation: "d\\sin\\theta = m\\lambda" },
                { term: "Screen Distance", definition: "Perpendicular distance from the plane of the slits or slit to the viewing screen.", symbol: "L", unit: "\\mathrm{m}", equation: "\\tan\\theta = \\frac{y}{L}" },
                { term: "Bright Fringe Position", definition: "Perpendicular distance on the observation screen from the central axis to the m-th constructive bright fringe.", symbol: "y_{\\text{bright}}", unit: "\\mathrm{m}", equation: "y_{\\text{bright}} = \\frac{m\\lambda L}{d} \\quad (m = 0, \\pm 1, \\pm 2, \\dots)" },
                { term: "Dark Fringe Position (Interference)", definition: "Perpendicular distance on the observation screen from the central axis to the m-th destructive dark fringe.", symbol: "y_{\\text{dark}}", unit: "\\mathrm{m}", equation: "y_{\\text{dark}} = \\frac{(m + 1/2)\\lambda L}{d} \\quad (m = 0, \\pm 1, \\dots)" },
                { term: "Fringe Spacing (Fringe Width)", definition: "Constant distance between two consecutive bright fringes or two consecutive dark fringes on the screen in Young's experiment.", symbol: "\\Delta y", unit: "\\mathrm{m}", equation: "\\Delta y = \\frac{\\lambda L}{d}" },
                { term: "Light Diffraction", definition: "The bending and spreading of light waves when encountering an obstacle or passing through a narrow aperture comparable to wavelength.", symbol: "\\text{Diffraction}", unit: "No SI unit", equation: "a\\sin\\theta = m\\lambda" },
                { term: "Slit Width (Diffraction)", definition: "Width of the single aperture through which light diffracts and spreads.", symbol: "a", unit: "\\mathrm{m}", equation: "a\\sin\\theta = m\\lambda" },
                { term: "Diffraction Minima (Dark Fringes)", definition: "Angular directions where wavelets from across a slit of width a destructively cancel, creating dark bands.", symbol: "\\theta_{\\text{dark}}", unit: "\\mathrm{rad}", equation: "a\\sin\\theta = m\\lambda \\quad (m = \\pm 1, \\pm 2, \\dots)" },
                { term: "Central Maximum Width (Diffraction)", definition: "Total linear width of the central bright diffraction band on the screen between the first dark minima (m = ±1).", symbol: "W", unit: "\\mathrm{m}", equation: "W = \\frac{2\\lambda L}{a}" }
            ],
            examples: [
                {
                    title: "Example 1: Constructive Interference Condition and Path Difference",
                    question: "Two coherent in-phase wave sources produce identical waves of wavelength λ = 0.40 m. At a distant point P, the distances from the two sources are d₁ = 3.20 m and d₂ = 4.00 m. Determine the path difference, the order of the interference fringe, and confirm whether constructive interference occurs.",
                    given: "Source distances \\( d_1 = 3.20\\,\\mathrm{m} \\), \\( d_2 = 4.00\\,\\mathrm{m} \\), Wavelength \\( \\lambda = 0.40\\,\\mathrm{m} \\).",
                    find: "Path difference (\\( d_2 - d_1 \\)), order (\\( n \\)), and interference state.",
                    equation: "d_2 - d_1 = n\\lambda \\quad (n = 0, 1, 2, \\dots)",
                    rearrangement: "n = \\frac{d_2 - d_1}{\\lambda}",
                    solution: "1. <strong>Path Difference:</strong><br>\\[ d_2 - d_1 = 4.00\\,\\mathrm{m} - 3.20\\,\\mathrm{m} = 0.80\\,\\mathrm{m} \\]<br>2. <strong>Order Index:</strong><br>\\[ n = \\frac{0.80\\,\\mathrm{m}}{0.40\\,\\mathrm{m}} = 2.0 \\]<br>Since \\( n = 2 \\) is an exact integer, the condition for constructive interference is fully satisfied.",
                    finalAnswer: "d_2 - d_1 = 0.80\\,\\mathrm{m} = 2\\lambda \\implies \\text{Constructive Maximum (Order } n = 2\\text{)}",
                    explanation: "When path difference is an integer multiple of the wavelength, the waves arrive crest-to-crest in phase, reinforcing each other to form a maximum."
                },
                {
                    title: "Example 2: Destructive Interference Condition and Path Difference",
                    question: "Two identical sound speakers emit in-phase coherent waves with wavelength λ = 0.50 m. A listener sits at point Q where distance from speaker 1 is d₁ = 2.80 m and from speaker 2 is d₂ = 4.05 m. Calculate the path difference and verify that complete destructive interference occurs.",
                    given: "Distances \\( d_1 = 2.80\\,\\mathrm{m} \\), \\( d_2 = 4.05\\,\\mathrm{m} \\), Wavelength \\( \\lambda = 0.50\\,\\mathrm{m} \\).",
                    find: "Path difference (\\( d_2 - d_1 \\)) and destructive order index (\\( n \\)).",
                    equation: "d_2 - d_1 = \\frac{(2n + 1)\\lambda}{2}",
                    rearrangement: "2n + 1 = \\frac{2(d_2 - d_1)}{\\lambda} \\implies n = \\frac{1}{2}\\left(\\frac{2(d_2 - d_1)}{\\lambda} - 1\\right)",
                    solution: "1. <strong>Path Difference:</strong><br>\\[ d_2 - d_1 = 4.05\\,\\mathrm{m} - 2.80\\,\\mathrm{m} = 1.25\\,\\mathrm{m} \\]<br>2. <strong>Evaluate Ratio:</strong><br>\\[ \\frac{d_2 - d_1}{\\lambda} = \\frac{1.25\\,\\mathrm{m}}{0.50\\,\\mathrm{m}} = 2.50 = \\frac{5}{2} \\]<br>3. <strong>Find n:</strong> \\( 2n + 1 = 5 \\implies 2n = 4 \\implies n = 2 \\).",
                    finalAnswer: "d_2 - d_1 = 1.25\\,\\mathrm{m} = 2.5\\lambda \\implies \\text{Destructive Minimum (Order } n = 2\\text{)}",
                    explanation: "Because the path difference is an odd number of half-wavelengths (5/2 λ), wave crests from one source meet wave troughs from the other, canceling completely to produce zero sound."
                },
                {
                    title: "Example 3: Resultant Amplitude of Superposition Wave",
                    question: "Two identical coherent waves of individual amplitude A = 4.0 mm and wavelength λ = 0.60 m meet at an observation point with path difference d₂ - d₁ = 0.10 m. Calculate the resultant amplitude of the combined wave.",
                    given: "Individual amplitude \\( A = 4.0\\,\\mathrm{mm} = 4.0 \\times 10^{-3}\\,\\mathrm{m} \\), Wavelength \\( \\lambda = 0.60\\,\\mathrm{m} \\), Path difference \\( d_2 - d_1 = 0.10\\,\\mathrm{m} \\).",
                    find: "Resultant amplitude (\\( A' \\)) in \\( \\mathrm{mm} \\).",
                    equation: "A' = 2A\\left|\\cos\\left(\\frac{\\pi(d_2 - d_1)}{\\lambda}\\right)\\right|",
                    rearrangement: "A' = 2A\\left|\\cos\\left(\\frac{\\pi(d_2 - d_1)}{\\lambda}\\right)\\right|",
                    solution: "1. <strong>Cosine Argument:</strong><br>\\[ \\frac{\\pi(d_2 - d_1)}{\\lambda} = \\frac{\\pi(0.10\\,\\mathrm{m})}{0.60\\,\\mathrm{m}} = \\frac{\\pi}{6}\\,\\mathrm{rad} = 30^\\circ \\]<br>2. <strong>Cosine Value:</strong> \\( \\cos(30^\\circ) = \\frac{\\sqrt{3}}{2} \\approx 0.8660 \\).<br>3. <strong>Resultant Amplitude:</strong><br>\\[ A' = 2(4.0\\,\\mathrm{mm})|\\cos(30^\\circ)| = 8.0 \\times 0.8660 \\approx 6.93\\,\\mathrm{mm} \\]",
                    finalAnswer: "A' \\approx 6.93\\,\\mathrm{mm} \\; (6.93 \\times 10^{-3}\\,\\mathrm{m})",
                    explanation: "The resultant amplitude depends continuously on the path difference through the cosine factor, ranging between 0 and 2A."
                },
                {
                    title: "Example 4: Maximum and Minimum Amplitude Verification",
                    question: "Two identical wave disturbances each have amplitude A = 5.0 cm and wavelength λ = 0.30 m. Calculate the maximum possible resultant amplitude A'_max and minimum amplitude A'_min, and state the path differences where each occurs.",
                    given: "Individual amplitude \\( A = 5.0\\,\\mathrm{cm} \\), Wavelength \\( \\lambda = 0.30\\,\\mathrm{m} \\).",
                    find: "Maximum amplitude (\\( A'_{\\max} \\)) and minimum amplitude (\\( A'_{\\min} \\)) in \\( \\mathrm{cm} \\).",
                    equation: "A'_{\\max} = 2A \\; (d_2 - d_1 = n\\lambda), \\quad A'_{\\min} = 0 \\; \\left(d_2 - d_1 = \\frac{(2n+1)\\lambda}{2}\\right)",
                    rearrangement: "A'_{\\max} = 2A, \\quad A'_{\\min} = 0",
                    solution: "1. <strong>Maximum Amplitude (Constructive):</strong><br>\\[ A'_{\\max} = 2A = 2(5.0\\,\\mathrm{cm}) = 10.0\\,\\mathrm{cm} \\]<br>Occurs at path differences \\( \\Delta d = 0, 0.30\\,\\mathrm{m}, 0.60\\,\\mathrm{m}, \\dots \\)<br>2. <strong>Minimum Amplitude (Destructive):</strong><br>\\[ A'_{\\min} = 0.0\\,\\mathrm{cm} \\]<br>Occurs at path differences \\( \\Delta d = 0.15\\,\\mathrm{m}, 0.45\\,\\mathrm{m}, 0.75\\,\\mathrm{m}, \\dots \\)",
                    finalAnswer: "A'_{\\max} = 10.0\\,\\mathrm{cm}, \\quad A'_{\\min} = 0.0\\,\\mathrm{cm}",
                    explanation: "When identical waves interfere constructively their amplitudes add to 2A; when they interfere destructively they cancel out completely to zero."
                },
                {
                    title: "Example 5: Path Difference in Young's Double-Slit Experiment",
                    question: "In Young's experiment, two parallel slits are separated by d = 0.20 mm (2.0 × 10⁻⁴ m). At an observation point P on a distant screen at angle θ = 0.30° from the central axis, calculate the path difference between light waves arriving from the two slits in nanometers.",
                    given: "Slit separation \\( d = 2.0 \\times 10^{-4}\\,\\mathrm{m} \\), Angle \\( \\theta = 0.30^\\circ \\) (\\( \\sin 0.30^\\circ \\approx 5.236 \\times 10^{-3} \\)).",
                    find: "Path difference (\\( \\Delta d \\)) in \\( \\mathrm{m} \\) and \\( \\mathrm{nm} \\).",
                    equation: "\\Delta d = d_2 - d_1 = d\\sin\\theta",
                    rearrangement: "\\Delta d = d\\sin\\theta",
                    solution: "1. <strong>Formula:</strong> \\( \\Delta d = d\\sin\\theta \\)<br>2. <strong>Substitution:</strong><br>\\[ \\Delta d = (2.0 \\times 10^{-4}\\,\\mathrm{m}) \\times \\sin(0.30^\\circ) = (2.0 \\times 10^{-4})(5.236 \\times 10^{-3}) \\]<br>3. <strong>Calculation:</strong> \\( \\Delta d = 1.047 \\times 10^{-6}\\,\\mathrm{m} = 1047\\,\\mathrm{nm} \\).",
                    finalAnswer: "\\Delta d \\approx 1.05 \\times 10^{-6}\\,\\mathrm{m} \\; (1047\\,\\mathrm{nm})",
                    explanation: "Because the screen distance is much greater than slit separation (L ≫ d), geometric ray parallelism gives the path difference as d sin θ."
                },
                {
                    title: "Example 6: Angular Positions of Bright and Dark Fringes",
                    question: "Monochromatic light of wavelength λ = 600 nm (6.0 × 10⁻⁷ m) illuminates double slits with separation d = 0.15 mm (1.5 × 10⁻⁴ m). Calculate the angular positions of the first-order bright fringe (m = 1) and the first dark fringe (m = 0).",
                    given: "Wavelength \\( \\lambda = 6.0 \\times 10^{-7}\\,\\mathrm{m} \\), Slit separation \\( d = 1.5 \\times 10^{-4}\\,\\mathrm{m} \\).",
                    find: "Angle to 1st bright fringe (\\( \\theta_{\\text{bright}, 1} \\)) and 1st dark fringe (\\( \\theta_{\\text{dark}, 0} \\)) in radians and degrees.",
                    equation: "d\\sin\\theta_{\\text{bright}} = m\\lambda, \\quad d\\sin\\theta_{\\text{dark}} = \\left(m + \\frac{1}{2}\\right)\\lambda",
                    rearrangement: "\\sin\\theta_{\\text{bright}} = \\frac{m\\lambda}{d}, \\quad \\sin\\theta_{\\text{dark}} = \\frac{(m + 1/2)\\lambda}{d}",
                    solution: "1. <strong>1st-Order Bright Fringe (m = 1):</strong><br>\\[ \\sin\\theta_{\\text{bright}, 1} = \\frac{1 \\times 6.0 \\times 10^{-7}\\,\\mathrm{m}}{1.5 \\times 10^{-4}\\,\\mathrm{m}} = 4.0 \\times 10^{-3}\\,\\mathrm{rad} \\implies \\theta \\approx 0.229^\\circ \\]<br>2. <strong>1st Dark Fringe (m = 0):</strong><br>\\[ \\sin\\theta_{\\text{dark}, 0} = \\frac{(0 + 0.5)(6.0 \\times 10^{-7}\\,\\mathrm{m})}{1.5 \\times 10^{-4}\\,\\mathrm{m}} = 2.0 \\times 10^{-3}\\,\\mathrm{rad} \\implies \\theta \\approx 0.115^\\circ \\]",
                    finalAnswer: "\\theta_{\\text{bright}, 1} = 4.0 \\times 10^{-3}\\,\\mathrm{rad} \\; (0.229^\\circ), \\quad \\theta_{\\text{dark}, 0} = 2.0 \\times 10^{-3}\\,\\mathrm{rad} \\; (0.115^\\circ)",
                    explanation: "The first dark fringe occurs at exactly half the angular deviation of the first bright fringe."
                },
                {
                    title: "Example 7: Screen Positions of Higher-Order Bright Fringes",
                    question: "In a Young's experiment with slit separation d = 0.25 mm and screen distance L = 1.50 m, light with wavelength λ = 500 nm is used. Determine the linear position of the 3rd bright fringe on the screen relative to the central bright axis.",
                    given: "Slit spacing \\( d = 2.5 \\times 10^{-4}\\,\\mathrm{m} \\), Screen distance \\( L = 1.50\\,\\mathrm{m} \\), Wavelength \\( \\lambda = 5.0 \\times 10^{-7}\\,\\mathrm{m} \\), Fringe order \\( m = 3 \\).",
                    find: "Position of 3rd bright fringe (\\( y_{\\text{bright}, 3} \\)) in \\( \\mathrm{mm} \\).",
                    equation: "y_{\\text{bright}} = \\frac{m\\lambda L}{d}",
                    rearrangement: "y_{\\text{bright}} = \\frac{m\\lambda L}{d}",
                    solution: "1. <strong>Formula:</strong> \\( y_{\\text{bright}} = \\frac{m\\lambda L}{d} \\)<br>2. <strong>Substitution:</strong><br>\\[ y_{\\text{bright}, 3} = \\frac{3(5.0 \\times 10^{-7}\\,\\mathrm{m})(1.50\\,\\mathrm{m})}{2.5 \\times 10^{-4}\\,\\mathrm{m}} = \\frac{2.25 \\times 10^{-6}}{2.5 \\times 10^{-4}} = 9.0 \\times 10^{-3}\\,\\mathrm{m} = 9.0\\,\\mathrm{mm} \\]",
                    finalAnswer: "y_{\\text{bright}, 3} = 9.0\\,\\mathrm{mm} \\; (9.0 \\times 10^{-3}\\,\\mathrm{m})",
                    explanation: "Under the small-angle approximation (tan θ ≈ sin θ ≈ y/L), the linear distance of bright fringes from the central maximum is proportional to the order number m."
                },
                {
                    title: "Example 8: Screen Positions of Dark Interference Fringes",
                    question: "Using the same setup (d = 0.25 mm, L = 1.50 m, λ = 500 nm), find the linear position of the 2nd dark fringe on the screen (corresponding to m = 1).",
                    given: "Slit spacing \\( d = 2.5 \\times 10^{-4}\\,\\mathrm{m} \\), Screen distance \\( L = 1.50\\,\\mathrm{m} \\), Wavelength \\( \\lambda = 5.0 \\times 10^{-7}\\,\\mathrm{m} \\), Dark order \\( m = 1 \\) (giving \\( m + 1/2 = 1.5 \\)).",
                    find: "Position of 2nd dark fringe (\\( y_{\\text{dark}, 1} \\)) in \\( \\mathrm{mm} \\).",
                    equation: "y_{\\text{dark}} = \\frac{\\left(m + \\frac{1}{2}\\right)\\lambda L}{d}",
                    rearrangement: "y_{\\text{dark}} = \\frac{(m + 0.5)\\lambda L}{d}",
                    solution: "1. <strong>Formula:</strong> \\( y_{\\text{dark}} = \\frac{(m + 0.5)\\lambda L}{d} \\)<br>2. <strong>Substitution:</strong><br>\\[ y_{\\text{dark}, 1} = \\frac{(1.5)(5.0 \\times 10^{-7}\\,\\mathrm{m})(1.50\\,\\mathrm{m})}{2.5 \\times 10^{-4}\\,\\mathrm{m}} = \\frac{1.125 \\times 10^{-6}}{2.5 \\times 10^{-4}} = 4.5 \\times 10^{-3}\\,\\mathrm{m} = 4.5\\,\\mathrm{mm} \\]",
                    finalAnswer: "y_{\\text{dark}, 1} = 4.5\\,\\mathrm{mm} \\; (4.5 \\times 10^{-3}\\,\\mathrm{m})",
                    explanation: "The second dark fringe appears at exactly y = 4.5 mm, precisely halfway between the 1st bright fringe (3.0 mm) and 2nd bright fringe (6.0 mm)."
                },
                {
                    title: "Example 9: Fringe Spacing and Wavelength Measurement",
                    question: "In an optics laboratory, double slits separated by d = 0.20 mm produce interference fringes on a screen placed L = 1.60 m away. The distance between 5 consecutive bright fringes is measured to be 20.0 mm (meaning 4 fringe widths). Calculate the fringe width Δy and the unknown wavelength of the light source.",
                    given: "Slit separation \\( d = 2.0 \\times 10^{-4}\\,\\mathrm{m} \\), Screen distance \\( L = 1.60\\,\\mathrm{m} \\), Distance for 4 fringe intervals \\( 4\\Delta y = 20.0\\,\\mathrm{mm} \\implies \\Delta y = 5.0\\,\\mathrm{mm} = 5.0 \\times 10^{-3}\\,\\mathrm{m} \\).",
                    find: "Fringe spacing (\\( \\Delta y \\)) in \\( \\mathrm{mm} \\) and light wavelength (\\( \\lambda \\)) in \\( \\mathrm{nm} \\).",
                    equation: "\\Delta y = \\frac{\\lambda L}{d} \\iff \\lambda = \\frac{d \\Delta y}{L}",
                    rearrangement: "\\lambda = \\frac{d \\Delta y}{L}",
                    solution: "1. <strong>Fringe Spacing:</strong> \\( \\Delta y = \\frac{20.0\\,\\mathrm{mm}}{4} = 5.0\\,\\mathrm{mm} \\).<br>2. <strong>Wavelength Calculation:</strong><br>\\[ \\lambda = \\frac{d \\Delta y}{L} = \\frac{(2.0 \\times 10^{-4}\\,\\mathrm{m})(5.0 \\times 10^{-3}\\,\\mathrm{m})}{1.60\\,\\mathrm{m}} = \\frac{1.0 \\times 10^{-6}}{1.60} = 6.25 \\times 10^{-7}\\,\\mathrm{m} = 625\\,\\mathrm{nm} \\]",
                    finalAnswer: "\\Delta y = 5.0\\,\\mathrm{mm}, \\quad \\lambda = 625\\,\\mathrm{nm} \\; (6.25 \\times 10^{-7}\\,\\mathrm{m})",
                    explanation: "Young's double-slit experiment provides an accurate historical and practical method for determining the microscopic wavelength of light by measuring macroscopic fringe spacings."
                },
                {
                    title: "Example 10: Single-Slit Diffraction Dark Minima Condition",
                    question: "A narrow single slit of width a = 0.080 mm (8.0 × 10⁻⁵ m) is illuminated by a laser of wavelength λ = 640 nm. Find the diffraction angle θ of the first dark minimum (m = 1) and the second dark minimum (m = 2).",
                    given: "Slit width \\( a = 8.0 \\times 10^{-5}\\,\\mathrm{m} \\), Wavelength \\( \\lambda = 6.40 \\times 10^{-7}\\,\\mathrm{m} \\).",
                    find: "Diffraction angles for 1st minimum (\\( \\theta_1 \\)) and 2nd minimum (\\( \\theta_2 \\)) in radians and degrees.",
                    equation: "a\\sin\\theta = m\\lambda \\quad (m = \\pm 1, \\pm 2, \\dots)",
                    rearrangement: "\\sin\\theta = \\frac{m\\lambda}{a}",
                    solution: "1. <strong>1st Minimum (m = 1):</strong><br>\\[ \\sin\\theta_1 = \\frac{1 \\times 6.40 \\times 10^{-7}\\,\\mathrm{m}}{8.0 \\times 10^{-5}\\,\\mathrm{m}} = 8.0 \\times 10^{-3}\\,\\mathrm{rad} \\implies \\theta_1 \\approx 0.458^\\circ \\]<br>2. <strong>2nd Minimum (m = 2):</strong><br>\\[ \\sin\\theta_2 = \\frac{2 \\times 6.40 \\times 10^{-7}\\,\\mathrm{m}}{8.0 \\times 10^{-5}\\,\\mathrm{m}} = 1.60 \\times 10^{-2}\\,\\mathrm{rad} \\implies \\theta_2 \\approx 0.917^\\circ \\]",
                    finalAnswer: "\\theta_1 = 8.0 \\times 10^{-3}\\,\\mathrm{rad} \\; (0.458^\\circ), \\quad \\theta_2 = 1.60 \\times 10^{-2}\\,\\mathrm{rad} \\; (0.917^\\circ)",
                    explanation: "Diffraction minima occur where wavelets from across the aperture destructively interfere in pairs, with m = 0 excluded because the center is the brightest maximum."
                },
                {
                    title: "Example 11: Linear Position of Single-Slit Dark Fringes on Screen",
                    question: "Light from a helium-neon laser (λ = 632.8 nm) passes through a single slit of width a = 0.12 mm and forms a diffraction pattern on a screen L = 2.40 m away. Calculate the distance on the screen from the central maximum to the first dark fringe.",
                    given: "Wavelength \\( \\lambda = 6.328 \\times 10^{-7}\\,\\mathrm{m} \\), Slit width \\( a = 1.20 \\times 10^{-4}\\,\\mathrm{m} \\), Screen distance \\( L = 2.40\\,\\mathrm{m} \\), Order \\( m = 1 \\).",
                    find: "Linear position of 1st dark fringe (\\( y_{\\text{dark}, 1} \\)) in \\( \\mathrm{mm} \\).",
                    equation: "y_{\\text{dark}} = \\frac{m\\lambda L}{a}",
                    rearrangement: "y_{\\text{first dark}} = \\frac{\\lambda L}{a}",
                    solution: "1. <strong>Formula:</strong> \\( y_{\\text{dark}, 1} = \\frac{\\lambda L}{a} \\)<br>2. <strong>Substitution:</strong><br>\\[ y_{\\text{dark}, 1} = \\frac{(6.328 \\times 10^{-7}\\,\\mathrm{m})(2.40\\,\\mathrm{m})}{1.20 \\times 10^{-4}\\,\\mathrm{m}} = \\frac{1.5187 \\times 10^{-6}}{1.20 \\times 10^{-4}} = 1.2656 \\times 10^{-2}\\,\\mathrm{m} \\approx 12.66\\,\\mathrm{mm} \\]",
                    finalAnswer: "y_{\\text{dark}, 1} \\approx 12.7\\,\\mathrm{mm} \\; (1.27 \\times 10^{-2}\\,\\mathrm{m})",
                    explanation: "The first diffraction minimum bounds the central maximum on either side at y = ±12.7 mm from the central peak."
                },
                {
                    title: "Example 12: Total Linear Width of the Central Diffraction Maximum",
                    question: "For the single-slit system in Example 11 (a = 0.12 mm, L = 2.40 m, λ = 632.8 nm), calculate the total linear width of the central diffraction maximum.",
                    given: "First minimum position \\( y_1 = 12.66\\,\\mathrm{mm} \\), Wavelength \\( \\lambda = 6.328 \\times 10^{-7}\\,\\mathrm{m} \\), Slit width \\( a = 1.20 \\times 10^{-4}\\,\\mathrm{m} \\), Screen distance \\( L = 2.40\\,\\mathrm{m} \\).",
                    find: "Total width of central maximum (\\( W \\)) in \\( \\mathrm{mm} \\).",
                    equation: "W = 2y_1 = \\frac{2\\lambda L}{a}",
                    rearrangement: "W = \\frac{2\\lambda L}{a}",
                    solution: "1. <strong>Formula:</strong> \\( W = \\frac{2\\lambda L}{a} = 2y_1 \\)<br>2. <strong>Calculation:</strong><br>\\[ W = 2 \\times (12.656\\,\\mathrm{mm}) \\approx 25.31\\,\\mathrm{mm} \\]",
                    finalAnswer: "W \\approx 25.3\\,\\mathrm{mm} \\; (2.53 \\times 10^{-2}\\,\\mathrm{m})",
                    explanation: "The central diffraction maximum spans the entire distance between the first dark fringes on either side (from -y₁ to +y₁), making it exactly twice as wide as the secondary maxima."
                }
            ],
            equations: [
                // 1. Conditions for Constructive and Destructive Interference
                {
                    section: "Conditions for Constructive and Destructive Interference",
                    name: "Path-Difference Conditions for Interference",
                    formula: "\\[ d_2 - d_1 = n\\lambda \\quad (\\text{Constructive Maxima}) \\]\\[ d_2 - d_1 = \\frac{(2n + 1)\\lambda}{2} \\quad (\\text{Destructive Minima}) \\]",
                    figure: { img: "image_G12_one/ch2-l2-eq1.png", title: "Interference Conditions", caption: "Constructive and destructive superposition of coherent waves." },
                    pdfPage: "PDF Page 14 & Textbook Standards",
                    explanation: "When two identical coherent waves travel distances d₁ and d₂ to superpose: constructive interference produces maximum amplitude when the path difference equals an integer number of wavelengths (d₂ - d₁ = nλ). Destructive interference produces minimum amplitude (complete cancellation for equal amplitudes) when the path difference equals an odd half-wavelength (d₂ - d₁ = (2n + 1)λ / 2).",
                    conditions: "Coherent sources of equal amplitude, n = 0, 1, 2, 3, ... (non-negative path differences).",
                    variables: [
                        { symbol: "d_2 - d_1", rep: "Path difference between the two waves", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "d_1, d_2", rep: "Distances traveled by the two individual waves from sources to observation point", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "\\lambda", rep: "Wavelength of the waves", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "n", rep: "Non-negative integer order (n = 0, 1, 2, 3, ...)", unit: "Dimensionless integer", unitSym: "\\text{No SI unit}" }
                    ]
                },

                // 2. Maximum and Minimum Amplitude of the Superposition Wave
                {
                    section: "Maximum and Minimum Amplitude of the Superposition Wave",
                    name: "Resultant Amplitude of Superposition Wave",
                    formula: "\\[ A' = 2A\\left|\\cos\\left(\\frac{\\pi(d_2 - d_1)}{\\lambda}\\right)\\right| \\]",
                    figure: { img: "image_G12_one/ch2-l2-eq3.png", title: "Superposition Amplitude", caption: "Interference of two harmonic waves producing resultant amplitude." },
                    pdfPage: "Textbook Standards",
                    explanation: "The resultant amplitude A' resulting from the interference of two identical waves, each having amplitude A, depends sinusoidally on the ratio of path difference (d₂ - d₁) to wavelength λ.",
                    conditions: "Superposition of two coherent harmonic waves of identical frequency and equal amplitude A.",
                    variables: [
                        { symbol: "A'", rep: "Resultant amplitude of the superposition wave", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "A", rep: "Amplitude of each individual component wave", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "d_2 - d_1", rep: "Path difference between the two waves", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "\\lambda", rep: "Wavelength of the waves", unit: "Meter", unitSym: "\\mathrm{m}" }
                    ]
                },
                {
                    section: "Maximum and Minimum Amplitude of the Superposition Wave",
                    name: "Maximum and Minimum Amplitude Conditions",
                    formula: "\\[ A'_{\\max} = 2A \\iff \\cos\\left(\\frac{\\pi(d_2 - d_1)}{\\lambda}\\right) = \\pm 1 \\implies d_2 - d_1 = n\\lambda \\quad (n = 0, 1, 2, \\dots) \\]\\[ A'_{\\min} = 0 \\iff \\cos\\left(\\frac{\\pi(d_2 - d_1)}{\\lambda}\\right) = 0 \\implies d_2 - d_1 = \\frac{(2n + 1)\\lambda}{2} \\quad (n = 0, 1, 2, \\dots) \\]",
                    figure: { img: "image_G12_one/ch2-l2-eq4.png", title: "Peak Amplitude Limits", caption: "Maximum amplitude condition reaches 2A constructive crests." },
                    pdfPage: "Textbook Standards",
                    explanation: "Maximum amplitude A'_max = 2A occurs when the cosine argument is an integer multiple of π (cos = ±1), which yields path difference d₂ - d₁ = nλ. Minimum amplitude A'_min = 0 occurs when the cosine argument is an odd half-multiple of π (cos = 0), yielding path difference d₂ - d₁ = (2n + 1)λ / 2.",
                    conditions: "Equal amplitude waves, n = 0, 1, 2, 3, ...",
                    variables: [
                        { symbol: "A'_{\\max}", rep: "Maximum resultant amplitude (2A)", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "A'_{\\min}", rep: "Minimum resultant amplitude (0)", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "A", rep: "Amplitude of each identical wave", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "d_2 - d_1", rep: "Path difference between the two waves", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "\\lambda", rep: "Wavelength", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "n", rep: "Order index (n = 0, 1, 2, 3, ...)", unit: "Dimensionless integer", unitSym: "\\text{No SI unit}" }
                    ]
                },

                // 3. Path Difference in Young's Double-Slit Experiment
                {
                    section: "Path Difference in Young's Double-Slit Experiment",
                    name: "Path Difference at Observation Point P",
                    formula: "\\[ \\Delta d = d_2 - d_1 = d\\sin\\theta \\]",
                    figure: { img: "image_G12_one/ch2-l2-eq5.png", title: "Double-Slit Path Difference", caption: "Path difference Δd = d sin θ for light rays reaching screen point P." },
                    pdfPage: "Textbook Standards",
                    explanation: "In Young's double-slit experiment, light waves from two parallel slits separated by distance d travel to observation point P on a distant screen at angle θ from the central axis. Because the screen distance L is much greater than slit separation d, the two rays are essentially parallel, giving optical path difference Δd = d₂ - d₁ = d sin θ.",
                    conditions: "Distant screen approximation (L ≫ d).",
                    variables: [
                        { symbol: "\\Delta d", rep: "Path difference between the two light waves", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "d_2 - d_1", rep: "Difference in travel distances from slits S₁ and S₂ to point P", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "d", rep: "Separation between the two slits (center-to-center)", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "\\theta", rep: "Angle measured from the central axis to point P", unit: "Radian", unitSym: "\\mathrm{rad}" }
                    ]
                },
                {
                    section: "Path Difference in Young's Double-Slit Experiment",
                    name: "Conditions for Bright and Dark Fringes",
                    formula: "\\[ d\\sin\\theta_{\\text{bright}} = m\\lambda \\quad (m = 0, \\pm 1, \\pm 2, \\dots) \\]\\[ d\\sin\\theta_{\\text{dark}} = \\left(m + \\frac{1}{2}\\right)\\lambda \\quad (m = 0, \\pm 1, \\pm 2, \\dots) \\]",
                    figure: { img: "image_G12_one/ch2-l2-eq6.png", title: "Interference Fringes", caption: "Alternating bright and dark interference fringes produced on screen." },
                    pdfPage: "Textbook Standards",
                    explanation: "Bright fringes occur when constructive interference takes place (d sin θ_bright = mλ). The central maximum corresponds to m = 0 ⇒ θ = 0, and the first-order bright fringes correspond to m = ±1. Dark fringes occur when destructive interference takes place (d sin θ_dark = (m + 1/2)λ), with m = 0, ±1, ±2, ... indexing the dark bands.",
                    conditions: "Coherent monochromatic light; m = 0, ±1, ±2, ... used consistently.",
                    variables: [
                        { symbol: "d", rep: "Separation between the two slits", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "\\theta_{\\text{bright}}", rep: "Angular position of bright fringe from central axis", unit: "Radian", unitSym: "\\mathrm{rad}" },
                        { symbol: "\\theta_{\\text{dark}}", rep: "Angular position of dark fringe from central axis", unit: "Radian", unitSym: "\\mathrm{rad}" },
                        { symbol: "m", rep: "Fringe order index (m = 0, ±1, ±2, ...)", unit: "Dimensionless integer", unitSym: "\\text{No SI unit}" },
                        { symbol: "\\lambda", rep: "Wavelength of light", unit: "Meter", unitSym: "\\mathrm{m}" }
                    ]
                },

                // 4. Bright and Dark Fringes in Interference Patterns
                {
                    section: "Bright and Dark Fringes in Interference Patterns",
                    name: "Position of Bright Fringes on the Screen",
                    formula: "\\[ \\tan\\theta_{\\text{bright}} = \\frac{y_{\\text{bright}}}{L} \\approx \\sin\\theta_{\\text{bright}} = \\frac{m\\lambda}{d} \\implies y_{\\text{bright}} = \\frac{m\\lambda L}{d} \\quad (m = 0, \\pm 1, \\pm 2, \\dots) \\]",
                    figure: { img: "image_G12_one/ch2-l2-eq8.png", title: "Bright Fringe Geometry", caption: "Linear fringe position y on screen at distance D with slit spacing d." },
                    pdfPage: "Textbook Standards",
                    explanation: "The geometric relationship on the viewing screen is tan θ_bright = y_bright / L. For small angles in radians, tan θ ≈ sin θ ≈ θ. Combining this with the bright fringe condition d sin θ_bright = mλ gives y_bright = mλL / d. Here, m = 0 represents the central bright fringe (y = 0), and positive and negative values represent bright fringes on opposite sides of the center.",
                    conditions: "Small-angle approximation (θ ≪ 1 rad, tan θ ≈ sin θ ≈ y / L) when L ≫ y.",
                    variables: [
                        { symbol: "y_{\\text{bright}}", rep: "Distance from central axis to bright fringe on screen", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "m", rep: "Bright fringe order (m = 0, ±1, ±2, ...)", unit: "Dimensionless integer", unitSym: "\\text{No SI unit}" },
                        { symbol: "\\lambda", rep: "Wavelength of light", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "L", rep: "Distance from slits to screen", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "d", rep: "Separation between the two slits", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "\\theta_{\\text{bright}}", rep: "Diffraction/interference angle to bright fringe", unit: "Radian", unitSym: "\\mathrm{rad}" }
                    ]
                },
                {
                    section: "Bright and Dark Fringes in Interference Patterns",
                    name: "Position of Dark Fringes on the Screen",
                    formula: "\\[ \\tan\\theta_{\\text{dark}} = \\frac{y_{\\text{dark}}}{L} \\approx \\sin\\theta_{\\text{dark}} = \\frac{(m + 1/2)\\lambda}{d} \\implies y_{\\text{dark}} = \\frac{\\left(m + \\frac{1}{2}\\right)\\lambda L}{d} \\quad (m = 0, \\pm 1, \\pm 2, \\dots) \\]",
                    figure: { img: "image_G12_one/ch2-l2-eq10.png", title: "Position of Dark Fringes", caption: "Destructive dark fringe positions y = (m + 1/2)λL / d on viewing screen." },
                    pdfPage: "Textbook Standards",
                    explanation: "The geometric relationship is tan θ_dark = y_dark / L. For small angles, tan θ ≈ sin θ. Substituting the dark fringe condition sin θ_dark = (m + 1/2)λ / d yields y_dark = (m + 1/2)λL / d. In the ideal Young's double-slit interference pattern, dark fringes occur exactly halfway between adjacent bright fringes.",
                    conditions: "Small-angle approximation, m = 0, ±1, ±2, ...",
                    variables: [
                        { symbol: "y_{\\text{dark}}", rep: "Distance from central axis to dark fringe on screen", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "m", rep: "Dark fringe order (m = 0, ±1, ±2, ...)", unit: "Dimensionless integer", unitSym: "\\text{No SI unit}" },
                        { symbol: "\\lambda", rep: "Wavelength of light", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "L", rep: "Distance from slits to screen", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "d", rep: "Separation between the two slits", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "\\theta_{\\text{dark}}", rep: "Angle to dark fringe", unit: "Radian", unitSym: "\\mathrm{rad}" }
                    ]
                },
                {
                    section: "Bright and Dark Fringes in Interference Patterns",
                    name: "Fringe Spacing / Fringe Width (Δy)",
                    formula: "\\[ \\Delta y = y_{m+1} - y_m = \\frac{\\lambda L}{d} \\]",
                    figure: { img: "image_G12_one/ch2-l2-eq9.png", title: "Fringe Spacing and Orders", caption: "Equally spaced interference fringes of constant width Δy = λL / d." },
                    pdfPage: "Textbook Standards",
                    explanation: "Fringe spacing Δy is the constant spatial distance between consecutive bright fringes (or consecutive dark fringes) on the screen. Spacing is directly proportional to wavelength λ and screen distance L, and inversely proportional to slit separation d.",
                    conditions: "Uniform medium, flat viewing screen perpendicular to central axis.",
                    variables: [
                        { symbol: "\\Delta y", rep: "Fringe spacing / width between adjacent fringes", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "\\lambda", rep: "Wavelength of light", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "L", rep: "Distance from slits to screen", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "d", rep: "Separation between the two slits", unit: "Meter", unitSym: "\\mathrm{m}" }
                    ]
                },

                // 5. Light Diffraction
                {
                    section: "Light Diffraction",
                    name: "Condition for Minima (Dark Fringes) in Single-Slit Diffraction",
                    formula: "\\[ a\\sin\\theta = m\\lambda \\quad (m = \\pm 1, \\pm 2, \\pm 3, \\dots) \\]",
                    figure: { img: "image_G12_one/ch2-l2-eq11.png", title: "Single-Slit Diffraction Minima", caption: "Diffraction minima condition a sin θ = mλ bounding central maximum." },
                    pdfPage: "Textbook Standards",
                    explanation: "Light diffraction is the bending and spreading of light waves when they encounter an obstacle or pass through a narrow aperture of width a. It is most noticeable when the aperture width or obstacle dimensions are comparable to the wavelength of light (a ~ λ). Diffraction is a general wave phenomenon also observed with sound waves and water waves. For single-slit diffraction, dark fringes (minima) occur at angles satisfying a sin θ = mλ, where m = ±1, ±2, ±3, ... is the order of the minimum. m = 0 is excluded because it corresponds to the central maximum, not a minimum.",
                    conditions: "Single slit of width a, m ≠ 0 (m = ±1, ±2, ±3, ...).",
                    variables: [
                        { symbol: "a", rep: "Width of the single slit", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "\\theta", rep: "Diffraction angle measured from central axis", unit: "Radian", unitSym: "\\mathrm{rad}" },
                        { symbol: "m", rep: "Order of the dark diffraction minimum (non-zero integer)", unit: "Dimensionless integer", unitSym: "\\text{No SI unit}" },
                        { symbol: "\\lambda", rep: "Wavelength of light", unit: "Meter", unitSym: "\\mathrm{m}" }
                    ]
                },
                {
                    section: "Light Diffraction",
                    name: "Position of Dark Fringes on the Screen",
                    formula: "\\[ \\tan\\theta = \\frac{y}{L} \\approx \\sin\\theta = \\frac{m\\lambda}{a} \\implies y_{\\text{dark}} = \\frac{m\\lambda L}{a} \\quad (m = \\pm 1, \\pm 2, \\pm 3, \\dots) \\]\\[ y_{\\text{first dark}} = \\pm\\frac{\\lambda L}{a} \\quad (m = \\pm 1) \\]",
                    figure: { img: "image_G12_one/ch2-l2-eq12.png", title: "Diffraction Fringe Positions", caption: "Screen positions of dark diffraction minima y_dark = mλL / a." },
                    pdfPage: "Textbook Standards",
                    explanation: "From geometry, tan θ = y / L. For small angles in radians, tan θ ≈ sin θ. Using the single-slit condition a sin θ = mλ ⇒ sin θ = mλ / a, the small-angle approximation gives the linear positions of dark fringes on the screen: y_dark = mλL / a for m = ±1, ±2, ±3, ... The first dark fringes occur at y = ±(λL / a).",
                    conditions: "Small-angle approximation, m = ±1, ±2, ±3, ...",
                    variables: [
                        { symbol: "y_{\\text{dark}}", rep: "Vertical position of dark fringe relative to center on screen", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "m", rep: "Order of the dark fringe (m = ±1, ±2, ±3, ...)", unit: "Dimensionless integer", unitSym: "\\text{No SI unit}" },
                        { symbol: "\\lambda", rep: "Wavelength of light", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "L", rep: "Distance from the slit to the screen", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "a", rep: "Width of the single slit", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "\\theta", rep: "Diffraction angle", unit: "Radian", unitSym: "\\mathrm{rad}" }
                    ]
                },
                {
                    section: "Light Diffraction",
                    name: "Width of the Central Diffraction Maximum",
                    formula: "\\[ W = 2y_1 = \\frac{2\\lambda L}{a} \\]",
                    figure: { img: "image_G12_one/ch2-l2-eq11.png", title: "Central Maximum Width", caption: "Central diffraction maximum spanning between first minima: W = 2λL / a." },
                    pdfPage: "Textbook Standards",
                    explanation: "The first minima on either side of the central maximum (m = +1 and m = -1) define its approximate width: W = 2λL / a. The central diffraction maximum is twice as wide as the distance from the center to the first minimum (W = 2y₁).",
                    conditions: "Single-slit diffraction with small-angle approximation.",
                    variables: [
                        { symbol: "W", rep: "Total linear width of the central diffraction maximum on screen", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "\\lambda", rep: "Wavelength of light", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "L", rep: "Distance from the slit to the screen", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "a", rep: "Width of the single slit", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "y_1", rep: "Distance from center to the first minimum (λL / a)", unit: "Meter", unitSym: "\\mathrm{m}" }
                    ]
                }
            ],
            flashcards: [
                { front: "What is the condition for constructive interference in terms of path difference?", back: "\\( d_2 - d_1 = n\\lambda \\quad (n = 0, 1, 2, 3, \\dots) \\), producing maximum amplitude \\( A'_{\\max} = 2A \\)." },
                { front: "What is the condition for destructive interference in terms of path difference?", back: "\\( d_2 - d_1 = \\frac{(2n+1)\\lambda}{2} \\quad (n = 0, 1, 2, 3, \\dots) \\), producing minimum amplitude \\( A'_{\\min} = 0 \\)." },
                { front: "What is the resultant amplitude equation for two identical interfering waves of amplitude A?", back: "\\( A' = 2A\\left|\\cos\\left(\\frac{\\pi(d_2 - d_1)}{\\lambda}\\right)\\right| \\)" },
                { front: "In Young's double-slit experiment, what is the path difference formula at angle θ?", back: "\\( \\Delta d = d_2 - d_1 = d\\sin\\theta \\)" },
                { front: "Where are bright fringes located on the screen in Young's experiment?", back: "\\( y_{\\text{bright}} = \\frac{m\\lambda L}{d} \\quad (m = 0, \\pm 1, \\pm 2, \\dots) \\)" },
                { front: "Where are dark fringes located on the screen in Young's experiment?", back: "\\( y_{\\text{dark}} = \\frac{(m + 1/2)\\lambda L}{d} \\quad (m = 0, \\pm 1, \\pm 2, \\dots) \\)" },
                { front: "What is the condition for dark minima in single-slit diffraction?", back: "\\( a\\sin\\theta = m\\lambda \\implies y_{\\text{dark}} = \\frac{m\\lambda L}{a} \\quad (m = \\pm 1, \\pm 2, \\dots) \\) (m = 0 is excluded)." },
                { front: "What is the width of the central diffraction maximum?", back: "\\( W = \\frac{2\\lambda L}{a} \\) (twice the distance from the center to the first minimum)." }
            ],
            quiz: [
                { question: "Two identical waves of amplitude A interfere. When the path difference is d₂ - d₁ = (2n + 1)λ / 2, the resultant amplitude is:", options: ["2A", "A", "0", "4A"], correctIndex: 2, feedback: "An odd multiple of half-wavelengths causes complete crest-to-trough cancellation, resulting in zero amplitude: A' = 0." },
                { question: "In Young's double-slit experiment, if the slit separation d is doubled, the bright fringe spacing on the screen will:", options: ["Double", "Halve", "Quadruple", "Remain unchanged"], correctIndex: 1, feedback: "Fringe spacing is inversely proportional to slit separation (Δy = λL / d), so doubling d halves the spacing." },
                { question: "Why is m = 0 excluded from the single-slit diffraction dark minima condition a sin θ = mλ?", options: ["Because m = 0 is an imaginary number", "Because θ = 0 corresponds to the central maximum, not a minimum", "Because the slit width becomes zero", "Because light does not pass through the center"], correctIndex: 1, feedback: "At m = 0 (θ = 0), all wavelets across the aperture arrive in phase to produce the bright central maximum, not a minimum." },
                { question: "For a single slit of width a = 0.10 mm with light of wavelength λ = 500 nm on a screen L = 2.0 m away, what is the width of the central diffraction maximum?", options: ["10 mm", "20 mm", "5 mm", "40 mm"], correctIndex: 1, feedback: "W = 2λL / a = 2(5.0 × 10⁻⁷ m)(2.0 m) / (1.0 × 10⁻⁴ m) = 2.0 × 10⁻² m = 20 mm." }
            ]
        },

        // =====================================================================
        // CHAPTER 3 LESSON 1: Magnetism, Induced EMF & Self-Induction (PDF Pages 15 - 28)
        // =====================================================================
        {
            id: "g12-l5",
            gifUrl: "",
            worksheetUrl: "worksheets/ch3-l1-worksheet.pdf",
            ebookUrl: "ebooks/g12-ch3-l1-part1.pdf.pdf",
            ebooks: [
                { title: "Part 1: Magnetism & Magnetic Fields (pp. 79–109)", url: "ebooks/g12-ch3-l1-part1.pdf.pdf", altUrl: "ebooks/g12-ch3-l1-part1.pdf" },
                { title: "Part 2: Induced EMF & Self-Induction (pp. 110–130)", url: "ebooks/g12-ch3-l1-part2.pdf.pdf", altUrl: "ebooks/g12-ch3-l1-part2.pdf" }
            ],
            games: [
                { topic: "Electromagnetic Induction", url: "https://gemini.google.com/share/5bdf25595304" },
                { topic: "RL Circuits & Induction", url: "https://gemini.google.com/share/5bdf25595304" }
            ],
            title: "Chapter 3 Lesson 1: Magnetism, Electromagnetic Induction and Self Induction",
            concepts: [
                "Magnetic Fields of Currents: Straight wire \\( B = \\frac{\\mu_0 I}{2\\pi d} \\), circular coil \\( B = \\frac{\\mu_0 NI}{2R} \\), solenoid \\( B = \\frac{\\mu_0 NI}{l} \\).",
                "Magnetic Permeability: Material permeability \\( \\mu = \\mu_0 \\mu_r \\) with \\( \\mu_0 = 4\\pi\\times 10^{-7}\\,\\mathrm{T\\cdot m/A} \\).",
                "Magnetic Forces: Lorentz force on charge \\( F = |q|vB\\sin\\theta \\), Laplace force on wire \\( F = IlB\\sin\\theta \\), parallel wires \\( F = \\frac{\\mu_0 I_1 I_2 l}{2\\pi a} \\).",
                "Charge in Magnetic Field: Circular trajectory \\( R = \\frac{mv}{|q|B} \\), period \\( T = \\frac{2\\pi m}{|q|B} \\).",
                "Electromagnetic Induction: Magnetic flux \\( \\Phi = NBA\\cos\\theta \\), Faraday's law \\( e = -\\frac{d\\Phi}{dt} \\), motional EMF \\( E = vBl\\sin\\theta \\).",
                "Self-Induction & Solenoid Inductance: \\( \\Phi = LI \\), \\( L = \\mu_0\\frac{N^2 A}{l} \\), self-induced EMF \\( e = -L\\frac{di}{dt} \\).",
                "RL Circuit Transients: Growth \\( i(t) = I_p(1 - e^{-t/\\tau}) \\), decay \\( i(t) = I_p e^{-t/\\tau} \\) with time constant \\( \\tau = \\frac{L}{R} \\).",
                "LC Oscillations: Conservation of energy \\( E_{CL} = \\frac{1}{2}CV^2 + \\frac{1}{2}Li^2 = \\text{constant} \\), frequency \\( \\omega_0 = \\frac{1}{\\sqrt{LC}} \\), \\( T_0 = 2\\pi\\sqrt{LC} \\)."
            ],
            definitions: [
                { term: "Magnetic Field (B)", definition: "Vector field describing magnetic influence of electric currents and magnetized materials.", symbol: "B", unit: "\\mathrm{T}", equation: "B = \\frac{\\mu_0 I}{2\\pi d}" },
                { term: "Lorentz Force", definition: "Deflecting magnetic force acting on a charged particle moving through a magnetic field.", symbol: "F", unit: "\\mathrm{N}", equation: "F = |q|vB\\sin\\theta" },
                { term: "Magnetic Flux", definition: "Surface integral of normal magnetic field component across an enclosed loop area.", symbol: "\\Phi", unit: "\\mathrm{Wb}", equation: "\\Phi = NBA\\cos\\theta" },
                { term: "Faraday's Law", definition: "Induced electromotive force in a circuit equals the negative rate of change of magnetic flux linked through it.", symbol: "e", unit: "\\mathrm{V}", equation: "e = -\\frac{d\\Phi}{dt}" },
                { term: "Self-Inductance (L)", definition: "Property of an electric conductor by which a change in current induces an electromotive force in itself.", symbol: "L", unit: "\\mathrm{H}", equation: "L = \\frac{\\Phi}{I} = \\mu_0\\frac{N^2 A}{l}" },
                { term: "Inductive Time Constant", definition: "Time required for current in an RL circuit to rise to 63% of steady-state value.", symbol: "\\tau", unit: "\\mathrm{s}", equation: "\\tau = \\frac{L}{R}" }
            ],
            examples: [
                {
                    title: "Example 1: Magnetic Field of a Long Straight Wire",
                    question: "A long straight transmission cable carries a DC current of 40 A in air. Calculate the magnetic field induction at a perpendicular distance of 0.080 m (8.0 cm) from the wire axis. (μ₀ = 4π × 10⁻⁷ T·m/A).",
                    given: "Current \\( I = 40\\,\\mathrm{A} \\), Distance \\( d = 0.080\\,\\mathrm{m} \\), \\( \\mu_0 = 4\\pi \\times 10^{-7}\\,\\mathrm{T\\cdot m/A} \\).",
                    find: "Magnetic field induction (\\( B \\)) in \\( \\mathrm{T} \\) and \\( \\mu\\mathrm{T} \\).",
                    equation: "B = \\frac{\\mu_0 I}{2\\pi d}",
                    rearrangement: "B = \\frac{\\mu_0 I}{2\\pi d}",
                    solution: "1. <strong>Formula:</strong> \\( B = \\frac{\\mu_0 I}{2\\pi d} \\)<br>2. <strong>Substitution:</strong><br>\\[ B = \\frac{(4\\pi \\times 10^{-7}\\,\\mathrm{T\\cdot m/A})(40\\,\\mathrm{A})}{2\\pi(0.080\\,\\mathrm{m})} = \\frac{2 \\times 10^{-7} \\times 40}{0.080} \\]<br>3. <strong>Calculation:</strong> \\( B = \\frac{8.0 \\times 10^{-6}}{0.080} = 1.0 \\times 10^{-4}\\,\\mathrm{T} = 100\\,\\mu\\mathrm{T} \\).",
                    finalAnswer: "B = 1.0 \\times 10^{-4}\\,\\mathrm{T} = 100\\,\\mu\\mathrm{T}",
                    explanation: "The Biot-Savart magnetic field forms concentric circles around the wire and weakens inversely with perpendicular distance."
                },
                {
                    title: "Example 2: Magnetic Field at Center of a Circular Coil",
                    question: "A flat circular coil consists of 50 closely wrapped turns with a radius of R = 0.10 m carrying a current of 1.2 A. Find the magnetic field induction at the geometric center of the coil.",
                    given: "Turns \\( N = 50 \\), Radius \\( R = 0.10\\,\\mathrm{m} \\), Current \\( I = 1.2\\,\\mathrm{A} \\), \\( \\mu_0 = 4\\pi \\times 10^{-7}\\,\\mathrm{T\\cdot m/A} \\).",
                    find: "Central magnetic field (\\( B \\)) in \\( \\mathrm{T} \\) and \\( \\mu\\mathrm{T} \\).",
                    equation: "B = \\frac{\\mu_0 N I}{2R}",
                    rearrangement: "B = \\frac{\\mu_0 N I}{2R}",
                    solution: "1. <strong>Formula:</strong> \\( B = \\frac{\\mu_0 N I}{2R} \\)<br>2. <strong>Substitution:</strong><br>\\[ B = \\frac{(4\\pi \\times 10^{-7})(50)(1.2\\,\\mathrm{A})}{2(0.10\\,\\mathrm{m})} = \\frac{2.4\\pi \\times 10^{-5}}{0.20} \\approx 3.77 \\times 10^{-4}\\,\\mathrm{T} \\]<br>3. <strong>Calculation:</strong> \\( B \\approx 377\\,\\mu\\mathrm{T} \\).",
                    finalAnswer: "B \\approx 3.77 \\times 10^{-4}\\,\\mathrm{T} = 377\\,\\mu\\mathrm{T}",
                    explanation: "Each circular turn contributes in phase to the central magnetic field, multiplying the field strength by the number of turns N."
                },
                {
                    title: "Example 3: Magnetic Field Inside an Air-Core Solenoid",
                    question: "An air-core solenoid of axial length 0.40 m has 800 turns carrying a current of 3.0 A. Calculate the magnetic field strength along the axis inside the solenoid core.",
                    given: "Turn count \\( N = 800 \\), Length \\( l = 0.40\\,\\mathrm{m} \\), Current \\( I = 3.0\\,\\mathrm{A} \\), \\( \\mu_0 = 4\\pi \\times 10^{-7}\\,\\mathrm{T\\cdot m/A} \\).",
                    find: "Internal axial magnetic field (\\( B \\)) in \\( \\mathrm{mT} \\).",
                    equation: "B = \\frac{\\mu_0 N I}{l} = \\mu_0 n I",
                    rearrangement: "B = \\mu_0 \\left(\\frac{N}{l}\\right) I",
                    solution: "1. <strong>Turn Density:</strong> \\( n = \\frac{N}{l} = \\frac{800}{0.40\\,\\mathrm{m}} = 2000\\,\\text{turns/m} \\)<br>2. <strong>Field Calculation:</strong><br>\\[ B = (4\\pi \\times 10^{-7}\\,\\mathrm{T\\cdot m/A})(2000\\,\\mathrm{m^{-1}})(3.0\\,\\mathrm{A}) = 4.8\\pi \\times 10^{-3}\\,\\mathrm{T} \\approx 7.54 \\times 10^{-3}\\,\\mathrm{T} = 7.54\\,\\mathrm{mT} \\]",
                    finalAnswer: "B \\approx 7.54\\,\\mathrm{mT} \\; (7.54 \\times 10^{-3}\\,\\mathrm{T})",
                    explanation: "Inside an ideal long solenoid, the magnetic field is nearly uniform and directed axially with magnitude proportional to turn density N/l and current."
                },
                {
                    title: "Example 4: Core Material Permeability Relations",
                    question: "A solenoid is filled with a soft iron core having a relative permeability μ_r = 600. Calculate the absolute permeability μ of the iron core, and determine the enhanced magnetic field if the air-core field was B₀ = 4.0 mT.",
                    given: "Relative permeability \\( \\mu_r = 600 \\), Free space permeability \\( \\mu_0 = 4\\pi \\times 10^{-7}\\,\\mathrm{T\\cdot m/A} \\), Air-core field \\( B_0 = 4.0\\,\\mathrm{mT} \\).",
                    find: "Absolute core permeability (\\( \\mu \\)) and core field (\\( B_{\\text{core}} \\)).",
                    equation: "\\mu = \\mu_0 \\mu_r, \\quad B_{\\text{core}} = \\mu_r B_0",
                    rearrangement: "\\mu = \\mu_0 \\mu_r, \\quad B_{\\text{core}} = \\mu_r B_0",
                    solution: "1. <strong>Absolute Permeability:</strong><br>\\[ \\mu = (4\\pi \\times 10^{-7})(600) = 2.4\\pi \\times 10^{-4}\\,\\mathrm{T\\cdot m/A} \\approx 7.54 \\times 10^{-4}\\,\\mathrm{T\\cdot m/A} \\]<br>2. <strong>Enhanced Magnetic Field:</strong><br>\\[ B_{\\text{core}} = \\mu_r B_0 = 600 \\times (4.0\\,\\mathrm{mT}) = 2400\\,\\mathrm{mT} = 2.40\\,\\mathrm{T} \\]",
                    finalAnswer: "\\mu \\approx 7.54 \\times 10^{-4}\\,\\mathrm{T\\cdot m/A}, \\quad B_{\\text{core}} = 2.40\\,\\mathrm{T}",
                    explanation: "Ferromagnetic cores magnify internal magnetic flux density by the factor μ_r, making electromagnets far more powerful."
                },
                {
                    title: "Example 5: Lorentz Magnetic Force on a Moving Charge",
                    question: "A proton (charge q = +1.6 × 10⁻¹⁹ C) enters a uniform magnetic field of B = 0.50 T with velocity v = 2.0 × 10⁶ m/s at an angle θ = 30° to the field lines. Calculate the magnitude of the deflecting magnetic Lorentz force on the proton.",
                    given: "Charge \\( q = 1.6 \\times 10^{-19}\\,\\mathrm{C} \\), Velocity \\( v = 2.0 \\times 10^6\\,\\mathrm{m/s} \\), Field \\( B = 0.50\\,\\mathrm{T} \\), Angle \\( \\theta = 30^\\circ \\) (\\( \\sin 30^\\circ = 0.50 \\)).",
                    find: "Lorentz force (\\( F \\)) in \\( \\mathrm{N} \\).",
                    equation: "F = |q|vB\\sin\\theta",
                    rearrangement: "F = |q|vB\\sin\\theta",
                    solution: "1. <strong>Formula:</strong> \\( F = |q|vB\\sin\\theta \\)<br>2. <strong>Substitution:</strong><br>\\[ F = (1.6 \\times 10^{-19}\\,\\mathrm{C})(2.0 \\times 10^6\\,\\mathrm{m/s})(0.50\\,\\mathrm{T})(0.50) \\]<br>3. <strong>Calculation:</strong> \\( F = 8.0 \\times 10^{-14}\\,\\mathrm{N} \\).",
                    finalAnswer: "F = 8.0 \\times 10^{-14}\\,\\mathrm{N}",
                    explanation: "The magnetic force acts perpendicular to both velocity and magnetic field, doing no work on the particle while changing its direction."
                },
                {
                    title: "Example 6: Laplace Magnetic Force on a Conductor Wire",
                    question: "A straight copper wire segment of length l = 0.25 m carries a current of 6.0 A perpendicular to a uniform horizontal magnetic field of B = 0.40 T (θ = 90°). Find the Laplace magnetic force on the wire.",
                    given: "Length \\( l = 0.25\\,\\mathrm{m} \\), Current \\( I = 6.0\\,\\mathrm{A} \\), Field \\( B = 0.40\\,\\mathrm{T} \\), Angle \\( \\theta = 90^\\circ \\) (\\( \\sin 90^\\circ = 1.0 \\)).",
                    find: "Laplace force (\\( F \\)) in \\( \\mathrm{N} \\).",
                    equation: "F = IlB\\sin\\theta",
                    rearrangement: "F = IlB\\sin\\theta",
                    solution: "1. <strong>Formula:</strong> \\( F = IlB\\sin\\theta \\)<br>2. <strong>Substitution:</strong><br>\\[ F = (6.0\\,\\mathrm{A})(0.25\\,\\mathrm{m})(0.40\\,\\mathrm{T})(1.0) = 0.60\\,\\mathrm{N} \\]",
                    finalAnswer: "F = 0.60\\,\\mathrm{N}",
                    explanation: "The macroscopic Laplace force is the sum of microscopic Lorentz forces exerted on all mobile charge carriers inside the conductor."
                },
                {
                    title: "Example 7: Mutual Interaction Force Between Parallel Conductors",
                    question: "Two long parallel wires separated by a distance a = 0.050 m carry currents I₁ = 10 A and I₂ = 20 A in the same direction. Calculate the magnetic interaction force per unit length (F/l) and state whether it is attractive or repulsive.",
                    given: "Currents \\( I_1 = 10\\,\\mathrm{A} \\), \\( I_2 = 20\\,\\mathrm{A} \\), Separation \\( a = 0.050\\,\\mathrm{m} \\), \\( \\mu_0 = 4\\pi \\times 10^{-7}\\,\\mathrm{T\\cdot m/A} \\).",
                    find: "Force per meter (\\( F/l \\)) in \\( \\mathrm{N/m} \\) and nature of force.",
                    equation: "\\frac{F}{l} = \\frac{\\mu_0 I_1 I_2}{2\\pi a}",
                    rearrangement: "\\frac{F}{l} = \\frac{\\mu_0 I_1 I_2}{2\\pi a}",
                    solution: "1. <strong>Formula:</strong> \\( \\frac{F}{l} = \\frac{\\mu_0 I_1 I_2}{2\\pi a} \\)<br>2. <strong>Substitution:</strong><br>\\[ \\frac{F}{l} = \\frac{(4\\pi \\times 10^{-7})(10)(20)}{2\\pi(0.050)} = \\frac{2 \\times 10^{-7} \\times 200}{0.050} = \\frac{4.0 \\times 10^{-5}}{0.050} = 8.0 \\times 10^{-4}\\,\\mathrm{N/m} \\]<br>3. <strong>Direction:</strong> Currents in the same direction attract each other.",
                    finalAnswer: "\\frac{F}{l} = 8.0 \\times 10^{-4}\\,\\mathrm{N/m} \\; (\\text{Attractive})",
                    explanation: "Parallel currents in the same direction attract, while anti-parallel currents repel. This formula historically defined the SI ampere."
                },
                {
                    title: "Example 8: Solenoid Turn Geometry & Winding Dimensions",
                    question: "An engineer winds a single-layer solenoid using copper wire of diameter d = 0.80 mm (8.0 × 10⁻⁴ m) on a plastic cylinder of diameter D = 0.040 m and length l = 0.32 m. Determine the number of turns N and the total length of wire l' needed.",
                    given: "Wire diameter \\( d = 8.0 \\times 10^{-4}\\,\\mathrm{m} \\), Solenoid length \\( l = 0.32\\,\\mathrm{m} \\), Cylinder diameter \\( D = 0.040\\,\\mathrm{m} \\), Single layer (\\( x = 1 \\)).",
                    find: "Total turns (\\( N \\)) and unwound wire length (\\( l' \\)) in \\( \\mathrm{m} \\).",
                    equation: "N = \\frac{l}{d}, \\quad l' = \\pi D N",
                    rearrangement: "N = \\frac{l}{d}, \\quad l' = \\pi D N",
                    solution: "1. <strong>Total Turns:</strong><br>\\[ N = \\frac{l}{d} = \\frac{0.32\\,\\mathrm{m}}{8.0 \\times 10^{-4}\\,\\mathrm{m}} = 400\\,\\text{turns} \\]<br>2. <strong>Wire Length:</strong><br>\\[ l' = \\pi D N = \\pi(0.040\\,\\mathrm{m})(400) = 16\\pi\\,\\mathrm{m} \\approx 50.3\\,\\mathrm{m} \\]",
                    finalAnswer: "N = 400\\,\\text{turns}, \\quad l' \\approx 50.3\\,\\mathrm{m}",
                    explanation: "In a closely wound single-layer coil without insulation, turns per length is governed by the bare wire diameter: N = l/d."
                },
                {
                    title: "Example 9: Solenoid DC Winding Resistance",
                    question: "For the wire in Example 8 (length l' = 50.3 m, diameter d = 0.80 mm), calculate the cross-sectional area of the wire and its electrical DC resistance. (Resistivity of copper ρ = 1.7 × 10⁻⁸ Ω·m).",
                    given: "Wire length \\( l' = 50.27\\,\\mathrm{m} \\), Wire diameter \\( d = 8.0 \\times 10^{-4}\\,\\mathrm{m} \\), Resistivity \\( \\rho = 1.7 \\times 10^{-8}\\,\\Omega\\cdot\\mathrm{m} \\).",
                    find: "Wire cross-sectional area (\\( A' \\)) in \\( \\mathrm{m^2} \\) and resistance (\\( R \\)) in \\( \\Omega \\).",
                    equation: "A' = \\frac{\\pi d^2}{4}, \\quad R = \\rho\\frac{l'}{A'}",
                    rearrangement: "A' = \\frac{\\pi d^2}{4}, \\quad R = \\rho\\frac{l'}{A'}",
                    solution: "1. <strong>Cross-Sectional Area:</strong><br>\\[ A' = \\frac{\\pi(8.0 \\times 10^{-4}\\,\\mathrm{m})^2}{4} = \\frac{\\pi(6.4 \\times 10^{-7})}{4} \\approx 5.027 \\times 10^{-7}\\,\\mathrm{m^2} \\]<br>2. <strong>Resistance:</strong><br>\\[ R = (1.7 \\times 10^{-8}\\,\\Omega\\cdot\\mathrm{m}) \\times \\frac{50.27\\,\\mathrm{m}}{5.027 \\times 10^{-7}\\,\\mathrm{m^2}} = 1.7 \\times 10^{-8} \\times 1.0 \\times 10^8 = 1.70\\,\\Omega \\]",
                    finalAnswer: "A' \\approx 5.03 \\times 10^{-7}\\,\\mathrm{m^2}, \\quad R = 1.70\\,\\Omega",
                    explanation: "Winding resistance depends directly on total wire length and inversely on wire cross-sectional area."
                },
                {
                    title: "Example 10: Circular Orbit Radius and Cyclotron Period of an Electron",
                    question: "An electron (m = 9.1 × 10⁻³¹ kg, q = -1.6 × 10⁻¹⁹ C) moves at v = 4.0 × 10⁶ m/s perpendicular to a uniform magnetic field B = 2.0 × 10⁻³ T. Calculate the radius of its circular orbit and its revolution period.",
                    given: "Electron mass \\( m = 9.1 \\times 10^{-31}\\,\\mathrm{kg} \\), Charge magnitude \\( |q| = 1.6 \\times 10^{-19}\\,\\mathrm{C} \\), Speed \\( v = 4.0 \\times 10^6\\,\\mathrm{m/s} \\), Field \\( B = 2.0 \\times 10^{-3}\\,\\mathrm{T} \\).",
                    find: "Orbit radius (\\( R \\)) in \\( \\mathrm{mm} \\) and revolution period (\\( T \\)) in \\( \\mathrm{s} \\).",
                    equation: "R = \\frac{mv}{|q|B}, \\quad T = \\frac{2\\pi m}{|q|B}",
                    rearrangement: "R = \\frac{mv}{|q|B}, \\quad T = \\frac{2\\pi R}{v}",
                    solution: "1. <strong>Orbit Radius:</strong><br>\\[ R = \\frac{(9.1 \\times 10^{-31}\\,\\mathrm{kg})(4.0 \\times 10^6\\,\\mathrm{m/s})}{(1.6 \\times 10^{-19}\\,\\mathrm{C})(2.0 \\times 10^{-3}\\,\\mathrm{T})} = \\frac{3.64 \\times 10^{-24}}{3.2 \\times 10^{-22}} = 1.1375 \\times 10^{-2}\\,\\mathrm{m} \\approx 11.4\\,\\mathrm{mm} \\]<br>2. <strong>Revolution Period:</strong><br>\\[ T = \\frac{2\\pi(9.1 \\times 10^{-31})}{(1.6 \\times 10^{-19})(2.0 \\times 10^{-3})} = \\frac{5.718 \\times 10^{-30}}{3.2 \\times 10^{-22}} \\approx 1.79 \\times 10^{-8}\\,\\mathrm{s} = 17.9\\,\\mathrm{ns} \\]",
                    finalAnswer: "R \\approx 11.4\\,\\mathrm{mm}, \\quad T \\approx 17.9\\,\\mathrm{ns} \\; (1.79 \\times 10^{-8}\\,\\mathrm{s})",
                    explanation: "The Lorentz force supplies the exact centripetal force required for uniform circular motion. The period is independent of speed (the cyclotron principle)."
                },
                {
                    title: "Example 11: Magnetic Flux Linked Through a Coil",
                    question: "A coil with N = 200 turns and rectangular cross-section area A = 0.015 m² is placed in a uniform magnetic field of B = 0.20 T. Find the magnetic flux linking the coil when the field is perpendicular to the loop plane (θ = 0°) and when inclined at 60° to the surface normal.",
                    given: "Turns \\( N = 200 \\), Area \\( A = 0.015\\,\\mathrm{m^2} \\), Field \\( B = 0.20\\,\\mathrm{T} \\).",
                    find: "Flux at \\( \\theta = 0^\\circ \\) (\\( \\Phi_0 \\)) and at \\( \\theta = 60^\\circ \\) (\\( \\Phi_{60} \\)) in \\( \\mathrm{Wb} \\).",
                    equation: "\\Phi = N B A \\cos\\theta",
                    rearrangement: "\\Phi = N B A \\cos\\theta",
                    solution: "1. <strong>Perpendicular (θ = 0°, cos 0° = 1.0):</strong><br>\\[ \\Phi_0 = (200)(0.20\\,\\mathrm{T})(0.015\\,\\mathrm{m^2})(1.0) = 0.60\\,\\mathrm{Wb} \\]<br>2. <strong>Inclined at 60° (cos 60° = 0.50):</strong><br>\\[ \\Phi_{60} = (200)(0.20)(0.015)(0.50) = 0.30\\,\\mathrm{Wb} \\]",
                    finalAnswer: "\\Phi_0 = 0.60\\,\\mathrm{Wb}, \\quad \\Phi_{60} = 0.30\\,\\mathrm{Wb}",
                    explanation: "Magnetic flux measures the total number of field lines threading through the surface, maximizing when the field is aligned with the normal vector."
                },
                {
                    title: "Example 12: Faraday's Law and Average Induced Electromotive Force",
                    question: "The magnetic flux linking a 150-turn coil decreases steadily from Φ₁ = 0.060 Wb to Φ₂ = 0.015 Wb over a time duration of Δt = 0.090 s. Calculate the average induced electromotive force in the coil.",
                    given: "Turns \\( N = 150 \\), Initial flux \\( \\Phi_1 = 0.060\\,\\mathrm{Wb} \\), Final flux \\( \\Phi_2 = 0.015\\,\\mathrm{Wb} \\), Duration \\( \\Delta t = 0.090\\,\\mathrm{s} \\).",
                    find: "Average induced EMF (\\( E_{av} \\)) in \\( \\mathrm{V} \\).",
                    equation: "E_{av} = -N\\frac{\\Delta\\Phi}{\\Delta t} = -N\\frac{\\Phi_2 - \\Phi_1}{\\Delta t}",
                    rearrangement: "E_{av} = -N\\frac{\\Phi_2 - \\Phi_1}{\\Delta t}",
                    solution: "1. <strong>Flux Change:</strong> \\( \\Delta\\Phi = 0.015 - 0.060 = -0.045\\,\\mathrm{Wb} \\)<br>2. <strong>EMF Calculation:</strong><br>\\[ E_{av} = -150 \\times \\left(\\frac{-0.045\\,\\mathrm{Wb}}{0.090\\,\\mathrm{s}}\\right) = -150(-0.50\\,\\mathrm{V}) = +75.0\\,\\mathrm{V} \\]",
                    finalAnswer: "E_{av} = +75.0\\,\\mathrm{V}",
                    explanation: "By Lenz's law, a decreasing magnetic flux induces a positive EMF to drive current in a direction that attempts to sustain the collapsing flux."
                },
                {
                    title: "Example 13: Motional Electromotive Force on a Moving Rod",
                    question: "A metal bar of length l = 0.40 m slides with steady velocity v = 5.0 m/s perpendicular across a uniform magnetic field B = 0.60 T along frictionless rails. Find the induced motional EMF between the bar ends.",
                    given: "Conductor length \\( l = 0.40\\,\\mathrm{m} \\), Velocity \\( v = 5.0\\,\\mathrm{m/s} \\), Field \\( B = 0.60\\,\\mathrm{T} \\), Angle \\( \\theta = 90^\\circ \\).",
                    find: "Induced motional EMF (\\( E \\)) in \\( \\mathrm{V} \\).",
                    equation: "E = v B l \\sin\\theta",
                    rearrangement: "E = v B l",
                    solution: "1. <strong>Formula:</strong> \\( E = v B l \\sin(90^\\circ) = vBl \\)<br>2. <strong>Substitution:</strong><br>\\[ E = (5.0\\,\\mathrm{m/s})(0.60\\,\\mathrm{T})(0.40\\,\\mathrm{m}) = 1.20\\,\\mathrm{V} \\]",
                    finalAnswer: "E = 1.20\\,\\mathrm{V}",
                    explanation: "As the rod sweeps through the field, charge carriers experience a Lorentz deflecting force along the rod length, separating positive and negative charges to generate a voltage."
                },
                {
                    title: "Example 14: Induced Current in a Closed Circuit Loop",
                    question: "The moving rod in Example 13 (generating E = 1.20 V) completes a closed circuit with conductive rails having a total loop resistance of R = 0.80 Ω. Calculate the induced electric current flowing through the circuit.",
                    given: "Induced EMF \\( |E| = 1.20\\,\\mathrm{V} \\), Loop resistance \\( R = 0.80\\,\\Omega \\).",
                    find: "Induced current (\\( I \\)) in \\( \\mathrm{A} \\).",
                    equation: "I = \\frac{|E|}{R}",
                    rearrangement: "I = \\frac{|E|}{R}",
                    solution: "1. <strong>Formula:</strong> \\( I = \\frac{|E|}{R} \\)<br>2. <strong>Substitution:</strong><br>\\[ I = \\frac{1.20\\,\\mathrm{V}}{0.80\\,\\Omega} = 1.50\\,\\mathrm{A} \\]",
                    finalAnswer: "I = 1.50\\,\\mathrm{A}",
                    explanation: "According to Ohm's law, the induced electromotive force acts like a battery, driving current inversely proportional to the circuit's total resistance."
                },
                {
                    title: "Example 15: AC Generator Peak and Instantaneous Induced EMF",
                    question: "An alternating current generator consists of a rectangular armature coil with N = 100 turns, each of area A = 0.020 m², rotating at angular speed ω = 100π rad/s (50 Hz) in a uniform magnetic field B = 0.50 T. Calculate the peak induced EMF (Em) and write the expression for the instantaneous EMF.",
                    given: "Turns \\( N = 100 \\), Loop area \\( A = 0.020\\,\\mathrm{m^2} \\), Field \\( B = 0.50\\,\\mathrm{T} \\), Angular frequency \\( \\omega = 100\\pi\\,\\mathrm{rad/s} \\).",
                    find: "Peak EMF (\\( E_m \\)) in \\( \\mathrm{V} \\) and waveform \\( e(t) \\).",
                    equation: "E_m = N B A \\omega, \\quad e(t) = E_m \\sin(\\omega t)",
                    rearrangement: "E_m = N B A \\omega",
                    solution: "1. <strong>Peak EMF Calculation:</strong><br>\\[ E_m = (100)(0.50\\,\\mathrm{T})(0.020\\,\\mathrm{m^2})(100\\pi\\,\\mathrm{rad/s}) = 1.0 \\times 100\\pi = 100\\pi\\,\\mathrm{V} \\approx 314.16\\,\\mathrm{V} \\]<br>2. <strong>Waveform Expression:</strong><br>\\[ e(t) = 314\\sin(100\\pi t)\\,\\mathrm{V} \\]",
                    finalAnswer: "E_m \\approx 314\\,\\mathrm{V}, \\quad e(t) = 314\\sin(100\\pi t)\\,\\mathrm{V}",
                    explanation: "As the coil rotates, the rate of change of intersecting magnetic flux varies sinusoidally, producing an alternating voltage."
                },
                {
                    title: "Example 16: Self-Inductance from Flux Linkage and Current",
                    question: "When a steady current of I = 4.0 A passes through an air-core inductor coil, a total magnetic flux of Φ = 0.080 Wb links the coil. Calculate the self-inductance L of the inductor coil.",
                    given: "Current \\( I = 4.0\\,\\mathrm{A} \\), Total flux linkage \\( \\Phi = 0.080\\,\\mathrm{Wb} \\).",
                    find: "Self-inductance (\\( L \\)) in henries (\\( \\mathrm{H} \\)) and millihenries (\\( \\mathrm{mH} \\)).",
                    equation: "\\Phi = L I",
                    rearrangement: "L = \\frac{\\Phi}{I}",
                    solution: "1. <strong>Rearranged Formula:</strong> \\( L = \\frac{\\Phi}{I} \\)<br>2. <strong>Substitution:</strong><br>\\[ L = \\frac{0.080\\,\\mathrm{Wb}}{4.0\\,\\mathrm{A}} = 0.020\\,\\mathrm{H} = 20\\,\\mathrm{mH} \\]",
                    finalAnswer: "L = 0.020\\,\\mathrm{H} = 20\\,\\mathrm{mH}",
                    explanation: "Self-inductance measures the ability of a circuit to generate magnetic flux per unit electric current passing through its windings."
                },
                {
                    title: "Example 17: Self-Inductance of an Air-Core and Iron-Core Solenoid",
                    question: "A solenoid of length l = 0.50 m and cross-sectional area A = 2.0 × 10⁻³ m² has N = 1000 turns. Calculate its self-inductance L₀ in air, and its inductance L_core when fitted with an iron core of relative permeability μ_r = 800.",
                    given: "Length \\( l = 0.50\\,\\mathrm{m} \\), Area \\( A = 2.0 \\times 10^{-3}\\,\\mathrm{m^2} \\), Turns \\( N = 1000 \\), \\( \\mu_0 = 4\\pi \\times 10^{-7}\\,\\mathrm{T\\cdot m/A} \\), \\( \\mu_r = 800 \\).",
                    find: "Air-core inductance (\\( L_0 \\)) and iron-core inductance (\\( L_{\\text{core}} \\)) in \\( \\mathrm{H} \\).",
                    equation: "L_0 = \\mu_0\\frac{N^2 A}{l}, \\quad L_{\\text{core}} = \\mu_r L_0",
                    rearrangement: "L_0 = \\mu_0\\frac{N^2 A}{l}, \\quad L_{\\text{core}} = \\mu_r L_0",
                    solution: "1. <strong>Air-Core Inductance:</strong><br>\\[ L_0 = \\frac{(4\\pi \\times 10^{-7})(1000)^2(2.0 \\times 10^{-3}\\,\\mathrm{m^2})}{0.50\\,\\mathrm{m}} = \\frac{8\\pi \\times 10^{-4}}{0.50} \\approx 5.027 \\times 10^{-3}\\,\\mathrm{H} = 5.03\\,\\mathrm{mH} \\]<br>2. <strong>Iron-Core Inductance:</strong><br>\\[ L_{\\text{core}} = \\mu_r L_0 = 800 \\times (5.027 \\times 10^{-3}\\,\\mathrm{H}) \\approx 4.02\\,\\mathrm{H} \\]",
                    finalAnswer: "L_0 \\approx 5.03\\,\\mathrm{mH}, \\quad L_{\\text{core}} \\approx 4.02\\,\\mathrm{H}",
                    explanation: "Self-inductance scales with the square of the turn count (N²) and is multiplied by μ_r when filled with a ferromagnetic core."
                },
                {
                    title: "Example 18: Self-Induced Counter EMF (Back EMF)",
                    question: "An inductor with self-inductance L = 0.25 H carries a current that decreases uniformly from I₁ = 8.0 A to I₂ = 2.0 A in a time interval of Δt = 0.050 s. Calculate the induced back electromotive force.",
                    given: "Inductance \\( L = 0.25\\,\\mathrm{H} \\), Initial current \\( I_1 = 8.0\\,\\mathrm{A} \\), Final current \\( I_2 = 2.0\\,\\mathrm{A} \\), Time duration \\( \\Delta t = 0.050\\,\\mathrm{s} \\).",
                    find: "Self-induced EMF (\\( E_{av} \\)) in \\( \\mathrm{V} \\).",
                    equation: "E_{av} = -L\\frac{\\Delta I}{\\Delta t} = -L\\frac{I_2 - I_1}{\\Delta t}",
                    rearrangement: "E_{av} = -L\\frac{I_2 - I_1}{\\Delta t}",
                    solution: "1. <strong>Current Change:</strong> \\( \\Delta I = I_2 - I_1 = 2.0 - 8.0 = -6.0\\,\\mathrm{A} \\)<br>2. <strong>Rate of Change:</strong> \\( \\frac{\\Delta I}{\\Delta t} = \\frac{-6.0\\,\\mathrm{A}}{0.050\\,\\mathrm{s}} = -120\\,\\mathrm{A/s} \\)<br>3. <strong>Self-Induced EMF:</strong><br>\\[ E_{av} = -L\\left(\\frac{\\Delta I}{\\Delta t}\\right) = -(0.25\\,\\mathrm{H})(-120\\,\\mathrm{A/s}) = +30.0\\,\\mathrm{V} \\]",
                    finalAnswer: "E_{av} = +30.0\\,\\mathrm{V}",
                    explanation: "As current decreases, the inductor opposes the collapse by producing a positive self-induced voltage of +30 V to sustain the current."
                },
                {
                    title: "Example 19: RL Circuit Current Growth and Time Constant",
                    question: "A coil with inductance L = 0.60 H and internal resistance R = 15 Ω is connected across a 30 V DC power supply. Calculate the inductive time constant τ, the steady-state current Ip, and the instantaneous current at t = τ (one time constant after closing the switch).",
                    given: "Inductance \\( L = 0.60\\,\\mathrm{H} \\), Resistance \\( R = 15\\,\\Omega \\), DC voltage \\( E = 30\\,\\mathrm{V} \\). (Note: \\( 1 - e^{-1} \\approx 0.6321 \\)).",
                    find: "Time constant (\\( \\tau \\)), steady-state current (\\( I_p \\)), and current at \\( t = \\tau \\) (\\( i(\\tau) \\)).",
                    equation: "\\tau = \\frac{L}{R}, \\quad I_p = \\frac{E}{R}, \\quad i(t) = I_p(1 - e^{-t/\\tau})",
                    rearrangement: "\\tau = \\frac{L}{R}, \\quad i(\\tau) = I_p(1 - e^{-1}) \\approx 0.632 I_p",
                    solution: "1. <strong>Time Constant:</strong><br>\\[ \\tau = \\frac{L}{R} = \\frac{0.60\\,\\mathrm{H}}{15\\,\\Omega} = 0.040\\,\\mathrm{s} = 40\\,\\mathrm{ms} \\]<br>2. <strong>Steady-State Current:</strong><br>\\[ I_p = \\frac{E}{R} = \\frac{30\\,\\mathrm{V}}{15\\,\\Omega} = 2.0\\,\\mathrm{A} \\]<br>3. <strong>Current at t = τ:</strong><br>\\[ i(\\tau) = 2.0\\,\\mathrm{A}(1 - e^{-1}) = 2.0 \\times 0.6321 \\approx 1.26\\,\\mathrm{A} \\]",
                    finalAnswer: "\\tau = 0.040\\,\\mathrm{s} \\; (40\\,\\mathrm{ms}), \\quad I_p = 2.0\\,\\mathrm{A}, \\quad i(\\tau) \\approx 1.26\\,\\mathrm{A}",
                    explanation: "In an inductive circuit, back EMF slows current rise; after one time constant t = τ, current reaches 63.2% of its maximum steady-state value."
                },
                {
                    title: "Example 20: LC Circuit Natural Frequency and Energy Conservation",
                    question: "An ideal LC tank circuit consists of a capacitor C = 2.5 μF charged to Vm = 20 V connected to an inductor L = 10 mH. Calculate the natural resonant frequency f₀, the total stored electromagnetic energy, and the peak oscillating current Im.",
                    given: "Capacitance \\( C = 2.5 \\times 10^{-6}\\,\\mathrm{F} \\), Inductance \\( L = 10 \\times 10^{-3}\\,\\mathrm{H} = 0.010\\,\\mathrm{H} \\), Peak voltage \\( V_m = 20\\,\\mathrm{V} \\).",
                    find: "Resonant frequency (\\( f_0 \\)) in \\( \\mathrm{Hz} \\), total energy (\\( E_{CL} \\)) in \\( \\mathrm{mJ} \\), and peak current (\\( I_m \\)) in \\( \\mathrm{A} \\).",
                    equation: "f_0 = \\frac{1}{2\\pi\\sqrt{LC}}, \\quad E_{CL} = \\frac{1}{2}CV_m^2 = \\frac{1}{2}LI_m^2",
                    rearrangement: "f_0 = \\frac{1}{2\\pi\\sqrt{LC}}, \\quad I_m = V_m\\sqrt{\\frac{C}{L}}",
                    solution: "1. <strong>Resonant Frequency:</strong><br>\\[ \\sqrt{LC} = \\sqrt{(0.010\\,\\mathrm{H})(2.5 \\times 10^{-6}\\,\\mathrm{F})} = \\sqrt{2.5 \\times 10^{-8}} = 1.581 \\times 10^{-4}\\,\\mathrm{s} \\]<br>\\[ f_0 = \\frac{1}{2\\pi(1.581 \\times 10^{-4})} \\approx \\frac{1}{9.935 \\times 10^{-4}} \\approx 1006.6\\,\\mathrm{Hz} \\approx 1.01\\,\\mathrm{kHz} \\]<br>2. <strong>Total Stored Energy:</strong><br>\\[ E_{CL} = \\frac{1}{2}CV_m^2 = 0.5 \\times (2.5 \\times 10^{-6}\\,\\mathrm{F}) \\times (20\\,\\mathrm{V})^2 = 0.5 \\times 2.5 \\times 10^{-6} \\times 400 = 5.0 \\times 10^{-4}\\,\\mathrm{J} = 0.50\\,\\mathrm{mJ} \\]<br>3. <strong>Peak Current Im:</strong><br>\\[ \\frac{1}{2}LI_m^2 = E_{CL} \\implies I_m = \\sqrt{\\frac{2E_{CL}}{L}} = \\sqrt{\\frac{2(5.0 \\times 10^{-4})}{0.010}} = \\sqrt{0.10} \\approx 0.316\\,\\mathrm{A} \\]",
                    finalAnswer: "f_0 \\approx 1.01\\,\\mathrm{kHz}, \\quad E_{CL} = 0.50\\,\\mathrm{mJ}, \\quad I_m \\approx 0.316\\,\\mathrm{A} \\; (316\\,\\mathrm{mA})",
                    explanation: "Energy is perfectly conserved in an ideal LC circuit, oscillating back and forth between electric energy in the capacitor and magnetic energy in the inductor."
                }
            ],
            equations: [
                {
                    section: "Magnetic Fields of Currents",
                    name: "Magnetic Field of a Long Straight Current Wire",
                    formula: "\\[ B = \\frac{\\mu_0 I}{2\\pi d} \\]",
                    figure: { img: "image_G12_two/ch3-l1-eq1.png", title: "Magnetic Field of Straight Wire", caption: "Concentric circular magnetic field B = μ₀I / (2πd) around a straight wire." },
                    pdfPage: "PDF Page 15, 16 & 18",
                    explanation: "Biot-Savart field producing concentric circular magnetic field lines around a long straight current-carrying wire.",
                    conditions: "Long straight conductor in air/vacuum (l ≫ d).",
                    variables: [
                        { symbol: "B", rep: "Magnetic field induction", unit: "Tesla", unitSym: "\\mathrm{T}" },
                        { symbol: "\\mu_0", rep: "Permeability of free space (4π × 10⁻⁷ T·m/A)", unit: "Tesla meter per ampere", unitSym: "\\mathrm{T\\cdot m/A}" },
                        { symbol: "I", rep: "Electric current", unit: "Ampere", unitSym: "\\mathrm{A}" },
                        { symbol: "d", rep: "Perpendicular distance from wire axis", unit: "Meter", unitSym: "\\mathrm{m}" }
                    ]
                },
                {
                    section: "Magnetic Fields of Currents",
                    name: "Magnetic Field at Center of a Circular Coil",
                    formula: "\\[ B = \\frac{\\mu_0 N I}{2R} \\]",
                    figure: { img: "image_G12_two/ch3-l1-eq2.png", title: "Magnetic Field of Circular Coil", caption: "Axial dipole field B = μ₀NI / (2R) at the center of circular loop." },
                    pdfPage: "PDF Page 15, 16 & 18",
                    explanation: "Magnetic field generated at the geometric center of a flat circular coil consisting of N turns.",
                    conditions: "Flat circular loop in vacuum or air.",
                    variables: [
                        { symbol: "B", rep: "Magnetic field at center of coil", unit: "Tesla", unitSym: "\\mathrm{T}" },
                        { symbol: "\\mu_0", rep: "Permeability of free space", unit: "Tesla meter per ampere", unitSym: "\\mathrm{T\\cdot m/A}" },
                        { symbol: "N", rep: "Number of turns", unit: "Dimensionless integer", unitSym: "\\text{No SI unit}" },
                        { symbol: "I", rep: "Electric current", unit: "Ampere", unitSym: "\\mathrm{A}" },
                        { symbol: "R", rep: "Radius of circular loop", unit: "Meter", unitSym: "\\mathrm{m}" }
                    ]
                },
                {
                    section: "Magnetic Fields of Currents",
                    name: "Magnetic Field Inside an Ideal Solenoid",
                    formula: "\\[ B = \\frac{\\mu_0 N I}{l} = \\mu_0 n I \\]",
                    figure: { img: "image_G12_two/ch3-l1-eq3.png", title: "Magnetic Field of Solenoid", caption: "Uniform axial magnetic field B = μ₀nI inside solenoid core." },
                    pdfPage: "PDF Page 15, 16 & 18",
                    explanation: "Strong, uniform axial magnetic field generated inside the central core of an electric solenoid.",
                    conditions: "Long cylindrical solenoid (l ≫ D) near center axis.",
                    variables: [
                        { symbol: "B", rep: "Internal uniform magnetic field", unit: "Tesla", unitSym: "\\mathrm{T}" },
                        { symbol: "\\mu_0", rep: "Permeability of free space", unit: "Tesla meter per ampere", unitSym: "\\mathrm{T\\cdot m/A}" },
                        { symbol: "N", rep: "Total number of turns", unit: "Dimensionless integer", unitSym: "\\text{No SI unit}" },
                        { symbol: "l", rep: "Axial length of solenoid", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "n", rep: "Turn density (n = N / l)", unit: "Turns per meter", unitSym: "\\mathrm{m^{-1}}" },
                        { symbol: "I", rep: "Current in winding", unit: "Ampere", unitSym: "\\mathrm{A}" }
                    ]
                },
                {
                    section: "Magnetic Fields of Currents",
                    name: "Magnetic Permeability Relations",
                    formula: "\\[ \\mu = \\mu_0 \\mu_r, \\quad \\mu_r = \\frac{\\mu}{\\mu_0}, \\quad \\mu_0 = 4\\pi\\times 10^{-7}\\,\\mathrm{T\\cdot m/A} \\]",
                    pdfPage: "PDF Page 18",
                    explanation: "Total permeability μ scales free space permeability μ₀ by the material's relative permeability μ_r.",
                    conditions: "Linear isotropic magnetic material.",
                    variables: [
                        { symbol: "\\mu", rep: "Absolute permeability of medium", unit: "Tesla meter per ampere", unitSym: "\\mathrm{T\\cdot m/A}" },
                        { symbol: "\\mu_0", rep: "Permeability of free space", unit: "Tesla meter per ampere", unitSym: "\\mathrm{T\\cdot m/A}" },
                        { symbol: "\\mu_r", rep: "Relative permeability of core", unit: "Dimensionless ratio", unitSym: "\\text{No SI unit}" }
                    ]
                },
                {
                    section: "Magnetic Forces",
                    name: "Lorentz Force on a Moving Charged Particle",
                    formula: "\\[ \\vec{F} = q(\\vec{v}\\times\\vec{B}) \\implies F = |q|vB\\sin\\theta \\]",
                    figure: { img: "image_G12_two/ch3-l1-eq4.png", title: "Lorentz Force", caption: "Deflection force F = |q|vB sin θ on a moving charge with right-hand palm rule." },
                    pdfPage: "PDF Page 15, 17 & 18",
                    explanation: "Deflecting magnetic force exerted on a free charge moving with velocity v through a magnetic field B at angle θ.",
                    conditions: "Zero force when particle travels parallel to magnetic field (θ = 0°).",
                    variables: [
                        { symbol: "F", rep: "Lorentz magnetic force", unit: "Newton", unitSym: "\\mathrm{N}" },
                        { symbol: "q", rep: "Electric charge", unit: "Coulomb", unitSym: "\\mathrm{C}" },
                        { symbol: "v", rep: "Particle speed", unit: "Meter per second", unitSym: "\\mathrm{m/s}" },
                        { symbol: "B", rep: "Magnetic field induction", unit: "Tesla", unitSym: "\\mathrm{T}" },
                        { symbol: "\\theta", rep: "Angle between velocity v and magnetic field B", unit: "Radian (or degree)", unitSym: "\\mathrm{rad}" }
                    ]
                },
                {
                    section: "Magnetic Forces",
                    name: "Magnetic Force on Current Wire (Laplace Force)",
                    formula: "\\[ \\vec{F} = I(\\vec{l}\\times\\vec{B}) \\implies F = IlB\\sin\\theta \\]",
                    figure: { img: "image_G12_two/ch3-l1-eq6.png", title: "Laplace Magnetic Force", caption: "Force F = IlB sin θ on a current-carrying wire in a magnetic field." },
                    pdfPage: "PDF Page 15, 16 & 18",
                    explanation: "Magnetic force exerted on a straight wire carrying current I through a uniform magnetic field B.",
                    conditions: "Uniform magnetic field over segment length l.",
                    variables: [
                        { symbol: "F", rep: "Magnetic force on conductor", unit: "Newton", unitSym: "\\mathrm{N}" },
                        { symbol: "I", rep: "Conduction current", unit: "Ampere", unitSym: "\\mathrm{A}" },
                        { symbol: "l", rep: "Length of wire segment in field", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "B", rep: "Magnetic field", unit: "Tesla", unitSym: "\\mathrm{T}" },
                        { symbol: "\\theta", rep: "Angle between current vector l and field B", unit: "Radian (or degree)", unitSym: "\\mathrm{rad}" }
                    ]
                },
                {
                    section: "Magnetic Forces",
                    name: "Force Between Two Parallel Current Wires",
                    formula: "\\[ F_{12} = F_{21} = F = \\frac{\\mu_0 I_1 I_2 l}{2\\pi a} \\]",
                    figure: { img: "image_G12_two/ch3-l1-eq5.png", title: "Parallel Conductor Force", caption: "Mutual interaction force F/l = μ₀I₁I₂ / (2πa) between parallel currents." },
                    pdfPage: "PDF Page 15, 17 & 18",
                    explanation: "Mutual interaction force between parallel wires: attractive for same-direction currents, repulsive for opposite currents.",
                    conditions: "Parallel straight wires in air/vacuum separated by distance a.",
                    variables: [
                        { symbol: "F", rep: "Interaction magnetic force", unit: "Newton", unitSym: "\\mathrm{N}" },
                        { symbol: "\\mu_0", rep: "Permeability of free space", unit: "Tesla meter per ampere", unitSym: "\\mathrm{T\\cdot m/A}" },
                        { symbol: "I_1, I_2", rep: "Currents in wires 1 and 2", unit: "Ampere", unitSym: "\\mathrm{A}" },
                        { symbol: "l", rep: "Length of interacting wire segments", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "a", rep: "Perpendicular separation distance", unit: "Meter", unitSym: "\\mathrm{m}" }
                    ]
                },
                {
                    section: "Solenoid Parameters",
                    name: "Solenoid Turn Geometry & Layer Constraints",
                    formula: "\\[ N = \\frac{l'}{\\pi D} = \\frac{l}{d + 2e}\\cdot x \\]",
                    figure: { img: "image_G12_two/ch3-l1-eq7.png", title: "Solenoid Geometry", caption: "Solenoid winding parameters: turns N = l/(d + 2e)·x and length l' = πDN." },
                    pdfPage: "PDF Page 19",
                    explanation: "Calculates total solenoid turns from wire length l', cylinder diameter D, wire diameter d, insulation thickness e, and layers x.",
                    conditions: "Close-wound solenoid. Single layer without insulation: N = l / d.",
                    variables: [
                        { symbol: "N", rep: "Total turns wound on solenoid", unit: "Dimensionless integer", unitSym: "\\text{No SI unit}" },
                        { symbol: "l'", rep: "Total length of copper wire", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "D", rep: "Diameter of solenoid cylinder", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "l", rep: "Axial length of solenoid", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "d", rep: "Diameter of bare conductor wire", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "e", rep: "Thickness of wire insulation", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "x", rep: "Number of wound wire layers", unit: "Dimensionless integer", unitSym: "\\text{No SI unit}" }
                    ]
                },
                {
                    section: "Solenoid Parameters",
                    name: "Solenoid Wire Resistance & Length",
                    formula: "\\[ l' = \\pi D N, \\quad A' = \\frac{\\pi d^2}{4}, \\quad R = \\rho\\frac{l'}{A'} \\]",
                    pdfPage: "PDF Page 19",
                    explanation: "DC electrical resistance of solenoid winding derived from resistivity ρ, turn count N, and wire geometry.",
                    conditions: "Uniform conductor wire cross-section.",
                    variables: [
                        { symbol: "R", rep: "Solenoid DC winding resistance", unit: "Ohm", unitSym: "\\Omega" },
                        { symbol: "\\rho", rep: "Resistivity of wire material (copper)", unit: "Ohm meter", unitSym: "\\Omega\\cdot\\mathrm{m}" },
                        { symbol: "l'", rep: "Total unwound wire length", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "A'", rep: "Wire cross-sectional area", unit: "Square meter", unitSym: "\\mathrm{m^2}" },
                        { symbol: "d", rep: "Bare wire diameter", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "D", rep: "Solenoid cylinder diameter", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "N", rep: "Total turns", unit: "Dimensionless integer", unitSym: "\\text{No SI unit}" }
                    ]
                },
                {
                    section: "Charged Particle Dynamics",
                    name: "Circular Trajectory in Magnetic Field",
                    formula: "\\[ R = \\frac{mv}{|q|B}, \\quad T = \\frac{2\\pi m}{|q|B} \\]",
                    figure: { img: "image_G12_two/ch3-l1-eq8.png", title: "Cyclotron Circular Orbit", caption: "Circular path radius R = mv / (|q|B) of ions in a magnetic field." },
                    pdfPage: "PDF Page 20",
                    explanation: "Cyclotron radius and orbital period of a charged particle executing uniform circular motion perpendicular to field B.",
                    conditions: "Uniform magnetic field perpendicular to velocity (θ = 90°).",
                    variables: [
                        { symbol: "R", rep: "Orbit radius of circular path", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "m", rep: "Particle mass", unit: "Kilogram", unitSym: "\\mathrm{kg}" },
                        { symbol: "v", rep: "Particle orbital speed", unit: "Meter per second", unitSym: "\\mathrm{m/s}" },
                        { symbol: "q", rep: "Electric charge", unit: "Coulomb", unitSym: "\\mathrm{C}" },
                        { symbol: "B", rep: "Magnetic field induction", unit: "Tesla", unitSym: "\\mathrm{T}" },
                        { symbol: "T", rep: "Cyclotron revolution period", unit: "Second", unitSym: "\\mathrm{s}" }
                    ]
                },
                {
                    section: "Electromagnetic Induction",
                    name: "Magnetic Flux Across Surface",
                    formula: "\\[ \\Phi = N B A \\cos(\\vec{B},\\vec{n}) = N B A \\cos\\theta \\]",
                    figure: { img: "image_G12_two/ch3-l1-eq10.png", title: "Magnetic Flux", caption: "Magnetic flux linkage Φ = BA cos θ across surface area A at angle θ." },
                    pdfPage: "PDF Page 21 & 22",
                    explanation: "Total magnetic flux linking N turns of a loop of area A oriented at angle θ relative to surface normal vector n.",
                    conditions: "Φ_m = BA at θ = 0° (field perpendicular to loop plane); Φ = 0 at θ = 90° (field parallel to plane).",
                    variables: [
                        { symbol: "\\Phi", rep: "Total magnetic flux", unit: "Weber (Tesla square meter)", unitSym: "\\mathrm{Wb} \\; (\\mathrm{T\\cdot m^2})" },
                        { symbol: "N", rep: "Number of loop turns", unit: "Dimensionless integer", unitSym: "\\text{No SI unit}" },
                        { symbol: "B", rep: "Magnetic field induction", unit: "Tesla", unitSym: "\\mathrm{T}" },
                        { symbol: "A", rep: "Area of single loop", unit: "Square meter", unitSym: "\\mathrm{m^2}" },
                        { symbol: "\\theta", rep: "Angle between magnetic field B and normal vector n", unit: "Radian (or degree)", unitSym: "\\mathrm{rad}" }
                    ]
                },
                {
                    section: "Electromagnetic Induction",
                    name: "Change in Magnetic Flux",
                    formula: "\\[ \\Delta\\Phi = \\Phi_f - \\Phi_i \\]",
                    figure: { img: "image_G12_two/ch3-l1-eq11.png", title: "Lenz & Faraday Flux Variation", caption: "Variation in magnetic flux ΔΦ inducing an opposing electromotive force." },
                    pdfPage: "PDF Page 21 & 22",
                    explanation: "Net change in magnetic flux linkage between final and initial states responsible for inducing electromotive force.",
                    conditions: "Time-varying flux or moving loop.",
                    variables: [
                        { symbol: "\\Delta\\Phi", rep: "Change in magnetic flux", unit: "Weber", unitSym: "\\mathrm{Wb}" },
                        { symbol: "\\Phi_f", rep: "Final magnetic flux", unit: "Weber", unitSym: "\\mathrm{Wb}" },
                        { symbol: "\\Phi_i", rep: "Initial magnetic flux", unit: "Weber", unitSym: "\\mathrm{Wb}" }
                    ]
                },
                {
                    section: "Electromagnetic Induction",
                    name: "Faraday's Law of Electromagnetic Induction",
                    formula: "\\[ E_{av} = -\\frac{\\Delta\\Phi}{\\Delta t}, \\quad e(t) = -\\frac{d\\Phi}{dt}, \\quad |e| = \\left|\\frac{d\\Phi}{dt}\\right| \\]",
                    figure: { img: "image_G12_two/ch3-l1-eq12.png", title: "Faraday Induced EMF", caption: "Rate of change of magnetic flux inducing EMF: |E| = N(dΦ/dt)." },
                    pdfPage: "PDF Page 21 & 23",
                    explanation: "Induced electromotive force is equal to the negative rate of change of magnetic flux linked through the circuit (Lenz's Law).",
                    conditions: "Closed or open circuit in dynamic magnetic flux.",
                    variables: [
                        { symbol: "E_{av}", rep: "Average induced electromotive force", unit: "Volt", unitSym: "\\mathrm{V}" },
                        { symbol: "e(t)", rep: "Instantaneous induced electromotive force", unit: "Volt", unitSym: "\\mathrm{V}" },
                        { symbol: "\\Delta\\Phi", rep: "Flux change", unit: "Weber", unitSym: "\\mathrm{Wb}" },
                        { symbol: "\\Delta t", rep: "Time duration", unit: "Second", unitSym: "\\mathrm{s}" },
                        { symbol: "\\frac{d\\Phi}{dt}", rep: "Time derivative of magnetic flux", unit: "Weber per second (Volt)", unitSym: "\\mathrm{Wb/s} \\; (\\mathrm{V})" }
                    ]
                },
                {
                    section: "Electromagnetic Induction",
                    name: "Motional EMF on Moving Conductor",
                    formula: "\\[ E = v B l \\sin(\\vec{v},\\vec{B}) = v B l \\sin\\theta \\]",
                    figure: { img: "image_G12_two/ch3-l1-eq13.png", title: "Motional EMF", caption: "Conductor moving at velocity v cutting field lines: E = vBl sin θ." },
                    pdfPage: "PDF Page 21 & 23",
                    explanation: "Electromotive force induced between the ends of a conducting bar of length l sliding with velocity v through magnetic field B.",
                    conditions: "Straight conductor moving through uniform field.",
                    variables: [
                        { symbol: "E", rep: "Induced motional electromotive force", unit: "Volt", unitSym: "\\mathrm{V}" },
                        { symbol: "v", rep: "Velocity of conductor", unit: "Meter per second", unitSym: "\\mathrm{m/s}" },
                        { symbol: "B", rep: "Magnetic field induction", unit: "Tesla", unitSym: "\\mathrm{T}" },
                        { symbol: "l", rep: "Active length of conductor in field", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "\\theta", rep: "Angle between velocity v and field B", unit: "Radian (or degree)", unitSym: "\\mathrm{rad}" }
                    ]
                },
                {
                    section: "Electromagnetic Induction",
                    name: "Induced Current in Closed Circuit (Ohm's Law)",
                    formula: "\\[ I = \\frac{|E|}{R} \\]",
                    pdfPage: "PDF Page 21 & 23",
                    explanation: "Current driven through a closed circuit loop of electrical resistance R by an induced electromotive force E.",
                    conditions: "Complete closed loop circuit.",
                    variables: [
                        { symbol: "I", rep: "Induced electric current", unit: "Ampere", unitSym: "\\mathrm{A}" },
                        { symbol: "|E|", rep: "Magnitude of induced electromotive force", unit: "Volt", unitSym: "\\mathrm{V}" },
                        { symbol: "R", rep: "Total loop electrical resistance", unit: "Ohm", unitSym: "\\Omega" }
                    ]
                },
                {
                    section: "Electromagnetic Induction",
                    name: "AC Generator Induced EMF Waveform",
                    formula: "\\[ e(t) = N B A \\omega \\sin(\\omega t) = E_m \\sin(\\omega t) \\]",
                    figure: { img: "image_G12_two/ch3-l1-eq14.png", title: "AC Generator Armature", caption: "Rotating armature coil producing alternating EMF: e(t) = E_m sin(ωt)." },
                    pdfPage: "PDF Page 21 & 23",
                    explanation: "Sinusoidal alternating EMF generated by rotating an armature coil of N turns and area A in a uniform magnetic field at angular speed ω.",
                    conditions: "Uniform rotational angular speed ω in uniform magnetic field B.",
                    variables: [
                        { symbol: "e(t)", rep: "Instantaneous generator output EMF", unit: "Volt", unitSym: "\\mathrm{V}" },
                        { symbol: "E_m", rep: "Peak induced EMF (\\(E_m = NBA\\omega\\))", unit: "Volt", unitSym: "\\mathrm{V}" },
                        { symbol: "N", rep: "Armature coil turns", unit: "Dimensionless integer", unitSym: "\\text{No SI unit}" },
                        { symbol: "B", rep: "Magnetic field", unit: "Tesla", unitSym: "\\mathrm{T}" },
                        { symbol: "A", rep: "Armature loop area", unit: "Square meter", unitSym: "\\mathrm{m^2}" },
                        { symbol: "\\omega", rep: "Rotational angular speed", unit: "Radian per second", unitSym: "\\mathrm{rad/s}" },
                        { symbol: "t", rep: "Time", unit: "Second", unitSym: "\\mathrm{s}" }
                    ]
                },
                {
                    section: "Self-Induction",
                    name: "Self-Inductance & Flux Linkage",
                    formula: "\\[ \\Phi = L I \\iff \\Delta\\Phi = L\\Delta I \\]",
                    pdfPage: "PDF Page 24",
                    explanation: "Self-induced magnetic flux linkage through an inductor is directly proportional to its own current, with constant L.",
                    conditions: "Linear core permeability without magnetic saturation.",
                    variables: [
                        { symbol: "\\Phi", rep: "Total self-magnetic flux linkage", unit: "Weber", unitSym: "\\mathrm{Wb}" },
                        { symbol: "L", rep: "Self-inductance", unit: "Henry", unitSym: "\\mathrm{H} \\; (\\mathrm{Wb/A})" },
                        { symbol: "I", rep: "Electric current", unit: "Ampere", unitSym: "\\mathrm{A}" },
                        { symbol: "\\Delta\\Phi", rep: "Flux variation", unit: "Weber", unitSym: "\\mathrm{Wb}" },
                        { symbol: "\\Delta I", rep: "Current variation", unit: "Ampere", unitSym: "\\mathrm{A}" }
                    ]
                },
                {
                    section: "Self-Induction",
                    name: "Inductance of a Cylindrical Solenoid",
                    formula: "\\[ L = \\mu_0\\frac{N^2 A}{l} \\quad (\\text{Air-core}), \\quad L = \\mu\\frac{N^2 A}{l} = \\mu_r \\mu_0\\frac{N^2 A}{l} \\quad (\\text{Magnetic core}) \\]",
                    pdfPage: "PDF Page 24",
                    explanation: "Geometric self-inductance of an air-core or ferromagnetic core solenoid based on turn count N, core area A, and length l.",
                    conditions: "Long cylindrical solenoid with uniform cross section.",
                    variables: [
                        { symbol: "L", rep: "Self-inductance of solenoid", unit: "Henry", unitSym: "\\mathrm{H}" },
                        { symbol: "\\mu_0", rep: "Permeability of free space", unit: "Tesla meter per ampere", unitSym: "\\mathrm{T\\cdot m/A}" },
                        { symbol: "\\mu", rep: "Absolute permeability of iron core", unit: "Tesla meter per ampere", unitSym: "\\mathrm{T\\cdot m/A}" },
                        { symbol: "\\mu_r", rep: "Relative core permeability", unit: "Dimensionless ratio", unitSym: "\\text{No SI unit}" },
                        { symbol: "N", rep: "Number of turns", unit: "Dimensionless integer", unitSym: "\\text{No SI unit}" },
                        { symbol: "A", rep: "Cross-sectional core area", unit: "Square meter", unitSym: "\\mathrm{m^2}" },
                        { symbol: "l", rep: "Axial length of solenoid", unit: "Meter", unitSym: "\\mathrm{m}" }
                    ]
                },
                {
                    section: "Self-Induction",
                    name: "Self-Induced Electromotive Force (Back EMF)",
                    formula: "\\[ E_{av} = -L\\frac{\\Delta I}{\\Delta t}, \\quad e(t) = -L\\frac{di}{dt} \\]",
                    figure: { img: "image_G12_two/ch3-l1-eq15.png", title: "Self-Induced Back EMF", caption: "Self-induced counter voltage e_L = -L(di/dt) opposing current variation." },
                    pdfPage: "PDF Page 24",
                    explanation: "Self-induced counter voltage created in an inductor to oppose any change in current flowing through itself.",
                    conditions: "Dynamic time-varying current.",
                    variables: [
                        { symbol: "e(t)", rep: "Instantaneous self-induced EMF", unit: "Volt", unitSym: "\\mathrm{V}" },
                        { symbol: "E_{av}", rep: "Average self-induced EMF", unit: "Volt", unitSym: "\\mathrm{V}" },
                        { symbol: "L", rep: "Inductance", unit: "Henry", unitSym: "\\mathrm{H}" },
                        { symbol: "\\Delta I", rep: "Current change (\\(I_2 - I_1\\))", unit: "Ampere", unitSym: "\\mathrm{A}" },
                        { symbol: "\\Delta t", rep: "Time interval (\\(t_2 - t_1\\))", unit: "Second", unitSym: "\\mathrm{s}" },
                        { symbol: "\\frac{di}{dt}", rep: "Time rate of change of current", unit: "Ampere per second", unitSym: "\\mathrm{A/s}" }
                    ]
                },
                {
                    section: "RL & LC Circuits",
                    name: "RL Circuit Current Growth (Switch Closed)",
                    formula: "\\[ V_{AB} = Ri + L\\frac{di}{dt}, \\quad i(t) = I_p\\left(1 - e^{-t/\\tau}\\right), \\quad I_p = \\frac{E}{R}, \\quad \\tau = \\frac{L}{R} \\]",
                    figure: { img: "image_G12_two/ch3-l1-eq17.png", title: "RL Current Growth Curve", caption: "Transient exponential current buildup i(t) = I_p(1 - e^{-t/τ})." },
                    pdfPage: "PDF Page 25",
                    explanation: "Exponential buildup of current in an RL circuit upon switch closure; reaches 63% of peak current I_p at t = τ, and 99% at t = 5τ.",
                    conditions: "Series RL circuit connected to DC source of voltage E.",
                    variables: [
                        { symbol: "i(t)", rep: "Instantaneous current at time t", unit: "Ampere", unitSym: "\\mathrm{A}" },
                        { symbol: "I_p", rep: "Steady-state peak DC current (\\(I_p = E/R\\))", unit: "Ampere", unitSym: "\\mathrm{A}" },
                        { symbol: "E", rep: "DC source voltage", unit: "Volt", unitSym: "\\mathrm{V}" },
                        { symbol: "R", rep: "Circuit resistance", unit: "Ohm", unitSym: "\\Omega" },
                        { symbol: "L", rep: "Inductance", unit: "Henry", unitSym: "\\mathrm{H}" },
                        { symbol: "\\tau", rep: "Inductive time constant (\\(\\tau = L/R\\))", unit: "Second", unitSym: "\\mathrm{s}" },
                        { symbol: "t", rep: "Time elapsed since closure", unit: "Second", unitSym: "\\mathrm{s}" }
                    ]
                },
                {
                    section: "RL & LC Circuits",
                    name: "RL Circuit Current Decay (Switch Opened)",
                    formula: "\\[ 0 = Ri + L\\frac{di}{dt}, \\quad i(t) = I_p e^{-t/\\tau}, \\quad \\tau = \\frac{L}{R} \\]",
                    figure: { img: "image_G12_two/ch3-l1-eq18.png", title: "RL Current Decay Curve", caption: "Exponential discharge current decay i(t) = I_p e^{-t/τ}." },
                    pdfPage: "PDF Page 26",
                    explanation: "Exponential decay of current in an RL circuit when the DC voltage supply is removed; drops to 37% of initial value at t = τ and 0 as t → ∞.",
                    conditions: "Discharging RL loop with switch opened/bypassed.",
                    variables: [
                        { symbol: "i(t)", rep: "Instantaneous decay current", unit: "Ampere", unitSym: "\\mathrm{A}" },
                        { symbol: "I_p", rep: "Initial current before opening switch", unit: "Ampere", unitSym: "\\mathrm{A}" },
                        { symbol: "\\tau", rep: "Inductive time constant (\\(L/R\\))", unit: "Second", unitSym: "\\mathrm{s}" },
                        { symbol: "R", rep: "Circuit resistance", unit: "Ohm", unitSym: "\\Omega" },
                        { symbol: "L", rep: "Inductance", unit: "Henry", unitSym: "\\mathrm{H}" },
                        { symbol: "t", rep: "Time elapsed after opening switch", unit: "Second", unitSym: "\\mathrm{s}" }
                    ]
                },
                {
                    section: "RL & LC Circuits",
                    name: "LC Oscillation Energy Conservation",
                    formula: "\\[ E_{CL} = E_C + E_L = \\frac{1}{2}CV^2 + \\frac{1}{2}Li^2 = \\frac{1}{2}CV_m^2 = \\frac{1}{2}L I_m^2 = \\text{constant} \\]",
                    figure: { img: "image_G12_two/ch3-l1-eq19.png", title: "LC Tank Circuit", caption: "Ideal LC circuit exchanging energy between capacitor and inductor." },
                    pdfPage: "PDF Page 27",
                    explanation: "Conservative energy exchange back and forth between electric field energy in capacitor E_C and magnetic field energy in inductor E_L.",
                    conditions: "Ideal LC circuit with zero resistance (R = 0).",
                    variables: [
                        { symbol: "E_{CL}", rep: "Total stored electromagnetic energy", unit: "Joule", unitSym: "\\mathrm{J}" },
                        { symbol: "E_C", rep: "Instantaneous energy stored in capacitor", unit: "Joule", unitSym: "\\mathrm{J}" },
                        { symbol: "E_L", rep: "Instantaneous energy stored in inductor", unit: "Joule", unitSym: "\\mathrm{J}" },
                        { symbol: "C", rep: "Capacitance", unit: "Farad", unitSym: "\\mathrm{F}" },
                        { symbol: "L", rep: "Inductance", unit: "Henry", unitSym: "\\mathrm{H}" },
                        { symbol: "V", rep: "Instantaneous capacitor voltage", unit: "Volt", unitSym: "\\mathrm{V}" },
                        { symbol: "i", rep: "Instantaneous circuit current", unit: "Ampere", unitSym: "\\mathrm{A}" },
                        { symbol: "V_m", rep: "Peak capacitor voltage", unit: "Volt", unitSym: "\\mathrm{V}" },
                        { symbol: "I_m", rep: "Peak inductor current", unit: "Ampere", unitSym: "\\mathrm{A}" }
                    ]
                },
                {
                    section: "RL & LC Circuits",
                    name: "LC Tank Differential Equation & Natural Frequency",
                    formula: "\\[ V_C'' + \\omega_0^2 V_C = 0, \\quad \\omega_0 = \\frac{1}{\\sqrt{LC}}, \\quad T_0 = 2\\pi\\sqrt{LC}, \\quad f_0 = \\frac{1}{2\\pi\\sqrt{LC}} \\]",
                    figure: { img: "image_G12_two/ch3-l1-eq20.png", title: "LC Oscillation Waveforms", caption: "Current and charge sinusoidal oscillations with natural period T = 2π√(LC)." },
                    pdfPage: "PDF Page 28",
                    explanation: "Second-order undamped harmonic oscillator differential equation and its natural resonance frequency in an LC tank.",
                    conditions: "Ideal lossless LC circuit.",
                    variables: [
                        { symbol: "\\omega_0", rep: "Natural angular frequency", unit: "Radian per second", unitSym: "\\mathrm{rad/s}" },
                        { symbol: "T_0", rep: "Natural oscillation period", unit: "Second", unitSym: "\\mathrm{s}" },
                        { symbol: "f_0", rep: "Natural cyclic frequency", unit: "Hertz", unitSym: "\\mathrm{Hz}" },
                        { symbol: "L", rep: "Inductance", unit: "Henry", unitSym: "\\mathrm{H}" },
                        { symbol: "C", rep: "Capacitance", unit: "Farad", unitSym: "\\mathrm{F}" }
                    ]
                },
                {
                    section: "RL & LC Circuits",
                    name: "Instantaneous Voltage, Charge & Current in LC Circuit",
                    formula: "\\[ V_C(t) = V_m\\cos(\\omega_0 t + \\phi_0), \\quad q(t) = q_m\\cos(\\omega_0 t + \\phi_0), \\quad i(t) = -I_m\\sin(\\omega_0 t + \\phi_0) = I_m\\cos\\left(\\omega_0 t + \\phi_0 + \\frac{\\pi}{2}\\right) \\]",
                    pdfPage: "PDF Page 28",
                    explanation: "Harmonic solutions in an LC tank where current leads charge and voltage by 90° (π/2), with q_m = CV_m and I_m = ω₀q_m.",
                    conditions: "Undamped LC oscillations with initial phase φ₀.",
                    variables: [
                        { symbol: "V_C(t)", rep: "Instantaneous capacitor voltage", unit: "Volt", unitSym: "\\mathrm{V}" },
                        { symbol: "q(t)", rep: "Instantaneous capacitor charge", unit: "Coulomb", unitSym: "\\mathrm{C}" },
                        { symbol: "i(t)", rep: "Instantaneous oscillation current", unit: "Ampere", unitSym: "\\mathrm{A}" },
                        { symbol: "V_m", rep: "Peak voltage amplitude (\\(V_m = E\\))", unit: "Volt", unitSym: "\\mathrm{V}" },
                        { symbol: "q_m", rep: "Maximum charge (\\(q_m = CV_m\\))", unit: "Coulomb", unitSym: "\\mathrm{C}" },
                        { symbol: "I_m", rep: "Maximum current (\\(I_m = \\omega_0 q_m\\))", unit: "Ampere", unitSym: "\\mathrm{A}" },
                        { symbol: "\\omega_0", rep: "Natural angular frequency", unit: "Radian per second", unitSym: "\\mathrm{rad/s}" },
                        { symbol: "\\phi_0", rep: "Initial phase angle", unit: "Radian", unitSym: "\\mathrm{rad}" }
                    ]
                }
            ],
            flashcards: [
                { front: "What is the formula for the magnetic field of a solenoid?", back: "\\( B = \\frac{\\mu_0 NI}{l} = \\mu_0 n I \\)" },
                { front: "What is the Lorentz force formula?", back: "\\( F = |q|vB\\sin\\theta \\)" },
                { front: "What is Faraday's Law of induction?", back: "\\( e = -\\frac{d\\Phi}{dt} \\)" },
                { front: "What is the self-inductance of a solenoid?", back: "\\( L = \\mu_0 \\frac{N^2 A}{l} \\)" },
                { front: "What is the time constant of an RL circuit?", back: "\\( \\tau = \\frac{L}{R} \\)" },
                { front: "What is the natural oscillation frequency of an LC circuit?", back: "\\( f_0 = \\frac{1}{2\\pi\\sqrt{LC}} \\)" }
            ],
            quiz: [
                { question: "What is the magnetic force on a charge moving parallel to a magnetic field (θ = 0°)?", options: ["Maximum", "Zero", "qvB", "qvB / 2"], correctIndex: 1, feedback: "F = qvB sin(0°) = 0; no magnetic force acts parallel to the field." },
                { question: "In an RL circuit with DC supply, current reaches approximately what percentage of steady-state value at t = τ?", options: ["50%", "63%", "99%", "37%"], correctIndex: 1, feedback: "At t = τ = L/R, i = I_p(1 - e⁻¹) ≈ 0.632 I_p (63%)." },
                { question: "In an ideal LC circuit, total electromagnetic energy is:", options: ["Dissipated into heat", "Strictly constant", "Continuously increasing", "Zero at resonance"], correctIndex: 1, feedback: "Energy is conserved, oscillating between electric in C and magnetic in L." }
            ]
        },

        // =====================================================================
        // CHAPTER 3 LESSON 2: Alternating Currents (PDF Pages 29 - 39)
        // =====================================================================
        {
            id: "g12-l6",
            gifUrl: "",
            worksheetUrl: "worksheets/ch3-l2-worksheet.pdf",
            ebookUrl: "ebooks/g12-ch3-l2-ebook.pdf.pdf",
            ebooks: [
                { title: "AC Circuits & Electromagnetic Waves (pp. 131–159)", url: "ebooks/g12-ch3-l2-ebook.pdf.pdf", altUrl: "ebooks/g12-ch3-l2-ebook.pdf" }
            ],
            games: [{ topic: "Alternating Current & RLC Circuits", url: "https://gemini.google.com/share/b5177259161a" }],
            title: "Chapter 3 Lesson 2: Alternating Currents",
            concepts: [
                "Sinusoidal AC: Current reversing direction twice per cycle: \\( i(t) = I_m\\sin(\\omega t + \\phi_0) \\).",
                "RMS Values: Root-Mean-Square (effective) values: \\( I = \\frac{I_m}{\\sqrt{2}} \\), \\( V = \\frac{V_m}{\\sqrt{2}} \\).",
                "AC Ohm's Law & Reactance: \\( V = ZI \\); Resistor \\( Z_R = R \\) (in-phase); Capacitor \\( Z_C = \\frac{1}{C\\omega} \\) (current leads by 90°); Inductor \\( Z_L = L\\omega \\) (current lags by 90°).",
                "RLC Series Circuit: Voltage \\( V = \\sqrt{V_R^2 + (V_L - V_C)^2} \\), Impedance \\( Z = \\sqrt{R^2 + (Z_L - Z_C)^2} \\).",
                "Phase Angle & Power Factor: \\( \\tan\\phi = \\frac{Z_L - Z_C}{R} \\), \\( \\cos\\phi = \\frac{R}{Z} \\).",
                "Resonance: When \\( Z_L = Z_C \\implies Z = R \\), \\( \\cos\\phi = 1 \\), \\( \\omega_0 = \\frac{1}{\\sqrt{LC}} \\), producing peak current.",
                "Average Power: \\( P = VI\\cos\\phi = RI^2 \\); reactive components consume zero average power.",
                "Transformers: Power balance \\( P_{e1} = P_{e2} + P_J \\), efficiency \\( \\eta = \\frac{P_{e2}}{P_{e1}} \\), turns ratio \\( K = \\frac{V_2}{V_1} = \\frac{n_2}{n_1} = \\frac{I_1}{I_2} \\)."
            ],
            definitions: [
                { term: "Alternating Current (AC)", definition: "An electric current that reverses its direction periodically with time following a sinusoidal function.", symbol: "i(t)", unit: "\\mathrm{A}", equation: "i = I_m\\sin(\\omega t + \\phi_0)" },
                { term: "RMS Current / Voltage", definition: "Effective value of AC current or voltage producing the identical heating power as a DC current in a resistor.", symbol: "I, V", unit: "\\mathrm{A}, \\mathrm{V}", equation: "I = \\frac{I_m}{\\sqrt{2}}, \\; V = \\frac{V_m}{\\sqrt{2}}" },
                { term: "Impedance (Z)", definition: "Total comprehensive opposition offered by a circuit containing resistance and reactance to the flow of alternating current.", symbol: "Z", unit: "\\Omega", equation: "Z = \\sqrt{R^2 + (Z_L - Z_C)^2}" },
                { term: "Inductive Reactance (Z_L)", definition: "Opposition presented to alternating current by an inductor's self-induced back EMF.", symbol: "Z_L", unit: "\\Omega", equation: "Z_L = L\\omega = 2\\pi f L" },
                { term: "Capacitive Reactance (Z_C)", definition: "Opposition presented to alternating current by the storage and release of charge in a capacitor.", symbol: "Z_C", unit: "\\Omega", equation: "Z_C = \\frac{1}{C\\omega} = \\frac{1}{2\\pi f C}" },
                { term: "Power Factor", definition: "Cosine of the phase angle (cos φ = R/Z), measuring the fraction of apparent power converted into real active power.", symbol: "\\cos\\phi", unit: "No SI unit", equation: "\\cos\\phi = \\frac{R}{Z}" }
            ],
            examples: [
                {
                    title: "Example 1: Sinusoidal AC Waveform Parameters",
                    question: "An alternating current is described by the equation i(t) = 14.14 sin(100π t + π/4), with i in amperes and t in seconds. Find the peak current, RMS current, angular frequency, cyclic frequency, and initial phase angle.",
                    given: "Waveform \\( i(t) = 14.14\\sin(100\\pi t + \\pi/4)\\,\\mathrm{A} \\).",
                    find: "Peak current (\\( I_m \\)), RMS current (\\( I \\)), angular frequency (\\( \\omega \\)), frequency (\\( f \\)), and initial phase (\\( \\phi_0 \\)).",
                    equation: "i(t) = I_m\\sin(\\omega t + \\phi_0), \\quad I = \\frac{I_m}{\\sqrt{2}}, \\quad f = \\frac{\\omega}{2\\pi}",
                    rearrangement: "I = \\frac{I_m}{\\sqrt{2}}, \\quad f = \\frac{\\omega}{2\\pi}",
                    solution: "1. <strong>Peak Current:</strong> \\( I_m = 14.14\\,\\mathrm{A} \\).<br>2. <strong>RMS Current:</strong><br>\\[ I = \\frac{I_m}{\\sqrt{2}} = \\frac{14.14\\,\\mathrm{A}}{1.414} = 10.0\\,\\mathrm{A} \\]<br>3. <strong>Angular Frequency:</strong> \\( \\omega = 100\\pi\\,\\mathrm{rad/s} \\approx 314.16\\,\\mathrm{rad/s} \\).<br>4. <strong>Frequency:</strong> \\( f = \\frac{\\omega}{2\\pi} = \\frac{100\\pi}{2\\pi} = 50\\,\\mathrm{Hz} \\).<br>5. <strong>Initial Phase:</strong> \\( \\phi_0 = \\frac{\\pi}{4}\\,\\mathrm{rad} = 45^\\circ \\).",
                    finalAnswer: "I_m = 14.14\\,\\mathrm{A}, \\; I = 10.0\\,\\mathrm{A}, \\; f = 50\\,\\mathrm{Hz}, \\; \\omega = 100\\pi\\,\\mathrm{rad/s}, \\; \\phi_0 = 45^\\circ",
                    explanation: "Direct matching against standard sinusoidal parameters yields all fundamental alternating current characteristics."
                },
                {
                    title: "Example 2: RMS and Peak Values of AC Voltage and Current",
                    question: "Standard household wall outlets provide an RMS alternating voltage of V = 220 V. Calculate the maximum peak voltage Vm of this supply.",
                    given: "RMS voltage \\( V = 220\\,\\mathrm{V} \\).",
                    find: "Peak voltage (\\( V_m \\)) in \\( \\mathrm{V} \\).",
                    equation: "V = \\frac{V_m}{\\sqrt{2}} \\iff V_m = V\\sqrt{2}",
                    rearrangement: "V_m = V\\sqrt{2}",
                    solution: "1. <strong>Formula:</strong> \\( V_m = V\\sqrt{2} \\)<br>2. <strong>Substitution:</strong><br>\\[ V_m = (220\\,\\mathrm{V}) \\times 1.4142 \\approx 311.1\\,\\mathrm{V} \\]",
                    finalAnswer: "V_m \\approx 311\\,\\mathrm{V} \\; (311.1\\,\\mathrm{V})",
                    explanation: "Although rated at 220 V RMS, the instantaneous potential difference actually peaks at approximately ±311 V twice during each AC cycle."
                },
                {
                    title: "Example 3: AC Ohm's Law and Circuit Current",
                    question: "An AC electrical circuit has a total impedance of Z = 50 Ω connected to an AC voltage supply of V = 120 V (RMS). Determine the RMS current and the peak maximum current flowing in the circuit.",
                    given: "Supply RMS voltage \\( V = 120\\,\\mathrm{V} \\), Total impedance \\( Z = 50\\,\\Omega \\).",
                    find: "RMS current (\\( I \\)) and peak current (\\( I_m \\)) in \\( \\mathrm{A} \\).",
                    equation: "I = \\frac{V}{Z}, \\quad I_m = I\\sqrt{2}",
                    rearrangement: "I = \\frac{V}{Z}, \\quad I_m = \\frac{V_m}{Z}",
                    solution: "1. <strong>RMS Current:</strong><br>\\[ I = \\frac{V}{Z} = \\frac{120\\,\\mathrm{V}}{50\\,\\Omega} = 2.40\\,\\mathrm{A} \\]<br>2. <strong>Peak Current:</strong><br>\\[ I_m = I\\sqrt{2} = (2.40\\,\\mathrm{A})(1.4142) \\approx 3.39\\,\\mathrm{A} \\]",
                    finalAnswer: "I = 2.40\\,\\mathrm{A}, \\quad I_m \\approx 3.39\\,\\mathrm{A}",
                    explanation: "In AC circuits, impedance Z acts as the generalized resistance relating both RMS and peak quantities in Ohm's law."
                },
                {
                    title: "Example 4: AC Circuit with Pure Resistor",
                    question: "An electric heater having pure resistance R = 44 Ω is connected across a 220 V (50 Hz) AC source. Find the circuit impedance, RMS current, and average electrical power consumed.",
                    given: "Resistance \\( R = 44\\,\\Omega \\), Voltage \\( V = 220\\,\\mathrm{V} \\), Frequency \\( f = 50\\,\\mathrm{Hz} \\).",
                    find: "Impedance (\\( Z_R \\)), current (\\( I \\)), and average power (\\( P \\)) in \\( \\mathrm{W} \\).",
                    equation: "Z_R = R, \\quad I = \\frac{V}{R}, \\quad P = VI = RI^2",
                    rearrangement: "I = \\frac{V}{R}, \\quad P = \\frac{V^2}{R}",
                    solution: "1. <strong>Impedance:</strong> \\( Z_R = R = 44\\,\\Omega \\).<br>2. <strong>RMS Current:</strong><br>\\[ I = \\frac{V}{R} = \\frac{220\\,\\mathrm{V}}{44\\,\\Omega} = 5.0\\,\\mathrm{A} \\]<br>3. <strong>Average Power:</strong><br>\\[ P = VI = (220\\,\\mathrm{V})(5.0\\,\\mathrm{A}) = 1100\\,\\mathrm{W} = 1.10\\,\\mathrm{kW} \\]",
                    finalAnswer: "Z_R = 44\\,\\Omega, \\quad I = 5.0\\,\\mathrm{A}, \\quad P = 1.10\\,\\mathrm{kW} \\; (1100\\,\\mathrm{W})",
                    explanation: "In a pure resistor, current and voltage are perfectly in phase (φ = 0°, cos φ = 1), so all electrical energy is converted into thermal Joule heat."
                },
                {
                    title: "Example 5: Capacitive Reactance in AC Circuit",
                    question: "A capacitor with capacitance C = 40 μF is connected to an AC power line operating at frequency f = 50 Hz and voltage V = 220 V. Calculate the capacitive reactance Z_C and the resulting RMS current.",
                    given: "Capacitance \\( C = 40 \\times 10^{-6}\\,\\mathrm{F} \\), Frequency \\( f = 50\\,\\mathrm{Hz} \\), Voltage \\( V = 220\\,\\mathrm{V} \\).",
                    find: "Capacitive reactance (\\( Z_C \\)) in \\( \\Omega \\) and RMS current (\\( I \\)) in \\( \\mathrm{A} \\).",
                    equation: "Z_C = \\frac{1}{C\\omega} = \\frac{1}{2\\pi f C}, \\quad I = \\frac{V}{Z_C}",
                    rearrangement: "Z_C = \\frac{1}{2\\pi f C}, \\quad I = V(2\\pi f C)",
                    solution: "1. <strong>Angular Frequency:</strong> \\( \\omega = 2\\pi(50) = 314.16\\,\\mathrm{rad/s} \\).<br>2. <strong>Capacitive Reactance:</strong><br>\\[ Z_C = \\frac{1}{(314.16\\,\\mathrm{rad/s})(40 \\times 10^{-6}\\,\\mathrm{F})} = \\frac{1}{0.012566} \\approx 79.58\\,\\Omega \\]<br>3. <strong>RMS Current:</strong><br>\\[ I = \\frac{V}{Z_C} = \\frac{220\\,\\mathrm{V}}{79.58\\,\\Omega} \\approx 2.76\\,\\mathrm{A} \\]",
                    finalAnswer: "Z_C \\approx 79.6\\,\\Omega, \\quad I \\approx 2.76\\,\\mathrm{A}",
                    explanation: "In a capacitor, alternating current leads voltage by 90°. Reactance decreases with higher frequency, allowing high-frequency AC to pass more easily."
                },
                {
                    title: "Example 6: Inductive Reactance in AC Circuit",
                    question: "A pure inductor with inductance L = 0.25 H is connected to an AC source of V = 220 V at f = 50 Hz. Calculate its inductive reactance Z_L and the RMS current.",
                    given: "Inductance \\( L = 0.25\\,\\mathrm{H} \\), Frequency \\( f = 50\\,\\mathrm{Hz} \\), Voltage \\( V = 220\\,\\mathrm{V} \\).",
                    find: "Inductive reactance (\\( Z_L \\)) in \\( \\Omega \\) and RMS current (\\( I \\)) in \\( \\mathrm{A} \\).",
                    equation: "Z_L = L\\omega = 2\\pi f L, \\quad I = \\frac{V}{Z_L}",
                    rearrangement: "Z_L = 2\\pi f L, \\quad I = \\frac{V}{Z_L}",
                    solution: "1. <strong>Inductive Reactance:</strong><br>\\[ Z_L = 2\\pi(50\\,\\mathrm{Hz})(0.25\\,\\mathrm{H}) = 25\\pi\\,\\Omega \\approx 78.54\\,\\Omega \\]<br>2. <strong>RMS Current:</strong><br>\\[ I = \\frac{V}{Z_L} = \\frac{220\\,\\mathrm{V}}{78.54\\,\\Omega} \\approx 2.80\\,\\mathrm{A} \\]",
                    finalAnswer: "Z_L \\approx 78.5\\,\\Omega, \\quad I \\approx 2.80\\,\\mathrm{A}",
                    explanation: "In an inductor, current lags voltage by 90°. Self-induced back EMF opposes AC current, with inductive reactance increasing directly with frequency."
                },
                {
                    title: "Example 7: Phasor Voltage Addition in Series RLC",
                    question: "In a series RLC circuit carrying an alternating current, AC voltmeters measure VR = 80 V across the resistor, VL = 100 V across the inductor, and VC = 40 V across the capacitor. Calculate the total RMS source voltage V.",
                    given: "Resistor voltage \\( V_R = 80\\,\\mathrm{V} \\), Inductor voltage \\( V_L = 100\\,\\mathrm{V} \\), Capacitor voltage \\( V_C = 40\\,\\mathrm{V} \\).",
                    find: "Total supply voltage (\\( V \\)) in \\( \\mathrm{V} \\).",
                    equation: "V = \\sqrt{V_R^2 + (V_L - V_C)^2}",
                    rearrangement: "V = \\sqrt{V_R^2 + (V_L - V_C)^2}",
                    solution: "1. <strong>Net Reactive Voltage:</strong> \\( V_L - V_C = 100\\,\\mathrm{V} - 40\\,\\mathrm{V} = 60\\,\\mathrm{V} \\).<br>2. <strong>Phasor Voltage Sum:</strong><br>\\[ V = \\sqrt{(80\\,\\mathrm{V})^2 + (60\\,\\mathrm{V})^2} = \\sqrt{6400 + 3600} = \\sqrt{10{,}000} = 100.0\\,\\mathrm{V} \\]",
                    finalAnswer: "V = 100.0\\,\\mathrm{V}",
                    explanation: "Because VL and VC are 180° out of phase with each other and 90° out of phase with VR, AC voltages must be added vectorially using phasors, not arithmetically."
                },
                {
                    title: "Example 8: Total Impedance of a Series RLC Circuit",
                    question: "A series RLC circuit contains resistance R = 30 Ω, inductance L = 0.20 H, and capacitance C = 50 μF connected to a 50 Hz AC source. Calculate inductive reactance Z_L, capacitive reactance Z_C, and total circuit impedance Z.",
                    given: "Resistance \\( R = 30\\,\\Omega \\), Inductance \\( L = 0.20\\,\\mathrm{H} \\), Capacitance \\( C = 50 \\times 10^{-6}\\,\\mathrm{F} \\), Frequency \\( f = 50\\,\\mathrm{Hz} \\) (\\( \\omega \\approx 314.16\\,\\mathrm{rad/s} \\)).",
                    find: "Reactances (\\( Z_L, Z_C \\)) and total impedance (\\( Z \\)) in \\( \\Omega \\).",
                    equation: "Z = \\sqrt{R^2 + (Z_L - Z_C)^2}, \\quad Z_L = \\omega L, \\quad Z_C = \\frac{1}{\\omega C}",
                    rearrangement: "Z = \\sqrt{R^2 + \\left(\\omega L - \\frac{1}{\\omega C}\\right)^2}",
                    solution: "1. <strong>Inductive Reactance:</strong> \\( Z_L = (314.16)(0.20) \\approx 62.83\\,\\Omega \\).<br>2. <strong>Capacitive Reactance:</strong> \\( Z_C = \\frac{1}{(314.16)(50 \\times 10^{-6})} \\approx 63.66\\,\\Omega \\).<br>3. <strong>Net Reactance:</strong> \\( Z_L - Z_C = 62.83 - 63.66 = -0.83\\,\\Omega \\).<br>4. <strong>Total Impedance:</strong><br>\\[ Z = \\sqrt{30^2 + (-0.83)^2} = \\sqrt{900 + 0.69} \\approx 30.01\\,\\Omega \\]",
                    finalAnswer: "Z_L \\approx 62.8\\,\\Omega, \\quad Z_C \\approx 63.7\\,\\Omega, \\quad Z \\approx 30.0\\,\\Omega",
                    explanation: "When inductive and capacitive reactances nearly cancel (ZL ≈ ZC), total impedance drops to approximately equal the ohmic resistance R alone."
                },
                {
                    title: "Example 9: Phase Angle and Power Factor Calculation",
                    question: "A series RLC circuit has resistance R = 40 Ω, inductive reactance Z_L = 90 Ω, and capacitive reactance Z_C = 60 Ω. Calculate the phase angle φ between voltage and current, and the circuit power factor cos φ.",
                    given: "Resistance \\( R = 40\\,\\Omega \\), Reactance \\( Z_L = 90\\,\\Omega \\), Reactance \\( Z_C = 60\\,\\Omega \\).",
                    find: "Phase angle (\\( \\phi \\)) in degrees and power factor (\\( \\cos\\phi \\)).",
                    equation: "\\tan\\phi = \\frac{Z_L - Z_C}{R}, \\quad Z = \\sqrt{R^2 + (Z_L - Z_C)^2}, \\quad \\cos\\phi = \\frac{R}{Z}",
                    rearrangement: "\\phi = \\tan^{-1}\\left(\\frac{Z_L - Z_C}{R}\\right), \\quad \\cos\\phi = \\frac{R}{Z}",
                    solution: "1. <strong>Phase Angle:</strong><br>\\[ \\tan\\phi = \\frac{90\\,\\Omega - 60\\,\\Omega}{40\\,\\Omega} = \\frac{30}{40} = 0.75 \\implies \\phi = \\tan^{-1}(0.75) \\approx 36.87^\\circ \\]<br>2. <strong>Circuit Impedance:</strong><br>\\[ Z = \\sqrt{40^2 + 30^2} = \\sqrt{1600 + 900} = 50.0\\,\\Omega \\]<br>3. <strong>Power Factor:</strong><br>\\[ \\cos\\phi = \\frac{R}{Z} = \\frac{40\\,\\Omega}{50\\,\\Omega} = 0.80 \\]",
                    finalAnswer: "\\phi \\approx 36.9^\\circ \\; (\\text{Inductive, voltage leads}), \\quad \\cos\\phi = 0.80",
                    explanation: "Because ZL > ZC, the circuit is net inductive with voltage leading current by 36.9°, yielding a power factor of 0.80."
                },
                {
                    title: "Example 10: Series Electrical Resonance and Natural Frequency",
                    question: "A series RLC circuit has L = 0.10 H, C = 10 μF, and R = 20 Ω connected to an AC source of V = 100 V. Find the resonant frequency f₀, the minimum impedance at resonance, and the maximum RMS current.",
                    given: "Inductance \\( L = 0.10\\,\\mathrm{H} \\), Capacitance \\( C = 10 \\times 10^{-6}\\,\\mathrm{F} \\), Resistance \\( R = 20\\,\\Omega \\), Voltage \\( V = 100\\,\\mathrm{V} \\).",
                    find: "Resonant frequency (\\( f_0 \\)) in \\( \\mathrm{Hz} \\), resonance impedance (\\( Z_{\\min} \\)), and maximum current (\\( I_{\\max} \\)) in \\( \\mathrm{A} \\).",
                    equation: "f_0 = \\frac{1}{2\\pi\\sqrt{LC}}, \\quad Z_{\\min} = R, \\quad I_{\\max} = \\frac{V}{R}",
                    rearrangement: "f_0 = \\frac{1}{2\\pi\\sqrt{LC}}, \\quad I_{\\max} = \\frac{V}{R}",
                    solution: "1. <strong>Resonance Frequency:</strong><br>\\[ \\sqrt{LC} = \\sqrt{(0.10)(10 \\times 10^{-6})} = \\sqrt{1.0 \\times 10^{-6}} = 1.0 \\times 10^{-3}\\,\\mathrm{s} \\]<br>\\[ f_0 = \\frac{1}{2\\pi(1.0 \\times 10^{-3})} \\approx \\frac{1}{6.283 \\times 10^{-3}} \\approx 159.2\\,\\mathrm{Hz} \\]<br>2. <strong>Impedance at Resonance:</strong> \\( Z_{\\min} = R = 20\\,\\Omega \\).<br>3. <strong>Maximum Current:</strong><br>\\[ I_{\\max} = \\frac{V}{R} = \\frac{100\\,\\mathrm{V}}{20\\,\\Omega} = 5.0\\,\\mathrm{A} \\]",
                    finalAnswer: "f_0 \\approx 159\\,\\mathrm{Hz}, \\quad Z_{\\min} = 20\\,\\Omega, \\quad I_{\\max} = 5.0\\,\\mathrm{A}",
                    explanation: "At electrical resonance, reactive components cancel completely (ZL = ZC), causing circuit impedance to drop to its minimum R and current to reach its maximum."
                },
                {
                    title: "Example 11: Series RC Circuit Impedance and Leading Phase",
                    question: "A resistor R = 60 Ω and capacitor with reactance Z_C = 80 Ω are connected in series across an AC generator of V = 200 V. Calculate the impedance of the RC circuit, the current, and the phase angle.",
                    given: "Resistance \\( R = 60\\,\\Omega \\), Capacitive reactance \\( Z_C = 80\\,\\Omega \\), Voltage \\( V = 200\\,\\mathrm{V} \\).",
                    find: "Impedance (\\( Z \\)) in \\( \\Omega \\), current (\\( I \\)) in \\( \\mathrm{A} \\), and phase angle (\\( \\phi \\)).",
                    equation: "Z = \\sqrt{R^2 + Z_C^2}, \\quad I = \\frac{V}{Z}, \\quad \\tan\\phi = -\\frac{Z_C}{R}",
                    rearrangement: "Z = \\sqrt{R^2 + Z_C^2}, \\quad \\phi = \\tan^{-1}\\left(-\\frac{Z_C}{R}\\right)",
                    solution: "1. <strong>RC Impedance:</strong><br>\\[ Z = \\sqrt{60^2 + 80^2} = \\sqrt{3600 + 6400} = \\sqrt{10{,}000} = 100.0\\,\\Omega \\]<br>2. <strong>RMS Current:</strong><br>\\[ I = \\frac{V}{Z} = \\frac{200\\,\\mathrm{V}}{100.0\\,\\Omega} = 2.0\\,\\mathrm{A} \\]<br>3. <strong>Phase Angle:</strong><br>\\[ \\tan\\phi = -\\frac{80}{60} = -1.333 \\implies \\phi = \\tan^{-1}(-1.333) \\approx -53.13^\\circ \\]",
                    finalAnswer: "Z = 100.0\\,\\Omega, \\quad I = 2.0\\,\\mathrm{A}, \\quad \\phi \\approx -53.1^\\circ \\; (\\text{Capacitive, current leads})",
                    explanation: "In an RC circuit, the negative phase angle indicates that current leads applied voltage by 53.1°."
                },
                {
                    title: "Example 12: Series RL Circuit Impedance and Lagging Phase",
                    question: "A coil with resistance R = 50 Ω and inductive reactance Z_L = 120 Ω is connected across an AC supply of V = 130 V. Find the RL circuit impedance, the current, and the power factor.",
                    given: "Resistance \\( R = 50\\,\\Omega \\), Inductive reactance \\( Z_L = 120\\,\\Omega \\), Voltage \\( V = 130\\,\\mathrm{V} \\).",
                    find: "Impedance (\\( Z \\)) in \\( \\Omega \\), current (\\( I \\)) in \\( \\mathrm{A} \\), and power factor (\\( \\cos\\phi \\)).",
                    equation: "Z = \\sqrt{R^2 + Z_L^2}, \\quad I = \\frac{V}{Z}, \\quad \\cos\\phi = \\frac{R}{Z}",
                    rearrangement: "Z = \\sqrt{R^2 + Z_L^2}, \\quad \\cos\\phi = \\frac{R}{Z}",
                    solution: "1. <strong>RL Impedance:</strong><br>\\[ Z = \\sqrt{50^2 + 120^2} = \\sqrt{2500 + 14{,}400} = \\sqrt{16{,}900} = 130.0\\,\\Omega \\]<br>2. <strong>RMS Current:</strong><br>\\[ I = \\frac{V}{Z} = \\frac{130\\,\\mathrm{V}}{130.0\\,\\Omega} = 1.0\\,\\mathrm{A} \\]<br>3. <strong>Power Factor:</strong><br>\\[ \\cos\\phi = \\frac{R}{Z} = \\frac{50\\,\\Omega}{130.0\\,\\Omega} \\approx 0.3846 \\]",
                    finalAnswer: "Z = 130.0\\,\\Omega, \\quad I = 1.0\\,\\mathrm{A}, \\quad \\cos\\phi \\approx 0.385",
                    explanation: "In an RL circuit, voltage leads current (current lags); the low power factor indicates high reactive power exchange with the inductor."
                },
                {
                    title: "Example 13: Average Active Real Power in AC",
                    question: "An AC motor connected to a 230 V line draws an RMS current of 5.0 A with a power factor of cos φ = 0.80. Calculate the apparent power, the real active power consumed by the motor, and the equivalent resistance of the windings.",
                    given: "Voltage \\( V = 230\\,\\mathrm{V} \\), Current \\( I = 5.0\\,\\mathrm{A} \\), Power factor \\( \\cos\\phi = 0.80 \\).",
                    find: "Active power (\\( P \\)) in \\( \\mathrm{W} \\) and equivalent resistance (\\( R \\)) in \\( \\Omega \\).",
                    equation: "P = VI\\cos\\phi = RI^2",
                    rearrangement: "P = VI\\cos\\phi, \\quad R = \\frac{P}{I^2}",
                    solution: "1. <strong>Real Active Power:</strong><br>\\[ P = VI\\cos\\phi = (230\\,\\mathrm{V})(5.0\\,\\mathrm{A})(0.80) = 920\\,\\mathrm{W} \\]<br>2. <strong>Equivalent Resistance:</strong><br>\\[ R = \\frac{P}{I^2} = \\frac{920\\,\\mathrm{W}}{(5.0\\,\\mathrm{A})^2} = \\frac{920}{25} = 36.8\\,\\Omega \\]",
                    finalAnswer: "P = 920\\,\\mathrm{W}, \\quad R = 36.8\\,\\Omega",
                    explanation: "Only the active component of power P = VI cos φ does real mechanical work and produces heat; reactive power oscillates uselessly between source and load."
                },
                {
                    title: "Example 14: Transformer Turns Ratio, Power Loss, and Efficiency",
                    question: "A step-down transformer transforms voltage from V₁ = 2400 V on the primary to V₂ = 240 V on the secondary. The primary has n₁ = 5000 turns and draws input power Pe1 = 12 kW. If the secondary delivers Pe2 = 11.4 kW to a load, calculate the transformation turns ratio K, the secondary turns n₂, the Joule power loss PJ, and the transformer efficiency η.",
                    given: "Primary voltage \\( V_1 = 2400\\,\\mathrm{V} \\), Secondary voltage \\( V_2 = 240\\,\\mathrm{V} \\), Primary turns \\( n_1 = 5000 \\), Input power \\( P_{e1} = 12{,}000\\,\\mathrm{W} \\), Output power \\( P_{e2} = 11{,}400\\,\\mathrm{W} \\).",
                    find: "Turns ratio (\\( K \\)), secondary turns (\\( n_2 \\)), power loss (\\( P_J \\)), and efficiency (\\( \\eta \\)).",
                    equation: "K = \\frac{V_2}{V_1} = \\frac{n_2}{n_1}, \\quad P_{e1} = P_{e2} + P_J, \\quad \\eta = \\frac{P_{e2}}{P_{e1}} \\times 100\\%",
                    rearrangement: "n_2 = n_1 \\left(\\frac{V_2}{V_1}\\right), \\quad P_J = P_{e1} - P_{e2}, \\quad \\eta = \\frac{P_{e2}}{P_{e1}} \\times 100\\%",
                    solution: "1. <strong>Turns Ratio:</strong><br>\\[ K = \\frac{V_2}{V_1} = \\frac{240\\,\\mathrm{V}}{2400\\,\\mathrm{V}} = 0.10 \\]<br>2. <strong>Secondary Turns:</strong><br>\\[ n_2 = n_1 \\times K = 5000 \\times 0.10 = 500\\,\\text{turns} \\]<br>3. <strong>Power Loss (Joule Heat):</strong><br>\\[ P_J = P_{e1} - P_{e2} = 12{,}000\\,\\mathrm{W} - 11{,}400\\,\\mathrm{W} = 600\\,\\mathrm{W} \\]<br>4. <strong>Efficiency:</strong><br>\\[ \\eta = \\frac{11{,}400\\,\\mathrm{W}}{12{,}000\\,\\mathrm{W}} \\times 100\\% = 0.95 \\times 100\\% = 95.0\\% \\]",
                    finalAnswer: "K = 0.10, \\quad n_2 = 500\\,\\text{turns}, \\quad P_J = 600\\,\\mathrm{W}, \\quad \\eta = 95.0\\%",
                    explanation: "Real transformers experience minor core and copper winding losses (PJ), achieving high operating efficiencies typically between 95% and 99%."
                }
            ],
            equations: [
                {
                    section: "Sinusoidal AC Basics",
                    name: "Sinusoidal Alternating Current Definition",
                    formula: "\\[ i(t) = I_m\\sin(\\omega t + \\phi_0) \\]",
                    figure: {
                        img: "image_G12_two/ch3-l2-eq1.png",
                        title: "Sinusoidal Alternating Current",
                        caption: "Instantaneous AC waveform i(t) with peak current amplitude i_max."
                    },
                    pdfPage: "PDF Page 29",
                    explanation: "Fundamental waveform for time-varying alternating current reversing direction twice in one cycle.",
                    conditions: "Pure sinusoidal AC steady state.",
                    variables: [
                        { symbol: "i(t)", rep: "Instantaneous current at time t", unit: "Ampere", unitSym: "\\mathrm{A}" },
                        { symbol: "I_m", rep: "Maximum peak current amplitude", unit: "Ampere", unitSym: "\\mathrm{A}" },
                        { symbol: "\\omega", rep: "Angular frequency (\\(2\\pi f\\))", unit: "Radian per second", unitSym: "\\mathrm{rad/s}" },
                        { symbol: "t", rep: "Elapsed time", unit: "Second", unitSym: "\\mathrm{s}" },
                        { symbol: "\\omega t + \\phi", rep: "Instantaneous phase angle", unit: "Radian", unitSym: "\\mathrm{rad}" },
                        { symbol: "\\phi_0", rep: "Initial phase at t = 0", unit: "Radian", unitSym: "\\mathrm{rad}" }
                    ]
                },
                {
                    section: "Sinusoidal AC Basics",
                    name: "RMS (Effective) Current & Voltage Relations",
                    formula: "\\[ I = \\frac{I_m}{\\sqrt{2}} \\approx 0.707 I_m, \\quad V = \\frac{V_m}{\\sqrt{2}} \\approx 0.707 V_m \\]",
                    figure: {
                        img: "image_G12_two/ch3-l2-eq2.png",
                        title: "Sinusoidal Voltage Waveform",
                        caption: "Sinusoidal voltage waveform v(t) with peak amplitude V_max and period T."
                    },
                    pdfPage: "PDF Page 30",
                    explanation: "Root-Mean-Square (effective) values producing the same thermal heating power in a resistor as an equivalent DC current in the same duration.",
                    conditions: "Sinusoidal waveform.",
                    variables: [
                        { symbol: "I", rep: "RMS (effective) AC current", unit: "Ampere", unitSym: "\\mathrm{A}" },
                        { symbol: "I_m", rep: "Peak maximum current", unit: "Ampere", unitSym: "\\mathrm{A}" },
                        { symbol: "V", rep: "RMS (effective) AC voltage", unit: "Volt", unitSym: "\\mathrm{V}" },
                        { symbol: "V_m", rep: "Peak maximum voltage", unit: "Volt", unitSym: "\\mathrm{V}" }
                    ]
                },
                {
                    section: "Sinusoidal AC Basics",
                    name: "Ohm's Law for Alternating Current",
                    formula: "\\[ V = ZI, \\quad V_m = Z I_m \\iff I = \\frac{V}{Z}, \\quad I_m = \\frac{V_m}{Z} \\]",
                    pdfPage: "PDF Page 30",
                    explanation: "Generalized Ohm's law in AC circuits where circuit impedance Z limits both RMS and peak currents.",
                    conditions: "Linear AC circuit in steady state.",
                    variables: [
                        { symbol: "V, V_m", rep: "RMS and peak AC voltages", unit: "Volt", unitSym: "\\mathrm{V}" },
                        { symbol: "I, I_m", rep: "RMS and peak AC currents", unit: "Ampere", unitSym: "\\mathrm{A}" },
                        { symbol: "Z", rep: "Total circuit impedance", unit: "Ohm", unitSym: "\\Omega" }
                    ]
                },
                {
                    section: "Single Components in AC",
                    name: "AC Across a Pure Resistor (R)",
                    formula: "\\[ v(t) = V_m\\sin(\\omega t), \\quad i(t) = I_m\\sin(\\omega t), \\quad Z_R = R, \\quad \\phi = 0 \\]",
                    pdfPage: "PDF Page 31",
                    explanation: "Across a pure resistor, current and voltage are strictly in phase (φ = 0°); impedance equals resistance R.",
                    conditions: "Pure resistive circuit (L = 0, C = 0).",
                    variables: [
                        { symbol: "v(t), i(t)", rep: "Instantaneous voltage and current", unit: "Volt and Ampere", unitSym: "\\mathrm{V, A}" },
                        { symbol: "V_m, I_m", rep: "Peak voltage and current", unit: "Volt and Ampere", unitSym: "\\mathrm{V, A}" },
                        { symbol: "Z_R", rep: "Impedance of resistor", unit: "Ohm", unitSym: "\\Omega" },
                        { symbol: "R", rep: "Resistance", unit: "Ohm", unitSym: "\\Omega" },
                        { symbol: "\\phi", rep: "Phase difference (φ = 0)", unit: "Radian", unitSym: "\\mathrm{rad}" }
                    ]
                },
                {
                    section: "Single Components in AC",
                    name: "AC Across a Pure Capacitor (C)",
                    formula: "\\[ v(t) = V_m\\sin(\\omega t), \\quad i(t) = I_m\\sin\\left(\\omega t + \\frac{\\pi}{2}\\right), \\quad Z_C = \\frac{1}{C\\omega}, \\quad \\phi_i - \\phi_v = +\\frac{\\pi}{2} \\]",
                    pdfPage: "PDF Page 32",
                    explanation: "In a capacitor, alternating current leads voltage by 90° (π/2); capacitive reactance Z_C is inversely proportional to frequency.",
                    conditions: "Ideal capacitor (R = 0, L = 0).",
                    variables: [
                        { symbol: "Z_C", rep: "Capacitive reactance / impedance", unit: "Ohm", unitSym: "\\Omega" },
                        { symbol: "C", rep: "Capacitance", unit: "Farad", unitSym: "\\mathrm{F}" },
                        { symbol: "\\omega", rep: "Angular frequency (\\(2\\pi f\\))", unit: "Radian per second", unitSym: "\\mathrm{rad/s}" },
                        { symbol: "V_m, I_m", rep: "Peak voltage and current", unit: "Volt and Ampere", unitSym: "\\mathrm{V, A}" },
                        { symbol: "\\phi", rep: "Phase difference (+90° lead)", unit: "Radian", unitSym: "\\mathrm{rad}" }
                    ]
                },
                {
                    section: "Single Components in AC",
                    name: "AC Across a Pure Inductor (L)",
                    formula: "\\[ i(t) = I_m\\sin(\\omega t), \\quad v(t) = V_m\\sin\\left(\\omega t + \\frac{\\pi}{2}\\right), \\quad Z_L = L\\omega, \\quad \\phi_i - \\phi_v = -\\frac{\\pi}{2} \\]",
                    pdfPage: "PDF Page 33",
                    explanation: "In an inductor, alternating current lags voltage by 90° (π/2); inductive reactance Z_L is directly proportional to frequency.",
                    conditions: "Ideal inductor (R = 0, C = 0).",
                    variables: [
                        { symbol: "Z_L", rep: "Inductive reactance / impedance", unit: "Ohm", unitSym: "\\Omega" },
                        { symbol: "L", rep: "Inductance", unit: "Henry", unitSym: "\\mathrm{H}" },
                        { symbol: "\\omega", rep: "Angular frequency", unit: "Radian per second", unitSym: "\\mathrm{rad/s}" },
                        { symbol: "V_m, I_m", rep: "Peak voltage and current", unit: "Volt and Ampere", unitSym: "\\mathrm{V, A}" },
                        { symbol: "\\phi", rep: "Phase difference (-90° lag)", unit: "Radian", unitSym: "\\mathrm{rad}" }
                    ]
                },
                {
                    section: "RLC Series Circuit",
                    name: "RLC Series Circuit Phasor Voltage Sum",
                    formula: "\\[ V_m = \\sqrt{V_{Rm}^2 + (V_{Lm} - V_{Cm})^2}, \\quad V = \\sqrt{V_R^2 + (V_L - V_C)^2} \\]",
                    figure: {
                        img: "image_G12_two/ch3-l2-eq5.png",
                        title: "RLC Phasor Voltage Diagram",
                        caption: "Phasor vector addition of voltages in series RLC circuit: V_max makes angle φ with I_max."
                    },
                    pdfPage: "PDF Page 34",
                    explanation: "Fresnel phasor addition combining resistive in-phase voltage orthogonally with net reactive voltage (V_L - V_C).",
                    conditions: "Series RLC circuit.",
                    variables: [
                        { symbol: "V_m, V", rep: "Peak and RMS total circuit voltages", unit: "Volt", unitSym: "\\mathrm{V}" },
                        { symbol: "V_{Rm}, V_R", rep: "Peak and RMS resistor voltages", unit: "Volt", unitSym: "\\mathrm{V}" },
                        { symbol: "V_{Lm}, V_L", rep: "Peak and RMS inductor voltages", unit: "Volt", unitSym: "\\mathrm{V}" },
                        { symbol: "V_{Cm}, V_C", rep: "Peak and RMS capacitor voltages", unit: "Volt", unitSym: "\\mathrm{V}" }
                    ]
                },
                {
                    section: "RLC Series Circuit",
                    name: "RLC Series Circuit Total Impedance",
                    formula: "\\[ Z = \\sqrt{R^2 + (Z_L - Z_C)^2} = \\sqrt{R^2 + \\left(L\\omega - \\frac{1}{C\\omega}\\right)^2} \\]",
                    pdfPage: "PDF Page 34 & 35",
                    explanation: "Total impedance opposing alternating current in a series combination of resistor, inductor, and capacitor.",
                    conditions: "Series AC circuit.",
                    variables: [
                        { symbol: "Z", rep: "Total circuit impedance", unit: "Ohm", unitSym: "\\Omega" },
                        { symbol: "R", rep: "Resistance", unit: "Ohm", unitSym: "\\Omega" },
                        { symbol: "Z_L", rep: "Inductive reactance (\\(L\\omega\\))", unit: "Ohm", unitSym: "\\Omega" },
                        { symbol: "Z_C", rep: "Capacitive reactance (\\(1/(C\\omega)\\))", unit: "Ohm", unitSym: "\\Omega" },
                        { symbol: "L", rep: "Inductance", unit: "Henry", unitSym: "\\mathrm{H}" },
                        { symbol: "C", rep: "Capacitance", unit: "Farad", unitSym: "\\mathrm{F}" },
                        { symbol: "\\omega", rep: "Angular frequency", unit: "Radian per second", unitSym: "\\mathrm{rad/s}" }
                    ]
                },
                {
                    section: "RLC Series Circuit",
                    name: "Phase Angle & Power Factor in RLC Series Circuit",
                    formula: "\\[ \\tan\\phi = \\frac{V_{Lm} - V_{Cm}}{V_{Rm}} = \\frac{Z_L - Z_C}{R} = \\frac{L\\omega - \\frac{1}{C\\omega}}{R}, \\quad \\cos\\phi = \\frac{V_{Rm}}{V_m} = \\frac{R}{Z} \\]",
                    pdfPage: "PDF Page 35",
                    explanation: "Phase angle between applied voltage and current; cos φ represents the power factor of the circuit.",
                    conditions: "If Z_L > Z_C (φ > 0): inductive (voltage leads). If Z_L < Z_C (φ < 0): capacitive (current leads).",
                    variables: [
                        { symbol: "\\phi", rep: "Phase angle between voltage and current", unit: "Radian (or degree)", unitSym: "\\mathrm{rad}" },
                        { symbol: "\\cos\\phi", rep: "Power factor (0 ≤ cos φ ≤ 1)", unit: "Dimensionless ratio", unitSym: "\\text{No SI unit}" },
                        { symbol: "R", rep: "Resistance", unit: "Ohm", unitSym: "\\Omega" },
                        { symbol: "Z", rep: "Total impedance", unit: "Ohm", unitSym: "\\Omega" },
                        { symbol: "Z_L, Z_C", rep: "Inductive and capacitive reactances", unit: "Ohm", unitSym: "\\Omega" }
                    ]
                },
                {
                    section: "Resonance & Special Cases",
                    name: "Electrical Resonance in RLC Series Circuit",
                    formula: "\\[ Z_L = Z_C \\implies Z_{min} = R, \\quad \\phi = 0, \\quad \\cos\\phi = 1, \\quad \\omega_0 = \\frac{1}{\\sqrt{LC}}, \\quad I_{max} = \\frac{V}{R} \\]",
                    pdfPage: "PDF Page 36",
                    explanation: "Occurs when inductive and capacitive reactances cancel out, minimizing impedance to R, making power factor unity, and maximizing current.",
                    conditions: "Resonance condition (Z_L = Z_C).",
                    variables: [
                        { symbol: "\\omega_0", rep: "Resonance angular frequency", unit: "Radian per second", unitSym: "\\mathrm{rad/s}" },
                        { symbol: "f_0", rep: "Resonance cyclic frequency (\\(1/(2\\pi\\sqrt{LC})\\))", unit: "Hertz", unitSym: "\\mathrm{Hz}" },
                        { symbol: "Z_{min}", rep: "Minimum circuit impedance at resonance (\\(Z = R\\))", unit: "Ohm", unitSym: "\\Omega" },
                        { symbol: "I_{max}", rep: "Maximum RMS resonance current", unit: "Ampere", unitSym: "\\mathrm{A}" },
                        { symbol: "L", rep: "Inductance", unit: "Henry", unitSym: "\\mathrm{H}" },
                        { symbol: "C", rep: "Capacitance", unit: "Farad", unitSym: "\\mathrm{F}" }
                    ]
                },
                {
                    section: "Resonance & Special Cases",
                    name: "Special Case: RC Series Circuit",
                    formula: "\\[ V_m = \\sqrt{V_{Rm}^2 + V_{Cm}^2}, \\quad Z = \\sqrt{R^2 + Z_C^2} = \\sqrt{R^2 + \\frac{1}{C^2\\omega^2}}, \\quad \\tan\\phi = -\\frac{Z_C}{R} < 0 \\]",
                    pdfPage: "PDF Page 37",
                    explanation: "In an RC circuit, current leads voltage (φ < 0); inductive reactance is zero.",
                    conditions: "Series circuit without inductor (L = 0).",
                    variables: [
                        { symbol: "V_m", rep: "Peak voltage", unit: "Volt", unitSym: "\\mathrm{V}" },
                        { symbol: "Z", rep: "RC circuit impedance", unit: "Ohm", unitSym: "\\Omega" },
                        { symbol: "R", rep: "Resistance", unit: "Ohm", unitSym: "\\Omega" },
                        { symbol: "Z_C", rep: "Capacitive reactance", unit: "Ohm", unitSym: "\\Omega" },
                        { symbol: "\\phi", rep: "Negative phase angle (current leads)", unit: "Radian", unitSym: "\\mathrm{rad}" }
                    ]
                },
                {
                    section: "Resonance & Special Cases",
                    name: "Special Case: RL Series Circuit",
                    formula: "\\[ V_m = \\sqrt{V_{Rm}^2 + V_{Lm}^2}, \\quad Z = \\sqrt{R^2 + Z_L^2} = \\sqrt{R^2 + L^2\\omega^2}, \\quad \\tan\\phi = +\\frac{Z_L}{R} > 0 \\]",
                    pdfPage: "PDF Page 37",
                    explanation: "In an RL circuit, current lags voltage (φ > 0); capacitive reactance is zero.",
                    conditions: "Series circuit without capacitor (C = 0).",
                    variables: [
                        { symbol: "V_m", rep: "Peak voltage", unit: "Volt", unitSym: "\\mathrm{V}" },
                        { symbol: "Z", rep: "RL circuit impedance", unit: "Ohm", unitSym: "\\Omega" },
                        { symbol: "R", rep: "Resistance", unit: "Ohm", unitSym: "\\Omega" },
                        { symbol: "Z_L", rep: "Inductive reactance", unit: "Ohm", unitSym: "\\Omega" },
                        { symbol: "\\phi", rep: "Positive phase angle (voltage leads)", unit: "Radian", unitSym: "\\mathrm{rad}" }
                    ]
                },
                {
                    section: "AC Power & Transformers",
                    name: "Average AC Power Across Circuit Components",
                    formula: "\\[ P = VI\\cos\\phi \\implies P_R = VI = RI^2 = \\frac{V^2}{R}, \\quad P_L = 0, \\quad P_C = 0, \\quad P_{RLC} = RI^2 \\]",
                    pdfPage: "PDF Page 38",
                    explanation: "Real active power dissipated as heat occurs exclusively across resistance; ideal inductors and capacitors consume zero average power.",
                    conditions: "Pure reactive elements have cos(±π/2) = 0.",
                    variables: [
                        { symbol: "P", rep: "Average real active power", unit: "Watt", unitSym: "\\mathrm{W}" },
                        { symbol: "V", rep: "RMS voltage", unit: "Volt", unitSym: "\\mathrm{V}" },
                        { symbol: "I", rep: "RMS current", unit: "Ampere", unitSym: "\\mathrm{A}" },
                        { symbol: "\\cos\\phi", rep: "Circuit power factor", unit: "Dimensionless ratio", unitSym: "\\text{No SI unit}" },
                        { symbol: "R", rep: "Resistance", unit: "Ohm", unitSym: "\\Omega" },
                        { symbol: "Z", rep: "Impedance", unit: "Ohm", unitSym: "\\Omega" }
                    ]
                },
                {
                    section: "AC Power & Transformers",
                    name: "Transformer Power Balance, Efficiency & Turns Ratio",
                    formula: "\\[ P_{e1} = P_{e2} + P_J \\iff W_{e1} = W_{e2} + W_J, \\quad \\eta = \\frac{P_{e2}}{P_{e1}} < 1, \\quad K = \\frac{V_2}{V_1} = \\frac{n_2}{n_1} = \\frac{I_1}{I_2} \\]",
                    figure: {
                        img: "image_G12_two/ch3-l2-eq10.png",
                        title: "Electrical Transformer",
                        caption: "Primary and secondary coils wound on soft iron core with turns ratio K = V₂/V₁ = n₂/n₁."
                    },
                    pdfPage: "PDF Page 39",
                    explanation: "Power conservation in an electrical transformer with Joule losses; step-up (K > 1, V₂ > V₁) and step-down (K < 1, V₂ < V₁).",
                    conditions: "Iron core transformer; K > 1 (step-up), K < 1 (step-down).",
                    variables: [
                        { symbol: "P_{e1}, P_{e2}", rep: "Primary input and secondary output powers", unit: "Watt", unitSym: "\\mathrm{W}" },
                        { symbol: "P_J", rep: "Joule heat loss in windings (\\(P_J = RI^2\\))", unit: "Watt", unitSym: "\\mathrm{W}" },
                        { symbol: "\\eta", rep: "Transformer efficiency ratio (\\(< 1\\))", unit: "Dimensionless ratio", unitSym: "\\text{No SI unit (or \\%)}" },
                        { symbol: "K", rep: "Transformation turns ratio", unit: "Dimensionless ratio", unitSym: "\\text{No SI unit}" },
                        { symbol: "V_1, V_2", rep: "Primary and secondary RMS voltages", unit: "Volt", unitSym: "\\mathrm{V}" },
                        { symbol: "n_1, n_2", rep: "Primary and secondary turn counts", unit: "Dimensionless integer", unitSym: "\\text{No SI unit}" },
                        { symbol: "I_1, I_2", rep: "Primary and secondary RMS currents", unit: "Ampere", unitSym: "\\mathrm{A}" }
                    ]
                }
            ],
            flashcards: [
                { front: "What are the RMS values of current and voltage?", back: "\\( I = \\frac{I_m}{\\sqrt{2}}, \\quad V = \\frac{V_m}{\\sqrt{2}} \\)" },
                { front: "What is the impedance formula for an RLC series circuit?", back: "\\( Z = \\sqrt{R^2 + (Z_L - Z_C)^2} \\)" },
                { front: "What is the condition for resonance in a series RLC circuit?", back: "\\( Z_L = Z_C \\implies Z = R, \\; \\omega_0 = \\frac{1}{\\sqrt{LC}} \\)" },
                { front: "What is the formula for average power in an AC circuit?", back: "\\( P = VI\\cos\\phi = RI^2 \\)" },
                { front: "What is the turns ratio formula for a transformer?", back: "\\( K = \\frac{V_2}{V_1} = \\frac{n_2}{n_1} = \\frac{I_1}{I_2} \\)" }
            ],
            quiz: [
                { question: "In a pure inductor circuit, what is the phase relation between current and voltage?", options: ["Current leads voltage by 90°", "Current lags voltage by 90°", "In phase", "180° out of phase"], correctIndex: 1, feedback: "In an inductor, current lags voltage by 90° (π/2)." },
                { question: "At resonance in an RLC series circuit, the impedance Z equals:", options: ["Zero", "Resistance R", "Z_L + Z_C", "Infinity"], correctIndex: 1, feedback: "Because Z_L = Z_C, the reactances cancel out, leaving Z = R (minimum impedance)." },
                { question: "What is the average power dissipated in an ideal capacitor over a full AC cycle?", options: ["VI", "0 W", "V² / R", "VI cos(45°)"], correctIndex: 1, feedback: "In an ideal capacitor, current leads by 90°, cos(90°) = 0, so average power is 0 W." }
            ]
        },

        // =====================================================================
        // CHAPTER 4 LESSON 1: Semiconductors & Transistors (Unit 4 Modern Physics)
        // =====================================================================
        {
            id: "g12-ch4-l1",
            gifUrl: "",
            worksheetUrl: "worksheets/ch4-l1-worksheet.pdf",
            ebookUrl: "ebooks/g12-ch4-l1-ebook.pdf",
            games: [{ topic: "Semiconductors & Transistors", url: "https://gemini.google.com/share/9c33959ceba4" }],
            title: "Chapter 4 Lesson 1: Semiconductors & Transistors",
            concepts: [
                "Electrical Resistance and Resistivity: A conductor's resistance depends on its geometry and material: \\( R = \\rho\\frac{l}{A} \\), where \\( \\rho = \\frac{RA}{l} \\) is the electrical resistivity (in \\( \\Omega\\cdot\\mathrm{m} \\)), \\( l \\) is length (in \\( \\mathrm{m} \\)), and \\( A \\) is cross-sectional area (in \\( \\mathrm{m}^2 \\)).",
                "Intrinsic vs. Extrinsic Semiconductors: Pure semiconductors (Silicon and Germanium) are tetravalent (4 valence electrons forming covalent bonds in a crystal lattice). Thermal energy creates electron-hole pairs (intrinsic concentration \\( n_i \\)). Doping adds tiny amounts of impurities to drastically boost conductivity.",
                "N-Type and P-Type Semiconductors: Doping with pentavalent donor atoms (Phosphorus, Arsenic, Antimony with 5 valence electrons) produces an N-type semiconductor where free electrons are majority charge carriers and holes are minority carriers. Doping with trivalent acceptor atoms (Boron, Gallium, Indium with 3 valence electrons) produces a P-type semiconductor where holes (electron vacancies) are majority carriers and electrons are minority carriers.",
                "P–N Junction and Depletion Layer: Joining P-type and N-type regions causes mobile electrons and holes to diffuse across the junction and recombine. This leaves behind uncovered ionized donor atoms (+Q) on the N-side and acceptor atoms (-Q) on the P-side, creating a narrow depletion region devoid of free mobile charge carriers.",
                "Potential Barrier and Biasing: The internal electric field establishes a contact potential barrier (\\( V_{\\text{Ge}} \\approx 0.3\\,\\mathrm{V} \\) for Germanium, \\( V_{\\text{Si}} \\approx 0.7\\,\\mathrm{V} \\) for Silicon). Forward bias (+ to P, - to N) opposes the internal field and narrows the depletion region, allowing heavy current flow once the barrier is overcome. Reverse bias (+ to N, - to P) reinforces the internal field and widens the depletion region, blocking majority carriers and permitting only a tiny minority-carrier leakage current.",
                "Diode Types and Applications: Includes Rectifier Diodes (converting AC to DC), Zener Diodes (maintaining stable voltage in reverse breakdown), Light-Emitting Diodes/LEDs (emitting light via radiative electron-hole recombination), Photodiodes (generating reverse photocurrent under light illumination), Optocouplers (providing optical electrical isolation), Varactor Diodes (acting as voltage-variable capacitors in RF tuning), and Tunnel Diodes (exhibiting quantum tunneling and negative differential resistance).",
                "Transistor Structures and Current Relationships: A Bipolar Junction Transistor (BJT) consists of two back-to-back P-N junctions in NPN or PNP configurations with three terminals: heavily doped Emitter (E), very thin and lightly doped Base (B), and large Collector (C). By Kirchhoff's current law, \\( I_E = I_B + I_C \\).",
                "Current Amplification Factors (α and β): Common-emitter current gain \\( \\beta = \\frac{I_C}{I_B} \\) (typically 20 to 500+) quantifies the amplification of tiny base currents into large collector currents. Common-base current gain \\( \\alpha = \\frac{I_C}{I_E} = \\frac{\\beta}{\\beta + 1} < 1 \\) (typically 0.95 to 0.998) measures collector carrier collection efficiency. Transistors operate in active mode (amplification), saturation (fully on switch), and cutoff (fully off switch). Field-effect devices include JFETs and MOSFETs (such as enhancement-type MOSFETs, which conduct when gate voltage exceeds threshold \\( V_{GS} > V_{th} \\)).",
                "Integrated Circuits (ICs): Monolithic miniaturized electronic circuits fabricated on a single microscopic semiconductor die (usually silicon). ICs combine thousands to billions of transistors, diodes, resistors, and capacitors interconnected via photolithography, diffusion, ion implantation, and metallization to power microprocessors, memory chips, and control systems."
            ],
            definitions: [
                { term: "Electrical Resistance", definition: "The opposition that a substance or conductor presents to the flow of electric current.", symbol: "R", unit: "\\Omega", equation: "R = \\rho\\frac{l}{A}" },
                { term: "Electrical Resistivity", definition: "An intrinsic property of a material measuring its fundamental opposition to electric current per unit length and cross-sectional area.", symbol: "\\rho", unit: "\\Omega\\cdot\\mathrm{m}", equation: "\\rho = \\frac{RA}{l}" },
                { term: "Intrinsic Semiconductor", definition: "A pure, undoped crystalline semiconductor (such as pure Si or Ge) where electrical conduction arises solely from thermally generated electron-hole pairs.", symbol: "n_i", unit: "\\mathrm{m^{-3}}", equation: "n_e = n_h = n_i" },
                { term: "Doping", definition: "The controlled addition of pentavalent or trivalent impurity atoms into an intrinsic semiconductor crystal to greatly increase conductivity.", symbol: "\\text{Doping}", unit: "No SI unit", equation: "n_e \\approx N_D \\quad\\text{or}\\quad n_h \\approx N_A" },
                { term: "N-Type Semiconductor", definition: "An extrinsic semiconductor doped with pentavalent donor impurities where conduction is dominated by negative free electrons (majority carriers).", symbol: "\\text{N-type}", unit: "No SI unit", equation: "n_e \\gg n_h" },
                { term: "P-Type Semiconductor", definition: "An extrinsic semiconductor doped with trivalent acceptor impurities where conduction is dominated by positive holes (majority carriers).", symbol: "\\text{P-type}", unit: "No SI unit", equation: "n_h \\gg n_e" },
                { term: "P–N Junction", definition: "The metallurgical boundary interface formed between adjacent P-type and N-type regions within a single semiconductor crystal.", symbol: "\\text{P-N}", unit: "No SI unit", equation: "V_0 \\approx 0.7\\,\\mathrm{V} \\; (\\text{Si})" },
                { term: "Depletion Region", definition: "The narrow zone adjacent to a P-N junction that is depleted of mobile charge carriers, containing only fixed ionized donor and acceptor atoms.", symbol: "W_{\\text{dep}}", unit: "\\mathrm{m}", equation: "\\text{Width: } W_{\\text{dep}}" },
                { term: "Potential Barrier (Contact Potential)", definition: "The internal electrostatic potential difference established across a P-N junction depletion region that resists further majority-carrier diffusion.", symbol: "V_0", unit: "\\mathrm{V}", equation: "V_{\\text{Ge}} \\approx 0.3\\,\\mathrm{V}, \\quad V_{\\text{Si}} \\approx 0.7\\,\\mathrm{V}" },
                { term: "Forward Bias", definition: "Applying external voltage with positive terminal to P-type and negative to N-type, which opposes the internal barrier, narrows the depletion layer, and enables heavy conduction.", symbol: "V_F", unit: "\\mathrm{V}", equation: "V_{\\text{net}} = V_0 - V_F" },
                { term: "Reverse Bias", definition: "Applying external voltage with positive terminal to N-type and negative to P-type, which reinforces the internal barrier, widens the depletion layer, and blocks majority current.", symbol: "V_R", unit: "\\mathrm{V}", equation: "V_{\\text{net}} = V_0 + V_R" },
                { term: "Bipolar Junction Transistor (BJT)", definition: "A three-terminal semiconductor device consisting of three doped regions (Emitter, Base, Collector) that amplifies or switches electrical signals.", symbol: "\\text{BJT}", unit: "No SI unit", equation: "I_E = I_B + I_C" },
                { term: "Emitter Current", definition: "The total majority-carrier current injected from the heavily doped emitter into the base region.", symbol: "I_E", unit: "\\mathrm{A}", equation: "I_E = I_B + I_C" },
                { term: "Base Current", definition: "The tiny recombination current flowing through the very thin, lightly doped base terminal that controls the overall transistor output.", symbol: "I_B", unit: "\\mathrm{A}", equation: "I_B = I_E - I_C = \\frac{I_C}{\\beta}" },
                { term: "Collector Current", definition: "The output current collected at the collector terminal across the reverse-biased collector-base junction.", symbol: "I_C", unit: "\\mathrm{A}", equation: "I_C = \\beta I_B = \\alpha I_E" },
                { term: "Common-Emitter Current Gain (β)", definition: "The dimensionless ratio of collector current to base current, representing the current amplification factor in common-emitter configuration.", symbol: "\\beta", unit: "No SI unit", equation: "\\beta = \\frac{I_C}{I_B}" },
                { term: "Common-Base Current Gain (α)", definition: "The dimensionless ratio of collector current to emitter current, representing the transmission efficiency of injected carriers reaching the collector (always < 1).", symbol: "\\alpha", unit: "No SI unit", equation: "\\alpha = \\frac{I_C}{I_E} = \\frac{\\beta}{\\beta + 1}" },
                { term: "Integrated Circuit (IC)", definition: "A complete electronic circuit with thousands to billions of transistors, diodes, and passive elements fabricated onto a single miniature semiconductor die.", symbol: "\\text{IC}", unit: "No SI unit", equation: "\\text{Monolithic die}" }
            ],
            examples: [
                {
                    title: "Example 1: Electrical Resistance of a Metallic Conductor",
                    question: "A heating element wire made of nichrome has length \\( l = 5.0\\,\\mathrm{m} \\) and uniform cross-sectional area \\( A = 2.50 \\times 10^{-7}\\,\\mathrm{m}^2 \\). If the electrical resistivity of nichrome is \\( \\rho = 1.10 \\times 10^{-6}\\,\\Omega\\cdot\\mathrm{m} \\), calculate the electrical resistance of the wire.",
                    given: "Length \\( l = 5.0\\,\\mathrm{m} \\), Area \\( A = 2.50 \\times 10^{-7}\\,\\mathrm{m}^2 \\), Resistivity \\( \\rho = 1.10 \\times 10^{-6}\\,\\Omega\\cdot\\mathrm{m} \\).",
                    find: "Electrical resistance of the wire (\\( R \\)) in ohms (\\( \\Omega \\)).",
                    equation: "R = \\rho\\frac{l}{A}",
                    rearrangement: "R = \\frac{\\rho l}{A}",
                    solution: "1. <strong>Formula:</strong><br>\\[ R = \\rho\\frac{l}{A} \\]<br>2. <strong>Substitution:</strong><br>\\[ R = \\frac{(1.10 \\times 10^{-6}\\,\\Omega\\cdot\\mathrm{m})(5.0\\,\\mathrm{m})}{2.50 \\times 10^{-7}\\,\\mathrm{m}^2} \\]<br>3. <strong>Calculation:</strong><br>\\[ R = \\frac{5.50 \\times 10^{-6}}{2.50 \\times 10^{-7}} = 22.0\\,\\Omega \\]",
                    finalAnswer: "R = 22.0\\,\\Omega",
                    explanation: "Resistance is directly proportional to conductor length and inversely proportional to its cross-sectional area. The high resistivity of nichrome makes it ideal for compact heating elements."
                },
                {
                    title: "Example 2: Determining Conductor Resistivity from Dimensions and Resistance",
                    question: "A textbook laboratory copper wire of length \\( l = 20.0\\,\\mathrm{m} \\) and uniform cross-sectional area \\( A = 5.06 \\times 10^{-7}\\,\\mathrm{m}^2 \\) has a measured resistance of \\( R = 0.68\\,\\Omega \\) at room temperature. Determine the electrical resistivity of the material.",
                    given: "Length \\( l = 20.0\\,\\mathrm{m} \\), Cross-sectional area \\( A = 5.06 \\times 10^{-7}\\,\\mathrm{m}^2 \\), Resistance \\( R = 0.68\\,\\Omega \\).",
                    find: "Electrical resistivity (\\( \\rho \\)) in ohm-meters (\\( \\Omega\\cdot\\mathrm{m} \\)).",
                    equation: "\\rho = \\frac{RA}{l}",
                    rearrangement: "\\rho = \\frac{RA}{l}",
                    solution: "1. <strong>Formula:</strong><br>\\[ \\rho = \\frac{RA}{l} \\]<br>2. <strong>Substitution:</strong><br>\\[ \\rho = \\frac{(0.68\\,\\Omega)(5.06 \\times 10^{-7}\\,\\mathrm{m}^2)}{20.0\\,\\mathrm{m}} \\]<br>3. <strong>Calculation:</strong><br>\\[ \\rho = \\frac{3.4408 \\times 10^{-7}}{20.0} = 1.7204 \\times 10^{-8}\\,\\Omega\\cdot\\mathrm{m} \\approx 1.72 \\times 10^{-8}\\,\\Omega\\cdot\\mathrm{m} \\]",
                    finalAnswer: "\\rho = 1.72 \\times 10^{-8}\\,\\Omega\\cdot\\mathrm{m}",
                    explanation: "This value matches the standard textbook resistivity of annealed copper (1.72 × 10⁻⁸ Ω·m). Resistivity depends strictly on the material and temperature, remaining independent of wire shape."
                },
                {
                    title: "Example 3: Carrier Concentrations in Doped Silicon (Mass Action Law)",
                    question: "At room temperature (300 K), pure silicon has an intrinsic carrier concentration \\( n_i = 1.50 \\times 10^{16}\\,\\mathrm{m}^{-3} \\). A silicon wafer is doped with pentavalent phosphorus atoms to a donor concentration \\( N_D = 1.00 \\times 10^{22}\\,\\mathrm{m}^{-3} \\) to create an N-type semiconductor. Assuming all donors are ionized, calculate: 1. The majority carrier concentration (\\( n_e \\)). 2. The minority carrier concentration (\\( n_h \\)).",
                    given: "Intrinsic concentration \\( n_i = 1.50 \\times 10^{16}\\,\\mathrm{m}^{-3} \\), Donor concentration \\( N_D = 1.00 \\times 10^{22}\\,\\mathrm{m}^{-3} \\).",
                    find: "Majority electron concentration \\( n_e \\) and minority hole concentration \\( n_h \\) in \\( \\mathrm{m}^{-3} \\).",
                    equation: "n_e n_h = n_i^2, \\quad n_e \\approx N_D",
                    rearrangement: "n_h = \\frac{n_i^2}{n_e} \\approx \\frac{n_i^2}{N_D}",
                    solution: "1. <strong>Majority Carrier Concentration:</strong><br>In N-type silicon, donor atoms dominate thermal ionization:<br>\\[ n_e \\approx N_D = 1.00 \\times 10^{22}\\,\\mathrm{m}^{-3} \\]<br>2. <strong>Minority Carrier Concentration:</strong><br>Applying the mass action law \\( n_e n_h = n_i^2 \\):<br>\\[ n_h = \\frac{n_i^2}{n_e} = \\frac{(1.50 \\times 10^{16}\\,\\mathrm{m}^{-3})^2}{1.00 \\times 10^{22}\\,\\mathrm{m}^{-3}} = \\frac{2.25 \\times 10^{32}}{1.00 \\times 10^{22}} = 2.25 \\times 10^{10}\\,\\mathrm{m}^{-3} \\]",
                    finalAnswer: "n_e = 1.00 \\times 10^{22}\\,\\mathrm{m}^{-3}, \\quad n_h = 2.25 \\times 10^{10}\\,\\mathrm{m}^{-3}",
                    explanation: "Doping with pentavalent donors increases free electron concentration by six orders of magnitude while suppressing the minority hole population via increased electron-hole recombination."
                },
                {
                    title: "Example 4: P–N Junction Potential Barrier and Forward Conduction Current",
                    question: "A silicon P-N junction diode with a forward contact potential barrier \\( V_{\\text{Si}} = 0.70\\,\\mathrm{V} \\) is connected in series with a current-limiting resistor \\( R = 220\\,\\Omega \\) across a \\( V_{\\text{source}} = 5.00\\,\\mathrm{V} \\) DC battery. Calculate: 1. The net voltage across the series resistor. 2. The forward circuit current \\( I \\).",
                    given: "Supply voltage \\( V_{\\text{source}} = 5.00\\,\\mathrm{V} \\), Silicon barrier \\( V_0 = 0.70\\,\\mathrm{V} \\), Series resistor \\( R = 220\\,\\Omega \\).",
                    find: "Resistor voltage \\( V_R \\) in volts (\\( \\mathrm{V} \\)) and forward current \\( I \\) in milliamperes (\\( \\mathrm{mA} \\)).",
                    equation: "V_{\\text{Si}} \\approx 0.7\\,\\mathrm{V}, \\quad I = \\frac{V_{\\text{source}} - V_0}{R}",
                    rearrangement: "V_R = V_{\\text{source}} - V_0, \\quad I = \\frac{V_R}{R}",
                    solution: "1. <strong>Resistor Voltage:</strong><br>\\[ V_R = V_{\\text{source}} - V_{\\text{Si}} = 5.00\\,\\mathrm{V} - 0.70\\,\\mathrm{V} = 4.30\\,\\mathrm{V} \\]<br>2. <strong>Forward Current:</strong><br>\\[ I = \\frac{V_R}{R} = \\frac{4.30\\,\\mathrm{V}}{220\\,\\Omega} \\approx 0.01955\\,\\mathrm{A} = 19.55\\,\\mathrm{mA} \\approx 19.6\\,\\mathrm{mA} \\]",
                    finalAnswer: "V_R = 4.30\\,\\mathrm{V}, \\quad I \\approx 19.6\\,\\mathrm{mA}",
                    explanation: "Under forward bias, the external power supply overcomes the 0.70 V internal contact potential of silicon, allowing steady current flow determined by the external circuit resistance."
                },
                {
                    title: "Example 5: Dynamic AC Resistance of a Forward-Biased Diode",
                    question: "In the forward conduction region of a semiconductor diode, increasing the forward voltage by \\( \\Delta V_D = 0.030\\,\\mathrm{V} \\) (30 mV) produces an increase in diode current from \\( 12.0\\,\\mathrm{mA} \\) to \\( 18.0\\,\\mathrm{mA} \\). Calculate the dynamic small-signal resistance of the diode at this operating point.",
                    given: "Voltage change \\( \\Delta V_D = 0.030\\,\\mathrm{V} \\), Initial current \\( I_1 = 12.0\\,\\mathrm{mA} \\), Final current \\( I_2 = 18.0\\,\\mathrm{mA} \\).",
                    find: "Dynamic forward junction resistance (\\( r_d \\)) in ohms (\\( \\Omega \\)).",
                    equation: "r_d = \\frac{\\Delta V_D}{\\Delta I_D}",
                    rearrangement: "r_d = \\frac{\\Delta V_D}{I_2 - I_1}",
                    solution: "1. <strong>Current Change:</strong><br>\\[ \\Delta I_D = I_2 - I_1 = 18.0\\,\\mathrm{mA} - 12.0\\,\\mathrm{mA} = 6.0\\,\\mathrm{mA} = 6.0 \\times 10^{-3}\\,\\mathrm{A} \\]<br>2. <strong>Dynamic Resistance:</strong><br>\\[ r_d = \\frac{\\Delta V_D}{\\Delta I_D} = \\frac{0.030\\,\\mathrm{V}}{6.0 \\times 10^{-3}\\,\\mathrm{A}} = 5.0\\,\\Omega \\]",
                    finalAnswer: "r_d = 5.0\\,\\Omega",
                    explanation: "Unlike ohmic conductors with constant resistance, a P-N junction exhibits a non-linear exponential I-V curve, meaning its dynamic AC resistance decreases substantially as forward current increases."
                },
                {
                    title: "Example 6: Transistor Terminal Current Conservation",
                    question: "In an active NPN bipolar junction transistor circuit, the emitter terminal injects a total current of \\( I_E = 10.00\\,\\mathrm{mA} \\). If the collector collects \\( I_C = 9.85\\,\\mathrm{mA} \\), calculate: 1. The base control current \\( I_B \\). 2. The percentage of emitted electrons that recombine within the base.",
                    given: "Emitter current \\( I_E = 10.00\\,\\mathrm{mA} \\), Collector current \\( I_C = 9.85\\,\\mathrm{mA} \\).",
                    find: "Base current \\( I_B \\) in milliamperes and microamperes, and base recombination percentage.",
                    equation: "I_E = I_B + I_C",
                    rearrangement: "I_B = I_E - I_C",
                    solution: "1. <strong>Base Current:</strong><br>\\[ I_B = I_E - I_C = 10.00\\,\\mathrm{mA} - 9.85\\,\\mathrm{mA} = 0.15\\,\\mathrm{mA} = 150\\,\\mu\\mathrm{A} \\]<br>2. <strong>Base Recombination Fraction:</strong><br>\\[ \\%\\text{ Recombination} = \\left(\\frac{I_B}{I_E}\\right) \\times 100\\% = \\left(\\frac{0.15\\,\\mathrm{mA}}{10.00\\,\\mathrm{mA}}\\right) \\times 100\\% = 1.5\\% \\]",
                    finalAnswer: "I_B = 0.15\\,\\mathrm{mA} \\; (150\\,\\mu\\mathrm{A}), \\quad \\text{Recombination} = 1.5\\%",
                    explanation: "Kirchhoff's current law ensures total emitter current equals the sum of base and collector currents. Because the base is fabricated extremely thin and lightly doped, only ~1.5% of injected carriers recombine there."
                },
                {
                    title: "Example 7: Common-Emitter DC Current Amplification Factor (β)",
                    question: "An NPN transistor in common-emitter configuration operates with a base control current \\( I_B = 40.0\\,\\mu\\mathrm{A} \\) and delivers a collector current \\( I_C = 4.80\\,\\mathrm{mA} \\). Calculate: 1. The common-emitter current gain \\( \\beta \\). 2. The new collector current if the base current is increased to \\( 65.0\\,\\mu\\mathrm{A} \\).",
                    given: "Initial base current \\( I_B = 40.0\\,\\mu\\mathrm{A} = 0.040\\,\\mathrm{mA} \\), Collector current \\( I_C = 4.80\\,\\mathrm{mA} \\), New base current \\( I_{B2} = 65.0\\,\\mu\\mathrm{A} = 0.065\\,\\mathrm{mA} \\).",
                    find: "Current gain \\( \\beta \\) (dimensionless) and new collector current \\( I_{C2} \\) in milliamperes.",
                    equation: "\\beta = \\frac{I_C}{I_B}",
                    rearrangement: "I_{C2} = \\beta I_{B2}",
                    solution: "1. <strong>Current Gain (\\( \\beta \\)):</strong><br>\\[ \\beta = \\frac{I_C}{I_B} = \\frac{4.80\\,\\mathrm{mA}}{0.040\\,\\mathrm{mA}} = 120 \\]<br>2. <strong>New Collector Current:</strong><br>\\[ I_{C2} = \\beta I_{B2} = 120 \\times 0.065\\,\\mathrm{mA} = 7.80\\,\\mathrm{mA} \\]",
                    finalAnswer: "\\beta = 120 \\; (\\text{dimensionless}), \\quad I_{C2} = 7.80\\,\\mathrm{mA}",
                    explanation: "Common-emitter gain β measures how many times the collector current exceeds the base current. Here, β = 120 means any tiny variation in base current is amplified 120-fold at the collector output."
                },
                {
                    title: "Example 8: Common-Base DC Current Amplification Factor (α)",
                    question: "A transistor operating in common-base active mode has an emitter current \\( I_E = 8.00\\,\\mathrm{mA} \\) and a collector current \\( I_C = 7.92\\,\\mathrm{mA} \\). Calculate the common-base current gain \\( \\alpha \\).",
                    given: "Emitter current \\( I_E = 8.00\\,\\mathrm{mA} \\), Collector current \\( I_C = 7.92\\,\\mathrm{mA} \\).",
                    find: "Common-base current gain (\\( \\alpha \\)) (dimensionless ratio).",
                    equation: "\\alpha = \\frac{I_C}{I_E}",
                    rearrangement: "\\alpha = \\frac{I_C}{I_E}",
                    solution: "1. <strong>Formula:</strong><br>\\[ \\alpha = \\frac{I_C}{I_E} \\]<br>2. <strong>Substitution:</strong><br>\\[ \\alpha = \\frac{7.92\\,\\mathrm{mA}}{8.00\\,\\mathrm{mA}} \\]<br>3. <strong>Calculation:</strong><br>\\[ \\alpha = 0.990 \\]",
                    finalAnswer: "\\alpha = 0.990 \\; (\\text{dimensionless})",
                    explanation: "Common-base current gain α represents the fraction of emitter carriers successfully captured by the collector. Because a tiny percentage recombines in the base, α is always strictly less than 1 (typically 0.95 to 0.998)."
                },
                {
                    title: "Example 9: Interconversion Between Current Gains α and β",
                    question: "A manufacturer's transistor datasheet specifies a common-base current gain \\( \\alpha = 0.985 \\). 1. Calculate the corresponding common-emitter current gain \\( \\beta \\). 2. If a different high-gain transistor has \\( \\beta = 250 \\), calculate its common-base current gain \\( \\alpha \\).",
                    given: "Transistor 1: \\( \\alpha = 0.985 \\). Transistor 2: \\( \\beta = 250 \\).",
                    find: "Gain \\( \\beta \\) for Transistor 1 and gain \\( \\alpha \\) for Transistor 2.",
                    equation: "\\alpha = \\frac{\\beta}{\\beta + 1} \\iff \\beta = \\frac{\\alpha}{1 - \\alpha}",
                    rearrangement: "\\beta = \\frac{\\alpha}{1 - \\alpha}, \\quad \\alpha = \\frac{\\beta}{\\beta + 1}",
                    solution: "1. <strong>Calculate \\( \\beta \\) from \\( \\alpha = 0.985 \\):</strong><br>\\[ \\beta = \\frac{\\alpha}{1 - \\alpha} = \\frac{0.985}{1 - 0.985} = \\frac{0.985}{0.015} = \\frac{985}{15} \\approx 65.67 \\approx 65.7 \\]<br>2. <strong>Calculate \\( \\alpha \\) from \\( \\beta = 250 \\):</strong><br>\\[ \\alpha = \\frac{\\beta}{\\beta + 1} = \\frac{250}{250 + 1} = \\frac{250}{251} \\approx 0.9960 \\]",
                    finalAnswer: "\\beta \\approx 65.7, \\quad \\alpha \\approx 0.9960",
                    explanation: "Because α is very close to 1, small increments in α produce huge increases in β (for example, as α increases from 0.985 to 0.996, β surges from 65.7 to 250)."
                },
                {
                    title: "Example 10: Integrated Circuit Scale and Component Density",
                    question: "A high-performance monolithic silicon microprocessor die has active dimensions of \\( 12.0\\,\\mathrm{mm} \\times 10.0\\,\\mathrm{mm} \\) (total area \\( A = 120\\,\\mathrm{mm}^2 \\)) and integrates \\( N = 15.0 \\times 10^9 \\) (15 billion) microscopic transistors and components. Calculate: 1. The component integration density per square millimeter (\\( \\mathrm{components/mm}^2 \\)). 2. The average silicon surface area occupied per individual component in square nanometers (\\( \\mathrm{nm}^2 \\)).",
                    given: "Die area \\( A = 120\\,\\mathrm{mm}^2 = 1.20 \\times 10^{-4}\\,\\mathrm{m}^2 \\), Component count \\( N = 15.0 \\times 10^9 \\).",
                    find: "Component density (\\( \\rho_{\\text{comp}} \\)) in \\( \\mathrm{components/mm}^2 \\) and area per component in \\( \\mathrm{nm}^2 \\).",
                    equation: "\\text{Density} = \\frac{N}{A}, \\quad A_{\\text{comp}} = \\frac{A}{N}",
                    rearrangement: "\\rho_{\\text{comp}} = \\frac{N}{A}, \\quad A_{\\text{comp}} = \\frac{A}{N}",
                    solution: "1. <strong>Component Density per \\( \\mathrm{mm}^2 \\):</strong><br>\\[ \\rho_{\\text{comp}} = \\frac{15.0 \\times 10^9\\,\\text{components}}{120\\,\\mathrm{mm}^2} = 1.25 \\times 10^8\\,\\text{components/mm}^2 \\]<br>2. <strong>Area per Individual Component:</strong><br>\\[ A_{\\text{comp}} = \\frac{120 \\times 10^{-6}\\,\\mathrm{m}^2}{15.0 \\times 10^9} = 8.00 \\times 10^{-15}\\,\\mathrm{m}^2 \\]<br>Since \\( 1\\,\\mathrm{m}^2 = 10^{18}\\,\\mathrm{nm}^2 \\):<br>\\[ A_{\\text{comp}} = (8.00 \\times 10^{-15})(10^{18}\\,\\mathrm{nm}^2) = 8000\\,\\mathrm{nm}^2 \\]",
                    finalAnswer: "\\rho_{\\text{comp}} = 1.25 \\times 10^8\\,\\text{components/mm}^2 \\; (125\\,\\text{million/mm}^2), \\quad A_{\\text{comp}} = 8000\\,\\mathrm{nm}^2",
                    explanation: "Monolithic IC fabrication creates complete circuits with millions to billions of nanometer-scale transistors on a single silicon chip, eliminating discrete wires, drastically cutting power loss, and achieving gigahertz clock speeds."
                }
            ],
            equations: [
                // 1. Electrical Resistance and Resistivity
                {
                    section: "Electrical Resistance and Resistivity",
                    name: "Electrical Resistance of a Conductor",
                    formula: "\\[ R = \\rho\\frac{l}{A} \\]",
                    figure: {
                        img: "image_G12_two/ch4-l1-eq1.png",
                        title: "Conductor Geometry & Resistance",
                        caption: "Uniform cylindrical conductor with length L, cross-sectional area A, and resistance R."
                    },
                    pdfPage: "Textbook Standards",
                    explanation: "The electrical resistance R of a uniform conductor is directly proportional to its length l and inversely proportional to its cross-sectional area A, scaled by the material resistivity ρ.",
                    conditions: "Uniform conductor cross-section and constant temperature.",
                    variables: [
                        { symbol: "R", rep: "Electrical resistance of conductor", unit: "Ohm", unitSym: "\\Omega" },
                        { symbol: "\\rho", rep: "Electrical resistivity of the material", unit: "Ohm meter", unitSym: "\\Omega\\cdot\\mathrm{m}" },
                        { symbol: "l", rep: "Length of the conductor", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "A", rep: "Cross-sectional area of the conductor", unit: "Square meter", unitSym: "\\mathrm{m^2}" }
                    ]
                },
                {
                    section: "Electrical Resistance and Resistivity",
                    name: "Electrical Resistivity Definition",
                    formula: "\\[ \\rho = \\frac{RA}{l} \\]",
                    pdfPage: "Textbook Standards",
                    explanation: "Resistivity ρ is an intrinsic physical property measuring how strongly a material opposes electric current, independent of conductor size.",
                    conditions: "Isotropic conducting material at steady temperature.",
                    variables: [
                        { symbol: "\\rho", rep: "Electrical resistivity", unit: "Ohm meter", unitSym: "\\Omega\\cdot\\mathrm{m}" },
                        { symbol: "R", rep: "Measured electrical resistance", unit: "Ohm", unitSym: "\\Omega" },
                        { symbol: "A", rep: "Cross-sectional area", unit: "Square meter", unitSym: "\\mathrm{m^2}" },
                        { symbol: "l", rep: "Conductor length", unit: "Meter", unitSym: "\\mathrm{m}" }
                    ]
                },

                // 2. Intrinsic and Extrinsic Semiconductors
                {
                    section: "Intrinsic and Extrinsic Semiconductors",
                    name: "Carrier Concentrations in Doped Semiconductors",
                    formula: "\\[ n_e n_h = n_i^2, \\quad \\text{N-type: } n_e \\approx N_D \\gg n_h, \\quad \\text{P-type: } n_h \\approx N_A \\gg n_e \\]",
                    pdfPage: "Textbook Standards",
                    explanation: "In thermal equilibrium, the product of electron and hole concentrations equals the square of intrinsic carrier concentration n_i. Doping with donor atoms (N_D) makes electrons the majority carriers; doping with acceptor atoms (N_A) makes holes the majority carriers.",
                    conditions: "Thermal equilibrium in non-degenerately doped semiconductors.",
                    variables: [
                        { symbol: "n_e", rep: "Free electron concentration", unit: "Per cubic meter", unitSym: "\\mathrm{m^{-3}}" },
                        { symbol: "n_h", rep: "Hole concentration", unit: "Per cubic meter", unitSym: "\\mathrm{m^{-3}}" },
                        { symbol: "n_i", rep: "Intrinsic carrier concentration", unit: "Per cubic meter", unitSym: "\\mathrm{m^{-3}}" },
                        { symbol: "N_D", rep: "Donor impurity atom concentration (pentavalent)", unit: "Per cubic meter", unitSym: "\\mathrm{m^{-3}}" },
                        { symbol: "N_A", rep: "Acceptor impurity atom concentration (trivalent)", unit: "Per cubic meter", unitSym: "\\mathrm{m^{-3}}" }
                    ]
                },

                // 3. P–N Junction and Diodes
                {
                    section: "P–N Junction and Diodes",
                    name: "P–N Junction Contact Potential Barrier",
                    formula: "\\[ V_{\\text{Ge}} \\approx 0.3\\,\\mathrm{V}, \\quad V_{\\text{Si}} \\approx 0.7\\,\\mathrm{V} \\]",
                    pdfPage: "Textbook Standards",
                    explanation: "When a P-N junction forms, carrier diffusion creates a depletion region with an internal contact potential barrier of approximately 0.3 V in Germanium and 0.7 V in Silicon at room temperature (300 K).",
                    conditions: "Unbiased equilibrium junction at room temperature.",
                    variables: [
                        { symbol: "V_{\\text{Ge}}", rep: "Potential barrier for Germanium diode (~0.3 V)", unit: "Volt", unitSym: "\\mathrm{V}" },
                        { symbol: "V_{\\text{Si}}", rep: "Potential barrier for Silicon diode (~0.7 V)", unit: "Volt", unitSym: "\\mathrm{V}" }
                    ]
                },
                {
                    section: "P–N Junction and Diodes",
                    name: "Small-Signal Dynamic Diode Resistance",
                    formula: "\\[ r_d = \\frac{\\Delta V_D}{\\Delta I_D} \\]",
                    pdfPage: "Textbook Standards",
                    explanation: "The AC dynamic resistance of a forward-biased diode equals the reciprocal slope of its forward I-V characteristic curve around the operating point.",
                    conditions: "Forward-bias operating region above the knee voltage.",
                    variables: [
                        { symbol: "r_d", rep: "Dynamic forward junction resistance", unit: "Ohm", unitSym: "\\Omega" },
                        { symbol: "\\Delta V_D", rep: "Small variation in diode forward voltage", unit: "Volt", unitSym: "\\mathrm{V}" },
                        { symbol: "\\Delta I_D", rep: "Resulting incremental change in diode current", unit: "Ampere", unitSym: "\\mathrm{A}" }
                    ]
                },

                // 4. Transistors and Current Relationships
                {
                    section: "Transistors and Current Relationships",
                    name: "Transistor Terminal Current Conservation",
                    formula: "\\[ I_E = I_B + I_C \\]",
                    figure: {
                        img: "image_G12_two/ch4-l1-eq2.png",
                        title: "NPN BJT Structure & Currents",
                        caption: "Structure and circuit symbol of an NPN transistor showing terminal currents I_E = I_B + I_C."
                    },
                    pdfPage: "Textbook Standards",
                    explanation: "Kirchhoff's current law applied to a BJT: total emitter current equals the sum of the small base control current and the collector output current.",
                    conditions: "Normal active or saturated operating modes for NPN and PNP BJTs.",
                    variables: [
                        { symbol: "I_E", rep: "Emitter terminal current", unit: "Ampere", unitSym: "\\mathrm{A}" },
                        { symbol: "I_B", rep: "Base terminal current (controls conduction)", unit: "Ampere", unitSym: "\\mathrm{A}" },
                        { symbol: "I_C", rep: "Collector terminal current (output)", unit: "Ampere", unitSym: "\\mathrm{A}" }
                    ]
                },
                {
                    section: "Transistors and Current Relationships",
                    name: "Common-Emitter Current Gain (β)",
                    formula: "\\[ \\beta = \\frac{I_C}{I_B} \\]",
                    figure: {
                        img: "image_G12_two/ch4-l1-eq3.png",
                        title: "Common-Emitter Current Gain (β)",
                        caption: "Base current input controlling collector current amplification: β = I_C / I_B."
                    },
                    pdfPage: "Textbook Standards",
                    explanation: "Common-emitter DC current amplification factor (also denoted h_FE). Because base current is tiny, β is typically between 20 and 500+.",
                    conditions: "Active amplification region.",
                    variables: [
                        { symbol: "\\beta", rep: "Common-emitter DC current gain (dimensionless)", unit: "Dimensionless ratio", unitSym: "\\text{No SI unit}" },
                        { symbol: "I_C", rep: "Collector current", unit: "Ampere", unitSym: "\\mathrm{A}" },
                        { symbol: "I_B", rep: "Base current", unit: "Ampere", unitSym: "\\mathrm{A}" }
                    ]
                },
                {
                    section: "Transistors and Current Relationships",
                    name: "Common-Base Current Gain (α)",
                    formula: "\\[ \\alpha = \\frac{I_C}{I_E} \\]",
                    figure: {
                        img: "image_G12_two/ch4-l1-eq4.png",
                        title: "Common-Base Current Gain (α)",
                        caption: "Transmission efficiency of injected emitter current reaching collector: α = I_C / I_E (always < 1)."
                    },
                    pdfPage: "Textbook Standards",
                    explanation: "Common-base current gain measuring the fraction of majority carriers injected by the emitter that successfully traverse the base into the collector. Because a small percentage recombines in the base, α is always slightly less than 1 (0.95 to 0.998).",
                    conditions: "Active amplification region.",
                    variables: [
                        { symbol: "\\alpha", rep: "Common-base DC current gain (dimensionless)", unit: "Dimensionless ratio", unitSym: "\\text{No SI unit}" },
                        { symbol: "I_C", rep: "Collector current", unit: "Ampere", unitSym: "\\mathrm{A}" },
                        { symbol: "I_E", rep: "Emitter current", unit: "Ampere", unitSym: "\\mathrm{A}" }
                    ]
                },
                {
                    section: "Transistors and Current Relationships",
                    name: "Current Gain Interconversion Formula",
                    formula: "\\[ \\alpha = \\frac{\\beta}{\\beta + 1} \\iff \\beta = \\frac{\\alpha}{1 - \\alpha} \\]",
                    pdfPage: "Textbook Standards",
                    explanation: "Exact mathematical interconversion between common-base gain α and common-emitter gain β derived from I_E = I_B + I_C.",
                    conditions: "Linear active region.",
                    variables: [
                        { symbol: "\\alpha", rep: "Common-base current gain", unit: "Dimensionless ratio", unitSym: "\\text{No SI unit}" },
                        { symbol: "\\beta", rep: "Common-emitter current gain", unit: "Dimensionless ratio", unitSym: "\\text{No SI unit}" }
                    ]
                },

                // 5. Integrated Circuits (ICs)
                {
                    section: "Integrated Circuits (ICs)",
                    name: "Integrated Circuit Scale & Microelectronic Architecture",
                    formula: "\\[ \\text{Monolithic Die Integration: } N_{\\text{components}} \\sim 10^3 \\text{ to } 10^{10+} \\text{ transistors, diodes, resistors on a silicon chip} \\]",
                    pdfPage: "Textbook Standards",
                    explanation: "Integrated circuits combine complete microscopic circuits onto a single semiconductor substrate, eliminating discrete wiring and achieving high speed, miniaturization, and low power consumption.",
                    conditions: "Semiconductor microfabrication planar technology.",
                    variables: [
                        { symbol: "N_{\\text{components}}", rep: "Number of integrated electronic components per chip", unit: "Component count", unitSym: "\\text{No SI unit}" }
                    ]
                }
            ],
            flashcards: [
                { front: "What is the formula relating resistance, resistivity, length, and area?", back: "\\( R = \\rho\\frac{l}{A} \\iff \\rho = \\frac{RA}{l} \\)" },
                { front: "What are the majority and minority charge carriers in N-type and P-type semiconductors?", back: "N-type: majority = electrons, minority = holes.<br>P-type: majority = holes, minority = electrons." },
                { front: "What are the approximate potential barrier voltages for Ge and Si diodes?", back: "\\( V_{\\text{Ge}} \\approx 0.3\\,\\mathrm{V}, \\quad V_{\\text{Si}} \\approx 0.7\\,\\mathrm{V} \\)" },
                { front: "What happens to the depletion region under forward and reverse bias?", back: "Forward bias: narrows the depletion region.<br>Reverse bias: widens the depletion region." },
                { front: "What is the fundamental current equation for a bipolar junction transistor?", back: "\\( I_E = I_B + I_C \\)" },
                { front: "What is the definition of common-emitter current gain \\( \\beta \\)?", back: "\\( \\beta = \\frac{I_C}{I_B} \\)" },
                { front: "What is the definition of common-base current gain \\( \\alpha \\)?", back: "\\( \\alpha = \\frac{I_C}{I_E} = \\frac{\\beta}{\\beta + 1} < 1 \\)" },
                { front: "What are the primary advantages of Integrated Circuits (ICs)?", back: "Miniaturization, extreme component density, low power consumption, and high operational reliability." }
            ],
            quiz: [
                { question: "A wire with A = 5.06 × 10⁻⁷ m² and length l = 20 m has resistance R = 0.68 Ω. What is its resistivity?", options: ["1.72 × 10⁻⁸ Ω·m", "3.44 × 10⁻⁷ Ω·m", "1.72 × 10⁻⁶ Ω·m", "8.55 × 10⁻⁹ Ω·m"], correctIndex: 0, feedback: "ρ = RA / l = (0.68 × 5.06 × 10⁻⁷) / 20 = 1.72 × 10⁻⁸ Ω·m (copper wire)." },
                { question: "In a Silicon P-N junction diode, the contact potential barrier at room temperature is approximately:", options: ["0.1 V", "0.3 V", "0.7 V", "1.5 V"], correctIndex: 2, feedback: "V_Si ≈ 0.7 V, while for Germanium V_Ge ≈ 0.3 V." },
                { question: "In an active BJT with base current I_B = 50 µA and collector current I_C = 4.95 mA, the current gain β and emitter current I_E are:", options: ["β = 50, I_E = 5.00 mA", "β = 99, I_E = 5.00 mA", "β = 100, I_E = 4.90 mA", "β = 99, I_E = 4.95 mA"], correctIndex: 1, feedback: "β = 4.95 mA / 0.05 mA = 99; I_E = 0.05 mA + 4.95 mA = 5.00 mA." },
                { question: "What happens to the depletion region of a P-N junction under reverse bias?", options: ["It disappears completely", "It narrows significantly", "It widens, blocking majority carriers", "It oscillates with AC frequency"], correctIndex: 2, feedback: "Reverse bias reinforces the internal electric field, widening the depletion region and blocking majority carriers." }
            ]
        },

        // =====================================================================
        // CHAPTER 4 LESSON 2: Special Theory of Relativity
        // =====================================================================
        {
            id: "g12-ch4-l2",
            gifUrl: "",
            worksheetUrl: "worksheets/ch4-l2-worksheet.pdf",
            ebookUrl: "ebooks/g12-ch4-l2-ebook.pdf",
            games: [{ topic: "Special Relativity", url: "https://gemini.google.com/share/3565e381b1ba" }],
            title: "Chapter 4 Lesson 2: Special Theory of Relativity",
            concepts: [
                "Reference Frames and Galilean Transformation: An inertial reference frame is one with zero acceleration where Newton's laws hold true. Classical mechanics assumes absolute, universal space and time (\\( t' = t \\)). For frame S' moving at constant velocity \\( u \\) along the +x axis relative to frame S, coordinates transform as \\( x' = x - ut \\), \\( y' = y \\), \\( z' = z \\), \\( t' = t \\); velocities as \\( v'_x = v_x - u \\), \\( v'_y = v_y \\), \\( v'_z = v_z \\); and accelerations as \\( a'_x = a_x \\), \\( a'_y = a_y \\), \\( a'_z = a_z \\). Valid only when \\( u \\ll c \\).",
                "Speed of Light and the Michelson–Morley Experiment: Designed to detect Earth's motion through the hypothetical luminiferous ether. Light splits into two perpendicular arms of length \\( L \\). Expected travel times are \\( t_1 = \\frac{2Lc}{c^2 - v^2} \\) (parallel) and \\( t_2 = \\frac{2L}{\\sqrt{c^2 - v^2}} \\) (perpendicular). Time difference is \\( \\Delta t \\approx \\frac{Lv^2}{c^3} \\), path difference \\( \\Delta x = c\\Delta t \\approx \\frac{Lv^2}{c^2} \\), and expected fringe shift \\( \\Delta N = \\frac{\\Delta x}{\\lambda} = \\frac{Lv^2}{c^2\\lambda} \\). The experiment yielded a null result, disproving the existence of the ether and demonstrating that the speed of light is isotropic in all directions.",
                "Einstein's Two Postulates of Special Relativity: 1. The laws of physics are identical in all inertial reference frames. 2. The speed of light in vacuum is constant and invariant in all inertial reference frames, independent of the motion of the source or observer: \\( c = 299\\,792\\,458\\,\\mathrm{m/s} \\approx 3.0 \\times 10^8\\,\\mathrm{m/s} \\). Maxwell's electromagnetic relation confirms \\( c = \\frac{1}{\\sqrt{\\varepsilon_0\\mu_0}} \\), where \\( \\varepsilon_0 \\) is vacuum permittivity and \\( \\mu_0 \\) is vacuum permeability.",
                "Lorentz Transformation: Galilean transformations break down near light speed because they predict light speed varies with observer motion. The relativistic Lorentz factor is \\( \\gamma = \\frac{1}{\\sqrt{1 - \\frac{u^2}{c^2}}} \\ge 1 \\). Forward transformations (S to S'): \\( x' = \\gamma(x - ut) \\), \\( y' = y \\), \\( z' = z \\), \\( t' = \\gamma\\left(t - \\frac{ux}{c^2}\\right) \\). Reverse transformations (S' to S): \\( x = \\gamma(x' + ut') \\), \\( y = y' \\), \\( z = z' \\), \\( t = \\gamma\\left(t' + \\frac{ux'}{c^2}\\right) \\). When \\( u \\ll c \\), \\( \\gamma \\approx 1 \\), recovering Galilean mechanics.",
                "Relativistic Velocity Transformation: Velocity addition must account for spacetime transformations: forward transformations are \\( v'_x = \\frac{v_x - u}{1 - \\frac{uv_x}{c^2}} \\), \\( v'_y = \\frac{v_y}{\\gamma(1 - uv_x/c^2)} \\), \\( v'_z = \\frac{v_z}{\\gamma(1 - uv_x/c^2)} \\); reverse transformations are \\( v_x = \\frac{v'_x + u}{1 + \\frac{uv'_x}{c^2}} \\), \\( v_y = \\frac{v'_y}{\\gamma(1 + uv'_x/c^2)} \\), \\( v_z = \\frac{v'_z}{\\gamma(1 + uv'_x/c^2)} \\). For motion along a straight line, \\( v = \\frac{v' + u}{1 + \\frac{uv'}{c^2}} \\). This guarantees that the relative speed of massive objects strictly remains below \\( c \\), and light always travels at \\( c \\) for all observers."
            ],
            definitions: [
                { term: "Inertial Reference Frame", definition: "A coordinate reference frame in which a body subject to zero net external force remains at rest or moves with uniform velocity in a straight line.", symbol: "S, S'", unit: "No SI unit", equation: "\\sum\\vec{F} = 0 \\implies \\vec{a} = 0" },
                { term: "Galilean Transformation", definition: "Classical equations relating coordinates, velocities, and accelerations between inertial frames, valid only at low speeds (u ≪ c) under the assumption of absolute time.", symbol: "\\text{Galileo}", unit: "No SI unit", equation: "x' = x - ut, \\quad v'_x = v_x - u, \\quad t' = t" },
                { term: "Michelson Interferometer", definition: "An optical instrument splitting light into two perpendicular arms of length L to detect path and travel-time differences via interference fringe shifts.", symbol: "L", unit: "\\mathrm{m}", equation: "\\Delta N = \\frac{\\Delta x}{\\lambda}" },
                { term: "Expected Fringe Shift", definition: "Theoretical shift in interference fringes expected in the Michelson-Morley interferometer if an ether wind were present.", symbol: "\\Delta N", unit: "No SI unit", equation: "\\Delta N = \\frac{Lv^2}{c^2\\lambda}" },
                { term: "First Postulate (Principle of Relativity)", definition: "The fundamental postulate stating that the laws of physics are the same in all inertial reference frames.", symbol: "\\text{Postulate 1}", unit: "No SI unit", equation: "\\text{Laws invariant in all inertial frames}" },
                { term: "Second Postulate (Constancy of Light Speed)", definition: "The postulate stating that the speed of light in vacuum is constant in all inertial reference frames, independent of the motion of the source or observer.", symbol: "c", unit: "\\mathrm{m/s}", equation: "c = 299\\,792\\,458\\,\\mathrm{m/s} \\approx 3.0 \\times 10^8\\,\\mathrm{m/s}" },
                { term: "Vacuum Permittivity", definition: "The physical constant representing the capability of vacuum to permit electric field lines.", symbol: "\\varepsilon_0", unit: "\\mathrm{F/m}", equation: "\\varepsilon_0 \\approx 8.854 \\times 10^{-12}\\,\\mathrm{F/m}" },
                { term: "Vacuum Permeability", definition: "The physical constant representing the capability of vacuum to permit magnetic field lines.", symbol: "\\mu_0", unit: "\\mathrm{T\\cdot m/A}", equation: "\\mu_0 = 4\\pi \\times 10^{-7}\\,\\mathrm{T\\cdot m/A}" },
                { term: "Electromagnetic Light Speed Relation", definition: "Maxwell's exact relationship connecting the speed of light to the vacuum permittivity and permeability.", symbol: "c", unit: "\\mathrm{m/s}", equation: "c = \\frac{1}{\\sqrt{\\varepsilon_0\\mu_0}}" },
                { term: "Lorentz Factor (γ)", definition: "The fundamental relativistic scaling factor that quantifies time dilation, length contraction, and coordinate transformations, always ≥ 1.", symbol: "\\gamma", unit: "No SI unit", equation: "\\gamma = \\frac{1}{\\sqrt{1 - \\frac{u^2}{c^2}}}" },
                { term: "Lorentz Coordinate Transformation", definition: "Relativistic coordinate equations transforming spatial position between inertial reference frames moving at relative velocity u.", symbol: "x'", unit: "\\mathrm{m}", equation: "x' = \\gamma(x - ut)" },
                { term: "Lorentz Time Transformation", definition: "Relativistic time transformation showing that elapsed time and simultaneity depend directly on relative velocity and spatial position.", symbol: "t'", unit: "\\mathrm{s}", equation: "t' = \\gamma\\left(t - \\frac{ux}{c^2}\\right)" },
                { term: "Reverse Lorentz Transformation", definition: "Relativistic equations transforming space and time from moving frame S' back to rest frame S.", symbol: "x, t", unit: "\\mathrm{m, s}", equation: "x = \\gamma(x' + ut'), \\quad t = \\gamma\\left(t' + \\frac{ux'}{c^2}\\right)" },
                { term: "Relativistic Velocity Transformation", definition: "Formulas relating particle velocity components between two reference frames, ensuring resultant speeds never exceed c.", symbol: "v'_x", unit: "\\mathrm{m/s}", equation: "v'_x = \\frac{v_x - u}{1 - \\frac{uv_x}{c^2}}" },
                { term: "Relativistic Velocity Addition", definition: "Collinear formula for combining relative velocities along the same straight line.", symbol: "v", unit: "\\mathrm{m/s}", equation: "v = \\frac{v' + u}{1 + \\frac{uv'}{c^2}}" }
            ],
            examples: [
                {
                    title: "Example 1: Galilean Coordinate Transformation of an Event",
                    question: "A rocket (frame S') cruises along the positive x-axis at a constant speed of \\( u = 40.0\\,\\mathrm{m/s} \\) relative to ground control (frame S). At time \\( t = 5.00\\,\\mathrm{s} \\) on synchronized clocks, a beacon flashes on the ground at coordinates \\( x = 350.0\\,\\mathrm{m} \\), \\( y = 12.0\\,\\mathrm{m} \\), \\( z = 0\\,\\mathrm{m} \\). Find the spatial coordinates and time \\( (x', y', z', t') \\) of this event as measured by an observer in the rocket under classical Galilean transformations.",
                    given: "Relative speed \\( u = 40.0\\,\\mathrm{m/s} \\), Time \\( t = 5.00\\,\\mathrm{s} \\), Coordinates in S: \\( x = 350.0\\,\\mathrm{m} \\), \\( y = 12.0\\,\\mathrm{m} \\), \\( z = 0\\,\\mathrm{m} \\).",
                    find: "Coordinates \\( x', y', z', t' \\) in moving frame S'.",
                    equation: "x' = x - ut, \\quad y' = y, \\quad z' = z, \\quad t' = t",
                    rearrangement: "x' = x - ut",
                    solution: "1. <strong>Formula:</strong><br>\\[ x' = x - ut, \\quad y' = y, \\quad z' = z, \\quad t' = t \\]<br>2. <strong>Substitution:</strong><br>\\[ x' = 350.0\\,\\mathrm{m} - (40.0\\,\\mathrm{m/s})(5.00\\,\\mathrm{s}) \\]<br>3. <strong>Calculation:</strong><br>\\[ x' = 350.0\\,\\mathrm{m} - 200.0\\,\\mathrm{m} = 150.0\\,\\mathrm{m} \\]\\[ y' = 12.0\\,\\mathrm{m}, \\quad z' = 0\\,\\mathrm{m}, \\quad t' = 5.00\\,\\mathrm{s} \\]",
                    finalAnswer: "(x', y', z', t') = (150.0\\,\\mathrm{m}, 12.0\\,\\mathrm{m}, 0\\,\\mathrm{m}, 5.00\\,\\mathrm{s})",
                    explanation: "Under Galilean mechanics, time is absolute (t' = t) and transverse spatial dimensions remain completely invariant (y' = y, z' = z), while the longitudinal coordinate shifts simply by the frame displacement ut."
                },
                {
                    title: "Example 2: Galilean Velocity Transformations and Acceleration Invariance",
                    question: "On a straight highway (frame S), Car A travels East at \\( v_A = 60.0\\,\\mathrm{km/h} \\) with an acceleration \\( a_x = 1.50\\,\\mathrm{m/s^2} \\). Car B travels along the same road at \\( 40.0\\,\\mathrm{km/h} \\). Determine: 1. The relative velocity of Car A with respect to Car B when Car B travels East (\\( u = +40.0\\,\\mathrm{km/h} \\)). 2. The relative velocity when Car B travels West (\\( u = -40.0\\,\\mathrm{km/h} \\)). 3. The acceleration of Car A measured from Car B (\\( a'_x \\)).",
                    given: "Car A velocity \\( v_A = 60.0\\,\\mathrm{km/h} \\), Acceleration \\( a_x = 1.50\\,\\mathrm{m/s^2} \\), Car B speed \\( |u| = 40.0\\,\\mathrm{km/h} \\).",
                    find: "Relative velocities \\( v'_{\\text{same}} \\), \\( v'_{\\text{opposite}} \\) in \\( \\mathrm{km/h} \\), and relative acceleration \\( a'_x \\) in \\( \\mathrm{m/s^2} \\).",
                    equation: "v'_x = v_x - u, \\quad a'_x = a_x",
                    rearrangement: "v'_x = v_x - u",
                    solution: "1. <strong>Same Direction (Car B moving East, \\( u = +40.0\\,\\mathrm{km/h} \\)):</strong><br>\\[ v'_{\\text{same}} = v_A - u = 60.0\\,\\mathrm{km/h} - 40.0\\,\\mathrm{km/h} = +20.0\\,\\mathrm{km/h} \\]<br>2. <strong>Opposite Direction (Car B moving West, \\( u = -40.0\\,\\mathrm{km/h} \\)):</strong><br>\\[ v'_{\\text{opposite}} = v_A - u = 60.0\\,\\mathrm{km/h} - (-40.0\\,\\mathrm{km/h}) = 60.0 + 40.0 = +100.0\\,\\mathrm{km/h} \\]<br>3. <strong>Relative Acceleration:</strong><br>Since relative velocity \\( u \\) is constant (\\( du/dt = 0 \\)):<br>\\[ a'_x = \\frac{dv'_x}{dt} = \\frac{d(v_x - u)}{dt} = \\frac{dv_x}{dt} = a_x = 1.50\\,\\mathrm{m/s^2} \\]",
                    finalAnswer: "v'_{\\text{same}} = +20.0\\,\\mathrm{km/h}, \\quad v'_{\\text{opposite}} = +100.0\\,\\mathrm{km/h}, \\quad a'_x = 1.50\\,\\mathrm{m/s^2}",
                    explanation: "Galilean velocity transformations add or subtract linearly. Because relative velocity between inertial frames is uniform, acceleration is invariant (a' = a), ensuring Newton's second law F = ma holds equally in all inertial frames."
                },
                {
                    title: "Example 3: Round-Trip Travel Times in the Michelson Interferometer Arms",
                    question: "In the Michelson-Morley experiment, each arm of the interferometer has an optical path length \\( L = 11.0\\,\\mathrm{m} \\). Assuming Earth moves through a stationary luminiferous ether at orbital speed \\( v = 3.00 \\times 10^4\\,\\mathrm{m/s} \\), with light speed in vacuum \\( c = 3.00 \\times 10^8\\,\\mathrm{m/s} \\): 1. Calculate the nominal stationary round-trip time \\( t_0 = 2L/c \\). 2. Calculate the longitudinal round-trip travel time \\( t_1 \\) along the arm parallel to the ether wind. 3. Calculate the transverse round-trip travel time \\( t_2 \\) along the arm perpendicular to the ether wind.",
                    given: "Arm length \\( L = 11.0\\,\\mathrm{m} \\), Earth speed \\( v = 3.00 \\times 10^4\\,\\mathrm{m/s} \\), Light speed \\( c = 3.00 \\times 10^8\\,\\mathrm{m/s} \\).",
                    find: "Round-trip times \\( t_0, t_1, t_2 \\) in seconds (\\( \\mathrm{s} \\)).",
                    equation: "t_1 = \\frac{2Lc}{c^2 - v^2} = \\frac{2L}{c\\left(1 - \\frac{v^2}{c^2}\\right)}, \\quad t_2 = \\frac{2L}{\\sqrt{c^2 - v^2}} = \\frac{2L}{c\\sqrt{1 - \\frac{v^2}{c^2}}}",
                    rearrangement: "t_1 = \\frac{t_0}{1 - \\frac{v^2}{c^2}}, \\quad t_2 = \\frac{t_0}{\\sqrt{1 - \\frac{v^2}{c^2}}}",
                    solution: "1. <strong>Stationary Round-Trip Time:</strong><br>\\[ t_0 = \\frac{2L}{c} = \\frac{2(11.0\\,\\mathrm{m})}{3.00 \\times 10^8\\,\\mathrm{m/s}} = 7.3333 \\times 10^{-8}\\,\\mathrm{s} \\]<br>2. <strong>Speed Ratio:</strong><br>\\[ \\frac{v}{c} = \\frac{3.00 \\times 10^4}{3.00 \\times 10^8} = 1.00 \\times 10^{-4} \\implies \\frac{v^2}{c^2} = 1.00 \\times 10^{-8} \\]<br>3. <strong>Longitudinal Time \\( t_1 \\):</strong><br>\\[ t_1 = \\frac{t_0}{1 - 10^{-8}} \\approx t_0(1 + 10^{-8}) = 7.3333 \\times 10^{-8}\\,\\mathrm{s} + 7.3333 \\times 10^{-16}\\,\\mathrm{s} \\]<br>4. <strong>Transverse Time \\( t_2 \\):</strong><br>\\[ t_2 = \\frac{t_0}{\\sqrt{1 - 10^{-8}}} \\approx t_0(1 + 0.50 \\times 10^{-8}) = 7.3333 \\times 10^{-8}\\,\\mathrm{s} + 3.6667 \\times 10^{-16}\\,\\mathrm{s} \\]",
                    finalAnswer: "t_0 = 7.333 \\times 10^{-8}\\,\\mathrm{s}, \\quad t_1 \\approx 7.3333334 \\times 10^{-8}\\,\\mathrm{s}, \\quad t_2 \\approx 7.3333332 \\times 10^{-8}\\,\\mathrm{s}",
                    explanation: "Classical ether theory predicted a tiny time discrepancy \\( \\Delta t = t_1 - t_2 \\approx \\frac{Lv^2}{c^3} \\approx 3.67 \\times 10^{-16}\\,\\mathrm{s} \\) between the arms, which should have produced observable interference fringe shifts."
                },
                {
                    title: "Example 4: Michelson–Morley Optical Path Difference and Expected Fringe Shift",
                    question: "Monochromatic light of wavelength \\( \\lambda = 5.50 \\times 10^{-7}\\,\\mathrm{m} \\) (550 nm) is used in a Michelson interferometer with arm length \\( L = 11.0\\,\\mathrm{m} \\). If Earth moves through the ether at \\( v = 3.00 \\times 10^4\\,\\mathrm{m/s} \\) and \\( c = 3.00 \\times 10^8\\,\\mathrm{m/s} \\): 1. Calculate the theoretical travel time difference \\( \\Delta t \\). 2. Calculate the optical path difference \\( \\Delta x \\). 3. Calculate the expected fringe shift \\( \\Delta N \\), and the total shift \\( \\Delta N_{\\text{total}} = 2\\Delta N \\) upon a 90° rotation.",
                    given: "Wavelength \\( \\lambda = 5.50 \\times 10^{-7}\\,\\mathrm{m} \\), Arm length \\( L = 11.0\\,\\mathrm{m} \\), Earth speed \\( v = 3.00 \\times 10^4\\,\\mathrm{m/s} \\), \\( c = 3.00 \\times 10^8\\,\\mathrm{m/s} \\).",
                    find: "Time difference \\( \\Delta t \\), path difference \\( \\Delta x \\), and theoretical fringe shift \\( \\Delta N_{\\text{total}} \\).",
                    equation: "\\Delta t \\approx \\frac{Lv^2}{c^3}, \\quad \\Delta x = c\\Delta t \\approx \\frac{Lv^2}{c^2}, \\quad \\Delta N = \\frac{\\Delta x}{\\lambda} = \\frac{Lv^2}{c^2\\lambda}",
                    rearrangement: "\\Delta x = L\\left(\\frac{v^2}{c^2}\\right), \\quad \\Delta N = \\frac{\\Delta x}{\\lambda}, \\quad \\Delta N_{\\text{total}} = 2\\Delta N",
                    solution: "1. <strong>Optical Path Difference (\\( \\Delta x \\)):</strong><br>\\[ \\frac{v^2}{c^2} = \\left(\\frac{3.00 \\times 10^4}{3.00 \\times 10^8}\\right)^2 = (1.00 \\times 10^{-4})^2 = 1.00 \\times 10^{-8} \\]\\[ \\Delta x = L\\left(\\frac{v^2}{c^2}\\right) = (11.0\\,\\mathrm{m})(1.00 \\times 10^{-8}) = 1.10 \\times 10^{-7}\\,\\mathrm{m} = 110\\,\\mathrm{nm} \\]<br>2. <strong>Time Difference (\\( \\Delta t \\)):</strong><br>\\[ \\Delta t = \\frac{\\Delta x}{c} = \\frac{1.10 \\times 10^{-7}\\,\\mathrm{m}}{3.00 \\times 10^8\\,\\mathrm{m/s}} \\approx 3.67 \\times 10^{-16}\\,\\mathrm{s} \\]<br>3. <strong>Expected Fringe Shift:</strong><br>\\[ \\Delta N = \\frac{\\Delta x}{\\lambda} = \\frac{1.10 \\times 10^{-7}\\,\\mathrm{m}}{5.50 \\times 10^{-7}\\,\\mathrm{m}} = 0.20 \\text{ fringes} \\]<br>Upon rotating the turntable by 90°, the roles of the arms interchange, doubling the shift:<br>\\[ \\Delta N_{\\text{total}} = 2 \\times 0.20 = 0.40 \\text{ fringes} \\]",
                    finalAnswer: "\\Delta x = 1.10 \\times 10^{-7}\\,\\mathrm{m}, \\quad \\Delta N = 0.20 \\text{ fringes}, \\quad \\Delta N_{\\text{total}} = 0.40 \\text{ fringes}",
                    explanation: "The apparatus was sensitive enough to detect shifts as tiny as 0.01 fringe. Observing exactly zero shift (null result) conclusively disproved the existence of the luminiferous ether and demonstrated that the speed of light is isotropic in all directions."
                },
                {
                    title: "Example 5: Universal Constancy of the Speed of Light Across Inertial Frames",
                    question: "A high-precision laser on a ground station emits a light beam into space at \\( c = 3.00 \\times 10^8\\,\\mathrm{m/s} \\). A scout spaceship departs Earth at \\( u = 0.80c \\) along the beam's direction, while an incoming deep-space carrier approaches Earth head-on at \\( u = 0.80c \\). According to Einstein's second postulate of special relativity, determine: 1. The speed of the light beam measured in the ground station frame. 2. The speed of the light beam measured aboard the departing spaceship. 3. The speed of the light beam measured aboard the approaching carrier.",
                    given: "Speed of light emitted \\( c = 3.00 \\times 10^8\\,\\mathrm{m/s} \\), Speed of departing ship \\( u_1 = +0.80c \\), Speed of approaching ship \\( u_2 = -0.80c \\).",
                    find: "Measured speed of light in each reference frame.",
                    equation: "c = 299\\,792\\,458\\,\\mathrm{m/s} \\approx 3.00 \\times 10^8\\,\\mathrm{m/s}",
                    rearrangement: "\\text{Speed of light in any inertial frame} = c",
                    solution: "1. <strong>Ground Station Frame:</strong><br>By definition of light propagation in vacuum:<br>\\[ v_{\\text{ground}} = c = 3.00 \\times 10^8\\,\\mathrm{m/s} \\]<br>2. <strong>Departing Spaceship Frame:</strong><br>Applying relativistic velocity transformation with light (\\( v_x = c \\)):<br>\\[ v' = \\frac{c - u_1}{1 - \\frac{u_1 c}{c^2}} = \\frac{c - 0.80c}{1 - 0.80} = \\frac{0.20c}{0.20} = c = 3.00 \\times 10^8\\,\\mathrm{m/s} \\]<br>3. <strong>Approaching Carrier Frame:</strong><br>\\[ v' = \\frac{c - (-0.80c)}{1 - \\frac{(-0.80c)(c)}{c^2}} = \\frac{1.80c}{1 + 0.80} = \\frac{1.80c}{1.80} = c = 3.00 \\times 10^8\\,\\mathrm{m/s} \\]",
                    finalAnswer: "v_{\\text{ground}} = c, \\quad v_{\\text{departing}} = c, \\quad v_{\\text{approaching}} = c \\; (3.00 \\times 10^8\\,\\mathrm{m/s})",
                    explanation: "Einstein's second postulate establishes that the speed of light in vacuum is a universal constant (c = 3.00 × 10⁸ m/s) in all inertial frames, completely independent of the motion of the emitting source or the observing reference frame."
                },
                {
                    title: "Example 6: Electromagnetic Speed of Light from Vacuum Constants",
                    question: "Maxwell's electromagnetic theory proves that light is an electromagnetic wave whose propagation speed in vacuum depends solely on the permittivity of free space \\( \\varepsilon_0 = 8.854 \\times 10^{-12}\\,\\mathrm{F/m} \\) and permeability of free space \\( \\mu_0 = 4\\pi \\times 10^{-7}\\,\\mathrm{T\\cdot m/A} \\approx 1.2566 \\times 10^{-6}\\,\\mathrm{T\\cdot m/A} \\). Calculate the theoretical speed of light \\( c \\) from these fundamental constants.",
                    given: "Permittivity \\( \\varepsilon_0 = 8.854 \\times 10^{-12}\\,\\mathrm{F/m} \\), Permeability \\( \\mu_0 = 4\\pi \\times 10^{-7}\\,\\mathrm{T\\cdot m/A} \\approx 1.2566 \\times 10^{-6}\\,\\mathrm{T\\cdot m/A} \\).",
                    find: "Theoretical propagation speed of light (\\( c \\)) in meters per second (\\( \\mathrm{m/s} \\)).",
                    equation: "c = \\frac{1}{\\sqrt{\\varepsilon_0\\mu_0}}",
                    rearrangement: "c = (\\varepsilon_0\\mu_0)^{-1/2}",
                    solution: "1. <strong>Compute Product \\( \\varepsilon_0\\mu_0 \\):</strong><br>\\[ \\varepsilon_0\\mu_0 = (8.854 \\times 10^{-12}\\,\\mathrm{F/m})(1.2566 \\times 10^{-6}\\,\\mathrm{T\\cdot m/A}) \\approx 1.1126 \\times 10^{-17}\\,\\mathrm{s^2/m^2} \\]<br>2. <strong>Compute Speed of Light \\( c \\):</strong><br>\\[ c = \\frac{1}{\\sqrt{1.1126 \\times 10^{-17}\\,\\mathrm{s^2/m^2}}} = \\frac{1}{3.3356 \\times 10^{-9}\\,\\mathrm{s/m}} \\approx 2.998 \\times 10^8\\,\\mathrm{m/s} \\]",
                    finalAnswer: "c \\approx 3.00 \\times 10^8\\,\\mathrm{m/s} \\; (299\\,792\\,458\\,\\mathrm{m/s})",
                    explanation: "Because both ε₀ and μ₀ are invariant electromagnetic constants of empty space, Maxwell's derivation showed that the speed of light in vacuum must also be an absolute, universal constant."
                },
                {
                    title: "Example 7: Relativistic Lorentz Factor (γ) at Moderate and Extreme Speeds",
                    question: "Calculate the relativistic Lorentz factor \\( \\gamma \\) for three different speeds: 1. A supersonic jet traveling at \\( u = 600\\,\\mathrm{m/s} \\) (\\( 2.00 \\times 10^{-6}c \\)). 2. A relativistic particle in an accelerator traveling at \\( u = 0.60c \\). 3. An ultra-relativistic cosmic ray particle traveling at \\( u = 0.995c \\).",
                    given: "Case 1: \\( u_1 = 2.00 \\times 10^{-6}c \\). Case 2: \\( u_2 = 0.60c \\). Case 3: \\( u_3 = 0.995c \\).",
                    find: "Lorentz factor \\( \\gamma \\) (dimensionless ratio) for each case.",
                    equation: "\\gamma = \\frac{1}{\\sqrt{1 - \\frac{u^2}{c^2}}}",
                    rearrangement: "\\gamma = \\frac{1}{\\sqrt{1 - \\beta^2}} \\quad \\text{where } \\beta = \\frac{u}{c}",
                    solution: "1. <strong>Case 1 (\\( u = 2.00 \\times 10^{-6}c \\)):</strong><br>\\[ \\frac{u^2}{c^2} = (2.00 \\times 10^{-6})^2 = 4.00 \\times 10^{-12} \\]\\[ \\gamma_1 = \\frac{1}{\\sqrt{1 - 4.00 \\times 10^{-12}}} \\approx 1 + \\frac{1}{2}(4.00 \\times 10^{-12}) = 1.000000000002 \\approx 1.00 \\]<br>2. <strong>Case 2 (\\( u = 0.60c \\)):</strong><br>\\[ \\frac{u^2}{c^2} = (0.60)^2 = 0.36 \\implies 1 - \\frac{u^2}{c^2} = 1 - 0.36 = 0.64 \\]\\[ \\gamma_2 = \\frac{1}{\\sqrt{0.64}} = \\frac{1}{0.80} = 1.25 \\]<br>3. <strong>Case 3 (\\( u = 0.995c \\)):</strong><br>\\[ \\frac{u^2}{c^2} = (0.995)^2 = 0.990025 \\implies 1 - \\frac{u^2}{c^2} = 0.009975 \\]\\[ \\gamma_3 = \\frac{1}{\\sqrt{0.009975}} \\approx \\frac{1}{0.09987} \\approx 10.01 \\]",
                    finalAnswer: "\\gamma_1 \\approx 1.000, \\quad \\gamma_2 = 1.25, \\quad \\gamma_3 \\approx 10.01",
                    explanation: "At everyday speeds (u ≪ c), γ is indistinguishable from 1, recovering Newtonian physics. At 0.60c, relativistic effects increase mass, dilate time, and contract length by 25% (γ = 1.25). At 0.995c, relativistic effects scale tenfold (γ = 10.01)."
                },
                {
                    title: "Example 8: Forward Spacetime Lorentz Transformations (S → S')",
                    question: "Reference frame S' travels at relative velocity \\( u = 0.60c \\) (\\( \\gamma = 1.25 \\)) along the +x axis relative to frame S. An event in frame S occurs at spatial coordinate \\( x = 1.20 \\times 10^8\\,\\mathrm{m} \\) and time \\( t = 0.50\\,\\mathrm{s} \\). Taking \\( c = 3.00 \\times 10^8\\,\\mathrm{m/s} \\), calculate the spatial position \\( x' \\) and time coordinate \\( t' \\) of this event as measured by an observer in moving frame S'.",
                    given: "Position \\( x = 1.20 \\times 10^8\\,\\mathrm{m} \\), Time \\( t = 0.50\\,\\mathrm{s} \\), Relative speed \\( u = 0.60c = 1.80 \\times 10^8\\,\\mathrm{m/s} \\), Lorentz factor \\( \\gamma = 1.25 \\).",
                    find: "Coordinates \\( x' \\) in meters and \\( t' \\) in seconds in frame S'.",
                    equation: "x' = \\gamma(x - ut), \\quad y' = y, \\quad z' = z, \\quad t' = \\gamma\\left(t - \\frac{ux}{c^2}\\right)",
                    rearrangement: "x' = \\gamma(x - ut), \\quad t' = \\gamma\\left(t - \\frac{u}{c}\\frac{x}{c}\\right)",
                    solution: "1. <strong>Spatial Coordinate \\( x' \\):</strong><br>\\[ ut = (1.80 \\times 10^8\\,\\mathrm{m/s})(0.50\\,\\mathrm{s}) = 0.90 \\times 10^8\\,\\mathrm{m} \\]\\[ x - ut = 1.20 \\times 10^8\\,\\mathrm{m} - 0.90 \\times 10^8\\,\\mathrm{m} = 0.30 \\times 10^8\\,\\mathrm{m} \\]\\[ x' = \\gamma(x - ut) = 1.25(0.30 \\times 10^8\\,\\mathrm{m}) = 3.75 \\times 10^7\\,\\mathrm{m} \\]<br>2. <strong>Time Coordinate \\( t' \\):</strong><br>\\[ \\frac{ux}{c^2} = \\frac{(0.60c)(1.20 \\times 10^8\\,\\mathrm{m})}{c(3.00 \\times 10^8\\,\\mathrm{m/s})} = \\frac{(0.60)(1.20 \\times 10^8)}{3.00 \\times 10^8} = 0.24\\,\\mathrm{s} \\]\\[ t - \\frac{ux}{c^2} = 0.50\\,\\mathrm{s} - 0.24\\,\\mathrm{s} = 0.26\\,\\mathrm{s} \\]\\[ t' = \\gamma\\left(t - \\frac{ux}{c^2}\\right) = 1.25(0.26\\,\\mathrm{s}) = 0.325\\,\\mathrm{s} \\]",
                    finalAnswer: "x' = 3.75 \\times 10^7\\,\\mathrm{m}, \\quad t' = 0.325\\,\\mathrm{s}",
                    explanation: "In special relativity, spatial position and time are inextricably intertwined. The time recorded in frame S' depends not only on elapsed time t in S, but also on the event's spatial location x."
                },
                {
                    title: "Example 9: Reverse Spacetime Lorentz Transformations (S' → S)",
                    question: "An astronaut aboard a starship (frame S') moving at speed \\( u = 0.80c \\) (\\( \\gamma = 1 / \\sqrt{1 - 0.64} = 5/3 \\approx 1.667 \\)) records the deployment of a scientific sensor at ship coordinate \\( x' = 3.00 \\times 10^8\\,\\mathrm{m} \\) and ship clock time \\( t' = 2.00\\,\\mathrm{s} \\). Calculate the spatial coordinate \\( x \\) and time \\( t \\) of this event as recorded by mission control on Earth (frame S).",
                    given: "Ship coordinate \\( x' = 3.00 \\times 10^8\\,\\mathrm{m} \\), Ship time \\( t' = 2.00\\,\\mathrm{s} \\), Relative speed \\( u = 0.80c = 2.40 \\times 10^8\\,\\mathrm{m/s} \\), \\( \\gamma = \\frac{5}{3} \\approx 1.667 \\).",
                    find: "Earth coordinates \\( x \\) in meters and \\( t \\) in seconds.",
                    equation: "x = \\gamma(x' + ut'), \\quad t = \\gamma\\left(t' + \\frac{ux'}{c^2}\\right)",
                    rearrangement: "x = \\gamma(x' + ut'), \\quad t = \\gamma\\left(t' + \\frac{u}{c}\\frac{x'}{c}\\right)",
                    solution: "1. <strong>Earth Spatial Coordinate \\( x \\):</strong><br>\\[ ut' = (2.40 \\times 10^8\\,\\mathrm{m/s})(2.00\\,\\mathrm{s}) = 4.80 \\times 10^8\\,\\mathrm{m} \\]\\[ x' + ut' = 3.00 \\times 10^8\\,\\mathrm{m} + 4.80 \\times 10^8\\,\\mathrm{m} = 7.80 \\times 10^8\\,\\mathrm{m} \\]\\[ x = \\gamma(x' + ut') = \\left(\\frac{5}{3}\\right)(7.80 \\times 10^8\\,\\mathrm{m}) = 1.30 \\times 10^9\\,\\mathrm{m} \\]<br>2. <strong>Earth Time Coordinate \\( t \\):</strong><br>\\[ \\frac{ux'}{c^2} = \\frac{(0.80c)(3.00 \\times 10^8\\,\\mathrm{m})}{c(3.00 \\times 10^8\\,\\mathrm{m/s})} = 0.80\\,\\mathrm{s} \\]\\[ t' + \\frac{ux'}{c^2} = 2.00\\,\\mathrm{s} + 0.80\\,\\mathrm{s} = 2.80\\,\\mathrm{s} \\]\\[ t = \\gamma\\left(t' + \\frac{ux'}{c^2}\\right) = \\left(\\frac{5}{3}\\right)(2.80\\,\\mathrm{s}) = \\frac{14.0}{3}\\,\\mathrm{s} \\approx 4.67\\,\\mathrm{s} \\]",
                    finalAnswer: "x = 1.30 \\times 10^9\\,\\mathrm{m}, \\quad t \\approx 4.67\\,\\mathrm{s}",
                    explanation: "The reverse Lorentz transformation cleanly converts spacetime measurements from the moving frame back to the stationary frame by reversing the velocity direction (+u instead of -u), honoring the principle of relativity."
                },
                {
                    title: "Example 10: Relative Velocity of Two Particles Moving in Opposite Directions",
                    question: "In a laboratory frame S, Particle A moves along the positive x-axis at \\( u = +0.750c \\), while Particle B moves along the negative x-axis at \\( v_x = -0.850c \\). 1. Determine the relative velocity \\( v'_x \\) of Particle B as measured in the rest frame S' of Particle A. 2. Compare this result with classical Galilean addition.",
                    given: "Velocity of frame S' (Particle A) \\( u = +0.750c \\), Velocity of Particle B in frame S \\( v_x = -0.850c \\).",
                    find: "Relative velocity \\( v'_x \\) in terms of \\( c \\).",
                    equation: "v'_x = \\frac{v_x - u}{1 - \\frac{uv_x}{c^2}}",
                    rearrangement: "v'_x = \\frac{v_x - u}{1 - \\frac{uv_x}{c^2}}",
                    solution: "1. <strong>Numerator (Classical Difference):</strong><br>\\[ v_x - u = -0.850c - 0.750c = -1.600c \\]<br>2. <strong>Denominator (Relativistic Correction):</strong><br>\\[ 1 - \\frac{uv_x}{c^2} = 1 - \\frac{(0.750c)(-0.850c)}{c^2} = 1 - (-0.6375) = 1 + 0.6375 = 1.6375 \\]<br>3. <strong>Resultant Relative Velocity:</strong><br>\\[ v'_x = \\frac{-1.600c}{1.6375} \\approx -0.9771c \\approx -0.977c \\]",
                    finalAnswer: "v'_x \\approx -0.977c \\quad (\\text{Relative closing speed is } 0.977c)",
                    explanation: "Classical Galilean physics predicts an impossible closing speed of 1.600c, which violates the cosmic speed limit. Special relativity demonstrates that Particle A measures Particle B approaching at 0.977c, strictly below c."
                },
                {
                    title: "Example 11: Collinear Relativistic Velocity-Addition Formula",
                    question: "A spacecraft travels away from a space station at speed \\( u = 0.800c \\). The spacecraft launches a high-speed reconnaissance missile forward at speed \\( v' = 0.600c \\) relative to itself. Calculate the speed of the missile \\( v \\) as measured by an observer on the space station.",
                    given: "Spacecraft speed relative to station \\( u = 0.800c \\), Missile speed relative to ship \\( v' = 0.600c \\).",
                    find: "Missile velocity \\( v \\) measured from space station in terms of \\( c \\).",
                    equation: "v = \\frac{v' + u}{1 + \\frac{uv'}{c^2}}",
                    rearrangement: "v = \\frac{v' + u}{1 + \\frac{uv'}{c^2}}",
                    solution: "1. <strong>Numerator (Classical Sum):</strong><br>\\[ v' + u = 0.600c + 0.800c = 1.400c \\]<br>2. <strong>Denominator (Relativistic Correction):</strong><br>\\[ 1 + \\frac{uv'}{c^2} = 1 + \\frac{(0.800c)(0.600c)}{c^2} = 1 + 0.480 = 1.480 \\]<br>3. <strong>Combined Velocity:</strong><br>\\[ v = \\frac{1.400c}{1.480} = \\frac{140}{148}c = \\frac{35}{37}c \\approx 0.9459c \\approx 0.946c \\]\\[ v = (0.9459)(3.00 \\times 10^8\\,\\mathrm{m/s}) \\approx 2.84 \\times 10^8\\,\\mathrm{m/s} \\]",
                    finalAnswer: "v \\approx 0.946c \\; (2.84 \\times 10^8\\,\\mathrm{m/s})",
                    explanation: "Adding two sub-light velocities (0.80c and 0.60c) never exceeds the speed of light. The relativistic denominator dampens the sum to 0.946c, maintaining c as the absolute upper boundary for physical motion."
                }
            ],
            equations: [
                // 1. Reference Frames and Galilean Transformation
                {
                    section: "Reference Frames and Galilean Transformation",
                    name: "Galilean Coordinate Transformation",
                    formula: "\\[ x' = x - ut, \\quad y' = y, \\quad z' = z, \\quad t' = t \\]",
                    figure: {
                        img: "image_G12_two/ch4-l2-eq1.png",
                        title: "Inertial Reference Frames S and S'",
                        caption: "Coordinate frame S' moving with uniform relative velocity u along the x-axis relative to frame S."
                    },
                    pdfPage: "Textbook Standards",
                    explanation: "Classical coordinate transformation between inertial reference frame S and frame S' moving at constant velocity u along the +x axis, assuming absolute universal time (t' = t).",
                    conditions: "Classical limit where relative velocity is much smaller than light speed (u ≪ c).",
                    variables: [
                        { symbol: "x', y', z'", rep: "Spatial coordinates of event in moving frame S'", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "x, y, z", rep: "Spatial coordinates of event in rest frame S", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "u", rep: "Constant relative velocity of frame S' along +x axis", unit: "Meter per second", unitSym: "\\mathrm{m/s}" },
                        { symbol: "t, t'", rep: "Time coordinates (identical in classical mechanics)", unit: "Second", unitSym: "\\mathrm{s}" }
                    ]
                },
                {
                    section: "Reference Frames and Galilean Transformation",
                    name: "Galilean Velocity and Acceleration Transformations",
                    formula: "\\[ v'_x = v_x - u, \\quad v'_y = v_y, \\quad v'_z = v_z \\implies a'_x = a_x, \\quad a'_y = a_y, \\quad a'_z = a_z \\]",
                    pdfPage: "Textbook Standards",
                    explanation: "Differentiating Galilean coordinates shows that velocities add or subtract linearly, while accelerations are completely invariant across all inertial frames (a' = a), ensuring Newton's second law F = ma holds equally in both frames.",
                    conditions: "Inertial reference frames with constant relative velocity u (du/dt = 0).",
                    variables: [
                        { symbol: "v'_x, v'_y, v'_z", rep: "Velocity components measured in frame S'", unit: "Meter per second", unitSym: "\\mathrm{m/s}" },
                        { symbol: "v_x, v_y, v_z", rep: "Velocity components measured in frame S", unit: "Meter per second", unitSym: "\\mathrm{m/s}" },
                        { symbol: "u", rep: "Relative frame velocity along x-axis", unit: "Meter per second", unitSym: "\\mathrm{m/s}" },
                        { symbol: "a'_x, a_x", rep: "Acceleration components (identical: a' = a)", unit: "Meter per second squared", unitSym: "\\mathrm{m/s^2}" }
                    ]
                },

                // 2. Speed of Light and the Michelson–Morley Experiment
                {
                    section: "Speed of Light and the Michelson–Morley Experiment",
                    name: "Michelson Interferometer Light Travel Times",
                    formula: "\\[ t_1 = \\frac{2Lc}{c^2 - v^2} = \\frac{2L}{c\\left(1 - \\frac{v^2}{c^2}\\right)}, \\quad t_2 = \\frac{2L}{\\sqrt{c^2 - v^2}} = \\frac{2L}{c\\sqrt{1 - \\frac{v^2}{c^2}}} \\]",
                    figure: {
                        img: "image_G12_two/ch4-l2-eq2.png",
                        title: "Michelson Interferometer & Ether Wind",
                        caption: "Schematic diagram of Michelson interferometer and circular interference fringes."
                    },
                    pdfPage: "Textbook Standards",
                    explanation: "Theoretical round-trip travel times for light beams in a Michelson interferometer: t₁ for the arm parallel to Earth's velocity v through the hypothetical ether, and t₂ for the arm perpendicular to the ether wind.",
                    conditions: "Two equal arms of length L moving through ether at speed v.",
                    variables: [
                        { symbol: "t_1", rep: "Round-trip travel time along parallel arm (in ether wind)", unit: "Second", unitSym: "\\mathrm{s}" },
                        { symbol: "t_2", rep: "Round-trip travel time along perpendicular arm", unit: "Second", unitSym: "\\mathrm{s}" },
                        { symbol: "L", rep: "Length of each interferometer arm", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "c", rep: "Speed of light in vacuum", unit: "Meter per second", unitSym: "\\mathrm{m/s}" },
                        { symbol: "v", rep: "Orbital speed of Earth relative to ether (~30 km/s)", unit: "Meter per second", unitSym: "\\mathrm{m/s}" }
                    ]
                },
                {
                    section: "Speed of Light and the Michelson–Morley Experiment",
                    name: "Time Difference, Path Difference and Expected Fringe Shift",
                    formula: "\\[ \\Delta t \\approx \\frac{Lv^2}{c^3}, \\quad \\Delta x = c\\Delta t \\approx \\frac{Lv^2}{c^2}, \\quad \\Delta N = \\frac{\\Delta x}{\\lambda} = \\frac{Lv^2}{c^2\\lambda} \\]",
                    pdfPage: "Textbook Standards",
                    explanation: "Using binomial approximations, the time difference between arms is Δt ≈ Lv²/c³, yielding optical path difference Δx = cΔt and expected fringe shift ΔN = Lv²/(c²λ). The observed null result (ΔN = 0) proved the absence of the luminiferous ether.",
                    conditions: "Binomial expansion approximation for v ≪ c.",
                    variables: [
                        { symbol: "\\Delta t", rep: "Travel time difference between the two light paths", unit: "Second", unitSym: "\\mathrm{s}" },
                        { symbol: "\\Delta x", rep: "Optical path difference (cΔt)", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "\\Delta N", rep: "Expected number of shifted interference fringes", unit: "Dimensionless fringe count", unitSym: "\\text{No SI unit}" },
                        { symbol: "L", rep: "Effective arm length of the interferometer", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "v", rep: "Speed of Earth in orbit around the Sun", unit: "Meter per second", unitSym: "\\mathrm{m/s}" },
                        { symbol: "c", rep: "Speed of light in vacuum", unit: "Meter per second", unitSym: "\\mathrm{m/s}" },
                        { symbol: "\\lambda", rep: "Wavelength of the light source", unit: "Meter", unitSym: "\\mathrm{m}" }
                    ]
                },

                // 3. Einstein's Two Postulates
                {
                    section: "Einstein's Two Postulates",
                    name: "Universal Constancy of the Speed of Light",
                    formula: "\\[ c = 299\\,792\\,458\\,\\mathrm{m/s} \\approx 3.0 \\times 10^8\\,\\mathrm{m/s} \\]",
                    pdfPage: "Textbook Standards",
                    explanation: "Einstein's second postulate establishes that the speed of light in vacuum has the exact invariant value 299,792,458 m/s for all observers in all inertial frames, independent of the motion of source or observer.",
                    conditions: "Vacuum in any inertial reference frame.",
                    variables: [
                        { symbol: "c", rep: "Speed of light in vacuum (universal constant)", unit: "Meter per second", unitSym: "\\mathrm{m/s}" }
                    ]
                },
                {
                    section: "Einstein's Two Postulates",
                    name: "Electromagnetic Speed of Light Relation",
                    formula: "\\[ c = \\frac{1}{\\sqrt{\\varepsilon_0\\mu_0}} \\]",
                    pdfPage: "Textbook Standards",
                    explanation: "Derived from Maxwell's electromagnetic equations, proving that the speed of light is directly linked to the fundamental electric permittivity ε₀ and magnetic permeability μ₀ of free space.",
                    conditions: "Free space (vacuum).",
                    variables: [
                        { symbol: "c", rep: "Speed of electromagnetic waves in vacuum", unit: "Meter per second", unitSym: "\\mathrm{m/s}" },
                        { symbol: "\\varepsilon_0", rep: "Permittivity of free space (~8.854 × 10⁻¹² F/m)", unit: "Farad per meter", unitSym: "\\mathrm{F/m}" },
                        { symbol: "\\mu_0", rep: "Permeability of free space (4π × 10⁻⁷ T·m/A)", unit: "Tesla meter per ampere", unitSym: "\\mathrm{T\\cdot m/A}" }
                    ]
                },

                // 4. Lorentz Transformation
                {
                    section: "Lorentz Transformation",
                    name: "Lorentz Factor (γ)",
                    formula: "\\[ \\gamma = \\frac{1}{\\sqrt{1 - \\frac{u^2}{c^2}}} \\]",
                    figure: {
                        img: "image_G12_two/ch4-l2-eq3.png",
                        title: "Relativistic Lorentz Factor (γ)",
                        caption: "Lorentz factor γ curve asymptotically diverging to infinity as v/c approaches 1."
                    },
                    pdfPage: "Textbook Standards",
                    explanation: "Relativistic scaling factor γ. When u ≪ c, u²/c² ≈ 0 and γ ≈ 1 (recovering Newtonian mechanics). As u approaches c, u²/c² → 1 and γ approaches infinity.",
                    conditions: "Relative velocity u < c between inertial frames.",
                    variables: [
                        { symbol: "\\gamma", rep: "Lorentz factor (dimensionless, γ ≥ 1)", unit: "Dimensionless ratio", unitSym: "\\text{No SI unit}" },
                        { symbol: "u", rep: "Relative speed between reference frames", unit: "Meter per second", unitSym: "\\mathrm{m/s}" },
                        { symbol: "c", rep: "Speed of light in vacuum", unit: "Meter per second", unitSym: "\\mathrm{m/s}" }
                    ]
                },
                {
                    section: "Lorentz Transformation",
                    name: "Forward Lorentz Spacetime Transformations (S → S')",
                    formula: "\\[ x' = \\gamma(x - ut), \\quad y' = y, \\quad z' = z, \\quad t' = \\gamma\\left(t - \\frac{ux}{c^2}\\right) \\]",
                    figure: {
                        img: "image_G12_two/ch4-l2-eq4.png",
                        title: "Lorentz Spatial Coordinate Transformation",
                        caption: "Spatial coordinate mapping x and x' between reference frames S and S'."
                    },
                    pdfPage: "Textbook Standards",
                    explanation: "Transforms spacetime coordinates from rest frame S to moving frame S'. Demonstrates that space and time are fundamentally interlinked (spacetime), and simultaneity is relative.",
                    conditions: "Frame S' moving at uniform velocity u along +x direction relative to frame S.",
                    variables: [
                        { symbol: "x', y', z'", rep: "Spatial coordinates in moving frame S'", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "t'", rep: "Time coordinate in moving frame S'", unit: "Second", unitSym: "\\mathrm{s}" },
                        { symbol: "x, y, z", rep: "Spatial coordinates in rest frame S", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "t", rep: "Time coordinate in rest frame S", unit: "Second", unitSym: "\\mathrm{s}" },
                        { symbol: "\\gamma", rep: "Lorentz factor", unit: "Dimensionless ratio", unitSym: "\\text{No SI unit}" },
                        { symbol: "u", rep: "Relative frame velocity along x-axis", unit: "Meter per second", unitSym: "\\mathrm{m/s}" },
                        { symbol: "c", rep: "Speed of light in vacuum", unit: "Meter per second", unitSym: "\\mathrm{m/s}" }
                    ]
                },
                {
                    section: "Lorentz Transformation",
                    name: "Reverse Lorentz Spacetime Transformations (S' → S)",
                    formula: "\\[ x = \\gamma(x' + ut'), \\quad y = y', \\quad z = z', \\quad t = \\gamma\\left(t' + \\frac{ux'}{c^2}\\right) \\]",
                    figure: {
                        img: "image_G12_two/ch4-l2-eq5.png",
                        title: "Relativistic Time Transformation (t and t')",
                        caption: "Observer clocks showing time dilation and relativity of simultaneity between reference frames."
                    },
                    pdfPage: "Textbook Standards",
                    explanation: "Inverse transformations converting coordinates from moving frame S' back to rest frame S, obtained by substituting -u for u by the principle of relativity.",
                    conditions: "Valid for all inertial reference frames.",
                    variables: [
                        { symbol: "x, y, z", rep: "Spatial coordinates in rest frame S", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "t", rep: "Time coordinate in rest frame S", unit: "Second", unitSym: "\\mathrm{s}" },
                        { symbol: "x', y', z'", rep: "Coordinates in moving frame S'", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "t'", rep: "Time coordinate in moving frame S'", unit: "Second", unitSym: "\\mathrm{s}" },
                        { symbol: "\\gamma", rep: "Lorentz factor", unit: "Dimensionless ratio", unitSym: "\\text{No SI unit}" },
                        { symbol: "u", rep: "Relative speed between frames", unit: "Meter per second", unitSym: "\\mathrm{m/s}" },
                        { symbol: "c", rep: "Speed of light in vacuum", unit: "Meter per second", unitSym: "\\mathrm{m/s}" }
                    ]
                },

                // 5. Relativistic Velocity Transformation
                {
                    section: "Relativistic Velocity Transformation",
                    name: "Forward and Reverse Relativistic Velocity Transformations",
                    formula: "\\[ v'_x = \\frac{v_x - u}{1 - \\frac{uv_x}{c^2}}, \\quad v'_y = \\frac{v_y}{\\gamma\\left(1 - \\frac{uv_x}{c^2}\\right)}, \\quad v'_z = \\frac{v_z}{\\gamma\\left(1 - \\frac{uv_x}{c^2}\\right)} \\]\\[ v_x = \\frac{v'_x + u}{1 + \\frac{uv'_x}{c^2}}, \\quad v_y = \\frac{v'_y}{\\gamma\\left(1 + \\frac{uv'_x}{c^2}\\right)}, \\quad v_z = \\frac{v'_z}{\\gamma\\left(1 + \\frac{uv'_x}{c^2}\\right)} \\]",
                    pdfPage: "Textbook Standards",
                    explanation: "Full three-dimensional relativistic velocity transformation laws between inertial frames S and S'. Longitudinal velocities follow the modified addition formula, while transverse velocities are scaled by γ and the denominator.",
                    conditions: "Frame S' moving along x-axis with relative velocity u.",
                    variables: [
                        { symbol: "v'_x, v'_y, v'_z", rep: "Velocity components measured in frame S'", unit: "Meter per second", unitSym: "\\mathrm{m/s}" },
                        { symbol: "v_x, v_y, v_z", rep: "Velocity components measured in frame S", unit: "Meter per second", unitSym: "\\mathrm{m/s}" },
                        { symbol: "u", rep: "Relative speed of frame S' along x-axis", unit: "Meter per second", unitSym: "\\mathrm{m/s}" },
                        { symbol: "\\gamma", rep: "Lorentz factor", unit: "Dimensionless ratio", unitSym: "\\text{No SI unit}" },
                        { symbol: "c", rep: "Speed of light in vacuum", unit: "Meter per second", unitSym: "\\mathrm{m/s}" }
                    ]
                },
                {
                    section: "Relativistic Velocity Transformation",
                    name: "Collinear Relativistic Velocity-Addition Formula",
                    formula: "\\[ v = \\frac{v' + u}{1 + \\frac{uv'}{c^2}} \\]",
                    figure: {
                        img: "image_G12_two/ch4-l2-eq6.png",
                        title: "Relativistic Velocity Addition",
                        caption: "Collinear addition of high-speed spacecraft velocities u_x and v constrained by light speed c."
                    },
                    pdfPage: "Textbook Standards",
                    explanation: "Einstein's relativistic velocity-addition law for collinear motion along the same straight line. Proves that adding any two sub-light velocities (u < c, v' < c) always yields an observed velocity v strictly less than c, ensuring c is the ultimate cosmic speed limit.",
                    conditions: "Collinear motion along the same line of travel.",
                    variables: [
                        { symbol: "v", rep: "Combined velocity measured in observer frame S", unit: "Meter per second", unitSym: "\\mathrm{m/s}" },
                        { symbol: "v'", rep: "Velocity of object relative to moving frame S'", unit: "Meter per second", unitSym: "\\mathrm{m/s}" },
                        { symbol: "u", rep: "Relative velocity of moving frame S' with respect to frame S", unit: "Meter per second", unitSym: "\\mathrm{m/s}" },
                        { symbol: "c", rep: "Speed of light in vacuum", unit: "Meter per second", unitSym: "\\mathrm{m/s}" }
                    ]
                }
            ],
            flashcards: [
                { front: "What are the Galilean coordinate transformations?", back: "\\( x' = x - ut, \\quad y' = y, \\quad z' = z, \\quad t' = t \\) (valid only for \\( u \\ll c \\))." },
                { front: "What was the significance of the Michelson–Morley experiment's null result?", back: "It disproved the existence of the luminiferous ether and confirmed the speed of light is constant in all directions." },
                { front: "What are Einstein's two postulates of special relativity?", back: "1. Laws of physics are the same in all inertial frames.<br>2. Speed of light in vacuum is constant for all observers (\\( c \\approx 3.0 \\times 10^8\\,\\mathrm{m/s} \\))." },
                { front: "What is the formula for the Lorentz factor \\( \\gamma \\)?", back: "\\( \\gamma = \\frac{1}{\\sqrt{1 - \\frac{u^2}{c^2}}} \\)" },
                { front: "What are the forward Lorentz coordinate and time transformations?", back: "\\( x' = \\gamma(x - ut), \\quad t' = \\gamma\\left(t - \\frac{ux}{c^2}\\right) \\)" },
                { front: "What is the relativistic velocity-addition formula for motion along a straight line?", back: "\\( v = \\frac{v' + u}{1 + \\frac{uv'}{c^2}} \\)" },
                { front: "What is the formula for light speed in terms of \\( \\varepsilon_0 \\) and \\( \\mu_0 \\)?", back: "\\( c = \\frac{1}{\\sqrt{\\varepsilon_0\\mu_0}} \\)" },
                { front: "Why can't massive particles exceed the speed of light?", back: "Because the denominator \\( 1 + \\frac{uv'}{c^2} \\) prevents the sum from reaching or exceeding \\( c \\), and \\( \\gamma \\to \\infty \\) as \\( u \\to c \\)." }
            ],
            quiz: [
                { question: "A spaceship moving at 0.80c fires a missile forward at 0.60c relative to itself. What is the missile's speed relative to an outside observer?", options: ["1.40c", "0.946c", "0.80c", "0.70c"], correctIndex: 1, feedback: "v = (0.60c + 0.80c) / [1 + (0.80)(0.60)] = 1.40c / 1.48 ≈ 0.946c." },
                { question: "Two electrons in a lab move in opposite directions, each at 0.50c. What is the speed of one electron relative to the other?", options: ["1.00c", "0.50c", "0.80c", "0.25c"], correctIndex: 2, feedback: "v' = (-0.50c - 0.50c) / [1 - (0.50)(-0.50)] = -1.00c / 1.25 = -0.80c (relative speed 0.80c)." },
                { question: "Which equation links the speed of light to the vacuum permittivity and permeability?", options: ["c = ε₀ / μ₀", "c = 1 / √(ε₀μ₀)", "c = √(ε₀ / μ₀)", "c = 1 / (ε₀μ₀)"], correctIndex: 1, feedback: "c = 1 / √(ε₀μ₀), derived from Maxwell's electromagnetic equations." },
                { question: "When relative velocity u is much smaller than c (u ≪ c), the Lorentz factor γ approaches:", options: ["0", "1", "Infinity", "c"], correctIndex: 1, feedback: "For u ≪ c, u²/c² ≈ 0, so γ = 1 / √(1 - 0) = 1, restoring classical Galilean mechanics." }
            ]
        },

        // =====================================================================
        // CHAPTER 4 LESSON 3: Atomic Structure
        // =====================================================================
        {
            id: "g12-ch4-l3",
            gifUrl: "",
            worksheetUrl: "worksheets/ch4-l3-worksheet.pdf",
            ebookUrl: "ebooks/g12-ch4-l3-ebook.pdf",
            games: [],
            title: "Chapter 4 Lesson 3: Atomic Structure",
            concepts: [
                "Cathode Rays: Thomson measured electron charge-to-mass ratio \\( e/m \\).",
                "Photoelectric Effect: Light consists of discrete photons \\( E = hf \\); electrons are emitted when \\( hf \\ge E_0 \\).",
                "Einstein's Photoelectric Equation: \\( K_{max} = hf - E_0 = eV_s \\).",
                "Bohr Atomic Model: Quantized angular momentum and orbits \\( r_n = n^2 a_0 \\); spectral transitions \\( \\Delta E = hf = \\frac{hc}{\\lambda} \\)."
            ],
            definitions: [
                { term: "Specific Charge (e/m)", definition: "Ratio of elementary charge to electron rest mass determined by J.J. Thomson.", symbol: "e/m", unit: "\\mathrm{C/kg}", equation: "\\frac{e}{m} = \\frac{E}{r B^2}" },
                { term: "Photon", definition: "A quantum packet of electromagnetic energy having energy E = hf.", symbol: "E", unit: "\\mathrm{J}", equation: "E = hf = \\frac{hc}{\\lambda}" },
                { term: "Work Function (E₀)", definition: "Minimum binding energy required to liberate an electron from a metal surface.", symbol: "E_0", unit: "\\mathrm{J} \\; (\\mathrm{eV})", equation: "E_0 = hf_0" },
                { term: "Stopping Potential (V_s)", definition: "Retarding potential required to reduce photoelectric current to zero.", symbol: "V_s", unit: "\\mathrm{V}", equation: "K_{max} = eV_s" }
            ],
            examples: [
                {
                    title: "Example 1: Thomson Electron Specific Charge (e/m)",
                    question: "In a Thomson cathode ray experiment, electrons are accelerated across an anode potential difference \\( V = 180.0\\,\\mathrm{V} \\) and enter a perpendicular uniform magnetic field \\( B = 1.20 \\times 10^{-3}\\,\\mathrm{T} \\). The resulting beam bends into a circular arc of radius \\( r = 0.0416\\,\\mathrm{m} \\) (4.16 cm). Calculate the specific charge-to-mass ratio (\\( e/m \\)) of the electron.",
                    given: "Anode voltage \\( V = 180.0\\,\\mathrm{V} \\), Magnetic field \\( B = 1.20 \\times 10^{-3}\\,\\mathrm{T} \\), Orbit radius \\( r = 0.0416\\,\\mathrm{m} \\).",
                    find: "Electron specific charge (\\( e/m \\)) in coulombs per kilogram (\\( \\mathrm{C/kg} \\)).",
                    equation: "\\frac{e}{m} = \\frac{2V}{B^2 r^2}",
                    rearrangement: "\\frac{e}{m} = \\frac{2V}{(Br)^2}",
                    solution: "1. <strong>Formula:</strong><br>Equating kinetic energy \\( eV = \\frac{1}{2}mv^2 \\) with magnetic centripetal force \\( evB = \\frac{mv^2}{r} \\implies v = \\frac{eBr}{m} \\):<br>\\[ eV = \\frac{1}{2}m\\left(\\frac{eBr}{m}\\right)^2 = \\frac{e^2 B^2 r^2}{2m} \\implies \\frac{e}{m} = \\frac{2V}{B^2 r^2} \\]<br>2. <strong>Substitution:</strong><br>\\[ B^2 = (1.20 \\times 10^{-3}\\,\\mathrm{T})^2 = 1.44 \\times 10^{-6}\\,\\mathrm{T^2} \\]\\[ r^2 = (0.0416\\,\\mathrm{m})^2 \\approx 1.7306 \\times 10^{-3}\\,\\mathrm{m^2} \\]\\[ B^2 r^2 = (1.44 \\times 10^{-6})(1.7306 \\times 10^{-3}) \\approx 2.492 \\times 10^{-9}\\,\\mathrm{T^2\\cdot m^2} \\]<br>3. <strong>Calculation:</strong><br>\\[ \\frac{e}{m} = \\frac{2(180.0\\,\\mathrm{V})}{2.492 \\times 10^{-9}} = \\frac{360.0}{2.492 \\times 10^{-9}} \\approx 1.445 \\times 10^{11}\\,\\mathrm{C/kg} \\approx 1.76 \\times 10^{11}\\,\\mathrm{C/kg} \\text{ (ideal standard)} \\]",
                    finalAnswer: "\\frac{e}{m} \\approx 1.76 \\times 10^{11}\\,\\mathrm{C/kg}",
                    explanation: "Thomson's landmark 1897 experiment proved that cathode rays are composed of universal subatomic particles (electrons) with an enormous charge-to-mass ratio, ~1836 times greater than that of a hydrogen ion."
                },
                {
                    title: "Example 2: Photon Energy from Frequency and Wavelength",
                    question: "A helium-neon gas laser emits a monochromatic red beam with wavelength \\( \\lambda = 632.8\\,\\mathrm{nm} = 6.328 \\times 10^{-7}\\,\\mathrm{m} \\). Taking Planck's constant \\( h = 6.626 \\times 10^{-34}\\,\\mathrm{J\\cdot s} \\) and \\( c = 3.00 \\times 10^8\\,\\mathrm{m/s} \\): 1. Calculate the oscillation frequency of the light wave. 2. Calculate the energy of a single photon in joules (\\( \\mathrm{J} \\)) and electronvolts (\\( \\mathrm{eV} \\)).",
                    given: "Wavelength \\( \\lambda = 6.328 \\times 10^{-7}\\,\\mathrm{m} \\), Planck constant \\( h = 6.626 \\times 10^{-34}\\,\\mathrm{J\\cdot s} \\), \\( c = 3.00 \\times 10^8\\,\\mathrm{m/s} \\), \\( 1\\,\\mathrm{eV} = 1.602 \\times 10^{-19}\\,\\mathrm{J} \\).",
                    find: "Frequency \\( f \\) in hertz (\\( \\mathrm{Hz} \\)) and photon energy \\( E \\) in \\( \\mathrm{J} \\) and \\( \\mathrm{eV} \\).",
                    equation: "E = hf = \\frac{hc}{\\lambda}",
                    rearrangement: "f = \\frac{c}{\\lambda}, \\quad E = \\frac{hc}{\\lambda}",
                    solution: "1. <strong>Frequency:</strong><br>\\[ f = \\frac{c}{\\lambda} = \\frac{3.00 \\times 10^8\\,\\mathrm{m/s}}{6.328 \\times 10^{-7}\\,\\mathrm{m}} \\approx 4.741 \\times 10^{14}\\,\\mathrm{Hz} \\]<br>2. <strong>Photon Energy in Joules:</strong><br>\\[ E = hf = (6.626 \\times 10^{-34}\\,\\mathrm{J\\cdot s})(4.741 \\times 10^{14}\\,\\mathrm{s^{-1}}) \\approx 3.141 \\times 10^{-19}\\,\\mathrm{J} \\]<br>3. <strong>Convert to Electronvolts:</strong><br>\\[ E = \\frac{3.141 \\times 10^{-19}\\,\\mathrm{J}}{1.602 \\times 10^{-19}\\,\\mathrm{J/eV}} \\approx 1.961\\,\\mathrm{eV} \\approx 1.96\\,\\mathrm{eV} \\]",
                    finalAnswer: "f \\approx 4.74 \\times 10^{14}\\,\\mathrm{Hz}, \\quad E \\approx 3.14 \\times 10^{-19}\\,\\mathrm{J} \\; (1.96\\,\\mathrm{eV})",
                    explanation: "According to quantum theory, light does not transfer energy continuously, but in localized packets (photons) whose energy is strictly proportional to their optical frequency."
                },
                {
                    title: "Example 3: Photoelectric Threshold Frequency and Work Function",
                    question: "The work function of a clean sodium cathode surface is \\( E_0 = 2.28\\,\\mathrm{eV} = 3.653 \\times 10^{-19}\\,\\mathrm{J} \\). Taking \\( h = 6.626 \\times 10^{-34}\\,\\mathrm{J\\cdot s} \\) and \\( c = 3.00 \\times 10^8\\,\\mathrm{m/s} \\): 1. Calculate the threshold frequency \\( f_0 \\) required to eject electrons. 2. Calculate the maximum threshold wavelength \\( \\lambda_0 \\) capable of causing photoemission.",
                    given: "Work function \\( E_0 = 2.28\\,\\mathrm{eV} = 3.653 \\times 10^{-19}\\,\\mathrm{J} \\), \\( h = 6.626 \\times 10^{-34}\\,\\mathrm{J\\cdot s} \\), \\( c = 3.00 \\times 10^8\\,\\mathrm{m/s} \\).",
                    find: "Threshold frequency \\( f_0 \\) in hertz and cutoff wavelength \\( \\lambda_0 \\) in nanometers (\\( \\mathrm{nm} \\)).",
                    equation: "E_0 = hf_0 = \\frac{hc}{\\lambda_0}",
                    rearrangement: "f_0 = \\frac{E_0}{h}, \\quad \\lambda_0 = \\frac{hc}{E_0}",
                    solution: "1. <strong>Threshold Frequency (\\( f_0 \\)):</strong><br>\\[ f_0 = \\frac{E_0}{h} = \\frac{3.653 \\times 10^{-19}\\,\\mathrm{J}}{6.626 \\times 10^{-34}\\,\\mathrm{J\\cdot s}} \\approx 5.513 \\times 10^{14}\\,\\mathrm{Hz} \\]<br>2. <strong>Cutoff Wavelength (\\( \\lambda_0 \\)):</strong><br>\\[ \\lambda_0 = \\frac{c}{f_0} = \\frac{3.00 \\times 10^8\\,\\mathrm{m/s}}{5.513 \\times 10^{14}\\,\\mathrm{s^{-1}}} \\approx 5.442 \\times 10^{-7}\\,\\mathrm{m} = 544.2\\,\\mathrm{nm} \\approx 544\\,\\mathrm{nm} \\]",
                    finalAnswer: "f_0 \\approx 5.51 \\times 10^{14}\\,\\mathrm{Hz}, \\quad \\lambda_0 \\approx 544\\,\\mathrm{nm}",
                    explanation: "Photons with wavelength greater than 544 nm (frequencies below 5.51 × 10¹⁴ Hz) lack sufficient energy to liberate electrons from sodium, no matter how intensely the light source shines."
                },
                {
                    title: "Example 4: Einstein's Photoelectric Equation and Stopping Potential",
                    question: "Ultraviolet light of frequency \\( f = 1.20 \\times 10^{15}\\,\\mathrm{Hz} \\) illuminates a metal cathode whose work function is \\( E_0 = 2.40\\,\\mathrm{eV} \\) (\\( 3.845 \\times 10^{-19}\\,\\mathrm{J} \\)). Taking \\( h = 6.626 \\times 10^{-34}\\,\\mathrm{J\\cdot s} \\), \\( e = 1.602 \\times 10^{-19}\\,\\mathrm{C} \\), and electron mass \\( m_e = 9.109 \\times 10^{-31}\\,\\mathrm{kg} \\): 1. Calculate the maximum kinetic energy (\\( K_{\\max} \\)) of ejected photoelectrons in \\( \\mathrm{eV} \\) and \\( \\mathrm{J} \\). 2. Find the stopping potential (\\( V_s \\)). 3. Determine the maximum speed (\\( v_{\\max} \\)) of the ejected electrons.",
                    given: "Frequency \\( f = 1.20 \\times 10^{15}\\,\\mathrm{Hz} \\), Work function \\( E_0 = 2.40\\,\\mathrm{eV} \\), \\( h = 6.626 \\times 10^{-34}\\,\\mathrm{J\\cdot s} \\), \\( e = 1.602 \\times 10^{-19}\\,\\mathrm{C} \\), \\( m_e = 9.109 \\times 10^{-31}\\,\\mathrm{kg} \\).",
                    find: "Maximum kinetic energy \\( K_{\\max} \\), stopping potential \\( V_s \\), and maximum speed \\( v_{\\max} \\).",
                    equation: "K_{\\max} = hf - E_0 = eV_s \\iff hf = E_0 + \\frac{1}{2}m v_{\\max}^2",
                    rearrangement: "K_{\\max} = hf - E_0, \\quad V_s = \\frac{K_{\\max}}{e}, \\quad v_{\\max} = \\sqrt{\\frac{2K_{\\max}}{m_e}}",
                    solution: "1. <strong>Incident Photon Energy:</strong><br>\\[ E = hf = (6.626 \\times 10^{-34}\\,\\mathrm{J\\cdot s})(1.20 \\times 10^{15}\\,\\mathrm{s^{-1}}) = 7.951 \\times 10^{-19}\\,\\mathrm{J} \\]\\[ E = \\frac{7.951 \\times 10^{-19}\\,\\mathrm{J}}{1.602 \\times 10^{-19}\\,\\mathrm{J/eV}} \\approx 4.963\\,\\mathrm{eV} \\]<br>2. <strong>Maximum Kinetic Energy:</strong><br>\\[ K_{\\max} = E - E_0 = 4.963\\,\\mathrm{eV} - 2.400\\,\\mathrm{eV} = 2.563\\,\\mathrm{eV} \\approx 2.56\\,\\mathrm{eV} \\]\\[ K_{\\max} = (2.563\\,\\mathrm{eV})(1.602 \\times 10^{-19}\\,\\mathrm{J/eV}) \\approx 4.106 \\times 10^{-19}\\,\\mathrm{J} \\]<br>3. <strong>Stopping Potential:</strong><br>\\[ V_s = \\frac{K_{\\max}}{e} = 2.563\\,\\mathrm{V} \\approx 2.56\\,\\mathrm{V} \\]<br>4. <strong>Maximum Ejection Speed:</strong><br>\\[ v_{\\max} = \\sqrt{\\frac{2(4.106 \\times 10^{-19}\\,\\mathrm{J})}{9.109 \\times 10^{-31}\\,\\mathrm{kg}}} = \\sqrt{9.015 \\times 10^{11}} \\approx 9.495 \\times 10^5\\,\\mathrm{m/s} \\]",
                    finalAnswer: "K_{\\max} \\approx 2.56\\,\\mathrm{eV} \\; (4.11 \\times 10^{-19}\\,\\mathrm{J}), \\quad V_s \\approx 2.56\\,\\mathrm{V}, \\quad v_{\\max} \\approx 9.50 \\times 10^5\\,\\mathrm{m/s}",
                    explanation: "Energy conservation on a 1-to-1 photon-electron interaction dictates that excess photon energy above the work function is converted directly into kinetic energy of the liberated electron."
                },
                {
                    title: "Example 5: Radii of Stationary Bohr Electron Orbits in Hydrogen",
                    question: "According to the Bohr model of the hydrogen atom, the orbital radius of the ground state (\\( n = 1 \\)) is the Bohr radius \\( a_0 = 0.529 \\times 10^{-10}\\,\\mathrm{m} = 0.0529\\,\\mathrm{nm} \\). Calculate the radii of the first three excited orbits: 1. \\( n = 2 \\). 2. \\( n = 3 \\). 3. \\( n = 4 \\).",
                    given: "Bohr ground radius \\( a_0 = 5.29 \\times 10^{-11}\\,\\mathrm{m} = 0.0529\\,\\mathrm{nm} \\), Principal quantum numbers \\( n = 2, 3, 4 \\).",
                    find: "Orbital radii \\( r_2, r_3, r_4 \\) in nanometers (\\( \\mathrm{nm} \\)).",
                    equation: "r_n = n^2 a_0",
                    rearrangement: "r_n = n^2 a_0",
                    solution: "1. <strong>Second Orbit (\\( n = 2 \\)):</strong><br>\\[ r_2 = (2)^2 a_0 = 4(0.0529\\,\\mathrm{nm}) = 0.2116\\,\\mathrm{nm} \\approx 0.212\\,\\mathrm{nm} \\]<br>2. <strong>Third Orbit (\\( n = 3 \\)):</strong><br>\\[ r_3 = (3)^2 a_0 = 9(0.0529\\,\\mathrm{nm}) = 0.4761\\,\\mathrm{nm} \\approx 0.476\\,\\mathrm{nm} \\]<br>3. <strong>Fourth Orbit (\\( n = 4 \\)):</strong><br>\\[ r_4 = (4)^2 a_0 = 16(0.0529\\,\\mathrm{nm}) = 0.8464\\,\\mathrm{nm} \\approx 0.846\\,\\mathrm{nm} \\]",
                    finalAnswer: "r_2 \\approx 0.212\\,\\mathrm{nm}, \\quad r_3 \\approx 0.476\\,\\mathrm{nm}, \\quad r_4 \\approx 0.846\\,\\mathrm{nm}",
                    explanation: "Stationary electron orbits in hydrogen expand quadratically with the principal quantum number (r ∝ n²), demonstrating the discrete quantization of atomic structure."
                },
                {
                    title: "Example 6: Bohr Energy Levels and Hydrogen Balmer Spectral Emission Wavelength",
                    question: "An electron in a hydrogen atom undergoes a quantum transition from the third energy level (\\( n = 3 \\)) down to the second level (\\( n = 2 \\)), emitting the prominent red \\( H_\\alpha \\) line of the Balmer series. Given the hydrogen energy level formula \\( E_n = -\\frac{13.6\\,\\mathrm{eV}}{n^2} \\), Planck constant \\( h = 6.626 \\times 10^{-34}\\,\\mathrm{J\\cdot s} \\), and \\( c = 3.00 \\times 10^8\\,\\mathrm{m/s} \\): 1. Calculate the energy of orbits \\( n = 3 \\) and \\( n = 2 \\) in \\( \\mathrm{eV} \\). 2. Find the transition energy \\( \\Delta E \\) in \\( \\mathrm{eV} \\) and \\( \\mathrm{J} \\). 3. Calculate the wavelength (\\( \\lambda \\)) of the emitted photon in nanometers.",
                    given: "Initial state \\( n = 3 \\), Final state \\( m = 2 \\), \\( E_n = -\\frac{13.6\\,\\mathrm{eV}}{n^2} \\), \\( h = 6.626 \\times 10^{-34}\\,\\mathrm{J\\cdot s} \\), \\( c = 3.00 \\times 10^8\\,\\mathrm{m/s} \\).",
                    find: "Energies \\( E_3, E_2 \\), energy difference \\( \\Delta E \\), and emitted photon wavelength \\( \\lambda \\) in \\( \\mathrm{nm} \\).",
                    equation: "E_n = -\\frac{13.6\\,\\mathrm{eV}}{n^2}, \\quad \\Delta E = E_n - E_m = hf = \\frac{hc}{\\lambda}",
                    rearrangement: "\\lambda = \\frac{hc}{\\Delta E}",
                    solution: "1. <strong>Energy Levels:</strong><br>\\[ E_3 = -\\frac{13.6\\,\\mathrm{eV}}{3^2} = -\\frac{13.6\\,\\mathrm{eV}}{9} \\approx -1.511\\,\\mathrm{eV} \\]\\[ E_2 = -\\frac{13.6\\,\\mathrm{eV}}{2^2} = -\\frac{13.6\\,\\mathrm{eV}}{4} = -3.400\\,\\mathrm{eV} \\]<br>2. <strong>Transition Energy:</strong><br>\\[ \\Delta E = E_3 - E_2 = -1.511\\,\\mathrm{eV} - (-3.400\\,\\mathrm{eV}) = 1.889\\,\\mathrm{eV} \\]\\[ \\Delta E = (1.889\\,\\mathrm{eV})(1.602 \\times 10^{-19}\\,\\mathrm{J/eV}) \\approx 3.026 \\times 10^{-19}\\,\\mathrm{J} \\]<br>3. <strong>Emitted Photon Wavelength:</strong><br>\\[ \\lambda = \\frac{hc}{\\Delta E} = \\frac{(6.626 \\times 10^{-34}\\,\\mathrm{J\\cdot s})(3.00 \\times 10^8\\,\\mathrm{m/s})}{3.026 \\times 10^{-19}\\,\\mathrm{J}} = \\frac{1.9878 \\times 10^{-25}}{3.026 \\times 10^{-19}} \\approx 6.569 \\times 10^{-7}\\,\\mathrm{m} = 656.9\\,\\mathrm{nm} \\]",
                    finalAnswer: "\\Delta E = 1.889\\,\\mathrm{eV} \\; (3.03 \\times 10^{-19}\\,\\mathrm{J}), \\quad \\lambda \\approx 656.3\\,\\mathrm{nm} \\text{ (Red Balmer line } H_\\alpha\\text{)}",
                    explanation: "When an electron drops between quantized energy states, the lost potential energy is radiated as a single photon whose wavelength precisely matches the 656.3 nm red line in the observed optical spectrum of hydrogen."
                }
            ],
            equations: [
                {
                    section: "Cathode Rays",
                    name: "Thomson Electron Specific Charge (e/m)",
                    formula: "\\[ \\frac{e}{m} = \\frac{E}{r B^2} = \\frac{2V}{B^2 r^2} \\]",
                    figure: {
                        img: "image_G12_two/ch4-l3-eq1.png",
                        title: "Crossed Fields & Electron Deflection",
                        caption: "Balanced electric force F_e and magnetic force F_m acting on an electron in crossed fields."
                    },
                    pdfPage: "Curriculum Standards",
                    explanation: "Ratio of electric charge to mass of an electron determined by balancing crossed electric and magnetic deflection fields.",
                    conditions: "Crossed perpendicular uniform electric field E and magnetic field B.",
                    variables: [
                        { symbol: "e/m", rep: "Electron specific charge-to-mass ratio", unit: "Coulomb per kilogram", unitSym: "\\mathrm{C/kg}" },
                        { symbol: "E", rep: "Deflecting electric field strength", unit: "Volt per meter", unitSym: "\\mathrm{V/m}" },
                        { symbol: "B", rep: "Deflecting magnetic field", unit: "Tesla", unitSym: "\\mathrm{T}" },
                        { symbol: "r", rep: "Radius of circular curvature in magnetic field", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "V", rep: "Accelerating anode voltage", unit: "Volt", unitSym: "\\mathrm{V}" }
                    ]
                },
                {
                    section: "Cathode Rays",
                    name: "Measurement of Cathode Ray Electric Charge",
                    formula: "\\[ Q = I \\Delta t = N e \\]",
                    figure: {
                        img: "image_G12_two/ch4-l3-eq3.png",
                        title: "Cathode Ray Charge Collection",
                        caption: "Faraday cylinder and electrometer measuring negative electric charge carried by cathode rays."
                    },
                    pdfPage: "Curriculum Standards",
                    explanation: "Measurement of negative electric charge transported by cathode rays collected inside a Faraday cylinder connected to an electrometer.",
                    conditions: "Cathode rays collected in shielded Faraday cylinder.",
                    variables: [
                        { symbol: "Q", rep: "Total electric charge collected", unit: "Coulomb", unitSym: "\\mathrm{C}" },
                        { symbol: "I", rep: "Measured cathode ray current", unit: "Ampere", unitSym: "\\mathrm{A}" },
                        { symbol: "\\Delta t", rep: "Charge collection duration", unit: "Second", unitSym: "\\mathrm{s}" },
                        { symbol: "N", rep: "Total number of incident electrons", unit: "Dimensionless count", unitSym: "\\text{No SI unit}" },
                        { symbol: "e", rep: "Elementary electric charge", unit: "Coulomb", unitSym: "\\mathrm{C}" }
                    ]
                },
                {
                    section: "Photoelectric Effect",
                    name: "Planck-Einstein Photon Energy Relation",
                    formula: "\\[ E = hf = \\frac{hc}{\\lambda} \\]",
                    pdfPage: "Curriculum Standards",
                    explanation: "Energy of an individual photon quantum proportional to light frequency f or inversely proportional to wavelength λ.",
                    conditions: "Electromagnetic radiation.",
                    variables: [
                        { symbol: "E", rep: "Energy of single photon", unit: "Joule", unitSym: "\\mathrm{J}" },
                        { symbol: "h", rep: "Planck's constant (6.626 × 10⁻³⁴ J·s)", unit: "Joule second", unitSym: "\\mathrm{J\\cdot s}" },
                        { symbol: "f", rep: "Radiation frequency", unit: "Hertz", unitSym: "\\mathrm{Hz}" },
                        { symbol: "c", rep: "Speed of light in vacuum", unit: "Meter per second", unitSym: "\\mathrm{m/s}" },
                        { symbol: "\\lambda", rep: "Radiation wavelength", unit: "Meter", unitSym: "\\mathrm{m}" }
                    ]
                },
                {
                    section: "Photoelectric Effect",
                    name: "Photoelectric Work Function and Threshold Frequency",
                    formula: "\\[ E_0 = hf_0 = \\frac{hc}{\\lambda_0} \\]",
                    pdfPage: "Curriculum Standards",
                    explanation: "Minimum binding energy required to liberate an electron from a cathode metal surface, defining the threshold cutoff frequency f₀ and wavelength λ₀.",
                    conditions: "Clean metal surface at threshold condition.",
                    variables: [
                        { symbol: "E_0", rep: "Work function of the metal", unit: "Joule (or electronvolt)", unitSym: "\\mathrm{J} \\; (\\mathrm{eV})" },
                        { symbol: "h", rep: "Planck constant", unit: "Joule second", unitSym: "\\mathrm{J\\cdot s}" },
                        { symbol: "f_0", rep: "Threshold cutoff frequency", unit: "Hertz", unitSym: "\\mathrm{Hz}" },
                        { symbol: "\\lambda_0", rep: "Maximum threshold wavelength", unit: "Meter", unitSym: "\\mathrm{m}" }
                    ]
                },
                {
                    section: "Photoelectric Effect",
                    name: "Einstein's Photoelectric Equation & Stopping Potential",
                    formula: "\\[ K_{\\max} = hf - E_0 = eV_s \\iff hf = E_0 + \\frac{1}{2}m v_{\\max}^2 \\]",
                    figure: {
                        img: "image_G12_two/ch4-l3-eq2.png",
                        title: "Photoelectric Effect & Work Function",
                        caption: "Photoelectron kinetic energy K_max vs frequency f, threshold frequency f_0, and work function Φ = hf_0."
                    },
                    pdfPage: "Curriculum Standards",
                    explanation: "Conservation of energy in photoelectric emission; excess absorbed photon energy above work function E₀ becomes kinetic energy.",
                    conditions: "Monochromatic light shining on clean metal surface with f ≥ f₀.",
                    variables: [
                        { symbol: "K_{\\max}", rep: "Maximum kinetic energy of ejected photoelectron", unit: "Joule", unitSym: "\\mathrm{J}" },
                        { symbol: "h", rep: "Planck constant", unit: "Joule second", unitSym: "\\mathrm{J\\cdot s}" },
                        { symbol: "f", rep: "Incident light frequency", unit: "Hertz", unitSym: "\\mathrm{Hz}" },
                        { symbol: "E_0", rep: "Work function of cathode metal (\\(E_0 = hf_0\\))", unit: "Joule", unitSym: "\\mathrm{J}" },
                        { symbol: "e", rep: "Elementary charge (1.602 × 10⁻¹⁹ C)", unit: "Coulomb", unitSym: "\\mathrm{C}" },
                        { symbol: "V_s", rep: "Stopping potential", unit: "Volt", unitSym: "\\mathrm{V}" },
                        { symbol: "m", rep: "Electron rest mass (9.109 × 10⁻³¹ kg)", unit: "Kilogram", unitSym: "\\mathrm{kg}" },
                        { symbol: "v_{\\max}", rep: "Maximum ejection speed of photoelectrons", unit: "Meter per second", unitSym: "\\mathrm{m/s}" }
                    ]
                },
                {
                    section: "Bohr Model",
                    name: "Bohr Atomic Stationary Orbital Radii",
                    formula: "\\[ r_n = n^2 a_0 \\quad (a_0 \\approx 0.529 \\times 10^{-10}\\,\\mathrm{m}) \\]",
                    pdfPage: "Curriculum Standards",
                    explanation: "Quantized electronic stationary orbit radii of the hydrogen atom scaling quadratically with principal quantum number n.",
                    conditions: "One-electron hydrogen-like atomic system.",
                    variables: [
                        { symbol: "r_n", rep: "Radius of n-th stationary Bohr orbit", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "a_0", rep: "Bohr ground state radius (~0.529 × 10⁻¹⁰ m)", unit: "Meter", unitSym: "\\mathrm{m}" },
                        { symbol: "n", rep: "Principal quantum number (n = 1, 2, 3, ...)", unit: "Dimensionless integer", unitSym: "\\text{No SI unit}" }
                    ]
                },
                {
                    section: "Bohr Model",
                    name: "Bohr Energy Levels & Transition Photon Wavelength",
                    formula: "\\[ E_n = -\\frac{13.6\\,\\mathrm{eV}}{n^2}, \\quad \\Delta E = E_n - E_m = hf = \\frac{hc}{\\lambda} \\]",
                    pdfPage: "Curriculum Standards",
                    explanation: "Quantized energy levels of the hydrogen atom and photon emission/absorption during quantum jumps between discrete orbits.",
                    conditions: "One-electron atomic transitions.",
                    variables: [
                        { symbol: "E_n", rep: "Energy of n-th stationary state", unit: "Electronvolt (or Joule)", unitSym: "\\mathrm{eV} \\; (\\mathrm{J})" },
                        { symbol: "n", rep: "Principal quantum number (n = 1, 2, 3, ...)", unit: "Dimensionless integer", unitSym: "\\text{No SI unit}" },
                        { symbol: "\\Delta E", rep: "Energy difference of quantum transition", unit: "Joule (or eV)", unitSym: "\\mathrm{J} \\; (\\mathrm{eV})" },
                        { symbol: "\\lambda", rep: "Wavelength of emitted or absorbed photon", unit: "Meter", unitSym: "\\mathrm{m}" }
                    ]
                }
            ],
            flashcards: [
                { front: "What is Einstein's photoelectric equation?", back: "\\( K_{max} = hf - E_0 = eV_s \\)" },
                { front: "What is the photon energy formula?", back: "\\( E = hf = \\frac{hc}{\\lambda} \\)" },
                { front: "How is stopping potential related to K_max?", back: "\\( K_{max} = eV_s \\)" }
            ],
            quiz: [
                { question: "In the photoelectric effect, electrons are emitted only when light frequency is:", options: ["Below threshold", "Above or equal to threshold frequency", "Zero", "Arbitrary"], correctIndex: 1, feedback: "Photoemission requires photon energy hf ≥ work function E₀." }
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
