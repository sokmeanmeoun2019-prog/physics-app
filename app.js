// --- Data Structure ---
const data = {
"9": [
{id:"g9-l1",gifUrl:"https://commons.wikimedia.org/wiki/Special:FilePath/Torque_animation.gif",title:"Chapter 1: Turning Effect of Force",concepts:["Resultant Force: Calculated depending on the direction of the acting forces.","Trigonometry Basics: Using right triangles to relate angles to side lengths (sine, cosine, tangent).","Resolving Force: A force can be broken down into horizontal and vertical components.","Moment of a force: The turning effect produced by a force.","Principle of moment: For equilibrium, Anti-clockwise moment = Clockwise moment \\( M_{ACW} = M_{CW} \\)."],definitions:[],examples:[],
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
{id:"g9-l2",gifUrl:"https://commons.wikimedia.org/wiki/Special:FilePath/Atwood_s_swinging_machine.gif",title:"Chapter 2: Simple Machines",concepts:[],definitions:[],examples:[],
equations:[
{section:"Lever",name:"Lever Mechanical advantage",formula:"\\( MA = \\frac{F_R}{F_E} = \\frac{d_E}{d_R} \\)",symbols:[{symbol:"MA",desc:"Mechanical Advantage (No unit)"},{symbol:"F_R",desc:"Load Force (N)"},{symbol:"F_E",desc:"Effort Force (N)"},{symbol:"d_E",desc:"Effort Arm (m)"},{symbol:"d_R",desc:"Load Arm (m)"}]},
{section:"Lever",name:"Lever Efficiency",formula:"\\( eff = \\frac{F_R \\times d_R}{F_E \\times d_E} \\times 100\\% = \\frac{MA}{VR} \\times 100\\% \\)",symbols:[{symbol:"eff",desc:"Efficiency (%)"},{symbol:"VR",desc:"Velocity Ratio (No unit)"}]},
{section:"Inclined Plane",name:"Inclined Plane Mechanical advantage",formula:"\\( MA = \\frac{F_R}{F_E} = \\frac{L}{h} \\)",symbols:[{symbol:"L",desc:"Length of incline (m)"},{symbol:"h",desc:"Height of incline (m)"}]},
{section:"Inclined Plane",name:"Inclined Plane Work done",formula:"\\( W_E = F_E \\times L, W_R = F_R \\times h \\)",symbols:[{symbol:"W_E",desc:"Work by Effort (J)"},{symbol:"W_R",desc:"Work on Load (J)"}]},
{section:"Inclined Plane",name:"If no friction",formula:"\\( W_E = W_R \\Leftrightarrow F_E L = F_R h \\)",symbols:[{symbol:"W_E",desc:"Work by Effort (J)"},{symbol:"W_R",desc:"Work on Load (J)"},{symbol:"F_E",desc:"Effort Force (N)"},{symbol:"F_R",desc:"Load Force (N)"},{symbol:"L",desc:"Length of incline (m)"},{symbol:"h",desc:"Height of incline (m)"}]},
{section:"Pulley",name:"Pulley Mechanical advantage",formula:"\\( MA = \\frac{F_R}{F_E} = \\text{# of cables} \\)",symbols:[{symbol:"MA",desc:"Mechanical Advantage (No unit)"}]},
{section:"Pulley",name:"Pulley Velocity Ratio",formula:"\\( VR = \\frac{d_E}{d_R} \\)",symbols:[{symbol:"d_E",desc:"Distance moved by effort (m)"},{symbol:"d_R",desc:"Distance moved by load (m)"}]},
{section:"Gears System",name:"Gears System Mechanical advantage",formula:"\\( MA = \\frac{F_R}{F_E} = \\frac{N_R}{N_E} = \\frac{r_R}{r_E} = \\frac{d_R}{d_E} \\)",symbols:[{symbol:"N_R, N_E",desc:"Number of teeth"},{symbol:"r_R, r_E",desc:"Radii (m)"},{symbol:"d_R, d_E",desc:"Diameters (m)"}]},
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
{id:"g9-l3",gifUrl:"https://commons.wikimedia.org/wiki/Special:FilePath/Electric_circuit.gif",title:"Chapter 3: Electricity",concepts:[],definitions:[],examples:[],
equations:[
{section:"Electrical Power",name:"Definition of power",formula:"\\( P = \\frac{W}{t} = \\frac{E}{t} \\)",symbols:[{symbol:"P",desc:"Power (W)"},{symbol:"W",desc:"Work (J)"},{symbol:"E",desc:"Energy (J)"},{symbol:"t",desc:"Time (s)"}]},
{section:"Electrical Power",name:"Power of current",formula:"\\( P = VI = RI^2 = \\frac{V^2}{R} \\)",symbols:[{symbol:"P",desc:"Power (W)"},{symbol:"V",desc:"Voltage (V)"},{symbol:"I",desc:"Current (A)"},{symbol:"R",desc:"Resistance (Ω)"}]},
{section:"Electrical Power",name:"Energy Transfer",formula:"\\( E = QV = VIt = RI^2 t = \\frac{V^2}{R} t \\)",symbols:[{symbol:"E",desc:"Energy (J)"},{symbol:"Q",desc:"Charge (C)"},{symbol:"V",desc:"Voltage (V)"},{symbol:"I",desc:"Current (A)"},{symbol:"R",desc:"Resistance (Ω)"},{symbol:"t",desc:"Time (s)"}]},
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
{id:"g9-l4",gifUrl:"https://commons.wikimedia.org/wiki/Special:FilePath/VFPt_solenoid-field-animation.gif",title:"Chapter 4: Magnetic Field",concepts:[],definitions:[],examples:[],
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
{id:"g9-l5",gifUrl:"https://commons.wikimedia.org/wiki/Special:FilePath/Refraction_animation.gif",title:"Chapter 5: Light",concepts:[],definitions:[],examples:[],
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
{question:"According to the Law of Reflection:", options:["\\( i < r \\)","\\( i > r \\)","\\( i = r \\)","\\( i + r = 90^\\circ \\)"], correctIndex:2, feedback:"The angle of incidence is exactly equal to the angle of reflection."},
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
{id:"g12-l1",gifUrl:"https://commons.wikimedia.org/wiki/Special:FilePath/Translational_motion.gif",title:"Lesson 1: Kinetic Theory of Ideal Gases",concepts:[],definitions:[],examples:[],
equations:[
{section:"Pressure",name:"Pressure in Kinetic Theory",formula:"\\( P = \\left(\\frac{2}{3}\\right)\\left(\\frac{N}{V}\\right)K_{av} \\)",symbols:[{symbol:"P",desc:"Pressure (Pa)"},{symbol:"N",desc:"Number of molecules"},{symbol:"V",desc:"Volume (m³)"},{symbol:"K_{av}",desc:"Average Kinetic Energy (J)"}]},
{section:"Pressure",name:"Pressure exerted on container walls",formula:"\\( P = \\frac{F}{A}, F = \\frac{\\Delta p}{\\Delta t}, \\Delta p = N m_0 \\Delta v \\)",symbols:[{symbol:"F",desc:"Force (N)"},{symbol:"A",desc:"Area (m²)"},{symbol:"Δp",desc:"Change in momentum (kg·m/s)"},{symbol:"Δt",desc:"Time interval (s)"}]},
{section:"Pressure",name:"Elastic collision",formula:"\\( P = \\frac{2 N m_0 v}{A \\Delta t} \\)",symbols:[{symbol:"m_0",desc:"Mass of one molecule (kg)"},{symbol:"v",desc:"Velocity (m/s)"}]},
{section:"Pressure",name:"Inelastic collision",formula:"\\( P = \\frac{N m_0 v}{A \\Delta t} \\)",symbols:[{symbol:"P",desc:"Pressure (Pa)"},{symbol:"N",desc:"Number of molecules"},{symbol:"m_0",desc:"Mass of one molecule (kg)"},{symbol:"v",desc:"Velocity (m/s)"},{symbol:"A",desc:"Area (m²)"},{symbol:"\\Delta t",desc:"Time interval (s)"}]},
{section:"Ideal Gas Laws",name:"Ideal Gases equation",formula:"\\( PV = nRT, PV = N k_B T \\)",symbols:[{symbol:"n",desc:"Number of moles (mol)"},{symbol:"R",desc:"Universal Gas Constant (8.31 J/mol·K)"},{symbol:"T",desc:"Temperature (K)"},{symbol:"k_B",desc:"Boltzmann constant (1.38×10⁻²³ J/K)"}]},
{section:"Ideal Gas Laws",name:"Combined gas law",formula:"\\( \\frac{P_1 V_1}{T_1} = \\frac{P_2 V_2}{T_2} \\)",symbols:[{symbol:"P_1, P_2",desc:"Initial/Final Pressure (Pa)"},{symbol:"V_1, V_2",desc:"Initial/Final Volume (m³)"},{symbol:"T_1, T_2",desc:"Initial/Final Temperature (K)"}]},
{section:"Ideal Gas Laws",name:"Isobaric process",formula:"\\( \\frac{V_1}{T_1} = \\frac{V_2}{T_2} \\)",symbols:[{symbol:"V_1, V_2",desc:"Initial/Final Volume (m³)"},{symbol:"T_1, T_2",desc:"Initial/Final Temperature (K)"}]},
{section:"Ideal Gas Laws",name:"Isochoric process",formula:"\\( \\frac{P_1}{T_1} = \\frac{P_2}{T_2} \\)",symbols:[{symbol:"P_1, P_2",desc:"Initial/Final Pressure (Pa)"},{symbol:"T_1, T_2",desc:"Initial/Final Temperature (K)"}]},
{section:"Ideal Gas Laws",name:"Isothermal process",formula:"\\( P_1 V_1 = P_2 V_2 \\)",symbols:[{symbol:"P_1, P_2",desc:"Initial/Final Pressure (Pa)"},{symbol:"V_1, V_2",desc:"Initial/Final Volume (m³)"}]},
{section:"Kinetic Energy & Speed",name:"Average kinetic Energy",formula:"\\( K_{av} = \\frac{1}{2}m_0(v^2)_{av} = \\frac{3}{2} \\frac{PV}{N} = \\frac{3}{2} k_B T \\)",symbols:[{symbol:"(v^2)_{av}",desc:"Average of velocity squared (m²/s²)"}]},
{section:"Kinetic Energy & Speed",name:"Total average kinetic Energy",formula:"\\( K = N K_{av} = \\frac{3}{2} N k_B T = \\frac{3}{2} nRT = \\frac{3}{2} PV \\)",symbols:[{symbol:"K",desc:"Total Kinetic Energy (J)"}]},
{section:"Kinetic Energy & Speed",name:"Root-mean-square speed",formula:"\\( v_{rms} = \\sqrt{(v^2)_{av}} = \\sqrt{\\frac{3 k_B T}{m_0}} = \\sqrt{\\frac{3RT}{M}} = \\sqrt{\\frac{3P}{\\rho}} \\)",symbols:[{symbol:"v_{rms}",desc:"Root-mean-square speed (m/s)"},{symbol:"M",desc:"Molar Mass (kg/mol)"},{symbol:"ρ",desc:"Density (kg/m³)"}]},
{section:"Fundamental Relations",name:"Number of moles",formula:"\\( n = \\frac{m}{M} = \\frac{N}{N_A} \\)",symbols:[{symbol:"m",desc:"Total mass (kg)"},{symbol:"N_A",desc:"Avogadro's Number (6.02×10²³ mol⁻¹)"}]},
{section:"Fundamental Relations",name:"Object’s mass",formula:"\\( m = n M = m_0 N \\)",symbols:[{symbol:"m",desc:"Total mass (kg)"},{symbol:"n",desc:"Number of moles (mol)"},{symbol:"M",desc:"Molar Mass (kg/mol)"},{symbol:"m_0",desc:"Mass of one molecule (kg)"},{symbol:"N",desc:"Number of molecules"}]},
{section:"Fundamental Relations",name:"Molar Mass",formula:"\\( M = m_0 N_A = \\frac{m}{n} \\)",symbols:[{symbol:"M",desc:"Molar Mass (kg/mol)"},{symbol:"m_0",desc:"Mass of one molecule (kg)"},{symbol:"N_A",desc:"Avogadro's Number (6.02×10²³ mol⁻¹)"},{symbol:"m",desc:"Total mass (kg)"},{symbol:"n",desc:"Number of moles (mol)"}]},
{section:"Fundamental Relations",name:"Mass molecules",formula:"\\( m_0 = \\frac{M}{N_A} = \\frac{m}{N} \\)",symbols:[{symbol:"m_0",desc:"Mass of one molecule (kg)"},{symbol:"M",desc:"Molar Mass (kg/mol)"},{symbol:"N_A",desc:"Avogadro's Number (6.02×10²³ mol⁻¹)"},{symbol:"m",desc:"Total mass (kg)"},{symbol:"N",desc:"Number of molecules"}]},
{section:"Fundamental Relations",name:"Universal Gas constant",formula:"\\( R = K_B N_A = 8.31 \\text{ J/mol.K} \\)",symbols:[{symbol:"R",desc:"Universal Gas Constant (8.31 J/mol·K)"},{symbol:"K_B",desc:"Boltzmann constant (1.38×10⁻²³ J/K)"},{symbol:"N_A",desc:"Avogadro's Number (6.02×10²³ mol⁻¹)"}]}
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
{id:"g12-l2",gifUrl:"https://commons.wikimedia.org/wiki/Special:FilePath/Boyles_Law_animated.gif",title:"Lesson 2: First Law of Thermodynamic",concepts:[],definitions:[],examples:[],
equations:[
{section:"Work Done",name:"Isobaric Process Work",formula:"\\( W = P \\Delta V \\)",symbols:[{symbol:"W",desc:"Work Done (J)"},{symbol:"P",desc:"Pressure (Pa)"},{symbol:"ΔV",desc:"Change in Volume (m³)"}]},
{section:"Work Done",name:"Linearly Process Work",formula:"\\( W = P_{av} \\Delta V \\)",symbols:[{symbol:"P_{av}",desc:"Average Pressure (Pa)"}]},
{section:"Work Done",name:"Isothermal Process Work",formula:"\\( W = nRT \\ln\\left(\\frac{V_f}{V_i}\\right) \\)",symbols:[{symbol:"V_f, V_i",desc:"Final/Initial Volume (m³)"}]},
{section:"Work Done",name:"Isochoric Process Work",formula:"\\( W = 0 \\)",symbols:[{symbol:"W",desc:"Work Done (J)"}]},
{section:"Internal Energy",name:"Internal energy",formula:"\\( U = \\frac{3}{2} nRT \\)",symbols:[{symbol:"U",desc:"Internal Energy (J)"}]},
{section:"Internal Energy",name:"Changing internal energy",formula:"\\( \\Delta U = U_f - U_i = \\frac{3}{2} nR\\Delta T \\)",symbols:[{symbol:"ΔU",desc:"Change in Internal Energy (J)"},{symbol:"ΔT",desc:"Change in Temperature (K)"}]},
{section:"Heat Transfer",name:"First law of thermodynamics",formula:"\\( Q = W + \\Delta U \\)",symbols:[{symbol:"Q",desc:"Heat added to system (J)"}]},
{section:"Heat Transfer",name:"Heat absorb",formula:"\\( Q = mc\\Delta T \\)",symbols:[{symbol:"m",desc:"Mass (kg)"},{symbol:"c",desc:"Specific heat capacity (J/kg·K)"}]},
{section:"Heat Transfer",name:"Latent Heat",formula:"\\( Q = mL \\)",symbols:[{symbol:"L",desc:"Specific latent heat (J/kg)"}]}
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
{id:"g12-l3",gifUrl:"https://commons.wikimedia.org/wiki/Special:FilePath/Carnot_cycle.gif",title:"Lesson 3: Heat Engine",concepts:[],definitions:[],examples:[],
equations:[
{section:"Heat Engine",name:"Conservation of energy (Engine)",formula:"\\( Q_h = W_M + Q_c \\)",symbols:[{symbol:"Q_h",desc:"Heat from hot reservoir (J)"},{symbol:"W_M",desc:"Mechanical Work Done (J)"},{symbol:"Q_c",desc:"Heat rejected to cold reservoir (J)"}]},
{section:"Heat Engine",name:"Ratio",formula:"\\( \\frac{Q_c}{Q_h} = \\frac{T_c}{T_h} \\)",symbols:[{symbol:"T_c",desc:"Cold reservoir temp (K)"},{symbol:"T_h",desc:"Hot reservoir temp (K)"}]},
{section:"Heat Engine",name:"Carnot efficiency",formula:"\\( e_c = \\frac{W_M}{Q_h} = 1 - \\frac{Q_c}{Q_h} = 1 - \\frac{T_c}{T_h} \\)",symbols:[{symbol:"e_c",desc:"Carnot/Ideal Efficiency (No unit)"}]},
{section:"Heat Engine",name:"Overall efficiency",formula:"\\( e = e_c \\times e_M = \\frac{W_U}{Q_h} \\)",symbols:[{symbol:"e",desc:"Overall efficiency (No unit)"},{symbol:"e_M",desc:"Mechanical efficiency (No unit)"},{symbol:"W_U",desc:"Useful Work (J)"}]}
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
{id:"g12-l4",gifUrl:"https://commons.wikimedia.org/wiki/Special:FilePath/Standing_wave_2.gif",title:"Lesson 4: Superposition and Waves",concepts:[],definitions:[],examples:[],
equations:[
{section:"Sinusoidal Wave",name:"Sinusoidal Wave equation",formula:"\\( y = a \\sin(\\omega t \\pm kx) \\)",symbols:[{symbol:"y",desc:"Displacement (m)"},{symbol:"a",desc:"Amplitude (m)"},{symbol:"ω",desc:"Angular frequency (rad/s)"},{symbol:"t",desc:"Time (s)"},{symbol:"k",desc:"Wave number (rad/m)"},{symbol:"x",desc:"Position (m)"}]},
{section:"Sinusoidal Wave",name:"Angular frequency",formula:"\\( \\omega = \\frac{2\\pi}{T}, k = \\frac{2\\pi}{\\lambda} \\)",symbols:[{symbol:"T",desc:"Period (s)"},{symbol:"λ",desc:"Wavelength (m)"}]},
{section:"Sinusoidal Wave",name:"Wave speed",formula:"\\( v = \\frac{x}{t} = \\frac{\\lambda}{T} = \\frac{\\omega}{k} \\)",symbols:[{symbol:"v",desc:"Wave speed (m/s)"}]},
{section:"Standing Wave",name:"Standing wave equation",formula:"\\( y = 2a \\sin(kx) \\cos(\\omega t) \\)",symbols:[{symbol:"y",desc:"Displacement of standing wave (m)"}]},
{section:"Standing Wave",name:"Minimum amplitude",formula:"\\( A = 0 \\Leftrightarrow \\sin(kx) = 0 \\Rightarrow x = n\\frac{\\lambda}{2} \\)",symbols:[{symbol:"A",desc:"Amplitude envelope (m)"},{symbol:"n",desc:"Integer (0, 1, 2...)"}]},
{section:"Standing Wave",name:"Maximum Amplitude",formula:"\\( A = \\pm 1 \\Leftrightarrow \\sin(kx) = \\pm 1 \\Rightarrow x = (2n + 1)\\frac{\\lambda}{4} \\)",symbols:[{symbol:"A",desc:"Amplitude envelope (m)"},{symbol:"n",desc:"Integer (0, 1, 2...)"},{symbol:"x",desc:"Position (m)"},{symbol:"λ",desc:"Wavelength (m)"}]}
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
{id:"g12-l5",gifUrl:"https://commons.wikimedia.org/wiki/Special:FilePath/Electric-generator-animation.gif",title:"Lesson 5: Magnetism & Induction",concepts:[],definitions:[],examples:[],
equations:[
{section:"Magnetic Field & Force",name:"Magnetic field (straight wire)",formula:"\\( B = \\frac{\\mu_0 I}{2\\pi d} \\)",symbols:[{symbol:"B",desc:"Magnetic Field (T)"},{symbol:"μ_0",desc:"Permeability of free space (4π×10⁻⁷ T·m/A)"},{symbol:"I",desc:"Current (A)"},{symbol:"d",desc:"Distance from wire (m)"}]},
{section:"Magnetic Field & Force",name:"Magnetic field (circular wire)",formula:"\\( B = \\frac{\\mu_0 NI}{2R} \\)",symbols:[{symbol:"R",desc:"Radius of coil (m)"},{symbol:"N",desc:"Number of turns"}]},
{section:"Magnetic Field & Force",name:"Magnetic field (solenoid)",formula:"\\( B = \\frac{\\mu_0 NI}{l} \\)",symbols:[{symbol:"l",desc:"Length of solenoid (m)"}]},
{section:"Magnetic Field & Force",name:"Lorentz force",formula:"\\( F = |q|vB \\sin(v, B) \\)",symbols:[{symbol:"F",desc:"Magnetic Force (N)"},{symbol:"q",desc:"Electric Charge (C)"},{symbol:"v",desc:"Velocity (m/s)"}]},
{section:"Magnetic Field & Force",name:"Two parallel wires",formula:"\\( F = \\frac{\\mu_0 I_1 I_2 l}{2\\pi a} \\)",symbols:[{symbol:"I_1, I_2",desc:"Currents (A)"},{symbol:"a",desc:"Distance between wires (m)"},{symbol:"l",desc:"Length of wire (m)"}]},
{section:"Magnetic Field & Force",name:"Wire in magnetic field",formula:"\\( F = IBl \\sin(l, B) \\)",symbols:[{symbol:"F",desc:"Magnetic Force on wire (N)"}]},
{section:"Magnetic Field & Force",name:"Solenoid number of turns",formula:"\\( N = \\frac{l'}{\\pi D} \\)",symbols:[{symbol:"l'",desc:"Length of wire (m)"},{symbol:"D",desc:"Diameter of solenoid (m)"}]},
{section:"Cyclotron Path",name:"Cyclotron Radius",formula:"\\( R = \\frac{mv}{|q|B} \\)",symbols:[{symbol:"m",desc:"Mass of particle (kg)"}]},
{section:"Cyclotron Path",name:"Cyclotron Period",formula:"\\( T = \\frac{2\\pi m}{|q|B} \\)",symbols:[{symbol:"T",desc:"Period of revolution (s)"}]},
{section:"Induced EMF",name:"Magnetic flux",formula:"\\( \\Phi = NBA \\cos(\\vec{B}, \\vec{n}) \\)",symbols:[{symbol:"Φ",desc:"Magnetic Flux (Wb)"},{symbol:"A",desc:"Area (m²)"},{symbol:"n",desc:"Normal vector"}]},
{section:"Induced EMF",name:"Average Induce emf",formula:"\\( E = -\\frac{\\Delta \\Phi}{\\Delta t} \\)",symbols:[{symbol:"E",desc:"Average Induced emf (V)"}]},
{section:"Induced EMF",name:"Magnitude of Induce emf",formula:"\\( e = -\\frac{d\\Phi}{dt} \\)",symbols:[{symbol:"e",desc:"Instantaneous Induced emf (V)"}]},
{section:"Induced EMF",name:"Moving conductor",formula:"\\( E = vBl \\sin(v, B) \\)",symbols:[{symbol:"E",desc:"Induced emf (V)"}]},
{section:"Induced EMF",name:"Generator",formula:"\\( e = NBA\\omega \\sin(\\omega t) \\)",symbols:[{symbol:"ω",desc:"Angular velocity (rad/s)"}]},
{section:"Self Induction & RL Circuit",name:"Self induced emf",formula:"\\( E = -L \\frac{\\Delta I}{\\Delta t}, e = -L \\frac{dI}{dt} \\)",symbols:[{symbol:"L",desc:"Inductance (H)"}]},
{section:"Self Induction & RL Circuit",name:"RL Circuit Voltage Equation",formula:"\\( V_{AB} = Ri + L\\frac{di}{dt} \\)",symbols:[{symbol:"V_{AB}",desc:"Voltage across RL circuit (V)"},{symbol:"i",desc:"Instantaneous current (A)"}]},
{section:"Self Induction & RL Circuit",name:"Instantaneous current (closed)",formula:"\\( i = I_p \\left(1 - e^{-\\frac{t}{\\tau}}\\right) \\)",symbols:[{symbol:"I_p",desc:"Peak Current (A)"},{symbol:"τ",desc:"Time constant (s)"}]},
{section:"Self Induction & RL Circuit",name:"Instantaneous current (opened)",formula:"\\( i = I_p e^{-\\frac{t}{\\tau}} \\)",symbols:[{symbol:"τ",desc:"Time constant (L/R) (s)"}]},
{section:"LC Oscillation",name:"LC Oscillation Energy",formula:"\\( E_{CL} = E_C + E_L = \\frac{1}{2}CV^2 + \\frac{1}{2}Li^2 = \\text{const} \\)",symbols:[{symbol:"E_{CL}",desc:"Total Energy (J)"},{symbol:"C",desc:"Capacitance (F)"},{symbol:"V",desc:"Voltage (V)"}]},
{section:"LC Oscillation",name:"Angular frequency (LC)",formula:"\\( \\omega_0 = \\frac{1}{\\sqrt{CL}} \\)",symbols:[{symbol:"ω_0",desc:"Resonant Angular Frequency (rad/s)"}]}
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
{id:"g12-l6",gifUrl:"https://commons.wikimedia.org/wiki/Special:FilePath/Alternating_current_ani.gif",title:"Lesson 6: Alternating Current",concepts:[],definitions:[],examples:[],
equations:[
{section:"AC Basics",name:"Instantaneous current",formula:"\\( i = i_m \\sin(\\omega t + \\phi_0) \\)",symbols:[{symbol:"i",desc:"Instantaneous current (A)"},{symbol:"i_m",desc:"Peak current (A)"},{symbol:"\\phi_0",desc:"Initial phase angle (rad)"}]},
{section:"AC Basics",name:"RMS Current",formula:"\\( I = \\frac{I_m}{\\sqrt{2}} \\)",symbols:[{symbol:"I",desc:"Root Mean Square Current (A)"}]},
{section:"AC Basics",name:"RMS Voltage",formula:"\\( V = \\frac{V_m}{\\sqrt{2}} \\)",symbols:[{symbol:"V",desc:"Root Mean Square Voltage (V)"},{symbol:"V_m",desc:"Peak voltage (V)"}]},
{section:"AC Basics",name:"Ohm's law",formula:"\\( I = \\frac{V}{Z}, I_m = \\frac{V_m}{Z} \\)",symbols:[{symbol:"Z",desc:"Impedance (Ω)"}]},
{section:"RLC Series Circuit",name:"RLC Maximum voltage",formula:"\\( V_m = \\sqrt{V_{Rm}^2 + (V_{Lm} - V_{Cm})^2} \\)",symbols:[{symbol:"V_{Rm}, V_{Lm}, V_{Cm}",desc:"Peak voltage across R, L, C (V)"}]},
{section:"RLC Series Circuit",name:"RLC RMS voltage",formula:"\\( V = \\sqrt{V_R^2 + (V_L - V_C)^2} \\)",symbols:[{symbol:"V_R, V_L, V_C",desc:"RMS voltage across R, L, C (V)"}]},
{section:"RLC Series Circuit",name:"Impedance Z",formula:"\\( Z = \\sqrt{R^2 + (Z_L - Z_C)^2} = \\sqrt{R^2 + \\left(L\\omega - \\frac{1}{C\\omega}\\right)^2} \\)",symbols:[{symbol:"R",desc:"Resistance (Ω)"},{symbol:"L",desc:"Inductance (H)"},{symbol:"C",desc:"Capacitance (F)"}]},
{section:"RLC Series Circuit",name:"Phase Angle",formula:"\\( \\tan \\phi = \\frac{Z_L - Z_C}{R} \\)",symbols:[{symbol:"\\phi",desc:"Phase angle between voltage & current (rad)"},{symbol:"Z_L",desc:"Inductive Reactance (Ω)"},{symbol:"Z_C",desc:"Capacitive Reactance (Ω)"}]},
{section:"RLC Series Circuit",name:"Power",formula:"\\( P = VI \\cos \\phi \\)",symbols:[{symbol:"P",desc:"Average Power (W)"},{symbol:"\\cos \\phi",desc:"Power factor (No unit)"}]},
{section:"Transformers",name:"Transformers Turn ratio",formula:"\\( K = \\frac{V_2}{V_1} = \\frac{n_2}{n_1} \\)",symbols:[{symbol:"K",desc:"Transformer Turn Ratio (No unit)"},{symbol:"V_1, V_2",desc:"Primary/Secondary Voltage (V)"},{symbol:"n_1, n_2",desc:"Primary/Secondary Turns"}]}
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
]}
]
};

// --- App State ---
let currentGrade = null;
let currentLesson = null;
let currentFlashcardIndex = 0;
let currentQuizIndex = 0;
let quizScore = 0;

// --- DOM Elements ---
const viewDashboard = document.getElementById('view-dashboard');
const viewLessons = document.getElementById('view-lessons');
const viewLessonDetail = document.getElementById('view-lesson-detail');
const homeBtn = document.getElementById('home-btn');
const backToLessonsBtn = document.getElementById('back-to-lessons-btn');

// --- Navigation ---
function showView(viewElement) {
    Array.from(document.querySelectorAll('.view')).forEach(el => el.classList.remove('active', 'hidden'));
    Array.from(document.querySelectorAll('.view')).forEach(el => {
        if(el !== viewElement) el.classList.add('hidden');
    });
    viewElement.classList.add('active');
    window.scrollTo(0, 0);
}

homeBtn.addEventListener('click', () => showView(viewDashboard));
backToLessonsBtn.addEventListener('click', () => showView(viewLessons));

// --- Grade Selection ---
Array.from(document.querySelectorAll('.grade-card')).forEach(card => {
    card.addEventListener('click', () => loadLessons(card.getAttribute('data-grade')));
});

function loadLessons(grade) {
    currentGrade = grade;
    document.getElementById('lessons-title').innerText = `Grade ${grade} Physics`;
    const container = document.getElementById('lesson-list-container');
    container.innerHTML = '';
    
    if (data[grade]) {
        data[grade].forEach(lesson => {
            const card = document.createElement('div');
            card.className = 'lesson-card';
            card.innerHTML = `
                <h3>${lesson.title}</h3>
                <p>${lesson.equations.length} Equations</p>
                <div class="card-footer">
                    <span>Start Lesson</span>
                    <i class="fa-solid fa-arrow-right"></i>
                </div>
            `;
            card.addEventListener('click', () => loadLessonDetail(lesson));
            container.appendChild(card);
        });
    }
    showView(viewLessons);
}

// --- Lesson Detail ---
function loadLessonDetail(lesson) {
    currentLesson = lesson;
    document.getElementById('lesson-detail-title').innerText = lesson.title;
    document.querySelector('.tab-btn[data-target="equations"]').click();
    
    const conceptsList = document.getElementById('lesson-concepts');
    conceptsList.innerHTML = (lesson.concepts || []).map(c => `<li>${c}</li>`).join('');
    
    const definitionsGrid = document.getElementById('lesson-definitions');
    definitionsGrid.innerHTML = (lesson.definitions || []).map(d => `
        <div class="definition-card"><h4>${d.term}</h4><p>${d.desc || ''}</p></div>
    `).join('');
    
    const examplesContainer = document.getElementById('lesson-examples');
    examplesContainer.innerHTML = (lesson.examples || []).map(e => `
        <div class="example"><h4>${e.title}</h4><p>${e.desc || e.content || ''}</p></div>
    `).join('');
    
    if(lesson.gifUrl) {
        document.getElementById('lesson-animation-section').style.display = 'block';
        document.getElementById('lesson-gif').src = lesson.gifUrl;
    } else {
        document.getElementById('lesson-animation-section').style.display = 'none';
        document.getElementById('lesson-gif').src = '';
    }
    
    if((lesson.concepts || []).length === 0 && (lesson.definitions || []).length === 0 && !lesson.gifUrl) {
        document.querySelector('.tab-btn[data-target="summary"]').classList.add('hidden');
    } else {
        document.querySelector('.tab-btn[data-target="summary"]').classList.remove('hidden');
    }

    const equationsGrid = document.getElementById('lesson-equations');
    let eqHTML = '';
    let currentSection = '';
    
    (lesson.equations || []).forEach(eq => {
        const section = eq.section;
        if (section && section !== currentSection) {
            currentSection = section;
            let sectionGraphic = '';
            if (section === "Resolving Force (Angle with horizontal axis)") {
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
            }
            eqHTML += `<div class="equation-section-title" style="grid-column: 1 / -1; margin-top: 2rem; margin-bottom: 0.5rem; border-bottom: 2px solid var(--cyan); padding-bottom: 0.5rem;"><h2 style="color: var(--primary-blue); font-size: 1.5rem;"><i class="fa-solid fa-layer-group"></i> ${currentSection}</h2>${sectionGraphic}</div>`;
        }
        
        eqHTML += `
        <div class="equation-card">
            <div class="eq-name">${eq.name}</div>
            <div class="eq-formula">${eq.formula}</div>
            <div class="eq-symbols">
                <p style="margin-bottom: 0.5rem; color: var(--text-muted); font-size: 0.85rem;">${eq.symbols && eq.symbols.length > 0 ? "Symbols breakdown & SI Units:" : ""}</p>
                <ul>
                    ${(eq.symbols || []).map(s => {
                        let desc = s.desc;
                        let match = desc.match(/ \(([^)]+)\)$/);
                        if (match) {
                            let unitStr = match[1];
                            if (unitStr !== "No unit") {
                                unitStr = unitStr.replace(/m³/g, 'm^3')
                                                 .replace(/m²/g, 'm^2')
                                                 .replace(/⁻⁷/g, '^{-7}')
                                                 .replace(/·/g, '\\cdot ')
                                                 .replace(/π/g, '\\pi ')
                                                 .replace(/×/g, '\\times ');
                                desc = desc.substring(0, match.index) + ` (\\(\\mathrm{${unitStr}}\\))`;
                            }
                        }
                        // Also ensure symbol has MathJax formatting
                        // Replace some greek letters if they were written as unicode
                        let sym = s.symbol.replace(/μ_0/g, '\\mu_0')
                                          .replace(/θ_c/g, '\\theta_c')
                                          .replace(/θ/g, '\\theta')
                                          .replace(/α/g, '\\alpha')
                                          .replace(/φ_0/g, '\\phi_0')
                                          .replace(/φ/g, '\\phi');
                        return `<li><strong>\\( ${sym} \\)</strong> : ${desc}</li>`;
                    }).join('')}
                </ul>
            </div>
        </div>
        `;
    });
    equationsGrid.innerHTML = eqHTML;
    
    document.querySelectorAll('.equation-card').forEach(card => {
        card.addEventListener('click', () => card.classList.toggle('expanded'));
    });
    
    if(window.MathJax) MathJax.typesetPromise();

    currentFlashcardIndex = 0;
    if(lesson.flashcards && lesson.flashcards.length > 0) {
        document.getElementById('tab-flashcards').classList.remove('hidden');
        document.querySelector('.tab-btn[data-target="flashcards"]').classList.remove('hidden');
        updateFlashcard();
    } else {
        document.querySelector('.tab-btn[data-target="flashcards"]').classList.add('hidden');
    }
    
    initQuiz();
    showView(viewLessonDetail);
}

// --- Tabs Logic ---
Array.from(document.querySelectorAll('.tab-btn')).forEach(btn => {
    btn.addEventListener('click', () => {
        Array.from(document.querySelectorAll('.tab-btn')).forEach(b => b.classList.remove('active'));
        Array.from(document.querySelectorAll('.tab-pane')).forEach(p => {
            p.classList.add('hidden');
            p.classList.remove('active');
        });
        btn.classList.add('active');
        const target = document.getElementById(`tab-${btn.getAttribute('data-target')}`);
        if(target) {
            target.classList.remove('hidden');
            target.classList.add('active');
        }
    });
});

// --- Flashcards Logic ---
const fcCard = document.getElementById('active-flashcard');
const fcFrontText = document.getElementById('fc-front-text');
const fcBackText = document.getElementById('fc-back-text');
const fcCounter = document.getElementById('fc-counter');

function updateFlashcard() {
    if (!currentLesson || !currentLesson.flashcards || !currentLesson.flashcards.length) return;
    fcCard.classList.remove('flipped');
    setTimeout(() => {
        const fc = currentLesson.flashcards[currentFlashcardIndex];
        fcFrontText.innerText = fc.front;
        fcBackText.innerHTML = fc.back;
        fcCounter.innerText = `${currentFlashcardIndex + 1} / ${currentLesson.flashcards.length}`;
        if(window.MathJax) MathJax.typesetPromise();
    }, 150);
}

document.getElementById('fc-flip-btn').addEventListener('click', () => fcCard.classList.toggle('flipped'));
fcCard.addEventListener('click', () => fcCard.classList.toggle('flipped'));
document.getElementById('fc-prev').addEventListener('click', () => { if (currentFlashcardIndex > 0) { currentFlashcardIndex--; updateFlashcard(); }});
document.getElementById('fc-next').addEventListener('click', () => { if (currentFlashcardIndex < currentLesson.flashcards.length - 1) { currentFlashcardIndex++; updateFlashcard(); }});

// --- Quiz Logic ---
function initQuiz() {
    currentQuizIndex = 0;
    quizScore = 0;
    if(!currentLesson.quiz || currentLesson.quiz.length === 0) {
        document.querySelector('.tab-btn[data-target="quiz"]').classList.add('hidden');
        return;
    }
    document.querySelector('.tab-btn[data-target="quiz"]').classList.remove('hidden');
    document.getElementById('quiz-question-container').classList.remove('hidden');
    document.getElementById('quiz-results-container').classList.add('hidden');
    loadQuizQuestion();
}

function loadQuizQuestion() {
    const q = currentLesson.quiz[currentQuizIndex];
    document.getElementById('quiz-progress-text').innerText = `Question ${currentQuizIndex + 1} of ${currentLesson.quiz.length}`;
    document.getElementById('quiz-question-text').innerHTML = q.question;
    const optionsContainer = document.getElementById('quiz-options');
    optionsContainer.innerHTML = '';
    const feedbackEl = document.getElementById('quiz-feedback');
    feedbackEl.classList.add('hidden');
    feedbackEl.className = 'quiz-feedback hidden';
    document.getElementById('quiz-next-btn').classList.add('hidden');
    
    q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option';
        btn.innerHTML = opt;
        btn.addEventListener('click', () => handleQuizAnswer(idx, btn));
        optionsContainer.appendChild(btn);
    });
    if(window.MathJax) MathJax.typesetPromise();
}

function handleQuizAnswer(selectedIndex, btnElement) {
    const q = currentLesson.quiz[currentQuizIndex];
    const optionsContainer = document.getElementById('quiz-options');
    Array.from(optionsContainer.children).forEach((child, idx) => {
        child.disabled = true;
        if (idx === q.correctIndex) child.classList.add('correct');
        else if (idx === selectedIndex) child.classList.add('wrong');
    });
    const feedbackEl = document.getElementById('quiz-feedback');
    feedbackEl.classList.remove('hidden');
    feedbackEl.innerHTML = q.feedback;
    if (selectedIndex === q.correctIndex) {
        quizScore++;
        feedbackEl.classList.add('correct-feedback');
    } else {
        feedbackEl.classList.add('wrong-feedback');
    }
    document.getElementById('quiz-next-btn').classList.remove('hidden');
    if(window.MathJax) MathJax.typesetPromise();
}

document.getElementById('quiz-next-btn').addEventListener('click', () => {
    currentQuizIndex++;
    if (currentQuizIndex < currentLesson.quiz.length) loadQuizQuestion();
    else showQuizResults();
});

function showQuizResults() {
    document.getElementById('quiz-question-container').classList.add('hidden');
    const resultsContainer = document.getElementById('quiz-results-container');
    resultsContainer.classList.remove('hidden');
    document.getElementById('quiz-score').innerText = quizScore;
    document.getElementById('quiz-total').innerText = currentLesson.quiz.length;
    const percentage = (quizScore / currentLesson.quiz.length) * 100;
    const msgEl = document.getElementById('quiz-result-message');
    if (percentage === 100) msgEl.innerText = "Excellent! You mastered this topic.";
    else if (percentage >= 50) msgEl.innerText = "Good job! Keep practicing to get a perfect score.";
    else msgEl.innerText = "You might want to review the summary and flashcards before trying again.";
}

document.getElementById('quiz-retry-btn').addEventListener('click', initQuiz);

window.addEventListener('scroll', () => {
    if (viewLessonDetail.classList.contains('active')) {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        document.getElementById('reading-progress').style.width = height <= 0 ? "100%" : scrolled + "%";
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

let geminiApiKey = localStorage.getItem('gemini_api_key') || '';

if (geminiApiKey) {
    aiKeySetup.style.display = 'none';
    aiInputArea.style.display = 'flex';
}

aiToggleBtn.addEventListener('click', () => {
    aiWidget.classList.remove('ai-widget-collapsed');
});

aiCloseBtn.addEventListener('click', () => {
    aiWidget.classList.add('ai-widget-collapsed');
});

aiSaveKeyBtn.addEventListener('click', () => {
    const key = aiApiKeyInput.value.trim();
    if (key) {
        geminiApiKey = key;
        localStorage.setItem('gemini_api_key', key);
        aiKeySetup.style.display = 'none';
        aiInputArea.style.display = 'flex';
        aiApiKeyInput.value = '';
    }
});

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
        if (window.MathJax) MathJax.typesetPromise();
    }
}

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
