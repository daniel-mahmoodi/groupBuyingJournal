# from pyomo.environ import ConcreteModel, Var, Objective, Constraint, NonNegativeIntegers, NonNegativeReals, minimize, SolverFactory
# from pyomo.environ import ConcreteModel, Var, Objective, Constraint, NonNegativeIntegers, NonNegativeReals
# from pyomo.opt import SolverFactory
from pyomo.environ import ConcreteModel, Var, Objective, Constraint, NonNegativeIntegers, NonNegativeReals
from pyomo.opt import SolverFactory

# Create the concrete model
model = ConcreteModel()

# Define the variables
model.x = Var(domain=NonNegativeIntegers)  # Integer variable
model.y = Var(domain=NonNegativeReals)  # Continuous variable
model.z = Var(domain=NonNegativeReals)  # Continuous variable

# Define the objective function
model.objective = Objective(expr=model.x + model.y + model.z, sense=minimize)

# Add constraints
model.constraint1 = Constraint(expr=model.x + model.y <= 10)
model.constraint2 = Constraint(expr=model.x * model.z >= 5)

# Solve the problem
solver = SolverFactory('glpk')  # Choose an appropriate solver
results = solver.solve(model)

# Check the solution status
if results.solver.termination_condition == "optimal":
    # Print the optimal solution
    print("Optimal Solution:")
    print("x =", model.x.value)
    print("y =", model.y.value)
    print("z =", model.z.value)
    print("Objective =", model.objective())
else:
    print("No solution found.")
