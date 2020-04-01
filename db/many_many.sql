CREATE TABLE customers (
    customer_id SERIAL PRIMARY KEY,
    customer_email VARCHAR(250),
    customer_password VARCHAR(250),
    profile_pic VARCHAR(400)
)

CREATE TABLE post (
    post_id SERIAL PRIMARY KEY,
    post_name VARCHAR(250),
    customer_id INT REFERENCES users (user_id)
)

CREATE TABLE savedRecipes(
    post_id INT REFERENCES post(post_id),
     customer_id INT REFERENCES customer(cutomer_id)
)
