from scipy.optimize import minimize

# Define the objective function
def objective(x):
    return x[0]**2 + x[1]**2 + x[2]**2

# Define the constraint function
def constraint(x):
    return x[0] + x[1] + int(x[2]) - 1

# Define the integer constraint function
# def integer_constraint(x):
#     return x[2] - int(x[2])

# Define the initial guess
x0 = [0, 0, 0]

# Define the bounds for variables
bounds = [(0, None), (0, None), (0, None)]

# Define the constraint dictionary
constraint_dict = [
    {'type': 'eq', 'fun': constraint},
    # {'type': 'eq', 'fun': integer_constraint}
]

# Perform the optimization
result = minimize(objective, x0, method='SLSQP', bounds=bounds, constraints=constraint_dict)

# Print the optimal solution
print("Optimal Solution:")
print(result.x)
