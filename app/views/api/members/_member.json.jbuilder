json.extract! member, :id, :group_id, :user_id
json.name member.user.name
json.photoUrl url_for(member.user.photo)