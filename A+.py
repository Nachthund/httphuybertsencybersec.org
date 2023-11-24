from IPython.display import display, HTML
import random

# Function to display questions and options
def display_question(q_text, options, correct_answer):
    q_text = "<h2>" + q_text + "</h2>"
    display(HTML(q_text))

    options_list = ["<input type='radio' name='answer' value='" + str(i) + "'> " + str(options[i]) + "<br>" for i in range(len(options))]
    options_text = "".join(options_list)
    display(HTML(options_text))

# Function to check the user's answer
def check_answer(correct_answer, user_answer):
    if user_answer == correct_answer:
        return True
    else:
        return False

# List of quiz questions
questions = [
    {"question": "What is the capital of France?", "options": ["New York", "Paris", "Berlin", "Madrid"], "answer": 1},
    {"question": "Which country does the Niagara Falls belong to?", "options": ["Canada", "United States", "Both"], "answer": 2},
    {"question": "Which is the largest ocean in the world?", "options": ["Atlantic", "Pacific", "Indian", "Southern"], "answer": 0},
    {"question": "What is the chemical symbol for Gold?", "options": ["Au", "Hg", "Fe", "Ni"], "answer": 0},
    {"question": "What is the official language of India?", "options": ["Hindi", "English", "Both"], "answer": 2}
]

# Display a question from the list
question = random.choice(questions)
display_question(question["question"], question["options"], question["answer"])

# Get the user's answer
user_answer = int(input("Enter the number of the correct answer: "))

# Check if the user's answer is correct
is_correct = check_answer(question["answer"], user_answer)

if is_correct:
    print("Correct! Great job!")
else:
    print("Incorrect. The correct answer is option number " + str(question["answer"] + 1) + ".")