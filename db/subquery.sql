
SELECT *
FROM post
WHERE post_name = $1( SELECT customers_name  from customers   WHERE customer_email = $2 );