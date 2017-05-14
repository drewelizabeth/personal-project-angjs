select users.first_name, conditions.name from connections
join users
on users.id = connections.friend_id
join friend_condition
on users.id = friend_condition.friend_id
join conditions 
on conditions.id = friend_condition.cond_id
where connections.mom_id = $1 and conditions.name = $2