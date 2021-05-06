import requests
import json

questionUrl = "http://localhost:3000/api/question?id="
# test question content
for i in range(1, 11):
    response = requests.get(questionUrl +str(i))
    response.encoding = 'utf-8'
    print(response.content)
# test report of 3 levels
reportUrl = "http://localhost:3000/api/report?correctNum="
for i in range(1, 11):
    response = requests.get(reportUrl + str(i))
    response.encoding = 'utf-8'
    print(response.content)
url = "http://localhost:3000/api/submit"
data = {
    "questionId": 1,
    "isCorrect": True
}
# before a post request
beforePost = requests.get(questionUrl + "1").text
answerNumBefore = json.loads(beforePost)['historyAnswerNum']
answerCorrectNumBefore = json.loads(beforePost)['historyCorrectNum']

response = requests.post(url, data=json.dumps(data), headers={"Content-Type": "application/json"})
assert (response.text == 'ok')
# after a post request
response = requests.get(questionUrl + "1").text
# after a post request
afterPost = requests.get(questionUrl + "1").text
answerNumAfter = json.loads(afterPost)['historyAnswerNum']
answerCorrectNumAfter = json.loads(afterPost)['historyCorrectNum']
assert (answerCorrectNumAfter == answerCorrectNumBefore + 1)
assert (answerNumAfter == answerNumBefore + 1)

