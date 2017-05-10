create table users (
  id serial primary key,
  first_name varchar(50),
  last_name varchar(50),
  username varchar(50),
  password varchar(20),
  zipcode varchar(5),
  duedate date,
  multiples boolean,
  kids boolean
)


-- create table momdetails (
--   id serial primary key,
--   duedate date,
--   multiples boolean,
--   kids boolean,
--   id integer references users(id)
-- )