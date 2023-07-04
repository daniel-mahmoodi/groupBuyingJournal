from scipy.optimize import minimize

print("Optimal Solution:1")


# Define the objective function
def objective(x):
    return -(x[0] ** 2 + x[1] ** 2)


print("Optimal Solution:1")


# Define the constraint function

def constraint1(x):
    if x[0] + x[1]-1:
        print('error1')
        return x[0] + x[1] - 1
def constraint2(x):
    if x[0] + x[1]-1:
        print('error2')
        return x[0] + x[1] - 1
# Define the initial guess
x0 = [0, 0]
print("Optimal Solution:1")
# Define the bounds for variables
bounds = [(0, None), (0, None)]
print("Optimal Solution:2")
# Define the constraint dictionary
constraint_dict = {'type': 'eq', 'fun': constraint}
print("Optimal Solution:3")
# Perform the optimization
result = minimize(objective, x0, method='SLSQP', bounds=bounds, constraints=constraint_dict)

# Print the optimal solution
print("Optimal Solution:")
print(result.x)
