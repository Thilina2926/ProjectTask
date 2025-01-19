from multiprocessing import AuthenticationError
from flask import Flask, request, jsonify
import requests  # Import requests module
import pandas as pd
import pickle
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import linear_kernel
import firebase_admin
from firebase_admin import auth
from firebase_admin import credentials, firestore
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
FIREBASE_API_KEY = "AIzaSyAXPAPyBbVHWVd8ANqFxZc4Y7rjq9KgUEs"



cred = firebase_admin.credentials.Certificate("./maad-bb9db-firebase-adminsdk-yh0j6-91ff366a41.json")
firebase_admin.initialize_app(cred)
db = firestore.client()

@app.route('/register', methods=['POST'])
def register():
    try:
        # Retrieve data from the request
        first_name = request.json.get('firstName')
        last_name = request.json.get('lastName')
        phone_number = request.json.get('phone')
        address = request.json.get('address')
        email = request.json.get('email')
        course = request.json.get('course')
        gender = request.json.get('gender')
        activities = request.json.get('activities')
        image = request.json.get('image')
        document = request.json.get('document')
        user_data = {
            "firstName": first_name,
            "lastName": last_name,
            "phone": phone_number,
            "address": address,
            "email": email,
            "course": course,
            "gender": gender,
            "activities": activities,
            "image": image,
            "document": document
        }
        db.collection("users").document(email).set(user_data)

        return jsonify({ "message": "User registered successfully!"}), 200
        
    except Exception as e:
        return jsonify({"error": str(e)}), 500

    

@app.route('/login', methods=['POST'])
def login():
    try:
        email = request.json.get('email')
        password = request.json.get('password')

        # Sign in user with email and password using Firebase Authentication REST API
        login_url = f"https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key={FIREBASE_API_KEY}"
        data = {
            "email": email,
            "password": password,
            "returnSecureToken": True
        }
        response = requests.post(login_url, json=data)
        response_data = response.json()

        if 'idToken' in response_data:
            return jsonify({"token": response_data['idToken']}), 200
        else:
            return jsonify({"error": response_data['error']['message']}), 400

    except Exception as e:
        return jsonify({"error": str(e)}), 500
    

@app.route('/recommend', methods=['POST'])
def recommend_movies():
    try:
        
        token = request.json.get('Authorization')
        # token = request.headers.get('Authorization')
        decoded_token = auth.verify_id_token(token)
        return jsonify({"message": "Recommendation logic goes here"}), 200

    except auth.InvalidIdTokenError:
        # If token is invalid, return an unauthorized error
        return jsonify({"error": "Unauthorized"}), 401

    except Exception as e:
        return jsonify({"error": str(e)}), 500
    
if __name__ == '__main__':
    app.run(debug=True)
