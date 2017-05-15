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

create table conditions (
  id serial primary key,
  name varchar(50)
)

create table connections (
  id serial primary key,
  mom_id integer references users(id),
  friend_id integer references users(id)
)

create table mom_condition (
  id serial primary key,
  mom_id integer references users(id),
  cond_id integer references conditions(id)
)

create table friend_condition (
  id serial primary key,
  friend_id integer references users(id),
  cond_id integer references conditions(id)
)

create table services (
  id serial primary key,
  service varchar(50),
  cost integer
  
)