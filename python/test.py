from pulp import LpMaximize, LpProblem, LpVariable, value

# Create the maximization problem
problem = LpProblem("IntegerMaximizationProblem", LpMaximize)

# Define the decision variables
x = LpVariable("x", lowBound=0, cat='Integer')
y = LpVariable("y", lowBound=0, cat='Integer')

# Define the objective function
objective = 2*x + 3*y
problem += objective

# Add constraints
problem += x + y <= 10
problem += y - x <= 1
# Solve the problem
status = problem.solve()

# Check the solution status
if status == 1:
    # Print the optimal solution
    print("Optimal Solution:")
    print("x =", value(x))
    print("y =", value(y))
    print("Objective =", value(objective))
else:
    print("No solution found.")
