// --- WIS Physics Hub Application Script ---

// --- Data Structure ---
const data = (typeof window !== 'undefined' && (window.physicsData || window.appData)) ? (window.physicsData || window.appData) : {
"9": [
{id:"g9-l1",gifUrl:"https://commons.wikimedia.org/wiki/Special:FilePath/Torque_animation.gif",worksheetUrl:"worksheets/g9-ch1-worksheet.pdf",games:[{topic:"Turning Effect",url:"https://g.co/gemini/share/da86f09d1c05"}],title:"Chapter 1: Turning Effect of Force",concepts:["Resultant Force: Calculated depending on the direction of the acting forces.","Trigonometry Basics: Using right triangles to relate angles to side lengths (sine, cosine, tangent).","Resolving Force: A force can be broken down into horizontal and vertical components.","Moment of a force: The turning effect produced by a force.","Principle of moment: For equilibrium, Anti-clockwise moment = Clockwise moment \\( M_{ACW} = M_{CW} \\)."],definitions:[
{term:"Resultant Force",definition:"The single overall vector force that represents the combined physical effect of two or more individual forces acting on an object.",symbol:"R",unit:"\\mathrm{N}",equation:"R = a + b \\quad\\text{or}\\quad R = |a - b|"},
{term:"Collinear Forces",definition:"Forces whose lines of action lie along the exact same straight line, acting in either the same or directly opposite directions.",symbol:"a, b",unit:"\\mathrm{N}",equation:"R = a + b \\quad (\\text{same}) \\;\\Big|\\; R = |a - b| \\quad (\\text{opposite})"},
{term:"Perpendicular Forces",definition:"Two forces that act at a right angle (90°) relative to each other, whose resultant forms the hypotenuse of a right-angled force triangle.",symbol:"R",unit:"\\mathrm{N}",equation:"R = \\sqrt{a^2 + b^2}"},
{term:"Parallelogram Law of Forces",definition:"If two forces acting at a point are represented in magnitude and direction by adjacent sides of a parallelogram, their resultant is represented by the diagonal passing through that point.",symbol:"R",unit:"\\mathrm{N}",equation:"R = \\sqrt{a^2 + b^2 + 2ab\\cos\\theta}"},
{term:"Resolution of a Force",definition:"The process of splitting a single applied vector force into two mutually perpendicular component forces (horizontal and vertical).",symbol:"F_x, F_y",unit:"\\mathrm{N}",equation:"F_x = F\\cos\\theta, \\; F_y = F\\sin\\theta"},
{term:"Horizontal Component",definition:"The part of an applied force that acts parallel to the horizontal ground or x-axis.",symbol:"F_x",unit:"\\mathrm{N}",equation:"F_x = F\\cos\\theta \\quad (\\theta \\text{ to horizontal})"},
{term:"Vertical Component",definition:"The part of an applied force that acts perpendicular to the ground along the vertical y-axis.",symbol:"F_y",unit:"\\mathrm{N}",equation:"F_y = F\\sin\\theta \\quad (\\theta \\text{ to horizontal})"},
{term:"Direction of Resultant",definition:"The orientation angle (\\(\\theta\\)) that the resultant force makes with a chosen reference axis (typically the horizontal adjacent side).",symbol:"\\theta",unit:"{^\\circ} \\text{ or rad}",equation:"\\theta = \\tan^{-1}\\left(\\frac{b}{a}\\right)"},
{term:"Moment of a Force",definition:"The turning effect or rotational tendency produced by a force about a fixed pivot or axis of rotation.",symbol:"M",unit:"\\mathrm{N\\cdot m}",equation:"M = F \\times d_{\\perp}"},
{term:"Perpendicular Distance",definition:"The shortest distance measured perpendicularly from the axis of rotation or pivot to the line of action of the force.",symbol:"d_{\\perp}",unit:"\\mathrm{m}",equation:"d_{\\perp} = \\frac{M}{F}"},
{term:"Principle of Moments",definition:"For an object in rotational equilibrium, the total sum of anti-clockwise moments about any pivot must equal the total sum of clockwise moments.",symbol:"M_{ACW}, M_{CW}",unit:"\\mathrm{N\\cdot m}",equation:"M_{ACW} = M_{CW}"},
{term:"Net Moment",definition:"The resultant turning effect obtained by finding the algebraic difference between anti-clockwise and clockwise moments.",symbol:"M_{net}",unit:"\\mathrm{N\\cdot m}",equation:"M_{net} = M_{ACW} - M_{CW}"},
{term:"Parallel Forces",definition:"Forces that act along parallel lines of action in the same or opposite directions on a rigid body.",symbol:"F_1, F_2",unit:"\\mathrm{N}",equation:"F_1 d_1 = F_2 d_2 \\implies \\frac{F_1}{F_2} = \\frac{d_2}{d_1}"},
{term:"Beam Support Reaction Forces",definition:"The upward normal forces exerted by supports at points A and B to maintain equilibrium when supporting a downward load.",symbol:"F_A, F_B",unit:"\\mathrm{N}",equation:"F_A = \\frac{F \\times OB}{AB}, \\; F_B = \\frac{F \\times OA}{AB}"}
],
examples:[
{title:"Resultant of Forces in Same Direction",given:"Force \\( a = 15\\,\\mathrm{N} \\) directed East, Force \\( b = 25\\,\\mathrm{N} \\) directed East.",find:"Resultant force (\\( R \\)).",equation:"R = a + b",solution:"Since both forces act along the same line and in the identical direction:<br>\\( R = 15\\,\\mathrm{N} + 25\\,\\mathrm{N} = 40\\,\\mathrm{N} \\).",finalAnswer:"R = 40\\,\\mathrm{N} \\text{ (East)}",explanation:"When collinear forces pull in the same direction, their magnitudes add directly to produce a stronger net force."},
{title:"Resultant of Forces in Opposite Directions",given:"Force \\( a = 40\\,\\mathrm{N} \\) pulling to the right, Force \\( b = 18\\,\\mathrm{N} \\) pulling to the left.",find:"Resultant force (\\( R \\)).",equation:"R = |a - b|",solution:"Because the forces pull in opposite directions, subtract the smaller magnitude from the larger:<br>\\( R = |40\\,\\mathrm{N} - 18\\,\\mathrm{N}| = 22\\,\\mathrm{N} \\).",finalAnswer:"R = 22\\,\\mathrm{N} \\text{ (to the right)}",explanation:"Opposite forces cancel each other partially; the resulting motion is dictated by the leftover force in the direction of the larger force."},
{title:"Resultant of Perpendicular Forces (90° Angle)",given:"Horizontal force \\( a = 8\\,\\mathrm{N} \\), Vertical force \\( b = 6\\,\\mathrm{N} \\).",find:"Magnitude of the resultant force (\\( R \\)).",equation:"R = \\sqrt{a^2 + b^2}",solution:"Use Pythagoras' theorem on the perpendicular components:<br>\\( R = \\sqrt{(8)^2 + (6)^2} = \\sqrt{64 + 36} = \\sqrt{100} = 10\\,\\mathrm{N} \\).",finalAnswer:"R = 10\\,\\mathrm{N}",explanation:"Perpendicular vectors form the adjacent and opposite sides of a right triangle whose hypotenuse is the magnitude of the resultant force."},
{title:"Resultant of Two Forces at an Oblique Angle (Parallelogram Law)",given:"Force \\( a = 5\\,\\mathrm{N} \\), Force \\( b = 7\\,\\mathrm{N} \\), Angle between forces \\( \\theta = 60^\\circ \\).",find:"Resultant force (\\( R \\)).",equation:"R = \\sqrt{a^2 + b^2 + 2ab\\cos\\theta}",solution:"Substitute the values knowing that \\( \\cos 60^\\circ = 0.5 \\):<br>\\( R = \\sqrt{5^2 + 7^2 + 2(5)(7)\\cos 60^\\circ} \\)<br>\\( R = \\sqrt{25 + 49 + 70(0.5)} = \\sqrt{74 + 35} = \\sqrt{109} \\approx 10.44\\,\\mathrm{N} \\).",finalAnswer:"R \\approx 10.44\\,\\mathrm{N}",explanation:"The parallelogram law accounts for the geometric separation angle between two non-perpendicular vectors."},
{title:"Resolving Force (Angle with Horizontal Axis)",given:"Tension force \\( F = 50\\,\\mathrm{N} \\) acting at an angle \\( \\theta = 30^\\circ \\) above the horizontal ground.",find:"Horizontal component \\( F_x \\) and vertical component \\( F_y \\).",equation:"F_x = F\\cos\\theta, \\quad F_y = F\\sin\\theta",solution:"Using trigonometric functions for \\( \\theta = 30^\\circ \\) (\\( \\cos 30^\\circ \\approx 0.866 \\), \\( \\sin 30^\\circ = 0.5 \\)):<br>\\( F_x = 50 \\times \\cos 30^\\circ = 50 \\times 0.866 = 43.30\\,\\mathrm{N} \\)<br>\\( F_y = 50 \\times \\sin 30^\\circ = 50 \\times 0.5 = 25.00\\,\\mathrm{N} \\).",finalAnswer:"F_x = 43.30\\,\\mathrm{N}, \\quad F_y = 25.00\\,\\mathrm{N}",explanation:"When the angle is measured from the horizontal, the adjacent side corresponds to the cosine projection (horizontal force) and opposite to sine (vertical force)."},
{title:"Resolving Force (Angle with Vertical Axis)",given:"Applied force \\( F = 60\\,\\mathrm{N} \\) at an angle \\( \\theta = 45^\\circ \\) to the vertical wall.",find:"Horizontal component \\( F_x \\) and vertical component \\( F_y \\).",equation:"F_x = F\\sin\\theta, \\quad F_y = F\\cos\\theta",solution:"When the angle is with the vertical:<br>\\( F_x = 60 \\times \\sin 45^\\circ = 60 \\times 0.7071 \\approx 42.43\\,\\mathrm{N} \\)<br>\\( F_y = 60 \\times \\cos 45^\\circ = 60 \\times 0.7071 \\approx 42.43\\,\\mathrm{N} \\).",finalAnswer:"F_x = 42.43\\,\\mathrm{N}, \\quad F_y = 42.43\\,\\mathrm{N}",explanation:"When the reference angle shifts to the vertical axis, the opposite component becomes horizontal (sine) and adjacent becomes vertical (cosine)."},
{title:"Direction of Resultant Force",given:"Adjacent component \\( a = 4\\,\\mathrm{N} \\), Opposite component \\( b = 3\\,\\mathrm{N} \\).",find:"Direction angle \\( \\theta \\) with the horizontal.",equation:"\\theta = \\tan^{-1}\\left(\\frac{b}{a}\\right)",solution:"Substitute into the inverse tangent function:<br>\\( \\theta = \\tan^{-1}\\left(\\frac{3}{4}\\right) = \\tan^{-1}(0.75) \\approx 36.87^\\circ \\).",finalAnswer:"\\theta \\approx 36.9^\\circ",explanation:"The tangent of the angle in a right triangle is the ratio of opposite to adjacent sides, giving the direction of the vector."},
{title:"Calculating the Moment of a Force (Torque)",given:"Force applied to spanner \\( F = 20\\,\\mathrm{N} \\), Perpendicular distance \\( d_{\\perp} = 25\\,\\mathrm{cm} = 0.25\\,\\mathrm{m} \\).",find:"Moment of the force (\\( M \\)).",equation:"M = F \\times d_{\\perp}",solution:"Ensure distance is in meters, then multiply:<br>\\( M = 20\\,\\mathrm{N} \\times 0.25\\,\\mathrm{m} = 5.0\\,\\mathrm{N\\cdot m} \\).",finalAnswer:"M = 5.0\\,\\mathrm{N\\cdot m}",explanation:"Moment quantifies the turning effect; lengthening the spanner arm increases the moment produced for the exact same applied effort."},
{title:"Two Parallel Forces on a Balanced Lever",given:"Load force \\( F_2 = 120\\,\\mathrm{N} \\) placed at distance \\( d_2 = 0.5\\,\\mathrm{m} \\) from pivot. Applied effort is located at distance \\( d_1 = 1.5\\,\\mathrm{m} \\).",find:"Effort force \\( F_1 \\) required for equilibrium.",equation:"F_1 d_1 = F_2 d_2 \\implies F_1 = \\frac{F_2 d_2}{d_1}",solution:"Rearrange the parallel forces relation for \\( F_1 \\):<br>\\( F_1 = \\frac{120\\,\\mathrm{N} \\times 0.5\\,\\mathrm{m}}{1.5\\,\\mathrm{m}} = \\frac{60}{1.5} = 40\\,\\mathrm{N} \\).",finalAnswer:"F_1 = 40\\,\\mathrm{N}",explanation:"Because the effort arm is three times longer than the load arm, only one-third of the load's force is needed to maintain balance."},
{title:"Principle of Moments (Equilibrium Check)",given:"Left-side anti-clockwise force \\( F_1 = 30\\,\\mathrm{N} \\) at \\( d_1 = 2\\,\\mathrm{m} \\). Right-side load \\( F_2 = 40\\,\\mathrm{N} \\) at \\( d_2 = 1.5\\,\\mathrm{m} \\).",find:"Confirm whether the beam is in rotational equilibrium.",equation:"M_{ACW} = F_1 d_1, \\quad M_{CW} = F_2 d_2",solution:"Compute each moment separately:<br>\\( M_{ACW} = 30\\,\\mathrm{N} \\times 2.0\\,\\mathrm{m} = 60\\,\\mathrm{N\\cdot m} \\)<br>\\( M_{CW} = 40\\,\\mathrm{N} \\times 1.5\\,\\mathrm{m} = 60\\,\\mathrm{N\\cdot m} \\)<br>Since \\( M_{ACW} = M_{CW} \\), the beam satisfies the principle of moments.",finalAnswer:"M_{ACW} = M_{CW} = 60\\,\\mathrm{N\\cdot m} \\text{ (Beam is in equilibrium)}",explanation:"The system is in rotational equilibrium because the total anti-clockwise moment perfectly balances the total clockwise moment."},
{title:"Net Moment on an Unbalanced Beam",given:"Anti-clockwise moment \\( M_{ACW} = 85\\,\\mathrm{N\\cdot m} \\), Clockwise moment \\( M_{CW} = 50\\,\\mathrm{N\\cdot m} \\).",find:"Net moment (\\( M_{net} \\)) and direction of rotation.",equation:"M_{net} = M_{ACW} - M_{CW}",solution:"Subtract clockwise from anti-clockwise moment:<br>\\( M_{net} = 85\\,\\mathrm{N\\cdot m} - 50\\,\\mathrm{N\\cdot m} = 35\\,\\mathrm{N\\cdot m} \\).",finalAnswer:"M_{net} = 35\\,\\mathrm{N\\cdot m} \\text{ (Anti-clockwise)}",explanation:"Because the anti-clockwise moment exceeds the clockwise moment, the beam accelerates rotationally in the anti-clockwise direction."},
{title:"Reaction Forces on a Supported Beam",given:"Total beam length \\( AB = 4.0\\,\\mathrm{m} \\). A downward load \\( F = 600\\,\\mathrm{N} \\) acts at point O where \\( OA = 1.0\\,\\mathrm{m} \\) and \\( OB = 3.0\\,\\mathrm{m} \\).",find:"Reaction support forces at A (\\( F_A \\)) and B (\\( F_B \\)).",equation:"F_A = \\frac{F \\times OB}{AB}, \\quad F_B = \\frac{F \\times OA}{AB}",solution:"Calculate each reaction force using beam moments:<br>\\( F_A = \\frac{600\\,\\mathrm{N} \\times 3.0\\,\\mathrm{m}}{4.0\\,\\mathrm{m}} = 450\\,\\mathrm{N} \\)<br>\\( F_B = \\frac{600\\,\\mathrm{N} \\times 1.0\\,\\mathrm{m}}{4.0\\,\\mathrm{m}} = 150\\,\\mathrm{N} \\)<br>Verification: \\( F_A + F_B = 450 + 150 = 600\\,\\mathrm{N} = F \\).",finalAnswer:"F_A = 450\\,\\mathrm{N}, \\quad F_B = 150\\,\\mathrm{N}",explanation:"The support closer to the downward load carries the greater share of the weight to preserve translational and rotational equilibrium."}
],
equations:[
{section:"Resultant Force",name:"Resultant: Opposite direction",formula:"\\( R = |a - b| \\)",symbols:[{symbol:"R",desc:"Resultant Force (N)"},{symbol:"a, b",desc:"Component Forces (N)"}]},
{section:"Resultant Force",name:"Resultant: Same direction",formula:"\\( R = a + b \\)",symbols:[{symbol:"R",desc:"Resultant Force (N)"},{symbol:"a, b",desc:"Component Forces (N)"}]},
{section:"Resultant Force (Perpendicular)",name:"Resultant: At 90° angle",formula:"\\( R = \\sqrt{a^2 + b^2} \\)",symbols:[{symbol:"R",desc:"Resultant Force (N)"},{symbol:"a, b",desc:"Component Forces (N)"}]},
{section:"Resultant Force (At angle θ)",name:"Parallelogram Law of Forces",formula:"\\( R = \\sqrt{a^2 + b^2 + 2ab \\cos \\theta} \\)",symbols:[{symbol:"R",desc:"Resultant Force (N)"},{symbol:"a, b",desc:"Component Forces (N)"},{symbol:"θ",desc:"Angle between forces (° or rad)"}]},
{section:"Trigonometry Basics (Right Triangle)",name:"Sine (\\(\\sin\\))",formula:"\\( \\sin \\theta = \\frac{\\text{opposite}}{\\text{hypotenuse}} = \\frac{b}{R} \\)",symbols:[{symbol:"b",desc:"Opposite Side (N)"},{symbol:"R",desc:"Hypotenuse (N)"}]},
{section:"Trigonometry Basics (Right Triangle)",name:"Cosine (\\(\\cos\\))",formula:"\\( \\cos \\theta = \\frac{\\text{adjacent}}{\\text{hypotenuse}} = \\frac{a}{R} \\)",symbols:[{symbol:"a",desc:"Adjacent Side (N)"},{symbol:"R",desc:"Hypotenuse (N)"}]},
{section:"Trigonometry Basics (Right Triangle)",name:"Tangent (\\(\\tan\\))",formula:"\\( \\tan \\theta = \\frac{\\text{opposite}}{\\text{adjacent}} = \\frac{b}{a} \\)",symbols:[{symbol:"b",desc:"Opposite Side (N)"},{symbol:"a",desc:"Adjacent Side (N)"}]},
{section:"Resolving Force (Angle with horizontal axis)",name:"Horizontal Force",formula:"\\( F_x = F \\cos \\theta \\)",symbols:[{symbol:"F_x",desc:"Horizontal Force (N)"},{symbol:"F",desc:"Applied Force (N)"},{symbol:"θ",desc:"Angle (° or rad)"}]},
{section:"Resolving Force (Angle with horizontal axis)",name:"Vertical Force",formula:"\\( F_y = F \\sin \\theta \\)",symbols:[{symbol:"F_y",desc:"Vertical Force (N)"},{symbol:"F",desc:"Applied Force (N)"},{symbol:"θ",desc:"Angle (° or rad)"}]},
{section:"Resolving Force (Angle with vertical axis)",name:"Horizontal Force",formula:"\\( F_x = F \\sin \\theta \\)",symbols:[{symbol:"F_x",desc:"Horizontal Force (N)"},{symbol:"F",desc:"Applied Force (N)"},{symbol:"θ",desc:"Angle (° or rad)"}]},
{section:"Resolving Force (Angle with vertical axis)",name:"Vertical Force",formula:"\\( F_y = F \\cos \\theta \\)",symbols:[{symbol:"F_y",desc:"Vertical Force (N)"},{symbol:"F",desc:"Applied Force (N)"},{symbol:"θ",desc:"Angle (° or rad)"}]},
{section:"Direction",name:"Direction of a resultant force",formula:"\\( \\theta = \\tan^{-1}\\left(\\frac{\\text{opp}}{\\text{adj}}\\right) = \\tan^{-1}\\left(\\frac{b}{a}\\right) \\)",symbols:[{symbol:"θ",desc:"Direction Angle (° or rad)"},{symbol:"b",desc:"Opposite Force (N)"},{symbol:"a",desc:"Adjacent Force (N)"}]},
{section:"Moment",name:"Moment of a force",formula:"\\( M = F \\times d_{\\perp} \\)",symbols:[{symbol:"M",desc:"Moment of Force (N·m)"},{symbol:"F",desc:"Applied Force (N)"},{symbol:"d_⊥",desc:"Perpendicular distance (m)"}]},
{section:"Moment",name:"Two parallel forces",formula:"\\( F_1 d_1 = F_2 d_2 \\Rightarrow \\frac{F_1}{F_2} = \\frac{d_2}{d_1} \\)",symbols:[{symbol:"F_1, F_2",desc:"Parallel Forces (N)"},{symbol:"d_1, d_2",desc:"Distances from pivot (m)"}]},
{section:"Moment",name:"Principle of moment",formula:"\\( M_{ACW} = M_{CW} \\)",symbols:[{symbol:"M_{ACW}",desc:"Anti-Clockwise Moment (N·m)"},{symbol:"M_{CW}",desc:"Clockwise Moment (N·m)"}]},
{section:"Moment",name:"Net moment",formula:"\\( M_{net} = M_{ACW} - M_{CW} \\)",symbols:[{symbol:"M_{net}",desc:"Net Moment (N·m)"}]},
{section:"Moment (Force Components)",name:"Force Components",formula:"\\( F_A = \\frac{F \\times OB}{AB} \\), \\( F_B = \\frac{F \\times OA}{AB} \\)",symbols:[{symbol:"F_A, F_B",desc:"Reaction Forces (N)"},{symbol:"F",desc:"Applied Force (N)"},{symbol:"OA, OB, AB",desc:"Distances along beam (m)"}]}
],flashcards:[
{front:"How do you calculate the resultant of two forces acting in opposite directions?", back:"\\( R = |a - b| \\)"},
{front:"How do you calculate the resultant of two forces acting in the same direction?", back:"\\( R = a + b \\)"},
{front:"What is the formula for the resultant of two forces acting at a 90° angle?", back:"\\( R = \\sqrt{a^2 + b^2} \\)"},
{front:"What is the general formula for the resultant of two forces acting at an angle \\(\\alpha\\)?", back:"\\( R = \\sqrt{a^2 + b^2 + 2ab \\cos \\alpha} \\)"},
{front:"How do you find the horizontal component of a force (when \\(\\theta\\) is with horizontal axis)?", back:"\\( F_x = F \\cos \\theta \\)"},
{front:"How do you find the vertical component of a force (when \\(\\theta\\) is with horizontal axis)?", back:"\\( F_y = F \\sin \\theta \\)"},
{front:"What is the formula for finding the direction (angle) of a resultant force?", back:"\\( \\theta = \\tan^{-1}\\left(\\frac{b}{a}\\right) \\)"},
{front:"What is the definition of the moment of a force?", back:"\\( M = F \\times d_{\\perp} \\)"},
{front:"What is the principle of moments for an object in equilibrium?", back:"Anti-clockwise moment = Clockwise moment \\( (M_{ACW} = M_{CW}) \\)"},
{front:"How is the net moment calculated?", back:"\\( M_{net} = M_{ACW} - M_{CW} \\)"}
],quiz:[
{question:"Which formula correctly represents the horizontal component of a force (when \\(\\theta\\) is with the horizontal axis)?", options:["\\( F_x = F \\sin \\theta \\)","\\( F_x = F \\cos \\theta \\)","\\( F_x = F \\tan \\theta \\)","\\( F_x = F / \\cos \\theta \\)"], correctIndex:1, feedback:"The horizontal component uses the cosine function, assuming \\(\\theta\\) is the angle with the horizontal."},
{question:"Which formula correctly represents the vertical component of a force (when \\(\\theta\\) is with the horizontal axis)?", options:["\\( F_y = F \\sin \\theta \\)","\\( F_y = F \\cos \\theta \\)","\\( F_y = F \\tan \\theta \\)","\\( F_y = F / \\sin \\theta \\)"], correctIndex:0, feedback:"The vertical component uses the sine function, \\( F_y = F \\sin \\theta \\)."},
{question:"When two parallel forces act on a beam in equilibrium, which relation is correct?", options:["\\( F_1 / d_1 = F_2 / d_2 \\)","\\( F_1 + d_1 = F_2 + d_2 \\)","\\( F_1 d_1 = F_2 d_2 \\)","\\( F_1 d_2 = F_2 d_1 \\)"], correctIndex:2, feedback:"According to the principle of moments, the force times its distance from the pivot is balanced: \\( F_1 d_1 = F_2 d_2 \\)."},
{question:"If two forces 3N and 4N act at a 90° angle, what is the magnitude of the resultant force?", options:["1N","7N","5N","12N"], correctIndex:2, feedback:"Using Pythagoras' theorem: \\( R = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = 5 \\text{N} \\)."},
{question:"If two forces 5N and 2N act in opposite directions, what is the resultant force?", options:["7N","3N","10N","2.5N"], correctIndex:1, feedback:"For opposite directions, subtract the smaller force from the larger one: \\( |5 - 2| = 3 \\text{N} \\)."},
{question:"What is the correct SI unit for the moment of a force?", options:["N","J","N·m","N/m"], correctIndex:2, feedback:"Moment is Force multiplied by distance, giving Newton-meters (N·m)."},
{question:"How do you calculate the resultant of two forces acting in the same direction?", options:["Subtract them","Multiply them","Divide them","Add them"], correctIndex:3, feedback:"Forces in the same direction simply add together: \\( R = a + b \\)."},
{question:"What does \\( M_{net} \\) represent?", options:["Total force","Net moment (difference between ACW and CW moments)","Mass of the beam","Mechanical advantage"], correctIndex:1, feedback:"Net moment is the difference between Anti-clockwise and Clockwise moments: \\( M_{net} = M_{ACW} - M_{CW} \\)."},
{question:"Which expression gives the direction angle \\(\\theta\\) of a resultant force?", options:["\\( \\sin^{-1}(b/a) \\)","\\( \\cos^{-1}(b/a) \\)","\\( \\tan^{-1}(b/a) \\)","\\( \\tan^{-1}(a/b) \\)"], correctIndex:2, feedback:"The angle is found using the inverse tangent of the opposite over adjacent components: \\( \\tan^{-1}(b/a) \\)."},
{question:"For reaction forces on a beam supported at A and B with a load F, what is the force \\( F_A \\)?", options:["\\( F_A = F \\times \\frac{OA}{AB} \\)","\\( F_A = F \\times \\frac{OB}{AB} \\)","\\( F_A = F + OB \\)","\\( F_A = \\frac{AB}{F} \\)"], correctIndex:1, feedback:"By taking moments about B, \\( F_A \\times AB = F \\times OB \\), so \\( F_A = F \\times \\frac{OB}{AB} \\)."}
]},
{id:"g9-l2",gifUrl:"https://commons.wikimedia.org/wiki/Special:FilePath/Atwood_s_swinging_machine.gif",worksheetUrl:"worksheets/g9-ch2-worksheet.pdf",games:[{topic:"Levers",url:"https://g.co/gemini/share/0b9242977d1a"},{topic:"Inclined Plane",url:"https://g.co/gemini/share/a0f83fb13666"},{topic:"Pulley",url:"https://share.gemini.google/ikZlefCPf3VG"},{topic:"Gear and Belt System",url:"https://gemini.google.com/share/a559ad0916ce"},{topic:"Wheel and Axle",url:"https://gemini.google.com/share/8a5c6aeecc08"}],title:"Chapter 2: Simple Machines",concepts:["Simple Machines: Devices that change the magnitude, direction, or distance of force to make physical work easier.","Mechanical Advantage (MA): The factor by which a machine multiplies applied effort force, \\( MA = \\frac{F_R}{F_E} \\).","Velocity Ratio (VR): The ratio of distance moved by effort to distance moved by load, \\( VR = \\frac{d_E}{d_R} \\).","Efficiency (eff): The percentage of input work transformed into useful output work, \\( \\text{eff} = \\frac{MA}{VR} \\times 100\\% \\).","Key Machines: Levers (1st, 2nd, 3rd class), Inclined Planes (\\( MA = L/h \\)), Pulleys, Gears, and Wheel & Axle (\\( MA = R/r \\))."],definitions:[
{term:"Simple Machine",definition:"A basic mechanical device that changes the magnitude, direction, or distance of an applied force to make physical work easier.",symbol:"\\text{Machine}",unit:"\\text{No unit}",equation:"MA = \\frac{F_R}{F_E}"},
{term:"Effort Force",definition:"The external force applied by a person or motor to operate a machine.",symbol:"F_E",unit:"\\mathrm{N}",equation:"F_E = \\frac{F_R}{MA}"},
{term:"Resistance / Load Force",definition:"The resistive force or weight of the object that the machine overcomes or lifts.",symbol:"F_R",unit:"\\mathrm{N}",equation:"F_R = MA \\times F_E"},
{term:"Mechanical Advantage (MA)",definition:"The factor by which a machine multiplies the applied effort force to overcome a load.",symbol:"MA",unit:"\\text{No unit}",equation:"MA = \\frac{F_R}{F_E}"},
{term:"Velocity Ratio (VR)",definition:"The theoretical ratio of the distance moved by the effort force to the distance moved by the load force.",symbol:"VR",unit:"\\text{No unit}",equation:"VR = \\frac{d_E}{d_R}"},
{term:"Efficiency (eff)",definition:"The percentage of input work converted into useful output work, measuring energy lost to friction and heat.",symbol:"eff",unit:"\\%",equation:"eff = \\frac{MA}{VR} \\times 100\\% = \\frac{W_R}{W_E} \\times 100\\%"},
{term:"Lever",definition:"A rigid bar free to pivot about a fixed support point called the fulcrum, classified into 1st, 2nd, and 3rd class levers.",symbol:"\\text{Lever}",unit:"\\text{No unit}",equation:"\\frac{F_R}{F_E} = \\frac{d_E}{d_R}"},
{term:"Effort Arm",definition:"The perpendicular distance between the fulcrum and the line of action of the effort force.",symbol:"d_E",unit:"\\mathrm{m}",equation:"d_E = MA \\times d_R"},
{term:"Load Arm",definition:"The perpendicular distance between the fulcrum and the line of action of the load force.",symbol:"d_R",unit:"\\mathrm{m}",equation:"d_R = \\frac{d_E}{MA}"},
{term:"Inclined Plane",definition:"A flat supporting ramp surface tilted at an angle to the horizontal used to raise heavy loads by applying force along its length.",symbol:"\\text{Incline}",unit:"\\text{No unit}",equation:"MA = \\frac{L}{h}"},
{term:"Work Done by Effort",definition:"The total energy input supplied to the machine along the effort distance.",symbol:"W_E",unit:"\\mathrm{J}",equation:"W_E = F_E \\times L \\quad (\\text{or } F_E \\times d_E)"},
{term:"Work Done on Load",definition:"The useful gravitational potential energy gained by raising the load through vertical height.",symbol:"W_R",unit:"\\mathrm{J}",equation:"W_R = F_R \\times h \\quad (\\text{or } F_R \\times d_R)"},
{term:"Pulley System",definition:"A wheel with a grooved rim over which a rope passes, used to change the direction or reduce the required lifting effort.",symbol:"\\text{Pulley}",unit:"\\text{No unit}",equation:"MA = \\text{number of supporting rope strands}"},
{term:"Gear System",definition:"A mechanism of two or more meshed toothed wheels that transmit rotational motion and torque between shafts.",symbol:"\\text{Gears}",unit:"\\text{No unit}",equation:"MA = \\frac{N_R}{N_E} = \\frac{d_R}{d_E}"},
{term:"Gear Ratio (GR)",definition:"The ratio of the number of teeth or diameter of the driven gear (load) to the driving gear (effort).",symbol:"GR",unit:"\\text{No unit}",equation:"GR = \\frac{N_R}{N_E} = \\frac{d_R}{d_E}"},
{term:"Belt System",definition:"Two rotating pulleys linked by a continuous loop belt, transmitting torque across parallel shafts.",symbol:"\\text{Belt}",unit:"\\text{No unit}",equation:"N_E D_E = N_R D_R \\implies MA = \\frac{R_R}{R_E}"},
{term:"Wheel and Axle",definition:"A simple machine consisting of two concentric cylindrical wheels of different diameters that rotate together about the same axis.",symbol:"\\text{Wheel \\& Axle}",unit:"\\text{No unit}",equation:"MA = VR = \\frac{R}{r}"}
],
examples:[
{title:"Mechanical Advantage of a Lever",given:"Load force \\( F_R = 600\\,\\mathrm{N} \\), Effort applied \\( F_E = 150\\,\\mathrm{N} \\), Load arm \\( d_R = 0.4\\,\\mathrm{m} \\).",find:"Mechanical Advantage (\\( MA \\)) and required effort arm (\\( d_E \\)).",equation:"MA = \\frac{F_R}{F_E} = \\frac{d_E}{d_R}",solution:"1. Calculate the mechanical advantage:<br>\\( MA = \\frac{600\\,\\mathrm{N}}{150\\,\\mathrm{N}} = 4.0 \\).<br>2. Find the effort arm:<br>\\( d_E = MA \\times d_R = 4.0 \\times 0.4\\,\\mathrm{m} = 1.6\\,\\mathrm{m} \\).",finalAnswer:"MA = 4.0 \\quad(\\text{dimensionless}), \\quad d_E = 1.6\\,\\mathrm{m}",explanation:"A mechanical advantage of 4 means the lever multiplies the user's effort force fourfold, requiring an effort arm 4 times longer than the load arm."},
{title:"Efficiency of a Lever System",given:"Load force \\( F_R = 400\\,\\mathrm{N} \\), Effort force \\( F_E = 120\\,\\mathrm{N} \\), Load distance \\( d_R = 0.5\\,\\mathrm{m} \\), Effort distance \\( d_E = 2.0\\,\\mathrm{m} \\).",find:"Mechanical Advantage (\\( MA \\)), Velocity Ratio (\\( VR \\)), and Efficiency (\\( eff \\)).",equation:"eff = \\frac{MA}{VR} \\times 100\\% = \\frac{F_R \\times d_R}{F_E \\times d_E} \\times 100\\%",solution:"1. Calculate \\( MA = \\frac{F_R}{F_E} = \\frac{400}{120} \\approx 3.33 \\).<br>2. Calculate \\( VR = \\frac{d_E}{d_R} = \\frac{2.0}{0.5} = 4.0 \\).<br>3. Compute efficiency:<br>\\( eff = \\frac{3.33}{4.0} \\times 100\\% = 83.33\\% \\).",finalAnswer:"MA \\approx 3.33, \\quad VR = 4.0, \\quad eff \\approx 83.3\\%",explanation:"Because friction acts at the pivot, the actual mechanical advantage is lower than the theoretical velocity ratio, yielding an efficiency under 100%."},
{title:"Mechanical Advantage of an Inclined Plane",given:"Ramp length \\( L = 6.0\\,\\mathrm{m} \\), Vertical height \\( h = 1.5\\,\\mathrm{m} \\).",find:"Ideal Mechanical Advantage (\\( MA \\)) of the incline.",equation:"MA = \\frac{L}{h}",solution:"Substitute the ramp dimensions:<br>\\( MA = \\frac{6.0\\,\\mathrm{m}}{1.5\\,\\mathrm{m}} = 4.0 \\).",finalAnswer:"MA = 4.0",explanation:"An inclined plane reduces the force needed to elevate a heavy object by spreading the required work over a ramp distance 4 times greater than the height."},
{title:"Work Done on a Frictionless Inclined Plane",given:"Crate weight \\( F_R = 900\\,\\mathrm{N} \\), Ramp height \\( h = 2.0\\,\\mathrm{m} \\), Ramp length \\( L = 5.0\\,\\mathrm{m} \\).",find:"Work on load (\\( W_R \\)) and required effort force (\\( F_E \\)) assuming zero friction.",equation:"W_R = F_R \\times h, \\quad F_E L = F_R h \\implies F_E = \\frac{F_R h}{L}",solution:"1. Calculate work on load:<br>\\( W_R = 900\\,\\mathrm{N} \\times 2.0\\,\\mathrm{m} = 1800\\,\\mathrm{J} \\).<br>2. Since there is no friction, \\( W_E = W_R = 1800\\,\\mathrm{J} \\).<br>3. Find the effort force:<br>\\( F_E = \\frac{1800\\,\\mathrm{J}}{5.0\\,\\mathrm{m}} = 360\\,\\mathrm{N} \\).",finalAnswer:"W_R = 1800\\,\\mathrm{J}, \\quad F_E = 360\\,\\mathrm{N}",explanation:"Conservation of energy guarantees that without friction, the work input equals the gravitational work output, allowing a smaller pushing force of 360 N."},
{title:"Mechanical Advantage and Velocity Ratio of a Pulley System",given:"A block and tackle pulley system has 4 supporting cables lifting a load \\( F_R = 800\\,\\mathrm{N} \\). The load is raised by \\( d_R = 1.2\\,\\mathrm{m} \\).",find:"Ideal Mechanical Advantage (\\( MA \\)), Velocity Ratio (\\( VR \\)), Effort force (\\( F_E \\)), and Effort rope pull distance (\\( d_E \\)).",equation:"MA = VR = \\text{# of cables} = 4, \\quad F_E = \\frac{F_R}{MA}, \\quad d_E = VR \\times d_R",solution:"1. With 4 supporting strands, ideal \\( MA = VR = 4 \\).<br>2. Calculate effort:<br>\\( F_E = \\frac{800\\,\\mathrm{N}}{4} = 200\\,\\mathrm{N} \\).<br>3. Calculate rope pulled:<br>\\( d_E = 4 \\times 1.2\\,\\mathrm{m} = 4.8\\,\\mathrm{m} \\).",finalAnswer:"MA = 4, \\quad F_E = 200\\,\\mathrm{N}, \\quad d_E = 4.8\\,\\mathrm{m}",explanation:"Each supporting segment of rope bears an equal fourth of the load, so pulling 4 times the distance requires only a quarter of the load weight."},
{title:"Gears System Mechanical Advantage and Gear Ratio",given:"Driving gear (effort) diameter \\( d_E = 10\\,\\mathrm{cm} \\), Driven gear (load) diameter \\( d_R = 30\\,\\mathrm{cm} \\).",find:"Gear Ratio (\\( GR \\)) and Mechanical Advantage (\\( MA \\)).",equation:"MA = GR = \\frac{d_R}{d_E} = \\frac{r_R}{r_E}",solution:"Substitute the diameters:<br>\\( MA = GR = \\frac{30\\,\\mathrm{cm}}{10\\,\\mathrm{cm}} = 3.0 \\).",finalAnswer:"GR = 3.0, \\quad MA = 3.0",explanation:"A driven gear three times larger than the driving gear triples the available output torque while reducing rotational speed to one-third."},
{title:"Relation of Turns and Teeth in Meshed Gears",given:"Driving gear has \\( t_E = 12 \\) teeth and makes \\( N_E = 50 \\) turns. Driven gear has \\( t_R = 30 \\) teeth.",find:"Number of turns made by the driven gear (\\( N_R \\)).",equation:"N_E t_E = N_R t_R \\implies N_R = \\frac{N_E t_E}{t_R}",solution:"Substitute the given values into the tooth-turn equality:<br>\\( N_R = \\frac{50 \\times 12}{30} = \\frac{600}{30} = 20\\,\\text{turns} \\).",finalAnswer:"N_R = 20\\,\\text{turns}",explanation:"Total tooth engagements are identical for both gears; having more teeth means the driven gear turns fewer times."},
{title:"Belt Drive System Pulley Speeds and MA",given:"Motor driving pulley diameter \\( D_E = 8\\,\\mathrm{cm} \\) spinning at \\( N_E = 1200\\,\\mathrm{rpm} \\). Driven machine pulley diameter \\( D_R = 24\\,\\mathrm{cm} \\).",find:"Mechanical Advantage (\\( MA \\)) and rotational speed of driven pulley (\\( N_R \\)).",equation:"MA = \\frac{R_R}{R_E} = \\frac{D_R}{D_E}, \\quad N_E D_E = N_R D_R \\implies N_R = \\frac{N_E D_E}{D_R}",solution:"1. Compute \\( MA = \\frac{24\\,\\mathrm{cm}}{8\\,\\mathrm{cm}} = 3.0 \\).<br>2. Calculate driven speed:<br>\\( N_R = \\frac{1200 \\times 8}{24} = \\frac{9600}{24} = 400\\,\\mathrm{rpm} \\).",finalAnswer:"MA = 3.0, \\quad N_R = 400\\,\\mathrm{rpm}",explanation:"Linear belt speed is constant everywhere. The larger pulley rotates slower but produces three times greater turning force."},
{title:"Wheel and Axle Moments and Mechanical Advantage",given:"Wheel radius \\( R = 40\\,\\mathrm{cm} = 0.40\\,\\mathrm{m} \\), Axle radius \\( r = 8\\,\\mathrm{cm} = 0.08\\,\\mathrm{m} \\), Applied effort force \\( F_E = 60\\,\\mathrm{N} \\).",find:"Moment of effort (\\( M_E \\)), Mechanical Advantage (\\( MA \\)), and Load lifted (\\( F_R \\)).",equation:"M_E = F_E \\times R, \\quad MA = \\frac{R}{r}, \\quad F_R = F_E \\times MA",solution:"1. Compute moment of effort:<br>\\( M_E = 60\\,\\mathrm{N} \\times 0.40\\,\\mathrm{m} = 24\\,\\mathrm{N\\cdot m} \\).<br>2. Compute \\( MA = \\frac{0.40\\,\\mathrm{m}}{0.08\\,\\mathrm{m}} = 5.0 \\).<br>3. Compute load lifted:<br>\\( F_R = 60\\,\\mathrm{N} \\times 5.0 = 300\\,\\mathrm{N} \\).",finalAnswer:"M_E = 24\\,\\mathrm{N\\cdot m}, \\quad MA = 5.0, \\quad F_R = 300\\,\\mathrm{N}",explanation:"Turning the larger outer wheel gives a mechanical advantage of 5, balancing a load five times heavier on the axle cord."},
{title:"Velocity Ratio of a Wheel and Axle",given:"Wheel diameter \\( D = 50\\,\\mathrm{cm} \\) (\\( R = 25\\,\\mathrm{cm} \\)), Axle diameter \\( d = 10\\,\\mathrm{cm} \\) (\\( r = 5\\,\\mathrm{cm} \\)).",find:"Velocity Ratio (\\( VR \\)) of the wheel and axle.",equation:"VR = \\frac{2\\pi R}{2\\pi r} = \\frac{R}{r}",solution:"Substitute the radii into the circumference ratio:<br>\\( VR = \\frac{25\\,\\mathrm{cm}}{5\\,\\mathrm{cm}} = 5.0 \\).",finalAnswer:"VR = 5.0",explanation:"In one full 360° revolution, the wheel unwinds \\( 2\\pi R \\) of rope while the axle winds \\( 2\\pi r \\), giving a constant distance ratio of 5."}
],
equations:[
{section:"Lever",name:"Lever Mechanical advantage",formula:"\\( MA = \\frac{F_R}{F_E} = \\frac{d_E}{d_R} \\)",symbols:[{symbol:"MA",desc:"Mechanical Advantage (No unit)"},{symbol:"F_R",desc:"Load Force (N)"},{symbol:"F_E",desc:"Effort Force (N)"},{symbol:"d_E",desc:"Effort Arm (m)"},{symbol:"d_R",desc:"Load Arm (m)"}]},
{section:"Lever",name:"Lever Efficiency",formula:"\\( eff = \\frac{F_R \\times d_R}{F_E \\times d_E} \\times 100\\% = \\frac{MA}{VR} \\times 100\\% \\)",symbols:[{symbol:"eff",desc:"Efficiency (%)"},{symbol:"VR",desc:"Velocity Ratio (No unit)"}]},
{section:"Inclined Plane",name:"Inclined Plane Mechanical advantage",formula:"\\( MA = \\frac{F_R}{F_E} = \\frac{L}{h} \\)",symbols:[{symbol:"L",desc:"Length of incline (m)"},{symbol:"h",desc:"Height of incline (m)"}]},
{section:"Inclined Plane",name:"Inclined Plane Work done",formula:"\\( W_E = F_E \\times L, W_R = F_R \\times h \\)",symbols:[{symbol:"W_E",desc:"Work by Effort (J)"},{symbol:"W_R",desc:"Work on Load (J)"}]},
{section:"Inclined Plane",name:"If no friction",formula:"\\( W_E = W_R \\Leftrightarrow F_E L = F_R h \\)",symbols:[{symbol:"W_E",desc:"Work by Effort (J)"},{symbol:"W_R",desc:"Work on Load (J)"},{symbol:"F_E",desc:"Effort Force (N)"},{symbol:"F_R",desc:"Load Force (N)"},{symbol:"L",desc:"Length of incline (m)"},{symbol:"h",desc:"Height of incline (m)"}]},
{section:"Pulley",name:"Pulley Mechanical advantage",formula:"\\( MA = \\frac{F_R}{F_E} = \\text{# of cables} \\)",symbols:[{symbol:"MA",desc:"Mechanical Advantage (No unit)"}]},
{section:"Pulley",name:"Pulley Velocity Ratio",formula:"\\( VR = \\frac{d_E}{d_R} \\)",symbols:[{symbol:"d_E",desc:"Distance moved by effort (m)"},{symbol:"d_R",desc:"Distance moved by load (m)"}]},
{section:"Gears System",name:"Gears System Mechanical advantage",formula:"\\[ \\begin{aligned} MA &= \\frac{F_R}{F_E} = \\frac{N_R}{N_E} \\\\ &= \\frac{r_R}{r_E} = \\frac{d_R}{d_E} \\end{aligned} \\]",symbols:[{symbol:"N_R, N_E",desc:"Number of teeth"},{symbol:"r_R, r_E",desc:"Radii (m)"},{symbol:"d_R, d_E",desc:"Diameters (m)"}]},
{section:"Gears System",name:"Gear Ratio (GR)",formula:"\\( GR = \\frac{N_R}{N_E} = \\frac{d_R}{d_E} \\)",symbols:[{symbol:"GR",desc:"Gear Ratio (No unit)"}]},
{section:"Gears System",name:"Relation of turns-teeth",formula:"\\( N_E t_E = N_R t_R \\Leftrightarrow \\frac{N_E}{N_R} = \\frac{t_R}{t_E} \\)",symbols:[{symbol:"N",desc:"Number of turns (rev)"},{symbol:"t",desc:"Number of teeth"}]},
{section:"Belt System",name:"Belt System Mechanical advantage",formula:"\\( MA = \\frac{F_R}{F_E} = \\frac{R_R}{R_E} \\)",symbols:[{symbol:"R_R, R_E",desc:"Radii of pulleys (m)"}]},
{section:"Belt System",name:"Belt System Turns and diameter",formula:"\\( N_E D_E = N_R D_R \\)",symbols:[{symbol:"D_E, D_R",desc:"Diameters (m)"}]},
{section:"Wheel and Axle",name:"Wheel and Axle Moment",formula:"\\( M_E = F_E \\times R, M_R = F_R \\times r \\)",symbols:[{symbol:"R",desc:"Radius of wheel (m)"},{symbol:"r",desc:"Radius of axle (m)"}]},
{section:"Wheel and Axle",name:"Wheel and Axle Mechanical advantage",formula:"\\( MA = \\frac{F_R}{F_E} = \\frac{R}{r} \\)",symbols:[{symbol:"MA",desc:"Mechanical Advantage (No unit)"}]},
{section:"Wheel and Axle",name:"Wheel and Axle Velocity Ratio",formula:"\\( VR = \\frac{2\\pi R}{2\\pi r} = \\frac{R}{r} \\)",symbols:[{symbol:"VR",desc:"Velocity Ratio (No unit)"}]}
],flashcards:[
{front:"What is the formula for the Mechanical Advantage (MA) of a lever?", back:"\\( MA = \\frac{F_R}{F_E} = \\frac{d_E}{d_R} \\)"},
{front:"How do you calculate the Efficiency of a lever?", back:"\\( eff = \\frac{MA}{VR} \\times 100\\% \\)"},
{front:"What is the Mechanical Advantage of an inclined plane?", back:"\\( MA = \\frac{L}{h} \\)"},
{front:"In an inclined plane with no friction, how are effort and load related?", back:"\\( F_E L = F_R h \\)"},
{front:"How is the Velocity Ratio of a pulley calculated?", back:"\\( VR = \\frac{d_E}{d_R} \\)"},
{front:"What is the Mechanical Advantage formula for a gear system?", back:"\\( MA = \\frac{N_R}{N_E} \\)"},
{front:"What is the Gear Ratio (GR)?", back:"\\( GR = \\frac{N_R}{N_E} = \\frac{d_R}{d_E} \\)"},
{front:"What is the relation between turns and teeth in a gear system?", back:"\\( N_E t_E = N_R t_R \\)"},
{front:"How is the Mechanical Advantage of a wheel and axle found?", back:"\\( MA = \\frac{R}{r} \\)"},
{front:"What is the Velocity Ratio of a wheel and axle?", back:"\\( VR = \\frac{R}{r} \\)"}
],quiz:[
{question:"In a lever, if the effort arm is 4m and the load arm is 1m, what is the Mechanical Advantage?", options:["0.25","4","5","3"], correctIndex:1, feedback:"MA = Effort Arm / Load Arm = 4 / 1 = 4."},
{question:"The formula for the efficiency of a machine is:", options:["\\( MA + VR \\)","\\( \\frac{VR}{MA} \\)","\\( \\frac{MA}{VR} \\times 100\\% \\)","\\( MA \\times VR \\)"], correctIndex:2, feedback:"Efficiency relates the actual mechanical advantage to the theoretical velocity ratio: \\( \\frac{MA}{VR} \\times 100\\% \\)."},
{question:"For an inclined plane of length L and height h, the Mechanical Advantage is:", options:["\\( L \\times h \\)","\\( \\frac{h}{L} \\)","\\( L - h \\)","\\( \\frac{L}{h} \\)"], correctIndex:3, feedback:"The MA of an inclined plane is its length divided by its height: \\( \\frac{L}{h} \\)."},
{question:"If there is no friction on an inclined plane, what is the relationship between work done by effort and work on load?", options:["\\( W_E > W_R \\)","\\( W_E = W_R \\)","\\( W_E < W_R \\)","\\( W_E = 0 \\)"], correctIndex:1, feedback:"In an ideal system with no friction, energy is conserved, so \\( W_E = W_R \\)."},
{question:"The Velocity Ratio of a pulley system depends on:", options:["Distance moved by effort and load","Only the load distance","Force applied","Weight of the pulleys"], correctIndex:0, feedback:"Velocity Ratio is the distance moved by the effort divided by the distance moved by the load \\( (d_E/d_R) \\)."},
{question:"For a gear system, the Mechanical Advantage is equal to:", options:["Ratio of teeth \\((N_R/N_E)\\)","Product of teeth","Difference of teeth","\\( N_E / N_R \\)"], correctIndex:0, feedback:"The MA of gears is the number of teeth on the driven (load) gear divided by the number on the driving (effort) gear."},
{question:"If a driving gear has 10 teeth and turns 5 times, and the driven gear has 25 teeth, how many times does it turn?", options:["2","5","10","12.5"], correctIndex:0, feedback:"Using \\( N_E t_E = N_R t_R \\), we have \\( 5 \\times 10 = N_R \\times 25 \\), so \\( N_R = 2 \\)."},
{question:"In a wheel and axle, what does \\(R\\) typically represent?", options:["Radius of the axle","Radius of the wheel","Revolution rate","Resistance force"], correctIndex:1, feedback:"Usually, \\(R\\) is the radius of the wheel and \\(r\\) is the radius of the axle."},
{question:"Which of the following is the correct formula for Velocity Ratio (VR) of a wheel and axle?", options:["\\( \\frac{r}{R} \\)","\\( R \\times r \\)","\\( \\frac{R}{r} \\)","\\( \\frac{F_R}{F_E} \\)"], correctIndex:2, feedback:"The velocity ratio is the ratio of the radius of the wheel to the radius of the axle \\( (R/r) \\)."},
{question:"The moment of the effort force in a wheel and axle is given by:", options:["\\( F_E / R \\)","\\( F_E \\times r \\)","\\( F_E \\times R \\)","\\( F_R \\times R \\)"], correctIndex:2, feedback:"The effort force acts on the wheel (radius \\(R\\)), so its moment is \\( F_E \\times R \\)."}
]},
{id:"g9-l3",gifUrl:"https://commons.wikimedia.org/wiki/Special:FilePath/Electric_circuit.gif",worksheetUrl:"worksheets/g9-ch3-worksheet.pdf",games:[{topic:"Electricity",url:"https://gemini.google.com/share/e1def1ea44ff"},{topic:"Household Wiring System",url:"https://gemini.google.com/share/b1b0af13b130"}],title:"Chapter 3: Electricity",concepts:["Ohm's Law: Relates voltage, current, and resistance: \\( V = IR \\).","Electrical Power: The rate of electrical energy consumption: \\( P = VI = I^2 R = V^2 / R \\).","Energy Transfer & Cost: Electrical energy \\( E = Pt = VIt \\), billed by power companies in kilowatt-hours (kWh).","Joule's Law & Heat: Electrical energy converted into heat: \\( Q = mc\\Delta T = RI^2 t \\)."],definitions:[
{term:"Electrical Power",definition:"The rate at which electrical energy is converted into another form of energy (such as heat, light, or mechanical motion) per unit time.",symbol:"P",unit:"\\mathrm{W} \\;(\\mathrm{J/s})",equation:"P = \\frac{E}{t} = VI = RI^2 = \\frac{V^2}{R}"},
{term:"Electrical Energy",definition:"The total work done by an electric field in moving charge carriers through an electrical component over time.",symbol:"E",unit:"\\mathrm{J}",equation:"E = VIt = RI^2 t = \\frac{V^2}{R}t"},
{term:"Electric Potential Difference (Voltage)",definition:"The energy transferred or work done per unit of electric charge moving between two points in a circuit.",symbol:"V",unit:"\\mathrm{V} \\;(\\mathrm{J/C})",equation:"V = \\frac{E}{Q} = IR"},
{term:"Electric Current",definition:"The continuous rate of flow of electric charge through a cross-section of a conductor.",symbol:"I",unit:"\\mathrm{A} \\;(\\mathrm{C/s})",equation:"I = \\frac{Q}{t} = \\frac{V}{R}"},
{term:"Electrical Resistance",definition:"The opposition offered by a conductor material to the flow of electric current.",symbol:"R",unit:"\\Omega \\;(\\mathrm{V/A})",equation:"R = \\frac{V}{I} = \\frac{P}{I^2}"},
{term:"Kilowatt-Hour (kWh)",definition:"The commercial unit of electricity consumption representing the total electrical energy consumed by a 1-kilowatt device in 1 hour.",symbol:"\\mathrm{kWh}",unit:"\\mathrm{kWh} \\; (1\\,\\mathrm{kWh} = 3.6\\times 10^6\\,\\mathrm{J})",equation:"E(\\mathrm{kWh}) = \\frac{P(\\mathrm{W}) \\times t(\\mathrm{h})}{1000}"},
{term:"Cost of Electricity",definition:"The total financial expense charged by a utility company for electrical energy consumed over a period.",symbol:"\\text{Cost}",unit:"\\text{Currency}",equation:"\\text{Cost} = E(\\mathrm{kWh}) \\times \\text{price per kWh}"},
{term:"Heat Energy (Thermal Energy)",definition:"The transfer of internal energy from a region of higher temperature to lower temperature due to thermal agitation.",symbol:"Q",unit:"\\mathrm{J}",equation:"Q = mc\\Delta T"},
{term:"Specific Heat Capacity",definition:"The amount of heat energy required to raise the temperature of 1 kilogram of a substance by 1 Kelvin (or 1 °C).",symbol:"c",unit:"\\mathrm{J/(kg\\cdot K)}",equation:"c = \\frac{Q}{m\\Delta T}"},
{term:"Temperature Change",definition:"The numerical difference between the final temperature and the initial temperature of a body.",symbol:"\\Delta T",unit:"\\mathrm{K} \\text{ or } {^\\circ}\\mathrm{C}",equation:"\\Delta T = T_f - T_i"},
{term:"Conservation of Energy (Electric Heating)",definition:"The principle that all electrical energy supplied to an ideal heater is fully converted into internal thermal heat absorbed by the substance.",symbol:"E = Q",unit:"\\mathrm{J}",equation:"RI^2 t = mc\\Delta T"},
{term:"Energy Partitioning / Efficiency",definition:"The division of total electrical energy into useful light emission and thermal dissipation in an illumination source.",symbol:"E_L, E_H",unit:"\\mathrm{J}",equation:"E_L = E \\times \\%_{\\text{light}}, \\quad E_H = E \\times \\%_{\\text{heat}}"}
],
examples:[
{title:"Electrical Power of an Appliance",given:"Operating voltage \\( V = 220\\,\\mathrm{V} \\), Current drawn \\( I = 2.5\\,\\mathrm{A} \\).",find:"Electrical power consumption (\\( P \\)).",equation:"P = VI",solution:"Multiply voltage by current:<br>\\( P = 220\\,\\mathrm{V} \\times 2.5\\,\\mathrm{A} = 550\\,\\mathrm{W} \\).",finalAnswer:"P = 550\\,\\mathrm{W}",explanation:"The device converts 550 Joules of electrical energy into other forms every single second."},
{title:"Power Dissipation in a Heating Resistor",given:"Heating element resistance \\( R = 48.4\\,\\Omega \\), Current \\( I = 5.0\\,\\mathrm{A} \\).",find:"Power dissipated (\\( P \\)) using Joule's law.",equation:"P = RI^2",solution:"Substitute resistance and current squared:<br>\\( P = 48.4\\,\\Omega \\times (5.0\\,\\mathrm{A})^2 = 48.4 \\times 25 = 1210\\,\\mathrm{W} \\).",finalAnswer:"P = 1210\\,\\mathrm{W} \\; (1.21\\,\\mathrm{kW})",explanation:"Joule heating states that rate of heat production is directly proportional to resistance and to the square of the current."},
{title:"Electrical Energy Transfer Over Time",given:"Appliance power \\( P = 800\\,\\mathrm{W} \\) (or operating at \\( V = 200\\,\\mathrm{V}, I = 4\\,\\mathrm{A} \\)), Operating time \\( t = 30\\,\\text{minutes} = 1800\\,\\mathrm{s} \\).",find:"Total electrical energy transferred (\\( E \\)).",equation:"E = P \\times t = VIt",solution:"Convert time to seconds and compute:<br>\\( E = 800\\,\\mathrm{W} \\times 1800\\,\\mathrm{s} = 1{,}440{,}000\\,\\mathrm{J} = 1.44\\,\\mathrm{MJ} \\).",finalAnswer:"E = 1.44\\times 10^6\\,\\mathrm{J} \\; (1.44\\,\\mathrm{MJ})",explanation:"Energy transfer is the total accumulation of electrical power consumed over the entire operating duration."},
{title:"Cost of Running an Electrical Appliance",given:"Air conditioner power \\( P = 2000\\,\\mathrm{W} = 2.0\\,\\mathrm{kW} \\), Run time \\( t = 6\\,\\text{hours/day} \\) for \\( 30\\,\\text{days} \\), Electricity tariff = \\( \\$0.20 \\) per kWh.",find:"Total energy consumed in kWh and total monthly electricity cost.",equation:"E(\\mathrm{kWh}) = P(\\mathrm{kW}) \\times t(\\mathrm{h}), \\quad \\text{Cost} = E \\times \\text{price/kWh}",solution:"1. Total operating hours = \\( 6 \\times 30 = 180\\,\\mathrm{h} \\).<br>2. Energy consumed:<br>\\( E = 2.0\\,\\mathrm{kW} \\times 180\\,\\mathrm{h} = 360\\,\\mathrm{kWh} \\).<br>3. Total cost:<br>\\( \\text{Cost} = 360\\,\\mathrm{kWh} \\times \\$0.20/\\mathrm{kWh} = \\$72.00 \\).",finalAnswer:"E = 360\\,\\mathrm{kWh}, \\quad \\text{Cost} = \\$72.00",explanation:"Commercial electricity meters measure power in kilowatts multiplied by run hours, charging per kilowatt-hour unit."},
{title:"Heat Energy Required to Raise Water Temperature",given:"Water mass \\( m = 1.5\\,\\mathrm{kg} \\), Specific heat capacity of water \\( c = 4200\\,\\mathrm{J/(kg\\cdot K)} \\), Initial temperature \\( T_i = 25^\\circ\\mathrm{C} \\), Final temperature \\( T_f = 75^\\circ\\mathrm{C} \\).",find:"Thermal energy absorbed (\\( Q \\)).",equation:"Q = mc\\Delta T",solution:"1. Temperature change \\( \\Delta T = 75 - 25 = 50^\\circ\\mathrm{C} = 50\\,\\mathrm{K} \\).<br>2. Compute heat absorbed:<br>\\( Q = 1.5\\,\\mathrm{kg} \\times 4200\\,\\mathrm{J/(kg\\cdot K)} \\times 50\\,\\mathrm{K} = 315{,}000\\,\\mathrm{J} = 315\\,\\mathrm{kJ} \\).",finalAnswer:"Q = 3.15\\times 10^5\\,\\mathrm{J} \\; (315\\,\\mathrm{kJ})",explanation:"The heat absorbed is directly proportional to mass, specific heat capacity of the liquid, and the temperature rise."},
{title:"Calculating Specific Heat Capacity",given:"A metal block of mass \\( m = 0.5\\,\\mathrm{kg} \\) absorbs \\( Q = 9000\\,\\mathrm{J} \\) of heat and warms from \\( 20^\\circ\\mathrm{C} \\) to \\( 40^\\circ\\mathrm{C} \\) (\\( \\Delta T = 20\\,\\mathrm{K} \\)).",find:"Specific heat capacity of the metal (\\( c \\)).",equation:"c = \\frac{Q}{m\\Delta T}",solution:"Substitute into the rearranged formula:<br>\\( c = \\frac{9000\\,\\mathrm{J}}{0.5\\,\\mathrm{kg} \\times 20\\,\\mathrm{K}} = \\frac{9000}{10} = 900\\,\\mathrm{J/(kg\\cdot K)} \\).",finalAnswer:"c = 900\\,\\mathrm{J/(kg\\cdot K)} \\text{ (consistent with Aluminium)}",explanation:"Specific heat capacity reflects thermal inertia; a material with \\( c = 900 \\) requires 900 J to warm 1 kg by 1 Kelvin."},
{title:"Conservation of Energy in an Electric Water Kettle",given:"Electric kettle resistance \\( R = 25\\,\\Omega \\), Current \\( I = 8.0\\,\\mathrm{A} \\), Water mass \\( m = 1.0\\,\\mathrm{kg} \\), \\( c = 4200\\,\\mathrm{J/(kg\\cdot K)} \\), Desired temperature rise \\( \\Delta T = 80\\,\\mathrm{K} \\).",find:"Heating time \\( t \\) assuming 100% efficient electrical-to-thermal conversion.",equation:"RI^2 t = mc\\Delta T \\implies t = \\frac{mc\\Delta T}{RI^2}",solution:"1. Thermal heat required:<br>\\( Q = 1.0 \\times 4200 \\times 80 = 336{,}000\\,\\mathrm{J} \\).<br>2. Electrical power generated:<br>\\( P = RI^2 = 25 \\times (8.0)^2 = 25 \\times 64 = 1600\\,\\mathrm{W} \\).<br>3. Time required:<br>\\( t = \\frac{336{,}000}{1600} = 210\\,\\mathrm{s} = 3.5\\,\\text{minutes} \\).",finalAnswer:"t = 210\\,\\mathrm{s} \\; (3.5\\,\\text{minutes})",explanation:"In an ideal heating system, all electrical work produced by Joule heating is fully absorbed by the water as thermal energy."},
{title:"Energy Allocation in an Incandescent Light Bulb",given:"An incandescent bulb consumes \\( E = 5000\\,\\mathrm{J} \\) of electrical energy. Only \\( 10\\% \\) is converted into visible light, while \\( 90\\% \\) is lost as heat.",find:"Light energy produced (\\( E_L \\)) and Heat energy dissipated (\\( E_H \\)).",equation:"E_L = E \\times \\%_{\\text{light}}, \\quad E_H = E \\times \\%_{\\text{heat}}",solution:"1. Calculate light energy:<br>\\( E_L = 5000\\,\\mathrm{J} \\times 0.10 = 500\\,\\mathrm{J} \\).<br>2. Calculate heat energy:<br>\\( E_H = 5000\\,\\mathrm{J} \\times 0.90 = 4500\\,\\mathrm{J} \\).<br>Verification: \\( E_L + E_H = 500 + 4500 = 5000\\,\\mathrm{J} \\).",finalAnswer:"E_L = 500\\,\\mathrm{J}, \\quad E_H = 4500\\,\\mathrm{J}",explanation:"Traditional filament bulbs are predominantly heaters that produce light as a byproduct; 90% of the energy is radiated away as thermal heat."}
],
equations:[
{section:"Electrical Power",name:"Definition of power",formula:"\\( P = \\frac{W}{t} = \\frac{E}{t} \\)",symbols:[{symbol:"P",desc:"Power (W)"},{symbol:"W",desc:"Work (J)"},{symbol:"E",desc:"Energy (J)"},{symbol:"t",desc:"Time (s)"}]},
{section:"Electrical Power",name:"Power of current",formula:"\\( P = VI = RI^2 = \\frac{V^2}{R} \\)",symbols:[{symbol:"P",desc:"Power (W)"},{symbol:"V",desc:"Voltage (V)"},{symbol:"I",desc:"Current (A)"},{symbol:"R",desc:"Resistance (Ω)"}]},
{section:"Electrical Power",name:"Energy Transfer",formula:"\\[ \\begin{aligned} E &= QV = VIt \\\\ &= RI^2 t = \\frac{V^2}{R} t \\end{aligned} \\]",symbols:[{symbol:"E",desc:"Energy (J)"},{symbol:"Q",desc:"Charge (C)"},{symbol:"V",desc:"Voltage (V)"},{symbol:"I",desc:"Current (A)"},{symbol:"R",desc:"Resistance (Ω)"},{symbol:"t",desc:"Time (s)"}]},
{section:"Electrical Power",name:"Cost of using electricity",formula:"\\( \\text{cost} = E(\\text{kWh}) \\times \\text{price/1kWh} \\)",symbols:[{symbol:"E",desc:"Energy (kWh)"},{symbol:"price",desc:"Cost per kWh (Currency)"}]},
{section:"Heat Energy",name:"Heat gained or lost",formula:"\\( Q = mc\\Delta T \\)",symbols:[{symbol:"Q",desc:"Heat Energy (J)"},{symbol:"m",desc:"Mass (kg)"},{symbol:"c",desc:"Specific heat capacity (J/kg·K)"},{symbol:"ΔT",desc:"Change in temp (K or °C)"}]},
{section:"Heat Energy",name:"Specific heat capacity",formula:"\\( c = \\frac{Q}{m\\Delta T} \\)",symbols:[{symbol:"c",desc:"Specific heat capacity (J/kg·K)"},{symbol:"Q",desc:"Heat Energy (J)"},{symbol:"m",desc:"Mass (kg)"},{symbol:"ΔT",desc:"Change in temp (K or °C)"}]},
{section:"Heat Energy",name:"Conservation of energy",formula:"\\( E = Q \\Leftrightarrow RI^2 t = mc\\Delta T \\)",symbols:[{symbol:"E",desc:"Electrical Energy (J)"},{symbol:"Q",desc:"Heat Energy (J)"},{symbol:"R",desc:"Resistance (Ω)"},{symbol:"I",desc:"Current (A)"},{symbol:"t",desc:"Time (s)"},{symbol:"m",desc:"Mass (kg)"},{symbol:"c",desc:"Specific heat capacity (J/kg·K)"},{symbol:"ΔT",desc:"Change in temp (K or °C)"}]},
{section:"Heat Energy",name:"Total Energy",formula:"\\( E_L = E \\times \\% \\text{ light} \\), \\( E_H = E \\times \\% \\text{ heat} \\)",symbols:[{symbol:"E",desc:"Total Electrical Energy (J)"},{symbol:"E_L",desc:"Light Energy (J)"},{symbol:"E_H",desc:"Heat Energy (J)"}]}
],flashcards:[
{front:"What is the fundamental definition of power?", back:"\\( P = \\frac{W}{t} = \\frac{E}{t} \\)"},
{front:"What is the formula for Electrical Power using current and resistance?", back:"\\( P = RI^2 \\)"},
{front:"What is the formula for Electrical Power using voltage and resistance?", back:"\\( P = \\frac{V^2}{R} \\)"},
{front:"How do you calculate electrical Energy Transfer using Voltage, Current, and Time?", back:"\\( E = VIt \\)"},
{front:"How do you calculate the cost of using electricity?", back:"\\( \\text{cost} = E(\\text{kWh}) \\times \\text{price/1kWh} \\)"},
{front:"What is the formula for heat gained or lost?", back:"\\( Q = mc\\Delta T \\)"},
{front:"What is the formula for Specific Heat Capacity?", back:"\\( c = \\frac{Q}{m\\Delta T} \\)"},
{front:"What is the conservation of energy equation for an electric heater?", back:"\\( RI^2 t = mc\\Delta T \\)"},
{front:"How do you find the Light Energy if a percentage of total energy is converted to light?", back:"\\( E_L = E \\times \\% \\text{ light} \\)"},
{front:"How do you find the Heat Energy if a percentage of total energy is converted to heat?", back:"\\( E_H = E \\times \\% \\text{ heat} \\)"}
],quiz:[
{question:"Which formula correctly represents Electrical Power in terms of Voltage and Current?", options:["\\( P = V / I \\)","\\( P = I / V \\)","\\( P = VI \\)","\\( P = V^2 I \\)"], correctIndex:2, feedback:"Power is the product of voltage and current: \\( P = VI \\)."},
{question:"What is the correct SI unit for Specific Heat Capacity?", options:["J/kg","J/°C","J/kg·K","W/kg·K"], correctIndex:2, feedback:"Specific heat capacity is measured in Joules per kilogram per Kelvin (J/kg·K)."},
{question:"If an appliance uses 2 kWh of energy and the price is $0.50/kWh, what is the total cost?", options:["$2.50","$1.00","$0.25","$4.00"], correctIndex:1, feedback:"Cost = Energy \\( \\times \\) price = 2 \\( \\times \\) 0.50 = $1.00."},
{question:"In the heat equation \\( Q = mc\\Delta T \\), what does \\( \\Delta T \\) represent?", options:["Total Time","Change in Temperature","Thermal Energy","Torque"], correctIndex:1, feedback:"\\( \\Delta T \\) represents the change in temperature (final - initial)."},
{question:"Which formula correctly represents Energy Transfer?", options:["\\( E = QV \\)","\\( E = \\frac{V}{Q} \\)","\\( E = Q^2 V \\)","\\( E = \\frac{Q}{V} \\)"], correctIndex:0, feedback:"Energy transfer is charge multiplied by voltage, \\( E = QV \\)."},
{question:"In the context of conservation of energy (electricity to heat), which equation is correct?", options:["\\( RI^2 = mc\\Delta T \\)","\\( RI^2 t = mc\\Delta T \\)","\\( VI = mc\\Delta T \\)","\\( \\frac{V}{R} t = mc\\Delta T \\)"], correctIndex:1, feedback:"Electrical energy \\( (RI^2 t) \\) is converted into heat energy \\( (mc\\Delta T) \\)."},
{question:"What does the \\( c \\) stand for in \\( Q = mc\\Delta T \\)?", options:["Speed of light","Capacitance","Specific heat capacity","Current"], correctIndex:2, feedback:"In thermodynamics, \\( c \\) stands for specific heat capacity."},
{question:"Electrical energy can be calculated using which combination of variables?", options:["V, I, R","V, I, t","P, V, R","Q, c, t"], correctIndex:1, feedback:"Electrical energy \\( E = VIt \\)."},
{question:"If 20% of electrical energy is converted to light, how is the light energy found?", options:["\\( E_L = E / 0.20 \\)","\\( E_L = E \\times 0.20 \\)","\\( E_L = E + 20 \\)","\\( E_L = E - 20 \\)"], correctIndex:1, feedback:"Multiply the total energy by the efficiency percentage (0.20)."},
{question:"What is the formula for Power using Voltage and Resistance?", options:["\\( P = V^2 / R \\)","\\( P = V / R^2 \\)","\\( P = V^2 R \\)","\\( P = R / V^2 \\)"], correctIndex:0, feedback:"Substituting \\( I = V/R \\) into \\( P = VI \\) gives \\( P = V^2 / R \\)."}
]},
{id:"g9-l4",gifUrl:"https://commons.wikimedia.org/wiki/Special:FilePath/VFPt_solenoid-field-animation.gif",worksheetUrl:"worksheets/g9-ch4-worksheet.pdf",games:[{topic:"Magnetic Field due to a straight wire",url:"https://gemini.google.com/share/4e08057d8f02"},{topic:"Magnetic due to a circular loop",url:"https://gemini.google.com/share/d3ff81a78225"},{topic:"Magnetic due to a Solenoid",url:"https://gemini.google.com/share/97335be64f77"},{topic:"Magnetic Force",url:"https://gemini.google.com/share/e58537b64df4"},{topic:"Transformers",url:"https://gemini.google.com/share/4436f3b52926"}],title:"Chapter 4: Magnetic Field",concepts:["Magnetic Field (\\( B \\)): A vector field region produced by moving charges or currents, measured in Tesla (T).","Biot-Savart Law (Straight Wire): Field lines form concentric circles around the wire, \\( B = \\frac{\\mu_0 I}{2\\pi d} \\).","Solenoid Field: Cylindrical wire coil producing a strong, uniform magnetic field in its core, \\( B = \\frac{\\mu_0 NI}{l} \\).","Magnetic Force on a Wire: Current-carrying wire in an external field experiences deflecting force \\( F = IlB\\sin\\theta \\).","Transformers: Transfers AC electrical energy between primary and secondary coils, \\( \\frac{V_S}{V_P} = \\frac{N_S}{N_P} = \\frac{I_P}{I_S} \\)."],definitions:[
{term:"Magnetic Field",definition:"A vector field region surrounding a magnet or electric current within which magnetic forces are exerted on other moving charges or magnetic materials.",symbol:"B",unit:"\\mathrm{T} \\;(\\mathrm{Tesla})",equation:"B = \\frac{\\mu_0 I}{2\\pi d} \\quad (\\text{straight wire})"},
{term:"Permeability of Free Space",definition:"The fundamental physical constant representing the capability of a vacuum to support magnetic flux lines.",symbol:"\\mu_0",unit:"\\mathrm{T\\cdot m/A}",equation:"\\mu_0 = 4\\pi \\times 10^{-7}\\,\\mathrm{T\\cdot m/A} \\approx 1.257\\times 10^{-6}\\,\\mathrm{T\\cdot m/A}"},
{term:"Solenoid",definition:"A tightly wound cylindrical coil of insulated wire that creates a strong, uniform magnetic field in its core when energized by electric current.",symbol:"\\text{Solenoid}",unit:"\\text{No unit}",equation:"B = \\frac{\\mu_0 NI}{l}"},
{term:"Magnetic Force on a Current-Carrying Wire",definition:"The mechanical deflecting force exerted by an external magnetic field on mobile charge carriers drifting through a wire of length \\(l\\).",symbol:"F",unit:"\\mathrm{N}",equation:"F = IlB\\sin\\theta"},
{term:"Transformer",definition:"A static electrical device that transfers alternating electrical energy between two circuits via mutual magnetic induction without changing frequency.",symbol:"\\text{Transformer}",unit:"\\text{No unit}",equation:"\\frac{V_S}{V_P} = \\frac{N_S}{N_P} = \\frac{I_P}{I_S}"},
{term:"Step-Up Transformer",definition:"A transformer where the secondary coil has more turns than the primary coil, stepping up output voltage while decreasing current.",symbol:"V_S > V_P",unit:"\\text{No unit}",equation:"N_S > N_P \\implies V_S > V_P, \\; I_S < I_P"},
{term:"Step-Down Transformer",definition:"A transformer where the secondary coil has fewer turns than the primary coil, stepping down output voltage while increasing current.",symbol:"V_S < V_P",unit:"\\text{No unit}",equation:"N_S < N_P \\implies V_S < V_P, \\; I_S > I_P"},
{term:"Joule Heating Power Loss",definition:"The electrical power wasted as thermal heat dissipation in the resistance of conductors and transformer windings.",symbol:"P_J",unit:"\\mathrm{W}",equation:"P_J = RI^2 = P_{e1} - P_{e2}"},
{term:"Transformer Input / Output Power",definition:"The rate of electrical energy delivered to the primary coil (\\(P_{e1}\\)) compared to the useful power extracted from the secondary coil (\\(P_{e2}\\)).",symbol:"P_{e1}, P_{e2}",unit:"\\mathrm{W}",equation:"P_{e1} = V_P I_P, \\quad P_{e2} = V_S I_S"}
],
examples:[
{title:"Magnetic Field from a Long Straight Wire",given:"Current \\( I = 5.0\\,\\mathrm{A} \\), Perpendicular distance from wire \\( d = 10\\,\\mathrm{cm} = 0.10\\,\\mathrm{m} \\), \\( \\mu_0 = 4\\pi\\times 10^{-7}\\,\\mathrm{T\\cdot m/A} \\).",find:"Magnetic field strength (\\( B \\)).",equation:"B = \\frac{\\mu_0 I}{2\\pi d}",solution:"Substitute into the Biot-Savart straight wire formula:<br>\\( B = \\frac{(4\\pi\\times 10^{-7}) \\times 5.0}{2\\pi \\times 0.10} = \\frac{2\\times 10^{-7} \\times 5.0}{0.10} = \\frac{1.0\\times 10^{-6}}{0.10} = 1.0\\times 10^{-5}\\,\\mathrm{T} \\).",finalAnswer:"B = 1.0\\times 10^{-5}\\,\\mathrm{T} \\; (10\\,\\mu\\mathrm{T})",explanation:"The magnetic field lines encircle the wire concentrically, diminishing inversely with distance \\( d \\)."},
{title:"Magnetic Field Inside an Ideal Solenoid",given:"Number of turns \\( N = 500 \\), Solenoid length \\( l = 0.25\\,\\mathrm{m} \\), Current \\( I = 2.0\\,\\mathrm{A} \\).",find:"Magnetic field inside the solenoid core (\\( B \\)).",equation:"B = \\frac{\\mu_0 NI}{l}",solution:"Substitute the values:<br>\\( B = \\frac{(4\\pi\\times 10^{-7}) \\times 500 \\times 2.0}{0.25} = \\frac{4\\pi\\times 10^{-7} \\times 1000}{0.25} = \\frac{4\\pi\\times 10^{-4}}{0.25} \\approx 5.03\\times 10^{-3}\\,\\mathrm{T} \\).",finalAnswer:"B \\approx 5.03\\times 10^{-3}\\,\\mathrm{T} \\; (5.03\\,\\mathrm{mT})",explanation:"The turns add their magnetic fields constructively, producing a dense and nearly uniform axial field inside the coil interior."},
{title:"Magnetic Force on a Current-Carrying Conductor",given:"Wire length \\( l = 0.40\\,\\mathrm{m} \\), Current \\( I = 3.0\\,\\mathrm{A} \\), Magnetic field \\( B = 0.50\\,\\mathrm{T} \\), Angle between wire and field \\( \\theta = 30^\\circ \\).",find:"Magnetic force acting on the wire (\\( F \\)).",equation:"F = IlB\\sin\\theta",solution:"Using \\( \\sin 30^\\circ = 0.5 \\):<br>\\( F = 3.0\\,\\mathrm{A} \\times 0.40\\,\\mathrm{m} \\times 0.50\\,\\mathrm{T} \\times \\sin 30^\\circ = 0.60 \\times 0.5 = 0.30\\,\\mathrm{N} \\).",finalAnswer:"F = 0.30\\,\\mathrm{N}",explanation:"The magnetic Lorentz forces on individual conduction electrons add up to create a macroscopic sideways force on the wire."},
{title:"Transformer Voltage and Turn Ratio Calculation",given:"Primary voltage \\( V_P = 240\\,\\mathrm{V} \\), Primary turns \\( N_P = 1200 \\), Desired secondary voltage \\( V_S = 12\\,\\mathrm{V} \\).",find:"Number of secondary turns (\\( N_S \\)) and classify the transformer type.",equation:"\\frac{V_S}{V_P} = \\frac{N_S}{N_P} \\implies N_S = N_P \\times \\frac{V_S}{V_P}",solution:"1. Solve for \\( N_S \\):<br>\\( N_S = 1200 \\times \\frac{12\\,\\mathrm{V}}{240\\,\\mathrm{V}} = 1200 \\times \\frac{1}{20} = 60\\,\\text{turns} \\).<br>2. Since \\( V_S < V_P \\), this is a step-down transformer.",finalAnswer:"N_S = 60\\,\\text{turns} \\text{ (Step-Down Transformer)}",explanation:"The voltage is stepped down by a factor of 20, matching the exact 20-to-1 ratio of the coil windings."},
{title:"Current Transformation in an Ideal Transformer",given:"Primary turns \\( N_P = 100 \\), Secondary turns \\( N_S = 500 \\), Secondary load current \\( I_S = 0.40\\,\\mathrm{A} \\).",find:"Primary current drawn (\\( I_P \\)) assuming 100% efficiency.",equation:"\\frac{I_P}{I_S} = \\frac{N_S}{N_P} \\implies I_P = I_S \\times \\frac{N_S}{N_P}",solution:"Substitute into the inverse current ratio:<br>\\( I_P = 0.40\\,\\mathrm{A} \\times \\frac{500}{100} = 0.40 \\times 5 = 2.0\\,\\mathrm{A} \\).",finalAnswer:"I_P = 2.0\\,\\mathrm{A}",explanation:"In a step-up transformer, voltage increases by 5 times while current drops by 5 times, conserving electric power (\\( V_P I_P = V_S I_S \\))."},
{title:"Joule Heating Power Loss in Transmission",given:"Transmission line resistance \\( R = 4.0\\,\\Omega \\), Current flowing \\( I = 15\\,\\mathrm{A} \\). Input power at plant \\( P_{e1} = 50\\,\\mathrm{kW} = 50{,}000\\,\\mathrm{W} \\).",find:"Joule heating loss (\\( P_J \\)) and useful power received at substation (\\( P_{e2} \\)).",equation:"P_J = RI^2, \\quad P_{e2} = P_{e1} - P_J",solution:"1. Calculate Joule loss:<br>\\( P_J = 4.0\\,\\Omega \\times (15\\,\\mathrm{A})^2 = 4.0 \\times 225 = 900\\,\\mathrm{W} \\).<br>2. Calculate delivered power:<br>\\( P_{e2} = 50{,}000\\,\\mathrm{W} - 900\\,\\mathrm{W} = 49{,}100\\,\\mathrm{W} = 49.1\\,\\mathrm{kW} \\).",finalAnswer:"P_J = 900\\,\\mathrm{W}, \\quad P_{e2} = 49.1\\,\\mathrm{kW}",explanation:"Transmitting electricity at higher voltages reduces current \\( I \\), dramatically decreasing the \\( RI^2 \\) Joule heating loss along long transmission wires."}
],
equations:[
{section:"Magnetic Field & Force",name:"Due to a straight wire",formula:"\\( B = \\frac{\\mu_0 I}{2\\pi d} \\)",symbols:[{symbol:"B",desc:"Magnetic Field (T)"},{symbol:"μ_0",desc:"Permeability of free space (4π×10⁻⁷ T·m/A)"},{symbol:"I",desc:"Current (A)"},{symbol:"d",desc:"Distance from wire (m)"}]},
{section:"Magnetic Field & Force",name:"Due to a solenoid",formula:"\\( B = \\frac{\\mu_0 NI}{l} \\)",symbols:[{symbol:"N",desc:"Number of turns"},{symbol:"l",desc:"Length of solenoid (m)"}]},
{section:"Magnetic Field & Force",name:"On a current carrying wire",formula:"\\( F = IlB \\sin \\theta \\)",symbols:[{symbol:"F",desc:"Magnetic Force (N)"},{symbol:"l",desc:"Length of wire (m)"},{symbol:"θ",desc:"Angle (° or rad)"}]},
{section:"Transformers",name:"Transformers Voltage, Turn and Current Ratio",formula:"\\( \\frac{V_S}{V_P} = \\frac{N_S}{N_P} = \\frac{I_P}{I_S} \\)",symbols:[{symbol:"V_S, V_P",desc:"Secondary/Primary Voltage (V)"},{symbol:"N_S, N_P",desc:"Secondary/Primary Turns"},{symbol:"I_S, I_P",desc:"Secondary/Primary Current (A)"}]},
{section:"Transformers",name:"Power loss",formula:"\\( P_J = RI^2, P_J = P_{e1} - P_{e2}, P_{e1} = V_P I_P, P_{e2} = V_S I_S \\)",symbols:[{symbol:"P_J",desc:"Joule heating power loss (W)"},{symbol:"P_e1, P_e2",desc:"Input/Output Power (W)"}]}
],flashcards:[
{front:"What is the formula for the magnetic field generated by a straight wire?", back:"\\( B = \\frac{\\mu_0 I}{2\\pi d} \\)"},
{front:"What is the formula for the magnetic field at the center of a circular wire?", back:"\\( B = \\frac{\\mu_0 NI}{2r} \\)"},
{front:"What is the formula for the magnetic field inside a solenoid?", back:"\\( B = \\frac{\\mu_0 NI}{l} \\)"},
{front:"How do you find the magnetic force on a current-carrying wire?", back:"\\( F = IlB \\sin \\theta \\)"},
{front:"What is the relation between secondary and primary voltages and turns in a transformer?", back:"\\( \\frac{V_S}{V_P} = \\frac{N_S}{N_P} \\)"},
{front:"How do currents relate to turns in an ideal transformer?", back:"\\( \\frac{I_P}{I_S} = \\frac{N_S}{N_P} \\)"},
{front:"How is the input power \\( P_{e1} \\) of a transformer calculated?", back:"\\( P_{e1} = V_P I_P \\)"},
{front:"How is the output power \\( P_{e2} \\) of a transformer calculated?", back:"\\( P_{e2} = V_S I_S \\)"},
{front:"How is the Joule heating power loss calculated?", back:"\\( P_J = RI^2 \\)"},
{front:"How is power loss related to input and output power in a real transformer?", back:"\\( P_J = P_{e1} - P_{e2} \\)"}
],quiz:[
{question:"The magnetic field at a distance \\( d \\) from a straight wire is proportional to:", options:["\\( d \\)","\\( 1/d \\)","\\( d^2 \\)","\\( 1/d^2 \\)"], correctIndex:1, feedback:"According to \\( B = \\mu_0 I / 2\\pi d \\), it is inversely proportional to the distance \\( d \\)."},
{question:"For a solenoid, the magnetic field is given by:", options:["\\( B = \\frac{\\mu_0 I}{2\\pi d} \\)","\\( B = \\mu_0 NI \\)","\\( B = \\frac{\\mu_0 NI}{l} \\)","\\( B = \\frac{\\mu_0 N}{Il} \\)"], correctIndex:2, feedback:"The magnetic field inside a solenoid depends on the number of turns and its length: \\( B = \\frac{\\mu_0 NI}{l} \\)."},
{question:"The magnetic force on a wire is maximum when the angle \\( \\theta \\) between the wire and magnetic field is:", options:["0°","45°","90°","180°"], correctIndex:2, feedback:"Force \\( F = IlB \\sin \\theta \\). Sine is maximum (1) at 90°."},
{question:"In a step-up transformer, which of the following is true?", options:["\\( V_S > V_P \\)","\\( V_S < V_P \\)","\\( N_S < N_P \\)","\\( I_S > I_P \\)"], correctIndex:0, feedback:"A step-up transformer increases voltage, meaning \\( V_S > V_P \\) and \\( N_S > N_P \\)."},
{question:"What happens to the current in a step-up transformer? (Assume ideal)", options:["It increases","It decreases","It stays the same","It drops to zero"], correctIndex:1, feedback:"In an ideal transformer, power is conserved (\\( V_P I_P = V_S I_S \\)). Since voltage goes up in a step-up transformer, current must go down."},
{question:"If a transformer has 100 primary turns and 500 secondary turns, what is the voltage ratio \\( V_S / V_P \\)?", options:["1/5","5","25","1/25"], correctIndex:1, feedback:"The ratio of voltages equals the ratio of turns: \\( 500 / 100 = 5 \\)."},
{question:"Joule heating power loss in transmission lines is calculated as:", options:["\\( V^2 / R \\)","\\( RI^2 \\)","\\( VI \\)","\\( P / t \\)"], correctIndex:1, feedback:"Joule heating loss is \\( P_J = RI^2 \\)."},
{question:"In a circular wire of \\( N \\) turns and radius \\( r \\), the magnetic field at the center is:", options:["\\( \\frac{\\mu_0 NI}{2r} \\)","\\( \\frac{\\mu_0 I}{2\\pi r} \\)","\\( \\frac{\\mu_0 NI}{l} \\)","\\( \\frac{\\mu_0 N}{I} \\)"], correctIndex:0, feedback:"For a circular coil, \\( B = \\frac{\\mu_0 NI}{2r} \\)."},
{question:"What does \\( \\mu_0 \\) represent?", options:["Permittivity","Permeability of free space","Refractive index","Resistivity"], correctIndex:1, feedback:"\\( \\mu_0 \\) is the permeability of free space (vacuum permeability)."},
{question:"The output power of a transformer is given by:", options:["\\( V_P I_P \\)","\\( V_S I_S \\)","\\( V_P I_S \\)","\\( V_S I_P \\)"], correctIndex:1, feedback:"Output power (Secondary side) is \\( P_{e2} = V_S I_S \\)."}
]},
{id:"g9-l5",gifUrl:"https://commons.wikimedia.org/wiki/Special:FilePath/Refraction_animation.gif",worksheetUrl:"worksheets/g9-ch5-worksheet.pdf",games:[{topic:"Light Rays",url:"https://gemini.google.com/share/2ac63456c976"},{topic:"Reflection of light",url:"https://gemini.google.com/share/01abdd9ea9aa"},{topic:"Plane Mirrors",url:"https://gemini.google.com/share/7e4ee437394b"},{topic:"Concave Mirrors",url:"https://gemini.google.com/share/7e4ee437394b"},{topic:"Convex Mirrors",url:"https://gemini.google.com/share/7e4ee437394b"},{topic:"Refraction of light",url:"https://gemini.google.com/share/307ba374b958"},{topic:"Lenses",url:"https://gemini.google.com/share/1d57559d8cb4"}],title:"Chapter 5: Light",concepts:["Law of Reflection: Incident ray, reflected ray, and normal lie in the same plane; angle of incidence equals angle of reflection (\\( i = r \\)).","Pinhole Camera: Projects an inverted real image with magnification \\( m = \\frac{h_i}{h_o} = \\frac{d_i}{d_o} \\).","Refraction & Snell's Law: Bending of light across media boundaries, \\( n = \\frac{c}{v} \\) and \\( n_1 \\sin i = n_2 \\sin r \\).","Total Internal Reflection: Light in denser medium striking boundary beyond critical angle \\( \\theta_c \\) (\\( \\sin\\theta_c = \\frac{n_2}{n_1} \\)) reflects completely.","Mirror & Lens Equation: Relates object distance, image distance, and focal length, \\( \\frac{1}{f} = \\frac{1}{d_o} + \\frac{1}{d_i} \\) with \\( f = \\frac{R}{2} \\)."],definitions:[
{term:"Law of Reflection",definition:"The principle that the angle of incidence equals the angle of reflection (\\(i = r\\)), and both the incident ray, reflected ray, and normal lie in the identical geometric plane.",symbol:"i = r",unit:"{^\\circ} \\text{ or rad}",equation:"i = r"},
{term:"Angle of Incidence",definition:"The angle formed between the incident incoming light ray and the perpendicular normal line to the surface at the point of incidence.",symbol:"i",unit:"{^\\circ}",equation:"i = r"},
{term:"Angle of Reflection",definition:"The angle formed between the reflected outgoing light ray and the normal line at the point of incidence.",symbol:"r",unit:"{^\\circ}",equation:"r = i"},
{term:"Pinhole Camera",definition:"A simple camera without a lens that projects an inverted real image of an illuminated scene onto a screen through a tiny aperture hole.",symbol:"\\text{Pinhole}",unit:"\\text{No unit}",equation:"m = \\frac{h_i}{h_o} = \\frac{d_i}{d_o}"},
{term:"Refraction of Light",definition:"The bending and change in propagation direction of light as it passes obliquely across the boundary from one optical medium into another of different optical density.",symbol:"\\text{Refraction}",unit:"\\text{No unit}",equation:"n_1 \\sin i = n_2 \\sin r"},
{term:"Refractive Index",definition:"A dimensionless number describing how much the speed of light is reduced inside a medium compared to its speed in a vacuum.",symbol:"n",unit:"\\text{No unit}",equation:"n = \\frac{c}{v}"},
{term:"Real Depth and Apparent Depth",definition:"An optical illusion where submerged objects in an optically denser medium appear shallower to an observer in air.",symbol:"H, h",unit:"\\mathrm{m}",equation:"n = \\frac{\\text{real depth}}{\\text{apparent depth}} = \\frac{H}{h}"},
{term:"Snell's Law",definition:"The fundamental quantitative law of refraction stating that the ratio of the sine of incidence to the sine of refraction is inversely proportional to the refractive indices.",symbol:"n_1, n_2",unit:"\\text{No unit}",equation:"n_1 \\sin i = n_2 \\sin r"},
{term:"Critical Angle",definition:"The specific angle of incidence in the denser medium for which the corresponding angle of refraction in the less dense medium is exactly 90°.",symbol:"\\theta_c",unit:"{^\\circ}",equation:"\\sin\\theta_c = \\frac{n_2}{n_1} \\quad (n_1 > n_2)"},
{term:"Total Internal Reflection",definition:"The complete reflection of a light ray back into the optically denser medium when the angle of incidence exceeds the critical angle (\\(i > \\theta_c\\)).",symbol:"\\text{TIR}",unit:"\\text{No unit}",equation:"i > \\theta_c \\implies \\text{100\\% reflection back into medium 1}"},
{term:"Focal Length",definition:"The distance from the pole/optical center of a mirror or lens to its principal focus point, positive for converging elements and negative for diverging elements.",symbol:"f",unit:"\\mathrm{m}",equation:"\\frac{1}{f} = \\frac{1}{d_o} + \\frac{1}{d_i} \\implies f = \\frac{R}{2}"},
{term:"Radius of Curvature",definition:"The radius of the imaginary sphere from which the spherical mirror or lens surface was cut.",symbol:"R",unit:"\\mathrm{m}",equation:"R = 2f"},
{term:"Object Distance",definition:"The distance along the principal axis from the optical center or mirror vertex to the object.",symbol:"d_o",unit:"\\mathrm{m}",equation:"d_o = \\frac{f d_i}{d_i - f}"},
{term:"Image Distance",definition:"The distance along the principal axis from the optical center or mirror vertex to the formed image, positive for real images and negative for virtual images.",symbol:"d_i",unit:"\\mathrm{m}",equation:"d_i = \\frac{f d_o}{d_o - f}"},
{term:"Magnification",definition:"The ratio of the height of the image to the height of the object, equal to the negative ratio of image distance to object distance.",symbol:"M",unit:"\\text{No unit}",equation:"M = \\frac{h_i}{h_o} = -\\frac{d_i}{d_o}"}
],
examples:[
{title:"Law of Reflection at a Plane Mirror",given:"An incident ray strikes a flat mirror at an angle of incidence \\( i = 35^\\circ \\) measured from the normal.",find:"Angle of reflection (\\( r \\)) and angle between incident ray and reflected ray.",equation:"i = r, \\quad \\theta_{\\text{total}} = i + r",solution:"1. By the law of reflection, \\( r = i = 35^\\circ \\).<br>2. Total angle between incident and reflected beams:<br>\\( \\theta_{\\text{total}} = 35^\\circ + 35^\\circ = 70^\\circ \\).",finalAnswer:"r = 35^\\circ, \\quad \\theta_{\\text{total}} = 70^\\circ",explanation:"Light bounces off a polished reflective boundary such that the incoming angle with the normal precisely equals the exit angle."},
{title:"Image Formation in a Pinhole Camera",given:"Object height \\( h_o = 1.8\\,\\mathrm{m} \\), Object distance to pinhole \\( d_o = 6.0\\,\\mathrm{m} \\), Distance from pinhole to screen \\( d_i = 20\\,\\mathrm{cm} = 0.20\\,\\mathrm{m} \\).",find:"Magnification (\\( m \\)) and Image height formed on the screen (\\( h_i \\)).",equation:"m = \\frac{d_i}{d_o} = \\frac{h_i}{h_o} \\implies h_i = h_o \\times \\frac{d_i}{d_o}",solution:"1. Compute magnification:<br>\\( m = \\frac{0.20\\,\\mathrm{m}}{6.0\\,\\mathrm{m}} = \\frac{1}{30} \\approx 0.0333 \\).<br>2. Find image height:<br>\\( h_i = 1.8\\,\\mathrm{m} \\times \\frac{0.20}{6.0} = 0.06\\,\\mathrm{m} = 6.0\\,\\mathrm{cm} \\).",finalAnswer:"m = \\frac{1}{30} \\; (0.0333), \\quad h_i = 6.0\\,\\mathrm{cm} \\text{ (inverted)}",explanation:"Straight light rays crossing through the tiny pinhole create an inverted real image scaled down in direct proportion to distances."},
{title:"Refractive Index and Speed of Light in Glass",given:"Speed of light in vacuum \\( c = 3.0 \\times 10^8\\,\\mathrm{m/s} \\), Speed of light in crown glass \\( v = 2.0 \\times 10^8\\,\\mathrm{m/s} \\).",find:"Absolute refractive index of the crown glass (\\( n \\)).",equation:"n = \\frac{c}{v}",solution:"Substitute the light speeds into the ratio:<br>\\( n = \\frac{3.0 \\times 10^8\\,\\mathrm{m/s}}{2.0 \\times 10^8\\,\\mathrm{m/s}} = 1.50 \\).",finalAnswer:"n = 1.50",explanation:"A refractive index of 1.50 means light travels 1.50 times slower through the glass than through empty vacuum."},
{title:"Real Depth vs Apparent Depth in a Swimming Pool",given:"Real water depth \\( H = 2.4\\,\\mathrm{m} \\), Refractive index of water \\( n = 1.33 \\; (\\approx 4/3) \\).",find:"Apparent depth (\\( h \\)) seen by an observer standing above the pool.",equation:"n = \\frac{H}{h} \\implies h = \\frac{H}{n}",solution:"Rearrange and divide real depth by refractive index:<br>\\( h = \\frac{2.4\\,\\mathrm{m}}{1.333} \\approx 1.80\\,\\mathrm{m} \\).",finalAnswer:"h = 1.80\\,\\mathrm{m}",explanation:"Refraction of light rays emerging from water into air bends them away from the normal, making the pool bottom appear 60 cm higher than it really is."},
{title:"Snell's Law of Refraction (Air into Glass)",given:"Light enters glass from air (\\( n_1 = 1.00 \\), \\( n_2 = 1.50 \\)) at an angle of incidence \\( i = 45^\\circ \\).",find:"Angle of refraction in glass (\\( r \\)).",equation:"n_1 \\sin i = n_2 \\sin r \\implies \\sin r = \\frac{n_1 \\sin i}{n_2}",solution:"1. Calculate \\( \\sin 45^\\circ \\approx 0.7071 \\).<br>2. Solve for \\( \\sin r \\):<br>\\( \\sin r = \\frac{1.00 \\times 0.7071}{1.50} = \\frac{0.7071}{1.50} \\approx 0.4714 \\).<br>3. Compute angle:<br>\\( r = \\sin^{-1}(0.4714) \\approx 28.13^\\circ \\).",finalAnswer:"r \\approx 28.1^\\circ",explanation:"When entering an optically denser medium, light slows down and bends toward the normal line, resulting in \\( r < i \\)."},
{title:"Critical Angle and Total Internal Reflection in Water",given:"Water refractive index \\( n_1 = 1.333 \\), Air refractive index \\( n_2 = 1.000 \\).",find:"Critical angle \\( \\theta_c \\) for water-air interface.",equation:"\\sin\\theta_c = \\frac{n_2}{n_1}",solution:"Substitute the indices:<br>\\( \\sin\\theta_c = \\frac{1.000}{1.333} = 0.750 \\).<br>Take the inverse sine:<br>\\( \\theta_c = \\sin^{-1}(0.750) \\approx 48.59^\\circ \\).",finalAnswer:"\\theta_c \\approx 48.6^\\circ",explanation:"Underwater light rays striking the water-air surface at angles beyond 48.6° cannot escape into air and undergo total internal reflection."},
{title:"Focal Length and Radius of Curvature of a Spherical Mirror",given:"A concave mirror has a radius of curvature \\( R = 30\\,\\mathrm{cm} = 0.30\\,\\mathrm{m} \\).",find:"Focal length (\\( f \\)) of the mirror.",equation:"f = \\frac{R}{2}",solution:"Divide radius by 2:<br>\\( f = \\frac{30\\,\\mathrm{cm}}{2} = 15\\,\\mathrm{cm} = 0.15\\,\\mathrm{m} \\).",finalAnswer:"f = 15\\,\\mathrm{cm}",explanation:"For paraxial rays, the focal point of a spherical mirror lies precisely halfway between the vertex pole and the center of curvature."},
{title:"Image Distance Calculation (Mirror/Lens Equation)",given:"Focal length of concave mirror \\( f = 10\\,\\mathrm{cm} \\), Object placed at \\( d_o = 15\\,\\mathrm{cm} \\).",find:"Image distance (\\( d_i \\)) and nature of the image.",equation:"d_i = \\frac{f d_o}{d_o - f}",solution:"Substitute into the rearranged formula:<br>\\( d_i = \\frac{10 \\times 15}{15 - 10} = \\frac{150}{5} = 30\\,\\mathrm{cm} \\).",finalAnswer:"d_i = 30\\,\\mathrm{cm} \\text{ (Real image formed in front of mirror)}",explanation:"Because the object is located outside the focal point (\\( d_o > f \\)), light rays converge to form an inverted real image at \\( 30\\,\\mathrm{cm} \\)."},
{title:"Object Distance from Known Image Distance",given:"Converging lens with focal length \\( f = 12\\,\\mathrm{cm} \\) forms a real image on a screen at \\( d_i = 36\\,\\mathrm{cm} \\).",find:"Required object distance (\\( d_o \\)).",equation:"d_o = \\frac{f d_i}{d_i - f}",solution:"Substitute the values:<br>\\( d_o = \\frac{12 \\times 36}{36 - 12} = \\frac{432}{24} = 18\\,\\mathrm{cm} \\).",finalAnswer:"d_o = 18\\,\\mathrm{cm}",explanation:"Placing the object at 18 cm causes the lens to focus the light into an image on a projection screen 36 cm on the other side."},
{title:"Magnification and Image Size in a Concave Mirror",given:"Object of height \\( h_o = 4.0\\,\\mathrm{cm} \\) placed at \\( d_o = 20\\,\\mathrm{cm} \\), forming a real image at \\( d_i = 60\\,\\mathrm{cm} \\).",find:"Magnification (\\( M \\)) and Image height (\\( h_i \\)).",equation:"M = -\\frac{d_i}{d_o} = \\frac{h_i}{h_o} \\implies h_i = M \\times h_o",solution:"1. Calculate magnification:<br>\\( M = -\\frac{60\\,\\mathrm{cm}}{20\\,\\mathrm{cm}} = -3.0 \\).<br>2. Calculate image height:<br>\\( h_i = -3.0 \\times 4.0\\,\\mathrm{cm} = -12.0\\,\\mathrm{cm} \\).",finalAnswer:"M = -3.0, \\quad h_i = -12.0\\,\\mathrm{cm} \\text{ (3x enlarged, inverted)}",explanation:"The negative sign indicates the image is inverted relative to the object, and its magnitude of 3.0 indicates it is three times taller."}
],
equations:[
{section:"Reflection of light",name:"Law of Reflection",formula:"\\( i = r \\)",symbols:[{symbol:"i",desc:"Angle of incidence (°)"},{symbol:"r",desc:"Angle of reflection (°)"}]},
{section:"Pinhole Camera",name:"Pinhole Camera",formula:"\\( m = \\frac{h_i}{h_o} = \\frac{d_i}{d_o} \\)",symbols:[{symbol:"m",desc:"Magnification (No unit)"},{symbol:"h_i, h_o",desc:"Image/Object height (m)"},{symbol:"d_i, d_o",desc:"Image/Object distance (m)"}]},
{section:"Refraction of light",name:"Refractive index",formula:"\\( n = \\frac{c}{v} \\)",symbols:[{symbol:"n",desc:"Refractive index (No unit)"},{symbol:"c",desc:"Speed of light in vacuum (m/s)"},{symbol:"v",desc:"Speed of light in medium (m/s)"}]},
{section:"Refraction of light",name:"Real depth and apparent depth",formula:"\\( n = \\frac{\\text{real depth}}{\\text{apparent depth}} = \\frac{H}{h} \\)",symbols:[{symbol:"H",desc:"Real depth (m)"},{symbol:"h",desc:"Apparent depth (m)"}]},
{section:"Refraction of light",name:"Snell’s Law",formula:"\\( n_1 \\sin i = n_2 \\sin r \\)",symbols:[{symbol:"n_1, n_2",desc:"Refractive indices of medium 1 and 2"}]},
{section:"Refraction of light",name:"Critical Angle",formula:"\\( \\sin \\theta_c = \\frac{n_2}{n_1} \\)",symbols:[{symbol:"θ_c",desc:"Critical angle (°)"}]},
{section:"Mirrors & Lenses",name:"Mirror/Lens Equation",formula:"\\( \\frac{1}{f} = \\frac{1}{d_o} + \\frac{1}{d_i} \\Rightarrow f = \\frac{d_i d_o}{d_i + d_o} \\)",symbols:[{symbol:"f",desc:"Focal length (m)"},{symbol:"d_o",desc:"Object distance (m)"},{symbol:"d_i",desc:"Image distance (m)"}]},
{section:"Mirrors & Lenses",name:"Object's distance",formula:"\\( d_o = \\frac{f d_i}{d_i - f} \\)",symbols:[{symbol:"d_o",desc:"Object distance (m)"},{symbol:"d_i",desc:"Image distance (m)"},{symbol:"f",desc:"Focal length (m)"}]},
{section:"Mirrors & Lenses",name:"Image's distance",formula:"\\( d_i = \\frac{f d_o}{d_o - f} \\)",symbols:[{symbol:"d_o",desc:"Object distance (m)"},{symbol:"d_i",desc:"Image distance (m)"},{symbol:"f",desc:"Focal length (m)"}]},
{section:"Mirrors & Lenses",name:"Radius & focal length relation",formula:"\\( f = \\frac{R}{2} \\Rightarrow R = 2f \\)",symbols:[{symbol:"R",desc:"Radius of curvature (m)"}]},
{section:"Mirrors & Lenses",name:"Magnification",formula:"\\( M = \\frac{d_i}{d_o} = -\\frac{h_i}{h_o} \\)",symbols:[{symbol:"M",desc:"Magnification (No unit)"}]}
],flashcards:[
{front:"What is the Law of Reflection?", back:"\\( i = r \\)"},
{front:"What is Snell's Law?", back:"\\( n_1 \\sin i = n_2 \\sin r \\)"},
{front:"How is the refractive index related to light speed in the mediums?", back:"\\( \\frac{n_2}{n_1} = \\frac{v_1}{v_2} \\)"},
{front:"How is the refractive index calculated using real and apparent depth?", back:"\\( n = \\frac{H}{h} \\)"},
{front:"What is the formula for the critical angle?", back:"\\( \\sin \\theta_c = \\frac{n_2}{n_1} \\)"},
{front:"What is the Mirror/Lens Equation?", back:"\\( \\frac{1}{f} = \\frac{1}{d_o} + \\frac{1}{d_i} \\)"},
{front:"How can you find the image distance directly from focal length and object distance?", back:"\\( d_i = \\frac{f d_o}{d_o - f} \\)"},
{front:"How can you find the object distance directly from focal length and image distance?", back:"\\( d_o = \\frac{f d_i}{d_i - f} \\)"},
{front:"How are the focal length and radius of curvature related?", back:"\\( f = \\frac{R}{2} \\)"},
{front:"What is the formula for magnification in terms of object and image distance?", back:"\\( M = \\frac{d_i}{d_o} \\)"}
],quiz:[
{question:"According to the Law of Reflection:", options:["\\( i &lt; r \\)","\\( i &gt; r \\)","\\( i = r \\)","\\( i + r = 90^\\circ \\)"], correctIndex:2, feedback:"The angle of incidence is exactly equal to the angle of reflection."},
{question:"When light travels from a less dense (vacuum) to a more dense medium, its speed:", options:["Increases","Decreases","Stays the same","Becomes zero"], correctIndex:1, feedback:"Speed of light is slower in a denser medium, which is why \\( n = c / v \\) is greater than 1."},
{question:"The formula to calculate the critical angle is:", options:["\\( \\cos \\theta_c = \\frac{n_2}{n_1} \\)","\\( \\sin \\theta_c = \\frac{n_1}{n_2} \\)","\\( \\sin \\theta_c = \\frac{n_2}{n_1} \\)","\\( \\tan \\theta_c = \\frac{n_2}{n_1} \\)"], correctIndex:2, feedback:"The critical angle is found using the inverse sine of the ratio of the two refractive indices: \\( \\sin \\theta_c = n_2 / n_1 \\)."},
{question:"For a spherical mirror, if the radius of curvature is 20cm, what is the focal length?", options:["40cm","10cm","20cm","5cm"], correctIndex:1, feedback:"Focal length \\( f = R/2 \\), so \\( 20 / 2 = 10 \\text{cm} \\)."},
{question:"In the mirror equation, what does \\( d_o \\) represent?", options:["Object distance","Image distance","Focal length","Optical density"], correctIndex:0, feedback:"\\( d_o \\) stands for object distance."},
{question:"Magnification is given by which distance ratio?", options:["\\( d_o / d_i \\)","\\( d_i / d_o \\)","\\( d_o \\times d_i \\)","\\( f / d_o \\)"], correctIndex:1, feedback:"Magnification \\( M = d_i / d_o \\)."},
{question:"Which formula relates real depth (H) and apparent depth (h) to the refractive index (n)?", options:["\\( n = h / H \\)","\\( n = H / h \\)","\\( n = H \\times h \\)","\\( n = H - h \\)"], correctIndex:1, feedback:"Refractive index \\( n = \\text{real depth} / \\text{apparent depth} = H / h \\)."},
{question:"What happens to the wavelength of light when entering a medium with a higher refractive index?", options:["Increases","Decreases","Stays same","Drops to zero"], correctIndex:1, feedback:"Because speed decreases and frequency remains constant, wavelength must decrease."},
{question:"Which of these is a correct form of Snell's Law?", options:["\\( \\sin i / \\sin r = n_1 / n_2 \\)","\\( n_1 \\sin i = n_2 \\sin r \\)","\\( \\cos i / \\cos r = n_2 / n_1 \\)","\\( i / r = n_2 / n_1 \\)"], correctIndex:1, feedback:"\\( n_1 \\sin i = n_2 \\sin r \\) is the most standard form."},
{question:"To find the image distance \\( d_i \\) given \\( f \\) and \\( d_o \\), you can use:", options:["\\( f d_o / (d_o - f) \\)","\\( f + d_o \\)","\\( d_o - f \\)","\\( f d_o \\)"], correctIndex:0, feedback:"Algebraic rearrangement of the mirror equation yields \\( d_i = \\frac{f d_o}{d_o - f} \\)."}
]}
],
"12": [
{id:"g12-l1",gifUrl:"https://commons.wikimedia.org/wiki/Special:FilePath/Translational_motion.gif",worksheetUrl:"worksheets/ch1-l1-worksheet.pdf",games:[{topic:"Kinetic Theory of Ideal Gases",url:"https://gemini.google.com/share/acfae742b2c0"}],title:"Chapter 1 Lesson 1: Kinetic Theory of Ideal Gases",concepts:["Ideal Gas Model: Molecules are treated as point masses in continuous random motion undergoing perfectly elastic collisions.","Microscopic Pressure: Arises from momentum transfer during wall collisions, \\( P = \\frac{2}{3}\\left(\\frac{N}{V}\\right)K_{av} \\).","Ideal Gas Law: Combines Boyle's, Charles's, and Gay-Lussac's laws into \\( PV = nRT = Nk_B T \\).","Average Kinetic Energy: Depends solely on absolute temperature \\( T \\), with \\( K_{av} = \\frac{3}{2}k_B T \\) per molecule.","Root-Mean-Square Speed: Statistical measure of particle speed, \\( v_{rms} = \\sqrt{\\frac{3RT}{M}} = \\sqrt{\\frac{3k_B T}{m_0}} \\)."],definitions:[
{term:"Ideal Gas",definition:"A theoretical model of gas consisting of identical, randomly moving point-like molecules with negligible volume that exert no forces on each other except during perfectly elastic collisions.",symbol:"\\text{Ideal Gas}",unit:"\\text{No unit}",equation:"PV = nRT = N k_B T"},
{term:"Gas Pressure",definition:"The macroscopic normal force exerted per unit area on the container walls resulting from countless microscopic collisions of gas molecules.",symbol:"P",unit:"\\mathrm{Pa} \\;(\\mathrm{N/m^2})",equation:"P = \\frac{F}{A} = \\frac{2}{3}\\left(\\frac{N}{V}\\right)K_{av}"},
{term:"Elastic Collision with Container Wall",definition:"A rebound collision where total mechanical kinetic energy is conserved; a molecule of mass \\(m_0\\) strikes perpendicularly at velocity \\(v\\) and rebounds at \\(-v\\), transferring momentum \\(\\Delta p = 2m_0 v\\).",symbol:"\\Delta p = 2m_0 v",unit:"\\mathrm{kg\\cdot m/s}",equation:"P = \\frac{2 N m_0 v}{A \\Delta t}"},
{term:"Inelastic Collision with Container Wall",definition:"A collision where gas molecules stick to or absorb energy at the wall without rebounding with their full original speed, imparting momentum \\(\\Delta p = m_0 v\\).",symbol:"\\Delta p = m_0 v",unit:"\\mathrm{kg\\cdot m/s}",equation:"P = \\frac{N m_0 v}{A \\Delta t}"},
{term:"Universal Gas Constant",definition:"A fundamental physical proportionality constant connecting the macroscopic energy scale of one mole of an ideal gas to its absolute thermodynamic temperature.",symbol:"R",unit:"\\mathrm{J/(mol\\cdot K)}",equation:"R = k_B N_A = 8.314\\,\\mathrm{J/(mol\\cdot K)}"},
{term:"Boltzmann Constant",definition:"The physical constant expressing the amount of kinetic energy corresponding to each degree of absolute thermodynamic temperature per individual particle.",symbol:"k_B",unit:"\\mathrm{J/K}",equation:"k_B = \\frac{R}{N_A} = 1.38\\times 10^{-23}\\,\\mathrm{J/K}"},
{term:"Avogadro's Number",definition:"The exact number of constituent elementary entities (atoms or molecules) contained within one mole of any pure substance.",symbol:"N_A",unit:"\\mathrm{mol^{-1}}",equation:"N_A = 6.022\\times 10^{23}\\,\\mathrm{mol^{-1}}"},
{term:"Combined Gas Law",definition:"The thermodynamic law combining Boyle's, Charles's, and Gay-Lussac's laws for a fixed mass of gas whose pressure, volume, and temperature vary simultaneously.",symbol:"\\frac{PV}{T} = \\text{const}",unit:"\\text{No unit}",equation:"\\frac{P_1 V_1}{T_1} = \\frac{P_2 V_2}{T_2}"},
{term:"Isobaric Process (Charles's Law)",definition:"A thermodynamic state transformation that occurs under strictly constant hydrostatic pressure (\\(P_1 = P_2\\)).",symbol:"P = \\text{const}",unit:"\\text{No unit}",equation:"\\frac{V_1}{T_1} = \\frac{V_2}{T_2}"},
{term:"Isochoric Process (Gay-Lussac's Law)",definition:"A thermodynamic state transformation occurring inside a rigid, sealed container of constant volume (\\(V_1 = V_2\\)).",symbol:"V = \\text{const}",unit:"\\text{No unit}",equation:"\\frac{P_1}{T_1} = \\frac{P_2}{T_2}"},
{term:"Isothermal Process (Boyle's Law)",definition:"A slow thermodynamic transformation occurring in thermal equilibrium at constant temperature (\\(T_1 = T_2\\)).",symbol:"T = \\text{const}",unit:"\\text{No unit}",equation:"P_1 V_1 = P_2 V_2"},
{term:"Average Kinetic Energy per Molecule",definition:"The mean translational kinetic energy possessed by an individual gas particle, strictly dependent only on the absolute temperature \\(T\\).",symbol:"K_{av}",unit:"\\mathrm{J}",equation:"K_{av} = \\frac{1}{2}m_0(v^2)_{av} = \\frac{3}{2}k_B T = \\frac{3}{2}\\frac{PV}{N}"},
{term:"Total Kinetic Energy of Gas",definition:"The sum of the translational kinetic energies of all \\(N\\) particles (or \\(n\\) moles) contained in the gas system.",symbol:"K",unit:"\\mathrm{J}",equation:"K = N K_{av} = \\frac{3}{2}N k_B T = \\frac{3}{2}nRT = \\frac{3}{2}PV"},
{term:"Root-Mean-Square Speed (v_rms)",definition:"The statistical measure of the speed of particles in a gas, equal to the square root of the mean squared velocity.",symbol:"v_{rms}",unit:"\\mathrm{m/s}",equation:"v_{rms} = \\sqrt{(v^2)_{av}} = \\sqrt{\\frac{3 k_B T}{m_0}} = \\sqrt{\\frac{3RT}{M}} = \\sqrt{\\frac{3P}{\\rho}}"},
{term:"Number of Moles",definition:"The amount of substance measured relative to Avogadro's standard number of particles.",symbol:"n",unit:"\\mathrm{mol}",equation:"n = \\frac{m}{M} = \\frac{N}{N_A}"},
{term:"Molar Mass",definition:"The mass of one mole of a chemical element or compound, expressed in kilograms per mole.",symbol:"M",unit:"\\mathrm{kg/mol}",equation:"M = m_0 N_A = \\frac{m}{n}"},
{term:"Mass of a Single Molecule",definition:"The physical mass of an individual microscopic gas molecule.",symbol:"m_0",unit:"\\mathrm{kg}",equation:"m_0 = \\frac{M}{N_A} = \\frac{m}{N}"}
],
examples:[
{title:"Microscopic Pressure from Average Kinetic Energy",given:"Gas volume \\( V = 0.05\\,\\mathrm{m^3} \\), Number of molecules \\( N = 1.0\\times 10^{24} \\), Average kinetic energy per molecule \\( K_{av} = 6.0\\times 10^{-21}\\,\\mathrm{J} \\).",find:"Gas pressure (\\( P \\)) exerted on container.",equation:"P = \\frac{2}{3}\\left(\\frac{N}{V}\\right)K_{av}",solution:"Substitute the microscopic quantities:<br>\\( P = \\frac{2}{3} \\times \\left(\\frac{1.0\\times 10^{24}}{0.05\\,\\mathrm{m^3}}\\right) \\times (6.0\\times 10^{-21}\\,\\mathrm{J}) \\)<br>\\( P = \\frac{2}{3} \\times (2.0\\times 10^{25}) \\times (6.0\\times 10^{-21}) = \\frac{2}{3} \\times 120{,}000 = 80{,}000\\,\\mathrm{Pa} \\).",finalAnswer:"P = 8.0\\times 10^4\\,\\mathrm{Pa} \\; (80\\,\\mathrm{kPa})",explanation:"Gas pressure directly originates from the density of molecular kinetic energy distributed across the enclosed container volume."},
{title:"Gas Pressure from Elastic Wall Collisions",given:"\\( N = 2.0\\times 10^{22} \\) molecules of mass \\( m_0 = 4.65\\times 10^{-26}\\,\\mathrm{kg} \\) (Nitrogen) strike container wall of area \\( A = 0.02\\,\\mathrm{m^2} \\) with speed \\( v = 500\\,\\mathrm{m/s} \\) over \\( \\Delta t = 0.10\\,\\mathrm{s} \\). Collisions are perfectly elastic.",find:"Pressure exerted on the wall (\\( P \\)).",equation:"P = \\frac{2 N m_0 v}{A \\Delta t}",solution:"1. Momentum imparted per particle is \\( 2m_0 v \\).<br>2. Calculate total force:<br>\\( F = \\frac{2 \\times (2.0\\times 10^{22}) \\times (4.65\\times 10^{-26}\\,\\mathrm{kg}) \\times 500\\,\\mathrm{m/s}}{0.10\\,\\mathrm{s}} = \\frac{9.30\\times 10^{-1}}{0.10} = 9.30\\,\\mathrm{N} \\).<br>3. Compute pressure:<br>\\( P = \\frac{9.30\\,\\mathrm{N}}{0.02\\,\\mathrm{m^2}} = 465\\,\\mathrm{Pa} \\).",finalAnswer:"P = 465\\,\\mathrm{Pa}",explanation:"Because the collision is elastic, molecules rebound with full reversed velocity, doubling the momentum impulse compared to inelastic sticking."},
{title:"Pressure from Inelastic Wall Collisions",given:"Same parameters as above (\\( N = 2.0\\times 10^{22} \\), \\( m_0 = 4.65\\times 10^{-26}\\,\\mathrm{kg} \\), \\( v = 500\\,\\mathrm{m/s} \\), \\( A = 0.02\\,\\mathrm{m^2} \\), \\( \\Delta t = 0.10\\,\\mathrm{s} \\)), but particles hit and stick inelastically without rebounding.",find:"Pressure on the wall (\\( P \\)).",equation:"P = \\frac{N m_0 v}{A \\Delta t}",solution:"With \\( \\Delta p = m_0 v \\):<br>\\( P = \\frac{(2.0\\times 10^{22}) \\times (4.65\\times 10^{-26}) \\times 500}{0.02 \\times 0.10} = \\frac{0.465}{0.002} = 232.5\\,\\mathrm{Pa} \\).",finalAnswer:"P = 232.5\\,\\mathrm{Pa}",explanation:"Without rebound, the momentum transfer per impact is halved, resulting in exactly half the pressure of the elastic collision."},
{title:"State Calculation with the Ideal Gas Equation",given:"Number of moles \\( n = 2.0\\,\\mathrm{mol} \\), Temperature \\( T = 27^\\circ\\mathrm{C} = 300.15\\,\\mathrm{K} \\approx 300\\,\\mathrm{K} \\), Volume \\( V = 0.025\\,\\mathrm{m^3} \\), \\( R = 8.31\\,\\mathrm{J/(mol\\cdot K)} \\).",find:"Absolute pressure of the gas (\\( P \\)).",equation:"PV = nRT \\implies P = \\frac{nRT}{V}",solution:"Substitute the values into the equation of state:<br>\\( P = \\frac{2.0\\,\\mathrm{mol} \\times 8.31\\,\\mathrm{J/(mol\\cdot K)} \\times 300\\,\\mathrm{K}}{0.025\\,\\mathrm{m^3}} = \\frac{4986}{0.025} = 199{,}440\\,\\mathrm{Pa} \\).",finalAnswer:"P \\approx 1.99\\times 10^5\\,\\mathrm{Pa} \\; (199.4\\,\\mathrm{kPa})",explanation:"The ideal gas equation of state interrelates pressure, volume, and absolute Kelvin temperature for any gas sample under standard conditions."},
{title:"Combined Gas Law State Transition",given:"Initial state: \\( P_1 = 1.0\\times 10^5\\,\\mathrm{Pa} \\), \\( V_1 = 4.0\\,\\mathrm{L} \\), \\( T_1 = 300\\,\\mathrm{K} \\). Gas is compressed to \\( V_2 = 2.0\\,\\mathrm{L} \\) while heated to \\( T_2 = 450\\,\\mathrm{K} \\).",find:"Final pressure (\\( P_2 \\)).",equation:"\\frac{P_1 V_1}{T_1} = \\frac{P_2 V_2}{T_2} \\implies P_2 = P_1 \\left(\\frac{V_1}{V_2}\\right)\\left(\\frac{T_2}{T_1}\\right)",solution:"Substitute directly:<br>\\( P_2 = 1.0\\times 10^5\\,\\mathrm{Pa} \\times \\left(\\frac{4.0\\,\\mathrm{L}}{2.0\\,\\mathrm{L}}\\right) \\times \\left(\\frac{450\\,\\mathrm{K}}{300\\,\\mathrm{K}}\\right) = 1.0\\times 10^5 \\times 2.0 \\times 1.5 = 3.0\\times 10^5\\,\\mathrm{Pa} \\).",finalAnswer:"P_2 = 3.0\\times 10^5\\,\\mathrm{Pa} \\; (300\\,\\mathrm{kPa})",explanation:"Halving the volume doubles the pressure, and increasing temperature by 1.5 increases pressure by another 1.5, tripling initial pressure overall."},
{title:"Isobaric Expansion (Charles's Law)",given:"Initial volume \\( V_1 = 2.5\\,\\mathrm{L} \\) at \\( T_1 = 20^\\circ\\mathrm{C} = 293.15\\,\\mathrm{K} \\approx 293\\,\\mathrm{K} \\). Gas is heated at constant pressure to \\( T_2 = 80^\\circ\\mathrm{C} = 353.15\\,\\mathrm{K} \\approx 353\\,\\mathrm{K} \\).",find:"Final volume of the gas (\\( V_2 \\)).",equation:"\\frac{V_1}{T_1} = \\frac{V_2}{T_2} \\implies V_2 = V_1 \\frac{T_2}{T_1}",solution:"Substitute absolute Kelvin temperatures:<br>\\( V_2 = 2.5\\,\\mathrm{L} \\times \\frac{353\\,\\mathrm{K}}{293\\,\\mathrm{K}} \\approx 2.5 \\times 1.2048 \\approx 3.01\\,\\mathrm{L} \\).",finalAnswer:"V_2 \\approx 3.01\\,\\mathrm{L}",explanation:"Under constant pressure, gas molecules move faster when heated and push the boundaries outward, expanding volume proportionally to absolute temperature."},
{title:"Isochoric Heating (Gay-Lussac's Law)",given:"Gas in a rigid sealed steel cylinder has initial pressure \\( P_1 = 150\\,\\mathrm{kPa} \\) at \\( T_1 = 300\\,\\mathrm{K} \\). Cylinder is cooled to \\( T_2 = 200\\,\\mathrm{K} \\).",find:"Final pressure inside the cylinder (\\( P_2 \\)).",equation:"\\frac{P_1}{T_1} = \\frac{P_2}{T_2} \\implies P_2 = P_1 \\frac{T_2}{T_1}",solution:"Substitute the values:<br>\\( P_2 = 150\\,\\mathrm{kPa} \\times \\frac{200\\,\\mathrm{K}}{300\\,\\mathrm{K}} = 150 \\times \\frac{2}{3} = 100\\,\\mathrm{kPa} \\).",finalAnswer:"P_2 = 100\\,\\mathrm{kPa}",explanation:"In a rigid tank (constant volume), cooling slows down the molecules, reducing the frequency and violence of wall collisions and dropping pressure."},
{title:"Isothermal Compression (Boyle's Law)",given:"Initial pressure \\( P_1 = 100\\,\\mathrm{kPa} \\), Initial volume \\( V_1 = 12.0\\,\\mathrm{L} \\). Gas is slowly compressed at constant temperature until \\( V_2 = 4.0\\,\\mathrm{L} \\).",find:"Final pressure (\\( P_2 \\)).",equation:"P_1 V_1 = P_2 V_2 \\implies P_2 = \\frac{P_1 V_1}{V_2}",solution:"Substitute the values:<br>\\( P_2 = \\frac{100\\,\\mathrm{kPa} \\times 12.0\\,\\mathrm{L}}{4.0\\,\\mathrm{L}} = 100 \\times 3.0 = 300\\,\\mathrm{kPa} \\).",finalAnswer:"P_2 = 300\\,\\mathrm{kPa}",explanation:"Compressing gas into one-third the volume triples the particle concentration, causing three times more wall impacts per second."},
{title:"Average Translational Kinetic Energy per Molecule",given:"Absolute temperature of gas \\( T = 300\\,\\mathrm{K} \\), Boltzmann constant \\( k_B = 1.38\\times 10^{-23}\\,\\mathrm{J/K} \\).",find:"Average kinetic energy of an individual molecule (\\( K_{av} \\)).",equation:"K_{av} = \\frac{3}{2} k_B T",solution:"Substitute Boltzmann constant and temperature:<br>\\( K_{av} = 1.5 \\times (1.38\\times 10^{-23}\\,\\mathrm{J/K}) \\times 300\\,\\mathrm{K} = 6.21\\times 10^{-21}\\,\\mathrm{J} \\).",finalAnswer:"K_{av} = 6.21\\times 10^{-21}\\,\\mathrm{J}",explanation:"Translational kinetic energy depends purely on absolute temperature; every ideal gas molecule has this exact mean energy at 300 K regardless of its mass."},
{title:"Total Kinetic Energy of an Ideal Gas Sample",given:"Number of moles \\( n = 3.0\\,\\mathrm{mol} \\), Temperature \\( T = 400\\,\\mathrm{K} \\), \\( R = 8.31\\,\\mathrm{J/(mol\\cdot K)} \\).",find:"Total internal kinetic energy (\\( K \\)).",equation:"K = \\frac{3}{2} nRT",solution:"Substitute the molar quantities:<br>\\( K = 1.5 \\times 3.0\\,\\mathrm{mol} \\times 8.31\\,\\mathrm{J/(mol\\cdot K)} \\times 400\\,\\mathrm{K} = 4.5 \\times 3324 = 14{,}958\\,\\mathrm{J} \\approx 1.50\\times 10^4\\,\\mathrm{J} \\).",finalAnswer:"K \\approx 1.50\\times 10^4\\,\\mathrm{J} \\; (14.96\\,\\mathrm{kJ})",explanation:"For a monatomic ideal gas, internal energy consists entirely of the random translational kinetic energy of all constituent gas atoms."},
{title:"Root-Mean-Square Speed of Oxygen Molecules",given:"Temperature \\( T = 300\\,\\mathrm{K} \\), Molar mass of Oxygen (\\( O_2 \\)) \\( M = 32\\,\\mathrm{g/mol} = 0.032\\,\\mathrm{kg/mol} \\), \\( R = 8.31\\,\\mathrm{J/(mol\\cdot K)} \\).",find:"Root-mean-square speed (\\( v_{rms} \\)).",equation:"v_{rms} = \\sqrt{\\frac{3RT}{M}}",solution:"Ensure molar mass is converted to kg/mol:<br>\\( v_{rms} = \\sqrt{\\frac{3 \\times 8.31\\,\\mathrm{J/(mol\\cdot K)} \\times 300\\,\\mathrm{K}}{0.032\\,\\mathrm{kg/mol}}} = \\sqrt{\\frac{7479}{0.032}} = \\sqrt{233{,}718.75} \\approx 483.4\\,\\mathrm{m/s} \\).",finalAnswer:"v_{rms} \\approx 483\\,\\mathrm{m/s}",explanation:"At room temperature, oxygen molecules fly and collide at an average speed of nearly 483 meters per second (faster than the speed of sound in air)."},
{title:"Number of Moles and Individual Molecular Mass",given:"Mass of gas sample \\( m = 110\\,\\mathrm{g} = 0.110\\,\\mathrm{kg} \\) of Carbon Dioxide (\\( CO_2 \\), \\( M = 44\\,\\mathrm{g/mol} = 0.044\\,\\mathrm{kg/mol} \\)), \\( N_A = 6.02\\times 10^{23}\\,\\mathrm{mol^{-1}} \\).",find:"Number of moles (\\( n \\)), total number of molecules (\\( N \\)), and mass of one molecule (\\( m_0 \\)).",equation:"n = \\frac{m}{M}, \\quad N = n N_A, \\quad m_0 = \\frac{M}{N_A}",solution:"1. Number of moles: \\( n = \\frac{0.110\\,\\mathrm{kg}}{0.044\\,\\mathrm{kg/mol}} = 2.5\\,\\mathrm{mol} \\).<br>2. Total molecules: \\( N = 2.5 \\times (6.02\\times 10^{23}) = 1.505\\times 10^{24}\\,\\text{molecules} \\).<br>3. Mass of one molecule: \\( m_0 = \\frac{0.044\\,\\mathrm{kg/mol}}{6.02\\times 10^{23}\\,\\mathrm{mol^{-1}}} \\approx 7.31\\times 10^{-26}\\,\\mathrm{kg} \\).",finalAnswer:"n = 2.5\\,\\mathrm{mol}, \\quad N = 1.51\\times 10^{24}, \\quad m_0 = 7.31\\times 10^{-26}\\,\\mathrm{kg}",explanation:"Avogadro's number scales smoothly between the microscopic mass of a single molecule and the macroscopic molar mass measured on a lab balance."}
],
equations:[
{section:"Pressure",name:"Pressure in Kinetic Theory<br><img src='images/ch1-l1-eq1.png' style='width:100%; border-radius:8px; margin-top:10px;'>",formula:"\\( P = \\left(\\frac{2}{3}\\right)\\left(\\frac{N}{V}\\right)K_{av} \\)",symbols:[{symbol:"P",desc:"Pressure (Pa)"},{symbol:"N",desc:"Number of molecules (No unit)"},{symbol:"V",desc:"Volume (m³)"},{symbol:"K_{av}",desc:"Average Kinetic Energy (J)"}]},
{section:"Pressure",name:"Pressure exerted on container walls<br><img src='images/ch1-l1-eq2.png' style='width:100%; border-radius:8px; margin-top:10px;'>",formula:"\\( P = \\frac{F}{A}, F = \\frac{\\Delta p}{\\Delta t}, \\Delta p = N m_0 \\Delta v \\)",symbols:[{symbol:"P",desc:"Pressure (Pa)"},{symbol:"F",desc:"Force (N)"},{symbol:"A",desc:"Area (m²)"},{symbol:"\\Delta p",desc:"Change in momentum (kg·m/s)"},{symbol:"\\Delta t",desc:"Time interval (s)"},{symbol:"N",desc:"Number of molecules (No unit)"},{symbol:"m_0",desc:"Mass of one molecule (kg)"},{symbol:"\\Delta v",desc:"Change in velocity (m/s)"}]},
{section:"Pressure",name:"Elastic collision<br><img src='images/ch1-l1-eq3.png' style='width:100%; border-radius:8px; margin-top:10px;'>",formula:"\\( P = \\frac{2 N m_0 v}{A \\Delta t} \\)",symbols:[{symbol:"P",desc:"Pressure (Pa)"},{symbol:"N",desc:"Number of molecules (No unit)"},{symbol:"m_0",desc:"Mass of one molecule (kg)"},{symbol:"v",desc:"Velocity (m/s)"},{symbol:"A",desc:"Area (m²)"},{symbol:"\\Delta t",desc:"Time interval (s)"}]},
{section:"Pressure",name:"Inelastic collision<br><img src='images/ch1-l1-eq4.png' style='width:100%; border-radius:8px; margin-top:10px;'>",formula:"\\( P = \\frac{N m_0 v}{A \\Delta t} \\)",symbols:[{symbol:"P",desc:"Pressure (Pa)"},{symbol:"N",desc:"Number of molecules (No unit)"},{symbol:"m_0",desc:"Mass of one molecule (kg)"},{symbol:"v",desc:"Velocity (m/s)"},{symbol:"A",desc:"Area (m²)"},{symbol:"\\Delta t",desc:"Time interval (s)"}]},
{section:"Ideal Gas Laws",name:"Ideal Gases equation<br><img src='images/ch1-l1-eq5.png' style='width:100%; border-radius:8px; margin-top:10px;'>",formula:"\\( PV = nRT, PV = N k_B T \\)",symbols:[{symbol:"P",desc:"Pressure (Pa)"},{symbol:"V",desc:"Volume (m³)"},{symbol:"n",desc:"Number of moles (mol)"},{symbol:"R",desc:"Universal Gas Constant (8.31 J/mol·K)"},{symbol:"T",desc:"Temperature (K)"},{symbol:"N",desc:"Number of molecules (No unit)"},{symbol:"k_B",desc:"Boltzmann constant (1.38×10⁻²³ J/K)"}]},
{section:"Ideal Gas Laws",name:"Combined gas law<br><img src='images/ch1-l1-eq6.png' style='width:100%; border-radius:8px; margin-top:10px;'>",formula:"\\( \\frac{P_1 V_1}{T_1} = \\frac{P_2 V_2}{T_2} \\)",symbols:[{symbol:"P_1, P_2",desc:"Initial/Final Pressure (Pa)"},{symbol:"V_1, V_2",desc:"Initial/Final Volume (m³)"},{symbol:"T_1, T_2",desc:"Initial/Final Temperature (K)"}]},
{section:"Ideal Gas Laws",name:"Isobaric process<br><img src='images/ch1-l1-eq7.png' style='width:100%; border-radius:8px; margin-top:10px;'>",formula:"\\( \\frac{V_1}{T_1} = \\frac{V_2}{T_2} \\)",symbols:[{symbol:"V_1, V_2",desc:"Initial/Final Volume (m³)"},{symbol:"T_1, T_2",desc:"Initial/Final Temperature (K)"}]},
{section:"Ideal Gas Laws",name:"Isochoric process<br><img src='images/ch1-l1-eq8.png' style='width:100%; border-radius:8px; margin-top:10px;'>",formula:"\\( \\frac{P_1}{T_1} = \\frac{P_2}{T_2} \\)",symbols:[{symbol:"P_1, P_2",desc:"Initial/Final Pressure (Pa)"},{symbol:"T_1, T_2",desc:"Initial/Final Temperature (K)"}]},
{section:"Ideal Gas Laws",name:"Isothermal process<br><img src='images/ch1-l1-eq9.png' style='width:100%; border-radius:8px; margin-top:10px;'>",formula:"\\( P_1 V_1 = P_2 V_2 \\)",symbols:[{symbol:"P_1, P_2",desc:"Initial/Final Pressure (Pa)"},{symbol:"V_1, V_2",desc:"Initial/Final Volume (m³)"}]},
{section:"Kinetic Energy & Speed",name:"Average kinetic Energy<br><img src='images/ch1-l1-eq10.png' style='width:100%; border-radius:8px; margin-top:10px;'>",formula:"\\( K_{av} = \\frac{1}{2}m_0(v^2)_{av} = \\frac{3}{2} \\frac{PV}{N} = \\frac{3}{2} k_B T \\)",symbols:[{symbol:"K_{av}",desc:"Average Kinetic Energy (J)"},{symbol:"m_0",desc:"Mass of one molecule (kg)"},{symbol:"(v^2)_{av}",desc:"Average of velocity squared (m²/s²)"},{symbol:"P",desc:"Pressure (Pa)"},{symbol:"V",desc:"Volume (m³)"},{symbol:"N",desc:"Number of molecules (No unit)"},{symbol:"k_B",desc:"Boltzmann constant (1.38×10⁻²³ J/K)"},{symbol:"T",desc:"Temperature (K)"}]},
{section:"Kinetic Energy & Speed",name:"Total average kinetic Energy<br><img src='images/ch1-l1-eq11.png' style='width:100%; border-radius:8px; margin-top:10px;'>",formula:"\\[ \\begin{aligned} K &= N K_{av} = \\frac{3}{2} N k_B T \\\\ &= \\frac{3}{2} nRT = \\frac{3}{2} PV \\end{aligned} \\]",symbols:[{symbol:"K",desc:"Total Kinetic Energy (J)"},{symbol:"N",desc:"Number of molecules (No unit)"},{symbol:"K_{av}",desc:"Average Kinetic Energy (J)"},{symbol:"k_B",desc:"Boltzmann constant (1.38×10⁻²³ J/K)"},{symbol:"T",desc:"Temperature (K)"},{symbol:"n",desc:"Number of moles (mol)"},{symbol:"R",desc:"Universal Gas Constant (8.31 J/mol·K)"},{symbol:"P",desc:"Pressure (Pa)"},{symbol:"V",desc:"Volume (m³)"}]},
{section:"Kinetic Energy & Speed",name:"Root-mean-square speed<br><img src='images/ch1-l1-eq12.png' style='width:100%; border-radius:8px; margin-top:10px;'>",formula:"\\[ \\begin{aligned} v_{rms} &= \\sqrt{(v^2)_{av}} = \\sqrt{\\frac{3 k_B T}{m_0}} \\\\ &= \\sqrt{\\frac{3RT}{M}} = \\sqrt{\\frac{3P}{\\rho}} \\end{aligned} \\]",symbols:[{symbol:"v_{rms}",desc:"Root-mean-square speed (m/s)"},{symbol:"(v^2)_{av}",desc:"Average of velocity squared (m²/s²)"},{symbol:"k_B",desc:"Boltzmann constant (1.38×10⁻²³ J/K)"},{symbol:"T",desc:"Temperature (K)"},{symbol:"m_0",desc:"Mass of one molecule (kg)"},{symbol:"R",desc:"Universal Gas Constant (8.31 J/mol·K)"},{symbol:"M",desc:"Molar Mass (kg/mol)"},{symbol:"P",desc:"Pressure (Pa)"},{symbol:"\\rho",desc:"Density (kg/m³)"}]},
{section:"Fundamental Relations",name:"Number of moles<br><img src='images/ch1-l1-eq13.png' style='width:100%; border-radius:8px; margin-top:10px;'>",formula:"\\( n = \\frac{m}{M} = \\frac{N}{N_A} \\)",symbols:[{symbol:"n",desc:"Number of moles (mol)"},{symbol:"m",desc:"Total mass (kg)"},{symbol:"M",desc:"Molar Mass (kg/mol)"},{symbol:"N",desc:"Number of molecules (No unit)"},{symbol:"N_A",desc:"Avogadro's Number (6.02×10²³ mol⁻¹)"}]},
{section:"Fundamental Relations",name:"Object’s mass<br><img src='images/ch1-l1-eq14.png' style='width:100%; border-radius:8px; margin-top:10px;'>",formula:"\\( m = n M = m_0 N \\)",symbols:[{symbol:"m",desc:"Total mass (kg)"},{symbol:"n",desc:"Number of moles (mol)"},{symbol:"M",desc:"Molar Mass (kg/mol)"},{symbol:"m_0",desc:"Mass of one molecule (kg)"},{symbol:"N",desc:"Number of molecules (No unit)"}]},
{section:"Fundamental Relations",name:"Molar Mass<br><img src='images/ch1-l1-eq15.png' style='width:100%; border-radius:8px; margin-top:10px;'>",formula:"\\( M = m_0 N_A = \\frac{m}{n} \\)",symbols:[{symbol:"M",desc:"Molar Mass (kg/mol)"},{symbol:"m_0",desc:"Mass of one molecule (kg)"},{symbol:"N_A",desc:"Avogadro's Number (6.02×10²³ mol⁻¹)"},{symbol:"m",desc:"Total mass (kg)"},{symbol:"n",desc:"Number of moles (mol)"}]},
{section:"Fundamental Relations",name:"Mass molecules<br><img src='images/ch1-l1-eq16.png' style='width:100%; border-radius:8px; margin-top:10px;'>",formula:"\\( m_0 = \\frac{M}{N_A} = \\frac{m}{N} \\)",symbols:[{symbol:"m_0",desc:"Mass of one molecule (kg)"},{symbol:"M",desc:"Molar Mass (kg/mol)"},{symbol:"N_A",desc:"Avogadro's Number (6.02×10²³ mol⁻¹)"},{symbol:"m",desc:"Total mass (kg)"},{symbol:"N",desc:"Number of molecules (No unit)"}]},
{section:"Fundamental Relations",name:"Universal Gas constant<br><img src='images/ch1-l1-eq17.png' style='width:100%; border-radius:8px; margin-top:10px;'>",formula:"\\( R = K_B N_A = 8.31 \\text{ J/mol.K} \\)",symbols:[{symbol:"R",desc:"Universal Gas Constant (8.31 J/mol·K)"},{symbol:"K_B",desc:"Boltzmann constant (1.38×10⁻²³ J/K)"},{symbol:"N_A",desc:"Avogadro's Number (6.02×10²³ mol⁻¹)"}]}
],flashcards:[
{front:"What is the formula for Pressure in Kinetic Theory?", back:"\\( P = \\left(\\frac{2}{3}\\right)\\left(\\frac{N}{V}\\right)K_{av} \\)"},
{front:"What is the pressure formula for elastic collisions?", back:"\\( P = \\frac{2 N m_0 v}{A \\Delta t} \\)"},
{front:"What is the pressure formula for inelastic collisions?", back:"\\( P = \\frac{N m_0 v}{A \\Delta t} \\)"},
{front:"What is the Ideal Gases equation?", back:"\\( PV = nRT \\) or \\( PV = N k_B T \\)"},
{front:"What is the Combined Gas Law?", back:"\\( \\frac{P_1 V_1}{T_1} = \\frac{P_2 V_2}{T_2} \\)"},
{front:"What is the relationship in an isobaric process?", back:"\\( \\frac{V_1}{T_1} = \\frac{V_2}{T_2} \\)"},
{front:"What is the relationship in an isochoric process?", back:"\\( \\frac{P_1}{T_1} = \\frac{P_2}{T_2} \\)"},
{front:"What is the relationship in an isothermal process?", back:"\\( P_1 V_1 = P_2 V_2 \\)"},
{front:"What is the formula for root-mean-square speed?", back:"\\( v_{rms} = \\sqrt{\\frac{3RT}{M}} = \\sqrt{\\frac{3 k_B T}{m_0}} \\)"},
{front:"What is the average kinetic energy of a molecule?", back:"\\( K_{av} = \\frac{3}{2} k_B T \\)"}
],quiz:[
{question:"Which formula correctly represents the Root-mean-square speed?", options:["\\( v_{rms} = \\sqrt{\\frac{3 k_B T}{m_0}} \\)","\\( v_{rms} = \\frac{3 k_B T}{m_0} \\)","\\( v_{rms} = \\sqrt{\\frac{2 k_B T}{m_0}} \\)","\\( v_{rms} = \\frac{3RT}{M^2} \\)"], correctIndex:0, feedback:"Root-mean-square speed depends on temperature and mass: \\( \\sqrt{3 k_B T / m_0} \\)."},
{question:"In an isochoric process, which variable is held constant?", options:["Pressure","Temperature","Volume","Internal Energy"], correctIndex:2, feedback:"Isochoric means constant volume, so \\( P_1 / T_1 = P_2 / T_2 \\)."},
{question:"In an isobaric process, which variable is held constant?", options:["Pressure","Temperature","Volume","Density"], correctIndex:0, feedback:"Isobaric refers to a process that happens at constant pressure."},
{question:"In an isothermal process, which of the following remains constant?", options:["Pressure","Temperature","Volume","Heat"], correctIndex:1, feedback:"Isothermal means the temperature remains constant, giving \\( P_1 V_1 = P_2 V_2 \\)."},
{question:"What is the standard value of the Universal Gas Constant \\( R \\)?", options:["\\( 1.38 \\times 10^{-23} \\)","8.31 J/mol·K","6.02 \\( \\times 10^{23} \\)","\\( 4\\pi \\times 10^{-7} \\)"], correctIndex:1, feedback:"\\( R = 8.31 \\text{ J/mol.K} \\)."},
{question:"The total mass of a gas \\( m \\) is related to the number of moles \\( n \\) and molar mass \\( M \\) by:", options:["\\( m = n/M \\)","\\( m = n + M \\)","\\( m = nM \\)","\\( m = M/n \\)"], correctIndex:2, feedback:"Total mass is moles multiplied by molar mass: \\( m = nM \\)."},
{question:"The average kinetic energy of an ideal gas molecule is directly proportional to:", options:["Pressure","Volume","Temperature","Number of moles"], correctIndex:2, feedback:"\\( K_{av} = \\frac{3}{2} k_B T \\), so it depends solely on absolute temperature."},
{question:"During elastic collisions with a container wall, the momentum change for a single particle bouncing directly back is:", options:["\\( 0 \\)","\\( m_0 v \\)","\\( 2 m_0 v \\)","\\( \\frac{1}{2} m_0 v^2 \\)"], correctIndex:2, feedback:"It rebounds with same speed, so change is \\( v - (-v) = 2v \\). Momentum change is \\( 2m_0 v \\)."},
{question:"Which equation represents the Combined Gas Law?", options:["\\( PV = nRT \\)","\\( \\frac{P_1 V_1}{T_1} = \\frac{P_2 V_2}{T_2} \\)","\\( P_1 T_1 = P_2 T_2 \\)","\\( V_1 / P_1 = V_2 / P_2 \\)"], correctIndex:1, feedback:"The Combined Gas Law is \\( \\frac{P_1 V_1}{T_1} = \\frac{P_2 V_2}{T_2} \\)."},
{question:"Total kinetic energy \\( K \\) of \\( N \\) molecules is given by:", options:["\\( \\frac{3}{2} N k_B T \\)","\\( \\frac{1}{2} N k_B T \\)","\\( N m_0 v^2 \\)","\\( P V^2 \\)"], correctIndex:0, feedback:"Total kinetic energy is the average energy per molecule multiplied by \\( N \\): \\( \\frac{3}{2} N k_B T \\)."}
]},
{id:"g12-l2",gifUrl:"https://commons.wikimedia.org/wiki/Special:FilePath/Boyles_Law_animated.gif",worksheetUrl:"worksheets/ch1-l2-worksheet.pdf",games:[{topic:"First Law of Thermodynamics",url:"https://gemini.google.com/share/9e34579d87cd"}],title:"Chapter 1 Lesson 2: First Law of Thermodynamics",concepts:["First Law of Thermodynamics: Conservation of energy in thermodynamic systems, \\( Q = W + \\Delta U \\).","Internal Energy (\\( U \\)): Depends solely on temperature for an ideal gas, \\( \\Delta U = \\frac{3}{2}nR\\Delta T \\).","Thermodynamic Work (\\( W \\)): Work done by expanding gas against external pressure, \\( W = P\\Delta V \\) (isobaric).","Special Processes: Isobaric (constant \\( P \\)), Isochoric (constant \\( V, W = 0 \\)), Isothermal (constant \\( T, \\Delta U = 0 \\)), and Adiabatic (\\( Q = 0 \\))."],definitions:[
{term:"First Law of Thermodynamics",definition:"The principle of conservation of energy applied to thermodynamic systems, stating that the heat added to a system equals the work done by the system plus the increase in its internal energy.",symbol:"Q = W + \\Delta U",unit:"\\mathrm{J}",equation:"Q = W + \\Delta U"},
{term:"Internal Energy",definition:"The total microscopic kinetic and potential energy associated with the random thermal motions and bonds of all molecules within the system.",symbol:"U",unit:"\\mathrm{J}",equation:"U = \\frac{3}{2}nRT \\quad (\\text{monatomic ideal gas})"},
{term:"Change in Internal Energy",definition:"The net increase or decrease of the system's thermal energy store between initial and final thermodynamic states, depending solely on temperature change.",symbol:"\\Delta U",unit:"\\mathrm{J}",equation:"\\Delta U = U_f - U_i = \\frac{3}{2}nR\\Delta T"},
{term:"Thermodynamic Work",definition:"The mechanical energy transferred across system boundaries when gas volume expands against external pressure (\\(W > 0\\)) or is compressed (\\(W < 0\\)).",symbol:"W",unit:"\\mathrm{J}",equation:"W = \\int P\\,dV = P\\Delta V \\quad (\\text{isobaric})"},
{term:"Sensible Heat",definition:"Thermal energy absorbed or released by a substance that causes an observable change in temperature without changing its physical phase.",symbol:"Q",unit:"\\mathrm{J}",equation:"Q = mc\\Delta T"},
{term:"Latent Heat",definition:"The heat energy absorbed or released per unit mass of a substance during an isothermal phase transition (e.g., fusion or vaporization).",symbol:"L",unit:"\\mathrm{J/kg}",equation:"Q = mL"},
{term:"Molar Heat Capacity at Constant Volume",definition:"The quantity of heat energy required to raise the temperature of one mole of gas by 1 Kelvin while keeping container volume fixed.",symbol:"C_v",unit:"\\mathrm{J/(mol\\cdot K)}",equation:"C_v = \\frac{3}{2}R, \\quad Q_v = n C_v \\Delta T = \\frac{3}{2}nR\\Delta T"},
{term:"Molar Heat Capacity at Constant Pressure",definition:"The heat energy required to raise the temperature of one mole of gas by 1 Kelvin while allowing it to expand freely under constant pressure.",symbol:"C_p",unit:"\\mathrm{J/(mol\\cdot K)}",equation:"C_p = C_v + R = \\frac{5}{2}R, \\quad Q_p = n C_p \\Delta T = \\frac{5}{2}nR\\Delta T"},
{term:"Adiabatic Index (Gamma)",definition:"The dimensionless ratio of specific heat capacities \\(\\gamma = C_p / C_v\\), governing pressure-volume curves during thermally insulated processes.",symbol:"\\gamma",unit:"\\text{No unit}",equation:"\\gamma = \\frac{C_p}{C_v} = \\frac{5}{3} \\approx 1.67 \\;(\\text{monatomic}), \\; \\frac{7}{5} = 1.40 \\;(\\text{diatomic})"},
{term:"Linear P-V Process",definition:"A thermodynamic process where pressure varies linearly with volume, whose mechanical work equals the area of a trapezoid on a P-V diagram.",symbol:"W_{\\text{linear}}",unit:"\\mathrm{J}",equation:"W = P_{av}\\Delta V = \\frac{P_1 + P_2}{2}(V_2 - V_1)"},
{term:"Isothermal Expansion",definition:"A slow thermodynamic expansion occurring at constant temperature (\\(\\Delta U = 0\\)), where all absorbed heat is converted directly into expansion work.",symbol:"T = \\text{const}",unit:"\\text{No unit}",equation:"Q = W = nRT\\ln\\left(\\frac{V_2}{V_1}\\right), \\quad \\Delta U = 0"},
{term:"Adiabatic Process",definition:"A process that occurs without any heat exchange between the system and its surroundings (\\(Q = 0\\)), so expansion work is done entirely at the expense of internal energy.",symbol:"Q = 0",unit:"\\text{No unit}",equation:"W = -\\Delta U = \\frac{P_1 V_1 - P_2 V_2}{\\gamma - 1}, \\quad P_1 V_1^\\gamma = P_2 V_2^\\gamma"}
],
examples:[
{title:"First Law of Thermodynamics Energy Balance",given:"A gas system absorbs \\( Q = 800\\,\\mathrm{J} \\) of thermal heat from a burner while expanding and performing \\( W = 350\\,\\mathrm{J} \\) of work on a piston.",find:"Change in internal energy (\\( \\Delta U \\)).",equation:"Q = W + \\Delta U \\implies \\Delta U = Q - W",solution:"Subtract work from heat supplied:<br>\\( \\Delta U = 800\\,\\mathrm{J} - 350\\,\\mathrm{J} = 450\\,\\mathrm{J} \\).",finalAnswer:"\\Delta U = +450\\,\\mathrm{J}",explanation:"Because the heat added exceeds the mechanical work done on the environment, the surplus 450 J increases the internal energy and temperature of the gas."},
{title:"Phase Change Using Latent Heat",given:"Mass of ice \\( m = 0.40\\,\\mathrm{kg} \\) at \\( 0^\\circ\\mathrm{C} \\), Specific latent heat of fusion of water \\( L_f = 3.34\\times 10^5\\,\\mathrm{J/kg} \\).",find:"Heat required to completely melt the ice into liquid water (\\( Q \\)).",equation:"Q = mL",solution:"Multiply mass by latent heat of fusion:<br>\\( Q = 0.40\\,\\mathrm{kg} \\times (3.34\\times 10^5\\,\\mathrm{J/kg}) = 133{,}600\\,\\mathrm{J} = 133.6\\,\\mathrm{kJ} \\).",finalAnswer:"Q = 1.34\\times 10^5\\,\\mathrm{J} \\; (133.6\\,\\mathrm{kJ})",explanation:"During a phase change, heat is absorbed to break intermolecular bonds without altering temperature."},
{title:"Change in Internal Energy of a Gas",given:"Number of moles \\( n = 1.5\\,\\mathrm{mol} \\) of Helium gas, Temperature increases by \\( \\Delta T = 60\\,\\mathrm{K} \\), \\( R = 8.31\\,\\mathrm{J/(mol\\cdot K)} \\).",find:"Change in internal energy (\\( \\Delta U \\)).",equation:"\\Delta U = \\frac{3}{2} nR\\Delta T",solution:"Substitute into the internal energy equation:<br>\\( \\Delta U = 1.5 \\times 1.5\\,\\mathrm{mol} \\times 8.31\\,\\mathrm{J/(mol\\cdot K)} \\times 60\\,\\mathrm{K} = 2.25 \\times 498.6 = 1121.85\\,\\mathrm{J} \\).",finalAnswer:"\\Delta U \\approx 1122\\,\\mathrm{J} \\; (1.12\\,\\mathrm{kJ})",explanation:"Internal energy change in an ideal monatomic gas depends strictly on temperature change, regardless of the pressure or volume paths taken."},
{title:"Work Done in an Isobaric Gas Expansion",given:"Gas expands under constant pressure \\( P = 2.0\\times 10^5\\,\\mathrm{Pa} \\) from \\( V_1 = 0.010\\,\\mathrm{m^3} \\) to \\( V_2 = 0.025\\,\\mathrm{m^3} \\).",find:"Work done by the expanding gas (\\( W \\)).",equation:"W = P\\Delta V = P(V_2 - V_1)",solution:"1. Volume change \\( \\Delta V = 0.025 - 0.010 = 0.015\\,\\mathrm{m^3} \\).<br>2. Work done:<br>\\( W = 2.0\\times 10^5\\,\\mathrm{Pa} \\times 0.015\\,\\mathrm{m^3} = 3000\\,\\mathrm{J} = 3.0\\,\\mathrm{kJ} \\).",finalAnswer:"W = 3000\\,\\mathrm{J} \\; (3.0\\,\\mathrm{kJ})",explanation:"When expanding at constant pressure, the gas pushes the piston outwards, doing positive work equal to the pressure times change in volume."},
{title:"Heat Supplied During Isobaric Heating",given:"\\( n = 2.0\\,\\mathrm{mol} \\) of monatomic gas is heated at constant pressure, warming by \\( \\Delta T = 40\\,\\mathrm{K} \\), \\( R = 8.31\\,\\mathrm{J/(mol\\cdot K)} \\).",find:"Total heat supplied (\\( Q_p \\)).",equation:"Q_p = \\frac{5}{2} nR\\Delta T",solution:"Substitute the values:<br>\\( Q_p = 2.5 \\times 2.0\\,\\mathrm{mol} \\times 8.31\\,\\mathrm{J/(mol\\cdot K)} \\times 40\\,\\mathrm{K} = 5.0 \\times 332.4 = 1662\\,\\mathrm{J} \\).<br>(Note: \\( \\Delta U = \\frac{3}{2}nR\\Delta T = 997.2\\,\\mathrm{J} \\), \\( W = nR\\Delta T = 664.8\\,\\mathrm{J} \\), \\( Q_p = \\Delta U + W = 1662\\,\\mathrm{J} \\)).",finalAnswer:"Q_p = 1662\\,\\mathrm{J} \\; (1.66\\,\\mathrm{kJ})",explanation:"Under constant pressure, the gas must absorb enough heat to both increase internal energy (60%) and perform expansion work (40%)."},
{title:"Work and Heat in an Isochoric Process",given:"\\( n = 1.0\\,\\mathrm{mol} \\) of gas in a rigid steel container is heated, raising temperature by \\( \\Delta T = 50\\,\\mathrm{K} \\), \\( R = 8.31\\,\\mathrm{J/(mol\\cdot K)} \\).",find:"Work done (\\( W \\)) and Heat absorbed (\\( Q_v \\)).",equation:"W = 0, \\quad Q_v = \\frac{3}{2} nR\\Delta T",solution:"1. Because the container is rigid, volume is constant (\\( \\Delta V = 0 \\)), so \\( W = 0 \\).<br>2. Calculate heat absorbed:<br>\\( Q_v = 1.5 \\times 1.0\\,\\mathrm{mol} \\times 8.31\\,\\mathrm{J/(mol\\cdot K)} \\times 50\\,\\mathrm{K} = 623.25\\,\\mathrm{J} \\).",finalAnswer:"W = 0\\,\\mathrm{J}, \\quad Q_v = 623.25\\,\\mathrm{J}",explanation:"With no volume change, no boundary work is performed, so 100% of the supplied heat directly raises the gas's internal energy."},
{title:"Work Done in a Linear P-V Process",given:"Gas expands linearly from state 1 (\\( P_1 = 100\\,\\mathrm{kPa}, V_1 = 2.0\\times 10^{-3}\\,\\mathrm{m^3} \\)) to state 2 (\\( P_2 = 300\\,\\mathrm{kPa}, V_2 = 6.0\\times 10^{-3}\\,\\mathrm{m^3} \\)).",find:"Work done by the gas (\\( W \\)).",equation:"W = P_{av}\\Delta V = \\frac{P_1 + P_2}{2}(V_2 - V_1)",solution:"1. Average pressure: \\( P_{av} = \\frac{100\\,\\mathrm{kPa} + 300\\,\\mathrm{kPa}}{2} = 200\\,\\mathrm{kPa} = 2.0\\times 10^5\\,\\mathrm{Pa} \\).<br>2. Change in volume: \\( \\Delta V = (6.0 - 2.0)\\times 10^{-3} = 4.0\\times 10^{-3}\\,\\mathrm{m^3} \\).<br>3. Work: \\( W = 2.0\\times 10^5\\,\\mathrm{Pa} \\times 4.0\\times 10^{-3}\\,\\mathrm{m^3} = 800\\,\\mathrm{J} \\).",finalAnswer:"W = 800\\,\\mathrm{J}",explanation:"On a P-V diagram, the work done during a linear path equals the area of the trapezoid formed beneath the line."},
{title:"Work and Heat in an Isothermal Expansion",given:"\\( n = 2.0\\,\\mathrm{mol} \\) of ideal gas expands isothermally at \\( T = 300\\,\\mathrm{K} \\) from \\( V_1 = 0.010\\,\\mathrm{m^3} \\) to \\( V_2 = 0.030\\,\\mathrm{m^3} \\). (\\( \\ln(3) \\approx 1.0986 \\)).",find:"Work done (\\( W \\)), Heat added (\\( Q \\)), and Internal energy change (\\( \\Delta U \\)).",equation:"W = Q = nRT\\ln\\left(\\frac{V_2}{V_1}\\right), \\quad \\Delta U = 0",solution:"1. Since temperature is constant, \\( \\Delta U = 0 \\).<br>2. Compute work done:<br>\\( W = 2.0 \\times 8.31 \\times 300 \\times \\ln\\left(\\frac{0.030}{0.010}\\right) = 4986 \\times 1.0986 \\approx 5478\\,\\mathrm{J} \\).<br>3. By first law, \\( Q = W = 5478\\,\\mathrm{J} \\).",finalAnswer:"W = 5.48\\times 10^3\\,\\mathrm{J}, \\quad Q = 5.48\\times 10^3\\,\\mathrm{J}, \\quad \\Delta U = 0\\,\\mathrm{J}",explanation:"In an isothermal expansion, internal energy remains unchanged; all incoming heat is fully transformed into expansion work."},
{title:"Work Done by an Ideal Gas in an Adiabatic Expansion",given:"Monatomic gas (\\( \\gamma = 5/3 \\approx 1.67 \\)) expands adiabatically from \\( P_1 = 4.0\\times 10^5\\,\\mathrm{Pa}, V_1 = 0.002\\,\\mathrm{m^3} \\) to \\( P_2 = 1.0\\times 10^5\\,\\mathrm{Pa}, V_2 = 0.005\\,\\mathrm{m^3} \\).",find:"Work done by the gas (\\( W \\)).",equation:"W = \\frac{P_1 V_1 - P_2 V_2}{\\gamma - 1}",solution:"1. \\( P_1 V_1 = (4.0\\times 10^5) \\times 0.002 = 800\\,\\mathrm{J} \\).<br>2. \\( P_2 V_2 = (1.0\\times 10^5) \\times 0.005 = 500\\,\\mathrm{J} \\).<br>3. Compute work:<br>\\( W = \\frac{800 - 500}{1.667 - 1} = \\frac{300}{2/3} = 300 \\times 1.5 = 450\\,\\mathrm{J} \\).",finalAnswer:"W = 450\\,\\mathrm{J}",explanation:"In an adiabatic expansion (no heat entry, \\( Q = 0 \\)), the gas performs 450 J of work entirely by draining its own internal energy, cooling down."},
{title:"Adiabatic Pressure-Volume State Relation",given:"Air in a bicycle pump (diatomic, \\( \\gamma = 1.40 \\)) at initial pressure \\( P_1 = 100\\,\\mathrm{kPa} \\) and volume \\( V_1 = 500\\,\\mathrm{cm^3} \\) is compressed rapidly to \\( V_2 = 100\\,\\mathrm{cm^3} \\) (ratio \\( V_1/V_2 = 5.0 \\)).",find:"Final pressure (\\( P_2 \\)) assuming adiabatic compression.",equation:"P_1 V_1^\\gamma = P_2 V_2^\\gamma \\implies P_2 = P_1 \\left(\\frac{V_1}{V_2}\\right)^\\gamma",solution:"Substitute the compression ratio:<br>\\( P_2 = 100\\,\\mathrm{kPa} \\times (5.0)^{1.40} \\approx 100 \\times 9.518 \\approx 952\\,\\mathrm{kPa} \\).",finalAnswer:"P_2 \\approx 952\\,\\mathrm{kPa} \\; (9.52\\,\\text{atm})",explanation:"Because heat cannot escape during rapid compression, temperature and pressure spike much higher than in an isothermal compression."}
],
equations:[
{section:"Heat Transfer",name:"First law of thermodynamics<br><img src='images/ch1-l2-eq7.png' style='width:100%; border-radius:8px; margin-top:10px;'>",formula:"\\( Q = W + \\Delta U \\)",symbols:[{symbol:"Q",desc:"Heat added to system (J)"},{symbol:"W",desc:"Work done by system (J)"},{symbol:"\\Delta U",desc:"Change in Internal Energy (J)"}]},
{section:"Heat Transfer",name:"Heat absorb<br><img src='images/ch1-l2-eq8.png' style='width:100%; border-radius:8px; margin-top:10px;'>",formula:"\\( Q = mc\\Delta T \\)",symbols:[{symbol:"Q",desc:"Heat transferred (J)"},{symbol:"m",desc:"Mass (kg)"},{symbol:"c",desc:"Specific heat capacity (J/kg·K)"},{symbol:"\\Delta T",desc:"Change in Temperature (K)"}]},
{section:"Heat Transfer",name:"Latent Heat<br><img src='images/ch1-l2-eq9.png' style='width:100%; border-radius:8px; margin-top:10px;'>",formula:"\\( Q = mL \\)",symbols:[{symbol:"Q",desc:"Heat transferred (J)"},{symbol:"m",desc:"Mass (kg)"},{symbol:"L",desc:"Specific latent heat (J/kg)"}]},
{section:"Internal Energy",name:"Internal energy<br><img src='images/ch1-l2-eq5.png' style='width:100%; border-radius:8px; margin-top:10px;'>",formula:"\\( U = \\frac{3}{2} nRT \\)",symbols:[{symbol:"U",desc:"Internal Energy (J)"},{symbol:"n",desc:"Number of moles (mol)"},{symbol:"R",desc:"Universal Gas Constant (8.31 J/mol·K)"},{symbol:"T",desc:"Temperature (K)"}]},
{section:"Internal Energy",name:"Changing internal energy<br><img src='images/ch1-l2-eq6.png' style='width:100%; border-radius:8px; margin-top:10px;'>",formula:"\\( \\Delta U = U_f - U_i = \\frac{3}{2} nR\\Delta T \\)",symbols:[{symbol:"\\Delta U",desc:"Change in Internal Energy (J)"},{symbol:"U_f, U_i",desc:"Final/Initial Internal Energy (J)"},{symbol:"n",desc:"Number of moles (mol)"},{symbol:"R",desc:"Universal Gas Constant (8.31 J/mol·K)"},{symbol:"\\Delta T",desc:"Change in Temperature (K)"}]},
{section:"Isobaric Process",name:"Work Done<br><img src='images/ch1-l2-eq1.png' style='width:100%; border-radius:8px; margin-top:10px;'>",formula:"\\( W = P \\Delta V \\)",symbols:[{symbol:"W",desc:"Work Done (J)"},{symbol:"P",desc:"Pressure (Pa)"},{symbol:"\\Delta V",desc:"Change in Volume (m³)"}]},
{section:"Isobaric Process",name:"Heat Supplied<br><img src='images/ch1-l2-eq11.png' style='width:100%; border-radius:8px; margin-top:10px;'>",formula:"\\( Q_p = nC_p\\Delta T = \\frac{5}{2} nR\\Delta T \\)",symbols:[{symbol:"Q_p",desc:"Heat Supplied at constant pressure (J)"},{symbol:"n",desc:"Number of moles (mol)"},{symbol:"C_p",desc:"Molar heat capacity at constant pressure (J/mol·K)"},{symbol:"\\Delta T",desc:"Change in Temperature (K)"},{symbol:"R",desc:"Universal Gas Constant (8.31 J/mol·K)"}]},
{section:"Isochoric Process",name:"Work Done<br><img src='images/ch1-l2-eq4.png' style='width:100%; border-radius:8px; margin-top:10px;'>",formula:"\\( W = 0 \\)",symbols:[{symbol:"W",desc:"Work Done (J)"}]},
{section:"Isochoric Process",name:"Heat Supplied<br><img src='images/ch1-l2-eq13.png' style='width:100%; border-radius:8px; margin-top:10px;'>",formula:"\\( Q_v = nC_v\\Delta T = \\frac{3}{2} nR\\Delta T \\)",symbols:[{symbol:"Q_v",desc:"Heat Supplied at constant volume (J)"},{symbol:"n",desc:"Number of moles (mol)"},{symbol:"C_v",desc:"Molar heat capacity at constant volume (J/mol·K)"},{symbol:"\\Delta T",desc:"Change in Temperature (K)"},{symbol:"R",desc:"Universal Gas Constant (8.31 J/mol·K)"}]},
{section:"Linear Process",name:"Work Done<br><img src='images/ch1-l2-eq2.png' style='width:100%; border-radius:8px; margin-top:10px;'>",formula:"\\( W = P_{av} \\Delta V \\)",symbols:[{symbol:"W",desc:"Work Done (J)"},{symbol:"P_{av}",desc:"Average Pressure (Pa)"},{symbol:"\\Delta V",desc:"Change in Volume (m³)"}]},
{section:"Linear Process",name:"Heat Supplied<br><img src='images/ch1-l2-eq14.png' style='width:100%; border-radius:8px; margin-top:10px;'>",formula:"\\( Q = \\frac{3}{2} nR\\Delta T + P_{av} \\Delta V \\)",symbols:[{symbol:"Q",desc:"Total Heat Supplied (J)"},{symbol:"n",desc:"Number of moles (mol)"},{symbol:"R",desc:"Universal Gas Constant (8.31 J/mol·K)"},{symbol:"\\Delta T",desc:"Change in Temperature (K)"},{symbol:"P_{av}",desc:"Average Pressure (Pa)"},{symbol:"\\Delta V",desc:"Change in Volume (m³)"}]},
{section:"Isothermal Process",name:"Work Done and Heat Supplied<br><img src='images/ch1-l2-eq3.png' style='width:100%; border-radius:8px; margin-top:10px;'>",formula:"\\( Q = W = nRT \\ln\\left(\\frac{V_2}{V_1}\\right) \\)",symbols:[{symbol:"Q",desc:"Heat Supplied (J)"},{symbol:"W",desc:"Work Done (J)"},{symbol:"n",desc:"Number of moles (mol)"},{symbol:"R",desc:"Universal Gas Constant (8.31 J/mol·K)"},{symbol:"T",desc:"Constant Temperature (K)"},{symbol:"V_2, V_1",desc:"Final/Initial Volume (m³)"}]},
{section:"Adiabatic Process",name:"Work done by an ideal gas<br><img src='images/ch1-l2-eq10.png' style='width:100%; border-radius:8px; margin-top:10px;'>",formula:"\\( W = n\\left(\\frac{R}{\\gamma - 1}\\right)(T_1 - T_2) = \\frac{1}{\\gamma - 1}(P_1V_1 - P_2V_2) \\)",symbols:[{symbol:"W",desc:"Work Done (J)"},{symbol:"n",desc:"Number of moles (mol)"},{symbol:"R",desc:"Universal Gas Constant (8.31 J/mol·K)"},{symbol:"\\gamma",desc:"Heat capacity ratio (Cp/Cv)"},{symbol:"T_1, T_2",desc:"Initial/Final Temperature (K)"},{symbol:"P_1, P_2",desc:"Initial/Final Pressure (Pa)"},{symbol:"V_1, V_2",desc:"Initial/Final Volume (m³)"}]},
{section:"Adiabatic Process",name:"Adiabatic Process Relations (Q = 0)<br><img src='images/ch1-l2-eq12.png' style='width:100%; border-radius:8px; margin-top:10px;'>",formula:"\\( P_1 V_1^\\gamma = P_2 V_2^\\gamma, \\quad T_1 V_1^{\\gamma-1} = T_2 V_2^{\\gamma-1}, \\quad T_1^\\gamma P_1^{1-\\gamma} = T_2^\\gamma P_2^{1-\\gamma} \\)",symbols:[{symbol:"P_1, P_2",desc:"Initial/Final Pressure (Pa)"},{symbol:"V_1, V_2",desc:"Initial/Final Volume (m³)"},{symbol:"T_1, T_2",desc:"Initial/Final Temperature (K)"},{symbol:"\\gamma",desc:"5/3 (monatomic) | 7/5 (diatomic)"}]}

],flashcards:[
{front:"What is the work done in an isobaric process?", back:"\\( W = P \\Delta V \\)"},
{front:"What is the work done in a process where pressure changes linearly?", back:"\\( W = P_{av} \\Delta V \\)"},
{front:"What is the work done in an isothermal process?", back:"\\( W = nRT \\ln\\left(\\frac{V_f}{V_i}\\right) \\)"},
{front:"What is the work done in an isochoric process?", back:"\\( W = 0 \\)"},
{front:"What is the formula for the internal energy of an ideal gas?", back:"\\( U = \\frac{3}{2} nRT \\)"},
{front:"What is the formula for the change in internal energy?", back:"\\( \\Delta U = \\frac{3}{2} nR\\Delta T \\)"},
{front:"What is the First Law of Thermodynamics?", back:"\\( Q = W + \\Delta U \\)"},
{front:"What is the formula for heat absorbed with a temperature change?", back:"\\( Q = mc\\Delta T \\)"},
{front:"What is the formula for latent heat during a phase change?", back:"\\( Q = mL \\)"},
{front:"Does the internal energy of an ideal gas depend on its volume?", back:"No, it depends solely on its absolute temperature \\( T \\)."}
],quiz:[
{question:"How is the work done in an isobaric process calculated?", options:["\\( W = 0 \\)","\\( W = P \\Delta V \\)","\\( W = nRT \\ln(V_f / V_i) \\)","\\( W = P_{av} \\Delta V \\)"], correctIndex:1, feedback:"Isobaric means constant pressure, so \\( W = P \\Delta V \\)."},
{question:"What is the change in internal energy (\\(\\Delta U\\)) for an ideal gas?", options:["\\( \\Delta U = \\frac{3}{2} nR\\Delta T \\)","\\( \\Delta U = Q - W \\)","Both A and B","None of the above"], correctIndex:2, feedback:"It can be calculated from temperature change or from the first law of thermodynamics."},
{question:"In an isochoric process, what is the work done?", options:["\\( P \\Delta V \\)","\\( nRT \\ln(V_f/V_i) \\)","\\( 0 \\)","Depends on temperature"], correctIndex:2, feedback:"Volume does not change (\\(\\Delta V = 0\\)), so \\( W = 0 \\)."},
{question:"According to the First Law of Thermodynamics, heat added to a system equals:", options:["Work done minus internal energy change","Work done plus change in internal energy","Just the work done","Zero"], correctIndex:1, feedback:"\\( Q = W + \\Delta U \\)."},
{question:"Which formula represents work done in an isothermal process?", options:["\\( W = P \\Delta V \\)","\\( W = nRT \\ln(V_f/V_i) \\)","\\( W = P_{av} \\Delta V \\)","\\( W = 0 \\)"], correctIndex:1, feedback:"Because temperature is constant, pressure changes as volume changes, yielding a logarithmic relation."},
{question:"Heat required for a phase change (like melting) is given by:", options:["\\( Q = mc\\Delta T \\)","\\( Q = mL \\)","\\( Q = W \\)","\\( Q = \\Delta U \\)"], correctIndex:1, feedback:"\\( L \\) is the specific latent heat of the substance."},
{question:"What does the \\( c \\) represent in \\( Q = mc\\Delta T \\)?", options:["Speed of light","Capacitance","Specific heat capacity","Constant"], correctIndex:2, feedback:"\\( c \\) stands for specific heat capacity."},
{question:"In a process where volume decreases, the work done by the gas is:", options:["Positive","Negative","Zero","Infinite"], correctIndex:1, feedback:"If \\( \\Delta V \\) is negative, the gas is compressed, so work done by the gas is negative."},
{question:"The internal energy \\( U \\) of an ideal gas is directly proportional to:", options:["Pressure","Volume","Temperature","Density"], correctIndex:2, feedback:"\\( U = \\frac{3}{2} nRT \\), making it directly proportional to absolute temperature."},
{question:"If a gas expands such that its pressure changes linearly with volume, the work done is:", options:["\\( W = 0 \\)","\\( W = P \\Delta V \\)","\\( W = P_{av} \\Delta V \\)","\\( W = nRT \\)"], correctIndex:2, feedback:"You can use the average pressure for a linear process: \\( W = P_{av} \\Delta V \\)."}
]},
{id:"g12-l3",gifUrl:"https://commons.wikimedia.org/wiki/Special:FilePath/Carnot_cycle.gif",worksheetUrl:"worksheets/ch1-l3-worksheet.pdf",games:[{topic:"Heat Engine",url:"https://gemini.google.com/share/a6cfadc258e4"}],title:"Chapter 1 Lesson 3: Heat Engine",concepts:["Heat Engine: Converts thermal energy absorbed from a hot reservoir into mechanical work, releasing waste heat to a cold reservoir.","Energy Conservation: Heat absorbed equals mechanical work plus rejected heat: \\( Q_h = W_M + Q_c \\).","Carnot Cycle: An idealized reversible cycle giving the maximum theoretical efficiency: \\( e_c = 1 - \\frac{T_c}{T_h} \\).","Overall Efficiency: Combines Carnot efficiency and mechanical efficiency: \\( e = e_c \\times e_M = \\frac{W_U}{Q_h} \\)."],definitions:[
{term:"Heat Engine",definition:"A thermodynamic system that operates continuously in a repeating thermodynamic cycle, absorbing heat from a high-temperature reservoir, converting part into mechanical work, and rejecting waste heat to a low-temperature sink.",symbol:"\\text{Engine}",unit:"\\text{No unit}",equation:"Q_h = W_M + Q_c"},
{term:"Hot Reservoir (Source)",definition:"A thermal energy reservoir at constant elevated temperature \\(T_h\\) from which the working substance extracts heat energy \\(Q_h\\).",symbol:"Q_h, T_h",unit:"\\mathrm{J}, \\; \\mathrm{K}",equation:"Q_h = W_M + Q_c"},
{term:"Cold Reservoir (Sink)",definition:"A low-temperature environment or coolant at temperature \\(T_c\\) that absorbs waste heat \\(Q_c\\) discharged by the engine.",symbol:"Q_c, T_c",unit:"\\mathrm{J}, \\; \\mathrm{K}",equation:"Q_c = Q_h - W_M"},
{term:"Mechanical Work of Engine",definition:"The net mechanical energy produced per operating cycle by the expansion of the working substance.",symbol:"W_M",unit:"\\mathrm{J}",equation:"W_M = Q_h - Q_c"},
{term:"Carnot Engine",definition:"An idealized, perfectly reversible thermodynamic heat engine operating on the Carnot cycle between two thermal reservoirs, representing the theoretical upper limit of efficiency.",symbol:"\\text{Carnot}",unit:"\\text{No unit}",equation:"\\frac{Q_c}{Q_h} = \\frac{T_c}{T_h}"},
{term:"Carnot Thermal Efficiency",definition:"The maximum possible theoretical efficiency of any heat engine operating between temperatures \\(T_h\\) and \\(T_c\\).",symbol:"e_c",unit:"\\text{No unit} \\;(\\text{or } \\%)",equation:"e_c = \\frac{W_M}{Q_h} = 1 - \\frac{Q_c}{Q_h} = 1 - \\frac{T_c}{T_h}"},
{term:"Mechanical Efficiency",definition:"The ratio of useful output shaft work delivered to machinery to the total indicated mechanical work generated in the cylinders, accounting for friction.",symbol:"e_M",unit:"\\text{No unit} \\;(\\text{or } \\%)",equation:"e_M = \\frac{W_U}{W_M}"},
{term:"Useful Work",definition:"The actual net mechanical work delivered at the engine shaft available to do external work after overcoming internal friction.",symbol:"W_U",unit:"\\mathrm{J}",equation:"W_U = e_M \\times W_M = e \\times Q_h"},
{term:"Overall Efficiency",definition:"The total fraction of heat energy absorbed from fuel that is successfully converted into useful external work.",symbol:"e",unit:"\\text{No unit} \\;(\\text{or } \\%)",equation:"e = e_c \\times e_M = \\frac{W_U}{Q_h}"}
],
examples:[
{title:"Energy Conservation in a Heat Engine Cycle",given:"An engine absorbs \\( Q_h = 2500\\,\\mathrm{J} \\) of heat from the combustion chamber and performs \\( W_M = 900\\,\\mathrm{J} \\) of mechanical work per cycle.",find:"Waste heat discharged to the cooling system (\\( Q_c \\)).",equation:"Q_h = W_M + Q_c \\implies Q_c = Q_h - W_M",solution:"Subtract work from input heat:<br>\\( Q_c = 2500\\,\\mathrm{J} - 900\\,\\mathrm{J} = 1600\\,\\mathrm{J} \\).",finalAnswer:"Q_c = 1600\\,\\mathrm{J}",explanation:"By the first law of thermodynamics, all thermal energy entering the cycle must either leave as useful mechanical work or be rejected as exhaust heat."},
{title:"Heat Rejection in a Reversible Carnot Engine",given:"A Carnot engine absorbs \\( Q_h = 6000\\,\\mathrm{J} \\) from a boiler at \\( T_h = 600\\,\\mathrm{K} \\) and discharges heat to a cooling river at \\( T_c = 300\\,\\mathrm{K} \\).",find:"Heat rejected to the river (\\( Q_c \\)) and Net work produced (\\( W_M \\)).",equation:"\\frac{Q_c}{Q_h} = \\frac{T_c}{T_h} \\implies Q_c = Q_h \\frac{T_c}{T_h}, \\quad W_M = Q_h - Q_c",solution:"1. Calculate rejected heat:<br>\\( Q_c = 6000\\,\\mathrm{J} \\times \\frac{300\\,\\mathrm{K}}{600\\,\\mathrm{K}} = 6000 \\times 0.5 = 3000\\,\\mathrm{J} \\).<br>2. Calculate mechanical work:<br>\\( W_M = 6000\\,\\mathrm{J} - 3000\\,\\mathrm{J} = 3000\\,\\mathrm{J} \\).",finalAnswer:"Q_c = 3000\\,\\mathrm{J}, \\quad W_M = 3000\\,\\mathrm{J}",explanation:"In a Carnot cycle, the ratio of heat exchanged is directly proportional to the absolute thermodynamic temperatures of the two reservoirs."},
{title:"Maximum Carnot Theoretical Efficiency",given:"Steam turbine inlet temperature \\( T_h = 527^\\circ\\mathrm{C} = 800\\,\\mathrm{K} \\), Condenser exhaust temperature \\( T_c = 27^\\circ\\mathrm{C} = 300\\,\\mathrm{K} \\).",find:"Carnot efficiency (\\( e_c \\)) as a decimal and percentage.",equation:"e_c = 1 - \\frac{T_c}{T_h}",solution:"Substitute the absolute Kelvin temperatures:<br>\\( e_c = 1 - \\frac{300\\,\\mathrm{K}}{800\\,\\mathrm{K}} = 1 - 0.375 = 0.625 \\).<br>In percentage: \\( e_c = 62.5\\% \\).",finalAnswer:"e_c = 0.625 \\; (62.5\\%)",explanation:"No real or theoretical engine operating between these two temperatures can exceed 62.5% thermal efficiency; 37.5% must inevitably be lost as waste heat."},
{title:"Overall Efficiency and Useful Shaft Work Output",given:"Carnot thermal efficiency \\( e_c = 0.60 \\; (60\\%) \\), Mechanical drivetrain efficiency \\( e_M = 0.85 \\; (85\\%) \\), Heat absorbed from fuel \\( Q_h = 40{,}000\\,\\mathrm{J} \\).",find:"Overall efficiency (\\( e \\)) and Useful output work (\\( W_U \\)).",equation:"e = e_c \\times e_M, \\quad W_U = e \\times Q_h",solution:"1. Overall efficiency:<br>\\( e = 0.60 \\times 0.85 = 0.51 \\; (51\\%) \\).<br>2. Useful mechanical work delivered:<br>\\( W_U = 0.51 \\times 40{,}000\\,\\mathrm{J} = 20{,}400\\,\\mathrm{J} = 20.4\\,\\mathrm{kJ} \\).",finalAnswer:"e = 0.51 \\; (51\\%), \\quad W_U = 20.4\\,\\mathrm{kJ}",explanation:"Overall efficiency multiplies thermodynamic thermal efficiency by mechanical transmission efficiency to reveal the net useful energy harvested from fuel."}
],
equations:[
{section:"Heat Engine",name:"Conservation of energy (Engine)<br><img src='images/ch1-l3-eq1.png' style='width:100%; border-radius:8px; margin-top:10px;'>",formula:"\\( Q_h = W_M + Q_c \\)",symbols:[{symbol:"Q_h",desc:"Heat from hot reservoir (J)"},{symbol:"W_M",desc:"Mechanical Work Done (J)"},{symbol:"Q_c",desc:"Heat rejected to cold reservoir (J)"}]},
{section:"Heat Engine",name:"Ratio<br><img src='images/ch1-l3-eq2.png' style='width:100%; border-radius:8px; margin-top:10px;'>",formula:"\\( \\frac{Q_c}{Q_h} = \\frac{T_c}{T_h} \\)",symbols:[{symbol:"Q_c",desc:"Heat rejected to cold reservoir (J)"},{symbol:"Q_h",desc:"Heat from hot reservoir (J)"},{symbol:"T_c",desc:"Cold reservoir temp (K)"},{symbol:"T_h",desc:"Hot reservoir temp (K)"}]},
{section:"Heat Engine",name:"Carnot efficiency<br><img src='images/ch1-l3-eq3.png' style='width:100%; border-radius:8px; margin-top:10px;'>",formula:"\\( e_c = \\frac{W_M}{Q_h} = 1 - \\frac{Q_c}{Q_h} = 1 - \\frac{T_c}{T_h} \\)",symbols:[{symbol:"e_c",desc:"Carnot/Ideal Efficiency (No unit)"},{symbol:"W_M",desc:"Mechanical Work Done (J)"},{symbol:"Q_h",desc:"Heat from hot reservoir (J)"},{symbol:"Q_c",desc:"Heat rejected to cold reservoir (J)"},{symbol:"T_c",desc:"Cold reservoir temp (K)"},{symbol:"T_h",desc:"Hot reservoir temp (K)"}]},
{section:"Heat Engine",name:"Overall efficiency<br><img src='images/ch1-l3-eq4.png' style='width:100%; border-radius:8px; margin-top:10px;'>",formula:"\\( e = e_c \\times e_M = \\frac{W_U}{Q_h} \\)",symbols:[{symbol:"e",desc:"Overall efficiency (No unit)"},{symbol:"e_c",desc:"Carnot/Ideal Efficiency (No unit)"},{symbol:"e_M",desc:"Mechanical efficiency (No unit)"},{symbol:"W_U",desc:"Useful Work (J)"},{symbol:"Q_h",desc:"Heat from hot reservoir (J)"}]}
],flashcards:[
{front:"What is the conservation of energy for a heat engine?", back:"\\( Q_h = W_M + Q_c \\)"},
{front:"In an ideal Carnot engine, what is the ratio of heat exchanged to temperature?", back:"\\( \\frac{Q_c}{Q_h} = \\frac{T_c}{T_h} \\)"},
{front:"What is the formula for Carnot (Ideal) efficiency?", back:"\\( e_c = 1 - \\frac{T_c}{T_h} \\)"},
{front:"What is the formula for overall efficiency using useful work?", back:"\\( e = \\frac{W_U}{Q_h} \\)"},
{front:"How is overall efficiency related to Carnot and mechanical efficiency?", back:"\\( e = e_c \\times e_M \\)"},
{front:"What does \\( Q_h \\) represent?", back:"Heat absorbed from the hot reservoir (J)"},
{front:"What does \\( Q_c \\) represent?", back:"Heat rejected or expelled to the cold reservoir (J)"},
{front:"What does \\( W_M \\) represent?", back:"Mechanical Work Done by the engine (J)"},
{front:"What does \\( W_U \\) represent?", back:"Useful Work obtained from the engine (J)"},
{front:"Can Carnot efficiency ever reach 100%?", back:"No, unless the cold reservoir temperature \\( T_c \\) is 0 Kelvin, which is impossible."}
],quiz:[
{question:"In a heat engine, what does \\( Q_c \\) represent?", options:["Heat from the hot reservoir","Useful mechanical work","Heat rejected to the cold reservoir","Overall efficiency"], correctIndex:2, feedback:"\\( Q_c \\) is the heat rejected or expelled to the cold reservoir."},
{question:"Which of these gives the overall efficiency of an engine?", options:["\\( e = \\frac{Q_c}{Q_h} \\)","\\( e = e_c \\times e_M \\)","\\( e = 1 - \\frac{W_M}{Q_h} \\)","\\( e = \\frac{T_c}{T_h} \\)"], correctIndex:1, feedback:"Overall efficiency is the product of Carnot (ideal) efficiency and mechanical efficiency."},
{question:"Carnot efficiency is defined by which formula?", options:["\\( 1 - \\frac{T_h}{T_c} \\)","\\( 1 - \\frac{T_c}{T_h} \\)","\\( \\frac{T_c}{T_h} - 1 \\)","\\( \\frac{Q_h}{Q_c} \\)"], correctIndex:1, feedback:"Carnot efficiency is \\( e_c = 1 - \\frac{T_c}{T_h} \\)."},
{question:"For an ideal Carnot engine, the ratio of heat rejected to heat absorbed (\\( Q_c / Q_h \\)) is equal to:", options:["\\( T_h / T_c \\)","\\( T_c / T_h \\)","\\( W_M / Q_h \\)","\\( 1 \\)"], correctIndex:1, feedback:"In a Carnot cycle, heat ratios equal absolute temperature ratios: \\( Q_c / Q_h = T_c / T_h \\)."},
{question:"Which of the following energy conservation equations is true for any heat engine?", options:["\\( Q_h = W_M + Q_c \\)","\\( W_M = Q_h + Q_c \\)","\\( Q_c = Q_h + W_M \\)","\\( Q_h = W_M - Q_c \\)"], correctIndex:0, feedback:"Heat in equals work out plus heat out: \\( Q_h = W_M + Q_c \\)."},
{question:"If the hot reservoir is 600K and the cold reservoir is 300K, what is the maximum possible (Carnot) efficiency?", options:["25%","33%","50%","100%"], correctIndex:2, feedback:"\\( e_c = 1 - 300/600 = 1 - 0.5 = 0.5 \\) or 50%."},
{question:"What does \\( W_U \\) stand for in the overall efficiency formula?", options:["Wasted Energy","Useful Work","Work of the Universe","Mechanical Work"], correctIndex:1, feedback:"\\( W_U \\) is the Useful Work actually delivered by the engine."},
{question:"The mechanical efficiency \\( e_M \\) of an engine tells us:", options:["How much heat is lost to friction","The ratio of useful work to mechanical work done","The ratio of \\( T_c \\) to \\( T_h \\)","The Carnot efficiency limit"], correctIndex:1, feedback:"It describes how much of the internal mechanical work becomes useful output."},
{question:"Why is a Carnot engine's efficiency always less than 100%?", options:["Because \\( T_h \\) is finite","Because \\( T_c \\) is always greater than 0 K","Because friction exists","Because \\( Q_c \\) is zero"], correctIndex:1, feedback:"Reaching 100% would require \\( T_c = 0\\text{K} \\), which violates the third law of thermodynamics."},
{question:"If an engine absorbs 1000J of heat from the hot reservoir and does 400J of work, how much heat is rejected?", options:["400J","600J","1000J","1400J"], correctIndex:1, feedback:"Using \\( Q_h = W_M + Q_c \\), we find \\( 1000 = 400 + Q_c \\Rightarrow Q_c = 600\\text{J} \\)."}
]},
{id:"g12-l4",gifUrl:"https://commons.wikimedia.org/wiki/Special:FilePath/Standing_wave_2.gif",worksheetUrl:"worksheets/ch2-l1-worksheet.pdf",games:[{topic:"Superposition and Waves",url:"https://gemini.google.com/share/2e83761df9b7"}],title:"Chapter 2 Lesson 1: Superposition and Standing Waves",concepts:["Sinusoidal Wave: Propagates disturbances through space described by \\( y = a \\sin(\\omega t \\pm kx) \\).","Wave Characteristics: Wavelength (\\( \\lambda \\)), Period (\\( T \\)), Angular Frequency (\\( \\omega = 2\\pi/T \\)), and Wave Number (\\( k = 2\\pi/\\lambda \\)).","Wave Speed: Linear rate of propagation, \\( v = f\\lambda = \\frac{\\omega}{k} \\).","Superposition Principle: Net displacement equals the algebraic sum of individual wave displacements.","Standing Waves: Interference of identical opposite-traveling waves producing nodes (zero motion) and antinodes (maximum amplitude)."],definitions:[
{term:"Sinusoidal Wave",definition:"A smooth periodic travelling disturbance that propagates through space described by a sinusoidal function of space and time.",symbol:"y(x, t)",unit:"\\mathrm{m}",equation:"y = a \\sin(\\omega t \\pm kx)"},
{term:"Displacement",definition:"The instantaneous position offset of a medium particle from its undisturbed central equilibrium position.",symbol:"y",unit:"\\mathrm{m}",equation:"y = a \\sin(\\omega t \\pm kx)"},
{term:"Wave Amplitude",definition:"The maximum absolute displacement of a wave oscillation measured from the center line of equilibrium.",symbol:"a",unit:"\\mathrm{m}",equation:"y_{max} = a"},
{term:"Angular Frequency",definition:"The rate of change of the wave oscillation phase angle expressed in radians per second.",symbol:"\\omega",unit:"\\mathrm{rad/s}",equation:"\\omega = \\frac{2\\pi}{T} = 2\\pi f"},
{term:"Period of a Wave",definition:"The time required for one complete vibrational wave cycle to pass a fixed spatial point.",symbol:"T",unit:"\\mathrm{s}",equation:"T = \\frac{1}{f} = \\frac{2\\pi}{\\omega}"},
{term:"Wavelength",definition:"The spatial crest-to-crest distance over which the wave shape repeats itself in space.",symbol:"\\lambda",unit:"\\mathrm{m}",equation:"\\lambda = \\frac{v}{f} = \\frac{2\\pi}{k}"},
{term:"Wave Number",definition:"The spatial analogue of angular frequency representing the number of radians of wave cycle per unit meter of distance.",symbol:"k",unit:"\\mathrm{rad/m}",equation:"k = \\frac{2\\pi}{\\lambda}"},
{term:"Wave Speed (Phase Velocity)",definition:"The linear velocity at which a wave crest or energy disturbance travels through the transmission medium.",symbol:"v",unit:"\\mathrm{m/s}",equation:"v = \\frac{x}{t} = \\frac{\\lambda}{T} = \\frac{\\omega}{k} = f\\lambda"},
{term:"Principle of Superposition",definition:"When two or more travelling waves traverse the same medium simultaneously, the net displacement is the algebraic sum of the individual displacements.",symbol:"y = y_1 + y_2",unit:"\\mathrm{m}",equation:"y = y_1 + y_2"},
{term:"Standing Wave",definition:"A wave pattern that remains in a constant stationary position formed by the interference of two identical waves traveling in opposite directions.",symbol:"\\text{Standing Wave}",unit:"\\mathrm{m}",equation:"y = 2a \\sin(kx) \\cos(\\omega t)"},
{term:"Node",definition:"A point along a standing wave where the interference is completely destructive, resulting in permanently zero vibrational amplitude.",symbol:"A = 0",unit:"\\mathrm{m}",equation:"x_n = n \\frac{\\lambda}{2} \\quad (n = 0, 1, 2, \\dots)"},
{term:"Antinode",definition:"A point along a standing wave where the constructive interference is maximized, vibrating with peak amplitude \\(2a\\).",symbol:"A = 2a",unit:"\\mathrm{m}",equation:"x_n = (2n + 1) \\frac{\\lambda}{4} \\quad (n = 0, 1, 2, \\dots)"}
],
examples:[
{title:"Extracting Characteristics from a Wave Equation",given:"A transverse travelling wave is described by \\( y = 0.05\\sin(40\\pi t - 2\\pi x) \\) in SI units.",find:"Amplitude (\\( a \\)), Angular frequency (\\( \\omega \\)), Wave number (\\( k \\)), and Propagation direction.",equation:"y = a \\sin(\\omega t - kx)",solution:"Comparing directly with the standard formula \\( y = a\\sin(\\omega t - kx) \\):<br>1. Amplitude \\( a = 0.05\\,\\mathrm{m} = 5.0\\,\\mathrm{cm} \\).<br>2. Angular frequency \\( \\omega = 40\\pi\\,\\mathrm{rad/s} \\approx 125.66\\,\\mathrm{rad/s} \\).<br>3. Wave number \\( k = 2\\pi\\,\\mathrm{rad/m} \\approx 6.28\\,\\mathrm{rad/m} \\).<br>4. The minus sign in \\( (\\omega t - kx) \\) denotes propagation in the positive x-direction (+x).",finalAnswer:"a = 0.05\\,\\mathrm{m}, \\quad \\omega = 40\\pi\\,\\mathrm{rad/s}, \\quad k = 2\\pi\\,\\mathrm{rad/m} \\text{ (+x direction)}",explanation:"The standard wave formula parameters allow immediate extraction of all fundamental spatial and temporal wave constants."},
{title:"Angular Frequency, Period, and Wave Number Calculation",given:"A wave has frequency \\( f = 50\\,\\mathrm{Hz} \\) and wavelength \\( \\lambda = 0.40\\,\\mathrm{m} \\).",find:"Period (\\( T \\)), Angular frequency (\\( \\omega \\)), and Wave number (\\( k \\)).",equation:"T = \\frac{1}{f}, \\quad \\omega = 2\\pi f, \\quad k = \\frac{2\\pi}{\\lambda}",solution:"1. Period: \\( T = \\frac{1}{50} = 0.020\\,\\mathrm{s} \\).<br>2. Angular frequency: \\( \\omega = 2\\pi \\times 50 = 100\\pi\\,\\mathrm{rad/s} \\approx 314.16\\,\\mathrm{rad/s} \\).<br>3. Wave number: \\( k = \\frac{2\\pi}{0.40} = 5\\pi\\,\\mathrm{rad/m} \\approx 15.71\\,\\mathrm{rad/m} \\).",finalAnswer:"T = 0.020\\,\\mathrm{s}, \\quad \\omega = 314.2\\,\\mathrm{rad/s}, \\quad k = 15.71\\,\\mathrm{rad/m}",explanation:"Angular frequency scales vibrational time while wave number scales spatial oscillation density."},
{title:"Wave Speed from Spatial and Temporal Parameters",given:"From the previous wave: \\( \\omega = 100\\pi\\,\\mathrm{rad/s} \\), \\( k = 5\\pi\\,\\mathrm{rad/m} \\) (or \\( \\lambda = 0.40\\,\\mathrm{m}, T = 0.020\\,\\mathrm{s} \\)).",find:"Wave speed (\\( v \\)).",equation:"v = \\frac{\\lambda}{T} = \\frac{\\omega}{k}",solution:"Substitute the parameters:<br>\\( v = \\frac{\\omega}{k} = \\frac{100\\pi\\,\\mathrm{rad/s}}{5\\pi\\,\\mathrm{rad/m}} = 20\\,\\mathrm{m/s} \\).<br>Or: \\( v = f\\lambda = 50\\,\\mathrm{Hz} \\times 0.40\\,\\mathrm{m} = 20\\,\\mathrm{m/s} \\).",finalAnswer:"v = 20\\,\\mathrm{m/s}",explanation:"The phase speed of a travelling wave is the ratio of angular frequency to wave number, indicating how fast the disturbance moves through space."},
{title:"Standing Wave Superposition Displacement",given:"Two waves of amplitude \\( a = 0.03\\,\\mathrm{m} \\), wave number \\( k = \\frac{\\pi}{2}\\,\\mathrm{rad/m} \\), and \\( \\omega = 10\\pi\\,\\mathrm{rad/s} \\) interfere to create a standing wave.",find:"Standing wave equation and displacement at position \\( x = 1.0\\,\\mathrm{m} \\) at time \\( t = 0.05\\,\\mathrm{s} \\).",equation:"y = 2a \\sin(kx) \\cos(\\omega t)",solution:"1. Total amplitude envelope factor: \\( 2a = 2(0.03) = 0.06\\,\\mathrm{m} \\).<br>2. Position term: \\( \\sin\\left(\\frac{\\pi}{2} \\times 1.0\\right) = \\sin\\left(\\frac{\\pi}{2}\\right) = 1.0 \\).<br>3. Time term: \\( \\cos(10\\pi \\times 0.05) = \\cos(0.5\\pi) = 0 \\).<br>4. Result: \\( y = 0.06 \\times 1.0 \\times 0 = 0\\,\\mathrm{m} \\).",finalAnswer:"y = 0.06\\sin(\\frac{\\pi}{2}x)\\cos(10\\pi t)\\,\\mathrm{m}, \\quad y(1, 0.05) = 0\\,\\mathrm{m}",explanation:"At \\( t = 0.05\\,\\mathrm{s} \\), the standing wave passes through its flat equilibrium state where all particles simultaneously have zero displacement."},
{title:"Positions of Nodes on a Vibrating String",given:"A standing wave has a wavelength \\( \\lambda = 0.60\\,\\mathrm{m} \\).",find:"Positions of the first four nodes (\\( n = 0, 1, 2, 3 \\)) starting from \\( x = 0 \\).",equation:"x_n = n \\frac{\\lambda}{2}",solution:"Substitute \\( \\lambda = 0.60\\,\\mathrm{m} \\): \\( \\frac{\\lambda}{2} = 0.30\\,\\mathrm{m} \\).<br>For \\( n = 0 \\): \\( x_0 = 0\\,\\mathrm{m} \\).<br>For \\( n = 1 \\): \\( x_1 = 1 \\times 0.30 = 0.30\\,\\mathrm{m} \\).<br>For \\( n = 2 \\): \\( x_2 = 2 \\times 0.30 = 0.60\\,\\mathrm{m} \\).<br>For \\( n = 3 \\): \\( x_3 = 3 \\times 0.30 = 0.90\\,\\mathrm{m} \\).",finalAnswer:"x = 0\\,\\mathrm{m}, \\; 0.30\\,\\mathrm{m}, \\; 0.60\\,\\mathrm{m}, \\; 0.90\\,\\mathrm{m}",explanation:"Adjacent nodes are spaced precisely by half a wavelength (\\( \\lambda / 2 = 30\\,\\mathrm{cm} \\)) along the string."},
{title:"Positions of Antinodes in a Standing Wave",given:"For the same standing wave with \\( \\lambda = 0.60\\,\\mathrm{m} \\).",find:"Positions of the first three antinodes (\\( n = 0, 1, 2 \\)).",equation:"x_n = (2n + 1) \\frac{\\lambda}{4}",solution:"Calculate \\( \\frac{\\lambda}{4} = \\frac{0.60}{4} = 0.15\\,\\mathrm{m} \\).<br>For \\( n = 0 \\): \\( x_0 = (1) \\times 0.15 = 0.15\\,\\mathrm{m} \\).<br>For \\( n = 1 \\): \\( x_1 = (3) \\times 0.15 = 0.45\\,\\mathrm{m} \\).<br>For \\( n = 2 \\): \\( x_2 = (5) \\times 0.15 = 0.75\\,\\mathrm{m} \\).",finalAnswer:"x = 0.15\\,\\mathrm{m}, \\; 0.45\\,\\mathrm{m}, \\; 0.75\\,\\mathrm{m}",explanation:"Antinodes lie precisely midway between adjacent nodes, experiencing maximum vibrational oscillation."}
],
equations:[
{section:"Sinusoidal Wave",name:"Sinusoidal Wave equation<br><img src='images/ch2-l1-eq1.png' style='width:100%; border-radius:8px; margin-top:10px;'>",formula:"\\( y = a \\sin(\\omega t \\pm kx) \\)",symbols:[{symbol:"y",desc:"Displacement (m)"},{symbol:"a",desc:"Amplitude (m)"},{symbol:"\\omega",desc:"Angular frequency (rad/s)"},{symbol:"t",desc:"Time (s)"},{symbol:"k",desc:"Wave number (rad/m)"},{symbol:"x",desc:"Position (m)"}]},
{section:"Sinusoidal Wave",name:"Angular frequency<br><img src='images/ch2-l1-eq2.png' style='width:100%; border-radius:8px; margin-top:10px;'>",formula:"\\( \\omega = \\frac{2\\pi}{T}, k = \\frac{2\\pi}{\\lambda} \\)",symbols:[{symbol:"\\omega",desc:"Angular frequency (rad/s)"},{symbol:"T",desc:"Period (s)"},{symbol:"k",desc:"Wave number (rad/m)"},{symbol:"\\lambda",desc:"Wavelength (m)"}]},
{section:"Sinusoidal Wave",name:"Wave speed<br><img src='images/ch2-l1-eq3.png' style='width:100%; border-radius:8px; margin-top:10px;'>",formula:"\\( v = \\frac{x}{t} = \\frac{\\lambda}{T} = \\frac{\\omega}{k} \\)",symbols:[{symbol:"v",desc:"Wave speed (m/s)"},{symbol:"x",desc:"Position or distance (m)"},{symbol:"t",desc:"Time (s)"},{symbol:"\\lambda",desc:"Wavelength (m)"},{symbol:"T",desc:"Period (s)"},{symbol:"\\omega",desc:"Angular frequency (rad/s)"},{symbol:"k",desc:"Wave number (rad/m)"}]},
{section:"Standing Wave",name:"Standing wave equation<br><img src='images/ch2-l1-eq4.png' style='width:100%; border-radius:8px; margin-top:10px;'>",formula:"\\( y = 2a \\sin(kx) \\cos(\\omega t) \\)",symbols:[{symbol:"y",desc:"Displacement of standing wave (m)"},{symbol:"a",desc:"Amplitude of original wave (m)"},{symbol:"k",desc:"Wave number (rad/m)"},{symbol:"x",desc:"Position (m)"},{symbol:"\\omega",desc:"Angular frequency (rad/s)"},{symbol:"t",desc:"Time (s)"}]},
{section:"Standing Wave",name:"Minimum amplitude<br><img src='images/ch2-l1-eq5.png' style='width:100%; border-radius:8px; margin-top:10px;'>",formula:"\\( A = 0 \\Leftrightarrow \\sin(kx) = 0 \\Rightarrow x = n\\frac{\\lambda}{2} \\)",symbols:[{symbol:"A",desc:"Amplitude envelope (m)"},{symbol:"k",desc:"Wave number (rad/m)"},{symbol:"x",desc:"Position of nodes (m)"},{symbol:"n",desc:"Integer (0, 1, 2...)"},{symbol:"\\lambda",desc:"Wavelength (m)"}]},
{section:"Standing Wave",name:"Maximum Amplitude<br><img src='images/ch2-l1-eq6.png' style='width:100%; border-radius:8px; margin-top:10px;'>",formula:"\\( A = \\pm 1 \\Leftrightarrow \\sin(kx) = \\pm 1 \\Rightarrow x = (2n + 1)\\frac{\\lambda}{4} \\)",symbols:[{symbol:"A",desc:"Amplitude envelope (m)"},{symbol:"k",desc:"Wave number (rad/m)"},{symbol:"x",desc:"Position of antinodes (m)"},{symbol:"n",desc:"Integer (0, 1, 2...)"},{symbol:"\\lambda",desc:"Wavelength (m)"}]}
],flashcards:[
{front:"What is the sinusoidal wave equation?", back:"\\( y = a \\sin(\\omega t \\pm kx) \\)"},
{front:"What is the formula for angular frequency \\( \\omega \\)?", back:"\\( \\omega = \\frac{2\\pi}{T} \\)"},
{front:"What is the formula for wave number \\( k \\)?", back:"\\( k = \\frac{2\\pi}{\\lambda} \\)"},
{front:"How do you calculate wave speed \\( v \\)?", back:"\\( v = \\frac{\\lambda}{T} = \\frac{\\omega}{k} \\)"},
{front:"What is the standing wave equation?", back:"\\( y = 2a \\sin(kx) \\cos(\\omega t) \\)"},
{front:"Where do nodes (minimum amplitude) occur in a standing wave?", back:"\\( x = n\\frac{\\lambda}{2} \\)"},
{front:"Where do antinodes (maximum amplitude) occur in a standing wave?", back:"\\( x = (2n + 1)\\frac{\\lambda}{4} \\)"},
{front:"What does \\( y \\) represent in the wave equation?", back:"Displacement of the wave (m)"},
{front:"What does \\( a \\) represent in the wave equation?", back:"Amplitude of the wave (m)"},
{front:"What does the wave number \\( k \\) represent?", back:"Spatial frequency of the wave (rad/m)"}
],quiz:[
{question:"Which formula correctly defines the wave number \\( k \\)?", options:["\\( k = \\frac{2\\pi}{\\omega} \\)","\\( k = \\frac{2\\pi}{\\lambda} \\)","\\( k = \\frac{\\lambda}{T} \\)","\\( k = 2\\pi f \\)"], correctIndex:1, feedback:"The wave number \\( k \\) relates to wavelength: \\( k = 2\\pi / \\lambda \\)."},
{question:"At what positions does a standing wave have minimum amplitude (nodes)?", options:["\\( x = n\\lambda \\)","\\( x = n\\frac{\\lambda}{2} \\)","\\( x = (2n+1)\\frac{\\lambda}{4} \\)","\\( x = n\\frac{\\lambda}{4} \\)"], correctIndex:1, feedback:"Nodes occur where \\( \\sin(kx) = 0 \\), which gives \\( x = n\\lambda / 2 \\)."},
{question:"The angular frequency \\( \\omega \\) is given by:", options:["\\( 2\\pi / T \\)","\\( 2\\pi \\lambda \\)","\\( 2\\pi / k \\)","\\( \\lambda / T \\)"], correctIndex:0, feedback:"Angular frequency \\( \\omega \\) equals \\( 2\\pi / T \\)."},
{question:"In the standing wave equation \\( y = 2a \\sin(kx) \\cos(\\omega t) \\), what is the amplitude envelope?", options:["\\( 2a \\)","\\( 2a \\sin(kx) \\)","\\( \\cos(\\omega t) \\)","\\( a \\sin(kx) \\)"], correctIndex:1, feedback:"The amplitude varies with position \\( x \\) as \\( 2a \\sin(kx) \\)."},
{question:"Wave speed \\( v \\) can be calculated by which of the following?", options:["\\( k / \\omega \\)","\\( \\omega / k \\)","\\( \\omega \\times k \\)","\\( T / \\lambda \\)"], correctIndex:1, feedback:"Speed \\( v = \\lambda / T = (2\\pi/k) / (2\\pi/\\omega) = \\omega / k \\)."},
{question:"Maximum amplitude (antinodes) of a standing wave occur at:", options:["\\( x = n\\frac{\\lambda}{2} \\)","\\( x = (2n + 1)\\frac{\\lambda}{4} \\)","\\( x = n\\lambda \\)","\\( x = \\lambda \\)"], correctIndex:1, feedback:"Antinodes occur where \\( \\sin(kx) = \\pm 1 \\), yielding \\( x = (2n + 1)\\frac{\\lambda}{4} \\)."},
{question:"What does the \\( \\pm \\) sign in \\( y = a \\sin(\\omega t \\pm kx) \\) determine?", options:["Amplitude","Wave speed","Direction of propagation","Frequency"], correctIndex:2, feedback:"A minus sign means it travels in the positive x direction, and a plus sign means negative x direction."},
{question:"In the wave equation, \\( \\lambda \\) stands for:", options:["Frequency","Period","Wave number","Wavelength"], correctIndex:3, feedback:"\\( \\lambda \\) represents the wavelength of the wave."},
{question:"The period \\( T \\) of a wave is related to angular frequency by:", options:["\\( T = \\frac{2\\pi}{\\omega} \\)","\\( T = 2\\pi \\omega \\)","\\( T = \\frac{\\omega}{2\\pi} \\)","\\( T = \\omega \\lambda \\)"], correctIndex:0, feedback:"By definition, \\( \\omega = 2\\pi/T \\Rightarrow T = 2\\pi/\\omega \\)."},
{question:"A standing wave is usually formed by the superposition of:", options:["Two waves of different frequencies","Two waves of same frequency traveling in same direction","Two waves of same frequency traveling in opposite directions","A single wave reflecting internally"], correctIndex:2, feedback:"Standing waves form from identical waves moving in opposite directions."}
]},
{
id: "g12-interf",
gifUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Two_sources_interference.gif",
worksheetUrl: "worksheets/ch2-l2-worksheet.pdf",
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
        title: "Resultant Amplitude from Wave Superposition",
        given: "Two identical in-phase sound waves each have amplitude \\( A = 3.0\\,\\mathrm{mm} = 3.0 \\times 10^{-3}\\,\\mathrm{m} \\) and wavelength \\( \\lambda = 0.40\\,\\mathrm{m} \\). At observation point P, the distances from the sources are \\( d_1 = 2.10\\,\\mathrm{m} \\) and \\( d_2 = 2.50\\,\\mathrm{m} \\).",
        find: "1. Path difference \\( d_2 - d_1 \\).<br>2. Resultant amplitude \\( A' \\) at point P.",
        equation: "A' = 2A\\left|\\cos\\left(\\frac{\\pi(d_2 - d_1)}{\\lambda}\\right)\\right|",
        solution: "1. <strong>Path difference:</strong><br>\\[ d_2 - d_1 = 2.50\\,\\mathrm{m} - 2.10\\,\\mathrm{m} = 0.40\\,\\mathrm{m} = 1\\lambda \\]<br>Since \\( d_2 - d_1 = 1\\lambda \\), \\( n = 1 \\), satisfying constructive interference.<br>2. <strong>Resultant amplitude:</strong><br>\\[ A' = 2(3.0\\,\\mathrm{mm})\\left|\\cos\\left(\\frac{\\pi(0.40\\,\\mathrm{m})}{0.40\\,\\mathrm{m}}\\right)\\right| = 6.0\\,\\mathrm{mm} \\times |\\cos(\\pi)| = 6.0\\,\\mathrm{mm} \\times |-1| = 6.0\\,\\mathrm{mm} \\]",
        finalAnswer: "d_2 - d_1 = 0.40\\,\\mathrm{m}, \\quad A' = A'_{\\max} = 6.0\\,\\mathrm{mm} \\; (6.0 \\times 10^{-3}\\,\\mathrm{m})",
        explanation: "When the path difference is an integer multiple of the wavelength, the waves arrive in phase, resulting in maximum constructive amplitude equal to twice the individual amplitude (2A)."
    },
    {
        title: "Young's Double-Slit Bright and Dark Fringe Positions",
        given: "Slit separation \\( d = 0.25\\,\\mathrm{mm} = 2.5 \\times 10^{-4}\\,\\mathrm{m} \\), Screen distance \\( L = 1.20\\,\\mathrm{m} \\), Light wavelength \\( \\lambda = 500\\,\\mathrm{nm} = 5.0 \\times 10^{-7}\\,\\mathrm{m} \\).",
        find: "1. Position of the 3rd bright fringe (\\( y_{\\text{bright}} \\) for \\( m = 3 \\)).<br>2. Position of the 2nd dark fringe (\\( y_{\\text{dark}} \\) for \\( m = 1 \\)).<br>3. Fringe spacing (\\( \\Delta y \\)).",
        equation: "y_{\\text{bright}} = \\frac{m\\lambda L}{d}, \\quad y_{\\text{dark}} = \\frac{(m + 1/2)\\lambda L}{d}, \\quad \\Delta y = \\frac{\\lambda L}{d}",
        solution: "1. <strong>Fringe spacing:</strong><br>\\[ \\Delta y = \\frac{\\lambda L}{d} = \\frac{(5.0 \\times 10^{-7}\\,\\mathrm{m})(1.20\\,\\mathrm{m})}{2.5 \\times 10^{-4}\\,\\mathrm{m}} = 2.4 \\times 10^{-3}\\,\\mathrm{m} = 2.4\\,\\mathrm{mm} \\]<br>2. <strong>3rd Bright Fringe (\\( m = 3 \\)):</strong><br>\\[ y_{\\text{bright}, 3} = \\frac{3\\lambda L}{d} = 3(2.4\\,\\mathrm{mm}) = 7.2\\,\\mathrm{mm} \\]<br>3. <strong>2nd Dark Fringe (\\( m = 1 \\Rightarrow m + 1/2 = 1.5 \\)):</strong><br>\\[ y_{\\text{dark}, 1} = \\frac{(1 + 0.5)\\lambda L}{d} = 1.5(2.4\\,\\mathrm{mm}) = 3.6\\,\\mathrm{mm} \\]",
        finalAnswer: "y_{\\text{bright}, 3} = 7.2\\,\\mathrm{mm}, \\quad y_{\\text{dark}, 1} = 3.6\\,\\mathrm{mm}, \\quad \\Delta y = 2.4\\,\\mathrm{mm}",
        explanation: "In Young's experiment, bright fringes are equally spaced across the screen, and dark fringes occur exactly halfway between adjacent bright fringes."
    },
    {
        title: "Single-Slit Diffraction Minima and Central Maximum Width",
        given: "Slit width \\( a = 0.10\\,\\mathrm{mm} = 1.0 \\times 10^{-4}\\,\\mathrm{m} \\), Screen distance \\( L = 2.00\\,\\mathrm{m} \\), Light wavelength \\( \\lambda = 632.8\\,\\mathrm{nm} = 6.328 \\times 10^{-7}\\,\\mathrm{m} \\).",
        find: "1. Position of the first diffraction dark minimum (\\( y_{\\text{dark}, 1} \\) for \\( m = 1 \\)).<br>2. Width of the central diffraction maximum (\\( W \\)).",
        equation: "y_{\\text{dark}} = \\frac{m\\lambda L}{a}, \\quad W = \\frac{2\\lambda L}{a} = 2y_1",
        solution: "1. <strong>Position of 1st minimum (\\( m = 1 \\)):</strong><br>\\[ y_{\\text{dark}, 1} = \\frac{(1)(6.328 \\times 10^{-7}\\,\\mathrm{m})(2.00\\,\\mathrm{m})}{1.0 \\times 10^{-4}\\,\\mathrm{m}} = 1.2656 \\times 10^{-2}\\,\\mathrm{m} \\approx 12.66\\,\\mathrm{mm} \\]<br>2. <strong>Width of central maximum:</strong><br>\\[ W = \\frac{2\\lambda L}{a} = 2(12.656\\,\\mathrm{mm}) \\approx 25.31\\,\\mathrm{mm} \\]",
        finalAnswer: "y_{\\text{dark}, 1} \\approx 12.7\\,\\mathrm{mm}, \\quad W \\approx 25.3\\,\\mathrm{mm}",
        explanation: "The central diffraction maximum extends between the first minima at y = -12.7 mm and y = +12.7 mm, making it twice as wide as the distance from the center to the first minimum."
    }
],
equations: [
    { section: "Conditions for Constructive and Destructive Interference", name: "Path-Difference Conditions for Interference", formula: "\\[ d_2 - d_1 = n\\lambda \\quad (\\text{Constructive Maxima}) \\]\\[ d_2 - d_1 = \\frac{(2n + 1)\\lambda}{2} \\quad (\\text{Destructive Minima}) \\]", symbols: [{ symbol: "d_2 - d_1", desc: "Path difference (m)" }, { symbol: "λ", desc: "Wavelength (m)" }, { symbol: "n", desc: "Order index (0, 1, 2, ...)" }] },
    { section: "Maximum and Minimum Amplitude of the Superposition Wave", name: "Resultant Amplitude of Superposition Wave", formula: "\\[ A' = 2A\\left|\\cos\\left(\\frac{\\pi(d_2 - d_1)}{\\lambda}\\right)\\right| \\]", symbols: [{ symbol: "A'", desc: "Resultant amplitude (m)" }, { symbol: "A", desc: "Component amplitude (m)" }, { symbol: "d_2 - d_1", desc: "Path difference (m)" }, { symbol: "λ", desc: "Wavelength (m)" }] },
    { section: "Maximum and Minimum Amplitude of the Superposition Wave", name: "Maximum and Minimum Amplitude Conditions", formula: "\\[ A'_{\\max} = 2A \\iff d_2 - d_1 = n\\lambda \\]\\[ A'_{\\min} = 0 \\iff d_2 - d_1 = \\frac{(2n + 1)\\lambda}{2} \\]", symbols: [{ symbol: "A'_max", desc: "Maximum amplitude = 2A (m)" }, { symbol: "A'_min", desc: "Minimum amplitude = 0 (m)" }, { symbol: "n", desc: "Integer (0, 1, 2, ...)" }] },
    { section: "Path Difference in Young's Double-Slit Experiment", name: "Path Difference at Observation Point P", formula: "\\[ \\Delta d = d_2 - d_1 = d\\sin\\theta \\]", symbols: [{ symbol: "Δd", desc: "Path difference (m)" }, { symbol: "d", desc: "Slit separation (m)" }, { symbol: "θ", desc: "Angle from axis (rad)" }] },
    { section: "Path Difference in Young's Double-Slit Experiment", name: "Conditions for Bright and Dark Fringes", formula: "\\[ d\\sin\\theta_{\\text{bright}} = m\\lambda \\quad (m = 0, \\pm 1, \\pm 2, \\dots) \\]\\[ d\\sin\\theta_{\\text{dark}} = \\left(m + \\frac{1}{2}\\right)\\lambda \\quad (m = 0, \\pm 1, \\pm 2, \\dots) \\]", symbols: [{ symbol: "d", desc: "Slit separation (m)" }, { symbol: "θ", desc: "Fringe angle (rad)" }, { symbol: "m", desc: "Fringe order" }, { symbol: "λ", desc: "Wavelength (m)" }] },
    { section: "Bright and Dark Fringes in Interference Patterns", name: "Position of Bright Fringes on the Screen", formula: "\\[ \\tan\\theta_{\\text{bright}} = \\frac{y_{\\text{bright}}}{L} \\approx \\sin\\theta_{\\text{bright}} = \\frac{m\\lambda}{d} \\implies y_{\\text{bright}} = \\frac{m\\lambda L}{d} \\quad (m = 0, \\pm 1, \\dots) \\]", symbols: [{ symbol: "y_bright", desc: "Bright fringe distance (m)" }, { symbol: "m", desc: "Fringe order" }, { symbol: "λ", desc: "Wavelength (m)" }, { symbol: "L", desc: "Screen distance (m)" }, { symbol: "d", desc: "Slit separation (m)" }] },
    { section: "Bright and Dark Fringes in Interference Patterns", name: "Position of Dark Fringes on the Screen", formula: "\\[ \\tan\\theta_{\\text{dark}} = \\frac{y_{\\text{dark}}}{L} \\approx \\sin\\theta_{\\text{dark}} = \\frac{(m + 1/2)\\lambda}{d} \\implies y_{\\text{dark}} = \\frac{(m + 1/2)\\lambda L}{d} \\quad (m = 0, \\pm 1, \\dots) \\]", symbols: [{ symbol: "y_dark", desc: "Dark fringe distance (m)" }, { symbol: "m", desc: "Dark fringe order" }, { symbol: "λ", desc: "Wavelength (m)" }, { symbol: "L", desc: "Screen distance (m)" }, { symbol: "d", desc: "Slit separation (m)" }] },
    { section: "Bright and Dark Fringes in Interference Patterns", name: "Fringe Spacing / Fringe Width (Δy)", formula: "\\[ \\Delta y = y_{m+1} - y_m = \\frac{\\lambda L}{d} \\]", symbols: [{ symbol: "Δy", desc: "Fringe spacing (m)" }, { symbol: "λ", desc: "Wavelength (m)" }, { symbol: "L", desc: "Screen distance (m)" }, { symbol: "d", desc: "Slit separation (m)" }] },
    { section: "Light Diffraction", name: "Condition for Minima (Dark Fringes) in Single-Slit Diffraction", formula: "\\[ a\\sin\\theta = m\\lambda \\quad (m = \\pm 1, \\pm 2, \\pm 3, \\dots) \\]", symbols: [{ symbol: "a", desc: "Slit width (m)" }, { symbol: "θ", desc: "Diffraction angle (rad)" }, { symbol: "m", desc: "Order of minimum (non-zero)" }, { symbol: "λ", desc: "Wavelength (m)" }] },
    { section: "Light Diffraction", name: "Position of Dark Fringes on the Screen", formula: "\\[ \\tan\\theta = \\frac{y}{L} \\approx \\sin\\theta = \\frac{m\\lambda}{a} \\implies y_{\\text{dark}} = \\frac{m\\lambda L}{a} \\quad (m = \\pm 1, \\pm 2, \\dots) \\]\\[ y_{\\text{first dark}} = \\pm\\frac{\\lambda L}{a} \\quad (m = \\pm 1) \\]", symbols: [{ symbol: "y_dark", desc: "Dark fringe position (m)" }, { symbol: "m", desc: "Minimum order" }, { symbol: "λ", desc: "Wavelength (m)" }, { symbol: "L", desc: "Screen distance (m)" }, { symbol: "a", desc: "Slit width (m)" }] },
    { section: "Light Diffraction", name: "Width of the Central Diffraction Maximum", formula: "\\[ W = 2y_1 = \\frac{2\\lambda L}{a} \\]", symbols: [{ symbol: "W", desc: "Width of central maximum (m)" }, { symbol: "λ", desc: "Wavelength (m)" }, { symbol: "L", desc: "Screen distance (m)" }, { symbol: "a", desc: "Slit width (m)" }, { symbol: "y_1", desc: "Distance to first minimum (m)" }] }
],
flashcards: [
    { front: "What is the condition for constructive interference in terms of path difference?", back: "\\( d_2 - d_1 = n\\lambda \\quad (n = 0, 1, 2, 3, \\dots) \\), producing maximum amplitude \\( A'_{\\max} = 2A \\)." },
    { front: "What is the condition for destructive interference in terms of path difference?", back: "\\( d_2 - d_1 = \\frac{(2n+1)\\lambda}{2} \\quad (n = 0, 1, 2, 3, \\dots) \\), producing minimum amplitude \\( A'_{\\min} = 0 \\)." },
    { front: "What is the resultant amplitude equation for two identical interfering waves of amplitude A?", back: "\\( A' = 2A\\left|\\cos\\left(\\frac{\\pi(d_2 - d_1)}{\\lambda}\\right)\\right| \\)" },
    { front: "In Young's double-slit experiment, what is the path difference formula at angle θ?", back: "\\( \\Delta d = d_2 - d_1 = d\\sin\\theta \\)" },
    { front: "Where are bright fringes located on the screen in Young's experiment?", back: "\\( y_{\\text{bright}} = \\frac{m\\lambda L}{d} \\quad (m = 0, \\pm 1, \\pm 2, \\dots) \\)" },
    { front: "Where are dark fringes located on the screen in Young's experiment?", back: "\\( y_{\\text{dark}} = \\frac{(m + 1/2)\\lambda L}{d} \\quad (m = 0, \\pm 1, \\dots) \\)" },
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
{id:"g12-l5",gifUrl:"https://commons.wikimedia.org/wiki/Special:FilePath/Electric-generator-animation.gif",worksheetUrl:"worksheets/ch3-l1-worksheet.pdf",games:[{topic:"Magnetic Field",url:"https://gemini.google.com/share/8a653df6b614"},{topic:"Faraday’s Law",url:"https://gemini.google.com/share/a36b992c1d6d"},{topic:"Self Induction",url:"https://gemini.google.com/share/ae9787424975"}],title:"Chapter 3 Lesson 1: Magnetism, Electromagnetic Induction and Self Induction",concepts:[
"Magnetic Fields: Generated by moving electric charges, long straight wires, circular coils, and solenoids.",
"Lorentz & Laplace Forces: Magnetic forces exerted on individual moving charges (\\( F = |q|vB\\sin\\theta \\)) and straight conductors (\\( F = IBl\\sin\\theta \\)).",
"Electromagnetic Induction: Faraday's law states that an induced emf is produced by a changing magnetic flux (\\( e = -\\frac{d\\Phi}{dt} \\)), with Lenz's law opposing the flux change.",
"Self-Induction: A time-varying current in an inductor induces an opposing back-emf: \\( e = -L\\frac{dI}{dt} \\).",
"RL Circuit (Switch Closed): Current grows exponentially from zero toward maximum steady state: \\( i = I_p\\left(1 - e^{-t/\\tau}\\right) \\).",
"RL Circuit (Switch Opened): Current decays exponentially from peak toward zero: \\( i = I_p e^{-t/\\tau} \\).",
"Time Constant: \\( \\tau = \\frac{L}{R} \\), defining the timescale for inductive current rise (63.2%) and decay (36.8%)."
],definitions:[
{term:"Magnetic Field",definition:"A vector field that surrounds moving electric charges and magnetic dipoles, exerting a magnetic force on other moving charges or currents.",symbol:"B",unit:"\\mathrm{T} \\; (\\text{Tesla})",equation:"B = \\frac{\\mu_0 I}{2\\pi d}"},
{term:"Permeability of Free Space",definition:"A fundamental physical constant that quantifies the ability of a vacuum to support the formation of a magnetic field.",symbol:"\\mu_0",unit:"\\mathrm{T\\cdot m/A} \\;\\text{or}\\; \\mathrm{H/m}",equation:"\\mu_0 = 4\\pi \\times 10^{-7}\\,\\mathrm{T\\cdot m/A}"},
{term:"Magnetic Field of a Straight Wire",definition:"The concentric circular magnetic field produced around a long, straight conductor carrying a steady electric current.",symbol:"B",unit:"\\mathrm{T}",equation:"B = \\frac{\\mu_0 I}{2\\pi d}"},
{term:"Magnetic Field of a Circular Coil",definition:"The concentrated magnetic field formed at the geometric center of a flat circular loop or coil of N turns carrying electric current.",symbol:"B",unit:"\\mathrm{T}",equation:"B = \\frac{\\mu_0 N I}{2 R}"},
{term:"Solenoid",definition:"A long, tightly wound helical coil of insulated wire that produces a strong and uniform interior magnetic field when current flows through it.",symbol:"\\text{Solenoid}",unit:"\\text{No unit}",equation:"B = \\frac{\\mu_0 N I}{l} = \\mu_0 n I"},
{term:"Lorentz Force",definition:"The magnetic deflecting force exerted on a charged particle moving with velocity v through an external magnetic field B.",symbol:"F",unit:"\\mathrm{N}",equation:"F = |q| v B \\sin\\theta"},
{term:"Laplace Force (Wire in B-Field)",definition:"The resultant magnetic force acting on a straight conducting wire carrying current I inside a uniform magnetic field.",symbol:"F",unit:"\\mathrm{N}",equation:"F = I B l \\sin\\theta"},
{term:"Force Between Parallel Wires",definition:"The mutual magnetic force of attraction (for parallel currents) or repulsion (for anti-parallel currents) between two long conductors.",symbol:"F",unit:"\\mathrm{N}",equation:"F = \\frac{\\mu_0 I_1 I_2 l}{2\\pi a}"},
{term:"Cyclotron Motion",definition:"The uniform circular orbital motion executed by a charged particle moving perpendicularly across a uniform magnetic field.",symbol:"R",unit:"\\mathrm{m}",equation:"R = \\frac{m v}{|q| B}"},
{term:"Cyclotron Period",definition:"The time required for a charged particle in a cyclotron to complete one full revolution, which is independent of its speed and radius.",symbol:"T",unit:"\\mathrm{s}",equation:"T = \\frac{2\\pi m}{|q| B}"},
{term:"Magnetic Flux",definition:"The total number of magnetic field lines passing perpendicularly through a given cross-sectional area A.",symbol:"\\Phi",unit:"\\mathrm{Wb} \\; (\\text{Weber})",equation:"\\Phi = N B A \\cos\\theta"},
{term:"Faraday's Law of Induction",definition:"The electromotive force (emf) induced in a closed circuit is directly proportional to the negative time rate of change of magnetic flux through the circuit.",symbol:"E \\text{ or } e",unit:"\\mathrm{V}",equation:"E = -\\frac{\\Delta\\Phi}{\\Delta t}, \\quad e = -\\frac{d\\Phi}{dt}"},
{term:"Lenz's Law",definition:"The physical principle stating that an induced electric current always flows in such a direction that its magnetic effect opposes the change in flux causing it.",symbol:"\\text{Lenz}",unit:"\\text{No unit}",equation:"e = -\\frac{d\\Phi}{dt} \\quad (\\text{negative sign})"},
{term:"Motional EMF",definition:"The voltage induced across the ends of a straight conducting rod moving with velocity v across magnetic field lines.",symbol:"E",unit:"\\mathrm{V}",equation:"E = v B l \\sin\\theta"},
{term:"AC Generator",definition:"A rotating machine that converts mechanical rotational kinetic energy into alternating sinusoidal electromotive force via electromagnetic induction.",symbol:"e(t)",unit:"\\mathrm{V}",equation:"e = N B A \\omega \\sin(\\omega t)"},
{term:"Self-Induction",definition:"The phenomenon where a time-varying electric current in a coil induces a back-emf in the very same coil opposing the current change.",symbol:"e_L",unit:"\\mathrm{V}",equation:"e = -L \\frac{dI}{dt}"},
{term:"Inductance",definition:"The ratio of the self-induced back-emf to the rate of change of current through an inductor, measured in Henries.",symbol:"L",unit:"\\mathrm{H} \\; (\\text{Henry})",equation:"L = \\frac{-e}{dI/dt}"},
{term:"RL Circuit Voltage Equation",definition:"The governing differential loop rule for an inductor-resistor branch, where total applied potential difference equals the resistive ohmic voltage drop plus the self-induced opposing back-emf.",symbol:"V_{AB}",unit:"\\mathrm{V}",equation:"V_{AB} = R i + L \\frac{di}{dt}"},
{term:"RL Circuit Time Constant",definition:"The characteristic time interval required for the current in an inductive circuit to reach approximately 63.2% of its maximum steady-state value upon closing, or decay to 36.8% upon opening.",symbol:"\\tau",unit:"\\mathrm{s}",equation:"\\tau = \\frac{L}{R}"},
{term:"Instantaneous Current (Closed Circuit)",definition:"The time-dependent current that builds up exponentially in an RL circuit after closing the switch, rising from zero toward its steady-state peak value as back-emf diminishes.",symbol:"i",unit:"\\mathrm{A}",equation:"i = I_p \\left(1 - e^{-t/\\tau}\\right) = \\frac{V}{R}\\left(1 - e^{-t/\\tau}\\right)"},
{term:"Instantaneous Current (Opened Circuit)",definition:"The time-dependent current that decays exponentially toward zero in an RL circuit after the switch is opened or power is disconnected, powered by the collapsing magnetic field in the inductor.",symbol:"i",unit:"\\mathrm{A}",equation:"i = I_p e^{-t/\\tau}"},
{term:"LC Oscillation Energy",definition:"The conserved total electromagnetic energy stored alternately in the electric field of the capacitor and the magnetic field of the inductor.",symbol:"E_{CL}",unit:"\\mathrm{J}",equation:"E_{CL} = \\frac{1}{2} C V^2 + \\frac{1}{2} L i^2 = \\text{constant}"},
{term:"LC Resonant Angular Frequency",definition:"The natural angular frequency at which energy continuously oscillates between the capacitor and inductor in an ideal LC circuit.",symbol:"\\omega_0",unit:"\\mathrm{rad/s}",equation:"\\omega_0 = \\frac{1}{\\sqrt{C L}}"}
],
examples:[
{title:"Magnetic Field of a Long Straight Wire",given:"Current \\( I = 5.0\\,\\mathrm{A} \\), distance from wire \\( d = 10\\,\\mathrm{cm} = 0.10\\,\\mathrm{m} \\), \\( \\mu_0 = 4\\pi \\times 10^{-7}\\,\\mathrm{T\\cdot m/A} \\).",find:"Magnetic field (\\( B \\)).",equation:"B = \\frac{\\mu_0 I}{2\\pi d}",solution:"Substitute the values into the formula:<br>\\( B = \\frac{(4\\pi \\times 10^{-7}\\,\\mathrm{T\\cdot m/A}) \\times 5.0\\,\\mathrm{A}}{2\\pi \\times 0.10\\,\\mathrm{m}} = \\frac{2 \\times 10^{-7} \\times 5.0}{0.10} = 1.0 \\times 10^{-5}\\,\\mathrm{T} \\).",finalAnswer:"B = 1.0 \\times 10^{-5}\\,\\mathrm{T} \\; (10\\,\\mu\\mathrm{T})",explanation:"The magnetic field formed around a straight wire decreases inversely with distance, forming concentric cylindrical field lines."},
{title:"Magnetic Field at the Center of a Circular Coil",given:"Number of turns \\( N = 50 \\), coil radius \\( R = 5.0\\,\\mathrm{cm} = 0.050\\,\\mathrm{m} \\), current \\( I = 2.0\\,\\mathrm{A} \\).",find:"Magnetic field at center (\\( B \\)).",equation:"B = \\frac{\\mu_0 N I}{2 R}",solution:"Substitute into circular coil formula:<br>\\( B = \\frac{(4\\pi \\times 10^{-7}) \\times 50 \\times 2.0}{2 \\times 0.050} = \\frac{4\\pi \\times 10^{-7} \\times 100}{0.10} = 4\\pi \\times 10^{-4}\\,\\mathrm{T} \\approx 1.26 \\times 10^{-3}\\,\\mathrm{T} \\).",finalAnswer:"B \\approx 1.26 \\times 10^{-3}\\,\\mathrm{T} \\; (1.26\\,\\mathrm{mT})",explanation:"Winding multiple circular loops reinforces the magnetic field at the center proportionally to the number of turns N."},
{title:"Magnetic Field Inside an Ideal Solenoid",given:"Solenoid length \\( l = 0.40\\,\\mathrm{m} \\), total turns \\( N = 800 \\), current \\( I = 3.0\\,\\mathrm{A} \\).",find:"Internal uniform magnetic field (\\( B \\)).",equation:"B = \\frac{\\mu_0 N I}{l}",solution:"Substitute the parameters:<br>\\( B = \\frac{(4\\pi \\times 10^{-7}) \\times 800 \\times 3.0}{0.40} = (4\\pi \\times 10^{-7}) \\times 2000 \\times 3.0 = 2.4\\pi \\times 10^{-3}\\,\\mathrm{T} \\approx 7.54 \\times 10^{-3}\\,\\mathrm{T} \\).",finalAnswer:"B \\approx 7.54 \\times 10^{-3}\\,\\mathrm{T} \\; (7.54\\,\\mathrm{mT})",explanation:"Inside a long solenoid, the field lines run parallel and uniformly through the core with strength determined by the turns per unit length."},
{title:"Calculating Solenoid Number of Turns from Wire Length",given:"Total insulated copper wire length \\( l' = 62.8\\,\\mathrm{m} \\), solenoid diameter \\( D = 4.0\\,\\mathrm{cm} = 0.040\\,\\mathrm{m} \\).",find:"Number of complete turns (\\( N \\)).",equation:"N = \\frac{l'}{\\pi D}",solution:"Calculate the circumference of one turn (\\( \\pi D \\)):<br>\\( \\pi D = \\pi \\times 0.040\\,\\mathrm{m} \\approx 0.1257\\,\\mathrm{m} \\).<br>Solve for N:<br>\\( N = \\frac{62.8\\,\\mathrm{m}}{\\pi \\times 0.040\\,\\mathrm{m}} = \\frac{62.8}{0.12566} \\approx 500 \\).",finalAnswer:"N = 500 \\text{ turns}",explanation:"Each complete turn around the cylindrical former consumes a wire length equal to the circumference \\( \\pi D \\)."},
{title:"Lorentz Force on a Moving Charged Particle",given:"Proton charge \\( q = +1.6 \\times 10^{-19}\\,\\mathrm{C} \\), velocity \\( v = 2.5 \\times 10^6\\,\\mathrm{m/s} \\), magnetic field \\( B = 0.80\\,\\mathrm{T} \\), injection angle \\( \\theta = 30^\\circ \\).",find:"Magnetic deflecting force (\\( F \\)).",equation:"F = |q| v B \\sin\\theta",solution:"Substitute the given values:<br>\\( F = (1.6 \\times 10^{-19}) \\times (2.5 \\times 10^6) \\times 0.80 \\times \\sin(30^\\circ) \\)<br>\\( F = (4.0 \\times 10^{-13}) \\times 0.80 \\times 0.5 = 1.6 \\times 10^{-13}\\,\\mathrm{N} \\).",finalAnswer:"F = 1.6 \\times 10^{-13}\\,\\mathrm{N}",explanation:"The magnetic force acts strictly perpendicular to the plane formed by velocity and magnetic field vectors."},
{title:"Mutual Magnetic Force Between Parallel Current-Carrying Wires",given:"Current \\( I_1 = 10\\,\\mathrm{A} \\), \\( I_2 = 15\\,\\mathrm{A} \\), wire length \\( l = 2.0\\,\\mathrm{m} \\), separation distance \\( a = 5.0\\,\\mathrm{cm} = 0.050\\,\\mathrm{m} \\).",find:"Force between wires (\\( F \\)).",equation:"F = \\frac{\\mu_0 I_1 I_2 l}{2\\pi a}",solution:"Substitute the values:<br>\\( F = \\frac{(4\\pi \\times 10^{-7}) \\times 10 \\times 15 \\times 2.0}{2\\pi \\times 0.050} = \\frac{2 \\times 10^{-7} \\times 300}{0.050} = 1.2 \\times 10^{-3}\\,\\mathrm{N} \\).",finalAnswer:"F = 1.2 \\times 10^{-3}\\,\\mathrm{N} \\; (1.2\\,\\mathrm{mN})",explanation:"Parallel currents flowing in the same direction attract each other, forming the historical basis for the definition of the Ampere."},
{title:"Magnetic Force on a Current-Carrying Conductor (Laplace Force)",given:"Conductor length \\( l = 0.50\\,\\mathrm{m} \\), current \\( I = 4.0\\,\\mathrm{A} \\), field \\( B = 0.60\\,\\mathrm{T} \\) perpendicular to the wire (\\( \\theta = 90^\\circ \\)).",find:"Magnetic force on the conductor (\\( F \\)).",equation:"F = I B l \\sin\\theta",solution:"With \\( \\sin 90^\\circ = 1.0 \\):<br>\\( F = 4.0\\,\\mathrm{A} \\times 0.60\\,\\mathrm{T} \\times 0.50\\,\\mathrm{m} \\times 1.0 = 1.20\\,\\mathrm{N} \\).",finalAnswer:"F = 1.20\\,\\mathrm{N}",explanation:"The magnetic field exerts a net transverse force on the wire by deflecting all conduction electrons moving through the lattice."},
{title:"Cyclotron Radius of a High-Speed Electron",given:"Electron mass \\( m = 9.11 \\times 10^{-31}\\,\\mathrm{kg} \\), charge \\( |q| = 1.6 \\times 10^{-19}\\,\\mathrm{C} \\), velocity \\( v = 4.0 \\times 10^7\\,\\mathrm{m/s} \\), field \\( B = 0.20\\,\\mathrm{T} \\).",find:"Cyclotron orbit radius (\\( R \\)).",equation:"R = \\frac{m v}{|q| B}",solution:"Substitute the physical parameters:<br>\\( R = \\frac{(9.11 \\times 10^{-31}\\,\\mathrm{kg}) \\times (4.0 \\times 10^7\\,\\mathrm{m/s})}{(1.6 \\times 10^{-19}\\,\\mathrm{C}) \\times 0.20\\,\\mathrm{T}} = \\frac{3.644 \\times 10^{-23}}{3.2 \\times 10^{-20}} \\approx 1.139 \\times 10^{-3}\\,\\mathrm{m} \\).",finalAnswer:"R \\approx 1.14\\,\\mathrm{mm}",explanation:"The magnetic Lorentz force provides the exact centripetal force required to bend the electron into circular orbital motion."},
{title:"Cyclotron Period and Frequency Independence",given:"For the same electron (\\( m = 9.11 \\times 10^{-31}\\,\\mathrm{kg} \\), \\( |q| = 1.6 \\times 10^{-19}\\,\\mathrm{C} \\), \\( B = 0.20\\,\\mathrm{T} \\)).",find:"Period of revolution (\\( T \\)) in the cyclotron.",equation:"T = \\frac{2\\pi m}{|q| B}",solution:"Substitute the values:<br>\\( T = \\frac{2\\pi \\times (9.11 \\times 10^{-31})}{1.6 \\times 10^{-19} \\times 0.20} = \\frac{5.724 \\times 10^{-30}}{3.2 \\times 10^{-20}} \\approx 1.789 \\times 10^{-10}\\,\\mathrm{s} \\).",finalAnswer:"T \\approx 1.79 \\times 10^{-10}\\,\\mathrm{s} \\; (0.179\\,\\mathrm{ns})",explanation:"Remarkably, the orbital period of a particle in a cyclotron is independent of both its orbital radius and its speed."},
{title:"Magnetic Flux Through a Tilted Flat Coil",given:"Coil of \\( N = 100 \\) turns, area \\( A = 0.020\\,\\mathrm{m}^2 \\), \\( B = 0.50\\,\\mathrm{T} \\), angle between field and surface normal \\( \\theta = 60^\\circ \\).",find:"Total magnetic flux (\\( \\Phi \\)).",equation:"\\Phi = N B A \\cos\\theta",solution:"Evaluate with \\( \\cos(60^\\circ) = 0.50 \\):<br>\\( \\Phi = 100 \\times 0.50\\,\\mathrm{T} \\times 0.020\\,\\mathrm{m}^2 \\times 0.50 = 0.50\\,\\mathrm{Wb} \\).",finalAnswer:"\\Phi = 0.50\\,\\mathrm{Wb}",explanation:"Flux measures the total field lines threading the coil area, which diminishes as the coil tilts away from perpendicular alignment."},
{title:"Average Induced EMF (Faraday's Law)",given:"Magnetic flux through a coil drops from \\( \\Phi_1 = 0.80\\,\\mathrm{Wb} \\) to \\( \\Phi_2 = 0.20\\,\\mathrm{Wb} \\) in \\( \\Delta t = 0.15\\,\\mathrm{s} \\).",find:"Average induced emf (\\( E \\)).",equation:"E = -\\frac{\\Delta\\Phi}{\\Delta t} = -\\frac{\\Phi_2 - \\Phi_1}{\\Delta t}",solution:"Calculate flux change: \\( \\Delta\\Phi = 0.20 - 0.80 = -0.60\\,\\mathrm{Wb} \\).<br>Substitute into Faraday's formula:<br>\\( E = -\\frac{-0.60\\,\\mathrm{Wb}}{0.15\\,\\mathrm{s}} = +4.0\\,\\mathrm{V} \\).",finalAnswer:"E = 4.0\\,\\mathrm{V}",explanation:"The negative sign in Faraday's law ensures the induced voltage opposes the collapse of the magnetic flux."},
{title:"Instantaneous Induced EMF from a Time-Varying Flux",given:"Flux changes according to \\( \\Phi(t) = 4t^2 + 2t\\,\\mathrm{Wb} \\).",find:"Magnitude of induced emf at \\( t = 3.0\\,\\mathrm{s} \\).",equation:"e = -\\frac{d\\Phi}{dt}",solution:"1. Take the derivative with respect to time:<br>\\( \\frac{d\\Phi}{dt} = 8t + 2 \\).<br>2. Evaluate at \\( t = 3.0\\,\\mathrm{s} \\):<br>\\( \\frac{d\\Phi}{dt} = 8(3.0) + 2 = 26\\,\\mathrm{Wb/s} \\).<br>3. Induced emf: \\( e = -26\\,\\mathrm{V} \\). Magnitude is 26 V.",finalAnswer:"e = -26\\,\\mathrm{V} \\quad (|e| = 26\\,\\mathrm{V})",explanation:"Instantaneous emf represents the negative instantaneous rate at which magnetic flux cuts through the circuit loop."},
{title:"Motional EMF in a Moving Conductor",given:"A conducting metal rod of length \\( l = 0.60\\,\\mathrm{m} \\) glides across rails at velocity \\( v = 8.0\\,\\mathrm{m/s} \\) through a perpendicular field \\( B = 0.75\\,\\mathrm{T} \\) (\\( \\theta = 90^\\circ \\)).",find:"Motional induced emf (\\( E \\)).",equation:"E = v B l \\sin\\theta",solution:"Substitute the motion values:<br>\\( E = 8.0\\,\\mathrm{m/s} \\times 0.75\\,\\mathrm{T} \\times 0.60\\,\\mathrm{m} \\times 1.0 = 3.60\\,\\mathrm{V} \\).",finalAnswer:"E = 3.60\\,\\mathrm{V}",explanation:"The motion of free electrons with the rod through the magnetic field produces a magnetic Lorentz separation of charges, driving motional emf."},
{title:"Peak and Instantaneous EMF of an AC Generator",given:"Armature coil has \\( N = 200 \\) turns, area \\( A = 0.030\\,\\mathrm{m}^2 \\), \\( B = 0.40\\,\\mathrm{T} \\), rotating at \\( \\omega = 100\\pi\\,\\mathrm{rad/s} \\) (50 Hz).",find:"Peak voltage (\\( E_m \\)) and instantaneous emf at \\( t = 2.5\\,\\mathrm{ms} = 2.5 \\times 10^{-3}\\,\\mathrm{s} \\).",equation:"e = N B A \\omega \\sin(\\omega t) \\implies E_m = N B A \\omega",solution:"1. Calculate peak emf \\( E_m \\):<br>\\( E_m = 200 \\times 0.40 \\times 0.030 \\times 100\\pi = 240\\pi \\approx 753.98\\,\\mathrm{V} \\).<br>2. Evaluate phase at \\( t = 2.5 \\times 10^{-3}\\,\\mathrm{s} \\):<br>\\( \\omega t = 100\\pi \\times 2.5 \\times 10^{-3} = 0.25\\pi = \\frac{\\pi}{4}\\,\\mathrm{rad} = 45^\\circ \\).<br>3. Calculate \\( e \\):<br>\\( e = 753.98 \\times \\sin(45^\\circ) = 753.98 \\times 0.7071 \\approx 533.1\\,\\mathrm{V} \\).",finalAnswer:"E_m \\approx 754\\,\\mathrm{V}, \\quad e(2.5\\,\\mathrm{ms}) \\approx 533\\,\\mathrm{V}",explanation:"Continuous rotation of the coil generates a sinusoidal alternating electromotive force reaching peak amplitude when the coil cuts lines at maximum speed."},
{title:"Self-Induced EMF in an Inductor",given:"Inductance \\( L = 0.25\\,\\mathrm{H} \\). Current changes uniformly from \\( 2.0\\,\\mathrm{A} \\) to \\( 8.0\\,\\mathrm{A} \\) over \\( \\Delta t = 0.050\\,\\mathrm{s} \\).",find:"Self-induced back-emf (\\( E \\)).",equation:"E = -L \\frac{\\Delta I}{\\Delta t}",solution:"Calculate current rate of change:<br>\\( \\frac{\\Delta I}{\\Delta t} = \\frac{8.0 - 2.0}{0.050} = \\frac{6.0}{0.050} = 120\\,\\mathrm{A/s} \\).<br>Calculate back-emf:<br>\\( E = -0.25\\,\\mathrm{H} \\times 120\\,\\mathrm{A/s} = -30.0\\,\\mathrm{V} \\).",finalAnswer:"E = -30.0\\,\\mathrm{V} \\quad (|E| = 30.0\\,\\mathrm{V})",explanation:"The inductor generates a 30 V opposing back-emf that actively resists the rapid increase in circuit current."},
{title:"RL Circuit Differential Voltage Equation",given:"An RL circuit has resistance \\( R = 10\\,\\Omega \\), inductance \\( L = 0.50\\,\\mathrm{H} \\). At a given instant, \\( i = 2.0\\,\\mathrm{A} \\) and current is increasing at \\( \\frac{di}{dt} = 16\\,\\mathrm{A/s} \\).",find:"Total instantaneous voltage across the RL branch (\\( V_{AB} \\)).",equation:"V_{AB} = R i + L \\frac{di}{dt}",solution:"1. Resistor voltage drop: \\( V_R = 10\\,\\Omega \\times 2.0\\,\\mathrm{A} = 20.0\\,\\mathrm{V} \\).<br>2. Inductor voltage drop: \\( V_L = 0.50\\,\\mathrm{H} \\times 16\\,\\mathrm{A/s} = 8.0\\,\\mathrm{V} \\).<br>3. Total voltage: \\( V_{AB} = 20.0\\,\\mathrm{V} + 8.0\\,\\mathrm{V} = 28.0\\,\\mathrm{V} \\).",finalAnswer:"V_{AB} = 28.0\\,\\mathrm{V}",explanation:"The total voltage supplied to the branch balances the ohmic resistive loss plus the self-induced opposing potential."},
{title:"Instantaneous Current (Closed) - RL Current Growth",given:"Battery \\( V = 24\\,\\mathrm{V} \\), \\( R = 12\\,\\Omega \\), \\( L = 0.060\\,\\mathrm{H} \\). Switch closes at \\( t = 0 \\).",find:"Time constant \\( \\tau \\), steady-state peak current \\( I_p \\), and current at \\( t = \\tau \\).",equation:"\\tau = \\frac{L}{R}, \\quad I_p = \\frac{V}{R}, \\quad i(t) = I_p\\left(1 - e^{-t/\\tau}\\right)",solution:"1. Time constant: \\( \\tau = \\frac{0.060\\,\\mathrm{H}}{12\\,\\Omega} = 0.0050\\,\\mathrm{s} = 5.0\\,\\mathrm{ms} \\).<br>2. Peak current: \\( I_p = \\frac{24\\,\\mathrm{V}}{12\\,\\Omega} = 2.0\\,\\mathrm{A} \\).<br>3. Current at \\( t = \\tau \\): \\( i(\\tau) = 2.0 \\times (1 - e^{-1}) = 2.0 \\times (1 - 0.3679) = 2.0 \\times 0.6321 = 1.264\\,\\mathrm{A} \\).",finalAnswer:"\\tau = 5.0\\,\\mathrm{ms}, \\quad I_p = 2.0\\,\\mathrm{A}, \\quad i(\\tau) \\approx 1.26\\,\\mathrm{A}",explanation:"At one time constant, the current grows to approximately 63.2% of its maximum steady-state value."},
{title:"Instantaneous Current (Opened) - RL Current Decay",given:"An inductor carries initial current \\( I_p = 4.0\\,\\mathrm{A} \\) with time constant \\( \\tau = 0.020\\,\\mathrm{s} \\). The power supply is disconnected and circuit discharged through R at \\( t = 0 \\).",find:"Current remaining after \\( t = 0.040\\,\\mathrm{s} \\) (2 time constants).",equation:"i = I_p e^{-t/\\tau}",solution:"1. Exponent: \\( \\frac{t}{\\tau} = \\frac{0.040}{0.020} = 2 \\).<br>2. Calculate decayed current:<br>\\( i = 4.0\\,\\mathrm{A} \\times e^{-2} = 4.0 \\times 0.1353 \\approx 0.541\\,\\mathrm{A} \\).",finalAnswer:"i \\approx 0.54\\,\\mathrm{A}",explanation:"The stored magnetic energy in the inductor sustains current flow as it decays exponentially, releasing heat in the resistor."},
{title:"Energy Conservation in an LC Oscillating Circuit",given:"Capacitor \\( C = 20\\,\\mu\\mathrm{F} = 2.0 \\times 10^{-5}\\,\\mathrm{F} \\), inductor \\( L = 50\\,\\mathrm{mH} = 0.050\\,\\mathrm{H} \\). When capacitor voltage is \\( V = 10\\,\\mathrm{V} \\), the instantaneous circuit current is \\( i = 0.15\\,\\mathrm{A} \\).",find:"Electric energy \\( E_C \\), magnetic energy \\( E_L \\), and total conserved energy \\( E_{CL} \\).",equation:"E_{CL} = \\frac{1}{2} C V^2 + \\frac{1}{2} L i^2",solution:"1. Electric energy: \\( E_C = 0.5 \\times (2.0 \\times 10^{-5}) \\times (10)^2 = 1.0 \\times 10^{-5} \\times 100 = 1.0 \\times 10^{-3}\\,\\mathrm{J} = 1.0\\,\\mathrm{mJ} \\).<br>2. Magnetic energy: \\( E_L = 0.5 \\times 0.050 \\times (0.15)^2 = 0.025 \\times 0.0225 = 5.625 \\times 10^{-4}\\,\\mathrm{J} \\approx 0.56\\,\\mathrm{mJ} \\).<br>3. Total energy: \\( E_{CL} = 1.0\\,\\mathrm{mJ} + 0.56\\,\\mathrm{mJ} = 1.56\\,\\mathrm{mJ} \\).",finalAnswer:"E_C = 1.0\\,\\mathrm{mJ}, \\quad E_L \\approx 0.56\\,\\mathrm{mJ}, \\quad E_{CL} \\approx 1.56\\,\\mathrm{mJ}",explanation:"Total energy remains constant in an ideal LC tank as energy swishes continuously between electric and magnetic forms."},
{title:"Resonant Angular Frequency of an LC Tank Circuit",given:"Capacitance \\( C = 4.0\\,\\mu\\mathrm{F} = 4.0 \\times 10^{-6}\\,\\mathrm{F} \\), inductance \\( L = 25\\,\\mathrm{mH} = 0.025\\,\\mathrm{H} \\).",find:"Resonant angular frequency (\\( \\omega_0 \\)) and frequency in Hertz (\\( f_0 \\)).",equation:"\\omega_0 = \\frac{1}{\\sqrt{C L}}, \\quad f_0 = \\frac{\\omega_0}{2\\pi}",solution:"1. Product CL: \\( C L = (4.0 \\times 10^{-6}) \\times 0.025 = 1.0 \\times 10^{-7}\\,\\mathrm{s}^2 \\).<br>2. Square root: \\( \\sqrt{C L} = \\sqrt{1.0 \\times 10^{-7}} = 3.162 \\times 10^{-4}\\,\\mathrm{s} \\).<br>3. Angular frequency: \\( \\omega_0 = \\frac{1}{3.162 \\times 10^{-4}} \\approx 3162.3\\,\\mathrm{rad/s} \\).<br>4. Cyclic frequency: \\( f_0 = \\frac{3162.3}{2\\pi} \\approx 503.3\\,\\mathrm{Hz} \\).",finalAnswer:"\\omega_0 \\approx 3162\\,\\mathrm{rad/s}, \\quad f_0 \\approx 503\\,\\mathrm{Hz}",explanation:"The resonance frequency defines the natural tuning rate of LC oscillators used in radio transmitters and receivers."}
],
equations:[
{section:"Magnetic Field & Force",name:"Magnetic field (straight wire)<br><img src='images/ch3-l1-eq1.png' style='width:100%; border-radius:8px; margin-top:10px;'>",formula:"\\( B = \\frac{\\mu_0 I}{2\\pi d} \\)",symbols:[{symbol:"B",desc:"Magnetic Field (T)"},{symbol:"\\mu_0",desc:"Permeability of free space (4π×10⁻⁷ T·m/A)"},{symbol:"I",desc:"Current (A)"},{symbol:"d",desc:"Distance from wire (m)"}]},
{section:"Magnetic Field & Force",name:"Magnetic field (circular wire)<br><img src='images/ch3-l1-eq2.png' style='width:100%; border-radius:8px; margin-top:10px;'>",formula:"\\( B = \\frac{\\mu_0 NI}{2R} \\)",symbols:[{symbol:"B",desc:"Magnetic Field (T)"},{symbol:"\\mu_0",desc:"Permeability of free space (4π×10⁻⁷ T·m/A)"},{symbol:"N",desc:"Number of turns (No unit)"},{symbol:"I",desc:"Current (A)"},{symbol:"R",desc:"Radius of coil (m)"}]},
{section:"Magnetic Field & Force",name:"Magnetic field (solenoid)<br><img src='images/ch3-l1-eq3.png' style='width:100%; border-radius:8px; margin-top:10px;'>",formula:"\\( B = \\frac{\\mu_0 NI}{l} \\)",symbols:[{symbol:"B",desc:"Magnetic Field (T)"},{symbol:"\\mu_0",desc:"Permeability of free space (4π×10⁻⁷ T·m/A)"},{symbol:"N",desc:"Number of turns (No unit)"},{symbol:"I",desc:"Current (A)"},{symbol:"l",desc:"Length of solenoid (m)"}]},
{section:"Magnetic Field & Force",name:"Lorentz force<br><img src='images/ch3-l1-eq4.png' style='width:100%; border-radius:8px; margin-top:10px;'>",formula:"\\( F = |q|vB \\sin(v, B) \\)",symbols:[{symbol:"F",desc:"Magnetic Force (N)"},{symbol:"q",desc:"Electric Charge (C)"},{symbol:"v",desc:"Velocity (m/s)"},{symbol:"B",desc:"Magnetic Field (T)"}]},
{section:"Magnetic Field & Force",name:"Two parallel wires<br><img src='images/ch3-l1-eq5.png' style='width:100%; border-radius:8px; margin-top:10px;'>",formula:"\\( F = \\frac{\\mu_0 I_1 I_2 l}{2\\pi a} \\)",symbols:[{symbol:"F",desc:"Magnetic Force (N)"},{symbol:"\\mu_0",desc:"Permeability of free space (4π×10⁻⁷ T·m/A)"},{symbol:"I_1, I_2",desc:"Currents (A)"},{symbol:"l",desc:"Length of wire (m)"},{symbol:"a",desc:"Distance between wires (m)"}]},
{section:"Magnetic Field & Force",name:"Wire in magnetic field<br><img src='images/ch3-l1-eq6.png' style='width:100%; border-radius:8px; margin-top:10px;'>",formula:"\\( F = IBl \\sin(l, B) \\)",symbols:[{symbol:"F",desc:"Magnetic Force on wire (N)"},{symbol:"I",desc:"Current (A)"},{symbol:"B",desc:"Magnetic Field (T)"},{symbol:"l",desc:"Length of wire (m)"}]},
{section:"Magnetic Field & Force",name:"Solenoid number of turns<br><img src='images/ch3-l1-eq7.png' style='width:100%; border-radius:8px; margin-top:10px;'>",formula:"\\( N = \\frac{l'}{\\pi D} \\)",symbols:[{symbol:"N",desc:"Number of turns (No unit)"},{symbol:"l'",desc:"Length of wire (m)"},{symbol:"D",desc:"Diameter of solenoid (m)"}]},
{section:"Cyclotron Path",name:"Cyclotron Radius<br><img src='images/ch3-l1-eq8.png' style='width:100%; border-radius:8px; margin-top:10px;'>",formula:"\\( R = \\frac{mv}{|q|B} \\)",symbols:[{symbol:"R",desc:"Cyclotron Radius (m)"},{symbol:"m",desc:"Mass of particle (kg)"},{symbol:"v",desc:"Velocity (m/s)"},{symbol:"q",desc:"Electric Charge (C)"},{symbol:"B",desc:"Magnetic Field (T)"}]},
{section:"Cyclotron Path",name:"Cyclotron Period<br><img src='images/ch3-l1-eq9.png' style='width:100%; border-radius:8px; margin-top:10px;'>",formula:"\\( T = \\frac{2\\pi m}{|q|B} \\)",symbols:[{symbol:"T",desc:"Period of revolution (s)"},{symbol:"m",desc:"Mass of particle (kg)"},{symbol:"q",desc:"Electric Charge (C)"},{symbol:"B",desc:"Magnetic Field (T)"}]},
{section:"Induced EMF",name:"Magnetic flux<br><img src='images/ch3-l1-eq10.png' style='width:100%; border-radius:8px; margin-top:10px;'>",formula:"\\( \\Phi = NBA \\cos(\\vec{B}, \\vec{n}) \\)",symbols:[{symbol:"\\Phi",desc:"Magnetic Flux (Wb)"},{symbol:"N",desc:"Number of turns (No unit)"},{symbol:"B",desc:"Magnetic Field (T)"},{symbol:"A",desc:"Area (m²)"},{symbol:"n",desc:"Normal vector"}]},
{section:"Induced EMF",name:"Average Induce emf<br><img src='images/ch3-l1-eq11.png' style='width:100%; border-radius:8px; margin-top:10px;'>",formula:"\\( E = -\\frac{\\Delta \\Phi}{\\Delta t} \\)",symbols:[{symbol:"E",desc:"Average Induced emf (V)"},{symbol:"\\Delta \\Phi",desc:"Change in Magnetic Flux (Wb)"},{symbol:"\\Delta t",desc:"Time interval (s)"}]},
{section:"Induced EMF",name:"Magnitude of Induce emf<br><img src='images/ch3-l1-eq12.png' style='width:100%; border-radius:8px; margin-top:10px;'>",formula:"\\( e = -\\frac{d\\Phi}{dt} \\)",symbols:[{symbol:"e",desc:"Instantaneous Induced emf (V)"},{symbol:"d\\Phi",desc:"Infinitesimal change in Magnetic Flux (Wb)"},{symbol:"dt",desc:"Infinitesimal time interval (s)"}]},
{section:"Induced EMF",name:"Moving conductor<br><img src='images/ch3-l1-eq13.png' style='width:100%; border-radius:8px; margin-top:10px;'>",formula:"\\( E = vBl \\sin(v, B) \\)",symbols:[{symbol:"E",desc:"Induced emf (V)"},{symbol:"v",desc:"Velocity (m/s)"},{symbol:"B",desc:"Magnetic Field (T)"},{symbol:"l",desc:"Length of conductor (m)"}]},
{section:"Induced EMF",name:"Generator<br><img src='images/ch3-l1-eq14.png' style='width:100%; border-radius:8px; margin-top:10px;'>",formula:"\\( e = NBA\\omega \\sin(\\omega t) \\)",symbols:[{symbol:"e",desc:"Instantaneous Induced emf (V)"},{symbol:"N",desc:"Number of turns (No unit)"},{symbol:"B",desc:"Magnetic Field (T)"},{symbol:"A",desc:"Area (m²)"},{symbol:"\\omega",desc:"Angular velocity (rad/s)"},{symbol:"t",desc:"Time (s)"}]},
{section:"Self Induction & RL Circuit",name:"Self induced emf<br><img src='images/ch3-l1-eq15.png' style='width:100%; border-radius:8px; margin-top:10px;'>",formula:"\\( E = -L \\frac{\\Delta I}{\\Delta t}, e = -L \\frac{dI}{dt} \\)",symbols:[{symbol:"E",desc:"Average Self-induced emf (V)"},{symbol:"e",desc:"Instantaneous Self-induced emf (V)"},{symbol:"L",desc:"Inductance (H)"},{symbol:"\\Delta I",desc:"Change in Current (A)"},{symbol:"\\Delta t",desc:"Time interval (s)"},{symbol:"dI",desc:"Infinitesimal change in Current (A)"},{symbol:"dt",desc:"Infinitesimal time interval (s)"}]},
{section:"Self Induction & RL Circuit",name:"RL Circuit Voltage Equation<br><img src='images/ch3-l1-eq16.png' style='width:100%; border-radius:8px; margin-top:10px;'>",formula:"\\( V_{AB} = Ri + L\\frac{di}{dt} \\)",symbols:[{symbol:"V_{AB}",desc:"Voltage across RL circuit (V)"},{symbol:"R",desc:"Resistance (Ω)"},{symbol:"i",desc:"Instantaneous current (A)"},{symbol:"L",desc:"Inductance (H)"},{symbol:"di",desc:"Infinitesimal change in Current (A)"},{symbol:"dt",desc:"Infinitesimal time interval (s)"}]},
{section:"Self Induction & RL Circuit",name:"Instantaneous current (closed)<br><img src='images/ch3-l1-eq17.png' style='width:100%; border-radius:8px; margin-top:10px;'>",formula:"\\( i = I_p \\left(1 - e^{-\\frac{t}{\\tau}}\\right) \\)",symbols:[{symbol:"i",desc:"Instantaneous current (A)"},{symbol:"I_p",desc:"Peak Current (A)"},{symbol:"t",desc:"Time (s)"},{symbol:"\\tau",desc:"Time constant (s)"}]},
{section:"Self Induction & RL Circuit",name:"Instantaneous current (opened)<br><img src='images/ch3-l1-eq18.png' style='width:100%; border-radius:8px; margin-top:10px;'>",formula:"\\( i = I_p e^{-\\frac{t}{\\tau}} \\)",symbols:[{symbol:"i",desc:"Instantaneous current (A)"},{symbol:"I_p",desc:"Peak Current (A)"},{symbol:"t",desc:"Time (s)"},{symbol:"\\tau",desc:"Time constant (L/R) (s)"}]},
{section:"LC Oscillation",name:"LC Oscillation Energy<br><img src='images/ch3-l1-eq19.png' style='width:100%; border-radius:8px; margin-top:10px;'>",formula:"\\( E_{CL} = E_C + E_L = \\frac{1}{2}CV^2 + \\frac{1}{2}Li^2 = \\text{const} \\)",symbols:[{symbol:"E_{CL}",desc:"Total Energy (J)"},{symbol:"E_C",desc:"Electric Energy in Capacitor (J)"},{symbol:"E_L",desc:"Magnetic Energy in Inductor (J)"},{symbol:"C",desc:"Capacitance (F)"},{symbol:"V",desc:"Voltage (V)"},{symbol:"L",desc:"Inductance (H)"},{symbol:"i",desc:"Instantaneous current (A)"}]},
{section:"LC Oscillation",name:"Angular frequency (LC)<br><img src='images/ch3-l1-eq20.png' style='width:100%; border-radius:8px; margin-top:10px;'>",formula:"\\( \\omega_0 = \\frac{1}{\\sqrt{CL}} \\)",symbols:[{symbol:"\\omega_0",desc:"Resonant Angular Frequency (rad/s)"},{symbol:"C",desc:"Capacitance (F)"},{symbol:"L",desc:"Inductance (H)"}]}
],flashcards:[
{front:"What is the formula for the Lorentz force on a moving charge?", back:"\\( F = |q|vB \\sin(v, B) \\)"},
{front:"What is Faraday's law for the magnitude of induced emf?", back:"\\( e = -\\frac{d\\Phi}{dt} \\)"},
{front:"What is the formula for the magnetic field of a straight wire?", back:"\\( B = \\frac{\\mu_0 I}{2\\pi d} \\)"},
{front:"What is the force between two parallel current-carrying wires?", back:"\\( F = \\frac{\\mu_0 I_1 I_2 l}{2\\pi a} \\)"},
{front:"What is the formula for Cyclotron Radius?", back:"\\( R = \\frac{mv}{|q|B} \\)"},
{front:"What is the formula for Magnetic flux?", back:"\\( \\Phi = NBA \\cos(\\vec{B}, \\vec{n}) \\)"},
{front:"What is the induced emf in a moving conductor?", back:"\\( E = vBl \\sin(v, B) \\)"},
{front:"What is the self-induced emf in an inductor?", back:"\\( e = -L \\frac{dI}{dt} \\)"},
{front:"What is the RL Circuit Voltage Equation?", back:"\\( V_{AB} = Ri + L\\frac{di}{dt} \\)"},
{front:"What is the angular frequency of an LC Oscillation?", back:"\\( \\omega_0 = \\frac{1}{\\sqrt{CL}} \\)"}
],quiz:[
{question:"What is the magnetic field at the center of a circular wire with \\(N\\) turns?", options:["\\( B = \\frac{\\mu_0 I}{2\\pi R} \\)","\\( B = \\frac{\\mu_0 NI}{2R} \\)","\\( B = \\frac{\\mu_0 NI}{l} \\)","\\( B = \\mu_0 NI \\)"], correctIndex:1, feedback:"For a circular wire or coil, \\( B = \\frac{\\mu_0 NI}{2R} \\)."},
{question:"What happens to the total energy in an ideal LC oscillation?", options:["It decays exponentially","It alternates between positive and negative","It remains constant (\\( E_C + E_L = \\text{const} \\))","It increases continuously"], correctIndex:2, feedback:"In an ideal LC circuit, energy oscillates between the capacitor and inductor but the total is constant."},
{question:"The Lorentz force on a moving charge is:", options:["\\( F = qE \\)","\\( F = \\frac{\\mu_0 I_1 I_2 l}{2\\pi a} \\)","\\( F = |q|vB \\sin(v, B) \\)","\\( F = IBl \\sin(l, B) \\)"], correctIndex:2, feedback:"The magnetic Lorentz force depends on charge, velocity, magnetic field, and the angle between \\(v\\) and \\(B\\)."},
{question:"In a cyclotron, the radius of the particle's path is proportional to:", options:["Its charge","The magnetic field","Its mass and velocity","Its acceleration"], correctIndex:2, feedback:"\\( R = \\frac{mv}{|q|B} \\), so it is directly proportional to mass \\(m\\) and velocity \\(v\\)."},
{question:"Magnetic flux \\(\\Phi\\) is maximized when the angle between the normal vector \\(\\vec{n}\\) and magnetic field \\(\\vec{B}\\) is:", options:["0°","45°","90°","180°"], correctIndex:0, feedback:"Cosine is maximum (1) when the angle is 0° (meaning the field is perpendicular to the surface area)."},
{question:"The self-induced emf in an inductor is proportional to:", options:["The current \\(I\\)","The voltage \\(V\\)","The rate of change of current \\(dI/dt\\)","The resistance \\(R\\)"], correctIndex:2, feedback:"\\( e = -L \\frac{dI}{dt} \\)."},
{question:"Which formula gives the induced emf in a straight moving conductor?", options:["\\( E = -\\frac{\\Delta \\Phi}{\\Delta t} \\)","\\( E = vBl \\sin(v, B) \\)","\\( E = NBA\\omega \\sin(\\omega t) \\)","\\( E = -L \\frac{\\Delta I}{\\Delta t} \\)"], correctIndex:1, feedback:"For a moving rod/conductor of length \\(l\\), \\( E = vBl \\sin(v, B) \\)."},
{question:"In an RL circuit with a switch that just closed, the current:", options:["Drops to zero immediately","Increases exponentially to a maximum","Is constant","Oscillates indefinitely"], correctIndex:1, feedback:"Current builds up exponentially according to \\( i = I_p (1 - e^{-t/\\tau}) \\)."},
{question:"The resonant angular frequency of an LC circuit is:", options:["\\( \\sqrt{CL} \\)","\\( \\frac{1}{CL} \\)","\\( \\frac{1}{\\sqrt{CL}} \\)","\\( \\frac{C}{L} \\)"], correctIndex:2, feedback:"The frequency is given by \\( \\omega_0 = \\frac{1}{\\sqrt{CL}} \\)."},
{question:"The force between two parallel current-carrying wires depends inversely on:", options:["The length of the wires","The currents \\(I_1\\) and \\(I_2\\)","The permeability \\(\\mu_0\\)","The distance between them \\(a\\)"], correctIndex:3, feedback:"\\( F = \\frac{\\mu_0 I_1 I_2 l}{2\\pi a} \\), so it is inversely proportional to distance \\(a\\)."}
]},
{id:"g12-l6",gifUrl:"https://commons.wikimedia.org/wiki/Special:FilePath/Alternating_current_ani.gif",worksheetUrl:"worksheets/ch3-l2-worksheet.pdf",games:[{topic:"Alternating Current",url:"https://gemini.google.com/share/0c850ab5a53b"}],title:"Chapter 3 Lesson 2: Alternating Currents",concepts:["Alternating Current & Voltage: Sinusoidal waveforms characterized by peak and RMS values: \\( I = \\frac{I_m}{\\sqrt{2}} \\), \\( V = \\frac{V_m}{\\sqrt{2}} \\).","Reactance in AC Circuits: Inductors resist AC via inductive reactance \\( Z_L = L\\omega \\); capacitors resist via capacitive reactance \\( Z_C = \\frac{1}{C\\omega} \\).","RLC Series Impedance: Total opposition to current given by \\( Z = \\sqrt{R^2 + (Z_L - Z_C)^2} \\), with Ohm's law \\( I = \\frac{V}{Z} \\).","Phase Angle & Power Factor: Phase difference \\( \\tan\\phi = \\frac{Z_L - Z_C}{R} \\), with true average power \\( P = VI\\cos\\phi \\).","RLC Series Circuit Diagram<br><img src='images/ch3-l2-rlc-circuit.png' style='width:100%; border-radius:8px; margin-top:10px;'>"],definitions:[
{term:"Alternating Current (AC)",definition:"Electric current that periodically reverses its direction and continuously fluctuates in magnitude sinusoidally with time.",symbol:"i(t)",unit:"\\mathrm{A}",equation:"i = i_m \\sin(\\omega t + \\phi_0)"},
{term:"Peak Current (Current Amplitude)",definition:"The maximum instantaneous current magnitude reached in either half-cycle of an AC waveform.",symbol:"i_m \\text{ or } I_m",unit:"\\mathrm{A}",equation:"I_m = \\sqrt{2} \\times I"},
{term:"Root Mean Square Current (RMS Current)",definition:"The effective DC-equivalent value of alternating current that produces the identical heating power in a given resistor.",symbol:"I",unit:"\\mathrm{A}",equation:"I = \\frac{I_m}{\\sqrt{2}} \\approx 0.7071 \\, I_m"},
{term:"Peak Voltage (Voltage Amplitude)",definition:"The maximum instantaneous potential difference attained during an AC cycle.",symbol:"V_m",unit:"\\mathrm{V}",equation:"V_m = \\sqrt{2} \\times V"},
{term:"Root Mean Square Voltage (RMS Voltage)",definition:"The effective value of alternating voltage that delivers the equivalent energy to a purely resistive load as a constant DC voltage.",symbol:"V",unit:"\\mathrm{V}",equation:"V = \\frac{V_m}{\\sqrt{2}} \\approx 0.7071 \\, V_m"},
{term:"AC Ohm's Law",definition:"The general relation connecting voltage, current, and impedance in an alternating current circuit.",symbol:"I = \\frac{V}{Z}",unit:"\\mathrm{A}",equation:"I = \\frac{V}{Z}, \\quad I_m = \\frac{V_m}{Z}"},
{term:"Inductive Reactance",definition:"The opposition presented to alternating current flow by an inductor due to its self-induced opposing back-emf.",symbol:"Z_L \\text{ or } X_L",unit:"\\Omega",equation:"Z_L = L\\omega = 2\\pi f L"},
{term:"Capacitive Reactance",definition:"The opposition presented to alternating current flow by a capacitor due to the alternating build-up of electric charge across its plates.",symbol:"Z_C \\text{ or } X_C",unit:"\\Omega",equation:"Z_C = \\frac{1}{C\\omega} = \\frac{1}{2\\pi f C}"},
{term:"Impedance",definition:"The total comprehensive opposition offered by a combined circuit (resistance, inductance, and capacitance) to alternating current.",symbol:"Z",unit:"\\Omega",equation:"Z = \\sqrt{R^2 + (Z_L - Z_C)^2}"},
{term:"Phase Angle",definition:"The phase difference angle between the applied alternating voltage waveform and the resulting alternating current waveform.",symbol:"\\phi",unit:"\\mathrm{rad} \\;\\text{or}\\; {^\\circ}",equation:"\\tan\\phi = \\frac{Z_L - Z_C}{R}"},
{term:"Power Factor",definition:"The ratio of the true active electrical power dissipated in a circuit to the apparent power, equal to the cosine of the phase angle.",symbol:"\\cos\\phi",unit:"\\text{No unit}",equation:"\\cos\\phi = \\frac{R}{Z} = \\frac{P}{VI}"},
{term:"Average Active Power",definition:"The true time-averaged electrical power actually consumed or transformed into thermal/mechanical work in an AC circuit.",symbol:"P",unit:"\\mathrm{W}",equation:"P = V I \\cos\\phi"},
{term:"Transformer Turn Ratio",definition:"The ratio of the number of turns in the secondary winding to the primary winding, governing the factor of voltage transformation.",symbol:"K",unit:"\\text{No unit}",equation:"K = \\frac{V_2}{V_1} = \\frac{n_2}{n_1}"}
],
examples:[
{title:"Instantaneous AC Current Evaluation",given:"An alternating current is defined by \\( i(t) = 10\\sin(100\\pi t + \\frac{\\pi}{6})\\,\\mathrm{A} \\).",find:"Peak current (\\( i_m \\)), frequency (\\( f \\)), and instantaneous current at \\( t = 0\\,\\mathrm{s} \\).",equation:"i = i_m \\sin(\\omega t + \\phi_0)",solution:"1. Peak current: \\( i_m = 10\\,\\mathrm{A} \\).<br>2. Angular frequency \\( \\omega = 100\\pi\\,\\mathrm{rad/s} \\implies f = \\frac{100\\pi}{2\\pi} = 50\\,\\mathrm{Hz} \\).<br>3. Instantaneous current at \\( t = 0 \\):<br>\\( i(0) = 10 \\sin(0 + \\frac{\\pi}{6}) = 10 \\sin(30^\\circ) = 10 \\times 0.5 = 5.0\\,\\mathrm{A} \\).",finalAnswer:"i_m = 10\\,\\mathrm{A}, \\quad f = 50\\,\\mathrm{Hz}, \\quad i(0) = 5.0\\,\\mathrm{A}",explanation:"The initial phase angle \\( \\pi/6 \\) gives the current an initial positive non-zero value at time zero."},
{title:"RMS and Peak Current Conversion",given:"An AC electric kettle draws an RMS current of \\( I = 6.0\\,\\mathrm{A} \\).",find:"Peak current (\\( I_m \\)) passing through the heating element.",equation:"I = \\frac{I_m}{\\sqrt{2}} \\implies I_m = I \\sqrt{2}",solution:"Multiply the RMS current by \\( \\sqrt{2} \\approx 1.414 \\):<br>\\( I_m = 6.0\\,\\mathrm{A} \\times 1.4142 \\approx 8.485\\,\\mathrm{A} \\).",finalAnswer:"I_m \\approx 8.49\\,\\mathrm{A}",explanation:"Because the current oscillates sinusoidally, its instantaneous peak rises 41.4% higher than the rated effective heating value."},
{title:"RMS and Peak Voltage Conversion",given:"A household power outlet has a rated RMS voltage \\( V = 230\\,\\mathrm{V} \\).",find:"Peak voltage (\\( V_m \\)).",equation:"V = \\frac{V_m}{\\sqrt{2}} \\implies V_m = V \\sqrt{2}",solution:"Calculate the peak voltage:<br>\\( V_m = 230\\,\\mathrm{V} \\times \\sqrt{2} \\approx 230 \\times 1.4142 = 325.27\\,\\mathrm{V} \\).",finalAnswer:"V_m \\approx 325\\,\\mathrm{V}",explanation:"A nominal 230 V AC mains supply actually swings between peak potentials of +325 V and -325 V during every cycle."},
{title:"AC Ohm's Law and Circuit Current",given:"An AC circuit with total impedance \\( Z = 50\\,\\Omega \\) is powered by an RMS voltage source \\( V = 120\\,\\mathrm{V} \\).",find:"RMS current (\\( I \\)) and peak current (\\( I_m \\)).",equation:"I = \\frac{V}{Z}, \\quad I_m = \\frac{V_m}{Z} = I\\sqrt{2}",solution:"1. RMS current:<br>\\( I = \\frac{120\\,\\mathrm{V}}{50\\,\\Omega} = 2.40\\,\\mathrm{A} \\).<br>2. Peak current:<br>\\( I_m = 2.40 \\times \\sqrt{2} \\approx 3.39\\,\\mathrm{A} \\).",finalAnswer:"I = 2.40\\,\\mathrm{A}, \\quad I_m \\approx 3.39\\,\\mathrm{A}",explanation:"Ohm's law applies directly in AC circuits when resistance is generalized to the complete circuit impedance Z."},
{title:"RLC Series Circuit Maximum Voltage Addition",given:"Peak voltages measured across individual components: \\( V_{Rm} = 40\\,\\mathrm{V} \\), \\( V_{Lm} = 70\\,\\mathrm{V} \\), \\( V_{Cm} = 40\\,\\mathrm{V} \\).",find:"Total peak source voltage (\\( V_m \\)).",equation:"V_m = \\sqrt{V_{Rm}^2 + (V_{Lm} - V_{Cm})^2}",solution:"1. Compute reactive difference: \\( V_{Lm} - V_{Cm} = 70\\,\\mathrm{V} - 40\\,\\mathrm{V} = 30\\,\\mathrm{V} \\).<br>2. Vector sum via Pythagoras:<br>\\( V_m = \\sqrt{(40)^2 + (30)^2} = \\sqrt{1600 + 900} = \\sqrt{2500} = 50.0\\,\\mathrm{V} \\).",finalAnswer:"V_m = 50.0\\,\\mathrm{V}",explanation:"Voltages in an AC series circuit are out of phase by 90° and must be combined vectorially using phasors rather than simple scalar addition."},
{title:"RLC Series Circuit RMS Voltage Addition",given:"RMS component voltages: \\( V_R = 120\\,\\mathrm{V} \\), \\( V_L = 160\\,\\mathrm{V} \\), \\( V_C = 70\\,\\mathrm{V} \\).",find:"Total applied RMS voltage (\\( V \\)).",equation:"V = \\sqrt{V_R^2 + (V_L - V_C)^2}",solution:"1. Net reactive voltage: \\( V_L - V_C = 160\\,\\mathrm{V} - 70\\,\\mathrm{V} = 90\\,\\mathrm{V} \\).<br>2. Total RMS voltage:<br>\\( V = \\sqrt{(120)^2 + (90)^2} = \\sqrt{14400 + 8100} = \\sqrt{22500} = 150.0\\,\\mathrm{V} \\).",finalAnswer:"V = 150.0\\,\\mathrm{V}",explanation:"Scalar addition gives 120 + 160 + 70 = 350 V, but the true physical RMS supply voltage is only 150 V due to phase opposition between L and C."},
{title:"Inductive and Capacitive Reactance",given:"AC frequency \\( f = 50\\,\\mathrm{Hz} \\) (\\( \\omega = 2\\pi \\times 50 = 100\\pi \\approx 314.16\\,\\mathrm{rad/s} \\)), inductor \\( L = 0.20\\,\\mathrm{H} \\), capacitor \\( C = 50\\,\\mu\\mathrm{F} = 5.0 \\times 10^{-5}\\,\\mathrm{F} \\).",find:"Inductive reactance (\\( Z_L \\)) and capacitive reactance (\\( Z_C \\)).",equation:"Z_L = L\\omega, \\quad Z_C = \\frac{1}{C\\omega}",solution:"1. Inductive reactance:<br>\\( Z_L = 0.20 \\times 314.16 = 62.83\\,\\Omega \\).<br>2. Capacitive reactance:<br>\\( Z_C = \\frac{1}{(5.0 \\times 10^{-5}) \\times 314.16} = \\frac{1}{0.015708} \\approx 63.66\\,\\Omega \\).",finalAnswer:"Z_L \\approx 62.8\\,\\Omega, \\quad Z_C \\approx 63.7\\,\\Omega",explanation:"Inductive reactance increases with frequency whereas capacitive reactance decreases inversely with frequency."},
{title:"Total Impedance of an RLC Series Circuit",given:"Resistance \\( R = 40\\,\\Omega \\), inductive reactance \\( Z_L = 100\\,\\Omega \\), capacitive reactance \\( Z_C = 70\\,\\Omega \\).",find:"Total circuit impedance (\\( Z \\)).",equation:"Z = \\sqrt{R^2 + (Z_L - Z_C)^2}",solution:"1. Net reactance: \\( Z_L - Z_C = 100\\,\\Omega - 70\\,\\Omega = 30\\,\\Omega \\).<br>2. Compute impedance:<br>\\( Z = \\sqrt{(40)^2 + (30)^2} = \\sqrt{1600 + 900} = \\sqrt{2500} = 50.0\\,\\Omega \\).",finalAnswer:"Z = 50.0\\,\\Omega",explanation:"The impedance triangle combines ohmic resistance with net reactance at right angles to find total opposition."},
{title:"Phase Angle and Power Factor in an RLC Circuit",given:"Resistance \\( R = 40\\,\\Omega \\), net reactance \\( Z_L - Z_C = 30\\,\\Omega \\), impedance \\( Z = 50\\,\\Omega \\).",find:"Phase angle (\\( \\phi \\)) and power factor (\\( \\cos\\phi \\)).",equation:"\\tan\\phi = \\frac{Z_L - Z_C}{R}, \\quad \\cos\\phi = \\frac{R}{Z}",solution:"1. Phase angle: \\( \\tan\\phi = \\frac{30}{40} = 0.75 \\implies \\phi = \\tan^{-1}(0.75) \\approx 36.87^\\circ \\).<br>2. Power factor: \\( \\cos\\phi = \\cos(36.87^\\circ) = \\frac{40}{50} = 0.80 \\).",finalAnswer:"\\phi \\approx 36.9^\\circ \\text{ (Current lags voltage)}, \\quad \\cos\\phi = 0.80",explanation:"A positive phase angle indicates the circuit is inductive, causing voltage to lead the current by 36.9° with an 80% power factor."},
{title:"Average Active Power Consumption",given:"RMS voltage \\( V = 220\\,\\mathrm{V} \\), RMS current \\( I = 5.0\\,\\mathrm{A} \\), power factor \\( \\cos\\phi = 0.80 \\).",find:"Average active power (\\( P \\)).",equation:"P = V I \\cos\\phi",solution:"Multiply the values:<br>\\( P = 220\\,\\mathrm{V} \\times 5.0\\,\\mathrm{A} \\times 0.80 = 1100 \\times 0.80 = 880\\,\\mathrm{W} \\).",finalAnswer:"P = 880\\,\\mathrm{W}",explanation:"Even though the apparent power is \\( 220 \\times 5 = 1100\\,\\mathrm{VA} \\), only 880 W of real power is transformed into heat and useful mechanical work."},
{title:"Transformer Turn Ratio and Secondary Voltage",given:"A step-down transformer has primary turns \\( n_1 = 1200 \\), secondary turns \\( n_2 = 120 \\), primary voltage \\( V_1 = 240\\,\\mathrm{V} \\).",find:"Turn ratio (\\( K \\)) and secondary voltage (\\( V_2 \\)).",equation:"K = \\frac{n_2}{n_1} = \\frac{V_2}{V_1} \\implies V_2 = K V_1",solution:"1. Turn ratio: \\( K = \\frac{120}{1200} = 0.10 \\).<br>2. Secondary voltage:<br>\\( V_2 = 0.10 \\times 240\\,\\mathrm{V} = 24.0\\,\\mathrm{V} \\).",finalAnswer:"K = 0.10, \\quad V_2 = 24.0\\,\\mathrm{V}",explanation:"With one-tenth as many secondary turns, the secondary output voltage is reduced to one-tenth of the primary input voltage."}
],
equations:[
{section:"AC Basics",name:"Instantaneous current<br><img src='images/ch3-l2-eq1.png' style='width:100%; border-radius:8px; margin-top:10px;'>",formula:"\\( i = i_m \\sin(\\omega t + \\phi_0) \\)",symbols:[{symbol:"i",desc:"Instantaneous current (A)"},{symbol:"i_m",desc:"Peak current (A)"},{symbol:"\\omega",desc:"Angular frequency (rad/s)"},{symbol:"t",desc:"Time (s)"},{symbol:"\\phi_0",desc:"Initial phase angle (rad)"}]},
{section:"AC Basics",name:"RMS Current<br><img src='images/ch3-l2-eq2.png' style='width:100%; border-radius:8px; margin-top:10px;'>",formula:"\\( I = \\frac{I_m}{\\sqrt{2}} \\)",symbols:[{symbol:"I",desc:"Root Mean Square Current (A)"},{symbol:"I_m",desc:"Peak current (A)"}]},
{section:"AC Basics",name:"RMS Voltage<br><img src='images/ch3-l2-eq3.png' style='width:100%; border-radius:8px; margin-top:10px;'>",formula:"\\( V = \\frac{V_m}{\\sqrt{2}} \\)",symbols:[{symbol:"V",desc:"Root Mean Square Voltage (V)"},{symbol:"V_m",desc:"Peak voltage (V)"}]},
{section:"AC Basics",name:"Ohm's law<br><img src='images/ch3-l2-eq4.png' style='width:100%; border-radius:8px; margin-top:10px;'>",formula:"\\( I = \\frac{V}{Z}, I_m = \\frac{V_m}{Z} \\)",symbols:[{symbol:"I",desc:"RMS Current (A)"},{symbol:"V",desc:"RMS Voltage (V)"},{symbol:"Z",desc:"Impedance (Ω)"},{symbol:"I_m",desc:"Peak Current (A)"},{symbol:"V_m",desc:"Peak Voltage (V)"}]},
{section:"RLC Series Circuit",name:"RLC Maximum voltage<br><img src='images/ch3-l2-eq5.png' style='width:100%; border-radius:8px; margin-top:10px;'>",formula:"\\( V_m = \\sqrt{V_{Rm}^2 + (V_{Lm} - V_{Cm})^2} \\)",symbols:[{symbol:"V_m",desc:"Peak Voltage (V)"},{symbol:"V_{Rm}, V_{Lm}, V_{Cm}",desc:"Peak voltage across R, L, C (V)"}]},
{section:"RLC Series Circuit",name:"RLC RMS voltage<br><img src='images/ch3-l2-eq6.png' style='width:100%; border-radius:8px; margin-top:10px;'>",formula:"\\( V = \\sqrt{V_R^2 + (V_L - V_C)^2} \\)",symbols:[{symbol:"V",desc:"RMS Voltage (V)"},{symbol:"V_R, V_L, V_C",desc:"RMS voltage across R, L, C (V)"}]},
{section:"RLC Series Circuit",name:"Impedance Z<br><img src='images/ch3-l2-eq7.png' style='width:100%; border-radius:8px; margin-top:10px;'>",formula:"\\( Z = \\sqrt{R^2 + (Z_L - Z_C)^2} = \\sqrt{R^2 + \\left(L\\omega - \\frac{1}{C\\omega}\\right)^2} \\)",symbols:[{symbol:"Z",desc:"Impedance (Ω)"},{symbol:"R",desc:"Resistance (Ω)"},{symbol:"Z_L",desc:"Inductive Reactance (Ω)"},{symbol:"Z_C",desc:"Capacitive Reactance (Ω)"},{symbol:"L",desc:"Inductance (H)"},{symbol:"\\omega",desc:"Angular frequency (rad/s)"},{symbol:"C",desc:"Capacitance (F)"}]},
{section:"RLC Series Circuit",name:"Phase Angle<br><img src='images/ch3-l2-eq8.png' style='width:100%; border-radius:8px; margin-top:10px;'>",formula:"\\( \\tan \\phi = \\frac{Z_L - Z_C}{R} \\)",symbols:[{symbol:"\\phi",desc:"Phase angle between voltage & current (rad)"},{symbol:"Z_L",desc:"Inductive Reactance (Ω)"},{symbol:"Z_C",desc:"Capacitive Reactance (Ω)"},{symbol:"R",desc:"Resistance (Ω)"}]},
{section:"RLC Series Circuit",name:"Power<br><img src='images/ch3-l2-eq9.png' style='width:100%; border-radius:8px; margin-top:10px;'>",formula:"\\( P = VI \\cos \\phi \\)",symbols:[{symbol:"P",desc:"Average Power (W)"},{symbol:"V",desc:"RMS Voltage (V)"},{symbol:"I",desc:"RMS Current (A)"},{symbol:"\\cos \\phi",desc:"Power factor (No unit)"}]},
{section:"Transformers",name:"Transformers Turn ratio<br><img src='images/ch3-l2-eq10.png' style='width:100%; border-radius:8px; margin-top:10px;'>",formula:"\\( K = \\frac{V_2}{V_1} = \\frac{n_2}{n_1} \\)",symbols:[{symbol:"K",desc:"Transformer Turn Ratio (No unit)"},{symbol:"V_1, V_2",desc:"Primary/Secondary Voltage (V)"},{symbol:"n_1, n_2",desc:"Primary/Secondary Turns"}]}
],flashcards:[
{front:"What is the formula for instantaneous current?", back:"\\( i = i_m \\sin(\\omega t + \\phi_0) \\)"},
{front:"What is the formula for RMS Current?", back:"\\( I = \\frac{I_m}{\\sqrt{2}} \\)"},
{front:"What is the formula for RMS Voltage?", back:"\\( V = \\frac{V_m}{\\sqrt{2}} \\)"},
{front:"What is Ohm's law for AC circuits?", back:"\\( I = \\frac{V}{Z} \\)"},
{front:"What is the RLC Maximum voltage formula?", back:"\\( V_m = \\sqrt{V_{Rm}^2 + (V_{Lm} - V_{Cm})^2} \\)"},
{front:"What is the RLC RMS voltage formula?", back:"\\( V = \\sqrt{V_R^2 + (V_L - V_C)^2} \\)"},
{front:"What is the formula for Impedance \\( Z \\)?", back:"\\( Z = \\sqrt{R^2 + (Z_L - Z_C)^2} \\)"},
{front:"What is the formula for the Phase Angle?", back:"\\( \\tan \\phi = \\frac{Z_L - Z_C}{R} \\)"},
{front:"What is the average Power in an RLC circuit?", back:"\\( P = VI \\cos \\phi \\)"},
{front:"What is the formula for the Transformer Turn Ratio \\(K\\)?", back:"\\( K = \\frac{V_2}{V_1} = \\frac{n_2}{n_1} \\)"}
],quiz:[
{question:"In an RLC series circuit, what is the formula for Impedance (\\(Z\\))?", options:["\\( Z = R + Z_L + Z_C \\)","\\( Z = \\sqrt{R^2 + (Z_L - Z_C)^2} \\)","\\( Z = \\sqrt{R^2 + (Z_L + Z_C)^2} \\)","\\( Z = R^2 + L^2 + C^2 \\)"], correctIndex:1, feedback:"Impedance is calculated as \\( \\sqrt{R^2 + (Z_L - Z_C)^2} \\)."},
{question:"What does the phase angle \\(\\phi\\) represent in an AC circuit?", options:["Angle between voltage and current","Phase of the peak current only","Angular frequency of the circuit","Transformer turn ratio"], correctIndex:0, feedback:"The phase angle \\(\\phi\\) describes the phase difference between the voltage and the current."},
{question:"The RMS voltage is related to peak voltage by:", options:["\\( V = V_m / 2 \\)","\\( V = V_m / \\sqrt{2} \\)","\\( V = V_m \\times \\sqrt{2} \\)","\\( V = V_m \\)"], correctIndex:1, feedback:"RMS values are peak values divided by \\( \\sqrt{2} \\)."},
{question:"Ohm's Law for an AC circuit is written as:", options:["\\( I = V / R \\)","\\( I = V / Z \\)","\\( I = V \\times Z \\)","\\( I = V - Z \\)"], correctIndex:1, feedback:"In AC circuits, resistance \\( R \\) is replaced by total impedance \\( Z \\)."},
{question:"In the power formula \\( P = VI \\cos \\phi \\), the term \\( \\cos \\phi \\) is called:", options:["Power factor","Impedance factor","Phase factor","Loss factor"], correctIndex:0, feedback:"It indicates how much of the apparent power is actually used (average power)."},
{question:"Inductive reactance \\( Z_L \\) is given by:", options:["\\( 1 / L\\omega \\)","\\( L\\omega \\)","\\( L / \\omega \\)","\\( \\omega / L \\)"], correctIndex:1, feedback:"\\( Z_L = L\\omega \\)."},
{question:"Capacitive reactance \\( Z_C \\) is given by:", options:["\\( 1 / C\\omega \\)","\\( C\\omega \\)","\\( C / \\omega \\)","\\( \\omega / C \\)"], correctIndex:0, feedback:"\\( Z_C = 1 / C\\omega \\)."},
{question:"For an ideal transformer, the turn ratio \\( K \\) equals:", options:["\\( n_1 / n_2 \\)","\\( n_2 / n_1 \\)","\\( V_1 / V_2 \\)","\\( I_2 / I_1 \\)"], correctIndex:1, feedback:"The ratio is secondary turns over primary turns, \\( n_2 / n_1 \\)."},
{question:"At resonance in an RLC circuit (where \\( Z_L = Z_C \\)), the impedance \\( Z \\) is:", options:["Zero","Infinite","Equal to the resistance \\( R \\)","\\( R^2 \\)"], correctIndex:2, feedback:"When \\( Z_L = Z_C \\), the reactive parts cancel, leaving \\( Z = \\sqrt{R^2 + 0} = R \\)."},
{question:"The instantaneous current is \\( i = i_m \\sin(\\omega t + \\phi_0) \\). What is \\( i_m \\)?", options:["RMS current","Average current","Peak current","Initial current"], correctIndex:2, feedback:"\\( i_m \\) is the maximum or peak amplitude of the current."}
]},
{
id:"g12-ch4-l1",gifUrl:"https://commons.wikimedia.org/wiki/Special:FilePath/PnJunction-LED-animation.gif",worksheetUrl:"worksheets/ch4-l1-worksheet.pdf",games:[{topic:"Semiconductors & Transistors",url:"https://gemini.google.com/share/9c33959ceba4"}],title:"Chapter 4 Lesson 1: Semiconductors & Transistors",
concepts:[
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
definitions:[
{term:"Electrical Resistance",definition:"The opposition that a substance or conductor presents to the flow of electric current.",symbol:"R",unit:"\\Omega",equation:"R = \\rho\\frac{l}{A}"},
{term:"Electrical Resistivity",definition:"An intrinsic property of a material measuring its fundamental opposition to electric current per unit length and cross-sectional area.",symbol:"\\rho",unit:"\\Omega\\cdot\\mathrm{m}",equation:"\\rho = \\frac{RA}{l}"},
{term:"Intrinsic Semiconductor",definition:"A pure, undoped crystalline semiconductor (such as pure Si or Ge) where electrical conduction arises solely from thermally generated electron-hole pairs.",symbol:"n_i",unit:"\\mathrm{m^{-3}}",equation:"n_e = n_h = n_i"},
{term:"Doping",definition:"The controlled addition of pentavalent or trivalent impurity atoms into an intrinsic semiconductor crystal to greatly increase conductivity.",symbol:"\\text{Doping}",unit:"No SI unit",equation:"n_e \\approx N_D \\quad\\text{or}\\quad n_h \\approx N_A"},
{term:"N-Type Semiconductor",definition:"An extrinsic semiconductor doped with pentavalent donor impurities where conduction is dominated by negative free electrons (majority carriers).",symbol:"\\text{N-type}",unit:"No SI unit",equation:"n_e \\gg n_h"},
{term:"P-Type Semiconductor",definition:"An extrinsic semiconductor doped with trivalent acceptor impurities where conduction is dominated by positive holes (majority carriers).",symbol:"\\text{P-type}",unit:"No SI unit",equation:"n_h \\gg n_e"},
{term:"P–N Junction",definition:"The metallurgical boundary interface formed between adjacent P-type and N-type regions within a single semiconductor crystal.",symbol:"\\text{P-N}",unit:"No SI unit",equation:"V_0 \\approx 0.7\\,\\mathrm{V} \\; (\\text{Si})"},
{term:"Depletion Region",definition:"The narrow zone adjacent to a P-N junction that is depleted of mobile charge carriers, containing only fixed ionized donor and acceptor atoms.",symbol:"W_{\\text{dep}}",unit:"\\mathrm{m}",equation:"\\text{Width: } W_{\\text{dep}}"},
{term:"Potential Barrier (Contact Potential)",definition:"The internal electrostatic potential difference established across a P-N junction depletion region that resists further majority-carrier diffusion.",symbol:"V_0",unit:"\\mathrm{V}",equation:"V_{\\text{Ge}} \\approx 0.3\\,\\mathrm{V}, \\quad V_{\\text{Si}} \\approx 0.7\\,\\mathrm{V}"},
{term:"Forward Bias",definition:"Applying external voltage with positive terminal to P-type and negative to N-type, which opposes the internal barrier, narrows the depletion layer, and enables heavy conduction.",symbol:"V_F",unit:"\\mathrm{V}",equation:"V_{\\text{net}} = V_0 - V_F"},
{term:"Reverse Bias",definition:"Applying external voltage with positive terminal to N-type and negative to P-type, which reinforces the internal barrier, widens the depletion layer, and blocks majority current.",symbol:"V_R",unit:"\\mathrm{V}",equation:"V_{\\text{net}} = V_0 + V_R"},
{term:"Bipolar Junction Transistor (BJT)",definition:"A three-terminal semiconductor device consisting of three doped regions (Emitter, Base, Collector) that amplifies or switches electrical signals.",symbol:"\\text{BJT}",unit:"No SI unit",equation:"I_E = I_B + I_C"},
{term:"Emitter Current",definition:"The total majority-carrier current injected from the heavily doped emitter into the base region.",symbol:"I_E",unit:"\\mathrm{A}",equation:"I_E = I_B + I_C"},
{term:"Base Current",definition:"The tiny recombination current flowing through the very thin, lightly doped base terminal that controls the overall transistor output.",symbol:"I_B",unit:"\\mathrm{A}",equation:"I_B = I_E - I_C = \\frac{I_C}{\\beta}"},
{term:"Collector Current",definition:"The output current collected at the collector terminal across the reverse-biased collector-base junction.",symbol:"I_C",unit:"\\mathrm{A}",equation:"I_C = \\beta I_B = \\alpha I_E"},
{term:"Common-Emitter Current Gain (β)",definition:"The dimensionless ratio of collector current to base current, representing the current amplification factor in common-emitter configuration.",symbol:"\\beta",unit:"No SI unit",equation:"\\beta = \\frac{I_C}{I_B}"},
{term:"Common-Base Current Gain (α)", definition:"The dimensionless ratio of collector current to emitter current, representing the transmission efficiency of injected carriers reaching the collector (always < 1).",symbol:"\\alpha",unit:"No SI unit",equation:"\\alpha = \\frac{I_C}{I_E} = \\frac{\\beta}{\\beta + 1}"},
{term:"Integrated Circuit (IC)",definition:"A complete electronic circuit with thousands to billions of transistors, diodes, and passive elements fabricated onto a single miniature semiconductor die.",symbol:"\\text{IC}",unit:"No SI unit",equation:"\\text{Monolithic die}"}
],
examples:[
{
title:"Electrical Resistivity of a Metallic Wire",
given:"A conductor wire has cross-sectional area \\( A = 5.06 \\times 10^{-7}\\,\\mathrm{m}^2 \\), length \\( l = 20\\,\\mathrm{m} \\), and measured electrical resistance \\( R = 0.68\\,\\Omega \\).",
find:"Electrical resistivity (\\( \\rho \\)) of the wire material in \\( \\Omega\\cdot\\mathrm{m} \\).",
equation:"\\rho = \\frac{RA}{l}",
solution:"Substitute the given values into the resistivity formula:<br>\\[ \\rho = \\frac{(0.68\\,\\Omega)(5.06 \\times 10^{-7}\\,\\mathrm{m}^2)}{20\\,\\mathrm{m}} = \\frac{3.4408 \\times 10^{-7}}{20} = 1.7204 \\times 10^{-8}\\,\\Omega\\cdot\\mathrm{m} \\approx 1.72 \\times 10^{-8}\\,\\Omega\\cdot\\mathrm{m} \\]",
finalAnswer:"\\rho \\approx 1.72 \\times 10^{-8}\\,\\Omega\\cdot\\mathrm{m}",
explanation:"This calculated resistivity matches standard annealed copper wire (1.72 × 10⁻⁸ Ω·m). Resistivity depends exclusively on material composition and temperature, not conductor dimensions."
},
{
title:"Transistor Common-Emitter Current Gain and Emitter Current",
given:"In an active NPN transistor circuit, base current \\( I_B = 50\\,\\mu\\mathrm{A} = 50 \\times 10^{-6}\\,\\mathrm{A} = 0.050\\,\\mathrm{mA} \\), and collector current \\( I_C = 4.95\\,\\mathrm{mA} = 4.95 \\times 10^{-3}\\,\\mathrm{A} \\).",
find:"1. Common-emitter current gain (\\( \\beta \\)).<br>2. Total emitter current (\\( I_E \\)) in \\( \\mathrm{mA} \\).",
equation:"\\beta = \\frac{I_C}{I_B}, \\quad I_E = I_B + I_C",
solution:"1. <strong>Common-emitter current gain (\\( \\beta \\)):</strong><br>\\[ \\beta = \\frac{I_C}{I_B} = \\frac{4.95 \\times 10^{-3}\\,\\mathrm{A}}{50 \\times 10^{-6}\\,\\mathrm{A}} = \\frac{4.95\\,\\mathrm{mA}}{0.050\\,\\mathrm{mA}} = 99 \\]<br>2. <strong>Emitter current (\\( I_E \\)):</strong><br>\\[ I_E = I_B + I_C = 0.050\\,\\mathrm{mA} + 4.95\\,\\mathrm{mA} = 5.00\\,\\mathrm{mA} = 5.00 \\times 10^{-3}\\,\\mathrm{A} \\]",
finalAnswer:"\\beta = 99 \\; (\\text{dimensionless}), \\quad I_E = 5.00\\,\\mathrm{mA}",
explanation:"A tiny base control current of 50 µA steers nearly 5 mA of collector current, demonstrating the current amplification capability of the transistor."
},
{
title:"Transistor Common-Base Current Gain and Gain Interconversion",
given:"A transistor operates with emitter current \\( I_E = 10.0\\,\\mathrm{mA} \\) and collector current \\( I_C = 9.80\\,\\mathrm{mA} \\).",
find:"1. Base current (\\( I_B \\)).<br>2. Common-base current gain (\\( \\alpha \\)).<br>3. Common-emitter current gain (\\( \\beta \\)) calculated from \\( \\alpha \\).",
equation:"I_B = I_E - I_C, \\quad \\alpha = \\frac{I_C}{I_E}, \\quad \\beta = \\frac{\\alpha}{1 - \\alpha}",
solution:"1. <strong>Base current:</strong><br>\\[ I_B = I_E - I_C = 10.0\\,\\mathrm{mA} - 9.80\\,\\mathrm{mA} = 0.20\\,\\mathrm{mA} = 200\\,\\mu\\mathrm{A} \\]<br>2. <strong>Common-base current gain (\\( \\alpha \\)):</strong><br>\\[ \\alpha = \\frac{I_C}{I_E} = \\frac{9.80\\,\\mathrm{mA}}{10.0\\,\\mathrm{mA}} = 0.980 \\]<br>3. <strong>Common-emitter current gain (\\( \\beta \\)):</strong><br>\\[ \\beta = \\frac{\\alpha}{1 - \\alpha} = \\frac{0.980}{1 - 0.980} = \\frac{0.980}{0.020} = 49 \\]<br><em>Verification:</em> \\( \\beta = \\frac{I_C}{I_B} = \\frac{9.80\\,\\mathrm{mA}}{0.20\\,\\mathrm{mA}} = 49 \\).",
finalAnswer:"I_B = 0.20\\,\\mathrm{mA} \\; (200\\,\\mu\\mathrm{A}), \\quad \\alpha = 0.980, \\quad \\beta = 49",
explanation:"Because only a small fraction of injected carriers recombine in the base (2%), \\( \\alpha \\) is very close to 1 (0.980), yielding a high current amplification factor \\( \\beta = 49 \\)."
}
],
equations:[
{section:"Electrical Resistance and Resistivity",name:"Electrical Resistance of a Conductor",formula:"\\[ R = \\rho\\frac{l}{A} \\]",symbols:[{symbol:"R",desc:"Resistance (Ω)"},{symbol:"\\rho",desc:"Resistivity (Ω·m)"},{symbol:"l",desc:"Length (m)"},{symbol:"A",desc:"Cross-sectional area (m²)"}]},
{section:"Electrical Resistance and Resistivity",name:"Electrical Resistivity Definition",formula:"\\[ \\rho = \\frac{RA}{l} \\]",symbols:[{symbol:"\\rho",desc:"Resistivity (Ω·m)"},{symbol:"R",desc:"Resistance (Ω)"},{symbol:"A",desc:"Area (m²)"},{symbol:"l",desc:"Length (m)"}]},
{section:"Intrinsic and Extrinsic Semiconductors",name:"Carrier Concentrations in Doped Semiconductors",formula:"\\[ n_e n_h = n_i^2, \\quad \\text{N-type: } n_e \\approx N_D \\gg n_h, \\quad \\text{P-type: } n_h \\approx N_A \\gg n_e \\]",symbols:[{symbol:"n_e, n_h",desc:"Electron and hole concentrations (m⁻³)"},{symbol:"n_i",desc:"Intrinsic carrier concentration (m⁻³)"}]},
{section:"P–N Junction and Diodes",name:"P–N Junction Contact Potential Barrier",formula:"\\[ V_{\\text{Ge}} \\approx 0.3\\,\\mathrm{V}, \\quad V_{\\text{Si}} \\approx 0.7\\,\\mathrm{V} \\]",symbols:[{symbol:"V_{Ge}",desc:"Barrier in Germanium (~0.3 V)"},{symbol:"V_{Si}",desc:"Barrier in Silicon (~0.7 V)"}]},
{section:"P–N Junction and Diodes",name:"Small-Signal Dynamic Diode Resistance",formula:"\\[ r_d = \\frac{\\Delta V_D}{\\Delta I_D} \\]",symbols:[{symbol:"r_d",desc:"Dynamic resistance (Ω)"},{symbol:"\\Delta V_D",desc:"Incremental voltage (V)"},{symbol:"\\Delta I_D",desc:"Incremental current (A)"}]},
{section:"Transistors and Current Relationships",name:"Transistor Terminal Current Conservation",formula:"\\[ I_E = I_B + I_C \\]",symbols:[{symbol:"I_E",desc:"Emitter current (A)"},{symbol:"I_B",desc:"Base current (A)"},{symbol:"I_C",desc:"Collector current (A)"}]},
{section:"Transistors and Current Relationships",name:"Common-Emitter Current Gain (β)",formula:"\\[ \\beta = \\frac{I_C}{I_B} \\]",symbols:[{symbol:"\\beta",desc:"Common-emitter gain (No unit)"},{symbol:"I_C",desc:"Collector current (A)"},{symbol:"I_B",desc:"Base current (A)"}]},
{section:"Transistors and Current Relationships",name:"Common-Base Current Gain (α)",formula:"\\[ \\alpha = \\frac{I_C}{I_E} \\]",symbols:[{symbol:"\\alpha",desc:"Common-base gain (No unit)"},{symbol:"I_C",desc:"Collector current (A)"},{symbol:"I_E",desc:"Emitter current (A)"}]},
{section:"Transistors and Current Relationships",name:"Current Gain Interconversion Formula",formula:"\\[ \\alpha = \\frac{\\beta}{\\beta + 1} \\iff \\beta = \\frac{\\alpha}{1 - \\alpha} \\]",symbols:[{symbol:"\\alpha, \\beta",desc:"Current gains"}]},
{section:"Integrated Circuits (ICs)",name:"Integrated Circuit Scale & Microelectronic Architecture",formula:"\\[ \\text{Monolithic Die Integration: } N_{\\text{components}} \\sim 10^3 \\text{ to } 10^{10+} \\text{ transistors, diodes, resistors on a silicon chip} \\]",symbols:[{symbol:"N",desc:"Integrated component count"}]}
],
flashcards:[
{front:"What is the formula relating resistance, resistivity, length, and area?", back:"\\( R = \\rho\\frac{l}{A} \\iff \\rho = \\frac{RA}{l} \\)"},
{front:"What are the majority and minority charge carriers in N-type and P-type semiconductors?", back:"N-type: majority = electrons, minority = holes.<br>P-type: majority = holes, minority = electrons."},
{front:"What are the approximate potential barrier voltages for Ge and Si diodes?", back:"\\( V_{\\text{Ge}} \\approx 0.3\\,\\mathrm{V}, \\quad V_{\\text{Si}} \\approx 0.7\\,\\mathrm{V} \\)"},
{front:"What happens to the depletion region under forward and reverse bias?", back:"Forward bias: narrows the depletion region.<br>Reverse bias: widens the depletion region."},
{front:"What is the fundamental current equation for a bipolar junction transistor?", back:"\\( I_E = I_B + I_C \\)"},
{front:"What is the definition of common-emitter current gain \\( \\beta \\)?", back:"\\( \\beta = \\frac{I_C}{I_B} \\)"},
{front:"What is the definition of common-base current gain \\( \\alpha \\)?", back:"\\( \\alpha = \\frac{I_C}{I_E} = \\frac{\\beta}{\\beta + 1} < 1 \\)"},
{front:"What are the primary advantages of Integrated Circuits (ICs)?", back:"Miniaturization, extreme component density, low power consumption, and high operational reliability."}
],
quiz:[
{question:"A wire with A = 5.06 × 10⁻⁷ m² and length l = 20 m has resistance R = 0.68 Ω. What is its resistivity?", options:["1.72 × 10⁻⁸ Ω·m","3.44 × 10⁻⁷ Ω·m","1.72 × 10⁻⁶ Ω·m","8.55 × 10⁻⁹ Ω·m"], correctIndex:0, feedback:"ρ = RA / l = (0.68 × 5.06 × 10⁻⁷) / 20 = 1.72 × 10⁻⁸ Ω·m (copper wire)."},
{question:"In a Silicon P-N junction diode, the contact potential barrier at room temperature is approximately:", options:["0.1 V","0.3 V","0.7 V","1.5 V"], correctIndex:2, feedback:"V_Si ≈ 0.7 V, while for Germanium V_Ge ≈ 0.3 V."},
{question:"In an active BJT with base current I_B = 50 µA and collector current I_C = 4.95 mA, the current gain β and emitter current I_E are:", options:["β = 50, I_E = 5.00 mA","β = 99, I_E = 5.00 mA","β = 100, I_E = 4.90 mA","β = 99, I_E = 4.95 mA"], correctIndex:1, feedback:"β = 4.95 mA / 0.05 mA = 99; I_E = 0.05 mA + 4.95 mA = 5.00 mA."},
{question:"What happens to the depletion region of a P-N junction under reverse bias?", options:["It disappears completely","It narrows significantly","It widens, blocking majority carriers","It oscillates with AC frequency"], correctIndex:2, feedback:"Reverse bias reinforces the internal electric field, widening the depletion region and blocking majority carriers."}
]
},
{
id:"g12-ch4-l2",gifUrl:"https://commons.wikimedia.org/wiki/Special:FilePath/Michelson-morley_experiment_animation.gif",worksheetUrl:"worksheets/ch4-l2-worksheet.pdf",games:[{topic:"Special Relativity",url:"https://gemini.google.com/share/3565e381b1ba"}],title:"Chapter 4 Lesson 2: Special Theory of Relativity",
concepts:[
"Reference Frames and Galilean Transformation: An inertial reference frame is one with zero acceleration where Newton's laws hold true. Classical mechanics assumes absolute, universal space and time (\\( t' = t \\)). For frame S' moving at constant velocity \\( u \\) along the +x axis relative to frame S, coordinates transform as \\( x' = x - ut \\), \\( y' = y \\), \\( z' = z \\), \\( t' = t \\); velocities as \\( v'_x = v_x - u \\), \\( v'_y = v_y \\), \\( v'_z = v_z \\); and accelerations as \\( a'_x = a_x \\), \\( a'_y = a_y \\), \\( a'_z = a_z \\). Valid only when \\( u \\ll c \\).",
"Speed of Light and the Michelson–Morley Experiment: Designed to detect Earth's motion through the hypothetical luminiferous ether. Light splits into two perpendicular arms of length \\( L \\). Expected travel times are \\( t_1 = \\frac{2Lc}{c^2 - v^2} \\) (parallel) and \\( t_2 = \\frac{2L}{\\sqrt{c^2 - v^2}} \\) (perpendicular). Time difference is \\( \\Delta t \\approx \\frac{Lv^2}{c^3} \\), path difference \\( \\Delta x = c\\Delta t \\approx \\frac{Lv^2}{c^2} \\), and expected fringe shift \\( \\Delta N = \\frac{\\Delta x}{\\lambda} = \\frac{Lv^2}{c^2\\lambda} \\). The experiment yielded a null result, disproving the existence of the ether and demonstrating that the speed of light is isotropic in all directions.",
"Einstein's Two Postulates of Special Relativity: 1. The laws of physics are identical in all inertial reference frames. 2. The speed of light in vacuum is constant and invariant in all inertial reference frames, independent of the motion of the source or observer: \\( c = 299\\,792\\,458\\,\\mathrm{m/s} \\approx 3.0 \\times 10^8\\,\\mathrm{m/s} \\). Maxwell's electromagnetic relation confirms \\( c = \\frac{1}{\\sqrt{\\varepsilon_0\\mu_0}} \\), where \\( \\varepsilon_0 \\) is vacuum permittivity and \\( \\mu_0 \\) is vacuum permeability.",
"Lorentz Transformation: Galilean transformations break down near light speed because they predict light speed varies with observer motion. The relativistic Lorentz factor is \\( \\gamma = \\frac{1}{\\sqrt{1 - \\frac{u^2}{c^2}}} \\ge 1 \\). Forward transformations (S to S'): \\( x' = \\gamma(x - ut) \\), \\( y' = y \\), \\( z' = z \\), \\( t' = \\gamma\\left(t - \\frac{ux}{c^2}\\right) \\). Reverse transformations (S' to S): \\( x = \\gamma(x' + ut'), \\quad y = y', \\quad z = z', \\quad t = \\gamma\\left(t' + \\frac{ux'}{c^2}\\right) \\). When \\( u \\ll c \\), \\( \\gamma \\approx 1 \\), recovering Galilean mechanics.",
"Relativistic Velocity Transformation: Velocity addition must account for spacetime transformations: forward transformations are \\( v'_x = \\frac{v_x - u}{1 - \\frac{uv_x}{c^2}} \\), \\( v'_y = \\frac{v_y}{\\gamma(1 - uv_x/c^2)} \\), \\( v'_z = \\frac{v_z}{\\gamma(1 - uv_x/c^2)} \\); reverse transformations are \\( v_x = \\frac{v'_x + u}{1 + \\frac{uv'_x}{c^2}} \\), \\( v_y = \\frac{v'_y}{\\gamma(1 + uv'_x/c^2)} \\), \\( v_z = \\frac{v'_z}{\\gamma(1 + uv'_x/c^2)} \\). For motion along a straight line, \\( v = \\frac{v' + u}{1 + \\frac{uv'}{c^2}} \\). This guarantees that the relative speed of massive objects strictly remains below \\( c \\), and light always travels at \\( c \\) for all observers."
],
definitions:[
{term:"Inertial Reference Frame",definition:"A coordinate reference frame in which a body subject to zero net external force remains at rest or moves with uniform velocity in a straight line.",symbol:"S, S'",unit:"No SI unit",equation:"\\sum\\vec{F} = 0 \\implies \\vec{a} = 0"},
{term:"Galilean Transformation",definition:"Classical equations relating coordinates, velocities, and accelerations between inertial frames, valid only at low speeds (u ≪ c) under the assumption of absolute time.",symbol:"\\text{Galileo}",unit:"No SI unit",equation:"x' = x - ut, \\quad v'_x = v_x - u, \\quad t' = t"},
{term:"Michelson Interferometer",definition:"An optical instrument splitting light into two perpendicular arms of length L to detect path and travel-time differences via interference fringe shifts.",symbol:"L",unit:"\\mathrm{m}",equation:"\\Delta N = \\frac{\\Delta x}{\\lambda}"},
{term:"Expected Fringe Shift",definition:"Theoretical shift in interference fringes expected in the Michelson-Morley interferometer if an ether wind were present.",symbol:"\\Delta N",unit:"No SI unit",equation:"\\Delta N = \\frac{Lv^2}{c^2\\lambda}"},
{term:"First Postulate (Principle of Relativity)",definition:"The fundamental postulate stating that the laws of physics are the same in all inertial reference frames.",symbol:"\\text{Postulate 1}",unit:"No SI unit",equation:"\\text{Laws invariant in all inertial frames}"},
{term:"Second Postulate (Constancy of Light Speed)",definition:"The postulate stating that the speed of light in vacuum is constant in all inertial reference frames, independent of the motion of the source or observer.",symbol:"c",unit:"\\mathrm{m/s}",equation:"c = 299\\,792\\,458\\,\\mathrm{m/s} \\approx 3.0 \\times 10^8\\,\\mathrm{m/s}"},
{term:"Vacuum Permittivity",definition:"The physical constant representing the capability of vacuum to permit electric field lines.",symbol:"\\varepsilon_0",unit:"\\mathrm{F/m}",equation:"\\varepsilon_0 \\approx 8.854 \\times 10^{-12}\\,\\mathrm{F/m}"},
{term:"Vacuum Permeability",definition:"The physical constant representing the capability of vacuum to permit magnetic field lines.",symbol:"\\mu_0",unit:"\\mathrm{T\\cdot m/A}",equation:"\\mu_0 = 4\pi \\times 10^{-7}\\,\\mathrm{T\\cdot m/A}"},
{term:"Electromagnetic Light Speed Relation",definition:"Maxwell's exact relationship connecting the speed of light to the vacuum permittivity and permeability.",symbol:"c",unit:"\\mathrm{m/s}",equation:"c = \\frac{1}{\\sqrt{\\varepsilon_0\\mu_0}}"},
{term:"Lorentz Factor (γ)",definition:"The fundamental relativistic scaling factor that quantifies time dilation, length contraction, and coordinate transformations, always ≥ 1.",symbol:"\\gamma",unit:"No SI unit",equation:"\\gamma = \\frac{1}{\\sqrt{1 - \\frac{u^2}{c^2}}}"},
{term:"Lorentz Coordinate Transformation",definition:"Relativistic coordinate equations transforming spatial position between inertial reference frames moving at relative velocity u.",symbol:"x'",unit:"\\mathrm{m}",equation:"x' = \\gamma(x - ut)"},
{term:"Lorentz Time Transformation",definition:"Relativistic time transformation showing that elapsed time and simultaneity depend directly on relative velocity and spatial position.",symbol:"t'",unit:"\\mathrm{s}",equation:"t' = \\gamma\\left(t - \\frac{ux}{c^2}\\right)"},
{term:"Reverse Lorentz Transformation",definition:"Relativistic equations transforming space and time from moving frame S' back to rest frame S.",symbol:"x, t",unit:"\\mathrm{m, s}",equation:"x = \\gamma(x' + ut'), \\quad t = \\gamma\\left(t' + \\frac{ux'}{c^2}\\right)"},
{term:"Relativistic Velocity Transformation",definition:"Formulas relating particle velocity components between two reference frames, ensuring resultant speeds never exceed c.",symbol:"v'_x",unit:"\\mathrm{m/s}",equation:"v'_x = \\frac{v_x - u}{1 - \\frac{uv_x}{c^2}}"},
{term:"Relativistic Velocity Addition",definition:"Collinear formula for combining relative velocities along the same straight line.",symbol:"v",unit:"\\mathrm{m/s}",equation:"v = \\frac{v' + u}{1 + \\frac{uv'}{c^2}}"}
],
examples:[
{
title:"Classical Galilean Relative Velocity of Two Moving Cars",
given:"Car A travels East at \\( v_A = 60\\,\\mathrm{km/h} \\) relative to the road (frame S). Car B travels at \\( v_B = 40\\,\\mathrm{km/h} \\).",
find:"1. Relative velocity of Car A with respect to Car B when both travel in the same direction (East).<br>2. Relative velocity when Car B travels in the opposite direction (West).",
equation:"v' = v - u",
solution:"1. <strong>Same direction:</strong> Frame S' moves with Car B (\\( u = +40\\,\\mathrm{km/h} \\)):<br>\\[ v' = v_A - u = 60\\,\\mathrm{km/h} - 40\\,\\mathrm{km/h} = +20\\,\\mathrm{km/h} \\]<br>2. <strong>Opposite directions:</strong> Car B moves West (\\( u = -40\\,\\mathrm{km/h} \\)):<br>\\[ v' = v_A - u = 60\\,\\mathrm{km/h} - (-40\\,\\mathrm{km/h}) = 60 + 40 = +100\\,\\mathrm{km/h} \\]",
finalAnswer:"v'_{\\text{same}} = +20\\,\\mathrm{km/h}, \\quad v'_{\\text{opposite}} = +100\\,\\mathrm{km/h}",
explanation:"Under Galilean relativity, relative velocities add or subtract linearly because time and space are assumed absolute across all reference frames."
},
{
title:"Michelson–Morley Expected Fringe Shift Calculation",
given:"Effective arm length \\( L = 11.0\\,\\mathrm{m} \\), Earth's orbital speed \\( v = 3.0 \\times 10^4\\,\\mathrm{m/s} \\), light wavelength \\( \\lambda = 5.5 \\times 10^{-7}\\,\\mathrm{m} \\), speed of light \\( c = 3.0 \\times 10^8\\,\\mathrm{m/s} \\).",
find:"1. Ratio \\( \\frac{v^2}{c^2} \\).<br>2. Theoretical expected fringe shift (\\( \\Delta N \\)).",
equation:"\\Delta N = \\frac{Lv^2}{c^2\\lambda}",
solution:"1. <strong>Compute ratio \\( \\frac{v^2}{c^2} \\):</strong><br>\\[ \\frac{v^2}{c^2} = \\left(\\frac{3.0 \\times 10^4\\,\\mathrm{m/s}}{3.0 \\times 10^8\\,\\mathrm{m/s}}\\right)^2 = (1.0 \\times 10^{-4})^2 = 1.0 \\times 10^{-8} \\]<br>2. <strong>Expected fringe shift:</strong><br>\\[ \\Delta N = \\frac{L}{\\lambda}\\left(\\frac{v^2}{c^2}\\right) = \\frac{(11.0\\,\\mathrm{m})(1.0 \\times 10^{-8})}{5.5 \\times 10^{-7}\\,\\mathrm{m}} = \\frac{1.10 \\times 10^{-7}}{5.5 \\times 10^{-7}} = 0.20 \\text{ fringes} \\]",
finalAnswer:"\\Delta N = 0.20 \\text{ fringes} \\; (0.40 \\text{ upon } 90^\\circ \\text{ rotation})",
explanation:"The apparatus was capable of detecting fringe shifts as small as 0.01 fringe. Observing a zero shift (null result) proved that the luminiferous ether does not exist."
},
{
title:"Relativistic Velocity Addition: Spaceship at 0.80c Firing Missile at 0.60c",
given:"A spaceship moves past a space station at speed \\( u = 0.80c \\). The spaceship launches a missile forward at speed \\( v' = 0.60c \\) relative to itself.",
find:"Speed of the missile (\\( v \\)) as measured by an observer on the space station.",
equation:"v = \\frac{v' + u}{1 + \\frac{uv'}{c^2}}",
solution:"1. <strong>Numerator (classical sum):</strong><br>\\[ v' + u = 0.60c + 0.80c = 1.40c \\]<br>2. <strong>Denominator (relativistic correction):</strong><br>\\[ 1 + \\frac{uv'}{c^2} = 1 + \\frac{(0.80c)(0.60c)}{c^2} = 1 + 0.48 = 1.48 \\]<br>3. <strong>Resultant velocity:</strong><br>\\[ v = \\frac{1.40c}{1.48} = \\frac{140}{148}c = \\frac{35}{37}c \\approx 0.9459c \\approx 0.946c \\]",
finalAnswer:"v \\approx 0.946c \\quad (2.84 \\times 10^8\\,\\mathrm{m/s})",
explanation:"Classical Galilean addition predicts an impossible 1.40c (exceeding the speed of light). Relativistic addition ensures the resulting speed is 0.946c, strictly less than c."
},
{
title:"Relativistic Velocity Addition: Spaceship at 0.50c Firing Missile at 0.70c",
given:"A spacecraft travels away from Earth at speed \\( u = 0.50c \\) and fires a probe forward at speed \\( v' = 0.70c \\) relative to the spacecraft.",
find:"Speed of the probe (\\( v \\)) as measured by observers on Earth.",
equation:"v = \\frac{v' + u}{1 + \\frac{uv'}{c^2}}",
solution:"1. <strong>Numerator:</strong><br>\\[ v' + u = 0.70c + 0.50c = 1.20c \\]<br>2. <strong>Denominator:</strong><br>\\[ 1 + \\frac{uv'}{c^2} = 1 + \\frac{(0.50c)(0.70c)}{c^2} = 1 + 0.35 = 1.35 \\]<br>3. <strong>Resultant velocity:</strong><br>\\[ v = \\frac{1.20c}{1.35} = \\frac{120}{135}c = \\frac{8}{9}c \\approx 0.8889c \\approx 0.889c \\]",
finalAnswer:"v \\approx 0.889c \\quad (2.67 \\times 10^8\\,\\mathrm{m/s})",
explanation:"Despite the classical sum being 1.20c, relativistic velocity addition ensures the speed measured from Earth is only 0.889c."
},
{
title:"Relative Speed of Two Electrons Moving in Opposite Directions at 0.50c",
given:"In the laboratory reference frame S, Electron 1 travels to the right at \\( u = +0.50c \\) and Electron 2 travels to the left at \\( v_x = -0.50c \\).",
find:"Relative velocity of Electron 2 as measured in the rest frame S' of Electron 1 (\\( v'_x \\)).",
equation:"v'_x = \\frac{v_x - u}{1 - \\frac{uv_x}{c^2}}",
solution:"Frame S' is attached to Electron 1 moving at \\( u = +0.50c \\). Electron 2 has velocity \\( v_x = -0.50c \\) in frame S.<br>1. <strong>Numerator:</strong><br>\\[ v_x - u = -0.50c - 0.50c = -1.00c \\]<br>2. <strong>Denominator:</strong><br>\\[ 1 - \\frac{uv_x}{c^2} = 1 - \\frac{(0.50c)(-0.50c)}{c^2} = 1 - (-0.25) = 1 + 0.25 = 1.25 \\]<br>3. <strong>Resultant relative velocity:</strong><br>\\[ v'_x = \\frac{-1.00c}{1.25} = -0.80c \\]",
finalAnswer:"v'_x = -0.80c \\quad (\\text{Relative approaching speed is } 0.80c)",
explanation:"Classical Galilean addition incorrectly predicts a relative speed of 1.00c. In special relativity, an observer riding on Electron 1 measures Electron 2 approaching at 0.80c."
},
{
title:"Relative Speed of Two Spacecraft Moving in Opposite Directions at 0.750c and 0.850c",
given:"Relative to Earth (frame S), Spacecraft A travels East at \\( u = +0.750c \\) and Spacecraft B travels West at \\( v_x = -0.850c \\).",
find:"Relative velocity of Spacecraft B as measured by an astronaut aboard Spacecraft A (\\( v'_x \\)).",
equation:"v'_x = \\frac{v_x - u}{1 - \\frac{uv_x}{c^2}}",
solution:"Attach frame S' to Spacecraft A (\\( u = +0.750c \\)). In frame S, Spacecraft B has \\( v_x = -0.850c \\).<br>1. <strong>Numerator:</strong><br>\\[ v_x - u = -0.850c - 0.750c = -1.600c \\]<br>2. <strong>Denominator:</strong><br>\\[ 1 - \\frac{(0.750c)(-0.850c)}{c^2} = 1 - (-0.6375) = 1 + 0.6375 = 1.6375 \\]<br>3. <strong>Compute relative velocity:</strong><br>\\[ v'_x = \\frac{-1.600c}{1.6375} \\approx -0.9771c \\approx -0.977c \\]",
finalAnswer:"v'_x \\approx -0.977c \\quad (\\text{Relative speed is } 0.977c)",
explanation:"Galilean addition yields an impossible closing speed of 1.600c. In reality, astronauts on Spacecraft A measure Spacecraft B passing by at 0.977c, safely below the speed of light."
}
],
equations:[
{section:"Reference Frames and Galilean Transformation",name:"Galilean Coordinate Transformation",formula:"\\[ x' = x - ut, \\quad y' = y, \\quad z' = z, \\quad t' = t \\]",symbols:[{symbol:"x', y', z'",desc:"Coordinates in S' (m)"},{symbol:"x, y, z",desc:"Coordinates in S (m)"},{symbol:"u",desc:"Velocity (m/s)"},{symbol:"t",desc:"Time (s)"}]},
{section:"Reference Frames and Galilean Transformation",name:"Galilean Velocity and Acceleration Transformations",formula:"\\[ v'_x = v_x - u, \\quad a'_x = a_x \\]",symbols:[{symbol:"v'_x",desc:"Velocity in S' (m/s)"},{symbol:"v_x",desc:"Velocity in S (m/s)"},{symbol:"u",desc:"Relative velocity (m/s)"},{symbol:"a'_x, a_x",desc:"Accelerations (m/s²)"}]},
{section:"Speed of Light and the Michelson–Morley Experiment",name:"Michelson Interferometer Light Travel Times",formula:"\\[ t_1 = \\frac{2Lc}{c^2 - v^2}, \\quad t_2 = \\frac{2L}{\\sqrt{c^2 - v^2}} \\]",symbols:[{symbol:"t_1, t_2",desc:"Travel times (s)"},{symbol:"L",desc:"Arm length (m)"},{symbol:"c",desc:"Speed of light (m/s)"},{symbol:"v",desc:"Ether wind speed (m/s)"}]},
{section:"Speed of Light and the Michelson–Morley Experiment",name:"Time Difference, Path Difference and Expected Fringe Shift",formula:"\\[ \\Delta t \\approx \\frac{Lv^2}{c^3}, \\quad \\Delta x = c\\Delta t \\approx \\frac{Lv^2}{c^2}, \\quad \\Delta N = \\frac{\\Delta x}{\\lambda} = \\frac{Lv^2}{c^2\\lambda} \\]",symbols:[{symbol:"\\Delta t",desc:"Time difference (s)"},{symbol:"\\Delta x",desc:"Path difference (m)"},{symbol:"\\Delta N",desc:"Fringe shift (No unit)"},{symbol:"\\lambda",desc:"Wavelength (m)"}]},
{section:"Einstein's Two Postulates",name:"Universal Constancy of the Speed of Light",formula:"\\[ c = 299\\,792\\,458\\,\\mathrm{m/s} \\approx 3.0 \\times 10^8\\,\\mathrm{m/s} \\]",symbols:[{symbol:"c",desc:"Light speed in vacuum (m/s)"}]},
{section:"Einstein's Two Postulates",name:"Electromagnetic Speed of Light Relation",formula:"\\[ c = \\frac{1}{\\sqrt{\\varepsilon_0\\mu_0}} \\]",symbols:[{symbol:"c",desc:"Speed of light (m/s)"},{symbol:"\\varepsilon_0",desc:"Vacuum permittivity (F/m)"},{symbol:"\\mu_0",desc:"Vacuum permeability (T·m/A)"}]},
{section:"Lorentz Transformation",name:"Lorentz Factor (γ)",formula:"\\[ \\gamma = \\frac{1}{\\sqrt{1 - \\frac{u^2}{c^2}}} \\]",symbols:[{symbol:"\\gamma",desc:"Lorentz Factor (No unit)"},{symbol:"u",desc:"Relative velocity (m/s)"},{symbol:"c",desc:"Speed of light (m/s)"}]},
{section:"Lorentz Transformation",name:"Forward Lorentz Spacetime Transformations (S → S')",formula:"\\[ x' = \\gamma(x - ut), \\quad y' = y, \\quad z' = z, \\quad t' = \\gamma\\left(t - \\frac{ux}{c^2}\\right) \\]",symbols:[{symbol:"x', t'",desc:"Coordinates in S'"},{symbol:"x, t",desc:"Coordinates in S"},{symbol:"\\gamma",desc:"Lorentz factor"}]},
{section:"Lorentz Transformation",name:"Reverse Lorentz Spacetime Transformations (S' → S)",formula:"\\[ x = \\gamma(x' + ut'), \\quad y = y', \\quad z = z', \\quad t = \\gamma\\left(t' + \\frac{ux'}{c^2}\\right) \\]",symbols:[{symbol:"x, t",desc:"Coordinates in S"},{symbol:"x', t'",desc:"Coordinates in S'"},{symbol:"\\gamma",desc:"Lorentz factor"}]},
{section:"Relativistic Velocity Transformation",name:"Forward and Reverse Relativistic Velocity Transformations",formula:"\\[ v'_x = \\frac{v_x - u}{1 - \\frac{uv_x}{c^2}}, \\quad v_x = \\frac{v'_x + u}{1 + \\frac{uv'_x}{c^2}} \\]",symbols:[{symbol:"v'_x",desc:"Velocity in S' (m/s)"},{symbol:"v_x",desc:"Velocity in S (m/s)"},{symbol:"u",desc:"Frame speed (m/s)"}]},
{section:"Relativistic Velocity Transformation",name:"Collinear Relativistic Velocity-Addition Formula",formula:"\\[ v = \\frac{v' + u}{1 + \\frac{uv'}{c^2}} \\]",symbols:[{symbol:"v",desc:"Resultant velocity (m/s)"},{symbol:"v'",desc:"Velocity in S' (m/s)"},{symbol:"u",desc:"Relative velocity (m/s)"}]}
],
flashcards:[
{front:"What are the Galilean coordinate transformations?", back:"\\( x' = x - ut, \\quad y' = y, \\quad z' = z, \\quad t' = t \\) (valid only for \\( u \\ll c \\))."},
{front:"What was the significance of the Michelson–Morley experiment's null result?", back:"It disproved the existence of the luminiferous ether and confirmed the speed of light is constant in all directions."},
{front:"What are Einstein's two postulates of special relativity?", back:"1. Laws of physics are the same in all inertial frames.<br>2. Speed of light in vacuum is constant for all observers (\\( c \\approx 3.0 \\times 10^8\\,\\mathrm{m/s} \\))."},
{front:"What is the formula for the Lorentz factor \\( \\gamma \\)?", back:"\\( \\gamma = \\frac{1}{\\sqrt{1 - \\frac{u^2}{c^2}}} \\)"},
{front:"What are the forward Lorentz coordinate and time transformations?", back:"\\( x' = \\gamma(x - ut), \\quad t' = \\gamma\\left(t - \\frac{ux}{c^2}\\right) \\)"},
{front:"What is the relativistic velocity-addition formula for motion along a straight line?", back:"\\( v = \\frac{v' + u}{1 + \\frac{uv'}{c^2}} \\)"},
{front:"What is the formula for light speed in terms of \\( \\varepsilon_0 \\) and \\( \\mu_0 \\)?", back:"\\( c = \\frac{1}{\\sqrt{\\varepsilon_0\\mu_0}} \\)"},
{front:"Why can't massive particles exceed the speed of light?", back:"Because the denominator \\( 1 + \\frac{uv'}{c^2} \\) prevents the sum from reaching or exceeding \\( c \\), and \\( \\gamma \\to \\infty \\) as \\( u \\to c \\)."}
],
quiz:[
{question:"A spaceship moving at 0.80c fires a missile forward at 0.60c relative to itself. What is the missile's speed relative to an outside observer?", options:["1.40c","0.946c","0.80c","0.70c"], correctIndex:1, feedback:"v = (0.60c + 0.80c) / [1 + (0.80)(0.60)] = 1.40c / 1.48 ≈ 0.946c."},
{question:"Two electrons in a lab move in opposite directions, each at 0.50c. What is the speed of one electron relative to the other?", options:["1.00c","0.50c","0.80c","0.25c"], correctIndex:2, feedback:"v' = (-0.50c - 0.50c) / [1 - (0.50)(-0.50)] = -1.00c / 1.25 = -0.80c (relative speed 0.80c)."},
{question:"Which equation links the speed of light to the vacuum permittivity and permeability?", options:["c = ε₀ / μ₀","c = 1 / √(ε₀μ₀)","c = √(ε₀ / μ₀)","c = 1 / (ε₀μ₀)"], correctIndex:1, feedback:"c = 1 / √(ε₀μ₀), derived from Maxwell's electromagnetic equations."},
{question:"When relative velocity u is much smaller than c (u ≪ c), the Lorentz factor γ approaches:", options:["0","1","Infinity","c"], correctIndex:1, feedback:"For u ≪ c, u²/c² ≈ 0, so γ = 1 / √(1 - 0) = 1, restoring classical Galilean mechanics."}
]
},
{
id:"g12-ch4-l3",gifUrl:"",worksheetUrl:"worksheets/ch4-l3-worksheet.pdf",games:[],title:"Chapter 4 Lesson 3: Atomic Structure",
concepts:[
"Cathode Rays: Streams of electrons discovered by J.J. Thomson, demonstrating that atoms have an internal structure.",
"Charge-to-Mass Ratio (e/m): Measured by balancing electric and magnetic forces on an electron beam.",
"Rutherford's Nuclear Model: Alpha particle scattering proved the existence of a small, dense, positively charged nucleus.",
"Nucleons: The nucleus consists of protons (positive) and neutrons (neutral).",
"Photoelectric Effect: Light behaves as a stream of particles (photons). Electrons are emitted only if the photon energy exceeds the work function.",
"Bohr Atomic Model: Electrons orbit the nucleus in specific quantized energy levels. They absorb/emit photons to transition between states."
],
definitions:[
{term:"Cathode Rays",definition:"Streams of fast-moving electrons emitted from the cathode in an evacuated glass tube under high electric potential.",symbol:"\\text{Cathode Ray}",unit:"\\text{No unit}",equation:"\\frac{q}{m} = \\frac{E}{v B}"},
{term:"Charge-to-Mass Ratio (e/m)",definition:"The specific charge of a particle measuring the electric charge per unit mass, first measured for the electron by J.J. Thomson.",symbol:"\\frac{q}{m} \\text{ or } \\frac{e}{m}",unit:"\\mathrm{C/kg}",equation:"\\frac{q}{m} = \\frac{Z E}{D l B^2}"},
{term:"Screen Deflection in Thomson Tube",definition:"The vertical displacement of the electron beam spot on the fluorescent phosphor screen produced by crossed electric and magnetic deflection fields.",symbol:"Z",unit:"\\mathrm{m}",equation:"Z = \\frac{q}{m} \\frac{D l B^2}{E}"},
{term:"Photon",definition:"The elementary quantum packet of electromagnetic radiation that carries a discrete quantum of energy proportional to its wave frequency.",symbol:"\\text{Photon}",unit:"\\text{No unit}",equation:"E = h f = \\frac{h c}{\\lambda}"},
{term:"Planck's Constant",definition:"A fundamental physical constant that sets the scale for quantum effects, relating wave frequency to photon energy.",symbol:"h",unit:"\\mathrm{J\\cdot s}",equation:"h \\approx 6.626 \\times 10^{-34}\\,\\mathrm{J\\cdot s}"},
{term:"Photoelectric Effect",definition:"The emission of electrons from a metal surface when irradiated with electromagnetic radiation of frequency exceeding a characteristic threshold.",symbol:"\\text{Photoelectric}",unit:"\\text{No unit}",equation:"K_{max} = hf - E_0"},
{term:"Work Function",definition:"The minimum binding energy required to dislodge and liberate the most weakly bound electron from a metal surface into vacuum.",symbol:"E_0 \\text{ or } W",unit:"\\mathrm{J} \\;\\text{or}\\; \\mathrm{eV}",equation:"E_0 = h f_0 = \\frac{h c}{\\lambda_0}"},
{term:"Threshold Frequency",definition:"The minimum frequency of incident light required to release electrons from a metallic surface with zero initial kinetic energy.",symbol:"f_0",unit:"\\mathrm{Hz}",equation:"f_0 = \\frac{E_0}{h}"},
{term:"Threshold Wavelength",definition:"The maximum (cut-off) wavelength of incident light capable of inducing photoelectric emission from a surface.",symbol:"\\lambda_0",unit:"\\mathrm{m}",equation:"\\lambda_0 = \\frac{c}{f_0} = \\frac{h c}{E_0}"},
{term:"Maximum Kinetic Energy (Photoelectrons)",definition:"The maximum translational kinetic energy carried by ejected photoelectrons leaving a metal surface.",symbol:"K_{max}",unit:"\\mathrm{J} \\;\\text{or}\\; \\mathrm{eV}",equation:"K_{max} = \\frac{1}{2} m v^2 = hf - E_0"},
{term:"Stopping Potential",definition:"The opposing potential difference applied across the photocell terminals necessary to completely halt the fastest emitted photoelectrons.",symbol:"V_s",unit:"\\mathrm{V}",equation:"K_{max} = e V_s"},
{term:"Bohr Atomic Model",definition:"A quantum model of the atom proposing that electrons revolve around the nucleus only in stationary, discrete quantized orbits without radiating energy.",symbol:"\\text{Bohr Model}",unit:"\\text{No unit}",equation:"\\Delta E = E_2 - E_1 = hf"}
],
examples:[
{title:"Thomson Charge-to-Mass Ratio Calculation (e/m)",given:"In a Thomson tube: deflecting plate length \\( l = 5.0\\,\\mathrm{cm} = 0.050\\,\\mathrm{m} \\), distance to screen \\( D = 12.0\\,\\mathrm{cm} = 0.12\\,\\mathrm{m} \\), electric field \\( E = 1.0 \\times 10^4\\,\\mathrm{V/m} \\), magnetic field \\( B = 1.2 \\times 10^{-3}\\,\\mathrm{T} \\), measured screen deflection \\( Z = 1.52\\,\\mathrm{cm} = 0.0152\\,\\mathrm{m} \\).",find:"Charge-to-mass ratio (\\( q/m \\)).",equation:"\\frac{q}{m} = \\frac{Z E}{D l B^2}",solution:"1. Calculate denominator: \\( D l B^2 = 0.12 \\times 0.050 \\times (1.2 \\times 10^{-3})^2 \\)<br>\\( D l B^2 = 0.0060 \\times (1.44 \\times 10^{-6}) = 8.64 \\times 10^{-9}\\,\\mathrm{m^2\\cdot T^2} \\).<br>2. Calculate numerator: \\( Z E = 0.0152 \\times 1.0 \\times 10^4 = 152.0\\,\\mathrm{V} \\).<br>3. Compute ratio:<br>\\( \\frac{q}{m} = \\frac{152.0}{8.64 \\times 10^{-9}} \\approx 1.759 \\times 10^{11}\\,\\mathrm{C/kg} \\).",finalAnswer:"\\frac{q}{m} \\approx 1.76 \\times 10^{11}\\,\\mathrm{C/kg}",explanation:"Thomson's measurement revealed that cathode ray particles (electrons) have an identical massive charge-to-mass ratio regardless of the cathode metal, proving the universality of electrons."},
{title:"Photoelectric Threshold Frequency and Work Function Condition",given:"A cesium photocathode has a work function \\( E_0 = 2.14\\,\\mathrm{eV} = 2.14 \\times 1.602 \\times 10^{-19}\\,\\mathrm{J} \\approx 3.428 \\times 10^{-19}\\,\\mathrm{J} \\). Planck's constant \\( h = 6.626 \\times 10^{-34}\\,\\mathrm{J\\cdot s} \\).",find:"Threshold frequency (\\( f_0 \\)) and threshold cut-off wavelength (\\( \\lambda_0 \\)).",equation:"hf \\ge E_0 \\implies f_0 = \\frac{E_0}{h}, \\quad \\lambda_0 = \\frac{c}{f_0}",solution:"1. Calculate threshold frequency:<br>\\( f_0 = \\frac{3.428 \\times 10^{-19}\\,\\mathrm{J}}{6.626 \\times 10^{-34}\\,\\mathrm{J\\cdot s}} \\approx 5.174 \\times 10^{14}\\,\\mathrm{Hz} \\).<br>2. Calculate cut-off wavelength:<br>\\( \\lambda_0 = \\frac{3.0 \\times 10^8\\,\\mathrm{m/s}}{5.174 \\times 10^{14}\\,\\mathrm{Hz}} \\approx 5.798 \\times 10^{-7}\\,\\mathrm{m} = 580\\,\\mathrm{nm} \\).",finalAnswer:"f_0 \\approx 5.17 \\times 10^{14}\\,\\mathrm{Hz}, \\quad \\lambda_0 \\approx 580\\,\\mathrm{nm}",explanation:"Light with wavelength longer than 580 nm does not possess sufficient quantum energy to liberate electrons from cesium, no matter how bright the beam."},
{title:"Maximum Kinetic Energy (Einstein's Photoelectric Equation)",given:"Incident ultraviolet light has frequency \\( f = 1.0 \\times 10^{15}\\,\\mathrm{Hz} \\) shining on a potassium surface with work function \\( E_0 = 2.30\\,\\mathrm{eV} = 3.685 \\times 10^{-19}\\,\\mathrm{J} \\).",find:"Photon energy (\\( hf \\)) and maximum kinetic energy (\\( K_{max} \\)) in Joules and electron-volts.",equation:"K_{max} = hf - E_0",solution:"1. Calculate photon energy:<br>\\( hf = (6.626 \\times 10^{-34}\\,\\mathrm{J\\cdot s}) \\times (1.0 \\times 10^{15}\\,\\mathrm{Hz}) = 6.626 \\times 10^{-19}\\,\\mathrm{J} \\).<br>Convert to eV: \\( \\frac{6.626 \\times 10^{-19}}{1.602 \\times 10^{-19}} \\approx 4.136\\,\\mathrm{eV} \\).<br>2. Calculate \\( K_{max} \\):<br>\\( K_{max} = 6.626 \\times 10^{-19} - 3.685 \\times 10^{-19} = 2.941 \\times 10^{-19}\\,\\mathrm{J} \\).<br>In eV: \\( K_{max} = 4.136\\,\\mathrm{eV} - 2.30\\,\\mathrm{eV} = 1.836\\,\\mathrm{eV} \\).",finalAnswer:"K_{max} = 2.94 \\times 10^{-19}\\,\\mathrm{J} \\; (1.84\\,\\mathrm{eV})",explanation:"Einstein's equation confirms that energy is conserved on a single-photon single-electron collision basis."},
{title:"Maximum Velocity of Ejected Photoelectrons",given:"From the previous example, photoelectrons emerge with \\( K_{max} = 2.941 \\times 10^{-19}\\,\\mathrm{J} \\). Electron mass \\( m = 9.11 \\times 10^{-31}\\,\\mathrm{kg} \\).",find:"Maximum velocity (\\( v_{max} \\)) of the escaping electrons.",equation:"K_{max} = \\frac{1}{2} m v^2 \\implies v_{max} = \\sqrt{\\frac{2 K_{max}}{m}}",solution:"1. Multiply by 2 and divide by mass:<br>\\( \\frac{2 K_{max}}{m} = \\frac{2 \\times 2.941 \\times 10^{-19}}{9.11 \\times 10^{-31}} = \\frac{5.882 \\times 10^{-19}}{9.11 \\times 10^{-31}} \\approx 6.457 \\times 10^{11}\\,\\mathrm{m^2/s^2} \\).<br>2. Take the square root:<br>\\( v_{max} = \\sqrt{6.457 \\times 10^{11}} \\approx 8.035 \\times 10^5\\,\\mathrm{m/s} \\).",finalAnswer:"v_{max} \\approx 8.04 \\times 10^5\\,\\mathrm{m/s}",explanation:"The fastest photoelectrons shoot away from the potassium surface at over 800 kilometers per second."},
{title:"Stopping Potential Determination",given:"A photocell produces electrons with \\( K_{max} = 1.84\\,\\mathrm{eV} = 2.941 \\times 10^{-19}\\,\\mathrm{J} \\). Electron charge \\( e = 1.602 \\times 10^{-19}\\,\\mathrm{C} \\).",find:"Stopping potential (\\( V_s \\)) required to reduce the photocurrent to zero.",equation:"K_{max} = e V_s \\implies V_s = \\frac{K_{max}}{e}",solution:"Substitute \\( K_{max} \\):<br>\\( V_s = \\frac{2.941 \\times 10^{-19}\\,\\mathrm{J}}{1.602 \\times 10^{-19}\\,\\mathrm{C}} = 1.836\\,\\mathrm{V} \\).",finalAnswer:"V_s \\approx 1.84\\,\\mathrm{V}",explanation:"Applying an opposing retarding voltage of 1.84 V performs sufficient negative work to stop even the fastest photoelectrons."}
],
equations:[
{section:"Electron & Cathode Rays",name:"Charge-to-mass ratio<br><img src='images/ch4-l3-eq1.png' style='width:100%; border-radius:8px; margin-top:10px;'>",formula:"\\( \\frac{q}{m} = \\frac{ZE}{DlB^2} \\)",symbols:[{symbol:"q",desc:"Charge (C)"},{symbol:"m",desc:"Mass (kg)"},{symbol:"Z",desc:"Deflection on screen (m)"},{symbol:"E",desc:"Electric field (V/m)"},{symbol:"D",desc:"Distance to screen (m)"},{symbol:"l",desc:"Length of plates (m)"},{symbol:"B",desc:"Magnetic field (T)"}]},
{section:"Photoelectric Effect",name:"Work Function Condition<br><img src='images/ch4-l3-eq2.png' style='width:100%; border-radius:8px; margin-top:10px;'>",formula:"\\( hf \\ge E_0 \\)",symbols:[{symbol:"h",desc:"Planck's constant (6.626×10⁻³⁴ J·s)"},{symbol:"f",desc:"Frequency (Hz)"},{symbol:"E_0",desc:"Work function (J)"}]},
{section:"Photoelectric Effect",name:"Einstein's Photoelectric Equation<br><img src='images/ch4-l3-eq3.png' style='width:100%; border-radius:8px; margin-top:10px;'>",formula:"\\( K_{max} = \\frac{1}{2}mv^2 = hf - E_0 \\)",symbols:[{symbol:"K_{max}",desc:"Maximum kinetic energy (J)"},{symbol:"m",desc:"Mass of electron (kg)"},{symbol:"v",desc:"Velocity of electron (m/s)"},{symbol:"h",desc:"Planck's constant (6.626×10⁻³⁴ J·s)"},{symbol:"f",desc:"Frequency (Hz)"},{symbol:"E_0",desc:"Work function (J)"}]}
],
flashcards:[
{front:"Who discovered the electron and what experiment did they use?", back:"J.J. Thomson discovered the electron using the cathode ray tube experiment."},
{front:"What did Rutherford's gold foil experiment prove?", back:"It proved that the atom has a small, dense, positively charged nucleus."},
{front:"What is a nucleon?", back:"A particle found in the nucleus (either a proton or a neutron)."},
{front:"What is the photoelectric effect?", back:"The emission of electrons from a metal surface when light of a high enough frequency shines on it."},
{front:"What is the work function (\\( E_0 \\))?", back:"The minimum energy required to completely remove an electron from a metal surface."},
{front:"What is Einstein's photoelectric equation?", back:"\\( K_{max} = hf - E_0 \\)"},
{front:"What did the Bohr Atomic Model propose about electron orbits?", back:"Electrons move only in specific permitted circular orbits (stationary energy levels) without radiating energy."},
{front:"How is a line emission spectrum produced?", back:"When an electron transitions from a higher excited energy state down to a lower energy state, emitting a photon."},
{front:"What happens if an electron absorbs energy greater than the ionization energy?", back:"It completely escapes from the atom, causing the atom to become ionized."},
{front:"In J.J. Thomson's experiment, what happens when the electric and magnetic forces are equal?", back:"The charged particles pass through the fields in a straight line without deflection (\\( qE = qvB \\))."}
],
quiz:[
{question:"In Thomson's cathode ray experiment, the cathode ray was deflected toward the positive plate. This indicated that:", options:["The particles are positively charged","The particles carry a negative electric charge","The particles are neutral","The particles are electromagnetic waves"], correctIndex:1, feedback:"Attraction to a positive plate confirms the cathode rays (electrons) are negatively charged."},
{question:"Rutherford's gold foil experiment showed that most alpha particles passed straight through. This means:", options:["The nucleus is very large","Atoms are mostly empty space","Electrons are massive","Alpha particles have no charge"], correctIndex:1, feedback:"Because very few deflected, Rutherford concluded the atom is mostly empty space with a tiny, dense nucleus."},
{question:"According to Einstein's explanation of the photoelectric effect, light consists of particles called:", options:["Protons","Neutrons","Photons","Positrons"], correctIndex:2, feedback:"Einstein proposed that light consists of discrete energy quanta called photons."},
{question:"To eject an electron from a metal, the incident photon's energy (\\(hf\\)) must be:", options:["Less than the work function","Equal to the kinetic energy","Greater than or equal to the work function (\\(E_0\\))","Independent of the material"], correctIndex:2, feedback:"The photon must have enough energy to overcome the binding energy (work function) of the metal."},
{question:"Einstein's photoelectric equation is given by:", options:["\\( K_{max} = hf + E_0 \\)","\\( K_{max} = E_0 - hf \\)","\\( K_{max} = hf / E_0 \\)","\\( K_{max} = hf - E_0 \\)"], correctIndex:3, feedback:"The maximum kinetic energy is the leftover energy after subtracting the work function from the photon's energy."},
{question:"Bohr's model of the atom resolved a major flaw in classical physics by proposing that:", options:["Electrons constantly radiate energy","Electrons exist in stationary orbits where they do not emit energy","The nucleus orbits the electrons","Electrons can exist at any distance from the nucleus"], correctIndex:1, feedback:"Bohr quantized the orbits, stating electrons in permitted levels do not radiate energy and spiral inward."},
{question:"When an electron jumps from a higher energy level to a lower energy level, it:", options:["Absorbs a photon","Emits a photon","Becomes a proton","Reverses its charge"], correctIndex:1, feedback:"Transitioning to a lower state releases energy in the form of an emitted photon."},
{question:"The lowest energy level of a hydrogen atom (\\( n = 1 \\)) is called its:", options:["Excited state","Ionization state","Ground state","Quantum state"], correctIndex:2, feedback:"The lowest and most stable energy level is the ground state."},
{question:"What is the charge of a neutron?", options:["Positive","Negative","Neutral (Zero)","Variable"], correctIndex:2, feedback:"A neutron is an electrically neutral particle in the nucleus."},
{question:"J.J. Thomson balanced electric and magnetic forces to determine what property of the electron?", options:["Its exact mass","Its exact charge","Its orbital radius","Its charge-to-mass ratio (e/m)"], correctIndex:3, feedback:"Thomson's experiment accurately measured the ratio \\( e/m \\), though Millikan later found the exact charge."}
]
}
]
};

window.physicsData = data;
window.appData = data;
window.loadLessons = loadLessons;
window.appLoadLessons = loadLessons;
window.renderLessonsList = loadLessons;
window.loadLessonDetail = loadLessonDetail;
window.appLoadLessonDetail = loadLessonDetail;
window.openLessonDetail = loadLessonDetail;
window.switchTab = switchTab;
window.appSwitchTab = switchTab;
try {
    window.dispatchEvent(new CustomEvent('physicsDataReady', { detail: data }));
} catch (e) {}

const CHAPTER_THEMES = {
    // Grade 9
    "g9-l1": {
        color: "#0288d1",
        gradient: "linear-gradient(135deg, #00bcd4 0%, #0288d1 100%)",
        bgLight: "#e0f7fa",
        borderLight: "#b2ebf2",
        shadow: "rgba(2, 136, 209, 0.22)",
        icon: "fa-scale-balanced",
        subtitle: "Moments, Parallel Forces, Couple & Equilibrium",
        chips: ["Moments", "Couples", "Equilibrium"]
    },
    "g9-l2": {
        color: "#d97706",
        gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
        bgLight: "#fef3c7",
        borderLight: "#fde68a",
        shadow: "rgba(217, 119, 6, 0.22)",
        icon: "fa-gears",
        subtitle: "Levers, Pulleys, Inclined Plane, Gears & Wheel and Axle",
        chips: ["Levers", "Pulleys", "Incline Plane", "Gears", "Wheel & Axle"]
    },
    "g9-l3": {
        color: "#4f46e5",
        gradient: "linear-gradient(135deg, #6366f1 0%, #4338ca 100%)",
        bgLight: "#e0e7ff",
        borderLight: "#c7d2fe",
        shadow: "rgba(79, 70, 229, 0.22)",
        icon: "fa-bolt-lightning",
        subtitle: "Current, Voltage, Resistance, Ohm's Law & Electric Power",
        chips: ["Ohm's Law", "Power Formulas", "Domestic Wiring"]
    },
    "g9-l4": {
        color: "#e11d48",
        gradient: "linear-gradient(135deg, #f43f5e 0%, #be123c 100%)",
        bgLight: "#ffe4e6",
        borderLight: "#fecdd3",
        shadow: "rgba(225, 29, 72, 0.22)",
        icon: "fa-magnet",
        subtitle: "Magnetic Field Lines, Solenoids & Wire Deflection",
        chips: ["B-Field", "Solenoid Coil", "Wire in Field"]
    },
    "g9-l5": {
        color: "#059669",
        gradient: "linear-gradient(135deg, #10b981 0%, #047857 100%)",
        bgLight: "#d1fae5",
        borderLight: "#a7f3d0",
        shadow: "rgba(5, 150, 105, 0.22)",
        icon: "fa-lightbulb",
        subtitle: "Reflection, Pinhole Camera, Refraction, Snell's Law & Mirrors",
        chips: ["Reflection", "Snell's Law", "Lenses & Mirrors"]
    },
    // Grade 12
    "g12-l1": {
        color: "#0d9488",
        gradient: "linear-gradient(135deg, #14b8a6 0%, #0f766e 100%)",
        bgLight: "#ccfbf1",
        borderLight: "#99f6e4",
        shadow: "rgba(13, 148, 136, 0.22)",
        icon: "fa-wind",
        subtitle: "Gas Laws, Pressure, Molecular Kinetic Energy & RMS Speed",
        chips: ["Ideal Gas Laws", "Molecular Speed", "Pressure"]
    },
    "g12-l2": {
        color: "#ea580c",
        gradient: "linear-gradient(135deg, #f97316 0%, #c2410c 100%)",
        bgLight: "#ffedd5",
        borderLight: "#fed7aa",
        shadow: "rgba(234, 88, 12, 0.22)",
        icon: "fa-fire-flame-curved",
        subtitle: "First Law of Thermodynamics, Work Done & Thermodynamic Processes",
        chips: ["First Law", "Work Done", "Heat Capacity"]
    },
    "g12-l3": {
        color: "#dc2626",
        gradient: "linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)",
        bgLight: "#fee2e2",
        borderLight: "#fecaca",
        shadow: "rgba(220, 38, 38, 0.22)",
        icon: "fa-gauge-high",
        subtitle: "Carnot Engine, Thermal Efficiency & Heat Reservoirs",
        chips: ["Carnot Cycle", "Efficiency", "Heat Transfer"]
    },
    "g12-l4": {
        color: "#0284c7",
        gradient: "linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%)",
        bgLight: "#e0f2fe",
        borderLight: "#bae6fd",
        shadow: "rgba(2, 132, 199, 0.22)",
        icon: "fa-water",
        subtitle: "Principle of Superposition, Standing Wave Nodes, Antinodes & Resonances",
        chips: ["Superposition", "Standing Waves", "Nodes & Antinodes"]
    },
    "g12-waves": {
        color: "#0284c7",
        gradient: "linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%)",
        bgLight: "#e0f2fe",
        borderLight: "#bae6fd",
        shadow: "rgba(2, 132, 199, 0.22)",
        icon: "fa-water",
        subtitle: "Principle of Superposition, Standing Wave Nodes, Antinodes & Resonances",
        chips: ["Superposition", "Standing Waves", "Nodes & Antinodes"]
    },
    "g12-interf": {
        color: "#7c3aed",
        gradient: "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)",
        bgLight: "#ede9fe",
        borderLight: "#ddd6fe",
        shadow: "rgba(124, 58, 237, 0.22)",
        icon: "fa-braille",
        subtitle: "Young's Double-Slit, Path Difference, Fringe Width & Diffraction Minima",
        chips: ["Double Slit", "Interference", "Diffraction"]
    },
    "g12-standing": {
        color: "#0284c7",
        gradient: "linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%)",
        bgLight: "#e0f2fe",
        borderLight: "#bae6fd",
        shadow: "rgba(2, 132, 199, 0.22)",
        icon: "fa-water",
        subtitle: "Principle of Superposition, Standing Wave Nodes, Antinodes & Resonances",
        chips: ["Superposition", "Standing Waves", "Nodes & Antinodes"]
    },
    "g12-l5": {
        color: "#be123c",
        gradient: "linear-gradient(135deg, #e11d48 0%, #9f1239 100%)",
        bgLight: "#ffe4e6",
        borderLight: "#fecdd3",
        shadow: "rgba(190, 18, 60, 0.22)",
        icon: "fa-compass",
        subtitle: "Biot-Savart, Lorentz Force, Faraday's Law, RL Circuit & Self-Inductance",
        chips: ["B-Fields", "Lorentz Force", "Induction", "RL Circuit"]
    },
    "g12-mag": {
        color: "#be123c",
        gradient: "linear-gradient(135deg, #e11d48 0%, #9f1239 100%)",
        bgLight: "#ffe4e6",
        borderLight: "#fecdd3",
        shadow: "rgba(190, 18, 60, 0.22)",
        icon: "fa-compass",
        subtitle: "Biot-Savart, Solenoids, Lorentz Force, Cyclotron & RL Circuit",
        chips: ["B-Fields", "Lorentz Force", "RL Circuit", "Induction"]
    },
    "g12-l6": {
        color: "#2563eb",
        gradient: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
        bgLight: "#eff6ff",
        borderLight: "#bfdbfe",
        shadow: "rgba(37, 99, 235, 0.22)",
        icon: "fa-wave-square",
        subtitle: "AC Waveforms, RMS Values, RLC Series Impedance & Transformers",
        chips: ["AC Current", "RLC Circuit", "Impedance", "Transformers"]
    },
    "g12-ch4-l1": {
        color: "#059669",
        gradient: "linear-gradient(135deg, #10b981 0%, #047857 100%)",
        bgLight: "#d1fae5",
        borderLight: "#a7f3d0",
        shadow: "rgba(5, 150, 105, 0.22)",
        icon: "fa-microchip",
        subtitle: "Semiconductor Doping, P-N Junction & Transistor Amplification",
        chips: ["P-N Junction", "Transistors", "Current Gain"]
    },
    "g12-ch4-l2": {
        color: "#9333ea",
        gradient: "linear-gradient(135deg, #a855f7 0%, #7e22ce 100%)",
        bgLight: "#f3e8ff",
        borderLight: "#e9d5ff",
        shadow: "rgba(147, 51, 234, 0.22)",
        icon: "fa-clock-rotate-left",
        subtitle: "Michelson-Morley, Lorentz Transformation & Special Relativity",
        chips: ["Lorentz Factor", "Relativity", "Speed of Light"]
    },
    "g12-ch4-l3": {
        color: "#2563eb",
        gradient: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
        bgLight: "#dbeafe",
        borderLight: "#bfdbfe",
        shadow: "rgba(37, 99, 235, 0.22)",
        icon: "fa-atom",
        subtitle: "Cathode Rays, Thomson e/m, Photoelectric Effect & Bohr Model",
        chips: ["Thomson e/m", "Photoelectric", "Bohr Atom"]
    },
    // --- GRADE 7 CHAPTER THEMES ---
    "g7-l1": {
        color: "#0d9488",
        gradient: "linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)",
        bgLight: "#ccfbf1",
        borderLight: "#99f6e4",
        shadow: "rgba(13, 148, 136, 0.22)",
        icon: "fa-scale-balanced",
        subtitle: "Physical Quantities, SI Units, Volume & Mass Density",
        chips: ["Units", "Mass", "Density", "Displacement"]
    },
    "g7-l2": {
        color: "#059669",
        gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
        bgLight: "#d1fae5",
        borderLight: "#a7f3d0",
        shadow: "rgba(5, 150, 105, 0.22)",
        icon: "fa-person-running",
        subtitle: "Forces, Contact Types, Speed & Net Force Calculations",
        chips: ["Friction", "Speed", "Net Force", "Motion"]
    },
    "g7-l3": {
        color: "#0284c7",
        gradient: "linear-gradient(135deg, #38bdf8 0%, #0284c7 100%)",
        bgLight: "#e0f2fe",
        borderLight: "#bae6fd",
        shadow: "rgba(2, 132, 199, 0.22)",
        icon: "fa-arrows-down-to-line",
        subtitle: "Pressure in Solids, Fluid Hydrostatic Pressure & Pascal's Principle",
        chips: ["Pressure", "Pascal", "Fluid Depth", "Atmosphere"]
    },
    "g7-l4": {
        color: "#d97706",
        gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
        bgLight: "#fef3c7",
        borderLight: "#fde68a",
        shadow: "rgba(217, 119, 6, 0.22)",
        icon: "fa-temperature-three-quarters",
        subtitle: "Particle Model, Temperature Scales, Expansion & Phase Transitions",
        chips: ["Temperature", "Kelvin", "Expansion", "States of Matter"]
    },
    // --- GRADE 8 CHAPTER THEMES ---
    "g8-l1": {
        color: "#ea580c",
        gradient: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
        bgLight: "#ffedd5",
        borderLight: "#fed7aa",
        shadow: "rgba(234, 88, 12, 0.22)",
        icon: "fa-bolt",
        subtitle: "Mechanical Work, Kinetic Energy, Potential Energy & Power",
        chips: ["Work", "Kinetic Energy", "Potential Energy", "Power"]
    },
    "g8-l2": {
        color: "#dc2626",
        gradient: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
        bgLight: "#fee2e2",
        borderLight: "#fecaca",
        shadow: "rgba(220, 38, 38, 0.22)",
        icon: "fa-fire-flame-curved",
        subtitle: "Conduction, Convection, Radiation, Specific Heat & Latent Heat",
        chips: ["Conduction", "Convection", "Specific Heat", "Latent Heat"]
    },
    "g8-l3": {
        color: "#2563eb",
        gradient: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
        bgLight: "#dbeafe",
        borderLight: "#bfdbfe",
        shadow: "rgba(37, 99, 235, 0.22)",
        icon: "fa-wave-square",
        subtitle: "Transverse & Longitudinal Waves, Sound Speed & Echo Ranging",
        chips: ["Wavelength", "Frequency", "Wave Speed", "Echo"]
    },
    "g8-l4": {
        color: "#7c3aed",
        gradient: "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)",
        bgLight: "#ede9fe",
        borderLight: "#ddd6fe",
        shadow: "rgba(124, 58, 237, 0.22)",
        icon: "fa-plug",
        subtitle: "Electric Current, Voltage, Resistance, Ohm's Law & Series-Parallel Circuits",
        chips: ["Current", "Voltage", "Ohm's Law", "Circuits"]
    },
    // --- GRADE 10 CHAPTER THEMES ---
    "g10-l1": {
        color: "#1d4ed8",
        gradient: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
        bgLight: "#dbeafe",
        borderLight: "#bfdbfe",
        shadow: "rgba(29, 78, 216, 0.22)",
        icon: "fa-arrow-trend-up",
        subtitle: "Uniform Acceleration, Kinematic Equations, Free Fall & Projectile Trajectories",
        chips: ["Kinematics", "Acceleration", "Free Fall", "Projectiles"]
    },
    "g10-l2": {
        color: "#4338ca",
        gradient: "linear-gradient(135deg, #6366f1 0%, #4338ca 100%)",
        bgLight: "#e0e7ff",
        borderLight: "#c7d2fe",
        shadow: "rgba(67, 56, 202, 0.22)",
        icon: "fa-hand-fist",
        subtitle: "Newton's Three Laws, Friction Forces & Inclined Plane Dynamics",
        chips: ["Inertia", "Newton II", "Friction", "Inclines"]
    },
    "g10-l3": {
        color: "#6d28d9",
        gradient: "linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)",
        bgLight: "#ede9fe",
        borderLight: "#ddd6fe",
        shadow: "rgba(109, 40, 217, 0.22)",
        icon: "fa-arrows-split-up-and-left",
        subtitle: "Work-Energy Theorem, Impulse, and Elastic & Inelastic Collisions",
        chips: ["Work-Energy", "Momentum", "Impulse", "Collisions"]
    },
    "g10-l4": {
        color: "#a21caf",
        gradient: "linear-gradient(135deg, #c026d3 0%, #86198f 100%)",
        bgLight: "#fae8ff",
        borderLight: "#f5d0fe",
        shadow: "rgba(162, 28, 175, 0.22)",
        icon: "fa-earth-americas",
        subtitle: "Centripetal Acceleration, Universal Gravitation & Satellite Orbits",
        chips: ["Centripetal", "Gravitation", "Orbits", "Kepler"]
    },
    // --- GRADE 11 CHAPTER THEMES ---
    "g11-l1": {
        color: "#be123c",
        gradient: "linear-gradient(135deg, #e11d48 0%, #be123c 100%)",
        bgLight: "#ffe4e6",
        borderLight: "#fecdd3",
        shadow: "rgba(190, 18, 60, 0.22)",
        icon: "fa-arrows-spin",
        subtitle: "Torque, Static Equilibrium, Moment of Inertia & Angular Momentum",
        chips: ["Torque", "Equilibrium", "Moment of Inertia", "Angular Momentum"]
    },
    "g11-l2": {
        color: "#0369a1",
        gradient: "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)",
        bgLight: "#e0f2fe",
        borderLight: "#bae6fd",
        shadow: "rgba(3, 105, 161, 0.22)",
        icon: "fa-water",
        subtitle: "Archimedes' Buoyancy, Continuity Equation, Bernoulli & Ideal Gas Laws",
        chips: ["Buoyancy", "Continuity", "Bernoulli", "Gas Law"]
    },
    "g11-l3": {
        color: "#7e22ce",
        gradient: "linear-gradient(135deg, #9333ea 0%, #6b21a8 100%)",
        bgLight: "#f3e8ff",
        borderLight: "#e9d5ff",
        shadow: "rgba(126, 34, 206, 0.22)",
        icon: "fa-circle-nodes",
        subtitle: "Hooke's Law, Mass-Spring & Pendulum Oscillations & Doppler Shift",
        chips: ["SHM", "Pendulum", "Oscillations", "Doppler"]
    },
    "g11-l4": {
        color: "#b45309",
        gradient: "linear-gradient(135deg, #d97706 0%, #b45309 100%)",
        bgLight: "#fef3c7",
        borderLight: "#fde68a",
        shadow: "rgba(180, 83, 9, 0.22)",
        icon: "fa-car-battery",
        subtitle: "Coulomb's Law, Electric Fields, Potential Difference & Capacitors",
        chips: ["Coulomb", "Electric Field", "Capacitance", "Stored Energy"]
    }
};
window.CHAPTER_THEMES = CHAPTER_THEMES;

const DEFAULT_PALETTES = [
    { color: "#0288d1", gradient: "linear-gradient(135deg, #00bcd4 0%, #0288d1 100%)", bgLight: "#e0f7fa", borderLight: "#b2ebf2", shadow: "rgba(2, 136, 209, 0.2)", icon: "fa-atom" },
    { color: "#d97706", gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)", bgLight: "#fef3c7", borderLight: "#fde68a", shadow: "rgba(217, 119, 6, 0.2)", icon: "fa-bolt" },
    { color: "#7c3aed", gradient: "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)", bgLight: "#ede9fe", borderLight: "#ddd6fe", shadow: "rgba(124, 58, 237, 0.2)", icon: "fa-dna" },
    { color: "#059669", gradient: "linear-gradient(135deg, #10b981 0%, #047857 100%)", bgLight: "#d1fae5", borderLight: "#a7f3d0", shadow: "rgba(5, 150, 105, 0.2)", icon: "fa-flask" },
    { color: "#e11d48", gradient: "linear-gradient(135deg, #f43f5e 0%, #be123c 100%)", bgLight: "#ffe4e6", borderLight: "#fecdd3", shadow: "rgba(225, 29, 72, 0.2)", icon: "fa-compass" }
];
window.DEFAULT_PALETTES = DEFAULT_PALETTES;

// --- App State ---
let currentGrade = null;
let currentLesson = null;
let currentFlashcardIndex = 0;
let currentQuizIndex = 0;
let quizScore = 0;
const renderedTabsInCurrentLesson = new Set();

// --- Dynamic Games & Links Loader (Auto-refreshes from games.json without browser cache) ---
let externalGamesCache = null;

function normalizeGamesList(raw) {
    if (!raw) return [];
    if (typeof raw === 'string') {
        const trimmed = raw.trim();
        return trimmed ? [{ topic: "Interactive Simulation", url: trimmed }] : [];
    }
    if (Array.isArray(raw)) {
        return raw.map((item, idx) => {
            if (typeof item === 'string') {
                return { topic: `Simulation ${idx + 1}`, url: item };
            }
            if (item && typeof item === 'object') {
                return {
                    topic: item.topic || item.name || item.title || `Simulation ${idx + 1}`,
                    url: item.url || item.link || ""
                };
            }
            return null;
        }).filter(g => g && g.url);
    }
    if (typeof raw === 'object') {
        return Object.entries(raw).map(([topic, val]) => {
            if (typeof val === 'string') return { topic, url: val };
            if (val && typeof val === 'object' && val.url) return { topic: val.topic || topic, url: val.url };
            return null;
        }).filter(g => g && g.url);
    }
    return [];
}

function findLessonEntryInConfig(config, lessonId) {
    if (!config || typeof config !== 'object') return null;
    if (config[lessonId]) return config[lessonId];
    for (const key of Object.keys(config)) {
        const val = config[key];
        if (val && typeof val === 'object' && val[lessonId]) {
            return val[lessonId];
        }
    }
    return null;
}

function applyExternalGames(config) {
    if (!config) return;
    ['7', '8', '9', '10', '11', '12'].forEach(gradeKey => {
        const list = data[gradeKey];
        if (!list) return;
        list.forEach(lesson => {
            const entry = findLessonEntryInConfig(config, lesson.id);
            if (entry) {
                if (entry.games) {
                    lesson.games = normalizeGamesList(entry.games);
                } else if (Array.isArray(entry) || typeof entry === 'string') {
                    lesson.games = normalizeGamesList(entry);
                } else if (typeof entry === 'object') {
                    lesson.games = normalizeGamesList(entry);
                }
            }
        });
    });
}

async function loadExternalGamesConfig() {
    try {
        if (!window.location.protocol.startsWith('http')) return;
        const res = await fetch('games.json?t=' + Date.now(), { cache: 'no-store' });
        if (!res.ok) return;
        let text = await res.text();
        text = text.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*$/gm, '');
        text = text.replace(/,\s*([\]\}])/g, '$1');
        
        let parsed;
        try {
            parsed = JSON.parse(text);
        } catch (e) {
            try {
                parsed = (new Function('return ' + text))();
            } catch (err) {
                console.warn('Could not parse games.json:', err);
                return;
            }
        }
        
        if (parsed) {
            externalGamesCache = parsed;
            applyExternalGames(parsed);
            if (typeof currentLesson !== 'undefined' && currentLesson) {
                const updated = (data[currentGrade] || []).find(l => l.id === currentLesson.id);
                if (updated) currentLesson = updated;
                const gameTab = document.getElementById('tab-game');
                if (gameTab && !gameTab.classList.contains('hidden')) {
                    renderGame(currentLesson);
                }
            }
        }
    } catch (e) {
        console.log('Using default in-code games data.');
    }
}

// Fetch games.json immediately in background
loadExternalGamesConfig();

let externalWorksheetsCache = null;

function applyExternalWorksheets(config) {
    if (!config) return;
    ['7', '8', '9', '10', '11', '12'].forEach(gradeKey => {
        const list = data[gradeKey];
        if (!list) return;
        list.forEach(lesson => {
            const entry = findLessonEntryInConfig(config, lesson.id);
            if (entry) {
                if (typeof entry === 'string') {
                    lesson.worksheetUrl = entry.trim();
                } else if (entry.worksheet) {
                    lesson.worksheetUrl = entry.worksheet.trim();
                } else if (entry.worksheetUrl) {
                    lesson.worksheetUrl = entry.worksheetUrl.trim();
                } else if (entry.url) {
                    lesson.worksheetUrl = entry.url.trim();
                }
            }
        });
    });
}

async function loadExternalWorksheetsConfig() {
    try {
        if (!window.location.protocol.startsWith('http')) return;
        const res = await fetch('worksheets.json?t=' + Date.now(), { cache: 'no-store' });
        if (!res.ok) return;
        let text = await res.text();
        text = text.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*$/gm, '');
        text = text.replace(/,\s*([\]\}])/g, '$1');
        
        let parsed;
        try {
            parsed = JSON.parse(text);
        } catch (e) {
            try {
                parsed = (new Function('return ' + text))();
            } catch (err) {
                console.warn('Could not parse worksheets.json:', err);
                return;
            }
        }
        
        if (parsed) {
            externalWorksheetsCache = parsed;
            applyExternalWorksheets(parsed);
            if (typeof currentLesson !== 'undefined' && currentLesson) {
                const updated = (data[currentGrade] || []).find(l => l.id === currentLesson.id);
                if (updated) currentLesson = updated;
                const wsTab = document.getElementById('tab-worksheet');
                if (wsTab && !wsTab.classList.contains('hidden')) {
                    renderWorksheet(currentLesson);
                }
            }
        }
    } catch (e) {
        console.log('Using default in-code worksheets data.');
    }
}

// Fetch worksheets.json immediately in background
loadExternalWorksheetsConfig();

// --- DOM Elements ---
const viewDashboard = document.getElementById('view-dashboard');
const viewLessons = document.getElementById('view-lessons');
const viewLessonDetail = document.getElementById('view-lesson-detail');
const homeBtn = document.getElementById('home-btn');
const backToLessonsBtn = document.getElementById('back-to-lessons-btn');
const backToDashboardBtn = document.getElementById('back-to-dashboard-btn');

// --- Navigation ---
function showView(viewElement) {
    if (typeof viewElement === 'string') {
        viewElement = document.getElementById(viewElement);
    }
    if (!viewElement) return;
    const views = document.querySelectorAll('.view');
    views.forEach(el => {
        el.classList.remove('active');
        el.classList.add('hidden');
        el.style.display = 'none';
    });
    viewElement.classList.remove('hidden');
    viewElement.classList.add('active');
    viewElement.style.display = 'block';
    viewElement.style.opacity = '1';
    viewElement.style.visibility = 'visible';
    window.scrollTo(0, 0);
}

function showDashboard(pushRoute = true) {
    if (pushRoute && window.location.hash !== '' && window.location.hash !== '#') {
        try {
            history.pushState({ view: 'dashboard' }, '', window.location.pathname + window.location.search);
        } catch (e) {
            window.location.hash = '';
        }
    }
    showView(viewDashboard);
}

function showLessonsView(pushRoute = true) {
    if (currentGrade) {
        loadLessons(currentGrade, pushRoute);
    } else if (window.pendingGrade) {
        loadLessons(window.pendingGrade, pushRoute);
    } else {
        loadLessons('9', pushRoute);
    }
}

window.showView = showView;
window.showDashboard = showDashboard;
window.appShowDashboard = showDashboard;
window.showLessonsView = showLessonsView;
window.appShowLessonsView = showLessonsView;

if (homeBtn) homeBtn.addEventListener('click', () => showDashboard(true));
if (backToLessonsBtn) backToLessonsBtn.addEventListener('click', () => showLessonsView(true));
if (backToDashboardBtn) backToDashboardBtn.addEventListener('click', () => showDashboard(true));

// Expose globally early
window.loadLessons = loadLessons;
window.appLoadLessons = loadLessons;
window.renderLessonsList = loadLessons;
window.loadLessonDetail = loadLessonDetail;
window.appLoadLessonDetail = loadLessonDetail;
window.openLessonDetail = loadLessonDetail;
window.switchTab = switchTab;
window.appSwitchTab = switchTab;

// --- Grade Selection ---
function bindGradeSelection() {
    Array.from(document.querySelectorAll('.grade-card')).forEach(card => {
        card.addEventListener('click', () => {
            const grade = card.getAttribute('data-grade');
            if (grade) loadLessons(grade);
        });
    });

    Array.from(document.querySelectorAll('.btn-grade')).forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const gradeMatch = btn.className.match(/btn-grade-(\d+)/);
            const grade = btn.getAttribute('data-grade') || (gradeMatch ? gradeMatch[1] : null);
            if (grade) loadLessons(grade);
        });
    });
}
bindGradeSelection();

// Document-level fallback delegation to guarantee clicks on grade cards always fire
document.addEventListener('click', function(e) {
    const btn = e.target.closest('.btn-grade');
    if (btn) {
        const gradeMatch = btn.className.match(/btn-grade-(\d+)/);
        const grade = btn.getAttribute('data-grade') || (gradeMatch ? gradeMatch[1] : null);
        if (grade) {
            loadLessons(grade);
            return;
        }
    }
    const card = e.target.closest('.grade-card');
    if (card) {
        const cardMatch = card.className.match(/grade-card-(\d+)/);
        const grade = card.getAttribute('data-grade') || (cardMatch ? cardMatch[1] : null);
        if (grade) {
            loadLessons(grade);
        }
    }
});

function loadLessons(grade, pushRoute = true) {
    if (!grade) return;
    currentGrade = String(grade);
    window.currentGrade = currentGrade;
    
    // Switch view immediately so the user experiences zero lag and instant response
    showView(viewLessons);

    if (pushRoute) {
        const targetHash = `#grade-${currentGrade}`;
        if (window.location.hash !== targetHash) {
            try {
                history.pushState({ grade: currentGrade }, '', targetHash);
            } catch (e) {
                window.location.hash = targetHash;
            }
        }
    }

    try {
        // Update Hero Banner & Grade Indicator
        const heroBanner = document.getElementById('lessons-hero-banner');
        const badgeText = document.getElementById('lessons-badge-text');
        const titleEl = document.getElementById('lessons-title');
        const subtitleEl = document.getElementById('lessons-subtitle');
        const statsBar = document.getElementById('lessons-stats-bar');
        const gradeIndicator = document.getElementById('lessons-grade-indicator');
        const gradePillText = document.getElementById('lessons-grade-pill-text');

        if (heroBanner) {
            heroBanner.classList.remove('hero-theme-7', 'hero-theme-8', 'hero-theme-9', 'hero-theme-10', 'hero-theme-11', 'hero-theme-12');
            heroBanner.classList.add(`hero-theme-${currentGrade}`);
        }
        if (gradeIndicator) {
            gradeIndicator.classList.remove('indicator-grade-7', 'indicator-grade-8', 'indicator-grade-9', 'indicator-grade-10', 'indicator-grade-11', 'indicator-grade-12');
            gradeIndicator.classList.add(`indicator-grade-${currentGrade}`);
        }
        if (gradePillText) {
            gradePillText.innerText = `Grade ${currentGrade}`;
        }

        const lessonsList = data[currentGrade] || [];
        const totalChapters = lessonsList.length;
        let totalFormulas = 0;
        let totalSimulations = 0;
        lessonsList.forEach(l => {
            totalFormulas += (l.equations || []).length;
            if (l.games && l.games.length > 0) totalSimulations += l.games.length;
        });

        if (currentGrade === '7') {
            if (badgeText) badgeText.innerHTML = '<i class="fa-solid fa-seedling"></i> Grade 7 • Introduction to Physics & Scientific Inquiry';
            if (titleEl) titleEl.innerHTML = '<span class="title-highlight-g7">Grade 7</span> Physics';
            if (subtitleEl) subtitleEl.innerText = 'Measurement, Density, Forces, Friction, Hydrostatic Pressure, and Thermal Energy';
            if (statsBar) {
                statsBar.innerHTML = `
                    <span class="stat-pill"><i class="fa-solid fa-layer-group"></i> ${totalChapters} Chapters</span>
                    <span class="stat-pill"><i class="fa-solid fa-square-root-variable"></i> ${totalFormulas} Formulas</span>
                    <span class="stat-pill"><i class="fa-solid fa-gamepad"></i> ${totalSimulations || 4} Simulations</span>
                    <span class="stat-pill"><i class="fa-solid fa-file-pdf"></i> Worksheets</span>
                    <span class="stat-pill"><i class="fa-solid fa-brain"></i> Quizzes</span>
                `;
            }
        } else if (currentGrade === '8') {
            if (badgeText) badgeText.innerHTML = '<i class="fa-solid fa-bolt"></i> Grade 8 • Energy, Waves & Electrical Foundations';
            if (titleEl) titleEl.innerHTML = '<span class="title-highlight-g8">Grade 8</span> Physics';
            if (subtitleEl) subtitleEl.innerText = 'Work, Mechanical Energy, Heat Transfer, Sound & Acoustic Waves, and DC Circuits';
            if (statsBar) {
                statsBar.innerHTML = `
                    <span class="stat-pill"><i class="fa-solid fa-layer-group"></i> ${totalChapters} Chapters</span>
                    <span class="stat-pill"><i class="fa-solid fa-square-root-variable"></i> ${totalFormulas} Formulas</span>
                    <span class="stat-pill"><i class="fa-solid fa-gamepad"></i> ${totalSimulations || 4} Simulations</span>
                    <span class="stat-pill"><i class="fa-solid fa-file-pdf"></i> Worksheets</span>
                    <span class="stat-pill"><i class="fa-solid fa-brain"></i> Quizzes</span>
                `;
            }
        } else if (currentGrade === '9') {
            if (badgeText) badgeText.innerHTML = '<i class="fa-solid fa-compass-drafting"></i> Grade 9 • Fundamental Physics Curriculum';
            if (titleEl) titleEl.innerHTML = '<span class="title-highlight-g9">Grade 9</span> Physics';
            if (subtitleEl) subtitleEl.innerText = 'Torque, Simple Machines, Electricity, Magnetism, and Light';
            if (statsBar) {
                statsBar.innerHTML = `
                    <span class="stat-pill"><i class="fa-solid fa-layer-group"></i> ${totalChapters} Chapters</span>
                    <span class="stat-pill"><i class="fa-solid fa-square-root-variable"></i> ${totalFormulas} Formulas</span>
                    <span class="stat-pill"><i class="fa-solid fa-gamepad"></i> ${totalSimulations || 7} Simulations</span>
                    <span class="stat-pill"><i class="fa-solid fa-file-pdf"></i> Worksheets</span>
                    <span class="stat-pill"><i class="fa-solid fa-brain"></i> Quizzes</span>
                `;
            }
        } else if (currentGrade === '10') {
            if (badgeText) badgeText.innerHTML = '<i class="fa-solid fa-rocket"></i> Grade 10 • Classical Mechanics & Kinematics';
            if (titleEl) titleEl.innerHTML = '<span class="title-highlight-g10">Grade 10</span> Physics';
            if (subtitleEl) subtitleEl.innerText = '1D & 2D Kinematics, Newton\'s Laws of Motion, Work-Energy Theorem, and Gravitation';
            if (statsBar) {
                statsBar.innerHTML = `
                    <span class="stat-pill"><i class="fa-solid fa-layer-group"></i> ${totalChapters} Chapters</span>
                    <span class="stat-pill"><i class="fa-solid fa-square-root-variable"></i> ${totalFormulas} Formulas</span>
                    <span class="stat-pill"><i class="fa-solid fa-gamepad"></i> ${totalSimulations || 4} Simulations</span>
                    <span class="stat-pill"><i class="fa-solid fa-file-pdf"></i> Worksheets</span>
                    <span class="stat-pill"><i class="fa-solid fa-brain"></i> Quizzes</span>
                `;
            }
        } else if (currentGrade === '11') {
            if (badgeText) badgeText.innerHTML = '<i class="fa-solid fa-wave-square"></i> Grade 11 • Oscillations, Fluids & Electrostatics';
            if (titleEl) titleEl.innerHTML = '<span class="title-highlight-g11">Grade 11</span> Physics';
            if (subtitleEl) subtitleEl.innerText = 'Rotational Dynamics, Fluid Mechanics, Simple Harmonic Motion, and Coulomb\'s Law';
            if (statsBar) {
                statsBar.innerHTML = `
                    <span class="stat-pill"><i class="fa-solid fa-layer-group"></i> ${totalChapters} Chapters</span>
                    <span class="stat-pill"><i class="fa-solid fa-square-root-variable"></i> ${totalFormulas} Formulas</span>
                    <span class="stat-pill"><i class="fa-solid fa-gamepad"></i> ${totalSimulations || 4} Simulations</span>
                    <span class="stat-pill"><i class="fa-solid fa-file-pdf"></i> Worksheets</span>
                    <span class="stat-pill"><i class="fa-solid fa-brain"></i> Quizzes</span>
                `;
            }
        } else {
            if (badgeText) badgeText.innerHTML = '<i class="fa-solid fa-atom"></i> Grade 12 • Advanced & Modern Physics';
            if (titleEl) titleEl.innerHTML = '<span class="title-highlight-g12">Grade 12</span> Physics';
            if (subtitleEl) subtitleEl.innerText = '4 Comprehensive Chapters • 10 Core Lessons: Ideal Gases, Waves, Magnetism & AC, and Modern Physics';
            if (statsBar) {
                statsBar.innerHTML = `
                    <span class="stat-pill"><i class="fa-solid fa-layer-group"></i> 4 Chapters (${totalChapters} Lessons)</span>
                    <span class="stat-pill"><i class="fa-solid fa-square-root-variable"></i> ${totalFormulas} Formulas</span>
                    <span class="stat-pill"><i class="fa-solid fa-gamepad"></i> PhET & Gemini Sims</span>
                    <span class="stat-pill"><i class="fa-solid fa-file-pdf"></i> Worksheets</span>
                    <span class="stat-pill"><i class="fa-solid fa-brain"></i> Quizzes</span>
                `;
            }
        }

        const container = document.getElementById('lesson-list-container');
        if (container) {
            container.innerHTML = '';
            
            const themes = (typeof CHAPTER_THEMES !== 'undefined' && CHAPTER_THEMES) ? CHAPTER_THEMES : (window.CHAPTER_THEMES || {});
            const palettes = (typeof DEFAULT_PALETTES !== 'undefined' && DEFAULT_PALETTES) ? DEFAULT_PALETTES : (window.DEFAULT_PALETTES || []);

            lessonsList.forEach((lesson, index) => {
                const theme = themes[lesson.id] || (palettes.length ? palettes[index % palettes.length] : { color: "#0288d1", gradient: "linear-gradient(135deg, #00bcd4 0%, #0288d1 100%)", icon: "fa-atom" });
                
                let chapterNum = `Chapter ${index + 1}`;
                let chapterName = lesson.title || 'Lesson';
                if (lesson.title && lesson.title.includes(':')) {
                    const parts = lesson.title.split(':');
                    chapterNum = parts[0].trim();
                    chapterName = parts.slice(1).join(':').trim();
                }

                const chips = theme.chips || [];
                const chipsHtml = chips.map(c => `<span class="topic-tag">${c}</span>`).join('');

                const card = document.createElement('div');
                card.className = 'lesson-card';
                card.setAttribute('data-lesson-id', lesson.id);
                card.style.setProperty('--chapter-accent', theme.color || '#0288d1');
                card.style.setProperty('--chapter-gradient', theme.gradient || 'linear-gradient(135deg, #00bcd4 0%, #0288d1 100%)');
                card.style.setProperty('--chapter-shadow', theme.shadow || 'rgba(2, 136, 209, 0.2)');
                card.style.setProperty('--chapter-bg-light', theme.bgLight || '#e0f7fa');
                card.style.setProperty('--chapter-border-light', theme.borderLight || '#b2ebf2');

                const formulasCount = (lesson.equations || []).length;
                const gamesCount = (lesson.games || []).length;
                const definitionsCount = (lesson.definitions || []).length;
                const examplesCount = (lesson.examples || []).length;
                const hasWorksheet = Boolean(lesson.worksheetUrl);
                const hasQuiz = Boolean(lesson.quiz && lesson.quiz.length > 0);

                card.innerHTML = `
                    <div class="lesson-card-top">
                        <span class="lesson-number-pill"><i class="fa-solid fa-bookmark"></i> ${chapterNum}</span>
                        <div class="lesson-icon-circle">
                            <i class="fa-solid ${theme.icon || 'fa-atom'}"></i>
                        </div>
                    </div>

                    <h3 class="lesson-card-heading">${chapterName}</h3>
                    
                    <p class="lesson-card-desc">${theme.subtitle || 'Complete formulas, clear explanations, definitions, and worked examples.'}</p>

                    ${chipsHtml ? `<div class="lesson-topic-tags">${chipsHtml}</div>` : ''}

                    <div class="lesson-features-row">
                        <span class="feat-pill"><i class="fa-solid fa-square-root-variable"></i> ${formulasCount} Formulas</span>
                        ${definitionsCount > 0 ? `<span class="feat-pill"><i class="fa-solid fa-book"></i> ${definitionsCount} Terms</span>` : ''}
                        ${examplesCount > 0 ? `<span class="feat-pill"><i class="fa-solid fa-lightbulb"></i> ${examplesCount} Examples</span>` : ''}
                        ${gamesCount > 0 ? `<span class="feat-pill feat-sim"><i class="fa-solid fa-gamepad"></i> ${gamesCount} Sim${gamesCount > 1 ? 's' : ''}</span>` : ''}
                        ${hasWorksheet ? `<span class="feat-pill feat-pdf"><i class="fa-solid fa-file-pdf"></i> PDF</span>` : ''}
                        ${hasQuiz ? `<span class="feat-pill feat-quiz"><i class="fa-solid fa-brain"></i> Quiz</span>` : ''}
                    </div>

                    <div class="lesson-card-footer">
                        <span class="btn-start-label"><i class="fa-solid fa-circle-play"></i> Start Lesson</span>
                        <span class="btn-start-arrow"><i class="fa-solid fa-arrow-right"></i></span>
                    </div>
                `;

                card.addEventListener('click', () => loadLessonDetail(lesson, true));
                container.appendChild(card);
            });
        }
    } catch (err) {
        console.error('Error loading lessons:', err);
    }
}

window.executeLessonRender = loadLessons;
window.loadLessons = loadLessons;
window.renderLessonsList = loadLessons;

// High-performance, non-blocking MathJax queue targeting only specific elements
let mathTypesetPromise = Promise.resolve();
function typesetMath(elements) {
    let targets = null;
    if (elements) {
        if (Array.isArray(elements)) {
            targets = elements.filter(Boolean);
        } else if (elements instanceof Element) {
            targets = [elements];
        }
    }

    if (!window.MathJax || !window.MathJax.typesetPromise) {
        if (typeof document !== 'undefined' && !document.getElementById('MathJax-script')) {
            window.MathJax = window.MathJax || {
                tex: {
                    inlineMath: [['$', '$'], ['\\(', '\\)']],
                    displayMath: [['$$', '$$'], ['\\[', '\\]']],
                    processEscapes: true
                },
                options: {
                    skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code']
                }
            };
            const script = document.createElement('script');
            script.id = 'MathJax-script';
            script.async = true;
            script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';
            document.head.appendChild(script);
        }
        let retries = 0;
        const timer = setInterval(() => {
            retries++;
            if (window.MathJax && window.MathJax.typesetPromise) {
                clearInterval(timer);
                typesetMath(targets);
            } else if (retries >= 50) {
                clearInterval(timer);
            }
        }, 120);
        return;
    }

    mathTypesetPromise = mathTypesetPromise
        .catch(() => {})
        .then(() => {
            return new Promise((resolve) => {
                requestAnimationFrame(() => {
                    if (!window.MathJax || !window.MathJax.typesetPromise) {
                        return resolve();
                    }
                    const promise = (targets && targets.length > 0)
                        ? window.MathJax.typesetPromise(targets)
                        : window.MathJax.typesetPromise();
                    promise.then(resolve).catch((err) => {
                        console.warn('MathJax typeset notice:', err);
                        resolve();
                    });
                });
            });
        });
    return mathTypesetPromise;
}

// Helper to ensure math formulas and expressions are recognized and rendered by MathJax
function formatMathField(val) {
    if (!val) return '';
    let trimmed = String(val).trim();
    if (!trimmed) return '';
    if (/<br\s*\/?>/i.test(trimmed)) {
        return trimmed.split(/<br\s*\/?>/i).map(part => formatMathField(part)).join('<br>');
    }
    // Clean up malformed closing/opening delimiters like \\] or \\)
    trimmed = trimmed.replace(/\\{2,}\]/g, '\\]')
                     .replace(/\\{2,}\)/g, '\\)')
                     .replace(/\\{2,}\[/g, '\\[')
                     .replace(/\\{2,}\(/g, '\\(');

    if ((trimmed.startsWith('\\(') && trimmed.endsWith('\\)')) ||
        (trimmed.startsWith('\\[') && trimmed.endsWith('\\]')) ||
        (trimmed.startsWith('$$') && trimmed.endsWith('$$'))) {
        return trimmed;
    }
    if (trimmed.includes('\\(') || trimmed.includes('\\[') || trimmed.includes('$$')) {
        return trimmed;
    }
    return `\\[ ${trimmed} \\]`;
}

// Helper to ensure all LaTeX strings in Summary worked examples & fields are rendered properly
function formatSummaryMath(val) {
    if (val === null || val === undefined) return '';
    let str = String(val).trim();
    if (!str) return '';

    // Clean up malformed closing/opening delimiters
    str = str.replace(/\\{2,}\]/g, '\\]')
             .replace(/\\{2,}\)/g, '\\)')
             .replace(/\\{2,}\[/g, '\\[')
             .replace(/\\{2,}\(/g, '\\(');

    // If string already contains explicit LaTeX delimiters
    if (str.includes('\\(') || str.includes('\\[') || str.includes('$$')) {
        if (!/<(div|p|table|ul|ol|li)[^>]*>/i.test(str)) {
            str = str.replace(/\r?\n/g, '<br>');
        }
        return str;
    }

    // If string is a raw un-delimited LaTeX formula or equation with LaTeX macros
    if (/\\(times|text|frac|sqrt|mu|alpha|beta|gamma|theta|phi|Delta|cdot|approx|le|ge|pm|mathrm|Omega|pi|sigma|lambda|left|right|quad)/.test(str)) {
        if (str.includes('=') || str.includes('\\times') || str.includes('\\frac')) {
            return `\\[ ${str} \\]`;
        }
        return `\\(${str}\\)`;
    }

    // Check for mathematical expressions like v_rms = ... or P = ... containing math operators
    if (/^[A-Za-z_0-9\(\)\{\}\\]+\s*=\s*/.test(str) && (/[_^\+\-\*\/]/.test(str) || /sqrt|approx|times|pi/i.test(str) || /[\u00D7\u2248\u03C0\u03BC\u03A9]/.test(str))) {
        let mathStr = str.replace(/×/g, '\\times ')
                         .replace(/≈/g, '\\approx ')
                         .replace(/π/g, '\\pi ')
                         .replace(/μ/g, '\\mu ')
                         .replace(/Ω/g, '\\Omega ')
                         .replace(/sqrt\(/g, '\\sqrt{')
                         .replace(/\)/g, '}');
        return `\\[ ${mathStr} \\]`;
    }

    return str.replace(/\r?\n/g, '<br>');
}

// --- Lesson Detail ---

function loadLessonDetail(lessonOrId, pushRoute = true) {
    // Reset all Start Lesson button labels back from "Opening..." spinner
    document.querySelectorAll('.btn-start-label').forEach(label => {
        label.innerHTML = '<i class="fa-solid fa-circle-play"></i> Start Lesson';
    });

    let lesson = lessonOrId;
    if (typeof lessonOrId === 'string') {
        let cleanId = String(lessonOrId).replace(/^[#\/]+/, '').replace(/^lesson\//i, '').replace(/\/+$/, '').trim().toLowerCase();
        const aliasMap = {
            'g12-waves': 'g12-l4',
            'g12-standing': 'g12-l4',
            'g12-superposition': 'g12-l4',
            'g12-ch2-l1': 'g12-l4',
            'g12-mag': 'g12-l5',
            'g12-ch3-l1': 'g12-l5',
            'g12-ac': 'g12-l6',
            'g12-ch3-l2': 'g12-l6',
            'g12-diffraction': 'g12-interf',
            'g12-ch2-l2': 'g12-interf',
            'g12-ch1-l1': 'g12-l1',
            'g12-ch1-l2': 'g12-l2',
            'g12-ch1-l3': 'g12-l3',
            'g12-ch4-l1': 'g12-ch4-l1',
            'g12-ch4-l2': 'g12-ch4-l2',
            'g12-ch4-l3': 'g12-ch4-l3'
        };
        if (aliasMap[cleanId]) cleanId = aliasMap[cleanId];
        const pData = (typeof window !== 'undefined' && (window.physicsData || window.appData)) ? (window.physicsData || window.appData) : data;
        const allLessons = Object.values(pData).flat();
        lesson = allLessons.find(l => l.id.toLowerCase() === cleanId) || null;
    }
    if (!lesson) {
        console.warn('Lesson not found:', lessonOrId);
        return;
    }
    currentLesson = lesson;
    window.currentSelectedLessonId = lesson.id;

    // Detect and maintain currentGrade
    for (const gKey of Object.keys(data)) {
        if (data[gKey] && data[gKey].some(l => l.id === lesson.id)) {
            currentGrade = gKey;
            break;
        }
    }
    window.currentGrade = currentGrade;

    if (pushRoute) {
        const targetHash = `#lesson/${lesson.id}`;
        if (window.location.hash !== targetHash) {
            try {
                history.pushState({ lesson: lesson.id }, '', targetHash);
            } catch (e) {
                window.location.hash = targetHash;
            }
        }
    }

    showView(viewLessonDetail);
    document.getElementById('lesson-detail-title').innerText = lesson.title;
    
    const conceptsSection = document.getElementById('lesson-concepts-section');
    if (conceptsSection) {
        conceptsSection.style.display = (lesson.concepts && lesson.concepts.length > 0) ? 'block' : 'none';
    }
    const defsSection = document.getElementById('lesson-definitions-section');
    if (defsSection) {
        defsSection.style.display = (lesson.definitions && lesson.definitions.length > 0) ? 'block' : 'none';
    }
    const examplesSection = document.getElementById('lesson-examples-section');
    if (examplesSection) {
        examplesSection.style.display = (lesson.examples && lesson.examples.length > 0) ? 'block' : 'none';
    }

    const conceptsList = document.getElementById('lesson-concepts');
    conceptsList.innerHTML = (lesson.concepts || []).map(c => `<li>${c}</li>`).join('');
    
    const definitionsGrid = document.getElementById('lesson-definitions');
    definitionsGrid.innerHTML = (lesson.definitions || []).map(d => {
        const descText = d.definition || d.desc || '';
        const metaItems = [];
        if (d.symbol) metaItems.push(`<div class="meta-item"><span class="meta-label">Symbol:</span> <span class="meta-val">${formatMathField(d.symbol)}</span></div>`);
        if (d.unit) metaItems.push(`<div class="meta-item"><span class="meta-label">SI Unit:</span> <span class="meta-val">${String(d.unit).includes('\\') ? formatMathField(d.unit) : d.unit}</span></div>`);
        if (d.equation) metaItems.push(`<div class="meta-item meta-equation"><span class="meta-label">Related Equation:</span> <div class="meta-val">${formatMathField(d.equation)}</div></div>`);
        
        return `
            <div class="definition-card">
                <h4><i class="fa-solid fa-bookmark"></i> ${d.term}</h4>
                <p class="def-desc">${descText}</p>
                ${metaItems.length > 0 ? `<div class="def-meta">${metaItems.join('')}</div>` : ''}
            </div>
        `;
    }).join('');
    
    const examplesContainer = document.getElementById('lesson-examples');
    examplesContainer.innerHTML = (lesson.examples || []).map(e => {
        return `
            <div class="example">
                <div class="example-header">
                    <h4><i class="fa-solid fa-pen-ruler"></i> ${e.title}</h4>
                </div>
                <div class="example-body">
                    ${e.question ? `<div class="example-row example-question"><span class="example-label"><i class="fa-solid fa-circle-question" style="margin-right: 4px;"></i> Question:</span> <div class="example-val">${formatSummaryMath(e.question)}</div></div>` : ''}
                    ${e.given ? `<div class="example-row"><span class="example-label">Given:</span> <div class="example-val">${formatSummaryMath(e.given)}</div></div>` : ''}
                    ${e.find ? `<div class="example-row"><span class="example-label">Find:</span> <div class="example-val">${formatSummaryMath(e.find)}</div></div>` : ''}
                    ${e.equation ? `<div class="example-row"><span class="example-label">Formula:</span> <div class="example-val">${formatMathField(e.equation)}</div></div>` : ''}
                    ${e.rearrangement ? `<div class="example-row"><span class="example-label">Rearrangement:</span> <div class="example-val">${formatMathField(e.rearrangement)}</div></div>` : ''}
                    ${e.solution ? `<div class="example-row"><span class="example-label">Solution:</span> <div class="example-val">${formatSummaryMath(e.solution)}</div></div>` : ''}
                    ${e.finalAnswer ? `<div class="example-row final-answer"><span class="example-label">Final Answer:</span> <div class="example-val"><strong>${formatMathField(e.finalAnswer)}</strong></div></div>` : ''}
                    ${e.explanation ? `<div class="example-row explanation"><span class="example-label">Explanation:</span> <div class="example-val">${formatSummaryMath(e.explanation)}</div></div>` : ''}
                    ${(e.desc || e.content) ? `<p>${e.desc || e.content}</p>` : ''}
                </div>
            </div>
        `;
    }).join('');
    
    if(lesson.gifUrl) {
        document.getElementById('lesson-animation-section').style.display = 'block';
        document.getElementById('lesson-gif').src = lesson.gifUrl;
    } else {
        document.getElementById('lesson-animation-section').style.display = 'none';
        document.getElementById('lesson-gif').src = '';
    }
    
    const hasSummaryContent = (lesson.concepts || []).length > 0 || 
                              (lesson.definitions || []).length > 0 || 
                              (lesson.examples || []).length > 0 || 
                              Boolean(lesson.gifUrl);

    const summaryTabBtn = document.querySelector('.tab-btn[data-target="summary"]');
    if (summaryTabBtn) {
        if(!hasSummaryContent) {
            summaryTabBtn.classList.add('hidden');
        } else {
            summaryTabBtn.classList.remove('hidden');
        }
    }

    const equationsGrid = document.getElementById('lesson-equations');
    let eqHTML = '';
    let currentSection = '';
    
    (lesson.equations || []).forEach(eq => {
        const section = eq.section;
        if (section && section !== currentSection) {
            currentSection = section;
            let sectionGraphic = '';
            if (false && section === "Resolving Force (Angle with horizontal axis)") {
                sectionGraphic = `<div style="text-align: center; margin: 15px 0;"><svg viewBox="-20 -20 160 150" width="200" height="180"><defs><marker id="arr-h" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#8B0000"/></marker><marker id="arr-r-h" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#8B0000"/></marker></defs><line x1="0" y1="100" x2="130" y2="100" stroke="#8B0000" stroke-width="2" marker-end="url(#arr-h)"/><line x1="0" y1="100" x2="0" y2="-10" stroke="#8B0000" stroke-width="2" marker-end="url(#arr-h)"/><text x="135" y="105" fill="#8B0000" font-family="serif" font-style="italic" font-size="18">x</text><text x="-15" y="-10" fill="#8B0000" font-family="serif" font-style="italic" font-size="18">y</text><text x="-15" y="115" fill="#8B0000" font-family="serif" font-style="italic" font-size="18">O</text><line x1="100" y1="100" x2="100" y2="40" stroke="#8B0000" stroke-width="2" stroke-dasharray="6,4"/><line x1="0" y1="40" x2="100" y2="40" stroke="#8B0000" stroke-width="2" stroke-dasharray="6,4"/><text x="100" y="125" fill="#8B0000" font-family="serif" font-style="italic" font-size="18" text-anchor="middle">F<tspan dy="5" font-size="12">x</tspan></text><text x="-25" y="45" fill="#8B0000" font-family="serif" font-style="italic" font-size="18">F<tspan dy="5" font-size="12">y</tspan></text><line x1="0" y1="100" x2="100" y2="40" stroke="#8B0000" stroke-width="3" marker-end="url(#arr-r-h)"/><text x="105" y="35" fill="#8B0000" font-family="serif" font-style="italic" font-size="18" font-weight="bold">F</text><path d="M 35 100 A 35 35 0 0 0 29 80" fill="none" stroke="#8B0000" stroke-width="2"/><text x="42" y="94" fill="#8B0000" font-family="serif" font-style="italic" font-size="18">θ</text></svg></div>`;
            } else if (section === "Resolving Force (Angle with vertical axis)") {
                sectionGraphic = `<div style="text-align: center; margin: 15px 0;"><svg viewBox="-20 -20 160 150" width="200" height="180"><defs><marker id="arr-v" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#8B0000"/></marker><marker id="arr-r-v" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#8B0000"/></marker></defs><line x1="0" y1="100" x2="130" y2="100" stroke="#8B0000" stroke-width="2" marker-end="url(#arr-v)"/><line x1="0" y1="100" x2="0" y2="-10" stroke="#8B0000" stroke-width="2" marker-end="url(#arr-v)"/><text x="135" y="105" fill="#8B0000" font-family="serif" font-style="italic" font-size="18">x</text><text x="-15" y="-10" fill="#8B0000" font-family="serif" font-style="italic" font-size="18">y</text><text x="-15" y="115" fill="#8B0000" font-family="serif" font-style="italic" font-size="18">O</text><line x1="70" y1="100" x2="70" y2="20" stroke="#8B0000" stroke-width="2" stroke-dasharray="6,4"/><line x1="0" y1="20" x2="70" y2="20" stroke="#8B0000" stroke-width="2" stroke-dasharray="6,4"/><text x="70" y="125" fill="#8B0000" font-family="serif" font-style="italic" font-size="18" text-anchor="middle">F<tspan dy="5" font-size="12">x</tspan></text><text x="-25" y="25" fill="#8B0000" font-family="serif" font-style="italic" font-size="18">F<tspan dy="5" font-size="12">y</tspan></text><line x1="0" y1="100" x2="70" y2="20" stroke="#8B0000" stroke-width="3" marker-end="url(#arr-r-v)"/><text x="75" y="15" fill="#8B0000" font-family="serif" font-style="italic" font-size="18" font-weight="bold">F</text><path d="M 0 65 A 35 35 0 0 1 25 75" fill="none" stroke="#8B0000" stroke-width="2"/><text x="10" y="60" fill="#8B0000" font-family="serif" font-style="italic" font-size="18">θ</text></svg></div>`;
            } else if (section === "Resultant Force (Perpendicular)") {
                sectionGraphic = `<div style="text-align: center; margin: 15px 0;"><svg viewBox="0 0 160 160" width="220" height="220"><defs><marker id="arr-b" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#333"/></marker></defs><line x1="20" y1="120" x2="20" y2="20" stroke="#333" stroke-width="2" marker-end="url(#arr-b)"/><line x1="20" y1="20" x2="140" y2="20" stroke="#333" stroke-width="2" marker-end="url(#arr-b)"/><line x1="20" y1="120" x2="140" y2="20" stroke="#333" stroke-width="2" stroke-dasharray="6,4" marker-end="url(#arr-b)"/><path d="M 20 35 L 35 35 L 35 20" fill="none" stroke="#333" stroke-width="2"/><path d="M 20 85 A 35 35 0 0 1 47 97" fill="none" stroke="#333" stroke-width="2"/><text x="5" y="75" font-family="sans-serif" font-weight="bold" font-style="italic" font-size="18" fill="#333">a</text><text x="75" y="15" font-family="sans-serif" font-weight="bold" font-style="italic" font-size="18" fill="#333">b</text><text x="85" y="80" font-family="sans-serif" font-weight="bold" font-style="italic" font-size="18" fill="#333">R</text><text x="26" y="110" font-family="serif" font-style="italic" font-size="18" fill="#333">θ</text><text x="80" y="150" font-family="sans-serif" font-weight="bold" font-size="18" fill="#c00" text-anchor="middle">Resultant vector</text></svg></div>`;
            } else if (currentSection === "Trigonometry Basics (Right Triangle)") {
                sectionGraphic = `<div style="text-align: center; margin: 15px 0;"><svg viewBox="-20 0 180 160" width="220" height="220"><line x1="20" y1="130" x2="20" y2="30" stroke="#333" stroke-width="2"/><line x1="20" y1="30" x2="140" y2="30" stroke="#333" stroke-width="2"/><line x1="20" y1="130" x2="140" y2="30" stroke="#333" stroke-width="2" stroke-dasharray="6,4"/><path d="M 20 45 L 35 45 L 35 30" fill="none" stroke="#333" stroke-width="2"/><path d="M 20 95 A 35 35 0 0 1 47 107" fill="none" stroke="#333" stroke-width="2"/><text x="10" y="80" transform="rotate(-90 10 80)" font-family="sans-serif" font-style="italic" font-size="18" fill="#555">adjacent</text><text x="80" y="20" font-family="sans-serif" font-style="italic" font-size="18" fill="#555" text-anchor="middle">opposite</text><text x="85" y="105" transform="rotate(-40 85 105)" font-family="sans-serif" font-style="italic" font-size="18" fill="#555" text-anchor="middle">hypotenuse</text><text x="26" y="118" font-family="serif" font-style="italic" font-size="18" fill="#333">θ</text><text x="80" y="155" font-family="sans-serif" font-weight="bold" font-size="18" fill="#c00" text-anchor="middle">Right triangle</text></svg></div>`;
            } else if (currentSection === "Resultant Force (At angle θ)") {
                sectionGraphic = `<div style="text-align: center; margin: 15px 0;"><svg viewBox="0 0 350 160" style="max-width:450px; width:100%; height:auto;"><defs><marker id="arr-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#e65100"/></marker><marker id="arr-b" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#0277bd"/></marker><marker id="arr-r" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#2e7d32"/></marker></defs><g transform="translate(10, 20)"><path d="M 30 100 A 20 20 0 0 0 23 85" fill="none" stroke="#333" stroke-width="2"/><text x="32" y="93" font-family="sans-serif" font-weight="bold" font-size="14" fill="#333">θ</text><line x1="10" y1="100" x2="100" y2="100" stroke="#e65100" stroke-width="3" marker-end="url(#arr-a)"/><line x1="10" y1="100" x2="60" y2="40" stroke="#0277bd" stroke-width="3" marker-end="url(#arr-b)"/><text x="90" y="90" font-family="sans-serif" font-weight="bold" font-size="16" fill="#e65100">a</text><text x="45" y="30" font-family="sans-serif" font-weight="bold" font-size="16" fill="#0277bd">b</text><text x="35" y="130" font-family="sans-serif" font-weight="bold" font-size="16" fill="#e65100">Fig. A</text></g><g transform="translate(160, 20)"><path d="M 30 100 A 20 20 0 0 0 23 85" fill="none" stroke="#333" stroke-width="2"/><text x="32" y="93" font-family="sans-serif" font-weight="bold" font-size="14" fill="#333">θ</text><line x1="60" y1="40" x2="150" y2="40" stroke="#e65100" stroke-width="2" stroke-dasharray="6,4"/><line x1="100" y1="100" x2="150" y2="40" stroke="#0277bd" stroke-width="2" stroke-dasharray="6,4"/><line x1="10" y1="100" x2="100" y2="100" stroke="#e65100" stroke-width="3" marker-end="url(#arr-a)"/><line x1="10" y1="100" x2="60" y2="40" stroke="#0277bd" stroke-width="3" marker-end="url(#arr-b)"/><line x1="10" y1="100" x2="150" y2="40" stroke="#2e7d32" stroke-width="3" marker-end="url(#arr-r)"/><text x="80" y="115" font-family="sans-serif" font-weight="bold" font-size="16" fill="#e65100">a</text><text x="25" y="45" font-family="sans-serif" font-weight="bold" font-size="16" fill="#0277bd">b</text><text x="155" y="35" font-family="sans-serif" font-weight="bold" font-size="16" fill="#2e7d32">R</text><text x="65" y="130" font-family="sans-serif" font-weight="bold" font-size="16" fill="#e65100">Fig. B</text></g></svg></div>`;
            } else if (currentSection === "Moment") {
                sectionGraphic = `<div style="text-align: center; margin: 15px 0;"><svg viewBox="0 0 320 260" style="max-width:400px; width:100%; height:auto; background:#fefefe; border-radius:8px; padding:10px;"><defs><marker id="arr-f" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#e91e63"/></marker><marker id="arr-d-start" viewBox="0 0 10 10" refX="2" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M 10 0 L 0 5 L 10 10 z" fill="#333"/></marker><marker id="arr-d-end" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#333"/></marker><linearGradient id="wrench-grad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#ddd"/><stop offset="100%" stop-color="#999"/></linearGradient></defs><line x1="100" y1="80" x2="180" y2="217" stroke="url(#wrench-grad)" stroke-width="22" stroke-linecap="round"/><circle cx="100" cy="80" r="28" fill="url(#wrench-grad)"/><circle cx="100" cy="80" r="18" fill="#fff"/><polygon points="114,80 107,92.1 93,92.1 86,80 93,67.9 107,67.9" fill="#d4af37" stroke="#b8860b" stroke-width="2"/><circle cx="100" cy="80" r="3" fill="#333"/><line x1="170" y1="200" x2="228" y2="166" stroke="#e91e63" stroke-width="4" marker-end="url(#arr-f)"/><text x="235" y="160" font-family="sans-serif" font-weight="bold" font-size="16" fill="#e91e63">Force = 20 N</text><line x1="100" y1="80" x2="40" y2="115" stroke="#333" stroke-width="1.5" stroke-dasharray="5,3"/><line x1="170" y1="200" x2="110" y2="235" stroke="#333" stroke-width="1.5" stroke-dasharray="5,3"/><line x1="45" y1="112" x2="115" y2="232" stroke="#333" stroke-width="2" marker-start="url(#arr-d-start)" marker-end="url(#arr-d-end)"/><text x="80" y="165" transform="rotate(59.7 80 172)" font-family="sans-serif" font-weight="bold" font-size="16" fill="#333" text-anchor="middle">20 cm</text><line x1="100" y1="77" x2="100" y2="30" stroke="#666" stroke-width="1.5"/><text x="100" y="20" font-family="sans-serif" font-weight="bold" font-size="14" fill="#333" text-anchor="middle">Axis of rotation</text><line x1="90" y1="70" x2="60" y2="40" stroke="#666" stroke-width="1.5"/><text x="55" y="35" font-family="sans-serif" font-weight="bold" font-size="14" fill="#333" text-anchor="end">Nut</text><line x1="140" y1="130" x2="180" y2="100" stroke="#666" stroke-width="1.5"/><text x="185" y="95" font-family="sans-serif" font-weight="bold" font-size="14" fill="#333" text-anchor="start">Spanner</text></svg></div>`;
            } else if (currentSection === "Moment (Force Components)") {
                sectionGraphic = `<div style="text-align: center; margin: 15px 0;"><svg viewBox="0 0 500 190" style="max-width:600px; width:100%; height:auto; background:#fff; border-radius:8px; padding:10px;"><defs><marker id="arr-end" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#000080"/></marker><marker id="arr-start" viewBox="0 0 10 10" refX="0" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#000080"/></marker><filter id="shadow" x="-5%" y="-5%" width="110%" height="110%"><feDropShadow dx="2" dy="2" stdDeviation="2" flood-opacity="0.3"/></filter></defs><path d="M 25 140 L 75 140 L 50 110 Z" fill="#99d6ff" stroke="#000080" stroke-width="2" filter="url(#shadow)"/><path d="M 425 140 L 475 140 L 450 110 Z" fill="#99d6ff" stroke="#000080" stroke-width="2" filter="url(#shadow)"/><rect x="20" y="80" width="460" height="30" fill="#99d6ff" stroke="#000080" stroke-width="2" filter="url(#shadow)"/><text x="50" y="102" font-family="serif" font-weight="bold" font-size="18" fill="#e60000" text-anchor="middle">A</text><text x="250" y="102" font-family="serif" font-weight="bold" font-size="18" fill="#e60000" text-anchor="middle">O</text><text x="450" y="102" font-family="serif" font-weight="bold" font-size="18" fill="#e60000" text-anchor="middle">B</text><line x1="50" y1="20" x2="50" y2="75" stroke="#000080" stroke-width="2" marker-end="url(#arr-end)"/><text x="50" y="15" font-family="serif" font-weight="bold" font-size="18" fill="#e60000" text-anchor="middle">F<tspan dy="5" font-size="12">A</tspan></text><line x1="250" y1="20" x2="250" y2="75" stroke="#000080" stroke-width="2" marker-end="url(#arr-end)"/><text x="250" y="15" font-family="serif" font-weight="bold" font-size="18" fill="#e60000" text-anchor="middle">F</text><line x1="450" y1="20" x2="450" y2="75" stroke="#000080" stroke-width="2" marker-end="url(#arr-end)"/><text x="450" y="15" font-family="serif" font-weight="bold" font-size="18" fill="#e60000" text-anchor="middle">F<tspan dy="5" font-size="12">B</tspan></text><line x1="55" y1="50" x2="245" y2="50" stroke="#000080" stroke-width="1.5" marker-start="url(#arr-start)" marker-end="url(#arr-end)"/><text x="150" y="42" font-family="serif" font-weight="bold" font-size="16" fill="#e60000" text-anchor="middle">OA</text><line x1="255" y1="50" x2="445" y2="50" stroke="#000080" stroke-width="1.5" marker-start="url(#arr-start)" marker-end="url(#arr-end)"/><text x="350" y="42" font-family="serif" font-weight="bold" font-size="16" fill="#e60000" text-anchor="middle">OB</text><line x1="50" y1="155" x2="450" y2="155" stroke="#000080" stroke-width="1.5" marker-start="url(#arr-start)" marker-end="url(#arr-end)"/><text x="250" y="173" font-family="serif" font-weight="bold" font-size="18" fill="#e60000" text-anchor="middle">OA + OB = AB</text></svg></div>`;
            } else if (currentSection === "Lever") {
                sectionGraphic = `<div style="text-align: center; margin: 15px 0;"><svg viewBox="0 0 920 200" style="max-width:100%; height:auto; background:#fff; border-radius:8px; padding:10px;"><defs><marker id="arr-vec" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#000080"/></marker></defs><style>.beam { fill: #68bacc; stroke: #000080; stroke-width: 3; } .fulcrum { fill: #68bacc; stroke: #000080; stroke-width: 3; } .load { fill: #d11173; stroke: #000080; stroke-width: 3; } .vec { stroke: #000080; stroke-width: 4; } .dash { stroke: #000080; stroke-width: 3; stroke-dasharray: 6,6; } .tick { stroke: #000080; stroke-width: 3; } .txt-red { font-family: sans-serif; font-weight: bold; font-size: 18px; fill: #cc0000; text-anchor: middle; } .sub { font-size: 12px; }</style><g transform="translate(10, 10)"><path d="M 110 130 L 150 130 L 130 100 Z" class="fulcrum" /><rect x="0" y="80" width="260" height="20" class="beam" /><text x="130" y="95" class="txt-red">O</text><rect x="200" y="50" width="60" height="30" class="load" /><text x="230" y="40" class="txt-red">F<tspan dy="5" class="sub">R</tspan></text><line x1="20" y1="10" x2="20" y2="80" class="vec" marker-end="url(#arr-vec)" /><text x="35" y="30" class="txt-red">F<tspan dy="5" class="sub">E</tspan></text><line x1="20" y1="120" x2="20" y2="140" class="tick" /><line x1="130" y1="120" x2="130" y2="140" class="tick" /><line x1="20" y1="130" x2="130" y2="130" class="dash" /><text x="75" y="152" class="txt-red">d<tspan dy="5" class="sub">E</tspan></text><line x1="130" y1="50" x2="130" y2="70" class="tick" /><line x1="230" y1="50" x2="230" y2="70" class="tick" /><line x1="130" y1="60" x2="230" y2="60" class="dash" /><text x="180" y="55" class="txt-red">d<tspan dy="5" class="sub">R</tspan></text><text x="130" y="175" class="txt-red">First class levers</text></g><g transform="translate(310, 10)"><path d="M 230 130 L 270 130 L 250 100 Z" class="fulcrum" /><rect x="0" y="80" width="260" height="20" class="beam" /><text x="250" y="95" class="txt-red">O</text><rect x="120" y="50" width="60" height="30" class="load" /><text x="150" y="40" class="txt-red">F<tspan dy="5" class="sub">R</tspan></text><line x1="20" y1="80" x2="20" y2="10" class="vec" marker-end="url(#arr-vec)" /><text x="35" y="25" class="txt-red">F<tspan dy="5" class="sub">E</tspan></text><line x1="20" y1="120" x2="20" y2="140" class="tick" /><line x1="250" y1="120" x2="250" y2="140" class="tick" /><line x1="20" y1="130" x2="250" y2="130" class="dash" /><text x="135" y="152" class="txt-red">d<tspan dy="5" class="sub">E</tspan></text><line x1="150" y1="50" x2="150" y2="70" class="tick" /><line x1="250" y1="50" x2="250" y2="70" class="tick" /><line x1="150" y1="60" x2="250" y2="60" class="dash" /><text x="200" y="55" class="txt-red">d<tspan dy="5" class="sub">R</tspan></text><text x="130" y="175" class="txt-red">Second class levers</text></g><g transform="translate(610, 10)"><path d="M 230 130 L 270 130 L 250 100 Z" class="fulcrum" /><rect x="0" y="80" width="260" height="20" class="beam" /><text x="250" y="95" class="txt-red">O</text><rect x="0" y="50" width="60" height="30" class="load" /><text x="30" y="40" class="txt-red">F<tspan dy="5" class="sub">R</tspan></text><line x1="130" y1="80" x2="130" y2="10" class="vec" marker-end="url(#arr-vec)" /><text x="145" y="25" class="txt-red">F<tspan dy="5" class="sub">E</tspan></text><line x1="30" y1="120" x2="30" y2="140" class="tick" /><line x1="250" y1="120" x2="250" y2="140" class="tick" /><line x1="30" y1="130" x2="250" y2="130" class="dash" /><text x="140" y="152" class="txt-red">d<tspan dy="5" class="sub">R</tspan></text><line x1="130" y1="50" x2="130" y2="70" class="tick" /><line x1="250" y1="50" x2="250" y2="70" class="tick" /><line x1="130" y1="60" x2="250" y2="60" class="dash" /><text x="190" y="55" class="txt-red">d<tspan dy="5" class="sub">E</tspan></text><text x="130" y="175" class="txt-red">Third class levers</text></g></svg></div>`;
            } else if (currentSection === "Inclined Plane") {
                sectionGraphic = `<div style="display: flex; flex-wrap: wrap; justify-content: center; align-items: center; gap: 20px; margin: 15px 0;">
                    <svg viewBox="0 0 400 220" style="flex: 1 1 300px; max-width:500px; width:100%; height:auto; background:#fff; border-radius:8px; padding:10px;"><defs><marker id="arr-fe" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M 0 0 L 10 5 L 0 10 Z" fill="#1c2d3d"/></marker><marker id="arr-fr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M 0 0 L 10 5 L 0 10 Z" fill="#db7734"/></marker></defs><polygon points="40,200 360,200 360,60" fill="#cbe6f2" stroke="#2b506e" stroke-width="2"/><path d="M 90 200 A 50 50 0 0 0 85 180" fill="none" stroke="#2b506e" stroke-width="2"/><text x="100" y="195" font-family="serif" font-weight="bold" font-style="italic" font-size="20" fill="#c46210">θ</text><text x="375" y="135" font-family="serif" font-weight="bold" font-style="italic" font-size="22" fill="#ff0000">h</text><line x1="360" y1="200" x2="360" y2="60" stroke="#2b506e" stroke-width="2" stroke-dasharray="4,4"/><text x="110" y="142" font-family="serif" font-weight="bold" font-style="italic" font-size="22" fill="#ff0000" transform="rotate(-23.6, 110, 142)">L</text><g transform="translate(200, 130) rotate(-23.6)"><rect x="-25" y="-36" width="50" height="36" rx="6" fill="#e88543" stroke="#b05e15" stroke-width="2"/></g><line x1="193" y1="114" x2="266" y2="82" stroke="#1c2d3d" stroke-width="7" marker-end="url(#arr-fe)"/><text x="275" y="70" font-family="serif" font-weight="bold" font-style="italic" font-size="22" fill="#1c2d3d">F<tspan dy="5" font-size="14">E</tspan></text><line x1="193" y1="114" x2="193" y2="49" stroke="#db7734" stroke-width="7" marker-end="url(#arr-fr)"/><text x="180" y="38" font-family="serif" font-weight="bold" font-style="italic" font-size="22" fill="#db7734">F<tspan dy="5" font-size="14">R</tspan></text></svg>
                </div>`;
            } else if (currentSection === "Pulley") {
                sectionGraphic = `<div style="text-align: center; margin: 15px 0;">
<svg viewBox="0 0 900 420" style="max-width:900px; width:100%; height:auto; background:#fff; border-radius:8px; padding:10px; border:1px solid #ddd;">
    <defs>
        <marker id="red-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 Z" fill="#e74c3c"/></marker>
        <marker id="blue-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 Z" fill="#2980b9"/></marker>
        <g id="weight">
            <polygon points="-40,40 40,40 25,-10 -25,-10" fill="#dcdde1" stroke="#2f3640" stroke-width="2"/>
            <circle cx="0" cy="-15" r="5" fill="none" stroke="#2f3640" stroke-width="2"/>
            <line x1="0" y1="-10" x2="0" y2="-15" stroke="#2f3640" stroke-width="2"/>
            <line x1="0" y1="40" x2="0" y2="80" stroke="#2980b9" stroke-width="4" marker-end="url(#blue-arrow)"/>
            <text x="20" y="70" fill="#2980b9" font-family="sans-serif" font-weight="bold" font-size="16">100 N</text>
        </g>
        <g id="bracket">
            <path d="M -15,0 L -15,-25 L 0,-35 L 15,-25 L 15,0" fill="none" stroke="#8e44ad" stroke-width="8" stroke-linejoin="round"/>
            <line x1="0" y1="-35" x2="0" y2="-55" stroke="#8e44ad" stroke-width="8" stroke-linecap="round"/>
            <circle cx="0" cy="0" r="6" fill="#2c3e50"/>
        </g>
        <g id="pulley">
            <circle cx="0" cy="0" r="30" fill="#ecf0f1" stroke="#34495e" stroke-width="2"/>
            <circle cx="0" cy="0" r="20" fill="#bdc3c7" stroke="#34495e" stroke-width="1"/>
        </g>
    </defs>
    
    <rect x="50" y="35" width="800" height="10" fill="#bdc3c7" stroke="#95a5a6" stroke-width="1"/>
    
    <g transform="translate(150, 100)">
        <line x1="30" y1="0" x2="30" y2="90" stroke="#f1c40f" stroke-width="4"/>
        <line x1="-30" y1="0" x2="-80" y2="100" stroke="#f1c40f" stroke-width="4"/>
        <path d="M -30,0 A 30 30 0 0 1 30,0" fill="none" stroke="#f1c40f" stroke-width="4"/>
        <line x1="-80" y1="100" x2="-105" y2="150" stroke="#e74c3c" stroke-width="4" marker-end="url(#red-arrow)"/>
        <text x="-120" y="110" fill="#555" font-family="sans-serif" font-weight="bold" font-size="16">100 N</text>
        <text x="40" y="50" fill="#555" font-family="sans-serif" font-weight="bold" font-size="16">100 N</text>
        <use href="#pulley"/>
        <use href="#bracket"/>
        <g transform="translate(30, 105)"><use href="#weight"/></g>
        <text x="0" y="300" fill="#000080" font-family="sans-serif" font-weight="bold" font-size="22" text-anchor="middle">Fixed pulley</text>
    </g>

    <g transform="translate(450, 160)">
        <line x1="-30" y1="0" x2="-30" y2="-115" stroke="#f1c40f" stroke-width="4"/>
        <line x1="30" y1="0" x2="30" y2="-100" stroke="#f1c40f" stroke-width="4"/>
        <path d="M -30,0 A 30 30 0 0 0 30,0" fill="none" stroke="#f1c40f" stroke-width="4"/>
        <line x1="30" y1="-100" x2="30" y2="-140" stroke="#e74c3c" stroke-width="4" marker-end="url(#red-arrow)"/>
        <text x="45" y="-90" fill="#555" font-family="sans-serif" font-weight="bold" font-size="16">50 N</text>
        <text x="-75" y="-70" fill="#555" font-family="sans-serif" font-weight="bold" font-size="16">50 N</text>
        <use href="#pulley"/>
        <g transform="rotate(180)"><use href="#bracket"/></g>
        <g transform="translate(0, 70)"><use href="#weight"/></g>
        <text x="0" y="240" fill="#000080" font-family="sans-serif" font-weight="bold" font-size="22" text-anchor="middle">Movable pulley</text>
    </g>

    <g transform="translate(750, 100)">
        <line x1="-30" y1="0" x2="-80" y2="100" stroke="#f1c40f" stroke-width="4"/>
        <path d="M -30,0 A 30 30 0 0 1 30,0" fill="none" stroke="#f1c40f" stroke-width="4"/>
        <line x1="30" y1="0" x2="30" y2="90" stroke="#f1c40f" stroke-width="4"/>
        <path d="M -30,90 A 30 30 0 0 0 30,90" fill="none" stroke="#f1c40f" stroke-width="4"/>
        <line x1="-30" y1="90" x2="0" y2="35" stroke="#f1c40f" stroke-width="4"/>
        <line x1="-80" y1="100" x2="-105" y2="150" stroke="#e74c3c" stroke-width="4" marker-end="url(#red-arrow)"/>
        
        <text x="-120" y="110" fill="#555" font-family="sans-serif" font-weight="bold" font-size="16">50 N</text>
        <text x="40" y="45" fill="#555" font-family="sans-serif" font-weight="bold" font-size="16">50 N</text>
        <text x="-45" y="60" fill="#555" font-family="sans-serif" font-weight="bold" font-size="16">50 N</text>
        
        <path d="M 0,0 L 0,35" stroke="#8e44ad" stroke-width="8"/>
        <circle cx="0" cy="35" r="5" fill="#ecf0f1" stroke="#8e44ad" stroke-width="3"/>
        
        <use href="#pulley"/>
        <use href="#bracket"/>
        
        <g transform="translate(0, 90)">
            <use href="#pulley"/>
            <g transform="rotate(180)"><use href="#bracket"/></g>
            <g transform="translate(0, 70)"><use href="#weight"/></g>
        </g>
        <text x="0" y="300" fill="#000080" font-family="sans-serif" font-weight="bold" font-size="22" text-anchor="middle">Compound pulley</text>
    </g>
</svg>
</div>`;
            } else if (currentSection === "Gears System") {
                sectionGraphic = `<div style="text-align: center; margin: 15px 0;">
                    <svg viewBox="0 0 700 300" style="max-width:700px; width:100%; height:auto; background:#fff; border-radius:8px; padding:10px; border:1px solid #ddd;">
                        <defs>
                            <marker id="arr-gear" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M 0 0 L 10 5 L 0 10 Z" fill="#2c3e50"/></marker>
                            <path id="t16" d="M -5,51 L -2,61 L 2,61 L 5,51 Z" fill="#9aa9b8" stroke="#2c3e50" stroke-width="1.5"/>
                            <g id="t16_2"><use href="#t16"/><use href="#t16" transform="rotate(22.5)"/></g><g id="t16_4"><use href="#t16_2"/><use href="#t16_2" transform="rotate(45)"/></g><g id="t16_8"><use href="#t16_4"/><use href="#t16_4" transform="rotate(90)"/></g><g id="gear16_teeth"><use href="#t16_8"/><use href="#t16_8" transform="rotate(180)"/></g>
                            <path id="t32" d="M -5,106 L -2,115 L 2,115 L 5,106 Z" fill="#9aa9b8" stroke="#2c3e50" stroke-width="1.5"/>
                            <g id="t32_2"><use href="#t32"/><use href="#t32" transform="rotate(11.25)"/></g><g id="t32_4"><use href="#t32_2"/><use href="#t32_2" transform="rotate(22.5)"/></g><g id="t32_8"><use href="#t32_4"/><use href="#t32_4" transform="rotate(45)"/></g><g id="t32_16"><use href="#t32_8"/><use href="#t32_8" transform="rotate(90)"/></g><g id="gear32_teeth"><use href="#t32_16"/><use href="#t32_16" transform="rotate(180)"/></g>
                            <g id="hub"><circle cx="0" cy="0" r="16" fill="#7f8c8d" stroke="#2c3e50" stroke-width="2"/><path d="M -16,10 L 16,10 L 16,16 L -16,16 Z" fill="#bdc3c7" stroke="#2c3e50" stroke-width="1.5"/><path d="M -8,10 L -8,-2 A 8 8 0 0 1 8,-2 L 8,10 Z" fill="#bdc3c7" stroke="#2c3e50" stroke-width="1.5"/><circle cx="0" cy="2" r="3" fill="#2c3e50"/></g>
                        </defs>
                        <g transform="translate(220, 160)">
                            <use href="#gear16_teeth"/>
                            <circle cx="0" cy="0" r="52" fill="#9aa9b8" stroke="#2c3e50" stroke-width="2"/>
                            <circle cx="0" cy="0" r="56" fill="none" stroke="#ecf0f1" stroke-width="1.5" stroke-dasharray="6,4"/>
                            <circle cx="0" cy="0" r="38" fill="none" stroke="#7f8c8d" stroke-width="1"/>
                            <use href="#hub"/>
                        </g>
                        <g transform="translate(387, 160)">
                            <g transform="rotate(5.625)"><use href="#gear32_teeth"/></g>
                            <circle cx="0" cy="0" r="107" fill="#9aa9b8" stroke="#2c3e50" stroke-width="2"/>
                            <circle cx="0" cy="0" r="111" fill="none" stroke="#ecf0f1" stroke-width="1.5" stroke-dasharray="6,4"/>
                            <circle cx="0" cy="0" r="80" fill="none" stroke="#7f8c8d" stroke-width="1"/>
                            <use href="#hub"/>
                        </g>
                        <path d="M 145,120 A 85,85 0 0,1 270,90" fill="none" stroke="#2c3e50" stroke-width="3" marker-end="url(#arr-gear)"/>
                        <path d="M 502,100 A 130,130 0 0,0 327,45" fill="none" stroke="#2c3e50" stroke-width="3" marker-end="url(#arr-gear)"/>
                        <text x="145" y="170" font-family="sans-serif" font-weight="bold" font-size="28" fill="#0000cc" text-anchor="end">Driver gear</text>
                        <text x="515" y="170" font-family="sans-serif" font-weight="bold" font-size="28" fill="#0000cc" text-anchor="start">Driven gear</text>
                    </svg>
                </div>`;
            } else if (currentSection === "Belt System") {
                sectionGraphic = `<div style="display: flex; flex-wrap: wrap; justify-content: center; align-items: center; gap: 20px; margin: 15px 0;">
                    <svg viewBox="0 0 600 320" style="flex: 1 1 300px; max-width:500px; width:100%; height:auto; background:#fff; border-radius:8px; padding:10px; border:1px solid #ddd;">
                        <line x1="142" y1="111" x2="434" y2="62" stroke="#546e7a" stroke-width="5"/>
                        <line x1="142" y1="209" x2="434" y2="258" stroke="#546e7a" stroke-width="5"/>
                        <circle cx="150" cy="160" r="50" fill="#fff" stroke="#e67e22" stroke-width="4"/>
                        <circle cx="150" cy="160" r="16" fill="#e67e22"/>
                        <circle cx="450" cy="160" r="100" fill="#fff" stroke="#455a64" stroke-width="4"/>
                        <circle cx="450" cy="160" r="22" fill="#455a64"/>
                        <text x="150" y="300" font-family="sans-serif" font-weight="bold" font-size="24" fill="#000" text-anchor="middle">Driver (Effort)</text>
                        <text x="450" y="300" font-family="sans-serif" font-weight="bold" font-size="24" fill="#000" text-anchor="middle">Driven (Load)</text>
                    </svg>
                    <svg viewBox="0 0 450 320" style="flex: 1 1 300px; max-width:500px; width:100%; height:auto; background:#fff; border-radius:8px; padding:10px; border:1px solid #ddd;">
                        <defs><marker id="red-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M 0 0 L 10 5 L 0 10 Z" fill="#e74c3c"/></marker></defs>
                        <line x1="150" y1="150" x2="350" y2="150" stroke="#3498db" stroke-width="10" stroke-linecap="round"/>
                        <line x1="150" y1="150" x2="250" y2="40" stroke="#3498db" stroke-width="10" stroke-linecap="round"/>
                        <line x1="350" y1="150" x2="250" y2="40" stroke="#3498db" stroke-width="10" stroke-linecap="round"/>
                        <line x1="250" y1="40" x2="250" y2="20" stroke="#2c3e50" stroke-width="8" stroke-linecap="round"/>
                        <rect x="220" y="5" width="60" height="15" fill="#2c3e50" rx="5"/>
                        <line x1="150" y1="50" x2="150" y2="250" stroke="#bdc3c7" stroke-width="2"/>
                        <line x1="50" y1="150" x2="250" y2="150" stroke="#bdc3c7" stroke-width="2"/>
                        <line x1="79" y1="79" x2="221" y2="221" stroke="#bdc3c7" stroke-width="2"/>
                        <line x1="79" y1="221" x2="221" y2="79" stroke="#bdc3c7" stroke-width="2"/>
                        <circle cx="150" cy="150" r="100" fill="none" stroke="#2c3e50" stroke-width="10"/>
                        <circle cx="150" cy="150" r="94" fill="none" stroke="#bdc3c7" stroke-width="3"/>
                        <line x1="150" y1="130" x2="350" y2="115" stroke="#7f8c8d" stroke-width="4" stroke-dasharray="4,2"/>
                        <line x1="150" y1="170" x2="350" y2="185" stroke="#7f8c8d" stroke-width="4" stroke-dasharray="4,2"/>
                        <circle cx="150" cy="150" r="20" fill="#95a5a6" stroke="#34495e" stroke-width="2"/>
                        <circle cx="350" cy="150" r="35" fill="#95a5a6" stroke="#34495e" stroke-width="2"/>
                        <circle cx="150" cy="150" r="5" fill="#2c3e50"/>
                        <circle cx="350" cy="150" r="8" fill="#2c3e50"/>
                        <line x1="350" y1="150" x2="350" y2="210" stroke="#34495e" stroke-width="8" stroke-linecap="round"/>
                        <rect x="325" y="210" width="50" height="12" fill="#2c3e50" rx="3"/>
                        <text x="150" y="300" font-family="sans-serif" font-size="22" font-weight="bold" fill="#333" text-anchor="middle">Wheel</text>
                        <line x1="150" y1="275" x2="150" y2="255" stroke="#e74c3c" stroke-width="4" marker-end="url(#red-arrow)"/>
                        <text x="50" y="70" font-family="sans-serif" font-size="22" font-weight="bold" fill="#333" text-anchor="middle">Gear</text>
                        <line x1="60" y1="80" x2="135" y2="135" stroke="#e74c3c" stroke-width="4" marker-end="url(#red-arrow)"/>
                        <text x="350" y="300" font-family="sans-serif" font-size="22" font-weight="bold" fill="#333" text-anchor="middle">Pedal</text>
                        <line x1="350" y1="275" x2="350" y2="225" stroke="#e74c3c" stroke-width="4" marker-end="url(#red-arrow)"/>
                    </svg>
                </div>`;
            } else if (currentSection === "Wheel and Axle") {
                sectionGraphic = `<div style="text-align: center; margin: 15px 0;">
    <svg viewBox="0 0 500 500" style="max-width:500px; width:100%; height:auto; background:#fff; border-radius:8px; padding:10px; border:1px solid #ddd;">
        <defs>
            <marker id="arr-l" viewBox="0 0 10 10" refX="2" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M 10 0 L 0 5 L 10 10 z" fill="#333"/></marker>
            <marker id="arr-r" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#333"/></marker>
            <radialGradient id="wheel-grad" cx="50%" cy="50%" r="50%">
                <stop offset="60%" stop-color="#fff"/>
                <stop offset="100%" stop-color="#bdc3c7"/>
            </radialGradient>
            <radialGradient id="axle-grad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stop-color="#ecf0f1"/>
                <stop offset="100%" stop-color="#95a5a6"/>
            </radialGradient>
        </defs>
        
        <circle cx="250" cy="180" r="140" fill="url(#wheel-grad)" stroke="#2c3e50" stroke-width="4"/>
        <circle cx="250" cy="180" r="125" fill="none" stroke="#bdc3c7" stroke-width="2"/>
        
        <g stroke="#bdc3c7" stroke-width="25" stroke-linecap="round">
            <line x1="250" y1="60" x2="250" y2="300"/>
            <line x1="146" y1="120" x2="354" y2="240"/>
            <line x1="146" y1="240" x2="354" y2="120"/>
        </g>
        
        <circle cx="250" cy="180" r="60" fill="url(#axle-grad)" stroke="#2c3e50" stroke-width="4"/>
        <circle cx="250" cy="180" r="25" fill="#bdc3c7" stroke="#34495e" stroke-width="2"/>
        
        <path d="M 250,40 A 140 140 0 0 1 390,180" fill="none" stroke="#34495e" stroke-width="3"/>
        <path d="M 250,120 A 60 60 0 0 0 190,180" fill="none" stroke="#ecf0f1" stroke-width="4"/>
        <path d="M 250,120 A 60 60 0 0 0 190,180" fill="none" stroke="#34495e" stroke-width="2" stroke-dasharray="4,2"/>
        <line x1="390" y1="180" x2="390" y2="350" stroke="#34495e" stroke-width="3"/>
        <line x1="190" y1="180" x2="190" y2="306" stroke="#34495e" stroke-width="3"/>
        
        <polygon points="380,350 400,350 390,370" fill="#34495e"/>
        <text x="410" y="360" font-family="sans-serif" font-weight="bold" font-size="20" fill="#2c3e50">Fe</text>
        
        <ellipse cx="190" cy="415" rx="25" ry="8" fill="#dcdde1" stroke="#2c3e50" stroke-width="2.5"/>
        <polygon points="150,335 230,335 215,415 165,415" fill="#ecf0f1" stroke="#2c3e50" stroke-width="2.5"/>
        <ellipse cx="190" cy="335" rx="40" ry="12" fill="#dcdde1" stroke="#2c3e50" stroke-width="2.5"/>
        <ellipse cx="190" cy="335" rx="33" ry="8" fill="#95a5a6"/>
        <path d="M 150,335 Q 190,260 230,335" fill="none" stroke="#7f8c8d" stroke-width="3"/>
        <circle cx="190" cy="310" r="4" fill="none" stroke="#2c3e50" stroke-width="2"/>
        <text x="100" y="390" font-family="sans-serif" font-weight="bold" font-size="20" fill="#2c3e50">Fr</text>
        
        <line x1="220" y1="180" x2="280" y2="180" stroke="#7f8c8d" stroke-width="1.5"/>
        <line x1="250" y1="150" x2="250" y2="390" stroke="#7f8c8d" stroke-width="1.5"/>
        
        <line x1="190" y1="255" x2="250" y2="255" stroke="#333" stroke-width="1.5" marker-start="url(#arr-l)" marker-end="url(#arr-r)"/>
        <text x="220" y="245" font-family="sans-serif" font-style="italic" font-size="20" fill="#333" text-anchor="middle">r</text>
        
        <line x1="250" y1="255" x2="390" y2="255" stroke="#333" stroke-width="1.5" marker-start="url(#arr-l)" marker-end="url(#arr-r)"/>
        <text x="320" y="245" font-family="sans-serif" font-style="italic" font-size="20" fill="#333" text-anchor="middle">R</text>
    </svg>
                </div>`;
            } else if (currentSection === "Electrical Power") {
                sectionGraphic = `<div style="text-align: center; margin: 15px 0;">
    <svg viewBox="0 0 600 600" style="max-width:600px; width:100%; height:auto; background:#fff; border-radius:8px; padding:10px; border:1px solid #ddd;">
        <defs>
            <path id="curve-TL" d="M 50,300 A 250 250 0 0 1 300,50" />
            <path id="curve-TR" d="M 300,50 A 250 250 0 0 1 550,300" />
            <path id="curve-BR" d="M 300,550 A 250 250 0 0 0 550,300" />
            <path id="curve-BL" d="M 300,550 A 250 250 0 0 1 50,300" />
        </defs>
        
        <!-- Outer Quadrants -->
        <path d="M 300,300 L 300,20 A 280 280 0 0 0 20,300 Z" fill="#dcf1fa"/>
        <path d="M 300,300 L 300,20 A 280 280 0 0 1 580,300 Z" fill="#d8ebcd"/>
        <path d="M 300,300 L 580,300 A 280 280 0 0 1 300,580 Z" fill="#fbe2c5"/>
        <path d="M 300,300 L 20,300 A 280 280 0 0 0 300,580 Z" fill="#f7d8e6"/>

        <!-- Inner Quadrants -->
        <path d="M 300,300 L 300,180 A 120 120 0 0 0 180,300 Z" fill="#7ccdf2"/>
        <path d="M 300,300 L 300,180 A 120 120 0 0 1 420,300 Z" fill="#9ccb64"/>
        <path d="M 300,300 L 420,300 A 120 120 0 0 1 300,420 Z" fill="#fbb35a"/>
        <path d="M 300,300 L 180,300 A 120 120 0 0 0 300,420 Z" fill="#e895b9"/>
        
        <!-- Spokes -->
        <g stroke="#222" stroke-width="2">
            <line x1="300" y1="20" x2="300" y2="580"/>
            <line x1="20" y1="300" x2="580" y2="300"/>
            <line x1="420" y1="300" x2="515" y2="300" transform="rotate(30, 300, 300)"/>
            <line x1="420" y1="300" x2="515" y2="300" transform="rotate(60, 300, 300)"/>
            <line x1="420" y1="300" x2="515" y2="300" transform="rotate(120, 300, 300)"/>
            <line x1="420" y1="300" x2="515" y2="300" transform="rotate(150, 300, 300)"/>
            <line x1="420" y1="300" x2="515" y2="300" transform="rotate(210, 300, 300)"/>
            <line x1="420" y1="300" x2="515" y2="300" transform="rotate(240, 300, 300)"/>
            <line x1="420" y1="300" x2="515" y2="300" transform="rotate(300, 300, 300)"/>
            <line x1="420" y1="300" x2="515" y2="300" transform="rotate(330, 300, 300)"/>
        </g>
        
        <!-- Concentric Rings -->
        <circle cx="300" cy="300" r="280" fill="none" stroke="#222" stroke-width="2"/>
        <circle cx="300" cy="300" r="215" fill="none" stroke="#222" stroke-width="2"/>
        <circle cx="300" cy="300" r="120" fill="none" stroke="#222" stroke-width="2"/>
        
        <!-- Category Labels -->
        <text font-family="sans-serif" font-size="28" fill="#222" font-weight="normal">
            <textPath href="#curve-TL" startOffset="50%" text-anchor="middle">Power (Watts)</textPath>
        </text>
        <text font-family="sans-serif" font-size="28" fill="#222" font-weight="normal">
            <textPath href="#curve-TR" startOffset="50%" text-anchor="middle">Voltage (Volts)</textPath>
        </text>
        <text font-family="sans-serif" font-size="28" fill="#222" font-weight="normal">
            <textPath href="#curve-BR" startOffset="50%" text-anchor="middle">Resistance (Ohms)</textPath>
        </text>
        <text font-family="sans-serif" font-size="28" fill="#222" font-weight="normal">
            <textPath href="#curve-BL" startOffset="50%" text-anchor="middle">Current (Amps)</textPath>
        </text>
        
        <!-- Central Variables -->
        <text x="240" y="260" font-size="70" font-family="sans-serif" font-weight="normal" text-anchor="middle" fill="#222">P</text>
        <text x="360" y="260" font-size="70" font-family="sans-serif" font-weight="normal" text-anchor="middle" fill="#222">V</text>
        <text x="360" y="380" font-size="70" font-family="sans-serif" font-weight="normal" text-anchor="middle" fill="#222">R</text>
        <text x="240" y="380" font-size="70" font-family="sans-serif" font-weight="normal" text-anchor="middle" fill="#222">I</text>
        
        <!-- Units -->
        <text x="275" y="280" font-size="20" font-family="sans-serif" fill="#222" text-anchor="middle">W</text>
        <text x="325" y="280" font-size="20" font-family="sans-serif" fill="#222" text-anchor="middle">V</text>
        <text x="325" y="335" font-size="20" font-family="sans-serif" fill="#222" text-anchor="middle">Ω</text>
        <text x="275" y="335" font-size="20" font-family="sans-serif" fill="#222" text-anchor="middle">A</text>
        
        <!-- Formulas -->
        <!-- 15 deg (V/I) -->
        <text x="464" y="338" font-size="26" font-family="sans-serif" font-weight="bold" fill="#222" text-anchor="middle">V</text>
        <line x1="448" y1="344" x2="480" y2="344" stroke="#222" stroke-width="2"/>
        <text x="464" y="370" font-size="26" font-family="sans-serif" font-weight="bold" fill="#222" text-anchor="middle">I</text>
        
        <!-- 45 deg (V²/P) -->
        <text x="420" y="414" font-size="26" font-family="sans-serif" font-weight="bold" fill="#222" text-anchor="middle">V<tspan dy="-10" font-size="16">2</tspan></text>
        <line x1="404" y1="420" x2="436" y2="420" stroke="#222" stroke-width="2"/>
        <text x="420" y="446" font-size="26" font-family="sans-serif" font-weight="bold" fill="#222" text-anchor="middle">P</text>
        
        <!-- 75 deg (P/I²) -->
        <text x="344" y="458" font-size="26" font-family="sans-serif" font-weight="bold" fill="#222" text-anchor="middle">P</text>
        <line x1="328" y1="464" x2="360" y2="464" stroke="#222" stroke-width="2"/>
        <text x="344" y="490" font-size="26" font-family="sans-serif" font-weight="bold" fill="#222" text-anchor="middle">I<tspan dy="-10" font-size="16">2</tspan></text>
        
        <!-- 105 deg (V/R) -->
        <text x="256" y="458" font-size="26" font-family="sans-serif" font-weight="bold" fill="#222" text-anchor="middle">V</text>
        <line x1="240" y1="464" x2="272" y2="464" stroke="#222" stroke-width="2"/>
        <text x="256" y="490" font-size="26" font-family="sans-serif" font-weight="bold" fill="#222" text-anchor="middle">R</text>
        
        <!-- 135 deg (P/V) -->
        <text x="180" y="414" font-size="26" font-family="sans-serif" font-weight="bold" fill="#222" text-anchor="middle">P</text>
        <line x1="164" y1="420" x2="196" y2="420" stroke="#222" stroke-width="2"/>
        <text x="180" y="446" font-size="26" font-family="sans-serif" font-weight="bold" fill="#222" text-anchor="middle">V</text>
        
        <!-- 165 deg (√(P/R)) -->
        <text x="136" y="352" font-size="26" font-family="sans-serif" font-weight="bold" fill="#222" text-anchor="middle">√(P/R)</text>
        
        <!-- 195 deg (V×I) -->
        <text x="136" y="264" font-size="26" font-family="sans-serif" font-weight="bold" fill="#222" text-anchor="middle">V × I</text>
        
        <!-- 225 deg (R×I²) -->
        <text x="180" y="188" font-size="26" font-family="sans-serif" font-weight="bold" fill="#222" text-anchor="middle">R × I<tspan dy="-10" font-size="16">2</tspan></text>
        
        <!-- 255 deg (V²/R) -->
        <text x="256" y="130" font-size="26" font-family="sans-serif" font-weight="bold" fill="#222" text-anchor="middle">V<tspan dy="-10" font-size="16">2</tspan></text>
        <line x1="240" y1="136" x2="272" y2="136" stroke="#222" stroke-width="2"/>
        <text x="256" y="162" font-size="26" font-family="sans-serif" font-weight="bold" fill="#222" text-anchor="middle">R</text>
        
        <!-- 285 deg (R×I) -->
        <text x="344" y="144" font-size="26" font-family="sans-serif" font-weight="bold" fill="#222" text-anchor="middle">R × I</text>
        
        <!-- 315 deg (P/I) -->
        <text x="420" y="174" font-size="26" font-family="sans-serif" font-weight="bold" fill="#222" text-anchor="middle">P</text>
        <line x1="404" y1="180" x2="436" y2="180" stroke="#222" stroke-width="2"/>
        <text x="420" y="206" font-size="26" font-family="sans-serif" font-weight="bold" fill="#222" text-anchor="middle">I</text>
        
        <!-- 345 deg (√(P×R)) -->
        <text x="464" y="264" font-size="26" font-family="sans-serif" font-weight="bold" fill="#222" text-anchor="middle">√(P × R)</text>
    </svg>
</div>`;
            } else if (currentSection === "Heat Energy") {
                sectionGraphic = `<div style="text-align: center; margin: 15px 0;">
    <svg viewBox="0 0 600 600" style="max-width:600px; width:100%; height:auto; background:#fff; border-radius:8px; padding:10px; border:1px solid #ddd;">
        <defs>
            <linearGradient id="water-grad" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stop-color="#cc33ff"/>
                <stop offset="30%" stop-color="#ff66ff"/>
                <stop offset="100%" stop-color="#66ccff"/>
            </linearGradient>
            <linearGradient id="handle-grad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stop-color="#111"/>
                <stop offset="15%" stop-color="#e74c3c"/>
                <stop offset="35%" stop-color="#fff"/>
                <stop offset="100%" stop-color="#fff"/>
            </linearGradient>
            <marker id="arrow-red" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 Z" fill="#ff4d4d"/>
            </marker>
            <marker id="arrow-black" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 Z" fill="#000"/>
            </marker>
            <g id="rad-arrow">
                <path d="M 0,0 Q 7,-10 15,0 T 30,0 T 45,0 T 60,0 T 75,0 T 90,0 L 95,0" fill="none" stroke="#ff4d4d" stroke-width="3" marker-end="url(#arrow-red)"/>
            </g>
        </defs>
        
        <text x="300" y="70" font-family="'Comic Sans MS', cursive, sans-serif" font-size="44" font-weight="bold" fill="#000" text-anchor="middle">Heat Transfer</text>
        
        <!-- Handle (Conduction) -->
        <rect x="410" y="270" width="140" height="28" rx="14" ry="14" fill="url(#handle-grad)" stroke="#000" stroke-width="4"/>
        
        <!-- Water -->
        <path d="M 183,280 Q 210,265 240,280 T 300,280 T 360,280 T 417,280 L 417,370 Q 417,377 400,377 L 200,377 Q 183,377 183,370 Z" fill="url(#water-grad)"/>
        
        <!-- Convection Arrows -->
        <path d="M 230,290 C 200,290 190,320 200,350" fill="none" stroke="#000" stroke-width="2" marker-end="url(#arrow-black)"/>
        <path d="M 370,290 C 400,290 410,320 400,350" fill="none" stroke="#000" stroke-width="2" marker-end="url(#arrow-black)"/>
        <path d="M 240,360 C 260,335 220,315 245,290" fill="none" stroke="#000" stroke-width="2" marker-end="url(#arrow-black)"/>
        <path d="M 280,350 C 260,325 300,305 285,280" fill="none" stroke="#000" stroke-width="2" marker-end="url(#arrow-black)"/>
        <path d="M 320,360 C 340,335 300,315 325,290" fill="none" stroke="#000" stroke-width="2" marker-end="url(#arrow-black)"/>
        <path d="M 360,350 C 340,325 380,305 365,280" fill="none" stroke="#000" stroke-width="2" marker-end="url(#arrow-black)"/>
        
        <!-- Bubbles -->
        <g fill="#0077b3" opacity="0.6">
            <circle cx="210" cy="360" r="4"/>
            <circle cx="230" cy="330" r="3"/>
            <circle cx="200" cy="290" r="4.5"/>
            <circle cx="260" cy="350" r="3"/>
            <circle cx="280" cy="310" r="5"/>
            <circle cx="330" cy="360" r="4"/>
            <circle cx="310" cy="320" r="3.5"/>
            <circle cx="360" cy="290" r="4"/>
            <circle cx="380" cy="350" r="4.5"/>
            <circle cx="400" cy="310" r="3"/>
        </g>
        <g fill="#00b3b3" opacity="0.7">
            <circle cx="250" cy="370" r="4"/>
            <circle cx="270" cy="290" r="3"/>
            <circle cx="350" cy="370" r="4"/>
            <circle cx="340" cy="300" r="3.5"/>
            <circle cx="390" cy="340" r="4"/>
            <circle cx="220" cy="310" r="4"/>
        </g>
        
        <!-- Pot Body & Lip -->
        <path d="M 180, 255 L 180, 360 Q 180, 380 200, 380 L 400, 380 Q 420, 380 420, 360 L 420, 255" fill="none" stroke="#000" stroke-width="5"/>
        <rect x="170" y="240" width="260" height="15" rx="5" ry="5" fill="#fff" stroke="#000" stroke-width="5"/>
        
        <!-- Flame (Heat Source) -->
        <g transform="translate(300, 480) scale(1.1)">
            <path d="M 0,70 C -40,70 -60,30 -30,10 Q -20,30 -10,-5 Q -10,-30 0,-55 Q 10,-30 10,-5 Q 20,30 30,10 C 60,30 40,70 0,70 Z" fill="#ff4d4d" stroke="#000" stroke-width="3" stroke-linejoin="round"/>
            <path d="M 0,55 C -20,55 -30,30 -15,15 Q -10,25 -5,5 Q -5,-5 0,-20 Q 5,-5 5,5 Q 10,25 15,15 C 30,30 20,55 0,55 Z" fill="#ffb347" stroke="#000" stroke-width="2" stroke-linejoin="round"/>
        </g>
        
        <!-- Radiation Arrows -->
        <use href="#rad-arrow" transform="translate(300, 490) rotate(-135) translate(70, 0)"/>
        <use href="#rad-arrow" transform="translate(300, 490) rotate(-170) translate(70, 0)"/>
        <use href="#rad-arrow" transform="translate(300, 490) rotate(150) translate(70, 0)"/>
        
        <use href="#rad-arrow" transform="translate(300, 490) rotate(-45) translate(70, 0)"/>
        <use href="#rad-arrow" transform="translate(300, 490) rotate(-10) translate(70, 0)"/>
        <use href="#rad-arrow" transform="translate(300, 490) rotate(30) translate(70, 0)"/>
        
        <!-- Leader Lines -->
        <line x1="120" y1="210" x2="190" y2="300" stroke="#7f8c8d" stroke-width="2"/>
        <line x1="480" y1="210" x2="435" y2="275" stroke="#7f8c8d" stroke-width="2"/>
        <line x1="480" y1="390" x2="380" y2="460" stroke="#7f8c8d" stroke-width="2"/>
        
        <!-- Labels -->
        <text x="120" y="200" font-family="'Comic Sans MS', cursive, sans-serif" font-size="32" font-weight="bold" fill="#000" text-anchor="middle">Convection</text>
        <text x="480" y="200" font-family="'Comic Sans MS', cursive, sans-serif" font-size="32" font-weight="bold" fill="#000" text-anchor="middle">Conduction</text>
        <text x="480" y="380" font-family="'Comic Sans MS', cursive, sans-serif" font-size="32" font-weight="bold" fill="#000" text-anchor="middle">Radiation</text>
    </svg>
</div>`;
            } else if (currentSection === "Reflection of light") {
                sectionGraphic = `<div style="text-align: center; margin: 15px 0;">
    <svg viewBox="0 0 500 300" style="max-width:500px; width:100%; height:auto; background:#fff; border-radius:8px; padding:10px; border:1px solid #ddd;">
        <defs>
            <marker id="arr-blue" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 Z" fill="#0088cc"/></marker>
        </defs>
        
        <!-- Surface -->
        <rect x="25" y="240" width="450" height="20" fill="#aaddff" stroke="#6699cc" stroke-width="2"/>
        
        <!-- Normal -->
        <line x1="250" y1="50" x2="250" y2="240" stroke="#000" stroke-width="2" stroke-dasharray="8,6"/>
        <text x="250" y="30" text-anchor="middle" font-family="serif" font-size="22" fill="#333">Normal</text>
        <text x="250" y="55" text-anchor="middle" font-family="serif" font-size="22" fill="#333">direction</text>
        
        <!-- Right Angle Box -->
        <polyline points="250,225 265,225 265,240" fill="none" stroke="#000" stroke-width="1.5"/>
        
        <!-- Incident Ray -->
        <line x1="100" y1="100" x2="175" y2="170" stroke="#0088cc" stroke-width="3" marker-end="url(#arr-blue)"/>
        <line x1="175" y1="170" x2="250" y2="240" stroke="#0088cc" stroke-width="3"/>
        <text x="120" y="80" text-anchor="middle" font-family="serif" font-size="22" fill="#333">Incident</text>
        <text x="120" y="105" text-anchor="middle" font-family="serif" font-size="22" fill="#333">ray</text>
        
        <!-- Reflected Ray -->
        <line x1="250" y1="240" x2="325" y2="170" stroke="#0088cc" stroke-width="3" marker-end="url(#arr-blue)"/>
        <line x1="325" y1="170" x2="400" y2="100" stroke="#0088cc" stroke-width="3"/>
        <text x="380" y="80" text-anchor="middle" font-family="serif" font-size="22" fill="#333">Reflected</text>
        <text x="380" y="105" text-anchor="middle" font-family="serif" font-size="22" fill="#333">ray</text>
        
        <!-- Angles -->
        <path d="M 250,180 A 60 60 0 0 0 206,199" fill="none" stroke="#000" stroke-width="1.5"/>
        <text x="225" y="195" font-family="serif" font-size="22" font-style="italic" fill="#000">i</text>
        
        <path d="M 250,180 A 60 60 0 0 1 294,199" fill="none" stroke="#000" stroke-width="1.5"/>
        <text x="265" y="195" font-family="serif" font-size="22" font-style="italic" fill="#000">r</text>
        
        <!-- Equation -->
        <text x="380" y="200" font-family="serif" font-size="24" font-style="italic" fill="#000">i = r</text>
    </svg>
</div>`;
            } else if (currentSection === "Pinhole Camera") {
                sectionGraphic = `<div style="text-align: center; margin: 15px 0;">
    <!-- Pinhole Camera -->
    <svg viewBox="0 0 800 320" style="max-width:800px; width:100%; height:auto; background:#fff; border-radius:8px; padding:10px; border:1px solid #ddd;">
        <defs>
            <marker id="arr-ray" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 Z" fill="#000"/>
            </marker>
            <g id="tree">
                <!-- trunk -->
                <path d="M -5,0 L 5,0 L 3,-70 L -3,-70 Z" fill="#5c4033"/>
                <!-- leaves -->
                <circle cx="0" cy="-110" r="40" fill="#2ca02c"/>
                <circle cx="-25" cy="-80" r="30" fill="#2ca02c"/>
                <circle cx="25" cy="-80" r="30" fill="#2ca02c"/>
                <circle cx="-20" cy="-140" r="25" fill="#2ca02c"/>
                <circle cx="20" cy="-140" r="25" fill="#2ca02c"/>
                <circle cx="0" cy="-170" r="20" fill="#2ca02c"/>
            </g>
        </defs>
        
        <!-- Camera Box -->
        <path d="M 350,145 L 350,30 L 100,30 L 100,270 L 350,270 L 350,155" fill="none" stroke="#333" stroke-width="3"/>
        
        <!-- Object Tree -->
        <use href="#tree" transform="translate(650, 240)"/>
        
        <!-- Image Tree -->
        <use href="#tree" transform="translate(100, 75) scale(-0.83333, -0.83333)"/>
        
        <!-- Rays -->
        <!-- Top to bottom -->
        <line x1="650" y1="60" x2="500" y2="105" stroke="#000" stroke-width="1.5" marker-end="url(#arr-ray)"/>
        <line x1="500" y1="105" x2="350" y2="150" stroke="#000" stroke-width="1.5"/>
        <line x1="350" y1="150" x2="225" y2="187.5" stroke="#000" stroke-width="1.5" marker-end="url(#arr-ray)"/>
        <line x1="225" y1="187.5" x2="100" y2="225" stroke="#000" stroke-width="1.5"/>
        
        <!-- Bottom to top -->
        <line x1="650" y1="240" x2="500" y2="195" stroke="#000" stroke-width="1.5" marker-end="url(#arr-ray)"/>
        <line x1="500" y1="195" x2="350" y2="150" stroke="#000" stroke-width="1.5"/>
        <line x1="350" y1="150" x2="225" y2="112.5" stroke="#000" stroke-width="1.5" marker-end="url(#arr-ray)"/>
        <line x1="225" y1="112.5" x2="100" y2="75" stroke="#000" stroke-width="1.5"/>
        
        <!-- d_o dimension -->
        <line x1="350" y1="15" x2="350" y2="25" stroke="#000" stroke-width="1.5"/>
        <line x1="650" y1="15" x2="650" y2="25" stroke="#000" stroke-width="1.5"/>
        <line x1="480" y1="20" x2="350" y2="20" stroke="#000" stroke-width="1.5" marker-end="url(#arr-ray)"/>
        <line x1="520" y1="20" x2="650" y2="20" stroke="#000" stroke-width="1.5" marker-end="url(#arr-ray)"/>
        <text x="500" y="27" text-anchor="middle" font-family="serif" font-style="italic" font-size="24" fill="#000">d<tspan font-style="normal" font-size="16" dy="5">o</tspan></text>
        
        <!-- d_i dimension -->
        <line x1="100" y1="285" x2="100" y2="295" stroke="#000" stroke-width="1.5"/>
        <line x1="350" y1="285" x2="350" y2="295" stroke="#000" stroke-width="1.5"/>
        <line x1="190" y1="290" x2="100" y2="290" stroke="#000" stroke-width="1.5" marker-end="url(#arr-ray)"/>
        <line x1="260" y1="290" x2="350" y2="290" stroke="#000" stroke-width="1.5" marker-end="url(#arr-ray)"/>
        <text x="225" y="297" text-anchor="middle" font-family="serif" font-style="italic" font-size="24" fill="#000">d<tspan font-style="normal" font-size="16" dy="5">i</tspan></text>
        
        <!-- Height labels -->
        <text x="730" y="155" text-anchor="middle" font-family="serif" font-style="italic" font-size="30" fill="#000">h<tspan font-style="normal" font-size="20" dy="5">o</tspan></text>
        <text x="50" y="155" text-anchor="middle" font-family="serif" font-style="italic" font-size="30" fill="#000">h<tspan font-style="normal" font-size="20" dy="5">i</tspan></text>
        
        <!-- Vertex Labels -->
        <text x="650" y="45" text-anchor="middle" font-family="serif" font-size="20" fill="#333">B</text>
        <text x="665" y="250" text-anchor="middle" font-family="serif" font-size="20" fill="#333">O</text>
        <text x="80" y="80" text-anchor="middle" font-family="serif" font-size="20" fill="#333">I</text>
        <text x="80" y="230" text-anchor="middle" font-family="serif" font-size="20" fill="#333">M</text>
    </svg>
</div>`;
            } else if (currentSection === "Refraction of light") {
                sectionGraphic = `<div style="text-align: center; margin: 15px 0;">
    <svg viewBox="0 0 400 350" style="max-width:400px; width:100%; height:auto; background:#fff; border-radius:8px; padding:10px; border:1px solid #ddd;">
        <defs>
            <marker id="arr-blue" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 Z" fill="#0088cc"/></marker>
        </defs>
        
        <!-- Bottom Medium (n2) -->
        <rect x="20" y="175" width="360" height="150" fill="#cceeff" stroke="#6699cc" stroke-width="2"/>
        
        <!-- Normal -->
        <line x1="200" y1="20" x2="200" y2="330" stroke="#000" stroke-width="2" stroke-dasharray="8,6"/>
        
        <!-- Incident Ray (n1) -->
        <line x1="80" y1="35" x2="140" y2="105" stroke="#0088cc" stroke-width="3" marker-end="url(#arr-blue)"/>
        <line x1="140" y1="105" x2="200" y2="175" stroke="#0088cc" stroke-width="3"/>
        
        <!-- Refracted Ray (n2) -->
        <line x1="200" y1="175" x2="230" y2="245" stroke="#0088cc" stroke-width="3" marker-end="url(#arr-blue)"/>
        <line x1="230" y1="245" x2="260" y2="315" stroke="#0088cc" stroke-width="3"/>
        
        <!-- Labels -->
        <text x="40" y="150" font-family="serif" font-size="26" font-style="italic" fill="#333">n<tspan font-style="normal" font-size="18" dy="5">1</tspan></text>
        <text x="40" y="210" font-family="serif" font-size="26" font-style="italic" fill="#333">n<tspan font-style="normal" font-size="18" dy="5">2</tspan></text>
        
        <!-- Angle i -->
        <path d="M 200,120 A 55 55 0 0 0 164,133" fill="none" stroke="#000" stroke-width="1.5"/>
        <text x="180" y="115" font-family="serif" font-size="22" font-style="italic" fill="#000">i</text>
        
        <!-- Angle r -->
        <path d="M 200,250 A 75 75 0 0 0 230,244" fill="none" stroke="#000" stroke-width="1.5"/>
        <text x="212" y="265" font-family="serif" font-size="22" font-style="italic" fill="#000">r</text>
    </svg>
</div>`;
            } else if (currentSection === "Magnetic Field & Force") {
                sectionGraphic = `<div style="display: flex; flex-direction: column; gap: 30px; margin: 20px 0; align-items: center;">
    <!-- SVG 1: Straight Wire -->
    <svg viewBox="0 -30 640 380" style="max-width:640px; width:100%; height:auto; background:#fff; border-radius:8px; border:1px solid #ddd; padding: 10px;">
        <defs>
            <marker id="arr-blk" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M 0 0 L 10 5 L 0 10 Z" fill="#000"/></marker>
            <marker id="arr-green" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M 0 0 L 10 5 L 0 10 Z" fill="#8bc34a"/></marker>
        </defs>
        
        <!-- Left Diagram -->
        <text x="20" y="140" font-family="sans-serif" font-size="28" font-weight="bold" fill="#1b3b5c">Distance from</text>
        <text x="20" y="175" font-family="sans-serif" font-size="28" font-weight="bold" fill="#1b3b5c">wire to point M</text>
        <line x1="250" y1="155" x2="360" y2="155" stroke="#9ccc65" stroke-width="3" marker-end="url(#arr-green)"/>
        
        <!-- Lower Wire -->
        <rect x="391" y="150" width="14" height="150" fill="#aab7c4" rx="7"/>
        <!-- Plane -->
        <polygon points="240,200 360,100 620,100 500,200" fill="#d4f1f9" stroke="#63c4e8" stroke-width="2" opacity="0.8"/>
        
        <!-- B-Field Circles (Ellipses) -->
        <g stroke="#d63031" stroke-width="2" fill="none">
            <ellipse cx="398" cy="150" rx="30" ry="12"/>
            <ellipse cx="398" cy="150" rx="55" ry="22"/>
            <ellipse cx="398" cy="150" rx="80" ry="32"/>
            <ellipse cx="398" cy="150" rx="105" ry="42"/>
        </g>
        
        <!-- Upper Wire -->
        <rect x="391" y="0" width="14" height="150" fill="#aab7c4" rx="7"/>
        
        <!-- Current Arrow (Left) -->
        <line x1="398" y1="80" x2="398" y2="0" stroke="#6c5ce7" stroke-width="4"/>
        <polygon points="398,-10 388,10 408,10" fill="#6c5ce7"/>
        <text x="415" y="45" font-family="serif" font-size="24" font-style="italic" font-weight="bold" fill="#000">I</text>
        
        <!-- Distance d and Point M -->
        <line x1="398" y1="150" x2="478" y2="182" stroke="#000" stroke-width="2"/>
        <circle cx="478" cy="182" r="5" fill="#000"/>
        <text x="440" y="160" font-family="serif" font-size="26" font-weight="bold" fill="#d63031">d</text>
        <text x="488" y="195" font-family="serif" font-size="24" font-style="italic" font-weight="bold" fill="#000">M</text>
    </svg>

    <!-- SVG 2: Solenoid Infographic -->
    <svg viewBox="0 0 1000 700" style="max-width:1000px; width:100%; height:auto; background:#fff; border-radius:8px; border:1px solid #ddd; padding: 10px; margin: 20px 0;">
        <defs>
            <marker id="arr-blue-left" viewBox="0 0 10 10" refX="2" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 10 0 L 0 5 L 10 10 Z" fill="#3498db"/></marker>
            <marker id="arr-blue-right" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 Z" fill="#3498db"/></marker>
            <marker id="arr-red-up" viewBox="0 0 10 10" refX="5" refY="2" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 10 L 5 0 L 10 10 Z" fill="#d63031"/></marker>
            <marker id="arr-red-down" viewBox="0 0 10 10" refX="5" refY="8" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 0 L 5 10 Z" fill="#d63031"/></marker>
            <marker id="arr-red-right" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 Z" fill="#d63031"/></marker>
            <marker id="arr-blk" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 Z" fill="#000"/></marker>
        </defs>

        <!-- Titles -->
        <text x="375" y="40" text-anchor="middle" font-family="serif" font-size="36" font-weight="bold" fill="#004d80">Solenoid</text>
        <text x="375" y="70" text-anchor="middle" font-family="sans-serif" font-size="16" fill="#333">A coil of wire that produces a nearly uniform magnetic field</text>
        <text x="375" y="90" text-anchor="middle" font-family="sans-serif" font-size="16" fill="#333">inside when an electric current flows through it.</text>

        <!-- Right Panel (Key Points) -->
        <rect x="710" y="80" width="270" height="590" fill="#f4f9fb" stroke="#a9cce3" stroke-width="2" rx="10"/>
        <text x="730" y="115" font-family="sans-serif" font-size="20" font-weight="bold" fill="#004d80">Key Points</text>
        
        <circle cx="735" cy="145" r="4" fill="#333"/>
        <text x="750" y="150" font-family="sans-serif" font-size="14" fill="#333">The magnetic field inside a</text>
        <text x="750" y="170" font-family="sans-serif" font-size="14" fill="#333">long solenoid is strong and</text>
        <text x="750" y="190" font-family="sans-serif" font-size="14" fill="#333">nearly uniform.</text>

        <circle cx="735" cy="225" r="4" fill="#333"/>
        <text x="750" y="230" font-family="sans-serif" font-size="14" fill="#333">The field outside is weaker</text>
        <text x="750" y="250" font-family="sans-serif" font-size="14" fill="#333">and forms closed loops.</text>

        <circle cx="735" cy="285" r="4" fill="#333"/>
        <text x="750" y="290" font-family="sans-serif" font-size="14" fill="#333">The direction of the magnetic</text>
        <text x="750" y="310" font-family="sans-serif" font-size="14" fill="#333">field (and the N/S poles) is</text>
        <text x="750" y="330" font-family="sans-serif" font-size="14" fill="#333">determined by the right-hand rule.</text>

        <!-- Mini Right-Hand Graphic removed as requested -->

        <!-- Main Diagram Magnetic Field Lines (Blue) -->
        <!-- Outer Loops Top -->
        <path d="M 120,230 C -50,230 -50,110 350,110 C 750,110 750,230 580,230 L 120,230" fill="none" stroke="#3498db" stroke-width="2"/>
        <polygon points="350,110 340,105 340,115" fill="#3498db"/>
        <path d="M 140,240 C -10,240 -10,140 350,140 C 710,140 710,240 560,240 L 140,240" fill="none" stroke="#3498db" stroke-width="2"/>
        <polygon points="350,140 340,135 340,145" fill="#3498db"/>
        
        <!-- Outer Loops Bottom -->
        <path d="M 120,270 C -50,270 -50,390 350,390 C 750,390 750,270 580,270 L 120,270" fill="none" stroke="#3498db" stroke-width="2"/>
        <polygon points="350,390 340,385 340,395" fill="#3498db"/>
        <path d="M 140,260 C -10,260 -10,360 350,360 C 710,360 710,260 560,260 L 140,260" fill="none" stroke="#3498db" stroke-width="2"/>
        <polygon points="350,360 340,355 340,365" fill="#3498db"/>

        <!-- Center Straight Line -->
        <line x1="50" y1="250" x2="650" y2="250" stroke="#3498db" stroke-width="2"/>
        
        <!-- Inner Field Arrows (Left Pointing) -->
        <polygon points="340,250 350,245 350,255" fill="#3498db"/>
        <polygon points="340,240 350,235 350,245" fill="#3498db"/>
        <polygon points="340,260 350,255 350,265" fill="#3498db"/>
        <polygon points="340,230 350,225 350,235" fill="#3498db"/>
        <polygon points="340,270 350,265 350,275" fill="#3498db"/>

        <!-- Solenoid Coil Background (Dark Copper) -->
        <path d="M 180,310 C 170,310 170,190 190,190 M 200,310 C 190,310 190,190 210,190 M 220,310 C 210,310 210,190 230,190 M 240,310 C 230,310 230,190 250,190 M 260,310 C 250,310 250,190 270,190 M 280,310 C 270,310 270,190 290,190 M 300,310 C 290,310 290,190 310,190 M 320,310 C 310,310 310,190 330,190 M 340,310 C 330,310 330,190 350,190 M 360,310 C 350,310 350,190 370,190 M 380,310 C 370,310 370,190 390,190 M 400,310 C 390,310 390,190 410,190 M 420,310 C 410,310 410,190 430,190 M 440,310 C 430,310 430,190 450,190 M 460,310 C 450,310 450,190 470,190 M 480,310 C 470,310 470,190 490,190 M 500,310 C 490,310 490,190 510,190 M 520,310 C 510,310 510,190 530,190" fill="none" stroke="#a04000" stroke-width="6" stroke-linecap="round"/>

        <!-- Solenoid Coil Foreground (Bright Copper) -->
        <path d="M 190,190 C 210,190 210,310 200,310 M 210,190 C 230,190 230,310 220,310 M 230,190 C 250,190 250,310 240,310 M 250,190 C 270,190 270,310 260,310 M 270,190 C 290,190 290,310 280,310 M 290,190 C 310,190 310,310 300,310 M 310,190 C 330,190 330,310 320,310 M 330,190 C 350,190 350,310 340,310 M 350,190 C 370,190 370,310 360,310 M 370,190 C 390,190 390,310 380,310 M 390,190 C 410,190 410,310 400,310 M 410,190 C 430,190 430,310 420,310 M 430,190 C 450,190 450,310 440,310 M 450,190 C 470,190 470,310 460,310 M 470,190 C 490,190 490,310 480,310 M 490,190 C 510,190 510,310 500,310 M 510,190 C 530,190 530,310 520,310" fill="none" stroke="#d35400" stroke-width="6" stroke-linecap="round"/>

        <!-- Current Direction Arrows on Coil (Blue pointing UP) -->
        <polygon points="200,240 195,255 205,255" fill="#1f618d"/>
        <polygon points="240,240 235,255 245,255" fill="#1f618d"/>
        <polygon points="280,240 275,255 285,255" fill="#1f618d"/>
        <polygon points="320,240 315,255 325,255" fill="#1f618d"/>
        <polygon points="360,240 355,255 365,255" fill="#1f618d"/>
        <polygon points="400,240 395,255 405,255" fill="#1f618d"/>
        <polygon points="440,240 435,255 445,255" fill="#1f618d"/>
        <polygon points="480,240 475,255 485,255" fill="#1f618d"/>

        <!-- Connecting Wires to Battery -->
        <line x1="180" y1="420" x2="180" y2="310" stroke="#d35400" stroke-width="6"/>
        <polygon points="180,335 172,350 188,350" fill="#d63031"/>
        <text x="155" y="360" font-family="serif" font-size="24" font-style="italic" font-weight="bold" fill="#d63031">I</text>

        <line x1="520" y1="310" x2="520" y2="420" stroke="#d35400" stroke-width="6"/>
        <polygon points="520,380 512,365 528,365" fill="#d63031"/>
        <text x="535" y="375" font-family="serif" font-size="24" font-style="italic" font-weight="bold" fill="#d63031">I</text>

        <!-- Circuit and Battery -->
        <line x1="180" y1="420" x2="310" y2="420" stroke="#000" stroke-width="3"/>
        <line x1="390" y1="420" x2="520" y2="420" stroke="#000" stroke-width="3"/>
        
        <!-- Battery Symbol -->
        <rect x="310" y="390" width="2" height="60" fill="#000"/> <!-- Positive (Left) -->
        <rect x="330" y="405" width="8" height="30" fill="#000"/> <!-- Negative -->
        <line x1="340" y1="420" x2="350" y2="420" stroke="#000" stroke-width="2"/>
        <rect x="350" y="390" width="2" height="60" fill="#000"/> <!-- Positive -->
        <rect x="370" y="405" width="8" height="30" fill="#000"/> <!-- Negative (Right) -->
        <line x1="380" y1="420" x2="390" y2="420" stroke="#000" stroke-width="2"/>

        <text x="290" y="415" font-family="sans-serif" font-size="24" font-weight="bold" fill="#000">+</text>
        <text x="395" y="415" font-family="sans-serif" font-size="28" font-weight="bold" fill="#000">-</text>
        <text x="350" y="470" text-anchor="middle" font-family="sans-serif" font-size="16" font-weight="bold" fill="#333">DC power supply</text>

        <!-- N and S Poles -->
        <text x="60" y="270" font-family="sans-serif" font-size="60" font-weight="bold" fill="#d63031">N</text>
        <text x="600" y="270" font-family="sans-serif" font-size="60" font-weight="bold" fill="#1f618d">S</text>

        <!-- Labels and Pointers -->
        <!-- Magnetic field lines -->
        <text x="100" y="100" text-anchor="middle" font-family="sans-serif" font-size="16" fill="#333">Magnetic field lines</text>
        <line x1="100" y1="110" x2="130" y2="150" stroke="#000" stroke-width="1.5" marker-end="url(#arr-blk)"/>
        
        <!-- Inside uniform field -->
        <text x="350" y="115" text-anchor="middle" font-family="sans-serif" font-size="16" fill="#333">Inside: nearly uniform</text>
        <text x="350" y="135" text-anchor="middle" font-family="sans-serif" font-size="16" fill="#333">magnetic field</text>
        <line x1="350" y1="145" x2="350" y2="210" stroke="#000" stroke-width="1.5" marker-end="url(#arr-blk)"/>

        <!-- Solenoid (coil of wire) -->
        <text x="560" y="120" text-anchor="middle" font-family="sans-serif" font-size="16" fill="#333">Solenoid (coil of wire)</text>
        <line x1="560" y1="130" x2="490" y2="185" stroke="#000" stroke-width="1.5" marker-end="url(#arr-blk)"/>

        <!-- Bottom Panels -->
        <!-- Left Panel: N -->
        <rect x="40" y="530" width="300" height="150" fill="#f4f9fb" stroke="#a9cce3" stroke-width="2" rx="10"/>
        <text x="190" y="555" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#1f618d">View from the end (looking at the left end)</text>
        <circle cx="110" cy="625" r="45" fill="none" stroke="#1f618d" stroke-width="2"/>
        <text x="110" y="640" text-anchor="middle" font-family="sans-serif" font-size="40" font-weight="bold" fill="#d63031">N</text>
        <circle cx="110" cy="570" r="6" fill="#fff" stroke="#1f618d" stroke-width="2"/><circle cx="110" cy="570" r="2.5" fill="#1f618d"/>
        <circle cx="149" cy="586" r="6" fill="#fff" stroke="#1f618d" stroke-width="2"/><circle cx="149" cy="586" r="2.5" fill="#1f618d"/>
        <circle cx="165" cy="625" r="6" fill="#fff" stroke="#1f618d" stroke-width="2"/><circle cx="165" cy="625" r="2.5" fill="#1f618d"/>
        <circle cx="149" cy="664" r="6" fill="#fff" stroke="#1f618d" stroke-width="2"/><circle cx="149" cy="664" r="2.5" fill="#1f618d"/>
        <circle cx="110" cy="680" r="6" fill="#fff" stroke="#1f618d" stroke-width="2"/><circle cx="110" cy="680" r="2.5" fill="#1f618d"/>
        <circle cx="71" cy="664" r="6" fill="#fff" stroke="#1f618d" stroke-width="2"/><circle cx="71" cy="664" r="2.5" fill="#1f618d"/>
        <circle cx="55" cy="625" r="6" fill="#fff" stroke="#1f618d" stroke-width="2"/><circle cx="55" cy="625" r="2.5" fill="#1f618d"/>
        <circle cx="71" cy="586" r="6" fill="#fff" stroke="#1f618d" stroke-width="2"/><circle cx="71" cy="586" r="2.5" fill="#1f618d"/>
        <text x="190" y="605" font-family="sans-serif" font-size="14" fill="#333">Current coming</text>
        <text x="190" y="625" font-family="sans-serif" font-size="14" fill="#333">out of the page</text>
        <text x="190" y="645" font-family="sans-serif" font-size="14" fill="#333">( • ) → North pole</text>

        <!-- Right Panel: S -->
        <rect x="360" y="530" width="330" height="150" fill="#f4f9fb" stroke="#a9cce3" stroke-width="2" rx="10"/>
        <text x="525" y="555" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#1f618d">View from the other end (right end)</text>
        <circle cx="450" cy="625" r="45" fill="none" stroke="#1f618d" stroke-width="2"/>
        <text x="450" y="640" text-anchor="middle" font-family="sans-serif" font-size="40" font-weight="bold" fill="#1f618d">S</text>
        <g stroke="#1f618d" stroke-width="2">
            <circle cx="450" cy="570" r="6" fill="#fff"/><path d="M 447,567 L 453,573 M 447,573 L 453,567"/>
            <circle cx="489" cy="586" r="6" fill="#fff"/><path d="M 486,583 L 492,589 M 486,589 L 492,583"/>
            <circle cx="505" cy="625" r="6" fill="#fff"/><path d="M 502,622 L 508,628 M 502,628 L 508,622"/>
            <circle cx="489" cy="664" r="6" fill="#fff"/><path d="M 486,661 L 492,667 M 486,667 L 492,661"/>
            <circle cx="450" cy="680" r="6" fill="#fff"/><path d="M 447,677 L 453,683 M 447,683 L 453,677"/>
            <circle cx="411" cy="664" r="6" fill="#fff"/><path d="M 408,661 L 414,667 M 408,667 L 414,661"/>
            <circle cx="395" cy="625" r="6" fill="#fff"/><path d="M 392,622 L 398,628 M 392,628 L 398,622"/>
            <circle cx="411" cy="586" r="6" fill="#fff"/><path d="M 408,583 L 414,589 M 408,589 L 414,583"/>
        </g>
        <text x="530" y="615" font-family="sans-serif" font-size="14" fill="#333">Current going</text>
        <text x="530" y="635" font-family="sans-serif" font-size="14" fill="#333">into the page</text>
        <text x="530" y="655" font-family="sans-serif" font-size="14" fill="#333">( × ) → South pole</text>
    </svg>

    <!-- SVG 3: Wire in Magnetic Field -->
    <svg viewBox="0 -20 1000 470" style="max-width:1000px; width:100%; height:auto; background:#fff; border-radius:8px; border:1px solid #ddd; padding: 10px;">
        <defs>
            <pattern id="b-cross" x="10" y="10" width="25" height="25" patternUnits="userSpaceOnUse">
                <path d="M 5,5 L 15,15 M 5,15 L 15,5" stroke="#27ae60" stroke-width="2"/>
            </pattern>
            <marker id="arr-purp" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 Z" fill="#8e44ad"/></marker>
        </defs>
        
        <!-- Panel (a) Isometric Magnet -->
        <!-- S Pole (Top) -->
        <polygon points="120,130 180,130 160,160 100,160" fill="#ecf0f1" stroke="#95a5a6" stroke-width="2"/>
        <!-- N Pole (Bottom) -->
        <polygon points="120,270 180,270 160,300 100,300" fill="#ecf0f1" stroke="#95a5a6" stroke-width="2"/>
        <!-- Spine -->
        <polygon points="120,130 100,160 100,300 120,270" fill="#bdc3c7" stroke="#95a5a6" stroke-width="2"/>
        
        <!-- Vertical Wire -->
        <line x1="140" y1="80" x2="140" y2="350" stroke="#7f8c8d" stroke-width="4"/>
        
        <!-- Green B-field Arrows -->
        <line x1="130" y1="270" x2="130" y2="180" stroke="#27ae60" stroke-width="3" marker-end="url(#arr-green)"/>
        <line x1="150" y1="270" x2="150" y2="180" stroke="#27ae60" stroke-width="3" marker-end="url(#arr-green)"/>
        
        <text x="140" y="152" font-family="serif" font-size="22" font-weight="bold" fill="#2c3e50" text-anchor="middle">S</text>
        <text x="140" y="292" font-family="serif" font-size="22" font-weight="bold" fill="#2c3e50" text-anchor="middle">N</text>

        <!-- Panel (b) I = 0 -->
        <rect x="300" y="50" width="200" height="80" fill="#fdfae4" stroke="#d5c898" rx="6"/>
        <polygon points="390,130 410,130 400,150" fill="#fdfae4" stroke="#d5c898"/>
        <!-- Hide the border line inside the polygon -->
        <line x1="391" y1="130" x2="409" y2="130" stroke="#fdfae4" stroke-width="3"/>
        <text x="320" y="75" font-family="serif" font-size="16" fill="#000">When there is no current</text>
        <text x="320" y="95" font-family="serif" font-size="16" fill="#000">in the wire, the wire</text>
        <text x="320" y="115" font-family="serif" font-size="16" fill="#000">remains vertical.</text>
        
        <text x="270" y="240" font-family="serif" font-size="22" font-weight="bold" fill="#000">B<tspan font-size="14" dy="5">in</tspan></text>
        <line x1="260" y1="220" x2="280" y2="220" stroke="#000" stroke-width="2" marker-end="url(#arr-blk)"/>

        <rect x="330" y="170" width="140" height="130" rx="15" fill="#e8f8f5" stroke="#a3e4d7" stroke-width="2"/>
        <rect x="330" y="170" width="140" height="130" rx="15" fill="url(#b-cross)"/>
        
        <!-- Wire -->
        <line x1="400" y1="145" x2="400" y2="350" stroke="#bdc3c7" stroke-width="6"/>
        <line x1="400" y1="145" x2="400" y2="350" stroke="#7f8c8d" stroke-width="2"/>
        <circle cx="400" cy="145" r="3" fill="#000"/>
        <circle cx="400" cy="350" r="3" fill="#000"/>
        
        <text x="380" y="380" font-family="serif" font-style="italic" font-size="22" fill="#000">I = 0</text>

        <!-- Panel (c) I Upward -->
        <rect x="550" y="50" width="200" height="80" fill="#fdfae4" stroke="#d5c898" rx="6"/>
        <polygon points="630,130 650,130 640,150" fill="#fdfae4" stroke="#d5c898"/>
        <line x1="631" y1="130" x2="649" y2="130" stroke="#fdfae4" stroke-width="3"/>
        <text x="570" y="75" font-family="serif" font-size="16" fill="#000">When the current is</text>
        <text x="570" y="95" font-family="serif" font-size="16" fill="#000">upward, the wire deflects</text>
        <text x="570" y="115" font-family="serif" font-size="16" fill="#000">to the left.</text>
        
        <text x="520" y="240" font-family="serif" font-size="22" font-weight="bold" fill="#000">B<tspan font-size="14" dy="5">in</tspan></text>
        <line x1="510" y1="220" x2="530" y2="220" stroke="#000" stroke-width="2" marker-end="url(#arr-blk)"/>

        <rect x="580" y="170" width="140" height="130" rx="15" fill="#e8f8f5" stroke="#a3e4d7" stroke-width="2"/>
        <rect x="580" y="170" width="140" height="130" rx="15" fill="url(#b-cross)"/>
        
        <!-- Original Dashed -->
        <line x1="650" y1="145" x2="650" y2="350" stroke="#333" stroke-width="2" stroke-dasharray="6,4"/>
        
        <!-- Bowed Wire -->
        <path d="M 650,145 Q 600,247 650,350" stroke="#bdc3c7" stroke-width="6" fill="none"/>
        <path d="M 650,145 Q 600,247 650,350" stroke="#7f8c8d" stroke-width="2" fill="none"/>
        <circle cx="650" cy="145" r="3" fill="#000"/>
        <circle cx="650" cy="350" r="3" fill="#000"/>
        
        <!-- Current Arrow (Upward along curve) -->
        <path d="M 618,290 Q 612,247 618,210" stroke="#8e44ad" stroke-width="4" fill="none" marker-end="url(#arr-purp)"/>
        <text x="596" y="255" font-family="serif" font-style="italic" font-size="24" font-weight="bold" fill="#8e44ad">I</text>

        <!-- Panel (d) I Downward -->
        <rect x="800" y="50" width="200" height="80" fill="#fdfae4" stroke="#d5c898" rx="6"/>
        <polygon points="900,130 920,130 910,150" fill="#fdfae4" stroke="#d5c898"/>
        <line x1="901" y1="130" x2="919" y2="130" stroke="#fdfae4" stroke-width="3"/>
        <text x="820" y="75" font-family="serif" font-size="16" fill="#000">When the current is</text>
        <text x="820" y="95" font-family="serif" font-size="16" fill="#000">downward, the wire deflects</text>
        <text x="820" y="115" font-family="serif" font-size="16" fill="#000">to the right.</text>
        
        <text x="770" y="240" font-family="serif" font-size="22" font-weight="bold" fill="#000">B<tspan font-size="14" dy="5">in</tspan></text>
        <line x1="760" y1="220" x2="780" y2="220" stroke="#000" stroke-width="2" marker-end="url(#arr-blk)"/>

        <rect x="830" y="170" width="140" height="130" rx="15" fill="#e8f8f5" stroke="#a3e4d7" stroke-width="2"/>
        <rect x="830" y="170" width="140" height="130" rx="15" fill="url(#b-cross)"/>
        
        <!-- Original Dashed -->
        <line x1="900" y1="145" x2="900" y2="350" stroke="#333" stroke-width="2" stroke-dasharray="6,4"/>
        
        <!-- Bowed Wire -->
        <path d="M 900,145 Q 950,247 900,350" stroke="#bdc3c7" stroke-width="6" fill="none"/>
        <path d="M 900,145 Q 950,247 900,350" stroke="#7f8c8d" stroke-width="2" fill="none"/>
        <circle cx="900" cy="145" r="3" fill="#000"/>
        <circle cx="900" cy="350" r="3" fill="#000"/>
        
        <!-- Current Arrow (Downward along curve) -->
        <path d="M 932,210 Q 938,247 932,290" stroke="#8e44ad" stroke-width="4" fill="none" marker-end="url(#arr-purp)"/>
        <text x="948" y="255" font-family="serif" font-style="italic" font-size="24" font-weight="bold" fill="#8e44ad">I</text>

        <!-- Labels -->
        <text x="140" y="420" font-family="sans-serif" font-size="22" font-weight="bold" fill="#bdc3c7">a</text>
        <text x="400" y="420" font-family="sans-serif" font-size="22" font-weight="bold" fill="#bdc3c7">b</text>
        <text x="650" y="420" font-family="sans-serif" font-size="22" font-weight="bold" fill="#bdc3c7">c</text>
        <text x="900" y="420" font-family="sans-serif" font-size="22" font-weight="bold" fill="#bdc3c7">d</text>
        
        <!-- Connecting line at bottom -->
        <line x1="50" y1="412" x2="950" y2="412" stroke="#ecf0f1" stroke-width="4"/>
    </svg>
</div>`;
            } else if (currentSection === "First Law of Thermodynamics") {
                sectionGraphic = `<div class="first-law-panel" style="background: linear-gradient(135deg, #0b192c 0%, #0d1e36 100%); border: 1px solid rgba(0, 242, 254, 0.4); border-radius: 14px; padding: 22px; margin: 18px 0 25px 0; color: #f8fafc; box-shadow: 0 10px 25px -5px rgba(2, 6, 23, 0.5), 0 0 20px rgba(0, 242, 254, 0.15);">
                    <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; margin-bottom: 16px; border-bottom: 1px solid rgba(0, 242, 254, 0.25); padding-bottom: 12px;">
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <span style="display: inline-flex; align-items: center; justify-content: center; width: 34px; height: 34px; border-radius: 8px; background: rgba(0, 242, 254, 0.15); color: #00f2fe; font-size: 1.1rem;"><i class="fa-solid fa-scale-balanced"></i></span>
                            <h3 style="margin: 0; color: #00f2fe; font-size: 1.25rem; font-weight: 700; letter-spacing: -0.01em;">First Law of Thermodynamics: Conservation of Energy</h3>
                        </div>
                        <span style="background: rgba(0, 242, 254, 0.12); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.35); padding: 4px 12px; border-radius: 999px; font-size: 0.8rem; font-weight: 600;"><i class="fa-solid fa-atom" style="margin-right: 4px;"></i> Energy Balance • \\[Q = W + \\Delta U\\]</span>
                    </div>

                    <p style="margin: 0 0 14px 0; color: #cbd5e1; font-size: 0.92rem; line-height: 1.6;">
                        The First Law of Thermodynamics establishes that energy cannot be created or destroyed, only transferred or transformed. The net heat \\(Q\\) supplied to the system equals the mechanical work \\(W\\) performed by the system plus the increase in internal energy \\(\\Delta U\\):
                    </p>

                    <div style="background: #060d17; border: 1px solid rgba(0, 242, 254, 0.45); border-radius: 8px; padding: 14px; text-align: center; color: #f0f9ff; margin-bottom: 18px;">
                        \\[ Q = W + \\Delta U \\quad \\iff \\quad \\Delta U = Q - W \\]
                    </div>

                    <!-- 3-Pillar Visual Breakdown for Q, W, and ΔU -->
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px;">
                        <!-- Pillar 1: Heat Added (Q) -->
                        <div style="background: #0d223a; border: 1px solid rgba(56, 189, 248, 0.3); border-radius: 10px; padding: 16px;">
                            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                                <h4 style="margin: 0; color: #38bdf8; font-size: 1.02rem; font-weight: 700;"><i class="fa-solid fa-fire" style="margin-right: 6px; color: #f87171;"></i> Heat Transfer \\(Q\\)</h4>
                                <span style="font-size: 0.78rem; background: rgba(56, 189, 248, 0.15); color: #38bdf8; padding: 2px 8px; border-radius: 999px;">Joule (J)</span>
                            </div>
                            <p style="margin: 0 0 10px 0; color: #94a3b8; font-size: 0.84rem; line-height: 1.45;">Thermal energy exchanged across system boundaries:</p>
                            <ul style="margin: 0; padding-left: 18px; color: #cbd5e1; font-size: 0.83rem; line-height: 1.5;">
                                <li><strong style="color: #4ade80;">\\(Q > 0\\)</strong>: Heat <em>absorbed</em> by system (inflow)</li>
                                <li><strong style="color: #f87171;">\\(Q < 0\\)</strong>: Heat <em>released</em> to surroundings (outflow)</li>
                                <li><strong style="color: #38bdf8;">\\(Q = 0\\)</strong>: Adiabatic (thermally insulated)</li>
                            </ul>
                        </div>

                        <!-- Pillar 2: Work Done (W) -->
                        <div style="background: #0d223a; border: 1px solid rgba(56, 189, 248, 0.3); border-radius: 10px; padding: 16px;">
                            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                                <h4 style="margin: 0; color: #38bdf8; font-size: 1.02rem; font-weight: 700;"><i class="fa-solid fa-arrows-left-right-to-line" style="margin-right: 6px; color: #fbbf24;"></i> Work Done \\(W\\)</h4>
                                <span style="font-size: 0.78rem; background: rgba(56, 189, 248, 0.15); color: #38bdf8; padding: 2px 8px; border-radius: 999px;">Joule (J)</span>
                            </div>
                            <p style="margin: 0 0 10px 0; color: #94a3b8; font-size: 0.84rem; line-height: 1.45;">Mechanical boundary work (\\(W = P_{\\mathrm{av}}\\Delta V\\)):</p>
                            <ul style="margin: 0; padding-left: 18px; color: #cbd5e1; font-size: 0.83rem; line-height: 1.5;">
                                <li><strong style="color: #4ade80;">\\(W > 0\\)</strong>: Work done <em>by</em> gas (expansion, \\(\\Delta V > 0\\))</li>
                                <li><strong style="color: #f87171;">\\(W < 0\\)</strong>: Work done <em>on</em> gas (compression, \\(\\Delta V < 0\\))</li>
                                <li><strong style="color: #38bdf8;">\\(W = 0\\)</strong>: Isochoric process (\\(\\Delta V = 0\\))</li>
                            </ul>
                        </div>

                        <!-- Pillar 3: Internal Energy Change (ΔU) -->
                        <div style="background: #0d223a; border: 1px solid rgba(56, 189, 248, 0.3); border-radius: 10px; padding: 16px;">
                            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                                <h4 style="margin: 0; color: #38bdf8; font-size: 1.02rem; font-weight: 700;"><i class="fa-solid fa-temperature-half" style="margin-right: 6px; color: #a78bfa;"></i> Internal Energy \\(\\Delta U\\)</h4>
                                <span style="font-size: 0.78rem; background: rgba(56, 189, 248, 0.15); color: #38bdf8; padding: 2px 8px; border-radius: 999px;">Joule (J)</span>
                            </div>
                            <p style="margin: 0 0 10px 0; color: #94a3b8; font-size: 0.84rem; line-height: 1.45;">Molecular thermal kinetic energy (\\(\\Delta U = \\frac{3}{2}nR\\Delta T\\)):</p>
                            <ul style="margin: 0; padding-left: 18px; color: #cbd5e1; font-size: 0.83rem; line-height: 1.5;">
                                <li><strong style="color: #4ade80;">\\(\\Delta U > 0\\)</strong>: System temperature increases (\\(T_f > T_i\\))</li>
                                <li><strong style="color: #f87171;">\\(\\Delta U < 0\\)</strong>: System temperature decreases (\\(T_f < T_i\\))</li>
                                <li><strong style="color: #38bdf8;">\\(\\Delta U = 0\\)</strong>: Isothermal process (\\(\\Delta T = 0\\))</li>
                            </ul>
                        </div>
                    </div>
                </div>`;
            } else if (currentSection === "Work Done in Thermodynamic Processes") {
                sectionGraphic = `<div class="thermo-processes-panel" style="background: linear-gradient(135deg, #0b192c 0%, #0d1e36 100%); border: 1px solid rgba(0, 242, 254, 0.4); border-radius: 14px; padding: 22px; margin: 18px 0 25px 0; color: #f8fafc; box-shadow: 0 10px 25px -5px rgba(2, 6, 23, 0.5), 0 0 20px rgba(0, 242, 254, 0.15);">
                    <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; margin-bottom: 16px; border-bottom: 1px solid rgba(0, 242, 254, 0.25); padding-bottom: 12px;">
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <span style="display: inline-flex; align-items: center; justify-content: center; width: 34px; height: 34px; border-radius: 8px; background: rgba(0, 242, 254, 0.15); color: #00f2fe; font-size: 1.1rem;"><i class="fa-solid fa-fire-burner"></i></span>
                            <h3 style="margin: 0; color: #00f2fe; font-size: 1.25rem; font-weight: 700; letter-spacing: -0.01em;">Thermodynamic Processes: Work Done & Heat Transfer</h3>
                        </div>
                        <span style="background: rgba(0, 242, 254, 0.12); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.35); padding: 4px 12px; border-radius: 999px; font-size: 0.8rem; font-weight: 600;"><i class="fa-solid fa-layer-group" style="margin-right: 4px;"></i> First Law Overview • \\(Q = \\Delta U + W\\)</span>
                    </div>

                    <!-- 4-Card Grid for Processes 1 - 4 -->
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin-bottom: 16px;">
                        <!-- 1. Isobaric Process -->
                        <div style="background: #0d223a; border: 1px solid rgba(56, 189, 248, 0.3); border-radius: 10px; padding: 16px; display: flex; flex-direction: column; justify-content: space-between;">
                            <div>
                                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                                    <h4 style="margin: 0; color: #38bdf8; font-size: 1.02rem; font-weight: 700;">1. Work Done in Isobaric Process</h4>
                                    <span style="font-size: 0.75rem; background: rgba(56, 189, 248, 0.15); color: #38bdf8; padding: 2px 8px; border-radius: 4px;">\\(P = \\text{const}\\)</span>
                                </div>
                                <p style="margin: 0 0 10px 0; color: #94a3b8; font-size: 0.84rem; line-height: 1.4;">Constant pressure where \\(P_{\\mathrm{av}} = P\\) and \\(W = P_{\\mathrm{av}}\\Delta V\\):</p>
                                <div style="background: #060d17; border: 1px solid rgba(56, 189, 248, 0.45); border-radius: 8px; padding: 10px; text-align: center; color: #f0f9ff; margin-bottom: 10px;">
                                    \\[ W = P_{\\mathrm{av}}\\Delta V = P(V_f - V_i) \\]
                                    \\[ Q_p = \\Delta U + W = \\frac{3}{2}nR\\Delta T + P_{\\mathrm{av}}\\Delta V = \\frac{5}{2}nR\\Delta T = nC_p\\Delta T \\]
                                </div>
                            </div>
                            <div style="font-size: 0.8rem; color: #cbd5e1; line-height: 1.4; border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 8px;">
                                <i class="fa-solid fa-circle-check" style="color: #38bdf8; margin-right: 4px;"></i> Boundary work \\(W = P_{\\mathrm{av}}\\Delta V\\); heat transferred governed by molar heat capacity \\(C_p = \\frac{5}{2}R\\).
                            </div>
                        </div>

                        <!-- 2. Linear P-V Process -->
                        <div style="background: #0d223a; border: 1px solid rgba(56, 189, 248, 0.3); border-radius: 10px; padding: 16px; display: flex; flex-direction: column; justify-content: space-between;">
                            <div>
                                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                                    <h4 style="margin: 0; color: #38bdf8; font-size: 1.02rem; font-weight: 700;">2. Work Done in Linear P–V Process</h4>
                                    <span style="font-size: 0.75rem; background: rgba(56, 189, 248, 0.15); color: #38bdf8; padding: 2px 8px; border-radius: 4px;">Linear Path</span>
                                </div>
                                <p style="margin: 0 0 10px 0; color: #94a3b8; font-size: 0.84rem; line-height: 1.4;">Trapezoidal area under straight line on P-V plane:</p>
                                <div style="background: #060d17; border: 1px solid rgba(56, 189, 248, 0.45); border-radius: 8px; padding: 10px; text-align: center; color: #f0f9ff; margin-bottom: 10px;">
                                    \\[ W = P_{\\mathrm{av}}\\Delta V = \\left(\\frac{P_i + P_f}{2}\\right)(V_f - V_i) \\]
                                    \\[ Q = \\Delta U + W = \\frac{3}{2}nR\\Delta T + P_{\\mathrm{av}}\\Delta V \\]
                                </div>
                            </div>
                            <div style="font-size: 0.8rem; color: #cbd5e1; line-height: 1.4; border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 8px;">
                                <i class="fa-solid fa-circle-check" style="color: #38bdf8; margin-right: 4px;"></i> General First Law equation: work is evaluated with average pressure \\(P_{\\mathrm{av}} = \\frac{P_i+P_f}{2}\\).
                            </div>
                        </div>

                        <!-- 3. Isothermal Process -->
                        <div style="background: #0d223a; border: 1px solid rgba(0, 242, 254, 0.3); border-radius: 10px; padding: 16px; display: flex; flex-direction: column; justify-content: space-between;">
                            <div>
                                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                                    <h4 style="margin: 0; color: #00f2fe; font-size: 1.02rem; font-weight: 700;">3. Work Done in Isothermal Process</h4>
                                    <span style="font-size: 0.75rem; background: rgba(0, 242, 254, 0.15); color: #00f2fe; padding: 2px 8px; border-radius: 4px;">\\(\\Delta T = 0\\)</span>
                                </div>
                                <p style="margin: 0 0 10px 0; color: #94a3b8; font-size: 0.84rem; line-height: 1.4;">Constant temperature (ideal gas has \\(\\Delta U = 0\\), so \\(Q = W\\)):</p>
                                <div style="background: #060d17; border: 1px solid rgba(0, 242, 254, 0.45); border-radius: 8px; padding: 10px; text-align: center; color: #f0f9ff; margin-bottom: 10px;">
                                    \\[ Q = W = nRT\\ln\\left(\\frac{V_2}{V_1}\\right) = nRT\\ln\\left(\\frac{P_1}{P_2}\\right) \\]
                                </div>
                            </div>
                            <div style="font-size: 0.8rem; color: #cbd5e1; line-height: 1.4; border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 8px;">
                                <i class="fa-solid fa-circle-check" style="color: #00f2fe; margin-right: 4px;"></i> With \\(\\Delta U = 0\\), all heat added is completely transformed into mechanical work (\\(Q = W\\)).
                            </div>
                        </div>

                        <!-- 4. Isochoric Process (Immediately before Adiabatic) -->
                        <div style="background: #0d223a; border: 1px solid rgba(0, 242, 254, 0.3); border-radius: 10px; padding: 16px; display: flex; flex-direction: column; justify-content: space-between;">
                            <div>
                                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                                    <h4 style="margin: 0; color: #00f2fe; font-size: 1.02rem; font-weight: 700;">4. Work Done in Isochoric Process</h4>
                                    <span style="font-size: 0.75rem; background: rgba(0, 242, 254, 0.15); color: #00f2fe; padding: 2px 8px; border-radius: 4px;">\\(\\Delta V = 0\\)</span>
                                </div>
                                <p style="margin: 0 0 10px 0; color: #94a3b8; font-size: 0.84rem; line-height: 1.4;">Constant volume in rigid container; no boundary displacement (\\(W = 0\\)):</p>
                                <div style="background: #060d17; border: 1px solid rgba(0, 242, 254, 0.45); border-radius: 8px; padding: 10px; text-align: center; color: #f0f9ff; margin-bottom: 10px;">
                                    \\[ W = 0 \\quad (\\Delta V = 0) \\]
                                    \\[ Q_v = \\Delta U + W = \\frac{3}{2}nR\\Delta T = nC_v\\Delta T \\]
                                </div>
                            </div>
                            <div style="font-size: 0.8rem; color: #cbd5e1; line-height: 1.4; border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 8px;">
                                <i class="fa-solid fa-circle-check" style="color: #00f2fe; margin-right: 4px;"></i> Since volume is constant, \\(W = 0\\); all heat transferred directly changes internal energy (\\(Q_v = \\Delta U\\)).
                            </div>
                        </div>
                    </div>

                    <!-- 5. Adiabatic Process & Poisson's Laws (Featured Panel) -->
                    <div style="background: #0d223a; border: 1px solid rgba(0, 242, 254, 0.35); border-radius: 10px; padding: 18px;">
                        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px; margin-bottom: 10px; border-bottom: 1px solid rgba(255, 255, 255, 0.08); padding-bottom: 8px;">
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <span style="width: 8px; height: 8px; border-radius: 50%; background: #00f2fe;"></span>
                                <h4 style="margin: 0; color: #00f2fe; font-size: 1.05rem; font-weight: 700;">5. Work Done in Adiabatic Process</h4>
                            </div>
                            <span style="font-size: 0.8rem; background: rgba(0, 242, 254, 0.15); color: #00f2fe; padding: 3px 10px; border-radius: 999px; font-weight: 600;">\\(Q = 0 \\implies W = -\\Delta U\\)</span>
                        </div>
                        <p style="margin: 0 0 10px 0; color: #94a3b8; font-size: 0.85rem; line-height: 1.4;">Zero heat exchange with surroundings; work done by gas is powered strictly by internal thermal energy (expansion cools the gas, compression heats it):</p>
                        <div style="background: #060d17; border: 1px solid rgba(0, 242, 254, 0.45); border-radius: 8px; padding: 12px; text-align: center; color: #f0f9ff; margin-bottom: 14px;">
                            \\[ Q = 0, \\quad W = -\\Delta U = \\frac{nR}{\\gamma - 1}(T_1 - T_2) = \\frac{P_1V_1 - P_2V_2}{\\gamma - 1} \\]
                        </div>

                        <div style="border-top: 1px solid rgba(0, 242, 254, 0.2); padding-top: 12px;">
                            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
                                <i class="fa-solid fa-atom" style="color: #38bdf8;"></i>
                                <h5 style="margin: 0; color: #38bdf8; font-size: 0.95rem; font-weight: 700;">Adiabatic State Relationships (Poisson's Laws)</h5>
                            </div>
                            <p style="margin: 0 0 10px 0; color: #94a3b8; font-size: 0.83rem;">Connecting state variables 1 and 2 with heat capacity ratio \\(\\gamma = \\frac{C_p}{C_v}\\):</p>
                            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 10px;">
                                <div style="background: #060d17; border: 1px solid rgba(56, 189, 248, 0.35); border-radius: 8px; padding: 10px; text-align: center;">
                                    \\[ PV^\\gamma = \\text{constant} \\]
                                </div>
                                <div style="background: #060d17; border: 1px solid rgba(56, 189, 248, 0.35); border-radius: 8px; padding: 10px; text-align: center;">
                                    \\[ P_1V_1^\\gamma = P_2V_2^\\gamma \\]
                                </div>
                                <div style="background: #060d17; border: 1px solid rgba(56, 189, 248, 0.35); border-radius: 8px; padding: 10px; text-align: center;">
                                    \\[ T_1V_1^{\\gamma-1} = T_2V_2^{\\gamma-1} \\]
                                </div>
                                <div style="background: #060d17; border: 1px solid rgba(56, 189, 248, 0.35); border-radius: 8px; padding: 10px; text-align: center;">
                                    \\[ T_1^\\gamma P_1^{1-\\gamma} = T_2^\\gamma P_2^{1-\\gamma} \\]
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
            } else if (currentSection === "Conditions for Constructive and Destructive Interference") {
                sectionGraphic = `<div class="interference-panel" style="background: linear-gradient(135deg, #0b192c 0%, #0d1e36 100%); border: 1px solid rgba(0, 242, 254, 0.4); border-radius: 14px; padding: 22px; margin: 18px 0 25px 0; color: #f8fafc; box-shadow: 0 10px 25px -5px rgba(2, 6, 23, 0.5), 0 0 20px rgba(0, 242, 254, 0.15);">
                    <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; margin-bottom: 16px; border-bottom: 1px solid rgba(0, 242, 254, 0.25); padding-bottom: 12px;">
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <span style="display: inline-flex; align-items: center; justify-content: center; width: 34px; height: 34px; border-radius: 8px; background: rgba(0, 242, 254, 0.15); color: #00f2fe; font-size: 1.1rem;"><i class="fa-solid fa-water"></i></span>
                            <h3 style="margin: 0; color: #00f2fe; font-size: 1.25rem; font-weight: 700; letter-spacing: -0.01em;">Wave Interference: Superposition & Path Difference</h3>
                        </div>
                        <span style="background: rgba(0, 242, 254, 0.12); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.35); padding: 4px 12px; border-radius: 999px; font-size: 0.8rem; font-weight: 600;"><i class="fa-solid fa-wave-square" style="margin-right: 4px;"></i> Coherent Superposition • \\[A' = 2A\\left|\\cos\\left(\\frac{\\pi(d_2-d_1)}{\\lambda}\\right)\\right|\\]</span>
                    </div>

                    <p style="margin: 0 0 14px 0; color: #cbd5e1; font-size: 0.92rem; line-height: 1.6;">
                        When two coherent waves of identical frequency and equal amplitude \\(A\\) traverse distances \\(d_1\\) and \\(d_2\\) to superpose, the resultant amplitude depends on the path difference \\(\\Delta d = d_2 - d_1\\):
                    </p>

                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px;">
                        <!-- Constructive Interference -->
                        <div style="background: #0d223a; border: 1px solid rgba(74, 222, 128, 0.35); border-radius: 10px; padding: 16px; display: flex; flex-direction: column; justify-content: space-between;">
                            <div>
                                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                                    <h4 style="margin: 0; color: #4ade80; font-size: 1.05rem; font-weight: 700;"><i class="fa-solid fa-circle-plus" style="margin-right: 6px;"></i> Constructive Interference</h4>
                                    <span style="font-size: 0.75rem; background: rgba(74, 222, 128, 0.15); color: #4ade80; padding: 2px 8px; border-radius: 4px; font-weight: 600;">Max Amplitude</span>
                                </div>
                                <p style="margin: 0 0 10px 0; color: #94a3b8; font-size: 0.84rem; line-height: 1.45;">Waves arrive in phase (crest meets crest); displacements reinforce:</p>
                                <div style="background: #060d17; border: 1px solid rgba(74, 222, 128, 0.45); border-radius: 8px; padding: 12px; text-align: center; color: #f0f9ff; margin-bottom: 10px;">
                                    \\[ d_2 - d_1 = n\\lambda \\quad (n = 0, 1, 2, 3, \\dots) \\]
                                    \\[ A'_{\\max} = 2A \\quad \\left(\\cos = \\pm 1\\right) \\]
                                </div>
                            </div>
                            <div style="font-size: 0.8rem; color: #cbd5e1; line-height: 1.4; border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 8px;">
                                <i class="fa-solid fa-circle-check" style="color: #4ade80; margin-right: 4px;"></i> Maximum constructive amplitude \\(A'_{\\max} = 2A\\); \\(n = 0\\) is the zero path difference central locus.
                            </div>
                        </div>

                        <!-- Destructive Interference -->
                        <div style="background: #0d223a; border: 1px solid rgba(248, 113, 113, 0.35); border-radius: 10px; padding: 16px; display: flex; flex-direction: column; justify-content: space-between;">
                            <div>
                                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                                    <h4 style="margin: 0; color: #f87171; font-size: 1.05rem; font-weight: 700;"><i class="fa-solid fa-circle-minus" style="margin-right: 6px;"></i> Destructive Interference</h4>
                                    <span style="font-size: 0.75rem; background: rgba(248, 113, 113, 0.15); color: #f87171; padding: 2px 8px; border-radius: 4px; font-weight: 600;">Min Amplitude</span>
                                </div>
                                <p style="margin: 0 0 10px 0; color: #94a3b8; font-size: 0.84rem; line-height: 1.45;">Waves arrive out of phase by half a cycle (crest meets trough); displacements cancel:</p>
                                <div style="background: #060d17; border: 1px solid rgba(248, 113, 113, 0.45); border-radius: 8px; padding: 12px; text-align: center; color: #f0f9ff; margin-bottom: 10px;">
                                    \\[ d_2 - d_1 = \\frac{(2n + 1)\\lambda}{2} \\quad (n = 0, 1, 2, 3, \\dots) \\]
                                    \\[ A'_{\\min} = 0 \\quad \\left(\\cos = 0\\right) \\]
                                </div>
                            </div>
                            <div style="font-size: 0.8rem; color: #cbd5e1; line-height: 1.4; border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 8px;">
                                <i class="fa-solid fa-circle-check" style="color: #f87171; margin-right: 4px;"></i> Odd half-wavelength path differences produce complete cancellation (zero resultant amplitude).
                            </div>
                        </div>
                    </div>
                </div>`;
            } else if (currentSection === "Path Difference in Young's Double-Slit Experiment" || currentSection === "Bright and Dark Fringes in Interference Patterns") {
                sectionGraphic = `<div class="ydse-panel" style="background: linear-gradient(135deg, #0b192c 0%, #0d1e36 100%); border: 1px solid rgba(0, 242, 254, 0.4); border-radius: 14px; padding: 22px; margin: 18px 0 25px 0; color: #f8fafc; box-shadow: 0 10px 25px -5px rgba(2, 6, 23, 0.5), 0 0 20px rgba(0, 242, 254, 0.15);">
                    <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; margin-bottom: 16px; border-bottom: 1px solid rgba(0, 242, 254, 0.25); padding-bottom: 12px;">
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <span style="display: inline-flex; align-items: center; justify-content: center; width: 34px; height: 34px; border-radius: 8px; background: rgba(0, 242, 254, 0.15); color: #00f2fe; font-size: 1.1rem;"><i class="fa-solid fa-braille"></i></span>
                            <h3 style="margin: 0; color: #00f2fe; font-size: 1.25rem; font-weight: 700; letter-spacing: -0.01em;">Young's Double-Slit Experiment: Fringe Positions & Spacing</h3>
                        </div>
                        <span style="background: rgba(0, 242, 254, 0.12); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.35); padding: 4px 12px; border-radius: 999px; font-size: 0.8rem; font-weight: 600;"><i class="fa-solid fa-ruler-horizontal" style="margin-right: 4px;"></i> Slits \\(d\\) • Screen \\(L\\) • Small Angles \\(\\tan\\theta \\approx \\sin\\theta \\approx \\frac{y}{L}\\)</span>
                    </div>

                    <p style="margin: 0 0 14px 0; color: #cbd5e1; font-size: 0.92rem; line-height: 1.6;">
                        Light rays from two slits separated by \\(d\\) travel to distance \\(L\\). With path difference \\(\\Delta d = d\\sin\\theta\\) and small-angle geometry (\\(\\tan\\theta = \\frac{y}{L} \\approx \\sin\\theta\\)), fringe locations on the screen are given by:
                    </p>

                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin-bottom: 16px;">
                        <!-- Bright Fringes -->
                        <div style="background: #0d223a; border: 1px solid rgba(56, 189, 248, 0.3); border-radius: 10px; padding: 16px;">
                            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                                <h4 style="margin: 0; color: #38bdf8; font-size: 1.02rem; font-weight: 700;">Bright Fringes (Constructive)</h4>
                                <span style="font-size: 0.75rem; background: rgba(56, 189, 248, 0.15); color: #38bdf8; padding: 2px 8px; border-radius: 4px;">\\(d\\sin\\theta = m\\lambda\\)</span>
                            </div>
                            <div style="background: #060d17; border: 1px solid rgba(56, 189, 248, 0.45); border-radius: 8px; padding: 10px; text-align: center; color: #f0f9ff; margin-bottom: 10px;">
                                \\[ y_{\\text{bright}} = \\frac{m\\lambda L}{d} \\quad (m = 0, \\pm 1, \\pm 2, \\dots) \\]
                            </div>
                            <p style="margin: 0; color: #94a3b8; font-size: 0.82rem; line-height: 1.4;">
                                \\(m = 0\\) represents the central bright fringe (\\(y = 0\\)); \\(m = \\pm 1\\) are first-order bright fringes on opposite sides.
                            </p>
                        </div>

                        <!-- Dark Fringes -->
                        <div style="background: #0d223a; border: 1px solid rgba(56, 189, 248, 0.3); border-radius: 10px; padding: 16px;">
                            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                                <h4 style="margin: 0; color: #38bdf8; font-size: 1.02rem; font-weight: 700;">Dark Fringes (Destructive)</h4>
                                <span style="font-size: 0.75rem; background: rgba(56, 189, 248, 0.15); color: #38bdf8; padding: 2px 8px; border-radius: 4px;">\\(d\\sin\\theta = (m + \\frac{1}{2})\\lambda\\)</span>
                            </div>
                            <div style="background: #060d17; border: 1px solid rgba(56, 189, 248, 0.45); border-radius: 8px; padding: 10px; text-align: center; color: #f0f9ff; margin-bottom: 10px;">
                                \\[ y_{\\text{dark}} = \\frac{(m + 1/2)\\lambda L}{d} \\quad (m = 0, \\pm 1, \\pm 2, \\dots) \\]
                            </div>
                            <p style="margin: 0; color: #94a3b8; font-size: 0.82rem; line-height: 1.4;">
                                In the ideal Young's interference pattern, dark fringes occur exactly halfway between adjacent bright fringes.
                            </p>
                        </div>
                    </div>

                    <!-- Constant Fringe Spacing Banner -->
                    <div style="background: #0d223a; border: 1px solid rgba(0, 242, 254, 0.3); border-radius: 10px; padding: 12px 16px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
                        <div>
                            <strong style="color: #00f2fe; font-size: 0.95rem;">Constant Fringe Spacing (Fringe Width \\(\\Delta y\\)):</strong>
                            <span style="color: #94a3b8; font-size: 0.85rem; margin-left: 8px;">Distance between two consecutive bright or dark fringes:</span>
                        </div>
                        <div style="background: #060d17; border: 1px solid rgba(0, 242, 254, 0.45); border-radius: 6px; padding: 6px 14px; color: #f0f9ff; font-weight: 700;">
                            \\[ \\Delta y = y_{m+1} - y_m = \\frac{\\lambda L}{d} \\]
                        </div>
                    </div>
                </div>`;
            } else if (currentSection === "Light Diffraction") {
                sectionGraphic = `<div class="diffraction-panel" style="background: linear-gradient(135deg, #0b192c 0%, #0d1e36 100%); border: 1px solid rgba(0, 242, 254, 0.4); border-radius: 14px; padding: 22px; margin: 18px 0 25px 0; color: #f8fafc; box-shadow: 0 10px 25px -5px rgba(2, 6, 23, 0.5), 0 0 20px rgba(0, 242, 254, 0.15);">
                    <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; margin-bottom: 16px; border-bottom: 1px solid rgba(0, 242, 254, 0.25); padding-bottom: 12px;">
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <span style="display: inline-flex; align-items: center; justify-content: center; width: 34px; height: 34px; border-radius: 8px; background: rgba(0, 242, 254, 0.15); color: #00f2fe; font-size: 1.1rem;"><i class="fa-solid fa-expand"></i></span>
                            <h3 style="margin: 0; color: #00f2fe; font-size: 1.25rem; font-weight: 700; letter-spacing: -0.01em;">Light Diffraction: Single Slit Minima & Central Maximum</h3>
                        </div>
                        <span style="background: rgba(0, 242, 254, 0.12); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.35); padding: 4px 12px; border-radius: 999px; font-size: 0.8rem; font-weight: 600;"><i class="fa-solid fa-arrows-split-up-and-left" style="margin-right: 4px;"></i> Slit Width \\(a\\) • Minima \\(a\\sin\\theta = m\\lambda\\) (\\(m \\neq 0\\))</span>
                    </div>

                    <p style="margin: 0 0 14px 0; color: #cbd5e1; font-size: 0.92rem; line-height: 1.6;">
                        Light diffraction is the bending and spreading of light waves when encountering an obstacle or passing through a narrow aperture of width \\(a\\). It is most noticeable when the aperture width or obstacle dimensions are comparable to the wavelength (\\(a \\sim \\lambda\\)).
                    </p>

                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin-bottom: 16px;">
                        <!-- Single-Slit Dark Minima -->
                        <div style="background: #0d223a; border: 1px solid rgba(56, 189, 248, 0.3); border-radius: 10px; padding: 16px;">
                            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                                <h4 style="margin: 0; color: #38bdf8; font-size: 1.02rem; font-weight: 700;">Condition for Dark Minima</h4>
                                <span style="font-size: 0.75rem; background: rgba(239, 68, 68, 0.15); color: #f87171; padding: 2px 8px; border-radius: 4px; font-weight: 600;">\\(m = 0\\) Excluded</span>
                            </div>
                            <div style="background: #060d17; border: 1px solid rgba(56, 189, 248, 0.45); border-radius: 8px; padding: 10px; text-align: center; color: #f0f9ff; margin-bottom: 10px;">
                                \\[ a\\sin\\theta = m\\lambda \\implies y_{\\text{dark}} = \\frac{m\\lambda L}{a} \\quad (m = \\pm 1, \\pm 2, \\pm 3, \\dots) \\]
                            </div>
                            <p style="margin: 0; color: #94a3b8; font-size: 0.82rem; line-height: 1.4;">
                                \\(m = 0\\) is excluded because \\(\\theta = 0\\) corresponds to the central maximum, not a minimum. First dark fringes occur at \\(y = \\pm \\frac{\\lambda L}{a}\\).
                            </p>
                        </div>

                        <!-- Central Maximum Width -->
                        <div style="background: #0d223a; border: 1px solid rgba(0, 242, 254, 0.3); border-radius: 10px; padding: 16px;">
                            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                                <h4 style="margin: 0; color: #00f2fe; font-size: 1.02rem; font-weight: 700;">Central Maximum Width (\\(W\\))</h4>
                                <span style="font-size: 0.75rem; background: rgba(0, 242, 254, 0.15); color: #00f2fe; padding: 2px 8px; border-radius: 4px; font-weight: 600;">\\(W = 2y_1\\)</span>
                            </div>
                            <div style="background: #060d17; border: 1px solid rgba(0, 242, 254, 0.45); border-radius: 8px; padding: 10px; text-align: center; color: #f0f9ff; margin-bottom: 10px;">
                                \\[ W = 2y_1 = \\frac{2\\lambda L}{a} \\]
                            </div>
                            <p style="margin: 0; color: #94a3b8; font-size: 0.82rem; line-height: 1.4;">
                                The central diffraction maximum extends between first minima (\\(m = \\pm 1\\)), making it twice as wide as the distance from center to first minimum.
                            </p>
                        </div>
                    </div>

                    <!-- Notation Distinction Note -->
                    <div style="background: #0d223a; border: 1px solid rgba(245, 158, 11, 0.35); border-radius: 10px; padding: 12px 16px; font-size: 0.85rem; color: #cbd5e1; line-height: 1.5;">
                        <strong style="color: #fbbf24;"><i class="fa-solid fa-triangle-exclamation" style="margin-right: 6px;"></i> High-School Physics Notation Distinction:</strong>
                        In <strong>Interference</strong> (Young's Experiment), \(d\) represents the <em>separation between two slits</em>. In <strong>Diffraction</strong>, \(a\) represents the <em>width of a single slit</em>.
                    </div>
                </div>`;
            } else if (currentSection === "Electrical Resistance and Resistivity") {
                sectionGraphic = `<div class="semiconductor-panel" style="background: linear-gradient(135deg, #0b192c 0%, #0d1e36 100%); border: 1px solid rgba(0, 242, 254, 0.4); border-radius: 14px; padding: 22px; margin: 18px 0 25px 0; color: #f8fafc; box-shadow: 0 10px 25px -5px rgba(2, 6, 23, 0.5), 0 0 20px rgba(0, 242, 254, 0.15);">
                    <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; margin-bottom: 16px; border-bottom: 1px solid rgba(0, 242, 254, 0.25); padding-bottom: 12px;">
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <span style="display: inline-flex; align-items: center; justify-content: center; width: 34px; height: 34px; border-radius: 8px; background: rgba(0, 242, 254, 0.15); color: #00f2fe; font-size: 1.1rem;"><i class="fa-solid fa-bolt"></i></span>
                            <h3 style="margin: 0; color: #00f2fe; font-size: 1.25rem; font-weight: 700; letter-spacing: -0.01em;">Conductor Dimensions & Resistivity</h3>
                        </div>
                        <span style="background: rgba(0, 242, 254, 0.12); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.35); padding: 4px 12px; border-radius: 999px; font-size: 0.8rem; font-weight: 600;"><i class="fa-solid fa-ruler-combined" style="margin-right: 4px;"></i> Resistance \(R = \rho\frac{l}{A}\) • Resistivity \(\rho = \frac{RA}{l}\)</span>
                    </div>

                    <p style="margin: 0 0 14px 0; color: #cbd5e1; font-size: 0.92rem; line-height: 1.6;">
                        The electrical resistance of a uniform conductor is directly proportional to its length \(l\) and inversely proportional to its cross-sectional area \(A\). The constant of proportionality is the material's electrical resistivity \(\rho\):
                    </p>

                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin-bottom: 14px;">
                        <!-- Resistance Formula -->
                        <div style="background: #0d223a; border: 1px solid rgba(56, 189, 248, 0.3); border-radius: 10px; padding: 16px;">
                            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                                <h4 style="margin: 0; color: #38bdf8; font-size: 1.02rem; font-weight: 700;">Resistance Law</h4>
                                <span style="font-size: 0.75rem; background: rgba(56, 189, 248, 0.15); color: #38bdf8; padding: 2px 8px; border-radius: 4px;">Ohms (\(\Omega\))</span>
                            </div>
                            <div style="background: #060d17; border: 1px solid rgba(56, 189, 248, 0.45); border-radius: 8px; padding: 10px; text-align: center; color: #f0f9ff; margin-bottom: 10px;">
                                \[ R = \rho\frac{l}{A} \]
                            </div>
                            <p style="margin: 0; color: #94a3b8; font-size: 0.82rem; line-height: 1.4;">
                                Doubling the length doubles resistance; doubling the cross-sectional area halves resistance.
                            </p>
                        </div>

                        <!-- Resistivity Formula -->
                        <div style="background: #0d223a; border: 1px solid rgba(0, 242, 254, 0.3); border-radius: 10px; padding: 16px;">
                            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                                <h4 style="margin: 0; color: #00f2fe; font-size: 1.02rem; font-weight: 700;">Material Resistivity</h4>
                                <span style="font-size: 0.75rem; background: rgba(0, 242, 254, 0.15); color: #00f2fe; padding: 2px 8px; border-radius: 4px;">\(\Omega\cdot\text{m}\)</span>
                            </div>
                            <div style="background: #060d17; border: 1px solid rgba(0, 242, 254, 0.45); border-radius: 8px; padding: 10px; text-align: center; color: #f0f9ff; margin-bottom: 10px;">
                                \[ \rho = \frac{RA}{l} \]
                            </div>
                            <p style="margin: 0; color: #94a3b8; font-size: 0.82rem; line-height: 1.4;">
                                Intrinsic property of the conductor material dependent on atomic structure and temperature.
                            </p>
                        </div>
                    </div>
                </div>`;
            } else if (currentSection === "Transistors and Current Relationships" || currentSection === "P–N Junction and Diodes") {
                sectionGraphic = `<div class="semiconductor-panel" style="background: linear-gradient(135deg, #0b192c 0%, #0d1e36 100%); border: 1px solid rgba(0, 242, 254, 0.4); border-radius: 14px; padding: 22px; margin: 18px 0 25px 0; color: #f8fafc; box-shadow: 0 10px 25px -5px rgba(2, 6, 23, 0.5), 0 0 20px rgba(0, 242, 254, 0.15);">
                    <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; margin-bottom: 16px; border-bottom: 1px solid rgba(0, 242, 254, 0.25); padding-bottom: 12px;">
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <span style="display: inline-flex; align-items: center; justify-content: center; width: 34px; height: 34px; border-radius: 8px; background: rgba(0, 242, 254, 0.15); color: #00f2fe; font-size: 1.1rem;"><i class="fa-solid fa-microchip"></i></span>
                            <h3 style="margin: 0; color: #00f2fe; font-size: 1.25rem; font-weight: 700; letter-spacing: -0.01em;">P–N Junction Barriers & Bipolar Transistor Currents</h3>
                        </div>
                        <span style="background: rgba(0, 242, 254, 0.12); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.35); padding: 4px 12px; border-radius: 999px; font-size: 0.8rem; font-weight: 600;"><i class="fa-solid fa-diagram-project" style="margin-right: 4px;"></i> \(I_E = I_B + I_C\) • \(\beta = \frac{I_C}{I_B}\) • \(\alpha = \frac{I_C}{I_E}\)</span>
                    </div>

                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin-bottom: 14px;">
                        <!-- P-N Junction Barrier -->
                        <div style="background: #0d223a; border: 1px solid rgba(56, 189, 248, 0.3); border-radius: 10px; padding: 16px;">
                            <h4 style="margin: 0 0 10px 0; color: #38bdf8; font-size: 1.02rem; font-weight: 700;">Contact Potential Barriers</h4>
                            <div style="background: #060d17; border: 1px solid rgba(56, 189, 248, 0.45); border-radius: 8px; padding: 10px; text-align: center; color: #f0f9ff; margin-bottom: 10px;">
                                \[ V_{\text{Ge}} \approx 0.3\,\text{V} \qquad V_{\text{Si}} \approx 0.7\,\text{V} \]
                            </div>
                            <p style="margin: 0; color: #94a3b8; font-size: 0.82rem; line-height: 1.4;">
                                Forward bias narrows the depletion region causing rapid turn-on; reverse bias widens the barrier preventing current.
                            </p>
                        </div>

                        <!-- Current Relation & Gains -->
                        <div style="background: #0d223a; border: 1px solid rgba(0, 242, 254, 0.3); border-radius: 10px; padding: 16px;">
                            <h4 style="margin: 0 0 10px 0; color: #00f2fe; font-size: 1.02rem; font-weight: 700;">Transistor Current Law & Gains</h4>
                            <div style="background: #060d17; border: 1px solid rgba(0, 242, 254, 0.45); border-radius: 8px; padding: 10px; text-align: center; color: #f0f9ff; margin-bottom: 10px;">
                                \[ I_E = I_B + I_C \quad \left(\beta = \frac{I_C}{I_B}, \; \alpha = \frac{I_C}{I_E} = \frac{\beta}{\beta+1}\right) \]
                            </div>
                            <p style="margin: 0; color: #94a3b8; font-size: 0.82rem; line-height: 1.4;">
                                Because base is very thin and lightly doped, \(I_B \ll I_C\), producing high current gain (\(\beta = 20\text{--}500\)) while \(\alpha < 1\).
                            </p>
                        </div>
                    </div>
                </div>`;
            } else if (currentSection === "Speed of Light and Michelson–Morley Experiment" || currentSection === "Reference Frames and Galilean Transformation") {
                sectionGraphic = `<div class="relativity-panel" style="background: linear-gradient(135deg, #0b192c 0%, #0d1e36 100%); border: 1px solid rgba(0, 242, 254, 0.4); border-radius: 14px; padding: 22px; margin: 18px 0 25px 0; color: #f8fafc; box-shadow: 0 10px 25px -5px rgba(2, 6, 23, 0.5), 0 0 20px rgba(0, 242, 254, 0.15);">
                    <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; margin-bottom: 16px; border-bottom: 1px solid rgba(0, 242, 254, 0.25); padding-bottom: 12px;">
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <span style="display: inline-flex; align-items: center; justify-content: center; width: 34px; height: 34px; border-radius: 8px; background: rgba(0, 242, 254, 0.15); color: #00f2fe; font-size: 1.1rem;"><i class="fa-solid fa-compass"></i></span>
                            <h3 style="margin: 0; color: #00f2fe; font-size: 1.25rem; font-weight: 700; letter-spacing: -0.01em;">Michelson–Morley Interferometry & Constancy of Light</h3>
                        </div>
                        <span style="background: rgba(0, 242, 254, 0.12); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.35); padding: 4px 12px; border-radius: 999px; font-size: 0.8rem; font-weight: 600;"><i class="fa-solid fa-atom" style="margin-right: 4px;"></i> Null Result • \(\Delta N = \frac{Lv^2}{c^2\lambda}\) • Ether Disproved</span>
                    </div>

                    <p style="margin: 0 0 14px 0; color: #cbd5e1; font-size: 0.92rem; line-height: 1.6;">
                        The Michelson–Morley experiment compared round-trip light travel times along orthogonal arms of equal length \(L\) through the hypothesized luminiferous ether. The predicted fringe shift upon 90° rotation was:
                    </p>

                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin-bottom: 14px;">
                        <div style="background: #0d223a; border: 1px solid rgba(56, 189, 248, 0.3); border-radius: 10px; padding: 16px;">
                            <h4 style="margin: 0 0 8px 0; color: #38bdf8; font-size: 1.02rem; font-weight: 700;">Theoretical Round-Trip Times</h4>
                            <div style="background: #060d17; border: 1px solid rgba(56, 189, 248, 0.45); border-radius: 8px; padding: 10px; text-align: center; color: #f0f9ff; margin-bottom: 8px;">
                                \[ t_1 = \frac{2Lc}{c^2 - v^2}, \quad t_2 = \frac{2L}{\sqrt{c^2 - v^2}} \]
                            </div>
                            <p style="margin: 0; color: #94a3b8; font-size: 0.82rem; line-height: 1.4;">
                                Difference in transit time yields path difference \(\Delta x = c\Delta t \approx \frac{Lv^2}{c^2}\).
                            </p>
                        </div>

                        <div style="background: #0d223a; border: 1px solid rgba(0, 242, 254, 0.3); border-radius: 10px; padding: 16px;">
                            <h4 style="margin: 0 0 8px 0; color: #00f2fe; font-size: 1.02rem; font-weight: 700;">Expected Fringe Shift & Null Outcome</h4>
                            <div style="background: #060d17; border: 1px solid rgba(0, 242, 254, 0.45); border-radius: 8px; padding: 10px; text-align: center; color: #f0f9ff; margin-bottom: 8px;">
                                \[ \Delta N = \frac{Lv^2}{c^2\lambda} \quad (\text{Predicted } \approx 0.20 \implies \text{Observed } \approx 0) \]
                            </div>
                            <p style="margin: 0; color: #94a3b8; font-size: 0.82rem; line-height: 1.4;">
                                No fringe displacement was observed, proving no ether wind exists and light speed \(c\) is identical in all inertial frames.
                            </p>
                        </div>
                    </div>
                </div>`;
            } else if (currentSection === "Lorentz Transformation" || currentSection === "Relativistic Velocity Transformation" || currentSection === "Einstein's Postulates of Special Relativity") {
                sectionGraphic = `<div class="relativity-panel" style="background: linear-gradient(135deg, #0b192c 0%, #0d1e36 100%); border: 1px solid rgba(0, 242, 254, 0.4); border-radius: 14px; padding: 22px; margin: 18px 0 25px 0; color: #f8fafc; box-shadow: 0 10px 25px -5px rgba(2, 6, 23, 0.5), 0 0 20px rgba(0, 242, 254, 0.15);">
                    <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; margin-bottom: 16px; border-bottom: 1px solid rgba(0, 242, 254, 0.25); padding-bottom: 12px;">
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <span style="display: inline-flex; align-items: center; justify-content: center; width: 34px; height: 34px; border-radius: 8px; background: rgba(0, 242, 254, 0.15); color: #00f2fe; font-size: 1.1rem;"><i class="fa-solid fa-clock-rotate-left"></i></span>
                            <h3 style="margin: 0; color: #00f2fe; font-size: 1.25rem; font-weight: 700; letter-spacing: -0.01em;">Lorentz Spacetime & Relativistic Velocity Addition</h3>
                        </div>
                        <span style="background: rgba(0, 242, 254, 0.12); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.35); padding: 4px 12px; border-radius: 999px; font-size: 0.8rem; font-weight: 600;"><i class="fa-solid fa-gauge-high" style="margin-right: 4px;"></i> \(\gamma = \frac{1}{\sqrt{1-u^2/c^2}}\) • Collinear \(v = \frac{v' + u}{1 + uv'/c^2}\)</span>
                    </div>

                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px;">
                        <!-- Lorentz Transformation -->
                        <div style="background: #0d223a; border: 1px solid rgba(56, 189, 248, 0.3); border-radius: 10px; padding: 16px;">
                            <h4 style="margin: 0 0 8px 0; color: #38bdf8; font-size: 1.02rem; font-weight: 700;">Lorentz Spacetime Equations</h4>
                            <div style="background: #060d17; border: 1px solid rgba(56, 189, 248, 0.45); border-radius: 8px; padding: 10px; text-align: center; color: #f0f9ff; margin-bottom: 8px;">
                                \[ x' = \gamma(x - ut), \qquad t' = \gamma\left(t - \frac{ux}{c^2}\right) \]
                            </div>
                            <p style="margin: 0; color: #94a3b8; font-size: 0.82rem; line-height: 1.4;">
                                As frame velocity \(u \to c\), \(\gamma \to \infty\). When \(u \ll c\), \(\gamma \approx 1\) and classical Galilean mechanics is recovered.
                            </p>
                        </div>

                        <!-- Velocity Addition -->
                        <div style="background: #0d223a; border: 1px solid rgba(0, 242, 254, 0.3); border-radius: 10px; padding: 16px;">
                            <h4 style="margin: 0 0 8px 0; color: #00f2fe; font-size: 1.02rem; font-weight: 700;">Relativistic Velocity Composition</h4>
                            <div style="background: #060d17; border: 1px solid rgba(0, 242, 254, 0.45); border-radius: 8px; padding: 10px; text-align: center; color: #f0f9ff; margin-bottom: 8px;">
                                \[ v = \frac{v' + u}{1 + \frac{uv'}{c^2}} \qquad v'_x = \frac{v_x - u}{1 - \frac{uv_x}{c^2}} \]
                            </div>
                            <p style="margin: 0; color: #94a3b8; font-size: 0.82rem; line-height: 1.4;">
                                Even when two objects approach each other at near-light speeds, their relative speed strictly satisfies \(v < c\). If \(v'=c\), then \(v=c\).
                            </p>
                        </div>
                    </div>
                </div>`;
            }
            eqHTML += `<div class="equation-section-title" style="grid-column: 1 / -1; margin-top: 2rem; margin-bottom: 0.5rem; border-bottom: 2px solid var(--cyan); padding-bottom: 0.5rem;"><h2 style="color: var(--primary-blue); font-size: 1.5rem;"><i class="fa-solid fa-layer-group"></i> ${currentSection}</h2></div>`;
        }
        
        let tableRows = '';
        let rawSearchTokens = [eq.name || '', eq.section || '', eq.explanation || ''];

        if (eq.variables && eq.variables.length > 0) {
            eq.variables.forEach(v => {
                const sSym = v.symbol || '';
                const sRep = v.rep || '';
                const sUnit = v.unit || '';
                const sUSym = v.unitSym || '';
                rawSearchTokens.push(sSym, sRep, sUnit, sUSym);

                const uSymDisplay = (sUSym === 'No SI unit' || sUSym === 'No unit' || !sUSym)
                    ? '<span class="unit-none">No SI unit</span>'
                    : ((sUSym.startsWith('\\(') && sUSym.endsWith('\\)')) || (sUSym.startsWith('\\[') && sUSym.endsWith('\\]')))
                    ? sUSym
                    : `\\(${sUSym.startsWith('\\') ? sUSym : '\\mathrm{' + sUSym + '}'}\\)`;

                const symDisplay = ((sSym.startsWith('\\(') && sSym.endsWith('\\)')) || (sSym.startsWith('\\[') && sSym.endsWith('\\]')))
                    ? sSym
                    : `\\(${sSym}\\)`;

                tableRows += `<tr>
                    <td class="col-sym">${symDisplay}</td>
                    <td class="col-rep">${sRep}</td>
                    <td class="col-unit">${sUnit}</td>
                    <td class="col-usym">${uSymDisplay}</td>
                </tr>`;
            });
        } else if (eq.symbols && eq.symbols.length > 0) {
            eq.symbols.forEach(s => {
                let desc = (s && s.desc) ? String(s.desc) : (typeof s === 'string' ? s : '');
                let rawSym = (s && s.symbol) ? String(s.symbol) : '';
                rawSearchTokens.push(rawSym, desc);
                let match = desc ? desc.match(/ \(([^)]+)\)$/) : null;
                let unitName = match ? match[1] : 'No SI unit';
                let cleanDesc = match ? desc.substring(0, match.index).trim() : desc;

                let sym = rawSym.replace(/μ_0/g, '\\mu_0')
                                .replace(/θ_c/g, '\\theta_c')
                                .replace(/θ/g, '\\theta')
                                .replace(/α/g, '\\alpha')
                                .replace(/β/g, '\\beta')
                                .replace(/γ/g, '\\gamma')
                                .replace(/λ/g, '\\lambda')
                                .replace(/ω/g, '\\omega')
                                .replace(/φ_0/g, '\\phi_0')
                                .replace(/φ/g, '\\phi');

                let unitDisplay = unitName;
                if (unitName !== "No SI unit" && unitName !== "No unit") {
                    let formattedUnit = unitName.replace(/m³/g, 'm^3')
                                                .replace(/m²/g, 'm^2')
                                                .replace(/⁻⁷/g, '^{-7}')
                                                .replace(/⁻¹/g, '^{-1}')
                                                .replace(/·/g, '\\cdot ')
                                                .replace(/π/g, '\\pi ')
                                                .replace(/×/g, '\\times ');
                    unitDisplay = `\\(\\mathrm{${formattedUnit}}\\)`;
                } else {
                    unitDisplay = '<span class="unit-none">No SI unit</span>';
                }

                tableRows += `<tr>
                    <td class="col-sym">\\(${sym}\\)</td>
                    <td class="col-rep">${cleanDesc}</td>
                    <td class="col-unit">${unitName}</td>
                    <td class="col-usym">${unitDisplay}</td>
                </tr>`;
            });
        }

        const tableHtml = tableRows ? `
        <div class="eq-table-wrapper">
            <table class="eq-vars-table">
                <thead>
                    <tr>
                        <th style="width: 14%;">Symbol</th>
                        <th style="width: 44%;">Representation</th>
                        <th style="width: 24%;">SI Unit</th>
                        <th style="width: 18%;">SI Unit Symbol</th>
                    </tr>
                </thead>
                <tbody>
                    ${tableRows}
                </tbody>
            </table>
        </div>` : '';

        const pageBadge = eq.pdfPage 
            ? `<span class="eq-page-pill"><i class="fa-solid fa-file-pdf"></i> PDF Page ${eq.pdfPage}</span>`
            : '';

        let figObj = null;
        if (typeof eq.figure === 'object' && eq.figure !== null) {
            figObj = Object.assign({}, eq.figure);
            if (!figObj.svgKey && window.getFigureSvgKey) {
                figObj.svgKey = window.getFigureSvgKey(eq, figObj);
            }
        } else if (typeof eq.figure === 'string' && eq.figure) {
            const svgData = (window.PHYSICS_FIGURES && window.PHYSICS_FIGURES[eq.figure]) ? window.PHYSICS_FIGURES[eq.figure] : null;
            if (svgData) {
                figObj = {
                    svgKey: eq.figure,
                    title: svgData.title || eq.name || 'Scientific Diagram',
                    caption: svgData.caption || '',
                    svg: svgData.svg
                };
            }
        }

        if (figObj) {
            if (figObj.title) rawSearchTokens.push(figObj.title);
            if (figObj.caption) rawSearchTokens.push(figObj.caption);
        }

        const safeFormulaAttr = (eq.formula || '').replace(/"/g, '&quot;').replace(/\\/g, '\\\\');
        const searchFilterText = rawSearchTokens.join(' ').toLowerCase().replace(/"/g, '&quot;');

        if (!window.getFigureSvgKey) {
            window.getFigureSvgKey = function(eq, figObj) {
                if (figObj && figObj.svgKey) return figObj.svgKey;
                if (typeof eq.figure === 'string' && eq.figure) return eq.figure;
                var n = (eq.name || '').toLowerCase();
                var s = (eq.section || '').toLowerCase();
                var f = (eq.formula || '').toLowerCase();
                if (n.includes('same direction')) return 'g9_l1_collinear_same';
                if (n.includes('opposite direction')) return 'g9_l1_collinear_opp';
                if (n.includes('90°') || (n.includes('perpendicular') && s.includes('resultant'))) return 'g9_l1_perpendicular';
                if (n.includes('parallelogram') || f.includes('2ab \\cos \\alpha') || f.includes('2ab\\cos\\alpha')) return 'g9_l1_parallelogram';
                if (n.includes('direction of a resultant')) return 'g9_l1_trig_triangle';
                if (n.includes('horizontal component')) return 'g9_l1_resolve_forces';
                if (n.includes('vertical component')) return 'g9_l1_resolve_forces';
                if (n.includes('moment of a force (torque)')) return 'g9_l1_moment_wrench';
                if (n.includes('principle of moments') || n.includes('net moment')) return 'g9_l1_seesaw_equilibrium';
                if (n.includes('parallel support forces') || n.includes('beam')) return 'g9_l1_parallel_beam';
                if (n.includes('velocity ratio')) return 'g9_l2_lever';
                if (n.includes('machine efficiency')) return 'g9_l2_lever';
                if (n.includes('mechanical advantage of a lever')) return 'g9_l2_lever';
                if (n.includes('inclined plane')) return 'g9_l2_inclined_plane';
                if (n.includes('pulley')) return 'g9_l2_pulley_system';
                if (n.includes('gears')) return 'g9_l2_gears';
                if (n.includes('belt and pulley') || n.includes('belt system')) return 'g9_l2_belt_system';
                if (n.includes('wheel and axle')) return 'g9_l2_wheel_axle';
                if (n.includes('electrical power') || n.includes('total electrical energy')) return 'g9_l3_ohms_law';
                if (n.includes('heat energy') || n.includes('joule heating') || n.includes('energy distribution')) return 'g9_l3_joule_calorimeter';
                if (n.includes('cost of electricity')) return 'g9_l3_ohms_law';
                if (n.includes('straight wire')) return 'g9_l4_straight_wire';
                if (n.includes('solenoid')) return 'g9_l4_solenoid';
                if (n.includes('laplace force')) return 'g9_l4_laplace_force';
                if (n.includes('transformer') || n.includes('power loss')) return 'g9_l4_transformer';
                if (n.includes('reflection')) return 'g9_l5_reflection';
                if (n.includes('snell') || n.includes('refractive index')) return 'g9_l5_refraction_snell';
                if (n.includes('apparent depth') || n.includes('critical angle')) return 'g9_l5_apparent_depth';
                if (n.includes('pinhole') || n.includes('lens') || n.includes('magnification')) return 'g9_l5_convex_lens';
                return '';
            };
        }

        if (!window.resolveFigureFallback) {
            window.resolveFigureFallback = function(img, explicitSvgKey) {
                if (!img) return;

                if (!img.dataset.fbAttempts) {
                    var rawSrc = img.getAttribute('src') || '';
                    var fileName = rawSrc.split('/').pop().split('?')[0];
                    var extMatch = fileName.match(/\.([a-zA-Z0-9]+)$/);
                    var ext = extMatch ? extMatch[1] : 'png';
                    var base = extMatch ? fileName.slice(0, -extMatch[0].length) : fileName;
                    
                    var isGrade9 = rawSrc.includes('image_G9') || rawSrc.includes('g9-') || base.startsWith('g9-');
                    var isSemester2 = rawSrc.includes('_two') || base.includes('ch4') || base.includes('ch5');

                    var baseVariants = [base];
                    if (isGrade9) {
                        var withoutG9 = base.replace(/^g9-/, '');
                        baseVariants.push(withoutG9); // e.g. ch1-eq1
                        baseVariants.push(withoutG9.replace(/-/g, '_')); // e.g. ch1_eq1
                        var matchChEq = withoutG9.match(/^ch(\d+)-eq(\d+)$/);
                        if (matchChEq) {
                            var chNum = matchChEq[1];
                            var eqNum = matchChEq[2];
                            var eqNumPadded = eqNum.length === 1 ? ('0' + eqNum) : eqNum;
                            baseVariants.push('ch' + chNum + '_' + eqNum);
                            baseVariants.push('ch' + chNum + '-' + eqNum);
                            baseVariants.push('eq' + eqNum);
                            baseVariants.push('eq_' + eqNum);
                            baseVariants.push('eq-' + eqNum);
                            baseVariants.push(eqNum);
                            baseVariants.push(eqNumPadded);
                            baseVariants.push('point' + eqNum);
                            baseVariants.push('point ' + eqNum);
                            baseVariants.push('Point' + eqNum);
                            baseVariants.push('Point ' + eqNum);
                            baseVariants.push('main point ' + eqNum);
                            baseVariants.push('main point' + eqNum);
                            baseVariants.push('Main Point ' + eqNum);
                            baseVariants.push('figure' + eqNum);
                            baseVariants.push('Figure' + eqNum);
                            baseVariants.push('fig' + eqNum);
                            baseVariants.push('Fig' + eqNum);
                            baseVariants.push('Slide' + eqNum);
                            baseVariants.push('slide' + eqNum);
                            baseVariants.push('Picture' + eqNum);
                            baseVariants.push('picture' + eqNum);
                        }
                    } else {
                        // Grade 12 variants
                        var matchChEq12 = base.match(/^ch(\d+)-l(\d+)-eq(\d+)$/);
                        if (matchChEq12) {
                            baseVariants.push('ch' + matchChEq12[1] + '-eq' + matchChEq12[3]);
                            baseVariants.push('ch' + matchChEq12[1] + '_eq' + matchChEq12[3]);
                        }
                    }

                    var extVariants = ['png.jpg', 'jpg', 'png', 'PNG', 'JPG', 'jpeg', 'webp', ext].filter(function(v, i, a) { return a.indexOf(v) === i; });
                    
                    // STRICT FOLDER PARTITIONING: Never cross-pollinate Grade 9 and Grade 12 folders!
                    var folders = [];
                    if (isGrade9) {
                        folders = isSemester2 ? ['image_G9_two', 'image_G9_one', 'image_G9'] : ['image_G9_one', 'image_G9_two', 'image_G9'];
                    } else {
                        folders = isSemester2 ? ['image_G12_two', 'image_G12_one', 'images - Copy', 'images'] : ['image_G12_one', 'image_G12_two', 'images - Copy', 'images'];
                    }

                    var attempts = [];
                    for (var f = 0; f < folders.length; f++) {
                        for (var b = 0; b < baseVariants.length; b++) {
                            for (var e = 0; e < extVariants.length; e++) {
                                var candidate = folders[f] + '/' + baseVariants[b] + '.' + extVariants[e];
                                if (candidate !== rawSrc && attempts.indexOf(candidate) === -1) {
                                    attempts.push(candidate);
                                }
                            }
                        }
                    }
                    img.dataset.fbAttempts = JSON.stringify(attempts);
                    img.dataset.fbIndex = '0';
                    img.dataset.origSrc = rawSrc;
                    img.dataset.isG9 = isGrade9 ? 'true' : 'false';
                }

                var attemptsList = [];
                try {
                    attemptsList = JSON.parse(img.dataset.fbAttempts || '[]');
                } catch(e) {
                    attemptsList = [];
                }
                var currentIdx = parseInt(img.dataset.fbIndex || '0', 10);

                if (currentIdx < attemptsList.length) {
                    var nextSrc = attemptsList[currentIdx];
                    img.dataset.fbIndex = String(currentIdx + 1);
                    img.src = nextSrc;
                    return;
                }

                // If all authentic image search candidates fail:
                var container = img.closest('.eq-figure-img-container');
                var origSrc = img.dataset.origSrc || img.getAttribute('src') || '';
                var isG9 = img.dataset.isG9 === 'true';
                if (container) {
                    if (isG9) {
                        container.innerHTML = `
                            <div style="padding: 16px 12px; text-align: center; color: #b45309; font-size: 0.85rem; background: #fffbeb; border-radius: 8px; border: 1.5px dashed #f59e0b; width: 100%;">
                                <i class="fa-solid fa-triangle-exclamation" style="font-size: 1.8rem; color: #d97706; display: block; margin-bottom: 8px;"></i>
                                <div style="font-weight: 700; color: #92400e; margin-bottom: 4px;">Grade 9 Authentic Figure Pending</div>
                                <div style="font-size: 0.82rem; color: #78350f;">Target path: <code style="background: #fef3c7; padding: 2px 6px; border-radius: 4px; font-size: 0.78rem;">${origSrc}</code></div>
                                <div style="font-size: 0.78rem; color: #a16207; margin-top: 4px;">Strictly looking inside Grade 9 folders (<code style="background: #fef3c7; padding: 2px 5px; border-radius: 3px;">image_G9_one/</code>, <code style="background: #fef3c7; padding: 2px 5px; border-radius: 3px;">image_G9_two/</code>). Grade 12 figures are blocked.</div>
                            </div>
                        `;
                    } else {
                        container.innerHTML = `
                            <div style="padding: 16px 12px; text-align: center; color: #64748b; font-size: 0.85rem; background: #f8fafc; border-radius: 8px; border: 1.5px dashed #cbd5e1; width: 100%;">
                                <i class="fa-regular fa-image" style="font-size: 1.8rem; color: #94a3b8; display: block; margin-bottom: 8px;"></i>
                                <div style="font-weight: 600; color: #334155; margin-bottom: 4px;">Grade 12 Image Pending Connection</div>
                                <div style="font-size: 0.8rem; color: #64748b;">Target path: <code style="background: #e2e8f0; padding: 2px 6px; border-radius: 4px; font-size: 0.78rem;">${origSrc}</code></div>
                            </div>
                        `;
                    }
                }
            };
        }

        let figureHtml = '';
        if (figObj) {
            if (figObj.img) {
                const svgKeyAttr = figObj.svgKey ? `data-svg-key="${figObj.svgKey}"` : '';
                figureHtml = `
                <div class="eq-figure-card" ${svgKeyAttr}>
                    <div class="eq-figure-header">
                        <span class="eq-figure-badge"><i class="fa-solid fa-diagram-project"></i> Diagram</span>
                        <span class="eq-figure-title">${figObj.title || 'Scientific Diagram'}</span>
                    </div>
                    <div class="eq-figure-img-container">
                        <img src="${figObj.img}" alt="${figObj.title || 'Diagram'}" class="eq-figure-img" ${svgKeyAttr} onerror="window.resolveFigureFallback(this, '${figObj.svgKey || ''}')">
                    </div>
                    ${figObj.caption ? `<div class="eq-figure-caption"><i class="fa-solid fa-circle-info"></i> <div><strong>Visual Analysis:</strong> ${figObj.caption}</div></div>` : ''}
                </div>
                `;
            } else if (figObj.svg) {
                figureHtml = `
                <div class="eq-figure-card" ${figObj.svgKey ? `data-svg-key="${figObj.svgKey}"` : ''}>
                    <div class="eq-figure-header">
                        <span class="eq-figure-badge"><i class="fa-solid fa-vector-square"></i> Vector Diagram</span>
                        <span class="eq-figure-title">${figObj.title || 'Scientific Diagram'}</span>
                    </div>
                    <div class="eq-figure-svg-container">
                        ${figObj.svg}
                    </div>
                    ${figObj.caption ? `<div class="eq-figure-caption"><i class="fa-solid fa-circle-info"></i> <div><strong>Visual Analysis:</strong> ${figObj.caption}</div></div>` : ''}
                </div>
                `;
            }
        }

        eqHTML += `
        <div class="equation-card" data-eq-search="${searchFilterText}">
            <div class="eq-card-header">
                <div class="eq-name">${eq.name || 'Formula'}</div>
                <div class="eq-header-actions">
                    ${pageBadge}
                    <button class="eq-copy-btn" type="button" onclick="copyEqLatex(this, '${safeFormulaAttr}')" title="Copy LaTeX formula">
                        <i class="fa-regular fa-copy"></i> <span>Copy LaTeX</span>
                    </button>
                </div>
            </div>
            <div class="eq-formula">${formatMathField(eq.formula || '')}</div>
            ${tableHtml}
            ${figureHtml}
            ${eq.explanation ? `<div class="eq-explanation"><i class="fa-solid fa-circle-info"></i> <div><strong>Explanation:</strong> ${eq.explanation}</div></div>` : ''}
            ${eq.conditions ? `<div class="eq-conditions"><i class="fa-solid fa-triangle-exclamation"></i> <div><strong>Conditions & Assumptions:</strong> ${eq.conditions}</div></div>` : ''}
        </div>
        `;
    });
    equationsGrid.innerHTML = eqHTML;

    const statsBadge = document.getElementById('eq-stats-count');
    if (statsBadge) {
        statsBadge.innerText = (lesson.equations ? lesson.equations.length : 0) + ' Formulas';
    }
    const searchInput = document.getElementById('eq-search-input');
    if (searchInput) searchInput.value = '';

    currentFlashcardIndex = 0;
    const hasFlashcards = Boolean(lesson.flashcards && lesson.flashcards.length > 0);
    const fcTabBtn = document.querySelector('.tab-btn[data-target="flashcards"]');
    if (fcTabBtn) {
        if(hasFlashcards) fcTabBtn.classList.remove('hidden');
        else fcTabBtn.classList.add('hidden');
    }
    
    const hasQuiz = Boolean(lesson.quiz && lesson.quiz.length > 0);
    const quizTabBtn = document.querySelector('.tab-btn[data-target="quiz"]');
    if (quizTabBtn) {
        if(hasQuiz) quizTabBtn.classList.remove('hidden');
        else quizTabBtn.classList.add('hidden');
    }

    showView(viewLessonDetail);

    // Pre-populate and hydrate all tabs immediately
    currentFlashcardIndex = 0;
    if (typeof updateFlashcard === 'function') updateFlashcard();
    if (typeof initQuiz === 'function') initQuiz();
    if (typeof renderEbook === 'function') renderEbook(lesson);
    if (typeof renderWorksheet === 'function') renderWorksheet(lesson);
    if (typeof renderGame === 'function') renderGame(lesson);

    renderedTabsInCurrentLesson.clear();
    renderedTabsInCurrentLesson.add('flashcards');
    renderedTabsInCurrentLesson.add('quiz');
    renderedTabsInCurrentLesson.add('ebook');
    renderedTabsInCurrentLesson.add('worksheet');
    renderedTabsInCurrentLesson.add('game');
    
    const hasSummaryContent = (lesson.concepts || []).length > 0 || 
                              (lesson.definitions || []).length > 0 || 
                              (lesson.examples || []).length > 0 || 
                              Boolean(lesson.gifUrl);
    switchTab(hasSummaryContent ? 'summary' : 'equations');
}

// --- Ebook Render Function ---
let currentPdfSession = null;

function cleanupCurrentPdfSession() {
    if (currentPdfSession) {
        if (currentPdfSession.observer) {
            try { currentPdfSession.observer.disconnect(); } catch (e) {}
        }
        if (currentPdfSession.activeTasks) {
            Object.values(currentPdfSession.activeTasks).forEach(t => {
                try { t.cancel(); } catch (e) {}
            });
        }
        if (currentPdfSession.pdfDoc) {
            try { currentPdfSession.pdfDoc.destroy(); } catch (e) {}
        }
        if (typeof currentPdfSession.cleanup === 'function') {
            try { currentPdfSession.cleanup(); } catch (e) {}
        }
        currentPdfSession = null;
    }
}

function resolveAppEbookCandidates(item) {
    let primary = (item && item.url) ? item.url : '';
    let alt = (item && item.altUrl) ? item.altUrl : '';
    if (!alt && primary) {
        if (primary.toLowerCase().endsWith('.pdf.pdf')) {
            alt = primary.slice(0, -4);
        } else if (primary.toLowerCase().endsWith('.pdf')) {
            alt = primary + '.pdf';
        } else {
            alt = primary + '.pdf';
        }
    }
    return { primary, alt };
}

function renderEbook(lesson) {
    const ebookContainer = document.getElementById('lesson-ebook');
    if (!ebookContainer || !lesson) return;

    let ebooksList = [];
    if (lesson.ebooks && Array.isArray(lesson.ebooks) && lesson.ebooks.length > 0) {
        ebooksList = lesson.ebooks.map(e => (typeof e === 'string' ? { title: 'Lesson E-Book', url: e } : e));
    } else if (lesson.ebookUrl) {
        ebooksList = [{ title: lesson.title || 'Lesson E-Book', url: lesson.ebookUrl }];
    } else if (lesson.id) {
        const lid = lesson.id.toLowerCase();
        const fallbackMap = {
            'g9-l1': [{ title: "Chapter 1: Turning Effect of Force (pp. 1–12)", url: "ebooks/g9-ch1-ebook.pdf.pdf", altUrl: "ebooks/g9-ch1-ebook.pdf" }],
            'g9-l2': [
                { title: "1. Levers (pp. 13–19)", url: "ebooks/g9-ch2-1-levers.pdf.pdf", altUrl: "ebooks/g9-ch2-1-levers.pdf" },
                { title: "2. Inclined Plane (pp. 20–22)", url: "ebooks/g9-ch2-2-incline.pdf.pdf", altUrl: "ebooks/g9-ch2-2-incline.pdf" },
                { title: "3. Pulleys (pp. 23–26)", url: "ebooks/g9-ch2-3-pulley.pdf.pdf", altUrl: "ebooks/g9-ch2-3-pulley.pdf" },
                { title: "4. Gears & Belts (pp. 27–29)", url: "ebooks/g9-ch2-4-gears.pdf.pdf", altUrl: "ebooks/g9-ch2-4-gears.pdf" },
                { title: "5. Wheel & Axle (p. 30)", url: "ebooks/g9-ch2-5-wheel-axle.pdf.pdf", altUrl: "ebooks/g9-ch2-5-wheel-axle.pdf" }
            ],
            'g9-l3': [
                { title: "Part 1: Electric Energy (pp. 31–38)", url: "ebooks/g9-ch3-part1.pdf.pdf", altUrl: "ebooks/g9-ch3-part1.pdf" },
                { title: "Part 2: Household Wiring Systems (pp. 39–47)", url: "ebooks/g9-ch3-part2.pdf.pdf", altUrl: "ebooks/g9-ch3-part2.pdf" }
            ],
            'g9-l4': [
                { title: "Part 1: Magnetic Field (pp. 48–54)", url: "ebooks/g9-ch4-part1.pdf.pdf", altUrl: "ebooks/g9-ch4-part1.pdf" },
                { title: "Part 2: Magnetic Force & Transformers (pp. 55–65)", url: "ebooks/g9-ch4-part2.pdf.pdf", altUrl: "ebooks/g9-ch4-part2.pdf" }
            ],
            'g9-l5': [
                { title: "1. Light Ray (pp. 66–68)", url: "ebooks/g9-ch5-1-light-ray.pdf.pdf", altUrl: "ebooks/g9-ch5-1-light-ray.pdf" },
                { title: "2. Reflection of Light (pp. 69–71)", url: "ebooks/g9-ch5-2-reflection.pdf.pdf", altUrl: "ebooks/g9-ch5-2-reflection.pdf" },
                { title: "3. Mirrors (pp. 72–79)", url: "ebooks/g9-ch5-3-mirrors.pdf.pdf", altUrl: "ebooks/g9-ch5-3-mirrors.pdf" },
                { title: "4. Refraction of Light (pp. 80–85)", url: "ebooks/g9-ch5-4-refraction.pdf.pdf", altUrl: "ebooks/g9-ch5-4-refraction.pdf" },
                { title: "5. Lenses (pp. 86–97)", url: "ebooks/g9-ch5-5-lenses.pdf.pdf", altUrl: "ebooks/g9-ch5-5-lenses.pdf" }
            ],
            'g12-l1': [{ title: "Thermal Physics (pp. 1–18)", url: "ebooks/g12-ch1-l1-ebook.pdf.pdf", altUrl: "ebooks/g12-ch1-l1-ebook.pdf" }],
            'g12-l2': [{ title: "The Laws of Thermodynamics (pp. 19–48)", url: "ebooks/g12-ch1-l2-ebook.pdf.pdf", altUrl: "ebooks/g12-ch1-l2-ebook.pdf" }],
            'g12-l3': [{ title: "Thermodynamics & Heat Engines (pp. 19–48)", url: "ebooks/g12-ch1-l3-ebook.pdf.pdf", altUrl: "ebooks/g12-ch1-l3-ebook.pdf" }],
            'g12-l4': [{ title: "Superposition & Standing Waves (pp. 49–63)", url: "ebooks/g12-ch2-l1-ebook.pdf.pdf", altUrl: "ebooks/g12-ch2-l1-ebook.pdf" }],
            'g12-interf': [{ title: "Interference & Diffraction of Light (pp. 64–78)", url: "ebooks/g12-ch2-l2-ebook.pdf.pdf", altUrl: "ebooks/g12-ch2-l2-ebook.pdf" }],
            'g12-ch2-l2': [{ title: "Interference & Diffraction of Light (pp. 64–78)", url: "ebooks/g12-ch2-l2-ebook.pdf.pdf", altUrl: "ebooks/g12-ch2-l2-ebook.pdf" }],
            'g12-l5': [
                { title: "Part 1: Magnetism & Magnetic Fields (pp. 79–109)", url: "ebooks/g12-ch3-l1-part1.pdf.pdf", altUrl: "ebooks/g12-ch3-l1-part1.pdf" },
                { title: "Part 2: Induced EMF & Self-Induction (pp. 110–130)", url: "ebooks/g12-ch3-l1-part2.pdf.pdf", altUrl: "ebooks/g12-ch3-l1-part2.pdf" }
            ],
            'g12-l6': [{ title: "AC Circuits & Electromagnetic Waves (pp. 131–159)", url: "ebooks/g12-ch3-l2-ebook.pdf.pdf", altUrl: "ebooks/g12-ch3-l2-ebook.pdf" }]
        };
        if (fallbackMap[lid]) {
            ebooksList = fallbackMap[lid];
        }
    }

    if (!ebooksList.length) {
        cleanupCurrentPdfSession();
        ebookContainer.innerHTML = `
            <div class="ebook-empty">
                <i class="fa-solid fa-book-open"></i>
                <h3>Ebook Coming Soon</h3>
                <p>The electronic textbook / lesson PDF for this topic will be available soon.</p>
            </div>
        `;
        return;
    }

    let currentSelectedIndex = 0;

    function buildEbookUI(selectedIndex) {
        cleanupCurrentPdfSession();
        currentSelectedIndex = selectedIndex;
        const currentEbook = ebooksList[selectedIndex];
        const pair = resolveAppEbookCandidates(currentEbook);
        const activeUrl = pair.primary || pair.alt || '';
        const altUrl = pair.alt || '';
        const currentTitle = currentEbook.title || lesson.title || 'Ebook';

        let topicsSelectorHtml = '';
        if (ebooksList.length > 1) {
            topicsSelectorHtml = `
                <div class="ebook-topic-selector">
                    <span class="ebook-topic-label"><i class="fa-solid fa-layer-group"></i> Select Section / Topic (${ebooksList.length} Files):</span>
                    <div class="ebook-topic-pills">
                        ${ebooksList.map((eb, idx) => `
                            <button type="button" class="ebook-topic-pill ${idx === selectedIndex ? 'active' : ''}" data-index="${idx}">
                                <i class="fa-solid fa-file-pdf"></i> ${eb.title}
                            </button>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        const subtitleHtml = ebooksList.length > 1 
            ? `<div class="ebook-current-topic"><i class="fa-solid fa-book-bookmark"></i> Viewing Section: <span>${currentTitle}</span></div>`
            : '';

        if (!activeUrl) {
            ebookContainer.innerHTML = `
                <div class="ebook-header" style="user-select: none;">
                    <h2><i class="fa-solid fa-book-open"></i> ${lesson.title} - E-Book / Textbook</h2>
                    <p>Read the official curriculum textbook directly in the interactive viewer (Read-Only).</p>
                </div>
                ${topicsSelectorHtml}
                <div class="ebook-empty">
                    <i class="fa-solid fa-book-open"></i>
                    <h3>Ebook File Not Available</h3>
                    <p>The electronic textbook file for this section could not be located.</p>
                </div>
            `;
            wireTopicPills();
            return;
        }

        // Render Touch-Enabled Multi-Page PDF Shell
        ebookContainer.innerHTML = `
            <div class="ebook-header" style="user-select: none;">
                <h2><i class="fa-solid fa-book-open"></i> ${lesson.title} - E-Book / Textbook</h2>
                ${subtitleHtml}
                <p>Read the official curriculum textbook directly in the interactive viewer (Read-Only).</p>
            </div>

            ${topicsSelectorHtml}

            <div class="pdf-viewer-wrapper" id="pdf-viewer-wrapper" oncontextmenu="return false;">
                <div class="pdf-toolbar">
                    <div class="pdf-toolbar-group">
                        <button type="button" class="pdf-btn" id="pdf-prev-btn" title="Previous Page">
                            <i class="fa-solid fa-chevron-left"></i>
                        </button>
                        <div class="pdf-page-indicator">
                            <span>Page</span>
                            <input type="number" id="pdf-page-input" class="pdf-page-input" value="1" min="1" max="1" aria-label="Current Page">
                            <span>/ <span id="pdf-total-pages">-</span></span>
                        </div>
                        <button type="button" class="pdf-btn" id="pdf-next-btn" title="Next Page">
                            <i class="fa-solid fa-chevron-right"></i>
                        </button>
                    </div>

                    <div class="pdf-toolbar-group">
                        <button type="button" class="pdf-btn" id="pdf-zoom-out-btn" title="Zoom Out">
                            <i class="fa-solid fa-magnifying-glass-minus"></i>
                        </button>
                        <span class="pdf-zoom-label" id="pdf-zoom-label">100%</span>
                        <button type="button" class="pdf-btn" id="pdf-zoom-in-btn" title="Zoom In">
                            <i class="fa-solid fa-magnifying-glass-plus"></i>
                        </button>
                        <button type="button" class="pdf-btn" id="pdf-fit-width-btn" title="Fit to Screen Width">
                            <i class="fa-solid fa-arrows-left-right"></i> <span class="btn-text">Fit</span>
                        </button>
                    </div>

                    <div class="pdf-toolbar-group">
                        <button type="button" class="pdf-btn pdf-btn-fullscreen" id="pdf-fullscreen-btn" title="Toggle Fullscreen Reading View">
                            <i class="fa-solid fa-expand" id="pdf-fs-icon"></i> <span class="btn-text" id="pdf-fs-text">Fullscreen</span>
                        </button>
                    </div>
                </div>

                <div class="pdf-scroll-container" id="pdf-scroll-container">
                    <div class="pdf-loading-card" id="pdf-loading-card">
                        <i class="fa-solid fa-circle-notch fa-spin"></i>
                        <span id="pdf-loading-status">Loading textbook pages...</span>
                    </div>
                    <div id="pdf-pages-mount" style="width: 100%; display: block; text-align: center;"></div>
                </div>
            </div>

            <div class="ebook-notice" style="background: #f0fdf4; border: 1px solid #bbf7d0; color: #166534; border-radius: 8px; padding: 0.75rem 1.25rem; margin-top: 1rem;">
                <i class="fa-solid fa-shield-halved" style="color: #15803d; font-size: 1.15rem; margin-right: 8px;"></i>
                <div>
                    <span><strong>Protected Curriculum Viewer:</strong> Downloading, printing, and exporting are restricted for this electronic textbook. Students can scroll up and down smoothly across all pages on iPad, phone, or laptop.</span>
                </div>
            </div>
        `;

        wireTopicPills();
        initPdfReader(activeUrl, altUrl, currentTitle);
    }

    function wireTopicPills() {
        if (ebooksList.length > 1) {
            const pills = ebookContainer.querySelectorAll('.ebook-topic-pill');
            pills.forEach(pill => {
                pill.addEventListener('click', () => {
                    const idx = parseInt(pill.getAttribute('data-index'), 10);
                    buildEbookUI(idx);
                });
            });
        }
    }

    function initPdfReader(primaryUrl, altUrl, title) {
        function fallbackToIframe(url, errInfo) {
            console.warn('Using safe in-page fallback for ebook:', errInfo);
            const wrapper = document.getElementById('pdf-viewer-wrapper');
            if (!wrapper) return;
            const protectedViewerSrc = url ? (url.includes('#') ? url : `${url}#toolbar=0&navpanes=0`) : '';
            wrapper.innerHTML = `
                <div class="pdf-toolbar" style="position: sticky; top: 0; z-index: 25;">
                    <div class="pdf-toolbar-group">
                        <span style="font-size: 0.88rem; color: #cbd5e1; font-weight: 600;">
                            <i class="fa-solid fa-book-open" style="color: #38bdf8; margin-right: 6px;"></i> Standard Curriculum Reader
                        </span>
                    </div>
                    <div class="pdf-toolbar-group">
                        <button type="button" class="pdf-btn" id="retry-pdf-load-btn" style="padding: 0.45rem 0.85rem;">
                            <i class="fa-solid fa-arrows-rotate"></i> <span>Reload Reader</span>
                        </button>
                    </div>
                </div>
                <div class="ebook-preview-wrapper" id="fallback-iframe-wrapper" oncontextmenu="return false;" style="position: relative; width: 100%; height: 750px; overflow-y: auto; -webkit-overflow-scrolling: touch;">
                    <iframe src="${protectedViewerSrc}" class="ebook-preview" id="ebook-iframe" title="${title} Preview" style="width: 100%; height: 100%; border: none;"></iframe>
                </div>
            `;
            const retryBtn = document.getElementById('retry-pdf-load-btn');
            if (retryBtn) retryBtn.addEventListener('click', () => buildEbookUI(currentSelectedIndex));
        }

        function getPdfJsLib() {
            return window.pdfjsLib || window['pdfjs-dist/build/pdf'] || window.PDFJS || null;
        }

        async function waitForPdfJs(maxWaitMs = 6000) {
            let lib = getPdfJsLib();
            if (lib) return lib;
            const start = Date.now();
            while (Date.now() - start < maxWaitMs) {
                await new Promise(r => setTimeout(r, 60));
                lib = getPdfJsLib();
                if (lib) return lib;
            }
            return getPdfJsLib();
        }

        let cachedWorkerBlobUrl = null;
        async function setupPdfWorker(pdfjs) {
            if (!pdfjs || !pdfjs.GlobalWorkerOptions) return;
            if (cachedWorkerBlobUrl) {
                pdfjs.GlobalWorkerOptions.workerSrc = cachedWorkerBlobUrl;
                return;
            }

            const cdnWorker = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js';
            try {
                const resp = await fetch(cdnWorker);
                if (resp.ok) {
                    const workerCode = await resp.text();
                    const workerBlob = new Blob([workerCode], { type: 'application/javascript' });
                    cachedWorkerBlobUrl = URL.createObjectURL(workerBlob);
                    pdfjs.GlobalWorkerOptions.workerSrc = cachedWorkerBlobUrl;
                    return;
                }
            } catch (e) {
                console.warn('Worker script fetch failed, disabling worker for main thread:', e);
            }

            // Safe fallback to fake worker on main thread to prevent Safari cross-origin SecurityError
            try {
                pdfjs.GlobalWorkerOptions.workerSrc = '';
            } catch (e) {}
        }

        const loadingStatus = document.getElementById('pdf-loading-status');
        if (loadingStatus) loadingStatus.textContent = 'Loading textbook...';

        waitForPdfJs().then(async (pdfjs) => {
            if (!pdfjs) {
                fallbackToIframe(primaryUrl, 'PDF.js library not available after timeout');
                return;
            }

            // Configure multi-threaded same-origin Blob worker with embedded script
            await setupPdfWorker(pdfjs);

            async function fetchPdfDoc() {
                // Pre-fetch binary buffer directly to avoid any Safari URL or range request issues
                let pdfBuffer = null;
                try {
                    const res1 = await fetch(primaryUrl);
                    if (!res1.ok) throw new Error(`HTTP ${res1.status}`);
                    pdfBuffer = await res1.arrayBuffer();
                } catch (fetchErr1) {
                    console.warn(`Primary fetch failed for ${primaryUrl}, trying altUrl: ${altUrl}`, fetchErr1);
                    if (altUrl && altUrl !== primaryUrl) {
                        if (loadingStatus) loadingStatus.textContent = 'Retrying secondary path...';
                        const res2 = await fetch(altUrl);
                        if (!res2.ok) throw new Error(`HTTP ${res2.status}`);
                        pdfBuffer = await res2.arrayBuffer();
                    } else {
                        throw fetchErr1;
                    }
                }

                const docParams = {
                    data: new Uint8Array(pdfBuffer),
                    cMapUrl: 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/cmaps/',
                    cMapPacked: true
                };

                try {
                    return await pdfjs.getDocument(docParams).promise;
                } catch (firstErr) {
                    console.warn('Initial getDocument promise rejected, retrying on main thread:', firstErr);
                    try {
                        pdfjs.GlobalWorkerOptions.workerSrc = '';
                    } catch(e) {}
                    return await pdfjs.getDocument(docParams).promise;
                }
            }

            try {
                const pdfDoc = await fetchPdfDoc();
                const numPages = pdfDoc.numPages;
                const totalPagesEl = document.getElementById('pdf-total-pages');
                const pageInput = document.getElementById('pdf-page-input');
                const zoomLabel = document.getElementById('pdf-zoom-label');
                const scrollContainer = document.getElementById('pdf-scroll-container');
                const mount = document.getElementById('pdf-pages-mount');
                const mainLoading = document.getElementById('pdf-loading-card');
                const wrapper = document.getElementById('pdf-viewer-wrapper');
                const fsBtn = document.getElementById('pdf-fullscreen-btn');
                const fsIcon = document.getElementById('pdf-fs-icon');
                const fsText = document.getElementById('pdf-fs-text');
                const prevBtn = document.getElementById('pdf-prev-btn');
                const nextBtn = document.getElementById('pdf-next-btn');
                const zoomInBtn = document.getElementById('pdf-zoom-in-btn');
                const zoomOutBtn = document.getElementById('pdf-zoom-out-btn');
                const fitWidthBtn = document.getElementById('pdf-fit-width-btn');

                if (!scrollContainer || !mount) return;

                if (totalPagesEl) totalPagesEl.textContent = numPages;
                if (pageInput) {
                    pageInput.max = numPages;
                    pageInput.value = 1;
                }

                const page1 = await pdfDoc.getPage(1);
                const vp1 = page1.getViewport({ scale: 1 });
                const baseW = vp1.width;
                const baseH = vp1.height;

                const availWidth = scrollContainer.clientWidth > 0 ? (scrollContainer.clientWidth - 28) : (window.innerWidth > 900 ? 820 : window.innerWidth - 28);
                let currentScale = Math.min(Math.max(availWidth / baseW, 0.4), 1.6);

                function updateZoomDisplay() {
                    if (zoomLabel) zoomLabel.textContent = Math.round(currentScale * 100) + '%';
                }
                updateZoomDisplay();

                const renderedPages = new Set();
                const activeTasks = {};
                let observer = null;

                mount.innerHTML = '';
                for (let p = 1; p <= numPages; p++) {
                    const card = document.createElement('div');
                    card.className = 'pdf-page-card';
                    card.id = `pdf-page-${p}`;
                    card.dataset.page = p;
                    card.style.width = Math.floor(baseW * currentScale) + 'px';
                    card.style.height = Math.floor(baseH * currentScale) + 'px';
                    card.style.margin = '0 auto 1.25rem auto';
                    card.style.display = 'block';

                    const placeholder = document.createElement('div');
                    placeholder.className = 'pdf-loading-card';
                    placeholder.id = `pdf-placeholder-${p}`;
                    placeholder.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin"></i><span>Page ${p}</span>`;
                    placeholder.style.pointerEvents = 'none';

                    const canvas = document.createElement('canvas');
                    canvas.className = 'pdf-page-canvas';
                    canvas.id = `pdf-canvas-${p}`;
                    canvas.style.display = 'none';
                    canvas.style.pointerEvents = 'none';

                    const badge = document.createElement('span');
                    badge.className = 'pdf-page-badge';
                    badge.textContent = `${p} / ${numPages}`;
                    badge.style.pointerEvents = 'none';

                    card.appendChild(placeholder);
                    card.appendChild(canvas);
                    card.appendChild(badge);
                    mount.appendChild(card);
                }

                if (mainLoading) mainLoading.style.display = 'none';

                async function renderPage(pageNum) {
                    if (renderedPages.has(pageNum)) return;
                    renderedPages.add(pageNum);

                    const card = document.getElementById(`pdf-page-${pageNum}`);
                    const canvas = document.getElementById(`pdf-canvas-${pageNum}`);
                    const ph = document.getElementById(`pdf-placeholder-${pageNum}`);
                    if (!card || !canvas) return;

                    try {
                        const page = await pdfDoc.getPage(pageNum);
                        const dpr = Math.min(window.devicePixelRatio || 1, 2);
                        const viewport = page.getViewport({ scale: currentScale * dpr });

                        canvas.width = Math.floor(viewport.width);
                        canvas.height = Math.floor(viewport.height);
                        canvas.style.width = Math.floor(viewport.width / dpr) + 'px';
                        canvas.style.height = Math.floor(viewport.height / dpr) + 'px';

                        card.style.width = Math.floor(viewport.width / dpr) + 'px';
                        card.style.height = Math.floor(viewport.height / dpr) + 'px';

                        const ctx = canvas.getContext('2d');
                        const renderContext = {
                            canvasContext: ctx,
                            viewport: viewport
                        };

                        const task = page.render(renderContext);
                        activeTasks[pageNum] = task;
                        await task.promise;

                        if (ph) ph.style.display = 'none';
                        canvas.style.display = 'block';
                    } catch (renderErr) {
                        if (renderErr && renderErr.name !== 'RenderingCancelledException') {
                            console.warn(`Render error on page ${pageNum}:`, renderErr);
                        }
                    } finally {
                        delete activeTasks[pageNum];
                    }
                }

                // Render page 1 immediately for instant display
                await renderPage(1);

                // Progressively pre-render remaining pages sequentially in background
                async function renderRemainingPages() {
                    for (let p = 2; p <= numPages; p++) {
                        if (!renderedPages.has(p)) {
                            await renderPage(p);
                            await new Promise(r => setTimeout(r, 40));
                        }
                    }
                }
                renderRemainingPages();

                if ('IntersectionObserver' in window) {
                    observer = new IntersectionObserver((entries) => {
                        entries.forEach(entry => {
                            if (entry.isIntersecting) {
                                const p = parseInt(entry.target.dataset.page, 10);
                                renderPage(p);
                                if (p < numPages) setTimeout(() => renderPage(p + 1), 50);
                                if (p > 1) setTimeout(() => renderPage(p - 1), 80);
                            }
                        });
                    }, {
                        root: scrollContainer,
                        rootMargin: '600px 0px 600px 0px'
                    });

                    mount.querySelectorAll('.pdf-page-card').forEach(c => observer.observe(c));
                }

                let scrollTimeout = null;
                function onScrollUpdate() {
                    if (scrollTimeout) return;
                    scrollTimeout = setTimeout(() => {
                        scrollTimeout = null;
                        const containerRect = scrollContainer.getBoundingClientRect();
                        const cards = mount.querySelectorAll('.pdf-page-card');
                        for (const card of cards) {
                            const r = card.getBoundingClientRect();
                            if (r.top <= containerRect.top + containerRect.height / 3 && r.bottom >= containerRect.top) {
                                const p = parseInt(card.dataset.page, 10);
                                if (pageInput && document.activeElement !== pageInput) {
                                    pageInput.value = p;
                                }
                                renderPage(p);
                                if (p < numPages) renderPage(p + 1);
                                if (p > 1) renderPage(p - 1);
                                break;
                            }
                        }
                    }, 60);
                }
                scrollContainer.addEventListener('scroll', onScrollUpdate, { passive: true });

                function scrollToPage(p) {
                    const card = document.getElementById(`pdf-page-${p}`);
                    if (card) {
                        card.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        if (pageInput) pageInput.value = p;
                        renderPage(p);
                        if (p < numPages) renderPage(p + 1);
                    }
                }

                if (prevBtn) {
                    prevBtn.addEventListener('click', () => {
                        const cur = parseInt(pageInput.value, 10) || 1;
                        scrollToPage(Math.max(1, cur - 1));
                    });
                }
                if (nextBtn) {
                    nextBtn.addEventListener('click', () => {
                        const cur = parseInt(pageInput.value, 10) || 1;
                        scrollToPage(Math.min(numPages, cur + 1));
                    });
                }

                if (pageInput) {
                    pageInput.addEventListener('change', () => {
                        const val = parseInt(pageInput.value, 10);
                        if (!isNaN(val)) {
                            scrollToPage(Math.min(Math.max(1, val), numPages));
                        }
                    });
                    pageInput.addEventListener('keydown', (e) => {
                        if (e.key === 'Enter') {
                            e.preventDefault();
                            pageInput.blur();
                        }
                    });
                }

                function applyZoom(newScale) {
                    currentScale = Math.min(Math.max(newScale, 0.35), 3.0);
                    updateZoomDisplay();

                    Object.values(activeTasks).forEach(t => {
                        try { t.cancel(); } catch (e) {}
                    });
                    renderedPages.clear();

                    mount.querySelectorAll('.pdf-page-card').forEach(c => {
                        c.style.width = Math.floor(baseW * currentScale) + 'px';
                        c.style.height = Math.floor(baseH * currentScale) + 'px';
                        const cv = c.querySelector('.pdf-page-canvas');
                        if (cv) cv.style.display = 'none';
                        const ph = c.querySelector('.pdf-loading-card');
                        if (ph) ph.style.display = 'flex';
                    });

                    const cur = parseInt(pageInput.value, 10) || 1;
                    renderPage(cur);
                    if (cur < numPages) renderPage(cur + 1);
                    if (cur > 1) renderPage(cur - 1);
                }

                if (zoomInBtn) zoomInBtn.addEventListener('click', () => applyZoom(currentScale + 0.15));
                if (zoomOutBtn) zoomOutBtn.addEventListener('click', () => applyZoom(currentScale - 0.15));
                if (fitWidthBtn) {
                    fitWidthBtn.addEventListener('click', () => {
                        const avail = scrollContainer.clientWidth > 0 ? scrollContainer.clientWidth - 28 : window.innerWidth - 28;
                        applyZoom(avail / baseW);
                    });
                }

                // Two-finger Pinch-to-Zoom gesture on mobile touch screens
                let touchStartDist = 0;
                let touchStartScale = currentScale;
                let isPinching = false;

                scrollContainer.addEventListener('touchstart', (e) => {
                    if (e.touches && e.touches.length === 2) {
                        isPinching = true;
                        touchStartDist = Math.hypot(
                            e.touches[0].clientX - e.touches[1].clientX,
                            e.touches[0].clientY - e.touches[1].clientY
                        );
                        touchStartScale = currentScale;
                    } else {
                        isPinching = false;
                    }
                }, { passive: true });

                scrollContainer.addEventListener('touchmove', (e) => {
                    if (isPinching && e.touches && e.touches.length === 2 && touchStartDist > 0) {
                        const curDist = Math.hypot(
                            e.touches[0].clientX - e.touches[1].clientX,
                            e.touches[0].clientY - e.touches[1].clientY
                        );
                        const ratio = curDist / touchStartDist;
                        const candidateScale = Math.min(Math.max(touchStartScale * ratio, 0.35), 3.0);
                        if (zoomLabel) zoomLabel.textContent = Math.round(candidateScale * 100) + '%';
                    }
                }, { passive: true });

                scrollContainer.addEventListener('touchend', (e) => {
                    if (isPinching) {
                        isPinching = false;
                        if (!e.touches || e.touches.length < 2) {
                            const displayed = parseInt(zoomLabel ? zoomLabel.textContent : '100', 10) / 100;
                            if (!isNaN(displayed) && Math.abs(displayed - currentScale) > 0.05) {
                                applyZoom(displayed);
                            }
                        }
                    }
                }, { passive: true });

                function toggleFullscreen(forceState) {
                    const isActive = typeof forceState === 'boolean' 
                        ? forceState 
                        : wrapper.classList.contains('pdf-fullscreen-active');
                    
                    if (isActive) {
                        wrapper.classList.remove('pdf-fullscreen-active');
                        document.body.classList.remove('pdf-modal-open');
                        if (fsIcon) fsIcon.className = 'fa-solid fa-expand';
                        if (fsText) fsText.textContent = 'Fullscreen';
                    } else {
                        wrapper.classList.add('pdf-fullscreen-active');
                        document.body.classList.add('pdf-modal-open');
                        if (fsIcon) fsIcon.className = 'fa-solid fa-compress';
                        if (fsText) fsText.textContent = 'Exit Fullscreen';
                        setTimeout(() => {
                            const avail = scrollContainer.clientWidth > 0 ? scrollContainer.clientWidth - 32 : window.innerWidth - 32;
                            applyZoom(avail / baseW);
                        }, 120);
                    }
                }

                if (fsBtn) {
                    fsBtn.addEventListener('click', () => toggleFullscreen());
                }

                const keyHandler = (e) => {
                    if (e.key === 'Escape' && wrapper.classList.contains('pdf-fullscreen-active')) {
                        toggleFullscreen(true);
                    }
                };
                window.addEventListener('keydown', keyHandler);

                currentPdfSession = {
                    pdfDoc: pdfDoc,
                    observer: observer,
                    activeTasks: activeTasks,
                    cleanup: () => {
                        window.removeEventListener('keydown', keyHandler);
                        scrollContainer.removeEventListener('scroll', onScrollUpdate);
                        document.body.classList.remove('pdf-modal-open');
                        document.body.style.overflow = '';
                    }
                };
            } catch (fatalErr) {
                console.error('Fatal error initializing PDF.js viewer:', fatalErr);
                fallbackToIframe(primaryUrl, fatalErr.message || 'PDF.js load failure');
            }
        });
    }

    buildEbookUI(0);
}

// --- Worksheet Render Function ---
function renderWorksheet(lesson) {
    const worksheetContainer = document.getElementById('lesson-worksheet');
    if (!worksheetContainer || !lesson) return;

    if (externalWorksheetsCache) {
        const ext = findLessonEntryInConfig(externalWorksheetsCache, lesson.id);
        if (ext) {
            if (typeof ext === 'string') lesson.worksheetUrl = ext.trim();
            else if (ext.worksheet) lesson.worksheetUrl = ext.worksheet.trim();
            else if (ext.worksheetUrl) lesson.worksheetUrl = ext.worksheetUrl.trim();
            else if (ext.url) lesson.worksheetUrl = ext.url.trim();
        }
    }

    if (lesson.worksheetUrl) {
        const wsUrl = lesson.worksheetUrl;
        const wsAltUrl = wsUrl.endsWith('.pdf.pdf') ? wsUrl.slice(0, -4) : (wsUrl + '.pdf');

        // Detect mobile browsers (especially iOS Safari which struggles with inline PDF iframes)
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        const isOnline = window.location.protocol.startsWith('http');
        let currentActiveUrl = wsUrl;
        let absolutePdfUrl = wsUrl;
        try {
            absolutePdfUrl = new URL(wsUrl, window.location.href).href;
        } catch (e) {}

        // On mobile and hosted online, Google Docs Viewer provides smooth touch scrolling & full multi-page preview
        const googleDocsViewerUrl = `https://docs.google.com/viewer?embedded=true&url=${encodeURIComponent(absolutePdfUrl)}`;
        let currentViewerSrc = (isMobile && isOnline) ? googleDocsViewerUrl : wsUrl;
        let isUsingGoogleViewer = (isMobile && isOnline);

        worksheetContainer.innerHTML = `
            <div class="worksheet-header">
                <h2><i class="fa-solid fa-file-pdf"></i> ${lesson.title} - Practice Worksheet</h2>
                <p>You can solve the problems below, open in full screen, or download and print the worksheet.</p>
            </div>
            <div class="worksheet-actions">
                <a href="${wsUrl}" target="_blank" class="worksheet-btn primary" id="open-worksheet-btn">
                    <i class="fa-solid fa-arrow-up-right-from-square"></i> Open / Download PDF
                </a>
                <button type="button" class="worksheet-btn secondary" id="toggle-worksheet-ext-btn">
                    <i class="fa-solid fa-file-signature"></i> Toggle Extension
                </button>
                ${isOnline ? `
                <button type="button" class="worksheet-btn secondary" id="switch-viewer-btn">
                    <i class="fa-solid fa-arrows-rotate"></i> Switch Viewer Mode
                </button>
                ` : ''}
            </div>
            <iframe src="${currentViewerSrc}" class="worksheet-preview" id="worksheet-iframe" title="Worksheet Preview"></iframe>
            <div class="worksheet-notice">
                <i class="fa-solid fa-circle-info"></i>
                <div>
                    <span>Tip: Tap <strong>Open / Download PDF</strong> above to view in your device's native PDF viewer.</span>
                    <div style="margin-top: 6px; font-size: 0.83rem; display: flex; gap: 14px; justify-content: center; flex-wrap: wrap;">
                        <span>Direct Links:</span>
                        <a href="${wsUrl}" target="_blank" style="color: var(--primary-blue); font-weight: 600; text-decoration: underline;"><i class="fa-solid fa-download"></i> Primary (${wsUrl.split('/').pop()})</a>
                        <a href="${wsAltUrl}" target="_blank" style="color: var(--primary-blue); font-weight: 600; text-decoration: underline;"><i class="fa-solid fa-download"></i> Alternate (${wsAltUrl.split('/').pop()})</a>
                    </div>
                </div>
            </div>
        `;

        const wsToggleBtn = document.getElementById('toggle-worksheet-ext-btn');
        const wsIframe = document.getElementById('worksheet-iframe');
        const wsOpenBtn = document.getElementById('open-worksheet-btn');
        if (wsToggleBtn && wsIframe && wsOpenBtn) {
            let usingAlt = false;
            wsToggleBtn.addEventListener('click', () => {
                usingAlt = !usingAlt;
                currentActiveUrl = usingAlt ? wsAltUrl : wsUrl;
                wsIframe.src = currentActiveUrl;
                wsOpenBtn.href = currentActiveUrl;
                wsToggleBtn.innerHTML = `<i class="fa-solid fa-file-signature"></i> ${usingAlt ? 'Using .pdf.pdf' : 'Using .pdf'}`;
            });
        }

        if (isOnline) {
            const switchBtn = document.getElementById('switch-viewer-btn');
            const iframe = document.getElementById('worksheet-iframe');
            if (switchBtn && iframe) {
                switchBtn.addEventListener('click', () => {
                    isUsingGoogleViewer = !isUsingGoogleViewer;
                    iframe.src = isUsingGoogleViewer ? googleDocsViewerUrl : currentActiveUrl;
                    switchBtn.innerHTML = isUsingGoogleViewer 
                        ? `<i class="fa-solid fa-arrows-rotate"></i> Switch to Direct PDF`
                        : `<i class="fa-solid fa-arrows-rotate"></i> Switch to Google Viewer`;
                });
            }
        }
    } else {
        worksheetContainer.innerHTML = `
            <div class="worksheet-empty">
                <i class="fa-solid fa-file-circle-question"></i>
                <h3>Worksheet Coming Soon</h3>
                <p>Practice exercises for this lesson have not been uploaded yet.</p>
            </div>
        `;
    }
}

// --- Game Render Function ---
function renderGame(lesson) {
    const gameContainer = document.getElementById('lesson-game');
    if (!gameContainer || !lesson) return;

    if (externalGamesCache) {
        const ext = findLessonEntryInConfig(externalGamesCache, lesson.id);
        if (ext) {
            if (ext.games) lesson.games = normalizeGamesList(ext.games);
            else if (Array.isArray(ext) || typeof ext === 'string' || typeof ext === 'object') {
                lesson.games = normalizeGamesList(ext);
            }
        }
    }

    let gamesList = lesson.games || [];
    if (!gamesList.length && lesson.gameUrl) {
        gamesList = [{ topic: "Interactive Simulation", url: lesson.gameUrl }];
    }

    if (!gamesList.length) {
        gameContainer.innerHTML = `
            <div class="game-empty">
                <i class="fa-solid fa-gamepad"></i>
                <h3>Interactive Game Coming Soon</h3>
                <p>An interactive simulation or game for this lesson will be available soon.</p>
            </div>
        `;
        return;
    }

    function buildGameUI(selectedIndex) {
        const currentGame = gamesList[selectedIndex];
        
        let topicsSelectorHtml = '';
        if (gamesList.length > 1) {
            topicsSelectorHtml = `
                <div class="game-topic-selector">
                    <span class="game-topic-label"><i class="fa-solid fa-list-check"></i> Select Topic:</span>
                    <div class="game-topic-pills">
                        ${gamesList.map((g, idx) => `
                            <button class="game-topic-pill ${idx === selectedIndex ? 'active' : ''}" data-index="${idx}">
                                <i class="fa-solid fa-gamepad"></i> ${g.topic}
                            </button>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        gameContainer.innerHTML = `
            <div class="game-header">
                <h2><i class="fa-solid fa-gamepad"></i> ${lesson.title}</h2>
                <div class="game-current-topic"><i class="fa-solid fa-puzzle-piece"></i> Topic: <span>${currentGame.topic}</span></div>
                <p>Play the interactive game or simulation below to practice and test your understanding!</p>
            </div>

            ${topicsSelectorHtml}

            <div class="game-actions">
                <a href="${currentGame.url}" target="_blank" rel="noopener noreferrer" class="game-btn primary">
                    <i class="fa-solid fa-arrow-up-right-from-square"></i> Open "${currentGame.topic}" in New Tab / Fullscreen
                </a>
            </div>

            <div class="game-embed-wrapper">
                <iframe src="${currentGame.url}" class="game-preview" allowfullscreen title="${currentGame.topic} Game"></iframe>
                <div class="game-embed-notice">
                    <i class="fa-solid fa-circle-info"></i> If the preview does not load directly inside your browser window, click the purple <strong>"Open in New Tab"</strong> button above to play!
                </div>
            </div>
        `;

        const pills = gameContainer.querySelectorAll('.game-topic-pill');
        pills.forEach(pill => {
            pill.addEventListener('click', () => {
                const idx = parseInt(pill.getAttribute('data-index'), 10);
                buildGameUI(idx);
            });
        });
    }

    buildGameUI(0);
}

// --- Tabs Logic ---

function switchTab(targetName) {
    if (!targetName) return;

    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabBtns.forEach(b => {
        if (b.getAttribute('data-target') === targetName) {
            b.classList.add('active');
        } else {
            b.classList.remove('active');
        }
    });

    tabPanes.forEach(p => {
        if (p.id === `tab-${targetName}`) {
            p.classList.remove('hidden');
            p.classList.add('active');
            p.style.display = 'block';
        } else {
            p.classList.add('hidden');
            p.classList.remove('active');
            p.style.display = 'none';
        }
    });

    if (!currentLesson && window.currentSelectedLessonId) {
        const allLessons = Object.values(data).flat();
        currentLesson = allLessons.find(l => l.id === window.currentSelectedLessonId) || null;
    }
    if (!currentLesson) return;

    if (targetName === 'summary') {
        typesetMath([document.getElementById('tab-summary')]);
    } else if (targetName === 'ebook') {
        renderEbook(currentLesson);
    } else if (targetName === 'equations') {
        typesetMath([document.getElementById('lesson-equations')]);
    } else if (targetName === 'flashcards') {
        updateFlashcard();
    } else if (targetName === 'quiz') {
        const qContainer = document.getElementById('quiz-question-container');
        const rContainer = document.getElementById('quiz-results-container');
        const isQuizActive = (qContainer && !qContainer.classList.contains('hidden')) || 
                             (rContainer && !rContainer.classList.contains('hidden'));
        if (!isQuizActive) {
            initQuiz();
        }
    } else if (targetName === 'worksheet') {
        renderWorksheet(currentLesson);
    } else if (targetName === 'game') {
        renderGame(currentLesson);
    }
}

document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-target');
        if (target) switchTab(target);
    });
});

// --- Flashcards Logic ---
function updateFlashcard() {
    if (!currentLesson || !currentLesson.flashcards || !currentLesson.flashcards.length) return;
    const card = document.getElementById('active-flashcard');
    const front = document.getElementById('fc-front-text');
    const back = document.getElementById('fc-back-text');
    const counter = document.getElementById('fc-counter');
    if (!card || !front || !back || !counter) return;

    card.classList.remove('flipped');
    const fc = currentLesson.flashcards[currentFlashcardIndex];
    if (!fc) return;
    front.innerText = fc.front || '';
    back.innerHTML = fc.back || '';
    counter.innerText = `${currentFlashcardIndex + 1} / ${currentLesson.flashcards.length}`;
    typesetMath([front, back]);
}

const fcFlipBtn = document.getElementById('fc-flip-btn');
if (fcFlipBtn) {
    fcFlipBtn.addEventListener('click', () => {
        const card = document.getElementById('active-flashcard');
        if (card) card.classList.toggle('flipped');
    });
}
const activeFcCard = document.getElementById('active-flashcard');
if (activeFcCard) {
    activeFcCard.addEventListener('click', () => {
        activeFcCard.classList.toggle('flipped');
    });
}
const fcPrevBtn = document.getElementById('fc-prev');
if (fcPrevBtn) {
    fcPrevBtn.addEventListener('click', () => {
        if (currentFlashcardIndex > 0) {
            currentFlashcardIndex--;
            updateFlashcard();
        }
    });
}
const fcNextBtn = document.getElementById('fc-next');
if (fcNextBtn) {
    fcNextBtn.addEventListener('click', () => {
        if (currentLesson && currentLesson.flashcards && currentFlashcardIndex < currentLesson.flashcards.length - 1) {
            currentFlashcardIndex++;
            updateFlashcard();
        }
    });
}

// --- Quiz Logic ---
function initQuiz() {
    currentQuizIndex = 0;
    quizScore = 0;
    const quizTabBtn = document.querySelector('.tab-btn[data-target="quiz"]');
    if (!currentLesson || !currentLesson.quiz || currentLesson.quiz.length === 0) {
        if (quizTabBtn) quizTabBtn.classList.add('hidden');
        return;
    }
    if (quizTabBtn) quizTabBtn.classList.remove('hidden');
    const qContainer = document.getElementById('quiz-question-container');
    const rContainer = document.getElementById('quiz-results-container');
    if (qContainer) qContainer.classList.remove('hidden');
    if (rContainer) rContainer.classList.add('hidden');
    loadQuizQuestion();
}

function loadQuizQuestion() {
    if (!currentLesson || !currentLesson.quiz || !currentLesson.quiz[currentQuizIndex]) return;
    const q = currentLesson.quiz[currentQuizIndex];
    const progressEl = document.getElementById('quiz-progress-text');
    if (progressEl) progressEl.innerText = `Question ${currentQuizIndex + 1} of ${currentLesson.quiz.length}`;
    
    const qTextEl = document.getElementById('quiz-question-text');
    if (qTextEl) qTextEl.innerHTML = q.question || '';
    
    const optionsContainer = document.getElementById('quiz-options');
    if (optionsContainer) {
        optionsContainer.innerHTML = '';
        (q.options || []).forEach((opt, idx) => {
            const btn = document.createElement('button');
            btn.className = 'quiz-option';
            btn.innerHTML = opt;
            btn.addEventListener('click', () => handleQuizAnswer(idx, btn));
            optionsContainer.appendChild(btn);
        });
    }
    
    const feedbackEl = document.getElementById('quiz-feedback');
    if (feedbackEl) {
        feedbackEl.classList.add('hidden');
        feedbackEl.className = 'quiz-feedback hidden';
    }
    
    const nextBtn = document.getElementById('quiz-next-btn');
    if (nextBtn) nextBtn.classList.add('hidden');
    
    typesetMath([qTextEl, optionsContainer]);
}

function handleQuizAnswer(selectedIndex, btnElement) {
    if (!currentLesson || !currentLesson.quiz || !currentLesson.quiz[currentQuizIndex]) return;
    const q = currentLesson.quiz[currentQuizIndex];
    const optionsContainer = document.getElementById('quiz-options');
    if (optionsContainer) {
        Array.from(optionsContainer.children).forEach((child, idx) => {
            child.disabled = true;
            if (idx === q.correctIndex) child.classList.add('correct');
            else if (idx === selectedIndex) child.classList.add('wrong');
        });
    }
    const feedbackEl = document.getElementById('quiz-feedback');
    if (feedbackEl) {
        feedbackEl.classList.remove('hidden');
        feedbackEl.innerHTML = q.feedback || '';
        if (selectedIndex === q.correctIndex) {
            quizScore++;
            feedbackEl.classList.add('correct-feedback');
        } else {
            feedbackEl.classList.add('wrong-feedback');
        }
        typesetMath([feedbackEl]);
    }
    const nextBtn = document.getElementById('quiz-next-btn');
    if (nextBtn) nextBtn.classList.remove('hidden');
}

function showQuizResults() {
    const qContainer = document.getElementById('quiz-question-container');
    const rContainer = document.getElementById('quiz-results-container');
    if (qContainer) qContainer.classList.add('hidden');
    if (rContainer) rContainer.classList.remove('hidden');
    
    const scoreEl = document.getElementById('quiz-score');
    const totalEl = document.getElementById('quiz-total');
    if (scoreEl) scoreEl.innerText = quizScore;
    if (totalEl) totalEl.innerText = (currentLesson && currentLesson.quiz) ? currentLesson.quiz.length : 0;
    
    const total = (currentLesson && currentLesson.quiz) ? currentLesson.quiz.length : 1;
    const percentage = (quizScore / total) * 100;
    const msgEl = document.getElementById('quiz-result-message');
    if (msgEl) {
        if (percentage === 100) msgEl.innerText = "Excellent! You mastered this topic.";
        else if (percentage >= 50) msgEl.innerText = "Good job! Keep practicing to get a perfect score.";
        else msgEl.innerText = "You might want to review the summary and flashcards before trying again.";
    }
}

const quizNextBtn = document.getElementById('quiz-next-btn');
if (quizNextBtn) {
    quizNextBtn.addEventListener('click', () => {
        currentQuizIndex++;
        if (currentLesson && currentLesson.quiz && currentQuizIndex < currentLesson.quiz.length) {
            loadQuizQuestion();
        } else {
            showQuizResults();
        }
    });
}

const quizRetryBtn = document.getElementById('quiz-retry-btn');
if (quizRetryBtn) {
    quizRetryBtn.addEventListener('click', initQuiz);
}

window.addEventListener('scroll', () => {
    if (viewLessonDetail && viewLessonDetail.classList.contains('active')) {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        const prog = document.getElementById('reading-progress');
        if (prog) prog.style.width = height <= 0 ? "100%" : scrolled + "%";
    }
});

// --- AI Tutor Logic ---
const aiWidget = document.getElementById('ai-widget-container');
const aiToggleBtn = document.getElementById('ai-toggle-btn');
const aiCloseBtn = document.getElementById('ai-close-btn');
const aiMessages = document.getElementById('ai-messages');
const aiApiKeyInput = document.getElementById('ai-api-key-input');
const aiSaveKeyBtn = document.getElementById('ai-save-key-btn');
const aiKeySetup = document.getElementById('ai-api-key-setup');
const aiInputArea = document.getElementById('ai-input-area');
const aiUserInput = document.getElementById('ai-user-input');
const aiSendBtn = document.getElementById('ai-send-btn');

let geminiApiKey = '';
try {
    geminiApiKey = localStorage.getItem('gemini_api_key') || '';
} catch (e) {}

if (geminiApiKey && aiKeySetup && aiInputArea) {
    aiKeySetup.style.display = 'none';
    aiInputArea.style.display = 'flex';
}

if (aiToggleBtn && aiWidget) {
    aiToggleBtn.addEventListener('click', () => {
        aiWidget.classList.remove('ai-widget-collapsed');
    });
}

if (aiCloseBtn && aiWidget) {
    aiCloseBtn.addEventListener('click', () => {
        aiWidget.classList.add('ai-widget-collapsed');
    });
}

if (aiSaveKeyBtn && aiApiKeyInput) {
    aiSaveKeyBtn.addEventListener('click', () => {
        const key = aiApiKeyInput.value.trim();
        if (key) {
            geminiApiKey = key;
            try {
                localStorage.setItem('gemini_api_key', key);
            } catch (e) {}
            if (aiKeySetup) aiKeySetup.style.display = 'none';
            if (aiInputArea) aiInputArea.style.display = 'flex';
            aiApiKeyInput.value = '';
        }
    });
}

function addAiMessage(text, isUser = false) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `ai-msg ${isUser ? 'user' : 'ai'}`;
    
    // Basic markdown parsing for bold and code
    let formattedText = text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/`(.*?)`/g, '<code>$1</code>')
        .replace(/\n/g, '<br>');
    
    msgDiv.innerHTML = formattedText;
    aiMessages.appendChild(msgDiv);
    aiMessages.scrollTop = aiMessages.scrollHeight;
}

async function sendToGemini(message) {
    if (!geminiApiKey) return;
    
    let sysInstruct = "You are a helpful, encouraging physics tutor. The user is currently on a physics learning website.";
    if (typeof currentLesson !== 'undefined' && currentLesson) {
        sysInstruct += ` They are currently studying the lesson "${currentLesson.title}".`;
    }
    
    addAiMessage(message, true);
    aiUserInput.value = '';
    aiUserInput.disabled = true;
    aiSendBtn.disabled = true;
    
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'ai-msg ai';
    loadingDiv.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Thinking...';
    aiMessages.appendChild(loadingDiv);
    aiMessages.scrollTop = aiMessages.scrollHeight;

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiApiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                systemInstruction: { parts: [{ text: sysInstruct }] },
                contents: [{ parts: [{ text: message }] }]
            })
        });

        const data = await response.json();
        aiMessages.removeChild(loadingDiv);

        if (data.error) {
            addAiMessage("Error: " + data.error.message);
            // If API key is invalid, prompt again
            if (data.error.code === 400 || data.error.code === 403) {
                localStorage.removeItem('gemini_api_key');
                geminiApiKey = '';
                aiKeySetup.style.display = 'block';
                aiInputArea.style.display = 'none';
            }
        } else if (data.candidates && data.candidates.length > 0) {
            const reply = data.candidates[0].content.parts[0].text;
            addAiMessage(reply, false);
        } else {
            addAiMessage("Sorry, I didn't get a response.");
        }
    } catch (error) {
        aiMessages.removeChild(loadingDiv);
        addAiMessage("Failed to connect to AI server. Check your network.");
    } finally {
        aiUserInput.disabled = false;
        aiSendBtn.disabled = false;
        aiUserInput.focus();
        typesetMath([aiMessages]);
    }
}

if (aiSendBtn && aiUserInput) {
    aiSendBtn.addEventListener('click', () => {
        const text = aiUserInput.value.trim();
        if (text) sendToGemini(text);
    });

    aiUserInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const text = aiUserInput.value.trim();
            if (text) sendToGemini(text);
        }
    });
}

// --- Global Exports ---
window.loadLessons = loadLessons;
window.appLoadLessons = loadLessons;
window.renderLessonsList = loadLessons;
window.executeLessonRender = loadLessons;

window.loadLessonDetail = loadLessonDetail;
window.appLoadLessonDetail = loadLessonDetail;
window.openLessonDetail = loadLessonDetail;

window.switchTab = switchTab;
window.appSwitchTab = switchTab;

window.showDashboard = showDashboard;
window.appShowDashboard = showDashboard;

window.showLessonsView = showLessonsView;
window.appShowLessonsView = showLessonsView;

window.updateFlashcard = updateFlashcard;
window.initQuiz = initQuiz;
window.renderWorksheet = renderWorksheet;
window.renderGame = renderGame;
window.renderEbook = renderEbook;
window.appRenderEbook = renderEbook;
window.initEbookUI = renderEbook;
window.physicsData = (typeof window !== 'undefined' && window.physicsData && window.physicsData["12"] && window.physicsData["12"].length >= 10) ? window.physicsData : data;
window.appData = window.physicsData;
window.__appLoaded = true;

window.copyEqLatex = window.copyEqLatex || function(btn, latex) {
    if (!latex) return;
    var cleanLatex = latex.replace(/^\\\(\s*/, '').replace(/\s*\\\)$/, '').replace(/^\\\[\s*/, '').replace(/\s*\\\]$/, '');
    var notifySuccess = function() {
        var origHtml = btn.innerHTML;
        btn.innerHTML = '<i class="fa-solid fa-check"></i> <span>Copied!</span>';
        btn.classList.add('copied');
        setTimeout(function() {
            btn.innerHTML = origHtml;
            btn.classList.remove('copied');
        }, 2000);
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(cleanLatex).then(notifySuccess).catch(function() {
            fallbackCopy(cleanLatex, notifySuccess);
        });
    } else {
        fallbackCopy(cleanLatex, notifySuccess);
    }
};

window.filterLessonEquations = window.filterLessonEquations || function(query) {
    var q = (query || '').trim().toLowerCase();
    var cards = document.querySelectorAll('#lesson-equations .equation-card');
    var sectionTitles = document.querySelectorAll('#lesson-equations .equation-section-title');
    var visibleCount = 0;

    cards.forEach(function(card) {
        var text = card.getAttribute('data-eq-search') || card.textContent.toLowerCase();
        if (!q || text.indexOf(q) !== -1) {
            card.style.display = '';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });

    sectionTitles.forEach(function(title) {
        var next = title.nextElementSibling;
        var hasVisibleCards = false;
        while (next && !next.classList.contains('equation-section-title')) {
            if (next.classList.contains('equation-card') && next.style.display !== 'none') {
                hasVisibleCards = true;
                break;
            }
            next = next.nextElementSibling;
        }
        title.style.display = hasVisibleCards ? '' : 'none';
    });

    var statsBadge = document.getElementById('eq-stats-count');
    if (statsBadge) {
        statsBadge.innerText = visibleCount + (q ? ' Found' : ' Formulas');
    }
};

// --- Client-Side Routing & Deep Linking ---
function handleRoute() {
    const rawHash = (window.location.hash || '').trim();
    const hash = rawHash.replace(/^#\/?/, '').toLowerCase();
    const urlParams = new URLSearchParams(window.location.search);
    const queryGrade = urlParams.get('grade');
    const queryLesson = urlParams.get('lesson');

    // 1. Direct lesson route: #lesson/:id or ?lesson=:id
    if (hash.startsWith('lesson/') || queryLesson) {
        const lessonId = hash.startsWith('lesson/') ? hash.replace(/^lesson\//, '').trim() : queryLesson;
        if (lessonId) {
            loadLessonDetail(lessonId, false);
            return;
        }
    }

    // 2. Grade routes: #grade-X, #gradeX, #gX, or ?grade=X (7, 8, 9, 10, 11, 12)
    const gradeMatch = hash.match(/^(?:grade-?|g)(\d+)$/);
    if (gradeMatch && ['7', '8', '9', '10', '11', '12'].includes(gradeMatch[1])) {
        loadLessons(gradeMatch[1], false);
        return;
    }
    if (queryGrade && ['7', '8', '9', '10', '11', '12'].includes(queryGrade)) {
        loadLessons(queryGrade, false);
        return;
    }

    // 3. Direct lesson ID hash matching (e.g. #g7-l1, #g8-l2, #g9-l1, #g10-l3, #g11-l1, #g12-l3, #g12-waves)
    if (hash && hash !== 'home' && hash !== 'dashboard') {
        const pData = (typeof window !== 'undefined' && (window.physicsData || window.appData)) ? (window.physicsData || window.appData) : data;
        const allLessons = Object.values(pData).flat();
        let match = allLessons.find(l => l.id.toLowerCase() === hash);
        if (!match && hash === 'g12-waves') match = allLessons.find(l => l.id === 'g12-l4');
        if (!match && hash === 'g12-mag') match = allLessons.find(l => l.id === 'g12-l5');
        if (!match && hash === 'g12-standing') match = allLessons.find(l => l.id === 'g12-l4');
        if (match) {
            loadLessonDetail(match.id, false);
            return;
        }
    }

    // 5. Default Dashboard route
    showDashboard(false);
}

window.handleRoute = handleRoute;
window.addEventListener('popstate', handleRoute);
window.addEventListener('hashchange', handleRoute);

// Resolve pending user action or active route on startup
const pendingId = window.pendingLessonId || window.currentSelectedLessonId;
if (pendingId) {
    window.pendingLessonId = null;
    loadLessonDetail(pendingId, false);
} else if (window.pendingGrade) {
    const pg = window.pendingGrade;
    window.pendingGrade = null;
    loadLessons(pg, false);
} else if (window.location.hash || window.location.search.includes('grade=') || window.location.search.includes('lesson=')) {
    handleRoute();
}


