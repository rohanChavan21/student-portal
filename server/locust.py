import time
from locust import HttpUser, task, between

class WebsiteUser(HttpUser):
    wait_time = between(1, 5)

    @task
    def course_page(self):
        self.client.get(url="/getcourses")
    
    @task
    def paper_page(self):
        self.client.get(url="/getquestionpapers")
