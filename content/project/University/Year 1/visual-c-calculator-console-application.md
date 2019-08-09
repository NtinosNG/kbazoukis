+++
categories = ["Programming"]
date = "2019-08-09T00:00:00+03:00"
description = ""
draft = true
img_preview = "/uploads/placeholder.jpg"
postType = "Project"
subtitle = "Introductory assignment aimed to teach how to design, develop and test small scale computer programs."
tags = ["University"]
title = "Visual C# Calculator (Console Application)"

+++
Task
Throughout the opening five weeks of this module, we cover the fundamentals required for imperative and procedural-based programming. This can be broken down into the core topics of the Programming I syllabus:
- Variables and Expressions
- Conditionals (IF, SWITCH)
- Loops (FOR, WHILE)
- Methods and Program Structure
We will now explore all of these topics within the confines of a specific exercise that utilises all programming skills you have learned thus far.
Note: Upon first reading this document, it might not be immediately clear how to proceed with this assessed component. If this is the case, there is no need to panic: while it may not be obvious at first, all of the learning material required to cover this assignment is provided in the first four weeks of the module. Attendance in lectures during this period, as well as reading the provided material and trying your hand at the practice exercises will prepare you adequately for this exercise.
My First Calculator
Undoubtedly one of the first computation-based device many people use as part of their schooling is a calculator. While we may not consider them as such, calculators are computational devices and require programming for them to work. As such, your task is to build a mixture of both basic and advanced programming functions to run via a console prompt.
In an effort not only to formalise the assessment process, but also given some guidance, sample code is provided for this assessed component on Course Resources.
Part 1 – How The Calculator Works
Our calculator is reliant upon one sole public method Calculate. This method has the following structure:
public string Calculate(double number, char operator)
{
//Code missing here.
}
This method is assumed to be taking in the individual values and operators needed by the calculator. By calling this method, it will continue to remember what the ongoing calculation is and will return the current accumulator which represents the current answer of the calculation as a string. An example of how to use this calculator in the Main method is shown below:
Calculator myCalculator = new Calculator();
string s1 = myCalculator.Calculate(3, ‘+’); //s1 = “3”
string s2 = myCalculator.Calculate(3, ‘=’); //s2 = “6”
string s3 = myCalculator.Calculate(4, ‘-‘); //s3 = “4”
Programming Assignment 3 Programming 1 4CC510
string s4 = myCalculator.Calculate(2, ‘=’); //s4 = “2”
As you can see, at every method call the calculator returns the current accumulator, the actual value still being stored. It will then either use this value to calculate the next step until a terminal operator is entered. The first terminal character we introduce is ‘=’, at which point it will then calculate the final answer. However, there are several terminal characters introduced further down in this exercise. In addition, should you attempt to do something that is an illegal operation, such as dividing by zero, then it should return the string “ERROR”, as shown below:
Calculator myCalculator = new Calculator();
string s1 = myCalculator.Calculate(3, ‘/’); //s1 = “3”
string s2 = myCalculator.Calculate(0, ‘=’); //s2 = “ERROR”
As part of the existing code, we have provided the method signature, but it is up to you to write the code for this method.
Part 2 – Making the Calculations
While the Calculate method helps return the current state of the calculator, it is not responsible for each individual operation. As a result, you need to write a series of methods in order for this to work. These are broken down into basic and advanced calculator functions.
To help you get started, we provide the first function: Add
private double Add(double number1, double number2)
{
double output = number1 + number2;
output = Math.Round(output, 2);
return output;
}
This method takes two numbers and adds them together. It also ensures that any output is returned at most to two decimal places. Note that all calculator methods must return numbers rounded to two decimal places. In addition, note that we do not dictate when that method is called, you must figure out in the Calculate method, when Add needs to be called. It is a private method, meaning we cannot call this method from outside of the Calculator class. It is called once the ‘+’ command has been entered in the Calculate method.
With this provided as guidance, you must complete the following additional functions:
Basic Functions
- double Subtract(double, double): Taking two numbers, calculate the subtraction between the two.
o Is called when the ‘-‘ character is used in Calculate.
- double Multiply(double, double): Return the product of multiplying two numbers.
o Is called when the ‘*’ character is used in Calculate.
Programming Assignment 4 Programming 1 4CC510
- double Divide(double, double): Returns the product of dividing the first number by the second.
o Is called when the ‘/’ character is used in Calculate.
Advanced Functions
- int Factorial(int): Taking in a non-negative integer, calculate the Factorial of the number: the product of all positive integers less than or equal to it.
o Is called when the ‘!’ character is used in Calculate.
o Note: ‘!’ is a terminal character and will end the current calculation.
- double Power(double, double): Calculates the first number to the power of the second number.
o e.g.: Power(2,3) will return 8, given 8 is 23.
o Is called when the ‘^’ character is used in Calculate.
o Note: There is existing code in the C# language to calculate numbers to a specific power.
- double Root(double): Calculate the square root of a given number.
o Is called when the ‘\’ character is used in Calculate.
o Note: There is existing code in the C# language to calculate the square root of a number.
o Note: ‘\’ is a terminal character and will end the current calculation.
- double Modulus(double, double): Calculates the modulus of a given number: the remainder after having divided a first number by the second. This is once again something that is provided for as a C# operator.
o Is called when the ‘%’ character is used in Calculate.
Part 3 – Testing
As part of this assignment, a sample solution, complete with the starting code for Calculate and Add is available from week 3 of the semester. Allowing you four weeks to ensure your code is compliant with this test solution.
In this solution, you can run your code in specific circumstances thousands of times, to ascertain how effective it is in certain problems. The sample version released will test a large number of combinations of values and basic functions, resulting in a total success rate. The total success rate of these tests will be displayed on screen when you run the solution as well as indicating the success rate of specific test types (Additions, Subtractions etc.) You can then use this to focus on what parts of the code base are not working correctly.
Note that the solution provided does not handle testing for advanced functions. Should you wish to test these it is your responsibility to write this test code.
A final testing solution, in which you should copy your Calculator.cs file, will be made available in week 6. This is the final testing solution that you must submit your calculator in. The total success rate, as indicated by this final testing solution, will account for 80% for this assessed component, with the final 20% an assessment of your coding style. This will be achieved by scoring you against
Programming Assignment 5 Programming 1 4CC510
a range of basic and advanced functions as well as combinations of the two in the same mathematical expression.